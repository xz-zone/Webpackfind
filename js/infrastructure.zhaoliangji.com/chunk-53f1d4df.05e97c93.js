(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-53f1d4df"], {
        2934: function(t, e, r) {
            "use strict";
            r.d(e, "p", (function() {
                return a
            })), r.d(e, "d", (function() {
                return o
            })), r.d(e, "i", (function() {
                return i
            })), r.d(e, "m", (function() {
                return u
            })), r.d(e, "b", (function() {
                return c
            })), r.d(e, "g", (function() {
                return s
            })), r.d(e, "k", (function() {
                return l
            })), r.d(e, "j", (function() {
                return d
            })), r.d(e, "h", (function() {
                return p
            })), r.d(e, "n", (function() {
                return f
            })), r.d(e, "a", (function() {
                return _
            })), r.d(e, "l", (function() {
                return m
            })), r.d(e, "q", (function() {
                return h
            })), r.d(e, "f", (function() {
                return b
            })), r.d(e, "o", (function() {
                return v
            })), r.d(e, "c", (function() {
                return y
            })), r.d(e, "e", (function() {
                return w
            }));
            var n = r("b775");

            function a(t) {
                return Object(n["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(n["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(n["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(n["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: t
                })
            }

            function l(t) {
                return Object(n["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(n["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(n["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: t
                })
            }

            function f(t) {
                return Object(n["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: t
                })
            }

            function _(t) {
                return Object(n["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: t
                })
            }

            function m(t) {
                return Object(n["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: t
                })
            }

            function h(t) {
                return Object(n["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: t
                })
            }

            function b(t) {
                return Object(n["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: t
                })
            }

            function v(t) {
                return Object(n["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: t
                })
            }

            function y(t) {
                return Object(n["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: t
                })
            }

            function w(t) {
                return Object(n["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: t
                })
            }
        },
        5392: function(t, e, r) {
            "use strict";
            r("c5f3")
        },
        "54d0": function(t, e, r) {
            "use strict";
            r.r(e);
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "app-container"
                    }, [r("div", {
                        staticClass: "header-search"
                    }, [r("el-input", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            type: "text",
                            clearable: "",
                            placeholder: "扫描IMEI号"
                        },
                        nativeOn: {
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.getAbnormalImeiData(e)
                            }
                        },
                        model: {
                            value: t.imei,
                            callback: function(e) {
                                t.imei = e
                            },
                            expression: "imei"
                        }
                    })], 1), t._v(" "), t._l(t.scannData, (function(e, n) {
                        return r("div", {
                            key: n
                        }, [r("el-row", {
                            staticClass: "body-tools"
                        }, [r("el-col", [r("el-alert", {
                            attrs: {
                                type: "success",
                                closable: !1
                            }
                        }, [r("el-row", [r("el-col", {
                            staticClass: "header-info",
                            attrs: {
                                span: 16
                            }
                        }, [r("div", [t._v("\n                流转单号：\n                "), r("span", [t._v(t._s(e.transfer_order.transfer_order_no))])]), t._v(" "), r("div", [t._v("\n                接收数量：\n                "), r("span", {
                            staticClass: "color-danger"
                        }, [t._v(t._s(e.transfer_order.total_num))])]), t._v(" "), r("div", [t._v("\n                流转步骤：\n                "), r("span", [t._v(t._s(e.transfer_order.source_node.name) + "—>" + t._s(e.transfer_order.to_node.name))])]), t._v(" "), r("div", [t._v("\n                创建时间：\n                "), r("span", [t._v(t._s(e.transfer_order.created_at))])]), t._v(" "), r("div", [t._v("\n                异常数量合计：\n                "), r("span", [t._v(t._s(e.transfer_order.abnormal_num))])]), t._v(" "), r("div", [t._v("\n                成本合计：\n                "), r("span", [t._v(t._s(e.transfer_order.total_cost))])])]), t._v(" "), r("el-col", {
                            staticClass: "header-total",
                            attrs: {
                                span: 8
                            }
                        })], 1)], 1)], 1)], 1), t._v(" "), r("el-row", {
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
                                data: e.detail,
                                border: ""
                            }
                        }, [r("el-table-column", {
                            attrs: {
                                type: "index",
                                label: "序号",
                                align: "center",
                                width: "50"
                            }
                        }), t._v(" "), r("el-table-column", {
                            attrs: {
                                prop: "type.name",
                                label: "类目品牌型号",
                                width: "290",
                                align: "center"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [e.row.type ? r("div", [t._v("【" + t._s(e.row.type.name) + "】 【" + t._s(e.row.brand.name) + "】 【" + t._s(e.row.model.name) + "】")]) : t._e(), t._v(" "), e.row.type ? t._e() : r("div", [r("el-select", {
                                        staticStyle: {
                                            width: "80px"
                                        },
                                        attrs: {
                                            filterable: "",
                                            clearable: "",
                                            placeholder: "类目"
                                        },
                                        on: {
                                            change: function(r) {
                                                return t.getBrands(e.row)
                                            }
                                        },
                                        model: {
                                            value: e.row.type_id,
                                            callback: function(r) {
                                                t.$set(e.row, "type_id", r)
                                            },
                                            expression: "scope.row.type_id"
                                        }
                                    }, t._l(t.dict.types, (function(t, e) {
                                        return r("el-option", {
                                            key: e,
                                            attrs: {
                                                label: t,
                                                value: e
                                            }
                                        })
                                    })), 1), t._v(" "), r("el-select", {
                                        staticStyle: {
                                            width: "80px"
                                        },
                                        attrs: {
                                            filterable: "",
                                            clearable: "",
                                            placeholder: "品牌"
                                        },
                                        on: {
                                            change: function(r) {
                                                return t.getModels(e.row)
                                            }
                                        },
                                        model: {
                                            value: e.row.brand_id,
                                            callback: function(r) {
                                                t.$set(e.row, "brand_id", r)
                                            },
                                            expression: "scope.row.brand_id"
                                        }
                                    }, t._l(e.row.brand_data, (function(t, e) {
                                        return r("el-option", {
                                            key: e,
                                            attrs: {
                                                label: t,
                                                value: e
                                            }
                                        })
                                    })), 1), t._v(" "), r("el-select", {
                                        staticStyle: {
                                            width: "80px"
                                        },
                                        attrs: {
                                            filterable: "",
                                            clearable: "",
                                            placeholder: "型号"
                                        },
                                        model: {
                                            value: e.row.model_id,
                                            callback: function(r) {
                                                t.$set(e.row, "model_id", r)
                                            },
                                            expression: "scope.row.model_id"
                                        }
                                    }, t._l(e.row.model_data, (function(t, e) {
                                        return r("el-option", {
                                            key: e,
                                            attrs: {
                                                label: t,
                                                value: e
                                            }
                                        })
                                    })), 1)], 1)]
                                }
                            }], null, !0)
                        }), t._v(" "), r("el-table-column", {
                            attrs: {
                                label: "IMEI",
                                align: "center"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [e.row.type ? r("div", [t._v(t._s(e.row.imei))]) : r("div", [r("el-input", {
                                        attrs: {
                                            placeholder: "IMEI"
                                        },
                                        model: {
                                            value: e.row.imei,
                                            callback: function(r) {
                                                t.$set(e.row, "imei", r)
                                            },
                                            expression: "scope.row.imei"
                                        }
                                    })], 1)]
                                }
                            }], null, !0)
                        }), t._v(" "), r("el-table-column", {
                            attrs: {
                                label: "异常数量",
                                align: "center"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [e.row.type ? r("div", [t._v("1")]) : r("div", [r("el-input", {
                                        attrs: {
                                            placeholder: "数量"
                                        },
                                        model: {
                                            value: e.row.num,
                                            callback: function(r) {
                                                t.$set(e.row, "num", r)
                                            },
                                            expression: "scope.row.num"
                                        }
                                    })], 1)]
                                }
                            }], null, !0)
                        }), t._v(" "), r("el-table-column", {
                            attrs: {
                                label: "成本",
                                align: "center"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [e.row.type ? r("div", [t._v(t._s(e.row.product_cost.cost))]) : r("div", [r("el-input", {
                                        attrs: {
                                            placeholder: "成本"
                                        },
                                        model: {
                                            value: e.row.product_cost.cost,
                                            callback: function(r) {
                                                t.$set(e.row.product_cost, "cost", r)
                                            },
                                            expression: "scope.row.product_cost.cost"
                                        }
                                    })], 1)]
                                }
                            }], null, !0)
                        }), t._v(" "), r("el-table-column", {
                            attrs: {
                                label: "异常原因",
                                align: "center"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [r("ExceptionReason", {
                                        attrs: {
                                            mode: "edit"
                                        },
                                        model: {
                                            value: e.row.abnormalVal,
                                            callback: function(r) {
                                                t.$set(e.row, "abnormalVal", r)
                                            },
                                            expression: "scope.row.abnormalVal"
                                        }
                                    })]
                                }
                            }], null, !0)
                        }), t._v(" "), r("el-table-column", {
                            attrs: {
                                label: "异常描述",
                                align: "center"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [r("el-input", {
                                        attrs: {
                                            type: "textarea",
                                            rows: 3,
                                            placeholder: "请输入内容"
                                        },
                                        model: {
                                            value: e.row.textarea,
                                            callback: function(r) {
                                                t.$set(e.row, "textarea", r)
                                            },
                                            expression: "scope.row.textarea"
                                        }
                                    })]
                                }
                            }], null, !0)
                        }), t._v(" "), r("el-table-column", {
                            attrs: {
                                label: "操作",
                                align: "center"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [r("el-button", {
                                        attrs: {
                                            type: "danger",
                                            size: "mini"
                                        },
                                        on: {
                                            click: function(r) {
                                                return t.handleClickDelete(n, e.$index)
                                            }
                                        }
                                    }, [t._v("删除")])]
                                }
                            }], null, !0)
                        })], 1)], 1)], 1)], 1)
                    })), t._v(" "), r("el-row", [r("el-col", {
                        staticClass: "flex-center"
                    }, [t.scannData.length > 0 ? r("el-button", {
                        attrs: {
                            type: "primary",
                            loading: t.saveLoading
                        },
                        on: {
                            click: t.tableSubmit
                        }
                    }, [t._v("完成提交")]) : t._e()], 1)], 1)], 2)
                },
                a = [],
                o = r("4838"),
                i = r.n(o),
                u = r("8346"),
                c = r("f4c4"),
                s = r("2934"),
                l = r("1504"),
                d = r("c058");

            function p(t, e) {
                var r;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (r = f(t)) || e && t && "number" === typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
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
                    u = !1;
                return {
                    s: function() {
                        r = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = r.next();
                        return i = t.done, t
                    },
                    e: function(t) {
                        u = !0, o = t
                    },
                    f: function() {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (u) throw o
                        }
                    }
                }
            }

            function f(t, e) {
                if (t) {
                    if ("string" === typeof t) return _(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _(t, e) : void 0
                }
            }

            function _(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function m(t, e, r, n, a, o, i) {
                try {
                    var u = t[o](i),
                        c = u.value
                } catch (s) {
                    return void r(s)
                }
                u.done ? e(c) : Promise.resolve(c).then(n, a)
            }

            function h(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = t.apply(e, r);

                        function i(t) {
                            m(o, n, a, i, u, "next", t)
                        }

                        function u(t) {
                            m(o, n, a, i, u, "throw", t)
                        }
                        i(void 0)
                    }))
                }
            }
            var b = {
                    components: {
                        TypeBrandModel: l["a"],
                        ExceptionReason: d["a"]
                    },
                    data: function() {
                        return {
                            imei: "",
                            scannData: [],
                            dict: {
                                types: []
                            },
                            loading: !1,
                            saveLoading: !1
                        }
                    },
                    mounted: function() {
                        this.$route.query.no && this.getDetail(), this.getTypes()
                    },
                    methods: {
                        getAbnormalImeiData: function() {
                            var t = h(i.a.mark((function t() {
                                var e, r, n, a, o, c, s, l, d;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e = this.$loading({
                                                target: ".app-container"
                                            }), t.prev = 1, t.next = 4, Object(u["a"])({
                                                imei: this.imei,
                                                transfer_order_id: this.$route.query.id ? this.$route.query.id : null
                                            });
                                        case 4:
                                            if (r = t.sent, this.imei = null, e.close(), n = r.data.detail, n.abnormalVal = null, n.textarea = null, 0 == this.scannData.length) this.scannData.push({
                                                transfer_order: r.data.transfer_order,
                                                detail: [n]
                                            });
                                            else {
                                                for (o = 0; o < this.scannData.length; o++) a = this.scannData[o];
                                                if (a.transfer_order.id == r.data.transfer_order.id) {
                                                    c = !0, s = p(a.detail);
                                                    try {
                                                        for (s.s(); !(l = s.n()).done;) d = l.value, n.product_id == d.product_id && (c = !1)
                                                    } catch (i) {
                                                        s.e(i)
                                                    } finally {
                                                        s.f()
                                                    }
                                                    c && a.detail.push(n)
                                                } else this.scannData.push({
                                                    transfer_order: r.data.transfer_order,
                                                    detail: [n]
                                                })
                                            }
                                            t.next = 17;
                                            break;
                                        case 13:
                                            t.prev = 13, t.t0 = t["catch"](1), e.close(), this.imei = null;
                                        case 17:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [1, 13]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        handleClickDelete: function(t, e) {
                            this.scannData[t].detail.splice(e, 1)
                        },
                        tableSubmit: function() {
                            var t = h(i.a.mark((function t() {
                                var e, r, n, a, o;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            t.prev = 0, e = [], r = p(this.scannData[0].detail);
                                            try {
                                                for (r.s(); !(n = r.n()).done;) a = n.value, e.push({
                                                    product_id: a.product_id ? a.product_id : 0,
                                                    reason: a.abnormalVal,
                                                    remark: a.textarea,
                                                    cost_price: a.product_cost.cost,
                                                    model_id: a.model_id,
                                                    brand_id: a.brand_id,
                                                    type_id: a.type_id,
                                                    num: a.product_id ? 1 : a.num
                                                })
                                            } catch (i) {
                                                r.e(i)
                                            } finally {
                                                r.f()
                                            }
                                            return o = {
                                                transfer_order_id: this.scannData[0].transfer_order.id,
                                                products: e
                                            }, this.saveLoading = !0, t.next = 8, Object(u["b"])(o);
                                        case 8:
                                            t.sent, this.saveLoading = !1, this.$message.success("提交成功！"), t.next = 16;
                                            break;
                                        case 13:
                                            t.prev = 13, t.t0 = t["catch"](0), this.saveLoading = !1;
                                        case 16:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 13]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        addRows: function(t) {
                            this.scannData[t].detail.push({
                                type_id: null,
                                brand_data: [],
                                brand_id: null,
                                model_data: [],
                                model_id: null,
                                imei: null,
                                num: 1,
                                product_cost: {
                                    cost: null
                                },
                                abnormalVal: null,
                                textarea: null
                            })
                        },
                        getTypes: function() {
                            var t = h(i.a.mark((function t() {
                                var e;
                                return i.a.wrap((function(t) {
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
                            var t = h(i.a.mark((function t(e) {
                                var r;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(s["d"])({
                                                type_id: e.type_id
                                            });
                                        case 2:
                                            r = t.sent, this.$set(e, "brand_data", r.data);
                                        case 4:
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
                        getModels: function() {
                            var t = h(i.a.mark((function t(e) {
                                var r;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(s["i"])({
                                                type_id: e.type_id,
                                                brand_id: e.brand_id
                                            });
                                        case 2:
                                            r = t.sent, this.$set(e, "model_data", r.data);
                                        case 4:
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
                        getDetail: function() {
                            var t = h(i.a.mark((function t() {
                                var e, r;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e = this.$loading({
                                                target: ".app-container"
                                            }), t.next = 3, Object(c["d"])({
                                                transfer_order_id: this.$route.query.id
                                            });
                                        case 3:
                                            r = t.sent, e.close(), this.$set(this, "scannData", [{
                                                transfer_order: r.data.transfer_order,
                                                detail: []
                                            }]);
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
                        }()
                    }
                },
                v = b,
                y = (r("5392"), r("5d22")),
                w = Object(y["a"])(v, n, a, !1, null, "e6b28760", null);
            e["default"] = w.exports
        },
        8346: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return a
            })), r.d(e, "b", (function() {
                return o
            }));
            var n = r("b775");

            function a(t) {
                return Object(n["a"])({
                    url: "/api/edit/abnormal_report_scan_tag",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/edit/abnormal_report",
                    method: "post",
                    data: t
                })
            }
        },
        c5f3: function(t, e, r) {},
        f4c4: function(t, e, r) {
            "use strict";
            r.d(e, "h", (function() {
                return a
            })), r.d(e, "d", (function() {
                return o
            })), r.d(e, "e", (function() {
                return i
            })), r.d(e, "c", (function() {
                return u
            })), r.d(e, "g", (function() {
                return c
            })), r.d(e, "l", (function() {
                return s
            })), r.d(e, "n", (function() {
                return l
            })), r.d(e, "m", (function() {
                return d
            })), r.d(e, "b", (function() {
                return p
            })), r.d(e, "f", (function() {
                return f
            })), r.d(e, "i", (function() {
                return _
            })), r.d(e, "p", (function() {
                return m
            })), r.d(e, "k", (function() {
                return h
            })), r.d(e, "j", (function() {
                return b
            })), r.d(e, "o", (function() {
                return v
            })), r.d(e, "a", (function() {
                return y
            })), r.d(e, "q", (function() {
                return w
            }));
            var n = r("b775");

            function a(t) {
                return Object(n["a"])({
                    url: "/api/edit/my_receive",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/edit/show_receive_order",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(n["a"])({
                    url: "/api/edit/edit_view",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "/api/brief_templates",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(n["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(n["a"])({
                    url: "api/public/product/oss_upload_sts_token_for_web",
                    method: "get",
                    data: t
                })
            }

            function l(t) {
                return Object(n["a"])({
                    url: "/api/edit/image_upload",
                    method: "post",
                    data: t,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            }

            function d(t) {
                return Object(n["a"])({
                    url: "/api/input/get_brand",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(n["a"])({
                    url: "/api/input/get_model",
                    method: "get",
                    params: t
                })
            }

            function f(t) {
                return Object(n["a"])({
                    url: "/api/product/goods_conditions",
                    method: "get",
                    params: t
                })
            }

            function _(t) {
                return Object(n["a"])({
                    url: "/api/product/pricing_rules",
                    method: "post",
                    data: t
                })
            }

            function m(t) {
                return Object(n["a"])({
                    url: "/api/edit/edit_save",
                    method: "post",
                    data: t
                })
            }

            function h(t) {
                return Object(n["a"])({
                    url: "/api/input/products_search",
                    method: "get",
                    params: t
                })
            }

            function b(t) {
                return Object(n["a"])({
                    url: "/api/error_report/product_error_reports",
                    method: "get",
                    params: t
                })
            }

            function v(t) {
                return Object(n["a"])({
                    url: "/api/error_report/mark_handled",
                    method: "post",
                    data: t
                })
            }

            function y(t) {
                return Object(n["a"])({
                    url: "/api/phone_appearance/datas",
                    method: "get",
                    params: t
                })
            }

            function w(t) {
                return Object(n["a"])({
                    url: "/api/product/save_zz_color_id",
                    method: "post",
                    data: t
                })
            }
        }
    }
]);