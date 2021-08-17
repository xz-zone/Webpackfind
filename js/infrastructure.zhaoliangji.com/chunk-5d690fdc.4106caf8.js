(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-5d690fdc"], {
        "006d": function(t, e, r) {
            "use strict";
            r.r(e);
            var a = function() {
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
                    }, [r("div", {
                        staticClass: "same-width"
                    }, [r("div", {
                        staticClass: "search-item"
                    }, [r("userList", {
                        attrs: {
                            multiple: !1,
                            placeholder: "错误人"
                        },
                        model: {
                            value: t.search.user_id,
                            callback: function(e) {
                                t.$set(t.search, "user_id", e)
                            },
                            expression: "search.user_id"
                        }
                    })], 1), t._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "错误类型"
                        },
                        model: {
                            value: t.search.error_type_id,
                            callback: function(e) {
                                t.$set(t.search, "error_type_id", e)
                            },
                            expression: "search.error_type_id"
                        }
                    }, t._l(t.dict.error_type, (function(t, e) {
                        return r("el-option", {
                            key: e,
                            attrs: {
                                value: t.id,
                                label: t.name
                            }
                        })
                    })), 1)], 1), t._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("TypeBrandModel", {
                        attrs: {
                            level: 1,
                            dict: t.dict,
                            "is-search": !0
                        },
                        model: {
                            value: t.search,
                            callback: function(e) {
                                t.search = e
                            },
                            expression: "search"
                        }
                    })], 1)])]), t._v(" "), r("el-col", {
                        staticClass: "operat-btn",
                        attrs: {
                            span: 3
                        }
                    }, [r("el-button", {
                        attrs: {
                            type: "warning"
                        },
                        on: {
                            click: function(e) {
                                return t.getList(1)
                            }
                        }
                    }, [t._v("查询")]), t._v(" "), r("el-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: function(e) {
                                return t.resetSearch()
                            }
                        }
                    }, [t._v("重置")])], 1)], 1), t._v(" "), r("div", {
                        staticClass: "header-tools"
                    }, [r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.getList(2)
                            }
                        }
                    }, [t._v("导出")])], 1), t._v(" "), r("el-row", {
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
                            border: ""
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            prop: "created_at",
                            label: "时间",
                            align: "center",
                            width: "180"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "user.real_name",
                            label: "错误人",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "error_report.error_type.name",
                            label: "错误类型",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product.type.name",
                            label: "类目",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product.brand.name",
                            label: "品牌",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product.model.name",
                            label: "型号",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product.sales_properties",
                            label: "参数",
                            "header-align": "center",
                            width: "350"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return t._l(e.row.product.sales_properties, (function(e) {
                                    return r("el-tag", {
                                        key: e.pn_id,
                                        staticStyle: {
                                            "margin-right": "3px"
                                        },
                                        attrs: {
                                            type: "primary",
                                            size: "mini"
                                        }
                                    }, [t._v(t._s(e.pn_name) + ":" + t._s(e.pv_name))])
                                }))
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product.imei",
                            label: "IMEI",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "成色",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return t._l(e.row.product.sales_properties, (function(e) {
                                    return r("span", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 12 == e.pn_id,
                                            expression: "item.pn_id == 12"
                                        }],
                                        key: e.pn_id
                                    }, [t._v(t._s(e.pv_name))])
                                }))
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product.product_cost.cost",
                            label: "成本价",
                            align: "center"
                        }
                    })], 1)], 1)], 1), t._v(" "), r("div", {
                        staticClass: "footer-pagination"
                    }, [r("el-pagination", {
                        attrs: {
                            background: "",
                            layout: "total, prev, pager, next, jumper",
                            total: t.total,
                            "current-page": t.search.page,
                            "page-size": t.search.per_page
                        },
                        on: {
                            "update:currentPage": function(e) {
                                return t.$set(t.search, "page", e)
                            },
                            "update:current-page": function(e) {
                                return t.$set(t.search, "page", e)
                            },
                            "update:pageSize": function(e) {
                                return t.$set(t.search, "per_page", e)
                            },
                            "update:page-size": function(e) {
                                return t.$set(t.search, "per_page", e)
                            },
                            "current-change": function(e) {
                                return t.getList()
                            }
                        }
                    })], 1)], 1)
                },
                n = [],
                o = r("4838"),
                i = r.n(o),
                u = r("b775");

            function c(t) {
                return Object(u["a"])({
                    url: "/api/data_statistics/error_data",
                    method: "get",
                    params: t
                })
            }
            var s = r("c0f9"),
                p = r("c35b"),
                l = r("1504");

            function d(t, e, r, a, n, o, i) {
                try {
                    var u = t[o](i),
                        c = u.value
                } catch (s) {
                    return void r(s)
                }
                u.done ? e(c) : Promise.resolve(c).then(a, n)
            }

            function _(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(a, n) {
                        var o = t.apply(e, r);

                        function i(t) {
                            d(o, a, n, i, u, "next", t)
                        }

                        function u(t) {
                            d(o, a, n, i, u, "throw", t)
                        }
                        i(void 0)
                    }))
                }
            }
            var h = {
                    components: {
                        UserList: p["a"],
                        TypeBrandModel: l["a"]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            search: {
                                error_type_id: null,
                                user_id: null,
                                product_type_id: null,
                                node_id: null,
                                created_at: [],
                                page: 1,
                                per_page: 10
                            },
                            loading: !1,
                            dict: {
                                error_type: []
                            },
                            total: 0
                        }
                    },
                    mounted: function() {
                        this.search.node_id = this.$route.query.node_id, this.$route.query.record_date && 2 != this.$route.query.record_date.length ? this.search.created_at = [this.$route.query.record_date + " 00:00:00", this.$route.query.record_date + " 23:59:59"] : this.search.created_at = this.$route.query.record_date, this.getList(), this.getErrType()
                    },
                    methods: {
                        getList: function() {
                            var t = _(i.a.mark((function t(e) {
                                var r, a;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, r = {
                                                product_type_id: this.search.type_id,
                                                error_type_id: this.search.error_type_id,
                                                user_id: this.search.user_id,
                                                node_id: this.search.node_id,
                                                created_at: this.search.created_at
                                            }, 1 == e ? r.page = 1 : 2 == e && (r.is_export = 1), this.loading = !0, t.next = 6, c(r);
                                        case 6:
                                            a = t.sent, this.loading = !1, 2 != e ? (this.tableData = a.data.data, this.total = a.data.total) : window.open(a.data), t.next = 14;
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

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        resetSearch: function() {
                            this.search.error_type_id = null, this.search.user_id = null, this.search.product_type_id = null, this.search.type_id = null, this.getList(1)
                        },
                        getErrType: function() {
                            var t = _(i.a.mark((function t() {
                                var e;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(s["a"])();
                                        case 2:
                                            e = t.sent, this.dict.error_type = e.data;
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
                        }()
                    }
                },
                f = h,
                m = r("5d22"),
                b = Object(m["a"])(f, a, n, !1, null, "af919316", null);
            e["default"] = b.exports
        },
        2934: function(t, e, r) {
            "use strict";
            r.d(e, "p", (function() {
                return n
            })), r.d(e, "d", (function() {
                return o
            })), r.d(e, "i", (function() {
                return i
            })), r.d(e, "m", (function() {
                return u
            })), r.d(e, "b", (function() {
                return c
            })), r.d(e, "g", (function() {
                return s
            })), r.d(e, "k", (function() {
                return p
            })), r.d(e, "j", (function() {
                return l
            })), r.d(e, "h", (function() {
                return d
            })), r.d(e, "n", (function() {
                return _
            })), r.d(e, "a", (function() {
                return h
            })), r.d(e, "l", (function() {
                return f
            })), r.d(e, "q", (function() {
                return m
            })), r.d(e, "f", (function() {
                return b
            })), r.d(e, "o", (function() {
                return g
            })), r.d(e, "c", (function() {
                return v
            })), r.d(e, "e", (function() {
                return y
            }));
            var a = r("b775");

            function n(t) {
                return Object(a["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(a["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(a["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(a["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(a["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(a["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(a["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: t
                })
            }

            function l(t) {
                return Object(a["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(a["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: t
                })
            }

            function _(t) {
                return Object(a["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: t
                })
            }

            function h(t) {
                return Object(a["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: t
                })
            }

            function f(t) {
                return Object(a["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: t
                })
            }

            function m(t) {
                return Object(a["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: t
                })
            }

            function b(t) {
                return Object(a["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: t
                })
            }

            function g(t) {
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

            function y(t) {
                return Object(a["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: t
                })
            }
        },
        c0f9: function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return n
            })), r.d(e, "a", (function() {
                return o
            })), r.d(e, "f", (function() {
                return i
            })), r.d(e, "d", (function() {
                return u
            })), r.d(e, "g", (function() {
                return c
            })), r.d(e, "i", (function() {
                return s
            })), r.d(e, "h", (function() {
                return p
            })), r.d(e, "j", (function() {
                return l
            })), r.d(e, "e", (function() {
                return d
            })), r.d(e, "c", (function() {
                return _
            }));
            var a = r("b775");

            function n(t) {
                return Object(a["a"])({
                    url: "/api/error_reports",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(a["a"])({
                    url: "/api/error_report/can_report_error_types",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(a["a"])({
                    url: "/api/error_report/store",
                    method: "post",
                    data: t
                })
            }

            function u(t) {
                return Object(a["a"])({
                    url: "/api/error_report/destroy",
                    method: "post",
                    data: t
                })
            }

            function c(t) {
                return Object(a["a"])({
                    url: "/api/check/error_report",
                    method: "post",
                    data: t
                })
            }

            function s(t) {
                return Object(a["a"])({
                    url: "/api/re_check/error_report",
                    method: "post",
                    data: t
                })
            }

            function p(t) {
                return Object(a["a"])({
                    url: "/api/edit/error_report",
                    method: "post",
                    data: t
                })
            }

            function l(t) {
                return Object(a["a"])({
                    url: "/api/up_shift/error_report",
                    method: "post",
                    data: t
                })
            }

            function d(t) {
                return Object(a["a"])({
                    url: "/api/error_report/force_destroy",
                    method: "post",
                    data: t
                })
            }

            function _(t) {
                return Object(a["a"])({
                    url: "/api/option/select",
                    method: "get",
                    params: t
                })
            }
        }
    }
]);