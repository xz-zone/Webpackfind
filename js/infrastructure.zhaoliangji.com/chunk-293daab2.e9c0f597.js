(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-293daab2"], {
        "1d20": function(t, e, a) {},
        2934: function(t, e, a) {
            "use strict";
            a.d(e, "p", (function() {
                return n
            })), a.d(e, "d", (function() {
                return o
            })), a.d(e, "i", (function() {
                return i
            })), a.d(e, "m", (function() {
                return s
            })), a.d(e, "b", (function() {
                return l
            })), a.d(e, "g", (function() {
                return u
            })), a.d(e, "k", (function() {
                return c
            })), a.d(e, "j", (function() {
                return d
            })), a.d(e, "h", (function() {
                return p
            })), a.d(e, "n", (function() {
                return _
            })), a.d(e, "a", (function() {
                return m
            })), a.d(e, "l", (function() {
                return f
            })), a.d(e, "q", (function() {
                return h
            })), a.d(e, "f", (function() {
                return b
            })), a.d(e, "o", (function() {
                return v
            })), a.d(e, "c", (function() {
                return g
            })), a.d(e, "e", (function() {
                return y
            }));
            var r = a("b775");

            function n(t) {
                return Object(r["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(r["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(r["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(r["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: t
                })
            }

            function l(t) {
                return Object(r["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(r["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(r["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(r["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(r["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: t
                })
            }

            function _(t) {
                return Object(r["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: t
                })
            }

            function m(t) {
                return Object(r["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: t
                })
            }

            function f(t) {
                return Object(r["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: t
                })
            }

            function h(t) {
                return Object(r["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: t
                })
            }

            function b(t) {
                return Object(r["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: t
                })
            }

            function v(t) {
                return Object(r["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: t
                })
            }

            function g(t) {
                return Object(r["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: t
                })
            }

            function y(t) {
                return Object(r["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: t
                })
            }
        },
        "95eb": function(t, e, a) {
            "use strict";
            a.r(e);
            var r = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "app-container"
                    }, [a("el-tabs", {
                        model: {
                            value: t.activeName,
                            callback: function(e) {
                                t.activeName = e
                            },
                            expression: "activeName"
                        }
                    }, [a("el-tab-pane", {
                        attrs: {
                            label: "全部",
                            name: "all"
                        }
                    }, [a("ListComponent")], 1), t._v(" "), a("el-tab-pane", {
                        attrs: {
                            label: "待编辑（" + t.listTotal[0] + "）",
                            name: "0"
                        }
                    }, [a("ListComponent", {
                        attrs: {
                            "dispose-status": "0",
                            "header-total": t.listTotal[0]
                        },
                        on: {
                            "update:headerTotal": function(e) {
                                return t.$set(t.listTotal, 0, e)
                            },
                            "update:header-total": function(e) {
                                return t.$set(t.listTotal, 0, e)
                            }
                        }
                    })], 1), t._v(" "), a("el-tab-pane", {
                        attrs: {
                            label: "待上架（" + t.listTotal[1] + "）",
                            name: "1"
                        }
                    }, [a("ListComponent", {
                        attrs: {
                            "dispose-status": "1",
                            "header-total": t.listTotal[1]
                        },
                        on: {
                            "update:headerTotal": function(e) {
                                return t.$set(t.listTotal, 1, e)
                            },
                            "update:header-total": function(e) {
                                return t.$set(t.listTotal, 1, e)
                            }
                        }
                    })], 1), t._v(" "), a("el-tab-pane", {
                        attrs: {
                            label: "已上架（" + t.listTotal[2] + "）",
                            name: "2"
                        }
                    }, [a("ListComponent", {
                        attrs: {
                            "dispose-status": "2",
                            "header-total": t.listTotal[2]
                        },
                        on: {
                            "update:headerTotal": function(e) {
                                return t.$set(t.listTotal, 2, e)
                            },
                            "update:header-total": function(e) {
                                return t.$set(t.listTotal, 2, e)
                            }
                        }
                    })], 1), t._v(" "), a("el-tab-pane", {
                        attrs: {
                            label: "已下架（" + t.listTotal[3] + "）",
                            name: "3"
                        }
                    }, [a("ListComponent", {
                        attrs: {
                            "dispose-status": "3",
                            "header-total": t.listTotal[3]
                        },
                        on: {
                            "update:headerTotal": function(e) {
                                return t.$set(t.listTotal, 3, e)
                            },
                            "update:header-total": function(e) {
                                return t.$set(t.listTotal, 3, e)
                            }
                        }
                    })], 1)], 1)], 1)
                },
                n = [],
                o = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", [a("div", {
                        attrs: {
                            label: "全部",
                            name: "first"
                        }
                    }, [a("el-row", {
                        staticClass: "header-search"
                    }, [a("el-col", {
                        attrs: {
                            lg: 24
                        }
                    }, [a("div", {
                        staticClass: "search-item"
                    }, [a("el-date-picker", {
                        attrs: {
                            clearable: "",
                            type: "datetimerange",
                            "range-separator": "-",
                            "start-placeholder": "编辑时间",
                            "end-placeholder": "结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"]
                        },
                        model: {
                            value: t.search.deal_at,
                            callback: function(e) {
                                t.$set(t.search, "deal_at", e)
                            },
                            expression: "search.deal_at"
                        }
                    })], 1), t._v(" "), a("div", {
                        staticClass: "search-item"
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "业务类型"
                        },
                        model: {
                            value: t.search.business_type,
                            callback: function(e) {
                                t.$set(t.search, "business_type", e)
                            },
                            expression: "search.business_type"
                        }
                    }, [a("el-option", {
                        attrs: {
                            label: "自营",
                            value: "0"
                        }
                    }), t._v(" "), a("el-option", {
                        attrs: {
                            label: "市场代卖",
                            value: "1"
                        }
                    }), t._v(" "), a("el-option", {
                        attrs: {
                            label: "回收",
                            value: "2"
                        }
                    }), t._v(" "), a("el-option", {
                        attrs: {
                            label: "保卖",
                            value: "3"
                        }
                    })], 1)], 1), t._v(" "), a("div", {
                        staticClass: "search-item"
                    }, [a("el-input", {
                        attrs: {
                            placeholder: "流转单号"
                        },
                        model: {
                            value: t.search.transfer_order_no,
                            callback: function(e) {
                                t.$set(t.search, "transfer_order_no", e)
                            },
                            expression: "search.transfer_order_no"
                        }
                    })], 1), t._v(" "), a("div", {
                        staticClass: "search-item"
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "供应商"
                        },
                        model: {
                            value: t.search.supplier_id,
                            callback: function(e) {
                                t.$set(t.search, "supplier_id", e)
                            },
                            expression: "search.supplier_id"
                        }
                    }, t._l(t.dict.supplier, (function(t) {
                        return a("el-option", {
                            key: t.suppiler_id,
                            attrs: {
                                label: t.name,
                                value: t.suppiler_id
                            }
                        })
                    })), 1)], 1)]), t._v(" "), a("el-col", {
                        staticClass: "same-width",
                        attrs: {
                            lg: 24
                        }
                    }, [a("div", {
                        staticClass: "search-item"
                    }, [a("el-input", {
                        attrs: {
                            placeholder: "IMEI号"
                        },
                        model: {
                            value: t.search.imei,
                            callback: function(e) {
                                t.$set(t.search, "imei", e)
                            },
                            expression: "search.imei"
                        }
                    })], 1), t._v(" "), a("TypeBrandModel", {
                        attrs: {
                            level: 3,
                            dict: t.dict
                        },
                        model: {
                            value: t.search,
                            callback: function(e) {
                                t.search = e
                            },
                            expression: "search"
                        }
                    })], 1), t._v(" "), a("el-col", {
                        attrs: {
                            lg: 24
                        }
                    }, [a("div", {
                        staticClass: "search-item"
                    }, [a("userList", {
                        attrs: {
                            placeholder: "编辑人"
                        },
                        model: {
                            value: t.search.deal_user_ids,
                            callback: function(e) {
                                t.$set(t.search, "deal_user_ids", e)
                            },
                            expression: "search.deal_user_ids"
                        }
                    })], 1)])], 1), t._v(" "), a("div", {
                        staticClass: "header-tools"
                    }, [a("div", [a("el-button", {
                        attrs: {
                            type: "warning"
                        },
                        on: {
                            click: t.getGoodsListData
                        }
                    }, [t._v("查询")]), t._v(" "), a("el-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: t.handleClickReset
                        }
                    }, [t._v("重置")]), t._v(" "), a("el-button", {
                        attrs: {
                            type: "primary",
                            disabled: t.disabledPrcie
                        },
                        on: {
                            click: t.handleChangePrice
                        }
                    }, [t._v("批量改价")]), t._v(" "), a("el-button", {
                        attrs: {
                            type: "primary",
                            disabled: t.disabledParams
                        },
                        on: {
                            click: t.handleChangeArgument
                        }
                    }, [t._v("批量修改参数")]), t._v(" "), a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.handleExporReport
                        }
                    }, [t._v("导出报表")])], 1), t._v(" "), a("div", [a("el-tag", {
                        attrs: {
                            type: "warning"
                        }
                    }, [t._v("总数量：" + t._s(t.total))])], 1)]), t._v(" "), a("el-row", {
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
                            prop: "product_id",
                            label: "商品ID",
                            width: "100",
                            align: "center"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "商品",
                            width: "200",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [a("div", {
                                    staticClass: "goods"
                                }, [a("img", {
                                    staticClass: "goods-pic",
                                    attrs: {
                                        src: e.row.main_pic,
                                        alt: ""
                                    }
                                }), t._v(" "), a("span", [t._v(t._s(e.row.product_name))])])]
                            }
                        }])
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "参数信息",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [a("span", {
                                    domProps: {
                                        innerHTML: t._s(e.row.sale_props_str)
                                    }
                                })]
                            }
                        }])
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "价格"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [a("div", [t._v("成本: " + t._s(e.row.cost))]), t._v(" "), a("div", [t._v("售价: " + t._s(e.row.price))])]
                            }
                        }])
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "供应商",
                            width: "180"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [a("div", [t._v("采购单: " + t._s(e.row.purchase_order_no))]), t._v(" "), a("div", [t._v("业务: " + t._s(e.row.business_name))]), t._v(" "), a("div", [t._v("供应商: " + t._s(e.row.suppiler_name))])]
                            }
                        }])
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "仓库",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [a("div", [t._v("所在位置: " + t._s(e.row.warehouse_name))])]
                            }
                        }])
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "product_status_name",
                            label: "上架状态",
                            align: "center"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "编辑时间",
                            width: "200",
                            align: "center"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "编辑人",
                            width: "200",
                            align: "center"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "操作",
                            align: "center",
                            width: "200"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "editor-receive-detail",
                                            query: {
                                                id: e.row.product_id,
                                                view: "view"
                                            }
                                        }
                                    }
                                }, [a("el-button", {
                                    attrs: {
                                        type: "primary",
                                        size: "small",
                                        plain: ""
                                    }
                                }, [t._v("查看")])], 1), t._v(" "), a("router-link", {
                                    attrs: {
                                        to: {
                                            name: "editor-receive-detail",
                                            query: {
                                                id: e.row.product_id
                                            }
                                        }
                                    }
                                }, [a("el-button", {
                                    attrs: {
                                        type: "primary",
                                        size: "small",
                                        plain: ""
                                    }
                                }, [t._v("编辑")])], 1)]
                            }
                        }])
                    })], 1)], 1)], 1), t._v(" "), a("div", {
                        staticClass: "footer-pagination"
                    }, [a("el-pagination", {
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
                                return t.getGoodsListData()
                            }
                        }
                    })], 1)], 1)])
                },
                i = [],
                s = a("4838"),
                l = a.n(s),
                u = a("2934"),
                c = a("f4c4"),
                d = a("1504"),
                p = a("c35b");

            function _(t, e, a, r, n, o, i) {
                try {
                    var s = t[o](i),
                        l = s.value
                } catch (u) {
                    return void a(u)
                }
                s.done ? e(l) : Promise.resolve(l).then(r, n)
            }

            function m(t) {
                return function() {
                    var e = this,
                        a = arguments;
                    return new Promise((function(r, n) {
                        var o = t.apply(e, a);

                        function i(t) {
                            _(o, r, n, i, s, "next", t)
                        }

                        function s(t) {
                            _(o, r, n, i, s, "throw", t)
                        }
                        i(void 0)
                    }))
                }
            }
            var f = {
                    props: {
                        disposeStatus: [String],
                        headerTotal: [Number]
                    },
                    components: {
                        TypeBrandModel: d["a"],
                        UserList: p["a"]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            dict: {
                                supplier: []
                            },
                            search: {
                                page: 1,
                                deal_at: [],
                                business_type: [],
                                supplier_id: null,
                                imei: null,
                                deal_user_ids: null,
                                type_id: null,
                                brand_id: null,
                                model_id: null,
                                transfer_order_no: null
                            },
                            total: 0,
                            loading: !1
                        }
                    },
                    mounted: function() {
                        this.search.transfer_order_no = this.$route.query.no, this.getList(), this.getSuppliers()
                    },
                    methods: {
                        getList: function() {
                            var t = m(l.a.mark((function t() {
                                var e;
                                return l.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(c["k"])(this.search);
                                        case 2:
                                            e = t.sent, this.tableData = e.data.data, this.total = e.data.total;
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
                        getSuppliers: function() {
                            var t = m(l.a.mark((function t() {
                                var e;
                                return l.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(u["n"])();
                                        case 2:
                                            e = t.sent, this.dict.supplier = e.data;
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
                h = f,
                b = (a("9eb9"), a("5d22")),
                v = Object(b["a"])(h, o, i, !1, null, "e44b420c", null),
                g = v.exports,
                y = {
                    components: {
                        ListComponent: g
                    },
                    data: function() {
                        return {
                            activeName: "all",
                            listTotal: [0, 0, 0, 0]
                        }
                    },
                    mounted: function() {},
                    methods: {}
                },
                w = y,
                j = Object(b["a"])(w, r, n, !1, null, null, null);
            e["default"] = j.exports
        },
        "9eb9": function(t, e, a) {
            "use strict";
            a("1d20")
        },
        f4c4: function(t, e, a) {
            "use strict";
            a.d(e, "h", (function() {
                return n
            })), a.d(e, "d", (function() {
                return o
            })), a.d(e, "e", (function() {
                return i
            })), a.d(e, "c", (function() {
                return s
            })), a.d(e, "g", (function() {
                return l
            })), a.d(e, "l", (function() {
                return u
            })), a.d(e, "n", (function() {
                return c
            })), a.d(e, "m", (function() {
                return d
            })), a.d(e, "b", (function() {
                return p
            })), a.d(e, "f", (function() {
                return _
            })), a.d(e, "i", (function() {
                return m
            })), a.d(e, "p", (function() {
                return f
            })), a.d(e, "k", (function() {
                return h
            })), a.d(e, "j", (function() {
                return b
            })), a.d(e, "o", (function() {
                return v
            })), a.d(e, "a", (function() {
                return g
            })), a.d(e, "q", (function() {
                return y
            }));
            var r = a("b775");

            function n(t) {
                return Object(r["a"])({
                    url: "/api/edit/my_receive",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(r["a"])({
                    url: "/api/edit/show_receive_order",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(r["a"])({
                    url: "/api/edit/edit_view",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(r["a"])({
                    url: "/api/brief_templates",
                    method: "get",
                    params: t
                })
            }

            function l(t) {
                return Object(r["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(r["a"])({
                    url: "api/public/product/oss_upload_sts_token_for_web",
                    method: "get",
                    data: t
                })
            }

            function c(t) {
                return Object(r["a"])({
                    url: "/api/edit/image_upload",
                    method: "post",
                    data: t,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            }

            function d(t) {
                return Object(r["a"])({
                    url: "/api/input/get_brand",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(r["a"])({
                    url: "/api/input/get_model",
                    method: "get",
                    params: t
                })
            }

            function _(t) {
                return Object(r["a"])({
                    url: "/api/product/goods_conditions",
                    method: "get",
                    params: t
                })
            }

            function m(t) {
                return Object(r["a"])({
                    url: "/api/product/pricing_rules",
                    method: "post",
                    data: t
                })
            }

            function f(t) {
                return Object(r["a"])({
                    url: "/api/edit/edit_save",
                    method: "post",
                    data: t
                })
            }

            function h(t) {
                return Object(r["a"])({
                    url: "/api/input/products_search",
                    method: "get",
                    params: t
                })
            }

            function b(t) {
                return Object(r["a"])({
                    url: "/api/error_report/product_error_reports",
                    method: "get",
                    params: t
                })
            }

            function v(t) {
                return Object(r["a"])({
                    url: "/api/error_report/mark_handled",
                    method: "post",
                    data: t
                })
            }

            function g(t) {
                return Object(r["a"])({
                    url: "/api/phone_appearance/datas",
                    method: "get",
                    params: t
                })
            }

            function y(t) {
                return Object(r["a"])({
                    url: "/api/product/save_zz_color_id",
                    method: "post",
                    data: t
                })
            }
        }
    }
]);