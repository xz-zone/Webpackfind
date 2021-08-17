(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-159b4e2c"], {
        4704: function(t, e, a) {
            "use strict";
            a("9d85")
        },
        9893: function(t, e, a) {
            "use strict";
            a.r(e);
            var r = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "app-container"
                    }, [a("div", {
                        staticClass: "header-tools"
                    }, [a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.openAddDialog
                        }
                    }, [t._v("新增")])], 1), t._v(" "), a("el-row", {
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
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            type: "index",
                            label: "序号",
                            align: "center",
                            width: "80"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "title",
                            label: "标题",
                            "header-align": "center",
                            width: "180"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "content",
                            label: "内容",
                            "header-align": "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [a("div", {
                                    staticClass: "longtext",
                                    on: {
                                        click: t.toggleContent
                                    }
                                }, [t._v(t._s(e.row.content))])]
                            }
                        }])
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "sort",
                            label: "排序值",
                            width: "100",
                            align: "center"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "created_at",
                            label: "创建时间",
                            width: "160",
                            align: "center"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "update_at",
                            label: "更新时间",
                            width: "160",
                            align: "center"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "操作",
                            width: "150",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [a("el-button", {
                                    attrs: {
                                        type: "success",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(a) {
                                            return t.openEditDialog(e.row)
                                        }
                                    }
                                }, [t._v("编辑")]), t._v(" "), a("el-button", {
                                    attrs: {
                                        type: "danger",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(a) {
                                            return t.removeItem(e.row.b_id, e.row.title)
                                        }
                                    }
                                }, [t._v("删除")])]
                            }
                        }])
                    })], 1)], 1)], 1), t._v(" "), a("el-dialog", {
                        attrs: {
                            title: t.formData.b_id ? "编辑" : "新增",
                            visible: t.showFormDialog,
                            width: "40%"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.showFormDialog = e
                            }
                        }
                    }, [a("el-form", {
                        ref: "formRef",
                        attrs: {
                            model: t.formData,
                            rules: t.rules,
                            "label-width": "130px"
                        }
                    }, [a("el-form-item", {
                        attrs: {
                            label: "标题：",
                            prop: "title"
                        }
                    }, [a("el-input", {
                        attrs: {
                            placeholder: "请输入标题"
                        },
                        model: {
                            value: t.formData.title,
                            callback: function(e) {
                                t.$set(t.formData, "title", e)
                            },
                            expression: "formData.title"
                        }
                    })], 1), t._v(" "), a("el-form-item", {
                        attrs: {
                            label: "内容：",
                            prop: "content"
                        }
                    }, [a("el-input", {
                        attrs: {
                            type: "textarea",
                            rows: "5",
                            placeholder: "请输入内容"
                        },
                        model: {
                            value: t.formData.content,
                            callback: function(e) {
                                t.$set(t.formData, "content", e)
                            },
                            expression: "formData.content"
                        }
                    })], 1), t._v(" "), a("el-form-item", {
                        attrs: {
                            label: "排序值：",
                            prop: "sort"
                        }
                    }, [a("el-input", {
                        attrs: {
                            type: "number",
                            placeholder: "请输入排序值"
                        },
                        model: {
                            value: t.formData.sort,
                            callback: function(e) {
                                t.$set(t.formData, "sort", e)
                            },
                            expression: "formData.sort"
                        }
                    })], 1)], 1), t._v(" "), a("span", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [a("el-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: function(e) {
                                t.showFormDialog = !1
                            }
                        }
                    }, [t._v("取消")]), t._v(" "), a("el-button", {
                        attrs: {
                            type: "primary",
                            loading: t.formLoading
                        },
                        on: {
                            click: t.save
                        }
                    }, [t._v("确 定")])], 1)], 1)], 1)
                },
                n = [],
                o = a("4838"),
                i = a.n(o),
                s = a("c40e");

            function l(t, e, a, r, n, o, i) {
                try {
                    var s = t[o](i),
                        l = s.value
                } catch (c) {
                    return void a(c)
                }
                s.done ? e(l) : Promise.resolve(l).then(r, n)
            }

            function c(t) {
                return function() {
                    var e = this,
                        a = arguments;
                    return new Promise((function(r, n) {
                        var o = t.apply(e, a);

                        function i(t) {
                            l(o, r, n, i, s, "next", t)
                        }

                        function s(t) {
                            l(o, r, n, i, s, "throw", t)
                        }
                        i(void 0)
                    }))
                }
            }
            var u = {
                    name: "GoodsLibDescription",
                    data: function() {
                        return {
                            tableData: [],
                            loading: !1,
                            showFormDialog: !1,
                            formLoading: !1,
                            formData: {
                                b_id: "",
                                title: "",
                                content: "",
                                sort: ""
                            },
                            rules: {
                                title: [{
                                    required: !0,
                                    message: "请输入标题",
                                    trigger: "blur"
                                }],
                                content: [{
                                    required: !0,
                                    message: "请输入内容",
                                    trigger: "blur"
                                }],
                                sort: [{
                                    required: !0,
                                    message: "请输入排序值",
                                    trigger: "blur"
                                }]
                            }
                        }
                    },
                    mounted: function() {
                        this.getList()
                    },
                    methods: {
                        getList: function() {
                            var t = c(i.a.mark((function t() {
                                var e;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return this.loading = !0, t.next = 3, Object(s["c"])({});
                                        case 3:
                                            e = t.sent, this.loading = !1, this.tableData = e.data;
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
                        openEditDialog: function(t) {
                            var e = this;
                            this.showFormDialog = !0, this.$nextTick((function() {
                                e.$refs["formRef"].resetFields(), e.formData.b_id = t.b_id, e.formData.title = t.title, e.formData.content = t.content, e.formData.sort = t.sort
                            }))
                        },
                        openAddDialog: function() {
                            var t = this;
                            this.showFormDialog = !0, this.$nextTick((function() {
                                t.formData.b_id = "", t.$refs["formRef"].resetFields()
                            }))
                        },
                        save: function() {
                            var t = this;
                            try {
                                this.$refs["formRef"].validate(function() {
                                    var e = c(i.a.mark((function e(a) {
                                        return i.a.wrap((function(e) {
                                            while (1) switch (e.prev = e.next) {
                                                case 0:
                                                    if (!a) {
                                                        e.next = 19;
                                                        break
                                                    }
                                                    if (e.prev = 1, t.formLoading = !0, t.formData.b_id) {
                                                        e.next = 8;
                                                        break
                                                    }
                                                    return e.next = 6, Object(s["a"])(t.formData);
                                                case 6:
                                                    e.next = 10;
                                                    break;
                                                case 8:
                                                    return e.next = 10, Object(s["j"])(t.formData);
                                                case 10:
                                                    t.formLoading = !1, t.$message.success("保存成功！"), t.showFormDialog = !1, t.getList(), e.next = 19;
                                                    break;
                                                case 16:
                                                    e.prev = 16, e.t0 = e["catch"](1), t.formLoading = !1;
                                                case 19:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [1, 16]
                                        ])
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }())
                            } catch (e) {
                                this.formLoading = !1
                            }
                        },
                        removeItem: function() {
                            var t = c(i.a.mark((function t(e, a) {
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, this.$confirm("确定要删除【" + a + "】", "提示", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 3:
                                            return this.loading = !0, t.next = 6, Object(s["h"])({
                                                b_id: e
                                            });
                                        case 6:
                                            this.loading = !1, this.getList(), this.$message.success("删除成功！"), t.next = 14;
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

                            function e(e, a) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        toggleContent: function(t) {
                            t.target.classList = "" != t.target.classList ? "" : "longtext"
                        }
                    }
                },
                d = u,
                f = (a("4704"), a("5d22")),
                p = Object(f["a"])(d, r, n, !1, null, "79168a9a", null);
            e["default"] = p.exports
        },
        "9d85": function(t, e, a) {},
        c40e: function(t, e, a) {
            "use strict";
            a.d(e, "c", (function() {
                return n
            })), a.d(e, "j", (function() {
                return o
            })), a.d(e, "a", (function() {
                return i
            })), a.d(e, "h", (function() {
                return s
            })), a.d(e, "d", (function() {
                return l
            })), a.d(e, "b", (function() {
                return c
            })), a.d(e, "k", (function() {
                return u
            })), a.d(e, "i", (function() {
                return d
            })), a.d(e, "e", (function() {
                return f
            })), a.d(e, "f", (function() {
                return p
            })), a.d(e, "g", (function() {
                return m
            }));
            var r = a("b775");

            function n(t) {
                return Object(r["a"])({
                    url: "/api/brief_templates",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(r["a"])({
                    url: "/api/brief_template/update",
                    method: "post",
                    data: t
                })
            }

            function i(t) {
                return Object(r["a"])({
                    url: "/api/brief_template/store",
                    method: "post",
                    data: t
                })
            }

            function s(t) {
                return Object(r["a"])({
                    url: "/api/brief_template/destroy",
                    method: "post",
                    data: t
                })
            }

            function l(t) {
                return Object(r["a"])({
                    url: "/api/tags",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(r["a"])({
                    url: "/api/tag/store",
                    method: "post",
                    data: t
                })
            }

            function u(t) {
                return Object(r["a"])({
                    url: "/api/tag/update",
                    method: "post",
                    data: t
                })
            }

            function d(t) {
                return Object(r["a"])({
                    url: "/api/tag/destroy",
                    method: "post",
                    data: t
                })
            }

            function f(t) {
                return Object(r["a"])({
                    url: "/api/users",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(r["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: t
                })
            }

            function m(t) {
                return Object(r["a"])({
                    url: "/api/user/binding_warehouse_area",
                    method: "post",
                    data: t
                })
            }
        }
    }
]);