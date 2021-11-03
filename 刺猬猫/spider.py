"""
 author rufeng
 date 2021/11/03/16:51
 description 
"""

import requests

session = requests.session()
headers = {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Host': 'www.ciweimao.com',
    'Origin': 'https://www.ciweimao.com',
    'Pragma': 'no-cache',
    'Referer': 'https://www.ciweimao.com/chapter/107397586',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
}


def get_acc_key(chapter_id: str) -> str:
    res = session.post("https://www.ciweimao.com/chapter/ajax_get_session_code", data={"chapter_id": chapter_id},
                       headers=headers)
    return res.json().get("chapter_access_key")


def get_content(chapter_id: str, acc_key: str) -> str:
    formdata = {"chapter_id": chapter_id, "chapter_access_key": acc_key}
    res = session.post("https://www.ciweimao.com/chapter/get_book_chapter_detail_info", headers=headers, data=formdata)
    enc_data = res.json()
    enc_data["accessKey"] = acc_key
    return session.post("http://127.0.0.1:8000", data=enc_data).text


if __name__ == '__main__':
    chapter_id = "107402429"
    session.get("https://www.ciweimao.com/", headers=headers)
    session.get("https://www.ciweimao.com/book/100259458", headers=headers)
    acc_key = get_acc_key(chapter_id)
    content = get_content(chapter_id, acc_key)
    print(content)
