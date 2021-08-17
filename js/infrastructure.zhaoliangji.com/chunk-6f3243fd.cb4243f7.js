(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-6f3243fd"], {
        "222f": function(e, t, r) {
            "use strict";
            r.d(t, "e", (function() {
                return a
            })), r.d(t, "c", (function() {
                return o
            })), r.d(t, "d", (function() {
                return s
            })), r.d(t, "b", (function() {
                return i
            })), r.d(t, "a", (function() {
                return c
            }));
            var n = r("b775");

            function a(e) {
                return Object(n["a"])({
                    url: "/api/receive/receive_order_collections",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(n["a"])({
                    url: "/api/receive/destroy_receive_order",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(n["a"])({
                    url: "/api/receive/show_receive_order",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(n["a"])({
                    url: "/api/receive/assign_to_create_transfer_order",
                    method: "post",
                    data: e
                })
            }

            function c(e) {
                return Object(n["a"])({
                    url: "/api/receive/assign_to_create_warehouse_batch_switch",
                    method: "post",
                    data: e
                })
            }
        },
        2934: function(e, t, r) {
            "use strict";
            r.d(t, "p", (function() {
                return a
            })), r.d(t, "d", (function() {
                return o
            })), r.d(t, "i", (function() {
                return s
            })), r.d(t, "m", (function() {
                return i
            })), r.d(t, "b", (function() {
                return c
            })), r.d(t, "g", (function() {
                return u
            })), r.d(t, "k", (function() {
                return l
            })), r.d(t, "j", (function() {
                return d
            })), r.d(t, "h", (function() {
                return p
            })), r.d(t, "n", (function() {
                return _
            })), r.d(t, "a", (function() {
                return v
            })), r.d(t, "l", (function() {
                return f
            })), r.d(t, "q", (function() {
                return m
            })), r.d(t, "f", (function() {
                return g
            })), r.d(t, "o", (function() {
                return b
            })), r.d(t, "c", (function() {
                return h
            })), r.d(t, "e", (function() {
                return y
            }));
            var n = r("b775");

            function a(e) {
                return Object(n["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(n["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(n["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(n["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: e
                })
            }

            function c(e) {
                return Object(n["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: e
                })
            }

            function u(e) {
                return Object(n["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: e
                })
            }

            function l(e) {
                return Object(n["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: e
                })
            }

            function d(e) {
                return Object(n["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: e
                })
            }

            function p(e) {
                return Object(n["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: e
                })
            }

            function _(e) {
                return Object(n["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: e
                })
            }

            function v(e) {
                return Object(n["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: e
                })
            }

            function f(e) {
                return Object(n["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: e
                })
            }

            function m(e) {
                return Object(n["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: e
                })
            }

            function g(e) {
                return Object(n["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: e
                })
            }

            function b(e) {
                return Object(n["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: e
                })
            }

            function h(e) {
                return Object(n["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: e
                })
            }

            function y(e) {
                return Object(n["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: e
                })
            }
        },
        "47c8": function(e, t, r) {
            "use strict";
            r.r(t);
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "app-container"
                    }, [r("div", {
                        staticClass: "detail-table body-list"
                    }, [r("el-row", [r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v("收货编号：")]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v(e._s(e.receiveOrder.receive_order_no))]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v("收货类型：")]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v(e._s(e.receiveOrder.upstream_order_type_description))]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v("接收时间：")]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v(e._s(e.receiveOrder.created_at))])], 1), e._v(" "), r("el-row", [r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v("实收总数量：")]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v(e._s(e.receiveOrder.receive_num))]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v("实收总金额：")]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v(e._s(e.receiveOrder.total_cost))]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v("接收人：")]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v(e._s(e.receiveOrder.create_user ? e.receiveOrder.create_user.real_name : ""))])], 1), e._v(" "), r("el-row", [r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v("分配人：")]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v(e._s(e.receiveOrder.assign_user ? e.receiveOrder.assign_user.real_name : ""))]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v("分配状态：")]), e._v(" "), r("el-col", {
                        class: {
                            "color-warning": 0 == e.receiveOrder.assign_status, "color-success": 1 == e.receiveOrder.assign_status, "color-danger": -1 == e.receiveOrder.assign_status
                        },
                        attrs: {
                            span: 4
                        }
                    }, [e._v(e._s(e.receiveOrder.assign_status_description))])], 1)], 1), e._v(" "), r("el-tabs", {
                        staticClass: "body-list",
                        model: {
                            value: e.activeTab,
                            callback: function(t) {
                                e.activeTab = t
                            },
                            expression: "activeTab"
                        }
                    }, [r("el-tab-pane", {
                        attrs: {
                            label: "商品明细",
                            name: "0"
                        }
                    }, [r("el-alert", {
                        staticClass: "alert-info",
                        attrs: {
                            type: "success",
                            closable: !1
                        }
                    }, [r("el-row", [r("el-col", {
                        staticClass: "header-info",
                        attrs: {
                            span: 24
                        }
                    }, [r("div", [e._v("\n              业务类型：\n              "), r("span", [e._v(e._s(e.receiveOrder.upstream_order_type_description))])]), e._v(" "), r("div", [e._v("\n              供应商：\n              "), r("span", [e._v(e._s(e.upstream_order.supplier ? e.upstream_order.supplier.name : ""))])]), e._v(" "), r("div", [e._v("\n              采购单号：\n              "), r("span", [e._v(e._s(e.upstream_order.purchase_order_no))])])]), e._v(" "), r("el-col", {
                        staticClass: "header-total",
                        attrs: {
                            span: 8
                        }
                    }, [r("ul")])], 1)], 1), e._v(" "), r("el-table", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            data: e.details,
                            "show-summary": "",
                            "summary-method": e.getSummaries
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            label: "序号",
                            type: "index",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "类目品牌",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(e._s(t.row.type.name) + " " + e._s(t.row.brand.name))]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "model.name",
                            label: "型号",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "参数信息",
                            "header-align": "center",
                            width: "350"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return e._l(t.row.sales_properties, (function(n, a) {
                                    return r("span", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 12 != n.pn_id && 5 != n.pn_id,
                                            expression: "item.pn_id != 12 && item.pn_id != 5"
                                        }],
                                        key: a
                                    }, [e._v(e._s(n.pv_name) + e._s(a == t.row.sales_properties.length - 1 ? "" : "，"))])
                                }))
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "imei",
                            label: "IMEI",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "cost",
                            label: "成色",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return e._l(t.row.sales_properties, (function(t, n) {
                                    return r("span", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 12 == t.pn_id,
                                            expression: "item.pn_id == 12"
                                        }],
                                        key: n
                                    }, [e._v(e._s(t.pv_name))])
                                }))
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product_cost.cost",
                            label: "成本价",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "receive_order_num",
                            label: "实收数量",
                            align: "center"
                        }
                    })], 1)], 1), e._v(" "), r("el-tab-pane", {
                        attrs: {
                            label: "操作日志",
                            name: "1",
                            lazy: !0
                        }
                    }, [r("el-table", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: e.logs.loading,
                            expression: "logs.loading"
                        }],
                        staticStyle: {
                            width: "100%",
                            "margin-bottom": "10px"
                        },
                        attrs: {
                            data: e.logData
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            label: "序号",
                            type: "index",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "created_at",
                            label: "操作时间",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "real_name",
                            label: "操作人",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(e._s(t.row.operate_user.department_name) + " - " + e._s(t.row.operate_user.real_name))]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "content",
                            label: "内容",
                            align: "center"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "footer-pagination"
                    }, [r("el-pagination", {
                        attrs: {
                            background: "",
                            layout: "total, prev, pager, next, jumper",
                            total: e.logs.total,
                            "current-page": e.logs.page,
                            "page-size": 10
                        },
                        on: {
                            "update:currentPage": function(t) {
                                return e.$set(e.logs, "page", t)
                            },
                            "update:current-page": function(t) {
                                return e.$set(e.logs, "page", t)
                            },
                            "current-change": function(t) {
                                return e.getLogs()
                            }
                        }
                    })], 1)], 1)], 1), e._v(" "), r("div", {
                        staticClass: "flex-center"
                    }, [1 == e.info.status && 0 == e.info.is_out_of ? r("el-button", {
                        attrs: {
                            type: "success",
                            loading: e.saveLoading
                        },
                        on: {
                            click: function(t) {
                                return e.agree()
                            }
                        }
                    }, [e._v("同意")]) : e._e(), e._v(" "), 1 == e.info.status && 0 == e.info.is_out_of ? r("el-button", {
                        attrs: {
                            type: "danger",
                            loading: e.saveLoading
                        },
                        on: {
                            click: function(t) {
                                return e.refuse()
                            }
                        }
                    }, [e._v("拒绝")]) : e._e(), e._v(" "), 1 == e.info.status && 1 == e.info.is_out_of ? r("el-button", {
                        attrs: {
                            type: "danger",
                            loading: e.saveLoading
                        },
                        on: {
                            click: function(t) {
                                return e.refuse()
                            }
                        }
                    }, [e._v("取消申请")]) : e._e()], 1)], 1)
                },
                a = [],
                o = r("4838"),
                s = r.n(o),
                i = r("222f"),
                c = r("2934");

            function u(e, t) {
                var r;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = l(e)) || t && e && "number" === typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, s = !0,
                    i = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next();
                        return s = e.done, e
                    },
                    e: function(e) {
                        i = !0, o = e
                    },
                    f: function() {
                        try {
                            s || null == r.return || r.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                }
            }

            function l(e, t) {
                if (e) {
                    if ("string" === typeof e) return d(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? d(e, t) : void 0
                }
            }

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function p(e, t, r, n, a, o, s) {
                try {
                    var i = e[o](s),
                        c = i.value
                } catch (u) {
                    return void r(u)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function _(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function s(e) {
                            p(o, n, a, s, i, "next", e)
                        }

                        function i(e) {
                            p(o, n, a, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            var v = {
                    name: "DistributionReceptDetail",
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
                            upstream_order: {},
                            receiveOrder: {},
                            details: []
                        }
                    },
                    mounted: function() {
                        this.getDetail(), this.getLogs()
                    },
                    methods: {
                        getDetail: function() {
                            var e = _(s.a.mark((function e() {
                                var t, r;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t = this.$loading({
                                                target: ".app-container"
                                            }), e.next = 3, Object(i["d"])({
                                                receive_order_id: this.$route.query.id
                                            });
                                        case 3:
                                            r = e.sent, this.upstream_order = r.data.upstream_order, this.receiveOrder = r.data.receiveOrder, this.details = r.data.details, t.close();
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        getSummaries: function(e) {
                            var t = e.columns,
                                r = e.data,
                                n = [];
                            return t.forEach((function(e, t) {
                                if (0 !== t) {
                                    if ("product_cost.cost" == e.property) {
                                        var a, o = 0,
                                            s = u(r);
                                        try {
                                            for (s.s(); !(a = s.n()).done;) {
                                                var i = a.value;
                                                i.product_cost && (o += Number(i.product_cost.cost) * Number(i.receive_order_num))
                                            }
                                        } catch (_) {
                                            s.e(_)
                                        } finally {
                                            s.f()
                                        }
                                        n[t] = o
                                    }
                                    if ("receive_order_num" == e.property) {
                                        var c, l = 0,
                                            d = u(r);
                                        try {
                                            for (d.s(); !(c = d.n()).done;) {
                                                var p = c.value;
                                                l += Number(p.receive_order_num)
                                            }
                                        } catch (_) {
                                            d.e(_)
                                        } finally {
                                            d.f()
                                        }
                                        n[t] = l
                                    }
                                } else n[t] = "合计"
                            })), n
                        },
                        getLogs: function() {
                            var e = _(s.a.mark((function e() {
                                var t;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return this.logs.loading = !0, e.next = 3, Object(c["k"])({
                                                upstream_order_id: this.$route.query.id,
                                                upstream_order_type: "receive_orders",
                                                page: this.logs.page
                                            });
                                        case 3:
                                            t = e.sent, this.logData = t.data.data, this.logs.total = t.data.total, this.logs.loading = !1;
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    }
                },
                f = v,
                m = (r("7f06"), r("5d22")),
                g = Object(m["a"])(f, n, a, !1, null, "18e2f0a6", null);
            t["default"] = g.exports
        },
        "7f06": function(e, t, r) {
            "use strict";
            r("d001")
        },
        d001: function(e, t, r) {}
    }
]);