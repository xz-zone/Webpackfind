(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-7c2a16f5"], {
        2934: function(e, t, r) {
            "use strict";
            r.d(t, "p", (function() {
                return n
            })), r.d(t, "d", (function() {
                return o
            })), r.d(t, "i", (function() {
                return s
            })), r.d(t, "m", (function() {
                return l
            })), r.d(t, "b", (function() {
                return i
            })), r.d(t, "g", (function() {
                return c
            })), r.d(t, "k", (function() {
                return u
            })), r.d(t, "j", (function() {
                return p
            })), r.d(t, "h", (function() {
                return _
            })), r.d(t, "n", (function() {
                return d
            })), r.d(t, "a", (function() {
                return m
            })), r.d(t, "l", (function() {
                return f
            })), r.d(t, "q", (function() {
                return v
            })), r.d(t, "f", (function() {
                return b
            })), r.d(t, "o", (function() {
                return g
            })), r.d(t, "c", (function() {
                return h
            })), r.d(t, "e", (function() {
                return y
            }));
            var a = r("b775");

            function n(e) {
                return Object(a["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(a["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(a["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: e
                })
            }

            function l(e) {
                return Object(a["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
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

            function p(e) {
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

            function d(e) {
                return Object(a["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: e
                })
            }

            function m(e) {
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

            function b(e) {
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

            function h(e) {
                return Object(a["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: e
                })
            }

            function y(e) {
                return Object(a["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: e
                })
            }
        },
        "464f": function(e, t, r) {
            "use strict";
            r.d(t, "c", (function() {
                return n
            })), r.d(t, "b", (function() {
                return o
            })), r.d(t, "a", (function() {
                return s
            }));
            var a = r("b775");

            function n(e) {
                return Object(a["a"])({
                    url: "/api/edit/below_receive",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(a["a"])({
                    url: "/api/edit/show_receive_order",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(a["a"])({
                    url: "/api/edit/assign_parent_receive_transfer",
                    method: "get",
                    params: e
                })
            }
        },
        b0fc: function(e, t, r) {
            "use strict";
            r.r(t);
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "app-container"
                    }, [r("div", {
                        staticClass: "detail-table body-list"
                    }, [r("el-row", [r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v("流转单号：")]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v(e._s(e.order.transfer_order_no))]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v("商品总数量：")]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v(e._s(e.order.total_num))]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v("商品总金额：")]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v(e._s(e.order.total_cost))])], 1), e._v(" "), r("el-row", [r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v("流转状态：")]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v(e._s(e.order.receive_status_description))]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v("质检数量：")]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v(e._s(e.order.deal_num))]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v("质检总金额：")]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v(e._s(e.order.deal_cost))])], 1), e._v(" "), r("el-row", [r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v("处理结果：")]), e._v(" "), r("el-col", {
                        class: {
                            "color-warning": 1 == e.order.status, "color-success": 2 == e.order.status, "color-danger": 0 == e.order.status
                        },
                        attrs: {
                            span: 4
                        }
                    }, [e._v(e._s(e.order.status_description))]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v("流转步骤：")]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e.order.source_node ? r("span", [e._v(e._s(e.order.source_node.name) + "---\x3e" + e._s(e.order.to_node.name))]) : e._e()]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v("查收时间：")]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v(e._s(e.order.receive_at))])], 1), e._v(" "), r("el-row", [r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v("分配人：")]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e.order.assign_user ? r("span", [e._v(e._s(e.order.assign_user.department_name) + "--" + e._s(e.order.assign_user.real_name))]) : e._e()]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v("分配至：")]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e.order.by_assign_user ? r("span", [e._v(e._s(e.order.by_assign_user.department_name) + "--" + e._s(e.order.by_assign_user.real_name))]) : e._e()]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v("分配时间：")]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v(e._s(e.order.assign_at))])], 1), e._v(" "), r("el-row", [r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e._v("查收人：")]), e._v(" "), r("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e.order.receive_user ? r("span", [e._v(e._s(e.order.receive_user.department_name) + "--" + e._s(e.order.receive_user.real_name))]) : e._e()])], 1)], 1), e._v(" "), r("el-tabs", {
                        staticClass: "body-list",
                        model: {
                            value: e.activeTab,
                            callback: function(t) {
                                e.activeTab = t
                            },
                            expression: "activeTab"
                        }
                    }, [r("el-tab-pane", {
                        attrs: {
                            label: "商品明细",
                            name: "0"
                        }
                    }, [r("el-alert", {
                        staticClass: "alert-info",
                        attrs: {
                            type: "success",
                            closable: !1
                        }
                    }, [r("el-row", [r("el-col", {
                        staticClass: "header-info",
                        attrs: {
                            span: 24
                        }
                    }, [r("div", [e._v("未录入")])])], 1)], 1), e._v(" "), r("el-table", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            data: e.products,
                            "show-summary": "",
                            "summary-method": e.getSummaries
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            label: "序号",
                            type: "index",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "类目品牌",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(e._s(t.row.type.name) + " " + e._s(t.row.brand.name))]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "model.name",
                            label: "型号",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "参数信息",
                            "header-align": "center",
                            width: "350"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return e._l(t.row.sales_properties, (function(a, n) {
                                    return r("span", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 12 != a.pn_id && 5 != a.pn_id,
                                            expression: "item.pn_id != 12 && item.pn_id != 5"
                                        }],
                                        key: n
                                    }, [e._v(e._s(a.pv_name) + e._s(n == t.row.sales_properties.length - 1 ? "" : "，"))])
                                }))
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "imei",
                            label: "IMEI",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "cost",
                            label: "成色",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return e._l(t.row.sales_properties, (function(t, a) {
                                    return r("span", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 12 == t.pn_id,
                                            expression: "item.pn_id == 12"
                                        }],
                                        key: a
                                    }, [e._v(e._s(t.pv_name))])
                                }))
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product_cost.cost",
                            label: "成本价",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "num",
                            label: "数量",
                            align: "center"
                        }
                    })], 1), e._v(" "), r("el-alert", {
                        staticClass: "alert-info",
                        attrs: {
                            type: "success",
                            closable: !1
                        }
                    }, [r("el-row", [r("el-col", {
                        staticClass: "header-info",
                        attrs: {
                            span: 24
                        }
                    }, [r("div", [e._v("未录入")])])], 1)], 1), e._v(" "), r("el-table", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            data: e.products,
                            "show-summary": "",
                            "summary-method": e.getSummaries
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            label: "序号",
                            type: "index",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "类目品牌",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(e._s(t.row.type.name) + " " + e._s(t.row.brand.name))]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "model.name",
                            label: "型号",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "参数信息",
                            "header-align": "center",
                            width: "350"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return e._l(t.row.sales_properties, (function(a, n) {
                                    return r("span", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 12 != a.pn_id && 5 != a.pn_id,
                                            expression: "item.pn_id != 12 && item.pn_id != 5"
                                        }],
                                        key: n
                                    }, [e._v(e._s(a.pv_name) + e._s(n == t.row.sales_properties.length - 1 ? "" : "，"))])
                                }))
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "imei",
                            label: "IMEI",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "cost",
                            label: "成色",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return e._l(t.row.sales_properties, (function(t, a) {
                                    return r("span", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 12 == t.pn_id,
                                            expression: "item.pn_id == 12"
                                        }],
                                        key: a
                                    }, [e._v(e._s(t.pv_name))])
                                }))
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product_cost.cost",
                            label: "成本价",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "num",
                            label: "数量",
                            align: "center"
                        }
                    })], 1)], 1), e._v(" "), r("el-tab-pane", {
                        attrs: {
                            label: "异常登记",
                            name: "1",
                            lazy: !0
                        }
                    }, [r("el-table", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: e.logs.loading,
                            expression: "logs.loading"
                        }],
                        staticStyle: {
                            width: "100%",
                            "margin-bottom": "10px"
                        },
                        attrs: {
                            data: e.exceptionOrder
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            label: "序号",
                            type: "index",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "order_number",
                            label: "异常单号",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "类目品牌",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(e._s(t.row.type.name) + " " + e._s(t.row.brand.name))]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "model.name",
                            label: "型号",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "imei",
                            label: "IMEI",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "num",
                            label: "数量",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "cost_price",
                            label: "成本价",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "reason_description",
                            label: "异常原因",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "remark",
                            label: "异常描述",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "登记人",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.create_user ? r("span", [e._v(e._s(t.row.create_user.department_name) + "--" + e._s(t.row.create_user.real_name))]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "created_at",
                            label: "登记时间",
                            align: "center"
                        }
                    })], 1)], 1), e._v(" "), r("el-tab-pane", {
                        attrs: {
                            label: "操作日志",
                            name: "2",
                            lazy: !0
                        }
                    }, [r("el-table", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: e.logs.loading,
                            expression: "logs.loading"
                        }],
                        staticStyle: {
                            width: "100%",
                            "margin-bottom": "10px"
                        },
                        attrs: {
                            data: e.logData
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            label: "序号",
                            type: "index",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "created_at",
                            label: "操作时间",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "real_name",
                            label: "操作人",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.operate_user ? r("span", [e._v(e._s(t.row.operate_user.department_name) + " - " + e._s(t.row.operate_user.real_name))]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "content",
                            label: "内容",
                            align: "center"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "footer-pagination"
                    }, [r("el-pagination", {
                        attrs: {
                            background: "",
                            layout: "total, prev, pager, next, jumper",
                            total: e.logs.total,
                            "current-page": e.logs.page,
                            "page-size": 10
                        },
                        on: {
                            "update:currentPage": function(t) {
                                return e.$set(e.logs, "page", t)
                            },
                            "update:current-page": function(t) {
                                return e.$set(e.logs, "page", t)
                            },
                            "current-change": function(t) {
                                return e.getLogs()
                            }
                        }
                    })], 1)], 1)], 1), e._v(" "), r("div", {
                        staticClass: "flex-center"
                    }, [1 == e.info.status && 0 == e.info.is_out_of ? r("el-button", {
                        attrs: {
                            type: "success",
                            loading: e.saveLoading
                        },
                        on: {
                            click: function(t) {
                                return e.agree()
                            }
                        }
                    }, [e._v("同意")]) : e._e(), e._v(" "), 1 == e.info.status && 0 == e.info.is_out_of ? r("el-button", {
                        attrs: {
                            type: "danger",
                            loading: e.saveLoading
                        },
                        on: {
                            click: function(t) {
                                return e.refuse()
                            }
                        }
                    }, [e._v("拒绝")]) : e._e(), e._v(" "), 1 == e.info.status && 1 == e.info.is_out_of ? r("el-button", {
                        attrs: {
                            type: "danger",
                            loading: e.saveLoading
                        },
                        on: {
                            click: function(t) {
                                return e.refuse()
                            }
                        }
                    }, [e._v("取消申请")]) : e._e()], 1)], 1)
                },
                n = [],
                o = r("4838"),
                s = r.n(o),
                l = r("464f"),
                i = r("2934");

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach((function(t) {
                        p(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function p(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function _(e, t) {
                var r;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = d(e)) || t && e && "number" === typeof e.length) {
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
                var o, s = !0,
                    l = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next();
                        return s = e.done, e
                    },
                    e: function(e) {
                        l = !0, o = e
                    },
                    f: function() {
                        try {
                            s || null == r.return || r.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function d(e, t) {
                if (e) {
                    if ("string" === typeof e) return m(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? m(e, t) : void 0
                }
            }

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                return a
            }

            function f(e, t, r, a, n, o, s) {
                try {
                    var l = e[o](s),
                        i = l.value
                } catch (c) {
                    return void r(c)
                }
                l.done ? t(i) : Promise.resolve(i).then(a, n)
            }

            function v(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(a, n) {
                        var o = e.apply(t, r);

                        function s(e) {
                            f(o, a, n, s, l, "next", e)
                        }

                        function l(e) {
                            f(o, a, n, s, l, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            var b = {
                    name: "DistributionReceptDetail",
                    data: function() {
                        return {
                            activeTab: 0,
                            info: {},
                            logs: {
                                page: 1,
                                total: 0,
                                loading: !1
                            },
                            logData: [],
                            saveLoading: !1,
                            order: {},
                            products: [],
                            exceptionOrder: []
                        }
                    },
                    mounted: function() {
                        this.getDetail(), this.getLogs()
                    },
                    methods: {
                        getDetail: function() {
                            var e = v(s.a.mark((function e() {
                                var t, r, a, n, o, i, c, p;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t = this.$loading({
                                                target: ".app-container"
                                            }), e.next = 3, Object(l["b"])({
                                                transfer_order_id: this.$route.query.id
                                            });
                                        case 3:
                                            r = e.sent, this.order = r.data.transfer_order, this.products = r.data.products, a = _(r.data.abnormal_orders);
                                            try {
                                                for (a.s(); !(n = a.n()).done;) {
                                                    o = n.value, i = _(o.details);
                                                    try {
                                                        for (i.s(); !(c = i.n()).done;) p = c.value, this.exceptionOrder.push(u({
                                                            order_number: o.abnormal_report_order_no,
                                                            create_user: o.create_user
                                                        }, p))
                                                    } catch (s) {
                                                        i.e(s)
                                                    } finally {
                                                        i.f()
                                                    }
                                                }
                                            } catch (s) {
                                                a.e(s)
                                            } finally {
                                                a.f()
                                            }
                                            t.close();
                                        case 9:
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
                        getSummaries: function(e) {
                            var t = e.columns,
                                r = e.data,
                                a = [];
                            return t.forEach((function(e, t) {
                                if (0 !== t) {
                                    if ("product_cost.cost" == e.property) {
                                        var n, o = 0,
                                            s = _(r);
                                        try {
                                            for (s.s(); !(n = s.n()).done;) {
                                                var l = n.value;
                                                l.product_cost && (o += Number(l.product_cost.cost))
                                            }
                                        } catch (d) {
                                            s.e(d)
                                        } finally {
                                            s.f()
                                        }
                                        a[t] = o
                                    }
                                    if ("num" == e.property) {
                                        var i, c = 0,
                                            u = _(r);
                                        try {
                                            for (u.s(); !(i = u.n()).done;) {
                                                var p = i.value;
                                                c += Number(p.num)
                                            }
                                        } catch (d) {
                                            u.e(d)
                                        } finally {
                                            u.f()
                                        }
                                        a[t] = c
                                    }
                                } else a[t] = "合计"
                            })), a
                        },
                        getLogs: function() {
                            var e = v(s.a.mark((function e() {
                                var t;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return this.logs.loading = !0, e.next = 3, Object(i["k"])({
                                                upstream_order_id: this.$route.query.id,
                                                upstream_order_type: "transfer_orders",
                                                page: this.logs.page
                                            });
                                        case 3:
                                            t = e.sent, this.logData = t.data.data, this.logs.total = t.data.total, this.logs.loading = !1;
                                        case 7:
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
                g = b,
                h = (r("ffcd"), r("5d22")),
                y = Object(h["a"])(g, a, n, !1, null, "22878fd0", null);
            t["default"] = y.exports
        },
        da07: function(e, t, r) {},
        ffcd: function(e, t, r) {
            "use strict";
            r("da07")
        }
    }
]);