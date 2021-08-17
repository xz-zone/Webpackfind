(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-60a22798"], {
        "19e6": function(t, e, n) {
            "use strict";
            n.r(e);
            var r = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "app-container"
                    }, [n("el-tabs", {
                        on: {
                            "tab-click": t.handleClick
                        },
                        model: {
                            value: t.activeName,
                            callback: function(e) {
                                t.activeName = e
                            },
                            expression: "activeName"
                        }
                    }, [n("el-tab-pane", {
                        attrs: {
                            label: "全部",
                            name: "all"
                        }
                    }, ["all" == t.activeName ? n("ListComponent") : t._e()], 1), t._v(" "), n("el-tab-pane", {
                        attrs: {
                            label: "录入",
                            name: "0",
                            lazy: ""
                        }
                    }, ["0" == t.activeName ? n("ListComponent", {
                        attrs: {
                            "node-id": "2"
                        }
                    }) : t._e()], 1), t._v(" "), n("el-tab-pane", {
                        attrs: {
                            label: "质检",
                            name: "1",
                            lazy: ""
                        }
                    }, ["1" == t.activeName ? n("ListComponent", {
                        attrs: {
                            "node-id": "3"
                        }
                    }) : t._e()], 1), t._v(" "), n("el-tab-pane", {
                        attrs: {
                            label: "复检",
                            name: "2",
                            lazy: ""
                        }
                    }, ["2" == t.activeName ? n("ListComponent", {
                        attrs: {
                            "node-id": "4"
                        }
                    }) : t._e()], 1), t._v(" "), n("el-tab-pane", {
                        attrs: {
                            label: "编辑",
                            name: "3",
                            lazy: ""
                        }
                    }, ["3" == t.activeName ? n("ListComponent", {
                        attrs: {
                            "node-id": "5"
                        }
                    }) : t._e()], 1), t._v(" "), n("el-tab-pane", {
                        attrs: {
                            label: "上架",
                            name: "4",
                            lazy: ""
                        }
                    }, ["4" == t.activeName ? n("ListComponent", {
                        attrs: {
                            "node-id": "6"
                        }
                    }) : t._e()], 1)], 1)], 1)
                },
                a = [],
                o = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "list-component"
                    }, [n("div", {
                        staticClass: "header-tools"
                    }, [n("el-row", {
                        staticStyle: {
                            width: "100%"
                        }
                    }, [n("el-col", {
                        attrs: {
                            span: 6
                        }
                    }, [n("el-input", {
                        attrs: {
                            placeholder: "错误类型"
                        },
                        nativeOn: {
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.getList(1)
                            }
                        },
                        model: {
                            value: t.search.name,
                            callback: function(e) {
                                t.$set(t.search, "name", e)
                            },
                            expression: "search.name"
                        }
                    })], 1), t._v(" "), n("el-col", {
                        staticStyle: {
                            "margin-left": "20px"
                        },
                        attrs: {
                            span: 3
                        }
                    }, [n("el-button", {
                        attrs: {
                            type: "warning"
                        },
                        on: {
                            click: function(e) {
                                return t.getList(1)
                            }
                        }
                    }, [t._v("查询")]), t._v(" "), n("el-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: function(e) {
                                return t.resetSearch()
                            }
                        }
                    }, [t._v("重置")])], 1)], 1), t._v(" "), t.auth("api/error_type/store") ? n("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.openDialog()
                            }
                        }
                    }, [t._v("新增")]) : t._e()], 1), t._v(" "), n("el-row", {
                        staticClass: "body-list"
                    }, [n("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [n("el-table", {
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
                    }, [n("el-table-column", {
                        attrs: {
                            type: "index",
                            label: "序号",
                            align: "center",
                            width: "80"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "name",
                            label: "错误类型",
                            align: "center"
                        }
                    }), t._v(" "), t.nodeId ? t._e() : n("el-table-column", {
                        attrs: {
                            prop: "node_name",
                            label: "归属环节",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return t._l(e.row.nodes, (function(e, r) {
                                    return n("span", {
                                        key: r
                                    }, [t._v("【" + t._s(e.node_name) + "】")])
                                }))
                            }
                        }], null, !1, 1357224863)
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "添加人",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [e.row.create_user ? n("div", [t._v(t._s(e.row.create_user.real_name))]) : t._e()]
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "created_at",
                            label: "添加时间",
                            align: "center"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "操作",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [n("el-button", {
                                    attrs: {
                                        type: "success",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(n) {
                                            return t.openDialog(e.row)
                                        }
                                    }
                                }, [t._v("编辑")]), t._v(" "), n("el-button", {
                                    attrs: {
                                        type: "danger",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(n) {
                                            return t.removeItem(e.row.id, e.row.name)
                                        }
                                    }
                                }, [t._v("删除")])]
                            }
                        }])
                    })], 1)], 1)], 1), t._v(" "), n("div", {
                        staticClass: "footer-pagination"
                    }, [n("el-pagination", {
                        attrs: {
                            background: "",
                            layout: "total, prev, pager, next, jumper",
                            total: t.total,
                            "current-page": t.search.page,
                            "page-size": 10
                        },
                        on: {
                            "update:currentPage": function(e) {
                                return t.$set(t.search, "page", e)
                            },
                            "update:current-page": function(e) {
                                return t.$set(t.search, "page", e)
                            },
                            "current-change": function(e) {
                                return t.getList()
                            }
                        }
                    })], 1), t._v(" "), n("el-dialog", {
                        staticClass: "err-dialog",
                        attrs: {
                            title: (t.form.id ? "编辑" : "新增") + "错误类型",
                            visible: t.showDialog,
                            width: "35%"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.showDialog = e
                            }
                        }
                    }, [n("el-form", {
                        ref: "err-form",
                        attrs: {
                            model: t.form,
                            rules: t.rules,
                            "label-width": "100px"
                        }
                    }, [n("el-form-item", {
                        attrs: {
                            label: "归属环节",
                            prop: "node_ids"
                        }
                    }, [n("Nodes", {
                        attrs: {
                            multiple: !0,
                            placeholder: "请选择节点"
                        },
                        model: {
                            value: t.form.node_ids,
                            callback: function(e) {
                                t.$set(t.form, "node_ids", e)
                            },
                            expression: "form.node_ids"
                        }
                    })], 1), t._v(" "), n("el-form-item", {
                        attrs: {
                            label: "错误类型",
                            prop: "name"
                        }
                    }, [n("el-input", {
                        attrs: {
                            placeholder: "请输入错误类型"
                        },
                        model: {
                            value: t.form.name,
                            callback: function(e) {
                                t.$set(t.form, "name", e)
                            },
                            expression: "form.name"
                        }
                    })], 1)], 1), t._v(" "), n("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [n("el-button", {
                        on: {
                            click: function(e) {
                                t.showDialog = !1
                            }
                        }
                    }, [t._v("取消")]), t._v(" "), n("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.addRow
                        }
                    }, [t._v("确定")])], 1)], 1)], 1)
                },
                i = [],
                l = n("4838"),
                s = n.n(l),
                u = n("b775");

            function c(t) {
                return Object(u["a"])({
                    url: "/api/error_types",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(u["a"])({
                    url: "/api/error_type/store",
                    method: "post",
                    data: t
                })
            }

            function p(t) {
                return Object(u["a"])({
                    url: "/api/error_type/destroy",
                    method: "post",
                    data: t
                })
            }

            function m(t) {
                return Object(u["a"])({
                    url: "/api/error_type/update",
                    method: "post",
                    data: t
                })
            }
            var f = n("5e61");

            function h(t, e) {
                var n;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = v(t)) || e && t && "number" === typeof t.length) {
                        n && (t = n);
                        var r = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, i = !0,
                    l = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return i = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function v(t, e) {
                if (t) {
                    if ("string" === typeof t) return b(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(t, e) : void 0
                }
            }

            function b(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function g(t, e, n, r, a, o, i) {
                try {
                    var l = t[o](i),
                        s = l.value
                } catch (u) {
                    return void n(u)
                }
                l.done ? e(s) : Promise.resolve(s).then(r, a)
            }

            function _(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = t.apply(e, n);

                        function i(t) {
                            g(o, r, a, i, l, "next", t)
                        }

                        function l(t) {
                            g(o, r, a, i, l, "throw", t)
                        }
                        i(void 0)
                    }))
                }
            }
            var y = {
                    components: {
                        Nodes: f["a"]
                    },
                    props: {
                        nodeId: [String]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            search: {
                                node_id: this.nodeId,
                                name: null,
                                page: 1
                            },
                            total: 0,
                            loading: !1,
                            showDialog: !1,
                            form: {
                                id: null,
                                node_ids: [],
                                name: null
                            },
                            rules: {
                                node_ids: [{
                                    required: !0,
                                    trigger: "blur",
                                    message: "请选择节点"
                                }],
                                name: [{
                                    required: !0,
                                    trigger: "blur",
                                    message: "请输入错误类型"
                                }]
                            },
                            saveLoading: !1,
                            nodes: []
                        }
                    },
                    mounted: function() {
                        this.getList()
                    },
                    methods: {
                        getList: function() {
                            var t = _(s.a.mark((function t(e) {
                                var n;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, e && (this.search.page = 1), this.loading = !0, t.next = 5, c(this.search);
                                        case 5:
                                            n = t.sent, this.loading = !1, this.tableData = n.data.data, this.total = n.data.total, t.next = 14;
                                            break;
                                        case 11:
                                            t.prev = 11, t.t0 = t["catch"](0), this.loading = !1;
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 11]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        addRow: function() {
                            var t = this;
                            this.$refs["err-form"].validate(function() {
                                var e = _(s.a.mark((function e(n) {
                                    var r;
                                    return s.a.wrap((function(e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                if (!n) {
                                                    e.next = 19;
                                                    break
                                                }
                                                if (r = null, e.prev = 2, r = t.$loading({
                                                        target: ".err-dialog .el-dialog"
                                                    }), !t.form.id) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.next = 7, m(t.form);
                                            case 7:
                                                e.next = 11;
                                                break;
                                            case 9:
                                                return e.next = 11, d(t.form);
                                            case 11:
                                                r.close(), t.showDialog = !1, t.getList(), e.next = 19;
                                                break;
                                            case 16:
                                                e.prev = 16, e.t0 = e["catch"](2), r && r.close();
                                            case 19:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [2, 16]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }())
                        },
                        openDialog: function(t) {
                            var e = this;
                            this.showDialog = !0, this.$nextTick((function() {
                                if (e.$refs["err-form"].resetFields(), e.form = {
                                        id: null,
                                        node_ids: [e.search.node_id ? Number(e.search.node_id) : 2],
                                        name: null
                                    }, t) {
                                    var n, r = [],
                                        a = h(t.nodes);
                                    try {
                                        for (a.s(); !(n = a.n()).done;) {
                                            var o = n.value;
                                            r.push(o.node_id)
                                        }
                                    } catch (i) {
                                        a.e(i)
                                    } finally {
                                        a.f()
                                    }
                                    e.form.id = t.id, e.form.node_ids = r, e.form.name = t.name
                                }
                            }))
                        },
                        removeItem: function() {
                            var t = _(s.a.mark((function t(e, n) {
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, this.$confirm("确定删除【".concat(n, "】？"), "提示", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 3:
                                            return this.loading = !0, t.next = 6, p({
                                                id: e
                                            });
                                        case 6:
                                            this.loading = !1, this.getList(), t.next = 13;
                                            break;
                                        case 10:
                                            t.prev = 10, t.t0 = t["catch"](0), this.loading = !1;
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 10]
                                ])
                            })));

                            function e(e, n) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        resetSearch: function() {
                            this.search = {
                                node_id: this.nodeId,
                                name: null,
                                page: 1
                            }, this.getList(1)
                        }
                    }
                },
                w = y,
                k = n("5d22"),
                j = Object(k["a"])(w, o, i, !1, null, "63ed746d", null),
                x = j.exports,
                O = {
                    components: {
                        ListComponent: x
                    },
                    data: function() {
                        return {
                            activeName: "all"
                        }
                    },
                    mounted: function() {},
                    methods: {
                        handleClick: function(t) {
                            console.log(this.activeName)
                        }
                    }
                },
                C = O,
                L = Object(k["a"])(C, r, a, !1, null, "186b9e09", null);
            e["default"] = L.exports
        },
        2934: function(t, e, n) {
            "use strict";
            n.d(e, "p", (function() {
                return a
            })), n.d(e, "d", (function() {
                return o
            })), n.d(e, "i", (function() {
                return i
            })), n.d(e, "m", (function() {
                return l
            })), n.d(e, "b", (function() {
                return s
            })), n.d(e, "g", (function() {
                return u
            })), n.d(e, "k", (function() {
                return c
            })), n.d(e, "j", (function() {
                return d
            })), n.d(e, "h", (function() {
                return p
            })), n.d(e, "n", (function() {
                return m
            })), n.d(e, "a", (function() {
                return f
            })), n.d(e, "l", (function() {
                return h
            })), n.d(e, "q", (function() {
                return v
            })), n.d(e, "f", (function() {
                return b
            })), n.d(e, "o", (function() {
                return g
            })), n.d(e, "c", (function() {
                return _
            })), n.d(e, "e", (function() {
                return y
            }));
            var r = n("b775");

            function a(t) {
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

            function l(t) {
                return Object(r["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
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

            function m(t) {
                return Object(r["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: t
                })
            }

            function f(t) {
                return Object(r["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: t
                })
            }

            function h(t) {
                return Object(r["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: t
                })
            }

            function v(t) {
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

            function g(t) {
                return Object(r["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: t
                })
            }

            function _(t) {
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
        }
    }
]);