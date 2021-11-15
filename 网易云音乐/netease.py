"""
 author rufeng
 date 2021/11/15/20:43
 description 
"""
import base64
import binascii
import random
import string

import requests
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad

from common import headers


class NeteaseEncryptor(object):
    _aes_iv = b"0102030405060708"
    _aes_key = b'0CoJUm6Qyw8W8jud'
    _rsa_pubkey = "010001"
    _rsa_modulus = "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7"
    _aes_block_size = 16
    _chars = string.ascii_letters + string.digits

    @staticmethod
    def _random_str() -> str:
        return ''.join(random.choices(NeteaseEncryptor._chars, k=16))

    @staticmethod
    def _aes_encrypt(msg: str, key: bytes) -> str:
        padded = pad(msg.encode(), NeteaseEncryptor._aes_block_size)
        return base64.b64encode(
            AES.new(key=key, mode=AES.MODE_CBC, IV=NeteaseEncryptor._aes_iv).encrypt(padded)).decode()

    @staticmethod
    def _rsa_encrypt(msg: str):
        v = pow(int(msg, 16), int(NeteaseEncryptor._rsa_pubkey, 16), int(NeteaseEncryptor._rsa_modulus, 16))
        return format(v, 'x').zfill(256)

    @staticmethod
    def encrypt(msg: str) -> dict:
        random_str = NeteaseEncryptor._random_str()
        enc_text = NeteaseEncryptor._aes_encrypt(msg, NeteaseEncryptor._aes_key)
        enc_text = NeteaseEncryptor._aes_encrypt(enc_text, random_str.encode())
        hex_str = binascii.hexlify(random_str[::-1].encode()).decode()
        return {"params": enc_text,
                "encSecKey": NeteaseEncryptor._rsa_encrypt(hex_str)}


if __name__ == '__main__':
    res = requests.post("https://music.163.com/weapi/search/suggest/web?csrf_token=",
                        data=NeteaseEncryptor.encrypt('{\"s\":\"王菲\",\"limit\":\"8\",\"csrf_token\":\"\"}'),
                        headers=headers)
