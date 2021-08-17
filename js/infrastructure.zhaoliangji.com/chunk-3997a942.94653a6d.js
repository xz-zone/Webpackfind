(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-3997a942"], {
        "26ff": function(e, t, r) {
            "use strict";
            r("4d43")
        },
        "4d43": function(e, t, r) {},
        a124: function(e, t, r) {
            "use strict";
            r.r(t);
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "app-container"
                    }, [r("div", [e._v("授权中...")]), e._v(" "), r("el-dialog", {
                        attrs: {
                            title: "绑定ERP用户信息",
                            visible: e.showDialog,
                            width: "30%",
                            "show-close": !1,
                            "close-on-click-modal": !1
                        },
                        on: {
                            "update:visible": function(t) {
                                e.showDialog = t
                            }
                        }
                    }, [r("el-form", {
                        ref: "erpForm",
                        attrs: {
                            model: e.formData,
                            rules: e.rule,
                            "label-width": "100px"
                        }
                    }, [r("el-form-item", {
                        attrs: {
                            label: "用户名：",
                            prop: "username"
                        }
                    }, [r("el-input", {
                        attrs: {
                            placeholder: "请输入用户名"
                        },
                        model: {
                            value: e.formData.username,
                            callback: function(t) {
                                e.$set(e.formData, "username", t)
                            },
                            expression: "formData.username"
                        }
                    })], 1), e._v(" "), r("el-form-item", {
                        attrs: {
                            label: "密码：",
                            prop: "password"
                        }
                    }, [r("el-input", {
                        attrs: {
                            type: "password",
                            placeholder: "请输入密码"
                        },
                        model: {
                            value: e.formData.password,
                            callback: function(t) {
                                e.$set(e.formData, "password", t)
                            },
                            expression: "formData.password"
                        }
                    })], 1)], 1), e._v(" "), r("span", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [r("el-button", {
                        attrs: {
                            type: "primary",
                            loading: e.loading
                        },
                        on: {
                            click: e.saveErpUser
                        }
                    }, [e._v("确 定")])], 1)], 1)], 1)
                },
                n = [],
                s = r("4838"),
                o = r.n(s),
                i = r("5f87"),
                c = r("c24f");

            function l(e, t, r, a, n, s, o) {
                try {
                    var i = e[s](o),
                        c = i.value
                } catch (l) {
                    return void r(l)
                }
                i.done ? t(c) : Promise.resolve(c).then(a, n)
            }

            function u(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(a, n) {
                        var s = e.apply(t, r);

                        function o(e) {
                            l(s, a, n, o, i, "next", e)
                        }

                        function i(e) {
                            l(s, a, n, o, i, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }
            var p = {
                    data: function() {
                        return {
                            showDialog: !1,
                            formData: {
                                username: "",
                                password: ""
                            },
                            rule: {
                                username: [{
                                    required: !0,
                                    message: "请输入用户名",
                                    trigger: "blur"
                                }],
                                password: [{
                                    required: !0,
                                    message: "请输入密码",
                                    trigger: "blur"
                                }]
                            },
                            loading: !1
                        }
                    },
                    mounted: function() {
                        this.getLoginData()
                    },
                    methods: {
                        getLoginData: function() {
                            var e = u(o.a.mark((function e() {
                                var t;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.$store.dispatch("user/resetToken");
                                        case 3:
                                            return Object(i["c"])(this.$route.query.token), e.next = 6, this.$store.dispatch("user/getInfo");
                                        case 6:
                                            t = e.sent, t.is_need_binding_erp_user ? this.showDialog = !0 : (console.log("获取成功。。。"), this.$router.push({
                                                path: "/"
                                            })), e.next = 14;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e["catch"](0), console.log(e.t0), this.$message.error("授权登录失败!");
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 10]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        saveErpUser: function() {
                            var e = this;
                            this.$refs["erpForm"].validate(function() {
                                var t = u(o.a.mark((function t(r) {
                                    return o.a.wrap((function(t) {
                                        while (1) switch (t.prev = t.next) {
                                            case 0:
                                                if (!r) {
                                                    t.next = 15;
                                                    break
                                                }
                                                return t.prev = 1, e.loading = !0, t.next = 5, Object(c["a"])(e.formData);
                                            case 5:
                                                e.loading = !1, e.$message.success("绑定成功！"), location.reload(), t.next = 13;
                                                break;
                                            case 10:
                                                t.prev = 10, t.t0 = t["catch"](1), e.loading = !1;
                                            case 13:
                                                t.next = 16;
                                                break;
                                            case 15:
                                                console.log("验证失败");
                                            case 16:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [1, 10]
                                    ])
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }())
                        },
                        storeErpUser: function() {
                            var e = u(o.a.mark((function e() {
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, this.loading = !0, e.next = 4, Object(c["g"])();
                                        case 4:
                                            this.loading = !1, this.$message.success("创建成功！"), location.reload(), e.next = 12;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e["catch"](0), this.loading = !1;
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 9]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    }
                },
                f = p,
                d = (r("26ff"), r("5d22")),
                h = Object(d["a"])(f, a, n, !1, null, "0f2f8cdf", null);
            t["default"] = h.exports
        }
    }
]);