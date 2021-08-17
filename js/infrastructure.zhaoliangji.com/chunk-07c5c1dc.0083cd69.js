(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-07c5c1dc"], {
        2934: function(e, t, r) {
            "use strict";
            r.d(t, "p", (function() {
                return n
            })), r.d(t, "d", (function() {
                return s
            })), r.d(t, "i", (function() {
                return o
            })), r.d(t, "m", (function() {
                return i
            })), r.d(t, "b", (function() {
                return l
            })), r.d(t, "g", (function() {
                return c
            })), r.d(t, "k", (function() {
                return u
            })), r.d(t, "j", (function() {
                return d
            })), r.d(t, "h", (function() {
                return p
            })), r.d(t, "n", (function() {
                return _
            })), r.d(t, "a", (function() {
                return h
            })), r.d(t, "l", (function() {
                return m
            })), r.d(t, "q", (function() {
                return v
            })), r.d(t, "f", (function() {
                return f
            })), r.d(t, "o", (function() {
                return b
            })), r.d(t, "c", (function() {
                return g
            })), r.d(t, "e", (function() {
                return y
            }));
            var a = r("b775");

            function n(e) {
                return Object(a["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
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

            function i(e) {
                return Object(a["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: e
                })
            }

            function l(e) {
                return Object(a["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: e
                })
            }

            function c(e) {
                return Object(a["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: e
                })
            }

            function u(e) {
                return Object(a["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: e
                })
            }

            function d(e) {
                return Object(a["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: e
                })
            }

            function p(e) {
                return Object(a["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: e
                })
            }

            function _(e) {
                return Object(a["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: e
                })
            }

            function h(e) {
                return Object(a["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: e
                })
            }

            function m(e) {
                return Object(a["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: e
                })
            }

            function v(e) {
                return Object(a["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: e
                })
            }

            function f(e) {
                return Object(a["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: e
                })
            }

            function b(e) {
                return Object(a["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: e
                })
            }

            function g(e) {
                return Object(a["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: e
                })
            }

            function y(e) {
                return Object(a["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: e
                })
            }
        },
        "59b3": function(e, t, r) {
            "use strict";
            r.r(t);
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "app-container"
                    }, [r("el-tabs", {
                        model: {
                            value: e.activeName,
                            callback: function(t) {
                                e.activeName = t
                            },
                            expression: "activeName"
                        }
                    }, [r("el-tab-pane", {
                        attrs: {
                            label: "全部",
                            name: "all"
                        }
                    }, [r("ListComponent")], 1), e._v(" "), r("el-tab-pane", {
                        attrs: {
                            name: "0"
                        }
                    }, [r("span", {
                        attrs: {
                            slot: "label"
                        },
                        slot: "label"
                    }, [e._v("\n        待处理\n        "), r("span", {
                        staticClass: "zlj-badge"
                    }, [e._v(e._s(e.listTotal[0]))])]), e._v(" "), r("ListComponent", {
                        attrs: {
                            "dispose-status": "0",
                            "header-total": e.listTotal[0]
                        },
                        on: {
                            "update:headerTotal": function(t) {
                                return e.$set(e.listTotal, 0, t)
                            },
                            "update:header-total": function(t) {
                                return e.$set(e.listTotal, 0, t)
                            }
                        }
                    })], 1)], 1)], 1)
                },
                n = [],
                s = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "list-component"
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
                            "start-placeholder": "登记时间",
                            "end-placeholder": "结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"]
                        },
                        model: {
                            value: e.search.create_at,
                            callback: function(t) {
                                e.$set(e.search, "create_at", t)
                            },
                            expression: "search.create_at"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item search-timer"
                    }, [r("el-date-picker", {
                        attrs: {
                            type: "datetimerange",
                            "range-separator": "-",
                            "start-placeholder": "处理时间",
                            "end-placeholder": "结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"]
                        },
                        model: {
                            value: e.search.receive_at,
                            callback: function(t) {
                                e.$set(e.search, "receive_at", t)
                            },
                            expression: "search.receive_at"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-input", {
                        attrs: {
                            placeholder: "异常单号"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getList(1)
                            }
                        },
                        model: {
                            value: e.search.abnormal_report_order_no,
                            callback: function(t) {
                                e.$set(e.search, "abnormal_report_order_no", t)
                            },
                            expression: "search.abnormal_report_order_no"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-input", {
                        attrs: {
                            placeholder: "流转单号"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getList(1)
                            }
                        },
                        model: {
                            value: e.search.transfer_order_no,
                            callback: function(t) {
                                e.$set(e.search, "transfer_order_no", t)
                            },
                            expression: "search.transfer_order_no"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("ImeiSearch", {
                        on: {
                            done: function(t) {
                                return e.getList(1)
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
                    }, [r("ExceptionReason", {
                        attrs: {
                            mode: "edit"
                        },
                        model: {
                            value: e.search.reason,
                            callback: function(t) {
                                e.$set(e.search, "reason", t)
                            },
                            expression: "search.reason"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("TypeBrandModel", {
                        attrs: {
                            level: 2,
                            dict: e.dict
                        },
                        model: {
                            value: e.search,
                            callback: function(t) {
                                e.search = t
                            },
                            expression: "search"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("userList", {
                        attrs: {
                            placeholder: "登记人"
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
                    }, [r("userList", {
                        attrs: {
                            placeholder: "查收人"
                        },
                        model: {
                            value: e.search.receive_user_ids,
                            callback: function(t) {
                                e.$set(e.search, "receive_user_ids", t)
                            },
                            expression: "search.receive_user_ids"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("userList", {
                        attrs: {
                            placeholder: "处理人"
                        },
                        model: {
                            value: e.search.deal_user_ids,
                            callback: function(t) {
                                e.$set(e.search, "deal_user_ids", t)
                            },
                            expression: "search.deal_user_ids"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "查收状态"
                        },
                        model: {
                            value: e.search.receive_status,
                            callback: function(t) {
                                e.$set(e.search, "receive_status", t)
                            },
                            expression: "search.receive_status"
                        }
                    }, [r("el-option", {
                        attrs: {
                            value: "0",
                            label: "未接收"
                        }
                    }), e._v(" "), r("el-option", {
                        attrs: {
                            value: "1",
                            label: "已接收"
                        }
                    })], 1)], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "处理结果"
                        },
                        model: {
                            value: e.search.status,
                            callback: function(t) {
                                e.$set(e.search, "status", t)
                            },
                            expression: "search.status"
                        }
                    }, [r("el-option", {
                        attrs: {
                            value: "0",
                            label: "未处理"
                        }
                    }), e._v(" "), r("el-option", {
                        attrs: {
                            value: "1",
                            label: "部分处理"
                        }
                    }), e._v(" "), r("el-option", {
                        attrs: {
                            value: "2",
                            label: "已处理"
                        }
                    })], 1)], 1)]), e._v(" "), r("el-col", {
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
                    }, [r("div", [r("el-button", {
                        attrs: {
                            type: "primary",
                            disabled: e.is_disabled
                        },
                        on: {
                            click: function(t) {
                                e.$router.push({
                                    name: "editor-exception-abnormal",
                                    query: {
                                        id: e.selectData.join(",")
                                    }
                                })
                            }
                        }
                    }, [e._v("打印异常单")]), e._v(" "), r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.handleExportReport
                        }
                    }, [e._v("导出报表")])], 1), e._v(" "), r("div", [r("el-tag", {
                        attrs: {
                            type: "warning"
                        }
                    }, [e._v("已勾选：" + e._s(e.selectNum))]), e._v(" "), r("el-tag", {
                        attrs: {
                            type: "warning"
                        }
                    }, [e._v("总数量：" + e._s(e.total_goods_num))])], 1)]), e._v(" "), r("el-row", {
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
                            border: "",
                            "max-height": e.getClientHeight(375)
                        },
                        on: {
                            "selection-change": e.handleSelectionChange
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            type: "selection",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            type: "index",
                            label: "序号",
                            align: "center",
                            width: "70"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "异常单号",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("router-link", {
                                    attrs: {
                                        to: {
                                            name: "editor-exception-detail",
                                            query: {
                                                id: t.row.id
                                            }
                                        }
                                    }
                                }, [r("span", {
                                    staticClass: "view"
                                }, [e._v(e._s(t.row.abnormal_report_order_no))])])]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "node.name",
                            label: "异常来源",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "异常数量/金额",
                            "header-align": "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("div", [e._v("数量：" + e._s(t.row.num))]), e._v(" "), r("div", [e._v("金额：" + e._s(t.row.total_cost))])]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "操作人",
                            "header-align": "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.create_user ? r("div", [e._v("\n              登记：" + e._s(t.row.create_user.department_name) + "--" + e._s(t.row.create_user.real_name) + "\n            ")]) : e._e(), e._v(" "), t.row.receive_user ? r("div", [e._v("\n              查收：" + e._s(t.row.receive_user.department_name) + "--" + e._s(t.row.receive_user.real_name) + "\n            ")]) : e._e(), e._v(" "), t.row.deal_user ? r("div", [e._v("\n              处理：" + e._s(t.row.deal_user.department_name) + "--" + e._s(t.row.deal_user.real_name) + "\n            ")]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "address",
                            label: "时间",
                            "header-align": "center",
                            width: "200"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("div", [e._v("登记：" + e._s(t.row.created_at))]), e._v(" "), t.row.receive_at ? r("div", [e._v("\n              查收：" + e._s(t.row.receive_at) + "\n            ")]) : e._e(), e._v(" "), t.row.deal_at ? r("div", [e._v("处理：" + e._s(t.row.deal_at))]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "查收状态",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("div", {
                                    class: {
                                        "color-success": 2 == t.row.receive_status, "color-warning": 0 == t.row.receive_status, "color-danger": -1 == t.row.receive_status
                                    }
                                }, [e._v("\n              " + e._s(t.row.receive_status_description) + "\n            ")])]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "操作",
                            align: "center",
                            width: "150"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("router-link", {
                                    attrs: {
                                        to: {
                                            name: "editor-exception-detail",
                                            query: {
                                                id: t.row.id
                                            }
                                        },
                                        target: "_blank"
                                    }
                                }, [r("el-button", {
                                    attrs: {
                                        type: "primary",
                                        size: "mini"
                                    }
                                }, [e._v("查看")])], 1), e._v(" "), 0 == t.row.receive_status ? r("el-button", {
                                    attrs: {
                                        type: "danger",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return e.destroyException(t.row.id, t.row.abnormal_report_order_no)
                                        }
                                    }
                                }, [e._v("作废")]) : e._e()]
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
                            "page-size": e.search.page_size
                        },
                        on: {
                            "update:currentPage": function(t) {
                                return e.$set(e.search, "page", t)
                            },
                            "update:current-page": function(t) {
                                return e.$set(e.search, "page", t)
                            },
                            "update:pageSize": function(t) {
                                return e.$set(e.search, "page_size", t)
                            },
                            "update:page-size": function(t) {
                                return e.$set(e.search, "page_size", t)
                            },
                            "current-change": function(t) {
                                return e.getList()
                            }
                        }
                    })], 1)], 1)
                },
                o = [],
                i = r("4838"),
                l = r.n(i),
                c = r("eeb1"),
                u = r("1504"),
                d = r("c35b"),
                p = r("c058"),
                _ = r("246e");

            function h(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(r), !0).forEach((function(t) {
                        v(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function v(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function f(e, t, r, a, n, s, o) {
                try {
                    var i = e[s](o),
                        l = i.value
                } catch (c) {
                    return void r(c)
                }
                i.done ? t(l) : Promise.resolve(l).then(a, n)
            }

            function b(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(a, n) {
                        var s = e.apply(t, r);

                        function o(e) {
                            f(s, a, n, o, i, "next", e)
                        }

                        function i(e) {
                            f(s, a, n, o, i, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function g(e, t) {
                var r;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = y(e)) || t && e && "number" === typeof e.length) {
                        r && (e = r);
                        var a = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var s, o = !0,
                    i = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        i = !0, s = e
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

            function y(e, t) {
                if (e) {
                    if ("string" === typeof e) return w(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? w(e, t) : void 0
                }
            }

            function w(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                return a
            }
            var k = {
                    components: {
                        TypeBrandModel: u["a"],
                        UserList: d["a"],
                        ExceptionReason: p["a"],
                        ImeiSearch: _["a"]
                    },
                    props: {
                        disposeStatus: [String],
                        headerTotal: [Number]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            search: {
                                create_at: [],
                                receive_at: [],
                                abnormal_report_order_no: null,
                                node_id: null,
                                create_user_ids: null,
                                receive_user_ids: null,
                                receive_status: null,
                                status: this.disposeStatus,
                                deal_user_ids: null,
                                type_id: null,
                                brand_id: null,
                                transfer_order_no: null,
                                page: 1,
                                imei: null,
                                reason: null
                            },
                            total: 0,
                            total_goods_num: 0,
                            dict: {},
                            loading: !1,
                            selectData: [],
                            selectRows: [],
                            is_disabled: !0,
                            oldSearch: {
                                transfer_order_no: null,
                                imei: null
                            }
                        }
                    },
                    computed: {
                        selectNum: function() {
                            var e, t = 0,
                                r = g(this.selectRows);
                            try {
                                for (r.s(); !(e = r.n()).done;) {
                                    var a = e.value;
                                    t += a.num
                                }
                            } catch (n) {
                                r.e(n)
                            } finally {
                                r.f()
                            }
                            return t
                        }
                    },
                    mounted: function() {
                        this.getList()
                    },
                    methods: {
                        getList: function() {
                            var e = b(l.a.mark((function e(t) {
                                var r;
                                return l.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t && (this.search.page = 1), this.loading = !0, e.next = 4, Object(c["d"])(this.search);
                                        case 4:
                                            r = e.sent, this.loading = !1, this.tableData = r.data.data, this.total = r.data.total, this.total_goods_num = r.data.total_goods_num, this.$emit("update:headerTotal", this.total), this.oldSearch.transfer_order_no = m({}, this.search).transfer_order_no, this.oldSearch.imei = m({}, this.search).imei, this.search.transfer_order_no = null, this.search.imei = null;
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        resetSearch: function() {
                            this.search = {
                                create_at: [],
                                receive_at: [],
                                abnormal_report_order_no: null,
                                node_id: null,
                                create_user_ids: null,
                                receive_user_ids: null,
                                receive_status: null,
                                status: null,
                                deal_user_ids: null,
                                type_id: null,
                                brand_id: null,
                                transfer_order_no: null,
                                page: 1,
                                imei: null,
                                reason: null
                            }, this.$set(this.search, "node_id", null), this.getList()
                        },
                        handleExportReport: function() {
                            var e = m(m({}, this.search), {}, {
                                is_export: 1
                            }, this.oldSearch);
                            delete e.page, Object(c["d"])(e).then((function(e) {
                                1 == e.code && window.open(e.data.download_url)
                            }))
                        },
                        handleSelectionChange: function(e) {
                            e.length > 0 ? this.is_disabled = !1 : this.is_disabled = !0, this.selectData = [];
                            var t, r = g(e);
                            try {
                                for (r.s(); !(t = r.n()).done;) {
                                    var a = t.value;
                                    this.selectData.push(a.id)
                                }
                            } catch (n) {
                                r.e(n)
                            } finally {
                                r.f()
                            }
                            this.selectRows = e
                        },
                        destroyException: function() {
                            var e = b(l.a.mark((function e(t, r) {
                                var a;
                                return l.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return a = null, e.prev = 1, e.next = 4, this.$confirm("确定作废【".concat(r, "】?"), "提示", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 4:
                                            return a = this.$loading({
                                                target: ".app-container"
                                            }), e.next = 7, Object(c["a"])({
                                                abnormal_report_order_id: t
                                            });
                                        case 7:
                                            this.$message.success("操作成功！"), this.getList(), a.close(), e.next = 16;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e["catch"](1), console.log(e.t0), a && a.close();
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [1, 12]
                                ])
                            })));

                            function t(t, r) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    }
                },
                O = k,
                j = r("5d22"),
                x = Object(j["a"])(O, s, o, !1, null, "525600ac", null),
                C = x.exports,
                S = {
                    components: {
                        ListComponent: C
                    },
                    data: function() {
                        return {
                            activeName: "all",
                            listTotal: [0]
                        }
                    },
                    mounted: function() {},
                    methods: {}
                },
                $ = S,
                L = Object(j["a"])($, a, n, !1, null, "6822df82", null);
            t["default"] = L.exports
        },
        eeb1: function(e, t, r) {
            "use strict";
            r.d(t, "d", (function() {
                return n
            })), r.d(t, "b", (function() {
                return s
            })), r.d(t, "a", (function() {
                return o
            }));
            var a = r("b775");

            function n(e) {
                return Object(a["a"])({
                    url: "/api/edit/my_abnormal_report_orders",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(a["a"])({
                    url: "/api/edit/show_abnormal_reports",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(a["a"])({
                    url: "/api/edit/destroy_abnormal_report",
                    method: "get",
                    params: e
                })
            }
        }
    }
]);