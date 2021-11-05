"""
 author rufeng
 date 2021/11/05/17:58
 description 
"""

import hashlib
import base64
import time
import requests
from scrapy import Selector

headers = {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Host': 'my.leju.com',
    'Pragma': 'no-cache',
    'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36'}


def encrypt(msg: str) -> str:
    h = hashlib.md5(msg.encode()).hexdigest()
    return base64.b64encode((h[0:8] + base64.b64encode(msg.encode()).decode() + h[10: 14]).encode()).decode()


def timestamp():
    return str(int(time.time() * 1000))


def get_key(response):
    selector = Selector(text=response.text)
    return selector.xpath('//form[@name="msgForm"]/div/input[@class="setKey"]/@value').extract_first()


session = requests.session()

if __name__ == '__main__':
    mobile, password = "18280484271", "Aa1234567890."
    response = session.get("https://my.leju.com/web/sso/loginview", headers=headers)
    session.get(
        "https://my.leju.com/Settings/Findpwd/isReg",
        headers=headers,
        params={"mobile": encrypt(mobile), "noCache": timestamp()})
    time.sleep(2)
    res = session.post("https://my.leju.com/web/sso/ssoLogin", headers=headers,
                       data={"mobile": encrypt(mobile), "password": encrypt(password), "key": get_key(response),
                             "originUrl": "https://my.leju.com/Settings/Index/index",
                             "tid": "0",
                             "ad_source": "",
                             "oc_source": ""})
    # for k, v in session.cookies.items():
    #     print(k, v)
    print(res.text)
