import copy
import hashlib
import io
import json
import os
import pickle
import re
import time
from pathlib import Path
import typing
from abc import ABCMeta, abstractmethod

import requests
from redis import StrictRedis
from requests import Session


class SessionManager(metaclass=ABCMeta):
    @abstractmethod
    def store_session(self, session: Session):
        raise NotImplementedError

    @abstractmethod
    def load_session(self, **kwargs):
        raise NotImplementedError


class RedisSessionManager(SessionManager):
    def __init__(self, username):
        self._redis = StrictRedis()
        self._redis_key = f"weibo:login:{username}"

    def store_session(self, session: Session):
        oo = io.BytesIO()
        pickle.dump(session, oo)
        self._redis.set(self._redis_key, oo.getvalue())

    def load_session(self, **kwargs) -> typing.Union[Session, None]:
        value = self._redis.get(self._redis_key)
        if not value:
            return None
        return pickle.loads(value)


def jsoncallback_str2json(text: str) -> dict:
    return json.loads(re.search(r"\(({.*?})\)", text).group(1))


class WeiboLoginScanQrCode(object):
    def __init__(self, session_manager: SessionManager = None, **kwargs):
        self.session_manager = session_manager
        self.session = (session_manager and session_manager.load_session(**kwargs)) or requests.session()
        headers = {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'Sec-Fetch-Dest': 'script',
            'Sec-Fetch-Mode': 'no-cors',
            'Sec-Fetch-Site': 'cross-site',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
        }
        self.session.headers.update(headers)

    def _is_login(self):
        response = self.session.get("https://security.weibo.com/account/security", allow_redirects=False)
        return response.status_code == 200

    def _download_qr_image(self) -> tuple:
        """
        :return: (二维码图片绝对路径, qrid)
        """
        response = self.session.get(
            "https://login.sina.com.cn/sso/qrcode/image?entry=sinawap&size=180&callback=STK_%s" % (
                int(time.time() * 1000)))
        data = jsoncallback_str2json(response.text)['data']
        qrid = data['qrid']
        res = self.session.get(data['image'])
        file = os.path.join(os.path.expanduser('~'), hashlib.md5(str(time.time()).encode()).hexdigest() + ".png")
        Path(file).write_bytes(res.content)
        return file, qrid

    def _wait_for_scan(self, file: str, qrid: str) -> str:
        """
        :param file: 图片绝对路径
        :param qrid: qrid
        :return: 登录的alt
        """
        command = f'start "Pillow" /WAIT "{file}" && ping -n 2 127.0.0.1 >NUL && del /f "{file}"'
        os.system(command)

        alt = ""
        while True:
            res = self.session.get(
                "https://login.sina.com.cn/sso/qrcode/check?entry=sinawap&qrid={}&callback=STK_{}".format(
                    qrid, int(time.time() * 1000)))
            res_json = json.loads(re.search(r"\(({.*?})\)", res.text).group(1))
            if res_json['retcode'] == 50114003:
                print(res_json['msg'])
                break

            if res_json['retcode'] == 20000000:
                print("扫码成功!")
                alt = res_json["data"]["alt"]
                break

            time.sleep(1)

        if not alt:
            print("登录失败!")
            exit(0)

        return alt

        # def _visitor(self):
        #     """
        #     模拟访客，新浪访客系统
        #     :return:
        #     """
        #     gen_visotor_url = "https://passport.weibo.com/visitor/genvisitor"
        #     data = {'cb': 'gen_callback',
        #             'fp': '{"os":"1","browser":"Chrome95,0,4638,69","fonts":"undefined","screenInfo":"1536*864*24","plugins":"Portable Document Format::internal-pdf-viewer::PDF Viewer|Portable Document Format::internal-pdf-viewer::Chrome PDF Viewer|Portable Document Format::internal-pdf-viewer::Chromium PDF Viewer|Portable Document Format::internal-pdf-viewer::Microsoft Edge PDF Viewer|Portable Document Format::internal-pdf-viewer::WebKit built-in PDF"}'}
        #     response = self.session.post(gen_visotor_url, data=data)
        #     tid = re.search('"tid":"(.*?)"', response.text).group(1)
        #     tid = re.sub(r"\\/", "/", tid)
        #     self.session.cookies.set("tid", tid + "__095", domain='.passport.weibo.com', path='/visitor')
        #
        #     params = {"a": "incarnate",
        #               "t": tid,
        #               "w": "2",
        #               "c": "095",
        #               "gc": "",
        #               "cb": "cross_domain",
        #               "from": "weibo",
        #               "_rand": "0.5799231670299148"}
        #     self.session.get("https://passport.weibo.com/visitor/visitor", params=params, allow_redirects=False)

        # self.session.get("https://weibo.com", allow_redirects=False)

    def login(self):
        """
        :return: 登录成功的session
        """
        if self._is_login():
            print("cookie有效!")
            return self.session

        print("不存在cookie或cookie过时!，重新登录!")
        file, qrid = self._download_qr_image()
        alt = self._wait_for_scan(file, qrid)
        response = self.session.get(
            f"https://login.sina.com.cn/sso/login.php?entry=sinawap&returntype=TEXT&crossdomain=1&cdult=3&domain=weibo.com&alt={alt}&savestate=30&callback=STK_{int(time.time() * 1000)}")

        data = jsoncallback_str2json(response.text)
        cross_domain_urls, uid, nick = data["crossDomainUrlList"], data['uid'], data['nick']
        for url in cross_domain_urls:
            self.session.get(url)

        self._cross_domain()
        self.session.get("https://weibo.com/newlogin?tabtype=weibo&gid=102803&url=https%3A%2F%2Fweibo.com%2F")

        self.session.headers["traceparent"] = "00-46d545e2f58917a67fed36addafd5996-7072876a58e5ea30-00"
        self.session.headers['x-xsrf-token'] = self.session.cookies.get('XSRF-TOKEN')

        if self._is_login():
            print("访问安全页面")

        print(f"uid: {uid}, nickname: {nick}, 登录成功!")

        if self.session_manager:
            self.session_manager.store_session(self.session)

        return self.session

    def _cross_domain(self):
        """
        默认cookie是.login.sina.com，我们设置成所有网站
        :return:
        """
        cookies = copy.deepcopy(self.session.cookies)
        for k, v in cookies.items():
            self.session.cookies.set(k, v)


if __name__ == '__main__':
    s = RedisSessionManager(18280484271)
    session = WeiboLoginScanQrCode(session_manager=s).login()
