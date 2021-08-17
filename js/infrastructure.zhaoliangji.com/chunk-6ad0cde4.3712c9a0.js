(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-6ad0cde4"], {
        "02aa": function(t, e, n) {
            "use strict";
            var r = n("b775"),
                i = n("7f43"),
                a = n.n(i),
                o = n("1503"),
                s = n.n(o),
                c = n("7893"),
                u = n("4360"),
                d = n("5f87"),
                f = a.a.create({
                    baseURL: "https://infrastructureapi.zhaoliangji.com/",
                    withCredentials: !0,
                    timeout: 6e4,
                    transformResponse: [function(t) {
                        return s.a.parse(t)
                    }]
                });
            f.interceptors.request.use((function(t) {
                return Object(d["a"])() && (t.headers["Authorization"] = "Bearer ".concat(Object(d["a"])())), t.headers["Content-Type"] = "application/json", t
            }), (function(t) {
                return console.log(t), Promise.reject(t)
            })), f.interceptors.response.use((function(t) {
                var e = t.data;
                return 1 !== e.code ? (Object(c["Message"])({
                    message: "<span style='font-size: 18px;font-weight: 600;line-height: 26px;'>".concat(e.msg, "</span>") || !1,
                    type: "error",
                    dangerouslyUseHTMLString: !0,
                    duration: 6e3,
                    showClose: !0
                }), 401 == e.code && (c["Message"].error(e.msg || "您还没有登录！"), u["a"].dispatch("user/resetToken").then((function() {
                    location.href = "/"
                }))), 403 == e.code && c["Message"].error(e.msg || "抱歉，权限不够！"), console.log(e), Promise.reject(e.msg || "error")) : e
            }), (function(t) {
                if (console.log(t.response), t.response && "401" == t.response.status) c["Message"].error(t.response.data.msg || "抱歉，权限不够！"), u["a"].dispatch("user/resetToken").then((function() {
                    location.reload()
                }));
                else {
                    var e = "";
                    e = t.response ? t.response.data.msg : t, Object(c["Message"])({
                        message: e,
                        type: "error",
                        duration: 5e3,
                        showClose: !0
                    })
                }
                return Promise.reject(t)
            }));
            var l = f;

            function p(t) {
                return Object(r["a"])({
                    url: "/api/sorting/check",
                    method: "get",
                    params: t
                })
            }

            function m(t) {
                return Object(r["a"])({
                    url: "/api/sorting/sta",
                    method: "get",
                    params: t
                })
            }

            function _(t) {
                return Object(r["a"])({
                    url: "/api/sorting/get_transfer_list",
                    method: "get",
                    params: t
                })
            }

            function g(t) {
                return Object(r["a"])({
                    url: "/api/sorting/transfer",
                    method: "post",
                    params: t
                })
            }

            function h(t) {
                return l({
                    url: "/api/sorting/get_list",
                    method: "get",
                    params: t
                })
            }

            function v(t) {
                return l({
                    url: "/api/sorting/detail",
                    method: "get",
                    params: t
                })
            }

            function b(t) {
                return Object(r["a"])({
                    url: "/api/sorting/create_qc_code",
                    method: "get",
                    params: t
                })
            }

            function y(t) {
                return Object(r["a"])({
                    url: "/api/sorting/unpack",
                    method: "post",
                    params: t
                })
            }

            function j(t) {
                return Object(r["a"])({
                    url: "/api/sorting/transfer_orders",
                    method: "get",
                    params: t
                })
            }

            function O(t) {
                return Object(r["a"])({
                    url: "/api/admin_tool/change_fitting",
                    method: "post",
                    params: t
                })
            }
            n.d(e, "d", (function() {
                return p
            })), n.d(e, "g", (function() {
                return m
            })), n.d(e, "h", (function() {
                return _
            })), n.d(e, "j", (function() {
                return g
            })), n.d(e, "e", (function() {
                return h
            })), n.d(e, "c", (function() {
                return v
            })), n.d(e, "a", (function() {
                return b
            })), n.d(e, "i", (function() {
                return y
            })), n.d(e, "f", (function() {
                return j
            })), n.d(e, "b", (function() {
                return O
            }))
        },
        "566c": function(t, e, n) {
            "use strict";
            n("aaab")
        },
        9011: function(t, e, n) {
            "use strict";
            n.d(e, "c", (function() {
                return i
            })), n.d(e, "a", (function() {
                return a
            })), n.d(e, "b", (function() {
                return o
            })), n.d(e, "d", (function() {
                return s
            }));
            var r = n("b775");

            function i(t) {
                return Object(r["a"])({
                    url: "/api/logistics/record",
                    method: "get",
                    params: t
                })
            }

            function a(t) {
                return Object(r["a"])({
                    url: "/api/logistics/qc_site",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(r["a"])({
                    url: "/api/logistics/zz_business_type",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(r["a"])({
                    url: "/api/logistics/receive",
                    method: "post",
                    params: t
                })
            }
        },
        9455: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "app-container",
                        attrs: {
                            tabindex: "0"
                        },
                        on: {
                            keyup: function(e) {
                                return e.type.indexOf("key") || 16 === e.keyCode ? t.takeSnapshot(e) : null
                            }
                        }
                    }, [n("el-form", {
                        staticClass: "app-container"
                    }, [n("el-row", {
                        attrs: {
                            gutter: 20
                        }
                    }, [n("el-col", {
                        attrs: {
                            span: 5
                        }
                    }, [n("span", [t._v("商品信息：" + t._s(t.data.zz_cate_name))])]), t._v(" "), n("el-col", {
                        attrs: {
                            span: 5
                        }
                    }, [n("span", [t._v(" 业务类型：" + t._s(t.data.zz_business_name) + " ")])]), t._v(" "), n("el-col", {
                        attrs: {
                            span: 5
                        }
                    }, [n("span", [t._v("业务单号：" + t._s(t.data.business_order_no))])]), t._v(" "), n("el-col", {
                        attrs: {
                            span: 5
                        }
                    }, [n("span", [t._v("运单号：" + t._s(t.data.express_no))])]), t._v(" "), n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [n("span", [t._v("订单件数：" + t._s(t.data.machine_num))])])], 1), t._v(" "), n("el-input-number", {
                        staticClass: "form-num",
                        attrs: {
                            "controls-position": "right",
                            min: 1,
                            disabled: 2 == t.sta || 2 == t.data.business_line
                        },
                        on: {
                            change: t.handleNumChange
                        },
                        model: {
                            value: t.num,
                            callback: function(e) {
                                t.num = e
                            },
                            expression: "num"
                        }
                    }), t._v(" "), t._l(t.forms, (function(e, r) {
                        return n("el-form-item", {
                            key: r
                        }, [n("div", {
                            staticStyle: {
                                width: "200px",
                                float: "left"
                            }
                        }, [n("div", {
                            staticClass: "form-fit",
                            staticStyle: {
                                width: "200px"
                            }
                        }, [n("div", {
                            staticClass: "form-qc-text"
                        }, [t._v("配件")]), t._v(" "), n("el-radio-group", {
                            attrs: {
                                disabled: 2 == t.sta
                            },
                            model: {
                                value: e.fittings,
                                callback: function(n) {
                                    t.$set(e, "fittings", n)
                                },
                                expression: "form.fittings"
                            }
                        }, [n("el-radio", {
                            attrs: {
                                label: 1
                            }
                        }, [t._v("有配件")]), t._v(" "), n("el-radio", {
                            attrs: {
                                label: 2
                            }
                        }, [t._v("无配件")])], 1), t._v(" "), 1 == e.fittings ? n("div", {
                            staticStyle: {
                                display: "flex",
                                width: "500px"
                            }
                        }, [n("div", [n("span", {
                            staticClass: "form-qc-text red"
                        }, [t._v(" 质检码：" + t._s(e.fittings_qc_code) + " ")]), t._v(" "), [e.fittingsPrinted ? n("el-button", {
                            directives: [{
                                name: "print",
                                rawName: "v-print",
                                value: "#printQc",
                                expression: "'#printQc'"
                            }],
                            attrs: {
                                type: "warning"
                            },
                            on: {
                                click: function(n) {
                                    return t.printQc(e, 2)
                                }
                            }
                        }, [t._v("\n                重新打印\n              ")]) : n("el-button", {
                            directives: [{
                                name: "print",
                                rawName: "v-print",
                                value: "#printQc",
                                expression: "'#printQc'"
                            }],
                            attrs: {
                                type: "primary",
                                disabled: t.fromCheckFlag || t.data.sorting_time
                            },
                            on: {
                                click: function(n) {
                                    return t.printQc(e, 2)
                                }
                            }
                        }, [t._v(" 打印质检码 ")])]], 2), t._v(" "), n("div", {
                            staticStyle: {
                                "margin-left": "100px"
                            },
                            on: {
                                click: function(e) {
                                    return t.setFocus(r)
                                }
                            }
                        }, [1 == e.fittings ? n("el-image", {
                            class: [t.isFocus ? "isFocus" : ""],
                            staticStyle: {
                                width: "150px",
                                height: "150px"
                            },
                            attrs: {
                                fit: "fill",
                                src: e.fittings_img_url
                            }
                        }, [n("div", {
                            staticClass: "image-slot",
                            attrs: {
                                slot: "placeholder"
                            },
                            slot: "placeholder"
                        }, [n("span", {
                            staticClass: "el-icon-plus avatar-uploader-icon"
                        }, [t._v("...")])])]) : t._e()], 1)]) : t._e()], 1), t._v(" "), n("div", {
                            staticClass: "form-qc",
                            staticStyle: {
                                width: "200px"
                            }
                        }, [n("span", {
                            staticClass: "form-qc-text red"
                        }, [t._v("质检码：" + t._s(e.qc_code))]), t._v(" "), [e.qcPrinted ? n("el-button", {
                            directives: [{
                                name: "print",
                                rawName: "v-print",
                                value: "#printQc",
                                expression: "'#printQc'"
                            }],
                            attrs: {
                                type: "warning"
                            },
                            on: {
                                click: function(n) {
                                    return t.printQc(e, 1)
                                }
                            }
                        }, [t._v("\n            重新打印\n          ")]) : n("el-button", {
                            directives: [{
                                name: "print",
                                rawName: "v-print",
                                value: "#printQc",
                                expression: "'#printQc'"
                            }],
                            attrs: {
                                type: "primary",
                                disabled: t.fromCheckFlag || t.data.sorting_time
                            },
                            on: {
                                click: function(n) {
                                    return t.printQc(e, 1)
                                }
                            }
                        }, [t._v(" 打印质检码 ")])]], 2)]), t._v(" "), n("el-divider")], 1)
                    })), t._v(" "), n("el-form-item", [2 != t.sta && 2 == t.data.business_line ? n("el-button", {
                        directives: [{
                            name: "print",
                            rawName: "v-print",
                            value: "#printQc",
                            expression: "'#printQc'"
                        }],
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.batchPrint
                        }
                    }, [t._v("拆包完成")]) : t._e(), t._v(" "), 2 != t.sta && 2 != t.data.business_line ? n("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.handleSubmit
                        }
                    }, [t._v("拆包完成")]) : t._e(), t._v(" "), n("el-button", {
                        on: {
                            click: function(e) {
                                return t.$router.go(-1)
                            }
                        }
                    }, [t._v("返回")])], 1), t._v(" "), n("div", {
                        staticStyle: {
                            position: "absolute",
                            right: "40%",
                            top: "35%"
                        },
                        attrs: {
                            id: "my_camera"
                        }
                    }), t._v(" "), n("Barcode", {
                        attrs: {
                            id: "printQc",
                            data: t.qcInfo,
                            line: 2
                        }
                    })], 2)], 1)
                },
                i = [],
                a = n("6d8f"),
                o = n("f4c4"),
                s = (n("9011"), n("059f")),
                c = n.n(s),
                u = n("02aa"),
                d = n("ed08");

            function f(t, e) {
                var n;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = l(t)) || e && t && "number" === typeof t.length) {
                        n && (t = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, o = !0,
                    s = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, a = t
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                }
            }

            function l(t, e) {
                if (t) {
                    if ("string" === typeof t) return p(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(t, e) : void 0
                }
            }

            function p(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var m = n("1472"),
                _ = {
                    components: {
                        Barcode: a["a"]
                    },
                    data: function() {
                        return {
                            num: 1,
                            qcInfo: [],
                            data: {},
                            img_src: "https://cdn.huodao.hk//pd_img/538/9fb/5389fb1f78b1b39e788ae2ccb3c162ca_1000x1000.png",
                            forms: [],
                            isFocus: !1,
                            fittings_img_url: "",
                            selectIndex: -1,
                            fromCheckFlag: !1
                        }
                    },
                    computed: {
                        sta: function() {
                            return this.data.sta
                        }
                    },
                    mounted: function() {
                        this.initWebcam()
                    },
                    beforeDestroy: function() {
                        c.a.reset()
                    },
                    created: function() {
                        var t = this;
                        this.$route.query.fromType && 1 == this.$route.query.fromType && (this.fromCheckFlag = !0), Object(u["c"])({
                            id: this.$route.query.id
                        }).then((function(e) {
                            var n = e.data;
                            t.$set(t, "forms", n.detail), t.data = n.data, t.num = n.detail.length || n.data.machine_num, 2 != t.data.sta && Object(u["a"])({
                                sorting_list_id: t.data.id,
                                num: t.num
                            }).then((function(e) {
                                var n = e.data;
                                n.machine_qc_code.map((function(e, n) {
                                    !t.forms[n] && t.$set(t.forms, n, {}), t.forms[n].qc_code = e, t.forms[n].fittings_img_url = ""
                                })), n.fittings_qc_code.map((function(e, n) {
                                    !t.forms[n] && t.$set(t.forms, n, {}), t.forms[n].fittings_qc_code = e, t.$set(t.forms[n], "fittings", 2)
                                }))
                            }))
                        }))
                    },
                    methods: {
                        setFocus: function(t) {
                            this.selectIndex = t, this.isFocus = !this.isFocus
                        },
                        initWebcam: function() {
                            c.a.set({
                                width: 400,
                                height: 300,
                                dest_width: 800,
                                dest_height: 600,
                                image_format: "jpeg",
                                jpeg_quality: 100
                            }), c.a.attach("#my_camera")
                        },
                        takeSnapshot: function() {
                            var t = this;
                            if (!this.isFocus) return this.$message.error("请先选择为哪个选线上传图片");
                            c.a.snap((function(e) {
                                var n = new FormData;
                                n.append("image", Object(d["a"])(e)), Object(o["n"])(n).then((function(e) {
                                    var n;
                                    1 == e.code && (t.forms[t.selectIndex].fittings_img_url = null === (n = e.data) || void 0 === n ? void 0 : n.url, t.forms = JSON.parse(JSON.stringify(t.forms)))
                                })).finally((function() {
                                    return t.btnDisable = !1
                                }))
                            }))
                        },
                        printQc: function(t, e) {
                            this.qcInfo = [];
                            var n = 1 === t.fittings ? "(Y)" : "(N)";
                            n = this.txtAddTime(n);
                            var r = {
                                code: 1 == e ? "".concat(t.qc_code) : t.fittings_qc_code,
                                title: '<i style="font-weight:bold;font-size:18px">'.concat(n, "</i>"),
                                business_name: this.data.zz_business_name + "(".concat(m(new Date).format("YY/MM/DD HH:mm"))
                            };
                            1 == e ? t.qcPrinted = 1 : t.fittingsPrinted = 1, this.qcInfo.push(r)
                        },
                        txtAddTime: function(t) {
                            var e = new Date,
                                n = e.getDate() + "/" + e.getHours();
                            return t + "" + n
                        },
                        batchPrint: function() {
                            var t = this;
                            this.qcInfo = [], this.forms.forEach((function(e) {
                                if (1 == e.fittings) {
                                    var n = {
                                        code: e.fittings_qc_code,
                                        title: "(Y)"
                                    };
                                    n.title = t.txtAddTime(n.title), t.qcInfo.push(n), e.fittingsPrinted = 1;
                                    var r = {
                                        code: e.qc_code,
                                        title: "(Y)"
                                    };
                                    r.title = t.txtAddTime(r.title), t.qcInfo.push(r), e.qcPrinted = 1
                                } else {
                                    var i = {
                                        code: e.qc_code,
                                        title: "(N)"
                                    };
                                    i.title = t.txtAddTime(i.title), t.qcInfo.push(i), e.qcPrinted = 1
                                }
                            })), this.handleSubmit()
                        },
                        handleSubmit: function() {
                            var t, e = this,
                                n = [],
                                r = f(this.forms);
                            try {
                                for (r.s(); !(t = r.n()).done;) {
                                    var i = t.value,
                                        a = {
                                            qc_code: i.qc_code,
                                            fittings: i.fittings,
                                            fittings_qc_code: 1 == i.fittings ? i.fittings_qc_code : ""
                                        };
                                    if (1 == i.fittings) {
                                        if ("" == i.fittings_img_url) return void this.$message.error("有配件需要上传图片");
                                        a.fittings_img_url = i.fittings_img_url
                                    }
                                    n.push(a)
                                }
                            } catch (o) {
                                r.e(o)
                            } finally {
                                r.f()
                            }
                            Object(u["i"])({
                                sorting_list_id: this.data.id,
                                list: JSON.stringify(n)
                            }).then((function() {
                                e.$message.success("拆包完成"), e.$router.go(-1)
                            }))
                        },
                        handleNumChange: function(t, e) {
                            var n = this;
                            this.$set(this, "forms", []), Object(u["a"])({
                                sorting_list_id: this.data.id,
                                num: this.num
                            }).then((function(t) {
                                var e = t.data;
                                e.machine_qc_code.map((function(t, e) {
                                    !n.forms[e] && n.$set(n.forms, e, {}), n.forms[e].qc_code = t
                                })), e.fittings_qc_code.map((function(t, e) {
                                    !n.forms[e] && n.$set(n.forms, e, {}), n.forms[e].fittings_qc_code = t, n.$set(n.forms[e], "fittings", 2)
                                }))
                            }))
                        }
                    }
                },
                g = _,
                h = (n("566c"), n("5d22")),
                v = Object(h["a"])(g, r, i, !1, null, "a6d8087a", null);
            e["default"] = v.exports
        },
        aaab: function(t, e, n) {},
        ed08: function(t, e, n) {
            "use strict";

            function r(t) {
                var e = new Date,
                    n = e.getTime() + 864e5 * t;
                e.setTime(n);
                var r = e.getFullYear(),
                    a = e.getMonth(),
                    o = e.getDate();
                return a = i(a + 1), o = i(o), r + "-" + a + "-" + o
            }

            function i(t) {
                var e = t;
                return 1 == t.toString().length && (e = "0" + t), e
            }

            function a(t) {
                var e = t.split(","),
                    n = e[0].match(/:(.*?);/)[1],
                    r = atob(e[1]),
                    i = r.length,
                    a = new Uint8Array(i);
                while (i--) a[i] = r.charCodeAt(i);
                return new Blob([a], {
                    type: n
                })
            }
            n.d(e, "b", (function() {
                return r
            })), n.d(e, "a", (function() {
                return a
            }))
        },
        f4c4: function(t, e, n) {
            "use strict";
            n.d(e, "h", (function() {
                return i
            })), n.d(e, "d", (function() {
                return a
            })), n.d(e, "e", (function() {
                return o
            })), n.d(e, "c", (function() {
                return s
            })), n.d(e, "g", (function() {
                return c
            })), n.d(e, "l", (function() {
                return u
            })), n.d(e, "n", (function() {
                return d
            })), n.d(e, "m", (function() {
                return f
            })), n.d(e, "b", (function() {
                return l
            })), n.d(e, "f", (function() {
                return p
            })), n.d(e, "i", (function() {
                return m
            })), n.d(e, "p", (function() {
                return _
            })), n.d(e, "k", (function() {
                return g
            })), n.d(e, "j", (function() {
                return h
            })), n.d(e, "o", (function() {
                return v
            })), n.d(e, "a", (function() {
                return b
            })), n.d(e, "q", (function() {
                return y
            }));
            var r = n("b775");

            function i(t) {
                return Object(r["a"])({
                    url: "/api/edit/my_receive",
                    method: "get",
                    params: t
                })
            }

            function a(t) {
                return Object(r["a"])({
                    url: "/api/edit/show_receive_order",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(r["a"])({
                    url: "/api/edit/edit_view",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(r["a"])({
                    url: "/api/brief_templates",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(r["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(r["a"])({
                    url: "api/public/product/oss_upload_sts_token_for_web",
                    method: "get",
                    data: t
                })
            }

            function d(t) {
                return Object(r["a"])({
                    url: "/api/edit/image_upload",
                    method: "post",
                    data: t,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            }

            function f(t) {
                return Object(r["a"])({
                    url: "/api/input/get_brand",
                    method: "get",
                    params: t
                })
            }

            function l(t) {
                return Object(r["a"])({
                    url: "/api/input/get_model",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(r["a"])({
                    url: "/api/product/goods_conditions",
                    method: "get",
                    params: t
                })
            }

            function m(t) {
                return Object(r["a"])({
                    url: "/api/product/pricing_rules",
                    method: "post",
                    data: t
                })
            }

            function _(t) {
                return Object(r["a"])({
                    url: "/api/edit/edit_save",
                    method: "post",
                    data: t
                })
            }

            function g(t) {
                return Object(r["a"])({
                    url: "/api/input/products_search",
                    method: "get",
                    params: t
                })
            }

            function h(t) {
                return Object(r["a"])({
                    url: "/api/error_report/product_error_reports",
                    method: "get",
                    params: t
                })
            }

            function v(t) {
                return Object(r["a"])({
                    url: "/api/error_report/mark_handled",
                    method: "post",
                    data: t
                })
            }

            function b(t) {
                return Object(r["a"])({
                    url: "/api/phone_appearance/datas",
                    method: "get",
                    params: t
                })
            }

            function y(t) {
                return Object(r["a"])({
                    url: "/api/product/save_zz_color_id",
                    method: "post",
                    data: t
                })
            }
        }
    }
]);