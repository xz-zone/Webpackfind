(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-e73f5d6c"], {
        2934: function(t, e, n) {
            "use strict";
            n.d(e, "p", (function() {
                return a
            })), n.d(e, "d", (function() {
                return i
            })), n.d(e, "i", (function() {
                return o
            })), n.d(e, "m", (function() {
                return l
            })), n.d(e, "b", (function() {
                return u
            })), n.d(e, "g", (function() {
                return s
            })), n.d(e, "k", (function() {
                return c
            })), n.d(e, "j", (function() {
                return d
            })), n.d(e, "h", (function() {
                return p
            })), n.d(e, "n", (function() {
                return _
            })), n.d(e, "a", (function() {
                return f
            })), n.d(e, "l", (function() {
                return m
            })), n.d(e, "q", (function() {
                return h
            })), n.d(e, "f", (function() {
                return v
            })), n.d(e, "o", (function() {
                return b
            })), n.d(e, "c", (function() {
                return y
            })), n.d(e, "e", (function() {
                return w
            }));
            var r = n("b775");

            function a(t) {
                return Object(r["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(r["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(r["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: t
                })
            }

            function l(t) {
                return Object(r["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(r["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(r["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(r["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(r["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(r["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: t
                })
            }

            function _(t) {
                return Object(r["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: t
                })
            }

            function f(t) {
                return Object(r["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: t
                })
            }

            function m(t) {
                return Object(r["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: t
                })
            }

            function h(t) {
                return Object(r["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: t
                })
            }

            function v(t) {
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

            function y(t) {
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
        "5dbc": function(t, e, n) {},
        "63f4": function(t, e, n) {
            "use strict";
            n.r(e);
            var r = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "app-container"
                    }, [n("div", {
                        staticClass: "header-search"
                    }, [n("el-input", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            type: "text",
                            clearable: "",
                            placeholder: "扫描IMEI号"
                        },
                        nativeOn: {
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.getAbnormalImeiData(e)
                            }
                        },
                        model: {
                            value: t.imei,
                            callback: function(e) {
                                t.imei = e
                            },
                            expression: "imei"
                        }
                    })], 1), t._v(" "), t._l(t.scannData, (function(e, r) {
                        return n("div", {
                            key: r
                        }, [n("el-row", {
                            staticClass: "body-tools"
                        }, [n("el-col", [n("el-alert", {
                            attrs: {
                                type: "success",
                                closable: !1
                            }
                        }, [n("el-row", [n("el-col", {
                            staticClass: "header-info",
                            attrs: {
                                span: 16
                            }
                        }, [n("div", [t._v("\n                流转单号：\n                "), n("span", [t._v(t._s(e.transfer_order.transfer_order_no))])]), t._v(" "), n("div", [t._v("\n                接收数量：\n                "), n("span", {
                            staticClass: "color-danger"
                        }, [t._v(t._s(e.transfer_order.total_num))])]), t._v(" "), n("div", [t._v("\n                流转步骤：\n                "), n("span", [t._v(t._s(e.transfer_order.source_node.name) + "—>" + t._s(e.transfer_order.to_node.name))])]), t._v(" "), n("div", [t._v("\n                创建时间：\n                "), n("span", [t._v(t._s(e.transfer_order.created_at))])]), t._v(" "), n("div", [t._v("\n                异常数量合计：\n                "), n("span", [t._v(t._s(e.transfer_order.abnormal_num))])]), t._v(" "), n("div", [t._v("\n                成本合计：\n                "), n("span", [t._v(t._s(e.transfer_order.total_cost))])])]), t._v(" "), n("el-col", {
                            staticClass: "header-total",
                            attrs: {
                                span: 8
                            }
                        }, [n("el-button", {
                            attrs: {
                                type: "success",
                                size: "mini",
                                plain: ""
                            },
                            on: {
                                click: function(e) {
                                    return t.addRows(r)
                                }
                            }
                        }, [t._v("新增")])], 1)], 1)], 1)], 1)], 1), t._v(" "), n("el-row", {
                            staticClass: "body-list"
                        }, [n("el-col", {
                            attrs: {
                                span: 24
                            }
                        }, [n("el-table", {
                            directives: [{
                                name: "loading",
                                rawName: "v-loading",
                                value: t.loading,
                                expression: "loading"
                            }],
                            attrs: {
                                data: e.detail,
                                border: ""
                            }
                        }, [n("el-table-column", {
                            attrs: {
                                type: "index",
                                label: "序号",
                                align: "center",
                                width: "50"
                            }
                        }), t._v(" "), n("el-table-column", {
                            attrs: {
                                prop: "type.name",
                                label: "类目品牌型号",
                                width: "200",
                                align: "center"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [e.row.type ? n("div", [t._v("【" + t._s(e.row.type.name) + "】 【" + t._s(e.row.brand.name) + "】 【" + t._s(e.row.model.name) + "】")]) : t._e(), t._v(" "), e.row.type ? t._e() : n("div", [n("el-select", {
                                        staticStyle: {
                                            width: "150px"
                                        },
                                        attrs: {
                                            filterable: "",
                                            clearable: "",
                                            placeholder: "类目"
                                        },
                                        on: {
                                            change: function(n) {
                                                return t.getBrands(e.row)
                                            }
                                        },
                                        model: {
                                            value: e.row.type_id,
                                            callback: function(n) {
                                                t.$set(e.row, "type_id", n)
                                            },
                                            expression: "scope.row.type_id"
                                        }
                                    }, t._l(t.dict.types, (function(t, e) {
                                        return n("el-option", {
                                            key: e,
                                            attrs: {
                                                label: t,
                                                value: e
                                            }
                                        })
                                    })), 1), t._v(" "), n("el-select", {
                                        staticStyle: {
                                            width: "150px",
                                            "margin-top": "2px"
                                        },
                                        attrs: {
                                            filterable: "",
                                            clearable: "",
                                            placeholder: "品牌"
                                        },
                                        on: {
                                            change: function(n) {
                                                return t.getModels(e.row)
                                            }
                                        },
                                        model: {
                                            value: e.row.brand_id,
                                            callback: function(n) {
                                                t.$set(e.row, "brand_id", n)
                                            },
                                            expression: "scope.row.brand_id"
                                        }
                                    }, t._l(e.row.brand_data, (function(t, e) {
                                        return n("el-option", {
                                            key: e,
                                            attrs: {
                                                label: t,
                                                value: e
                                            }
                                        })
                                    })), 1), t._v(" "), n("el-select", {
                                        staticStyle: {
                                            width: "150px",
                                            "margin-top": "2px"
                                        },
                                        attrs: {
                                            filterable: "",
                                            clearable: "",
                                            placeholder: "型号"
                                        },
                                        on: {
                                            change: function(n) {
                                                return t.getProps(e.row)
                                            }
                                        },
                                        model: {
                                            value: e.row.model_id,
                                            callback: function(n) {
                                                t.$set(e.row, "model_id", n)
                                            },
                                            expression: "scope.row.model_id"
                                        }
                                    }, t._l(e.row.model_data, (function(t, e) {
                                        return n("el-option", {
                                            key: e,
                                            attrs: {
                                                label: t,
                                                value: e
                                            }
                                        })
                                    })), 1)], 1)]
                                }
                            }], null, !0)
                        }), t._v(" "), n("el-table-column", {
                            attrs: {
                                label: "参数信息",
                                align: "center",
                                width: "240"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [e.row.type ? n("div", t._l(e.row.sales_properties, (function(e, r) {
                                        return n("el-tag", {
                                            directives: [{
                                                name: "show",
                                                rawName: "v-show",
                                                value: 12 != e.pn_id && 54 != e.pn_id,
                                                expression: "item.pn_id != 12 && item.pn_id != 54"
                                            }],
                                            key: r,
                                            staticStyle: {
                                                "margin-right": "2px"
                                            },
                                            attrs: {
                                                size: "mini"
                                            }
                                        }, [t._v(t._s(e.pn_name) + ":" + t._s(e.pv_name))])
                                    })), 1) : t._e(), t._v(" "), t._l(e.row.props_data, (function(e, r) {
                                        return n("el-select", {
                                            directives: [{
                                                name: "show",
                                                rawName: "v-show",
                                                value: 12 != e.pnid && 54 != e.pnid,
                                                expression: "item.pnid != 12 && item.pnid != 54"
                                            }],
                                            key: r,
                                            staticClass: "table-select",
                                            staticStyle: {
                                                width: "200px",
                                                margin: "3px 3px"
                                            },
                                            attrs: {
                                                filterable: "",
                                                clearable: "",
                                                placeholder: e.pn_name
                                            },
                                            model: {
                                                value: e.default_value,
                                                callback: function(n) {
                                                    t.$set(e, "default_value", n)
                                                },
                                                expression: "item.default_value"
                                            }
                                        }, t._l(e.list, (function(r, a) {
                                            return n("el-option", {
                                                key: a,
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
                                            }, [n("span", [t._v(t._s(r.pvname))]), t._v(" "), n("el-popover", {
                                                attrs: {
                                                    placement: "right-start",
                                                    trigger: "hover"
                                                }
                                            }, [10 == e.pnid ? n("img", {
                                                attrs: {
                                                    src: "" + r.img_url,
                                                    onerror: "this.style.display = 'none'"
                                                }
                                            }) : t._e(), t._v(" "), 10 == e.pnid ? n("img", {
                                                staticStyle: {
                                                    float: "left"
                                                },
                                                attrs: {
                                                    slot: "reference",
                                                    src: "" + r.img_url,
                                                    height: "34px",
                                                    onerror: "this.style.display = 'none'"
                                                },
                                                slot: "reference"
                                            }) : t._e()])], 1)])
                                        })), 1)
                                    }))]
                                }
                            }], null, !0)
                        }), t._v(" "), n("el-table-column", {
                            attrs: {
                                label: "来源",
                                align: "center",
                                width: "165"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [e.row.type ? n("div", t._l(e.row.sales_properties, (function(e, r) {
                                        return n("el-tag", {
                                            directives: [{
                                                name: "show",
                                                rawName: "v-show",
                                                value: 54 == e.pn_id,
                                                expression: "item.pn_id == 54"
                                            }],
                                            key: r,
                                            staticStyle: {
                                                "margin-right": "2px"
                                            },
                                            attrs: {
                                                size: "mini"
                                            }
                                        }, [t._v(t._s(e.pn_name) + ":" + t._s(e.pv_name))])
                                    })), 1) : t._e(), t._v(" "), t._l(e.row.props_data, (function(e, r) {
                                        return n("el-select", {
                                            directives: [{
                                                name: "show",
                                                rawName: "v-show",
                                                value: 54 == e.pnid,
                                                expression: "item.pnid == 54"
                                            }],
                                            key: r,
                                            staticClass: "table-select",
                                            staticStyle: {
                                                width: "145px"
                                            },
                                            attrs: {
                                                filterable: "",
                                                clearable: "",
                                                placeholder: e.pn_name
                                            },
                                            model: {
                                                value: e.default_value,
                                                callback: function(n) {
                                                    t.$set(e, "default_value", n)
                                                },
                                                expression: "item.default_value"
                                            }
                                        }, t._l(e.list, (function(t, e) {
                                            return n("el-option", {
                                                key: e,
                                                attrs: {
                                                    label: t.pvname,
                                                    value: String(t.pvid)
                                                }
                                            })
                                        })), 1)
                                    }))]
                                }
                            }], null, !0)
                        }), t._v(" "), n("el-table-column", {
                            attrs: {
                                label: "成色",
                                align: "center",
                                width: "110"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [e.row.type ? n("div", t._l(e.row.sales_properties, (function(e, r) {
                                        return n("el-tag", {
                                            directives: [{
                                                name: "show",
                                                rawName: "v-show",
                                                value: 12 == e.pn_id,
                                                expression: "item.pn_id == 12"
                                            }],
                                            key: r,
                                            staticStyle: {
                                                "margin-right": "2px"
                                            },
                                            attrs: {
                                                size: "mini"
                                            }
                                        }, [t._v(t._s(e.pn_name) + ":" + t._s(e.pv_name))])
                                    })), 1) : t._e(), t._v(" "), t._l(e.row.props_data, (function(e, r) {
                                        return n("el-select", {
                                            directives: [{
                                                name: "show",
                                                rawName: "v-show",
                                                value: 12 == e.pnid,
                                                expression: "item.pnid == 12"
                                            }],
                                            key: r,
                                            attrs: {
                                                filterable: "",
                                                clearable: "",
                                                placeholder: e.pn_name
                                            },
                                            model: {
                                                value: e.default_value,
                                                callback: function(n) {
                                                    t.$set(e, "default_value", n)
                                                },
                                                expression: "item.default_value"
                                            }
                                        }, t._l(e.list, (function(t, e) {
                                            return n("el-option", {
                                                key: e,
                                                attrs: {
                                                    label: t.pvname,
                                                    value: String(t.pvid)
                                                }
                                            })
                                        })), 1)
                                    }))]
                                }
                            }], null, !0)
                        }), t._v(" "), n("el-table-column", {
                            attrs: {
                                label: "IMEI",
                                align: "center"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [e.row.type ? n("div", [t._v(t._s(e.row.imei))]) : n("div", [n("el-input", {
                                        attrs: {
                                            placeholder: "IMEI"
                                        },
                                        model: {
                                            value: e.row.imei,
                                            callback: function(n) {
                                                t.$set(e.row, "imei", n)
                                            },
                                            expression: "scope.row.imei"
                                        }
                                    })], 1)]
                                }
                            }], null, !0)
                        }), t._v(" "), n("el-table-column", {
                            attrs: {
                                prop: "num",
                                label: "异常数量",
                                align: "center",
                                width: "110"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [n("el-input-number", {
                                        staticStyle: {
                                            width: "100%"
                                        },
                                        attrs: {
                                            "controls-position": "right",
                                            min: 1,
                                            placeholder: "异常数量"
                                        },
                                        model: {
                                            value: e.row.num,
                                            callback: function(n) {
                                                t.$set(e.row, "num", n)
                                            },
                                            expression: "scope.row.num"
                                        }
                                    })]
                                }
                            }], null, !0)
                        }), t._v(" "), n("el-table-column", {
                            attrs: {
                                label: "成本",
                                align: "center",
                                width: "120"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [e.row.type ? n("div", [t._v(t._s(e.row.product_cost.cost))]) : n("div", [n("el-input", {
                                        attrs: {
                                            placeholder: "成本"
                                        },
                                        model: {
                                            value: e.row.product_cost.cost,
                                            callback: function(n) {
                                                t.$set(e.row.product_cost, "cost", n)
                                            },
                                            expression: "scope.row.product_cost.cost"
                                        }
                                    })], 1)]
                                }
                            }], null, !0)
                        }), t._v(" "), n("el-table-column", {
                            attrs: {
                                label: "异常原因",
                                align: "center",
                                width: "180"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [n("ExceptionReason", {
                                        attrs: {
                                            mode: "type-in"
                                        },
                                        model: {
                                            value: e.row.abnormalVal,
                                            callback: function(n) {
                                                t.$set(e.row, "abnormalVal", n)
                                            },
                                            expression: "scope.row.abnormalVal"
                                        }
                                    })]
                                }
                            }], null, !0)
                        }), t._v(" "), n("el-table-column", {
                            attrs: {
                                label: "异常描述",
                                align: "center",
                                width: "170"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [n("el-input", {
                                        attrs: {
                                            type: "textarea",
                                            rows: 3,
                                            placeholder: "请输入内容"
                                        },
                                        model: {
                                            value: e.row.textarea,
                                            callback: function(n) {
                                                t.$set(e.row, "textarea", n)
                                            },
                                            expression: "scope.row.textarea"
                                        }
                                    })]
                                }
                            }], null, !0)
                        }), t._v(" "), n("el-table-column", {
                            attrs: {
                                label: "操作",
                                align: "center",
                                width: "140"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [n("el-button", {
                                        attrs: {
                                            type: "primary",
                                            size: "mini"
                                        },
                                        on: {
                                            click: function(n) {
                                                return t.handleCopy(r, e.$index)
                                            }
                                        }
                                    }, [t._v("复制")]), t._v(" "), n("el-button", {
                                        attrs: {
                                            type: "danger",
                                            size: "mini"
                                        },
                                        on: {
                                            click: function(n) {
                                                return t.handleClickDelete(r, e.$index)
                                            }
                                        }
                                    }, [t._v("删除")])]
                                }
                            }], null, !0)
                        })], 1)], 1)], 1)], 1)
                    })), t._v(" "), n("el-row", [n("el-col", {
                        staticClass: "flex-center"
                    }, [t.scannData.length > 0 ? n("el-button", {
                        attrs: {
                            type: "primary",
                            loading: t.saveLoading
                        },
                        on: {
                            click: t.tableSubmit
                        }
                    }, [t._v("完成提交")]) : t._e()], 1)], 1)], 2)
                },
                a = [],
                i = n("4838"),
                o = n.n(i),
                l = n("f2f0"),
                u = n("afe9"),
                s = n("7d06"),
                c = n("2934"),
                d = n("1504"),
                p = n("c058");

            function _(t, e) {
                var n;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = f(t)) || e && t && "number" === typeof t.length) {
                        n && (t = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
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
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, o = !0,
                    l = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        l = !0, i = t
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (l) throw i
                        }
                    }
                }
            }

            function f(t, e) {
                if (t) {
                    if ("string" === typeof t) return m(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(t, e) : void 0
                }
            }

            function m(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function h(t, e, n, r, a, i, o) {
                try {
                    var l = t[i](o),
                        u = l.value
                } catch (s) {
                    return void n(s)
                }
                l.done ? e(u) : Promise.resolve(u).then(r, a)
            }

            function v(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var i = t.apply(e, n);

                        function o(t) {
                            h(i, r, a, o, l, "next", t)
                        }

                        function l(t) {
                            h(i, r, a, o, l, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            var b = {
                    components: {
                        TypeBrandModel: d["a"],
                        ExceptionReason: p["a"]
                    },
                    data: function() {
                        return {
                            imei: "",
                            scannData: [],
                            dict: {
                                types: []
                            },
                            loading: !1,
                            saveLoading: !1
                        }
                    },
                    mounted: function() {
                        this.$route.query.no && this.getDetail(), this.getTypes()
                    },
                    methods: {
                        getAbnormalImeiData: function() {
                            var t = v(o.a.mark((function t() {
                                var e, n, r, a, i, u, s, c, d;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e = this.$loading({
                                                target: ".app-container"
                                            }), t.prev = 1, t.next = 4, Object(l["a"])({
                                                imei: this.imei,
                                                transfer_order_id: this.$route.query.id ? this.$route.query.id : null
                                            });
                                        case 4:
                                            if (n = t.sent, this.imei = null, e.close(), r = n.data.detail, r.num = 1, r.abnormalVal = null, r.textarea = null, 0 == this.scannData.length) this.scannData.push({
                                                transfer_order: n.data.transfer_order,
                                                detail: [r]
                                            });
                                            else {
                                                for (i = 0; i < this.scannData.length; i++) a = this.scannData[i];
                                                if (a.transfer_order.id == n.data.transfer_order.id) {
                                                    u = !0, s = _(a.detail);
                                                    try {
                                                        for (s.s(); !(c = s.n()).done;) d = c.value, r.product_id == d.product_id && (u = !1)
                                                    } catch (o) {
                                                        s.e(o)
                                                    } finally {
                                                        s.f()
                                                    }
                                                    u && a.detail.push(r)
                                                } else this.scannData.push({
                                                    transfer_order: n.data.transfer_order,
                                                    detail: [r]
                                                })
                                            }
                                            t.next = 19;
                                            break;
                                        case 14:
                                            t.prev = 14, t.t0 = t["catch"](1), e.close(), this.imei = null, console.log(t.t0);
                                        case 19:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [1, 14]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        handleClickDelete: function(t, e) {
                            this.scannData[t].detail.splice(e, 1)
                        },
                        handleCopy: function(t, e) {
                            var n = JSON.parse(JSON.stringify(this.scannData[t].detail[e]));
                            this.scannData[t].detail.splice(e, 0, n)
                        },
                        tableSubmit: function() {
                            var t = v(o.a.mark((function t() {
                                var e, n, r, a, i, u;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            t.prev = 0, e = [], n = _(this.scannData[0].detail);
                                            try {
                                                for (n.s(); !(r = n.n()).done;) a = r.value, e.push({
                                                    product_id: a.product_id ? a.product_id : 0,
                                                    reason: a.abnormalVal,
                                                    remark: a.textarea,
                                                    cost_price: a.product_cost.cost,
                                                    model_props: a.product_cost.key_props ? a.product_cost.key_props : this.getModelProps(a.props_data),
                                                    model_id: a.model_id,
                                                    brand_id: a.brand_id,
                                                    type_id: a.type_id,
                                                    num: a.product_id ? 1 : a.num,
                                                    imei: a.imei
                                                })
                                            } catch (o) {
                                                n.e(o)
                                            } finally {
                                                n.f()
                                            }
                                            return i = {
                                                transfer_order_id: this.scannData[0].transfer_order.id,
                                                products: e
                                            }, console.log(i), this.saveLoading = !0, t.next = 9, Object(l["b"])(i);
                                        case 9:
                                            u = t.sent, this.saveLoading = !1, this.$message.success(u.msg), this.$router.push({
                                                name: "type-in-exception-list",
                                                query: {
                                                    abnormal_report_order_no: u.data.abnormal_report_order_no
                                                }
                                            }), t.next = 18;
                                            break;
                                        case 15:
                                            t.prev = 15, t.t0 = t["catch"](0), this.saveLoading = !1;
                                        case 18:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 15]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        getModelProps: function(t) {
                            var e, n = [],
                                r = _(t);
                            try {
                                for (r.s(); !(e = r.n()).done;) {
                                    var a = e.value;
                                    n.push(a.pnid + ":" + a.default_value)
                                }
                            } catch (i) {
                                r.e(i)
                            } finally {
                                r.f()
                            }
                            return n.join(";")
                        },
                        addRows: function(t) {
                            this.scannData[t].detail.push({
                                type_id: null,
                                brand_data: [],
                                brand_id: null,
                                model_data: [],
                                model_id: null,
                                imei: null,
                                num: 1,
                                product_cost: {
                                    cost: null
                                },
                                abnormalVal: null,
                                textarea: null,
                                props_data: []
                            })
                        },
                        getTypes: function() {
                            var t = v(o.a.mark((function t() {
                                var e;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(c["p"])();
                                        case 2:
                                            e = t.sent, this.dict.types = e.data;
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
                        getBrands: function() {
                            var t = v(o.a.mark((function t(e) {
                                var n;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(c["d"])({
                                                type_id: e.type_id
                                            });
                                        case 2:
                                            n = t.sent, this.$set(e, "brand_data", n.data);
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        getModels: function() {
                            var t = v(o.a.mark((function t(e) {
                                var n;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(c["i"])({
                                                type_id: e.type_id,
                                                brand_id: e.brand_id
                                            });
                                        case 2:
                                            n = t.sent, this.$set(e, "model_data", n.data);
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        getDetail: function() {
                            var t = v(o.a.mark((function t() {
                                var e, n;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e = this.$loading({
                                                target: ".app-container"
                                            }), t.next = 3, Object(s["a"])({
                                                transfer_order_id: this.$route.query.id
                                            });
                                        case 3:
                                            n = t.sent, e.close(), this.$set(this, "scannData", [{
                                                transfer_order: n.data.transfer_order,
                                                detail: []
                                            }]);
                                        case 6:
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
                        getProps: function() {
                            var t = v(o.a.mark((function t(e) {
                                var n, r, a, i;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e.props_data = null, t.next = 3, Object(u["k"])({
                                                model_id: e.model_id
                                            });
                                        case 3:
                                            n = t.sent, r = _(n.data[e.model_id]);
                                            try {
                                                for (r.s(); !(a = r.n()).done;) i = a.value, i.default_value = i.list[0].pvid + ""
                                            } catch (o) {
                                                r.e(o)
                                            } finally {
                                                r.f()
                                            }
                                            this.$set(e, "props_data", n.data[e.model_id]), console.log(e);
                                        case 8:
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
                y = b,
                w = (n("8caf"), n("5d22")),
                g = Object(w["a"])(y, r, a, !1, null, "115bdd9f", null);
            e["default"] = g.exports
        },
        "7d06": function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return a
            })), n.d(e, "a", (function() {
                return i
            }));
            var r = n("b775");

            function a(t) {
                return Object(r["a"])({
                    url: "/api/input/my_receive",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(r["a"])({
                    url: "/api/input/show_receive_order",
                    method: "get",
                    params: t
                })
            }
        },
        "8caf": function(t, e, n) {
            "use strict";
            n("5dbc")
        },
        afe9: function(t, e, n) {
            "use strict";
            n.d(e, "m", (function() {
                return a
            })), n.d(e, "g", (function() {
                return i
            })), n.d(e, "j", (function() {
                return o
            })), n.d(e, "d", (function() {
                return l
            })), n.d(e, "i", (function() {
                return u
            })), n.d(e, "k", (function() {
                return s
            })), n.d(e, "s", (function() {
                return c
            })), n.d(e, "l", (function() {
                return d
            })), n.d(e, "p", (function() {
                return p
            })), n.d(e, "n", (function() {
                return _
            })), n.d(e, "c", (function() {
                return f
            })), n.d(e, "b", (function() {
                return m
            })), n.d(e, "h", (function() {
                return h
            })), n.d(e, "q", (function() {
                return v
            })), n.d(e, "f", (function() {
                return b
            })), n.d(e, "o", (function() {
                return y
            })), n.d(e, "r", (function() {
                return w
            })), n.d(e, "e", (function() {
                return g
            })), n.d(e, "a", (function() {
                return x
            }));
            var r = n("b775");

            function a(t) {
                return Object(r["a"])({
                    url: "/api/input/type_list",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(r["a"])({
                    url: "/api/input/manual_work",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(r["a"])({
                    url: "/api/input/scan_receive",
                    method: "get",
                    params: t
                })
            }

            function l(t) {
                return Object(r["a"])({
                    url: "/api/input/get_brand",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(r["a"])({
                    url: "/api/input/get_model",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(r["a"])({
                    url: "/api/input/get_props",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(r["a"])({
                    url: "/api/input/zz_colors",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(r["a"])({
                    url: "/api/input/get_sha_lou_result_by_transfer_order",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(r["a"])({
                    url: "/api/input/save",
                    method: "post",
                    data: t
                })
            }

            function _(t) {
                return Object(r["a"])({
                    url: "/api/input/save_and_transfer_store",
                    method: "post",
                    data: t
                })
            }

            function f(t) {
                return Object(r["a"])({
                    url: "/api/input/validate_imei_can_input",
                    method: "get",
                    params: t
                })
            }

            function m(t) {
                return Object(r["a"])({
                    url: "/api/input/android_input_tool",
                    method: "post",
                    data: t
                })
            }

            function h(t) {
                return Object(r["a"])({
                    url: "/api/input/mapping_list",
                    method: "post",
                    data: t
                })
            }

            function v(t) {
                return Object(r["a"])({
                    url: "/api/input/mapping_store",
                    method: "post",
                    data: t
                })
            }

            function b(t) {
                return Object(r["a"])({
                    url: "/api/product/model_color_picture_urls",
                    method: "get",
                    params: t
                })
            }

            function y(t) {
                return Object(r["a"])({
                    url: "/api/input/submit_edit_params_all",
                    method: "post",
                    data: t
                })
            }

            function w(t) {
                return Object(r["a"])({
                    url: "/api/input/change_purchase_order_detail_imei",
                    method: "post",
                    data: t
                })
            }

            function g(t) {
                return Object(r["a"])({
                    url: "/api/input/get_business_line",
                    method: "get",
                    params: t
                })
            }

            function x(t) {
                return Object(r["a"])({
                    url: "/api/input/abnormal_report_c2c",
                    method: "post",
                    data: t
                })
            }
        },
        f2f0: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            })), n.d(e, "b", (function() {
                return i
            }));
            var r = n("b775");

            function a(t) {
                return Object(r["a"])({
                    url: "/api/input/abnormal_report_scan_tag",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(r["a"])({
                    url: "/api/input/abnormal_report",
                    method: "post",
                    data: t
                })
            }
        }
    }
]);