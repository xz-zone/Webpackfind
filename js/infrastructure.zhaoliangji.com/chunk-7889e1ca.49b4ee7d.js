(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-7889e1ca"], {
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
                return h
            })), r.d(e, "l", (function() {
                return f
            })), r.d(e, "q", (function() {
                return m
            })), r.d(e, "f", (function() {
                return v
            })), r.d(e, "o", (function() {
                return g
            })), r.d(e, "c", (function() {
                return b
            })), r.d(e, "e", (function() {
                return w
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

            function h(t) {
                return Object(n["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: t
                })
            }

            function f(t) {
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

            function w(t) {
                return Object(n["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: t
                })
            }
        },
        3566: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return a
            })), r.d(e, "c", (function() {
                return o
            })), r.d(e, "b", (function() {
                return i
            }));
            var n = r("b775");

            function a(t) {
                return Object(n["a"])({
                    url: "/api/re_check/abnormal_report_scan_tag",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/re_check/batch_abnormal_report",
                    method: "post",
                    data: t
                })
            }

            function i(t) {
                return Object(n["a"])({
                    url: "/api/re_check/abnormal_report",
                    method: "post",
                    data: t
                })
            }
        },
        "595c": function(t, e, r) {
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
                        attrs: {
                            span: 8
                        }
                    }, [r("ImeiSearch", {
                        attrs: {
                            focus: !0,
                            "search-type": t.searchType,
                            placeholder: "扫描流转单号 / 二维码 / 质检码"
                        },
                        on: {
                            "update:searchType": function(e) {
                                t.searchType = e
                            },
                            "update:search-type": function(e) {
                                t.searchType = e
                            },
                            done: function(e) {
                                return t.getDetail()
                            }
                        },
                        model: {
                            value: t.search.transfer_order_no,
                            callback: function(e) {
                                t.$set(t.search, "transfer_order_no", e)
                            },
                            expression: "search.transfer_order_no"
                        }
                    })], 1), t._v(" "), r("el-col", {
                        attrs: {
                            span: 8
                        }
                    }, [r("el-alert", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: void 0 != t.detail.status,
                            expression: "detail.status != undefined"
                        }],
                        staticClass: "status-tip",
                        attrs: {
                            title: t.detail.receive_status_description,
                            type: 0 == t.detail.receive_status ? "warning" : (t.detail.receive_status, "success"),
                            "show-icon": "",
                            closable: !1
                        }
                    })], 1)], 1), t._v(" "), t.detail.id ? r("el-row", {
                        staticClass: "header-search"
                    }, [r("el-col", [r("el-alert", {
                        attrs: {
                            type: "success",
                            closable: !1
                        }
                    }, [r("el-row", [r("el-col", {
                        staticClass: "header-info",
                        attrs: {
                            span: 24
                        }
                    }, [r("div", [t._v("\n              当前流转单号：\n              "), r("span", [t._v(t._s(t.detail.transfer_order_no))])]), t._v(" "), r("div", [t._v("\n              总数量：\n              "), r("span", [t._v(t._s(t.detail.total_num))])])])], 1)], 1)], 1)], 1) : t._e(), t._v(" "), r("el-row", {
                        staticClass: "body-list"
                    }, [r("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [t.tableData.length > 0 ? r("zlj-quality", {
                        ref: "zljQuality",
                        attrs: {
                            data: t.tableData,
                            source: t.tableData[0].source,
                            "source-order-no": t.tableData[0].purchase_order_no,
                            "show-save-btn": 1 != t.searchType,
                            "selected-rows": t.selectRows,
                            "no-edit": !1
                        },
                        on: {
                            "update:selectedRows": function(e) {
                                t.selectRows = e
                            },
                            "update:selected-rows": function(e) {
                                t.selectRows = e
                            },
                            done: function(e) {
                                return t.onlySave()
                            }
                        }
                    }, [r("template", {
                        slot: "header"
                    }, [r("el-table-column", {
                        attrs: {
                            prop: "imei",
                            label: "IMEI",
                            width: "80",
                            align: "center",
                            fixed: ""
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "商品名称",
                            align: "center",
                            fixed: "",
                            width: "150"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [r("el-link", {
                                    attrs: {
                                        underline: !1
                                    },
                                    on: {
                                        click: function(r) {
                                            return t.openImgView(e.row.image_url)
                                        }
                                    }
                                }, [t._v(t._s(e.row.product_name))]), t._v(" "), 1 == e.row.is_imei_change ? r("div", {
                                    staticStyle: {
                                        color: "red"
                                    }
                                }, [t._v("（更换过序列号）")]) : t._e()]
                            }
                        }], null, !1, 2102950276)
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "参数",
                            "header-align": "center",
                            fixed: "",
                            width: "190"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return t._l(e.row.sales_properties, (function(e) {
                                    return r("el-tag", {
                                        key: e.pn_id,
                                        staticStyle: {
                                            "margin-left": "2px"
                                        },
                                        attrs: {
                                            size: "mini"
                                        }
                                    }, [t._v(t._s(e.pn_name) + "：" + t._s(e.pv_name))])
                                }))
                            }
                        }], null, !1, 2658823725)
                    }), t._v(" "), t.tableData[0].qc_code ? r("el-table-column", {
                        attrs: {
                            label: "质检码",
                            prop: "qc_code",
                            align: "center",
                            width: "100"
                        }
                    }) : t._e(), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "历史记录",
                            "header-align": "center",
                            width: "240"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [r("div", {
                                    staticStyle: {
                                        "max-height": "200px",
                                        overflow: "auto"
                                    }
                                }, [r("el-timeline", {
                                    attrs: {
                                        reverse: !0
                                    }
                                }, t._l(e.row.quality_tracks, (function(e, n) {
                                    return r("el-timeline-item", {
                                        key: n,
                                        attrs: {
                                            timestamp: e.check_date,
                                            placement: "top"
                                        }
                                    }, [t._v("\n                    " + t._s(e.quality_name) + "：" + t._s(e.quality_remark) + "\n                  ")])
                                })), 1), t._v(" "), r("el-button", {
                                    staticStyle: {
                                        "margin-left": "40px"
                                    },
                                    attrs: {
                                        type: "primary",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return t.handleReportClick(e.row.imei)
                                        }
                                    }
                                }, [t._v("查看历史报告")])], 1)]
                            }
                        }], null, !1, 1363317091)
                    })], 1), t._v(" "), t.tableData.length > 0 ? r("template", {
                        slot: "btn"
                    }, [1 == t.searchType ? r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.saveAndCreate(!0)
                            }
                        }
                    }, [t._v("保存并自动流转")]) : t._e(), t._v(" "), r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.saveAndCreate(!1)
                            }
                        }
                    }, [t._v("创建流转单")]), t._v(" "), r("el-button", {
                        attrs: {
                            type: "danger",
                            disabled: 1 != t.selectRows.length
                        },
                        on: {
                            click: function(e) {
                                return t.saveException()
                            }
                        }
                    }, [t._v("异常登记")]), t._v(" "), r("el-button", {
                        attrs: {
                            type: "danger",
                            disabled: 1 != t.selectRows.length
                        },
                        on: {
                            click: function(e) {
                                t.showErrDialog = !0
                            }
                        }
                    }, [t._v("错误上报")])], 1) : t._e()], 2) : t._e()], 1)], 1), t._v(" "), r("ExceptionDialog", {
                        attrs: {
                            "show-dialog": t.showExceptionDialog
                        },
                        on: {
                            "update:showDialog": function(e) {
                                t.showExceptionDialog = e
                            },
                            "update:show-dialog": function(e) {
                                t.showExceptionDialog = e
                            },
                            done: t.handleExceptionDone
                        },
                        model: {
                            value: t.exceptionFrom.imei,
                            callback: function(e) {
                                t.$set(t.exceptionFrom, "imei", e)
                            },
                            expression: "exceptionFrom.imei"
                        }
                    }), t._v(" "), r("AssignDialog", {
                        attrs: {
                            "show-dialog": t.showAssignDialog,
                            "require-user": !1
                        },
                        on: {
                            "update:showDialog": function(e) {
                                t.showAssignDialog = e
                            },
                            "update:show-dialog": function(e) {
                                t.showAssignDialog = e
                            },
                            done: t.handleAssingDone
                        },
                        model: {
                            value: t.assignForm,
                            callback: function(e) {
                                t.assignForm = e
                            },
                            expression: "assignForm"
                        }
                    }), t._v(" "), r("ErrorDialog", {
                        attrs: {
                            imei: t.selectRows.length > 0 ? t.selectRows[0].imei : "",
                            "show-dialog": t.showErrDialog,
                            "node-id": 4
                        },
                        on: {
                            "update:showDialog": function(e) {
                                t.showErrDialog = e
                            },
                            "update:show-dialog": function(e) {
                                t.showErrDialog = e
                            }
                        }
                    }), t._v(" "), r("el-dialog", {
                        attrs: {
                            visible: t.showReport,
                            width: "1100px"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.showReport = e
                            }
                        }
                    }, [r("div", {
                        staticClass: "quality-report",
                        attrs: {
                            id: "report"
                        }
                    }, [r("el-row", {
                        staticClass: "report-title"
                    }, [r("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [t._v("质检报告")])], 1), t._v(" "), r("el-row", {
                        staticClass: "report-nav"
                    }, [r("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [t._v("基础信息")])], 1), t._v(" "), r("el-row", {
                        staticClass: "report-info"
                    }, [r("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [t._v("IMEI：" + t._s(t.reportRow.imei))])], 1), t._v(" "), r("el-row", {
                        staticClass: "report-info"
                    }, t._l(t.reportRow.attr_list, (function(e, n) {
                        return r("el-col", {
                            key: n,
                            attrs: {
                                span: 6
                            }
                        }, [t._v(t._s(e))])
                    })), 1), t._v(" "), r("el-row", {
                        staticClass: "report-info"
                    }, [r("el-col", {
                        attrs: {
                            span: 6
                        }
                    }, [t._v("内存：" + t._s(t.reportRow.memory))]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 6
                        }
                    }, [t._v("成色：" + t._s(t.reportRow.condition_name))]), t._v(" "), r("el-col", {
                        attrs: {
                            span: 12
                        }
                    }, [t._v("网络：" + t._s(t.reportRow.network_name))])], 1), t._v(" "), r("el-row", {
                        staticClass: "report-nav"
                    }, [r("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [t._v("质检结果")])], 1), t._v(" "), t.reportRow.item_list ? r("table", {
                        staticClass: "report-table",
                        attrs: {
                            border: "1",
                            colspan: "false"
                        }
                    }, [r("thead", [r("tr", [r("th", [t._v("质检项")]), t._v(" "), r("th", [t._v("质检结果")]), t._v(" "), r("th", [t._v("质检人")]), t._v(" "), r("th", [t._v("质检项")]), t._v(" "), r("th", [t._v("质检结果")]), t._v(" "), r("th", [t._v("质检人")])])]), t._v(" "), r("tbody", t._l(t.reportRow.item_list.length, (function(e) {
                        return r("tr", {
                            key: e
                        }, [e % 2 == 1 ? [r("td", [t._v(t._s(t.reportRow.item_list[e - 1].name))]), t._v(" "), r("td", [r("i", {
                            class: {
                                "success el-icon-success": 1 == t.reportRow.item_list[e - 1].result, "error el-icon-error": 0 == t.reportRow.item_list[e - 1].result
                            }
                        }), t._v(" "), t.reportRow.item_list[e - 1].exception_reason ? r("div", {
                            staticClass: "error",
                            staticStyle: {
                                "font-size": "12px"
                            }
                        }, [t._v("\n                  （" + t._s(t.reportRow.item_list[e - 1].exception_reason) + "）\n                ")]) : t._e()]), t._v(" "), r("td", [t._v(t._s(t.reportRow.item_list[e - 1].quality_user_name))]), t._v(" "), e != t.reportRow.item_list.length ? r("td", [t._v(t._s(t.reportRow.item_list[e].name))]) : t._e(), t._v(" "), e != t.reportRow.item_list.length ? r("td", [r("i", {
                            class: {
                                "success el-icon-success": 1 == t.reportRow.item_list[e].result, "error el-icon-error": 0 == t.reportRow.item_list[e].result
                            }
                        }), t._v(" "), t.reportRow.item_list[e].exception_reason ? r("div", {
                            staticClass: "error",
                            staticStyle: {
                                "font-size": "12px"
                            }
                        }, [t._v("\n                  （" + t._s(t.reportRow.item_list[e].exception_reason) + "）\n                ")]) : t._e()]) : t._e(), t._v(" "), r("td", [t._v(t._s(t.reportRow.item_list[e - 1].quality_user_name))])] : t._e()], 2)
                    })), 0)]) : t._e()], 1), t._v(" "), r("span", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [r("el-button", {
                        directives: [{
                            name: "print",
                            rawName: "v-print",
                            value: "#report",
                            expression: "'#report'"
                        }],
                        attrs: {
                            type: "primary"
                        }
                    }, [t._v("打 印")])], 1)])], 1)
                },
                a = [],
                o = r("4838"),
                i = r.n(o),
                s = r("a084"),
                c = r("98de"),
                u = r("b7b8"),
                l = function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return t.productData ? r("el-dialog", {
                        staticClass: "exception-dialog",
                        attrs: {
                            title: "异常登记",
                            visible: t.showException,
                            width: "30%"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.showException = e
                            },
                            close: t.handleCloes
                        }
                    }, [r("el-form", {
                        attrs: {
                            model: t.exceptionForm,
                            "label-width": "150px"
                        }
                    }, [r("el-form-item", {
                        attrs: {
                            label: "类目品牌："
                        }
                    }, [t.productData.type ? r("div", [t._v(t._s(t.productData.type.name) + " " + t._s(t.productData.brand.name))]) : t._e()]), t._v(" "), r("el-form-item", {
                        attrs: {
                            label: "型号："
                        }
                    }, [t.productData.model ? r("div", [t._v(t._s(t.productData.model.name))]) : t._e()]), t._v(" "), r("el-form-item", {
                        attrs: {
                            label: "机器码："
                        }
                    }, [t._v(t._s(t.productData.imei))]), t._v(" "), r("el-form-item", {
                        attrs: {
                            label: "数量："
                        }
                    }, [t._v("1")]), t._v(" "), r("el-form-item", {
                        attrs: {
                            label: "成本："
                        }
                    }, [t.productData.product_cost ? r("div", [t._v(t._s(t.productData.product_cost.cost))]) : t._e()]), t._v(" "), r("el-form-item", {
                        attrs: {
                            label: "故障类型："
                        }
                    }, [r("ErrorType", {
                        model: {
                            value: t.exceptionForm.error_type_ids,
                            callback: function(e) {
                                t.$set(t.exceptionForm, "error_type_ids", e)
                            },
                            expression: "exceptionForm.error_type_ids"
                        }
                    })], 1), t._v(" "), r("el-form-item", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !1,
                            expression: "false"
                        }],
                        attrs: {
                            label: "异常原因："
                        }
                    }, [r("ExceptionReason", {
                        attrs: {
                            mode: "check"
                        },
                        model: {
                            value: t.exceptionForm.reason,
                            callback: function(e) {
                                t.$set(t.exceptionForm, "reason", e)
                            },
                            expression: "exceptionForm.reason"
                        }
                    })], 1), t._v(" "), r("el-form-item", {
                        attrs: {
                            label: "异常描述："
                        }
                    }, [r("el-input", {
                        attrs: {
                            type: "textarea",
                            rows: "4",
                            placeholder: "请输入异常描述"
                        },
                        model: {
                            value: t.exceptionForm.remark,
                            callback: function(e) {
                                t.$set(t.exceptionForm, "remark", e)
                            },
                            expression: "exceptionForm.remark"
                        }
                    })], 1)], 1), t._v(" "), r("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [r("el-button", {
                        on: {
                            click: function(e) {
                                return t.$emit("update:showDialog", !1)
                            }
                        }
                    }, [t._v("取 消")]), t._v(" "), r("el-button", {
                        attrs: {
                            disabled: t.addStatus,
                            loading: t.exceptionLoading,
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.addException()
                            }
                        }
                    }, [t._v("确定")]), t._v(" "), r("el-button", {
                        attrs: {
                            disabled: t.addStatus,
                            loading: t.exceptionLoading,
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.addException(1)
                            }
                        }
                    }, [t._v("确定并打印异常单号")])], 1), t._v(" "), r("Barcode", {
                        attrs: {
                            id: "barcode-container",
                            data: t.barcodeInfo,
                            line: 4
                        }
                    }), t._v(" "), r("el-button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !1,
                            expression: "false"
                        }, {
                            name: "print",
                            rawName: "v-print",
                            value: "#barcode-container",
                            expression: "'#barcode-container'"
                        }],
                        ref: "printBtn"
                    })], 1) : t._e()
                },
                d = [],
                p = r("3566"),
                _ = r("c058"),
                h = r("3067"),
                f = r("6d8f");

            function m(t, e, r, n, a, o, i) {
                try {
                    var s = t[o](i),
                        c = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, a)
            }

            function v(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = t.apply(e, r);

                        function i(t) {
                            m(o, n, a, i, s, "next", t)
                        }

                        function s(t) {
                            m(o, n, a, i, s, "throw", t)
                        }
                        i(void 0)
                    }))
                }
            }
            var g = {
                    name: "ExceptionDialog",
                    props: {
                        value: [String],
                        showDialog: [Boolean]
                    },
                    components: {
                        ExceptionReason: _["a"],
                        ErrorType: h["a"],
                        Barcode: f["a"]
                    },
                    data: function() {
                        return {
                            imei: this.value,
                            showException: this.showDialog,
                            productData: {},
                            order: {},
                            exceptionForm: {
                                reason: null,
                                remark: null,
                                error_type_ids: []
                            },
                            exceptionLoading: !1,
                            addStatus: !0,
                            barcodeInfo: []
                        }
                    },
                    watch: {
                        showDialog: function(t) {
                            this.showException = this.showDialog, t && this.imei && this.getProductByImei()
                        },
                        value: function(t) {
                            this.imei = t, this.getProductByImei()
                        }
                    },
                    mounted: function() {
                        console.log("imei：", this.imei), this.imei
                    },
                    methods: {
                        addException: function() {
                            var t = v(i.a.mark((function t(e) {
                                var r, n, a, o = this;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, r = {
                                                transfer_order_id: this.order.id,
                                                products: [{
                                                    product_id: this.productData.product_id,
                                                    type_id: this.productData.type_id,
                                                    brand_id: this.productData.brand_id,
                                                    model_id: this.productData.model_id,
                                                    cost_price: this.productData.product_cost.cost,
                                                    num: 1,
                                                    reason: this.exceptionForm.reason,
                                                    remark: this.exceptionForm.remark,
                                                    error_type_ids: this.exceptionForm.error_type_ids
                                                }]
                                            }, this.exceptionLoading = !0, t.next = 5, Object(p["b"])(r);
                                        case 5:
                                            n = t.sent, this.exceptionLoading = !1, this.$emit("update:showDialog", !1), this.$message.success("上报成功！"), e ? (a = {
                                                code: n.data.abnormal_report_order_no,
                                                title: "".concat(this.order.to_node.name, " 异常单（1台）<br/>").concat((new Date).toLocaleString(), "</br>").concat(this.productData.suppiler_name.name)
                                            }, this.barcodeInfo.push(a), setTimeout((function() {
                                                o.$refs["printBtn"].$el.click(), o.$emit("done", {})
                                            }), 500)) : this.$emit("done", {}), t.next = 16;
                                            break;
                                        case 12:
                                            t.prev = 12, t.t0 = t["catch"](0), console.log(t.t0), this.exceptionLoading = !1;
                                        case 16:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 12]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        getProductByImei: function() {
                            var t = v(i.a.mark((function t() {
                                var e, r;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e = this.$loading({
                                                target: ".exception-dialog"
                                            }), t.prev = 1, t.next = 4, Object(p["a"])({
                                                imei: this.imei
                                            });
                                        case 4:
                                            r = t.sent, e.close(), this.productData = r.data.detail, this.order = r.data.transfer_order, this.addStatus = !1, t.next = 15;
                                            break;
                                        case 11:
                                            t.prev = 11, t.t0 = t["catch"](1), e.close(), this.addStatus = !0;
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [1, 11]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        handleCloes: function() {
                            this.$emit("update:showDialog", !1)
                        }
                    }
                },
                b = g,
                w = r("5d22"),
                x = Object(w["a"])(b, l, d, !1, null, "5084bf94", null),
                y = x.exports,
                k = r("c4a5"),
                D = r("246e");

            function j(t, e, r, n, a, o, i) {
                try {
                    var s = t[o](i),
                        c = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, a)
            }

            function O(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = t.apply(e, r);

                        function i(t) {
                            j(o, n, a, i, s, "next", t)
                        }

                        function s(t) {
                            j(o, n, a, i, s, "throw", t)
                        }
                        i(void 0)
                    }))
                }
            }
            var R = {
                    components: {
                        AssignDialog: u["a"],
                        ExceptionDialog: y,
                        ErrorDialog: k["a"],
                        ImeiSearch: D["a"]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            search: {
                                transfer_order_no: null
                            },
                            loading: !1,
                            selectRows: [],
                            detail: {},
                            saveArr: [],
                            exceptionFrom: {
                                imei: null
                            },
                            showExceptionDialog: !1,
                            saveDisabled: !0,
                            isFlow: !1,
                            assignForm: {
                                to_node_id: 5
                            },
                            showAssignDialog: !1,
                            showErrDialog: !1,
                            notebookChecks: [],
                            searchType: 0,
                            imeiInfo: null,
                            showReport: !1,
                            reportRow: {}
                        }
                    },
                    mounted: function() {
                        this.$route.query.no && (this.search.transfer_order_no = this.$route.query.no, this.getDetail())
                    },
                    methods: {
                        getDetail: function() {
                            var t = O(i.a.mark((function t() {
                                var e, r;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (e = this.search.transfer_order_no ? this.search.transfer_order_no : this.detail.transfer_order_no, t.prev = 1, "L" != this.search.transfer_order_no.substr(0, 1)) {
                                                t.next = 13;
                                                break
                                            }
                                            return this.loading = !0, t.next = 6, Object(s["g"])({
                                                transfer_order_no: e
                                            });
                                        case 6:
                                            r = t.sent, this.loading = !1, this.detail = r.data, this.getList(), this.search.transfer_order_no = null, t.next = 14;
                                            break;
                                        case 13:
                                            1 == this.searchType ? this.scanReceiveByImei() : this.loading = !1;
                                        case 14:
                                            t.next = 21;
                                            break;
                                        case 16:
                                            t.prev = 16, t.t0 = t["catch"](1), this.loading = !1, this.getList(), this.search.transfer_order_no = null;
                                        case 21:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [1, 16]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        scanReceiveByImei: function() {
                            var t = O(i.a.mark((function t() {
                                var e, r;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(s["f"])({
                                                imei: this.search.transfer_order_no
                                            });
                                        case 2:
                                            return e = t.sent, this.detail = e.data, t.next = 6, Object(s["e"])({
                                                transfer_order_id: e.data.id,
                                                imei: this.search.transfer_order_no
                                            });
                                        case 6:
                                            r = t.sent, this.getList(r), this.loading = !1, this.search.transfer_order_no = null;
                                        case 10:
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
                            var t = O(i.a.mark((function t(e) {
                                var r;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0, this.loading = !0, r = null, !e) {
                                                t.next = 7;
                                                break
                                            }
                                            r = e, t.next = 10;
                                            break;
                                        case 7:
                                            return t.next = 9, Object(s["b"])({
                                                transfer_order_id: this.detail.id
                                            });
                                        case 9:
                                            r = t.sent;
                                        case 10:
                                            this.loading = !1, this.tableData = r.data, t.next = 19;
                                            break;
                                        case 14:
                                            t.prev = 14, t.t0 = t["catch"](0), console.log(t.t0), this.tableData = [], this.loading = !1;
                                        case 19:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 14]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        saveException: function() {
                            var t = this;
                            this.showExceptionDialog = !0, this.$nextTick((function() {
                                t.$set(t.exceptionFrom, "imei", t.selectRows[0].imei)
                            }))
                        },
                        handleExceptionDone: function() {
                            var t = O(i.a.mark((function t() {
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            this.showExceptionDialog = !1, this.getDetail();
                                        case 2:
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
                        saveAndCreate: function(t) {
                            t ? this.handleAssingDone() : this.showAssignDialog = !0, this.isFlow = t
                        },
                        handleAssingDone: function() {
                            var t = O(i.a.mark((function t() {
                                var e, r, n, a;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, e = [], r = this.$refs["zljQuality"].getSaveData(), e = r.map((function(t) {
                                                return t.product_id
                                            })), n = {
                                                product_ids: e
                                            }, this.isFlow ? n.is_auto_next_transfer = 1 : (n.to_node_id = this.assignForm.to_node_id, n.by_assign_user_id = this.assignForm.by_assign_user_id), console.log(n), this.loading = !0, t.next = 10, Object(s["a"])(n);
                                        case 10:
                                            a = t.sent, this.loading = !1, this.$message.success(a.msg), this.$router.push({
                                                name: "recheck-flow-list",
                                                query: {
                                                    transfer_order_no: a.data.transfer_order_no,
                                                    print: 1
                                                }
                                            }), t.next = 19;
                                            break;
                                        case 16:
                                            t.prev = 16, t.t0 = t["catch"](0), this.loading = !1;
                                        case 19:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 16]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        onlySave: function() {
                            var t = O(i.a.mark((function t() {
                                var e, r;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, this.$refs["zljQuality"].save(!1);
                                        case 3:
                                            return e = {
                                                transfer_order_id: this.detail.id,
                                                result: this.$refs["zljQuality"].getSaveData()
                                            }, e = JSON.parse(JSON.stringify(e)), console.log(e), this.loading = !0, t.next = 9, Object(s["d"])(e);
                                        case 9:
                                            r = t.sent, this.loading = !1, this.$message.success(r.msg), t.next = 18;
                                            break;
                                        case 14:
                                            t.prev = 14, t.t0 = t["catch"](0), console.log(t.t0), this.loading = !1;
                                        case 18:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 14]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        handleReportClick: function() {
                            var t = O(i.a.mark((function t(e) {
                                var r, n = this;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(c["g"])({
                                                imei: e
                                            });
                                        case 2:
                                            r = t.sent, this.reportRow = r.data, this.$nextTick((function() {
                                                r.data.item_list.length > 0 ? n.showReport = !0 : n.$message.warning("没有历史质检报告")
                                            }));
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }
                },
                E = R,
                F = (r("f6c6"), Object(w["a"])(E, n, a, !1, null, "780ac884", null));
            e["default"] = F.exports
        },
        "98de": function(t, e, r) {
            "use strict";
            r.d(e, "f", (function() {
                return a
            })), r.d(e, "k", (function() {
                return o
            })), r.d(e, "a", (function() {
                return i
            })), r.d(e, "b", (function() {
                return s
            })), r.d(e, "e", (function() {
                return c
            })), r.d(e, "c", (function() {
                return u
            })), r.d(e, "d", (function() {
                return l
            })), r.d(e, "j", (function() {
                return d
            })), r.d(e, "i", (function() {
                return p
            })), r.d(e, "h", (function() {
                return _
            })), r.d(e, "g", (function() {
                return h
            }));
            var n = r("b775");

            function a(t) {
                return Object(n["a"])({
                    url: "/api/check/scan_info",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/check/scan_receive",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(n["a"])({
                    url: "/api/check/save",
                    method: "post",
                    data: t
                })
            }

            function s(t) {
                return Object(n["a"])({
                    url: "/api/check/save_and_transfer_store",
                    method: "post",
                    data: t
                })
            }

            function c(t) {
                return Object(n["a"])({
                    url: "/api/check/edit_check_view",
                    method: "post",
                    data: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "/api/check/edit_check",
                    method: "post",
                    data: t
                })
            }

            function l(t) {
                return Object(n["a"])({
                    url: "/api/check_error_types",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(n["a"])({
                    url: "api/check/scan_receive_for_imei",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(n["a"])({
                    url: "api/check/scan_info_for_imei",
                    method: "get",
                    params: t
                })
            }

            function _(t) {
                return Object(n["a"])({
                    url: "api/check/save_and_auto_switch",
                    method: "post",
                    data: t
                })
            }

            function h(t) {
                return Object(n["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality_data/history_report",
                    method: "get",
                    params: t
                })
            }
        },
        a084: function(t, e, r) {
            "use strict";
            r.d(e, "g", (function() {
                return a
            })), r.d(e, "b", (function() {
                return o
            })), r.d(e, "a", (function() {
                return i
            })), r.d(e, "c", (function() {
                return s
            })), r.d(e, "f", (function() {
                return c
            })), r.d(e, "e", (function() {
                return u
            })), r.d(e, "d", (function() {
                return l
            }));
            var n = r("b775");

            function a(t) {
                return Object(n["a"])({
                    url: "/api/re_check/scan_receive",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/re_check/scan_info",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(n["a"])({
                    url: "/api/re_check/transfer_store",
                    method: "post",
                    data: t
                })
            }

            function s(t) {
                return Object(n["a"])({
                    url: "/api/re_check/store_transfer_order_scan_tag",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(n["a"])({
                    url: "api/re_check/scan_receive_for_imei",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "api/re_check/scan_info_for_imei",
                    method: "get",
                    params: t
                })
            }

            function l(t) {
                return Object(n["a"])({
                    url: "/api/re_check/save",
                    method: "post",
                    data: t
                })
            }
        },
        ab14: function(t, e, r) {},
        c0f9: function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return a
            })), r.d(e, "a", (function() {
                return o
            })), r.d(e, "f", (function() {
                return i
            })), r.d(e, "d", (function() {
                return s
            })), r.d(e, "g", (function() {
                return c
            })), r.d(e, "i", (function() {
                return u
            })), r.d(e, "h", (function() {
                return l
            })), r.d(e, "j", (function() {
                return d
            })), r.d(e, "e", (function() {
                return p
            })), r.d(e, "c", (function() {
                return _
            }));
            var n = r("b775");

            function a(t) {
                return Object(n["a"])({
                    url: "/api/error_reports",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/error_report/can_report_error_types",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(n["a"])({
                    url: "/api/error_report/store",
                    method: "post",
                    data: t
                })
            }

            function s(t) {
                return Object(n["a"])({
                    url: "/api/error_report/destroy",
                    method: "post",
                    data: t
                })
            }

            function c(t) {
                return Object(n["a"])({
                    url: "/api/check/error_report",
                    method: "post",
                    data: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "/api/re_check/error_report",
                    method: "post",
                    data: t
                })
            }

            function l(t) {
                return Object(n["a"])({
                    url: "/api/edit/error_report",
                    method: "post",
                    data: t
                })
            }

            function d(t) {
                return Object(n["a"])({
                    url: "/api/up_shift/error_report",
                    method: "post",
                    data: t
                })
            }

            function p(t) {
                return Object(n["a"])({
                    url: "/api/error_report/force_destroy",
                    method: "post",
                    data: t
                })
            }

            function _(t) {
                return Object(n["a"])({
                    url: "/api/option/select",
                    method: "get",
                    params: t
                })
            }
        },
        f6c6: function(t, e, r) {
            "use strict";
            r("ab14")
        }
    }
]);