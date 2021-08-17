(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-25316dfb"], {
        1285: function(e, t, r) {
            "use strict";
            r("1d36")
        },
        "1d36": function(e, t, r) {},
        2934: function(e, t, r) {
            "use strict";
            r.d(t, "p", (function() {
                return n
            })), r.d(t, "d", (function() {
                return o
            })), r.d(t, "i", (function() {
                return i
            })), r.d(t, "m", (function() {
                return s
            })), r.d(t, "b", (function() {
                return c
            })), r.d(t, "g", (function() {
                return u
            })), r.d(t, "k", (function() {
                return l
            })), r.d(t, "j", (function() {
                return d
            })), r.d(t, "h", (function() {
                return p
            })), r.d(t, "n", (function() {
                return h
            })), r.d(t, "a", (function() {
                return f
            })), r.d(t, "l", (function() {
                return _
            })), r.d(t, "q", (function() {
                return m
            })), r.d(t, "f", (function() {
                return b
            })), r.d(t, "o", (function() {
                return v
            })), r.d(t, "c", (function() {
                return g
            })), r.d(t, "e", (function() {
                return w
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

            function i(e) {
                return Object(a["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(a["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: e
                })
            }

            function c(e) {
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

            function d(e) {
                return Object(a["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: e
                })
            }

            function p(e) {
                return Object(a["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: e
                })
            }

            function h(e) {
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

            function _(e) {
                return Object(a["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: e
                })
            }

            function m(e) {
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

            function v(e) {
                return Object(a["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: e
                })
            }

            function g(e) {
                return Object(a["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: e
                })
            }

            function w(e) {
                return Object(a["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: e
                })
            }
        },
        "851e": function(e, t, r) {
            "use strict";
            r.r(t);
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "app-container"
                    }, [0 == e.search.abnormal_report_order_ids.length ? r("el-row", {
                        staticClass: "header-search"
                    }, [r("el-col", {
                        staticClass: "same-width wrap",
                        attrs: {
                            span: 21
                        }
                    }, [r("div", {
                        staticClass: "search-item"
                    }, [r("ImeiSearch", {
                        on: {
                            done: function(t) {
                                return e.getProduct()
                            }
                        },
                        model: {
                            value: e.search.imei,
                            callback: function(t) {
                                e.$set(e.search, "imei", t)
                            },
                            expression: "search.imei"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-input", {
                        attrs: {
                            placeholder: "流转单号"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getProduct("2")
                            }
                        },
                        model: {
                            value: e.search.transfer_order_no,
                            callback: function(t) {
                                e.$set(e.search, "transfer_order_no", t)
                            },
                            expression: "search.transfer_order_no"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-input", {
                        attrs: {
                            placeholder: "采购单号"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getProduct()
                            }
                        },
                        model: {
                            value: e.search.purchase_order_no,
                            callback: function(t) {
                                e.$set(e.search, "purchase_order_no", t)
                            },
                            expression: "search.purchase_order_no"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-input", {
                        attrs: {
                            placeholder: "异常单号"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getProduct()
                            }
                        },
                        model: {
                            value: e.search.abnormal_report_order_no,
                            callback: function(t) {
                                e.$set(e.search, "abnormal_report_order_no", t)
                            },
                            expression: "search.abnormal_report_order_no"
                        }
                    })], 1)]), e._v(" "), r("el-col", {
                        staticClass: "operat-btn",
                        attrs: {
                            span: 3
                        }
                    }, [0 == e.search.abnormal_report_order_ids.length ? r("div", [r("el-button", {
                        attrs: {
                            type: "warning"
                        },
                        on: {
                            click: e.getProduct
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
                    }, [e._v("重置")])], 1) : e._e()])], 1) : e._e(), e._v(" "), r("div", {
                        staticClass: "header-tools"
                    }, [r("el-select", {
                        staticStyle: {
                            width: "185px"
                        },
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "调拨仓库"
                        },
                        on: {
                            change: function(t) {
                                return e.handleWarehouseChange(e.tableData, 1)
                            }
                        },
                        model: {
                            value: e.dstWarehouse,
                            callback: function(t) {
                                e.dstWarehouse = t
                            },
                            expression: "dstWarehouse"
                        }
                    }, e._l(e.dict.warehouse, (function(e, t) {
                        return r("el-option", {
                            key: t,
                            attrs: {
                                label: e.name,
                                value: e.id
                            }
                        })
                    })), 1), e._v(" "), r("div", [r("el-tag", {
                        attrs: {
                            type: "primary"
                        }
                    }, [e._v("共" + e._s(e.tableData.length) + "台")])], 1)], 1), e._v(" "), r("el-row", {
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
                            border: ""
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            type: "index",
                            label: "序号",
                            width: "80",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product_name",
                            label: "商品名称",
                            align: "center",
                            width: "230"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "model.name",
                            label: "型号",
                            align: "center",
                            width: "200"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "参数信息",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return e._l(t.row.sales_properties, (function(a, n) {
                                    return r("span", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 12 != a.pn_id,
                                            expression: "item.pn_id != 12"
                                        }],
                                        key: n
                                    }, [e._v("\n              " + e._s(a.pv_name) + e._s(n == t.row.sales_properties.length - 1 ? "" : "，") + "\n            ")])
                                }))
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "imei",
                            label: "IMEI",
                            align: "center",
                            width: "140"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "suppiler_name.name",
                            label: "供应商名称",
                            align: "center",
                            width: "140"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "buy_at",
                            label: "录入时间",
                            align: "center",
                            width: "160"
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
                            align: "center",
                            width: "100"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "操作",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("el-button", {
                                    attrs: {
                                        type: "danger",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return e.tableData.splice(t.$index, 1)
                                        }
                                    }
                                }, [e._v("删除")])]
                            }
                        }])
                    })], 1)], 1)], 1), e._v(" "), r("div", {
                        staticClass: "flex-center"
                    }, [r("el-button", {
                        attrs: {
                            type: "success",
                            loading: e.saveLoading
                        },
                        on: {
                            click: e.save
                        }
                    }, [e._v("提交出库")]), e._v(" "), r("el-button", {
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
                    }, [e._v("打标")])], 1), e._v(" "), r("Barcode", {
                        attrs: {
                            id: "barcode-container",
                            data: e.barcodeInfo
                        }
                    }), e._v(" "), r("el-dialog", {
                        attrs: {
                            title: "未合包明细",
                            visible: e.showMergeDialog
                        },
                        on: {
                            "update:visible": function(t) {
                                e.showMergeDialog = t
                            }
                        }
                    }, [r("div", {
                        staticStyle: {
                            color: "red",
                            "font-size": "18px",
                            "margin-bottom": "10px"
                        }
                    }, [e._v("\n      该流转单未完成合包无法调拨，请合包完成后进行调拨\n    ")]), e._v(" "), r("el-table", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            data: e.mergeData
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            label: "序号",
                            type: "index",
                            width: "60"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "质检码",
                            prop: "qc_code"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "imei",
                            prop: "tag"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "商品信息",
                            prop: "product_name"
                        }
                    })], 1)], 1)], 1)
                },
                n = [],
                o = r("4838"),
                i = r.n(o),
                s = r("ea45"),
                c = r("6d8f"),
                u = r("246e");

            function l(e, t) {
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
                var o, i = !0,
                    s = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        s = !0, o = e
                    },
                    f: function() {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                }
            }

            function d(e, t) {
                if (e) {
                    if ("string" === typeof e) return p(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? p(e, t) : void 0
                }
            }

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                return a
            }

            function h(e, t, r, a, n, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? t(c) : Promise.resolve(c).then(a, n)
            }

            function f(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(a, n) {
                        var o = e.apply(t, r);

                        function i(e) {
                            h(o, a, n, i, s, "next", e)
                        }

                        function s(e) {
                            h(o, a, n, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var _ = {
                    components: {
                        Barcode: c["a"],
                        ImeiSearch: u["a"]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            search: {
                                imei: null,
                                transfer_order_no: null,
                                purchase_order_no: null,
                                abnormal_report_order_ids: [],
                                abnormal_report_order_no: null
                            },
                            dict: {
                                warehouse: []
                            },
                            loading: !1,
                            saveLoading: !1,
                            dstWarehouse: "",
                            singleNumber: this.$route.query.no,
                            barcodeInfo: [],
                            showMergeDialog: !1,
                            mergeData: []
                        }
                    },
                    mounted: function() {
                        this.$route.query.ids && (this.$set(this.search, "abnormal_report_order_ids", this.$route.query.ids.split(",")), this.getProduct()), this.$route.query.product_ids_str && (this.$set(this.search, "product_ids_str", this.$route.query.product_ids_str), this.getProduct()), this.$route.query.no && (this.$set(this.search, "transfer_order_no", this.singleNumber), this.getProduct()), this.getWarehouseList()
                    },
                    methods: {
                        getProduct: function() {
                            var e = f(i.a.mark((function e(t) {
                                var r, a, n, o, c, u;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, this.loading = !0, e.next = 4, Object(s["f"])(this.search);
                                        case 4:
                                            for (a in r = e.sent, this.loading = !1, r.data)
                                                if (!r.data[a].product_base || 1 != r.data[a].product_base.is_abnormal_report || "2" != t && !this.search.transfer_order_no) {
                                                    n = !0, o = l(this.tableData);
                                                    try {
                                                        for (o.s(); !(c = o.n()).done;) u = c.value, a == u.product_id && (n = !1)
                                                    } catch (i) {
                                                        o.e(i)
                                                    } finally {
                                                        o.f()
                                                    }
                                                    n && (this.tableData.unshift(r.data[a]), this.handleWarehouseChange([r.data[a]], 0))
                                                } this.search.imei = null, this.search.transfer_order_no = null, this.search.purchase_order_no = null, this.search.abnormal_report_order_no = null, e.next = 17;
                                            break;
                                        case 13:
                                            e.prev = 13, e.t0 = e["catch"](0), console.log(e.t0), this.loading = !1;
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 13]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        getWarehouseList: function() {
                            var e = f(i.a.mark((function e() {
                                var t;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(s["i"])();
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
                        save: function() {
                            var e = f(i.a.mark((function e() {
                                var t, r, a, n, o, c = this;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(this.tableData.length > 0 && "" != this.dstWarehouse)) {
                                                e.next = 20;
                                                break
                                            }
                                            return e.prev = 1, e.next = 4, this.$confirm("确定出库？", "提示", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 4:
                                            t = {
                                                dst_warehouse_id: this.dstWarehouse,
                                                product_ids: [],
                                                abnormal_report_order_ids: this.$route.query.ids ? this.$route.query.ids.split(",") : null
                                            }, r = l(this.tableData);
                                            try {
                                                for (r.s(); !(a = r.n()).done;) n = a.value, t.product_ids.push(n.product_id)
                                            } catch (i) {
                                                r.e(i)
                                            } finally {
                                                r.f()
                                            }
                                            return this.saveLoading = !0, e.next = 10, Object(s["a"])(t);
                                        case 10:
                                            o = e.sent, this.saveLoading = !1, o.data.return_type ? (this.showMergeDialog = !0, this.mergeData = o.data.list) : (this.tableData = [], this.dstWarehouse = "", this.search.imei = "", this.$message.success("调拨单创建成功！"), "[]" != JSON.stringify(o.data) && (this.barcodeInfo = [{
                                                title: "".concat(o.data.src_area_name, "-").concat(o.data.src_warehouse_description, "---\x3e").concat(o.data.dst_area_name, "-").concat(o.data.dst_warehouse_description, "<br/>（").concat(o.data.num, "台）"),
                                                code: o.data.move_batch_no
                                            }], setTimeout((function() {
                                                c.$refs["printBarcode"].$el.click()
                                            }), 1e3))), e.next = 18;
                                            break;
                                        case 15:
                                            e.prev = 15, e.t0 = e["catch"](1), this.saveLoading = !1;
                                        case 18:
                                            e.next = 21;
                                            break;
                                        case 20:
                                            this.$message.warning("【调拨仓库】和【商品列表】不能为空！");
                                        case 21:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [1, 15]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        resetSearch: function() {
                            this.search = {
                                imei: null,
                                transfer_order_no: null,
                                purchase_order_no: null,
                                abnormal_report_order_ids: [],
                                abnormal_report_order_no: null
                            }, this.dstWarehouse = ""
                        },
                        handleWarehouseChange: function() {
                            var e = f(i.a.mark((function e(t, r) {
                                var a, n, o, s;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            a = [], n = l(t), e.prev = 2, n.s();
                                        case 4:
                                            if ((o = n.n()).done) {
                                                e.next = 25;
                                                break
                                            }
                                            if (s = o.value, 1 != s.is_in_warehouse_overtime || "3" != this.dstWarehouse) {
                                                e.next = 22;
                                                break
                                            }
                                            return e.prev = 7, e.next = 10, this.$confirm("该imei【".concat(s.imei, "】录入入库时间超过60天，是否确定要调拨到市场库？"), "提示", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 10:
                                            if (0 != r) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.abrupt("return", !0);
                                        case 12:
                                            a.push(s), e.next = 20;
                                            break;
                                        case 15:
                                            if (e.prev = 15, e.t0 = e["catch"](7), console.log(e.t0), 0 != r) {
                                                e.next = 20;
                                                break
                                            }
                                            return e.abrupt("return", !1);
                                        case 20:
                                            e.next = 23;
                                            break;
                                        case 22:
                                            a.push(s);
                                        case 23:
                                            e.next = 4;
                                            break;
                                        case 25:
                                            e.next = 30;
                                            break;
                                        case 27:
                                            e.prev = 27, e.t1 = e["catch"](2), n.e(e.t1);
                                        case 30:
                                            return e.prev = 30, n.f(), e.finish(30);
                                        case 33:
                                            if (0 != r) {
                                                e.next = 37;
                                                break
                                            }
                                            return e.abrupt("return", !0);
                                        case 37:
                                            this.tableData = a;
                                        case 38:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [2, 27, 30, 33],
                                    [7, 15]
                                ])
                            })));

                            function t(t, r) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    }
                },
                m = _,
                b = (r("1285"), r("5d22")),
                v = Object(b["a"])(m, a, n, !1, null, "2169a56a", null);
            t["default"] = v.exports
        },
        ea45: function(e, t, r) {
            "use strict";
            r.d(t, "e", (function() {
                return n
            })), r.d(t, "h", (function() {
                return o
            })), r.d(t, "i", (function() {
                return i
            })), r.d(t, "g", (function() {
                return s
            })), r.d(t, "k", (function() {
                return c
            })), r.d(t, "c", (function() {
                return u
            })), r.d(t, "d", (function() {
                return l
            })), r.d(t, "f", (function() {
                return d
            })), r.d(t, "b", (function() {
                return p
            })), r.d(t, "j", (function() {
                return h
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

            function o(e) {
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

            function s(e) {
                return Object(a["a"])({
                    url: "/api/switch/status",
                    method: "get",
                    params: e
                })
            }

            function c(e) {
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

            function d(e) {
                return Object(a["a"])({
                    url: "/api/switch/product_list",
                    method: "get",
                    params: e
                })
            }

            function p(e) {
                return Object(a["a"])({
                    url: "/api/switch/agree",
                    method: "post",
                    data: e
                })
            }

            function h(e) {
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
        }
    }
]);