const express = require('express');
const encrypt = require('./rsa');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({limit: "2100000kb"}));

app.post('/', (req, res) => {
    res.send(encrypt(req.body.password));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

