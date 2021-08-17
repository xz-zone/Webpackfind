(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-commons"], {
        "0463": function(t, e, n) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticStyle: {
                            display: "none"
                        }
                    }, [n("div", {
                        staticStyle: {
                            overflow: "auto",
                            width: "17.5mm",
                            margin: "0 auto"
                        },
                        attrs: {
                            id: t.id
                        }
                    }, [n("div", {
                        staticStyle: {
                            width: "17.5mm",
                            display: "flex",
                            "align-items": "center",
                            "justify-content": "space-between",
                            margin: "auto",
                            overflow: "hidden",
                            "flex-wrap": "wrap",
                            border: "0px solid red"
                        }
                    }, t._l(t.barcodeInfo, (function(e, a) {
                        return n("div", {
                            key: a,
                            staticStyle: {
                                float: "left",
                                position: "relative",
                                width: "100%",
                                height: "21.95mm",
                                "text-align": "center",
                                "font-size": "10px",
                                overflow: "hidden",
                                border: "0 solid red",
                                "border-box": "box-sizing"
                            },
                            style: {
                                "margin-top": "0mm"
                            }
                        }, [n("div", {
                            staticStyle: {
                                width: "100%",
                                "padding-top": "1.5mm",
                                position: "absolute",
                                top: "0px",
                                left: "0",
                                right: "0",
                                margin: "auto",
                                display: "flex",
                                "justify-content": "center"
                            },
                            attrs: {
                                id: "qrcode" + a
                            }
                        }), t._v(" "), n("div", {
                            staticStyle: {
                                width: "110%",
                                "word-break": "break-all",
                                position: "absolute",
                                top: "60px",
                                "line-height": "10px",
                                left: "-5%",
                                transform: "scale(0.8)"
                            }
                        }, [t._v(t._s(e.id))])])
                    })), 0)])])
                },
                r = [],
                i = n("1f57"),
                s = n.n(i),
                o = {
                    props: {
                        data: [Array],
                        id: [String]
                    },
                    data: function() {
                        return {
                            barcodeInfo: this.data,
                            qrcodeIns: {}
                        }
                    },
                    watch: {
                        data: function(t) {
                            this.barcodeInfo = t, this.initBarcode()
                        }
                    },
                    mounted: function() {
                        this.initBarcode()
                    },
                    methods: {
                        initBarcode: function() {
                            for (var t = this, e = function(e) {
                                    var n = t.barcodeInfo[e];
                                    t.$nextTick((function() {
                                        t.qrcode(n.id, e)
                                    }))
                                }, n = 0; n < this.barcodeInfo.length; n++) e(n)
                        },
                        qrcode: function(t, e) {
                            console.log(t), this.qrcodeIns[e] ? this.qrcodeIns[e].makeCode(t) : this.qrcodeIns[e] = new s.a("qrcode" + e, {
                                width: 50,
                                height: 50,
                                text: t
                            })
                        }
                    }
                },
                l = o,
                c = (n("afbf"), n("5d22")),
                u = Object(c["a"])(l, a, r, !1, null, "e7da61b8", null);
            e["a"] = u.exports
        },
        "05cb": function(t, e, n) {},
        "0ae1": function(t, e, n) {},
        1504: function(t, e, n) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "type-brand-model",
                        style: {
                            margin: t.isSearch ? "0 10px 10px 0" : "0px"
                        }
                    }, [t.level >= 1 ? n("el-select", {
                        style: {
                            width: t.width + "px"
                        },
                        attrs: {
                            placeholder: "请选择类目",
                            disabled: t.disabled,
                            filterable: "",
                            clearable: ""
                        },
                        on: {
                            change: t.typeChange
                        },
                        model: {
                            value: t.search.type_id,
                            callback: function(e) {
                                t.$set(t.search, "type_id", e)
                            },
                            expression: "search.type_id"
                        }
                    }, [t.loading.type ? n("i", {
                        staticClass: "el-input__icon el-icon-loading",
                        attrs: {
                            slot: "prefix"
                        },
                        slot: "prefix"
                    }) : t._e(), t._v(" "), t._l(t.dict.types, (function(t, e) {
                        return n("el-option", {
                            key: e,
                            attrs: {
                                label: t,
                                value: e
                            }
                        })
                    }))], 2) : t._e(), t._v(" "), t.level >= 2 ? n("el-select", {
                        style: {
                            width: t.width + "px"
                        },
                        attrs: {
                            placeholder: "请选择品牌",
                            "suffix-icon": "el-icon-date",
                            disabled: t.disabled,
                            filterable: "",
                            clearable: ""
                        },
                        on: {
                            change: t.brandChange
                        },
                        model: {
                            value: t.search.brand_id,
                            callback: function(e) {
                                t.$set(t.search, "brand_id", e)
                            },
                            expression: "search.brand_id"
                        }
                    }, [t.loading.brand ? n("i", {
                        staticClass: "el-input__icon el-icon-loading",
                        attrs: {
                            slot: "prefix"
                        },
                        slot: "prefix"
                    }) : t._e(), t._v(" "), t._l(t.dict.brands, (function(t, e) {
                        return n("el-option", {
                            key: e,
                            attrs: {
                                label: t,
                                value: e
                            }
                        })
                    }))], 2) : t._e(), t._v(" "), t.level >= 3 ? n("el-select", {
                        style: {
                            width: t.width + "px"
                        },
                        attrs: {
                            placeholder: "请选择型号",
                            disabled: t.disabled,
                            filterable: "",
                            clearable: ""
                        },
                        on: {
                            change: t.modelChange
                        },
                        model: {
                            value: t.search.model_id,
                            callback: function(e) {
                                t.$set(t.search, "model_id", e)
                            },
                            expression: "search.model_id"
                        }
                    }, [t.loading.model ? n("i", {
                        staticClass: "el-input__icon el-icon-loading",
                        attrs: {
                            slot: "prefix"
                        },
                        slot: "prefix"
                    }) : t._e(), t._v(" "), t._l(t.dict.models, (function(t, e) {
                        return n("el-option", {
                            key: e,
                            attrs: {
                                label: t,
                                value: e
                            }
                        })
                    }))], 2) : t._e()], 1)
                },
                r = [],
                i = n("4838"),
                s = n.n(i),
                o = n("2934");

            function l(t, e, n, a, r, i, s) {
                try {
                    var o = t[i](s),
                        l = o.value
                } catch (c) {
                    return void n(c)
                }
                o.done ? e(l) : Promise.resolve(l).then(a, r)
            }

            function c(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(a, r) {
                        var i = t.apply(e, n);

                        function s(t) {
                            l(i, a, r, s, o, "next", t)
                        }

                        function o(t) {
                            l(i, a, r, s, o, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }
            var u = {
                    name: "TypeBrandModel",
                    props: {
                        level: {
                            type: Number,
                            default: 3
                        },
                        hasName: {
                            type: Boolean,
                            default: !1
                        },
                        value: {
                            type: Object,
                            default: null
                        },
                        dict: {
                            type: Object,
                            default: null
                        },
                        allInit: {
                            type: Boolean,
                            default: !1
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        },
                        width: {
                            type: Number,
                            default: 185
                        },
                        isSearch: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            search: {
                                type_id: null,
                                brand_id: null,
                                model_id: null
                            },
                            loading: {
                                type: !1,
                                brand: !1,
                                model: !1
                            }
                        }
                    },
                    watch: {
                        value: function(t) {
                            this.search = t, t.type_id ? t.brand_id || (this.dict.models = []) : (this.dict.brands = [], this.dict.models = [])
                        }
                    },
                    mounted: function() {
                        var t = c(s.a.mark((function t() {
                            return s.a.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (this.$set(this, "search", this.value), this.$set(this, "dict", this.dict), !this.allInit) {
                                            t.next = 10;
                                            break
                                        }
                                        return t.next = 5, Promise.all([this.getTypeDict(), this.getBrandDict(), this.getModelDict()]);
                                    case 5:
                                        this.$emit("typeChange"), this.$emit("brandChange"), this.$emit("modelChange"), t.next = 12;
                                        break;
                                    case 10:
                                        return t.next = 12, this.getTypeDict();
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
                        typeChange: function() {
                            var t = c(s.a.mark((function t() {
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            this.getBrandDict(), this.dict.models = [], this.search.brand_id = "", this.search.model_id = "", this.hasName && this.getSearchName(), this.$emit("input", this.search), this.$emit("typeChange");
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
                        brandChange: function() {
                            this.getModelDict(), this.search.model_id = "", this.hasName && this.getSearchName(), this.$emit("input", this.search), this.$emit("brandChange")
                        },
                        modelChange: function() {
                            this.hasName && this.getSearchName(), this.$emit("input", this.search), this.$emit("modelChange")
                        },
                        getSearchName: function() {
                            this.dict.types && (this.search.type_name = this.dict.types[this.search.type_id]), this.dict.brands && (this.search.brand_name = this.dict.brands[this.search.brand_id]), this.dict.models && (this.search.model_name = this.dict.models[this.search.model_id])
                        },
                        getTypeDict: function() {
                            var t = c(s.a.mark((function t() {
                                var e;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return this.loading.type = !0, t.next = 3, Object(o["p"])();
                                        case 3:
                                            e = t.sent, this.loading.type = !1, this.dict.types = e.data, this.hasName && (this.search.type_name = this.dict.types[this.search.type_id], this.$emit("input", this.search));
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
                        getBrandDict: function() {
                            var t = c(s.a.mark((function t() {
                                var e;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (!("" != this.search.type_id && this.level > 1)) {
                                                t.next = 8;
                                                break
                                            }
                                            return this.loading.brand = !0, t.next = 4, Object(o["d"])({
                                                type_id: this.search.type_id
                                            });
                                        case 4:
                                            e = t.sent, this.loading.brand = !1, this.dict.brands = e.data, this.hasName && (this.search.brand_name = this.dict.brands[this.search.brand_id], this.$emit("input", this.search));
                                        case 8:
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
                        getModelDict: function() {
                            var t = c(s.a.mark((function t() {
                                var e;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (!("" != this.search.type_id && "" != this.search.brand_id && this.level > 2)) {
                                                t.next = 8;
                                                break
                                            }
                                            return this.loading.model = !0, t.next = 4, Object(o["i"])({
                                                type_id: this.search.type_id,
                                                brand_id: this.search.brand_id
                                            });
                                        case 4:
                                            e = t.sent, this.loading.model = !1, this.dict.models = e.data, this.hasName && (this.search.model_name = this.dict.models[this.search.model_id], this.$emit("input", this.search));
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }
                },
                d = u,
                h = (n("8b75"), n("5d22")),
                p = Object(h["a"])(d, a, r, !1, null, "6be3000a", null);
            e["a"] = p.exports
        },
        2090: function(t, e, n) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("el-table", t._g(t._b({
                        attrs: {
                            data: t.data
                        }
                    }, "el-table", t.tableBind, !1), t.$listeners), [t.typesColumns ? [n("el-table-column", t._b({
                        key: t.typesColumns.type,
                        attrs: {
                            type: t.typesColumns.type
                        }
                    }, "el-table-column", t.typesColumns.props, !1))] : t._e(), t._v(" "), t._l(t.renderColumns, (function(e, a) {
                        return [e.prop ? n("el-table-column", t._b({
                            key: a,
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(a) {
                                    return [n(e.component, t._g(t._b({
                                        tag: "component"
                                    }, "component", t.getCptBind(a, e), !1), e.listeners))]
                                }
                            }], null, !0)
                        }, "el-table-column", t.getColBind(e), !1)) : n("el-table-column", {
                            key: a,
                            attrs: {
                                label: e.label
                            }
                        }, t._l(e.children, (function(e, a) {
                            return n("el-table-column", t._b({
                                key: a,
                                scopedSlots: t._u([{
                                    key: "default",
                                    fn: function(a) {
                                        return [n(e.component, t._g(t._b({
                                            tag: "component"
                                        }, "component", t.getCptBind(a, e), !1), e.listeners))]
                                    }
                                }], null, !0)
                            }, "el-table-column", t.getColBind(e), !1))
                        })), 1)]
                    }))], 2)
                },
                r = [],
                i = {
                    functional: !0,
                    props: ["row", "col", "column"],
                    render: function(t, e) {
                        var n = e.props,
                            a = n.row,
                            r = n.col,
                            i = e._v,
                            s = r.formater;
                        if (void 0 === a[r.prop]) return "";
                        var o = s && s(a, r) || a[r.prop];
                        return i && i(o) || o
                    }
                },
                s = ["selection"],
                o = {
                    align: "left",
                    component: i
                },
                l = ["fit", "stripe", "border", "show-header", "highlight-current-row", "default-expand-all", "show-summary"],
                c = {
                    props: {
                        data: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        columns: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        columnType: String,
                        columnsProps: Object,
                        columnsSchema: Object,
                        columnsHandler: Function
                    },
                    computed: {
                        tableBind: function() {
                            var t = this.$attrs,
                                e = {};
                            return Object.keys(t).forEach((function(n) {
                                var a = t[n],
                                    r = n.replace(/([A-Z])/, "-$1").toLowerCase();
                                e[n] = !(!~l.indexOf(r) || "" !== a) || a
                            })), e
                        },
                        typesColumns: function() {
                            var t = this.columnType,
                                e = this.columnTypeProps,
                                n = void 0 === e ? {} : e;
                            return ~s.indexOf(t) ? {
                                type: t,
                                props: n[t]
                            } : null
                        },
                        renderColumns: function() {
                            var t = this.columns,
                                e = this.columnsProps,
                                n = this.columnsHandler,
                                a = this.columnsSchema,
                                r = function(t) {
                                    var n = a && a[t["prop"]] || {},
                                        r = Object.assign({}, o, e, t, n);
                                    return r
                                },
                                i = t.map((function(t) {
                                    return t.prop ? r(t) : {
                                        label: t.label,
                                        children: t.children.map((function(t) {
                                            return r(t)
                                        }))
                                    }
                                }));
                            return n && n(i) || i
                        }
                    },
                    methods: {
                        getColBind: function(t) {
                            var e = Object.assign({}, t);
                            return delete e.component, delete e.listeners, delete e.propsHandler, e
                        },
                        getCptBind: function(t, e) {
                            var n = t.row,
                                a = t.column,
                                r = {
                                    row: n,
                                    col: e,
                                    column: a
                                },
                                i = e.propsHandler;
                            return i && i(r) || r
                        }
                    }
                },
                u = c,
                d = n("5d22"),
                h = Object(d["a"])(u, a, r, !1, null, null, null);
            e["a"] = h.exports
        },
        "246e": function(t, e, n) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("el-input", {
                        ref: "imei-search",
                        attrs: {
                            clearable: "",
                            placeholder: t.placeholder ? t.placeholder : "IMEI"
                        },
                        nativeOn: {
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.handleEnter(0)
                            }
                        },
                        model: {
                            value: t.imei,
                            callback: function(e) {
                                t.imei = e
                            },
                            expression: "imei"
                        }
                    })
                },
                r = [],
                i = n("4838"),
                s = n.n(i);
            n("2934");

            function o(t, e, n, a, r, i, s) {
                try {
                    var o = t[i](s),
                        l = o.value
                } catch (c) {
                    return void n(c)
                }
                o.done ? e(l) : Promise.resolve(l).then(a, r)
            }

            function l(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(a, r) {
                        var i = t.apply(e, n);

                        function s(t) {
                            o(i, a, r, s, l, "next", t)
                        }

                        function l(t) {
                            o(i, a, r, s, l, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }
            var c = {
                    name: "ImeiSearch",
                    props: {
                        value: [String],
                        placeholder: [String],
                        focus: [Boolean],
                        searchType: [Number]
                    },
                    data: function() {
                        return {
                            imei: this.value
                        }
                    },
                    watch: {
                        value: function(t) {
                            this.imei = t
                        },
                        imei: function(t) {
                            this.$emit("input", t)
                        }
                    },
                    mounted: function() {
                        this.focus && this.$refs["imei-search"].focus()
                    },
                    methods: {
                        select: function() {
                            this.$refs["imei-search"].select()
                        },
                        handleEnter: function() {
                            var t = l(s.a.mark((function t(e) {
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            "#" == this.imei.substr(0, 1) ? (this.imei = this.imei.substr(1), this.handleEnter(1)) : (this.$emit("input", this.imei), this.$emit("update:searchType", e), this.$emit("done", {}));
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }
                },
                u = c,
                d = n("5d22"),
                h = Object(d["a"])(u, a, r, !1, null, "50352f57", null);
            e["a"] = h.exports
        },
        "271c": function(t, e, n) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("el-popover", {
                        attrs: {
                            placement: "right",
                            width: "200",
                            trigger: "hover"
                        }
                    }, [n("el-timeline", [t._l(t.value, (function(e, a) {
                        return [e.finished_time ? n("el-timeline-item", {
                            key: a + "2",
                            attrs: {
                                timestamp: e.finished_time,
                                placement: "top"
                            }
                        }, [t._v(t._s("receive" == a ? "分发接收" : t.getNodeName(a) + "完成"))]) : t._e(), t._v(" "), e.receive_time && "0000-00-00 00:00:00" != e.receive_time ? n("el-timeline-item", {
                            key: a + "1",
                            attrs: {
                                timestamp: e.receive_time,
                                placement: "top"
                            }
                        }, [t._v(t._s("receive" == a ? "收货" : t.getNodeName(a) + "接收"))]) : t._e()]
                    }))], 2), t._v(" "), n("el-timeline", {
                        attrs: {
                            slot: "reference"
                        },
                        slot: "reference"
                    }, [Object.keys(t.value).length > 0 && t.value[Object.keys(t.value)[0]].finished_time ? n("el-timeline-item", {
                        attrs: {
                            timestamp: t.value[Object.keys(t.value)[0]].finished_time,
                            placement: "top"
                        }
                    }, [t._v(t._s("receive" == Object.keys(t.value)[0] ? "分发接收" : t.getNodeName(Object.keys(t.value)[0]) + "完成"))]) : t._e(), t._v(" "), Object.keys(t.value).length > 0 && t.value[Object.keys(t.value)[0]].receive_time && "0000-00-00 00:00:00" != t.value[Object.keys(t.value)[0]].receive_time ? n("el-timeline-item", {
                        attrs: {
                            timestamp: t.value[Object.keys(t.value)[0]].receive_time,
                            placement: "top"
                        }
                    }, [t._v(t._s("receive" == Object.keys(t.value)[0] ? "收货" : t.getNodeName(Object.keys(t.value)[0]) + "接收"))]) : t._e()], 1)], 1)], 1)
                },
                r = [],
                i = {
                    name: "ComponentOperationTime",
                    props: {
                        value: {
                            type: Object,
                            default: {}
                        }
                    },
                    data: function() {
                        return {
                            list: []
                        }
                    },
                    mounted: function() {},
                    methods: {
                        getNodeName: function(t) {
                            var e = "未知";
                            switch (t) {
                                case "receive":
                                    e = "分发";
                                    break;
                                case "input":
                                    e = "录入";
                                    break;
                                case "check":
                                    e = "质检";
                                    break;
                                case "re_check":
                                    e = "复检";
                                    break;
                                case "edit":
                                    e = "编辑";
                                    break;
                                case "up_shift":
                                    e = "上架";
                                    break
                            }
                            return e
                        }
                    }
                },
                s = i,
                o = (n("782f"), n("5d22")),
                l = Object(o["a"])(s, a, r, !1, null, "fcda66c6", null);
            e["a"] = l.exports
        },
        "2a67": function(t, e, n) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            "collapse-tags": "",
                            multiple: "",
                            placeholder: t.placeholder,
                            disabled: t.disabled
                        },
                        on: {
                            change: t.handleChange
                        },
                        model: {
                            value: t.area_ids,
                            callback: function(e) {
                                t.area_ids = e
                            },
                            expression: "area_ids"
                        }
                    }, t._l(t.dict.areas, (function(t, e) {
                        return n("el-option", {
                            key: e,
                            attrs: {
                                label: t,
                                value: e
                            }
                        })
                    })), 1)
                },
                r = [],
                i = n("4838"),
                s = n.n(i),
                o = n("2934");

            function l(t, e, n, a, r, i, s) {
                try {
                    var o = t[i](s),
                        l = o.value
                } catch (c) {
                    return void n(c)
                }
                o.done ? e(l) : Promise.resolve(l).then(a, r)
            }

            function c(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(a, r) {
                        var i = t.apply(e, n);

                        function s(t) {
                            l(i, a, r, s, o, "next", t)
                        }

                        function o(t) {
                            l(i, a, r, s, o, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }
            var u = {
                    name: "ComponentAreas",
                    props: {
                        value: [Array, Number, String],
                        placeholder: {
                            type: String,
                            default: "区域信息"
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            area_ids: null,
                            dict: {
                                areas: []
                            }
                        }
                    },
                    watch: {
                        value: function(t) {
                            this.area_ids = t
                        }
                    },
                    mounted: function() {
                        this.getAreas()
                    },
                    methods: {
                        getAreas: function() {
                            var t = c(s.a.mark((function t() {
                                var e;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(o["c"])();
                                        case 2:
                                            e = t.sent, this.dict.areas = e.data;
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
                        handleChange: function(t) {
                            this.$emit("input", t), this.$emit("change", t)
                        }
                    }
                },
                d = u,
                h = n("5d22"),
                p = Object(h["a"])(d, a, r, !1, null, "ab8919cc", null);
            e["a"] = p.exports
        },
        3067: function(t, e, n) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            "collapse-tags": "",
                            multiple: "",
                            placeholder: t.placeholder,
                            disabled: t.disabled
                        },
                        on: {
                            change: t.handleChange
                        },
                        model: {
                            value: t.error_type_ids,
                            callback: function(e) {
                                t.error_type_ids = e
                            },
                            expression: "error_type_ids"
                        }
                    }, t._l(t.dict.errTypes, (function(t, e) {
                        return n("el-option", {
                            key: e,
                            attrs: {
                                label: t.name,
                                value: t.id
                            }
                        })
                    })), 1)
                },
                r = [],
                i = n("4838"),
                s = n.n(i),
                o = n("98de");

            function l(t, e, n, a, r, i, s) {
                try {
                    var o = t[i](s),
                        l = o.value
                } catch (c) {
                    return void n(c)
                }
                o.done ? e(l) : Promise.resolve(l).then(a, r)
            }

            function c(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(a, r) {
                        var i = t.apply(e, n);

                        function s(t) {
                            l(i, a, r, s, o, "next", t)
                        }

                        function o(t) {
                            l(i, a, r, s, o, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }
            var u = {
                    name: "ComponentErrorType",
                    props: {
                        value: [Array, Number, String],
                        placeholder: {
                            type: String,
                            default: "故障类型"
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            error_type_ids: null,
                            dict: {
                                errTypes: []
                            }
                        }
                    },
                    watch: {
                        value: function(t) {
                            this.error_type_ids = t
                        }
                    },
                    mounted: function() {
                        this.getDict()
                    },
                    methods: {
                        getDict: function() {
                            var t = c(s.a.mark((function t() {
                                var e;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(o["d"])();
                                        case 2:
                                            e = t.sent, this.dict.errTypes = e.data;
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
                        handleChange: function(t) {
                            this.$emit("input", t), this.$emit("change", t)
                        }
                    }
                },
                d = u,
                h = n("5d22"),
                p = Object(h["a"])(d, a, r, !1, null, "08b0b780", null);
            e["a"] = p.exports
        },
        "37ba": function(t, e, n) {},
        "3a43": function(t, e, n) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("el-row", {
                        attrs: {
                            gutter: 20
                        }
                    }, [n("el-col", {
                        staticClass: "today",
                        attrs: {
                            span: 12
                        }
                    }, [n("el-row", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            gutter: 10
                        }
                    }, [n("el-col", {
                        attrs: {
                            span: 8
                        }
                    }, [n("el-card", {
                        staticClass: "today-item"
                    }, [n("svg-icon", {
                        attrs: {
                            "icon-class": "workbench-in"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "card-description"
                    }, [n("div", {
                        staticClass: "card-text"
                    }, [t._v("今日接收")]), t._v(" "), n("span", {
                        staticClass: "card-num"
                    }, [t._v(t._s(t.todays.receive_num))])])], 1)], 1), t._v(" "), n("el-col", {
                        attrs: {
                            span: 8
                        }
                    }, [n("div", {
                        staticStyle: {
                            width: "100%"
                        },
                        on: {
                            click: t.handleClickLink
                        }
                    }, [n("el-card", {
                        staticClass: "today-item",
                        staticStyle: {
                            cursor: "pointer"
                        }
                    }, [n("svg-icon", {
                        attrs: {
                            "icon-class": "workbench-timeout"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "card-description"
                    }, [n("div", {
                        staticClass: "card-text"
                    }, [t._v("今日" + t._s(t.title))]), t._v(" "), n("span", {
                        staticClass: "card-num"
                    }, [t._v(t._s("质检" == t.title ? t.todays.deal_num : t.todays.effective_num))])])], 1)], 1)]), t._v(" "), n("el-col", {
                        attrs: {
                            span: 8
                        }
                    }, [n("el-card", {
                        staticClass: "today-item"
                    }, [n("svg-icon", {
                        attrs: {
                            "icon-class": "workbench-allot"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "card-description"
                    }, [n("div", {
                        staticClass: "card-text"
                    }, [t._v("今日超时")]), t._v(" "), n("span", {
                        staticClass: "card-num"
                    }, [t._v(t._s(t.todays.time_out_num))])])], 1)], 1)], 1), t._v(" "), n("el-row", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            gutter: 10
                        }
                    }, [n("el-col", {
                        attrs: {
                            span: 8
                        }
                    }, [n("div", {
                        staticStyle: {
                            width: "100%"
                        },
                        on: {
                            click: t.handleClickAbnormal
                        }
                    }, [n("el-card", {
                        staticClass: "today-item",
                        staticStyle: {
                            cursor: "pointer"
                        }
                    }, [n("svg-icon", {
                        attrs: {
                            "icon-class": "workbench-exception"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "card-description"
                    }, [n("div", {
                        staticClass: "card-text"
                    }, [t._v("今日异常")]), t._v(" "), n("span", {
                        staticClass: "card-num"
                    }, [t._v(t._s(t.todays.abnormal_num))])])], 1)], 1)]), t._v(" "), n("el-col", {
                        attrs: {
                            span: 8
                        }
                    }, [n("div", {
                        staticStyle: {
                            width: "100%"
                        }
                    }, [n("el-card", {
                        staticClass: "today-item"
                    }, [n("svg-icon", {
                        attrs: {
                            "icon-class": "workbench-exception"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "card-description"
                    }, [n("div", {
                        staticClass: "card-text"
                    }, [t._v("今日错误")]), t._v(" "), n("span", {
                        staticClass: "card-num"
                    }, [t._v(t._s(t.todays.error_num))])])], 1)], 1)])], 1)], 1), t._v(" "), n("el-col", {
                        attrs: {
                            span: 12
                        }
                    }, [n("el-card", {
                        staticClass: "week"
                    }, [n("ul", [n("li", [n("svg-icon", {
                        attrs: {
                            "icon-class": "workbench-in"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "title"
                    }, [t._v("本周接收")]), t._v(" "), n("span", {
                        staticClass: "sum"
                    }, [t._v(t._s(t.workbenchList.receive_num))])], 1), t._v(" "), n("li", {
                        staticStyle: {
                            cursor: "pointer"
                        },
                        on: {
                            click: t.handleClickWeek
                        }
                    }, [n("svg-icon", {
                        attrs: {
                            "icon-class": "workbench-in"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "title"
                    }, [t._v("本周" + t._s(t.title))]), t._v(" "), n("span", {
                        staticClass: "sum"
                    }, [t._v(t._s(t.workbenchList.deal_num))])], 1), t._v(" "), n("li", [n("svg-icon", {
                        attrs: {
                            "icon-class": "workbench-in"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "title"
                    }, [t._v("本周超时")]), t._v(" "), n("span", {
                        staticClass: "sum"
                    }, [t._v(t._s(t.workbenchList.time_out_num))])], 1), t._v(" "), n("li", {
                        staticStyle: {
                            cursor: "pointer"
                        },
                        on: {
                            click: t.handleClickWeekAbnormal
                        }
                    }, [n("svg-icon", {
                        attrs: {
                            "icon-class": "workbench-in"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "title"
                    }, [t._v("本周异常")]), t._v(" "), n("span", {
                        staticClass: "sum"
                    }, [t._v(t._s(t.workbenchList.abnormal_num))])], 1), t._v(" "), n("li", [n("svg-icon", {
                        attrs: {
                            "icon-class": "workbench-in"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "title"
                    }, [t._v("本周错误")]), t._v(" "), n("span", {
                        staticClass: "sum"
                    }, [t._v(t._s(t.workbenchList.error_num))])], 1)])])], 1)], 1), t._v("\n  " + t._s(t.rankingData.title) + "\n  "), n("el-row", [n("el-col", {
                        attrs: {
                            span: 12
                        }
                    }, [n("div", {
                        staticClass: "typeIn-chart",
                        attrs: {
                            id: "typeIn"
                        }
                    })]), t._v(" "), n("el-col", {
                        attrs: {
                            span: 12
                        }
                    }, [n("el-tabs", {
                        staticClass: "ranking-time",
                        attrs: {
                            type: "card"
                        },
                        on: {
                            "tab-click": t.handleClick
                        },
                        model: {
                            value: t.activeName,
                            callback: function(e) {
                                t.activeName = e
                            },
                            expression: "activeName"
                        }
                    }, [n("el-tab-pane", {
                        attrs: {
                            label: "今日",
                            name: "first"
                        }
                    }), t._v(" "), n("el-tab-pane", {
                        attrs: {
                            label: "1周",
                            name: "second"
                        }
                    }), t._v(" "), n("el-tab-pane", {
                        attrs: {
                            label: "1月",
                            name: "third"
                        }
                    })], 1), t._v(" "), n("div", {
                        staticClass: "ranking-chart",
                        attrs: {
                            id: "ranking"
                        }
                    })], 1)], 1)], 1)
                },
                r = [],
                i = n("43a0");
            n("679c"), n("6722"), n("58f8"), n("f035"), n("f4b1");
            var s = {
                    name: "Workbench",
                    props: ["title", "today", "workbenchLists", "inputAmounts", "rankingDatas", "link"],
                    data: function() {
                        return {
                            titles: this.title,
                            todays: this.today,
                            workbenchList: this.workbenchLists,
                            inputAmount: this.inputAmounts,
                            activeName: "first",
                            rankingData: this.rankingDatas,
                            linkData: this.link
                        }
                    },
                    mounted: function() {
                        this.inputAmount.time.length > 0 && this.init(), this.rankingData.name.length > 0 && this.ranking()
                    },
                    methods: {
                        handleClickLink: function() {
                            this.$router.push({
                                name: this.linkData.name,
                                query: {
                                    time: this.linkData.time
                                }
                            })
                        },
                        handleClickAbnormal: function() {
                            this.$router.push({
                                name: this.linkData.abnormal,
                                query: {
                                    time: this.linkData.time
                                }
                            })
                        },
                        handleClickWeek: function() {
                            this.$router.push({
                                name: this.linkData.weekdayLink,
                                query: {
                                    time: this.linkData.weekday
                                }
                            })
                        },
                        handleClickWeekAbnormal: function() {
                            this.$router.push({
                                name: this.linkData.abnormal,
                                query: {
                                    week: this.linkData.weekday
                                }
                            })
                        },
                        handleClick: function(t, e) {
                            "first" == this.activeName ? this.$emit("handleClickTab", 0) : "second" == this.activeName ? this.$emit("handleClickTab", 1) : this.$emit("handleClickTab", 2)
                        },
                        init: function() {
                            var t = i.init(document.getElementById("typeIn"));
                            t.setOption({
                                title: {
                                    text: this.title + "量"
                                },
                                tooltip: {
                                    trigger: "axis"
                                },
                                legend: {
                                    data: ["正常", "异常"]
                                },
                                grid: {
                                    left: "3%",
                                    right: "6%",
                                    bottom: "3%",
                                    containLabel: !0
                                },
                                xAxis: {
                                    type: "category",
                                    boundaryGap: !1,
                                    data: this.inputAmount.time
                                },
                                yAxis: {
                                    type: "value",
                                    minInterval: 1
                                },
                                series: [{
                                    name: "正常",
                                    type: "line",
                                    itemStyle: {
                                        normal: {
                                            color: "#188df0"
                                        }
                                    },
                                    data: this.inputAmount.normal
                                }, {
                                    name: "异常",
                                    type: "line",
                                    itemStyle: {
                                        normal: {
                                            color: "#F56C6C"
                                        }
                                    },
                                    data: this.inputAmount.abnormal
                                }]
                            })
                        },
                        ranking: function() {
                            var t = i.init(document.getElementById("ranking"));
                            t.setOption({
                                title: {
                                    text: this.title + "量排名"
                                },
                                tooltip: {
                                    trigger: "axis",
                                    axisPointer: {
                                        type: "shadow"
                                    }
                                },
                                grid: {
                                    left: "3%",
                                    right: "4%",
                                    bottom: "3%",
                                    containLabel: !0
                                },
                                xAxis: {
                                    type: "value",
                                    minInterval: 1,
                                    boundaryGap: [0, .01]
                                },
                                yAxis: {
                                    type: "category",
                                    data: this.rankingData.name
                                },
                                series: [{
                                    name: "",
                                    type: "bar",
                                    itemStyle: {
                                        normal: {
                                            color: "#188df0"
                                        }
                                    },
                                    data: this.rankingData.dataList
                                }]
                            })
                        }
                    },
                    watch: {
                        rankingData: {
                            handler: function(t) {
                                this.$set(this, "rankingData", t), this.ranking()
                            },
                            deep: !0
                        }
                    }
                },
                o = s,
                l = (n("ae7e"), n("5d22")),
                c = Object(l["a"])(o, a, r, !1, null, "01348644", null);
            e["a"] = c.exports
        },
        "44bf": function(t, e, n) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {}, [n("div", {
                        staticClass: "title"
                    }, [n("h1", [t._v("找靓机异常单")]), t._v(" "), n("el-button", {
                        directives: [{
                            name: "print",
                            rawName: "v-print",
                            value: "#print-container",
                            expression: "'#print-container'"
                        }],
                        staticClass: "print",
                        attrs: {
                            type: "primary"
                        }
                    }, [t._v("打印")]), t._v(" "), n("el-button", {
                        directives: [{
                            name: "print",
                            rawName: "v-print",
                            value: "#barcode-container",
                            expression: "'#barcode-container'"
                        }],
                        staticClass: "print",
                        staticStyle: {
                            right: "130px"
                        },
                        attrs: {
                            type: "primary"
                        }
                    }, [t._v("打印条码")])], 1), t._v(" "), n("div", {
                        attrs: {
                            id: "print-container"
                        }
                    }, t._l(t.abnormalData, (function(e, a) {
                        return n("div", {
                            key: a
                        }, [n("div", {
                            staticClass: "barcode-box"
                        }, [n("img", {
                            class: "barcode" + a,
                            staticStyle: {
                                width: "68mm",
                                height: "28mm"
                            }
                        })]), t._v(" "), n("div", {
                            staticClass: "source"
                        }, [t._v("异常来源: " + t._s(e.node.name))]), t._v(" "), n("table", {
                            staticClass: "gridtable",
                            staticStyle: {
                                "border-collapse": "collapse"
                            }
                        }, [t._m(0, !0), t._v(" "), n("tbody", t._l(e.details, (function(a, r) {
                            return n("tr", {
                                key: r
                            }, [n("td", [t._v(t._s(a.type.name))]), t._v(" "), n("td", [t._v(t._s(a.brand.name))]), t._v(" "), n("td", [t._v(t._s(a.model.name))]), t._v(" "), n("td", [t._v(t._s(a.imei))]), t._v(" "), n("td", [t._v(t._s(a.reason_description))]), t._v(" "), n("td", [t._v(t._s(a.remark))]), t._v(" "), n("td", [t._v(t._s(e.create_user.real_name))]), t._v(" "), n("td", [t._v(t._s(a.created_at))]), t._v(" "), n("td", [t._v(t._s(a.cost_price))]), t._v(" "), n("td", [t._v(t._s(a.num))]), t._v(" "), n("td", [t._v(t._s(a.product_cost.purchase_order_no))]), t._v(" "), n("td", [t._v(t._s(a.product_cost.supplier_info.name))])])
                        })), 0)]), t._v(" "), 0 != e.abnormalNum || 0 != e.costTotal ? n("div", {
                            staticClass: "total"
                        }, [t._v("\n        合计: 数量共" + t._s(e.abnormalNum) + "台； 成本价 共" + t._s(e.costTotal) + "元\n      ")]) : t._e()])
                    })), 0), t._v(" "), n("Barcode", {
                        attrs: {
                            id: "barcode-container",
                            data: t.barcodeInfo,
                            line: 4
                        }
                    })], 1)
                },
                r = [function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("thead", [n("tr", [n("th", {
                        attrs: {
                            width: "8%"
                        }
                    }, [t._v("类目")]), t._v(" "), n("th", {
                        attrs: {
                            width: "8%"
                        }
                    }, [t._v("品牌")]), t._v(" "), n("th", {
                        attrs: {
                            width: "8%"
                        }
                    }, [t._v("型号")]), t._v(" "), n("th", {
                        attrs: {
                            width: "9%"
                        }
                    }, [t._v("IMEI")]), t._v(" "), n("th", {
                        attrs: {
                            width: "9%"
                        }
                    }, [t._v("异常原因")]), t._v(" "), n("th", {
                        attrs: {
                            width: "9%"
                        }
                    }, [t._v("异常描述")]), t._v(" "), n("th", {
                        attrs: {
                            width: "9%"
                        }
                    }, [t._v("登记人")]), t._v(" "), n("th", {
                        attrs: {
                            width: "10%"
                        }
                    }, [t._v("登记时间")]), t._v(" "), n("th", {
                        attrs: {
                            width: "8%"
                        }
                    }, [t._v("成本")]), t._v(" "), n("th", {
                        attrs: {
                            width: "5%"
                        }
                    }, [t._v("异常数量")]), t._v(" "), n("th", {
                        attrs: {
                            width: "10%"
                        }
                    }, [t._v("采购单号")]), t._v(" "), n("th", {
                        attrs: {
                            width: "10%"
                        }
                    }, [t._v("供应商")])])])
                }],
                i = n("6d8f");

            function s(t, e) {
                var n;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = o(t)) || e && t && "number" === typeof t.length) {
                        n && (t = n);
                        var a = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return a >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[a++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, s = !0,
                    l = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return s = t.done, t
                    },
                    e: function(t) {
                        l = !0, i = t
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (l) throw i
                        }
                    }
                }
            }

            function o(t, e) {
                if (t) {
                    if ("string" === typeof t) return l(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0
                }
            }

            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a
            }
            var c = {
                    name: "",
                    components: {
                        Barcode: i["a"]
                    },
                    props: {
                        abnormal: Array
                    },
                    data: function() {
                        return {
                            abnormalData: this.abnormal,
                            barcodeInfo: []
                        }
                    },
                    mounted: function() {
                        this.getData()
                    },
                    methods: {
                        getData: function() {
                            for (var t = 0; t < this.abnormalData.length; t++) {
                                var e, n = 0,
                                    a = 0,
                                    r = s(this.abnormalData[t].details);
                                try {
                                    for (r.s(); !(e = r.n()).done;) {
                                        var i = e.value;
                                        n += Number(i.cost_price), a += Number(i.num)
                                    }
                                } catch (l) {
                                    r.e(l)
                                } finally {
                                    r.f()
                                }
                                this.$set(this.abnormalData[t], "costTotal", n), this.$set(this.abnormalData[t], "abnormalNum", a), this.getList(t, this.abnormalData[t].abnormal_report_order_no);
                                var o = {
                                    code: this.abnormalData[t].abnormal_report_order_no,
                                    title: this.abnormalData[t].node.name + " 异常单（".concat(this.abnormalData[t].abnormalNum, "台）<br/>").concat((new Date).toLocaleString(), "</br>").concat(this.abnormalData[t].details[0].product_cost.supplier_info.name)
                                };
                                this.barcodeInfo.push(o)
                            }
                        },
                        getList: function(t, e) {
                            this.$nextTick((function() {
                                var a = n("fba3");
                                a(".barcode" + t, e, {
                                    displayValue: !0
                                })
                            }))
                        }
                    }
                },
                u = c,
                d = (n("79e0"), n("5d22")),
                h = Object(d["a"])(u, a, r, !1, null, "4716ddf6", null);
            e["a"] = h.exports
        },
        "5e61": function(t, e, n) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            disabled: t.disabled,
                            placeholder: t.placeholder,
                            multiple: t.multiple
                        },
                        on: {
                            change: t.handleChange
                        },
                        model: {
                            value: t.nodeId,
                            callback: function(e) {
                                t.nodeId = e
                            },
                            expression: "nodeId"
                        }
                    }, t._l(t.dict.nodes, (function(t) {
                        return n("el-option", {
                            key: t.id,
                            attrs: {
                                label: t.name,
                                value: t.id
                            }
                        })
                    })), 1)
                },
                r = [],
                i = n("4838"),
                s = n.n(i),
                o = n("2934");

            function l(t, e) {
                var n;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = c(t)) || e && t && "number" === typeof t.length) {
                        n && (t = n);
                        var a = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return a >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[a++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, s = !0,
                    o = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return s = t.done, t
                    },
                    e: function(t) {
                        o = !0, i = t
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                }
            }

            function c(t, e) {
                if (t) {
                    if ("string" === typeof t) return u(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                }
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a
            }

            function d(t, e, n, a, r, i, s) {
                try {
                    var o = t[i](s),
                        l = o.value
                } catch (c) {
                    return void n(c)
                }
                o.done ? e(l) : Promise.resolve(l).then(a, r)
            }

            function h(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(a, r) {
                        var i = t.apply(e, n);

                        function s(t) {
                            d(i, a, r, s, o, "next", t)
                        }

                        function o(t) {
                            d(i, a, r, s, o, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }
            var p = {
                    name: "ComponentNodes",
                    props: {
                        value: [Array, Number, String],
                        placeholder: {
                            type: String,
                            default: null
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        },
                        isAll: [Number, String],
                        multiple: {
                            type: Boolean,
                            default: !1
                        },
                        hideIds: {
                            type: Array,
                            default: []
                        }
                    },
                    data: function() {
                        return {
                            nodeId: null,
                            dict: {
                                nodes: []
                            }
                        }
                    },
                    watch: {
                        value: function(t) {
                            this.nodeId = t
                        }
                    },
                    mounted: function() {
                        this.getNodes()
                    },
                    methods: {
                        getNodes: function() {
                            var t = h(s.a.mark((function t() {
                                var e, n, a, r, i;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(o["j"])();
                                        case 2:
                                            e = t.sent, n = [], a = l(e.data);
                                            try {
                                                for (a.s(); !(r = a.n()).done;) i = r.value, this.hideIds && -1 == this.hideIds.indexOf(i.id) && n.push(i)
                                            } catch (s) {
                                                a.e(s)
                                            } finally {
                                                a.f()
                                            }
                                            this.dict.nodes = n;
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
                        handleChange: function(t) {
                            this.$emit("input", t)
                        }
                    }
                },
                f = p,
                m = n("5d22"),
                v = Object(m["a"])(f, a, r, !1, null, "2284d7bb", null);
            e["a"] = v.exports
        },
        6533: function(t, e, n) {
            "use strict";
            n("05cb")
        },
        "6d8f": function(t, e, n) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticStyle: {
                            display: "none"
                        }
                    }, [n("div", {
                        attrs: {
                            id: t.id
                        }
                    }, [n("div", {
                        staticStyle: {
                            width: "50mm",
                            display: "flex",
                            "flex-direction": "column",
                            "align-items": "center",
                            "justify-content": "center",
                            margin: "auto"
                        }
                    }, t._l(t.barcodeInfo, (function(e, a) {
                        return n("div", {
                            key: a,
                            staticStyle: {
                                width: "50mm",
                                height: "24.1mm",
                                "text-align": "center",
                                "font-size": "10px",
                                display: "flex",
                                "align-items": "center",
                                "justify-content": "flex-start",
                                "flex-direction": "column",
                                overflow: "hidden"
                            },
                            style: {
                                "margin-bottom": a + 1 == t.barcodeInfo.length ? "0px" : "0.8mm"
                            }
                        }, [e.num ? n("div", {
                            staticStyle: {
                                display: "flex",
                                height: "12mm"
                            }
                        }, [n("img", {
                            staticStyle: {
                                width: "48mm",
                                height: "12mm"
                            },
                            attrs: {
                                id: "barcode" + a
                            }
                        })]) : n("img", {
                            staticStyle: {
                                width: "48mm",
                                height: "13mm"
                            },
                            style: {
                                height: (t.line, "13mm")
                            },
                            attrs: {
                                id: "barcode" + a
                            }
                        }), t._v(" "), n("div", {
                            staticStyle: {
                                display: "flex",
                                "justify-content": "center",
                                transform: "scale(0.8)",
                                width: "120%",
                                "transform-origin": "top"
                            },
                            style: {
                                transform: 4 == t.line || e.title.replace(/[^\x00-\xff]/g, "01").length > 44 ? "scale(0.8)" : "scale(1)",
                                width: 4 == t.line || e.title.replace(/[^\x00-\xff]/g, "01").length > 44 ? "120%" : "100%"
                            }
                        }, [e.num ? n("div", {
                            staticStyle: {
                                width: "10mm",
                                height: "20mm",
                                display: "inline-block",
                                border: "0.5mm solid",
                                "border-radius": "50%",
                                "line-height": "9mm"
                            }
                        }, [t._v(t._s(e.num))]) : t._e(), t._v(" "), n("div", {
                            style: {
                                width: e.num ? "calc(100% - 10mm)" : "100%"
                            }
                        }, [n("div", {
                            staticClass: "imei"
                        }, [t._v(t._s(e.code))]), t._v(" "), n("div", {
                            ref: "title" + a,
                            refInFor: !0,
                            staticClass: "name",
                            staticStyle: {
                                padding: "0",
                                overflow: "hidden"
                            },
                            domProps: {
                                innerHTML: t._s(e.title)
                            }
                        }), t._v(" "), n("div", {
                            staticStyle: {
                                color: "red",
                                "font-size": "15px"
                            }
                        }, [t._v(t._s(e.business_name))])])])])
                    })), 0)])])
                },
                r = [],
                i = n("fba3"),
                s = {
                    props: {
                        data: [Array],
                        id: [String],
                        line: [Number]
                    },
                    data: function() {
                        return {
                            barcodeInfo: this.data
                        }
                    },
                    watch: {
                        data: function(t) {
                            this.barcodeInfo = t, this.initBarcode()
                        }
                    },
                    mounted: function() {
                        this.initBarcode()
                    },
                    methods: {
                        initBarcode: function() {
                            for (var t = this, e = function(e) {
                                    var n = t.barcodeInfo[e];
                                    t.$nextTick((function() {
                                        console.log("获取量：", n.code);
                                        try {
                                            i("#barcode" + e, null, {
                                                displayValue: !1,
                                                width: 1
                                            }), i("#barcode" + e, n.code, {
                                                displayValue: !1,
                                                width: 1
                                            }), console.log("啊啊啊啊1:", n.title.replace(/[^\x00-\xff]/g, "01").length)
                                        } catch (t) {
                                            console.log(t)
                                        }
                                    }))
                                }, n = 0; n < this.barcodeInfo.length; n++) e(n)
                        }
                    }
                },
                o = s,
                l = (n("d5c5"), n("5d22")),
                c = Object(l["a"])(o, a, r, !1, null, "6c6a690c", null);
            e["a"] = c.exports
        },
        "782f": function(t, e, n) {
            "use strict";
            n("37ba")
        },
        "79e0": function(t, e, n) {
            "use strict";
            n("bcbb")
        },
        "7c72": function(t, e, n) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {}, [n("div", {
                        staticClass: "title"
                    }, [n("h1", [t._v("找靓机流转单")]), t._v(" "), n("el-button", {
                        directives: [{
                            name: "print",
                            rawName: "v-print",
                            value: "#barcode-container",
                            expression: "'#barcode-container'"
                        }],
                        staticClass: "print",
                        attrs: {
                            type: "primary"
                        }
                    }, [t._v("打印")])], 1), t._v(" "), n("div", {
                        attrs: {
                            id: "print-flow"
                        }
                    }, t._l(t.pageData, (function(e, a) {
                        return n("div", {
                            key: a
                        }, [n("div", {
                            staticClass: "barcode-box"
                        }, [n("img", {
                            class: "order" + a,
                            staticStyle: {
                                width: "68mm",
                                height: "28mm"
                            }
                        })]), t._v(" "), n("div", {
                            staticClass: "info"
                        }, [n("el-row", {
                            attrs: {
                                gutter: 30
                            }
                        }, [n("el-col", {
                            attrs: {
                                span: 6
                            }
                        }, [t._v("创建时间:")]), t._v(" "), n("el-col", {
                            attrs: {
                                span: 6
                            }
                        }, [t._v(t._s(e.transfer_order.created_at))]), t._v(" "), n("el-col", {
                            attrs: {
                                span: 6
                            }
                        }, [t._v("流转步骤:")]), t._v(" "), n("el-col", {
                            attrs: {
                                span: 6
                            }
                        }, [t._v(t._s(e.transfer_order.source_node.name) + "组--\x3e " + t._s(e.transfer_order.to_node.name) + "组")])], 1), t._v(" "), n("el-row", {
                            attrs: {
                                gutter: 20
                            }
                        }, [n("el-col", {
                            attrs: {
                                span: 6
                            }
                        }, [t._v("分配人:")]), t._v(" "), n("el-col", {
                            attrs: {
                                span: 6
                            }
                        }, [e.transfer_order.assign_user ? n("div", [t._v(t._s(e.transfer_order.assign_user.real_name))]) : t._e()]), t._v(" "), n("el-col", {
                            attrs: {
                                span: 6
                            }
                        }, [t._v("分配时间:")]), t._v(" "), n("el-col", {
                            attrs: {
                                span: 6
                            }
                        }, [t._v(t._s(e.transfer_order.assign_at))])], 1), t._v(" "), n("el-row", {
                            attrs: {
                                gutter: 20
                            }
                        }, [n("el-col", {
                            attrs: {
                                span: 6
                            }
                        }, [t._v("分配至:")]), t._v(" "), n("el-col", {
                            attrs: {
                                span: 6
                            }
                        }, [n("span", [t._v(t._s(e.transfer_order.to_node.name) + "组")]), t._v(" "), e.transfer_order.receive_user ? n("span", [t._v("--\x3e" + t._s(e.transfer_order.receive_user.real_name))]) : t._e()]), t._v(" "), n("el-col", {
                            attrs: {
                                span: 6
                            }
                        }), t._v(" "), n("el-col", {
                            attrs: {
                                span: 6
                            }
                        })], 1)], 1), t._v(" "), n("table", {
                            staticClass: "gridtable",
                            staticStyle: {
                                "border-collapse": "collapse"
                            }
                        }, [t._m(0, !0), t._v(" "), n("tbody", t._l(e.products, (function(e, a) {
                            return n("tr", {
                                key: a
                            }, [n("td", [t._v(t._s(e.type.name))]), t._v(" "), n("td", t._l(e.sales_properties, (function(e, a) {
                                return n("span", {
                                    key: a
                                }, [t._v(t._s(e.pv_name) + ";")])
                            })), 0), t._v(" "), n("td", [t._v(t._s(e.imei))]), t._v(" "), n("td", t._l(e.sales_properties, (function(e, a) {
                                return n("div", {
                                    key: a
                                }, [12 == e.pn_id ? n("span", [t._v(t._s(e.pv_name))]) : t._e()])
                            })), 0), t._v(" "), n("td", [t._v(t._s(e.product_cost.cost))]), t._v(" "), n("td", [t._v(t._s(e.num))])])
                        })), 0)]), t._v(" "), 0 != e.orderNum || 0 != e.costTotal ? n("div", {
                            staticClass: "total"
                        }, [t._v("合计: 数量共" + t._s(e.orderNum) + "台； 成本价 共" + t._s(e.costTotal) + "元")]) : t._e()])
                    })), 0), t._v(" "), n("Barcode", {
                        attrs: {
                            id: "barcode-container",
                            data: t.barcodeInfo
                        }
                    })], 1)
                },
                r = [function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("thead", [n("tr", [n("th", [t._v("型号")]), t._v(" "), n("th", [t._v("参数")]), t._v(" "), n("th", [t._v("IMEI")]), t._v(" "), n("th", [t._v("成色")]), t._v(" "), n("th", [t._v("成本价")]), t._v(" "), n("th", [t._v("数量")])])])
                }],
                i = n("6d8f");

            function s(t, e) {
                var n;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = o(t)) || e && t && "number" === typeof t.length) {
                        n && (t = n);
                        var a = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return a >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[a++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, s = !0,
                    l = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return s = t.done, t
                    },
                    e: function(t) {
                        l = !0, i = t
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (l) throw i
                        }
                    }
                }
            }

            function o(t, e) {
                if (t) {
                    if ("string" === typeof t) return l(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0
                }
            }

            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a
            }
            var c = {
                    components: {
                        Barcode: i["a"]
                    },
                    props: {
                        flowOrderData: Array
                    },
                    data: function() {
                        return {
                            pageData: this.flowOrderData,
                            barcodeInfo: []
                        }
                    },
                    mounted: function() {
                        this.getData()
                    },
                    methods: {
                        getData: function() {
                            for (var t = 0; t < this.pageData.length; t++) {
                                console.log(this.pageData);
                                var e, n = 0,
                                    a = 0,
                                    r = s(this.pageData[t].products);
                                try {
                                    for (r.s(); !(e = r.n()).done;) {
                                        var i = e.value;
                                        i.imei && (i.num = 1), n += Number(i.product_cost.cost) * Number(i.num), a += Number(i.num)
                                    }
                                } catch (l) {
                                    r.e(l)
                                } finally {
                                    r.f()
                                }
                                this.$set(this.pageData[t], "costTotal", n), this.$set(this.pageData[t], "orderNum", a), this.getList(t, this.pageData[t].transfer_order.transfer_order_no);
                                var o = {
                                    num: this.pageData[t].transfer_order.sort_no,
                                    code: this.pageData[t].transfer_order.transfer_order_no,
                                    title: this.pageData[t].transfer_order.source_node.name + "---\x3e" + this.pageData[t].transfer_order.to_node.name + "（" + this.pageData[t].transfer_order.area_name + this.pageData[t].orderNum + "台）<br/>" + (new Date).toLocaleString()
                                };
                                this.barcodeInfo.push(o)
                            }
                        },
                        getList: function(t, e) {
                            this.$nextTick((function() {
                                var a = n("fba3");
                                a(".order" + t, e, {
                                    displayValue: !0
                                })
                            }))
                        }
                    }
                },
                u = c,
                d = (n("6533"), n("5d22")),
                h = Object(d["a"])(u, a, r, !1, null, "6056142b", null);
            e["a"] = h.exports
        },
        "7ffd": function(t, e, n) {
            "use strict";

            function a(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function r(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(n), !0).forEach((function(e) {
                        i(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function i(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            e["a"] = {
                data: function() {
                    return {
                        filter: JSON.parse(JSON.stringify(this.$route.query)),
                        page: 1
                    }
                },
                watch: {
                    "$route.query": {
                        handler: function(t) {
                            this.getList(), this.page = t.page ? +t.page : 1, this.filter = JSON.parse(JSON.stringify(t))
                        },
                        deep: !0,
                        immediate: !0
                    }
                },
                methods: {
                    handleCurrentChange: function(t) {
                        this.$router.push({
                            query: r(r({}, this.$route.query), {}, {
                                page: t
                            })
                        })
                    }
                }
            }
        },
        "8b75": function(t, e, n) {
            "use strict";
            n("cd9b")
        },
        aa9b: function(t, e, n) {},
        ab3e: function(t, e, n) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("el-select", t._g(t._b({
                        attrs: {
                            value: t.value
                        },
                        on: {
                            input: function(e) {
                                return t.change(e)
                            }
                        }
                    }, "el-select", t.$attrs, !1), t.$listeners), [t.defaultSelect ? n("el-option", {
                        attrs: {
                            value: ""
                        }
                    }, [t._v(t._s(t.text))]) : t._e(), t._v(" "), t._t("more"), t._v(" "), t._l(t.options, (function(e) {
                        return n("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        }, [t._t("default", null, {
                            item: e
                        })], 2)
                    }))], 2)
                },
                r = [],
                i = {
                    name: "ESelect",
                    props: {
                        options: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        defaultSelect: {
                            type: Boolean,
                            default: !0
                        },
                        text: {
                            type: String,
                            default: "请选择"
                        },
                        value: {
                            type: [String, Number]
                        }
                    },
                    mounted: function() {},
                    methods: {
                        change: function(t) {
                            this.$emit("input", t)
                        }
                    }
                },
                s = i,
                o = n("5d22"),
                l = Object(o["a"])(s, a, r, !1, null, null, null);
            e["a"] = l.exports
        },
        ae7e: function(t, e, n) {
            "use strict";
            n("f82e")
        },
        afbf: function(t, e, n) {
            "use strict";
            n("0ae1")
        },
        b7b8: function(t, e, n) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("el-dialog", {
                        attrs: {
                            title: "收货分配",
                            visible: t.showAssignDialog,
                            "append-to-body": !0,
                            width: "400px",
                            "close-on-click-modal": !1
                        },
                        on: {
                            "update:visible": function(e) {
                                t.showAssignDialog = e
                            },
                            close: function(e) {
                                return t.$emit("update:showDialog", !1)
                            },
                            opened: t.openedDialog
                        }
                    }, [n("el-form", {
                        attrs: {
                            model: t.assignForm,
                            "label-width": "80px"
                        }
                    }, [n("el-form-item", {
                        attrs: {
                            label: "分配至：",
                            prop: "to_node_id"
                        }
                    }, [n("el-select", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            disabled: t.disabledNodeStatus,
                            placeholder: "流程节点",
                            filterable: "",
                            clearable: ""
                        },
                        on: {
                            change: t.nodeChangeHandle
                        },
                        model: {
                            value: t.assignForm.to_node_id,
                            callback: function(e) {
                                t.$set(t.assignForm, "to_node_id", e)
                            },
                            expression: "assignForm.to_node_id"
                        }
                    }, t._l(t.dict.nodes, (function(e) {
                        return n("el-option", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !t.disabledItem || -1 == t.disabledItem.indexOf(e.id),
                                expression: "(!disabledItem) || disabledItem.indexOf(item.id) == -1"
                            }],
                            key: e.id,
                            attrs: {
                                label: e.name,
                                value: e.id
                            }
                        })
                    })), 1)], 1), t._v(" "), n("el-form-item", {
                        staticStyle: {
                            "margin-bottom": "0"
                        },
                        attrs: {
                            label: "组成员：",
                            prop: "by_assign_user_id"
                        }
                    }, [n("userList", {
                        ref: "userList",
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            placeholder: "组成员",
                            multiple: !1,
                            "check-strictly": !0,
                            "dept-id": t.deptId,
                            checked: t.checkedUser
                        },
                        on: {
                            "update:deptId": function(e) {
                                t.deptId = e
                            },
                            "update:dept-id": function(e) {
                                t.deptId = e
                            },
                            "update:checked": function(e) {
                                t.checkedUser = e
                            }
                        },
                        model: {
                            value: t.assignForm.by_assign_user_id,
                            callback: function(e) {
                                t.$set(t.assignForm, "by_assign_user_id", e)
                            },
                            expression: "assignForm.by_assign_user_id"
                        }
                    })], 1), t._v(" "), n("el-form-item", {
                        style: {
                            "margin-bottom": 3 == t.assignForm.to_node_id ? "10px" : 0
                        },
                        attrs: {
                            prop: "by_assign_user_id"
                        }
                    }, t._l(t.hisUser, (function(e) {
                        return n("el-tag", {
                            key: e.id,
                            staticStyle: {
                                "margin-right": "3px",
                                cursor: "pointer"
                            },
                            attrs: {
                                size: "mini",
                                type: "info",
                                effect: "dark"
                            },
                            on: {
                                click: function(n) {
                                    t.assignForm.by_assign_user_id = e.id
                                }
                            }
                        }, [t._v(t._s(e.name))])
                    })), 1)], 1), t._v(" "), n("span", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [n("el-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("update:showDialog", !1)
                            }
                        }
                    }, [t._v("取消")]), t._v(" "), n("el-button", {
                        attrs: {
                            type: "primary",
                            loading: t.assignLoading,
                            disabled: t.assignLoading
                        },
                        on: {
                            click: t.saveAssign
                        }
                    }, [t._v("确 定")])], 1)], 1)
                },
                r = [],
                i = n("4838"),
                s = n.n(i),
                o = n("2934"),
                l = n("c35b");

            function c(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(n), !0).forEach((function(e) {
                        d(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function d(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function h(t, e) {
                var n;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = p(t)) || e && t && "number" === typeof t.length) {
                        n && (t = n);
                        var a = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return a >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[a++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, s = !0,
                    o = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return s = t.done, t
                    },
                    e: function(t) {
                        o = !0, i = t
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                }
            }

            function p(t, e) {
                if (t) {
                    if ("string" === typeof t) return f(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0
                }
            }

            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a
            }

            function m(t, e, n, a, r, i, s) {
                try {
                    var o = t[i](s),
                        l = o.value
                } catch (c) {
                    return void n(c)
                }
                o.done ? e(l) : Promise.resolve(l).then(a, r)
            }

            function v(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(a, r) {
                        var i = t.apply(e, n);

                        function s(t) {
                            m(i, a, r, s, o, "next", t)
                        }

                        function o(t) {
                            m(i, a, r, s, o, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }
            var _ = {
                    name: "AssignDialog",
                    components: {
                        UserList: l["a"]
                    },
                    props: {
                        value: [Object],
                        showDialog: [Boolean],
                        requireUser: {
                            type: Boolean,
                            default: !0
                        },
                        disabledNode: {
                            type: Boolean,
                            default: !1
                        },
                        disabledItem: {
                            type: Array
                        }
                    },
                    data: function() {
                        return {
                            assignForm: this.value,
                            deptId: "",
                            dict: {
                                nodes: []
                            },
                            assignLoading: !1,
                            showAssignDialog: this.showDialog,
                            require: this.requireUser,
                            disabledNodeStatus: this.disabledNode,
                            checkedUser: [],
                            hisUser: []
                        }
                    },
                    watch: {
                        showDialog: function(t) {
                            this.showAssignDialog = this.showDialog
                        },
                        value: function(t) {
                            this.assignForm = t
                        }
                    },
                    mounted: function() {
                        console.log("to_node_id", this.assignForm.to_node_id), this.getNodes();
                        var t = localStorage.getItem("assignUser");
                        t && (t = JSON.parse(t), this.hisUser = t[this.assignForm.to_node_id])
                    },
                    methods: {
                        getNodes: function() {
                            var t = v(s.a.mark((function t() {
                                var e;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(o["j"])();
                                        case 2:
                                            e = t.sent, this.dict.nodes = e.data;
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
                        nodeChangeHandle: function(t) {
                            this.deptId = this.getDeptId(t);
                            var e = localStorage.getItem("assignUser");
                            e && (e = JSON.parse(e), this.hisUser = e[t])
                        },
                        getDeptId: function(t) {
                            var e, n = h(this.dict.nodes);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var a = e.value;
                                    if (a.id == t) return a.department_ids
                                }
                            } catch (r) {
                                n.e(r)
                            } finally {
                                n.f()
                            }
                            return ""
                        },
                        saveAssign: function() {
                            var t = v(s.a.mark((function t() {
                                var e, n, a;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0, this.assignLoading = !0, e = u({}, this.assignForm), e.to_node_id) {
                                                t.next = 7;
                                                break
                                            }
                                            return this.$message.warning("流程节点不能为空！"), this.assignLoading = !1, t.abrupt("return", !1);
                                        case 7:
                                            if (e.by_assign_user_id && 0 != e.by_assign_user_id.length || !this.require) {
                                                t.next = 11;
                                                break
                                            }
                                            return this.$message.warning("分配用户不能为空！"), this.assignLoading = !1, t.abrupt("return", !1);
                                        case 11:
                                            this.checkedUser.length > 0 && this.checkedUser[0] && (n = localStorage.getItem("assignUser"), n = n ? JSON.parse(n) : {}, n[e.to_node_id] ? (a = [{
                                                id: this.checkedUser[0].value,
                                                name: this.checkedUser[0].label
                                            }], n[e.to_node_id].forEach((function(t, e) {
                                                t.id != a[0].id && a.length < 5 && a.push(t)
                                            })), n[e.to_node_id] = a) : n[e.to_node_id] = [{
                                                id: this.checkedUser[0].value,
                                                name: this.checkedUser[0].label
                                            }], localStorage.setItem("assignUser", JSON.stringify(n))), this.$emit("input", e), this.$emit("done", {}), this.$emit("update:showDialog", !1), t.next = 21;
                                            break;
                                        case 17:
                                            t.prev = 17, t.t0 = t["catch"](0), console.log(t.t0), this.assignLoading = !1;
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
                        openedDialog: function() {
                            this.$refs["userList"].getList(), this.assignLoading = !1
                        }
                    }
                },
                b = _,
                g = n("5d22"),
                y = Object(g["a"])(b, a, r, !1, null, "c049598a", null);
            e["a"] = y.exports
        },
        bcbb: function(t, e, n) {},
        c058: function(t, e, n) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "异常原因"
                        },
                        on: {
                            change: t.handleChange
                        },
                        model: {
                            value: t.reason,
                            callback: function(e) {
                                t.reason = e
                            },
                            expression: "reason"
                        }
                    }, [
                        ["type-in", "edit"].indexOf(t.mode) > -1 ? n("el-option", {
                            attrs: {
                                value: "0",
                                label: "无法开机"
                            }
                        }) : t._e(), t._v(" "), ["type-in", "edit"].indexOf(t.mode) > -1 ? n("el-option", {
                            attrs: {
                                value: "1",
                                label: "信息不符"
                            }
                        }) : t._e(), t._v(" "), ["check", "edit"].indexOf(t.mode) > -1 ? n("el-option", {
                            attrs: {
                                value: "2",
                                label: "质检异常"
                            }
                        }) : t._e(), t._v(" "), ["edit"].indexOf(t.mode) > -1 ? n("el-option", {
                            attrs: {
                                value: "3",
                                label: "低于成本"
                            }
                        }) : t._e(), t._v(" "), ["edit"].indexOf(t.mode) > -1 ? n("el-option", {
                            attrs: {
                                value: "4",
                                label: "成色差"
                            }
                        }) : t._e()
                    ], 1)
                },
                r = [],
                i = {
                    props: {
                        value: [String, Number],
                        mode: [String]
                    },
                    data: function() {
                        return {
                            reason: this.value
                        }
                    },
                    watch: {
                        value: function(t) {
                            this.reason = t
                        }
                    },
                    mounted: function() {
                        "check" == this.mode && (this.reason = "2", this.$emit("input", this.reason))
                    },
                    methods: {
                        handleChange: function(t) {
                            this.$emit("input", t)
                        }
                    }
                },
                s = i,
                o = n("5d22"),
                l = Object(o["a"])(s, a, r, !1, null, null, null);
            e["a"] = l.exports
        },
        c35b: function(t, e, n) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("el-cascader", {
                        ref: t.name,
                        attrs: {
                            placeholder: t.placeholder,
                            "show-all-levels": !1,
                            options: t.dict.applyUser,
                            props: {
                                value: "id",
                                label: "name",
                                emitPath: !1,
                                checkStrictly: t.checkStrictly,
                                multiple: t.multiple
                            },
                            "collapse-tags": "",
                            clearable: "",
                            filterable: "",
                            "default-first-option": "",
                            "filter-method": t.handleFilter,
                            debounce: 0
                        },
                        on: {
                            change: t.handleChange
                        },
                        nativeOn: {
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.handleEnter(e)
                            }
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                var a = e.node,
                                    r = e.data;
                                return [n("span", [t._v(t._s(r.name))]), t._v(" "), !a.isLeaf && t.hasUser ? n("span", [t._v("(" + t._s(r.children.length) + ")")]) : t._e()]
                            }
                        }]),
                        model: {
                            value: t.selectValue,
                            callback: function(e) {
                                t.selectValue = e
                            },
                            expression: "selectValue"
                        }
                    })
                },
                r = [],
                i = n("4838"),
                s = n.n(i),
                o = n("2934");

            function l(t, e) {
                var n;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = c(t)) || e && t && "number" === typeof t.length) {
                        n && (t = n);
                        var a = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return a >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[a++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, s = !0,
                    o = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return s = t.done, t
                    },
                    e: function(t) {
                        o = !0, i = t
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                }
            }

            function c(t, e) {
                if (t) {
                    if ("string" === typeof t) return u(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                }
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a
            }

            function d(t, e, n, a, r, i, s) {
                try {
                    var o = t[i](s),
                        l = o.value
                } catch (c) {
                    return void n(c)
                }
                o.done ? e(l) : Promise.resolve(l).then(a, r)
            }

            function h(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(a, r) {
                        var i = t.apply(e, n);

                        function s(t) {
                            d(i, a, r, s, o, "next", t)
                        }

                        function o(t) {
                            d(i, a, r, s, o, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }
            var p = {
                    name: "ComponentUserList",
                    props: {
                        name: {
                            type: String,
                            default: "userList"
                        },
                        value: [Array, Number, String],
                        placeholder: {
                            type: String,
                            default: null
                        },
                        deptId: {
                            type: String,
                            default: "0"
                        },
                        multiple: {
                            type: Boolean,
                            default: !0
                        },
                        checkStrictly: {
                            type: Boolean,
                            default: !1
                        },
                        hasUser: {
                            type: Boolean,
                            default: !0
                        },
                        checked: {
                            type: [Object, Array]
                        }
                    },
                    data: function() {
                        return {
                            selectValue: null,
                            dict: {
                                applyUser: []
                            },
                            filterData: {
                                key: null,
                                list: []
                            }
                        }
                    },
                    watch: {
                        value: function(t) {
                            var e = this;
                            this.$set(this, "selectValue", t), this.$nextTick((function() {
                                e.$emit("update:checked", e.$refs[e.name].getCheckedNodes())
                            }))
                        },
                        deptId: function(t) {
                            this.getList()
                        }
                    },
                    mounted: function() {
                        this.$set(this, "selectValue", this.value), this.getList()
                    },
                    methods: {
                        getList: function() {
                            var t = h(s.a.mark((function t() {
                                var e;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return this.dict.applyUser = [], t.next = 3, Object(o["h"])({
                                                department_ids: this.deptId
                                            });
                                        case 3:
                                            e = t.sent, this.dict.applyUser = this.formatUserList(e.data);
                                        case 5:
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
                        formatUserList: function(t) {
                            var e, n = l(t);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var a = e.value;
                                    a.children = this.formatUserList(a.children), this.hasUser && (a.children = a.children.concat(a.users)), a.children.length > 0 ? this.hasUser && (a.id = "D:" + a.id) : delete a.children
                                }
                            } catch (r) {
                                n.e(r)
                            } finally {
                                n.f()
                            }
                            return t
                        },
                        handleChange: function(t) {
                            this.$emit("input", this.selectValue)
                        },
                        handleEnter: function() {
                            var t = this;
                            setTimeout((function() {
                                console.log(t.filterData), t.multiple ? t.selectValue = t.selectValue.concat(t.filterData.list[0]) : t.selectValue = t.filterData.list[0], t.$emit("input", t.selectValue)
                            }), 100)
                        },
                        handleFilter: function(t, e) {
                            try {
                                var n = decodeURI(e);
                                if (this.filterData.key != n && (this.filterData.key = n, this.filterData.list = []), t.label.indexOf(n) > -1) return this.filterData.list.push(t.value), !0
                            } catch (a) {
                                console.log(a)
                            }
                        }
                    }
                },
                f = p,
                m = n("5d22"),
                v = Object(m["a"])(f, a, r, !1, null, "4657956f", null);
            e["a"] = v.exports
        },
        c4a5: function(t, e, n) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("el-dialog", {
                        staticClass: "err-dialog",
                        attrs: {
                            title: t.title,
                            visible: t.showErrDialog,
                            "append-to-body": !0,
                            width: "500px"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.showErrDialog = e
                            },
                            close: function(e) {
                                return t.$emit("update:showDialog", !1)
                            }
                        }
                    }, [n("el-form", {
                        ref: "err-form",
                        attrs: {
                            model: t.form,
                            rules: t.rules,
                            "label-width": "100px"
                        }
                    }, [n("el-form-item", {
                        attrs: {
                            label: "IMEI",
                            prop: "imei"
                        }
                    }, [n("el-input", {
                        attrs: {
                            disabled: t.disabled,
                            placeholder: "请输入imei"
                        },
                        model: {
                            value: t.form.imei,
                            callback: function(e) {
                                t.$set(t.form, "imei", e)
                            },
                            expression: "form.imei"
                        }
                    })], 1), t._v(" "), n("el-form-item", {
                        attrs: {
                            label: "错误类型",
                            prop: "error_type_id"
                        }
                    }, [n("el-select", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "请输入错误类型"
                        },
                        model: {
                            value: t.form.error_type_id,
                            callback: function(e) {
                                t.$set(t.form, "error_type_id", e)
                            },
                            expression: "form.error_type_id"
                        }
                    }, t._l(t.dict.error_type, (function(t, e) {
                        return n("el-option", {
                            key: e,
                            attrs: {
                                value: t.id,
                                label: t.name
                            }
                        })
                    })), 1)], 1), t._v(" "), n("el-form-item", {
                        attrs: {
                            label: "备注",
                            prop: "remark"
                        }
                    }, [n("el-input", {
                        attrs: {
                            type: "textarea",
                            rows: "4",
                            placeholder: "请输入备注"
                        },
                        model: {
                            value: t.form.remark,
                            callback: function(e) {
                                t.$set(t.form, "remark", e)
                            },
                            expression: "form.remark"
                        }
                    })], 1)], 1), t._v(" "), n("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [n("el-button", {
                        on: {
                            click: function(e) {
                                t.showErrDialog = !1
                            }
                        }
                    }, [t._v("取消")]), t._v(" "), n("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.addRow
                        }
                    }, [t._v("确定")])], 1)], 1)
                },
                r = [],
                i = n("4838"),
                s = n.n(i),
                o = n("c0f9");

            function l(t, e, n, a, r, i, s) {
                try {
                    var o = t[i](s),
                        l = o.value
                } catch (c) {
                    return void n(c)
                }
                o.done ? e(l) : Promise.resolve(l).then(a, r)
            }

            function c(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(a, r) {
                        var i = t.apply(e, n);

                        function s(t) {
                            l(i, a, r, s, o, "next", t)
                        }

                        function o(t) {
                            l(i, a, r, s, o, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }
            var u = {
                    name: "ErrDialog",
                    props: {
                        imei: [Number, String],
                        showDialog: [Boolean],
                        disabled: {
                            type: Boolean,
                            default: !0
                        },
                        title: {
                            type: String,
                            default: "错误上报"
                        },
                        nodeId: [String, Number]
                    },
                    data: function() {
                        return {
                            form: {
                                imei: null,
                                error_type_id: null,
                                remark: null
                            },
                            dict: {
                                error_type: []
                            },
                            showErrDialog: this.showDialog,
                            rules: {
                                imei: [{
                                    required: !0,
                                    trigger: "blur",
                                    message: "请输入IMEI"
                                }],
                                error_type_id: [{
                                    required: !0,
                                    trigger: "blur",
                                    message: "请选择错误类型"
                                }]
                            }
                        }
                    },
                    watch: {
                        showDialog: function(t) {
                            var e = this;
                            this.showErrDialog = this.showDialog, this.$nextTick((function() {
                                e.$refs["err-form"].resetFields(), e.$set(e.form, "imei", e.imei)
                            }))
                        }
                    },
                    mounted: function() {
                        this.getErrType()
                    },
                    methods: {
                        getErrType: function() {
                            var t = c(s.a.mark((function t() {
                                var e;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e = null, t.next = 3, Object(o["a"])({
                                                node_id: this.nodeId
                                            });
                                        case 3:
                                            e = t.sent, this.dict.error_type = e.data;
                                        case 5:
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
                        addRow: function() {
                            var t = c(s.a.mark((function t() {
                                var e = this;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            this.$refs["err-form"].validate(function() {
                                                var t = c(s.a.mark((function t(n) {
                                                    var a;
                                                    return s.a.wrap((function(t) {
                                                        while (1) switch (t.prev = t.next) {
                                                            case 0:
                                                                if (!n) {
                                                                    t.next = 37;
                                                                    break
                                                                }
                                                                if (a = null, t.prev = 2, a = e.$loading({
                                                                        target: ".err-dialog .el-dialog"
                                                                    }), "3" != e.nodeId) {
                                                                    t.next = 9;
                                                                    break
                                                                }
                                                                return t.next = 7, Object(o["g"])(e.form);
                                                            case 7:
                                                                t.next = 26;
                                                                break;
                                                            case 9:
                                                                if ("4" != e.nodeId) {
                                                                    t.next = 14;
                                                                    break
                                                                }
                                                                return t.next = 12, Object(o["i"])(e.form);
                                                            case 12:
                                                                t.next = 26;
                                                                break;
                                                            case 14:
                                                                if ("5" != e.nodeId) {
                                                                    t.next = 19;
                                                                    break
                                                                }
                                                                return t.next = 17, Object(o["h"])(e.form);
                                                            case 17:
                                                                t.next = 26;
                                                                break;
                                                            case 19:
                                                                if ("6" != e.nodeId) {
                                                                    t.next = 24;
                                                                    break
                                                                }
                                                                return t.next = 22, Object(o["j"])(e.form);
                                                            case 22:
                                                                t.next = 26;
                                                                break;
                                                            case 24:
                                                                return t.next = 26, Object(o["f"])(e.form);
                                                            case 26:
                                                                a.close(), e.$message.success("上报成功！"), e.$emit("update:showDialog", !1), e.showErrDialog = !1, e.$emit("done", {}), t.next = 37;
                                                                break;
                                                            case 33:
                                                                t.prev = 33, t.t0 = t["catch"](2), console.log(t.t0), a && a.close();
                                                            case 37:
                                                            case "end":
                                                                return t.stop()
                                                        }
                                                    }), t, null, [
                                                        [2, 33]
                                                    ])
                                                })));
                                                return function(e) {
                                                    return t.apply(this, arguments)
                                                }
                                            }());
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }
                },
                d = u,
                h = n("5d22"),
                p = Object(h["a"])(d, a, r, !1, null, "13eb292a", null);
            e["a"] = p.exports
        },
        cd36: function(t, e, n) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("el-dialog", {
                        staticClass: "logs-dialog",
                        attrs: {
                            title: "机器跟踪日志",
                            visible: t.showSubDialog
                        },
                        on: {
                            "update:visible": function(e) {
                                t.showSubDialog = e
                            },
                            close: t.handleCloes
                        }
                    }, [n("el-table", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: t.subLoading,
                            expression: "subLoading"
                        }],
                        staticClass: "body-list",
                        attrs: {
                            data: t.tableData
                        }
                    }, [n("el-table-column", {
                        attrs: {
                            type: "index",
                            label: "序号",
                            align: "center"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "content",
                            label: "内容",
                            width: "500"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "admin_name",
                            label: "操作人"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "created_at",
                            label: "时间"
                        }
                    })], 1), t._v(" "), n("div", {
                        staticClass: "footer-pagination"
                    }, [n("el-pagination", {
                        attrs: {
                            background: "",
                            layout: "total, prev, pager, next, jumper",
                            total: t.total,
                            "current-page": t.search.page,
                            "page-size": 10
                        },
                        on: {
                            "update:currentPage": function(e) {
                                return t.$set(t.search, "page", e)
                            },
                            "update:current-page": function(e) {
                                return t.$set(t.search, "page", e)
                            },
                            "current-change": function(e) {
                                return t.getData()
                            }
                        }
                    })], 1), t._v(" "), n("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [n("el-button", {
                        on: {
                            click: function(e) {
                                return t.$emit("update:showDialog", !1)
                            }
                        }
                    }, [t._v("确定")])], 1)], 1)
                },
                r = [],
                i = n("4838"),
                s = n.n(i),
                o = n("2934");

            function l(t, e, n, a, r, i, s) {
                try {
                    var o = t[i](s),
                        l = o.value
                } catch (c) {
                    return void n(c)
                }
                o.done ? e(l) : Promise.resolve(l).then(a, r)
            }

            function c(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(a, r) {
                        var i = t.apply(e, n);

                        function s(t) {
                            l(i, a, r, s, o, "next", t)
                        }

                        function o(t) {
                            l(i, a, r, s, o, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }
            var u = {
                    name: "LogsDialog",
                    props: {
                        value: [String, Number],
                        showDialog: [Boolean]
                    },
                    data: function() {
                        return {
                            search: {
                                product_id: this.value,
                                page: 1
                            },
                            showSubDialog: this.showDialog,
                            tableData: [],
                            total: 0,
                            subLoading: !1
                        }
                    },
                    watch: {
                        value: function(t) {
                            this.search.product_id = t
                        },
                        showDialog: function(t) {
                            this.showSubDialog = this.showDialog, this.showDialog && this.getData()
                        }
                    },
                    mounted: function() {
                        this.search.product_id && this.getData()
                    },
                    methods: {
                        getData: function() {
                            var t = c(s.a.mark((function t() {
                                var e;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, this.subLoading = !0, t.next = 4, Object(o["l"])(this.search);
                                        case 4:
                                            e = t.sent, this.subLoading = !1, this.tableData = e.data.data, this.total = e.data.total, t.next = 13;
                                            break;
                                        case 10:
                                            t.prev = 10, t.t0 = t["catch"](0), this.subLoading = !1;
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 10]
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
                d = u,
                h = n("5d22"),
                p = Object(h["a"])(d, a, r, !1, null, "3a082416", null);
            e["a"] = p.exports
        },
        cd9b: function(t, e, n) {},
        d5c5: function(t, e, n) {
            "use strict";
            n("aa9b")
        },
        f82e: function(t, e, n) {}
    }
]);