(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-d0ee4170"], {
        "67b4": function(t, e, n) {},
        "9ea7": function(t, e, n) {
            "use strict";
            n("67b4")
        },
        d12c: function(t, e, n) {
            "use strict";
            n.r(e);
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "app-container"
                    }, [n("div", {
                        staticClass: "detail-table body-list"
                    }, [n("el-row", [n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("调拨单号：")]), t._v(" "), n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v(t._s(t.info.move_batch_no))]), t._v(" "), n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("源仓库：")]), t._v(" "), n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v(t._s(t.info.src_warehouse_name))]), t._v(" "), n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("目标仓库：")]), t._v(" "), n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v(t._s(t.info.dst_warehouse_name))])], 1), t._v(" "), n("el-row", [n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("调拨类型：")]), t._v(" "), n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v(t._s(t.info.type_name))]), t._v(" "), n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("商品数量：")]), t._v(" "), n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v(t._s(t.info.num))]), t._v(" "), n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("状态：")]), t._v(" "), n("el-col", {
                        staticClass: "status",
                        attrs: {
                            span: 4
                        }
                    }, [n("el-link", {
                        attrs: {
                            type: 1 == t.info.status ? "warning" : 2 == t.info.status ? "success" : 3 == t.info.status ? "danger" : "",
                            underline: !1
                        }
                    }, [t._v(t._s(t.info.status_name))])], 1)], 1), t._v(" "), n("el-row", [n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("申请人：")]), t._v(" "), n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v(t._s(t.info.apply_user_name_new))]), t._v(" "), n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("申请时间：")]), t._v(" "), n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v(t._s(t.info.apply_time))])], 1), t._v(" "), 1 != t.info.status ? n("el-row", [n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("审核人：")]), t._v(" "), n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v(t._s(t.info.check_user_name_new))]), t._v(" "), n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("审核时间：")]), t._v(" "), n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v(t._s(t.info.check_time))])], 1) : t._e()], 1), t._v(" "), n("el-tabs", {
                        staticClass: "body-list",
                        model: {
                            value: t.activeTab,
                            callback: function(e) {
                                t.activeTab = e
                            },
                            expression: "activeTab"
                        }
                    }, [n("el-tab-pane", {
                        attrs: {
                            label: "商品明细",
                            name: "0"
                        }
                    }, [n("el-table", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            data: t.info.products,
                            "show-summary": "",
                            "summary-method": t.getSummaries
                        }
                    }, [n("el-table-column", {
                        attrs: {
                            label: "序号",
                            type: "index",
                            align: "center"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "product_name",
                            label: "商品名称",
                            align: "center"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "model.name",
                            label: "型号",
                            align: "center"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "参数信息",
                            "header-align": "center",
                            width: "350"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return t._l(e.row.sales_properties, (function(a, r) {
                                    return n("span", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 12 != a.pn_id,
                                            expression: "item.pn_id != 12"
                                        }],
                                        key: r
                                    }, [t._v(t._s(a.pv_name) + t._s(r == e.row.sales_properties.length - 1 ? "" : "，"))])
                                }))
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "imei",
                            label: "IMEI",
                            align: "center"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "cost",
                            label: "成色",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return t._l(e.row.sales_properties, (function(e, a) {
                                    return n("span", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 12 == e.pn_id,
                                            expression: "item.pn_id == 12"
                                        }],
                                        key: a
                                    }, [t._v(t._s(e.pv_name))])
                                }))
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "product_cost.cost",
                            label: "成本价",
                            align: "center"
                        }
                    })], 1)], 1), t._v(" "), n("el-tab-pane", {
                        attrs: {
                            label: "操作日志",
                            name: "1",
                            lazy: !0
                        }
                    }, [n("el-table", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            data: t.logData
                        }
                    }, [n("el-table-column", {
                        attrs: {
                            label: "序号",
                            type: "index",
                            align: "center"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "created_at",
                            label: "操作时间",
                            align: "center"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "operate_user",
                            label: "操作人",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [e.row.operate_user ? n("div", [t._v(t._s(e.row.operate_user.department_name) + "--" + t._s(e.row.operate_user.real_name))]) : t._e()]
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "content",
                            label: "内容",
                            align: "center"
                        }
                    })], 1)], 1)], 1), t._v(" "), n("div", {
                        staticClass: "flex-center"
                    }, [1 == t.info.status && 0 == t.info.is_out_of ? n("el-button", {
                        attrs: {
                            type: "success",
                            loading: t.saveLoading
                        },
                        on: {
                            click: function(e) {
                                return t.agree()
                            }
                        }
                    }, [t._v("同意")]) : t._e(), t._v(" "), 1 == t.info.status && 0 == t.info.is_out_of ? n("el-button", {
                        attrs: {
                            type: "danger",
                            loading: t.saveLoading
                        },
                        on: {
                            click: function(e) {
                                return t.refuse()
                            }
                        }
                    }, [t._v("拒绝")]) : t._e(), t._v(" "), 1 == t.info.status && 1 == t.info.is_out_of ? n("el-button", {
                        attrs: {
                            type: "danger",
                            loading: t.saveLoading
                        },
                        on: {
                            click: function(e) {
                                return t.cancel(t.info.id, t.info.move_batch_no)
                            }
                        }
                    }, [t._v("取消申请")]) : t._e(), t._v(" "), n("el-button", {
                        directives: [{
                            name: "print",
                            rawName: "v-print",
                            value: "#barcode-container",
                            expression: "'#barcode-container'"
                        }],
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.printImei()
                            }
                        }
                    }, [t._v("打印")])], 1), t._v(" "), n("Barcode", {
                        attrs: {
                            id: "barcode-container",
                            data: t.barcodeInfo
                        }
                    })], 1)
                },
                r = [],
                o = n("4838"),
                s = n.n(o),
                i = n("ea45"),
                c = n("6d8f");

            function u(t, e) {
                var n;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = l(t)) || e && t && "number" === typeof t.length) {
                        n && (t = n);
                        var a = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return a >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[a++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, s = !0,
                    i = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return s = t.done, t
                    },
                    e: function(t) {
                        i = !0, o = t
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (i) throw o
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
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a
            }

            function _(t, e, n, a, r, o, s) {
                try {
                    var i = t[o](s),
                        c = i.value
                } catch (u) {
                    return void n(u)
                }
                i.done ? e(c) : Promise.resolve(c).then(a, r)
            }

            function f(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(a, r) {
                        var o = t.apply(e, n);

                        function s(t) {
                            _(o, a, r, s, i, "next", t)
                        }

                        function i(t) {
                            _(o, a, r, s, i, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }
            var d = {
                    name: "DistributionInOutDetail",
                    components: {
                        Barcode: c["a"]
                    },
                    data: function() {
                        return {
                            activeTab: "0",
                            info: {},
                            logData: [],
                            saveLoading: !1,
                            barcodeInfo: []
                        }
                    },
                    mounted: function() {
                        this.getDetail(), this.logs()
                    },
                    methods: {
                        getDetail: function() {
                            var t = f(s.a.mark((function t() {
                                var e, n;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e = this.$loading({
                                                target: ".app-container"
                                            }), t.next = 3, Object(i["d"])({
                                                id: this.$route.query.id
                                            });
                                        case 3:
                                            n = t.sent, e.close(), this.info = n.data;
                                        case 6:
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
                        refuse: function() {
                            var t = f(s.a.mark((function t() {
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, this.$confirm("确定拒绝【".concat(this.info.move_batch_no, "】吗？"), "提示", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 3:
                                            return this.saveLoading = !0, t.next = 6, Object(i["k"])({
                                                id: this.info.id
                                            });
                                        case 6:
                                            this.saveLoading = !1, this.$message.success("操作成功！"), this.getDetail(), t.next = 14;
                                            break;
                                        case 11:
                                            t.prev = 11, t.t0 = t["catch"](0), this.saveLoading = !1;
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 11]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        getSummaries: function(t) {
                            var e = t.columns,
                                n = t.data,
                                a = [];
                            return e.forEach((function(t, e) {
                                if (0 !== e) {
                                    if ("product_cost.cost" == t.property) {
                                        var r, o = 0,
                                            s = u(n);
                                        try {
                                            for (s.s(); !(r = s.n()).done;) {
                                                var i = r.value;
                                                i.product_cost && (o += Number(i.product_cost.cost))
                                            }
                                        } catch (c) {
                                            s.e(c)
                                        } finally {
                                            s.f()
                                        }
                                        a[e] = o
                                    }
                                } else a[e] = "合计"
                            })), a
                        },
                        agree: function() {
                            var t = f(s.a.mark((function t() {
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, this.$confirm("确定同意【".concat(this.info.move_batch_no, "】吗？"), "提示", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 3:
                                            return this.saveLoading = !0, t.next = 6, Object(i["b"])({
                                                id: this.info.id
                                            });
                                        case 6:
                                            this.saveLoading = !1, this.$message.success("操作成功！"), this.getDetail(), t.next = 14;
                                            break;
                                        case 11:
                                            t.prev = 11, t.t0 = t["catch"](0), this.saveLoading = !1;
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 11]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        logs: function() {
                            var t = f(s.a.mark((function t() {
                                var e;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(i["j"])({
                                                upstream_order_id: this.$route.query.id,
                                                upstream_order_type: "warehouse_switch "
                                            });
                                        case 2:
                                            e = t.sent, this.logData = e.data.data;
                                        case 4:
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
                        cancel: function() {
                            var t = f(s.a.mark((function t(e, n) {
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, this.$confirm("确定取消【".concat(n, "】？"), "提示", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 3:
                                            return this.loading = !0, t.next = 6, Object(i["c"])({
                                                id: e
                                            });
                                        case 6:
                                            this.loading = !1, this.$message.success("操作成功！"), this.getDetail(), t.next = 14;
                                            break;
                                        case 11:
                                            t.prev = 11, t.t0 = t["catch"](0), this.loading = !1;
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 11]
                                ])
                            })));

                            function e(e, n) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        printImei: function() {
                            this.barcodeInfo = [{
                                title: "".concat(this.info.src_area_name, "-").concat(this.info.src_warehouse_name, "---\x3e").concat(this.info.dst_area_name, "-").concat(this.info.dst_warehouse_name, "<br/>（").concat(this.info.products.length, "台）"),
                                code: this.info.move_batch_no
                            }]
                        }
                    }
                },
                v = d,
                h = (n("9ea7"), n("5d22")),
                m = Object(h["a"])(v, a, r, !1, null, "0e062472", null);
            e["default"] = m.exports
        },
        ea45: function(t, e, n) {
            "use strict";
            n.d(e, "e", (function() {
                return r
            })), n.d(e, "h", (function() {
                return o
            })), n.d(e, "i", (function() {
                return s
            })), n.d(e, "g", (function() {
                return i
            })), n.d(e, "k", (function() {
                return c
            })), n.d(e, "c", (function() {
                return u
            })), n.d(e, "d", (function() {
                return l
            })), n.d(e, "f", (function() {
                return p
            })), n.d(e, "b", (function() {
                return _
            })), n.d(e, "j", (function() {
                return f
            })), n.d(e, "a", (function() {
                return d
            }));
            var a = n("b775");

            function r(t) {
                return Object(a["a"])({
                    url: "/api/switch/orders",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(a["a"])({
                    url: "/api/switch/types",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(a["a"])({
                    url: "/api/switch/warehouse_list",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(a["a"])({
                    url: "/api/switch/status",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(a["a"])({
                    url: "/api/switch/refuse",
                    method: "post",
                    data: t
                })
            }

            function u(t) {
                return Object(a["a"])({
                    url: "/api/switch/cancel",
                    method: "post",
                    data: t
                })
            }

            function l(t) {
                return Object(a["a"])({
                    url: "/api/switch/detail",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(a["a"])({
                    url: "/api/switch/product_list",
                    method: "get",
                    params: t
                })
            }

            function _(t) {
                return Object(a["a"])({
                    url: "/api/switch/agree",
                    method: "post",
                    data: t
                })
            }

            function f(t) {
                return Object(a["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(a["a"])({
                    url: "/api/switch/store_out_of_warehouse",
                    method: "post",
                    data: t
                })
            }
        }
    }
]);