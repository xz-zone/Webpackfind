function addEV(e, t, i) {
    window.attachEvent ? e.attachEvent("on" + t, i) : window.addEventListener && e.addEventListener(t, i, !1)
}

function _aMC(e) {
    for (var t = e, i = -1; t = t.parentNode;)
        if (i = parseInt(t.getAttribute("id")), i > 0) return i
}

function al_c(e) {
    for (;
        "TABLE" != e.tagName;) e = e.parentNode;
    return e.getAttribute("id")
}

function al_c2(e, t) {
    for (; t--;)
        for (;
            "TABLE" != (e = e.parentNode).tagName;);
    return e.getAttribute("id")
}

function c(e) {
    var t = e.p1;
    if (!("alop" != e.fm || "rsv_xpath" in e || t && "6677" == G(t).getAttribute("srcid"))) return !0;
    !t || "p5" in e || (e.p5 = t);
    var i = window.document.location.href,
        n = "",
        o = "",
        r = "",
        s = window["BD_PS_C" + (new Date).getTime()] = new Image;
    for (v in e) {
        switch (v) {
            case "title":
                o = e[v].replace(/<[^<>]+>/g, ""), o && o.length > 100 && (o = o.substring(0, 100)), o = encodeURIComponent(o);
                break;
            case "mu":
            case "url":
                o = escape(e[v]);
                break;
            default:
                o = e[v]
        }
        n += "&" + v + "=" + o
    }
    if (!("mu" in e)) try {
        "p2" in e && G(e.p1).getAttribute("mu") && "pl" != e.fm && (r = "&mu=" + escape(G(e.p1).getAttribute("mu")))
    } catch (a) {}
    if (window.bds && bds.comm) {
        var c = bds.comm.ubsurl + "?q=" + bds.comm.queryEnc + n + r + "&rsv_sid=" + bds.comm.sid + "&cid=" + bds.comm.cid + "&qid=" + bds.comm.queryId + "&t=" + (new Date).getTime();
        if (bds.comm.inter && (c = c + "&rsv_inter=" + bds.comm.inter), bds.comm.seinfo && bds.comm.seinfo.rsv_pstg && (c = c + "&rsv_pstg=" + bds.comm.seinfo.rsv_pstg), bds.comm.cftime && 0 != bds.comm.cftime && (c = c + "&rsv_cftime=" + bds.comm.cftime), c += bds.comm.resultPage ? "&rsv_iorr=1" : "&rsv_iorr=0", bds.comm.tn && (c = c + "&rsv_tn=" + bds.comm.tn), bds.comm.indexSid && (c += "&rsv_isid=" + bds.comm.indexSid), bds.comm.lastVoiceQuery && (c += "&rsv_lavo=" + encodeURIComponent(bds.comm.lastVoiceQuery)), Cookie.get("ispeed") && (c += "&rsv_ispeed=" + Cookie.get("ispeed")), /ssl_sample/.test(location.href)) {
            var d = location.href.match(/ssl_sample=[^=&]+/i);
            c += "&rsv_" + d[0]
        }
        if (/ssl_s=/.test(location.href)) {
            var d = location.href.match(/ssl_s=[^=&]+/i);
            c += "&rsv_" + d[0]
        }
        c += "&rsv_ssl=" + ("https:" === location.protocol ? 1 : 0), c += "&path=" + encodeURIComponent(i), c += "&rsv_did=" + (bds.comm.did ? bds.comm.did : ""), s.src = c
    }
    return !0
}

function TagQ(e, t) {
    return t.getElementsByTagName(e)
}

function h(e) {
    e.style.behavior = "url(#default#homepage)", e.setHomePage(bds.comm.domain);
    var t = window["BD_PS_C" + (new Date).getTime()] = new Image;
    t.src = bds.comm.ubsurl + "?fm=hp&tn=" + bds.comm.tn + "&t=" + (new Date).getTime()
}

function G(e) {
    return document.getElementById(e)
}

function ns_c_pj(e, t) {
    var i = encodeURIComponent(window.document.location.href),
        n = "",
        o = "",
        r = "",
        s = bds && bds.comm && bds.comm.did ? bds.comm.did : "";
    wd = bds.comm.queryEnc, nsclickDomain = bds && bds.util && bds.util.domain ? bds.util.domain.get("http://nsclick.baidu.com") : "http://nsclick.baidu.com", img = window["BD_PS_C" + (new Date).getTime()] = new Image, src = "";
    for (v in e) {
        switch (v) {
            case "title":
                o = encodeURIComponent(e[v].replace(/<[^<>]+>/g, ""));
                break;
            case "url":
                o = encodeURIComponent(e[v]);
                break;
            default:
                o = e[v]
        }
        n += v + "=" + o + "&"
    }
    if (r = "&mu=" + i, src = nsclickDomain + "/v.gif?pid=201&" + (t || "") + n + "path=" + i + "&wd=" + wd + "&rsv_sid=" + (bds.comm.ishome && bds.comm.indexSid ? bds.comm.indexSid : bds.comm.sid) + "&rsv_did=" + s + "&t=" + (new Date).getTime(), "undefined" != typeof Cookie && "undefined" != typeof Cookie.get) Cookie.get("H_PS_SKIN") && "0" != Cookie.get("H_PS_SKIN") && (src += "&rsv_skin=1");
    else {
        var a = "";
        try {
            a = parseInt(document.cookie.match(new RegExp("(^| )H_PS_SKIN=([^;]*)(;|$)"))[2])
        } catch (c) {}
        a && "0" != a && (src += "&rsv_skin=1")
    }
    return img.src = src, !0
}

function ns_c(e, t) {
    return t === !0 ? ns_c_pj(e, "pj=www&rsv_sample=1&") : ns_c_pj(e, "pj=www&")
}

function escapeHTML(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;").replace(/"/g, "&#34;").replace(/'/g, "&#39;")
}

function initPreload(e) {
    function t() {
        Cookie.set("ISSW", "1", null, null, new Date((new Date).getTime() + 3e5))
    }

    function i(e, t) {
        t = t || 3, Cookie.set("ISWR", e, null, null, new Date((new Date).getTime() + 1e3 * t))
    }

    function n(e) {
        e && "string" == typeof e && (e = $.parseJSON(e)), e && e.length && $.each(e, function(e, t) {
            if (0 === t.indexOf(lt.protocol)) {
                var i = new Image;
                i.src = t
            }
        })
    }

    function o(e) {
        return $.trim(e).replace(/\s+/g, " ")
    }

    function r(e) {
        if ("string" == typeof e) {
            var t, i = 0;
            for (t = 0; t < e.length; t++) i += e.charCodeAt(t);
            return i
        }
        return 0
    }

    function s(e) {
        var t, i, n, o, r = {};
        e.indexOf("?") > -1 ? (n = e.split("?"), o = n[1]) : o = e, t = o.indexOf("&") > -1 ? o.split("&") : new Array(o);
        for (var s = 0; s < t.length; s++) try {
            t[s] = t[s].indexOf("=") > -1 ? t[s] : t[s] + "=", i = t[s].split("="), r[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " "))
        } catch (a) {}
        return r
    }

    function a(e) {
        function t(e) {
            if (document.all) $("style[data-for='result']").get(0).styleSheet.cssText += e;
            else {
                var t = document.createElement("style");
                t.type = "text/css", t.appendChild(document.createTextNode(e)), t.setAttribute("data-for", "result"), document.getElementsByTagName("HEAD")[0].appendChild(t)
            }
        }

        function i() {
            Q.css({
                filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=95)",
                opacity: .95
            }), V || (t(".slowmsg{z-index:301;background-color:#fff;border:1px solid #f0f0f0;position:fixed;_position:absolute;top:144px;left:212px;height:95px;width:360px;box-shadow:0 0 5px rgba(0,0,0,0.05)}.slowmsg .ball{width:40px;margin:41px auto 0;position:relative;}.slowmsg .b{left:20px;position:absolute;width:10px;height:10px;-moz-border-radius: 50%;-webkit-border-radius: 50%;border-radius: 50%;}"), V = $('<div class="slowmsg"><div class="ball"><div class="b"/><div class="b"/><div class="b"/></div></div>'), V.find(".b").each(function(e, t) {
                var i = [
                        [0, 40],
                        [20, 20],
                        [40, 0]
                    ][e],
                    n = ["rgb(55,137,250)", "rgb(99,99,99)", "rgb(235,67,70)"],
                    o = 0;
                $(t).css({
                        "background-color": n[e]
                    }),
                    function r() {
                        return J ? ($(t).animate({
                            left: i[o % 2]
                        }, {
                            duration: 800,
                            easing: "swing",
                            progress: function(i, r) {
                                r >= .5 && $(t).css({
                                    "background-color": n[(o + e) % 3]
                                })
                            },
                            complete: function() {
                                r()
                            }
                        }), void o++) : void setTimeout(r, 400)
                    }()
            })), V.appendTo(ai), ns_c({
                pj_name: "loading_msg"
            })
        }

        function n() {
            var e, t = (new Date).getTime();
            Cookie.set("rsv_jmp_slow", t), Cookie.set("WWW_ST", t, null, null, new Date(t + 3e4)), e = lt.href + (lt.href.indexOf("?") > 0 ? "&" : "?") + "rsv_jmp=slow", lt.replace(e)
        }
        if (!Z) {
            var o = 112,
                e = $.extend({
                    top: o,
                    "z-index": 300
                }, e),
                r = $(window).height();
            Q || (Q = $("<div id='_mask'/>")), Q.css({
                filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                opacity: .3,
                position: "absolute",
                background: "#fff",
                "z-index": e["z-index"],
                top: e.top + "px",
                left: "0"
            }), Z = !0, Q.width(ai.width()), Q.height(Math.max(r, ai.height()) - e.top), Q.appendTo(ai), $(window).scrollTop(), J = setTimeout(i, 3e3), K = setTimeout(n, 7e3), Y = function() {
                J && (clearTimeout(J), J = setTimeout(i, 3e3)), K && (clearTimeout(K), K = setTimeout(n, 7e3))
            }
        }
    }

    function d() {
        Q && Z && (Z = !1, Q.remove(), V && V.remove(), J && (clearTimeout(J), J = !1), X && X.remove(), K && (clearTimeout(K), K = !1))
    }

    function l(e, t, i) {
        i || (i = 0);
        var n = e.length;
        for (0 > i && (i = n + i); n > i; i++)
            if (e[i] === t) return i;
        return -1
    }

    function u(e, t, i) {
        var n = t.find("script:not([src])"),
            o = 0,
            r = $.globalEval;
        $.globalEval = function(e) {
            window.currentScriptElem = n[o], o++;
            try {
                r.apply($, arguments)
            } catch (t) {
                window.console && console.debug && (console.debug(e), console.debug(t))
            }
        }, "insertBefore" == i ? t.insertBefore(e) : "insertAfter" == i ? t.insertAfter(e) : e.append(t), window.currentScriptElem = void 0, $.globalEval = r
    }

    function p(e) {
        try {
            e()
        } catch (t) {
            window.console && console.debug && console.debug(t), et(t.toString())
        }
    }

    function m(e, t) {
        function i(e) {
            if ("object" == typeof e) {
                var t = {};
                for (a in e) e.hasOwnProperty(a) && (t[a] = e[a])
            } else t = e;
            return t
        }
        if (!m.__init) {
            m.__init = !0;
            var n = ["wd", "pn", "nojc", "cl", "cq", "srcid", "gpc", "tfflag", "si", "sl_lang", "rsv_srlang", "rqlang"],
                o = ["wd", "cl", "ct", "tn", "rn", "ie", "f", "lm", "si", "gpc", "tfflag", "usm", "z", "ch", "sts", "vit", "dsp", "trh", "trb", "tre", "la", "lo", "st", "nojc", "haobd", "rtt", "bsst", "gvideo", "__eis", "__eist", "oq", "fenlei", "sid", "rsv_idx", "rsv_stat", "rsv_bp", "rqlang"],
                r = ["w", "word"];
            m.prototype.clone = function(e) {
                var t = new m(i(this.params));
                if ("object" == typeof e)
                    for (var n in e) e.hasOwnProperty(n) && l(o, n) >= 0 && t.p(n, e[n]);
                return t
            }, m.prototype.h = function(e) {
                this.header_params = this.header_params || {};
                for (var t in e) this.header_params[t] = e[t];
                return this
            }, m.prototype.buildHeaders = function(e) {
                e && this.setHeader(e);
                var t = {};
                for (var i in this.header_params)
                    if ("object" == typeof this.header_params[i]) {
                        var n = [];
                        for (var o in this.header_params[i]) {
                            var r = this.header_params[i][o];
                            r instanceof Array && (r = r.join("|")), n.push(o + "=" + r)
                        }
                        t[i] = n.join("&")
                    } else t[i] = this.header_params[i];
                return t
            }, m.prototype.buildSearchUrl = function(e) {
                return lt.protocol + "//" + lt.host + lt.pathname + lt.search + "#" + this.buildQueryString(e)
            }, m.prototype.buildSyncSearchUrl = function(e) {
                return lt.protocol + "//" + lt.host + "/s?" + this.buildQueryString(e)
            }, m.prototype.buildQueryString = function(e) {
                var t = i(this.params);
                if ("object" == typeof e)
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                var o = "";
                t.wd = $.limitWd(t.wd);
                for (param in t) param && t.hasOwnProperty(param) && "" !== t[param] && (o += param + "=" + encodeURIComponent(t[param]).replace(/'/g, "%27") + "&");
                return o.substr(0, o.length - 1)
            }, m.prototype.equals = function(e) {
                if (!e || !e.p) return !1;
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    if ("pn" == i) {
                        var o = this.p(i) ? this.p(i) : "0",
                            r = e.p(i) ? e.p(i) : "0";
                        if (o != r) return !1
                    } else if (this.p(i) != e.p(i)) return !1
                }
                return !0
            }, m.prototype.p = function(e, t) {
                return l(r, e) >= 0 && (e = "wd"), void 0 === t ? this.params[e] : (this.params[e] = t, this)
            }, m.prototype.hashCode = function() {
                var e = [];
                if (!this.p("wd")) return "";
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    e.push("pn" != i || this.p(i) ? this.p(i) : "0")
                }
                return e.join("	")
            }, m.prototype.filterOtherParams = function() {
                for (var e in this.params) this.params.hasOwnProperty(e) && l(o, e) < 0 && delete this.params[e]
            }, m.prototype.wdSameName = function() {
                var e;
                for (e = 0; e < r.length; e++) this.params && this.params[r[e]] && (this.params.wd = this.params[r[e]], delete this.params[r[e]])
            }
        }
        if (this.params = {}, !t) {
            zt = Ct.serializeArray();
            for (var s = 0; s < zt.length; s++) this.p(zt[s].name) || this.p(zt[s].name, zt[s].value)
        }
        if ("object" == typeof e)
            for (var a in e) e.hasOwnProperty(a) && this.p(a, e[a]);
        this.wdSameName()
    }

    function f(e) {
        function t(e) {
            "string" == typeof e && (_[e] = Date.now ? Date.now() : +new Date)
        }

        function i(e, t) {
            "string" == typeof e && (w[e] = t)
        }

        function n() {
            w.cus_net = _.net > _.st && _.net - _.st - w.cus_srv > 0 ? _.net - _.st - w.cus_srv : 1, w.cus_tti2 = _.dom > _.st ? _.dom - _.st : 1, w.cus_frdom = _.dom - _.pt, w.cus_fs = _.fs > _.st ? _.fs - _.st : w.cus_tti2, w.cus_frext = w.cus_fs - w.cus_tti2
        }

        function o(e) {
            var t = "";
            for (var i in e) i && e.hasOwnProperty(i) && "" !== e[i] && (t += "&" + i + "=" + encodeURIComponent(e[i]));
            return t
        }

        function r(e) {
            var e = [];
            for (var t in k) e.push(k[t]);
            var i = T = $.when.apply($, e);
            T.always(function() {
                i === T && p()
            })
        }

        function s() {
            var e = Array.apply(null, arguments);
            if (!(!e.length > 0))
                for (var t = 0; t < e.length; t++) k[e[t]] = $.Deferred()
        }

        function a() {
            i("qid", e.qid), i("cus_q", e.real_wd || e.env.p("wd")), i("sid", bds.comm.sid), i("cus_newindex", bds.comm.newindex), i("supportis", bds.comm.supportis)
        }

        function c() {
            e = null, S = null
        }

        function d(e) {
            k[e].resolve(), "swap_end" == e && setTimeout(function() {
                d("swap_end_5s")
            }, 5e3)
        }

        function l() {
            s("swap_end", "swap_end_5s"), s("confirm"), r()
        }

        function u() {
            l(), _.st = 0, _.fs = 0, _.dom = 0
        }

        function p() {
            var e = Math.random(),
                t = /28230|28231/,
                r = e > .51 && .52 > e;
            C = C || bds.comm.bfe_sample;
            var s = C && e > .6 && .9 > e;
            if (e > .51 && .52 > e || t.test(bds.comm.sid) && e > 0 && .2 > e || bds.comm.intrSid || s) {
                t.test(bds.comm.sid) && (r ? i("issam", 2) : i("issam", 1)), s && (i("issam", 3), i("bfesam", bds.comm.bfe_sample)), n(), h(S), g(S), i("srvInfo", f()), i("sysv", navigator.appMinorVersion), a(), x.fire();
                var c = "//www.baidu.com/nocache/fesplg/s.gif?log_type=sp",
                    d = "";
                d += o(v) + o(w);
                var l = c + d,
                    u = new Image,
                    p = "_LOG_" + (new Date).getTime();
                u.onload = function() {
                    delete window[p]
                }, window[p] = u, u.src = l
            }
        }

        function m(e) {
            S = e, e.find("img").one("load", function() {
                var e = $(this).offset(),
                    n = e.top,
                    o = e.left,
                    r = "";
                if (I > n && n > 0) {
                    t("fs");
                    var s = _.fs - _.dom;
                    y.push(n + "_" + o + "_" + s), r = $(this).attr("data-src") || /^http/.test($(this).attr("src")) ? $(this).attr("data-src") || $(this).attr("src") : "base64", i("ic_lis", r)
                }
            })
        }

        function f() {
            var e, t, i = $.parseJSON(bds.comm.speedInfo),
                n = [];
            for (var o in i) {
                if (e = i[o], t = e.ModuleId + "_" + e.TimeCost + "_" + e.TimeSelf + "_" + e.Idc, e.hasOwnProperty("SubProcess"))
                    for (var r in e.SubProcess) t += "," + e.SubProcess[r].ProcessId + "_" + e.SubProcess[r].TimeCost + "_" + e.SubProcess[r].isHitCache + "_" + e.SubProcess[r].Idc;
                n.push(t)
            }
            return encodeURIComponent(n.join("|"))
        }

        function h(e) {
            for (var t = 0, n = e.find("img"), o = e.find("#content_left").find("img"), r = 0, s = 0, a = 0; a < n.length; a++) s = n.eq(a).offset().top, I > s && s > 0 && t++;
            i("cus_ic", n.length), i("cus_extic", t), i("cus_extlic", r), i("cus_icl", o.length), i("cus_icr", e.find("#content_right").find("img").length), i("img_info", y.join(",")), i("psize", e.html().length)
        }

        function g(e) {
            var t = {},
                n = [],
                o = e.find("#content_left,#con-ar").children("*[tpl]"),
                r = "";
            if (o.length > 0)
                for (var s = 0; s < o.length; s++) r = o.eq(s).attr("tpl"), t.hasOwnProperty(r) || (t[r] = 1, n.push(r));
            n.length > 0 && i("tplp", n.join("|"))
        }

        function b(e) {
            x.add(e)
        }
        var v = {
                product_id: 45,
                page_id: 317,
                page_type: 0
            },
            w = {},
            _ = {
                st: 0,
                pt: 0,
                net: 0,
                dom: 0,
                fs: 0
            },
            y = [],
            x = $.Callbacks(),
            k = {},
            T = null,
            S = null,
            C = null,
            I = 600;
        return l(), {
            trigger: d,
            mark: t,
            setParam: i,
            onSendlog: b,
            bindImgLoad: m,
            destroy: c,
            init: u
        }
    }

    function h(e, t) {
        e ? ti.done(function() {
            t(Bt, Ft, Wt)
        }) : $.when(ii).done(function(e) {
            t(e)
        })
    }

    function g(e, t) {
        var i, n;
        if (i || (i = jt.val()), S(""), F(), clearTimeout(ei), clearTimeout(fi), 0 == pageState && window.__disable_index_predict || mt || ht || Zt.isSlow()) return void e.setMaxNum(10);
        e.setMaxNum(ct);
        var o = new m({
            pn: "",
            wd: t.value
        });
        if (bds && bds.comm && bds.comm.logFlagSug && 1 === bds.comm.logFlagSug && o.p("rsv_slog", "ipt_change"), 0 == pageState && bds.comm.supportis && $.trim(jt.val())) {
            B(o);
            var r = $("<div id='ent_sug'>请按“回车”键发起检索</div>").insertBefore(".s_form");
            $(window).one("swap_begin", function() {
                r.remove()
            })
        }
        if (Qt) return void(Qt = !1);
        if (window.__restart_confirm_timeout && A(), Yt = "input", At = (new Date).getTime(), n && (clearTimeout(n), n = !1), "" == $.trim(t.value)) return void I();
        if (Gt = t.checkStore(), !/^[a-zA-Z0-9~!@#$%^&*()_+=-]$/.test(t.value)) {
            var s = jt.val(),
                a = t.imt.getLog();
            a.length > 0 && a[a.length - 1].type.indexOf("link") > -1 && o.p("_sglink", "1");
            var c = t.imt.diffLog();
            c && c.length > 1 && (c = c.slice(-15).join("."), o.h({
                is_params: {
                    imes: encodeURIComponent(c)
                }
            })), !window.__disable_is2 && i.length > s.length && 0 === i.indexOf(s) ? n = setTimeout(function() {
                P({
                    env: o,
                    use_cache: !0,
                    force: !1,
                    pstg: 5,
                    shouldShow: bds.comm.supportis
                }), n = !1
            }, 250) : P({
                env: o,
                use_cache: !0,
                force: !1,
                pstg: 5,
                shouldShow: bds.comm.supportis
            })
        }
        i = s
    }

    function b(e, t, i, n) {
        if (S(""), clearTimeout(ei), !(0 == pageState && window.__disable_index_predict || mt || ht || Zt.isSlow()))
            if (-1 == t) {
                Jt && e.setVisibleSug(Jt.real_wd);
                var o = new m({
                    pn: "",
                    wd: n.value
                });
                bds && bds.comm && bds.comm.logFlagSug && 1 === bds.comm.logFlagSug && o.p("rsv_slog", "sug_select"), P({
                    env: o,
                    use_cache: !0,
                    force: !1,
                    shouldShow: bds.comm.supportis,
                    pstg: 3
                })
            } else {
                e.setVisibleSug(), S("");
                var o = new m({
                    pn: "",
                    wd: i
                });
                bds && bds.comm && bds.comm.logFlagSug && 1 === bds.comm.logFlagSug && o.p("rsv_slog", "sug_select");
                var r = n.stopRefresh ? !1 : bds.comm.supportis;
                P({
                    env: o,
                    force: !1,
                    use_cache: !0,
                    no_predict: !0,
                    shouldShow: r,
                    pstg: 3
                })
            }
    }

    function v(e, t) {
        var i = getCursortPosition(this);
        (9 == t.keyCode || 39 == t.keyCode && i == (this.value && this.value.length)) && bds.comm.supportis && Jt && Et.text() && (t.preventDefault(), Jt.real_wd != this.value && (jt.val(Jt.real_wd), e.check()), e.show(), S(""), O(Jt, Kt, 22)({
            tipConfirm: !0
        }))
    }

    function w(e) {
        jt.keydown(function(t) {
            v(e, t)
        }), e.on("start", function() {
            Yt = "focus"
        }), $(window).on("blur", function() {
            e.hide()
        }), $(document).on("click", function(t) {
            return 2 == t.isTrigger || 3 == t.isTrigger ? !1 : void e.hide()
        }), e.on("inputChange", function(t, i) {
            g(e, i)
        }), e.on("selectSug", function(t, i, n, o) {
            b(e, n, o, i)
        }), e.on("render", function() {
            Jt && e.setVisibleSug(Jt.real_wd)
        }), e.on("dataReady", function(e, t) {
            var i = t && t.queryValue && t.dataCached && t.dataCached[t.queryValue];
            if (i && i.gl)
                for (var n in i.gl)
                    if (1 * i.gl[n] > 0) {
                        var o = new m({
                            pn: "",
                            wd: i.s[n]
                        });
                        P({
                            env: o,
                            force: !1,
                            use_cache: !0,
                            no_predict: !0,
                            shouldShow: !1,
                            pstg: 7
                        })
                    }
        }), 0 == pageState && e.start()
    }

    function _(e, t) {
        e && (t = $.extend(e.log, t))
    }

    function y() {
        if (bds.comm.seinfo) {
            bds.comm.seinfo.rsv_pre = encodeURIComponent(x()), bds.comm.seinfo.rsv_reh = reh_rec(), bds.comm.seinfo.rsv_scr = scr_rec();
            var e = null;
            if (bds && bds.comm && bds.comm.personalData) try {
                "string" == typeof bds.comm.personalData && (bds.comm.personalData = $.parseJSON(bds.comm.personalData)), e = bds.comm.personalData ? bds.comm.personalData.fullSkinName && bds.comm.personalData.fullSkinName.value : null
            } catch (t) {
                e = null
            }
            if (e && (bds.comm.seinfo.rsv_skin = e), bds.comm.seinfo.rsv_psid = $.getCookie("BIDUPSID"), bds.comm.seinfo.rsv_pstm = $.getCookie("PSTM"), bds.comm.seinfo.rsv_idc = function() {
                    var e = bds.comm.speedInfo || [];
                    try {
                        e = $.parseJSON(e)
                    } catch (t) {
                        e = []
                    }
                    for (var i = 0, n = e.length; n > i; i++)
                        if (9540 == e[i].ModuleId) return e[i].Idc || "";
                    return ""
                }(), c(bds.comm.seinfo), "ON" === bds.comm._se_click_track_flag) {
                var i = new Image,
                    n = "//www.baidu.com/s?wd=" + bds.comm.queryEnc + "&qid=" + bds.comm.queryId + "&lts=91";
                i.src = n
            }
        }! function() {
            var e = Math.random(),
                t = function() {
                    function e() {
                        var e = [],
                            n = [],
                            o = {};
                        for (var r in i) ! function(t) {
                            var r = "_SSL_LOG_" + t + "_" + +new Date,
                                s = new Image,
                                a = new Date;
                            o[t] = $.Deferred(), n.push(o[t]), s.onload = function() {
                                e.push(t + "_success=" + (new Date - a)), o[t].resolve(), delete window[r]
                            }, s.onerror = function() {
                                e.push(t + "_error=" + (new Date - a)), o[t].resolve(), delete window[r]
                            }, s.src = i[t]
                        }(r);
                        var s = $.when.apply($, n);
                        s.always(function() {
                            var i = "//www.baidu.com/nocache/fesplg/s.gif?log_type=hm&type=ssl&",
                                n = e.join("&"),
                                o = new Image,
                                r = "_HM_LOG_" + (new Date).getTime();
                            o.onload = function() {
                                delete window[r]
                            }, window[r] = o, o.src = i + n + "&_tt=" + t
                        })
                    }
                    var t = +new Date,
                        i = {
                            gt1: "https://gt1.baidu.com/nocache/imgdata/sp613.gif?t=" + t,
                            gt2: "https://gt2.baidu.com/nocache/imgdata/sp613.gif?t=" + t
                        };
                    setTimeout(e, 1e3)
                };
            e > .1 && .11 > e && t()
        }()
    }

    function x() {
        return Ut.length
    }

    function k(e) {
        $(document).delegate("a", "mousedown", function() {
            return function() {
                var t = $(this);
                T(t, e)
            }
        }())
    }

    function T(e, t) {
        var i, n = t.prefix,
            o = e.attr("href");
        if (n && o && 0 == o.indexOf(n) && (o = o.substring(n.length)), !n && o) {
            var r = o.match(/^http:\/\/[^\/]+/);
            if (!r) return;
            n = r[0], o = o.replace(/^http:\/\/[^\/]+/, "")
        }
        if (o && (i = o.match(/^\/*(link|baidu.php)\?(.*)$/), i = o.match(t.regex)), !(i && i[2] && i[2].match(/&(wd|word)=/))) {
            if (o && i) {
                t.convertTable && t.convertTable[i[1]] && (i[1] = t.convertTable[i[1]]);
                var s = pt.getLinkParams(o);
                s && ("https:" === lt.protocol && /Chrome|Safari/.test(navigator.userAgent) && (n = n.replace(/^http:\/\/www\.baidu\.com/, "https://www.baidu.com")), o = n + "/" + i[1] + "?" + i[2] + "&" + s, e.attr("href", n + "/" + i[1] + "?" + i[2] + "&" + s), e.click(function() {
                    window.PDC_ASYNC.setLinkData("click_t", (new Date).getTime()), window.PDC_ASYNC.setLinkData("linkpreload", $(this).attr("linkpreload"))
                }))
            }
            return o
        }
    }

    function S(e) {
        if (!window.__disable_is2 || $.trim(e) != $.trim(jt.val())) {
            if (ci || !bds.comm.supportis) return void(Et && Et.html(""));
            if (0 != pageState && !window.__disable_kw_tip)
                if (Et || (Et = $('<div id="kw_tip" style="width:initial" unselectable="on" onselectstart="return false;" class="s_ipt_tip"/>').insertBefore(jt), Et.parent().click(function(e) {
                        var t = jt.get(0);
                        if (e.target === t) return !0;
                        t.focus();
                        var i = t.value.length;
                        if (document.selection) {
                            var n = t.createTextRange();
                            n.moveStart("character", i), n.collapse(), n.select()
                        } else "number" == typeof t.selectionStart && "number" == typeof t.selectionEnd && (t.selectionStart = t.selectionEnd = i);
                        return !1
                    }), Et.get(0).onselectstart = function() {
                        return !1
                    }), Et.text(e), "" != e) {
                    var t = jt.textWidth();
                    Et.css({
                        "margin-left": t + 20 + "px",
                        "max-width": Et.parent().width() - t - 14 + "px"
                    }).text(e), window.__disable_is2 && Et.css("z-index", 1), Et.show()
                } else Et.hide()
        }
    }

    function C() {
        ci = !1
    }

    function I() {
        ci = !0, Jt && Jt.real_wd && $.trim(jt.val()) ? (S(Jt.real_wd), D(Jt)) : (S(""), D())
    }

    function D(e) {
        var t = o(jt.val());
        e && t == e.real_wd && $("#super_se_tip").remove()
    }

    function L(e, t) {
        var i = (new Date).getTime();
        if (t.force || _(t, {
                utime: (new Date).getTime() - Ht
            }), !t || !t.loaded) return !1;
        "string" == typeof t.html && (t.html = $(t.html)), $(t).trigger("swap_begin"), p(function() {
            t.pdc.mark("pt"), $(window).trigger("swap_begin", [t, e]);
            var i = Zt && Zt.getData();
            i && (setTimeout(function() {
                t.pdc.setParam("ispeed", Zt.monitor(i))
            }, 3e3), t.pdc.setParam("upm", i.join(",")))
        }), p(function() {
            t.base64.restart();
            try {
                if (!t.base64_loaded) {
                    var e = $.parseJSON(t.html.find("#img_list").text());
                    t.base64.loadImg(e.right, e.left)
                }
            } catch (i) {}
            t.base64.end()
        });
        var n = [$(window).scrollLeft(), $(window).scrollTop()];
        Nt.hide(), oldEnv = Vt, Vt = e, Kt = Jt, Jt = t, bds.comm.cur_disp_query = e.p("wd"), E(), bds && bds.se && bds.se.certification && bds.se.certification.data && (bds.se.certification.data = []), 0 == pageState && B(e), p(function() {
            kt()
        }), bds.clearReady(), Nt.empty();
        var o = t.html;
        if (ot.use_cache_repeatedly && (o = o.clone()), $("#content_style").remove(), p(function() {
                var e = o.find("#head_style").children("#content_style");
                e && e.length ? e.children().removeAttr("data-for").appendTo("head") : o.find("#head_style").children().removeAttr("data-for").appendTo("head")
            }), p(function() {
                $.globalEval(o.find("#head_script").html())
            }), bds.comm && bds.comm.jsversion && "006" != bds.comm.jsversion) {
            var r = Vt.buildSyncSearchUrl({
                jmp: "jsver",
                _vr: Math.random()
            });
            return void lt.replace(r)
        }
        bds.comm.bottomColor ? (Nt.addClass("container_through_bottom"), Nt.css("background", "rgb(" + bds.comm.bottomColor + ")")) : (Nt.removeClass("container_through_bottom"), Nt.css("background", "")), p(function() {
            o.find("#content_script script").each(function(e, t) {
                $.globalEval($(t).html())
            })
        }), p(function() {
            var e = o.find("#s_tab");
            if (e.size()) {
                var t = $("#s_tab");
                t.size() ? t.replaceWith(e) : e.insertBefore(Nt)
            }
        });
        var s = !1;
        ! function() {
            var e = o.find("#con-at"),
                i = $("#con-at"),
                n = i.children().children();
            if (n.size())
                if (e.children().size()) {
                    var r = e.children().children();
                    n.attr("cq") != r.attr("cq") || n.attr("srcid") != r.attr("srcid") || t.force && oldEnv && oldEnv.equals(Vt) || !Vt.p("cq") || !Vt.p("srcid") || 1 == Vt.p("_trf") ? (i.remove(), $(window).trigger("top_result_removed"), u(Nt, e, "insertBefore")) : s = !0
                } else i.remove(), $(window).trigger("top_result_removed");
            else e.children().size() && u(Nt, e, "insertBefore")
        }(),
        function() {
            var e = o.find("#top-ad"),
                t = $("#top-ad"),
                i = t.children(),
                n = $("#s_tab"),
                r = !!e.children().size();
            i.size() && t.remove(), r && u(n, e, "insertAfter")
        }();
        var a = o.find("#container");
        if (t.pdc.bindImgLoad(a), u(Nt, a), !$("#footer").size()) {
            var c = o.find("#footer").children();
            u(Nt, c)
        }
        bds && bds.comm && bds.comm.templateName == bds.comm.resTemplateName ? bds.comm.seinfo && (bds.comm.seinfo.rsv_tpfail = 0) : bds.comm.seinfo && (bds.comm.seinfo.rsv_tpfail = 1), 0 != pageState && bds && bds.util && bds.util.setContainerWidth && bds.util.setContainerWidth(), document.title = e.p("wd") + "_百度搜索", Nt.show(), d(), _(t, {
            domtime: (new Date).getTime() - i
        }), _(t, {
            waittime: (new Date).getTime() - At
        }), t.pdc.mark("dom"), p(function() {
            var e = (new Date).getTime();
            o && $.globalEval(o.find("#jsMerge").html()), _(t, {
                jsmergetime: (new Date).getTime() - e
            })
        }), p(function() {
            var e = o.find("[data-for=result-data]");
            u(Nt, e)
        }), $(window).trigger("swap_dom_ready", [t, e]), window.__lazy_foot_js ? setTimeout(function() {
            j(e, t, i)
        }, 0) : j(e, t, i), s ? window.scrollTo(n[0], n[1]) : window.scrollTo(0, 0), $(window).trigger("scroll"), swap_wait = !1
    }

    function j(e, t, i) {
        var n;
        if (i || (i = 0), t && (n = t.html), p(function() {
                It.get(0).f.value = 8
            }), p(function() {
                var e = (new Date).getTime();
                t && t.base64 && (t.base64.setDomLoad("left"), t.base64.setDomLoad("right")), _(t, {
                    base64time: (new Date).getTime() - e
                })
            }), $("#search").find("form").submit(function() {
                var e = jt;
                jt = $(this).find("[name='wd']");
                var t = R.call(this);
                return jt = e, t
            }), p(function() {
                var e = (new Date).getTime();
                bds.doReady(), _(t, {
                    bdstime: (new Date).getTime() - e
                })
            }), p(function() {
                var e = (new Date).getTime();
                n && $.globalEval(n.find("#ecomScript").html()), _(t, {
                    ecomtime: (new Date).getTime() - e
                })
            }), p(function() {
                var e = (new Date).getTime();
                bds.se.tools && (Pt && clearTimeout(Pt), Pt = setTimeout(function() {
                    bds.se.tools()
                }, 600)), bds && bds.se && bds.se.certification && bds.se.certification.build && (Rt && clearTimeout(Rt), Rt = setTimeout(function() {
                    $(".certification").size() > 0 && bds.se.certification.build.init()
                }, 1e3)), bds && bds.se && bds.se.safeTip && (Ot && clearTimeout(Ot), Ot = setTimeout(function() {
                    $(".unsafe_ico_new").size() > 0 && bds.se.safeTip.init()
                }, 1200)), _(t, {
                    tiptime: (new Date).getTime() - e
                })
            }), p(function() {
                var e = (new Date).getTime();
                window.initResultClickLog(), _(t, {
                    clicktime: (new Date).getTime() - e
                })
            }), p(function() {
                _(t, {
                    rtime: (new Date).getTime() - i,
                    used: 1
                }), bds.comm.seinfo && t && (bds.comm.seinfo.rsv_pstg = t.type)
            }), p(function() {
                $(window).trigger("swap_end", [t, e]), z(), Ht = (new Date).getTime(), t && t.pdc && (t.pdc.mark("js"), t.pdc.trigger("swap_end"))
            }), n) {
            var o = n.find(".foot-async-script"),
                r = $(".foot-async-script"),
                s = r.children(),
                a = $("body");
            s.size() && r.remove(), o.children().size() && u(a, o)
        }
    }

    function E() {
        p(function() {
            $.each(bds.comm.tips, function(e, t) {
                t && t.destroy && t.destroy()
            }), $("#c-tips-container").empty(), bds.comm.tips = []
        }), p(function() {
            window.app && window.app.dispose && window.app.dispose()
        }), p(function() {
            bds.comm.resolveUnloadHandler()
        }), bds && bds.se && bds.se.certification && bds.se.certification.data && (bds.se.certification.data = []), bds && bds.se && bds.se.userAction && bds.se.userAction.destroy()
    }

    function A() {
        Mt && qt && (clearTimeout(Mt), Mt = setTimeout(qt, at))
    }

    function O(e, t, i) {
        return function(t) {
            var n = $.extend({}, t);
            if (e && !e.confirm) {
                bds.comm.cur_query = e.real_wd, !bds.comm.supportis && e && (i = e.pstg || 0), e.confirm = !0, Mt = !1, qt = null;
                var o = {};
                o.is_referer = ut, o.is_xhr = "1";
                var r = new m(s(pt.getQueryString()), !0);
                e.env.equals(r) || e.env.clone({
                    wd: e.prw
                }).equals(r) || pt.setUrl(e.env), ut = lt.protocol + "//" + lt.host + lt.pathname + lt.search, e.seq ? e.seq++ : e.seq = 1, e.pdc && (20 != i && bds.comm.supportis && e.pdc.mark("st"), e.pdc && e.pdc.setParam && e.pdc.setParam("cus_pstg", i), e.force && e.pdc.setParam("f4s", 1), e.pdc.trigger("confirm"), window.PRE_CONN.startTimer()), p(function() {
                    $(window).trigger("confirm", [e, i])
                });
                var a = "/s?ie=utf-8&csq=" + e.seq + "&pstg=" + i + (n.tipConfirm ? "&_cktip=1" : "") + "&mod=2" + (bds.comm.supportis ? "&isbd=1" : "") + "&cqid=" + e.qid + "&istc=" + ((new Date).getTime() - e.startTime) + "&ver=" + bds.comm.baiduis_verify + "&chk=" + e.chk + "&isid=" + $t + "&" + e.env.buildQueryString() + (e.force ? "&f4s=1" : "") + ("function" == typeof si ? "&_ck=" + si(e.env.p("wd")) : "");
                if (bds.comm.indexSid && (/9998_/.test(bds.comm.indexSid) && "https:" === lt.protocol && (bds.comm.indexSid = bds.comm.indexSid.replace("9998", "8499")), a += "&rsv_isid=" + bds.comm.indexSid), e.no_predict && (a += "&isnop=" + (1 >= xt ? 0 : 1)), e && e.pstg && (a += "&isctg=" + e.pstg), xt = 0, h(nt, function(t) {
                        if (Bt && t.getRsvStatus) try {
                            a += "&rsv_stat=" + t.getRsvStatus(e.env.p("wd"))
                        } catch (i) {}
                        t.getStat("rsv_sug6") && (a += "&rsv_sug6=" + t.getStat("rsv_sug6"), bds.comm.seinfo && (bds.comm.seinfo.rsv_sug6 = t.getStat("rsv_sug6"))), t.getStat("rsv_sug7") && (a += "&rsv_sug7=" + t.getStat("rsv_sug7")), t.getStat("rsv_sug9") && (a += "&rsv_sug9=" + t.getStat("rsv_sug9")), t.getStat("rsv_bp") && (a += "&rsv_bp=" + t.getStat("rsv_bp"))
                    }), $.ajax({
                        headers: o,
                        url: a
                    }).done(function(e) {
                        var t = "";
                        bds.comm.search_tool && bds.comm.search_tool.actualResultLang && (t = bds.comm.search_tool.actualResultLang), $('#form input[name="rqlang"]').val(t || "cn"), $('#form input[name="rsv_bp"]').val(1), $(e)
                    }).fail(function() {}), bds.comm.seinfo) {
                    bds.comm.seinfo.rsv_prw = encodeURIComponent(jt.val()), bds.comm.seinfo.rsv_pstg = i, bds.comm.seinfo.rsv_svoice = window.__supportvoice ? "1" : "0", e.cftime += 1, bds.comm.cftime = e.cftime + "";
                    var c = e.env.p("rsv_bak");
                    c && (bds.comm.seinfo.rsv_bak = c)
                }
                bds.comm.confirmQuery = bds.comm.query, bds.comm.confirmQid = bds.comm.qid, y(), $t = e.qid, h(nt, function(e) {
                    20 == i ? e.updateInitData() : 22 == i || bds.comm.supportis || i >= 0 && 5 >= i && e.updateInitData(), e.clearStat()
                }), window.cfpromise.resolve()
            }
        }
    }

    function R(e) {
        if (!pt.support()) return !0;
        if (ui) return !1;
        if (ui = !0, jt.blur(), S(""), $(this).attr("target")) return !0;
        li = !0, di = setTimeout(function() {
            li = !1
        }, 1e3);
        try {
            var t = $("#kw").attr("placeholder") || $(".kw-placeholder").text();
            if (!$.trim(jt.val()) && !t) return lt.href = "/", !1;
            var i, n = new m,
                o = $(this).serializeArray();
            for (i = 0; i < o.length; i++) n.p(o[i].name, o[i].value);
            if (t && !$.trim(jt.val()) ? (n.p("wd", t), n.p("rsv_dq", 1)) : $.trim(jt.val()) && n.p("wd", jt.val()), n.p("nojc") && n.p("nojc", ""), Jt) {
                if (n.equals(Jt.env.clone({
                        wd: Jt.real_wd
                    })) && !Jt.force) return O(Jt, Kt, 22)(), Jt.force = !0, S(""), D(Jt), !1;
                Jt.env.p("rsv_spt") && n.p("rsv_spt", Jt.env.p("rsv_spt"))
            }
            pt.submit(n, !!e)
        } catch (r) {}
        return !1
    }

    function P(e) {
        var t = {
            force: !1,
            no_predict: !1,
            use_cache: !1,
            shouldShow: !0,
            pstg: -1
        };
        e && $.extend(t, e);
        var i, n = t.env,
            o = t.force,
            r = t.no_predict,
            s = t.shouldShow,
            c = t.use_cache;
        if (n && n.p("wd") && n.hashCode() && (!mt && 1 != Cookie.get("ISSW") || o || !r) && (!ht && 1 != Cookie.get("ISSW") || o || r)) {
            if (c && (i = dt.hasCache(n, {
                    loaded: !0
                }))) return void(s && (Jt && i.env.clone({
                wd: i.real_wd
            }).equals(Jt.env.clone({
                wd: Jt.real_wd
            })) || (i.force = t.force, i.no_predict = t.no_predict, i.pdc.init(), i.force && (i.pdc.mark("st"), window.bds && bds.comm && !bds.comm.supportis && (i.pdc.mark("net"), i.pdc.setParam("cus_hitpreload", 1))), _(i, {
                frcache: 1
            }), L(n, i)), S(t.no_predict && 6 != t.pstg ? "" : i.real_wd), D(i)));
            o && s && r && a(), i = {
                env: n,
                cftime: 0,
                no_predict: r,
                shouldShow: s,
                loaded: !1,
                force: o,
                startTime: (new Date).getTime(),
                log: {
                    ctime: (new Date).getTime() - Ht,
                    wd: n.p("wd"),
                    ntime: 0,
                    stat: 0,
                    used: 0,
                    rtime: 0,
                    utime: o ? (new Date).getTime() - Ht : 0,
                    res: 0
                }
            }, i.pdc = f(i), t.pstg > 0 && (i.pstg = t.pstg), i.force && i.pdc.mark("st"), i.base64 = isbase64(i.pdc), Ut.push(i.log), yt++, xt++, U(i)
        }
    }

    function M() {
        var e = [];
        return Gt && (e = $.map(Gt.slice(0, 2), function(e) {
            return e.value
        })), e.join("	")
    }

    function q(e) {
        t(), lt.replace(e.buildSyncSearchUrl())
    }

    function N(e, t) {
        t ? (ht = !0, mi && (clearTimeout(mi), mi = !1), mi = setTimeout(function() {
            ht = gt
        }, e)) : (mt = !0, pi && (clearTimeout(pi), pi = !1), pi = setTimeout(function() {
            mt = ft
        }, e))
    }

    function U(e) {
        var t, s, a = e.env,
            c = {};
        c.is_referer = Jt && Jt.env ? Jt.env.buildSyncSearchUrl() : Xt.replace(/\#.*$/, ""), $.extend(c, a.buildHeaders()), c.is_xhr = "1", window.bds && bds.comm && bds.comm.cur_query ? a.p("bs", bds.comm.cur_query) : a.p("bs", ""), window.bds && bds.comm && bds.comm.cur_disp_query && (c.is_pbs = encodeURIComponent(bds.comm.cur_disp_query));
        var d = e.no_predict || !bds.comm.supportis ? 1 : 11,
            l = e.pstg;
        if (!(1 == d && 1 == l || 11 == d && 3 == l || 11 == d && 6 == l || 1 == d && 4 == l)) {
            var u = "ie=utf-8" + (bds.comm.newindex ? "&newi=1" : "") + (Tt.sid ? "&sid=" + encodeURIComponent(Tt.sid) : "") + (Tt.tnp ? "&tnp=" + encodeURIComponent(Tt.tnp) : "") + "&mod=" + (e.no_predict || !bds.comm.supportis ? "1" : "11") + (bds.comm.supportis ? "&isbd=1" : "") + "&isid=" + $t + "&" + a.buildQueryString() + "&rsv_sid=" + bds.comm.indexSid + "&_ss=1&clist=" + encodeURIComponent(dt.getCacheList()) + "&hsug=" + encodeURIComponent(M()) + (e.force ? "&f4s=1" : "") + "&csor=" + getCursortPosition(jt.get(0));
            e.pstg && (u += "&pstg=" + e.pstg);
            var p = "/s?" + u;
            if (p += "&_cr1=" + r(p), !e.no_predict)
                for (s = dt.find(function(e) {
                        return e.loaded || e.no_predict ? void 0 : !0
                    }), t = 0; t < s.length; t++) dt.deleteCache(s[t]);
            if (!(e.no_predict && !e.force && (s = dt.find(function(e) {
                    return e.force && a.equals(e.env) ? !0 : void 0
                }), s.length > 0))) {
                if (e.force && e.shouldShow) {
                    var m = !1,
                        f = (new Date).getTime();
                    if (s = dt.find(function(t) {
                            var i = a.equals(t.env);
                            return t.loaded || t.no_predict || !i || t === e || (t.shouldShow = !1), !t.loaded && t.no_predict && t.force && i && t !== e && (t.shouldShow = t.shouldShow || e.shouldShow, t.startTime && f - t.startTime < 2e3 && (m = !0), window.__sam_backup_request || (m = !0)), t.loaded || i ? void t.pdc.mark("st") : !0
                        }), m) return;
                    for (t = 0; t < s.length; t++) dt.deleteCache(s[t])
                }
                var h, g = function(t, i, n) {
                        if (0 == i) b(t, n), e.pdc && (e.pdc.setParam("cus_srv", bds.se.mon.srvt), e.pdc.setParam("bsi", Cookie.get("__bsi")));
                        else if (1 == i) try {
                            var o = 1 * new Date;
                            e.b64ildata = $.parseJSON(t), e.base64.ilparseTime = 1 * new Date - o, e === Jt && (e.base64.inline(e.b64ildata), e.base64.ilrenderTime = 1 * new Date - o), $(e).one("swap_begin", function() {
                                this.base64.inline(this.b64ildata, this.html.get(0))
                            })
                        } catch (r) {} else 2 == i && e.base64 && (e.base64.ilsum = t)
                    },
                    b = function(t, r) {
                        if (r && "302" == r.status || t && $.trim(t).indexOf("<div>") > 10) return void(e.force ? (i(11), q(a)) : dt.deleteCache(e));
                        _(e, {
                            ntime: (new Date).getTime() - e.startTime,
                            res: 1
                        });
                        var s, c = "<!--data-->",
                            d = t.indexOf(c);
                        if (-1 != d) {
                            s = $(t.substr(0, d)), e.html = t.substr(d + c.length), window.__dom_pre_parse && "1" == s.find("#__need_parse_dom").html() && (e.html = $(e.html));
                            try {
                                var l = $.parseJSON(s.find("#img_list").text());
                                e.base64.loadImg(l.right, l.left), e.base64_loaded = !0
                            } catch (u) {}
                            try {
                                n(s.find("#limg_list").text())
                            } catch (u) {}
                        } else s = e.html = $(t);
                        var p = parseInt(s.find("#__status").eq(0).html()),
                            m = parseInt(s.find("#__switchtime").eq(0).html()),
                            f = parseInt(s.find("#__redirect").eq(0).html()),
                            h = {};
                        try {
                            h = $.parseJSON(s.find("#__sugPreInfo:eq(0)").html() || "{}") || {}
                        } catch (u) {}
                        e.real_wd = s.find("#__real_wd").eq(0).text(), e.real_wd_org = s.find("#__real_wd_org").eq(0).text(), e.real_wd_nosynx = s.find("#__real_wd_nosynx").eq(0).text(), e.env && e.env.p("nojc") && e.real_wd_nosynx && (e.real_wd = e.real_wd_nosynx);
                        var g = !1;
                        (a.p("wd") == o(jt.val()) || e.force) && e.shouldShow && (g = !0), e.real_wd && (e.prw = a.p("wd"), a.p("wd", e.real_wd));
                        var b = s.find("#__queryId").html(),
                            v = s.find("#__querySign").html();
                        e.querySign = v, _(e, {
                            stat: p ? p : 0
                        }), bds.comm.isDebug && $("#isDebugInfo").html(s.find("#__isDebugInfo").html()), b && (e.qid = b);
                        var w = s.find("#__chk").html();
                        if (e.chk = w ? w : 0, !t || !b && !m && !f && !p || !v && e.force) return e.force ? (a.p("__eis", 1), a.p("__eist", t ? t.length : 0), a.p("real_wd", e.real_wd), i(13), void q(a)) : void dt.deleteCache(e);
                        if (m > 0 && N(1e3 * m, !e.no_predict), -11 == p) {
                            var y = dt.getCacheBySign(v);
                            if (!y) return P({
                                env: e.env.clone({
                                    wd: e.real_wd
                                }),
                                force: e.force,
                                use_cache: !1,
                                no_predict: !0
                            }), void dt.deleteCache(e);
                            y.force = e.force, C(), S(y.real_wd), D(y), dt.deleteCache(e), e = y, Jt && e.real_wd == Jt.real_wd || (g = !0)
                        } else {
                            if (0 > p) {
                                if (1 == f && e.force) return _(e, {
                                    redirect: 1
                                }), i(14), void q(a);
                                if (I(), -12 == p && h && h.wait_time > 0) {
                                    var x = e.env.clone();
                                    ei = setTimeout(function() {
                                        P({
                                            env: x,
                                            force: !1,
                                            use_cache: !0,
                                            no_predict: !0,
                                            shouldShow: !1,
                                            pstg: 6
                                        })
                                    }, h.wait_time)
                                }
                                return void dt.deleteCache(e)
                            }
                            if (p > 0) return void dt.deleteCache(e)
                        }
                        for (var k = dt.find(function(t) {
                                return !t.loaded && t !== e && t.no_predict && a.equals(t.env) ? (t.shouldShow && (g = !0), t.force && (e.force = !0, e.no_predict = !0), !0) : void 0
                            }), T = 0; T < k.length; T++) dt.deleteCache(k[T]);
                        return e.backup_request_timeout && clearTimeout(e.backup_request_timeout), e.loaded = !0, bds.comm.supportis || g ? void((g && e !== Jt || e.force) && (C(), e.shouldShow = !1, -11 == p ? e.pdc.init() : e.pdc.mark("net"), _(e, {
                            frcache: 0
                        }), L(a, e))) : !0
                    };
                h = $.ajax({
                    dataType: "parts",
                    url: p,
                    headers: c,
                    delimiter: "</*3*/>"
                }), h.parts(function(e, t) {
                    g(e, t, h)
                }), h.fail(function(t, n) {
                    e.force && e.shouldShow && "abort" != n && e.env && (i(12), lt.replace(e.env.buildSyncSearchUrl() + "&rsv_jmp=fail")), dt.deleteCache(e)
                }), e.xhr = h, dt.addCache(e)
            }
        }
    }

    function z() {
        Ut = [], yt = 0, li = !1, clearTimeout(di)
    }

    function H() {
        window.index_off && window.index_off(), Lt[0] !== Dt[0] && Lt.val(""), jt = Dt, pageState = 1, bds.comm.ishome = 0, bds.comm.cur_query = bds.comm.query, Vt = new m, Jt = {
            env: Vt,
            real_wd: bds.comm.query,
            force: !0,
            confirm: !0
        }, h(nt, function(e, t, i) {
            return function() {
                var e = i ? i : Wt;
                e.start()
            }
        }()), $(window).trigger("index_off"), bds.util.setContainerWidth(), p(function() {
            $(window).trigger("swap_dom_ready")
        }), window.__lazy_foot_js ? setTimeout(function() {
            j()
        }, 0) : j()
    }

    function B(e) {
        window.index_off && window.index_off(), Lt.get(0) !== Dt.get(0) && (Lt.val(""), Dt.val(e.p("wd"))), jt = Dt, pageState = 1, bds.comm.ishome = 0, h(nt, function(t, i, n) {
            i !== n && (i.stop(), n.hide(), n.setKey(e.p("wd")), n.start())
        }), bds.util.setContainerWidth(), $(window).trigger("index_off", e)
    }

    function F() {
        hi = !1, gi = !1, vi = [], clearTimeout(wi), wi = !1
    }

    function W(e) {
        hi || (hi = {
            x: e.pageX,
            y: e.pageY
        }), bi = {
            x: e.pageX,
            y: e.pageY
        }, gi || hi.x == e.pageX || hi.y == e.pageY || (gi = !0, vi = [hi], G())
    }

    function G() {
        vi.push(bi);
        var e = vi.length;
        if (Math.pow(bi.x - hi.x, 2) + Math.pow(bi.y - hi.y, 2) >= Math.pow(_t, 2) || e * wt >= vt) {
            var t = Bt,
                i = bds.comm.supportis ? 1 : 2;
            if (i && t && t.data() && t.data()[0] && t.visible()) {
                var n = (new m).clone({
                    wd: t.data()[0].value
                });
                P({
                    env: n,
                    force: !1,
                    no_predict: !0,
                    use_cache: !0,
                    shouldShow: !1,
                    pstg: 1
                }), i--
            }
            if (i && t && t.data() && t.data()[1] && t.visible()) {
                var n = (new m).clone({
                    wd: t.data()[1].value
                });
                P({
                    env: n,
                    force: !1,
                    no_predict: !0,
                    use_cache: !0,
                    shouldShow: !1,
                    pstg: 1
                }), i--
            }
            if (!bds.comm.supportis && i && $.trim(jt.val()) && (!Jt || Jt.env.p("wd") != $.trim(jt.val()))) {
                var n = (new m).clone({
                    wd: $.trim(jt.val())
                });
                P({
                    env: n,
                    force: !1,
                    no_predict: !0,
                    use_cache: !0,
                    shouldShow: !1,
                    pstg: 1
                }), i--
            }
        } else wi = setTimeout(function() {
            G()
        }, wt)
    }
    document.write = document.writeln = function() {}, bds && bds.comm && "clearissw" == bds.comm.query && Cookie.clear("ISSW"),
        function() {
            var e = $.Deferred();
            bds.comm.registerUnloadHandler = function(t) {
                e.done(t)
            }, bds.comm.resolveUnloadHandler = function() {
                e.resolve(), e = $.Deferred()
            }
        }(), window.b_rec = function(e) {
            var t;
            if (e) t = navigator.userAgent;
            else try {
                t = window.external && window.external.twGetRunPath ? window.external.twGetRunPath() : ""
            } catch (i) {
                t = ""
            }
            return t = t.replace(/:/, "~").replace(/\t/, "`")
        }, window.scr_rec = function() {
            var e = "";
            try {
                e += [document.body.clientWidth, document.body.clientHeight, window.screenTop, window.screenLeft, window.screen.height, window.screen.width].join("_")
            } catch (t) {}
            return e
        }, window.reh_rec = function() {
            var e = [],
                t = [];
            try {
                $("#content_left").children(".result,.result-op").each(function(t, i) {
                    e.push($(i).height())
                })
            } catch (i) {}
            try {
                $("#con-ar").children(".result,.result-op").each(function(e, i) {
                    t.push($(i).height())
                })
            } catch (i) {}
            return e.join("_") + "|" + t.join("_")
        }, window.hash = function(e, t) {
            return e ? e && !t && Vt ? Vt.p(e) : void(e && t && Vt && (Vt.p(e, t), lt.href = Vt.buildSearchUrl())) : void 0
        };
    var Q, V, J, X, K, Y, Z = !1;
    ! function() {
        var e = $.globalEval;
        $.globalEval = function() {
            var t = (new Date).getTime();
            try {
                e.apply($, arguments)
            } catch (i) {}(new Date).getTime() - t > 500
        }
    }(), bds.comm.isDebug && ($('<style data-for="debug">#debug{display:none!important;}</style>').appendTo("head"), $('<div id="debug" style="display:block;position:absolute;top:30px;right:30px;border:1px solid;padding:5px 10px;z-index:10000"></div>').appendTo("#wrapper"), $(window).on("swap_end", function(e, t) {
        if (t) {
            var i = $("#isDebugInfo");
            i.size() || (i = $('<div id="isDebugInfo"></div>').appendTo("#debug")), i.html(t.html.find("#__isDebugInfo").html());
            var n = "<table>";
            for (var o in t.log) t.log.hasOwnProperty(o) && (n += "<tr><td>" + o + "</td><td>" + encodeURIComponent(t.log[o]) + "</td></tr>");
            n += "</table>", $("#debug").html(n)
        }
    }));
    var et = function() {
        var e;
        return function(t) {
            bds.comm.isDebug && alert(t), bds && bds.comm && bds.comm.js_error_monitor && (e = new Image, e.src = bds.comm.js_error_monitor + "?" + $.param({
                url: lt.href,
                time: bds.comm.serverTime,
                explore: navigator.userAgent,
                info: t,
                info_type: 1
            }))
        }
    }();
    if (window.setSugKey = function(e) {
            jt && e && (Wt && Wt.setKey ? Wt.setKey(e) : jt.val(e))
        }, window.getCursortPosition = function(e) {
            var t = 0;
            try {
                if (document.selection) {
                    var i = document.selection.createRange(),
                        n = 0;
                    e && e.value && (n = e.value.length), i.moveStart("character", -n), t = i.text.length
                } else(e.selectionStart || "0" == e.selectionStart) && (t = e.selectionStart)
            } catch (o) {
                t = e.value.length
            }
            return t
        }, bds.comm.flagTranslateResult && ($("#wrapper_wrapper").delegate(".result", "mouseenter", function() {
            $(".c-fanyi", $(this)).show()
        }), $("#wrapper_wrapper").delegate(".result", "mouseleave", function() {
            $(".c-fanyi", $(this)).hide()
        }), $("#wrapper_wrapper").delegate(".result .c-fanyi", "click", function() {
            var e = $(this).closest(".result"),
                t = $("h3 a:first", e),
                i = $(".c-abstract:first", e),
                n = $(".c-fanyi-abstract", e).val(0).html(),
                o = $(".c-fanyi-title", e).val(0).html();
            $(".c-fanyi-abstract", e).val(0).html(i.html()), $(".c-fanyi-title", e).val(0).html(t.html()), t.html(o), i.html(n)
        })), bds && bds.comm && bds.comm.indexSid) {
        var tt = ("" + bds.comm.indexSid).split("_");
        $.inArray("28883", tt) >= 0 && (window.__disable_preload = 1, window.__disable_predict = 1)
    }
    if (bds && bds.comm && bds.comm.sid) {
        var it = ("" + bds.comm.sid).split("_");
        $.inArray("28883", it) >= 0 && (window.__disable_preload = 1, window.__disable_predict = 1)
    }
    var nt = 0;
    bds && bds.comm && bds.comm.sampleval && $.inArray("sam_ecom_sug", bds.comm.sampleval) > -1 && (nt = "1");
    var ot = {
        use_cache_repeatedly: !0,
        index_form: "#form",
        kw: "#kw",
        result_form: "#form"
    };
    e && $.extend(ot, e);
    var rt = 15,
        st = 6e4,
        at = window.__confirm_timeout ? window.__confirm_timeout : 1e4,
        ct = 10,
        dt = function() {
            function e(e) {
                "object" == typeof e && null != e && (e.xhr && e.xhr.abort && e.xhr.abort(), e.base64 && e.base64.destroy(), e.pdc && e.pdc.destroy(), e.backspace_preload_timeout_id && clearTimeout(e.backspace_preload_timeout_id), delete e.xhr, delete e.html)
            }
            var t = [];
            return {
                find: function(e) {
                    return $.grep(t, e)
                },
                getCacheList: function() {
                    var e = $.map(t, function(e) {
                        return e && (new Date).getTime() - e.startTime > st ? !1 : e.querySign
                    });
                    return e = $.grep(e, function(e) {
                        return !!e
                    }), e.join("	")
                },
                hasCache: function(e, i) {
                    function n(e) {
                        var n, o;
                        return (o = e.p("wd")) ? ($.grep(t, function(t) {
                            return i.loaded && !t.loaded ? !1 : void(e.equals(t.real_wd ? t.env.clone({
                                wd: t.real_wd
                            }) : t.env) && (n = t))
                        }), n ? n : null) : !1
                    }
                    i || (i = {});
                    var o = n(e);
                    return o && (new Date).getTime() - o.startTime > st && (this.deleteCache(o), o = null), o
                },
                shouldShow: function(e) {
                    if (e.force) return !0;
                    if (!e.shouldShow && !e.force && e.no_predict) return !1;
                    var t = o(jt.val());
                    return !t || Jt && e.env.equals(Jt.env) ? !1 : 0 == e.env.p("wd").indexOf(t) ? !0 : 0 == e.real_wd.indexOf(t) ? !0 : !1
                },
                getCacheBySign: function(e) {
                    var i = !1;
                    return $.each(t, function(t, n) {
                        i || !n.loaded || n.querySign != e || n.env.p("pn") && 0 != n.env.p("pn") || (i = n)
                    }), i
                },
                addCache: function(i) {
                    if (-1 == l(t, i) && !i.env.p("srcid") && !i.env.p("cq"))
                        for (t.unshift(i); t.length > rt;) e(t.pop())
                },
                deleteCache: function(i) {
                    e(i), t = $.grep(t, function(e) {
                        return e !== i
                    })
                },
                deleteCacheByEnv: function() {
                    t = $.grep(t, function(t) {
                        var i = t.env.equals(t.env);
                        return i && e(t), !i
                    })
                },
                clearCache: function() {
                    t = $.grep(t, function(t, i) {
                        return i !== Jt ? (e(i), !1) : !0
                    }), t = []
                }
            }
        }(),
        lt = document.location,
        ut = lt.protocol + "//" + lt.host + lt.pathname + lt.search,
        pt = {
            onurlchange: function() {}
        };
    ! function() {
        function e() {
            var e = lt.href.match(/#+(.*)$/);
            return e ? e[1].replace(/\+/g, "%2B") : ""
        }

        function i() {
            var e = lt.href.match(/\?([^#]+)/);
            return e ? e[1].replace(/\?/g, "&") : ""
        }

        function n(e, t) {
            var i = "";
            if ("1" === window._thirdLinkSpeed && (i = "&qid=" + bds.comm.queryId), window._bdlksmp > 0 && (i = "&bdlksmp=" + window._bdlksmp), "1" === window._eclipse && /^\/link\?/.test(t)) return "wd=&eqid=" + bds.comm.eqid + o(["pn", "rn", "ie"], e) + i;
            var n = new m(s(e));
            return n.p("wd") ? n.buildQueryString().replace(/&rsv[^=]*=[^&]*/g, "").replace(/[^a-zA-Z0-9]url=/g, "") + i : void 0
        }

        function o(e, t) {
            var i = "",
                n = s(t);
            for (var o in e) n.hasOwnProperty(o) && (i += "&" + encodeURIComponent(n[o]));
            return i
        }

        function r(e) {
            var t = new m(s(pt.getQueryString()), !0);
            t.hashCode() ? 0 == pageState && B(t) : 0 != pageState ? lt.replace(lt.pathname + lt.search.replace(/([?&])isidx=[^&*]&?/, "$1")) : lt.search != lt.search.replace(/([?&])isidx=[^&*]&?/, "$1") && lt.replace(lt.pathname + lt.search.replace(/([?&])isidx=[^&*]&?/, "$1")), pt.onurlchange(t, e)
        }
        var a = "onhashchange" in window,
            c = "onpopstate" in window;
        window.__disable_popstate && (c = !1);
        var l = lt.pathname.length > 1 ? lt.pathname : "/s";
        (navigator.userAgent.match(/MSIE (6|7)/) || document.documentMode < 8) && (a = !1, c = !1), ot.disable_popstate && (c = !1), a || c || t();
        var u = function() {
            var t = "";
            return function(i, n) {
                n && (t = n.buildQueryString(), lt.hash = t), (i || t != e()) && (r(i), t = e())
            }
        }();
        pt.setUrl = function(e) {
            c ? p(!1, e) : a && u(!1, e)
        };
        var p = function() {
            var e = i();
            return function(t, n) {
                n && (e = n.buildQueryString(), window.history.pushState(n, "", n.buildSyncSearchUrl())), t || e != i() ? (r(t), e = i()) : d()
            }
        }();
        pt.getQueryString = function() {
            return c ? i() : /wd=/.test(e()) ? e() : i()
        }, pt.init = function() {
            c ? ! function() {
                var t = lt.href,
                    i = !1;
                $(window).on("swap_begin", function() {
                    i = !0
                }), $(window).bind("popstate", function() {
                    (i || !t || t != lt.href) && p(), t = null
                }), $(window).bind("hashchange", function() {
                    var t = e();
                    /wd=/.test(t) && lt.replace(l + "?" + t)
                })
            }() : a && ($(window).bind("hashchange", function() {
                u()
            }), $(function() {
                u()
            }));
            var t = e();
            /wd=/.test(t) && (c ? (window.history.replaceState(null, "", l + "?" + t), p()) : a ? u() : lt.replace(l + "?" + t))
        }, pt.support = function() {
            return (c || a) && 1 != Cookie.get("ISSW") && !window.__disable_preload
        }, pt.getLinkParams = function(t) {
            if (!c) {
                var o = e();
                return "" == o && (o = i()), n(o, t)
            }
            if ("https:" === lt.protocol || "1" === window._eclipse) {
                var r = i();
                return r || (r = e()), n(r, t)
            }
            return !1
        }, pt.clickResultLink = function(e, t, i) {
            return c ? (window.history.pushState(null, "", new m(i, !0).buildSyncSearchUrl()), p(), !1) : void e.attr("href", t.buildSearchUrl(i)).attr("target", "_self")
        }, pt.submit = function(e, t) {
            setTimeout(function() {
                c ? (window.history.pushState(e, "", e.buildSyncSearchUrl()), p(t)) : a ? (lt.href = e.buildSearchUrl(), u(t)) : lt.href = e.buildSyncSearchUrl()
            }, 0)
        }, window.changeUrl = function(e) {
            var t = new m(s(e));
            pt.submit(t, !0)
        }
    }(), pt.onurlchange = function(e, t) {
        h(nt, function(t) {
            t.setKey(e.p("wd")), t.hide()
        }), At = (new Date).getTime(), jt.val(e.p("wd")), S("");
        var i = !0;
        t && Jt && Jt.env && Jt.env.equals(e) && (i = !1), P({
            env: e,
            force: !0,
            use_cache: i,
            no_predict: !0
        })
    };
    var mt = ot.disable ? ot.disable : !1;
    window.__disable_preload && (mt = !0);
    var ft = mt,
        ht = !1;
    window.__disable_predict && (ht = !0);
    var gt = ht,
        bt = bds.comm.switchAddMask ? bds.comm.switchAddMask : !1;
    bt || (bt = window.__switch_add_mask ? window.__switch_add_mask : !1), bt = !0;
    var vt = (bds.comm.preloadMouseMoveDistance ? bds.comm.preloadMouseMoveDistance : 5, 300),
        wt = 50,
        _t = 80,
        yt = 0,
        xt = 0,
        kt = function() {},
        Tt = s(lt.search);
    pt.support() || (! function() {
        function e() {
            lt.hash && lt.hash.match(/[^a-zA-Z0-9](wd|word)=/) && lt.replace("//www.baidu.com/s?" + lt.href.match(/#(.*)$/)[1])
        }
        lt.hash.match(/[^a-zA-Z0-9](wd|word)=/) ? (lt.replace("//www.baidu.com/s?" + lt.href.match(/#(.*)$/)[1]), function() {
            throw new Error("redirect to sync")
        }()) : (document.getElementById("wrapper").style.display = "block", "onhashchange" in window ? window.onhashchange = e : setInterval(e, 200))
    }(), ft = mt = !0);
    for (var St = Cookie.get("BAIDUID", "nobdid").split(":")[0], $t = St.substr(0, 6) + St.substr(St.length - 5, 5) + parseInt(99999 * Math.random()); $t.length < 16;) $t += "0";
    $t = encodeURIComponent($t);
    var Ct, It, Dt, Lt, jt, Et;
    Dt = Lt = jt = $(ot.kw);
    var At, Ot, Rt, Pt, Mt, qt, Nt = $("#wrapper_wrapper"),
        Ut = [];
    window.__async_strategy, Ct = $(ot.index_form), "_blank" == Ct.attr("target") && (window.__disable_index_predict = !0, ft = mt = !0);
    var zt = Ct.serializeArray();
    It = $(ot.result_form);
    var Ht = (new Date).getTime();
    window.pageState = 0;
    var Bt, Ft, Wt, Gt, Qt, Vt = null,
        Jt = null,
        Xt = document.location.href,
        Kt = !1,
        Yt = "focus";
    ! function() {
        window.PDC_ASYNC = {
            setParam: function(e, t) {
                Jt && Jt.pdc && Jt.pdc.setParam(e, t)
            },
            setLinkData: function(t, i) {
                e[t] = i
            },
            sendLinkLog: function() {
                var t = "//www.baidu.com/nocache/fesplg/s.gif?log_type=linksp",
                    i = "";
                i += "&link_t=" + ((new Date).getTime() - e.click_t) + "&query=" + bds.comm.queryEnc + "&qid=" + bds.comm.queryId + "&linkpreload=" + e.linkpreload;
                var n = Math.random();
                if (.01 > n) {
                    var o = new Image,
                        r = "LINK_IMG_" + new Date;
                    window[r] = o, o.onload = function() {
                        delete window[r]
                    }, o.src = t + i
                }
            }
        };
        var e = (window.PDC_ASYNC.log = {}, {});
        window.bds && (bds.pdc = window.PDC_ASYNC)
    }();
    var Zt = function(e) {
        function t() {
            if (c = 1, i(), 1 == c) {
                var t = new Date,
                    o = !1,
                    r = function() {
                        var i = new Date,
                            l = i - t - e,
                            u = n();
                        0 > l && (l = 0), u || o || (s[a] = l, a = (a + 1) % 20), o = u, 1 == c && (t = i, d = setTimeout(r, e))
                    };
                d = setTimeout(r, e)
            }
        }

        function i() {
            window.clearTimeout(d)
        }

        function n() {
            var e = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return document.hidden;
            for (var t = 0; t < e.length; t++)
                if (e[t] + "Hidden" in document) return document[e[t] + "Hidden"];
            return !1
        }

        function o(e) {
            try {
                var t = 0,
                    i = Math.max.apply(null, e),
                    n = 10,
                    o = 60,
                    r = 4,
                    s = 40,
                    a = Cookie.get("ispeed_lsm"),
                    c = 0,
                    d = new Date,
                    l = 0;
                d.setTime(d.getTime() + 2592e6);
                for (var u = 0; u < e.length; u++) {
                    var p = e[u];
                    t += p
                }
                return t = Math.round(t / e.length), i > 1e3 || t > 150 ? (c = a ? parseInt(a) : 0, c >= s - n && s > c && (l = 1, Cookie.set("ispeed", 2, document.domain, "/", d)), o > c && (c = c + n > o ? o : c + n, Cookie.set("ispeed_lsm", c, document.domain, "/", d))) : (a && parseInt(a) > s && (r = 5), a && parseInt(a) >= r && (parseInt(a) <= s + r && parseInt(a) > s && (l = 2, Cookie.set("ispeed", 1, document.domain, "/", d)), c = parseInt(a) - r, Cookie.set("ispeed_lsm", c, document.domain, "/", d))), l
            } catch (m) {}
            return 0
        }

        function r() {
            return Cookie.get("ispeed") && 1 == UPS.get("isSwitch") && 2 == parseInt(Cookie.get("ispeed")) ? !0 : !1
        }
        var s = [],
            a = 0,
            c = 0,
            d = !1,
            e = e || 250;
        return {
            start: t,
            stop: function() {
                window.clearTimeout(d), c = 0
            },
            getData: function() {
                return s.slice(a).concat(s.slice(0, a))
            },
            isSlow: r,
            monitor: o
        }
    }();
    bds.comm.supportis && 1 == UPS.get("isSwitch") && Zt.start();
    var ei;
    if ("1" === nt) {
        var ti = $.ajax({
            dataType: "script",
            cache: !0,
            url: 1 === bds.comm.logFlagSug ? "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/sug/js/bdsug_async_sam_sug_efdbf72.js" : "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/sug/js/bdsug_async_5d4350a.js"
        });
        ti.done(function() {
            Bt = Ft = Wt = bds.se.sug({
                maxNum: 10,
                withoutRich: bds.comm.supportis,
                withoutZhixin: !0,
                form: It[0],
                ipt: jt[0],
                cbname: "bdsugresultcb",
                submission: R
            })
        })
    } else var ii = function() {
        var e = $.Deferred();
        return require(["@baidu/search-sug"], function(t) {
            Bt = Ft = Wt = t({
                bds: bds,
                maxNum: 10,
                withoutRich: bds.comm.supportis,
                withoutZhixin: !0,
                form: It[0],
                ipt: jt[0],
                cbname: "bdsugresultcb",
                submission: R
            }), e.resolve(Bt)
        }), e.promise()
    }();
    h(nt, w), bds.util.tempHideSug = function() {
        h(nt, function() {
            Wt.hide()
        })
    };
    var ni, oi, ri, si;
    ! function() {
        var e, t = -1,
            i = 0,
            n = -1,
            o = -1,
            s = -1,
            a = -1,
            c = 0;
        ni = function(t) {
            if (t) {
                s = t.pageX, a = t.pageY, e = t.target;
                var r = $(t.target);
                "submit" == r.attr("type") && (c = 1);
                var d = r.offset();
                n = s - d.left, o = a - d.top, i = (new Date).getTime()
            }
        }, oi = function(n) {
            n && n.target == e && (t = (new Date).getTime() - i)
        }, si = function(e) {
            bds && bds.comm && bds.comm.query && (e = bds.comm.query);
            var i = c + "." + t + "." + n + "." + o + "." + s + "." + a;
            return i = r(i + e) + "." + i
        }, ri = function() {
            t = -1, i = 0, n = -1, o = -1, s = -1, a = -1, c = 0
        }, $(window).on("confirm", function() {
            setTimeout(ri, 0)
        })
    }(), $(function() {
        $("#head").delegate(".index_tab_top>a,.index_tab_bottom>a,#u1>a,#u>a", "mousedown", function() {
            return $(this).attr("name") ? ns_c({
                fm: "behs",
                tab: $(this).attr("name"),
                query: "",
                un: encodeURIComponent(bds.comm.user || "")
            }) : void 0
        })
    }), $(document).delegate("a", "mousedown", function() {
        O(Jt, Kt, 22)()
    }), k({
        prefix: "http://www.baidu.com",
        regex: /^\/*(link)\?(.*)$/
    }), k({
        prefix: "//www.baidu.com",
        regex: /^\/*(link)\?(.*)$/
    }), k({
        prefix: "http://www.baidu.com",
        convertTable: {
            "aladdin.php": "aladdin.php",
            "siva.php": "siva.php",
            "adrc.php": "adrc.php",
            "zhixin.php": "zhixin.php"
        },
        regex: /^\/*(aladdin\.php|siva\.php|adrc\.php|zhixin\.php)\?(.*)$/
    }), "www.baidu.com" != lt.host && k({
        prefix: "",
        convertTable: {
            "aladdin.php": "aladdin.php",
            "siva.php": "siva.php",
            "adrc.php": "adrc.php",
            "zhixin.php": "zhixin.php"
        },
        regex: /^\/*(aladdin\.php|siva\.php|adrc\.php|zhixin\.php)\?(.*)$/
    }), k({
        prefix: "http://bzclk.baidu.com",
        regex: /^\/*(adrc\.php)\?(.*)$/
    }), k({
        prefix: "https://sp0.baidu.com/9q9JcDHa2gU2pMbgoY3K",
        regex: /^\/*(adrc\.php)\?(.*)$/
    }), "https:" == lt.protocol && bds.comm.ishome && !/Chrome/.test(navigator.userAgent) && $(document).delegate("a", "mousedown", function() {
        var e = $(this),
            t = e.attr("href"),
            i = {
                "http://v.baidu.com": "/?fr=bd"
            };
        i && i.hasOwnProperty(t) && e.attr("href", t + i[t])
    }), $(document).delegate("a", "mousedown", function() {
        var e = $(this),
            t = e.attr("href"),
            i = new Image,
            n = "//www.baidu.com/nocache/fesplg/s.gif?log_type=hm",
            o = Math.random();
        if (.01 > o && !/www\.baidu\.com\//.test(t) && /^http/.test(t)) {
            var r = n + "&c_url=" + encodeURIComponent(t),
                i = new Image,
                s = "_LOG_" + (new Date).getTime();
            i.onload = function() {
                delete window[s]
            }, window[s] = i, i.src = r
        }
    }), pt.support() && $(document).delegate("a", "click", function() {
        var e = lt.protocol + "//" + lt.host;
        return function() {
            var t = $(this);
            if (!(t.attr("target") && "_self" != t.attr("target") || t.attr("sync") && "true" == t.attr("sync"))) {
                var i = $.trim(t.attr("href"));
                if (i && 0 == i.indexOf(e) && (i = i.substring(e.length)), i && (matched = i.match(/^\/*s\?(.*)/)), i && matched) {
                    var n = s(matched[0]);
                    if (n.pn || (n.pn = ""), l(["baidurt", "baiduwb", "baidufir", "SE_baiduxueshu_c1gjeupa"], n.tn) < 0) {
                        var o = t.parents("#con-at");
                        o.size() > 0 && a({
                            top: o.offset().top + o.height()
                        });
                        var r = pt.clickResultLink(t, Vt, n)
                    }
                    return r
                }
            }
        }
    }()), $(document).delegate("a", "mousedown", function(e) {
        ni(e)
    }), $(document).delegate("a", "mouseup", function(e) {
        oi(e)
    }), $(document).delegate("#su,#su1", "mouseup", function(e) {
        oi(e)
    }), $(document).delegate("#su,#su1", "mousedown", function(e) {
        ni(e)
    }), ! function() {
        var e;
        window._bdlkc >= 1 && ($(document).delegate(".c-container", "mouseenter", function() {
            return function() {
                var t = $(this),
                    i = 300;
                2 == window._bdlkc && (i = 100), e = setTimeout(function() {
                    var e = t.find(".t>a"),
                        i = T(e, {
                            prefix: "http://www.baidu.com",
                            regex: /^\/*(link)\?(.*)$/
                        }),
                        n = t.attr("mu") || t.find(".f13 .g").text(),
                        o = /^(http[s]?:\/\/)?([^\/]+)(.*)/,
                        r = n.match(o);
                    i && i.match(lt.protocol) && /www\.baidu\.com\/link/.test(i) && !/bdlkc=1/.test(i) && (r[2] && (n = "http://" + r[2], t.append('<link rel="dns-prefetch" href="' + n + '" />')), $.ajax({
                        url: i + "&bdlkc=1",
                        type: "GET",
                        contentType: "text/html",
                        success: function() {
                            e.attr("linkpreload", "1")
                        }
                    }), e.attr("href", i + "&bdlkc=1"))
                }, 300)
            }
        }()), $(document).delegate(".c-container", "mouseleave", function() {
            return function() {
                clearTimeout(e)
            }
        }()))
    }();
    var ai = $("body");
    document.title, ! function(e) {
        var t;
        e.fn.textWidth = function() {
            t || (t = e('<div data-for="result" style="clear:both;display:block;visibility:hidden;position:absolute;top:0;"><span style="width;inherit;margin:0;font:16px/22px arial;"></span></div>').appendTo("body").find("span")), t.html(escapeHTML(e(this).val()));
            var i = t.width();
            return i
        }
    }(jQuery);
    var ci = !1;
    $(window).on("swap_dom_ready", function(e, t) {
        var i = "";
        !t || !t.real_wd || t.no_predict && 6 != t.pstg || (i = t.real_wd), S(i), D(t)
    }), $(window).on("swap_end", function(e, t) {
        t && (window.cfpromise = new $.Deferred, Mt && (clearTimeout(Mt), Mt = !1, qt = null), t.confirm = !1, t.force ? O(t, Kt, 20)() : (qt = O(t, Kt, 21), Mt = setTimeout(qt, at)))
    }), $(window).on("indexOff", function(e, t) {
        h(nt, function() {
            S(t.p("wd"))
        })
    }), pt.support() && "_blank" != Ct.attr("target") && h(nt, function(e) {
        e.setMaxNum(ct)
    });
    var di, li = !1,
        ui = !1;
    It.mousedown(function() {
        ui = !1
    }).delegate("a,input", "focus", function() {
        ui = !1
    });
    var pi, mi, fi;
    $(window).on("swap_end", function(e, t) {
        t || (bds.comm.confirmQuery = bds.comm.query, bds.comm.confirmQid = bds.comm.qid, y()), fi = setTimeout(function() {
            0 == $("#content_left,.result,.content_none").length && i(15, 86400)
        }, 1e4)
    }), pt.init(), $(function() {
        var e = $("script").last(),
            t = $("head");
        kt = function() {
            e.nextAll().not("[data-for]").not("#passport-login-pop").remove(), t.find("*").not("[data-for]").not("meta").not("title").not("script[async]").not('link[href*="passport"]').not('link[rel*="icon"]').not('link[rel*="shortcut icon"]').remove()
        }
    }), bds.comm.resultPage && H(), Nt.delegate("#page strong+a,#page a.n", "mouseover", function() {
        P({
            env: new m(s($(this).attr("href"))),
            force: !1,
            use_cache: !0,
            no_predict: !0,
            shouldShow: !1,
            pstg: 4
        })
    });
    var hi, gi, bi, vi, wi;
    h(nt, function() {
        $(document).mousemove(W)
    }), $("#u .back_org").click(function() {
        var e = new Date;
        e.setTime((new Date).getTime() + 110376e7), Cookie.set("ORIGIN", 2, document.domain, "/", e), Vt ? lt.replace(Vt.buildSyncSearchUrl({
            _r: Math.random()
        })) : lt.href = "/"
    }), jt.bind("paste", function() {
        if (!(window.__disable_index_predict && 0 == pageState || mt || ht)) {
            var e = this,
                t = this.value;
            Qt = !0, setTimeout(function() {
                e.value && e.value != t && P({
                    env: (new m).clone({
                        wd: $.trim(e.value)
                    }),
                    force: !1,
                    use_cache: !0,
                    no_predict: !0,
                    shouldShow: bds.comm.supportis,
                    pstg: 2
                })
            }, 0)
        }
    })
}

function addEV(e, t, i) {
    window.attachEvent ? e.attachEvent("on" + t, i) : window.addEventListener && e.addEventListener(t, i, !1)
}

function user_c(e) {
    var t = "",
        i = "",
        n = "",
        o = "",
        r = encodeURIComponent(window.document.location.href),
        s = window["BD_PS_C" + (new Date).getTime()] = new Image,
        a = bds && bds.util && bds.util.domain ? bds.util.domain.get("http://nsclick.baidu.com") : "http://nsclick.baidu.com";
    for (v in e) {
        switch (v) {
            case "title":
                n = encodeURIComponent(e[v].replace(/<[^<>]+>/g, ""));
                break;
            case "url":
                n = encodeURIComponent(e[v]);
                break;
            default:
                n = e[v]
        }
        t += v + "=" + n + "&"
    }
    return o = "&mu=" + r, s.src = a + "/v.gif?pid=201&pj=psuser&" + t + "path=" + r + "&wd=" + i + "&t=" + (new Date).getTime(), !0
}

function initPassV3() {
    var e = bds.comm.passnew ? 3 : 2,
        t = bds.comm.ishome ? -1 : 5;
    bds.se.passv3 = passport.pop.init({
        apiOpt: {
            loginType: 1,
            product: "mn",
            u: window.document.location.href,
            safeFlag: 0,
            qrcode: e,
            staticPage: location.protocol + "//www.baidu.com/cache/user/html/v3Jump.html",
            sms: t
        },
        cache: !1,
        tangram: !0,
        authsite: ["qzone", "tsina", "weixin"],
        authsiteCfg: {
            act: "implicit",
            display: "popup",
            jumpUrl: location.protocol + "//www.baidu.com/cache/user/html/xd.html",
            onBindSuccess: function(e, t) {
                var i = decodeURIComponent(t.passport_uname || t.displayname);
                return bds.se.login.success(i), !1
            }
        },
        onLoginSuccess: function(e) {
            e.returnValue = !1;
            var t = e.rsp.data.userName || e.rsp.data.mail || e.rsp.data.phoneNumber;
            bds.se.login.success(t)
        },
        onSubmitStart: function() {},
        onSubmitedErr: function() {},
        onSystemErr: function() {},
        onShow: function() {},
        onHide: function() {
            bds.se.login.setSubpro(""), bds.se.login.setMakeText("")
        },
        onDestroy: function() {}
    })
}

function isp_hijack(e) {
    var t, i, n, o = document.getElementById("wrapper"),
        r = !1;
    bds.comm.query || (r = !0), 1 == e.stat && (t = document.createElement("div"), t.innerHTML = '<div style="zoom:1;_margin-left:1024px;"><div style="position:relative;_float:left;_margin-left:-1024px;"><div style="width:100%;min-width:1024px;"><div style="border:2px solid #fd9162;zoom:1;overflow:hidden;padding:0 0 6px 12px;"><div style="position:relative;width:100%;*overflow:auto;padding-top:10px;"><div style="height:18px;margin-bottom:6px;"><i class="c-icon" style="width:18px;height:18px;background-position:-168px -72px;"></i><strong style="display:inline-block;margin-left:8px;font-size:14px;color:#666;">百度提示您：</strong></div><span style="display:block;color:#333;text-indent:26px;font-size:13px;">我们发现当前您可能受到异常广告弹窗的影响，通常这是受第三方恶意劫持导致。使用 <a href="http://shadu.baidu.com/landingpage/competing.html?from=10064" target="_blank" style="color:#0000D0;text-decoration:underline">防恶意广告专版杀毒软件</a>，可有效改善您的上网体验，免受恶意广告的困扰。</span><a id="isp-close-btn" style="display:inline-block;width:9px;height:9px;position:absolute;top:6px;right:6px;background:url(https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/wsCloseBtn2_0047ae2.png) no-repeat;" href="javascript:void(0);"></a></div></div></div></div></div>', r ? o.insertBefore(t, o.children[0]) : (o.style.position = "relative", document.getElementById("u").style.top = 0, t.style.margin = "-6px 0 8px 0", document.body.insertBefore(t, o)), i = document.getElementById("isp-close-btn"), n = i.parentNode.getElementsByTagName("a")[0], i.onclick = function() {
        r ? o.removeChild(t) : (document.body.removeChild(t), o.style.position = "", document.getElementById("u").style.top = "4px")
    }, i.onmousedown = function() {
        ns_c({
            fm: "behs",
            tab: "tj_notice",
            cont: "jcbro",
            action: "close",
            area: "topbar"
        })
    }, n.onmousedown = function() {
        ns_c({
            fm: "behs",
            tab: "tj_notice",
            cont: "jcbro",
            action: "click",
            area: "topbar"
        })
    }, ns_c({
        fm: "behs",
        tab: "tj_notice",
        cont: "jcbro",
        action: "show",
        area: "topbar"
    }))
}

function isbase64(e) {
    function t() {
        m = {
            left: $.Deferred(),
            right: $.Deferred()
        }
    }

    function i(e, t) {
        g++;
        var e = e || [],
            t = t || [];
        if (e = $.grep(e, function(e) {
                return f.right.hasOwnProperty(e) ? !1 : (f.right[e] = !1, !0)
            }), t = $.grep(t, function(e) {
                return f.left.hasOwnProperty(e) ? !1 : (f.left[e] = !1, !0)
            }), 2 == c.b64Exp && t.length > 0 && (h = !0, r(t, "left", "reql")), e.length > 0)
            if (e.length > 12) {
                var i = Math.round(e.length / 2),
                    n = [],
                    o = [];
                $.each(e, function(e, t) {
                    i > e ? n.push(t) : o.push(t)
                }), r(n, "right", "reqr2"), r(o, "right", "reqr1")
            } else r(e, "right", "reqr")
    }

    function n(e) {
        for (var t = e, i = 0; __callback_names.hasOwnProperty(e) || window[e];) e = t + "_" + i, i++;
        return __callback_names[e] = 1, e
    }

    function o(e) {
        if ("string" == typeof e) {
            var t, i = 0,
                n = 0;
            for (t = 0; t < e.length; t++) n = t % 20 + 1, i += e.charCodeAt(t) << n;
            return Math.abs(i)
        }
        return 0
    }

    function r(e, t, i) {
        var r = l + "image?imglist=" + e.join(","),
            s = o(e.join(""));
        s = "cb_" + (s + "").substr(Math.max(0, s.length - 8), 8) + "_" + v.length, s = n(s), r += "&cb=" + s;
        var a = 1 * new Date,
            c = $.ajax({
                url: r,
                cache: !0,
                dataType: "jsonp",
                jsonp: !1,
                timeout: 1500,
                jsonpCallback: s,
                success: function(e) {
                    u[i] = 1 * new Date - a, "right" == t ? C(e) : "left" == t && I(e)
                }
            });
        c.always(function() {
            delete __callback_names[s]
        }), v.push(c)
    }

    function s() {
        var e = v.concat(m.left, m.right),
            t = b = $.when.apply($, e);
        b.always(function() {
            +new Date, t === b && (2 == c.b64Exp && _("left"), _("right"))
        })
    }

    function a(e, t) {
        try {
            e.onerror = function() {
                S(this)
            }, p.push({
                obj: e,
                loaded: !1
            }), e.onload = function() {
                for (var e = 0; e < p.length; e++) {
                    var t = p[e];
                    t.obj == this && (t.loaded = !0)
                }
            }, e.src = "data:image/jpeg;base64," + t
        } catch (i) {
            S(e)
        }
    }
    var c;
    bds && bds._base64 ? c = bds._base64 : (c = {
        domain: bds.util.domain && bds.util.domain.get ? bds.util.domain.get("http://b1.bdstatic.com/") : "http://b1.bdstatic.com/",
        b64Exp: -1,
        pdc: !1,
        sep: 16
    }, bds._base64 = c);
    var d = {
            left: "content_left",
            right: "container"
        },
        l = c.domain,
        u = {},
        p = [],
        m = {
            left: $.Deferred(),
            right: $.Deferred()
        },
        f = {
            left: {},
            right: {}
        },
        h = !1,
        g = 0,
        b = null;
    c.inline = !1;
    var v = [];
    e.onSendlog(function() {
        var t = [];
        u && $.each(u, function(e, i) {
            t.push(e + "_" + i)
        }), e.setParam("cus_cusval", t.join("|")), E.isinline() && (e.setParam("cus_b64il", E.ilsum), E.ilparseTime && e.setParam("cus_b64ilpt", E.ilparseTime), E.ilrenderTime && e.setParam("cus_b64ilrt", E.ilrenderTime))
    });
    var w = function(e, t, i, n) {
            if (n = n ? $(n).find("#" + d[t])[0] : document.getElementById(d[t]))
                for (var o = n.getElementsByTagName("IMG"), r = 0; r < o.length; r++) {
                    var s = o[r].getAttribute(i);
                    s && (e.hasOwnProperty(s) && e[s] ? a(o[r], e[s]) : S(o[r]))
                }
        },
        _ = function(e) {
            w(f[e], e, "data-b64-id")
        },
        y = !1,
        x = !1,
        k = function(e, t) {
            y || w(e, "right", "data-b64il-id", t), t && (y = !0), x = !0
        },
        T = 0,
        S = function(t) {
            (t.getAttribute("data-b64-id") || t.getAttribute("data-b64il-id")) && null != t.getAttribute("data-src") && (t.src = t.getAttribute("data-src"), e.setParam("cus_b64fails", ++T))
        },
        C = function(e) {
            D(e, "right")
        },
        I = function(e) {
            D(e, "left")
        },
        D = function(e, t) {
            for (var i in e) e.hasOwnProperty(i) && (f[t][i] = e[i])
        },
        L = function(e) {
            m[e].resolve()
        },
        j = function() {
            f = null, p = null, m = null, $.each(v, function() {
                this.abort()
            })
        },
        E = {
            loadImg: i,
            setDomLoad: L,
            end: s,
            isinline: function() {
                return x
            },
            restart: t,
            destroy: j,
            reqT: u,
            inline: k
        };
    return E
}

function formatDate(e, t) {
    var i = function(e) {
        return e > 9 ? e : "0" + e
    };
    return ("number" == typeof e || "string" == typeof e) && (e = new Date(e)), [e.getFullYear(), i(e.getMonth() + 1), i(e.getDate())].join(t || "")
}

function baseChangeUrl(e) {
    bds.comm.search_tool.st && bds.comm.search_tool.et && bds.comm.search_tool.stftype && e.indexOf("&gpc=") < 0 && (e += "&gpc=" + encodeURIComponent("stf=" + bds.comm.search_tool.st + "," + bds.comm.search_tool.et + "|stftype=" + bds.comm.search_tool.stftype)), bds.comm.search_tool.si && e.indexOf("&si=") < 0 && (e += "&si=" + encodeURIComponent(bds.comm.search_tool.si) + "&ct=2097152"), bds.comm.search_tool.sl_lang && e.indexOf("&sl_lang=") < 0 && (e += "&rsv_srlang=" + encodeURIComponent(bds.comm.search_tool.sl_lang), e += "&sl_lang=" + encodeURIComponent(bds.comm.search_tool.sl_lang), e += "&rsv_rq=" + encodeURIComponent(bds.comm.search_tool.sl_lang)), changeUrl(e)
}

function langChangeUrl(e, t, i) {
    ns_c({
        fm: "advTool",
        qid: bds.comm.qid,
        title: encodeURI(i),
        rsv_advTool_lang: t
    }), baseChangeUrl("wd=" + encodeURIComponent($("#kw").val()) + "&" + e + "=" + encodeURIComponent(t) + "&rsv_srlang=" + encodeURIComponent(t) + "&rsv_rq=" + encodeURIComponent(t))
}

function advChangeUrl(e, t, i, n) {
    if (-1 != t.indexOf("=")) var o = 1;
    else var o = 0;
    ns_c({
        fm: "advTool",
        qid: bds.comm.qid,
        title: encodeURI(i),
        rsv_advTool_time: n,
        rsv_advTool_stet: t.substr(4).replace(",", "_")
    }), baseChangeUrl("wd=" + encodeURIComponent($("#kw").val()) + "&" + e + "=" + encodeURIComponent(t) + "&tfflag=" + o)
}

function fileChangeUrl(e, t, i) {
    ns_c({
        fm: "advTool",
        qid: bds.comm.qid,
        title: encodeURI(t),
        rsv_advTool_ft: i
    }), baseChangeUrl("wd=" + encodeURIComponent(queryReplace("filetype", e)))
}

function queryReplace(e, t) {
    if (!e || "filetype" != e && "site" != e) return n;
    var i = new RegExp("(" + e + "):[^\\s]*[ ]?"),
        n = $("#kw").val();
    return " " == t || null == t ? n.replace(i, "") : n.match(i) ? n.replace(i, "$1:" + t + " ") : e + ":" + t + " " + n
}

function extChangeUrl(e) {
    e ? (ns_c({
        fm: "advTool",
        qid: bds.comm.qid,
        title: encodeURI("精确匹配"),
        rsv_advTool_ext: 1
    }), baseChangeUrl('wd="' + encodeURIComponent($("#kw").val()) + '"')) : (ns_c({
        fm: "advTool",
        qid: bds.comm.qid,
        title: encodeURI("智能匹配"),
        rsv_advTool_ext: 0
    }), baseChangeUrl("wd=" + encodeURIComponent($("#kw").val().replace(/^\"(.*)\"$/, "$1"))))
}! function() {
    function getUA() {
        var e, t = {},
            i = navigator.userAgent.toLowerCase();
        return t.mac = navigator.platform.toUpperCase().indexOf("MAC") >= 0, (e = i.match(/rv:([\d.]+)\) like gecko/)) ? t.ie = e[1] : (e = i.match(/(msie\s|trident.*rv:)([\w.]+)/)) ? t.ie = e[2] : (e = i.match(/firefox\/([\d.]+)/)) ? t.firefox = e[1] : (e = i.match(/chrome\/([\d.]+)/)) ? t.chrome = e[1] : (e = i.match(/opera.([\d.]+)/)) ? t.opera = e[1] : (e = i.match(/version\/([\d.]+).*safari/)) ? t.safari = e[1] : 0, t
    }

    function getDefaultQueryHis() {
        try {
            return JSON.parse(localStorage.getItem("index_ls_default_query"))
        } catch (e) {
            return {}
        }
    }

    function detectPlaceholder(e) {
        var t = "[object OperaMini]" === Object.prototype.toString.call(window.operamini);
        return e.ie ? !1 : "placeholder" in document.createElement("input") && !t
    }

    function createPlaceHolder(e, t, i) {
        if (t) e.attr("placeholder", i);
        else {
            var n = "<div class=kw-placeholder>" + i + "</div>";
            e.before(n), $(".kw-placeholder").on("click", function(t) {
                e.focus(), t.target = e.get(0), e.trigger(t)
            }), $(document).ready(function() {
                $(".kw-placeholder").toggleClass("placeholders-hidden", e.val().length > 0)
            }), e.on("keydown keyup cut paste setValue input", checkInputValue)
        }
    }

    function checkInputValue() {
        var e = $input.val();
        setTimeout(function() {
            var t = $input.val();
            (t !== e || t.length > 0) && $(".kw-placeholder").toggleClass("placeholders-hidden", t.length > 0)
        }, 0)
    }

    function removePlaceHolder(e, t) {
        t ? e.removeAttr("placeholder") : $(".kw-placeholder").remove()
    }

    function testLocalStorage() {
        var e = "test";
        try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0
        } catch (t) {
            return !1
        }
    }

    function getShowCount(e, t) {
        var i = 0;
        return t && t.query && t.query === e && t.count && (i = t.count), i
    }

    function recordDefaultQuery(e, t) {
        var i = {
            query: e,
            time: (new Date).getTime(),
            count: 1
        };
        t && t.query && e === t.query && t.count && (i.count = t.count + 1), setTimeout(function() {
            try {
                localStorage.removeItem("index_ls_default_query"), localStorage.setItem("index_ls_default_query", JSON.stringify(i))
            } catch (e) {
                return !1
            }
        }, 0)
    }

    function jsonPolyfill() {
        var json = {
            parse: function(sJSON) {
                return eval("(" + sJSON + ")")
            },
            stringify: function() {
                var e = Object.prototype.toString,
                    t = Object.prototype.hasOwnProperty,
                    i = Array.isArray || function(t) {
                        return "[object Array]" === e.call(t)
                    },
                    n = {
                        '"': '\\"',
                        "\\": "\\\\",
                        "\b": "\\b",
                        "\f": "\\f",
                        "\n": "\\n",
                        "\r": "\\r",
                        "	": "\\t"
                    },
                    o = function(e) {
                        return n[e] || "\\u" + (e.charCodeAt(0) + 65536).toString(16).substr(1)
                    },
                    r = /[\\"\u0000-\u001F\u2028\u2029]/g;
                return function s(n) {
                    if (null == n) return "null";
                    if ("number" == typeof n) return isFinite(n) ? n.toString() : "null";
                    if ("boolean" == typeof n) return n.toString();
                    if ("object" == typeof n) {
                        if ("function" == typeof n.toJSON) return s(n.toJSON());
                        if (i(n)) {
                            for (var a = "[", c = 0; c < n.length; c++) a += (c ? ", " : "") + s(n[c]);
                            return a + "]"
                        }
                        if ("[object Object]" === e.call(n)) {
                            var d = [];
                            for (var l in n) t.call(n, l) && d.push(s(l) + ": " + s(n[l]));
                            return "{" + d.join(", ") + "}"
                        }
                    }
                    return '"' + n.toString().replace(r, o) + '"'
                }
            }()
        };
        return json
    }
    var defaultQuery = window.bds && bds.comm && bds.comm.dpquery;
    window.JSON || (window.JSON = jsonPolyfill());
    var isSupportLocalStorage = testLocalStorage(),
        defaultQueryHis = isSupportLocalStorage ? getDefaultQueryHis() : {},
        $input = $("#kw");
    if (getShowCount(defaultQuery, defaultQueryHis) > 9 && (defaultQuery = ""), defaultQuery) {
        var UA = getUA(),
            isPlaceHolderSupported = detectPlaceholder(UA);
        createPlaceHolder($input, isPlaceHolderSupported, defaultQuery, UA), isSupportLocalStorage && recordDefaultQuery(defaultQuery, defaultQueryHis), $(window).one("index_off", function() {
            removePlaceHolder($input, isPlaceHolderSupported), bds.comm.dpquery = ""
        })
    }
}();
var bds = window.bds || {},
    domain = "";
domain = bds.comm.staticUrl ? bds.comm.staticUrl : "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https", bds.amd = {
        keys: {},
        addPaths: function(e) {
            "object" == typeof e && (require.config({
                paths: e
            }), $.extend(bds.amd.keys, e))
        },
        deletePath: function(e) {
            var t = "string" == typeof e ? [e] : e;
            for (var i in t) t.hasOwnProperty(i) && delete bds.amd.keys[i]
        },
        addConfig: function(e) {
            if ("object" == typeof e) {
                require.config(e);
                for (var t in e)
                    if (e.hasOwnProperty(t)) {
                        bds.amd[t] || (bds.amd[t] = {});
                        for (var i in e[t]) e[t].hasOwnProperty(i) && e[t][i] && (bds.amd[t][i] = e[t][i])
                    }
            }
        },
        getPath: function(e) {
            return e && "string" == typeof e ? bds.amd.keys[e] || bds.amd.paths[e] || "" : void 0
        },
        getBundle: function(e) {
            if (e && "string" == typeof e) {
                var t = bds.amd.bundles,
                    i = "",
                    n = "";
                if (t && "object" == typeof t)
                    for (var o in t)
                        if (t.hasOwnProperty(o) && t[o].indexOf(e) > -1) {
                            i = o, n = bds.amd.getPath(o);
                            break
                        } return {
                    name: i,
                    path: n
                }
            }
        },
        exist: function(e) {
            return e && "undefined" != typeof bds.amd.keys[e] ? !0 : !1
        }
    },
    function() {
        var e = bds.util && bds.util.domain ? bds.util.domain.get("http://s1.bdstatic.com") : "http://s1.bdstatic.com",
            t = bds.util && bds.util.domain ? bds.util.domain.get("http://ecmb.bdimg.com") : "http://ecmb.bdimg.com";
        require.config({
            baseUrl: e + "/r/www/cache/biz",
            packages: [{
                name: "ecma",
                location: t + "/public01"
            }, {
                name: "ecmb",
                location: t + "/public01"
            }],
            paths: {
                aladdin: e + "/r/www/aladdin",
                ui: e + "/r/www/cache/amd/ui",
                "ui/config": e + "/r/www/cache/amd/ui/Control",
                "ui/lib": e + "/r/www/cache/amd/ui/Control",
                "ui/Control": e + "/r/www/cache/amd/ui/Control"
            },
            urlArgs: {
                "ui/ImgZoomHover": "20141104",
                "ui/ImgZoomHover1": "20141104",
                "ui/ImgZoomHover2": "20141104",
                "ui/ImgZoomHover3": "20141104"
            }
        })
    }(), bds.amd.addConfig({
        bundles: {
            "@baidu/ala-util": ["@baidu/ala-util", "@baidu/ala-util/env", "@baidu/ala-util/es6-promise", "@baidu/ala-util/fetch-jsonp", "@baidu/ala-util/fetch", "@baidu/ala-util/index", "@baidu/ala-util/lodash", "@baidu/ala-util/ala", "@baidu/ala-util/update"]
        }
    }), bds.amd.addPaths({
        Atom: domain + "/bundles/atom_aa06f6b",
        "voice/js/voice": domain + "/voice/js/voice_c0f9ab2",
        "voice/js/newVoice": domain + "/voice/js/newVoice_/static/voice/js/newVoice.js",
        "plugins/swfobject": domain + "/plugins/swfobject_0178953",
        "soutu/js/tu": domain + "/soutu/js/tu_68114f1",
        "lib/get_ua": domain + "/lib/get_ua_5600c75",
        "lib/get_zoom": domain + "/lib/get_zoom_40318e9",
        "plugins/bzPopper": domain + "/plugins/bzPopper_7bc4f0e",
        "plugins/zoom_prompt": domain + "/plugins/zoom_prompt_d72a9cd",
        "plugins/pcToWise": domain + "/plugins/pcToWise_946ec60",
        "plugins/qrcodegen": domain + "/plugins/qrcodegen_3297c28",
        "plugins/https_useable_sample": domain + "/plugins/https_useable_sample_8f5c5a9",
        "plugins/feedback_suggest": domain + "/plugins/feedback_suggest_f73e42e",
        "plugins/compatible_ipad_input": domain + "/plugins/compatible_ipad_input_6f6bbc9",
        "webb/instance": domain + "/webb/instance_5d88cac",
        "atom-logger": domain + "/webb/atom-logger_098581c"
    }), bds.amd.addPaths({
        "@baidu/ala-util": domain + "/amd_modules/@baidu/ala-util_b8e7a51",
        "@baidu/atom-web-runtime": domain + "/amd_modules/@baidu/atom-web-runtime_f8cc03e",
        "@baidu/better-scroll": domain + "/amd_modules/@baidu/better-scroll_3ca1fd1",
        "@baidu/pc-grid": domain + "/amd_modules/@baidu/pc-grid_cfa8648",
        "@baidu/pmd": domain + "/amd_modules/@baidu/pmd_9fac2fd",
        "@baidu/search-sug": domain + "/amd_modules/@baidu/search-sug_54d848a",
        "@baidu/web-animations-js": domain + "/amd_modules/@baidu/web-animations-js_6166288",
        "@baidu/webb": domain + "/amd_modules/@baidu/webb_f69c914",
        "@baidu/xbox-comment-pc": domain + "/amd_modules/@baidu/xbox-comment-pc_02cac08",
        "@baidu/xbox-dynamic-publisher": domain + "/amd_modules/@baidu/xbox-dynamic-publisher_987824f",
        "@searchfe/assert": domain + "/amd_modules/@searchfe/assert_8f1a1ad",
        "@searchfe/inject-js": domain + "/amd_modules/@searchfe/inject-js_f2337f8",
        "@searchfe/promise": domain + "/amd_modules/@searchfe/promise_33d6467",
        "@searchfe/reflect-metadata": domain + "/amd_modules/@searchfe/reflect-metadata_008bee6",
        "@searchfe/user-agent": domain + "/amd_modules/@searchfe/user-agent_165a7ee",
        "promise-polyfill": domain + "/amd_modules/promise-polyfill_eb6da34",
        san: domain + "/amd_modules/san_669c47f",
        tslib: domain + "/amd_modules_lib.js58c3c7f",
        "versions-compare": domain + "/amd_modules/versions-compare_a4b1c27",
        "whatwg-fetch": domain + "/amd_modules/whatwg-fetch_435bd8d"
    }), bds.amd.addPaths({
        san: domain + "/amd_modules/san/dist/san_8828ec3",
        "@baidu/ala-util": domain + "/bundles/ala-util_e489543",
        "@baidu/webb": domain + "/amd_modules/@baidu/webb/webb2.min_62df7c4",
        "@baidu/module-version": domain + "/amd_modules/@baidu/module-version/index_/static/amd_modules/@baidu/module-version/index.js"
    }), bds.amd.addPaths({
        "@baidu/ala-util/env": domain + "/amd_modules/@baidu/ala-util/env_c8c79df",
        "@baidu/ala-util/es6-promise": domain + "/amd_modules/@baidu/ala-util/es6-promise_5db0418",
        "@baidu/ala-util/fetch": domain + "/amd_modules/@baidu/ala-util/fetch_b79917d",
        "@baidu/ala-util/fetch-jsonp": domain + "/amd_modules/@baidu/ala-util/fetch-jsonp_2e624b8",
        "@baidu/ala-util/index": domain + "/amd_modules/@baidu/ala-util/index_6acb491",
        "@baidu/ala-util/lodash": domain + "/amd_modules/@baidu/ala-util/lodash_e153b58",
        "@baidu/atom-web-runtime/dist/atom.min": domain + "/amd_modules/@baidu/atom-web-runtime/dist/atom.min_960c107",
        "@baidu/better-scroll/better-scroll": domain + "/amd_modules/@baidu/better-scroll/better-scroll_f35e74a",
        "@baidu/pmd/dist/pmd": domain + "/amd_modules/@baidu/pmd/dist/pmd_abc3d9e",
        "@baidu/search-sug/sug/index": domain + "/amd_modules/@baidu/search-sug/sug/index_d2277a5",
        "@baidu/web-animations-js/web-animations.min": domain + "/amd_modules/@baidu/web-animations-js/web-animations.min_5987b41",
        "@baidu/webb/webb2.min": domain + "/amd_modules/@baidu/webb/webb2.min_62df7c4",
        "@searchfe/assert/index": domain + "/amd_modules/@searchfe/assert/index_93ef523",
        "@searchfe/promise/src/promise": domain + "/amd_modules/@searchfe/promise/src/promise_c5de809",
        "@searchfe/promise/src/set-immediate": domain + "/amd_modules/@searchfe/promise/src/set-immediate_099c916",
        "@searchfe/user-agent/src/index": domain + "/amd_modules/@searchfe/user-agent/src/index_107eeda",
        "promise-polyfill": domain + "/amd_modules/promise-polyfill/dist/promise_df3edea",
        "versions-compare/src/index": domain + "/amd_modules/versions-compare/src/index_bf82f5e",
        "versions-compare/src/util": domain + "/amd_modules/versions-compare/src/util_294470f"
    }), bds && bds.comm && (bds.comm.did = function() {
        for (var e = "", t = 0; 32 > t; t++) e += Math.floor(16 * Math.random()).toString(16);
        return e
    }(), bds.comm.isAsync = function() {
        var e = "onhashchange" in window,
            t = "onpopstate" in window;
        return (t || e) && 1 != Cookie.get("ISSW") && !window.__disable_preload
    }());
try {
    window.MutationObserver = window.WebKitMutationObserver = window.MozMutationObserver = null
} catch (e) {}
jQuery && jQuery.extend({
        stringify: function(e) {
            function t(e) {
                return /["\\\x00-\x1f]/.test(e) && (e = e.replace(/["\\\x00-\x1f]/g, function(e) {
                    var t = o[e];
                    return t ? t : (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16))
                })), '"' + e + '"'
            }

            function i(e) {
                var t, i, n, o = ["["],
                    r = e.length;
                for (i = 0; r > i; i++) switch (n = e[i], typeof n) {
                    case "undefined":
                    case "function":
                    case "unknown":
                        break;
                    default:
                        t && o.push(","), o.push($.stringify(n)), t = 1
                }
                return o.push("]"), o.join("")
            }
            if ("JSON" in window) return JSON.stringify(e);
            var n = typeof e;
            if ("object" != n || null === e) return "string" == n && (e = '"' + e + '"'), String(e);
            var o = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            };
            switch (typeof e) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(e) ? String(e) : "null";
                case "string":
                    return t(e);
                case "boolean":
                    return String(e);
                default:
                    if (null === e) return "null";
                    if ("[object Array]" === Object.prototype.toString.call(e)) return i(e);
                    var r, s, a = ["{"],
                        c = $.stringify;
                    for (var d in e)
                        if (Object.prototype.hasOwnProperty.call(e, d)) switch (s = e[d], typeof s) {
                            case "undefined":
                            case "unknown":
                            case "function":
                                break;
                            default:
                                r && a.push(","), r = 1, a.push(c(d) + ":" + c(s))
                        }
                    return a.push("}"), a.join("")
            }
        },
        format: function(e, t) {
            e = String(e);
            var i = Array.prototype.slice.call(arguments, 1),
                n = Object.prototype.toString;
            return i.length ? (i = 1 == i.length && null !== t && /\[object Array\]|\[object Object\]/.test(n.call(t)) ? t : i, e.replace(/#\{(.+?)\}/g, function(e, t) {
                var o = i[t];
                return "[object Function]" == n.call(o) && (o = o(t)), "undefined" == typeof o ? "" : o
            })) : e
        },
        subByte: function(e, t, i) {
            var n = [],
                o = e.split("");
            i = i || "…";
            for (var r = 0, s = o.length; s > r; r++) o[r].charCodeAt(0) > 255 && n.push("*"), n.push(o[r]);
            return t && t > 0 && n.length > t ? o = n.join("").substring(0, t - 1).replace(/\*/g, "") + i : e
        },
        getByteLength: function(e) {
            for (var t = [], i = e.split(""), n = 0, o = i.length; o > n; n++) i[n].charCodeAt(0) > 255 && t.push("*"), t.push(i[n]);
            return t.length
        },
        _isValidKey: function(e) {
            return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(e)
        },
        setCookie: function(e, t, i) {
            if (t = encodeURIComponent(t), jQuery._isValidKey(e)) {
                i = i || {};
                var n = i.expires;
                "number" == typeof i.expires && (n = new Date, n.setTime(n.getTime() + i.expires)), document.cookie = e + "=" + t + (i.path ? "; path=" + i.path : "") + (n ? "; expires=" + n.toGMTString() : "") + (i.domain ? "; domain=" + i.domain : "") + (i.secure ? "; secure" : "")
            }
        },
        getCookie: function(e) {
            var t = "";
            if (jQuery._isValidKey(e)) {
                var i = new RegExp("(^| )" + e + "=([^;]*)(;|$)"),
                    n = i.exec(document.cookie);
                if (n && (t = n[2] || null, "string" == typeof t)) return t = decodeURIComponent(t)
            }
            return null
        },
        removeCookie: function(e, t) {
            t = t || {}, t.expires = new Date(0), jQuery.setCookie(e, "", t)
        },
        limitWd: function(e, t) {
            if ("" === e) return "";
            e += "";
            var i = e.split(""),
                n = i.length,
                o = 0,
                r = t || 255;
            if (n <= parseInt(r / 2)) return e;
            for (var s = 0; n > s; s++) {
                if (o += i[s].charCodeAt(0) > 255 ? 2 : 1, o === r) return i = e.substring(0, s + 1);
                if (o > r) return i = e.substring(0, s)
            }
            return e
        }
    }), $(window).on("resize", function() {
        "pageState" in window && 0 != pageState && (bds.util.setContainerWidth(), bds.event.trigger("se.window_resize"))
    }), bds.util.addStyle = function(e) {
        var t = -1 !== navigator.userAgent.indexOf("MSIE") && !window.opera;
        if (t) {
            var i = document.createStyleSheet();
            i.cssText = e
        } else {
            var n = document.createElement("style");
            n.type = "text/css", n.appendChild(document.createTextNode(e)), document.getElementsByTagName("HEAD")[0].appendChild(n)
        }
    }, bds.util.getContentRightHeight = function() {
        return $("#content_right").get(0) ? $("#content_right").get(0).offsetHeight : 0
    }, bds.util.getContentLeftHeight = function() {
        return $("#content_left").get(0) ? $("#content_left").get(0).offsetHeight : 0
    }, window.A || (window.bds = window.bds || {}, bds.util = bds.util || {}, bds.util.getWinWidth = function() {
        return window.document.documentElement.clientWidth
    }, bds.util.setContainerWidth = function() {
        var e = G("container"),
            t = G("wrapper"),
            i = function(e, t) {
                t.className = t.className.replace(e, "")
            },
            n = function(e, t) {
                t.className = (t.className + " " + e).replace(/^\s+/g, "")
            },
            o = function(e, t) {
                return e.test(t.className)
            },
            r = 1217;
        bds.util.getWinWidth() < r ? (e && (i(/\bcontainer_l\b/g, e), o(/\bcontainer_s\b/, e) || n("container_s", e)), t && (i(/\bwrapper_l\b/g, t), o(/\bwrapper_s\b/, t) || n("wrapper_s", t)), bds.comm.containerSize = "s") : (e && (i(/\bcontainer_s\b/g, e), o(/\bcontainer_l\b/, e) || n("container_l", e)), t && (i(/\bwrapper_s\b/g, t), o(/\bwrapper_l\b/, t) || n("wrapper_l", t)), bds.comm.containerSize = "l")
    }, function() {
        var e = [],
            t = !1,
            i = function(e, t) {
                try {
                    e.call(t)
                } catch (i) {}
            },
            n = function() {
                this.ids = [], this.has = !0, this.list = [], this.logs = [], this.loadTimes = [], this.groupData = [], this.mergeFns = [], this._currentContainer = null
            };
        window.A = bds.aladdin = {}, i(n, window.A), bds.ready = function(n) {
            "function" == typeof n && (t ? i(n) : e.push(n))
        }, bds.doReady = function() {
            for (t = !0; e.length;) i(e.shift())
        }, bds.clearReady = function() {
            t = !1, e = []
        }, A.__reset = n;
        var o = function() {
                var e = document.getElementsByTagName("script");
                return function() {
                    var t = e[e.length - 1];
                    window.currentScriptElem && (t = window.currentScriptElem);
                    for (var i = t; i;) {
                        if (i.className && /(?:^|\s)result(?:-op)?(?:$|\s)/.test(i.className) && (tplname = i.getAttribute("tpl"))) return i;
                        i = i.parentNode
                    }
                }
            }(),
            r = function(e, t, i) {
                var n;
                if (e.initIndex ? n = A.groupData[e.initIndex - 1] : (n = {
                        container: e,
                        data: {},
                        handlers: []
                    }, e.initIndex = A.groupData.length + 1, A.groupData.push(n)), "function" == typeof t) n.handlers.push(t);
                else if ("object" == typeof t)
                    for (var o in t) t.hasOwnProperty(o) && (n.data[o] = t[o]);
                else n.data[t] = i
            };
        A.init = A.setup = function(e, t) {
            if (void 0 !== e && null !== e) {
                var i = A._currentContainer || o();
                i && r(i, e, t)
            }
        }, A.merge = function(e, t) {
            A.mergeFns.push({
                tplName: e,
                fn: t
            })
        }
    }()), A.uiPrefix = "//www.baidu.com/cache/aladdin/ui/",
    function() {
        var e = window.bds.aladdin,
            t = [],
            i = {},
            n = 0,
            o = function(e, t) {
                try {
                    e.call(t)
                } catch (i) {}
            },
            r = function(e) {
                e.ajaxId = ++n, i[e.ajaxId] = e
            },
            s = function(e) {
                delete i[e.ajaxId]
            },
            a = function(e) {
                return e.ajaxId ? i.hasOwnProperty(e.ajaxId) : !1
            },
            c = function(e) {
                var t = {};
                if (e) try {
                    var i = new Function("return " + e)();
                    i && (t = i)
                } catch (n) {}
                return t
            },
            d = function() {
                for (var e, t, i = $(".result-op").get().concat($(".result").get()), n = {}, o = 0; t = i[o]; o++)(e = t.getAttribute("tpl")) && (n[e] ? n[e].push(t) : n[e] = [t]);
                return n
            },
            l = [],
            u = [];
        e.addDisposeHandler = function(e) {
            u.push(e)
        }, e.dispose = function() {
            for (; l.length;) {
                var e = l.shift();
                o(e.fn, e.obj)
            }
            for (var t = u, i = 0; i < t.length; i++) {
                var e = t[i];
                o(e.fn, e.obj)
            }
        }, e.__clearDispose = function() {
            l = [], u = []
        }, e.addDisposeHandler({
            obj: i,
            fn: function() {
                for (var e in i) i.hasOwnProperty(e) && delete i[e]
            }
        }), e._Aladdin = function() {
            this.p1 = 0, this.mu = null
        }, $.extend(e._Aladdin.prototype, {
            _init: function() {
                var e = this,
                    t = e.container,
                    i = c(e.container.getAttribute("data-click"));
                e.p1 = i.p1 || t.id, e.mu = i.mu || t.getAttribute("mu"), e.srcid = i.rsv_srcid || t.getAttribute("srcid")
            },
            q: function(e, t) {
                return t = t || "", $(this.container).find(t + "." + e).get()
            },
            qq: function(e, t) {
                return this.q(e, t)[0]
            },
            find: function(e) {
                return window.jQuery(e, this.container)
            },
            ready: function() {
                $(document).ready.apply(this, arguments)
            },
            ajax: function(t, i, n) {
                var o = e.AJAX,
                    c = +new Date,
                    d = n.params || {},
                    l = {
                        query: t,
                        co: n.co || "",
                        resource_id: i,
                        t: c
                    };
                $.extend(l, o.PARAMS), $.extend(l, d);
                var t = $.param(l),
                    u = o.API_URL + "?" + t,
                    p = function() {
                        var t = new Image;
                        t.src = $.format(o.ERR_URL, {
                            url: u
                        }), e.logs.push(t)
                    },
                    m = (new Date).getTime(),
                    f = function(e) {
                        var t = (new Date).getTime() - m,
                            n = {
                                fm: "opendataajax",
                                srcid: i,
                                time: t,
                                status: e
                            };
                        ns_c(n)
                    },
                    h = function(e) {
                        a(h) && (b(), 0 == e.status ? n.success(e.data) : (n.error && n.error(e.status), p()), f(0))
                    },
                    g = function() {
                        a(g) && (b(), n.timeout && n.timeout(), p(), f(1))
                    },
                    b = function() {
                        s(h), s(g)
                    };
                r(h), r(g), $.ajax({
                    url: u,
                    scriptCharset: o.PARAMS.oe,
                    timeout: o.TIMEOUT,
                    dataType: "jsonp",
                    jsonp: "cb",
                    success: h,
                    error: g
                })
            }
        }), e.AJAX = {
            API_URL: bds.util.domain && bds.util.domain.get ? bds.util.domain.get("http://opendata.baidu.com/api.php") : "http://opendata.baidu.com/api.php",
            ERR_URL: bds.util.domain && bds.util.domain.get ? bds.util.domain.get("http://open.baidu.com/stat/al_e.gif?ajax_err_url=#{url}") : "http://open.baidu.com/stat/al_e.gif?ajax_err_url=#{url}",
            PARAMS: {
                ie: "utf8",
                oe: "gbk",
                cb: "op_aladdin_callback",
                format: "json",
                tn: "baidu"
            },
            TIMEOUT: 6e3
        }, t.push(function(e) {
            var t = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : void 0;
            if (t) {
                var i = document.charset;
                $.each(e.container.getElementsByTagName("form"), function(e, t) {
                    var n = function() {
                        var e = t.acceptCharset;
                        e && "UNKNOWN" != e.toString().toUpperCase() && e != document.charset && (document.charset = e, setTimeout(function() {
                            document.charset = i
                        }, 1e3))
                    };
                    $(t).on("submit", n);
                    var o = t.submit;
                    t.submit = function() {
                        n();
                        try {
                            o.call(t)
                        } catch (e) {
                            o()
                        }
                    }
                })
            }
        }), e.__runAla = function() {
            var i = d();
            $.each(e.mergeFns, function(t, n) {
                var o = i[n.tplName];
                o && $.each(o, function(t, i) {
                    e._currentContainer = i, n.fn(), e._currentContainer = null
                })
            }), $.each(e.groupData, function(i, n) {
                var r, s, a, c = new e._Aladdin;
                c.container = n.container, c.data = n.data, c._init(), e.list.push(c);
                var d = n.handlers;
                for (r = new Date; d.length;) o(d.shift(), c);
                "function" == typeof c.dispose && (l.push({
                    obj: c,
                    fn: c.dispose
                }), c.dispose = null), s = new Date, a = {
                    srcid: c.srcid
                }, a.tpl = c.container.getAttribute("tpl"), a.time = s - r, e.loadTimes.push(a), $.each(t, function(e, t) {
                    t.call(c, c)
                })
            })
        }
    }(),
    function() {
        function e(r, s) {
            f = -1 === m.indexOf(r);
            var a = "string" == typeof r ? r.split(/\s*,\s*/) : r;
            if (a.length > 1)
                if (s) e(a.shift(), function() {
                    a.length > 0 && e(a, s)
                });
                else
                    for (; a.length;) e(a.shift());
            else {
                if (r = a[0], "jquery" === r && window.jQuery) return !o.ui.jquery && (o.ui.jquery = window.jQuery), void(s && s());
                var c = r.replace(/\./g, "/"),
                    d = r.replace(/^[\s\S]*\./, ""),
                    l = o.uiPrefix + c + "/" + d;
                0 == c.search("style/") ? t(l + ".css", s) : (l += ".js", p.hasOwnProperty(r) ? "function" == typeof p[r] ? l = p[r](r, l) : "string" == typeof p[r] && (l = p[r]) : p.hasOwnProperty("*") && (l = p["*"](r, l)), s ? n(l, s) : i(l))
            }
        }

        function t(e, t) {
            if (t = t || u, e in r) return void t();
            var i = c.createElement("link");
            i.rel = "stylesheet", i.type = "text/css", i.href = e, i.setAttribute("data-for", "A.ui"), d.appendChild(i), r[e] = 1, t()
        }

        function i(e) {
            return l ? void n(e, u) : void(e in r || (c.write("<script" + (f ? ' charset="gb2312"' : "") + ' type="text/javascript" src="' + e + '"></script>'), r[e] = 1))
        }

        function n(e, t) {
            if (t = t || u, e in r) return void t();
            if (e in s) return void a[e].push(t);
            s[e] = 1;
            var i = a[e] = [t],
                n = c.createElement("script");
            n.type = "text/javascript", f && (n.charset = "gb2312"), n.onload = n.onreadystatechange = function() {
                if (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState) {
                    for (; i.length;) i.shift()();
                    delete s[e], r[e] = 1, n.onload = n.onreadystatechange = null
                }
            }, n.src = e, n.setAttribute("data-for", "A.ui"), d.insertBefore(n, d.firstChild)
        }
        var o = window.A,
            r = {},
            s = {},
            a = {},
            c = document,
            d = c.getElementsByTagName("head")[0],
            l = !1,
            u = (o.baidu, function() {}),
            p = {
                "*": function(e, t) {
                    return t + "?v=20170208"
                },
                scrollbarv: function(e, t) {
                    return t + "?v=20170208"
                },
                likeshare4: function(e, t) {
                    return t + "?v=20170208"
                },
                mboxsingleton: function(e, t) {
                    return t + "?v=20170208"
                },
                sms: function(e, t) {
                    return t + "?v=20170208"
                },
                tab: function(e, t) {
                    return t + "?v=20170208"
                },
                tabs: function(e, t) {
                    return t + "?v=20170208"
                },
                musicplayer: function(e, t) {
                    return t + "?v=20170208"
                },
                slider: function(e, t) {
                    return t + "?v=20170208"
                },
                suggestion: function(e, t) {
                    return t + "?v=20170208"
                },
                tabs5: function(e, t) {
                    return t + "?v=20170208"
                },
                tabx: function(e, t) {
                    return t + "?v=20170208"
                },
                dropdown1: function(e, t) {
                    return t + "?v=20170208"
                },
                dropdown21: function(e, t) {
                    return t + "?v=20170208"
                },
                advert: function(e, t) {
                    return t + "?v=20170208"
                },
                advert2: function(e, t) {
                    return t + "?v=20170208"
                },
                honourCard: function(e, t) {
                    return t + "?v=20170208"
                },
                honourCard3: function(e, t) {
                    return t + "?v=20170208"
                },
                honourCard4: function() {
                    return "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/aladdin-ui/honourCard4/honourCard4_06164dc.js"
                },
                share: function(e, t) {
                    return t + "?v=20170208"
                },
                qHotCity: function(e, t) {
                    return t + "?v=20170208"
                },
                mapapi: function(e, t) {
                    return t + "?v=20170208"
                },
                qunarfilters: function(e, t) {
                    return t + "?v=20170208"
                },
                renderIframe3: function(e, t) {
                    return t + "?v=20170208"
                },
                share2: function(e, t) {
                    return t + "?v=20170208"
                },
                ALD_feedback: function(e, t) {
                    return t + "?v=20170208"
                },
                addtohome: function(e, t) {
                    return t + "?v=20170208"
                },
                addtohome2: function(e, t) {
                    return t + "?v=20170208"
                },
                gpsApi: function(e, t) {
                    return t + "?v=20170208"
                },
                simGps: function(e, t) {
                    return t + "?v=20170208"
                }
            };
        $(document).ready(function() {
            l = !0
        }), o.addDisposeHandler({
            obj: o,
            fn: function() {
                for (var e in a)
                    if (a.hasOwnProperty(e))
                        for (var t = a[e]; t.length;) t.pop()
            }
        });
        var m = ["honourCard4"],
            f = !0;
        e.cache = r, o.uicss = function(e, i) {
            t(i ? e : o.uiPrefix + e)
        }, o.uijs = function(e, t) {
            n(o.uiPrefix + e, t)
        }, o.uijsPathMap = function(e) {
            $.extend(p, e)
        }, o.use = e, o.ui = o.ui || {}, o.addCssText = function(e) {
            var t = "opui-style-tag-id",
                i = "data-for",
                n = "A.ui",
                o = document.getElementById(t);
            o || (o = document.createElement("style"), o.setAttribute("type", "text/css"), o.setAttribute(i, n), o.id = t, document.getElementsByTagName("head")[0].appendChild(o));
            try {
                var r = document.createTextNode(e);
                o.appendChild(r)
            } catch (s) {
                o.styleSheet && (o.styleSheet.cssText += e)
            }
        }, $(window).on("swap_end", function() {
            var e = /MSIE\s?6/.test(window.navigator.userAgent),
                t = function(e, t, i) {
                    $(e).each(function(e, n) {
                        var o = $(n),
                            r = new Image,
                            s = o.attr("src");
                        r.onload = function() {
                            var e = t,
                                n = i,
                                s = this.width,
                                a = this.height,
                                c = s / a / (e / n);
                            c > 1 ? (s = s > e ? e : "auto", a = "auto") : (a = a > n ? n : "auto", s = "auto"), o.css({
                                height: a,
                                width: s
                            }), r.onload = null, r = null
                        }, r.src = s
                    })
                };
            e && t("img.result-left-img", 98, 121), $(".c-feedback").bind("click", function() {
                var e = this;
                o.use("ALD_feedback", function() {
                    var t, i, n = "right",
                        r = $(e);
                    r.parents("#content_left").length ? (n = "left", i = r.parents(".result-op"), t = i.attr("srcid")) : r.parents("#content_right").length && (i = r.parents("#con-ar"));
                    var s = {
                            query: bds.comm.query,
                            srcid: t,
                            target: i,
                            username: bds.comm.username,
                            flag: n
                        },
                        a = o.ui.ALD_feedback(s);
                    o.addDisposeHandler({
                        obj: a,
                        fn: a.dispose
                    })
                })
            })
        })
    }(), $(window).on("swap_begin", function() {
        A.dispose(), A.__reset(), A.__clearDispose()
    }), $(window).on("swap_dom_ready", function() {
        bds.ready(A.__runAla), bds.doReady()
    }), bds.event = new function() {
        function e(e, t) {
            if ("function" == typeof t || t instanceof Function) {
                var i = o(e);
                r[i.name] = r[i.name] || [], r[i.name].push({
                    prod: i.prod,
                    callback: t
                })
            }
        }

        function t(e, t) {
            for (var i = o(e), s = r[i.name] || [], a = 0; a < s.length;) {
                var c = s[a];
                t === c.callback && n(i.prod, c.prod) ? s.splice(a, 1) : a++
            }
        }

        function i(e, t) {
            for (var i = o(e), s = r[i.name] || [], a = {
                    data: t,
                    eventId: e
                }, c = 0, d = s.length; d > c; c++) {
                var l = s[c];
                try {
                    n(l.prod, i.prod) && l.callback.call(this, a)
                } catch (u) {}
            }
        }

        function n(e, t) {
            return new RegExp("^" + e.replace(/\./g, "\\.").replace(/\*/g, ".+") + "$").test(t)
        }

        function o(e) {
            var t = e.match(/(.+)\.(.+)/);
            return t && t[2] ? {
                prod: t[1],
                name: t[2]
            } : {}
        }
        var r = {};
        this.on = e, this.off = t, this.trigger = i, this.events = r
    }, bds.se.link = function() {
        function e(e, t) {
            var i = "/s?",
                n = {
                    tn: bds.comm.tn
                },
                o = "wd=" + encodeURIComponent(e);
            t && (n = $.extend(n, t));
            for (var r in n) n.hasOwnProperty(r) && (o += "&" + r + "=" + encodeURIComponent(n[r]));
            return i + o
        }
        return {
            getSearchUrl: e
        }
    }(), define("modules/window/token", ["require", "exports"], function(e, t) {
        "use strict";
        t.__esModule = !0, t.PERF_SYNC_DATA = t.NAVIGATOR = t.PERFORMANCE = t.LOCAL_STORAGE = t.DOCUMENT = void 0;
        var i = "document";
        t.DOCUMENT = i;
        var n = "localStorage";
        t.LOCAL_STORAGE = n;
        var o = "performance";
        t.PERFORMANCE = o;
        var r = "navigator";
        t.NAVIGATOR = r;
        var s = "perfSyncDatas";
        t.PERF_SYNC_DATA = s
    }), define("modules/require/require", ["require", "exports"], function(e, t) {
        "use strict";
        t.__esModule = !0, t.REQUIRE_TOKEN = void 0, t.REQUIRE_TOKEN = "require"
    }), define("modules/log/log.service", ["require", "exports", "tslib", "@searchfe/inject-js", "../query/query.service", "../window/token", "../sample/sample.service"], function(e, t, i, n, o, r, s) {
        "use strict";
        t.__esModule = !0, t.Log = void 0;
        var a = function() {
            function e(e, t, i) {
                this.queryServ = e, this.document = t, this.sampleServ = i
            }
            e.prototype.send = function(e, t) {
                switch (void 0 === t && (t = "sclick"), t) {
                    case "nsclick":
                        return window.ns_c(e);
                    default:
                        return this.sclick(e)
                }
            }, e.prototype.sclick = function(e) {
                var t = this.queryServ,
                    i = this.document,
                    n = bds.comm,
                    o = e.p1;
                if ("alop" === e.fm && !("rsv_xpath" in e)) {
                    var r = i.getElementById(o);
                    if (!r || "6677" !== r.getAttribute("srcid")) return ""
                }!o || "p5" in e || (e.p5 = o);
                var s = {
                        q: t.get("queryEnc"),
                        rsv_sid: this.sampleServ.get("sid"),
                        cid: t.get("cid"),
                        qid: t.get("qid"),
                        rsv_tn: t.get("tn"),
                        rsv_iorr: n.resultPage || 0,
                        rsv_ssl: "https:" === i.location.protocol ? 1 : 0,
                        path: i.location.href,
                        rsv_did: n.did || "",
                        t: +new Date
                    },
                    a = t.get("inter");
                a && (s.rsv_inter = a), n.seinfo && n.seinfo.rsv_pstg && (s.rsv_pstg = n.seinfo.rsv_pstg);
                var c = n.cftime;
                c && 0 != c && (s.rsv_cftime = c);
                var d = n.indexSid;
                d && (s.rsv_isid = d);
                var l = n.lastVoiceQuery;
                l && (s.rsv_lavo = encodeURIComponent(l)), e = Object.assign(e, s);
                var u = this.normalized(e, t.get("ubsurl")),
                    p = new Image;
                return p.src = u, u
            }, e.prototype.normalized = function(e, t) {
                var i = [];
                for (var n in e) switch (n) {
                    case "title":
                        var o = e[n].replace(/<[^<>]+>/g, "");
                        o && o.length > 100 && (o = o.substring(0, 100)), i.push(n + "=" + encodeURIComponent(o));
                        break;
                    case "mu":
                    case "url":
                    case "path":
                        i.push(n + "=" + escape(e[n]));
                        break;
                    default:
                        i.push(n + "=" + e[n])
                }
                return t + "?" + i.join("&")
            };
            var t, a, c;
            return e = i.__decorate([n.injectable, i.__param(1, n.inject(r.DOCUMENT)), i.__metadata("design:paramtypes", ["function" == typeof(t = "undefined" != typeof o.Query && o.Query) ? t : Object, "function" == typeof(a = "undefined" != typeof Document && Document) ? a : Object, "function" == typeof(c = "undefined" != typeof s.Sample && s.Sample) ? c : Object])], e)
        }();
        t.Log = a
    }), define("modules/https-domain/https-domain.service", ["require", "exports", "tslib", "@searchfe/inject-js", "../window/token"], function(e, t, i, n, o) {
        "use strict";
        t.__esModule = !0, t.HttpsDomain = void 0;
        var r = function() {
            function e(e) {
                this.data = {};
                var t = e.getElementById("httpsdomain-data");
                if (t) try {
                    var i = JSON.parse(t.innerHTML);
                    Object.assign(this.data, i)
                } catch (n) {
                    console.log(n)
                }
            }
            e.prototype.get = function(e) {
                if (!e) return "";
                var t = this.data,
                    i = /^(http[s]?:\/\/)?([^\/]+)(.*)/,
                    n = e.match(i);
                return n && t[n[2]] ? t[n[2]] + n[3] : e
            };
            var t;
            return e = i.__decorate([n.injectable, i.__param(0, n.inject(o.DOCUMENT)), i.__metadata("design:paramtypes", ["function" == typeof(t = "undefined" != typeof Document && Document) ? t : Object])], e)
        }();
        t.HttpsDomain = r
    }), define("modules/san-option/san-option.service", ["require", "exports"], function(e, t) {
        "use strict";
        t.__esModule = !0, t.SanOption = void 0;
        var i = function() {
            function e() {}
            return e
        }();
        t.SanOption = i
    }), define("modules/san-option/san-option.provider", ["require", "exports"], function(e, t) {
        "use strict";
        t.__esModule = !0, t.SanOptionProvider = void 0;
        var i = function() {
            function e() {}
            return e.setElement = function(t) {
                e.el = t
            }, e.prototype.create = function() {
                return {
                    el: e.el
                }
            }, e
        }();
        t.SanOptionProvider = i
    }), define("modules/async-cache/async-cache-item.service", ["require", "exports"], function(e, t) {
        "use strict";
        t.__esModule = !0, t.AsyncCacheItem = void 0;
        var i = function() {
            function e() {}
            return e
        }();
        t.AsyncCacheItem = i
    }), define("modules/webb/config.service", ["require", "exports"], function(e, t) {
        "use strict";
        t.__esModule = !0, t.WebbConfig = void 0;
        var i = function() {
            function e() {}
            return e
        }();
        t.WebbConfig = i
    }), define("modules/webb/config.value", ["require", "exports"], function(e, t) {
        "use strict";
        t.__esModule = !0, t.webbConfigValue = void 0, t.webbConfigValue = {
            config: {
                "1_3": {
                    et_js: {
                        sample: .1
                    },
                    et_comm: {
                        sample: .1
                    },
                    pf_comm: {
                        sample: .01
                    }
                },
                "1_87": {
                    et_js: {
                        sample: .1
                    },
                    et_comm: {
                        sample: .1
                    },
                    pf_comm: {
                        sample: .02
                    }
                },
                "1_79": {
                    et_js: {
                        sample: .1
                    },
                    et_comm: {
                        sample: .1
                    },
                    pf_comm: {
                        sample: .02
                    }
                }
            }
        }
    }), define("modules/webb/instance.service", ["require", "exports", "tslib", "@searchfe/inject-js", "@baidu/webb", "../window/token", "./config.service"], function(e, t, i, n, o, r, s) {
        "use strict";
        t.__esModule = !0, t.WebbInstance = void 0, o = i.__importDefault(o);
        var a = function() {
            function e(e, t) {
                this.instances = [];
                var i = JSON.parse(JSON.stringify(e.config));
                if (-1 !== t.cookie.indexOf("webbtest=1"))
                    for (var n in i)
                        for (var o in i[n]) i[n][o].sample = 1;
                this.instanceConfig = i
            }
            e.prototype.getInstance = function(e) {
                if (this.instances[e]) return this.instances[e];
                var t = {
                        pid: e,
                        lid: ""
                    },
                    i = this.instanceConfig[e];
                if (!i) return null;
                for (var n in i) t[n] = i[n];
                return this.instances[e] = new o["default"](t), this.instances[e]
            };
            var t, a;
            return e = i.__decorate([n.injectable, i.__param(1, n.inject(r.DOCUMENT)), i.__metadata("design:paramtypes", ["function" == typeof(t = "undefined" != typeof s.WebbConfig && s.WebbConfig) ? t : Object, "function" == typeof(a = "undefined" != typeof Document && Document) ? a : Object])], e)
        }();
        t.WebbInstance = a
    }), define("modules/cookie/cookie.service", ["require", "exports", "tslib", "@searchfe/inject-js", "../window/token"], function(e, t, i, n, o) {
        "use strict";
        t.__esModule = !0, t.Cookie = void 0;
        var r = function() {
            function e(e) {
                this.document = e
            }
            e.prototype.encode = function(e, t) {
                return t ? e : encodeURIComponent(e)
            }, e.prototype.decode = function(e, t) {
                return t ? e : decodeURIComponent(e)
            }, e.prototype.set = function(e, t, i) {
                if (void 0 === i && (i = {}), !e) return !1;
                var n = t + "",
                    o = [this.encode(e) + "=" + this.encode(n, i.raw), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "; path=/", i.domain ? "; domain=" + i.domain : ""].join("");
                return this.document.cookie = o, !0
            }, e.prototype.get = function(e, t) {
                if (!e) return null;
                var i = this.document.cookie,
                    n = i.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
                return n && n[2] ? this.decode(n[2], t) : null
            }, e.prototype.clear = function(e) {
                return e ? (this.document.cookie = e + "=;expires=Fri, 02-Jan-1970 00:00:00 GMT", !0) : !1
            };
            var t;
            return e = i.__decorate([n.injectable, i.__param(0, n.inject(o.DOCUMENT)), i.__metadata("design:paramtypes", ["function" == typeof(t = "undefined" != typeof Document && Document) ? t : Object])], e)
        }();
        t.Cookie = r
    }), define("modules/user/user.service", ["require", "exports", "tslib", "@searchfe/inject-js", "../json-data/json-data"], function(e, t, i, n, o) {
        "use strict";
        t.__esModule = !0, t.User = void 0;
        var r = function() {
            function e() {
                this.data = {}
            }
            return e.prototype.updated = function(e) {
                return e ? void(this.data = e) : void(this.data = o.extractData("user-data"))
            }, e.prototype.get = function(e) {
                return this.data[e]
            }, e = i.__decorate([n.injectable], e)
        }();
        t.User = r
    }), define("modules/login/login.service", ["require", "exports", "tslib", "@searchfe/inject-js", "../user/user.service", "../update-user-dom/update-user-dom"], function(e, t, i, n, o, r) {
        "use strict";
        t.__esModule = !0, t.Login = void 0;
        var s = function() {
            function e(e) {
                this.stat = !1, this.passv3 = {}, this.maketext = "", this.subpro = "", this.user = e, this.loginCallback = function() {
                    window.document.location.reload(!0)
                }
            }
            e.prototype.open = function(e) {
                var t = this;
                if (this.stat) this.passBackSet(e);
                else {
                    var i = "//passport.baidu.com/passApi/js/uni_login_wrapper.js?cdnversion=";
                    $.getScript("" + location.protocol + i + (new Date).getTime(), function() {
                        t.initPassSdk(), t.stat = !0, t.passBackSet(e)
                    })
                }
            }, e.prototype.setSubpro = function(e) {
                this.subpro = e
            }, e.prototype.setMakeText = function(e) {
                this.maketext = e
            }, e.prototype.passBackSet = function(e) {
                this.passv3.setSubpro(this.subpro), this.passv3.setMakeText(this.maketext), this.loginCallback = e || function() {
                    window.document.location.reload(!0)
                }, this.passv3.show()
            }, e.prototype.asyncLoginCallback = function(e) {
                this.user.updated(e), r.replaceUser(e), this.loginCallback(e)
            }, e.prototype.successCallback = function(e) {
                this.passv3.hide(), bds.comm.username = e.username, this.asyncLoginCallback(e)
            }, e.prototype.initPassSdk = function() {
                var e = this,
                    t = window.passport;
                this.passv3 = t.pop.init({
                    apiOpt: {
                        loginType: 1,
                        product: "mn",
                        u: window.document.location.href,
                        safeFlag: 0,
                        qrcode: 2,
                        staticPage: location.protocol + "//www.baidu.com/cache/user/html/v3Jump.html",
                        sms: 5
                    },
                    cache: !1,
                    tangram: !0,
                    authsite: ["qzone", "tsina", "weixin"],
                    authsiteCfg: {
                        act: "implicit",
                        display: "popup",
                        jumpUrl: location.protocol + "//www.baidu.com/cache/user/html/xd.html",
                        onBindSuccess: function(t, i) {
                            var n = decodeURIComponent(i.passport_uname || i.displayname),
                                o = {
                                    user: n,
                                    username: n,
                                    isLogin: "1",
                                    userPortrait: "",
                                    stoken: ""
                                };
                            return e.successCallback(o), !1
                        }
                    },
                    onLoginSuccess: function(t) {
                        t.returnValue = !1;
                        var i = "",
                            n = "",
                            o = "";
                        t && t.rsp && t.rsp.data && (i = t.rsp.data.userName || t.rsp.data.mail || t.rsp.data.phoneNumber || t.rsp.data.user && t.rsp.data.user.username, n = t.rsp.data.user && t.rsp.data.user.portraitUrl, o = t.rsp.data.session && t.rsp.data.session.stoken);
                        var r = {
                            user: i,
                            username: i,
                            isLogin: "1",
                            userPortrait: n,
                            stoken: o
                        };
                        e.successCallback(r)
                    },
                    onHide: function() {
                        e.setSubpro(""), e.setMakeText("")
                    }
                })
            };
            var t;
            return e = i.__decorate([n.injectable, i.__metadata("design:paramtypes", ["function" == typeof(t = "undefined" != typeof o.User && o.User) ? t : Object])], e)
        }();
        t.Login = s
    }), define("modules/query/query.service", ["require", "exports", "tslib", "@searchfe/inject-js", "../json-data/json-data"], function(e, t, i, n, o) {
        "use strict";
        t.__esModule = !0, t.Query = void 0;
        var r = function() {
            function e() {
                this.data = {}
            }
            return e.prototype.updated = function() {
                this.data = o.extractData("query-data")
            }, e.prototype.get = function(e) {
                return this.data[e]
            }, e = i.__decorate([n.injectable], e)
        }();
        t.Query = r
    }), define("modules/sample/sample.service", ["require", "exports", "tslib", "@searchfe/inject-js", "../json-data/json-data"], function(e, t, i, n, o) {
        "use strict";
        t.__esModule = !0, t.Sample = void 0;
        var r = function() {
            function e() {
                this.data = {}, this.sampleval = [], this.sid = ""
            }
            return e.prototype.updated = function() {
                this.data = o.extractData("sample-data"), this.sampleval = this.data.sampleval || [], this.sid = this.data.sid || ""
            }, e.prototype.get = function(e) {
                return this[e]
            }, e.prototype.hitSid = function(e) {
                var t = this.sid,
                    i = [];
                return i = t.split("_"), i.indexOf(e) > -1
            }, e.prototype.hitSample = function(e) {
                var t = this.sampleval;
                return t.indexOf(e) > -1
            }, e = i.__decorate([n.injectable], e)
        }();
        t.Sample = r
    }), define("modules/json-data/json-data", ["require", "exports"], function(e, t) {
        "use strict";

        function i(e) {
            var t = document.getElementById(e),
                i = {};
            if (t) try {
                var n = JSON.parse(t.innerHTML);
                Object.assign(i, n)
            } catch (o) {
                console.error(o)
            } else console.warn(e + " NOT FOUND");
            return i
        }
        t.__esModule = !0, t.extractData = void 0, t.extractData = i
    }), define("modules/update-user-dom/update-user-dom", ["require", "exports"], function(e, t) {
        "use strict";

        function i(e) {
            $("#u .lb").remove(), $("#u").append('<a href="https://www.baidu.com/my/index" id="user" class="username">\n            <span class="s-top-img-wrapper"><img src="' + e.userPortrait + '"/></span>\n            <span class="s-top-username">' + e.user + "</span>\n        </a>"), $.ajax({
                dataType: "script",
                cache: !0,
                url: "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/js/nu_instant_search_5f6f95d.js"
            })
        }
        t.__esModule = !0, t.replaceUser = void 0, t.replaceUser = i
    }), define("@baidu/www-api", ["require", "exports", "modules/log/log.service", "modules/san-option/san-option.service", "modules/san-option/san-option.provider", "modules/user/user.service", "modules/login/login.service", "modules/window/token"], function(e, t, i, n, o, r, s, a) {
        "use strict";
        t.__esModule = !0, t.Login = t.User = t.NAVIGATOR = t.PERFORMANCE = t.LOCAL_STORAGE = t.DOCUMENT = t.SanOptionProvider = t.SanOption = t.Log = void 0, t.Log = i.Log, t.SanOption = n.SanOption, t.SanOptionProvider = o.SanOptionProvider, t.User = r.User, t.Login = s.Login, t.DOCUMENT = a.DOCUMENT, t.LOCAL_STORAGE = a.LOCAL_STORAGE, t.NAVIGATOR = a.NAVIGATOR, t.PERFORMANCE = a.PERFORMANCE
    }), define("modules/event/event", ["require", "exports"], function(e, t) {
        "use strict";

        function i() {
            var e = {},
                t = function(e, t) {
                    return new RegExp("^" + e.replace(/\./g, "\\.").replace(/\*/g, ".+") + "$").test(t)
                },
                i = function(e) {
                    var t = e.match(/(.+)\.(.+)/);
                    return t && t[1] && t[2] ? {
                        prod: t[1],
                        name: t[2]
                    } : null
                };
            return {
                on: function(t, n) {
                    var o = i(t);
                    return o ? (e[o.name] = e[o.name] || [], void e[o.name].push({
                        prod: o.prod,
                        callback: n
                    })) : !1
                },
                off: function(n, o) {
                    var r = i(n);
                    if (!r) return !1;
                    for (var s = e[r.name] || [], a = 0; a < s.length;) {
                        var c = s[a];
                        o === c.callback && t(r.prod, c.prod) ? s.splice(a, 1) : a++
                    }
                },
                trigger: function(n, o) {
                    var r = this,
                        s = i(n);
                    if (!s) return !1;
                    var a = e[s.name] || [],
                        c = {
                            data: o,
                            eventId: n
                        };
                    a.forEach(function(e) {
                        try {
                            t(e.prod, s.prod) && e.callback.call(r, c)
                        } catch (i) {}
                    })
                }
            }
        }
        t.__esModule = !0, t["default"] = i()
    }), define("modules/isui-head-fixed/isui-head-fixed.service", ["require", "exports", "tslib", "@searchfe/inject-js", "../window/token", "../peak-style/peak-style.service", "../head-gradient/head-gradient.service"], function(e, t, i, n, o, r, s) {
        "use strict";
        t.__esModule = !0, t.IsuiHeadFixed = void 0;
        var a = function() {
            function e(e, t, i) {
                this.node = e.querySelector("#head"), this.peakStyle = t, this.headGradient = i, this.DOWN_POS = 0, this.time = 0, this.timeoutId = null, this.originTop = window.pageYOffset || e.documentElement.scrollTop, this.getDownPos(), this.scrollHandler(), window.addEventListener ? window.addEventListener("scroll", this.scrollHandler.bind(this)) : window.attachEvent("onscroll", this.scrollHandler.bind(this))
            }
            e.prototype.hasClass = function(e) {
                if (!this.node) return !1;
                var t = this.node.className.split(" ");
                return t.some(function(t) {
                    return t.trim() === e
                })
            }, e.prototype.addClass = function(e) {
                if (!this.hasClass(e) && this.node) {
                    var t = this.node.className + (" " + e);
                    this.node.className = t.trim()
                }
            }, e.prototype.removeClass = function(e) {
                if (this.hasClass(e) && this.node) {
                    var t = new RegExp(e, "g"),
                        i = this.node.className.replace(t, "");
                    this.node.className = i.trim()
                }
            }, e.prototype.scrollHandler = function() {
                var e = this,
                    t = this.DOWN_POS || 0;
                this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = null), this.timeoutId = window.setTimeout(function() {
                    var i = window.pageYOffset || document.documentElement.scrollTop,
                        n = e.peakStyle.get("isHit");
                    e.timeoutId = window.setTimeout(function() {
                        t + 40 > i ? (e.removeClass("s_down"), n && (e.removeClass("peak-down"), e.headGradient.show())) : (e.addClass("s_down"), n && (e.addClass("peak-down"), e.headGradient.hide()))
                    }, 0), i > e.originTop && bds.util.tempHideSug()
                }, this.time || 0)
            }, e.prototype.getDownPos = function() {
                var e = document.querySelector(".c-onlyshow-toppic");
                this.DOWN_POS = e ? .88 * e.offsetHeight : 0
            }, e.prototype.updated = function() {
                this.getDownPos(), this.originTop = window.pageYOffset || document.documentElement.scrollTop, this.time = this.peakStyle.get("isHit") ? 0 : 50
            };
            var t, a, c;
            return e = i.__decorate([n.injectable, i.__param(0, n.inject(o.DOCUMENT)), i.__param(1, n.inject(r.PeakStyle)), i.__param(2, n.inject(s.HeadGradient)), i.__metadata("design:paramtypes", ["function" == typeof(t = "undefined" != typeof Document && Document) ? t : Object, "function" == typeof(a = "undefined" != typeof r.PeakStyle && r.PeakStyle) ? a : Object, "function" == typeof(c = "undefined" != typeof s.HeadGradient && s.HeadGradient) ? c : Object])], e)
        }();
        t.IsuiHeadFixed = a
    }), define("modules/right-fixed/right-fixed.service", ["require", "exports", "tslib", "../query/query.service", "@searchfe/inject-js"], function(e, t, i, n, o) {
        "use strict";
        t.__esModule = !0, t.RightFixed = void 0;
        var r = function() {
            function e(e) {
                this.query = e, this.criticalHeight = 0;
                var t = $("#head").height();
                this.headHeight = t ? t + 16 : 86, this.data = null;
                var i = this.query.get("topicPn");
                i && this.init()
            }
            e.prototype.init = function() {
                this.data = this.getScrollData(), this.criticalHeight = this.data.criticalHeight, this.scrollStatus(), this.scrollFunc = this.scrollStatus.bind(this, "scroll"), window.addEventListener("scroll", this.scrollFunc)
            }, e.prototype.getScrollData = function() {
                var e = $(".content_right_inner"),
                    t = this.getScrollTop(),
                    i = $("#foot").height() || 0,
                    n = $("#page").height() || 0,
                    o = i + n + this.headHeight + 32,
                    r = e[0] ? e[0].getBoundingClientRect().top : 0,
                    s = r + t - this.headHeight;
                return {
                    right: e,
                    bodyTop: t,
                    frameHeight: o,
                    criticalHeight: s
                }
            }, e.prototype.scrollStatus = function(e) {
                var t = this.data,
                    i = t.right,
                    n = this.getDocHeight(),
                    o = e ? this.getScrollTop() : t.bodyTop,
                    r = t.right.height() - 50,
                    s = $(".result-op[tpl=search_topic_publisher]").height() || 0,
                    a = $(window).height() || 0;
                !e && 100 > s && (r += 176), o > this.criticalHeight && a - this.headHeight > r && n - o - t.frameHeight > r ? (i.addClass("right-fixed"), e && i.css({
                    bottom: "",
                    top: ""
                })) : n - o - t.frameHeight <= r ? (e || i.addClass("right-fixed"), i.attr("style") || i.css({
                    bottom: 88,
                    top: "auto"
                })) : e && i.removeClass("right-fixed")
            }, e.prototype.getDocHeight = function() {
                return document.documentElement.offsetHeight || document.body.offsetHeight || 0
            }, e.prototype.getScrollTop = function() {
                return document.documentElement.scrollTop || document.body.scrollTop || 0
            }, e.prototype.destroy = function() {
                this.scrollFunc && window.removeEventListener("scroll", this.scrollFunc)
            };
            var t;
            return e = i.__decorate([o.injectable, i.__metadata("design:paramtypes", ["function" == typeof(t = "undefined" != typeof n.Query && n.Query) ? t : Object])], e)
        }();
        t.RightFixed = r
    }), define("modules/outline-safari/outline-safari.service", ["require", "exports", "tslib", "@searchfe/inject-js", "../window/token"], function(e, t, i, n, o) {
        "use strict";
        t.__esModule = !0, t.OutlineSafari = void 0;
        var r = "data-tabindex-click",
            s = "no-outline-while-click",
            a = function() {
                function e(e, t) {
                    var i = this;
                    this.hasHidden = !1, this.visiableChangeTimeout = 0;
                    var n = t.userAgent.toLocaleLowerCase();
                    !/safari/.test(n) || /chrome/.test(n) || /chromium/.test(n) || (e.addEventListener("focus", function(e) {
                        return i.focus(e)
                    }, !0), e.addEventListener("blur", function(e) {
                        return i.blur(e)
                    }, !0), e.addEventListener("mousedown", function(e) {
                        return i.mouseDown(e)
                    }, !0), e.addEventListener("visibilitychange", function() {
                        return i.visibilityChange()
                    }, !0))
                }
                e.prototype.blur = function(e) {
                    var t = e.target;
                    t.hasAttribute("tabindex") && (t.hasAttribute(r) || this.hasHidden) && (t.classList.contains(s) && t.classList.remove(s), t.removeAttribute(r))
                }, e.prototype.focus = function(e) {
                    var t = e.target;
                    t.hasAttribute("tabindex") && (t.hasAttribute(r) || this.hasHidden) && (t.classList.contains(s) || t.classList.add(s))
                }, e.prototype.mouseDown = function(e) {
                    if (e.composedPath) {
                        var t = e.composedPath().filter(function(e) {
                            return e.hasAttribute && e.hasAttribute("tabindex")
                        });
                        t.forEach(function(e) {
                            return e.setAttribute(r, "")
                        })
                    }
                }, e.prototype.visibilityChange = function() {
                    var e = this;
                    "hidden" === document.visibilityState ? this.hasHidden = !0 : (window.clearTimeout(this.visiableChangeTimeout), this.visiableChangeTimeout = window.setTimeout(function() {
                        e.hasHidden = !1
                    }, 700))
                };
                var t, a;
                return e = i.__decorate([n.injectable, i.__param(0, n.inject(o.DOCUMENT)), i.__param(1, n.inject(o.NAVIGATOR)), i.__metadata("design:paramtypes", ["function" == typeof(t = "undefined" != typeof Document && Document) ? t : Object, "function" == typeof(a = "undefined" != typeof Navigator && Navigator) ? a : Object])], e)
            }();
        t.OutlineSafari = a
    }), define("modules/perf-log/perf-log.service", ["require", "exports", "tslib", "../window/token", "../query/query.service", "@searchfe/inject-js", "../async-cache/async-cache-item.service", "../webb/instance.service"], function(e, t, i, n, o, r, s, a) {
        "use strict";
        t.__esModule = !0, t.PerfLog = void 0;
        var c = function() {
            function e(e, t, i, n, o) {
                var r = /msie [6-8]\b/.test(o.userAgent.toLowerCase());
                r || (this.wwwWebb = i.getInstance("1_87"), this.query = e, this.sendFsLog(t, n), this.sendAsyncLog(t))
            }
            e.prototype.sendFsLog = function(e, t) {
                var i;
                if (e && e.log ? i = e.log.waittime : t && (i = t.resultEnd), i) {
                    var n = this.query.get("qid");
                    this.wwwWebb.updateOption({
                        lid: n
                    }), this.wwwWebb.sendPfLog({
                        fsTime: i
                    }, {
                        env: "pc"
                    }, {
                        group: "fs"
                    })
                }
            }, e.prototype.sendAsyncLog = function(e) {
                if (e && e.log) {
                    var t = this.query.get("qid");
                    this.wwwWebb.updateOption({
                        lid: t
                    });
                    var i = e.log,
                        n = {
                            cusReq: 1 === i.frcache ? 1 : i.ntime,
                            req: i.ntime,
                            domTime: i.domtime,
                            waitTime: i.waittime
                        };
                    this.wwwWebb.sendPfLog(n, {
                        env: "pc"
                    }, {
                        group: "async"
                    })
                }
            };
            var t, c, d, l;
            return e = i.__decorate([r.injectable, i.__param(3, r.inject(n.PERF_SYNC_DATA)), i.__param(4, r.inject(n.NAVIGATOR)), i.__metadata("design:paramtypes", ["function" == typeof(t = "undefined" != typeof o.Query && o.Query) ? t : Object, "function" == typeof(c = "undefined" != typeof s.AsyncCacheItem && s.AsyncCacheItem) ? c : Object, "function" == typeof(d = "undefined" != typeof a.WebbInstance && a.WebbInstance) ? d : Object, Object, "function" == typeof(l = "undefined" != typeof Navigator && Navigator) ? l : Object])], e)
        }();
        t.PerfLog = c
    }), define("modules/perf-sync-log/perf-sync-log.service", ["require", "exports", "tslib", "../window/token", "../query/query.service", "@searchfe/inject-js", "../webb/instance.service"], function(e, t, i, n, o, r, s) {
        "use strict";
        t.__esModule = !0, t.PerfSyncLog = void 0;
        var a = function() {
            function e(e, t, i, n, o) {
                var r = /msie [6-8]\b/.test(o.userAgent.toLowerCase());
                r || (this.wwwWebb = t.getInstance("1_87"), this.query = e, this.sendSyncLog(i, n))
            }
            e.prototype.sendSyncLog = function(e, t) {
                if (e && e.now && e.timing) {
                    var i = t;
                    if (i) {
                        var n = this.query.get("qid");
                        this.wwwWebb.updateOption({
                            lid: n
                        });
                        var o = e.timing;
                        if (i.req = o.responseStart - o.requestStart, i.resp = o.responseEnd - o.responseStart, i.tcp = o.connectEnd - o.connectStart, i.domLoading = o.domLoading - o.navigationStart, i.domReady = o.domContentLoadedEventStart - o.navigationStart, i.domTime = o.domContentLoadedEventStart - o.domLoading, e.memory) {
                            var r = e.memory;
                            i.usedJSHeapSize = r.usedJSHeapSize / 1024, i.usedJSHeapRate = r.usedJSHeapSize / r.totalJSHeapSize * 100
                        }
                        if (e.getEntriesByType) {
                            var s = e.getEntriesByType("navigation");
                            s && s[0] && (i.pageSizeGzip = s[0].encodedBodySize / 1024, i.pageSize = s[0].decodedBodySize / 1024)
                        }
                        this.wwwWebb.sendPfLog(i, {
                            env: "pc"
                        }, {
                            group: "sync"
                        })
                    }
                }
            };
            var t, a, c, d;
            return e = i.__decorate([r.injectable, i.__param(2, r.inject(n.PERFORMANCE)), i.__param(3, r.inject(n.PERF_SYNC_DATA)), i.__param(4, r.inject(n.NAVIGATOR)), i.__metadata("design:paramtypes", ["function" == typeof(t = "undefined" != typeof o.Query && o.Query) ? t : Object, "function" == typeof(a = "undefined" != typeof s.WebbInstance && s.WebbInstance) ? a : Object, "function" == typeof(c = "undefined" != typeof Performance && Performance) ? c : Object, Object, "function" == typeof(d = "undefined" != typeof Navigator && Navigator) ? d : Object])], e)
        }();
        t.PerfSyncLog = a
    }), define("modules/molecule/molecule.service", ["require", "exports", "tslib", "@searchfe/inject-js", "../san-option/san-option.provider", "../san-option/san-option.service", "../require/require"], function(e, t, i, n, o, r, s) {
        "use strict";
        t.__esModule = !0, t.MoleculeService = void 0;
        var a = function() {
            function e(e, t) {
                this.moleList = [], this.moleModIds = [], this.require = t, e.addProvider(r.SanOption, o.SanOptionProvider);
                var i = Array.prototype.slice.call($(".result-op[m-name],.result-molecule[m-name]"));
                this.execute(i, e)
            }
            e.prototype.execute = function(e, t) {
                var r = this;
                e.forEach(function(e) {
                    var s = $(e),
                        a = s.attr("m-name"),
                        c = s.attr("m-path"),
                        d = s.children().get(0);
                    if (a && c && d) {
                        var l = {};
                        l[a] = c, bds.amd.addPaths(l), r.moleModIds.push(a), r.require([a], function(e) {
                            if (e["default"]) {
                                o.SanOptionProvider.setElement(d);
                                var s = e["default"],
                                    a = n.getDependencies(s),
                                    c = [];
                                a.forEach(function(e) {
                                    c.push(t.create(e))
                                });
                                var l = new(s.bind.apply(s, i.__spreadArrays([void 0], c)));
                                r.moleList.push(l)
                            }
                        })
                    }
                })
            }, e.prototype.clearModule = function() {
                for (var e = this.moleModIds.length, t = /aladdin-san\//, i = [], n = "", o = 0; e > o; o++) n = this.moleModIds[o], t.test(n) && i.push(n);
                "function" == typeof this.require.clearModule && this.require.clearModule(i), this.moleModIds = []
            }, e.prototype.destroy = function() {
                this.moleList.forEach(function(e) {
                    e.detached && e.detached()
                }), this.moleList = [], this.clearModule()
            };
            var t, a;
            return e = i.__decorate([n.injectable, i.__param(0, n.inject("RESULT_DI")), i.__param(1, n.inject(s.REQUIRE_TOKEN)), i.__metadata("design:paramtypes", ["function" == typeof(t = "undefined" != typeof n.Container && n.Container) ? t : Object, "function" == typeof(a = "undefined" != typeof s.Require && s.Require) ? a : Object])], e)
        }();
        t.MoleculeService = a
    }), define("modules/perf-resource-log/perf-resource-log.service", ["require", "exports", "tslib", "@searchfe/inject-js", "../window/token", "../query/query.service", "../webb/instance.service", "../monitor/log-send"], function(e, t, i, n, o, r, s, a) {
        "use strict";
        t.__esModule = !0, t.PerfResourceLog = void 0;
        var c;
        ! function(e) {
            e[e.ttf = 0] = "ttf", e[e.eot = 1] = "eot", e[e.woff = 2] = "woff", e[e.woff2 = 3] = "woff2"
        }(c || (c = {}));
        var d;
        ! function(e) {
            e[e["/wb.gif"] = 0] = "/wb.gif", e[e["/w.gif"] = 1] = "/w.gif", e[e["/v.gif"] = 2] = "/v.gif", e[e["/mwb.gif"] = 3] = "/mwb.gif", e[e["/mwb2.gif"] = 4] = "/mwb2.gif", e[e["/tc"] = 5] = "/tc", e[e["/webb.gif"] = 6] = "/webb.gif", e[e["/tj.gif"] = 7] = "/tj.gif", e[e["/wbcj.gif"] = 8] = "/wbcj.gif"
        }(d || (d = {}));
        var l = 102400,
            u = function() {
                function e(e, t, i) {
                    this.webb = t, this.query = e, this.jsList = [], this.cssList = [], this.imgList = [], this.fontList = [], this.bigImgList = [], this.imgHostInfo = {};
                    try {
                        this.sendLog(i)
                    } catch (n) {}
                }
                e.prototype.getUrlObj = function(e) {
                    var t = /(https?:)?\/\/([^\/]*)(\/[^?]*)/.exec(e);
                    if (!t) return {};
                    var i = t[3],
                        n = i.split(".").pop(),
                        o = "/" + i.split("/").pop(),
                        r = {
                            pathname: i,
                            host: t[2],
                            lastpathname: o,
                            ext: n
                        };
                    return r
                }, e.prototype.sendLog = function(e) {
                    if (e && e.getEntriesByType) {
                        var t = e.getEntriesByType("navigation"),
                            i = e.getEntriesByType("resource");
                        if (t && t[0] && i) {
                            var n;
                            n = this.webb.getInstance(bds.comm.ishome ? "1_79" : "1_87");
                            var o = this.query.get("qid") || bds.comm.qid || bds.comm.queryId;
                            n.updateOption({
                                lid: o
                            }), this.setResourceMetrics(i);
                            var r = this.getPageSizeMetrics(t[0]),
                                s = this.getResourceSizeMetrics();
                            if (r && s) {
                                var a = Object.assign(r, s);
                                n.sendPfLog(a, {}, {
                                    group: "resource"
                                }), this.sendIdleLog(n)
                            }
                            this.sendImgHostInfo(n), this.sendImgLoadTime()
                        }
                    }
                }, e.prototype.getTplName = function(e) {
                    for (var t = ""; e && 1 === e.nodeType && e !== e.parentNode;) {
                        var i = e.className;
                        if (-1 !== i.indexOf("result-op") || -1 !== i.indexOf("result")) {
                            t = e.getAttribute("tpl");
                            break
                        }
                        if (e === document.body) break;
                        e = e.parentNode
                    }
                    return t
                }, e.prototype.sendIdleLog = function() {
                    var e = this;
                    if (this.bigImgList.length) {
                        var t = [];
                        try {
                            this.bigImgList.forEach(function(i) {
                                if (bds.comm.ishome) t.push({
                                    msg: i.name,
                                    tplName: ""
                                });
                                else {
                                    var n = $('img[src="' + i.name + '"]'),
                                        o = "";
                                    n[0] && (o = e.getTplName(n[0])), t.push({
                                        msg: i.name,
                                        tplName: o
                                    })
                                }
                            }), a.send({
                                info: t,
                                group: "resBigimg",
                                dim: {}
                            }, "et_comm")
                        } catch (i) {}
                    }
                }, e.prototype.getPageSizeMetrics = function(e) {
                    if (!this.shouldSendLog(e)) return null;
                    var t = e.decodedBodySize / 1024,
                        i = e.transferSize / 1024,
                        n = e.encodedBodySize / 1024,
                        o = i - n;
                    return {
                        pageSize: +t.toFixed(1),
                        pageTransferSize: +i.toFixed(1),
                        pageSizeGzip: +n.toFixed(1),
                        httpHeaderSize: +o.toFixed(1)
                    }
                }, e.prototype.setResourceMetrics = function(e) {
                    for (var t = e.length, i = 0; t > i; i++) switch (e[i].initiatorType) {
                        case "script":
                            this.addScript(e[i]);
                            break;
                        case "css":
                            this.addCss(e[i]);
                            break;
                        case "img":
                            this.addImg(e[i]);
                            break;
                        case "link":
                            this.addLink(e[i])
                    }
                }, e.prototype.getResourceSizeMetrics = function() {
                    return i.__assign(i.__assign(i.__assign(i.__assign(i.__assign({}, this.getNumAndSize("js")), this.getNumAndSize("css")), this.getNumAndSize("img")), this.getNumAndSize("bigImg")), this.getNumAndSize("font"))
                }, e.prototype.shouldSendLog = function(e) {
                    return void 0 === e.decodedBodySize || void 0 === e.transferSize ? !1 : !0
                }, e.prototype.addScript = function(e) {
                    var t = this.getUrlObj(e.name).ext;
                    "js" === t && this.jsList.push(e)
                }, e.prototype.addCss = function(e) {
                    var t = this.getUrlObj(e.name).ext;
                    t && c.hasOwnProperty(t) ? this.fontList.push(e) : this.addImg(e)
                }, e.prototype.addLink = function(e) {
                    var t = this.getUrlObj(e.name).ext;
                    "css" === t ? this.cssList.push(e) : "js" === t && this.jsList.push(e)
                }, e.prototype.addImg = function(e) {
                    var t = this.getUrlObj(e.name).lastpathname;
                    d.hasOwnProperty(t) || (this.imgList.push(e), this.setImgHostInfo(e), e.decodedBodySize && e.decodedBodySize > l && this.bigImgList.push(e))
                }, e.prototype.getNumAndSize = function(e) {
                    var t = {},
                        i = e + "Num",
                        n = e + "Size",
                        o = e + "TransferSize",
                        r = e + "CacheRate",
                        s = e + "Duration";
                    t[i] = 0, t[n] = 0, t[o] = 0;
                    var a = 0;
                    if (this[e + "List"].forEach(function(e) {
                            t[i]++, t[n] += (e.decodedBodySize || 0) / 1024, t[o] += (e.transferSize || 0) / 1024, a += e.duration
                        }), t[s] = t[i] > 0 ? a / t[i] : 0, t[n]) {
                        var c = t[n] - t[o];
                        t[r] = c >= 0 ? 100 * c / t[n] : 0
                    }
                    for (var d = 0, l = Object.keys(t); d < l.length; d++) {
                        var u = l[d];
                        t[u] && (t[u] = +t[u].toFixed(1))
                    }
                    return t
                }, e.prototype.setImgHostInfo = function(e) {
                    var t = this.getUrlHost(e.name);
                    if (t) {
                        var i = this.imgHostInfo,
                            n = (e.decodedBodySize || 0) / 1024,
                            o = (e.transferSize || 0) / 1024,
                            r = e.duration || 0;
                        i[t] ? (i[t].num++, i[t].size += n, i[t].transferSize += o, i[t].duration += r) : i[t] = {
                            num: 1,
                            size: n,
                            transferSize: o,
                            duration: r
                        }
                    }
                }, e.prototype.sendImgLoadTime = function() {
                    var e = this;
                    this.imgList.forEach(function(t) {
                        var i = t.duration;
                        if (i >= 1e3) {
                            var n = {
                                info: {
                                    msg: t.name,
                                    connectT: t.connectEnd - t.connectStart,
                                    domainLookupT: t.domainLookupEnd - t.domainLookupStart,
                                    duration: i,
                                    requestT: t.responseStart - t.requestStart,
                                    responseT: t.responseEnd - t.responseStart
                                },
                                dim: {
                                    host: e.getUrlHost(t.name),
                                    range: e.getTimeRange(i)
                                },
                                group: "imgLoadSlow"
                            };
                            a.send(n, "et_comm")
                        }
                    })
                }, e.prototype.sendImgHostInfo = function(e) {
                    var t = this;
                    Object.keys(this.imgHostInfo).forEach(function(i) {
                        var n = t.imgHostInfo[i],
                            o = n.duration;
                        n.duration = o / n.num, e.sendPfLog(n, {
                            host: i
                        }, {
                            group: "imgHostInfo"
                        })
                    })
                }, e.prototype.getTimeRange = function(e) {
                    return e >= 1e3 && 1600 > e ? "1_1.6s" : e >= 1600 && 2e3 > e ? "1.6_2s" : e >= 2e3 && 5e3 > e ? "2_5s" : "5s"
                }, e.prototype.getUrlHost = function(e) {
                    if (!e) return "";
                    var t = /https?:\/\/([^\/]*)\/.*/,
                        i = t.exec(e);
                    return i && i[1] ? i[1] : ""
                };
                var t, u, p;
                return e = i.__decorate([n.injectable, i.__param(2, n.inject(o.PERFORMANCE)), i.__metadata("design:paramtypes", ["function" == typeof(t = "undefined" != typeof r.Query && r.Query) ? t : Object, "function" == typeof(u = "undefined" != typeof s.WebbInstance && s.WebbInstance) ? u : Object, "function" == typeof(p = "undefined" != typeof Performance && Performance) ? p : Object])], e)
            }();
        t.PerfResourceLog = u
    }), define("modules/head-gradient/head-gradient.service", ["require", "exports", "tslib", "@searchfe/inject-js", "../window/token", "../peak-style/peak-style.service", "../event/event"], function(e, t, i, n, o, r, s) {
        "use strict";
        t.__esModule = !0, t.HeadGradient = void 0, s = i.__importDefault(s);
        var a = function() {
            function e(e, t, i) {
                var n = this;
                this._styleText = "", this.useStyle = !0, this.styleTpl = {
                    direction: "bottom",
                    distance: [15, 32, 50, 70]
                }, this.node = e.getElementById("head"), this.peakStyle = i;
                var o = t.userAgent.match(/MSIE[^;]+;/) || [],
                    r = parseInt(o[0] ? o[0].replace(/(MSIE|;)/g, "") : "10", 10);
                this.canIWork = r >= 10, s["default"].on("pz.headgradient", function(e) {
                    var t = e.data,
                        i = t.target,
                        o = t.defer;
                    n.peakStyle.get("isHit") && n.gradientAnimate(i, o)
                })
            }
            e.prototype.styleText = function() {
                return this._styleText
            }, e.prototype.setStyleText = function(e) {
                this.canIWork && (this._styleText = e, this.node.style.background = this.useStyle ? this.styleText() : "")
            }, e.prototype.dataToStyle = function(e) {
                var t = this.styleTpl,
                    i = t.direction,
                    n = t.distance,
                    o = e.map(function(e, t) {
                        return "rgba(" + e.map(function(e, t) {
                            return 3 === t ? e : Math.round(e)
                        }).join(", ") + ") " + (n[t] ? n[t] + "px" : "")
                    });
                return "linear-gradient(to " + i + ", " + o.join(", ") + ")"
            }, e.prototype.styleToData = function(e) {
                var t = e.match(/rgba\([^\)]+/g) || [];
                return t.map(function(e) {
                    var t = e.replace("rgba(", "").split(",");
                    return t.map(function(e) {
                        return parseFloat(e)
                    })
                })
            }, e.prototype.initStyle = function(e) {
                var t = e.split(",").map(function(e) {
                    return parseInt(e, 10)
                });
                return [1, .85, .6, 0, 0].map(function(e) {
                    return i.__spreadArrays(t, [e])
                })
            }, e.prototype.gradientAnimate = function(e, t) {
                var i = this;
                if (this.canIWork) {
                    var n, o = this.styleToData(this.styleText()),
                        r = o.map(function(t, i) {
                            var n = e[i] || t;
                            return t.map(function(e, t) {
                                return (n[t] || 0 === n[t] ? n[t] : e) - e
                            })
                        }),
                        s = 0,
                        a = 0,
                        c = function(e) {
                            void 0 === e && (e = 0);
                            var d = n ? e - n : 0;
                            s += d, n = e;
                            var l = t && t > d ? d / t : 1;
                            a += l, o = o.map(function(e, t) {
                                return e.map(function(e, i) {
                                    return e + r[t][i] * l
                                })
                            }), i.setStyleText(i.dataToStyle(o)), t > s && 1 > a && window.requestAnimationFrame && window.requestAnimationFrame(c)
                        };
                    c()
                }
            }, e.prototype.updated = function() {
                var e = this.peakStyle.get("isHit"),
                    t = e ? this.dataToStyle(this.initStyle(this.peakStyle.get("color"))) : "";
                this.setStyleText(t)
            }, e.prototype.show = function() {
                this.useStyle = !0, this.setStyleText(this.styleText())
            }, e.prototype.hide = function() {
                this.useStyle = !1, this.setStyleText(this.styleText())
            };
            var t, a, c;
            return e = i.__decorate([n.injectable, i.__param(0, n.inject(o.DOCUMENT)), i.__param(1, n.inject(o.NAVIGATOR)), i.__param(2, n.inject(r.PeakStyle)), i.__metadata("design:paramtypes", ["function" == typeof(t = "undefined" != typeof Document && Document) ? t : Object, "function" == typeof(a = "undefined" != typeof Navigator && Navigator) ? a : Object, "function" == typeof(c = "undefined" != typeof r.PeakStyle && r.PeakStyle) ? c : Object])], e)
        }();
        t.HeadGradient = a
    }), define("modules/peak-style/peak-style.service", ["require", "exports", "tslib", "@searchfe/inject-js", "../json-data/json-data"], function(e, t, i, n, o) {
        "use strict";
        t.__esModule = !0, t.PeakStyle = void 0;
        var r = function() {
            function e() {
                this.data = {}
            }
            return e.prototype.updated = function() {
                this.data = o.extractData("peak-style-data")
            }, e.prototype.get = function(e) {
                return this.data[e]
            }, e = i.__decorate([n.injectable, i.__metadata("design:paramtypes", [])], e)
        }();
        t.PeakStyle = r
    }), define("modules/select-search/select-search.service", ["require", "exports", "tslib", "@searchfe/inject-js", "../window/token", "../log/log.service"], function(e, t, i, n, o, r) {
        "use strict";
        t.__esModule = !0, t.SelectSearch = void 0;
        var s = function() {
            function e(e, t) {
                this.isTipsClick = !1;
                var i = this;
                i.isTipsClick = !1, i.document = e, i.logServe = t, i.selectTips = void 0, $("#wrapper").on("click", function() {
                    i.isTipsClick || i.hideNode(), i.isTipsClick = !1
                }), $("#content_left").on("mouseup", function(e) {
                    i.mouseupAction(e)
                }), $("#content_right").on("mouseup", function(e) {
                    i.mouseupAction(e)
                })
            }
            e.prototype.escapeHtml = function(e) {
                return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }, e.prototype.mouseupAction = function(e) {
                try {
                    var t = this.getSelectionContent(),
                        i = t.selectedText,
                        n = t.rangePos,
                        o = this.calculateStr(i);
                    76 >= o && this.selectSearchShow(i, n, e.target)
                } catch (r) {
                    console.error(r)
                }
            }, e.prototype.calculateStr = function(e) {
                for (var t = e.length, i = 0, n = 0; t > n; n++) {
                    var o = e.charAt(n);
                    if (i = null !== o.match(/[^\x00-\xff]/gi) ? i + 2 : i + 1, i > 76) break
                }
                return i
            }, e.prototype.getSelectionContent = function() {
                var e, t = window.getSelection(),
                    i = {},
                    n = "";
                return t && 0 !== t.rangeCount && (e = t.getRangeAt(0), i = e && e.getBoundingClientRect(), n = t.toString()), {
                    rangePos: i,
                    selectedText: n
                }
            }, e.prototype.selectSearchShow = function(e, t, i) {
                var n = this;
                if (e && e.length > 0 && 58923 !== e.charCodeAt(0)) {
                    var o = document.body.scrollTop || document.documentElement.scrollTop;
                    if ($(".selected-search-box").length) $(".selected-search-box span").text(e), $(".selected-search-box a").attr("href", "//www.baidu.com/s?rsv_dl=selectedsearch&wd=" + encodeURIComponent(e));
                    else {
                        var r = $('\n                     <div class="new-pmd selected-search-box">\n                         <a target="_blank"\n                             href="//www.baidu.com/s?rsv_dl=selectedsearch&wd=' + encodeURIComponent(e) + '">\n                         <span>' + n.escapeHtml(e) + '</span><i class="c-icon">&#xe608;</i></a>\n                     </div>');
                        $("#wrapper_wrapper").append(r)
                    }
                    var s = $(".selected-search-box");
                    s.css({
                        display: "none",
                        top: t.top + o - 10 - 32
                    });
                    var a = document.body.scrollLeft || document.documentElement.scrollLeft,
                        c = document.getElementById("content_left"),
                        d = c && c.getBoundingClientRect().left || 0;
                    if (t.height < 25 && t.right - d < 555) a += t.left;
                    else {
                        var l = s.outerWidth() || 0;
                        a += t.right - l + 3
                    }
                    s.css({
                        display: "block",
                        left: a
                    }), s.on("click", function() {
                        n.isTipsClick = !0
                    }), this.isTipsClick = !0, this.selectTips = s, this.sendLog(i, e)
                }
            }, e.prototype.sendLog = function(e, t) {
                for (var i = e;
                    "BODY" !== i.tagName && !i.getAttribute("tpl") && i.parentElement;) {
                    var n = i.parentElement;
                    i = n
                }
                var o = {
                    fm: "behs",
                    txt_l: t.length,
                    action_name: "selectSearchShow",
                    r_index: i && i.id ? i.id : ""
                };
                this.logServe && this.logServe.send(o)
            }, e.prototype.hideNode = function() {
                var e = $(".selected-search-box");
                e.length && e.hide(), this.selectTips = void 0
            }, e.prototype.destroy = function() {
                var e = $(".selected-search-box");
                e.length && e.remove(), this.selectTips = void 0
            };
            var t, s;
            return e = i.__decorate([i.__param(0, n.inject(o.DOCUMENT)), i.__metadata("design:paramtypes", ["function" == typeof(t = "undefined" != typeof Document && Document) ? t : Object, "function" == typeof(s = "undefined" != typeof r.Log && r.Log) ? s : Object])], e)
        }();
        t.SelectSearch = s
    }), define("modules/conf/conf.service", ["require", "exports", "tslib", "@searchfe/inject-js", "../json-data/json-data"], function(e, t, i, n, o) {
        "use strict";
        t.__esModule = !0, t.Conf = void 0;
        var r = function() {
            function e() {}
            return e.prototype.updated = function() {
                this.data = o.extractData("conf-data")
            }, e.prototype.get = function(e) {
                return this.data[e]
            }, e = i.__decorate([n.injectable], e)
        }();
        t.Conf = r
    }), ! function(A) {
        function clickDebug() {}

        function bindP5() {
            var item, index = (bds.comm.pageNum - 1) * bds.comm.pageSize + 1,
                leftItems = contentLeft && contentLeft.children || [],
                rightItems = contentRight && contentRight.children || [],
                topItems = contentTop && contentTop.children || [],
                isResult = function(e) {
                    return 1 === e.nodeType && e.className ? /result-molecule/.test(e.className) ? !1 : /\bresult(\-op)?\b/.test(e.className) : !1
                },
                isFrame = function(e) {
                    return 1 == e.nodeType && e.className && /\bc\-frame\b/.test(e.className)
                },
                setClickData = function(wrap, data) {
                    var sData = wrap.getAttribute("data-click") || "{}";
                    try {
                        var oData = eval("(" + sData + ")");
                        sData = $.stringify($.extend(oData, data)), wrap.setAttribute("data-click", sData)
                    } catch (e) {
                        clickDebug(e)
                    }
                },
                bindP5ClickData = function(e) {
                    for (var t = 0, i = e.length; i > t; t++)
                        if (item = e[t], isResult(item)) setClickData(item, {
                            p5: index++
                        });
                        else if (isFrame(item)) try {
                        for (var n = item.children[0].children, o = 0, r = n.length; r > o; o++) {
                            var s = n[o];
                            isResult(s) && setClickData(s, {
                                p5: index++
                            })
                        }
                    } catch (a) {
                        clickDebug(a)
                    }
                    index = (bds.comm.pageNum - 1) * bds.comm.pageSize + 1
                };
            bindP5ClickData(leftItems), bindP5ClickData(rightItems), bindP5ClickData(topItems)
        }

        function getXPath(e, t, i) {
            if (i = i || [], t = t || document, e === t) return i;
            if (e.parentNode !== t && (i = getXPath(e.parentNode, t, i)), e.previousSibling) {
                var n = 1,
                    o = e.previousSibling;
                do 1 == o.nodeType && o.nodeName == e.nodeName && n++, o = o.previousSibling; while (o)
            }
            return 1 == e.nodeType && i.push(e.nodeName.toLowerCase() + (n > 1 ? n : "")), i
        }

        function bindLogEvent() {
            $body = $("body"), $body.on("mousedown", function(e) {
                var e = window.event || e,
                    t = e.srcElement || e.target,
                    i = $(t);
                try {
                    for (var n, o, r = i; r.length && !(r.hasClass("result") || r.hasClass("result-op") || r.hasClass("xpath-log"));) r = r.parent();
                    if (!r.length) return;
                    r.hasClass("result-op") ? n = "alop" : r.hasClass("result") && (n = "as"), o = r.get(0);
                    var s = getXPath(t, o);
                    check(s, t, o) && log(s, t, o, n)
                } catch (e) {
                    clickDebug(e)
                }
            })
        }

        function getType(e, t, i) {
            fixPcTypeNode(t, i);
            for (var n = t, o = Object.getOwnPropertyNames(LOG_CLASS).map(function(e) {
                    return LOG_CLASS[e]
                }), r = o.length, s = C_LOG_CLASS, a = s.length, c = e.join(" "), d = 0; n !== i;) {
                for (d = 0; r > d; d++)
                    if ($(n).hasClass("OP_LOG_" + o[d])) return o[d].toLowerCase();
                for (d = 0; a > d; d++)
                    if ($(n).hasClass("c-" + s[d])) return s[d];
                n = n.parentNode
            }
            return /\bh3\d*\b/.test(c) ? "title" : /\ba\d*\b/.test(c) ? /\bimg\d*\b/.test(c) ? "img" : "link" : /\b(input|select|button|textarea|datalist)\d*\b/.test(c) ? "input" : /\blabel\d*\b/.test(c) && t.getElementsByTagName("input").length > 0 ? "input" : ""
        }

        function fixPcTypeNode(e, t) {
            for (var i = null, n = "", o = ""; e !== t && null === i;) n = $(e).attr("class") || "", n.replace(new RegExp(".*(" + wiseClassPrefix + "\\w+).*"), function(e, t) {
                o = t
            }), o && (i = e), e = e.parentNode;
            var r = n.replace(o, ""),
                s = "",
                a = "";
            if (o && n !== o) {
                switch (s = o.replace(wiseClassPrefix, "")) {
                    case WISE_LOG_CLASS.TAB:
                        a = LOG_CLASS.BTN;
                        break;
                    case WISE_LOG_CLASS.BTN:
                        a = LOG_CLASS.BTN;
                        break;
                    case WISE_LOG_CLASS.SF:
                        a = LOG_CLASS.LINK;
                        break;
                    case WISE_LOG_CLASS.MSC:
                        a = LOG_CLASS.BTN;
                        break;
                    case WISE_LOG_CLASS.VD:
                        a = LOG_CLASS.BTN;
                        break;
                    case WISE_LOG_CLASS.OTHER:
                        a = LOG_CLASS.OTHERS;
                        break;
                    default:
                        a = LOG_CLASS.OTHERS
                }
                $(i).attr("class", r + " " + classPrefix + a)
            }
        }

        function check(e, t, i) {
            return A.LOGTOOL ? (A.LOGTOOL.call(t, e, t, i), !1) : !0
        }

        function log(e, t, i, n) {
            if (null == t.getAttribute("data-nolog")) {
                var o = getType(e, t, i);
                if (!o) return !1;
                if ("title" == o && !/\ba\d*\b/.test(e)) return !1;
                var r = "http://nourl.ubs.baidu.com",
                    s = i.getAttribute("mu") || r;
                if (s == r) {
                    var a = i.getElementsByTagName("h3");
                    if (a && a[0]) {
                        var c = a[0].getElementsByTagName("a");
                        s = c && c[0] ? c[0].href : s
                    }
                }
                var d, l = e.length,
                    u = t,
                    p = i.getAttribute("srcid"),
                    m = "",
                    f = 1 == t.nodeType ? t.tagName.toLowerCase() : "";
                if ("input" == o)
                    if (/input|textarea/.test(f)) m = t.value, t.type && "password" == t.type.toLowerCase() && (m = "");
                    else if (/select|datalist/.test(f)) {
                    if (t.children.length > 0) {
                        var h = t.selectedIndex || 0;
                        m = t.children[h > -1 ? h : 0].innerHTML
                    }
                } else m = t.innerHTML || t.value || "";
                else if ("img" == f && (m = t.title), !m)
                    for (; l > 0;) {
                        if (l--, /^a\d*\b/.test(e[l])) {
                            if (d = u.href, m = u.innerHTML, null != u.getAttribute("data-nolog")) return;
                            break
                        }
                        if (u.className && /OP_LOG_/.test(u.className)) {
                            m = u.innerHTML;
                            break
                        }
                        u = u.parentNode
                    }
                m = $.trim(m), d && "#" !== d.slice(-1) && /^http/.test(d) || (d = s);
                var g = {
                        rsv_xpath: e.join("-") + "(" + o + ")",
                        title: m,
                        url: d,
                        rsv_height: i.offsetHeight,
                        rsv_width: i.offsetWidth,
                        rsv_tpl: i.getAttribute("tpl")
                    },
                    b = {
                        url: 1,
                        title: 1
                    };
                i.id && i.id.match(/^\d+$/) && (g.p1 = i.id), p && (g.rsv_srcid = p);
                var v, w, _;
                u = t;
                do {
                    if (null != u.getAttribute("data-nolog")) return;
                    if (v = u.getAttribute("data-click")) try {
                        v = new Function("return " + v)();
                        for (w in v) "fm" == w && null === v.fm && (_ = !0), v.hasOwnProperty(w) && ("undefined" == typeof g[w] || b[w]) && (g[w] = v[w])
                    } catch (y) {
                        clickDebug(y)
                    }
                    u = u.parentNode
                } while (u && u !== i.parentNode);
                for (var x in g) null === g[x] && delete g[x];
                if ("title" == o ? "mu" in g && delete g.mu : g.mu || (g.mu = s), _) "fm" in g && delete g.fm;
                else if ("input" == o && (g.fm = "beha", g.url = r), g.fm || (g.fm = n), !g.fm) return;
                window.c(g)
            }
        }
        var baidu = window.baidu,
            classPrefix = "OP_LOG_",
            wiseClassPrefix = "WA_LOG_",
            LOG_CLASS = {
                TITLE: "TITLE",
                LINK: "LINK",
                IMG: "IMG",
                BTN: "BTN",
                INPUT: "INPUT",
                OTHERS: "OTHERS"
            },
            WISE_LOG_CLASS = {
                TAB: "TAB",
                BTN: "BTN",
                SF: "SF",
                MSC: "MSC",
                VD: "VD",
                OTHER: "OTHER"
            },
            C_LOG_CLASS = ["btn"],
            contentLeft, contentRight, contentTop;
        window.initResultClickLog = function() {
            if (contentLeft = $("#content_left").get(0), contentRight = $("#con-ar").get(0), contentTop = $("#con-at").get(0), A.has) {
                var e, t = $(".result-op").get();
                $.each(t, function(t, i) {
                    (e = i.getAttribute("srcid")) && A.ids.push([i.id, e])
                })
            }
            bindP5()
        }, $(document).ready(function() {
            bindLogEvent()
        })
    }(window.bds.aladdin);
for (ai in al_arr) al_arr[ai]();
$(document).ready(function() {
    var e;
    $(document).on("click", ".t>a,.op-se-listen-recommend", function(t) {
        t = window.event || t;
        var i = $("#wrapper_wrapper"),
            n = $(this).closest(".c-container"),
            o = n.length ? n.find(".c-recommend").eq(0) : [],
            r = n.length ? n.find(".wnor-fanli-wrap") : [];
        !t.ctrlKey && (o.length && "none" === o.css("display") || r.length && "none" === r.css("display")) && (e = setTimeout(function() {
            i.find(".c-recommend").hide(), o.show(), i.find(".wnor-fanli-wrap").hide(), r.show()
        }, 150))
    }), $(window).on("swap_begin", function() {
        this.clearTimeout(e)
    })
}), window.onunload = function() {}, bds.se.openime = function(e) {
    window.bdime ? openIme.set("py", !0) : $.ajax({
        cache: !0,
        dataType: "script",
        url: "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/ime_c5abb66.js",
        success: function() {
            e && openIme.set("py", !0)
        }
    })
}, bds && bds.comm && !bds.comm.containerSize && (bds.comm.containerSize = "s"), bds.util.setContainerWidth = function() {
    var e = $("#container"),
        t = $("#wrapper"),
        i = bds.util.getWinWidth(),
        n = bds.comm.containerSize,
        o = 1217;
    if (o > i) e.removeClass("container_l container_xl").addClass("container_s"), t.removeClass("wrapper_l").addClass("wrapper_s"), bds.comm.containerSize = "s";
    else {
        if (!(i >= o)) return;
        e.removeClass("container_s container_xl").addClass("container_l"), t.removeClass("wrapper_s").addClass("wrapper_l"), bds.comm.containerSize = "l"
    }
    n != bds.comm.containerSize && $(window).trigger("container_resize", bds.comm.containerSize)
}, bds.util.setFootStyle = function() {
    this.init(), this.bindEvent()
}, $.extend(bds.util.setFootStyle.prototype, {
    ie6: bds.comm.upn && "msie" === bds.comm.upn.browser && 6 == bds.comm.upn.ie,
    init: function() {
        var e = $("#foot");
        if (e.addClass("foot_fixed_bottom"), this.ie6) {
            var t = $(window).height() + $(window).scrollTop() - e.outerHeight(!0);
            e.css("top", t + "px")
        }
    },
    setFixedIe6: function() {
        var e = $("#foot"),
            t = $(window).height() + $(window).scrollTop() - e.outerHeight(!0);
        e.css("top", t + "px")
    },
    bindEvent: function() {
        var e = this;
        e.ie6 && $(window).on("resize.setFootStyle, scroll.setFootStyle", function() {
            e.setFixedIe6()
        })
    }
});
var bds = bds || {};
bds.se = bds.se || {}, bds.se.tip = bds.se.tip || {}, bds.comm.tipZIndex = 220, bds.comm.tips = [], bds.se.tip = function(e) {
    this.init = function() {
        this.op = {
            target: e.target || {},
            mode: e.mode || "over",
            title: e.title || null,
            content: e.content || null,
            uncontrolled: e.uncontrolled ? !0 : !1,
            arrow: {
                has: 1,
                offset: 10,
                r: !1,
                c: !1
            },
            close: e.close || 0,
            align: e.align || "left",
            offset: {
                x: 10,
                y: 20
            },
            arrowSize: 16
        }, e.arrow && (this.op.arrow.has = 0 == e.arrow.has ? 0 : 1, this.op.arrow.offset = e.arrow.offset >= 0 ? e.arrow.offset : 10, this.op.arrow.r = e.arrow.r, this.op.arrow.c = e.arrow.c, e.arrow.excursion && (this.op.arrow.excursion = e.arrow.excursion)), e.offset && (this.op.offset.x = e.offset.x || 0 == e.offset.x ? e.offset.x : 10, this.op.offset.y = e.offset.y || 0 == e.offset.y ? e.offset.y : 20), this.ext = e.ext || {}, this.dom = $("<div>", {
            "class": e.wrapClass ? e.wrapClass : "c-tip-con"
        }), this.visible = !1, this.rendered = !1, this.isAuto = "auto" === this.op.align ? !0 : !1, this.bindEvent()
    }, this.render = function() {
        this.op.close && this.enableCloseIcon(), this.op.title && this.setTitle(this.op.title), this.op.content && this.setContent(this.op.content), this.op.arrow.has && this.enableArrow(), $("#c-tips-container").append(this.dom)
    }, this.bindEvent = function() {
        if (this.delay = {
                overIcon: null,
                outIcon: null,
                overDom: null,
                outDom: null
            }, "over" == this.op.mode) {
            var e = this;
            $(e.op.target).on("mouseenter", function() {
                window.clearTimeout(e.delay.outIcon), window.clearTimeout(e.delay.outDom), e.delay.overIcon = setTimeout(function() {
                    e.show()
                }, 200)
            }), e.dom.on("mouseenter", function() {
                window.clearTimeout(e.delay.outIcon), window.clearTimeout(e.delay.outDom), e.delay.overDom = setTimeout(function() {
                    e.show()
                }, 200)
            }), $(e.op.target).on("mouseleave", function() {
                window.clearTimeout(e.delay.overIcon), window.clearTimeout(e.delay.overDom), e.delay.outIcon = setTimeout(function() {
                    e.hide()
                }, 200)
            }), e.dom.on("mouseleave", function() {
                window.clearTimeout(e.delay.overIcon), window.clearTimeout(e.delay.overDom), e.delay.outIcon = setTimeout(function() {
                    e.hide()
                }, 200)
            })
        } else if ("none" == this.op.mode) {
            var e = this;
            e.show()
        }
    }, this.enableArrow = function() {
        if (this.op.arrow.r) var e = $("<div>", {
            "class": "c-tip-arrow"
        }).html("<em></em><ins class='c-tip-arrow-r'></ins>").appendTo(this.dom);
        else if (this.op.arrow.c) var e = $("<div>", {
            "class": "c-tip-arrow"
        }).html("<em></em><ins class='c-tip-arrow-c'></ins>").appendTo(this.dom);
        else var e = $("<div>", {
            "class": "c-tip-arrow"
        }).html("<em></em><ins></ins>").appendTo(this.dom);
        this.arrow = e
    }, this.enableCloseIcon = function() {
        var e = this,
            t = "";
        t = "<i class='c-icon c-tips-icon-close'>&#xe610;</i>";
        var i = $("<div>", {
            "class": "c-tip-close"
        }).html(t).appendTo(this.dom).click(function() {
            e.hide()
        });
        this.close = i
    }, this.setTitle = function(e) {
        if (e.nodeType) var t = $("<h3>", {
            "class": "c-tip-title"
        }).append(e).appendTo(this.dom);
        else var t = $("<h3>", {
            "class": "c-tip-title"
        }).html(e).appendTo(this.dom);
        this.title = t
    }, this.setContent = function(e) {
        var t = $("<div>").html(e).appendTo(this.dom);
        this.content = t
    }, this.setArrow = function(e) {
        if (e && e.offset >= 0 && (this.op.arrow.offset = e.offset), this.op.arrow.has && this.arrow) switch (this.op.align) {
            case "left":
                this.arrow.css({
                    left: this.op.arrow.offset + "px"
                });
                break;
            case "right":
                this.arrow.css({
                    right: this.op.arrow.offset + 16 + "px"
                })
        }
    }, this.setOffset = function(e) {
        switch (e && (this.op.offset.x = e.x || 0 == e.x ? e.x : this.op.offset.x, this.op.offset.y = e.y || 0 == e.y ? e.y : this.op.offset.y), this.op.align) {
            case "left":
                var t = $(this.getTarget()).offset();
                this.getDom().css({
                    top: t.top + this.op.offset.y + "px",
                    left: t.left - this.op.offset.x + "px"
                });
                break;
            case "right":
                var t = $(this.getTarget()).offset();
                this.getDom().css({
                    top: t.top + this.op.offset.y + "px",
                    left: t.left + this.op.offset.x + $(this.getTarget()).width() - this.getDom().width() + "px"
                })
        }
    }, this.autoOffset = function() {
        var e, t = {
                w: this.dom.outerWidth(),
                h: this.dom.outerHeight()
            },
            i = $(this.getTarget()),
            n = i.offset(),
            o = {
                w: i.outerWidth(),
                h: i.outerHeight()
            },
            r = $(window),
            s = r.scrollTop(),
            a = {
                w: r.width(),
                h: r.height()
            },
            c = {
                left: 0,
                top: 0
            },
            d = {};
        a.h + s - o.h - n.top > t.h ? (c.top = o.h + n.top + this.op.arrowSize / 2, this.arrow && this.arrow.removeClass("c-tip-arrow-down")) : n.top - s > t.h ? (c.top = n.top - t.h - this.op.arrowSize / 2, this.arrow && this.arrow.addClass("c-tip-arrow-down")) : (c.top = o.h + n.top + this.op.arrowSize / 2, this.arrow && this.arrow.removeClass("c-tip-arrow-down")), e = n.left + o.w / 2 - this.op.arrow.offset - this.op.arrowSize / 2, c.left = e, c.left > 0 && c.left + t.w > a.w ? (c.left = n.left + o.w / 2 - t.w + this.op.arrow.offset + this.op.arrowSize / 2, d.right = this.op.arrow.offset + this.op.arrowSize, d.left = "auto", c.left < 0 && (c.left = e, d.left = this.op.arrow.offset, d.right = "auto")) : (d.left = this.op.arrow.offset, d.right = "auto"), this.dom.css(c);
        var l = this.op.arrow.excursion && this.op.arrow.excursion.x ? this.op.arrow.excursion.x : 0;
        d.left = this.op.arrow.offset + l, this.arrow && this.arrow.css(d)
    }, this.enable = function() {}, this.disable = function() {}, this.destroy = function() {}, this.show = function() {
        this.visible || (this.onShow(), this.rendered || (bds.comm.tips.push(this), this.render(), this.rendered = !0), this.isAuto ? this.autoOffset() : (this.setOffset(), this.setArrow()), this.dom.css({
            "z-index": bds.comm.tipZIndex
        }), bds.comm.tipZIndex++, this.dom.css({
            display: "block"
        }), this.visible = !0)
    }, this.hide = function() {
        this.visible && (this.dom.css({
            display: "none"
        }), this.onHide(), this.visible = !1)
    }, this.onShow = e.onShow || function() {}, this.onHide = e.onHide || function() {}, this.getTarget = function() {
        return this.op.target
    }, this.getDom = function() {
        return this.dom
    }, this.init()
}, bds.event.trigger("se.api_tip_ready"), $(document).mousedown(function(e) {
    e = e || window.event;
    for (var t = e.target || e.srcElement; t && t.tagName && t != document.body && "html" != t.tagName.toLowerCase() && (!t.className || !t.className.indexOf || -1 === t.className.indexOf("c-tip-con"));) t = t.parentNode;
    t && t.className && t.className.indexOf && -1 === t.className.indexOf("c-tip-con") && $(bds.comm.tips).each(function() {
        this.op.uncontrolled || this.op.close && this.hide()
    })
});
var sethfPos = sethfPos || 0;
! function() {
    function e(e) {
        if (e) {
            var t = e.parentNode;
            t && (t.style.marginBottom = "20px", t.style.marginTop = "2px")
        }
    }
    var t = "//www.baidu.com/",
        i = -1 != navigator.userAgent.indexOf("MSIE") && !window.opera,
        n = (100 * Math.random(), "百度一下，你就知道"),
        o = "";
    if (window.fa = function(e) {
            try {
                window.sidebar ? window.sidebar.addPanel(n, t, "") : window.opera && window.print ? (e.setAttribute("rel", "sidebar"), e.setAttribute("href", t), e.setAttribute("title", n), e.click()) : window.external.AddFavorite(t, n)
            } catch (i) {}
        }, i) try {
        var r = /se /gi.test(navigator.userAgent),
            s = /AppleWebKit/gi.test(navigator.userAgent) && /theworld/gi.test(navigator.userAgent),
            a = /theworld/gi.test(navigator.userAgent),
            c = /360se/gi.test(navigator.userAgent),
            d = /360chrome/gi.test(navigator.userAgent),
            l = /greenbrowser/gi.test(navigator.userAgent),
            u = /qqbrowser/gi.test(navigator.userAgent),
            p = /tencenttraveler/gi.test(navigator.userAgent),
            m = /maxthon/gi.test(navigator.userAgent),
            f = /krbrowser/gi.test(navigator.userAgent),
            h = !1;
        try {
            h = +external.twGetVersion(external.twGetSecurityID(window)).replace(/\./g, "") > 1013
        } catch (g) {}
        if (r || h || s || a || c || d || l || u || p || m || f) {
            var b = document.getElementById(sethfPos ? "set_f" : "setf");
            b && sethfPos && (e(b), o = "favorites")
        } else {
            var v = document.getElementById(sethfPos ? "set_f" : "setf");
            v && sethfPos && (e(v), o = "home"), v.setAttribute("onClick", "h(this)"), v.setAttribute("onmousedown", "return ns_c({'fm':'behs','tab':'homepage','pos':0})"), v.href = "/", v.target = "_self", v.id = "seth"
        }
    } catch (g) {} else {
        var b = document.getElementById(sethfPos ? "set_f" : "setf");
        sethfPos && (e(b), o = "favorites")
    }
    o && sethfPos && ns_c({
        fm: "sethf_show",
        tab: o
    })
}(), bds.se.loginCallbackFunc = null, bds.se.login = function() {
    var e = "",
        t = !1,
        i = "",
        n = function(e) {
            var t = e || bds.comm.user;
            t && $("#lb").replaceWith('<a href="https://www.baidu.com/my/index" class="username">' + escapeHTML(bds.comm.username) + '<i class="c-icon"></i></a>')
        },
        o = function(n) {
            t ? (bds.se.passv3.setSubpro(e), bds.se.passv3.setMakeText(i), bds.se.loginCallbackFunc = n || function() {
                window.document.location.reload(!0)
            }, bds.se.passv3.show()) : $.getScript(location.protocol + "//passport.baidu.com/passApi/js/uni_login_wrapper.js?cdnversion=" + (new Date).getTime(), function() {
                initPassV3(), t = !0, bds.se.passv3.setSubpro(e), bds.se.passv3.setMakeText(i), bds.se.loginCallbackFunc = n || function() {
                    window.document.location.reload(!0)
                }, bds.se.passv3.show()
            })
        },
        r = function(e) {
            if (bds.comm) {
                bds.comm.user = e, bds.comm.username = e, window.bdUser = e, bds.se.passv3.hide(), bds.se.loginCallbackFunc.call(window, 1, e);
                for (var t = 0; t < bds.comm.loginAction.length; t++) bds.comm.loginAction[t].call(window, 1, e)
            }
        },
        s = function(t) {
            e = t
        },
        a = function(e) {
            i = e
        };
    return {
        setUserInfo: n,
        open: o,
        success: r,
        setSubpro: s,
        setMakeText: a
    }
}(), window._invoke_login = function(e, t) {
    bds.se.login.open(e, t)
}, ! function() {
    function e() {
        var e, t = "http://isphijack.baidu.com/index.php?cb=isp_hijack",
            i = [];
        if (top.location != self.location) {
            try {
                for (var n = top.document.getElementsByTagName("frame"), o = top.document.getElementsByTagName("iframe"), r = 0; r < n.length; r++) i.push(n[r].getAttribute("src"));
                for (var r = 0; r < o.length; r++) i.push(o[r].getAttribute("src"))
            } catch (s) {}
            ns_c({
                fm: "frm",
                top: encodeURIComponent(top.location.href),
                furls: encodeURIComponent(i.join("|"))
            }), i && (e = document.createElement("script"), e.src = t + "&urls=" + encodeURIComponent(i.join("|")) + "&t=" + +new Date, document.body.appendChild(e))
        }
    }
    $(e)
}();
try {
    window.console && window.console.log && (console.log("每一个星球都有一个驱动核心，\n每一种思想都有影响力的种子。\n感受世界的温度，\n年轻的你也能成为改变世界的动力，\n百度珍惜你所有的潜力。\n你的潜力，是改变世界的动力！\n\n"), console.log("%c百度2021校园招聘简历投递：https://talent.baidu.com/external/baidu/campus.html", "color:red"))
} catch (e) {}
var bds = bds || {};
bds.se = bds.se || {}, bds.se.tool = bds.se.tool || {}, bds.comm.host = {
    bfe: "//www.baidu.com/tools",
    favo: bds.util.domain && bds.util.domain.get ? bds.util.domain.get("http://i.baidu.com") : "http://i.baidu.com",
    share: bds.util.domain && bds.util.domain.get ? bds.util.domain.get("http://bdimg.share.baidu.com/static/api/js/custom/resultshare.js") : "http://bdimg.share.baidu.com/static/api/js/custom/resultshare.js",
    report: "http://jubao.baidu.com",
    koubei: "http://koubei.baidu.com"
}, bds.se.tool = function(item) {
    this.init = function() {
        this.render()
    }, this.render = function() {
        var ops = eval("(" + item.getAttribute("data-tools") + ")"),
            toolsDom = $("<div>", {
                "class": "c-tip-menu"
            }),
            toolsList = $("<ul>"),
            toolsFavo = $("<li>"),
            toolsFavoLink = $("<a>").html("收藏"),
            toolsFavoId = item.getAttribute("id");
        toolsFavoLink.on("mousedown", function() {
            bds.se.tool.favo(ops, item.getAttribute("id")), ns_c({
                fm: "tools",
                tab: "favo"
            })
        }), toolsFavoLink.on("mouseover", function() {
            $(this).css("background-color", "#ebebeb")
        }), toolsFavoLink.on("mouseout", function() {
            $(this).css("background-color", "#fff")
        }), toolsFavoId && (toolsFavo.append(toolsFavoLink), toolsList.append(toolsFavo));
        var toolsShare = $("<li>"),
            toolsShareLink = $("<a>").html("分享");
        toolsShareLink.on("mousedown", function() {
            bds.se.tool.share(ops, item), ns_c({
                fm: "tools",
                tab: "share"
            })
        }), toolsShareLink.on("mouseover", function() {
            $(this).css("background-color", "#ebebeb")
        }), toolsShareLink.on("mouseout", function() {
            $(this).css("background-color", "#fff")
        }), toolsShare.append(toolsShareLink), toolsList.append(toolsShare);
        var officalLogo = $($(item).closest(".c-container").find("h3.t").children()[1]),
            vLogo = $(item).parent().find(".vstar"),
            baoFlag = $(item).parent().find(".c-trust-as.baozhang-new-v2"),
            isOffical = 0,
            vLevel = 0;
        officalLogo && "官方" == officalLogo.html() && (isOffical = 1), vLogo && vLogo.attr("hint-data") && (vLevel = $.parseJSON(vLogo.attr("hint-data")).hint[0].vlevel), baoFlag.length > 0 && (vLevel = 8);
        var toolsReport = $("<li>").html("<a target=\"_blank\" onmousedown=\"ns_c({'fm': 'tools','tab':'report'})\" href=\"" + bds.comm.host.bfe + "?url=" + encodeURIComponent(ops.url) + "&jump=" + encodeURIComponent(bds.comm.host.report + "/jubao/accu/?title=" + encodeURIComponent(ops.title) + "&q=" + encodeURIComponent(bds.comm.query) + "&has_gw=" + isOffical + "&has_v=" + vLevel) + '&key=surl">举报</a>');
        toolsList.append(toolsReport), toolsDom.append(toolsList);
        var tTip = new bds.se.tip({
            target: $(".c-icon", item)[0],
            mode: "none",
            align: "left",
            offset: {
                x: 17,
                y: 24
            },
            arrow: {
                has: 1,
                offset: 19
            },
            content: toolsDom,
            ext: {
                category: "tools"
            },
            wrapClass: "c-tip-con c-tools-tip-con"
        });
        tTip.onShow = function() {
            ns_c({
                fm: "tools",
                tab: "show"
            })
        }
    }, this.init()
}, bds.se.tool.share = function(e, t) {
    this.op = e || {}, this.init = function(e, t) {
        $.getScript(bds.comm.host.share, function() {
            $(bds.comm.tips).each(function() {
                this.op.uncontrolled || this.hide()
            });
            var i = "";
            i = '<div class="c-tools-share" style="width:164px;"></div>';
            var n = new bds.se.tip({
                    target: $(".c-icon", t)[0],
                    mode: "none",
                    offset: {
                        x: 33,
                        y: 26
                    },
                    arrow: {
                        has: 0
                    },
                    close: 1,
                    content: i,
                    wrapClass: "c-tip-con c-tools-tip-con c-tools-share-tip-con"
                }),
                o = $(".c-tools-share", n.dom.get(0))[0],
                r = bds.se.share;
            r.render({
                boxEle: o,
                url: e.url,
                txt: e.title + " -- 分享自百度搜索"
            })
        })
    }(this.op, t)
}, bds.se.tool.favo = function(e, t) {
    var i = this;
    if (this.op = e || {}, this.complete = function(e) {
            $(bds.comm.tips).each(function() {
                i.op.uncontrolled || this.hide()
            }), e && new bds.se.tip({
                target: $(".c-icon", document.getElementById(t))[0],
                offset: {
                    x: 33,
                    y: 26
                },
                arrow: {
                    has: 0
                },
                mode: "none",
                close: 1,
                content: e,
                wrapClass: "c-tip-con c-tools-tip-con c-tools-favo-tip-con"
            })
        }, this.success = function() {
            var e = ['<div class="c-tip-notice">', '<h3 class="c-tip-notice-succ">已收藏至：</h3>', "<ul>", '<li class="c-tip-item-succ">', '<span class="favo-icon success-icon c-gap-right-xsmall"></span>个人中心', '“<a href="https://www.baidu.com/my/index" target="_blank">我的收藏</a>”', "</li>", "</ul>", "</div>"].join("");
            i.complete(e)
        }, this.error = function() {
            var e = ['<div class="c-tip-notice">', '<h3 class="c-tip-notice-fail">收藏失败，请稍后再试</h3>', "</div>"].join("");
            i.complete(e)
        }, this.init = function(e) {
            if (e) {
                var t = /^https?:\/\/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/,
                    n = t.exec(e.url);
                n = n ? t.exec(e.url)[0] : "";
                var o = JSON.stringify({
                    title: e.title || "",
                    url: e.url || "",
                    source: n
                });
                $.ajax({
                    url: "/my/setfavo",
                    type: "post",
                    data: o,
                    xhrFields: {
                        withCredentials: !0
                    },
                    success: i.success,
                    error: i.error
                })
            }
        }, bds.comm.user) this.init(this.op);
    else if (bds.se.login && bds.se.login.open) {
        var n = this;
        bds.se.login.open(function(e) {
            1 === e && n.init(n.op)
        })
    }
};
var bds = bds || {};
bds.se = bds.se || {}, bds.se.tools = bds.se.tools || {}, bds.se.tools = function() {
    var e = delayHideOnIcon = delayShowOnTip = delayHideOnTip = {};
    $("#container").delegate(".c-tools", "mouseover", function() {
        var t = this;
        window.clearTimeout(delayHideOnIcon), window.clearTimeout(delayHideOnTip), e = setTimeout(function() {
            var e = 1;
            $(bds.comm.tips).each(function() {
                return this.getTarget() == $(".c-icon", t)[0] ? (e = 0, this.show(), !1) : void 0
            }), e && (tools = new bds.se.tool(t))
        }, 200)
    }).delegate(".c-tools", "mouseout", function() {
        window.clearTimeout(e), window.clearTimeout(delayShowOnTip);
        var t = this;
        delayHideOnIcon = setTimeout(function() {
            $(bds.comm.tips).each(function() {
                return this.getTarget() == $(".c-icon", t)[0] ? (this.hide(), !1) : void 0
            })
        }, 200)
    }), $("#c-tips-container").delegate(".c-tip-con", "mouseover", function() {
        var e = this;
        window.clearTimeout(delayHideOnIcon), window.clearTimeout(delayHideOnTip), delayShowOnTip = setTimeout(function() {
            $(bds.comm.tips).each(function() {
                return this.getDom().get(0) == e && this.ext.category && "tools" == this.ext.category ? (this.show(), !1) : void 0
            })
        }, 200)
    }).delegate(".c-tip-con", "mouseout", function() {
        window.clearTimeout(e), window.clearTimeout(delayShowOnTip);
        var t = this;
        delayHideOnTip = setTimeout(function() {
            $(bds.comm.tips).each(function() {
                return this.getDom().get(0) == t && this.ext.category && "tools" == this.ext.category ? (this.hide(), !1) : void 0
            })
        }, 200)
    })
};
var bds = bds || {};
bds.se = bds.se || {}, bds.se.slide = function(e) {
    var t, i, n, o, r, s = this,
        a = {},
        d = [],
        l = 0,
        u = null;
    this._default = {
        target: $("#lg"),
        src: "",
        width: 270,
        height: 129,
        offsetLeft: 0,
        isPad: !1,
        isRetina: !1,
        frames: 103,
        animations: [{
            isAutoPlay: !0,
            frame_start: 1,
            frame_end: 30,
            delay: 0,
            duration: 100,
            repeats: 0,
            process_before: function() {},
            event_loop: 0,
            process_after: function() {}
        }, {
            trigger_type: "click",
            trigger_duration: 100,
            trigger_frame: 31,
            trigger_fn: function() {},
            frame_start: 32,
            frame_end: 103,
            process_before: function() {},
            process_after: function() {},
            delay: 0,
            duration: 100,
            repeats: 1,
            event_loop: 0
        }]
    }, this.timer = [], this.otherTimer = [], this.op = $.extend({}, s._default, e), this.init = function() {
        return s.op.src ? (s.createDom(), void(bds.comm.ishome && s.op.target.length && s.initAnimate())) : void s.createPlayer()
    }, this.createPlayer = function() {
        var e = s.op.target.find("map"),
            t = e.length ? e.find("area").eq(0) : "",
            n = s.op.play;
        n && (i = $('<img class="logo_player" src="' + n.src + '" style="width:' + n.width + "px; height:" + n.height + "px; position:absolute; top:50%; left:50%; margin-left: -" + n.width / 2 + "px; margin-top: -" + n.height / 2 + "px; cursor:pointer;\" onmousedown=\"return c({'tab':'logo_button_click'})\" />").appendTo(s.op.target), t.length ? (i.wrap('<a style="position:absolute;top:0;left:50%;width:' + s.op.width + "px;height:" + s.op.height + "px;margin-left:-" + s.op.width / 2 + 'px;" href="' + t.attr("href") + '" target="' + t.attr("target") + '"></a>'), t.attr("title") && i.attr("title", t.attr("title"))) : i.wrap('<div style="position:absolute;top:0;left:50%;width:' + s.op.width + "px;height:" + s.op.height + "px;margin-left:-" + s.op.width / 2 + 'px;"></div>'), i.on(n.trigger_type, function() {
            return n.trigger_duration ? s.timer.push(window.setTimeout(function() {
                n.trigger_fn.call(s.op)
            }, n.trigger_duration)) : n.trigger_fn.call(s.op), !1
        }))
    }, this.createDom = function() {
        var e = '<div style="position:absolute;top:0;left:50%;background:url(#{0}) no-repeat #{1};cursor:#{2};width:#{3}px;height:#{4}px;margin-left:-#{5}px;display:none;"></div>',
            l = s.op.offsetLeft + "px 0",
            u = s.op.target.find("map"),
            p = u.length ? u.find("area").eq(0) : "",
            m = p ? "pointer" : m,
            f = s.op.animations instanceof Array ? s.op.animations : [s.op.animations],
            h = s.op.width,
            g = s.op.height;
        d = f, o = h, r = g, e = $.format(e, s.op.src, l, m, s.op.width, s.op.height, s.op.width / 2), "static" === s.op.target.css("position") && s.op.target.css({
            position: "relative",
            width: "100%"
        }), s.op.target.append(e), t = n = s.op.target.find("div").eq(0), s.op.play && (i = $('<img src="' + s.op.play.src + '" style="width:' + s.op.play.width + "px; height:" + s.op.play.height + "px; position:absolute; top:50%; left:50%; margin-left: -" + s.op.play.width / 2 + "px; margin-top: -" + s.op.play.height / 2 + "px; \" onmousedown=\"return c({'tab':'logo_button_click'})\" />").insertAfter(t), n = i), s.op.isPad && t.css("background-size", s.op.width * s.op.frames / 2 + "px " + s.op.height + "px"), window.devicePixelRatio && window.devicePixelRatio > 1 && s.op.isRetina && t.css("background-size", s.op.width * s.op.frames + "px " + s.op.height + "px"), p.length ? (t.wrap('<a href="' + p.attr("href") + '" target="' + p.attr("target") + '"></a>'), p.attr("title") && t.attr("title", p.attr("title"))) : t.on("mousedown", function() {
            c({
                tab: "logo_button_click"
            })
        });
        for (var b = 0, v = d.length; v > b; b++) {
            var w = d[b],
                _ = w.frame_start;
            l = -((_ - 1) * h) + "px 0", a[b] = {
                "background-position": l,
                cursor: m
            }
        }
    }, this.initAnimate = function() {
        function e() {
            t.show(), s.play()
        }
        if (!(l >= d.length)) {
            var i = d[l],
                o = i.isAutoPlay,
                r = i.trigger_type,
                a = i.trigger_fn,
                c = i.trigger_duration,
                p = i.trigger_frame,
                m = $("#lg area");
            m.length && m.attr("onmousedown") && t.on("mousedown", function() {
                return new Function(m.attr("onmousedown"))()
            }), u = new Image, u.src = s.op.src, t.bind("first_animate", function() {
                u.complete ? e() : u.onload = e
            }), o ? t.trigger("first_animate") : r && (s.enablePointer(), n.show().on(r, function() {
                a && (p && s.toPos(p), a.call(s.op), c ? s.timer.push(setTimeout(function() {
                    t.trigger("first_animate")
                }, c)) : t.trigger("first_animate"))
            }))
        }
    }, this.enablePointer = function() {
        bds.comm.upn && "msie" === bds.comm.upn.browser && "6" === bds.comm.upn.ie ? alert("pointer") : t.css("cursor", "pointer")
    }, this.disablePointer = function() {
        t.css("cursor", "default")
    }, this.play = function() {
        if (l >= d.length) return void s.dispose();
        var e = d[l],
            t = e.process_before;
        s.dispose(), t && t.call(s), s.animation()
    }, this.toPos = function(e) {
        var i = -((e - 1) * o) + "px 0";
        t.css("background-position", i)
    }, this.animation = function() {
        var e, i = d[l],
            r = i.duration,
            a = i.frame_start,
            c = i.frame_end,
            u = i.delay,
            p = i.repeats,
            m = i.process_after,
            f = i.trigger_type,
            h = a - 1 > 0 ? a - 1 : 0,
            g = i.event_loop || 0,
            b = 0;
        if (e = g ? d[l] : l + 1 >= d.length ? d[l] : d[l + 1]) {
            var v = e.trigger_type,
                w = e.trigger_fn,
                _ = e.trigger_duration,
                y = e.trigger_frame;
            v && (f && n.off(f), l < d.length - 1 || g ? (s.enablePointer(), n.on(v, function() {
                g || l++, m && m.call(s), w && w.call(s), y && s.toPos(y), _ ? (s.dispose(), s.timer.push(setTimeout(function() {
                    s.play()
                }, _))) : s.play()
            })) : s.disablePointer())
        }! function() {
            arguments.callee, s.timer.push(setTimeout(function() {
                t.css("background-position", -(o * h) + "px 0"), h++, h >= c ? (s.dispose(), b++, 0 !== p && b >= p ? (h = null, b = null, m && m.call(s), l++, l < d.length && s.play(), g && l--) : (h = a - 1 > 0 ? a - 1 : 0, s.timer.push(setTimeout(arguments.callee, r)))) : s.timer.push(setTimeout(arguments.callee, r))
            }, u))
        }()
    }, this.dispose = function(e) {
        e = e || s.timer;
        for (var t = 0, i = e.length; i > t; t++) window.clearTimeout(e[t]);
        e.length = 0
    }, this.disposeOther = function(e) {
        e = e || s.otherTimer;
        for (var t = 0, i = e.length; i > t; t++) window.clearTimeout(e[t]);
        e.length = 0
    }, this.clear = function() {
        s.dispose(), s.disposeOther(), n.off("click").off("hover")
    }, this.reset = function(e) {
        e = e || 0, t.css(a[e])
    }, this.init()
};
var bds = bds || {};
bds.se = bds.se || {}, bds.se.banner = function(e, t, i) {
        this.init = function() {
            i = i || {}, this.$dom_panel = $(e), this.hintText = t, this.hintIcon = i.iconClass || "", this.downUrl = i.downUrl || "", this.hintCookie = i.cookie || "", this.showNum = this.hintCookie && $.getCookie(this.hintCookie) ? Number($.getCookie(this.hintCookie)) : 0, this.nscTab = i.nscTab || "", this.ishome = bds.comm && 1 == bds.comm.ishome ? 1 : 0, this.bannerType = i.bannerType || "", e && t && this.showNum < 5 && !$(".baiduapp_banner")[0] && !$(".res_top_banner")[0] && !$(".res_top_banner_for_win")[0] && this.show()
        }, this.show = function() {
            this.render(), this.showNum += 1, $.setCookie(this.hintCookie, this.showNum, {
                expires: 2592e6
            }), this.$dom_panel.prepend(this.bannerHtml), 1 != this.ishome && this.headFloat(), this.bindEvent(), ns_c({
                fm: "behs",
                qid: bds.comm.qid,
                tab: (1 == this.ishome ? "tj_" : "") + "baidu_" + (this.nscTab ? this.nscTab : "topbanner") + "show"
            })
        }, this.render = function() {
            var e = [];
            e = e.concat("WIN" !== this.bannerType ? ['<div class="res_top_banner">', '<i class="c-icon ' + (this.hintIcon ? this.hintIcon : "res_top_banner_icon") + '"></i>', "<span>" + this.hintText + "</span>", this.downUrl ? '<a href="' + this.downUrl + '" class="res_top_banner_download">立即体验</a>' : "", '<i class="c-icon res_top_banner_close"></i>', "</div>"] : ['<div class="res_top_banner_for_win">', '<i class="c-icon ' + (this.hintIcon ? this.hintIcon : "res_top_banner_icon") + '"></i>', "<span>" + this.hintText + "</span>", this.downUrl ? '<a href="' + this.downUrl + '" class="res_top_banner_download">立即体验</a>' : "", '<i class="c-icon res_top_banner_close"></i>', "</div>"]), this.bannerHtml = e.join("")
        }, this.headFloat = function() {
            var e = $("#head"),
                t = $(window),
                i = $(".res_top_banner");
            e.css("position"), $(window).scroll(function() {
                var n = i.height() || 0,
                    o = t.scrollTop();
                n >= o ? e.attr("style", "position:absolute;") : e.attr("style", "top:0px;_top:" + n + "px;")
            })
        }, this.bindEvent = function() {
            if ("WIN" !== this.bannerType) {
                var e = $(".res_top_banner"),
                    t = this;
                $(".res_top_banner_download", e).on("mousedown", function() {
                    t.hintCookie && $.setCookie(t.hintCookie, 5, {
                        expires: 2592e6
                    }), ns_c({
                        fm: "behs",
                        qid: bds.comm.qid,
                        tab: (1 == t.ishome ? "tj_" : "") + "baidu_" + (t.nscTab ? t.nscTab : "topbanner") + "down"
                    })
                }), $(".res_top_banner_close", e).on("mousedown", function() {
                    e.detach(), t.hintCookie && $.setCookie(t.hintCookie, 5, {
                        expires: 2592e6
                    }), ns_c({
                        fm: "behs",
                        qid: bds.comm.qid,
                        tab: (1 == t.ishome ? "tj_" : "") + "baidu_" + (t.nscTab ? t.nscTab : "topbanner") + "close"
                    })
                }), $(window).on("swap_begin", function() {
                    e.detach()
                })
            } else {
                var e = $(".res_top_banner_for_win"),
                    t = this;
                $(".res_top_banner_download", e).on("mousedown", function() {
                    t.hintCookie && $.setCookie(t.hintCookie, 5, {
                        expires: 2592e6
                    }), ns_c({
                        fm: "behs",
                        qid: bds.comm.qid,
                        tab: (1 == t.ishome ? "tj_" : "") + "baidu_" + (t.nscTab ? t.nscTab : "topbanner") + "down"
                    })
                }), $(".res_top_banner_close", e).on("mousedown", function() {
                    e.detach(), t.hintCookie && $.setCookie(t.hintCookie, 5, {
                        expires: 2592e6
                    }), ns_c({
                        fm: "behs",
                        qid: bds.comm.qid,
                        tab: (1 == t.ishome ? "tj_" : "") + "baidu_" + (t.nscTab ? t.nscTab : "topbanner") + "close"
                    })
                }), $(window).on("swap_begin", function() {
                    e.detach()
                })
            }
        }, this.init()
    },
    function() {
        $(window).on("swap_end", function() {
            var e = ["union", "union2baidu", "union_cpro", "union_nosearch", "redbull", "hao123"],
                t = bds.comm.upn,
                i = navigator.userAgent.toLowerCase().search(/msie [6-7]/);
            if (winFilter = /NT 6.1|NT 6.2|NT 6.3/i.test(navigator.userAgent), bds.comm.topHijack)
                for (var n = 0; n < bds.comm.topHijack.length; n++)
                    if ("hint_topHijack" == bds.comm.topHijack[n].templateName) {
                        var o = bds.comm.topHijack[n].hintData.hintText;
                        bds.se.banner($("body")[0], o)
                    } if (bds.comm.tng && -1 == $.inArray(bds.comm.tng, e) && t && t.browser && "msie" == t.browser && t.ie && ("6" == t.ie || "7" == t.ie) && i > 0) {
                var o = "6" == t.ie ? "您的浏览器采用的IE6内核已停止维护，推荐升级到更快更安全的百度浏览器！" : "您的IE浏览器版本较低，即将停止更新维护，建议升级到更快、更安全的百度浏览器。";
                bds.se.banner($("body")[0], o, {
                    downUrl: "http://j.br.baidu.com/v1/t/ui/p/browser/tn/10105001/ch_dl_url",
                    cookie: "H_PS_BBANNER",
                    nscTab: "browser"
                })
            }
        })
    }(), bds.se.safeTip = function() {
        function e() {
            var e = 0,
                t = ["bd"],
                i = "",
                n = [];
            $(".unsafe_ico_new").each(function(t, o) {
                n.push(o.getAttribute("data-id")), i = o.getAttribute("data-tpl");
                var r = $(o).attr("data-href"),
                    s = $(o).attr("href"),
                    a = r ? r : s;
                $("h3 a", $(o).parents(".result")).attr("href", a), e++
            }), e > 0 && ns_c({
                tab: "safetip",
                num_unsafe: e,
                prd: t.join("|"),
                hintId: n,
                hintTpl: i
            })
        }
        return {
            init: e
        }
    }();
var bds = bds || {};
bds.se = bds.se || {}, bds.se.trust = bds.se.trust || {}, bds.se.trust = function() {
    function e() {
        l = [], p = [], u = [], $(".c-trust").each(function() {
            var e = $(this),
                t = this.getAttribute("data_key"),
                i = this.getAttribute("hint-type");
            0 == e.parent(".c-icons-inner").length && e.wrap("<span class='c-icons-outer'><span class='c-icons-inner'></span></span>"), "baozhang-v" === i ? -1 == $.inArray(t, u) && u.push(this.getAttribute("data_key")) : -1 == $.inArray(t, l) && l.push(this.getAttribute("data_key")), -1 == $.inArray(this, p) && p.push(this)
        }), require(["plugins/bzPopper"], function(e) {
            $(".c-trust-as").each(function() {
                var t = $(this).attr("data-bao"),
                    i = "2" === $(this).attr("data-baostatus");
                t && i ? ($(this).off("mouseenter"), $(this).on("mouseenter", function() {
                    var i = $(this),
                        n = i.find("i"),
                        o = {
                            target: n.length ? n[0] : i[0],
                            from: e.preset.PS,
                            trigger: "hover",
                            contentData: t,
                            isLogin: "1" === bds.comm.isUserLogin,
                            extra: {
                                expStage: e.preset.EXP_STAGE_1
                            }
                        };
                    e.showUp(o)
                })) : (h = $.parseJSON($(this).attr("hint-data")), h && !$(this).attr("render") && (f = $(this), a(h, $(this).attr("hint-type"), this), $(this).attr("render", "render")))
            }), l.length < 1 && u.length < 1 || (g && v < l.length + u.length && (g = !1, b && b.abort()), t(), v = l.length + u.length)
        })
    }

    function t() {
        g || (l.length > 0 && (b = $.getJSON(m + "/?urls=" + l.join(",") + "&sid=" + bds.comm.sid + "&qid=" + bds.comm.qid + "&v=" + d + "&callback=?", i)), u.length > 0 && (b = $.getJSON(m + "/?urls=" + u.join(",") + "&sid=" + bds.comm.sid + "&qid=" + bds.comm.qid + " &tag=asyncZ&v=" + d + "&callback=?", i)), g = !0)
    }

    function i(e) {
        g = !1, 0 == e.code && $(p).each(function() {
            var t = this.getAttribute("data_key"),
                i = this.getAttribute("hint-type");
            h = e.data[t], h && (f = $(this), !i && h.vstar && h.vstar.hint && h.vstar.hint.length > 0 && (f.html(""), n(h.vstar.hint[0].vlevel, h.vstar.url)), h.medical && (f.html(""), r()), "baozhang-v" == i && h.brand && (f.html(""), o(h.brand.url)), h.aviation && (f.html(""), s()))
        })
    }

    function n(e, t) {
        var i = $("<span>", {
                "class": "c-vline"
            }),
            n = $("<a>", {
                "class": "vstar c-icon c-icon-v" + e,
                target: "_blank",
                onclick: "return false",
                href: "#",
                "hint-data": '{"hint": [{"vlevel": ' + e + "}]}"
            });
        t && n.attr({
            href: t,
            onclick: ""
        }), f.append(i), f.append(n), a(h.vstar, "vstar")
    }

    function o(e) {
        var t = $("<span>", {
                "class": "c-vline"
            }),
            i = $("<a>", {
                "class": "c-icon c-icon-R",
                target: "_blank",
                onclick: "return false",
                href: "#"
            });
        e && i.attr({
            href: e,
            onclick: ""
        }), f.append(t), f.append(i), a(h.brand, "baozhang-v")
    }

    function r() {
        var e = $("<span>", {
                "class": "c-vline"
            }),
            t = $("<a>", {
                "class": "c-icon c-icon-med",
                target: "_blank",
                onclick: "return false",
                href: "#"
            });
        f.append(e), f.append(t), a(h.medical, "medical")
    }

    function s() {
        var e = $("<span>", {
                "class": "c-vline"
            }),
            t = $("<a>", {
                "class": "c-icon c-icon-air",
                target: "_blank",
                onclick: "return false",
                href: "#"
            });
        f.append(e), f.append(t), a(h.aviation, "aviation")
    }

    function a(e, t, i) {
        var n = e.hint,
            o = "over",
            r = e.url,
            s = e.webIMUrl,
            a = "aviation" === t;
        if (e && n) {
            if (-1 !== t.indexOf("newBao")) {
                var d = "<h3 class='opui-honourCard4-new-bao-title'>" + e.label + "</h3>";
                d += $.format('<div class="c-tip-info opui-honourCard4-new-bao-style">#{0}', e.text)
            } else if ("vstar" == t || "baozhang" == t || "baozhang-v" == t || "chengqi" == t || "baozhang-v-auth" == t) var d = "<div class='c-tip-cer hitcon'>";
            else var d = "<div class='c-tip-info hitcon'>";
            if (a && e.label && (d += '<div class="f13 c-gap-bottom-large c-color-text aviation-title">' + e.label + "：</div>"), n.length > 0) {
                d += "<ul>";
                for (var l = 0; l < n.length; l++) "" != n[l] ? (d += "<li ", d += n[l].icon ? "class='c-tip-item-i'><img src='" + n[l].icon + "' class='c-customicon c-gap-icon-right-small c-tip-item-icon' />" : ">", d += c(n[l].txt), d += "</li>") : o = "none";
                d += "</ul>"
            }
            d += "</div>";
            var u = !1,
                p = !1;
            "baozhang-v" == t || "baozhang-v-auth" == t ? u = !0 : "chengqi" == t && (p = !0);
            var m = ["c-tip-con"],
                h = "baozhang-v" === t,
                g = "baozhang-v" === t || "aviation" === t;
            h && m.push("baozhang-r-tip"), a && m.push("aviation-wrap-tip");
            var b = new bds.se.tip({
                target: f,
                mode: o,
                align: "auto",
                content: d,
                arrow: {
                    has: g ? 0 : 1,
                    offset: 39,
                    r: u,
                    c: p,
                    excursion: {
                        x: 4
                    }
                },
                offset: {
                    x: 10,
                    y: 25
                },
                wrapClass: m.join(" ")
            });
            b.onShow = function() {
                if (A.use("honourCard4", function() {}), -1 !== t.indexOf("newBao")) i && $(i).attr("hint-type") && (t = $(i).attr("hint-type")), ns_c({
                    hintUrl: f.attr("data_key"),
                    hintTpl: t,
                    hintId: "safe:1"
                });
                else {
                    var o = n[0].vlevel,
                        a = n[0].unfixedInfo;
                    ns_c({
                        hintUrl: f.attr("data_key"),
                        hintTpl: t,
                        hintId: o
                    }), -1 != d.indexOf("ecard") && setTimeout(function() {
                        A.use("honourCard4", function() {
                            var i = $(b.getDom()).find(".c-trust-ecard4"),
                                c = 0;
                            "baozhang" == t && (c = n[0].bzAppliCounts);
                            var d = {
                                compName: e.label,
                                vLevel: o,
                                centerPageUrl: r
                            };
                            a && (d.unfixedInfo = a), s && (d.webIMUrl = s), t && (d.type = t), c && (d.bzAppliCounts = c), e.brandName && (d.brandName = e.brandName), e.brandLogo && (d.brandLogo = e.brandLogo), e.brandScope && (d.brandScope = e.brandScope), e.brandRelation && (d.brandRelation = e.brandRelation), e.authBrandName && (d.authBrandName = e.authBrandName), e.authBizScope && (d.authBizScope = e.authBizScope), e.authBizType && (d.authBizType = e.authBizType), A.ui.honourCard4(i, d)
                        })
                    }, 0)
                }
                setTimeout(function() {
                    -1 !== t.indexOf("newBao") ? $(".opui-honourCard4-new-bao-style", this.dom).each(function() {
                        $("a", this).each(function(e) {
                            this.onmousedown = function() {
                                ns_c({
                                    hintUrl: r,
                                    hintTpl: t,
                                    title: this.innerHTML,
                                    pos: e
                                })
                            }
                        })
                    }) : $("li", this.dom).each(function() {
                        $("a", this).each(function(e) {
                            this.onmousedown = function() {
                                ns_c({
                                    hintUrl: r,
                                    hintTpl: t,
                                    title: this.innerHTML,
                                    pos: e
                                })
                            }
                        })
                    })
                }, 0)
            }
        }
    }

    function c(e) {
        var t = e;
        return t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;"), t = t.replace("[/url]", "</a>").replace(/\[url ([^\s]*)\]/, "<a href='$1' target='_blank'>"), t = t.replace(/\[img ([^\s]*)\]/, "<img src='$1' />"), t = t.replace(/\[ecard (-?[\d]{0,3})\]/, "<div class='c-trust-ecard4' value='$1'></div>")
    }
    var d = 4,
        l = [],
        u = [],
        p = [];
    if (bds.util && bds.util.domain && bds.util.domain.get) var m = bds.util.domain.get("http://tag.baidu.com");
    else var m = "http://tag.baidu.com";
    var f = null,
        h = null,
        g = !1,
        b = null,
        v = 0;
    return e(), {
        init: e,
        render: i
    }
}();
var bds = bds || {};
bds.se = bds.se || {}, bds.se.tool = bds.se.tool || {}, bds.se.share = function() {
    var e, t;
    "undefined" != typeof bds && bds.util && bds.util.domain && bds.util.domain.get ? (e = bds.util.domain.get("s.share.baidu.com"), t = bds.util.domain.get("bdimg.share.baidu.com")) : (e = "http://s.share.baidu.com", t = "http://bdimg.share.baidu.com");
    var i = [{
            id: "weixin",
            name: "微信"
        }, {
            id: "tsina",
            name: "新浪微博"
        }, {
            id: "tqf",
            name: "腾讯朋友"
        }, {
            id: "douban",
            name: "豆瓣网"
        }, {
            id: "qzone",
            name: "QQ空间"
        }, {
            id: "sqq",
            name: "QQ好友"
        }],
        n = '<a href="#" onclick="return false;" data-cmd="#{id}" class="bds_v2_#{id}"><span class="bds_icon_v3 #{id}"></span><span class="bds_icon_v3_border"></span><span style="padding-left:4px;position:relative;top:-4px;">#{name}</span></a>',
        o = function() {
            var e = [];
            e.push('<div class="bds_v2_share_box">'), e.push('<p class="bds_v2_title">分享至：</p>');
            for (var t = 0, o = i.length; o > t; t++) {
                var r = n.replace(/#\{(.+?)\}/g, function(e, n) {
                    return i[t][n]
                });
                e.push(r)
            }
            return e.push("</div>"), e.join("")
        }(),
        r = function(e) {
            if (/msie (\d+\.\d+)/i.test(navigator.userAgent)) {
                var t = document.createStyleSheet();
                t.cssText = e
            } else {
                var i = document.createElement("style");
                i.type = "text/css", i.appendChild(document.createTextNode(e)), document.getElementsByTagName("HEAD")[0].appendChild(i)
            }
        },
        s = function(e) {
            var t = ".bds_icon_v3{display:inline-block;background-image:url('https://b.bdstatic.com/searchbox/icms/searchbox/img/search_pc_share_icons.png');height:18px;width:18px;background-size:108px 18px;background-repeat:no-repeat;position:relative;z-index:1;}.bds_icon_v3_border{width:16px;height:16px;border-radius:50%;border: 1px solid rgba(0,0,0,.05);z-index:10;position:absolute;top:0;left:0;}.bds_icon_v3.sqq{background-position:0px 0px;}.bds_icon_v3.weixin{background-position:-18px 0px;}.bds_icon_v3.tsina{background-position:-36px 0px;}.bds_icon_v3.qzone{background-position:-54px 0px;}.bds_icon_v3.tqf{background-position:-72px 0px;}.bds_icon_v3.douban{background-position:-90px 0px;}.bds_v2_share_box{margin-right:-20px;zoom:1;}.bds_v2_share_box:after{content:'\\20';display:block;height:0;clear:both;}.bds_v2_share_box .bds_v2_title{font-size:13px;color:#333;padding:0 0 10px;margin:0;}.bds_v2_share_box a{float: left;display: inline-block;width: 46%;margin-bottom: 10px;color: #333;font-size: 13px;height: 18px;position: relative;}.bds_v2_share_box a:hover{text-decoration:underline;}.bds_v2_share_box a:nth-child(odd){margin-left: 8%;}.bd_weixin_popup_bg{position:absolute;top:-400px;left:-400px;z-index:11000;margin:0;padding:0;width:auto;height:320px;border:0;opacity:0;filter:alpha(opacity=0)}.bd_weixin_popup{border-radius: 16px;box-shadow: 0 2px 10px 0 rgba(0,0,0,0.10);position:absolute;top:-400px;left:-400px;z-index:11001;padding:16px 16px 15px 16px;width:auto;background:#fff;font-size:13px}.bd_weixin_popup .bd_weixin_popup_head{position:relative;color:#222;text-align:left;font-size:14px;line-height:16px;margin-bottom:20px;}.bd_weixin_popup .bd_weixin_popup_head .bd_weixin_popup .bd_weixin_popup_head .bd_weixin_popup_close:hover{text-decoration:none}.bd_weixin_popup .bd_weixin_popup_foot{margin-top:20px;color:#626675;text-align:left;font-size:13px;line-height:13px;}.bds_v2_share_box a:active{color:#F73131;}";
            r(t), e.boxEle.innerHTML = o
        },
        a = function(e) {
            var t = e.boxEle.firstChild;
            "bds_v2_share_box" != t.className && (t = e.boxEle), t.addEventListener ? t.addEventListener("click", function(t) {
                c(t, e)
            }, !1) : t.attachEvent && t.attachEvent("onclick", function(t) {
                c(t, e)
            })
        },
        c = function(t, i) {
            var n = e.target || t.srcElement;
            n && "a" !== n.nodeName.toLowerCase() && (n = n.parentElement);
            var o = n.getAttribute("data-cmd");
            if (o) {
                var r = {
                        url: i.url || "",
                        to: o,
                        pic: i.pic || "",
                        title: i.txt || "",
                        desc: i.txt || "",
                        apiType: "100",
                        type: "text"
                    },
                    s = jumpUrl = "";
                for (var a in r) {
                    var c = "&" + a + "=" + encodeURIComponent(r[a]);
                    s += c, "url" != a && (jumpUrl += c)
                }
                s = s.substr(1), jumpUrl = jumpUrl.substr(1), jumpUrl = "http://s.share.baidu.com/?" + jumpUrl;
                var u = "//www.baidu.com/tools?url=" + encodeURIComponent(i.url) + "&jump=" + encodeURIComponent(jumpUrl) + "&key=url";
                "weixin" === o ? ($(".c-tip-close").click(), d(i.url)) : window.open(u, "bdShare", "toolbar=0, scrollbars=1, status=0, resizable=1, height=400, width=600"), l(e + "/commit?" + s), i.callback && i.callback()
            }
        },
        d = function(e) {
            console.log(e, "f");
            var t, i, n, e = e,
                o = function() {
                    t.hide(), i.hide()
                },
                r = function() {
                    var e = "bdshare_weixin_qrcode_dialog";
                    if (t = $("#" + e), i = $("#" + e + "_bg"), t.length < 1) {
                        var o = '<iframe id="' + e + '_bg" class="bd_weixin_popup_bg"></iframe>',
                            r = ['<div id="' + e + '" class="bd_weixin_popup new-pmd">', '<div class="bd_weixin_popup_head">', "<span>分享到微信朋友圈</span>", '<i href="#" onclick="return false;" class="bd_weixin_popup_close c-icon c-tips-icon-close">&#xe610;</i>', "</div>", '<div id="' + e + '_qr" class="bd_weixin_popup_main"></div>', '<div class="bd_weixin_popup_foot">打开微信，点击底部的“发现”，<div style="height: 8px;"></div>使用“扫一扫”即可将网页分享至朋友圈。</div>', "</div>"].join("");
                        i = $(o).appendTo("body"), t = $(r).appendTo("body"), a()
                    }
                    console.log(t), n = t.find("#" + e + "_qr"), t.show(), i.show(), s()
                },
                s = function() {
                    var e = $(window).scrollTop(),
                        n = t.outerWidth(),
                        o = t.outerHeight(),
                        r = $(window).width(),
                        s = $(window).height(),
                        a = (s - o) / 2 + e,
                        c = (r - n) / 2;
                    a = 0 > a ? 0 : a, c = 0 > c ? 0 : c, i.css({
                        left: c,
                        top: a
                    }), t.css({
                        left: c,
                        top: a
                    })
                },
                a = function() {
                    t.find(".bd_weixin_popup_close").click(o), $("body").on("keydown", function(e) {
                        27 == e.keyCode && o()
                    }), $(window).resize(function() {
                        s()
                    })
                },
                c = function(e) {
                    function i(e, t) {
                        if (void 0 == e.length) throw new Error(e.length + "/" + t);
                        for (var i = 0; i < e.length && 0 == e[i];) i++;
                        this.num = new Array(e.length - i + t);
                        for (var n = 0; n < e.length - i; n++) this.num[n] = e[n + i]
                    }

                    function o() {
                        this.buffer = new Array, this.length = 0
                    }

                    function r(e, t) {
                        this.totalCount = e, this.dataCount = t
                    }

                    function a(e) {
                        this.mode = h.MODE_8BIT_BYTE, this.data = e
                    }

                    function c(e, t) {
                        this.typeNumber = e, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = new Array
                    }
                    for (var d = function(e) {
                            $(".bd_weixin_popup_foot").height() + $(".bd_weixin_popup_head").height() + e + 30
                        }, l = function(e) {
                            var t = Math.round(200 / e.length);
                            t = 2 > t ? 2 : t, tableWidth = t * e.length;
                            for (var i = ['<table style="direction:ltr;border: 0;border-collapse: collapse;background-color:#fff;margin:0 auto;" align="center">'], n = 0, o = e.length; o > n; n++) {
                                i.push("<tr>");
                                for (var r = 0, s = e[n].length; s > r; r++) i.push('<td style="width:4px;height:4px;padding:0;margin:0;border:none;background:#' + (e[n][r] ? "000" : "FFF") + '"></td>');
                                i.push("</tr>")
                            }
                            return i.push("</table>"), i.join("")
                        }, u = {
                            PATTERN000: 0,
                            PATTERN001: 1,
                            PATTERN010: 2,
                            PATTERN011: 3,
                            PATTERN100: 4,
                            PATTERN101: 5,
                            PATTERN110: 6,
                            PATTERN111: 7
                        }, p = {
                            glog: function(e) {
                                if (1 > e) throw new Error("glog(" + e + ")");
                                return p.LOG_TABLE[e]
                            },
                            gexp: function(e) {
                                for (; 0 > e;) e += 255;
                                for (; e >= 256;) e -= 255;
                                return p.EXP_TABLE[e]
                            },
                            EXP_TABLE: new Array(256),
                            LOG_TABLE: new Array(256)
                        }, m = 0; 8 > m; m++) p.EXP_TABLE[m] = 1 << m;
                    for (var m = 8; 256 > m; m++) p.EXP_TABLE[m] = p.EXP_TABLE[m - 4] ^ p.EXP_TABLE[m - 5] ^ p.EXP_TABLE[m - 6] ^ p.EXP_TABLE[m - 8];
                    for (var m = 0; 255 > m; m++) p.LOG_TABLE[p.EXP_TABLE[m]] = m;
                    i.prototype = {
                        get: function(e) {
                            return this.num[e]
                        },
                        getLength: function() {
                            return this.num.length
                        },
                        multiply: function(e) {
                            for (var t = new Array(this.getLength() + e.getLength() - 1), n = 0; n < this.getLength(); n++)
                                for (var o = 0; o < e.getLength(); o++) t[n + o] ^= p.gexp(p.glog(this.get(n)) + p.glog(e.get(o)));
                            return new i(t, 0)
                        },
                        mod: function(e) {
                            if (this.getLength() - e.getLength() < 0) return this;
                            for (var t = p.glog(this.get(0)) - p.glog(e.get(0)), n = new Array(this.getLength()), o = 0; o < this.getLength(); o++) n[o] = this.get(o);
                            for (var o = 0; o < e.getLength(); o++) n[o] ^= p.gexp(p.glog(e.get(o)) + t);
                            return new i(n, 0).mod(e)
                        }
                    };
                    var f = {
                        PATTERN_POSITION_TABLE: [
                            [],
                            [6, 18],
                            [6, 22],
                            [6, 26],
                            [6, 30],
                            [6, 34],
                            [6, 22, 38],
                            [6, 24, 42],
                            [6, 26, 46],
                            [6, 28, 50],
                            [6, 30, 54],
                            [6, 32, 58],
                            [6, 34, 62],
                            [6, 26, 46, 66],
                            [6, 26, 48, 70],
                            [6, 26, 50, 74],
                            [6, 30, 54, 78],
                            [6, 30, 56, 82],
                            [6, 30, 58, 86],
                            [6, 34, 62, 90],
                            [6, 28, 50, 72, 94],
                            [6, 26, 50, 74, 98],
                            [6, 30, 54, 78, 102],
                            [6, 28, 54, 80, 106],
                            [6, 32, 58, 84, 110],
                            [6, 30, 58, 86, 114],
                            [6, 34, 62, 90, 118],
                            [6, 26, 50, 74, 98, 122],
                            [6, 30, 54, 78, 102, 126],
                            [6, 26, 52, 78, 104, 130],
                            [6, 30, 56, 82, 108, 134],
                            [6, 34, 60, 86, 112, 138],
                            [6, 30, 58, 86, 114, 142],
                            [6, 34, 62, 90, 118, 146],
                            [6, 30, 54, 78, 102, 126, 150],
                            [6, 24, 50, 76, 102, 128, 154],
                            [6, 28, 54, 80, 106, 132, 158],
                            [6, 32, 58, 84, 110, 136, 162],
                            [6, 26, 54, 82, 110, 138, 166],
                            [6, 30, 58, 86, 114, 142, 170]
                        ],
                        G15: 1335,
                        G18: 7973,
                        G15_MASK: 21522,
                        getBCHTypeInfo: function(e) {
                            for (var t = e << 10; f.getBCHDigit(t) - f.getBCHDigit(f.G15) >= 0;) t ^= f.G15 << f.getBCHDigit(t) - f.getBCHDigit(f.G15);
                            return (e << 10 | t) ^ f.G15_MASK
                        },
                        getBCHTypeNumber: function(e) {
                            for (var t = e << 12; f.getBCHDigit(t) - f.getBCHDigit(f.G18) >= 0;) t ^= f.G18 << f.getBCHDigit(t) - f.getBCHDigit(f.G18);
                            return e << 12 | t
                        },
                        getBCHDigit: function(e) {
                            for (var t = 0; 0 != e;) t++, e >>>= 1;
                            return t
                        },
                        getPatternPosition: function(e) {
                            return f.PATTERN_POSITION_TABLE[e - 1]
                        },
                        getMask: function(e, t, i) {
                            switch (e) {
                                case u.PATTERN000:
                                    return (t + i) % 2 == 0;
                                case u.PATTERN001:
                                    return t % 2 == 0;
                                case u.PATTERN010:
                                    return i % 3 == 0;
                                case u.PATTERN011:
                                    return (t + i) % 3 == 0;
                                case u.PATTERN100:
                                    return (Math.floor(t / 2) + Math.floor(i / 3)) % 2 == 0;
                                case u.PATTERN101:
                                    return t * i % 2 + t * i % 3 == 0;
                                case u.PATTERN110:
                                    return (t * i % 2 + t * i % 3) % 2 == 0;
                                case u.PATTERN111:
                                    return (t * i % 3 + (t + i) % 2) % 2 == 0;
                                default:
                                    throw new Error("bad maskPattern:" + e)
                            }
                        },
                        getErrorCorrectPolynomial: function(e) {
                            for (var t = new i([1], 0), n = 0; e > n; n++) t = t.multiply(new i([1, p.gexp(n)], 0));
                            return t
                        },
                        getLengthInBits: function(e, t) {
                            if (t >= 1 && 10 > t) switch (e) {
                                case h.MODE_NUMBER:
                                    return 10;
                                case h.MODE_ALPHA_NUM:
                                    return 9;
                                case h.MODE_8BIT_BYTE:
                                    return 8;
                                case h.MODE_KANJI:
                                    return 8;
                                default:
                                    throw new Error("mode:" + e)
                            } else if (27 > t) switch (e) {
                                case h.MODE_NUMBER:
                                    return 12;
                                case h.MODE_ALPHA_NUM:
                                    return 11;
                                case h.MODE_8BIT_BYTE:
                                    return 16;
                                case h.MODE_KANJI:
                                    return 10;
                                default:
                                    throw new Error("mode:" + e)
                            } else {
                                if (!(41 > t)) throw new Error("type:" + t);
                                switch (e) {
                                    case h.MODE_NUMBER:
                                        return 14;
                                    case h.MODE_ALPHA_NUM:
                                        return 13;
                                    case h.MODE_8BIT_BYTE:
                                        return 16;
                                    case h.MODE_KANJI:
                                        return 12;
                                    default:
                                        throw new Error("mode:" + e)
                                }
                            }
                        },
                        getLostPoint: function(e) {
                            for (var t = e.getModuleCount(), i = 0, n = 0; t > n; n++)
                                for (var o = 0; t > o; o++) {
                                    for (var r = 0, s = e.isDark(n, o), a = -1; 1 >= a; a++)
                                        if (!(0 > n + a || n + a >= t))
                                            for (var c = -1; 1 >= c; c++) 0 > o + c || o + c >= t || (0 != a || 0 != c) && s == e.isDark(n + a, o + c) && r++;
                                    r > 5 && (i += 3 + r - 5)
                                }
                            for (var n = 0; t - 1 > n; n++)
                                for (var o = 0; t - 1 > o; o++) {
                                    var d = 0;
                                    e.isDark(n, o) && d++, e.isDark(n + 1, o) && d++, e.isDark(n, o + 1) && d++, e.isDark(n + 1, o + 1) && d++, (0 == d || 4 == d) && (i += 3)
                                }
                            for (var n = 0; t > n; n++)
                                for (var o = 0; t - 6 > o; o++) e.isDark(n, o) && !e.isDark(n, o + 1) && e.isDark(n, o + 2) && e.isDark(n, o + 3) && e.isDark(n, o + 4) && !e.isDark(n, o + 5) && e.isDark(n, o + 6) && (i += 40);
                            for (var o = 0; t > o; o++)
                                for (var n = 0; t - 6 > n; n++) e.isDark(n, o) && !e.isDark(n + 1, o) && e.isDark(n + 2, o) && e.isDark(n + 3, o) && e.isDark(n + 4, o) && !e.isDark(n + 5, o) && e.isDark(n + 6, o) && (i += 40);
                            for (var l = 0, o = 0; t > o; o++)
                                for (var n = 0; t > n; n++) e.isDark(n, o) && l++;
                            var u = Math.abs(100 * l / t / t - 50) / 5;
                            return i += 10 * u
                        }
                    };
                    o.prototype = {
                        get: function(e) {
                            var t = Math.floor(e / 8);
                            return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
                        },
                        put: function(e, t) {
                            for (var i = 0; t > i; i++) this.putBit(1 == (e >>> t - i - 1 & 1))
                        },
                        getLengthInBits: function() {
                            return this.length
                        },
                        putBit: function(e) {
                            var t = Math.floor(this.length / 8);
                            this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
                        }
                    }, r.RS_BLOCK_TABLE = [
                        [1, 26, 19],
                        [1, 26, 16],
                        [1, 26, 13],
                        [1, 26, 9],
                        [1, 44, 34],
                        [1, 44, 28],
                        [1, 44, 22],
                        [1, 44, 16],
                        [1, 70, 55],
                        [1, 70, 44],
                        [2, 35, 17],
                        [2, 35, 13],
                        [1, 100, 80],
                        [2, 50, 32],
                        [2, 50, 24],
                        [4, 25, 9],
                        [1, 134, 108],
                        [2, 67, 43],
                        [2, 33, 15, 2, 34, 16],
                        [2, 33, 11, 2, 34, 12],
                        [2, 86, 68],
                        [4, 43, 27],
                        [4, 43, 19],
                        [4, 43, 15],
                        [2, 98, 78],
                        [4, 49, 31],
                        [2, 32, 14, 4, 33, 15],
                        [4, 39, 13, 1, 40, 14],
                        [2, 121, 97],
                        [2, 60, 38, 2, 61, 39],
                        [4, 40, 18, 2, 41, 19],
                        [4, 40, 14, 2, 41, 15],
                        [2, 146, 116],
                        [3, 58, 36, 2, 59, 37],
                        [4, 36, 16, 4, 37, 17],
                        [4, 36, 12, 4, 37, 13],
                        [2, 86, 68, 2, 87, 69],
                        [4, 69, 43, 1, 70, 44],
                        [6, 43, 19, 2, 44, 20],
                        [6, 43, 15, 2, 44, 16],
                        [4, 101, 81],
                        [1, 80, 50, 4, 81, 51],
                        [4, 50, 22, 4, 51, 23],
                        [3, 36, 12, 8, 37, 13],
                        [2, 116, 92, 2, 117, 93],
                        [6, 58, 36, 2, 59, 37],
                        [4, 46, 20, 6, 47, 21],
                        [7, 42, 14, 4, 43, 15],
                        [4, 133, 107],
                        [8, 59, 37, 1, 60, 38],
                        [8, 44, 20, 4, 45, 21],
                        [12, 33, 11, 4, 34, 12],
                        [3, 145, 115, 1, 146, 116],
                        [4, 64, 40, 5, 65, 41],
                        [11, 36, 16, 5, 37, 17],
                        [11, 36, 12, 5, 37, 13],
                        [5, 109, 87, 1, 110, 88],
                        [5, 65, 41, 5, 66, 42],
                        [5, 54, 24, 7, 55, 25],
                        [11, 36, 12],
                        [5, 122, 98, 1, 123, 99],
                        [7, 73, 45, 3, 74, 46],
                        [15, 43, 19, 2, 44, 20],
                        [3, 45, 15, 13, 46, 16],
                        [1, 135, 107, 5, 136, 108],
                        [10, 74, 46, 1, 75, 47],
                        [1, 50, 22, 15, 51, 23],
                        [2, 42, 14, 17, 43, 15],
                        [5, 150, 120, 1, 151, 121],
                        [9, 69, 43, 4, 70, 44],
                        [17, 50, 22, 1, 51, 23],
                        [2, 42, 14, 19, 43, 15],
                        [3, 141, 113, 4, 142, 114],
                        [3, 70, 44, 11, 71, 45],
                        [17, 47, 21, 4, 48, 22],
                        [9, 39, 13, 16, 40, 14],
                        [3, 135, 107, 5, 136, 108],
                        [3, 67, 41, 13, 68, 42],
                        [15, 54, 24, 5, 55, 25],
                        [15, 43, 15, 10, 44, 16],
                        [4, 144, 116, 4, 145, 117],
                        [17, 68, 42],
                        [17, 50, 22, 6, 51, 23],
                        [19, 46, 16, 6, 47, 17],
                        [2, 139, 111, 7, 140, 112],
                        [17, 74, 46],
                        [7, 54, 24, 16, 55, 25],
                        [34, 37, 13],
                        [4, 151, 121, 5, 152, 122],
                        [4, 75, 47, 14, 76, 48],
                        [11, 54, 24, 14, 55, 25],
                        [16, 45, 15, 14, 46, 16],
                        [6, 147, 117, 4, 148, 118],
                        [6, 73, 45, 14, 74, 46],
                        [11, 54, 24, 16, 55, 25],
                        [30, 46, 16, 2, 47, 17],
                        [8, 132, 106, 4, 133, 107],
                        [8, 75, 47, 13, 76, 48],
                        [7, 54, 24, 22, 55, 25],
                        [22, 45, 15, 13, 46, 16],
                        [10, 142, 114, 2, 143, 115],
                        [19, 74, 46, 4, 75, 47],
                        [28, 50, 22, 6, 51, 23],
                        [33, 46, 16, 4, 47, 17],
                        [8, 152, 122, 4, 153, 123],
                        [22, 73, 45, 3, 74, 46],
                        [8, 53, 23, 26, 54, 24],
                        [12, 45, 15, 28, 46, 16],
                        [3, 147, 117, 10, 148, 118],
                        [3, 73, 45, 23, 74, 46],
                        [4, 54, 24, 31, 55, 25],
                        [11, 45, 15, 31, 46, 16],
                        [7, 146, 116, 7, 147, 117],
                        [21, 73, 45, 7, 74, 46],
                        [1, 53, 23, 37, 54, 24],
                        [19, 45, 15, 26, 46, 16],
                        [5, 145, 115, 10, 146, 116],
                        [19, 75, 47, 10, 76, 48],
                        [15, 54, 24, 25, 55, 25],
                        [23, 45, 15, 25, 46, 16],
                        [13, 145, 115, 3, 146, 116],
                        [2, 74, 46, 29, 75, 47],
                        [42, 54, 24, 1, 55, 25],
                        [23, 45, 15, 28, 46, 16],
                        [17, 145, 115],
                        [10, 74, 46, 23, 75, 47],
                        [10, 54, 24, 35, 55, 25],
                        [19, 45, 15, 35, 46, 16],
                        [17, 145, 115, 1, 146, 116],
                        [14, 74, 46, 21, 75, 47],
                        [29, 54, 24, 19, 55, 25],
                        [11, 45, 15, 46, 46, 16],
                        [13, 145, 115, 6, 146, 116],
                        [14, 74, 46, 23, 75, 47],
                        [44, 54, 24, 7, 55, 25],
                        [59, 46, 16, 1, 47, 17],
                        [12, 151, 121, 7, 152, 122],
                        [12, 75, 47, 26, 76, 48],
                        [39, 54, 24, 14, 55, 25],
                        [22, 45, 15, 41, 46, 16],
                        [6, 151, 121, 14, 152, 122],
                        [6, 75, 47, 34, 76, 48],
                        [46, 54, 24, 10, 55, 25],
                        [2, 45, 15, 64, 46, 16],
                        [17, 152, 122, 4, 153, 123],
                        [29, 74, 46, 14, 75, 47],
                        [49, 54, 24, 10, 55, 25],
                        [24, 45, 15, 46, 46, 16],
                        [4, 152, 122, 18, 153, 123],
                        [13, 74, 46, 32, 75, 47],
                        [48, 54, 24, 14, 55, 25],
                        [42, 45, 15, 32, 46, 16],
                        [20, 147, 117, 4, 148, 118],
                        [40, 75, 47, 7, 76, 48],
                        [43, 54, 24, 22, 55, 25],
                        [10, 45, 15, 67, 46, 16],
                        [19, 148, 118, 6, 149, 119],
                        [18, 75, 47, 31, 76, 48],
                        [34, 54, 24, 34, 55, 25],
                        [20, 45, 15, 61, 46, 16]
                    ], r.getRSBlocks = function(e, t) {
                        var i = r.getRsBlockTable(e, t);
                        if (void 0 == i) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
                        for (var n = i.length / 3, o = new Array, s = 0; n > s; s++)
                            for (var a = i[3 * s + 0], c = i[3 * s + 1], d = i[3 * s + 2], l = 0; a > l; l++) o.push(new r(c, d));
                        return o
                    }, r.getRsBlockTable = function(e, t) {
                        switch (t) {
                            case g.L:
                                return r.RS_BLOCK_TABLE[4 * (e - 1) + 0];
                            case g.M:
                                return r.RS_BLOCK_TABLE[4 * (e - 1) + 1];
                            case g.Q:
                                return r.RS_BLOCK_TABLE[4 * (e - 1) + 2];
                            case g.H:
                                return r.RS_BLOCK_TABLE[4 * (e - 1) + 3];
                            default:
                                return void 0
                        }
                    };
                    var h = {
                        MODE_NUMBER: 1,
                        MODE_ALPHA_NUM: 2,
                        MODE_8BIT_BYTE: 4,
                        MODE_KANJI: 8
                    };
                    a.prototype = {
                        getLength: function() {
                            return this.data.length
                        },
                        write: function(e) {
                            for (var t = 0; t < this.data.length; t++) e.put(this.data.charCodeAt(t), 8)
                        }
                    }, c.prototype = {
                        addData: function(e) {
                            var t = new a(e);
                            this.dataList.push(t), this.dataCache = null
                        },
                        isDark: function(e, t) {
                            if (0 > e || this.moduleCount <= e || 0 > t || this.moduleCount <= t) throw new Error(e + "," + t);
                            return this.modules[e][t]
                        },
                        getModuleCount: function() {
                            return this.moduleCount
                        },
                        make: function() {
                            if (this.typeNumber < 1) {
                                var e = 1;
                                for (e = 1; 40 > e; e++) {
                                    for (var t = r.getRSBlocks(e, this.errorCorrectLevel), i = new o, n = 0, s = 0; s < t.length; s++) n += t[s].dataCount;
                                    for (var s = 0; s < this.dataList.length; s++) {
                                        var a = this.dataList[s];
                                        i.put(a.mode, 4), i.put(a.getLength(), f.getLengthInBits(a.mode, e)), a.write(i)
                                    }
                                    if (i.getLengthInBits() <= 8 * n) break
                                }
                                this.typeNumber = e
                            }
                            this.makeImpl(!1, this.getBestMaskPattern())
                        },
                        makeImpl: function(e, t) {
                            this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
                            for (var i = 0; i < this.moduleCount; i++) {
                                this.modules[i] = new Array(this.moduleCount);
                                for (var n = 0; n < this.moduleCount; n++) this.modules[i][n] = null
                            }
                            this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, t), this.typeNumber >= 7 && this.setupTypeNumber(e), null == this.dataCache && (this.dataCache = c.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, t)
                        },
                        setupPositionProbePattern: function(e, t) {
                            for (var i = -1; 7 >= i; i++)
                                if (!(-1 >= e + i || this.moduleCount <= e + i))
                                    for (var n = -1; 7 >= n; n++) - 1 >= t + n || this.moduleCount <= t + n || (this.modules[e + i][t + n] = i >= 0 && 6 >= i && (0 == n || 6 == n) || n >= 0 && 6 >= n && (0 == i || 6 == i) || i >= 2 && 4 >= i && n >= 2 && 4 >= n ? !0 : !1)
                        },
                        getBestMaskPattern: function() {
                            for (var e = 0, t = 0, i = 0; 8 > i; i++) {
                                this.makeImpl(!0, i);
                                var n = f.getLostPoint(this);
                                (0 == i || e > n) && (e = n, t = i)
                            }
                            return t
                        },
                        createMovieClip: function(e, t, i) {
                            var n = e.createEmptyMovieClip(t, i),
                                o = 1;
                            this.make();
                            for (var r = 0; r < this.modules.length; r++)
                                for (var s = r * o, a = 0; a < this.modules[r].length; a++) {
                                    var c = a * o,
                                        d = this.modules[r][a];
                                    d && (n.beginFill(0, 100), n.moveTo(c, s), n.lineTo(c + o, s), n.lineTo(c + o, s + o), n.lineTo(c, s + o), n.endFill())
                                }
                            return n
                        },
                        setupTimingPattern: function() {
                            for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
                            for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0)
                        },
                        setupPositionAdjustPattern: function() {
                            for (var e = f.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
                                for (var i = 0; i < e.length; i++) {
                                    var n = e[t],
                                        o = e[i];
                                    if (null == this.modules[n][o])
                                        for (var r = -2; 2 >= r; r++)
                                            for (var s = -2; 2 >= s; s++) this.modules[n + r][o + s] = -2 == r || 2 == r || -2 == s || 2 == s || 0 == r && 0 == s ? !0 : !1
                                }
                        },
                        setupTypeNumber: function(e) {
                            for (var t = f.getBCHTypeNumber(this.typeNumber), i = 0; 18 > i; i++) {
                                var n = !e && 1 == (t >> i & 1);
                                this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = n
                            }
                            for (var i = 0; 18 > i; i++) {
                                var n = !e && 1 == (t >> i & 1);
                                this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = n
                            }
                        },
                        setupTypeInfo: function(e, t) {
                            for (var i = this.errorCorrectLevel << 3 | t, n = f.getBCHTypeInfo(i), o = 0; 15 > o; o++) {
                                var r = !e && 1 == (n >> o & 1);
                                6 > o ? this.modules[o][8] = r : 8 > o ? this.modules[o + 1][8] = r : this.modules[this.moduleCount - 15 + o][8] = r
                            }
                            for (var o = 0; 15 > o; o++) {
                                var r = !e && 1 == (n >> o & 1);
                                8 > o ? this.modules[8][this.moduleCount - o - 1] = r : 9 > o ? this.modules[8][15 - o - 1 + 1] = r : this.modules[8][15 - o - 1] = r
                            }
                            this.modules[this.moduleCount - 8][8] = !e
                        },
                        mapData: function(e, t) {
                            for (var i = -1, n = this.moduleCount - 1, o = 7, r = 0, s = this.moduleCount - 1; s > 0; s -= 2)
                                for (6 == s && s--;;) {
                                    for (var a = 0; 2 > a; a++)
                                        if (null == this.modules[n][s - a]) {
                                            var c = !1;
                                            r < e.length && (c = 1 == (e[r] >>> o & 1));
                                            var d = f.getMask(t, n, s - a);
                                            d && (c = !c), this.modules[n][s - a] = c, o--, -1 == o && (r++, o = 7)
                                        } if (n += i, 0 > n || this.moduleCount <= n) {
                                        n -= i, i = -i;
                                        break
                                    }
                                }
                        }
                    }, c.PAD0 = 236, c.PAD1 = 17, c.createData = function(e, t, i) {
                        for (var n = r.getRSBlocks(e, t), s = new o, a = 0; a < i.length; a++) {
                            var d = i[a];
                            s.put(d.mode, 4), s.put(d.getLength(), f.getLengthInBits(d.mode, e)), d.write(s)
                        }
                        for (var l = 0, a = 0; a < n.length; a++) l += n[a].dataCount;
                        if (s.getLengthInBits() > 8 * l) throw new Error("code length overflow. (" + s.getLengthInBits() + ">" + 8 * l + ")");
                        for (s.getLengthInBits() + 4 <= 8 * l && s.put(0, 4); s.getLengthInBits() % 8 != 0;) s.putBit(!1);
                        for (; !(s.getLengthInBits() >= 8 * l || (s.put(c.PAD0, 8), s.getLengthInBits() >= 8 * l));) s.put(c.PAD1, 8);
                        return c.createBytes(s, n)
                    }, c.createBytes = function(e, t) {
                        for (var n = 0, o = 0, r = 0, s = new Array(t.length), a = new Array(t.length), c = 0; c < t.length; c++) {
                            var d = t[c].dataCount,
                                l = t[c].totalCount - d;
                            o = Math.max(o, d), r = Math.max(r, l), s[c] = new Array(d);
                            for (var u = 0; u < s[c].length; u++) s[c][u] = 255 & e.buffer[u + n];
                            n += d;
                            var p = f.getErrorCorrectPolynomial(l),
                                m = new i(s[c], p.getLength() - 1),
                                h = m.mod(p);
                            a[c] = new Array(p.getLength() - 1);
                            for (var u = 0; u < a[c].length; u++) {
                                var g = u + h.getLength() - a[c].length;
                                a[c][u] = g >= 0 ? h.get(g) : 0
                            }
                        }
                        for (var b = 0, u = 0; u < t.length; u++) b += t[u].totalCount;
                        for (var v = new Array(b), w = 0, u = 0; o > u; u++)
                            for (var c = 0; c < t.length; c++) u < s[c].length && (v[w++] = s[c][u]);
                        for (var u = 0; r > u; u++)
                            for (var c = 0; c < t.length; c++) u < a[c].length && (v[w++] = a[c][u]);
                        return v
                    };
                    var g = {
                            L: 1,
                            M: 0,
                            Q: 3,
                            H: 2
                        },
                        b = new c(-1, g.L);
                    b.addData(e), b.make();
                    var v = l(b.modules);
                    $(v).appendTo(n.empty()), d(tableWidth), s(), t.attr("data-url", e)
                },
                d = function() {
                    t.attr("data-url") != e && (n.html("正在加载"), c(e))
                };
            r(), d()
        },
        l = function() {
            var e = {};
            return function(t) {
                var i = "bdsharelog__" + (new Date).getTime(),
                    n = e[i] = new Image;
                n.onload = n.onerror = function() {
                    e[i] = null
                }, n.src = t + "&t=" + (new Date).getTime(), n = null
            }
        }(),
        u = function(e) {
            e.boxEle && (s(e), a(e))
        };
    return {
        render: u
    }
}();
var __callback_names = {};
$(function() {
    bds.comm.user && "" != bds.comm.user && setTimeout(function() {
        $.ajax({
            dataType: "script",
            cache: !0,
            url: (bds.su && bds.su.urStatic ? bds.su.urStatic : "http://ss.bdimg.com") + "/static/message/js/mt_show_1.8.js",
            success: function() {
                function e() {
                    $("#imsg")[0] && $("#u")[0] && $("#user")[0] && (bds.se.message && bds.se.message.init && bds.se.message.init({
                        button: $("#imsg"),
                        refer: $("#u")
                    }), $("#user").on("mouseover", function() {
                        $("#s_mod_msg").hide()
                    })), $("#imsg1")[0] && $("#u1")[0] && $("#user1")[0] && (bds.se.message && bds.se.message.init && bds.se.message.init({
                        button: $("#imsg1"),
                        refer: $("#u1")
                    }), $("#user1").on("mouseover", function() {
                        $("#s_mod_msg").hide()
                    }))
                }

                function t() {
                    bds.se.message && bds.se.message.addStyle && bds.se.message.addStyle()
                }
                bds.comm.loginAction.push(function(i) {
                    1 == i && (e(), t())
                }), bds.comm.newindex ? $(window).on("index_off", function() {
                    setTimeout(function() {
                        e(), t()
                    }, 0)
                }) : (e(), t()), $(window).on("swap_end", t)
            }
        })
    }, 0)
}), $(window).on("swap_end", function() {
    var e = '<div id="_FP_userDataDiv" style="behavior:url(#default#userdata);width:0px;height:0px;position:absolute;top:-1000px;left:-1000px"></div><div id="_FP_comDiv" style="behavior:url(#default#clientCaps);width:0px;height:0px;position:absolute;top:-1000px;left:-1000px"></div>',
        t = "//www.baidu.com/cache/fpid/ielib_0108.js",
        i = "//www.baidu.com/cache/fpid/chromelib_0108.js",
        n = document.title,
        o = {
            flashDomId: "_FP_userDataDiv",
            comDomId: "_FP_comDiv",
            IEStoreDomId: "_FP_userDataDiv"
        },
        r = navigator.userAgent.toLowerCase(),
        s = !1;
    (r.indexOf("msie") >= 0 || new RegExp("trident(.*)rv.(\\d+)\\.(\\d+)").test(r)) && (s = !0);
    var a, c = !1,
        d = new RegExp("chrome/(\\d+)"),
        l = r.match(d);
    if (l && (c = !0, a = l[1]), !(c && a >= 39)) {
        $("body").append(e);
        var u = function(e) {
            s && window.setTimeout(function() {
                document.title = n
            }, 0), window._FPID_CACHE = e, $("#_FP_userDataDiv").remove(), $("#_FP_comDiv").remove();
            var t = bds.comm.qid,
                i = "_WWW_BR_API_" + (new Date).getTime(),
                o = window[i] = new Image;
            o.onload = function() {
                window[i] = null
            };
            var r = $.getCookie("BAIDUID"),
                a = $.getCookie("BIDUPSID"),
                c = bds && bds.util && bds.util.domain ? bds.util.domain.get("http://eclick.baidu.com/ps_fp.htm?") : "http://eclick.baidu.com/ps_fp.htm?",
                d = c + "pid=ps&fp=" + e.data.fp + "&im=" + e.data.im + "&wf=" + e.data.wf + "&br=" + e.data.br + "&qid=" + t + "&bi=" + r + "&psid=" + a;
            o.src = d
        };
        return window._FPID_CACHE ? void(window._FPIDTimer = window.setTimeout(function() {
            u(window._FPID_CACHE)
        }, 2500)) : void(window._FPIDTimer = window.setTimeout(function() {
            var e = "";
            e = s ? t : i, $.ajax({
                url: e,
                cache: !0,
                dataType: "script",
                success: function() {
                    fpLib.getFp(u, o)
                }
            })
        }, 2500))
    }
}), $(window).on("swap_begin", function() {
    window._FPIDTimer && (window.clearTimeout(window._FPIDTimer), $("#_FP_userDataDiv").remove(), $("#_FP_comDiv").remove())
});
var bds = bds || {};
bds.se = bds.se || {}, bds.se.upn = {
    regexp: /BD_UPN=([\w|\d]*)/,
    cookieset: [],
    write: function(e) {
        document.cookie = "BD_UPN=" + e + "; expires=" + new Date((new Date).getTime() + 864e6).toGMTString()
    },
    set: function(e) {
        var t = this;
        try {
            $.isArray(e) && (t.cookieset = t.cookieset.concat(e))
        } catch (i) {}
    },
    run: function() {
        var e = this;
        try {
            for (var t = "", i = 0; i < e.cookieset.length; i++)
                if (e.cookieset[i] && e.cookieset[i].k && e.cookieset[i].v) {
                    var n = e.cookieset[i].k + "",
                        o = e.cookieset[i].v + "";
                    if (n.length == o.length == 1) {
                        var r = {};
                        r[n] = o, t = t + n + o
                    }
                } e.write(t)
        } catch (s) {}
    }
}, bds.se.upn.set(function() {
    function e() {
        return n.indexOf("lbbrowser") > 0 ? n.match(/lbbrowser/gi) : n.indexOf("maxthon") > 0 ? n.match(/maxthon\/[\d.]+/gi) : n.indexOf("bidubrowser") > 0 ? n.match(/bidubrowser/gi) : n.indexOf("baiduclient") > 0 ? n.match(/baiduclient/gi) : n.indexOf("metasr") > 0 ? n.match(/metasr/gi) : n.indexOf("qqbrowser") > 0 ? n.match(/qqbrowser/gi) : ! function() {
            if (navigator.mimeTypes.length > 0) {
                var e;
                for (e in navigator.mimeTypes)
                    if ("application/vnd.chromium.remoting-viewer" == navigator.mimeTypes[e].type) return !0
            }
            return !1
        }() && "track" in document.createElement("track") && !("scoped" in document.createElement("style")) && !("v8Locale" in window) && /Gecko\)\s+Chrome/.test(navigator.appVersion) && "track" in document.createElement("track") && "scoped" in document.createElement("style") && "v8Locale" in window ? "qihu" : n.indexOf("msie") > 0 ? n.match(/msie [\d.]+;/gi) : window.document.documentMode ? "msie" : n.indexOf("edge") > 0 ? n.match(/edge\/[\d.]+/gi) : n.indexOf("firefox") > 0 ? n.match(/firefox\/[\d.]+/gi) : n.indexOf("opr") > 0 ? n.match(/opr\/[\d.]+/gi) : n.indexOf("chrome") > 0 ? n.match(/chrome\/[\d.]+/gi) : n.indexOf("safari") > 0 && n.indexOf("chrome") < 0 ? n.match(/safari\/[\d.]+/gi) : ""
    }

    function t() {
        var e = "Win32" == navigator.platform || "Windows" == navigator.platform,
            t = "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform || "MacIntel" == navigator.platform;
        if (t) return "mac";
        var i = "X11" == navigator.platform && !e && !t;
        if (i) return "unix";
        var n = String(navigator.platform).indexOf("Linux") > -1;
        return n ? "linux" : e ? "windows" : "other"
    }
    var i = navigator.userAgent,
        n = i.toLowerCase();
    browser = (e() + "").replace(/[0-9.\/|;|\s]/gi, ""), browserversion = function() {
        return "msie" == browser ? i.search(/MSIE [2-5]/) > 0 ? "ie5" : i.indexOf("MSIE 6") > 0 ? "ie6" : i.indexOf("MSIE 7") > 0 ? "ie7" : i.indexOf("MSIE 8") > 0 ? "ie8" : i.indexOf("MSIE 9") > 0 ? "ie9" : i.indexOf("MSIE 10") > 0 ? "ie10" : "11" == window.document.documentMode ? "ie11" : "other" : ""
    }(), browsertype = function() {
        return n.indexOf("msie") > 0 || new RegExp("trident(.*)rv.(\\d+)\\.(\\d+)").test(n) ? "ie" : n.indexOf("firefox") > 0 ? "firefox" : n.indexOf("chrome") > 0 ? "chrome" : n.indexOf("safari") > 0 && n.indexOf("chrome") < 0 ? "safari" : "other"
    }(), os = t(), osversion = function() {
        return "windows" == os ? i.indexOf("Windows NT 5.1") > -1 || i.indexOf("Windows XP") > -1 ? "xp" : (isWinVista = i.indexOf("Windows NT 6.0") > -1 || i.indexOf("Windows Vista") > -1) ? "vista" : i.indexOf("Windows NT 6.1") > -1 || i.indexOf("Windows 7") > -1 ? "win7" : i.indexOf("Windows NT 6.2") > -1 || i.indexOf("Windows 8") > -1 ? "win8" : i.indexOf("Windows NT 6.3") > -1 || i.indexOf("Windows 8.1") > -1 ? "win8.1" : i.indexOf("Windows NT 10") > -1 ? "win10" : "other" : void 0
    }();
    var o = function(e) {
            var t = 0;
            switch (e) {
                case "msie":
                    t = 1;
                    break;
                case "chrome":
                    t = 2;
                    break;
                case "firefox":
                    t = 3;
                    break;
                case "safari":
                    t = 4;
                    break;
                case "opr":
                    t = 5;
                    break;
                case "lbbrowser":
                    t = 6;
                    break;
                case "maxthon":
                    t = 7;
                    break;
                case "bidubrowser":
                    t = 8;
                    break;
                case "metasr":
                    t = 9;
                    break;
                case "qqbrowser":
                    t = "a";
                    break;
                case "qihu":
                    t = "b";
                    break;
                case "baiduclient":
                    t = "c";
                    break;
                case "edge":
                    t = "d"
            }
            return t
        }(browser),
        r = function(e) {
            var t = 0;
            switch (e) {
                case "ie6":
                    t = 1;
                    break;
                case "ie7":
                    t = 2;
                    break;
                case "ie8":
                    t = 3;
                    break;
                case "ie9":
                    t = 4;
                    break;
                case "ie10":
                    t = 5;
                    break;
                case "ie11":
                    t = 6;
                    break;
                case "other":
                    t = 7;
                    break;
                case "ie5":
                    t = 8
            }
            return t
        }(browserversion),
        s = function(e) {
            var t = 0;
            switch (e) {
                case "windows":
                    t = 1;
                    break;
                case "mac":
                    t = 2;
                    break;
                case "linux":
                    t = 3;
                    break;
                case "unix":
                    t = 4
            }
            return t
        }(os),
        a = function(e) {
            var t = 0;
            switch (e) {
                case "xp":
                    t = 1;
                    break;
                case "vista":
                    t = 2;
                    break;
                case "win7":
                    t = 3;
                    break;
                case "win8":
                    t = 4;
                    break;
                case "win8.1":
                    t = 5;
                    break;
                case "other":
                    t = 6;
                    break;
                case "win10":
                    t = 7
            }
            return t
        }(osversion),
        c = function(e) {
            var t = 0;
            switch (e) {
                case "ie":
                    t = 1;
                    break;
                case "firefox":
                    t = 2;
                    break;
                case "chrome":
                    t = 3;
                    break;
                case "safari":
                    t = 4
            }
            return t
        }(browsertype);
    return [{
        k: 1,
        v: o
    }, {
        k: 2,
        v: r
    }, {
        k: 3,
        v: s
    }, {
        k: 4,
        v: a
    }, {
        k: 5,
        v: c
    }]
}()), bds.se.upn.run(), bds.se.heightControl = {
    check: function() {
        return $("#content_right").height() > $("#content_left").height()
    },
    cleanEC: function() {
        var e = $(".ec_bdtg"),
            t = $("#ec_im_container").children("div"),
            i = t.length,
            n = i - 1;
        for (bds.se.heightControl.check() && e && e.length && e.css("display", "none"); bds.se.heightControl.check() && n >= 0;) {
            var o = t[n];
            $(o).css("display", "none"), n--
        }
    },
    cleanRes: function() {
        var e = $("#content_right").find(".result-op"),
            t = e.length,
            i = t - 1;
        if (0 == i) {
            var n = $(e[0]).parent();
            $("#content_right").height() + e.height() < $("#content_left").height() && n.css({
                position: "static"
            })
        } else {
            for (var o = null, r = null, s = i; s >= 0; s--) {
                var a = e[s];
                null === o && $(a).find(".FYB_RD").length > 0 ? o = s : null === r && $(a).find(".FYB_BD").length > 0 && (r = s)
            }
            if (null !== o && null !== r) {
                var c = e[o];
                e[o] = e[r], e[r] = c
            }
            for (; bds.se.heightControl.check() && i > 0;) {
                var d = e[i];
                $(d).css("display", "none"), ns_c($.extend($(d).data("click"), {
                    rsv_tpl: $(d).attr("tpl"),
                    fm: "hide",
                    qid: bds.comm.qid,
                    tab: "baidu_rightheightadjust"
                })), i--
            }
        }
    },
    init: function() {
        bds.se.heightControl.cleanEC(), bds.se.heightControl.cleanRes()
    }
}, ! function() {
    function e() {
        this.start = null, this.mouse = [], this.mouseTime = null, this.mouseSpeed = 500, this.key = [], this.scroll = [], this.scrollTime = null, this.scrollSpeed = 500, this.debug = !1, this.dataStore = {}, this.t = null, this.cycle = null, this.MIN_SPEED = 2e3, this.MAX_SPEED = 1e4, this.curSpeed = 5e3, this.stayTime = 0, this.heartTime = [], this.heartT = null, this.MAX_LEN = 2e3, this.storeLen = -1, this.MAX_SEND = 100, this.hostEnum = {
            SCLICK: 0,
            NSCLICK: 1,
            SESTAT: 2
        }, this.keyMap = {
            new_input: 2,
            new_disp: 2,
            new_view: 2,
            new_user: 2,
            new_heart: 2,
            flow_monitor: 2
        }, this.hostAddr = [bds && bds.comm && bds.comm.ubsurl ? bds.comm.ubsurl + "?" : "", (bds && bds.util && bds.util.domain ? bds.util.domain.get("http://nsclick.baidu.com") : "http://nsclick.baidu.com") + "/v.gif?", (bds && bds.util && bds.util.domain ? bds.util.domain.get("http://sestat.baidu.com") : "http://sestat.baidu.com") + "/wb.gif?"], this.commLog = {}, this.isFirst = !0, this.sendNum = {}, this.init()
    }
    e.prototype = {
        setCommLog: function(e, t, i) {
            if (!bds || !bds.comm) return !1;
            if (!(e in this.commLog)) {
                var n = {};
                t && i ? (n.log = t, n.len = i) : (n.log = "&q=" + bds.comm.queryEnc + "&qid=" + bds.comm.qid + "&rsv_did=" + bds.comm.did + "&rsv_tn=" + bds.comm.tn + "&rsv_sid=" + bds.comm.sid, n.len = (n.log + "&t=" + (new Date).getTime()).length), this.commLog[e] = n
            }
            return !0
        },
        fb: function() {
            var e, t = this.heartTime.length;
            return e = 0 === t || 1 === t ? 3e3 : this.heartTime[t - 1] + this.heartTime[t - 2], this.heartTime.push(e), e
        },
        sendHeart: function(e) {
            var t = 0 === e ? this.stayTime : (new Date).getTime() - this.start,
                i = bds && bds.comm && bds.comm.qid;
            if (i && i in this.commLog && i in this.sendNum) {
                var n = [{
                    stay_time: t,
                    send_num: this.sendNum[i]
                }];
                this.send({
                    type: e,
                    fm: "new_heart",
                    data: n
                }, this.keyMap.new_heart)
            }
        },
        startHeart: function() {
            var e = this,
                t = e.fb();
            e.stayTime += t, e.heartT = setTimeout(function() {
                e.sendHeart(0), e.startHeart()
            }, t)
        },
        preInit: function() {
            this.start = (new Date).getTime(), this.mouse = [], null !== this.mouseTime && clearTimeout(this.mouseTime), this.mouseTime = null, this.key = [], this.scroll = [], null !== this.scrollTime && clearTimeout(this.scrollTime), this.scrollTime = null, this.cycle = null, null !== this.t && clearTimeout(this.t), this.t = null, this.storeLen = -1;
            var e = bds && bds.comm && bds.comm.qid ? bds.comm.qid : "";
            e && (this.setCommLog(e), this.sendNum[e] = 0), bds && bds.comm && (1 === bds.comm.logFlagSug || 1 === bds.comm.globalLogFlag) && 0 === bds.comm.ishome && (null !== this.heartT && clearTimeout(this.heartT), this.heartT = null, this.stayTime = 0, this.heartTime = [], this.startHeart())
        },
        collectPoint: function(e, t) {
            function i(e, t) {
                var i = [];
                if ("mouse" === e) i[0] = t.pageX, i[1] = t.pageY;
                else if ("scroll" === e) {
                    var n = $(window);
                    i[0] = n.scrollLeft(), i[1] = n.scrollTop()
                }
                return i
            }
            var n = e + "Time",
                o = this[e + "Speed"],
                r = this;
            if (0 === r[e].length) {
                var s = i(e, t);
                if (s.length < 2) return;
                return void r[e].push([(new Date).getTime() - r.start, s[0], s[1]])
            }
            null === r[n] && (r[n] = setTimeout(function() {
                var o = i(e, t);
                return o.length < 2 ? void(r[n] = null) : (r[e].push([(new Date).getTime() - r.start, o[0], o[1]]), void(r[n] = null))
            }, o))
        },
        singleInit: function() {
            var e = this;
            $("body").on("mousemove", function(t) {
                e.collectPoint("mouse", t)
            }).on("keydown", function(t) {
                e.key.push([(new Date).getTime() - e.start, t.keyCode])
            }), $(window).on("scroll", function(t) {
                e.collectPoint("scroll", t)
            }), e.singleInit = function() {}
        },
        flushData: function(e) {
            null !== this.t && (clearTimeout(this.t), this.t = null), this.startSend(this.fetchData(e, !0), !0), this.startSend(this.fetchData(e, !0)), bds && bds.comm && (1 === bds.comm.logFlagSug || 1 === bds.comm.globalLogFlag) && (null !== this.heartT && (clearTimeout(this.heartT), this.heartT = null), this.sendHeart(e))
        },
        init: function() {
            var e = this;
            e.preInit(), $(window).on("swap_begin", function() {
                null !== e.t && (clearTimeout(e.t), e.t = null), bds && bds.comm && 0 === bds.comm.ishome && (1 === bds.comm.logFlag || 1 === bds.comm.globalLogFlag) && e.isFirst === !1 && e.sendHeart(1)
            }).on("unload", function() {
                bds && bds.comm && 0 === bds.comm.ishome && (1 === bds.comm.logFlagSug || 1 === bds.comm.globalLogFlag) && e.flushData(2)
            }).on("swap_end", function() {
                e.preInit(), e.isFirst === !0 && (e.isFirst = !1), !e.hostAddr[0] && bds && bds.comm && bds.comm.ubsurl && (e.hostAddr[0] = bds.comm.ubsurl + "?")
            })
        },
        getData: function(e, t, i) {
            if (null === this.start || 0 === e.length) return {
                startTime: this.start,
                record: []
            };
            var n = {
                    startTime: this.start,
                    record: []
                },
                o = t,
                r = i;
            void 0 === o ? (o = 0, r = e[e.length - 1][0]) : void 0 !== o && "number" == typeof o && void 0 === r ? (o -= this.start, r = e[e.length - 1][0]) : void 0 !== o && "number" == typeof o && void 0 !== r && "number" == typeof r ? (o -= this.start, r -= this.start) : (o = 0, r = 0);
            for (var s in e)
                if (!(e[s][0] < o) && (e[s][0] < r && n.record.push(e[s]), e[s][0] >= r)) break;
            return n
        },
        send: function(e, t, i) {
            if (!e) return !1;
            if (this.debug, 0 === t && !this.hostAddr[0]) {
                if (!(bds && bds.comm && bds.comm.ubsurl)) return !1;
                this.hostAddr[0] = bds.comm.ubsurl + "?"
            }
            var n = "",
                o = "",
                r = "";
            if ("object" == typeof e) {
                for (var s in e) n = e[s], "object" == typeof n && (n = $.stringify(n)), o += s + "=" + encodeURIComponent(n) + "&";
                o = o.substring(0, o.length - 1)
            } else "string" == typeof e && (o = e);
            if (!i && bds && bds.comm && bds.comm.qid && (i = bds.comm.qid), !(i && i in this.commLog)) return !1;
            if (o += this.commLog[i].log, o += "&t=" + (new Date).getTime(), ("number" != typeof t || 0 > t || t >= this.hostAddr.length) && (t = 0), r = this.hostAddr[t] + o, r.length > this.MAX_LEN) return !1;
            var a = window["BD_PS_C" + (new Date).getTime()] = new Image;
            return a.src = this.hostAddr[t] + o, !0
        },
        sendNow: function(e, t, i) {
            if (e && "string" == typeof e && e in this.keyMap && t) {
                var n = "type=3&fm=" + e + "&data=" + encodeURIComponent($.stringify([t]));
                i && i.qid && i.log && i.len ? (this.setCommLog(i.qid, i.log, i), this.send(n, this.keyMap[e], i.qid)) : send(n, this.keyMap[e])
            }
        },
        pushData: function(e, t, i) {
            var n = bds && bds.comm && bds.comm.qid ? bds.comm.qid : "";
            if (!n) return !1;
            i && i.qid && i.log && i.len ? (this.setCommLog(i.qid, i.log, i.len), n = i.qid) : this.setCommLog(n), n in this.dataStore || (this.dataStore[n] = {});
            var o = this.dataStore[n];
            e in o || (o[e] = [
                [],
                []
            ]), i && i.level === !0 ? o[e][0].push(encodeURIComponent($.stringify(t))) : o[e][1].push(encodeURIComponent($.stringify(t)))
        },
        fetchData: function(e, t) {
            function i() {
                for (var t, i = 0, n = [], r = !1, d = this.commLog[l].len, p = this.hostAddr[a].length, m = p + ("type=" + e + "&fm=" + u + "&data=").length + d, f = m + 6, h = f; 0 !== o.length && i < this.MAX_SEND;) c === !1 && 0 === e && i++, t = o.shift(), n.push(t), h = f + t.length + 3, (f >= this.MAX_LEN || h >= this.MAX_LEN) && (n.length >= 2 && (n.pop(), r = !0), s.push({
                    qid: l,
                    key: u,
                    type: e,
                    data: "%5B" + n.join("%2C") + "%5D",
                    host: a
                }), n = [], r && (n[0] = t, r = !1), h = n.length > 0 ? m + 3 + t.length + 3 : m + 6), f = h;
                n.length > 0 && s.push({
                    qid: l,
                    key: u,
                    type: e,
                    data: "%5B" + n.join("%2C") + "%5D",
                    host: a
                })
            }
            var n, o, r = this.dataStore,
                s = [],
                a = 0,
                c = !1,
                d = bds && bds.comm && bds.comm.qid ? bds.comm.qid : "";
            if (!d) return [];
            for (var l in r) {
                c = l !== d ? !0 : !1, n = r[l];
                for (var u in n) u in this.keyMap && (a = this.keyMap[u], "number" == typeof a && void 0 !== this.hostAddr[a] && (o = n[u][0].length > 0 ? n[u][0] : n[u][1], i.call(this), (c === !0 || t !== !0) && 0 === o.length && n[u][1].length > 0 && (o = n[u][1], i.call(this)), c === !0 && delete this.dataStore[l]))
            }
            return s
        },
        startSend: function(e, t) {
            var i, n, o = this,
                r = t === !0 ? 0 : 100,
                s = setInterval(function() {
                    return e.length <= 0 ? void clearInterval(s) : (i = e.shift(), void(i && i.qid && i.qid in o.commLog && (n = "type=" + i.type + "&fm=" + i.key + "&data=" + i.data, o.send(n, i.host, i.qid), i.qid in o.sendNum && (o.sendNum[i.qid] += 1))))
                }, r)
        },
        startCycle: function() {
            var e = this;
            null === e.cycle && (e.cycle = 1), e.t = setTimeout(function() {
                var t = e.fetchData(0),
                    i = t.length; - 1 === e.storeLen && (e.storeLen = i), 0 !== e.storeLen && i / e.storeLen >= 2 && e.curSpeed > e.MIN_SPEED && (e.curSpeed -= 1e3), (0 === i || e.storeLen / i >= 2) && e.curSpeed < e.MAX_SPEED && (e.curSpeed += 1e3), e.startSend(t, 0), e.startCycle()
            }, e.curSpeed)
        },
        outInterface: function() {
            var e = this;
            return {
                hostEnum: e.hostEnum,
                api: {
                    getMouseLocus: function(t, i) {
                        return e.getData(e.mouse, t, i)
                    },
                    getKeyRecord: function(t, i) {
                        return e.getData(e.key, t, i)
                    },
                    getScrollRecord: function(t, i) {
                        return e.getData(e.scroll, t, i)
                    },
                    startAPI: function() {
                        e.singleInit()
                    }
                },
                send: {
                    debug: function() {
                        e.debug = !0
                    },
                    send: function(t, i) {
                        return e.send(t, i)
                    },
                    sendNow: function(t, i, n) {
                        return e.sendNow(t, i, n)
                    },
                    sendPack: function(t, i, n) {
                        t && "string" == typeof t && t in e.keyMap && i && (e.pushData(t, i, n), null === e.cycle && e.startCycle())
                    }
                }
            }
        }
    }, bds.log = (new e).outInterface()
}(), $(window).on("swap_end", function() {
    function e() {
        return !!window.ActiveXObject && (!document.documentMode || document.documentMode <= 9)
    }
    if (bds.comm.encTn && $.setCookie("H_PS_645EC", bds.comm.encTn, {
            expires: 2592e3
        }), bds.se.trust && bds.se.trust.init(), bds.se.heightControl.init(), bds.util.setContainerWidth(), $(".content_none").length > 0 && new bds.util.setFootStyle, bds.comm.feedback = 1, bds.comm.feedback) {
        var t = function(e) {
            return "1" !== bds.comm.isUserLogin ? (bds.se.login.open(function(t) {
                return 1 === t ? ("function" == typeof e && e(), !1) : void 0
            }), !0) : !1
        };
        e() ? $(document).delegate(".feedback", "click", function() {
            var e = this;
            $.getScript("https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/feedback_e6b277b.js", function() {
                var i = e.getAttribute("data-feedbackid") || 1,
                    n = {
                        product_id: 18,
                        entrance_id: i
                    },
                    o = {
                        username: bds.comm.username,
                        query: bds.comm.query,
                        fb_qid: bds.comm.qid
                    },
                    r = t(function() {
                        bds.qa.ShortCut.initRightBar(n, o, !0)
                    });
                r || bds.qa.ShortCut.initRightBar(n, o)
            })
        }) : $(".feedback").on("click", function() {
            var e = t(function() {
                bds.se.ShortCut.initRightBar(!0)
            });
            e || bds.se.ShortCut.initRightBar()
        })
    } else $(document).delegate(".feedback", "click", function() {
        var e = this;
        $.getScript("https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/feedback_e6b277b.js", function() {
            var t = e.getAttribute("data-feedbackid") || 1,
                i = {
                    product_id: 18,
                    entrance_id: t
                },
                n = {
                    username: bds.comm.username,
                    query: bds.comm.query,
                    fb_qid: bds.comm.qid
                };
            bds.qa.ShortCut.initRightBar(i, n)
        })
    });
    var i = $("#form").find('input[type="hidden"][name=rsv_t]');
    i.length ? $(i).val(bds.comm.encTn) : $("#form").append('<input type="hidden" name="rsv_t" value="' + bds.comm.encTn + '"/>'), bds.comm.did = function() {
        for (var e = "", t = 0; 32 > t; t++) e += Math.floor(16 * Math.random()).toString(16);
        return e
    }()
}), ! function() {
    $(window).one("swap_end", function() {
        $("body").on("mousedown", ".se_common_hint a", function() {
            var e = $(this),
                t = e.parents(".se_common_hint"),
                i = t.attr("data-id") || "",
                n = t.attr("data-tpl") || "",
                o = t.find("a").index(e);
            ns_c_pj({
                hintId: i,
                hintTpl: n,
                title: e.html(),
                pos: o,
                qid: bds.comm.qid || ""
            }, "pj=hint&")
        })
    })
}(), define("plugins/title_highlight", ["require"], function() {
    function e() {
        var e = ".c-container",
            t = ".t",
            i = "c-showurl-hover",
            n = "c-showem";
        $(".c-showurl").hover(function() {
            var o = $(this.parentNode).parents(e).find(t).children(":first");
            o.addClass(i), o.find("em").addClass(n)
        }, function() {
            var o = $(this.parentNode).parents(e).find(t).children(":first");
            o.removeClass(i), o.find("em").removeClass(n)
        })
    }
    return {
        init: e
    }
}), $(function() {
    $("#u,#u1").delegate(".lb", "click", function() {
        var e = $(this).attr("data-subpro");
        e && bds.se.login.setSubpro(e);
        try {
            bds.se.login.open()
        } catch (t) {}
    })
}), $.ajax({
    dataType: "script",
    cache: !0,
    url: "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/js/nu_instant_search_5f6f95d.js"
}), window.PRE_CONN = function() {
    var e, t = function(e, t) {
            var i = 1 * new Date;
            e = bds.util.domain && bds.util.domain.get ? bds.util.domain.get(e) : e;
            var o = /^(http[s]?:\/\/)?([^\/]+)(.*)/,
                r = e.match(o);
            if (r[2] && !n[r[2]]) {
                n.push(r[2]);
                var s = new Image;
                s.src = e + "?_t=" + (t ? t : i), s.onload = s.onerror = function() {
                    s = null
                }
            }
        },
        i = 0,
        n = [],
        o = function() {
            try {
                window.pageState && 0 != window.pageState && 1 != i || ($("#kw1,#kw").one("keydown", function() {
                    "https:" === location.protocol ? (t("https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/ps_default.gif"), t("https://ss1.baidu.com/6ONWsjip0QIZ8tyhnq/ps_default.gif"), t("https://ss2.baidu.com/6ONWsjip0QIZ8tyhnq/ps_default.gif"), t("https://ss3.baidu.com/6ONWsjip0QIZ8tyhnq/ps_default.gif")) : (t("http://b1.bdstatic.com/img/pc.gif", parseInt(1e3 * Math.random())), t("http://ecmb.bdimg.com/public03/pc.gif"), $.each(["i7", "i8", "i9", "t10", "t11", "t12"], function(e, i) {
                        t("http://" + i + ".baidu.com/ps_default.gif")
                    }))
                }), 1 == i && $("#kw1,#kw").one("focus", function() {
                    "https:" === location.protocol && t("https://www.baidu.com/con?from=self")
                }))
            } catch (e) {}
        },
        r = function() {
            i = 1, o(), a()
        },
        s = function() {
            a(), e = setTimeout(r, 55e3)
        },
        a = function() {
            clearTimeout(e), i = 0
        };
    return o(), {
        init: o,
        startTimer: s
    }
}(), ! function() {
    $.ajaxPrefilter("parts", function(e, t, i) {
        e.__partsCallback = [], e.__partsIndex = 0, i.parts = function(t) {
            e.__partsCallback.push(t)
        }, e.parts && i.parts(e.parts), e.converters["* parts"] = function(e) {
            return e
        }
    }), $.ajaxTransport("parts", function(e) {
        if (!e.crossDomain || support.cors) {
            var t;
            return {
                send: function(i, n) {
                    var o, r = e.xhr();
                    if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) r[o] = e.xhrFields[o];
                    e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (o in i) void 0 !== i[o] && r.setRequestHeader(o, i[o] + "");
                    r.send(e.hasContent && e.data || null), t = function(i, o) {
                        var s, a, c;
                        if (3 !== r.readyState && 4 !== r.readyState || o || ! function() {
                                var t = e.delimiter,
                                    i = "";
                                try {
                                    i = r.responseText
                                } catch (n) {}
                                if ("" != i) {
                                    var o, s, a = -1,
                                        c = 0;
                                    if (t)
                                        for (;;) {
                                            for (; c <= e.__partsIndex && (o = -1 == a ? 0 : a + t.length, a = i.indexOf(t, o), -1 != a); c++);
                                            if (-1 == a && 4 !== r.readyState) return;
                                            for (s = 0; s < e.__partsCallback.length; s++) e.__partsCallback[s].call(r, i.substring(o, -1 == a ? i.length : a), e.__partsIndex, i);
                                            if (e.__partsIndex++, -1 == a) return
                                        } else
                                            for (c = 0; c < e.__partsCallback.length; c++) e.__partsCallback[c].call(r, i)
                                }
                            }(), t && (o || 4 === r.readyState))
                            if (t = void 0, r.onreadystatechange = jQuery.noop, o) 4 !== r.readyState && r.abort();
                            else {
                                c = {}, s = r.status, "string" == typeof r.responseText && (c.text = r.responseText);
                                try {
                                    a = r.statusText
                                } catch (d) {
                                    a = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                            } c && n(s, a, c, r.getAllResponseHeaders())
                    }, e.async ? 4 === r.readyState ? setTimeout(t) : r.onreadystatechange = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    })
}(), ! function() {
    function save(e) {
        var t = [];
        for (tmpName in options) options.hasOwnProperty(tmpName) && "duRobotState" !== tmpName && t.push('"' + tmpName + '":"' + options[tmpName] + '"');
        var i = "{" + t.join(",") + "}";
        bds.comm.personalData ? $.ajax({
            url: "//www.baidu.com/ups/submit/addtips/?product=ps&tips=" + encodeURIComponent(i) + "&_r=" + (new Date).getTime(),
            success: function() {
                writeCookie(), "function" == typeof e && e()
            }
        }) : (writeCookie(), "function" == typeof e && setTimeout(e, 0))
    }

    function set(e, t) {
        options[e] = t
    }

    function get(e) {
        return options[e]
    }

    function writeCookie() {
        if (options.hasOwnProperty("sugSet")) {
            var e = "0" == options.sugSet ? "0" : "3";
            clearCookie("sug"), Cookie.set("sug", e, document.domain, "/", expire30y)
        }
        if (options.hasOwnProperty("sugStoreSet")) {
            var e = 0 == options.sugStoreSet ? "0" : "1";
            clearCookie("sugstore"), Cookie.set("sugstore", e, document.domain, "/", expire30y)
        }
        if (options.hasOwnProperty("isSwitch")) {
            var t = {
                    0: "2",
                    1: "0",
                    2: "1"
                },
                e = t[options.isSwitch];
            clearCookie("ORIGIN"), Cookie.set("ORIGIN", e, document.domain, "/", expire30y)
        }
        if (options.hasOwnProperty("imeSwitch")) {
            var e = options.imeSwitch;
            clearCookie("bdime"), Cookie.set("bdime", e, document.domain, "/", expire30y)
        }
    }

    function writeBAIDUID() {
        var e, t, i, n = Cookie.get("BAIDUID");
        /FG=(\d+)/.test(n) && (t = RegExp.$1), /SL=(\d+)/.test(n) && (i = RegExp.$1), /NR=(\d+)/.test(n) && (e = RegExp.$1), options.hasOwnProperty("resultNum") && (e = options.resultNum), options.hasOwnProperty("resultLang") && (i = options.resultLang), Cookie.set("BAIDUID", n.replace(/:.*$/, "") + ("undefined" != typeof i ? ":SL=" + i : "") + ("undefined" != typeof e ? ":NR=" + e : "") + ("undefined" != typeof t ? ":FG=" + t : ""), ".baidu.com", "/", expire30y, !0)
    }

    function clearCookie(e) {
        Cookie.clear(e, "/"), Cookie.clear(e, "/", document.domain), Cookie.clear(e, "/", "." + document.domain), Cookie.clear(e, "/", ".baidu.com")
    }

    function reset(e) {
        options = defaultOptions, save(e)
    }
    var defaultOptions = {
            sugSet: 1,
            sugStoreSet: 1,
            isSwitch: 1,
            isJumpHttps: 1,
            imeSwitch: 0,
            resultNum: 10,
            skinOpen: 1,
            resultLang: 0,
            duRobotState: "000"
        },
        options = {},
        tmpName, expire30y = new Date;
    expire30y.setTime(expire30y.getTime() + 94608e7);
    try {
        if (bds && bds.comm && bds.comm.personalData) {
            if ("string" == typeof bds.comm.personalData && (bds.comm.personalData = eval("(" + bds.comm.personalData + ")")), !bds.comm.personalData) return;
            for (tmpName in bds.comm.personalData) defaultOptions.hasOwnProperty(tmpName) && bds.comm.personalData.hasOwnProperty(tmpName) && "SUCCESS" == bds.comm.personalData[tmpName].ErrMsg && (options[tmpName] = bds.comm.personalData[tmpName].value)
        }
        try {
            parseInt(options.resultNum) || delete options.resultNum, parseInt(options.resultLang) || "0" == options.resultLang || delete options.resultLang
        } catch (e) {}
        writeCookie(), "sugSet" in options || (options.sugSet = 3 != Cookie.get("sug", 3) ? 0 : 1), "sugStoreSet" in options || (options.sugStoreSet = Cookie.get("sugstore", 0));
        var BAIDUID = Cookie.get("BAIDUID");
        "resultNum" in options || (options.resultNum = /NR=(\d+)/.test(BAIDUID) && RegExp.$1 ? parseInt(RegExp.$1) : 10), "resultLang" in options || (options.resultLang = /SL=(\d+)/.test(BAIDUID) && RegExp.$1 ? parseInt(RegExp.$1) : 0), "isSwitch" in options || (options.isSwitch = 2 == Cookie.get("ORIGIN", 0) ? 0 : 1 == Cookie.get("ORIGIN", 0) ? 2 : 1), "imeSwitch" in options || (options.imeSwitch = Cookie.get("bdime", 0))
    } catch (e) {}
    window.UPS = {
        writeBAIDUID: writeBAIDUID,
        reset: reset,
        get: get,
        set: set,
        save: save
    }
}();
var ie = navigator.userAgent.toLowerCase().match(/msie\s+(\d*)/),
    ie6 = ie && 6 == ie[1];
if (window._is_skin_sam && !ie6) {
    var url = "";
    "1" == window._is_skin_sam ? url = "../../skin/js/skin_1.js" : "2" == window._is_skin_sam ? url = "../../skin/js/skin_2.js" : "3" == window._is_skin_sam && (url = "../../skin/js/skin_3.js");
    var skinDefer = null;
    if (url) var skinDefer = $.ajax({
        dataType: "script",
        cache: !0,
        url: url
    });
    skinDefer && skinDefer.done(function() {
        $(window).on("swap_end", function() {
            bds.se.skin && new bds.se.skin
        }), $(window).on("swap_begin", function() {
            bds.se.skin && bds.se.skin.prototype.dispose()
        })
    })
}! function() {
    var e = {},
        t = function(e) {
            var t = n(e);
            o(t)
        },
        i = function(i, n) {
            var o = Math.random();
            o > .2 && .201 > o && "http:" == location.protocol && (e.url = i, e.headers = n, $.ajax({
                url: i,
                headers: n,
                success: t
            }))
        },
        n = function(t) {
            if ("string" == typeof t && "object" == typeof e.headers) {
                if (e.headers.hasOwnProperty("content_syni") && 12495 !== t.length) return t;
                if (e.headers.hasOwnProperty("content_syns") && 19295 !== t.length) return t
            }
            return "normal"
        },
        o = function(e) {
            $.ajax({
                url: "//www.baidu.com/r/plog",
                type: "post",
                data: {
                    page_html: e
                }
            })
        };
    window.ctwin = {
        sendRequest: i
    }
}();
var bds = bds || {};
bds.se = bds.se || {}, bds.se.speedTester = function() {
    function e() {}

    function t(e, t, o) {
        o = o || 19558, i(e, function(e) {
            return function(t, i, o) {
                n(e, i, o)
            }
        }(t), function(e) {
            return function() {
                n(e)
            }
        }(t), o)
    }

    function i(t, i, n, o) {
        i = i || e, n = n || e;
        var r = new Image;
        r.onload = function() {
            this.onload = this.onerror = null, o = this.fileSize || o;
            var e = new Date,
                t = e - s,
                n = o / t;
            i(this, t, n)
        }, r.onerror = function() {
            this.onload = this.onerror = null, n(this)
        };
        var s = new Date;
        r.src = t
    }

    function n(e, t, i) {
        var n = new Image;
        n.onload = n.onerror = function() {
            this.onload = this.onerror = null
        }, n.src = e + (t ? "&t=" + t + "&v=" + i : "&t=-1&v=-1") + "&r=" + Math.random()
    }
    return {
        start: t
    }
}(), bds.se.speedMonitor = function(e) {
    function t() {
        var e = d.pop();
        e && i(e), a && (c = window.setTimeout(t, s))
    }

    function i(e) {
        var t = e.url,
            i = e.size || -1,
            n = [];
        n.push("id=" + encodeURIComponent(e.id)), n.push("name=" + encodeURIComponent(e.name)), n.push("url=" + encodeURIComponent(e.url)), n.push("size=" + encodeURIComponent(e.id));
        for (key in e.logData) n.push(key + "=" + encodeURIComponent(e.logData[key]));
        bds.se.speedTester.start(t, l + "&" + n.join("&"), i)
    }

    function n() {
        return !0
    }
    var o = e.logPath || "",
        r = e.flag || "default",
        s = e.sleep || "1000",
        a = !1,
        c = null,
        d = [],
        l = o + "?flag=" + r;
    this.start = function() {
        this.stop(), a = !0, t()
    }, this.stop = function() {
        a = !1, window.clearInterval(c)
    }, this.addTask = function(e) {
        n(e) && d.push(e)
    }, this.clear = function() {
        d = []
    }
}, setTimeout(function() {
    var e = Math.random(),
        t = "http://velocity.baidu.com/sp";
    if ("https:" == location.protocol && (t = "https://sp0.baidu.com/6r1_czmhAB63otqbppnN2DJv/sp"), .01 > e) {
        var i = document.createElement("script");
        i.src = t, document.body.appendChild(i)
    }
}, 1e3), ! function(e) {
    var e = e || {};
    e.se = e.se || {}, e.se.QuickDelete = function(e, t) {
        this.form = e, this.options = t, this._init()
    }, e.se.QuickDelete.prototype = {
        constructor: e.se.QuickDelete,
        _init: function() {
            this._create_elem(), this._bind_event()
        },
        _create_elem: function() {
            var e = this.form,
                t = this.options,
                i = t.top || 0,
                n = t.right || 0,
                o = $.trim(e.val()) ? "block" : "none",
                r = "quickdelete",
                s = e.parent(),
                a = $('<a href="javascript:;"></a>').attr("id", r).attr("title", "清空").addClass("quickdelete");
            s.addClass("quickdelete-wrap").append(a), a.css({
                top: i + "px",
                right: n + "px",
                display: o
            }), t.wrapElem = s, t.elem = a
        },
        _hide: function() {
            this.options.elem.hide()
        },
        _bind_event: function() {
            var t = this.form,
                i = this.options.elem,
                n = this;
            i.on("click", function() {
                var i = e.comm.supportis ? 2 : 0;
                return ns_c({
                    input_clear: e.comm.ishome + i,
                    delete_query: encodeURIComponent(t.val())
                }), t.val("").focus(), n._hide(), !1
            })
        }
    }, new e.se.QuickDelete($("#kw"), {
        top: 0,
        right: 0
    })
}(bds), window.bds && bds.comm && bds.comm.ishome && $(window).on("load", function() {
    if (window.ctwin && window.ctwin.sendRequest("//www.baidu.com/?tn=baidu", {
            content_syni: 1
        }), window.performance && performance.timing) {
        var e = function() {
                var e = i("navigation"),
                    t = i("domainLookup"),
                    n = i("connect"),
                    o = i("secureConnection"),
                    r = (i("redirect"), i("request")),
                    s = i("response"),
                    a = {
                        start: performance.timing.domLoading,
                        end: performance.timing.domComplete
                    },
                    c = i("loadEvent");
                return {
                    navigation: n.start - e.start,
                    dns: t.value,
                    tcp: n.value,
                    ssl: o.start > 0 ? n.end - o.start : 0,
                    request: s.start - r.start,
                    response: s.value,
                    dom: a.end - a.start,
                    loadEvent: c.end - e.start
                }
            },
            t = Cookie.get("__bsi"),
            i = function(e) {
                var t = performance.timing,
                    i = t[e + "Start"] ? t[e + "Start"] : 0,
                    n = t[e + "End"] ? t[e + "End"] : 0;
                return {
                    start: i,
                    end: n,
                    value: n - i > 0 ? n - i : 0
                }
            },
            n = function() {
                var i = [],
                    n = e();
                for (var o in n) i.push(o + "=" + n[o]);
                i.push("protocol=" + encodeURIComponent(location.protocol));
                var r = "//www.baidu.com/nocache/fesplg/s.gif?log_type=hm&type=timing&",
                    s = "";
                s += i.join("&"), s += "&newindex=" + (window.bds && bds.comm ? bds.comm.newindex : -1), t && (s += "&bsi=" + t);
                var a = r + s,
                    c = new Image,
                    d = "_LOG_" + (new Date).getTime();
                c.onload = function() {
                    delete window[d]
                }, window[d] = c, c.src = a
            },
            o = Math.random();
        /8498/.test(bds.comm.indexSid) && .01 > o && setTimeout(n, 500)
    }
}), $(window).on("swap_end", function() {
    bds.comm.search_tool && (bds.comm.search_tool.init = !1)
}), $(window).on("swap_begin", function() {
    $(document).off("click.searchTool")
});
var langfilterTip, timefilterTip, fileTypeTip, insideSearchTip;
$(document).delegate(".head_nums_cont_outer", "mousedown", function() {
        if ("undefined" != typeof bds.comm.search_tool) {
            if (bds.comm.search_tool.init) return;
            bds.comm.search_tool.init = !0;
            var e = $(this),
                t = e.find(".search_tool").eq(0),
                i = e.find(".search_tool_close").eq(0),
                n = e.find(".head_nums_cont_inner").eq(0);
            t.on("click", function() {
                n.animate({
                    top: 0
                }, 250), ns_c({
                    fm: "advTool",
                    qid: bds.comm.qid,
                    title: encodeURI("搜索工具"),
                    rsv_advTool: 0
                })
            }), i.on("click", function() {
                n.animate({
                    top: -42
                }, 250, function() {
                    "en" == bds.comm.search_tool.sl_lang || bds.comm.search_tool.st || bds.comm.search_tool.et || bds.comm.search_tool.si || bds.comm.search_tool.ft || bds.comm.search_tool.exact ? (ns_c({
                        fm: "advTool",
                        qid: bds.comm.qid,
                        title: encodeURI("清除"),
                        rsv_advTool: 2
                    }), baseChangeUrl("wd=" + encodeURIComponent($("#kw").val().replace(/(filetype:[^\s]* )|(site:[^\s]*)/g, "").replace(/^\"+(.+)\"+$/, "$1")) + "&sl_lang=cn&rsv_srlang=cn&rsv_rq=cn&ct=0&si=&tfflag=0&gpc=" + encodeURIComponent("stf=")), $("input[name='gpc'],input[name='si'],input[name='ct']", "form").val("")) : ns_c({
                        fm: "advTool",
                        qid: bds.comm.qid,
                        title: encodeURI("收起工具"),
                        rsv_advTool: 1
                    })
                })
            });
            var o = e.find(".search_tool_la").eq(0);
            if (o.length > 0) {
                var r = "<div class='c-tip-menu c-tip-langfilter'><ul>";
                "en" == bds.comm.search_tool.sl_lang ? (r += "<li><a href='javascript:;' onClick='langChangeUrl(\"sl_lang\",\"cn\",this.innerHTML)'>所有网页</a></li>", r += "<li><span>英文网页</span></li>") : "cn" == bds.comm.search_tool.sl_lang && (r += "<li><span>所有网页</span></li>", r += "<li><a href='javascript:;' onClick='langChangeUrl(\"sl_lang\",\"en\",this.innerHTML)'>英文网页</a></li>"), r += "</li></ul></div>", langfilterTip = new bds.se.tip({
                    target: o,
                    mode: "none",
                    content: $(r),
                    arrow: {
                        has: 0,
                        offset: 0
                    },
                    offset: {
                        x: 15,
                        y: 21
                    }
                }), langfilterTip.hide()
            }
            var s = e.find(".search_tool_tf").eq(0);
            if (s.length > 0) {
                var a = "<div class='c-tip-menu c-tip-timerfilter'><ul>";
                a += bds.comm.search_tool.st || bds.comm.search_tool.et ? " <li><a href='javascript:;' onClick='advChangeUrl(\"gpc\",\"stf\",this.innerHTML,0)'>时间不限</a></li>" : " <li><span>时间不限</span></li>", a += bds.comm.search_tool.st >= bds.comm.search_tool.thisDay && "1" == bds.comm.search_tool.stftype ? " <li><span>一天内</span></li>" : " <li><a href='javascript:;' onClick='advChangeUrl(\"gpc\",\"stf=" + bds.comm.search_tool.oneDay + "," + bds.comm.serverTime + "|stftype=1\",this.innerHTML,1)'>一天内</a></li>", a += bds.comm.search_tool.st >= bds.comm.search_tool.thisWeek && bds.comm.search_tool.st < bds.comm.search_tool.thisDay && "1" == bds.comm.search_tool.stftype ? " <li><span>一周内</span></li>" : " <li><a href='javascript:;' onClick='advChangeUrl(\"gpc\",\"stf=" + bds.comm.search_tool.oneWeek + "," + bds.comm.serverTime + "|stftype=1\",this.innerHTML,2)'>一周内</a></li>", a += bds.comm.search_tool.st >= bds.comm.search_tool.thisMonth && bds.comm.search_tool.st < bds.comm.search_tool.thisWeek && "1" == bds.comm.search_tool.stftype ? " <li><span>一月内</span></li>" : " <li><a href='javascript:;' onClick='advChangeUrl(\"gpc\",\"stf=" + bds.comm.search_tool.oneMonth + "," + bds.comm.serverTime + "|stftype=1\",this.innerHTML,3)'>一月内</a></li>", a += bds.comm.search_tool.st >= bds.comm.search_tool.thisYear && bds.comm.search_tool.st < bds.comm.search_tool.thisMonth && "1" == bds.comm.search_tool.stftype ? " <li><span>一年内</span></li>" : " <li><a href='javascript:;' onClick='advChangeUrl(\"gpc\",\"stf=" + bds.comm.search_tool.oneYear + "," + bds.comm.serverTime + "|stftype=1\",this.innerHTML,4)'>一年内</a></li>", a += " <li class='c-tip-custom'>", a += " <hr />自定义", a += " <p class='c-tip-custom-st'>从<input name='st' date-min='0' date-max='" + formatDate(1e3 * bds.comm.serverTime) + "' type='txt' autocomplete='off' ", a += bds.comm.search_tool.st && bds.comm.search_tool.et && "2" == bds.comm.search_tool.stftype ? "value='" + formatDate(1e3 * bds.comm.search_tool.st, "-") + "' data-value='" + 1e3 * bds.comm.search_tool.st + "' class='c-tip-custom-input'/></p>" : "value='" + formatDate(1e3 * bds.comm.serverTime, "-") + "' data-value='' class='c-tip-custom-input c-tip-custom-input-init'/></p>", a += "  <p class='c-tip-custom-et'>至<input name='et' date-min='0' date-max='" + formatDate(1e3 * bds.comm.serverTime) + "' type='txt' autocomplete='off' ", a += bds.comm.search_tool.st && bds.comm.search_tool.et && "2" == bds.comm.search_tool.stftype ? "value='" + formatDate(1e3 * bds.comm.search_tool.et, "-") + "' data-value='" + 1e3 * bds.comm.search_tool.et + "' class='c-tip-custom-input'/></p>" : "value='" + formatDate(1e3 * bds.comm.serverTime, "-") + "' data-value='' class='c-tip-custom-input c-tip-custom-input-init'/></p>", a += "<div class='c-tip-timerfilter-custom-error'>自定义时间错误！</div>", a += "<a href='javascript:;' class='c-tip-custom-submit'>确认</a>", a += "</li></ul></div>", timefilterTip = new bds.se.tip({
                    target: s,
                    mode: "none",
                    content: $(a),
                    arrow: {
                        has: 0,
                        offset: 0
                    },
                    offset: {
                        x: 15,
                        y: 21
                    },
                    onShow: function() {
                        $(this.getTarget()).width() > 95 && $("ul", this.getDom()).width($(this.getTarget()).width() + 20), $(".c-tip-custom-input").on("click", function(e) {
                            var t = this,
                                i = null,
                                n = new Date,
                                o = $(t).parents(".c-tip-custom"),
                                r = o.find("input[name='st']"),
                                s = o.find("input[name='et']");
                            $(t).attr("data-value") && n.setTime($(t).attr("data-value")), $(t).parents(".c-tip-custom").find(".c-tip-custom-input").removeClass("c-tip-custom-input-focus"), $(t).addClass("c-tip-custom-input-focus"), 0 == $("#c-tip-custom-calenderCont").length && $(t).parents(".c-tip-custom").append("<div id='c-tip-custom-calenderCont'></div>"), $("#c-tip-custom-calenderCont").html("");
                            var a = {
                                element: "c-tip-custom-calenderCont",
                                date: formatDate(n),
                                between: [$(t).attr("date-min") - 0, $(t).attr("date-max") - 0],
                                onSelectDay: function(e) {
                                    if (e += "", "st" == t.name) {
                                        var i = new Date(e.substr(0, 4), e.substr(4, 2) - 1, e.substr(6, 2), 0, 0, 0);
                                        s.attr("date-min", e)
                                    } else {
                                        var i = new Date(e.substr(0, 4), e.substr(4, 2) - 1, e.substr(6, 2), 23, 59, 59);
                                        r.attr("date-max", e)
                                    }
                                    $(t).val(formatDate(i, "-")), $(t).attr("data-value", i.getTime()), $("#c-tip-custom-calenderCont").hide(), $(t).removeClass("c-tip-custom-input-focus").removeClass("c-tip-custom-input-init")
                                }
                            };
                            "undefined" == typeof WCal ? $.getScript("https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/new_wcal_3426010.js", function() {
                                i = new WCal(a), n && i.setDay(formatDate(n), function(e) {
                                    e.className += " op_mon_day_selected"
                                })
                            }) : (i = new WCal(a), n && i.setDay(formatDate(n), function(e) {
                                e.className += " op_mon_day_selected"
                            })), $("#c-tip-custom-calenderCont").css({
                                top: $(this).position().top - 2,
                                left: $(this).position().left + $(this).width() + 15,
                                display: "block"
                            }), e.stopPropagation()
                        }), $(".c-tip-custom-input").on("focus", function() {
                            $(this).removeClass("c-tip-custom-input-init")
                        }), $(".c-tip-custom-input").on("blur", function() {
                            function e(e) {
                                var t, i = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/,
                                    n = new Date(0 / 0),
                                    o = i.exec(e);
                                return o && (t = +o[2], n.setFullYear(o[1], t - 1, o[3]), t != n.getMonth() + 1 && n.setTime(0 / 0)), n
                            }
                            var t = this,
                                i = e($(t).val());
                            i instanceof Date && i.getTime() ? ($(t).attr("data-value", i.getTime()), $(".c-tip-timerfilter-custom-error").hide()) : "" == $(t).val() ? ($(t).attr("data-value", "0"), $(".c-tip-timerfilter-custom-error").hide()) : ($(t).attr("data-value", ""), $(".c-tip-timerfilter-custom-error").show())
                        });
                        try {
                            $(".c-tip-custom-submit").off("click.searchTool").on("click.searchTool", function(e) {
                                var t = this,
                                    i = $(t).parents(".c-tip-custom"),
                                    n = parseInt($(".c-tip-custom-input", i)[0].getAttribute("data-value") / 1e3),
                                    o = parseInt($(".c-tip-custom-input", i)[1].getAttribute("data-value") / 1e3);
                                return $("#c-tip-custom-calenderCont").hide(), "" != n && n || (n = 0), "" != o && o || !n || "" == n || (o = parseInt((new Date).setHours(23, 59, 58) / 1e3)), o > bds.comm.serverTime && (0 >= n ? (n = "", o = "") : o = parseInt((new Date).setHours(23, 59, 58) / 1e3)), n > o || n > bds.comm.serverTime ? ($(".c-tip-timerfilter-custom-error").show(), void e.stopPropagation()) : (0 == n && 0 == o && (n = "", o = ""), $(".c-tip-timerfilter-custom-error").hide(), void advChangeUrl("gpc", "stf=" + n + "," + o + "|stftype=2", "自定义时间:" + n + "|" + o, 5))
                            })
                        } catch (e) {}
                    }
                }), timefilterTip.hide()
            }
            var c = e.find(".search_tool_ft").eq(0);
            if (c.length > 0) {
                var d = "<div class='c-tip-menu c-tip-timerfilter c-tip-timerfilter-ft'><ul>";
                d += bds.comm.search_tool.ft ? " <li><a href='javascript:;' onClick='fileChangeUrl(null,this.innerHTML,0)'>所有网页和文件(不限格式)</a></li>" : " <li><span>所有网页和文件(不限格式)</span></li>", d += "pdf" == bds.comm.search_tool.ft ? " <li><span>Adobe Acrobat PDF(.pdf)</span></li>" : " <li><a href='javascript:;' onClick='fileChangeUrl(\"pdf\",this.innerHTML,1)'>Adobe Acrobat PDF(.pdf)</a></li>", d += "doc" == bds.comm.search_tool.ft ? " <li><span>微软 Word(.doc)</span></li>" : " <li><a href='javascript:;' onClick='fileChangeUrl(\"doc\",this.innerHTML,2)'>微软 Word(.doc)</a></li>", d += "xls" == bds.comm.search_tool.ft ? " <li><span>微软 Excel(.xls)</span></li>" : " <li><a href='javascript:;' onClick='fileChangeUrl(\"xls\",this.innerHTML,3)'>微软 Excel(.xls)</a></li>", d += "ppt" == bds.comm.search_tool.ft ? " <li><span>微软 PowerPoint(.ppt)</span></li>" : " <li><a href='javascript:;' onClick='fileChangeUrl(\"ppt\",this.innerHTML,4)'>微软 PowerPoint(.ppt)</a></li>", d += "rtf" == bds.comm.search_tool.ft ? " <li><span>RTF 文件(.rtf)</span></li>" : " <li><a href='javascript:;' onClick='fileChangeUrl(\"rtf\",this.innerHTML,5)'>RTF 文件(.rtf)</a></li>", d += "</ul></div>";
                var l = new bds.se.tip({
                    target: c,
                    mode: "none",
                    content: $(d),
                    arrow: {
                        has: 0,
                        offset: 0
                    },
                    offset: {
                        x: 15,
                        y: 21
                    }
                });
                l.hide()
            }
            var u = e.find(".search_tool_si").eq(0);
            u.length > 0 && (insideSearchTip = new bds.se.tip({
                target: u,
                mode: "none",
                content: $("<div class='c-tip-menu c-tip-timerfilter c-tip-timerfilter-si'><ul> <li><input name='si' type='txt' class='c-tip-si-input c-gap-bottom-small c-gap-right-small' autocomplete='off' value='" + bds.comm.search_tool.si + "' placeholder='例如:baidu.com' /><a href='javascript:;' class='c-tip-timerfilter-si-submit'>确认</a></li> <li><p class='c-tip-timerfilter-si-error'>无法识别，正确格式：baidu.com</p></li></ul></div>"),
                arrow: {
                    has: 0,
                    offset: 0
                },
                offset: {
                    x: 15,
                    y: 21
                },
                onShow: function() {
                    $(".c-tip-si-input").on("focus", function() {
                        $(this).addClass("c-tip-si-input-focus")
                    }), $(".c-tip-si-input").on("blur", function() {
                        $(this).removeClass("c-tip-si-input-focus")
                    });
                    try {
                        $(".c-tip-timerfilter-si-submit").off("click.searchTool").on("click.searchTool", function(e) {
                            var t = this,
                                i = $(t).parents(".c-tip-timerfilter-si"),
                                n = $("input", i).val(),
                                o = queryReplace("site");
                            if ("" == n) ns_c({
                                fm: "advTool",
                                qid: bds.comm.qid,
                                title: encodeURI("站内检索:" + n),
                                rsv_advTool_si: encodeURI(n)
                            }), baseChangeUrl("wd=" + encodeURIComponent(o) + "&si=&ct=0");
                            else {
                                if (!n.match(/^[\w\-_]+(\.[\w\-_]+)+$/)) return $(".c-tip-timerfilter-si-error").show(), e.stopPropagation(), e.preventDefault(), !1;
                                $(".c-tip-timerfilter-si-error").hide(), ns_c({
                                    fm: "advTool",
                                    qid: bds.comm.qid,
                                    title: encodeURI("站内检索:" + n),
                                    rsv_advTool_si: encodeURI(n)
                                }), baseChangeUrl("wd=" + encodeURIComponent(o) + "&si=" + encodeURIComponent(n) + "&ct=2097152")
                            }
                        })
                    } catch (e) {}
                }
            }), insideSearchTip.hide());
            var p = !0;
            o.on("click", function(e) {
                p ? (langfilterTip && langfilterTip.show(), p = !1, timefilterTip && timefilterTip.hide(), m = !0, l && l.hide(), f = !0, insideSearchTip && insideSearchTip.hide(), h = !0, ns_c({
                    fm: "advTool",
                    qid: bds.comm.qid,
                    title: encodeURI("语言筛选浮层展现"),
                    rsv_advTool_tip: 1
                }), $(document).on("click.searchTool", function(e) {
                    0 == $(e.target).parents(".c-tip-langfilter").length && langfilterTip && (langfilterTip.hide(), p = !0, $(document).off("click.searchTool"))
                })) : (langfilterTip && langfilterTip.hide(), p = !0, $(document).off("click.searchTool")), e.stopPropagation()
            });
            var m = !0;
            s.on("click", function(e) {
                m ? (langfilterTip && langfilterTip.hide(), p = !0, timefilterTip && timefilterTip.show(), m = !1, l && l.hide(), f = !0, insideSearchTip && insideSearchTip.hide(), h = !0, ns_c({
                    fm: "advTool",
                    qid: bds.comm.qid,
                    title: encodeURI("时间筛选浮层展现"),
                    rsv_advTool_tip: 0
                }), $(document).on("click.searchTool", function(e) {
                    0 == $(e.target).parents(".c-tips-container,#c-tip-custom-calenderCont").length && timefilterTip && (timefilterTip.hide(), $("#c-tip-custom-calenderCont").hide(), timefilterTip.getDom().find(".c-tip-custom-input-focus").removeClass("c-tip-custom-input-focus"), m = !0, $(document).off("click.searchTool"))
                })) : (timefilterTip && timefilterTip.hide(), m = !0, $(document).off("click.searchTool")), e.stopPropagation()
            });
            var f = !0;
            c.on("click", function(e) {
                f ? (langfilterTip && langfilterTip.hide(), p = !0, timefilterTip && timefilterTip.hide(), m = !0, l && l.show(), f = !1, insideSearchTip && insideSearchTip.hide(), h = !0, ns_c({
                    fm: "advTool",
                    qid: bds.comm.qid,
                    title: encodeURI("网页格式浮层展现"),
                    rsv_advTool_tip: 2
                }), $(document).on("click.searchTool", function(e) {
                    0 == $(e.target).parents(".c-tip-timerfilter-ft").length && l && (l.hide(), f = !0, $(document).off("click.searchTool"))
                })) : (l && l.hide(), f = !0, $(document).off("click.searchTool")), e.stopPropagation()
            });
            var h = !0;
            u.on("click", function(e) {
                h ? (langfilterTip && langfilterTip.hide(), p = !0, timefilterTip && timefilterTip.hide(), m = !0, l && l.hide(), f = !0, insideSearchTip && insideSearchTip.show(), h = !1, ns_c({
                    fm: "advTool",
                    qid: bds.comm.qid,
                    title: encodeURI("站内搜索浮层展现"),
                    rsv_advTool_tip: 3
                }), $(document).on("click.searchTool", function(e) {
                    0 == $(e.target).parents(".c-tip-timerfilter-si").length && insideSearchTip && (insideSearchTip.hide(), h = !0, $(document).off("click.searchTool"))
                })) : (insideSearchTip && insideSearchTip.hide(), h = !0, $(document).off("click.searchTool")), e.stopPropagation()
            })
        }
    }), ! function() {
        function e() {
            function e(e, t) {
                var i = {
                        top: t.offset().top,
                        left: t.offset().left
                    },
                    n = {
                        width: t.width(),
                        height: t.height()
                    },
                    o = function() {
                        var e = t.attr("data-click");
                        if (e) try {
                            return $.parseJSON(e)
                        } catch (i) {}
                    }() || {},
                    r = e + (o.p5 || "");
                return {
                    id: r,
                    pos: i,
                    size: n,
                    dataClick: o,
                    dom: t
                }
            }
            var t = {},
                i = {},
                n = $("#wrapper");
            return t.topResult = n.find("#con-at").find(".result-op"), t.rightResult = n.find("#con-ar").find(".result-op"), t.leftResult = n.find("#content_left").find(".result, .result-op"), t.topResult.length && (i.T = [], t.topResult.each(function() {
                i.T.push(e("T", $(this)))
            })), t.rightResult.length && (i.R = [], t.rightResult.each(function() {
                i.R.push(e("R", $(this)))
            })), t.leftResult.length && (i.L = [], t.leftResult.each(function() {
                i.L.push(e("L", $(this)))
            })), i
        }
        bds.se.skeleton = function() {
            var t;
            return function() {
                return t || (t = e(), $(window).one("swap_begin", function() {
                    t = null
                })), t
            }
        }()
    }(), ! function() {
        $(window).on("swap_end", function() {
            var e = function() {
                var e = [],
                    t = bds.se.skeleton(),
                    i = t.L;
                return i ? ($.each(i, function(t, i) {
                    var n = {};
                    n.dom = i.dom, n.id = i.id, n.itime = 0, n.time = 0, e.push(n)
                }), e) : null
            };
            bds.comm.orderplay = e()
        })
    }(), ! function() {
        function e() {
            var e = this;
            e.display = {}, e.expand = {}, e.dom = {}, e.init()
        }
        bds.se.display = function() {
            new e
        }, e.prototype = {
            init: function() {
                var e = this;
                e.dom = bds.se.skeleton();
                var t = $("#wrapper");
                e.dom.rsResult = t.find(t.find("#rs a").length ? "#rs a" : "#rs_new a"), e.dom.hintResult = t.find(".se_common_hint"), e.rs = e.dom.rsResult.length || 0, e.hint = e.dom.hintResult.length || 0, e.display.base = e.getBase(), e.dom.L && e.getResult(e.dom.L), e.dom.R && e.getResult(e.dom.R), e.dom.T && e.getResult(e.dom.T), e.rs && (e.display.rs = e.getRS()), e.hint && (e.display.hint = e.getHint()), e.send()
            },
            send: function() {
                var e = this;
                for (var t in e.display) {
                    var i = {};
                    i[t] = e.display[t], bds.log.send.sendPack("new_disp", i)
                }
                for (var n in e.expand)
                    if (n && e.expand[n])
                        for (var o in e.expand[n])
                            if (o && e.expand[n][o] && e.expand[n][o].length)
                                for (var r = e.expand[n][o], s = 0; s < r.length; s++) {
                                    var a = {};
                                    a[n] = {
                                        expand: {}
                                    }, a[n].expand[o] = {}, a[n].expand[o][s] = r[s], bds.log.send.sendPack("new_disp", a)
                                }
            },
            getBase: function() {
                var e = this,
                    t = {};
                return t.qid = bds.comm.qid || "", t.tpl = bds.comm.resTemplateName || "", t.async = bds.comm.supportis ? 1 : 0, t.page = bds.comm.pageNum || 1, t.upn = $.getCookie("BD_UPN") || "", e.dom.L && (t.left = e.dom.L.length), e.dom.R && (t.right = e.dom.R.length), e.dom.T && (t.top = e.dom.T.length), t.size = {}, t.size.doc = {
                    w: $(document).width(),
                    h: $(document).height()
                }, t.size.wind = {
                    w: $(window).width(),
                    h: $(window).height()
                }, t.size.scr = {
                    w: screen.width,
                    h: screen.height
                }, t
            },
            getRS: function() {
                var e = this,
                    t = {};
                return t.num = e.rs, t.query = [], e.dom.rsResult.each(function() {
                    var e = this.textContent || this.innerText;
                    t.query.push(e)
                }), t
            },
            getHint: function() {
                var e = this,
                    t = {};
                return t.result = [], e.dom.hintResult.each(function() {
                    var e = {};
                    e.id = this.getAttribute("data-id") || 0, e.tpl = this.getAttribute("data-tpl") || "", t.result.push(e)
                }), t
            },
            getResult: function(e) {
                for (var t = this, i = e, n = 0, o = Math.min(i.length, 10); o > n; n++) {
                    var r = i[n].id,
                        s = t.getResultDisplay(i[n]);
                    t.expand[r] = s.expand, delete s.expand, t.display[r] = s
                }
            },
            getResultDisplay: function(e) {
                function t() {
                    var t = e.size;
                    return {
                        w: t.width || 0,
                        h: t.height || 0
                    }
                }

                function i() {
                    var t = e.pos;
                    return {
                        t: t.top || 0,
                        l: t.left || 0
                    }
                }

                function n() {
                    return d.rsv_bdr && 0 != d.rsv_bdr ? d.rsv_bdr : c.hasClass(".c-border") || c.find(".c-border").length ? 5 : 0
                }

                function o() {
                    function e(e) {
                        var t;
                        return e && (t = c.find(e)), t && t.length ? !0 : !1
                    }
                    var t = {};
                    return e(".favurl") && (t.fi = 1), e(".c-text-public.c-text-mult") && (t.gwi = 1), e(".icon-unsafe-icon") && (t.fxi = 1), e(".c-icon-v") && (t.vi = 1), e(".c-icon-med") && (t.yjji = 1), e(".c-icon-air") && (t.hxi = 1), e(".c-recommend") && (t.cr = 1), t
                }

                function r() {
                    var e = c.find("a").not(":hidden").not("h3 a, .m"),
                        t = [],
                        i = /^((https?:)?\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*(:\d+)*(\/.*)*/,
                        n = /^(\/s\?)/;
                    return e.each(function() {
                        var e = this.getAttribute("href");
                        if (e && i.test(e)) {
                            var o = e && e.match(/.*\/link\?url=([^&]*).*/);
                            t.push(o && o.length && o.length > 0 && o[1] ? o[1] : e)
                        } else e && n.test(e) && t.push(e)
                    }), t.length ? t : !1
                }

                function s() {
                    var e = [],
                        t = c.find("img").not(":hidden").not("[data-nolog]");
                    return t.length ? (t.each(function() {
                        var t = {
                            w: this.width,
                            h: this.height
                        };
                        e.push({
                            size: t
                        })
                    }), e) : !1
                }

                function a() {
                    var e = [],
                        t = c.find("object, video, audio");
                    return t.length ? (t.each(function() {
                        var t = $(this),
                            i = {};
                        i.type = t.is("object") && t.attr("type") && t.attr("type").indexOf("flash") >= 0 ? 1 : t.is("video") ? 2 : t.is("audio") ? 3 : 0, i.size = {
                            w: t.width(),
                            h: t.height()
                        }, e.push(i)
                    }), e) : !1
                }
                var c = e.dom,
                    d = e.dataClick,
                    l = {};
                if (l.id = d.p5 || "", l.srcid = d.rsv_srcid || c.attr("srcid") || 0, l.tpl = c.attr("tpl") || "", l.mu = d.mu || c.attr("mu") || "", l.fm = d.fm || "as", c.is(":hidden") && (l.show = 0), 0 == l.show) return l;
                l.size = t(), l.pos = i(), n() && (l.bdr = n()), l.com = o();
                var u = r(),
                    p = s(),
                    m = a();
                return (u || p || m) && (l.expand = {}, u && (l.link = u.length, l.expand.links = u), p && (l.img = p.length, l.expand.imgs = p), m && (l.app = m.length, l.expand.apps = m)), l
            }
        }
    }(), ! function() {
        function e() {
            this.pageElementsList = [], this.scrollTime = null, this.scrollChange = !1, this.resizeTime = null, this.resizeChange = !1, this.scrollTop = $(document).scrollTop(), this.scrollLeft = $(document).scrollLeft(), this.windowHeight = $(window).height(), this.windowWidth = $(window).width()
        }
        e.prototype = {
            init: function() {
                var e = bds.se.skeleton(),
                    t = this;
                $.each(["L", "R", "T"], function(i, n) {
                    e[n] && ($.merge(t.pageElementsList, t.getDom(e[n])), t.bindEvent(e[n]))
                })
            },
            getDom: function(e) {
                var t = [];
                return $.each(e, function(e, i) {
                    var n = {};
                    n.top = i.pos.top, n.height = i.size.height, n.id = i.id, n.visible = 0, t.push(n)
                }), t
            },
            sendLog: function(e, t) {
                bds.comm.globalLogFlag && 1 == bds.comm.globalLogFlag && bds.log.send.sendPack(e, t)
            },
            bindEvent: function(e) {
                var t = this;
                $.each(e, function(e, i) {
                    var n = 200,
                        o = !1,
                        r = null;
                    i.dom.bind("mouseenter.useraction", function() {
                        null !== r && clearTimeout(r), r = setTimeout(function() {
                            t.sendLog("new_view", {
                                type: "mouseIn",
                                id: i.id,
                                t: (new Date).getTime()
                            }), o = !0, r = null
                        }, n)
                    }).bind("mouseleave.useraction", function() {
                        null !== r && (clearTimeout(r), r = null), o && (t.sendLog("new_view", {
                            type: "mouseOut",
                            id: i.id,
                            t: (new Date).getTime()
                        }), o = !1)
                    })
                })
            },
            destroy: function() {
                $(window).unbind(".useraction"), this.pageElementsList.splice(0, this.pageElementsList.length)
            },
            sight: function() {
                var e = this;
                $.each(this.pageElementsList, function(t, i) {
                    var n = e.scrollTop < i.top + i.height && e.scrollTop + e.windowHeight > i.top;
                    if (1 !== i.visible || n) {
                        if (0 === i.visible && n) {
                            if (e.sendLog("new_view", {
                                    type: "sight",
                                    resid: i.id,
                                    action: "in",
                                    t: (new Date).getTime()
                                }), bds.comm.orderplay && bds.comm.orderplay.length && "L" == i.id.substr(0, 1) && bds.comm.pageSize) {
                                var o = (parseInt(i.id.substr(1)) - 1) % bds.comm.pageSize,
                                    r = bds.comm.orderplay[o];
                                r && !r.itime && (r.itime = (new Date).getTime())
                            }
                            i.visible = 1
                        }
                    } else {
                        if (e.sendLog("new_view", {
                                type: "sight",
                                resid: i.id,
                                action: "out",
                                t: (new Date).getTime()
                            }), bds.comm.orderplay && bds.comm.orderplay.length && "L" == i.id.substr(0, 1) && bds.comm.pageSize) {
                            var o = (parseInt(i.id.substr(1)) - 1) % bds.comm.pageSize,
                                r = bds.comm.orderplay[o];
                            r && (r.time += (new Date).getTime() - r.itime, r.itime = (new Date).getTime())
                        }
                        i.visible = 0
                    }
                })
            },
            collectPoint: function(e) {
                function t() {
                    r[n] = setTimeout(function() {
                        r.sendLog("new_view", i(e)), r[o] = !1, r.sight(), r[o] ? t() : r[n] = null
                    }, 1e3)
                }

                function i(e) {
                    if ("resize" === e) {
                        var t = $(window);
                        return r.windowHeight = t.height(), r.windowWidth = t.width(), {
                            type: "resize",
                            t: (new Date).getTime(),
                            height: r.windowHeight,
                            width: r.windowWidth
                        }
                    }
                    if ("scroll" === e) {
                        var i = $(document);
                        return r.scrollTop = i.scrollTop(), r.scrollLeft = i.scrollLeft(), {
                            type: "scroll",
                            t: (new Date).getTime(),
                            offsetX: r.scrollTop,
                            offsetY: r.scrollLeft
                        }
                    }
                }
                var n = e + "Time",
                    o = e + "Change",
                    r = this;
                null === r[n] && t()
            },
            collect: function() {
                this.init();
                var e = this;
                null !== this.resizeTime && clearTimeout(this.resizeTime), this.resizeTime = null, null !== this.scrollTime && clearTimeout(this.scrollTime), this.scrollTime = null, $(window).bind("focus.useraction", function() {
                    e.sendLog("new_view", {
                        type: "focus",
                        t: (new Date).getTime()
                    })
                }).bind("blur.useraction", function() {
                    e.sendLog("new_view", {
                        type: "blur",
                        t: (new Date).getTime()
                    })
                }).bind("resize.useraction", function(t) {
                    e.resizeChange = !0, e.collectPoint("resize", t)
                }).bind("scroll.useraction", function(t) {
                    e.scrollChange = !0, e.collectPoint("scroll", t)
                }), this.sight()
            },
            outInterface: function() {
                var e = this;
                return {
                    collect: function() {
                        e.collect()
                    },
                    destroy: function() {
                        e.destroy()
                    }
                }
            }
        }, bds.se.userAction = (new e).outInterface()
    }(), bds.comm.recommends = {}, bds.comm.recommends.recommWidth = 0, bds.se.recommend = function(e) {
        var t = this;
        t.op = $.extend({}, t._default, e), t.id = t.op.target.attr("id");
        var i = bds.comm.asyncRecFlagMap;
        i && "object" == typeof i && (t.disable = 0 === i[t.id]), t.init()
    }, bds.se.recommend.prototype = {
        constructor: bds.se.recommend,
        __init__: !1,
        currInstance: null,
        recommDom: null,
        arrowDom: null,
        cssDom: null,
        loadDom: null,
        global: {},
        _default: {
            disable: !1,
            target: "",
            arrowOffset_s: -54,
            arrowOffset_l: -151,
            container_s: 276,
            container_l: 368,
            startOpacity: .3,
            endOpacity: 1
        },
        init: function() {
            var e = this;
            e.currInstance && e.currInstance.id == e.id || (e.disable === !0 && e.setCacheData("[NO DATA]"), e.delay = {
                overIcon: null,
                loader: null,
                overArrow: null
            }, e.doWhat(function() {
                e.__init__ || (bds.se.recommend.prototype.__init__ = !0, e.createRecommDom()), e.createArrowDom(), e.delay.overArrow = setTimeout(function() {
                    var t = e.op.arrowDom.find(".rrecom-btn");
                    "none" == t.css("display") && t.show(), e.moveArrow(function() {
                        t.addClass("rrecom-btn-hover"), e.showRecommDom()
                    })
                }, 100)
            }))
        },
        dispose: function() {
            bds.se.recommend.prototype.currInstance = null, bds.se.recommend.prototype.recommDom && bds.se.recommend.prototype.recommDom.remove(), bds.se.recommend.prototype.cssDom && bds.se.recommend.prototype.cssDom.remove(), bds.comm.recommends = {}, bds.se.recommend.prototype.__init__ = !1, $(window).off("resize.recommend container_resize.recommend scroll.recommend")
        },
        createArrowDom: function() {
            var e = this,
                t = e.op.target.find(".rrecom-btn-parent");
            if (t.length) e.op.arrowDom = t;
            else {
                var i = ['<span class="rrecom-btn-parent rrecom-btn-s">', '<span class="rrecom-btn">', "<span></span>", "</span>", "</span>"].join("");
                e.op.arrowDom = $(i), e.op.arrowDom.on("click", ".rrecom-btn", function() {
                    e.hideRecommDom()
                }), e.op.target.css({
                    position: "relative"
                }).append(e.op.arrowDom)
            }
        },
        resetArrow: function() {
            var e = this;
            e.op.arrowDom.css({
                right: e.op.arrowOffset_s
            }).removeClass("rrecom-btn-click rrecom-btn-moving").find(".rrecom-btn").stop().hide().removeClass("rrecom-btn-hover")
        },
        setArrowPos: function() {
            var e = this;
            e.currInstance && ("l" === bds.comm.containerSize ? e.currInstance.op.arrowDom.css("right", e.op.arrowOffset_l) : e.currInstance.op.arrowDom.css("right", e.op.arrowOffset_s))
        },
        moveArrow: function(e) {
            var t = this,
                i = {
                    opacity: t.op.endOpacity
                };
            i.right = "l" === bds.comm.containerSize ? t.op.arrowOffset_l : t.op.arrowOffset_s, t.op.arrowDom.stop().addClass("rrecom-btn-moving rrecom-btn-click").animate(i, 0, function() {
                t.currInstance && t.currInstance !== t && t.currInstance.resetArrow(), e()
            })
        },
        log: function(e) {
            var t = {},
                i = this.op.target.attr("data-click"),
                n = this.op.target.attr("srcid"),
                o = this.op.target.attr("tpl"),
                r = this.op.target.attr("mu");
            if (n && (t.rsv_srcid = n), o && (t.rsv_tpl = o), r && (t.mu = r), i && $.extend(t, $.parseJSON(i)), t.p1 && !t.p5 && (t.p5 = t.p1), t.p5 && !t.p1 && (t.p1 = t.p5), !t.p1 && !t.p5)
                for (var s = $("#content_left").get(0), a = s.children, d = 1, l = 0, u = a.length; u > l; l++)
                    if (1 == a[l].nodeType && a[l].className && /\bresult(\-op)?\b/.test(a[l].className)) {
                        if (a[l] === this.op.target.get(0)) {
                            t.p1 = d, t.p5 = d;
                            break
                        }
                        d++
                    } t.fm = "beha";
            var p = this.op.target.find(".t>a").eq(0);
            return t.rsv_re_fcurl = p.length ? p.attr("href") : r, t.rsv_re_fcurl = t.rsv_re_fcurl || "", t.rsv_re_fcurl = encodeURIComponent(t.rsv_re_fcurl), c($.extend(t, e))
        },
        getLeftP: function() {
            var e = this.op.target.attr("data-click");
            return e = $.parseJSON(e) || {}, e.p1 && !e.p5 && (e.p5 = e.p1), e.p5 && !e.p1 && (e.p1 = e.p5), e.p5 || e.p1 || (e.p1 = 1, e.p5 = 1), {
                p1: e.p1,
                p5: e.p5
            }
        },
        s_log: function() {
            this.log({
                rsv_re_fc: 2
            })
        },
        setCacheData: function(e) {
            bds.comm.recommends[this.id] = e
        },
        getCacheData: function() {
            return bds.comm.recommends[this.id]
        },
        doWhat: function(e) {
            var t = this.getCacheData();
            "[NO DATA]" !== t && (t ? e() : this.getRemoteData(e))
        },
        getJsonp: function(e) {
            var t = this.op.target.find(".t>a").eq(0),
                i = (t.length ? t.attr("href") : this.op.target.attr("mu")) || "",
                n = i && i.match(/.*url=([^&]*).*/),
                o = bds.comm.query,
                r = this.op.target.attr("class") || "";
            if ((!r || -1 === r.indexOf("c-group-")) && n && n.length && n.length > 0 && n[1]) {
                i = n[1];
                var s = "//pcrec.baidu.com/link?url=" + encodeURIComponent(i) + "&query=" + encodeURIComponent(o);
                return $.ajax({
                    url: s,
                    dataType: "jsonp",
                    jsonp: "cb",
                    data: {
                        data_name: e,
                        ie: "utf-8",
                        oe: "utf-8",
                        format: "json",
                        t: Date.parse(new Date)
                    }
                })
            }
        },
        getRemoteData: function(e) {
            var t = this,
                i = "recommend_common_merger_online";
            $.when(this.getJsonp(i)).then(function(i) {
                i && i.data && i.data.length && i.data[0] ? (i.data[0].hintData && t.asynClkRcmd(i.data[0].hintData), (i.data[0].extData || i.data[0].tplData) && (t.setCacheData(i.data), e())) : t.setCacheData("[NO DATA]")
            }, function() {})
        },
        asynClkRcmd: function(e) {
            var t = this,
                e = e[0] || {},
                i = $("#wrapper_wrapper");
            if (e && e.linkInfo) {
                var n = t.op.target.find(".c-recommend"),
                    o = n.find(".recommend-line");
                if (e.defaultHide, o && o.length && (o.remove(), n.append(t.buildRcmdDom(e))), !n || !n.length) {
                    var r = "",
                        s = $('<div class="new-pmd"></div>');
                    r = $('<div class="c-gap-top-xsmall c-recommend recommend-none-border"></div>'), i.find(".c-recommend").hide(), r.append(t.buildRcmdDom(e)), s.append(r), t.op.target.append(s)
                }
            }
        },
        buildRcmdDom: function(e) {
            var t = this,
                i = e.tip || "为您推荐：",
                n = "";
            n = '<div class="recommend-line recommend-line-height-new recommend-no-wrap recommend-line-one"><i class="c-icon recommend-icon-bear-circle-new c-font-normal new-url-right-icon c-gap-right-xsmall"></i><span class="c-font-normal">' + i + "</span>";
            for (var o = e.linkInfo, r = e.linkInfo2, s = encodeURIComponent(bds.comm.query), a = 0, c = o.length; c > a; a++) {
                var d = o[a].txt,
                    l = encodeURIComponent(o[a].wd),
                    u = o[a].sa,
                    p = "c-gap-left";
                0 == a && (p = "");
                var m = "wd=" + l + "&rsv_crq=" + u + "&bs=" + s,
                    f = t.buildURL(m);
                n += '<a class="recommend-item-a ' + (p ? p + "-middle" : p) + '" href="' + f + '" title="' + escapeHTML(d) + '" target=_blank>' + escapeHTML(d) + "</a>"
            }
            if (n += "</div>", r) {
                n += '<div class="recommend-line recommend-line-height-new recommend-no-wrap c-gap-top-middle recommend-line-one">';
                for (var a = 0, c = r.length; c > a; a++) {
                    var d = r[a].txt,
                        l = encodeURIComponent(r[a].wd),
                        u = r[a].sa,
                        p = "c-gap-left",
                        h = "";
                    0 == a && (h = "margin-left:85px;");
                    var m = "wd=" + l + "&rsv_crq=" + u + "&bs=" + s,
                        f = t.buildURL(m);
                    n += '<a class="' + p + '-middle recommend-item-a" href="' + f + '" title="' + escapeHTML(d) + '" target=_blank style="' + h + '">' + escapeHTML(d) + "</a>"
                }
                n += "</div>"
            }
            return n
        },
        buildURL: function(e) {
            var t = "/s?",
                i = {
                    tn: bds.comm.tn
                },
                n = $("#form"),
                o = n.find("input[name=rsv_idx]"),
                r = "";
            i.rsv_idx = o.length ? o.val() : "";
            for (var s in i) i.hasOwnProperty(s) && i[s] && (r += s + "=" + encodeURIComponent(i[s]) + "&");
            return t + r + e
        },
        renderTpl: function(e, t) {
            var i = this;
            if (e && t) {
                var n = {};
                return n.right_recommends_merge = function(e) {
                    function n(t, n) {
                        var o, r = '<div class="cr-content" data-click=\'#{2}\'><div class="cr-title c-clearfix"><span title="#{0}">#{1}</span></div>',
                            s = '<div class="c-row c-gap-top">',
                            a = '<div class="c-span4#{5} rrecom-item" data-click=\'#{6}\'><div class="rrecom-p"><a target="_blank" href="#{0}"><img class="c-img c-img4 rrecom-img" src="#{1}"></a></div><div class="c-gap-top-small"><a target="_blank" title="#{2}" href="#{3}">#{4}</a></div>',
                            c = "</div>",
                            d = "",
                            l = (t.showrow, t.shownums),
                            u = {
                                rsv_srcid: e.StdStg || 0
                            };
                        t.list && !t.list.length && (t.list = [t.list]), d += $.format(r, t.subtitle, t.subtitle, $.stringify(u)), d += '<div class="rrecom-panel">';
                        for (var p = i.op.target.find(".t>a").eq(0), m = p.length ? p.attr("href") : i.op.target.attr("mu"), f = 0, h = t.list.length; h > f; f++) {
                            o = t.list[f];
                            var g = {
                                    rsv_re_ename: o.name,
                                    rsv_re_uri: o.uri,
                                    rsv_re_fcpoi: n + "-" + (f + 1),
                                    rsv_clk_url: m
                                },
                                b = i.buildURL(o.params + "&euri=" + (o.uri || ""));
                            if (f == l) break;
                            f % 4 === 0 && (d += s), bds.util && bds.util.domain && bds.util.domain.get && (o.img = bds.util.domain.get(o.img)), d += $.format(a, b, o.img, o.name, b, $.subByte(o.name, 20), (f + 1) % 4 === 0 ? " c-span-last rrecom-item-rowLast" : (f + 1) % 4 === 3 ? " rrecom-item-s" : "", $.stringify(g), o.attrpic), d += c, ((f + 1) % 4 === 0 || f == h - 1) && (d += c)
                        }
                        return d += c, d += c
                    }
                    var e = e || t,
                        o = "",
                        r = 12,
                        s = 0;
                    e.card && !e.card.length && (e.card = [e.card]);
                    for (var a = 0, c = e.card.length; c > a; a++) {
                        var d = e.card[a];
                        if (s += parseInt(d.shownums || 0), s > r) break;
                        o += n(d, a + 1)
                    }
                    return o
                }, n[e] ? n[e]() : void 0
            }
        },
        render: function(e) {
            for (var t = "", i = 0; i < e.length; i++) t += this.renderTpl(e[i].extData.tplt, e[i].tplData);
            var n = this.getLeftP();
            n.fm = "alxr", this.recommDom.attr("data-click", $.stringify(n)).find(".rrecom-content").eq(0).empty().append(t), this.setRecommPosition()
        },
        createRecommDom: function() {
            var e = ['<div style="position:fixed;left:-1px;background:#fff;border:1px solid #eee;z-index:103" class="result-op xpath-log" data-click=\'{"fm":"alxr","p1":1,"p5":1}\'>', '<div class="rrecom-ajax-loading c-loading"></div>', '<div class="rrecom-container">', '<a href="javascript:;" class="rrecom-btn-close" data-click=\'{"rsv_re_fc":4,"fm":"beha"}\'></a>', '<div class="rrecom-content"></div>', "</div>", "</div>"].join(""),
                t = "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/rrecom_icon_e34d796.png",
                i = ["<style>", ".rrecom-btn-close,.rrecom-btn span{background:url(" + t + ") no-repeat;}", ".rrecom-btn-close{display:inline-block;width:13px;height:13px;position:absolute;top:26px;right:10px;background-position:0 -20px;}", ".rrecom-btn-parent{z-index:104;position:absolute;right:-37px;top:50%;margin-top:-50px;height:59px;width:40px;cursor:default;padding:20px 0px;}", ".rrecom-btn{display:none;background-color:#fff;padding:20px 5px;position:absolute;right:10px;width:20px;height:19px;border:1px solid transparent;}", ".rrecom-btn-hover{right:-1px;border:1px solid #eee;border-right:1px solid #fff;z-index:104;box-shadow:0px 2px 0px rgba(0,0,0,0.072);-webkit-box-shadow:0px 2px 0px rgba(0,0,0,0.072);-moz-box-shadow:0px 2px 0px rgba(0,0,0,0.072);-o-box-shadow:0px 2px 0px rgba(0,0,0,0.072);}", ".rrecom-btn span{cursor:pointer;background-position:0 0;width:20px;height:19px;position:absolute;top:50%;left:50%;margin:-10px 0 0 -10px;}", ".rrecom-container{width:368px;padding-top:43px;overflow:hidden;background-color:#fff;}", ".rrecom-ajax-loading{position:absolute;left:50%;margin-left:-25px;top:50px;display:none;}", ".rrecom-content{margin-left:17px;}", ".rrecom-content .cr-content{width:100%;margin-bottom:28px;}", ".rrecom_content_s{padding-left:0px;width:276px;}", ".rrecom_content_s .rrecom-item-rowLast{display:none}", ".rrecom_content_s .rrecom-item-s{margin-right:0;}", ".rrecom-panel{text-align:center;}", "</style>"].join("");
            bds.se.recommend.prototype.recommDom = $(e), bds.se.recommend.prototype.cssDom = $(i), bds.se.recommend.prototype.loadDom = this.recommDom.find(".rrecom-ajax-loading"), this.setRecommSize(), $("body").append(this.cssDom).append(this.recommDom.hide()), this.bindRecommEvent(), $(window).trigger("container_resize.recommend", bds.comm.containerSize);
            var n = $("#foot");
            "static" === n.css("position") && n.css({
                position: "relative",
                "z-index": 104
            })
        },
        setRecommSize: function() {
            var e = $("#content_right"),
                t = $("#wrapper_wrapper"),
                i = $("body"),
                n = $(window),
                o = e.offset(),
                r = {
                    w: i.width()
                },
                s = {
                    h: n.height()
                },
                a = n.scrollTop();
            t.prevAll().each(function() {
                var e;
                return "div" === this.nodeName.toLowerCase() ? (e = parseInt($(this).css("margin-bottom")), bds.se.recommend.prototype.global.topGap = isNaN(e) ? 0 : e, !1) : void 0
            }), bds.se.recommend.prototype.global.topDom = t, bds.se.recommend.prototype.global.headDom = $("#head");
            var c = {
                    top: this.global.topDom.offset().top - this.global.topGap
                },
                d = this.global.headDom.offset().top - a + 56;
            this.recommDom.height(s.h), bds.comm.recommends.recommWidth = r.w - o.left - 2, this.recommDom.css({
                width: r.w - o.left - 2,
                top: a <= c.top - d ? c.top : d,
                position: a <= c.top - d ? "absolute" : "fixed",
                left: o.left
            })
        },
        setRecommPosition: function() {
            this.setRecommTop(), this.setRecommLeft()
        },
        setRecommTop: function() {
            var e = $(window).scrollTop(),
                t = {
                    top: this.global.topDom.offset().top - this.global.topGap
                },
                i = this.global.headDom.offset().top - e + 56;
            this.recommDom.css({
                top: e <= t.top - i ? t.top : i,
                position: e <= t.top - i ? "absolute" : "fixed"
            }).find(".rrecom-container").css({
                "margin-top": "0px"
            }), bds.se.recommend.prototype.global.originalTop = e < t.top - i ? t.top - i : e
        },
        setRecommLeft: function() {
            var e, t;
            "fixed" === this.recommDom.css("position") && (e = $("#content_right").offset().left, t = $(window).scrollLeft(), this.recommDom.css("left", parseInt(e) - t))
        },
        bindRecommEvent: function() {
            var e = this;
            this.recommDom.find(".rrecom-btn-close").eq(0).on("click", function() {
                e.hideRecommDom()
            }), $(window).on("scroll.recommend", function() {
                var t, i, n, o = {
                        top: e.global.topDom.offset().top - e.global.topGap
                    },
                    r = e.global.headDom.offset().top + e.global.headDom.outerHeight(),
                    s = $(this);
                if (e.recommDom && "none" !== e.recommDom.css("display")) {
                    t = s.scrollTop(), i = s.scrollLeft(), r -= t, t <= o.top - r ? "fixed" === e.recommDom.css("position") && (e.recommDom.css("position", "absolute"), e.recommDom.css("top", o.top)) : "absolute" === e.recommDom.css("position") && (e.recommDom.css("position", "fixed"), e.recommDom.css("top", r));
                    var a = e.recommDom.find(".rrecom-container");
                    e.global.originalTop < t ? (maxMargin = Math.min(e.recommDom.height() - a.height() - 82 - 75, 0), a.css({
                        "margin-top": Math.max(e.global.originalTop - t, maxMargin)
                    })) : a.css({
                        "margin-top": "0px"
                    }), i && (n = $("#content_right").offset().left, "fixed" === e.recommDom.css("position") ? e.recommDom.css("left", parseInt(n) - i) : e.recommDom.css("left", parseInt(n)))
                }
            }).on("resize.recommend", function() {
                e.setRecommSize(), e.setArrowPos()
            }).on("container_resize.recommend", function(t, i) {
                var n = e.recommDom.find(".rrecom-container");
                "s" !== i || n.hasClass("rrecom_content_s") ? "l" === i && (n.removeClass("rrecom_content_s"), n.find(".rrecom-content").css("width", e.op.container_l - 17 + "px")) : (n.addClass("rrecom_content_s"), n.find(".rrecom-content").css("width", e.op.container_s - 17 + "px"))
            })
        },
        hideRecommDom: function() {
            var e = this;
            e.recommDom.find(".rrecom-container").animate({
                width: "0px"
            }, 200, function() {
                e.recommDom.hide()
            }), e.currInstance && window.clearTimeout(e.currInstance.delay.overArrow), e.currInstance && e.currInstance.resetArrow(), bds.se.recommend.prototype.currInstance = null
        },
        showRecommDom: function() {
            var e = this;
            if (e.currInstance !== e, "none" === e.recommDom.css("display")) {
                e.recommDom.css({
                    opacity: .3
                }).show().animate({
                    opacity: 1
                }, 100);
                var t = e.recommDom.find(".rrecom-container"),
                    i = bds.comm.recommends.recommWidth;
                t.css({
                    width: 0
                }).animate({
                    width: i + "px"
                }, 200)
            }
            e.recommDom.find(".rrecom_content_s").length > 0 ? e.recommDom.find(".rrecom-content").css("width", e.op.container_s - 17 + "px") : e.recommDom.find(".rrecom-content").css("width", e.op.container_l - 17 + "px"), bds.se.recommend.prototype.currInstance = e, e.render(e.getCacheData())
        },
        showLoading: function() {
            this.loadDom.show()
        },
        hideLoading: function() {
            this.loadDom.hide()
        }
    }, $(window).one("swap_end", function() {
        bds.comm.upn && bds.comm.upn.ie && 6 == bds.comm.upn.ie || $(document).on("click", "#content_left .result .t>a, #content_left .result-op .t>a, .op-se-listen-recommend", function(e) {
            if (!e.ctrlKey && "0" == bds.comm.urlRecFlag) {
                var t = $(this).closest(".result, .result-op");
                new bds.se.recommend({
                    target: t
                })
            }
        })
    }), $(window).on("swap_begin", function() {
        bds.se.recommend.prototype.currInstance && bds.se.recommend.prototype.hideRecommDom(), bds.se.recommend.prototype.currInstance = null, bds.se.recommend.prototype.__init__ = !1, bds.comm.recommends = {}
    }), bds.se.asynAds = function(e) {
        var t = e.dom || "",
            i = e.id || "",
            n = e.tnp || "",
            o = e.wd || "",
            r = e.cb && "function" == typeof e.cb ? e.cb : null;
        if (t && n && o && i) {
            c({
                fm: "inlo",
                rsv_ad: "ad_asyn_start"
            });
            for (var s = ["wd", "tnp", "tn", "pn", "bs", "fenlei", "adext"], a = "ie=utf-8&oe=utf-8&dsp=pc", d = 0; d < s.length; d++) {
                var l = s[d];
                e[l] && (a += "&" + l + "=" + e[l])
            }
            var u = bds.comm.orderplay,
                p = "",
                m = function(e) {
                    if (bds && bds.comm && bds.comm.upn && bds.comm.upn.browser && "firefox" == bds.comm.upn.browser) var t = e.textContent;
                    else var t = e.innerText;
                    var i = t.indexOf("\n"),
                        n = t.substr(0, i);
                    return encodeURIComponent(n)
                },
                f = function(e) {
                    var t = $(".c-showurl", e).text().split(/\s+/)[0];
                    return t = t.replace(/(\.\.\.$)/g, "")
                };
            $.each(u, function(e, t) {
                t.t = m(t.dom[0]) || "", t.u = f(t.dom[0]) || "", t.u && !new RegExp("baidu.com").test(t.u) && (p += t.u + ":"), t.itime && (t.time = (new Date).getTime() - t.itime)
            }), u.sort(function(e, t) {
                return e.time > t.time ? -1 : e.time < t.time ? 1 : (e.time = t.time) && e.id < t.id ? -1 : 0
            });
            var h = u[0],
                g = u[1],
                b = "";
            h.time && (b += h.t + "@" + h.time, g.time && (b += "," + g.t + "@" + g.time)), b && (a += "&rlist=" + encodeURIComponent(b)), p && (a += "&furl=" + encodeURIComponent(p.substring(0, p.length - 1))), $.ajax({
                url: "/s",
                dataType: "json",
                data: a,
                success: function(e) {
                    var n = $(t);
                    if (e && e.results && e.results.length && n.length) {
                        var o = "";
                        $.each(e.results, function(e, t) {
                            if (t.id == i) {
                                var n = t;
                                o += "<style>" + n.css + "</style>", o += n.html, o += "<script>" + n.js + "</script>"
                            }
                        }), n.html(o), $(document).scrollTop() < n.position().top + n.height() && $(document).scrollTop() + $(window).height() > n.position().top && c({
                            fm: "inlo",
                            rsv_ad: "ad_asyn_shake"
                        }), r && r()
                    } else c({
                        fm: "inlo",
                        rsv_ad: "ad_asyn_net_error"
                    })
                },
                error: function() {
                    c({
                        fm: "inlo",
                        rsv_ad: "ad_asyn_net_error"
                    })
                }
            })
        } else c({
            fm: "inlo",
            rsv_ad: "ad_asyn_param_error"
        })
    }, ! function() {
        function e() {
            c = Math.random()
        }

        function t() {
            d = 1e3 * (new Date).getTime() + Math.round(1e3 * Math.random()) - 149e13, c >= .005 && .0051 > c && (n(), o(), r(), s())
        }

        function i() {
            var e = Math.round(1e3 * Math.random()) % u.length,
                t = new Image,
                i = new Image,
                n = u[e];
            t.onload = function() {
                i.src = "//www.baidu.com/nocache/fesplg/s.gif?lid=" + d + "&url=" + encodeURIComponent(n) + "&time=" + ((new Date).getTime() - o) + "&suc=1&type=aboard&dev=pc&protocol=" + encodeURIComponent(location.protocol) + "&ran=" + (new Date).getTime()
            }, t.onerror = function() {
                i.src = "//www.baidu.com/nocache/fesplg/s.gif?lid=" + d + "&url=" + encodeURIComponent(n) + "&time=&suc=0&type=aboard&dev=pc&protocol=" + encodeURIComponent(location.protocol) + "&ran=" + (new Date).getTime()
            };
            var o = (new Date).getTime();
            t.src = n + "?ran=" + (new Date).getTime()
        }

        function n() {
            var e = new Image;
            e.onload = function() {
                a("cndtestsuc")
            }, e.onerror = function() {
                a("cndtesterr")
            }, e.src = "//ss0.bdstatic.com/5bd1bjqh_Q23odCf/static/wiseindex/img/w_icon2.png?ran"
        }

        function o() {
            var e = new Image;
            e.onload = function() {
                a("cndgsstestsuc")
            }, e.onerror = function() {
                a("cndgsstesterr")
            }, e.src = "//gss0.bdstatic.com/5bd1bjqh_Q23odCf/static/wiseindex/img/w_icon2.png?ran"
        }

        function r() {
            var e = new Image;
            e.onload = function() {
                a("cndidctestsuc")
            }, e.onerror = function() {
                a("cndidctesterr")
            }, e.src = "//m.baidu.com/logo.gif"
        }

        function s() {
            var e = new Image;
            e.onload = function() {
                a("cndss0bdtestsuc")
            }, e.onerror = function() {
                a("cndss0bdtesterr")
            }, e.src = "//ss0.baidu.com/5bd1bjqh_Q23odCf/static/wiseindex/img/w_icon2.png?ran"
        }

        function a(e, t) {
            if (e) {
                t = t || {}, t.st = e, t.fm = "inlo";
                var i = "&terminal=pc";
                for (var n in t) i += "&" + n + "=" + t[n];
                var o = new Image;
                o.src = bds.util.domain.get(l + i)
            }
        }
        var c, d = "",
            l = "http://sestat.baidu.com/cm.gif?type=cdnmonitor",
            u = ["https://sptidchk.baidu.com/s.gif", "https://sptidcsfo.baidu.com/s.gif", "https://sptidcjp.baidu.com/s.gif", "https://sptidcsin.baidu.com/s.gif"];
        location.protocol.indexOf("https") > -1 && $(window).on("swap_dom_ready", function() {
            e()
        }).on("swap_end", function() {
            t()
        }), "70" == bds.comm.bfe_sample && $(window).on("swap_end", function() {
            d = 1e3 * (new Date).getTime() + Math.round(1e3 * Math.random()) - 149e13, i()
        })
    }(), ! function() {
        var e, t, i = bds && bds.util && bds.util.domain && bds.util.domain.get("http://sensearch.baidu.com/sensearch/selecttext");
        $(window).one("swap_end", function() {
            bds.comm.upn && bds.comm.upn.ie && 6 == bds.comm.upn.ie || $(document).on("mousedown", function(i) {
                e && 0 == $(i.target).closest(e.getDom()).length && (e.getDom().hide(), t && t.abort())
            }).on("mouseup", function(n) {
                var o, r, s, a, c;
                if (!e || !$(n.target).closest(e.getDom()).length) try {
                    setTimeout(function() {
                        if (window.getSelection) {
                            if (o = window.getSelection(), 0 == o.rangeCount) return;
                            r = o.getRangeAt(0), s = r.getBoundingClientRect(), a = $.trim(o.toString()), c = $("#text" == r.commonAncestorContainer.nodeName ? r.commonAncestorContainer.parentNode : r.commonAncestorContainer)
                        } else document.selection && (o = document.selection.createRange(), r = o, s = r.getBoundingClientRect(), a = $.trim(o.text.toString()), c = $(r.parentElement()));
                        if (a && a.length > 1 && c.closest("#content_left .result .c-abstract,#content_left .result .t").length) {
                            t && t.abort();
                            var n = /[^(\u4E00-\u9FA5)]+/i;
                            if (!n.test(a)) return;
                            t = $.ajax({
                                url: i,
                                dataType: "jsonp",
                                jsonp: "cb",
                                timeout: 5e3,
                                data: {
                                    q: a
                                },
                                success: function(t) {
                                    var i = "";
                                    if (t && t.data && t.data.type && t.data.to && "zh" == t.data.to && t.data.result && t.data.result.length && t.data.result != a)
                                        if (1 == t.data.type)
                                            for (var n = t.data.result, o = 0, r = Math.min(n.length, 2); r > o; o++) i += (0 == o ? "" : "<br/>") + (n[o].pre ? n[o].pre + "&nbsp;" : ""), i += n[o].cont ? $.subByte(n[o].cont, 46 * (1 == r ? 2 : 1) + 1) : "";
                                        else if (2 == t.data.type) {
                                        var c = t.data.result.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
                                        i = '<span style="color:#999">译：</span>' + c
                                    }
                                    if (i) {
                                        e = e || new bds.se.tip({
                                            target: $("body"),
                                            mode: "none",
                                            content: '<div class="translateContent"></div>',
                                            align: "left",
                                            arrow: {
                                                has: 1,
                                                offset: 10
                                            }
                                        });
                                        var d = e.getDom();
                                        d.find(".translateContent").html('<p style="margin:0 8px">' + i + "</p>"), d.css({
                                            top: s.bottom + $(window).scrollTop() + 8,
                                            left: (s.left + s.right) / 2 + $(window).scrollLeft() - 20
                                        }).show(), ns_c({
                                            rsv_trans_type: "showresult",
                                            rsv_trans_st: encodeURIComponent(a),
                                            rsv_qid: bds.comm.qid || ""
                                        })
                                    }
                                }
                            })
                        }
                    }, 0)
                } catch (n) {}
            })
        }), $(window).on("swap_begin", function() {
            e = null, t && t.abort()
        })
    }(), ! function() {
        function e(e) {
            return e = o(e), e.attr("id") || e.attr("data-click") && $.parseJSON(e.attr("data-click")).rsv_srcid || e.attr("class") || "-1"
        }

        function t(e) {
            var t = o(e),
                i = t.clone();
            i.unbind(), i.children(".fb-list-container").remove(), i.children(".fb-list-container-first").remove(), i.children(".fb-hint-tip").remove(), i.removeAttr("style"), i.css("margin", "0"), e.append(i), e.addClass("fb-list-container-hover")
        }

        function i(e) {
            e.empty(), e.removeClass("fb-list-container-hover")
        }

        function n() {
            bds.se.ShortCut.reloadPage(), $(".fb-hint-tip").remove(), $(".fb-list-container-first").remove(), bds.se.ShortCut.ldialog && bds.se.ShortCut.ldialog.destory(), bds.se.ShortCut.rdialog && bds.se.ShortCut.rdialog.destory(), bds.se.ShortCut.ldialog = 0, bds.se.ShortCut.rdialog = 0, $(".fb-mask").remove(), $(".fb-list-container").remove()
        }

        function o(e) {
            return e.closest(e.closest("#rs").length ? "#rs" : e.closest("#rs_new").length ? "#rs_new" : e.closest("#con-ar").length ? ".result-op" : "#content_left > div")
        }

        function r() {
            var e = $("#content_left > div");
            e.append("<div class='fb-list-container' data-html2canvas-ignore='true'></div>"), $("#content_left > div").css("overflow", "visible"), $(".leftBlock .fb-list-container").remove(), $(".hit_top_new .fb-list-container").remove(), e.each(function() {
                $(this).find(".fb-list-container").css("width", $(this).width() + 20), $(this).find(".fb-list-container").css("height", $(this).height() + 10)
            }), $(".c-container").first().append("<div class='fb-list-container-first' data-html2canvas-ignore='true'></div>"), $(".c-container").first().find(".fb-list-container-first").css("width", $(".c-container").first().width() + 20), $(".c-container").first().find(".fb-list-container-first").css("height", $(".c-container").first().height() + 10), $(".c-container").first().append('<div class="fb-hint-tip" data-html2canvas-ignore="true"><span>鼠标点击，可对单条结果进行反馈</span></div>');
            var t = $($("#rs").length ? "#rs" : "#rs_new");
            t.append("<div class='fb-list-container' data-html2canvas-ignore='true'></div>"), t.find(".fb-list-container").css("width", t.width() + 20), t.find(".fb-list-container").css("height", t.height() + 10);
            var i = $("#con-ar .result-op");
            i.append("<div class='fb-list-container' data-html2canvas-ignore='true'></div>"), i.each(function() {
                $(this).find(".fb-list-container").css("width", $(this).width() + 20), $(this).find(".fb-list-container").css("height", $(this).height() + 10)
            })
        }

        function s(e) {
            var t = "";
            t = t + '<input type="hidden" class="fb-select-value"  name="type" value="' + e[0].key + '">', t = t + '<div class="fb-select"><div class="fb-select-shorter"><div class="fb-type-selected">' + e[0].value + '<div class="fb-select-icon"></div></div><div class="fb-type-container">';
            for (var i = 0; i < e.length; i++) t = t + "<div class='fb-type-item' value='" + e[i].key + "'>" + e[i].value + "</div>";
            return t += "</div></div></div>"
        }

        function a(e, t, i, o) {
            this.init = function() {
                var i = new Date;
                return this.title = e, this.query = decodeURIComponent(bds.comm.query), this.srcid = t && t.attr("srcid") || "-1", this.tpl = t && t.attr("tpl") || "", this.url = window.location.href || "", this.time = i.getFullYear() + "/" + (i.getMonth() + 1) + "/" + i.getDate() + " " + i.getHours() + ":" + i.getMinutes() + ":" + i.getSeconds(), this.username = bds.comm.username || "", this.order = t && t.attr("id") || "", this.entry = "1", this.build(), this.bindEvent(), this.render(), this
            }, this.build = function() {
                var e = "";
                if ("sug" === o) {
                    var t = "<div class='fb-list-wrapper'>";
                    i.forEach(function(e) {
                        t += "<div class='fb-checkbox'><div style='font-size: 13px;color:#333;float: left'>" + e + "</div><span style='position: absolute;right:0;width: 11px;height: 11px;border: 1px solid #ccc;top:10px;'><i class='fb-selected'></i></span></div>"
                    }), t += "</div>";
                    var n = t,
                        r = '<div class="fb-textarea fb-content-block fb-textarea-sug"><textarea maxlength="400" class ="fb-des-content" name="content" placeholder="请详细说明，以便于我们定位和解决问题，如：内容有误/定位地点不准确等（字数限制在300字以内）"></textarea></div>'
                } else var a = [{
                        key: "27642",
                        value: "申请删除提示词"
                    }, {
                        key: "27464",
                        value: "内容或图片陈旧"
                    }, {
                        key: "27465",
                        value: "变形、错乱、乱码等问题"
                    }, {
                        key: "27469",
                        value: "页面结果与搜索词无关"
                    }, {
                        key: "27467",
                        value: "其他问题及建议"
                    }],
                    n = s(a),
                    r = '<div class="fb-textarea fb-content-block"><textarea maxlength="400" class ="fb-des-content" name="content" placeholder="请详细说明，以便于我们定位和解决问题，如：内容有误/定位地点不准确等（字数限制在300字以内）"></textarea></div>';
                var c = "",
                    d = "";
                bds.se.ShortCut.uploadImg && "sug" !== o && (c = '<div class="fb-block fb-cut-block" ><div class="fb-cut-input c-icon c-icon-success"  ></div><span class="fb-shangchuan">包含屏幕截图</span></div>', d = '<div class="fb-block fb-canvas-block"><img src=""/><input type="hidden" name="img_base64" class="fb-img"></div>');
                var l = '<div class="fb-block fb-email-block"><input type="text" class="fb-email"  name="email" maxlength="100" placeholder="联系邮箱（留下联系邮箱，以便我们快速反馈）"></div>',
                    u = "搜索结果反馈";
                "sug" === o && (u = "搜索联想词反馈"), e = '<div class="fb-modal "><div class="fb-header" id="fb_dialog_header" unselectable="on" onselectstart="return false;"><a class="fb-close" id="fb_close_x">×</a><h3  class="fb-header-tips">' + u + '</h3></div><div class="fb-body" id="fb_qa_feedback_body"><div class="fb-action"><form id="fb_right_post_form" enctype="multipart/form-data" onsubmit = "return false;">' + n + r + c + d + l + '</form> </div><div class="fb-hint fb-hint-no-content"><span>请填写描述反馈</span></div><div class="fb-hint fb-hint-no-email"><span>请留下您的联系方式</span></div><div class="fb-hint fb-hint-error-email"><span>邮箱格式不正确</span></div><div class="fb-footer"><div class="fb-btn fb-btn-primary" id="fb_right_post_save">提交反馈</div></div><div class="fb-guide fb-guide-block"><span><a style="text-decoration:underline;" href="http://ufo.baidu.com/listen/myhistory?product_line=20018&appid=215622&type=commonQA" target="_blank">常见解决办法</a></span><span><a style="text-decoration:underline;float:right;margin-right: -5px;" href="http://ufo.baidu.com/listen/myhistory?type=myhistory&product_line=20018&appid=215622" target="_blank">我的反馈</a></span></div></div></div><div class="fb-mask" style="display:none"  data-html2canvas-ignore="true"></div><div class="fb-vertify" style="display:none"><div class="fb-header" id="fb_dialog_header" unselectable="on" onselectstart="return false;"><a class="fb-close" id="fb_close_x">×</a><h3  class="fb-header-tips">安全验证</h3></div><div id="fb_vertify"></div></div><div class="fb-success" style="display:none" ><div class="fb-header" id="fb_dialog_header" unselectable="on" onselectstart="return false;"><a class="fb-close" id="fb_close_x">×</a><h3  class="fb-header-tips">非常感谢</h3></div><div class="fb-body" id="fb_qa_feedback_body"><div class="fb-success-text fb-success-text-title"><i class="c-icon c-icon-right-empty"></i>提交成功</div><div class="fb-success-text">感谢您的宝贵意见</div></div></div>';
                var p = document.createElement("div");
                p.id = "fb_baidu_right_dialog", p.className = "fb-feedback-right-dialog", p.className = "fb-feedback-right-dialog", p.setAttribute("data-html2canvas-ignore", "true"), p.innerHTML = e, this.dom = p
            }, this.bindEvent = function() {
                var e = this;
                $(this.dom).find(".fb-close").on("click", function() {
                    n()
                }), $(this.dom).find("#fb_right_post_save").on("click", function() {
                    $(e.dom).find(".fb-textarea textarea").val() ? -1 == [27642].indexOf(Number($(e.dom).find(".fb-select-value").val())) || $(e.dom).find(".fb-email").val() ? $(e.dom).find(".fb-email").val() && !/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test($(e.dom).find(".fb-email").val()) ? ($(e.dom).find(".fb-hint-error-email").css("display", "block"), setTimeout(function() {
                        $(e.dom).find(".fb-hint-error-email").css("opacity", "1"), setTimeout(function() {
                            $(e.dom).find(".fb-hint-error-email").removeAttr("style")
                        }, 1500)
                    }, 50)) : ($(e.dom).find(".fb-modal ").css("display", "none"), $(e.dom).find(".fb-vertify").css("display", "block"), $.getScript("https://wappass.baidu.com/static/machine/js/api/mkd.js", function() {
                        var t;
                        if (window.PassMachine && window.PassMachine.mkd) {
                            var i = window.PassMachine.mkd;
                            t = new i({
                                type: "spin",
                                id: "fb_vertify",
                                ak: "dabac7bfca28a1c17b092fc071d0f56c",
                                verifySuccessFn: function(t) {
                                    e.post(t.ds, t.tk)
                                },
                                initApiSuccessFn: function() {
                                    t.initVcode()
                                }
                            })
                        }
                    })) : ($(e.dom).find(".fb-hint-no-email").css("display", "block"), setTimeout(function() {
                        $(e.dom).find(".fb-hint-no-email").css("opacity", "1"), setTimeout(function() {
                            $(e.dom).find(".fb-hint-no-email").removeAttr("style")
                        }, 1500)
                    }, 50)) : ($(e.dom).find(".fb-hint-no-content").css("display", "block"), setTimeout(function() {
                        $(e.dom).find(".fb-hint-no-content").css("opacity", "1"), setTimeout(function() {
                            $(e.dom).find(".fb-hint-no-content").removeAttr("style")
                        }, 1500)
                    }, 50))
                }), $(this.dom).find(".fb-cut-input").on("click", function() {
                    $(e.dom).find(".fb-cut-input").hasClass("c-icon") ? ($(e.dom).find(".fb-cut-input").removeClass("c-icon"), $(e.dom).find(".fb-cut-input").removeClass("c-icon-success"), $(e.dom).find(".fb-canvas-block").css("display", "none")) : ($(e.dom).find(".fb-cut-input").addClass("c-icon"), $(e.dom).find(".fb-cut-input").addClass("c-icon-success"), $(e.dom).find(".fb-canvas-block").css("display", "block"))
                }), $(this.dom).find(".fb-type-selected").on("click", function() {
                    "block" == $(e.dom).find(".fb-type-container").css("display") ? $(e.dom).find(".fb-type-container").hide() : $(e.dom).find(".fb-type-container").show()
                }), $(this.dom).find(".fb-checkbox").on("click", function(e) {
                    "block" == $(e.currentTarget).find(".fb-selected").css("display") ? ($(e.currentTarget).find(".fb-selected").css("display", "none"), $(e.currentTarget).removeClass("fb-checkbox-selected")) : ($(e.currentTarget).find(".fb-selected").css("display", "block"), $(e.currentTarget).addClass("fb-checkbox-selected"))
                }), $(this.dom).find(".fb-type-item").on("click", function(t) {
                    $(e.dom).find(".fb-type-container").hide(), $(e.dom).find(".fb-type-selected").html($(t.currentTarget).text() + "<div class='fb-select-icon'></div>"), $(e.dom).find(".fb-select-value").val($(t.currentTarget).attr("value"))
                }), $(this.dom).find(".fb-des-content").on("click", function() {
                    $(".c-container").first().children(".fb-hint-tip").remove(), $(".c-container").first().children(".fb-list-container-first").remove()
                })
            }, this.render = function() {
                $("body").append(this.dom)
            }, this.grayed = function(e) {
                e ? $(this.dom).css("visibility", "hidden") : $(this.dom).removeAttr("style")
            }, this.destory = function() {
                $(this.dom).remove(), $(document).off("scroll.feedback")
            }, this.post = function(e, t) {
                var i = this;
                this.content = $(this.dom).find(".fb-des-content").val(), this.type = $(this.dom).find(".fb-select-value").val(), this.email = $(this.dom).find(".fb-email").val();
                var r = $(this.dom).find(".fb-checkbox.fb-checkbox-selected");
                sugText = [], r.each(function(e, t) {
                    sugText.push($(t).find("div").text())
                }), this.sugText = sugText.join("&");
                var s = 26138,
                    a = i.type;
                ("27642" == this.type || "27643" == this.type || "33081" == this.type) && (s = this.type, a = 0), "46918" == i.type && (s = "64637", a = 0), "46919" == i.type && (s = "64638", a = 0), data = "sug" === o ? {
                    product_type: "27642",
                    sug_text: i.sugText,
                    content: this.content,
                    query: this.query,
                    time: this.time,
                    srcid: this.srcid,
                    url: this.url,
                    entry: "3",
                    platform: "pc",
                    ds: e,
                    token: t
                } : {
                    product_type: s,
                    content: this.content,
                    type: a,
                    img_base64: bds.se.ShortCut.img_base64,
                    email: this.email,
                    query: this.query,
                    srcid: this.srcid,
                    tpl: this.tpl,
                    url: this.url,
                    time: this.time,
                    username: this.username,
                    order: this.order,
                    entry: this.entry,
                    platform: "pc",
                    ds: e,
                    token: t
                };
                var c = function() {
                    $(this.dom).find(".fb-vertify").remove(), $(this.dom).find(".fb-mask").remove(), $(this.dom).find(".fb-success").css("display", "block"), n()
                };
                $.ajax(bds.se.ShortCut.uploadImg ? {
                    url: bds.se.ShortCut.domain,
                    type: "post",
                    data: data,
                    xhrFields: {
                        withCredentials: !0
                    },
                    complete: c
                } : {
                    url: bds.se.ShortCut.domain,
                    dataType: "jsonp",
                    data: data,
                    jsonp: "cb1",
                    complete: c
                })
            }, this.init()
        }

        function c(e, t) {
            this.init = function() {
                var t = new Date;
                if (this.query = decodeURIComponent(bds.comm.query), this.srcid = e && e.attr("srcid") || "-1", this.tpl = e && e.attr("tpl") || "", this.cururl = e && e.find("a").eq(0).attr("href") || "", this.url = window.location.href || "", this.time = t.getFullYear() + "/" + (t.getMonth() + 1) + "/" + t.getDate() + " " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds(), this.username = bds.comm.username || "", e)
                    if (e.closest("#con-ar").length) {
                        this.order = "con-ar";
                        var i = [{
                            key: "27642",
                            value: "申请删除提示词"
                        }, {
                            key: "33081",
                            value: "侵犯个人隐私与权益"
                        }, {
                            key: "27464",
                            value: "内容或图片陈旧"
                        }, {
                            key: "27465",
                            value: "变形、错乱、乱码等问题"
                        }, {
                            key: "27469",
                            value: "页面结果与搜索词无关"
                        }, {
                            key: "27467",
                            value: "其他问题及建议"
                        }];
                        this.content_tips_div = s(i)
                    } else if (e.attr("id") && "rs" == e.attr("id")) {
                    this.order = "rs";
                    var i = [{
                        key: "27642",
                        value: "申请删除提示词"
                    }, {
                        key: "33081",
                        value: "侵犯个人隐私与权益"
                    }];
                    this.content_tips_div = s(i)
                } else if (e.attr("tpl") && "se_com_default" != e.attr("tpl")) {
                    this.order = e.attr("id") || "-1";
                    var i = [{
                        key: "27464",
                        value: "内容或图片陈旧"
                    }, {
                        key: "33081",
                        value: "侵犯个人隐私与权益"
                    }, {
                        key: "27465",
                        value: "变形、错乱、乱码等问题"
                    }, {
                        key: "27466",
                        value: "这条结果与搜索词无关"
                    }, {
                        key: "27467",
                        value: "其他问题及建议"
                    }];
                    this.content_tips_div = s(i)
                } else if (e.attr("tpl")) {
                    this.order = e.attr("id") || "-1";
                    var i = [{
                        key: "46918",
                        value: "网页打不开、提示内容已删除和无法找到该网页"
                    }, {
                        key: "46919",
                        value: "搜索展现的内容和实际网页不一致"
                    }, {
                        key: "33081",
                        value: "侵犯个人隐私与权益"
                    }, {
                        key: "27464",
                        value: "内容或图片陈旧"
                    }, {
                        key: "27465",
                        value: "变形、错乱、乱码等问题"
                    }, {
                        key: "27466",
                        value: "这条结果与搜索词无关"
                    }, {
                        key: "27467",
                        value: "其他问题及建议"
                    }];
                    this.content_tips_div = s(i)
                } else {
                    this.order = "ec";
                    var i = [{
                        key: "27470",
                        value: "推广信息侵权"
                    }, {
                        key: "33081",
                        value: "侵犯个人隐私与权益"
                    }, {
                        key: "27471",
                        value: "推广信息质量差"
                    }, {
                        key: "27472",
                        value: "推广信息与搜索词无关"
                    }, {
                        key: "27473",
                        value: "其他问题及产品建议"
                    }];
                    this.content_tips_div = s(i)
                }
                return this.entry = "2", this.top = e.offset().top - 4, this.left = e.closest("#content_right").length ? e.offset().left - 390 - 23 : e.offset().left + e.width() + 30, this.build(), this.bindEvent(), this.render(), this
            }, this.build = function() {
                var e = "",
                    t = '<div class="fb-textarea fb-content-block"><textarea maxlength="400" class ="fb-des-content" name="content" placeholder="请详细说明，以便于我们定位和解决问题，如：内容有误/定位地点不准确等（字数限制在300字以内）"></textarea></div>',
                    i = '<div class="fb-block fb-email-block"><input type="text" class="fb-email" maxlength="100" name="email" placeholder="联系邮箱（留下联系邮箱，以便我们快速反馈）"></div>',
                    n = '<div class="fb-block fb-photo-block" upload_num=0><p class="fb-photo-block-title">请上传照片及身份证照片<span class="fb-photo-block-title-ex"><img src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/feedback_icon_show_6016362.png">示例<span></p><div class="fb-photo-sub-block"><img src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/feedback_up_56db4dd.png" class="fb-photo-block-upinfo"></div><div class="fb-block fb-photo-update-block fb-photo-update-hide"><div class="fb-photo-update-item-block"><img src="" class="fb-photo-update-item-show-img"><img src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/feedback_close_icon_682280b.png" alt="" class="fb-photo-update-item-close"></div><div class="fb-photo-update-item-block"><img src="" class="fb-photo-update-item-show-img"><img src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/feedback_close_icon_682280b.png" alt="" class="fb-photo-update-item-close"></div><div class="fb-photo-update-item-block"><img src="" class="fb-photo-update-item-show-img"><img src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/feedback_close_icon_682280b.png" alt="" class="fb-photo-update-item-close"></div><div class="fb-photo-update-item-block"><img src="" class="fb-photo-update-item-show-img"><img src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/feedback_close_icon_682280b.png" alt="" class="fb-photo-update-item-close"></div><input type="file"  name="img_base64_1" accept="image/*;capture=camera"><input type="file"  name="img_base64_2" accept="image/*;capture=camera"><input type="file"  name="img_base64_3" accept="image/*;capture=camera"><input type="file"  name="img_base64_4" accept="image/*;capture=camera"></div></div>',
                    o = '<div class="fb-photo-block-example"><div class="fb-photo-block-example-header"><p>示例</p><img src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/feedback_close_icon_682280b.png" alt=""></div> <div class="fb-photo-block-example-title"><p class="fb-photo-block-example-title-big">身份证正反面照示例</p><p class="fb-photo-block-example-title-small">身份证照片需要信息清晰,仅仅用于审核，百度会保证隐私安全</p></div><div class="fb-photo-block-example-img"><img src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/feedback_sfz_29991ea.png" alt=""><img src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/feedback_sfz1_6f3f07a.png" alt=""></div></div>';
                e = '<div class="fb-modal" ><div class="fb-header" id="fb_dialog_header" unselectable="on" onselectstart="return false;"><a class="fb-close" id="fb_close_x">×</a><h3  class="fb-header-tips">意见反馈</h3></div><div class="fb-body" id="fb_qa_feedback_body"><div class="fb-action"><form id="fb_right_post_form" enctype="multipart/form-data" method="post" onsubmit = "return false;">' + this.content_tips_div + t + i + n + '</form> </div><div class="fb-hint fb-hint-no-content"><span>请填写描述反馈</span></div><div class="fb-hint fb-hint-error-photo"><span>请提交图片</span></div><div class="fb-hint fb-hint-no-email"><span>请留下您的联系方式</span></div><div class="fb-hint fb-hint-error-email"><span>邮箱格式不正确</span></div><div class="fb-footer"><div class="fb-btn fb-btn-primary" id="fb_list_post_save">提交反馈</div></div><div class="fb-guide fb-guide-block"><span><a style="text-decoration:underline;" href="http://ufo.baidu.com/listen/myhistory?product_line=20018&appid=215622&type=commonQA" target="_blank">常见解决办法</a></span><span><a style="text-decoration:underline;float:right;margin-right: -5px;" href="http://ufo.baidu.com/listen/myhistory?type=myhistory&product_line=20018&appid=215622" target="_blank">我的反馈</a></span></div></div></div><div class="fb-vertify" style="display:none"><div class="fb-header" id="fb_dialog_header" unselectable="on" onselectstart="return false;"><a class="fb-close" id="fb_close_x">×</a><h3  class="fb-header-tips">安全验证</h3></div><div id="fb_vertify_list"></div></div><div class="fb-success" style="display:none" ><div class="fb-header" id="fb_dialog_header" unselectable="on" onselectstart="return false;"><a class="fb-close" id="fb_close_x">×</a><h3  class="fb-header-tips">非常感谢</h3></div><div class="fb-body" id="fb_qa_feedback_body"><div class="fb-success-text fb-success-text-title"><i class="c-icon c-icon-right-empty"></i>提交成功</div><div class="fb-success-text">感谢您的宝贵意见</div></div></div>' + o;
                var r = document.createElement("div");
                r.id = "fb_baidu_list_dialog", r.className = "fb-feedback-list-dialog", r.setAttribute("data-html2canvas-ignore", "true"), r.innerHTML = e, this.dom = r, $(this.dom).css("top", this.top), $(this.dom).css("left", this.left), "con-ar" == this.order && $(this.dom).attr("class", "fb-feedback-list-dialog-left")
            }, this.bindEvent = function() {
                var e = this;
                $(this.dom).find(".fb-close").on("click", function() {
                    e.destory(), i($(".fb-list-container")), bds.se.ShortCut.key = 0, bds.se.ShortCut.rdialog && bds.se.ShortCut.rdialog.grayed(0), bds.se.ShortCut.rdialog || n()
                }), $(this.dom).find("#fb_list_post_save").on("click", function() {
                    $(e.dom).find(".fb-textarea textarea").val() ? -1 == [27642, 27643].indexOf(Number($(e.dom).find(".fb-select-value").val())) || $(e.dom).find(".fb-email").val() ? $(e.dom).find(".fb-email").val() && !/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test($(e.dom).find(".fb-email").val()) ? ($(e.dom).find(".fb-hint-error-email").css("display", "block"), setTimeout(function() {
                        $(e.dom).find(".fb-hint-error-email").css("opacity", "1"), setTimeout(function() {
                            $(e.dom).find(".fb-hint-error-email").removeAttr("style")
                        }, 1500)
                    }, 50)) : ($(e.dom).find(".fb-modal ").css("display", "none"), $(e.dom).find(".fb-vertify").css("display", "block"), $.getScript("https://wappass.baidu.com/static/machine/js/api/mkd.js", function() {
                        var t;
                        if (window.PassMachine && window.PassMachine.mkd) {
                            var i = window.PassMachine.mkd;
                            t = new i({
                                type: "spin",
                                id: "fb_vertify_list",
                                ak: "dabac7bfca28a1c17b092fc071d0f56c",
                                verifySuccessFn: function(t) {
                                    e.post(t.ds, t.tk)
                                },
                                initApiSuccessFn: function() {
                                    t.initVcode()
                                }
                            })
                        }
                    })) : ($(e.dom).find(".fb-hint-no-email").css("display", "block"), setTimeout(function() {
                        $(e.dom).find(".fb-hint-no-email").css("opacity", "1"), setTimeout(function() {
                            $(e.dom).find(".fb-hint-no-email").removeAttr("style")
                        }, 1500)
                    }, 50)) : ($(e.dom).find(".fb-hint-no-content").css("display", "block"), setTimeout(function() {
                        $(e.dom).find(".fb-hint-no-content").css("opacity", "1"), setTimeout(function() {
                            $(e.dom).find(".fb-hint-no-content").removeAttr("style")
                        }, 1500)
                    }, 50))
                }), $(this.dom).find(".fb-type-selected").on("click", function() {
                    "block" == $(e.dom).find(".fb-type-container").css("display") ? $(e.dom).find(".fb-type-container").hide() : $(e.dom).find(".fb-type-container").show()
                }), $(this.dom).find(".fb-type-item").on("click", function(t) {
                    $(e.dom).find(".fb-type-container").hide(), $(e.dom).find(".fb-type-selected").html($(t.currentTarget).text() + "<div class='fb-select-icon'></div>"), $(e.dom).find(".fb-select-value").val($(t.currentTarget).attr("value")), 33081 == $(t.currentTarget).attr("value") ? $(e.dom).find(".fb-photo-block").css("display", "block") : $(e.dom).find(".fb-photo-block").css("display", "none")
                }), $(this.dom).find(".fb-photo-sub-block").on("click", function() {
                    $(this).addClass("fb-photo-sub-block-hide"), $(e.dom).find(".fb-photo-update-hide").removeClass("fb-photo-update-hide"), $(e.dom).find(".fb-photo-update-hide").removeClass("fb-photo-update-hide")
                }), $(this.dom).find(".fb-photo-update-item-block").on("click", function() {
                    var t = $(e.dom),
                        i = $(this),
                        n = $(this).index(),
                        o = $(e.dom).find(".fb-photo-update-block").find("input").get(n);
                    o.click(), $(o).on("change", function(e) {
                        var n = o.files[0],
                            r = n.type;
                        if (r && ("image/png" == r || "image/jpg" == r || "image/jpeg" == r || "image/jpeg" == r) && $(e.currentTarget).val() && n.size < 2097152) {
                            var s = new FileReader;
                            s.addEventListener("load", function() {
                                i.find(".fb-photo-update-item-show-img").attr("src", s.result), i.find(".fb-photo-update-item-close").css("display", "block"), i.find(".fb-photo-update-item-show-img").css("display", "block");
                                var e = t.find(".fb-photo-block"),
                                    n = e.attr("upload_num");
                                e.attr("upload_num", Number(n) + 1)
                            }, !1), s.readAsDataURL(n)
                        }
                    })
                }), $(this.dom).find(".fb-photo-update-item-close").on("click", function(t) {
                    var i = $(e);
                    t.stopPropagation();
                    var n = $(this).parent(".fb-photo-update-item-block").index();
                    $(this).siblings("img").attr("src", ""), $(".fb-photo-update-block").find("input").eq(n).val(""), $(this).css("display", "none"), $(this).siblings("img").css("display", "none");
                    var o = i.find(".fb-photo-block"),
                        r = o.attr("upload_num");
                    o.attr("upload_num", Number(r) + 1)
                }), $(this.dom).find(".fb-photo-block-title-ex").on("click", function(t) {
                    t.stopPropagation(), $(e.dom).find(".fb-modal").css("display", "none"), $(e.dom).find(".fb-photo-block-example").css("display", "block")
                }), $(this.dom).find(".fb-photo-block-example-header img").on("click", function(t) {
                    t.stopPropagation(), $(e.dom).find(".fb-modal").css("display", "block"), $(e.dom).find(".fb-photo-block-example").css("display", "none")
                })
            }, this.render = function() {
                $("body").append(this.dom)
            }, this.destory = function() {
                $(this.dom).remove()
            }, this.post = function(e, i) {
                var o = this;
                this.content = $(this.dom).find(".fb-des-content").val(), this.type = $(this.dom).find(".fb-select-value").val(), this.email = $(this.dom).find(".fb-email").val();
                var r = $(this.dom).find(".fb-photo-block").find(".fb-photo-update-item-show-img");
                bds.se.ShortCut.get_Snapshot_list(bds.se.ShortCut.curListDom[0], bds.se.ShortCut.curListDom.width() + 20, bds.se.ShortCut.curListDom.height() + 12, function() {
                    var s = 26138,
                        a = o.type;
                    ("27642" == o.type || "27643" == o.type || "33081" == o.type) && (s = o.type, a = 0), "46918" == o.type && (s = "64637", a = 0), "46919" == o.type && (s = "64638", a = 0), data = {
                        product_type: s,
                        content: o.content,
                        type: a,
                        img_base64: bds.se.ShortCut.img_base64_list,
                        email: o.email,
                        query: o.query,
                        srcid: o.srcid,
                        tpl: o.tpl,
                        url: o.url,
                        time: o.time,
                        username: o.username,
                        order: o.order,
                        entry: o.entry,
                        platform: "pc",
                        cururl: o.cururl,
                        img_base64_1: r.eq(0).attr("src"),
                        img_base64_2: r.eq(1).attr("src"),
                        img_base64_3: r.eq(2).attr("src"),
                        img_base64_4: r.eq(3).attr("src"),
                        ds: e,
                        token: i
                    }, t && (data.ala = 1);
                    var c = function() {
                        $(this.dom).find(".fb-vertify").remove(), $(this.dom).find(".fb-mask").remove(), $(this.dom).find(".fb-success").css("display", "block"), n()
                    };
                    $.ajax(bds.se.ShortCut.uploadImg ? {
                        url: bds.se.ShortCut.domain,
                        type: "post",
                        data: data,
                        xhrFields: {
                            withCredentials: !0
                        },
                        complete: c
                    } : {
                        url: bds.se.ShortCut.domain,
                        dataType: "jsonp",
                        data: data,
                        jsonp: "cb1",
                        complete: c
                    })
                })
            }, this.init()
        }
        bds && bds.se && (bds.se.ShortCut = {
            base_url_path: "http://f3.baidu.com",
            up_file: !1,
            is_feedbacking: !1,
            product_id: 0,
            entrance_id: 0,
            send_img: !1,
            img_data: "",
            onlyUpFile: !1,
            pro_data: "",
            scrollTop: 0,
            ldiaInf: {},
            rdiaInf: {},
            canvas_block_height: 0,
            key: 0,
            domain: bds.util.domain.get("api.open.baidu.com") + "/pae/common/api/feedback",
            img_base64: "",
            img_base64_list: "",
            isFromLoginDialog: !1,
            initRightBar: function(e) {
                this.isFromLoginDialog = e || !1, this.html2canvas(), this._getCss(), this._identifyCanvas() && this._identifyCors() ? (bds.se.ShortCut.uploadImg = !0, this.get_Snapshot()) : bds.se.ShortCut.uploadImg = !1
            },
            reloadPage: function() {
                this.isFromLoginDialog && (this.isFromLoginDialog = !1, window.document.location.reload(!0))
            },
            initSugBar: function(e) {
                $(window).scrollTop(0), $(".fb-mask").length > 0 && n(), bds.se.ShortCut.rdialog = new a("", "", e, "sug"), $("#container").append("<div class='fb-mask'></div>"), $(".fb-mask").width($("body").width()), $(".fb-mask").height($("#wrapper_wrapper").height() > $(window).height ? $("#wrapper_wrapper").height() : $(window).height()), $(".fb-mask").on("click", function() {
                    n(), bds.se.ShortCut.ldialog && bds.se.ShortCut.ldialog.destory()
                })
            },
            _getCss: function() {
                bds.util.addStyle("#content_left > div,#rs,#rs_new,#con-ar .result-op{position: relative;}")
            },
            _identifyCanvas: function() {
                try {
                    var e = document.createElement("canvas").getContext("2d");
                    return e = null, !0
                } catch (t) {
                    return !1
                }
            },
            _identifyCors: function() {
                var e = new XMLHttpRequest;
                return "withCredentials" in e
            },
            init_ala: function(e) {
                this.html2canvas(), bds.se.ShortCut.uploadImg = this._identifyCanvas() && this._identifyCors() ? !0 : !1, $("#container").append("<div class='fb-mask' data-html2canvas-ignore='true'></div>"), e.append("<div class='fb-list-container' data-html2canvas-ignore='true'></div>"), e.find(".fb-list-container").css("width", e.width() + 20), e.find(".fb-list-container").css("height", e.height() + 10), t(e.find(".fb-list-container")), bds.se.ShortCut.ldialog = new c(e, 1), bds.se.ShortCut.curListDom = e.find(".fb-list-container"), $(".fb-mask").on("click", function() {
                    n(), bds.se.ShortCut.ldialog && bds.se.ShortCut.ldialog.destory()
                })
            },
            init_shade: function() {
                $("#container").append("<div class='fb-mask' data-html2canvas-ignore='true'></div>"), $(".fb-mask").width($("body").width()), $(".fb-mask").height($("#wrapper_wrapper").height() > $(window).height ? $("#wrapper_wrapper").height() : $(window).height()), r(), $(".fb-list-container").hover(function(e) {
                    o($(e.currentTarget)), $(e.currentTarget).children().length || t($(e.currentTarget))
                }, function(t) {
                    e($(t.currentTarget)) != bds.se.ShortCut.key && i($(t.currentTarget))
                }), $(".fb-list-container").on("click", function(n) {
                    $(".c-container").first().children(".fb-hint-tip").remove(), $(".c-container").first().children(".fb-list-container-first").remove(), bds.se.ShortCut.ldialog && bds.se.ShortCut.ldialog.destory(), i($(".fb-list-container")), e($(n.currentTarget)) == bds.se.ShortCut.key ? (bds.se.ShortCut.key = 0, bds.se.ShortCut.rdialog && bds.se.ShortCut.rdialog.grayed(0)) : (bds.se.ShortCut.key = e($(n.currentTarget)), bds.se.ShortCut.curListDom = $(n.currentTarget), bds.se.ShortCut.ldialog = new c(o($(n.currentTarget))), bds.se.ShortCut.rdialog && bds.se.ShortCut.rdialog.grayed(1), t($(n.currentTarget))), n.stopPropagation(), n.preventDefault()
                }), $(".fb-mask").on("click", function() {
                    bds.se.ShortCut.ldialog && bds.se.ShortCut.ldialog.destory(), bds.se.ShortCut.key = 0, bds.se.ShortCut.rdialog && bds.se.ShortCut.rdialog.grayed(0), i($(".fb-list-container"))
                })
            },
            get_Snapshot: function() {
                $(window).scrollTop(0);
                var e = this;
                bds.se.ShortCut.rdialog = new a, e.init_shade(), $(".fb-canvas-block").addClass("c-loading"), html2canvas(document.body, {
                    onrendered: function(t) {
                        $(".fb-canvas-block").removeClass("c-loading");
                        var i = document.createElement("canvas");
                        i.width = t.width, i.height = $("body").height();
                        var n = i.getContext("2d");
                        n.drawImage(t, 0, 0), bds.se.ShortCut.img_base64 = i.toDataURL("image/png"), $(".fb-canvas-block img").attr("src", i.toDataURL("image/png")), setTimeout(function() {
                            e.canvas_block_height = $(".fb-canvas-block img").height()
                        }, 50), $(document).on("scroll.feedback", function() {
                            var t = $(window).scrollTop(),
                                i = $(document).height(),
                                n = $(window).height();
                            scrollPercent = t / (i - n), $(".fb-canvas-block img").css("top", -(e.canvas_block_height - 172) * scrollPercent)
                        })
                    }
                })
            },
            get_Snapshot_list: function(e, t, i, n) {
                html2canvas(e, {
                    onrendered: function(e) {
                        var o = document.createElement("canvas");
                        o.width = t, o.height = i;
                        var r = o.getContext("2d");
                        r.drawImage(e, 0, 0), bds.se.ShortCut.img_base64_list = o.toDataURL("image/png"), n()
                    }
                })
            },
            html2canvas: function() {
                ! function(e, t, i) {
                    "use strict";

                    function n(t) {
                        d.logging && e.console && e.console.log && e.console.log(t)
                    }

                    function o(e, t, i, n, o, r) {
                        var s, a, c, l, u = d.Util.getCSS(t, e, o);
                        if (1 === u.length && (l = u[0], u = [], u[0] = l, u[1] = l), -1 !== u[0].toString().indexOf("%")) c = parseFloat(u[0]) / 100, a = i.width * c, "backgroundSize" !== e && (a -= (r || n).width * c);
                        else if ("backgroundSize" === e)
                            if ("auto" === u[0]) a = n.width;
                            else if (u[0].match(/contain|cover/)) {
                            var p = d.Util.resizeBounds(n.width, n.height, i.width, i.height, u[0]);
                            a = p.width, s = p.height
                        } else a = parseInt(u[0], 10);
                        else a = parseInt(u[0], 10);
                        return "auto" === u[1] ? s = a / n.width * n.height : -1 !== u[1].toString().indexOf("%") ? (c = parseFloat(u[1]) / 100, s = i.height * c, "backgroundSize" !== e && (s -= (r || n).height * c)) : s = parseInt(u[1], 10), [a, s]
                    }

                    function r(e, t) {
                        var i = [];
                        return {
                            storage: i,
                            width: e,
                            height: t,
                            clip: function() {
                                i.push({
                                    type: "function",
                                    name: "clip",
                                    arguments: arguments
                                })
                            },
                            translate: function() {
                                i.push({
                                    type: "function",
                                    name: "translate",
                                    arguments: arguments
                                })
                            },
                            fill: function() {
                                i.push({
                                    type: "function",
                                    name: "fill",
                                    arguments: arguments
                                })
                            },
                            save: function() {
                                i.push({
                                    type: "function",
                                    name: "save",
                                    arguments: arguments
                                })
                            },
                            restore: function() {
                                i.push({
                                    type: "function",
                                    name: "restore",
                                    arguments: arguments
                                })
                            },
                            fillRect: function() {
                                i.push({
                                    type: "function",
                                    name: "fillRect",
                                    arguments: arguments
                                })
                            },
                            createPattern: function() {
                                i.push({
                                    type: "function",
                                    name: "createPattern",
                                    arguments: arguments
                                })
                            },
                            drawShape: function() {
                                var e = [];
                                return i.push({
                                    type: "function",
                                    name: "drawShape",
                                    arguments: e
                                }), {
                                    moveTo: function() {
                                        e.push({
                                            name: "moveTo",
                                            arguments: arguments
                                        })
                                    },
                                    lineTo: function() {
                                        e.push({
                                            name: "lineTo",
                                            arguments: arguments
                                        })
                                    },
                                    arcTo: function() {
                                        e.push({
                                            name: "arcTo",
                                            arguments: arguments
                                        })
                                    },
                                    bezierCurveTo: function() {
                                        e.push({
                                            name: "bezierCurveTo",
                                            arguments: arguments
                                        })
                                    },
                                    quadraticCurveTo: function() {
                                        e.push({
                                            name: "quadraticCurveTo",
                                            arguments: arguments
                                        })
                                    }
                                }
                            },
                            drawImage: function() {
                                i.push({
                                    type: "function",
                                    name: "drawImage",
                                    arguments: arguments
                                })
                            },
                            fillText: function() {
                                i.push({
                                    type: "function",
                                    name: "fillText",
                                    arguments: arguments
                                })
                            },
                            setVariable: function(e, t) {
                                i.push({
                                    type: "variable",
                                    name: e,
                                    arguments: t
                                })
                            }
                        }
                    }

                    function s(e) {
                        return {
                            zindex: e,
                            children: []
                        }
                    }
                    var a, c, d = {};
                    d.Util = {}, d.Util.trimText = function(e) {
                            return function(t) {
                                return e ? e.apply(t) : ((t || "") + "").replace(/^\s+|\s+$/g, "")
                            }
                        }(String.prototype.trim), d.Util.parseBackgroundImage = function(e) {
                            var t, i, n, o, r, s, a, c, d = " \r\n	",
                                l = [],
                                u = 0,
                                p = 0,
                                m = function() {
                                    t && ('"' === i.substr(0, 1) && (i = i.substr(1, i.length - 2)), i && c.push(i), "-" === t.substr(0, 1) && (o = t.indexOf("-", 1) + 1) > 0 && (n = t.substr(0, o), t = t.substr(o)), l.push({
                                        prefix: n,
                                        method: t.toLowerCase(),
                                        value: r,
                                        args: c
                                    })), c = [], t = n = i = r = ""
                                };
                            m();
                            for (var f = 0, h = e.length; h > f; f++)
                                if (s = e[f], !(0 === u && d.indexOf(s) > -1)) {
                                    switch (s) {
                                        case '"':
                                            a ? a === s && (a = null) : a = s;
                                            break;
                                        case "(":
                                            if (a) break;
                                            if (0 === u) {
                                                u = 1, r += s;
                                                continue
                                            }
                                            p++;
                                            break;
                                        case ")":
                                            if (a) break;
                                            if (1 === u) {
                                                if (0 === p) {
                                                    u = 0, r += s, m();
                                                    continue
                                                }
                                                p--
                                            }
                                            break;
                                        case ",":
                                            if (a) break;
                                            if (0 === u) {
                                                m();
                                                continue
                                            }
                                            if (1 === u && 0 === p && !t.match(/^url$/i)) {
                                                c.push(i), i = "", r += s;
                                                continue
                                            }
                                    }
                                    r += s, 0 === u ? t += s : i += s
                                } return m(), l
                        }, d.Util.Bounds = function(e) {
                            var t, i = {};
                            return e.getBoundingClientRect ? (t = e.getBoundingClientRect(), i.top = t.top, i.bottom = t.bottom || t.top + t.height, i.left = t.left, i.width = t.width || t.right - t.left, i.height = t.height || t.bottom - t.top, i) : void 0
                        }, d.Util.getCSS = function(e, n, o) {
                            function r(t, i) {
                                var n, o = e.runtimeStyle && e.runtimeStyle[t],
                                    r = e.style;
                                return !/^-?[0-9]+\.?[0-9]*(?:px)?$/i.test(i) && /^-?\d/.test(i) && (n = r.left, o && (e.runtimeStyle.left = e.currentStyle.left), r.left = "fontSize" === t ? "1em" : i || 0, i = r.pixelLeft + "px", r.left = n, o && (e.runtimeStyle.left = o)), /^(thin|medium|thick)$/i.test(i) ? i : Math.round(parseFloat(i)) + "px"
                            }
                            var s, l = n.match(/^background(Size|Position)$/);
                            if (a !== e && (c = t.defaultView.getComputedStyle(e, null)), s = c[n], l) {
                                if (s = (s || "").split(","), s = s[o || 0] || s[0] || "auto", s = d.Util.trimText(s).split(" "), "backgroundSize" !== n || s[0] && !s[0].match(/cover|contain|auto/)) {
                                    if (s[0] = -1 === s[0].indexOf("%") ? r(n + "X", s[0]) : s[0], s[1] === i) {
                                        if ("backgroundSize" === n) return s[1] = "auto", s;
                                        s[1] = s[0]
                                    }
                                    s[1] = -1 === s[1].indexOf("%") ? r(n + "Y", s[1]) : s[1]
                                }
                            } else if (/border(Top|Bottom)(Left|Right)Radius/.test(n)) {
                                var u = s.split(" ");
                                u.length <= 1 && (u[1] = u[0]), u[0] = parseInt(u[0], 10), u[1] = parseInt(u[1], 10), s = u
                            }
                            return s
                        }, d.Util.resizeBounds = function(e, t, i, n, o) {
                            var r, s, a = i / n,
                                c = e / t;
                            return o && "auto" !== o ? c > a ^ "contain" === o ? (s = n, r = n * c) : (r = i, s = i / c) : (r = i, s = n), {
                                width: r,
                                height: s
                            }
                        }, d.Util.BackgroundPosition = function(e, t, i, n, r) {
                            var s = o("backgroundPosition", e, t, i, n, r);
                            return {
                                left: s[0],
                                top: s[1]
                            }
                        }, d.Util.BackgroundSize = function(e, t, i, n) {
                            var r = o("backgroundSize", e, t, i, n);
                            return {
                                width: r[0],
                                height: r[1]
                            }
                        }, d.Util.Extend = function(e, t) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                            return t
                        }, d.Util.Children = function(e) {
                            var t;
                            try {
                                t = e.nodeName && "IFRAME" === e.nodeName.toUpperCase() ? e.contentDocument || e.contentWindow.document : function(e) {
                                    var t = [];
                                    return null !== e && ! function(e, t) {
                                        var n = e.length,
                                            o = 0;
                                        if ("number" == typeof t.length)
                                            for (var r = t.length; r > o; o++) e[n++] = t[o];
                                        else
                                            for (; t[o] !== i;) e[n++] = t[o++];
                                        return e.length = n, e
                                    }(t, e), t
                                }(e.childNodes)
                            } catch (o) {
                                n("html2canvas.Util.Children failed with exception: " + o.message), t = []
                            }
                            return t
                        }, d.Util.Font = function() {
                            var e = {};
                            return function(t, n, o) {
                                if (e[t + "-" + n] !== i) return e[t + "-" + n];
                                var r, s, a, c = o.createElement("div"),
                                    d = o.createElement("img"),
                                    l = o.createElement("span"),
                                    u = "Hidden Text";
                                return c.style.visibility = "hidden", c.style.fontFamily = t, c.style.fontSize = n, c.style.margin = 0, c.style.padding = 0, o.body.appendChild(c), d.src = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=", d.width = 1, d.height = 1, d.style.margin = 0, d.style.padding = 0, d.style.verticalAlign = "baseline", l.style.fontFamily = t, l.style.fontSize = n, l.style.margin = 0, l.style.padding = 0, l.appendChild(o.createTextNode(u)), c.appendChild(l), c.appendChild(d), r = d.offsetTop - l.offsetTop + 1, c.removeChild(l), c.appendChild(o.createTextNode(u)), c.style.lineHeight = "normal", d.style.verticalAlign = "super", s = d.offsetTop - c.offsetTop + 1, a = {
                                    baseline: r,
                                    lineWidth: 1,
                                    middle: s
                                }, e[t + "-" + n] = a, o.body.removeChild(c), a
                            }
                        }(),
                        function() {
                            d.Generate = {};
                            var e = [/^(-webkit-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-o-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-webkit-gradient)\((linear|radial),\s((?:\d{1,3}%?)\s(?:\d{1,3}%?),\s(?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)\-]+)\)$/, /^(-moz-linear-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)]+)\)$/, /^(-webkit-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-moz-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s?([a-z\-]*)([\w\d\.\s,%\(\)]+)\)$/, /^(-o-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/];
                            d.Generate.parseGradient = function(t, i) {
                                var n, o, r, s, a, c, d, l, u, p, m, f, h = e.length;
                                for (o = 0; h > o && !(r = t.match(e[o])); o += 1);
                                if (r) switch (r[1]) {
                                    case "-webkit-linear-gradient":
                                    case "-o-linear-gradient":
                                        if (n = {
                                                type: "linear",
                                                x0: null,
                                                y0: null,
                                                x1: null,
                                                y1: null,
                                                colorStops: []
                                            }, a = r[2].match(/\w+/g))
                                            for (c = a.length, o = 0; c > o; o += 1) switch (a[o]) {
                                                case "top":
                                                    n.y0 = 0, n.y1 = i.height;
                                                    break;
                                                case "right":
                                                    n.x0 = i.width, n.x1 = 0;
                                                    break;
                                                case "bottom":
                                                    n.y0 = i.height, n.y1 = 0;
                                                    break;
                                                case "left":
                                                    n.x0 = 0, n.x1 = i.width
                                            }
                                        if (null === n.x0 && null === n.x1 && (n.x0 = n.x1 = i.width / 2), null === n.y0 && null === n.y1 && (n.y0 = n.y1 = i.height / 2), a = r[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g))
                                            for (c = a.length, d = 1 / Math.max(c - 1, 1), o = 0; c > o; o += 1) l = a[o].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/), l[2] ? (s = parseFloat(l[2]), s /= "%" === l[3] ? 100 : i.width) : s = o * d, n.colorStops.push({
                                                color: l[1],
                                                stop: s
                                            });
                                        break;
                                    case "-webkit-gradient":
                                        if (n = {
                                                type: "radial" === r[2] ? "circle" : r[2],
                                                x0: 0,
                                                y0: 0,
                                                x1: 0,
                                                y1: 0,
                                                colorStops: []
                                            }, a = r[3].match(/(\d{1,3})%?\s(\d{1,3})%?,\s(\d{1,3})%?\s(\d{1,3})%?/), a && (n.x0 = a[1] * i.width / 100, n.y0 = a[2] * i.height / 100, n.x1 = a[3] * i.width / 100, n.y1 = a[4] * i.height / 100), a = r[4].match(/((?:from|to|color-stop)\((?:[0-9\.]+,\s)?(?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)\))+/g))
                                            for (c = a.length, o = 0; c > o; o += 1) l = a[o].match(/(from|to|color-stop)\(([0-9\.]+)?(?:,\s)?((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\)/), s = parseFloat(l[2]), "from" === l[1] && (s = 0), "to" === l[1] && (s = 1), n.colorStops.push({
                                                color: l[3],
                                                stop: s
                                            });
                                        break;
                                    case "-moz-linear-gradient":
                                        if (n = {
                                                type: "linear",
                                                x0: 0,
                                                y0: 0,
                                                x1: 0,
                                                y1: 0,
                                                colorStops: []
                                            }, a = r[2].match(/(\d{1,3})%?\s(\d{1,3})%?/), a && (n.x0 = a[1] * i.width / 100, n.y0 = a[2] * i.height / 100, n.x1 = i.width - n.x0, n.y1 = i.height - n.y0), a = r[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}%)?)+/g))
                                            for (c = a.length, d = 1 / Math.max(c - 1, 1), o = 0; c > o; o += 1) l = a[o].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%)?/), l[2] ? (s = parseFloat(l[2]), l[3] && (s /= 100)) : s = o * d, n.colorStops.push({
                                                color: l[1],
                                                stop: s
                                            });
                                        break;
                                    case "-webkit-radial-gradient":
                                    case "-moz-radial-gradient":
                                    case "-o-radial-gradient":
                                        if (n = {
                                                type: "circle",
                                                x0: 0,
                                                y0: 0,
                                                x1: i.width,
                                                y1: i.height,
                                                cx: 0,
                                                cy: 0,
                                                rx: 0,
                                                ry: 0,
                                                colorStops: []
                                            }, a = r[2].match(/(\d{1,3})%?\s(\d{1,3})%?/), a && (n.cx = a[1] * i.width / 100, n.cy = a[2] * i.height / 100), a = r[3].match(/\w+/), l = r[4].match(/[a-z\-]*/), a && l) switch (l[0]) {
                                            case "farthest-corner":
                                            case "cover":
                                            case "":
                                                u = Math.sqrt(Math.pow(n.cx, 2) + Math.pow(n.cy, 2)), p = Math.sqrt(Math.pow(n.cx, 2) + Math.pow(n.y1 - n.cy, 2)), m = Math.sqrt(Math.pow(n.x1 - n.cx, 2) + Math.pow(n.y1 - n.cy, 2)), f = Math.sqrt(Math.pow(n.x1 - n.cx, 2) + Math.pow(n.cy, 2)), n.rx = n.ry = Math.max(u, p, m, f);
                                                break;
                                            case "closest-corner":
                                                u = Math.sqrt(Math.pow(n.cx, 2) + Math.pow(n.cy, 2)), p = Math.sqrt(Math.pow(n.cx, 2) + Math.pow(n.y1 - n.cy, 2)), m = Math.sqrt(Math.pow(n.x1 - n.cx, 2) + Math.pow(n.y1 - n.cy, 2)), f = Math.sqrt(Math.pow(n.x1 - n.cx, 2) + Math.pow(n.cy, 2)), n.rx = n.ry = Math.min(u, p, m, f);
                                                break;
                                            case "farthest-side":
                                                "circle" === a[0] ? n.rx = n.ry = Math.max(n.cx, n.cy, n.x1 - n.cx, n.y1 - n.cy) : (n.type = a[0], n.rx = Math.max(n.cx, n.x1 - n.cx), n.ry = Math.max(n.cy, n.y1 - n.cy));
                                                break;
                                            case "closest-side":
                                            case "contain":
                                                "circle" === a[0] ? n.rx = n.ry = Math.min(n.cx, n.cy, n.x1 - n.cx, n.y1 - n.cy) : (n.type = a[0], n.rx = Math.min(n.cx, n.x1 - n.cx), n.ry = Math.min(n.cy, n.y1 - n.cy))
                                        }
                                        if (a = r[5].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g))
                                            for (c = a.length, d = 1 / Math.max(c - 1, 1), o = 0; c > o; o += 1) l = a[o].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/), l[2] ? (s = parseFloat(l[2]), s /= "%" === l[3] ? 100 : i.width) : s = o * d, n.colorStops.push({
                                                color: l[1],
                                                stop: s
                                            })
                                }
                                return n
                            }, d.Generate.Gradient = function(e, i) {
                                if (0 !== i.width && 0 !== i.height) {
                                    var o, r, s, a, c = t.createElement("canvas"),
                                        l = c.getContext("2d");
                                    if (c.width = i.width, c.height = i.height, o = d.Generate.parseGradient(e, i))
                                        if ("linear" === o.type) {
                                            for (r = l.createLinearGradient(o.x0, o.y0, o.x1, o.y1), s = 0, a = o.colorStops.length; a > s; s += 1) try {
                                                r.addColorStop(o.colorStops[s].stop, o.colorStops[s].color)
                                            } catch (u) {
                                                n(["failed to add color stop: ", u, "; tried to add: ", o.colorStops[s], "; stop: ", s, "; in: ", e])
                                            }
                                            l.fillStyle = r, l.fillRect(0, 0, i.width, i.height)
                                        } else if ("circle" === o.type) {
                                        for (r = l.createRadialGradient(o.cx, o.cy, 0, o.cx, o.cy, o.rx), s = 0, a = o.colorStops.length; a > s; s += 1) try {
                                            r.addColorStop(o.colorStops[s].stop, o.colorStops[s].color)
                                        } catch (u) {
                                            n(["failed to add color stop: ", u, "; tried to add: ", o.colorStops[s], "; stop: ", s, "; in: ", e])
                                        }
                                        l.fillStyle = r, l.fillRect(0, 0, i.width, i.height)
                                    } else if ("ellipse" === o.type) {
                                        var p = t.createElement("canvas"),
                                            m = p.getContext("2d"),
                                            f = Math.max(o.rx, o.ry),
                                            h = 2 * f;
                                        for (p.width = p.height = h, r = m.createRadialGradient(o.rx, o.ry, 0, o.rx, o.ry, f), s = 0, a = o.colorStops.length; a > s; s += 1) try {
                                            r.addColorStop(o.colorStops[s].stop, o.colorStops[s].color)
                                        } catch (u) {
                                            n(["failed to add color stop: ", u, "; tried to add: ", o.colorStops[s], "; stop: ", s, "; in: ", e])
                                        }
                                        m.fillStyle = r, m.fillRect(0, 0, h, h), l.fillStyle = o.colorStops[s - 1].color, l.fillRect(0, 0, c.width, c.height), l.drawImage(p, o.cx - o.rx, o.cy - o.ry, 2 * o.rx, 2 * o.ry)
                                    }
                                    return c
                                }
                            }, d.Generate.ListAlpha = function(e) {
                                var t, i = "";
                                do t = e % 26, i = String.fromCharCode(t + 64) + i, e /= 26;
                                while (26 * e > 26);
                                return i
                            }, d.Generate.ListRoman = function(e) {
                                var t, i = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
                                    n = [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
                                    o = "",
                                    r = i.length;
                                if (0 >= e || e >= 4e3) return e;
                                for (t = 0; r > t; t += 1)
                                    for (; e >= n[t];) e -= n[t], o += i[t];
                                return o
                            }
                        }(), d.Parse = function(o, a) {
                            function c() {
                                return Math.max(Math.max(at.body.scrollWidth, at.documentElement.scrollWidth), Math.max(at.body.offsetWidth, at.documentElement.offsetWidth), Math.max(at.body.clientWidth, at.documentElement.clientWidth))
                            }

                            function l() {
                                return Math.max(Math.max(at.body.scrollHeight, at.documentElement.scrollHeight), Math.max(at.body.offsetHeight, at.documentElement.offsetHeight), Math.max(at.body.clientHeight, at.documentElement.clientHeight))
                            }

                            function u(e, t) {
                                var i = parseInt(ut(e, t), 10);
                                return isNaN(i) ? 0 : i
                            }

                            function p(e, t, i, n, o, r) {
                                "transparent" !== r && (e.setVariable("fillStyle", r), e.fillRect(t, i, n, o), st += 1)
                            }

                            function m(e, t) {
                                switch (t) {
                                    case "lowercase":
                                        return e.toLowerCase();
                                    case "capitalize":
                                        return e.replace(/(^|\s|:|-|\(|\))([a-z])/g, function(e, t, i) {
                                            return e.length > 0 ? t + i.toUpperCase() : void 0
                                        });
                                    case "uppercase":
                                        return e.toUpperCase();
                                    default:
                                        return e
                                }
                            }

                            function f(e) {
                                return /^(normal|none|0px)$/.test(e)
                            }

                            function h(e, t, i, n) {
                                null !== e && d.Util.trimText(e).length > 0 && (n.fillText(e, t, i), st += 1)
                            }

                            function g(e, t, i, n) {
                                var o = !1,
                                    r = ut(t, "fontWeight"),
                                    s = ut(t, "fontFamily"),
                                    a = ut(t, "fontSize");
                                switch (parseInt(r, 10)) {
                                    case 401:
                                        r = "bold";
                                        break;
                                    case 400:
                                        r = "normal"
                                }
                                return e.setVariable("fillStyle", n), e.setVariable("font", [ut(t, "fontStyle"), ut(t, "fontVariant"), r, a, s].join(" ")), e.setVariable("textAlign", o ? "right" : "left"), "none" !== i ? d.Util.Font(s, a, at) : void 0
                            }

                            function b(e, t, i, n, o) {
                                switch (t) {
                                    case "underline":
                                        p(e, i.left, Math.round(i.top + n.baseline + n.lineWidth), i.width, 1, o);
                                        break;
                                    case "overline":
                                        p(e, i.left, Math.round(i.top), i.width, 1, o);
                                        break;
                                    case "line-through":
                                        p(e, i.left, Math.ceil(i.top + n.middle + n.lineWidth), i.width, 1, o)
                                }
                            }

                            function v(e, t, i, n) {
                                var o;
                                if (ct.rangeBounds)("none" !== i || 0 !== d.Util.trimText(t).length) && (o = w(t, e.node, e.textOffset)), e.textOffset += t.length;
                                else if (e.node && "string" == typeof e.node.nodeValue) {
                                    var r = n ? e.node.splitText(t.length) : null;
                                    o = _(e.node), e.node = r
                                }
                                return o
                            }

                            function w(e, t, i) {
                                var n = at.createRange();
                                return n.setStart(t, i), n.setEnd(t, i + e.length), n.getBoundingClientRect()
                            }

                            function _(e) {
                                var t = e.parentNode,
                                    i = at.createElement("wrapper"),
                                    n = e.cloneNode(!0);
                                i.appendChild(e.cloneNode(!0)), t.replaceChild(i, e);
                                var o = d.Util.Bounds(i);
                                return t.replaceChild(n, i), o
                            }

                            function y(e, t, i) {
                                var n, o, r = i.ctx,
                                    s = ut(e, "color"),
                                    c = ut(e, "textDecoration"),
                                    l = ut(e, "textAlign"),
                                    u = {
                                        node: t,
                                        textOffset: 0
                                    };
                                d.Util.trimText(t.nodeValue).length > 0 && (t.nodeValue = m(t.nodeValue, ut(e, "textTransform")), l = l.replace(["-webkit-auto"], ["auto"]), o = t.nodeValue.split(!a.letterRendering && /^(left|right|justify|auto)$/.test(l) && f(ut(e, "letterSpacing")) ? /(\b| )/ : ""), n = g(r, e, c, s), a.chinese && o.forEach(function(e, t) {
                                    /.*[\u4E00-\u9FA5].*$/.test(e) && (e = e.split(""), e.unshift(t, 1), o.splice.apply(o, e))
                                }), o.forEach(function(e, t) {
                                    var i = v(u, e, c, t < o.length - 1);
                                    i && (h(e, i.left, i.bottom, r), b(r, c, i, n, s))
                                }))
                            }

                            function x(e, t) {
                                var i, n, o = at.createElement("boundelement");
                                return o.style.display = "inline", i = e.style.listStyleType, e.style.listStyleType = "none", o.appendChild(at.createTextNode(t)), e.insertBefore(o, e.firstChild), n = d.Util.Bounds(o), e.removeChild(o), e.style.listStyleType = i, n
                            }

                            function k(e) {
                                var t = -1,
                                    i = 1,
                                    n = e.parentNode.childNodes;
                                if (e.parentNode) {
                                    for (; n[++t] !== e;) 1 === n[t].nodeType && i++;
                                    return i
                                }
                                return -1
                            }

                            function T(e, t) {
                                var i, n = k(e);
                                switch (t) {
                                    case "decimal":
                                        i = n;
                                        break;
                                    case "decimal-leading-zero":
                                        i = 1 === n.toString().length ? n = "0" + n.toString() : n.toString();
                                        break;
                                    case "upper-roman":
                                        i = d.Generate.ListRoman(n);
                                        break;
                                    case "lower-roman":
                                        i = d.Generate.ListRoman(n).toLowerCase();
                                        break;
                                    case "lower-alpha":
                                        i = d.Generate.ListAlpha(n).toLowerCase();
                                        break;
                                    case "upper-alpha":
                                        i = d.Generate.ListAlpha(n)
                                }
                                return i += ". "
                            }

                            function S(e, t, i) {
                                var n, o, r, s = t.ctx,
                                    a = ut(e, "listStyleType");
                                if (/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(a)) {
                                    if (o = T(e, a), r = x(e, o), g(s, e, "none", ut(e, "color")), "inside" !== ut(e, "listStylePosition")) return;
                                    s.setVariable("textAlign", "left"), n = i.left, h(o, n, r.bottom, s)
                                }
                            }

                            function $(e) {
                                var t = o[e];
                                return t && t.succeeded === !0 ? t.img : !1
                            }

                            function C(e, t) {
                                var i = Math.max(e.left, t.left),
                                    n = Math.max(e.top, t.top),
                                    o = Math.min(e.left + e.width, t.left + t.width),
                                    r = Math.min(e.top + e.height, t.top + t.height);
                                return {
                                    left: i,
                                    top: n,
                                    width: o - i,
                                    height: r - n
                                }
                            }

                            function I(e, t) {
                                var i;
                                return t ? "auto" !== e ? (i = s(e), t.children.push(i), i) : t : i = s(0)
                            }

                            function D(e, t, i, n, o) {
                                var r = u(t, "paddingLeft"),
                                    s = u(t, "paddingTop"),
                                    a = u(t, "paddingRight"),
                                    c = u(t, "paddingBottom");
                                z(e, i, 0, 0, i.width, i.height, n.left + r + o[3].width, n.top + s + o[0].width, n.width - (o[1].width + o[3].width + r + a), n.height - (o[0].width + o[2].width + s + c))
                            }

                            function L(e) {
                                return ["Top", "Right", "Bottom", "Left"].map(function(t) {
                                    return {
                                        width: u(e, "border" + t + "Width"),
                                        color: ut(e, "border" + t + "Color")
                                    }
                                })
                            }

                            function j(e) {
                                return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(t) {
                                    return ut(e, "border" + t + "Radius")
                                })
                            }

                            function E(e, t, i, n) {
                                var o = function(e, t, i) {
                                    return {
                                        x: e.x + (t.x - e.x) * i,
                                        y: e.y + (t.y - e.y) * i
                                    }
                                };
                                return {
                                    start: e,
                                    startControl: t,
                                    endControl: i,
                                    end: n,
                                    subdivide: function(r) {
                                        var s = o(e, t, r),
                                            a = o(t, i, r),
                                            c = o(i, n, r),
                                            d = o(s, a, r),
                                            l = o(a, c, r),
                                            u = o(d, l, r);
                                        return [E(e, s, d, u), E(u, l, c, n)]
                                    },
                                    curveTo: function(e) {
                                        e.push(["bezierCurve", t.x, t.y, i.x, i.y, n.x, n.y])
                                    },
                                    curveToReversed: function(n) {
                                        n.push(["bezierCurve", i.x, i.y, t.x, t.y, e.x, e.y])
                                    }
                                }
                            }

                            function A(e, t, i, n, o, r, s) {
                                t[0] > 0 || t[1] > 0 ? (e.push(["line", n[0].start.x, n[0].start.y]), n[0].curveTo(e), n[1].curveTo(e)) : e.push(["line", r, s]), (i[0] > 0 || i[1] > 0) && e.push(["line", o[0].start.x, o[0].start.y])
                            }

                            function O(e, t, i, n, o, r, s) {
                                var a = [];
                                return t[0] > 0 || t[1] > 0 ? (a.push(["line", n[1].start.x, n[1].start.y]), n[1].curveTo(a)) : a.push(["line", e.c1[0], e.c1[1]]), i[0] > 0 || i[1] > 0 ? (a.push(["line", r[0].start.x, r[0].start.y]), r[0].curveTo(a), a.push(["line", s[0].end.x, s[0].end.y]), s[0].curveToReversed(a)) : (a.push(["line", e.c2[0], e.c2[1]]), a.push(["line", e.c3[0], e.c3[1]])), t[0] > 0 || t[1] > 0 ? (a.push(["line", o[1].end.x, o[1].end.y]), o[1].curveToReversed(a)) : a.push(["line", e.c4[0], e.c4[1]]), a
                            }

                            function R(e, t, i) {
                                var n = e.left,
                                    o = e.top,
                                    r = e.width,
                                    s = e.height,
                                    a = t[0][0],
                                    c = t[0][1],
                                    d = t[1][0],
                                    l = t[1][1],
                                    u = t[2][0],
                                    p = t[2][1],
                                    m = t[3][0],
                                    f = t[3][1],
                                    h = r - d,
                                    g = s - u,
                                    b = r - p,
                                    v = s - f;
                                return {
                                    topLeftOuter: ft(n, o, a, c).topLeft.subdivide(.5),
                                    topLeftInner: ft(n + i[3].width, o + i[0].width, Math.max(0, a - i[3].width), Math.max(0, c - i[0].width)).topLeft.subdivide(.5),
                                    topRightOuter: ft(n + h, o, d, l).topRight.subdivide(.5),
                                    topRightInner: ft(n + Math.min(h, r + i[3].width), o + i[0].width, h > r + i[3].width ? 0 : d - i[3].width, l - i[0].width).topRight.subdivide(.5),
                                    bottomRightOuter: ft(n + b, o + g, p, u).bottomRight.subdivide(.5),
                                    bottomRightInner: ft(n + Math.min(b, r + i[3].width), o + Math.min(g, s + i[0].width), Math.max(0, p - i[1].width), Math.max(0, u - i[2].width)).bottomRight.subdivide(.5),
                                    bottomLeftOuter: ft(n, o + v, m, f).bottomLeft.subdivide(.5),
                                    bottomLeftInner: ft(n + i[3].width, o + v, Math.max(0, m - i[3].width), Math.max(0, f - i[2].width)).bottomLeft.subdivide(.5)
                                }
                            }

                            function P(e, t, i, n, o) {
                                var r = ut(e, "backgroundClip"),
                                    s = [];
                                switch (r) {
                                    case "content-box":
                                    case "padding-box":
                                        A(s, n[0], n[1], t.topLeftInner, t.topRightInner, o.left + i[3].width, o.top + i[0].width), A(s, n[1], n[2], t.topRightInner, t.bottomRightInner, o.left + o.width - i[1].width, o.top + i[0].width), A(s, n[2], n[3], t.bottomRightInner, t.bottomLeftInner, o.left + o.width - i[1].width, o.top + o.height - i[2].width), A(s, n[3], n[0], t.bottomLeftInner, t.topLeftInner, o.left + i[3].width, o.top + o.height - i[2].width);
                                        break;
                                    default:
                                        A(s, n[0], n[1], t.topLeftOuter, t.topRightOuter, o.left, o.top), A(s, n[1], n[2], t.topRightOuter, t.bottomRightOuter, o.left + o.width, o.top), A(s, n[2], n[3], t.bottomRightOuter, t.bottomLeftOuter, o.left + o.width, o.top + o.height), A(s, n[3], n[0], t.bottomLeftOuter, t.topLeftOuter, o.left, o.top + o.height)
                                }
                                return s
                            }

                            function M(e, t, i) {
                                var n, o, r, s, a, c, d = t.left,
                                    l = t.top,
                                    u = t.width,
                                    p = t.height,
                                    m = j(e),
                                    f = R(t, m, i),
                                    h = {
                                        clip: P(e, f, i, m, t),
                                        borders: []
                                    };
                                for (n = 0; 4 > n; n++)
                                    if (i[n].width > 0) {
                                        switch (o = d, r = l, s = u, a = p - i[2].width, n) {
                                            case 0:
                                                a = i[0].width, c = O({
                                                    c1: [o, r],
                                                    c2: [o + s, r],
                                                    c3: [o + s - i[1].width, r + a],
                                                    c4: [o + i[3].width, r + a]
                                                }, m[0], m[1], f.topLeftOuter, f.topLeftInner, f.topRightOuter, f.topRightInner);
                                                break;
                                            case 1:
                                                o = d + u - i[1].width, s = i[1].width, c = O({
                                                    c1: [o + s, r],
                                                    c2: [o + s, r + a + i[2].width],
                                                    c3: [o, r + a],
                                                    c4: [o, r + i[0].width]
                                                }, m[1], m[2], f.topRightOuter, f.topRightInner, f.bottomRightOuter, f.bottomRightInner);
                                                break;
                                            case 2:
                                                r = r + p - i[2].width, a = i[2].width, c = O({
                                                    c1: [o + s, r + a],
                                                    c2: [o, r + a],
                                                    c3: [o + i[3].width, r],
                                                    c4: [o + s - i[2].width, r]
                                                }, m[2], m[3], f.bottomRightOuter, f.bottomRightInner, f.bottomLeftOuter, f.bottomLeftInner);
                                                break;
                                            case 3:
                                                s = i[3].width, c = O({
                                                    c1: [o, r + a + i[2].width],
                                                    c2: [o, r],
                                                    c3: [o + s, r + i[0].width],
                                                    c4: [o + s, r + a]
                                                }, m[3], m[0], f.bottomLeftOuter, f.bottomLeftInner, f.topLeftOuter, f.topLeftInner)
                                        }
                                        h.borders.push({
                                            args: c,
                                            color: i[n].color
                                        })
                                    } return h
                            }

                            function q(e, t) {
                                var i = e.drawShape();
                                return t.forEach(function(e, t) {
                                    i[0 === t ? "moveTo" : e[0] + "To"].apply(null, e.slice(1))
                                }), i
                            }

                            function N(e, t, i) {
                                "transparent" !== i && (e.setVariable("fillStyle", i), q(e, t), e.fill(), st += 1)
                            }

                            function U(e, t, i) {
                                var o, r, s = at.createElement("valuewrap"),
                                    a = ["lineHeight", "textAlign", "fontFamily", "color", "fontSize", "paddingLeft", "paddingTop", "width", "height", "border", "borderLeftWidth", "borderTopWidth"];
                                a.forEach(function(t) {
                                    try {
                                        s.style[t] = ut(e, t)
                                    } catch (i) {
                                        n("html2canvas: Parse: Exception caught in renderFormValue: " + i.message)
                                    }
                                }), s.style.borderColor = "black", s.style.borderStyle = "solid", s.style.display = "block", s.style.position = "absolute", (/^(submit|reset|button|text|password)$/.test(e.type) || "SELECT" === e.nodeName) && (s.style.lineHeight = ut(e, "height")), s.style.top = t.top + "px", s.style.left = t.left + "px", o = "SELECT" === e.nodeName ? (e.options[e.selectedIndex] || 0).text : e.value, o || (o = e.placeholder), r = at.createTextNode(o), s.appendChild(r), lt.appendChild(s), y(e, r, i), lt.removeChild(s)
                            }

                            function z(e) {
                                e.drawImage.apply(e, Array.prototype.slice.call(arguments, 1)), st += 1
                            }

                            function H(i, o) {
                                var r = e.getComputedStyle(i, o);
                                if (r && r.content && "none" !== r.content && "-moz-alt-content" !== r.content) {
                                    var s = r.content + "",
                                        a = s.substr(0, 1);
                                    a === s.substr(s.length - 1) && a.match(/'|"/) && (s = s.substr(1, s.length - 2));
                                    var c = "url" === s.substr(0, 3),
                                        l = t.createElement(c ? "img" : "span");
                                    return l.className = pt + "-before " + pt + "-after", Object.keys(r).filter(B).forEach(function(e) {
                                        try {
                                            l.style[e] = r[e]
                                        } catch (t) {
                                            n(["Tried to assign readonly property ", e, "Error:", t])
                                        }
                                    }), c ? l.src = d.Util.parseBackgroundImage(s)[0].args[0] : l.innerHTML = s, l
                                }
                            }

                            function B(t) {
                                return isNaN(e.parseInt(t, 10))
                            }

                            function F(e, t) {
                                var i = H(e, ":before"),
                                    n = H(e, ":after");
                                (i || n) && (i && (e.className += " " + pt + "-before", e.parentNode.insertBefore(i, e), it(i, t, !0), e.parentNode.removeChild(i), e.className = e.className.replace(pt + "-before", "").trim()), n && (e.className += " " + pt + "-after", e.appendChild(n), it(n, t, !0), e.removeChild(n), e.className = e.className.replace(pt + "-after", "").trim()))
                            }

                            function W(e, t, i, n) {
                                var o = Math.round(n.left + i.left),
                                    r = Math.round(n.top + i.top);
                                e.createPattern(t), e.translate(o, r), e.fill(), e.translate(-o, -r)
                            }

                            function G(e, t, i, n, o, r, s, a) {
                                var c = [];
                                c.push(["line", Math.round(o), Math.round(r)]), c.push(["line", Math.round(o + s), Math.round(r)]), c.push(["line", Math.round(o + s), Math.round(a + r)]), c.push(["line", Math.round(o), Math.round(a + r)]), q(e, c), e.save(), e.clip(), W(e, t, i, n), e.restore()
                            }

                            function Q(e, t, i) {
                                p(e, t.left, t.top, t.width, t.height, i)
                            }

                            function V(e, t, i, n, o) {
                                var r = d.Util.BackgroundSize(e, t, n, o),
                                    s = d.Util.BackgroundPosition(e, t, n, o, r),
                                    a = ut(e, "backgroundRepeat").split(",").map(function(e) {
                                        return e.trim()
                                    });
                                switch (n = X(n, r), a = a[o] || a[0]) {
                                    case "repeat-x":
                                        G(i, n, s, t, t.left, t.top + s.top, 99999, n.height);
                                        break;
                                    case "repeat-y":
                                        G(i, n, s, t, t.left + s.left, t.top, n.width, 99999);
                                        break;
                                    case "no-repeat":
                                        G(i, n, s, t, t.left + s.left, t.top + s.top, n.width, n.height);
                                        break;
                                    default:
                                        W(i, n, s, {
                                            top: t.top,
                                            left: t.left,
                                            width: n.width,
                                            height: n.height
                                        })
                                }
                            }

                            function J(e, t, i) {
                                for (var o, r = ut(e, "backgroundImage"), s = d.Util.parseBackgroundImage(r), a = s.length; a--;)
                                    if (r = s[a], r.args && 0 !== r.args.length) {
                                        var c = "url" === r.method ? r.args[0] : r.value;
                                        o = $(c), o ? V(e, t, i, o, a) : n("html2canvas: Error loading background:", r)
                                    }
                            }

                            function X(e, t) {
                                if (e.width === t.width && e.height === t.height) return e;
                                var i, n = at.createElement("canvas");
                                return n.width = t.width, n.height = t.height, i = n.getContext("2d"), z(i, e, 0, 0, e.width, e.height, 0, 0, t.width, t.height), n
                            }

                            function K(e, t, i) {
                                var n = ut(t, "opacity") * (i ? i.opacity : 1);
                                return e.setVariable("globalAlpha", n), n
                            }

                            function Y(e, t, i) {
                                var n = r(t ? i.width : c(), t ? i.height : l()),
                                    o = {
                                        ctx: n,
                                        zIndex: I(ut(e, "zIndex"), t ? t.zIndex : null),
                                        opacity: K(n, e, t),
                                        cssPosition: ut(e, "position"),
                                        borders: L(e),
                                        clip: t && t.clip ? d.Util.Extend({}, t.clip) : null
                                    };
                                return a.useOverflow === !0 && /(hidden|scroll|auto)/.test(ut(e, "overflow")) === !0 && /(BODY)/i.test(e.nodeName) === !1 && (o.clip = o.clip ? C(o.clip, i) : i), o.zIndex.children.push(o), o
                            }

                            function Z(e, t, i) {
                                var n = {
                                    left: t.left + e[3].width,
                                    top: t.top + e[0].width,
                                    width: t.width - (e[1].width + e[3].width),
                                    height: t.height - (e[0].width + e[2].width)
                                };
                                return i && (n = C(n, i)), n
                            }

                            function et(e, t, i) {
                                var o, r = d.Util.Bounds(e),
                                    s = dt.test(e.nodeName) ? "#efefef" : ut(e, "backgroundColor"),
                                    a = Y(e, t, r),
                                    c = a.borders,
                                    l = a.ctx,
                                    u = Z(c, r, a.clip),
                                    p = M(e, r, c);
                                switch (q(l, p.clip), l.save(), l.clip(), u.height > 0 && u.width > 0 && (Q(l, r, s), J(e, u, l)), l.restore(), p.borders.forEach(function(e) {
                                        N(l, e.args, e.color)
                                    }), i || F(e, a), e.nodeName) {
                                    case "IMG":
                                        (o = $(e.getAttribute("src"))) ? D(l, e, o, r, c): n("html2canvas: Error loading <img>:" + e.getAttribute("src"));
                                        break;
                                    case "INPUT":
                                        /^(text|url|email|submit|button|reset)$/.test(e.type) && (e.value || e.placeholder).length > 0 && U(e, r, a);
                                        break;
                                    case "TEXTAREA":
                                        (e.value || e.placeholder || "").length > 0 && U(e, r, a);
                                        break;
                                    case "SELECT":
                                        (e.options || e.placeholder || "").length > 0 && U(e, r, a);
                                        break;
                                    case "LI":
                                        S(e, a, u);
                                        break;
                                    case "CANVAS":
                                        D(l, e, e, r, c)
                                }
                                return a
                            }

                            function tt(e) {
                                return "none" !== ut(e, "display") && "hidden" !== ut(e, "visibility") && !e.hasAttribute("data-html2canvas-ignore")
                            }

                            function it(e, t, i) {
                                tt(e) && (t = et(e, t, i) || t, dt.test(e.nodeName) || d.Util.Children(e).forEach(function(n) {
                                    1 === n.nodeType ? it(n, t, i) : 3 === n.nodeType && y(e, n, t)
                                }))
                            }

                            function nt(e, t) {
                                function i(e) {
                                    var t, n, o, r, a, c = d.Util.Children(e),
                                        l = c.length;
                                    for (a = 0; l > a; a += 1)
                                        if (r = c[a], 3 === r.nodeType) s += r.nodeValue.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                                        else if (1 === r.nodeType && !/^(script|meta|title)$/.test(r.nodeName.toLowerCase())) {
                                        if (s += "<" + r.nodeName.toLowerCase(), r.hasAttributes())
                                            for (t = r.attributes, o = t.length, n = 0; o > n; n += 1) s += " " + t[n].name + '="' + t[n].value + '"';
                                        s += ">", i(r), s += "</" + r.nodeName.toLowerCase() + ">"
                                    }
                                }
                                var n = new Image,
                                    o = c(),
                                    r = l(),
                                    s = "";
                                i(e), n.src = ["data:image/svg+xml,", "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='" + o + "' height='" + r + "'>", "<foreignObject width='" + o + "' height='" + r + "'>", "<html xmlns='http://www.w3.org/1999/xhtml' style='margin:0;'>", s.replace(/\#/g, "%23"), "</html>", "</foreignObject>", "</svg>"].join(""), n.onload = function() {
                                    t.svgRender = n
                                }
                            }

                            function ot() {
                                var e = et(rt, null);
                                return ct.svgRendering && nt(t.documentElement, e), Array.prototype.slice.call(rt.children, 0).forEach(function(t) {
                                    it(t, e)
                                }), e.backgroundColor = ut(t.documentElement, "backgroundColor"), lt.removeChild(mt), e
                            }
                            bds.se.ShortCut.scrollTop = e.pageYOffset || t.documentElement.scrollTop || t.body.scrollTop, e.scroll(0, 0);
                            var rt = a.elements === i ? t.body : a.elements[0],
                                st = 0,
                                at = rt.ownerDocument,
                                ct = d.Util.Support(a, at),
                                dt = new RegExp("(" + a.ignoreElements + ")"),
                                lt = at.body,
                                ut = d.Util.getCSS,
                                pt = "___html2canvas___pseudoelement",
                                mt = at.createElement("style");
                            mt.innerHTML = "." + pt + '-before:before { content: "" !important; display: none !important; }.' + pt + '-after:after { content: "" !important; display: none !important; }', lt.appendChild(mt), o = o || {};
                            var ft = function(e) {
                                return function(t, i, n, o) {
                                    var r = n * e,
                                        s = o * e,
                                        a = t + n,
                                        c = i + o;
                                    return {
                                        topLeft: E({
                                            x: t,
                                            y: c
                                        }, {
                                            x: t,
                                            y: c - s
                                        }, {
                                            x: a - r,
                                            y: i
                                        }, {
                                            x: a,
                                            y: i
                                        }),
                                        topRight: E({
                                            x: t,
                                            y: i
                                        }, {
                                            x: t + r,
                                            y: i
                                        }, {
                                            x: a,
                                            y: c - s
                                        }, {
                                            x: a,
                                            y: c
                                        }),
                                        bottomRight: E({
                                            x: a,
                                            y: i
                                        }, {
                                            x: a,
                                            y: i + s
                                        }, {
                                            x: t + r,
                                            y: c
                                        }, {
                                            x: t,
                                            y: c
                                        }),
                                        bottomLeft: E({
                                            x: a,
                                            y: c
                                        }, {
                                            x: a - r,
                                            y: c
                                        }, {
                                            x: t,
                                            y: i + s
                                        }, {
                                            x: t,
                                            y: i
                                        })
                                    }
                                }
                            }(4 * ((Math.sqrt(2) - 1) / 3));
                            return ot()
                        }, d.Preload = function(o) {
                            function r(e) {
                                $.href = e, $.href = $.href;
                                var t = $.protocol + $.host;
                                return t === g
                            }

                            function s() {
                                n("html2canvas: start: images: " + _.numLoaded + " / " + _.numTotal + " (failed: " + _.numFailed + ")"), !_.firstRun && _.numLoaded >= _.numTotal && (n("Finished loading images: # " + _.numTotal + " (failed: " + _.numFailed + ")"), "function" == typeof o.complete && o.complete(_))
                            }

                            function a(t, n, r) {
                                var a, c, d = o.proxy;
                                $.href = t, t = $.href, a = "html2canvas_" + y++, r.callbackname = a, d += d.indexOf("?") > -1 ? "&" : "?", d += "url=" + encodeURIComponent(t) + "&callback=" + a, c = k.createElement("script"), e[a] = function(t) {
                                    "error:" === t.substring(0, 6) ? (r.succeeded = !1, _.numLoaded++, _.numFailed++, s()) : (h(n, r), n.src = t), e[a] = i;
                                    try {
                                        delete e[a]
                                    } catch (o) {}
                                    c.parentNode.removeChild(c), c = null, delete r.script, delete r.callbackname
                                }, c.setAttribute("type", "text/javascript"), c.setAttribute("src", d), r.script = c, e.document.body.appendChild(c)
                            }

                            function c(t, i) {
                                var n = e.getComputedStyle(t, i),
                                    o = n.content;
                                "url" === o.substr(0, 3) && b.loadImage(d.Util.parseBackgroundImage(o)[0].args[0]), m(n.backgroundImage, t)
                            }

                            function l(e) {
                                c(e, ":before"), c(e, ":after")
                            }

                            function u(e, t) {
                                var n = d.Generate.Gradient(e, t);
                                n !== i && (_[e] = {
                                    img: n,
                                    succeeded: !0
                                }, _.numTotal++, _.numLoaded++, s())
                            }

                            function p(e) {
                                return e && e.method && e.args && e.args.length > 0
                            }

                            function m(e, t) {
                                var n;
                                d.Util.parseBackgroundImage(e).filter(p).forEach(function(e) {
                                    "url" === e.method ? b.loadImage(e.args[0]) : e.method.match(/\-?gradient$/) && (n === i && (n = d.Util.Bounds(t)), u(e.value, n))
                                })
                            }

                            function f(e) {
                                var t = !1;
                                try {
                                    d.Util.Children(e).forEach(function(e) {
                                        f(e)
                                    })
                                } catch (o) {}
                                try {
                                    t = e.nodeType
                                } catch (r) {
                                    t = !1, n("html2canvas: failed to access some element's nodeType - Exception: " + r.message)
                                }
                                if (1 === t || t === i) {
                                    l(e);
                                    try {
                                        m(d.Util.getCSS(e, "backgroundImage"), e)
                                    } catch (o) {
                                        n("html2canvas: failed to get background-image - Exception: " + o.message)
                                    }
                                    m(e)
                                }
                            }

                            function h(t, n) {
                                t.onload = function() {
                                    n.timer !== i && e.clearTimeout(n.timer), _.numLoaded++, n.succeeded = !0, t.onerror = t.onload = null, s()
                                }, t.onerror = function() {
                                    if ("anonymous" === t.crossOrigin && (e.clearTimeout(n.timer), o.proxy)) {
                                        var i = t.src;
                                        return t = new Image, n.img = t, t.src = i, void a(t.src, t, n)
                                    }
                                    _.numLoaded++, _.numFailed++, n.succeeded = !1, t.onerror = t.onload = null, s()
                                }
                            }
                            var g, b, v, w, _ = {
                                    numLoaded: 0,
                                    numFailed: 0,
                                    numTotal: 0,
                                    cleanupDone: !1
                                },
                                y = 0,
                                x = o.elements[0] || t.body,
                                k = x.ownerDocument,
                                T = k.images,
                                S = T.length,
                                $ = k.createElement("a"),
                                C = function(e) {
                                    return e.crossOrigin !== i
                                }(new Image);
                            for ($.href = e.location.href, g = $.protocol + $.host, b = {
                                    loadImage: function(t) {
                                        var n, s;
                                        t && _[t] === i && (n = new Image, t.match(/data:image\/.*;base64,/i) ? (n.src = t.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""), s = _[t] = {
                                            img: n
                                        }, _.numTotal++, h(n, s)) : r(t) || o.allowTaint === !0 ? (s = _[t] = {
                                            img: n
                                        }, _.numTotal++, h(n, s), n.src = t) : C && !o.allowTaint && o.useCORS ? (n.crossOrigin = "anonymous", s = _[t] = {
                                            img: n
                                        }, _.numTotal++, h(n, s), n.src = t, n.customComplete = function() {
                                            this.img.complete ? this.img.onerror() : this.timer = e.setTimeout(this.img.customComplete, 100)
                                        }.bind(s), n.customComplete()) : o.proxy && (s = _[t] = {
                                            img: n
                                        }, _.numTotal++, a(t, n, s)))
                                    },
                                    cleanupDOM: function(r) {
                                        var a, c;
                                        if (!_.cleanupDone) {
                                            n(r && "string" == typeof r ? "html2canvas: Cleanup because: " + r : "html2canvas: Cleanup after timeout: " + o.timeout + " ms.");
                                            for (c in _)
                                                if (_.hasOwnProperty(c) && (a = _[c], "object" == typeof a && a.callbackname && a.succeeded === i)) {
                                                    e[a.callbackname] = i;
                                                    try {
                                                        delete e[a.callbackname]
                                                    } catch (d) {}
                                                    a.script && a.script.parentNode && (a.script.setAttribute("src", "about:blank"), a.script.parentNode.removeChild(a.script)), _.numLoaded++, _.numFailed++, n("html2canvas: Cleaned up failed img: '" + c + "' Steps: " + _.numLoaded + " / " + _.numTotal)
                                                } e.stop !== i ? e.stop() : t.execCommand !== i && t.execCommand("Stop", !1), t.close !== i && t.close(), _.cleanupDone = !0, r && "string" == typeof r || s()
                                        }
                                    },
                                    renderingDone: function() {
                                        w && e.clearTimeout(w)
                                    }
                                }, o.timeout > 0 && (w = e.setTimeout(b.cleanupDOM, o.timeout)), n("html2canvas: Preload starts: finding background-images"), _.firstRun = !0, f(x), n("html2canvas: Preload: Finding images"), v = 0; S > v; v += 1) b.loadImage(T[v].getAttribute("src"));
                            return _.firstRun = !1, n("html2canvas: Preload: Done."), _.numTotal === _.numLoaded && s(), b
                        }, d.Renderer = function(e, n) {
                            function o(e) {
                                var t = [],
                                    i = function(e) {
                                        var n = [],
                                            o = [];
                                        e.children.forEach(function(e) {
                                            e.children && e.children.length > 0 ? (n.push(e), o.push(e.zindex)) : t.push(e)
                                        }), o.sort(function(e, t) {
                                            return e - t
                                        }), o.forEach(function(e) {
                                            var t;
                                            n.some(function(i, n) {
                                                return t = n, i.zindex === e
                                            }), i(n.splice(t, 1)[0])
                                        })
                                    };
                                return e && e.zIndex && i(e.zIndex), t
                            }

                            function r(e) {
                                var t;
                                if ("string" == typeof n.renderer && d.Renderer[e] !== i) t = d.Renderer[e](n);
                                else {
                                    if ("function" != typeof e) throw new Error("Unknown renderer");
                                    t = e(n)
                                }
                                if ("function" != typeof t) throw new Error("Invalid renderer defined");
                                return t
                            }
                            return r(n.renderer)(e, n, t, o(e), d)
                        }, d.Util.Support = function(e, t) {
                            function o() {
                                var e = new Image,
                                    o = t.createElement("canvas"),
                                    r = o.getContext === i ? !1 : o.getContext("2d");
                                if (r === !1) return !1;
                                o.width = o.height = 10, e.src = ["data:image/svg+xml,", "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'>", "<foreignObject width='10' height='10'>", "<div xmlns='http://www.w3.org/1999/xhtml' style='width:10;height:10;'>", "sup", "</div>", "</foreignObject>", "</svg>"].join("");
                                try {
                                    r.drawImage(e, 0, 0), o.toDataURL()
                                } catch (s) {
                                    return !1
                                }
                                return n("html2canvas: Parse: SVG powered rendering available"), !0
                            }

                            function r() {
                                var e, i, n, o, r = !1;
                                return t.createRange && (e = t.createRange(), e.getBoundingClientRect && (i = t.createElement("boundtest"), i.style.height = "123px", i.style.display = "block", t.body.appendChild(i), e.selectNode(i), n = e.getBoundingClientRect(), o = n.height, 123 === o && (r = !0), t.body.removeChild(i))), r
                            }
                            return {
                                rangeBounds: r(),
                                svgRendering: e.svgRendering && o()
                            }
                        }, e.html2canvas = function(t, i) {
                            t = t.length ? t : [t];
                            var o, r, s = {
                                logging: !1,
                                elements: t,
                                background: "#fff",
                                proxy: null,
                                timeout: 0,
                                useCORS: !1,
                                allowTaint: !1,
                                svgRendering: !1,
                                ignoreElements: "IFRAME|OBJECT|PARAM",
                                useOverflow: !0,
                                letterRendering: !1,
                                chinese: !1,
                                width: null,
                                height: null,
                                taintTest: !0,
                                renderer: "Canvas"
                            };
                            return s = d.Util.Extend(i, s), d.logging = s.logging, s.complete = function(e) {
                                ("function" != typeof s.onpreloaded || s.onpreloaded(e) !== !1) && (o = d.Parse(e, s), ("function" != typeof s.onparsed || s.onparsed(o) !== !1) && (r = d.Renderer(o, s), "function" == typeof s.onrendered && s.onrendered(r)))
                            }, e.setTimeout(function() {
                                d.Preload(s)
                            }, 0), {
                                render: function(e, t) {
                                    return d.Renderer(e, d.Util.Extend(t, s))
                                },
                                parse: function(e, t) {
                                    return d.Parse(e, d.Util.Extend(t, s))
                                },
                                preload: function(e) {
                                    return d.Preload(d.Util.Extend(e, s))
                                },
                                log: n
                            }
                        }, e.html2canvas.log = n, e.html2canvas.Renderer = {
                            Canvas: i
                        }, d.Renderer.Canvas = function(e) {
                            function o(e, t) {
                                e.beginPath(), t.forEach(function(t) {
                                    e[t.name].apply(e, t.arguments)
                                }), e.closePath()
                            }

                            function r(e) {
                                if (-1 === d.indexOf(e.arguments[0].src)) {
                                    u.drawImage(e.arguments[0], 0, 0);
                                    try {
                                        u.getImageData(0, 0, 1, 1)
                                    } catch (t) {
                                        return l = c.createElement("canvas"), u = l.getContext("2d"), !1
                                    }
                                    d.push(e.arguments[0].src)
                                }
                                return !0
                            }

                            function s(e) {
                                return "transparent" === e || "rgba(0, 0, 0, 0)" === e
                            }

                            function a(t, i) {
                                switch (i.type) {
                                    case "variable":
                                        t[i.name] = i.arguments;
                                        break;
                                    case "function":
                                        if ("createPattern" === i.name) {
                                            if (i.arguments[0].width > 0 && i.arguments[0].height > 0) try {
                                                t.fillStyle = t.createPattern(i.arguments[0], "repeat")
                                            } catch (s) {
                                                n("html2canvas: Renderer: Error creating pattern", s.message)
                                            }
                                        } else "drawShape" === i.name ? o(t, i.arguments) : "drawImage" === i.name ? i.arguments[8] > 0 && i.arguments[7] > 0 && (!e.taintTest || e.taintTest && r(i)) && t.drawImage.apply(t, i.arguments) : t[i.name].apply(t, i.arguments)
                                }
                            }
                            e = e || {};
                            var c = t,
                                d = [],
                                l = t.createElement("canvas"),
                                u = l.getContext("2d"),
                                p = e.canvas || c.createElement("canvas");
                            return function(e, t, o, r, c) {
                                var d, l, u, m, f, h, g = p.getContext("2d");
                                if (p.width = p.style.width = t.width || e.ctx.width, p.height = p.style.height = t.height || e.ctx.height, h = g.fillStyle, g.fillStyle = s(e.backgroundColor) && t.background !== i ? t.background : e.backgroundColor, g.fillRect(0, 0, p.width, p.height), g.fillStyle = h, t.svgRendering && e.svgRender !== i) g.drawImage(e.svgRender, 0, 0);
                                else
                                    for (l = 0, u = r.length; u > l; l += 1) d = r.splice(0, 1)[0], d.canvasPosition = d.canvasPosition || {}, g.textBaseline = "bottom", d.clip && (g.save(), g.beginPath(), g.rect(d.clip.left, d.clip.top, d.clip.width, d.clip.height), g.clip()), d.ctx.storage && d.ctx.storage.forEach(a.bind(null, g)), d.clip && g.restore();
                                return n("html2canvas: Renderer: Canvas renderer done - returning canvas obj"), u = t.elements.length, 1 === u && "object" == typeof t.elements[0] && "BODY" !== t.elements[0].nodeName ? (f = c.Util.Bounds(t.elements[0]), m = o.createElement("canvas"), m.width = f.width, m.height = f.height, g = m.getContext("2d"), g.drawImage(p, f.left, f.top, f.width, f.height, 0, 0, f.width, f.height), p = null, m) : p
                            }
                        }
                }(window, document)
            }
        })
    }(), define("plugins/safeIcon", ["require"], function() {
        function e() {
            t(), $(document).on("scroll.safeIcon", t)
        }

        function t() {
            u.clear();
            var e = $(".result .c-icon-baozhang-new");
            e.length && e.each(function(e, t) {
                n(t) && r(t)
            })
        }

        function i() {
            var e = new Date;
            return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate()
        }

        function n(e) {
            if (!e) return !1;
            if (!e.getBoundingClientRect) return !0;
            var t = e.getBoundingClientRect();
            return t.top < window.innerHeight && t.bottom > 0 && t.left < window.innerWidth && t.right > 0 ? !0 : !1
        }

        function o(e) {
            if (window.localStorage) {
                var t = u.get(),
                    n = !!$(e).attr("data-safe-icon-run");
                return (t.split(",").length < 2 || -1 !== t.indexOf(i())) && !n
            }
            return !0
        }

        function r(e) {
            if (!o(e)) return !1;
            $(e).attr("data-safe-icon-run", !0), $(e).attr("hint-type", "anim-newBao");
            var t = $(e),
                n = $($(e).parents("div.result.c-container")),
                r = n.attr("data-click"),
                s = r ? r.replace("safe", "ani-safe") : "";
            setTimeout(function() {
                t.addClass("animate"), n.attr("data-click", s), t.one("animationend", function() {
                    t.removeClass("animate"), setTimeout(function() {
                        t.addClass("animate"), $(e).attr("hint-type", "newBao"), t.one("animationend", function() {
                            n.attr("data-click", r)
                        })
                    }, 1e3)
                })
            }, 1e3), ns_c_pj({
                qid: bds.comm.qid || ""
            }, "pj=animaBao&"), u.set(i() + "~" + +new Date)
        }

        function s(e) {
            var t = function() {
                    return window.localStorage && window.localStorage.getItem(e) ? window.localStorage.getItem(e) : ""
                },
                i = function(i) {
                    if (window.localStorage) {
                        var n = t();
                        return "" === i ? (window.localStorage.setItem(e, i), !0) : 2 === n.split(",").length || -1 !== n.indexOf(i.split("~")[0]) ? !1 : (i = n ? n + "," + String(i) : String(i), window.localStorage.setItem(e, i), !0)
                    }
                    return !0
                },
                n = function() {
                    var e = t(); + new Date - +e.split(",")[0].split("~").pop() >= l && i("")
                };
            return {
                get: t,
                set: i,
                clear: n
            }
        }

        function a() {
            $(document).off("scroll.safeIcon", t)
        }

        function c() {
            try {
                e()
            } catch (t) {
                console.log(t)
            }
        }
        var d = "safeIconHis",
            l = 1296e6,
            u = s(d);
        return {
            init: c,
            destroy: a
        }
    }), define("plugins/frontend_sample", ["require"], function() {
        var e = {};
        return function(t, i) {
            if (location.search.indexOf("s_" + t + "=hit") >= 0) return !0;
            e[t] || (e[t] = Math.random());
            var n = e[t];
            return i > n
        }
    }), define("webb/instance", ["require", "@baidu/webb", "webb/instance-config"], function(e) {
        function t() {
            return bds && bds.comm && bds.comm.lid ? bds.comm.lid : ""
        }

        function i(e) {
            if (!a[e]) {
                var i = {
                        pid: e,
                        lid: t()
                    },
                    r = o[e];
                if (!r) return null;
                for (var s in r) r.hasOwnProperty(s) && (i[s] = r[s]);
                a[e] = new n(i)
            }
            return a[e]
        }
        var n = e("@baidu/webb"),
            o = e("webb/instance-config").config;
        if (-1 !== document.cookie.indexOf("webbtest=1"))
            for (var r in o)
                if (o.hasOwnProperty(r))
                    for (var s in o[r]) o[r].hasOwnProperty(s) && (o[r][s].sample = 1);
        var a = {};
        return {
            getInstance: i
        }
    }), define("webb/instance-config", ["require"], function() {
        var e = {
            "1_3": {
                et_js: {
                    sample: .1
                },
                et_comm: {
                    sample: .1
                },
                pf_comm: {
                    sample: .01
                }
            },
            "1_87": {
                et_js: {
                    sample: .1
                },
                et_comm: {
                    sample: .1
                },
                pf_comm: {
                    sample: .02
                }
            }
        };
        return {
            config: e
        }
    }), ! function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("@baidu/webb", [], t) : "object" == typeof exports ? exports.webb2 = t() : e.webb2 = t()
    }("undefined" != typeof self ? self : this, function() {
        return function(e) {
            function t(n) {
                if (i[n]) return i[n].exports;
                var o = i[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
            }
            var i = {};
            return t.m = e, t.c = i, t.d = function(e, i, n) {
                t.o(e, i) || Object.defineProperty(e, i, {
                    configurable: !1,
                    enumerable: !0,
                    get: n
                })
            }, t.n = function(e) {
                var i = e && e.__esModule ? function() {
                    return e["default"]
                } : function() {
                    return e
                };
                return t.d(i, "a", i), i
            }, t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, t.p = "", t(t.s = 7)
        }([function(e, t) {
            "use strict";

            function i(e, t) {
                var i = new Image,
                    o = n();
                window[o] = i, i.onload = function() {
                    t && t(), delete window[o]
                }, i.onerror = function(e) {
                    t && t(e), delete window[o]
                }, i.src = e
            }

            function n() {
                var e = function() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                };
                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
            }

            function o(e, t) {
                if (!t || "object" !== (void 0 === t ? "undefined" : g(t))) return e;
                for (var i = Object.keys(t), n = i.length; n--;) e[i[n]] = t[i[n]];
                return e
            }

            function r(e) {
                return Object.keys(e).map(function(t) {
                    var i = e[t];
                    return void 0 === i ? i = "" : "string" != typeof i && (i = JSON.stringify(i)), encodeURIComponent(t) + "=" + encodeURIComponent(i)
                }).join("&")
            }

            function s(e, t) {
                var i = ["webkit", "moz", "ms", "o"];
                if (t in e) return t;
                for (var n = 0; n < i.length; n++) {
                    var o = "" + i[n] + t;
                    if (o in e) return o
                }
                return ""
            }

            function a() {
                return {
                    x: document.body.scrollLeft || document.documentElement.scrollLeft,
                    y: document.body.scrollTop || document.documentElement.scrollTop
                }
            }

            function c(e) {
                b && (document.addEventListener(v, e), document.addEventListener(w, e))
            }

            function d(e) {
                document.removeEventListener(v, e), document.removeEventListener(w, e)
            }

            function l(e) {
                return e && "hidden" in e ? e.hidden : document[b]
            }

            function u() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return Object.keys(t).forEach(function(i) {
                    e[i] = t[i]
                }), e
            }

            function p() {
                if (Element && !Element.prototype.matches) {
                    var e = Element.prototype;
                    e.matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector
                }
            }

            function m(e) {
                var t = window.getComputedStyle(e)["background-image"];
                return t && "none" !== t && /^url\(/i.test(t) ? t.replace(/^url\(['"]?([^'"]+)['"]?\)/i, "$1") : ""
            }

            function f(e) {
                return e && "string" == typeof e && /^\s?(http:|https:)?\/\//.test(e)
            }

            function h(e, t) {
                /complete|loaded|interactive/.test(document.readyState) && document.body ? e() : document.addEventListener("DOMContentLoaded", function() {
                    return t ? void e() : void setTimeout(function() {
                        e()
                    }, 0)
                })
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            t.sendLog = i, t.guid = n, t.extend = o, t.stringify = r, t.getProp = s, t.getScrollInfo = a, t.bindVisibilityChangeEvent = c, t.disposeVisibilityChangeEvent = d, t.getPageHiddenValue = l, t.assign = u, t.matchesPolyfill = p, t.getUrlFromStyle = m, t.isUrl = f, t.afterReady = h;
            var b = s(document, "hidden"),
                v = b.replace(/hidden/i, "visibilitychange"),
                w = "baiduboxappvisibilitychange"
        }, function(e, t, i) {
            "use strict";

            function n(e) {
                var t = this,
                    i = e.colno || window.event && window.event.errorCharacter || 0,
                    n = e.error || {},
                    r = o.assign({
                        msg: e.message,
                        ln: e.lineno,
                        file: e.filename,
                        col: i,
                        stack: n.stack
                    }, this.exceptionInfo);
                setTimeout(function() {
                    t.send("et_js", r, t.exceptionDim)
                }, 0)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(0);
            t["default"] = {
                initException: function() {
                    this.exceptionDim = null, this.exceptionInfo = {}, this.onerrorCb = n.bind(this)
                },
                startJsExceptionLog: function(e, t) {
                    this.exceptionInfo = o.assign({}, e), this.exceptionDim = o.assign({}, t), window.removeEventListener("error", this.onerrorCb), window.addEventListener("error", this.onerrorCb)
                },
                startResExceptionLog: function() {},
                stopJsExceptionLog: function() {
                    window.removeEventListener("error", this.onerrorCb)
                },
                stopResExceptionLog: function() {},
                sendExceptionLog: function(e, t) {
                    this.send("et_comm", e, t)
                },
                destroyJsException: function() {
                    this.stopJsExceptionLog(), this.exceptionDim = null, this.exceptionInfo = null, this.onerrorCb = null
                }
            }, e.exports = t["default"]
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(0);
            t["default"] = {
                sendBaseDispLog: function(e, t, i) {
                    var o = document.documentElement,
                        r = {
                            size: {
                                doc: {
                                    w: o.scrollWidth,
                                    h: o.scrollHeight
                                },
                                wind: {
                                    w: o.clientWidth,
                                    h: o.clientHeight
                                },
                                scr: {
                                    w: screen.width,
                                    h: screen.height
                                }
                            },
                            dpr: window.devicePixelRatio || 1
                        };
                    e && (r = n.assign(r, e)), this.send("disp_comm", r, t, null, i)
                },
                sendDispLog: function(e, t, i) {
                    var o = void 0;
                    o = e instanceof Array ? e : n.assign({}, e), this.send("disp_content", o, t, null, i)
                }
            }, e.exports = t["default"]
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(0);
            t["default"] = {
                sendBasePfLog: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments[1],
                        i = arguments[2],
                        o = window.performance && performance.timing || {},
                        r = o.navigationStart,
                        s = o.requestStart,
                        a = o.responseStart,
                        c = o.responseEnd,
                        d = o.domComplete,
                        l = o.domLoading,
                        u = o.domainLookupStart,
                        p = o.domainLookupEnd,
                        m = o.connectStart,
                        f = o.connectEnd,
                        h = o.loadEventStart,
                        g = o.loadEventEnd,
                        b = {
                            dns: p - u,
                            tcp: f - m,
                            req: a - s,
                            res: c - a,
                            dct: d - l,
                            ld: g - h
                        },
                        v = window.__webbbrige__ || {},
                        w = v.whiteScreenTime,
                        _ = v.firstScreenTime;
                    w && (b = n.assign(b, {
                        wst: w - r
                    })), _ && (b = n.assign(b, {
                        fst: _ - r
                    })), b = n.assign(b, e), this.send("pf_comm", b, t, null, i)
                },
                sendPfLog: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments[1],
                        i = arguments[2],
                        o = n.assign({}, e);
                    this.send("pf_comm", o, t, null, i)
                }
            }, e.exports = t["default"]
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = {
                sendCountLog: function(e, t) {
                    this.send("count_comm", e, t)
                }
            }, e.exports = t["default"]
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = {
                sendDistributeLog: function(e, t) {
                    this.send("dist_comm", e, t)
                }
            }, e.exports = t["default"]
        }, function(e, t, i) {
            "use strict";

            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                r = function() {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, i, n) {
                        return i && e(t.prototype, i), n && e(t, n), t
                    }
                }(),
                s = i(0),
                a = "https://sp1.baidu.com/5b1ZeDe5KgQFm2e88IuM_a/webb.gif";
            "http:" === location.protocol && (a = "http://sestat.baidu.com/webb.gif");
            var c = "https://sp1.baidu.com/5b1ZeDe5KgQFm2e88IuM_a/mwb2.gif";
            "http:" === location.protocol && (c = "http://sestat.baidu.com/mwb2.gif");
            var d = {
                    time: 1,
                    ia: 1,
                    disp_comm: 1,
                    disp_content: 1,
                    et_js: 2,
                    count_comm: 2,
                    dist_comm: 2,
                    pf_comm: 2
                },
                l = function() {
                    function e(t) {
                        n(this, e);
                        var i = {
                            sample: 0
                        };
                        this.validateOptions(t), this.options = s.extend(i, t), this.random = Math.random(), this.options.sample && (this.options.curSample = Math.random() < this.options.sample ? 1 : 0), this.updateCurSample(), this.initException(), this.options.ia && this.initIa && this.initIa()
                    }
                    return r(e, [{
                        key: "updateCurSample",
                        value: function() {
                            var e = this;
                            Object.keys(this.options).forEach(function(t) {
                                var i = e.options[t];
                                i && i.sample && !i.curSample && (e.options[t].curSample = Math.random() < i.sample ? 1 : 0)
                            })
                        }
                    }, {
                        key: "validateOptions",
                        value: function(e) {
                            var t = ["pid", "lid"];
                            if ("object" !== (void 0 === e ? "undefined" : o(e))) throw new Error("Options must be an object!");
                            if (!t.every(function(t) {
                                    return t in e
                                })) throw new Error("Options " + t.join(", ") + " required")
                        }
                    }, {
                        key: "updateOption",
                        value: function(e) {
                            this.options = s.extend(this.options, e), this.updateCurSample()
                        }
                    }, {
                        key: "wrapCommonParam",
                        value: function(e, t, i) {
                            var n = {
                                pid: this.options.pid,
                                lid: this.options.lid,
                                ts: Date.now(),
                                type: e,
                                info: t,
                                ext: this.options.ext ? this.options.ext : {}
                            };
                            return i && (n.dim = i), n
                        }
                    }, {
                        key: "hitSample",
                        value: function(e) {
                            var t = this.options[e];
                            return t ? "sample" in t ? "eachreq" === t.sampleType ? t.sample && Math.random() <= t.sample ? 1 : 0 : t.curSample : "eachreq" === this.options.sampleType ? this.options.sample && Math.random() <= this.options.sample ? 1 : 0 : this.options.curSample : 0
                        }
                    }, {
                        key: "getLogHost",
                        value: function(e) {
                            var t = this.options;
                            return t[e] && t[e].logHost || t.logHost ? t[e] && t[e].logHost ? t[e].logHost : t.logHost : 2 === d[e] ? c : a
                        }
                    }, {
                        key: "send",
                        value: function(e, t, i, n, o) {
                            if (this.hitSample(e)) {
                                "function" == typeof i && (o = n, n = i, i = null);
                                var r = this.wrapCommonParam(e, t, i);
                                s.extend(r, o), r && r.ext ? r.ext.path = location.pathname : r && !r.ext && (r.ext = {
                                    path: location.pathname
                                });
                                var a = s.guid(),
                                    c = window[a] = new Image;
                                c.onload = function(e) {
                                    n && ("function" == typeof n ? n(e) : n.successCb && "function" == typeof n.successCb && n.successCb(e)), delete window[a]
                                }, c.onerror = function(e) {
                                    n && n.errorCb && "function" == typeof n.errorCb && n.errorCb(e), delete window[a]
                                }, c.src = this.getLogHost(e) + "?" + s.stringify(r)
                            }
                        }
                    }, {
                        key: "sendBeacon",
                        value: function(e, t, i, n) {
                            if (this.hitSample(e)) {
                                var o = this.wrapCommonParam(e, t, i);
                                s.extend(o, n), o && o.ext ? o.ext.path = location.pathname : o && !o.ext && (o.ext = {
                                    path: location.pathname
                                }), navigator.sendBeacon ? navigator.sendBeacon(this.getLogHost(e) + "?" + s.stringify(o)) || this.send(e, t, i) : this.send(e, t, i)
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.destroyJsException(), this.destroyIaMonitor(), this.destroyMediaTime()
                        }
                    }]), e
                }();
            t["default"] = l, e.exports = t["default"]
        }, function(e, t, i) {
            "use strict";

            function n(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(8),
                r = n(o),
                s = i(1),
                a = n(s),
                c = i(9),
                d = n(c),
                l = i(2),
                u = n(l),
                p = i(3),
                m = n(p),
                f = i(4),
                h = n(f),
                g = i(5),
                b = n(g),
                v = i(6),
                w = n(v),
                _ = i(0);
            _.extend(w["default"].prototype, r["default"]), _.extend(w["default"].prototype, a["default"]), _.extend(w["default"].prototype, d["default"]), _.extend(w["default"].prototype, u["default"]), _.extend(w["default"].prototype, m["default"]), _.extend(w["default"].prototype, h["default"]), _.extend(w["default"].prototype, b["default"]), t["default"] = w["default"], e.exports = t["default"]
        }, function(e, t, i) {
            "use strict";

            function n(e, t) {
                return -1 !== e.indexOf(t)
            }

            function o(e) {
                r.getPageHiddenValue(e) ? this.iaHideCb(e) : this.iaShowCb(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i(0),
                s = ["bf", "scroll", "resize"];
            t["default"] = {
                initIa: function() {
                    this.iaTimer = null, this.curSpeed = 4e3, this.iaQueue = [], this.lastQueueLen = -1, this.iaDim = {}, this.iaSendSwitch = !1, this.scrollCb = this.sendScrollLog.bind(this), this.resizeCb = this.sendResizeLog.bind(this), this.iaVisibilityCb = o.bind(this), this.iaHideCb = this.iaHideCb.bind(this), this.iaShowCb = this.iaShowCb.bind(this)
                },
                flushIaQueue: function() {
                    var e = [].concat(this.iaQueue);
                    for (this.iaQueue = []; e.length;) {
                        var t = e.splice(0, 6);
                        this.sendBeacon("ia", t, this.iaDim)
                    }
                    clearTimeout(this.iaTimer), this.startCycle()
                },
                startCycle: function() {
                    var e = this;
                    this.iaTimer = setTimeout(function() {
                        var t = e.iaQueue.length; - 1 === e.lastQueueLen ? e.lastQueueLen = t : e.lastQueueLen && t / e.lastQueueLen >= 2 && e.curSpeed > 2e3 ? e.curSpeed -= 1e3 : t && e.lastQueueLen / t >= 2 && e.curSpeed < 6e3 ? e.curSpeed += 1e3 : !t && e.curSpeed < 6e3 ? e.curSpeed += 1e3 : t && !e.lastQueueLen && e.curSpeed > 2e3 ? e.curSpeed -= 1e3 : !t && e.curSpeed < 6e3 && (e.curSpeed += 1e3), e.lastQueueLen = t, e.flushIaQueue(), clearTimeout(e.iaTimer), e.startCycle()
                    }, this.curSpeed)
                },
                startIaMonitor: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (this.options && this.options.ia) {
                        this.iaDim = r.assign(this.iaDim, e), this.resetIaSwitch(), this.iaShowCb(null, !0), this.removeMonitorEvents(), clearTimeout(this.iaTimer), this.startCycle(), this.monitorItems = s;
                        var t = [];
                        this.options && this.options.ia && this.options.ia.iaMonitorItems ? t = this.options.ia.iaMonitorItems : this.options && this.options.iaMonitorItems && (t = this.options.iaMonitorItems), t && Array.isArray(t) && t.length && (this.monitorItems = t.filter(function(e) {
                            return n(s, e)
                        }), this.monitorItems.length || (this.monitorItems = s)), this.bindMonitorEvents()
                    }
                },
                stopIaMonitor: function() {
                    this.options && this.options.ia && (this.iaHideCb(null, !0), this.flushIaQueue(), this.removeMonitorEvents(), clearTimeout(this.iaTimer))
                },
                sendScrollLog: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.scrollLogLock || (this.scrollLogLock = !0, setTimeout(function() {
                        e.scrollLogLock = !1
                    }, 500), t.x >= 0 && t.y >= 0 || (t = r.getScrollInfo()), this.iaQueue.push({
                        k: "scroll",
                        x: t.x,
                        y: t.y,
                        t: (new Date).getTime(),
                        ele: t.scrollEle || "window"
                    }))
                },
                sendResizeLog: function() {
                    var e = this;
                    this.resizeLogLock || (this.resizeLogLock = !0, setTimeout(function() {
                        e.resizeLogLock = !1
                    }, 500), setTimeout(function() {
                        e.iaQueue.push({
                            k: "resize",
                            w: window.innerWidth || document.documentElement.clientWidth,
                            h: window.innerHeight || document.documentElement.clientHeight,
                            t: (new Date).getTime()
                        })
                    }, 50))
                },
                bindMonitorEvents: function() {
                    var e = this.monitorItems;
                    n(e, "bf") && (r.getProp(document, "hidden") && r.bindVisibilityChangeEvent(this.iaVisibilityCb), window.addEventListener("beforeunload", this.iaHideCb, !1), window.addEventListener("unload", this.iaHideCb, !1), window.addEventListener("pagehide", this.iaHideCb, !1), window.addEventListener("pageshow", this.iaShowCb, !1)), n(e, "scroll") && window.addEventListener("scroll", this.scrollCb), n(e, "resize") && window.addEventListener("resize", this.resizeCb)
                },
                removeMonitorEvents: function() {
                    window.removeEventListener("scroll", this.scrollCb), window.removeEventListener("resize", this.resizeCb), r.disposeVisibilityChangeEvent(this.iaVisibilityCb), window.removeEventListener("beforeunload", this.iaHideCb, !1), window.removeEventListener("unload", this.iaHideCb, !1), window.removeEventListener("pagehide", this.iaHideCb, !1), window.removeEventListener("pageshow", this.iaShowCb, !1)
                },
                updateIaDim: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.iaDim = e
                },
                resetIaSwitch: function() {
                    this.iaSendSwitch = !1
                },
                convertIaSwitch: function() {
                    this.iaSendSwitch = !this.iaSendSwitch
                },
                iaHideCb: function(e, t) {
                    if (this.iaSendSwitch || t) {
                        var i = e ? e.type : "";
                        t && (i = "manual"), this.convertIaSwitch(), this.iaQueue.push({
                            k: "blur",
                            trigger: i,
                            t: (new Date).getTime()
                        }), this.flushIaQueue()
                    }
                },
                iaShowCb: function(e, t) {
                    if (!this.iaSendSwitch || t) {
                        var i = e ? e.type : "";
                        t && (i = "manual"), this.convertIaSwitch(), this.iaQueue.push({
                            k: "focus",
                            trigger: i,
                            t: (new Date).getTime()
                        }), this.flushIaQueue()
                    }
                },
                destroyIaMonitor: function() {
                    this.removeMonitorEvents(), clearTimeout(this.iaTimer), this.iaTimer = null, this.curSpeed = null, this.iaQueue = null, this.lastQueueLen = null, this.iaDim = null, this.scrollCb = null, this.resizeCb = null, this.pageActiveStatusChangeCb = null
                }
            }, e.exports = t["default"]
        }, function(e, t, i) {
            "use strict";

            function n() {
                var e = this.__media__;
                e.sendSwitch = !0, e.continueSwitch = !1
            }

            function o() {
                var e = this.__media__;
                e.sendSwitch = !e.sendSwitch, e.continueSwitch = !e.continueSwitch
            }

            function r(e) {
                c.getPageHiddenValue(e) ? this.mediaHideCb(e) : this.mediaShowCb(e)
            }

            function s() {
                var e = this.__media__ || {};
                e.continueSwitch && (this.convertMediaSwitch(), e.count += 1, e.startTime = Date.now())
            }

            function a(e, t) {
                var i = this.__media__;
                if (i.sendSwitch || t) {
                    var n = e ? e.type : "";
                    t && (n = "manual"), i.endTime = Date.now(), this.convertMediaSwitch();
                    var o = {
                        t1: i.startTime,
                        t2: i.endTime,
                        count: i.count,
                        trigger: n
                    };
                    this.sendBeacon(d, o, i.dim)
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var c = i(0),
                d = "time";
            t["default"] = {
                initMediaTime: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = this.__media__ = {
                            dim: t,
                            startTime: 0,
                            endTime: 0,
                            count: 1,
                            sendSwitch: !0,
                            continueSwitch: !1
                        };
                    e ? i.startTime = e : window.__webbbrige__ && window.__webbbrige__.startTime ? (i.startTime = window.__webbbrige__.startTime, window.__webbbrige__.startTime = null) : i.startTime = Date.now(), this.hasMediaInit = !0, this.mediaHideCb = a.bind(this), this.mediaShowCb = s.bind(this), this.mediaVisibilityCb = r.bind(this), this.resetMediaSwitch = n.bind(this), this.convertMediaSwitch = o.bind(this), this.destroyMediaEvent(), this.bindMediaEvent()
                },
                reStartMediaTime: function(e) {
                    if (!this.hasMediaInit) return void this.initMediaTime();
                    var t = this.__media__;
                    t.count = e ? 1 : t.count + 1, t.startTime = Date.now(), this.resetMediaSwitch(), this.destroyMediaEvent(), this.bindMediaEvent()
                },
                stopMediaTime: function() {
                    !this.__media__ || this.__media__ && !this.__media__.startTime || (this.mediaHideCb(null, !0), this.destroyMediaEvent(), this.__media__.startTime = null)
                },
                updateMediaDim: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.__media__.dim = e
                },
                bindMediaEvent: function() {
                    c.getProp(document, "hidden") && c.bindVisibilityChangeEvent(this.mediaVisibilityCb), window.addEventListener("beforeunload", this.mediaHideCb, !1), window.addEventListener("unload", this.mediaHideCb, !1), window.addEventListener("pagehide", this.mediaHideCb, !1), window.addEventListener("pageshow", this.mediaShowCb, !1)
                },
                destroyMediaEvent: function() {
                    c.disposeVisibilityChangeEvent(this.mediaVisibilityCb), window.removeEventListener("beforeunload", this.mediaHideCb, !1), window.removeEventListener("unload", this.mediaHideCb, !1), window.removeEventListener("pagehide", this.mediaHideCb, !1), window.removeEventListener("pageshow", this.mediaShowCb, !1)
                },
                destroyMediaTime: function() {
                    this.destroyMediaEvent(), this.__media__ = null, this.hasMediaInit = !1, this.mediaHideCb = null, this.mediaShowCb = null, this.mediaVisibilityCb = null, this.resetMediaSwitch = null, this.convertMediaSwitch = null
                }
            }, e.exports = t["default"]
        }])
    }), define("@searchfe/inject-js/dist/amd/decorators/inject", ["require", "exports", "@searchfe/inject-js/dist/amd/di/dependency"], function(e, t, i) {
        "use strict";

        function n(e) {
            return function(t, n, o) {
                void 0 === n && i.setNthDependency(e, o, t)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.inject = void 0, t.inject = n
    }), define("@searchfe/inject-js/dist/amd/decorators/injectable", ["require", "exports"], function(e, t) {
        "use strict";

        function i() {}
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.injectable = void 0, t.injectable = i
    }), define("@searchfe/inject-js/dist/amd/di/container", ["require", "exports", "tslib", "@searchfe/inject-js/dist/amd/di/provider", "@searchfe/inject-js/dist/amd/di/value-provider-impl", "@searchfe/inject-js/dist/amd/di/service-provider-impl", "@searchfe/inject-js/dist/amd/di/factory-provider-impl", "@searchfe/inject-js/dist/amd/utils/map", "@searchfe/inject-js/dist/amd/di/dependency"], function(e, t, i, n, o, r, s, a, c) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Container = void 0;
        var d = function() {
            function e(e) {
                this.services = [], this.prerequisites = [], this.childContainers = [], this.parent = e, this.providers = new a.Map, this.providerClasses = new a.Map
            }
            return e.prototype.createChildContainer = function() {
                var t = new e(this);
                return this.childContainers.push(t), t
            }, e.prototype.getOrCreateProvider = function(e) {
                var t = this,
                    n = this.providers.get(e);
                if (n) return n;
                var o = this.providerClasses.get(e);
                if (!o) {
                    if (!this.parent) throw new Error("provider for " + e + " not found");
                    return this.parent.getOrCreateProvider(e)
                }
                var r = o.dependencies().map(function(i) {
                    return t.providerClasses.get(i) && t.prerequisites.push([e, i]), t.create(i, e)
                });
                return n = new(o.bind.apply(o, i.__spreadArrays([void 0], r))), this.providers.set(e, n), n
            }, e.prototype.create = function(e, t) {
                void 0 === t && (t = null);
                var i = this.getOrCreateProvider(e),
                    n = i.create(this, t);
                return this.services.push(n), n
            }, e.prototype.addService = function(e) {
                var t = r.createServiceProvider(e);
                return this.addProvider(e, t)
            }, e.prototype.addFactory = function(e, t, i) {
                c.setDependencies(i, t);
                var n = s.createFactoryProvider(t);
                return this.addProvider(e, n)
            }, e.prototype.addValue = function(e, t) {
                var i = o.createValueProvider(t);
                return this.addProvider(e, i)
            }, e.prototype.addProvider = function(e, t) {
                if (!n.isProvider(t)) throw new Error('invalid provider for "' + e + '"');
                t.dependencies || (t.dependencies = function() {
                    return c.getDependencies(t)
                }), this.providerClasses.set(e, t)
            }, e.prototype.getTokens = function() {
                var e = [];
                return this.providerClasses.keys(function(t) {
                    e.push(t)
                }), e
            }, e.prototype.getServices = function() {
                return this.services.slice()
            }, e.prototype.getSortedList = function() {
                var e = new a.Map,
                    t = new a.Map;
                this.providers.keys(function(t) {
                    return e.set(t, 0)
                });
                for (var i = 0; i < this.prerequisites.length; i++) {
                    var n = e.get(this.prerequisites[i][0]);
                    if (e.set(this.prerequisites[i][0], n + 1), t.get(this.prerequisites[i][1])) {
                        var o = t.get(this.prerequisites[i][1]);
                        o.push(this.prerequisites[i][0]), t.set(this.prerequisites[i][1], o)
                    } else t.set(this.prerequisites[i][1], [this.prerequisites[i][0]])
                }
                var r = [],
                    s = [];
                for (e.keys(function(t) {
                        0 === e.get(t) && s.push(t)
                    }); s.length;) {
                    var c = s.shift();
                    r.push(c);
                    var d = t.get(c);
                    if (d && d.length)
                        for (var i = 0; i < d.length; i++) {
                            var l = e.get(d[i]);
                            1 === l ? s.push(d[i]) : e.set(d[i], l - 1)
                        }
                }
                return r
            }, e.prototype.destroy = function() {
                for (var e = 0, t = this.childContainers; e < t.length; e++) {
                    var i = t[e];
                    i.destroy()
                }
                for (var n = this.getSortedList(), o = n.length - 1; o >= 0; o--) {
                    var r = n[o],
                        s = this.providers.get(r);
                    s.destroy && "function" == typeof s.destroy && s.destroy()
                }
                this.providers.clear(), this.services = []
            }, e
        }();
        t.Container = d
    }), define("@searchfe/inject-js/dist/amd/di/dependency", ["require", "exports"], function(e, t) {
        "use strict";

        function i(e, t) {
            Reflect.defineMetadata("design:paramtypes", e, t)
        }

        function n(e, t, i) {
            var n = "design:paramtokens:" + t;
            Reflect.defineMetadata(n, e, i)
        }

        function o(e) {
            for (var t = Reflect.getMetadata("design:paramtypes", e) || [], i = [], n = 0; n < t.length; n++) {
                var o = Reflect.getMetadata("design:paramtokens:" + n, e);
                i.push(o || t[n])
            }
            return i
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getDependencies = t.setNthDependency = t.setDependencies = void 0, t.setDependencies = i, t.setNthDependency = n, t.getDependencies = o
    }), define("@searchfe/inject-js/dist/amd/di/factory-provider-impl", ["require", "exports", "@searchfe/inject-js/dist/amd/di/dependency"], function(e, t, i) {
        "use strict";

        function n(e) {
            return function() {
                function t() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this.instance = null, this.args = e
                }
                return t.prototype.create = function() {
                    return this.instance || (this.instance = e.apply(void 0, this.args)), this.instance
                }, t.prototype.destroy = function() {
                    "function" == typeof this.instance.destroy && this.instance.destroy()
                }, t.dependencies = function() {
                    return i.getDependencies(e)
                }, t
            }()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.createFactoryProvider = void 0, t.createFactoryProvider = n
    }), define("@searchfe/inject-js/dist/amd/di/provider", ["require", "exports"], function(e, t) {
        "use strict";

        function i(e) {
            return "function" == typeof e && "function" == typeof e.prototype.create
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isProvider = void 0, t.isProvider = i
    }), define("@searchfe/inject-js/dist/amd/di/service-provider-impl", ["require", "exports", "tslib", "@searchfe/inject-js/dist/amd/di/dependency"], function(e, t, i, n) {
        "use strict";

        function o(e) {
            return function() {
                function t() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this.instance = null, this.args = e
                }
                return t.prototype.create = function() {
                    return this.instance || (this.instance = new(e.bind.apply(e, i.__spreadArrays([void 0], this.args)))), this.instance
                }, t.prototype.destroy = function() {
                    "function" == typeof this.instance.destroy && this.instance.destroy()
                }, t.dependencies = function() {
                    return n.getDependencies(e)
                }, t
            }()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.createServiceProvider = void 0, t.createServiceProvider = o
    }), define("@searchfe/inject-js/dist/amd/di/value-provider-impl", ["require", "exports"], function(e, t) {
        "use strict";

        function i(e) {
            return function() {
                function t() {}
                return t.prototype.create = function() {
                    return e
                }, t.dependencies = function() {
                    return []
                }, t
            }()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.createValueProvider = void 0, t.createValueProvider = i
    }), define("@searchfe/inject-js/dist/amd/index", ["require", "exports", "@searchfe/inject-js/dist/amd/di/container", "@searchfe/inject-js/dist/amd/decorators/injectable", "@searchfe/inject-js/dist/amd/decorators/inject", "@searchfe/inject-js/dist/amd/di/dependency"], function(e, t, i, n, o, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setNthDependency = t.getDependencies = t.setDependencies = t.inject = t.injectable = t.Container = void 0, Object.defineProperty(t, "Container", {
            enumerable: !0,
            get: function() {
                return i.Container
            }
        }), Object.defineProperty(t, "injectable", {
            enumerable: !0,
            get: function() {
                return n.injectable
            }
        }), Object.defineProperty(t, "inject", {
            enumerable: !0,
            get: function() {
                return o.inject
            }
        }), Object.defineProperty(t, "setDependencies", {
            enumerable: !0,
            get: function() {
                return r.setDependencies
            }
        }), Object.defineProperty(t, "getDependencies", {
            enumerable: !0,
            get: function() {
                return r.getDependencies
            }
        }), Object.defineProperty(t, "setNthDependency", {
            enumerable: !0,
            get: function() {
                return r.setNthDependency
            }
        })
    }), define("@searchfe/inject-js/dist/amd/utils/map", ["require", "exports"], function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Map = void 0;
        var i = function() {
            function e() {
                this._keys = [], this._values = []
            }
            return e.prototype.set = function(e, t) {
                for (var i = 0; i < this._keys.length; i++)
                    if (this._keys[i] === e) return void(this._values[i] = t);
                this._keys.push(e), this._values.push(t)
            }, e.prototype.get = function(e) {
                for (var t = 0; t < this._keys.length; t++)
                    if (this._keys[t] === e) return this._values[t];
                return null
            }, e.prototype.clear = function() {
                this._keys = [], this._values = []
            }, e.prototype.keys = function(e) {
                return this._keys.forEach(e)
            }, e
        }();
        t.Map = i
    }), define("@searchfe/inject-js", ["@searchfe/inject-js/dist/amd/index"], function(e) {
        return e
    }), define("modules/result", ["require", "exports", "./perf-log/perf-log.service", "./async-cache/async-cache-item.service", "./molecule/molecule.service", "./select-search/select-search.service", "./login/login.service", "./right-fixed/right-fixed.service"], function(e, t, i, n, o, r, s, a) {
        "use strict";
        t.__esModule = !0, t.ResultModule = void 0;
        var c = function() {
            function e(e, t) {
                this.container = e, this.container.addValue("RESULT_DI", this.container), this.container.addValue(n.AsyncCacheItem, t), this.container.addService(i.PerfLog), this.container.addService(o.MoleculeService), this.container.addService(s.Login), this.container.addService(a.RightFixed), this.container.addService(r.SelectSearch), this.container.create(r.SelectSearch), this.container.create(i.PerfLog), this.container.create(o.MoleculeService), this.container.create(s.Login), this.container.create(a.RightFixed)
            }
            return e.prototype.asyncConfirm = function() {}, e.prototype.destroy = function() {
                this.container.destroy()
            }, e
        }();
        t.ResultModule = c
    }), define("modules/page", ["require", "exports", "@searchfe/inject-js", "./window/token", "./log/log.service", "./cookie/cookie.service", "./perf-sync-log/perf-sync-log.service", "./webb/instance.service", "./webb/config.service", "./webb/config.value", "./query/query.service", "./sample/sample.service", "./https-domain/https-domain.service", "./user/user.service", "./perf-resource-log/perf-resource-log.service", "./require/require", "./peak-style/peak-style.service", "./head-gradient/head-gradient.service", "./isui-head-fixed/isui-head-fixed.service", "./conf/conf.service", "./outline-safari/outline-safari.service"], function(e, t, i, n, o, r, s, a, c, d, l, u, p, m, f, h, g, b, v, w, _) {
        "use strict";
        t.__esModule = !0, t.PageModule = void 0;
        var y = function() {
            function e() {
                this.container = new i.Container, this.resultDI = this.container.createChildContainer();
                var e = this.container;
                e.addValue(n.DOCUMENT, document), e.addValue(n.PERFORMANCE, window.performance), e.addValue(n.LOCAL_STORAGE, window.localStorage), e.addValue(n.NAVIGATOR, window.navigator), e.addValue(h.REQUIRE_TOKEN, window.require), e.addValue(n.PERF_SYNC_DATA, window.__perf_www_datas), e.addService(o.Log), e.addService(r.Cookie), e.addValue(c.WebbConfig, d.webbConfigValue), e.addService(a.WebbInstance), e.addService(l.Query), e.addService(u.Sample), e.addService(p.HttpsDomain), e.addService(m.User), e.addService(g.PeakStyle), e.addService(b.HeadGradient), e.addService(v.IsuiHeadFixed), e.addService(w.Conf), e.addService(_.OutlineSafari), this.queryService = e.create(l.Query), this.sampleService = e.create(u.Sample), this.userService = e.create(m.User), this.peakStyleService = e.create(g.PeakStyle), this.headGradientService = e.create(b.HeadGradient), this.isuiHeadFixedService = e.create(v.IsuiHeadFixed), this.conf = e.create(w.Conf), e.create(_.OutlineSafari)
            }
            return e.prototype.domReady = function() {
                bds.comm.ishome || (this.container.addService(s.PerfSyncLog), this.container.create(s.PerfSyncLog))
            }, e.prototype.updated = function() {
                this.queryService.updated(), this.sampleService.updated(), this.userService.updated(), this.peakStyleService.updated(), this.headGradientService.updated(), this.isuiHeadFixedService.updated(), this.conf.updated()
            }, e.prototype.onload = function() {
                var e = this.container;
                setTimeout(function() {
                    e.addService(f.PerfResourceLog), e.create(f.PerfResourceLog)
                }, 0)
            }, e.prototype.contentLoaded = function() {}, e
        }();
        t.PageModule = y
    }), $(window).on("swap_begin", function() {
        bds && bds.se && void 0 !== bds.se.displayTime && null !== bds.se.displayTime && (clearTimeout(bds.se.displayTime), bds.se.displayTime = null)
    }).on("confirm", function() {
        bds && bds.comm && bds.comm.globalLogFlag && 1 == bds.comm.globalLogFlag && (1 == bds.comm.logFlagNoNetwork || 1 == bds.comm.logFlagNoIntegration || (bds.se.displayTime = setTimeout(function() {
            bds && bds.se && bds.se.display(), bds.se.displayTime = null
        }, 5e3))), bds && bds.se.userAction.collect()
    }).on("swap_end", function(e, t) {
        !t && bds && bds.comm && bds.comm.globalLogFlag && 1 == bds.comm.globalLogFlag && (1 == bds.comm.logFlagNoNetwork || 1 == bds.comm.logFlagNoIntegration || (bds.se.displayTime = setTimeout(function() {
            bds && bds.se && bds.se.display(), bds.se.displayTime = null
        }, 5e3))), !t && bds && bds.se.userAction.collect(), bds.log.send.sendNow("flow_monitor", {}, {
            qid: bds.comm.qid,
            log: {},
            len: 1
        })
    }), $(window).on("swap_end", function() {
        bds.comm.__rdNum && bds.comm.__rdNum > 9e3 && setTimeout(function() {
            $.ajax({
                dataType: "script",
                cache: !0,
                url: "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/clean_9ab51e0.js",
                success: function() {
                    bds.se.cleanCookie.init()
                }
            })
        }, 0)
    }), window.icodetest = 12, $(window).on("swap_end", function() {
        bds && bds.comm && bds.comm.sampleval && $.inArray("ZOOM_TEST", bds.comm.sampleval) > -1 ? require(["plugins/zoom_prompt"], function(e) {
            e()
        }) : bds && bds.comm && bds.comm.sampleval && $.inArray("ZOOM_COMP", bds.comm.sampleval) > -1 && require(["lib/get_zoom"], function(e) {
            var t = e();
            t && 1 != t && ns_c({
                fm: "behs",
                qid: bds.comm.qid,
                tab: "baidu_zoomshow"
            })
        })
    }), $(window).on("swap_end", function() {
        var e = $("#bonus_scene_head");
        e.remove()
    }), $(window).on("swap_end", function() {
        if (bds && bds.comm && bds.comm.sampleval && $.inArray("qrcode", bds.comm.sampleval) > -1) {
            var e = encodeURIComponent(bds.comm.query);
            e.length <= 150 && require(["plugins/pcToWise"], function(t) {
                t(e)
            })
        }
    }), $(document).ready(function() {
        require(["plugins/frontend_sample"], function(e) {
            e("op_https_cert_usable", .001) && require(["plugins/https_useable_sample"], function(e) {
                e(document, $)
            })
        }), require(["plugins/safeIcon"], function(e) {
            e.init()
        })
    }), ! function() {
        var e = navigator.userAgent,
            t = e.match(/MSIE\s*(\d+)/),
            i = t && t[1] && +t[1] <= 9;
        i || require(["plugins/swfobject", "soutu/js/tu"], function(e, t) {
            if (/^\/imgsearch/.test(location.pathname)) {
                var i = $("#content_left").find(".result-op"),
                    n = [];
                i.each(function() {
                    var e = $(this),
                        t = e.attr("tpl");
                    "tu_relate_site" === t && (t += "@" + e.find(".op-tu-relate-site-result").length), n.push(t)
                }), t.log({
                    rsv_imageshow: n.join(":")
                }), $("#page").hide(), $("#wrapper").outerHeight() < $(document).outerHeight() && $("#foot").addClass("foot_fixed_bottom")
            }
        })
    }(), ! function() {
        function e(e) {
            var t = ["voice_beha=1"],
                i = window.bds && bds.util && bds.util.domain ? bds.util.domain.get("http://nsclick.baidu.com") : "http://nsclick.baidu.com";
            for (var n in e) e.hasOwnProperty(n) && t.push(n + "=" + e[n]);
            var o = window["nsIMG" + +new Date] = new Image;
            return o.src = i + "/v.gif?pid=201&" + t.join("&"), !0
        }

        function t(t) {
            t.log = e, t.addStyle(), window.__supportvoice = !0;
            var i = $("#form .ipt_rec");
            i.css("display", "block"), i.click(function() {
                var e = t.init({
                    url: "https://vse.baidu.com/echo.fcgi"
                });
                e.done(function(e) {
                    e.openUI(), e.onfinish(function(e) {
                        var t = e.content.item[0],
                            i = e && e.result ? e.result.corpus_no : "";
                        changeUrl("wd=" + encodeURIComponent(t) + "&rsv_voice=1&hsug_mtype=2&rsv_vcorpus=" + encodeURIComponent(i)), bds.comm.lastVoiceQuery = t
                    }), t.log({
                        q: "resolve"
                    })
                }).fail(function() {
                    t.log({
                        q: "reject"
                    }), alert("不能获得麦克风的权限")
                }), t.log({
                    q: "start"
                })
            })
        }(location.href.match(/voice=1/) || navigator.userAgent.match(/mac os x/i)) && require(["plugins/swfobject", "voice/js/voice"], function(e, i) {
            var n = i;
            n && n.support() && (t(n), $(window).on("index_off", function() {
                n && n.destroy && (n.destroy(), $("#form .ipt_rec").unbind("click")), n = i, t(n)
            }))
        })
    }(), $(document).ready(function() {
        bds.comm && bds.comm.ishome && !$(".s_tab .s_tab_inner").get(0) && $(".s_tab").wrapInner("<div class='s_tab_inner'></div>")
    }), $(window).on("swap_end", function() {
        require(["plugins/title_highlight"], function(e) {
            e.init()
        }), require(["plugins/compatible_ipad_input"], function(e) {
            e()
        })
    }),
    function() {
        require(["modules/page"], function(e) {
            var t, i = new e.PageModule,
                n = i.resultDI;
            $(window).on("swap_dom_ready", function() {
                i.updated()
            }).on("swap_end", function(e, i) {
                require(["modules/result"], function(e) {
                    t = new e.ResultModule(n, i)
                })
            }).on("swap_begin", function() {
                t && t.destroy()
            }).on("confirm", function() {
                t && t.asyncConfirm()
            }), $(document).ready(function() {
                i && i.domReady()
            }), $(window).load(function() {
                i && i.onload()
            })
        })
    }();