const CryptoJS = require('crypto-js');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

const key = CryptoJS
    .enc
    .Utf8
    .parse("20171109124536982017110912453698");

const iv = CryptoJS
    .enc
    .Utf8
    .parse('2017110912453698'); //十六位十六进制数作为密钥偏移量

const encrypt = (word) => {
    let srcs = CryptoJS
        .enc
        .Utf8
        .parse(word);
    let encrypted = CryptoJS
        .AES
        .encrypt(srcs, key, {
            iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7
        });
    return encrypted
        .ciphertext
        .toString()
        .toUpperCase();
}

app.use(bodyParser.urlencoded({limit: "2100000kb", extended: true}));

app.post('/', (req, res) => {
    res.send(encrypt(req.body.password));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

