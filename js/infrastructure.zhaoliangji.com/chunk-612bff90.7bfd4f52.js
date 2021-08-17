(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-612bff90"], {
        "02aa": function(e, t, r) {
            "use strict";
            var n = r("b775"),
                a = r("7f43"),
                i = r.n(a),
                o = r("1503"),
                s = r.n(o),
                l = r("7893"),
                c = r("4360"),
                u = r("5f87"),
                p = i.a.create({
                    baseURL: "https://infrastructureapi.zhaoliangji.com/",
                    withCredentials: !0,
                    timeout: 6e4,
                    transformResponse: [function(e) {
                        return s.a.parse(e)
                    }]
                });
            p.interceptors.request.use((function(e) {
                return Object(u["a"])() && (e.headers["Authorization"] = "Bearer ".concat(Object(u["a"])())), e.headers["Content-Type"] = "application/json", e
            }), (function(e) {
                return console.log(e), Promise.reject(e)
            })), p.interceptors.response.use((function(e) {
                var t = e.data;
                return 1 !== t.code ? (Object(l["Message"])({
                    message: "<span style='font-size: 18px;font-weight: 600;line-height: 26px;'>".concat(t.msg, "</span>") || !1,
                    type: "error",
                    dangerouslyUseHTMLString: !0,
                    duration: 6e3,
                    showClose: !0
                }), 401 == t.code && (l["Message"].error(t.msg || "您还没有登录！"), c["a"].dispatch("user/resetToken").then((function() {
                    location.href = "/"
                }))), 403 == t.code && l["Message"].error(t.msg || "抱歉，权限不够！"), console.log(t), Promise.reject(t.msg || "error")) : t
            }), (function(e) {
                if (console.log(e.response), e.response && "401" == e.response.status) l["Message"].error(e.response.data.msg || "抱歉，权限不够！"), c["a"].dispatch("user/resetToken").then((function() {
                    location.reload()
                }));
                else {
                    var t = "";
                    t = e.response ? e.response.data.msg : e, Object(l["Message"])({
                        message: t,
                        type: "error",
                        duration: 5e3,
                        showClose: !0
                    })
                }
                return Promise.reject(e)
            }));
            var f = p;

            function d(e) {
                return Object(n["a"])({
                    url: "/api/sorting/check",
                    method: "get",
                    params: e
                })
            }

            function m(e) {
                return Object(n["a"])({
                    url: "/api/sorting/sta",
                    method: "get",
                    params: e
                })
            }

            function b(e) {
                return Object(n["a"])({
                    url: "/api/sorting/get_transfer_list",
                    method: "get",
                    params: e
                })
            }

            function h(e) {
                return Object(n["a"])({
                    url: "/api/sorting/transfer",
                    method: "post",
                    params: e
                })
            }

            function _(e) {
                return f({
                    url: "/api/sorting/get_list",
                    method: "get",
                    params: e
                })
            }

            function g(e) {
                return f({
                    url: "/api/sorting/detail",
                    method: "get",
                    params: e
                })
            }

            function v(e) {
                return Object(n["a"])({
                    url: "/api/sorting/create_qc_code",
                    method: "get",
                    params: e
                })
            }

            function y(e) {
                return Object(n["a"])({
                    url: "/api/sorting/unpack",
                    method: "post",
                    params: e
                })
            }

            function j(e) {
                return Object(n["a"])({
                    url: "/api/sorting/transfer_orders",
                    method: "get",
                    params: e
                })
            }

            function O(e) {
                return Object(n["a"])({
                    url: "/api/admin_tool/change_fitting",
                    method: "post",
                    params: e
                })
            }
            r.d(t, "d", (function() {
                return d
            })), r.d(t, "g", (function() {
                return m
            })), r.d(t, "h", (function() {
                return b
            })), r.d(t, "j", (function() {
                return h
            })), r.d(t, "e", (function() {
                return _
            })), r.d(t, "c", (function() {
                return g
            })), r.d(t, "a", (function() {
                return v
            })), r.d(t, "i", (function() {
                return y
            })), r.d(t, "f", (function() {
                return j
            })), r.d(t, "b", (function() {
                return O
            }))
        },
        9011: function(e, t, r) {
            "use strict";
            r.d(t, "c", (function() {
                return a
            })), r.d(t, "a", (function() {
                return i
            })), r.d(t, "b", (function() {
                return o
            })), r.d(t, "d", (function() {
                return s
            }));
            var n = r("b775");

            function a(e) {
                return Object(n["a"])({
                    url: "/api/logistics/record",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(n["a"])({
                    url: "/api/logistics/qc_site",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(n["a"])({
                    url: "/api/logistics/zz_business_type",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(n["a"])({
                    url: "/api/logistics/receive",
                    method: "post",
                    params: e
                })
            }
        },
        cbd4: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "app-container"
                    }, [r("list-filter", {
                        attrs: {
                            filter: e.filter
                        },
                        on: {
                            search: e.handleSearch,
                            export: e.handleExport
                        }
                    }), e._v(" "), r("el-tabs", {
                        on: {
                            "tab-click": e.handleTabClick
                        },
                        model: {
                            value: e.filter.web_tag,
                            callback: function(t) {
                                e.$set(e.filter, "web_tag", t)
                            },
                            expression: "filter.web_tag"
                        }
                    }, [r("el-tab-pane", {
                        attrs: {
                            label: "全部分拣",
                            name: "0"
                        }
                    }), e._v(" "), r("el-tab-pane", {
                        attrs: {
                            label: "我的分拣",
                            name: "1"
                        }
                    })], 1), e._v(" "), r("Table", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: e.loading,
                            expression: "loading"
                        }],
                        staticClass: "mrg-btm-20",
                        attrs: {
                            columns: e.columns,
                            data: e.listData,
                            border: ""
                        }
                    }), e._v(" "), r("div", {
                        staticClass: "footer-pagination"
                    }, [e.total > 0 ? r("el-pagination", {
                        attrs: {
                            background: "",
                            total: e.total,
                            "current-page": e.page,
                            "page-size": 10,
                            layout: "total, prev, pager, next, jumper"
                        },
                        on: {
                            "update:currentPage": function(t) {
                                e.page = t
                            },
                            "update:current-page": function(t) {
                                e.page = t
                            },
                            "current-change": e.handleCurrentChange
                        }
                    }) : e._e()], 1)], 1)
                },
                a = [],
                i = r("4838"),
                o = r.n(i),
                s = r("2090"),
                l = r("7ffd"),
                c = r("02aa"),
                u = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("el-form", {
                        staticClass: "demo-form-inline",
                        attrs: {
                            inline: !0
                        }
                    }, [r("el-form-item", [r("el-input", {
                        attrs: {
                            placeholder: "业务单号",
                            clearable: ""
                        },
                        model: {
                            value: e.filter.business_order_no,
                            callback: function(t) {
                                e.$set(e.filter, "business_order_no", t)
                            },
                            expression: "filter.business_order_no"
                        }
                    })], 1), e._v(" "), r("el-form-item", [r("el-input", {
                        attrs: {
                            placeholder: "输入联系人",
                            clearable: ""
                        },
                        model: {
                            value: e.filter.real_name,
                            callback: function(t) {
                                e.$set(e.filter, "real_name", t)
                            },
                            expression: "filter.real_name"
                        }
                    })], 1), e._v(" "), r("el-form-item", [r("el-input", {
                        attrs: {
                            placeholder: "物流单号",
                            clearable: ""
                        },
                        model: {
                            value: e.filter.logistics_order_no,
                            callback: function(t) {
                                e.$set(e.filter, "logistics_order_no", t)
                            },
                            expression: "filter.logistics_order_no"
                        }
                    })], 1), e._v(" "), r("el-form-item", [r("el-input", {
                        attrs: {
                            placeholder: "UID",
                            clearable: ""
                        },
                        model: {
                            value: e.filter.uid,
                            callback: function(t) {
                                e.$set(e.filter, "uid", t)
                            },
                            expression: "filter.uid"
                        }
                    })], 1), e._v(" "), r("el-form-item", [r("el-input", {
                        attrs: {
                            placeholder: "imei号",
                            clearable: ""
                        },
                        model: {
                            value: e.filter.imei,
                            callback: function(t) {
                                e.$set(e.filter, "imei", t)
                            },
                            expression: "filter.imei"
                        }
                    })], 1), e._v(" "), r("el-form-item", [r("el-input", {
                        attrs: {
                            placeholder: "质检码",
                            clearable: ""
                        },
                        model: {
                            value: e.filter.qc_code,
                            callback: function(t) {
                                e.$set(e.filter, "qc_code", t)
                            },
                            expression: "filter.qc_code"
                        }
                    })], 1), e._v(" "), r("el-form-item", [r("el-date-picker", {
                        attrs: {
                            clearable: "",
                            type: "datetimerange",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"],
                            "range-separator": "~",
                            "start-placeholder": "开始时间",
                            "end-placeholder": "结束时间"
                        },
                        model: {
                            value: e.filter.sorting_time,
                            callback: function(t) {
                                e.$set(e.filter, "sorting_time", t)
                            },
                            expression: "filter.sorting_time"
                        }
                    })], 1), e._v(" "), r("el-form-item", [r("Select", {
                        attrs: {
                            options: e.allyList,
                            clearable: ""
                        },
                        model: {
                            value: e.filter.qc_site_id,
                            callback: function(t) {
                                e.$set(e.filter, "qc_site_id", t)
                            },
                            expression: "filter.qc_site_id"
                        }
                    })], 1), e._v(" "), r("el-form-item", [r("Select", {
                        attrs: {
                            options: e.bizList,
                            clearable: ""
                        },
                        model: {
                            value: e.filter.zz_business_id,
                            callback: function(t) {
                                e.$set(e.filter, "zz_business_id", t)
                            },
                            expression: "filter.zz_business_id"
                        }
                    })], 1), e._v(" "), r("el-form-item", [r("Select", {
                        attrs: {
                            options: e.typeList,
                            clearable: ""
                        },
                        model: {
                            value: e.filter.sta,
                            callback: function(t) {
                                e.$set(e.filter, "sta", t)
                            },
                            expression: "filter.sta"
                        }
                    })], 1), e._v(" "), r("el-form-item", [r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.handleSearch
                        }
                    }, [e._v("查询")]), e._v(" "), r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.handleExport
                        }
                    }, [e._v("导出")])], 1)], 1)
                },
                p = [],
                f = r("ab3e"),
                d = r("9011"),
                m = [{
                    value: "1",
                    label: "待分拣"
                }, {
                    value: "2",
                    label: "分拣完成"
                }],
                b = {
                    components: {
                        Select: f["a"]
                    },
                    props: {
                        filter: {
                            type: Object,
                            default: function() {
                                return {
                                    business_order_no: "",
                                    real_name: "",
                                    logistics_order_no: "",
                                    uid: "",
                                    imei: "",
                                    qc_code: "",
                                    qc_site_id: "",
                                    zz_business_id: "",
                                    sta: "",
                                    sorting_time: ""
                                }
                            }
                        }
                    },
                    data: function() {
                        return {
                            allyList: [],
                            bizList: [],
                            typeList: m
                        }
                    },
                    created: function() {
                        var e = this;
                        Object(d["b"])().then((function(t) {
                            var r = t.data;
                            e.bizList = Object.keys(r).map((function(e) {
                                return {
                                    value: e,
                                    label: r[e]
                                }
                            }))
                        })), Object(d["a"])().then((function(t) {
                            var r = t.data;
                            e.allyList = Object.keys(r).map((function(e) {
                                return {
                                    value: e,
                                    label: r[e]
                                }
                            }))
                        }))
                    },
                    methods: {
                        handleSearch: function() {
                            this.$emit("search", this.filter)
                        },
                        handleExport: function() {
                            this.$emit("export", this.filter)
                        }
                    }
                },
                h = b,
                _ = r("5d22"),
                g = Object(_["a"])(h, u, p, !1, null, null, null),
                v = g.exports,
                y = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("el-button", {
                        attrs: {
                            type: "primary",
                            size: "mini"
                        },
                        on: {
                            click: e.goToDetail
                        }
                    }, [e._v("查看")])
                },
                j = [],
                O = {
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
                                    id: this.row.id,
                                    fromType: 1
                                }
                            })
                        }
                    }
                },
                w = O,
                x = Object(_["a"])(w, y, j, !1, null, null, null),
                k = x.exports;

            function $(e, t, r, n, a, i, o) {
                try {
                    var s = e[i](o),
                        l = s.value
                } catch (c) {
                    return void r(c)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, a)
            }

            function z(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var i = e.apply(t, r);

                        function o(e) {
                            $(i, n, a, o, s, "next", e)
                        }

                        function s(e) {
                            $(i, n, a, o, s, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function q(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? q(Object(r), !0).forEach((function(t) {
                        C(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : q(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function C(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var L = {
                    components: {
                        ListFilter: v,
                        Table: s["a"]
                    },
                    mixins: [l["a"]],
                    data: function() {
                        return {
                            loading: !1,
                            columns: [{
                                label: "分拣单号",
                                prop: "sorting_order_no"
                            }, {
                                label: "质检码",
                                prop: "qc_code_str",
                                width: 90
                            }, {
                                label: "imei号",
                                prop: "imei_str"
                            }, {
                                label: "业务单号",
                                prop: "business_order_no"
                            }, {
                                label: "业务类型",
                                prop: "zz_business_name"
                            }, {
                                label: "分拣时间",
                                formater: function(e) {
                                    return e.sorting_time ? e.sorting_time : " "
                                },
                                prop: "sorting_time"
                            }, {
                                label: "物流单号",
                                prop: "logistics_order_no"
                            }, {
                                label: "用户UID",
                                prop: "uid"
                            }, {
                                label: "手机号",
                                prop: "mobile"
                            }, {
                                label: "姓名",
                                prop: "real_name"
                            }, {
                                label: "快递公司",
                                prop: "express_company"
                            }, {
                                label: "快递单号",
                                prop: "express_no"
                            }, {
                                label: "订单数量",
                                prop: "machine_num"
                            }, {
                                label: "类型",
                                formater: function(e) {
                                    return m.find((function(t) {
                                        return t.value == e.sta
                                    })).label
                                },
                                prop: "sta"
                            }, {
                                label: "操作人",
                                prop: "sorting_user_name"
                            }, {
                                label: "操作",
                                prop: "op",
                                component: k
                            }],
                            listData: [],
                            total: 0
                        }
                    },
                    methods: {
                        handleTabClick: function() {
                            this.$router.push({
                                query: P(P({}, this.$route.query), {}, {
                                    web_tag: this.filter.web_tag,
                                    page: 1
                                })
                            })
                        },
                        handleSearch: function(e) {
                            this.$router.push({
                                query: P(P(P({}, this.$route.query), e), {}, {
                                    page: 1
                                })
                            })
                        },
                        handleExport: function() {
                            var e = z(o.a.mark((function e(t) {
                                var r, n;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return this.handleSearch(t), e.next = 3, Object(c["e"])(P(P({}, t), {}, {
                                                is_export: 1
                                            }));
                                        case 3:
                                            r = e.sent, n = r.data, window.open(n.download_url, "blank");
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
                        getList: function() {
                            var e = z(o.a.mark((function e() {
                                var t, r;
                                return o.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return this.loading = !0, e.prev = 1, e.next = 4, Object(c["e"])(this.$route.query);
                                        case 4:
                                            return t = e.sent, r = t.data, this.loading = !1, this.total = r.total, this.listData = r.data, e.abrupt("return", r);
                                        case 12:
                                            e.prev = 12, e.t0 = e["catch"](1), this.loading = !1;
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [1, 12]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    }
                },
                S = L,
                D = Object(_["a"])(S, n, a, !1, null, null, null);
            t["default"] = D.exports
        }
    }
]);