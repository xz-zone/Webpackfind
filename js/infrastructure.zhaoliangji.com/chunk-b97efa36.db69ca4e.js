(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-b97efa36"], {
        de90: function(t, r, e) {
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
                d = e("eaa9"),
                o = {
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
                            this.loading = !0, Object(d["d"])({
                                transfer_order_ids: this.id.split(",")
                            }).then((function(r) {
                                t.flowOrderData = r.data, t.loading = !1
                            }))
                        }
                    }
                },
                s = o,
                u = e("5d22"),
                c = Object(u["a"])(s, n, a, !1, null, "daeee7d8", null);
            r["default"] = c.exports
        },
        eaa9: function(t, r, e) {
            "use strict";
            e.d(r, "c", (function() {
                return a
            })), e.d(r, "a", (function() {
                return i
            })), e.d(r, "b", (function() {
                return d
            })), e.d(r, "d", (function() {
                return o
            }));
            var n = e("b775");

            function a(t) {
                return Object(n["a"])({
                    url: "/api/edit/transfer_orders",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(n["a"])({
                    url: "/api/edit/assign_transfer_order",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(n["a"])({
                    url: "/api/edit/destroy_transfer_order",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/edit/print_transfer_order",
                    method: "get",
                    params: t
                })
            }
        }
    }
]);