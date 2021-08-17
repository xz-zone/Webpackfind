(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-7b7a6d14"], {
        2934: function(t, e, r) {
            "use strict";
            r.d(e, "p", (function() {
                return a
            })), r.d(e, "d", (function() {
                return s
            })), r.d(e, "i", (function() {
                return o
            })), r.d(e, "m", (function() {
                return i
            })), r.d(e, "b", (function() {
                return c
            })), r.d(e, "g", (function() {
                return u
            })), r.d(e, "k", (function() {
                return l
            })), r.d(e, "j", (function() {
                return d
            })), r.d(e, "h", (function() {
                return p
            })), r.d(e, "n", (function() {
                return _
            })), r.d(e, "a", (function() {
                return f
            })), r.d(e, "l", (function() {
                return h
            })), r.d(e, "q", (function() {
                return m
            })), r.d(e, "f", (function() {
                return v
            })), r.d(e, "o", (function() {
                return g
            })), r.d(e, "c", (function() {
                return b
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

            function s(t) {
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

            function i(t) {
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

            function d(t) {
                return Object(n["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
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

            function f(t) {
                return Object(n["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: t
                })
            }

            function h(t) {
                return Object(n["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: t
                })
            }

            function m(t) {
                return Object(n["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: t
                })
            }

            function v(t) {
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

            function b(t) {
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
        3217: function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return a
            })), r.d(e, "a", (function() {
                return s
            }));
            var n = r("b775");

            function a(t) {
                return Object(n["a"])({
                    url: "/api/check/my_receive",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(n["a"])({
                    url: "/api/check/show_receive_order",
                    method: "get",
                    params: t
                })
            }
        },
        ba13: function(t, e, r) {
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
                        staticClass: "wrap same-width",
                        attrs: {
                            span: 21
                        }
                    }, [r("div", {
                        staticClass: "search-item search-timer"
                    }, [r("el-date-picker", {
                        attrs: {
                            type: "datetimerange",
                            "range-separator": "-",
                            "start-placeholder": "分配时间",
                            "end-placeholder": "结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"]
                        },
                        model: {
                            value: t.search.assign_at,
                            callback: function(e) {
                                t.$set(t.search, "assign_at", e)
                            },
                            expression: "search.assign_at"
                        }
                    })], 1), t._v(" "), r("div", {
                        staticClass: "search-item search-timer"
                    }, [r("el-date-picker", {
                        attrs: {
                            type: "datetimerange",
                            "range-separator": "-",
                            "start-placeholder": "查收时间",
                            "end-placeholder": "结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"]
                        },
                        model: {
                            value: t.search.receive_at,
                            callback: function(e) {
                                t.$set(t.search, "receive_at", e)
                            },
                            expression: "search.receive_at"
                        }
                    })], 1), t._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-input", {
                        attrs: {
                            placeholder: "流转单号"
                        },
                        nativeOn: {
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.getList(1)
                            }
                        },
                        model: {
                            value: t.search.transfer_order_no,
                            callback: function(e) {
                                t.$set(t.search, "transfer_order_no", e)
                            },
                            expression: "search.transfer_order_no"
                        }
                    })], 1), t._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "处理结果"
                        },
                        model: {
                            value: t.search.status,
                            callback: function(e) {
                                t.$set(t.search, "status", e)
                            },
                            expression: "search.status"
                        }
                    }, [r("el-option", {
                        attrs: {
                            value: "0",
                            label: "未处理"
                        }
                    }), t._v(" "), r("el-option", {
                        attrs: {
                            value: "1",
                            label: "部分处理"
                        }
                    }), t._v(" "), r("el-option", {
                        attrs: {
                            value: "2",
                            label: "已处理"
                        }
                    })], 1)], 1), t._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("userList", {
                        attrs: {
                            placeholder: "分配人"
                        },
                        model: {
                            value: t.search.assign_user_ids,
                            callback: function(e) {
                                t.$set(t.search, "assign_user_ids", e)
                            },
                            expression: "search.assign_user_ids"
                        }
                    })], 1)]), t._v(" "), r("el-col", {
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
                    }, [r("div", [r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.$router.push({
                                    name: "quality-scanner"
                                })
                            }
                        }
                    }, [t._v("扫描质检")]), t._v(" "), r("el-button", {
                        attrs: {
                            loading: t.printLoading,
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.print()
                            }
                        }
                    }, [t._v("导出报表")])], 1), t._v(" "), r("div", [r("el-tag", {
                        attrs: {
                            type: "warning"
                        }
                    }, [t._v("已勾选：" + t._s(t.selectNum))]), t._v(" "), r("el-tag", {
                        attrs: {
                            type: "warning"
                        }
                    }, [t._v("总数量：" + t._s(t.total_goods_num))])], 1)]), t._v(" "), r("el-row", {
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
                            "max-height": t.getClientHeight(280),
                            border: ""
                        },
                        on: {
                            "selection-change": t.handleSelectionChange
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            type: "selection",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            type: "index",
                            label: "序号",
                            align: "center",
                            width: "80"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "流转单号",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [r("router-link", {
                                    attrs: {
                                        to: {
                                            name: "quality-receive-detail",
                                            query: {
                                                id: e.row.id
                                            }
                                        }
                                    }
                                }, [r("span", {
                                    staticClass: "view"
                                }, [t._v(t._s(e.row.transfer_order_no))])])]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "商品总数量/总金额",
                            width: "150",
                            "header-align": "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [r("div", [t._v("数量：" + t._s(e.row.total_num))]), t._v(" "), r("div", [t._v("金额：" + t._s(e.row.total_cost))])]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "流转步骤",
                            width: "150",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v(t._s(e.row.source_node.name) + " ---\x3e " + t._s(e.row.to_node.name))]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "合格数量",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v(t._s(e.row.deal_num - e.row.abnormal_num))]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "abnormal_num",
                            label: "不合格数量",
                            align: "center",
                            width: "100"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "address",
                            label: "操作人",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [e.row.assign_user ? r("div", [t._v("分配：" + t._s(e.row.assign_user.department_name) + "--" + t._s(e.row.assign_user.real_name))]) : t._e(), t._v(" "), e.row.receive_user ? r("div", [t._v("查收：" + t._s(e.row.receive_user.department_name) + "--" + t._s(e.row.receive_user.real_name))]) : t._e()]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "时间",
                            "header-align": "center",
                            width: "200"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [r("div", [t._v("分配：" + t._s(e.row.assign_at))]), t._v(" "), r("div", [t._v("查收：" + t._s(e.row.receive_at))])]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "assign_at",
                            label: "分配时间",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "处理结果",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [r("span", {
                                    class: {
                                        "color-success": 2 == e.row.status, "color-warning": 1 == e.row.status, "color-danger": 0 == e.row.status
                                    }
                                }, [t._v(t._s(e.row.status_description))])]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "address",
                            label: "操作",
                            "header-align": "center",
                            width: "200"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [r("router-link", {
                                    attrs: {
                                        to: {
                                            name: "quality-receive-detail",
                                            query: {
                                                id: e.row.id
                                            }
                                        },
                                        target: "_blank"
                                    }
                                }, [r("el-button", {
                                    attrs: {
                                        type: "primary",
                                        size: "mini"
                                    }
                                }, [t._v("查看")])], 1), t._v(" "), 2 != e.row.status ? r("el-button", {
                                    attrs: {
                                        type: "success",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return t.$router.push({
                                                name: "quality-scanner-test",
                                                query: {
                                                    no: e.row.transfer_order_no
                                                }
                                            })
                                        }
                                    }
                                }, [t._v("开始质检")]) : t._e()]
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
                s = r("4838"),
                o = r.n(s),
                i = r("3217"),
                c = r("c35b");

            function u(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(r), !0).forEach((function(e) {
                        d(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function d(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function p(t, e, r, n, a, s, o) {
                try {
                    var i = t[s](o),
                        c = i.value
                } catch (u) {
                    return void r(u)
                }
                i.done ? e(c) : Promise.resolve(c).then(n, a)
            }

            function _(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var s = t.apply(e, r);

                        function o(t) {
                            p(s, n, a, o, i, "next", t)
                        }

                        function i(t) {
                            p(s, n, a, o, i, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }

            function f(t, e) {
                var r;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (r = h(t)) || e && t && "number" === typeof t.length) {
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
                var s, o = !0,
                    i = !1;
                return {
                    s: function() {
                        r = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = r.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        i = !0, s = t
                    },
                    f: function() {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (i) throw s
                        }
                    }
                }
            }

            function h(t, e) {
                if (t) {
                    if ("string" === typeof t) return m(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? m(t, e) : void 0
                }
            }

            function m(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var v = {
                    components: {
                        UserList: c["a"]
                    },
                    data: function() {
                        return {
                            activeName: "first",
                            tableData: [],
                            search: {
                                assign_at: [],
                                receive_at: [],
                                transfer_order_no: null,
                                status: null,
                                assign_user_ids: [],
                                page: 1
                            },
                            total: 0,
                            total_goods_num: 0,
                            selectRows: [],
                            loading: !1,
                            printLoading: !1,
                            oldSearch: {
                                transfer_order_no: null
                            }
                        }
                    },
                    computed: {
                        selectNum: function() {
                            var t, e = 0,
                                r = f(this.selectRows);
                            try {
                                for (r.s(); !(t = r.n()).done;) {
                                    var n = t.value;
                                    e += n.total_num
                                }
                            } catch (a) {
                                r.e(a)
                            } finally {
                                r.f()
                            }
                            return e
                        }
                    },
                    mounted: function() {
                        this.getList()
                    },
                    methods: {
                        print: function() {
                            var t = _(o.a.mark((function t() {
                                var e, r;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, e = l(l({}, this.search), {}, {
                                                is_export: 1
                                            }, this.oldSearch), this.printLoading = !0, t.next = 5, Object(i["b"])(e);
                                        case 5:
                                            r = t.sent, this.printLoading = !1, window.open(r.data.download_url, "blank"), t.next = 13;
                                            break;
                                        case 10:
                                            t.prev = 10, t.t0 = t["catch"](0), this.printLoading = !1;
                                        case 13:
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
                        getList: function() {
                            var t = _(o.a.mark((function t(e) {
                                var r;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e && (this.search.page = 1), this.loading = !0, t.next = 4, Object(i["b"])(this.search);
                                        case 4:
                                            r = t.sent, this.loading = !1, this.tableData = r.data.data, this.total = r.data.total, this.total_goods_num = r.data.total_goods_num, this.oldSearch.transfer_order_no = l({}, this.search).transfer_order_no, this.search.transfer_order_no = null;
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        resetSearch: function() {
                            this.search = {
                                assign_at: [],
                                receive_at: [],
                                transfer_order_no: null,
                                status: null,
                                assign_user_ids: [],
                                page: 1
                            }, this.getList()
                        },
                        handleSelectionChange: function(t) {
                            this.selectRows = t
                        }
                    }
                },
                g = v,
                b = r("5d22"),
                y = Object(b["a"])(g, n, a, !1, null, "ff19333c", null);
            e["default"] = y.exports
        }
    }
]);