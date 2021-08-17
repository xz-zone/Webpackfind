define("plugins/bzPopper", ["require"], function() {
    function e(e) {
        return e
    }

    function t(e, t) {
        return t = {
            exports: {}
        }, e(t, t.exports), t.exports
    }

    function n(e) {
        "@babel/helpers - typeof";
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function r(e) {
        "@babel/helpers - typeof";
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function o(e) {
        "@babel/helpers - typeof";
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function i(e) {
        "@babel/helpers - typeof";
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function a(e) {
        "@babel/helpers - typeof";
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function c(e, t) {
        if (!document.getElementById("guarantee-popper-style")) {
            void 0 === t && (t = {});
            var n = t.insertAt;
            if (e && "undefined" != typeof document) {
                var r = document.head || document.getElementsByTagName("head")[0],
                    o = document.createElement("style");
                o.id = "guarantee-popper-style", o.type = "text/css", "top" === n && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e))
            }
        }
    }

    function u() {
        var e = navigator.userAgent,
            t = e.indexOf("compatible") > -1 && e.indexOf("MSIE") > -1;
        if (t) {
            var n = new RegExp("MSIE (\\d+\\.\\d+);");
            n.test(e);
            var r = parseFloat(RegExp.$1);
            return 7 === r ? 7 : 8 === r ? 8 : 9 === r ? 9 : 10 === r ? 10 : 6
        }
    }

    function s(e) {
        var t = e.getBoundingClientRect();
        return {
            width: t.width,
            height: t.height,
            top: t.top,
            right: t.right,
            bottom: t.bottom,
            left: t.left,
            x: t.left,
            y: t.top
        }
    }

    function p(e) {
        if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return t ? t.defaultView || window : window
        }
        return e
    }

    function l(e) {
        var t = p(e),
            n = t.pageXOffset,
            r = t.pageYOffset;
        return {
            scrollLeft: n,
            scrollTop: r
        }
    }

    function f(e) {
        var t = p(e).Element;
        return e instanceof t || e instanceof Element
    }

    function d(e) {
        var t = p(e).HTMLElement;
        return e instanceof t || e instanceof HTMLElement
    }

    function g(e) {
        var t = p(e).ShadowRoot;
        return e instanceof t || e instanceof ShadowRoot
    }

    function m(e) {
        return {
            scrollLeft: e.scrollLeft,
            scrollTop: e.scrollTop
        }
    }

    function h(e) {
        return e !== p(e) && d(e) ? m(e) : l(e)
    }

    function v(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
    }

    function y(e) {
        return ((f(e) ? e.ownerDocument : e.document) || window.document).documentElement
    }

    function b(e) {
        return s(y(e)).left + l(e).scrollLeft
    }

    function w(e) {
        return p(e).getComputedStyle(e)
    }

    function x(e) {
        var t = w(e),
            n = t.overflow,
            r = t.overflowX,
            o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r)
    }

    function P(e, t, n) {
        void 0 === n && (n = !1);
        var r = y(t),
            o = s(e),
            i = d(t),
            a = {
                scrollLeft: 0,
                scrollTop: 0
            },
            c = {
                x: 0,
                y: 0
            };
        return (i || !i && !n) && (("body" !== v(t) || x(r)) && (a = h(t)), d(t) ? (c = s(t), c.x += t.clientLeft, c.y += t.clientTop) : r && (c.x = b(r))), {
            x: o.left + a.scrollLeft - c.x,
            y: o.top + a.scrollTop - c.y,
            width: o.width,
            height: o.height
        }
    }

    function O(e) {
        return {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: e.offsetWidth,
            height: e.offsetHeight
        }
    }

    function k(e) {
        return "html" === v(e) ? e : e.assignedSlot || e.parentNode || e.host || y(e)
    }

    function E(e) {
        return ["html", "body", "#document"].indexOf(v(e)) >= 0 ? e.ownerDocument.body : d(e) && x(e) ? e : E(k(e))
    }

    function S(e, t) {
        void 0 === t && (t = []);
        var n = E(e),
            r = "body" === v(n),
            o = p(n),
            i = r ? [o].concat(o.visualViewport || [], x(n) ? n : []) : n,
            a = t.concat(i);
        return r ? a : a.concat(S(k(i)))
    }

    function A(e) {
        return ["table", "td", "th"].indexOf(v(e)) >= 0
    }

    function L(e) {
        if (!d(e) || "fixed" === w(e).position) return null;
        var t = e.offsetParent;
        if (t) {
            var n = y(t);
            if ("body" === v(t) && "static" === w(t).position && "static" !== w(n).position) return n
        }
        return t
    }

    function j(e) {
        for (var t = k(e); d(t) && ["html", "body"].indexOf(v(t)) < 0;) {
            var n = w(t);
            if ("none" !== n.transform || "none" !== n.perspective || n.willChange && "auto" !== n.willChange) return t;
            t = t.parentNode
        }
        return null
    }

    function T(e) {
        for (var t = p(e), n = L(e); n && A(n) && "static" === w(n).position;) n = L(n);
        return n && "body" === v(n) && "static" === w(n).position ? t : n || j(e) || t
    }

    function C(e) {
        function t(e) {
            r.add(e.name);
            var i = [].concat(e.requires || [], e.requiresIfExists || []);
            i.forEach(function(e) {
                if (!r.has(e)) {
                    var o = n.get(e);
                    o && t(o)
                }
            }), o.push(e)
        }
        var n = new Map,
            r = new Set,
            o = [];
        return e.forEach(function(e) {
            n.set(e.name, e)
        }), e.forEach(function(e) {
            r.has(e.name) || t(e)
        }), o
    }

    function D(e) {
        var t = C(e);
        return ja.reduce(function(e, n) {
            return e.concat(t.filter(function(e) {
                return e.phase === n
            }))
        }, [])
    }

    function M(e) {
        return e.split("-")[0]
    }

    function I(e) {
        var t = e.reduce(function(e, t) {
            var n = e[t.name];
            return e[t.name] = n ? Object.assign(Object.assign(Object.assign({}, n), t), {}, {
                options: Object.assign(Object.assign({}, n.options), t.options),
                data: Object.assign(Object.assign({}, n.data), t.data)
            }) : t, e
        }, {});
        return Object.keys(t).map(function(e) {
            return t[e]
        })
    }

    function R(e) {
        var t = p(e),
            n = y(e),
            r = t.visualViewport,
            o = n.clientWidth,
            i = n.clientHeight,
            a = 0,
            c = 0;
        return r && (o = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, c = r.offsetTop)), {
            width: o,
            height: i,
            x: a + b(e),
            y: c
        }
    }

    function _(e) {
        var t = y(e),
            n = l(e),
            r = e.ownerDocument.body,
            o = Math.max(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
            i = Math.max(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
            a = -n.scrollLeft + b(e),
            c = -n.scrollTop;
        return "rtl" === w(r || t).direction && (a += Math.max(t.clientWidth, r ? r.clientWidth : 0) - o), {
            width: o,
            height: i,
            x: a,
            y: c
        }
    }

    function z(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (g(n)) {
            var r = t;
            do {
                if (r && e.isSameNode(r)) return !0;
                r = r.parentNode || r.host
            } while (r)
        }
        return !1
    }

    function H(e) {
        return Object.assign(Object.assign({}, e), {}, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
        })
    }

    function N(e) {
        var t = s(e);
        return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
    }

    function B(e, t) {
        return t === ma ? H(R(e)) : d(t) ? N(t) : H(_(y(e)))
    }

    function F(e) {
        var t = S(k(e)),
            n = ["absolute", "fixed"].indexOf(w(e).position) >= 0,
            r = n && d(e) ? T(e) : e;
        return f(r) ? t.filter(function(e) {
            return f(e) && z(e, r) && "body" !== v(e)
        }) : []
    }

    function V(e, t, n) {
        var r = "clippingParents" === t ? F(e) : [].concat(t),
            o = [].concat(r, [n]),
            i = o[0],
            a = o.reduce(function(t, n) {
                var r = B(e, n);
                return t.top = Math.max(r.top, t.top), t.right = Math.min(r.right, t.right), t.bottom = Math.min(r.bottom, t.bottom), t.left = Math.max(r.left, t.left), t
            }, B(e, i));
        return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
    }

    function U(e) {
        return e.split("-")[1]
    }

    function G(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
    }

    function W(e) {
        var t, n = e.reference,
            r = e.element,
            o = e.placement,
            i = o ? M(o) : null,
            a = o ? U(o) : null,
            c = n.x + n.width / 2 - r.width / 2,
            u = n.y + n.height / 2 - r.height / 2;
        switch (i) {
            case aa:
                t = {
                    x: c,
                    y: n.y - r.height
                };
                break;
            case ca:
                t = {
                    x: c,
                    y: n.y + n.height
                };
                break;
            case ua:
                t = {
                    x: n.x + n.width,
                    y: u
                };
                break;
            case sa:
                t = {
                    x: n.x - r.width,
                    y: u
                };
                break;
            default:
                t = {
                    x: n.x,
                    y: n.y
                }
        }
        var s = i ? G(i) : null;
        if (null !== s) {
            var p = "y" === s ? "height" : "width";
            switch (a) {
                case fa:
                    t[s] = Math.floor(t[s]) - Math.floor(n[p] / 2 - r[p] / 2);
                    break;
                case da:
                    t[s] = Math.floor(t[s]) + Math.ceil(n[p] / 2 - r[p] / 2)
            }
        }
        return t
    }

    function q() {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    }

    function Q(e) {
        return Object.assign(Object.assign({}, q()), e)
    }

    function Z(e, t) {
        return t.reduce(function(t, n) {
            return t[n] = e, t
        }, {})
    }

    function Y(e, t) {
        void 0 === t && (t = {});
        var n = t,
            r = n.placement,
            o = void 0 === r ? e.placement : r,
            i = n.boundary,
            a = void 0 === i ? ga : i,
            c = n.rootBoundary,
            u = void 0 === c ? ma : c,
            p = n.elementContext,
            l = void 0 === p ? ha : p,
            d = n.altBoundary,
            g = void 0 === d ? !1 : d,
            m = n.padding,
            h = void 0 === m ? 0 : m,
            v = Q("number" != typeof h ? h : Z(h, la)),
            b = l === ha ? va : ha,
            w = e.elements.reference,
            x = e.rects.popper,
            P = e.elements[g ? b : l],
            O = V(f(P) ? P : P.contextElement || y(e.elements.popper), a, u),
            k = s(w),
            E = W({
                reference: k,
                element: x,
                strategy: "absolute",
                placement: o
            }),
            S = H(Object.assign(Object.assign({}, x), E)),
            A = l === ha ? S : k,
            L = {
                top: O.top - A.top + v.top,
                bottom: A.bottom - O.bottom + v.bottom,
                left: O.left - A.left + v.left,
                right: A.right - O.right + v.right
            },
            j = e.modifiersData.offset;
        if (l === ha && j) {
            var T = j[o];
            Object.keys(L).forEach(function(e) {
                var t = [ua, ca].indexOf(e) >= 0 ? 1 : -1,
                    n = [aa, ca].indexOf(e) >= 0 ? "y" : "x";
                L[e] += T[n] * t
            })
        }
        return L
    }

    function J() {
        for (var e = arguments.length, t = new Array(e), n = 0; e > n; n++) t[n] = arguments[n];
        return !t.some(function(e) {
            return !(e && "function" == typeof e.getBoundingClientRect)
        })
    }

    function K(e) {
        void 0 === e && (e = {});
        var t = e,
            n = t.defaultModifiers,
            r = void 0 === n ? [] : n,
            o = t.defaultOptions,
            i = void 0 === o ? Ta : o;
        return function(e, t, n) {
            function o() {
                c.orderedModifiers.forEach(function(e) {
                    var t = e.name,
                        n = e.options,
                        r = void 0 === n ? {} : n,
                        o = e.effect;
                    if ("function" == typeof o) {
                        var i = o({
                                state: c,
                                name: t,
                                instance: p,
                                options: r
                            }),
                            a = function() {};
                        u.push(i || a)
                    }
                })
            }

            function a() {
                u.forEach(function(e) {
                    return e()
                }), u = []
            }
            void 0 === n && (n = i);
            var c = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign(Object.assign({}, Ta), i),
                    modifiersData: {},
                    elements: {
                        reference: e,
                        popper: t
                    },
                    attributes: {},
                    styles: {}
                },
                u = [],
                s = !1,
                p = {
                    state: c,
                    setOptions: function(n, u) {
                        a(), c.options = Object.assign(Object.assign(Object.assign({}, i), c.options), n), c.scrollParents = {
                            reference: f(e) ? S(e) : e.contextElement ? S(e.contextElement) : [],
                            popper: S(t)
                        };
                        var s = D(I([].concat(r, c.options.modifiers)));
                        c.orderedModifiers = s.filter(function(e) {
                            return e.enabled
                        }), o(), p.forceUpdate(), u && u()
                    },
                    forceUpdate: function() {
                        if (!s) {
                            var e = c.elements,
                                t = e.reference,
                                n = e.popper;
                            if (J(t, n)) {
                                c.rects = {
                                    reference: P(t, T(n), "fixed" === c.options.strategy),
                                    popper: O(n)
                                }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(e) {
                                    return c.modifiersData[e.name] = Object.assign({}, e.data)
                                });
                                for (var r = 0; r < c.orderedModifiers.length; r++)
                                    if (c.reset !== !0) {
                                        var o = c.orderedModifiers[r],
                                            i = o.fn,
                                            a = o.options,
                                            u = void 0 === a ? {} : a,
                                            l = o.name;
                                        "function" == typeof i && (c = i({
                                            state: c,
                                            options: u,
                                            name: l,
                                            instance: p
                                        }) || c)
                                    } else c.reset = !1, r = -1
                            }
                        }
                    },
                    destroy: function() {
                        a(), s = !0
                    }
                };
            return J(e, t) ? (p.setOptions(n, function(e) {
                !s && n.onFirstUpdate && n.onFirstUpdate(e)
            }), p) : p
        }
    }

    function X(e) {
        var t = e.state,
            n = e.instance,
            r = e.options,
            o = r.scroll,
            i = void 0 === o ? !0 : o,
            a = r.resize,
            c = void 0 === a ? !0 : a,
            u = p(t.elements.popper),
            s = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return i && s.forEach(function(e) {
                e.addEventListener("scroll", n.forceUpdate, Ca)
            }), c && u.addEventListener("resize", n.forceUpdate, Ca),
            function() {
                i && s.forEach(function(e) {
                    e.removeEventListener("scroll", n.forceUpdate, Ca)
                }), c && u.removeEventListener("resize", n.forceUpdate, Ca)
            }
    }

    function $(e) {
        var t = e.state,
            n = e.name;
        t.modifiersData[n] = W({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: "absolute",
            placement: t.placement
        })
    }

    function et(e) {
        var t = e.x,
            n = e.y,
            r = window,
            o = r.devicePixelRatio || 1;
        return {
            x: Math.round(t * o) / o || 0,
            y: Math.round(n * o) / o || 0
        }
    }

    function tt(e) {
        var t, n = e.popper,
            r = e.popperRect,
            o = e.placement,
            i = e.offsets,
            a = e.position,
            c = e.gpuAcceleration,
            u = e.adaptive,
            s = et(i),
            l = s.x,
            f = s.y,
            d = i.hasOwnProperty("x"),
            g = i.hasOwnProperty("y"),
            m = sa,
            h = aa,
            v = window;
        if (u) {
            var b = T(n);
            b === p(n) && (b = y(n)), o === aa && (h = ca, f -= b.clientHeight - r.height, f *= c ? 1 : -1), o === sa && (m = ua, l -= b.clientWidth - r.width, l *= c ? 1 : -1)
        }
        var w = Object.assign({
            position: a
        }, u && Ia);
        if (c) {
            var x;
            return Object.assign(Object.assign({}, w), {}, (x = {}, x[h] = g ? "0" : "", x[m] = d ? "0" : "", x.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + l + "px, " + f + "px)" : "translate3d(" + l + "px, " + f + "px, 0)", x))
        }
        return Object.assign(Object.assign({}, w), {}, (t = {}, t[h] = g ? f + "px" : "", t[m] = d ? l + "px" : "", t.transform = "", t))
    }

    function nt(e) {
        var t = e.state,
            n = e.options,
            r = n.gpuAcceleration,
            o = void 0 === r ? !0 : r,
            i = n.adaptive,
            a = void 0 === i ? !0 : i,
            c = {
                placement: M(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: o
            };
        null !== t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), tt(Object.assign(Object.assign({}, c), {}, {
            offsets: t.modifiersData.popperOffsets,
            position: t.options.strategy,
            adaptive: a
        })))), null !== t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), tt(Object.assign(Object.assign({}, c), {}, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1
        })))), t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
            "data-popper-placement": t.placement
        })
    }

    function rt(e) {
        var t = e.state;
        Object.keys(t.elements).forEach(function(e) {
            var n = t.styles[e] || {},
                r = t.attributes[e] || {},
                o = t.elements[e];
            d(o) && v(o) && (Object.assign(o.style, n), Object.keys(r).forEach(function(e) {
                var t = r[e];
                t === !1 ? o.removeAttribute(e) : o.setAttribute(e, t === !0 ? "" : t)
            }))
        })
    }

    function ot(e) {
        var t = e.state,
            n = {
                popper: {
                    position: t.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
        return Object.assign(t.elements.popper.style, n.popper), t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function() {
                Object.keys(t.elements).forEach(function(e) {
                    var r = t.elements[e],
                        o = t.attributes[e] || {},
                        i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]),
                        a = i.reduce(function(e, t) {
                            return e[t] = "", e
                        }, {});
                    d(r) && v(r) && (Object.assign(r.style, a), Object.keys(o).forEach(function(e) {
                        r.removeAttribute(e)
                    }))
                })
            }
    }

    function it(e, t, n) {
        var r = M(e),
            o = [sa, aa].indexOf(r) >= 0 ? -1 : 1,
            i = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
                placement: e
            })) : n,
            a = i[0],
            c = i[1];
        return a = a || 0, c = (c || 0) * o, [sa, ua].indexOf(r) >= 0 ? {
            x: c,
            y: a
        } : {
            x: a,
            y: c
        }
    }

    function at(e) {
        var t = e.state,
            n = e.options,
            r = e.name,
            o = n.offset,
            i = void 0 === o ? [0, 0] : o,
            a = ba.reduce(function(e, n) {
                return e[n] = it(n, t.rects, i), e
            }, {}),
            c = a[t.placement],
            u = c.x,
            s = c.y;
        null !== t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += s), t.modifiersData[r] = a
    }

    function ct(e) {
        return e.replace(/left|right|bottom|top/g, function(e) {
            return Ha[e]
        })
    }

    function ut(e) {
        return e.replace(/start|end/g, function(e) {
            return Na[e]
        })
    }

    function st(e, t) {
        void 0 === t && (t = {});
        var n = t,
            r = n.placement,
            o = n.boundary,
            i = n.rootBoundary,
            a = n.padding,
            c = n.flipVariations,
            u = n.allowedAutoPlacements,
            s = void 0 === u ? ba : u,
            p = U(r),
            l = p ? c ? ya : ya.filter(function(e) {
                return U(e) === p
            }) : la,
            f = l.filter(function(e) {
                return s.indexOf(e) >= 0
            });
        0 === f.length && (f = l);
        var d = f.reduce(function(t, n) {
            return t[n] = Y(e, {
                placement: n,
                boundary: o,
                rootBoundary: i,
                padding: a
            })[M(n)], t
        }, {});
        return Object.keys(d).sort(function(e, t) {
            return d[e] - d[t]
        })
    }

    function pt(e) {
        if (M(e) === pa) return [];
        var t = ct(e);
        return [ut(e), t, ut(t)]
    }

    function lt(e) {
        var t = e.state,
            n = e.options,
            r = e.name;
        if (!t.modifiersData[r]._skip) {
            for (var o = n.mainAxis, i = void 0 === o ? !0 : o, a = n.altAxis, c = void 0 === a ? !0 : a, u = n.fallbackPlacements, s = n.padding, p = n.boundary, l = n.rootBoundary, f = n.altBoundary, d = n.flipVariations, g = void 0 === d ? !0 : d, m = n.allowedAutoPlacements, h = t.options.placement, v = M(h), y = v === h, b = u || (y || !g ? [ct(h)] : pt(h)), w = [h].concat(b).reduce(function(e, n) {
                    return e.concat(M(n) === pa ? st(t, {
                        placement: n,
                        boundary: p,
                        rootBoundary: l,
                        padding: s,
                        flipVariations: g,
                        allowedAutoPlacements: m
                    }) : n)
                }, []), x = t.rects.reference, P = t.rects.popper, O = new Map, k = !0, E = w[0], S = 0; S < w.length; S++) {
                var A = w[S],
                    L = M(A),
                    j = U(A) === fa,
                    T = [aa, ca].indexOf(L) >= 0,
                    C = T ? "width" : "height",
                    D = Y(t, {
                        placement: A,
                        boundary: p,
                        rootBoundary: l,
                        altBoundary: f,
                        padding: s
                    }),
                    I = T ? j ? ua : sa : j ? ca : aa;
                x[C] > P[C] && (I = ct(I));
                var R = ct(I),
                    _ = [];
                if (i && _.push(D[L] <= 0), c && _.push(D[I] <= 0, D[R] <= 0), _.every(function(e) {
                        return e
                    })) {
                    E = A, k = !1;
                    break
                }
                O.set(A, _)
            }
            if (k)
                for (var z = g ? 3 : 1, H = function(e) {
                        var t = w.find(function(t) {
                            var n = O.get(t);
                            return n ? n.slice(0, e).every(function(e) {
                                return e
                            }) : void 0
                        });
                        return t ? (E = t, "break") : void 0
                    }, N = z; N > 0; N--) {
                    var B = H(N);
                    if ("break" === B) break
                }
            t.placement !== E && (t.modifiersData[r]._skip = !0, t.placement = E, t.reset = !0)
        }
    }

    function ft(e) {
        return "x" === e ? "y" : "x"
    }

    function dt(e, t, n) {
        return Math.max(e, Math.min(t, n))
    }

    function gt(e) {
        var t = e.state,
            n = e.options,
            r = e.name,
            o = n.mainAxis,
            i = void 0 === o ? !0 : o,
            a = n.altAxis,
            c = void 0 === a ? !1 : a,
            u = n.boundary,
            s = n.rootBoundary,
            p = n.altBoundary,
            l = n.padding,
            f = n.tether,
            d = void 0 === f ? !0 : f,
            g = n.tetherOffset,
            m = void 0 === g ? 0 : g,
            h = Y(t, {
                boundary: u,
                rootBoundary: s,
                padding: l,
                altBoundary: p
            }),
            v = M(t.placement),
            y = U(t.placement),
            b = !y,
            w = G(v),
            x = ft(w),
            P = t.modifiersData.popperOffsets,
            k = t.rects.reference,
            E = t.rects.popper,
            S = "function" == typeof m ? m(Object.assign(Object.assign({}, t.rects), {}, {
                placement: t.placement
            })) : m,
            A = {
                x: 0,
                y: 0
            };
        if (P) {
            if (i) {
                var L = "y" === w ? aa : sa,
                    j = "y" === w ? ca : ua,
                    C = "y" === w ? "height" : "width",
                    D = P[w],
                    I = P[w] + h[L],
                    R = P[w] - h[j],
                    _ = d ? -E[C] / 2 : 0,
                    z = y === fa ? k[C] : E[C],
                    H = y === fa ? -E[C] : -k[C],
                    N = t.elements.arrow,
                    B = d && N ? O(N) : {
                        width: 0,
                        height: 0
                    },
                    F = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : q(),
                    V = F[L],
                    W = F[j],
                    Q = dt(0, k[C], B[C]),
                    Z = b ? k[C] / 2 - _ - Q - V - S : z - Q - V - S,
                    J = b ? -k[C] / 2 + _ + Q + W + S : H + Q + W + S,
                    K = t.elements.arrow && T(t.elements.arrow),
                    X = K ? "y" === w ? K.clientTop || 0 : K.clientLeft || 0 : 0,
                    $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement][w] : 0,
                    et = P[w] + Z - $ - X,
                    tt = P[w] + J - $,
                    nt = dt(d ? Math.min(I, et) : I, D, d ? Math.max(R, tt) : R);
                P[w] = nt, A[w] = nt - D
            }
            if (c) {
                var rt = "x" === w ? aa : sa,
                    ot = "x" === w ? ca : ua,
                    it = P[x],
                    at = it + h[rt],
                    ct = it - h[ot],
                    ut = dt(at, it, ct);
                P[x] = ut, A[x] = ut - it
            }
            t.modifiersData[r] = A
        }
    }

    function mt(e) {
        var t, n = e.state,
            r = e.name,
            o = n.elements.arrow,
            i = n.modifiersData.popperOffsets,
            a = M(n.placement),
            c = G(a),
            u = [sa, ua].indexOf(a) >= 0,
            s = u ? "height" : "width";
        if (o && i) {
            var p = n.modifiersData[r + "#persistent"].padding,
                l = O(o),
                f = "y" === c ? aa : sa,
                d = "y" === c ? ca : ua,
                g = n.rects.reference[s] + n.rects.reference[c] - i[c] - n.rects.popper[s],
                m = i[c] - n.rects.reference[c],
                h = T(o),
                v = h ? "y" === c ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
                y = g / 2 - m / 2,
                b = p[f],
                w = v - l[s] - p[d],
                x = v / 2 - l[s] / 2 + y,
                P = dt(b, x, w),
                k = c;
            n.modifiersData[r] = (t = {}, t[k] = P, t.centerOffset = P - x, t)
        }
    }

    function ht(e) {
        var t = e.state,
            n = e.options,
            r = e.name,
            o = n.element,
            i = void 0 === o ? "[data-popper-arrow]" : o,
            a = n.padding,
            c = void 0 === a ? 0 : a;
        null !== i && ("string" != typeof i || (i = t.elements.popper.querySelector(i))) && z(t.elements.popper, i) && (t.elements.arrow = i, t.modifiersData[r + "#persistent"] = {
            padding: Q("number" != typeof c ? c : Z(c, la))
        })
    }

    function vt(e, t, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }), {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
        }
    }

    function yt(e) {
        return [aa, ua, ca, sa].some(function(t) {
            return e[t] >= 0
        })
    }

    function bt(e) {
        var t = e.state,
            n = e.name,
            r = t.rects.reference,
            o = t.rects.popper,
            i = t.modifiersData.preventOverflow,
            a = Y(t, {
                elementContext: "reference"
            }),
            c = Y(t, {
                altBoundary: !0
            }),
            u = vt(a, r),
            s = vt(c, o, i),
            p = yt(u),
            l = yt(s);
        t.modifiersData[n] = {
            referenceClippingOffsets: u,
            popperEscapeOffsets: s,
            isReferenceHidden: p,
            hasPopperEscaped: l
        }, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
            "data-popper-reference-hidden": p,
            "data-popper-escaped": l
        })
    }
    var wt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        xt = function(e) {
            return e && e.Math === Math && e
        },
        Pt = xt("object" == ("undefined" == typeof globalThis ? "undefined" : n(globalThis)) && globalThis) || xt("object" == ("undefined" == typeof window ? "undefined" : n(window)) && window) || xt("object" == ("undefined" == typeof self ? "undefined" : n(self)) && self) || xt("object" == ("undefined" == typeof wt ? "undefined" : n(wt)) && wt) || function() {
            return this
        }() || Function("return this")(),
        Ot = function(e) {
            try {
                return !!e()
            } catch (t) {
                return !0
            }
        },
        kt = !1,
        Et = {}.propertyIsEnumerable,
        St = Object.getOwnPropertyDescriptor,
        At = St && !Et.call({
            1: 2
        }, 1),
        Lt = At ? function(e) {
            var t = St(this, e);
            return !!t && t.enumerable
        } : Et,
        jt = {
            f: Lt
        },
        Tt = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        },
        Ct = {}.toString,
        Dt = function(e) {
            return Ct.call(e).slice(8, -1)
        },
        Mt = "".split,
        It = Ot(function() {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return "String" == Dt(e) ? Mt.call(e, "") : Object(e)
        } : Object,
        Rt = function(e) {
            if (void 0 === e) throw TypeError("Can't call method on " + e);
            return e
        },
        _t = function(e) {
            return It(Rt(e))
        },
        zt = function(e) {
            return "object" === r(e) ? null !== e : "function" == typeof e
        },
        Ht = function(e, t) {
            if (!zt(e)) return e;
            var n, r;
            if (t && "function" == typeof(n = e.toString) && !zt(r = n.call(e))) return r;
            if ("function" == typeof(n = e.valueOf) && !zt(r = n.call(e))) return r;
            if (!t && "function" == typeof(n = e.toString) && !zt(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        },
        Nt = {}.hasOwnProperty,
        Bt = function(e, t) {
            return Nt.call(e, t)
        },
        Ft = Pt.document,
        Vt = zt(Ft) && zt(Ft.createElement),
        Ut = function(e) {
            return Vt ? Ft.createElement(e) : {}
        },
        Gt = !kt && !Ot(function() {
            return 7 !== Object.defineProperty(Ut("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }),
        Wt = Object.getOwnPropertyDescriptor,
        qt = kt ? Wt : function(e, t) {
            if (e = _t(e), t = Ht(t, !0), Gt) try {
                return Wt(e, t)
            } catch (n) {}
            return Bt(e, t) ? Tt(!jt.f.call(e, t), e[t]) : void 0
        },
        Qt = {
            f: qt
        },
        Zt = function(e) {
            if (!zt(e)) throw TypeError(String(e) + " is not an object");
            return e
        },
        Yt = Object.defineProperty,
        Jt = kt ? Yt : function(e, t, n) {
            if (Zt(e), t = Ht(t, !0), Zt(n), Gt) try {
                return Yt(e, t, n)
            } catch (r) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e
        },
        Kt = {
            f: Jt
        },
        Xt = kt ? function(e, t, n) {
            return Kt.f(e, t, Tt(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        },
        $t = function(e, t) {
            try {
                Xt(Pt, e, t)
            } catch (n) {
                Pt[e] = t
            }
            return t
        },
        en = "__core-js_shared__",
        tn = Pt[en] || $t(en, {}),
        nn = tn,
        rn = Function.toString;
    "function" != typeof nn.inspectSource && (nn.inspectSource = function(e) {
        return rn.call(e)
    });
    var on, an, cn, un = nn.inspectSource,
        sn = Pt.WeakMap,
        pn = "function" == typeof sn && /native code/.test(un(sn)),
        ln = t(function(e) {
            (e.exports = function(e, t) {
                return nn[e] || (nn[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.8.3",
                mode: "global",
                copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
            })
        }),
        fn = 0,
        dn = Math.random(),
        gn = function(e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++fn + dn).toString(36)
        },
        mn = ln("keys"),
        hn = function(e) {
            return mn[e] || (mn[e] = gn(e))
        },
        vn = {},
        yn = Pt.WeakMap,
        bn = function(e) {
            return cn(e) ? an(e) : on(e, {})
        },
        wn = function(e) {
            return function(t) {
                var n;
                if (!zt(t) || (n = an(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                return n
            }
        };
    if (pn) {
        var xn = nn.state || (nn.state = new yn),
            Pn = xn.get,
            On = xn.has,
            kn = xn.set;
        on = function(e, t) {
            return t.facade = e, kn.call(xn, e, t), t
        }, an = function(e) {
            return Pn.call(xn, e) || {}
        }, cn = function(e) {
            return On.call(xn, e)
        }
    } else {
        var En = hn("state");
        vn[En] = !0, on = function(e, t) {
            return t.facade = e, Xt(e, En, t), t
        }, an = function(e) {
            return Bt(e, En) ? e[En] : {}
        }, cn = function(e) {
            return Bt(e, En)
        }
    }
    var Sn = {
            set: on,
            get: an,
            has: cn,
            enforce: bn,
            getterFor: wn
        },
        An = t(function(e) {
            var t = Sn.get,
                n = Sn.enforce,
                r = String(String).split("String");
            (e.exports = function(e, t, o, i) {
                var a, c = i ? !!i.unsafe : !1,
                    u = i ? !!i.enumerable : !1,
                    s = i ? !!i.noTargetGet : !1;
                return "function" == typeof o && ("string" != typeof t || Bt(o, "name") || Xt(o, "name", t), a = n(o), a.source || (a.source = r.join("string" == typeof t ? t : ""))), e === Pt ? void(u ? e[t] = o : $t(t, o)) : (c ? !s && e[t] && (u = !0) : delete e[t], void(u ? e[t] = o : Xt(e, t, o)))
            })(Function.prototype, "toString", function() {
                return "function" == typeof this && t(this).source || un(this)
            })
        }),
        Ln = Pt,
        jn = function(e) {
            return "function" == typeof e ? e : void 0
        },
        Tn = function(e, t) {
            return arguments.length < 2 ? jn(Ln[e]) || jn(Pt[e]) : Ln[e] && Ln[e][t] || Pt[e] && Pt[e][t]
        },
        Cn = Math.ceil,
        Dn = Math.floor,
        Mn = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? Dn : Cn)(e)
        },
        In = Math.min,
        Rn = function(e) {
            return e > 0 ? In(Mn(e), 9007199254740991) : 0
        },
        _n = Math.max,
        zn = Math.min,
        Hn = function(e, t) {
            var n = Mn(e);
            return 0 > n ? _n(n + t, 0) : zn(n, t)
        },
        Nn = function(e) {
            return function(t, n, r) {
                var o, i = _t(t),
                    a = Rn(i.length),
                    c = Hn(r, a);
                if (e && n !== n) {
                    for (; a > c;)
                        if (o = i[c++], o !== o) return !0
                } else
                    for (; a > c; c++)
                        if ((e || c in i) && i[c] === n) return e || c || 0;
                return !e && -1
            }
        },
        Bn = {
            includes: Nn(!0),
            indexOf: Nn(!1)
        },
        Fn = Bn.indexOf,
        Vn = function(e, t) {
            var n, r = _t(e),
                o = 0,
                i = [];
            for (n in r) !Bt(vn, n) && Bt(r, n) && i.push(n);
            for (; t.length > o;) Bt(r, n = t[o++]) && (~Fn(i, n) || i.push(n));
            return i
        },
        Un = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        Gn = Un.concat("length", "prototype"),
        Wn = Object.getOwnPropertyNames || function(e) {
            return Vn(e, Gn)
        },
        qn = {
            f: Wn
        },
        Qn = Object.getOwnPropertySymbols,
        Zn = {
            f: Qn
        },
        Yn = Tn("Reflect", "ownKeys") || function(e) {
            var t = qn.f(Zt(e)),
                n = Zn.f;
            return n ? t.concat(n(e)) : t
        },
        Jn = function(e, t) {
            for (var n = Yn(t), r = Kt.f, o = Qt.f, i = 0; i < n.length; i++) {
                var a = n[i];
                Bt(e, a) || r(e, a, o(t, a))
            }
        },
        Kn = /#|\.prototype\./,
        Xn = function(e, t) {
            var n = er[$n(e)];
            return n === nr ? !0 : n === tr ? !1 : "function" == typeof t ? Ot(t) : !!t
        },
        $n = Xn.normalize = function(e) {
            return String(e).replace(Kn, ".").toLowerCase()
        },
        er = Xn.data = {},
        tr = Xn.NATIVE = "N",
        nr = Xn.POLYFILL = "P",
        rr = Xn,
        or = Qt.f,
        ir = function(e, t) {
            var n, r, i, a, c, u, s = e.target,
                p = e.global,
                l = e.stat;
            if (r = p ? Pt : l ? Pt[s] || $t(s, {}) : (Pt[s] || {}).prototype)
                for (i in t) {
                    if (c = t[i], e.noTargetGet ? (u = or(r, i), a = u && u.value) : a = r[i], n = rr(p ? i : s + (l ? "." : "#") + i, e.forced), !n && void 0 !== a) {
                        if (o(c) === o(a)) continue;
                        Jn(c, a)
                    }(e.sham || a && a.sham) && Xt(c, "sham", !0), An(r, i, c, e)
                }
        },
        ar = !Ot(function() {
            return Object.isExtensible(Object.preventExtensions({}))
        }),
        cr = t(function(e) {
            function t(e) {
                "@babel/helpers - typeof";
                return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var n = Kt.f,
                r = gn("meta"),
                o = 0,
                i = Object.isExtensible || function() {
                    return !0
                },
                a = function(e) {
                    n(e, r, {
                        value: {
                            objectID: "O" + ++o,
                            weakData: {}
                        }
                    })
                },
                c = function(e, n) {
                    if (!zt(e)) return "symbol" == t(e) ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!Bt(e, r)) {
                        if (!i(e)) return "F";
                        if (!n) return "E";
                        a(e)
                    }
                    return e[r].objectID
                },
                u = function(e, t) {
                    if (!Bt(e, r)) {
                        if (!i(e)) return !0;
                        if (!t) return !1;
                        a(e)
                    }
                    return e[r].weakData
                },
                s = function(e) {
                    return ar && p.REQUIRED && i(e) && !Bt(e, r) && a(e), e
                },
                p = e.exports = {
                    REQUIRED: !1,
                    fastKey: c,
                    getWeakData: u,
                    onFreeze: s
                };
            vn[r] = !0
        }),
        ur = (cr.REQUIRED, cr.fastKey, cr.getWeakData, cr.onFreeze, !!Object.getOwnPropertySymbols && !Ot(function() {
            return !String(Symbol())
        })),
        sr = ur && !Symbol.sham && "symbol" == i(Symbol.iterator),
        pr = ln("wks"),
        lr = Pt.Symbol,
        fr = sr ? lr : lr && lr.withoutSetter || gn,
        dr = function(e) {
            return Bt(pr, e) || (pr[e] = ur && Bt(lr, e) ? lr[e] : fr("Symbol." + e)), pr[e]
        },
        gr = {},
        mr = dr("iterator"),
        hr = Array.prototype,
        vr = function(e) {
            return void 0 !== e && (gr.Array === e || hr[mr] === e)
        },
        yr = function(e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
        },
        br = function(e, t, n) {
            if (yr(e), void 0 === t) return e;
            switch (n) {
                case 0:
                    return function() {
                        return e.call(t)
                    };
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function(n, r, o) {
                        return e.call(t, n, r, o)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        },
        wr = dr("toStringTag"),
        xr = {};
    xr[wr] = "z";
    var Pr = "[object z]" === String(xr),
        Or = dr("toStringTag"),
        kr = "Arguments" == Dt(function() {
            return arguments
        }()),
        Er = function(e, t) {
            try {
                return e[t]
            } catch (n) {}
        },
        Sr = Pr ? Dt : function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = Er(t = Object(e), Or)) ? n : kr ? Dt(t) : "Object" == (r = Dt(t)) && "function" == typeof t.callee ? "Arguments" : r
        },
        Ar = dr("iterator"),
        Lr = function(e) {
            return void 0 !== e ? e[Ar] || e["@@iterator"] || gr[Sr(e)] : void 0
        },
        jr = function(e) {
            var t = e["return"];
            return void 0 !== t ? Zt(t.call(e)).value : void 0
        },
        Tr = function(e, t) {
            this.stopped = e, this.result = t
        },
        Cr = function(e, t, n) {
            var r, o, i, c, u, s, p, l = n && n.that,
                f = !(!n || !n.AS_ENTRIES),
                d = !(!n || !n.IS_ITERATOR),
                g = !(!n || !n.INTERRUPTED),
                m = br(t, l, 1 + f + g),
                h = function(e) {
                    return r && jr(r), new Tr(!0, e)
                },
                v = function(e) {
                    return f ? (Zt(e), g ? m(e[0], e[1], h) : m(e[0], e[1])) : g ? m(e, h) : m(e)
                };
            if (d) r = e;
            else {
                if (o = Lr(e), "function" != typeof o) throw TypeError("Target is not iterable");
                if (vr(o)) {
                    for (i = 0, c = Rn(e.length); c > i; i++)
                        if (u = v(e[i]), u && u instanceof Tr) return u;
                    return new Tr(!1)
                }
                r = o.call(e)
            }
            for (s = r.next; !(p = s.call(r)).done;) {
                try {
                    u = v(p.value)
                } catch (y) {
                    throw jr(r), y
                }
                if ("object" == a(u) && u && u instanceof Tr) return u
            }
            return new Tr(!1)
        },
        Dr = function(e, t, n) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e
        },
        Mr = dr("iterator"),
        Ir = !1;
    try {
        var Rr = 0,
            _r = {
                next: function() {
                    return {
                        done: !!Rr++
                    }
                },
                "return": function() {
                    Ir = !0
                }
            };
        _r[Mr] = function() {
            return this
        }, Array.from(_r, function() {
            throw 2
        })
    } catch (zr) {}
    var Hr, Nr = function(e, t) {
            if (!t && !Ir) return !1;
            var n = !1;
            try {
                var r = {};
                r[Mr] = function() {
                    return {
                        next: function() {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }, e(r)
            } catch (o) {}
            return n
        },
        Br = Kt.f,
        Fr = dr("toStringTag"),
        Vr = function(e, t, n) {
            e && !Bt(e = n ? e : e.prototype, Fr) && Br(e, Fr, {
                configurable: !0,
                value: t
            })
        },
        Ur = function(e) {
            if (!zt(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
            return e
        },
        Gr = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var e, t = !1,
                n = {};
            try {
                e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, e.call(n, []), t = n instanceof Array
            } catch (r) {}
            return function(n, r) {
                return Zt(n), Ur(r), t ? e.call(n, r) : n.__proto__ = r, n
            }
        }() : void 0),
        Wr = function(e, t, n) {
            var r, o;
            return Gr && "function" == typeof(r = t.constructor) && r !== n && zt(o = r.prototype) && o !== n.prototype && Gr(e, o), e
        },
        qr = function(e, t, n) {
            var r = -1 !== e.indexOf("Map"),
                o = -1 !== e.indexOf("Weak"),
                i = r ? "set" : "add",
                a = Pt[e],
                c = a && a.prototype,
                u = a,
                s = {},
                p = function(e) {
                    var t = c[e];
                    An(c, e, "add" == e ? function(e) {
                        return t.call(this, 0 === e ? 0 : e), this
                    } : "delete" == e ? function(e) {
                        return o && !zt(e) ? !1 : t.call(this, 0 === e ? 0 : e)
                    } : "get" == e ? function(e) {
                        return o && !zt(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                    } : "has" == e ? function(e) {
                        return o && !zt(e) ? !1 : t.call(this, 0 === e ? 0 : e)
                    } : function(e, n) {
                        return t.call(this, 0 === e ? 0 : e, n), this
                    })
                };
            if (rr(e, "function" != typeof a || !(o || c.forEach && !Ot(function() {
                    (new a).entries().next()
                })))) u = n.getConstructor(t, e, r, i), cr.REQUIRED = !0;
            else if (rr(e, !0)) {
                var l = new u,
                    f = l[i](o ? {} : -0, 1) != l,
                    d = Ot(function() {
                        l.has(1)
                    }),
                    g = Nr(function(e) {
                        new a(e)
                    }),
                    m = !o && Ot(function() {
                        for (var e = new a, t = 5; t--;) e[i](t, t);
                        return !e.has(-0)
                    });
                g || (u = t(function(t, n) {
                    Dr(t, u, e);
                    var o = Wr(new a, t, u);
                    return void 0 !== n && Cr(n, o[i], {
                        that: o,
                        AS_ENTRIES: r
                    }), o
                }), u.prototype = c, c.constructor = u), (d || m) && (p("delete"), p("has"), r && p("get")), (m || f) && p(i), o && c.clear && delete c.clear
            }
            return s[e] = u, ir({
                global: !0,
                forced: u !== a
            }, s), Vr(u, e), o || n.setStrong(u, e, r), u
        },
        Qr = Object.keys || function(e) {
            return Vn(e, Un)
        },
        Zr = kt ? Object.defineProperties : function(e, t) {
            Zt(e);
            for (var n, r = Qr(t), o = r.length, i = 0; o > i;) Kt.f(e, n = r[i++], t[n]);
            return e
        },
        Yr = Tn("document", "documentElement"),
        Jr = ">",
        Kr = "<",
        Xr = "prototype",
        $r = "script",
        eo = hn("IE_PROTO"),
        to = function() {},
        no = function(e) {
            return Kr + $r + Jr + e + Kr + "/" + $r + Jr
        },
        ro = function(e) {
            e.write(no("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
        },
        oo = function() {
            var e, t = Ut("iframe"),
                n = "java" + $r + ":";
            return t.style.display = "none", Yr.appendChild(t), t.src = String(n), e = t.contentWindow.document, e.open(), e.write(no("document.F=Object")), e.close(), e.F
        },
        io = function() {
            try {
                Hr = document.domain && new ActiveXObject("htmlfile")
            } catch (e) {}
            io = Hr ? ro(Hr) : oo();
            for (var t = Un.length; t--;) delete io[Xr][Un[t]];
            return io()
        };
    vn[eo] = !0;
    var ao, co, uo, so = Object.create || function(e, t) {
            var n;
            return null !== e ? (to[Xr] = Zt(e), n = new to, to[Xr] = null, n[eo] = e) : n = io(), void 0 === t ? n : Zr(n, t)
        },
        po = function(e, t, n) {
            for (var r in t) An(e, r, t[r], n);
            return e
        },
        lo = function(e) {
            return Object(Rt(e))
        },
        fo = !Ot(function() {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        }),
        go = hn("IE_PROTO"),
        mo = Object.prototype,
        ho = fo ? Object.getPrototypeOf : function(e) {
            return e = lo(e), Bt(e, go) ? e[go] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? mo : null
        },
        vo = dr("iterator"),
        yo = !1,
        bo = function() {
            return this
        };
    [].keys && (uo = [].keys(), "next" in uo ? (co = ho(ho(uo)), co !== Object.prototype && (ao = co)) : yo = !0);
    var wo = void 0 === ao || Ot(function() {
        var e = {};
        return ao[vo].call(e) !== e
    });
    wo && (ao = {}), Bt(ao, vo) || Xt(ao, vo, bo);
    var xo = {
            IteratorPrototype: ao,
            BUGGY_SAFARI_ITERATORS: yo
        },
        Po = xo.IteratorPrototype,
        Oo = function() {
            return this
        },
        ko = function(e, t, n) {
            var r = t + " Iterator";
            return e.prototype = so(Po, {
                next: Tt(1, n)
            }), Vr(e, r, !1), gr[r] = Oo, e
        },
        Eo = xo.IteratorPrototype,
        So = xo.BUGGY_SAFARI_ITERATORS,
        Ao = dr("iterator"),
        Lo = "keys",
        jo = "values",
        To = "entries",
        Co = function() {
            return this
        },
        Do = function(e, t, n, r, o, i, a) {
            ko(n, t, r);
            var c, u, s, p = function(e) {
                    if (e === o && m) return m;
                    if (!So && e in d) return d[e];
                    switch (e) {
                        case Lo:
                            return function() {
                                return new n(this, e)
                            };
                        case jo:
                            return function() {
                                return new n(this, e)
                            };
                        case To:
                            return function() {
                                return new n(this, e)
                            }
                    }
                    return function() {
                        return new n(this)
                    }
                },
                l = t + " Iterator",
                f = !1,
                d = e.prototype,
                g = d[Ao] || d["@@iterator"] || o && d[o],
                m = !So && g || p(o),
                h = "Array" == t ? d.entries || g : g;
            if (h && (c = ho(h.call(new e)), Eo !== Object.prototype && c.next && (ho(c) !== Eo && (Gr ? Gr(c, Eo) : "function" != typeof c[Ao] && Xt(c, Ao, Co)), Vr(c, l, !0))), o === jo && g && g.name !== jo && (f = !0, m = function() {
                    return g.call(this)
                }), d[Ao] !== m && Xt(d, Ao, m), gr[t] = m, o)
                if (u = {
                        values: p(jo),
                        keys: i ? m : p(Lo),
                        entries: p(To)
                    }, a)
                    for (s in u) !So && !f && s in d || An(d, s, u[s]);
                else ir({
                    target: t,
                    proto: !0,
                    forced: So || f
                }, u);
            return u
        },
        Mo = dr("species"),
        Io = function(e) {
            var t = Tn(e),
                n = Kt.f;
            kt && t && !t[Mo] && n(t, Mo, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        },
        Ro = Kt.f,
        _o = cr.fastKey,
        zo = Sn.set,
        Ho = Sn.getterFor,
        No = {
            getConstructor: function(e, t, n, r) {
                var o = e(function(e, i) {
                        Dr(e, o, t), zo(e, {
                            type: t,
                            index: so({}),
                            first: void 0,
                            last: void 0,
                            size: 0
                        }), kt || (e.size = 0), void 0 !== i && Cr(i, e[r], {
                            that: e,
                            AS_ENTRIES: n
                        })
                    }),
                    i = Ho(t),
                    a = function(e, t, n) {
                        var r, o, a = i(e),
                            u = c(e, t);
                        return u ? u.value = n : (a.last = u = {
                            index: o = _o(t, !0),
                            key: t,
                            value: n,
                            previous: r = a.last,
                            next: void 0,
                            removed: !1
                        }, a.first || (a.first = u), r && (r.next = u), kt ? a.size++ : e.size++, "F" !== o && (a.index[o] = u)), e
                    },
                    c = function(e, t) {
                        var n, r = i(e),
                            o = _o(t);
                        if ("F" !== o) return r.index[o];
                        for (n = r.first; n; n = n.next)
                            if (n.key === t) return n
                    };
                return po(o.prototype, {
                    clear: function() {
                        for (var e = this, t = i(e), n = t.index, r = t.first; r;) r.removed = !0, r.previous && (r.previous = r.previous.next = void 0), delete n[r.index], r = r.next;
                        t.first = t.last = void 0, kt ? t.size = 0 : e.size = 0
                    },
                    "delete": function(e) {
                        var t = this,
                            n = i(t),
                            r = c(t, e);
                        if (r) {
                            var o = r.next,
                                a = r.previous;
                            delete n.index[r.index], r.removed = !0, a && (a.next = o), o && (o.previous = a), n.first === r && (n.first = o), n.last === r && (n.last = a), kt ? n.size-- : t.size--
                        }
                        return !!r
                    },
                    forEach: function(e) {
                        for (var t, n = i(this), r = br(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.next : n.first;)
                            for (r(t.value, t.key, this); t && t.removed;) t = t.previous
                    },
                    has: function(e) {
                        return !!c(this, e)
                    }
                }), po(o.prototype, n ? {
                    get: function(e) {
                        var t = c(this, e);
                        return t && t.value
                    },
                    set: function(e, t) {
                        return a(this, 0 === e ? 0 : e, t)
                    }
                } : {
                    add: function(e) {
                        return a(this, e = 0 === e ? 0 : e, e)
                    }
                }), kt && Ro(o.prototype, "size", {
                    get: function() {
                        return i(this).size
                    }
                }), o
            },
            setStrong: function(e, t, n) {
                var r = t + " Iterator",
                    o = Ho(t),
                    i = Ho(r);
                Do(e, t, function(e, t) {
                    zo(this, {
                        type: r,
                        target: e,
                        state: o(e),
                        kind: t,
                        last: void 0
                    })
                }, function() {
                    for (var e = i(this), t = e.kind, n = e.last; n && n.removed;) n = n.previous;
                    return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
                        value: n.key,
                        done: !1
                    } : "values" == t ? {
                        value: n.value,
                        done: !1
                    } : {
                        value: [n.key, n.value],
                        done: !1
                    } : (e.target = void 0, {
                        value: void 0,
                        done: !0
                    })
                }, n ? "entries" : "values", !n, !0), Io(t)
            }
        },
        Bo = (qr("Map", function(e) {
            return function() {
                return e(this, arguments.length ? arguments[0] : void 0)
            }
        }, No), Pr ? {}.toString : function() {
            return "[object " + Sr(this) + "]"
        });
    Pr || An(Object.prototype, "toString", Bo, {
        unsafe: !0
    });
    var Fo = function(e) {
            return function(t, n) {
                var r, o, i = String(Rt(t)),
                    a = Mn(n),
                    c = i.length;
                return 0 > a || a >= c ? e ? "" : void 0 : (r = i.charCodeAt(a), 55296 > r || r > 56319 || a + 1 === c || (o = i.charCodeAt(a + 1)) < 56320 || o > 57343 ? e ? i.charAt(a) : r : e ? i.slice(a, a + 2) : (r - 55296 << 10) + (o - 56320) + 65536)
            }
        },
        Vo = {
            codeAt: Fo(!1),
            charAt: Fo(!0)
        },
        Uo = Vo.charAt,
        Go = "String Iterator",
        Wo = Sn.set,
        qo = Sn.getterFor(Go);
    Do(String, "String", function(e) {
        Wo(this, {
            type: Go,
            string: String(e),
            index: 0
        })
    }, function() {
        var e, t = qo(this),
            n = t.string,
            r = t.index;
        return r >= n.length ? {
            value: void 0,
            done: !0
        } : (e = Uo(n, r), t.index += e.length, {
            value: e,
            done: !1
        })
    });
    var Qo = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        },
        Zo = dr("unscopables"),
        Yo = Array.prototype;
    void 0 == Yo[Zo] && Kt.f(Yo, Zo, {
        configurable: !0,
        value: so({})
    });
    var Jo = function(e) {
            Yo[Zo][e] = !0
        },
        Ko = "Array Iterator",
        Xo = Sn.set,
        $o = Sn.getterFor(Ko),
        ei = Do(Array, "Array", function(e, t) {
            Xo(this, {
                type: Ko,
                target: _t(e),
                index: 0,
                kind: t
            })
        }, function() {
            var e = $o(this),
                t = e.target,
                n = e.kind,
                r = e.index++;
            return !t || r >= t.length ? (e.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == n ? {
                value: r,
                done: !1
            } : "values" == n ? {
                value: t[r],
                done: !1
            } : {
                value: [r, t[r]],
                done: !1
            }
        }, "values");
    gr.Arguments = gr.Array, Jo("keys"), Jo("values"), Jo("entries");
    var ti = dr("iterator"),
        ni = dr("toStringTag"),
        ri = ei.values;
    for (var oi in Qo) {
        var ii = Pt[oi],
            ai = ii && ii.prototype;
        if (ai) {
            if (ai[ti] !== ri) try {
                Xt(ai, ti, ri)
            } catch (zr) {
                ai[ti] = ri
            }
            if (ai[ni] || Xt(ai, ni, oi), Qo[oi])
                for (var ci in ei)
                    if (ai[ci] !== ei[ci]) try {
                        Xt(ai, ci, ei[ci])
                    } catch (zr) {
                        ai[ci] = ei[ci]
                    }
        }
    }
    var ui = (Ln.Map, qr("Set", function(e) {
            return function() {
                return e(this, arguments.length ? arguments[0] : void 0)
            }
        }, No), Ln.Set, Object.assign),
        si = Object.defineProperty,
        pi = !ui || Ot(function() {
            if (kt && 1 !== ui({
                    b: 1
                }, ui(si({}, "a", {
                    enumerable: !0,
                    get: function() {
                        si(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var e = {},
                t = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            return e[n] = 7, r.split("").forEach(function(e) {
                t[e] = e
            }), 7 != ui({}, e)[n] || Qr(ui({}, t)).join("") != r
        }) ? function(e) {
            for (var t = lo(e), n = arguments.length, r = 1, o = Zn.f, i = jt.f; n > r;)
                for (var a, c = It(arguments[r++]), u = o ? Qr(c).concat(o(c)) : Qr(c), s = u.length, p = 0; s > p;) a = u[p++], (!kt || i.call(c, a)) && (t[a] = c[a]);
            return t
        } : ui;
    ir({
        target: "Object",
        stat: !0,
        forced: Object.assign !== pi
    }, {
        assign: pi
    });
    var li = (Ln.Object.assign, Array.isArray || function(e) {
            return "Array" == Dt(e)
        }),
        fi = dr("species"),
        di = function(e, t) {
            var n;
            return li(e) && (n = e.constructor, "function" != typeof n || n !== Array && !li(n.prototype) ? zt(n) && (n = n[fi], null === n && (n = void 0)) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
        },
        gi = [].push,
        mi = function(e) {
            var t = 1 === e,
                n = 2 === e,
                r = 3 === e,
                o = 4 === e,
                i = 6 === e,
                a = 7 === e,
                c = 5 === e || i;
            return function(u, s, p, l) {
                for (var f, d, g = lo(u), m = It(g), h = br(s, p, 3), v = Rn(m.length), y = 0, b = l || di, w = t ? b(u, v) : n || a ? b(u, 0) : void 0; v > y; y++)
                    if ((c || y in m) && (f = m[y], d = h(f, y, g), e))
                        if (t) w[y] = d;
                        else if (d) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return f;
                    case 6:
                        return y;
                    case 2:
                        gi.call(w, f)
                } else switch (e) {
                    case 4:
                        return !1;
                    case 7:
                        gi.call(w, f)
                }
                return i ? -1 : r || o ? o : w
            }
        },
        hi = {
            forEach: mi(0),
            map: mi(1),
            filter: mi(2),
            some: mi(3),
            every: mi(4),
            find: mi(5),
            findIndex: mi(6),
            filterOut: mi(7)
        },
        vi = Object.defineProperty,
        yi = {},
        bi = function(e) {
            throw e
        },
        wi = function(e, t) {
            if (Bt(yi, e)) return yi[e];
            t || (t = {});
            var n = [][e],
                r = Bt(t, "ACCESSORS") ? t.ACCESSORS : !1,
                o = Bt(t, 0) ? t[0] : bi,
                i = Bt(t, 1) ? t[1] : void 0;
            return yi[e] = !!n && !Ot(function() {
                if (r && !kt) return !0;
                var e = {
                    length: -1
                };
                r ? vi(e, 1, {
                    enumerable: !0,
                    get: bi
                }) : e[1] = 1, n.call(e, o, i)
            })
        },
        xi = hi.find,
        Pi = "find",
        Oi = !0,
        ki = wi(Pi);
    Pi in [] && Array(1)[Pi](function() {
        Oi = !1
    }), ir({
        target: "Array",
        proto: !0,
        forced: Oi || !ki
    }, {
        find: function(e) {
            return xi(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), Jo(Pi);
    var Ei = Function.call,
        Si = function(e, t, n) {
            return br(Ei, Pt[e].prototype[t], n)
        },
        Ai = (Si("Array", "find"), function(e, t) {
            var n = [][e];
            return !!n && Ot(function() {
                n.call(null, t || function() {
                    throw 1
                }, 1)
            })
        }),
        Li = hi.forEach,
        ji = Ai("forEach"),
        Ti = wi("forEach"),
        Ci = ji && Ti ? [].forEach : function(e) {
            return Li(this, e, arguments.length > 1 ? arguments[1] : void 0)
        };
    ir({
        target: "Array",
        proto: !0,
        forced: [].forEach !== Ci
    }, {
        forEach: Ci
    });
    var Di = (Si("Array", "forEach"), hi.some),
        Mi = Ai("some"),
        Ii = wi("some");
    ir({
        target: "Array",
        proto: !0,
        forced: !Mi || !Ii
    }, {
        some: function(e) {
            return Di(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Ri, _i, zi = (Si("Array", "some"), Tn("navigator", "userAgent") || ""),
        Hi = Pt.process,
        Ni = Hi && Hi.versions,
        Bi = Ni && Ni.v8;
    Bi ? (Ri = Bi.split("."), _i = Ri[0] + Ri[1]) : zi && (Ri = zi.match(/Edge\/(\d+)/), (!Ri || Ri[1] >= 74) && (Ri = zi.match(/Chrome\/(\d+)/), Ri && (_i = Ri[1])));
    var Fi = _i && +_i,
        Vi = dr("species"),
        Ui = function(e) {
            return Fi >= 51 || !Ot(function() {
                var t = [],
                    n = t.constructor = {};
                return n[Vi] = function() {
                    return {
                        foo: 1
                    }
                }, 1 !== t[e](Boolean).foo
            })
        },
        Gi = hi.map,
        Wi = Ui("map"),
        qi = wi("map");
    ir({
        target: "Array",
        proto: !0,
        forced: !Wi || !qi
    }, {
        map: function(e) {
            return Gi(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Qi = (Si("Array", "map"), function(e) {
            return function(t, n, r, o) {
                yr(n);
                var i = lo(t),
                    a = It(i),
                    c = Rn(i.length),
                    u = e ? c - 1 : 0,
                    s = e ? -1 : 1;
                if (2 > r)
                    for (;;) {
                        if (u in a) {
                            o = a[u], u += s;
                            break
                        }
                        if (u += s, e ? 0 > u : u >= c) throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; e ? u >= 0 : c > u; u += s) u in a && (o = n(o, a[u], u, i));
                return o
            }
        }),
        Zi = {
            left: Qi(!1),
            right: Qi(!0)
        },
        Yi = "process" == Dt(Pt.process),
        Ji = Zi.left,
        Ki = Ai("reduce"),
        Xi = wi("reduce", {
            1: 0
        }),
        $i = !Yi && Fi > 79 && 83 > Fi;
    ir({
        target: "Array",
        proto: !0,
        forced: !Ki || !Xi || $i
    }, {
        reduce: function(e) {
            return Ji(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    Si("Array", "reduce");
    ir({
        target: "Object",
        stat: !0,
        forced: !kt,
        sham: !kt
    }, {
        defineProperty: Kt.f
    });
    var ea = (t(function(e) {
        var t = Ln.Object,
            n = e.exports = function(e, n, r) {
                return t.defineProperty(e, n, r)
            };
        t.defineProperty.sham && (n.sham = !0)
    }), '#guaranteePopper{text-align:left}#guaranteePopper img,#guaranteePopper li,#guaranteePopper ul{padding:0;margin:0;list-style:none}#guaranteePopper img{border:0}#guaranteePopper a{text-decoration:none}#guaranteePopper.guarantee-pc{display:inline-block}#guaranteePopper.guarantee-pc .popover-content{position:relative;border-radius:8px;background-color:#fff;width:331px;line-height:21px;font-family:Arial,"sans-serif"}#guaranteePopper.guarantee-pc .popover-content .popover-inner{border-radius:8px;background-color:#fff;background-clip:padding-box;box-shadow:0 2px 10px rgba(0,0,0,.13);overflow:auto;padding:12px}#guaranteePopper.guarantee-pc .popover-content .login{font-size:14px;padding-bottom:9px;margin-bottom:10px;position:relative;border-bottom:1px solid #eee;cursor:pointer}#guaranteePopper.guarantee-pc .popover-content .login a{border:1px solid rgba(78,110,242,.5);border-radius:8px;float:right;font-size:13px;color:#4e6ff2;margin-top:-3px;padding:1px 8px}#guaranteePopper.guarantee-pc .popover-content .login a:hover{background-color:#315efd;color:#fff}#guaranteePopper.guarantee-pc .popover-content .title{margin-bottom:6px;font-size:0;line-height:20px;height:20px}#guaranteePopper.guarantee-pc .popover-content .title a{font-size:14px;vertical-align:top;margin-right:-3px;color:#222}#guaranteePopper.guarantee-pc .popover-content .title .bao-icon-new,#guaranteePopper.guarantee-pc .popover-content .title .bao-icon-old{display:inline-block;margin-right:8px}#guaranteePopper.guarantee-pc .popover-content .title .bao-icon-old svg{width:20px;height:20px}#guaranteePopper.guarantee-pc .popover-content .title .bao-icon-new svg{width:56px;height:20px}#guaranteePopper.guarantee-pc .popover-content .list{font-size:13px;color:#858585;display:-moz-box;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}#guaranteePopper.guarantee-pc .popover-content .list .label{width:65px}#guaranteePopper.guarantee-pc .popover-content .list .content{-webkit-box-flex:1;-moz-box-flex:1;flex:1;-webkit-flex:1;margin-right:-10px}#guaranteePopper.guarantee-pc .popover-content .list .content li{display:inline-block;max-width:274px;margin-right:10px}#guaranteePopper.guarantee-pc .popover-content .actions{display:-moz-box;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;color:#333;margin:0 -8px;font-size:13px}#guaranteePopper.guarantee-pc .popover-content .actions span{cursor:pointer}#guaranteePopper.guarantee-pc .popover-content .actions .btn{white-space:nowrap;display:inline-block;background-color:#f5f5f6;border-radius:8px;height:30px;margin:6px 8px 0;line-height:30px;text-align:center;-webkit-box-flex:1;-moz-box-flex:1;flex:1;-webkit-flex:1;justify-content:space-between;-webkit-justify-content:space-between;cursor:pointer}#guaranteePopper.guarantee-pc .popover-content .actions .btn:hover{background-color:#f0f0f1}#guaranteePopper.guarantee-pc .popover-content .actions a{color:#333}#guaranteePopper.guarantee-pc .bz-business-promise i{width:13px;height:13px;display:inline-block;margin-right:3px;position:relative;top:1px}#guaranteePopper.guarantee-pc .bz-business-promise i img{width:100%;height:100%}#guaranteePopper.guarantee-pc .popover-content:not(.popper-ie8) .popover-arrow{height:10px;width:10px;box-sizing:border-box;position:absolute;overflow:hidden;color:#fff}#guaranteePopper.guarantee-pc .popover-content:not(.popper-ie8) .popover-arrow:after{content:"";display:block;position:absolute;width:8px;height:8px;background-color:currentColor;-webkit-transform:translateX(-50%) rotate(45deg);-moz-transform:translateX(-50%) rotate(45deg);-ms-transform:translateX(-50%) rotate(45deg);-o-transform:translateX(-50%) rotate(45deg);transform:translateX(-50%) rotate(45deg);box-shadow:0 0 4px rgba(0,0,0,.15)}#guaranteePopper.guarantee-pc[data-popper-placement^=bottom] .popover-arrow{top:-8px}#guaranteePopper.guarantee-pc[data-popper-placement^=bottom] .popover-arrow:after{left:50%;top:5px}#guaranteePopper.guarantee-pc[data-popper-placement^=top] .popover-arrow{bottom:-8px}#guaranteePopper.guarantee-pc[data-popper-placement^=top] .popover-arrow:after{left:50%;bottom:5px}#guaranteePopper.guarantee-pc[data-popper-placement^=right] .popover-arrow{left:-6px}#guaranteePopper.guarantee-pc[data-popper-placement^=right] .popover-arrow:after{left:8px}#guaranteePopper.guarantee-pc[data-popper-placement^=left] .popover-arrow{right:-10px}#guaranteePopper.guarantee-pc.popper-ie8.btnOne .actions .btn,#guaranteePopper.guarantee-pc.popper-ie9.btnOne .actions .btn{width:95%}#guaranteePopper.guarantee-pc.popper-ie8.btnTwo .actions .btn,#guaranteePopper.guarantee-pc.popper-ie9.btnTwo .actions .btn{width:44%}#guaranteePopper.guarantee-pc.popper-ie8.btnThree .actions .btn,#guaranteePopper.guarantee-pc.popper-ie9.btnThree .actions .btn{width:27%}#guaranteePopper.guarantee-pc.popper-ie8 .popover-content .login a,#guaranteePopper.guarantee-pc.popper-ie9 .popover-content .login a{border:1px solid #eee}#guaranteePopper.guarantee-pc.popper-ie8 .popover-content .label,#guaranteePopper.guarantee-pc.popper-ie9 .popover-content .label{vertical-align:top}#guaranteePopper.guarantee-pc.popper-ie8 .popover-content li,#guaranteePopper.guarantee-pc.popper-ie8 .popover-content ul,#guaranteePopper.guarantee-pc.popper-ie9 .popover-content li,#guaranteePopper.guarantee-pc.popper-ie9 .popover-content ul{display:inline-block}#guaranteePopper.guarantee-pc.popper-ie8 .popover-content .title .bao-icon-new,#guaranteePopper.guarantee-pc.popper-ie8 .popover-content .title .bao-icon-old,#guaranteePopper.guarantee-pc.popper-ie9 .popover-content .title .bao-icon-new,#guaranteePopper.guarantee-pc.popper-ie9 .popover-content .title .bao-icon-old{display:inline-block;margin-right:0}#guaranteePopper.guarantee-pc.popper-ie8 .popover-content .list .content,#guaranteePopper.guarantee-pc.popper-ie9 .popover-content .list .content{width:245px;display:inline-block}#guaranteePopper.guarantee-pc.popper-ie8{position:absolute}#guaranteePopper.guarantee-pc.popper-ie8 .popover-content{border:1px solid #eee;top:5px;position:relative}#guaranteePopper.guarantee-pc.popper-ie8 .popover-arrow:before{position:absolute;content:"";top:-8px;left:171px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #eee}#guaranteePopper.guarantee-pc.popper-ie8 .popover-arrow:after{position:absolute;content:"";top:-6px;left:171px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #fff}');
    c(ea);
    var ta = function() {
            return window.addEventListener ? function(e, t, n, r) {
                e.addEventListener(t, n, r)
            } : window.attachEvent ? function(e, t, n) {
                e.attachEvent("on" + t, n)
            } : void 0
        }(),
        na = function() {
            return window.removeEventListener ? function(e, t, n, r) {
                e.removeEventListener(t, n, r)
            } : window.detachEvent ? function(e, t, n) {
                e.detachEvent("on" + t, n)
            } : void 0
        }(),
        ra = function() {
            var e = u();
            return 8 === e
        },
        oa = function() {
            var e = u();
            return 9 >= e
        },
        ia = function(e, t) {
            for (var n = (t || document).getElementsByTagName("*"), r = [], o = 0; o < n.length; o++) {
                var i = n[o];
                if ("[object String]" === Object.prototype.toString.call(i.className))
                    for (var a = i.className.split(" "), c = 0; c < a.length; c++)
                        if (a[c] === e) {
                            r.push(i);
                            break
                        }
            }
            return r
        },
        aa = "top",
        ca = "bottom",
        ua = "right",
        sa = "left",
        pa = "auto",
        la = [aa, ca, ua, sa],
        fa = "start",
        da = "end",
        ga = "clippingParents",
        ma = "viewport",
        ha = "popper",
        va = "reference",
        ya = la.reduce(function(e, t) {
            return e.concat([t + "-" + fa, t + "-" + da])
        }, []),
        ba = [].concat(la, [pa]).reduce(function(e, t) {
            return e.concat([t, t + "-" + fa, t + "-" + da])
        }, []),
        wa = "beforeRead",
        xa = "read",
        Pa = "afterRead",
        Oa = "beforeMain",
        ka = "main",
        Ea = "afterMain",
        Sa = "beforeWrite",
        Aa = "write",
        La = "afterWrite",
        ja = [wa, xa, Pa, Oa, ka, Ea, Sa, Aa, La],
        Ta = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        },
        Ca = (K(), {
            passive: !0
        }),
        Da = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function() {},
            effect: X,
            data: {}
        },
        Ma = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: $,
            data: {}
        },
        Ia = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        },
        Ra = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: nt,
            data: {}
        },
        _a = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: rt,
            effect: ot,
            requires: ["computeStyles"]
        },
        za = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: at
        },
        Ha = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        },
        Na = {
            start: "end",
            end: "start"
        },
        Ba = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: lt,
            requiresIfExists: ["offset"],
            data: {
                _skip: !1
            }
        },
        Fa = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: gt,
            requiresIfExists: ["offset"]
        },
        Va = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: mt,
            effect: ht,
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
        },
        Ua = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: bt
        },
        Ga = [Da, Ma, Ra, _a, za, Ba, Fa, Va, Ua],
        Wa = K({
            defaultModifiers: Ga
        }),
        qa = {
            PC: {
                TRIGGER: "hover",
                CLASS_NAME: "guarantee-pc",
                FCAD: {
                    GUARANTEE_HREF: "https://baozhang.baidu.com/guarantee/?from=fcad"
                },
                PS: {
                    GUARANTEE_HREF: "https://baozhang.baidu.com/guarantee/?from=ps"
                },
                TEST_HREF: "https://passport.qatest.baidu.com/v2/?login&u=",
                LIVE_HREF: "https://passport.baidu.com/v2/?login&u=",
                FIELD: "pc"
            },
            MOBILE: {
                TRIGGER: "click",
                CLASS_NAME: "guarantee-mobile",
                FCAD: {
                    GUARANTEE_HREF: "https://baozhang.baidu.com/guarantee/m/?from=fcad"
                },
                PS: {
                    GUARANTEE_HREF: "https://baozhang.baidu.com/guarantee/m/?from=ps"
                },
                TEST_HREF: "https://wappass.qatest.baidu.com/passport/?login&u=",
                LIVE_HREF: "https://wappass.baidu.com/passport/?login&u=",
                FIELD: "mobile"
            }
        },
        Qa = {
            FCAD: "FCAD",
            PS: "PS",
            EXP_STAGE_1: "STAGE_1",
            EXP_STAGE_3: "STAGE_3"
        },
        Za = {
            0: "未登录",
            1: "已登录"
        },
        Ya = {
            FCAD: "凤巢",
            PS: "大搜"
        },
        Ja = {
            BZPopper: "保障弹层",
            archives: "查看档案",
            "contact-customer": "联系商家",
            "contact-baidu": "联系百度",
            login: "登陆按钮",
            "baozhang-site": "保障按钮"
        },
        Ka = "aec699bb6442ba076c8981c6dc490771",
        Xa = function(e) {
            var t = window._hmt;
            if (t) t.push(["_setAccount", Ka]), e && e();
            else {
                var n = document.createElement("script");
                n.src = "https://hm.baidu.com/hm.js?".concat(Ka), n.async = !0;
                var r = function() {
                    var r = n.readyState;
                    ("undefined" == typeof r || /^(loaded|complete)$/.test(r)) && (n.onload = n.onreadystatechange = null, n = null, t = window._hmt, e && e())
                };
                n.readyState ? n.onreadystatechange = r : n.onload = r;
                var o = document.getElementsByTagName("head")[0] || document.body;
                o.appendChild(n) && (o = null)
            }
        },
        $a = function(e, t, n) {
            try {
                var r = window._hmt || [];
                r.push(["_trackEvent", Ja[e], Za[+t], Ya[n]])
            } catch (o) {}
        },
        ec = function(e) {
            var t = e.from,
                n = e.isLogin;
            $a("BZPopper", n, t)
        },
        tc = function(e) {
            var t = e.from,
                n = e.isLogin,
                r = document.getElementById("BZPopperLogin");
            r && ta(r, "click", function(e) {
                var r = e.target && e.target.getAttribute("data-id") || "";
                $a(r, n, t)
            }, !0)
        },
        nc = function(e) {
            var t = e.from,
                n = e.isLogin,
                r = document.getElementById("BZPopperActions");
            r && ta(r, "click", function(e) {
                var r = e.target && e.target.getAttribute("data-id") || "";
                $a(r, n, t)
            }, !0)
        },
        rc = function(e) {
            var t = e.from,
                n = e.isLogin,
                r = document.getElementById("BZGoBaoZhang");
            r && ta(r, "click", function(e) {
                var r = e.target && e.target.getAttribute("data-id") || "";
                $a(r, n, t)
            }, !0)
        },
        oc = function(e) {
            var t = e.from,
                n = e.isLogin,
                r = function() {
                    ec({
                        from: t,
                        isLogin: n
                    }), nc({
                        from: t,
                        isLogin: n
                    }), tc({
                        from: t,
                        isLogin: n
                    }), rc({
                        from: t,
                        isLogin: n
                    })
                };
            Xa(r)
        },
        ic = {
            bindMonitor: oc
        },
        ac = t(function(e, t) {
            function n(e) {
                "@babel/helpers - typeof";
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }! function(r, o) {
                "object" == n(t) && "object" == n(e) ? e.exports = o() : "object" == n(t) ? t.BdVirtualNum = o() : r.BdVirtualNum = o()
            }(window, function() {
                return function(e) {
                    function t(n) {
                        if (r[n]) return r[n].exports;
                        var o = r[n] = {
                            i: n,
                            l: !1,
                            exports: {}
                        };
                        return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                    }
                    var r = {};
                    return t.m = e, t.c = r, t.d = function(e, n, r) {
                        t.o(e, n) || Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: r
                        })
                    }, t.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }, t.t = function(e, r) {
                        if (1 & r && (e = t(e)), 8 & r) return e;
                        if (4 & r && "object" == n(e) && e && e.__esModule) return e;
                        var o = Object.create(null);
                        if (t.r(o), Object.defineProperty(o, "default", {
                                enumerable: !0,
                                value: e
                            }), 2 & r && "string" != typeof e)
                            for (var i in e) t.d(o, i, function(t) {
                                return e[t]
                            }.bind(null, i));
                        return o
                    }, t.n = function(e) {
                        var n = e && e.__esModule ? function() {
                            return e["default"]
                        } : function() {
                            return e
                        };
                        return t.d(n, "a", n), n
                    }, t.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, t.p = "", t(t.s = 10)
                }([function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.createId = function() {
                        return "p" + (new Date).getTime().toString(16) + parseInt(1e6 * Math.random(), 10).toString(16)
                    }, t.ch2channel = function(e) {
                        var t = {
                            3: "3",
                            4: "1"
                        };
                        return void 0 !== t[e] ? t[e] : null
                    }, t.sdkHost = function(e, t) {
                        return t && /^https?:\/\/[^\/]+\.baidu\.com:\d+$/.test(t) ? e.replace("https://ada.baidu.com", t) : e
                    }
                }, function(e, t, n) {
                    function r(e) {
                        return c[e]
                    }

                    function o(e, t) {
                        var n = [];
                        if (c[e]) {
                            var r = c[e] || {};
                            n = r.phone || [], Array.isArray(n) || (n = [n]);
                            for (var o = 0; o < n.length; o++) n[o].datakey = e, n[o].datafrom = r.from, n[o].datapvt = r.pvt, n[o].datapageid = r.pageid
                        } else
                            for (var i in c) {
                                var u = c[i];
                                if (u.uid === e || u.sid === e) {
                                    var s = u.phone || [];
                                    Array.isArray(n) || (s = [s]);
                                    for (var p = 0; p < s.length; p++) s[p].datakey = i, s[p].datafrom = u.from, s[p].datapvt = u.pvt, s[p].datapageid = u.pageid;
                                    n = n.concat(s)
                                }
                            }
                        for (var l = null, f = 0; f < n.length; f++) {
                            var d = n[f],
                                g = d.realPhone,
                                m = d.virtualPhone;
                            if (a.isSamePhoneNum(g, t) || a.isSamePhoneNum(m, t)) {
                                l = d;
                                break
                            }
                        }
                        return l || (l = n[0]), l
                    }

                    function i(e) {
                        var t = e.dynamicPhone,
                            n = e.hasHeart,
                            r = e.timeoutHandle,
                            o = e.expiredTime,
                            i = e.time,
                            a = e.heartClickLeftTime,
                            c = e.clickLeftTime,
                            u = e.expiredFuncs,
                            s = void 0 === u ? [] : u;
                        if (t) {
                            r && (e.timeoutHandle = null, clearTimeout(r));
                            var p = 1e3 * o - 1e3 * (n ? a : c) - (+new Date - i);
                            p > 0 ? e.timeoutHandle = setTimeout(function() {
                                s.forEach(function(e) {
                                    e()
                                })
                            }, p) : s.forEach(function(e) {
                                e()
                            })
                        }
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.init = function(e) {
                        var t = e.key;
                        if (t) return e.status = 0, e.pvt = +new Date, c[t] = e, e
                    }, t.getData = r, t.setPhone = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            t = arguments[1];
                        if (t) {
                            var n = r(t);
                            if (n) {
                                n.phone = Array.isArray(e) ? e : [e];
                                for (var o = 0; o < n.phone.length; o++) {
                                    var a = n.phone[o];
                                    "click" === a.mode && (u = !0), a.time = +new Date, a.expiredFuncs = [], !n.uid && a.useridInBase64 && (n.uid = a.useridInBase64), i(a)
                                }
                            }
                        }
                    }, t.getPhone = o, t.setLastUser = function(e) {
                        c.lastUid = e
                    }, t.getLastUser = function() {
                        return c.lastUid
                    }, t.setStatus = function(e, t) {
                        var n = c[t];
                        n && ("loading" === e ? n.status = 1 : "end" === e && (n.status = 2))
                    }, t.setExpiredTime = function(e, t, n, r) {
                        var a = o(e, t);
                        return a ? (a.time = +new Date, a.expiredTime = n, a.hasHeart = r, i(a), void 0) : !1
                    }, t.startCountdown = i, t.setValue = function(e, t, n) {
                        var r = c[e];
                        return r ? void(r[t] = n) : !1
                    }, t.generateKeyForStore = function(e) {
                        var t = e.uid,
                            n = e.sid;
                        if (!t && !n) return null;
                        var r = t || n,
                            o = e.solutionIds || "",
                            i = e.realPhones || "";
                        return r += o.replace(/![0-9,a-z,A-z]/g, "") + i.replace(/![0-9,a-z,A-z]/g, "") + (e.mode || "")
                    }, t.checkExpired = function(e) {
                        var t = e.time,
                            n = e.expiredTime,
                            r = e.hasHeart,
                            o = e.clickLeftTime || 60,
                            i = e.heartClickLeftTime || 5;
                        return +new Date - t > 1e3 * (n - (r ? i : o)) ? !0 : !1
                    }, t.isClickMode = function() {
                        return u
                    };
                    var a = n(2),
                        c = {},
                        u = !1
                }, function(e, t) {
                    function n() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").replace(/-/g, "").replace(/\+/g, "").replace(/\s/, "")
                    }

                    function r() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        return 11 === (e = i(e)).length && 0 === e.indexOf("1")
                    }

                    function o() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        return 0 === (e = i(e)).indexOf("400") && 10 === e.length
                    }

                    function i(e) {
                        return 0 === e.indexOf("86") ? e.substring(2) : 0 === e.indexOf("+86") ? e.substring(3) : e
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.isSamePhoneNum = function(e, t) {
                        if (e = i(n(e)), t = i(n(t)), e === t) return !0;
                        var r = e.indexOf(t),
                            o = t.indexOf(e);
                        return (3 !== r && 4 !== r || 0 !== e.indexOf("0")) && (3 !== o && 4 !== o || 0 !== t.indexOf("0")) ? !1 : !0
                    }, t.removeSymbol = n, t.isMobileNum = r, t.is400 = o, t.getNumReplaceText = function(e) {
                        if (o(e = i(e = n(e)))) {
                            var t = [e.substring(0, 3), e.substring(3, 6), e.substring(6, 10)],
                                a = [e.substring(0, 4), e.substring(4, 7), e.substring(7, 10)];
                            return [e, t.join(" "), t.join("-"), a.join(" "), a.join("-")]
                        }
                        if (r(e)) return ["+86" + e, "86" + e, e];
                        var c = ["+86" + e, "86" + e, e];
                        if (0 === e.indexOf("0")) {
                            var u = [],
                                s = e.length;
                            10 === s ? u.push(3) : 12 === s ? u.push(4) : 11 === s && (u = [3, 4]), u.forEach(function(t) {
                                var n = [e.substring(0, t), e.substring(t)];
                                c = [].concat(function(e) {
                                    if (Array.isArray(e)) {
                                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                        return n
                                    }
                                    return Array.from(e)
                                }(c), [n.join(" "), n.join("-"), "+86" + e.substring(t), "86" + e.substring(t), e.substring(t)])
                            })
                        }
                        return c
                    }, t.remove86 = i
                }, function(e, t) {
                    function n(e, t, n, r) {
                        var o = {
                            logtype: r || "click"
                        };
                        "ad" === e.from && (o.phoneNum = t), "lp" === e.from && (o.virtualPhone = t, o.realPhone = n), i(e, o)
                    }

                    function r() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        e && p[e] && (n.logtype = e, i(t, n))
                    }

                    function o(e, t) {
                        t.timestamp = +new Date;
                        var n = e.from || "lp";
                        t.tag = u[n];
                        var r = (e.phone || []).map(function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.dynamicPhone,
                                n = void 0 === t ? "" : t,
                                r = e.virtualPhone,
                                o = void 0 === r ? "" : r,
                                i = e.realPhone,
                                a = void 0 === i ? "" : i;
                            return n + "_" + o + "_" + a
                        });
                        t.phones = r.join("|"), e.bdVid && (t.bdVid = e.bdVid), e.pvt && (t.duration = +new Date - e.pvt), "native-smart-app" === e.client && (t.appName = e.appName, t.appKey = e.appKey), e.sourceType && (t.lpFrom = e.sourceType)
                    }

                    function i() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (c) {
                            var n = {};
                            ["uid", "siteid", "baiduid", "pageid", "kDomain", "fid", "spid", "xst", "ch", "status", "channel", "dpopen", "url", "referrer", "lpType", "sdkType", "sdkVersion", "query", "client", "expired", "solutionId"].forEach(function(t) {
                                    n[t] = e[t]
                                }), a(n, t), o(e, n),
                                function(e) {
                                    var t = e.logtype,
                                        n = p[t] || [];
                                    "string" == typeof n && (n = [n]), n.forEach(function(n) {
                                        l[t] && (e.logtype = l[t]), c(s[n], e)
                                    })
                                }(n)
                        }
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var a = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    };
                    t.init = function(e) {
                        e.logUtil && (c = e.logUtil)
                    }, t.click = n, t.clickStatic = function(e, t, r) {
                        n(e, t, r, "clickStatic")
                    }, t.clickDynamic = function(e, t, r) {
                        n(e, t, r, "clickDynamic")
                    }, t.show = function(e) {
                        r("show", e)
                    }, t.requestExpired = function(e) {
                        r("requestExpired", e)
                    }, t.pv = function(e) {
                        r("pv", e)
                    }, t.nomatch = function(e, t) {
                        i(e, {
                            logtype: "nomatch",
                            mtPhone: t
                        })
                    }, t.log = r, t.addComputeParams = o, t.version = "3.0.14";
                    var c = null,
                        u = {
                            ad: "ecom_virtual_phone",
                            lp: "ec_bcp_virtualNum"
                        },
                        s = {
                            bcp: "https://ada.baidu.com/phone-tracker/clicklog",
                            fclick: "https://fclick.baidu.com/w.gif"
                        },
                        p = {
                            show: "fclick",
                            click: ["bcp", "fclick"],
                            requestExpired: "fclick",
                            pv: "fclick",
                            nomatch: "fclick",
                            clickStatic: ["bcp", "fclick"],
                            clickDynamic: "fclick"
                        },
                        l = {
                            clickStatic: "click",
                            clickDynamic: "click"
                        }
                }, function(e, t, n) {
                    function r(e) {
                        return -1 !== e.indexOf("slp.baidu.com") || -1 !== e.indexOf("sp0.baidu.com/5bgWsjip0QIZ8tyhnq")
                    }

                    function o(e) {
                        return -1 !== e.indexOf("aipage.cn")
                    }

                    function i(e) {
                        return -1 !== e.indexOf("fix=1") && navigator && navigator.userAgent && navigator.userAgent.match(/baiduboxapp\/([\d+.]+)/)
                    }

                    function a(e) {
                        for (var t = ["isite.baidu.com", "sjh.baidu.com", "wejianzhan.com", "sitei.baidu.com", "shj.baidu.com", "wjz.baidu.com", "wzj.baidu.com", "jzw.baidu.com"], n = 0; n < t.length; n++) {
                            var r = t[n];
                            if (-1 !== e.indexOf(r)) return !0
                        }
                    }

                    function c(e) {
                        for (var t = ["preview-sjh-offline.baidu.com", "preview-sjh-preonline.baidu.com", "preview-sjh.baidu.com", "audit-sjh-offline.baidu.com", "audit-sjh-preonline.baidu.com", "audit-sjh.baidu.com"], n = 0; n < t.length; n++) {
                            var r = t[n];
                            if (-1 !== e.indexOf(r)) return !0
                        }
                    }

                    function u(e) {
                        return !(-1 !== e.indexOf("baidu.com") || r(e) || o(e) || i(e) || a(e))
                    }

                    function s(e) {
                        return f.indexOf(e) >= 0
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.init = t.LPTYPE = void 0;
                    var p = n(5),
                        l = t.LPTYPE = {
                            SMARTLP: 1,
                            AIPAGE: 2,
                            NA: 3,
                            JIMUYU: 4,
                            THIRD: 5,
                            PREVIEW: 6,
                            BAOZHANG: 7,
                            OTHER: 0
                        },
                        f = [33001, 33002, 33003];
                    t.init = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = l.OTHER;
                        void 0 !== e.type && (t = e.type);
                        var n = location.href;
                        r(n) ? t = l.SMARTLP : o(n) ? t = l.AIPAGE : i(n) ? t = l.NA : a(n) ? t = l.JIMUYU : u(n) ? t = l.THIRD : c(n) && (t = l.PREVIEW), s(e.sourceType) && (t = l.BAOZHANG);
                        var f = {
                            lpType: t,
                            url: location.href,
                            referrer: document.referrer
                        };
                        p.getQuery("sdkhost", "search") && (f.sdkhost = p.getQuery("sdkhost", "search"));
                        try {
                            if (c(n) || a(n)) {
                                var d = window.location.pathname.split("/").pop(),
                                    g = p.getCookie(d);
                                f.expInfo = g
                            }
                        } catch (e) {
                            console.log(e)
                        }
                        return t === l.PREVIEW && (f.previewChannel = p.getQuery("channel", "search")), f
                    }
                }, function(e, t) {
                    function n(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "search",
                            n = new RegExp("(^|&|\\?)" + e + "=([^&]*)(&|$)"),
                            r = window.location[t].substr(1).match(n);
                        return null !== r ? unescape(r[2]) : null
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.getQuery = n, t.getReferrerQuery = function(e) {
                        var t = document.referrer,
                            n = new RegExp("(\\?|&)" + e + "=[^&]*");
                        return n.test(t) ? t.match(n)[0].split("=")[1] : void 0
                    }, t.getParam = function(e) {
                        return n(e, "search") || n(e, "hash")
                    }, t.getCookie = function(e) {
                        var t = new RegExp("(^| )" + e + "=([^;]*)(;|$)"),
                            n = document.cookie.match(t);
                        return n ? unescape(n[2]) : null
                    }
                }, function(e, t, n) {
                    function r() {
                        return o(document.referrer)
                    }

                    function o() {
                        return -1 !== (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").indexOf("baidu.php")
                    }

                    function i() {
                        if (!r()) return "";
                        var e = document.referrer,
                            t = /url=([^\.]+\.)([^\.]+\.)([^&]+)/,
                            n = /sc\.([^\.]+\.)([^\.]+\.)([^&]+)/;
                        return t.test(e) ? t.exec(e)[3] : n.test(e) ? n.exec(e)[3] : void 0
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.isFromAd = r, t.isChargeUrl = o, t.initAdParams = function(e) {
                        var t = {
                            uid: e.uid || window.bdDataLayer.uid || a.getReferrerQuery("cegduid") || a.getReferrerQuery("cegduid", "search") || a.getReferrerQuery("cegduid", "hash") || a.getReferrerQuery("BD_FC_UID"),
                            sid: window.bdDataLayer.sid,
                            baiduid: a.getCookie("BAIDUID"),
                            dpopen: e.dpopen || window.bdDataLayer.dpopen || a.getReferrerQuery("dpopen") || 1,
                            bdRank: e.bdRank || a.getReferrerQuery("bdrank"),
                            kDomain: e.kDomain || i(),
                            channel: e.channel,
                            query: e.query
                        };
                        if (e.solutionId && !e.solutionIds && (t.solutionIds = e.solutionId, delete e.solutionId), e.realPhone && !e.realPhones && (t.realPhones = e.realPhone), "lp" === e.from) {
                            t.siteid = t.sid;
                            for (var n = ["fid", "ch", "spid", "xst"], r = 0; r < n.length; r++) {
                                var o = n[r];
                                t[o] = e[o] || a.getParam(o)
                            }
                            void 0 !== t.channel || t.kDomain || (t.channel = 4 === e.lpType && t.ch && t.fid ? c.ch2channel(t.ch) : e.previewChannel ? e.previewChannel : 6 === e.lpType ? "5" : "4")
                        }
                        return t.fromAd = !!("ad" === e.from || t.kDomain || t.fid || t.spid || t.xst || 4 === e.lpType || 6 === e.lpType || e.lpType === u.LPTYPE.BAOZHANG), t
                    };
                    var a = n(5),
                        c = n(0),
                        u = n(4)
                }, function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t["default"] = function(e, t, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        try {
                            var o = function() {
                                document.getElementsByTagName("head")[0].removeChild(f), delete window[i], r.onEnd && r.onEnd(t)
                            };
                            if (!e || !t) return;
                            n = n || function() {};
                            var i = "bcpDynamic",
                                a = 1e7;
                            i += (new Date).getTime() % a, i += (Math.random() * a).toFixed(0), window[i] = n, t.callback = i;
                            var c = [],
                                u = Object.prototype.toString;
                            for (var s in t) {
                                var p = "",
                                    l = void 0;
                                if ("number" == typeof t[s] && (p = 0), "[object Object]" === u.call(t[s])) {
                                    try {
                                        l = JSON.stringify(t[s])
                                    } catch (e) {
                                        l = "{}"
                                    }
                                    c.push(s + "=" + encodeURIComponent(l))
                                } else c.push(s + "=" + encodeURIComponent(t[s] || p))
                            }
                            delete t.callback, c = c.join("&"), e += -1 !== e.indexOf("?") ? "&" + c : "?" + c;
                            var f = document.createElement("script");
                            f.setAttribute("async", "true"), f.addEventListener("load", o, !1), f.addEventListener("error", function() {
                                document.getElementsByTagName("head")[0].removeChild(f), delete window[i], r.onError && r.onError(t)
                            }, !1), document.getElementsByTagName("head")[0].appendChild(f), f.src = e
                        } catch (e) {
                            console.error(e)
                        }
                    }, t.log = function(e, t) {
                        var n = [];
                        for (var r in t) t.hasOwnProperty(r) && n.push(r + "=" + encodeURIComponent(void 0 === t[r] ? "" : t[r]));
                        n.push("rand=" + (new Date).getTime()), e += "?" + n.join("&");
                        var o = new Image,
                            i = 0;
                        o.onload = o.onerror = o.onabort = function(t) {
                            return "error" === t.type && 2 > i ? (i++, void(o.src = e + "&retryCount=" + i)) : (o.onload = o.onerror = o.onabort = null, void(o = null))
                        }, o.src = e
                    }
                }, function(e, t, r) {
                    function o() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.pageInitFunc ? e.pageInitFunc(e) : {},
                            n = e.adInitFunc ? e.adInitFunc(u({}, e, t)) : {},
                            r = p.createId(),
                            o = u({}, e, t, n, {
                                pageid: r
                            });
                        if (o.key = f.generateKeyForStore(o), o.sdkVersion = b, l.init(o), d.init(o), o.fromAd && o.key) {
                            var i = f.getData(o.key);
                            return i && i.status ? (setTimeout(function() {
                                e.callback && e.callback()
                            }, 10), o.key) : (f.init(o), d.pv(o), function(e, t) {
                                var n = e.key,
                                    r = f.getData(n),
                                    o = {
                                        onResult: function(t) {
                                            if (f.setPhone(t, n), e.replaceFunc) e.replaceFunc(e);
                                            else {
                                                var o = !1;
                                                Array.isArray(t) && t[0] && (t[0].virtualPhone || t[0].dynamicPhone) ? o = !0 : (t.virtualPhone || t.dynamicPhone) && (o = !0), o && (a(n), d.show(r), e.callback && e.callback())
                                            }
                                        },
                                        onError: function() {}
                                    };
                                l.loadPhoneNumber(u({}, r, o, {
                                    mode: t
                                }))
                            }(o, e.mode || "show"), o.key)
                        }
                    }

                    function i(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = f.getPhone(t, e) || {},
                            r = (t.indexOf("click"), {});
                        return n || (r = {
                            status: 4,
                            virtualPhone: e,
                            realPhone: null
                        }), t && (n.dynamicPhone || n.virtualPhone) ? "ad" === n.datafrom || g.isSamePhoneNum(e, n.realPhone) ? n.dynamicPhone ? f.checkExpired(n) ? (f.setValue(t, "expired", 1), r = {
                            status: 0,
                            virtualPhone: n.virtualPhone ? g.remove86(n.virtualPhone) : e,
                            realPhone: e,
                            key: n.datakey
                        }) : r = {
                            status: 1,
                            virtualPhone: g.remove86(n.dynamicPhone),
                            realPhone: e,
                            time: n.time,
                            expiredTime: n.expiredTime,
                            backPhone: n.virtualPhone ? g.remove86(n.virtualPhone) : e,
                            key: n.datakey
                        } : n.virtualPhone && (r = {
                            status: 0,
                            virtualPhone: g.remove86(n.virtualPhone),
                            realPhone: e,
                            key: n.datakey
                        }) : r = {
                            status: 3,
                            virtualPhone: e,
                            realPhone: null,
                            key: n.datakey
                        } : r = {
                            status: 2,
                            virtualPhone: e,
                            realPhone: null,
                            key: n.datakey
                        }, r.pageid = n.datapageid, n.datapvt && (r.duration = +new Date - n.datapvt), 0 !== r.status && 1 !== r.status && r.key && (r.status = 0), 0 !== r.status && 1 !== r.status || (r.success = !0), !r.virtualPhone && e && (r.virtualPhone = e), r
                    }

                    function a(e, t) {
                        var n = f.getData(e);
                        (t ? [t] : n.phone || []).forEach(function(t) {
                            var r = t.dynamicPhone,
                                o = t.hasHeart,
                                i = t.heartHandle,
                                c = t.time,
                                s = t.expiredTime,
                                p = t.heartLeftTime,
                                d = void 0 === p ? 10 : p,
                                g = t.heartClickLeftTime,
                                m = void 0 === g ? 5 : g,
                                h = t.needHeart;
                            if (r && o && !1 !== h) {
                                i && (clearTimeout(i), t.heartHandle = null);
                                var v = +new Date - c;
                                if (1e3 * (s - m) > v) {
                                    var y = 1e3 * (s - d) - v;
                                    t.heartHandle = setTimeout(function() {
                                        t.heartHandle = null;
                                        var r = {
                                            onResult: function(n) {
                                                f.setExpiredTime(e, t.realPhone, n.expiredTime, n.hasHeart), a(e, t)
                                            },
                                            onError: function() {}
                                        };
                                        document && document.visibilityState && "visible" !== document.visibilityState || l.startHeart(u({}, n, {
                                            phone: t
                                        }, r))
                                    }, y > 0 ? y : 0)
                                }
                            } else i && (clearTimeout(i), n.heartHandle = null)
                        })
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.version = void 0;
                    var c = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(e) {
                            return n(e)
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e)
                        },
                        u = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                            }
                            return e
                        };
                    t.init = o, t.getCallNumber = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = {};
                        "object" === (void 0 === e ? "undefined" : c(e)) ? (n = e).key = n.key || n.uid || n.sid: (n.realPhone = e, t || (t = f.getLastUser()), n.key = t);
                        var r = f.isClickMode() || "click" === n.mode,
                            a = i(n.realPhone, n.key);
                        if (n.callback && (a.type = "show", n.callback(a)), r && n.callback) var s = o(u({
                            from: n.from || "lp",
                            mode: "click",
                            requestUtil: y["default"],
                            logUtil: v.log,
                            sdkType: n.sdkType || "api",
                            client: n.client || "h5",
                            pageInitFunc: m.init,
                            adInitFunc: h.initAdParams
                        }, n, {
                            callback: function() {
                                var e = i(n.realPhone, s);
                                1 === e.status && (e.type = "click", n.callback(e))
                            }
                        }));
                        return a
                    }, t.getShowCallNumber = i, t.delayTime = function(e, t, n) {
                        var r = f.getData(e),
                            o = f.getPhone(e, n);
                        if (o.dynamicPhone && g.isSamePhoneNum(t, o.dynamicPhone)) {
                            var i = {
                                onResult: function(t) {
                                    f.setExpiredTime(e, n, t.expiredTime, t.hasHeart), o.hasHeart = t.hasHeart, a(e, o)
                                },
                                onError: function() {}
                            };
                            l.delayPhoneTime(u({}, r, i, {
                                phone: o
                            }), n)
                        }
                    }, t.checkHeart = a;
                    var s, p = r(0),
                        l = r(9),
                        f = r(1),
                        d = r(3),
                        g = r(2),
                        m = r(4),
                        h = r(6),
                        v = r(7),
                        y = (s = v) && s.__esModule ? s : {
                            "default": s
                        },
                        b = t.version = "3.0.14"
                }, function(e, t, n) {
                    function r(e) {
                        var t = e.uid,
                            n = e.sid,
                            r = e.baiduid,
                            o = e.channel,
                            i = e.dpopen,
                            a = e.kDomain,
                            c = e.fid,
                            u = e.spid,
                            s = e.query,
                            p = (e.from, e.lpType, e.xst),
                            l = e.sdkVersion,
                            f = e.client;
                        return {
                            params: {
                                useridInBase64: t,
                                siteid: n,
                                baiduid: r,
                                channel: o,
                                dpopen: i,
                                query: s,
                                kDomain: a,
                                fid: c,
                                spid: u,
                                xst: p,
                                sdkVersion: l,
                                url: e.url,
                                client: f,
                                pageid: e.pageid,
                                sourceType: e.sourceType,
                                solutionIds: e.solutionIds
                            },
                            onResult: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    n = t.errors,
                                    r = t.status,
                                    o = t.data;
                                200 === r ? e.onResult(o) : e.onError && e.onError(n)
                            },
                            onError: function(t) {
                                e.onError && e.onError(t)
                            }
                        }
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    };
                    t.loadPhoneNumber = function(e) {
                        var t = r(e),
                            n = t.params,
                            a = t.onResult,
                            u = t.onError,
                            l = {
                                onResult: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    i.setStatus("end", e.key);
                                    var n = t.channel,
                                        r = t.baiduid;
                                    void 0 !== n && i.setValue(e.key, "channel", n), r && i.setValue(e.key, "baiduid", r), a(t)
                                },
                                onError: function(t) {
                                    i.setStatus("end", e.key), u(t)
                                }
                            };
                        if (s) {
                            n.mode = e.mode, n.expInfo = e.expInfo;
                            var f = e.realPhones || "",
                                d = f.split("|").map(function(e) {
                                    return c.removeSymbol(c.remove86(e))
                                });
                            f = d.join("|"), s(p + "getNumber", o({}, n, {
                                realPhones: f
                            }), l.onResult, l), i.setLastUser(e.key), i.setStatus("loading", e.key)
                        }
                    }, t.init = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e.requestUtil && (s = e.requestUtil), p = a.sdkHost(p, e.sdkhost)
                    }, t.delayPhoneTime = function(e, t) {
                        var n = r(e) || {},
                            i = n.params,
                            a = n.onResult,
                            c = n.onError;
                        i.dynamicPhone = e.phone.dynamicPhone, i.reqMd5 = e.phone.reqMd5, i.clicklog = 1, i.ch = e.ch, i.status = e.status, i.referrer = e.referrer, i.lpType = e.lpType, i.sdkType = e.sdkType, i.expired = e.expired, u.addComputeParams(o({}, e, {
                            phone: [e.phone]
                        }), i), i.rand = i.timestamp, "ad" === e.from && (i.phoneNum = i.dynamicPhone), "lp" === e.from && (i.virtualPhone = i.dynamicPhone, i.realPhone = t), s(p + "delayPhoneTime", i, a, {
                            onResult: a,
                            onError: c
                        })
                    }, t.startHeart = function(e) {
                        var t = r(e) || {},
                            n = t.params,
                            o = t.onResult,
                            i = t.onError;
                        n.dynamicPhone = e.phone.dynamicPhone, n.reqMd5 = e.phone.reqMd5, s(p + "startHeart", n, o, {
                            onResult: o,
                            onError: i
                        })
                    };
                    var i = n(1),
                        a = n(0),
                        c = n(2),
                        u = n(3),
                        s = null,
                        p = "https://ada.baidu.com/phone-tracker/"
                }, function(e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r, o = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                            }
                            return e
                        },
                        i = n(4),
                        a = n(6),
                        c = n(8),
                        u = n(7),
                        s = (r = u) && r.__esModule ? r : {
                            "default": r
                        },
                        p = n(3),
                        l = n(1);
                    window.bdDataLayer = window.bdDataLayer || {}, t["default"] = {
                        init: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            "string" == typeof e && (e = {
                                uid: e
                            });
                            var t = o({
                                from: "lp",
                                mode: "show",
                                requestUtil: s["default"],
                                logUtil: u.log,
                                sdkType: "api",
                                client: "h5",
                                pageInitFunc: i.init,
                                adInitFunc: a.initAdParams
                            }, e);
                            return c.init(t)
                        },
                        getCallNumber: function() {
                            var e = c.getCallNumber.apply(void 0, arguments);
                            return 0 !== e.status && 1 !== e.status || (1 === e.status ? (c.delayTime(e.key, e.virtualPhone, e.realPhone), p.clickDynamic(l.getData(e.key), e.virtualPhone, e.realPhone)) : p.clickStatic(l.getData(e.key), e.virtualPhone, e.realPhone)), 4 === e.status && p.requestExpired(l.getData(e.key)), e
                        },
                        version: c.version
                    }
                }])["default"]
            })
        }),
        cc = e(ac),
        uc = (ac.BdVirtualNum, null),
        sc = function(e) {
            uc = cc.init({
                uid: e.useridcode,
                sourceType: e.sourcetype,
                solutionIds: e.solutionid,
                realPhones: e.phone
            })
        },
        pc = function(e, t) {
            var n = e.realPhone;
            uc ? cc.getCallNumber({
                key: uc,
                realPhone: n,
                callback: function(e) {
                    t && t(e.virtualPhone || e.realPhone)
                }
            }) : t && t(n)
        },
        lc = [],
        fc = function(e) {
            var t = e.strategy,
                n = e.from,
                r = e.contentData,
                o = e.isLogin,
                i = e.extra,
                a = e.isIE8,
                c = t[n].GUARANTEE_HREF,
                u = JSON.parse(r),
                s = u.baiduPromise,
                p = u.promises,
                l = u.agreementAuth,
                f = u.landUrl,
                d = u.contactBaidu,
                g = u.contactCustomer,
                m = o ? "" : "<div class='login'>\n            <span>登录百度帐号，享受保障权益</span><a href='javascript:void(0)' data-id='login' id='BZPopperLogin'>去登录</a>\n        </div>",
                h = a ? "<div></div>" : "<?xml version='1.0' encoding='UTF-8'?>\n        <svg width='20px' height='20px' viewBox='0 0 48 48' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n            <!-- Generator: Sketch 60 (88103) - https://sketch.com -->\n            <defs>\n                <path d='M19.4175693,4.5 C21.846367,4.5 23.8257481,6.42418117 23.9144654,8.8312963 L23.9175693,9 L23.9175693,23.9175693 L20.9175693,23.9175693 L20.9175693,9 C20.9175693,8.20922865 20.3056609,7.56137616 19.529516,7.5041143 L19.4175693,7.5 L4.5,7.5 L4.5,4.5 L19.4175693,4.5 Z' id='path-1'></path>\n            </defs>\n            <?xml version='1.0' encoding='UTF-8'?>\n            <svg width='48px' height='48px' viewBox='0 0 48 48' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n                <defs>\n                    <path d='M19.4175693,4.5 C21.846367,4.5 23.8257481,6.42418117 23.9144654,8.8312963 L23.9175693,9 L23.9175693,23.9175693 L20.9175693,23.9175693 L20.9175693,9 C20.9175693,8.20922865 20.3056609,7.56137616 19.529516,7.5041143 L19.4175693,7.5 L4.5,7.5 L4.5,4.5 L19.4175693,4.5 Z' id='path-1'></path>\n                </defs>\n                <g id='*icon_图标/48icon/d20_arrow_right_outlined_48' transform='translate(5.000000, 9.000000)'>\n                    <g id='*颜色/黑色' transform='translate(0.250000, 0.750000)'>\n                        <mask id='mask-2' fill='white'>\n                            <use xlink:href='#path-1'></use>\n                        </mask>\n                        <use id='蒙版' fill='#858585' fill-rule='nonzero' transform='translate(14.208785, 14.208785) rotate(45.000000) translate(-14.208785, -14.208785) ' xlink:href='#path-1'></use>\n                    </g>\n                </g>\n            </svg>\n        </svg>",
                v = '<div class=\'bao-icon-new\'><svg width="42" height="15" viewBox="0 0 42 15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Sketch.</desc><g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="05-pc端备份-7" transform="translate(-52.000000, -408.000000)" fill="#7cabf7"><g id="保标10.12" transform="translate(52.000000, 408.000000)"><g><path d="M34.1738764.0213917526C38.3692401.0213917526 41.775 3.3205769 41.775 7.39639175 41.775 11.3922887 38.5014899 14.6417134 34.419732 14.7676055L34.1738764 14.7713918H6.4v-.75H34.1738764C37.9602685 14.0213918 41.025 11.0525634 41.025 7.39639175 41.025 3.81801099 38.0892952.89803603 34.4145584.775401686L34.1738764.771391753H6.4V.0213917526H34.1738764z" id="路径" fill-rule="nonzero" opacity=".5"/><g id="编组-3"><g id="编组-2" transform="translate(0.000000, 0.000000)"><path d="M6.16405984.086459611C6.39316246.0296818353 6.63267348.0297861106 6.86172658.0867633524v0L11.9034961 1.34090976C12.5487278 1.50141195 13.0016584 2.08081224 13.0016584 2.74570694v0V8.9777586C13.0016584 9.42013513 12.8927428 9.85917716 12.677112 10.2959962 12.4592809 10.7339267 12.1765404 11.1562963 11.8255903 11.5675508 11.4746401 11.9765824 11.0730827 12.365607 10.6220182 12.7324016 10.1863984 13.0885845 9.72851819 13.4160433 9.25122231 13.7127435 8.78695595 13.9995102 8.33589148 14.2384825 7.89912905 14.4285488 7.70008918 14.5149475 7.4342139 14.6070307 7.10150321 14.7047983 6.76961584 14.802324 6.41672856 14.8026757 6.08464745 14.7058118v0L5.89003259 14.6474331C5.64123707 14.5705739 5.43521072 14.4976124 5.27195354 14.4285488 4.8252897 14.2384825 4.36212349 13.9995102 3.88135478 13.7127435 3.3994859 13.4259768 2.92751844 13.0991962 2.46435224 12.7324016 2.00008588 12.3667185 1.5853266 11.9776939 1.2222747 11.5675508.858122655 11.1562963.563280512 10.7339267.338848433 10.2959962.112216039 9.85917716 682121026e-21 9.42013513 682121026e-21 8.9777586v0V2.74672266C682261587e-21 2.0813579.453558108 1.50167512 1.09938562 1.34162174v0zM9.50566863 4.56614893 6.12710757 8.06958721 6.0809128 8.100599C6.03322271 8.11949585 5.97678092 8.10940593 5.93853563 8.07054457v0L3.8963722 5.99548467 3.00545496 6.87227796 5.04761839 8.94733786 5.1589936 9.04894909C5.69801746 9.48971506 6.4938827 9.46250021 7.00148086 8.96294915v0L10.4054425 5.43385107 9.50566863 4.56614893z" id="形状结合"/></g></g><g id="保障" transform="translate(15.488889, 2.092784)" fill-rule="nonzero"><path d="M18.3198031 4.41352923C18.7630997 4.41352923 19.0871021 4.819154 19.0871021 5.28561693v0V6.58407178C19.0871021 7.05053472 18.7630997 7.45615949 18.3198031 7.45615949v0L17.0778523 7.45586773 17.0798523 7.92686773 19.2466535 7.92783505C19.4793241 7.92783505 19.6679408 8.11645179 19.6679408 8.34912232 19.6679408 8.55594057 19.5189103 8.72795088 19.3223805 8.76362208L19.2466535 8.77040958 17.0828523 8.76986773 17.0853575 9.38703587C17.0861681 9.61970499 16.8982096 9.80897768 16.6655405 9.80979086 16.4587235 9.81050876 16.286195 9.6620784 16.2498394 9.46567402L16.2427881 9.38997121 16.2398523 8.76986773 14.2227674 8.77040958C13.9900969 8.77040958 13.8014802 8.58179285 13.8014802 8.34912232 13.8014802 8.14230407 13.9505107 7.97029376 14.1470405 7.93462255L14.2227674 7.92783505 16.2368523 7.92686773 16.2358523 7.45586773 14.9849779 7.45615949C14.575826 7.45615949 14.2682984 7.11052125 14.2234074 6.69047622L14.2177495 6.58407178V5.28561693C14.2177495 4.8191741 14.54173 4.41352923 14.9849779 4.41352923v0zM12.7252356.922897409C13.2441719.922897409 13.6659444 1.34218524 13.6659444 1.86075308L13.658886 1.97560067 13.6378226 2.08834592 13.183 3.896 13.2360811 3.96765918C13.4161279 4.23505829 13.5250361 4.54379598 13.5524783 4.86465196L13.5593628 5.02595453V6.27942458C13.5593628 6.89023997 13.0933906 7.39167416 12.4973706 7.45196744L12.3765322 7.45804592 11.861 7.458 11.8619674 9.34548309C11.8619674 9.56953619 11.7005177 9.7558807 11.4876104 9.7945245L11.4055729 9.80187763C11.1815198 9.80187763 10.9951753 9.64042791 10.9565315 9.42752058L10.9491784 9.34548309V.922897409H12.7252356zM8.47164714.928921817C9.00259273.928921817 9.43087851 1.3620456 9.43087851 1.89366966v0V3.07460808C9.43087851 3.60623214 9.00259273 4.03935592 8.47164714 4.03935592v0L6.96385226 4.03886773V4.70886773L9.00521211 4.70966843C9.25727185 4.70966843 9.46160665 4.91400323 9.46160665 5.16606297 9.46160665 5.39011608 9.30015693 5.57646058 9.0872496 5.61510438L9.00521211 5.62245751 6.96385226 5.62186773 6.96434121 9.24803934C6.96434121 9.50009909 6.76000641 9.70443388 6.50794667 9.70443388 6.28389356 9.70443388 6.09754906 9.54298417 6.05890525 9.33007684L6.05155213 9.24803934 6.05085226 5.62186773 3.98132598 5.62245751C3.72926624 5.62245751 3.52493144 5.41812271 3.52493144 5.16606297 3.52493144 4.94200986 3.68638116 4.75566536 3.89928849 4.71702156L3.98132598 4.70966843 6.05085226 4.70886773V4.03886773L4.51484858 4.03935592C4.02188028 4.03935592 3.61733218 3.66588465 3.56205474 3.18689524L3.55561721 3.07460808V1.89366966C3.55561721 1.3620601 3.98395964.928921817 4.51484858.928921817v0zM2.39976074.867484089C2.62381383.867390299 2.81022593 1.02876196 2.84895889 1.24165309L2.85634637 1.3236875 2.85964637 9.20351475C2.85975193 9.45557447 2.65550273 9.65999482 2.40344301 9.66010042 2.17938992 9.66019421 1.99297782 9.49882255 1.95424486 9.28593142L1.94685738 9.20389701 1.94385226 3.05386773 1.43402024 3.96988467C1.31134136 4.19007551 1.03339054 4.26912459.813199691 4.14644571.617474495 4.03739782.533268725 3.80566592.603133987 3.60086915L.636638648 3.52562517 1.98709631 1.10174888C2.07129784.950619297 2.22864586.865979666 2.39026.867419524L2.39976074.867484089zM4.97443348 6.08982899C5.1843827 6.16806659 5.30262004 6.38442327 5.26448569 6.59742244L5.24272909 6.67686342 4.32453089 9.14083221C4.2365136 9.37702508 3.97368933 9.49714511 3.73749647 9.40912782 3.52754725 9.33089023 3.4093099 9.11453354 3.44744426 8.90153438L3.46920086 8.82209339 4.38739905 6.3581246C4.47541635 6.12193173 4.73824061 6.0018117 4.97443348 6.08982899zM8.36650095 6.2595554 8.40665324 6.33147211 9.50644279 8.7954409C9.60917985 9.02561304 9.50587331 9.29548926 9.27570118 9.39822632 9.07110373 9.48954815 8.83513514 9.4180701 8.71306805 9.23940141L8.67291576 9.1674847 7.57312621 6.70351591C7.47038916 6.47334378 7.5736957 6.20346755 7.80386783 6.10073049 8.00846528 6.00940866 8.24443387 6.08088671 8.36650095 6.2595554zM18.3848523 6.28086773H14.9198523L14.9198949 6.58407178C14.9198949 6.67124715 14.9510616 6.72770498 14.9719174 6.74680109L14.9849779 6.75401404H18.3198031C18.3362588 6.75401404 18.3849567 6.69304823 18.3849567 6.58407178v0L18.3848523 6.28086773zM12.7252356 1.83568649 11.861 1.835v4.71L12.3765322 6.54525684C12.5048705 6.54525684 12.6115981 6.45737809 12.6394726 6.34018994L12.6465737 6.27942458V5.02595453C12.6465737 4.84689406 12.5975116 4.67200364 12.5057359 4.51956482L12.4289945 4.40973102 12.1892568 4.11165164 12.7531553 1.86075308C12.7531553 1.85192833 12.7478666 1.84372921 12.7395941 1.83924365L12.7252356 1.83568649zM18.3198031 5.11567467H14.9849779C14.9685929 5.11567467 14.9198949 5.17664772 14.9198949 5.28561693v0L14.9198523 5.57786773H18.3848523L18.3849567 5.28561693C18.3849567 5.19843577 18.35379 5.14198142 18.3328981 5.12288693L18.3198031 5.11567467zM16.4720482.747919352 16.5313467.809284234 16.9831708 1.3821647 17.0138523 1.42986773 19.2466535 1.43038027C19.4793241 1.43038027 19.6679408 1.61899701 19.6679408 1.85166754 19.6679408 2.05848579 19.5189103 2.2304961 19.3223805 2.2661673L19.2466535 2.27295481 18.5498523 2.27286773 18.3798523 3.18486773 19.2466535 3.18574388C19.4793241 3.18574388 19.6679408 3.37436062 19.6679408 3.60703115 19.6679408 3.8138494 19.5189103 3.98585971 19.3223805 4.02153092L19.2466535 4.02831842H14.2227674C13.9900969 4.02831842 13.8014802 3.83970168 13.8014802 3.60703115 13.8014802 3.4002129 13.9505107 3.22820259 14.1470405 3.19253139L14.2227674 3.18574388 15.0258523 3.18486773 14.8558523 2.27286773 14.2227674 2.27295481C13.9900969 2.27295481 13.8014802 2.08433807 13.8014802 1.85166754 13.8014802 1.64484929 13.9505107 1.47283898 14.1470405 1.43716777L14.2227674 1.43038027 15.9468523 1.42986773 15.8697719 1.3310606C15.7256873 1.14837175 15.7569822.883469559 15.9396711.739384995 16.0995238.613311001 16.3223212.621511952 16.4720482.747919352zM17.6928523 2.27286773H15.7138523L15.8698627 3.11044462 15.8768523 3.18486773H17.5298523L17.5372244 3.11044462 17.6928523 2.27286773zM8.47164714 1.85968582H4.51484858C4.50034046 1.85968582 4.48638121 1.87380136 4.48638121 1.89366966v0V3.07460808C4.48638121 3.09447637 4.50034046 3.10859192 4.51484858 3.10859192v0H8.47164714C8.48619107 3.10859192 8.5001145 3.0945112 8.5001145 3.07460808v0V1.89366966C8.5001145 1.87376653 8.48619107 1.85968582 8.47164714 1.85968582v0z" id="形状结合"/></g></g></g></g></g></svg></div>',
                y = '<div class=\'bao-icon-old\'><svg viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Sketch.</desc><g id="保盾牌" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g><path d="M21 41C10.6 37.6666667 3 28.0476191 3 16.7142857V9.38095241C3 7.6666667 4.70000002 6.52380955 5.30000002 6.14285714 9.70000003 2.90476192 15.1 1 21 1 27.1 1 32.8 3 37.3 6.42857143 38.6 7.47619049 39 8.14285714 39 9.28571429V16.6190476C39 28.0476191 31.4 37.6666667 21 41zM20.8 25.2819048C21.3 24.52 21 23.5676191 20.2 23.0914286 19.4 22.6152381 18.4 22.9009524 18 23.6628571L15.9 27.6628571C15.5 28.4247619 15.7 29.3771429 16.5 29.8533333 17.3 30.3295238 18.3 30.0438096 18.7 29.2819048L20.8 25.2819048zM26.8 23.0914286C26 23.5676191 25.7 24.52 26.2 25.2819048L28.3 29.2819048C28.7 30.0438096 29.7 30.3295238 30.5 29.8533333 31.3 29.3771429 31.5 28.4247619 31.1 27.6628571L29 23.6628571C28.6 22.9009524 27.6 22.6152381 26.8 23.0914286zM25 19.0914286V18.1390476H28.1C31 18.1390476 31 16.7104762 31 15.2819048V12.4247619C31 10.52 30.5 9.56761906 28 9.56761906H19C17 9.56761906 16 10.52 16 12.4247619V15.2819048C16 16.7104762 16 18.1390476 19 18.1390476h3V19.0914286H17C16.5 19.0914286 16 19.472381 16 20.0438096V20.9961905C16 21.5676191 16.5 21.9485714 17 21.9485714h5v8.0952381C22 30.6152381 22.5 31.472381 23.5 31.472381 24.5 31.472381 25 30.6152381 25 30.0438095V21.9485714h5C30.5 21.9485714 31 21.5676191 31 20.9961905V20.0438096C30.9 19.4723809 30.5 19.0914286 30 19.0914286H25zm-5-6.6666667h7C27.7 12.4247619 28 12.7104762 28 13.3771429V14.3295238C28 14.9961905 27.9 15.2819048 27 15.2819048H20C19.2 15.2819048 19 14.8057143 19 14.3295238V13.3771429C19 12.4247619 20 12.4247619 20 12.4247619zM11 16.2850794V29.0914286C11 29.8533333 11.7 30.52 12.5 30.52 13.3 30.52 14 29.8533333 14 29.0914286V10.9961905L13.9791095 11.0284025C13.9836014 10.5240843 13.6896679 10.0245812 13.2 9.75809527 12.5 9.3771429 11.6 9.66285719 11.2 10.3295238L8.19999998 15.2819048C7.8 15.9485715 8.09999995 16.8057143 8.79999998 17.1866667 9.50000002 17.5676191 10.4 17.2819048 10.8 16.6152381L11 16.2850794z" fill="#91b9f7" fill-rule="nonzero"/><path id="矩形" d="M0 0h42v42H0z"/></g></g></svg></div>',
                b = a ? "<div></div>" : i && "STAGE_1" === i.expStage ? v : y,
                w = "<div class='title'>\n       ".concat(b, "\n        <a target='_blank' data-id='baozhang-site' href=").concat(c, ' id="BZGoBaoZhang">百度保障，为您搜索护航</a>\n        ').concat(h, "\n    </div>"),
                x = "",
                P = "",
                O = "",
                k = "",
                E = (s || [{
                    content: "如遇虚假欺诈，助您维权"
                }]).map(function(e) {
                    return "<li> ".concat(e.content, "</li>")
                }),
                S = "<div class='list bz-baidu-promise'>\n                <span class='label'>百度承诺：</span>\n                <ul class='content'> \n                    ".concat(E.join(""), "\n                </ul>\n            </div>");
            if (p && p.length) {
                var A = p.map(function(e) {
                    return "<li>\n                    <i><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAASFBMVEUAAACGhoaGhoaGhoaGhoaFhYWNjY2YmJiGhoaHh4eHh4eKioqLi4uGhoaGhoaGhoaFhYWHh4eGhoaGhoaGhoaHh4eLi4uFhYUn8YN1AAAAF3RSTlMA8Ig6Rc8QBcSNZTEWu6qBWlXT2KN3C/1zzdcAAADNSURBVCjPrZNbEoMgDEWLiIIIiFXv/ndaoPER2xl+zA+EM1zy4vWU9a3xWnvT9n9g1wiQiaa70ylBFaKUMShATJw2gLO7Yx3Q3Ohw9QfGJ6Dlai1w6HeC7rL7ojuk3W8mbpfvBSwjm8zxQfT0jmJ0nJG5ongMwo3OW1oDTPE9Yn5itV/6xjzmTYQvB7poSQh50nKgL/i1JJ6pKpQwiWf1xAeiJM5DWwAoKgaFxhJbtSFKiZ1lYUZlqRS10pJKQ2vjUB+m+ijWB5l/g4fsA2WDDn5v9WJxAAAAAElFTkSuQmCC'/>\n                    </i><span class='desc'>".concat(e.iconname, "</span>\n                </li>")
                });
                P = "<div class='list bz-business-promise'>\n                <span class='label'>商家承诺：</span>\n                <ul class='content'>\n                    ".concat(A.join(""), "\n                </ul>\n            </div>")
            }
            if (l && l.length) {
                var L = l.map(function(e) {
                    return "<li>".concat(e.content, "</li>")
                });
                x = "<div class='list bz-business-auth'>\n                <span class='label'>协会认证：</span>\n                <ul class='content'>\n                    ".concat(L.join(""), "\n                </ul>\n            </div>")
            }
            f && (f.pc || f.mobile) && (O = "<a target='_blank' data-id='archives' class='btn look-archives' href=".concat(f[t.FIELD], ">查看档案</a>"));
            var j = g && g.imUrl,
                T = g && g.phone;
            (j || T && !a) && (k = j ? "<a target='_blank' data-id='contact-customer' class='btn' href=".concat(j, ">\n                联系商家\n            </a>") : "<span data-id='contact-customer' data-tel=".concat(T, " class='btn' id='showBaoZhangPhone'>联系商家</span>"));
            var C = d && d.imUrl,
                D = C ? "联系百度" : "申请保障",
                M = C || c,
                I = "<a target='_blank' data-id='contact-baidu' class='btn' href=".concat(M, ">").concat(D, "</a>");
            return "<div class='popover-content'>\n        <div class='popover-arrow' data-popper-arrow='true'></div>\n        <div class='popover-inner'>\n            ".concat(m, "\n            ").concat(w, "\n            ").concat(S, "\n            ").concat(P, "\n            ").concat(x, "\n            <div id='BZPopperActions' class='actions'>\n                ").concat(O, "\n                ").concat(k, "\n                ").concat(I, "\n            </div>\n        </div>\n    </div>")
        },
        dc = function(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        },
        gc = function(e) {
            var t = {
                target: null,
                contentData: JSON.stringify({}),
                trigger: "hover",
                placement: "bottom-start",
                baseZIndex: 11,
                offset: [-30, 8],
                from: Qa.FCAD,
                isLogin: !1,
                strategy: qa.PC,
                isIE8: ra(),
                isLessIE9: oa()
            };
            this.options = Object.assign({}, t, e)
        };
    gc.prototype.setPopperDom = function() {
        {
            var e = document.createElement("div"),
                t = fc(this.options),
                n = this.options,
                r = n.baseZIndex,
                o = n.strategy;
            n.isIE8
        }
        return e.setAttribute("id", "guaranteePopper"), e.setAttribute("style", "z-index: " + r), e.setAttribute("class", o.CLASS_NAME), document.body.appendChild(e), e.innerHTML = t, lc.push(function() {
            e && dc(e)
        }), e
    }, gc.prototype.login = function() {
        function e() {
            var e = (location.href || "").indexOf("www.baidu.com") > -1,
                t = window.location.href;
            window.location.href = e ? "".concat(n.LIVE_HREF).concat(encodeURIComponent(t)) : "".concat(n.TEST_HREF).concat(encodeURIComponent(t))
        }
        var t = this.options,
            n = t.strategy,
            r = t.isLogin;
        if (!r) {
            var o = document.getElementById("BZPopperLogin");
            o && (ta(o, "click", e, !1), lc.push(function() {
                o && na(o, "click", e, !1)
            }))
        }
    }, gc.prototype.bindEvent = function() {
        var e = this,
            t = function() {
                e.delaySetPopupVisible(!1)
            },
            n = function() {
                e.delaySetPopupVisible(!0)
            };
        ta(e.contentDom, "mouseenter", n, !1), ta(e.contentDom, "mouseleave", t, !1), ta(e.reference, "mouseleave", t, !1), lc.push(function() {
            e.contentDom && na(e.contentDom, "mouseenter", n, !1), e.contentDom && na(e.contentDom, "mouseleave", t, !1), e.reference && na(e.reference, "mouseleave", t, !1)
        });
        var r = document.getElementById("showBaoZhangPhone");
        r && !e.options.isIE8 && ta(r, "click", function(t) {
            var n = t || window.event,
                r = n.target || n.srcElement,
                o = (JSON.parse(e.options.contentData) || {}).contactCustomer;
            pc({
                realPhone: o.phone
            }, function(e) {
                r.innerText = e
            })
        }, !1)
    }, gc.prototype.setVisible = function(e) {
        this.contentDom && (this.contentDom.style.display = e ? "block" : "none")
    }, gc.prototype.clearDelayTimer = function() {
        this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = null)
    }, gc.prototype.delaySetPopupVisible = function(e) {
        var t = this,
            n = 100;
        this.clearDelayTimer(), this.delayTimer = setTimeout(function() {
            t.setVisible(e), t.clearDelayTimer(), !e && mc()
        }, n)
    }, gc.prototype.setLocation = function() {
        var e = this,
            t = this.options,
            n = t.baseZIndex,
            r = t.isIE8;
        if (r) {
            var o = e.reference.getBoundingClientRect(),
                i = e.contentDom.offsetWidth,
                a = e.contentDom.offsetHeight,
                c = document.body.offsetWidth,
                u = document.body.offsetHeight,
                s = void 0 !== window.pageXOffset ? window.pageXOffset : document.documentElement.scrollLeft,
                p = void 0 !== window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop,
                l = s + o.left,
                f = p + o.top,
                d = o.bottom - o.top,
                g = 5,
                m = 5,
                h = l - i / 2 - g;
            h + i >= c && (h = c - i - g), 0 > h && (h = 0);
            var v = f + d + m;
            v + a >= u && (v = u - a - m), 0 > v && (v = 0);
            var y = "left: ".concat(h, "px; top: ").concat(v, "px; z-index: ").concat(n, "; right: auto; bottom: auto; position: absolute");
            e.contentDom.setAttribute("style", y)
        } else this.popper = Wa(this.reference, this.contentDom, {
            placement: this.options.placement,
            modifiers: [{
                name: "offset",
                options: {
                    offset: this.options.offset
                }
            }, {
                name: "arrow",
                options: {
                    element: "[data-popper-arrow]"
                }
            }, {
                name: "preventOverflow",
                options: {
                    padding: 20
                }
            }, {
                name: "computeStyles",
                options: {
                    gpuAcceleration: !1
                }
            }, {
                name: "flip",
                options: {
                    fallbackPlacements: ["top-start", "bottom-start"]
                }
            }]
        })
    }, gc.prototype.compatibleIE9Style = function() {
        var e = this.options,
            t = e.isLessIE9,
            n = e.strategy;
        if (t) {
            var r = u(),
                o = (ia("btn", this.contentDom) || []).length,
                i = "btnOne";
            2 === o ? i = "btnTwo" : 3 === o && (i = "btnThree"), this.contentDom.setAttribute("class", n.CLASS_NAME + " popper-ie".concat(r, " ") + i)
        }
    };
    var mc = function() {
        (lc || []).forEach(function(e) {
            return e()
        })
    };
    gc.prototype.init = function() {
        var e = this;
        if (mc(), this.reference = this.options.target, this.reference = this.reference && this.reference.jquery ? this.reference[0] : this.reference, this.contentDom = this.setPopperDom(), this.setLocation(), this.login(), this.bindEvent(), !this.options.isIE8) {
            var t = (JSON.parse(this.options.contentData) || {}).contactCustomer;
            t && t.phone && sc(t)
        }
        lc.push(function() {
            e.popper && e.popper.destroy && e.popper.destroy()
        }), this.compatibleIE9Style(), ic.bindMonitor({
            from: this.options.from,
            isLogin: this.options.isLogin
        })
    };
    var hc = function(e) {
        try {
            var t = new gc(e);
            c(ea), t.init()
        } catch (n) {}
    };
    return {
        destory: mc,
        preset: Qa,
        showUp: hc
    }
});