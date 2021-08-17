(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-498d1b4c"], {
        c33a: function(t, n, e) {
            "use strict";
            e.r(n);
            var a = function() {
                    var t = this,
                        n = t.$createElement,
                        e = t._self._c || n;
                    return e("div", {
                        staticClass: "app-container"
                    }, [e("div", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: t.loading,
                            expression: "loading"
                        }]
                    }, [t.abnormal ? e("div", [e("exceptionTicket", {
                        attrs: {
                            abnormal: t.abnormal
                        }
                    })], 1) : t._e()])])
                },
                r = [],
                o = e("44bf"),
                i = e("eeb1"),
                d = {
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
                u = d,
                c = e("5d22"),
                s = Object(c["a"])(u, a, r, !1, null, "48ea5dbb", null);
            n["default"] = s.exports
        },
        eeb1: function(t, n, e) {
            "use strict";
            e.d(n, "d", (function() {
                return r
            })), e.d(n, "b", (function() {
                return o
            })), e.d(n, "a", (function() {
                return i
            }));
            var a = e("b775");

            function r(t) {
                return Object(a["a"])({
                    url: "/api/edit/my_abnormal_report_orders",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(a["a"])({
                    url: "/api/edit/show_abnormal_reports",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(a["a"])({
                    url: "/api/edit/destroy_abnormal_report",
                    method: "get",
                    params: t
                })
            }
        }
    }
]);