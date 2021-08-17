(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-f5baefda"], {
        83406: function(t, n, a) {
            "use strict";
            a.r(n);
            var e = function() {
                    var t = this,
                        n = t.$createElement,
                        a = t._self._c || n;
                    return a("div", {
                        staticClass: "app-container"
                    }, [a("div", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: t.loading,
                            expression: "loading"
                        }]
                    }, [t.abnormal ? a("div", [a("exceptionTicket", {
                        attrs: {
                            abnormal: t.abnormal
                        }
                    })], 1) : t._e()])])
                },
                r = [],
                o = a("44bf"),
                i = a("cb97"),
                c = {
                    name: "",
                    components: {
                        exceptionTicket: o["a"]
                    },
                    data: function() {
                        return {
                            id: this.$route.query.id,
                            abnormal: null,
                            loading: !1
                        }
                    },
                    mounted: function() {
                        this.getAbnormalList()
                    },
                    methods: {
                        getAbnormalList: function() {
                            var t = this;
                            this.loading = !0, Object(i["b"])({
                                abnormal_report_order_ids: this.id.split(",")
                            }).then((function(n) {
                                t.abnormal = n.data, t.loading = !1
                            }))
                        }
                    }
                },
                u = c,
                s = a("5d22"),
                d = Object(s["a"])(u, e, r, !1, null, "3ec7220d", null);
            n["default"] = d.exports
        },
        cb97: function(t, n, a) {
            "use strict";
            a.d(n, "c", (function() {
                return r
            })), a.d(n, "b", (function() {
                return o
            })), a.d(n, "a", (function() {
                return i
            }));
            var e = a("b775");

            function r(t) {
                return Object(e["a"])({
                    url: "/api/check/my_abnormal_report_orders",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(e["a"])({
                    url: "/api/check/show_abnormal_reports",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(e["a"])({
                    url: "/api/check/destroy_abnormal_report",
                    method: "get",
                    params: t
                })
            }
        }
    }
]);