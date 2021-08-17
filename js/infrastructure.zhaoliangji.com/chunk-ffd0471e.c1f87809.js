(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-ffd0471e"], {
        5925: function(t, r, e) {
            "use strict";
            e.d(r, "c", (function() {
                return a
            })), e.d(r, "a", (function() {
                return i
            })), e.d(r, "b", (function() {
                return o
            })), e.d(r, "d", (function() {
                return d
            }));
            var n = e("b775");

            function a(t) {
                return Object(n["a"])({
                    url: "/api/input/transfer_orders",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(n["a"])({
                    url: "/api/input/assign_transfer_order",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/input/destroy_transfer_order",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(n["a"])({
                    url: "/api/input/print_transfer_order",
                    method: "get",
                    params: t
                })
            }
        },
        c4f4: function(t, r, e) {
            "use strict";
            e.r(r);
            var n = function() {
                    var t = this,
                        r = t.$createElement,
                        e = t._self._c || r;
                    return e("div", {
                        staticClass: "app-container"
                    }, [e("div", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: t.loading,
                            expression: "loading"
                        }]
                    }, [t.flowOrderData ? e("flowOrder", {
                        attrs: {
                            flowOrderData: t.flowOrderData
                        }
                    }) : t._e()], 1)])
                },
                a = [],
                i = e("7c72"),
                o = e("5925"),
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
                            var t = this;
                            this.loading = !0, Object(o["d"])({
                                transfer_order_ids: this.id.split(",")
                            }).then((function(r) {
                                t.flowOrderData = r.data, t.loading = !1
                            }))
                        }
                    }
                },
                u = d,
                s = e("5d22"),
                c = Object(s["a"])(u, n, a, !1, null, "1fee65d0", null);
            r["default"] = c.exports
        }
    }
]);