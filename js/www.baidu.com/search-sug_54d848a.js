define("@baidu/search-sug/sug/index", ["require"], function(require) {
    function checkHsugIn(e) {
        return window.__sample_hsug_length ? e.length >= 4 || encodeURIComponent(e).length >= 18 : e.length >= 4 || encodeURIComponent(e).length >= 18
    }

    function checkHsugShow(e) {
        return e.length >= 1 && encodeURIComponent(e).length > 3
    }

    function SUGOBJ(e) {
        var t = this,
            e = t.opts = e || {};
        t.ipt = e.ipt || null, t.reverse = e.reverse || !1, t.form = e.form || null, t.submission = e.submission || null, t.maxNum = e.maxNum || 10, t.bds = e.bds || null, t.sids = t.bds && t.bds.comm && t.bds.comm.sid, t.withoutMode = e.withoutMode || !1, t.withoutRich = e.withoutRich || !1, t.withoutStat = e.withoutStat || !1, t.withoutZhixin = e.withoutZhixin || !1, t.visible = !1, t.stopRefresh = !1, t.renderCallback = e.renderCallback || function() {}, t.selectCallback = e.selectCallback || function() {}, t.storestr = t.storestr || "", t.storearr = t.storearr || [], t.zhixinsug = [], t.zhixintemplate = {}, t.zhixinused = {}, t.zhixindata = {}, t.query = t.ipt && t.ipt.value || "", t.inputValue = t.query, t.showValue = t.query, t.sugValue = "", t.queryValue = "", t.reqValue = "", t.value = t.query, t.index = -1, t.sugcontainer, t.dataCached = {}, t.dataArray = [], t.dataStored = [], t.dataAladdin = [], t.dataDirect = [], t.directSugSelected = !1, t.dataHot = [], t.timer, t.rsv_sug = 0, t.rsv_sug1 = 0, t.rsv_sug3 = 0, t.rsv_sug4 = 0, t.rsv_sug7 = [0, 0, 0], t.rsv_sug9 = 0, t.initTime = 0, t.inputT = 0, t.rsv_bp = e && e.comm && 1 === e.comm.ishome ? 0 : 1, t.jqXhr = null, t.ipt && t.init(), t.pwd = "", t.hisSwitch = e.hisSwitch, t.useFeedback = e.useFeedback, t.sugprod = e.prod || "", t.tn = e.tn || ""
    }

    function xss(e) {
        return e.toString().replace(/[<%3C]/g, "&lt;").replace(/[>%3E]/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }
    var bds = window.bds || {};
    bds.se = bds.se || {}, bds.se.store = function() {
        function e() {
            try {
                return u in r && r[u]
            } catch (e) {
                return !1
            }
        }

        function t() {
            try {
                return d in r && r[d] && r[d][r.location.hostname]
            } catch (e) {
                return !1
            }
        }

        function s(e) {
            return function() {
                var t = Array.prototype.slice.call(arguments, 0);
                t.unshift(n), l.appendChild(n), n.addBehavior("#default#userData"), n.load(u);
                var s = e.apply(i, t);
                return l.removeChild(n), s
            }
        }

        function a(e) {
            return "_" + e
        }
        var n, i = {},
            r = window,
            o = r.document,
            u = "localStorage",
            d = "globalStorage",
            c = "__storejs__";
        if (i.disabled = !1, i.set = function() {}, i.get = function() {}, i.remove = function() {}, i.clear = function() {}, i.transact = function(e, t, s) {
                var a = i.get(e);
                null == s && (s = t, t = null), "undefined" == typeof a && (a = t || {}), s(a), i.set(e, a)
            }, i.getAll = function() {}, i.serialize = function(e) {
                return String(e)
            }, i.deserialize = function(e) {
                return "string" != typeof e ? void 0 : e
            }, e()) n = r[u], i.set = function(e, t) {
            return void 0 === t ? i.remove(e) : void n.setItem(e, i.serialize(t))
        }, i.get = function(e) {
            return i.deserialize(n.getItem(e))
        }, i.remove = function(e) {
            n.removeItem(e)
        }, i.clear = function() {
            n.clear()
        }, i.getAll = function() {
            for (var e = {}, t = 0; t < n.length; ++t) {
                var s = n.key(t);
                e[s] = i.get(s)
            }
            return e
        };
        else if (t()) n = r[d][r.location.hostname], i.set = function(e, t) {
            return void 0 === t ? i.remove(e) : void(n[e] = i.serialize(t))
        }, i.get = function(e) {
            return i.deserialize(n[e] && n[e].value)
        }, i.remove = function(e) {
            delete n[e]
        }, i.clear = function() {
            for (var e in n) delete n[e]
        }, i.getAll = function() {
            for (var e = {}, t = 0; t < n.length; ++t) {
                var s = n.key(t);
                e[s] = i.get(s)
            }
            return e
        };
        else if (o.documentElement.addBehavior) {
            var l, m;
            try {
                m = new ActiveXObject("htmlfile"), m.open(), m.write("<script>document.w=window</script><iframe src='/favicon.ico'></iframe>"), m.close(), l = m.w.frames[0].document, n = l.createElement("div")
            } catch (g) {
                n = o.createElement("div"), l = o.body
            }
            i.set = s(function(e, t, s) {
                return t = a(t), void 0 === s ? i.remove(t) : (e.setAttribute(t, i.serialize(s)), void e.save(u))
            }), i.get = s(function(e, t) {
                return t = a(t), i.deserialize(e.getAttribute(t))
            }), i.remove = s(function(e, t) {
                t = a(t), e.removeAttribute(t), e.save(u)
            }), i.clear = s(function(e) {
                var t = e.XMLDocument.documentElement.attributes;
                e.load(u);
                for (var s, a = 0; s = t[a]; a++) e.removeAttribute(s.name);
                e.save(u)
            }), i.getAll = s(function(e) {
                var t = e.XMLDocument.documentElement.attributes;
                e.load(u);
                for (var s, a = {}, n = 0; s = t[n]; ++n) a[s] = i.get(s);
                return a
            })
        }
        try {
            i.set(c, c), i.get(c) != c && (i.disabled = !0), i.remove(c)
        } catch (g) {
            i.disabled = !0
        }
        return i
    }();
    var ImeTrack = function() {
            function e(e) {
                var t = 0;
                if (document.selection) {
                    e.focus();
                    var s = document.selection.createRange(),
                        a = 0;
                    e && e.value && (a = e.value.length), s.moveStart("character", -a), t = s.text.length - 1
                } else(e.selectionStart || "0" === e.selectionStart) && (t = e.selectionStart);
                return t
            }

            function t(t) {
                function s(e) {
                    n.ipt.value !== n.oldval && (n.oldval = n.ipt.value, n.inputchangeHandle(e))
                }

                function a() {
                    for (var e = 0, t = n.logs.length - 1; t < n.logs.length - 1; t--)
                        if (-1 === n.logs[t].type.indexOf("unval-")) return n.logs[t].time;
                    return e
                }
                var n = this;
                n.logs = [], n.opts = t || {}, n.opts.logmaxnum = t.logmaxnum || 10, n.opts.adv = t.adv || !1, this.onLogChange = t.onLogChange, void 0 === n.opts.innerchange && (n.opts.innerchange = !0), n.ipt = document.getElementById(n.opts.iptId), n._kdcode = 0, n._kdevt = {}, n._keyposition = 0, n.ipt.onkeydown = function(e) {
                    var t = e || window.event;
                    n._kdcode = t.keyCode || t.which, n._kdevt = t
                }, n.ipt.onkeyup = function(t) {
                    var s = t || window.event,
                        a = s.keyCode || s.which;
                    n.ipt.value || "", e(n.ipt), n._kdcode && (n.addLog({
                        ku: a,
                        type: "upsave"
                    }), n._kdcode = 0, n._kdevt = {}, n.oldval = n.ipt.value)
                }, n.ipt.onpaste = function() {
                    n.addLog(n._kdevt.ctrlKey ? {
                        type: "unval-paste-key"
                    } : {
                        type: "unval-paste-mouse"
                    })
                }, n.oldval = n.ipt.value || "", n.inputchangeHandle = function() {
                    if (n._kdcode) n.addLog({
                        type: "unval-change-key"
                    });
                    else {
                        var e = "";
                        n.logs.length && (new Date).getTime() - a() < 300 && (e = "unval-"), n.addLog({
                            type: e + "change-unkey"
                        })
                    }
                }, n.timmer, n.opts.innerchange && (n.ipt.onfocus = function(e) {
                    n.timmer = setInterval(function() {
                        s(e)
                    }, 200)
                }, n.ipt.onblur = function() {
                    clearInterval(n.timmer)
                })
            }
            return t.prototype = {
                checkLog: function(e) {
                    for (var t = this.logs.length, s = !1; t > 0;) t--, -1 !== this.logs[t].type.indexOf("unval-") ? (e.type = (-1 === e.type.indexOf("unval-") ? "" : "unval-") + this.logs[t].type.replace("unval-", "") + "-" + e.type.replace("unval-", ""), this.logs[t] = e, s = !0) : t = -2;
                    if (s) return !1;
                    for (; this.logs.length >= this.opts.logmaxnum;) this.logs.shift();
                    return !0
                },
                analyseLog: function() {
                    function t() {
                        if (s.opts.adv)
                            for (var e = 0; e < i.length; e++) i.charCodeAt(e) > 256 && (o = i.substring(0, e + 1), u = i.substring(e + 1))
                    }
                    var s = this;
                    if (this.logs.length > 0 && -1 === this.logs[this.logs.length - 1].type.indexOf("unval")) {
                        var a = this.logs[this.logs.length - 1],
                            n = a.val.substring(0, a.start),
                            i = a.val.substring(a.start, a.cursor),
                            r = a.val.substring(a.cursor),
                            o = "",
                            u = "";
                        229 === a.kd ? i.charCodeAt(i.length - 1) > 256 || !i.match(/[\x00-\x80]/g) ? (this._keyposition = e(this.ipt), a.type += "-endime", 0 === i.length && (a.type += "-cancelime")) : (a.type += "-imeinput", t()) : a.type.indexOf("paste-mouse") > -1 ? this._keyposition = e(this.ipt) : a.type.indexOf("change-unkey") > -1 ? 0 === i.length ? (this._keyposition = e(this.ipt), this.logs.length > 1 && this.logs[this.logs.length - 2].type.indexOf("upsave") > -1 && (a.type += "-link")) : i.charCodeAt(i.length - 1) > 256 || !i.match(/[\x00-\x80]/g) ? (this._keyposition = e(this.ipt), a.type += "-endime") : (a.type += "-imeinput", t()) : this._keyposition = e(this.ipt), this.opts.adv && (a.type += "-adv", a.strA = n, a.strB = i, a.strB1 = o, a.strB2 = u, a.strC = r), this.onLogChange && this.onLogChange.call(this, a)
                    }
                },
                addLog: function(t) {
                    t.kd = this._kdcode, t.val = this.ipt.value, t.start = this._keyposition, t.cursor = e(this.ipt), t.type = t.type || 0, t.time = (new Date).getTime(), (0 === this.logs.length || this.logs[this.logs.length - 1].val !== t.val || -1 !== this.logs[this.logs.length - 1].type.indexOf("unval-") || -1 !== t.type.indexOf("unval-")) && (this.checkLog(t) && this.logs.push(t), this.analyseLog())
                },
                getLog: function() {
                    var e = this.logs.slice(0);
                    return e
                },
                triggerInputChange: function(e) {
                    this.inputchangeHandle(e)
                },
                diffLog: function() {
                    for (var e = [], t = !1, s = 0; s < this.logs.length; s++)
                        if (0 !== s) {
                            var a = this.logs[s];
                            if (a.strB && a.strA) {
                                if (0 === a.strB.length && a.strA.length < this.logs[s - 1].strA.length) {
                                    e = [];
                                    continue
                                }
                                if (a.type.indexOf("link") > -1 || a.type.indexOf("paste") > -1) {
                                    e = [];
                                    continue
                                }
                            }
                            var n = a.time - this.logs[s - 1].time;
                            n > 3e3 && (e = []);
                            var i = 0,
                                r = (a.val.match(/[^\x00-\x80]/g) || []).length - (this.logs[s - 1].val.match(/[^\x00-\x80]/g) || []).length;
                            r > 0 ? i = 1 : r = (a.val.match(/[\x00-\x80]/g) || []).length - (this.logs[s - 1].val.match(/[\x00-\x80]/g) || []).length, a.type.indexOf("ime") > -1 ? (i += 2, t = !0) : a.type.indexOf("unval") > -1 && t ? i += 2 : t = !1, r > 0 && e.push(i, r, n)
                        } return e
                }
            }, t
        }(),
        bdSug = function(e) {
            var t = new SUGOBJ(e);
            return t.outInterface()
        },
        supportInputEvent = "oninput" in document.createElement("input") && !navigator.userAgent.match(/MSIE 9/) && !navigator.userAgent.match(/chrome\/(28|29|30|31)/i),
        BDSUG_TIMESTAMP_START = 14183424e5,
        BDSUG_QUERY_LEV = 4;
    return SUGOBJ.prototype = {
        updateInitData: function(type) {
            var me = this,
                opts = me.opts || {};
            me.setsug = !0, me.setsugstorage = !0, me.sets = {}, me.sugcookie = navigator.cookieEnabled && /sug=(\d)/.test(document.cookie) ? RegExp.$1 : 3, me.sugstorecookie = navigator.cookieEnabled && /sugstore=(\d)/.test(document.cookie) ? RegExp.$1 : 1, me.bds && me.bds.comm && me.bds.comm.personalData && (me.sets = "string" == typeof me.bds.comm.personalData ? eval("(" + me.bds.comm.personalData + ")") : me.bds.comm.personalData), me.sets.errno && 0 === me.sets.errno && me.sets.sugSet && me.sets.sugSet.ErrMsg && "SUCCESS" === me.sets.sugSet.ErrMsg ? "0" === me.sets.sugSet.value && (me.setsug = !1) : "0" === me.sugcookie && (me.setsug = !1), me.sets.errno && 0 === me.sets.errno && me.sets.sugStoreSet && me.sets.sugStoreSet.ErrMsg && "SUCCESS" === me.sets.sugStoreSet.ErrMsg ? "0" === me.sets.sugStoreSet.value && (me.setsugstorage = !1) : "0" === me.sugstorecookie && (me.setsugstorage = !1), me.loggedon = me.bds && me.bds.se.store && !me.bds.se.store.disabled && navigator.cookieEnabled, me.showsug = opts.showsug ? opts.showsug : me.setsug, me.showsugstore = opts.showsugstore ? opts.showsugstore : me.showsug && me.loggedon && me.setsugstorage, me.query = me.bds.comm.query, me.pinyin = me.bds.comm.pinyin, me.sugHost = me.bds.comm.sugHost || "", me.sid = navigator.cookieEnabled && /H_PS_PSSID=([0-9_]+)/.test(document.cookie) ? RegExp.$1 : me.bds.comm.sid;
            var canWriteStore = !0,
                isLogin = me.bds && me.bds.comm && me.bds.comm.username;
            (isLogin || me.bds && me.bds.se && me.bds.se.store && 1 == me.bds.se.store.get("wwwPassLogout")) && (canWriteStore = !1), me.bds && me.bds.comm && me.bds.comm.sampleval && $.inArray("sample_his", me.bds.comm.sampleval) > -1 && (canWriteStore = !0), ("init" !== type || document.referrer) && canWriteStore && me.writeStore(), me.bds.se.store.set("wwwPassLogout", 0), "武汉疫情" !== me.ipt.value ? $(me.form).removeClass("yy_fm yy_fm_blue fm_red").find(".s_btn").val("百度一下") : me.bds && me.bds.comm && 0 === me.bds.comm.ishome && $(me.form).addClass("fm_red").removeClass("yy_fm_blue").find(".s_btn").val("武汉加油")
        },
        check: function() {
            var e = this;
            e.value !== e.ipt.value && e.showValue !== e.ipt.value && (e.inputValue = e.showValue = e.value = e.ipt.value, e.bds && e.bds.comm && 0 === e.bds.comm.ishome && e.addStat("oq", e.bds.comm.confirmQuery ? xss(e.bds.comm.confirmQuery) : ""), e.bds && e.bds.comm && e.bds.comm.confirmQid && e.addStat("rsv_pq", e.bds.comm.confirmQid), $(e.ipt).trigger("inputChange", [e]), e.toggleStyle(), e.request(e.value))
        },
        startCircle: function() {
            var e = this;
            e.timer || ($(e.ipt).trigger("start", [e]), e.timer = setTimeout(function() {
                e.check(), e.timer = setTimeout(arguments.callee, 200)
            }, 200), supportInputEvent && $(e.ipt).bind("input", function() {
                e.check()
            }))
        },
        stopCircle: function() {
            var e = this;
            e.timer && (clearTimeout(e.timer), supportInputEvent && $(e.ipt).unbind("input"), e.timer = null, $(e.ipt).trigger("stop", [e]))
        },
        callback: function(e, t) {
            function s(e) {
                a.zhixintemplate[e] && !a.zhixinused[e] && (a.zhixinused[e] = $.ajax({
                    crossDomain: !0,
                    url: a.zhixintemplate[e],
                    dataType: "script",
                    scriptCharset: "UTF-8"
                }))
            }
            var a = this;
            if (e && e.exp) {
                var n = a.stat.rsv_sug6 || "";
                n.length > 0 && e.exp.length > 0 && -1 === n.indexOf(e.exp) ? n += "_" + e.exp : n = e.exp, a.addStat("rsv_sug6", n)
            }
            if (e && (e.g || e.z || a.checkStore(e) && a.checkStore(e).length > 0)) {
                if (a.queryValue = e.q, e.q && 2 !== t && (a.dataCached[e.q] = e), $(a.ipt).trigger("dataReady", [a]), !a.withoutZhixin && e.zzx)
                    for (var i = 0; i < e.zzx.length; i++) e.zzx[i] && e.zzx[i].type && (a.zhixinsug.push({
                        value: e.g[i].q,
                        type: e.zzx[i].type,
                        url: e.zzx[i].url
                    }), s(e.zzx[i].type));
                a.dataArray = a.packData(e), a.render(a.dataArray)
            } else a.hideSug()
        },
        buildUrl: function(e, t, s) {
            var a = this,
                n = a.sid.replace(/_/g, ","),
                i = "pc";
            a.sugprod && (i = a.sugprod);
            var r = "/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=" + i + "&from=pc_web" + (n ? "&sugsid=" + n : ""),
                o = (a.sugHost || "http://suggestion.baidu.com/su", "");
            if ("" === e) {
                var u = [],
                    d = [];
                try {
                    var c = a.bds.se.store.get("BDSUGSTORED");
                    u = c && $.parseJSON(c) || []
                } catch (l) {}
                for (var m = 0; m < u.length; m++) {
                    var g = u[m].t ? 1 * u[m].t + BDSUG_TIMESTAMP_START : (new Date).getTime();
                    g = Math.round(g / 1e3);
                    var p = {
                        time: g,
                        kw: decodeURIComponent(u[m].q)
                    };
                    u[m].s && u[m].s > BDSUG_QUERY_LEV && (p.fq = u[m].s - BDSUG_QUERY_LEV + 1), d.push(p), d.length > 10 && d.shift()
                }
                r = "/sugrec?", o = "prod=pc_his&from=pc_web&json=1&sid=" + a.sid + "&hisdata=", $.stringify && d.length && (o += encodeURIComponent($.stringify(d))), !window.__sam_his_hot || a.bds && a.bds.comm && a.bds.comm.username || (o += "&type=4"), o += "&_t=" + (new Date).getTime()
            }
            if (a.withoutZhixin ? "" : "&zxmode=1", a.sugcookie > 0 && (a.sugcookie = 3), "" === e) var h = r + o;
            else var h = r + "&wd=" + encodeURIComponent(e);
            return bds.comm.supportis && (h += "&req=2"), window.bds && bds.comm && bds.comm.cur_query && (h += "&bs=" + encodeURIComponent(bds.comm.cur_query)), window.bds && bds.comm && bds.comm.cur_disp_query && (h += "&pbs=" + encodeURIComponent(bds.comm.cur_disp_query)), !window._is_sugemptyhot_sam || !bds.comm.ishome || bds.comm.username || e || s ? e || s || (h += "&sc=eb") : h += "&sc=hot", a.ipt && (h += "&csor=" + getCursortPosition(a.ipt)), a.pwd && (h += "&pwd=" + encodeURIComponent(a.pwd)), a.pwd = e, h
        },
        request: function(e, t) {
            var s = this;
            if (e && (e = $.limitWd(e, 160)), s.directSugSelected = !1, "_blank" === $(s.form).attr("target") && 1 === $(s.ipt).attr("data-bfocus")) $(s.ipt).focus().attr("data-bfocus", 0);
            else if (s.showsug) {
                if (s.reqValue = e, 2 !== t && s.dataCached[e]) return void s.callback(s.dataCached[e]);
                s.jqXhr && s.jqXhr.abort(), s.jqXhr = $.ajax("" === e ? {
                    type: "GET",
                    dataType: "json",
                    async: !0,
                    url: s.buildUrl(e, t),
                    timeout: 5e3,
                    xhrFields: {
                        withCredentials: !0
                    },
                    crossDomain: !0,
                    success: function(e) {
                        s.callback(e, t)
                    },
                    always: function() {
                        s.jqXhr = null
                    }
                } : {
                    dataType: "jsonp",
                    async: !0,
                    url: s.buildUrl(e, t),
                    jsonp: "cb",
                    timeout: 5e3,
                    success: function(e) {
                        s.callback(e, t)
                    },
                    always: function() {
                        s.jqXhr = null
                    }
                }), s.rsv_sug3++, s.addStat("rsv_sug3", s.rsv_sug3), s.initTime = (new Date).getTime()
            }
        },
        packData: function(e) {
            var t = this,
                s = [];
            t.checkHot(e), t.checkAla(e), t.checkStore(e), t.bds.comm.supportis || t.checkDirect(e);
            for (var a = t.mergeData(e), n = 0; n < a.length; n++) {
                if (t.bds && t.bds.comm && 1 === t.bds.comm.ishome && t.bds.comm.supportis) {
                    if (n > 9) break
                } else if (t.bds && t.bds.comm && 0 === t.bds.comm.ishome && t.bds.comm.supportis && ("store" === a[n].type || "hot" === a[n].type)) {
                    if (n > t.maxNum - 1 + 5) break
                } else if (n > t.maxNum - 1) break;
                t.reverse ? s.unshift(a[n]) : s.push(a[n])
            }
            return s
        },
        checkHot: function(e) {
            var t = this;
            if (t.dataHot = [], e.g && e.g.length)
                for (var s = 0; s < e.g.length; s++) {
                    var a = e.g[s];
                    a.t && "hot" === a.t ? t.dataHot.push({
                        value: a.q,
                        otherData: a.st
                    }) : !window.__sam_his_hot || !a.t || "hs" !== a.t || window.me.bds && t.bds.comm && t.bds.comm.username || t.dataHot.push({
                        value: a.q,
                        otherData: a.st
                    })
                }
        },
        checkDirect: function(e) {
            var t = this;
            if (t.dataDirect = [], e.tzx && "6" === e.tzx.type && e.tzx.info) {
                var s = e.tzx.info;
                t.dataDirect.push({
                    value: s.site,
                    otherData: s
                })
            }
        },
        checkAla: function(e) {
            var t = this;
            if (t.dataAladdin = [], e.z && e.z.length > 0 && !t.withoutRich)
                for (var s = 0; s < e.z.length; s++) {
                    var a = e.z[s];
                    a.id && a.type && a.key && a.word && t.dataAladdin.push({
                        value: a.key,
                        otherData: a
                    })
                } else t.dataAladdin = []
        },
        writeStore: function() {
            var e = this;
            if (e.showsugstore && e.query && e.pinyin && checkHsugIn(e.query)) {
                e.getStore();
                var t = encodeURIComponent(e.query.toLowerCase()),
                    s = encodeURIComponent(e.pinyin.toLowerCase()),
                    a = BDSUG_QUERY_LEV,
                    n = (new Date).getTime() - BDSUG_TIMESTAMP_START,
                    i = -1;
                $.each(e.storearr, function(e, r) {
                    r.p === s && (r.q = t, a = (r.s || BDSUG_QUERY_LEV) + 1, r.t = n, i = e)
                }), i > -1 && e.storearr.splice(i, 1), e.storearr.push({
                    q: t,
                    p: s,
                    s: a,
                    t: n
                }), e.storearr.length > 50 && e.storearr.shift(), e.setStore()
            }
        },
        checkStore: function(e) {
            var t = this;
            if (t.dataStored = [], t.showsugstore && checkHsugShow(t.value)) {
                if (e && e.g && e.g.length)
                    for (var s = 0; s < e.g.length; s++) {
                        var a = e.g[s];
                        a.type && ("his_normal" === a.type || "his_rec" === a.type) && $.trim(a.q) && t.dataStored.push({
                            value: $.trim(a.q),
                            pinyin: "|",
                            s: 4,
                            t: ""
                        })
                    }
                0 === t.dataStored.length && (t.getStore(), $.each(t.storearr, function(e, s) {
                    var a = decodeURIComponent(s.q),
                        n = decodeURIComponent(s.p);
                    (0 === a.indexOf(t.value.toLowerCase()) || 0 === n.indexOf(t.value.toLowerCase())) && t.dataStored.unshift({
                        value: a,
                        pinyin: n,
                        s: s.s,
                        t: s.t
                    })
                }))
            } else if (t.showsugstore && "" === t.value) {
                if (e && e.g && e.g.length)
                    for (var s = 0; s < e.g.length; s++) {
                        var a = e.g[s];
                        a.type && ("his_normal" === a.type || "his_rec" === a.type) && $.trim(a.q) && t.dataStored.push({
                            value: $.trim(a.q),
                            pinyin: "|",
                            s: 4,
                            t: ""
                        })
                    }!window._is_sugempty_sam || t.bds && t.bds.comm && t.bds.comm.username || (t.getStore(), $.each(t.storearr, function(e, s) {
                        var a = decodeURIComponent(s.q),
                            n = decodeURIComponent(s.p);
                        t.dataStored.unshift({
                            value: a,
                            pinyin: n,
                            s: s.s,
                            t: s.t
                        })
                    }))
            }
            return t.dataStored
        },
        placeHolder: function(e) {
            var t = this;
            t.placeholder = e || "", $(t.ipt).attr("placeholder", t.placeholder)
        },
        getStore: function() {
            var e = this;
            try {
                e.storestr = e.bds.se.store.get("BDSUGSTORED"), e.storearr = e.storestr && $.parseJSON(e.storestr) || []
            } catch (t) {
                e.storestr = "[]", e.storearr = []
            }
            $.each(e.storearr, function(e, t) {
                t.t = t.t || 0, t.s = t.s || 4
            })
        },
        setStore: function() {
            var e = this,
                t = "";
            $.each(e.storearr, function(e, s) {
                t += (0 === e ? "" : ",") + '{"q":"' + s.q + '","p":"' + s.p + '","s":' + s.s + ',"t":' + s.t + "}"
            }), e.storestr = "[" + t + "]";
            try {
                e.bds.se.store.set("BDSUGSTORED", e.storestr)
            } catch (s) {}
        },
        mergeData: function(e) {
            function t(e, t, a, n) {
                function i(e, t) {
                    var e = $.subByte(e, "41");
                    return t && e ? (e = $.trim(e), t = $.trim(t), e = 0 === e.indexOf(t) && e !== t ? r(e, t) : o(e)) : e = o(e), e
                }

                function r(e, t) {
                    e = o(e), t = o(t);
                    var s = t,
                        a = t.length,
                        n = "<b>" + e.substring(a) + "</b>";
                    return s + n
                }

                function o(e) {
                    return e = e.replace(/&/g, "&amp;"), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;")
                }
                var u = {};
                u.value = e;
                var d = i(e, s.queryValue);
                switch (t) {
                    case "direct":
                        u.html = "-" === a.iconurl ? '<p link="' + a.siteurl + '">' + a.site + "<span>" + a.showurl + "</span><i>官网</i></p>" : '<p link="' + a.siteurl + '"><img src="' + a.iconurl + '"/>' + a.site + "<span>" + a.showurl + "</span></p>", u.type = "direct";
                        break;
                    case "ala":
                        u.html = "<h3>" + d + "</h3><p>" + a.word + "</p>", u.type = "ala", u.alaid = a.id;
                        break;
                    case "store":
                        2 === a["new"] && (d += '<span class="bdsug-newicon">&nbsp;[<i>企业</i>]</span>'), u.html = "<span>" + d + "</span>", (s.bds.comm.username || "|" !== a) && (u.html += '<u class="bdsug-store-del ' + ("|" === a ? "bdsug-store-del-cloud" : "") + '" title="如您不需要此搜索历史提示，&#13;可在右上角搜索设置中关闭">删除</u>'), u.type = "store", u.pinyin = a, u.s = n;
                        break;
                    default:
                        a && a["new"] && 2 === a["new"] && (d += '<span class="bdsug-newicon">&nbsp;[<i>企业</i>]</span>'), u.html = d
                }
                if (!s.withoutZhixin && s.zhixinsug.length > 0)
                    for (var c = 0; c < s.zhixinsug.length; c++)
                        if (u.value === s.zhixinsug[c].value && "ala" !== u.type) {
                            u.zxtype = s.zhixinsug[c].type, u.zxurl = s.zhixinsug[c].url;
                            var l = '<i class="bdsug-arrow"></i>';
                            u.html.split(l).length <= 1 && (u.html += l)
                        } return u
            }
            var s = this,
                a = [],
                n = 0,
                i = 0;
            if (s.rsv_sug = 0, s.dataHot.length > 0 && "" === s.value) {
                for (var r = 0; r < s.dataHot.length && (n++, a.push(t(s.dataHot[r].value, "hot", s.dataHot[r].otherData)), !(n >= 8)); r++);
                return a
            }
            if (s.dataDirect.length > 0 && (a.push(t(s.dataDirect[0].value, "direct", s.dataDirect[0].otherData)), ns_c({
                    pj_name: "zhida_sug",
                    zhida_prefix: encodeURIComponent(s.inputValue),
                    zhida_query: encodeURIComponent(s.dataDirect[0].value),
                    zhida_chufa: encodeURIComponent(s.dataDirect[0].otherData.hit_q),
                    zhida_bp: s.bds.comm.ishome ? 0 : 1
                })), s.dataAladdin.length > 0)
                for (var r = 0; r < s.dataAladdin.length && (a.push(t(s.dataAladdin[0].value, "ala", s.dataAladdin[0].otherData)), n++, !(n >= 1)); r++);
            if (s.dataStored.length > 0)
                for (var r = 0; r < s.dataStored.length; r++) {
                    for (var o = !1, u = 0; u < a.length; u++) "direct" !== a[u].type && s.dataStored[r].value === a[u].value && (o = !0);
                    if (o || (a.push(t(s.dataStored[r].value, "store", s.dataStored[r].pinyin, s.dataStored[r].s || 0)), n++, 0 === i && "|" === s.dataStored[r].pinyin && (i = 3)), s.rsv_sug++, "" === s.value && n >= 9) break;
                    if ("" !== s.value && n >= 2) break
                }
            var d = [];
            if (e.g && e.g.length > 0) {
                for (var r = 0; r < e.g.length; r++)
                    if ("sug" === e.g[r].type) {
                        for (var o = !1, u = 0; u < a.length; u++) "direct" !== a[u].type && e.g[r].q === a[u].value && (o = !0);
                        o || (d.push(t(e.g[r].q, e.g[r].type, e.g[r].st)), i = i ? i : 1)
                    } a = "" === s.value && d.length ? s.bds.comm.supportis ? d.slice(0, Math.max(4 - a.length, 2)).concat(a) : d.slice(0, Math.max(10 - a.length, 5)).concat(a) : a.concat(d)
            }
            switch (i) {
                case 1:
                    s.rsv_sug7[0] = 1;
                    break;
                case 3:
                    s.rsv_sug7[2] = 1
            }
            return a
        },
        render: function(e) {
            var t = this;
            if (t.is_selecting = !1, t.sugcontainer || (t.sugcontainer = document.createElement("DIV"), t.sugcontainer.className = "bdsug bdsug-new", $(t.sugcontainer).delegate("li", "mouseenter", function() {
                    var e = $(this).data("key");
                    t.blurSug($(t.sugcontainer).find("li")), t.focusSug(this, e), t.index = $(t.sugcontainer).find("li").index($(this)), t.hoverSug = e
                }).delegate("li", "mouseleave", function() {
                    $(this).removeClass("bdsug-s")
                }).delegate("li", "click", function() {
                    var e = $(this).data("key"),
                        s = $(".kw-placeholder").hasClass("placeholders-hidden");
                    !s && $(".kw-placeholder").addClass("placeholders-hidden"), t.directSugSelected = $(this).hasClass("bdsug-direct") ? !0 : !1, $(this).hasClass("bdsug-hot") && t.addStat("rsv_sug8", "hot"), t.sugValue = t.showValue = t.value = t.ipt.value = e, t.index = $(t.sugcontainer).find("li").index($(this)), t.hideSug(), t.bds && t.bds.comm && 0 === t.bds.comm.ishome && t.addStat("oq", t.bds.comm.confirmQuery ? xss(t.bds.comm.confirmQuery) : ""), t.bds && t.bds.comm && t.bds.comm.confirmQid && t.addStat("rsv_pq", t.bds.comm.confirmQid), t.addStat("sug", xss(e)), t.addStat("rsv_sug2", 1), t.toggleStyle(), t.formSubmit()
                }), $(t.sugcontainer).click(function(e) {
                    e.stopPropagation()
                })), e.length > 0) {
                for (var s = document.createElement("UL"), a = t.bds && t.bds.util && t.bds.util.domain ? t.bds.util.domain.get("http://sclick.baidu.com") : "http://sclick.baidu.com", n = 0; n < e.length; n++) {
                    var i = document.createElement("LI");
                    if (i.innerHTML = e[n].html, e[n].zxtype && e[n].zxurl) {
                        var r = e[n].value,
                            o = e[n].zxtype,
                            u = e[n].zxurl,
                            d = t.zhixindata[r] && t.zhixindata[r].responseJSON && 0 === t.zhixindata[r].responseJSON.status && t.zhixindata[r].responseJSON.data && t.zhixindata[r].responseJSON.data.length > 0;
                        d || (t.zhixindata[r] = $.ajax({
                            dataType: "jsonp",
                            async: !0,
                            url: u,
                            jsonp: "cb"
                        })), $(i).addClass("bdsug-zx").on("focused", function() {
                            var e = $(this).data("key"),
                                s = t.zhixindata[e] && t.zhixindata[e].responseJSON && 0 === t.zhixindata[e].responseJSON.status && t.zhixindata[e].responseJSON.data && t.zhixindata[e].responseJSON.data.length > 0,
                                a = $(t.sugcontainer).find(".bdsug-box")[0];
                            if (s && a && t.bds.se.sugzx && t.bds.se.sugzx[o]) {
                                var n = t.bds.se.sugzx[o](t.zhixindata[e].responseJSON.data, e, t.outInterface(), t);
                                n instanceof jQuery && ($(t.sugcontainer).addClass("bdsug-showzx"), $(a).empty().append(n), $(t.sugcontainer).height() < $(t.sugcontainer).find(".bdsug-box").height() && $(t.sugcontainer).css({
                                    height: $(t.sugcontainer).find(".bdsug-box").height()
                                }))
                            }
                        }).on("blured", function() {
                            $(t.sugcontainer).removeClass("bdsug-showzx"), $(t.sugcontainer).css({
                                height: "auto"
                            })
                        })
                    }
                    t.setSug(i, e[n].value, e[n].type), s.appendChild(i)
                }
                t.form ? $(t.sugcontainer).insertBefore(t.form.firstChild) : $(t.ipt).after(t.sugcontainer), t.sugcontainer.innerHTML = "", t.sugcontainer.appendChild(s), $(t.sugcontainer).removeClass("bdsug-showzx"), $(t.sugcontainer).css({
                    height: "auto"
                });
                var c = $(t.sugcontainer).find("ul li");
                t.withoutZhixin || ($(t.sugcontainer).addClass("bdsug-showarrow"), $(t.sugcontainer).append($('<div class="bdsug-box"></div>')), $(t.form).find(".bdsug-tmp").length || $(t.form).append($('<div class="bdsug-tmp"></div>')), $(t.sugcontainer).find(".bdsug-box").on("mouseenter", function() {
                    $(t.sugcontainer).addClass("bdsug-showzx"), $(c[t.index]).addClass("bdsug-s")
                }).on("mouseleave", function() {
                    $(t.sugcontainer).removeClass("bdsug-showzx"), $(c[t.index]).removeClass("bdsug-s"), $(t.sugcontainer).css({
                        height: "auto"
                    })
                }).on("click", function(e) {
                    e.stopPropagation()
                })), $(t.form).find(".bdsug-tmp").empty();
                var l = $("<li>").appendTo($("<div>").addClass("bdsug-showzx").appendTo($(t.form).find(".bdsug-tmp"))),
                    m = $("<div>").css({
                        position: "absolute",
                        display: "inline-block",
                        top: "-10000px",
                        left: "-10000px"
                    }).appendTo($(t.form).find(".bdsug-tmp"));
                $.each(c, function(e, s) {
                    m.html($(s).html());
                    var a = 28;
                    m.width() > l.width() - $(t.sugcontainer).find(".bdsug-arrow").width() - a && $(s).addClass("bdsug-overflow")
                });
                var g = "0";
                if (0 === t.bds.comm.ishome ? g = "0" : 1 === t.bds.comm.ishome && window.s_domain && "home" === window.s_domain.base ? g = "2" : 1 === t.bds.comm.ishome && (g = "1"), "" === t.value && e.length) {
                    for (var p = 0, n = 0; n < e.length; n++) e[n].type && "store" === e[n].type && p++;
                    if (ns_c({
                            pj_name: "es_sug",
                            es_sug_hot: t.dataHot.length,
                            es_sug_num: e.length,
                            eb_sug_num: e.length - p,
                            es_sug_bp: g + "_" + (t.bds.comm.supportis ? 1 : 0)
                        }), $(".bdsug-feedback-wrap").length > 0 && $(".bdsug-feedback-wrap").remove(), t.dataStored.length && t.dataStored.length > 3 || t.dataHot.length && t.dataHot.length > 3) {
                        var h = "",
                            v = '<span class="setup_storeSug" style="margin-right:12px; text-decoration:none; cursor:pointer;font-size: 13px; color: #9195a3">关闭历史</span>';
                        t.hisSwitch === !1 && (v = ""), t.bds.comm.username ? (h = '<div style="text-align:right; background:none; height: 25px; line-height: 15px; border-radius: 0 0 10px 10px;padding-bottom: 2px;margin-top: -5px;">' + v + '<span class="del_all_storeSug" style="margin-right:12px; text-decoration:none; cursor:pointer;font-size: 13px; color: #9195a3">删除历史</span><a class="more_storeSug" href="http://i.baidu.com/my/history?from=pssug"target="_blank" style="color:#666; text-decoration:none;margin-right:14px; font-size: 13px; color: #9195a3">更多历史</a></div>', $(t.sugcontainer).append(h)) : (h = '<div style="text-align:right; background:none; height: 25px; line-height: 15px; border-radius: 0 0 10px 10px;padding-bottom: 2px;margin-top: -5px;"><span class="setup_storeSug" style="margin-right:14px; text-decoration:none; cursor:pointer;font-size: 13px; color: #9195a3">关闭历史</span></div>', $(t.sugcontainer).append(h)), $(t.sugcontainer).find(".del_all_storeSug").click(function() {
                            if (t.dataStored[0] && t.dataStored[0].pinyin && "|" === t.dataStored[0].pinyin) {
                                var e = "https://www.baidu.com/recsys/hisproxy/data/usrclear";
                                $.ajax({
                                    type: "POST",
                                    dataType: "json",
                                    scriptCharset: "utf-8",
                                    timeout: 6e3,
                                    url: e,
                                    xhrFields: {
                                        withCredentials: !0
                                    },
                                    crossDomain: !0,
                                    success: function() {}
                                })
                            }
                            t.storearr = [], t.setStore(), t.hideSug();
                            var s = window["BD_PS_C" + (new Date).getTime()] = new Image;
                            s.src = a + "/w.gif?q=delall&fm=beha&rsv_sug=delall&rsv_sid=" + t.bds.comm.sid + "&t=" + (new Date).getTime() + "&rsv_sug9=es_" + g + "_" + (t.bds.comm.supportis ? 1 : 0) + "&path=http://www.baidu.com"
                        }), $(t.sugcontainer).find(".more_storeSug").click(function() {
                            ns_c({
                                pj_name: "hs_sug_more"
                            })
                        }), $(t.sugcontainer).find(".close_hotSug").click(function() {
                            t.hideSug(), ns_c({
                                pj_name: "hot_sug_close"
                            })
                        }), $(t.sugcontainer).find(".setup_storeSug").click(function() {
                            t.bds.event.trigger("bd.se.loadpanel", {
                                tab: "general",
                                tipsConfig: {
                                    content: t.bds && t.bds.comm && t.bds.comm.username ? "关闭该账号下所有设备的搜索历史" : "该选项可以关闭您的历史记录",
                                    wrapper: "#se-setting-5"
                                }
                            }), t.hideSug(), ns_c({
                                pj_name: "hs_sug_setup"
                            })
                        })
                    }
                }
                $.each(c, function(s, n) {
                    if (e[s] && "store" === e[s].type) {
                        var i = s;
                        $(n).find("u").click(function(s) {
                            if (s.stopPropagation(), $(n).remove(), t.bds && t.bds.comm && t.bds.comm.username) {
                                var r = "https://www.baidu.com/recsys/hisproxy/data/usrdelete";
                                $.ajax({
                                    type: "POST",
                                    scriptCharset: "utf-8",
                                    dataType: "json",
                                    timeout: 6e3,
                                    url: r,
                                    data: {
                                        items: JSON.stringify([{
                                            query: e[i].value,
                                            ts: ""
                                        }])
                                    },
                                    xhrFields: {
                                        withCredentials: !0
                                    },
                                    crossDomain: !0,
                                    success: function() {}
                                })
                            }
                            if (e[i].pinyin && "|" === e[i].pinyin) {
                                t.dataCached = {};
                                var o = !1;
                                $.each(t.storearr, function(e) {
                                    encodeURIComponent(t.dataArray[i].value) === t.storearr[e].q && (o = e)
                                }), o !== !1 && (t.storearr.splice(o, 1), t.setStore())
                            } else {
                                var o = !1;
                                $.each(t.storearr, function(e) {
                                    t.dataArray[i].pinyin === decodeURIComponent(t.storearr[e].p) && (o = e)
                                }), o !== !1 && (t.storearr.splice(o, 1), t.setStore())
                            }
                            var u = window["BD_PS_C" + (new Date).getTime()] = new Image;
                            u.src = a + "/w.gif?q=" + encodeURIComponent(e[i].value) + "&fm=beha&rsv_sug=del&rsv_sid=" + t.bds.comm.sid + "&t=" + (new Date).getTime() + ("" === t.value ? "&rsv_sug9=es_" + g + "_" + (t.bds.comm.supportis ? 1 : 0) : "") + "&path=http://www.baidu.com"
                        })
                    }
                });
                var f = !!window.ActiveXObject && (!document.documentMode || document.documentMode <= 9);
                f || (0 !== $(".bdsug-feedback-wrap").length && $(".bdsug-feedback-wrap").remove(), "" !== t.value && t.useFeedback !== !1 && ($(t.sugcontainer).append('<div class="bdsug-feedback-wrap"><span class="bdsug-feedback">反馈</span></div>'), $(".bdsug-feedback-wrap").on("click", function() {
                    var e = t.dataArray;
                    t.dataArray.forEach(function(t, s) {
                        e[s] = t.value
                    }), t.bds.se.ShortCut.initSugBar(e), t.hideSug()
                }))), $(t.ipt).trigger("render", [t]), t.renderCallback(), t.showSug(), $(t.ipt).trigger("showSug", [t])
            } else t.renderCallback(), t.hideSug()
        },
        setAutocomplete: function(e) {
            var t = this;
            $(t.ipt).attr("autocomplete", e)
        },
        setSug: function(e, t, s) {
            $(e).attr("data-key", t), s && $(e).addClass("bdsug-" + s)
        },
        clickIpt: function() {
            var e = this;
            e.toggleStyle(), e.bds.comm.query && e.ipt.value && e.bds.comm.query === e.ipt.value ? e.request(e.ipt.value, "2") : e.request(e.ipt.value)
        },
        showSug: function() {
            var e = this;
            e.index = -1, e.ipt.value === e.reqValue && (e.bds.comm.ishome ? $(e.ipt).addClass("new-ipt-focus") : $(".s_ipt_wr").addClass("new-ipt-focus"), $(e.sugcontainer).show()), e.visible = !0, e.rsv_sug1++, e.addStat("rsv_sug1", e.rsv_sug1), e.addStat("rsv_sug7", e.rsv_sug7.join(""))
        },
        hideSug: function() {
            var e = this;
            e.is_selecting = !1, $(e.ipt).trigger("hide", [e]), $(e.ipt).removeClass("new-ipt-focus"), $(".s_ipt_wr").removeClass("new-ipt-focus"), $(e.sugcontainer).hide(), e.visible = !1, e.jqXhr && e.jqXhr.abort(), e.jqXhr = null
        },
        selectSug: function(e) {
            var t = this,
                s = $(t.sugcontainer).find("li");
            if (t.blurSug(s), t.directSugSelected = -1 !== e && s.eq(e).hasClass("bdsug-direct") ? !0 : !1, -1 !== e) {
                t.is_selecting = !0;
                var a = $($(s)[e]).data("key");
                t.focusSug(s[e], a), t.sugValue = t.showValue = t.value = t.ipt.value = a, t.toggleStyle(), t.addStat("sug", a), t.bds && t.bds.comm && 0 === t.bds.comm.ishome && t.addStat("oq", t.bds.comm.confirmQuery ? xss(t.bds.comm.confirmQuery) : ""), t.bds && t.bds.comm && t.bds.comm.confirmQid && t.addStat("rsv_pq", t.bds.comm.confirmQid), t.addStat("rsv_n", 1)
            } else t.is_selecting = !1, t.selectCallback(t.inputValue), t.showValue = t.value = t.ipt.value = t.inputValue, t.sugValue = "", t.removeStat("sug"), t.removeStat("rsv_n"), t.toggleStyle();
            t.stopRefresh = t.inputValue || 1 !== t.bds.comm.ishome ? !1 : !0, $(t.ipt).trigger("selectSug", [t, e, a])
        },
        blurSug: function(e) {
            $(e).removeClass("bdsug-s"), $(e).trigger("blured")
        },
        focusSug: function(e, t) {
            var s = this;
            $(e).addClass("bdsug-s"), $(e).trigger("focused"), s.selectCallback(t)
        },
        pressUp: function(e) {
            var t = this,
                e = $(t.sugcontainer).find("li").length;
            t.index--, t.index < -1 && (t.index = e - 1), t.selectSug(t.index)
        },
        pressDown: function(e) {
            var t = this,
                e = $(t.sugcontainer).find("li").length;
            t.index++, t.index >= e && (t.index = -1), t.selectSug(t.index)
        },
        addStat: function(e, t) {
            t = encodeURIComponent(t);
            var s = this;
            if (s.stat || (s.stat = {}), s.stat[e] = t, !s.withoutStat) {
                var a = $(s.form).find('input[type="hidden"][name="' + e + '"]');
                a.length ? $(a).val(t) : $(s.form).append('<input type="hidden" name="' + e + '" value="' + t + '"/>')
            }
        },
        removeStat: function(e) {
            var t = this;
            if (!t.withoutStat && ($(t.form).find('input[type="hidden"][name="' + e + '"]').remove(), !t.stat)) try {
                delete t.stat[e]
            } catch (s) {}
        },
        setNewsRsv: function(e) {
            var t = this;
            "sug" === e ? t.addStat("rsv_dl", "news_t_sug") : "box" === e ? t.addStat("rsv_dl", "news_t_sk") : "his" === e && t.addStat("rsv_dl", "news_t_his")
        },
        clearStat: function() {
            var e = this;
            e.bds && e.bds.comm && e.bds.comm.isAsync && (e.removeStat("rsp"), e.removeStat("prefixsug"), 1 === e.bds.comm.ishome ? e.addStat("rsv_dl", "ib") : "news" === e.tn ? e.setNewsRsv("box") : e.addStat("rsv_dl", "tb")), e.rsv_sug7 = [0, 0, 0], e.removeStat("rsv_n"), e.removeStat("rsv_sug"), e.removeStat("rsv_sug1"), e.removeStat("rsv_sug2"), e.removeStat("rsv_sug3"), e.removeStat("rsv_sug4"), e.removeStat("rsv_sug5"), e.removeStat("rsv_sug6"), e.removeStat("rsv_sug7"), e.removeStat("rsv_sug8"), e.removeStat("rsv_sug9"), e.stat = {}
        },
        getRsvStatus: function(e) {
            var t = this,
                s = [],
                a = [-2];
            if (t.rsv_sug) {
                a = [-1];
                for (var n in t.dataArray) e === t.dataArray[n].value && (a = [0, n], n < t.rsv_sug && (a = [1, n]));
                for (var n = 0; n < t.rsv_sug && t.dataArray[n]; n++) s.push(t.dataArray[n].value.length, t.dataArray[n].s);
                a.push(t.index, t.rsv_sug, s.join("."))
            }
            return a.join("_")
        },
        formSubmit: function(e) {
            var t = this,
                s = !0,
                a = t.bds && t.bds.comm && 1 === t.bds.comm.ishome ? "i" : "t",
                n = "t";
            if ("/" === window.location.pathname && (n = "i"), t.addStat("rsv_btype", n), -1 !== t.index ? (t.addStat("f", 3), t.addStat("prefixsug", xss(t.inputValue)), t.addStat("rsp", t.index), "" === t.inputValue ? "news" === t.tn ? t.setNewsRsv("his") : t.addStat("rsv_dl", a + "h_" + t.index) : "news" === t.tn ? t.setNewsRsv("sug") : t.addStat("rsv_dl", a + "s_" + t.index), t.dataArray[t.index] && t.dataArray[t.index].alaid ? t.addStat("rsv_sug5", t.dataArray[t.index].alaid) : t.removeStat("rsv_sug5")) : t.addStat("f", 8), !t.dataArray[t.index] || "" !== t.inputValue && "|" !== t.dataArray[t.index].pinyin || "store" !== t.dataArray[t.index].type) "" === t.inputValue && t.addStat("rsv_sug9", "eb_" + (t.bds.comm.supportis ? 1 : 0));
            else {
                var i = "0";
                0 === t.bds.comm.ishome ? i = "0" : 1 === t.bds.comm.ishome && window.s_domain && "home" === window.s_domain.base ? i = "2" : 1 === t.bds.comm.ishome && (i = "1"), t.addStat("rsv_sug9", "es_" + i + "_" + (t.bds.comm.supportis ? 1 : 0))
            }
            t.sugValue === t.value ? (t.removeStat("rsv_n"), t.removeStat("sug")) : (t.hoverSug !== t.value || t.sugValue !== t.value) && ("news" === t.tn ? t.setNewsRsv("box") : t.addStat("rsv_dl", a + "b"), t.addStat("f", 8)), 0 !== t.inputT ? (t.addStat("inputT", (new Date).getTime() - t.inputT), t.directInputT = (new Date).getTime() - t.inputT, t.inputT = 0) : t.removeStat("inputT"), 0 !== t.rsv_sug4 && (t.addStat("rsv_sug4", (new Date).getTime() - t.rsv_sug4), t.rsv_sug4 = 0), t.rsv_sug && t.addStat("rsv_sug", t.rsv_sug), $($(t.sugcontainer).find("li")[t.index]).hasClass("bdsug-zx") ? "all" === $(t.sugcontainer).find(".bdsug-box").attr("bdsug-click") ? t.addStat("rsv_sugtp", 1) : t.addStat("rsv_sugtp", 0) : t.removeStat("rsv_sugtp");
            try {
                ! function() {
                    var e = (new Date).getTime();
                    document.cookie = "WWW_ST=" + e + ";expires=" + new Date(e + 1e4).toGMTString()
                }()
            } catch (r) {}
            if ("武汉疫情" !== t.value && $(t.form).removeClass("yy_fm yy_fm_blue fm_red").find(".s_btn").val("百度一下"), 0 === t.index && t.dataDirect.length > 0 && t.directSugSelected) {
                if (window.open($(t.sugcontainer).find(".bdsug-direct p").attr("link"), "_blank"), t.blankHandle(), ns_c({
                        pj_name: "zhida_sug",
                        sug_prefix: encodeURIComponent(t.inputValue),
                        sug_query: encodeURIComponent(t.dataDirect[0].value),
                        sug_siteurl: encodeURIComponent(t.dataDirect[0].otherData.siteurl),
                        sug_chufa: encodeURIComponent(t.dataDirect[0].otherData.hit_q),
                        sug_inputT: t.directInputT ? t.directInputT : 0,
                        rsv_bp: t.bds.comm.ishome ? 0 : 1
                    }), t.bds && t.bds.comm && t.bds.comm.username) {
                    var o = t.bds && t.bds.util && t.bds.util.domain && t.bds.util.domain.get("http://api.open.baidu.com/new_hsug/data/write");
                    o = o + "?query=" + encodeURIComponent(t.dataDirect[0].value) + "&src=1&f=3&st=" + (t.showsugstore ? "1" : "0"), $.ajax({
                        dataType: "jsonp",
                        scriptCharset: "utf-8",
                        jsonp: "cb",
                        timeout: 6e3,
                        url: o,
                        success: function() {}
                    })
                }
                t.index = -1, t.directSugSelected = !1
            } else if ($.isFunction(t.submission) && (s = t.submission.call(t.form, e), t.hideSug(), t.inputValue = t.value, t.dataCached = {}, t.clearStat()), s) {
                var u = t.ipt.value,
                    d = $("#kw").attr("placeholder") || $(".kw-placeholder").text();
                u ? (u = $.limitWd(u), t.ipt.value = t.value = t.inputValue = t.showValue = u) : d && (u = $.limitWd(d), $(".kw-placeholder").hide(), t.ipt.value = t.value = t.inputValue = t.showValue = u, t.addStat("rsv_dq", 1)), t.form.submit(), t.blankHandle()
            }
            "_blank" !== $(t.form).attr("target") && t.addStat("rsv_bp", 1), t.removeStat("rsv_dq")
        },
        blankHandle: function() {
            var e = this;
            /12783|14655|14668/.test(e.bds.comm.sid) ? setTimeout(function() {
                e.ipt.value = e.value = e.inputValue = e.showValue = "", (navigator && navigator.userAgent ? navigator.userAgent : "").match(/(msie [2-8])/i) || $(e.ipt).focus()
            }, 25) : /13488|14654|14667/.test(e.bds.comm.sid) && setTimeout(function() {
                $(e.ipt).select()
            }, 25)
        },
        init: function() {
            var e = this;
            e.setAutocomplete("off"), e.addStat("rsv_bp", e.rsv_bp), e.updateInitData("init"), e.bds.se.sugdnscached || ($.ajax({
                type: "GET",
                dataType: "json",
                async: !0,
                url: e.buildUrl("", "", !0),
                timeout: 5e3,
                xhrFields: {
                    withCredentials: !0
                },
                crossDomain: !0,
                success: function() {}
            }), e.bds.se.sugdnscached = 1), e.imt = new ImeTrack({
                iptId: "kw",
                adv: !0,
                innerchange: !1
            }), $(e.ipt).on("inputChange", function(e, t) {
                t.imt.triggerInputChange(e)
            }), e.startCircle(), e.clearStat(), $(e.ipt).on("click", function(t) {
                t.stopPropagation(), !e.withoutMode && e.clickIpt(), 0 === e.rsv_sug4 && (e.rsv_sug4 = (new Date).getTime())
            }).on("focus", function() {
                e.startCircle()
            }).on("keydown", function(t) {
                t = t || window.event, 0 === e.inputT && (e.inputT = (new Date).getTime()), 0 === e.rsv_sug4 && (e.rsv_sug4 = (new Date).getTime()), (9 === t.keyCode || 27 === t.keyCode) && e.hideSug(), 13 === t.keyCode && e.addStat("rsv_sug2", 0), 86 === t.keyCode && t.ctrlKey && e.addStat("rsv_n", 2), e.sugcontainer && "none" !== e.sugcontainer.style.display ? (38 === t.keyCode && (t.preventDefault(), e.pressUp()), 40 === t.keyCode && (t.preventDefault(), e.pressDown())) : (38 === t.keyCode || 40 === t.keyCode) && (t.preventDefault(), e.toggleStyle(), e.request(e.value))
            }), e.form && $(e.form).submit(function(t) {
                return e.bds && e.bds.comm && 0 === e.bds.comm.ishome && e.addStat("oq", e.bds.comm.confirmQuery ? xss(e.bds.comm.confirmQuery) : ""), e.bds && e.bds.comm && e.bds.comm.confirmQid && e.addStat("rsv_pq", e.bds.comm.confirmQid), e.formSubmit(t), !1
            })
        },
        toggleStyle: function() {
            var e = this;
            return e.bds && e.bds.comm && 1 === e.bds.comm.ishome ? !1 : void("武汉疫情" === e.value ? $(e.form).hasClass("fm_red") ? $(e.form).removeClass("yy_fm_blue") : $(e.form).removeClass("yy_fm_blue").addClass("yy_fm").find(".s_btn").val("武汉加油") : ($(e.form).hasClass("yy_fm") || $(e.form).hasClass("fm_red")) && $(e.form).addClass("yy_fm_blue").removeClass("yy_fm fm_red").find(".s_btn").val("百度一下"))
        },
        outInterface: function() {
            var e = this;
            return {
                setVisibleSug: function() {
                    var t = $('<i class="c-icon c-icon-bear-round"></i>');
                    return function(s) {
                        var a;
                        for (t.remove(), a = 0; a < e.dataArray.length; a++)
                            if (e.dataArray[a].value === s) {
                                t.appendTo($(e.sugcontainer).find("li").eq(a));
                                break
                            }
                    }
                }(),
                getStat: function(t) {
                    return e.stat ? e.stat[t] : void 0
                },
                clearStat: function() {
                    return e.clearStat()
                },
                setKey: function(t) {
                    e.ipt.value = e.value = e.inputValue = e.showValue = t
                },
                visible: function() {
                    return e.visible
                },
                is_selecting: function() {
                    return e.visible && e.is_selecting
                },
                data: function() {
                    return e.dataArray && e.dataArray.length ? $.grep(e.dataArray, function(e) {
                        return "direct" !== e.type
                    }) : []
                },
                show: function() {
                    return e.showSug()
                },
                hide: function() {
                    return e.hideSug()
                },
                start: function() {
                    return e.startCircle()
                },
                stop: function() {
                    return e.stopCircle()
                },
                setMaxNum: function(t) {
                    return e.maxNum = t
                },
                check: function() {
                    return e.check()
                },
                formSubmit: function() {
                    return e.formSubmit()
                },
                updateInitData: function() {
                    return e.updateInitData()
                },
                on: function() {
                    $(e.ipt).on.apply($(e.ipt), arguments)
                },
                height: function() {
                    return $(e.sugcontainer).height()
                },
                off: function() {
                    $(e.ipt).off.apply($(e.ipt), arguments)
                },
                getRsvStatus: function(t) {
                    return e.getRsvStatus(t)
                }
            }
        }
    }, bdSug
}), define("@baidu/search-sug", ["@baidu/search-sug/sug/index"], function(e) {
    return e
});