(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-7315ac0e"], {
        "93ca": function(t, n, a) {
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
                i = a("97fe"),
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
                c = u,
                s = a("5d22"),
                d = Object(s["a"])(c, e, r, !1, null, "946eb182", null);
            n["default"] = d.exports
        },
        "97fe": function(t, n, a) {
            "use strict";
            a.d(n, "d", (function() {
                return r
            })), a.d(n, "c", (function() {
                return o
            })), a.d(n, "a", (function() {
                return i
            })), a.d(n, "b", (function() {
                return u
            }));
            var e = a("b775");

            function r(t) {
                return Object(e["a"])({
                    url: "/api/input/my_abnormal_report_orders",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(e["a"])({
                    url: "/api/input/show_abnormal_report",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(e["a"])({
                    url: "/api/input/destroy_abnormal_report",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(e["a"])({
                    url: "/api/input/show_abnormal_reports",
                    method: "get",
                    params: t
                })
            }
        }
    }
]);