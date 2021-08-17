(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-14131af0"], {
        2934: function(e, t, r) {
            "use strict";
            r.d(t, "p", (function() {
                return a
            })), r.d(t, "d", (function() {
                return s
            })), r.d(t, "i", (function() {
                return i
            })), r.d(t, "m", (function() {
                return o
            })), r.d(t, "b", (function() {
                return c
            })), r.d(t, "g", (function() {
                return l
            })), r.d(t, "k", (function() {
                return u
            })), r.d(t, "j", (function() {
                return d
            })), r.d(t, "h", (function() {
                return _
            })), r.d(t, "n", (function() {
                return p
            })), r.d(t, "a", (function() {
                return h
            })), r.d(t, "l", (function() {
                return f
            })), r.d(t, "q", (function() {
                return v
            })), r.d(t, "f", (function() {
                return m
            })), r.d(t, "o", (function() {
                return g
            })), r.d(t, "c", (function() {
                return b
            })), r.d(t, "e", (function() {
                return y
            }));
            var n = r("b775");

            function a(e) {
                return Object(n["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(n["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(n["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(n["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: e
                })
            }

            function c(e) {
                return Object(n["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: e
                })
            }

            function l(e) {
                return Object(n["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: e
                })
            }

            function u(e) {
                return Object(n["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: e
                })
            }

            function d(e) {
                return Object(n["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: e
                })
            }

            function _(e) {
                return Object(n["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: e
                })
            }

            function p(e) {
                return Object(n["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: e
                })
            }

            function h(e) {
                return Object(n["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: e
                })
            }

            function f(e) {
                return Object(n["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: e
                })
            }

            function v(e) {
                return Object(n["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: e
                })
            }

            function m(e) {
                return Object(n["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: e
                })
            }

            function g(e) {
                return Object(n["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: e
                })
            }

            function b(e) {
                return Object(n["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: e
                })
            }

            function y(e) {
                return Object(n["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: e
                })
            }
        },
        3098: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return a
            })), r.d(t, "a", (function() {
                return s
            }));
            var n = r("b775");

            function a(e) {
                return Object(n["a"])({
                    url: "/api/receive/products_search",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(n["a"])({
                    url: "/api/receive/transfer_store",
                    method: "post",
                    data: e
                })
            }
        },
        9825: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = function() {
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
                    }, [e._v("\n        未接收\n        "), r("span", {
                        staticClass: "zlj-badge"
                    }, [e._v(e._s(e.listTotal[0]))])]), e._v(" "), r("ListComponent", {
                        attrs: {
                            "receive-status": "0",
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
                    })], 1), e._v(" "), r("el-tab-pane", {
                        attrs: {
                            name: "1"
                        }
                    }, [r("span", {
                        attrs: {
                            slot: "label"
                        },
                        slot: "label"
                    }, [e._v("\n        已接收\n        "), r("span", {
                        staticClass: "zlj-badge"
                    }, [e._v(e._s(e.listTotal[1]))])]), e._v(" "), r("ListComponent", {
                        attrs: {
                            "receive-status": "1",
                            "header-total": e.listTotal[1]
                        },
                        on: {
                            "update:headerTotal": function(t) {
                                return e.$set(e.listTotal, 1, t)
                            },
                            "update:header-total": function(t) {
                                return e.$set(e.listTotal, 1, t)
                            }
                        }
                    })], 1)], 1)], 1)
                },
                a = [],
                s = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "list-component"
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
                            "start-placeholder": "分配时间",
                            "end-placeholder": "结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"]
                        },
                        model: {
                            value: e.search.assign_at,
                            callback: function(t) {
                                e.$set(e.search, "assign_at", t)
                            },
                            expression: "search.assign_at"
                        }
                    })], 1), e._v(" "), r("div", {
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
                            value: e.search.receive_at,
                            callback: function(t) {
                                e.$set(e.search, "receive_at", t)
                            },
                            expression: "search.receive_at"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-input", {
                        ref: "transfer_order_no",
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
                    }, [r("el-input", {
                        attrs: {
                            placeholder: "收货单号"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getList(1)
                            }
                        },
                        model: {
                            value: e.search.receive_order_no,
                            callback: function(t) {
                                e.$set(e.search, "receive_order_no", t)
                            },
                            expression: "search.receive_order_no"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "流转步骤"
                        },
                        model: {
                            value: e.search.to_node_id,
                            callback: function(t) {
                                e.$set(e.search, "to_node_id", t)
                            },
                            expression: "search.to_node_id"
                        }
                    }, e._l(e.dict.nodes, (function(e) {
                        return r("el-option", {
                            key: e.id,
                            attrs: {
                                label: "收发--\x3e" + e.name,
                                value: e.id
                            }
                        })
                    })), 1)], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "分配状态"
                        },
                        model: {
                            value: e.search.assign_status,
                            callback: function(t) {
                                e.$set(e.search, "assign_status", t)
                            },
                            expression: "search.assign_status"
                        }
                    }, [r("el-option", {
                        attrs: {
                            value: "",
                            label: "全部"
                        }
                    }), e._v(" "), r("el-option", {
                        attrs: {
                            value: "-1",
                            label: "已作废"
                        }
                    }), e._v(" "), r("el-option", {
                        attrs: {
                            value: "0",
                            label: "未分配"
                        }
                    }), e._v(" "), r("el-option", {
                        attrs: {
                            value: "1",
                            label: "已分配"
                        }
                    })], 1)], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("userList", {
                        attrs: {
                            placeholder: "创建人"
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
                            placeholder: "分配人"
                        },
                        model: {
                            value: e.search.assign_user_ids,
                            callback: function(t) {
                                e.$set(e.search, "assign_user_ids", t)
                            },
                            expression: "search.assign_user_ids"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("userList", {
                        attrs: {
                            placeholder: "分配至"
                        },
                        model: {
                            value: e.search.by_assign_user_ids,
                            callback: function(t) {
                                e.$set(e.search, "by_assign_user_ids", t)
                            },
                            expression: "search.by_assign_user_ids"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-input", {
                        attrs: {
                            placeholder: "采购单号"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getList(1)
                            }
                        },
                        model: {
                            value: e.search.purchase_order_no,
                            callback: function(t) {
                                e.$set(e.search, "purchase_order_no", t)
                            },
                            expression: "search.purchase_order_no"
                        }
                    })], 1)])]), e._v(" "), r("el-col", {
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
                        directives: [{
                            name: "print",
                            rawName: "v-print",
                            value: "#barcode-container",
                            expression: "'#barcode-container'"
                        }],
                        ref: "printOrder",
                        attrs: {
                            type: "primary",
                            disabled: e.is_disabled
                        },
                        on: {
                            click: function(t) {
                                return e.printOrder()
                            }
                        }
                    }, [e._v("打印流转单")]), e._v(" "), r("el-button", {
                        attrs: {
                            loading: e.printLoading,
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.print()
                            }
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
                        ref: "tableData",
                        attrs: {
                            data: e.tableData,
                            border: "",
                            "max-height": e.getClientHeight(380)
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
                            width: "50"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "流转单号",
                            align: "center",
                            width: "200"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("router-link", {
                                    attrs: {
                                        to: {
                                            name: "distribution-flow-detail",
                                            query: {
                                                id: t.row.id
                                            }
                                        }
                                    }
                                }, [r("span", {
                                    staticClass: "view"
                                }, [e._v(e._s(t.row.transfer_order_no))])])]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "total_num",
                            label: "商品总数量",
                            width: "100",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "total_cost",
                            label: "商品总金额",
                            width: "100",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "流转步骤",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v("\n            " + e._s(t.row.source_node.name) + " ---\x3e\n            " + e._s(t.row.to_node.name) + "\n          ")]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "分配状态",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("div", {
                                    class: {
                                        "color-success": 1 == t.row.assign_status, "color-danger": 1 != t.row.assign_status
                                    }
                                }, [e._v(e._s(t.row.assign_status_description))])]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "接收状态",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("div", {
                                    class: {
                                        "color-success": 1 == t.row.receive_status, "color-danger": 1 != t.row.receive_status
                                    }
                                }, [e._v(e._s(t.row.receive_status_description))])]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "操作人",
                            "header-align": "center",
                            width: "240"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.create_user ? r("div", [e._v("\n              创建：" + e._s(t.row.create_user.department_name) + " ---\n              " + e._s(t.row.create_user.real_name) + "\n            ")]) : e._e(), e._v(" "), t.row.by_assign_user ? r("div", [e._v("\n              分配至：" + e._s(t.row.by_assign_user.department_name) + " ---\n              " + e._s(t.row.by_assign_user.real_name) + "\n            ")]) : e._e(), e._v(" "), t.row.receive_user ? r("div", [e._v("\n              查收：" + e._s(t.row.receive_user.department_name) + " ---\n              " + e._s(t.row.receive_user.real_name) + "\n            ")]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "时间",
                            "header-align": "center",
                            width: "220"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.create_user ? r("div", [e._v("创建：" + e._s(t.row.created_at))]) : e._e(), e._v(" "), t.row.by_assign_user ? r("div", [e._v("分配：" + e._s(t.row.assign_at))]) : e._e(), e._v(" "), t.row.receive_user ? r("div", [e._v("查收：" + e._s(t.row.receive_at))]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "操作",
                            "header-align": "center",
                            width: "210"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("router-link", {
                                    attrs: {
                                        to: {
                                            name: "distribution-flow-detail",
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
                                }, [e._v("查看")])], 1), e._v(" "), 0 == t.row.assign_status ? r("el-button", {
                                    attrs: {
                                        type: "success",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return e.openAssign(t.row.id)
                                        }
                                    }
                                }, [e._v("分配")]) : e._e(), e._v(" "), 0 == t.row.receive_status && -1 != t.row.assign_status ? r("el-button", {
                                    attrs: {
                                        type: "danger",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return e.destroyOrder(t.row.id, t.row.transfer_order_no)
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
                    })], 1), e._v(" "), r("AssignDialog", {
                        attrs: {
                            "show-dialog": e.showAssignDialog
                        },
                        on: {
                            "update:showDialog": function(t) {
                                e.showAssignDialog = t
                            },
                            "update:show-dialog": function(t) {
                                e.showAssignDialog = t
                            },
                            done: e.handleAssingDone
                        },
                        model: {
                            value: e.assignForm,
                            callback: function(t) {
                                e.assignForm = t
                            },
                            expression: "assignForm"
                        }
                    }), e._v(" "), r("Barcode", {
                        attrs: {
                            id: "barcode-container",
                            data: e.barcodeInfo
                        }
                    })], 1)
                },
                i = [],
                o = r("4838"),
                c = r.n(o),
                l = r("b21d"),
                u = r("2934"),
                d = r("c35b"),
                _ = r("b7b8"),
                p = r("6d8f"),
                h = r("3098");

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(r), !0).forEach((function(t) {
                        m(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function m(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function g(e, t, r, n, a, s, i) {
                try {
                    var o = e[s](i),
                        c = o.value
                } catch (l) {
                    return void r(l)
                }
                o.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function b(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var s = e.apply(t, r);

                        function i(e) {
                            g(s, n, a, i, o, "next", e)
                        }

                        function o(e) {
                            g(s, n, a, i, o, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function y(e, t) {
                var r;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = w(e)) || t && e && "number" === typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var s, i = !0,
                    o = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        o = !0, s = e
                    },
                    f: function() {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (o) throw s
                        }
                    }
                }
            }

            function w(e, t) {
                if (e) {
                    if ("string" === typeof e) return O(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? O(e, t) : void 0
                }
            }

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var k = {
                    name: "DistributionFlowListComponent",
                    components: {
                        UserList: d["a"],
                        AssignDialog: _["a"],
                        Barcode: p["a"]
                    },
                    props: {
                        receiveStatus: [String],
                        headerTotal: [Number]
                    },
                    data: function() {
                        return {
                            activeName: "0",
                            tableData: [],
                            search: {
                                assign_at: [],
                                receive_at: [],
                                transfer_order_no: this.$route.query.order_no,
                                assign_status: null,
                                receive_status: this.receiveStatus,
                                status: null,
                                create_user_ids: [],
                                assign_user_ids: [],
                                by_assign_user_ids: [],
                                receive_order_no: null,
                                purchase_order_no: null,
                                page: 1
                            },
                            total: 0,
                            total_goods_num: 0,
                            dict: {
                                nodes: []
                            },
                            assignForm: {
                                to_node_id: 2
                            },
                            showAssignDialog: !1,
                            orderId: [],
                            loading: !1,
                            printLoading: !1,
                            selectData: [],
                            is_disabled: !0,
                            barcodeInfo: [],
                            printRows: [],
                            selectRows: [],
                            oldSearch: {
                                transfer_order_no: null
                            }
                        }
                    },
                    computed: {
                        selectNum: function() {
                            var e, t = 0,
                                r = y(this.selectRows);
                            try {
                                for (r.s(); !(e = r.n()).done;) {
                                    var n = e.value;
                                    t += n.total_num
                                }
                            } catch (a) {
                                r.e(a)
                            } finally {
                                r.f()
                            }
                            return t
                        }
                    },
                    mounted: function() {
                        this.$refs["transfer_order_no"].focus(), this.getList(), this.getNodes()
                    },
                    methods: {
                        print: function() {
                            var e = b(c.a.mark((function e() {
                                var t, r;
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t = v(v({}, this.search), {}, {
                                                is_export: 1
                                            }, this.oldSearch), this.printLoading = !0, e.next = 5, Object(l["d"])(t);
                                        case 5:
                                            r = e.sent, this.printLoading = !1, window.open(r.data.download_url, "blank"), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e["catch"](0), this.printLoading = !1;
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 10]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        getList: function() {
                            var e = b(c.a.mark((function e(t) {
                                var r, n = this;
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t && (this.search.page = 1), this.loading = !0, e.next = 4, Object(l["d"])(this.search);
                                        case 4:
                                            r = e.sent, this.loading = !1, this.tableData = r.data.data, this.total = r.data.total, this.total_goods_num = r.data.total_goods_num, this.$emit("update:headerTotal", this.total), this.oldSearch.transfer_order_no = v({}, this.search).transfer_order_no, this.search.transfer_order_no = null, this.$route.query.order_no && !this.receiveStatus && (this.$refs["tableData"].toggleAllSelection(), this.printOrder(this.tableData), setTimeout((function() {
                                                n.$refs["printOrder"].$el.click()
                                            }), 500));
                                        case 13:
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
                        getNodes: function() {
                            var e = b(c.a.mark((function e() {
                                var t;
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(u["j"])();
                                        case 2:
                                            t = e.sent, this.dict.nodes = t.data;
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
                        resetSearch: function() {
                            this.search = {
                                assign_at: [],
                                receive_at: [],
                                transfer_order_no: null,
                                assign_status: null,
                                receive_status: null,
                                status: null,
                                create_user_ids: [],
                                assign_user_ids: [],
                                by_assign_user_ids: [],
                                receive_order_no: null,
                                purchase_order_no: null,
                                page: 1
                            }, this.getList()
                        },
                        destroyOrder: function() {
                            var e = b(c.a.mark((function e(t, r) {
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.$confirm("确定作废【".concat(r, "】？"), "提示", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 3:
                                            return this.loading = !0, e.next = 6, Object(l["b"])({
                                                transfer_order_id: t
                                            });
                                        case 6:
                                            this.loading = !1, this.getList(), this.$message.success("作废成功！"), e.next = 14;
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

                            function t(t, r) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        handleSelectionChange: function(e) {
                            e.length > 0 ? this.is_disabled = !1 : this.is_disabled = !0, this.selectData = [];
                            var t, r = y(e);
                            try {
                                for (r.s(); !(t = r.n()).done;) {
                                    var n = t.value;
                                    this.selectData.push(n.id)
                                }
                            } catch (a) {
                                r.e(a)
                            } finally {
                                r.f()
                            }
                            this.selectRows = e
                        },
                        openAssign: function(e) {
                            this.orderId = e, this.showAssignDialog = !0
                        },
                        handleAssingDone: function() {
                            var e = b(c.a.mark((function e() {
                                var t;
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t = {
                                                transfer_order_id: this.orderId,
                                                by_assign_user_id: this.assignForm.by_assign_user_id,
                                                to_node_id: this.assignForm.to_node_id
                                            }, this.loading = !0, e.next = 5, Object(l["a"])(t);
                                        case 5:
                                            this.loading = !1, this.$message.success("分配成功！"), this.getList(), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e["catch"](0), this.loading = !1;
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 10]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        printImei: function() {
                            this.barcodeInfo = [];
                            var e, t = y(this.printRows);
                            try {
                                for (t.s(); !(e = t.n()).done;) {
                                    var r = e.value,
                                        n = this.getPrintTitle(r.extend) + "<br/>2" + r.area_name.area_name,
                                        a = {
                                            title: n,
                                            code: r.extend.imei,
                                            line: 4
                                        };
                                    this.barcodeInfo.push(a)
                                }
                            } catch (s) {
                                t.e(s)
                            } finally {
                                t.f()
                            }
                        },
                        getProductByImei: function() {
                            var e = b(c.a.mark((function e() {
                                var t, r, n, a, s, i = this;
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            t = {
                                                transferOrderNos: [],
                                                per_page: 1e3
                                            }, r = y(this.selectRows);
                                            try {
                                                for (r.s(); !(n = r.n()).done;) a = n.value, t.transferOrderNos.push(a.transfer_order_no)
                                            } catch (o) {
                                                r.e(o)
                                            } finally {
                                                r.f()
                                            }
                                            return e.next = 5, Object(h["b"])(t);
                                        case 5:
                                            s = e.sent, this.printRows = s.data.data, this.printImei(), setTimeout((function() {
                                                i.$refs["printBarcode"].$el.click()
                                            }), 500);
                                        case 9:
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
                        printOrder: function(e) {
                            var t = this.selectRows;
                            e && (t = e), this.barcodeInfo = [];
                            var r, n = y(t);
                            try {
                                for (n.s(); !(r = n.n()).done;) {
                                    var a = r.value;
                                    this.barcodeInfo.push({
                                        line: 4,
                                        code: a.transfer_order_no,
                                        title: a.source_node.name + "---\x3e" + a.to_node.name + "（" + a.area_name.area_name + a.total_num + "台）<br/>" + (new Date).toLocaleString()
                                    })
                                }
                            } catch (s) {
                                n.e(s)
                            } finally {
                                n.f()
                            }
                        }
                    }
                },
                j = k,
                x = r("5d22"),
                C = Object(x["a"])(j, s, i, !1, null, "21a2f52c", null),
                $ = C.exports,
                S = {
                    name: "DistributionFlowList",
                    components: {
                        ListComponent: $
                    },
                    data: function() {
                        return {
                            activeName: "all",
                            listTotal: [0, 0]
                        }
                    },
                    mounted: function() {},
                    methods: {}
                },
                D = S,
                L = Object(x["a"])(D, n, a, !1, null, "6c16db61", null);
            t["default"] = L.exports
        },
        b21d: function(e, t, r) {
            "use strict";
            r.d(t, "d", (function() {
                return a
            })), r.d(t, "c", (function() {
                return s
            })), r.d(t, "b", (function() {
                return i
            })), r.d(t, "e", (function() {
                return o
            })), r.d(t, "a", (function() {
                return c
            }));
            var n = r("b775");

            function a(e) {
                return Object(n["a"])({
                    url: "/api/receive/transfer_orders",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(n["a"])({
                    url: "/api/receive/show_transfer_order",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(n["a"])({
                    url: "/api/receive/destroy_transfer_order",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(n["a"])({
                    url: "/api/receive/print_transfer_order",
                    method: "get",
                    params: e
                })
            }

            function c(e) {
                return Object(n["a"])({
                    url: "/api/receive/assign_transfer_order",
                    method: "get",
                    params: e
                })
            }
        }
    }
]);