(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-62c7b319"], {
        "08e5": function(e, t, r) {
            "use strict";
            r.r(t);
            var n = function() {
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
                        staticClass: "same-width"
                    }, [r("div", {
                        staticClass: "search-item"
                    }, [r("el-input", {
                        attrs: {
                            placeholder: "序列号/IMEI"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getList(1)
                            }
                        },
                        model: {
                            value: e.search.imei_or_xlh,
                            callback: function(t) {
                                e.$set(e.search, "imei_or_xlh", t)
                            },
                            expression: "search.imei_or_xlh"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-button", {
                        attrs: {
                            type: "warning"
                        },
                        on: {
                            click: function(t) {
                                return e.getList(1)
                            }
                        }
                    }, [e._v("查询")])], 1)])])], 1), e._v(" "), r("el-row", {
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
                            "max-height": e.getClientHeight(270),
                            border: ""
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            type: "index",
                            label: "序号",
                            align: "center",
                            width: "60"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "imei",
                            label: "IMEI",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "xlh",
                            label: "序列号",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "os",
                            label: "系统",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "error_type_description",
                            label: "报错类型",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "created_at",
                            label: "记录时间",
                            align: "center",
                            width: "160"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "status_description",
                            label: "状态",
                            align: "center",
                            width: "160"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("span", {
                                    class: {
                                        "color-success": 1 == t.row.status, "color-danger": 0 == t.row.status
                                    }
                                }, [e._v(e._s(t.row.status_description))])]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "操作",
                            align: "center",
                            width: "170"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [1 != t.row.status ? r("el-button", {
                                    attrs: {
                                        type: "danger",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return e.openDialog(t.row.id, t.row.os)
                                        }
                                    }
                                }, [e._v("添加映射")]) : e._e()]
                            }
                        }])
                    })], 1)], 1)], 1), e._v(" "), r("div", {
                        staticClass: "footer-pagination"
                    }, [r("el-pagination", {
                        attrs: {
                            background: "",
                            layout: "total, prev, pager, next, jumper",
                            total: e.total,
                            "current-page": e.search.page,
                            "page-size": 10
                        },
                        on: {
                            "update:currentPage": function(t) {
                                return e.$set(e.search, "page", t)
                            },
                            "update:current-page": function(t) {
                                return e.$set(e.search, "page", t)
                            },
                            "current-change": function(t) {
                                return e.getList()
                            }
                        }
                    })], 1), e._v(" "), r("el-dialog", {
                        staticClass: "map-dialog",
                        attrs: {
                            title: "添加映射  -- 苹果 ",
                            visible: e.showDialog,
                            "close-on-click-modal": !1,
                            width: "55%"
                        },
                        on: {
                            "update:visible": function(t) {
                                e.showDialog = t
                            }
                        }
                    }, [r("el-table", {
                        attrs: {
                            data: e.info,
                            border: ""
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            label: "属性",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [0 == t.$index ? r("span", [e._v("沙漏读取")]) : e._e(), e._v(" "), 1 == t.$index ? r("span", [e._v("映射")]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "类目",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [0 == t.$index ? r("span", [e._v(e._s(t.row.type_name))]) : r("span", [r("el-select", {
                                    attrs: {
                                        filterable: "",
                                        clearable: "",
                                        disabled: !!e.baseInfo[1].type_id,
                                        placeholder: "类目"
                                    },
                                    on: {
                                        change: function(r) {
                                            return e.getModels(t.row.type_id)
                                        }
                                    },
                                    model: {
                                        value: t.row.type_id,
                                        callback: function(r) {
                                            e.$set(t.row, "type_id", r)
                                        },
                                        expression: "scope.row.type_id"
                                    }
                                }, e._l(e.dict.types, (function(e, t) {
                                    return r("el-option", {
                                        directives: [{
                                            name: "show",
                                            rawName: "v-show",
                                            value: 1 == t || 2 == t,
                                            expression: "key == 1 || key == 2"
                                        }],
                                        key: "类目-" + t,
                                        attrs: {
                                            label: e,
                                            value: Number(t)
                                        }
                                    })
                                })), 1)], 1)]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "型号",
                            align: "center",
                            width: "150"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [0 == t.$index ? r("span", [e._v(e._s(t.row.model))]) : r("span", [t.row.model ? r("el-select", {
                                    attrs: {
                                        filterable: "",
                                        clearable: "",
                                        disabled: !!e.baseInfo[1].model.pvid,
                                        placeholder: "型号"
                                    },
                                    on: {
                                        change: function(t) {
                                            return e.getProps(e.info[1].model.pvid, !0)
                                        }
                                    },
                                    model: {
                                        value: t.row.model.pvid,
                                        callback: function(r) {
                                            e.$set(t.row.model, "pvid", r)
                                        },
                                        expression: "scope.row.model.pvid"
                                    }
                                }, e._l(e.dict.models, (function(e, t) {
                                    return r("el-option", {
                                        key: "型号-" + t,
                                        attrs: {
                                            label: e,
                                            value: Number(t)
                                        }
                                    })
                                })), 1) : e._e()], 1)]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "监管型号",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v("\n          " + e._s(e.info[0].jgxh) + "\n        ")]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "网络",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [0 == t.$index ? r("span", [e._v(e._s(t.row.network))]) : r("span", [e.dict.props["8"] ? r("el-select", {
                                    attrs: {
                                        filterable: "",
                                        clearable: "",
                                        disabled: !!e.baseInfo[1].network.pvid,
                                        placeholder: "网络"
                                    },
                                    model: {
                                        value: t.row.network.pvid,
                                        callback: function(r) {
                                            e.$set(t.row.network, "pvid", r)
                                        },
                                        expression: "scope.row.network.pvid"
                                    }
                                }, e._l(e.dict.props["8"].list, (function(t, n) {
                                    return r("el-option", {
                                        key: e.dict.props["8"].pn_name + "-" + n,
                                        attrs: {
                                            label: t.pvname,
                                            value: Number(t.pvid)
                                        }
                                    })
                                })), 1) : e._e()], 1)]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "版本",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [0 == t.$index ? r("span", [e._v(e._s(t.row.version))]) : r("span", [e.dict.props["9"] ? r("el-select", {
                                    attrs: {
                                        filterable: "",
                                        clearable: "",
                                        disabled: !!e.baseInfo[1].version.pvid,
                                        placeholder: "版本"
                                    },
                                    model: {
                                        value: t.row.version.pvid,
                                        callback: function(r) {
                                            e.$set(t.row.version, "pvid", r)
                                        },
                                        expression: "scope.row.version.pvid"
                                    }
                                }, e._l(e.dict.props["9"].list, (function(t, n) {
                                    return r("el-option", {
                                        key: e.dict.props["9"].pn_name + "-" + n,
                                        attrs: {
                                            label: t.pvname,
                                            value: Number(t.pvid)
                                        }
                                    })
                                })), 1) : e._e()], 1)]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "内存",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [0 == t.$index ? r("span", [e._v(e._s(t.row.memory))]) : r("span", [e.dict.props["11"] ? r("el-select", {
                                    attrs: {
                                        filterable: "",
                                        clearable: "",
                                        disabled: !!e.baseInfo[1].memory.pvid,
                                        placeholder: "内存"
                                    },
                                    model: {
                                        value: t.row.memory.pvid,
                                        callback: function(r) {
                                            e.$set(t.row.memory, "pvid", r)
                                        },
                                        expression: "scope.row.memory.pvid"
                                    }
                                }, e._l(e.dict.props["11"].list, (function(t, n) {
                                    return r("el-option", {
                                        key: e.dict.props["11"].pn_name + "-" + n,
                                        attrs: {
                                            label: t.pvname,
                                            value: Number(t.pvid)
                                        }
                                    })
                                })), 1) : e._e()], 1)]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "颜色",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [0 == t.$index ? r("span", [e._v(e._s(t.row.color))]) : r("span", [e.dict.props["10"] ? r("el-select", {
                                    attrs: {
                                        filterable: "",
                                        clearable: "",
                                        disabled: !!e.baseInfo[1].color.pvid,
                                        placeholder: "颜色"
                                    },
                                    model: {
                                        value: t.row.color.pvid,
                                        callback: function(r) {
                                            e.$set(t.row.color, "pvid", r)
                                        },
                                        expression: "scope.row.color.pvid"
                                    }
                                }, e._l(e.dict.props["10"].list, (function(t, n) {
                                    return r("el-option", {
                                        key: e.dict.props["10"].pn_name + "-" + n,
                                        attrs: {
                                            label: t.pvname,
                                            value: Number(t.pvid)
                                        }
                                    })
                                })), 1) : e._e()], 1)]
                            }
                        }])
                    })], 1), e._v(" "), r("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [r("el-button", {
                        on: {
                            click: function(t) {
                                e.showDialog = !1
                            }
                        }
                    }, [e._v("取消")]), e._v(" "), r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.save
                        }
                    }, [e._v("确定")])], 1)], 1), e._v(" "), r("el-dialog", {
                        staticClass: "map-android-dialog",
                        attrs: {
                            title: "添加映射  -- 安卓 ",
                            visible: e.showDialogForAndroid,
                            "close-on-click-modal": !1,
                            width: "55%"
                        },
                        on: {
                            "update:visible": function(t) {
                                e.showDialogForAndroid = t
                            }
                        }
                    }, [r("el-form", {
                        ref: "err-form",
                        attrs: {
                            model: e.androidMappingForm,
                            "label-width": "100px"
                        }
                    }, [e.androidMappingForm.errorMappingModel ? r("el-form-item", {
                        attrs: {
                            label: "型号映射"
                        }
                    }, [r("span", [e._v("读取值：" + e._s(e.androidMappingForm.errorMappingModel.origin))]), e._v(" "), r("span", [e._v("映射值：")]), e._v(" "), r("TypeBrandModel", {
                        attrs: {
                            level: 3,
                            dict: e.dict
                        },
                        on: {
                            modelChange: e.handleModelChange
                        },
                        model: {
                            value: e.androidMappingFormSearch,
                            callback: function(t) {
                                e.androidMappingFormSearch = t
                            },
                            expression: "androidMappingFormSearch"
                        }
                    })], 1) : e._e(), e._v(" "), e.androidMappingForm.errorMappingMemory ? r("el-form-item", {
                        attrs: {
                            label: "内存映射"
                        }
                    }, [r("span", [e._v("读取值：" + e._s(e.androidMappingForm.errorMappingMemory.origin))]), e._v(" "), r("span", [e._v("映射值：")]), e._v(" "), e.dict.props["11"] ? r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "内存"
                        },
                        on: {
                            change: e.getSelectMemoryName
                        },
                        model: {
                            value: e.androidMappingForm.errorMappingMemory.shop_pv_id,
                            callback: function(t) {
                                e.$set(e.androidMappingForm.errorMappingMemory, "shop_pv_id", t)
                            },
                            expression: "androidMappingForm.errorMappingMemory.shop_pv_id"
                        }
                    }, e._l(e.dict.props["11"].list, (function(t, n) {
                        return r("el-option", {
                            key: e.dict.props["11"].pn_name + "-" + n,
                            attrs: {
                                label: t.pvname,
                                value: Number(t.pvid)
                            }
                        })
                    })), 1) : e._e()], 1) : e._e()], 1), e._v(" "), r("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [r("el-button", {
                        on: {
                            click: function(t) {
                                e.showDialogForAndroid = !1
                            }
                        }
                    }, [e._v("取消")]), e._v(" "), r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.saveAndroid
                        }
                    }, [e._v("确定")])], 1)], 1)], 1)
                },
                o = [],
                a = r("4838"),
                i = r.n(a),
                s = r("b775");

            function l(e) {
                return Object(s["a"])({
                    url: "/api/shalou_mapping_error_record/index",
                    method: "get",
                    params: e
                })
            }

            function c(e) {
                return Object(s["a"])({
                    url: "/api/shalou_mapping_error_record/record_info",
                    method: "get",
                    params: e
                })
            }

            function p(e) {
                return Object(s["a"])({
                    url: "/api/shalou_mapping_error_record/del_error_record",
                    method: "post",
                    data: e
                })
            }

            function d(e) {
                return Object(s["a"])({
                    url: "/api/shalou_mapping_error_record/del_error_record_android",
                    method: "post",
                    data: e
                })
            }
            var u = r("2934"),
                h = r("1504");

            function m(e, t) {
                var r;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = f(e)) || t && e && "number" === typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, i = !0,
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
                        s = !0, a = e
                    },
                    f: function() {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                }
            }

            function f(e, t) {
                if (e) {
                    if ("string" === typeof e) return g(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? g(e, t) : void 0
                }
            }

            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function v(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(r), !0).forEach((function(t) {
                        b(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function b(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function y(e, t, r, n, o, a, i) {
                try {
                    var s = e[a](i),
                        l = s.value
                } catch (c) {
                    return void r(c)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function w(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);

                        function i(e) {
                            y(a, n, o, i, s, "next", e)
                        }

                        function s(e) {
                            y(a, n, o, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var M = {
                    components: {
                        TypeBrandModel: h["a"]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            disabled: !0,
                            androidMappingForm: {
                                record_id: 0,
                                errorTypeDescription: null,
                                errorMappingModel: null,
                                errorMappingMemory: null
                            },
                            androidMappingFormSearch: {
                                type_id: null,
                                brand_id: null,
                                model_id: null
                            },
                            search: {
                                imei_or_xlh: null,
                                page: 1
                            },
                            dict: {
                                types: {},
                                models: [],
                                props: {}
                            },
                            total: 0,
                            loading: !1,
                            showDialog: !1,
                            showDialogForAndroid: !1,
                            info: [{}, {}],
                            baseInfo: [{}, {}]
                        }
                    },
                    mounted: function() {
                        this.getList(), this.getTypes()
                    },
                    methods: {
                        getList: function() {
                            var e = w(i.a.mark((function e(t) {
                                var r, n;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, r = _({}, this.search), 1 == t && (this.search.page = 1), this.loading = !0, e.next = 6, l(r);
                                        case 6:
                                            n = e.sent, this.loading = !1, this.tableData = n.data.data, this.total = n.data.total, this.search.imei_or_xlh = null, e.next = 16;
                                            break;
                                        case 13:
                                            e.prev = 13, e.t0 = e["catch"](0), this.loading = !1;
                                        case 16:
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
                        openDialog: function(e) {
                            var t = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ios";
                            "ios" === r ? (this.showDialog = !0, this.dict.models = [], this.dict.props = {}, this.$nextTick((function() {
                                t.getDetail(e)
                            }))) : (this.showDialogForAndroid = !0, this.getDetailForAndroid(e))
                        },
                        getSelectMemoryName: function() {
                            var e = w(i.a.mark((function e(t) {
                                var r;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            r = {}, r = this.dict.props["11"].list.find((function(e) {
                                                return e.pvid === t
                                            })), this.androidMappingForm.errorMappingMemory.shop_name = r.pvname;
                                        case 3:
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
                        handleModelChange: function() {
                            var e = w(i.a.mark((function e() {
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            this.androidMappingForm.errorMappingModel.shop_pv_id = this.androidMappingFormSearch.model_id, this.androidMappingForm.errorMappingModel.shop_name = this.dict.models[this.androidMappingFormSearch.model_id], console.log(this.dict);
                                        case 3:
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
                        getDetail: function() {
                            var e = w(i.a.mark((function e(t) {
                                var r, n;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return r = this.$loading({
                                                target: ".map-dialog .el-dialog"
                                            }), e.prev = 1, e.next = 4, c({
                                                record_id: t
                                            });
                                        case 4:
                                            n = e.sent, this.info = [n.data.shalou_info, n.data.mapping_info], this.baseInfo = JSON.parse(JSON.stringify(this.info)), this.info[1].type_id && this.getModels(this.info[1].type_id), this.info[1].model.pvid && this.getProps(this.info[1].model.pvid, !1), this.info[1].record_id = t, r.close(), e.next = 17;
                                            break;
                                        case 13:
                                            e.prev = 13, e.t0 = e["catch"](1), console.log(e.t0), r.close();
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [1, 13]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        getDetailForAndroid: function() {
                            var e = w(i.a.mark((function e(t) {
                                var r, n;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return r = this.$loading({
                                                target: ".map-android-dialog .el-dialog"
                                            }), this.androidMappingForm.record_id = t, this.androidMappingForm.errorTypeDescription = null, this.androidMappingForm.errorMappingModel = null, this.androidMappingForm.errorMappingMemory = null, e.prev = 5, e.next = 8, c({
                                                record_id: t
                                            });
                                        case 8:
                                            n = e.sent, console.log(n), this.baseInfo = n.data, this.androidMappingForm.errorTypeDescription = this.baseInfo.error_type_description, this.baseInfo.result_data_arr.missing_data.model && (this.androidMappingForm.errorMappingModel = this.baseInfo.result_data_arr.missing_data.model), this.baseInfo.result_data_arr.missing_data.memory && (this.androidMappingForm.errorMappingMemory = this.baseInfo.result_data_arr.missing_data.memory), console.log(this.androidMappingForm), "parameter_missing" === this.baseInfo.error_type && this.getProps(this.baseInfo.result_data_arr.model_id, !1), r.close(), e.next = 23;
                                            break;
                                        case 19:
                                            e.prev = 19, e.t0 = e["catch"](5), console.log(e.t0), r.close();
                                        case 23:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [5, 19]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        save: function() {
                            var e = w(i.a.mark((function e() {
                                var t, r, n;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.checkForm()) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return", !1);
                                        case 2:
                                            return t = this.$loading({
                                                target: ".map-android-dialog .el-dialog"
                                            }), e.prev = 3, this.checkParams(), r = this.info[1], r.jgxh = this.info[0].jgxh, e.next = 9, p(r);
                                        case 9:
                                            n = e.sent, this.$message.success(n.msg), t.close(), this.showDialog = !1, this.getList(), e.next = 20;
                                            break;
                                        case 16:
                                            e.prev = 16, e.t0 = e["catch"](3), console.log(e.t0), t && t.close();
                                        case 20:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [3, 16]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        saveAndroid: function() {
                            var e = w(i.a.mark((function e() {
                                var t, r, n;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return console.log("保存"), console.log(this.androidMappingForm), t = this.$loading({
                                                target: ".map-dialog .el-dialog"
                                            }), e.prev = 3, r = [], this.androidMappingForm.errorMappingModel && r.push(this.androidMappingForm.errorMappingModel), this.androidMappingForm.errorMappingMemory && r.push(this.androidMappingForm.errorMappingMemory), console.log(r), e.next = 10, d({
                                                record_id: this.androidMappingForm.record_id,
                                                mapping_data: r
                                            });
                                        case 10:
                                            n = e.sent, this.$message.success(n.msg), t.close(), this.showDialogForAndroid = !1, this.getList(), e.next = 21;
                                            break;
                                        case 17:
                                            e.prev = 17, e.t0 = e["catch"](3), console.log(e.t0), t && t.close();
                                        case 21:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [3, 17]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        checkForm: function() {
                            return this.info[1]["type_id"] ? this.info[1]["model"]["pvid"] ? this.info[1]["network"]["pvid"] ? this.info[1]["version"]["pvid"] ? this.info[1]["memory"]["pvid"] ? !!this.info[1]["color"]["pvid"] || (this.$message.warning("颜色必填！"), !1) : (this.$message.warning("内存必填！"), !1) : (this.$message.warning("版本必填！"), !1) : (this.$message.warning("网络必填！"), !1) : (this.$message.warning("型号必填！"), !1) : (this.$message.warning("类目必填！"), !1)
                        },
                        getTypes: function() {
                            var e = w(i.a.mark((function e() {
                                var t;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(u["p"])();
                                        case 2:
                                            t = e.sent, this.dict.types = t.data;
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
                        getModels: function() {
                            var e = w(i.a.mark((function e(t) {
                                var r;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(u["i"])({
                                                type_id: t,
                                                brand_id: 1
                                            });
                                        case 2:
                                            r = e.sent, this.dict.models = r.data;
                                        case 4:
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
                        getProps: function() {
                            var e = w(i.a.mark((function e(t, r) {
                                var n;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return r && (this.info[1].network.pvid = null, this.info[1].version.pvid = null, this.info[1].memory.pvid = null, this.info[1].color.pvid = null), e.next = 3, Object(u["m"])({
                                                model_id: t
                                            });
                                        case 3:
                                            n = e.sent, this.dict.props = n.data[t], console.log(this.dict.props);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t(t, r) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        checkParams: function() {
                            this.info[1].network.pvname = this.getPropsName("8", this.info[1].network), this.info[1].version.pvname = this.getPropsName("9", this.info[1].version), this.info[1].memory.pvname = this.getPropsName("11", this.info[1].memory), this.info[1].color.pvname = this.getPropsName("10", this.info[1].color), this.info[1].model.pvname = this.dict.models[this.info[1].model.pvid]
                        },
                        getPropsName: function(e, t) {
                            var r, n = m(this.dict.props[e].list);
                            try {
                                for (n.s(); !(r = n.n()).done;) {
                                    var o = r.value;
                                    if (o.pvid == t.pvid) return o.pvname
                                }
                            } catch (a) {
                                n.e(a)
                            } finally {
                                n.f()
                            }
                        }
                    }
                },
                k = M,
                x = r("5d22"),
                O = Object(x["a"])(k, n, o, !1, null, "a1fd931a", null);
            t["default"] = O.exports
        },
        2934: function(e, t, r) {
            "use strict";
            r.d(t, "p", (function() {
                return o
            })), r.d(t, "d", (function() {
                return a
            })), r.d(t, "i", (function() {
                return i
            })), r.d(t, "m", (function() {
                return s
            })), r.d(t, "b", (function() {
                return l
            })), r.d(t, "g", (function() {
                return c
            })), r.d(t, "k", (function() {
                return p
            })), r.d(t, "j", (function() {
                return d
            })), r.d(t, "h", (function() {
                return u
            })), r.d(t, "n", (function() {
                return h
            })), r.d(t, "a", (function() {
                return m
            })), r.d(t, "l", (function() {
                return f
            })), r.d(t, "q", (function() {
                return g
            })), r.d(t, "f", (function() {
                return v
            })), r.d(t, "o", (function() {
                return _
            })), r.d(t, "c", (function() {
                return b
            })), r.d(t, "e", (function() {
                return y
            }));
            var n = r("b775");

            function o(e) {
                return Object(n["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: e
                })
            }

            function a(e) {
                return Object(n["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(n["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(n["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: e
                })
            }

            function l(e) {
                return Object(n["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: e
                })
            }

            function c(e) {
                return Object(n["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: e
                })
            }

            function p(e) {
                return Object(n["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: e
                })
            }

            function d(e) {
                return Object(n["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: e
                })
            }

            function u(e) {
                return Object(n["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: e
                })
            }

            function h(e) {
                return Object(n["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: e
                })
            }

            function m(e) {
                return Object(n["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: e
                })
            }

            function f(e) {
                return Object(n["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: e
                })
            }

            function g(e) {
                return Object(n["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: e
                })
            }

            function v(e) {
                return Object(n["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: e
                })
            }

            function _(e) {
                return Object(n["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: e
                })
            }

            function b(e) {
                return Object(n["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: e
                })
            }

            function y(e) {
                return Object(n["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: e
                })
            }
        }
    }
]);