(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-b271a810"], {
        1709: function(t, e, n) {},
        2934: function(t, e, n) {
            "use strict";
            n.d(e, "p", (function() {
                return a
            })), n.d(e, "d", (function() {
                return o
            })), n.d(e, "i", (function() {
                return i
            })), n.d(e, "m", (function() {
                return c
            })), n.d(e, "b", (function() {
                return u
            })), n.d(e, "g", (function() {
                return s
            })), n.d(e, "k", (function() {
                return l
            })), n.d(e, "j", (function() {
                return d
            })), n.d(e, "h", (function() {
                return p
            })), n.d(e, "n", (function() {
                return f
            })), n.d(e, "a", (function() {
                return m
            })), n.d(e, "l", (function() {
                return _
            })), n.d(e, "q", (function() {
                return b
            })), n.d(e, "f", (function() {
                return h
            })), n.d(e, "o", (function() {
                return v
            })), n.d(e, "c", (function() {
                return y
            })), n.d(e, "e", (function() {
                return g
            }));
            var r = n("b775");

            function a(t) {
                return Object(r["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(r["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(r["a"])({
                    url: "/api/product/type_brand_models",
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
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(r["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: t
                })
            }

            function l(t) {
                return Object(r["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(r["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(r["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: t
                })
            }

            function f(t) {
                return Object(r["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: t
                })
            }

            function m(t) {
                return Object(r["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: t
                })
            }

            function _(t) {
                return Object(r["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: t
                })
            }

            function b(t) {
                return Object(r["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: t
                })
            }

            function h(t) {
                return Object(r["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: t
                })
            }

            function v(t) {
                return Object(r["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: t
                })
            }

            function y(t) {
                return Object(r["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: t
                })
            }

            function g(t) {
                return Object(r["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: t
                })
            }
        },
        "7ea1": function(t, e, n) {
            "use strict";
            n("1709")
        },
        9308: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "app-container"
                    }, [n("div", {
                        staticClass: "header-search"
                    }, [n("ImeiSearch", {
                        staticStyle: {
                            width: "300px"
                        },
                        attrs: {
                            placeholder: "扫描IMEI号"
                        },
                        on: {
                            done: t.getAbnormalImeiData
                        },
                        model: {
                            value: t.imei,
                            callback: function(e) {
                                t.imei = e
                            },
                            expression: "imei"
                        }
                    })], 1), t._v(" "), t._l(t.scannData, (function(e, r) {
                        return n("div", {
                            key: e.detail.product_id
                        }, [n("el-row", [n("el-col", [n("el-alert", {
                            attrs: {
                                type: "success",
                                closable: !1
                            }
                        }, [n("el-row", [n("el-col", {
                            staticClass: "header-info",
                            attrs: {
                                span: 16
                            }
                        }, [n("div", [t._v("\n                流转单号：\n                "), n("span", [t._v(t._s(e.transfer_order.transfer_order_no))])]), t._v(" "), n("div", [t._v("\n                流转步骤：\n                "), n("span", [t._v(t._s(e.transfer_order.source_node.name) + "—>" + t._s(e.transfer_order.to_node.name))])]), t._v(" "), n("div", [t._v("\n                创建时间：\n                "), n("span", [t._v(t._s(e.transfer_order.created_at))])]), t._v(" "), n("div", [t._v("\n                异常数量合计：\n                "), n("span", [t._v(t._s(e.transfer_order.abnormal_num))])]), t._v(" "), n("div", [t._v("\n                成本合计：\n                "), n("span", [t._v(t._s(e.transfer_order.total_cost))])])]), t._v(" "), n("el-col", {
                            staticClass: "header-total",
                            attrs: {
                                span: 8
                            }
                        }, [n("el-button", {
                            attrs: {
                                type: "danger",
                                size: "mini"
                            },
                            on: {
                                click: function(e) {
                                    return t.handleClickTableDelete(r)
                                }
                            }
                        }, [t._v("删除")])], 1)], 1)], 1)], 1)], 1), t._v(" "), n("el-row", {
                            staticClass: "body-list"
                        }, [n("el-col", {
                            attrs: {
                                span: 24
                            }
                        }, [n("el-table", {
                            attrs: {
                                data: e.detail,
                                border: ""
                            }
                        }, [n("el-table-column", {
                            attrs: {
                                type: "index",
                                label: "序号",
                                align: "center",
                                width: "50"
                            }
                        }), t._v(" "), n("el-table-column", {
                            attrs: {
                                prop: "brand.name",
                                label: "品牌",
                                width: "100",
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
                                prop: "imei",
                                label: "IMEI",
                                align: "center"
                            }
                        }), t._v(" "), n("el-table-column", {
                            attrs: {
                                label: "异常数量",
                                align: "center"
                            }
                        }, [t._v("1")]), t._v(" "), n("el-table-column", {
                            attrs: {
                                prop: "product_cost.cost",
                                label: "成本",
                                align: "center"
                            }
                        }), t._v(" "), n("el-table-column", {
                            attrs: {
                                label: "异常原因",
                                align: "center"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [n("ExceptionReason", {
                                        attrs: {
                                            mode: "edit"
                                        },
                                        model: {
                                            value: e.row.abnormalVal,
                                            callback: function(n) {
                                                t.$set(e.row, "abnormalVal", n)
                                            },
                                            expression: "scope.row.abnormalVal"
                                        }
                                    })]
                                }
                            }], null, !0)
                        }), t._v(" "), n("el-table-column", {
                            attrs: {
                                label: "异常描述",
                                align: "center"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [n("el-input", {
                                        attrs: {
                                            type: "textarea",
                                            rows: 2,
                                            placeholder: "请输入内容"
                                        },
                                        model: {
                                            value: e.row.textarea,
                                            callback: function(n) {
                                                t.$set(e.row, "textarea", n)
                                            },
                                            expression: "scope.row.textarea"
                                        }
                                    })]
                                }
                            }], null, !0)
                        }), t._v(" "), n("el-table-column", {
                            attrs: {
                                label: "操作",
                                align: "center"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [n("el-button", {
                                        attrs: {
                                            type: "danger",
                                            plain: "",
                                            size: "mini"
                                        },
                                        on: {
                                            click: function(n) {
                                                return t.handleClickDelete(r, e.$index)
                                            }
                                        }
                                    }, [t._v("删除")])]
                                }
                            }], null, !0)
                        })], 1)], 1)], 1)], 1)
                    })), t._v(" "), n("el-row", [n("el-col", {
                        staticClass: "flex-center"
                    }, [t.scannData.length > 0 ? n("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.tableSubmit
                        }
                    }, [t._v("完成提交")]) : t._e()], 1)], 1)], 2)
                },
                a = [],
                o = n("4838"),
                i = n.n(o),
                c = n("a6a4"),
                u = n("c058"),
                s = n("246e");

            function l(t, e) {
                var n;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = d(t)) || e && t && "number" === typeof t.length) {
                        n && (t = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
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
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, i = !0,
                    c = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return i = t.done, t
                    },
                    e: function(t) {
                        c = !0, o = t
                    },
                    f: function() {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function d(t, e) {
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

            function f(t, e, n, r, a, o, i) {
                try {
                    var c = t[o](i),
                        u = c.value
                } catch (s) {
                    return void n(s)
                }
                c.done ? e(u) : Promise.resolve(u).then(r, a)
            }

            function m(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = t.apply(e, n);

                        function i(t) {
                            f(o, r, a, i, c, "next", t)
                        }

                        function c(t) {
                            f(o, r, a, i, c, "throw", t)
                        }
                        i(void 0)
                    }))
                }
            }
            var _ = {
                    name: "Main",
                    components: {
                        ExceptionReason: u["a"],
                        ImeiSearch: s["a"]
                    },
                    data: function() {
                        return {
                            imei: "",
                            scannData: []
                        }
                    },
                    mounted: function() {},
                    methods: {
                        getAbnormalImeiData: function() {
                            var t = m(i.a.mark((function t() {
                                var e, n, r, a, o, u, s, d;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (!this.imei) {
                                                t.next = 48;
                                                break
                                            }
                                            return t.prev = 1, t.next = 4, Object(c["a"])({
                                                imei: this.imei
                                            });
                                        case 4:
                                            if (e = t.sent, this.imei = null, 1 != e.code) {
                                                t.next = 43;
                                                break
                                            }
                                            if (n = e.data.detail, n.abnormalVal = "", n.textarea = "", 0 != this.scannData.length) {
                                                t.next = 14;
                                                break
                                            }
                                            this.scannData.push({
                                                transfer_order: e.data.transfer_order,
                                                detail: [n]
                                            }), t.next = 43;
                                            break;
                                        case 14:
                                            r = null, a = !0, o = 0;
                                        case 17:
                                            if (!(o < this.scannData.length)) {
                                                t.next = 42;
                                                break
                                            }
                                            if (r = this.scannData[o], r.transfer_order.id != e.data.transfer_order.id) {
                                                t.next = 39;
                                                break
                                            }
                                            a = !1, u = l(r.detail), t.prev = 22, u.s();
                                        case 24:
                                            if ((s = u.n()).done) {
                                                t.next = 30;
                                                break
                                            }
                                            if (d = s.value, n.product_id != d.product_id) {
                                                t.next = 28;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 28:
                                            t.next = 24;
                                            break;
                                        case 30:
                                            t.next = 35;
                                            break;
                                        case 32:
                                            t.prev = 32, t.t0 = t["catch"](22), u.e(t.t0);
                                        case 35:
                                            return t.prev = 35, u.f(), t.finish(35);
                                        case 38:
                                            r.detail.push(n);
                                        case 39:
                                            o++, t.next = 17;
                                            break;
                                        case 42:
                                            a && this.scannData.push({
                                                transfer_order: e.data.transfer_order,
                                                detail: [n]
                                            });
                                        case 43:
                                            t.next = 48;
                                            break;
                                        case 45:
                                            t.prev = 45, t.t1 = t["catch"](1), this.imei = null;
                                        case 48:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [1, 45],
                                    [22, 32, 35, 38]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        handleClickTableDelete: function(t) {
                            this.scannData.splice(t, 1)
                        },
                        handleClickDelete: function(t, e) {
                            this.scannData[t].detail.splice(e, 1)
                        },
                        tableSubmit: function() {
                            var t = m(i.a.mark((function t() {
                                var e, n, r, a, o, u, s, d, p;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            e = [], n = l(this.scannData);
                                            try {
                                                for (n.s(); !(r = n.n()).done;) {
                                                    a = r.value, o = [], u = l(a.detail);
                                                    try {
                                                        for (u.s(); !(s = u.n()).done;) d = s.value, o.push({
                                                            product_id: d.product_id,
                                                            reason: d.abnormalVal,
                                                            remark: d.textarea,
                                                            cost_price: d.product_cost.cost,
                                                            model_id: d.model_id,
                                                            brand_id: d.brand_id,
                                                            type_id: d.type_id
                                                        })
                                                    } catch (i) {
                                                        u.e(i)
                                                    } finally {
                                                        u.f()
                                                    }
                                                    e.push({
                                                        transfer_order_id: a.transfer_order.id,
                                                        products: o
                                                    })
                                                }
                                            } catch (i) {
                                                n.e(i)
                                            } finally {
                                                n.f()
                                            }
                                            return t.next = 5, Object(c["c"])({
                                                abnormal_report_orders: e
                                            });
                                        case 5:
                                            p = t.sent, 1 == p.code && this.$message({
                                                message: "提交成功",
                                                type: "success"
                                            });
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
                b = _,
                h = (n("7ea1"), n("5d22")),
                v = Object(h["a"])(b, r, a, !1, null, "29d3dad4", null);
            e["default"] = v.exports
        },
        a6a4: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            })), n.d(e, "c", (function() {
                return o
            })), n.d(e, "b", (function() {
                return i
            }));
            var r = n("b775");

            function a(t) {
                return Object(r["a"])({
                    url: "/api/up_shift/abnormal_report_scan_tag",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(r["a"])({
                    url: "/api/up_shift/batch_abnormal_report",
                    method: "post",
                    data: t
                })
            }

            function i(t) {
                return Object(r["a"])({
                    url: "/api/up_shift/abnormal_report",
                    method: "post",
                    data: t
                })
            }
        }
    }
]);