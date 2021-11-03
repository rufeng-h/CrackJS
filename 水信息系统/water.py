"""
 author rufeng
 date 2021/11/03/12:32
 description 
"""
import datetime
import random

import requests

headers = {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Host': '61.191.22.196:5566',
    'Origin': 'http://yc.wswj.net',
    'Pragma': 'no-cache',
    'Referer': 'http://yc.wswj.net/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36'
}

session = requests.session()


def encode(data: dict) -> dict:
    return session.post("http://127.0.0.1:8000/encode", data=data).json()


def decode(data: dict) -> dict:
    return session.post("http://127.0.0.1:8000/decode", data=data).json()


if __name__ == '__main__':
    session.get("http://yc.wswj.net/ahsxx/LOL/public/public.html", headers=headers)
    rwData = {
        "hourClass": "1,2,3,6,12",
        "name": "SelectRainWarnInfo",
        "snsw": "sn",
        "time": ""
    }
    formdata = encode(rwData)
    formdata['random'] = random.random()
    ret = session.post("http://61.191.22.196:5566/AHSXX/service/PublicBusinessHandler.ashx", headers=headers,
                       data=formdata)
    print("第一次请求：", decode(ret.json()))
    btime = datetime.datetime.now().strftime("%Y%m%d%H") + "00"
    etime = (datetime.datetime.now() + datetime.timedelta(hours=1)).strftime("%Y%m%d%H") + "00"
    m = {
        "btime": btime,
        "etime": etime,
        "fresh": 0,
        "heatRange": 50,
        "isoline": "N",
        "name": "SelectRainMapData",
        "points": "",
        "rainlevel": "A:10,25,50,100",
        "stcdtype": "1,0,0,0,0,0"
    }
    formdata = encode(m)
    formdata['random'] = random.random()
    ret = session.post("http://61.191.22.196:5566/AHSXX/service/PublicBusinessHandler.ashx", headers=headers,
                       data=formdata)
    print("第二次请求：", decode(ret.json()))
