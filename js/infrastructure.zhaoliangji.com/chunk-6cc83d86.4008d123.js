(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-6cc83d86"], {
        "02c5": function(e, t, r) {
            "use strict";
            r.r(t);
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "app-container"
                    }, [r("el-tabs", {
                        model: {
                            value: e.activeName,
                            callback: function(t) {
                                e.activeName = t
                            },
                            expression: "activeName"
                        }
                    }, [r("el-tab-pane", {
                        attrs: {
                            label: "全部",
                            name: "all"
                        }
                    }, [r("ListComponent")], 1), e._v(" "), r("el-tab-pane", {
                        attrs: {
                            name: "0"
                        }
                    }, [r("span", {
                        attrs: {
                            slot: "label"
                        },
                        slot: "label"
                    }, [e._v("\n        待处理\n        "), r("span", {
                        staticClass: "zlj-badge"
                    }, [e._v(e._s(e.listTotal[0]))])]), e._v(" "), r("ListComponent", {
                        attrs: {
                            "dispose-status": "0",
                            "header-total": e.listTotal[0]
                        },
                        on: {
                            "update:headerTotal": function(t) {
                                return e.$set(e.listTotal, 0, t)
                            },
                            "update:header-total": function(t) {
                                return e.$set(e.listTotal, 0, t)
                            }
                        }
                    })], 1)], 1)], 1)
                },
                a = [],
                s = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "list-component"
                    }, [r("el-row", {
                        staticClass: "header-search"
                    }, [r("el-col", {
                        staticClass: "wrap",
                        attrs: {
                            span: 21
                        }
                    }, [r("div", {
                        staticClass: "same-width"
                    }, [r("div", {
                        staticClass: "search-item search-timer"
                    }, [r("el-date-picker", {
                        attrs: {
                            type: "datetimerange",
                            "range-separator": "-",
                            "start-placeholder": "登记时间",
                            "end-placeholder": "结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"]
                        },
                        model: {
                            value: e.search.create_at,
                            callback: function(t) {
                                e.$set(e.search, "create_at", t)
                            },
                            expression: "search.create_at"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item search-timer"
                    }, [r("el-date-picker", {
                        attrs: {
                            type: "datetimerange",
                            "range-separator": "-",
                            "start-placeholder": "处理时间",
                            "end-placeholder": "结束时间",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            "default-time": ["00:00:00", "23:59:59"]
                        },
                        model: {
                            value: e.search.receive_at,
                            callback: function(t) {
                                e.$set(e.search, "receive_at", t)
                            },
                            expression: "search.receive_at"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-input", {
                        attrs: {
                            placeholder: "异常单号"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getList(1)
                            }
                        },
                        model: {
                            value: e.search.abnormal_report_order_no,
                            callback: function(t) {
                                e.$set(e.search, "abnormal_report_order_no", t)
                            },
                            expression: "search.abnormal_report_order_no"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-input", {
                        attrs: {
                            placeholder: "流转单号"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getList(1)
                            }
                        },
                        model: {
                            value: e.search.transfer_order_no,
                            callback: function(t) {
                                e.$set(e.search, "transfer_order_no", t)
                            },
                            expression: "search.transfer_order_no"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("userList", {
                        attrs: {
                            placeholder: "登记人"
                        },
                        model: {
                            value: e.search.create_user_ids,
                            callback: function(t) {
                                e.$set(e.search, "create_user_ids", t)
                            },
                            expression: "search.create_user_ids"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("ImeiSearch", {
                        on: {
                            done: function(t) {
                                return e.getList(1)
                            }
                        },
                        model: {
                            value: e.search.imei,
                            callback: function(t) {
                                e.$set(e.search, "imei", t)
                            },
                            expression: "search.imei"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("ExceptionReason", {
                        attrs: {
                            mode: "edit"
                        },
                        model: {
                            value: e.search.reason,
                            callback: function(t) {
                                e.$set(e.search, "reason", t)
                            },
                            expression: "search.reason"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("nodes", {
                        attrs: {
                            placeholder: "异常来源"
                        },
                        model: {
                            value: e.search.node_id,
                            callback: function(t) {
                                e.$set(e.search, "node_id", t)
                            },
                            expression: "search.node_id"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("TypeBrandModel", {
                        attrs: {
                            level: 2,
                            dict: e.dict
                        },
                        model: {
                            value: e.search,
                            callback: function(t) {
                                e.search = t
                            },
                            expression: "search"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("userList", {
                        attrs: {
                            placeholder: "查收人"
                        },
                        model: {
                            value: e.search.receive_user_ids,
                            callback: function(t) {
                                e.$set(e.search, "receive_user_ids", t)
                            },
                            expression: "search.receive_user_ids"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("userList", {
                        attrs: {
                            placeholder: "处理人"
                        },
                        model: {
                            value: e.search.deal_user_ids,
                            callback: function(t) {
                                e.$set(e.search, "deal_user_ids", t)
                            },
                            expression: "search.deal_user_ids"
                        }
                    })], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-select", {
                        attrs: {
                            filterable: "",
                            clearable: "",
                            placeholder: "查收状态"
                        },
                        model: {
                            value: e.search.receive_status,
                            callback: function(t) {
                                e.$set(e.search, "receive_status", t)
                            },
                            expression: "search.receive_status"
                        }
                    }, [r("el-option", {
                        attrs: {
                            value: "0",
                            label: "未接收"
                        }
                    }), e._v(" "), r("el-option", {
                        attrs: {
                            value: "1",
                            label: "已接收"
                        }
                    }), e._v(" "), r("el-option", {
                        attrs: {
                            value: "-1",
                            label: "已作废"
                        }
                    })], 1)], 1), e._v(" "), r("div", {
                        staticClass: "search-item"
                    }, [r("el-input", {
                        attrs: {
                            placeholder: "采购单号"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getList(1)
                            }
                        },
                        model: {
                            value: e.search.purchase_order_no,
                            callback: function(t) {
                                e.$set(e.search, "purchase_order_no", t)
                            },
                            expression: "search.purchase_order_no"
                        }
                    })], 1)])]), e._v(" "), r("el-col", {
                        staticClass: "operat-btn",
                        attrs: {
                            span: 3
                        }
                    }, [r("el-button", {
                        attrs: {
                            type: "warning"
                        },
                        on: {
                            click: function(t) {
                                return e.getList(1)
                            }
                        }
                    }, [e._v("查询")]), e._v(" "), r("el-button", {
                        attrs: {
                            type: "default"
                        },
                        on: {
                            click: function(t) {
                                return e.resetSearch()
                            }
                        }
                    }, [e._v("重置")])], 1)], 1), e._v(" "), r("div", {
                        staticClass: "header-tools"
                    }, [r("div", [r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.$router.push({
                                    path: "/distribution/scanner",
                                    query: {
                                        type: 2
                                    }
                                })
                            }
                        }
                    }, [e._v("异常接收")]), e._v(" "), r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.openRejectDialog()
                            }
                        }
                    }, [e._v("异常驳回")]), e._v(" "), r("el-button", {
                        attrs: {
                            disabled: e.disabledAllot,
                            loading: e.allotLoading,
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.toOutPage()
                            }
                        }
                    }, [e._v("调拨出库")]), e._v(" "), r("el-button", {
                        attrs: {
                            loading: e.printLoading,
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.print()
                            }
                        }
                    }, [e._v("导出报表")]), e._v(" "), r("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.$router.push({
                                    name: "distribution-exception-create"
                                })
                            }
                        }
                    }, [e._v("生成流转单")])], 1), e._v(" "), r("div", [r("el-tag", {
                        attrs: {
                            type: "warning"
                        }
                    }, [e._v("已勾选：" + e._s(e.selectNum))]), e._v(" "), r("el-tag", {
                        attrs: {
                            type: "warning"
                        }
                    }, [e._v("总数量：" + e._s(e.total_goods_num))])], 1)]), e._v(" "), r("el-row", {
                        staticClass: "body-list"
                    }, [r("el-col", {
                        attrs: {
                            span: 24
                        }
                    }, [r("el-table", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: e.loading,
                            expression: "loading"
                        }],
                        attrs: {
                            data: e.tableData,
                            "max-height": e.getClientHeight(415),
                            border: ""
                        },
                        on: {
                            "selection-change": e.handleSelectionChange
                        }
                    }, [r("el-table-column", {
                        attrs: {
                            type: "selection",
                            align: "center",
                            width: "40"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            type: "index",
                            label: "序号",
                            align: "center",
                            width: "80"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "abnormal_report_order_no",
                            label: "异常单号",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("router-link", {
                                    attrs: {
                                        to: {
                                            name: "distribution-exception-detail",
                                            query: {
                                                id: t.row.id
                                            }
                                        }
                                    }
                                }, [r("span", {
                                    staticClass: "view"
                                }, [e._v(e._s(t.row.abnormal_report_order_no))])])]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "node.name",
                            label: "异常来源",
                            align: "center"
                        }
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "异常数量/金额",
                            "header-align": "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("div", [e._v("数量：" + e._s(t.row.num))]), e._v(" "), r("div", [e._v("金额：" + e._s(t.row.total_cost))])]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "address",
                            label: "操作人",
                            "header-align": "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [t.row.create_user ? r("div", [e._v("\n              登记：" + e._s(t.row.create_user.department_name) + "--" + e._s(t.row.create_user.real_name) + "\n            ")]) : e._e(), e._v(" "), t.row.destroy_user ? r("div", [e._v("\n              作废：" + e._s(t.row.destroy_user.department_name) + "--" + e._s(t.row.destroy_user.real_name) + "\n            ")]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            prop: "address",
                            label: "时间",
                            "header-align": "center",
                            width: "200"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("div", [e._v("登记：" + e._s(t.row.created_at))]), e._v(" "), t.row.destroy_user ? r("div", [e._v("\n              作废：" + e._s(t.row.destroy_at) + "\n            ")]) : e._e()]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "查收状态",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("div", {
                                    class: {
                                        "color-success": 2 == t.row.receive_status, "color-warning": 0 == t.row.receive_status, "color-danger": -1 == t.row.receive_status
                                    }
                                }, [e._v("\n              " + e._s(t.row.receive_status_description) + "\n            ")])]
                            }
                        }])
                    }), e._v(" "), r("el-table-column", {
                        attrs: {
                            label: "操作",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [r("router-link", {
                                    attrs: {
                                        to: {
                                            name: "distribution-exception-detail",
                                            query: {
                                                id: t.row.id
                                            }
                                        },
                                        target: "_blank"
                                    }
                                }, [r("el-button", {
                                    attrs: {
                                        type: "primary",
                                        size: "mini"
                                    }
                                }, [e._v("查看")])], 1)]
                            }
                        }])
                    })], 1)], 1)], 1), e._v(" "), r("div", {
                        staticClass: "footer-pagination"
                    }, [r("el-pagination", {
                        attrs: {
                            background: "",
                            layout: "total, prev, pager, next, jumper",
                            total: e.total,
                            "current-page": e.search.page,
                            "page-size": e.search.page_size
                        },
                        on: {
                            "update:currentPage": function(t) {
                                return e.$set(e.search, "page", t)
                            },
                            "update:current-page": function(t) {
                                return e.$set(e.search, "page", t)
                            },
                            "update:pageSize": function(t) {
                                return e.$set(e.search, "page_size", t)
                            },
                            "update:page-size": function(t) {
                                return e.$set(e.search, "page_size", t)
                            },
                            "current-change": function(t) {
                                return e.getList()
                            }
                        }
                    })], 1), e._v(" "), r("el-dialog", {
                        staticClass: "rejectDialog",
                        attrs: {
                            title: "异常驳回",
                            visible: e.showRejectDialog,
                            width: "600px"
                        },
                        on: {
                            "update:visible": function(t) {
                                e.showRejectDialog = t
                            },
                            close: function(t) {
                                return e.getList()
                            }
                        }
                    }, [r("el-input", {
                        ref: "rejectImei",
                        attrs: {
                            type: "textarea",
                            rows: "8",
                            placeholder: "请扫描IMEI"
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.exceptionReject()
                            }
                        },
                        model: {
                            value: e.rejectImei,
                            callback: function(t) {
                                e.rejectImei = t
                            },
                            expression: "rejectImei"
                        }
                    })], 1)], 1)
                },
                i = [],
                o = r("4838"),
                c = r.n(o),
                l = r("a81e"),
                u = r("5e61"),
                d = r("1504"),
                p = r("c35b"),
                _ = r("c058"),
                h = (r("222f"), r("246e"));

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(r), !0).forEach((function(t) {
                        v(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function v(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function b(e, t, r, n, a, s, i) {
                try {
                    var o = e[s](i),
                        c = o.value
                } catch (l) {
                    return void r(l)
                }
                o.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function g(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var s = e.apply(t, r);

                        function i(e) {
                            b(s, n, a, i, o, "next", e)
                        }

                        function o(e) {
                            b(s, n, a, i, o, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function y(e, t) {
                var r;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = w(e)) || t && e && "number" === typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var s, i = !0,
                    o = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        o = !0, s = e
                    },
                    f: function() {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (o) throw s
                        }
                    }
                }
            }

            function w(e, t) {
                if (e) {
                    if ("string" === typeof e) return j(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? j(e, t) : void 0
                }
            }

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var k = {
                    name: "DistributionExceptionListComponent",
                    components: {
                        Nodes: u["a"],
                        TypeBrandModel: d["a"],
                        UserList: p["a"],
                        ExceptionReason: _["a"],
                        ImeiSearch: h["a"]
                    },
                    props: {
                        disposeStatus: [String],
                        headerTotal: [Number]
                    },
                    data: function() {
                        return {
                            tableData: [],
                            selectRows: [],
                            search: {
                                create_at: [],
                                receive_at: [],
                                abnormal_report_order_no: null,
                                node_id: null,
                                create_user_ids: null,
                                receive_user_ids: null,
                                receive_status: null,
                                status: this.disposeStatus,
                                deal_user_ids: null,
                                type_id: null,
                                brand_id: null,
                                transfer_order_no: null,
                                page: 1,
                                imei: null,
                                reason: null,
                                purchase_order_no: null
                            },
                            total: 0,
                            total_goods_num: 0,
                            dict: {},
                            loading: !1,
                            printLoading: !1,
                            showRejectDialog: !1,
                            rejectImei: null,
                            allotLoading: !1,
                            oldSearch: {
                                transfer_order_no: null,
                                imei: null
                            }
                        }
                    },
                    computed: {
                        disabledAllot: function() {
                            if (this.selectRows.length > 0) {
                                var e, t = y(this.selectRows);
                                try {
                                    for (t.s(); !(e = t.n()).done;) {
                                        var r = e.value;
                                        if (2 != r.receive_status) return !0
                                    }
                                } catch (n) {
                                    t.e(n)
                                } finally {
                                    t.f()
                                }
                                return !1
                            }
                            return !0
                        },
                        selectNum: function() {
                            var e, t = 0,
                                r = y(this.selectRows);
                            try {
                                for (r.s(); !(e = r.n()).done;) {
                                    var n = e.value;
                                    t += n.num
                                }
                            } catch (a) {
                                r.e(a)
                            } finally {
                                r.f()
                            }
                            return t
                        }
                    },
                    mounted: function() {
                        this.getList()
                    },
                    methods: {
                        print: function() {
                            var e = g(c.a.mark((function e() {
                                var t, r;
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t = m(m({}, this.search), {}, {
                                                is_export: 1
                                            }, this.oldSearch), this.printLoading = !0, e.next = 5, Object(l["d"])(t);
                                        case 5:
                                            r = e.sent, this.printLoading = !1, window.open(r.data.download_url, "blank"), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e["catch"](0), this.printLoading = !1;
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 10]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        getList: function() {
                            var e = g(c.a.mark((function e(t) {
                                var r;
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t && (this.search.page = 1), this.loading = !0, e.next = 4, Object(l["d"])(this.search);
                                        case 4:
                                            r = e.sent, this.loading = !1, this.tableData = r.data.data, this.total = r.data.total, this.total_goods_num = r.data.total_goods_num, this.$emit("update:headerTotal", this.total), this.oldSearch.transfer_order_no = m({}, this.search).transfer_order_no, this.oldSearch.imei = m({}, this.search).imei, this.search.transfer_order_no = null, this.search.imei = null;
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        resetSearch: function() {
                            this.search = {
                                create_at: [],
                                receive_at: [],
                                abnormal_report_order_no: null,
                                node_id: null,
                                create_user_ids: null,
                                receive_user_ids: null,
                                receive_status: null,
                                status: null,
                                deal_user_ids: null,
                                type_id: null,
                                brand_id: null,
                                transfer_order_no: null,
                                page: 1,
                                imei: null,
                                reason: null,
                                purchase_order_no: null
                            }, this.$set(this.search, "node_id", null), this.getList()
                        },
                        openRejectDialog: function() {
                            var e = g(c.a.mark((function e() {
                                var t = this;
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            this.showRejectDialog = !0, this.$nextTick((function() {
                                                t.$refs["rejectImei"].focus()
                                            }));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        exceptionReject: function() {
                            var e = g(c.a.mark((function e() {
                                var t;
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t = this.$loading({
                                                target: ".rejectDialog .el-dialog"
                                            }), e.prev = 1, e.next = 4, Object(l["a"])({
                                                imei: this.rejectImei
                                            });
                                        case 4:
                                            e.sent, t.close(), this.$message.success("驳回成功！"), this.rejectImei = null, e.next = 16;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e["catch"](1), t.close(), this.rejectImei = this.rejectImei.replace(/\s/, ""), this.$refs["rejectImei"].select(), console.log(this.$refs["rejectImei"]);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [1, 10]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        toOutPage: function() {
                            var e = g(c.a.mark((function e() {
                                return c.a.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            this.allotLoading = !0, this.allotLoading = !1, this.$router.push({
                                                name: "distribution-out",
                                                query: {
                                                    ids: this.selectRows.map((function(e) {
                                                        return e.id
                                                    })).join(",")
                                                }
                                            });
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        handleSelectionChange: function(e) {
                            this.selectRows = e
                        }
                    }
                },
                O = k,
                x = r("5d22"),
                C = Object(x["a"])(O, s, i, !1, null, "8fd44f16", null),
                $ = C.exports,
                L = {
                    name: "DistributionExceptionList",
                    components: {
                        ListComponent: $
                    },
                    data: function() {
                        return {
                            activeName: "all",
                            listTotal: [0, 0, 0]
                        }
                    },
                    mounted: function() {},
                    methods: {}
                },
                S = L,
                I = Object(x["a"])(S, n, a, !1, null, "23cc56d1", null);
            t["default"] = I.exports
        },
        "222f": function(e, t, r) {
            "use strict";
            r.d(t, "e", (function() {
                return a
            })), r.d(t, "c", (function() {
                return s
            })), r.d(t, "d", (function() {
                return i
            })), r.d(t, "b", (function() {
                return o
            })), r.d(t, "a", (function() {
                return c
            }));
            var n = r("b775");

            function a(e) {
                return Object(n["a"])({
                    url: "/api/receive/receive_order_collections",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(n["a"])({
                    url: "/api/receive/destroy_receive_order",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(n["a"])({
                    url: "/api/receive/show_receive_order",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(n["a"])({
                    url: "/api/receive/assign_to_create_transfer_order",
                    method: "post",
                    data: e
                })
            }

            function c(e) {
                return Object(n["a"])({
                    url: "/api/receive/assign_to_create_warehouse_batch_switch",
                    method: "post",
                    data: e
                })
            }
        },
        2934: function(e, t, r) {
            "use strict";
            r.d(t, "p", (function() {
                return a
            })), r.d(t, "d", (function() {
                return s
            })), r.d(t, "i", (function() {
                return i
            })), r.d(t, "m", (function() {
                return o
            })), r.d(t, "b", (function() {
                return c
            })), r.d(t, "g", (function() {
                return l
            })), r.d(t, "k", (function() {
                return u
            })), r.d(t, "j", (function() {
                return d
            })), r.d(t, "h", (function() {
                return p
            })), r.d(t, "n", (function() {
                return _
            })), r.d(t, "a", (function() {
                return h
            })), r.d(t, "l", (function() {
                return f
            })), r.d(t, "q", (function() {
                return m
            })), r.d(t, "f", (function() {
                return v
            })), r.d(t, "o", (function() {
                return b
            })), r.d(t, "c", (function() {
                return g
            })), r.d(t, "e", (function() {
                return y
            }));
            var n = r("b775");

            function a(e) {
                return Object(n["a"])({
                    url: "/api/product/types",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(n["a"])({
                    url: "/api/product/type_brands",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(n["a"])({
                    url: "/api/product/type_brand_models",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(n["a"])({
                    url: "/api/product/model_sales_properties",
                    method: "get",
                    params: e
                })
            }

            function c(e) {
                return Object(n["a"])({
                    url: "/api/switch/apply_user_list",
                    method: "get",
                    params: e
                })
            }

            function l(e) {
                return Object(n["a"])({
                    url: "/api/switch/check_user_list",
                    method: "get",
                    params: e
                })
            }

            function u(e) {
                return Object(n["a"])({
                    url: "/api/order_logs",
                    method: "get",
                    params: e
                })
            }

            function d(e) {
                return Object(n["a"])({
                    url: "/api/nodes",
                    method: "get",
                    params: e
                })
            }

            function p(e) {
                return Object(n["a"])({
                    url: "/api/user/get_departments_users",
                    method: "get",
                    params: e
                })
            }

            function _(e) {
                return Object(n["a"])({
                    url: "/api/suppliers",
                    method: "get",
                    params: e
                })
            }

            function h(e) {
                return Object(n["a"])({
                    url: "/api/input/batch_edit_cost",
                    method: "post",
                    data: e
                })
            }

            function f(e) {
                return Object(n["a"])({
                    url: "/api/product/tracks",
                    method: "get",
                    params: e
                })
            }

            function m(e) {
                return Object(n["a"])({
                    url: "/api/abnormal/product_reject_receive",
                    method: "post",
                    data: e
                })
            }

            function v(e) {
                return Object(n["a"])({
                    url: "/api/product/model_quality_inspection",
                    method: "get",
                    params: e
                })
            }

            function b(e) {
                return Object(n["a"])({
                    url: "/api/product/type_labels",
                    method: "get",
                    params: e
                })
            }

            function g(e) {
                return Object(n["a"])({
                    url: "/api/warehouse_areas",
                    method: "get",
                    params: e
                })
            }

            function y(e) {
                return Object(n["a"])({
                    url: "https://qcapi.zhaoliangji.com//api/quality/init_option",
                    method: "post",
                    data: e
                })
            }
        },
        a81e: function(e, t, r) {
            "use strict";
            r.d(t, "d", (function() {
                return a
            })), r.d(t, "c", (function() {
                return s
            })), r.d(t, "b", (function() {
                return i
            })), r.d(t, "a", (function() {
                return o
            }));
            var n = r("b775");

            function a(e) {
                return Object(n["a"])({
                    url: "/api/receive/abnormal_report_orders",
                    method: "get",
                    params: e
                })
            }

            function s(e) {
                return Object(n["a"])({
                    url: "/api/receive/show_abnormal_report",
                    method: "get",
                    params: e
                })
            }

            function i(e) {
                return Object(n["a"])({
                    url: "/api/receive/show_abnormal_reports",
                    method: "get",
                    params: e
                })
            }

            function o(e) {
                return Object(n["a"])({
                    url: "/api/abnormal/product_reject",
                    method: "post",
                    data: e
                })
            }
        }
    }
]);