"""
 author rufeng
 date 2021/12/22/22:10
 description 
"""
import hashlib
import random
import time

import requests


class YouDaoTranslation:
    def __init__(self):
        self.session = requests.Session()
        headers = {
            "Origin": "https://fanyi.youdao.com",
            "Referer": "https://fanyi.youdao.com/",
            # "Cookie": "OUTFOX_SEARCH_USER_ID_NCOO=1806019051.9222953; OUTFOX_SEARCH_USER_ID=144129320@182.139.46.64; ___rl__test__cookies=1640183554281",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
        }
        self.trans_url = "https://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule"
        self.session.headers.update(headers)
        self.session.get("https://fanyi.youdao.com/")

    def _salt_sign(self, word: str) -> dict:
        t = "fdac15c78f51b91dabd0a15d9a1b10f5"
        r = str(int(time.time() * 1000))
        i = r + "1"
        return {
            "bv": t,
            "ts": r,
            "salt": i,
            "sign": hashlib.md5(("fanyideskweb" + word + i + "Y2FYu%TNSbMCxc3t2u^XT").encode()).hexdigest()
        }

    def traslate(self, word: str, from_lang: str = "AUTO", to_lang: str = "AUTO"):
        sign = self._salt_sign(word)

        formdata = {
            'i': word,
            'from': from_lang,
            'to': to_lang,
            'smartresult': 'dict',
            'client': 'fanyideskweb',
            'salt': sign['salt'],
            'sign': sign['sign'],
            'lts': sign['ts'],
            'bv': sign['bv'],
            'doctype': 'json',
            'version': '2.1',
            'keyfrom': 'fanyi.web',
            'action': 'FY_BY_CLICKBUTTION'
        }
        self.session.cookies.set("OUTFOX_SEARCH_USER_ID_NCOO", str(2147483647 * random.random()), domain=".youdao.com")
        self.session.cookies.set("___rl__test__cookies", str(int(time.time() * 1000)), domain="fanyi.youdao.com")
        print(self.session.post(self.trans_url, data=formdata).text)


if __name__ == '__main__':
    y = YouDaoTranslation()
    y.traslate("Python")
