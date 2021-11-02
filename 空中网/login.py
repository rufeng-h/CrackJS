import copy
import re
import time

import requests

session = requests.session()

headers = {
    'accept': "*/*",
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'cache-control': 'no-cache',
    'Pragma': 'no-cache',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36 Edg/95.0.1020.40',
}

sso_headers = copy.deepcopy(headers)
sso_headers['Host'] = "sso.kongzhong.com"
sso_headers['Referer'] = 'https://passport.kongzhong.com'


def get_dc():
    res = session.get(
        "https://sso.kongzhong.com/ajaxLogin?j=j&jsonp=j&service=https://passport.kongzhong.com/&_=" + str(
            int(time.time() * 1000)), headers=sso_headers)
    search = re.search('"dc":"(.*?)"', res.text)
    if search is None:
        raise ValueError("dc参数获取失败!")
    return search.group(1)


if __name__ == '__main__':
    username, password = "", ""

    session.get("https://passport.kongzhong.com/login", headers=headers)
    session.get("https://sso.kongzhong.com/createQRCode", headers=sso_headers)
    dc = get_dc()
    enc_pwd = session.get("http://localhost:8000", params={"pwd": password, "salt": dc}).text

    login_url = "https://sso.kongzhong.com/ajaxLogin?j=j&&type=1&service=https://passport.kongzhong.com/&username={}&password={}&vcode=&toSave=0&_={}"
    # 太快了不行
    time.sleep(5)
    res = session.get(login_url.format(username, enc_pwd, int(time.time() * 1000)), headers=sso_headers)
    print(res.text)
