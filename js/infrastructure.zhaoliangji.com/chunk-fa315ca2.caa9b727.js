(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-fa315ca2"], {
        "11b6": function(r, t, e) {
            "use strict";
            e.r(t);
            var n = function() {
                    var r = this,
                        t = r.$createElement,
                        e = r._self._c || t;
                    return e("div", {
                        staticClass: "app-container"
                    }, [e("div", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: r.loading,
                            expression: "loading"
                        }]
                    }, [r.flowOrderData ? e("div", [e("flowOrder", {
                        attrs: {
                            flowOrderData: r.flowOrderData
                        }
                    })], 1) : r._e()])])
                },
                a = [],
                o = e("7c72"),
                i = e("5230"),
                d = {
                    name: "flowOrders",
                    components: {
                        flowOrder: o["a"]
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
                            this.loading = !0, Object(i["d"])({
                                transfer_order_ids: this.id.split(",")
                            }).then((function(t) {
                                r.flowOrderData = t.data, r.loading = !1
                            }))
                        }
                    }
                },
                c = d,
                s = e("5d22"),
                u = Object(s["a"])(c, n, a, !1, null, "e740d94a", null);
            t["default"] = u.exports
        },
        5230: function(r, t, e) {
            "use strict";
            e.d(t, "c", (function() {
                return a
            })), e.d(t, "a", (function() {
                return o
            })), e.d(t, "b", (function() {
                return i
            })), e.d(t, "d", (function() {
                return d
            }));
            var n = e("b775");

            function a(r) {
                return Object(n["a"])({
                    url: "/api/check/transfer_orders",
                    method: "get",
                    params: r
                })
            }

            function o(r) {
                return Object(n["a"])({
                    url: "/api/check/assign_transfer_order",
                    method: "get",
                    params: r
                })
            }

            function i(r) {
                return Object(n["a"])({
                    url: "/api/check/destroy_transfer_order",
                    method: "get",
                    params: r
                })
            }

            function d(r) {
                return Object(n["a"])({
                    url: "/api/check/print_transfer_order",
                    method: "get",
                    params: r
                })
            }
        }
    }
]);