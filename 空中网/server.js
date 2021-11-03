const express = require('express');
const encrypt = require('./encrypt')
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    const salt = req.query["salt"];
    const pwd = req.query["pwd"];
    console.log("pwd: " + pwd + " salt: " + salt);
    res.send(encrypt(pwd, salt));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

