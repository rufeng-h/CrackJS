const express = require('express');
const app = express();
const port = 8000
const RSA = require('./rsa')

app.post("/", (req, res) => {
    const pubkey = RSA.getPublicKey(req.body.modulus, req.body.exponent)
    res.json(RSA.encrypt(req.body.password, pubkey));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})