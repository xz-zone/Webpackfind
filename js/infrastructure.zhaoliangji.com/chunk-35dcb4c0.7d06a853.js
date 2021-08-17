(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-35dcb4c0"], {
        "15a1": function(t, r, n) {
            "use strict";
            n.r(r);
            var e = function() {
                    var t = this,
                        r = t.$createElement,
                        n = t._self._c || r;
                    return n("div", {
                        staticClass: "app-container"
                    }, [n("div", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: t.loading,
                            expression: "loading"
                        }]
                    }, [t.abnormal ? n("div", [n("exceptionTicket", {
                        attrs: {
                            abnormal: t.abnormal
                        }
                    })], 1) : t._e()])])
                },
                a = [],
                o = n("44bf"),
                i = n("a81e");

            function c(t) {
                return d(t) || s(t) || l(t) || u()
            }

            function u() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function l(t, r) {
                if (t) {
                    if ("string" === typeof t) return m(t, r);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(t, r) : void 0
                }
            }

            function s(t) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
            }

            function d(t) {
                if (Array.isArray(t)) return m(t)
            }

            function m(t, r) {
                (null == r || r > t.length) && (r = t.length);
                for (var n = 0, e = new Array(r); n < r; n++) e[n] = t[n];
                return e
            }
            var b = {
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
                                abnormal_report_order_ids: c(this.id)
                            }).then((function(r) {
                                t.abnormal = r.data, t.loading = !1
                            }))
                        }
                    }
                },
                f = b,
                p = n("5d22"),
                h = Object(p["a"])(f, e, a, !1, null, "aa053ac4", null);
            r["default"] = h.exports
        },
        a81e: function(t, r, n) {
            "use strict";
            n.d(r, "d", (function() {
                return a
            })), n.d(r, "c", (function() {
                return o
            })), n.d(r, "b", (function() {
                return i
            })), n.d(r, "a", (function() {
                return c
            }));
            var e = n("b775");

            function a(t) {
                return Object(e["a"])({
                    url: "/api/receive/abnormal_report_orders",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(e["a"])({
                    url: "/api/receive/show_abnormal_report",
                    method: "get",
                    params: t
                })
            }

            function i(t) {
                return Object(e["a"])({
                    url: "/api/receive/show_abnormal_reports",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(e["a"])({
                    url: "/api/abnormal/product_reject",
                    method: "post",
                    data: t
                })
            }
        }
    }
]);