(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d0ea136"], {
        "8ff8": function(t, e, l) {
            "use strict";
            l.r(e);
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        l = t._self._c || e;
                    return l("div", {
                        staticClass: "app-container"
                    }, [l("div", {
                        staticClass: "header-tools"
                    }, [l("el-row", {
                        staticStyle: {
                            width: "100%"
                        }
                    }, [l("el-col", {
                        attrs: {
                            span: 6
                        }
                    }, [l("el-input", {
                        attrs: {
                            placeholder: "输入参数进行查询"
                        },
                        nativeOn: {
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.getList(1)
                            }
                        },
                        model: {
                            value: t.search.search_str,
                            callback: function(e) {
                                t.$set(t.search, "search_str", e)
                            },
                            expression: "search.search_str"
                        }
                    })], 1), t._v(" "), l("el-col", {
                        staticStyle: {
                            "margin-left": "20px"
                        },
                        attrs: {
                            span: 3
                        }
                    }, [l("el-button", {
                        attrs: {
                            type: "warning"
                        },
                        on: {
                            click: function(e) {
                                return t.getList(1)
                            }
                        }
                    }, [t._v("查询")]), t._v(" "), l("el-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: function(e) {
                                return t.resetSearch()
                            }
                        }
                    }, [t._v("重置")])], 1)], 1), t._v(" "), t.auth("api/error_type/store") ? l("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.openDialog()
                            }
                        }
                    }, [t._v("新增")]) : t._e()], 1), t._v(" "), l("el-row", {
                        staticClass: "body-list"
                    }, [l("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [l("el-table", {
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
                    }, [l("el-table-column", {
                        attrs: {
                            type: "index",
                            label: "序号",
                            align: "center",
                            width: "80"
                        }
                    }), t._v(" "), l("el-table-column", {
                        attrs: {
                            prop: "title_1",
                            label: "转转一级标题",
                            align: "center"
                        }
                    }), t._v(" "), l("el-table-column", {
                        attrs: {
                            prop: "title_2",
                            label: "转转二级标题",
                            align: "center"
                        }
                    }), t._v(" "), l("el-table-column", {
                        attrs: {
                            prop: "title_3",
                            label: "转转三级标题",
                            align: "center"
                        }
                    }), t._v(" "), l("el-table-column", {
                        attrs: {
                            prop: "zz_pid",
                            label: "转转末级质检项id",
                            align: "center"
                        }
                    }), t._v(" "), l("el-table-column", {
                        attrs: {
                            prop: "zz_data_id",
                            label: "转转选项值id",
                            align: "center"
                        }
                    }), t._v(" "), l("el-table-column", {
                        attrs: {
                            prop: "zlj_title_2",
                            label: "找靓机二级标题",
                            align: "center"
                        }
                    }), t._v(" "), l("el-table-column", {
                        attrs: {
                            prop: "zlj_title_3",
                            label: "找靓机三级标题",
                            align: "center"
                        }
                    }), t._v(" "), l("el-table-column", {
                        attrs: {
                            prop: "zlj_level_2_id",
                            label: "找靓机二级id",
                            align: "center"
                        }
                    }), t._v(" "), l("el-table-column", {
                        attrs: {
                            prop: "zlj_data_id",
                            label: "找靓机末级质检项id",
                            align: "center"
                        }
                    }), t._v(" "), l("el-table-column", {
                        attrs: {
                            label: "找靓机类型",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v(t._s(1 == e.row.typ ? "属性" : "质检项"))]
                            }
                        }])
                    }), t._v(" "), l("el-table-column", {
                        attrs: {
                            label: "是否是默认值",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v(t._s(1 == e.row.is_default ? "是" : "否"))]
                            }
                        }])
                    }), t._v(" "), l("el-table-column", {
                        attrs: {
                            prop: "updated_at",
                            label: "最近更新时间",
                            align: "center"
                        }
                    }), t._v(" "), l("el-table-column", {
                        attrs: {
                            label: "操作",
                            align: "center",
                            width: "170"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [l("el-button", {
                                    attrs: {
                                        type: "primary",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(l) {
                                            return t.openDialog(e.row)
                                        }
                                    }
                                }, [t._v("编辑")]), t._v(" "), l("el-button", {
                                    attrs: {
                                        type: "danger",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(l) {
                                            return t.removeItem(e.row.id)
                                        }
                                    }
                                }, [t._v("删除")])]
                            }
                        }])
                    })], 1)], 1)], 1), t._v(" "), l("div", {
                        staticClass: "footer-pagination"
                    }, [l("el-pagination", {
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
                    })], 1), t._v(" "), l("el-dialog", {
                        staticClass: "err-dialog",
                        attrs: {
                            title: (t.form.id ? "编辑" : "新增") + "质检报告映射",
                            visible: t.showDialog,
                            width: "25%"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.showDialog = e
                            }
                        }
                    }, [l("el-form", {
                        ref: "form",
                        attrs: {
                            model: t.form,
                            rules: t.rules,
                            "label-width": "140px"
                        }
                    }, [l("el-form-item", {
                        attrs: {
                            label: "转转一级标题",
                            prop: "title_1"
                        }
                    }, [l("el-input", {
                        attrs: {
                            placeholder: "请输入转转一级标题"
                        },
                        model: {
                            value: t.form.title_1,
                            callback: function(e) {
                                t.$set(t.form, "title_1", e)
                            },
                            expression: "form.title_1"
                        }
                    })], 1), t._v(" "), l("el-form-item", {
                        attrs: {
                            label: "转转二级标题",
                            prop: "title_2"
                        }
                    }, [l("el-input", {
                        attrs: {
                            placeholder: "请输入转转二级标题"
                        },
                        model: {
                            value: t.form.title_2,
                            callback: function(e) {
                                t.$set(t.form, "title_2", e)
                            },
                            expression: "form.title_2"
                        }
                    })], 1), t._v(" "), l("el-form-item", {
                        attrs: {
                            label: "转转三级标题",
                            prop: "title_3"
                        }
                    }, [l("el-input", {
                        attrs: {
                            placeholder: "请输入转转三级标题"
                        },
                        model: {
                            value: t.form.title_3,
                            callback: function(e) {
                                t.$set(t.form, "title_3", e)
                            },
                            expression: "form.title_3"
                        }
                    })], 1), t._v(" "), l("el-form-item", {
                        attrs: {
                            label: "转转末级质检项id",
                            prop: "zz_pid"
                        }
                    }, [l("el-input", {
                        attrs: {
                            placeholder: "请输入转转末级质检项id"
                        },
                        model: {
                            value: t.form.zz_pid,
                            callback: function(e) {
                                t.$set(t.form, "zz_pid", e)
                            },
                            expression: "form.zz_pid"
                        }
                    })], 1), t._v(" "), l("el-form-item", {
                        attrs: {
                            label: "转转选项值id",
                            prop: "zz_data_id"
                        }
                    }, [l("el-input", {
                        attrs: {
                            placeholder: "请输入转转选项值id"
                        },
                        model: {
                            value: t.form.zz_data_id,
                            callback: function(e) {
                                t.$set(t.form, "zz_data_id", e)
                            },
                            expression: "form.zz_data_id"
                        }
                    })], 1), t._v(" "), l("el-form-item", {
                        attrs: {
                            label: "找靓机二级标题",
                            prop: "zlj_title_2"
                        }
                    }, [l("el-input", {
                        attrs: {
                            placeholder: "请输入找靓机二级标题"
                        },
                        model: {
                            value: t.form.zlj_title_2,
                            callback: function(e) {
                                t.$set(t.form, "zlj_title_2", e)
                            },
                            expression: "form.zlj_title_2"
                        }
                    })], 1), t._v(" "), l("el-form-item", {
                        attrs: {
                            label: "找靓机三级标题",
                            prop: "zlj_title_3"
                        }
                    }, [l("el-input", {
                        attrs: {
                            placeholder: "请输入找靓机三级标题"
                        },
                        model: {
                            value: t.form.zlj_title_3,
                            callback: function(e) {
                                t.$set(t.form, "zlj_title_3", e)
                            },
                            expression: "form.zlj_title_3"
                        }
                    })], 1), t._v(" "), l("el-form-item", {
                        attrs: {
                            label: "找表机二级id",
                            prop: "zlj_level_2_id"
                        }
                    }, [l("el-input", {
                        attrs: {
                            placeholder: "请输入找表机二级id"
                        },
                        model: {
                            value: t.form.zlj_level_2_id,
                            callback: function(e) {
                                t.$set(t.form, "zlj_level_2_id", e)
                            },
                            expression: "form.zlj_level_2_id"
                        }
                    })], 1), t._v(" "), l("el-form-item", {
                        attrs: {
                            label: "找靓机末级质检项id",
                            prop: "zlj_data_id"
                        }
                    }, [l("el-input", {
                        attrs: {
                            placeholder: "请输入找靓机末级质检项id"
                        },
                        model: {
                            value: t.form.zlj_data_id,
                            callback: function(e) {
                                t.$set(t.form, "zlj_data_id", e)
                            },
                            expression: "form.zlj_data_id"
                        }
                    })], 1), t._v(" "), l("el-form-item", {
                        attrs: {
                            label: "找靓机类型",
                            prop: "typ"
                        }
                    }, [l("el-select", {
                        attrs: {
                            placeholder: "请选择找靓机类型"
                        },
                        model: {
                            value: t.form.typ,
                            callback: function(e) {
                                t.$set(t.form, "typ", e)
                            },
                            expression: "form.typ"
                        }
                    }, t._l(this.type_list, (function(t, e) {
                        return l("el-option", {
                            key: e,
                            attrs: {
                                value: t.value,
                                label: t.label
                            }
                        })
                    })), 1)], 1), t._v(" "), l("el-form-item", {
                        attrs: {
                            label: "是否是默认值",
                            prop: "is_default"
                        }
                    }, [l("el-select", {
                        attrs: {
                            placeholder: "请选择是否是默认值"
                        },
                        model: {
                            value: t.form.is_default,
                            callback: function(e) {
                                t.$set(t.form, "is_default", e)
                            },
                            expression: "form.is_default"
                        }
                    }, t._l(t.isDefaultList, (function(t, e) {
                        return l("el-option", {
                            key: e,
                            attrs: {
                                value: t.value,
                                label: t.label
                            }
                        })
                    })), 1)], 1)], 1), t._v(" "), l("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [l("el-button", {
                        on: {
                            click: function(e) {
                                t.showDialog = !1
                            }
                        }
                    }, [t._v("取消")]), t._v(" "), l("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.addRow
                        }
                    }, [t._v("确定")])], 1)], 1)], 1)
                },
                r = [],
                i = l("4838"),
                n = l.n(i),
                o = l("b775");

            function s(t) {
                return Object(o["a"])({
                    url: "/api/setting/qc_mapping_data",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(o["a"])({
                    url: "/api/setting/qc_mapping_data_add",
                    method: "post",
                    data: t
                })
            }

            function u(t) {
                return Object(o["a"])({
                    url: "/api/setting/qc_mapping_data_del",
                    method: "get",
                    params: t
                })
            }

            function p(t, e, l, a, r, i, n) {
                try {
                    var o = t[i](n),
                        s = o.value
                } catch (c) {
                    return void l(c)
                }
                o.done ? e(s) : Promise.resolve(s).then(a, r)
            }

            function d(t) {
                return function() {
                    var e = this,
                        l = arguments;
                    return new Promise((function(a, r) {
                        var i = t.apply(e, l);

                        function n(t) {
                            p(i, a, r, n, o, "next", t)
                        }

                        function o(t) {
                            p(i, a, r, n, o, "throw", t)
                        }
                        n(void 0)
                    }))
                }
            }
            var _ = {
                    props: {
                        nodeId: [String]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            search: {
                                search_str: "",
                                page: 1
                            },
                            total: 0,
                            loading: !1,
                            showDialog: !1,
                            form: {
                                title_1: null,
                                title_2: null,
                                zz_data_id: null,
                                is_default: 0
                            },
                            rules: {
                                title_1: [{
                                    required: !0,
                                    trigger: "blur",
                                    message: "请输入转转一级标题"
                                }],
                                title_2: [{
                                    required: !0,
                                    trigger: "blur",
                                    message: "请输入转转二级标题"
                                }],
                                zz_data_id: [{
                                    required: !0,
                                    trigger: "blur",
                                    message: "请输入转转选项值id"
                                }]
                            },
                            type_list: [{
                                label: "属性",
                                value: 1
                            }, {
                                label: "质检项",
                                value: 2
                            }],
                            isDefaultList: [{
                                label: "是",
                                value: 1
                            }, {
                                label: "否",
                                value: 0
                            }]
                        }
                    },
                    mounted: function() {
                        this.getList(1)
                    },
                    methods: {
                        getList: function() {
                            var t = d(n.a.mark((function t(e) {
                                var l;
                                return n.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, e && (this.search.page = 1), this.loading = !0, t.next = 5, s(this.search);
                                        case 5:
                                            l = t.sent, this.loading = !1, this.tableData = l.data.data, this.total = l.data.total, t.next = 14;
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
                            var t = d(n.a.mark((function t() {
                                var e = this;
                                return n.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            this.$refs.form.validate(function() {
                                                var t = d(n.a.mark((function t(l) {
                                                    var a;
                                                    return n.a.wrap((function(t) {
                                                        while (1) switch (t.prev = t.next) {
                                                            case 0:
                                                                if (!l) {
                                                                    t.next = 13;
                                                                    break
                                                                }
                                                                return t.prev = 1, t.next = 4, c(e.form);
                                                            case 4:
                                                                e.showDialog = !1, a = e.form.id ? "编辑" : "新增", e.$message.success(a + "机型映射成功！"), e.getList(), t.next = 13;
                                                                break;
                                                            case 10:
                                                                t.prev = 10, t.t0 = t["catch"](1), e.showDialog = !1;
                                                            case 13:
                                                            case "end":
                                                                return t.stop()
                                                        }
                                                    }), t, null, [
                                                        [1, 10]
                                                    ])
                                                })));
                                                return function(e) {
                                                    return t.apply(this, arguments)
                                                }
                                            }());
                                        case 1:
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
                        openDialog: function(t) {
                            var e = this;
                            this.showDialog = !0, t ? this.form = t : this.$nextTick((function() {
                                e.$refs.form.resetFields(), e.form = {
                                    title_1: null,
                                    title_2: null,
                                    zz_data_id: null,
                                    is_default: 0
                                }
                            }))
                        },
                        removeItem: function() {
                            var t = d(n.a.mark((function t(e) {
                                return n.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, this.$confirm("确定删除数据【".concat(e, "】？"), "提示", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 3:
                                            return this.loading = !0, t.next = 6, u({
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

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        resetSearch: function() {
                            this.search = {
                                search_str: "",
                                page: 1
                            }, this.getList(1)
                        }
                    }
                },
                f = _,
                m = l("5d22"),
                v = Object(m["a"])(f, a, r, !1, null, "53af4bea", null);
            e["default"] = v.exports
        }
    }
]);