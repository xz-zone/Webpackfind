(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-88c9842a"], {
        "79cb": function(r, e, t) {
            "use strict";
            t.r(e);
            var n = function() {
                    var r = this,
                        e = r.$createElement,
                        t = r._self._c || e;
                    return t("div", {
                        staticClass: "app-container"
                    }, [t("div", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: r.loading,
                            expression: "loading"
                        }]
                    }, [r.flowOrderData ? t("flowOrder", {
                        attrs: {
                            flowOrderData: r.flowOrderData
                        }
                    }) : r._e()], 1)])
                },
                a = [],
                i = t("7c72"),
                o = t("b21d"),
                d = {
                    name: "flowOrders",
                    components: {
                        flowOrder: i["a"]
                    },
                    data: function() {
                        return {
                            id: this.$route.query.id,
                            flowOrderData: null,
                            loading: !1
                        }
                    },
                    mounted: function() {
                        this.getFlowOrderList()
                    },
                    methods: {
                        getFlowOrderList: function() {
                            var r = this;
                            this.loading = !0, Object(o["e"])({
                                transfer_order_ids: this.id.split(",")
                            }).then((function(e) {
                                r.flowOrderData = e.data, r.loading = !1
                            }))
                        }
                    }
                },
                u = d,
                c = t("5d22"),
                s = Object(c["a"])(u, n, a, !1, null, "40df76c9", null);
            e["default"] = s.exports
        },
        b21d: function(r, e, t) {
            "use strict";
            t.d(e, "d", (function() {
                return a
            })), t.d(e, "c", (function() {
                return i
            })), t.d(e, "b", (function() {
                return o
            })), t.d(e, "e", (function() {
                return d
            })), t.d(e, "a", (function() {
                return u
            }));
            var n = t("b775");

            function a(r) {
                return Object(n["a"])({
                    url: "/api/receive/transfer_orders",
                    method: "get",
                    params: r
                })
            }

            function i(r) {
                return Object(n["a"])({
                    url: "/api/receive/show_transfer_order",
                    method: "get",
                    params: r
                })
            }

            function o(r) {
                return Object(n["a"])({
                    url: "/api/receive/destroy_transfer_order",
                    method: "get",
                    params: r
                })
            }

            function d(r) {
                return Object(n["a"])({
                    url: "/api/receive/print_transfer_order",
                    method: "get",
                    params: r
                })
            }

            function u(r) {
                return Object(n["a"])({
                    url: "/api/receive/assign_transfer_order",
                    method: "get",
                    params: r
                })
            }
        }
    }
]);