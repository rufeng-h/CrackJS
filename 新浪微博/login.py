"""
 author rufeng
 date 2021/11/08/17:58
 description 
"""
import copy
import json
import re
import time
from scrapy import Selector

import requests
import base64
from urllib.parse import quote


def enc_username(username: str) -> str:
    return base64.b64encode(username.encode()).decode()


def timestamp():
    return int(time.time() * 1000)


def pre_login(username: str) -> tuple:
    tmp_headers = copy.copy(headers)
    tmp_headers["Host"] = "login.sina.com.cn"
    tmp_headers["Referer"] = "https://weibo.com/"
    url = "https://login.sina.com.cn/sso/prelogin.php?entry=weibo&callback=sinaSSOController.preloginCallBack&su={}&rsakt=mod&checkpin=1&client=ssologin.js(v1.4.19)&_{}"
    response = session.get(url.format(enc_username(username), timestamp()), headers=tmp_headers)
    data = json.loads(re.search('({.*?})', response.text).group(1))
    return data.get("servertime"), data.get("pcid"), data.get("nonce"), data.get("pubkey"), data.get("rsakv"), data.get(
        'exectime')


def do_login(username, password, servertime, nonce, rsakv, pubkey, exce_time, pre_login_time_start):
    enc_pwd = session.post("http://127.0.0.1:8000",
                           data={"password": password, "servertime": servertime, "nonce": nonce, "pubkey": pubkey}).text
    formdata = {"entry": "weibo",
                "gateway": "1",
                "from": "",
                "savestate": "7",
                "qrcode_flag": "false",
                "useticket": "1",
                "pagerefer": "https://weibo.com/newlogin?tabtype=weibo&gid=102803&url=https%3A%2F%2Fwww.weibo.com%2F",
                "vsnf": "1",
                "su": enc_username(username),
                "service": "miniblog",
                "servertime": servertime,
                "nonce": nonce,
                "pwencode": "rsa2",
                "rsakv": rsakv,
                "sp": enc_pwd,
                "sr": "1536*864",
                "encoding": "UTF-8",
                "prelt": timestamp() - pre_login_time_start - exce_time,
                "url": "https://weibo.com/ajaxlogin.php?framelogin=1&callback=parent.sinaSSOController.feedBackUrlCallBack",
                "returntype": "META"}
    # time.sleep(2)
    login_headers = copy.copy(headers)
    login_headers["Host"] = "login.sina.com.cn"
    login_headers["Referer"] = "https://weibo.com/"
    login_headers['Origin'] = 'https://weibo.com'
    return session.post("https://login.sina.com.cn/sso/login.php?client=ssologin.js(v1.4.19)", data=formdata,
                        headers=login_headers)


def redirect(url):
    tmp_headers = copy.copy(headers)
    tmp_headers['Host'] = 'weibo.com'
    tmp_headers['Referer'] = 'https://login.sina.com.cn/'
    response = session.get(url, headers=tmp_headers)

    token = re.search('token=(.*?)"', response.text).group(1)

    target_url = json.loads(re.search("\(({.*?})\)", response.text).group(1))["protection_url"]

    tmp_headers['Host'] = "passport.weibo.com"
    tmp_headers['Referer'] = "https://weibo.com/"
    response = session.get(target_url, headers=tmp_headers)
    html = response.content.decode()
    selector = Selector(text=html)
    encrypt_mobile = selector.xpath('//input[@name="encrypt_mobile"]/@value').extract_first()
    tmp_headers[
        'Referer'] = "Referer: https://passport.weibo.com/protection/index?token={}&callback_url=https%3A%2F%2Fweibo.com".format(
        token)
    tmp_headers['Host'] = "passport.weibo.com"
    tmp_headers['Origin'] = 'https://passport.weibo.com'
    ret = session.post("https://passport.weibo.com/protection/mobile/sendcode?token={}".format(token),
                       data={"encrypt_mobile": encrypt_mobile}, headers=tmp_headers).json()
    if ret['retcode'] != 20000000:
        print("验证码发送失败!")
        print(ret["msg"])
        exit(0)

    redirect_url = ''
    while True:
        code = input("请输入收到的手机验证码：")

        ret = session.post("https://passport.weibo.com/protection/mobile/confirm?token={}".format(token),
                           headers=tmp_headers, data={"encrypt_mobile": encrypt_mobile,
                                                      "code": code}).json()
        if ret['code'] != 20000000:
            print(ret['msg'])
            continue

        redirect_url = ret['data']["redirect_url"]
    if not redirect_url:
        exit(0)

    tmp_headers.pop("Origin")
    tmp_headers['Host'] = "login.sina.com.cn"
    tmp_headers['Referer'] = "https://passport.weibo.com/"
    response = session.get(redirect_url, headers=tmp_headers)
    url = re.search('location\.replace\("(.*?)"\)', response.content.decode("gbk")).group(1)
    tmp_headers['Referer'] = redirect_url

    response = session.get(url, headers=tmp_headers)
    d = json.loads(re.search('\(({.*?})\)', response.text).group(1))
    url = d['arrURL'][
              0] + "&callback=sinaSSOController.doCrossDomainCallBack&scriptId=ssoscript0&client=ssologin.js(v1.4.19)&_={}".format(
        int(time.time() * 1000))
    tmp_headers['Host'] = 'passport.weibo.com'
    tmp_headers['Referer'] = 'https://login.sina.com.cn'

    response = session.get(url, headers=tmp_headers)
    print(json.loads(re.search('\(({.*?})\)', response.text).group(1)))


def gen_visotor():
    portal_headers = copy.copy(headers)
    portal_headers['Host'] = "weibo.com"
    response = session.get("https://weibo.com/", headers=portal_headers, allow_redirects=False)
    visitor_url = response.headers['Location']

    gen_headers = copy.copy(headers)
    gen_headers['Host'] = 'passport.weibo.com'
    gen_headers['Referer'] = visitor_url
    gen_headers['Origin'] = 'https://passport.weibo.com'
    gen_visotor_url = "https://passport.weibo.com/visitor/genvisitor"
    data = {'cb': 'gen_callback',
            'fp': '{"os":"1","browser":"Chrome95,0,4638,69","fonts":"undefined","screenInfo":"1536*864*24","plugins":"Portable Document Format::internal-pdf-viewer::PDF Viewer|Portable Document Format::internal-pdf-viewer::Chrome PDF Viewer|Portable Document Format::internal-pdf-viewer::Chromium PDF Viewer|Portable Document Format::internal-pdf-viewer::Microsoft Edge PDF Viewer|Portable Document Format::internal-pdf-viewer::WebKit built-in PDF"}'}
    response = session.post(gen_visotor_url, data=data, headers=gen_headers)
    tid = re.search('"tid":"(.*?)"', response.text).group(1)
    tid = re.sub(r"\\/", "/", tid)
    session.cookies.set("tid", tid + "__095", domain='.passport.weibo.com', path='/visitor')

    params = {"a": "incarnate",
              "t": tid,
              "w": "2",
              "c": "095",
              "gc": "",
              "cb": "cross_domain",
              "from": "weibo",
              "_rand": "0.5799231670299148"}
    session.get("https://passport.weibo.com/visitor/visitor", headers=gen_headers, params=params, allow_redirects=False)

    portal_headers['Referer'] = 'https://passport.weibo.com/'
    session.get("https://weibo.com", headers=portal_headers, allow_redirects=False)
    # for k, v in session.cookies.items():
    #     print(k, v)


headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36', }

session = requests.session()

if __name__ == '__main__':
    gen_visotor()
    username, password = "18280484271", "@rufeng20001123"

    session.get("https://weibo.com/login.php", headers=headers)
    pre_login_time_start = timestamp()
    servertime, pcid, nonce, pubkey, rsakv, exec_time = pre_login(username)
    login_res = do_login(username, password, servertime, nonce, rsakv, pubkey, exec_time, pre_login_time_start)
    redirect_url = re.search('location\.replace\("(.*?)"\)', login_res.content.decode("gbk")).group(1)
    redirect(redirect_url)
