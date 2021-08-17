(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-0cac3048"], {
        "0360": function(t, e, n) {
            "use strict";
            n("2f69")
        },
        2934: function(t, e, n) {
            "use strict";
            n.d(e, "p", (function() {
                return a
            })), n.d(e, "d", (function() {
                return i
            })), n.d(e, "i", (function() {
                return o
            })), n.d(e, "m", (function() {
                return u
            })), n.d(e, "b", (function() {
                return s
            })), n.d(e, "g", (function() {
                return c
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
                return h
            })), n.d(e, "q", (function() {
                return b
            })), n.d(e, "f", (function() {
                return _
            })), n.d(e, "o", (function() {
                return g
            })), n.d(e, "c", (function() {
                return v
            })), n.d(e, "e", (function() {
                return y
            }));
            var r = n("b775");

            function a(t) {
                return Object(r["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(r["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(r["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(r["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(r["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
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

            function h(t) {
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

            function _(t) {
                return Object(r["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: t
                })
            }

            function g(t) {
                return Object(r["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: t
                })
            }

            function v(t) {
                return Object(r["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: t
                })
            }

            function y(t) {
                return Object(r["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: t
                })
            }
        },
        "2c3d": function(t, e, n) {
            "use strict";
            n.d(e, "e", (function() {
                return a
            })), n.d(e, "c", (function() {
                return i
            })), n.d(e, "a", (function() {
                return o
            })), n.d(e, "d", (function() {
                return u
            })), n.d(e, "b", (function() {
                return s
            }));
            var r = n("b775");

            function a(t) {
                return Object(r["a"])({
                    url: "/api/edit/scan_receive",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(r["a"])({
                    url: "/api/edit/scan_info",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(r["a"])({
                    url: "/api/edit/transfer_store_by_transfer",
                    method: "post",
                    data: t
                })
            }

            function u(t) {
                return Object(r["a"])({
                    url: "/api/edit/store_transfer_order_scan_tag",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(r["a"])({
                    url: "/api/edit/scan_imei_receive",
                    method: "get",
                    params: t
                })
            }
        },
        "2f69": function(t, e, n) {},
        a2f8: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "app-container"
                    }, [n("el-row", {
                        staticClass: "header-search"
                    }, [n("el-col", {
                        attrs: {
                            span: 8
                        }
                    }, [n("el-input", {
                        attrs: {
                            placeholder: "扫描IMEI号"
                        },
                        nativeOn: {
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.getDetail()
                            }
                        },
                        model: {
                            value: t.search.imei,
                            callback: function(e) {
                                t.$set(t.search, "imei", e)
                            },
                            expression: "search.imei"
                        }
                    })], 1)], 1), t._v(" "), n("el-row", {
                        staticClass: "body-list"
                    }, [n("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [n("el-table", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: t.loading,
                            expression: "loading"
                        }],
                        attrs: {
                            data: t.tableData,
                            border: "",
                            "show-summary": "",
                            "summary-method": t.getSummaries
                        }
                    }, [n("el-table-column", {
                        attrs: {
                            type: "index",
                            label: "序号",
                            align: "center",
                            width: "80"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "类目品牌",
                            width: "150",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v(t._s(e.row.type.name) + " " + t._s(e.row.brand.name))]
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "model.name",
                            label: "型号",
                            align: "center",
                            width: "130"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "参数信息",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return t._l(e.row.sales_properties, (function(r, a) {
                                    return n("span", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 12 != r.pn_id,
                                            expression: "item.pn_id != 12"
                                        }],
                                        key: a
                                    }, [t._v(t._s(r.pv_name) + " " + t._s(a + 1 != e.row.sales_properties.length ? "，" : ""))])
                                }))
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "imei",
                            label: "IMEI",
                            align: "center",
                            width: "180"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "成色",
                            align: "center",
                            width: "160"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return t._l(e.row.sales_properties, (function(e, r) {
                                    return n("span", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 12 == e.pn_id,
                                            expression: "item.pn_id == 12"
                                        }],
                                        key: r
                                    }, [t._v(t._s(e.pv_name))])
                                }))
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "product_cost.cost",
                            label: "成本价",
                            align: "center",
                            width: "100"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "num",
                            label: "数量",
                            align: "center",
                            width: "100"
                        }
                    })], 1)], 1)], 1), t._v(" "), n("el-row", [t.tableData.length > 0 ? n("el-col", {
                        staticClass: "flex-center"
                    }, [n("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.saveAndCreate()
                            }
                        }
                    }, [t._v("创建流转单")])], 1) : t._e()], 1), t._v(" "), n("AssignDialog", {
                        attrs: {
                            "show-dialog": t.showAssignDialog,
                            "require-user": !1
                        },
                        on: {
                            "update:showDialog": function(e) {
                                t.showAssignDialog = e
                            },
                            "update:show-dialog": function(e) {
                                t.showAssignDialog = e
                            },
                            done: t.handleAssingDone
                        },
                        model: {
                            value: t.assignForm,
                            callback: function(e) {
                                t.assignForm = e
                            },
                            expression: "assignForm"
                        }
                    })], 1)
                },
                a = [],
                i = n("4838"),
                o = n.n(i),
                u = n("2c3d"),
                s = n("ac47"),
                c = n("b7b8");

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
                var i, o = !0,
                    u = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        u = !0, i = t
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (u) throw i
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

            function f(t, e, n, r, a, i, o) {
                try {
                    var u = t[i](o),
                        s = u.value
                } catch (c) {
                    return void n(c)
                }
                u.done ? e(s) : Promise.resolve(s).then(r, a)
            }

            function m(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var i = t.apply(e, n);

                        function o(t) {
                            f(i, r, a, o, u, "next", t)
                        }

                        function u(t) {
                            f(i, r, a, o, u, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            var h = {
                    components: {
                        AssignDialog: c["a"]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            search: {
                                imei: null
                            },
                            loading: !1,
                            selectRows: [],
                            assignForm: {
                                to_node_id: 6
                            },
                            showAssignDialog: !1
                        }
                    },
                    mounted: function() {},
                    methods: {
                        getDetail: function() {
                            var t = m(o.a.mark((function t() {
                                var e;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, this.loading = !0, t.next = 4, Object(u["d"])({
                                                imei: this.search.imei
                                            });
                                        case 4:
                                            e = t.sent, this.loading = !1, e.data.num = 1, this.hasImei(e.data.imei) || this.tableData.push(e.data), t.next = 14;
                                            break;
                                        case 10:
                                            t.prev = 10, t.t0 = t["catch"](0), console.log(t.t0), this.loading = !1;
                                        case 14:
                                            this.search.imei = null;
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 10]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        hasImei: function(t) {
                            var e, n = l(this.tableData);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var r = e.value;
                                    if (r.imei == t) return !0
                                }
                            } catch (a) {
                                n.e(a)
                            } finally {
                                n.f()
                            }
                            return !1
                        },
                        saveAndCreate: function() {
                            this.showAssignDialog = !0
                        },
                        handleAssingDone: function() {
                            var t = m(o.a.mark((function t() {
                                var e, n, r, a, i, u;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            t.prev = 0, e = [], n = l(this.tableData);
                                            try {
                                                for (n.s(); !(r = n.n()).done;) a = r.value, e.push(a.product_id)
                                            } catch (o) {
                                                n.e(o)
                                            } finally {
                                                n.f()
                                            }
                                            return i = {
                                                product_ids: e,
                                                by_assign_user_id: this.assignForm.by_assign_user_id,
                                                to_node_id: this.assignForm.to_node_id
                                            }, console.log(i), this.loading = !0, t.next = 9, Object(s["c"])(i);
                                        case 9:
                                            u = t.sent, this.loading = !1, this.$message.success(u.msg), this.tableData = [], t.next = 18;
                                            break;
                                        case 15:
                                            t.prev = 15, t.t0 = t["catch"](0), this.loading = !1;
                                        case 18:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 15]
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
                                r = [];
                            return e.forEach((function(t, e) {
                                if (0 !== e) {
                                    if ("product_cost.cost" == t.property) {
                                        var a, i = 0,
                                            o = l(n);
                                        try {
                                            for (o.s(); !(a = o.n()).done;) {
                                                var u = a.value;
                                                u.product_cost && (i += Number(u.product_cost.cost))
                                            }
                                        } catch (f) {
                                            o.e(f)
                                        } finally {
                                            o.f()
                                        }
                                        r[e] = i
                                    }
                                    if ("num" == t.property) {
                                        var s, c = 0,
                                            d = l(n);
                                        try {
                                            for (d.s(); !(s = d.n()).done;) {
                                                var p = s.value;
                                                c += Number(p.num ? p.num : 1)
                                            }
                                        } catch (f) {
                                            d.e(f)
                                        } finally {
                                            d.f()
                                        }
                                        r[e] = c
                                    }
                                } else r[e] = "合计"
                            })), r
                        }
                    }
                },
                b = h,
                _ = (n("0360"), n("5d22")),
                g = Object(_["a"])(b, r, a, !1, null, "fd033d90", null);
            e["default"] = g.exports
        },
        ac47: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return a
            })), n.d(e, "c", (function() {
                return i
            })), n.d(e, "a", (function() {
                return o
            }));
            var r = n("b775");

            function a(t) {
                return Object(r["a"])({
                    url: "/api/edit/products_search",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(r["a"])({
                    url: "/api/edit/transfer_store",
                    method: "post",
                    data: t
                })
            }

            function o(t) {
                return Object(r["a"])({
                    url: "/api/product/batch_edit_price",
                    method: "post",
                    data: t
                })
            }
        }
    }
]);