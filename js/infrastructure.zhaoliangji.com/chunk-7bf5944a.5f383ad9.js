(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-7bf5944a"], {
        2120: function(t, e, r) {},
        2934: function(t, e, r) {
            "use strict";
            r.d(e, "p", (function() {
                return a
            })), r.d(e, "d", (function() {
                return o
            })), r.d(e, "i", (function() {
                return i
            })), r.d(e, "m", (function() {
                return c
            })), r.d(e, "b", (function() {
                return u
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
                return h
            })), r.d(e, "l", (function() {
                return _
            })), r.d(e, "q", (function() {
                return m
            })), r.d(e, "f", (function() {
                return b
            })), r.d(e, "o", (function() {
                return v
            })), r.d(e, "c", (function() {
                return y
            })), r.d(e, "e", (function() {
                return g
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

            function c(t) {
                return Object(n["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
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

            function h(t) {
                return Object(n["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: t
                })
            }

            function _(t) {
                return Object(n["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: t
                })
            }

            function m(t) {
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

            function g(t) {
                return Object(n["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: t
                })
            }
        },
        3566: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return a
            })), r.d(e, "c", (function() {
                return o
            })), r.d(e, "b", (function() {
                return i
            }));
            var n = r("b775");

            function a(t) {
                return Object(n["a"])({
                    url: "/api/re_check/abnormal_report_scan_tag",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/re_check/batch_abnormal_report",
                    method: "post",
                    data: t
                })
            }

            function i(t) {
                return Object(n["a"])({
                    url: "/api/re_check/abnormal_report",
                    method: "post",
                    data: t
                })
            }
        },
        "98de": function(t, e, r) {
            "use strict";
            r.d(e, "f", (function() {
                return a
            })), r.d(e, "k", (function() {
                return o
            })), r.d(e, "a", (function() {
                return i
            })), r.d(e, "b", (function() {
                return c
            })), r.d(e, "e", (function() {
                return u
            })), r.d(e, "c", (function() {
                return s
            })), r.d(e, "d", (function() {
                return l
            })), r.d(e, "j", (function() {
                return d
            })), r.d(e, "i", (function() {
                return p
            })), r.d(e, "h", (function() {
                return f
            })), r.d(e, "g", (function() {
                return h
            }));
            var n = r("b775");

            function a(t) {
                return Object(n["a"])({
                    url: "/api/check/scan_info",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/check/scan_receive",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(n["a"])({
                    url: "/api/check/save",
                    method: "post",
                    data: t
                })
            }

            function c(t) {
                return Object(n["a"])({
                    url: "/api/check/save_and_transfer_store",
                    method: "post",
                    data: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "/api/check/edit_check_view",
                    method: "post",
                    data: t
                })
            }

            function s(t) {
                return Object(n["a"])({
                    url: "/api/check/edit_check",
                    method: "post",
                    data: t
                })
            }

            function l(t) {
                return Object(n["a"])({
                    url: "/api/check_error_types",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(n["a"])({
                    url: "api/check/scan_receive_for_imei",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(n["a"])({
                    url: "api/check/scan_info_for_imei",
                    method: "get",
                    params: t
                })
            }

            function f(t) {
                return Object(n["a"])({
                    url: "api/check/save_and_auto_switch",
                    method: "post",
                    data: t
                })
            }

            function h(t) {
                return Object(n["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality_data/history_report",
                    method: "get",
                    params: t
                })
            }
        },
        b45d: function(t, e, r) {
            "use strict";
            r("2120")
        },
        c30b: function(t, e, r) {
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
                    }, [r("ImeiSearch", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            placeholder: "扫描IMEI号"
                        },
                        on: {
                            done: t.getList
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
                            key: n,
                            staticClass: "header-search"
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
                        }, [r("div", [t._v("\n                流转单号：\n                "), r("span", [t._v(t._s(e.transfer_order.transfer_order_no))])]), t._v(" "), r("div", [t._v("\n                流转步骤：\n                "), r("span", [t._v(t._s(e.transfer_order.source_node.name) + "—>" + t._s(e.transfer_order.to_node.name))])]), t._v(" "), r("div", [t._v("\n                创建时间：\n                "), r("span", [t._v(t._s(e.transfer_order.created_at))])]), t._v(" "), r("div", [t._v("\n                异常数量合计：\n                "), r("span", [t._v(t._s(e.detail.length))])]), t._v(" "), r("div", [t._v("\n                成本合计：\n                "), r("span", [t._v(t._s(e.total_cast))])])]), t._v(" "), r("el-col", {
                            staticClass: "header-total",
                            attrs: {
                                span: 8
                            }
                        }, [r("el-button", {
                            attrs: {
                                type: "danger",
                                size: "mini",
                                plain: ""
                            },
                            on: {
                                click: function(e) {
                                    return t.handleClickTableDelete(n)
                                }
                            }
                        }, [t._v("删除")])], 1)], 1)], 1)], 1)], 1), t._v(" "), r("el-row", {
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
                                prop: "brand.name",
                                label: "品牌",
                                width: "100",
                                align: "center"
                            }
                        }), t._v(" "), r("el-table-column", {
                            attrs: {
                                prop: "model.name",
                                label: "型号",
                                align: "center"
                            }
                        }), t._v(" "), r("el-table-column", {
                            attrs: {
                                prop: "imei",
                                label: "IMEI",
                                align: "center"
                            }
                        }), t._v(" "), r("el-table-column", {
                            attrs: {
                                label: "异常数量",
                                align: "center",
                                width: "100"
                            }
                        }, [t._v("1")]), t._v(" "), r("el-table-column", {
                            attrs: {
                                prop: "product_cost.cost",
                                label: "成本",
                                align: "center",
                                width: "100"
                            }
                        }), t._v(" "), r("el-table-column", {
                            attrs: {
                                label: "供应商",
                                align: "center",
                                width: "100",
                                prop: "suppiler_name.name"
                            }
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
                                            mode: "check"
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
                                label: "故障类型",
                                align: "center",
                                width: "130"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [r("ErrorType", {
                                        model: {
                                            value: e.row.error_type_ids,
                                            callback: function(r) {
                                                t.$set(e.row, "error_type_ids", r)
                                            },
                                            expression: "scope.row.error_type_ids"
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
                            loading: t.saveLoading,
                            type: "primary"
                        },
                        on: {
                            click: t.tableSubmit
                        }
                    }, [t._v("完成提交")]) : t._e()], 1)], 1)], 2)
                },
                a = [],
                o = r("4838"),
                i = r.n(o),
                c = r("3566"),
                u = r("c058"),
                s = r("98de"),
                l = r("3067"),
                d = r("246e");

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
                    c = !1;
                return {
                    s: function() {
                        r = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = r.next();
                        return i = t.done, t
                    },
                    e: function(t) {
                        c = !0, o = t
                    },
                    f: function() {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function f(t, e) {
                if (t) {
                    if ("string" === typeof t) return h(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? h(t, e) : void 0
                }
            }

            function h(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function _(t, e, r, n, a, o, i) {
                try {
                    var c = t[o](i),
                        u = c.value
                } catch (s) {
                    return void r(s)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, a)
            }

            function m(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = t.apply(e, r);

                        function i(t) {
                            _(o, n, a, i, c, "next", t)
                        }

                        function c(t) {
                            _(o, n, a, i, c, "throw", t)
                        }
                        i(void 0)
                    }))
                }
            }
            var b = {
                    name: "Main",
                    components: {
                        ExceptionReason: u["a"],
                        ErrorType: l["a"],
                        ImeiSearch: d["a"]
                    },
                    data: function() {
                        return {
                            imei: "",
                            scannData: [],
                            total_cast: 0,
                            loading: !1,
                            saveLoading: !1,
                            errorTypes: []
                        }
                    },
                    mounted: function() {
                        this.getCheckErrorTypes()
                    },
                    methods: {
                        getList: function() {
                            var t = m(i.a.mark((function t() {
                                var e, r;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (!this.imei) {
                                                t.next = 16;
                                                break
                                            }
                                            return e = null, t.prev = 2, e = this.$loading({
                                                target: ".app-container"
                                            }), t.next = 6, Object(c["a"])({
                                                imei: this.imei
                                            });
                                        case 6:
                                            r = t.sent, e.close(), this.isSame(r.data) || this.addScan(r.data), this.countPrice(), t.next = 15;
                                            break;
                                        case 12:
                                            t.prev = 12, t.t0 = t["catch"](2), e.close();
                                        case 15:
                                            this.imei = null;
                                        case 16:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [2, 12]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        isSame: function(t) {
                            var e, r = p(this.scannData);
                            try {
                                for (r.s(); !(e = r.n()).done;) {
                                    var n = e.value;
                                    if (n.transfer_order.transfer_order_no == t.transfer_order.transfer_order_no) {
                                        var a, o = p(n.detail);
                                        try {
                                            for (o.s(); !(a = o.n()).done;) {
                                                var i = a.value;
                                                if (i.imei == t.detail.imei) return !0
                                            }
                                        } catch (c) {
                                            o.e(c)
                                        } finally {
                                            o.f()
                                        }
                                    }
                                }
                            } catch (c) {
                                r.e(c)
                            } finally {
                                r.f()
                            }
                            return !1
                        },
                        addScan: function(t) {
                            var e, r = !0,
                                n = p(this.scannData);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var a = e.value;
                                    a.transfer_order.transfer_order_no == t.transfer_order.transfer_order_no && (r = !1, a.detail.push(t.detail))
                                }
                            } catch (o) {
                                n.e(o)
                            } finally {
                                n.f()
                            }
                            r && (t.detail = [t.detail], this.scannData.push(t))
                        },
                        countPrice: function() {
                            var t, e = p(this.scannData);
                            try {
                                for (e.s(); !(t = e.n()).done;) {
                                    var r, n = t.value,
                                        a = 0,
                                        o = p(n.detail);
                                    try {
                                        for (o.s(); !(r = o.n()).done;) {
                                            var i = r.value;
                                            a += Number(i.product_cost.cost)
                                        }
                                    } catch (c) {
                                        o.e(c)
                                    } finally {
                                        o.f()
                                    }
                                    n.total_cast = a
                                }
                            } catch (c) {
                                e.e(c)
                            } finally {
                                e.f()
                            }
                        },
                        handleClickTableDelete: function(t) {
                            this.scannData.splice(t, 1)
                        },
                        handleClickDelete: function(t, e) {
                            this.scannData[t].detail.splice(e, 1)
                        },
                        tableSubmit: function() {
                            var t = m(i.a.mark((function t() {
                                var e, r, n, a, o, u, s, l, d;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            t.prev = 0, e = [], r = p(this.scannData);
                                            try {
                                                for (r.s(); !(n = r.n()).done;) {
                                                    a = n.value, o = [], u = p(a.detail);
                                                    try {
                                                        for (u.s(); !(s = u.n()).done;) l = s.value, o.push({
                                                            product_id: l.product_id,
                                                            reason: l.abnormalVal,
                                                            remark: l.textarea,
                                                            error_type_ids: l.error_type_ids,
                                                            cost_price: l.product_cost.cost,
                                                            model_id: l.model_id,
                                                            brand_id: l.brand_id,
                                                            type_id: l.type_id
                                                        })
                                                    } catch (i) {
                                                        u.e(i)
                                                    } finally {
                                                        u.f()
                                                    }
                                                    e.push({
                                                        transfer_order_id: a.transfer_order.id,
                                                        products: o
                                                    })
                                                }
                                            } catch (i) {
                                                r.e(i)
                                            } finally {
                                                r.f()
                                            }
                                            return this.saveLoading = !0, t.next = 7, Object(c["c"])({
                                                abnormal_report_orders: e
                                            });
                                        case 7:
                                            d = t.sent, this.saveLoading = !1, 1 == d.code && (this.$message({
                                                message: "提交成功",
                                                type: "success"
                                            }), this.$router.push({
                                                name: "recheck-exception-list"
                                            })), t.next = 15;
                                            break;
                                        case 12:
                                            t.prev = 12, t.t0 = t["catch"](0), this.saveLoading = !1;
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 12]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        getCheckErrorTypes: function() {
                            var t = m(i.a.mark((function t() {
                                var e;
                                return i.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(s["d"])();
                                        case 2:
                                            e = t.sent, this.errorTypes = e.data;
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
                        handleErrorType: function(t) {
                            console.log(t.error_type_ids);
                            var e, r = [],
                                n = p(this.errorTypes);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var a = e.value;
                                    t.error_type_ids.indexOf(a.id) > -1 && r.push(a.name)
                                }
                            } catch (o) {
                                n.e(o)
                            } finally {
                                n.f()
                            }
                            /##(\S*)##/.test(t.textarea) ? t.textarea = t.textarea.replace(/##(\S*)##/, "##" + r.join(",") + "##") : t.textarea = "##" + r.join(",") + "##"
                        }
                    }
                },
                v = b,
                y = (r("b45d"), r("5d22")),
                g = Object(y["a"])(v, n, a, !1, null, "4bb25012", null);
            e["default"] = g.exports
        }
    }
]);