(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-3aaa8ce8"], {
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
                return f
            })), r.d(t, "q", (function() {
                return v
            })), r.d(t, "f", (function() {
                return g
            })), r.d(t, "o", (function() {
                return m
            })), r.d(t, "c", (function() {
                return b
            })), r.d(t, "e", (function() {
                return w
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

            function l(e) {
                return Object(n["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: e
                })
            }

            function c(e) {
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

            function p(e) {
                return Object(n["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: e
                })
            }

            function _(e) {
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

            function g(e) {
                return Object(n["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: e
                })
            }

            function m(e) {
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

            function w(e) {
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
        "3f35": function(e, t, r) {
            "use strict";
            r("7444")
        },
        7444: function(e, t, r) {},
        b968: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = function() {
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
                            "start-placeholder": "处理时间",
                            "end-placeholder": "结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"]
                        },
                        model: {
                            value: e.search.deal_at,
                            callback: function(t) {
                                e.$set(e.search, "deal_at", t)
                            },
                            expression: "search.deal_at"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "业务类型"
                        },
                        model: {
                            value: e.search.business_type,
                            callback: function(t) {
                                e.$set(e.search, "business_type", t)
                            },
                            expression: "search.business_type"
                        }
                    }, [r("el-option", {
                        attrs: {
                            label: "自营",
                            value: "0"
                        }
                    }), e._v(" "), r("el-option", {
                        attrs: {
                            label: "市场代卖",
                            value: "1"
                        }
                    }), e._v(" "), r("el-option", {
                        attrs: {
                            label: "回收",
                            value: "2"
                        }
                    }), e._v(" "), r("el-option", {
                        attrs: {
                            label: "保卖",
                            value: "3"
                        }
                    })], 1)], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-input", {
                        ref: "transfer_order_no",
                        attrs: {
                            placeholder: "流转单号",
                            clearable: ""
                        },
                        nativeOn: {
                            keyup: function(t) {
                                if (!t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter")) return null;
                                e.getList(1), e.$refs["transfer_order_no"].select()
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
                    }, [r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "供应商"
                        },
                        model: {
                            value: e.search.supplier_id,
                            callback: function(t) {
                                e.$set(e.search, "supplier_id", t)
                            },
                            expression: "search.supplier_id"
                        }
                    }, e._l(e.dict.supplier, (function(e, t) {
                        return r("el-option", {
                            key: t,
                            attrs: {
                                label: e.name,
                                value: e.suppiler_id
                            }
                        })
                    })), 1)], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("ImeiSearch", {
                        ref: "imei",
                        on: {
                            done: function(t) {
                                e.getList(1), e.$refs["imei"].select()
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
                        staticClass: "search-item type-brand-model"
                    }, [r("TypeBrandModel", {
                        attrs: {
                            level: 3,
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
                            placeholder: "接收人"
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
                    }, [r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "是否上报异常"
                        },
                        model: {
                            value: e.search.is_abnormal_report,
                            callback: function(t) {
                                e.$set(e.search, "is_abnormal_report", t)
                            },
                            expression: "search.is_abnormal_report"
                        }
                    }, [r("el-option", {
                        attrs: {
                            label: "是",
                            value: "1"
                        }
                    }), e._v(" "), r("el-option", {
                        attrs: {
                            label: "否",
                            value: "0"
                        }
                    })], 1)], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "处理状态"
                        },
                        model: {
                            value: e.search.deal_status,
                            callback: function(t) {
                                e.$set(e.search, "deal_status", t)
                            },
                            expression: "search.deal_status"
                        }
                    }, [r("el-option", {
                        attrs: {
                            label: "未处理",
                            value: "0"
                        }
                    }), e._v(" "), r("el-option", {
                        attrs: {
                            label: "已处理",
                            value: "1"
                        }
                    }), e._v(" "), r("el-option", {
                        attrs: {
                            label: "已流转",
                            value: "2"
                        }
                    })], 1)], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("Areas", {
                        model: {
                            value: e.search.area_ids,
                            callback: function(t) {
                                e.$set(e.search, "area_ids", t)
                            },
                            expression: "search.area_ids"
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
                        attrs: {
                            type: "primary",
                            disabled: 0 == e.selectRows.length
                        },
                        on: {
                            click: function(t) {
                                return e.printImei()
                            }
                        }
                    }, [e._v("打印IMEI标签")]), e._v(" "), r("el-button", {
                        attrs: {
                            type: "primary",
                            disabled: 0 == e.selectRows.length
                        },
                        on: {
                            click: function(t) {
                                return e.printImei(2)
                            }
                        }
                    }, [e._v("打印二维码")]), e._v(" "), r("el-button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !1,
                            expression: "false"
                        }, {
                            name: "print",
                            rawName: "v-print",
                            value: "#qrcode-container",
                            expression: "'#qrcode-container'"
                        }],
                        ref: "print-qrcode-btn"
                    }), e._v(" "), r("el-button", {
                        attrs: {
                            type: "primary",
                            disabled: 0 == e.selectRows.length
                        },
                        on: {
                            click: function(t) {
                                e.showAssignDialog = !0
                            }
                        }
                    }, [e._v("生成流转单")]), e._v(" "), r("el-button", {
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
                    }, [e._v("已勾选：" + e._s(e.selectRows.length))]), e._v(" "), r("el-tag", {
                        attrs: {
                            type: "warning"
                        }
                    }, [e._v("总数量：" + e._s(e.total))])], 1)]), e._v(" "), r("el-row", {
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
                            size: "mini",
                            "max-height": e.getClientHeight(310)
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
                            width: "60"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "商品",
                            width: "190",
                            "header-align": "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.extend ? r("div", [e._v(e._s(t.row.extend.product_name))]) : e._e(), e._v(" "), t.row.extend ? r("div", [e._v("IMEI：" + e._s(t.row.extend.imei))]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "参数信息",
                            "header-align": "center",
                            width: "220"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.extend ? r("div", e._l(t.row.extend.sales_properties, (function(t, n) {
                                    return r("el-tag", {
                                        key: n,
                                        staticStyle: {
                                            "margin-right": "3px"
                                        },
                                        attrs: {
                                            size: "mini"
                                        }
                                    }, [e._v(e._s(t.pn_name) + "：" + e._s(t.pv_name))])
                                })), 1) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "价格",
                            "header-align": "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.extend && t.row.extend.product_cost ? r("div", [e._v("成本价：" + e._s(t.row.extend.product_cost.cost))]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "供应商",
                            "header-align": "center",
                            width: "180"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.extend && t.row.extend.product_cost ? r("div", [r("span", [e._v("采购单号：")]), e._v("\n              " + e._s(t.row.extend.product_cost.purchase_order_no) + "\n            ")]) : e._e(), e._v(" "), r("div", [r("span", [e._v("业务：")]), e._v("\n              " + e._s(t.row.business_type_description) + "\n            ")]), e._v(" "), t.row.extend && t.row.extend.product_cost && t.row.extend.product_cost.supplier_info ? r("div", [e._v("供应商：" + e._s(t.row.extend.product_cost.supplier_info.name))]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "仓库",
                            align: "center",
                            width: "150"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.extend && t.row.extend.warehouse ? r("div", [e._v("\n              " + e._s(t.row.extend.warehouse.area_name ? t.row.extend.warehouse.area_name + " / " : "") + e._s(t.row.extend.warehouse.warehouse_num_name) + "\n            ")]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "transfer_order.transfer_order_no",
                            label: "流转单号",
                            align: "center",
                            width: "150"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "next_transfer_order.transfer_order_no",
                            label: "下一环节流转单号",
                            align: "center",
                            width: "100"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "上报异常",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("div", {
                                    class: {
                                        "color-danger": 1 == t.row.is_abnormal_report, "color-success": 0 == t.row.is_abnormal_report
                                    }
                                }, [e._v(e._s(1 == t.row.is_abnormal_report ? "是" : "否"))])]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "处理状态",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.extend ? r("el-tag", {
                                    attrs: {
                                        type: 0 == t.row.deal_status ? "danger" : 1 == t.row.deal_status ? "warning" : 2 == t.row.deal_status ? "success" : ""
                                    }
                                }, [e._v(e._s(t.row.deal_status_description))]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "商品状态",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.extend ? r("el-tag", {
                                    attrs: {
                                        type: "warning"
                                    }
                                }, [e._v(e._s(t.row.extend.status_description))]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "transfer_order_receive_user.real_name",
                            label: "接收人",
                            align: "center",
                            width: "100"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "address",
                            label: "操作",
                            align: "center",
                            width: "80",
                            fixed: "right"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("el-button", {
                                    attrs: {
                                        type: "info",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return e.openLogs(t.row.product_id)
                                        }
                                    }
                                }, [e._v("日志")]), e._v(" "), 3 == t.row.deal_status ? r("el-button", {
                                    staticStyle: {
                                        "margin-top": "3px"
                                    },
                                    attrs: {
                                        type: "success",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return e.rejectReceive(t.row.id)
                                        }
                                    }
                                }, [e._v("驳回接收")]) : e._e()]
                            }
                        }])
                    })], 1)], 1)], 1), e._v(" "), r("div", {
                        staticClass: "footer-pagination"
                    }, [r("el-pagination", {
                        attrs: {
                            background: "",
                            layout: "sizes, total, prev, pager, next, jumper",
                            total: e.total,
                            "current-page": e.search.page,
                            "page-size": e.search.per_page,
                            "page-sizes": e.search.sizes
                        },
                        on: {
                            "update:currentPage": function(t) {
                                return e.$set(e.search, "page", t)
                            },
                            "update:current-page": function(t) {
                                return e.$set(e.search, "page", t)
                            },
                            "update:pageSize": function(t) {
                                return e.$set(e.search, "per_page", t)
                            },
                            "update:page-size": function(t) {
                                return e.$set(e.search, "per_page", t)
                            },
                            "update:pageSizes": function(t) {
                                return e.$set(e.search, "sizes", t)
                            },
                            "update:page-sizes": function(t) {
                                return e.$set(e.search, "sizes", t)
                            },
                            "current-change": function(t) {
                                return e.getList()
                            },
                            "size-change": function(t) {
                                return e.getList(1)
                            }
                        }
                    })], 1), e._v(" "), r("AssignDialog", {
                        attrs: {
                            "show-dialog": e.showAssignDialog,
                            "require-user": !1
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
                    }), e._v(" "), r("LogsDialog", {
                        attrs: {
                            "show-dialog": e.showLogDialog
                        },
                        on: {
                            "update:showDialog": function(t) {
                                e.showLogDialog = t
                            },
                            "update:show-dialog": function(t) {
                                e.showLogDialog = t
                            }
                        },
                        model: {
                            value: e.logProductId,
                            callback: function(t) {
                                e.logProductId = t
                            },
                            expression: "logProductId"
                        }
                    }), e._v(" "), r("Barcode", {
                        attrs: {
                            id: "barcode-container",
                            data: e.barcodeInfo
                        }
                    }), e._v(" "), r("Qrcode", {
                        attrs: {
                            id: "qrcode-container",
                            data: e.barcodeInfo
                        }
                    })], 1)
                },
                a = [],
                s = r("4838"),
                i = r.n(s),
                o = r("2934"),
                l = r("3098"),
                c = r("1504"),
                u = r("c35b"),
                d = r("b7b8"),
                p = r("cd36"),
                _ = r("e46f"),
                h = r("6d8f"),
                f = r("0463"),
                v = r("2a67"),
                g = r("246e");

            function m(e, t) {
                var r;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = b(e)) || t && e && "number" === typeof e.length) {
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

            function b(e, t) {
                if (e) {
                    if ("string" === typeof e) return w(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? w(e, t) : void 0
                }
            }

            function w(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function y(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(r), !0).forEach((function(t) {
                        k(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function k(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function O(e, t, r, n, a, s, i) {
                try {
                    var o = e[s](i),
                        l = o.value
                } catch (c) {
                    return void r(c)
                }
                o.done ? t(l) : Promise.resolve(l).then(n, a)
            }

            function j(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var s = e.apply(t, r);

                        function i(e) {
                            O(s, n, a, i, o, "next", e)
                        }

                        function o(e) {
                            O(s, n, a, i, o, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var S = {
                    components: {
                        TypeBrandModel: c["a"],
                        UserList: u["a"],
                        AssignDialog: d["a"],
                        LogsDialog: p["a"],
                        Barcode: h["a"],
                        Qrcode: f["a"],
                        Areas: v["a"],
                        ImeiSearch: g["a"]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            search: {
                                deal_at: [],
                                business_type: null,
                                transfer_order_no: null,
                                supplier_id: null,
                                imei: null,
                                type_id: null,
                                brand_id: null,
                                model_id: null,
                                receive_user_ids: [],
                                is_abnormal_report: null,
                                deal_status: null,
                                area_ids: [],
                                page: 1,
                                per_page: 50,
                                sizes: [10, 20, 30, 40, 50, 100, 300, 500]
                            },
                            total: 0,
                            dict: {},
                            loading: !1,
                            propsStatus: !0,
                            allPropsStatus: !0,
                            selectRows: [],
                            showProps: !1,
                            propsForm: {
                                props_data: {}
                            },
                            propsData: {},
                            propsLoading: !1,
                            assignForm: {
                                to_node_id: 3
                            },
                            showAssignDialog: !1,
                            logProductId: null,
                            showLogDialog: !1,
                            printLoading: !1,
                            barcodeInfo: [],
                            urseId: this.$route.query.userId,
                            time: this.$route.query.time,
                            weekday: this.$route.query.time
                        }
                    },
                    mounted: function() {
                        console.log(Object(_["b"])(), this.weekday), this.getSuppliers(), this.time && (this.$set(this.search, "deal_at", [this.time + " 00:00:00", this.time + " 23:59:59"]), this.$set(this.search, "receive_user_ids", [JSON.parse(localStorage.getItem("baseInfo")).id])), this.weekday && this.$set(this.search, "deal_at", [this.weekday + " 00:00:00", Object(_["b"])() + " 23:59:59"]), this.getList()
                    },
                    methods: {
                        print: function() {
                            var e = j(i.a.mark((function e() {
                                var t;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t = x(x({}, this.search), {}, {
                                                is_export: 1
                                            }), t.area_ids = t.area_ids.join(","), this.printLoading = !0, e.next = 6, Object(l["b"])(t);
                                        case 6:
                                            return this.printLoading = !1, e.next = 9, this.$confirm("导出成功，是否跳转至【报表进度查询】？", "提示", {
                                                center: !0,
                                                type: "success"
                                            });
                                        case 9:
                                            this.$router.push({
                                                name: "logs-list"
                                            }), e.next = 15;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e["catch"](0), this.printLoading = !1;
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 12]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        getList: function() {
                            var e = j(i.a.mark((function e(t) {
                                var r, n;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t && (this.search.page = 1), this.loading = !0, r = JSON.parse(JSON.stringify(this.search)), r.area_ids = r.area_ids.join(","), e.next = 7, Object(l["b"])(r);
                                        case 7:
                                            n = e.sent, this.loading = !1, this.tableData = n.data.data, this.total = n.data.total, e.next = 16;
                                            break;
                                        case 13:
                                            e.prev = 13, e.t0 = e["catch"](0), this.loading = !1;
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 13]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        getSuppliers: function() {
                            var e = j(i.a.mark((function e() {
                                var t;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(o["n"])();
                                        case 2:
                                            t = e.sent, this.dict.supplier = t.data;
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
                                deal_at: [],
                                business_type: null,
                                transfer_order_sn: null,
                                supplier_id: null,
                                imei: null,
                                type_id: null,
                                brand_id: null,
                                model_id: null,
                                receive_user_ids: [],
                                is_abnormal_report: null,
                                deal_status: null,
                                area_ids: [],
                                page: 1
                            }, this.getList()
                        },
                        handleSelectionChange: function(e) {
                            this.selectRows = e;
                            var t = null,
                                r = null,
                                n = !1,
                                a = !1;
                            if (e.length > 0) {
                                var s, i = m(e);
                                try {
                                    for (i.s(); !(s = i.n()).done;) {
                                        var o = s.value;
                                        t ? t != o.extend.model_id && (n = !0) : t = o.extend.model_id, r ? r != o.transfer_order.transfer_order_no && (a = !0) : r = o.transfer_order.transfer_order_no
                                    }
                                } catch (l) {
                                    i.e(l)
                                } finally {
                                    i.f()
                                }
                            } else n = !0, a = !0;
                            this.propsStatus = n, this.allPropsStatus = a
                        },
                        handleAssingDone: function() {
                            var e = j(i.a.mark((function e() {
                                var t, r, n, a, s, o;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            e.prev = 0, t = [], r = m(this.selectRows);
                                            try {
                                                for (r.s(); !(n = r.n()).done;) a = n.value, t.push(a.product_id)
                                            } catch (i) {
                                                r.e(i)
                                            } finally {
                                                r.f()
                                            }
                                            return s = {
                                                product_ids: t,
                                                to_node_id: this.assignForm.to_node_id,
                                                by_assign_user_id: this.assignForm.by_assign_user_id
                                            }, this.loading = !0, e.next = 8, Object(l["a"])(s);
                                        case 8:
                                            o = e.sent, this.loading = !1, this.$router.push({
                                                name: "distribution-flow-list",
                                                query: {
                                                    transfer_order_no: o.data.transfer_order_no
                                                }
                                            }), this.$message.success(o.msg), e.next = 18;
                                            break;
                                        case 14:
                                            e.prev = 14, e.t0 = e["catch"](0), console.log(e.t0), this.loading = !1;
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 14]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        openLogs: function(e) {
                            console.log(e), this.showLogDialog = !0, this.logProductId = e
                        },
                        printImei: function(e) {
                            var t = this;
                            this.barcodeInfo = [];
                            var r, n = m(this.selectRows);
                            try {
                                for (n.s(); !(r = n.n()).done;) {
                                    var a = r.value,
                                        s = this.getPrintTitle(a.extend),
                                        i = {
                                            title: s,
                                            code: a.extend.imei,
                                            id: a.id
                                        };
                                    this.barcodeInfo.push(i)
                                }
                            } catch (o) {
                                n.e(o)
                            } finally {
                                n.f()
                            }
                            2 == e && setTimeout((function() {
                                t.$refs["print-qrcode-btn"].$el.click()
                            }), 500)
                        },
                        rejectReceive: function() {
                            var e = j(i.a.mark((function e(t) {
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return this.loading = !0, e.prev = 1, e.next = 4, Object(o["q"])({
                                                detail_id: t
                                            });
                                        case 4:
                                            this.loading = !1, this.$message.success("接收成功！"), this.getList(), e.next = 12;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e["catch"](1), this.loading = !1;
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [1, 9]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    }
                },
                D = S,
                $ = (r("3f35"), r("5d22")),
                I = Object($["a"])(D, n, a, !1, null, "49c83969", null);
            t["default"] = I.exports
        },
        e46f: function(e, t, r) {
            "use strict";

            function n() {
                var e = new Date,
                    t = "-",
                    r = e.getFullYear(),
                    n = e.getMonth() + 1,
                    a = e.getDate();
                n >= 1 && n <= 9 && (n = "0" + n), a >= 0 && a <= 9 && (a = "0" + a);
                var s = r + t + n + t + a;
                return s
            }

            function a() {
                var e = new Date,
                    t = e.getDay(),
                    r = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                    n = ["7", "1", "2", "3", "4", "5", "6"],
                    a = (new Date).getTime() - 864e5 * (Number(n[t]) - 1);
                return {
                    weekday: r[t],
                    weekdayNum: n[t],
                    weekTime: s(a)
                }
            }

            function s(e) {
                var t = new Date(e),
                    r = t.getFullYear() + "-",
                    n = (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-",
                    a = t.getDate() + "";
                return r + n + a
            }
            r.d(t, "b", (function() {
                return n
            })), r.d(t, "a", (function() {
                return a
            }))
        }
    }
]);