(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-66a1f0db"], {
        2934: function(e, t, a) {
            "use strict";
            a.d(t, "p", (function() {
                return n
            })), a.d(t, "d", (function() {
                return o
            })), a.d(t, "i", (function() {
                return l
            })), a.d(t, "m", (function() {
                return i
            })), a.d(t, "b", (function() {
                return s
            })), a.d(t, "g", (function() {
                return u
            })), a.d(t, "k", (function() {
                return c
            })), a.d(t, "j", (function() {
                return d
            })), a.d(t, "h", (function() {
                return _
            })), a.d(t, "n", (function() {
                return p
            })), a.d(t, "a", (function() {
                return f
            })), a.d(t, "l", (function() {
                return m
            })), a.d(t, "q", (function() {
                return b
            })), a.d(t, "f", (function() {
                return h
            })), a.d(t, "o", (function() {
                return v
            })), a.d(t, "c", (function() {
                return y
            })), a.d(t, "e", (function() {
                return g
            }));
            var r = a("b775");

            function n(e) {
                return Object(r["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(r["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: e
                })
            }

            function l(e) {
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

            function s(e) {
                return Object(r["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: e
                })
            }

            function u(e) {
                return Object(r["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: e
                })
            }

            function c(e) {
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

            function _(e) {
                return Object(r["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: e
                })
            }

            function p(e) {
                return Object(r["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: e
                })
            }

            function f(e) {
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

            function b(e) {
                return Object(r["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: e
                })
            }

            function h(e) {
                return Object(r["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: e
                })
            }

            function v(e) {
                return Object(r["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: e
                })
            }

            function y(e) {
                return Object(r["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: e
                })
            }

            function g(e) {
                return Object(r["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: e
                })
            }
        },
        "71ff": function(e, t, a) {
            "use strict";
            a.r(t);
            var r = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "app-container"
                    }, [a("el-tabs", {
                        on: {
                            "tab-click": e.handleTabsChange
                        },
                        model: {
                            value: e.activeName,
                            callback: function(t) {
                                e.activeName = t
                            },
                            expression: "activeName"
                        }
                    }, e._l(e.tabData, (function(t, r) {
                        return a("el-tab-pane", {
                            key: r,
                            attrs: {
                                label: t.label,
                                name: t.name
                            }
                        }, [a(e.tabComponent, {
                            tag: "component"
                        })], 1)
                    })), 1)], 1)
                },
                n = [],
                o = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "app-container"
                    }, [a("el-row", {
                        staticClass: "header-search"
                    }, [a("el-col", {
                        staticClass: "wrap",
                        attrs: {
                            span: 21
                        }
                    }, [a("div", {
                        staticClass: "same-width"
                    }, [a("div", {
                        staticClass: "search-item search-timer"
                    }, [a("el-date-picker", {
                        attrs: {
                            type: "datetimerange",
                            "range-separator": "-",
                            "start-placeholder": "上报时间",
                            "end-placeholder": "结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"]
                        },
                        model: {
                            value: e.search.record_date,
                            callback: function(t) {
                                e.$set(e.search, "record_date", t)
                            },
                            expression: "search.record_date"
                        }
                    })], 1), e._v(" "), a("div", {
                        staticClass: "search-item"
                    }, [a("el-select", {
                        attrs: {
                            clearable: "",
                            multiple: "",
                            "collapse-tags": "",
                            placeholder: "区域信息"
                        },
                        model: {
                            value: e.search.area_ids,
                            callback: function(t) {
                                e.$set(e.search, "area_ids", t)
                            },
                            expression: "search.area_ids"
                        }
                    }, e._l(e.dict.areas, (function(e, t) {
                        return a("el-option", {
                            key: t,
                            attrs: {
                                value: t,
                                label: e
                            }
                        })
                    })), 1)], 1)])]), e._v(" "), a("el-col", {
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
                                return e.getList(1)
                            }
                        }
                    }, [e._v("查询")]), e._v(" "), a("el-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: function(t) {
                                return e.resetSearch()
                            }
                        }
                    }, [e._v("重置")])], 1)], 1), e._v(" "), a("div", {
                        staticClass: "header-tools"
                    }, [a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.getList(2)
                            }
                        }
                    }, [e._v("导出")])], 1), e._v(" "), a("el-row", {
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
                            "show-summary": !0,
                            "summary-method": e.getSummaries,
                            "max-height": e.getClientHeight(240),
                            border: ""
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            prop: "report_date",
                            label: "日期",
                            align: "center",
                            width: "120"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            label: "收发环节",
                            align: "center"
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            prop: "1receive_total",
                            label: "收货总数",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(e._s(e.outData(t.row.detail["1"], "receive_total")))]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "1deal_total",
                            label: "分配总数",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(e._s(e.outData(t.row.detail["1"], "deal_total")))]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "1no_deal_total",
                            label: "待分配数量",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("span", [e._v(e._s(e.outData(t.row.detail["1"], "no_deal_total")))])]
                            }
                        }])
                    })], 1), e._v(" "), a("el-table-column", {
                        attrs: {
                            label: "录入环节",
                            align: "center"
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            prop: "2effective_total",
                            label: "录入总数",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-deal",
                                            query: {
                                                node_id: "2",
                                                record_date: t.row.report_date,
                                                type: 0,
                                                area_ids: e.area_ids
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["2"], "effective_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "2no_deal_total",
                            label: "待录入数量",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("span", [e._v(e._s(e.outData(t.row.detail["2"], "no_deal_total")))])]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "2error_total",
                            label: "录入错误量",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-error",
                                            query: {
                                                node_id: "2",
                                                record_date: t.row.report_date,
                                                area_ids: e.area_ids
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["2"], "error_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "2abnormal_total",
                            label: "录入异常量",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(e._s(e.outData(t.row.detail["2"], "abnormal_total")))]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "2deal_average_time",
                            label: "录入平均时长",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(e._s(e.outData(t.row.detail["2"], "deal_average_time")))]
                            }
                        }])
                    })], 1), e._v(" "), a("el-table-column", {
                        attrs: {
                            label: "质检环节",
                            align: "center"
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            prop: "3deal_total",
                            label: "质检总数",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-deal",
                                            query: {
                                                node_id: "3",
                                                record_date: t.row.report_date,
                                                type: 1,
                                                area_ids: e.area_ids
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["3"], "deal_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "3no_deal_total",
                            label: "待质检总数",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("span", [e._v(e._s(e.outData(t.row.detail["3"], "no_deal_total")))])]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "3effective_total",
                            label: "合格总数",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-deal",
                                            query: {
                                                node_id: "3",
                                                record_date: t.row.report_date,
                                                type: 0,
                                                area_ids: e.area_ids
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["3"], "effective_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "3effective_rate",
                            label: "合格率",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(e._s(e.outData(t.row.detail["3"], "effective_total", "deal_total")))]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "3abnormal_total",
                            label: "不合格总数",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-exception",
                                            query: {
                                                node_id: "3",
                                                record_date: t.row.report_date,
                                                area_ids: e.area_ids
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["3"], "abnormal_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "3change_battery_total",
                            label: "换电池总数",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-deal",
                                            query: {
                                                node_id: "3",
                                                record_date: t.row.report_date,
                                                type: 2,
                                                area_ids: e.area_ids
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["3"], "change_battery_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "3error_total",
                            label: "质检错误量",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-error",
                                            query: {
                                                node_id: "3",
                                                record_date: t.row.report_date,
                                                area_ids: e.area_ids
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["3"], "error_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "3deal_average_time",
                            label: "质检平均时长",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("span", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["3"], "deal_average_time")))])]
                            }
                        }])
                    })], 1), e._v(" "), a("el-table-column", {
                        attrs: {
                            label: "复检环节",
                            align: "center"
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            prop: "4deal_total",
                            label: "复检总数",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-deal",
                                            query: {
                                                node_id: "4",
                                                record_date: t.row.report_date,
                                                type: 1,
                                                area_ids: e.area_ids
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["4"], "deal_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "4no_deal_total",
                            label: "待复检总数",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("span", [e._v(e._s(e.outData(t.row.detail["4"], "no_deal_total")))])]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "4effective_total",
                            label: "合格总数",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-deal",
                                            query: {
                                                node_id: "4",
                                                record_date: t.row.report_date,
                                                type: 0,
                                                area_ids: e.area_ids
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["4"], "effective_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "4effective_rate",
                            label: "合格率",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(e._s(e.outData(t.row.detail["4"], "effective_total", "deal_total")))]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "4abnormal_total",
                            label: "不合格量",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-exception",
                                            query: {
                                                node_id: "4",
                                                record_date: t.row.report_date,
                                                area_ids: e.area_ids
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["4"], "abnormal_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "4error_total",
                            label: "复检错误量",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-error",
                                            query: {
                                                node_id: "4",
                                                record_date: t.row.report_date,
                                                area_ids: e.area_ids
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["4"], "error_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "4deal_average_time",
                            label: "复检平均时长",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("span", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["4"], "deal_average_time")))])]
                            }
                        }])
                    })], 1), e._v(" "), a("el-table-column", {
                        attrs: {
                            label: "编辑环节",
                            align: "center"
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            prop: "5effective_total",
                            label: "编辑总数",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-deal",
                                            query: {
                                                node_id: "5",
                                                record_date: t.row.report_date,
                                                type: 0,
                                                area_ids: e.area_ids
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["5"], "effective_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "5no_deal_total",
                            label: "待编辑总数",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("span", [e._v(e._s(e.outData(t.row.detail["5"], "no_deal_total")))])]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "5error_total",
                            label: "编辑错误量",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-error",
                                            query: {
                                                node_id: "5",
                                                record_date: t.row.report_date,
                                                area_ids: e.area_ids
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["5"], "error_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "5abnormal_total",
                            label: "编辑异常量",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(e._s(e.outData(t.row.detail["5"], "abnormal_total")))]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "5deal_average_time",
                            label: "编辑平均时长",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(e._s(e.outData(t.row.detail["5"], "deal_average_time")))]
                            }
                        }])
                    })], 1), e._v(" "), a("el-table-column", {
                        attrs: {
                            label: "上架环节",
                            align: "center"
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            prop: "6effective_total",
                            label: "上架总数",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-deal",
                                            query: {
                                                node_id: "6",
                                                record_date: t.row.report_date,
                                                type: 0,
                                                area_ids: e.area_ids
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["6"], "effective_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "6no_deal_total",
                            label: "待上架总数",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("span", [e._v(e._s(e.outData(t.row.detail["6"], "no_deal_total")))])]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "6error_total",
                            label: "上架错误量",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-error",
                                            query: {
                                                node_id: "6",
                                                record_date: t.row.report_date,
                                                area_ids: e.area_ids
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["6"], "error_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "6abnormal_total",
                            label: "上架异常量",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(e._s(e.outData(t.row.detail["6"], "abnormal_total")))]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "6deal_average_time",
                            label: "上架平均时长",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(e._s(e.outData(t.row.detail["6"], "deal_average_time")))]
                            }
                        }])
                    })], 1), e._v(" "), a("el-table-column", {
                        attrs: {
                            label: "售后环节",
                            align: "center"
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            prop: "7check_fail_total",
                            label: "售后质检不合格",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-deal",
                                            query: {
                                                node_id: "7",
                                                record_date: t.row.report_date,
                                                type: 4,
                                                area_ids: e.area_ids
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["7"], "check_fail_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "7desc_fail_total",
                            label: "售后描述问题",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-deal",
                                            query: {
                                                node_id: "7",
                                                record_date: t.row.report_date,
                                                type: 5,
                                                area_ids: e.area_ids
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["7"], "desc_fail_total")))])], 1)]
                            }
                        }])
                    })], 1), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "detail.time_total",
                            label: "总平均时长（H）",
                            align: "center",
                            width: "120"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "detail.self_rate",
                            label: "24H上架周转率",
                            align: "center",
                            width: "120"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(e._s((100 * t.row.detail.self_rate).toFixed(2)) + "%")]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "detail.self_rate_36",
                            label: "36H上架周转率",
                            align: "center",
                            width: "120"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(e._s((100 * t.row.detail.self_rate_36).toFixed(2)) + "%")]
                            }
                        }])
                    })], 1)], 1)], 1)], 1)
                },
                l = [],
                i = a("4838"),
                s = a.n(i),
                u = a("c77f"),
                c = a("ed08");

            function d(e, t) {
                var a;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (a = _(e)) || t && e && "number" === typeof e.length) {
                        a && (e = a);
                        var r = 0,
                            n = function() {};
                        return {
                            s: n,
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
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, l = !0,
                    i = !1;
                return {
                    s: function() {
                        a = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = a.next();
                        return l = e.done, e
                    },
                    e: function(e) {
                        i = !0, o = e
                    },
                    f: function() {
                        try {
                            l || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                }
            }

            function _(e, t) {
                if (e) {
                    if ("string" === typeof e) return p(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? p(e, t) : void 0
                }
            }

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                return r
            }

            function f(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(a), !0).forEach((function(t) {
                        b(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : f(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function b(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function h(e, t, a, r, n, o, l) {
                try {
                    var i = e[o](l),
                        s = i.value
                } catch (u) {
                    return void a(u)
                }
                i.done ? t(s) : Promise.resolve(s).then(r, n)
            }

            function v(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(r, n) {
                        var o = e.apply(t, a);

                        function l(e) {
                            h(o, r, n, l, i, "next", e)
                        }

                        function i(e) {
                            h(o, r, n, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var y = {
                    name: "ReportGroupDateComponent",
                    data: function() {
                        return {
                            tableData: [],
                            search: {
                                record_date: ["", ""],
                                node_id: null,
                                area_ids: [],
                                page: 1
                            },
                            dict: {
                                nodes: [],
                                areas: []
                            },
                            loading: !1,
                            curDate: Object(c["b"])(0),
                            area_ids: []
                        }
                    },
                    mounted: function() {
                        var e = v(s.a.mark((function e() {
                            return s.a.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return this.$set(this.search, "record_date", [Object(c["b"])(-2) + " 00:00:00", Object(c["b"])(0) + " 23:59:59"]), e.next = 3, this.belongAreas();
                                    case 3:
                                        this.getList();
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
                    methods: {
                        getList: function() {
                            var e = v(s.a.mark((function e(t) {
                                var a, r, n, o, l, i;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, a = m({}, this.search), 1 == t ? this.search.page = 1 : 2 == t && (a.is_export = 1), this.loading = !0, e.next = 6, Object(u["f"])(a);
                                        case 6:
                                            if (r = e.sent, this.loading = !1, 2 != t) {
                                                n = [], o = d(r.data);
                                                try {
                                                    for (o.s(); !(l = o.n()).done;) i = l.value, n.push({
                                                        report_date: i.date,
                                                        detail: i.rows ? i.rows : {}
                                                    })
                                                } catch (s) {
                                                    o.e(s)
                                                } finally {
                                                    o.f()
                                                }
                                                this.tableData = n, this.area_ids = this.search.area_ids
                                            } else window.open(r.data);
                                            e.next = 14;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e["catch"](0), this.loading = !1;
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 11]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        resetSearch: function() {
                            this.search = {
                                record_date: [Object(c["b"])(-2) + " 00:00:00", Object(c["b"])(0) + " 23:59:59"],
                                node_id: null,
                                area_ids: [],
                                page: 1
                            }, this.getList()
                        },
                        outData: function(e, t, a) {
                            return a ? e ? 0 == e[t] || 0 == e[a] ? "0%" : Math.round(e[t] / e[a] * 100 * 100) / 100 + "%" : "0%" : e ? e[t] : "0"
                        },
                        getSummaries: function(e) {
                            var t = this,
                                a = e.columns,
                                r = e.data,
                                n = [];
                            return a.forEach((function(e, a) {
                                if (0 !== a) {
                                    var o = 0;
                                    if (e.property) {
                                        var l = e.property.substr(0, 1),
                                            i = e.property.substr(1);
                                        if ("effective_rate" == i) {
                                            var s = t.getColumnValue(r, l, "effective_total");
                                            o = 0 == s ? "0%" : Math.round(s / t.getColumnValue(r, l, "deal_total") * 100 * 100) / 100 + "%"
                                        } else o = t.getColumnValue(r, l, i);
                                        if ("effective_total" == i) o = t.getHrefTag({
                                            name: "report-deal",
                                            query: {
                                                node_id: l,
                                                area_ids: t.search.area_ids,
                                                record_date: t.search.record_date,
                                                type: 0
                                            }
                                        }, o);
                                        else if ("deal_total" != i || 3 != l && 4 != l) {
                                            if ("change_battery_total" == i) o = t.getHrefTag({
                                                name: "report-deal",
                                                query: {
                                                    node_id: l,
                                                    area_ids: t.search.area_ids,
                                                    record_date: t.search.record_date,
                                                    type: 2
                                                }
                                            }, o);
                                            else if ("error_total" == i) o = t.getHrefTag({
                                                name: "report-error",
                                                query: {
                                                    node_id: l,
                                                    area_ids: t.search.area_ids,
                                                    record_date: t.search.record_date
                                                }
                                            }, o);
                                            else if ("abnormal_total" == i) 3 != l && 4 != l || (o = t.getHrefTag({
                                                name: "report-exception",
                                                query: {
                                                    node_id: l,
                                                    area_ids: t.search.area_ids,
                                                    record_date: t.search.record_date
                                                }
                                            }, o));
                                            else if ("after_sale_check_unqualified" == i) o = t.getHrefTag({
                                                name: "report-deal",
                                                query: {
                                                    node_id: l,
                                                    area_ids: t.search.area_ids,
                                                    record_date: t.search.record_date,
                                                    type: 4
                                                }
                                            }, o);
                                            else if ("check_fail_total" == i) o = t.getHrefTag({
                                                name: "report-deal",
                                                query: {
                                                    node_id: l,
                                                    area_ids: t.search.area_ids,
                                                    record_date: t.search.record_date,
                                                    type: 4
                                                }
                                            }, o);
                                            else if ("desc_fail_total" == i) o = t.getHrefTag({
                                                name: "report-deal",
                                                query: {
                                                    node_id: l,
                                                    area_ids: t.search.area_ids,
                                                    record_date: t.search.record_date,
                                                    type: 5
                                                }
                                            }, o);
                                            else if ("deal_average_time" == i) o = t.getColumnAvg(r, l, i);
                                            else if ("detail.time_total" == e.property) o = t.getTopColumnAvg(r, "time_total");
                                            else if ("detail.self_rate" == e.property) o = (100 * t.getTopColumnAvg(r, "self_rate")).toFixed(2) + "%";
                                            else if ("detail.self_rate_36" == e.property) o = (100 * t.getTopColumnAvg(r, "self_rate_36")).toFixed(2) + "%";
                                            else if ("no_deal_total" == i)
                                                if (r.length > 0) {
                                                    var u = r[r.length - 1].detail[l + ""];
                                                    o = u ? u[i] : 0
                                                } else o = 0
                                        } else o = t.getHrefTag({
                                            name: "report-deal",
                                            query: {
                                                node_id: l,
                                                area_ids: t.search.area_ids,
                                                record_date: t.search.record_date,
                                                type: 1
                                            }
                                        }, o)
                                    }
                                    n[a] = o
                                } else n[a] = "总计（个数）"
                            })), n
                        },
                        getColumnValue: function(e, t, a) {
                            var r, n = 0,
                                o = d(e);
                            try {
                                for (o.s(); !(r = o.n()).done;) {
                                    var l = r.value;
                                    l.detail[t + ""] && l.detail[t + ""][a] && (n += Number(l.detail[t + ""][a]))
                                }
                            } catch (i) {
                                o.e(i)
                            } finally {
                                o.f()
                            }
                            return n
                        },
                        getColumnAvg: function(e, t, a) {
                            var r, n = 0,
                                o = d(e);
                            try {
                                for (o.s(); !(r = o.n()).done;) {
                                    var l = r.value;
                                    l.detail[t + ""] && l.detail[t + ""][a] && (n += Number(l.detail[t + ""][a]))
                                }
                            } catch (i) {
                                o.e(i)
                            } finally {
                                o.f()
                            }
                            return (n / e.length).toFixed(2)
                        },
                        getTopColumnAvg: function(e, t) {
                            var a, r = 0,
                                n = d(e);
                            try {
                                for (n.s(); !(a = n.n()).done;) {
                                    var o = a.value;
                                    o.detail[t] && (r += Number(o.detail[t]))
                                }
                            } catch (l) {
                                n.e(l)
                            } finally {
                                n.f()
                            }
                            return (r / e.length).toFixed(2)
                        },
                        getHrefTag: function(e, t) {
                            var a = this.$createElement;
                            return a("router-link", {
                                attrs: {
                                    to: e
                                }
                            }, [a("el-link", {
                                attrs: {
                                    type: "primary"
                                }
                            }, t)])
                        },
                        belongAreas: function() {
                            var e = v(s.a.mark((function e() {
                                var t, a;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(u["a"])();
                                        case 2:
                                            for (a in t = e.sent, this.dict.areas = t.data, this.dict.areas) this.search.area_ids.push(a);
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
                        }()
                    }
                },
                g = y,
                w = a("5d22"),
                k = Object(w["a"])(g, o, l, !1, null, "6d744aa6", null),
                O = k.exports,
                j = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "app-container"
                    }, [a("el-row", {
                        staticClass: "header-search"
                    }, [a("el-col", {
                        staticClass: "wrap",
                        attrs: {
                            span: 21
                        }
                    }, [a("div", {
                        staticClass: "same-width"
                    }, [a("div", {
                        staticClass: "search-item search-timer"
                    }, [a("el-date-picker", {
                        attrs: {
                            type: "datetimerange",
                            "range-separator": "-",
                            "start-placeholder": "上报时间",
                            "end-placeholder": "结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"]
                        },
                        model: {
                            value: e.search.record_date,
                            callback: function(t) {
                                e.$set(e.search, "record_date", t)
                            },
                            expression: "search.record_date"
                        }
                    })], 1), e._v(" "), a("div", {
                        staticClass: "search-item"
                    }, [a("Areas", {
                        model: {
                            value: e.search.area_ids,
                            callback: function(t) {
                                e.$set(e.search, "area_ids", t)
                            },
                            expression: "search.area_ids"
                        }
                    })], 1)])]), e._v(" "), a("el-col", {
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
                                return e.getList(1)
                            }
                        }
                    }, [e._v("查询")]), e._v(" "), a("el-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: function(t) {
                                return e.resetSearch()
                            }
                        }
                    }, [e._v("重置")])], 1)], 1), e._v(" "), a("div", {
                        staticClass: "header-tools"
                    }, [a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.getList(2)
                            }
                        }
                    }, [e._v("导出")])], 1), e._v(" "), a("el-row", {
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
                            "show-summary": !0,
                            "summary-method": e.getSummaries,
                            "max-height": e.getClientHeight(240),
                            border: ""
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            prop: "record_date",
                            label: "日期",
                            align: "center",
                            width: "180"
                        }
                    }, [
                        [e._v("\n            " + e._s(e.search.record_date[0]) + " -\n            "), a("br"), e._v("\n            " + e._s(e.search.record_date[1]) + "\n          ")]
                    ], 2), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "area_name",
                            label: "地区库",
                            align: "center"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "1_receive_total",
                            label: "收货总数",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(e._s(e.outData(t.row.detail["1"], "receive_total")))]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "2_effective_total",
                            label: "录入总数",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-deal",
                                            query: {
                                                node_id: "2",
                                                record_date: e.search.record_date,
                                                type: 0,
                                                area_ids: t.row.aid,
                                                area_name: t.row.area_name
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["2"], "effective_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "3_deal_total",
                            label: "质检总数",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-deal",
                                            query: {
                                                node_id: "3",
                                                record_date: e.search.record_date,
                                                type: 1,
                                                area_ids: t.row.aid,
                                                area_name: t.row.area_name
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["3"], "deal_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "3_effective_total",
                            label: "质检合格数",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-deal",
                                            query: {
                                                node_id: "3",
                                                record_date: e.search.record_date,
                                                type: 0,
                                                area_ids: t.row.aid,
                                                area_name: t.row.area_name
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["3"], "effective_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "3_effective_rate",
                            label: "质检合格率",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(e._s(e.outData(t.row.detail["3"], "effective_total", "deal_total")))]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "5_effective_total",
                            label: "编辑总数",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-deal",
                                            query: {
                                                node_id: "5",
                                                record_date: e.search.record_date,
                                                type: 0,
                                                area_ids: t.row.aid,
                                                area_name: t.row.area_name
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["5"], "effective_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "6_effective_total",
                            label: "上架总数",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-deal",
                                            query: {
                                                node_id: "6",
                                                record_date: e.search.record_date,
                                                type: 0,
                                                area_ids: t.row.aid,
                                                area_name: t.row.area_name
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["6"], "effective_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "7_check_fail_total",
                            label: "售后质检不合格数",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-deal",
                                            query: {
                                                node_id: "7",
                                                record_date: e.search.record_date,
                                                type: 4,
                                                area_ids: t.row.aid,
                                                area_name: t.row.area_name
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["7"], "check_fail_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "7_desc_fail_total",
                            label: "售后描述不合格数",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-deal",
                                            query: {
                                                node_id: "7",
                                                record_date: e.search.record_date,
                                                type: 5,
                                                area_ids: t.row.aid,
                                                area_name: t.row.area_name
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(e.outData(t.row.detail["7"], "desc_fail_total")))])], 1)]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "vu_num",
                            label: "上传视频数",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "report-deal",
                                            query: {
                                                record_date: e.search.record_date,
                                                type: 6,
                                                area_ids: t.row.aid,
                                                area_name: t.row.area_name
                                            }
                                        }
                                    }
                                }, [a("el-link", {
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [e._v(e._s(t.row.vu_num))])], 1)]
                            }
                        }])
                    })], 1)], 1)], 1)], 1)
                },
                S = [],
                D = a("2a67");

            function C(e, t) {
                var a;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (a = x(e)) || t && e && "number" === typeof e.length) {
                        a && (e = a);
                        var r = 0,
                            n = function() {};
                        return {
                            s: n,
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
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, l = !0,
                    i = !1;
                return {
                    s: function() {
                        a = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = a.next();
                        return l = e.done, e
                    },
                    e: function(e) {
                        i = !0, o = e
                    },
                    f: function() {
                        try {
                            l || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                }
            }

            function x(e, t) {
                if (e) {
                    if ("string" === typeof e) return q(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? q(e, t) : void 0
                }
            }

            function q(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                return r
            }

            function A(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? A(Object(a), !0).forEach((function(t) {
                        H(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : A(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function H(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function P(e, t, a, r, n, o, l) {
                try {
                    var i = e[o](l),
                        s = i.value
                } catch (u) {
                    return void a(u)
                }
                i.done ? t(s) : Promise.resolve(s).then(r, n)
            }

            function N(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(r, n) {
                        var o = e.apply(t, a);

                        function l(e) {
                            P(o, r, n, l, i, "next", e)
                        }

                        function i(e) {
                            P(o, r, n, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var E = {
                    name: "ReportGroupAreaComponent",
                    components: {
                        Areas: D["a"]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            search: {
                                record_date: ["", ""],
                                node_id: null,
                                area_ids: [],
                                page: 1
                            },
                            loading: !1,
                            curDate: Object(c["b"])(0),
                            area_ids: []
                        }
                    },
                    mounted: function() {
                        var e = N(s.a.mark((function e() {
                            return s.a.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        this.$set(this.search, "record_date", [Object(c["b"])(-2) + " 00:00:00", Object(c["b"])(0) + " 23:59:59"]), this.getList();
                                    case 2:
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
                    methods: {
                        getList: function() {
                            var e = N(s.a.mark((function e(t) {
                                var a, r;
                                return s.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, a = T({}, this.search), 1 == t ? this.search.page = 1 : 2 == t && (a.is_export = 1), this.loading = !0, e.next = 6, Object(u["e"])(a);
                                        case 6:
                                            r = e.sent, this.loading = !1, 2 != t ? (this.tableData = r.data, this.area_ids = this.search.area_ids) : window.open(r.data.download_url), e.next = 14;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e["catch"](0), this.loading = !1;
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 11]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        resetSearch: function() {
                            this.search = {
                                record_date: [Object(c["b"])(-2) + " 00:00:00", Object(c["b"])(0) + " 23:59:59"],
                                area_ids: [],
                                page: 1
                            }, this.getList()
                        },
                        outData: function(e, t, a) {
                            return a ? e ? 0 == e[t] || 0 == e[a] ? "0%" : Math.round(e[t] / e[a] * 100 * 100) / 100 + "%" : "0%" : e ? e[t] : "0"
                        },
                        getSummaries: function(e) {
                            var t = this,
                                a = e.columns,
                                r = e.data,
                                n = [];
                            return a.forEach((function(e, a) {
                                if (0 !== a)
                                    if (1 !== a) {
                                        var o = 0;
                                        if (e.property) {
                                            var l = parseInt(e.property.substr(0, 1)),
                                                i = e.property.substr(2);
                                            if (isNaN(l)) o = t.getColumnValue(r, 0, e.property);
                                            else if ("effective_rate" == i) {
                                                var s = t.getColumnValue(r, l, "effective_total");
                                                o = 0 == s ? "0%" : Math.round(s / t.getColumnValue(r, l, "deal_total") * 100 * 100) / 100 + "%"
                                            } else o = t.getColumnValue(r, l, i);
                                            "effective_total" == i ? o = t.getHrefTag(l, 0, o) : "deal_total" != i || 3 != l && 4 != l ? "check_fail_total" == i ? o = t.getHrefTag(l, 4, o) : "desc_fail_total" == i ? o = t.getHrefTag(l, 5, o) : "vu_num" == e.property && (o = t.getHrefTag(null, 6, o)) : o = t.getHrefTag(l, 1, o)
                                        }
                                        n[a] = o
                                    } else n[a] = "";
                                else n[a] = "总计（个数）"
                            })), n
                        },
                        getColumnValue: function(e, t, a) {
                            var r, n = 0,
                                o = C(e);
                            try {
                                for (o.s(); !(r = o.n()).done;) {
                                    var l = r.value;
                                    t > 0 ? l.detail[t + ""] && l.detail[t + ""][a] && (n += Number(l.detail[t + ""][a])) : l[a] && (n += Number(l[a]))
                                }
                            } catch (i) {
                                o.e(i)
                            } finally {
                                o.f()
                            }
                            return n
                        },
                        getColumnAvg: function(e, t, a) {
                            var r, n = 0,
                                o = C(e);
                            try {
                                for (o.s(); !(r = o.n()).done;) {
                                    var l = r.value;
                                    l.detail[t + ""] && l.detail[t + ""][a] && (n += Number(l.detail[t + ""][a]))
                                }
                            } catch (i) {
                                o.e(i)
                            } finally {
                                o.f()
                            }
                            return (n / e.length).toFixed(2)
                        },
                        getTopColumnAvg: function(e, t) {
                            var a, r = 0,
                                n = C(e);
                            try {
                                for (n.s(); !(a = n.n()).done;) {
                                    var o = a.value;
                                    o.detail[t] && (r += Number(o.detail[t]))
                                }
                            } catch (l) {
                                n.e(l)
                            } finally {
                                n.f()
                            }
                            return (r / e.length).toFixed(2)
                        },
                        getHrefTag: function(e, t, a) {
                            if (0 == parseInt(a)) return a;
                            var r = this.$createElement,
                                n = {
                                    name: "report-deal",
                                    query: {
                                        node_id: e,
                                        area_ids: this.search.area_ids,
                                        record_date: this.search.record_date,
                                        type: t
                                    }
                                };
                            return r("router-link", {
                                attrs: {
                                    to: n
                                }
                            }, [r("el-link", {
                                attrs: {
                                    type: "primary"
                                }
                            }, a)])
                        }
                    }
                },
                $ = E,
                M = Object(w["a"])($, j, S, !1, null, "3b758e01", null),
                L = M.exports,
                F = {
                    components: {
                        ReportGroupDateComponent: O,
                        ReportGroupAreaComponent: L
                    },
                    data: function() {
                        return {
                            activeName: "date",
                            tabComponent: O,
                            tabData: [{
                                label: "时间维度",
                                name: "date",
                                content: O
                            }, {
                                label: "站点维度",
                                name: "area",
                                content: L
                            }]
                        }
                    },
                    mounted: function() {},
                    methods: {
                        handleTabsChange: function(e, t) {
                            this.tabComponent = this.tabData[e.index].content
                        }
                    }
                },
                V = F,
                I = Object(w["a"])(V, r, n, !1, null, "67847006", null);
            t["default"] = I.exports
        },
        c77f: function(e, t, a) {
            "use strict";
            a.d(t, "f", (function() {
                return n
            })), a.d(t, "e", (function() {
                return o
            })), a.d(t, "a", (function() {
                return l
            })), a.d(t, "g", (function() {
                return i
            })), a.d(t, "c", (function() {
                return s
            })), a.d(t, "b", (function() {
                return u
            })), a.d(t, "d", (function() {
                return c
            }));
            var r = a("b775");

            function n(e) {
                return Object(r["a"])({
                    url: "/api/data_statistics/index",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(r["a"])({
                    url: "/api/data_statistics/area",
                    method: "get",
                    params: e
                })
            }

            function l(e) {
                return Object(r["a"])({
                    url: "/api/data_statistics/belong_areas",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(r["a"])({
                    url: "/api/data_statistics/set_line_config",
                    method: "post",
                    params: e
                })
            }

            function s(e) {
                return Object(r["a"])({
                    url: "/api/data_statistics/get_line_hour",
                    method: "get",
                    params: e
                })
            }

            function u(e) {
                return Object(r["a"])({
                    url: "/api/data_statistics/get_line_day",
                    method: "get",
                    params: e
                })
            }

            function c(e) {
                return Object(r["a"])({
                    url: "/api/data_statistics/get_line_person",
                    method: "get",
                    params: e
                })
            }
        },
        ed08: function(e, t, a) {
            "use strict";

            function r(e) {
                var t = new Date,
                    a = t.getTime() + 864e5 * e;
                t.setTime(a);
                var r = t.getFullYear(),
                    o = t.getMonth(),
                    l = t.getDate();
                return o = n(o + 1), l = n(l), r + "-" + o + "-" + l
            }

            function n(e) {
                var t = e;
                return 1 == e.toString().length && (t = "0" + e), t
            }

            function o(e) {
                var t = e.split(","),
                    a = t[0].match(/:(.*?);/)[1],
                    r = atob(t[1]),
                    n = r.length,
                    o = new Uint8Array(n);
                while (n--) o[n] = r.charCodeAt(n);
                return new Blob([o], {
                    type: a
                })
            }
            a.d(t, "b", (function() {
                return r
            })), a.d(t, "a", (function() {
                return o
            }))
        }
    }
]);