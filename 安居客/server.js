const express = require('express');
const rsaEncrypt = require('./rsa');
const aes = require('./aes');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.crackLoginServerPort || 8000;

app.use(bodyParser.urlencoded({limit: "2100000kb"}));

app.post('/signPwd', (req, res) => {
    res.send(rsaEncrypt(req.body.password));
});

app.post('/decrypt', (req, res) => {
    const data = aes.decrypt(req.body.data);
    res.json(JSON.parse(data));
});

app.post('/encryptBrowser', (req, res) => {
    const enc = aes.encryptBrowser(req.body);
    res.send(enc);
})

app.post('/decryptBrowser', (req, res) => {
    const dec = aes.decryptBrowser(req.body.data);
    // res.send(dec);
    res.json(JSON.parse(dec));
});

app.get('/signEnc', (req, res) => {
    res.send(aes.signEnc());
});

app.listen(port, () => {
    console.log(`node server listening at http://localhost:${port}`)
});

