const express = require('express');
const sinaSSOEncoder = require('./sinaSSOEncoder');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({limit: "2100000kb"}));

app.post('/', (req, res) => {
    const f = new sinaSSOEncoder.RSAKey;
    const me = req.body;
    console.log(me.pubkey);
    f.setPublic(me.pubkey, "10001");
    b = f.encrypt([me.servertime, me.nonce].join("\t") + "\n" + me.password);
    res.send(b);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

