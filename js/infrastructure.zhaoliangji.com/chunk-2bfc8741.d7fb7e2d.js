(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2bfc8741"], {
        2934: function(t, e, r) {
            "use strict";
            r.d(e, "p", (function() {
                return a
            })), r.d(e, "d", (function() {
                return i
            })), r.d(e, "i", (function() {
                return o
            })), r.d(e, "m", (function() {
                return s
            })), r.d(e, "b", (function() {
                return c
            })), r.d(e, "g", (function() {
                return u
            })), r.d(e, "k", (function() {
                return l
            })), r.d(e, "j", (function() {
                return p
            })), r.d(e, "h", (function() {
                return d
            })), r.d(e, "n", (function() {
                return h
            })), r.d(e, "a", (function() {
                return m
            })), r.d(e, "l", (function() {
                return f
            })), r.d(e, "q", (function() {
                return g
            })), r.d(e, "f", (function() {
                return b
            })), r.d(e, "o", (function() {
                return v
            })), r.d(e, "c", (function() {
                return _
            })), r.d(e, "e", (function() {
                return w
            }));
            var n = r("b775");

            function a(t) {
                return Object(n["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(n["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(n["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(n["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: t
                })
            }

            function l(t) {
                return Object(n["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(n["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(n["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: t
                })
            }

            function h(t) {
                return Object(n["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: t
                })
            }

            function m(t) {
                return Object(n["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: t
                })
            }

            function f(t) {
                return Object(n["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: t
                })
            }

            function g(t) {
                return Object(n["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: t
                })
            }

            function b(t) {
                return Object(n["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: t
                })
            }

            function v(t) {
                return Object(n["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: t
                })
            }

            function _(t) {
                return Object(n["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: t
                })
            }

            function w(t) {
                return Object(n["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: t
                })
            }
        },
        "6c12": function(t, e, r) {
            "use strict";
            r("7854")
        },
        7854: function(t, e, r) {},
        "8ff9": function(t, e, r) {
            "use strict";
            r.r(e);
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "app-container"
                    }, [r("el-row", {
                        staticClass: "header-search"
                    }, [r("el-col", {
                        staticClass: "wrap",
                        attrs: {
                            span: 21
                        }
                    }, [r("div", [r("el-popover", {
                        ref: "popover",
                        attrs: {
                            placement: "bottom-start",
                            width: "300",
                            trigger: "hover"
                        }
                    }, [r("el-input", {
                        attrs: {
                            type: "textarea",
                            rows: "5",
                            clearable: "",
                            placeholder: "多行IMEI输入"
                        },
                        model: {
                            value: t.search.imeis,
                            callback: function(e) {
                                t.$set(t.search, "imeis", e)
                            },
                            expression: "search.imeis"
                        }
                    })], 1), t._v(" "), r("ImeiSearch", {
                        directives: [{
                            name: "popover",
                            rawName: "v-popover:popover",
                            arg: "popover"
                        }],
                        ref: "imeis",
                        staticStyle: {
                            width: "300px"
                        },
                        on: {
                            done: function(e) {
                                return t.store()
                            }
                        },
                        model: {
                            value: t.search.imeis,
                            callback: function(e) {
                                t.$set(t.search, "imeis", e)
                            },
                            expression: "search.imeis"
                        }
                    }, [r("el-button", {
                        attrs: {
                            slot: "append",
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.store()
                            }
                        },
                        slot: "append"
                    }, [t._v("提交")])], 1), t._v(" "), r("span", {
                        staticClass: "color-danger"
                    }, [t._v("（输入提交的IMEI，可以跳过黑名单禁止录入规则，允许录入）")])], 1)]), t._v(" "), r("el-col", {
                        staticClass: "operat-btn",
                        attrs: {
                            span: 3
                        }
                    }, [r("el-tag", {
                        attrs: {
                            type: "warning"
                        }
                    }, [t._v("总数量：" + t._s(t.total))])], 1)], 1), t._v(" "), r("el-row", {
                        staticClass: "body-list"
                    }, [r("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [r("el-table", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: t.loading,
                            expression: "loading"
                        }],
                        attrs: {
                            data: t.tableData,
                            "max-height": t.getClientHeight(208),
                            border: ""
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            type: "index",
                            label: "序号",
                            align: "center",
                            width: "80"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product_name",
                            label: "商品名称",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "imei",
                            label: "串码",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "create_user.real_name",
                            label: "操作人",
                            align: "center",
                            width: "120"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "updated_at",
                            label: "操作时间",
                            align: "center",
                            width: "160"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "status",
                            label: "操作",
                            align: "center",
                            width: "120"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [r("el-button", {
                                    attrs: {
                                        type: "danger",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return t.destory(e.row.id)
                                        }
                                    }
                                }, [t._v("删除")])]
                            }
                        }])
                    })], 1)], 1)], 1), t._v(" "), r("div", {
                        staticClass: "footer-pagination"
                    }, [r("el-pagination", {
                        attrs: {
                            background: "",
                            layout: "total, prev, pager, next, jumper",
                            total: t.total,
                            "current-page": t.search.page,
                            "page-size": t.search.page_size
                        },
                        on: {
                            "update:currentPage": function(e) {
                                return t.$set(t.search, "page", e)
                            },
                            "update:current-page": function(e) {
                                return t.$set(t.search, "page", e)
                            },
                            "update:pageSize": function(e) {
                                return t.$set(t.search, "page_size", e)
                            },
                            "update:page-size": function(e) {
                                return t.$set(t.search, "page_size", e)
                            },
                            "current-change": function(e) {
                                return t.getList()
                            }
                        }
                    })], 1)], 1)
                },
                a = [],
                i = r("4838"),
                o = r.n(i),
                s = r("b775");

            function c(t) {
                return Object(s["a"])({
                    url: "/api/input_goods_whitelist/index",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(s["a"])({
                    url: "/api/input_goods_whitelist/destroy",
                    method: "post",
                    data: t
                })
            }

            function l(t) {
                return Object(s["a"])({
                    url: "/api/input_goods_whitelist/store",
                    method: "post",
                    data: t
                })
            }
            var p = r("246e");

            function d(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function h(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(r), !0).forEach((function(e) {
                        m(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function m(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function f(t, e, r, n, a, i, o) {
                try {
                    var s = t[i](o),
                        c = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, a)
            }

            function g(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var i = t.apply(e, r);

                        function o(t) {
                            f(i, n, a, o, s, "next", t)
                        }

                        function s(t) {
                            f(i, n, a, o, s, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            var b = {
                    name: "GoodsWhiteList",
                    components: {
                        ImeiSearch: p["a"]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            search: {
                                imeis: null,
                                page: 1
                            },
                            total: 0,
                            loading: !1
                        }
                    },
                    mounted: function() {
                        this.getList()
                    },
                    methods: {
                        getList: function() {
                            var t = g(o.a.mark((function t(e) {
                                var r, n;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, this.search.is_export = null, 1 == e ? this.search.page = 1 : 2 == e && (this.search.is_export = 1), r = h({}, this.search), r.imei && (r.imei = r.imei.split("\n").join(",")), this.loading = !0, t.next = 8, c(r);
                                        case 8:
                                            n = t.sent, this.loading = !1, 2 == e ? window.open(n.data.download_url) : (this.tableData = n.data.data, this.total = n.data.total), t.next = 17;
                                            break;
                                        case 13:
                                            t.prev = 13, t.t0 = t["catch"](0), console.log(t.t0), this.loading = !1;
                                        case 17:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 13]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        destory: function() {
                            var t = g(o.a.mark((function t(e) {
                                var r, n;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return r = null, t.prev = 1, t.next = 4, this.$confirm("确定删除？", "提示", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 4:
                                            return r = this.$loading({
                                                target: ".app-main"
                                            }), t.next = 7, u({
                                                ids: [e]
                                            });
                                        case 7:
                                            n = t.sent, r.close(), this.$message.success(n.msg), this.getList(), t.next = 17;
                                            break;
                                        case 13:
                                            t.prev = 13, t.t0 = t["catch"](1), r && r.close(), console.log(t.t0);
                                        case 17:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [1, 13]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        store: function() {
                            var t = g(o.a.mark((function t() {
                                var e, r, n;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e = null, t.prev = 1, r = {
                                                imeis: null
                                            }, this.search.imeis && (r.imeis = this.search.imeis.split("\n").join(",").split(",")), e = this.$loading({
                                                target: ".app-main"
                                            }), t.next = 7, l(r);
                                        case 7:
                                            n = t.sent, e.close(), this.$message.success(n.msg), this.getList(), t.next = 17;
                                            break;
                                        case 13:
                                            t.prev = 13, t.t0 = t["catch"](1), console.log(t.t0), e && e.close();
                                        case 17:
                                            this.search.imeis = null;
                                        case 18:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [1, 13]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }
                },
                v = b,
                _ = (r("6c12"), r("5d22")),
                w = Object(_["a"])(v, n, a, !1, null, "3938160d", null);
            e["default"] = w.exports
        }
    }
]);