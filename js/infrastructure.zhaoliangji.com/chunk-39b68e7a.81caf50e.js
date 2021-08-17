(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-39b68e7a"], {
        2934: function(t, e, r) {
            "use strict";
            r.d(e, "p", (function() {
                return n
            })), r.d(e, "d", (function() {
                return i
            })), r.d(e, "i", (function() {
                return o
            })), r.d(e, "m", (function() {
                return s
            })), r.d(e, "b", (function() {
                return c
            })), r.d(e, "g", (function() {
                return l
            })), r.d(e, "k", (function() {
                return u
            })), r.d(e, "j", (function() {
                return p
            })), r.d(e, "h", (function() {
                return d
            })), r.d(e, "n", (function() {
                return f
            })), r.d(e, "a", (function() {
                return h
            })), r.d(e, "l", (function() {
                return m
            })), r.d(e, "q", (function() {
                return _
            })), r.d(e, "f", (function() {
                return g
            })), r.d(e, "o", (function() {
                return b
            })), r.d(e, "c", (function() {
                return v
            })), r.d(e, "e", (function() {
                return y
            }));
            var a = r("b775");

            function n(t) {
                return Object(a["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(a["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(a["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
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

            function l(t) {
                return Object(a["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(a["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(a["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(a["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: t
                })
            }

            function f(t) {
                return Object(a["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: t
                })
            }

            function h(t) {
                return Object(a["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: t
                })
            }

            function m(t) {
                return Object(a["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: t
                })
            }

            function _(t) {
                return Object(a["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: t
                })
            }

            function g(t) {
                return Object(a["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: t
                })
            }

            function b(t) {
                return Object(a["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: t
                })
            }

            function v(t) {
                return Object(a["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: t
                })
            }

            function y(t) {
                return Object(a["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: t
                })
            }
        },
        9345: function(t, e, r) {
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
                        staticClass: "same-width wrap",
                        attrs: {
                            span: 21
                        }
                    }, [r("div", {
                        staticStyle: {
                            "margin-right": "10px"
                        }
                    }, [r("TypeBrandModel", {
                        attrs: {
                            level: 3,
                            dict: t.dict
                        },
                        on: {
                            modelChange: function(e) {
                                return t.getProps(1)
                            }
                        },
                        model: {
                            value: t.search,
                            callback: function(e) {
                                t.search = e
                            },
                            expression: "search"
                        }
                    })], 1), t._v(" "), t._l(t.dict.props, (function(e, a) {
                        return r("div", {
                            key: a,
                            staticClass: "search-item"
                        }, [r("el-select", {
                            attrs: {
                                filterable: "",
                                clearable: "",
                                placeholder: e.pn_name
                            },
                            model: {
                                value: t.search.key_props[e.pnid],
                                callback: function(r) {
                                    t.$set(t.search.key_props, e.pnid, r)
                                },
                                expression: "search.key_props[item.pnid]"
                            }
                        }, t._l(e.list, (function(t, e) {
                            return r("el-option", {
                                key: e,
                                attrs: {
                                    label: t.pvname,
                                    value: t.pvid
                                }
                            })
                        })), 1)], 1)
                    }))], 2), t._v(" "), r("el-col", {
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
                            click: function(e) {
                                return t.resetSearch()
                            }
                        }
                    }, [t._v("重置")])], 1)], 1), t._v(" "), r("div", {
                        staticClass: "header-tools"
                    }, [r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.openDialog()
                            }
                        }
                    }, [t._v("新增基准价")])], 1), t._v(" "), r("el-row", {
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
                            "max-height": t.getClientHeight(260),
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
                            label: "型号内存",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "price",
                            label: "价格",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "pre_base_price",
                            label: "上一个基准价",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "操作",
                            width: "300",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [r("el-button", {
                                    attrs: {
                                        type: "success",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return t.changePriceData(e.row.id)
                                        }
                                    }
                                }, [t._v("一键改价")])]
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
                    })], 1), t._v(" "), r("el-dialog", {
                        attrs: {
                            title: "新增",
                            visible: t.showDialog
                        },
                        on: {
                            "update:visible": function(e) {
                                t.showDialog = e
                            }
                        }
                    }, [r("el-form", {
                        ref: "formRef",
                        attrs: {
                            model: t.formData,
                            rules: t.rules,
                            "label-width": "130px"
                        }
                    }, [t.formData.id ? t._e() : r("el-form-item", {
                        attrs: {
                            label: "类别：",
                            prop: "type"
                        }
                    }, [r("TypeBrandModel", {
                        attrs: {
                            "has-name": !0,
                            level: 3,
                            dict: t.formDict
                        },
                        on: {
                            modelChange: function(e) {
                                return t.getProps(2)
                            }
                        },
                        model: {
                            value: t.formData,
                            callback: function(e) {
                                t.formData = e
                            },
                            expression: "formData"
                        }
                    })], 1), t._v(" "), t.formData.model_id && !t.formData.id && Object.keys(t.formDict.props).length > 0 ? r("el-form-item", {
                        attrs: {
                            label: "商品属性：",
                            prop: "props"
                        }
                    }, t._l(t.formDict.props, (function(e, a) {
                        return r("div", {
                            key: a,
                            staticClass: "prop-item"
                        }, [r("el-select", {
                            attrs: {
                                filterable: "",
                                clearable: "",
                                placeholder: e.pn_name
                            },
                            on: {
                                change: t.getProductName
                            },
                            model: {
                                value: t.formData.key_props[e.pnid],
                                callback: function(r) {
                                    t.$set(t.formData.key_props, e.pnid, r)
                                },
                                expression: "formData.key_props[item.pnid]"
                            }
                        }, t._l(e.list, (function(t, e) {
                            return r("el-option", {
                                key: e,
                                attrs: {
                                    label: t.pvname,
                                    value: t.pvid
                                }
                            })
                        })), 1)], 1)
                    })), 0) : t._e(), t._v(" "), t.formData.model_id ? r("el-form-item", {
                        attrs: {
                            label: "商品名称："
                        }
                    }, [t._v(t._s(t.formData.product_name))]) : t._e(), t._v(" "), r("el-form-item", {
                        attrs: {
                            label: "价格：",
                            prop: "price"
                        }
                    }, [r("el-input", {
                        attrs: {
                            type: "number",
                            placeholder: "请输入价格"
                        },
                        model: {
                            value: t.formData.price,
                            callback: function(e) {
                                t.$set(t.formData, "price", e)
                            },
                            expression: "formData.price"
                        }
                    })], 1)], 1), t._v(" "), r("span", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [r("el-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: function(e) {
                                t.showDialog = !1
                            }
                        }
                    }, [t._v("取消")]), t._v(" "), r("el-button", {
                        attrs: {
                            type: "primary",
                            loading: t.formLoading
                        },
                        on: {
                            click: t.save
                        }
                    }, [t._v("确 定")])], 1)], 1), t._v(" "), r("el-dialog", {
                        attrs: {
                            title: "提示",
                            visible: t.dialogVisible,
                            width: "60%"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.dialogVisible = e
                            }
                        }
                    }, [r("div", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: t.changePrice.loading,
                            expression: "changePrice.loading"
                        }]
                    }, [r("div", {
                        staticClass: "price"
                    }, [t._v("\n        请检查修改机器的价格\n        "), r("span", [t._v("共" + t._s(t.changePrice.total) + "台")])]), t._v(" "), r("div", {
                        staticClass: "table-sty"
                    }, [r("el-table", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            data: t.formDict.changePriceData,
                            border: "",
                            "max-height": "480"
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            label: "序号",
                            type: "index",
                            align: "center",
                            width: "50"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product_id",
                            label: "商品ID",
                            align: "center",
                            width: "140"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "imei",
                            label: "imei",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product_name",
                            label: "商品名",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "product_cost.cost",
                            label: "成本",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [r("div", {
                                    class: {
                                        "color-danger": e.row.product_cost.cost > e.row.new_price
                                    }
                                }, [t._v(t._s(e.row.product_cost.cost))])]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "price",
                            label: "现售价",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "new_price",
                            label: "新价",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [r("el-input", {
                                    class: {
                                        "price-success": e.row.new_price > e.row.price, "price-danger": e.row.new_price < e.row.price
                                    },
                                    attrs: {
                                        placeholder: "请输入新价",
                                        type: "number",
                                        "suffix-icon": e.row.new_price > e.row.price ? "el-icon-top" : e.row.new_price < e.row.price ? "el-icon-bottom" : "el-icon-minus"
                                    },
                                    model: {
                                        value: e.row.new_price,
                                        callback: function(r) {
                                            t.$set(e.row, "new_price", r)
                                        },
                                        expression: "scope.row.new_price"
                                    }
                                })]
                            }
                        }])
                    })], 1)], 1), t._v(" "), r("div", {
                        staticClass: "submit"
                    }, [r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.newPriceSubmit
                        }
                    }, [t._v("一键提交")])], 1)])])], 1)
                },
                n = [],
                i = r("4838"),
                o = r.n(i),
                s = r("2934"),
                c = r("b775");

            function l(t) {
                return Object(c["a"])({
                    url: "/api/base_prices",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(c["a"])({
                    url: "/api/base_price/store",
                    method: "post",
                    data: t
                })
            }

            function p(t) {
                return Object(c["a"])({
                    url: "/api/base_price/update",
                    method: "post",
                    data: t
                })
            }

            function d(t) {
                return Object(c["a"])({
                    url: "/api/base_price/update_products_price",
                    method: "post",
                    data: t
                })
            }

            function f(t) {
                return Object(c["a"])({
                    url: "/api/base_price/products_of_base_price",
                    method: "get",
                    params: t
                })
            }

            function h(t) {
                return Object(c["a"])({
                    url: "/api/product/pricing_sales_properties_pnids",
                    method: "get",
                    params: t
                })
            }
            var m = r("1504");

            function _(t, e) {
                var r;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (r = g(t)) || e && t && "number" === typeof t.length) {
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
                var i, o = !0,
                    s = !1;
                return {
                    s: function() {
                        r = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = r.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, i = t
                    },
                    f: function() {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function g(t, e) {
                if (t) {
                    if ("string" === typeof t) return b(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? b(t, e) : void 0
                }
            }

            function b(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, a = new Array(e); r < e; r++) a[r] = t[r];
                return a
            }

            function v(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function y(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? v(Object(r), !0).forEach((function(e) {
                        w(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function w(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function D(t, e, r, a, n, i, o) {
                try {
                    var s = t[i](o),
                        c = s.value
                } catch (l) {
                    return void r(l)
                }
                s.done ? e(c) : Promise.resolve(c).then(a, n)
            }

            function k(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(a, n) {
                        var i = t.apply(e, r);

                        function o(t) {
                            D(i, a, n, o, s, "next", t)
                        }

                        function s(t) {
                            D(i, a, n, o, s, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            var j = {
                    name: "GoodsBasePrice",
                    components: {
                        TypeBrandModel: m["a"]
                    },
                    data: function() {
                        var t = this,
                            e = function(e, r, a) {
                                if (!(t.formData.type_id && t.formData.brand_id && t.formData.model_id)) return a(new Error("类目、品牌、型号不能为空！"));
                                a()
                            };
                        return {
                            tableData: [],
                            search: {
                                type_id: null,
                                brand_id: null,
                                model_id: null,
                                key_props: {},
                                page: 1
                            },
                            total: 0,
                            dict: {
                                types: [],
                                brands: [],
                                models: [],
                                props: {}
                            },
                            loading: !1,
                            showDialog: !1,
                            dialogVisible: !1,
                            formData: {
                                id: null,
                                type_id: null,
                                brand_id: null,
                                model_id: null,
                                key_props: {},
                                product_name: null,
                                price: 0
                            },
                            rules: {
                                type: [{
                                    required: !0,
                                    validator: e,
                                    trigger: "blur"
                                }],
                                price: [{
                                    required: !0,
                                    message: "非法价格！",
                                    trigger: "blur"
                                }]
                            },
                            formDict: {
                                types: [],
                                brands: [],
                                models: [],
                                props: {},
                                attr: {},
                                changePriceData: []
                            },
                            formLoading: !1,
                            changePrice: {
                                total: 0,
                                page: 1,
                                per_page: 2e3,
                                loading: !1,
                                list: []
                            },
                            priceRule: []
                        }
                    },
                    mounted: function() {
                        this.getTypes(), this.getList()
                    },
                    methods: {
                        getList: function() {
                            var t = k(o.a.mark((function t(e) {
                                var r, a;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return 1 == e && (this.search.page = 1), r = y({}, this.search), r.key_props = this.formatProps(r.key_props), this.loading = !0, t.next = 6, l(r);
                                        case 6:
                                            a = t.sent, this.loading = !1, this.tableData = a.data.data, this.total = a.data.total;
                                        case 10:
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
                        formatProps: function(t) {
                            var e = [];
                            for (var r in t) e.push(r + ":" + t[r]);
                            return e.join(";")
                        },
                        resetSearch: function() {
                            this.search.type_id = null, this.search.brand_id = null, this.search.model_id = null, this.search.key_props = {}, this.dict.brands = [], this.dict.models = [], this.dict.props = [], this.getList(1)
                        },
                        getTypes: function() {
                            var t = k(o.a.mark((function t() {
                                var e;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(s["p"])();
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
                            var t = k(o.a.mark((function t() {
                                var e;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return this.search.brand_id = "", this.$set(this.dict, "brands", {}), t.next = 4, Object(s["d"])({
                                                type_id: this.search.type_id
                                            });
                                        case 4:
                                            e = t.sent, this.$set(this.dict, "brands", e.data);
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
                        getModels: function() {
                            var t = k(o.a.mark((function t() {
                                var e;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return this.search.model_id = "", this.$set(this.dict, "models", {}), t.next = 4, Object(s["i"])({
                                                type_id: this.search.type_id,
                                                brand_id: this.search.brand_id
                                            });
                                        case 4:
                                            e = t.sent, this.$set(this.dict, "models", e.data);
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
                            var t = k(o.a.mark((function t(e) {
                                var r, a, n, i, c, l, u, p, d, f;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return r = null, a = {
                                                type_id: null,
                                                brand_id: null
                                            }, 1 == e ? (a = {
                                                type_id: this.search.type_id,
                                                brand_id: this.search.brand_id
                                            }, r = this.search.model_id) : 2 == e && (r = this.formData.model_id, a = {
                                                type_id: this.formData.type_id,
                                                brand_id: this.formData.brand_id
                                            }, this.formData.product_name = "", this.formData.key_props = [], this.getProductName(), this.formData.key_props = {}, this.$set(this.formDict, "props", [])), t.next = 5, Object(s["m"])({
                                                model_id: r
                                            });
                                        case 5:
                                            return n = t.sent, t.next = 8, h({
                                                type_id: a.type_id,
                                                brand_id: a.brand_id,
                                                model_id: r
                                            });
                                        case 8:
                                            if (i = t.sent, this.priceRule = i.data, c = [], this.priceRule.length > 0)
                                                for (l in n.data[r]) {
                                                    u = _(this.priceRule);
                                                    try {
                                                        for (u.s(); !(p = u.n()).done;) d = p.value, l == d && c.push(n.data[r][l])
                                                    } catch (o) {
                                                        u.e(o)
                                                    } finally {
                                                        u.f()
                                                    }
                                                } else
                                                    for (f in n.data[r]) c.push(n.data[r][f]);
                                            1 == e ? this.$set(this.dict, "props", c) : 2 == e && this.$set(this.formDict, "props", c);
                                        case 13:
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
                        openDialog: function(t) {
                            var e = this;
                            this.showDialog = !0, this.$nextTick((function() {
                                t ? (e.formData.id = t.id, e.formData.price = t.price, e.formData.product_name = t.product_name) : (e.formData.id = null, e.formData.type_id = null, e.formData.brand_id = null, e.formData.model_id = null, e.formData.key_props = {}, e.formData.price = null, e.formData.product_name = null, e.formDict.brands = [], e.formDict.models = [], e.formDict.props = {}, e.$refs["formRef"].resetFields())
                            }))
                        },
                        save: function() {
                            var t = this;
                            this.$refs["formRef"].validate(function() {
                                var e = k(o.a.mark((function e(r) {
                                    var a;
                                    return o.a.wrap((function(e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                if (!r) {
                                                    e.next = 24;
                                                    break
                                                }
                                                if (e.prev = 1, a = {}, t.formData.id) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return a = y({}, t.formData), a.key_props = t.formatProps(a.key_props), t.formLoading = !0, e.next = 9, u(a);
                                            case 9:
                                                e.next = 15;
                                                break;
                                            case 11:
                                                return a = {
                                                    id: t.formData.id,
                                                    price: t.formData.price
                                                }, t.formLoading = !0, e.next = 15, p(a);
                                            case 15:
                                                t.formLoading = !1, t.$message.success("保存成功！"), t.showDialog = !1, t.getList(1), e.next = 24;
                                                break;
                                            case 21:
                                                e.prev = 21, e.t0 = e["catch"](1), t.formLoading = !1;
                                            case 24:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [1, 21]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }())
                        },
                        getPropName: function(t, e) {
                            if (console.log("传入："), console.log(t, e), console.log(this.formDict.props), this.formDict.props.length) {
                                var r = JSON.parse(JSON.stringify(this.formDict.props));
                                console.log("获取循环：", r);
                                var a, n = _(r);
                                try {
                                    for (n.s(); !(a = n.n()).done;) {
                                        var i = a.value;
                                        if (t == i.pnid) {
                                            var o, s = _(i.list);
                                            try {
                                                for (s.s(); !(o = s.n()).done;) {
                                                    var c = o.value;
                                                    if (c.pvid == e) return c.pvname
                                                }
                                            } catch (l) {
                                                s.e(l)
                                            } finally {
                                                s.f()
                                            }
                                        }
                                    }
                                } catch (l) {
                                    n.e(l)
                                } finally {
                                    n.f()
                                }
                            }
                            return ""
                        },
                        getProductName: function() {
                            console.log("key_props:", this.formData.key_props);
                            var t = this.getPropName(12, this.formData.key_props[12]);
                            console.log("成色：", t);
                            var e = [];
                            for (var r in this.formData.key_props) 12 != r && e.push(this.getPropName(r, this.formData.key_props[r]));
                            console.log("获取到的：", e), this.formData.product_name = [t, this.formData.model_name, e.join(" ")].join(" "), console.log(this.formData.product_name)
                        },
                        changePriceData: function() {
                            var t = k(o.a.mark((function t(e) {
                                var r, a;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return this.formDict.changePriceData = [], this.dialogVisible = !0, this.changePrice.loading = !0, t.next = 5, f({
                                                id: e,
                                                page: this.changePrice.page,
                                                per_page: this.changePrice.per_page
                                            });
                                        case 5:
                                            if (r = t.sent, 1 == r.code) {
                                                for (a in this.changePrice.total = r.data.total, r.data.list) this.formDict.changePriceData.push(r.data.list[a]);
                                                this.changePrice.loading = !1
                                            }
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
                        priceDataPaginate: function() {
                            var t = 10 * (this.changePrice.page - 1);
                            this.changePrice.list = this.formDict.changePriceData.slice(t, t + 10)
                        },
                        newPriceSubmit: function() {
                            var t = k(o.a.mark((function t() {
                                var e, r, a, n, i;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            e = [], r = _(this.formDict.changePriceData);
                                            try {
                                                for (r.s(); !(a = r.n()).done;) n = a.value, e.push({
                                                    product_id: n.product_id,
                                                    old_price: n.price,
                                                    new_price: n.new_price
                                                })
                                            } catch (o) {
                                                r.e(o)
                                            } finally {
                                                r.f()
                                            }
                                            return t.next = 5, d({
                                                products: e
                                            });
                                        case 5:
                                            i = t.sent, 1 == i.code && this.$message({
                                                message: "改价成功",
                                                type: "success"
                                            });
                                        case 7:
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
                        getPriceRuleData: function() {
                            var t = k(o.a.mark((function t() {
                                var e;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, h({
                                                type_id: this.formData.type_id,
                                                brand_id: this.formData.brand_id,
                                                model_id: this.formData.model_id
                                            });
                                        case 2:
                                            e = t.sent, 1 == e.code && (this.priceRule = e.data);
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
                        }()
                    }
                },
                O = j,
                P = (r("a7d1"), r("5d22")),
                x = Object(P["a"])(O, a, n, !1, null, "38d09fce", null);
            e["default"] = x.exports
        },
        a7d1: function(t, e, r) {
            "use strict";
            r("eb55")
        },
        eb55: function(t, e, r) {}
    }
]);