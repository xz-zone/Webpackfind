(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-e1d3d342"], {
        1580: function(e, t, r) {},
        2934: function(e, t, r) {
            "use strict";
            r.d(t, "p", (function() {
                return n
            })), r.d(t, "d", (function() {
                return s
            })), r.d(t, "i", (function() {
                return i
            })), r.d(t, "m", (function() {
                return c
            })), r.d(t, "b", (function() {
                return o
            })), r.d(t, "g", (function() {
                return u
            })), r.d(t, "k", (function() {
                return l
            })), r.d(t, "j", (function() {
                return p
            })), r.d(t, "h", (function() {
                return h
            })), r.d(t, "n", (function() {
                return d
            })), r.d(t, "a", (function() {
                return f
            })), r.d(t, "l", (function() {
                return m
            })), r.d(t, "q", (function() {
                return v
            })), r.d(t, "f", (function() {
                return b
            })), r.d(t, "o", (function() {
                return _
            })), r.d(t, "c", (function() {
                return y
            })), r.d(t, "e", (function() {
                return g
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

            function c(e) {
                return Object(a["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(a["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: e
                })
            }

            function u(e) {
                return Object(a["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: e
                })
            }

            function l(e) {
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

            function h(e) {
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

            function f(e) {
                return Object(a["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: e
                })
            }

            function m(e) {
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

            function _(e) {
                return Object(a["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: e
                })
            }

            function y(e) {
                return Object(a["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: e
                })
            }

            function g(e) {
                return Object(a["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: e
                })
            }
        },
        5771: function(e, t, r) {
            "use strict";
            r.r(t);
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "app-container"
                    }, [r("el-tabs", {
                        model: {
                            value: e.activeTab,
                            callback: function(t) {
                                e.activeTab = t
                            },
                            expression: "activeTab"
                        }
                    }, [r("el-tab-pane", {
                        attrs: {
                            label: "入库",
                            name: "0"
                        }
                    }, [r("listComponent", {
                        attrs: {
                            "is-out-of": 0
                        }
                    })], 1), e._v(" "), r("el-tab-pane", {
                        attrs: {
                            label: "出库",
                            name: "1",
                            lazy: !0
                        }
                    }, [r("listComponent", {
                        attrs: {
                            "is-out-of": 1
                        }
                    })], 1)], 1)], 1)
                },
                n = [],
                s = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "list-component"
                    }, [r("el-row", {
                        staticClass: "header-search"
                    }, [r("el-col", {
                        staticClass: "wrap",
                        attrs: {
                            span: 21
                        }
                    }, [r("div", {
                        staticClass: "same-width"
                    }, [r("div", {
                        staticClass: "search-item search-timer"
                    }, [r("el-date-picker", {
                        attrs: {
                            type: "datetimerange",
                            "range-separator": "-",
                            "start-placeholder": "申请时间",
                            "end-placeholder": "结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"]
                        },
                        model: {
                            value: e.search.applyTime,
                            callback: function(t) {
                                e.$set(e.search, "applyTime", t)
                            },
                            expression: "search.applyTime"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item search-timer"
                    }, [r("el-date-picker", {
                        attrs: {
                            type: "datetimerange",
                            "range-separator": "-",
                            "start-placeholder": "审核时间",
                            "end-placeholder": "结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"]
                        },
                        model: {
                            value: e.search.checkTime,
                            callback: function(t) {
                                e.$set(e.search, "checkTime", t)
                            },
                            expression: "search.checkTime"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-input", {
                        attrs: {
                            placeholder: "调拨单号"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getList(1)
                            }
                        },
                        model: {
                            value: e.search.sn,
                            callback: function(t) {
                                e.$set(e.search, "sn", t)
                            },
                            expression: "search.sn"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-input", {
                        attrs: {
                            placeholder: "收货单号"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getList(1)
                            }
                        },
                        model: {
                            value: e.search.receive_order_no,
                            callback: function(t) {
                                e.$set(e.search, "receive_order_no", t)
                            },
                            expression: "search.receive_order_no"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "调拨类型"
                        },
                        model: {
                            value: e.search.type,
                            callback: function(t) {
                                e.$set(e.search, "type", t)
                            },
                            expression: "search.type"
                        }
                    }, e._l(e.dict.types, (function(t, a) {
                        return r("el-option", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: 0 == e.isOutOf && 3 != a || 1 == e.isOutOf && 1 != a,
                                expression: "\n                (isOutOf == 0 && key != 3) || (isOutOf == 1 && key != 1)\n              "
                            }],
                            key: a,
                            attrs: {
                                label: t,
                                value: a
                            }
                        })
                    })), 1)], 1), e._v(" "), 0 == e.search.isOutOf ? r("div", {
                        staticClass: "search-item"
                    }, [r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "源仓库"
                        },
                        model: {
                            value: e.search.srcWarehouse,
                            callback: function(t) {
                                e.$set(e.search, "srcWarehouse", t)
                            },
                            expression: "search.srcWarehouse"
                        }
                    }, e._l(e.dict.warehouse, (function(e, t) {
                        return r("el-option", {
                            key: t,
                            attrs: {
                                label: e.name,
                                value: e.id
                            }
                        })
                    })), 1)], 1) : e._e(), e._v(" "), 1 == e.search.isOutOf ? r("div", {
                        staticClass: "search-item"
                    }, [r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "目标仓库"
                        },
                        model: {
                            value: e.search.dstWarehouse,
                            callback: function(t) {
                                e.$set(e.search, "dstWarehouse", t)
                            },
                            expression: "search.dstWarehouse"
                        }
                    }, e._l(e.dict.warehouse, (function(e, t) {
                        return r("el-option", {
                            key: t,
                            attrs: {
                                label: e.name,
                                value: e.id
                            }
                        })
                    })), 1)], 1) : e._e(), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("UserList", {
                        attrs: {
                            placeholder: "申请人"
                        },
                        model: {
                            value: e.search.applyUserId,
                            callback: function(t) {
                                e.$set(e.search, "applyUserId", t)
                            },
                            expression: "search.applyUserId"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("UserList", {
                        attrs: {
                            placeholder: "审核人"
                        },
                        model: {
                            value: e.search.checkUserId,
                            callback: function(t) {
                                e.$set(e.search, "checkUserId", t)
                            },
                            expression: "search.checkUserId"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "状态"
                        },
                        model: {
                            value: e.search.status,
                            callback: function(t) {
                                e.$set(e.search, "status", t)
                            },
                            expression: "search.status"
                        }
                    }, e._l(e.dict.status, (function(e, t) {
                        return r("el-option", {
                            key: t,
                            attrs: {
                                label: e,
                                value: t
                            }
                        })
                    })), 1)], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("ImeiSearch", {
                        on: {
                            done: function(t) {
                                return e.getList(1)
                            }
                        },
                        model: {
                            value: e.search.imei,
                            callback: function(t) {
                                e.$set(e.search, "imei", t)
                            },
                            expression: "search.imei"
                        }
                    })], 1)])]), e._v(" "), r("el-col", {
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
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 1 == e.search.isOutOf,
                            expression: "search.isOutOf == 1"
                        }],
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.$router.push({
                                    name: "distribution-out"
                                })
                            }
                        }
                    }, [e._v("调拨出库")])], 1)]), e._v(" "), r("el-row", {
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
                            "max-height": e.getClientHeight(340),
                            border: ""
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            type: "index",
                            label: "序号",
                            align: "center",
                            width: "80"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "src_warehouse_name",
                            label: "源仓库",
                            width: "100",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "dst_warehouse_name",
                            label: "目标仓库",
                            width: "100",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "move_batch_no",
                            label: "调拨单号",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "调拨类型",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("div", {
                                    class: {
                                        "color-success": 0 == t.row.type, "color-warning": 1 == t.row.type
                                    }
                                }, [e._v(e._s(t.row.type_name))])]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "num",
                            label: "数量",
                            align: "center",
                            width: "80"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "操作人",
                            "header-align": "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.apply_user_name_new ? r("div", [e._v("申请：" + e._s(t.row.apply_user_name_new))]) : e._e(), e._v(" "), t.row.check_user_name_new ? r("div", [e._v("审核：" + e._s(t.row.check_user_name_new))]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "时间",
                            "header-align": "center",
                            width: "200"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.apply_time ? r("div", [e._v("申请：" + e._s(t.row.apply_time))]) : e._e(), e._v(" "), t.row.check_time ? r("div", [e._v("审核：" + e._s(t.row.check_time))]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "状态",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("el-tag", {
                                    attrs: {
                                        type: 1 == t.row.status ? "warning" : 2 == t.row.status ? "success" : 3 == t.row.status ? "danger" : ""
                                    }
                                }, [e._v(e._s(t.row.status_name))])]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "address",
                            label: "操作",
                            "header-align": "center",
                            width: "240"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("router-link", {
                                    attrs: {
                                        to: {
                                            name: "distribution-detail",
                                            query: {
                                                id: t.row.id
                                            }
                                        },
                                        target: "_blank"
                                    }
                                }, [r("el-button", {
                                    attrs: {
                                        size: "mini",
                                        type: "primary"
                                    }
                                }, [e._v("查看")])], 1), e._v(" "), 1 == t.row.status && 0 == e.search.isOutOf ? r("el-button", {
                                    attrs: {
                                        size: "mini",
                                        type: "success"
                                    },
                                    on: {
                                        click: function(r) {
                                            return e.agree(t.row.id, t.row.move_batch_no)
                                        }
                                    }
                                }, [e._v("同意")]) : e._e(), e._v(" "), 1 == t.row.status && 0 == e.search.isOutOf ? r("el-button", {
                                    attrs: {
                                        size: "mini",
                                        type: "danger"
                                    },
                                    on: {
                                        click: function(r) {
                                            return e.cancel(t.row.id, t.row.move_batch_no)
                                        }
                                    }
                                }, [e._v("拒绝")]) : e._e(), e._v(" "), 1 == t.row.status && 1 == e.search.isOutOf ? r("el-button", {
                                    attrs: {
                                        size: "mini",
                                        type: "danger"
                                    },
                                    on: {
                                        click: function(r) {
                                            return e.cancel(t.row.id, t.row.move_batch_no)
                                        }
                                    }
                                }, [e._v("取消申请")]) : e._e(), e._v(" "), 1 == e.search.isOutOf ? r("el-button", {
                                    directives: [{
                                        name: "print",
                                        rawName: "v-print",
                                        value: "#barcode-container",
                                        expression: "'#barcode-container'"
                                    }],
                                    attrs: {
                                        size: "mini",
                                        type: "warning"
                                    },
                                    on: {
                                        click: function(r) {
                                            return e.printImei(t.row)
                                        }
                                    }
                                }, [e._v("打印")]) : e._e()]
                            }
                        }])
                    })], 1)], 1)], 1), e._v(" "), r("div", {
                        staticClass: "footer-pagination"
                    }, [r("el-pagination", {
                        attrs: {
                            background: "",
                            layout: "total, prev, pager, next, jumper",
                            total: e.total,
                            "current-page": e.search.page,
                            "page-size": 10
                        },
                        on: {
                            "update:currentPage": function(t) {
                                return e.$set(e.search, "page", t)
                            },
                            "update:current-page": function(t) {
                                return e.$set(e.search, "page", t)
                            },
                            "current-change": function(t) {
                                return e.getList()
                            }
                        }
                    })], 1), e._v(" "), 1 == e.search.isOutOf ? r("Barcode", {
                        attrs: {
                            id: "barcode-container",
                            data: e.barcodeInfo
                        }
                    }) : e._e()], 1)
                },
                i = [],
                c = r("4838"),
                o = r.n(c),
                u = r("ea45"),
                l = r("2934"),
                p = r("6d8f"),
                h = r("c35b"),
                d = r("246e");

            function f(e, t) {
                var r;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = m(e)) || t && e && "number" === typeof e.length) {
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
                    c = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        c = !0, s = e
                    },
                    f: function() {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (c) throw s
                        }
                    }
                }
            }

            function m(e, t) {
                if (e) {
                    if ("string" === typeof e) return v(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? v(e, t) : void 0
                }
            }

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                return a
            }

            function b(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(r), !0).forEach((function(t) {
                        y(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function y(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function g(e, t, r, a, n, s, i) {
                try {
                    var c = e[s](i),
                        o = c.value
                } catch (u) {
                    return void r(u)
                }
                c.done ? t(o) : Promise.resolve(o).then(a, n)
            }

            function w(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(a, n) {
                        var s = e.apply(t, r);

                        function i(e) {
                            g(s, a, n, i, c, "next", e)
                        }

                        function c(e) {
                            g(s, a, n, i, c, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var O = {
                    name: "InOutListComponent",
                    components: {
                        Barcode: p["a"],
                        UserList: h["a"],
                        ImeiSearch: d["a"]
                    },
                    props: {
                        isOutOf: {
                            type: Number,
                            default: 0
                        }
                    },
                    data: function() {
                        return {
                            tableData: [],
                            search: {
                                isOutOf: this.isOutOf,
                                applyTime: [],
                                checkTime: [],
                                sn: null,
                                type: null,
                                srcWarehouse: null,
                                dstWarehouse: null,
                                applyUserId: [],
                                checkUserId: [],
                                status: null,
                                receive_order_no: null,
                                imei: null,
                                page: 1
                            },
                            total: 0,
                            dict: {
                                types: [],
                                warehouse: [],
                                applyUser: [],
                                checkUser: [],
                                status: []
                            },
                            loading: !1,
                            barcodeInfo: [],
                            oldSearch: {
                                imei: null
                            }
                        }
                    },
                    mounted: function() {
                        this.getList(), this.getTypes(), this.getWarehouseList(), this.getStatus()
                    },
                    methods: {
                        getList: function() {
                            var e = w(o.a.mark((function e(t) {
                                var r, a;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t && (this.search.page = 1), this.loading = !0, r = JSON.parse(JSON.stringify(this.search)), e.next = 5, Object(u["e"])(r);
                                        case 5:
                                            a = e.sent, this.loading = !1, this.tableData = a.data.data, this.total = a.data.total, this.oldSearch.imei = _({}, this.search).imei, this.search.imei = null;
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
                            this.search.applyTime = [], this.search.checkTime = [], this.search.sn = null, this.search.type = null, this.search.srcWarehouse = null, this.search.dstWarehouse = null, this.search.applyUserId = [], this.search.checkUserId = [], this.search.status = null, this.search.imei = null, this.search.receive_order_no = null, this.page = 1, this.getList()
                        },
                        getTypes: function() {
                            var e = w(o.a.mark((function e() {
                                var t;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(u["h"])();
                                        case 2:
                                            t = e.sent, this.dict.types = t.data;
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
                        getWarehouseList: function() {
                            var e = w(o.a.mark((function e() {
                                var t;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(u["i"])();
                                        case 2:
                                            t = e.sent, this.dict.warehouse = t.data;
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
                        getApplyUserList: function() {
                            var e = w(o.a.mark((function e() {
                                var t;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(l["b"])();
                                        case 2:
                                            t = e.sent, this.dict.applyUser = this.formatUserList(t.data);
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
                        getCheckUserList: function() {
                            var e = w(o.a.mark((function e() {
                                var t;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(l["g"])();
                                        case 2:
                                            t = e.sent, this.dict.checkUser = this.formatUserList(t.data);
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
                        formatUserList: function(e) {
                            var t, r = f(e);
                            try {
                                for (r.s(); !(t = r.n()).done;) {
                                    var a = t.value;
                                    a.children = this.formatUserList(a.children), a.children = a.children.concat(a.users)
                                }
                            } catch (n) {
                                r.e(n)
                            } finally {
                                r.f()
                            }
                            return e
                        },
                        getStatus: function() {
                            var e = w(o.a.mark((function e() {
                                var t;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(u["g"])();
                                        case 2:
                                            t = e.sent, this.dict.status = t.data;
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
                        refuse: function() {
                            var e = w(o.a.mark((function e(t, r) {
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.$confirm("确定拒绝【".concat(r, "】？"), "提示", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 3:
                                            return this.loading = !0, e.next = 6, Object(u["k"])({
                                                id: t
                                            });
                                        case 6:
                                            this.loading = !1, this.$message.success("操作成功！"), this.getList(), e.next = 14;
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

                            function t(t, r) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        cancel: function() {
                            var e = w(o.a.mark((function e(t, r) {
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.$confirm("确定取消【".concat(r, "】？"), "提示", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 3:
                                            return this.loading = !0, e.next = 6, Object(u["c"])({
                                                id: t
                                            });
                                        case 6:
                                            this.loading = !1, this.$message.success("操作成功！"), this.getList(), e.next = 14;
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

                            function t(t, r) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        agree: function() {
                            var e = w(o.a.mark((function e(t, r) {
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.$confirm("确定同意【".concat(r, "】？"), "提示", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 3:
                                            return this.loading = !0, e.next = 6, Object(u["b"])({
                                                id: t
                                            });
                                        case 6:
                                            this.loading = !1, this.$message.success("操作成功！"), this.getList(), e.next = 14;
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

                            function t(t, r) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        printImei: function(e) {
                            this.barcodeInfo = [{
                                title: "".concat(e.src_area_name, "-").concat(e.src_warehouse_name, "---\x3e").concat(e.dst_area_name, "-").concat(e.dst_warehouse_name, "<br/>（").concat(e.num, "台）"),
                                code: e.move_batch_no
                            }]
                        }
                    }
                },
                k = O,
                j = r("5d22"),
                x = Object(j["a"])(k, s, i, !1, null, "196fba74", null),
                C = x.exports,
                L = {
                    name: "DistributionInOut",
                    components: {
                        ListComponent: C
                    },
                    data: function() {
                        return {
                            activeTab: 0
                        }
                    },
                    mounted: function() {},
                    methods: {}
                },
                U = L,
                S = (r("fea7"), Object(j["a"])(U, a, n, !1, null, "1217c3d4", null));
            t["default"] = S.exports
        },
        ea45: function(e, t, r) {
            "use strict";
            r.d(t, "e", (function() {
                return n
            })), r.d(t, "h", (function() {
                return s
            })), r.d(t, "i", (function() {
                return i
            })), r.d(t, "g", (function() {
                return c
            })), r.d(t, "k", (function() {
                return o
            })), r.d(t, "c", (function() {
                return u
            })), r.d(t, "d", (function() {
                return l
            })), r.d(t, "f", (function() {
                return p
            })), r.d(t, "b", (function() {
                return h
            })), r.d(t, "j", (function() {
                return d
            })), r.d(t, "a", (function() {
                return f
            }));
            var a = r("b775");

            function n(e) {
                return Object(a["a"])({
                    url: "/api/switch/orders",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(a["a"])({
                    url: "/api/switch/types",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(a["a"])({
                    url: "/api/switch/warehouse_list",
                    method: "get",
                    params: e
                })
            }

            function c(e) {
                return Object(a["a"])({
                    url: "/api/switch/status",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(a["a"])({
                    url: "/api/switch/refuse",
                    method: "post",
                    data: e
                })
            }

            function u(e) {
                return Object(a["a"])({
                    url: "/api/switch/cancel",
                    method: "post",
                    data: e
                })
            }

            function l(e) {
                return Object(a["a"])({
                    url: "/api/switch/detail",
                    method: "get",
                    params: e
                })
            }

            function p(e) {
                return Object(a["a"])({
                    url: "/api/switch/product_list",
                    method: "get",
                    params: e
                })
            }

            function h(e) {
                return Object(a["a"])({
                    url: "/api/switch/agree",
                    method: "post",
                    data: e
                })
            }

            function d(e) {
                return Object(a["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: e
                })
            }

            function f(e) {
                return Object(a["a"])({
                    url: "/api/switch/store_out_of_warehouse",
                    method: "post",
                    data: e
                })
            }
        },
        fea7: function(e, t, r) {
            "use strict";
            r("1580")
        }
    }
]);