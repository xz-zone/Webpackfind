(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-9cb8e35c"], {
        2934: function(t, e, r) {
            "use strict";
            r.d(e, "p", (function() {
                return a
            })), r.d(e, "d", (function() {
                return o
            })), r.d(e, "i", (function() {
                return i
            })), r.d(e, "m", (function() {
                return s
            })), r.d(e, "b", (function() {
                return u
            })), r.d(e, "g", (function() {
                return c
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
                return g
            })), r.d(e, "o", (function() {
                return b
            })), r.d(e, "c", (function() {
                return v
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

            function i(t) {
                return Object(n["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(n["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
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

            function g(t) {
                return Object(n["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: t
                })
            }

            function b(t) {
                return Object(n["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: t
                })
            }

            function v(t) {
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
        d5d8: function(t, e, r) {
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
                            click: t.handleClickReset
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
                                    name: "editor-scanner"
                                })
                            }
                        }
                    }, [t._v("扫描编辑")]), t._v(" "), r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.handleExportReport
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
                            prop: "transfer_order_no",
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
                            prop: "abnormal_num",
                            label: "异常数量",
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
                                return [e.row.assign_user ? r("div", [t._v("分配人：" + t._s(e.row.assign_user.department_name) + "--" + t._s(e.row.assign_user.real_name))]) : t._e(), t._v(" "), e.row.receive_user ? r("div", [t._v("查收人：" + t._s(e.row.receive_user.department_name) + "--" + t._s(e.row.receive_user.real_name))]) : t._e()]
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
                            align: "center",
                            width: "300"
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
                                }, [t._v("查看")])], 1), t._v(" "), 2 != e.row.status ? r("router-link", {
                                    attrs: {
                                        to: {
                                            name: "editor-search-list",
                                            query: {
                                                no: e.row.transfer_order_no
                                            }
                                        },
                                        target: "_blank"
                                    }
                                }, [r("el-button", {
                                    attrs: {
                                        type: "success",
                                        size: "mini"
                                    }
                                }, [t._v("开始编辑")])], 1) : t._e(), t._v(" "), r("el-button", {
                                    attrs: {
                                        type: "danger",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return t.$router.push({
                                                name: "editor-receive-exception-reg",
                                                query: {
                                                    no: e.row.transfer_order_no,
                                                    id: e.row.id
                                                }
                                            })
                                        }
                                    }
                                }, [t._v("异常登记")])]
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
                o = r("4838"),
                i = r.n(o),
                s = r("f4c4"),
                u = r("c35b");

            function c(t, e) {
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
                    e % 2 ? c(Object(r), !0).forEach((function(e) {
                        d(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(e) {
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

            function p(t, e, r, n, a, o, i) {
                try {
                    var s = t[o](i),
                        u = s.value
                } catch (c) {
                    return void r(c)
                }
                s.done ? e(u) : Promise.resolve(u).then(n, a)
            }

            function _(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = t.apply(e, r);

                        function i(t) {
                            p(o, n, a, i, s, "next", t)
                        }

                        function s(t) {
                            p(o, n, a, i, s, "throw", t)
                        }
                        i(void 0)
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
                var o, i = !0,
                    s = !1;
                return {
                    s: function() {
                        r = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = r.next();
                        return i = t.done, t
                    },
                    e: function(t) {
                        s = !0, o = t
                    },
                    f: function() {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (s) throw o
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
            var g = {
                    components: {
                        UserList: u["a"]
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
                        getList: function() {
                            var t = _(i.a.mark((function t(e) {
                                var r;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e && (this.search.page = 1), this.loading = !0, t.next = 4, Object(s["h"])(this.search);
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
                        handleClickReset: function() {
                            this.search = {
                                assign_at: [],
                                receive_at: [],
                                transfer_order_no: null,
                                status: null,
                                assign_user_ids: [],
                                page: 1
                            }, this.getList()
                        },
                        handleExportReport: function() {
                            var t = l(l({}, this.search), {}, {
                                is_export: 1
                            }, this.oldSearch);
                            delete t.page, Object(s["h"])(t).then((function(t) {
                                1 == t.code && window.open(t.data.download_url)
                            }))
                        },
                        handleSelectionChange: function(t) {
                            this.selectRows = t
                        }
                    }
                },
                b = g,
                v = r("5d22"),
                y = Object(v["a"])(b, n, a, !1, null, "541d5914", null);
            e["default"] = y.exports
        },
        f4c4: function(t, e, r) {
            "use strict";
            r.d(e, "h", (function() {
                return a
            })), r.d(e, "d", (function() {
                return o
            })), r.d(e, "e", (function() {
                return i
            })), r.d(e, "c", (function() {
                return s
            })), r.d(e, "g", (function() {
                return u
            })), r.d(e, "l", (function() {
                return c
            })), r.d(e, "n", (function() {
                return l
            })), r.d(e, "m", (function() {
                return d
            })), r.d(e, "b", (function() {
                return p
            })), r.d(e, "f", (function() {
                return _
            })), r.d(e, "i", (function() {
                return f
            })), r.d(e, "p", (function() {
                return h
            })), r.d(e, "k", (function() {
                return m
            })), r.d(e, "j", (function() {
                return g
            })), r.d(e, "o", (function() {
                return b
            })), r.d(e, "a", (function() {
                return v
            })), r.d(e, "q", (function() {
                return y
            }));
            var n = r("b775");

            function a(t) {
                return Object(n["a"])({
                    url: "/api/edit/my_receive",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/edit/show_receive_order",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(n["a"])({
                    url: "/api/edit/edit_view",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(n["a"])({
                    url: "/api/brief_templates",
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

            function c(t) {
                return Object(n["a"])({
                    url: "api/public/product/oss_upload_sts_token_for_web",
                    method: "get",
                    data: t
                })
            }

            function l(t) {
                return Object(n["a"])({
                    url: "/api/edit/image_upload",
                    method: "post",
                    data: t,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            }

            function d(t) {
                return Object(n["a"])({
                    url: "/api/input/get_brand",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(n["a"])({
                    url: "/api/input/get_model",
                    method: "get",
                    params: t
                })
            }

            function _(t) {
                return Object(n["a"])({
                    url: "/api/product/goods_conditions",
                    method: "get",
                    params: t
                })
            }

            function f(t) {
                return Object(n["a"])({
                    url: "/api/product/pricing_rules",
                    method: "post",
                    data: t
                })
            }

            function h(t) {
                return Object(n["a"])({
                    url: "/api/edit/edit_save",
                    method: "post",
                    data: t
                })
            }

            function m(t) {
                return Object(n["a"])({
                    url: "/api/input/products_search",
                    method: "get",
                    params: t
                })
            }

            function g(t) {
                return Object(n["a"])({
                    url: "/api/error_report/product_error_reports",
                    method: "get",
                    params: t
                })
            }

            function b(t) {
                return Object(n["a"])({
                    url: "/api/error_report/mark_handled",
                    method: "post",
                    data: t
                })
            }

            function v(t) {
                return Object(n["a"])({
                    url: "/api/phone_appearance/datas",
                    method: "get",
                    params: t
                })
            }

            function y(t) {
                return Object(n["a"])({
                    url: "/api/product/save_zz_color_id",
                    method: "post",
                    data: t
                })
            }
        }
    }
]);