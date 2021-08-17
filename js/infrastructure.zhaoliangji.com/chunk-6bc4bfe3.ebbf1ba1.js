(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-6bc4bfe3"], {
        2934: function(t, e, a) {
            "use strict";
            a.d(e, "p", (function() {
                return n
            })), a.d(e, "d", (function() {
                return o
            })), a.d(e, "i", (function() {
                return l
            })), a.d(e, "m", (function() {
                return i
            })), a.d(e, "b", (function() {
                return s
            })), a.d(e, "g", (function() {
                return c
            })), a.d(e, "k", (function() {
                return u
            })), a.d(e, "j", (function() {
                return p
            })), a.d(e, "h", (function() {
                return d
            })), a.d(e, "n", (function() {
                return h
            })), a.d(e, "a", (function() {
                return _
            })), a.d(e, "l", (function() {
                return f
            })), a.d(e, "q", (function() {
                return v
            })), a.d(e, "f", (function() {
                return m
            })), a.d(e, "o", (function() {
                return b
            })), a.d(e, "c", (function() {
                return g
            })), a.d(e, "e", (function() {
                return w
            }));
            var r = a("b775");

            function n(t) {
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

            function l(t) {
                return Object(r["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
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

            function u(t) {
                return Object(r["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(r["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
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

            function _(t) {
                return Object(r["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: t
                })
            }

            function f(t) {
                return Object(r["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: t
                })
            }

            function v(t) {
                return Object(r["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: t
                })
            }

            function m(t) {
                return Object(r["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: t
                })
            }

            function b(t) {
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

            function w(t) {
                return Object(r["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: t
                })
            }
        },
        4642: function(t, e, a) {
            "use strict";
            a("d71c")
        },
        "9f36": function(t, e, a) {
            "use strict";
            a.r(e);
            var r = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "app-container"
                    }, [a("el-row", {
                        staticClass: "header-search"
                    }, [a("el-col", {
                        staticClass: "wrap same-width",
                        attrs: {
                            span: 21
                        }
                    }, [a("div", {
                        staticClass: "search-item"
                    }, [a("el-input", {
                        ref: "purchase_order_no",
                        attrs: {
                            placeholder: "供货单号"
                        },
                        nativeOn: {
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.getList(1)
                            }
                        },
                        model: {
                            value: t.search.purchase_order_no,
                            callback: function(e) {
                                t.$set(t.search, "purchase_order_no", e)
                            },
                            expression: "search.purchase_order_no"
                        }
                    })], 1), t._v(" "), a("div", {
                        staticClass: "search-item"
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "供应商"
                        },
                        model: {
                            value: t.search.supplier_id,
                            callback: function(e) {
                                t.$set(t.search, "supplier_id", e)
                            },
                            expression: "search.supplier_id"
                        }
                    }, t._l(t.dict.supplier, (function(t, e) {
                        return a("el-option", {
                            key: e,
                            attrs: {
                                label: t.name,
                                value: t.suppiler_id
                            }
                        })
                    })), 1)], 1), t._v(" "), a("div", {
                        staticClass: "search-item"
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "供应商类型"
                        },
                        model: {
                            value: t.search.business_type,
                            callback: function(e) {
                                t.$set(t.search, "business_type", e)
                            },
                            expression: "search.business_type"
                        }
                    }, [a("el-option", {
                        attrs: {
                            label: "自营",
                            value: "0"
                        }
                    }), t._v(" "), a("el-option", {
                        attrs: {
                            label: "代卖",
                            value: "1"
                        }
                    })], 1)], 1), t._v(" "), a("div", {
                        staticClass: "search-item"
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "入库类型"
                        },
                        model: {
                            value: t.search.in_warehouse_type,
                            callback: function(e) {
                                t.$set(t.search, "in_warehouse_type", e)
                            },
                            expression: "search.in_warehouse_type"
                        }
                    }, [a("el-option", {
                        attrs: {
                            label: "代卖",
                            value: "0"
                        }
                    }), t._v(" "), a("el-option", {
                        attrs: {
                            label: "直采",
                            value: "1"
                        }
                    }), t._v(" "), a("el-option", {
                        attrs: {
                            label: "回收",
                            value: "2"
                        }
                    }), t._v(" "), a("el-option", {
                        attrs: {
                            label: "代卖转自营",
                            value: "3"
                        }
                    }), t._v(" "), a("el-option", {
                        attrs: {
                            label: "租赁退回",
                            value: "4"
                        }
                    })], 1)], 1), t._v(" "), a("div", {
                        staticClass: "search-item search-timer"
                    }, [a("el-date-picker", {
                        attrs: {
                            type: "datetimerange",
                            "range-separator": "-",
                            "start-placeholder": "录入开始时间",
                            "end-placeholder": "录入结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"]
                        },
                        model: {
                            value: t.search.input_at,
                            callback: function(e) {
                                t.$set(t.search, "input_at", e)
                            },
                            expression: "search.input_at"
                        }
                    })], 1)]), t._v(" "), a("el-col", {
                        staticClass: "operat-btn",
                        attrs: {
                            span: 3
                        }
                    }, [a("el-button", {
                        attrs: {
                            type: "warning"
                        },
                        on: {
                            click: function(e) {
                                return t.getList(1)
                            }
                        }
                    }, [t._v("查询")]), t._v(" "), a("el-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: function(e) {
                                return t.resetSearch()
                            }
                        }
                    }, [t._v("重置")])], 1)], 1), t._v(" "), a("el-row", {
                        staticClass: "body-list"
                    }, [a("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [a("el-table", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: t.loading,
                            expression: "loading"
                        }],
                        attrs: {
                            data: t.tableData,
                            border: "",
                            "max-height": t.getClientHeight(250)
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            type: "index",
                            label: "序号",
                            align: "center",
                            width: "80"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "供货单号",
                            align: "center",
                            width: "200px"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    },
                                    on: {
                                        click: function(a) {
                                            return t.openInfo(e.row.purchase_order_id)
                                        }
                                    }
                                }, [a("span", {
                                    staticClass: "view"
                                }, [t._v(t._s(e.row.purchase_order_no))])])]
                            }
                        }])
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "supplier_name",
                            label: "供应商",
                            width: "150",
                            align: "center"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "warehouse_name",
                            label: "地区库",
                            align: "center"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "sale_type_description",
                            label: "供应商类型",
                            align: "center"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "in_warehouse_type_description",
                            label: "入库类型",
                            align: "center"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "purchase_type",
                            label: "类型",
                            align: "center"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "order_num",
                            label: "供货数量",
                            align: "center"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "total_cost",
                            label: "供货总金额",
                            align: "center"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "enter_num",
                            label: "录入数量",
                            align: "center"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "enter_money",
                            label: "录入总金额",
                            align: "center"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "created_at",
                            label: "创建时间",
                            align: "center",
                            width: "160"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "操作",
                            align: "center",
                            width: "240"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [a("el-button", {
                                    attrs: {
                                        type: "success",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(a) {
                                            return t.openBatch(e.row.purchase_order_no)
                                        }
                                    }
                                }, [t._v("录入批次")]), t._v(" "), a("el-button", {
                                    attrs: {
                                        type: "warning",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(a) {
                                            return t.openPrint(e.row.purchase_order_id)
                                        }
                                    }
                                }, [t._v("打印")])]
                            }
                        }])
                    })], 1)], 1)], 1), t._v(" "), a("div", {
                        staticClass: "footer-pagination"
                    }, [a("el-pagination", {
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
                    })], 1), t._v(" "), a("el-dialog", {
                        staticClass: "batch-info-dialog",
                        attrs: {
                            title: "流转单详细",
                            visible: t.showBatchInfoDialog,
                            width: "800px"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.showBatchInfoDialog = e
                            }
                        }
                    }, [a("el-table", {
                        attrs: {
                            data: t.batchInfo
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            label: "商品",
                            prop: "extend.product_name",
                            width: "160px"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v("\n          " + t._s(e.row.extend.product_name) + "\n          "), a("el-tag", {
                                    attrs: {
                                        size: "mini"
                                    }
                                }, [t._v("IMEI:" + t._s(e.row.extend.imei))])]
                            }
                        }])
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "参数信息",
                            prop: "props_str"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return t._l(e.row.extend.sales_properties, (function(e, r) {
                                    return a("el-tag", {
                                        key: r,
                                        attrs: {
                                            size: "mini",
                                            type: "primary"
                                        }
                                    }, [t._v(t._s(e.pn_name) + ":" + t._s(e.pv_name))])
                                }))
                            }
                        }])
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "成本价格",
                            prop: "extend.product_cost.cost",
                            align: "center",
                            width: "100px"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "仓库",
                            align: "center",
                            width: "150px"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v(t._s(e.row.extend.warehouse.area_name) + " --\n          " + t._s(e.row.extend.warehouse.warehouse_num_name))]
                            }
                        }])
                    })], 1), t._v(" "), a("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                t.showBatchInfoDialog = !1
                            }
                        }
                    }, [t._v("确定")])], 1)], 1), t._v(" "), a("el-dialog", {
                        staticClass: "batch-dialog",
                        attrs: {
                            title: "录入批次",
                            visible: t.showBatchDialog,
                            width: "800px"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.showBatchDialog = e
                            }
                        }
                    }, [a("el-table", {
                        attrs: {
                            data: t.batch
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            label: "录入流转单号",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    },
                                    on: {
                                        click: function(a) {
                                            return t.openBatchInfo(e.row.transfer_order_no)
                                        }
                                    }
                                }, [t._v(t._s(e.row.transfer_order_no))])]
                            }
                        }])
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "录入人",
                            prop: "receive_user.real_name",
                            align: "center"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "录入数量",
                            prop: "deal_num",
                            align: "center"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "录入时间",
                            prop: "created_at",
                            align: "center"
                        }
                    })], 1), t._v(" "), a("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                t.showBatchDialog = !1
                            }
                        }
                    }, [t._v("确定")])], 1)], 1), t._v(" "), a("el-dialog", {
                        staticClass: "info-dialog",
                        attrs: {
                            title: "供货单详情",
                            visible: t.showInfoDialog,
                            width: "800px"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.showInfoDialog = e
                            }
                        }
                    }, [a("el-row", {
                        staticClass: "header-search"
                    }, [a("el-col", [a("el-alert", {
                        attrs: {
                            type: "success",
                            closable: !1
                        }
                    }, [a("el-row", [a("el-col", {
                        staticClass: "header-total",
                        attrs: {
                            span: 24
                        }
                    }, [a("ul", [a("li", [t._v("\n                  供货单号：\n                  "), a("span", [t._v(t._s(t.info.purchase_order_no))])]), t._v(" "), a("li", [t._v("\n                  供应商名称：\n                  "), a("span", [t._v(t._s(t.info.supplier_name))])])]), t._v(" "), a("ul", [a("li", [t._v("\n                  供货数量：\n                  "), a("span", [t._v(t._s(t.info.order_num))])]), t._v(" "), a("li", [t._v("\n                  供货类型：\n                  "), a("span", [t._v(t._s(t.info.sale_type_description))])])]), t._v(" "), a("ul", [a("li", [t._v("\n                  地区库：\n                  "), a("span", [t._v(t._s(t.info.warehouse_name))])]), t._v(" "), a("li", [t._v("\n                  供货总价：\n                  "), a("span", [t._v(t._s(t.info.order_total_cost))])])])])], 1)], 1)], 1)], 1), t._v(" "), a("el-table", {
                        attrs: {
                            data: t.info.details,
                            "show-summary": "",
                            "summary-method": t.getSummaries
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            label: "机型参数",
                            prop: "model_name"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "网络",
                            prop: "props_kv.网络",
                            width: "80px"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "版本",
                            prop: "props_kv.版本",
                            width: "70px"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "内存",
                            prop: "props_kv.内存",
                            width: "70px"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "颜色",
                            prop: "props_kv.颜色",
                            width: "70px"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "成色",
                            prop: "props_kv.成色",
                            width: "70px"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "来源",
                            prop: "props_kv.来源",
                            width: "80px"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "数量",
                            prop: "purchase_num",
                            align: "center",
                            width: "70px"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "单价",
                            prop: "cost_price",
                            align: "center",
                            width: "90px"
                        }
                    })], 1), t._v(" "), a("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                t.showInfoDialog = !1
                            }
                        }
                    }, [t._v("确定")])], 1)], 1), t._v(" "), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !1,
                            expression: "false"
                        }],
                        staticClass: "print-dialog",
                        staticStyle: {
                            width: "200mm"
                        },
                        attrs: {
                            title: "打印供货单",
                            visible: t.showPrintDialog
                        },
                        on: {
                            "update:visible": function(e) {
                                t.showPrintDialog = e
                            }
                        }
                    }, [a("div", {
                        staticStyle: {
                            padding: "0mm"
                        },
                        attrs: {
                            id: "print-area"
                        }
                    }, [a("el-row", {
                        staticClass: "header-search"
                    }, [a("el-col", [a("div", {
                        staticStyle: {
                            width: "100%"
                        }
                    }, [a("div", {
                        staticStyle: {
                            "text-align": "center",
                            "font-size": "20px",
                            "font-weight": "600"
                        }
                    }, [t._v("\n              《供货单商品明细》\n            ")]), t._v(" "), a("div", {
                        staticStyle: {
                            "text-align": "center"
                        }
                    }, [a("img", {
                        staticStyle: {
                            width: "300px",
                            height: "70px"
                        },
                        attrs: {
                            id: "barcode-" + t.print.purchase_order_no
                        }
                    })]), t._v(" "), a("div", {
                        staticStyle: {
                            "text-align": "center",
                            "margin-top": "-5px"
                        }
                    }, [t._v("\n              " + t._s(t.print.purchase_order_no) + "\n            ")]), t._v(" "), a("div", {
                        staticStyle: {
                            "font-size": "16px",
                            "font-weight": "600",
                            "margin-top": "20px",
                            "margin-bottom": "5px"
                        }
                    }, [t._v("\n              供应商：" + t._s(t.print.supplier_name) + "\n            ")]), t._v(" "), a("div", {
                        staticStyle: {
                            "font-size": "16px",
                            "font-weight": "600"
                        }
                    }, [t._v("\n              地区库：" + t._s(t.print.warehouse_name) + "\n            ")])])])], 1), t._v(" "), a("el-table", {
                        attrs: {
                            data: t.print.details,
                            "show-summary": "",
                            "summary-method": t.getSummaries
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            label: "机型参数",
                            prop: "model_name",
                            width: "130px"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "网络",
                            prop: "props_kv.网络",
                            width: "170px"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "版本",
                            prop: "props_kv.版本",
                            width: "50px"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "内存",
                            prop: "props_kv.内存",
                            width: "85px"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "颜色",
                            prop: "props_kv.颜色",
                            width: "70px"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "成色",
                            prop: "props_kv.成色",
                            width: "60px"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "来源",
                            prop: "props_kv.来源",
                            width: "75px"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "数量",
                            prop: "purchase_num",
                            align: "center",
                            width: "50px"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "单价",
                            prop: "cost_price",
                            align: "center",
                            width: "85px"
                        }
                    })], 1)], 1), t._v(" "), a("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [a("el-button", {
                        directives: [{
                            name: "print",
                            rawName: "v-print",
                            value: "#print-area",
                            expression: "'#print-area'"
                        }],
                        ref: "triggerPrint",
                        attrs: {
                            type: "primary"
                        }
                    }, [t._v("确定")])], 1)])], 1)
                },
                n = [],
                o = a("4838"),
                l = a.n(o),
                i = a("b775");

            function s(t) {
                return Object(i["a"])({
                    url: "/api/purchase/query",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(i["a"])({
                    url: "/api/purchase/details",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(i["a"])({
                    url: "/api/purchase/transfer",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(i["a"])({
                    url: "/api/input/products_search",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(i["a"])({
                    url: "/api/option/select",
                    method: "get",
                    params: t
                })
            }
            var h = a("2934");

            function _(t, e) {
                var a;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (a = f(t)) || e && t && "number" === typeof t.length) {
                        a && (t = a);
                        var r = 0,
                            n = function() {};
                        return {
                            s: n,
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
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, l = !0,
                    i = !1;
                return {
                    s: function() {
                        a = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = a.next();
                        return l = t.done, t
                    },
                    e: function(t) {
                        i = !0, o = t
                    },
                    f: function() {
                        try {
                            l || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                }
            }

            function f(t, e) {
                if (t) {
                    if ("string" === typeof t) return v(t, e);
                    var a = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? v(t, e) : void 0
                }
            }

            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, r = new Array(e); a < e; a++) r[a] = t[a];
                return r
            }

            function m(t, e, a, r, n, o, l) {
                try {
                    var i = t[o](l),
                        s = i.value
                } catch (c) {
                    return void a(c)
                }
                i.done ? e(s) : Promise.resolve(s).then(r, n)
            }

            function b(t) {
                return function() {
                    var e = this,
                        a = arguments;
                    return new Promise((function(r, n) {
                        var o = t.apply(e, a);

                        function l(t) {
                            m(o, r, n, l, i, "next", t)
                        }

                        function i(t) {
                            m(o, r, n, l, i, "throw", t)
                        }
                        l(void 0)
                    }))
                }
            }
            var g = a("fba3"),
                w = {
                    name: "SupplyList",
                    data: function() {
                        return {
                            tableData: [],
                            search: {
                                purchase_order_no: null,
                                sale_type: null,
                                business_type: null,
                                in_warehouse_type: null,
                                input_at: null,
                                page: 1,
                                per_page: 10
                            },
                            total: 0,
                            loading: !1,
                            dict: {
                                supplier: [],
                                type: {}
                            },
                            showInfoDialog: !1,
                            info: {
                                details: []
                            },
                            showBatchDialog: !1,
                            batch: [],
                            batchInfo: [],
                            showBatchInfoDialog: !1,
                            showPrintDialog: !1,
                            print: {
                                details: []
                            }
                        }
                    },
                    mounted: function() {
                        this.getList(), this.getSuppliers(), this.getSupplyDict()
                    },
                    methods: {
                        getSupplyDict: function() {
                            var t = b(l.a.mark((function t() {
                                var e;
                                return l.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, d({
                                                fields: "purchase_type_select"
                                            });
                                        case 2:
                                            e = t.sent, this.dict.type = e.data.purchase_type_select;
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
                        }(),
                        getList: function() {
                            var t = b(l.a.mark((function t(e) {
                                var a;
                                return l.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, 1 == e && (this.search.page = 1), this.loading = !0, t.next = 5, s(this.search);
                                        case 5:
                                            a = t.sent, this.loading = !1, this.tableData = a.data.data, this.total = a.data.total, t.next = 15;
                                            break;
                                        case 11:
                                            t.prev = 11, t.t0 = t["catch"](0), console.error(t.t0), this.loading = !1;
                                        case 15:
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
                            this.search = {
                                purchase_order_no: null,
                                sale_type: null,
                                page: 1,
                                per_page: 10
                            }, this.getList()
                        },
                        getSuppliers: function() {
                            var t = b(l.a.mark((function t() {
                                var e;
                                return l.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(h["n"])();
                                        case 2:
                                            e = t.sent, this.dict.supplier = e.data;
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
                        }(),
                        openPrint: function(t) {
                            var e = this;
                            this.showPrintDialog = !0, this.$nextTick(b(l.a.mark((function a() {
                                var r, n;
                                return l.a.wrap((function(a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            return r = e.$loading({
                                                target: ".print-dialog .el-dialog"
                                            }), a.prev = 1, a.next = 4, c({
                                                purchase_order_id: t
                                            });
                                        case 4:
                                            n = a.sent, e.print = n.data, setTimeout((function() {
                                                g("#barcode-" + e.print.purchase_order_no, e.print.purchase_order_no, {
                                                    displayValue: !1,
                                                    width: 1
                                                }), console.log(e.$refs["triggerPrint"]), e.$refs["triggerPrint"].$el.click(), e.showPrintDialog = !1
                                            }), 200), a.next = 12;
                                            break;
                                        case 9:
                                            a.prev = 9, a.t0 = a["catch"](1), console.error(a.t0);
                                        case 12:
                                            r.close();
                                        case 13:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a, null, [
                                    [1, 9]
                                ])
                            }))))
                        },
                        openInfo: function(t) {
                            var e = this;
                            this.showInfoDialog = !0, this.$nextTick(b(l.a.mark((function a() {
                                var r, n;
                                return l.a.wrap((function(a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            return r = e.$loading({
                                                target: ".info-dialog .el-dialog"
                                            }), a.prev = 1, a.next = 4, c({
                                                purchase_order_id: t
                                            });
                                        case 4:
                                            n = a.sent, e.info = n.data, a.next = 11;
                                            break;
                                        case 8:
                                            a.prev = 8, a.t0 = a["catch"](1), console.error(a.t0);
                                        case 11:
                                            r.close();
                                        case 12:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a, null, [
                                    [1, 8]
                                ])
                            }))))
                        },
                        openBatch: function(t) {
                            var e = this;
                            this.showBatchDialog = !0, this.$nextTick(b(l.a.mark((function a() {
                                var r, n;
                                return l.a.wrap((function(a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            return r = e.$loading({
                                                target: ".batch-dialog .el-dialog"
                                            }), a.prev = 1, a.next = 4, u({
                                                purchase_order_no: t
                                            });
                                        case 4:
                                            n = a.sent, e.batch = n.data, a.next = 11;
                                            break;
                                        case 8:
                                            a.prev = 8, a.t0 = a["catch"](1), console.error(a.t0);
                                        case 11:
                                            r.close();
                                        case 12:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a, null, [
                                    [1, 8]
                                ])
                            }))))
                        },
                        openBatchInfo: function(t) {
                            var e = this;
                            this.showBatchInfoDialog = !0, this.$nextTick(b(l.a.mark((function a() {
                                var r, n;
                                return l.a.wrap((function(a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            return r = e.$loading({
                                                target: ".batch-info-dialog .el-dialog"
                                            }), a.prev = 1, a.next = 4, p({
                                                transfer_order_no: t,
                                                page: 1,
                                                per_page: 200
                                            });
                                        case 4:
                                            n = a.sent, e.batchInfo = n.data.data, a.next = 11;
                                            break;
                                        case 8:
                                            a.prev = 8, a.t0 = a["catch"](1), console.error(a.t0);
                                        case 11:
                                            r.close();
                                        case 12:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a, null, [
                                    [1, 8]
                                ])
                            }))))
                        },
                        getSummaries: function(t) {
                            var e = t.columns,
                                a = t.data,
                                r = [];
                            return e.forEach((function(t, e) {
                                if (0 !== e) {
                                    if (["purchase_num", "cost_price"].indexOf(t.property) > -1) {
                                        var n, o = 0,
                                            l = _(a);
                                        try {
                                            for (l.s(); !(n = l.n()).done;) {
                                                var i = n.value;
                                                o += Number(i[t.property])
                                            }
                                        } catch (s) {
                                            l.e(s)
                                        } finally {
                                            l.f()
                                        }
                                        r[e] = o
                                    }
                                } else r[e] = "合计"
                            })), r
                        }
                    }
                },
                y = w,
                x = (a("4642"), a("5d22")),
                k = Object(x["a"])(y, r, n, !1, null, "a0ac88b0", null);
            e["default"] = k.exports
        },
        d71c: function(t, e, a) {}
    }
]);