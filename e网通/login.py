import hashlib
import time

from common import headers
import requests

session = requests.session()
session.headers.update(headers)

session.get('https://web.ewt360.com/register/#/login')

password = session.post('http://127.0.0.1:8000', data={'password': '1234567890a'}).text

username = '18280484271'

t = int(time.time() * 1000)
formdata = {
    'autoLogin': True,
    'password': password,
    'platform': 1,
    'userName': username
}

print(session.post('https://gateway.ewt360.com/api/authcenter/v2/oauth/login/account', headers={
    'secretid': '2',
    'sign': hashlib.md5((str(t) + 'bdc739ff2dcf').encode()).hexdigest().upper(),
    'timestamp': str(t),
}, json=formdata).text)
