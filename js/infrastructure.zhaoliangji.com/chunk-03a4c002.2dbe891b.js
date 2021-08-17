(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-03a4c002"], {
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
                return v
            })), r.d(t, "q", (function() {
                return m
            })), r.d(t, "f", (function() {
                return f
            })), r.d(t, "o", (function() {
                return b
            })), r.d(t, "c", (function() {
                return g
            })), r.d(t, "e", (function() {
                return y
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

            function v(e) {
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

            function f(e) {
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

            function y(e) {
                return Object(n["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: e
                })
            }
        },
        4899: function(e, t, r) {
            "use strict";
            r("9516")
        },
        9516: function(e, t, r) {},
        b944: function(e, t, r) {
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
                            label: "采购单",
                            name: "0"
                        }
                    }, [r("listComponent", {
                        attrs: {
                            type: "purchase_order"
                        }
                    })], 1), e._v(" "), r("el-tab-pane", {
                        attrs: {
                            label: "调拨单",
                            name: "1"
                        }
                    }, [r("listComponent", {
                        attrs: {
                            type: "warehouse_batch_switch"
                        }
                    })], 1), e._v(" "), r("el-tab-pane", {
                        attrs: {
                            label: "异常单",
                            name: "2"
                        }
                    }, [r("listComponent", {
                        attrs: {
                            type: "abnormal_report_order"
                        }
                    })], 1), e._v(" "), r("el-tab-pane", {
                        attrs: {
                            label: "流转单",
                            name: "3"
                        }
                    }, [r("Transfer")], 1)], 1)], 1)
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
                        attrs: {
                            span: 8
                        }
                    }, [r("el-input", {
                        ref: "order_no",
                        attrs: {
                            placeholder: e.handlePlaceholder()
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getOrderList()
                            }
                        },
                        model: {
                            value: e.search.upstream_order_no,
                            callback: function(t) {
                                e.$set(e.search, "upstream_order_no", t)
                            },
                            expression: "search.upstream_order_no"
                        }
                    })], 1), e._v(" "), r("el-col", {
                        attrs: {
                            span: 8
                        }
                    }, [r("el-alert", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.orderType > -1,
                            expression: "orderType > -1"
                        }],
                        staticClass: "status-tip",
                        attrs: {
                            title: 0 == e.orderType ? "待接收" : 1 == e.orderType ? "部分接收" : 2 == e.orderType ? "已接收" : "",
                            type: 0 == e.orderType || 1 == e.orderType ? "warning" : (e.orderType, "success"),
                            "show-icon": "",
                            closable: !1
                        }
                    })], 1)], 1), e._v(" "), r("el-row", {
                        staticClass: "header-search"
                    }, [r("el-col", [r("el-alert", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: Object.keys(e.order).length > 0,
                            expression: "Object.keys(order).length > 0"
                        }],
                        staticClass: "alert-info",
                        attrs: {
                            type: "success",
                            closable: !1
                        }
                    }, ["purchase_order" == e.type ? r("el-row", [r("el-col", {
                        staticClass: "header-info",
                        attrs: {
                            span: 16
                        }
                    }, [2 == e.order.standard_type ? r("div", [e._v("\n              商品类型：\n              "), r("span", [e._v("标品")])]) : e._e(), e._v(" "), r("div", [e._v("\n              业务类型：\n              "), r("span", [e._v(e._s(e.order.sale_type_description))])]), e._v(" "), r("div", [e._v("\n              采购单号：\n              "), r("span", [e._v(e._s(e.order.purchase_order_no))])]), e._v(" "), r("div", [e._v("\n              供应商：\n              "), r("span", [e._v("\n                " + e._s(e.order.supplier_info ? e.order.supplier_info.name : "") + "\n              ")])]), e._v(" "), r("div", [e._v("\n              创建人：\n              "), r("span", [e._v(e._s(e.order.admin_name))])]), e._v(" "), r("div", [e._v("\n              创建时间：\n              "), r("span", [e._v(e._s(e.order.created_at))])])]), e._v(" "), r("el-col", {
                        staticClass: "header-total",
                        attrs: {
                            span: 8
                        }
                    }, [r("ul", [r("li", [e._v("\n                订单数量：\n                "), r("span", [e._v(e._s(e.order.order_num))])]), e._v(" "), r("li", [e._v("\n                实收数量：\n                "), r("span", [e._v(e._s(e.order.receive_num))])])]), e._v(" "), r("ul", [r("li", [e._v("\n                订单金额：\n                "), r("span", [e._v(e._s(e.order.order_total_cost))])]), e._v(" "), r("li", [e._v("\n                订单金额：\n                "), r("span", [e._v(e._s(e.order.receive_total_cost))])])]), e._v(" "), r("ul", [r("li", [e._v("\n                已勾选：\n                "), r("span", [e._v(e._s(e.selectNum))])]), e._v(" "), r("li", [e._v("\n                总数量：\n                "), r("span", [e._v(e._s(e.productCount))])])])])], 1) : e._e(), e._v(" "), "warehouse_batch_switch" == e.type ? r("el-row", [r("el-col", {
                        staticClass: "header-info",
                        attrs: {
                            span: 16
                        }
                    }, [r("div", [e._v("\n              调拨类型：\n              "), r("span", [e._v(e._s(e.order.type_description))])]), e._v(" "), r("div", [e._v("\n              调拨单号：\n              "), r("span", [e._v(e._s(e.order.move_batch_no))])]), e._v(" "), r("div", [e._v("\n              源仓库：\n              "), r("span", [e._v(e._s(e.order.src_warehouse_description))])]), e._v(" "), r("div", [e._v("\n              目标仓库：\n              "), r("span", [e._v(e._s(e.order.dst_warehouse_description))])]), e._v(" "), r("div", [e._v("\n              申请人：\n              "), r("span", [e._v(e._s(e.order.apply_user_name))])]), e._v(" "), r("div", [e._v("\n              申请时间：\n              "), r("span", [e._v(e._s(e.order.apply_time))])])])], 1) : e._e(), e._v(" "), "abnormal_report_order" == e.type ? r("el-row", [r("el-col", {
                        staticClass: "header-info",
                        attrs: {
                            span: 16
                        }
                    }, [r("div", [e._v("\n              异常环节：\n              "), r("span", [e._v(e._s(e.order.node ? e.order.node.name : ""))])]), e._v(" "), r("div", [e._v("\n              异常单号：\n              "), r("span", [e._v(e._s(e.order.abnormal_report_order_no))])]), e._v(" "), r("div", [e._v("\n              登记人：\n              "), r("span", [e._v("\n                " + e._s(e.order.create_user ? e.order.create_user.real_name : "") + "\n              ")])]), e._v(" "), r("div", [e._v("\n              申请时间：\n              "), r("span", [e._v(e._s(e.order.created_at))])])]), e._v(" "), r("el-col", {
                        staticClass: "header-total",
                        attrs: {
                            span: 8
                        }
                    }, [r("ul", [r("li", [e._v("\n                订单数量：\n                "), r("span", [e._v(e._s(e.order.num))])])]), e._v(" "), r("ul", [r("li", [e._v("\n                订单金额：\n                "), r("span", [e._v(e._s(e.order.total_cost))])])])])], 1) : e._e()], 1)], 1)], 1), e._v(" "), r("el-row", {
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
                        ref: "productTable",
                        attrs: {
                            data: e.details,
                            border: ""
                        },
                        on: {
                            "selection-change": e.handleSelectionChange,
                            "row-click": e.handleRowClick
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
                            width: "80"
                        }
                    }), e._v(" "), "warehouse_batch_switch" == e.type ? r("el-table-column", {
                        attrs: {
                            prop: "product_name",
                            label: "商品名称",
                            align: "center"
                        }
                    }) : e._e(), e._v(" "), "warehouse_batch_switch" != e.type ? r("el-table-column", {
                        attrs: {
                            prop: "type.name",
                            label: "类目",
                            width: "120",
                            align: "center"
                        }
                    }) : e._e(), e._v(" "), "warehouse_batch_switch" != e.type ? r("el-table-column", {
                        attrs: {
                            prop: "brand.name",
                            label: "品牌",
                            width: "100",
                            align: "center"
                        }
                    }) : e._e(), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "model.name",
                            label: "型号",
                            align: "center"
                        }
                    }), e._v(" "), "abnormal_report_order" != e.type ? r("el-table-column", {
                        attrs: {
                            label: "参数信息",
                            align: "center",
                            width: "300"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return e._l(t.row.sales_properties, (function(n, a) {
                                    return r("span", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 12 != n.pn_id && 5 != n.pn_id,
                                            expression: "item.pn_id != 12 && item.pn_id != 5"
                                        }],
                                        key: a
                                    }, [e._v("\n              " + e._s(n.pv_name) + e._s(a == t.row.sales_properties.length - 1 ? "" : "，") + "\n            ")])
                                }))
                            }
                        }], null, !1, 408941741)
                    }) : e._e(), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "imei",
                            label: "IMEI",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "成色",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return e._l(t.row.sales_properties, (function(t, n) {
                                    return r("span", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 12 == t.pn_id,
                                            expression: "item.pn_id == 12"
                                        }],
                                        key: n
                                    }, [e._v(e._s(t.pv_name))])
                                }))
                            }
                        }])
                    }), e._v(" "), "purchase_order" == e.type ? r("el-table-column", {
                        attrs: {
                            prop: "purchase_num",
                            label: "订单数量",
                            align: "center",
                            width: "100"
                        }
                    }) : e._e(), e._v(" "), "warehouse_batch_switch" == e.type ? r("el-table-column", {
                        attrs: {
                            label: "数量",
                            align: "center",
                            width: "100"
                        }
                    }, [
                        [e._v("1")]
                    ], 2) : e._e(), e._v(" "), "abnormal_report_order" == e.type ? r("el-table-column", {
                        attrs: {
                            prop: "num",
                            label: "异常数量",
                            align: "center",
                            width: "80"
                        }
                    }) : e._e(), e._v(" "), "warehouse_batch_switch" != e.type ? r("el-table-column", {
                        attrs: {
                            prop: "receive_num",
                            label: "已接收数量",
                            align: "center",
                            width: "100"
                        }
                    }) : e._e(), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product_cost.cost",
                            label: "成本价",
                            align: "center",
                            width: "100"
                        }
                    }), e._v(" "), "abnormal_report_order" == e.type ? r("el-table-column", {
                        attrs: {
                            prop: "reason_description",
                            label: "异常原因",
                            align: "center",
                            width: "100"
                        }
                    }) : e._e(), e._v(" "), "abnormal_report_order" == e.type ? r("el-table-column", {
                        attrs: {
                            prop: "remark",
                            label: "异常描述",
                            align: "center"
                        }
                    }) : e._e(), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "address",
                            label: "实收数量",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("el-input-number", {
                                    attrs: {
                                        min: 1,
                                        max: "purchase_order" == e.type ? t.row.purchase_num - t.row.receive_num : "abnormal_report_order" == e.type ? t.row.num - t.row.receive_num : (e.type, 1),
                                        label: "请输入实收数量",
                                        size: "mini"
                                    },
                                    model: {
                                        value: t.row.real_num,
                                        callback: function(r) {
                                            e.$set(t.row, "real_num", r)
                                        },
                                        expression: "scope.row.real_num"
                                    }
                                })]
                            }
                        }])
                    })], 1)], 1)], 1), e._v(" "), r("el-row", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.details.length > 0,
                            expression: "details.length > 0"
                        }]
                    }, [r("el-col", {
                        staticClass: "flex-center"
                    }, ["abnormal_report_order" != e.type ? r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.save()
                            }
                        }
                    }, [e._v("接收")]) : e._e(), e._v(" "), "abnormal_report_order" != e.type ? r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.saveAndAssign()
                            }
                        }
                    }, [e._v("接收并分配")]) : e._e(), e._v(" "), "abnormal_report_order" == e.type ? r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.toOutPage()
                            }
                        }
                    }, [e._v("调拨出库")]) : e._e()], 1)], 1), e._v(" "), r("AssignDialog", {
                        attrs: {
                            "show-dialog": e.showAssignDialog,
                            "disabled-node": "purchase_order" == e.type,
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
                    })], 1)
                },
                s = [],
                i = r("4838"),
                l = r.n(i),
                c = r("b775");

            function u(e) {
                return Object(c["a"])({
                    url: "/api/receive/upstream_order_details",
                    method: "get",
                    params: e
                })
            }

            function d(e) {
                return Object(c["a"])({
                    url: "/api/receive/store_receive_order",
                    method: "post",
                    data: e
                })
            }

            function p(e) {
                return Object(c["a"])({
                    url: "/api/receive/scan_receive",
                    method: "get",
                    params: e
                })
            }

            function _(e) {
                return Object(c["a"])({
                    url: "/api/receive/scan_info",
                    method: "get",
                    params: e
                })
            }

            function h(e) {
                return Object(c["a"])({
                    url: "/api/receive/transfer_store",
                    method: "post",
                    data: e
                })
            }
            var v = r("b7b8");

            function m(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(r), !0).forEach((function(t) {
                        b(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function b(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function g(e, t, r, n, a, o, s) {
                try {
                    var i = e[o](s),
                        l = i.value
                } catch (c) {
                    return void r(c)
                }
                i.done ? t(l) : Promise.resolve(l).then(n, a)
            }

            function y(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function s(e) {
                            g(o, n, a, s, i, "next", e)
                        }

                        function i(e) {
                            g(o, n, a, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function w(e, t) {
                var r;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = k(e)) || t && e && "number" === typeof e.length) {
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

            function k(e, t) {
                if (e) {
                    if ("string" === typeof e) return O(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? O(e, t) : void 0
                }
            }

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var j = {
                    name: "ScannerListComponent",
                    components: {
                        AssignDialog: v["a"]
                    },
                    props: {
                        type: [String]
                    },
                    data: function() {
                        return {
                            search: {
                                upstream_order_type: this.type,
                                upstream_order_no: ""
                            },
                            order: {},
                            details: [],
                            loading: !1,
                            orderType: -1,
                            selectedRow: [],
                            detailsHeapUp: [],
                            showAssignDialog: !1,
                            assignForm: {
                                to_node_id: 2
                            },
                            order_no: null
                        }
                    },
                    computed: {
                        productCount: function() {
                            var e, t = 0,
                                r = w(this.details);
                            try {
                                for (r.s(); !(e = r.n()).done;) {
                                    var n = e.value;
                                    t += n.purchase_num
                                }
                            } catch (a) {
                                r.e(a)
                            } finally {
                                r.f()
                            }
                            return t
                        },
                        selectNum: function() {
                            var e, t = 0,
                                r = w(this.selectedRow);
                            try {
                                for (r.s(); !(e = r.n()).done;) {
                                    var n = e.value;
                                    t += n.real_num
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
                        this.$refs["order_no"].focus(), this.handlePlaceholder()
                    },
                    methods: {
                        getOrderList: function() {
                            var e = y(l.a.mark((function e() {
                                var t, r, n, a, o, s, i, c, d, p = arguments;
                                return l.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t = p.length > 0 && void 0 !== p[0] ? p[0] : 1, e.prev = 1, r = null, this.search.upstream_order_no ? r = this.search.upstream_order_no : "purchase_order" == this.type ? r = this.order.purchase_order_no : "warehouse_batch_switch" == this.type ? r = this.order.move_batch_no : "abnormal_report_order" == this.type && (r = this.order.abnormal_report_order_no), this.order_no = r, n = {
                                                upstream_order_type: this.type,
                                                upstream_order_no: r,
                                                valid_receive_num_done: t
                                            }, this.loading = !0, e.next = 9, u(n);
                                        case 9:
                                            a = e.sent, this.loading = !1, this.order = a.data.order, o = 0, s = 0, i = w(a.data.details);
                                            try {
                                                for (i.s(); !(c = i.n()).done;) d = c.value, "warehouse_batch_switch" == this.type ? d.real_num = 1 : (d.real_num = d.purchase_num ? d.purchase_num - d.receive_num : d.num - d.receive_num, o += d.purchase_num, s += d.receive_num)
                                            } catch (l) {
                                                i.e(l)
                                            } finally {
                                                i.f()
                                            }
                                            o == s ? this.orderType = 2 : o > s && s > 0 ? this.orderType = 1 : 0 == s && (this.orderType = 0), this.details = a.data.details, 0 == this.details.length && (this.order = {}, this.orderType = -1, this.search.upstream_order_no = null), this.search.upstream_order_no = null, "abnormal_report_order" === this.type && (1 === t && this.details.length > 0 ? this.save() : (console.log(this.detailsHeapUp), console.log(this.details), this.detailsHeapUp = this.detailsHeapUp.concat(this.details), this.details = this.detailsHeapUp, console.log(this.details))), console.log(this.detailsHeapUp), e.next = 28;
                                            break;
                                        case 24:
                                            e.prev = 24, e.t0 = e["catch"](1), this.search.upstream_order_no = null, this.loading = !1;
                                        case 28:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [1, 24]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        toOutPage: function() {
                            var e = y(l.a.mark((function e() {
                                var t;
                                return l.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            t = this.details, this.selectedRow.length > 0 && (t = this.selectedRow), this.$router.push({
                                                name: "distribution-out",
                                                query: {
                                                    product_ids_str: t.map((function(e) {
                                                        return e.product_id
                                                    })).join(",")
                                                }
                                            });
                                        case 3:
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
                        save: function() {
                            var e = y(l.a.mark((function e(t) {
                                var r, n, a, o, s, i, c;
                                return l.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            e.prev = 0, r = {
                                                upstream_order_type: this.type,
                                                upstream_order_no: this.order_no,
                                                details: []
                                            }, n = this.details, this.selectedRow.length > 0 && (n = this.selectedRow), a = w(n);
                                            try {
                                                for (a.s(); !(o = a.n()).done;) s = o.value, r.details.push({
                                                    type_id: s.type_id,
                                                    receive_num: s.real_num,
                                                    upstream_order_detail_id: s.id,
                                                    cost_price: s.product_cost ? s.product_cost.cost : null
                                                })
                                            } catch (l) {
                                                a.e(l)
                                            } finally {
                                                a.f()
                                            }
                                            return t && (r = f(f({}, r), this.assignForm)), this.loading = !0, e.next = 10, d(r);
                                        case 10:
                                            i = e.sent, this.loading = !1, c = 0, this.getOrderList(c), this.assignForm = {}, this.$message({
                                                message: i.msg,
                                                type: "success",
                                                duration: 1e4,
                                                showClose: !0
                                            }), t && this.$router.push({
                                                name: "distribution-flow-list",
                                                query: {
                                                    order_no: i.data.transfer_order_no
                                                }
                                            }), e.next = 23;
                                            break;
                                        case 19:
                                            e.prev = 19, e.t0 = e["catch"](0), console.log(e.t0), this.loading = !1;
                                        case 23:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 19]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        saveAndAssign: function() {
                            this.showAssignDialog = !0
                        },
                        handleSelectionChange: function(e) {
                            this.selectedRow = e
                        },
                        handleAssingDone: function() {
                            this.save(1)
                        },
                        handlePlaceholder: function() {
                            switch (this.type) {
                                case "purchase_order":
                                    return "扫描采购单号";
                                case "warehouse_batch_switch":
                                    return "扫描调拨单号";
                                case "abnormal_report_order":
                                    return "扫描异常单号"
                            }
                        },
                        handleRowClick: function(e, t, r) {
                            "td" != r.target.localName && "div" != r.target.localName || this.$refs["productTable"].toggleRowSelection(e)
                        }
                    }
                },
                x = j,
                C = r("5d22"),
                A = Object(C["a"])(x, o, s, !1, null, "a63e60b6", null),
                D = A.exports,
                S = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", [r("el-row", {
                        staticClass: "header-search"
                    }, [r("el-col", {
                        attrs: {
                            span: 8
                        }
                    }, [r("el-input", {
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
                    })], 1), e._v(" "), r("el-col", {
                        attrs: {
                            span: 8
                        }
                    }, [r("el-alert", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: void 0 != e.detail.status,
                            expression: "detail.status != undefined"
                        }],
                        staticClass: "status-tip",
                        attrs: {
                            title: e.detail.receive_status_description,
                            type: 0 == e.detail.receive_status ? "warning" : (e.detail.receive_status, "success"),
                            "show-icon": "",
                            closable: !1
                        }
                    })], 1), e._v(" "), r("el-col", {
                        attrs: {
                            span: 8
                        }
                    })], 1), e._v(" "), e.detail.id ? r("el-row", {
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
                    }, [r("div", [e._v("\n              当前流转单号：\n              "), r("span", [e._v(e._s(e.detail.transfer_order_no))])]), e._v(" "), r("div", [e._v("\n              总数量：\n              "), r("span", [e._v(e._s(e.detail.total_num))])])])], 1)], 1)], 1)], 1) : e._e(), e._v(" "), r("el-row", {
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
                        ref: "productTable",
                        attrs: {
                            data: e.tableData,
                            border: ""
                        },
                        on: {
                            "selection-change": e.handleSelect,
                            "row-click": e.handleRowClick
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
                            width: "80"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product_name",
                            label: "商品名称",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product_name",
                            label: "业务类型/供应商",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v("\n            " + e._s(t.row.business_type_description) + "/\n            "), t.row.product_cost ? r("span", [e._v(e._s(t.row.product_cost.supplier_info.name))]) : e._e()]
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
                            prop: "product_name",
                            label: "参数信息",
                            "header-align": "center",
                            width: "500"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return e._l(t.row.sales_properties, (function(t, n) {
                                    return r("el-tag", {
                                        key: n,
                                        staticStyle: {
                                            "margin-right": "2px"
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
                            prop: "product_cost.cost",
                            label: "成本价",
                            align: "center",
                            width: "100"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "address",
                            label: "操作",
                            align: "center",
                            width: "150"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("el-button", {
                                    directives: [{
                                        name: "print",
                                        rawName: "v-print",
                                        value: "#barcode-container",
                                        expression: "'#barcode-container'"
                                    }],
                                    attrs: {
                                        type: "success",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return e.openBarcode(t.row)
                                        }
                                    }
                                }, [e._v("打印标签")])]
                            }
                        }])
                    })], 1)], 1)], 1), e._v(" "), r("el-row", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.tableData.length > 0,
                            expression: "tableData.length > 0"
                        }]
                    }, [r("el-col", {
                        staticClass: "flex-center"
                    }, [r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.save()
                            }
                        }
                    }, [e._v("创建流转单")])], 1)], 1), e._v(" "), r("AssignDialog", {
                        attrs: {
                            "show-dialog": e.showAssignDialog,
                            "require-user": !1,
                            "disabled-item": [1, 2]
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
                    }), e._v(" "), r("Barcode", {
                        attrs: {
                            id: "barcode-container",
                            data: e.barcodeInfo
                        }
                    })], 1)
                },
                N = [],
                T = r("6d8f");

            function $(e, t) {
                var r;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = P(e)) || t && e && "number" === typeof e.length) {
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

            function P(e, t) {
                if (e) {
                    if ("string" === typeof e) return R(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? R(e, t) : void 0
                }
            }

            function R(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function I(e, t, r, n, a, o, s) {
                try {
                    var i = e[o](s),
                        l = i.value
                } catch (c) {
                    return void r(c)
                }
                i.done ? t(l) : Promise.resolve(l).then(n, a)
            }

            function F(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function s(e) {
                            I(o, n, a, s, i, "next", e)
                        }

                        function i(e) {
                            I(o, n, a, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            var q = {
                    components: {
                        AssignDialog: v["a"],
                        Barcode: T["a"]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            search: {
                                transfer_order_no: null,
                                imei: null
                            },
                            loading: !1,
                            selectRows: [],
                            detail: {},
                            saveArr: [],
                            assignForm: {
                                to_node_id: 3
                            },
                            showAssignDialog: !1,
                            barcodeInfo: []
                        }
                    },
                    mounted: function() {},
                    methods: {
                        getDetail: function() {
                            var e = F(l.a.mark((function e() {
                                var t, r;
                                return l.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t = this.search.transfer_order_no ? this.search.transfer_order_no : this.detail.transfer_order_no, this.loading = !0, e.next = 5, p({
                                                transfer_order_no: t
                                            });
                                        case 5:
                                            r = e.sent, this.loading = !1, this.detail = r.data, this.getList(), this.search.transfer_order_no = null, e.next = 16;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e["catch"](0), this.loading = !1, this.search.transfer_order_no = null;
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
                        }(),
                        getList: function() {
                            var e = F(l.a.mark((function e() {
                                var t;
                                return l.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, this.loading = !0, e.next = 4, _({
                                                transfer_order_id: this.detail.id
                                            });
                                        case 4:
                                            t = e.sent, this.loading = !1, this.tableData = t.data, e.next = 13;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e["catch"](0), console.log(e.t0), this.loading = !1;
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 9]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        save: function() {
                            this.showAssignDialog = !0
                        },
                        handleAssingDone: function() {
                            var e = F(l.a.mark((function e() {
                                var t, r, n, a, o, s;
                                return l.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            e.prev = 0, t = {
                                                to_node_id: this.assignForm.to_node_id,
                                                product_ids: [],
                                                by_assign_user_id: this.assignForm.by_assign_user_id
                                            }, r = this.tableData, this.selectRows.length > 0 && (r = this.selectRows), n = $(r);
                                            try {
                                                for (n.s(); !(a = n.n()).done;) o = a.value, t.product_ids.push(o.product_id)
                                            } catch (i) {
                                                n.e(i)
                                            } finally {
                                                n.f()
                                            }
                                            return this.loading = !0, e.next = 9, h(t);
                                        case 9:
                                            s = e.sent, this.loading = !1, this.$message.success(s.msg), this.$router.push({
                                                name: "distribution-flow-list",
                                                query: {
                                                    order_no: s.data.transfer_order_no
                                                }
                                            }), e.next = 19;
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

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        toLink: function(e) {
                            window.open(e, "_blank", "left=0,top=0")
                        },
                        handleSelect: function(e) {
                            this.selectRows = e
                        },
                        handleRowClick: function(e, t, r) {
                            "td" != r.target.localName && "div" != r.target.localName || this.$refs["productTable"].toggleRowSelection(e)
                        },
                        openBarcode: function(e) {
                            var t = e.product_name,
                                r = {
                                    title: "".concat(t),
                                    code: e.imei
                                };
                            this.barcodeInfo = [r]
                        }
                    }
                },
                E = q,
                L = (r("4899"), Object(C["a"])(E, S, N, !1, null, "502f9f8c", null)),
                U = L.exports,
                H = {
                    components: {
                        ListComponent: D,
                        Transfer: U
                    },
                    data: function() {
                        return {
                            activeName: "0"
                        }
                    },
                    mounted: function() {
                        this.$set(this, "activeName", this.$route.query.type ? String(this.$route.query.type) : "0")
                    },
                    methods: {}
                },
                z = H,
                B = Object(C["a"])(z, n, a, !1, null, "9a4430be", null);
            t["default"] = B.exports
        }
    }
]);