(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-242c1214"], {
        "0e21": function(e, t, r) {
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
                    }, [r("ListComponent")], 1)], 1)], 1)
                },
                a = [],
                o = function() {
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
                    }, [r("userList", {
                        attrs: {
                            placeholder: "编辑接收人"
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
                            disabled: e.propsStatus
                        },
                        on: {
                            click: function(t) {
                                return e.openPropDialg()
                            }
                        }
                    }, [e._v("批量修改参数")]), e._v(" "), r("el-button", {
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
                            type: "primary"
                        },
                        on: {
                            click: e.handleExportReport
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
                    })], 1), e._v(" "), r("div", [r("el-tag", {
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
                            width: "65"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "商品",
                            align: "center",
                            width: "160"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.extend ? r("div", [e._v(e._s(t.row.extend.product_name))]) : e._e(), e._v(" "), t.row.extend ? r("div", [e._v("IMEI：" + e._s(t.row.extend.imei))]) : e._e(), e._v(" "), t.row.extend && 6 == t.row.extend.brand_id ? r("div", {
                                    staticClass: "text-value"
                                }, [e._v("序列号：" + e._s(t.row.extend.sn))]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "参数信息",
                            "header-align": "center",
                            width: "210"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return e._l(t.row.extend.sales_properties, (function(t, n) {
                                    return r("el-tag", {
                                        key: n,
                                        staticStyle: {
                                            "margin-right": "3px"
                                        },
                                        attrs: {
                                            size: "mini"
                                        }
                                    }, [e._v(e._s(t.pn_name) + "： " + e._s(t.pv_name))])
                                }))
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
                                return [t.row.extend ? r("div", [e._v("\n              成本：\n              "), r("div", [e._v(e._s(t.row.extend.product_cost.cost))])]) : e._e(), e._v(" "), t.row.extend ? r("div", [e._v("\n              售价：\n              "), r("div", [e._v(e._s(t.row.extend.price))])]) : e._e()]
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
                            width: "120"
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
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("router-link", {
                                    attrs: {
                                        to: {
                                            name: "editor-search-detail",
                                            query: {
                                                id: t.row.product_id,
                                                view: "view"
                                            }
                                        }
                                    }
                                }, [r("span", {
                                    staticClass: "view"
                                }, [e._v("\n                " + e._s(t.row.transfer_order.transfer_order_no) + "\n              ")])])]
                            }
                        }])
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
                                        type: 0 == t.row.deal_status ? "danger" : 1 == t.row.deal_status ? "warning" : 2 == t.row.deal_status ? "success" : ""
                                    }
                                }, [e._v(e._s(t.row.deal_status_description))])]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "商品状态",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.extend ? r("el-tag", {
                                    attrs: {
                                        type: "info"
                                    }
                                }, [e._v(e._s(t.row.extend.status_description))]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "transfer_order_receive_user",
                            label: "编辑接收人",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.transfer_order_receive_user ? r("div", [e._v("\n              " + e._s(t.row.transfer_order_receive_user.department_name) + "--" + e._s(t.row.transfer_order_receive_user.real_name) + "\n            ")]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "操作",
                            "header-align": "center",
                            width: "150",
                            fixed: "right"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("router-link", {
                                    attrs: {
                                        to: {
                                            name: "editor-search-detail",
                                            query: {
                                                id: t.row.product_id,
                                                view: "view"
                                            }
                                        },
                                        target: "_blank"
                                    }
                                }, [r("el-button", {
                                    staticStyle: {
                                        "margin-bottom": "3px"
                                    },
                                    attrs: {
                                        type: "primary",
                                        size: "mini"
                                    }
                                }, [e._v("查看")])], 1), e._v(" "), "已流转" != t.row.deal_status_description ? r("router-link", {
                                    attrs: {
                                        to: {
                                            name: "editor-search-edit",
                                            query: {
                                                id: t.row.product_id
                                            }
                                        }
                                    }
                                }, [r("el-button", {
                                    attrs: {
                                        type: "success",
                                        size: "mini"
                                    }
                                }, [e._v("编辑")])], 1) : e._e(), e._v(" "), r("el-button", {
                                    attrs: {
                                        type: "danger",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return e.openErrDialog(t.row.extend.imei)
                                        }
                                    }
                                }, [e._v("错误上报")]), e._v(" "), r("el-button", {
                                    staticStyle: {
                                        "margin-top": "3px"
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
                    }), e._v(" "), r("el-dialog", {
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
                    }, e._l(e.propsData.data, (function(t, n) {
                        return r("el-select", {
                            key: n,
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
                    }, [e._v("确定")])], 1)], 1), e._v(" "), r("ErrorDialog", {
                        attrs: {
                            imei: e.cur_imei,
                            "show-dialog": e.showErrDialog,
                            "node-id": 5
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
                s = [],
                i = r("4838"),
                c = r.n(i),
                l = r("2934"),
                u = r("ac47"),
                d = r("7774"),
                p = r("1504"),
                _ = r("c35b"),
                h = r("b7b8"),
                f = r("c4a5"),
                m = r("cd36"),
                v = r("6d8f"),
                b = r("0463"),
                g = r("2a67"),
                w = r("271c"),
                y = r("246e");

            function x(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(r), !0).forEach((function(t) {
                        O(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function O(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function j(e, t, r, n, a, o, s) {
                try {
                    var i = e[o](s),
                        c = i.value
                } catch (l) {
                    return void r(l)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function D(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function s(e) {
                            j(o, n, a, s, i, "next", e)
                        }

                        function i(e) {
                            j(o, n, a, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function S(e, t) {
                var r;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = $(e)) || t && e && "number" === typeof e.length) {
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
                var o, s = !0,
                    i = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next();
                        return s = e.done, e
                    },
                    e: function(e) {
                        i = !0, o = e
                    },
                    f: function() {
                        try {
                            s || null == r.return || r.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                }
            }

            function $(e, t) {
                if (e) {
                    if ("string" === typeof e) return P(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? P(e, t) : void 0
                }
            }

            function P(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var C = {
                    components: {
                        TypeBrandModel: p["a"],
                        UserList: _["a"],
                        AssignDialog: h["a"],
                        LogsDialog: m["a"],
                        ErrorDialog: f["a"],
                        Barcode: v["a"],
                        Qrcode: b["a"],
                        Areas: g["a"],
                        OperationTime: w["a"],
                        ImeiSearch: y["a"]
                    },
                    props: {
                        disposeStatus: [String],
                        headerTotal: [Number]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            search: {
                                deal_at: [],
                                business_type: null,
                                in_warehouse_type: null,
                                transfer_order_no: null,
                                imei: null,
                                supplier_id: null,
                                receive_user_ids: [],
                                type_id: null,
                                brand_id: null,
                                model_id: null,
                                is_abnormal_report: null,
                                deal_status: null,
                                area_ids: [],
                                qc_code: null,
                                sizes: [10, 20, 30, 40, 50, 100, 300, 500],
                                page: 1,
                                per_page: 20
                            },
                            total: 0,
                            dict: {
                                supplier: []
                            },
                            loading: !1,
                            assignForm: {
                                to_node_id: 6
                            },
                            showAssignDialog: !1,
                            selectRows: [],
                            transferBtn: !0,
                            propsStatus: !0,
                            showProps: !1,
                            propsForm: {
                                props_data: {}
                            },
                            propsData: {},
                            propsLoading: !1,
                            cur_imei: null,
                            showErrDialog: !1,
                            logProductId: null,
                            showLogDialog: !1,
                            barcodeInfo: []
                        }
                    },
                    computed: {
                        changePriceState: function() {
                            if (0 == this.selectRows.length) return !0;
                            var e, t = !1,
                                r = S(this.selectRows);
                            try {
                                for (r.s(); !(e = r.n()).done;) {
                                    var n = e.value;
                                    3 != n.extend.status && 4 != n.extend.status || (t = !0)
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
                        this.search.transfer_order_no = this.$route.query.no, this.getSuppliers(), this.getList()
                    },
                    methods: {
                        getList: function() {
                            var e = D(c.a.mark((function e(t) {
                                var r, n;
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t && (this.search.page = 1), r = JSON.parse(JSON.stringify(this.search)), r.area_ids = r.area_ids.join(","), this.loading = !0, e.next = 6, Object(u["b"])(r);
                                        case 6:
                                            n = e.sent, this.loading = !1, this.tableData = n.data.data, this.total = n.data.total, this.$emit("update:headerTotal", this.total);
                                        case 11:
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
                                deal_at: [],
                                business_type: null,
                                transfer_order_no: null,
                                imei: null,
                                supplier_id: null,
                                receive_user_ids: [],
                                type_id: null,
                                brand_id: null,
                                model_id: null,
                                is_abnormal_report: null,
                                deal_status: null,
                                qc_code: null,
                                area_ids: [],
                                page: 1
                            }, this.getList()
                        },
                        getSuppliers: function() {
                            var e = D(c.a.mark((function e() {
                                var t;
                                return c.a.wrap((function(e) {
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
                        handleAssingDone: function() {
                            var e = D(c.a.mark((function e() {
                                var t, r, n, a, o, s;
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            e.prev = 0, t = [], r = S(this.selectRows);
                                            try {
                                                for (r.s(); !(n = r.n()).done;) a = n.value, t.push(a.product_id)
                                            } catch (i) {
                                                r.e(i)
                                            } finally {
                                                r.f()
                                            }
                                            return o = {
                                                product_ids: t,
                                                by_assign_user_id: this.assignForm.by_assign_user_id,
                                                to_node_id: this.assignForm.to_node_id
                                            }, console.log(o), this.loading = !0, e.next = 9, Object(u["c"])(o);
                                        case 9:
                                            s = e.sent, this.loading = !1, this.$message.success(s.msg), this.$router.push({
                                                name: "editor-flow-list",
                                                query: {
                                                    transfer_order_no: s.data.transfer_order_no
                                                }
                                            }), e.next = 18;
                                            break;
                                        case 15:
                                            e.prev = 15, e.t0 = e["catch"](0), this.loading = !1;
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 15]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        handleSelectionChange: function(e) {
                            this.selectRows = e;
                            var t = !1,
                                r = !1,
                                n = null;
                            if (e.length > 0) {
                                var a, o = S(e);
                                try {
                                    for (o.s(); !(a = o.n()).done;) {
                                        var s = a.value;
                                        1 != s.deal_status && (t = !0), n ? n != s.extend.model_id && (r = !0) : n = s.extend.model_id
                                    }
                                } catch (i) {
                                    o.e(i)
                                } finally {
                                    o.f()
                                }
                            } else t = !0, r = !0;
                            this.transferBtn = t, this.propsStatus = r
                        },
                        openEditPrice: function() {
                            var e = D(c.a.mark((function e() {
                                var t, r, n, a, o, s, i, l;
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.$prompt("请输入价格", "提示", {
                                                inputPattern: /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/,
                                                inputErrorMessage: "非法价格"
                                            });
                                        case 3:
                                            t = e.sent, r = t.value, console.log(r), n = [], a = !1, o = S(this.selectRows);
                                            try {
                                                for (o.s(); !(s = o.n()).done;) i = s.value, n.push(i.product_id), parseFloat(i.extend.product_cost.cost) > r && (a = !0)
                                            } catch (c) {
                                                o.e(c)
                                            } finally {
                                                o.f()
                                            }
                                            if (!a) {
                                                e.next = 13;
                                                break
                                            }
                                            return e.next = 13, this.$confirm("确认低于成本价销售?", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 13:
                                            return l = {
                                                product_ids: n,
                                                price: r
                                            }, this.loading = !0, e.next = 17, Object(u["a"])(l);
                                        case 17:
                                            this.loading = !1, this.$message.success("操作成功！"), this.getList(), e.next = 25;
                                            break;
                                        case 22:
                                            e.prev = 22, e.t0 = e["catch"](0), this.loading = !1;
                                        case 25:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 22]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        openPropDialg: function(e) {
                            this.propsForm = {
                                props_data: {}
                            }, this.showProps = !0, this.getProps()
                        },
                        getProps: function() {
                            var e = D(c.a.mark((function e() {
                                var t, r;
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t = this.$loading({
                                                target: ".app-container .el-dialog .el-dialog__body"
                                            }), e.next = 3, Object(d["e"])({
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
                        handleExportReport: function() {
                            var e = this,
                                t = k(k({}, this.search), {}, {
                                    is_export: 1
                                });
                            t.area_ids = this.search.area_ids.join(","), delete t.page, Object(u["b"])(t).then(function() {
                                var t = D(c.a.mark((function t(r) {
                                    return c.a.wrap((function(t) {
                                        while (1) switch (t.prev = t.next) {
                                            case 0:
                                                if (1 != r.code) {
                                                    t.next = 4;
                                                    break
                                                }
                                                return t.next = 3, e.$confirm("导出成功，是否跳转至【报表进度查询】？", "提示", {
                                                    center: !0,
                                                    type: "success"
                                                });
                                            case 3:
                                                e.$router.push({
                                                    name: "logs-list"
                                                });
                                            case 4:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }())
                        },
                        editProps: function() {
                            var e = D(c.a.mark((function e() {
                                var t, r, n, a, o, s;
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            e.prev = 0, t = {
                                                product_ids: [],
                                                props_data: []
                                            }, r = S(this.selectRows);
                                            try {
                                                for (r.s(); !(n = r.n()).done;) a = n.value, t.product_ids.push(a.product_id)
                                            } catch (i) {
                                                r.e(i)
                                            } finally {
                                                r.f()
                                            }
                                            for (o in this.propsForm.props_data) s = this.propsForm.props_data[o], t.props_data.push({
                                                pnid: o,
                                                pvid: s
                                            });
                                            return this.propsLoading = !0, e.next = 8, Object(d["b"])(t);
                                        case 8:
                                            this.propsLoading = !1, this.showProps = !1, this.$message.success("操作成功！"), this.getList(), e.next = 17;
                                            break;
                                        case 14:
                                            e.prev = 14, e.t0 = e["catch"](0), this.propsLoading = !1;
                                        case 17:
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
                        openErrDialog: function(e) {
                            this.cur_imei = e, this.showErrDialog = !0
                        },
                        openLogs: function(e) {
                            this.showLogDialog = !0, this.logProductId = e
                        },
                        printImei: function(e) {
                            var t = this;
                            this.barcodeInfo = [];
                            var r, n = S(this.selectRows);
                            try {
                                for (n.s(); !(r = n.n()).done;) {
                                    var a = r.value,
                                        o = this.getPrintTitle(a.extend),
                                        s = {
                                            title: o,
                                            code: a.extend.imei
                                        };
                                    this.barcodeInfo.push(s), 2 == e && setTimeout((function() {
                                        t.$refs["print-qrcode-btn"].$el.click()
                                    }), 500)
                                }
                            } catch (i) {
                                n.e(i)
                            } finally {
                                n.f()
                            }
                        },
                        rejectReceive: function() {
                            var e = D(c.a.mark((function e(t) {
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return this.loading = !0, e.prev = 1, e.next = 4, Object(l["q"])({
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
                L = C,
                q = (r("5768"), r("5d22")),
                E = Object(q["a"])(L, o, s, !1, null, "50cdaee5", null),
                I = E.exports,
                z = {
                    components: {
                        ListComponent: I
                    },
                    data: function() {
                        return {
                            activeName: "all",
                            listTotal: [0, 0, 0, 0]
                        }
                    },
                    mounted: function() {},
                    methods: {}
                },
                A = z,
                R = Object(q["a"])(A, n, a, !1, null, null, null);
            t["default"] = R.exports
        },
        2934: function(e, t, r) {
            "use strict";
            r.d(t, "p", (function() {
                return a
            })), r.d(t, "d", (function() {
                return o
            })), r.d(t, "i", (function() {
                return s
            })), r.d(t, "m", (function() {
                return i
            })), r.d(t, "b", (function() {
                return c
            })), r.d(t, "g", (function() {
                return l
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
                return m
            })), r.d(t, "f", (function() {
                return v
            })), r.d(t, "o", (function() {
                return b
            })), r.d(t, "c", (function() {
                return g
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

            function o(e) {
                return Object(n["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(n["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
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

            function m(e) {
                return Object(n["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: e
                })
            }

            function v(e) {
                return Object(n["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: e
                })
            }

            function b(e) {
                return Object(n["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: e
                })
            }

            function g(e) {
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
        5768: function(e, t, r) {
            "use strict";
            r("bd41")
        },
        7774: function(e, t, r) {
            "use strict";
            r.d(t, "c", (function() {
                return a
            })), r.d(t, "e", (function() {
                return o
            })), r.d(t, "b", (function() {
                return s
            })), r.d(t, "d", (function() {
                return i
            })), r.d(t, "f", (function() {
                return c
            })), r.d(t, "a", (function() {
                return l
            }));
            var n = r("b775");

            function a(e) {
                return Object(n["a"])({
                    url: "/api/input/products_search",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(n["a"])({
                    url: "/api/input/get_edit_params",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(n["a"])({
                    url: "/api/input/submit_edit_params",
                    method: "post",
                    data: e
                })
            }

            function i(e) {
                return Object(n["a"])({
                    url: "/api/input/get_edit_params_all",
                    method: "get",
                    params: e
                })
            }

            function c(e) {
                return Object(n["a"])({
                    url: "/api/input/submit_edit_params_all",
                    method: "post",
                    data: e
                })
            }

            function l(e) {
                return Object(n["a"])({
                    url: "/api/input/transfer_store",
                    method: "post",
                    data: e
                })
            }
        },
        ac47: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return a
            })), r.d(t, "c", (function() {
                return o
            })), r.d(t, "a", (function() {
                return s
            }));
            var n = r("b775");

            function a(e) {
                return Object(n["a"])({
                    url: "/api/edit/products_search",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(n["a"])({
                    url: "/api/edit/transfer_store",
                    method: "post",
                    data: e
                })
            }

            function s(e) {
                return Object(n["a"])({
                    url: "/api/product/batch_edit_price",
                    method: "post",
                    data: e
                })
            }
        },
        bd41: function(e, t, r) {},
        c0f9: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return a
            })), r.d(t, "a", (function() {
                return o
            })), r.d(t, "f", (function() {
                return s
            })), r.d(t, "d", (function() {
                return i
            })), r.d(t, "g", (function() {
                return c
            })), r.d(t, "i", (function() {
                return l
            })), r.d(t, "h", (function() {
                return u
            })), r.d(t, "j", (function() {
                return d
            })), r.d(t, "e", (function() {
                return p
            })), r.d(t, "c", (function() {
                return _
            }));
            var n = r("b775");

            function a(e) {
                return Object(n["a"])({
                    url: "/api/error_reports",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(n["a"])({
                    url: "/api/error_report/can_report_error_types",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(n["a"])({
                    url: "/api/error_report/store",
                    method: "post",
                    data: e
                })
            }

            function i(e) {
                return Object(n["a"])({
                    url: "/api/error_report/destroy",
                    method: "post",
                    data: e
                })
            }

            function c(e) {
                return Object(n["a"])({
                    url: "/api/check/error_report",
                    method: "post",
                    data: e
                })
            }

            function l(e) {
                return Object(n["a"])({
                    url: "/api/re_check/error_report",
                    method: "post",
                    data: e
                })
            }

            function u(e) {
                return Object(n["a"])({
                    url: "/api/edit/error_report",
                    method: "post",
                    data: e
                })
            }

            function d(e) {
                return Object(n["a"])({
                    url: "/api/up_shift/error_report",
                    method: "post",
                    data: e
                })
            }

            function p(e) {
                return Object(n["a"])({
                    url: "/api/error_report/force_destroy",
                    method: "post",
                    data: e
                })
            }

            function _(e) {
                return Object(n["a"])({
                    url: "/api/option/select",
                    method: "get",
                    params: e
                })
            }
        }
    }
]);