(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-7d5577e6"], {
        "0758": function(e, t, n) {
            "use strict";
            n.r(t);
            var a, r = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "app-container"
                    }, [n("el-row", {
                        staticClass: "header-search"
                    }, [n("el-col", {
                        attrs: {
                            span: 8
                        }
                    }, [n("el-input", {
                        ref: "order_no",
                        attrs: {
                            placeholder: "扫描流转单号"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getDetail()
                            }
                        },
                        model: {
                            value: e.search.transfer_order_no,
                            callback: function(t) {
                                e.$set(e.search, "transfer_order_no", t)
                            },
                            expression: "search.transfer_order_no"
                        }
                    })], 1), e._v(" "), n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [n("el-alert", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.order.transfer_order_no,
                            expression: "order.transfer_order_no"
                        }],
                        staticClass: "status-tip",
                        attrs: {
                            title: e.order.receive_status_description,
                            type: 1 == e.order.receive_status ? "success" : "warning",
                            "show-icon": "",
                            closable: !1
                        }
                    })], 1)], 1), e._v(" "), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.order.transfer_order_no,
                            expression: "order.transfer_order_no"
                        }],
                        staticClass: "load-tools"
                    }, [n("el-select", {
                        attrs: {
                            filterable: "",
                            disabled: e.disabedType,
                            clearable: "",
                            placeholder: "请选择类目"
                        },
                        on: {
                            change: function(t) {
                                return e.getProductList()
                            }
                        },
                        model: {
                            value: e.search.type_id,
                            callback: function(t) {
                                e.$set(e.search, "type_id", t)
                            },
                            expression: "search.type_id"
                        }
                    }, e._l(e.dict.type, (function(e, t) {
                        return n("el-option", {
                            key: "请选择类目-" + t,
                            attrs: {
                                label: e.type_name,
                                value: e.type_id
                            }
                        })
                    })), 1), e._v(" "), n("el-select", {
                        attrs: {
                            disabled: 1 == e.order.is_out_input,
                            filterable: "",
                            clearable: "",
                            placeholder: "请选择操作"
                        },
                        on: {
                            change: function(t) {
                                return e.getProductList()
                            }
                        },
                        model: {
                            value: e.search.option_id,
                            callback: function(t) {
                                e.$set(e.search, "option_id", t)
                            },
                            expression: "search.option_id"
                        }
                    }, e._l(e.dict.option, (function(e, t) {
                        return n("el-option", {
                            key: "操作-" + t,
                            attrs: {
                                label: e.option_name,
                                value: e.option_id
                            }
                        })
                    })), 1), e._v(" "), 3 == e.search.option_id ? n("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.handleClearData
                        }
                    }, [e._v("一键清除")]) : e._e(), e._v(" "), 2 == e.search.option_id ? n("el-input", {
                        ref: "qrcodeRef",
                        staticStyle: {
                            width: "175px"
                        },
                        attrs: {
                            placeholder: "扫描二维码"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.androidInputTool(t)
                            }
                        },
                        model: {
                            value: e.qrcode_data,
                            callback: function(t) {
                                e.qrcode_data = t
                            },
                            expression: "qrcode_data"
                        }
                    }) : e._e()], 1), e._v(" "), n("el-row", {
                        staticClass: "header-search"
                    }, [n("el-col", [n("el-alert", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.order.transfer_order_no,
                            expression: "order.transfer_order_no"
                        }],
                        attrs: {
                            type: "success",
                            closable: !1
                        }
                    }, [n("el-row", [n("el-col", {
                        staticClass: "header-info",
                        attrs: {
                            span: 16
                        }
                    }, [n("div", [e._v("\n              商品类型：\n              "), n("span", [e._v(e._s(e.order.standard_type_name))])]), e._v(" "), n("div", [e._v("\n              流转单号：\n              "), n("span", [e._v(e._s(e.order.transfer_order_no))])]), e._v(" "), n("div", [e._v("\n              流转步骤：\n              "), e.order.source_node ? n("span", [e._v(e._s(e.order.source_node.name) + "---\x3e" + e._s(e.order.to_node.name))]) : e._e()]), e._v(" "), n("div", [e._v("\n              已处理：\n              "), n("span", {
                        staticClass: "color-danger"
                    }, [e._v(e._s(e.order.deal_num))])]), e._v(" "), n("div", [e._v("\n              分配时间：\n              "), n("span", [e._v(e._s(e.order.assign_at))])])]), e._v(" "), n("el-col", {
                        staticClass: "header-total",
                        attrs: {
                            span: 8
                        }
                    }, [n("ul", [n("li", [e._v("\n                数量合计：\n                "), n("span", [e._v(e._s(e.order.total_num))])]), e._v(" "), n("li", [e._v("\n                成本合计：\n                "), n("span", [e._v(e._s(e.order.total_cost))])])]), e._v(" "), n("ul", [n("li", [0 == e.order.type_id && 1 != e.search.option_id || 3 == e.search.option_id && 0 == e.tableData.length ? n("el-button", {
                        attrs: {
                            type: "success",
                            size: "mini",
                            plain: ""
                        },
                        on: {
                            click: e.addRow
                        }
                    }, [e._v("添加")]) : e._e()], 1)])])], 1)], 1)], 1)], 1), e._v(" "), n("el-row", {
                        staticClass: "body-list"
                    }, [n("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [n("el-table", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: e.loading,
                            expression: "loading"
                        }],
                        ref: "productTable",
                        attrs: {
                            data: e.tableData,
                            border: "",
                            size: "mini",
                            "row-class-name": e.tableRowClassName
                        },
                        on: {
                            "selection-change": e.handleSelectionChange,
                            "select-all": e.handleSelectAll,
                            "row-click": e.handleRowClick
                        }
                    }, [n("el-table-column", {
                        attrs: {
                            type: "selection",
                            align: "center",
                            selectable: e.handleSelectable,
                            width: "40"
                        }
                    }), e._v(" "), n("el-table-column", {
                        attrs: {
                            type: "index",
                            label: "序号",
                            align: "center",
                            width: "50"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [n("span", [e._v(e._s(e.tableData.length - t.$index))])]
                            }
                        }])
                    }), e._v(" "), n("el-table-column", {
                        attrs: {
                            label: "类目品牌",
                            width: "100",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [n("el-select", {
                                    staticStyle: {
                                        width: "75px"
                                    },
                                    attrs: {
                                        filterable: "",
                                        clearable: "",
                                        placeholder: "品牌"
                                    },
                                    on: {
                                        change: function(n) {
                                            return e.getModelByBrand(t.row, t.$index)
                                        }
                                    },
                                    model: {
                                        value: t.row.brand_data.default_value,
                                        callback: function(n) {
                                            e.$set(t.row.brand_data, "default_value", n)
                                        },
                                        expression: "scope.row.brand_data.default_value"
                                    }
                                }, e._l(t.row.brand_data.list, (function(e, t) {
                                    return n("el-option", {
                                        key: "品牌-" + t,
                                        attrs: {
                                            label: e.brand_name,
                                            value: e.brand_id
                                        }
                                    })
                                })), 1)]
                            }
                        }])
                    }), e._v(" "), n("el-table-column", {
                        attrs: {
                            label: "型号",
                            align: "center",
                            width: "240"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [n("el-select", {
                                    staticStyle: {
                                        width: "100%"
                                    },
                                    attrs: {
                                        filterable: "",
                                        clearable: ""
                                    },
                                    on: {
                                        change: function(n) {
                                            return e.getProps(t.row)
                                        }
                                    },
                                    model: {
                                        value: t.row.model_data.default_value,
                                        callback: function(n) {
                                            e.$set(t.row.model_data, "default_value", n)
                                        },
                                        expression: "scope.row.model_data.default_value"
                                    }
                                }, e._l(t.row.model_data.list, (function(e, t) {
                                    return n("el-option", {
                                        key: "型号" + t,
                                        attrs: {
                                            label: e.model_name,
                                            value: e.model_id
                                        }
                                    })
                                })), 1), e._v(" "), e.checkRowIndexsErrorMsg[t.row.index] ? n("span", {
                                    staticClass: "remark"
                                }, [e._v("\n              " + e._s(e.checkRowIndexsErrorMsg[t.row.index]) + "\n            ")]) : e._e()]
                            }
                        }])
                    }), e._v(" "), n("el-table-column", {
                        attrs: {
                            label: "参数信息",
                            align: "center",
                            width: "440"
                        },
                        scopedSlots: e._u([{
                            key: "header",
                            fn: function(t) {
                                return [e._v("\n            参数信息\n            "), n("el-popover", {
                                    attrs: {
                                        placement: "top"
                                    }
                                }, [n("div", [n("el-cascader", {
                                    attrs: {
                                        placeholder: "请选择网络",
                                        options: e.unionNetwork,
                                        props: {
                                            label: "pvname",
                                            value: "pvid"
                                        },
                                        filterable: "",
                                        clearable: ""
                                    },
                                    on: {
                                        change: e.handleBatchNetwork
                                    },
                                    model: {
                                        value: e.batch.network,
                                        callback: function(t) {
                                            e.$set(e.batch, "network", t)
                                        },
                                        expression: "batch.network"
                                    }
                                })], 1), e._v(" "), n("el-button", {
                                    attrs: {
                                        slot: "reference",
                                        type: "text",
                                        icon: "el-icon-s-tools"
                                    },
                                    slot: "reference"
                                })], 1)]
                            }
                        }, {
                            key: "default",
                            fn: function(t) {
                                return e._l(t.row.props_data, (function(a, r) {
                                    return n("el-select", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 12 != a.pnid && 54 != a.pnid,
                                            expression: "item.pnid != 12 && item.pnid != 54"
                                        }],
                                        key: a.pn_name + "-" + r,
                                        staticClass: "table-select",
                                        staticStyle: {
                                            width: "200px",
                                            margin: "3px 3px"
                                        },
                                        attrs: {
                                            filterable: "",
                                            clearable: "",
                                            placeholder: a.pn_name
                                        },
                                        model: {
                                            value: a.default_value,
                                            callback: function(t) {
                                                e.$set(a, "default_value", t)
                                            },
                                            expression: "item.default_value"
                                        }
                                    }, [e._l(a.list, (function(r, i) {
                                        return n("el-option", {
                                            key: a.pn_name + "--" + i,
                                            attrs: {
                                                label: r.pvname,
                                                value: String(r.pvid)
                                            }
                                        }, [n("div", {
                                            staticClass: "color-img",
                                            staticStyle: {
                                                display: "flex",
                                                "justify-content": "space-between",
                                                "align-items": "center"
                                            }
                                        }, [n("span", [e._v(e._s(r.pvname))]), e._v(" "), 10 == a.pnid && e.colorImg[t.row.model_data.default_value] ? n("el-popover", {
                                            attrs: {
                                                placement: "right-start",
                                                trigger: "hover"
                                            }
                                        }, [n("img", {
                                            attrs: {
                                                src: e.colorImg[t.row.model_data.default_value][r.pvid],
                                                onerror: "this.style.display = 'none'"
                                            }
                                        }), e._v(" "), n("img", {
                                            staticStyle: {
                                                float: "left"
                                            },
                                            attrs: {
                                                slot: "reference",
                                                src: e.colorImg[t.row.model_data.default_value][r.pvid],
                                                height: "34px",
                                                onerror: "this.style.display = 'none'"
                                            },
                                            slot: "reference"
                                        })]) : e._e()], 1)])
                                    })), e._v(" "), 10 == a.pnid ? n("div", {
                                        staticStyle: {
                                            display: "flex",
                                            "align-items": "center",
                                            height: "100%"
                                        },
                                        attrs: {
                                            slot: "prefix"
                                        },
                                        slot: "prefix"
                                    }, [e.colorImg[t.row.model_data.default_value] ? n("el-popover", {
                                        attrs: {
                                            placement: "right-start",
                                            trigger: "hover"
                                        }
                                    }, [n("img", {
                                        attrs: {
                                            src: e.colorImg[t.row.model_data.default_value][a.default_value]
                                        }
                                    }), e._v(" "), n("img", {
                                        staticStyle: {
                                            width: "30px",
                                            "margin-left": "140px",
                                            display: "flex"
                                        },
                                        attrs: {
                                            slot: "reference",
                                            src: e.colorImg[t.row.model_data.default_value][a.default_value]
                                        },
                                        slot: "reference"
                                    })]) : e._e()], 1) : e._e()], 2)
                                }))
                            }
                        }])
                    }), e._v(" "), e.order.business_line > 1 ? n("el-table-column", {
                        attrs: {
                            label: "ZZ-颜色",
                            align: "center",
                            width: "165"
                        },
                        scopedSlots: e._u([{
                            key: "header",
                            fn: function(t) {
                                return e.order.business_line > 1 ? [e._v("ZZ-颜色")] : void 0
                            }
                        }, {
                            key: "default",
                            fn: function(t) {
                                return e.order.business_line > 1 ? [e.order.business_line > 1 ? n("el-select", {
                                    model: {
                                        value: t.row.zz_color_id,
                                        callback: function(n) {
                                            e.$set(t.row, "zz_color_id", n)
                                        },
                                        expression: "scope.row.zz_color_id"
                                    }
                                }, e._l(t.row.zz_colors, (function(e) {
                                    return n("el-option", {
                                        key: e.id,
                                        attrs: {
                                            label: e.name,
                                            value: e.id
                                        }
                                    })
                                })), 1) : e._e()] : void 0
                            }
                        }], null, !0)
                    }) : e._e(), e._v(" "), 1 == e.order.business_line ? n("el-table-column", {
                        attrs: {
                            label: "来源",
                            align: "center",
                            width: "165"
                        },
                        scopedSlots: e._u([{
                            key: "header",
                            fn: function(t) {
                                return [e._v("\n            来源\n            "), e.tableData.length > 0 ? n("el-popover", {
                                    attrs: {
                                        placement: "top"
                                    }
                                }, [e._l(e.tableData[0].props_data, (function(t, a) {
                                    return n("div", {
                                        key: "来源-" + a
                                    }, [54 == t.pnid ? n("el-cascader", {
                                        attrs: {
                                            placeholder: "请选择来源",
                                            options: t.list,
                                            props: {
                                                label: "pvname",
                                                value: "pvid"
                                            },
                                            filterable: "",
                                            clearable: ""
                                        },
                                        on: {
                                            change: e.handleBatchSource
                                        },
                                        model: {
                                            value: e.batch.source,
                                            callback: function(t) {
                                                e.$set(e.batch, "source", t)
                                            },
                                            expression: "batch.source"
                                        }
                                    }) : e._e()], 1)
                                })), e._v(" "), n("el-button", {
                                    attrs: {
                                        slot: "reference",
                                        type: "text",
                                        icon: "el-icon-s-tools"
                                    },
                                    slot: "reference"
                                })], 2) : e._e()]
                            }
                        }, {
                            key: "default",
                            fn: function(t) {
                                return e._l(t.row.props_data, (function(t, a) {
                                    return n("el-select", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 54 == t.pnid,
                                            expression: "item.pnid == 54"
                                        }],
                                        key: t.pn_name + "---" + a,
                                        staticClass: "table-select",
                                        staticStyle: {
                                            width: "140px"
                                        },
                                        attrs: {
                                            filterable: "",
                                            clearable: "",
                                            placeholder: t.pn_name
                                        },
                                        model: {
                                            value: t.default_value,
                                            callback: function(n) {
                                                e.$set(t, "default_value", n)
                                            },
                                            expression: "item.default_value"
                                        }
                                    }, e._l(t.list, (function(e, a) {
                                        return n("el-option", {
                                            key: t.pn_name + "-1-" + a,
                                            attrs: {
                                                label: e.pvname,
                                                value: String(e.pvid)
                                            }
                                        })
                                    })), 1)
                                }))
                            }
                        }], null, !1, 236239563)
                    }) : e._e(), e._v(" "), n("el-table-column", {
                        attrs: {
                            label: "IMEI/序列号",
                            align: "center",
                            width: "220"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [n("zlj-input", {
                                    attrs: {
                                        maxlength: 1 == t.row.brand_data.default_value ? 15 : 100,
                                        disabled: t.row.disabledImei,
                                        placeholder: "请输入IMEI"
                                    },
                                    on: {
                                        change: function(n) {
                                            return e.handleImeiChange(t.row)
                                        }
                                    },
                                    model: {
                                        value: t.row.imei,
                                        callback: function(n) {
                                            e.$set(t.row, "imei", n)
                                        },
                                        expression: "scope.row.imei"
                                    }
                                }), e._v(" "), n("zlj-input", {
                                    directives: [{
                                        name: "show",
                                        rawName: "v-show",
                                        value: 4 == t.row.brand_data.default_value || 6 == t.row.brand_data.default_value,
                                        expression: "scope.row.brand_data.default_value == 4 || scope.row.brand_data.default_value == 6"
                                    }],
                                    staticStyle: {
                                        "margin-top": "3px"
                                    },
                                    attrs: {
                                        placeholder: "请输入序列号",
                                        maxlength: 13,
                                        minlength: 12
                                    },
                                    on: {
                                        change: function(n) {
                                            return e.handleImeiChange(t.row)
                                        }
                                    },
                                    model: {
                                        value: t.row.sn,
                                        callback: function(n) {
                                            e.$set(t.row, "sn", n)
                                        },
                                        expression: "scope.row.sn"
                                    }
                                })]
                            }
                        }, {
                            key: "header",
                            fn: function(t) {
                                return [e._v("\n            IMEI/序列号\n            "), 2 == e.order.standard_type ? n("el-button", {
                                    attrs: {
                                        type: "primary",
                                        plain: "",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(t) {
                                            return e.autoCreateImei()
                                        }
                                    }
                                }, [e._v("自动生成IMEI")]) : e._e()]
                            }
                        }])
                    }), e._v(" "), 1 != e.order.business_line ? n("el-table-column", {
                        attrs: {
                            label: "质检码",
                            align: "center",
                            width: "200"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [n("zlj-input", {
                                    attrs: {
                                        id: "tables_row_qc_code_input_" + e.tableData.length,
                                        placeholder: "请输入质检码"
                                    },
                                    nativeOn: {
                                        keyup: function(n) {
                                            return !n.type.indexOf("key") && e._k(n.keyCode, "enter", 13, n.key, "Enter") ? null : e.handleQcChange(t.row)
                                        }
                                    },
                                    model: {
                                        value: t.row.qc_code,
                                        callback: function(n) {
                                            e.$set(t.row, "qc_code", n)
                                        },
                                        expression: "scope.row.qc_code"
                                    }
                                })]
                            }
                        }], null, !1, 628016041)
                    }) : e._e(), e._v(" "), 1 != e.order.business_line ? n("el-table-column", {
                        attrs: {
                            prop: "business_line_name",
                            label: "所属业务",
                            align: "center",
                            width: "100"
                        }
                    }) : e._e(), e._v(" "), 1 == e.order.business_line ? n("el-table-column", {
                        attrs: {
                            label: "成色",
                            align: "center",
                            width: "110"
                        },
                        scopedSlots: e._u([{
                            key: "header",
                            fn: function(t) {
                                return [e._v("\n            成色\n            "), e.tableData.length > 0 ? n("el-popover", {
                                    attrs: {
                                        placement: "top"
                                    }
                                }, [e._l(e.tableData[0].props_data, (function(t, a) {
                                    return n("div", {
                                        key: "成色-" + a
                                    }, [12 == t.pnid ? n("el-cascader", {
                                        attrs: {
                                            placeholder: "请选择成色",
                                            options: t.list,
                                            props: {
                                                label: "pvname",
                                                value: "pvid"
                                            },
                                            filterable: "",
                                            clearable: ""
                                        },
                                        on: {
                                            change: e.handleBatchFineness
                                        },
                                        model: {
                                            value: e.batch.fineness,
                                            callback: function(t) {
                                                e.$set(e.batch, "fineness", t)
                                            },
                                            expression: "batch.fineness"
                                        }
                                    }) : e._e()], 1)
                                })), e._v(" "), n("el-button", {
                                    attrs: {
                                        slot: "reference",
                                        type: "text",
                                        icon: "el-icon-s-tools"
                                    },
                                    slot: "reference"
                                })], 2) : e._e()]
                            }
                        }, {
                            key: "default",
                            fn: function(t) {
                                return e._l(t.row.props_data, (function(a, r) {
                                    return n("el-select", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 12 == a.pnid,
                                            expression: "item.pnid == 12"
                                        }],
                                        key: a.pn_name + "11-" + r,
                                        attrs: {
                                            filterable: "",
                                            clearable: "",
                                            placeholder: a.pn_name
                                        },
                                        on: {
                                            change: function(n) {
                                                return e.handleImeiChange(t.row)
                                            }
                                        },
                                        model: {
                                            value: a.default_value,
                                            callback: function(t) {
                                                e.$set(a, "default_value", t)
                                            },
                                            expression: "item.default_value"
                                        }
                                    }, e._l(a.list, (function(e, t) {
                                        return n("el-option", {
                                            key: a.pn_name + "12-" + t,
                                            attrs: {
                                                label: e.pvname,
                                                value: String(e.pvid)
                                            }
                                        })
                                    })), 1)
                                }))
                            }
                        }], null, !1, 2770925189)
                    }) : e._e(), e._v(" "), n("el-table-column", {
                        attrs: {
                            label: "全新机",
                            align: "center",
                            width: "65"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [n("el-checkbox", {
                                    model: {
                                        value: t.row.new_product,
                                        callback: function(n) {
                                            e.$set(t.row, "new_product", n)
                                        },
                                        expression: "scope.row.new_product"
                                    }
                                })]
                            }
                        }])
                    }), e._v(" "), 1 == e.order.business_line ? n("el-table-column", {
                        attrs: {
                            label: "成本价",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e.order.supplier_info && 1 == e.order.supplier_info.is_independent_pricing && 3347 != e.order.supplier_info.suppiler_id ? n("div", [e._v("\n              " + e._s(t.row.product_cost) + "\n            ")]) : n("zlj-input", {
                                    attrs: {
                                        placeholder: "请输入成本价"
                                    },
                                    model: {
                                        value: t.row.product_cost,
                                        callback: function(n) {
                                            e.$set(t.row, "product_cost", n)
                                        },
                                        expression: "scope.row.product_cost"
                                    }
                                })]
                            }
                        }], null, !1, 3848304715)
                    }) : e._e(), e._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "address",
                            label: "操作",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [n("el-button", {
                                    attrs: {
                                        type: "primary",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(n) {
                                            return e.copyRow(t.row)
                                        }
                                    }
                                }, [e._v("复制")]), e._v(" "), n("el-button", {
                                    staticStyle: {
                                        "margin-top": "3px"
                                    },
                                    attrs: {
                                        type: "danger",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(n) {
                                            return e.removeRow(t)
                                        }
                                    }
                                }, [e._v("删除")]), e._v(" "), t.row.disabledImei ? n("el-button", {
                                    staticStyle: {
                                        "margin-top": "3px"
                                    },
                                    attrs: {
                                        type: "success",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(n) {
                                            return e.editImei(t.row)
                                        }
                                    }
                                }, [e._v("修改")]) : e._e(), e._v(" "), n("el-button", {
                                    directives: [{
                                        name: "show",
                                        rawName: "v-show",
                                        value: t.row.imei,
                                        expression: "scope.row.imei"
                                    }, {
                                        name: "print",
                                        rawName: "v-print",
                                        value: "#barcode-container",
                                        expression: "'#barcode-container'"
                                    }],
                                    staticStyle: {
                                        "margin-top": "3px"
                                    },
                                    attrs: {
                                        type: "success",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(n) {
                                            return e.openBarcode(t.row)
                                        }
                                    }
                                }, [e._v("打印标签")]), e._v(" "), n("el-button", {
                                    directives: [{
                                        name: "show",
                                        rawName: "v-show",
                                        value: t.row.imei,
                                        expression: "scope.row.imei"
                                    }],
                                    staticStyle: {
                                        "margin-top": "3px"
                                    },
                                    attrs: {
                                        type: "success",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(n) {
                                            return e.openBarcode(t.row, 2)
                                        }
                                    }
                                }, [e._v("打印二维码")]), e._v(" "), n("el-button", {
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
                                })]
                            }
                        }])
                    })], 1)], 1)], 1), e._v(" "), n("el-row", [e.tableData.length > 0 ? n("el-col", {
                        staticClass: "flex-center"
                    }, [n("el-button", {
                        attrs: {
                            loading: e.loading,
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.saveAndCreate()
                            }
                        }
                    }, [e._v("保存")]), e._v(" "), n("el-button", {
                        attrs: {
                            loading: e.loading,
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                e.showAssignDialog = !0
                            }
                        }
                    }, [e._v("保存并创建流转单")]), e._v(" "), 1 == e.order.business_line ? n("el-button", {
                        attrs: {
                            loading: e.loading,
                            type: "danger"
                        },
                        on: {
                            click: function(t) {
                                return e.openException()
                            }
                        }
                    }, [e._v("登记异常")]) : n("el-button", {
                        attrs: {
                            loading: e.loading,
                            type: "danger"
                        },
                        on: {
                            click: function(t) {
                                return e.openC2CException()
                            }
                        }
                    }, [e._v("提交异常")])], 1) : e._e()], 1), e._v(" "), n("AssignDialog", {
                        attrs: {
                            "show-dialog": e.showAssignDialog,
                            "require-user": !0
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
                    }), e._v(" "), n("Barcode", {
                        attrs: {
                            id: "barcode-container",
                            data: e.barcodeInfo
                        }
                    }), e._v(" "), n("el-dialog", {
                        attrs: {
                            title: "登记异常",
                            visible: e.showExceptionDialog,
                            width: "1100px"
                        },
                        on: {
                            "update:visible": function(t) {
                                e.showExceptionDialog = t
                            }
                        }
                    }, [n("el-table", {
                        attrs: {
                            data: e.exceptionForm
                        }
                    }, [n("el-table-column", {
                        attrs: {
                            type: "index",
                            label: "序号",
                            align: "center",
                            width: "80"
                        }
                    }), e._v(" "), n("el-table-column", {
                        attrs: {
                            label: "类目品牌"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(e._s(t.row.type_name) + " " + e._s(t.row.brand_name))]
                            }
                        }])
                    }), e._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "model_name",
                            label: "型号",
                            align: "center"
                        }
                    }), e._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "model_props_name",
                            label: "属性",
                            align: "center",
                            width: "200"
                        }
                    }), e._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "imei",
                            label: "机器码",
                            align: "center"
                        }
                    }), e._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "num",
                            label: "数量",
                            align: "center"
                        }
                    }), e._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "cost_price",
                            label: "成本",
                            align: "center"
                        }
                    }), e._v(" "), n("el-table-column", {
                        attrs: {
                            label: "异常原因",
                            width: "160",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [n("ExceptionReason", {
                                    attrs: {
                                        mode: "type-in"
                                    },
                                    model: {
                                        value: t.row.reason,
                                        callback: function(n) {
                                            e.$set(t.row, "reason", n)
                                        },
                                        expression: "scope.row.reason"
                                    }
                                })]
                            }
                        }])
                    }), e._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "remark",
                            label: "异常描述",
                            width: "200",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [n("el-input", {
                                    attrs: {
                                        type: "textarea",
                                        rows: "4",
                                        placeholder: "请输入异常描述"
                                    },
                                    model: {
                                        value: t.row.remark,
                                        callback: function(n) {
                                            e.$set(t.row, "remark", n)
                                        },
                                        expression: "scope.row.remark"
                                    }
                                })]
                            }
                        }])
                    })], 1), e._v(" "), n("span", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [n("el-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: function(t) {
                                e.showExceptionDialog = !1
                            }
                        }
                    }, [e._v("取消")]), e._v(" "), n("el-button", {
                        attrs: {
                            type: "primary",
                            loading: e.exceptionLoading
                        },
                        on: {
                            click: e.saveException
                        }
                    }, [e._v("确 定")])], 1)], 1), e._v(" "), n("el-dialog", {
                        attrs: {
                            title: "提交异常",
                            visible: e.showC2CExceptionDialog,
                            width: "800px"
                        },
                        on: {
                            "update:visible": function(t) {
                                e.showC2CExceptionDialog = t
                            }
                        }
                    }, [n("el-table", {
                        staticClass: "exceptionTable",
                        attrs: {
                            data: e.C2CList
                        }
                    }, [n("el-table-column", {
                        attrs: {
                            label: "序号",
                            type: "index",
                            align: "center"
                        }
                    }), e._v(" "), n("el-table-column", {
                        staticStyle: {
                            "border-right": "1px solid red"
                        },
                        attrs: {
                            label: "机器异常",
                            prop: "phone_exception",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [void 0 !== t.row.phoneQcCode ? n("el-input", {
                                    ref: "C2CList-phone-" + t.$index,
                                    attrs: {
                                        placeholder: "质检码"
                                    },
                                    nativeOn: {
                                        keyup: function(n) {
                                            return !n.type.indexOf("key") && e._k(n.keyCode, "enter", 13, n.key, "Enter") ? null : e.handleQcEnter(t.$index, "phone")
                                        }
                                    },
                                    model: {
                                        value: t.row.phoneQcCode,
                                        callback: function(n) {
                                            e.$set(t.row, "phoneQcCode", n)
                                        },
                                        expression: "scope.row.phoneQcCode"
                                    }
                                }) : e._e()]
                            }
                        }])
                    }), e._v(" "), n("el-table-column", {
                        attrs: {
                            label: "有密码",
                            prop: "passord_exception",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [void 0 !== t.row.passwordQcCode ? n("el-input", {
                                    ref: "C2CList-password-" + t.$index,
                                    attrs: {
                                        placeholder: "质检码"
                                    },
                                    nativeOn: {
                                        keyup: function(n) {
                                            return !n.type.indexOf("key") && e._k(n.keyCode, "enter", 13, n.key, "Enter") ? null : e.handleQcEnter(t.$index, "password")
                                        }
                                    },
                                    model: {
                                        value: t.row.passwordQcCode,
                                        callback: function(n) {
                                            e.$set(t.row, "passwordQcCode", n)
                                        },
                                        expression: "scope.row.passwordQcCode"
                                    }
                                }) : e._e()]
                            }
                        }])
                    }), e._v(" "), n("el-table-column", {
                        attrs: {
                            label: "密码锁类型",
                            prop: "password_type",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [void 0 !== t.row.passwordType ? n("el-radio-group", {
                                    model: {
                                        value: t.row.passwordType,
                                        callback: function(n) {
                                            e.$set(t.row, "passwordType", n)
                                        },
                                        expression: "scope.row.passwordType"
                                    }
                                }, [n("el-radio", {
                                    attrs: {
                                        label: 1
                                    }
                                }, [e._v("密码")]), e._v(" "), n("el-radio", {
                                    attrs: {
                                        label: 2
                                    }
                                }, [e._v("ID锁")])], 1) : e._e()]
                            }
                        }])
                    })], 1), e._v(" "), n("span", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [n("el-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: function(t) {
                                e.showC2CExceptionDialog = !1
                            }
                        }
                    }, [e._v("取消")]), e._v(" "), n("el-button", {
                        attrs: {
                            type: "primary",
                            loading: e.exceptionLoading
                        },
                        on: {
                            click: function(t) {
                                return e.handleC2CExceptionClick()
                            }
                        }
                    }, [e._v("确 定")])], 1)], 1), e._v(" "), n("el-dialog", {
                        attrs: {
                            title: "匹配属性",
                            visible: e.showQrcodeDialog,
                            width: "500px"
                        },
                        on: {
                            "update:visible": function(t) {
                                e.showQrcodeDialog = t
                            }
                        }
                    }, [n("el-form", {
                        attrs: {
                            "label-width": "100px"
                        }
                    }, e._l(e.qrcode_res.rows, (function(t, a) {
                        return n("el-form-item", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: 1 == t.is_need_add,
                                expression: "item.is_need_add == 1"
                            }],
                            key: "匹配属性-" + a,
                            attrs: {
                                label: t.type_name + "："
                            }
                        }, [n("el-select", {
                            staticStyle: {
                                width: "100%"
                            },
                            attrs: {
                                clearable: "",
                                filterable: ""
                            },
                            on: {
                                change: function(t) {
                                    return e.getMappingList()
                                }
                            },
                            model: {
                                value: t.shop_pv_id,
                                callback: function(n) {
                                    e.$set(t, "shop_pv_id", n)
                                },
                                expression: "item.shop_pv_id"
                            }
                        }, e._l(e.qrcode_dict[t.type], (function(e) {
                            return n("el-option", {
                                key: "匹配属性子查询-" + e.id,
                                attrs: {
                                    label: e.name,
                                    value: e.id
                                }
                            })
                        })), 1)], 1)
                    })), 1), e._v(" "), n("span", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [n("el-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: function(t) {
                                e.showQrcodeDialog = !1
                            }
                        }
                    }, [e._v("取消")]), e._v(" "), n("el-button", {
                        attrs: {
                            type: "primary",
                            loading: e.qrcodeLoading
                        },
                        on: {
                            click: e.saveQrcode
                        }
                    }, [e._v("确 定")])], 1)], 1), e._v(" "), n("Qrcode", {
                        attrs: {
                            id: "qrcode-container",
                            data: e.barcodeInfo
                        }
                    })], 1)
                },
                i = [],
                o = n("4838"),
                s = n.n(o),
                l = n("afe9"),
                c = n("b7b8"),
                u = n("6d8f"),
                d = n("0463"),
                p = n("f2f0"),
                h = n("c058"),
                f = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        class: ["textarea" === e.type ? "el-textarea" : "el-input", e.inputSize ? "el-input--" + e.inputSize : "", {
                            "is-disabled": e.inputDisabled,
                            "is-exceed": e.inputExceed,
                            "el-input-group": e.$slots.prepend || e.$slots.append,
                            "el-input-group--append": e.$slots.append,
                            "el-input-group--prepend": e.$slots.prepend,
                            "el-input--prefix": e.$slots.prefix || e.prefixIcon,
                            "el-input--suffix": e.$slots.suffix || e.suffixIcon || e.clearable || e.showPassword
                        }],
                        on: {
                            mouseenter: function(t) {
                                e.hovering = !0
                            },
                            mouseleave: function(t) {
                                e.hovering = !1
                            }
                        }
                    }, ["textarea" !== e.type ? [e.$slots.prepend ? n("div", {
                        staticClass: "el-input-group__prepend"
                    }, [e._t("prepend")], 2) : e._e(), e._v(" "), "textarea" !== e.type ? n("input", e._b({
                        ref: "input",
                        staticClass: "el-input__inner",
                        attrs: {
                            tabindex: e.tabindex,
                            type: e.showPassword ? e.passwordVisible ? "text" : "password" : e.type,
                            disabled: e.inputDisabled,
                            readonly: e.readonly,
                            autocomplete: e.autoComplete || e.autocomplete,
                            "aria-label": e.label
                        },
                        on: {
                            compositionstart: e.handleCompositionStart,
                            compositionend: e.handleCompositionEnd,
                            change: e.handleInput,
                            focus: e.handleFocus,
                            blur: e.handleBlur
                        }
                    }, "input", e.$attrs, !1)) : e._e(), e._v(" "), e.$slots.prefix || e.prefixIcon ? n("span", {
                        staticClass: "el-input__prefix"
                    }, [e._t("prefix"), e._v(" "), e.prefixIcon ? n("i", {
                        staticClass: "el-input__icon",
                        class: e.prefixIcon
                    }) : e._e()], 2) : e._e(), e._v(" "), e.getSuffixVisible() ? n("span", {
                        staticClass: "el-input__suffix"
                    }, [n("span", {
                        staticClass: "el-input__suffix-inner"
                    }, [e.showClear && e.showPwdVisible && e.isWordLimitVisible ? e._e() : [e._t("suffix"), e._v(" "), e.suffixIcon ? n("i", {
                        staticClass: "el-input__icon",
                        class: e.suffixIcon
                    }) : e._e()], e._v(" "), e.showClear ? n("i", {
                        staticClass: "el-input__icon el-icon-circle-close el-input__clear",
                        on: {
                            click: e.clear
                        }
                    }) : e._e(), e._v(" "), e.showPwdVisible ? n("i", {
                        staticClass: "el-input__icon el-icon-view el-input__clear",
                        on: {
                            click: e.handlePasswordVisible
                        }
                    }) : e._e(), e._v(" "), e.isWordLimitVisible ? n("span", {
                        staticClass: "el-input__count"
                    }, [n("span", {
                        staticClass: "el-input__count-inner"
                    }, [e._v(e._s(e.textLength) + "/" + e._s(e.upperLimit))])]) : e._e()], 2), e._v(" "), e.validateState ? n("i", {
                        staticClass: "el-input__icon",
                        class: ["el-input__validateIcon", e.validateIcon]
                    }) : e._e()]) : e._e(), e._v(" "), e.$slots.append ? n("div", {
                        staticClass: "el-input-group__append"
                    }, [e._t("append")], 2) : e._e()] : n("textarea", e._b({
                        ref: "textarea",
                        staticClass: "el-textarea__inner",
                        style: e.textareaStyle,
                        attrs: {
                            tabindex: e.tabindex,
                            disabled: e.inputDisabled,
                            readonly: e.readonly,
                            autocomplete: e.autoComplete || e.autocomplete,
                            "aria-label": e.label
                        },
                        on: {
                            compositionstart: e.handleCompositionStart,
                            compositionend: e.handleCompositionEnd,
                            change: e.handleChange,
                            focus: e.handleFocus,
                            blur: e.handleBlur
                        }
                    }, "textarea", e.$attrs, !1)), e._v(" "), e.isWordLimitVisible && "textarea" === e.type ? n("span", {
                        staticClass: "el-input__count"
                    }, [e._v(e._s(e.textLength) + "/" + e._s(e.upperLimit))]) : e._e()], 2)
                },
                _ = [],
                v = n("3046"),
                m = n("6b85"),
                b = "\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n",
                g = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing"];

            function w(e) {
                var t = window.getComputedStyle(e),
                    n = t.getPropertyValue("box-sizing"),
                    a = parseFloat(t.getPropertyValue("padding-bottom")) + parseFloat(t.getPropertyValue("padding-top")),
                    r = parseFloat(t.getPropertyValue("border-bottom-width")) + parseFloat(t.getPropertyValue("border-top-width")),
                    i = g.map((function(e) {
                        return "".concat(e, ":").concat(t.getPropertyValue(e))
                    })).join(";");
                return {
                    contextStyle: i,
                    paddingSize: a,
                    borderSize: r,
                    boxSizing: n
                }
            }

            function y(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                a || (a = document.createElement("textarea"), document.body.appendChild(a));
                var r = w(e),
                    i = r.paddingSize,
                    o = r.borderSize,
                    s = r.boxSizing,
                    l = r.contextStyle;
                a.setAttribute("style", "".concat(l, ";").concat(b)), a.value = e.value || e.placeholder || "";
                var c = a.scrollHeight,
                    u = {};
                "border-box" === s ? c += o : "content-box" === s && (c -= i), a.value = "";
                var d = a.scrollHeight - i;
                if (null !== t) {
                    var p = d * t;
                    "border-box" === s && (p = p + i + o), c = Math.max(p, c), u.minHeight = "".concat(p, "px")
                }
                if (null !== n) {
                    var h = d * n;
                    "border-box" === s && (h = h + i + o), c = Math.min(h, c)
                }
                return u.height = "".concat(c, "px"), a.parentNode && a.parentNode.removeChild(a), a = null, u
            }
            var x = n("1ae1"),
                k = {
                    name: "ElInput",
                    componentName: "ElInput",
                    mixins: [v["a"], m["a"]],
                    inheritAttrs: !1,
                    inject: {
                        elForm: {
                            default: ""
                        },
                        elFormItem: {
                            default: ""
                        }
                    },
                    data: function() {
                        return {
                            textareaCalcStyle: {},
                            hovering: !1,
                            focused: !1,
                            isComposing: !1,
                            passwordVisible: !1
                        }
                    },
                    props: {
                        value: [String, Number],
                        size: String,
                        resize: String,
                        form: String,
                        disabled: Boolean,
                        readonly: Boolean,
                        type: {
                            type: String,
                            default: "text"
                        },
                        autosize: {
                            type: [Boolean, Object],
                            default: !1
                        },
                        autocomplete: {
                            type: String,
                            default: "off"
                        },
                        autoComplete: {
                            type: String,
                            validator: function(e) {
                                return !0
                            }
                        },
                        validateEvent: {
                            type: Boolean,
                            default: !0
                        },
                        suffixIcon: String,
                        prefixIcon: String,
                        label: String,
                        clearable: {
                            type: Boolean,
                            default: !1
                        },
                        showPassword: {
                            type: Boolean,
                            default: !1
                        },
                        showWordLimit: {
                            type: Boolean,
                            default: !1
                        },
                        tabindex: String
                    },
                    computed: {
                        _elFormItemSize: function() {
                            return (this.elFormItem || {}).elFormItemSize
                        },
                        validateState: function() {
                            return this.elFormItem ? this.elFormItem.validateState : ""
                        },
                        needStatusIcon: function() {
                            return !!this.elForm && this.elForm.statusIcon
                        },
                        validateIcon: function() {
                            return {
                                validating: "el-icon-loading",
                                success: "el-icon-circle-check",
                                error: "el-icon-circle-close"
                            } [this.validateState]
                        },
                        textareaStyle: function() {
                            return Object(x["a"])({}, this.textareaCalcStyle, {
                                resize: this.resize
                            })
                        },
                        inputSize: function() {
                            return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
                        },
                        inputDisabled: function() {
                            return this.disabled || (this.elForm || {}).disabled
                        },
                        nativeInputValue: function() {
                            return null === this.value || void 0 === this.value ? "" : String(this.value)
                        },
                        showClear: function() {
                            return this.clearable && !this.inputDisabled && !this.readonly && this.nativeInputValue && (this.focused || this.hovering)
                        },
                        showPwdVisible: function() {
                            return this.showPassword && !this.inputDisabled && !this.readonly && (!!this.nativeInputValue || this.focused)
                        },
                        isWordLimitVisible: function() {
                            return this.showWordLimit && this.$attrs.maxlength && ("text" === this.type || "textarea" === this.type) && !this.inputDisabled && !this.readonly && !this.showPassword
                        },
                        upperLimit: function() {
                            return this.$attrs.maxlength
                        },
                        textLength: function() {
                            return "number" === typeof this.value ? String(this.value).length : (this.value || "").length
                        },
                        inputExceed: function() {
                            return this.isWordLimitVisible && this.textLength > this.upperLimit
                        }
                    },
                    watch: {
                        value: function(e) {
                            this.$nextTick(this.resizeTextarea), this.validateEvent && (console.log("调用了。", e), this.dispatch("ElFormItem", "el.form.change", [e]), this.$emit("change", [e]))
                        },
                        nativeInputValue: function() {
                            this.setNativeInputValue()
                        },
                        type: function() {
                            var e = this;
                            this.$nextTick((function() {
                                e.setNativeInputValue(), e.resizeTextarea(), e.updateIconOffset()
                            }))
                        }
                    },
                    methods: {
                        focus: function() {
                            this.getInput().focus()
                        },
                        blur: function() {
                            this.getInput().blur()
                        },
                        getMigratingConfig: function() {
                            return {
                                props: {
                                    icon: "icon is removed, use suffix-icon / prefix-icon instead.",
                                    "on-icon-click": "on-icon-click is removed."
                                },
                                events: {
                                    click: "click is removed."
                                }
                            }
                        },
                        handleBlur: function(e) {
                            this.focused = !1, this.$emit("blur", e), this.validateEvent && this.dispatch("ElFormItem", "el.form.blur", [this.value])
                        },
                        select: function() {
                            this.getInput().select()
                        },
                        resizeTextarea: function() {
                            if (!this.$isServer) {
                                var e = this.autosize,
                                    t = this.type;
                                if ("textarea" === t)
                                    if (e) {
                                        var n = e.minRows,
                                            a = e.maxRows;
                                        this.textareaCalcStyle = y(this.$refs.textarea, n, a)
                                    } else this.textareaCalcStyle = {
                                        minHeight: y(this.$refs.textarea).minHeight
                                    }
                            }
                        },
                        setNativeInputValue: function() {
                            var e = this.getInput();
                            e && e.value !== this.nativeInputValue && (e.value = this.nativeInputValue)
                        },
                        handleFocus: function(e) {
                            this.focused = !0, this.$emit("focus", e)
                        },
                        handleCompositionStart: function() {
                            this.isComposing = !0
                        },
                        handleCompositionEnd: function(e) {
                            this.isComposing = !1, this.handleInput(e)
                        },
                        handleInput: function(e) {
                            this.isComposing || e.target.value !== this.nativeInputValue && (this.$emit("input", e.target.value), this.$nextTick(this.setNativeInputValue))
                        },
                        handleChange: function(e) {
                            this.$emit("change", e.target.value)
                        },
                        calcIconOffset: function(e) {
                            var t = [].slice.call(this.$el.querySelectorAll(".el-input__".concat(e)) || []);
                            if (t.length) {
                                for (var n = null, a = 0; a < t.length; a++)
                                    if (t[a].parentNode === this.$el) {
                                        n = t[a];
                                        break
                                    } if (n) {
                                    var r = {
                                            suffix: "append",
                                            prefix: "prepend"
                                        },
                                        i = r[e];
                                    this.$slots[i] ? n.style.transform = "translateX(".concat("suffix" === e ? "-" : "").concat(this.$el.querySelector(".el-input-group__".concat(i)).offsetWidth, "px)") : n.removeAttribute("style")
                                }
                            }
                        },
                        updateIconOffset: function() {
                            this.calcIconOffset("prefix"), this.calcIconOffset("suffix")
                        },
                        clear: function() {
                            this.$emit("input", ""), this.$emit("change", ""), this.$emit("clear")
                        },
                        handlePasswordVisible: function() {
                            this.passwordVisible = !this.passwordVisible, this.focus()
                        },
                        getInput: function() {
                            return this.$refs.input || this.$refs.textarea
                        },
                        getSuffixVisible: function() {
                            return this.$slots.suffix || this.suffixIcon || this.showClear || this.showPassword || this.isWordLimitVisible || this.validateState && this.needStatusIcon
                        }
                    },
                    created: function() {
                        this.$on("inputSelect", this.select)
                    },
                    mounted: function() {
                        this.setNativeInputValue(), this.resizeTextarea(), this.updateIconOffset()
                    },
                    updated: function() {
                        this.$nextTick(this.updateIconOffset)
                    }
                },
                C = k,
                D = n("5d22"),
                I = Object(D["a"])(C, f, _, !1, null, null, null),
                O = I.exports,
                S = n("7f43"),
                $ = n.n(S);

            function j(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? j(Object(n), !0).forEach((function(t) {
                        P(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function P(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function L(e, t, n, a, r, i, o) {
                try {
                    var s = e[i](o),
                        l = s.value
                } catch (c) {
                    return void n(c)
                }
                s.done ? t(l) : Promise.resolve(l).then(a, r)
            }

            function q(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(a, r) {
                        var i = e.apply(t, n);

                        function o(e) {
                            L(i, a, r, o, s, "next", e)
                        }

                        function s(e) {
                            L(i, a, r, o, s, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function z(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = R(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var a = 0,
                            r = function() {};
                        return {
                            s: r,
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
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, o = !0,
                    s = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        s = !0, i = e
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function R(e, t) {
                if (e) {
                    if ("string" === typeof e) return N(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? N(e, t) : void 0
                }
            }

            function N(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }
            var T = n("73ef"),
                V = {
                    components: {
                        AssignDialog: c["a"],
                        Barcode: u["a"],
                        Qrcode: d["a"],
                        ExceptionReason: h["a"],
                        "zlj-input": O
                    },
                    data: function() {
                        return {
                            tableData: [],
                            search: {
                                type_id: 1,
                                option_id: 3,
                                transfer_order_no: null
                            },
                            disabedType: !1,
                            dict: {
                                type: [],
                                option: []
                            },
                            loading: !1,
                            order: {},
                            exceptionForm: {
                                product_id: null,
                                type_id: null,
                                brand_id: null,
                                model_id: null,
                                model_props: null,
                                imei: null,
                                cost_price: null,
                                reason: null,
                                remark: null
                            },
                            selectRows: [],
                            exceptionLoading: !1,
                            assignForm: {
                                to_node_id: 3
                            },
                            showAssignDialog: !1,
                            maxNum: 0,
                            batch: {
                                source: null,
                                fineness: null,
                                network: null
                            },
                            listenList: [],
                            barcodeInfo: [],
                            imeiDup: [],
                            checkRowIndexs: [],
                            checkRowIndexsErrorMsg: {},
                            showExceptionDialog: !1,
                            qrcode_data: null,
                            qrcode_res: {},
                            qrcode_dict: {},
                            showQrcodeDialog: !1,
                            qrcodeLoading: !1,
                            wsChannel: null,
                            colorImg: {},
                            receivePropList: [],
                            udids: [],
                            business_line: 1,
                            showC2CExceptionDialog: !1,
                            C2CList: [{
                                phoneQcCode: null,
                                passwordQcCode: null,
                                passwordType: 1
                            }]
                        }
                    },
                    computed: {
                        unionNetwork: function() {
                            var e, t = [],
                                n = [],
                                a = z(this.tableData);
                            try {
                                for (a.s(); !(e = a.n()).done;) {
                                    var r = e.value;
                                    if (r.props_data) {
                                        var i, o = z(r.props_data);
                                        try {
                                            for (o.s(); !(i = o.n()).done;) {
                                                var s = i.value;
                                                if (8 == s.pnid) {
                                                    var l, c = z(s.list);
                                                    try {
                                                        for (c.s(); !(l = c.n()).done;) {
                                                            var u = l.value; - 1 == n.indexOf(u.pvid) && (n.push(u.pvid), t.push(u))
                                                        }
                                                    } catch (d) {
                                                        c.e(d)
                                                    } finally {
                                                        c.f()
                                                    }
                                                }
                                            }
                                        } catch (d) {
                                            o.e(d)
                                        } finally {
                                            o.f()
                                        }
                                    }
                                }
                            } catch (d) {
                                a.e(d)
                            } finally {
                                a.f()
                            }
                            return t
                        }
                    },
                    watch: {
                        tableData: {
                            handler: function() {
                                var e = q(s.a.mark((function e(t, n) {
                                    var a, r;
                                    return s.a.wrap((function(e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                if (e.prev = 0, !(this.tableData.length > 0)) {
                                                    e.next = 10;
                                                    break
                                                }
                                                if (a = [], this.tableData.forEach((function(e, t) {
                                                        null != e.model_data.default_value && a.push(e.model_data.default_value)
                                                    })), 0 != a.length) {
                                                    e.next = 6;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 6:
                                                return e.next = 8, Object(l["f"])({
                                                    model_ids: a
                                                });
                                            case 8:
                                                r = e.sent, this.colorImg = r.data;
                                            case 10:
                                                e.next = 15;
                                                break;
                                            case 12:
                                                e.prev = 12, e.t0 = e["catch"](0), console.log(e.t0);
                                            case 15:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this, [
                                        [0, 12]
                                    ])
                                })));

                                function t(t, n) {
                                    return e.apply(this, arguments)
                                }
                                return t
                            }(),
                            deep: !0
                        },
                        "search.option_id": function(e) {
                            var t = this;
                            2 === e && this.$nextTick((function() {
                                t.$refs["qrcodeRef"].focus()
                            }))
                        }
                    },
                    mounted: function() {
                        this.$refs["order_no"].focus(), this.getTypeList(), this.$route.query.no && (this.search.transfer_order_no = this.$route.query.no, this.getDetail())
                    },
                    destroyed: function() {
                        window.Echo.leaveChannel(this.wsChannel)
                    },
                    methods: {
                        getTypeList: function() {
                            var e = q(s.a.mark((function e() {
                                var t;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(l["m"])();
                                        case 2:
                                            t = e.sent, this.dict.type = t.data.type_list, this.dict.option = t.data.option_list;
                                        case 5:
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
                        getDetail: function() {
                            var e = q(s.a.mark((function e() {
                                var t = this;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, this.loading = !0, e.next = 4, this.getInOrderDetail();
                                        case 4:
                                            setTimeout((function() {
                                                t.getProductList(), t.search.transfer_order_no = null
                                            }), 500), this.loading = !1, e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e["catch"](0), this.loading = !1;
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 8]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        getProducts: function() {
                            var e = q(s.a.mark((function e() {
                                var t, n, a, r, i;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, this.order.transfer_order_no) {
                                                e.next = 4;
                                                break
                                            }
                                            return this.$message.warning("请输入流转单号！"), e.abrupt("return");
                                        case 4:
                                            return this.loading = !0, e.next = 7, Object(l["g"])({
                                                type_id: this.search.type_id,
                                                transfer_order_no: this.order.transfer_order_no
                                            });
                                        case 7:
                                            t = e.sent, n = null, this.order.supplier_info && 1 == this.order.supplier_info.is_independent_pricing && (n = 1), a = z(t.data);
                                            try {
                                                for (a.s(); !(r = a.n()).done;) i = r.value, i.product_cost = n
                                            } catch (o) {
                                                a.e(o)
                                            } finally {
                                                a.f()
                                            }
                                            t.data = t.data.map((function(e, t) {
                                                return e.index = T(), e.disabledImei = !!e.imei, e
                                            })), this.tableData = t.data, this.checkPropsInit(), this.loading = !1, e.next = 22;
                                            break;
                                        case 18:
                                            e.prev = 18, e.t0 = e["catch"](0), this.loading = !1, this.tableData = [];
                                        case 22:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 18]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        checkPropsInit: function() {
                            var e, t = z(this.tableData);
                            try {
                                for (t.s(); !(e = t.n()).done;) {
                                    var n, a = e.value,
                                        r = z(a.props_data);
                                    try {
                                        for (r.s(); !(n = r.n()).done;) {
                                            var i = n.value;
                                            12 == i.pnid ? i.default_value || (i.default_value = "26") : 8 == i.pnid && (i.default_value || (i.default_value = i.list[0].pvid + ""))
                                        }
                                    } catch (o) {
                                        r.e(o)
                                    } finally {
                                        r.f()
                                    }
                                }
                            } catch (o) {
                                t.e(o)
                            } finally {
                                t.f()
                            }
                        },
                        getInOrderDetail: function() {
                            var e = q(s.a.mark((function e() {
                                var t;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(l["j"])({
                                                transfer_order_no: this.search.transfer_order_no
                                            });
                                        case 2:
                                            t = e.sent, this.order = t.data, this.receivePropList = t.data.receive_props_list, this.business_line = t.data.business_line, this.maxNum = t.data.total_num - t.data.deal_num, 0 != t.data.type_id ? (this.search.type_id = t.data.type_id, this.disabedType = !0) : (this.search.type_id = 1, this.disabedType = !1), 1 == t.data.brand_id ? this.search.option_id = 1 : this.search.option_id = 3, 1 == t.data.is_out_input && (this.search.option_id = 1);
                                        case 10:
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
                        getBrandByType: function() {
                            var e = q(s.a.mark((function e(t, n) {
                                var a;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(l["d"])({
                                                type_id: t.type_data.default_value
                                            });
                                        case 2:
                                            a = e.sent, t.brand_data.list = a.data.brand_list, t.brand_data.default_value = null;
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));

                            function t(t, n) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        getModelByBrand: function() {
                            var e = q(s.a.mark((function e(t, n) {
                                var a;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return this.tableData[n].props_data = null, e.next = 3, Object(l["i"])({
                                                type_id: t.type_data.default_value,
                                                brand_id: t.brand_data.default_value
                                            });
                                        case 3:
                                            a = e.sent, this.tableData[n].model_data.list = a.data.model_list, this.tableData[n].model_data.default_value = null;
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t(t, n) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        getProps: function() {
                            var e = q(s.a.mark((function e(t) {
                                var n, a, r, i;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t.props_data = null, e.next = 3, Object(l["k"])({
                                                model_id: t.model_data.default_value
                                            });
                                        case 3:
                                            n = e.sent, a = z(n.data[t.model_data.default_value]);
                                            try {
                                                for (a.s(); !(r = a.n()).done;) i = r.value, 8 != i.pnid && 9 != i.pnid || (i.default_value = i.list[0].pvid + "")
                                            } catch (o) {
                                                a.e(o)
                                            } finally {
                                                a.f()
                                            }
                                            this.$set(t, "props_data", n.data[t.model_data.default_value]), this.handleImeiChange(t), this.business_line;
                                        case 9:
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
                        getShalouList: function() {
                            var e = q(s.a.mark((function e() {
                                var t, n = this;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, this.order.transfer_order_no) {
                                                e.next = 4;
                                                break
                                            }
                                            return this.$message.warning("请输入流转单号！"), e.abrupt("return");
                                        case 4:
                                            return this.loading = !0, [], -1 == this.listenList.indexOf(this.order.transfer_order_no) && (this.listenList.push(this.order.transfer_order_no), this.wsChannel = window.Echo.channel("shalou-callback-" + this.order.transfer_order_no), this.wsChannel.listen("ShalouCallback", function() {
                                                var e = q(s.a.mark((function e(t) {
                                                    var a;
                                                    return s.a.wrap((function(e) {
                                                        while (1) switch (e.prev = e.next) {
                                                            case 0:
                                                                console.log(t), t.product.type_data.default_value != n.search.type_id ? n.$message({
                                                                    message: "沙漏读到的分类和当前页面选择的分类不一致",
                                                                    type: "error",
                                                                    duration: 1e4
                                                                }) : t.transfer_order_no != n.order.transfer_order_no ? n.$alert("沙漏输入流转单与系统流转单不一致，不能录入。", "提示", {
                                                                    type: "warning",
                                                                    center: !0
                                                                }) : n.hasImei(t.product.imei) || (t.product.index = T(), n.tableData.unshift(t.product), 1 != t.product.brand_data.default_value && n.checkPropsInit(), n.validatePropsList(t.product.model_data, t.product.props_data, t.product.index), a = t.product.sbbs, n.udids.push(a)), n.business_line;
                                                            case 3:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }())), e.next = 9, Object(l["l"])({
                                                type_id: this.search.type_id,
                                                transfer_order_no: this.order.transfer_order_no
                                            });
                                        case 9:
                                            t = e.sent, this.loading = !1, t.data = t.data.map((function(e, t) {
                                                return e.index = T(), e.disabledImei = !!e.imei, e
                                            })), this.tableData = t.data, this.checkPropsInit(), e.next = 20;
                                            break;
                                        case 16:
                                            e.prev = 16, e.t0 = e["catch"](0), this.loading = !1, this.tableData = [];
                                        case 20:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 16]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        toolDownloadAppAll: function() {
                            var e = this;
                            0 !== this.udids.length ? this.udids.forEach((function(t) {
                                e.toolDownloadApp(t)
                            })) : this.$message.warning("UDID 为空，请重新插入手机")
                        },
                        toolActivatePhoneAll: function() {
                            var e = this;
                            0 !== this.udids.length ? this.udids.forEach((function(t) {
                                e.toolActivatePhone(t)
                            })) : this.$message.warning("UDID 为空，请重新插入手机")
                        },
                        toolFanActivatePhoneAll: function() {
                            var e = this;
                            0 !== this.udids.length ? this.udids.forEach((function(t) {
                                e.toolFanActivatePhone(t)
                            })) : this.$message.warning("UDID 为空，请重新插入手机")
                        },
                        toolDownloadApp: function(e) {
                            console.log("下放:" + e);
                            var t = {
                                operate_type: 1
                            };
                            return t.udid = e, t.data = {}, t.data.app_name = "录音机,旧去回收", this.handleToolOperate(t)
                        },
                        toolActivatePhone: function() {
                            var e = q(s.a.mark((function e(t) {
                                var n;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return console.log("激活:" + t), n = {}, n.operate_type = 3, n.udid = t, n.data = {}, n.data.type = 0, e.next = 8, this.handleToolOperate(n);
                                        case 8:
                                            return e.abrupt("return", e.sent);
                                        case 9:
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
                        toolFanActivatePhone: function() {
                            var e = q(s.a.mark((function e(t) {
                                var n;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return console.log("反激活:" + t), n = {}, n.operate_type = 3, n.udid = t, n.data = {}, n.data.type = 1, e.next = 8, this.handleToolOperate(n);
                                        case 8:
                                            return e.abrupt("return", e.sent);
                                        case 9:
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
                        handleToolOperate: function() {
                            var e = q(s.a.mark((function e(t) {
                                var n;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return console.log(333), n = $.a.create({
                                                withCredentials: !1
                                            }), n.interceptors.request.use((function(e) {
                                                return e.headers["Content-Type"] = "application/json", e
                                            }), (function(e) {
                                                return console.log(e), Promise.reject(e)
                                            })), e.prev = 3, e.next = 6, n({
                                                url: "https://127.0.0.1:8443/operate",
                                                method: "POST",
                                                data: t
                                            });
                                        case 6:
                                            return e.abrupt("return", e.sent);
                                        case 9:
                                            return e.prev = 9, e.t0 = e["catch"](3), console.log("调用助手失败,请确认是否开启助手"), e.abrupt("return");
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [3, 9]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        hasImei: function(e) {
                            var t, n = z(this.tableData);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var a = t.value;
                                    if (a.imei == e) return !0
                                }
                            } catch (r) {
                                n.e(r)
                            } finally {
                                n.f()
                            }
                            return !1
                        },
                        validParams: function(e) {
                            var t = this.tableData;
                            e && (t = e), this.imeiDup = [];
                            for (var n = !1, a = 0; a < this.tableData.length; a++)
                                for (var r = 0; r < t.length; r++) e ? this.tableData[a].imei && this.tableData[a].imei == t[r].imei && (this.imeiDup.push(this.tableData[a].index), n = !0) : a != r && this.tableData[a].imei && this.tableData[a].imei == t[r].imei && (this.imeiDup.push(this.tableData[a].index), n = !0);
                            n && this.$message.error("IMEI重复");
                            for (var i = [], o = 0; o < t.length; o++) {
                                var s = t[o],
                                    l = !0;
                                s.imei || (l = !1, this.imeiDup.push(s.index)), l && i.push(s)
                            }
                            return 0 != i.length || (this.$message.warning("表单信息不完整！"), !1)
                        },
                        checkTable: function() {
                            var e = q(s.a.mark((function e(t) {
                                var n, a, r;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            n = z(t), e.prev = 1, n.s();
                                        case 3:
                                            if ((a = n.n()).done) {
                                                e.next = 9;
                                                break
                                            }
                                            return r = a.value, e.next = 7, this.handleImeiChange(r);
                                        case 7:
                                            e.next = 3;
                                            break;
                                        case 9:
                                            e.next = 14;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e["catch"](1), n.e(e.t0);
                                        case 14:
                                            return e.prev = 14, n.f(), e.finish(14);
                                        case 17:
                                            return e.abrupt("return", !0);
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [1, 11, 14, 17]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        saveAndCreate: function() {
                            var e = q(s.a.mark((function e(t) {
                                var n, a, r = this;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return n = this.tableData, this.selectRows.length > 0 && (n = this.selectRows), e.next = 4, this.checkTable(n);
                                        case 4:
                                            if (a = e.sent, a) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.abrupt("return", !1);
                                        case 7:
                                            this.loading = !0, setTimeout(q(s.a.mark((function e() {
                                                var a, i, o, c, u, d, p, h, f, _, v;
                                                return s.a.wrap((function(e) {
                                                    while (1) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (e.prev = 0, !r.validParams()) {
                                                                e.next = 34;
                                                                break
                                                            }
                                                            for (a = {
                                                                    transfer_order_no: r.order.transfer_order_no,
                                                                    type_id: r.search.type_id,
                                                                    data: []
                                                                }, t && (a.node_id = r.assignForm.to_node_id, a.by_assign_user_id = r.assignForm.by_assign_user_id ? r.assignForm.by_assign_user_id : 0, a.remark = r.assignForm.remark), i = 0; i < n.length; i++) {
                                                                if (console.log(r.imeiDup), console.log("加入情况：", n[i].index), console.log(r.imeiDup.indexOf(n[i].index)), -1 == r.imeiDup.indexOf(n[i].index)) {
                                                                    o = JSON.parse(JSON.stringify(n[i])), c = [], u = z(o.props_data);
                                                                    try {
                                                                        for (u.s(); !(d = u.n()).done;) p = d.value, p.default_value && c.push({
                                                                            pnid: p.pnid,
                                                                            pvid: p.default_value
                                                                        })
                                                                    } catch (s) {
                                                                        u.e(s)
                                                                    } finally {
                                                                        u.f()
                                                                    }
                                                                    a.data.push({
                                                                        business_line: o.business_line,
                                                                        brand_id: o.brand_data.default_value,
                                                                        model_id: o.model_data.default_value,
                                                                        imei: o.imei,
                                                                        sn: 6 == o.brand_data.default_value ? o.sn : null,
                                                                        product_cost: o.product_cost,
                                                                        props_data: c,
                                                                        new_product: o.new_product ? 1 : 0,
                                                                        qc_code: o.qc_code,
                                                                        zz_color_id: o.zz_color_id
                                                                    })
                                                                }
                                                                console.log("获取到的Data:", a.data)
                                                            }
                                                            if (0 != a.data.length) {
                                                                e.next = 9;
                                                                break
                                                            }
                                                            return r.$message.error("没有合法的行数据"), r.loading = !1, e.abrupt("return", !1);
                                                        case 9:
                                                            if (r.loading = !0, h = null, !t) {
                                                                e.next = 25;
                                                                break
                                                            }
                                                            if (1 != r.search.option_id || 1 != r.order.is_out_input) {
                                                                e.next = 20;
                                                                break
                                                            }
                                                            return a.is_out_input = 1, a.data = a.data.map((function(e) {
                                                                return e.product_id = 0, e
                                                            })), e.next = 17, Object(l["o"])(a);
                                                        case 17:
                                                            h = e.sent, e.next = 23;
                                                            break;
                                                        case 20:
                                                            return e.next = 22, Object(l["n"])(a);
                                                        case 22:
                                                            h = e.sent;
                                                        case 23:
                                                            e.next = 28;
                                                            break;
                                                        case 25:
                                                            return e.next = 27, Object(l["p"])(a);
                                                        case 27:
                                                            h = e.sent;
                                                        case 28:
                                                            r.$message({
                                                                message: h.msg,
                                                                type: "success",
                                                                duration: 1e4,
                                                                showClose: !0
                                                            }), r.clearSelectRow(a.data), r.loading = !1, t && (r.loading = !0, r.$router.push({
                                                                name: "type-in-flow-list",
                                                                query: {
                                                                    order_no: h.data ? h.data.transfer_order_no : null
                                                                }
                                                            })), e.next = 36;
                                                            break;
                                                        case 34:
                                                            r.loading = !1, console.log("校验失败！");
                                                        case 36:
                                                            e.next = 44;
                                                            break;
                                                        case 38:
                                                            e.prev = 38, e.t0 = e["catch"](0), console.log("222", e.t0), f = e.t0.match(/\[(.+?)\]/g), f && f.length > 0 ? (_ = f[0].substr(1, f[0].length - 2).split(","), v = _.map((function(e) {
                                                                return {
                                                                    imei: e
                                                                }
                                                            })), r.validParams(v), r.checkDanger(0, v)) : r.checkDanger(1), r.loading = !1;
                                                        case 44:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e, null, [
                                                    [0, 38]
                                                ])
                                            }))), 500);
                                        case 9:
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
                        checkDanger: function(e, t) {
                            t && (t = t.map((function(e) {
                                return e.imei
                            })).join(","));
                            var n = this.tableData;
                            this.selectRows.length > 0 && (n = this.selectRows);
                            for (var a = 0; a < n.length; a++) {
                                var r = n[a];
                                r.imei ? 1 == e ? this.handleImeiChange(r) : 0 == e && (console.log("校验：", t), t && t.indexOf(r.imei) > -1 && this.imeiDup.push(r.index)) : this.imeiDup.push(r.index)
                            }
                        },
                        openException: function() {
                            if (this.selectRows.length > 0) {
                                var e, t = z(this.selectRows);
                                try {
                                    for (t.s(); !(e = t.n()).done;) {
                                        var n = e.value;
                                        if (!n.model_data.default_value) return void this.$message.warning("型号不能为空！");
                                        var a, r = z(n.props_data);
                                        try {
                                            for (r.s(); !(a = r.n()).done;) {
                                                var i = a.value;
                                                if ((5 == i.pnid || 10 == i.pnid || 11 == i.pnid) && !i.default_value) return void this.$message.warning("颜色和内存不能为空！")
                                            }
                                        } catch (v) {
                                            r.e(v)
                                        } finally {
                                            r.f()
                                        }
                                    }
                                } catch (v) {
                                    t.e(v)
                                } finally {
                                    t.f()
                                }
                                if (!this.selectRows[0].product_cost) return void this.$message.warning("请输入成本价");
                                this.showExceptionDialog = !0;
                                var o, s = [],
                                    l = z(this.selectRows);
                                try {
                                    for (l.s(); !(o = l.n()).done;) {
                                        var c, u = o.value,
                                            d = [],
                                            p = [],
                                            h = z(u.props_data);
                                        try {
                                            for (h.s(); !(c = h.n()).done;) {
                                                var f = c.value;
                                                f.default_value && (d.push(f.pnid + ":" + f.default_value), p.push("【" + this.getPropsValue(u.props_data, f.pnid) + "】"))
                                            }
                                        } catch (v) {
                                            h.e(v)
                                        } finally {
                                            h.f()
                                        }
                                        var _ = {
                                            product_id: 0,
                                            type_id: u.type_data.default_value,
                                            type_name: u.type_data.list.type_name,
                                            brand_id: u.brand_data.default_value,
                                            brand_name: this.getSelectName(u.brand_data, "brand_id", "brand_name"),
                                            model_id: u.model_data.default_value,
                                            model_name: this.getSelectName(u.model_data, "model_id", "model_name"),
                                            model_props: d.join(";"),
                                            model_props_name: p.join(""),
                                            cost_price: u.product_cost,
                                            imei: u.imei,
                                            num: 1,
                                            reason: null,
                                            remark: null
                                        };
                                        s.push(_)
                                    }
                                } catch (v) {
                                    l.e(v)
                                } finally {
                                    l.f()
                                }
                                this.exceptionForm = s
                            } else this.$message.warning("请勾选至少一条记录！")
                        },
                        handleSelectionChange: function(e, t) {
                            console.log(t), this.selectRows = e
                        },
                        getSelectName: function(e, t, n) {
                            var a, r = z(e.list);
                            try {
                                for (r.s(); !(a = r.n()).done;) {
                                    var i = a.value;
                                    if (i[t] == e.default_value) return i[n]
                                }
                            } catch (o) {
                                r.e(o)
                            } finally {
                                r.f()
                            }
                            return ""
                        },
                        handleAssingDone: function() {
                            this.saveAndCreate(this.assignForm.to_node_id)
                        },
                        copyRow: function(e) {
                            var t = JSON.parse(JSON.stringify(e));
                            t.index = T(), this.tableData.unshift(t)
                        },
                        removeRow: function(e) {
                            for (var t = 0; t < this.imeiDup.length; t++) this.imeiDup[t] == e.row.index && this.imeiDup.splice(t, 1);
                            for (var n = 0; n < this.checkRowIndexs.length; n++) this.checkRowIndexs[n] == e.row.index && this.checkRowIndexs.splice(n, 1);
                            var a = e.row.index;
                            delete this.checkRowIndexsErrorMsg[a], this.tableData.splice(e.$index, 1)
                        },
                        clearSelectRow: function(e) {
                            if (e.length > 0)
                                for (var t = 0; t < this.tableData.length; t++)
                                    for (var n = this.tableData[t], a = 0; a < e.length; a++) {
                                        var r = e[a];
                                        if (n.imei == r.imei) {
                                            this.tableData.splice(t, 1), t--;
                                            break
                                        }
                                    }
                        },
                        handleSelectable: function(e, t) {
                            if (this.selectRows.length >= this.maxNum) {
                                var n, a = z(this.selectRows);
                                try {
                                    for (a.s(); !(n = a.n()).done;) {
                                        var r = n.value;
                                        if (r.index == e.index) return e.disabled = !1, !0
                                    }
                                } catch (i) {
                                    a.e(i)
                                } finally {
                                    a.f()
                                }
                                return e.disabled = !0, !1
                            }
                            return e.disabled = !1, !0
                        },
                        handleSelectAll: function() {
                            if (this.selectRows.length >= this.maxNum)
                                for (var e = 0; e < this.selectRows.length; e++) e >= this.maxNum && this.$refs["productTable"].toggleRowSelection(this.selectRows[e], !1)
                        },
                        getProductList: function() {
                            1 == this.search.option_id ? this.getShalouList() : 3 == this.search.option_id ? 1 == this.order.business_line && this.getProducts() : 2 == this.search.option_id && (this.tableData = [])
                        },
                        handleBatchSource: function(e) {
                            var t, n = z(this.tableData);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var a, r = t.value,
                                        i = z(r.props_data);
                                    try {
                                        for (i.s(); !(a = i.n()).done;) {
                                            var o = a.value;
                                            54 == o.pnid && this.$set(o, "default_value", String(e[0]))
                                        }
                                    } catch (s) {
                                        i.e(s)
                                    } finally {
                                        i.f()
                                    }
                                }
                            } catch (s) {
                                n.e(s)
                            } finally {
                                n.f()
                            }
                        },
                        handleBatchFineness: function(e) {
                            var t, n = z(this.tableData);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var a, r = t.value,
                                        i = z(r.props_data);
                                    try {
                                        for (i.s(); !(a = i.n()).done;) {
                                            var o = a.value;
                                            12 == o.pnid && this.$set(o, "default_value", String(e[0]))
                                        }
                                    } catch (s) {
                                        i.e(s)
                                    } finally {
                                        i.f()
                                    }
                                }
                            } catch (s) {
                                n.e(s)
                            } finally {
                                n.f()
                            }
                        },
                        handleBatchNetwork: function(e) {
                            var t, n = z(this.tableData);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var a, r = t.value,
                                        i = z(r.props_data);
                                    try {
                                        for (i.s(); !(a = i.n()).done;) {
                                            var o = a.value;
                                            if (8 == o.pnid) {
                                                var s, l = !0,
                                                    c = z(o.list);
                                                try {
                                                    for (c.s(); !(s = c.n()).done;) {
                                                        var u = s.value;
                                                        u.pvid == e[0] && (this.$set(o, "default_value", String(e[0])), l = !1)
                                                    }
                                                } catch (d) {
                                                    c.e(d)
                                                } finally {
                                                    c.f()
                                                }
                                                l && this.$set(o, "default_value", "")
                                            }
                                        }
                                    } catch (d) {
                                        i.e(d)
                                    } finally {
                                        i.f()
                                    }
                                }
                            } catch (d) {
                                n.e(d)
                            } finally {
                                n.f()
                            }
                        },
                        openBarcode: function() {
                            var e = q(s.a.mark((function e(t, n) {
                                var a, r, i, o, l, c = this;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            a = this.getSelectName(t.model_data, "model_id", "model_name"), r = this.getPropsValue(t.props_data, 11), i = this.getPropsValue(t.props_data, 10), o = this.getPropsValue(t.props_data, 9), l = {
                                                title: "".concat(a, " ").concat(r, "  ").concat(i, "  ").concat(o, "<br/>").concat(this.order.area_name),
                                                code: t.imei,
                                                id: t.imei
                                            }, this.barcodeInfo = [l], 2 == n && setTimeout((function() {
                                                c.$refs["print-qrcode-btn"].$el.click()
                                            }), 500);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t(t, n) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        printBarcode: function() {},
                        getPropsValue: function(e, t) {
                            var n, a = z(e);
                            try {
                                for (a.s(); !(n = a.n()).done;) {
                                    var r = n.value;
                                    if (r.pnid == t) return this.getSelectName(r, "pvid", "pvname")
                                }
                            } catch (i) {
                                a.e(i)
                            } finally {
                                a.f()
                            }
                        },
                        handleRowClick: function(e, t, n) {},
                        tableRowClassName: function(e) {
                            var t = e.row;
                            e.rowIndex;
                            return this.imeiDup.indexOf(t.index) > -1 || this.checkRowIndexs.indexOf(t.index) > -1 ? "danger-row" : ""
                        },
                        addRow: function() {
                            var e = {
                                brand_data: {
                                    default_value: null,
                                    list: []
                                },
                                model_data: {
                                    default_value: null,
                                    list: []
                                },
                                type_data: {
                                    default_value: this.search.type_id,
                                    list: []
                                },
                                imei: null,
                                product_cost: this.order.supplier_info && 1 == this.order.supplier_info.is_independent_pricing ? 1 : null,
                                product_id: 0,
                                props_data: []
                            };
                            this.getBrandByType(e, 0), this.tableData.unshift(E(E({}, e), {}, {
                                index: T()
                            }))
                        },
                        saveException: function() {
                            var e = q(s.a.mark((function e() {
                                var t, n, a, r, i, o, l, c, u, d, h;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            e.prev = 0, t = [], n = z(this.exceptionForm);
                                            try {
                                                for (n.s(); !(a = n.n()).done;) r = a.value, t.push({
                                                    product_id: r.product_id ? r.product_id : 0,
                                                    reason: r.reason,
                                                    remark: r.remark,
                                                    model_props: r.model_props,
                                                    cost_price: r.cost_price,
                                                    model_id: r.model_id,
                                                    brand_id: r.brand_id,
                                                    type_id: r.type_id,
                                                    num: 1,
                                                    imei: r.imei
                                                })
                                            } catch (s) {
                                                n.e(s)
                                            } finally {
                                                n.f()
                                            }
                                            return i = {
                                                transfer_order_id: this.order.id,
                                                products: t
                                            }, this.exceptionLoading = !0, e.next = 8, Object(p["b"])(i);
                                        case 8:
                                            o = e.sent, this.exceptionLoading = !1, this.$message.success(o.msg), this.showExceptionDialog = !1, l = z(this.selectRows);
                                            try {
                                                for (l.s(); !(c = l.n()).done;)
                                                    for (u = c.value, d = 0; d < this.tableData.length; d++) u.index == this.tableData[d].index && (this.tableData.splice(d, 1), h = this.imeiDup.indexOf(u.index), h > -1 && this.imeiDup.splice(h, 1))
                                            } catch (s) {
                                                l.e(s)
                                            } finally {
                                                l.f()
                                            }
                                            e.next = 19;
                                            break;
                                        case 16:
                                            e.prev = 16, e.t0 = e["catch"](0), this.exceptionLoading = !1;
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 16]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        handleClearData: function() {
                            this.tableData = []
                        },
                        updateIndex: function() {
                            this.tableData = this.tableData.map((function(e, t) {
                                return e.index = t, e
                            }))
                        },
                        handleImeiChange: function() {
                            var e = q(s.a.mark((function e(t) {
                                var n, a, r, i = this;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (console.log(t), n = !0, !t.imei) {
                                                e.next = 16;
                                                break
                                            }
                                            if (e.prev = 3, null != t.model_data.default_value) {
                                                e.next = 7;
                                                break
                                            }
                                            return this.$message.error("model_id 不能为空。"), e.abrupt("return", !1);
                                        case 7:
                                            return e.next = 9, Object(l["c"])({
                                                type_id: t.type_data.default_value,
                                                model_id: t.model_data.default_value,
                                                imei: t.imei
                                            });
                                        case 9:
                                            a = this.imeiDup.indexOf(t.index), a > -1 && (console.log("执行了。。", a), this.imeiDup.splice(a, 1), console.log(this.imeiDup)), e.next = 16;
                                            break;
                                        case 13:
                                            e.prev = 13, e.t0 = e["catch"](3), -1 == this.imeiDup.indexOf(t.index) && (this.imeiDup.push(t.index), n = !1);
                                        case 16:
                                            return 6 == t.brand_data.default_value && t.sn && (13 == t.sn.length || 12 == t.sn.length ? (r = this.imeiDup.indexOf(t.index), r > -1 && this.imeiDup.splice(r, 1)) : -1 == this.imeiDup.indexOf(t.index) && (this.imeiDup.push(t.index), this.$message.error("序列号必须为12或13位数"), n = !1)), t.props_data.forEach((function(e) {
                                                12 != e.pnid || e.default_value || (i.imeiDup.push(t.index), n = !1)
                                            })), e.abrupt("return", n);
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [3, 13]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        androidInputTool: function() {
                            var e = q(s.a.mark((function e() {
                                var t, n, a, r, i, o, c, u, d, p = this;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(l["b"])({
                                                input_str: this.qrcode_data
                                            });
                                        case 2:
                                            if (t = e.sent, 1 != t.data.is_need_add_mapping) {
                                                e.next = 11;
                                                break
                                            }
                                            n = z(t.data.rows);
                                            try {
                                                for (n.s(); !(a = n.n()).done;) r = a.value, 0 == r.shop_pv_id && (r.shop_pv_id = null)
                                            } catch (s) {
                                                n.e(s)
                                            } finally {
                                                n.f()
                                            }
                                            this.qrcode_res = t.data, this.showQrcodeDialog = !0, this.getMappingList(), e.next = 28;
                                            break;
                                        case 11:
                                            i = null, this.order.supplier_info && 1 == this.order.supplier_info.is_independent_pricing && (i = 1), t.data[0].product_cost = i, t.data[0].index = T(), o = !0, c = z(this.tableData);
                                            try {
                                                for (c.s(); !(u = c.n()).done;) d = u.value, d.imei == t.data[0].imei && (o = !1)
                                            } catch (s) {
                                                c.e(s)
                                            } finally {
                                                c.f()
                                            }
                                            if ([], this.business_line, !o) {
                                                e.next = 25;
                                                break
                                            }
                                            this.tableData.unshift(t.data[0]), this.checkPropsInit(), e.next = 27;
                                            break;
                                        case 25:
                                            return this.$message.warning("存在重复的IMEI"), e.abrupt("return");
                                        case 27:
                                            this.validatePropsList(t.data[0].model_data, t.data[0].props_data, t.data[0].index);
                                        case 28:
                                            this.qrcode_data = null, this.$nextTick((function() {
                                                if (1 !== p.order.business_line) {
                                                    var e = document.getElementById("tables_row_qc_code_input_".concat(p.tableData.length));
                                                    e && e.focus()
                                                }
                                            }));
                                        case 30:
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
                        validatePropsList: function(e, t, n) {
                            console.log(t);
                            var a = "5_" + e.default_value + ";",
                                r = [5, 11];
                            if (t.forEach((function(e) {
                                    if (r.includes(e.pnid)) {
                                        var t = e.pnid + "_" + e.default_value;
                                        a = a + t + ";"
                                    }
                                })), a = a.substr(0, a.length - 1), console.log(a), console.log(this.receivePropList), this.receivePropList.length <= 0) return !0;
                            var i = this.receivePropList.indexOf(a);
                            i > -1 ? this.receivePropList.splice(i, 1) : this.signCheckRowError(n, "核单不通过：型号或者内存不一致")
                        },
                        signCheckRowError: function(e, t) {
                            this.checkRowIndexs.push(e), this.checkRowIndexsErrorMsg[e] = t, this.$message.error(t)
                        },
                        getMappingList: function() {
                            var e = q(s.a.mark((function e() {
                                var t;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(l["h"])({
                                                mapping_data: this.formatParams(this.qrcode_res, !1)
                                            });
                                        case 2:
                                            t = e.sent, this.qrcode_dict = t.data;
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
                        saveQrcode: function() {
                            var e = q(s.a.mark((function e() {
                                var t, n, a, r, i, o, c;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, this.qrcodeLoading = !0, t = this.formatParams(JSON.parse(JSON.stringify(this.qrcode_res)), !0), !t) {
                                                e.next = 17;
                                                break
                                            }
                                            return e.next = 6, Object(l["q"])({
                                                mapping_data: t
                                            });
                                        case 6:
                                            n = e.sent, this.$message.success("保存成功！"), this.showQrcodeDialog = !1, a = null, this.order.supplier_info && 1 == this.order.supplier_info.is_independent_pricing && (a = 1), n.data[0].product_cost = a, n.data[0].index = T(), r = !0, i = z(this.tableData);
                                            try {
                                                for (i.s(); !(o = i.n()).done;) c = o.value, c.imei == n.data[0].imei && (r = !1)
                                            } catch (s) {
                                                i.e(s)
                                            } finally {
                                                i.f()
                                            }
                                            r ? (this.tableData.unshift(n.data[0]), this.checkPropsInit()) : this.$message.warning("存在重复的IMEI");
                                        case 17:
                                            this.qrcodeLoading = !1, e.next = 24;
                                            break;
                                        case 20:
                                            e.prev = 20, e.t0 = e["catch"](0), console.error(e.t0), this.qrcodeLoading = !1;
                                        case 24:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 20]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        formatParams: function(e, t) {
                            var n = {};
                            for (var a in e)
                                if ("rows" != a) n[a] = e[a];
                                else {
                                    var r, i = z(e[a]);
                                    try {
                                        for (i.s(); !(r = i.n()).done;) {
                                            var o = r.value;
                                            if (t && 1 == o.is_need_add) {
                                                if (!o.shop_pv_id) return console.log("=====111", o.type_name), this.$message.warning(o.type_name + "不能为空！"), null;
                                                var s, l = z(this.qrcode_dict[o.type]);
                                                try {
                                                    for (l.s(); !(s = l.n()).done;) {
                                                        var c = s.value;
                                                        c.id == o.shop_pv_id && (o.shop_name = c.name)
                                                    }
                                                } catch (u) {
                                                    l.e(u)
                                                } finally {
                                                    l.f()
                                                }
                                            }
                                            n[o.type] = JSON.parse(JSON.stringify(o))
                                        }
                                    } catch (u) {
                                        i.e(u)
                                    } finally {
                                        i.f()
                                    }
                                } return n
                        },
                        editImei: function() {
                            var e = q(s.a.mark((function e(t) {
                                var n, a;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.$prompt("请输入IMEI", "提示", {
                                                inputPattern: /[0-9|a-w|A-W]+/,
                                                errorMessage: "请输入正确的IMEI"
                                            });
                                        case 3:
                                            return n = e.sent, e.next = 6, Object(l["c"])({
                                                type_id: t.type_data.default_value,
                                                model_id: t.model_data.default_value,
                                                imei: n.value
                                            });
                                        case 6:
                                            return this.loading = !0, e.next = 9, Object(l["r"])({
                                                transfer_order_no: this.order.transfer_order_no,
                                                old_imei: t.imei,
                                                new_imei: n.value
                                            });
                                        case 9:
                                            a = e.sent, this.loading = !1, t.imei = n.value, this.$message.success(a.msg), e.next = 19;
                                            break;
                                        case 15:
                                            e.prev = 15, e.t0 = e["catch"](0), console.log(e.t0), this.loading = !1;
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 15]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        autoCreateImei: function() {
                            var e = new Date,
                                t = 0;
                            this.tableData.forEach((function(n) {
                                n.imei || (n.imei = "BP" + (e.getTime() + t), t++)
                            }))
                        },
                        handleQcChange: function() {
                            var e = q(s.a.mark((function e(t) {
                                var n, a, r = this;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.qc_code) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.prev = 2, e.next = 5, Object(l["e"])({
                                                transfer_order_no: this.order.transfer_order_no,
                                                qc_code: t.qc_code
                                            });
                                        case 5:
                                            return n = e.sent, t.business_line = n.data.business_line, t.business_line_name = n.data.business_line_name, e.next = 10, Object(l["s"])({
                                                model_id: t.model_data.default_value,
                                                qc_code: t.qc_code
                                            });
                                        case 10:
                                            a = e.sent, this.$set(t, "zz_colors", a.data.color_list), this.$nextTick((function() {
                                                r.$refs["qrcodeRef"].focus()
                                            })), e.next = 18;
                                            break;
                                        case 15:
                                            e.prev = 15, e.t0 = e["catch"](2), console.log(e.t0);
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [2, 15]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        openC2CException: function() {
                            this.showC2CExceptionDialog = !0
                        },
                        handleQcEnter: function(e, t) {
                            var n = this;
                            "phone" == t ? this.C2CList[e].phoneQcCode && (e == this.C2CList.length - 1 ? this.C2CList.push({
                                phoneQcCode: null
                            }) : void 0 === this.C2CList[e + 1].phoneQcCode && this.$set(this.C2CList[e + 1], "phoneQcCode", null), this.$nextTick((function() {
                                n.$refs["C2CList-phone-" + (e + 1)].focus()
                            }))) : "password" == t && this.C2CList[e].passwordQcCode && (e == this.C2CList.length - 1 ? this.C2CList.push({
                                passwordQcCode: null,
                                passwordType: 1
                            }) : void 0 === this.C2CList[e + 1].passwordQcCode && (this.$set(this.C2CList[e + 1], "passwordQcCode", null), this.$set(this.C2CList[e + 1], "passwordType", 1)), this.$nextTick((function() {
                                n.$refs["C2CList-password-" + (e + 1)].focus()
                            })))
                        },
                        handleC2CExceptionClick: function() {
                            var e = q(s.a.mark((function e() {
                                var t, n;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t = {
                                                transfer_order_id: this.order.id,
                                                abnormal_products: {
                                                    password_abnormal: [],
                                                    other_abnormal: []
                                                }
                                            }, this.C2CList.forEach((function(e) {
                                                e.phoneQcCode && t.abnormal_products.other_abnormal.push({
                                                    qc_code: e.phoneQcCode
                                                }), e.passwordQcCode && t.abnormal_products.password_abnormal.push({
                                                    qc_code: e.passwordQcCode,
                                                    password_type: e.passwordType
                                                })
                                            })), this.loading = !0, e.next = 6, Object(l["a"])(t);
                                        case 6:
                                            n = e.sent, this.$message.success(n.msg), this.showC2CExceptionDialog = !1, n && n.data.transfer_order_no && this.$router.push({
                                                path: "/type-in/flow",
                                                query: {
                                                    order_no: n.data.transfer_order_no
                                                }
                                            }), e.next = 15;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e["catch"](0), console.log(e.t0);
                                        case 15:
                                            this.loading = !1;
                                        case 16:
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
                        }()
                    }
                },
                A = V,
                F = (n("fb37"), Object(D["a"])(A, r, i, !1, null, "3a793b05", null));
            t["default"] = F.exports
        },
        2934: function(e, t, n) {
            "use strict";
            n.d(t, "p", (function() {
                return r
            })), n.d(t, "d", (function() {
                return i
            })), n.d(t, "i", (function() {
                return o
            })), n.d(t, "m", (function() {
                return s
            })), n.d(t, "b", (function() {
                return l
            })), n.d(t, "g", (function() {
                return c
            })), n.d(t, "k", (function() {
                return u
            })), n.d(t, "j", (function() {
                return d
            })), n.d(t, "h", (function() {
                return p
            })), n.d(t, "n", (function() {
                return h
            })), n.d(t, "a", (function() {
                return f
            })), n.d(t, "l", (function() {
                return _
            })), n.d(t, "q", (function() {
                return v
            })), n.d(t, "f", (function() {
                return m
            })), n.d(t, "o", (function() {
                return b
            })), n.d(t, "c", (function() {
                return g
            })), n.d(t, "e", (function() {
                return w
            }));
            var a = n("b775");

            function r(e) {
                return Object(a["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
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

            function s(e) {
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

            function h(e) {
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

            function _(e) {
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

            function w(e) {
                return Object(a["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: e
                })
            }
        },
        "5f75": function(e, t) {
            var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (n) {
                var a = new Uint8Array(16);
                e.exports = function() {
                    return n(a), a
                }
            } else {
                var r = new Array(16);
                e.exports = function() {
                    for (var e, t = 0; t < 16; t++) 0 === (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255;
                    return r
                }
            }
        },
        "73ef": function(e, t, n) {
            var a, r, i = n("5f75"),
                o = n("adda"),
                s = 0,
                l = 0;

            function c(e, t, n) {
                var c = t && n || 0,
                    u = t || [];
                e = e || {};
                var d = e.node || a,
                    p = void 0 !== e.clockseq ? e.clockseq : r;
                if (null == d || null == p) {
                    var h = i();
                    null == d && (d = a = [1 | h[0], h[1], h[2], h[3], h[4], h[5]]), null == p && (p = r = 16383 & (h[6] << 8 | h[7]))
                }
                var f = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                    _ = void 0 !== e.nsecs ? e.nsecs : l + 1,
                    v = f - s + (_ - l) / 1e4;
                if (v < 0 && void 0 === e.clockseq && (p = p + 1 & 16383), (v < 0 || f > s) && void 0 === e.nsecs && (_ = 0), _ >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                s = f, l = _, r = p, f += 122192928e5;
                var m = (1e4 * (268435455 & f) + _) % 4294967296;
                u[c++] = m >>> 24 & 255, u[c++] = m >>> 16 & 255, u[c++] = m >>> 8 & 255, u[c++] = 255 & m;
                var b = f / 4294967296 * 1e4 & 268435455;
                u[c++] = b >>> 8 & 255, u[c++] = 255 & b, u[c++] = b >>> 24 & 15 | 16, u[c++] = b >>> 16 & 255, u[c++] = p >>> 8 | 128, u[c++] = 255 & p;
                for (var g = 0; g < 6; ++g) u[c + g] = d[g];
                return t || o(u)
            }
            e.exports = c
        },
        adda: function(e, t) {
            for (var n = [], a = 0; a < 256; ++a) n[a] = (a + 256).toString(16).substr(1);

            function r(e, t) {
                var a = t || 0,
                    r = n;
                return [r[e[a++]], r[e[a++]], r[e[a++]], r[e[a++]], "-", r[e[a++]], r[e[a++]], "-", r[e[a++]], r[e[a++]], "-", r[e[a++]], r[e[a++]], "-", r[e[a++]], r[e[a++]], r[e[a++]], r[e[a++]], r[e[a++]], r[e[a++]]].join("")
            }
            e.exports = r
        },
        afe9: function(e, t, n) {
            "use strict";
            n.d(t, "m", (function() {
                return r
            })), n.d(t, "g", (function() {
                return i
            })), n.d(t, "j", (function() {
                return o
            })), n.d(t, "d", (function() {
                return s
            })), n.d(t, "i", (function() {
                return l
            })), n.d(t, "k", (function() {
                return c
            })), n.d(t, "s", (function() {
                return u
            })), n.d(t, "l", (function() {
                return d
            })), n.d(t, "p", (function() {
                return p
            })), n.d(t, "n", (function() {
                return h
            })), n.d(t, "c", (function() {
                return f
            })), n.d(t, "b", (function() {
                return _
            })), n.d(t, "h", (function() {
                return v
            })), n.d(t, "q", (function() {
                return m
            })), n.d(t, "f", (function() {
                return b
            })), n.d(t, "o", (function() {
                return g
            })), n.d(t, "r", (function() {
                return w
            })), n.d(t, "e", (function() {
                return y
            })), n.d(t, "a", (function() {
                return x
            }));
            var a = n("b775");

            function r(e) {
                return Object(a["a"])({
                    url: "/api/input/type_list",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(a["a"])({
                    url: "/api/input/manual_work",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(a["a"])({
                    url: "/api/input/scan_receive",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(a["a"])({
                    url: "/api/input/get_brand",
                    method: "get",
                    params: e
                })
            }

            function l(e) {
                return Object(a["a"])({
                    url: "/api/input/get_model",
                    method: "get",
                    params: e
                })
            }

            function c(e) {
                return Object(a["a"])({
                    url: "/api/input/get_props",
                    method: "get",
                    params: e
                })
            }

            function u(e) {
                return Object(a["a"])({
                    url: "/api/input/zz_colors",
                    method: "get",
                    params: e
                })
            }

            function d(e) {
                return Object(a["a"])({
                    url: "/api/input/get_sha_lou_result_by_transfer_order",
                    method: "get",
                    params: e
                })
            }

            function p(e) {
                return Object(a["a"])({
                    url: "/api/input/save",
                    method: "post",
                    data: e
                })
            }

            function h(e) {
                return Object(a["a"])({
                    url: "/api/input/save_and_transfer_store",
                    method: "post",
                    data: e
                })
            }

            function f(e) {
                return Object(a["a"])({
                    url: "/api/input/validate_imei_can_input",
                    method: "get",
                    params: e
                })
            }

            function _(e) {
                return Object(a["a"])({
                    url: "/api/input/android_input_tool",
                    method: "post",
                    data: e
                })
            }

            function v(e) {
                return Object(a["a"])({
                    url: "/api/input/mapping_list",
                    method: "post",
                    data: e
                })
            }

            function m(e) {
                return Object(a["a"])({
                    url: "/api/input/mapping_store",
                    method: "post",
                    data: e
                })
            }

            function b(e) {
                return Object(a["a"])({
                    url: "/api/product/model_color_picture_urls",
                    method: "get",
                    params: e
                })
            }

            function g(e) {
                return Object(a["a"])({
                    url: "/api/input/submit_edit_params_all",
                    method: "post",
                    data: e
                })
            }

            function w(e) {
                return Object(a["a"])({
                    url: "/api/input/change_purchase_order_detail_imei",
                    method: "post",
                    data: e
                })
            }

            function y(e) {
                return Object(a["a"])({
                    url: "/api/input/get_business_line",
                    method: "get",
                    params: e
                })
            }

            function x(e) {
                return Object(a["a"])({
                    url: "/api/input/abnormal_report_c2c",
                    method: "post",
                    data: e
                })
            }
        },
        bde5: function(e, t, n) {},
        f2f0: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            }));
            var a = n("b775");

            function r(e) {
                return Object(a["a"])({
                    url: "/api/input/abnormal_report_scan_tag",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(a["a"])({
                    url: "/api/input/abnormal_report",
                    method: "post",
                    data: e
                })
            }
        },
        fb37: function(e, t, n) {
            "use strict";
            n("bde5")
        }
    }
]);