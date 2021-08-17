(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-a5e88d84"], {
        2934: function(e, t, r) {
            "use strict";
            r.d(t, "p", (function() {
                return n
            })), r.d(t, "d", (function() {
                return i
            })), r.d(t, "i", (function() {
                return o
            })), r.d(t, "m", (function() {
                return c
            })), r.d(t, "b", (function() {
                return s
            })), r.d(t, "g", (function() {
                return u
            })), r.d(t, "k", (function() {
                return l
            })), r.d(t, "j", (function() {
                return p
            })), r.d(t, "h", (function() {
                return d
            })), r.d(t, "n", (function() {
                return h
            })), r.d(t, "a", (function() {
                return _
            })), r.d(t, "l", (function() {
                return f
            })), r.d(t, "q", (function() {
                return m
            })), r.d(t, "f", (function() {
                return b
            })), r.d(t, "o", (function() {
                return g
            })), r.d(t, "c", (function() {
                return v
            })), r.d(t, "e", (function() {
                return w
            }));
            var a = r("b775");

            function n(e) {
                return Object(a["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(a["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(a["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: e
                })
            }

            function c(e) {
                return Object(a["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(a["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: e
                })
            }

            function u(e) {
                return Object(a["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: e
                })
            }

            function l(e) {
                return Object(a["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: e
                })
            }

            function p(e) {
                return Object(a["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: e
                })
            }

            function d(e) {
                return Object(a["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: e
                })
            }

            function h(e) {
                return Object(a["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: e
                })
            }

            function _(e) {
                return Object(a["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: e
                })
            }

            function f(e) {
                return Object(a["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: e
                })
            }

            function m(e) {
                return Object(a["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: e
                })
            }

            function b(e) {
                return Object(a["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: e
                })
            }

            function g(e) {
                return Object(a["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: e
                })
            }

            function v(e) {
                return Object(a["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: e
                })
            }

            function w(e) {
                return Object(a["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: e
                })
            }
        },
        "4f53": function(e, t, r) {
            "use strict";
            r.r(t);
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
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
                        staticClass: "search-item search-timer"
                    }, [r("el-date-picker", {
                        attrs: {
                            type: "datetimerange",
                            "range-separator": "-",
                            "start-placeholder": "上报时间",
                            "end-placeholder": "结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"]
                        },
                        model: {
                            value: e.search.created_at,
                            callback: function(t) {
                                e.$set(e.search, "created_at", t)
                            },
                            expression: "search.created_at"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-input", {
                        attrs: {
                            placeholder: "IMEI"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getList(1)
                            }
                        },
                        model: {
                            value: e.search.imei,
                            callback: function(t) {
                                e.$set(e.search, "imei", t)
                            },
                            expression: "search.imei"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "错误类型"
                        },
                        model: {
                            value: e.search.error_type_id,
                            callback: function(t) {
                                e.$set(e.search, "error_type_id", t)
                            },
                            expression: "search.error_type_id"
                        }
                    }, e._l(e.dict.error_type, (function(e, t) {
                        return r("el-option", {
                            key: t,
                            attrs: {
                                value: e.id,
                                label: e.name
                            }
                        })
                    })), 1)], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("userList", {
                        attrs: {
                            placeholder: "上报人"
                        },
                        model: {
                            value: e.search.create_user_ids,
                            callback: function(t) {
                                e.$set(e.search, "create_user_ids", t)
                            },
                            expression: "search.create_user_ids"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "地区库"
                        },
                        model: {
                            value: e.search.area_id,
                            callback: function(t) {
                                e.$set(e.search, "area_id", t)
                            },
                            expression: "search.area_id"
                        }
                    }, e._l(e.dict.user_warehouse_area, (function(e, t) {
                        return r("el-option", {
                            key: t,
                            attrs: {
                                value: e.id,
                                label: e.name
                            }
                        })
                    })), 1)], 1)])]), e._v(" "), r("el-col", {
                        staticClass: "operat-btn",
                        attrs: {
                            span: 3
                        }
                    }, [r("el-button", {
                        attrs: {
                            type: "warning"
                        },
                        on: {
                            click: function(t) {
                                return e.getList(1)
                            }
                        }
                    }, [e._v("查询")]), e._v(" "), r("el-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: function(t) {
                                return e.resetSearch()
                            }
                        }
                    }, [e._v("重置")])], 1)], 1), e._v(" "), r("div", {
                        staticClass: "header-tools"
                    }, [r("div", [e.auth("api/error_report/store") ? r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.openDialog()
                            }
                        }
                    }, [e._v("新增")]) : e._e(), e._v(" "), r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.getList(2)
                            }
                        }
                    }, [e._v("导出")])], 1)]), e._v(" "), r("el-row", {
                        staticClass: "body-list"
                    }, [r("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [r("el-table", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: e.loading,
                            expression: "loading"
                        }],
                        attrs: {
                            data: e.tableData,
                            "max-height": e.getClientHeight(270),
                            border: ""
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            type: "index",
                            label: "序号",
                            align: "center",
                            width: "60"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product.product_name",
                            label: "商品",
                            "header-align": "center",
                            width: "150"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product.imei",
                            label: "IMEI",
                            "header-align": "center",
                            width: "100"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product.brand.name",
                            label: "品牌",
                            align: "center",
                            width: "80"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "sales_proper_ties",
                            label: "型号",
                            "header-align": "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return e._l(t.row.sales_proper_ties.split("\n"), (function(t, a) {
                                    return r("div", {
                                        key: a
                                    }, ["型号" == t.split(":")[0] ? r("span", {
                                        attrs: {
                                            type: "primary"
                                        }
                                    }, [e._v(e._s(t.split(":")[1]))]) : e._e()])
                                }))
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product.imei",
                            label: "参数",
                            "header-align": "center",
                            width: "230"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return e._l(t.row.sales_proper_ties.split("\n"), (function(t, a) {
                                    return r("el-tag", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: "型号" != t.split(":")[0] && "" != t,
                                            expression: "item.split(':')[0] != '型号' && item != ''"
                                        }],
                                        key: a,
                                        staticStyle: {
                                            "margin-right": "3px"
                                        },
                                        attrs: {
                                            size: "mini"
                                        }
                                    }, [e._v(e._s(t))])
                                }))
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "warehouse_area_name",
                            label: "地区库",
                            "header-align": "center",
                            width: "100"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "error_type.name",
                            label: "错误类型",
                            "header-align": "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "remark",
                            label: "备注",
                            "header-align": "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "input_user_name",
                            label: "录入人",
                            align: "center",
                            width: "70"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "check_user_name",
                            label: "质检人",
                            align: "center",
                            width: "70"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "recheck_user_name",
                            label: "复检人",
                            align: "center",
                            width: "70"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "edit_user_name",
                            label: "编辑人",
                            align: "center",
                            width: "70"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "up_shift_user_name",
                            label: "上架人",
                            align: "center",
                            width: "70"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "create_user_name",
                            label: "上报人",
                            align: "center",
                            width: "70"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "created_at",
                            label: "上报时间",
                            align: "center",
                            width: "160"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "操作",
                            align: "center",
                            width: "170"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("el-button", {
                                    attrs: {
                                        type: "danger",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return e.removeItem(t.row.id)
                                        }
                                    }
                                }, [e._v("作废")]), e._v(" "), e.auth("api/error_report/force_destroy") ? r("el-button", {
                                    attrs: {
                                        type: "danger",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return e.removeItemByAdmin(t.row.id)
                                        }
                                    }
                                }, [e._v("强制作废")]) : e._e()]
                            }
                        }])
                    })], 1)], 1)], 1), e._v(" "), r("div", {
                        staticClass: "footer-pagination"
                    }, [r("el-pagination", {
                        attrs: {
                            background: "",
                            layout: "total, prev, pager, next, jumper",
                            total: e.total,
                            "current-page": e.search.page,
                            "page-size": 10
                        },
                        on: {
                            "update:currentPage": function(t) {
                                return e.$set(e.search, "page", t)
                            },
                            "update:current-page": function(t) {
                                return e.$set(e.search, "page", t)
                            },
                            "current-change": function(t) {
                                return e.getList()
                            }
                        }
                    })], 1), e._v(" "), r("ErrorDialog", {
                        attrs: {
                            title: "新增复测错误",
                            "show-dialog": e.showDialog,
                            disabled: !1
                        },
                        on: {
                            "update:showDialog": function(t) {
                                e.showDialog = t
                            },
                            "update:show-dialog": function(t) {
                                e.showDialog = t
                            }
                        }
                    })], 1)
                },
                n = [],
                i = r("4838"),
                o = r.n(i),
                c = r("c0f9"),
                s = r("c4a5"),
                u = r("c35b");

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(r), !0).forEach((function(t) {
                        d(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function d(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function h(e, t, r, a, n, i, o) {
                try {
                    var c = e[i](o),
                        s = c.value
                } catch (u) {
                    return void r(u)
                }
                c.done ? t(s) : Promise.resolve(s).then(a, n)
            }

            function _(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(a, n) {
                        var i = e.apply(t, r);

                        function o(e) {
                            h(i, a, n, o, c, "next", e)
                        }

                        function c(e) {
                            h(i, a, n, o, c, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }
            var f = {
                    components: {
                        ErrorDialog: s["a"],
                        UserList: u["a"]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            search: {
                                created_at: [],
                                imei: null,
                                error_type_id: null,
                                create_user_ids: null,
                                page: 1
                            },
                            dict: {
                                error_type: [],
                                user_warehouse_area: []
                            },
                            total: 0,
                            loading: !1,
                            showDialog: !1,
                            oldSearch: {}
                        }
                    },
                    mounted: function() {
                        this.getErrType(), this.getUserWarehouseArea(), this.getList()
                    },
                    methods: {
                        getList: function() {
                            var e = _(o.a.mark((function e(t) {
                                var r, a;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, r = p({}, this.search), r.is_export = null, 1 == t ? this.search.page = 1 : 2 == t && (r.is_export = 1, r.imei = p({}, this.search).imei), this.loading = !0, e.next = 7, Object(c["b"])(r);
                                        case 7:
                                            a = e.sent, this.loading = !1, 2 != t ? (this.tableData = a.data.data, this.total = a.data.total, this.oldSearch.imei = p({}, this.search).imei, this.search.imei = null) : window.open(a.data), e.next = 15;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e["catch"](0), this.loading = !1;
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 12]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        resetSearch: function() {
                            this.search = {
                                created_at: [],
                                imei: null,
                                error_type_id: null,
                                create_user_ids: null,
                                page: 1
                            }, this.getList()
                        },
                        getErrType: function() {
                            var e = _(o.a.mark((function e() {
                                var t;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(c["a"])();
                                        case 2:
                                            t = e.sent, this.dict.error_type = t.data;
                                        case 4:
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
                        getUserWarehouseArea: function() {
                            var e = _(o.a.mark((function e() {
                                var t;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(c["c"])({
                                                fields: "user_warehouse_area"
                                            });
                                        case 2:
                                            t = e.sent, this.dict.user_warehouse_area = t.data.user_warehouse_area;
                                        case 4:
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
                        openDialog: function(e) {
                            this.showDialog = !0
                        },
                        removeItem: function() {
                            var e = _(o.a.mark((function e(t) {
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.$confirm("确定作废？", "提示", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 3:
                                            return this.loading = !0, e.next = 6, Object(c["d"])({
                                                id: t
                                            });
                                        case 6:
                                            this.loading = !1, this.getList(), this.$message.success("作废成功"), e.next = 14;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e["catch"](0), this.loading = !1;
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 11]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        removeItemByAdmin: function() {
                            var e = _(o.a.mark((function e(t) {
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.$confirm("确定强制作废？", "提示", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 3:
                                            return this.loading = !0, e.next = 6, Object(c["e"])({
                                                id: t
                                            });
                                        case 6:
                                            this.loading = !1, this.getList(), this.$message.success("作废成功"), e.next = 14;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e["catch"](0), this.loading = !1;
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 11]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    }
                },
                m = f,
                b = r("5d22"),
                g = Object(b["a"])(m, a, n, !1, null, "3cf98e75", null);
            t["default"] = g.exports
        },
        c0f9: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return n
            })), r.d(t, "a", (function() {
                return i
            })), r.d(t, "f", (function() {
                return o
            })), r.d(t, "d", (function() {
                return c
            })), r.d(t, "g", (function() {
                return s
            })), r.d(t, "i", (function() {
                return u
            })), r.d(t, "h", (function() {
                return l
            })), r.d(t, "j", (function() {
                return p
            })), r.d(t, "e", (function() {
                return d
            })), r.d(t, "c", (function() {
                return h
            }));
            var a = r("b775");

            function n(e) {
                return Object(a["a"])({
                    url: "/api/error_reports",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(a["a"])({
                    url: "/api/error_report/can_report_error_types",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(a["a"])({
                    url: "/api/error_report/store",
                    method: "post",
                    data: e
                })
            }

            function c(e) {
                return Object(a["a"])({
                    url: "/api/error_report/destroy",
                    method: "post",
                    data: e
                })
            }

            function s(e) {
                return Object(a["a"])({
                    url: "/api/check/error_report",
                    method: "post",
                    data: e
                })
            }

            function u(e) {
                return Object(a["a"])({
                    url: "/api/re_check/error_report",
                    method: "post",
                    data: e
                })
            }

            function l(e) {
                return Object(a["a"])({
                    url: "/api/edit/error_report",
                    method: "post",
                    data: e
                })
            }

            function p(e) {
                return Object(a["a"])({
                    url: "/api/up_shift/error_report",
                    method: "post",
                    data: e
                })
            }

            function d(e) {
                return Object(a["a"])({
                    url: "/api/error_report/force_destroy",
                    method: "post",
                    data: e
                })
            }

            function h(e) {
                return Object(a["a"])({
                    url: "/api/option/select",
                    method: "get",
                    params: e
                })
            }
        }
    }
]);