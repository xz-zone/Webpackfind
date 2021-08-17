(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-165cbda2"], {
        "0247": function(t, e, r) {
            "use strict";
            r.r(e);
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "app-container"
                    }, [r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.print
                        }
                    }, [t._v("导出")]), t._v(" "), r("div", {
                        staticClass: "ranking-chart",
                        attrs: {
                            id: "ranking"
                        }
                    }), t._v(" "), r("el-table", {
                        staticStyle: {
                            width: "100%",
                            "margin-top": "20px"
                        },
                        attrs: {
                            data: t.tableData,
                            "span-method": t.objectSpanMethod,
                            border: ""
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            prop: "id",
                            label: "时间",
                            width: "180"
                        }
                    }, [
                        [r("div", [t._v(t._s(t.record_date[0].split(" ")[0]) + " - " + t._s(t.record_date[1].split(" ")[0]))])]
                    ], 2), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "error_type_des",
                            label: "问题类型"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "num",
                            label: "总数量"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "rank",
                            label: "排名"
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "类目"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return t._l(e.row.list, (function(e, n) {
                                    return r("div", {
                                        key: n
                                    }, [t._v("\n          " + t._s(e.type_name) + "\n        ")])
                                }))
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "数量"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return t._l(e.row.list, (function(e, n) {
                                    return r("div", {
                                        key: n
                                    }, [t._v("\n          " + t._s(e.num) + "\n        ")])
                                }))
                            }
                        }])
                    })], 1)], 1)
                },
                a = [],
                i = r("4838"),
                o = r.n(i),
                s = r("b775");

            function c(t) {
                return Object(s["a"])({
                    url: "/api/data_statistics/check_abnormal_data",
                    method: "get",
                    params: t
                })
            }

            function u(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(r), !0).forEach((function(e) {
                        d(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function d(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function p(t, e, r, n, a, i, o) {
                try {
                    var s = t[i](o),
                        c = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, a)
            }

            function f(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var i = t.apply(e, r);

                        function o(t) {
                            p(i, n, a, o, s, "next", t)
                        }

                        function s(t) {
                            p(i, n, a, o, s, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            var h = r("43a0");
            r("679c"), r("6722"), r("58f8"), r("f035"), r("f4b1");
            var b = {
                    data: function() {
                        return {
                            record_date: this.$route.query.record_date,
                            tableData: [],
                            dimensions: ["product"],
                            source: [],
                            series: []
                        }
                    },
                    mounted: function() {
                        2 != this.$route.query.record_date.length ? this.record_date = [this.$route.query.record_date + " 00:00:00", this.$route.query.record_date + " 23:59:59"] : this.record_date = [this.$route.query.record_date[0], this.$route.query.record_date[1]], this.getExceptionList()
                    },
                    methods: {
                        objectSpanMethod: function(t) {
                            t.row, t.column;
                            var e = t.rowIndex,
                                r = t.columnIndex;
                            if (0 === r) return 0 === e ? {
                                rowspan: this.tableData.length,
                                colspan: 1
                            } : {
                                rowspan: 0,
                                colspan: 0
                            }
                        },
                        getExceptionList: function() {
                            var t = f(o.a.mark((function t(e) {
                                var r, n, a, i;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return r = {
                                                date: this.record_date,
                                                node_id: this.$route.query.node_id
                                            }, 2 == e && (r.is_export = 1), t.next = 4, c(r);
                                        case 4:
                                            if (n = t.sent, 2 == e) window.open(n.data);
                                            else {
                                                for (a in this.tableData = n.data.tableData, n.data.chartData)
                                                    for (i in this.source.push(l({
                                                            product: a
                                                        }, n.data.chartData[a])), n.data.chartData[a]) - 1 == this.dimensions.indexOf(i) && (this.dimensions.push(i), this.series.push({
                                                        type: "bar",
                                                        label: {
                                                            normal: {
                                                                show: !0,
                                                                position: "top",
                                                                formatter: function(t) {
                                                                    return t.value[t.seriesName]
                                                                }
                                                            }
                                                        }
                                                    }));
                                                this.initMap()
                                            }
                                            case 6:
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
                        initMap: function() {
                            var t = h.init(document.getElementById("ranking"));
                            t.setOption({
                                title: {
                                    text: ""
                                },
                                legend: {},
                                tooltip: {},
                                dataset: {
                                    dimensions: this.dimensions,
                                    source: this.source
                                },
                                xAxis: {
                                    type: "category",
                                    axisLabel: {
                                        rotate: 5,
                                        fontWeight: "bold",
                                        fontSize: 10,
                                        margin: 18,
                                        align: "center"
                                    }
                                },
                                yAxis: {
                                    minInterval: 1
                                },
                                series: this.series
                            })
                        },
                        print: function() {
                            this.getExceptionList(2)
                        }
                    }
                },
                _ = b,
                m = (r("5776"), r("5d22")),
                v = Object(m["a"])(_, n, a, !1, null, "760e7af9", null);
            e["default"] = v.exports
        },
        "559e": function(t, e, r) {},
        5776: function(t, e, r) {
            "use strict";
            r("559e")
        }
    }
]);