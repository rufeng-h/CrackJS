const RSA = require('./rsa')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const rsa = new RSA();
const port = 8000

/* 设置传输大小限制 */
app.use(bodyParser.urlencoded({limit: "2100000kb"}));
app.use(bodyParser.json({limit: "2100000kb"}));
/* 公钥直接写死 */
rsa.setPublic("00833c4af965ff7a8409f8b5d5a83d87f2f19d7c1eb40dc59a98d2346cbb145046b2c6facc25b5cc363443f0f7ebd9524b7c1e1917bf7d849212339f6c1d3711b115ecb20f0c89fc2182a985ea28cbb4adf6a321ff7e715ba9b8d7261d1c140485df3b705247a70c28c9068caabbedbf9510dada6d13d99e57642b853a73406817", "010001");

app.post("/", (req, res) => {
    const retJson = {};
    const finger = rsa.rsaFingerPrint();
    retJson.loginID = rsa.encrypt(req.body.username)
    retJson.enpassword = rsa.encrypt(req.body.password);
    retJson.fingerPrint = finger.result;
    retJson.fingerPrintDetail = finger.details;
    res.json(retJson);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})