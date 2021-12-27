"""
 author rufeng
 date 2021/12/27/16:39
 description 
"""

import requests

from common import headers

session = requests.Session()

session.headers.update(headers)
session.headers.update({"Referer": "http://zwfw.san-he.gov.cn/icity/icity/guestbook/interact"})

if __name__ == '__main__':
    session.get("http://zwfw.san-he.gov.cn/icity/icity/guestbook/interact")
    params = {"start": 21, "limit": 7, "TYPE@=": "2", "OPEN@=": "1"}
    url = session.get("http://127.0.0.1:8000").text
    print(url)
    res = session.post(url, json=params)
    print(res.request.body)
    print(res.json())
    print(res.request.headers)
