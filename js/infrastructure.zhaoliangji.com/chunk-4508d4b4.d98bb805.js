(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-4508d4b4"], {
        a9a1: function(t, n, e) {
            "use strict";
            e.d(n, "d", (function() {
                return a
            })), e.d(n, "c", (function() {
                return o
            })), e.d(n, "a", (function() {
                return i
            })), e.d(n, "b", (function() {
                return c
            }));
            var r = e("b775");

            function a(t) {
                return Object(r["a"])({
                    url: "/api/re_check/abnormal_report_orders",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(r["a"])({
                    url: "/api/re_check/show_abnormal_report",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(r["a"])({
                    url: "/api/re_check/destroy_abnormal_report",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(r["a"])({
                    url: "/api/re_check/show_abnormal_reports",
                    method: "get",
                    params: t
                })
            }
        },
        defb: function(t, n, e) {
            "use strict";
            e.r(n);
            var r = function() {
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
                a = [],
                o = e("44bf"),
                i = e("a9a1"),
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
                d = e("5d22"),
                s = Object(d["a"])(u, r, a, !1, null, "76595d0e", null);
            n["default"] = s.exports
        }
    }
]);