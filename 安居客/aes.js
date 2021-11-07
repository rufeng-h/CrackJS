const CryptoJS = require("crypto-js")
const appkey = "gk1leqzjj6u65bd2zbal"

function parseParams(e) {
    try {
        var t, a = [];
        for (t in e) {
            var n = e[t];
            a.push(t + "=" + n)
        }
        return a.join("&")
    } catch (i) {
        return ""
    }
}

function signEnc() {
    var e = {
        appkey: appkey,
        // cid: "",
        deviceid: "",
        expire: "180",
        nonce: Math.ceil(1e6 * Math.random()),
        timestamp: (new Date).getTime(),
        userid: ""
    }
        , t = CryptoJS.HmacSHA256("httpsgetcdata.58.com/api/v1/pcm/gettoken?" + parseParams(e), "65687FFBF0E5AA5B")
        , t = CryptoJS.enc.Base64.stringify(t);
    e.signature = t;
    t = CryptoJS.enc.Utf8.parse("110FD52DC87A2230"),
        e = JSON.stringify(e);
    return CryptoJS.AES.encrypt(e, t, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).ciphertext.toString()
}


const decrypt = function (e) {
    return CryptoJS.AES.decrypt(e, CryptoJS.enc.Utf8.parse("110FD52DC87A2230"), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
}

const encryptBrowser = function (e) {
    var n = CryptoJS.enc.Utf8.parse("6F579B981C222BB7")
        , a = JSON.stringify(e)
        , r = CryptoJS.AES.encrypt(a, n, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    r = r.ciphertext.toString();
    var i = {
        appkey: appkey,
        data: r,
        expire: "180",
        nonce: Math.ceil(1e6 * Math.random()),
        timestamp: (new Date).getTime()
    };
    e = CryptoJS.HmacSHA256("httpspostcdata.58.com/api/v1/pcm/report?" + function (e) {
        try {
            var t, n = [];
            for (t in e) {
                var a = encodeURIComponent(t)
                    , r = encodeURIComponent(e[t]);
                n.push(a + "=" + r)
            }
            return n.join("&")
        } catch (i) {
            return ""
        }
    }(i), "3B9426B12A547049"),
        e = CryptoJS.enc.Base64.stringify(e);
    i.signature = e;
    n = CryptoJS.enc.Utf8.parse("BF81BEE8DC405054"),
        a = JSON.stringify(i);
    r = (r = CryptoJS.AES.encrypt(a, n, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    })).ciphertext.toString();
    return r;
}

function decryptBrowser(e) {
    return CryptoJS.AES.decrypt(e, CryptoJS.enc.Utf8.parse("BF81BEE8DC405054"), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
}

module.exports = {
    "signEnc": signEnc,
    "decrypt": decrypt,
    "encryptBrowser": encryptBrowser,
    "decryptBrowser": decryptBrowser
}