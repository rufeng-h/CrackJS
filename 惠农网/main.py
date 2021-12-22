"""
 author rufeng
 date 2021/12/08/16:50
 description 
"""
import requests

headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
    'x-b3-traceid': '0KWXAI3SN1XEHHIQ',
    'x-client-appid': '5',
    'x-client-id': 'f868570-4b86-4cbc-8a6d-3c603edcc',
    'x-client-nonce': 'fcb8f852063168f2828dbdd51aa5b098',
    'x-client-page': '/hangqing/cd-2000156-0-0-1261/',
    'x-client-sid': 'S_0KWXAI3LB074VB3L',
    'x-client-time': '1638953637510',
    'x-client-sign': '79dc30a614aea223eb3b5da186956458d6a6dd43e790fe76ce22c3b8cf26bda161fe85ad4ed3bbecc290c0262ebf7c7e',
}

session = requests.session()
session.headers.update(headers)

res = requests.post("https://pcapi.cnhnb.com/hn-biz-gateway/api/biz-gateway/pc/hot/search/cate", json={"pageNumber":8})
print(res.text)
