(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-1f121408"], {
        2934: function(t, e, n) {
            "use strict";
            n.d(e, "p", (function() {
                return r
            })), n.d(e, "d", (function() {
                return i
            })), n.d(e, "i", (function() {
                return o
            })), n.d(e, "m", (function() {
                return s
            })), n.d(e, "b", (function() {
                return u
            })), n.d(e, "g", (function() {
                return c
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
                return g
            })), n.d(e, "q", (function() {
                return _
            })), n.d(e, "f", (function() {
                return m
            })), n.d(e, "o", (function() {
                return b
            })), n.d(e, "c", (function() {
                return v
            })), n.d(e, "e", (function() {
                return w
            }));
            var a = n("b775");

            function r(t) {
                return Object(a["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(a["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(a["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(a["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(a["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(a["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: t
                })
            }

            function l(t) {
                return Object(a["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(a["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(a["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: t
                })
            }

            function h(t) {
                return Object(a["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: t
                })
            }

            function f(t) {
                return Object(a["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: t
                })
            }

            function g(t) {
                return Object(a["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: t
                })
            }

            function _(t) {
                return Object(a["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: t
                })
            }

            function m(t) {
                return Object(a["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: t
                })
            }

            function b(t) {
                return Object(a["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: t
                })
            }

            function v(t) {
                return Object(a["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: t
                })
            }

            function w(t) {
                return Object(a["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: t
                })
            }
        },
        "63bf": function(t, e, n) {
            "use strict";
            n.r(e);
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "app-container"
                    }, [n("div", {
                        staticClass: "header-tools"
                    }, [n("div"), t._v(" "), n("div", [n("el-tag", {
                        attrs: {
                            type: "warning"
                        }
                    }, [t._v("已勾选：" + t._s(t.selectRows.length))]), t._v(" "), n("el-tag", {
                        attrs: {
                            type: "warning"
                        }
                    }, [t._v("总数量：" + t._s(t.tableData.length))])], 1)]), t._v(" "), n("el-row", {
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
                        },
                        on: {
                            "selection-change": t.handleSelectionChange
                        }
                    }, [n("el-table-column", {
                        attrs: {
                            type: "selection",
                            align: "center"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            type: "index",
                            label: "序号",
                            align: "center",
                            width: "80"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "类目品牌",
                            align: "center",
                            width: "200"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v(t._s(e.row.type_name) + " " + t._s(e.row.brand_name))]
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "model_name",
                            label: "型号",
                            align: "center",
                            width: "200"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "imei",
                            label: "IMEI",
                            align: "center",
                            width: "200px"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "参数信息",
                            "header-align": "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return t._l(e.row.sale_props_str.split("\n"), (function(e, a) {
                                    return n("el-tag", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: "成色" != e.split(":")[0] && "" != e,
                                            expression: "item.split(':')[0] != '成色' && item != ''"
                                        }],
                                        key: a,
                                        staticStyle: {
                                            "margin-right": "2px"
                                        },
                                        attrs: {
                                            size: "mini"
                                        }
                                    }, [t._v(t._s(e))])
                                }))
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "成色",
                            align: "center",
                            width: "150"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return t._l(e.row.sale_props_str.split("\n"), (function(e, a) {
                                    return n("div", {
                                        key: a
                                    }, ["成色" == e.split(":")[0] ? n("span", [t._v(t._s(e.split(":")[1]))]) : t._e()])
                                }))
                            }
                        }])
                    })], 1)], 1)], 1), t._v(" "), n("div", {
                        staticClass: "flex-center"
                    }, [0 != t.tableData.length ? n("el-button", {
                        attrs: {
                            type: "success"
                        },
                        on: {
                            click: function(e) {
                                return t.openAssignDialog()
                            }
                        }
                    }, [t._v("生成流转单")]) : t._e()], 1), t._v(" "), n("AssignDialog", {
                        attrs: {
                            "show-dialog": t.showAssignDialog,
                            "require-user": !1,
                            "disabled-node": !1
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
                r = [],
                i = n("4838"),
                o = n.n(i),
                s = n("bbd1"),
                u = n("b7b8");

            function c(t, e, n, a, r, i, o) {
                try {
                    var s = t[i](o),
                        u = s.value
                } catch (c) {
                    return void n(c)
                }
                s.done ? e(u) : Promise.resolve(u).then(a, r)
            }

            function l(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(a, r) {
                        var i = t.apply(e, n);

                        function o(t) {
                            c(i, a, r, o, s, "next", t)
                        }

                        function s(t) {
                            c(i, a, r, o, s, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            var d = {
                    components: {
                        AssignDialog: u["a"]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            selectRows: [],
                            loading: !1,
                            showAssignDialog: !1,
                            assignForm: {
                                to_node_id: 6
                            }
                        }
                    },
                    mounted: function() {
                        this.getList()
                    },
                    methods: {
                        getList: function() {
                            var t = l(o.a.mark((function t() {
                                var e;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return this.loading = !0, t.next = 3, Object(s["a"])();
                                        case 3:
                                            e = t.sent, this.loading = !1, this.tableData = e.data.data;
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
                        handleAssingDone: function() {
                            var t = l(o.a.mark((function t() {
                                var e, n, a, r;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e = null, t.prev = 1, e = this.$loading({
                                                target: ".app-container"
                                            }), n = {
                                                to_node_id: this.assignForm.to_node_id,
                                                by_assign_user_id: this.assignForm.by_assign_user_id,
                                                product_ids: []
                                            }, a = this.tableData, this.selectRows.length > 0 && (a = this.selectRows), n.product_ids = a.map((function(t) {
                                                return t.product_id
                                            })), t.next = 9, Object(s["b"])(n);
                                        case 9:
                                            r = t.sent, e.close(), this.$message.success(r.msg), this.$router.push({
                                                name: "editor-flow-list",
                                                query: {
                                                    transfer_order_no: r.data.transfer_order_no
                                                }
                                            }), t.next = 18;
                                            break;
                                        case 15:
                                            t.prev = 15, t.t0 = t["catch"](1), e && e.close();
                                        case 18:
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
                        openAssignDialog: function() {
                            this.showAssignDialog = !0
                        },
                        handleSelectionChange: function(t) {
                            this.selectRows = t
                        }
                    }
                },
                p = d,
                h = n("5d22"),
                f = Object(h["a"])(p, a, r, !1, null, "57b3dfc6", null);
            e["default"] = f.exports
        },
        bbd1: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            })), n.d(e, "b", (function() {
                return i
            }));
            var a = n("b775");

            function r(t) {
                return Object(a["a"])({
                    url: "/api/edit/to_be_packed",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(a["a"])({
                    url: "/api/edit/auto_un_pack",
                    method: "post",
                    data: t
                })
            }
        }
    }
]);