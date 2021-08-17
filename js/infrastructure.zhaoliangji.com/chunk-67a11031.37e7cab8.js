(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-67a11031"], {
        2934: function(t, e, n) {
            "use strict";
            n.d(e, "p", (function() {
                return a
            })), n.d(e, "d", (function() {
                return i
            })), n.d(e, "i", (function() {
                return s
            })), n.d(e, "m", (function() {
                return o
            })), n.d(e, "b", (function() {
                return c
            })), n.d(e, "g", (function() {
                return u
            })), n.d(e, "k", (function() {
                return l
            })), n.d(e, "j", (function() {
                return d
            })), n.d(e, "h", (function() {
                return p
            })), n.d(e, "n", (function() {
                return h
            })), n.d(e, "a", (function() {
                return f
            })), n.d(e, "l", (function() {
                return _
            })), n.d(e, "q", (function() {
                return m
            })), n.d(e, "f", (function() {
                return b
            })), n.d(e, "o", (function() {
                return v
            })), n.d(e, "c", (function() {
                return g
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

            function s(t) {
                return Object(r["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(r["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(r["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
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

            function h(t) {
                return Object(r["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: t
                })
            }

            function f(t) {
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

            function m(t) {
                return Object(r["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: t
                })
            }

            function b(t) {
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

            function g(t) {
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
        a0c9: function(t, e, n) {
            "use strict";
            n("a9e9")
        },
        a9e9: function(t, e, n) {},
        c57a: function(t, e, n) {
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
                            span: 24
                        }
                    }, [n("div", {
                        staticClass: "header-tools"
                    }, [n("div", {
                        staticClass: "same-width wrap"
                    }, [n("div", {
                        staticClass: "search-item"
                    }, [n("Nodes", {
                        attrs: {
                            "hide-ids": [1, 2],
                            placeholder: "分配至"
                        },
                        model: {
                            value: t.search.to_node_id,
                            callback: function(e) {
                                t.$set(t.search, "to_node_id", e)
                            },
                            expression: "search.to_node_id"
                        }
                    })], 1), t._v(" "), n("div", {
                        staticClass: "search-item"
                    }, [n("UserList", {
                        attrs: {
                            multiple: !1,
                            checkStrictly: !0,
                            placeholder: "组成员"
                        },
                        model: {
                            value: t.search.by_assign_user_id,
                            callback: function(e) {
                                t.$set(t.search, "by_assign_user_id", e)
                            },
                            expression: "search.by_assign_user_id"
                        }
                    })], 1), t._v(" "), n("div", {
                        staticClass: "search-item"
                    }, [n("el-input", {
                        attrs: {
                            disabled: !t.search.to_node_id,
                            placeholder: "IMEI"
                        },
                        nativeOn: {
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.getList()
                            }
                        },
                        model: {
                            value: t.search.imei,
                            callback: function(e) {
                                t.$set(t.search, "imei", e)
                            },
                            expression: "search.imei"
                        }
                    })], 1)]), t._v(" "), n("el-tag", {
                        attrs: {
                            type: "primary"
                        }
                    }, [t._v("共" + t._s(t.tableData.length) + "台")])], 1)])], 1), t._v(" "), n("el-row", {
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
                            border: ""
                        }
                    }, [n("el-table-column", {
                        attrs: {
                            type: "index",
                            label: "序号",
                            width: "80",
                            align: "center"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "product_name",
                            label: "商品名称",
                            align: "center",
                            width: "230"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "model.name",
                            label: "型号",
                            align: "center",
                            width: "200"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "参数信息",
                            "header-align": "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return t._l(e.row.sales_properties, (function(e, r) {
                                    return n("div", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 12 != e.pn_id,
                                            expression: "item.pn_id != 12"
                                        }],
                                        key: r
                                    }, [t._v(t._s(e.pn_name) + "：" + t._s(e.pv_name))])
                                }))
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "imei",
                            label: "IMEI",
                            align: "center",
                            width: "160"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "成色",
                            align: "center",
                            width: "100"
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
                            label: "操作",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [n("el-button", {
                                    attrs: {
                                        type: "danger",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(n) {
                                            return t.tableData.splice(e.$index, 1)
                                        }
                                    }
                                }, [t._v("删除")])]
                            }
                        }])
                    })], 1)], 1)], 1), t._v(" "), n("div", {
                        staticClass: "flex-center"
                    }, [n("el-button", {
                        attrs: {
                            type: "success",
                            loading: t.saveLoading
                        },
                        on: {
                            click: t.save
                        }
                    }, [t._v("保存并创建流转单")])], 1)], 1)
                },
                a = [],
                i = n("4838"),
                s = n.n(i),
                o = n("b775");

            function c(t) {
                return Object(o["a"])({
                    url: "/api/receive/scan_abnormal_product",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(o["a"])({
                    url: "/api/receive/abnormal_transfer_store",
                    method: "post",
                    data: t
                })
            }
            var l = n("5e61"),
                d = n("c35b");

            function p(t, e) {
                var n;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = h(t)) || e && t && "number" === typeof t.length) {
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
                var i, s = !0,
                    o = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return s = t.done, t
                    },
                    e: function(t) {
                        o = !0, i = t
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                }
            }

            function h(t, e) {
                if (t) {
                    if ("string" === typeof t) return f(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0
                }
            }

            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function _(t, e, n, r, a, i, s) {
                try {
                    var o = t[i](s),
                        c = o.value
                } catch (u) {
                    return void n(u)
                }
                o.done ? e(c) : Promise.resolve(c).then(r, a)
            }

            function m(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var i = t.apply(e, n);

                        function s(t) {
                            _(i, r, a, s, o, "next", t)
                        }

                        function o(t) {
                            _(i, r, a, s, o, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }
            var b = {
                    components: {
                        Nodes: l["a"],
                        UserList: d["a"]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            search: {
                                to_node_id: null,
                                imei: null,
                                by_assign_user_id: null
                            },
                            loading: !1,
                            saveLoading: !1,
                            barcodeInfo: []
                        }
                    },
                    mounted: function() {},
                    methods: {
                        getList: function() {
                            var t = m(s.a.mark((function t() {
                                var e, n, r, a, i, o, u, l;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, this.loading = !0, t.next = 4, c(this.search);
                                        case 4:
                                            e = t.sent, this.loading = !1, n = p(e.data);
                                            try {
                                                for (n.s(); !(r = n.n()).done;) {
                                                    a = r.value, i = !0, o = p(this.tableData);
                                                    try {
                                                        for (o.s(); !(u = o.n()).done;) l = u.value, a.product_id == l.product_id && (i = !1)
                                                    } catch (s) {
                                                        o.e(s)
                                                    } finally {
                                                        o.f()
                                                    }
                                                    i && this.tableData.unshift(a)
                                                }
                                            } catch (s) {
                                                n.e(s)
                                            } finally {
                                                n.f()
                                            }
                                            this.search.imei = null, t.next = 14;
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

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        save: function() {
                            var t = m(s.a.mark((function t() {
                                var e, n, r, a, i;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (!(this.tableData.length > 0)) {
                                                t.next = 21;
                                                break
                                            }
                                            t.prev = 1, e = {
                                                to_node_id: this.search.to_node_id,
                                                by_assign_user_id: this.search.by_assign_user_id,
                                                product_ids: []
                                            }, n = p(this.tableData);
                                            try {
                                                for (n.s(); !(r = n.n()).done;) a = r.value, e.product_ids.push(a.product_id)
                                            } catch (s) {
                                                n.e(s)
                                            } finally {
                                                n.f()
                                            }
                                            return this.saveLoading = !0, t.next = 8, u(e);
                                        case 8:
                                            i = t.sent, this.saveLoading = !1, this.tableData = [], this.$message.success(i.msg), this.$router.push({
                                                name: "distribution-flow-list",
                                                query: {
                                                    order_no: i.data.transfer_order_no
                                                }
                                            }), t.next = 19;
                                            break;
                                        case 15:
                                            t.prev = 15, t.t0 = t["catch"](1), console.log(t.t0), this.saveLoading = !1;
                                        case 19:
                                            t.next = 22;
                                            break;
                                        case 21:
                                            this.$message.warning("商品列表不能为空");
                                        case 22:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [1, 15]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        resetSearch: function() {
                            this.search = {
                                to_node_id: null,
                                imei: null,
                                by_assign_user_id: null
                            }
                        }
                    }
                },
                v = b,
                g = (n("a0c9"), n("5d22")),
                y = Object(g["a"])(v, r, a, !1, null, "12702115", null);
            e["default"] = y.exports
        }
    }
]);