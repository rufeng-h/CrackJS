const express = require('express');
const bodyParser = require('body-parser');
const sign = require('./sign')
const app = express();
const port = process.env.port || 8000;

app.use(bodyParser.urlencoded({limit: "2100000kb", extended: true}));

app.post("/sign", (req, res) => {
    res.send(sign(req.body.key))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})