(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-e45a9398"], {
        "02aa": function(t, e, r) {
            "use strict";
            var n = r("b775"),
                a = r("7f43"),
                i = r.n(a),
                o = r("1503"),
                s = r.n(o),
                c = r("7893"),
                u = r("4360"),
                l = r("5f87"),
                d = i.a.create({
                    baseURL: "https://infrastructureapi.zhaoliangji.com/",
                    withCredentials: !0,
                    timeout: 6e4,
                    transformResponse: [function(t) {
                        return s.a.parse(t)
                    }]
                });
            d.interceptors.request.use((function(t) {
                return Object(l["a"])() && (t.headers["Authorization"] = "Bearer ".concat(Object(l["a"])())), t.headers["Content-Type"] = "application/json", t
            }), (function(t) {
                return console.log(t), Promise.reject(t)
            })), d.interceptors.response.use((function(t) {
                var e = t.data;
                return 1 !== e.code ? (Object(c["Message"])({
                    message: "<span style='font-size: 18px;font-weight: 600;line-height: 26px;'>".concat(e.msg, "</span>") || !1,
                    type: "error",
                    dangerouslyUseHTMLString: !0,
                    duration: 6e3,
                    showClose: !0
                }), 401 == e.code && (c["Message"].error(e.msg || "您还没有登录！"), u["a"].dispatch("user/resetToken").then((function() {
                    location.href = "/"
                }))), 403 == e.code && c["Message"].error(e.msg || "抱歉，权限不够！"), console.log(e), Promise.reject(e.msg || "error")) : e
            }), (function(t) {
                if (console.log(t.response), t.response && "401" == t.response.status) c["Message"].error(t.response.data.msg || "抱歉，权限不够！"), u["a"].dispatch("user/resetToken").then((function() {
                    location.reload()
                }));
                else {
                    var e = "";
                    e = t.response ? t.response.data.msg : t, Object(c["Message"])({
                        message: e,
                        type: "error",
                        duration: 5e3,
                        showClose: !0
                    })
                }
                return Promise.reject(t)
            }));
            var p = d;

            function f(t) {
                return Object(n["a"])({
                    url: "/api/sorting/check",
                    method: "get",
                    params: t
                })
            }

            function h(t) {
                return Object(n["a"])({
                    url: "/api/sorting/sta",
                    method: "get",
                    params: t
                })
            }

            function m(t) {
                return Object(n["a"])({
                    url: "/api/sorting/get_transfer_list",
                    method: "get",
                    params: t
                })
            }

            function b(t) {
                return Object(n["a"])({
                    url: "/api/sorting/transfer",
                    method: "post",
                    params: t
                })
            }

            function _(t) {
                return p({
                    url: "/api/sorting/get_list",
                    method: "get",
                    params: t
                })
            }

            function g(t) {
                return p({
                    url: "/api/sorting/detail",
                    method: "get",
                    params: t
                })
            }

            function v(t) {
                return Object(n["a"])({
                    url: "/api/sorting/create_qc_code",
                    method: "get",
                    params: t
                })
            }

            function y(t) {
                return Object(n["a"])({
                    url: "/api/sorting/unpack",
                    method: "post",
                    params: t
                })
            }

            function O(t) {
                return Object(n["a"])({
                    url: "/api/sorting/transfer_orders",
                    method: "get",
                    params: t
                })
            }

            function j(t) {
                return Object(n["a"])({
                    url: "/api/admin_tool/change_fitting",
                    method: "post",
                    params: t
                })
            }
            r.d(e, "d", (function() {
                return f
            })), r.d(e, "g", (function() {
                return h
            })), r.d(e, "h", (function() {
                return m
            })), r.d(e, "j", (function() {
                return b
            })), r.d(e, "e", (function() {
                return _
            })), r.d(e, "c", (function() {
                return g
            })), r.d(e, "a", (function() {
                return v
            })), r.d(e, "i", (function() {
                return y
            })), r.d(e, "f", (function() {
                return O
            })), r.d(e, "b", (function() {
                return j
            }))
        },
        2934: function(t, e, r) {
            "use strict";
            r.d(e, "p", (function() {
                return a
            })), r.d(e, "d", (function() {
                return i
            })), r.d(e, "i", (function() {
                return o
            })), r.d(e, "m", (function() {
                return s
            })), r.d(e, "b", (function() {
                return c
            })), r.d(e, "g", (function() {
                return u
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
                return m
            })), r.d(e, "q", (function() {
                return b
            })), r.d(e, "f", (function() {
                return _
            })), r.d(e, "o", (function() {
                return g
            })), r.d(e, "c", (function() {
                return v
            })), r.d(e, "e", (function() {
                return y
            }));
            var n = r("b775");

            function a(t) {
                return Object(n["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(n["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
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

            function u(t) {
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

            function m(t) {
                return Object(n["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: t
                })
            }

            function b(t) {
                return Object(n["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: t
                })
            }

            function _(t) {
                return Object(n["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: t
                })
            }

            function g(t) {
                return Object(n["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: t
                })
            }

            function v(t) {
                return Object(n["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: t
                })
            }

            function y(t) {
                return Object(n["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: t
                })
            }
        },
        "33e9": function(t, e, r) {
            "use strict";
            r("ee0f")
        },
        "5b23": function(t, e, r) {
            "use strict";
            r("f2db")
        },
        "98f3": function(t, e, r) {
            "use strict";
            r("de6c")
        },
        cd13: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "app-container"
                    }, [r("ListFilter", {
                        attrs: {
                            filter: t.filter
                        },
                        on: {
                            search: t.handleSearch
                        }
                    }), t._v(" "), r("Stat", {
                        attrs: {
                            "my-num": t.my_num,
                            "today-total": t.today_total
                        }
                    }), t._v(" "), r("Transfer", {
                        attrs: {
                            "wait-transfer": t.wait_transfer_num
                        }
                    }), t._v(" "), r("Table", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: t.loading,
                            expression: "loading"
                        }],
                        attrs: {
                            columns: t.columns,
                            data: t.listData,
                            border: ""
                        }
                    })], 1)
                },
                a = [],
                i = r("4838"),
                o = r.n(i),
                s = r("2090"),
                c = r("02aa"),
                u = function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("el-form", {
                        staticClass: "sorting-form_inline",
                        attrs: {
                            inline: !0
                        }
                    }, [r("el-form-item", [r("el-input", {
                        directives: [{
                            name: "focus",
                            rawName: "v-focus"
                        }],
                        attrs: {
                            placeholder: "扫描采购单号/物流单号",
                            clearable: ""
                        },
                        nativeOn: {
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.handleSearch(e)
                            }
                        },
                        model: {
                            value: t.filter.logistics_order_no,
                            callback: function(e) {
                                t.$set(t.filter, "logistics_order_no", e)
                            },
                            expression: "filter.logistics_order_no"
                        }
                    })], 1), t._v(" "), r("el-form-item", [r("el-input", {
                        attrs: {
                            placeholder: "输入联系人",
                            clearable: ""
                        },
                        model: {
                            value: t.filter.real_name,
                            callback: function(e) {
                                t.$set(t.filter, "real_name", e)
                            },
                            expression: "filter.real_name"
                        }
                    })], 1), t._v(" "), r("el-form-item", [r("el-input", {
                        attrs: {
                            placeholder: "输入第三方业务单号",
                            clearable: ""
                        },
                        model: {
                            value: t.filter.business_order_no,
                            callback: function(e) {
                                t.$set(t.filter, "business_order_no", e)
                            },
                            expression: "filter.business_order_no"
                        }
                    })], 1), t._v(" "), r("el-form-item", [r("el-input", {
                        attrs: {
                            placeholder: "UID",
                            clearable: ""
                        },
                        model: {
                            value: t.filter.uid,
                            callback: function(e) {
                                t.$set(t.filter, "uid", e)
                            },
                            expression: "filter.uid"
                        }
                    })], 1), t._v(" "), r("el-form-item", [r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.handleSearch
                        }
                    }, [t._v("查询")])], 1)], 1)
                },
                l = [],
                d = {
                    props: {
                        filter: {
                            type: Object,
                            default: function() {
                                return {
                                    logistics_order_no: "",
                                    business_order_no: "",
                                    real_name: "",
                                    uid: ""
                                }
                            }
                        }
                    },
                    methods: {
                        handleSearch: function() {
                            this.$emit("search", this.filter)
                        }
                    }
                },
                p = d,
                f = (r("98f3"), r("5d22")),
                h = Object(f["a"])(p, u, l, !1, null, "7b2fe4ec", null),
                m = h.exports,
                b = function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "sort_stat"
                    }, [r("el-tag", {
                        attrs: {
                            type: "danger"
                        }
                    }, [t._v("今日共分拣 " + t._s(t.todayTotal))]), t._v(" "), r("el-tag", {
                        attrs: {
                            type: "danger"
                        }
                    }, [t._v("我的分拣数 " + t._s(t.myNum))])], 1)
                },
                _ = [],
                g = {
                    props: {
                        todayTotal: {
                            type: [Number, String],
                            default: 0
                        },
                        myNum: {
                            type: [Number, String],
                            default: 0
                        }
                    }
                },
                v = g,
                y = (r("33e9"), Object(f["a"])(v, b, _, !1, null, "0abb7b8d", null)),
                O = y.exports,
                j = function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "mrg-btm-20"
                    }, [r("el-tag", {
                        attrs: {
                            type: "success"
                        }
                    }, [t._v("已分拣待流转" + t._s(t.waitTransfer) + "台")]), t._v(" "), r("el-button", {
                        attrs: {
                            size: "mini",
                            type: "primary"
                        },
                        on: {
                            click: t.handleSearch
                        }
                    }, [t._v("\n    分配流转\n  ")]), t._v(" "), r("el-dialog", {
                        attrs: {
                            visible: t.outerVisible,
                            "close-on-click-modal": !1,
                            "close-on-press-escape": !1,
                            "show-close": !1,
                            top: "1vh"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.outerVisible = e
                            }
                        }
                    }, [r("AssignDialog", {
                        attrs: {
                            "show-dialog": t.innerVisible,
                            "disabled-node": !0
                        },
                        on: {
                            "update:showDialog": function(e) {
                                t.innerVisible = e
                            },
                            "update:show-dialog": function(e) {
                                t.innerVisible = e
                            },
                            done: t.handleAssingDone
                        },
                        model: {
                            value: t.assignForm,
                            callback: function(e) {
                                t.assignForm = e
                            },
                            expression: "assignForm"
                        }
                    }), t._v(" "), r("h3", {
                        staticClass: "transfer-title",
                        attrs: {
                            slot: "title"
                        },
                        slot: "title"
                    }, [r("span", [t._v("创建流转单")]), r("span", [t._v("待分配件数：" + t._s(t.noQuantity))])]), t._v(" "), r("div", [r("el-input", {
                        directives: [{
                            name: "focus",
                            rawName: "v-focus"
                        }],
                        staticClass: "mrg-btm-20",
                        style: {
                            width: "180px"
                        },
                        attrs: {
                            placeholder: "扫描质检码",
                            clearable: ""
                        },
                        nativeOn: {
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.handleQcSearch(e)
                            }
                        },
                        model: {
                            value: t.qc_code,
                            callback: function(e) {
                                t.qc_code = e
                            },
                            expression: "qc_code"
                        }
                    }), t._v(" "), r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.handleQcSearch
                        }
                    }, [t._v("查询")])], 1), t._v(" "), r("el-table", {
                        ref: "transferTable",
                        attrs: {
                            data: t.listData,
                            border: "",
                            height: "55vh"
                        },
                        on: {
                            "selection-change": t.handleSelectionChange
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            type: "selection",
                            width: "55"
                        }
                    }), t._v(" "), t._l(t.columns, (function(t) {
                        return r("el-table-column", {
                            key: t.prop,
                            attrs: {
                                prop: t.prop,
                                label: t.label
                            }
                        })
                    }))], 2), t._v(" "), r("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [r("el-button", {
                        on: {
                            click: function(e) {
                                t.outerVisible = !1
                            }
                        }
                    }, [t._v("取 消")]), t._v(" "), r("el-button", {
                        attrs: {
                            type: "primary",
                            disabled: t.detailIds.length <= 0
                        },
                        on: {
                            click: t.handleDispatch
                        }
                    }, [t._v("\n        分配流转\n      ")])], 1)], 1)], 1)
                },
                w = [],
                k = r("b7b8");

            function x(t, e, r, n, a, i, o) {
                try {
                    var s = t[i](o),
                        c = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, a)
            }

            function D(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var i = t.apply(e, r);

                        function o(t) {
                            x(i, n, a, o, s, "next", t)
                        }

                        function s(t) {
                            x(i, n, a, o, s, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            var q = {
                    components: {
                        AssignDialog: k["a"]
                    },
                    props: {
                        waitTransfer: {
                            type: [Number, String],
                            default: 0
                        }
                    },
                    data: function() {
                        return {
                            qc_code: "",
                            columns: [{
                                label: "质检码",
                                prop: "qc_code"
                            }, {
                                label: "物流单号",
                                prop: "logistics_order_no"
                            }, {
                                label: "联系人",
                                prop: "real_name"
                            }, {
                                label: "电话",
                                prop: "mobile"
                            }, {
                                label: "商品信息",
                                prop: "zz_cate_name"
                            }],
                            listData: [],
                            noQuantity: "",
                            detailIds: [],
                            assignForm: {
                                to_node_id: 2
                            },
                            outerVisible: !1,
                            innerVisible: !1
                        }
                    },
                    methods: {
                        handleSearch: function() {
                            var t = D(o.a.mark((function t() {
                                var e, r = this;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (e = !1, this.listData.forEach((function(t) {
                                                    t.qc_code == r.qc_code && (e = !0)
                                                })), !e) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.abrupt("return", !1);
                                        case 4:
                                            return t.next = 6, Object(c["h"])({
                                                qc_code: this.qc_code
                                            }).then((function(t) {
                                                var e, n = t.data;
                                                r.outerVisible = !0;
                                                var a = n[0];
                                                if (a) {
                                                    var i = r.listData,
                                                        o = !0;
                                                    i.forEach((function(t) {
                                                        t.qc_code == a.qc_code && (o = !1)
                                                    })), o && r.listData.unshift(a)
                                                }
                                                r.noQuantity = (null === (e = r.listData) || void 0 === e ? void 0 : e.length) || 0
                                            }));
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
                        handleQcSearch: function() {
                            var t = D(o.a.mark((function t() {
                                var e, r, n, a = this;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, this.handleSearch();
                                        case 2:
                                            if (e = t.sent, !1 !== e) {
                                                t.next = 5;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 5:
                                            r = this.listData.findIndex((function(t) {
                                                return t.qc_code == a.qc_code
                                            })), r > -1 ? (n = this.listData[r], this.listData.splice(r, 1), this.listData.unshift(n), this.qc_code = "", this.$nextTick((function() {
                                                return a.toggleSelection([n])
                                            }))) : (this.qc_code = "", this.$message.error("质检码已被流转"));
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
                        toggleSelection: function(t) {
                            var e = this;
                            t ? t.forEach((function(t) {
                                e.$refs.transferTable.toggleRowSelection(t)
                            })) : this.$refs.transferTable.clearSelection()
                        },
                        handleDispatch: function() {
                            this.innerVisible = !0, this.assignForm = {
                                to_node_id: 2
                            }
                        },
                        handleSelectionChange: function(t) {
                            this.detailIds = t
                        },
                        handleAssingDone: function() {
                            var t = this,
                                e = this.assignForm.by_assign_user_id,
                                r = this.detailIds.map((function(t) {
                                    return t.id
                                })).join(",");
                            Object(c["j"])({
                                detail_ids: r,
                                by_assign_user_id: e
                            }).then((function(e) {
                                var r = e.data;
                                t.$message.success("创建流转单成功".concat(r.transfer_order_no)), t.listData = []
                            }))
                        }
                    }
                },
                S = q,
                $ = (r("5b23"), Object(f["a"])(S, j, w, !1, null, "3f423d82", null)),
                T = $.exports,
                P = function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("el-button", {
                        attrs: {
                            type: "primary",
                            size: "mini"
                        },
                        on: {
                            click: t.goToDetail
                        }
                    }, [t._v(t._s(1 === t.row.status ? "收货分拣" : "查看"))])
                },
                C = [],
                E = {
                    props: {
                        row: {
                            type: Object
                        }
                    },
                    methods: {
                        goToDetail: function() {
                            this.$router.push({
                                path: "/sorting/list/detail",
                                query: {
                                    id: this.row.id
                                }
                            })
                        }
                    }
                },
                z = E,
                N = Object(f["a"])(z, P, C, !1, null, null, null),
                V = N.exports,
                F = [{
                    value: "1",
                    label: "待分拣"
                }, {
                    value: "2",
                    label: "分拣完成"
                }];

            function I(t, e, r, n, a, i, o) {
                try {
                    var s = t[i](o),
                        c = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, a)
            }

            function L(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var i = t.apply(e, r);

                        function o(t) {
                            I(i, n, a, o, s, "next", t)
                        }

                        function s(t) {
                            I(i, n, a, o, s, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }

            function M(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Q(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? M(Object(r), !0).forEach((function(e) {
                        A(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : M(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function A(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var J = {
                    components: {
                        ListFilter: m,
                        Transfer: T,
                        Stat: O,
                        Table: s["a"]
                    },
                    data: function() {
                        return {
                            loading: !1,
                            columns: [{
                                label: "分拣单号",
                                prop: "sorting_order_no"
                            }, {
                                label: "业务类型",
                                prop: "zz_business_name"
                            }, {
                                label: "业务单号",
                                prop: "business_order_no"
                            }, {
                                label: "用户UID",
                                prop: "uid"
                            }, {
                                label: "手机号",
                                prop: "mobile"
                            }, {
                                label: "快递公司",
                                prop: "express_company"
                            }, {
                                label: "快递单号",
                                prop: "express_no"
                            }, {
                                label: "订单件数",
                                prop: "machine_num"
                            }, {
                                label: "状态",
                                formater: function(t) {
                                    return F.find((function(e) {
                                        return e.value == t.sta
                                    })).label
                                },
                                prop: "sta"
                            }, {
                                label: "操作",
                                prop: "*",
                                component: V
                            }],
                            listData: [],
                            wait_transfer_num: "",
                            my_num: "",
                            today_total: "",
                            filter: JSON.parse(JSON.stringify(this.$route.query))
                        }
                    },
                    watch: {
                        "$route.query": {
                            handler: function(t) {
                                0 !== Object.keys(t).length && this.getList()
                            },
                            deep: !0
                        }
                    },
                    created: function() {
                        var t = this;
                        this.$router.push({
                            query: {}
                        }), Object(c["g"])().then((function(e) {
                            var r = e.data;
                            t.today_total = r.today_total, t.my_num = r.my_num, t.wait_transfer_num = r.wait_transfer_num
                        }))
                    },
                    methods: {
                        handleSearch: function(t) {
                            this.$router.push({
                                query: Q(Q({}, this.$route.query), t)
                            })
                        },
                        checkSkip: function() {
                            1 === this.listData.length && this.$router.push({
                                path: "/sorting/list/detail",
                                query: {
                                    id: this.listData[0].id
                                }
                            })
                        },
                        getList: function() {
                            var t = L(o.a.mark((function t() {
                                var e, r;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return this.loading = !0, t.prev = 1, t.next = 4, Object(c["d"])(this.$route.query);
                                        case 4:
                                            return e = t.sent, r = e.data, this.loading = !1, this.listData = r, this.checkSkip(), t.abrupt("return", r);
                                        case 12:
                                            t.prev = 12, t.t0 = t["catch"](1), this.loading = !1;
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [1, 12]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }
                },
                U = J,
                R = Object(f["a"])(U, n, a, !1, null, null, null);
            e["default"] = R.exports
        },
        de6c: function(t, e, r) {},
        ee0f: function(t, e, r) {},
        f2db: function(t, e, r) {}
    }
]);