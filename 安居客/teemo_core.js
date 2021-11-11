var locationHref = window.location.href, domainConfig = "", appkey = "";

function getQuery(e, t) {
    t = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"), t = e.split("?")[1].match(t);
    return null != t ? t[2] : null
}

try {
    var searchParam = document.location.search, appkey = getQuery(searchParam, "appkey")
} catch (e) {
}

function getBrowserInfo() {
    var e, t = navigator.userAgent.toLocaleLowerCase(), n = null;
    return null != t.match(/msie/) || null != t.match(/trident/) ? (n = "IE", browserVersion = (null != t.match(/msie ([\d.]+)/) ? t.match(/msie ([\d.]+)/) : t.match(/rv:([\d.]+)/))[1]) : null != t.match(/firefox/) ? n = "firefox" : null != t.match(/ubrowser/) ? n = "UC" : null != t.match(/opera/) ? n = "opera" : null != t.match(/bidubrowser/) ? n = "bidubrowser" : null != t.match(/metasr/) ? n = "sogou" : null != t.match(/tencenttraveler/) || null != t.match(/qqbrowse/) ? n = "QQ" : null != t.match(/maxthon/) ? n = "maxthon" : -1 < navigator.userAgent.toLowerCase().indexOf("chrome") ? (e = "", -1 < (e = navigator.mimeTypes["application/x-shockwave-flash"] ? navigator.mimeTypes["application/x-shockwave-flash"].description.toLowerCase() : e).indexOf("adobe") && (n = "360old")) : null != t.match(/safari/) ? n = "Safari" : null != t.match(/chrome/) && function (e, t) {
        var n, a = navigator.mimeTypes;
        for (n in a) if (a[n][e] == t) return !0;
        return !1
    }("type", "application/vnd.chromium.remoting-viewer") && (n = "360"), n
}

var browserTypeReal = getBrowserInfo(),
    _0x1e29c = "OyqTyShf0jP47LDfDj5Er4Sz/NudHzIPNMX6riqvzBc1/4W+nKR6NVNYkBbMy41Iin35brBb//eSODvMgkQULA==";
if ("sogou" != browserTypeReal) {
    var regex = /[http:|https:]\/\/([^\/]+)\//i, domains, cookieDomain;
    try {
        var domains = regex.exec(document.location.href)[1], domainarr = domains.split("."),
            cookieDomain = "." + domainarr[domainarr.length - 2] + "." + domainarr[domainarr.length - 1]
    } catch (e) {
        cookieDomain = ".58.com"
    }
    var options = {domain: cookieDomain}, _0xd7e6c = new __0x9527bc(options)
}
!function (f, l) {
    Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
        var n;
        if (null == this) throw new TypeError("this is null or undefined");
        var a = Object(this), r = a.length >>> 0;
        if (0 == r) return -1;
        t = +t || 0;
        if (r <= (t = Math.abs(t) === Infinity ? 0 : t)) return -1;
        for (n = Math.max(0 <= t ? t : r - Math.abs(t), 0); n < r;) {
            if (n in a && a[n] === e) return n;
            n++
        }
        return -1
    }), Array.prototype.forEach || (Array.prototype.forEach = function (e, t) {
        var n, a;
        if (null == this) throw new TypeError(" this is null or not defined");
        var r, i = Object(this), o = i.length >>> 0;
        if ("[object Function]" != {}.toString.call(e)) throw new TypeError(e + " is not a function");
        for (t && (n = t), a = 0; a < o;) a in i && (r = i[a], e.call(n, r, a, i)), a++
    }), Array.prototype.map || (Array.prototype.map = function (e, t) {
        var n, a, r;
        if (null == this) throw new TypeError(" this is null or not defined");
        var i, o = Object(this), c = o.length >>> 0;
        if ("function" != typeof e) throw new TypeError(e + " is not a function");
        for (t && (n = t), a = new Array(c), r = 0; r < c;) r in o && (i = o[r], i = e.call(n, i, r, o), a[r] = i), r++;
        return a
    });
    var t = function () {
        this.clientId = null, this.timer = null, this.pollingTimer = null, this.domain = null, this.configCatch = null, this.source = null
    }, u = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
    t.prototype = {
        constructor: t, init: function (t) {
            var n = this;
            n.configCatch = t, n.clientId = t.clientType;
            var a = {};
            a.clientType = t !== l ? t.clientType : "1", a.cookieId = t !== l ? t.cookieId : [], a.url = "//j1.58cdn.com.cn/resource/xxzl/tracker/FontList.swf?v=201607281700";
            try {
                var r = /[http:|https:]\/\/([^\/]+)\//i.exec(document.location.href)[1].split("."),
                    i = "." + r[r.length - 2] + "." + r[r.length - 1];
                n.domain = i
            } catch (e) {
                n.domain = i = ".58.com"
            }
            a.fpurl = domainConfig + "/api/v1/pcm/report", a.from = t.from == l ? "" : t.from, n.source = a.from, this.nativeForEach = Array.prototype.forEach, this.nativeMap = Array.prototype.map, this.sendData(a)
        }, sendData: function (e) {
            var o = this, c = function (e) {
                function n(e) {
                    e = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), e = f.location.search.substr(1).match(e);
                    return null != e ? unescape(e[2]) : null
                }

                function d() {
                    var e = {
                        appkey: appkey,
                        cid: n("cid"),
                        expire: "180",
                        nonce: Math.ceil(1e6 * Math.random()),
                        sessionid: n("token"),
                        timestamp: (new Date).getTime()
                    }, t = CryptoJS.HmacSHA256("httpsgetcdata.58.com/api/v1/pcm/getfp?" + function (e) {
                        try {
                            var t, n = [];
                            for (t in e) {
                                var a = e[t];
                                n.push(t + "=" + a)
                            }
                            return n.join("&")
                        } catch (r) {
                            return ""
                        }
                    }(e), "7F5B9632B2F13918"), t = CryptoJS.enc.Base64.stringify(t);
                    e.signature = t;
                    t = CryptoJS.enc.Utf8.parse("3279831EC33B4CA7"), e = JSON.stringify(e);
                    return CryptoJS.AES.encrypt(e, t, {
                        mode: CryptoJS.mode.ECB,
                        padding: CryptoJS.pad.Pkcs7
                    }).ciphertext.toString()
                }

                function h(e) {
                    var t, n;
                    200 == e.code ? (e.data.split("")[0], e.data.split("")[1], t = e.data.split("")[2], n = e.data.split("")[3], "sogou" == browserTypeReal ? ("" != t && o.hand_save_all("xxzl_cid", t), "" != n && o.hand_save_all("xzuid", n)) : ("" != t && _0xd7e6c.set("xxzl_cid", t), "" != n && _0xd7e6c.set("xzuid", n))) : setTimeout(function () {
                        a()
                    }, 3e3), messenger.send(e.data)
                }

                function a() {
                    var t = ("dpjsonp_" + Math.random()).replace(".", ""),
                        n = ("dpjsonp_" + Math.random()).replace(".", ""),
                        a = ("dpjsonp_" + Math.random()).replace(".", ""),
                        r = ("dpjsonp_" + Math.random()).replace(".", ""),
                        i = ("dpjsonp_" + Math.random()).replace(".", ""), o = document.getElementsByTagName("head")[0],
                        c = document.createElement("script"), s = document.createElement("script"),
                        l = document.createElement("script"), u = document.createElement("script"),
                        p = document.createElement("script");
                    o.appendChild(c), f[i] = function (e) {
                        e = CryptoJS.AES.decrypt(e, CryptoJS.enc.Utf8.parse("3279831EC33B4CA7"), {
                            mode: CryptoJS.mode.ECB,
                            padding: CryptoJS.pad.Pkcs7
                        }).toString(CryptoJS.enc.Utf8);
                        "" != JSON.parse(e).data.split("")[1] && h(JSON.parse(e)), o.removeChild(p), f[i] = null
                    }, f[r] = function (e) {
                        e = CryptoJS.AES.decrypt(e, CryptoJS.enc.Utf8.parse("3279831EC33B4CA7"), {
                            mode: CryptoJS.mode.ECB,
                            padding: CryptoJS.pad.Pkcs7
                        }).toString(CryptoJS.enc.Utf8);
                        "" == JSON.parse(e).data.split("")[1] ? setTimeout(function () {
                            o.removeChild(u), o.appendChild(p), p.src = domainConfig + "/api/v1/pcm/getfp?param=" + d() + "&callback=" + i
                        }, 3e3) : (h(JSON.parse(e)), o.removeChild(u)), f[r] = null
                    }, f[a] = function (e) {
                        e = CryptoJS.AES.decrypt(e, CryptoJS.enc.Utf8.parse("3279831EC33B4CA7"), {
                            mode: CryptoJS.mode.ECB,
                            padding: CryptoJS.pad.Pkcs7
                        }).toString(CryptoJS.enc.Utf8);
                        "" == JSON.parse(e).data.split("")[1] ? setTimeout(function () {
                            o.removeChild(l), o.appendChild(u), u.src = domainConfig + "/api/v1/pcm/getfp?param=" + d() + "&callback=" + r
                        }, 3e3) : (h(JSON.parse(e)), o.removeChild(l)), f[a] = null
                    }, f[n] = function (e) {
                        e = CryptoJS.AES.decrypt(e, CryptoJS.enc.Utf8.parse("3279831EC33B4CA7"), {
                            mode: CryptoJS.mode.ECB,
                            padding: CryptoJS.pad.Pkcs7
                        }).toString(CryptoJS.enc.Utf8);
                        "" == JSON.parse(e).data.split("")[1] ? setTimeout(function () {
                            o.removeChild(s), o.appendChild(l), l.src = domainConfig + "/api/v1/pcm/getfp?param=" + d() + "&callback=" + a
                        }, 3e3) : (h(JSON.parse(e)), o.removeChild(s)), f[n] = null
                    }, f[t] = function (e) {
                        e = CryptoJS.AES.decrypt(e, CryptoJS.enc.Utf8.parse("3279831EC33B4CA7"), {
                            mode: CryptoJS.mode.ECB,
                            padding: CryptoJS.pad.Pkcs7
                        }).toString(CryptoJS.enc.Utf8);
                        "" == JSON.parse(e).data.split("")[1] ? setTimeout(function () {
                            o.removeChild(c), o.appendChild(s), s.src = domainConfig + "/api/v1/pcm/getfp?param=" + d() + "&callback=" + n
                        }, 3e3) : (h(JSON.parse(e)), o.removeChild(c)), f[t] = null
                    }, c.src = domainConfig + "/api/v1/pcm/getfp?param=" + d() + "&callback=" + t
                }

                var t, r = CryptoJS.AES.decrypt(e, CryptoJS.enc.Utf8.parse("BF81BEE8DC405054"), {
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Pkcs7
                }).toString(CryptoJS.enc.Utf8), i = JSON.parse(r);
                200 == i.code ? (i.data.split("")[0], t = i.data.split("")[1], e = i.data.split("")[2], r = i.data.split("")[3], "sogou" == browserTypeReal ? ("" != e && o.hand_save_all("xxzl_cid", e), "" != r && o.hand_save_all("xzuid", r)) : ("" != e && _0xd7e6c.set("xxzl_cid", e), "" != r && _0xd7e6c.set("xzuid", r)), "" == t && setTimeout(function () {
                    a()
                }, 3e3)) : setTimeout(function () {
                    a()
                }, 3e3), messenger.send(i.data)
            }, s = function () {
                messenger.send({status: "faile", message: "server unkown error!"})
            }, l = e.fpurl, u = e.from;
            (o = this).get(e, function (e) {
                function t(e) {
                    e = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), e = f.location.search.substr(1).match(e);
                    return null != e ? unescape(e[2]) : null
                }

                e.xxzl_cid = t("cid"), e.sessionid = t("token"), e.xxzl_deviceid = t("deviceid");
                var n = CryptoJS.enc.Utf8.parse("6F579B981C222BB7"), a = JSON.stringify(e),
                    r = CryptoJS.AES.encrypt(a, n, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
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
                            var a = encodeURIComponent(t), r = encodeURIComponent(e[t]);
                            n.push(a + "=" + r)
                        }
                        return n.join("&")
                    } catch (i) {
                        return ""
                    }
                }(i), "3B9426B12A547049"), e = CryptoJS.enc.Base64.stringify(e);
                i.signature = e;
                n = CryptoJS.enc.Utf8.parse("BF81BEE8DC405054"), a = JSON.stringify(i);
                r = (r = CryptoJS.AES.encrypt(a, n, {
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Pkcs7
                })).ciphertext.toString(), o.postData("xxzlfp", r, l, u, "post", c, s)
            })
        }, postData: function (e, t, n, a, r, i, o) {
            var c = null;
            (c = f.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")).open(r, n, !0), "post" === r ? c.setRequestHeader("Content-Type", "text/html") : r = "get", c.send(t), c.onreadystatechange = function () {
                4 == c.readyState && (200 == c.status ? i && i(c.responseText) : o && o())
            }
        }, hand_save_all: function (e, t) {
            this.setCookie(e, t), f.localStorage[e] = t, f.sessionStorage[e] = t
        }, pollingEvent: function () {
            var r = this;
            /* 此处修改 */
            r.pollingTimer = function () {
            };
            // r.pollingTimer = setInterval(function () {
            //     var e, t, n, a;
            //     f.localStorage && (e = r.getCookie("xxzl_cid"), t = f.localStorage.xxzl_cid, f.XXZL_CID_WRITE = f.XXZL_CID_WRITE && "-1" != f.XXZL_CID_WRITE ? f.XXZL_CID_WRITE : e, n = r.getCookie("xzuid"), a = f.localStorage.xzuid, f.XXZL_UUID_WRITE = f.XXZL_UUID_WRITE && "-1" != f.XXZL_UUID_WRITE ? f.XXZL_UUID_WRITE : n, "sogou" == browserTypeReal ? ("-1" != XXZL_CID_WRITE && XXZL_CID_WRITE && (e && "-1" != e && t || r.hand_save_all("xxzl_cid", XXZL_CID_WRITE)), "-1" != XXZL_UUID_WRITE && XXZL_UUID_WRITE && (n && "-1" != n && a || r.hand_save_all("xzuid", XXZL_UUID_WRITE))) : ("-1" != XXZL_CID_WRITE && XXZL_CID_WRITE && (e && "-1" != e && t || _0xd7e6c.set("xxzl_cid", XXZL_CID_WRITE)), "-1" != XXZL_UUID_WRITE && XXZL_UUID_WRITE && (n && "-1" != n && a || _0xd7e6c.set("xzuid", XXZL_UUID_WRITE))))
            // }, 1500)
        }, $ajax: function (e) {
            var t = this;
            if (!e) throw new TypeError(e + " is not defined");
            var a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
                n = "vertify_" + function () {
                    for (var e = "", t = 0; t < 18; t++) {
                        var n = Math.ceil(35 * Math.random());
                        e += a[n]
                    }
                    return e
                }(), r = document.getElementById(n);
            r && r.parentNode.removeChild(r), f[n] = function (e) {
                "boolean" == typeof e && (e || t.init(t.configCatch));
                e = document.getElementById(n);
                document.body.removeChild(e)
            }, miScript = document.createElement("script"), miScript.type = "text/javascript", miScript.setAttribute("id", n), miScript.src = e.url + "&callback=" + n, document.body.appendChild(miScript)
        }, setCookie: function (t, n) {
            try {
                var a = /[http:|https:]\/\/([^\/]+)\//i.exec(document.location.href)[1].split("."),
                    r = "." + a[a.length - 2] + "." + a[a.length - 1]
            } catch (e) {
                r = ".58.com"
            }
            (a = new Date).setTime(a.getTime() + 31536e7), document.cookie = t + "=" + n + ";expires=" + a + ";domain=" + r + ";path=/"
        }, get: function (o, c) {
            var s = this, l = [], e = [];
            (l = []).push({id58: s.getCookie("id58") + "|" + s.getCookie("58cooper") + "|" + s.getCookie("GanjiUserInfo") + "|" + s.getCookie("xxzl_deviceid") + "|" + s.getCookie("PPU")});
            for (var t = 0, n = o.cookieId.length; t < n; t++) e.push(o.cookieId[t] + "," + s.getCookie(o.cookieId[t]));
            new UAParser;

            function a(a) {
                l.push({cookie: 0 < e.length ? e.join("|") : "-1"}), l.push({ua: navigator.userAgent}), l.push({language: navigator.language}), l.push({color: screen.colorDepth}), l.push({screen_r: f.screen.height + "," + f.screen.width}), l.push({timezone: (new Date).getTimezoneOffset()}), l.push({session_storage: s.sessionStorageKey()}), l.push({local_storage: s.localStorageKey()}), l.push({indexed_db: s.indexedDbKey()}), l.push({add_behavior: s.addBehaviorKey()}), l.push({open_database: s.openDatabaseKey()}), l.push({cpu: s.cpuClassKey()}), l.push({platform: s.platformKey()}), l.push({treed: s.doNotTrackKey()}), l.push({touch: s.touchSupportKey()}), l.push({adblock: s.adBlockKey()}), l.push({change_lang: s.hasLiedLanguagesKey()}), l.push({change_size: s.hasLiedResolutionKey()}), l.push({change_os: s.hasLiedOsKey()}), l.push({change_browser: s.hasLiedBrowserKey()});
                var r = s.pluginsKey(), i = s.getFontsKey();
                l.push({plugin: r}), l.push({font: i}), l.push({canvas: s.canvasKey()}), l.push({webgl: s.webglKey()}), l.push({domain: s.getDomain()}), l.push({device_type: s.getDeviceType()}), l.push({local_time: (new Date).getTime()}), l.push({screen_top: f.screenTop || "-1"}), l.push({screen_y: f.screenY || "-1"}), l.push({screen_left: f.screenLeft || "-1"}), l.push({avail_width: f.screen.availWidth || "-1"}), l.push({avail_height: f.screen.availHeight || "-1"}), l.push({avail_top: f.screen.availTop || "-1"}), l.push({avail_left: f.screen.availLeft || "-1"}), l.push({inner_height: f.innerHeight || "-1"}), l.push({inner_width: f.innerWidth || "-1"}), l.push({device_pixel_ratio: f.devicePixelRatio || "-1"}), l.push({pixel_depth: f.screen.pixelDepth || "-1"}), l.push({build_id: navigator.buildID || "-1"}), l.push({product_sub: navigator.productSub || "-1"}), l.push({product: navigator.product || "-1"}), l.push({max_touch_points: navigator.maxTouchPoints || "-1"}), l.push({device_memory: navigator.deviceMemory || "-1"}), l.push({user_language: navigator.userLanguage || "-1"}), l.push({browser_language: navigator.browserLanguage || "-1"}), l.push({system_language: navigator.systemLanguage || "-1"}), l.push({window_api_num: Object.getOwnPropertyNames(f) ? Object.getOwnPropertyNames(f).length : "-1"}), l.push({is_canvas_supported: s.isCanvasSupported()}), l.push({canvas_arr: s.canvasArr()}), l.push({infinity: f.Infinity || "-1"}), l.push({downlink: navigator.connection && navigator.connection.downlink ? navigator.connection.downlink : "-1"}), l.push({effective_type: navigator.connection && navigator.connection.effectiveType ? navigator.connection.effectiveType : "-1"}), l.push({rtt: navigator.connection && navigator.connection.rtt ? navigator.connection.rtt : "-1"}), l.push({save_data: navigator.connection && navigator.connection.saveData ? navigator.connection.saveData : "-1"}), l.push({cookie_enabled: navigator.cookieEnabled || "-1"}), l.push({scroll_restoration: history.scrollRestoration || "-1"}), l.push({is_secure_context: f.isSecureContext || "-1"});
                var t = function () {
                    l.push({app_name: navigator.appCodeName}), l.push({app_code_name: navigator.appName}), l.push({app_version: navigator.appVersion}), l.push({vendor: navigator.vendor}), l.push({web_driver: navigator.webdriver || "-1"}), l.push({hardware_concurrency: navigator.hardwareConcurrency || "-1"}), r && "-1" != r ? l.push({plugin_hash: s.hashcode(r)}) : l.push({plugin_hash: "-1"}), i && "-1" != i ? l.push({font_hash: s.hashcode(i)}) : l.push({font_hash: "-1"}), s.getBrowserKey(l), l.push({languages: navigator.languages ? navigator.languages.join(",") : "-1"}), l.push({navigator_keys: s.navigatorKey()}), l.push({uuid: a});
                    for (var e = {}, t = 0; t < l.length; t++) for (var n in l[t]) e[n] = l[t][n];
                    c(e)
                }, n = function (e) {
                    l.push({font_list: e}), s.getInnerIp(function (e) {
                        e = e, l.push({lan_ip: e}), s.getbatteryInfos(l, function () {
                            s.getwebrtcids(l, t)
                        })
                    })
                };
                getAudio = function (e) {
                    l.push({audio: e}), s.getFlashFontsKey(o.url, n)
                }, s.getAudioKey(getAudio)
            }

            "sogou" == browserTypeReal ? a("") : _0xd7e6c.get("xzuid", function (e) {
                e ? (s.monitor("xzuid", e), a(e)) : a(""), s.pollingEvent()
            })
        }, monitor: function (t, n) {
            var a = this;
            /* 此处修改 */
            n && (a.monit && clearInterval(a.monit), a.monit = function () {
            });
            //     a.monit = setInterval(function () {
            //     var e = a.getCookie(t);
            //     e && "" != e && "-1" != e || "sogou" == browserTypeReal || _0xd7e6c.set(t, n)
            // }, 200))
        }, getFlashFontsKey: function (r, i) {
            var e, t = !0;

            function n() {
                for (var e = navigator.userAgent.split(" "), t = "", n = 0; n < e.length; n++) /chrome/i.test(e[n]) && (t = e[n]);
                return !!t && Number(t.split("/")[1].split(".")[0])
            }

            if (!n() || (e = n()) && e < 59 && (t = !0), t || "QQ" == browserTypeReal || "360" == browserTypeReal || "360old" == browserTypeReal || "sogou" == browserTypeReal || "IE" == browserTypeReal) i("-1"); else {
                var o, a, c = this;
                try {
                    c.flashFlag = !1, !u && swfobject ? (o = function () {
                        var e = document.createElement("div");
                        e.setAttribute("id", "trackerFp"), e.style.display = "block", e.style.zIndex = "-9999", e.style.width = "0", e.style.height = "0", document.body.appendChild(e)
                    }, a = "", function (t) {
                        var e = "___fp_swf_loaded", n = r;
                        f[e] = function (e) {
                            0 == c.flashFlag && (c.flashFlag = !0, t(e))
                        };
                        o();
                        var a = {onReady: e};
                        if (!swfobject.hasFlashPlayerVersion("9.0.0") && 0 == c.flashFlag) return c.flashFlag = !0, i("-1");
                        swfobject.embedSWF(n, "trackerFp", "1", "1", "9.0.0", !1, a, {
                            allowScriptAccess: "always",
                            menu: "true"
                        }, {}), f.setTimeout(function () {
                            0 == c.flashFlag && (c.flashFlag = !0, f[e] = function () {
                            }, i("-1"))
                        }, 200)
                    }(function (e) {
                        a = e.join("|"), 0 == c.flashFlag && (c.flashFlag = !0, i("" !== a ? decodeURI(a) : "-1"))
                    })) : 0 == c.flashFlag && (c.flashFlag = !0, i("-1"))
                } catch (s) {
                    0 == c.flashFlag && (c.flashFlag = !0, i("-1"))
                }
            }
        }, getCookie: function (e) {
            var e = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
            return (e = document.cookie.match(e)) ? decodeURI(e[2]) : "-1"
        }, sessionStorageKey: function () {
            try {
                return f.sessionStorage ? 1 : 0
            } catch (e) {
                return -1
            }
        }, localStorageKey: function () {
            try {
                return f.localStorage ? 1 : 0
            } catch (e) {
                return -1
            }
        }, indexedDbKey: function () {
            try {
                return f.indexedDB ? 1 : 0
            } catch (e) {
                return -1
            }
        }, addBehaviorKey: function () {
            try {
                return document.body && document.body.addBehavior ? 1 : 0
            } catch (e) {
                return -1
            }
        }, openDatabaseKey: function () {
            try {
                return f.openDatabase ? 1 : 0
            } catch (e) {
                return -1
            }
        }, cpuClassKey: function () {
            return navigator.cpuClass || "-1"
        }, platformKey: function () {
            return navigator.platform || "-1"
        }, doNotTrackKey: function () {
            return navigator.doNotTrack ? navigator.doNotTrack ? "1" : "0" : "-1"
        }, touchSupportKey: function () {
            try {
                return "ontouchend" in f ? 1 : 0
            } catch (e) {
                return -1
            }
        }, adBlockKey: function () {
            var e = document.createElement("div");
            return e.setAttribute("id", "ads"), document.body.appendChild(e), document.getElementById("ads") ? -1 : 0
        }, hasLiedLanguagesKey: function () {
            if ("undefined" != typeof navigator.languages) try {
                if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return 1
            } catch (e) {
                return -1
            }
            return 0
        }, hasLiedResolutionKey: function () {
            return f.screen.width < f.screen.availWidth || f.screen.height < f.screen.availHeight ? 1 : 0
        }, hasLiedOsKey: function () {
            var e = navigator.userAgent.toLowerCase(), t = navigator.oscpu, n = navigator.platform.toLowerCase(),
                a = 0 <= e.indexOf("windows phone") ? "Windows Phone" : 0 <= e.indexOf("win") ? "Windows" : 0 <= e.indexOf("android") ? "Android" : 0 <= e.indexOf("linux") ? "Linux" : 0 <= e.indexOf("iPhone") || 0 <= e.indexOf("iPad") ? "iOS" : 0 <= e.indexOf("mac") ? "Mac" : "Other",
                e = "ontouchstart" in f || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 1 : 0;
            if (e && "Windows Phone" !== a && "Android" !== a && "iOS" !== a && "Other" !== a) return 1;
            if (void 0 !== t) {
                if (0 <= (t = t.toLowerCase()).indexOf("win") && "Windows" !== a && "Windows Phone" !== a) return 1;
                if (0 <= t.indexOf("linux") && "Linux" !== a && "Android" !== a) return 1;
                if (0 <= t.indexOf("mac") && "Mac" !== a && "iOS" !== a) return 1;
                if (0 === t.indexOf("win") && 0 === t.indexOf("linux") && 0 <= t.indexOf("mac") && "other" !== a) return 1
            }
            return 0 <= n.indexOf("win") && "Windows" !== a && "Windows Phone" !== a || (0 <= n.indexOf("linux") || 0 <= n.indexOf("android") || 0 <= n.indexOf("pike")) && "Linux" !== a && "Android" !== a || (0 <= n.indexOf("mac") || 0 <= n.indexOf("ipad") || 0 <= n.indexOf("ipod") || 0 <= n.indexOf("iphone")) && "Mac" !== a && "iOS" !== a || 0 === n.indexOf("win") && 0 === n.indexOf("linux") && 0 <= n.indexOf("mac") && "other" !== a || "undefined" == typeof navigator.plugins && "Windows" !== a && "Windows Phone" !== a ? 1 : 0
        }, hasLiedBrowserKey: function () {
            var e = navigator.userAgent.toLowerCase(), t = navigator.productSub,
                e = 0 <= e.indexOf("firefox") ? "Firefox" : 0 <= e.indexOf("opera") || 0 <= e.indexOf("opr") ? "Opera" : 0 <= e.indexOf("chrome") ? "Chrome" : 0 <= e.indexOf("safari") ? "Safari" : 0 <= e.indexOf("trident") ? "Internet Explorer" : "Other";
            if (("Chrome" === e || "Safari" === e || "Opera" === e) && "20030107" !== t) return 1;
            var n, t = eval.toString().length;
            if (37 === t && "Safari" !== e && "Firefox" !== e && "Other" !== e) return 1;
            if (39 === t && "Internet Explorer" !== e && "Other" !== e) return 1;
            if (33 === t && "Chrome" !== e && "Opera" !== e && "Other" !== e) return 1;
            try {
                throw"a"
            } catch (a) {
                try {
                    a.toSource(), n = !0
                } catch (r) {
                    n = !1
                }
            }
            return n && "Firefox" !== e && "Other" !== e ? 1 : 0
        }, pluginsKey: function () {
            var e;
            return "-1" == (e = this.isIE() ? "" !== (e = this.getIEPluginsString()) ? e : "-1" : "" !== (e = this.getRegularPluginsString()) ? e : "-1") ? "-1" : e
        }, getFontsKey: function () {
            var r = ["monospace", "sans-serif", "serif"], i = document.getElementsByTagName("body")[0],
                o = document.createElement("span");
            o.style.fontSize = "72px", o.innerHTML = "mmmmmmmmmmlli";
            var e, c = {}, s = {};
            for (e in r) o.style.fontFamily = r[e], i.appendChild(o), c[r[e]] = o.offsetWidth, s[r[e]] = o.offsetHeight, i.removeChild(o);
            for (var t = ["PMingLiU", "Microsoft JhengHei", "Microsoft YaHei", "LiSu", "YouYuan", "STXihei", "STKaiti", "STSong", "STZhongsong", "STFangsong", "FZShuTi", "FZYaoti", "STCaiyun", "STHupo", "STLiti", "STXingkai", "STXinwei", "STHeiti", "LiHei Pro Medium", "LiSong Pro Light", "BiauKai", "Apple LiGothic Medium", "Apple LiSung Light", "Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3", "Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter"], n = [], a = 0, l = t.length; a < l; a++) !function (e) {
                var t, n = !1;
                for (t in r) {
                    o.style.fontFamily = e + "," + r[t], i.appendChild(o);
                    var a = o.offsetWidth !== c[r[t]] || o.offsetHeight !== s[r[t]];
                    i.removeChild(o), n = n || a
                }
                return n
            }(t[a]) ? n.push("0") : n.push("1");
            var u = n.join("");
            return u.indexOf("1") < 0 ? -1 : u
        }, canvasKey: function () {
            return this.isCanvasSupported() ? this.tryManyTimes(this.getCanvasFp.bind(this)) : -1
        }, canvasArr: function () {
            return this.isCanvasSupported() ? this.getCanvasFpArr() : -1
        }, tryManyTimes: function (e) {
            var t = -1, n = e(), a = e();
            return t = null == (t = n == a && -1 != a ? a : n == a && -1 == a ? e() : n == (e = e()) ? e : a) || t == l || "" == t ? -1 : t
        }, webglKey: function () {
            if (this.isWebGlSupported()) {
                var e = this.getWebglFp(), t = this.getWebglFp();
                if (e == t && -1 != t) return t;
                if (e == t && -1 == t) return this.getWebglFp();
                var n = this.getWebglFp();
                return e == n ? n : t
            }
            return "-1|-1|-1"
        }, getDomain: function () {
            return document.referrer && document.referrer.split("/")[2] ? document.referrer.split("/")[2] : -1
        }, getDeviceType: function () {
            return u ? "m" : "pc"
        }, navigatorKey: function () {
            var e, t = new Array;
            for (e in navigator) t.push(e);
            return t.join("|")
        }, getBrowserKey: function (e) {
            var t = new UAParser;
            e.push({browser_name: t.getBrowser().name ? t.getBrowser().name : "-1"}), e.push({browser_version: t.getBrowser().version ? t.getBrowser().version : "-1"}), e.push({device_info: (t.getDevice().model ? t.getDevice().model : "-1") + "|" + (t.getDevice().type ? t.getDevice().type : "-1") + "|" + (t.getDevice().vendor ? t.getDevice().vendor : "-1")}), e.push({engine_name: t.getEngine().name ? t.getEngine().name : "-1"}), e.push({os_name: t.getOS().name ? t.getOS().name : "-1"}), e.push({os_version: t.getOS().version ? t.getOS().version : "-1"})
        }, getAudioKey: function (r) {
            var i = !1;
            if (u) i || (i = !0, r("-1|-1")); else {
                navigator.userAgent.toLowerCase();
                var e, t, o, c, s = {};
                if ((f.AudioContext || f.webkitAudioContext) === l) s.pxi_hash = -1, s.pxi_output = -1, i = !0, r(s.pxi_hash + "|" + s.pxi_output); else try {
                    (e = new (f.OfflineAudioContext || f.webkitOfflineAudioContext)(1, 44100, 44100)) || (s.pxi_output = 0), (t = e.createOscillator()).type = "triangle", t.frequency.value = 1e4, (o = e.createDynamicsCompressor()).threshold && (o.threshold.value = -50), o.knee && (o.knee.value = 40), o.ratio && (o.ratio.value = 12), o.reduction && (o.reduction.value = -20), o.attack && (o.attack.value = 0), o.release && (o.release.value = .25), t.connect(o), o.connect(e.destination), t.start(0), e.startRendering(), e.oncomplete = function (e) {
                        s.pxi_output = 0;
                        for (var t = CryptoJS.SHA1, n = "", a = 0; a < e.renderedBuffer.length; a++) n += e.renderedBuffer.getChannelData(0)[a].toString();
                        c = t(n), s.pxi_hash = c.toString(CryptoJS.enc.Hex);
                        for (a = 4500; a < 5e3; a++) s.pxi_output += Math.abs(e.renderedBuffer.getChannelData(0)[a]);
                        o.disconnect(), i || (i = !0, r(s.pxi_hash + "|" + s.pxi_output))
                    }
                } catch (n) {
                    s.pxi_hash = -1, s.pxi_output = -1, i || (i = !0, r(s.pxi_hash + "|" + s.pxi_output))
                }
            }
            setTimeout(function () {
                i || (i = !0, r("-1|-1"))
            }, 100)
        }, getCanvasFp: function () {
            try {
                var t = document.createElement("canvas");
                t.width = 2e3, t.height = 200, t.style.display = "inline";
                var n = t.getContext("2d");
                n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", n.font = "11pt Arial", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.7)", n.font = "18pt Arial", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), n.globalCompositeOperation = "multiply", n.fillStyle = "rgb(255,0,255)", n.beginPath(), n.arc(50, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(0,255,255)", n.beginPath(), n.arc(100, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,255,0)", n.beginPath(), n.arc(75, 100, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,0,255)", n.arc(75, 75, 75, 0, 2 * Math.PI, !0), n.arc(75, 75, 25, 0, 2 * Math.PI, !0), n.fill("evenodd");
                var a = t.toDataURL().replace("data:image/png;base64,", ""), r = this.atob(a);
                return this.bin2hex(r.slice(-16, -12))
            } catch (e) {
                return "-1"
            }
        }, getCanvasFpArr: function () {
            try {
                var t = document.createElement("canvas");
                t.width = 2e3, t.height = 200, t.style.display = "inline";
                var n = t.getContext("2d");
                n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", n.font = "11pt Arial", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.7)", n.font = "18pt Arial", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), n.globalCompositeOperation = "multiply", n.fillStyle = "rgb(255,0,255)", n.beginPath(), n.arc(50, 49, 49, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(0,255,255)", n.beginPath(), n.arc(100, 49, 49, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,255,0)", n.beginPath(), n.arc(75, 100, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,0,255)", n.arc(75, 75, 75, 0, 2 * Math.PI, !0), n.arc(75, 75, 25, 0, 2 * Math.PI, !0), n.fill("evenodd");
                var a = t.toDataURL().replace("data:image/png;base64,", ""), r = this.atob(a),
                    i = this.bin2hex(r.slice(-16, -12));
                n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", n.font = "11pt Arial", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.7)", n.font = "18pt Arial", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), n.globalCompositeOperation = "multiply", n.fillStyle = "rgb(255,0,255)", n.beginPath(), n.arc(50, 51, 51, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(0,255,255)", n.beginPath(), n.arc(100, 51, 51, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,255,0)", n.beginPath(), n.arc(75, 100, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,0,255)", n.arc(75, 75, 75, 0, 2 * Math.PI, !0), n.arc(75, 75, 25, 0, 2 * Math.PI, !0), n.fill("evenodd");
                var o = t.toDataURL().replace("data:image/png;base64,", ""), c = this.atob(o),
                    s = this.bin2hex(c.slice(-16, -12));
                n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", n.font = "11pt Arial", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.7)", n.font = "18pt Arial", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), n.globalCompositeOperation = "multiply", n.fillStyle = "rgb(255,0,255)", n.beginPath(), n.arc(50, 52, 52, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(0,255,255)", n.beginPath(), n.arc(100, 52, 52, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,255,0)", n.beginPath(), n.arc(75, 100, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,0,255)", n.arc(75, 75, 75, 0, 2 * Math.PI, !0), n.arc(75, 75, 25, 0, 2 * Math.PI, !0), n.fill("evenodd");
                var l = t.toDataURL().replace("data:image/png;base64,", ""), u = this.atob(l);
                return [i, s, this.bin2hex(u.slice(-16, -12))].join(",")
            } catch (e) {
                return "-1"
            }
        }, isCanvasSupported: function () {
            var e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"))
        }, getWebglFp: function () {
            var e = this.getWebglCanvas();
            if (!e) return "-1|-1|-1";
            var t = [], n = e.createBuffer();
            e.bindBuffer(e.ARRAY_BUFFER, n);
            var a = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
            e.bufferData(e.ARRAY_BUFFER, a, e.STATIC_DRAW), n.itemSize = 3, n.numItems = 3;
            var r = e.createProgram(), i = e.createShader(e.VERTEX_SHADER);
            e.shaderSource(i, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), e.compileShader(i);
            a = e.createShader(e.FRAGMENT_SHADER);
            e.shaderSource(a, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), e.compileShader(a), e.attachShader(r, i), e.attachShader(r, a), e.linkProgram(r), e.useProgram(r), r.vertexPosAttrib = e.getAttribLocation(r, "attrVertex"), r.offsetUniform = e.getUniformLocation(r, "uniformOffset"), e.enableVertexAttribArray(r.vertexPosArray), e.vertexAttribPointer(r.vertexPosAttrib, n.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(r.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, n.numItems), null != e.canvas && (c = e.canvas.toDataURL().replace("data:image/png;base64,", ""), o = this.atob(c), c = this.bin2hex(o.slice(-16, -12)), t.push(c));
            var o = "-1", c = "-1";
            return 0 <= e.getSupportedExtensions().indexOf("WEBGL_debug_renderer_info") && (o = e.getParameter(e.getExtension("WEBGL_debug_renderer_info").UNMASKED_VENDOR_WEBGL), c = e.getParameter(e.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL)), t.push(c), t.push(o), t.join("|")
        }, isWebGlSupported: function () {
            if (!this.isCanvasSupported()) return !1;
            var t, n = document.createElement("canvas");
            n.width = "1px", n.height = "1px", document.body.appendChild(n);
            try {
                t = n.getContext && (n.getContext("webgl") || n.getContext("experimental-webgl"))
            } catch (e) {
                t = !1
            }
            return !!f.WebGLRenderingContext && !!t
        }, getWebglCanvas: function () {
            var t = document.createElement("canvas"), n = null;
            try {
                n = t.getContext("webgl") || t.getContext("experimental-webgl")
            } catch (e) {
            }
            return n = n || null
        }, isIE: function () {
            return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
        }, getIEPluginsString: function () {
            if (f.ActiveXObject) return this.map(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control", "RealVideo.RealVideo(tm) ActiveX Control", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], function (t) {
                try {
                    return new ActiveXObject(t), t
                } catch (e) {
                    return null
                }
            }).join("|");
            return "-1"
        }, getRegularPluginsString: function () {
            for (var e = [], t = 0, n = navigator.plugins.length; t < n; t++) e.push(navigator.plugins[t]);
            return e = e.sort(function (e, t) {
                return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
            }), this.map(e, function (e) {
                var t = this.map(e, function (e) {
                    return [e.type, e.suffixes].join("~")
                }).join(",");
                return [e.name, e.description, t].join(":")
            }, this).join("|")
        }, atob: function (e) {
            function t(e) {
                this.message = e
            }

            (t.prototype = new Error).name = "InvalidCharacterError";
            var n = String(e).replace(/=+$/, "");
            if (n.length % 4 == 1) throw new t("atob failed: The string to be decoded is not correctly encoded.");
            for (var a, r, i = 0, o = 0, c = ""; r = n.charAt(o++); ~r && (a = i % 4 ? 64 * a + r : r, i++ % 4) && (c += String.fromCharCode(255 & a >> (-2 * i & 6)))) r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);
            return c
        }, byte2Hex: function (e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }, each: function (e, t, n) {
            if (null !== e) if (this.nativeForEach && e.forEach === this.nativeForEach) e.forEach(t, n); else if (e.length === +e.length) {
                for (var a = 0, r = e.length; a < r; a++) if (t.call(n, e[a], a, e) === {}) return
            } else for (var i in e) if (e.hasOwnProperty(i) && t.call(n, e[i], i, e) === {}) return
        }, map: function (e, a, r) {
            var i = [];
            return null == e ? i : this.nativeMap && e.map === this.nativeMap ? e.map(a, r) : (this.each(e, function (e, t, n) {
                i[i.length] = a.call(r, e, t, n)
            }), i)
        }, bin2hex: function (e) {
            for (var t = "", n = 0; n < e.length; n++) {
                var a = e.charCodeAt(n);
                t += this.byte2Hex(a >> 8 & 255), t += this.byte2Hex(255 & a)
            }
            return t
        }, getwebrtcids: function (t, n) {
            var a = !1;
            try {
                t.push({webrt_cid_list: "-1"}), n()
            } catch (e) {
                a || (a = !0, t.push({webrt_cid_list: "-1"}), n())
            }
        }, getbatteryInfos: function (t, n) {
            try {
                "sogou" != browserTypeReal && "360old" != browserTypeReal && navigator.getBattery ? navigator.getBattery().then(function (e) {
                    new Array;
                    t.push({battery_info: e.charging + "|" + e.chargingTime + "|" + e.dischargingTime}), n()
                }) : (t.push({battery_info: "-1"}), n())
            } catch (e) {
                t.push({battery_info: "-1"}), n()
            }
        }, getInnerIp: function (a) {
            var r = !1;
            try {
                var i = {}, t = f.RTCPeerConnection || f.mozRTCPeerConnection || f.webkitRTCPeerConnection;
                if (!t) {
                    var n = document.createElement("iframe");
                    n.sandbox = "allow-same-origin", n.style.display = "none", document.body.appendChild(n);
                    try {
                        var o = n.contentWindow;
                        f.RTCPeerConnection = o.RTCPeerConnection, f.mozRTCPeerConnection = o.mozRTCPeerConnection, f.webkitRTCPeerConnection = o.webkitRTCPeerConnection, t = f.RTCPeerConnection || f.mozRTCPeerConnection || f.webkitRTCPeerConnection
                    } catch (e) {
                        if (!r) return r = !0, void a("-1")
                    }
                }
                try {
                    var c = new t(f.webkitRTCPeerConnection ? {iceServers: [{urls: "stun:stun.services.mozilla.com"}]} : l, {optional: [{RtpDataChannels: !0}]});
                    c.onicecandidate = function (t) {
                        if (t.candidate) try {
                            var n = /([0-9]{1,3}(\.[0-9]{1,3}){3})/.exec(t.candidate.candidate)[1];
                            i[n] === l && (r || (r = !0, a(n))), i[n] = !0
                        } catch (e) {
                            r || (r = !0, a("-1"))
                        }
                    }, c.createDataChannel(""), c.createOffer(function (e) {
                        c.setLocalDescription(e, function () {
                        }, function () {
                        })
                    }, function () {
                    })
                } catch (e) {
                    r || (r = !0, a("-1"))
                }
            } catch (e) {
                r || (r = !0, a("-1"))
            }
            setTimeout(function () {
                r || (r = !0, a("-1"))
            }, 300)
        }, hashcode: function (e) {
            for (var t = 0, n = 0, a = (e += "").length, r = 0; r < a; r++) (2147483647 < (t = 31 * t + e.charCodeAt(n++)) || t < 2147483648) && (t &= 4294967295);
            return t
        }
    }, f._dfp = new t
}(window);