(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-52473b41"], {
        "08e4": function(t, e, r) {
            "use strict";
            r.d(e, "c", (function() {
                return a
            })), r.d(e, "b", (function() {
                return o
            })), r.d(e, "a", (function() {
                return i
            }));
            var n = r("b775");

            function a(t) {
                return Object(n["a"])({
                    url: "/api/up_shift/scan_receive",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/up_shift/scan_info",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(n["a"])({
                    url: "api/up_shift/scan_imei_receive",
                    method: "get",
                    params: t
                })
            }
        },
        2934: function(t, e, r) {
            "use strict";
            r.d(e, "p", (function() {
                return a
            })), r.d(e, "d", (function() {
                return o
            })), r.d(e, "i", (function() {
                return i
            })), r.d(e, "m", (function() {
                return u
            })), r.d(e, "b", (function() {
                return c
            })), r.d(e, "g", (function() {
                return s
            })), r.d(e, "k", (function() {
                return l
            })), r.d(e, "j", (function() {
                return d
            })), r.d(e, "h", (function() {
                return p
            })), r.d(e, "n", (function() {
                return f
            })), r.d(e, "a", (function() {
                return h
            })), r.d(e, "l", (function() {
                return _
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
            var n = r("b775");

            function a(t) {
                return Object(n["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(n["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(n["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(n["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: t
                })
            }

            function l(t) {
                return Object(n["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(n["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(n["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: t
                })
            }

            function f(t) {
                return Object(n["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: t
                })
            }

            function h(t) {
                return Object(n["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: t
                })
            }

            function _(t) {
                return Object(n["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: t
                })
            }

            function m(t) {
                return Object(n["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: t
                })
            }

            function b(t) {
                return Object(n["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: t
                })
            }

            function v(t) {
                return Object(n["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: t
                })
            }

            function g(t) {
                return Object(n["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: t
                })
            }

            function w(t) {
                return Object(n["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: t
                })
            }
        },
        "4faa": function(t, e, r) {
            "use strict";
            r.r(e);
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "app-container"
                    }, [r("el-row", {
                        staticClass: "header-search"
                    }, [r("el-col", {
                        attrs: {
                            span: 8
                        }
                    }, [r("ImeiSearch", {
                        attrs: {
                            focus: !0,
                            "search-type": t.searchType,
                            placeholder: "扫描流转单号 / 二维码 / IMEI / 质检码"
                        },
                        on: {
                            "update:searchType": function(e) {
                                t.searchType = e
                            },
                            "update:search-type": function(e) {
                                t.searchType = e
                            },
                            done: function(e) {
                                return t.getDetail()
                            }
                        },
                        model: {
                            value: t.search.transfer_order_no,
                            callback: function(e) {
                                t.$set(t.search, "transfer_order_no", e)
                            },
                            expression: "search.transfer_order_no"
                        }
                    }), t._v(" "), r("a", {
                        staticStyle: {
                            "margin-left": "5px"
                        },
                        attrs: {
                            href: "/#/search-product?node_id=6",
                            target: "_blank"
                        }
                    }, [r("el-button", {
                        attrs: {
                            type: "primary"
                        }
                    }, [t._v("Ctrl打开扫描IMEI")])], 1), t._v(" "), r("el-button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.detail.id,
                            expression: "detail.id"
                        }],
                        staticStyle: {
                            "margin-left": "3px"
                        },
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.batchOpen
                        }
                    }, [t._v("一键打开")])], 1), t._v(" "), r("el-col", {
                        attrs: {
                            span: 8
                        }
                    }, [r("el-alert", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: void 0 != t.detail.status,
                            expression: "detail.status != undefined"
                        }],
                        staticClass: "status-tip",
                        attrs: {
                            title: t.detail.receive_status_description,
                            type: 0 == t.detail.receive_status ? "warning" : (t.detail.status, "success"),
                            "show-icon": "",
                            closable: !1
                        }
                    })], 1)], 1), t._v(" "), t.detail.id ? r("el-row", {
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
                    }, [r("div", [t._v("\n              当前流转单号：\n              "), r("span", [t._v(t._s(t.detail.transfer_order_no))])]), t._v(" "), r("div", [t._v("\n              总数量：\n              "), r("span", [t._v(t._s(t.detail.total_num))])])])], 1)], 1)], 1)], 1) : t._e(), t._v(" "), r("el-row", {
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
                            border: ""
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            type: "index",
                            label: "序号",
                            align: "center",
                            width: "80"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product_name",
                            label: "商品名称",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product_name",
                            label: "业务类型/供应商",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v("\n            " + t._s(e.row.business_type_description) + "/\n            "), e.row.product_cost ? r("span", [t._v(t._s(e.row.product_cost.supplier_info.name))]) : t._e()]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "imei",
                            label: "IMEI",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product_name",
                            label: "参数信息",
                            "header-align": "center",
                            width: "400"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return t._l(e.row.sales_properties, (function(e, n) {
                                    return r("el-tag", {
                                        key: n,
                                        staticStyle: {
                                            "margin-right": "5px"
                                        },
                                        attrs: {
                                            size: "mini"
                                        }
                                    }, [t._v(t._s(e.pn_name) + "：" + t._s(e.pv_name))])
                                }))
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "price",
                            label: "价格",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "操作",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [r("a", {
                                    attrs: {
                                        href: "/#/putaway/search/info?id=" + e.row.product_id,
                                        target: "_blank"
                                    }
                                }, [r("el-button", {
                                    attrs: {
                                        type: "success",
                                        size: "mini"
                                    }
                                }, [t._v("上架审核")])], 1), t._v(" "), r("el-button", {
                                    attrs: {
                                        type: "danger",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            t.cur_imei = e.row.imei, t.showErrDialog = !0
                                        }
                                    }
                                }, [t._v("错误上报")])]
                            }
                        }])
                    })], 1)], 1)], 1), t._v(" "), r("ErrorDialog", {
                        attrs: {
                            imei: t.cur_imei,
                            "show-dialog": t.showErrDialog,
                            "node-id": 6
                        },
                        on: {
                            "update:showDialog": function(e) {
                                t.showErrDialog = e
                            },
                            "update:show-dialog": function(e) {
                                t.showErrDialog = e
                            }
                        }
                    })], 1)
                },
                a = [],
                o = r("4838"),
                i = r.n(o),
                u = r("08e4"),
                c = r("c4a5"),
                s = r("246e");

            function l(t, e, r, n, a, o, i) {
                try {
                    var u = t[o](i),
                        c = u.value
                } catch (s) {
                    return void r(s)
                }
                u.done ? e(c) : Promise.resolve(c).then(n, a)
            }

            function d(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = t.apply(e, r);

                        function i(t) {
                            l(o, n, a, i, u, "next", t)
                        }

                        function u(t) {
                            l(o, n, a, i, u, "throw", t)
                        }
                        i(void 0)
                    }))
                }
            }
            var p = {
                    components: {
                        ErrorDialog: c["a"],
                        ImeiSearch: s["a"]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            search: {
                                transfer_order_no: null
                            },
                            loading: !1,
                            detail: {},
                            saveArr: [],
                            showErrDialog: !1,
                            cur_imei: null,
                            searchType: 0
                        }
                    },
                    mounted: function() {},
                    methods: {
                        getDetail: function() {
                            var t = d(i.a.mark((function t() {
                                var e;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0, this.loading = !0, "L" != this.search.transfer_order_no.substr(0, 1)) {
                                                t.next = 10;
                                                break
                                            }
                                            return t.next = 5, Object(u["c"])({
                                                transfer_order_no: this.search.transfer_order_no
                                            });
                                        case 5:
                                            e = t.sent, this.detail = e.data, this.getList(), t.next = 11;
                                            break;
                                        case 10:
                                            this.getEditProductByImei();
                                        case 11:
                                            this.loading = !1, this.search.transfer_order_no = null, t.next = 20;
                                            break;
                                        case 15:
                                            t.prev = 15, t.t0 = t["catch"](0), this.getList(), this.loading = !1, this.search.transfer_order_no = null;
                                        case 20:
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
                        getList: function() {
                            var t = d(i.a.mark((function t() {
                                var e;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, this.loading = !0, t.next = 4, Object(u["b"])({
                                                transfer_order_id: this.detail.id
                                            });
                                        case 4:
                                            e = t.sent, this.loading = !1, this.tableData = e.data, t.next = 13;
                                            break;
                                        case 9:
                                            t.prev = 9, t.t0 = t["catch"](0), console.log(t.t0), this.loading = !1;
                                        case 13:
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
                        getEditProductByImei: function() {
                            var t = d(i.a.mark((function t() {
                                var e, r;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(u["a"])({
                                                imei: this.search.transfer_order_no
                                            });
                                        case 2:
                                            e = t.sent, this.search.transfer_order_no = null, r = this.$router.resolve({
                                                name: "product-imei-putaway",
                                                query: {
                                                    id: e.data.product_id,
                                                    create: 1
                                                }
                                            }), window.open(r.href, "_blank");
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
                        batchOpen: function() {
                            var t = this;
                            this.tableData.forEach((function(e) {
                                var r = t.$router.resolve({
                                    name: "product-imei-putaway",
                                    query: {
                                        id: e.product_id
                                    }
                                });
                                window.open(r.href, "_blank")
                            }))
                        }
                    }
                },
                f = p,
                h = (r("5f4e"), r("5d22")),
                _ = Object(h["a"])(f, n, a, !1, null, "df2cc874", null);
            e["default"] = _.exports
        },
        "5f4e": function(t, e, r) {
            "use strict";
            r("821c")
        },
        "821c": function(t, e, r) {},
        c0f9: function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return a
            })), r.d(e, "a", (function() {
                return o
            })), r.d(e, "f", (function() {
                return i
            })), r.d(e, "d", (function() {
                return u
            })), r.d(e, "g", (function() {
                return c
            })), r.d(e, "i", (function() {
                return s
            })), r.d(e, "h", (function() {
                return l
            })), r.d(e, "j", (function() {
                return d
            })), r.d(e, "e", (function() {
                return p
            })), r.d(e, "c", (function() {
                return f
            }));
            var n = r("b775");

            function a(t) {
                return Object(n["a"])({
                    url: "/api/error_reports",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/error_report/can_report_error_types",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(n["a"])({
                    url: "/api/error_report/store",
                    method: "post",
                    data: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "/api/error_report/destroy",
                    method: "post",
                    data: t
                })
            }

            function c(t) {
                return Object(n["a"])({
                    url: "/api/check/error_report",
                    method: "post",
                    data: t
                })
            }

            function s(t) {
                return Object(n["a"])({
                    url: "/api/re_check/error_report",
                    method: "post",
                    data: t
                })
            }

            function l(t) {
                return Object(n["a"])({
                    url: "/api/edit/error_report",
                    method: "post",
                    data: t
                })
            }

            function d(t) {
                return Object(n["a"])({
                    url: "/api/up_shift/error_report",
                    method: "post",
                    data: t
                })
            }

            function p(t) {
                return Object(n["a"])({
                    url: "/api/error_report/force_destroy",
                    method: "post",
                    data: t
                })
            }

            function f(t) {
                return Object(n["a"])({
                    url: "/api/option/select",
                    method: "get",
                    params: t
                })
            }
        }
    }
]);