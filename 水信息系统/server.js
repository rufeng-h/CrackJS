const express = require('express');
const waterSecurity = require('./waterSecurity');
const bodyParser = require('body-parser');
const app = express();
/* 设置传输大小限制 */
app.use(bodyParser.urlencoded({limit: "2100000kb"}));
app.use(bodyParser.json({limit: "2100000kb"}));
const port = 8000

app.post('/encode', (req, res) => {
    const resJson = waterSecurity.paramEncode(req.body);
    res.json(resJson);
})

app.post('/decode', (req, res) => {
    const result = waterSecurity.decode(req.body.data);
    res.json(result);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
