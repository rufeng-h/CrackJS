"""
 author rufeng
 date 2021/11/04/18:41
 description 
"""
import copy
import datetime
import random
import re
import time

import requests
from requests import Response

session = requests.session()

headers = {
    'accept': '*/*',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'referer': 'https://login.anjuke.com/',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36'
}

finger2 = 'zh-CN|24|1.25|8|1536_864|1536_824|-480|1|1|1|undefined|1|unknown|Win32|unknown|5|false|false|false|false|false|0_false_false|d41d8cd98f00b204e9800998ecf8427e|44b6a56736f2cfe7969b79d6927946a2'
iframe_time = ''


def request_finger() -> None:
    """
    象征性地发送浏览器指纹
    :return:
    """
    params = {
        'source': 'ajk-anjuke-pc',
        'finger2': finger2,
        'psdk-d': 'jsdk',
        'psdk-v': '1.0.1',
        'callback': 'JsonpCallBack' + str(int(time.time() * 1000000))
    }
    session.get("https://cloud-passport.anjuke.com/sec/ajk/fingerprint", params=params, headers=headers)


def get_token() -> str:
    """
    获取token
    :return: token
    """
    res = session.get(
        "https://cloud-passport.anjuke.com/ajk/mobile/init?source=ajk-anjuke-pc&path=https%253A%252F%252Flogin.anjuke.com%252Flogin%252Fiframeform%252F&psdk-d=jsdk&psdk-v=1.0.1&callback=JsonpCallBack" + str(
            int(time.time() * 1000000)), headers=headers)
    return re.search('"token":"(.*?)"', res.text).group(1)


def request_rsa() -> None:
    """
    象征性地请求rsa
    :return: None
    """
    session.get(
        "https://cloud-passport.anjuke.com/ajk/rsa?source=ajk-anjuke-pc&psdk-d=jsdk&psdk-v=1.0.1&callback=JsonpCallBack" + str(
            int(time.time() * 1000000)))


def anti_spider():
    sign = session.get("http://localhost:8000/signEnc").text
    params = {
        "param": sign,
        "callback": "dpjsonp_" + str(random.random()).replace(".", "")
    }
    anti_headers = copy.copy(headers)
    anti_headers['referer'] = "https://login.anjuke.com/"
    res = session.get("https://antispider-security.anjuke.com/api/v1/pcm/gettoken", params=params,
                      headers=anti_headers)
    enc_data = re.search(r"\('(.*?)'\)", res.text).group(1)
    data = session.post("http://127.0.0.1:8000/decrypt", data={"data": enc_data}).json()['data']
    print(data.split(''))
    deviceid = data.split('')[1]
    token = data.split('')[2]
    cid = data.split('')[0]
    appkey = 'gk1leqzjj6u65bd2zbal'
    v = '10012'
    today = datetime.datetime.now()
    dt = '%s%s%s%s' % (today.year, today.month - 1, today.day, today.hour)

    from browser import browser_feature
    browser_feature['xxzl_cid'] = cid
    browser_feature['sessionid'] = token
    browser_feature['xxzl_deviceid'] = deviceid
    browser_feature['id58'] = session.cookies.get("id58") + "|-1|-1|-1|-1"
    browser_feature["local_time"] = str(int(time.time() * 1000000))
    enc_browser = session.post("http://127.0.0.1:8000/encryptBrowser", data=browser_feature).text
    print(len(enc_browser))
    tmp_headers = copy.copy(headers)
    res = session.post("https://antispider-security.anjuke.com/api/v1/pcm/report", data=enc_browser, headers=headers)
    print(session.post("http://127.0.0.1:8000/decryptBrowser", data={"data": res.text}).text)


def do_login(token: str, username, enc_pwd) -> Response:
    formdata = {"username": username,
                "password": enc_pwd,
                'token': token,
                'source': 'ajk-anjuke-pc',
                'path': '',
                'domain': 'anjuke.com',
                'finger2': finger2,
                'psdk-d': 'jsdk',
                'psdk-v': '1.0.1',
                'callback': 'SDK_CALLBACK_FUN.successFun',
                }
    res = session.post(
        "https://cloud-passport.anjuke.com/ajk/login/pc/dologin",
        data=formdata, headers=headers)
    return res


def request_stb():
    formdata = {'p': 'track_login_page_changetab',
                'h': 'https://login.anjuke.com/login/iframeform?style=1&forms=11&third_parts=111&other_parts=111&check_bind_phone=1&t=' + iframe_time,
                'r': 'https://login.anjuke.com/login/form',
                'site': 'anjuke-npv',
                'guid': session.cookies.get("aQQ_ajkguid"),
                'ssid': session.cookies.get("sessid"),
                'uid': 0,
                't': str(int(time.time() * 1000000)),
                'ctid': session.cookies.get("ctid"),
                'luid': '',
                'm': '',
                'sc': '{"w":"540","h":"433","r":"0"}',
                'pn': 'track_login_page_changetab'}
    session.post("https://s.anjuke.com/stb?__site=anjuke-npv&", headers=headers, data=formdata)


def request_iframe_form():
    global iframe_time
    iframe_time = str(int(time.time() * 1000000))
    session.get(
        "https://login.anjuke.com/login/iframeform?style=1&forms=11&third_parts=111&other_parts=111&check_bind_phone=1",
        headers=headers)


if __name__ == '__main__':
    username, password = "18280484271", "1234567890"
    # 登陆页面
    session.get("https://login.anjuke.com/login/form", headers=headers)
    # iframe
    request_iframe_form()
    request_finger()
    token = get_token()
    request_rsa()
    request_stb()
    anti_spider()
    enc_pwd = session.post("http://127.0.0.1:8000/signPwd", data={"password": password}).text
    # for k, v in session.cookies.items():
    #     print(k, v)
    # time.sleep(3)
    # res = do_login(token, username, enc_pwd)
    # print(res.text)
