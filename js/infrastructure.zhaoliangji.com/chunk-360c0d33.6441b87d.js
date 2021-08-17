(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-360c0d33"], {
        2934: function(t, e, r) {
            "use strict";
            r.d(e, "p", (function() {
                return a
            })), r.d(e, "d", (function() {
                return o
            })), r.d(e, "i", (function() {
                return l
            })), r.d(e, "m", (function() {
                return u
            })), r.d(e, "b", (function() {
                return s
            })), r.d(e, "g", (function() {
                return c
            })), r.d(e, "k", (function() {
                return i
            })), r.d(e, "j", (function() {
                return p
            })), r.d(e, "h", (function() {
                return d
            })), r.d(e, "n", (function() {
                return _
            })), r.d(e, "a", (function() {
                return m
            })), r.d(e, "l", (function() {
                return f
            })), r.d(e, "q", (function() {
                return v
            })), r.d(e, "f", (function() {
                return b
            })), r.d(e, "o", (function() {
                return g
            })), r.d(e, "c", (function() {
                return h
            })), r.d(e, "e", (function() {
                return y
            }));
            var n = r("b775");

            function a(t) {
                return Object(n["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: t
                })
            }

            function l(t) {
                return Object(n["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(n["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(n["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
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

            function _(t) {
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

            function v(t) {
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

            function g(t) {
                return Object(n["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: t
                })
            }

            function h(t) {
                return Object(n["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: t
                })
            }

            function y(t) {
                return Object(n["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: t
                })
            }
        },
        3020: function(t, e, r) {},
        6534: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "app-container"
                    }, [r("div", {
                        staticClass: "detail-table body-list"
                    }, [r("el-row", [r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("异常单号：")]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v(t._s(t.order.abnormal_report_order_no))]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("商品总数量：")]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v(t._s(t.order.num))]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("商品总金额：")]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v(t._s(t.order.total_cost))])], 1), t._v(" "), r("el-row", [r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("登记人：")]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t.order.create_user ? r("span", [t._v(t._s(t.order.create_user.department_name) + "--" + t._s(t.order.create_user.real_name))]) : t._e()]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("登记时间：")]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [r("span", [t._v(t._s(t.order.created_at))])]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("查收状态：")]), t._v(" "), r("el-col", {
                        class: {
                            "color-warning": 0 == t.order.receive_status, "color-success": 1 == t.order.receive_status, "color-danger": -1 == t.order.receive_status
                        },
                        attrs: {
                            span: 4
                        }
                    }, [t._v(t._s(t.order.receive_status_description))])], 1)], 1), t._v(" "), r("el-tabs", {
                        staticClass: "body-list",
                        model: {
                            value: t.activeTab,
                            callback: function(e) {
                                t.activeTab = e
                            },
                            expression: "activeTab"
                        }
                    }, [r("el-tab-pane", {
                        attrs: {
                            label: "商品明细",
                            name: "0"
                        }
                    }, [r("el-table", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            data: t.details,
                            "show-summary": "",
                            "summary-method": t.getSummaries
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            label: "序号",
                            type: "index",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "采购单号",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v(t._s(e.row.product_cost.purchase_order_no))]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "类目品牌",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v(t._s(e.row.type.name) + " " + t._s(e.row.brand.name))]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "model.name",
                            label: "型号",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "参数信息",
                            "header-align": "center",
                            width: "350"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return t._l(e.row.sales_properties, (function(n, a) {
                                    return r("span", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 12 != n.pn_id && 5 != n.pn_id,
                                            expression: "item.pn_id != 12 && item.pn_id != 5"
                                        }],
                                        key: a
                                    }, [t._v(t._s(n.pv_name) + t._s(a == e.row.sales_properties.length - 1 ? "" : "，"))])
                                }))
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "imei",
                            label: "IMEI",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "cost",
                            label: "成色",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return t._l(e.row.sales_properties, (function(e, n) {
                                    return r("span", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 12 == e.pn_id,
                                            expression: "item.pn_id == 12"
                                        }],
                                        key: n
                                    }, [t._v(t._s(e.pv_name))])
                                }))
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product_cost.cost",
                            label: "成本价",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "num",
                            label: "实收数量",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v(t._s(e.row.num ? e.row.num : 1))]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "reason_description",
                            label: "异常原因",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "remark",
                            label: "备注",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product_cost.purchase_order_no",
                            label: "采购单号",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product_cost.supplier_info.name",
                            label: "供应商",
                            align: "center"
                        }
                    })], 1)], 1), t._v(" "), r("el-tab-pane", {
                        attrs: {
                            label: "操作日志",
                            name: "1",
                            lazy: !0
                        }
                    }, [r("el-table", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: t.logs.loading,
                            expression: "logs.loading"
                        }],
                        staticStyle: {
                            width: "100%",
                            "margin-bottom": "10px"
                        },
                        attrs: {
                            data: t.logData
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            label: "序号",
                            type: "index",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "created_at",
                            label: "操作时间",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "real_name",
                            label: "操作人",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v(t._s(e.row.operate_user.department_name) + " - " + t._s(e.row.operate_user.real_name))]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "content",
                            label: "内容",
                            align: "center"
                        }
                    })], 1), t._v(" "), r("div", {
                        staticClass: "footer-pagination"
                    }, [r("el-pagination", {
                        attrs: {
                            background: "",
                            layout: "total, prev, pager, next, jumper",
                            total: t.logs.total,
                            "current-page": t.logs.page,
                            "page-size": 10
                        },
                        on: {
                            "update:currentPage": function(e) {
                                return t.$set(t.logs, "page", e)
                            },
                            "update:current-page": function(e) {
                                return t.$set(t.logs, "page", e)
                            },
                            "current-change": function(e) {
                                return t.getLogs()
                            }
                        }
                    })], 1)], 1)], 1), t._v(" "), r("div", {
                        staticClass: "flex-center"
                    }, [r("el-button", {
                        attrs: {
                            type: "success"
                        },
                        on: {
                            click: function(e) {
                                t.$router.push({
                                    name: "recheck-exception-abnormal",
                                    query: {
                                        id: [t.$route.query.id].join(",")
                                    }
                                })
                            }
                        }
                    }, [t._v("打印异常单")])], 1)], 1)
                },
                a = [],
                o = r("4838"),
                l = r.n(o),
                u = r("a9a1"),
                s = r("2934");

            function c(t, e) {
                var r;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (r = i(t)) || e && t && "number" === typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, l = !0,
                    u = !1;
                return {
                    s: function() {
                        r = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = r.next();
                        return l = t.done, t
                    },
                    e: function(t) {
                        u = !0, o = t
                    },
                    f: function() {
                        try {
                            l || null == r.return || r.return()
                        } finally {
                            if (u) throw o
                        }
                    }
                }
            }

            function i(t, e) {
                if (t) {
                    if ("string" === typeof t) return p(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? p(t, e) : void 0
                }
            }

            function p(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function d(t, e, r, n, a, o, l) {
                try {
                    var u = t[o](l),
                        s = u.value
                } catch (c) {
                    return void r(c)
                }
                u.done ? e(s) : Promise.resolve(s).then(n, a)
            }

            function _(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = t.apply(e, r);

                        function l(t) {
                            d(o, n, a, l, u, "next", t)
                        }

                        function u(t) {
                            d(o, n, a, l, u, "throw", t)
                        }
                        l(void 0)
                    }))
                }
            }
            var m = {
                    data: function() {
                        return {
                            activeTab: 0,
                            info: {},
                            logs: {
                                page: 1,
                                total: 0,
                                loading: !1
                            },
                            logData: [],
                            saveLoading: !1,
                            order: {},
                            details: []
                        }
                    },
                    mounted: function() {
                        this.getDetail(), this.getLogs()
                    },
                    methods: {
                        getDetail: function() {
                            var t = _(l.a.mark((function t() {
                                var e, r;
                                return l.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e = this.$loading({
                                                target: ".app-container"
                                            }), t.next = 3, Object(u["c"])({
                                                abnormal_report_order_id: this.$route.query.id
                                            });
                                        case 3:
                                            r = t.sent, this.order = r.data, this.details = r.data.details, e.close();
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        getSummaries: function(t) {
                            var e = t.columns,
                                r = t.data,
                                n = [];
                            return e.forEach((function(t, e) {
                                if (0 !== e) {
                                    if ("product_cost.cost" == t.property) {
                                        var a, o = 0,
                                            l = c(r);
                                        try {
                                            for (l.s(); !(a = l.n()).done;) {
                                                var u = a.value;
                                                u.product_cost && (o += Number(u.product_cost.cost))
                                            }
                                        } catch (_) {
                                            l.e(_)
                                        } finally {
                                            l.f()
                                        }
                                        n[e] = o
                                    }
                                    if ("num" == t.property) {
                                        var s, i = 0,
                                            p = c(r);
                                        try {
                                            for (p.s(); !(s = p.n()).done;) {
                                                var d = s.value;
                                                i += Number(d.num ? d.num : 1)
                                            }
                                        } catch (_) {
                                            p.e(_)
                                        } finally {
                                            p.f()
                                        }
                                        n[e] = i
                                    }
                                } else n[e] = "合计"
                            })), n
                        },
                        getLogs: function() {
                            var t = _(l.a.mark((function t() {
                                var e;
                                return l.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return this.logs.loading = !0, t.next = 3, Object(s["k"])({
                                                upstream_order_id: this.$route.query.id,
                                                upstream_order_type: "abnormal_report_orders",
                                                page: this.logs.page
                                            });
                                        case 3:
                                            e = t.sent, this.logData = e.data.data, this.logs.total = e.data.total, this.logs.loading = !1;
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }
                },
                f = m,
                v = (r("e677"), r("5d22")),
                b = Object(v["a"])(f, n, a, !1, null, "16fc688c", null);
            e["default"] = b.exports
        },
        a9a1: function(t, e, r) {
            "use strict";
            r.d(e, "d", (function() {
                return a
            })), r.d(e, "c", (function() {
                return o
            })), r.d(e, "a", (function() {
                return l
            })), r.d(e, "b", (function() {
                return u
            }));
            var n = r("b775");

            function a(t) {
                return Object(n["a"])({
                    url: "/api/re_check/abnormal_report_orders",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/re_check/show_abnormal_report",
                    method: "get",
                    params: t
                })
            }

            function l(t) {
                return Object(n["a"])({
                    url: "/api/re_check/destroy_abnormal_report",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "/api/re_check/show_abnormal_reports",
                    method: "get",
                    params: t
                })
            }
        },
        e677: function(t, e, r) {
            "use strict";
            r("3020")
        }
    }
]);