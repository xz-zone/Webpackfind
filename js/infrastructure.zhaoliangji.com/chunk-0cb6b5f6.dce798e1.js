(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-0cb6b5f6"], {
        2934: function(t, e, r) {
            "use strict";
            r.d(e, "p", (function() {
                return i
            })), r.d(e, "d", (function() {
                return a
            })), r.d(e, "i", (function() {
                return o
            })), r.d(e, "m", (function() {
                return s
            })), r.d(e, "b", (function() {
                return c
            })), r.d(e, "g", (function() {
                return u
            })), r.d(e, "k", (function() {
                return l
            })), r.d(e, "j", (function() {
                return d
            })), r.d(e, "h", (function() {
                return p
            })), r.d(e, "n", (function() {
                return h
            })), r.d(e, "a", (function() {
                return f
            })), r.d(e, "l", (function() {
                return _
            })), r.d(e, "q", (function() {
                return m
            })), r.d(e, "f", (function() {
                return v
            })), r.d(e, "o", (function() {
                return b
            })), r.d(e, "c", (function() {
                return g
            })), r.d(e, "e", (function() {
                return y
            }));
            var n = r("b775");

            function i(t) {
                return Object(n["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: t
                })
            }

            function a(t) {
                return Object(n["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(n["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(n["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: t
                })
            }

            function l(t) {
                return Object(n["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(n["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(n["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: t
                })
            }

            function h(t) {
                return Object(n["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: t
                })
            }

            function f(t) {
                return Object(n["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: t
                })
            }

            function _(t) {
                return Object(n["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: t
                })
            }

            function m(t) {
                return Object(n["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: t
                })
            }

            function v(t) {
                return Object(n["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: t
                })
            }

            function b(t) {
                return Object(n["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: t
                })
            }

            function g(t) {
                return Object(n["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: t
                })
            }

            function y(t) {
                return Object(n["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: t
                })
            }
        },
        "816f": function(t, e, r) {
            "use strict";
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", [r("el-select", {
                        attrs: {
                            filterable: "",
                            "collapse-tags": "",
                            multiple: "",
                            placeholder: t.placeholder,
                            disabled: t.disabled
                        },
                        on: {
                            change: t.handleChange
                        },
                        model: {
                            value: t.check_type_ids,
                            callback: function(e) {
                                t.check_type_ids = e
                            },
                            expression: "check_type_ids"
                        }
                    }, t._l(t.dict.check_items, (function(e) {
                        return r("el-option-group", {
                            key: e.id,
                            attrs: {
                                label: e.name
                            }
                        }, t._l(e.items, (function(e, n) {
                            return r("zlj-option", {
                                key: n,
                                attrs: {
                                    label: e.name,
                                    value: e.id
                                }
                            }, [r("div", {
                                staticStyle: {
                                    float: "left",
                                    "margin-right": "30px"
                                }
                            }, [t._v(t._s(e.name))]), t._v(" "), r("div", {
                                staticStyle: {
                                    float: "right"
                                }
                            })])
                        })), 1)
                    })), 1)], 1)
                },
                i = [],
                a = r("4838"),
                o = r.n(a),
                s = (r("98de"), function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("li", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.visible,
                            expression: "visible"
                        }],
                        staticClass: "el-select-dropdown__item",
                        class: {
                            "is-disabled": t.disabled || t.groupDisabled || t.limitReached, hover: t.hover
                        },
                        on: {
                            mouseenter: t.hoverItem,
                            click: function(e) {
                                return e.stopPropagation(), t.selectOptionClick(e)
                            }
                        }
                    }, [r("div", {
                        staticStyle: {
                            float: "right"
                        }
                    }, [r("el-switch", {
                        attrs: {
                            value: t.itemSelected,
                            "active-color": "#13ce66",
                            "inactive-color": "#ff4949"
                        }
                    }), t._v(" "), r("span", {
                        class: {
                            "color-success": t.itemSelected, "color-danger": !t.itemSelected
                        }
                    }, [t._v(t._s(t.itemSelected ? "正常" : "异常"))])], 1), t._v(" "), t._t("default", [r("span", [t._v(t._s(t.currentLabel))])])], 2)
                }),
                c = [],
                u = r("3046"),
                l = r("33d8");

            function d(t) {
                return d = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, d(t)
            }
            var p = {
                    mixins: [u["a"]],
                    name: "ElOption",
                    componentName: "ElOption",
                    inject: ["select"],
                    props: {
                        value: {
                            required: !0
                        },
                        label: [String, Number],
                        created: Boolean,
                        disabled: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            index: -1,
                            groupDisabled: !1,
                            visible: !0,
                            hitState: !1,
                            hover: !1
                        }
                    },
                    computed: {
                        isObject: function() {
                            return "[object object]" === Object.prototype.toString.call(this.value).toLowerCase()
                        },
                        currentLabel: function() {
                            return this.label || (this.isObject ? "" : this.value)
                        },
                        currentValue: function() {
                            return this.value || this.label || ""
                        },
                        itemSelected: function() {
                            return this.select.multiple ? this.contains(this.select.value, this.value) : this.isEqual(this.value, this.select.value)
                        },
                        limitReached: function() {
                            return !!this.select.multiple && (!this.itemSelected && (this.select.value || []).length >= this.select.multipleLimit && this.select.multipleLimit > 0)
                        }
                    },
                    watch: {
                        currentLabel: function() {
                            this.created || this.select.remote || this.dispatch("ElSelect", "setSelected")
                        },
                        value: function(t, e) {
                            var r = this.select,
                                n = r.remote,
                                i = r.valueKey;
                            if (!this.created && !n) {
                                if (i && "object" === d(t) && "object" === d(e) && t[i] === e[i]) return;
                                this.dispatch("ElSelect", "setSelected")
                            }
                        }
                    },
                    methods: {
                        isEqual: function(t, e) {
                            if (this.isObject) {
                                var r = this.select.valueKey;
                                return Object(l["c"])(t, r) === Object(l["c"])(e, r)
                            }
                            return t === e
                        },
                        contains: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                e = arguments.length > 1 ? arguments[1] : void 0;
                            if (this.isObject) {
                                var r = this.select.valueKey;
                                return t && t.some((function(t) {
                                    return Object(l["c"])(t, r) === Object(l["c"])(e, r)
                                }))
                            }
                            return t && t.indexOf(e) > -1
                        },
                        handleGroupDisabled: function(t) {
                            this.groupDisabled = t
                        },
                        hoverItem: function() {
                            this.disabled || this.groupDisabled || (this.select.hoverIndex = this.select.options.indexOf(this))
                        },
                        selectOptionClick: function() {
                            !0 !== this.disabled && !0 !== this.groupDisabled && this.dispatch("ElSelect", "handleOptionClick", [this, !0])
                        },
                        queryChange: function(t) {
                            this.visible = new RegExp(Object(l["a"])(t), "i").test(this.currentLabel) || this.created, this.visible || this.select.filteredOptionsCount--
                        }
                    },
                    created: function() {
                        this.select.options.push(this), this.select.cachedOptions.push(this), this.select.optionsCount++, this.select.filteredOptionsCount++, this.$on("queryChange", this.queryChange), this.$on("handleGroupDisabled", this.handleGroupDisabled)
                    },
                    beforeDestroy: function() {
                        this.select.onOptionDestroy(this.select.options.indexOf(this))
                    }
                },
                h = p,
                f = r("5d22"),
                _ = Object(f["a"])(h, s, c, !1, null, null, null),
                m = _.exports,
                v = m,
                b = r("2934");

            function g(t, e) {
                var r;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (r = y(t)) || e && t && "number" === typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, o = !0,
                    s = !1;
                return {
                    s: function() {
                        r = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = r.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, a = t
                    },
                    f: function() {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                }
            }

            function y(t, e) {
                if (t) {
                    if ("string" === typeof t) return w(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? w(t, e) : void 0
                }
            }

            function w(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function k(t, e, r, n, i, a, o) {
                try {
                    var s = t[a](o),
                        c = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, i)
            }

            function C(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var a = t.apply(e, r);

                        function o(t) {
                            k(a, n, i, o, s, "next", t)
                        }

                        function s(t) {
                            k(a, n, i, o, s, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            var j = {
                    name: "ComponentCheckItem",
                    props: {
                        value: [Array, Number, String],
                        placeholder: {
                            type: String,
                            default: "质检项"
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        },
                        modelIds: {
                            type: Array,
                            default: []
                        },
                        package: {
                            type: Array,
                            default: []
                        }
                    },
                    components: {
                        ZljOption: v
                    },
                    data: function() {
                        return {
                            check_type_ids: null,
                            dict: {
                                check_items: []
                            },
                            tempModelIds: []
                        }
                    },
                    watch: {
                        value: function(t) {
                            this.check_type_ids = this.getResArr(t)
                        },
                        modelIds: function(t) {
                            this.tempModelIds.length > 0 && t.join(",") != this.tempModelIds.join(",") && (this.$emit("input", []), this.getDict(t)), this.tempModelIds = t
                        }
                    },
                    mounted: function() {
                        this.getDict()
                    },
                    methods: {
                        getDict: function() {
                            var t = C(o.a.mark((function t(e) {
                                var r, n;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(b["f"])({
                                                model_ids: e || this.modelIds
                                            });
                                        case 3:
                                            r = t.sent, this.dict.check_items = r.data[0].rows.quality_inspection ? r.data[0].rows.quality_inspection : [], n = [], r.data[0].rows.package && (n = r.data[0].rows.package.map((function(t) {
                                                return {
                                                    id: t.id,
                                                    result: 1
                                                }
                                            }))), this.$emit("update:package", n), this.check_type_ids = this.getResArr(this.value), console.log("value值：", this.value), this.value && 0 != this.value.length || this.resetRes(), this.handleChange(this.check_type_ids), console.log("获取：：：", this.dict.check_items), 0 == this.dict.check_items.length && (this.$emit("input", []), this.$emit("change", [])), t.next = 19;
                                            break;
                                        case 16:
                                            t.prev = 16, t.t0 = t["catch"](0), console.log(t.t0);
                                        case 19:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 16]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        handleChange: function(t) {
                            console.log(t);
                            var e, r = [],
                                n = g(this.dict.check_items);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var i, a = e.value,
                                        o = {
                                            id: a.id,
                                            items: []
                                        },
                                        s = g(a.items);
                                    try {
                                        for (s.s(); !(i = s.n()).done;) {
                                            var c = i.value,
                                                u = t.indexOf(c.id) > -1;
                                            o.items.push({
                                                id: c.id,
                                                result: u ? 1 : 0
                                            })
                                        }
                                    } catch (l) {
                                        s.e(l)
                                    } finally {
                                        s.f()
                                    }
                                    r.push(o)
                                }
                            } catch (l) {
                                n.e(l)
                            } finally {
                                n.f()
                            }
                            console.log(r), this.$emit("input", r), this.$emit("change", r)
                        },
                        getResArr: function(t) {
                            var e, r = [],
                                n = g(this.dict.check_items);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var i, a = e.value,
                                        o = g(a.items);
                                    try {
                                        for (o.s(); !(i = o.n()).done;) {
                                            var s = i.value;
                                            this.checkErrRes(s.id, t) || r.push(s.id + "")
                                        }
                                    } catch (c) {
                                        o.e(c)
                                    } finally {
                                        o.f()
                                    }
                                }
                            } catch (c) {
                                n.e(c)
                            } finally {
                                n.f()
                            }
                            return r
                        },
                        checkErrRes: function(t, e) {
                            var r, n = g(e);
                            try {
                                for (n.s(); !(r = n.n()).done;) {
                                    var i, a = r.value,
                                        o = g(a.items);
                                    try {
                                        for (o.s(); !(i = o.n()).done;) {
                                            var s = i.value;
                                            if (s.id == t) return 0 == s.result
                                        }
                                    } catch (c) {
                                        o.e(c)
                                    } finally {
                                        o.f()
                                    }
                                }
                            } catch (c) {
                                n.e(c)
                            } finally {
                                n.f()
                            }
                            return !1
                        },
                        resetRes: function() {
                            var t, e = g(this.dict.check_items);
                            try {
                                for (e.s(); !(t = e.n()).done;) {
                                    var r, n = t.value,
                                        i = g(n.items);
                                    try {
                                        for (i.s(); !(r = i.n()).done;) {
                                            var a = r.value;
                                            this.check_type_ids.push(a.id)
                                        }
                                    } catch (o) {
                                        i.e(o)
                                    } finally {
                                        i.f()
                                    }
                                }
                            } catch (o) {
                                e.e(o)
                            } finally {
                                e.f()
                            }
                        },
                        checkResArr: function(t) {
                            var e, r = g(this.dict.check_items);
                            try {
                                for (r.s(); !(e = r.n()).done;) {
                                    var n, i = e.value,
                                        a = g(i.items);
                                    try {
                                        for (a.s(); !(n = a.n()).done;) {
                                            var o = n.value;
                                            if (o.id == t) return !0
                                        }
                                    } catch (s) {
                                        a.e(s)
                                    } finally {
                                        a.f()
                                    }
                                }
                            } catch (s) {
                                r.e(s)
                            } finally {
                                r.f()
                            }
                            return !1
                        }
                    }
                },
                x = j,
                O = Object(f["a"])(x, n, i, !1, null, "06cc1e96", null);
            e["a"] = O.exports
        },
        "8d1b": function(t, e, r) {
            "use strict";
            r.r(e);
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "app-container"
                    }, [r("el-row", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isEdit,
                            expression: "isEdit"
                        }],
                        staticClass: "header-search"
                    }, [r("el-col", {
                        attrs: {
                            span: 8
                        }
                    }, [r("ImeiSearch", {
                        attrs: {
                            focus: !0,
                            "search-type": t.searchType,
                            placeholder: "扫描流转单号 / 二维码 / 质检码"
                        },
                        on: {
                            "update:searchType": function(e) {
                                t.searchType = e
                            },
                            "update:search-type": function(e) {
                                t.searchType = e
                            },
                            done: function(e) {
                                return t.getDetail()
                            }
                        },
                        model: {
                            value: t.search.transfer_order_no,
                            callback: function(e) {
                                t.$set(t.search, "transfer_order_no", e)
                            },
                            expression: "search.transfer_order_no"
                        }
                    })], 1), t._v(" "), r("el-col", {
                        attrs: {
                            span: 8
                        }
                    }, [r("el-alert", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: void 0 != t.detail.status,
                            expression: "detail.status != undefined"
                        }],
                        staticClass: "status-tip",
                        attrs: {
                            title: t.detail.receive_status_description,
                            type: 0 == t.detail.receive_status ? "warning" : (t.detail.receive_status, "success"),
                            "show-icon": "",
                            closable: !1
                        }
                    })], 1)], 1), t._v(" "), t.detail.id ? r("el-row", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isEdit,
                            expression: "isEdit"
                        }],
                        staticClass: "header-search"
                    }, [r("el-col", [r("el-alert", {
                        attrs: {
                            type: "success",
                            closable: !1
                        }
                    }, [r("el-row", [r("el-col", {
                        staticClass: "header-info",
                        attrs: {
                            span: 16
                        }
                    }, [r("div", [t._v("\n              当前流转单号：\n              "), r("span", [t._v(t._s(t.detail.transfer_order_no))])]), t._v(" "), r("div", [t._v("\n              总数量：\n              "), r("span", [t._v(t._s(t.detail.total_num))])]), t._v(" "), r("div", [t._v("\n              已处理：\n              "), r("span", {
                        staticClass: "color-danger"
                    }, [t._v(t._s(t.detail.deal_num))])]), t._v(" "), t.tableData[0] && 4 == t.tableData[0].product_type ? r("div", [t._v("\n              商品类型：\n              "), r("span", {
                        staticClass: "color-danger"
                    }, [t._v("标品")])]) : t._e()]), t._v(" "), r("el-col", {
                        staticClass: "header-total",
                        attrs: {
                            span: 8
                        }
                    }, [r("ul")])], 1)], 1)], 1)], 1) : t._e(), t._v(" "), r("el-row", {
                        staticClass: "body-list"
                    }, [r("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [t.tableData.length > 0 ? r("zlj-quality", {
                        ref: "zljQuality",
                        attrs: {
                            data: t.tableData,
                            source: t.tableData[0].source,
                            "source-order-no": t.tableData[0].purchase_order_no,
                            "show-save-btn": 1 != t.searchType && !t.isInfo && t.tableData[0] && 4 != t.tableData[0].product_type,
                            "selected-rows": t.selectRows,
                            "no-submit": t.noSubmit
                        },
                        on: {
                            "update:selectedRows": function(e) {
                                t.selectRows = e
                            },
                            "update:selected-rows": function(e) {
                                t.selectRows = e
                            },
                            "update:noSubmit": function(e) {
                                t.noSubmit = e
                            },
                            "update:no-submit": function(e) {
                                t.noSubmit = e
                            },
                            done: function(e) {
                                return t.save(!1)
                            }
                        }
                    }, [r("template", {
                        slot: "header"
                    }, [r("el-table-column", {
                        attrs: {
                            prop: "imei",
                            label: "IMEI",
                            width: "80",
                            align: "center",
                            fixed: ""
                        }
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "商品名称",
                            align: "center",
                            fixed: "",
                            width: "150"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [r("el-link", {
                                    attrs: {
                                        underline: !1
                                    },
                                    on: {
                                        click: function(r) {
                                            return t.openImgView(e.row.image_url)
                                        }
                                    }
                                }, [t._v(t._s(e.row.product_name))]), t._v(" "), 1 == e.row.is_imei_change ? r("div", {
                                    staticStyle: {
                                        color: "red"
                                    }
                                }, [t._v("\n                （更换过序列号）\n              ")]) : t._e()]
                            }
                        }], null, !1, 1040458308)
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "参数",
                            "header-align": "center",
                            fixed: "",
                            width: "190"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return t._l(e.row.sales_properties, (function(e) {
                                    return r("el-tag", {
                                        key: e.pn_id,
                                        staticStyle: {
                                            "margin-left": "2px"
                                        },
                                        attrs: {
                                            size: "mini"
                                        }
                                    }, [t._v(t._s(e.pn_name) + "：" + t._s(e.pv_name))])
                                }))
                            }
                        }], null, !1, 2658823725)
                    }), t._v(" "), t.tableData[0].qc_code ? r("el-table-column", {
                        attrs: {
                            label: "质检码",
                            prop: "qc_code",
                            align: "center",
                            width: "100"
                        }
                    }) : t._e(), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "历史记录",
                            "header-align": "center",
                            width: "240"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [r("div", {
                                    staticStyle: {
                                        "max-height": "200px",
                                        overflow: "auto"
                                    }
                                }, [r("el-timeline", {
                                    attrs: {
                                        reverse: !0
                                    }
                                }, t._l(e.row.quality_tracks, (function(e, n) {
                                    return r("el-timeline-item", {
                                        key: n,
                                        attrs: {
                                            timestamp: e.check_date,
                                            placement: "top"
                                        }
                                    }, [t._v("\n                    " + t._s(e.quality_name) + "：" + t._s(e.quality_remark) + "\n                  ")])
                                })), 1)], 1), t._v(" "), r("el-button", {
                                    staticStyle: {
                                        "margin-left": "40px"
                                    },
                                    attrs: {
                                        type: "primary",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(r) {
                                            return t.handleReportClick(e.row.imei)
                                        }
                                    }
                                }, [t._v("查看历史报告")])]
                            }
                        }], null, !1, 1638430211)
                    })], 1), t._v(" "), t.tableData.length > 0 && !t.isInfo ? r("template", {
                        slot: "btn"
                    }, [1 == t.searchType && 4 != t.tableData[0].product_type ? r("el-button", {
                        attrs: {
                            loading: t.loading,
                            disabled: t.noSubmit,
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.save(!1)
                            }
                        }
                    }, [t._v("保存并自动流转")]) : t._e(), t._v(" "), t.$route.query.product_ids || 4 == t.tableData[0].product_type ? t._e() : r("el-button", {
                        attrs: {
                            loading: t.loading,
                            disabled: t.noSubmit,
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.save(!0)
                            }
                        }
                    }, [t._v("保存并生成流转单")]), t._v(" "), 4 == t.tableData[0].product_type ? r("el-button", {
                        attrs: {
                            loading: t.loading,
                            disabled: t.noSubmit,
                            type: "primary"
                        },
                        on: {
                            click: t.saveAndSwitch
                        }
                    }, [t._v("保存并打印调拨单")]) : t._e(), t._v(" "), r("el-button", {
                        attrs: {
                            loading: t.loading,
                            disabled: 1 != t.selectRows.length,
                            type: "danger"
                        },
                        on: {
                            click: function(e) {
                                t.showErrDialog = !0
                            }
                        }
                    }, [t._v("错误上报")]), t._v(" "), 1 != t.tableData[0].business_line ? r("el-button", {
                        attrs: {
                            loading: t.loading,
                            type: "danger"
                        },
                        on: {
                            click: function(e) {
                                t.showC2CExceptionDialog = !0
                            }
                        }
                    }, [t._v("中断")]) : t._e()], 1) : t._e()], 2) : t._e()], 1)], 1), t._v(" "), r("AssignDialog", {
                        attrs: {
                            "show-dialog": t.showAssignDialog,
                            "require-user": !1
                        },
                        on: {
                            "update:showDialog": function(e) {
                                t.showAssignDialog = e
                            },
                            "update:show-dialog": function(e) {
                                t.showAssignDialog = e
                            },
                            done: t.handleAssingDone
                        },
                        model: {
                            value: t.assignForm,
                            callback: function(e) {
                                t.assignForm = e
                            },
                            expression: "assignForm"
                        }
                    }), t._v(" "), r("ErrorDialog", {
                        attrs: {
                            imei: t.selectRows.length > 0 ? t.selectRows[0].imei : "",
                            "show-dialog": t.showErrDialog,
                            "node-id": 3
                        },
                        on: {
                            "update:showDialog": function(e) {
                                t.showErrDialog = e
                            },
                            "update:show-dialog": function(e) {
                                t.showErrDialog = e
                            }
                        }
                    }), t._v(" "), r("el-dialog", {
                        attrs: {
                            title: "查看大图",
                            visible: t.showImgDialog,
                            "append-to-body": !0,
                            width: "fit-content"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.showImgDialog = e
                            }
                        }
                    }, [r("img", {
                        attrs: {
                            src: t.reviewImg
                        }
                    }), t._v(" "), r("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                t.showImgDialog = !1
                            }
                        }
                    }, [t._v("确定")])], 1)]), t._v(" "), r("el-button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !1,
                            expression: "false"
                        }, {
                            name: "print",
                            rawName: "v-print",
                            value: "#barcode-container",
                            expression: "'#barcode-container'"
                        }],
                        ref: "qrcodeBtn"
                    }, [t._v("打印")]), t._v(" "), r("Barcode", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !1,
                            expression: "false"
                        }],
                        attrs: {
                            id: "barcode-container",
                            data: t.barcodeInfo
                        }
                    }), t._v(" "), r("el-dialog", {
                        attrs: {
                            visible: t.showReport,
                            width: "1100px"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.showReport = e
                            }
                        }
                    }, [t.reportRow.attr_list.length > 0 ? r("div", {
                        staticClass: "quality-report",
                        attrs: {
                            id: "report"
                        }
                    }, [r("el-row", {
                        staticClass: "report-title"
                    }, [r("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [t._v("质检报告")])], 1), t._v(" "), r("el-row", {
                        staticClass: "report-nav"
                    }, [r("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [t._v("基础信息")])], 1), t._v(" "), r("el-row", {
                        staticClass: "report-info"
                    }, [r("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [t._v("IMEI：" + t._s(t.reportRow.imei))])], 1), t._v(" "), r("el-row", {
                        staticClass: "report-info"
                    }, t._l(t.reportRow.attr_list, (function(e, n) {
                        return r("el-col", {
                            key: n,
                            attrs: {
                                span: 6
                            }
                        }, [t._v(t._s(e))])
                    })), 1), t._v(" "), r("el-row", {
                        staticClass: "report-nav"
                    }, [r("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [t._v("质检结果")])], 1), t._v(" "), t.reportRow.item_list ? r("table", {
                        staticClass: "report-table",
                        attrs: {
                            border: "1",
                            colspan: "false"
                        }
                    }, [r("thead", [r("tr", [r("th", [t._v("质检项")]), t._v(" "), r("th", [t._v("质检结果")]), t._v(" "), r("th", [t._v("质检人")]), t._v(" "), r("th", [t._v("质检项")]), t._v(" "), r("th", [t._v("质检结果")]), t._v(" "), r("th", [t._v("质检人")])])]), t._v(" "), r("tbody", t._l(t.reportRow.item_list.length, (function(e) {
                        return r("tr", {
                            key: e
                        }, [e % 2 == 1 ? [r("td", [t._v(t._s(t.reportRow.item_list[e - 1].name))]), t._v(" "), r("td", [r("i", {
                            class: {
                                "success el-icon-success": 1 == t.reportRow.item_list[e - 1].result, "error el-icon-error": 0 == t.reportRow.item_list[e - 1].result
                            }
                        }), t._v(" "), t.reportRow.item_list[e - 1].exception_reason ? r("div", {
                            staticClass: "error",
                            staticStyle: {
                                "font-size": "12px"
                            }
                        }, [t._v("\n                  （" + t._s(t.reportRow.item_list[e - 1].exception_reason) + "）\n                ")]) : t._e()]), t._v(" "), r("td", [t._v(t._s(t.reportRow.item_list[e - 1].quality_user_name))]), t._v(" "), e != t.reportRow.item_list.length ? r("td", [t._v(t._s(t.reportRow.item_list[e].name))]) : t._e(), t._v(" "), e != t.reportRow.item_list.length ? r("td", [r("i", {
                            class: {
                                "success el-icon-success": 1 == t.reportRow.item_list[e].result, "error el-icon-error": 0 == t.reportRow.item_list[e].result
                            }
                        }), t._v(" "), t.reportRow.item_list[e].exception_reason ? r("div", {
                            staticClass: "error",
                            staticStyle: {
                                "font-size": "12px"
                            }
                        }, [t._v("\n                  （" + t._s(t.reportRow.item_list[e].exception_reason) + "）\n                ")]) : t._e()]) : t._e(), t._v(" "), r("td", [t._v(t._s(t.reportRow.item_list[e - 1].quality_user_name))])] : t._e()], 2)
                    })), 0)]) : t._e()], 1) : t._e(), t._v(" "), r("span", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [r("el-button", {
                        directives: [{
                            name: "print",
                            rawName: "v-print",
                            value: "#report",
                            expression: "'#report'"
                        }],
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.printReport
                        }
                    }, [t._v("打 印")])], 1)]), t._v(" "), r("el-dialog", {
                        attrs: {
                            title: "提交异常",
                            visible: t.showC2CExceptionDialog,
                            width: "800px"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.showC2CExceptionDialog = e
                            }
                        }
                    }, [r("el-table", {
                        staticClass: "exceptionTable",
                        attrs: {
                            data: t.C2CList
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            label: "序号",
                            type: "index",
                            align: "center"
                        }
                    }), t._v(" "), r("el-table-column", {
                        staticStyle: {
                            "border-right": "1px solid red"
                        },
                        attrs: {
                            label: "机器异常",
                            prop: "phone_exception",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [void 0 !== e.row.phoneQcCode ? r("el-input", {
                                    ref: "C2CList-phone-" + e.$index,
                                    attrs: {
                                        placeholder: "质检码"
                                    },
                                    nativeOn: {
                                        keyup: function(r) {
                                            return !r.type.indexOf("key") && t._k(r.keyCode, "enter", 13, r.key, "Enter") ? null : t.handleQcEnter(e.$index, "phone")
                                        }
                                    },
                                    model: {
                                        value: e.row.phoneQcCode,
                                        callback: function(r) {
                                            t.$set(e.row, "phoneQcCode", r)
                                        },
                                        expression: "scope.row.phoneQcCode"
                                    }
                                }) : t._e()]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "有密码",
                            prop: "passord_exception",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [void 0 !== e.row.passwordQcCode ? r("el-input", {
                                    ref: "C2CList-password-" + e.$index,
                                    attrs: {
                                        placeholder: "质检码"
                                    },
                                    nativeOn: {
                                        keyup: function(r) {
                                            return !r.type.indexOf("key") && t._k(r.keyCode, "enter", 13, r.key, "Enter") ? null : t.handleQcEnter(e.$index, "password")
                                        }
                                    },
                                    model: {
                                        value: e.row.passwordQcCode,
                                        callback: function(r) {
                                            t.$set(e.row, "passwordQcCode", r)
                                        },
                                        expression: "scope.row.passwordQcCode"
                                    }
                                }) : t._e()]
                            }
                        }])
                    }), t._v(" "), r("el-table-column", {
                        attrs: {
                            label: "密码锁类型",
                            prop: "password_type",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [void 0 !== e.row.passwordType ? r("el-radio-group", {
                                    model: {
                                        value: e.row.passwordType,
                                        callback: function(r) {
                                            t.$set(e.row, "passwordType", r)
                                        },
                                        expression: "scope.row.passwordType"
                                    }
                                }, [r("el-radio", {
                                    attrs: {
                                        label: 1
                                    }
                                }, [t._v("密码")]), t._v(" "), r("el-radio", {
                                    attrs: {
                                        label: 2
                                    }
                                }, [t._v("ID锁")])], 1) : t._e()]
                            }
                        }])
                    })], 1), t._v(" "), r("span", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [r("el-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: function(e) {
                                t.showC2CExceptionDialog = !1
                            }
                        }
                    }, [t._v("取消")]), t._v(" "), r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.handleC2CExceptionClick()
                            }
                        }
                    }, [t._v("确 定")])], 1)], 1)], 1)
                },
                i = [],
                a = r("4838"),
                o = r.n(a),
                s = r("98de"),
                c = r("afe9"),
                u = r("b7b8"),
                l = r("c4a5"),
                d = r("3067"),
                p = r("816f"),
                h = r("246e"),
                f = r("6d8f");

            function _(t, e) {
                var r;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (r = m(t)) || e && t && "number" === typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, o = !0,
                    s = !1;
                return {
                    s: function() {
                        r = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = r.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, a = t
                    },
                    f: function() {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                }
            }

            function m(t, e) {
                if (t) {
                    if ("string" === typeof t) return v(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? v(t, e) : void 0
                }
            }

            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function b(t, e, r, n, i, a, o) {
                try {
                    var s = t[a](o),
                        c = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, i)
            }

            function g(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var a = t.apply(e, r);

                        function o(t) {
                            b(a, n, i, o, s, "next", t)
                        }

                        function s(t) {
                            b(a, n, i, o, s, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            var y = {
                    name: "Quality",
                    components: {
                        AssignDialog: u["a"],
                        ErrorDialog: l["a"],
                        ErrorType: d["a"],
                        CheckItem: p["a"],
                        ImeiSearch: h["a"],
                        Barcode: f["a"]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            selectRows: [],
                            search: {
                                transfer_order_no: null
                            },
                            loading: !1,
                            detail: {},
                            assignForm: {
                                to_node_id: 4
                            },
                            showAssignDialog: !1,
                            isFlow: !1,
                            isEdit: !0,
                            warranty_select: [],
                            networkOption: [],
                            batch: {
                                network: null,
                                warranty_status: null
                            },
                            showErrDialog: !1,
                            errorTypes: [],
                            showImgDialog: !1,
                            reviewImg: null,
                            notebookChecks: [],
                            isInfo: !1,
                            searchType: 0,
                            imeiInfo: null,
                            noSubmit: !1,
                            barcodeInfo: [],
                            showReport: !1,
                            reportRow: {
                                attr_list: []
                            },
                            showC2CExceptionDialog: !1,
                            C2CList: [{
                                phoneQcCode: null,
                                passwordQcCode: null,
                                passwordType: 1
                            }]
                        }
                    },
                    mounted: function() {
                        "info" == this.$route.query.type && (this.isInfo = !0), this.$route.query.id && (this.detail.id = this.$route.query.id, this.detail.transfer_order_no = this.$route.query.order_no, this.getList()), this.$route.query.no && (this.search.transfer_order_no = this.$route.query.no, this.getDetail()), this.$route.query.product_ids && (this.isEdit = !1)
                    },
                    methods: {
                        getDetail: function() {
                            var t = g(o.a.mark((function t() {
                                var e, r;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0, "L" != this.search.transfer_order_no.substr(0, 1)) {
                                                t.next = 14;
                                                break
                                            }
                                            return this.searchType, e = this.search.transfer_order_no ? this.search.transfer_order_no : this.detail.transfer_order_no, this.loading = !0, t.next = 7, Object(s["k"])({
                                                transfer_order_no: e
                                            });
                                        case 7:
                                            r = t.sent, this.loading = !1, this.detail = r.data, this.getList(), this.search.transfer_order_no = null, t.next = 15;
                                            break;
                                        case 14:
                                            1 == this.searchType ? this.scanReceiveByImei() : this.loading = !1;
                                        case 15:
                                            t.next = 21;
                                            break;
                                        case 17:
                                            t.prev = 17, t.t0 = t["catch"](0), this.search.transfer_order_no = null, this.loading = !1;
                                        case 21:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 17]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        scanReceiveByImei: function() {
                            var t = g(o.a.mark((function t() {
                                var e, r;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(s["j"])({
                                                imei: this.search.transfer_order_no
                                            });
                                        case 2:
                                            return e = t.sent, this.detail = e.data, t.next = 6, Object(s["i"])({
                                                transfer_order_id: e.data.id,
                                                imei: this.search.transfer_order_no
                                            });
                                        case 6:
                                            r = t.sent, this.getList(r), this.loading = !1, this.search.transfer_order_no = null;
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        getList: function() {
                            var t = g(o.a.mark((function t(e) {
                                var r;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0, this.loading = !0, r = {}, !e) {
                                                t.next = 7;
                                                break
                                            }
                                            r = e, t.next = 16;
                                            break;
                                        case 7:
                                            if (!this.$route.query.product_ids) {
                                                t.next = 13;
                                                break
                                            }
                                            return t.next = 10, this.getEditInfo();
                                        case 10:
                                            r = t.sent, t.next = 16;
                                            break;
                                        case 13:
                                            return t.next = 15, this.getProductList();
                                        case 15:
                                            r = t.sent;
                                        case 16:
                                            this.loading = !1, this.tableData = r.data.map((function(t) {
                                                return t.network_id = t.network_id ? t.network_id.pv_id : null, t.quality_remark = t.crawler_result ? t.crawler_result.quality_crawler_result : null, t
                                            })), t.next = 24;
                                            break;
                                        case 20:
                                            t.prev = 20, t.t0 = t["catch"](0), console.log(t.t0), this.loading = !1;
                                        case 24:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 20]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        save: function(t) {
                            t ? this.showAssignDialog = !0 : this.handleAssingDone(), this.isFlow = t
                        },
                        handleAssingDone: function() {
                            var t = g(o.a.mark((function t() {
                                var e, r;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, this.$refs["zljQuality"].save(!1);
                                        case 3:
                                            if (e = {
                                                    transfer_order_id: this.detail.id,
                                                    result: this.$refs["zljQuality"].getSaveData()
                                                }, e = JSON.parse(JSON.stringify(e)), console.log(e), this.loading = !0, r = {}, !this.isFlow) {
                                                t.next = 16;
                                                break
                                            }
                                            return e.to_node_id = this.assignForm.to_node_id, e.by_assign_user_id = this.assignForm.by_assign_user_id, t.next = 13, Object(s["b"])(e);
                                        case 13:
                                            r = t.sent, t.next = 26;
                                            break;
                                        case 16:
                                            if (!this.$route.query.product_ids) {
                                                t.next = 22;
                                                break
                                            }
                                            return t.next = 19, Object(s["c"])(e);
                                        case 19:
                                            r = t.sent, t.next = 26;
                                            break;
                                        case 22:
                                            return 1 == this.searchType && (e.is_auto_next_transfer = 1), t.next = 25, Object(s["a"])(e);
                                        case 25:
                                            r = t.sent;
                                        case 26:
                                            this.loading = !1, this.$message.success(r.msg), this.$route.query.id || this.getDetail(), this.isFlow && this.$router.push({
                                                name: "quality-flow-list",
                                                query: {
                                                    order_no: r.data.transfer_order_no
                                                }
                                            }), t.next = 36;
                                            break;
                                        case 32:
                                            t.prev = 32, t.t0 = t["catch"](0), console.log(t.t0), this.loading = !1;
                                        case 36:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 32]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        getEditInfo: function() {
                            var t = g(o.a.mark((function t() {
                                var e, r, n, i, a;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            e = [], r = _((this.$route.query.product_ids + "").split(","));
                                            try {
                                                for (r.s(); !(n = r.n()).done;) i = n.value, e.push({
                                                    product_id: i
                                                })
                                            } catch (o) {
                                                r.e(o)
                                            } finally {
                                                r.f()
                                            }
                                            return t.next = 5, Object(s["e"])({
                                                transfer_order_id: this.detail.id,
                                                result: e,
                                                is_edit: !this.isInfo
                                            });
                                        case 5:
                                            return a = t.sent, t.abrupt("return", a);
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        getProductList: function() {
                            var t = g(o.a.mark((function t() {
                                var e;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(s["f"])({
                                                transfer_order_id: this.detail.id
                                            });
                                        case 2:
                                            return e = t.sent, t.abrupt("return", e);
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        editCheck: function() {
                            var t = g(o.a.mark((function t(e) {
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(s["c"])(e);
                                        case 2:
                                            this.$message.success("修改成功！");
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        handleErrorType: function(t) {
                            console.log(t.error_type_ids);
                            var e, r = [],
                                n = _(this.errorTypes);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var i = e.value;
                                    t.error_type_ids.indexOf(i.id) > -1 && r.push(i.name)
                                }
                            } catch (a) {
                                n.e(a)
                            } finally {
                                n.f()
                            }
                            /##(\S*)##/.test(t.quality_remark) ? t.quality_remark = t.quality_remark.replace(/##(\S*)##/, "##" + r.join(",") + "##") : t.quality_remark += "##" + r.join(",") + "##"
                        },
                        handleChangeQualityRes: function(t) {
                            t.error_type_ids = [], t.quality_remark = t.quality_remark.replace(/##(\S*)##/, "")
                        },
                        openImgView: function(t) {
                            this.reviewImg = t, this.showImgDialog = !0
                        },
                        saveAndSwitch: function() {
                            var t = g(o.a.mark((function t() {
                                var e, r, n = this;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, this.loading = !0, t.next = 4, this.$refs["zljQuality"].save(!1);
                                        case 4:
                                            return e = {
                                                transfer_order_id: this.detail.id,
                                                result: this.$refs["zljQuality"].getSaveData()
                                            }, e = JSON.parse(JSON.stringify(e)), t.next = 8, Object(s["h"])(e);
                                        case 8:
                                            r = t.sent, this.$message.success(r.msg), this.barcodeInfo = [{
                                                title: "".concat(r.data.src_warehouse_description, "---\x3e").concat(r.data.dst_warehouse_description, "（").concat(r.data.num, "台）"),
                                                code: r.data.move_batch_no
                                            }], setTimeout((function() {
                                                n.$refs["qrcodeBtn"].$el.click()
                                            }), 500), this.loading = !1, t.next = 18;
                                            break;
                                        case 15:
                                            t.prev = 15, t.t0 = t["catch"](0), console.log(t.t0);
                                        case 18:
                                            this.loading = !1;
                                        case 19:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 15]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        handleReportClick: function() {
                            var t = g(o.a.mark((function t(e) {
                                var r, n = this;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(s["g"])({
                                                imei: e
                                            });
                                        case 2:
                                            r = t.sent, this.reportRow = r.data, this.$nextTick((function() {
                                                r.data.item_list.length > 0 ? n.showReport = !0 : n.$message.warning("没有历史质检报告")
                                            }));
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        printReport: function() {},
                        handleQcEnter: function(t, e) {
                            var r = this;
                            "phone" == e ? this.C2CList[t].phoneQcCode && (t == this.C2CList.length - 1 ? this.C2CList.push({
                                phoneQcCode: null
                            }) : void 0 === this.C2CList[t + 1].phoneQcCode && this.$set(this.C2CList[t + 1], "phoneQcCode", null), this.$nextTick((function() {
                                r.$refs["C2CList-phone-" + (t + 1)].focus()
                            }))) : "password" == e && this.C2CList[t].passwordQcCode && (t == this.C2CList.length - 1 ? this.C2CList.push({
                                passwordQcCode: null,
                                passwordType: 1
                            }) : void 0 === this.C2CList[t + 1].passwordQcCode && (this.$set(this.C2CList[t + 1], "passwordQcCode", null), this.$set(this.C2CList[t + 1], "passwordType", 1)), this.$nextTick((function() {
                                r.$refs["C2CList-password-" + (t + 1)].focus()
                            })))
                        },
                        handleC2CExceptionClick: function() {
                            var t = g(o.a.mark((function t() {
                                var e, r;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, e = {
                                                transfer_order_id: this.detail.id,
                                                abnormal_products: {
                                                    password_abnormal: [],
                                                    other_abnormal: []
                                                }
                                            }, this.C2CList.forEach((function(t) {
                                                t.phoneQcCode && e.abnormal_products.other_abnormal.push({
                                                    qc_code: t.phoneQcCode
                                                }), t.passwordQcCode && e.abnormal_products.password_abnormal.push({
                                                    qc_code: t.passwordQcCode,
                                                    password_type: t.passwordType
                                                })
                                            })), this.loading = !0, t.next = 6, Object(c["a"])(e);
                                        case 6:
                                            r = t.sent, this.$message.success(r.msg), this.showC2CExceptionDialog = !1, this.$router.push({
                                                name: "interrupt-transfer"
                                            }), r && r.data.transfer_order_no && this.$router.push({
                                                path: "/quality/flow",
                                                query: {
                                                    order_no: r.data.transfer_order_no
                                                }
                                            }), t.next = 16;
                                            break;
                                        case 13:
                                            t.prev = 13, t.t0 = t["catch"](0), console.log(t.t0);
                                        case 16:
                                            this.loading = !1;
                                        case 17:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 13]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }
                },
                w = y,
                k = (r("ad41"), r("5d22")),
                C = Object(k["a"])(w, n, i, !1, null, "04667f33", null);
            e["default"] = C.exports
        },
        "98de": function(t, e, r) {
            "use strict";
            r.d(e, "f", (function() {
                return i
            })), r.d(e, "k", (function() {
                return a
            })), r.d(e, "a", (function() {
                return o
            })), r.d(e, "b", (function() {
                return s
            })), r.d(e, "e", (function() {
                return c
            })), r.d(e, "c", (function() {
                return u
            })), r.d(e, "d", (function() {
                return l
            })), r.d(e, "j", (function() {
                return d
            })), r.d(e, "i", (function() {
                return p
            })), r.d(e, "h", (function() {
                return h
            })), r.d(e, "g", (function() {
                return f
            }));
            var n = r("b775");

            function i(t) {
                return Object(n["a"])({
                    url: "/api/check/scan_info",
                    method: "get",
                    params: t
                })
            }

            function a(t) {
                return Object(n["a"])({
                    url: "/api/check/scan_receive",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/check/save",
                    method: "post",
                    data: t
                })
            }

            function s(t) {
                return Object(n["a"])({
                    url: "/api/check/save_and_transfer_store",
                    method: "post",
                    data: t
                })
            }

            function c(t) {
                return Object(n["a"])({
                    url: "/api/check/edit_check_view",
                    method: "post",
                    data: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "/api/check/edit_check",
                    method: "post",
                    data: t
                })
            }

            function l(t) {
                return Object(n["a"])({
                    url: "/api/check_error_types",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(n["a"])({
                    url: "api/check/scan_receive_for_imei",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(n["a"])({
                    url: "api/check/scan_info_for_imei",
                    method: "get",
                    params: t
                })
            }

            function h(t) {
                return Object(n["a"])({
                    url: "api/check/save_and_auto_switch",
                    method: "post",
                    data: t
                })
            }

            function f(t) {
                return Object(n["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality_data/history_report",
                    method: "get",
                    params: t
                })
            }
        },
        ad41: function(t, e, r) {
            "use strict";
            r("b4bd")
        },
        afe9: function(t, e, r) {
            "use strict";
            r.d(e, "m", (function() {
                return i
            })), r.d(e, "g", (function() {
                return a
            })), r.d(e, "j", (function() {
                return o
            })), r.d(e, "d", (function() {
                return s
            })), r.d(e, "i", (function() {
                return c
            })), r.d(e, "k", (function() {
                return u
            })), r.d(e, "s", (function() {
                return l
            })), r.d(e, "l", (function() {
                return d
            })), r.d(e, "p", (function() {
                return p
            })), r.d(e, "n", (function() {
                return h
            })), r.d(e, "c", (function() {
                return f
            })), r.d(e, "b", (function() {
                return _
            })), r.d(e, "h", (function() {
                return m
            })), r.d(e, "q", (function() {
                return v
            })), r.d(e, "f", (function() {
                return b
            })), r.d(e, "o", (function() {
                return g
            })), r.d(e, "r", (function() {
                return y
            })), r.d(e, "e", (function() {
                return w
            })), r.d(e, "a", (function() {
                return k
            }));
            var n = r("b775");

            function i(t) {
                return Object(n["a"])({
                    url: "/api/input/type_list",
                    method: "get",
                    params: t
                })
            }

            function a(t) {
                return Object(n["a"])({
                    url: "/api/input/manual_work",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/input/scan_receive",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(n["a"])({
                    url: "/api/input/get_brand",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(n["a"])({
                    url: "/api/input/get_model",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "/api/input/get_props",
                    method: "get",
                    params: t
                })
            }

            function l(t) {
                return Object(n["a"])({
                    url: "/api/input/zz_colors",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(n["a"])({
                    url: "/api/input/get_sha_lou_result_by_transfer_order",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(n["a"])({
                    url: "/api/input/save",
                    method: "post",
                    data: t
                })
            }

            function h(t) {
                return Object(n["a"])({
                    url: "/api/input/save_and_transfer_store",
                    method: "post",
                    data: t
                })
            }

            function f(t) {
                return Object(n["a"])({
                    url: "/api/input/validate_imei_can_input",
                    method: "get",
                    params: t
                })
            }

            function _(t) {
                return Object(n["a"])({
                    url: "/api/input/android_input_tool",
                    method: "post",
                    data: t
                })
            }

            function m(t) {
                return Object(n["a"])({
                    url: "/api/input/mapping_list",
                    method: "post",
                    data: t
                })
            }

            function v(t) {
                return Object(n["a"])({
                    url: "/api/input/mapping_store",
                    method: "post",
                    data: t
                })
            }

            function b(t) {
                return Object(n["a"])({
                    url: "/api/product/model_color_picture_urls",
                    method: "get",
                    params: t
                })
            }

            function g(t) {
                return Object(n["a"])({
                    url: "/api/input/submit_edit_params_all",
                    method: "post",
                    data: t
                })
            }

            function y(t) {
                return Object(n["a"])({
                    url: "/api/input/change_purchase_order_detail_imei",
                    method: "post",
                    data: t
                })
            }

            function w(t) {
                return Object(n["a"])({
                    url: "/api/input/get_business_line",
                    method: "get",
                    params: t
                })
            }

            function k(t) {
                return Object(n["a"])({
                    url: "/api/input/abnormal_report_c2c",
                    method: "post",
                    data: t
                })
            }
        },
        b4bd: function(t, e, r) {},
        c0f9: function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return i
            })), r.d(e, "a", (function() {
                return a
            })), r.d(e, "f", (function() {
                return o
            })), r.d(e, "d", (function() {
                return s
            })), r.d(e, "g", (function() {
                return c
            })), r.d(e, "i", (function() {
                return u
            })), r.d(e, "h", (function() {
                return l
            })), r.d(e, "j", (function() {
                return d
            })), r.d(e, "e", (function() {
                return p
            })), r.d(e, "c", (function() {
                return h
            }));
            var n = r("b775");

            function i(t) {
                return Object(n["a"])({
                    url: "/api/error_reports",
                    method: "get",
                    params: t
                })
            }

            function a(t) {
                return Object(n["a"])({
                    url: "/api/error_report/can_report_error_types",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/error_report/store",
                    method: "post",
                    data: t
                })
            }

            function s(t) {
                return Object(n["a"])({
                    url: "/api/error_report/destroy",
                    method: "post",
                    data: t
                })
            }

            function c(t) {
                return Object(n["a"])({
                    url: "/api/check/error_report",
                    method: "post",
                    data: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "/api/re_check/error_report",
                    method: "post",
                    data: t
                })
            }

            function l(t) {
                return Object(n["a"])({
                    url: "/api/edit/error_report",
                    method: "post",
                    data: t
                })
            }

            function d(t) {
                return Object(n["a"])({
                    url: "/api/up_shift/error_report",
                    method: "post",
                    data: t
                })
            }

            function p(t) {
                return Object(n["a"])({
                    url: "/api/error_report/force_destroy",
                    method: "post",
                    data: t
                })
            }

            function h(t) {
                return Object(n["a"])({
                    url: "/api/option/select",
                    method: "get",
                    params: t
                })
            }
        }
    }
]);