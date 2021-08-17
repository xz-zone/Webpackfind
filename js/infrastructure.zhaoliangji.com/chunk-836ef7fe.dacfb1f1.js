(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-836ef7fe"], {
        3065: function(t, e, n) {},
        "56e0": function(t, e, n) {
            "use strict";
            n.r(e);
            var r = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "app-container"
                    }, [n("p", {
                        staticClass: "container-title"
                    }, [t._v("请选择部门架构展示范围")]), t._v(" "), n("el-tree", {
                        ref: "tree",
                        attrs: {
                            data: t.data,
                            "show-checkbox": "",
                            "node-key": "id",
                            "default-expanded-keys": t.expandedKeys,
                            "default-checked-keys": t.checkedKeys,
                            props: t.defaultProps
                        }
                    }), t._v(" "), n("el-button", {
                        staticClass: "submit-btn",
                        attrs: {
                            type: "primary",
                            loading: t.loading
                        },
                        on: {
                            click: t.submit
                        }
                    }, [t._v("提交")])], 1)
                },
                a = [],
                i = n("4838"),
                s = n.n(i),
                o = n("b775");

            function c(t) {
                return Object(o["a"])({
                    url: "/api/user/all_departments",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(o["a"])({
                    url: "/api/user/set_selected_department_ids",
                    method: "post",
                    data: t
                })
            }

            function d(t) {
                return h(t) || f(t) || p(t) || l()
            }

            function l() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function p(t, e) {
                if (t) {
                    if ("string" === typeof t) return m(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(t, e) : void 0
                }
            }

            function f(t) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
            }

            function h(t) {
                if (Array.isArray(t)) return m(t)
            }

            function m(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function v(t, e, n, r, a, i, s) {
                try {
                    var o = t[i](s),
                        c = o.value
                } catch (u) {
                    return void n(u)
                }
                o.done ? e(c) : Promise.resolve(c).then(r, a)
            }

            function y(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var i = t.apply(e, n);

                        function s(t) {
                            v(i, r, a, s, o, "next", t)
                        }

                        function o(t) {
                            v(i, r, a, s, o, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }
            var b = {
                    components: {},
                    data: function() {
                        return {
                            data: [],
                            defaultProps: {
                                children: "children",
                                label: "name"
                            },
                            expandedKeys: [],
                            checkedKeys: [],
                            loading: !1
                        }
                    },
                    mounted: function() {
                        this.getDepartmentList()
                    },
                    computed: {},
                    watch: {},
                    methods: {
                        getDepartmentList: function() {
                            var t = y(s.a.mark((function t() {
                                var e, n;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, this.loading = !0, t.next = 4, c();
                                        case 4:
                                            e = t.sent, this.loading = !1, this.data = e.data.tree, n = e.data.selected.map(Number), this.expandedKeys = 0 == n.length ? [2] : n, this.checkedKeys = n, t.next = 15;
                                            break;
                                        case 12:
                                            t.prev = 12, t.t0 = t["catch"](0), this.loading = !1;
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 12]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        submit: function() {
                            var t = y(s.a.mark((function t() {
                                var e, n;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, e = this.$refs.tree.getCheckedNodes(), n = [], e.forEach((function(t) {
                                                n.push(t.id)
                                            })), n = d(new Set(n)), console.log("处理后的节点" + n), this.loading = !0, t.next = 9, u({
                                                department_ids: n
                                            });
                                        case 9:
                                            t.sent, this.loading = !1, this.$message.success("设置成功"), t.next = 17;
                                            break;
                                        case 14:
                                            t.prev = 14, t.t0 = t["catch"](0), console.log(t.t0);
                                        case 17:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 14]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }
                },
                g = b,
                w = (n("9166"), n("5d22")),
                k = Object(w["a"])(g, r, a, !1, null, "52d09597", null);
            e["default"] = k.exports
        },
        9166: function(t, e, n) {
            "use strict";
            n("3065")
        }
    }
]);