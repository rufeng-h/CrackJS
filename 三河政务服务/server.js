const express = require('express');
const app = express();
const port = 8000
const authUrl = require('./sign')

app.get("/", (req, res) => {
    res.send("http://zwfw.san-he.gov.cn" + authUrl("/icity/api-v2/app.icity.guestbook.WriteCmd/getList"))
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})