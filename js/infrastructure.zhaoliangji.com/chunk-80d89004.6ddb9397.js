(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-80d89004"], {
        "3cac": function(t, e, r) {
            "use strict";
            r("b7b5")
        },
        5470: function(t, e, r) {
            "use strict";
            r.r(e);
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "app-container"
                    }, [r("div", {
                        staticClass: "header-tools"
                    }, [r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.openAddDialog
                        }
                    }, [t._v("新增")])], 1), t._v(" "), r("el-row", {
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
                            "max-height": t.getClientHeight(170),
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
                            prop: "tag_name",
                            label: "标签名",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "content",
                            label: "状态",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [r("el-tag", {
                                    attrs: {
                                        type: 1 == e.row.status ? "success" : "danger"
                                    }
                                }, [t._v(t._s(1 == e.row.status ? "可用" : "禁止"))])]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "color",
                            label: "颜色值",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [r("div", {
                                    style: {
                                        color: "#" + e.row.color
                                    }
                                }, [t._v(t._s(e.row.color))])]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "created_at",
                            label: "创建时间",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "updated_at",
                            label: "更新时间",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "操作",
                            width: "200",
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
                                            return t.openEditDialog(e.row)
                                        }
                                    }
                                }, [t._v("编辑")]), t._v(" "), r("el-button", {
                                    attrs: {
                                        type: "danger",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return t.removeItem(e.row.tag_id, e.row.tag_name)
                                        }
                                    }
                                }, [t._v("删除")])]
                            }
                        }])
                    })], 1)], 1)], 1), t._v(" "), r("el-dialog", {
                        attrs: {
                            title: t.formData.tag_id ? "编辑" : "新增",
                            visible: t.showFormDialog,
                            width: "40%"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.showFormDialog = e
                            }
                        }
                    }, [r("el-form", {
                        ref: "formRef",
                        attrs: {
                            model: t.formData,
                            rules: t.rules,
                            "label-width": "130px"
                        }
                    }, [r("el-form-item", {
                        attrs: {
                            label: "标签名：",
                            prop: "tag_name"
                        }
                    }, [r("el-input", {
                        attrs: {
                            placeholder: "请输入标签名"
                        },
                        model: {
                            value: t.formData.tag_name,
                            callback: function(e) {
                                t.$set(t.formData, "tag_name", e)
                            },
                            expression: "formData.tag_name"
                        }
                    })], 1), t._v(" "), r("el-form-item", {
                        attrs: {
                            label: "状态：",
                            prop: "status"
                        }
                    }, [r("el-switch", {
                        attrs: {
                            "active-value": 1,
                            "inactive-value": 0,
                            "active-text": "是",
                            "inactive-text": "否"
                        },
                        model: {
                            value: t.formData.status,
                            callback: function(e) {
                                t.$set(t.formData, "status", e)
                            },
                            expression: "formData.status"
                        }
                    })], 1), t._v(" "), r("el-form-item", {
                        attrs: {
                            label: "颜色值：",
                            prop: "color"
                        }
                    }, [r("el-color-picker", {
                        model: {
                            value: t.formData.color,
                            callback: function(e) {
                                t.$set(t.formData, "color", e)
                            },
                            expression: "formData.color"
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
                                t.showFormDialog = !1
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
                    }, [t._v("确 定")])], 1)], 1)], 1)
                },
                n = [],
                o = r("4838"),
                i = r.n(o),
                s = r("c40e");

            function c(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(r), !0).forEach((function(e) {
                        u(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function u(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function f(t, e, r, a, n, o, i) {
                try {
                    var s = t[o](i),
                        c = s.value
                } catch (l) {
                    return void r(l)
                }
                s.done ? e(c) : Promise.resolve(c).then(a, n)
            }

            function d(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(a, n) {
                        var o = t.apply(e, r);

                        function i(t) {
                            f(o, a, n, i, s, "next", t)
                        }

                        function s(t) {
                            f(o, a, n, i, s, "throw", t)
                        }
                        i(void 0)
                    }))
                }
            }
            var p = {
                    name: "GoodsTags",
                    data: function() {
                        return {
                            tableData: [],
                            loading: !1,
                            showFormDialog: !1,
                            formLoading: !1,
                            formData: {
                                tag_id: "",
                                tag_name: "",
                                status: 0,
                                color: ""
                            },
                            rules: {
                                tag_name: [{
                                    required: !0,
                                    message: "请输入标签名",
                                    trigger: "blur"
                                }],
                                status: [{
                                    required: !0,
                                    message: "请选择状态",
                                    trigger: "blur"
                                }],
                                color: [{
                                    required: !0,
                                    message: "请选择颜色",
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
                            var t = d(i.a.mark((function t() {
                                var e;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return this.loading = !0, t.next = 3, Object(s["d"])({});
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
                                e.$refs["formRef"].resetFields(), e.formData.tag_id = t.tag_id, e.formData.tag_name = t.tag_name, e.formData.status = t.status, e.formData.color = "#" + t.color
                            }))
                        },
                        openAddDialog: function() {
                            var t = this;
                            this.showFormDialog = !0, this.$nextTick((function() {
                                t.formData.tag_id = "", t.$refs["formRef"].resetFields()
                            }))
                        },
                        save: function() {
                            var t = this;
                            try {
                                this.$refs["formRef"].validate(function() {
                                    var e = d(i.a.mark((function e(r) {
                                        var a;
                                        return i.a.wrap((function(e) {
                                            while (1) switch (e.prev = e.next) {
                                                case 0:
                                                    if (!r) {
                                                        e.next = 15;
                                                        break
                                                    }
                                                    if (t.formLoading = !0, a = l({}, t.formData), a.color = a.color.substr(1), a.tag_id) {
                                                        e.next = 9;
                                                        break
                                                    }
                                                    return e.next = 7, Object(s["b"])(a);
                                                case 7:
                                                    e.next = 11;
                                                    break;
                                                case 9:
                                                    return e.next = 11, Object(s["k"])(a);
                                                case 11:
                                                    t.formLoading = !1, t.$message.success("保存成功！"), t.showFormDialog = !1, t.getList();
                                                case 15:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
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
                            var t = d(i.a.mark((function t(e, r) {
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, this.$confirm("确定要删除【" + r + "】", "提示", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 3:
                                            return this.loading = !0, t.next = 6, Object(s["i"])({
                                                tag_id: e
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

                            function e(e, r) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }
                },
                m = p,
                g = (r("3cac"), r("5d22")),
                b = Object(g["a"])(m, a, n, !1, null, "45258541", null);
            e["default"] = b.exports
        },
        b7b5: function(t, e, r) {},
        c40e: function(t, e, r) {
            "use strict";
            r.d(e, "c", (function() {
                return n
            })), r.d(e, "j", (function() {
                return o
            })), r.d(e, "a", (function() {
                return i
            })), r.d(e, "h", (function() {
                return s
            })), r.d(e, "d", (function() {
                return c
            })), r.d(e, "b", (function() {
                return l
            })), r.d(e, "k", (function() {
                return u
            })), r.d(e, "i", (function() {
                return f
            })), r.d(e, "e", (function() {
                return d
            })), r.d(e, "f", (function() {
                return p
            })), r.d(e, "g", (function() {
                return m
            }));
            var a = r("b775");

            function n(t) {
                return Object(a["a"])({
                    url: "/api/brief_templates",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(a["a"])({
                    url: "/api/brief_template/update",
                    method: "post",
                    data: t
                })
            }

            function i(t) {
                return Object(a["a"])({
                    url: "/api/brief_template/store",
                    method: "post",
                    data: t
                })
            }

            function s(t) {
                return Object(a["a"])({
                    url: "/api/brief_template/destroy",
                    method: "post",
                    data: t
                })
            }

            function c(t) {
                return Object(a["a"])({
                    url: "/api/tags",
                    method: "get",
                    params: t
                })
            }

            function l(t) {
                return Object(a["a"])({
                    url: "/api/tag/store",
                    method: "post",
                    data: t
                })
            }

            function u(t) {
                return Object(a["a"])({
                    url: "/api/tag/update",
                    method: "post",
                    data: t
                })
            }

            function f(t) {
                return Object(a["a"])({
                    url: "/api/tag/destroy",
                    method: "post",
                    data: t
                })
            }

            function d(t) {
                return Object(a["a"])({
                    url: "/api/users",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(a["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: t
                })
            }

            function m(t) {
                return Object(a["a"])({
                    url: "/api/user/binding_warehouse_area",
                    method: "post",
                    data: t
                })
            }
        }
    }
]);