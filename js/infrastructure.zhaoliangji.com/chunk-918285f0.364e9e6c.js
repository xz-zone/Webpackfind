(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-918285f0"], {
        2934: function(t, e, a) {
            "use strict";
            a.d(e, "p", (function() {
                return i
            })), a.d(e, "d", (function() {
                return r
            })), a.d(e, "i", (function() {
                return o
            })), a.d(e, "m", (function() {
                return s
            })), a.d(e, "b", (function() {
                return c
            })), a.d(e, "g", (function() {
                return l
            })), a.d(e, "k", (function() {
                return u
            })), a.d(e, "j", (function() {
                return p
            })), a.d(e, "h", (function() {
                return d
            })), a.d(e, "n", (function() {
                return h
            })), a.d(e, "a", (function() {
                return f
            })), a.d(e, "l", (function() {
                return _
            })), a.d(e, "q", (function() {
                return v
            })), a.d(e, "f", (function() {
                return m
            })), a.d(e, "o", (function() {
                return g
            })), a.d(e, "c", (function() {
                return b
            })), a.d(e, "e", (function() {
                return y
            }));
            var n = a("b775");

            function i(t) {
                return Object(n["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: t
                })
            }

            function r(t) {
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

            function l(t) {
                return Object(n["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(n["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
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

            function v(t) {
                return Object(n["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: t
                })
            }

            function m(t) {
                return Object(n["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: t
                })
            }

            function g(t) {
                return Object(n["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: t
                })
            }

            function b(t) {
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
        "64a1": function(t, e, a) {
            "use strict";
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("span", [a("transition", {
                        attrs: {
                            name: t.transition
                        },
                        on: {
                            "after-enter": t.handleAfterEnter,
                            "after-leave": t.handleAfterLeave
                        }
                    }, [a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.disabled && t.showPopper,
                            expression: "!disabled && showPopper"
                        }],
                        ref: "popper",
                        staticClass: "el-popover el-popper",
                        class: [t.popperClass, t.content && "el-popover--plain"],
                        style: {
                            width: t.width + "px"
                        },
                        attrs: {
                            role: "tooltip",
                            id: t.tooltipId,
                            "aria-hidden": t.disabled || !t.showPopper ? "true" : "false"
                        }
                    }, [t.title ? a("div", {
                        staticClass: "el-popover__title",
                        domProps: {
                            textContent: t._s(t.title)
                        }
                    }) : t._e(), t._v(" "), t._t("default", [t._v(t._s(t.content))])], 2)]), t._v(" "), t._t("reference")], 2)
                },
                i = [],
                r = a("3050"),
                o = a("23cb"),
                s = a("33d8"),
                c = {
                    name: "ElPopover",
                    mixins: [r["a"]],
                    props: {
                        trigger: {
                            type: String,
                            default: "click",
                            validator: function(t) {
                                return ["click", "focus", "hover", "manual"].indexOf(t) > -1
                            }
                        },
                        openDelay: {
                            type: Number,
                            default: 0
                        },
                        closeDelay: {
                            type: Number,
                            default: 200
                        },
                        title: String,
                        disabled: Boolean,
                        content: String,
                        reference: {},
                        popperClass: String,
                        width: {},
                        visibleArrow: {
                            default: !0
                        },
                        arrowOffset: {
                            type: Number,
                            default: 0
                        },
                        transition: {
                            type: String,
                            default: "fade-in-linear"
                        },
                        tabindex: {
                            type: Number,
                            default: 0
                        }
                    },
                    computed: {
                        tooltipId: function() {
                            return "el-popover-".concat(Object(s["b"])())
                        }
                    },
                    watch: {
                        showPopper: function(t) {
                            this.disabled || (t ? this.$emit("show") : this.$emit("hide"))
                        }
                    },
                    mounted: function() {
                        var t = this,
                            e = this.referenceElm = this.reference || this.$refs.reference,
                            a = this.popper || this.$refs.popper;
                        !e && this.$slots.reference && this.$slots.reference[0] && (e = this.referenceElm = this.$slots.reference[0].elm), e && (Object(o["a"])(e, "el-popover__reference"), e.setAttribute("aria-describedby", this.tooltipId), e.setAttribute("tabindex", this.tabindex), a.setAttribute("tabindex", 0), "click" !== this.trigger && (Object(o["e"])(e, "focusin", (function() {
                            t.handleFocus();
                            var a = e.__vue__;
                            a && "function" === typeof a.focus && a.focus()
                        })), Object(o["e"])(a, "focusin", this.handleFocus), Object(o["e"])(e, "focusout", this.handleBlur), Object(o["e"])(a, "focusout", this.handleBlur)), Object(o["e"])(e, "keydown", this.handleKeydown), Object(o["e"])(e, "click", this.handleClick)), "click" === this.trigger ? (Object(o["e"])(e, "click", this.doToggle), Object(o["e"])(document, "click", this.handleDocumentClick)) : "hover" === this.trigger ? (console.log("自定义了。。。"), Object(o["e"])(e, "mouseenter", this.handleMouseEnter), Object(o["e"])(e, "mouseleave", this.handleMouseLeave)) : "focus" === this.trigger && (this.tabindex < 0 && console.warn("[Element Warn][Popover]a negative taindex means that the element cannot be focused by tab key"), e.querySelector("input, textarea") ? (Object(o["e"])(e, "focusin", this.doShow), Object(o["e"])(e, "focusout", this.doClose)) : (Object(o["e"])(e, "mousedown", this.doShow), Object(o["e"])(e, "mouseup", this.doClose)))
                    },
                    beforeDestroy: function() {
                        this.cleanup()
                    },
                    deactivated: function() {
                        this.cleanup()
                    },
                    methods: {
                        doToggle: function() {
                            this.showPopper = !this.showPopper
                        },
                        doShow: function() {
                            this.showPopper = !0
                        },
                        doClose: function() {
                            this.showPopper = !1
                        },
                        handleFocus: function() {
                            Object(o["a"])(this.referenceElm, "focusing"), "click" !== this.trigger && "focus" !== this.trigger || (this.showPopper = !0)
                        },
                        handleClick: function() {
                            Object(o["f"])(this.referenceElm, "focusing")
                        },
                        handleBlur: function() {
                            Object(o["f"])(this.referenceElm, "focusing"), "click" !== this.trigger && "focus" !== this.trigger || (this.showPopper = !1)
                        },
                        handleMouseEnter: function() {
                            var t = this;
                            clearTimeout(this._timer), this.openDelay ? this._timer = setTimeout((function() {
                                t.showPopper = !0
                            }), this.openDelay) : this.showPopper = !0
                        },
                        handleKeydown: function(t) {
                            27 === t.keyCode && "manual" !== this.trigger && this.doClose()
                        },
                        handleMouseLeave: function() {
                            var t = this;
                            clearTimeout(this._timer), this.closeDelay ? this._timer = setTimeout((function() {
                                t.showPopper = !1
                            }), this.closeDelay) : this.showPopper = !1
                        },
                        handleDocumentClick: function(t) {
                            var e = this.reference || this.$refs.reference,
                                a = this.popper || this.$refs.popper;
                            !e && this.$slots.reference && this.$slots.reference[0] && (e = this.referenceElm = this.$slots.reference[0].elm), this.$el && e && !this.$el.contains(t.target) && !e.contains(t.target) && a && !a.contains(t.target) && (this.showPopper = !1)
                        },
                        handleAfterEnter: function() {
                            this.$emit("after-enter")
                        },
                        handleAfterLeave: function() {
                            this.$emit("after-leave"), this.doDestroy()
                        },
                        cleanup: function() {
                            (this.openDelay || this.closeDelay) && clearTimeout(this._timer)
                        }
                    },
                    destroyed: function() {
                        var t = this.reference;
                        Object(o["d"])(t, "click", this.doToggle), Object(o["d"])(t, "mouseup", this.doClose), Object(o["d"])(t, "mousedown", this.doShow), Object(o["d"])(t, "focusin", this.doShow), Object(o["d"])(t, "focusout", this.doClose), Object(o["d"])(t, "mousedown", this.doShow), Object(o["d"])(t, "mouseup", this.doClose), Object(o["d"])(t, "mouseleave", this.handleMouseLeave), Object(o["d"])(t, "mouseenter", this.handleMouseEnter), Object(o["d"])(document, "click", this.handleDocumentClick)
                    }
                },
                l = c,
                u = a("5d22"),
                p = Object(u["a"])(l, n, i, !1, null, null, null),
                d = p.exports,
                h = function(t, e, a) {
                    var n = e.expression ? e.value : e.arg,
                        i = a.context.$refs[n];
                    i && (Array.isArray(i) ? i[0].$refs.reference = t : i.$refs.reference = t)
                },
                f = {
                    bind: function(t, e, a) {
                        h(t, e, a)
                    },
                    inserted: function(t, e, a) {
                        h(t, e, a)
                    }
                },
                _ = a("6e6d");
            _["default"].directive("popover", f), d.directive = f;
            e["a"] = d
        },
        "816f": function(t, e, a) {
            "use strict";
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", [a("el-select", {
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
                        return a("el-option-group", {
                            key: e.id,
                            attrs: {
                                label: e.name
                            }
                        }, t._l(e.items, (function(e, n) {
                            return a("zlj-option", {
                                key: n,
                                attrs: {
                                    label: e.name,
                                    value: e.id
                                }
                            }, [a("div", {
                                staticStyle: {
                                    float: "left",
                                    "margin-right": "30px"
                                }
                            }, [t._v(t._s(e.name))]), t._v(" "), a("div", {
                                staticStyle: {
                                    float: "right"
                                }
                            })])
                        })), 1)
                    })), 1)], 1)
                },
                i = [],
                r = a("4838"),
                o = a.n(r),
                s = (a("98de"), function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("li", {
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
                    }, [a("div", {
                        staticStyle: {
                            float: "right"
                        }
                    }, [a("el-switch", {
                        attrs: {
                            value: t.itemSelected,
                            "active-color": "#13ce66",
                            "inactive-color": "#ff4949"
                        }
                    }), t._v(" "), a("span", {
                        class: {
                            "color-success": t.itemSelected, "color-danger": !t.itemSelected
                        }
                    }, [t._v(t._s(t.itemSelected ? "正常" : "异常"))])], 1), t._v(" "), t._t("default", [a("span", [t._v(t._s(t.currentLabel))])])], 2)
                }),
                c = [],
                l = a("3046"),
                u = a("33d8");

            function p(t) {
                return p = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, p(t)
            }
            var d = {
                    mixins: [l["a"]],
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
                            var a = this.select,
                                n = a.remote,
                                i = a.valueKey;
                            if (!this.created && !n) {
                                if (i && "object" === p(t) && "object" === p(e) && t[i] === e[i]) return;
                                this.dispatch("ElSelect", "setSelected")
                            }
                        }
                    },
                    methods: {
                        isEqual: function(t, e) {
                            if (this.isObject) {
                                var a = this.select.valueKey;
                                return Object(u["c"])(t, a) === Object(u["c"])(e, a)
                            }
                            return t === e
                        },
                        contains: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                e = arguments.length > 1 ? arguments[1] : void 0;
                            if (this.isObject) {
                                var a = this.select.valueKey;
                                return t && t.some((function(t) {
                                    return Object(u["c"])(t, a) === Object(u["c"])(e, a)
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
                            this.visible = new RegExp(Object(u["a"])(t), "i").test(this.currentLabel) || this.created, this.visible || this.select.filteredOptionsCount--
                        }
                    },
                    created: function() {
                        this.select.options.push(this), this.select.cachedOptions.push(this), this.select.optionsCount++, this.select.filteredOptionsCount++, this.$on("queryChange", this.queryChange), this.$on("handleGroupDisabled", this.handleGroupDisabled)
                    },
                    beforeDestroy: function() {
                        this.select.onOptionDestroy(this.select.options.indexOf(this))
                    }
                },
                h = d,
                f = a("5d22"),
                _ = Object(f["a"])(h, s, c, !1, null, null, null),
                v = _.exports,
                m = v,
                g = a("2934");

            function b(t, e) {
                var a;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (a = y(t)) || e && t && "number" === typeof t.length) {
                        a && (t = a);
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
                var r, o = !0,
                    s = !1;
                return {
                    s: function() {
                        a = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = a.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, r = t
                    },
                    f: function() {
                        try {
                            o || null == a.return || a.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                }
            }

            function y(t, e) {
                if (t) {
                    if ("string" === typeof t) return D(t, e);
                    var a = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? D(t, e) : void 0
                }
            }

            function D(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, n = new Array(e); a < e; a++) n[a] = t[a];
                return n
            }

            function w(t, e, a, n, i, r, o) {
                try {
                    var s = t[r](o),
                        c = s.value
                } catch (l) {
                    return void a(l)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, i)
            }

            function x(t) {
                return function() {
                    var e = this,
                        a = arguments;
                    return new Promise((function(n, i) {
                        var r = t.apply(e, a);

                        function o(t) {
                            w(r, n, i, o, s, "next", t)
                        }

                        function s(t) {
                            w(r, n, i, o, s, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            var k = {
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
                        ZljOption: m
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
                            var t = x(o.a.mark((function t(e) {
                                var a, n;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(g["f"])({
                                                model_ids: e || this.modelIds
                                            });
                                        case 3:
                                            a = t.sent, this.dict.check_items = a.data[0].rows.quality_inspection ? a.data[0].rows.quality_inspection : [], n = [], a.data[0].rows.package && (n = a.data[0].rows.package.map((function(t) {
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
                            var e, a = [],
                                n = b(this.dict.check_items);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var i, r = e.value,
                                        o = {
                                            id: r.id,
                                            items: []
                                        },
                                        s = b(r.items);
                                    try {
                                        for (s.s(); !(i = s.n()).done;) {
                                            var c = i.value,
                                                l = t.indexOf(c.id) > -1;
                                            o.items.push({
                                                id: c.id,
                                                result: l ? 1 : 0
                                            })
                                        }
                                    } catch (u) {
                                        s.e(u)
                                    } finally {
                                        s.f()
                                    }
                                    a.push(o)
                                }
                            } catch (u) {
                                n.e(u)
                            } finally {
                                n.f()
                            }
                            console.log(a), this.$emit("input", a), this.$emit("change", a)
                        },
                        getResArr: function(t) {
                            var e, a = [],
                                n = b(this.dict.check_items);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var i, r = e.value,
                                        o = b(r.items);
                                    try {
                                        for (o.s(); !(i = o.n()).done;) {
                                            var s = i.value;
                                            this.checkErrRes(s.id, t) || a.push(s.id + "")
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
                            return a
                        },
                        checkErrRes: function(t, e) {
                            var a, n = b(e);
                            try {
                                for (n.s(); !(a = n.n()).done;) {
                                    var i, r = a.value,
                                        o = b(r.items);
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
                            var t, e = b(this.dict.check_items);
                            try {
                                for (e.s(); !(t = e.n()).done;) {
                                    var a, n = t.value,
                                        i = b(n.items);
                                    try {
                                        for (i.s(); !(a = i.n()).done;) {
                                            var r = a.value;
                                            this.check_type_ids.push(r.id)
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
                            var e, a = b(this.dict.check_items);
                            try {
                                for (a.s(); !(e = a.n()).done;) {
                                    var n, i = e.value,
                                        r = b(i.items);
                                    try {
                                        for (r.s(); !(n = r.n()).done;) {
                                            var o = n.value;
                                            if (o.id == t) return !0
                                        }
                                    } catch (s) {
                                        r.e(s)
                                    } finally {
                                        r.f()
                                    }
                                }
                            } catch (s) {
                                a.e(s)
                            } finally {
                                a.f()
                            }
                            return !1
                        }
                    }
                },
                O = k,
                j = Object(f["a"])(O, n, i, !1, null, "06cc1e96", null);
            e["a"] = j.exports
        },
        8346: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return i
            })), a.d(e, "b", (function() {
                return r
            }));
            var n = a("b775");

            function i(t) {
                return Object(n["a"])({
                    url: "/api/edit/abnormal_report_scan_tag",
                    method: "get",
                    params: t
                })
            }

            function r(t) {
                return Object(n["a"])({
                    url: "/api/edit/abnormal_report",
                    method: "post",
                    data: t
                })
            }
        },
        "98de": function(t, e, a) {
            "use strict";
            a.d(e, "f", (function() {
                return i
            })), a.d(e, "k", (function() {
                return r
            })), a.d(e, "a", (function() {
                return o
            })), a.d(e, "b", (function() {
                return s
            })), a.d(e, "e", (function() {
                return c
            })), a.d(e, "c", (function() {
                return l
            })), a.d(e, "d", (function() {
                return u
            })), a.d(e, "j", (function() {
                return p
            })), a.d(e, "i", (function() {
                return d
            })), a.d(e, "h", (function() {
                return h
            })), a.d(e, "g", (function() {
                return f
            }));
            var n = a("b775");

            function i(t) {
                return Object(n["a"])({
                    url: "/api/check/scan_info",
                    method: "get",
                    params: t
                })
            }

            function r(t) {
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

            function l(t) {
                return Object(n["a"])({
                    url: "/api/check/edit_check",
                    method: "post",
                    data: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "/api/check_error_types",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(n["a"])({
                    url: "api/check/scan_receive_for_imei",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
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
        a5fc: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: t.loading,
                            expression: "loading"
                        }],
                        staticClass: "app-container"
                    }, [t.pageData ? a("div", {
                        staticClass: "detail-table body-list"
                    }, [t._l(t.errorList, (function(e, n) {
                        return a("el-alert", {
                            key: "errorList" + n,
                            staticStyle: {
                                "margin-bottom": "3px"
                            },
                            attrs: {
                                type: "error",
                                "close-text": "已修改"
                            },
                            on: {
                                close: function(a) {
                                    return t.closeError(e.id)
                                }
                            }
                        }, [t._v("\n        【\n        "), e.report_user ? a("span", [t._v(t._s(e.report_user.real_name))]) : t._e(), t._v("\n        】上报问题【" + t._s(e.error_type.name) + "】，请编辑及时修改！\n      ")])
                    })), t._v(" "), a("div", {}, [a("div", {
                        staticClass: "title"
                    }, [t._v("基础信息")]), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("类目:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "请选择"
                        },
                        on: {
                            change: function(e) {
                                return t.handleChangeType(t.pageData.type_id)
                            }
                        },
                        model: {
                            value: t.pageData.type_id,
                            callback: function(e) {
                                t.$set(t.pageData, "type_id", e)
                            },
                            expression: "pageData.type_id"
                        }
                    }, t._l(t.pageData.types, (function(t, e) {
                        return a("el-option", {
                            key: "类目" + e,
                            attrs: {
                                label: t.type_name,
                                value: t.type_id
                            }
                        })
                    })), 1)], 1)], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("品牌:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "请选择"
                        },
                        on: {
                            change: function(e) {
                                return t.handleChangeBrand(t.pageData.brand_id)
                            }
                        },
                        model: {
                            value: t.pageData.brand_id,
                            callback: function(e) {
                                t.$set(t.pageData, "brand_id", e)
                            },
                            expression: "pageData.brand_id"
                        }
                    }, t._l(t.pageData.brands, (function(t, e) {
                        return a("el-option", {
                            key: "品牌" + e,
                            attrs: {
                                label: t.brand_name,
                                value: t.brand_id
                            }
                        })
                    })), 1)], 1)], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("商品名称:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("el-input", {
                        attrs: {
                            placeholder: "请输入内容",
                            clearable: ""
                        },
                        model: {
                            value: t.pageData.product_name,
                            callback: function(e) {
                                t.$set(t.pageData, "product_name", e)
                            },
                            expression: "pageData.product_name"
                        }
                    })], 1)], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("IMEI:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [t._v("\n            " + t._s(t.pageData.imei) + "\n            ")])], 1), t._v(" "), 6 == t.pageData.brand_id ? a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("序列号:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("el-input", {
                        attrs: {
                            maxlength: "13",
                            placeholder: "请输入内容",
                            clearable: ""
                        },
                        model: {
                            value: t.pageData.sn,
                            callback: function(e) {
                                t.$set(t.pageData, "sn", e)
                            },
                            expression: "pageData.sn"
                        }
                    })], 1)], 1) : t._e(), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("业务类型:")]), t._v(" "), a("el-col", {
                        staticClass: "status",
                        attrs: {
                            span: 20
                        }
                    }, [a("span", [t._v(t._s(t.pageData.business_type_description))])])], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("是否清理摄像头:")]), t._v(" "), a("el-col", {
                        staticClass: "status",
                        attrs: {
                            span: 20
                        }
                    }, [a("span", [t._v("\n              " + t._s(0 == t.pageData.is_clean_camera ? "正常" : 1 == t.pageData.is_clean_camera ? "清理" : "") + "\n            ")])])], 1), t._v(" "), 1 != t.pageData.business_line ? a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("质检师有话说:")]), t._v(" "), a("el-col", {
                        staticClass: "status",
                        attrs: {
                            span: 20
                        }
                    }, [a("span", [t._v(t._s(t.pageData.quality_talk))])])], 1) : t._e(), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("简介模板:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "请选择"
                        },
                        on: {
                            change: function(e) {
                                return t.handleChangeSelect(t.selectVal.temp)
                            }
                        },
                        model: {
                            value: t.selectVal.temp,
                            callback: function(e) {
                                t.$set(t.selectVal, "temp", e)
                            },
                            expression: "selectVal.temp"
                        }
                    }, t._l(t.arrDataAll.templates, (function(t, e) {
                        return a("el-option", {
                            key: "简介模板" + e,
                            attrs: {
                                label: t.title,
                                value: t.b_id
                            }
                        })
                    })), 1)], 1)], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("简介:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("el-input", {
                        staticClass: "textarea",
                        attrs: {
                            type: "textarea",
                            placeholder: "请输入内容",
                            rows: "5"
                        },
                        model: {
                            value: t.selectVal.textarea,
                            callback: function(e) {
                                t.$set(t.selectVal, "textarea", e)
                            },
                            expression: "selectVal.textarea"
                        }
                    }), t._v(" "), a("el-tag", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !1,
                            expression: "false"
                        }],
                        staticStyle: {
                            width: "100%",
                            "font-size": "15px"
                        },
                        attrs: {
                            type: "danger"
                        }
                    }, [t._v(t._s(t.selectVal.textarea.replace("，，", "，" + t.defectMsg + "，")))])], 1)], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("问题备注:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("div", {
                        staticClass: "remark"
                    }, [a("span", [t._v("质检备注:")]), t._v(" "), t.pageData.crawler_result ? a("span", [t._v("\n                【" + t._s("" == t.pageData.crawler_result.quality_remark ? "无" : t.pageData.crawler_result.quality_remark) + "】\n              ")]) : t._e(), t._v(" "), t.pageData.crawler_result && 1 == t.pageData.crawler_result.is_cmcc_custom ? a("span", [t._v("|| 移动定制版")]) : t._e(), t._v(" "), a("br"), t._v(" "), a("span", [t._v("\n                补充备注：" + t._s("" == t.pageData.remark ? "无" : t.pageData.remark) + "\n              ")])])])], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("是否激活:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("el-radio-group", {
                        model: {
                            value: t.pageData.is_activation,
                            callback: function(e) {
                                t.$set(t.pageData, "is_activation", e)
                            },
                            expression: "pageData.is_activation"
                        }
                    }, [a("el-radio", {
                        attrs: {
                            label: 1
                        }
                    }, [t._v("已激活")]), t._v(" "), a("el-radio", {
                        attrs: {
                            label: 2
                        }
                    }, [t._v("未激活")])], 1)], 1)], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("手机外观:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, t._l(t.dict.position, (function(e, n) {
                        return a("el-popover", {
                            staticStyle: {
                                "text-align": "center"
                            },
                            attrs: {
                                placement: "bottom",
                                trigger: "click"
                            },
                            model: {
                                value: e.pop_flag,
                                callback: function(a) {
                                    t.$set(e, "pop_flag", a)
                                },
                                expression: "item.pop_flag"
                            }
                        }, [t._l(t.dict.point, (function(e, i) {
                            return a("div", [a("b", [t._v(t._s(e.name) + "：")]), t._v(" "), a("el-radio-group", {
                                attrs: {
                                    size: "mini"
                                },
                                on: {
                                    change: function(e) {
                                        return t.chooseRadio(n, i)
                                    }
                                },
                                model: {
                                    value: t.attr[n][i],
                                    callback: function(e) {
                                        t.$set(t.attr[n], i, e)
                                    },
                                    expression: "attr[index][index_p]"
                                }
                            }, t._l(t.dict.extent, (function(t, e) {
                                return a("el-radio-button", {
                                    attrs: {
                                        label: t.name
                                    }
                                })
                            })), 1)], 1)
                        })), t._v(" "), a("el-button", {
                            staticStyle: {
                                "margin-top": "10px",
                                "margin-left": "70px"
                            },
                            attrs: {
                                size: "small",
                                icon: "el-icon-delete",
                                type: "danger",
                                plain: ""
                            },
                            on: {
                                click: function(e) {
                                    return t.clearRadio(n)
                                }
                            }
                        }, [t._v("清空")]), t._v(" "), e.btn_flag ? a("el-button", {
                            attrs: {
                                slot: "reference",
                                type: "primary"
                            },
                            slot: "reference"
                        }, [t._v("\n                " + t._s(e.name) + "\n              ")]) : a("el-button", {
                            attrs: {
                                slot: "reference"
                            },
                            slot: "reference"
                        }, [t._v("\n                " + t._s(e.name) + "\n              ")])], 2)
                    })), 1)], 1), t._v(" "), a("el-row", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.tag_arr.length,
                            expression: "tag_arr.length"
                        }]
                    }, [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("手机外观选中预览：")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, t._l(t.tag_arr, (function(e, n) {
                        return a("el-tag", {
                            key: "手机外观选中" + n,
                            staticStyle: {
                                "margin-right": "5px"
                            }
                        }, [t._v(t._s(e))])
                    })), 1)], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("激活时间:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("el-input", {
                        staticClass: "input-width",
                        attrs: {
                            placeholder: "激活时间",
                            clearable: ""
                        },
                        model: {
                            value: t.pageData.activation_time,
                            callback: function(e) {
                                t.$set(t.pageData, "activation_time", e)
                            },
                            expression: "pageData.activation_time"
                        }
                    })], 1)], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("官方保修:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("el-input", {
                        staticClass: "input-width",
                        attrs: {
                            placeholder: "官方保修",
                            clearable: ""
                        },
                        model: {
                            value: t.pageData.guarantee_time,
                            callback: function(e) {
                                t.$set(t.pageData, "guarantee_time", e)
                            },
                            expression: "pageData.guarantee_time"
                        }
                    })], 1)], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("商品标签:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("el-select", {
                        attrs: {
                            placeholder: "请选择标签",
                            clearable: "",
                            filterable: "",
                            multiple: ""
                        },
                        on: {
                            change: t.getPricRules
                        },
                        model: {
                            value: t.pageData.tags,
                            callback: function(e) {
                                t.$set(t.pageData, "tags", e)
                            },
                            expression: "pageData.tags"
                        }
                    }, t._l(t.dict.labels, (function(t, e) {
                        return a("el-option", {
                            key: "商品标签" + e,
                            attrs: {
                                label: t,
                                value: Number(e)
                            }
                        })
                    })), 1)], 1)], 1), t._v(" "), 1 == t.pageData.warehouse.is_sale_put ? a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("售后描述问题:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("div", {
                        staticClass: "remark"
                    }, [a("span", [t._v(t._s(t.pageData.after_sale_desc_problem))])])])], 1) : t._e(), t._v(" "), 1 == t.pageData.type_id ? a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("质检等级:")]), t._v(" "), a("el-col", {
                        staticClass: "status",
                        attrs: {
                            span: 20
                        }
                    }, [a("span", [t._v(t._s(1 == t.pageData.qc_level ? "优品" : 2 == t.pageData.qc_level ? "优良品" : "良品"))])])], 1) : t._e(), t._v(" "), 1 == t.pageData.type_id ? a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("基础功能:")]), t._v(" "), a("el-col", {
                        staticClass: "status",
                        attrs: {
                            span: 20
                        }
                    }, [a("span", [t._v(t._s(1 == t.pageData.qc_level ? "功能完好" : "功能缺陷"))])])], 1) : t._e(), t._v(" "), 1 != t.pageData.business_line ? a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("ZZ-颜色:")]), t._v(" "), a("el-col", {
                        staticClass: "status",
                        attrs: {
                            span: 20
                        }
                    }, [a("el-select", {
                        model: {
                            value: t.pageData.crawler_result.zz_color_id,
                            callback: function(e) {
                                t.$set(t.pageData.crawler_result, "zz_color_id", e)
                            },
                            expression: "pageData.crawler_result.zz_color_id"
                        }
                    }, t._l(t.zz_colors, (function(t) {
                        return a("el-option", {
                            key: t.id,
                            attrs: {
                                label: t.name,
                                value: t.id
                            }
                        })
                    })), 1), t._v("\n\t\t\t    \n\t\t\t  "), a("el-button", {
                        attrs: {
                            type: "success"
                        },
                        on: {
                            click: t.handleZzColor
                        }
                    }, [t._v("点击保存")]), t._v("\n\t\t\t    \n\t\t\t  "), a("span", {
                        staticStyle: {
                            color: "#999"
                        }
                    }, [t._v("(提示：当前点击保存生效，否则无效)")])], 1)], 1) : t._e(), t._v(" "), a("div", {
                        staticClass: "title"
                    }, [t._v("商品状况")]), t._v(" "), t._l(t.pageData.goods_conditions, (function(e, n) {
                        return a("el-row", {
                            key: "商品状况" + n,
                            attrs: {
                                span: 24
                            }
                        }, [a("el-col", {
                            attrs: {
                                span: 4
                            }
                        }, [t._v(t._s(e.pn_name))]), t._v(" "), 1 == e.pn_type ? a("el-col", {
                            attrs: {
                                span: 20
                            }
                        }, [a("el-select", {
                            attrs: {
                                placeholder: "请选择" + e.pn_name,
                                filterable: "",
                                clearable: ""
                            },
                            on: {
                                change: function(a) {
                                    return t.handleChange(e)
                                }
                            },
                            model: {
                                value: e.goodsValue,
                                callback: function(a) {
                                    t.$set(e, "goodsValue", a)
                                },
                                expression: "item.goodsValue"
                            }
                        }, t._l(e.list, (function(t, n) {
                            return a("el-option", {
                                key: e.pn_name + n,
                                attrs: {
                                    label: t.pv_name,
                                    value: t.pvid
                                }
                            })
                        })), 1)], 1) : t._e(), t._v(" "), 2 == e.pn_type ? a("el-col", {
                            staticClass: "detail-col-12",
                            attrs: {
                                span: 18
                            }
                        }, [a("el-input", {
                            staticStyle: {
                                width: "200px"
                            },
                            attrs: {
                                placeholder: "请输入" + e.pn_name
                            },
                            on: {
                                change: function(a) {
                                    return t.handleChange(e)
                                }
                            },
                            model: {
                                value: e.inputVal,
                                callback: function(a) {
                                    t.$set(e, "inputVal", a)
                                },
                                expression: "item.inputVal"
                            }
                        })], 1) : t._e()], 1)
                    })), t._v(" "), a("el-row", [a("el-col", {
                        staticClass: "detail-col-12",
                        attrs: {
                            span: 4
                        }
                    }, [t._v("质检项")]), t._v(" "), a("el-col", {
                        staticClass: "detail-col-12",
                        attrs: {
                            span: 20
                        }
                    }, [a("CheckItem", {
                        attrs: {
                            "model-ids": [t.pageData.model_id],
                            package: t.pageData.package
                        },
                        on: {
                            "update:package": function(e) {
                                return t.$set(t.pageData, "package", e)
                            }
                        },
                        model: {
                            value: t.pageData.quality_inspection,
                            callback: function(e) {
                                t.$set(t.pageData, "quality_inspection", e)
                            },
                            expression: "pageData.quality_inspection"
                        }
                    })], 1)], 1), t._v(" "), a("div", {
                        staticClass: "title"
                    }, [t._v("商品明细")]), t._v(" "), a("el-row", [a("el-col", {
                        staticClass: "detail-col-12",
                        attrs: {
                            span: 4
                        }
                    }, [t._v("型号")]), t._v(" "), a("el-col", {
                        staticClass: "detail-col-12",
                        attrs: {
                            span: 20
                        }
                    }, [a("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "请选择"
                        },
                        on: {
                            change: function(e) {
                                return t.getGoodsDetailData(t.pageData.model_id)
                            }
                        },
                        model: {
                            value: t.pageData.model_id,
                            callback: function(e) {
                                t.$set(t.pageData, "model_id", e)
                            },
                            expression: "pageData.model_id"
                        }
                    }, t._l(t.pageData.models, (function(t, e) {
                        return a("el-option", {
                            key: "型号" + e,
                            attrs: {
                                label: t.model_name,
                                value: t.model_id
                            }
                        })
                    })), 1)], 1)], 1), t._v(" "), t._l(t.arrDataAll.goodsDetail, (function(e, n) {
                        return a("el-row", {
                            key: e.pn_name + n + "pre"
                        }, [a("el-col", {
                            staticClass: "detail-col-12",
                            attrs: {
                                span: 4
                            }
                        }, [t._v(t._s(e.pn_name))]), t._v(" "), a("el-col", {
                            staticClass: "detail-col-12",
                            attrs: {
                                span: 20
                            }
                        }, [a("el-select", {
                            class: {
                                "danger-select": t.isDanger(e)
                            },
                            attrs: {
                                placeholder: "请选择" + e.pn_name,
                                filterable: "",
                                clearable: ""
                            },
                            on: {
                                change: function(a) {
                                    return t.getPricRules(e)
                                }
                            },
                            model: {
                                value: e.value,
                                callback: function(a) {
                                    t.$set(e, "value", a)
                                },
                                expression: "item.value"
                            }
                        }, t._l(e.list, (function(t, n) {
                            return a("el-option", {
                                key: e.pn_name + n,
                                attrs: {
                                    label: t.pvname,
                                    value: t.pvid
                                }
                            })
                        })), 1), t._v(" "), t.pageData.official_crawler && t.pageData.official_crawler.color_name && "颜色" == e.pn_name ? a("span", {
                            class: {
                                crawlerInfo: !0, danger: t.isDanger(e)
                            }
                        }, [t._v("爬虫结果：" + t._s(t.pageData.official_crawler.color_name))]) : t._e(), t._v(" "), t.pageData.official_crawler && t.pageData.official_crawler.memory_name && "内存" == e.pn_name ? a("span", {
                            class: {
                                crawlerInfo: !0, danger: t.isDanger(e)
                            }
                        }, [t._v("爬虫结果：" + t._s(t.pageData.official_crawler.memory_name))]) : t._e()], 1)], 1)
                    }))], 2), t._v(" "), a("div", {
                        staticClass: "goods-pic"
                    }, [a("div", {
                        staticClass: "title"
                    }, [t._v("商品图片")]), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("App商品主图片:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, t._l(t.pageData.model_images, (function(e, n) {
                        return a("div", {
                            key: "App商品主图片" + n,
                            staticClass: "model-box"
                        }, [a("div", {
                            staticClass: "model-img"
                        }, [a("el-popover", {
                            attrs: {
                                "close-delay": 0,
                                transition: "none",
                                placement: "top",
                                "visible-arrow": !1,
                                "popper-options": {
                                    boundariesElement: "body"
                                },
                                width: "425",
                                trigger: "hover"
                            }
                        }, [a("img", {
                            staticStyle: {
                                width: "500px"
                            },
                            attrs: {
                                src: e.image_url,
                                alt: ""
                            }
                        }), t._v(" "), a("div", {
                            attrs: {
                                slot: "reference"
                            },
                            slot: "reference"
                        }, [a("img", {
                            staticClass: "model-pic",
                            attrs: {
                                src: e.image_url,
                                alt: ""
                            }
                        })])]), t._v(" "), a("div", {
                            staticClass: "model-pic-name"
                        }, [t._v(t._s(e.name))])], 1)])
                    })), 0)], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("商品主图片:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, [a("div", {
                        staticClass: "main-pic"
                    }, [t.pageData.main_pic ? a("div", [a("el-popover", {
                        attrs: {
                            "close-delay": 0,
                            transition: "none",
                            placement: "right",
                            "visible-arrow": !1,
                            "popper-options": {
                                boundariesElement: "body"
                            },
                            width: "525",
                            trigger: "hover"
                        }
                    }, [a("img", {
                        staticClass: "avatar",
                        staticStyle: {
                            width: "500px"
                        },
                        attrs: {
                            src: t.pageData.main_pic
                        }
                    }), t._v(" "), a("div", {
                        attrs: {
                            slot: "reference"
                        },
                        slot: "reference"
                    }, [a("img", {
                        staticStyle: {
                            width: "146px"
                        },
                        attrs: {
                            src: t.pageData.main_pic,
                            alt: ""
                        }
                    })])])], 1) : a("div", {
                        staticClass: "is-main-pic"
                    })])])], 1), t._v(" "), 1 != t.pageData.business_line && t.pageData.product_fittings_images.length > 0 ? a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("配件图片:")]), t._v(" "), a("el-col", {
                        attrs: {
                            span: 20
                        }
                    }, t._l(t.pageData.product_fittings_images, (function(e, n) {
                        return a("div", {
                            key: "配件图片" + n,
                            staticClass: "model-box"
                        }, [a("div", {
                            staticClass: "model-img"
                        }, [a("el-popover", {
                            attrs: {
                                "close-delay": 0,
                                transition: "none",
                                placement: "top",
                                "visible-arrow": !1,
                                "popper-options": {
                                    boundariesElement: "body"
                                },
                                width: "425",
                                trigger: "hover"
                            }
                        }, [a("img", {
                            staticStyle: {
                                width: "500px"
                            },
                            attrs: {
                                src: e.image_url,
                                alt: ""
                            }
                        }), t._v(" "), a("div", {
                            attrs: {
                                slot: "reference"
                            },
                            slot: "reference"
                        }, [a("img", {
                            staticClass: "model-pic",
                            attrs: {
                                src: e.image_url,
                                alt: ""
                            }
                        })])])], 1)])
                    })), 0)], 1) : t._e(), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [a("div", [t._v("轮播图片:")])]), t._v(" "), a("el-col", {
                        staticClass: "upload",
                        attrs: {
                            span: 20
                        }
                    }, [a("transition-group", {
                        staticClass: "drog-move",
                        attrs: {
                            name: "drog",
                            tag: "ul"
                        }
                    }, t._l(t.fileList, (function(e, n) {
                        return a("li", {
                            key: "轮播图片" + n,
                            staticClass: "upload-image",
                            attrs: {
                                draggable: "true"
                            },
                            on: {
                                dragstart: function(e) {
                                    return t.dragStart(e, n)
                                },
                                dragover: t.allowDrop,
                                drop: function(e) {
                                    return t.drop(e, n)
                                },
                                click: function(a) {
                                    return t.handlePictureCardPreview(e, n)
                                },
                                hover: function(a) {
                                    return t.handlePictureHover(e)
                                }
                            }
                        }, [a("el-popover", {
                            attrs: {
                                "close-delay": 0,
                                transition: "none",
                                placement: "top",
                                "visible-arrow": !1,
                                "popper-options": {
                                    boundariesElement: "body"
                                },
                                width: "525",
                                trigger: "hover"
                            }
                        }, [a("img", {
                            staticStyle: {
                                width: "500px"
                            },
                            attrs: {
                                src: e.url,
                                alt: ""
                            }
                        }), t._v(" "), a("div", {
                            attrs: {
                                slot: "reference"
                            },
                            slot: "reference"
                        }, [a("img", {
                            staticClass: "image",
                            attrs: {
                                src: e.url,
                                alt: ""
                            }
                        })])]), t._v(" "), a("i", {
                            staticClass: "el-icon-close close",
                            on: {
                                click: function(e) {
                                    return t.handlePicRemove(n, e)
                                }
                            }
                        })], 1)
                    })), 0), t._v(" "), a("el-upload", {
                        attrs: {
                            multiple: !0,
                            action: "",
                            "http-request": t.getUploadPicture,
                            "list-type": "picture-card",
                            "show-file-list": !1,
                            "on-preview": t.handlePictureCardPreview
                        }
                    }, [a("i", {
                        staticClass: "el-icon-plus"
                    })]), t._v(" "), a("span", {
                        staticClass: "color-danger",
                        staticStyle: {
                            "font-size": "18px",
                            "font-weight": "600",
                            "line-height": "148px"
                        }
                    }, [t._v("\n              （共\n              " + t._s(t.fileList.length + (t.pageData.main_pic ? 1 : 0)) + " 张）\n            ")])], 1)], 1), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [a("div", [t._v("视频:")])]), t._v(" "), a("el-col", {
                        staticClass: "upload",
                        staticStyle: {
                            position: "relative"
                        },
                        attrs: {
                            span: 20
                        }
                    }, [t.pageData.video_url ? a("video", {
                        staticStyle: {
                            "margin-right": "10px"
                        },
                        attrs: {
                            src: t.pageData.video_url,
                            controls: "",
                            width: "146px"
                        }
                    }) : t._e(), t._v(" "), t.pageData.video_url ? a("i", {
                        staticClass: "el-icon-circle-close",
                        staticStyle: {
                            position: "absolute",
                            left: "130px",
                            top: "20px",
                            "font-size": "20px",
                            color: "white",
                            cursor: "pointer"
                        },
                        on: {
                            click: function(e) {
                                t.pageData.video_url = ""
                            }
                        }
                    }) : t._e(), t._v(" "), a("el-upload", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: t.video_upload_loading,
                            expression: "video_upload_loading"
                        }],
                        attrs: {
                            multiple: !1,
                            action: "",
                            accept: "video/*",
                            "http-request": t.getUploadVideo,
                            "list-type": "picture-card",
                            "show-file-list": !1
                        }
                    }, [a("i", {
                        staticClass: "el-icon-plus"
                    })])], 1)], 1)], 1), t._v(" "), 1 == t.pageData.business_line ? a("div", {
                        staticClass: "goods-price"
                    }, [a("div", {
                        staticClass: "title"
                    }, [t._v("商品价格")]), t._v(" "), a("el-row", [a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [t._v("商品售价:")]), t._v(" "), a("el-col", {
                        staticClass: "price-formula",
                        attrs: {
                            span: 20
                        }
                    }, [a("el-input", {
                        staticStyle: {
                            width: "200px"
                        },
                        attrs: {
                            placeholder: "请输入内容",
                            disabled: 0 == t.pageData.is_can_update_price
                        },
                        model: {
                            value: t.pageData.price,
                            callback: function(e) {
                                t.$set(t.pageData, "price", e)
                            },
                            expression: "pageData.price"
                        }
                    }), t._v(" "), a("div", {
                        staticClass: "price-info"
                    }, [a("div", [a("span", [t._v("(机器成本: " + t._s(t.pageData.product_cost.cost) + ")")]), t._v(" "), a("span", [t._v("\n                  (供应商: " + t._s(t.pageData.supplier.supplier_name) + "\n                  "), 1 == t.pageData.supplier.is_independent_pricing ? a("el-tag", {
                        attrs: {
                            type: "success",
                            size: "small"
                        }
                    }, [t._v("自主定价")]) : t._e(), t._v(")\n                ")], 1), t._v(" "), a("span", [t._v("\n                  " + t._s(t.pageData.supplier.is_independent_pricing_error) + "\n                ")])]), t._v(" "), a("div", {
                        staticClass: "valuation"
                    }, [t._v("计价公式: " + t._s(t.selectVal.priceRules))])])], 1)], 1)], 1) : t._e(), t._v(" "), "view" != t.view ? a("div", {
                        staticClass: "submit"
                    }, [a("el-button", {
                        attrs: {
                            loading: t.updateLoad,
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.eidtSubmit(0)
                            }
                        }
                    }, [t._v("编辑完成")]), t._v(" "), a("el-button", {
                        attrs: {
                            type: "danger",
                            disabled: !(!t.pageData.product_base || 1 != t.pageData.product_base.is_abnormal_report)
                        },
                        on: {
                            click: function(e) {
                                t.showExceptionDialog = !0
                            }
                        }
                    }, [t._v("登记异常")]), t._v(" "), "goods" != t.$route.query.source ? a("el-button", {
                        attrs: {
                            type: "danger"
                        },
                        on: {
                            click: function(e) {
                                t.showErrDialog = !0
                            }
                        }
                    }, [t._v("错误上报")]) : t._e()], 1) : t._e()], 2) : t._e(), t._v(" "), t.pageData ? a("ExceptionDialog", {
                        attrs: {
                            showDialog: t.showExceptionDialog
                        },
                        on: {
                            "update:showDialog": function(e) {
                                t.showExceptionDialog = e
                            },
                            "update:show-dialog": function(e) {
                                t.showExceptionDialog = e
                            },
                            done: t.handleRoute
                        },
                        model: {
                            value: t.pageData.imei,
                            callback: function(e) {
                                t.$set(t.pageData, "imei", e)
                            },
                            expression: "pageData.imei"
                        }
                    }) : t._e(), t._v(" "), t.pageData ? a("ErrorDialog", {
                        attrs: {
                            imei: t.pageData.imei,
                            "show-dialog": t.showErrDialog,
                            "node-id": 5
                        },
                        on: {
                            "update:imei": function(e) {
                                return t.$set(t.pageData, "imei", e)
                            },
                            "update:showDialog": function(e) {
                                t.showErrDialog = e
                            },
                            "update:show-dialog": function(e) {
                                t.showErrDialog = e
                            }
                        }
                    }) : t._e(), t._v(" "), a("Barcode", {
                        attrs: {
                            id: "barcode-container",
                            data: t.barcodeInfo
                        }
                    }), t._v(" "), a("el-button", {
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
                        ref: "print-barcode",
                        staticClass: "print",
                        attrs: {
                            type: "primary"
                        }
                    }, [t._v("打印")])], 1)
                },
                i = [],
                r = a("4838"),
                o = a.n(r),
                s = a("f4c4"),
                c = a("bbd1"),
                l = a("afe9"),
                u = (a("b8aa"), a("de26")),
                p = a("5f87"),
                d = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return t.productData ? a("el-dialog", {
                        staticClass: "exception-dialog",
                        attrs: {
                            title: "异常登记",
                            visible: t.showException,
                            width: "30%"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.showException = e
                            },
                            close: t.handleCloes
                        }
                    }, [a("el-form", {
                        attrs: {
                            model: t.exceptionForm,
                            "label-width": "150px"
                        }
                    }, [a("el-form-item", {
                        attrs: {
                            label: "类目品牌："
                        }
                    }, [t.productData.type ? a("div", [t._v(t._s(t.productData.type.name) + " " + t._s(t.productData.brand.name))]) : t._e()]), t._v(" "), a("el-form-item", {
                        attrs: {
                            label: "型号："
                        }
                    }, [t.productData.model ? a("div", [t._v(t._s(t.productData.model.name))]) : t._e()]), t._v(" "), a("el-form-item", {
                        attrs: {
                            label: "机器码："
                        }
                    }, [t._v(t._s(t.productData.imei))]), t._v(" "), a("el-form-item", {
                        attrs: {
                            label: "数量："
                        }
                    }, [t._v("1")]), t._v(" "), a("el-form-item", {
                        attrs: {
                            label: "成本："
                        }
                    }, [t.productData.product_cost ? a("div", [t._v(t._s(t.productData.product_cost.cost))]) : t._e()]), t._v(" "), a("el-form-item", {
                        attrs: {
                            label: "异常原因："
                        }
                    }, [a("ExceptionReason", {
                        attrs: {
                            mode: "edit"
                        },
                        model: {
                            value: t.exceptionForm.reason,
                            callback: function(e) {
                                t.$set(t.exceptionForm, "reason", e)
                            },
                            expression: "exceptionForm.reason"
                        }
                    })], 1), t._v(" "), a("el-form-item", {
                        attrs: {
                            label: "异常描述："
                        }
                    }, [a("el-input", {
                        attrs: {
                            type: "textarea",
                            rows: "4",
                            placeholder: "请输入异常描述"
                        },
                        model: {
                            value: t.exceptionForm.remark,
                            callback: function(e) {
                                t.$set(t.exceptionForm, "remark", e)
                            },
                            expression: "exceptionForm.remark"
                        }
                    })], 1)], 1), t._v(" "), a("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [a("el-button", {
                        on: {
                            click: function(e) {
                                return t.$emit("update:showDialog", !1)
                            }
                        }
                    }, [t._v("取 消")]), t._v(" "), a("el-button", {
                        attrs: {
                            disabled: t.addStatus,
                            loading: t.exceptionLoading,
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.addException()
                            }
                        }
                    }, [t._v("确定")]), t._v(" "), a("el-button", {
                        attrs: {
                            disabled: t.addStatus,
                            loading: t.exceptionLoading,
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.addException(1)
                            }
                        }
                    }, [t._v("确定并打印异常单号")])], 1), t._v(" "), a("Barcode", {
                        attrs: {
                            id: "barcode-container",
                            data: t.barcodeInfo,
                            line: 4
                        }
                    }), t._v(" "), a("el-button", {
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
                        ref: "printBtn"
                    })], 1) : t._e()
                },
                h = [],
                f = a("8346"),
                _ = a("c058"),
                v = a("6d8f");

            function m(t, e, a, n, i, r, o) {
                try {
                    var s = t[r](o),
                        c = s.value
                } catch (l) {
                    return void a(l)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, i)
            }

            function g(t) {
                return function() {
                    var e = this,
                        a = arguments;
                    return new Promise((function(n, i) {
                        var r = t.apply(e, a);

                        function o(t) {
                            m(r, n, i, o, s, "next", t)
                        }

                        function s(t) {
                            m(r, n, i, o, s, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            var b = {
                    name: "ExceptionDialog",
                    components: {
                        ExceptionReason: _["a"],
                        Barcode: v["a"]
                    },
                    props: {
                        value: [String],
                        showDialog: [Boolean]
                    },
                    data: function() {
                        return {
                            imei: this.value,
                            showException: this.showDialog,
                            productData: {},
                            order: {},
                            exceptionForm: {
                                reason: null,
                                remark: null
                            },
                            exceptionLoading: !1,
                            addStatus: !0,
                            barcodeInfo: []
                        }
                    },
                    watch: {
                        showDialog: function(t) {
                            this.showException = this.showDialog, t && this.imei && this.getProductByImei()
                        },
                        value: function(t) {
                            this.imei = t
                        }
                    },
                    mounted: function() {
                        console.log("imei：", this.imei), this.imei
                    },
                    methods: {
                        addException: function() {
                            var t = g(o.a.mark((function t(e) {
                                var a, n, i, r = this;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, a = {
                                                transfer_order_id: this.order.id,
                                                products: [{
                                                    product_id: this.productData.product_id,
                                                    type_id: this.productData.type_id,
                                                    brand_id: this.productData.brand_id,
                                                    model_id: this.productData.model_id,
                                                    cost_price: this.productData.product_cost.cost,
                                                    num: 1,
                                                    reason: this.exceptionForm.reason,
                                                    remark: this.exceptionForm.remark
                                                }]
                                            }, this.exceptionLoading = !0, t.next = 5, Object(f["b"])(a);
                                        case 5:
                                            n = t.sent, this.exceptionLoading = !1, this.$emit("update:showDialog", !1), this.$message.success("上报成功！"), e ? (i = {
                                                code: n.data.abnormal_report_order_no,
                                                title: "".concat(this.order.to_node.name, " 异常单（1台）<br/>").concat((new Date).toLocaleString(), "</br>").concat(this.productData.suppiler_name.name)
                                            }, this.barcodeInfo.push(i), setTimeout((function() {
                                                r.$refs["printBtn"].$el.click(), r.$emit("done", {})
                                            }), 500)) : this.$emit("done", {}), t.next = 16;
                                            break;
                                        case 12:
                                            t.prev = 12, t.t0 = t["catch"](0), console.log(t.t0), this.exceptionLoading = !1;
                                        case 16:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 12]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        getProductByImei: function() {
                            var t = g(o.a.mark((function t() {
                                var e, a;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e = this.$loading({
                                                target: ".exception-dialog"
                                            }), t.prev = 1, t.next = 4, Object(f["a"])({
                                                imei: this.imei
                                            });
                                        case 4:
                                            a = t.sent, e.close(), this.productData = a.data.detail, this.order = a.data.transfer_order, this.addStatus = !1, t.next = 15;
                                            break;
                                        case 11:
                                            t.prev = 11, t.t0 = t["catch"](1), e.close(), this.addStatus = !0;
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [1, 11]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        handleCloes: function() {
                            this.$emit("update:showDialog", !1)
                        }
                    }
                },
                y = b,
                D = a("5d22"),
                w = Object(D["a"])(y, d, h, !1, null, "170d453a", null),
                x = w.exports,
                k = a("c4a5"),
                O = a("816f"),
                j = a("2934"),
                C = a("64a1"),
                S = a("897d"),
                $ = a.n(S);

            function A(t) {
                return P(t) || V(t) || B(t) || E()
            }

            function E() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function V(t) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
            }

            function P(t) {
                if (Array.isArray(t)) return I(t)
            }

            function T(t, e) {
                var a;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (a = B(t)) || e && t && "number" === typeof t.length) {
                        a && (t = a);
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
                var r, o = !0,
                    s = !1;
                return {
                    s: function() {
                        a = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = a.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, r = t
                    },
                    f: function() {
                        try {
                            o || null == a.return || a.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                }
            }

            function B(t, e) {
                if (t) {
                    if ("string" === typeof t) return I(t, e);
                    var a = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? I(t, e) : void 0
                }
            }

            function I(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, n = new Array(e); a < e; a++) n[a] = t[a];
                return n
            }

            function L(t, e, a, n, i, r, o) {
                try {
                    var s = t[r](o),
                        c = s.value
                } catch (l) {
                    return void a(l)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, i)
            }

            function q(t) {
                return function() {
                    var e = this,
                        a = arguments;
                    return new Promise((function(n, i) {
                        var r = t.apply(e, a);

                        function o(t) {
                            L(r, n, i, o, s, "next", t)
                        }

                        function s(t) {
                            L(r, n, i, o, s, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            var z = a("b300"),
                N = {
                    components: {
                        ExceptionDialog: x,
                        ErrorDialog: k["a"],
                        CheckItem: O["a"],
                        ElPopover: C["a"],
                        Barcode: v["a"]
                    },
                    data: function() {
                        return {
                            loading: !1,
                            id: this.$route.query.id,
                            view: this.$route.query.view,
                            Authorization: "Bearer " + Object(p["a"])(),
                            pageData: null,
                            initPrice: 0,
                            type: u["a"].allotType,
                            arrDataAll: {
                                templates: [],
                                goodsDetail: []
                            },
                            selectVal: {
                                priceRules: ""
                            },
                            fileList: [],
                            zz_colors: [],
                            status: !1,
                            submitLoad: !1,
                            updateLoad: !1,
                            imageUrl: "",
                            showExceptionDialog: !1,
                            showErrDialog: !1,
                            dict: {
                                labels: [],
                                position: [],
                                extent: [],
                                point: [],
                                sorts: {}
                            },
                            defect: {
                                position: [],
                                position_str: [],
                                data: [{}, {}]
                            },
                            is_auto_to_up_shift: 1,
                            extent_data: {},
                            point_data: {},
                            attr: [],
                            tag_arr: [],
                            appearance_kv: [],
                            pos_index_arr: [],
                            point_index_arr: [],
                            priority_arr: [
                                [],
                                [],
                                []
                            ],
                            isShowUpdate: this.$route.query.searchType,
                            client: null,
                            video_upload_loading: !1,
                            isChangeTag: !1,
                            barcodeInfo: [],
                            mainPositionName: null,
                            beforePoint: {}
                        }
                    },
                    computed: {
                        defectMsg: function() {
                            var t = this,
                                e = {};
                            this.tag_arr.forEach((function(a, n) {
                                var i = [];
                                t.priority_arr.forEach((function(t, e) {
                                    for (var n in t) a.includes(n) && (i[e] = t[n])
                                })), e[n] = i
                            }));
                            var a = Object.keys(e),
                                n = a.sort((function(t, a) {
                                    return e[a][0] - e[t][0] == 0 ? e[a][1] - e[t][1] == 0 ? e[a][2] - e[t][2] == 0 ? 1 : e[a][2] - e[t][2] : e[a][1] - e[t][1] : e[a][0] - e[t][0]
                                })),
                                i = [],
                                r = "",
                                o = this.selectVal.textarea;
                            for (var s in n) r = this.tag_arr[n[s]], i.push(r), -1 != o.indexOf(r) && (o = o.replace(r, ""));
                            o = o.replace(/，，+/g, "，，");
                            var c = i.join("，");
                            return this.selectVal.textarea = o.replace("，，", "，" + c + "，"), c
                        }
                    },
                    mounted: function() {
                        var t = q(o.a.mark((function t() {
                            return o.a.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.$route.query.token) {
                                            t.next = 5;
                                            break
                                        }
                                        return Object(p["c"])(this.$route.query.token), this.Authorization = this.$route.query.token, t.next = 5, this.$store.dispatch("user/getInfo");
                                    case 5:
                                        return t.next = 7, this.getAppearance();
                                    case 7:
                                        if (this.id && this.getEditDetailData(), this.getProductError(), this.client) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.next = 12, this.getUploadConfig();
                                    case 12:
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
                    methods: {
                        closeError: function() {
                            var t = q(o.a.mark((function t(e) {
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(s["o"])({
                                                id: e
                                            });
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        getProductError: function() {
                            var t = q(o.a.mark((function t() {
                                var e;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(s["j"])({
                                                product_id: this.id
                                            });
                                        case 2:
                                            e = t.sent, this.errorList = e.data;
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
                        getAssay: function() {
                            var t, e = T(this.arrDataAll.goodsDetail);
                            try {
                                for (e.s(); !(t = e.n()).done;) {
                                    var a = t.value;
                                    if (12 == a.pnid) return a.value
                                }
                            } catch (n) {
                                e.e(n)
                            } finally {
                                e.f()
                            }
                            return null
                        },
                        setAssay: function(t, e) {
                            var a, n = T(this.arrDataAll.goodsDetail);
                            try {
                                for (n.s(); !(a = n.n()).done;) {
                                    var i = a.value;
                                    if (12 == i.pnid) {
                                        if (e && i.value) return;
                                        return void(i.value = t)
                                    }
                                }
                            } catch (r) {
                                n.e(r)
                            } finally {
                                n.f()
                            }
                        },
                        handleAssay: function(t) {
                            var e, a = {},
                                n = T(this.pageData.goods_conditions);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var i = e.value;
                                    a[i.pnid] = i
                                }
                            } catch (r) {
                                n.e(r)
                            } finally {
                                n.f()
                            }
                            this.tag_arr.length > 0 && 25 == this.getAssay() && !this.beforePoint["assay"] && (this.beforePoint["assay"] = this.getAssay(), this.beforePoint["appearance"] = a["71"] ? a["71"].goodsValue : null), a["71"] && "4787" == a["71"].goodsValue ? a["190"] && a["190"].inputVal < 100 && 0 == this.pageData.is_clean_camera && a["67"] && ("4848" == a["67"].goodsValue || "4802" == a["67"].goodsValue && a["116"] && a["116"].goodsValue == this.getConditionIdByName("电池情况", "原装电池")) ? this.setAssay(25) : this.setAssay(26) : a["71"] && "4788" == a["71"].goodsValue ? this.setAssay(26) : a["71"] && "4789" == a["71"].goodsValue ? this.setAssay(27) : a["71"] && "4790" == a["71"].goodsValue && this.setAssay(103), this.tag_arr.length > 0 && 25 == this.getAssay() && (this.setAssay(26), a["71"] && (a["71"].goodsValue = 4788), this.isChangeTag = !0), console.log("执行2")
                        },
                        handleAssayByChange: function(t) {
                            var e, a = {},
                                n = T(this.pageData.goods_conditions);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var i = e.value;
                                    a[i.pnid] = i
                                }
                            } catch (r) {
                                n.e(r)
                            } finally {
                                n.f()
                            }
                            a["116"] && a["116"].goodsValue == this.getConditionIdByName("电池情况", "更换电池") && this.setAssay(26, t)
                        },
                        getConditionIdByName: function(t, e) {
                            var a, n = T(this.pageData.goods_conditions);
                            try {
                                for (n.s(); !(a = n.n()).done;) {
                                    var i = a.value;
                                    if (i.pn_name == t) {
                                        var r, o = T(i.list);
                                        try {
                                            for (o.s(); !(r = o.n()).done;) {
                                                var s = r.value;
                                                if (s.pv_name == e) return s.pvid
                                            }
                                        } catch (c) {
                                            o.e(c)
                                        } finally {
                                            o.f()
                                        }
                                    }
                                }
                            } catch (c) {
                                n.e(c)
                            } finally {
                                n.f()
                            }
                        },
                        getConditionValue: function(t) {
                            var e, a = T(this.pageData.goods_conditions);
                            try {
                                for (a.s(); !(e = a.n()).done;) {
                                    var n = e.value;
                                    if (n.pn_name == t) {
                                        if (1 == n.pn_type) return n.goodsValue;
                                        if (2 == n.pn_type) return n.inputVal
                                    }
                                }
                            } catch (i) {
                                a.e(i)
                            } finally {
                                a.f()
                            }
                        },
                        handleChange: function(t) {
                            if (this.handleAssay(t), this.$forceUpdate(), this.getPricRules(t), "电池情况" == t.pn_name && t.goodsValue == this.getConditionIdByName("电池情况", "更换电池")) {
                                var e, a = T(this.pageData.goods_conditions);
                                try {
                                    for (a.s(); !(e = a.n()).done;) {
                                        var n = e.value;
                                        "充电效率" == n.pn_name ? n.goodsValue = 4792 : "充电次数" == n.pn_name && (n.goodsValue = 4794)
                                    }
                                } catch (i) {
                                    a.e(i)
                                } finally {
                                    a.f()
                                }
                            }
                        },
                        getBriefsById: function(t) {
                            var e, a = T(this.arrDataAll.templates);
                            try {
                                for (a.s(); !(e = a.n()).done;) {
                                    var n = e.value;
                                    if (n.b_id == t) return n.content
                                }
                            } catch (i) {
                                a.e(i)
                            } finally {
                                a.f()
                            }
                        },
                        getEditDetailData: function() {
                            var t = this;
                            this.loading = !0, Object(s["e"])({
                                product_id: this.id
                            }).then((function(e) {
                                if (1 == e.code) {
                                    var a = e.data;
                                    t.arrDataAll.templates = e.data.briefs, e.data.brief ? t.$set(t.selectVal, "textarea", e.data.brief) : t.$set(t.selectVal, "textarea", t.getBriefsById(42));
                                    var n, i = T(a.goods_conditions);
                                    try {
                                        var r = function() {
                                            var e = n.value;
                                            if ("维修痕迹" == e.pn_name && (e.list.forEach((function(t, a) {
                                                    "更换电池" == t.pv_name && e.list.splice(a, 1)
                                                })), e.goodsValue = 4802), a.key_product_props.length > 0) {
                                                var i, r = T(a.key_product_props);
                                                try {
                                                    for (r.s(); !(i = r.n()).done;) {
                                                        var o = i.value;
                                                        e.pnid == o.pn_id && (2 == e.pn_type ? e.inputVal = o.pv_name : (e.goodsValue = o.pv_id, 67 == e.pnid ? (e.goodsValue = 4802, o.pv_id && (e.goodsValue = o.pv_id), e.goodsValue) : 116 == e.pnid && t.$nextTick((function() {
                                                            e.goodsValue == t.getConditionIdByName("电池情况", "更换电池") && t.handleAssayByChange(!0)
                                                        }))))
                                                    }
                                                } catch (s) {
                                                    r.e(s)
                                                } finally {
                                                    r.f()
                                                }
                                            }
                                        };
                                        for (i.s(); !(n = i.n()).done;) r()
                                    } catch (o) {
                                        i.e(o)
                                    } finally {
                                        i.f()
                                    }
                                    0 == a.is_activation ? a.is_activation = 1 : a.is_activation, t.fileList = e.data.product_images, !a.main_pic && t.fileList.length > 0 ? (a.main_pic = t.fileList[0].url, t.mainPositionName = t.fileList[0].position_name, t.fileList.splice(0, 1)) : t.fileList.forEach((function(e, n) {
                                        e.url.substr(e.url.lastIndexOf("/")) == a.main_pic.substr(a.main_pic.lastIndexOf("/")) && (t.mainPositionName = t.fileList[n].position_name, t.fileList.splice(n, 1))
                                    })), t.initPrice = a.price, 0 == a.is_can_update_price && 0 == a.is_sale_put && 1 == a.is_replace_battery && 0 == a.battery_price && (a.price = parseInt(a.price) + parseInt(a.replace_battery_price)), t.pageData = a, t.status = !0, t.getGoodsDetailData(""), t.loading = !1, t.getTemplateRules({
                                        pn_name: "初始化"
                                    }), t.pageData.surface_appearance && (console.log("init appearance", t.pageData.surface_appearance), t.defect = JSON.parse(t.pageData.surface_appearance), t.initAttrData(t.defect.data))
                                }
                                1 != t.pageData.business_line && t.getZzColors()
                            }))
                        },
                        initAttrData: function(t) {
                            this.tag_arr = [];
                            var e = "",
                                a = "",
                                n = "",
                                i = "",
                                r = "",
                                o = [];
                            for (var s in t[0]) e = this.getChinese(s), a = this.getChinese(t[0][s]["extent"]), n = this.getChinese(t[1][s]["point"]), this.tag_arr.push(e + a + n), i = this.pos_index_arr[e], r = this.point_index_arr[n], this.attr[i][r] = a, o.push(s), this.extent_data[s] = t[0][s], this.point_data[s] = t[1][s];
                            this.defect.position = o, this.defect.position_str = o, console.log("attr data", this.defect), this.posColor()
                        },
                        getChinese: function(t) {
                            if (null != t && "" != t) {
                                var e = /[\u4e00-\u9fa5]/g;
                                return t.match(e).join("")
                            }
                            return ""
                        },
                        handleChangeSelect: function(t) {
                            var e, a = T(this.arrDataAll.templates);
                            try {
                                for (a.s(); !(e = a.n()).done;) {
                                    var n = e.value;
                                    t == n.b_id && this.$set(this.selectVal, "textarea", n.content)
                                }
                            } catch (i) {
                                a.e(i)
                            } finally {
                                a.f()
                            }
                        },
                        getGoodsDetailData: function() {
                            var t = q(o.a.mark((function t(e) {
                                var a, n, i, r, c, l, u, p, d, h;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(s["g"])({
                                                model_id: this.pageData.model_id
                                            });
                                        case 2:
                                            if (a = t.sent, 1 == a.code) {
                                                for (n in this.arrDataAll.goodsDetail = [], a.data)
                                                    for (i in a.data[n]) 1 != this.pageData.business_line ? "来源" != a.data[n][i].pn_name && (a.data[n][i].value = "", this.arrDataAll.goodsDetail.push(a.data[n][i])) : (a.data[n][i].value = "", this.arrDataAll.goodsDetail.push(a.data[n][i]));
                                                if ("" != e && (this.status = !1), this.arrDataAll.goodsDetail.length > 0 && "" == e) {
                                                    r = T(this.arrDataAll.goodsDetail);
                                                    try {
                                                        for (r.s(); !(c = r.n()).done;) {
                                                            l = c.value, u = !0, p = T(this.pageData.sale_product_props);
                                                            try {
                                                                for (p.s(); !(d = p.n()).done;) h = d.value, l.pnid == h.pn_id && (l.value = h.pv_id, u = !1)
                                                            } catch (o) {
                                                                p.e(o)
                                                            } finally {
                                                                p.f()
                                                            }
                                                            u && (l.value = null)
                                                        }
                                                    } catch (o) {
                                                        r.e(o)
                                                    } finally {
                                                        r.f()
                                                    }
                                                    this.getPricRules({
                                                        pn_name: "初始化"
                                                    })
                                                }
                                                this.getTemplateRules({
                                                    pn_name: "初始化"
                                                })
                                            }
                                            this.getLabelList();
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
                        getUploadPicture: function(t) {
                            var e = this,
                                a = new FormData;
                            a.append("image", t.file), Object(s["n"])(a).then((function(t) {
                                1 == t.code && e.fileList.push(t.data)
                            }))
                        },
                        getUploadVideo: function(t) {
                            this.video_upload_loading = !0, this.uploadImg(t.file)
                        },
                        uploadImg: function() {
                            var t = q(o.a.mark((function t(e) {
                                var a;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, this.client.put(this.getFileName(e.name), e);
                                        case 3:
                                            a = t.sent, e.type.indexOf("video") > -1 && (this.pageData.video_url = "http://cdn.huodao.hk/" + a.name), t.next = 10;
                                            break;
                                        case 7:
                                            t.prev = 7, t.t0 = t["catch"](0), console.error(t.t0);
                                        case 10:
                                            this.video_upload_loading = !1;
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 7]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        handlePicRemove: function(t, e) {
                            this.fileList.splice(t, 1), e.stopPropagation()
                        },
                        allowDrop: function(t) {
                            t.preventDefault()
                        },
                        dragStart: function(t, e) {
                            t.dataTransfer.setData("img", e)
                        },
                        drop: function(t, e) {
                            this.allowDrop(t);
                            var a = this.fileList.concat([]),
                                n = t.dataTransfer.getData("img"),
                                i = a.splice(n, 1);
                            a.splice(e, 0, i[0]), this.fileList = a
                        },
                        handleAvatarSuccess: function(t, e) {
                            this.pageData.main_pic = t.data.url
                        },
                        handlePictureCardPreview: function(t, e) {
                            var a = this.pageData.main_pic,
                                n = this.mainPositionName;
                            this.pageData.main_pic = t.url, this.mainPositionName = t.position_name, a ? (t.url = a, t.position_name = n) : this.fileList.splice(e, 1)
                        },
                        handleChangeType: function(t) {
                            var e = this;
                            Object(s["m"])({
                                type_id: t
                            }).then((function(t) {
                                1 == t.code && (e.$set(e.pageData, "brands", t.data.brand_list), e.pageData.brand_id = "", e.pageData.model_id = "")
                            }))
                        },
                        handleChangeBrand: function(t) {
                            var e = this;
                            Object(s["b"])({
                                type_id: this.pageData.type_id,
                                brand_id: t
                            }).then((function(t) {
                                if (1 == t.code) {
                                    e.$set(e.pageData, "models", t.data.model_list), e.getGoodsConditions(), e.pageData.model_id = null;
                                    var a, n = T(e.arrDataAll.goodsDetail);
                                    try {
                                        for (n.s(); !(a = n.n()).done;) {
                                            var i = a.value;
                                            i.value = null
                                        }
                                    } catch (r) {
                                        n.e(r)
                                    } finally {
                                        n.f()
                                    }
                                }
                            }))
                        },
                        getGoodsConditions: function() {
                            var t = this;
                            Object(s["f"])({
                                type_id: this.pageData.type_id,
                                brand_id: this.pageData.brand_id
                            }).then((function(e) {
                                if (1 == e.code) {
                                    var a, n = T(e.data);
                                    try {
                                        for (n.s(); !(a = n.n()).done;) {
                                            var i = a.value;
                                            i.goodsValue = "", i.inputVal = ""
                                        }
                                    } catch (r) {
                                        n.e(r)
                                    } finally {
                                        n.f()
                                    }
                                    t.$set(t.pageData, "goods_conditions", e.data)
                                }
                            }))
                        },
                        getPricRules: function(t) {
                            var e = this;
                            if (1 != this.pageData.is_can_update_price && (1 == this.pageData.qc_level || !(this.pageData.price > 1 || 1 == this.pageData.status))) {
                                var a, n = [],
                                    i = [],
                                    r = T(this.arrDataAll.goodsDetail);
                                try {
                                    for (r.s(); !(a = r.n()).done;) {
                                        var o = a.value;
                                        n.push("".concat(o.pnid, ":").concat(o.value))
                                    }
                                } catch (p) {
                                    r.e(p)
                                } finally {
                                    r.f()
                                }
                                var c, l = T(this.pageData.goods_conditions);
                                try {
                                    for (l.s(); !(c = l.n()).done;) {
                                        var u = c.value;
                                        i.push("".concat(u.pnid, ":").concat(u.goodsValue))
                                    }
                                } catch (p) {
                                    l.e(p)
                                } finally {
                                    l.f()
                                }
                                Object(s["i"])({
                                    product_id: this.pageData.product_id,
                                    type_id: this.pageData.type_id,
                                    brand_id: this.pageData.brand_id,
                                    model_id: this.pageData.model_id,
                                    sales_properties: n,
                                    parameter_properties: i,
                                    tag_ids: this.pageData.tags
                                }).then((function(t) {
                                    (1 == e.pageData.supplier.is_independent_pricing && 0 == e.pageData.warehouse.is_sale_put || 0 == e.pageData.price) && (e.pageData.price = t.data.price, e.initPrice = t.data.price), 1 == t.data.is_replace_battery && 0 == e.pageData.warehouse.is_sale_put && 0 == e.pageData.battery_price && (e.pageData.price = parseInt(t.data.price) + parseInt(e.pageData.replace_battery_price)), e.selectVal.priceRules = t.data.pricing_str
                                })).catch((function(t) {
                                    console.log(t)
                                })), this.getTemplateRules(t), 54 == t.pnid && this.handleChangeSource()
                            }
                        },
                        eidtSubmit: function() {
                            var t = q(o.a.mark((function t(e) {
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (!([5, 114, 4, 14, 16, 15, 127, 129].indexOf(this.pageData.model_id) > -1 && this.getConditionValue("充电次数1") >= 400)) {
                                                t.next = 3;
                                                break
                                            }
                                            return t.next = 3, this.$confirm("该商品充电次数不小于400次，是否通过？", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 3:
                                            if (!(this.pageData.price < this.pageData.product_cost.cost && 1 == this.pageData.business_line)) {
                                                t.next = 6;
                                                break
                                            }
                                            return t.next = 6, this.$confirm("确认低于成本价销售?", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 6:
                                            this.postGoodsEidt(e);
                                        case 7:
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
                        getConditionLabel: function(t, e) {
                            var a, n = T(t);
                            try {
                                for (n.s(); !(a = n.n()).done;) {
                                    var i = a.value;
                                    if (i.pvid == e) return i.pv_name
                                }
                            } catch (r) {
                                n.e(r)
                            } finally {
                                n.f()
                            }
                        },
                        postGoodsEidt: function() {
                            var t = q(o.a.mark((function t(e) {
                                var a, n, i, r, l, u, p, d, h, f, _, v, m, g, b, y, D = this;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            t.prev = 0, a = [], n = [], i = [], r = T(this.arrDataAll.goodsDetail);
                                            try {
                                                for (r.s(); !(l = r.n()).done;) u = l.value, u.value && a.push({
                                                    pn_id: u.pnid,
                                                    pv_id: u.value
                                                })
                                            } catch (o) {
                                                r.e(o)
                                            } finally {
                                                r.f()
                                            }
                                            p = T(this.pageData.goods_conditions);
                                            try {
                                                for (p.s(); !(d = p.n()).done;) h = d.value, (h.goodsValue || h.inputVal) && n.push({
                                                    pn_id: h.pnid,
                                                    pv_id: h.goodsValue ? h.goodsValue : 0,
                                                    pn_type: h.pn_type,
                                                    pv_name: 1 == h.pn_type ? this.getConditionLabel(h.list, h.goodsValue) : h.inputVal
                                                })
                                            } catch (o) {
                                                p.e(o)
                                            } finally {
                                                p.f()
                                            }
                                            if (i.push({
                                                    position: 0,
                                                    original_image_url: this.pageData.main_pic,
                                                    position_name: this.mainPositionName
                                                }), this.fileList.forEach((function(t, e) {
                                                    i.push({
                                                        position: e + 1,
                                                        position_name: t.position_name,
                                                        original_image_url: t.url
                                                    })
                                                })), f = {
                                                    product_id: this.pageData.product_id,
                                                    type_id: this.pageData.type_id,
                                                    model_id: this.pageData.model_id,
                                                    brand_id: this.pageData.brand_id,
                                                    product_name: this.pageData.product_name,
                                                    imei: this.pageData.imei,
                                                    sn: this.pageData.sn,
                                                    brief: this.selectVal.textarea.replace("，，", "，".concat(this.defectMsg ? this.defectMsg + "，" : "")),
                                                    main_pic: this.pageData.main_pic,
                                                    check_res: this.pageData.crawler_result ? this.pageData.crawler_result.quality_remark : null,
                                                    is_activation: this.pageData.is_activation,
                                                    activation_time: this.pageData.activation_time,
                                                    guarantee_time: this.pageData.guarantee_time,
                                                    tag_ids: this.pageData.tags,
                                                    price: this.initPrice,
                                                    sale_product_props: a,
                                                    key_product_props: n,
                                                    product_images: i,
                                                    quality_inspection: this.pageData.quality_inspection,
                                                    package: this.pageData.package,
                                                    surface_appearance: JSON.stringify(this.defect),
                                                    is_auto_to_up_shift: this.is_auto_to_up_shift,
                                                    video_url: this.pageData.video_url
                                                }, 1 == this.pageData.is_can_update_price && (f.price = this.pageData.price), !this.pageData.official_crawler) {
                                                t.next = 32;
                                                break
                                            }
                                            _ = T(this.arrDataAll.goodsDetail), t.prev = 14, _.s();
                                        case 16:
                                            if ((v = _.n()).done) {
                                                t.next = 24;
                                                break
                                            }
                                            if (m = v.value, !this.isDanger(m)) {
                                                t.next = 22;
                                                break
                                            }
                                            return t.next = 21, this.$confirm("有录入信息与爬虫信息不一致，是否提交？", "提示", {
                                                type: "warning",
                                                center: !0
                                            });
                                        case 21:
                                            return t.abrupt("break", 24);
                                        case 22:
                                            t.next = 16;
                                            break;
                                        case 24:
                                            t.next = 29;
                                            break;
                                        case 26:
                                            t.prev = 26, t.t0 = t["catch"](14), _.e(t.t0);
                                        case 29:
                                            return t.prev = 29, _.f(), t.finish(29);
                                        case 32:
                                            if (1 != e) {
                                                t.next = 36;
                                                break
                                            }
                                            console.log("编辑环节更新并上架已关闭"), t.next = 64;
                                            break;
                                        case 36:
                                            return this.updateLoad = !0, t.next = 39, Object(s["p"])(f);
                                        case 39:
                                            if (g = t.sent, this.updateLoad = !1, this.$message.success(g.msg), 1 != g.data.is_package_full) {
                                                t.next = 63;
                                                break
                                            }
                                            return t.prev = 43, t.next = 46, this.$confirm("待打包数据已满，请流转到下一环节", "流转单提醒", {
                                                distinguishCancelAndClose: !0,
                                                confirmButtonText: "查看详情",
                                                cancelButtonText: "打印流转单号",
                                                type: "warning",
                                                center: !0
                                            });
                                        case 46:
                                            this.$router.push({
                                                name: "editor-done-list"
                                            }), t.next = 61;
                                            break;
                                        case 49:
                                            if (t.prev = 49, t.t1 = t["catch"](43), "close" !== t.t1) {
                                                t.next = 54;
                                                break
                                            }
                                            return console.log("关闭弹框"), t.abrupt("return");
                                        case 54:
                                            return t.next = 56, Object(c["b"])();
                                        case 56:
                                            return b = t.sent, y = {
                                                code: b.data.transfer_order_no,
                                                title: b.data.source_node.name + "---\x3e" + b.data.to_node.name + "（" + b.data.area_name + b.data.total_num + "台）<br/>" + (new Date).toLocaleString()
                                            }, this.barcodeInfo.push(y), setTimeout((function() {
                                                D.$refs["print-barcode"].$el.click(), D.$router.go(-1)
                                            }), 500), t.abrupt("return");
                                        case 61:
                                            t.next = 64;
                                            break;
                                        case 63:
                                            this.$router.go(-1);
                                        case 64:
                                            t.next = 70;
                                            break;
                                        case 66:
                                            t.prev = 66, t.t2 = t["catch"](0), this.submitLoad = !1, this.updateLoad = !1;
                                        case 70:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 66],
                                    [14, 26, 29, 32],
                                    [43, 49]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        handleRoute: function() {
                            this.$router.go(-1)
                        },
                        getTemplateByTitle: function(t) {
                            var e, a = T(this.arrDataAll.templates);
                            try {
                                for (a.s(); !(e = a.n()).done;) {
                                    var n = e.value;
                                    if (n.title.indexOf(t) > -1) return n
                                }
                            } catch (i) {
                                a.e(i)
                            } finally {
                                a.f()
                            }
                        },
                        getLabelList: function() {
                            var t = q(o.a.mark((function t() {
                                var e;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(j["o"])({
                                                type_ids: [this.pageData.type_id]
                                            });
                                        case 2:
                                            e = t.sent, this.dict.labels = e.data[this.pageData.type_id];
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
                        getSourceByTitle: function(t, e) {
                            var a, n = T(this.arrDataAll.goodsDetail);
                            try {
                                for (n.s(); !(a = n.n()).done;) {
                                    var i = a.value;
                                    if (i.pnid == t) {
                                        var r, o = T(i.list);
                                        try {
                                            for (o.s(); !(r = o.n()).done;) {
                                                var s = r.value;
                                                if (s.pvname == e) return s
                                            }
                                        } catch (c) {
                                            o.e(c)
                                        } finally {
                                            o.f()
                                        }
                                    }
                                }
                            } catch (c) {
                                n.e(c)
                            } finally {
                                n.f()
                            }
                            return {}
                        },
                        getPropsValue: function(t) {
                            var e, a = T(this.arrDataAll.goodsDetail);
                            try {
                                for (a.s(); !(e = a.n()).done;) {
                                    var n = e.value;
                                    if (n.pnid == t) return n.value
                                }
                            } catch (i) {
                                a.e(i)
                            } finally {
                                a.f()
                            }
                        },
                        getTemplateRules: function(t) {
                            var e = this;
                            if ("型号" == t.pn_name || "版本" == t.pn_name || "来源" == t.pn_name || "是否激活" == t.pn_name || "初始化" == t.pn_name || "维修痕迹" == t.pn_name) {
                                var a = this.getTemplateByTitle("模板");
                                1 == this.pageData.is_clean_camera && (a = this.getTemplateByTitle("清理摄像头模版")), 2 == this.pageData.is_activation && (a = this.getTemplateByTitle("未激活")), "维修痕迹" != t.pn_name && "初始化" != t.pn_name || this.getConditionValue("维修痕迹") && this.getConditionValue("维修痕迹") == this.getConditionIdByName("维修痕迹", "官修记录") && (a = this.getTemplateByTitle("官修记录"));
                                var n, i = T(this.arrDataAll.goodsDetail);
                                try {
                                    for (i.s(); !(n = i.n()).done;) {
                                        var r = n.value;
                                        "54" == r.pnid && r.value && (r.value == this.getSourceByTitle(54, "官修机").pvid ? a = this.getTemplateByTitle("官修机") : r.value == this.getSourceByTitle(54, "官换机").pvid ? a = this.getTemplateByTitle("官换机") : r.value == this.getSourceByTitle(54, "演示机").pvid ? a = this.getTemplateByTitle("演示机") : r.value == this.getSourceByTitle(54, "官翻机").pvid ? a = this.getTemplateByTitle("官翻机") : r.value == this.getSourceByTitle(54, "BS机").pvid && (a = this.getTemplateByTitle("BS机")))
                                    }
                                } catch (s) {
                                    i.e(s)
                                } finally {
                                    i.f()
                                }
                                a && this.selectVal.temp != a.b_id && (this.$set(this.selectVal, "temp", a.b_id), this.pageData.brief || (a.content = a.content.replace(this.defectMsg, ""), this.$set(this.selectVal, "textarea", a.content))), this.handleChangeSource();
                                var o = this.selectVal.textarea.slice(0, 9);
                                this.pageData.briefs.forEach((function(t, a) {
                                    -1 != t.content.indexOf(o) && e.$set(e.selectVal, "temp", t.b_id)
                                }))
                            }
                        },
                        handleChangeSource: function() {
                            var t, e = T(this.arrDataAll.goodsDetail);
                            try {
                                for (e.s(); !(t = e.n()).done;) {
                                    var a = t.value;
                                    if (54 == a.pnid && 3701 == a.value) {
                                        var n, i = T(this.pageData.goods_conditions);
                                        try {
                                            for (i.s(); !(n = i.n()).done;) {
                                                var r = n.value;
                                                67 == r.pnid && (r.goodsValue = 4848)
                                            }
                                        } catch (o) {
                                            i.e(o)
                                        } finally {
                                            i.f()
                                        }
                                    }
                                }
                            } catch (o) {
                                e.e(o)
                            } finally {
                                e.f()
                            }
                        },
                        posColor: function() {
                            var t = this,
                                e = "";
                            this.attr.forEach((function(a, n) {
                                e = a.filter(Boolean), e.length > 0 ? t.dict.position[n].btn_flag = !0 : t.dict.position[n].btn_flag = !1
                            }))
                        },
                        clearRadio: function(t) {
                            var e = this;
                            this.dict.position[t].pop_flag = !1;
                            var a = this.attr[t],
                                n = "",
                                i = this.dict.position[t].name;
                            if (a.forEach((function(t, r) {
                                    t && (n = i + t + e.dict.point[r].name), a[r] = ""
                                })), -1 != this.selectVal.textarea.indexOf(n) && (this.selectVal.textarea = this.selectVal.textarea.replace(n, "")), this.delAppearance(t), this.posColor(), this.handleAssay(), this.beforePoint["assay"]) {
                                this.setAssay(this.beforePoint["assay"]);
                                var r, o = T(this.pageData.goods_conditions);
                                try {
                                    for (o.s(); !(r = o.n()).done;) {
                                        var s = r.value;
                                        "71" == s.pnid && (s.goodsValue = this.beforePoint["appearance"])
                                    }
                                } catch (c) {
                                    o.e(c)
                                } finally {
                                    o.f()
                                }
                            }
                            this.beforePoint["assay"] = null, this.beforePoint["appearance"] = null
                        },
                        chooseRadio: function(t, e) {
                            var a = this;
                            this.dict.position[t].pop_flag = !1;
                            var n = this.attr[t],
                                i = n[e],
                                r = this.dict.position[t].name,
                                o = this.dict.point[e].name,
                                s = "",
                                c = "";
                            n.forEach((function(t, i) {
                                i != e && (t && (s = a.dict.point[i].name, c = t), n[i] = "")
                            }));
                            var l = this.dict.extent,
                                u = "";
                            l.forEach((function(t, e) {
                                u = r + t.name + o, -1 != a.selectVal.textarea.indexOf(u) && (a.selectVal.textarea = a.selectVal.textarea.replace(u, ""))
                            }));
                            var p = r + c + s;
                            c && -1 != this.selectVal.textarea.indexOf(p) && (this.selectVal.textarea = this.selectVal.textarea.replace(p, "")), this.addAppearance(t, e, i), this.posColor(), this.handleAssay()
                        },
                        addAppearance: function(t, e, a) {
                            console.log(t);
                            var n = this.dict.position[t].name,
                                i = this.dict.point[e].name,
                                r = this.appearance_kv[n],
                                o = this.appearance_kv[i],
                                s = this.appearance_kv[a],
                                c = r + ":" + n;
                            this.defect.position.push(c), this.defect.position = A(new Set(this.defect.position)), this.defect.position_str = this.defect.position;
                            var l = s + ":" + a,
                                u = o + ":" + i,
                                p = {
                                    extent: l
                                },
                                d = {
                                    point: u
                                };
                            this.extent_data[c] = p, this.point_data[c] = d, this.defect.data[0] = this.extent_data, this.defect.data[1] = this.point_data, console.log("add", this.defect), this.tagTxt()
                        },
                        delAppearance: function(t) {
                            var e = this,
                                a = this.dict.position[t].name,
                                n = this.appearance_kv[a],
                                i = n + ":" + a,
                                r = this.defect.position;
                            r.forEach((function(t, e) {
                                -1 != t.indexOf(i) && r.splice(e, 1)
                            })), this.defect.position = r, this.defect.position_str = r;
                            var o = this.defect.data;
                            o.forEach((function(t, a) {
                                console.log("ddd", t), t.hasOwnProperty(i) && (delete o[a][i], delete e.extent_data[i], delete e.point_data[i])
                            })), this.defect.data = o, console.log("del", this.defect), this.tagTxt()
                        },
                        tagTxt: function() {
                            var t = this;
                            this.tag_arr = [];
                            var e = "",
                                a = "",
                                n = "";
                            this.attr.forEach((function(i, r) {
                                i.forEach((function(i, o) {
                                    i && (e = t.dict.position[r].name, a = t.dict.point[o].name, n = e + i + a, t.tag_arr.indexOf(n) <= -1 && t.tag_arr.push(n))
                                }))
                            }))
                        },
                        getUploadConfig: function() {
                            var t = q(o.a.mark((function t() {
                                var e, a;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0, this.client) {
                                                t.next = 7;
                                                break
                                            }
                                            return t.next = 4, Object(s["l"])();
                                        case 4:
                                            e = t.sent, a = e.data, this.client = new z({
                                                accessKeyId: a.AccessKeyId,
                                                accessKeySecret: a.AccessKeySecret,
                                                stsToken: a.SecurityToken,
                                                bucket: "huodaoimg",
                                                endpoint: "oss-cn-shenzhen.aliyuncs.com"
                                            });
                                        case 7:
                                            t.next = 12;
                                            break;
                                        case 9:
                                            t.prev = 9, t.t0 = t["catch"](0), console.log(t.t0);
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 9]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        handleZzColor: function() {
                            var t = q(o.a.mark((function t() {
                                var e;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(s["q"])({
                                                pid: this.pageData.product_id,
                                                zz_color_id: this.pageData.crawler_result.zz_color_id
                                            });
                                        case 3:
                                            e = t.sent, 1 == e.code && this.$message.success("保存成功"), t.next = 10;
                                            break;
                                        case 7:
                                            t.prev = 7, t.t0 = t["catch"](0), console.log(t.t0);
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 7]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        getZzColors: function() {
                            var t = q(o.a.mark((function t() {
                                var e;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(l["s"])({
                                                model_id: this.pageData.model_id,
                                                qc_code: this.pageData.qc_code
                                            });
                                        case 3:
                                            e = t.sent, this.zz_colors = e.data.color_list, t.next = 9;
                                            break;
                                        case 7:
                                            t.prev = 7, t.t0 = t["catch"](0);
                                        case 9:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 7]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        getAppearance: function() {
                            var t = q(o.a.mark((function t() {
                                var e, a, n, i = this;
                                return o.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(s["a"])();
                                        case 3:
                                            e = t.sent, this.dict.position = e.data.position, this.dict.extent = e.data.extent, this.dict.point = e.data.point, a = [], n = [], [], e.data.position.forEach((function(t, r) {
                                                a[r] = [], t.php_flag = !1, t.btn_flag = !1, n[t.name] = t.id, i.pos_index_arr[t.name] = r, i.priority_arr[2][t.name] = t.id, e.data.point.forEach((function(t, e) {
                                                    a[r][e] = "", n[t.name] = t.id, i.point_index_arr[t.name] = e, i.priority_arr[0][t.name] = t.id
                                                }))
                                            })), e.data.extent.forEach((function(t, e) {
                                                n[t.name] = t.id, i.priority_arr[1][t.name] = t.id
                                            })), this.attr = a, this.appearance_kv = n, t.next = 19;
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

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }(),
                        getFileName: function(t) {
                            var e = $()((new Date).getTime() + Math.random().toString(36).substr(2)),
                                a = "web_img/" + e.slice(0, 3) + "/" + e.slice(3, 6) + "/",
                                n = a + e + "_1000x1000." + t.split(".")[1];
                            return n
                        },
                        isDanger: function(t) {
                            var e = "";
                            if (t.list.forEach((function(a) {
                                    a.pvid == t.value && (e = a.pvname)
                                })), this.pageData.official_crawler) {
                                if ("颜色" == t.pn_name && this.pageData.official_crawler.color_name) return this.pageData.official_crawler.color_name.replace("色", "") != e.replace("色", "");
                                if ("内存" == t.pn_name && this.pageData.official_crawler.memory_name) return this.pageData.official_crawler.memory_name.replace(/[G,g,GB,gb,Gb,gB]/g, "") != e.replace(/[G,g,GB,gb,Gb,gB]/g, "")
                            }
                            return !1
                        }
                    }
                },
                R = N,
                M = (a("f0f2"), Object(D["a"])(R, n, i, !1, null, "06897bed", null));
            e["default"] = M.exports
        },
        afe9: function(t, e, a) {
            "use strict";
            a.d(e, "m", (function() {
                return i
            })), a.d(e, "g", (function() {
                return r
            })), a.d(e, "j", (function() {
                return o
            })), a.d(e, "d", (function() {
                return s
            })), a.d(e, "i", (function() {
                return c
            })), a.d(e, "k", (function() {
                return l
            })), a.d(e, "s", (function() {
                return u
            })), a.d(e, "l", (function() {
                return p
            })), a.d(e, "p", (function() {
                return d
            })), a.d(e, "n", (function() {
                return h
            })), a.d(e, "c", (function() {
                return f
            })), a.d(e, "b", (function() {
                return _
            })), a.d(e, "h", (function() {
                return v
            })), a.d(e, "q", (function() {
                return m
            })), a.d(e, "f", (function() {
                return g
            })), a.d(e, "o", (function() {
                return b
            })), a.d(e, "r", (function() {
                return y
            })), a.d(e, "e", (function() {
                return D
            })), a.d(e, "a", (function() {
                return w
            }));
            var n = a("b775");

            function i(t) {
                return Object(n["a"])({
                    url: "/api/input/type_list",
                    method: "get",
                    params: t
                })
            }

            function r(t) {
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

            function l(t) {
                return Object(n["a"])({
                    url: "/api/input/get_props",
                    method: "get",
                    params: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "/api/input/zz_colors",
                    method: "get",
                    params: t
                })
            }

            function p(t) {
                return Object(n["a"])({
                    url: "/api/input/get_sha_lou_result_by_transfer_order",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
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

            function v(t) {
                return Object(n["a"])({
                    url: "/api/input/mapping_list",
                    method: "post",
                    data: t
                })
            }

            function m(t) {
                return Object(n["a"])({
                    url: "/api/input/mapping_store",
                    method: "post",
                    data: t
                })
            }

            function g(t) {
                return Object(n["a"])({
                    url: "/api/product/model_color_picture_urls",
                    method: "get",
                    params: t
                })
            }

            function b(t) {
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

            function D(t) {
                return Object(n["a"])({
                    url: "/api/input/get_business_line",
                    method: "get",
                    params: t
                })
            }

            function w(t) {
                return Object(n["a"])({
                    url: "/api/input/abnormal_report_c2c",
                    method: "post",
                    data: t
                })
            }
        },
        b8aa: function(t, e, a) {
            "use strict";
            a.d(e, "b", (function() {
                return i
            })), a.d(e, "a", (function() {
                return r
            })), a.d(e, "c", (function() {
                return o
            }));
            var n = a("b775");

            function i(t) {
                return Object(n["a"])({
                    url: "/api/up_shift/receive",
                    method: "get",
                    params: t
                })
            }

            function r(t) {
                return Object(n["a"])({
                    url: "/api/up_shift/show_receive_order",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/up_shift/edit_and_on_sale",
                    method: "post",
                    data: t
                })
            }
        },
        bbd1: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return i
            })), a.d(e, "b", (function() {
                return r
            }));
            var n = a("b775");

            function i(t) {
                return Object(n["a"])({
                    url: "/api/edit/to_be_packed",
                    method: "get",
                    params: t
                })
            }

            function r(t) {
                return Object(n["a"])({
                    url: "/api/edit/auto_un_pack",
                    method: "post",
                    data: t
                })
            }
        },
        c0f9: function(t, e, a) {
            "use strict";
            a.d(e, "b", (function() {
                return i
            })), a.d(e, "a", (function() {
                return r
            })), a.d(e, "f", (function() {
                return o
            })), a.d(e, "d", (function() {
                return s
            })), a.d(e, "g", (function() {
                return c
            })), a.d(e, "i", (function() {
                return l
            })), a.d(e, "h", (function() {
                return u
            })), a.d(e, "j", (function() {
                return p
            })), a.d(e, "e", (function() {
                return d
            })), a.d(e, "c", (function() {
                return h
            }));
            var n = a("b775");

            function i(t) {
                return Object(n["a"])({
                    url: "/api/error_reports",
                    method: "get",
                    params: t
                })
            }

            function r(t) {
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

            function l(t) {
                return Object(n["a"])({
                    url: "/api/re_check/error_report",
                    method: "post",
                    data: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "/api/edit/error_report",
                    method: "post",
                    data: t
                })
            }

            function p(t) {
                return Object(n["a"])({
                    url: "/api/up_shift/error_report",
                    method: "post",
                    data: t
                })
            }

            function d(t) {
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
        },
        de26: function(t, e, a) {
            "use strict";
            var n = {
                goodsState: {
                    1: "上架",
                    2: "下架",
                    3: "已售",
                    4: "其他渠道",
                    5: "待发布",
                    6: "待完善",
                    7: "回收站",
                    8: "助手录入",
                    9: "机器预留",
                    10: "待上架"
                },
                location: {
                    1: "分拾库",
                    2: "检测库",
                    3: "市场库",
                    4: "上架库",
                    5: "维修库",
                    6: "报废库",
                    7: "B端库",
                    8: "预上架库",
                    9: "外包维修库",
                    11: "京东库",
                    12: "市场代卖库",
                    13: "问题库",
                    14: "借出库",
                    15: "B端问题",
                    16: "编辑库",
                    17: "编辑完成库",
                    18: "媒体库",
                    19: "质检分拾库",
                    20: "复测库",
                    21: "运营库",
                    22: "基建库",
                    23: "售后库",
                    24: "微信库"
                },
                allotType: {
                    "-1": "未知",
                    0: "自营",
                    1: "市场代卖",
                    2: "回收",
                    3: "保卖"
                }
            };
            e["a"] = n
        },
        f0f2: function(t, e, a) {
            "use strict";
            a("fe28")
        },
        f4c4: function(t, e, a) {
            "use strict";
            a.d(e, "h", (function() {
                return i
            })), a.d(e, "d", (function() {
                return r
            })), a.d(e, "e", (function() {
                return o
            })), a.d(e, "c", (function() {
                return s
            })), a.d(e, "g", (function() {
                return c
            })), a.d(e, "l", (function() {
                return l
            })), a.d(e, "n", (function() {
                return u
            })), a.d(e, "m", (function() {
                return p
            })), a.d(e, "b", (function() {
                return d
            })), a.d(e, "f", (function() {
                return h
            })), a.d(e, "i", (function() {
                return f
            })), a.d(e, "p", (function() {
                return _
            })), a.d(e, "k", (function() {
                return v
            })), a.d(e, "j", (function() {
                return m
            })), a.d(e, "o", (function() {
                return g
            })), a.d(e, "a", (function() {
                return b
            })), a.d(e, "q", (function() {
                return y
            }));
            var n = a("b775");

            function i(t) {
                return Object(n["a"])({
                    url: "/api/edit/my_receive",
                    method: "get",
                    params: t
                })
            }

            function r(t) {
                return Object(n["a"])({
                    url: "/api/edit/show_receive_order",
                    method: "get",
                    params: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/api/edit/edit_view",
                    method: "get",
                    params: t
                })
            }

            function s(t) {
                return Object(n["a"])({
                    url: "/api/brief_templates",
                    method: "get",
                    params: t
                })
            }

            function c(t) {
                return Object(n["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: t
                })
            }

            function l(t) {
                return Object(n["a"])({
                    url: "api/public/product/oss_upload_sts_token_for_web",
                    method: "get",
                    data: t
                })
            }

            function u(t) {
                return Object(n["a"])({
                    url: "/api/edit/image_upload",
                    method: "post",
                    data: t,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            }

            function p(t) {
                return Object(n["a"])({
                    url: "/api/input/get_brand",
                    method: "get",
                    params: t
                })
            }

            function d(t) {
                return Object(n["a"])({
                    url: "/api/input/get_model",
                    method: "get",
                    params: t
                })
            }

            function h(t) {
                return Object(n["a"])({
                    url: "/api/product/goods_conditions",
                    method: "get",
                    params: t
                })
            }

            function f(t) {
                return Object(n["a"])({
                    url: "/api/product/pricing_rules",
                    method: "post",
                    data: t
                })
            }

            function _(t) {
                return Object(n["a"])({
                    url: "/api/edit/edit_save",
                    method: "post",
                    data: t
                })
            }

            function v(t) {
                return Object(n["a"])({
                    url: "/api/input/products_search",
                    method: "get",
                    params: t
                })
            }

            function m(t) {
                return Object(n["a"])({
                    url: "/api/error_report/product_error_reports",
                    method: "get",
                    params: t
                })
            }

            function g(t) {
                return Object(n["a"])({
                    url: "/api/error_report/mark_handled",
                    method: "post",
                    data: t
                })
            }

            function b(t) {
                return Object(n["a"])({
                    url: "/api/phone_appearance/datas",
                    method: "get",
                    params: t
                })
            }

            function y(t) {
                return Object(n["a"])({
                    url: "/api/product/save_zz_color_id",
                    method: "post",
                    data: t
                })
            }
        },
        fe28: function(t, e, a) {}
    }
]);