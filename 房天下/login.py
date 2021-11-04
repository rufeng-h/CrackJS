"""
 author rufeng
 date 2021/11/04/17:09
 description 
"""
import requests
from pprint import pprint

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Host': 'passport.fang.com',
    'Pragma': 'no-cache',
    'Referer': 'https://bj.fang.com/',
    'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
}
session = requests.session()

if __name__ == '__main__':
    username, password = "18280484271", "Aa1234567890"
    session.get("https://passport.fang.com/", headers=headers)
    en_pwd = session.post("http://localhost:8000", data={"password": password}).text
    formdata = {
        "uid": username,
        "pwd": en_pwd,
        "Service": "soufun-passport-web",
        "AutoLogin": "1",
    }
    res = session.post("https://passport.fang.com/login.api", data=formdata, headers=headers)
    pprint(res.json())
