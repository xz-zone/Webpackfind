(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-0fb3c451"], {
        "1e86": function(e, t, r) {
            "use strict";
            r("e9b3")
        },
        2934: function(e, t, r) {
            "use strict";
            r.d(t, "p", (function() {
                return n
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
                return m
            })), r.d(t, "o", (function() {
                return g
            })), r.d(t, "c", (function() {
                return b
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

            function s(e) {
                return Object(a["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(a["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
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

            function f(e) {
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

            function m(e) {
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

            function b(e) {
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
        7774: function(e, t, r) {
            "use strict";
            r.d(t, "c", (function() {
                return n
            })), r.d(t, "e", (function() {
                return s
            })), r.d(t, "b", (function() {
                return i
            })), r.d(t, "d", (function() {
                return o
            })), r.d(t, "f", (function() {
                return l
            })), r.d(t, "a", (function() {
                return c
            }));
            var a = r("b775");

            function n(e) {
                return Object(a["a"])({
                    url: "/api/input/products_search",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(a["a"])({
                    url: "/api/input/get_edit_params",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(a["a"])({
                    url: "/api/input/submit_edit_params",
                    method: "post",
                    data: e
                })
            }

            function o(e) {
                return Object(a["a"])({
                    url: "/api/input/get_edit_params_all",
                    method: "get",
                    params: e
                })
            }

            function l(e) {
                return Object(a["a"])({
                    url: "/api/input/submit_edit_params_all",
                    method: "post",
                    data: e
                })
            }

            function c(e) {
                return Object(a["a"])({
                    url: "/api/input/transfer_store",
                    method: "post",
                    data: e
                })
            }
        },
        90016: function(e, t, r) {
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
                            placeholder: "录入接收人"
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
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "供应商类型"
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
                            label: "代卖",
                            value: "1"
                        }
                    })], 1)], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "入库类型"
                        },
                        model: {
                            value: e.search.in_warehouse_type,
                            callback: function(t) {
                                e.$set(e.search, "in_warehouse_type", t)
                            },
                            expression: "search.in_warehouse_type"
                        }
                    }, [r("el-option", {
                        attrs: {
                            label: "代卖",
                            value: "0"
                        }
                    }), e._v(" "), r("el-option", {
                        attrs: {
                            label: "直采",
                            value: "1"
                        }
                    }), e._v(" "), r("el-option", {
                        attrs: {
                            label: "回收",
                            value: "2"
                        }
                    }), e._v(" "), r("el-option", {
                        attrs: {
                            label: "代卖转自营",
                            value: "3"
                        }
                    }), e._v(" "), r("el-option", {
                        attrs: {
                            label: "租赁退回",
                            value: "4"
                        }
                    })], 1)], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-input", {
                        ref: "qc_code",
                        attrs: {
                            placeholder: "质检码",
                            clearable: ""
                        },
                        nativeOn: {
                            keyup: function(t) {
                                if (!t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter")) return null;
                                e.getList(1), e.$refs["qc_code"].select()
                            }
                        },
                        model: {
                            value: e.search.qc_code,
                            callback: function(t) {
                                e.$set(e.search, "qc_code", t)
                            },
                            expression: "search.qc_code"
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
                            disabled: e.propsStatus
                        },
                        on: {
                            click: function(t) {
                                return e.openPropDialg()
                            }
                        }
                    }, [e._v("修改参数")]), e._v(" "), r("el-button", {
                        attrs: {
                            type: "primary",
                            disabled: e.allPropsStatus
                        },
                        on: {
                            click: function(t) {
                                return e.openPropDialg(1)
                            }
                        }
                    }, [e._v("修改全局")]), e._v(" "), r("el-button", {
                        attrs: {
                            type: "primary",
                            disabled: e.isFlow
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
                            "max-height": e.getClientHeight(340)
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
                            width: "65"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "商品",
                            width: "220",
                            "header-align": "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.extend ? r("div", [e._v(e._s(t.row.extend.product_name))]) : e._e(), e._v(" "), t.row.extend ? r("div", [e._v("IMEI：" + e._s(t.row.extend.imei))]) : e._e(), e._v(" "), t.row.extend && 6 == t.row.extend.brand_id ? r("div", [e._v("序列号：" + e._s(t.row.extend.sn))]) : e._e()]
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
                                return [t.row.extend ? r("div", e._l(t.row.extend.sales_properties, (function(t, a) {
                                    return r("el-tag", {
                                        key: a,
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
                            align: "center",
                            width: "150"
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
                                return [t.row.extend && t.row.extend.product_cost ? r("div", [e._v("采购单号：" + e._s(t.row.extend.product_cost.purchase_order_no))]) : e._e(), e._v(" "), r("div", [e._v("供应商类型：" + e._s(t.row.business_type_description))]), e._v(" "), r("div", [e._v("入库类型：" + e._s(t.row.in_warehouse_type_description))]), e._v(" "), t.row.extend && t.row.extend.product_cost && t.row.extend.product_cost.supplier_info ? r("div", [e._v("供应商：" + e._s(t.row.extend.product_cost.supplier_info.name))]) : e._e()]
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
                            width: "100"
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
                            label: "操作时间",
                            "header-align": "center",
                            width: "180"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("OperationTime", {
                                    model: {
                                        value: t.row.node_time,
                                        callback: function(r) {
                                            e.$set(t.row, "node_time", r)
                                        },
                                        expression: "scope.row.node_time"
                                    }
                                })]
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
                            width: "120"
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
                            label: "录入接收人",
                            align: "center",
                            width: "100"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "address",
                            label: "操作",
                            "header-align": "center",
                            width: "100",
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
                    })], 1), e._v(" "), r("el-dialog", {
                        attrs: {
                            title: "修改参数",
                            visible: e.showProps,
                            width: "500px"
                        },
                        on: {
                            "update:visible": function(t) {
                                e.showProps = t
                            }
                        }
                    }, [r("el-form", {
                        attrs: {
                            model: e.propsForm,
                            "label-width": "150px"
                        }
                    }, [r("el-form-item", {
                        attrs: {
                            label: "类目品牌："
                        }
                    }, [e._v(e._s(e.propsData.type_brand_name))]), e._v(" "), r("el-form-item", {
                        attrs: {
                            label: "型号："
                        }
                    }, [e._v(e._s(e.propsData.model_name))]), e._v(" "), r("el-form-item", {
                        attrs: {
                            label: "参数信息："
                        }
                    }, e._l(e.propsData.data, (function(t, a) {
                        return r("el-select", {
                            key: a,
                            staticClass: "props-select",
                            attrs: {
                                filterable: "",
                                clearable: "",
                                placeholder: "请选择" + t.pn_name
                            },
                            model: {
                                value: e.propsForm.props_data[t.pnid],
                                callback: function(r) {
                                    e.$set(e.propsForm.props_data, t.pnid, r)
                                },
                                expression: "propsForm.props_data[item.pnid]"
                            }
                        }, e._l(t.list, (function(e, t) {
                            return r("el-option", {
                                key: t,
                                attrs: {
                                    label: e.pvname,
                                    value: e.pvid
                                }
                            })
                        })), 1)
                    })), 1)], 1), e._v(" "), r("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [r("el-button", {
                        on: {
                            click: function(t) {
                                e.showProps = !1
                            }
                        }
                    }, [e._v("取 消")]), e._v(" "), r("el-button", {
                        attrs: {
                            loading: e.propsLoading,
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.editProps()
                            }
                        }
                    }, [e._v("确定")])], 1)], 1), e._v(" "), r("AssignDialog", {
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
                n = [],
                s = r("4838"),
                i = r.n(s),
                o = r("7774"),
                l = r("2934"),
                c = r("1504"),
                u = r("c35b"),
                d = r("b7b8"),
                p = r("cd36"),
                _ = r("e46f"),
                h = r("6d8f"),
                f = r("0463"),
                v = r("2a67"),
                m = r("271c"),
                g = r("246e");

            function b(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(r), !0).forEach((function(t) {
                        y(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function y(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function x(e, t, r, a, n, s, i) {
                try {
                    var o = e[s](i),
                        l = o.value
                } catch (c) {
                    return void r(c)
                }
                o.done ? t(l) : Promise.resolve(l).then(a, n)
            }

            function k(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(a, n) {
                        var s = e.apply(t, r);

                        function i(e) {
                            x(s, a, n, i, o, "next", e)
                        }

                        function o(e) {
                            x(s, a, n, i, o, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function O(e, t) {
                var r;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = j(e)) || t && e && "number" === typeof e.length) {
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

            function j(e, t) {
                if (e) {
                    if ("string" === typeof e) return $(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? $(e, t) : void 0
                }
            }

            function $(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                return a
            }
            var D = {
                    components: {
                        TypeBrandModel: c["a"],
                        UserList: u["a"],
                        AssignDialog: d["a"],
                        LogsDialog: p["a"],
                        Barcode: h["a"],
                        Qrcode: f["a"],
                        Areas: v["a"],
                        OperationTime: m["a"],
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
                                in_warehouse_type: null,
                                qc_code: null,
                                sizes: [10, 20, 30, 40, 50, 100, 300, 500],
                                page: 1,
                                per_page: 20
                            },
                            total: 0,
                            dict: {
                                supplier_type: []
                            },
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
                    computed: {
                        isFlow: function() {
                            var e = !1;
                            if (this.selectRows.length > 0) {
                                var t, r = O(this.selectRows);
                                try {
                                    for (r.s(); !(t = r.n()).done;) {
                                        var a = t.value;
                                        if (2 == a.deal_status) {
                                            e = !0;
                                            break
                                        }
                                    }
                                } catch (n) {
                                    r.e(n)
                                } finally {
                                    r.f()
                                }
                                return e
                            }
                            return !0
                        }
                    },
                    mounted: function() {
                        console.log(Object(_["b"])(), this.weekday), this.getSuppliers(), this.time && (this.$set(this.search, "deal_at", [this.time + " 00:00:00", this.time + " 23:59:59"]), this.$set(this.search, "receive_user_ids", [JSON.parse(localStorage.getItem("baseInfo")).id])), this.weekday && this.$set(this.search, "deal_at", [this.weekday + " 00:00:00", Object(_["b"])() + " 23:59:59"]), this.getList()
                    },
                    methods: {
                        initDict: function() {},
                        print: function() {
                            var e = k(i.a.mark((function e() {
                                var t;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t = w(w({}, this.search), {}, {
                                                is_export: 1
                                            }), t.area_ids = t.area_ids.join(","), this.printLoading = !0, e.next = 6, Object(o["c"])(t);
                                        case 6:
                                            return e.sent, this.printLoading = !1, e.next = 10, this.$confirm("导出成功，是否跳转至【报表进度查询】？", "提示", {
                                                center: !0,
                                                type: "success"
                                            });
                                        case 10:
                                            this.$router.push({
                                                name: "logs-list"
                                            }), e.next = 16;
                                            break;
                                        case 13:
                                            e.prev = 13, e.t0 = e["catch"](0), this.printLoading = !1;
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 13]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        getList: function() {
                            var e = k(i.a.mark((function e(t) {
                                var r, a;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t && (this.search.page = 1), this.loading = !0, r = JSON.parse(JSON.stringify(this.search)), r.area_ids = r.area_ids.join(","), e.next = 7, Object(o["c"])(r);
                                        case 7:
                                            a = e.sent, this.loading = !1, this.tableData = a.data.data, this.total = a.data.total, e.next = 16;
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
                            var e = k(i.a.mark((function e() {
                                var t;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(l["n"])();
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
                                qc_code: null,
                                area_ids: [],
                                page: 1
                            }, this.getList()
                        },
                        handleSelectionChange: function(e) {
                            this.selectRows = e;
                            var t = null,
                                r = null,
                                a = !1,
                                n = !1;
                            if (e.length > 0) {
                                var s, i = O(e);
                                try {
                                    for (i.s(); !(s = i.n()).done;) {
                                        var o = s.value;
                                        t ? t != o.extend.model_id && (a = !0) : t = o.extend.model_id, r ? r != o.transfer_order.transfer_order_no && (n = !0) : r = o.transfer_order.transfer_order_no
                                    }
                                } catch (l) {
                                    i.e(l)
                                } finally {
                                    i.f()
                                }
                            } else a = !0, n = !0;
                            this.propsStatus = a, this.allPropsStatus = n
                        },
                        getProps: function() {
                            var e = k(i.a.mark((function e() {
                                var t, r;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t = this.$loading({
                                                target: ".app-container .el-dialog"
                                            }), e.next = 3, Object(o["e"])({
                                                model_id: this.selectRows[0].model_id
                                            });
                                        case 3:
                                            r = e.sent, t.close(), this.propsData = r.data;
                                        case 6:
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
                        openPropDialg: function(e) {
                            if (this.propsForm = {
                                    props_data: {}
                                }, e) {
                                var t, r = {
                                        product_ids: null,
                                        transfer_order_id: this.selectRows[0].transfer_order.transfer_order_no
                                    },
                                    a = [],
                                    n = O(this.selectRows);
                                try {
                                    for (n.s(); !(t = n.n()).done;) {
                                        var s = t.value;
                                        a.push(s.product_id)
                                    }
                                } catch (i) {
                                    n.e(i)
                                } finally {
                                    n.f()
                                }
                                r.product_ids = a.join(","), this.$router.push({
                                    name: "type-in-search-edit",
                                    query: r
                                })
                            } else this.showProps = !0, this.getProps()
                        },
                        editProps: function() {
                            var e = k(i.a.mark((function e() {
                                var t, r, a, n, s, l;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            e.prev = 0, t = {
                                                product_ids: [],
                                                props_data: []
                                            }, r = O(this.selectRows);
                                            try {
                                                for (r.s(); !(a = r.n()).done;) n = a.value, t.product_ids.push(n.product_id)
                                            } catch (i) {
                                                r.e(i)
                                            } finally {
                                                r.f()
                                            }
                                            for (s in this.propsForm.props_data) l = this.propsForm.props_data[s], t.props_data.push({
                                                pnid: s,
                                                pvid: l
                                            });
                                            return this.propsLoading = !0, e.next = 8, Object(o["b"])(t);
                                        case 8:
                                            this.propsLoading = !1, this.showProps = !1, this.getList(), e.next = 16;
                                            break;
                                        case 13:
                                            e.prev = 13, e.t0 = e["catch"](0), this.propsLoading = !1;
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 13]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        handleAssingDone: function() {
                            var e = k(i.a.mark((function e() {
                                var t, r, a, n, s, l;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            e.prev = 0, t = [], r = O(this.selectRows);
                                            try {
                                                for (r.s(); !(a = r.n()).done;) n = a.value, t.push(n.product_id)
                                            } catch (i) {
                                                r.e(i)
                                            } finally {
                                                r.f()
                                            }
                                            return s = {
                                                product_ids: t,
                                                to_node_id: this.assignForm.to_node_id,
                                                by_assign_user_id: this.assignForm.by_assign_user_id
                                            }, this.loading = !0, e.next = 8, Object(o["a"])(s);
                                        case 8:
                                            l = e.sent, this.loading = !1, this.$router.push({
                                                name: "type-in-flow-list",
                                                query: {
                                                    transfer_order_no: l.data.transfer_order_no
                                                }
                                            }), this.$message.success(l.msg), e.next = 18;
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
                        openEditPrice: function() {
                            var e = k(i.a.mark((function e() {
                                var t, r, a, n, s, o, c;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.$prompt("请输入价格", "提示", {
                                                inputPattern: /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/,
                                                inputErrorMessage: "非法价格"
                                            });
                                        case 3:
                                            t = e.sent, r = t.value, console.log(r), a = [], n = O(this.selectRows);
                                            try {
                                                for (n.s(); !(s = n.n()).done;) o = s.value, a.push(o.product_id)
                                            } catch (i) {
                                                n.e(i)
                                            } finally {
                                                n.f()
                                            }
                                            return c = {
                                                product_ids: a,
                                                cost: r
                                            }, this.loading = !0, e.next = 13, Object(l["a"])(c);
                                        case 13:
                                            this.loading = !1, this.$message.success("操作成功！"), e.next = 20;
                                            break;
                                        case 17:
                                            e.prev = 17, e.t0 = e["catch"](0), this.loading = !1;
                                        case 20:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 17]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        printImei: function() {
                            var e = k(i.a.mark((function e(t) {
                                var r, a, n, s, o, l, c = this;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            this.barcodeInfo = [], r = [], a = O(this.selectRows);
                                            try {
                                                for (a.s(); !(n = a.n()).done;) s = n.value, r.push(s.extend.imei), o = this.getPrintTitle(s.extend), console.log("打印的title:", o), l = {
                                                    title: o,
                                                    code: s.extend.imei,
                                                    id: s.extend.imei
                                                }, this.barcodeInfo.push(l)
                                            } catch (i) {
                                                a.e(i)
                                            } finally {
                                                a.f()
                                            }
                                            2 == t && setTimeout((function() {
                                                c.$refs["print-qrcode-btn"].$el.click()
                                            }), 450 + 50 * this.barcodeInfo.length);
                                        case 5:
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
                        rejectReceive: function() {
                            var e = k(i.a.mark((function e(t) {
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return this.loading = !0, e.prev = 1, e.next = 4, Object(l["q"])({
                                                detail_id: t
                                            });
                                        case 4:
                                            e.sent, this.loading = !1, this.$message.success("接收成功！"), this.getList(), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e["catch"](1), this.loading = !1;
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [1, 10]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    }
                },
                S = D,
                P = (r("1e86"), r("5d22")),
                L = Object(P["a"])(S, a, n, !1, null, "453a000f", null);
            t["default"] = L.exports
        },
        e46f: function(e, t, r) {
            "use strict";

            function a() {
                var e = new Date,
                    t = "-",
                    r = e.getFullYear(),
                    a = e.getMonth() + 1,
                    n = e.getDate();
                a >= 1 && a <= 9 && (a = "0" + a), n >= 0 && n <= 9 && (n = "0" + n);
                var s = r + t + a + t + n;
                return s
            }

            function n() {
                var e = new Date,
                    t = e.getDay(),
                    r = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                    a = ["7", "1", "2", "3", "4", "5", "6"],
                    n = (new Date).getTime() - 864e5 * (Number(a[t]) - 1);
                return {
                    weekday: r[t],
                    weekdayNum: a[t],
                    weekTime: s(n)
                }
            }

            function s(e) {
                var t = new Date(e),
                    r = t.getFullYear() + "-",
                    a = (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-",
                    n = t.getDate() + "";
                return r + a + n
            }
            r.d(t, "b", (function() {
                return a
            })), r.d(t, "a", (function() {
                return n
            }))
        },
        e9b3: function(e, t, r) {}
    }
]);