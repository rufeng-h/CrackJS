"""
 author rufeng
 date 2021/11/04/9:40
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
    'Host': 'passport.migu.cn',
    'Referer': 'https://passport.migu.cn/portal',
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

if __name__ == '__main__':
    session.get("https://passport.migu.cn/portal", headers=headers)
    session.get(
        "https://passport.migu.cn/login?sourceid=100001&apptype=0&forceAuthn=false&isPassive=false&authType=MiguPassport&passwordControl=0&display=web&referer=https://passport.migu.cn/portal&logintype=1&qq=null&weibo=null&alipay=null&weixin=null&andPass=null&phoneNumber=&callbackURL=&relayState=&openPage=&hideRegister=&hideForgetPass=&sim=&needOneKey=0&hideps=0",
        headers=headers)
    session.post("https://passport.migu.cn/password/publickey", headers=headers)
    ret = requests.post("http://127.0.0.1:8000", data={"username": "18280484271", "password": "Aa1029384657"})
    formdata = ret.json()
    formdata.update({"isAsync": "true", "sourceID": "100001",
                     "appType": 0,
                     "relayState": "", "captcha": "",
                     "imgcodeType": 1})
    print(session.post("https://passport.migu.cn/authn", data=formdata).text)
