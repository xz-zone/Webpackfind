(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2803a758"], {
        "0df2": function(t, e, a) {
            "use strict";
            a.r(e);
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "app-container"
                    }, [a("div", {
                        staticClass: "header-tools"
                    }, [a("div"), t._v(" "), a("div", [a("el-tag", {
                        attrs: {
                            type: "warning"
                        }
                    }, [t._v("oo已勾选：" + t._s(t.selectRows.length))]), t._v(" "), a("el-tag", {
                        attrs: {
                            type: "warning"
                        }
                    }, [t._v("总数量：" + t._s(t.tableData.length))])], 1)]), t._v(" "), a("el-row", {
                        staticClass: "body-list"
                    }, [a("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [a("el-table", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: t.loading,
                            expression: "loading"
                        }],
                        attrs: {
                            data: t.tableData,
                            border: ""
                        },
                        on: {
                            "selection-change": t.handleSelectionChange
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            type: "selection",
                            align: "center"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            type: "index",
                            label: "序号",
                            align: "center",
                            width: "80"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "类目品牌",
                            align: "center",
                            width: "200"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v(t._s(e.row.type_name) + " " + t._s(e.row.brand_name))]
                            }
                        }])
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "model_name",
                            label: "型号",
                            align: "center",
                            width: "200"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "imei",
                            label: "IMEI",
                            align: "center",
                            width: "200px"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "参数信息",
                            "header-align": "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return t._l(e.row.sale_props_str.split("\n"), (function(e, n) {
                                    return a("el-tag", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: "成色" != e.split(":")[0] && "" != e,
                                            expression: "item.split(':')[0] != '成色' && item != ''"
                                        }],
                                        key: n,
                                        staticStyle: {
                                            "margin-right": "2px"
                                        },
                                        attrs: {
                                            size: "mini"
                                        }
                                    }, [t._v(t._s(e))])
                                }))
                            }
                        }])
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "成色",
                            align: "center",
                            width: "150"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return t._l(e.row.sale_props_str.split("\n"), (function(e, n) {
                                    return a("div", {
                                        key: n
                                    }, ["成色" == e.split(":")[0] ? a("span", [t._v(t._s(e.split(":")[1]))]) : t._e()])
                                }))
                            }
                        }])
                    })], 1)], 1)], 1), t._v(" "), a("div", {
                        staticClass: "flex-center"
                    }, [0 !== t.tableData.length ? a("el-button", {
                        attrs: {
                            type: "success"
                        },
                        on: {
                            click: function(e) {
                                return t.createOrder()
                            }
                        }
                    }, [t._v("调拨到上架库")]) : t._e(), t._v(" "), a("el-button", {
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
                    }, [t._v("打标")])], 1), t._v(" "), a("Barcode", {
                        attrs: {
                            id: "barcode-container",
                            data: t.barcodeInfo
                        }
                    }), t._v(" "), a("el-dialog", {
                        attrs: {
                            title: "未合包明细",
                            visible: t.showMergeDialog
                        },
                        on: {
                            "update:visible": function(e) {
                                t.showMergeDialog = e
                            }
                        }
                    }, [a("div", {
                        staticStyle: {
                            color: "red",
                            "font-size": "18px",
                            "margin-bottom": "10px"
                        }
                    }, [t._v("\n      该流转单未完成合包无法调拨，请合包完成后进行调拨\n    ")]), t._v(" "), a("el-table", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            data: t.mergeData
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            label: "序号",
                            type: "index",
                            width: "60"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "质检码",
                            prop: "qc_code"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "imei",
                            prop: "tag"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "商品信息",
                            prop: "product_name"
                        }
                    })], 1)], 1)], 1)
                },
                r = [],
                i = a("4838"),
                o = a.n(i),
                s = a("9679"),
                c = a("ea45"),
                l = a("6d8f");

            function u(t, e, a, n, r, i, o) {
                try {
                    var s = t[i](o),
                        c = s.value
                } catch (l) {
                    return void a(l)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, r)
            }

            function d(t) {
                return function() {
                    var e = this,
                        a = arguments;
                    return new Promise((function(n, r) {
                        var i = t.apply(e, a);

                        function o(t) {
                            u(i, n, r, o, s, "next", t)
                        }

                        function s(t) {
                            u(i, n, r, o, s, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            var p = {
                    components: {
                        Barcode: l["a"]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            selectRows: [],
                            loading: !1,
                            showAssignDialog: !1,
                            assignForm: {
                                to_node_id: 6
                            },
                            barcodeInfo: [],
                            showMergeDialog: !1,
                            mergeData: []
                        }
                    },
                    mounted: function() {
                        this.getList()
                    },
                    methods: {
                        getList: function() {
                            var t = d(o.a.mark((function t() {
                                var e;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return this.loading = !0, t.next = 3, Object(s["a"])();
                                        case 3:
                                            e = t.sent, this.loading = !1, this.tableData = e.data.data;
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
                        createOrder: function() {
                            var t = d(o.a.mark((function t() {
                                var e, a, n, r = this;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, e = {
                                                to_node_id: this.assignForm.to_node_id,
                                                by_assign_user_id: this.assignForm.by_assign_user_id,
                                                product_ids: []
                                            }, a = this.tableData, this.selectRows.length > 0 && (a = this.selectRows), e.product_ids = a.map((function(t) {
                                                return t.product_id
                                            })), e.dst_warehouse_id = 4, this.loading = !0, t.next = 9, Object(c["a"])(e);
                                        case 9:
                                            n = t.sent, this.loading = !1, n.data.return_type ? (this.showMergeDialog = !0, this.mergeData = n.data.list) : (this.getList(), this.barcodeInfo = [{
                                                title: "".concat(n.data.src_area_name, "-").concat(n.data.src_warehouse_description, "---\x3e").concat(n.data.dst_area_name, "-").concat(n.data.dst_warehouse_description, "（").concat(n.data.num, "台）"),
                                                code: n.data.move_batch_no
                                            }], setTimeout((function() {
                                                r.$refs["printBarcode"].$el.click()
                                            }), 1e3), this.reload()), t.next = 18;
                                            break;
                                        case 14:
                                            t.prev = 14, t.t0 = t["catch"](0), console.log(t.t0), this.loading = !1;
                                        case 18:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 14]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        handleSelectionChange: function(t) {
                            this.selectRows = t
                        }
                    }
                },
                h = p,
                _ = a("5d22"),
                f = Object(_["a"])(h, n, r, !1, null, "24774a3a", null);
            e["default"] = f.exports
        },
        9679: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return r
            })), a.d(e, "b", (function() {
                return i
            }));
            var n = a("b775");

            function r(t) {
                return Object(n["a"])({
                    url: "/api/up_shift/to_be_packed",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(n["a"])({
                    url: "/api/up_shift/auto_un_pack",
                    method: "post",
                    data: t
                })
            }
        },
        ea45: function(t, e, a) {
            "use strict";
            a.d(e, "e", (function() {
                return r
            })), a.d(e, "h", (function() {
                return i
            })), a.d(e, "i", (function() {
                return o
            })), a.d(e, "g", (function() {
                return s
            })), a.d(e, "k", (function() {
                return c
            })), a.d(e, "c", (function() {
                return l
            })), a.d(e, "d", (function() {
                return u
            })), a.d(e, "f", (function() {
                return d
            })), a.d(e, "b", (function() {
                return p
            })), a.d(e, "j", (function() {
                return h
            })), a.d(e, "a", (function() {
                return _
            }));
            var n = a("b775");

            function r(t) {
                return Object(n["a"])({
                    url: "/api/switch/orders",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(n["a"])({
                    url: "/api/switch/types",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/switch/warehouse_list",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(n["a"])({
                    url: "/api/switch/status",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(n["a"])({
                    url: "/api/switch/refuse",
                    method: "post",
                    data: t
                })
            }

            function l(t) {
                return Object(n["a"])({
                    url: "/api/switch/cancel",
                    method: "post",
                    data: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "/api/switch/detail",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(n["a"])({
                    url: "/api/switch/product_list",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(n["a"])({
                    url: "/api/switch/agree",
                    method: "post",
                    data: t
                })
            }

            function h(t) {
                return Object(n["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: t
                })
            }

            function _(t) {
                return Object(n["a"])({
                    url: "/api/switch/store_out_of_warehouse",
                    method: "post",
                    data: t
                })
            }
        }
    }
]);