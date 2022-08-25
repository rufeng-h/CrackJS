import time

import requests
from common import headers

session = requests.session()
session.headers.update(headers)

session.get('https://store.steampowered.com/login')


def get_rsa_key(username: str):
    formdata = {
        'donotcache': int(time.time() * 1000),
        'username': username,
    }
    response = session.post('https://store.steampowered.com/login/getrsakey/', data=formdata)
    rsa = response.json()

    return rsa['publickey_mod'], rsa['public_exp'], rsa['timestamp']


def login(username, password):
    data = {'donotcache': int(time.time() * 1000),
            'password': password,
            'username': username,
            'twofactorcode': '',
            'emailauth': '',
            'loginfriendlyname': '',
            'captchagid': -1,
            'captcha_text': '',
            'emailsteamid': '',
            'rsatimestamp': '',
            'remember_login': False}
    response = session.post('https://store.steampowered.com/login/dologin/', data=data)
    print(response.json())


if __name__ == '__main__':
    username, password = '182801', 'hyB3A~RBsbx.gx)'
    modulus, exponent, timestamp = get_rsa_key(username)
    print(session.post('http:127.0.0.1:8000', data={'modulus': modulus, 'password': password, 'exponent': exponent}))
