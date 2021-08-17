(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d224550"], {
        e04c: function(e, t, r) {
            "use strict";
            r.r(t);
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "app-container"
                    }, [r("div", {
                        staticClass: "header-tools"
                    }, [r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.getList(2)
                            }
                        }
                    }, [e._v("导出")])], 1), e._v(" "), r("el-row", {
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
                            border: ""
                        }
                    }, [2 != e.$route.query.record_date.length ? r("el-table-column", {
                        attrs: {
                            prop: "created_at",
                            label: "时间",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(e._s(e.$route.query.record_date))]
                            }
                        }], null, !1, 1519575916)
                    }) : r("el-table-column", {
                        attrs: {
                            label: "时间",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v("\n            " + e._s(e.$route.query.record_date[0].split(" ")[0] + "~" + e.$route.query.record_date[1].split(" ")[0]) + "\n          ")]
                            }
                        }])
                    }), e._v(" "), e.$route.query.area_name ? r("el-table-column", {
                        attrs: {
                            label: "地区库",
                            align: "center"
                        }
                    }, [e._v(e._s(e.$route.query.area_name))]) : e._e(), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: 5 == e.type ? "user_name" : "user.real_name",
                            label: 1 == e.search.node_id ? "分发员" : 2 == e.search.node_id ? "录入员" : 3 == e.search.node_id ? (4 == e.type ? "基建" : "") + "质检员" : 4 == e.search.node_id ? "复检员" : 5 == e.search.node_id ? "编辑员" : 6 == e.search.node_id ? "上架员" : "操作员",
                            align: "center"
                        }
                    }), e._v(" "), 0 == e.type ? r("el-table-column", {
                        attrs: {
                            prop: "effective_total",
                            label: "数量",
                            align: "center"
                        }
                    }) : e._e(), e._v(" "), 1 == e.type ? r("el-table-column", {
                        attrs: {
                            prop: "deal_total",
                            label: "数量",
                            align: "center"
                        }
                    }) : e._e(), e._v(" "), 2 == e.type ? r("el-table-column", {
                        attrs: {
                            prop: "change_battery_total",
                            label: "数量",
                            align: "center"
                        }
                    }) : e._e(), e._v(" "), 3 == e.type ? r("el-table-column", {
                        attrs: {
                            prop: "no_deal_total",
                            label: "数量",
                            align: "center"
                        }
                    }) : e._e(), e._v(" "), 4 == e.type ? r("el-table-column", {
                        attrs: {
                            prop: "num",
                            label: "售后质量问题数量",
                            align: "center"
                        }
                    }) : e._e(), e._v(" "), 5 == e.type ? r("el-table-column", {
                        attrs: {
                            prop: "num",
                            label: "售后描述问题数量",
                            align: "center"
                        }
                    }) : e._e(), e._v(" "), 6 == e.type ? r("el-table-column", {
                        attrs: {
                            prop: "num",
                            label: "上传视频数",
                            align: "center"
                        }
                    }) : e._e(), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "rank",
                            label: "排名",
                            align: "center"
                        }
                    })], 1)], 1)], 1)], 1)
                },
                n = [],
                o = r("4838"),
                i = r.n(o),
                s = r("b775");

            function c(e) {
                return Object(s["a"])({
                    url: "/api/data_statistics/effective_data",
                    method: "get",
                    params: e
                })
            }

            function l(e) {
                return Object(s["a"])({
                    url: "/api/data_statistics/deal_data",
                    method: "get",
                    params: e
                })
            }

            function u(e) {
                return Object(s["a"])({
                    url: "/api/data_statistics/change_battery_data",
                    method: "get",
                    params: e
                })
            }

            function d(e) {
                return Object(s["a"])({
                    url: "/api/data_statistics/un_deal_data",
                    method: "get",
                    params: e
                })
            }

            function p(e) {
                return Object(s["a"])({
                    url: "api/data_statistics/after_sale_check_unqualified_detail",
                    method: "get",
                    params: e
                })
            }

            function _(e) {
                return Object(s["a"])({
                    url: "api/data_statistics/after_sale_desc_unqualified_detail",
                    method: "get",
                    params: e
                })
            }

            function b(e) {
                return Object(s["a"])({
                    url: "api/data_statistics/video_upload_detail",
                    method: "get",
                    params: e
                })
            }

            function h(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(r), !0).forEach((function(t) {
                        f(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function f(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function m(e, t, r, a, n, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (l) {
                    return void r(l)
                }
                s.done ? t(c) : Promise.resolve(c).then(a, n)
            }

            function g(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(a, n) {
                        var o = e.apply(t, r);

                        function i(e) {
                            m(o, a, n, i, s, "next", e)
                        }

                        function s(e) {
                            m(o, a, n, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function v(e) {
                return v = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, v(e)
            }
            var x = {
                    data: function() {
                        return {
                            tableData: [],
                            search: {
                                record_date: null,
                                node_id: null,
                                area_ids: null,
                                is_abnormal_report: 0
                            },
                            loading: !1,
                            type: 0
                        }
                    },
                    mounted: function() {
                        this.search.node_id = this.$route.query.node_id ? this.$route.query.node_id : null, this.search.record_date = this.$route.query.record_date, this.$route.query.area_ids && (this.search.area_ids = "object" == v(this.$route.query.area_ids) ? this.$route.query.area_ids.join(",") : this.$route.query.area_ids), 2 != this.$route.query.record_date.length ? this.search.record_date = [this.$route.query.record_date + " 00:00:00", this.$route.query.record_date + " 23:59:59"] : this.search.record_date = [this.$route.query.record_date[0] + " 00:00:00", this.$route.query.record_date[1] + " 23:59:59"], this.type = this.$route.query.type, this.getList()
                    },
                    methods: {
                        getList: function() {
                            var e = g(i.a.mark((function e(t) {
                                var r, a;
                                return i.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, r = y({}, this.search), 2 == t && (r.is_export = 1), -1 == ["2", "5", "6"].indexOf(r.node_id) && (console.log(r.node_id), delete r.is_abnormal_report), this.loading = !0, a = null, 0 != this.type) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.next = 9, c(r);
                                        case 9:
                                            a = e.sent, e.next = 46;
                                            break;
                                        case 12:
                                            if (1 != this.type) {
                                                e.next = 18;
                                                break
                                            }
                                            return e.next = 15, l(r);
                                        case 15:
                                            a = e.sent, e.next = 46;
                                            break;
                                        case 18:
                                            if (2 != this.type) {
                                                e.next = 24;
                                                break
                                            }
                                            return e.next = 21, u(r);
                                        case 21:
                                            a = e.sent, e.next = 46;
                                            break;
                                        case 24:
                                            if (3 != this.type) {
                                                e.next = 30;
                                                break
                                            }
                                            return e.next = 27, d(r);
                                        case 27:
                                            a = e.sent, e.next = 46;
                                            break;
                                        case 30:
                                            if (4 != this.type) {
                                                e.next = 36;
                                                break
                                            }
                                            return e.next = 33, p(r);
                                        case 33:
                                            a = e.sent, e.next = 46;
                                            break;
                                        case 36:
                                            if (5 != this.type) {
                                                e.next = 42;
                                                break
                                            }
                                            return e.next = 39, _(r);
                                        case 39:
                                            a = e.sent, e.next = 46;
                                            break;
                                        case 42:
                                            if (6 != this.type) {
                                                e.next = 46;
                                                break
                                            }
                                            return e.next = 45, b(r);
                                        case 45:
                                            a = e.sent;
                                        case 46:
                                            if (this.loading = !1, 2 == t) {
                                                e.next = 51;
                                                break
                                            }
                                            this.tableData = a.data, e.next = 58;
                                            break;
                                        case 51:
                                            if (4 != this.type && 5 != this.type && 6 != this.type && 2 != this.type) {
                                                e.next = 55;
                                                break
                                            }
                                            window.open(a.data), e.next = 58;
                                            break;
                                        case 55:
                                            return e.next = 57, this.$confirm("导出成功，是否跳转至【报表进度查询】？", "提示", {
                                                center: !0,
                                                type: "success"
                                            });
                                        case 57:
                                            this.$router.push({
                                                name: "logs-list"
                                            });
                                        case 58:
                                            e.next = 63;
                                            break;
                                        case 60:
                                            e.prev = 60, e.t0 = e["catch"](0), this.loading = !1;
                                        case 63:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 60]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    }
                },
                k = x,
                O = r("5d22"),
                j = Object(O["a"])(k, a, n, !1, null, "a613c388", null);
            t["default"] = j.exports
        }
    }
]);