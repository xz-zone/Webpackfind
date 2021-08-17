(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-313e2626"], {
        2934: function(t, e, a) {
            "use strict";
            a.d(e, "p", (function() {
                return n
            })), a.d(e, "d", (function() {
                return r
            })), a.d(e, "i", (function() {
                return o
            })), a.d(e, "m", (function() {
                return s
            })), a.d(e, "b", (function() {
                return c
            })), a.d(e, "g", (function() {
                return l
            })), a.d(e, "k", (function() {
                return p
            })), a.d(e, "j", (function() {
                return u
            })), a.d(e, "h", (function() {
                return d
            })), a.d(e, "n", (function() {
                return h
            })), a.d(e, "a", (function() {
                return f
            })), a.d(e, "l", (function() {
                return _
            })), a.d(e, "q", (function() {
                return m
            })), a.d(e, "f", (function() {
                return g
            })), a.d(e, "o", (function() {
                return v
            })), a.d(e, "c", (function() {
                return b
            })), a.d(e, "e", (function() {
                return y
            }));
            var i = a("b775");

            function n(t) {
                return Object(i["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: t
                })
            }

            function r(t) {
                return Object(i["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(i["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(i["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(i["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: t
                })
            }

            function l(t) {
                return Object(i["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(i["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(i["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(i["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: t
                })
            }

            function h(t) {
                return Object(i["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: t
                })
            }

            function f(t) {
                return Object(i["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: t
                })
            }

            function _(t) {
                return Object(i["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: t
                })
            }

            function m(t) {
                return Object(i["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: t
                })
            }

            function g(t) {
                return Object(i["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: t
                })
            }

            function v(t) {
                return Object(i["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: t
                })
            }

            function b(t) {
                return Object(i["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: t
                })
            }

            function y(t) {
                return Object(i["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: t
                })
            }
        },
        "45e5": function(t, e, a) {
            "use strict";
            a.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "app-container"
                    }, [t.pageData ? a("div", {
                        staticClass: "detail-table body-list"
                    }, [t._l(t.errorList, (function(e, i) {
                        return a("el-alert", {
                            key: "上报问题-" + i,
                            staticStyle: {
                                "margin-bottom": "3px"
                            },
                            attrs: {
                                type: "error",
                                "close-text": "已修改"
                            },
                            on: {
                                close: function(a) {
                                    return t.closeError(e.id)
                                }
                            }
                        }, [t._v("\n        【\n        "), e.report_user ? a("span", [t._v(t._s(e.report_user.real_name))]) : t._e(), t._v("\n        】上报问题【" + t._s(e.error_type.name) + "】，请编辑及时修改！\n      ")])
                    })), t._v(" "), a("div", {}, [a("div", {
                        staticClass: "title"
                    }, [t._v("基础信息")]), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("类目:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "请选择"
                        },
                        on: {
                            change: function(e) {
                                return t.handleChangeType(t.pageData.type_id)
                            }
                        },
                        model: {
                            value: t.pageData.type_id,
                            callback: function(e) {
                                t.$set(t.pageData, "type_id", e)
                            },
                            expression: "pageData.type_id"
                        }
                    }, t._l(t.pageData.types, (function(t) {
                        return a("el-option", {
                            key: "类目-" + t.type_id,
                            attrs: {
                                label: t.type_name,
                                value: t.type_id
                            }
                        })
                    })), 1)], 1)], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("品牌:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "请选择"
                        },
                        on: {
                            change: function(e) {
                                return t.handleChangeBrand(t.pageData.brand_id)
                            }
                        },
                        model: {
                            value: t.pageData.brand_id,
                            callback: function(e) {
                                t.$set(t.pageData, "brand_id", e)
                            },
                            expression: "pageData.brand_id"
                        }
                    }, t._l(t.pageData.brands, (function(t) {
                        return a("el-option", {
                            key: "品牌-" + t.brand_id,
                            attrs: {
                                label: t.brand_name,
                                value: t.brand_id
                            }
                        })
                    })), 1)], 1)], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("商品名称:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("el-input", {
                        attrs: {
                            placeholder: "请输入内容",
                            clearable: ""
                        },
                        model: {
                            value: t.pageData.product_name,
                            callback: function(e) {
                                t.$set(t.pageData, "product_name", e)
                            },
                            expression: "pageData.product_name"
                        }
                    })], 1)], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("IMEI:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [t._v("\n            " + t._s(t.pageData.imei) + "\n            ")])], 1), t._v(" "), 6 == t.pageData.brand_id ? a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("序列号:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("el-input", {
                        attrs: {
                            maxlength: "13",
                            placeholder: "请输入内容",
                            clearable: ""
                        },
                        model: {
                            value: t.pageData.sn,
                            callback: function(e) {
                                t.$set(t.pageData, "sn", e)
                            },
                            expression: "pageData.sn"
                        }
                    })], 1)], 1) : t._e(), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("业务类型:")]), t._v(" "), a("el-col", {
                        staticClass: "status",
                        attrs: {
                            span: 20
                        }
                    }, [a("span", [t._v(t._s(t.pageData.business_type_description))])])], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("是否清理摄像头:")]), t._v(" "), a("el-col", {
                        staticClass: "status",
                        attrs: {
                            span: 20
                        }
                    }, [a("span", [t._v("\n              " + t._s(0 == t.pageData.is_clean_camera ? "正常" : 1 == t.pageData.is_clean_camera ? "清理" : "") + "\n            ")])])], 1), t._v(" "), 1 != t.pageData.business_line ? a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("质检师有话说:")]), t._v(" "), a("el-col", {
                        staticClass: "status",
                        attrs: {
                            span: 20
                        }
                    }, [a("span", [t._v(t._s(t.pageData.quality_talk))])])], 1) : t._e(), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("简介模板:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "请选择"
                        },
                        on: {
                            change: function(e) {
                                return t.handleChangeSelect(t.selectVal.temp)
                            }
                        },
                        model: {
                            value: t.selectVal.temp,
                            callback: function(e) {
                                t.$set(t.selectVal, "temp", e)
                            },
                            expression: "selectVal.temp"
                        }
                    }, t._l(t.arrDataAll.templates, (function(t) {
                        return a("el-option", {
                            key: "简介模板-" + t.b_id,
                            attrs: {
                                label: t.title,
                                value: t.b_id
                            }
                        })
                    })), 1)], 1)], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("简介:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("el-input", {
                        staticClass: "textarea",
                        attrs: {
                            type: "textarea",
                            placeholder: "请输入内容",
                            rows: "5"
                        },
                        model: {
                            value: t.selectVal.textarea,
                            callback: function(e) {
                                t.$set(t.selectVal, "textarea", e)
                            },
                            expression: "selectVal.textarea"
                        }
                    }), t._v(" "), a("el-tag", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !1,
                            expression: "false"
                        }],
                        staticStyle: {
                            width: "100%",
                            "font-size": "15px"
                        },
                        attrs: {
                            type: "danger"
                        }
                    }, [t._v(t._s(t.selectVal.textarea.replace("，，", "，" + t.defectMsg + "，")))])], 1)], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("问题备注:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("div", {
                        staticClass: "remark"
                    }, [a("span", [t._v("质检备注:")]), t._v(" "), t.pageData.crawler_result ? a("span", [t._v("\n                【" + t._s("" == t.pageData.crawler_result.quality_remark ? "无" : t.pageData.crawler_result.quality_remark) + "】\n              ")]) : t._e(), t._v(" "), t.pageData.crawler_result && 1 == t.pageData.crawler_result.is_cmcc_custom ? a("span", [t._v("|| 移动定制版")]) : t._e(), t._v(" "), a("br"), t._v(" "), a("span", [t._v("补充备注：" + t._s("" == t.pageData.remark ? "无" : t.pageData.remark))])])])], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("是否激活:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("el-radio-group", {
                        model: {
                            value: t.pageData.is_activation,
                            callback: function(e) {
                                t.$set(t.pageData, "is_activation", e)
                            },
                            expression: "pageData.is_activation"
                        }
                    }, [a("el-radio", {
                        attrs: {
                            label: 1
                        }
                    }, [t._v("已激活")]), t._v(" "), a("el-radio", {
                        attrs: {
                            label: 2
                        }
                    }, [t._v("未激活")])], 1)], 1)], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("手机外观:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, t._l(t.dict.position, (function(e, i) {
                        return a("el-popover", {
                            staticStyle: {
                                "text-align": "center"
                            },
                            attrs: {
                                placement: "bottom",
                                trigger: "click"
                            },
                            model: {
                                value: e.pop_flag,
                                callback: function(a) {
                                    t.$set(e, "pop_flag", a)
                                },
                                expression: "item.pop_flag"
                            }
                        }, [t._l(t.dict.point, (function(e, n) {
                            return a("div", [a("b", [t._v(t._s(e.name) + "：")]), t._v(" "), a("el-radio-group", {
                                attrs: {
                                    size: "mini"
                                },
                                on: {
                                    change: function(e) {
                                        return t.chooseRadio(i, n)
                                    }
                                },
                                model: {
                                    value: t.attr[i][n],
                                    callback: function(e) {
                                        t.$set(t.attr[i], n, e)
                                    },
                                    expression: "attr[index][index_p]"
                                }
                            }, t._l(t.dict.extent, (function(t, e) {
                                return a("el-radio-button", {
                                    attrs: {
                                        label: t.name
                                    }
                                })
                            })), 1)], 1)
                        })), t._v(" "), a("el-button", {
                            staticStyle: {
                                "margin-top": "10px",
                                "margin-left": "70px"
                            },
                            attrs: {
                                size: "small",
                                icon: "el-icon-delete",
                                type: "danger",
                                plain: ""
                            },
                            on: {
                                click: function(e) {
                                    return t.clearRadio(i)
                                }
                            }
                        }, [t._v("清空")]), t._v(" "), a("el-button", {
                            staticStyle: {
                                margin: "10px 0 0 10px"
                            },
                            attrs: {
                                size: "small",
                                icon: "el-icon-success",
                                type: "success",
                                plain: ""
                            },
                            on: {
                                click: function(t) {
                                    e.pop_flag = !1
                                }
                            }
                        }, [t._v("确定")]), t._v(" "), e.btn_flag ? a("el-button", {
                            attrs: {
                                slot: "reference",
                                type: "primary"
                            },
                            slot: "reference"
                        }, [t._v("\n                " + t._s(e.name) + "\n              ")]) : a("el-button", {
                            attrs: {
                                slot: "reference"
                            },
                            slot: "reference"
                        }, [t._v("\n                " + t._s(e.name) + "\n              ")])], 2)
                    })), 1)], 1), t._v(" "), a("el-row", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.tag_arr.length,
                            expression: "tag_arr.length"
                        }]
                    }, [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("手机外观选中预览：")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, t._l(t.tag_arr, (function(e, i) {
                        return a("el-tag", {
                            staticStyle: {
                                "margin-right": "5px"
                            }
                        }, [t._v(t._s(e))])
                    })), 1)], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("激活时间:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("el-input", {
                        staticClass: "input-width",
                        attrs: {
                            placeholder: "请输入内容",
                            clearable: ""
                        },
                        model: {
                            value: t.pageData.activation_time,
                            callback: function(e) {
                                t.$set(t.pageData, "activation_time", e)
                            },
                            expression: "pageData.activation_time"
                        }
                    })], 1)], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("官方保修:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("el-input", {
                        staticClass: "input-width",
                        attrs: {
                            placeholder: "请输入内容",
                            clearable: ""
                        },
                        model: {
                            value: t.pageData.guarantee_time,
                            callback: function(e) {
                                t.$set(t.pageData, "guarantee_time", e)
                            },
                            expression: "pageData.guarantee_time"
                        }
                    })], 1)], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("商品标签:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("el-select", {
                        attrs: {
                            placeholder: "请选择标签",
                            clearable: "",
                            filterable: "",
                            multiple: ""
                        },
                        on: {
                            change: t.getPricRules
                        },
                        model: {
                            value: t.pageData.tags,
                            callback: function(e) {
                                t.$set(t.pageData, "tags", e)
                            },
                            expression: "pageData.tags"
                        }
                    }, t._l(t.dict.labels, (function(t, e) {
                        return a("el-option", {
                            key: "商品标签-" + e,
                            attrs: {
                                label: t,
                                value: Number(e)
                            }
                        })
                    })), 1)], 1)], 1), t._v(" "), 1 == t.pageData.warehouse.is_sale_put ? a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("售后描述问题:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("div", {
                        staticClass: "remark"
                    }, [a("span", [t._v(t._s(t.pageData.after_sale_desc_problem))])])])], 1) : t._e(), t._v(" "), 1 == t.pageData.type_id ? a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("质检等级:")]), t._v(" "), a("el-col", {
                        staticClass: "status",
                        attrs: {
                            span: 20
                        }
                    }, [a("span", [t._v(t._s(1 == t.pageData.qc_level ? "优品" : 2 == t.pageData.qc_level ? "优良品" : "良品"))])])], 1) : t._e(), t._v(" "), 1 == t.pageData.type_id ? a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("基础功能:")]), t._v(" "), a("el-col", {
                        staticClass: "status",
                        attrs: {
                            span: 20
                        }
                    }, [a("span", [t._v(t._s(t.baseSituation))])])], 1) : t._e(), t._v(" "), a("div", {
                        staticClass: "title"
                    }, [t._v("商品状况")]), t._v(" "), t._l(t.pageData.goods_conditions, (function(e, i) {
                        return a("el-row", {
                            key: "商品状况-" + i
                        }, [a("el-col", {
                            attrs: {
                                span: 4
                            }
                        }, [t._v(t._s(e.pn_name))]), t._v(" "), 1 == e.pn_type ? a("el-col", {
                            attrs: {
                                span: 20
                            }
                        }, [a("el-select", {
                            attrs: {
                                filterable: "",
                                clearable: "",
                                placeholder: "请选择" + e.pn_name
                            },
                            on: {
                                change: function(a) {
                                    return t.handleChange(e)
                                }
                            },
                            model: {
                                value: e.goodsValue,
                                callback: function(a) {
                                    t.$set(e, "goodsValue", a)
                                },
                                expression: "item.goodsValue"
                            }
                        }, t._l(e.list, (function(t, i) {
                            return a("el-option", {
                                key: e.pn_name + "-" + i,
                                attrs: {
                                    label: t.pv_name,
                                    value: t.pvid
                                }
                            })
                        })), 1)], 1) : t._e(), t._v(" "), 2 == e.pn_type ? a("el-col", {
                            attrs: {
                                span: 18
                            }
                        }, [a("el-input", {
                            staticStyle: {
                                width: "200px"
                            },
                            attrs: {
                                placeholder: "请输入" + e.pn_name
                            },
                            on: {
                                change: function(a) {
                                    return t.handleChange(e)
                                }
                            },
                            model: {
                                value: e.inputVal,
                                callback: function(a) {
                                    t.$set(e, "inputVal", a)
                                },
                                expression: "item.inputVal"
                            }
                        })], 1) : t._e()], 1)
                    })), t._v(" "), a("el-row", [a("el-col", {
                        staticClass: "detail-col-12",
                        attrs: {
                            span: 4
                        }
                    }, [t._v("质检项")]), t._v(" "), a("el-col", {
                        staticClass: "detail-col-12",
                        attrs: {
                            span: 20
                        }
                    }, [a("CheckItem", {
                        attrs: {
                            "model-ids": [t.pageData.model_id],
                            package: t.pageData.package,
                            row: t.pageData
                        },
                        on: {
                            "update:package": function(e) {
                                return t.$set(t.pageData, "package", e)
                            }
                        },
                        model: {
                            value: t.pageData.quality_inspection,
                            callback: function(e) {
                                t.$set(t.pageData, "quality_inspection", e)
                            },
                            expression: "pageData.quality_inspection"
                        }
                    })], 1)], 1), t._v(" "), a("div", {
                        staticClass: "title"
                    }, [t._v("商品明细")]), t._v(" "), a("el-row", [a("el-col", {
                        staticClass: "detail-col-12",
                        attrs: {
                            span: 4
                        }
                    }, [t._v("型号")]), t._v(" "), a("el-col", {
                        staticClass: "detail-col-12",
                        attrs: {
                            span: 20
                        }
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "请选择"
                        },
                        on: {
                            change: function(e) {
                                return t.getGoodsDetailData(t.pageData.model_id)
                            }
                        },
                        model: {
                            value: t.pageData.model_id,
                            callback: function(e) {
                                t.$set(t.pageData, "model_id", e)
                            },
                            expression: "pageData.model_id"
                        }
                    }, t._l(t.pageData.models, (function(t) {
                        return a("el-option", {
                            key: "型号-" + t.model_id,
                            attrs: {
                                label: t.model_name,
                                value: t.model_id
                            }
                        })
                    })), 1)], 1)], 1), t._v(" "), t._l(t.arrDataAll.goodsDetail, (function(e, i) {
                        return a("el-row", {
                            key: e.pn_name + "-" + i
                        }, [a("el-col", {
                            attrs: {
                                span: 4
                            }
                        }, [t._v(t._s(e.pn_name))]), t._v(" "), a("el-col", {
                            attrs: {
                                span: 20
                            }
                        }, [a("el-select", {
                            class: {
                                "danger-select": t.isDanger(e)
                            },
                            attrs: {
                                filterable: "",
                                clearable: "",
                                placeholder: "请选择"
                            },
                            on: {
                                change: function(a) {
                                    return t.getPricRules(e)
                                }
                            },
                            model: {
                                value: e.value,
                                callback: function(a) {
                                    t.$set(e, "value", a)
                                },
                                expression: "item.value"
                            }
                        }, t._l(e.list, (function(t, i) {
                            return a("el-option", {
                                key: e.pn_name + "--" + i,
                                attrs: {
                                    label: t.pvname,
                                    value: t.pvid
                                }
                            })
                        })), 1), t._v(" "), t.pageData.official_crawler && t.pageData.official_crawler.color_name && "颜色" == e.pn_name ? a("span", {
                            class: {
                                crawlerInfo: !0, danger: t.isDanger(e)
                            }
                        }, [t._v("爬虫结果：" + t._s(t.pageData.official_crawler.color_name))]) : t._e(), t._v(" "), t.pageData.official_crawler && t.pageData.official_crawler.memory_name && "内存" == e.pn_name ? a("span", {
                            class: {
                                crawlerInfo: !0, danger: t.isDanger(e)
                            }
                        }, [t._v("爬虫结果：" + t._s(t.pageData.official_crawler.memory_name))]) : t._e()], 1)], 1)
                    }))], 2), t._v(" "), a("div", {
                        staticClass: "goods-pic"
                    }, [a("div", {
                        staticClass: "title"
                    }, [t._v("商品图片")]), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("App商品主图片:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, t._l(t.pageData.model_images, (function(e, i) {
                        return a("div", {
                            key: "商品图片" + i,
                            staticClass: "model-box"
                        }, [a("div", {
                            staticClass: "model-img"
                        }, [a("el-popover", {
                            attrs: {
                                "close-delay": 0,
                                transition: "none",
                                placement: "top",
                                "visible-arrow": !1,
                                "popper-options": {
                                    boundariesElement: "body"
                                },
                                width: "425",
                                trigger: "hover"
                            }
                        }, [a("img", {
                            staticStyle: {
                                width: "500px"
                            },
                            attrs: {
                                src: e.image_url,
                                alt: ""
                            }
                        }), t._v(" "), a("div", {
                            attrs: {
                                slot: "reference"
                            },
                            slot: "reference"
                        }, [a("img", {
                            staticClass: "model-pic",
                            attrs: {
                                src: e.image_url,
                                alt: ""
                            }
                        })])]), t._v(" "), a("div", {
                            staticClass: "model-pic-name"
                        }, [t._v(t._s(e.name))])], 1)])
                    })), 0)], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("商品主图片:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [t.pageData.main_pic ? a("div", [a("el-popover", {
                        attrs: {
                            "close-delay": 0,
                            transition: "none",
                            placement: "right",
                            "visible-arrow": !1,
                            "popper-options": {
                                boundariesElement: "body"
                            },
                            width: "525",
                            trigger: "hover"
                        }
                    }, [a("img", {
                        staticClass: "avatar",
                        staticStyle: {
                            width: "500px"
                        },
                        attrs: {
                            src: t.pageData.main_pic
                        }
                    }), t._v(" "), a("div", {
                        attrs: {
                            slot: "reference"
                        },
                        slot: "reference"
                    }, [a("img", {
                        staticStyle: {
                            width: "146px"
                        },
                        attrs: {
                            src: t.pageData.main_pic,
                            alt: ""
                        }
                    })])])], 1) : a("div", {
                        staticClass: "is-main-pic"
                    })])], 1), t._v(" "), 1 != t.pageData.business_line && t.pageData.product_fittings_images.length > 0 ? a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("配件图片:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, t._l(t.pageData.product_fittings_images, (function(e, i) {
                        return a("div", {
                            key: "配件图片" + i,
                            staticClass: "model-box"
                        }, [a("div", {
                            staticClass: "model-img"
                        }, [a("el-popover", {
                            attrs: {
                                "close-delay": 0,
                                transition: "none",
                                placement: "top",
                                "visible-arrow": !1,
                                "popper-options": {
                                    boundariesElement: "body"
                                },
                                width: "425",
                                trigger: "hover"
                            }
                        }, [a("img", {
                            staticStyle: {
                                width: "500px"
                            },
                            attrs: {
                                src: e.image_url,
                                alt: ""
                            }
                        }), t._v(" "), a("div", {
                            attrs: {
                                slot: "reference"
                            },
                            slot: "reference"
                        }, [a("img", {
                            staticClass: "model-pic",
                            attrs: {
                                src: e.image_url,
                                alt: ""
                            }
                        })])])], 1)])
                    })), 0)], 1) : t._e(), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [a("div", [t._v("轮播图片:")])]), t._v(" "), a("el-col", {
                        staticClass: "upload",
                        attrs: {
                            span: 20
                        }
                    }, [a("transition-group", {
                        staticClass: "drog-move",
                        attrs: {
                            name: "drog",
                            tag: "ul"
                        }
                    }, t._l(t.fileList, (function(e, i) {
                        return a("li", {
                            key: "轮播图片-" + e.url,
                            staticClass: "upload-image",
                            attrs: {
                                draggable: "true"
                            },
                            on: {
                                dragstart: function(e) {
                                    return t.dragStart(e, i)
                                },
                                dragover: t.allowDrop,
                                drop: function(e) {
                                    return t.drop(e, i)
                                },
                                click: function(a) {
                                    return t.handlePictureCardPreview(e, i)
                                },
                                hover: function(a) {
                                    return t.handlePictureHover(e)
                                }
                            }
                        }, [a("el-popover", {
                            attrs: {
                                "close-delay": 0,
                                transition: "none",
                                placement: "top",
                                "visible-arrow": !1,
                                "popper-options": {
                                    boundariesElement: "body"
                                },
                                width: "525",
                                trigger: "hover"
                            }
                        }, [a("img", {
                            staticStyle: {
                                width: "500px"
                            },
                            attrs: {
                                src: e.url,
                                alt: ""
                            }
                        }), t._v(" "), a("div", {
                            attrs: {
                                slot: "reference"
                            },
                            slot: "reference"
                        }, [a("img", {
                            staticClass: "image",
                            attrs: {
                                src: e.url,
                                alt: ""
                            }
                        })])]), t._v(" "), a("i", {
                            staticClass: "el-icon-close close",
                            on: {
                                click: function(e) {
                                    return t.handlePicRemove(i, e)
                                }
                            }
                        })], 1)
                    })), 0), t._v(" "), a("el-upload", {
                        attrs: {
                            multiple: !0,
                            action: "",
                            "http-request": t.getUploadPicture,
                            "list-type": "picture-card",
                            "show-file-list": !1
                        }
                    }, [a("i", {
                        staticClass: "el-icon-plus"
                    })]), t._v(" "), a("span", {
                        staticClass: "color-danger",
                        staticStyle: {
                            "font-size": "18px",
                            "font-weight": "600",
                            "line-height": "148px"
                        }
                    }, [t._v("\n              （共\n              " + t._s(t.fileList.length + (t.pageData.main_pic ? 1 : 0)) + " 张）\n            ")])], 1)], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [a("div", [t._v("视频:")])]), t._v(" "), a("el-col", {
                        staticClass: "upload",
                        staticStyle: {
                            position: "relative"
                        },
                        attrs: {
                            span: 20
                        }
                    }, [t.pageData.video_url ? a("video", {
                        staticStyle: {
                            "margin-right": "10px"
                        },
                        attrs: {
                            src: t.pageData.video_url,
                            controls: "",
                            width: "146px"
                        }
                    }) : t._e(), t._v(" "), t.pageData.video_url ? a("i", {
                        staticClass: "el-icon-circle-close",
                        staticStyle: {
                            position: "absolute",
                            left: "130px",
                            top: "20px",
                            "font-size": "20px",
                            color: "white",
                            cursor: "pointer"
                        },
                        on: {
                            click: function(e) {
                                t.pageData.video_url = ""
                            }
                        }
                    }) : t._e(), t._v(" "), a("el-upload", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: t.video_upload_loading,
                            expression: "video_upload_loading"
                        }],
                        attrs: {
                            multiple: !1,
                            action: "",
                            accept: "video/*",
                            "http-request": t.getUploadVideo,
                            "list-type": "picture-card",
                            "show-file-list": !1,
                            "on-preview": t.handlePictureCardPreview
                        }
                    }, [a("i", {
                        staticClass: "el-icon-plus"
                    })])], 1)], 1)], 1), t._v(" "), 1 == t.pageData.business_line ? a("div", {
                        staticClass: "goods-price"
                    }, [a("div", {
                        staticClass: "title"
                    }, [t._v("商品价格")]), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("商品售价:")]), t._v(" "), a("el-col", {
                        staticClass: "price-formula",
                        attrs: {
                            span: 20
                        }
                    }, [t.pageData.supplier ? a("el-input", {
                        staticStyle: {
                            width: "200px"
                        },
                        attrs: {
                            placeholder: "请输入内容",
                            disabled: 0 == t.pageData.is_can_update_price
                        },
                        model: {
                            value: t.pageData.price,
                            callback: function(e) {
                                t.$set(t.pageData, "price", e)
                            },
                            expression: "pageData.price"
                        }
                    }) : t._e(), t._v(" "), a("div", {
                        staticClass: "price-info"
                    }, [a("div", [a("span", [t._v("(机器成本: " + t._s(t.pageData.product_cost.cost) + ")")]), t._v(" "), t.pageData.supplier ? a("span", [t._v("\n                  (供应商: " + t._s(t.pageData.supplier.supplier_name) + "\n                  "), 1 == t.pageData.supplier.is_independent_pricing ? a("el-tag", {
                        attrs: {
                            type: "success",
                            size: "small"
                        }
                    }, [t._v("自主定价")]) : t._e(), t._v(")\n                ")], 1) : t._e(), t._v(" "), a("span", [t._v(t._s(t.pageData.supplier.is_independent_pricing_error))])]), t._v(" "), a("div", {
                        staticClass: "valuation"
                    }, [t._v("计价公式: " + t._s(t.selectVal.priceRules))])])], 1)], 1)], 1) : t._e(), t._v(" "), "view" != t.view ? a("div", {
                        staticClass: "submit"
                    }, [a("el-button", {
                        attrs: {
                            type: "primary",
                            loading: t.submitLoading
                        },
                        on: {
                            click: function(e) {
                                return t.handleClickEidtShelf(0)
                            }
                        }
                    }, [t._v("编辑完成")]), t._v(" "), a("el-button", {
                        attrs: {
                            type: "primary",
                            loading: t.saleLoading
                        },
                        on: {
                            click: function(e) {
                                return t.handleClickEidtShelf(1)
                            }
                        }
                    }, [t._v("更新并上架")]), t._v(" "), a("el-button", {
                        attrs: {
                            type: "danger",
                            disabled: 1 == t.pageData.product_base.is_abnormal_report
                        },
                        on: {
                            click: function(e) {
                                t.showExceptionDialog = !0
                            }
                        }
                    }, [t._v("登记异常")]), t._v(" "), a("el-button", {
                        attrs: {
                            type: "danger"
                        },
                        on: {
                            click: function(e) {
                                t.showErrDialog = !0
                            }
                        }
                    }, [t._v("错误上报")])], 1) : t._e(), t._v(" "), t.pageData ? a("ExceptionDialog", {
                        attrs: {
                            showDialog: t.showExceptionDialog
                        },
                        on: {
                            "update:showDialog": function(e) {
                                t.showExceptionDialog = e
                            },
                            "update:show-dialog": function(e) {
                                t.showExceptionDialog = e
                            },
                            done: t.handleRoute
                        },
                        model: {
                            value: t.pageData.imei,
                            callback: function(e) {
                                t.$set(t.pageData, "imei", e)
                            },
                            expression: "pageData.imei"
                        }
                    }) : t._e()], 2) : t._e(), t._v(" "), t.pageData ? a("ErrorDialog", {
                        attrs: {
                            imei: t.pageData.imei,
                            "show-dialog": t.showErrDialog,
                            "node-id": 6
                        },
                        on: {
                            "update:imei": function(e) {
                                return t.$set(t.pageData, "imei", e)
                            },
                            "update:showDialog": function(e) {
                                t.showErrDialog = e
                            },
                            "update:show-dialog": function(e) {
                                t.showErrDialog = e
                            }
                        }
                    }) : t._e(), t._v(" "), a("Barcode", {
                        attrs: {
                            id: "barcode-container",
                            data: t.barcodeInfo
                        }
                    }), t._v(" "), a("el-button", {
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
                        ref: "print-barcode",
                        staticClass: "print",
                        attrs: {
                            type: "primary"
                        }
                    }, [t._v("打印")])], 1)
                },
                n = [],
                r = a("4838"),
                o = a.n(r),
                s = a("f4c4"),
                c = a("9679"),
                l = a("de26"),
                p = a("5f87"),
                u = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return t.productData ? a("el-dialog", {
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
                    }, [a("el-form", {
                        attrs: {
                            model: t.exceptionForm,
                            "label-width": "150px"
                        }
                    }, [a("el-form-item", {
                        attrs: {
                            label: "类目品牌："
                        }
                    }, [t.productData.type ? a("div", [t._v(t._s(t.productData.type.name) + " " + t._s(t.productData.brand.name))]) : t._e()]), t._v(" "), a("el-form-item", {
                        attrs: {
                            label: "型号："
                        }
                    }, [t.productData.model ? a("div", [t._v(t._s(t.productData.model.name))]) : t._e()]), t._v(" "), a("el-form-item", {
                        attrs: {
                            label: "机器码："
                        }
                    }, [t._v(t._s(t.productData.imei))]), t._v(" "), a("el-form-item", {
                        attrs: {
                            label: "数量："
                        }
                    }, [t._v("1")]), t._v(" "), a("el-form-item", {
                        attrs: {
                            label: "成本："
                        }
                    }, [t.productData.product_cost ? a("div", [t._v(t._s(t.productData.product_cost.cost))]) : t._e()]), t._v(" "), a("el-form-item", {
                        attrs: {
                            label: "异常原因："
                        }
                    }, [a("ExceptionReason", {
                        attrs: {
                            mode: "edit"
                        },
                        model: {
                            value: t.exceptionForm.reason,
                            callback: function(e) {
                                t.$set(t.exceptionForm, "reason", e)
                            },
                            expression: "exceptionForm.reason"
                        }
                    })], 1), t._v(" "), a("el-form-item", {
                        attrs: {
                            label: "异常描述："
                        }
                    }, [a("el-input", {
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
                    })], 1)], 1), t._v(" "), a("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [a("el-button", {
                        on: {
                            click: function(e) {
                                return t.$emit("update:showDialog", !1)
                            }
                        }
                    }, [t._v("取 消")]), t._v(" "), a("el-button", {
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
                    }, [t._v("确定")]), t._v(" "), a("el-button", {
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
                    }, [t._v("确定并打印异常单号")])], 1), t._v(" "), a("Barcode", {
                        attrs: {
                            id: "barcode-container",
                            data: t.barcodeInfo,
                            line: 4
                        }
                    }), t._v(" "), a("el-button", {
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
                h = a("a6a4"),
                f = a("c058"),
                _ = a("6d8f");

            function m(t, e, a, i, n, r, o) {
                try {
                    var s = t[r](o),
                        c = s.value
                } catch (l) {
                    return void a(l)
                }
                s.done ? e(c) : Promise.resolve(c).then(i, n)
            }

            function g(t) {
                return function() {
                    var e = this,
                        a = arguments;
                    return new Promise((function(i, n) {
                        var r = t.apply(e, a);

                        function o(t) {
                            m(r, i, n, o, s, "next", t)
                        }

                        function s(t) {
                            m(r, i, n, o, s, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            var v = {
                    name: "ExceptionDialog",
                    components: {
                        ExceptionReason: f["a"],
                        Barcode: _["a"]
                    },
                    props: {
                        value: [String],
                        showDialog: [Boolean]
                    },
                    data: function() {
                        return {
                            imei: this.value,
                            showException: this.showDialog,
                            productData: {},
                            order: {},
                            exceptionForm: {
                                reason: null,
                                remark: null
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
                            this.imei = t
                        }
                    },
                    mounted: function() {
                        console.log("imei：", this.imei), this.imei
                    },
                    methods: {
                        addException: function() {
                            var t = g(o.a.mark((function t(e) {
                                var a, i, n, r = this;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, a = {
                                                transfer_order_id: this.order.id,
                                                products: [{
                                                    product_id: this.productData.product_id,
                                                    type_id: this.productData.type_id,
                                                    brand_id: this.productData.brand_id,
                                                    model_id: this.productData.model_id,
                                                    cost_price: this.productData.product_cost.cost,
                                                    num: 1,
                                                    reason: this.exceptionForm.reason,
                                                    remark: this.exceptionForm.remark
                                                }]
                                            }, this.exceptionLoading = !0, t.next = 5, Object(h["b"])(a);
                                        case 5:
                                            i = t.sent, this.exceptionLoading = !1, this.$emit("update:showDialog", !1), this.$message.success("上报成功！"), e ? (n = {
                                                code: i.data.abnormal_report_order_no,
                                                title: "".concat(this.order.to_node.name, " 异常单（1台）<br/>").concat((new Date).toLocaleString(), "</br>").concat(this.productData.suppiler_name.name)
                                            }, this.barcodeInfo.push(n), setTimeout((function() {
                                                r.$refs["printBtn"].$el.click(), r.$emit("done", {})
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
                            var t = g(o.a.mark((function t() {
                                var e, a;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e = this.$loading({
                                                target: ".exception-dialog"
                                            }), t.prev = 1, t.next = 4, Object(h["a"])({
                                                imei: this.imei
                                            });
                                        case 4:
                                            a = t.sent, e.close(), this.productData = a.data.detail, this.order = a.data.transfer_order, this.addStatus = !1, t.next = 15;
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
                b = v,
                y = a("5d22"),
                D = Object(y["a"])(b, u, d, !1, null, "194d4ad5", null),
                w = D.exports,
                x = a("c4a5"),
                k = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", [a("el-button", {
                        on: {
                            click: function(e) {
                                t.showDialog = !0
                            }
                        }
                    }, [t._v("质检项")]), t._v(" "), a("el-dialog", {
                        staticStyle: {
                            "text-align": "left"
                        },
                        attrs: {
                            title: "",
                            visible: t.showDialog
                        },
                        on: {
                            "update:visible": function(e) {
                                t.showDialog = e
                            }
                        }
                    }, [a("div", {
                        staticStyle: {
                            display: "flex",
                            "font-weight": "600",
                            "margin-bottom": "10px"
                        }
                    }, [a("div", {
                        staticStyle: {
                            width: "200px"
                        }
                    }, [t._v("IMEI：" + t._s(t.row.imei))]), t._v(" "), a("div", [t._v("商品名称：" + t._s(t.row.product_name))])]), t._v(" "), a("div", {
                        staticStyle: {
                            "margin-bottom": "20px",
                            "font-weight": "600",
                            "padding-bottom": "10px",
                            "border-bottom": "1px solid #EEE"
                        }
                    }, [t._v("\n      历史记录：\n      "), t._l(t.row.quality_tracks, (function(e, i) {
                        return a("div", {
                            key: "历史记录-" + i
                        }, [t._v("\n        " + t._s(e.quality_name) + "：" + t._s(e.quality_remark) + "\n      ")])
                    }))], 2), t._v(" "), a("el-tabs", {
                        attrs: {
                            "tab-position": "left"
                        },
                        model: {
                            value: t.selectTab,
                            callback: function(e) {
                                t.selectTab = e
                            },
                            expression: "selectTab"
                        }
                    }, t._l(this.dict.check_items, (function(e, i) {
                        return a("el-tab-pane", {
                            key: "质检分类" + e.id,
                            staticStyle: {
                                "padding-left": "40px"
                            },
                            attrs: {
                                label: e.name,
                                name: i + ""
                            }
                        }, t._l(e.items, (function(e, n) {
                            return a("div", {
                                key: "质检子项" + e.id,
                                staticStyle: {
                                    "margin-bottom": "10px",
                                    "align-items": "center"
                                }
                            }, [a("div", [a("span", {
                                staticStyle: {
                                    color: "red"
                                }
                            }, [t._v("*")]), t._v(" " + t._s(e.name) + t._s(JSON.stringify(e.result)) + "\n          ")]), t._v(" "), 1 == e.select_type ? a("el-radio-group", {
                                staticStyle: {
                                    "margin-left": "10px",
                                    display: "flex",
                                    position: "relative",
                                    top: "1px"
                                },
                                on: {
                                    change: t.handleRadioChange
                                },
                                model: {
                                    value: t.tempQc[i].items[n].resultModel[0],
                                    callback: function(e) {
                                        t.$set(t.tempQc[i].items[n].resultModel, 0, e)
                                    },
                                    expression: "tempQc[index].items[subIndex].resultModel[0]"
                                }
                            }, t._l(e.result_list, (function(i) {
                                return a("el-radio", {
                                    key: "质检结果" + e.id + i.id,
                                    attrs: {
                                        label: i.id + ":" + i.name
                                    }
                                }, [t._v(t._s(i.name))])
                            })), 1) : t._e(), t._v(" "), 2 == e.select_type ? a("el-checkbox-group", {
                                staticStyle: {
                                    "margin-left": "10px",
                                    display: "flex",
                                    "align-items": "center"
                                },
                                on: {
                                    change: t.handleRadioChange
                                },
                                model: {
                                    value: t.tempQc[i].items[n].resultModel,
                                    callback: function(e) {
                                        t.$set(t.tempQc[i].items[n], "resultModel", e)
                                    },
                                    expression: "tempQc[index].items[subIndex].resultModel"
                                }
                            }, t._l(e.result_list, (function(i) {
                                return a("el-checkbox", {
                                    key: "质检结果" + e.id + i.id,
                                    attrs: {
                                        label: i.id + ":" + i.name
                                    }
                                }, [t._v(t._s(i.name))])
                            })), 1) : t._e()], 1)
                        })), 0)
                    })), 1), t._v(" "), a("div", {
                        staticStyle: {
                            display: "flex",
                            "justify-content": "flex-end",
                            "margin-top": "20px"
                        }
                    }, [Number(t.selectTab) < this.dict.check_items.length ? a("el-button", {
                        staticStyle: {
                            "margin-right": "10px"
                        },
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.handleNext()
                            }
                        }
                    }, [t._v("下一项")]) : t._e(), t._v(" "), a("el-button", {
                        attrs: {
                            type: "success"
                        },
                        on: {
                            click: function(e) {
                                t.showDialog = !1
                            }
                        }
                    }, [t._v("完成")])], 1)], 1)], 1)
                },
                O = [],
                j = (a("98de"), a("2934"));

            function C(t, e, a, i, n, r, o) {
                try {
                    var s = t[r](o),
                        c = s.value
                } catch (l) {
                    return void a(l)
                }
                s.done ? e(c) : Promise.resolve(c).then(i, n)
            }

            function S(t) {
                return function() {
                    var e = this,
                        a = arguments;
                    return new Promise((function(i, n) {
                        var r = t.apply(e, a);

                        function o(t) {
                            C(r, i, n, o, s, "next", t)
                        }

                        function s(t) {
                            C(r, i, n, o, s, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }

            function $(t) {
                return $ = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, $(t)
            }

            function A(t, e) {
                var a;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (a = V(t)) || e && t && "number" === typeof t.length) {
                        a && (t = a);
                        var i = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
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
                var r, o = !0,
                    s = !1;
                return {
                    s: function() {
                        a = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = a.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, r = t
                    },
                    f: function() {
                        try {
                            o || null == a.return || a.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                }
            }

            function V(t, e) {
                if (t) {
                    if ("string" === typeof t) return E(t, e);
                    var a = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? E(t, e) : void 0
                }
            }

            function E(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, i = new Array(e); a < e; a++) i[a] = t[a];
                return i
            }
            var P = {
                    name: "ComponentCheckItemPanel",
                    props: {
                        value: {
                            type: Array
                        },
                        row: {
                            type: Object,
                            default: {}
                        }
                    },
                    data: function() {
                        return {
                            showDialog: !1,
                            dict: {
                                check_items: []
                            },
                            checkboxArr: {},
                            radioArr: {},
                            selectTab: "0",
                            quality_inspection: this.value,
                            tempQc: [],
                            checkItems: []
                        }
                    },
                    watch: {
                        value: function(t) {}
                    },
                    mounted: function() {
                        console.log("质检组件：：", this.value), this.getCheckDict(), this.handleRadioChange()
                    },
                    methods: {
                        formatCheckItems: function(t) {
                            var e = this;
                            return this.tempQc = [], t.map((function(t) {
                                var a = {
                                    id: t.id,
                                    items: []
                                };
                                return t.items = t.items.map((function(t) {
                                    var i = t.result_list.filter((function(t) {
                                        return 1 == t.is_default
                                    })).map((function(t) {
                                        return t.id + ":" + t.name
                                    }));
                                    return a.items.push({
                                        id: t.id,
                                        resultModel: e.quality_inspection.length > 0 ? e.getDetailSelect(t.id, i) : i,
                                        default: JSON.parse(JSON.stringify(i))
                                    }), t
                                })), e.tempQc.push(a), t
                            }))
                        },
                        getDetailSelect: function(t, e) {
                            var a, i = A(this.quality_inspection);
                            try {
                                for (i.s(); !(a = i.n()).done;) {
                                    var n, r = a.value,
                                        o = A(r.items);
                                    try {
                                        var s = function() {
                                            var e = n.value;
                                            if (e.id == t) {
                                                var a = e.result_value.split("，").map((function(t, a) {
                                                    return e.result_list[a] + ":" + t
                                                }));
                                                return {
                                                    v: a
                                                }
                                            }
                                        };
                                        for (o.s(); !(n = o.n()).done;) {
                                            var c = s();
                                            if ("object" === $(c)) return c.v
                                        }
                                    } catch (l) {
                                        o.e(l)
                                    } finally {
                                        o.f()
                                    }
                                }
                            } catch (l) {
                                i.e(l)
                            } finally {
                                i.f()
                            }
                            return e
                        },
                        handleRadioChange: function(t) {
                            console.log(this.tempQc), this.tempQc.forEach((function(t) {
                                t.items.forEach((function(t) {
                                    t.result_list = t.resultModel.map((function(t) {
                                        return t.split(":")[0]
                                    })), t.result_value = t.resultModel.map((function(t) {
                                        return t.split(":")[1]
                                    })).join("，"), t.result = JSON.stringify(t.default) == JSON.stringify(t.resultModel) ? 1 : 0
                                }))
                            })), this.$emit("input", this.tempQc)
                        },
                        handleNext: function() {
                            var t = Number(this.selectTab);
                            this.selectTab = ++t + ""
                        },
                        getCheckDict: function() {
                            var t = S(o.a.mark((function t() {
                                var e;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(j["e"])({
                                                model_ids: [this.row.model_id],
                                                source: "infrastructure",
                                                type_id: this.row.type_id
                                            });
                                        case 2:
                                            e = t.sent, this.checkItems = e.data.quality_item[this.row.model_id + ""], this.$set(this.dict, "check_items", this.formatCheckItems(this.checkItems));
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }
                },
                T = P,
                B = Object(y["a"])(T, k, O, !1, null, "89b9bc8e", null),
                I = B.exports,
                L = a("64a1"),
                N = a("b8aa"),
                q = a("897d"),
                M = a.n(q);

            function R(t) {
                return G(t) || z(t) || J(t) || F()
            }

            function F() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function z(t) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
            }

            function G(t) {
                if (Array.isArray(t)) return U(t)
            }

            function Q(t, e) {
                var a;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (a = J(t)) || e && t && "number" === typeof t.length) {
                        a && (t = a);
                        var i = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
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
                var r, o = !0,
                    s = !1;
                return {
                    s: function() {
                        a = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = a.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, r = t
                    },
                    f: function() {
                        try {
                            o || null == a.return || a.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                }
            }

            function J(t, e) {
                if (t) {
                    if ("string" === typeof t) return U(t, e);
                    var a = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? U(t, e) : void 0
                }
            }

            function U(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, i = new Array(e); a < e; a++) i[a] = t[a];
                return i
            }

            function K(t, e, a, i, n, r, o) {
                try {
                    var s = t[r](o),
                        c = s.value
                } catch (l) {
                    return void a(l)
                }
                s.done ? e(c) : Promise.resolve(c).then(i, n)
            }

            function H(t) {
                return function() {
                    var e = this,
                        a = arguments;
                    return new Promise((function(i, n) {
                        var r = t.apply(e, a);

                        function o(t) {
                            K(r, i, n, o, s, "next", t)
                        }

                        function s(t) {
                            K(r, i, n, o, s, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            var W = a("b300"),
                X = {
                    components: {
                        ExceptionDialog: w,
                        ErrorDialog: x["a"],
                        CheckItem: I,
                        ElPopover: L["a"],
                        Barcode: _["a"]
                    },
                    data: function() {
                        return {
                            id: this.$route.query.id,
                            view: this.$route.query.view,
                            Authorization: "Bearer " + Object(p["a"])(),
                            pageData: null,
                            initPrice: 0,
                            type: l["a"].allotType,
                            arrDataAll: {
                                templates: [],
                                goodsDetail: []
                            },
                            selectVal: {
                                priceRules: ""
                            },
                            fileList: [],
                            status: !1,
                            dialogVisible: !1,
                            saleLoading: !1,
                            showExceptionDialog: !1,
                            submitLoading: !1,
                            errorList: [],
                            showErrDialog: !1,
                            dict: {
                                labels: [],
                                position: [],
                                extent: [],
                                point: [],
                                sorts: {}
                            },
                            defect: {
                                position: [],
                                position_str: [],
                                data: [{}, {}]
                            },
                            is_auto_to_up_shift: 0,
                            extent_data: {},
                            point_data: {},
                            attr: [],
                            tag_arr: [],
                            appearance_kv: [],
                            pos_index_arr: [],
                            point_index_arr: [],
                            priority_arr: [
                                [],
                                [],
                                []
                            ],
                            client: null,
                            video_upload_loading: !1,
                            isChangeTag: !1,
                            barcodeInfo: [],
                            mainPositionName: null,
                            baseSituation: "功能完好",
                            defaultAssay: null,
                            beforePoint: {}
                        }
                    },
                    computed: {
                        defectMsg: function() {
                            var t = this,
                                e = {};
                            this.tag_arr.forEach((function(a, i) {
                                var n = [];
                                t.priority_arr.forEach((function(t, e) {
                                    for (var i in t) a.includes(i) && (n[e] = t[i])
                                })), e[i] = n
                            }));
                            var a = Object.keys(e),
                                i = a.sort((function(t, a) {
                                    return e[a][0] - e[t][0] == 0 ? e[a][1] - e[t][1] == 0 ? e[a][2] - e[t][2] == 0 ? 1 : e[a][2] - e[t][2] : e[a][1] - e[t][1] : e[a][0] - e[t][0]
                                })),
                                n = [],
                                r = "",
                                o = this.selectVal.textarea;
                            for (var s in i) r = this.tag_arr[i[s]], n.push(r), -1 != o.indexOf(r) && (o = o.replace(r, ""));
                            o = o.replace(/，，+/g, "，，");
                            var c = n.join("，");
                            return this.selectVal.textarea = o.replace("，，", "，" + c + "，"), c
                        }
                    },
                    mounted: function() {
                        var t = H(o.a.mark((function t() {
                            return o.a.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.getAppearance();
                                    case 2:
                                        this.id && this.getEditDetailData(), this.getProductError(), this.client || this.getUploadConfig();
                                    case 5:
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
                    methods: {
                        closeError: function() {
                            var t = H(o.a.mark((function t(e) {
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(s["o"])({
                                                id: e
                                            });
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        getProductError: function() {
                            var t = H(o.a.mark((function t() {
                                var e;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(s["j"])({
                                                product_id: this.id
                                            });
                                        case 2:
                                            e = t.sent, this.errorList = e.data;
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
                        getAssay: function(t) {
                            var e, a = Q(this.arrDataAll.goodsDetail);
                            try {
                                for (a.s(); !(e = a.n()).done;) {
                                    var i = e.value;
                                    if (12 == i.pnid) return i.value
                                }
                            } catch (n) {
                                a.e(n)
                            } finally {
                                a.f()
                            }
                            return null
                        },
                        setAssay: function(t) {
                            var e, a = Q(this.arrDataAll.goodsDetail);
                            try {
                                for (a.s(); !(e = a.n()).done;) {
                                    var i = e.value;
                                    12 == i.pnid && (i.value = t)
                                }
                            } catch (n) {
                                a.e(n)
                            } finally {
                                a.f()
                            }
                        },
                        handleAssay: function(t) {
                            var e, a = {},
                                i = Q(this.pageData.goods_conditions);
                            try {
                                for (i.s(); !(e = i.n()).done;) {
                                    var n = e.value;
                                    a[n.pnid] = n
                                }
                            } catch (r) {
                                i.e(r)
                            } finally {
                                i.f()
                            }
                            this.tag_arr.length > 0 && 25 == this.getAssay() && !this.beforePoint["assay"] && (this.beforePoint["assay"] = this.getAssay(), this.beforePoint["appearance"] = a["71"] ? a["71"].goodsValue : null), a["71"] && "4787" == a["71"].goodsValue ? a["190"] && a["190"].inputVal < 100 && 0 == this.pageData.is_clean_camera && a["67"] && ("4848" == a["67"].goodsValue || "4802" == a["67"].goodsValue && a["116"] && a["116"].goodsValue == this.getConditionIdByName("电池情况", "原装电池")) ? this.setAssay(25) : this.setAssay(26) : a["71"] && "4788" == a["71"].goodsValue ? this.setAssay(26) : a["71"] && "4789" == a["71"].goodsValue ? this.setAssay(27) : a["71"] && "4790" == a["71"].goodsValue && this.setAssay(103), this.tag_arr.length > 0 && 25 == this.getAssay() && (this.setAssay(26), a["71"] && (a["71"].goodsValue = 4788), this.isChangeTag = !0), console.log("执行2")
                        },
                        handleAssayByChange: function(t) {
                            var e, a = {},
                                i = Q(this.pageData.goods_conditions);
                            try {
                                for (i.s(); !(e = i.n()).done;) {
                                    var n = e.value;
                                    a[n.pnid] = n
                                }
                            } catch (r) {
                                i.e(r)
                            } finally {
                                i.f()
                            }
                            a["116"] && a["116"].goodsValue == this.getConditionIdByName("电池情况", "更换电池") && this.setAssay(26, t)
                        },
                        handleAssay_destory: function() {
                            if (1 != this.pageData.type_id) return !0;
                            var t = {
                                    "外壳": {
                                        "磕碰": {
                                            "细微": 95,
                                            "轻微": 90,
                                            "明显": 90,
                                            "严重": 80
                                        },
                                        "划痕": {
                                            "细微": 99,
                                            "轻微": 95,
                                            "明显": 90,
                                            "严重": 0
                                        },
                                        "掉漆": {
                                            "细微": 95,
                                            "轻微": 90,
                                            "明显": 90,
                                            "严重": 80
                                        }
                                    },
                                    "机身": {
                                        "弯曲变形": {
                                            "细微": 95,
                                            "轻微": 75,
                                            "明显": 75,
                                            "严重": 0
                                        },
                                        "缝隙": {
                                            "细微": 95,
                                            "轻微": 80,
                                            "明显": 75,
                                            "严重": 0
                                        },
                                        "按压异响": {
                                            "细微": 90,
                                            "轻微": 80,
                                            "明显": 75,
                                            "严重": 0
                                        },
                                        "后盖凹陷": {
                                            "细微": 90,
                                            "轻微": 80,
                                            "明显": 75,
                                            "严重": 0
                                        },
                                        "后盖碎裂": {
                                            "细微": 80,
                                            "轻微": 80,
                                            "明显": 75,
                                            "严重": 0
                                        }
                                    },
                                    "屏幕": {
                                        "划痕": {
                                            "细微": 99,
                                            "轻微": 95,
                                            "明显": 90,
                                            "严重": 80
                                        },
                                        "碎裂": {
                                            "细微": 80,
                                            "轻微": 75,
                                            "明显": 75,
                                            "严重": 0
                                        },
                                        "进灰": {
                                            "细微": 95,
                                            "轻微": 90,
                                            "明显": 80,
                                            "严重": 0
                                        }
                                    },
                                    "摄像头": {
                                        "摄像头外观": {
                                            "前置摄像头有灰": 95,
                                            "后置摄像头有灰": 95,
                                            "后置摄像头保护罩划伤": 90,
                                            "后置摄像头保护罩碎裂": 75,
                                            "后置摄像头保护罩缺失": 75
                                        }
                                    }
                                },
                                e = [99];
                            for (var a in this.defect.data) {
                                var i = a.split(":");
                                if (t[i[1]])
                                    for (var n in this.defect.data[a]) {
                                        var r = n.split(":");
                                        if (t[i[1]][r[1]]) {
                                            var o = this.defect.data[a][n].split(":");
                                            "number" == typeof t[i[1]][r[1]][o[1]] && e.push(t[i[1]][r[1]][o[1]])
                                        }
                                    }
                            }
                            var s = Math.min.apply(Math, e);
                            this.pageData.qc_level > 1 && (s = Math.min(s, 90));
                            var c = {
                                    99: 25,
                                    95: 26,
                                    90: 27,
                                    80: 103
                                },
                                l = c[s] || 38511;
                            this.setAssay(l), this.baseSituation = s > 90 ? "功能完好" : "功能缺陷"
                        },
                        getConditionIdByName: function(t, e) {
                            var a, i = Q(this.pageData.goods_conditions);
                            try {
                                for (i.s(); !(a = i.n()).done;) {
                                    var n = a.value;
                                    if (n.pn_name == t) {
                                        var r, o = Q(n.list);
                                        try {
                                            for (o.s(); !(r = o.n()).done;) {
                                                var s = r.value;
                                                if (s.pv_name == e) return s.pvid
                                            }
                                        } catch (c) {
                                            o.e(c)
                                        } finally {
                                            o.f()
                                        }
                                    }
                                }
                            } catch (c) {
                                i.e(c)
                            } finally {
                                i.f()
                            }
                        },
                        getConditionValue: function(t) {
                            var e, a = Q(this.pageData.goods_conditions);
                            try {
                                for (a.s(); !(e = a.n()).done;) {
                                    var i = e.value;
                                    if (i.pn_name == t) {
                                        if (1 == i.pn_type) return i.goodsValue;
                                        if (2 == i.pn_type) return i.inputVal
                                    }
                                }
                            } catch (n) {
                                a.e(n)
                            } finally {
                                a.f()
                            }
                        },
                        handleChange: function(t) {
                            if (this.handleAssay(t), this.$forceUpdate(), this.getPricRules(t), "电池情况" == t.pn_name && t.goodsValue == this.getConditionIdByName("电池情况", "更换电池")) {
                                var e, a = Q(this.pageData.goods_conditions);
                                try {
                                    for (a.s(); !(e = a.n()).done;) {
                                        var i = e.value;
                                        "充电效率" == i.pn_name ? i.goodsValue = 4792 : "充电次数" == i.pn_name && (i.goodsValue = 4794)
                                    }
                                } catch (n) {
                                    a.e(n)
                                } finally {
                                    a.f()
                                }
                            }
                        },
                        getBriefsById: function(t) {
                            var e, a = Q(this.arrDataAll.templates);
                            try {
                                for (a.s(); !(e = a.n()).done;) {
                                    var i = e.value;
                                    if (i.b_id == t) return i.content
                                }
                            } catch (n) {
                                a.e(n)
                            } finally {
                                a.f()
                            }
                        },
                        getEditDetailData: function() {
                            var t = this;
                            this.loading = !0, Object(s["e"])({
                                product_id: this.id
                            }).then((function(e) {
                                if (1 == e.code) {
                                    var a = e.data;
                                    t.arrDataAll.templates = e.data.briefs, e.data.brief ? t.$set(t.selectVal, "textarea", e.data.brief) : t.$set(t.selectVal, "textarea", t.getBriefsById(42));
                                    var i, n = Q(a.goods_conditions);
                                    try {
                                        var r = function() {
                                            var e = i.value;
                                            if ("维修痕迹" == e.pn_name && (e.list.forEach((function(t, a) {
                                                    "更换电池" == t.pv_name && e.list.splice(a, 1)
                                                })), e.goodsValue = 4802), a.key_product_props.length > 0) {
                                                var n, r = Q(a.key_product_props);
                                                try {
                                                    for (r.s(); !(n = r.n()).done;) {
                                                        var o = n.value;
                                                        e.pnid == o.pn_id && (2 == e.pn_type ? e.inputVal = o.pv_name : (e.goodsValue = o.pv_id, 67 == e.pnid ? (e.goodsValue = 4802, o.pv_id && (e.goodsValue = o.pv_id), e.goodsValue) : 116 == e.pnid && t.$nextTick((function() {
                                                            e.goodsValue == t.getConditionIdByName("电池情况", "更换电池") && t.handleAssayByChange(!0)
                                                        }))))
                                                    }
                                                } catch (s) {
                                                    r.e(s)
                                                } finally {
                                                    r.f()
                                                }
                                            }
                                        };
                                        for (n.s(); !(i = n.n()).done;) r()
                                    } catch (o) {
                                        n.e(o)
                                    } finally {
                                        n.f()
                                    }
                                    0 == a.is_activation ? a.is_activation = 1 : a.is_activation, t.fileList = e.data.product_images, !a.main_pic && t.fileList.length > 0 ? (a.main_pic = t.fileList[0].url, t.mainPositionName = t.fileList[0].position_name, t.fileList.splice(0, 1)) : t.fileList.forEach((function(e, i) {
                                        e.url.substr(e.url.lastIndexOf("/")) == a.main_pic.substr(a.main_pic.lastIndexOf("/")) && (t.mainPositionName = t.fileList[i].position_name, t.fileList.splice(i, 1))
                                    })), t.initPrice = a.price, 0 == a.is_can_update_price && 0 == a.is_sale_put && 1 == a.is_replace_battery && 0 == a.battery_price && (a.price = parseInt(a.price) + parseInt(a.replace_battery_price)), t.pageData = a, t.status = !0, t.getGoodsDetailData(""), t.loading = !1, t.getTemplateRules({
                                        pn_name: "初始化"
                                    }), t.pageData.surface_appearance && (console.log("init appearance", t.pageData.surface_appearance), t.defect = JSON.parse(t.pageData.surface_appearance), t.initAttrData(t.defect.data))
                                }
                            }))
                        },
                        getEditDetailData_destory: function() {
                            var t = this,
                                e = this.$loading({
                                    target: ".app-container"
                                });
                            Object(s["e"])({
                                product_id: this.id
                            }).then((function(a) {
                                if (e.close(), 1 == a.code) {
                                    var i = a.data;
                                    t.$set(t.selectVal, "temp", 42), t.arrDataAll.templates = a.data.briefs, a.data.brief ? t.$set(t.selectVal, "textarea", a.data.brief) : t.$set(t.selectVal, "textarea", t.getBriefsById(42));
                                    var n, r = Q(i.goods_conditions);
                                    try {
                                        var o = function() {
                                            var t = n.value;
                                            if ("维修痕迹" == t.pn_name && (t.list.forEach((function(e, a) {
                                                    "更换电池" == e.pv_name && t.list.splice(a, 1)
                                                })), t.goodsValue = 4802), i.key_product_props.length > 0) {
                                                var e, a = Q(i.key_product_props);
                                                try {
                                                    for (a.s(); !(e = a.n()).done;) {
                                                        var r = e.value;
                                                        t.pnid == r.pn_id && (2 == t.pn_type ? t.inputVal = r.pv_name : (t.goodsValue = r.pv_id, 67 == t.pnid && (t.goodsValue = 4802, r.pv_id && (t.goodsValue = r.pv_id))))
                                                    }
                                                } catch (o) {
                                                    a.e(o)
                                                } finally {
                                                    a.f()
                                                }
                                            }
                                        };
                                        for (r.s(); !(n = r.n()).done;) o()
                                    } catch (s) {
                                        r.e(s)
                                    } finally {
                                        r.f()
                                    }
                                    0 == i.is_activation ? i.is_activation = 1 : i.is_activation, t.fileList = a.data.product_images, !i.main_pic && t.fileList.length > 0 ? (i.main_pic = t.fileList[0].url, t.mainPositionName = t.fileList[0].position_name, t.fileList.splice(0, 1)) : t.fileList.forEach((function(e, a) {
                                        e.url.substr(e.url.lastIndexOf("/")) == i.main_pic.substr(i.main_pic.lastIndexOf("/")) && (t.mainPositionName = t.fileList[a].position_name, t.fileList.splice(a, 1))
                                    })), t.initPrice = i.price, 0 == i.is_can_update_price && 0 == i.is_sale_put && 1 == i.is_replace_battery && 0 == i.battery_price && (i.price = parseInt(i.price) + parseInt(i.replace_battery_price)), t.pageData = i, t.status = !0, t.getGoodsDetailData(""), t.getTemplateRules({
                                        pn_name: "初始化"
                                    }), t.pageData.surface_appearance && (t.defect = JSON.parse(t.pageData.surface_appearance), t.initAttrData(t.defect.data)), t.baseSituation = 1 == t.pageData.qc_level ? "功能完好" : "功能缺陷"
                                }
                            }))
                        },
                        initAttrData: function(t) {
                            this.tag_arr = [];
                            var e = "",
                                a = "",
                                i = "",
                                n = "",
                                r = "",
                                o = [];
                            for (var s in t[0]) e = this.getChinese(s), a = this.getChinese(t[0][s]["extent"]), i = this.getChinese(t[1][s]["point"]), this.tag_arr.push(e + a + i), n = this.pos_index_arr[e], r = this.point_index_arr[i], this.attr[n][r] = a, o.push(s), this.extent_data[s] = t[0][s], this.point_data[s] = t[1][s];
                            this.defect.position = o, this.defect.position_str = o, this.posColor()
                        },
                        getChinese: function(t) {
                            if (null != t && "" != t) {
                                var e = /[\u4e00-\u9fa5]/g;
                                return t.match(e).join("")
                            }
                            return ""
                        },
                        getBriefTemplatesData: function() {
                            var t = H(o.a.mark((function t() {
                                var e;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(s["c"])();
                                        case 2:
                                            e = t.sent, 1 == e.code && (this.$set(this.selectVal, "temp", e.data[0].b_id), this.selectVal.textarea || (e.data[0].content = e.data[0].content.replace(this.defectMsg, ""), this.$set(this.selectVal, "textarea", e.data[0].content)), this.arrDataAll.templates = e.data);
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
                        handleChangeSelect: function(t) {
                            var e, a = Q(this.arrDataAll.templates);
                            try {
                                for (a.s(); !(e = a.n()).done;) {
                                    var i = e.value;
                                    t == i.b_id && this.$set(this.selectVal, "textarea", i.content)
                                }
                            } catch (n) {
                                a.e(n)
                            } finally {
                                a.f()
                            }
                        },
                        getGoodsDetailData: function() {
                            var t = H(o.a.mark((function t(e) {
                                var a, i, n, r, c, l, p, u, d, h;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(s["g"])({
                                                model_id: this.pageData.model_id
                                            });
                                        case 2:
                                            if (a = t.sent, 1 == a.code) {
                                                for (i in this.arrDataAll.goodsDetail = [], a.data)
                                                    for (n in a.data[i]) 1 != this.pageData.business_line ? "来源" != a.data[i][n].pn_name && (a.data[i][n].value = "", this.arrDataAll.goodsDetail.push(a.data[i][n])) : (a.data[i][n].value = "", this.arrDataAll.goodsDetail.push(a.data[i][n]));
                                                if ("" != e && (this.status = !1), this.arrDataAll.goodsDetail.length > 0 && "" == e) {
                                                    r = Q(this.arrDataAll.goodsDetail);
                                                    try {
                                                        for (r.s(); !(c = r.n()).done;) {
                                                            l = c.value, p = !0, u = Q(this.pageData.sale_product_props);
                                                            try {
                                                                for (u.s(); !(d = u.n()).done;) h = d.value, l.pnid == h.pn_id && (console.log(h), l.value = h.pv_id, p = !1)
                                                            } catch (o) {
                                                                u.e(o)
                                                            } finally {
                                                                u.f()
                                                            }
                                                            p && (l.value = null)
                                                        }
                                                    } catch (o) {
                                                        r.e(o)
                                                    } finally {
                                                        r.f()
                                                    }
                                                    this.getPricRules({
                                                        pn_name: "初始化"
                                                    })
                                                }
                                                this.getTemplateRules({
                                                    pn_name: "初始化"
                                                })
                                            }
                                            this.getLabelList();
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
                        }(),
                        handleChangeType: function(t) {
                            var e = this;
                            Object(s["m"])({
                                type_id: t
                            }).then((function(t) {
                                1 == t.code && (e.$set(e.pageData, "brands", t.data.brand_list), e.pageData.brand_id = "", e.pageData.model_id = "")
                            }))
                        },
                        handleChangeBrand: function(t) {
                            var e = this;
                            Object(s["b"])({
                                type_id: this.pageData.type_id,
                                brand_id: t
                            }).then((function(t) {
                                if (1 == t.code) {
                                    e.$set(e.pageData, "models", t.data.model_list), e.getGoodsConditions(), e.pageData.model_id = null;
                                    var a, i = Q(e.arrDataAll.goodsDetail);
                                    try {
                                        for (i.s(); !(a = i.n()).done;) {
                                            var n = a.value;
                                            n.value = null
                                        }
                                    } catch (r) {
                                        i.e(r)
                                    } finally {
                                        i.f()
                                    }
                                }
                            }))
                        },
                        getGoodsConditions: function() {
                            var t = this;
                            Object(s["f"])({
                                type_id: this.pageData.type_id,
                                brand_id: this.pageData.brand_id
                            }).then((function(e) {
                                if (1 == e.code) {
                                    var a, i = Q(e.data);
                                    try {
                                        for (i.s(); !(a = i.n()).done;) {
                                            var n = a.value;
                                            n.goodsValue = "", n.inputVal = ""
                                        }
                                    } catch (r) {
                                        i.e(r)
                                    } finally {
                                        i.f()
                                    }
                                    t.$set(t.pageData, "goods_conditions", e.data)
                                }
                            }))
                        },
                        getPricRules: function(t) {
                            var e = this;
                            if (1 != this.pageData.is_can_update_price && (1 == this.pageData.qc_level || !(this.pageData.price > 1 || 1 == this.pageData.status))) {
                                var a, i = [],
                                    n = [],
                                    r = Q(this.arrDataAll.goodsDetail);
                                try {
                                    for (r.s(); !(a = r.n()).done;) {
                                        var o = a.value;
                                        i.push("".concat(o.pnid, ":").concat(o.value))
                                    }
                                } catch (u) {
                                    r.e(u)
                                } finally {
                                    r.f()
                                }
                                var c, l = Q(this.pageData.goods_conditions);
                                try {
                                    for (l.s(); !(c = l.n()).done;) {
                                        var p = c.value;
                                        n.push("".concat(p.pnid, ":").concat(p.goodsValue))
                                    }
                                } catch (u) {
                                    l.e(u)
                                } finally {
                                    l.f()
                                }
                                Object(s["i"])({
                                    product_id: this.pageData.product_id,
                                    type_id: this.pageData.type_id,
                                    brand_id: this.pageData.brand_id,
                                    model_id: this.pageData.model_id,
                                    sales_properties: i,
                                    parameter_properties: n,
                                    tag_ids: this.pageData.tags
                                }).then((function(t) {
                                    (1 == e.pageData.supplier.is_independent_pricing && 0 == e.pageData.warehouse.is_sale_put || 0 == e.pageData.price) && (e.pageData.price = t.data.price, e.initPrice = t.data.price), 1 == t.data.is_replace_battery && 0 == e.pageData.warehouse.is_sale_put && 0 == e.pageData.battery_price && (e.pageData.price = parseInt(t.data.price) + parseInt(e.pageData.replace_battery_price)), e.selectVal.priceRules = t.data.pricing_str
                                })).catch((function(t) {
                                    console.log(t)
                                })), this.getTemplateRules(t), 54 == t.pnid && this.handleChangeSource()
                            }
                        },
                        getUploadPicture: function(t) {
                            var e = this,
                                a = new FormData;
                            a.append("image", t.file), Object(s["n"])(a).then((function(t) {
                                1 == t.code && e.fileList.push(t.data)
                            }))
                        },
                        getUploadVideo: function(t) {
                            this.video_upload_loading = !0, this.uploadImg(t.file)
                        },
                        uploadImg: function() {
                            var t = H(o.a.mark((function t(e) {
                                var a;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, this.client.put(this.getFileName(e.name), e);
                                        case 3:
                                            a = t.sent, e.type.indexOf("video") > -1 && (this.pageData.video_url = "http://cdn.huodao.hk/" + a.name), t.next = 10;
                                            break;
                                        case 7:
                                            t.prev = 7, t.t0 = t["catch"](0), console.error(t.t0);
                                        case 10:
                                            this.video_upload_loading = !1;
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 7]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        handlePicRemove: function(t, e) {
                            this.fileList.splice(t, 1), e.stopPropagation()
                        },
                        allowDrop: function(t) {
                            t.preventDefault()
                        },
                        dragStart: function(t, e) {
                            t.dataTransfer.setData("img", e)
                        },
                        drop: function(t, e) {
                            this.allowDrop(t);
                            var a = this.fileList.concat([]),
                                i = t.dataTransfer.getData("img"),
                                n = a.splice(i, 1);
                            a.splice(e, 0, n[0]), this.fileList = a
                        },
                        handlePictureCardPreview: function(t, e) {
                            var a = this.pageData.main_pic;
                            this.mainPositionName;
                            this.pageData.main_pic = t.url, this.mainPositionName = t.position_name, a ? t.url = a : this.fileList.splice(e, 1)
                        },
                        handleClickEidtShelf: function() {
                            var t = H(o.a.mark((function t(e) {
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (!([5, 114, 4, 14, 16, 15, 127, 129].indexOf(this.pageData.model_id) > -1 && this.getConditionValue("充电次数1") >= 400)) {
                                                t.next = 3;
                                                break
                                            }
                                            return t.next = 3, this.$confirm("该商品充电次数不小于400次，是否通过？", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 3:
                                            if (!(this.pageData.price < this.pageData.product_cost.cost && 1 == this.pageData.business_line)) {
                                                t.next = 6;
                                                break
                                            }
                                            return t.next = 6, this.$confirm("确认低于成本价销售?", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 6:
                                            this.postEidtShelf(e);
                                        case 7:
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
                        getConditionLabel: function(t, e) {
                            var a, i = Q(t);
                            try {
                                for (i.s(); !(a = i.n()).done;) {
                                    var n = a.value;
                                    if (n.pvid == e) return n.pv_name
                                }
                            } catch (r) {
                                i.e(r)
                            } finally {
                                i.f()
                            }
                        },
                        postEidtShelf: function() {
                            var t = H(o.a.mark((function t(e) {
                                var a, i, n, r, c, l, p, u, d, h, f, _, m, g, v;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            t.prev = 0, a = [], i = [], n = [], r = Q(this.arrDataAll.goodsDetail);
                                            try {
                                                for (r.s(); !(c = r.n()).done;) l = c.value, l.value && a.push({
                                                    pn_id: l.pnid,
                                                    pv_id: l.value
                                                })
                                            } catch (o) {
                                                r.e(o)
                                            } finally {
                                                r.f()
                                            }
                                            p = Q(this.pageData.goods_conditions);
                                            try {
                                                for (p.s(); !(u = p.n()).done;) d = u.value, (d.goodsValue || d.inputVal) && i.push({
                                                    pn_id: d.pnid,
                                                    pv_id: d.goodsValue ? d.goodsValue : 0,
                                                    pn_type: d.pn_type,
                                                    pv_name: 1 == d.pn_type ? this.getConditionLabel(d.list, d.goodsValue) : d.inputVal
                                                })
                                            } catch (o) {
                                                p.e(o)
                                            } finally {
                                                p.f()
                                            }
                                            if (n.push({
                                                    position: 0,
                                                    original_image_url: this.pageData.main_pic,
                                                    position_name: this.mainPositionName
                                                }), this.fileList.forEach((function(t, e) {
                                                    console.log("222222::", t.position_name), n.push({
                                                        position: e + 1,
                                                        position_name: t.position_name,
                                                        original_image_url: t.url
                                                    })
                                                })), h = {
                                                    product_id: this.pageData.product_id,
                                                    type_id: this.pageData.type_id,
                                                    model_id: this.pageData.model_id,
                                                    brand_id: this.pageData.brand_id,
                                                    product_name: this.pageData.product_name,
                                                    imei: this.pageData.imei,
                                                    sn: this.pageData.sn,
                                                    brief: this.selectVal.textarea.replace("，，", "，".concat(this.defectMsg ? this.defectMsg + "，" : "")),
                                                    main_pic: this.pageData.main_pic,
                                                    check_res: this.pageData.crawler_result ? this.pageData.crawler_result.quality_remark : null,
                                                    is_activation: this.pageData.is_activation,
                                                    activation_time: this.pageData.activation_time,
                                                    guarantee_time: this.pageData.guarantee_time,
                                                    tag_ids: this.pageData.tags,
                                                    price: this.initPrice,
                                                    sale_product_props: a,
                                                    key_product_props: i,
                                                    product_images: n,
                                                    quality_inspection: this.pageData.quality_inspection,
                                                    package: this.pageData.package,
                                                    surface_appearance: JSON.stringify(this.defect),
                                                    is_auto_to_up_shift: this.is_auto_to_up_shift,
                                                    video_url: this.pageData.video_url
                                                }, 1 == this.pageData.is_can_update_price && (h.price = this.pageData.price), !this.pageData.official_crawler) {
                                                t.next = 32;
                                                break
                                            }
                                            f = Q(this.arrDataAll.goodsDetail), t.prev = 14, f.s();
                                        case 16:
                                            if ((_ = f.n()).done) {
                                                t.next = 24;
                                                break
                                            }
                                            if (m = _.value, !this.isDanger(m)) {
                                                t.next = 22;
                                                break
                                            }
                                            return t.next = 21, this.$confirm("有录入信息与爬虫信息不一致，是否提交？", "提示", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 21:
                                            return t.abrupt("break", 24);
                                        case 22:
                                            t.next = 16;
                                            break;
                                        case 24:
                                            t.next = 29;
                                            break;
                                        case 26:
                                            t.prev = 26, t.t0 = t["catch"](14), f.e(t.t0);
                                        case 29:
                                            return t.prev = 29, f.f(), t.finish(29);
                                        case 32:
                                            if (0 != e) {
                                                t.next = 40;
                                                break
                                            }
                                            return this.submitLoading = !0, h.node_id = 6, t.next = 37, Object(s["p"])(h);
                                        case 37:
                                            g = t.sent, this.$message.success(g.msg), this.submitLoading = !1;
                                        case 40:
                                            if (1 != e) {
                                                t.next = 51;
                                                break
                                            }
                                            return this.saleLoading = !0, t.next = 44, Object(N["c"])(h);
                                        case 44:
                                            if (v = t.sent, this.$message.success(v.msg), this.saleLoading = !1, 1 != v.data.is_package_full) {
                                                t.next = 51;
                                                break
                                            }
                                            return t.next = 50, this.packPullAlter();
                                        case 50:
                                            return t.abrupt("return", !0);
                                        case 51:
                                            this.$router.go(-1), window.close(), t.next = 59;
                                            break;
                                        case 55:
                                            t.prev = 55, t.t1 = t["catch"](0), this.submitLoading = !1, this.saleLoading = !1;
                                        case 59:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 55],
                                    [14, 26, 29, 32]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        packPullAlter: function() {
                            var t = H(o.a.mark((function t() {
                                var e, a, i = this;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, this.$confirm("待打包数据已满，请调拨出库", "流转单提醒", {
                                                distinguishCancelAndClose: !0,
                                                confirmButtonText: "查看详情",
                                                cancelButtonText: "打印调拨单号",
                                                type: "warning",
                                                center: !0
                                            });
                                        case 3:
                                            this.$router.push({
                                                name: "putaway-done-list"
                                            }), t.next = 19;
                                            break;
                                        case 6:
                                            if (t.prev = 6, t.t0 = t["catch"](0), "close" !== t.t0) {
                                                t.next = 11;
                                                break
                                            }
                                            return console.log("关闭弹框"), t.abrupt("return");
                                        case 11:
                                            return t.next = 13, Object(c["b"])();
                                        case 13:
                                            e = t.sent, a = {
                                                title: "".concat(e.data.src_area_name, "-").concat(e.data.src_warehouse_description, "---\x3e").concat(e.data.dst_area_name, "-").concat(e.data.dst_warehouse_description, "（").concat(e.data.num, "台）"),
                                                code: e.data.move_batch_no
                                            }, this.barcodeInfo.push(a), setTimeout((function() {
                                                i.$refs["print-barcode"].$el.click(), i.$router.go(-1)
                                            }), 500), this.submitLoading = !1, this.saleLoading = !1;
                                        case 19:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 6]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        handleRoute: function() {
                            this.$router.go(-1)
                        },
                        getTemplateByTitle: function(t) {
                            var e, a = Q(this.arrDataAll.templates);
                            try {
                                for (a.s(); !(e = a.n()).done;) {
                                    var i = e.value;
                                    if (i.title.indexOf(t) > -1) return i
                                }
                            } catch (n) {
                                a.e(n)
                            } finally {
                                a.f()
                            }
                        },
                        getLabelList: function() {
                            var t = H(o.a.mark((function t() {
                                var e;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(j["o"])({
                                                type_ids: [this.pageData.type_id]
                                            });
                                        case 2:
                                            e = t.sent, this.dict.labels = e.data[this.pageData.type_id];
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
                        getSourceByTitle: function(t, e) {
                            var a, i = Q(this.arrDataAll.goodsDetail);
                            try {
                                for (i.s(); !(a = i.n()).done;) {
                                    var n = a.value;
                                    if (n.pnid == t) {
                                        var r, o = Q(n.list);
                                        try {
                                            for (o.s(); !(r = o.n()).done;) {
                                                var s = r.value;
                                                if (s.pvname == e) return s
                                            }
                                        } catch (c) {
                                            o.e(c)
                                        } finally {
                                            o.f()
                                        }
                                    }
                                }
                            } catch (c) {
                                i.e(c)
                            } finally {
                                i.f()
                            }
                            return {}
                        },
                        getPropsValue: function(t) {
                            var e, a = Q(this.arrDataAll.goodsDetail);
                            try {
                                for (a.s(); !(e = a.n()).done;) {
                                    var i = e.value;
                                    if (i.pnid == t) return i.value
                                }
                            } catch (n) {
                                a.e(n)
                            } finally {
                                a.f()
                            }
                        },
                        getTemplateRules: function(t) {
                            var e = this;
                            if ("型号" == t.pn_name || "版本" == t.pn_name || "来源" == t.pn_name || "初始化" == t.pn_name || "维修痕迹" == t.pn_name) {
                                var a = this.getTemplateByTitle("模板");
                                1 == this.pageData.is_clean_camera && (a = this.getTemplateByTitle("清理摄像头模版")), 2 == this.pageData.is_activation && (a = this.getTemplateByTitle("未激活")), "维修痕迹" != t.pn_name && "初始化" != t.pn_name || this.getConditionValue("维修痕迹") && this.getConditionValue("维修痕迹") == this.getConditionIdByName("维修痕迹", "官修记录") && (a = this.getTemplateByTitle("官修记录"));
                                var i, n = Q(this.arrDataAll.goodsDetail);
                                try {
                                    for (n.s(); !(i = n.n()).done;) {
                                        var r = i.value;
                                        "54" == r.pnid && r.value && (r.value == this.getSourceByTitle(54, "官修机").pvid ? a = this.getTemplateByTitle("官修机") : r.value == this.getSourceByTitle(54, "官换机").pvid ? a = this.getTemplateByTitle("官换机") : r.value == this.getSourceByTitle(54, "演示机").pvid ? a = this.getTemplateByTitle("演示机") : r.value == this.getSourceByTitle(54, "官翻机").pvid ? a = this.getTemplateByTitle("官翻机") : r.value == this.getSourceByTitle(54, "BS机").pvid && (a = this.getTemplateByTitle("BS机")))
                                    }
                                } catch (s) {
                                    n.e(s)
                                } finally {
                                    n.f()
                                }
                                a && this.selectVal.temp != a.b_id && (this.$set(this.selectVal, "temp", a.b_id), this.pageData.brief || (a.content = a.content.replace(this.defectMsg, ""), this.$set(this.selectVal, "textarea", a.content))), this.handleChangeSource();
                                var o = this.selectVal.textarea.slice(0, 9);
                                this.pageData.briefs.forEach((function(t, a) {
                                    -1 != t.content.indexOf(o) && e.$set(e.selectVal, "temp", t.b_id)
                                }))
                            }
                        },
                        handleChangeSource: function() {
                            var t, e = Q(this.arrDataAll.goodsDetail);
                            try {
                                for (e.s(); !(t = e.n()).done;) {
                                    var a = t.value;
                                    if (54 == a.pnid && 3701 == a.value) {
                                        var i, n = Q(this.pageData.goods_conditions);
                                        try {
                                            for (n.s(); !(i = n.n()).done;) {
                                                var r = i.value;
                                                67 == r.pnid && (r.goodsValue = 4848)
                                            }
                                        } catch (o) {
                                            n.e(o)
                                        } finally {
                                            n.f()
                                        }
                                    }
                                }
                            } catch (o) {
                                e.e(o)
                            } finally {
                                e.f()
                            }
                        },
                        posColor: function() {
                            var t = this,
                                e = "";
                            this.attr.forEach((function(a, i) {
                                e = a.filter(Boolean), e.length > 0 ? t.dict.position[i].btn_flag = !0 : t.dict.position[i].btn_flag = !1
                            }))
                        },
                        clearRadio: function(t) {
                            var e = this;
                            this.dict.position[t].pop_flag = !1;
                            var a = this.attr[t],
                                i = "",
                                n = this.dict.position[t].name;
                            if (a.forEach((function(t, r) {
                                    t && (i = n + t + e.dict.point[r].name), a[r] = ""
                                })), -1 != this.selectVal.textarea.indexOf(i) && (this.selectVal.textarea = this.selectVal.textarea.replace(i, "")), this.delAppearance(t), this.posColor(), this.handleAssay(), this.beforePoint["assay"]) {
                                this.setAssay(this.beforePoint["assay"]);
                                var r, o = Q(this.pageData.goods_conditions);
                                try {
                                    for (o.s(); !(r = o.n()).done;) {
                                        var s = r.value;
                                        "71" == s.pnid && (s.goodsValue = this.beforePoint["appearance"])
                                    }
                                } catch (c) {
                                    o.e(c)
                                } finally {
                                    o.f()
                                }
                            }
                            this.beforePoint["assay"] = null, this.beforePoint["appearance"] = null
                        },
                        chooseRadio: function(t, e) {
                            var a = this;
                            this.dict.position[t].pop_flag = !1;
                            var i = this.attr[t],
                                n = i[e],
                                r = this.dict.position[t].name,
                                o = this.dict.point[e].name,
                                s = "",
                                c = "";
                            i.forEach((function(t, n) {
                                n != e && (t && (s = a.dict.point[n].name, c = t), i[n] = "")
                            }));
                            var l = this.dict.extent,
                                p = "";
                            l.forEach((function(t, e) {
                                p = r + t.name + o, -1 != a.selectVal.textarea.indexOf(p) && (a.selectVal.textarea = a.selectVal.textarea.replace(p, ""))
                            }));
                            var u = r + c + s;
                            c && -1 != this.selectVal.textarea.indexOf(u) && (this.selectVal.textarea = this.selectVal.textarea.replace(u, "")), this.addAppearance(t, e, n), this.posColor(), this.handleAssay()
                        },
                        addAppearance: function(t, e, a) {
                            var i = this.dict.position[t].name,
                                n = this.dict.point[e].name,
                                r = this.appearance_kv[i],
                                o = this.appearance_kv[n],
                                s = this.appearance_kv[a] || 0,
                                c = r + ":" + i;
                            this.defect.position.push(c), this.defect.position = R(new Set(this.defect.position)), this.defect.position_str = this.defect.position;
                            var l = s + ":" + a,
                                p = o + ":" + n,
                                u = {
                                    extent: l
                                },
                                d = {
                                    point: p
                                };
                            this.extent_data[c] = u, this.point_data[c] = d, this.defect.data[0] = this.extent_data, this.defect.data[1] = this.point_data, this.tagTxt()
                        },
                        delAppearance: function(t) {
                            var e = this,
                                a = this.dict.position[t].name,
                                i = this.appearance_kv[a],
                                n = i + ":" + a,
                                r = this.defect.position;
                            r.forEach((function(t, e) {
                                -1 != t.indexOf(n) && r.splice(e, 1)
                            })), this.defect.position = r, this.defect.position_str = r;
                            var o = this.defect.data;
                            o.forEach((function(t, a) {
                                t.hasOwnProperty(n) && (delete o[a][n], delete e.extent_data[n], delete e.point_data[n])
                            })), this.defect.data = o, this.tagTxt()
                        },
                        tagTxt: function() {
                            var t = this;
                            this.tag_arr = [];
                            var e = "",
                                a = "",
                                i = "";
                            this.attr.forEach((function(n, r) {
                                n.forEach((function(n, o) {
                                    n && (e = t.dict.position[r].name, a = t.dict.point[o].name, i = e + n + a, t.tag_arr.indexOf(i) <= -1 && t.tag_arr.push(i))
                                }))
                            }))
                        },
                        getUploadConfig: function() {
                            var t = H(o.a.mark((function t() {
                                var e, a;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0, this.client) {
                                                t.next = 7;
                                                break
                                            }
                                            return t.next = 4, Object(s["l"])();
                                        case 4:
                                            e = t.sent, a = e.data, this.client = new W({
                                                accessKeyId: a.AccessKeyId,
                                                accessKeySecret: a.AccessKeySecret,
                                                stsToken: a.SecurityToken,
                                                bucket: "huodaoimg",
                                                endpoint: "oss-cn-shenzhen.aliyuncs.com"
                                            });
                                        case 7:
                                            t.next = 12;
                                            break;
                                        case 9:
                                            t.prev = 9, t.t0 = t["catch"](0), console.log(t.t0);
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 9]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        getAppearance: function() {
                            var t = H(o.a.mark((function t() {
                                var e, a, i, n = this;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(s["a"])();
                                        case 3:
                                            e = t.sent, this.dict.position = e.data.position, this.dict.extent = e.data.extent, this.dict.point = e.data.point, a = [], i = [], [], e.data.position.forEach((function(t, r) {
                                                a[r] = [], t.php_flag = !1, t.btn_flag = !1, i[t.name] = t.id, n.pos_index_arr[t.name] = r, n.priority_arr[2][t.name] = t.id, e.data.point.forEach((function(t, e) {
                                                    a[r][e] = "", i[t.name] = t.id, n.point_index_arr[t.name] = e, n.priority_arr[0][t.name] = t.id
                                                }))
                                            })), e.data.extent.forEach((function(t, e) {
                                                i[t.name] = t.id, n.priority_arr[1][t.name] = t.id
                                            })), this.attr = a, this.appearance_kv = i, t.next = 19;
                                            break;
                                        case 16:
                                            t.prev = 16, t.t0 = t["catch"](0), console.log(t.t0);
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
                        getFileName: function(t) {
                            var e = M()((new Date).getTime() + Math.random().toString(36).substr(2)),
                                a = "web_img/" + e.slice(0, 3) + "/" + e.slice(3, 6) + "/",
                                i = a + e + "_1000x1000." + t.split(".")[1];
                            return i
                        },
                        isDanger: function(t) {
                            var e = "";
                            if (t.list.forEach((function(a) {
                                    a.pvid == t.value && (e = a.pvname)
                                })), this.pageData.official_crawler) {
                                if ("颜色" == t.pn_name && this.pageData.official_crawler.color_name) return this.pageData.official_crawler.color_name.replace("色", "") != e.replace("色", "");
                                if ("内存" == t.pn_name && this.pageData.official_crawler.memory_name) return this.pageData.official_crawler.memory_name.replace(/[G,g,GB,gb,Gb,gB]/g, "") != e.replace(/[G,g,GB,gb,Gb,gB]/g, "")
                            }
                            return !1
                        }
                    }
                },
                Y = X,
                Z = (a("6f50"), Object(y["a"])(Y, i, n, !1, null, "e8f8da38", null));
            e["default"] = Z.exports
        },
        "64a1": function(t, e, a) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("span", [a("transition", {
                        attrs: {
                            name: t.transition
                        },
                        on: {
                            "after-enter": t.handleAfterEnter,
                            "after-leave": t.handleAfterLeave
                        }
                    }, [a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.disabled && t.showPopper,
                            expression: "!disabled && showPopper"
                        }],
                        ref: "popper",
                        staticClass: "el-popover el-popper",
                        class: [t.popperClass, t.content && "el-popover--plain"],
                        style: {
                            width: t.width + "px"
                        },
                        attrs: {
                            role: "tooltip",
                            id: t.tooltipId,
                            "aria-hidden": t.disabled || !t.showPopper ? "true" : "false"
                        }
                    }, [t.title ? a("div", {
                        staticClass: "el-popover__title",
                        domProps: {
                            textContent: t._s(t.title)
                        }
                    }) : t._e(), t._v(" "), t._t("default", [t._v(t._s(t.content))])], 2)]), t._v(" "), t._t("reference")], 2)
                },
                n = [],
                r = a("3050"),
                o = a("23cb"),
                s = a("33d8"),
                c = {
                    name: "ElPopover",
                    mixins: [r["a"]],
                    props: {
                        trigger: {
                            type: String,
                            default: "click",
                            validator: function(t) {
                                return ["click", "focus", "hover", "manual"].indexOf(t) > -1
                            }
                        },
                        openDelay: {
                            type: Number,
                            default: 0
                        },
                        closeDelay: {
                            type: Number,
                            default: 200
                        },
                        title: String,
                        disabled: Boolean,
                        content: String,
                        reference: {},
                        popperClass: String,
                        width: {},
                        visibleArrow: {
                            default: !0
                        },
                        arrowOffset: {
                            type: Number,
                            default: 0
                        },
                        transition: {
                            type: String,
                            default: "fade-in-linear"
                        },
                        tabindex: {
                            type: Number,
                            default: 0
                        }
                    },
                    computed: {
                        tooltipId: function() {
                            return "el-popover-".concat(Object(s["b"])())
                        }
                    },
                    watch: {
                        showPopper: function(t) {
                            this.disabled || (t ? this.$emit("show") : this.$emit("hide"))
                        }
                    },
                    mounted: function() {
                        var t = this,
                            e = this.referenceElm = this.reference || this.$refs.reference,
                            a = this.popper || this.$refs.popper;
                        !e && this.$slots.reference && this.$slots.reference[0] && (e = this.referenceElm = this.$slots.reference[0].elm), e && (Object(o["a"])(e, "el-popover__reference"), e.setAttribute("aria-describedby", this.tooltipId), e.setAttribute("tabindex", this.tabindex), a.setAttribute("tabindex", 0), "click" !== this.trigger && (Object(o["e"])(e, "focusin", (function() {
                            t.handleFocus();
                            var a = e.__vue__;
                            a && "function" === typeof a.focus && a.focus()
                        })), Object(o["e"])(a, "focusin", this.handleFocus), Object(o["e"])(e, "focusout", this.handleBlur), Object(o["e"])(a, "focusout", this.handleBlur)), Object(o["e"])(e, "keydown", this.handleKeydown), Object(o["e"])(e, "click", this.handleClick)), "click" === this.trigger ? (Object(o["e"])(e, "click", this.doToggle), Object(o["e"])(document, "click", this.handleDocumentClick)) : "hover" === this.trigger ? (console.log("自定义了。。。"), Object(o["e"])(e, "mouseenter", this.handleMouseEnter), Object(o["e"])(e, "mouseleave", this.handleMouseLeave)) : "focus" === this.trigger && (this.tabindex < 0 && console.warn("[Element Warn][Popover]a negative taindex means that the element cannot be focused by tab key"), e.querySelector("input, textarea") ? (Object(o["e"])(e, "focusin", this.doShow), Object(o["e"])(e, "focusout", this.doClose)) : (Object(o["e"])(e, "mousedown", this.doShow), Object(o["e"])(e, "mouseup", this.doClose)))
                    },
                    beforeDestroy: function() {
                        this.cleanup()
                    },
                    deactivated: function() {
                        this.cleanup()
                    },
                    methods: {
                        doToggle: function() {
                            this.showPopper = !this.showPopper
                        },
                        doShow: function() {
                            this.showPopper = !0
                        },
                        doClose: function() {
                            this.showPopper = !1
                        },
                        handleFocus: function() {
                            Object(o["a"])(this.referenceElm, "focusing"), "click" !== this.trigger && "focus" !== this.trigger || (this.showPopper = !0)
                        },
                        handleClick: function() {
                            Object(o["f"])(this.referenceElm, "focusing")
                        },
                        handleBlur: function() {
                            Object(o["f"])(this.referenceElm, "focusing"), "click" !== this.trigger && "focus" !== this.trigger || (this.showPopper = !1)
                        },
                        handleMouseEnter: function() {
                            var t = this;
                            clearTimeout(this._timer), this.openDelay ? this._timer = setTimeout((function() {
                                t.showPopper = !0
                            }), this.openDelay) : this.showPopper = !0
                        },
                        handleKeydown: function(t) {
                            27 === t.keyCode && "manual" !== this.trigger && this.doClose()
                        },
                        handleMouseLeave: function() {
                            var t = this;
                            clearTimeout(this._timer), this.closeDelay ? this._timer = setTimeout((function() {
                                t.showPopper = !1
                            }), this.closeDelay) : this.showPopper = !1
                        },
                        handleDocumentClick: function(t) {
                            var e = this.reference || this.$refs.reference,
                                a = this.popper || this.$refs.popper;
                            !e && this.$slots.reference && this.$slots.reference[0] && (e = this.referenceElm = this.$slots.reference[0].elm), this.$el && e && !this.$el.contains(t.target) && !e.contains(t.target) && a && !a.contains(t.target) && (this.showPopper = !1)
                        },
                        handleAfterEnter: function() {
                            this.$emit("after-enter")
                        },
                        handleAfterLeave: function() {
                            this.$emit("after-leave"), this.doDestroy()
                        },
                        cleanup: function() {
                            (this.openDelay || this.closeDelay) && clearTimeout(this._timer)
                        }
                    },
                    destroyed: function() {
                        var t = this.reference;
                        Object(o["d"])(t, "click", this.doToggle), Object(o["d"])(t, "mouseup", this.doClose), Object(o["d"])(t, "mousedown", this.doShow), Object(o["d"])(t, "focusin", this.doShow), Object(o["d"])(t, "focusout", this.doClose), Object(o["d"])(t, "mousedown", this.doShow), Object(o["d"])(t, "mouseup", this.doClose), Object(o["d"])(t, "mouseleave", this.handleMouseLeave), Object(o["d"])(t, "mouseenter", this.handleMouseEnter), Object(o["d"])(document, "click", this.handleDocumentClick)
                    }
                },
                l = c,
                p = a("5d22"),
                u = Object(p["a"])(l, i, n, !1, null, null, null),
                d = u.exports,
                h = function(t, e, a) {
                    var i = e.expression ? e.value : e.arg,
                        n = a.context.$refs[i];
                    n && (Array.isArray(n) ? n[0].$refs.reference = t : n.$refs.reference = t)
                },
                f = {
                    bind: function(t, e, a) {
                        h(t, e, a)
                    },
                    inserted: function(t, e, a) {
                        h(t, e, a)
                    }
                },
                _ = a("6e6d");
            _["default"].directive("popover", f), d.directive = f;
            e["a"] = d
        },
        "6f50": function(t, e, a) {
            "use strict";
            a("f373")
        },
        9679: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "b", (function() {
                return r
            }));
            var i = a("b775");

            function n(t) {
                return Object(i["a"])({
                    url: "/api/up_shift/to_be_packed",
                    method: "get",
                    params: t
                })
            }

            function r(t) {
                return Object(i["a"])({
                    url: "/api/up_shift/auto_un_pack",
                    method: "post",
                    data: t
                })
            }
        },
        "98de": function(t, e, a) {
            "use strict";
            a.d(e, "f", (function() {
                return n
            })), a.d(e, "k", (function() {
                return r
            })), a.d(e, "a", (function() {
                return o
            })), a.d(e, "b", (function() {
                return s
            })), a.d(e, "e", (function() {
                return c
            })), a.d(e, "c", (function() {
                return l
            })), a.d(e, "d", (function() {
                return p
            })), a.d(e, "j", (function() {
                return u
            })), a.d(e, "i", (function() {
                return d
            })), a.d(e, "h", (function() {
                return h
            })), a.d(e, "g", (function() {
                return f
            }));
            var i = a("b775");

            function n(t) {
                return Object(i["a"])({
                    url: "/api/check/scan_info",
                    method: "get",
                    params: t
                })
            }

            function r(t) {
                return Object(i["a"])({
                    url: "/api/check/scan_receive",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(i["a"])({
                    url: "/api/check/save",
                    method: "post",
                    data: t
                })
            }

            function s(t) {
                return Object(i["a"])({
                    url: "/api/check/save_and_transfer_store",
                    method: "post",
                    data: t
                })
            }

            function c(t) {
                return Object(i["a"])({
                    url: "/api/check/edit_check_view",
                    method: "post",
                    data: t
                })
            }

            function l(t) {
                return Object(i["a"])({
                    url: "/api/check/edit_check",
                    method: "post",
                    data: t
                })
            }

            function p(t) {
                return Object(i["a"])({
                    url: "/api/check_error_types",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(i["a"])({
                    url: "api/check/scan_receive_for_imei",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(i["a"])({
                    url: "api/check/scan_info_for_imei",
                    method: "get",
                    params: t
                })
            }

            function h(t) {
                return Object(i["a"])({
                    url: "api/check/save_and_auto_switch",
                    method: "post",
                    data: t
                })
            }

            function f(t) {
                return Object(i["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality_data/history_report",
                    method: "get",
                    params: t
                })
            }
        },
        a6a4: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return n
            })), a.d(e, "c", (function() {
                return r
            })), a.d(e, "b", (function() {
                return o
            }));
            var i = a("b775");

            function n(t) {
                return Object(i["a"])({
                    url: "/api/up_shift/abnormal_report_scan_tag",
                    method: "get",
                    params: t
                })
            }

            function r(t) {
                return Object(i["a"])({
                    url: "/api/up_shift/batch_abnormal_report",
                    method: "post",
                    data: t
                })
            }

            function o(t) {
                return Object(i["a"])({
                    url: "/api/up_shift/abnormal_report",
                    method: "post",
                    data: t
                })
            }
        },
        b8aa: function(t, e, a) {
            "use strict";
            a.d(e, "b", (function() {
                return n
            })), a.d(e, "a", (function() {
                return r
            })), a.d(e, "c", (function() {
                return o
            }));
            var i = a("b775");

            function n(t) {
                return Object(i["a"])({
                    url: "/api/up_shift/receive",
                    method: "get",
                    params: t
                })
            }

            function r(t) {
                return Object(i["a"])({
                    url: "/api/up_shift/show_receive_order",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(i["a"])({
                    url: "/api/up_shift/edit_and_on_sale",
                    method: "post",
                    data: t
                })
            }
        },
        c0f9: function(t, e, a) {
            "use strict";
            a.d(e, "b", (function() {
                return n
            })), a.d(e, "a", (function() {
                return r
            })), a.d(e, "f", (function() {
                return o
            })), a.d(e, "d", (function() {
                return s
            })), a.d(e, "g", (function() {
                return c
            })), a.d(e, "i", (function() {
                return l
            })), a.d(e, "h", (function() {
                return p
            })), a.d(e, "j", (function() {
                return u
            })), a.d(e, "e", (function() {
                return d
            })), a.d(e, "c", (function() {
                return h
            }));
            var i = a("b775");

            function n(t) {
                return Object(i["a"])({
                    url: "/api/error_reports",
                    method: "get",
                    params: t
                })
            }

            function r(t) {
                return Object(i["a"])({
                    url: "/api/error_report/can_report_error_types",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(i["a"])({
                    url: "/api/error_report/store",
                    method: "post",
                    data: t
                })
            }

            function s(t) {
                return Object(i["a"])({
                    url: "/api/error_report/destroy",
                    method: "post",
                    data: t
                })
            }

            function c(t) {
                return Object(i["a"])({
                    url: "/api/check/error_report",
                    method: "post",
                    data: t
                })
            }

            function l(t) {
                return Object(i["a"])({
                    url: "/api/re_check/error_report",
                    method: "post",
                    data: t
                })
            }

            function p(t) {
                return Object(i["a"])({
                    url: "/api/edit/error_report",
                    method: "post",
                    data: t
                })
            }

            function u(t) {
                return Object(i["a"])({
                    url: "/api/up_shift/error_report",
                    method: "post",
                    data: t
                })
            }

            function d(t) {
                return Object(i["a"])({
                    url: "/api/error_report/force_destroy",
                    method: "post",
                    data: t
                })
            }

            function h(t) {
                return Object(i["a"])({
                    url: "/api/option/select",
                    method: "get",
                    params: t
                })
            }
        },
        de26: function(t, e, a) {
            "use strict";
            var i = {
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
            e["a"] = i
        },
        f373: function(t, e, a) {},
        f4c4: function(t, e, a) {
            "use strict";
            a.d(e, "h", (function() {
                return n
            })), a.d(e, "d", (function() {
                return r
            })), a.d(e, "e", (function() {
                return o
            })), a.d(e, "c", (function() {
                return s
            })), a.d(e, "g", (function() {
                return c
            })), a.d(e, "l", (function() {
                return l
            })), a.d(e, "n", (function() {
                return p
            })), a.d(e, "m", (function() {
                return u
            })), a.d(e, "b", (function() {
                return d
            })), a.d(e, "f", (function() {
                return h
            })), a.d(e, "i", (function() {
                return f
            })), a.d(e, "p", (function() {
                return _
            })), a.d(e, "k", (function() {
                return m
            })), a.d(e, "j", (function() {
                return g
            })), a.d(e, "o", (function() {
                return v
            })), a.d(e, "a", (function() {
                return b
            })), a.d(e, "q", (function() {
                return y
            }));
            var i = a("b775");

            function n(t) {
                return Object(i["a"])({
                    url: "/api/edit/my_receive",
                    method: "get",
                    params: t
                })
            }

            function r(t) {
                return Object(i["a"])({
                    url: "/api/edit/show_receive_order",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(i["a"])({
                    url: "/api/edit/edit_view",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(i["a"])({
                    url: "/api/brief_templates",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(i["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: t
                })
            }

            function l(t) {
                return Object(i["a"])({
                    url: "api/public/product/oss_upload_sts_token_for_web",
                    method: "get",
                    data: t
                })
            }

            function p(t) {
                return Object(i["a"])({
                    url: "/api/edit/image_upload",
                    method: "post",
                    data: t,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            }

            function u(t) {
                return Object(i["a"])({
                    url: "/api/input/get_brand",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(i["a"])({
                    url: "/api/input/get_model",
                    method: "get",
                    params: t
                })
            }

            function h(t) {
                return Object(i["a"])({
                    url: "/api/product/goods_conditions",
                    method: "get",
                    params: t
                })
            }

            function f(t) {
                return Object(i["a"])({
                    url: "/api/product/pricing_rules",
                    method: "post",
                    data: t
                })
            }

            function _(t) {
                return Object(i["a"])({
                    url: "/api/edit/edit_save",
                    method: "post",
                    data: t
                })
            }

            function m(t) {
                return Object(i["a"])({
                    url: "/api/input/products_search",
                    method: "get",
                    params: t
                })
            }

            function g(t) {
                return Object(i["a"])({
                    url: "/api/error_report/product_error_reports",
                    method: "get",
                    params: t
                })
            }

            function v(t) {
                return Object(i["a"])({
                    url: "/api/error_report/mark_handled",
                    method: "post",
                    data: t
                })
            }

            function b(t) {
                return Object(i["a"])({
                    url: "/api/phone_appearance/datas",
                    method: "get",
                    params: t
                })
            }

            function y(t) {
                return Object(i["a"])({
                    url: "/api/product/save_zz_color_id",
                    method: "post",
                    data: t
                })
            }
        }
    }
]);