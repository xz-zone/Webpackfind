(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-60f06be0"], {
        "19dd": function(e, t, a) {
            "use strict";
            a("dfa8")
        },
        2934: function(e, t, a) {
            "use strict";
            a.d(t, "p", (function() {
                return s
            })), a.d(t, "d", (function() {
                return n
            })), a.d(t, "i", (function() {
                return o
            })), a.d(t, "m", (function() {
                return i
            })), a.d(t, "b", (function() {
                return l
            })), a.d(t, "g", (function() {
                return c
            })), a.d(t, "k", (function() {
                return u
            })), a.d(t, "j", (function() {
                return d
            })), a.d(t, "h", (function() {
                return p
            })), a.d(t, "n", (function() {
                return h
            })), a.d(t, "a", (function() {
                return _
            })), a.d(t, "l", (function() {
                return m
            })), a.d(t, "q", (function() {
                return v
            })), a.d(t, "f", (function() {
                return f
            })), a.d(t, "o", (function() {
                return b
            })), a.d(t, "c", (function() {
                return g
            })), a.d(t, "e", (function() {
                return y
            }));
            var r = a("b775");

            function s(e) {
                return Object(r["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: e
                })
            }

            function n(e) {
                return Object(r["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(r["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(r["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: e
                })
            }

            function l(e) {
                return Object(r["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: e
                })
            }

            function c(e) {
                return Object(r["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: e
                })
            }

            function u(e) {
                return Object(r["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: e
                })
            }

            function d(e) {
                return Object(r["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: e
                })
            }

            function p(e) {
                return Object(r["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: e
                })
            }

            function h(e) {
                return Object(r["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: e
                })
            }

            function _(e) {
                return Object(r["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: e
                })
            }

            function m(e) {
                return Object(r["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: e
                })
            }

            function v(e) {
                return Object(r["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: e
                })
            }

            function f(e) {
                return Object(r["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: e
                })
            }

            function b(e) {
                return Object(r["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: e
                })
            }

            function g(e) {
                return Object(r["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: e
                })
            }

            function y(e) {
                return Object(r["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: e
                })
            }
        },
        "702f": function(e, t, a) {
            "use strict";
            a.r(t);
            var r = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "app-container"
                    }, [a("el-tabs", {
                        model: {
                            value: e.activeName,
                            callback: function(t) {
                                e.activeName = t
                            },
                            expression: "activeName"
                        }
                    }, [a("el-tab-pane", {
                        attrs: {
                            label: "全部",
                            name: "first"
                        }
                    }, [a("ListComponent")], 1), e._v(" "), a("el-tab-pane", {
                        attrs: {
                            name: "second",
                            lazy: !0
                        }
                    }, [a("span", {
                        attrs: {
                            slot: "label"
                        },
                        slot: "label"
                    }, [e._v("\n        已售\n        "), a("span", {
                        staticClass: "zlj-badge"
                    }, [e._v(e._s(e.totalObj["3"]))])]), e._v(" "), a("ListComponent", {
                        attrs: {
                            type: "3"
                        },
                        on: {
                            handleGoodsTotal: e.handleTotal
                        }
                    })], 1), e._v(" "), a("el-tab-pane", {
                        attrs: {
                            name: "third",
                            lazy: !0
                        }
                    }, [a("span", {
                        attrs: {
                            slot: "label"
                        },
                        slot: "label"
                    }, [e._v("\n        已上架\n        "), a("span", {
                        staticClass: "zlj-badge"
                    }, [e._v(e._s(e.totalObj["1"]))])]), e._v(" "), a("ListComponent", {
                        attrs: {
                            type: "1"
                        },
                        on: {
                            handleGoodsTotal: e.handleTotal
                        }
                    })], 1), e._v(" "), a("el-tab-pane", {
                        attrs: {
                            name: "fourth",
                            lazy: !0
                        }
                    }, [a("span", {
                        attrs: {
                            slot: "label"
                        },
                        slot: "label"
                    }, [e._v("\n        已下架\n        "), a("span", {
                        staticClass: "zlj-badge"
                    }, [e._v(e._s(e.totalObj["2"]))])]), e._v(" "), a("ListComponent", {
                        attrs: {
                            type: "2"
                        },
                        on: {
                            handleGoodsTotal: e.handleTotal
                        }
                    })], 1), e._v(" "), a("el-tab-pane", {
                        attrs: {
                            name: "five",
                            lazy: !0
                        }
                    }, [a("span", {
                        attrs: {
                            slot: "label"
                        },
                        slot: "label"
                    }, [e._v("\n        待上架\n        "), a("span", {
                        staticClass: "zlj-badge"
                    }, [e._v(e._s(e.totalObj["4"]))])]), e._v(" "), a("ListComponent", {
                        attrs: {
                            type: "4"
                        },
                        on: {
                            handleGoodsTotal: e.handleTotal
                        }
                    })], 1), e._v(" "), a("el-tab-pane", {
                        attrs: {
                            name: "six",
                            lazy: !0
                        }
                    }, [a("span", {
                        attrs: {
                            slot: "label"
                        },
                        slot: "label"
                    }, [e._v("\n        预上架\n        "), a("span", {
                        staticClass: "zlj-badge"
                    }, [e._v(e._s(e.totalObj["5"]))])]), e._v(" "), a("ListComponent", {
                        attrs: {
                            type: "5"
                        },
                        on: {
                            handleGoodsTotal: e.handleTotal
                        }
                    })], 1)], 1)], 1)
                },
                s = [],
                n = a("4838"),
                o = a.n(n),
                i = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", [a("div", {}, [a("el-row", {
                        staticClass: "header-search"
                    }, [a("el-col", {
                        staticClass: "wrap same-width",
                        attrs: {
                            span: 21
                        }
                    }, [a("div", {
                        staticClass: "search-item search-timer"
                    }, [a("el-date-picker", {
                        attrs: {
                            clearable: "",
                            type: "datetimerange",
                            "range-separator": "-",
                            "start-placeholder": "录入时间",
                            "end-placeholder": "结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"]
                        },
                        model: {
                            value: e.search.applyDate,
                            callback: function(t) {
                                e.$set(e.search, "applyDate", t)
                            },
                            expression: "search.applyDate"
                        }
                    })], 1), e._v(" "), a("div", {
                        staticClass: "search-item search-timer"
                    }, [a("el-date-picker", {
                        attrs: {
                            clearable: "",
                            type: "datetimerange",
                            "range-separator": "-",
                            "start-placeholder": "上架时间",
                            "end-placeholder": "结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"]
                        },
                        model: {
                            value: e.search.auditDate,
                            callback: function(t) {
                                e.$set(e.search, "auditDate", t)
                            },
                            expression: "search.auditDate"
                        }
                    })], 1), e._v(" "), a("div", {
                        staticClass: "search-item search-timer"
                    }, [a("el-date-picker", {
                        attrs: {
                            clearable: "",
                            type: "datetimerange",
                            "range-separator": "-",
                            "start-placeholder": "销售时间",
                            "end-placeholder": "结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"]
                        },
                        model: {
                            value: e.search.salesData,
                            callback: function(t) {
                                e.$set(e.search, "salesData", t)
                            },
                            expression: "search.salesData"
                        }
                    })], 1), e._v(" "), a("div", {
                        staticClass: "search-item"
                    }, [a("el-popover", {
                        ref: "popover",
                        attrs: {
                            placement: "bottom",
                            width: "200",
                            trigger: "focus"
                        }
                    }, [a("el-input", {
                        attrs: {
                            type: "textarea",
                            rows: "5",
                            clearable: "",
                            placeholder: "多行IMEI号/商品ID输入"
                        },
                        model: {
                            value: e.search.imei,
                            callback: function(t) {
                                e.$set(e.search, "imei", t)
                            },
                            expression: "search.imei"
                        }
                    })], 1), e._v(" "), a("ImeiSearch", {
                        directives: [{
                            name: "popover",
                            rawName: "v-popover:popover",
                            arg: "popover"
                        }],
                        ref: "imei",
                        attrs: {
                            placeholder: "IMEI号/商品ID"
                        },
                        on: {
                            done: function(t) {
                                e.getGoodsListData(1), e.$refs["imei"].select()
                            }
                        },
                        model: {
                            value: e.search.imei,
                            callback: function(t) {
                                e.$set(e.search, "imei", t)
                            },
                            expression: "search.imei"
                        }
                    })], 1), e._v(" "), a("div", {
                        staticClass: "search-item"
                    }, [a("el-input", {
                        attrs: {
                            placeholder: "商品名称"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getGoodsListData(1)
                            }
                        },
                        model: {
                            value: e.search.goodsName,
                            callback: function(t) {
                                e.$set(e.search, "goodsName", t)
                            },
                            expression: "search.goodsName"
                        }
                    })], 1), e._v(" "), a("div", {
                        staticClass: "search-item"
                    }, [a("el-input", {
                        attrs: {
                            placeholder: "采购单号"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getGoodsListData(1)
                            }
                        },
                        model: {
                            value: e.search.purchase,
                            callback: function(t) {
                                e.$set(e.search, "purchase", t)
                            },
                            expression: "search.purchase"
                        }
                    })], 1), e._v(" "), a("div", {
                        staticClass: "search-item"
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "业务类型"
                        },
                        model: {
                            value: e.search.allotType,
                            callback: function(t) {
                                e.$set(e.search, "allotType", t)
                            },
                            expression: "search.allotType"
                        }
                    }, e._l(e.dict.allotType, (function(e, t) {
                        return a("el-option", {
                            key: t,
                            attrs: {
                                label: e,
                                value: t
                            }
                        })
                    })), 1)], 1), e._v(" "), a("div", {
                        staticClass: "search-item type-brand-model"
                    }, [a("TypeBrandModel", {
                        attrs: {
                            level: 3,
                            dict: e.dict
                        },
                        on: {
                            modelChange: e.handleModelChange
                        },
                        model: {
                            value: e.search,
                            callback: function(t) {
                                e.search = t
                            },
                            expression: "search"
                        }
                    })], 1), e._v(" "), e._l(e.dict.props, (function(t) {
                        return a("div", {
                            key: t.pnid,
                            staticClass: "search-item"
                        }, [a("el-select", {
                            attrs: {
                                filterable: "",
                                clearable: "",
                                placeholder: t.pn_name
                            },
                            model: {
                                value: e.search.key_props[t.pnid],
                                callback: function(a) {
                                    e.$set(e.search.key_props, t.pnid, a)
                                },
                                expression: "search.key_props[item.pnid]"
                            }
                        }, e._l(t.list, (function(e, t) {
                            return a("el-option", {
                                key: t,
                                attrs: {
                                    label: e.pvname,
                                    value: e.pvid
                                }
                            })
                        })), 1)], 1)
                    })), e._v(" "), e.search.model_id ? a("div", {
                        staticClass: "search-item"
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "是否在保"
                        },
                        model: {
                            value: e.search.guarantee_id,
                            callback: function(t) {
                                e.$set(e.search, "guarantee_id", t)
                            },
                            expression: "search.guarantee_id"
                        }
                    }, [a("el-option", {
                        attrs: {
                            label: "在保",
                            value: 1
                        }
                    }), e._v(" "), a("el-option", {
                        attrs: {
                            label: "过保",
                            value: 0
                        }
                    })], 1)], 1) : e._e(), e._v(" "), a("div", {
                        staticClass: "search-item"
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "供应商"
                        },
                        model: {
                            value: e.search.supplier,
                            callback: function(t) {
                                e.$set(e.search, "supplier", t)
                            },
                            expression: "search.supplier"
                        }
                    }, e._l(e.search.supplierData, (function(e) {
                        return a("el-option", {
                            key: e.suppiler_id,
                            attrs: {
                                label: e.name,
                                value: e.suppiler_id
                            }
                        })
                    })), 1)], 1), e._v(" "), a("div", {
                        staticClass: "search-item"
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "所在位置"
                        },
                        model: {
                            value: e.search.location,
                            callback: function(t) {
                                e.$set(e.search, "location", t)
                            },
                            expression: "search.location"
                        }
                    }, e._l(e.dict.location, (function(e, t) {
                        return a("el-option", {
                            key: t,
                            attrs: {
                                label: e,
                                value: t
                            }
                        })
                    })), 1)], 1), e._v(" "), a("div", {
                        staticClass: "search-item"
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "在库状态"
                        },
                        model: {
                            value: e.search.stockStatus,
                            callback: function(t) {
                                e.$set(e.search, "stockStatus", t)
                            },
                            expression: "search.stockStatus"
                        }
                    }, [a("el-option", {
                        attrs: {
                            label: "在库",
                            value: 1
                        }
                    }), e._v(" "), a("el-option", {
                        attrs: {
                            label: "出库",
                            value: 2
                        }
                    })], 1)], 1), e._v(" "), null == e.type ? a("div", {
                        staticClass: "search-item"
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "商品状态"
                        },
                        model: {
                            value: e.search.goodsStatus,
                            callback: function(t) {
                                e.$set(e.search, "goodsStatus", t)
                            },
                            expression: "search.goodsStatus"
                        }
                    }, e._l(e.dict.goodsStatusData, (function(e, t) {
                        return a("el-option", {
                            key: t,
                            attrs: {
                                label: e,
                                value: t
                            }
                        })
                    })), 1)], 1) : e._e(), e._v(" "), a("div", {
                        staticClass: "search-item"
                    }, [a("Areas", {
                        model: {
                            value: e.search.area_ids,
                            callback: function(t) {
                                e.$set(e.search, "area_ids", t)
                            },
                            expression: "search.area_ids"
                        }
                    })], 1), e._v(" "), a("div", {
                        staticClass: "search-item"
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "商品类型"
                        },
                        model: {
                            value: e.search.productType,
                            callback: function(t) {
                                e.$set(e.search, "productType", t)
                            },
                            expression: "search.productType"
                        }
                    }, [a("el-option", {
                        attrs: {
                            label: "非标品",
                            value: 1
                        }
                    }), e._v(" "), a("el-option", {
                        attrs: {
                            label: "标品",
                            value: 4
                        }
                    })], 1)], 1), e._v(" "), a("div", {
                        staticClass: "search-item"
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "质检类型"
                        },
                        model: {
                            value: e.search.qcType,
                            callback: function(t) {
                                e.$set(e.search, "qcType", t)
                            },
                            expression: "search.qcType"
                        }
                    }, [a("el-option", {
                        attrs: {
                            label: "平台质检",
                            value: 1
                        }
                    }), e._v(" "), a("el-option", {
                        attrs: {
                            label: "自质检",
                            value: 2
                        }
                    })], 1)], 1), e._v(" "), a("div", {
                        staticClass: "search-item"
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "质检结果等级"
                        },
                        model: {
                            value: e.search.qcLevel,
                            callback: function(t) {
                                e.$set(e.search, "qcLevel", t)
                            },
                            expression: "search.qcLevel"
                        }
                    }, [a("el-option", {
                        attrs: {
                            label: "优品",
                            value: 1
                        }
                    }), e._v(" "), a("el-option", {
                        attrs: {
                            label: "优质良品",
                            value: 2
                        }
                    }), e._v(" "), a("el-option", {
                        attrs: {
                            label: "普通良品",
                            value: 3
                        }
                    })], 1)], 1), e._v(" "), a("div", {
                        staticClass: "search-item"
                    }, [a("el-input", {
                        attrs: {
                            placeholder: "质检码"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getGoodsListData(1)
                            }
                        },
                        model: {
                            value: e.search.qc_code,
                            callback: function(t) {
                                e.$set(e.search, "qc_code", t)
                            },
                            expression: "search.qc_code"
                        }
                    })], 1), e._v(" "), a("div", {
                        staticClass: "search-item"
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "业务线"
                        },
                        model: {
                            value: e.search.business_line,
                            callback: function(t) {
                                e.$set(e.search, "business_line", t)
                            },
                            expression: "search.business_line"
                        }
                    }, [a("el-option", {
                        attrs: {
                            label: "B2C",
                            value: 1
                        }
                    }), e._v(" "), a("el-option", {
                        attrs: {
                            label: "C2C",
                            value: 2
                        }
                    }), e._v(" "), a("el-option", {
                        attrs: {
                            label: "C2B",
                            value: 3
                        }
                    })], 1)], 1)], 2), e._v(" "), a("el-col", {
                        staticClass: "operat-btn",
                        attrs: {
                            span: 3
                        }
                    }, [a("el-button", {
                        attrs: {
                            type: "warning"
                        },
                        on: {
                            click: function(t) {
                                return e.getGoodsListData(1)
                            }
                        }
                    }, [e._v("查询")]), e._v(" "), a("el-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: e.handleClickReset
                        }
                    }, [e._v("重置")])], 1)], 1), e._v(" "), a("div", {
                        staticClass: "header-tools"
                    }, [a("div", [e.auth("A0601") ? a("el-button", {
                        attrs: {
                            type: "primary",
                            disabled: e.disabledParams
                        },
                        on: {
                            click: e.handleChangeArgument
                        }
                    }, [e._v("批量修改参数")]) : e._e(), e._v(" "), e.auth("A0602") ? a("el-button", {
                        attrs: {
                            type: "primary",
                            disabled: e.disabledPrcie
                        },
                        on: {
                            click: e.handleGround
                        }
                    }, [e._v("批量上架")]) : e._e(), e._v(" "), e.auth("A0603") ? a("el-button", {
                        attrs: {
                            type: "primary",
                            disabled: e.checkOutof
                        },
                        on: {
                            click: e.handleOutof
                        }
                    }, [e._v("批量下架")]) : e._e(), e._v(" "), e.auth("A0604") ? a("el-button", {
                        attrs: {
                            type: "primary",
                            loading: e.exporLoading
                        },
                        on: {
                            click: e.handleExporReport
                        }
                    }, [e._v("导出报表")]) : e._e()], 1), e._v(" "), a("div", [a("el-tag", {
                        attrs: {
                            type: "warning"
                        }
                    }, [e._v("已勾选：" + e._s(e.tableSelect.length))]), e._v(" "), a("el-tag", {
                        attrs: {
                            type: "warning"
                        }
                    }, [e._v("总数量：" + e._s(e.total))])], 1)]), e._v(" "), a("el-row", {
                        staticClass: "body-list"
                    }, [a("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [a("el-table", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: e.loading,
                            expression: "loading"
                        }],
                        attrs: {
                            data: e.tableData,
                            border: "",
                            "max-height": e.getClientHeight(425)
                        },
                        on: {
                            "selection-change": e.handleSelectionChange
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            type: "selection",
                            align: "center"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "product_id",
                            label: "商品ID",
                            width: "70",
                            align: "center"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            label: "商品",
                            width: "220",
                            "header-align": "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("div", {
                                    staticClass: "goods"
                                }, [a("img", {
                                    staticClass: "goods-pic",
                                    attrs: {
                                        src: t.row.main_pic,
                                        alt: ""
                                    }
                                }), e._v(" "), a("div", [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "goods-goods-detail",
                                            query: {
                                                id: t.row.product_id,
                                                view: "view",
                                                source: "goods"
                                            }
                                        }
                                    }
                                }, [a("div", {
                                    staticClass: "goods-name"
                                }, [e._v(e._s(t.row.product_name) + e._s(1 == t.row.is_imei_conflict ? "（型号错）" : ""))])]), e._v(" "), a("div", [e._v("imei:" + e._s(t.row.imei))]), e._v(" "), 6 == t.row.brand_id ? a("div", {
                                    staticClass: "text-value"
                                }, [e._v("序列号：" + e._s(t.row.sn))]) : e._e()], 1)])]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            label: "参数信息",
                            "header-align": "center",
                            width: "200"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return e._l(t.row.sale_props_str.split("\n"), (function(t, r) {
                                    return a("el-tag", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: !!t,
                                            expression: "!!item"
                                        }],
                                        key: r,
                                        staticStyle: {
                                            "margin-right": "3px"
                                        },
                                        attrs: {
                                            size: "mini"
                                        }
                                    }, [e._v(e._s(t))])
                                }))
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            label: "价格",
                            "header-align": "center",
                            width: "120"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("div", [e._v("成本: " + e._s(t.row.cost))]), e._v(" "), a("div", [e._v("售价: " + e._s(t.row.price))])]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            label: "供应商",
                            "header-align": "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("div", [e._v("采购单: " + e._s(t.row.purchase_order_no))]), e._v(" "), a("div", [e._v("业务: " + e._s(t.row.business_name))]), e._v(" "), a("div", [e._v("供应商: " + e._s(t.row.supplier_name))])]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            label: "仓库",
                            "header-align": "center",
                            width: "200"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("div", [a("span", [e._v("所在位置:")]), e._v(" "), a("span", [e._v("\n                  " + e._s(t.row.warehouse_area_name ? t.row.warehouse_area_name : "/") + "-\n                ")]), e._v(" "), a("span", [e._v("\n                  " + e._s(t.row.warehouse_name ? t.row.warehouse_name : "/") + "-\n                ")]), e._v(" "), a("span", [e._v("\n                  (" + e._s(t.row.operator_department ? t.row.operator_department : "/") + "-\n                ")]), e._v(" "), a("span", [e._v("\n                  " + e._s(t.row.operator_name ? t.row.operator_name : "/") + ")\n                ")])]), e._v(" "), a("div", {
                                    directives: [{
                                        name: "show",
                                        rawName: "v-show",
                                        value: t.row.storage_no,
                                        expression: "scope.row.storage_no"
                                    }],
                                    staticStyle: {
                                        "margin-top": "5px",
                                        "padding-top": "5px",
                                        "border-top": "1px dashed rgba(144, 144, 144, 0.21)"
                                    }
                                }, [e._v("\n                在库货位号：\n                "), a("span", [e._v(e._s(t.row.storage_no))])])]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "warehouse_status_name",
                            label: "在库状态",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("div", {
                                    class: {
                                        "color-success": "在库" == t.row.warehouse_status_name, "color-warning": "出库" == t.row.warehouse_status_name
                                    }
                                }, [e._v(e._s(t.row.warehouse_status_name))])]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "product_status_name",
                            label: "商品状态",
                            align: "center",
                            width: "85"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("div", {
                                    class: {
                                        "color-success": "上架" == t.row.product_status_name, "color-danger": "下架" == t.row.product_status_name, "color-warning": "预上架" == t.row.product_status_name
                                    }
                                }, [e._v(e._s(t.row.product_status_name))]), e._v(" "), 1 == t.row.has_cannot_up_shift_mark ? a("el-tag", {
                                    attrs: {
                                        size: "mini",
                                        type: "danger"
                                    }
                                }, [e._v("不能上架")]) : e._e()]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            label: "质检信息",
                            "header-align": "center",
                            width: "85"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("div", [e._v("类型: " + e._s(t.row.qc_type_name))]), e._v(" "), a("div", [e._v("结果等级: " + e._s(t.row.qc_level_name))]), e._v(" "), a("div", [e._v("质检码: " + e._s(t.row.qc_code))]), e._v(" "), a("div", [e._v("业务线: " + e._s(t.row.business_line))])]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            label: "时间",
                            width: "200",
                            "header-align": "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("div", [e._v("录入: " + e._s(t.row.buy_at))]), e._v(" "), "上架" == t.row.product_status_name ? a("div", [e._v("上架: " + e._s(t.row.put_at))]) : e._e(), e._v(" "), "已售" == t.row.product_status_name ? a("div", [e._v("销售: " + e._s(t.row.sold_at))]) : e._e()]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            label: "操作",
                            "header-align": "center",
                            width: "150"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [4 != t.row.product_type ? a("span", [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "goods-goods-detail",
                                            query: {
                                                id: t.row.product_id,
                                                view: "view",
                                                source: "goods"
                                            }
                                        },
                                        target: "_blank"
                                    }
                                }, [a("el-button", {
                                    attrs: {
                                        type: "primary",
                                        size: "mini"
                                    }
                                }, [e._v("查看")])], 1)], 1) : e._e(), e._v(" "), e.auth("A0605") && "已售" != t.row.product_status_name && 4 != t.row.product_type ? a("span", [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "goods-goods-detail",
                                            query: {
                                                id: t.row.product_id,
                                                source: "goods"
                                            }
                                        },
                                        target: "_blank"
                                    }
                                }, [a("el-button", {
                                    attrs: {
                                        type: "warning",
                                        size: "mini"
                                    }
                                }, [e._v("编辑")])], 1)], 1) : e._e(), e._v(" "), "已售" != t.row.product_status_name ? a("span", [e.auth("A0606") ? a("el-button", {
                                    attrs: {
                                        type: "上架" == t.row.product_status_name || "预上架" == t.row.product_status_name ? "danger" : "success",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(a) {
                                            return e.handleClickGoodsState(t.row.product_id, t.row.product_status_name)
                                        }
                                    }
                                }, ["上架" == t.row.product_status_name || "预上架" == t.row.product_status_name ? a("span", [e._v("下架")]) : a("span", [e._v("上架")])]) : e._e()], 1) : e._e(), e._v(" "), a("el-button", {
                                    staticStyle: {
                                        "margin-top": "3px"
                                    },
                                    attrs: {
                                        type: "info",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(a) {
                                            return e.openLogs(t.row.product_id)
                                        }
                                    }
                                }, [e._v("日志")]), e._v(" "), e.auth("A0607") ? a("el-button", {
                                    staticStyle: {
                                        "margin-top": "3px"
                                    },
                                    attrs: {
                                        type: "info",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(a) {
                                            return e.openRemark(t.row.product_id)
                                        }
                                    }
                                }, [e._v("备注")]) : e._e(), e._v(" "), e.auth("A0608") ? a("el-button", {
                                    staticStyle: {
                                        "margin-top": "3px"
                                    },
                                    attrs: {
                                        type: "info",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(a) {
                                            return e.editImei(t.row.product_id)
                                        }
                                    }
                                }, [e._v("修改IMEI")]) : e._e(), e._v(" "), e.auth("A0609") && 1 != t.row.is_imei_conflict ? a("el-button", {
                                    staticStyle: {
                                        "margin-top": "3px"
                                    },
                                    attrs: {
                                        type: "info",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(a) {
                                            return e.modelError(t.row.product_id, t.row.imei)
                                        }
                                    }
                                }, [e._v("型号错")]) : e._e()]
                            }
                        }])
                    })], 1)], 1)], 1), e._v(" "), a("div", {
                        staticClass: "footer-pagination"
                    }, [a("el-pagination", {
                        attrs: {
                            background: "",
                            layout: "sizes, total, prev, pager, next, jumper",
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
                                return e.getGoodsListData()
                            },
                            "size-change": function(t) {
                                return e.getGoodsListData(1)
                            }
                        }
                    })], 1)], 1), e._v(" "), a("el-dialog", {
                        attrs: {
                            title: "修改价格",
                            visible: e.dialogFormVisible,
                            width: "20%"
                        },
                        on: {
                            "update:visible": function(t) {
                                e.dialogFormVisible = t
                            }
                        }
                    }, [a("el-form", [a("el-form-item", {
                        attrs: {
                            label: "统一改价:"
                        }
                    }, [a("el-input", {
                        staticClass: "price-input",
                        attrs: {
                            type: "number"
                        },
                        model: {
                            value: e.allPrice,
                            callback: function(t) {
                                e.allPrice = t
                            },
                            expression: "allPrice"
                        }
                    })], 1), e._v(" "), a("el-form-item", [a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.changePriceConfirm
                        }
                    }, [e._v("确 定")]), e._v(" "), a("el-button", {
                        on: {
                            click: function(t) {
                                e.dialogFormVisible = !1
                            }
                        }
                    }, [e._v("取 消")])], 1)], 1)], 1), e._v(" "), a("el-dialog", {
                        attrs: {
                            title: "下架原因",
                            visible: e.obtainedReason,
                            width: "40%"
                        },
                        on: {
                            "update:visible": function(t) {
                                e.obtainedReason = t
                            }
                        }
                    }, [a("el-input", {
                        attrs: {
                            type: "textarea"
                        },
                        model: {
                            value: e.reason,
                            callback: function(t) {
                                e.reason = t
                            },
                            expression: "reason"
                        }
                    }), e._v(" "), a("span", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [a("el-button", {
                        on: {
                            click: function(t) {
                                e.obtainedReason = !1
                            }
                        }
                    }, [e._v("取 消")]), e._v(" "), a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.handleClickConfirm
                        }
                    }, [e._v("确 定")])], 1)], 1), e._v(" "), a("el-dialog", {
                        attrs: {
                            title: "修改参数",
                            visible: e.dialogChangeArgu,
                            width: "30%"
                        },
                        on: {
                            "update:visible": function(t) {
                                e.dialogChangeArgu = t
                            }
                        }
                    }, [e.form.editParams ? a("el-form", {
                        attrs: {
                            model: e.form,
                            "label-width": "180px"
                        }
                    }, [a("el-form-item", {
                        attrs: {
                            label: "类目 品牌:"
                        }
                    }, [e._v("\n        " + e._s(e.form.editParams.type_brand_name) + "\n      ")]), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "型号:"
                        }
                    }, [e._v("\n        " + e._s(e.form.editParams.model_name) + "\n      ")]), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "参数信息:"
                        }
                    }, e._l(e.form.editParams.data, (function(t) {
                        return a("div", {
                            key: t.pnid,
                            staticClass: "select-info"
                        }, [a("el-select", {
                            attrs: {
                                filterable: "",
                                clearable: "",
                                placeholder: t.pn_name
                            },
                            model: {
                                value: t.value,
                                callback: function(a) {
                                    e.$set(t, "value", a)
                                },
                                expression: "item.value"
                            }
                        }, e._l(t.list, (function(e, t) {
                            return a("el-option", {
                                key: t,
                                attrs: {
                                    label: e.pvname,
                                    value: e.pvid
                                }
                            })
                        })), 1)], 1)
                    })), 0), e._v(" "), a("el-form-item", [a("el-button", {
                        on: {
                            click: function(t) {
                                e.dialogChangeArgu = !1
                            }
                        }
                    }, [e._v("取消")]), e._v(" "), a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.handleArgumentConfirm
                        }
                    }, [e._v("确认")])], 1)], 1) : e._e()], 1), e._v(" "), a("LogsDialog", {
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
                    }), e._v(" "), a("el-dialog", {
                        staticClass: "remarkDialog",
                        attrs: {
                            title: "添加备注",
                            visible: e.showRemarkDialog,
                            width: "30%"
                        },
                        on: {
                            "update:visible": function(t) {
                                e.showRemarkDialog = t
                            }
                        }
                    }, [a("el-form", {
                        attrs: {
                            model: e.remarkForm
                        }
                    }, [a("el-form-item", [a("el-input", {
                        attrs: {
                            maxlength: "50",
                            type: "textarea",
                            rows: "8",
                            placeholder: "备注",
                            "show-word-limit": !0
                        },
                        model: {
                            value: e.remarkForm.remark,
                            callback: function(t) {
                                e.$set(e.remarkForm, "remark", t)
                            },
                            expression: "remarkForm.remark"
                        }
                    })], 1), e._v(" "), a("el-form-item", {
                        staticStyle: {
                            "text-align": "right",
                            "margin-bottom": "0"
                        }
                    }, [a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.handleRemarkConfirm
                        }
                    }, [e._v("确认")])], 1)], 1)], 1)], 1)
                },
                l = [],
                c = a("a2a9"),
                u = a("2934"),
                d = a("1504"),
                p = a("de26"),
                h = a("cd36"),
                _ = a("2a67"),
                m = a("246e");

            function v(e, t, a, r, s, n, o) {
                try {
                    var i = e[n](o),
                        l = i.value
                } catch (c) {
                    return void a(c)
                }
                i.done ? t(l) : Promise.resolve(l).then(r, s)
            }

            function f(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(r, s) {
                        var n = e.apply(t, a);

                        function o(e) {
                            v(n, r, s, o, i, "next", e)
                        }

                        function i(e) {
                            v(n, r, s, o, i, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function b(e, t) {
                var a;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (a = g(e)) || t && e && "number" === typeof e.length) {
                        a && (e = a);
                        var r = 0,
                            s = function() {};
                        return {
                            s: s,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: s
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var n, o = !0,
                    i = !1;
                return {
                    s: function() {
                        a = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = a.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        i = !0, n = e
                    },
                    f: function() {
                        try {
                            o || null == a.return || a.return()
                        } finally {
                            if (i) throw n
                        }
                    }
                }
            }

            function g(e, t) {
                if (e) {
                    if ("string" === typeof e) return y(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? y(e, t) : void 0
                }
            }

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                return r
            }
            var w = {
                    components: {
                        TypeBrandModel: d["a"],
                        LogsDialog: h["a"],
                        Areas: _["a"],
                        ImeiSearch: m["a"]
                    },
                    props: {
                        type: [String]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            search: {
                                applyDate: [],
                                auditDate: [],
                                salesData: [],
                                supplierData: [],
                                conditionData: [],
                                imei: null,
                                page: 1,
                                page_size: 50,
                                type_id: null,
                                brand_id: null,
                                model_id: null,
                                goodsStatus: null,
                                productType: null,
                                qcType: null,
                                qcLevel: null,
                                key_props: {},
                                area_ids: [],
                                qc_code: null,
                                business_line: null
                            },
                            form: {
                                editParams: null
                            },
                            tableSelect: [],
                            total: 0,
                            allPrice: "",
                            reason: "",
                            product_id: "",
                            dict: {
                                allotType: p["a"].allotType,
                                goodsStatusData: null,
                                location: p["a"].location,
                                props: []
                            },
                            loading: !1,
                            exporLoading: !1,
                            dialogFormVisible: !1,
                            obtainedReason: !1,
                            dialogChangeArgu: !1,
                            disabledPrcie: !0,
                            disabledParams: !0,
                            logProductId: null,
                            showLogDialog: !1,
                            remarkProductId: null,
                            showRemarkDialog: !1,
                            remarkForm: {
                                remark: null
                            }
                        }
                    },
                    computed: {
                        checkOutof: function() {
                            var e, t = b(this.tableSelect);
                            try {
                                for (t.s(); !(e = t.n()).done;) {
                                    var a = e.value;
                                    if ("上架" != a.product_status_name) return !0
                                }
                            } catch (r) {
                                t.e(r)
                            } finally {
                                t.f()
                            }
                            return 0 == this.tableSelect.length
                        }
                    },
                    created: function() {
                        this.getGoodsStatus()
                    },
                    mounted: function() {
                        this.getGoodsListData(), this.getSuppliersListData(), this.getColourListData()
                    },
                    methods: {
                        getGoodsListData: function() {
                            var e = f(o.a.mark((function e(t) {
                                var a;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            t && (this.search.page = 1), this.loading = !0, e.t0 = this.type, e.next = "1" === e.t0 ? 5 : "2" === e.t0 ? 7 : "3" === e.t0 ? 9 : "4" === e.t0 ? 11 : "5" === e.t0 ? 13 : 15;
                                            break;
                                        case 5:
                                            return this.$set(this.search, "goodsStatus", "1"), e.abrupt("break", 15);
                                        case 7:
                                            return this.$set(this.search, "goodsStatus", "2"), e.abrupt("break", 15);
                                        case 9:
                                            return this.$set(this.search, "goodsStatus", "3"), e.abrupt("break", 15);
                                        case 11:
                                            return this.$set(this.search, "goodsStatus", "4"), e.abrupt("break", 15);
                                        case 13:
                                            return this.$set(this.search, "goodsStatus", "5"), e.abrupt("break", 15);
                                        case 15:
                                            return e.next = 17, Object(c["g"])({
                                                current_page: this.search.page,
                                                per_page: this.search.page_size,
                                                buy_at_start: this.search.applyDate[0],
                                                buy_at_end: this.search.applyDate[1],
                                                put_at_start: this.search.auditDate[0],
                                                put_at_end: this.search.auditDate[1],
                                                sold_at_start: this.search.salesData[0],
                                                sold_at_end: this.search.salesData[1],
                                                product_id_or_imei: this.search.imei ? this.search.imei.replace(/\n/g, ",").split(",").filter((function(e) {
                                                    return "" != e
                                                })) : null,
                                                product_name: this.search.goodsName,
                                                purchase_order_no: this.search.purchase,
                                                business_type: this.search.allotType,
                                                supplier_id: this.search.supplier,
                                                warehouse_num: this.search.location,
                                                type_id: this.search.type_id,
                                                brand_id: this.search.brand_id,
                                                model_id: this.search.model_id,
                                                quality_id: this.search.condition,
                                                product_status: this.search.goodsStatus,
                                                warehouse_status: this.search.stockStatus,
                                                product_type: this.search.productType,
                                                qc_type: this.search.qcType,
                                                qc_level: this.search.qcLevel,
                                                guarantee_id: this.search.guarantee_id,
                                                key_props: this.getPropsStr(this.search.key_props),
                                                area_ids: this.search.area_ids.join(","),
                                                qcType: this.search.qcType,
                                                qcLevel: this.search.qcLevel,
                                                qc_code: this.search.qc_code,
                                                business_line: this.search.business_line
                                            });
                                        case 17:
                                            a = e.sent, 1 == a.code && (this.tableData = a.data.data, this.total = a.data.total, this.loading = !1, 1 == this.type ? this.$emit("handleGoodsTotal", {
                                                total1: a.data.total,
                                                type: "1"
                                            }) : 2 == this.type ? this.$emit("handleGoodsTotal", {
                                                total2: a.data.total,
                                                type: "2"
                                            }) : 3 == this.type ? this.$emit("handleGoodsTotal", {
                                                total3: a.data.total,
                                                type: "3"
                                            }) : 4 == this.type ? this.$emit("handleGoodsTotal", {
                                                total4: a.data.total,
                                                type: "4"
                                            }) : 5 == this.type && this.$emit("handleGoodsTotal", {
                                                total5: a.data.total,
                                                type: "5"
                                            }));
                                        case 19:
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
                        handleSelectionChange: function(e) {
                            this.tableSelect = e, this.tableSelect.length > 0 ? (this.disabledPrcie = !1, this.search.modelId = this.tableSelect[0].model_id) : (this.disabledPrcie = !0, this.disabledParams = !0);
                            var t, a = b(this.tableSelect);
                            try {
                                for (a.s(); !(t = a.n()).done;) {
                                    var r = t.value;
                                    this.search.modelId == r.model_id ? this.disabledParams = !1 : this.disabledParams = !0
                                }
                            } catch (s) {
                                a.e(s)
                            } finally {
                                a.f()
                            }
                        },
                        getSuppliersListData: function() {
                            var e = f(o.a.mark((function e() {
                                var t;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(c["j"])();
                                        case 2:
                                            t = e.sent, 1 == t.code && (this.search.supplierData = t.data);
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
                        getColourListData: function() {
                            var e = f(o.a.mark((function e() {
                                var t;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(c["d"])();
                                        case 2:
                                            t = e.sent, 1 == t.code && (this.search.conditionData = t.data);
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
                        handleClickReset: function() {
                            this.search = {
                                page: 1,
                                page_size: 10,
                                applyDate: [],
                                auditDate: [],
                                salesData: [],
                                imei: null,
                                goodsName: null,
                                purchase: null,
                                allotType: null,
                                supplier: null,
                                location: null,
                                type_id: null,
                                brand_id: null,
                                model_id: null,
                                condition: null,
                                goodsStatus: null,
                                stockStatus: null,
                                productType: null,
                                guarantee_id: null,
                                key_props: {},
                                area_ids: [],
                                qcType: null,
                                qcLevel: null,
                                qc_code: null,
                                business_line: null
                            }, this.getGoodsListData()
                        },
                        handleChangePrice: function() {
                            this.dialogFormVisible = !0
                        },
                        changePriceConfirm: function() {
                            var e = f(o.a.mark((function e() {
                                var t, a, r, s, n;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.allPrice) {
                                                e.next = 3;
                                                break
                                            }
                                            return this.$message.error("请填写价格"), e.abrupt("return");
                                        case 3:
                                            t = [], a = b(this.tableSelect);
                                            try {
                                                for (a.s(); !(r = a.n()).done;) s = r.value, t.push(s.product_id)
                                            } catch (o) {
                                                a.e(o)
                                            } finally {
                                                a.f()
                                            }
                                            return e.next = 8, Object(c["e"])({
                                                product_ids: t,
                                                price: this.allPrice
                                            });
                                        case 8:
                                            n = e.sent, 1 == n.code && (this.dialogFormVisible = !1, this.$message({
                                                message: "改价成功",
                                                type: "success"
                                            }), this.getGoodsListData());
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
                        handleChangeArgument: function() {
                            var e = this;
                            this.dialogChangeArgu = !0, Object(c["c"])({
                                model_id: this.search.modelId
                            }).then((function(t) {
                                if (1 == t.code) {
                                    var a, r = b(t.data.data);
                                    try {
                                        for (r.s(); !(a = r.n()).done;) {
                                            var s = a.value;
                                            s.value = ""
                                        }
                                    } catch (n) {
                                        r.e(n)
                                    } finally {
                                        r.f()
                                    }
                                    e.form.editParams = t.data
                                }
                            }))
                        },
                        handleArgumentConfirm: function() {
                            var e, t = this,
                                a = [],
                                r = [],
                                s = b(this.tableSelect);
                            try {
                                for (s.s(); !(e = s.n()).done;) {
                                    var n = e.value;
                                    a.push(n.product_id)
                                }
                            } catch (u) {
                                s.e(u)
                            } finally {
                                s.f()
                            }
                            var o, i = b(this.form.editParams.data);
                            try {
                                for (i.s(); !(o = i.n()).done;) {
                                    var l = o.value;
                                    l.value && r.push({
                                        pnid: l.pnid,
                                        pvid: l.value
                                    })
                                }
                            } catch (u) {
                                i.e(u)
                            } finally {
                                i.f()
                            }
                            Object(c["n"])({
                                product_ids: a,
                                props_data: r
                            }).then((function(e) {
                                1 == e.code && (t.$message({
                                    message: "修改成功",
                                    type: "success"
                                }), t.dialogChangeArgu = !1, t.getGoodsListData())
                            }))
                        },
                        handleGround: function() {
                            var e = f(o.a.mark((function e() {
                                var t, a, r, s, n, i, l = this;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            t = null, e.prev = 1, a = [], r = b(this.tableSelect);
                                            try {
                                                for (r.s(); !(s = r.n()).done;) n = s.value, a.push(n.product_id)
                                            } catch (o) {
                                                r.e(o)
                                            } finally {
                                                r.f()
                                            }
                                            return t = this.$loading({
                                                target: ".app-main"
                                            }), e.next = 8, Object(c["m"])({
                                                product_ids: a
                                            });
                                        case 8:
                                            i = e.sent, Object.keys(i.data).length > 0 ? this.$alert("".concat(i.msg, "</br>").concat(i.data.join("</br>")), "提示", {
                                                type: "warning",
                                                dangerouslyUseHTMLString: !0
                                            }) : (this.$message.success(i.msg), setTimeout((function() {
                                                l.getGoodsListData()
                                            }), 1e3)), t.close(), e.next = 17;
                                            break;
                                        case 13:
                                            e.prev = 13, e.t0 = e["catch"](1), t.close(), console.log(e.t0);
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [1, 13]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        handleExporReport: function() {
                            var e = f(o.a.mark((function e() {
                                var t;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return this.exporLoading = !0, e.next = 3, Object(c["f"])({
                                                current_page: this.search.page,
                                                per_page: this.search.page_size,
                                                buy_at_start: this.search.applyDate[0],
                                                buy_at_end: this.search.applyDate[1],
                                                put_at_start: this.search.auditDate[0],
                                                put_at_end: this.search.auditDate[1],
                                                sold_at_start: this.search.salesData[0],
                                                sold_at_end: this.search.salesData[1],
                                                product_id_or_imei: this.search.imei ? this.search.imei.replace(/\n/g, ",").split(",").filter((function(e) {
                                                    return "" != e
                                                })) : null,
                                                product_name: this.search.goodsName,
                                                purchase_order_no: this.search.purchase,
                                                business_type: this.search.allotType,
                                                supplier_id: this.search.supplier,
                                                warehouse_num: this.search.location,
                                                type_id: this.search.type_id,
                                                brand_id: this.search.brand_id,
                                                model_id: this.search.model_id,
                                                quality_id: this.search.condition,
                                                product_status: this.search.goodsStatus,
                                                warehouse_status: this.search.stockStatus,
                                                product_type: this.search.productType,
                                                guarantee_id: this.search.guarantee_id,
                                                is_export: 1,
                                                key_props: this.getPropsStr(this.search.key_props),
                                                area_ids: this.search.area_ids.join(","),
                                                qcType: this.search.qcType,
                                                qcLevel: this.search.qcLevel,
                                                qc_code: this.search.qc_code,
                                                business_line: this.search.business_line
                                            });
                                        case 3:
                                            t = e.sent, 1 == t.code && (window.open(t.data.download_url), this.exporLoading = !1);
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
                        handleClickGoodsState: function(e, t) {
                            var a = this;
                            this.product_id = e, "下架" == t || "待上架" == t ? (Object(c["p"])({
                                product_id: e
                            }).then((function(e) {
                                a.$message({
                                    message: "商品上架成功",
                                    type: "success"
                                })
                            })), this.getGoodsListData()) : this.obtainedReason = !0
                        },
                        handleClickConfirm: function() {
                            var e = this;
                            Object(c["o"])({
                                product_id: this.product_id,
                                reason: this.reason
                            }).then((function(t) {
                                1 == t.code && (e.$message({
                                    message: "商品下架成功",
                                    type: "success"
                                }), e.obtainedReason = !1, e.getGoodsListData())
                            }))
                        },
                        handleOutof: function() {
                            var e = f(o.a.mark((function e() {
                                var t, a, r, s, n = this;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t = null, e.prev = 1, e.next = 4, this.$prompt("下架原因", "批量下架", {
                                                inputType: "textarea",
                                                inputPattern: /.|\n/,
                                                inputErrorMessage: "不能为空"
                                            });
                                        case 4:
                                            return a = e.sent, r = a.value, t = this.$loading({
                                                target: ".app-main"
                                            }), e.next = 9, Object(c["l"])({
                                                reason: r,
                                                product_ids: this.tableSelect.map((function(e) {
                                                    return e.product_id
                                                }))
                                            });
                                        case 9:
                                            s = e.sent, Object.keys(s.data).length > 0 ? this.$alert("".concat(s.msg, "</br>").concat(s.data.join("</br>")), "提示", {
                                                type: "warning",
                                                dangerouslyUseHTMLString: !0
                                            }) : (this.$message.success(s.msg), setTimeout((function() {
                                                n.getGoodsListData()
                                            }), 1e3)), t.close(), e.next = 18;
                                            break;
                                        case 14:
                                            e.prev = 14, e.t0 = e["catch"](1), t && t.close(), console.log(e.t0);
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [1, 14]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        getGoodsStatus: function() {
                            var e = this;
                            Object(c["h"])().then((function(t) {
                                1 == t.code && (e.dict.goodsStatusData = t.data)
                            }))
                        },
                        openLogs: function(e) {
                            this.showLogDialog = !0, this.logProductId = e
                        },
                        openRemark: function() {
                            var e = f(o.a.mark((function e(t) {
                                var a, r;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return this.remarkForm.remark = null, this.showRemarkDialog = !0, this.remarkProductId = t, a = this.$loading({
                                                target: ".remarkDialog .el-dialog"
                                            }), e.prev = 4, e.next = 7, Object(c["q"])({
                                                product_id: t
                                            });
                                        case 7:
                                            r = e.sent, this.remarkForm.remark = r.data, e.next = 14;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e["catch"](4), console.log(e.t0);
                                        case 14:
                                            a.close();
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [4, 11]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        handleRemarkConfirm: function() {
                            var e = f(o.a.mark((function e() {
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, Object(c["a"])({
                                                product_id: this.remarkProductId,
                                                remark: this.remarkForm.remark
                                            });
                                        case 3:
                                            this.$message.success("保存成功！"), this.showRemarkDialog = !1, e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e["catch"](0), console.log(e.t0);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 7]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        handleModelChange: function() {
                            var e = f(o.a.mark((function e() {
                                var t;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(u["m"])({
                                                model_id: this.search.model_id
                                            });
                                        case 2:
                                            t = e.sent, this.dict.props = t.data[this.search.model_id];
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
                        getPropsStr: function(e) {
                            var t = [];
                            for (var a in e) t.push("".concat(a, ":").concat(e[a]));
                            return t.join(";")
                        },
                        editImei: function() {
                            var e = f(o.a.mark((function e(t) {
                                var a, r, s, n;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return a = null, e.prev = 1, e.next = 4, this.$prompt("新IMEI", "修改IMEI", {
                                                inputPattern: /.|\n/,
                                                inputErrorMessage: "不能为空"
                                            });
                                        case 4:
                                            return r = e.sent, s = r.value, a = this.$loading({
                                                target: ".app-main"
                                            }), e.next = 9, Object(c["b"])({
                                                product_id: t,
                                                new_imei: s
                                            });
                                        case 9:
                                            n = e.sent, a.close(), this.$message.success(n.msg), this.getGoodsListData(), e.next = 19;
                                            break;
                                        case 15:
                                            e.prev = 15, e.t0 = e["catch"](1), a && a.close(), console.log(e.t0);
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [1, 15]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        modelError: function() {
                            var e = f(o.a.mark((function e(t, a) {
                                var r;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.$confirm("确认操作【型号错】？", "提示", {
                                                center: !0,
                                                type: "warning"
                                            });
                                        case 3:
                                            return this.loading = !0, e.next = 6, Object(c["k"])({
                                                product_id: t,
                                                imei: a
                                            });
                                        case 6:
                                            r = e.sent, this.$message.success(r.msg), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e["catch"](0), console.log(e.t0);
                                        case 13:
                                            this.loading = !1;
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 10]
                                ])
                            })));

                            function t(t, a) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    }
                },
                k = w,
                x = (a("19dd"), a("5d22")),
                C = Object(x["a"])(k, i, l, !1, null, "43d1b04a", null),
                j = C.exports;

            function D(e, t, a, r, s, n, o) {
                try {
                    var i = e[n](o),
                        l = i.value
                } catch (c) {
                    return void a(c)
                }
                i.done ? t(l) : Promise.resolve(l).then(r, s)
            }

            function O(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(r, s) {
                        var n = e.apply(t, a);

                        function o(e) {
                            D(n, r, s, o, i, "next", e)
                        }

                        function i(e) {
                            D(n, r, s, o, i, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }
            var S = {
                    name: "Main",
                    components: {
                        ListComponent: j
                    },
                    data: function() {
                        return {
                            activeName: "first",
                            total1: "",
                            total2: "",
                            total3: "",
                            total4: "",
                            total5: "",
                            totalObj: {
                                1: 0,
                                2: 0,
                                3: 0,
                                4: 0,
                                5: 0
                            }
                        }
                    },
                    mounted: function() {
                        this.getProductTotal()
                    },
                    methods: {
                        handleTotal: function(e) {
                            if (e) switch (e.type) {
                                case "1":
                                    this.total1 = e.total1;
                                    break;
                                case "2":
                                    this.total2 = e.total2;
                                    break;
                                case "3":
                                    this.total3 = e.total3;
                                    break;
                                case "4":
                                    this.total4 = e.total4;
                                    break;
                                case "5":
                                    this.total5 = e.total5;
                                    break
                            }
                        },
                        getProductTotal: function() {
                            var e = O(o.a.mark((function e() {
                                var t;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(c["i"])();
                                        case 2:
                                            t = e.sent, this.totalObj = t.data;
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
                        }()
                    }
                },
                $ = S,
                T = Object(x["a"])($, r, s, !1, null, "0d0e1e30", null);
            t["default"] = T.exports
        },
        a2a9: function(e, t, a) {
            "use strict";
            a.d(t, "g", (function() {
                return s
            })), a.d(t, "j", (function() {
                return n
            })), a.d(t, "d", (function() {
                return o
            })), a.d(t, "e", (function() {
                return i
            })), a.d(t, "f", (function() {
                return l
            })), a.d(t, "m", (function() {
                return c
            })), a.d(t, "p", (function() {
                return u
            })), a.d(t, "o", (function() {
                return d
            })), a.d(t, "c", (function() {
                return p
            })), a.d(t, "n", (function() {
                return h
            })), a.d(t, "h", (function() {
                return _
            })), a.d(t, "i", (function() {
                return m
            })), a.d(t, "a", (function() {
                return v
            })), a.d(t, "l", (function() {
                return f
            })), a.d(t, "b", (function() {
                return b
            })), a.d(t, "q", (function() {
                return g
            })), a.d(t, "k", (function() {
                return y
            }));
            var r = a("b775");

            function s(e) {
                return Object(r["a"])({
                    url: "/api/product/admin",
                    method: "get",
                    params: e
                })
            }

            function n(e) {
                return Object(r["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(r["a"])({
                    url: "/api/product/colour",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(r["a"])({
                    url: "/api/product/batch_edit_price",
                    method: "post",
                    data: e
                })
            }

            function l(e) {
                return Object(r["a"])({
                    url: "/api/product/export_product",
                    method: "get",
                    params: e
                })
            }

            function c(e) {
                return Object(r["a"])({
                    url: "/api/product/multiple_on_sale",
                    method: "POST",
                    data: e
                })
            }

            function u(e) {
                return Object(r["a"])({
                    url: "/api/product/on_sale",
                    method: "post",
                    data: e
                })
            }

            function d(e) {
                return Object(r["a"])({
                    url: "/api/product/off_sale",
                    method: "post",
                    data: e
                })
            }

            function p(e) {
                return Object(r["a"])({
                    url: "/api/input/get_edit_params",
                    method: "get",
                    params: e
                })
            }

            function h(e) {
                return Object(r["a"])({
                    url: "/api/input/submit_edit_params",
                    method: "post",
                    data: e
                })
            }

            function _(e) {
                return Object(r["a"])({
                    url: "/api/product/get_product_status",
                    method: "get",
                    params: e
                })
            }

            function m(e) {
                return Object(r["a"])({
                    url: "api/product/admin_num",
                    method: "get",
                    params: e
                })
            }

            function v(e) {
                return Object(r["a"])({
                    url: "/api/product/update_quality_remark",
                    method: "post",
                    data: e
                })
            }

            function f(e) {
                return Object(r["a"])({
                    url: "/api/product/multiple_off_sale",
                    method: "post",
                    data: e
                })
            }

            function b(e) {
                return Object(r["a"])({
                    url: "/api/product/change_global_imei",
                    method: "post",
                    data: e
                })
            }

            function g(e) {
                return Object(r["a"])({
                    url: "/api/product/remarks",
                    method: "get",
                    params: e
                })
            }

            function y(e) {
                return Object(r["a"])({
                    url: "/api/product/sign_imei_conflict",
                    method: "post",
                    data: e
                })
            }
        },
        de26: function(e, t, a) {
            "use strict";
            var r = {
                goodsState: {
                    1: "上架",
                    2: "下架",
                    3: "已售",
                    4: "其他渠道",
                    5: "待发布",
                    6: "待完善",
                    7: "回收站",
                    8: "助手录入",
                    9: "机器预留",
                    10: "待上架"
                },
                location: {
                    1: "分拾库",
                    2: "检测库",
                    3: "市场库",
                    4: "上架库",
                    5: "维修库",
                    6: "报废库",
                    7: "B端库",
                    8: "预上架库",
                    9: "外包维修库",
                    11: "京东库",
                    12: "市场代卖库",
                    13: "问题库",
                    14: "借出库",
                    15: "B端问题",
                    16: "编辑库",
                    17: "编辑完成库",
                    18: "媒体库",
                    19: "质检分拾库",
                    20: "复测库",
                    21: "运营库",
                    22: "基建库",
                    23: "售后库",
                    24: "微信库"
                },
                allotType: {
                    "-1": "未知",
                    0: "自营",
                    1: "市场代卖",
                    2: "回收",
                    3: "保卖"
                }
            };
            t["a"] = r
        },
        dfa8: function(e, t, a) {}
    }
]);