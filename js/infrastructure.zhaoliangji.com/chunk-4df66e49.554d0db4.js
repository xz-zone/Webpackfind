(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-4df66e49"], {
        2934: function(t, e, r) {
            "use strict";
            r.d(e, "p", (function() {
                return n
            })), r.d(e, "d", (function() {
                return o
            })), r.d(e, "i", (function() {
                return s
            })), r.d(e, "m", (function() {
                return i
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
                return f
            })), r.d(e, "l", (function() {
                return h
            })), r.d(e, "q", (function() {
                return m
            })), r.d(e, "f", (function() {
                return b
            })), r.d(e, "o", (function() {
                return v
            })), r.d(e, "c", (function() {
                return g
            })), r.d(e, "e", (function() {
                return w
            }));
            var a = r("b775");

            function n(t) {
                return Object(a["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(a["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(a["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(a["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(a["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(a["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: t
                })
            }

            function l(t) {
                return Object(a["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(a["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(a["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: t
                })
            }

            function _(t) {
                return Object(a["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: t
                })
            }

            function f(t) {
                return Object(a["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: t
                })
            }

            function h(t) {
                return Object(a["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: t
                })
            }

            function m(t) {
                return Object(a["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: t
                })
            }

            function b(t) {
                return Object(a["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: t
                })
            }

            function v(t) {
                return Object(a["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: t
                })
            }

            function g(t) {
                return Object(a["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: t
                })
            }

            function w(t) {
                return Object(a["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: t
                })
            }
        },
        a7f1: function(t, e, r) {
            "use strict";
            r.r(e);
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "app-container"
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
                            "start-placeholder": "分配时间",
                            "end-placeholder": "结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"]
                        },
                        model: {
                            value: t.search.assign_at,
                            callback: function(e) {
                                t.$set(t.search, "assign_at", e)
                            },
                            expression: "search.assign_at"
                        }
                    })], 1), t._v(" "), r("div", {
                        staticClass: "search-item search-timer"
                    }, [r("el-date-picker", {
                        attrs: {
                            type: "datetimerange",
                            "range-separator": "-",
                            "start-placeholder": "查收时间",
                            "end-placeholder": "结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"]
                        },
                        model: {
                            value: t.search.receive_at,
                            callback: function(e) {
                                t.$set(t.search, "receive_at", e)
                            },
                            expression: "search.receive_at"
                        }
                    })], 1), t._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-input", {
                        attrs: {
                            placeholder: "流转单号"
                        },
                        nativeOn: {
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.getList(1)
                            }
                        },
                        model: {
                            value: t.search.transfer_order_no,
                            callback: function(e) {
                                t.$set(t.search, "transfer_order_no", e)
                            },
                            expression: "search.transfer_order_no"
                        }
                    })], 1), t._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "处理结果"
                        },
                        model: {
                            value: t.search.status,
                            callback: function(e) {
                                t.$set(t.search, "status", e)
                            },
                            expression: "search.status"
                        }
                    }, [r("el-option", {
                        attrs: {
                            value: "0",
                            label: "未处理"
                        }
                    }), t._v(" "), r("el-option", {
                        attrs: {
                            value: "1",
                            label: "部分处理"
                        }
                    }), t._v(" "), r("el-option", {
                        attrs: {
                            value: "2",
                            label: "已处理"
                        }
                    })], 1)], 1), t._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("userList", {
                        attrs: {
                            placeholder: "分配人"
                        },
                        model: {
                            value: t.search.assign_user_ids,
                            callback: function(e) {
                                t.$set(t.search, "assign_user_ids", e)
                            },
                            expression: "search.assign_user_ids"
                        }
                    })], 1)]), t._v(" "), r("el-col", {
                        staticClass: "operat-btn",
                        attrs: {
                            span: 3
                        }
                    }, [r("el-button", {
                        attrs: {
                            type: "warning"
                        },
                        on: {
                            click: function(e) {
                                return t.getList(1)
                            }
                        }
                    }, [t._v("查询")]), t._v(" "), r("el-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: t.hanleClickReset
                        }
                    }, [t._v("重置")])], 1)], 1), t._v(" "), r("div", {
                        staticClass: "header-tools"
                    }, [r("div", [r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.$router.push({
                                    name: "putaway-scanner"
                                })
                            }
                        }
                    }, [t._v("扫描上架")]), t._v(" "), r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.handleExportReport
                        }
                    }, [t._v("导出报表")]), t._v(" "), r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.$router.push({
                                    name: "distribution-list"
                                })
                            }
                        }
                    }, [t._v("出入库申请")])], 1), t._v(" "), r("div", [r("el-tag", {
                        attrs: {
                            type: "warning"
                        }
                    }, [t._v("已勾选：" + t._s(t.selectNum))]), t._v(" "), r("el-tag", {
                        attrs: {
                            type: "warning"
                        }
                    }, [t._v("总数量：" + t._s(t.total_goods_num))])], 1)]), t._v(" "), r("el-row", {
                        staticClass: "body-list"
                    }, [r("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [r("el-table", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: t.loading,
                            expression: "loading"
                        }],
                        attrs: {
                            data: t.tableData,
                            "max-height": t.getClientHeight(280),
                            border: ""
                        },
                        on: {
                            "selection-change": t.handleSelectionChange
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            type: "selection",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            type: "index",
                            label: "序号",
                            align: "center",
                            width: "80"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "流转单号",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [r("router-link", {
                                    attrs: {
                                        to: {
                                            name: "putaway-receive-detail",
                                            query: {
                                                id: e.row.id
                                            }
                                        }
                                    }
                                }, [r("span", {
                                    staticClass: "view"
                                }, [t._v(t._s(e.row.transfer_order_no))])])]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "商品总数量/总金额",
                            width: "150",
                            "header-align": "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [r("div", [t._v("数量：" + t._s(e.row.total_num))]), t._v(" "), r("div", [t._v("金额：" + t._s(e.row.total_cost))])]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "流转步骤",
                            width: "150",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v("\n            " + t._s(e.row.source_node.name) + " ---\x3e\n            " + t._s(e.row.to_node.name) + "\n          ")]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "处理数量",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v(t._s(e.row.deal_num))]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "abnormal_num",
                            label: "异常数量",
                            align: "center",
                            width: "100"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "address",
                            label: "操作人",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [e.row.assign_user ? r("div", [t._v("\n              分配人：" + t._s(e.row.assign_user.department_name) + "--" + t._s(e.row.assign_user.real_name) + "\n            ")]) : t._e(), t._v(" "), e.row.receive_user ? r("div", [t._v("\n              查收人：" + t._s(e.row.receive_user.department_name) + "--" + t._s(e.row.receive_user.real_name) + "\n            ")]) : t._e()]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "assign_at",
                            label: "分配时间",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "处理结果",
                            align: "center",
                            width: "80"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [r("span", {
                                    class: {
                                        "color-success": 2 == e.row.status, "color-warning": 1 == e.row.status, "color-danger": 0 == e.row.status
                                    }
                                }, [t._v(t._s(e.row.status_description))])]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "address",
                            label: "操作",
                            align: "center",
                            width: "300"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [r("router-link", {
                                    attrs: {
                                        to: {
                                            name: "putaway-receive-detail",
                                            query: {
                                                id: e.row.id
                                            }
                                        },
                                        target: "_blank"
                                    }
                                }, [r("el-button", {
                                    attrs: {
                                        type: "primary",
                                        size: "mini"
                                    }
                                }, [t._v("查看")])], 1), t._v(" "), 2 != e.row.status ? r("router-link", {
                                    attrs: {
                                        to: {
                                            name: "putaway-search-list",
                                            query: {
                                                no: e.row.transfer_order_no
                                            }
                                        },
                                        target: "_blank"
                                    }
                                }, [r("el-button", {
                                    attrs: {
                                        type: "danger",
                                        size: "mini"
                                    }
                                }, [t._v("上架审核")])], 1) : t._e(), t._v(" "), 2 == e.row.status ? r("el-button", {
                                    attrs: {
                                        type: "success",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return t.createOrder(e.row)
                                        }
                                    }
                                }, [t._v("生成调拨单")]) : t._e(), t._v(" "), r("el-button", {
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
                                    ref: "printBarcode",
                                    attrs: {
                                        type: "primary"
                                    }
                                }, [t._v("打标")])]
                            }
                        }])
                    })], 1)], 1)], 1), t._v(" "), r("div", {
                        staticClass: "footer-pagination"
                    }, [r("el-pagination", {
                        attrs: {
                            background: "",
                            layout: "total, prev, pager, next, jumper",
                            total: t.total,
                            "current-page": t.search.page,
                            "page-size": t.search.page_size
                        },
                        on: {
                            "update:currentPage": function(e) {
                                return t.$set(t.search, "page", e)
                            },
                            "update:current-page": function(e) {
                                return t.$set(t.search, "page", e)
                            },
                            "update:pageSize": function(e) {
                                return t.$set(t.search, "page_size", e)
                            },
                            "update:page-size": function(e) {
                                return t.$set(t.search, "page_size", e)
                            },
                            "current-change": function(e) {
                                return t.getList()
                            }
                        }
                    })], 1), t._v(" "), r("Barcode", {
                        attrs: {
                            id: "barcode-container",
                            data: t.barcodeInfo
                        }
                    }), t._v(" "), r("el-dialog", {
                        attrs: {
                            title: "未合包明细",
                            visible: t.showMergeDialog
                        },
                        on: {
                            "update:visible": function(e) {
                                t.showMergeDialog = e
                            }
                        }
                    }, [r("div", {
                        staticStyle: {
                            color: "red",
                            "font-size": "18px",
                            "margin-bottom": "10px"
                        }
                    }, [t._v("该流转单未完成合包无法调拨，请合包完成后进行调拨")]), t._v(" "), r("el-table", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            data: t.mergeData
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            label: "序号",
                            type: "index",
                            width: "60"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "质检码",
                            prop: "qc_code"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "imei",
                            prop: "tag"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "商品信息",
                            prop: "product_name"
                        }
                    })], 1)], 1)], 1)
                },
                n = [],
                o = r("4838"),
                s = r.n(o),
                i = r("b8aa"),
                c = r("ea45"),
                u = r("c35b"),
                l = r("6d8f");

            function d(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(r), !0).forEach((function(e) {
                        _(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function _(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function f(t, e, r, a, n, o, s) {
                try {
                    var i = t[o](s),
                        c = i.value
                } catch (u) {
                    return void r(u)
                }
                i.done ? e(c) : Promise.resolve(c).then(a, n)
            }

            function h(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(a, n) {
                        var o = t.apply(e, r);

                        function s(t) {
                            f(o, a, n, s, i, "next", t)
                        }

                        function i(t) {
                            f(o, a, n, s, i, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }

            function m(t, e) {
                var r;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (r = b(t)) || e && t && "number" === typeof t.length) {
                        r && (t = r);
                        var a = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return a >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[a++]
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
                var o, s = !0,
                    i = !1;
                return {
                    s: function() {
                        r = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = r.next();
                        return s = t.done, t
                    },
                    e: function(t) {
                        i = !0, o = t
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

            function b(t, e) {
                if (t) {
                    if ("string" === typeof t) return v(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? v(t, e) : void 0
                }
            }

            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, a = new Array(e); r < e; r++) a[r] = t[r];
                return a
            }
            var g = {
                    components: {
                        UserList: u["a"],
                        Barcode: l["a"]
                    },
                    data: function() {
                        return {
                            activeName: "first",
                            tableData: [],
                            search: {
                                assign_at: [],
                                receive_at: [],
                                transfer_order_no: null,
                                status: null,
                                assign_user_ids: [],
                                page: 1
                            },
                            total: 0,
                            total_goods_num: 0,
                            selectRows: [],
                            loading: !1,
                            oldSearch: {
                                transfer_order_no: null
                            },
                            barcodeInfo: [],
                            showMergeDialog: !1,
                            mergeData: []
                        }
                    },
                    computed: {
                        selectNum: function() {
                            var t, e = 0,
                                r = m(this.selectRows);
                            try {
                                for (r.s(); !(t = r.n()).done;) {
                                    var a = t.value;
                                    e += a.total_num
                                }
                            } catch (n) {
                                r.e(n)
                            } finally {
                                r.f()
                            }
                            return e
                        }
                    },
                    mounted: function() {
                        this.getList()
                    },
                    methods: {
                        getList: function() {
                            var t = h(s.a.mark((function t(e) {
                                var r;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e && (this.search.page = 1), this.loading = !0, t.next = 4, Object(i["b"])(this.search);
                                        case 4:
                                            r = t.sent, this.loading = !1, this.tableData = r.data.data, this.total = r.data.total, this.total_goods_num = r.data.total_goods_num, this.oldSearch.transfer_order_no = p({}, this.search).transfer_order_no, this.search.transfer_order_no = null;
                                        case 11:
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
                        hanleClickReset: function() {
                            this.search = {
                                assign_at: [],
                                receive_at: [],
                                transfer_order_no: null,
                                status: null,
                                assign_user_ids: [],
                                page: 1
                            }, this.getList()
                        },
                        handleExportReport: function() {
                            var t = p(p({}, this.search), {}, {
                                is_export: 1
                            }, this.oldSearch);
                            delete t.page, Object(i["b"])(t).then((function(t) {
                                1 == t.code && window.open(t.data.download_url)
                            }))
                        },
                        handleSelectionChange: function(t) {
                            this.selectRows = t
                        },
                        createOrder: function() {
                            var t = h(s.a.mark((function t(e) {
                                var r, a, n = this;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, r = {
                                                dst_warehouse_id: 4,
                                                product_ids: e.detail_product_ids,
                                                from_type: "up_shift"
                                            }, this.loading = !0, t.next = 5, Object(c["a"])(r);
                                        case 5:
                                            a = t.sent, this.loading = !1, a.data.return_type ? (this.showMergeDialog = !0, this.mergeData = a.data.list) : (this.getList(), this.barcodeInfo = [{
                                                title: "".concat(a.data.src_area_name, "-").concat(a.data.src_warehouse_description, "---\x3e").concat(a.data.dst_area_name, "-").concat(a.data.dst_warehouse_description, "（").concat(a.data.num, "台）"),
                                                code: a.data.move_batch_no
                                            }], setTimeout((function() {
                                                n.$refs["printBarcode"].$el.click()
                                            }), 1e3)), t.next = 14;
                                            break;
                                        case 10:
                                            t.prev = 10, t.t0 = t["catch"](0), console.log(t.t0), this.loading = !1;
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 10]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }
                },
                w = g,
                y = r("5d22"),
                O = Object(y["a"])(w, a, n, !1, null, "b10397ec", null);
            e["default"] = O.exports
        },
        b8aa: function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return n
            })), r.d(e, "a", (function() {
                return o
            })), r.d(e, "c", (function() {
                return s
            }));
            var a = r("b775");

            function n(t) {
                return Object(a["a"])({
                    url: "/api/up_shift/receive",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(a["a"])({
                    url: "/api/up_shift/show_receive_order",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(a["a"])({
                    url: "/api/up_shift/edit_and_on_sale",
                    method: "post",
                    data: t
                })
            }
        },
        ea45: function(t, e, r) {
            "use strict";
            r.d(e, "e", (function() {
                return n
            })), r.d(e, "h", (function() {
                return o
            })), r.d(e, "i", (function() {
                return s
            })), r.d(e, "g", (function() {
                return i
            })), r.d(e, "k", (function() {
                return c
            })), r.d(e, "c", (function() {
                return u
            })), r.d(e, "d", (function() {
                return l
            })), r.d(e, "f", (function() {
                return d
            })), r.d(e, "b", (function() {
                return p
            })), r.d(e, "j", (function() {
                return _
            })), r.d(e, "a", (function() {
                return f
            }));
            var a = r("b775");

            function n(t) {
                return Object(a["a"])({
                    url: "/api/switch/orders",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(a["a"])({
                    url: "/api/switch/types",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(a["a"])({
                    url: "/api/switch/warehouse_list",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(a["a"])({
                    url: "/api/switch/status",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(a["a"])({
                    url: "/api/switch/refuse",
                    method: "post",
                    data: t
                })
            }

            function u(t) {
                return Object(a["a"])({
                    url: "/api/switch/cancel",
                    method: "post",
                    data: t
                })
            }

            function l(t) {
                return Object(a["a"])({
                    url: "/api/switch/detail",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(a["a"])({
                    url: "/api/switch/product_list",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(a["a"])({
                    url: "/api/switch/agree",
                    method: "post",
                    data: t
                })
            }

            function _(t) {
                return Object(a["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: t
                })
            }

            function f(t) {
                return Object(a["a"])({
                    url: "/api/switch/store_out_of_warehouse",
                    method: "post",
                    data: t
                })
            }
        }
    }
]);