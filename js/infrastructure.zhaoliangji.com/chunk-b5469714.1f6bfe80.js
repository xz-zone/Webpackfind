(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-b5469714"], {
        a972: function(t, n, a) {
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
                i = a("ea15"),
                u = {
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
                s = u,
                c = a("5d22"),
                l = Object(c["a"])(s, e, r, !1, null, "2bfeb109", null);
            n["default"] = l.exports
        },
        ea15: function(t, n, a) {
            "use strict";
            a.d(n, "c", (function() {
                return r
            })), a.d(n, "a", (function() {
                return o
            })), a.d(n, "b", (function() {
                return i
            }));
            var e = a("b775");

            function r(t) {
                return Object(e["a"])({
                    url: "/api/up_shift/abnormal_report_orders",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(e["a"])({
                    url: "/api/up_shift/destroy_abnormal_report",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(e["a"])({
                    url: "/api/up_shift/show_abnormal_reports",
                    method: "get",
                    params: t
                })
            }
        }
    }
]);