(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-0a2b9689"], {
        "032d": function(e, t, r) {
            "use strict";
            r.r(t);
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "app-container"
                    }, [r("el-row", {
                        staticClass: "header-search"
                    }, [r("el-col", {
                        staticClass: "wrap",
                        attrs: {
                            span: 21
                        }
                    }, [r("div", {
                        staticClass: "search-item"
                    }, [r("el-input", {
                        attrs: {
                            clearable: "",
                            placeholder: "用户名"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getUsersData(1)
                            }
                        },
                        model: {
                            value: e.search.name,
                            callback: function(t) {
                                e.$set(e.search, "name", t)
                            },
                            expression: "search.name"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-input", {
                        attrs: {
                            clearable: "",
                            placeholder: "手机号"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getUsersData(1)
                            }
                        },
                        model: {
                            value: e.search.mobile,
                            callback: function(t) {
                                e.$set(e.search, "mobile", t)
                            },
                            expression: "search.mobile"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("UserList", {
                        attrs: {
                            hasUser: !0,
                            multiple: !0,
                            placeholder: "部门"
                        },
                        model: {
                            value: e.search.receive_user_ids,
                            callback: function(t) {
                                e.$set(e.search, "receive_user_ids", t)
                            },
                            expression: "search.receive_user_ids"
                        }
                    })], 1)]), e._v(" "), r("el-col", {
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
                                return e.getUsersData(1)
                            }
                        }
                    }, [e._v("查询")]), e._v(" "), r("el-button", {
                        on: {
                            click: e.handleClickReset
                        }
                    }, [e._v("重置")])], 1)], 1), e._v(" "), r("div", {
                        staticClass: "body-list"
                    }, [r("el-table", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: e.loading,
                            expression: "loading"
                        }],
                        attrs: {
                            data: e.tableData,
                            "max-height": e.getClientHeight(220),
                            border: ""
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            type: "index",
                            width: "80",
                            align: "center",
                            label: "序号"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "username",
                            align: "center",
                            label: "用户名",
                            width: "100"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "姓名",
                            align: "center",
                            width: "100"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [0 == t.row.is_department_leader ? r("div", [e._v(e._s(t.row.real_name))]) : 1 == t.row.is_department_leader ? r("div", [e._v("\n            " + e._s(t.row.real_name) + "\n            "), r("el-tag", {
                                    attrs: {
                                        type: "success",
                                        size: "small"
                                    }
                                }, [e._v("主")])], 1) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "mobile",
                            label: "手机号",
                            align: "center",
                            width: "110"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "root_department_name",
                            label: "根部门",
                            align: "center",
                            width: "100"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "department_name",
                            label: "子部门",
                            align: "center",
                            width: "100"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "created_at",
                            label: "创建时间",
                            align: "center",
                            width: "155"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "站点数据权限",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("el-select", {
                                    attrs: {
                                        filterable: "",
                                        clearable: "",
                                        multiple: "",
                                        placeholder: "请选择区域"
                                    },
                                    on: {
                                        change: function(r) {
                                            return e.handleChangeArea(t.row.warehouse_area_ids_arr, t.row.id)
                                        }
                                    },
                                    model: {
                                        value: t.row.warehouse_area_ids_arr,
                                        callback: function(r) {
                                            e.$set(t.row, "warehouse_area_ids_arr", r)
                                        },
                                        expression: "scope.row.warehouse_area_ids_arr"
                                    }
                                }, e._l(e.area, (function(e, t) {
                                    return r("el-option", {
                                        key: t,
                                        attrs: {
                                            label: e,
                                            value: t
                                        }
                                    })
                                })), 1)]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "业务线权限",
                            align: "center",
                            width: "140"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("el-select", {
                                    attrs: {
                                        filterable: "",
                                        clearable: "",
                                        multiple: "",
                                        placeholder: "请选择业务线"
                                    },
                                    on: {
                                        change: function(r) {
                                            return e.handleChangeArea(null, t.row.id, t.row.business_line_ids_arr)
                                        }
                                    },
                                    model: {
                                        value: t.row.business_line_ids_arr,
                                        callback: function(r) {
                                            e.$set(t.row, "business_line_ids_arr", r)
                                        },
                                        expression: "scope.row.business_line_ids_arr"
                                    }
                                }, [r("el-option", {
                                    attrs: {
                                        label: "B2C",
                                        value: 1
                                    }
                                }), e._v(" "), r("el-option", {
                                    attrs: {
                                        label: "C2C",
                                        value: 2
                                    }
                                }), e._v(" "), r("el-option", {
                                    attrs: {
                                        label: "C2B",
                                        value: 3
                                    }
                                })], 1)]
                            }
                        }])
                    })], 1)], 1), e._v(" "), r("div", {
                        staticClass: "footer-pagination"
                    }, [r("el-pagination", {
                        attrs: {
                            background: "",
                            layout: "total, prev, pager, next, jumper",
                            total: e.total,
                            "current-page": e.search.page,
                            "page-size": e.search.per_page
                        },
                        on: {
                            "update:currentPage": function(t) {
                                return e.$set(e.search, "page", t)
                            },
                            "update:current-page": function(t) {
                                return e.$set(e.search, "page", t)
                            },
                            "update:pageSize": function(t) {
                                return e.$set(e.search, "per_page", t)
                            },
                            "update:page-size": function(t) {
                                return e.$set(e.search, "per_page", t)
                            },
                            "current-change": function(t) {
                                return e.getUsersData()
                            }
                        }
                    })], 1)], 1)
                },
                n = [],
                i = r("4838"),
                u = r.n(i),
                s = r("c40e"),
                o = r("c35b");

            function c(e, t) {
                var r;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = l(e)) || t && e && "number" === typeof e.length) {
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
                var i, u = !0,
                    s = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next();
                        return u = e.done, e
                    },
                    e: function(e) {
                        s = !0, i = e
                    },
                    f: function() {
                        try {
                            u || null == r.return || r.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function l(e, t) {
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

            function d(e, t, r, a, n, i, u) {
                try {
                    var s = e[i](u),
                        o = s.value
                } catch (c) {
                    return void r(c)
                }
                s.done ? t(o) : Promise.resolve(o).then(a, n)
            }

            function h(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(a, n) {
                        var i = e.apply(t, r);

                        function u(e) {
                            d(i, a, n, u, s, "next", e)
                        }

                        function s(e) {
                            d(i, a, n, u, s, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var f = {
                    name: "Warehouse",
                    components: {
                        UserList: o["a"]
                    },
                    data: function() {
                        return {
                            search: {
                                name: null,
                                mobile: null,
                                receive_user_ids: null,
                                page: 1,
                                per_page: 20
                            },
                            total: null,
                            loading: !1,
                            area: null,
                            tableData: [],
                            pageData: {}
                        }
                    },
                    created: function() {
                        this.getWarehouseData()
                    },
                    mounted: function() {
                        this.getUsersData()
                    },
                    methods: {
                        getUsersData: function() {
                            var e = h(u.a.mark((function e(t) {
                                var r;
                                return u.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t && (this.search.page = 1), this.loading = !0, e.next = 4, Object(s["e"])({
                                                name: this.search.name,
                                                mobile: this.search.mobile,
                                                receive_user_ids: this.search.receive_user_ids,
                                                page: this.search.page,
                                                per_page: this.search.per_page
                                            });
                                        case 4:
                                            r = e.sent, 1 == r.code && (this.tableData = r.data.data, this.pageData = JSON.parse(JSON.stringify(r.data)), this.total = r.data.total, this.loading = !1);
                                        case 6:
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
                        getWarehouseData: function() {
                            var e = h(u.a.mark((function e() {
                                var t;
                                return u.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(s["f"])();
                                        case 2:
                                            t = e.sent, 1 == t.code && (this.area = t.data);
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
                        handleChangeArea: function() {
                            var e = h(u.a.mark((function e(t, r, a) {
                                var n, i, o, l, p, d;
                                return u.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, n = {
                                                user_id: r
                                            }, t && (n.area_ids = t), a && (n.business_line_ids = a), e.next = 6, Object(s["g"])(n);
                                        case 6:
                                            this.$message({
                                                message: "绑定成功",
                                                type: "success"
                                            }), this.getUsersData(), e.next = 15;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e["catch"](0), o = c(this.pageData.data);
                                            try {
                                                for (o.s(); !(l = o.n()).done;) p = l.value, p.id == r && (i = p.warehouse_area_ids_arr)
                                            } catch (u) {
                                                o.e(u)
                                            } finally {
                                                o.f()
                                            }
                                            for (d = 0; d < this.tableData.length; d++) this.tableData[d].id == r && (this.$set(this.tableData[d], "warehouse_area_ids_arr", i), this.$forceUpdate());
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 10]
                                ])
                            })));

                            function t(t, r, a) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        handleClickReset: function() {
                            this.search = {
                                name: null,
                                mobile: null,
                                receive_user_ids: null,
                                page: 1,
                                per_page: 20
                            }, this.getUsersData()
                        }
                    }
                },
                m = f,
                _ = r("5d22"),
                b = Object(_["a"])(m, a, n, !1, null, null, null);
            t["default"] = b.exports
        },
        2934: function(e, t, r) {
            "use strict";
            r.d(t, "p", (function() {
                return n
            })), r.d(t, "d", (function() {
                return i
            })), r.d(t, "i", (function() {
                return u
            })), r.d(t, "m", (function() {
                return s
            })), r.d(t, "b", (function() {
                return o
            })), r.d(t, "g", (function() {
                return c
            })), r.d(t, "k", (function() {
                return l
            })), r.d(t, "j", (function() {
                return p
            })), r.d(t, "h", (function() {
                return d
            })), r.d(t, "n", (function() {
                return h
            })), r.d(t, "a", (function() {
                return f
            })), r.d(t, "l", (function() {
                return m
            })), r.d(t, "q", (function() {
                return _
            })), r.d(t, "f", (function() {
                return b
            })), r.d(t, "o", (function() {
                return g
            })), r.d(t, "c", (function() {
                return v
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

            function i(e) {
                return Object(a["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: e
                })
            }

            function u(e) {
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

            function o(e) {
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

            function d(e) {
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

            function m(e) {
                return Object(a["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: e
                })
            }

            function _(e) {
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

            function v(e) {
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
        c40e: function(e, t, r) {
            "use strict";
            r.d(t, "c", (function() {
                return n
            })), r.d(t, "j", (function() {
                return i
            })), r.d(t, "a", (function() {
                return u
            })), r.d(t, "h", (function() {
                return s
            })), r.d(t, "d", (function() {
                return o
            })), r.d(t, "b", (function() {
                return c
            })), r.d(t, "k", (function() {
                return l
            })), r.d(t, "i", (function() {
                return p
            })), r.d(t, "e", (function() {
                return d
            })), r.d(t, "f", (function() {
                return h
            })), r.d(t, "g", (function() {
                return f
            }));
            var a = r("b775");

            function n(e) {
                return Object(a["a"])({
                    url: "/api/brief_templates",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(a["a"])({
                    url: "/api/brief_template/update",
                    method: "post",
                    data: e
                })
            }

            function u(e) {
                return Object(a["a"])({
                    url: "/api/brief_template/store",
                    method: "post",
                    data: e
                })
            }

            function s(e) {
                return Object(a["a"])({
                    url: "/api/brief_template/destroy",
                    method: "post",
                    data: e
                })
            }

            function o(e) {
                return Object(a["a"])({
                    url: "/api/tags",
                    method: "get",
                    params: e
                })
            }

            function c(e) {
                return Object(a["a"])({
                    url: "/api/tag/store",
                    method: "post",
                    data: e
                })
            }

            function l(e) {
                return Object(a["a"])({
                    url: "/api/tag/update",
                    method: "post",
                    data: e
                })
            }

            function p(e) {
                return Object(a["a"])({
                    url: "/api/tag/destroy",
                    method: "post",
                    data: e
                })
            }

            function d(e) {
                return Object(a["a"])({
                    url: "/api/users",
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

            function f(e) {
                return Object(a["a"])({
                    url: "/api/user/binding_warehouse_area",
                    method: "post",
                    data: e
                })
            }
        }
    }
]);