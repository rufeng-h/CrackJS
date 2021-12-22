"""
 author rufeng
 date 2021/12/22/20:46
 description 
"""
import re

import requests


class BaiduTranslation:
    def __init__(self):
        self.session = requests.session()
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
        }
        self._trans_url = "https://fanyi.baidu.com/v2transapi"
        self.session.headers.update(headers)
        self._token = self._get_token()

    def _get_token(self):
        self.session.get("https://fanyi.baidu.com/")
        return re.search("token: '(.*?)'", self.session.get("https://fanyi.baidu.com/").text).group(1)

    def translate(self, word: str, from_lang: str = "en", to_lang: str = "zh"):
        if not str:
            return ""

        params = {
            "from": from_lang,
            "to": to_lang
        }
        formdata = {
            'from': from_lang,
            'to': to_lang,
            'query': word,
            'transtype': 'translang',
            'simple_means_flag': '3',
            'sign': self.session.post("http://127.0.0.1:8000/sign", data={"key": word}).text,
            'token': self._token,
            "domain": "common"
        }
        return self.session.post(self._trans_url, params=params, data=formdata)


if __name__ == '__main__':
    t = BaiduTranslation()
    response = t.translate("Python")
    print(response.json())
