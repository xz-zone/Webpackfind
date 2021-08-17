(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-c773248e"], {
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
                return _
            })), r.d(t, "n", (function() {
                return p
            })), r.d(t, "a", (function() {
                return f
            })), r.d(t, "l", (function() {
                return h
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

            function _(e) {
                return Object(a["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: e
                })
            }

            function p(e) {
                return Object(a["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: e
                })
            }

            function f(e) {
                return Object(a["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: e
                })
            }

            function h(e) {
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
        "842a": function(e, t, r) {},
        bfb2: function(e, t, r) {
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
                            "start-placeholder": "质检时间",
                            "end-placeholder": "结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            editable: !1,
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
                            placeholder: "质检接收人"
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
                    })], 1)]), e._v(" "), r("el-col", {
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
                            disabled: e.isEditRes
                        },
                        on: {
                            click: function(t) {
                                return e.editCheckResTest()
                            }
                        }
                    }, [e._v("修改质检结果")]), e._v(" "), r("el-button", {
                        attrs: {
                            type: "primary",
                            disabled: e.transferBtn
                        },
                        on: {
                            click: function(t) {
                                e.showAssignDialog = !0
                            }
                        }
                    }, [e._v("创建流转单")]), e._v(" "), r("el-button", {
                        attrs: {
                            loading: e.printLoading,
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.print()
                            }
                        }
                    }, [e._v("导出报表")]), e._v(" "), r("el-button", {
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
                    }, [e._v("打印IMEI标签")])], 1), e._v(" "), r("div", [r("el-tag", {
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
                            "max-height": e.getClientHeight(330)
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
                            width: "160",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("div", [e._v(e._s(t.row.extend.product_name))]), e._v(" "), r("div", {
                                    staticClass: "text-value"
                                }, [e._v("IMEI：" + e._s(t.row.extend.imei))]), e._v(" "), t.row.extend && 6 == t.row.extend.brand_id ? r("div", {
                                    staticClass: "text-value"
                                }, [e._v("序列号：" + e._s(t.row.extend.sn))]) : e._e()]
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
                                return e._l(t.row.extend.sales_properties, (function(t, a) {
                                    return r("el-tag", {
                                        key: a,
                                        staticStyle: {
                                            "margin-right": "3px"
                                        },
                                        attrs: {
                                            size: "mini"
                                        }
                                    }, [e._v(e._s(t.pn_name) + "：" + e._s(t.pv_name))])
                                }))
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "价格",
                            "header-align": "center",
                            width: "130"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.extend.product_cost ? r("div", {
                                    staticClass: "text-value"
                                }, [e._v("成本价：" + e._s(t.row.extend.product_cost.cost))]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "供应商",
                            "header-align": "center",
                            width: "170"
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
                            width: "100"
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
                            label: "质检结果",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.self_quality_track ? r("div", {
                                    class: {
                                        "color-success": 1 == t.row.self_quality_track.quality_res, "color-danger": 0 == t.row.self_quality_track.quality_res
                                    }
                                }, [e._v("\n              " + e._s(1 == t.row.self_quality_track.quality_res ? "合格(优品)" : 2 == t.row.self_quality_track.quality_res ? "优质良品" : 3 == t.row.self_quality_track.quality_res ? "大良品" : "不合格") + "\n            ")]) : r("div", {
                                    staticClass: "color-warning"
                                }, [e._v("未质检")])]
                            }
                        }])
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
                            prop: "deal_at",
                            label: "质检过程",
                            "header-align": "center",
                            width: "180"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.self_quality_track && t.row.self_quality_track.result_data ? r("div", [15 != t.row.type_id ? r("div", {
                                    staticClass: "text-value"
                                }, [e._v("\n                保修情况：\n                "), t.row.self_quality_track && "26728" == t.row.self_quality_track.result_data.warranty_id ? r("span", [e._v("未激活")]) : e._e(), e._v(" "), t.row.self_quality_track && "4791" == t.row.self_quality_track.result_data.warranty_id ? r("span", [e._v("在保")]) : e._e(), e._v(" "), t.row.self_quality_track && "29" == t.row.self_quality_track.result_data.warranty_id ? r("span", [e._v("过保")]) : e._e()]) : e._e(), e._v(" "), r("div", {
                                    staticClass: "text-value"
                                }, [e._v("\n                是否移动定制版：" + e._s(1 == t.row.self_quality_track.result_data.is_cmcc_custom ? "是" : "否") + "\n              ")]), e._v(" "), r("div", {
                                    staticClass: "text-value"
                                }, [e._v("\n                是否更换电池：" + e._s(1 == t.row.self_quality_track.result_data.is_change_battery ? "是" : "否") + "\n              ")]), e._v(" "), r("div", {
                                    staticClass: "text-value"
                                }, [e._v("\n                保修时间：" + e._s(t.row.self_quality_track.result_data.guarantee_time) + "\n              ")]), e._v(" "), r("div", {
                                    staticClass: "text-value"
                                }, [e._v("\n                延保时间：" + e._s(t.row.self_quality_track.result_data.delay_time) + "\n              ")]), e._v(" "), r("div", {
                                    staticClass: "text-value"
                                }, [e._v("\n                是否清理摄像头：" + e._s(1 == t.row.self_quality_track.result_data.is_clean_camera ? "是" : "否") + "\n              ")]), e._v(" "), r("div", {
                                    staticClass: "text-value"
                                }, [e._v("\n                备注：" + e._s(t.row.self_quality_track.result_data.quality_remark) + "\n              ")])]) : t.row.extend.crawler_result ? r("div", [15 != t.row.type_id ? r("div", {
                                    staticClass: "text-value"
                                }, [e._v("\n                保修情况：\n                "), t.row.self_quality_track && "26728" == t.row.self_quality_track.result_data.warranty_id ? r("span", [e._v("未激活")]) : e._e(), e._v(" "), t.row.self_quality_track && "4791" == t.row.self_quality_track.result_data.warranty_id ? r("span", [e._v("在保")]) : e._e(), e._v(" "), t.row.self_quality_track && "29" == t.row.self_quality_track.result_data.warranty_id ? r("span", [e._v("过保")]) : e._e()]) : e._e(), e._v(" "), r("div", {
                                    staticClass: "text-value"
                                }, [e._v("\n                是否移动定制版：" + e._s(1 == t.row.extend.crawler_result.is_cmcc_custom ? "是" : "否") + "\n              ")]), e._v(" "), r("div", {
                                    staticClass: "text-value"
                                }, [e._v("\n                是否更换电池：" + e._s(1 == t.row.extend.crawler_result.is_change_battery ? "是" : "否") + "\n              ")]), e._v(" "), r("div", {
                                    staticClass: "text-value"
                                }, [e._v("保修时间：" + e._s(t.row.extend.crawler_result.guarantee_time))]), e._v(" "), r("div", {
                                    staticClass: "text-value"
                                }, [e._v("延保时间：" + e._s(t.row.extend.crawler_result.delay_time))]), e._v(" "), r("div", {
                                    staticClass: "text-value"
                                }, [e._v("\n                是否清理摄像头：" + e._s(1 == t.row.extend.is_clean_camera ? "是" : "否") + "\n              ")]), e._v(" "), r("div", {
                                    staticClass: "text-value"
                                }, [e._v("有无ID：" + e._s(t.row.extend.crawler_result.check_id_msg))]), e._v(" "), r("div", {
                                    staticClass: "text-value"
                                }, [e._v("备注：" + e._s(t.row.extend.crawler_result.quality_remark))])]) : e._e()]
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
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("el-tag", {
                                    attrs: {
                                        size: "mini",
                                        type: 0 == t.row.deal_status ? "danger" : 1 == t.row.deal_status ? "warning" : 2 == t.row.deal_status ? "success" : ""
                                    }
                                }, [e._v(e._s(t.row.deal_status_description))])]
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
                                        size: "mini",
                                        type: "info"
                                    }
                                }, [e._v(e._s(t.row.extend.status_description))]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "transfer_order_receive_user.real_name",
                            label: "质检接收人",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.transfer_order_receive_user ? r("div", [e._v(e._s(t.row.transfer_order_receive_user.real_name))]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "address",
                            label: "操作",
                            "header-align": "center",
                            width: "175",
                            fixed: "right"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("el-button", {
                                    staticStyle: {
                                        "margin-bottom": "5px"
                                    },
                                    attrs: {
                                        type: "primary",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return e.$router.push({
                                                name: "quality-scanner-test",
                                                query: {
                                                    id: t.row.transfer_order_id,
                                                    product_ids: t.row.product_id,
                                                    order_no: t.row.transfer_order.transfer_order_no,
                                                    type: "info"
                                                }
                                            })
                                        }
                                    }
                                }, [e._v("查看")]), e._v(" "), r("el-button", {
                                    staticStyle: {
                                        "margin-bottom": "5px"
                                    },
                                    attrs: {
                                        type: "info",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return e.openLogs(t.row.product_id)
                                        }
                                    }
                                }, [e._v("日志")]), e._v(" "), r("el-button", {
                                    attrs: {
                                        type: "danger",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return e.openErrDialog(t.row.extend.imei)
                                        }
                                    }
                                }, [e._v("错误上报")]), e._v(" "), 3 == t.row.deal_status ? r("el-button", {
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
                    }), e._v(" "), r("ErrorDialog", {
                        attrs: {
                            imei: e.cur_imei,
                            "show-dialog": e.showErrDialog,
                            "node-id": 3
                        },
                        on: {
                            "update:imei": function(t) {
                                e.cur_imei = t
                            },
                            "update:showDialog": function(t) {
                                e.showErrDialog = t
                            },
                            "update:show-dialog": function(t) {
                                e.showErrDialog = t
                            }
                        }
                    }), e._v(" "), r("Barcode", {
                        attrs: {
                            id: "barcode-container",
                            data: e.barcodeInfo
                        }
                    })], 1)
                },
                n = [],
                s = r("4838"),
                i = r.n(s),
                o = r("2934"),
                l = r("b775");

            function c(e) {
                return Object(l["a"])({
                    url: "/api/check/products_search",
                    method: "get",
                    params: e
                })
            }

            function u(e) {
                return Object(l["a"])({
                    url: "/api/check/transfer_store",
                    method: "post",
                    data: e
                })
            }
            var d = r("1504"),
                _ = r("c35b"),
                p = r("b7b8"),
                f = r("cd36"),
                h = r("c4a5"),
                v = r("6d8f"),
                m = r("2a67"),
                g = r("271c"),
                b = r("246e");

            function w(e, t) {
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

            function y(e, t) {
                if (e) {
                    if ("string" === typeof e) return k(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? k(e, t) : void 0
                }
            }

            function k(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                return a
            }

            function x(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(r), !0).forEach((function(t) {
                        j(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function j(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function q(e, t, r, a, n, s, i) {
                try {
                    var o = e[s](i),
                        l = o.value
                } catch (c) {
                    return void r(c)
                }
                o.done ? t(l) : Promise.resolve(l).then(a, n)
            }

            function C(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(a, n) {
                        var s = e.apply(t, r);

                        function i(e) {
                            q(s, a, n, i, o, "next", e)
                        }

                        function o(e) {
                            q(s, a, n, i, o, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var D = {
                    components: {
                        TypeBrandModel: d["a"],
                        UserList: _["a"],
                        AssignDialog: p["a"],
                        LogsDialog: f["a"],
                        ErrorDialog: h["a"],
                        Barcode: v["a"],
                        Areas: m["a"],
                        OperationTime: g["a"],
                        ImeiSearch: b["a"]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            search: {
                                deal_at: [],
                                business_type: null,
                                in_warehouse_type: null,
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
                                qc_code: null,
                                sizes: [10, 20, 30, 40, 50, 100, 300, 500],
                                page: 1,
                                per_page: 20
                            },
                            total: 0,
                            dict: {},
                            loading: !1,
                            isEditRes: !0,
                            transferBtn: !0,
                            selectRows: [],
                            showProps: !1,
                            propsForm: {
                                props_data: {}
                            },
                            propsData: {},
                            propsLoading: !1,
                            assignForm: {
                                to_node_id: 4
                            },
                            showAssignDialog: !1,
                            logProductId: null,
                            showLogDialog: !1,
                            printLoading: !1,
                            cur_imei: null,
                            showErrDialog: !1,
                            barcodeInfo: []
                        }
                    },
                    mounted: function() {
                        this.getSuppliers(), this.getList()
                    },
                    methods: {
                        print: function() {
                            var e = C(i.a.mark((function e() {
                                var t;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t = O(O({}, this.search), {}, {
                                                is_export: 1
                                            }), t.area_ids = t.area_ids.join(","), this.printLoading = !0, e.next = 6, c(t);
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
                            var e = C(i.a.mark((function e(t) {
                                var r, a;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t && (this.search.page = 1), r = JSON.parse(JSON.stringify(this.search)), r.area_ids = r.area_ids.join(","), this.loading = !0, e.next = 7, c(r);
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
                            var e = C(i.a.mark((function e() {
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
                                qc_code: null,
                                area_ids: [],
                                page: 1
                            }, this.getList()
                        },
                        handleSelectionChange: function(e) {
                            this.selectRows = e;
                            var t = null,
                                r = !1,
                                a = !1;
                            if (e.length > 0) {
                                var n, s = w(e);
                                try {
                                    for (s.s(); !(n = s.n()).done;) {
                                        var i = n.value;
                                        1 != i.deal_status && 1 == i.status && (a = !0), t ? t != i.transfer_order_id && (a = !0) : t = i.transfer_order_id, 1 != i.is_abnormal_report && 1 == i.deal_status || (r = !0)
                                    }
                                } catch (o) {
                                    s.e(o)
                                } finally {
                                    s.f()
                                }
                            } else a = !0, r = !0;
                            this.isEditRes = a, this.transferBtn = r
                        },
                        openPropDialg: function(e) {
                            if (e) {
                                var t, r = {
                                        product_ids: null,
                                        transfer_order_id: this.selectRows[0].transfer_order.transfer_order_no
                                    },
                                    a = [],
                                    n = w(this.selectRows);
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
                        handleAssingDone: function() {
                            var e = C(i.a.mark((function e() {
                                var t, r, a, n, s, o;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            e.prev = 0, t = [], r = w(this.selectRows);
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
                                            }, this.loading = !0, e.next = 8, u(s);
                                        case 8:
                                            o = e.sent, this.loading = !1, this.$router.push({
                                                name: "quality-flow-list",
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
                        editCheckRes: function() {
                            var e, t = [],
                                r = w(this.selectRows);
                            try {
                                for (r.s(); !(e = r.n()).done;) {
                                    var a = e.value;
                                    t.push(a.product_id)
                                }
                            } catch (n) {
                                r.e(n)
                            } finally {
                                r.f()
                            }
                            this.$router.push({
                                name: "quality-scanner",
                                query: {
                                    id: this.selectRows[0].transfer_order_id,
                                    product_ids: t.join(","),
                                    order_no: this.selectRows[0].transfer_order.transfer_order_no
                                }
                            })
                        },
                        editCheckResTest: function() {
                            var e, t = [],
                                r = w(this.selectRows);
                            try {
                                for (r.s(); !(e = r.n()).done;) {
                                    var a = e.value;
                                    t.push(a.product_id)
                                }
                            } catch (n) {
                                r.e(n)
                            } finally {
                                r.f()
                            }
                            this.$router.push({
                                name: "quality-scanner-test",
                                query: {
                                    id: this.selectRows[0].transfer_order_id,
                                    product_ids: t.join(","),
                                    order_no: this.selectRows[0].transfer_order.transfer_order_no
                                }
                            })
                        },
                        openLogs: function(e) {
                            console.log(e), this.showLogDialog = !0, this.logProductId = e
                        },
                        openErrDialog: function(e) {
                            this.cur_imei = e, this.showErrDialog = !0
                        },
                        printImei: function() {
                            this.barcodeInfo = [];
                            var e, t = w(this.selectRows);
                            try {
                                for (t.s(); !(e = t.n()).done;) {
                                    var r = e.value,
                                        a = this.getPrintTitle(r.extend, 1);
                                    console.log(a);
                                    var n = {
                                        title: a,
                                        code: r.extend.imei
                                    };
                                    this.barcodeInfo.push(n)
                                }
                            } catch (s) {
                                t.e(s)
                            } finally {
                                t.f()
                            }
                        },
                        rejectReceive: function() {
                            var e = C(i.a.mark((function e(t) {
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
                S = D,
                $ = (r("cb4d"), r("5d22")),
                L = Object($["a"])(S, a, n, !1, null, "557106be", null);
            t["default"] = L.exports
        },
        c0f9: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return n
            })), r.d(t, "a", (function() {
                return s
            })), r.d(t, "f", (function() {
                return i
            })), r.d(t, "d", (function() {
                return o
            })), r.d(t, "g", (function() {
                return l
            })), r.d(t, "i", (function() {
                return c
            })), r.d(t, "h", (function() {
                return u
            })), r.d(t, "j", (function() {
                return d
            })), r.d(t, "e", (function() {
                return _
            })), r.d(t, "c", (function() {
                return p
            }));
            var a = r("b775");

            function n(e) {
                return Object(a["a"])({
                    url: "/api/error_reports",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(a["a"])({
                    url: "/api/error_report/can_report_error_types",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(a["a"])({
                    url: "/api/error_report/store",
                    method: "post",
                    data: e
                })
            }

            function o(e) {
                return Object(a["a"])({
                    url: "/api/error_report/destroy",
                    method: "post",
                    data: e
                })
            }

            function l(e) {
                return Object(a["a"])({
                    url: "/api/check/error_report",
                    method: "post",
                    data: e
                })
            }

            function c(e) {
                return Object(a["a"])({
                    url: "/api/re_check/error_report",
                    method: "post",
                    data: e
                })
            }

            function u(e) {
                return Object(a["a"])({
                    url: "/api/edit/error_report",
                    method: "post",
                    data: e
                })
            }

            function d(e) {
                return Object(a["a"])({
                    url: "/api/up_shift/error_report",
                    method: "post",
                    data: e
                })
            }

            function _(e) {
                return Object(a["a"])({
                    url: "/api/error_report/force_destroy",
                    method: "post",
                    data: e
                })
            }

            function p(e) {
                return Object(a["a"])({
                    url: "/api/option/select",
                    method: "get",
                    params: e
                })
            }
        },
        cb4d: function(e, t, r) {
            "use strict";
            r("842a")
        }
    }
]);