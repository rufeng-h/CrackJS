window.ufp = window.ufp || {};
window.ufp.config = {
    platforms: [
        ["Win", 1],
        ["Mac", 2],
        ["Linux", 3],
        ["FreeBSD", 4],
        ["iPhone", 21.1],
        ["iPod", 21.2],
        ["iPad", 21.3],
        ["Win.*CE", 12.1],
        ["Win.*Mobile", 12.2],
        ["Pocket\\s*PC", 12.3],
        ["", 999]
    ],

    plugins: {
        '\u9a71\u52a8\u7cbe\u7075\u5728\u7ebf\u72481.0.0.5': {
            classid: 'clsid:A9EA64C1-D146-4B99-86A7-68B1786D82C0',
            filename: "dgweb.dll",
            name: "\u9a71\u52a8\u7cbe\u7075\u5728\u7ebf\u7248",
            version: '1.0.0.5'
        },
        'PPLive Lite Class ver 3.1.8.6046': {
            classid: 'clsid:EF0D1A14-1033-41A2-A589-240C01EDC078',
            filename: "pplugin2.dll",
            name: "PPLive Lite Class",
            version: '3.1.8.6046'
        },
        'baiduplayer Browser Plugin': {
            classid: 'clsid:02E2D748-67F8-48B4-8AB4-0A085374BB99',
            filename: "npxbdyy.dll",
            name: "BaiduPlayer Browser Plugin"
        },
        'webmod Class': {
            classid: 'clsid:FEE3C8C5-9BEA-4079-AB36-63ECABFC7392',
            filename: "Alidcp.dll"
        }
    },

    Detectable_Components_in_Internet_Explorer_by_capclient: {
        "Address Book": "7790769C-0471-11D2-AF11-00C04FA35D02",
        "Windows Desktop Update NT": "89820200-ECBD-11CF-8B85-00AA005B4340",
        "DirectAnimation": "283807B5-2C60-11D0-A31D-00AA00B92C03",
        "DirectAnimation Java Classes": "4F216970-C90C-11D1-B5C7-0000F8051515",
        "DirectShow": "44BBA848-CC51-11CF-AAFA-00AA00B6015C",
        "Dynamic HTML Data Binding": "9381D8F2-0288-11D0-9501-00AA00B911A5",
        "Dynamic HTML Data Binding for Java": "4F216970-C90C-11D1-B5C7-0000F8051515",
        "Internet Connection Wizard": "5A8D6EE0-3E18-11D0-821E-444553540000",
        "Internet Explorer 5 Browser": "89820200-ECBD-11CF-8B85-00AA005B4383",
        "Windows Internet Explorer Classes for Java": "08B0E5C0-4FCB-11CF-AAA5-00401C608555",
        "Internet Explorer Help": "45EA75A0-A269-11D1-B5BF-0000F8051515",
        "Internet Explorer Help Engine": "DE5AED00-A4BF-11D1-9948-00C04F98BBC9",
        "Windows Media Player": "22D6F312-B0F6-11D0-94AB-0080C74C7E95",
        "NetMeeting NT": "44BBA842-CC51-11CF-AAFA-00AA00B6015B",
        "Offline Browsing Pack": "3AF36230-A269-11D1-B5BF-0000F8051515",
        "Outlook Express": "44BBA840-CC51-11CF-AAFA-00AA00B6015C",
        "Task Scheduler": "CC2A9BA0-3BDD-11D0-821E-444553540000",
        "Microsoft virtual machine": "08B0E5C0-4FCB-11CF-AAA5-00401C608500"
    },

    //pull from http://sjs.sinajs.cn/blog7swf/fonts.swf for ssl reason
    flashUrl_fonts: "/images/visitor/fonts.swf",
    fpPostInterface: "visitor/genvisitor",
    fpCollectInterface: "visitor/record"
};

/*	SWFObject v2.2 <http://code.google.com/p/swfobject/>
 is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */
var swfobject = function () {
    var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash",
        q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window,
        j = document, t = navigator, T = false, U = [h], o = [], N = [], I = [], l, Q, E, B, J = false, a = false, n, G,
        m = true, M = function () {
            var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                ah = t.userAgent.toLowerCase(), Y = t.platform.toLowerCase(), ae = Y ? /win/.test(Y) : /win/.test(ah),
                ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, X = !+"\v1",
                ag = [0, 0, 0], ab = null;
            if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                ab = t.plugins[S].description;
                if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                    T = true;
                    X = false;
                    ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                    ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                    ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                }
            } else {
                if (typeof O.ActiveXObject != D) {
                    try {
                        var ad = new ActiveXObject(W);
                        if (ad) {
                            ab = ad.GetVariable("$version");
                            if (ab) {
                                X = true;
                                ab = ab.split(" ")[1].split(",");
                                ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        }
                    } catch (Z) {
                    }
                }
            }
            return {w3: aa, pv: ag, wk: af, ie: X, win: ae, mac: ac}
        }(), k = function () {
            if (!M.w3) {
                return
            }
            if ((typeof j.readyState != D && j.readyState == "complete") || (typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body))) {
                f()
            }
            if (!J) {
                if (typeof j.addEventListener != D) {
                    j.addEventListener("DOMContentLoaded", f, false)
                }
                if (M.ie && M.win) {
                    j.attachEvent(x, function () {
                        if (j.readyState == "complete") {
                            j.detachEvent(x, arguments.callee);
                            f()
                        }
                    });
                    if (O == top) {
                        (function () {
                            if (J) {
                                return
                            }
                            try {
                                j.documentElement.doScroll("left")
                            } catch (X) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            f()
                        })()
                    }
                }
                if (M.wk) {
                    (function () {
                        if (J) {
                            return
                        }
                        if (!/loaded|complete/.test(j.readyState)) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        f()
                    })()
                }
                s(f)
            }
        }();

    function f() {
        if (J) {
            return
        }
        try {
            var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
            Z.parentNode.removeChild(Z)
        } catch (aa) {
            return
        }
        J = true;
        var X = U.length;
        for (var Y = 0; Y < X; Y++) {
            U[Y]()
        }
    }

    function K(X) {
        if (J) {
            X()
        } else {
            U[U.length] = X
        }
    }

    function s(Y) {
        if (typeof O.addEventListener != D) {
            O.addEventListener("load", Y, false)
        } else {
            if (typeof j.addEventListener != D) {
                j.addEventListener("load", Y, false)
            } else {
                if (typeof O.attachEvent != D) {
                    i(O, "onload", Y)
                } else {
                    if (typeof O.onload == "function") {
                        var X = O.onload;
                        O.onload = function () {
                            X();
                            Y()
                        }
                    } else {
                        O.onload = Y
                    }
                }
            }
        }
    }

    function h() {
        if (T) {
            V()
        } else {
            H()
        }
    }

    function V() {
        var X = j.getElementsByTagName("body")[0];
        var aa = C(r);
        aa.setAttribute("type", q);
        var Z = X.appendChild(aa);
        if (Z) {
            var Y = 0;
            (function () {
                if (typeof Z.GetVariable != D) {
                    var ab = Z.GetVariable("$version");
                    if (ab) {
                        ab = ab.split(" ")[1].split(",");
                        M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                    }
                } else {
                    if (Y < 10) {
                        Y++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                }
                X.removeChild(aa);
                Z = null;
                H()
            })()
        } else {
            H()
        }
    }

    function H() {
        var ag = o.length;
        if (ag > 0) {
            for (var af = 0; af < ag; af++) {
                var Y = o[af].id;
                var ab = o[af].callbackFn;
                var aa = {success: false, id: Y};
                if (M.pv[0] > 0) {
                    var ae = c(Y);
                    if (ae) {
                        if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                            w(Y, true);
                            if (ab) {
                                aa.success = true;
                                aa.ref = z(Y);
                                ab(aa)
                            }
                        } else {
                            if (o[af].expressInstall && A()) {
                                var ai = {};
                                ai.data = o[af].expressInstall;
                                ai.width = ae.getAttribute("width") || "0";
                                ai.height = ae.getAttribute("height") || "0";
                                if (ae.getAttribute("class")) {
                                    ai.styleclass = ae.getAttribute("class")
                                }
                                if (ae.getAttribute("align")) {
                                    ai.align = ae.getAttribute("align")
                                }
                                var ah = {};
                                var X = ae.getElementsByTagName("param");
                                var ac = X.length;
                                for (var ad = 0; ad < ac; ad++) {
                                    if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                        ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                    }
                                }
                                P(ai, ah, Y, ab)
                            } else {
                                p(ae);
                                if (ab) {
                                    ab(aa)
                                }
                            }
                        }
                    }
                } else {
                    w(Y, true);
                    if (ab) {
                        var Z = z(Y);
                        if (Z && typeof Z.SetVariable != D) {
                            aa.success = true;
                            aa.ref = Z
                        }
                        ab(aa)
                    }
                }
            }
        }
    }

    function z(aa) {
        var X = null;
        var Y = c(aa);
        if (Y && Y.nodeName == "OBJECT") {
            if (typeof Y.SetVariable != D) {
                X = Y
            } else {
                var Z = Y.getElementsByTagName(r)[0];
                if (Z) {
                    X = Z
                }
            }
        }
        return X
    }

    function A() {
        return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
    }

    function P(aa, ab, X, Z) {
        a = true;
        E = Z || null;
        B = {success: false, id: X};
        var ae = c(X);
        if (ae) {
            if (ae.nodeName == "OBJECT") {
                l = g(ae);
                Q = null
            } else {
                l = ae;
                Q = X
            }
            aa.id = R;
            if (typeof aa.width == D || (!/%$/.test(aa.width) && parseInt(aa.width, 10) < 310)) {
                aa.width = "310"
            }
            if (typeof aa.height == D || (!/%$/.test(aa.height) && parseInt(aa.height, 10) < 137)) {
                aa.height = "137"
            }
            j.title = j.title.slice(0, 47) + " - Flash Player Installation";
            var ad = M.ie && M.win ? "ActiveX" : "PlugIn",
                ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
            if (typeof ab.flashvars != D) {
                ab.flashvars += "&" + ac
            } else {
                ab.flashvars = ac
            }
            if (M.ie && M.win && ae.readyState != 4) {
                var Y = C("div");
                X += "SWFObjectNew";
                Y.setAttribute("id", X);
                ae.parentNode.insertBefore(Y, ae);
                ae.style.display = "none";
                (function () {
                    if (ae.readyState == 4) {
                        ae.parentNode.removeChild(ae)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            }
            u(aa, ab, X)
        }
    }

    function p(Y) {
        if (M.ie && M.win && Y.readyState != 4) {
            var X = C("div");
            Y.parentNode.insertBefore(X, Y);
            X.parentNode.replaceChild(g(Y), X);
            Y.style.display = "none";
            (function () {
                if (Y.readyState == 4) {
                    Y.parentNode.removeChild(Y)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            })()
        } else {
            Y.parentNode.replaceChild(g(Y), Y)
        }
    }

    function g(ab) {
        var aa = C("div");
        if (M.win && M.ie) {
            aa.innerHTML = ab.innerHTML
        } else {
            var Y = ab.getElementsByTagName(r)[0];
            if (Y) {
                var ad = Y.childNodes;
                if (ad) {
                    var X = ad.length;
                    for (var Z = 0; Z < X; Z++) {
                        if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                            aa.appendChild(ad[Z].cloneNode(true))
                        }
                    }
                }
            }
        }
        return aa
    }

    function u(ai, ag, Y) {
        var X, aa = c(Y);
        if (M.wk && M.wk < 312) {
            return X
        }
        if (aa) {
            if (typeof ai.id == D) {
                ai.id = Y
            }
            if (M.ie && M.win) {
                var ah = "";
                for (var ae in ai) {
                    if (ai[ae] != Object.prototype[ae]) {
                        if (ae.toLowerCase() == "data") {
                            ag.movie = ai[ae]
                        } else {
                            if (ae.toLowerCase() == "styleclass") {
                                ah += ' class="' + ai[ae] + '"'
                            } else {
                                if (ae.toLowerCase() != "classid") {
                                    ah += " " + ae + '="' + ai[ae] + '"'
                                }
                            }
                        }
                    }
                }
                var af = "";
                for (var ad in ag) {
                    if (ag[ad] != Object.prototype[ad]) {
                        af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                    }
                }
                aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                N[N.length] = ai.id;
                X = c(ai.id)
            } else {
                var Z = C(r);
                Z.setAttribute("type", q);
                for (var ac in ai) {
                    if (ai[ac] != Object.prototype[ac]) {
                        if (ac.toLowerCase() == "styleclass") {
                            Z.setAttribute("class", ai[ac])
                        } else {
                            if (ac.toLowerCase() != "classid") {
                                Z.setAttribute(ac, ai[ac])
                            }
                        }
                    }
                }
                for (var ab in ag) {
                    if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                        e(Z, ab, ag[ab])
                    }
                }
                aa.parentNode.replaceChild(Z, aa);
                X = Z
            }
        }
        return X
    }

    function e(Z, X, Y) {
        var aa = C("param");
        aa.setAttribute("name", X);
        aa.setAttribute("value", Y);
        Z.appendChild(aa)
    }

    function y(Y) {
        var X = c(Y);
        if (X && X.nodeName == "OBJECT") {
            if (M.ie && M.win) {
                X.style.display = "none";
                (function () {
                    if (X.readyState == 4) {
                        b(Y)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                X.parentNode.removeChild(X)
            }
        }
    }

    function b(Z) {
        var Y = c(Z);
        if (Y) {
            for (var X in Y) {
                if (typeof Y[X] == "function") {
                    Y[X] = null
                }
            }
            Y.parentNode.removeChild(Y)
        }
    }

    function c(Z) {
        var X = null;
        try {
            X = j.getElementById(Z)
        } catch (Y) {
        }
        return X
    }

    function C(X) {
        return j.createElement(X)
    }

    function i(Z, X, Y) {
        Z.attachEvent(X, Y);
        I[I.length] = [Z, X, Y]
    }

    function F(Z) {
        var Y = M.pv, X = Z.split(".");
        X[0] = parseInt(X[0], 10);
        X[1] = parseInt(X[1], 10) || 0;
        X[2] = parseInt(X[2], 10) || 0;
        return (Y[0] > X[0] || (Y[0] == X[0] && Y[1] > X[1]) || (Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2])) ? true : false
    }

    function v(ac, Y, ad, ab) {
        if (M.ie && M.mac) {
            return
        }
        var aa = j.getElementsByTagName("head")[0];
        if (!aa) {
            return
        }
        var X = (ad && typeof ad == "string") ? ad : "screen";
        if (ab) {
            n = null;
            G = null
        }
        if (!n || G != X) {
            var Z = C("style");
            Z.setAttribute("type", "text/css");
            Z.setAttribute("media", X);
            n = aa.appendChild(Z);
            if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                n = j.styleSheets[j.styleSheets.length - 1]
            }
            G = X
        }
        if (M.ie && M.win) {
            if (n && typeof n.addRule == r) {
                n.addRule(ac, Y)
            }
        } else {
            if (n && typeof j.createTextNode != D) {
                n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
            }
        }
    }

    function w(Z, X) {
        if (!m) {
            return
        }
        var Y = X ? "visible" : "hidden";
        if (J && c(Z)) {
            c(Z).style.visibility = Y
        } else {
            v("#" + Z, "visibility:" + Y)
        }
    }

    function L(Y) {
        var Z = /[\\\"<>\.;]/;
        var X = Z.exec(Y) != null;
        return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
    }

    var d = function () {
        if (M.ie && M.win) {
            window.attachEvent("onunload", function () {
                var ac = I.length;
                for (var ab = 0; ab < ac; ab++) {
                    I[ab][0].detachEvent(I[ab][1], I[ab][2])
                }
                var Z = N.length;
                for (var aa = 0; aa < Z; aa++) {
                    y(N[aa])
                }
                for (var Y in M) {
                    M[Y] = null
                }
                M = null;
                for (var X in swfobject) {
                    swfobject[X] = null
                }
                swfobject = null
            })
        }
    }();
    return {
        registerObject: function (ab, X, aa, Z) {
            if (M.w3 && ab && X) {
                var Y = {};
                Y.id = ab;
                Y.swfVersion = X;
                Y.expressInstall = aa;
                Y.callbackFn = Z;
                o[o.length] = Y;
                w(ab, false)
            } else {
                if (Z) {
                    Z({success: false, id: ab})
                }
            }
        }, getObjectById: function (X) {
            if (M.w3) {
                return z(X)
            }
        }, embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
            var X = {success: false, id: ah};
            if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                w(ah, false);
                K(function () {
                    ae += "";
                    ag += "";
                    var aj = {};
                    if (af && typeof af === r) {
                        for (var al in af) {
                            aj[al] = af[al]
                        }
                    }
                    aj.data = ab;
                    aj.width = ae;
                    aj.height = ag;
                    var am = {};
                    if (ad && typeof ad === r) {
                        for (var ak in ad) {
                            am[ak] = ad[ak]
                        }
                    }
                    if (Z && typeof Z === r) {
                        for (var ai in Z) {
                            if (typeof am.flashvars != D) {
                                am.flashvars += "&" + ai + "=" + Z[ai]
                            } else {
                                am.flashvars = ai + "=" + Z[ai]
                            }
                        }
                    }
                    if (F(Y)) {
                        var an = u(aj, am, ah);
                        if (aj.id == ah) {
                            w(ah, true)
                        }
                        X.success = true;
                        X.ref = an
                    } else {
                        if (aa && A()) {
                            aj.data = aa;
                            P(aj, am, ah, ac);
                            return
                        } else {
                            w(ah, true)
                        }
                    }
                    if (ac) {
                        ac(X)
                    }
                })
            } else {
                if (ac) {
                    ac(X)
                }
            }
        }, switchOffAutoHideShow: function () {
            m = false
        }, ua: M, getFlashPlayerVersion: function () {
            return {major: M.pv[0], minor: M.pv[1], release: M.pv[2]}
        }, hasFlashPlayerVersion: F, createSWF: function (Z, Y, X) {
            if (M.w3) {
                return u(Z, Y, X)
            } else {
                return undefined
            }
        }, showExpressInstall: function (Z, aa, X, Y) {
            if (M.w3 && A()) {
                P(Z, aa, X, Y)
            }
        }, removeSWF: function (X) {
            if (M.w3) {
                y(X)
            }
        }, createCSS: function (aa, Z, Y, X) {
            if (M.w3) {
                v(aa, Z, Y, X)
            }
        }, addDomLoadEvent: K, addLoadEvent: s, getQueryParamValue: function (aa) {
            var Z = j.location.search || j.location.hash;
            if (Z) {
                if (/\?/.test(Z)) {
                    Z = Z.split("?")[1]
                }
                if (aa == null) {
                    return L(Z)
                }
                var Y = Z.split("&");
                for (var X = 0; X < Y.length; X++) {
                    if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                        return L(Y[X].substring((Y[X].indexOf("=") + 1)))
                    }
                }
            }
            return ""
        }, expressInstallCallback: function () {
            if (a) {
                var X = c(R);
                if (X && l) {
                    X.parentNode.replaceChild(l, X);
                    if (Q) {
                        w(Q, true);
                        if (M.ie && M.win) {
                            l.style.display = "block"
                        }
                    }
                    if (E) {
                        E(B)
                    }
                }
                a = false
            }
        }
    }
}();

/** Util */
(function (window, undefined) {
    var ufp = window.ufp = window.ufp || {};
    var util = ufp.util = ufp.util || {};
    var getNumRegx = /[\d][\d\.\_,\-]*/;
    var splitNumRegx = /[\.\_,\-]/g;

    util.getActiveXObject = getActiveXObject;
    util.isDefined = isDefined;
    util.isArray = isArray;
    util.isFunc = isFunc;
    util.isString = isString;
    util.isNum = isNum;
    util.isStrNum = isStrNum;
    util.getNum = getNum;
    util.formatNum = formatNum;
    util.garbage = garbage;
    util.getAXOByClsid = getAXOByClsid;
    util.postData = postData;
    util.wload = window.wload = wload;

    //window.onload方法
    function wload(c) {
        wload.stack.push(c);
        if (wload.isReady) {
            return wload.run();
        }

        if (window.attachEvent) {
            window.attachEvent("onload", wload.run); //对于IE
        } else {
            window.addEventListener("load", wload.run, false); //对于FireFox
        }
    }

    wload.run = function () {
        wload.isReady = true;
        var f = wload.stack.shift();
        while (typeof f == "function") {
            // try{
            f();
            //}catch(e){};
            f = wload.stack.shift();
        }
    };
    wload.stack = [];
    wload.isReady = false;

    /**
     * 得到一个ActiveX对象的实例
     *  @param objname   activeX对象名
     *  @returns {Object} activeX对象
     **/
    function getActiveXObject(objname) {
        var obj = null;
        try {
            obj = new window.ActiveXObject(objname);
        } catch (e) {
        }
        return obj;
    }

    function isDefined(obj) {
        return typeof obj != "undefined"
    }

    function isArray(obj) {
        return (/array/i).test(Object.prototype.toString.call(obj))
    }

    function isFunc(obj) {
        return typeof obj == "function"
    }

    function isString(obj) {
        return typeof obj == "string"
    }

    function isNum(obj) {
        return typeof obj == "number"
    }

    function isStrNum(obj) {
        return (typeof obj == "string" && (/\d/).test(obj))
    }

    /**
     * 得到字符串中的数字
     * @param str   要匹配的字符串
     * @param cReg  可选正则表达式，匹配指定模式的数字格式
     * @returns {String} 数字字符串
     */
    function getNum(str, cReg) {
        var result = isStrNum(str) ?
            (isDefined(cReg) ?
                new RegExp(cReg) : getNumRegx)
                .exec(str)
            :
            null;
        return result ? result[0] : null
    }

    /**
     * 格式化的数字字符串
     * @param strNum   需要格式化的数字字符串
     * @param capacity  几段，最大为4
     * @returns {*}
     * @example
     *          run：pluginDetector.formatNum('123-1-23,23,23',7)
     "          result：123,1,23,23"
     */
    function formatNum(strNum, capacity) {
        if (!isStrNum(strNum)) {
            return null
        }
        if (!isNum(capacity)) {
            capacity = 4
        }
        capacity--;
        var arr = strNum.replace(/\s/g, "").split(splitNumRegx).concat(["0", "0", "0", "0"]);
        for (var index = 0; index < 4; index++) {
            if (/^(0+)(.+)$/.test(arr[index])) {
                arr[index] = RegExp.$2
            }
            if (index > capacity || !(/\d/).test(arr[index])) {
                arr[index] = "0"
            }
        }
        return arr.slice(0, 4).join(",");
    }

    function garbage() {
        if (!window.CollectGarbage || garbage['enable']) {
            return;
        }
        garbage['enable'] = 1;
        window.setTimeout(function () {
            garbage['enable'] = 0;
            window.CollectGarbage();
        }, 1000);
    }

    function getAXOByClsid(clsid) {
        clsid = clsid.replace('clsid:', '');
        clsid = clsid.replace('{', '');
        clsid = clsid.replace('}', '');
        clsid = "clsid:" + clsid;
        var span = document.createElement('span');
        var html = '<' + 'object classid="' + clsid + '" ' + 'id="deployJavaPlugin" width="0" height="0">' + '<' + '/' + 'object' + '>';
        var result = false;
        span.innerHTML = html;
        var x = null;
        if (span.firstChild['object']) {
            x = span.firstChild;
        }
        setTimeout(function () {
            span.innerHTML = '';
            garbage();
        }, 1000);
        return x;
    }

    function CreateXmlHttp() {
        var xhrobj = false;
        try {
            xhrobj = new ActiveXObject("Msxml2.XMLHTTP"); //ie msxml3.0+
        } catch (e) {
            try {
                xhrobj = new ActiveXObject("Microsoft.XMLHTTP"); //ie msxml 2.6
            } catch (e2) {
                xhrobj = false;
            }
        }
        if (!xhrobj && typeof XMLHttpRequest != 'undefined') { //firefox opera 8.0 safari
            xhrobj = new XMLHttpRequest();
        }
        return xhrobj;
    }

    function postData(url, data, callback) {
        var xhr = CreateXmlHttp();
        xhr.open("POST", url, true);
        //设置HTTP的输出内容类型为：application/x-www-form-urlencoded
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        //设置浏览器不使用缓存，服务器不从缓存中找，重新执行代码，而且服务器返回给浏览器的时候，告诉浏览器也不要保存缓存。
        xhr.setRequestHeader("If-Modified-Since", "0");
        //设置回调函数
        if (typeof callback === "function") {
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var res = xhr.responseText;
                    callback(res);
                }
            };
        }

        xhr.send(data);
    }
})(window);

/**
 *@description Store
 *@import swfobject.js
 */
(function (window, undefined) {
    window.Store = window.Store || {};
    var doc = window.document;
    //兼容性处理
    var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
    var IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;
    var IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;
    var READ_ONLY = (IDBTransaction && IDBTransaction.READ_ONLY == 0) ? 0 : "readonly";
    var READ_WRITE = (IDBTransaction && IDBTransaction.READ_WRITE) || "readwrite";
    var VERSION_CHANGE = (IDBTransaction && IDBTransaction.VERSION_CHANGE) || "versionchange";

    //兼容性处理，若不支持localStorage时再检测是否支持globalStorage可以代替的
    var globalStorage = window.globalStorage && window.globalStorage[window.location.host];
    var localStorage = window.localStorage || globalStorage;

    // var flashCookieUrl = "http://simg.sinajs.cn/blog7swf/suppercookie.swf";
    //http://www.w3.org/TR/IndexedDB/
    //IndexedDB
    var IndexedDBHelper = {
        IDBKeyRange: IDBKeyRange,
        TransactionType: {
            READ_ONLY: READ_ONLY,
            READ_WRITE: READ_WRITE,
            VERSION_CHANGE: VERSION_CHANGE
        },
        indexedDB: indexedDB,
        name: "db_defalut",
        version: "1",
        tbName: "tb_dufault",
        db: null,
        status: 0,
        error: [],
        async: true,

        //indexedDB初始化处理
        init: function (conf) {
            var _ = this, request;
            if (!indexedDB) {
                _.status = -1;
                return;
            }
            _.status = 2;

            if (conf) {
                conf.name ? _.name = conf.name : "";
                conf.version ? _.version = conf.version : "";
                conf.tbName ? _.tbName = conf.tbName : "";
            }

            request = indexedDB.open(_.name, _.version);
            if (!request) {
                _.status = -1;
                return;
            }
            request.onupgradeneeded = function (event) {
                _._initStore(event.target.transaction);
            };
            request.onsuccess = function (event) {
                var db = event.target.result;
                if (db.version != _.version) {
                    var svReq = db.setVersion(_.version);
                    svReq.onsuccess = function (event) {
                        _._initStore(event.target.transaction);
                    };
                } else {
                    _.db = db;
                    _.status = 1;
                }
            };
            request.onerror = _._cbError;
        },
        //通过记录的唯一key值获取value。
        get: function (key, callback) {
            var _ = this, tx, store, request;
            tx = _.db.transaction(_.tbName, READ_ONLY);
            store = tx.objectStore(_.tbName);
            request = store.get(key);
            request.onsuccess = function (event) {
                callback(event.target.result);
            };
            request.onerror = function (event) {
                callback(null, event);
            };
        },
        //存储数据
        set: function (key, value, callback) {
            var _ = this, db = _.db, tx, store, request;
            tx = db.transaction(_.tbName, READ_WRITE);
            store = tx.objectStore(_.tbName);
            request = store.put(value, key);

            request.onsuccess = function (event) {
                var matching = event.target.result;
                (callback instanceof Function) ? callback(matching) : '';
            };
            request.onerror = function (event) {
                (callback instanceof Function) ? callback(null, event) : '';
            };
        },

        _initStore: function (tx) {
            var _ = this, db = tx.db, store;

            if (!db.objectStoreNames.contains(_.tbName)) {
                store = db.createObjectStore(_.tbName);
                // store.createIndex("index_key", "key", {unique: true});
            }

            tx.oncomplete = function (event) {
                _.db = event.target.db;
                _.status = 1;
            };
            tx.onerror = _._cbError;
            tx.onabort = _._cbError;

        },
        _cbError: function (event) {
            var _ = this, error = event.target.error,
                errorMessage = error.name + ": " + error.message;
            _.error.push([errorMessage, error]);
            _.status = -2;
        }
    };

    /**
     *@FlashCookie
     *属性方法：
     *@flashUrl: flash地址
     *@name: 存储数据库名，这里用作flash结点id
     *@status: 状态标识 0 -- 未初始化状态；-1 -- 不支持不可用；-2 -- 初始化过程中不可用; 1 -- 支持且可用
     *@db: flash对象
     *@set: 存储更新数据。参数: key, value
     *@get: 获取数据。 参数: key
     */
    /*var LSOHelper = {
        flashUrl: flashCookieUrl,
        name: "flashCookie",
        status: 0,
        reTry: 100,
        db: null,

        init: function (conf) {
            var _ = this,
                conf = conf || {},
                name = conf.name || _.name,
                supperCookieSwfUrl = _.flashUrl,
                targetId = name + 'swfcontiner',
                id = name + 'swf',
                tdom = doc.createElement("div");

            if (_.db) return;
            _.status = 2;
            tdom.style.position = "absolute";
            tdom.style.height = "1px";
            tdom.style.width = "1px";
            tdom.style.left = "1px";
            tdom.style.top = (doc.body.scrollTop || doc.documentElement.scrollTop) + 'px';
            tdom.style.zIndex = "9999";
            doc.body.appendChild(tdom);
            tdom.appendChild(doc.createElement("div"));
            tdom.firstChild.id = targetId;
            swfobject.embedSWF(
                supperCookieSwfUrl,
                targetId,
                "1px",
                "1px",
                "10.0.0",
                "",// "expressInstall.swf",
                {
                    getSupperCookie: "getSupperCookie",
                    setSupperCookie: "setSupperCookie"
                }, {
                    menu: "false",
                    scale: "noScale",
                    allowFullscreen: "true",
                    allowScriptAccess: "always",
                    bgcolor: "",
                    wmode: "direct" // can cause issues with FP settings & webcam
                }, {
                    id: id
                },
                _._test
            );
        },
        set: function (key, value) {
            this.db.setSupperCookie(key, value);
        },
        get: function (key, callback) {
            var result = this.db.getSupperCookie(key);
            callback ? callback(result) : "";
            return result;
        },
        _test: function (e) {
            var _ = LSOHelper, flash = _.db;
            _.reTry--;
            if (e && e.success) {
                flash = _.db = e.ref;
            }

            if (flash && flash.setSupperCookie && flash.getSupperCookie) {
                flash.setSupperCookie("test_23", "wy_ok");
                if (flash.getSupperCookie("test_23") == "wy_ok") {
                    _.status = 1;
                } else {
                    _.status = -1;
                }
            } else {
                _.reTry > 0 ? window.setTimeout(_._test, 10) : _.status = -1;
            }
        }
    };*/

    /**
     *@userData 仅IE旧版本支持的本地数据存储方式
     *属性方法：
     *@status: 状态标识 0--未初始化  1--支持且可用  -1 -- 不支持
     *@db: userData数据操作对象
     *@set: 存储更新数据。参数: key, value
     *@get: 获取数据。 参数: key
     *@error: 初始化错误信息
     */
    var UserDataHelper = {
        name: "_default",
        status: 0,
        db: null,
        error: null,

        init: function (conf) {
            try {
                var _ = this, udEl = doc.createElement("div");
                if (conf) {
                    conf.name ? _.name = conf.name : "";
                }
                udEl.id = _.name;
                udEl.style.display = "none";
                udEl.style.behavior = "url('#default#userData')";
                doc.body.appendChild(udEl);
                _.db = udEl;

                _.set("test", "ok");
                _.status = _.get("test") == "ok" ? 1 : -1;
            } catch (e) {
                _.error = e;
                _.status = -1;
            }
        },
        set: function (key, value) {
            var _ = this.db;
            _.load(_.name);
            _.setAttribute(key, value);
            _.save(_.name);
        },
        get: function (key, callback) {
            var _ = this.db, result;
            _.load(_.name);
            result = _.getAttribute(key);
            callback ? callback(result) : "";
            return result;
        }
    };

    var WebSQLHelper = {
        name: "_default",
        version: 1,
        status: 0,
        size: 1024,
        tbName: "table_default",
        db: null,
        async: true,

        init: function (conf) {
            var _ = this, db;
            if (!window.openDatabase) {
                _.status = -1;
                return;
            }
            _.status = 2;
            if (conf) {
                conf.name ? _.name = conf.name : "";
                conf.version ? _.version = conf.version : "";
                conf.size ? _.size = conf.size : "";
                conf.tbName ? _.tbName = conf.tbName : "";
            }
            try {
                db = window.openDatabase(_.name, "", "", _.size);
            } catch (e) {
                _.status = -1;
                return;
            }
            db.transaction(function (t) {
                t.executeSql('CREATE TABLE IF NOT EXISTS ' + _.tbName + ' (key unique, value)');
            }, function (e) {
                _.status = -1;
                throw "SQLError:" + e.message;
            });
            _.db = db;
            _.status = 1;
        },
        set: function (key, value) {
            var _ = this, db = _.db;
            db.transaction(function (t) {
                t.executeSql('SELECT COUNT(*) c FROM ' + _.tbName + ' WHERE key = ?', [key], function (t, r) {
                    var sql = 'INSERT INTO ' + _.tbName + ' (value, key) VALUES(?, ?)';
                    if (r.rows.item(0).c > 0) {
                        sql = 'UPDATE ' + _.tbName + ' SET value = ? WHERE key = ?';
                    }
                    t.executeSql(sql, [value, key]);
                });
            });
        },
        get: function (key, callback) {
            var _ = this, db = _.db;
            db.readTransaction(function (t) {
                t.executeSql('SELECT value FROM ' + _.tbName + ' WHERE key = ?', [key], function (t, r) {
                    r.rows.length > 0 ? callback(r.rows.item(0).value) : callback(null);
                });
            });
        }

    };

    /**
     *@Cookie 缓存
     *属性方法：
     *@status: 状态标识 -1--不支持  1--支持且可用
     *@db: document对象
     *@set: 存储更新数据。参数: key, value，time  time为有效期长度的毫秒值（一秒就是1000）
     *@get: 获取数据。 参数: key
     */
    var CookieHelper = {
        status: !!window.navigator.cookieEnabled / 1 || -1,
        db: doc,
        set: function (key, value, time) {
            var defaultTime = 356 * 24 * 60 * 60 * 1000;
            var time = new Date().valueOf() + (parseInt(time) || defaultTime);
            document.cookie = key + "=" + value + ";expires=" + new Date(time).toGMTString();
        },
        get: function (key, callback) {
            var reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)"),
                arr = document.cookie.match(reg),
                result = arr && arr[2];
            callback ? callback(result) : "";
            return result;
        }
    };

    //http://www.w3.org/TR/webstorage/
    /**
     *@LocalStorage 本地数据存储
     *属性方法：
     *@status: 状态标识 -1 -- 不支持  1 -- 支持且可用
     *@db: Storage数据操作对象
     *@set: 存储更新数据。参数: key, value
     *@get: 获取数据。 参数: key
     */
    var LocalStorageHelper = {
        status: !!localStorage / 1 || -1,
        db: localStorage,
        set: function (key, value) {
            localStorage.setItem(key, value);
        },
        get: function (key, callback) {
            var result = localStorage.getItem(key);
            callback ? callback(result) : "";
            return result;
        }
    };

    var storeDB = {
        conf: {
            name: "ufp",
            version: 1,
            tbName: "ufpInfo"
        },
        status: false,
        stores: [
            // [LSOHelper, 0],
            [IndexedDBHelper, 0],
            [WebSQLHelper, 0],
            [UserDataHelper, 0],
            [CookieHelper, 0],
            [LocalStorageHelper, 0]
        ],
        init: function () {
            var stores = storeDB.stores, i, item, isTry, timer;
            for (i = 0; i < stores.length; i++) {
                item = stores[i][0];
                if (item.status == 0) {
                    item.init(storeDB.conf);
                }
            }
            //检测，等待所有的初始化都完成了才可用。
            isTry = 100;
            timer = window.setInterval(function () {
                isTry--;
                for (var i = 0; i < stores.length && isTry > 0; i++) {
                    if (stores[i][0].status == 0 || stores[i][0].status == 2) {
                        return;
                    }
                    stores[i][1] = stores[i][0].status;
                }
                storeDB.status = true;
                window.clearInterval(timer);
            }, 10);
        },
        set: function (key, value, time, callback) {
            try {
                if (storeDB.status) {
                    var stores = storeDB.stores, i = 0, item, newTime = new Date().valueOf();
                    for (; i < stores.length; i++) {
                        item = stores[i][0];
                        if (item.status == 1) {
                            item.set(key, value, time, callback);
                        }
                    }
                } else {
                    window.setTimeout(function () {
                        storeDB.set(key, value, time, callback);
                    }, 10);
                }
            } catch (e) {

            }
        },
        get: function (key, callback) {
            if (storeDB.status) {
                var stores = storeDB.stores, i = 0, item, _cb, results = [];
                _cb = function (result) {
                    _cb.count--;
                    if (result) {
                        results.push(result);
                    }
                };
                _cb.count = 0;
                for (; i < stores.length; i++) {
                    item = stores[i][0];
                    if (item.status == 1) {
                        _cb.count++;
                        item.get(key, _cb);
                    }
                }
                var timer = window.setInterval(function () {
                    var result;
                    if (_cb.count == 0) {
                        if (results.length > 0) {
                            result = results[0];
                        } else {
                            result = null;
                        }
                        callback(result);
                        window.clearInterval(timer);
                    }
                }, 10);
            } else {
                window.setTimeout(function () {
                    storeDB.get(key, callback);
                }, 10);
            }
        }
    };

    // storeDB.init();
    window.Store.DB = storeDB;
    window.Store.LocalStorageHelper = LocalStorageHelper;
    window.Store.CookieHelper = CookieHelper;
    window.Store.WebSQLHelper = WebSQLHelper;
    window.Store.UserDataHelper = UserDataHelper;
    // window.Store.LSOHelper = LSOHelper;
    window.Store.IndexedDBHelper = IndexedDBHelper;
})(window);

/**
 *@description fingerprint
 *@import util.js, config.js, swfobject.js
 */
//@import util#
(function (window, undefined) {
    var ufp = window.ufp = window.ufp || {};
    var util = ufp.util;
    var config = ufp.config;
    var dciiiebc = config.Detectable_Components_in_Internet_Explorer_by_capclient;
    var document = window.document;
    var navigator = window.navigator;
    //browser
    var browser = ufp.browser = detect();
    //platform
    var OS = ufp.OS = detectPlatform();
    //screen
    ufp.screenInfo = getScreenInfo();

    util.wload(function () {
        //fonts onload
        getFonts(function (str) {
            ufp.fonts = str;
        });
        //plugins onload
        ufp.plugins = getAllPlugin();
    });

    function detect() {
        var browser = {}, userAgent = navigator.userAgent || "";

        /**探测是不是ie***/
        var tmp = document.documentMode;
        try {
            document.documentMode = ""
        } catch (e) {
        }
        browser.isIE = util.isNum(document.documentMode) ? !0 : !1;
        try {
            document.documentMode = tmp
        } catch (e) {
        }
        /**探测ie的真实版本号********/
        browser.verIE = null;
        if (browser.isIE) {
            browser.verIE = document.documentMode || ((/^(?:.*?[^a-zA-Z])??(?:MSIE|rv\s*\:)\s*(\d+\.?\d*)/i).test(userAgent) ? parseFloat(RegExp.$1, 10) : 7)
        }

        if (!browser.isIE) {
            var vendor = navigator.vendor || "",
                product = navigator.product || "";

            // todo 该列表有待更新，需收集国内浏览器数据

            browser.isGecko = (/Gecko/i).test(product) && (/Gecko\s*\/\s*\d/i).test(userAgent);
            browser.verGecko = browser.isGecko ? util.formatNum((/rv\s*\:\s*([\.\,\d]+)/i).test(userAgent) ? RegExp.$1 : "0.9") : null;

            browser.isChrome = (/(Chrome|CriOS)\s*\/\s*(\d[\d\.]*)/i).test(userAgent);
            browser.verChrome = browser.isChrome ? util.formatNum(RegExp.$2) : null;

            browser.isSafari = !browser.isChrome && ((/Apple/i).test(vendor) || !vendor) && (/Safari\s*\/\s*(\d[\d\.]*)/i).test(userAgent);
            browser.verSafari = browser.isSafari && (/Version\s*\/\s*(\d[\d\.]*)/i).test(userAgent) ? util.formatNum(RegExp.$1) : null;

            browser.isOpera = (/Opera\s*[\/]?\s*(\d+\.?\d*)/i).test(userAgent);
            browser.verOpera = browser.isOpera && ((/Version\s*\/\s*(\d+\.?\d*)/i).test(userAgent) || 1) ? parseFloat(RegExp.$1, 10) : null
        }

        //add browser name/version
        if (browser.isIE) {
            browser.name = 'IE';
            browser.version = browser.verIE;
        } else if (browser.isGecko) {
            browser.name = 'Gecko';
            browser.version = browser.verGecko;
        } else if (browser.isChrome) {
            browser.name = 'Chrome';
            browser.version = browser.verChrome;
        } else if (browser.isSafari) {
            browser.name = 'Safari';
            browser.version = browser.verSafari;
        } else if (browser.isOpera) {
            browser.name = 'Opera';
            browser.version = browser.verOpera;
        }
        return browser;
    }

    function getFlashInfo() {
        var info = {enable: false, version: getFlashVersion()};

        // look for a flag in the query string to bypass flash detection
        if (/hasFlash\=true/.test(location)) {
            info.enable = true;
            return info;
        }
        if (/hasFlash\=false/.test(location)) {
            info.enable = false;
            return info;
        }
        info.enable = util.formatNum(info.version.match(/\d+/g).join(",")) != '0,0,0,0';
        return info;
    }

    function getFlashVersion() {
        // ie
        try {
            try {
                // avoid fp6 minor version lookup issues
                // see: http://blog.deconcept.com/2006/01/11/getvariable-setvariable-crash-internet-explorer-flash-6/
                var axo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
                try {
                    axo.AllowScriptAccess = 'always';
                } catch (e) {
                    return '6,0,0,0';
                }
            } catch (e) {
            }
            return new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];
            // other browsers
        } catch (e) {
            try {
                if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
                    return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];
                }
            } catch (e) {
            }
        }
        return '0,0,0,0';
    }

    /**
     * @description 检测访问者的平台信息
     * @return Config.platforms中匹配到的值
     */
    function detectPlatform() {
        var conf = config.platforms;
        var OS = 999;
        var platform = navigator.platform || "";
        if (platform) {
            //该列表有待数据收集后更新
            for (var i = 0; i < conf.length; i++) {
                if (conf[i] && new RegExp(conf[i][0], "i").test(platform)) {
                    return conf[i][1];
                }
            }
        }
        return OS;
    }

    function getScreenInfo() {
        var sc = window.screen;
        return sc.width + "*" + sc.height + "*" + sc.colorDepth;
    }

    /**
     * @description 获取系统字体
     * @param callback 返回函数，参数为字体名
     * @example
     getFonts(function( str ){
        document.write(  str  );
	 });
     */
    function getFonts(callback) {
        var flashUrl = config.flashUrl_fonts;
        var gtimes = 100;

        function test(flashDom) {
            gtimes--;
            if ((typeof flashDom.getFonts) != 'undefined' || gtimes < 0) {
                try {
                    fontsStr = flashDom.getFonts();
                } catch (e) {
                    fontsStr = ''
                }

                callback(fontsStr);
            } else {
                setTimeout(function () {
                    test(flashDom)
                }, 200);
            }
        }

        loadFlash(flashUrl, test);
    }

    function loadFlash(url, callback, continerId) {
        window.loadFlash_guid = window.loadFlash_guid || 1;
        var flashvars = {};
        var params = {
            menu: "false",
            scale: "noScale",
            allowFullscreen: "true",
            allowScriptAccess: "always",
            wmode: "direct" // can cause issues with FP settings & webcam
        };
        var attributes = {
            id: "swfid" + window.loadFlash_guid++
        };

        if (!continerId) {
            continerId = attributes.id + 'continner';
            var dom = document.createElement("div");
            dom.style.position = "absolute";
            dom.style.height = "1px";
            dom.style.width = "1px";
            dom.style.left = "1px";
            dom.style.top = (document.body.scrollTop || document.documentElement.scrollTop) + 'px';
            dom.style.zIndex = "9999";
            document.body.appendChild(dom);
            dom.appendChild(document.createElement("div"));
            dom.firstChild.id = continerId;
        }
        swfobject.embedSWF(
            url,
            continerId, "1px", "1px", "10.0.0",
            "expressInstall.swf",
            flashvars, params, attributes);
        var fdom;

        function scflashOK() {
            callback(fdom);
        }

        var dtimes = 100;

        function detectSCflash() {
            dtimes--;
            fdom = document.getElementById(attributes.id);
            if (fdom && (typeof fdom.GetVariable) != 'undefined') {
                scflashOK();
            } else {
                if (dtimes > 0) {
                    setTimeout(detectSCflash, 100);
                }
            }
        }

        detectSCflash();
    }

    function initOClientCaps() {
        if (initOClientCaps.cc) {
            return initOClientCaps.cc;
        }
        if (initOClientCaps.init || !browser.isIE || OS != 1) {
            return false
        }

        initOClientCaps.init = 1;

        var div = document.createElement('div');
        div.style.height = "1px";
        div.style.width = "1px";
        div.style.left = "1px";
        div.style.top = "1px";
        div.id = "oClientCaps";
        div.position = "absolute";
        div.style.behavior = "url('#default#clientcaps')";
        //document.body.appendChild(div);
        try {
            //检测是否支持
            div.getComponentVersion("{7790769C-0471-11D2-AF11-00C04FA35D02}", "ComponentID");
            initOClientCaps.cc = div;
            return div;
        } catch (e) {
            return null;
        }
    }

    //getPluginVersionByClientCaps
    function getPVBCC(clsid, oClientCaps) {
        clsid = clsid.replace('clsid:', '');
        clsid = clsid.replace('{:', '');
        clsid = clsid.replace('}:', '');
        /**
         var obj = getAXOByClsid(clsid);
         if(!obj)return '';
         **/
        var exist = false, p;
        for (p in dciiiebc) {
            if (dciiiebc[p] == clsid) {
                exist = true;
                break;
            }
        }
        if (exist && oClientCaps) {
            return oClientCaps.getComponentVersion('{' + clsid + '}', 'ComponentID') || '';
        }
        return '';
    }

    function getJavaInfo(oClientCaps) {
        var javaEnabled = false, javaVersion;
        if (oClientCaps) {
            javaEnabled = oClientCaps.javaEnabled;
            javaVersion = testForMSVM(oClientCaps);
        }
        javaVersion = javaVersion
            || getJavaVersionByMimetype()
            || getJavaPluginVersion()
            || getJvmsVersion();
        javaEnabled = javaEnabled || !!javaVersion;
        return {enable: javaEnabled, version: javaVersion};
    }

    function getJavaVersionByMimetype() {
        var i = 0, s, m;
        for (; i < navigator.mimeTypes.length; ++i) {
            s = navigator.mimeTypes[i].type;
            m = s.match(/^application\/x-java-applet;jpi-version=(.*)$/);
            if (m) {
                return m[1];
            }
        }
        return "";
    }

    function getJavaPluginVersion() {
        if ((!navigator.plugins) || (!navigator.plugins.length)) {
            return false;
        }
        var platform = navigator.platform.toLowerCase(),
            i = 0, str;
        for (; i < navigator.plugins.length; ++i) {
            str = navigator.plugins[i].description;
            if (str.search(/\bJava\b/) != -1) {
                /Plug-in ([\d,.]+)/.test(str);
                return RegExp.$1 || '';
            }
        }
    }

    function testForMSVM(oClientCaps) {
        var clsid = '08B0E5C0-4FCB-11CF-AAA5-00401C608500';
        return getPVBCC(clsid, oClientCaps);
    }

    function getJvmsVersion() {
        var span = document.createElement('span'),
            html = '<' + 'object classid="clsid:CAFEEFAC-DEC7-0000-0000-ABCDEFFEDCBA" ' + 'id="deployJavaPlugin" width="0" height="0">' + '<' + '/' + 'object' + '>',
            result = false, x = null, list, VMs, i = 0;

        span.innerHTML = html;
        if (span.firstChild['object']) {
            list = [];
            x = span.firstChild['object'];

            VMs = x.jvms;
            for (; i < VMs.getLength(); i++) {
                list[i] = VMs.get(i).version;
            }
            result = list.join(',');
        }
        span.innerHTML = "";
        util.garbage();
        return result;
    }

    function getAllPlugin() {
        var pgs = navigator.plugins, result = [], item, i, r;
        var pluginConf = config.plugins;

        //navigator get
        if (pgs.length > 0) {
            for (i = 0; i < pgs.length; i++) {
                item = pgs[i];
                result.push(item.description
                    + "::"
                    + item.filename
                    + "::"
                    + item.name);
            }
            //IE old version
        } else if (browser.isIE) {
            var oClientCaps = initOClientCaps();
            var java = getJavaInfo(oClientCaps);
            var flash = getFlashInfo();
            result.push('Flash: '
                + flash.enable
                + ","
                + flash.version);
            result.push('Java: '
                + java.enabled
                + ","
                + java.version);

            //Object 检测
            for (i in pluginConf) {
                r = findPluginIe(i, pluginConf[i]);
                if (r) {
                    result.push(i + ':1');
                }
            }

            //clientCaps 检测
            if (oClientCaps) {
                for (i in dciiiebc) {
                    item = dciiiebc[i];
                    r = getPVBCC(item);
                    if (r) {
                        result.push(i + ':' + r);
                    }
                }
            }
        }

        return result.join("|");
    }

    function findPluginIe(pluginName, plugin) {
        var pg = plugin || {};
        var classID = pg['classid'] || '';
        var type = pg['type'] || '';
        var codebase = pg['codebase'] || '';
        var version = pg['version'] || '';

        var span = document.createElement('span');
        var altHTML = "";
        var param = '';
        var tagB = '<object width="1" height="1" style="display:none;" ' + (codebase ? 'codebase=' + codebase + (version ? '#version=' + version : '') : '');
        var tagE = ' classid="' + classID + '"'
            + ' type="' + type + '"'
            + '>'
            + param
            + '<'
            + "/object>";
        var result = false;

        span.innerHTML = tagB + altHTML + tagE;

        if (span.firstChild['object']) {
            x = span.firstChild['object'];
            result = true;
        }
        span.innerHTML = "";
        util.garbage();
        return result;
    }
})(window);

//main 执行入口
wload(function () {
    var ufp = window.ufp;
    var util = ufp.util;
    var postUrl = ufp.config.fpPostInterface;
    var sendUrl = ufp.config.fpCollectInterface;
    Store.DB.init();//初始化存儲

    var tid = {
        key: 'tid',
        value: '',
        recover: 0,
        confidence: '',
        postInterface: postUrl,
        fpCollectInterface: sendUrl,
        callbackStack: [],
        init: function () {
            tid.get();
        },
        runstack: function () {
            var f;
            while (f = tid.callbackStack.pop()) {
                f(tid.value, tid.recover, tid.confidence);
            }
        },
        get: function (callback) {
            callback = callback || function () {
            };
            tid.callbackStack.push(callback);
            if (tid.value) {
                return tid.runstack();
            }
            Store.DB.get(tid.key, function (v) {
                if (!v) {
                    tid.getTidFromServer();
                } else {
                    if (Store.CookieHelper.get(tid.key) != v) {
                        tid.recover = 1;
                    }
                    tid.value = v;
                    tid.confidence = "100";
                    if (/(.*)\_{2}(\d{3})$/.test(v)) {//check confidence
                        tid.value = RegExp.$1;
                        tid.confidence = RegExp.$2;
                    }
                    Store.DB.set(tid.key, v);
                    tid.runstack();
                    if (window.use_fp && tid.confidence == "100") {
                        tid.sendTidInfo();
                    }
                }
            });
        },

        getTidFromServer: function () {

            tid.getTidFromServer = function () {
            };

            if (window.use_fp) {
                getFp(function (data) {
                    util.postData(window.location.protocol + '//' + window.location.host + '/' + tid.postInterface, "cb=gen_callback&fp=" + encodeURIComponent(data), function (res) {
                        if (res) {
                            eval(res);
                        }
                    });
                });
            } else {
                util.postData(window.location.protocol + '//' + window.location.host + '/' + tid.postInterface, "cb=gen_callback", function (res) {
                    if (res) {
                        eval(res);
                    }
                });
            }
        },

        sendTidInfo: function () {

            tid.sendTidInfo = function () {
            };

            getFp(function (data) {
                util.postData(window.location.protocol + '//' + window.location.host + '/' + tid.fpCollectInterface, "tid=" + encodeURIComponent(tid.value) + "&confidence=" + tid.confidence + "&fp=" + encodeURIComponent(data));
            });

        }
    };

    function getFp(callback) {
        if (ufp.fonts || getFp.time > 300) {
            var fp = {
                os: ufp.OS,
                browser: ufp.browser.name + ufp.browser.version,
                fonts: ufp.fonts,
                screenInfo: ufp.screenInfo,
                plugins: ufp.plugins
            };
            var data = '{"os":"[os]","browser":"[browser]","fonts":"[fonts]","screenInfo":"[screenInfo]","plugins":"[plugins]"}';
            for (var k in fp) {
                data = data.replace(new RegExp("\\[" + k + "\\]", "g"), (fp[k] + "").replace(/['"]/g, "\\$&"));
            }
            callback(data);
        } else {
            getFp.time ? getFp.time++ : getFp.time = 1;
            setTimeout(
                (function (callback) {
                    return function () {
                        getFp(callback);
                    };
                })(callback), 10);
        }
    }

    window.gen_callback = function (fp) {
        var value = false, confidence;
        if (fp) {
            if (fp.retcode == 20000000) {
                confidence = typeof (fp.data.confidence) != 'undefined' ? '000' + fp.data.confidence : '100';
                tid.recover = fp.data.new_tid ? 3 : 2;
                tid.confidence = confidence = confidence.substring(confidence.length - 3);
                value = fp.data.tid;
                Store.DB.set(tid.key, value + '__' + confidence);
            }
        }
        tid.value = value;
        tid.runstack();
    };
    tid.init();
    window.tid = tid;
});