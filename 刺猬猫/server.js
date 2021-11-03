const express = require('express');
const decrypt = require('./decrypt')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 8000;

app.post('/', (req, res) => {
    const content = decrypt(req.body);
    res.send(content);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

