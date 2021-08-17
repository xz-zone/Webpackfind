! function(e) {
    function t() {}

    function i(e, t) {
        for (var i in t)
            if (t.hasOwnProperty(i)) {
                var s = t[i];
                "undefined" != typeof s && (e[i] = s)
            } return e
    }

    function s(e, t) {
        var s = e.prototype,
            r = new Function;
        r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e, i(e.prototype, s)
    }

    function r(e, t) {
        if (e && e.length > 0)
            for (var i = 0, s = e.length; s > i && t(e[i], i) !== !1; i++);
    }

    function n(e, t) {
        var i = !1;
        return r(e, function(e) {
            return i = e === t, !i
        }), i
    }

    function a(e, t) {
        var i = Function.prototype.bind,
            s = Array.prototype.slice;
        if (i && e.bind === i) return i.apply(e, s.call(arguments, 1));
        var r = s.call(arguments, 2);
        return function() {
            return e.apply(t, r.concat(s.call(arguments)))
        }
    }

    function o(e, t, i, s) {
        e.addEventListener ? e.addEventListener(t, i, s) : e.attachEvent("on" + t, i)
    }

    function h(e, t, i, s) {
        e.addEventListener ? e.removeEventListener(t, i, s) : e.detachEvent("on" + t, i)
    }

    function c(e) {
        var t = {};
        return r(e.split(","), function(e) {
            t[e] = e
        }), t
    }

    function p(e) {
        return Qt[e] && document.createElementNS ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e)
    }

    function l(e) {
        e && e.parentNode && e.parentNode.removeChild(e)
    }

    function d(e, t) {
        if (t && (e = a(e, t)), ei.push(e), !Jt)
            if (Jt = function() {
                    var e = ei.slice(0);
                    ei = [], Jt = null;
                    for (var t = 0, i = e.length; i > t; t++) e[t]()
                }, "function" == typeof setImmediate) setImmediate(Jt);
            else if ("function" == typeof MessageChannel) {
            var i = new MessageChannel,
                s = i.port2;
            i.port1.onmessage = Jt, s.postMessage(1)
        } else ti ? Promise.resolve().then(Jt) : setTimeout(Jt, 0)
    }

    function u(e, t) {
        var i = document.createEvent("HTMLEvents");
        i.initEvent(t, !0, !0), e.dispatchEvent(i)
    }

    function f() {
        var e = function() {};
        return e.isRequired = t, e
    }

    function v(e) {
        this.source = e, this.len = this.source.length, this.index = 0
    }

    function m(e) {
        return e.replace(/-+(.)/gi, function(e, t) {
            return t.toUpperCase()
        })
    }

    function y(e) {
        return {
            type: 4,
            paths: e
        }
    }

    function g(e) {
        var t, i = e.currentCode(),
            s = e.index;
        e: for (; t = e.nextCode();) switch (t) {
            case 92:
                e.go(1);
                break;
            case i:
                e.go(1);
                break e
        }
        var r = e.cut(s, e.index);
        return {
            type: 1,
            value: new Function("return " + r)()
        }
    }

    function x(e, t) {
        switch (t) {
            case 33:
                var i;
                switch (e.type) {
                    case 2:
                    case 1:
                    case 3:
                        i = !e.value;
                        break;
                    case 12:
                    case 11:
                        i = !1;
                        break;
                    case 13:
                        i = !0
                }
                if (null != i) return {
                    type: 3,
                    value: i
                };
                break;
            case 43:
                switch (e.type) {
                    case 2:
                    case 1:
                    case 3:
                        return {
                            type: 2, value: +e.value
                        }
                }
                break;
            case 45:
                switch (e.type) {
                    case 2:
                    case 1:
                    case 3:
                        return {
                            type: 2, value: -e.value
                        }
                }
        }
        return {
            type: 9,
            expr: e,
            operator: t
        }
    }

    function N(e) {
        e.goUntil();
        var t = e.currentCode();
        switch (t) {
            case 33:
            case 43:
            case 45:
                return e.go(1), x(N(e), t);
            case 34:
            case 39:
                return g(e);
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                return w(e);
            case 40:
                return E(e);
            case 91:
                e.go(1);
                for (var i = []; !e.goUntil(93);) {
                    var s = {};
                    i.push(s), 46 === e.currentCode() && e.match(/\.\.\.\s*/g) && (s.spread = !0), s.expr = b(e), e.goUntil(44)
                }
                return {
                    type: 12, items: i
                };
            case 123:
                e.go(1);
                for (var r = []; !e.goUntil(125);) {
                    var s = {};
                    r.push(s), 46 === e.currentCode() && e.match(/\.\.\.\s*/g) ? (s.spread = !0, s.expr = b(e)) : (s.name = N(e), s.expr = e.goUntil(58) ? b(e) : s.name, 4 === s.name.type && (s.name = s.name.paths[0])), e.goUntil(44)
                }
                return {
                    type: 11, items: r
                }
        }
        return k(e)
    }

    function w(e) {
        var t = e.match(/\s*([0-9]+(\.[0-9]+)?)/g, 1);
        return t ? {
            type: 2,
            value: +t[1]
        } : void 0
    }

    function _(e) {
        var t = e.match(/\s*([\$0-9a-z_]+)/gi, 1);
        return t[1]
    }

    function b(e) {
        var t = A(e);
        if (e.goUntil(), 63 === e.currentCode()) {
            e.go(1);
            var i = b(e);
            if (e.goUntil(), 58 === e.currentCode()) return e.go(1), {
                type: 10,
                segs: [t, i, b(e)]
            }
        }
        return t
    }

    function C(e) {
        var t = _(e);
        switch (t) {
            case "true":
            case "false":
                return {
                    type: 3, value: "true" === t
                };
            case "null":
                return {
                    type: 13
                }
        }
        var i = y([{
            type: 1,
            value: t
        }]);
        e: for (;;) switch (e.currentCode()) {
            case 46:
                e.go(1), i.paths.push({
                    type: 1,
                    value: _(e)
                });
                break;
            case 91:
                e.go(1), i.paths.push(b(e)), e.goUntil(93);
                break;
            default:
                break e
        }
        return i
    }

    function k(e, t) {
        e.goUntil();
        var i, s = C(e);
        if (e.goUntil(40))
            for (i = []; !e.goUntil(41);) i.push(b(e)), e.goUntil(44);
        else t && (i = t);
        return i && (s = {
            type: 6,
            name: s,
            args: i
        }), s
    }

    function E(e) {
        e.go(1);
        var t = b(e);
        return e.goUntil(41), t.parenthesized = !0, t
    }

    function T(e) {
        for (var t = N(e);;) {
            e.goUntil();
            var i = e.currentCode();
            switch (i) {
                case 37:
                case 42:
                case 47:
                    e.go(1), t = {
                        type: 8,
                        operator: i,
                        segs: [t, N(e)]
                    };
                    continue
            }
            break
        }
        return t
    }

    function R(e) {
        for (var t = T(e);;) {
            e.goUntil();
            var i = e.currentCode();
            switch (i) {
                case 43:
                case 45:
                    e.go(1), t = {
                        type: 8,
                        operator: i,
                        segs: [t, T(e)]
                    };
                    continue
            }
            break
        }
        return t
    }

    function D(e) {
        var t = R(e);
        e.goUntil();
        var i = e.currentCode();
        switch (i) {
            case 60:
            case 62:
                return 61 === e.nextCode() && (i += 61, e.go(1)), {
                    type: 8,
                    operator: i,
                    segs: [t, R(e)]
                }
        }
        return t
    }

    function S(e) {
        var t = D(e);
        e.goUntil();
        var i = e.currentCode();
        switch (i) {
            case 61:
            case 33:
                if (61 === e.nextCode()) return i += 61, 61 === e.nextCode() && (i += 61, e.go(1)), {
                    type: 8,
                    operator: i,
                    segs: [t, D(e)]
                };
                e.go(-1)
        }
        return t
    }

    function P(e) {
        var t = S(e);
        if (e.goUntil(), 38 === e.currentCode()) {
            if (38 === e.nextCode()) return e.go(1), {
                type: 8,
                operator: 76,
                segs: [t, P(e)]
            };
            e.go(-1)
        }
        return t
    }

    function A(e) {
        var t = P(e);
        if (e.goUntil(), 124 === e.currentCode()) {
            if (124 === e.nextCode()) return e.go(1), {
                type: 8,
                operator: 248,
                segs: [t, A(e)]
            };
            e.go(-1)
        }
        return t
    }

    function z(e) {
        return e ? "object" == typeof e && e.type ? e : b(new v(e)) : void 0
    }

    function O(e, t) {
        var i = k(new v(e), t);
        return 6 !== i.type && (i = {
            type: 6,
            name: i,
            args: t || []
        }), i
    }

    function I(e) {
        for (var t = new v(e), i = {
                type: 5,
                expr: b(t),
                filters: []
            }; t.goUntil(124);) {
            var s = k(t, []);
            switch (s.name.paths[0].value) {
                case "html":
                    break;
                case "raw":
                    i.original = 1;
                    break;
                default:
                    i.filters.push(s)
            }
        }
        return i
    }

    function U(e) {
        return e.replace(/&#([0-9]+);/g, function(e, t) {
            return String.fromCharCode(+t)
        }).replace(/&#x([0-9a-f]+);/gi, function(e, t) {
            return String.fromCharCode(parseInt(t, 16))
        }).replace(/&([a-z]+);/gi, function(e, t) {
            return ci[t] || e
        })
    }

    function L(e) {
        return e.replace(/[\^\[\]\$\(\)\{\}\?\*\.\+\\]/g, function(e) {
            return "\\" + e
        })
    }

    function B(e, t) {
        function i(e) {
            e && h.segs.push({
                type: 1,
                value: U(e)
            })
        }
        t = t || ["{{", "}}"];
        var s = t[0] + ">..<" + t[1],
            r = pi[s];
        r || (r = new RegExp(L(t[0]) + "\\s*([\\s\\S]+?)\\s*" + L(t[1]), "g"), pi[s] = r);
        for (var n, a = new v(e), o = 0, h = {
                type: 7,
                segs: []
            }, c = t[1].length; null != (n = a.match(r));) {
            var p = n[1],
                l = n[0].length;
            a.cut(a.index + 1 - c, a.index + 1) === t[1] && (p += a.cut(a.index, a.index + 1), a.go(1), l++), i(a.cut(o, a.index - l));
            var d = I(p);
            h.original = h.original || d.original, h.segs.push(d), o = a.index
        }
        return i(a.cut(o)), 1 === h.segs.length && 1 === h.segs[0].type ? h.segs[0] : h
    }

    function j(e, t, i, s) {
        "else-if" === t && (t = "elif");
        var r = li[t];
        r && (e.directives[t] = r(i, s))
    }

    function F(e, t, i, s) {
        var r, n, a = t.indexOf("-");
        switch (a > 0 && (n = t.slice(0, a), r = t.slice(a + 1)), n) {
            case "on":
                var o = {
                    name: r,
                    modifier: {}
                };
                e.events.push(o);
                for (var h;
                    (h = i.indexOf(":")) > 0;) {
                    var c = i.slice(0, h);
                    if (!/^[a-z]+$/i.test(c)) break;
                    o.modifier[c] = !0, i = i.slice(h + 1)
                }
                o.expr = O(i, [y([{
                    type: 1,
                    value: "$event"
                }])]);
                break;
            case "san":
            case "s":
                j(e, r, i, s);
                break;
            case "prop":
                $(e, r, i, s);
                break;
            case "var":
                e.vars || (e.vars = []), r = m(r), e.vars.push({
                    name: r,
                    expr: z(i.replace(/(^\{\{|\}\}$)/g, ""))
                });
                break;
            default:
                $(e, t, i, s)
        }
    }

    function $(e, t, i, s) {
        var n = i || "",
            a = n.match(/^\{=\s*(.*?)\s*=\}$/);
        if (a) return void e.props.push({
            name: t,
            expr: z(a[1]),
            x: 1
        });
        var o = B(n, s.delimiters);
        switch (t) {
            case "class":
            case "style":
                r(o.segs, function(e) {
                    5 === e.type && e.filters.push({
                        type: 6,
                        name: y([{
                            type: 1,
                            value: "_" + t
                        }]),
                        args: []
                    })
                })
        }
        if (7 === o.type) switch (o.segs.length) {
            case 0:
                oi[t] && (o = {
                    type: 3,
                    value: !0
                });
                break;
            case 1:
                o = o.segs[0], 5 === o.type && 0 === o.filters.length && (o = o.expr)
        }
        e.props.push(null != i ? {
            name: t,
            expr: o
        } : {
            name: t,
            expr: o,
            noValue: 1
        })
    }

    function M(e, t) {
        function i(e) {
            switch (t.trimWhitespace) {
                case "blank":
                    /^\s+$/.test(e) && (e = null);
                    break;
                case "all":
                    e = e.replace(/(^\s+|\s+$)/g, "")
            }
            e && h.children.push({
                textExpr: B(e, t.delimiters)
            })
        }
        t = t || {}, t.trimWhitespace = t.trimWhitespace || "none";
        var s = {
            directives: {},
            props: [],
            events: [],
            children: []
        };
        if ("string" != typeof e) return s;
        e = e.replace(/<!--([\s\S]*?)-->/gm, "").replace(/(^\s+|\s+$)/g, "");
        for (var r, n = new v(e), a = /<(\/)?([a-z][a-z0-9-]*)\s*/gi, o = /([-:0-9a-z\[\]_]+)(\s*=\s*(([^'"<>\s]+)|(['"])([^\5]*?)\5))?\s*/gi, h = s, c = [s], p = 0, l = 0; null != (r = n.match(a));) {
            var d = n.index - r[0].length,
                u = r[1],
                f = r[2];
            if (Qt[f] || (f = f.toLowerCase()), u) {
                if (62 === n.currentCode()) {
                    var m = p;
                    for (i(e.slice(l, d)); m > 0 && c[m].tagName !== f;) m--;
                    m > 0 && (p = m - 1, h = c[p]), n.go(1)
                }
            } else {
                for (var y = {
                        directives: {},
                        props: [],
                        events: [],
                        children: [],
                        tagName: f
                    }, g = ni[f];;) {
                    var x = n.currentCode();
                    if (62 === x) {
                        n.go(1);
                        break
                    }
                    if (47 === x && 62 === n.charCode(n.index + 1)) {
                        n.go(2), g = 1;
                        break
                    }
                    if (!x) {
                        i(n.cut(l)), y = null;
                        break
                    }
                    var N = n.match(o);
                    N && F(y, N[1], N[2] ? N[4] || N[6] : void 0, t)
                }
                if (y) {
                    i(e.slice(l, d));
                    var w = y.directives["else"] || y.directives.elif;
                    if (w) {
                        for (var _ = h.children.length, b = null; _--;) {
                            var C = h.children[_]; {
                                if (!C.textExpr) {
                                    b = C;
                                    break
                                }
                                h.children.splice(_, 1)
                            }
                        }
                        b && (b.elses = b.elses || [], b.elses.push(y))
                    } else {
                        if ("tr" === y.tagName && "table" === h.tagName) {
                            var k = {
                                directives: {},
                                props: [],
                                events: [],
                                children: [],
                                tagName: "tbody"
                            };
                            h.children.push(k), h = k, c[++p] = k
                        }
                        h.children.push(y)
                    }
                    g || (h = y, c[++p] = y)
                }
            }
            l = n.index
        }
        return i(n.cut(l)), s
    }

    function W(e) {
        if ("object" == typeof e) {
            var t = "";
            for (var i in e) e.hasOwnProperty(i) && (t += i + ":" + e[i] + ";");
            return t
        }
        return e
    }

    function V(e, t, s) {
        if (null != e.value) return e.value;
        var r;
        switch (e.type) {
            case 13:
                return null;
            case 9:
                switch (r = V(e.expr, t, s), e.operator) {
                    case 33:
                        r = !r;
                        break;
                    case 43:
                        r = +r;
                        break;
                    case 45:
                        r = 0 - r
                }
                return r;
            case 8:
                r = V(e.segs[0], t, s);
                var n = V(e.segs[1], t, s);
                switch (e.operator) {
                    case 37:
                        r %= n;
                        break;
                    case 43:
                        r += n;
                        break;
                    case 45:
                        r -= n;
                        break;
                    case 42:
                        r *= n;
                        break;
                    case 47:
                        r /= n;
                        break;
                    case 60:
                        r = n > r;
                        break;
                    case 62:
                        r = r > n;
                        break;
                    case 76:
                        r = r && n;
                        break;
                    case 94:
                        r = r != n;
                        break;
                    case 121:
                        r = n >= r;
                        break;
                    case 122:
                        r = r == n;
                        break;
                    case 123:
                        r = r >= n;
                        break;
                    case 155:
                        r = r !== n;
                        break;
                    case 183:
                        r = r === n;
                        break;
                    case 248:
                        r = r || n
                }
                return r;
            case 10:
                return V(e.segs[V(e.segs[0], t, s) ? 1 : 2], t, s);
            case 12:
                r = [];
                for (var a = 0, o = e.items.length; o > a; a++) {
                    var h = e.items[a],
                        c = V(h.expr, t, s);
                    h.spread ? c && (r = r.concat(c)) : r.push(c)
                }
                return r;
            case 11:
                r = {};
                for (var a = 0, o = e.items.length; o > a; a++) {
                    var h = e.items[a],
                        c = V(h.expr, t, s);
                    h.spread ? c && i(r, c) : r[V(h.name, t, s)] = c
                }
                return r;
            case 4:
                return t.get(e);
            case 5:
                if (r = V(e.expr, t, s), s)
                    for (var a = 0, o = e.filters.length; o > a; a++) {
                        var p = e.filters[a],
                            l = p.name.paths[0].value;
                        switch (l) {
                            case "url":
                            case "_class":
                            case "_style":
                                r = di[l](r);
                                break;
                            case "_xclass":
                            case "_xstyle":
                                r = di[l](r, V(p.args[0], t, s));
                                break;
                            default:
                                r = s.filters[l] && s.filters[l].apply(s, [r].concat(q(p.args, t, s)))
                        }
                    }
                return null == r && (r = ""), r;
            case 6:
                if (s && 4 === e.name.type) {
                    for (var d = s, u = e.name.paths.length, a = 0; d && u > a; a++) d = d[V(e.name.paths[a], t, s)];
                    d && (r = d.apply(s, q(e.args, t, s)))
                }
                break;
            case 7:
                for (var f = "", a = 0, o = e.segs.length; o > a; a++) {
                    var v = e.segs[a];
                    f += v.value || V(v, t, s)
                }
                return f
        }
        return r
    }

    function q(e, t, i) {
        for (var s = [], r = 0; r < e.length; r++) s.push(V(e[r], t, i));
        return s
    }

    function H(e, t, i) {
        for (var s = 0, r = t.length; r > s; s++)
            if (Y(e, t[s], i)) return 1;
        return 0
    }

    function Y(e, t, i) {
        switch (t.type) {
            case 4:
                for (var s = t.paths, r = s.length, n = e.paths, a = n.length, o = 1, h = 0; r > h; h++) {
                    var c = s[h],
                        p = c.value;
                    if (null == p && Y(e, c, i)) {
                        o = 1;
                        break
                    }
                    o && a > h && (p || V(c, i)) != n[h].value && (o = 0)
                }
                return o && (o = Math.max(1, a - r + 2)), o;
            case 9:
                return Y(e, t.expr, i) ? 1 : 0;
            case 7:
            case 8:
            case 10:
                return H(e, t.segs, i);
            case 12:
            case 11:
                for (var h = 0; h < t.items.length; h++)
                    if (Y(e, t.items[h].expr, i)) return 1;
                break;
            case 5:
                if (Y(e, t.expr, i)) return 1;
                for (var h = 0; h < t.filters.length; h++)
                    if (H(e, t.filters[h].args, i)) return 1;
                break;
            case 6:
                if (H(e, t.name.paths, i) || H(e, t.args, i)) return 1
        }
        return 0
    }

    function X(e) {
        return this[e]
    }

    function K(e, t) {
        var i = e.hotspot.props[t];
        return null != i ? e.props[i] : void 0
    }

    function G(e, t, i) {
        var s = vi[i] || i,
            r = null != t;
        s in e ? e[s] = r ? t : "" : r && e.setAttribute(i, t), r || e.removeAttribute(i)
    }

    function J(e, t, i) {
        e.setAttribute(i, t)
    }

    function Z(e, t, i) {
        var s = vi[i] || i;
        e[s] = !!t
    }

    function Q(e, t, i, s) {
        si > 9 && !e.value && t && (s.__bkph = !0, d(function() {
            s.__bkph = !1
        })), G(e, t, i)
    }

    function et(e, t) {
        var i = K(e.aNode, "value"),
            s = K(e.aNode, "type");
        if (i && s) {
            var r = V(s.expr, e.scope, e.owner);
            if (yi[r]) {
                var n = K(e.aNode, "checked");
                return null == n || n.hintExpr || (n.hintExpr = i.expr), !!yi[r](t, e.data ? V(i.expr, e.data, e) : V(i.expr, e.scope, e.owner))
            }
        }
    }

    function tt(e, t) {
        for (var i = e.parent; i && "select" !== i.tagName;) i = i.parent;
        if (i) {
            var s, r, n = null;
            if ((s = K(i.aNode, "value")) && (r = s.expr) && (n = 5 === i.nodeType ? V(r, i.data, i) : V(r, i.scope, i.owner) || ""), n === t) return 1
        }
    }

    function it(e, t) {
        if (Qt[e]) return J;
        var i = gi[e];
        i || (i = gi[e] = {});
        var s = i[t];
        return s || (s = mi[t] || G, i[t] = s), s
    }

    function st(e, t, i) {
        var s = e.option.target;
        return s && s.node === t && (!i || s.prop === i)
    }

    function rt(e, t, i) {
        for (var s = e, r = 0; null != s && r < t.paths.length; r++) s = s[V(t.paths[r], i)];
        return s
    }

    function nt(e, t) {
        this.parent = t, this.raw = e || {}, this.listeners = []
    }

    function at(e, t, i, s, r, n) {
        if (i >= s) return r;
        null == e && (e = {});
        var a = t[i],
            o = V(a, n),
            h = e;
        if (e instanceof Array) {
            var c = +o;
            o = isNaN(c) ? o : c, h = e.slice(0), h[o] = at(e[o], t, i + 1, s, r, n)
        } else if ("object" == typeof e) {
            h = {};
            for (var p in e) p !== o && e.hasOwnProperty(p) && (h[p] = e[p]);
            h[o] = at(e[o], t, i + 1, s, r, n)
        }
        return null == a.value && (t[i] = {
            type: "string" == typeof o ? 1 : 2,
            value: o
        }), h
    }

    function ot(e, t, i, s) {
        var r = e.expr.args;
        return function(n) {
            n = s ? n : n || window.event;
            var a = rt(t, e.expr.name, i);
            return "function" == typeof a && a.apply(t, r.length ? q(r, new nt({
                $event: n
            }, i), t) : []), e.modifier.prevent ? (n.preventDefault && n.preventDefault(), !1) : void(e.modifier.stop && (n.stopPropagation ? n.stopPropagation() : n.cancelBubble = !0))
        }
    }

    function ht(e, t) {
        if (t)
            for (var i = 0; i < e.length; i++) {
                var s = e[i];
                if (!s.overview) {
                    var r = s.expr.paths;
                    s.overview = r[0].value, r.length > 1 && (s.extOverview = r[0].value + "." + r[1].value, s.wildOverview = r[0].value + ".*")
                }
                if (t[s.overview] || s.wildOverview && t[s.wildOverview] || s.extOverview && t[s.extOverview]) return !0
            }
    }

    function ct(e, t, i) {
        t && (i ? t.insertBefore(e, i) : t.appendChild(e))
    }

    function pt(e) {
        this.children = [], this.index = 0, this.target = e;
        for (var t, i = e.firstChild; i;) {
            switch (t = i.nextSibling, i.nodeType) {
                case 3:
                    /^\s*$/.test(i.data || i.textContent) ? l(i) : this.children.push(i);
                    break;
                case 1:
                case 8:
                    this.children.push(i)
            }
            i = t
        }
        this.current = this.children[this.index], this.next = this.children[this.index + 1]
    }

    function lt(e, t, i, s, r) {
        if (this.aNode = e, this.owner = s, this.scope = i, this.parent = t, this.lifeCycle = ui.start, this.children = [], this._elFns = [], this.parentComponent = 5 === t.nodeType ? t : t.parentComponent, this.tagName = e.tagName, ri && this.tagName.indexOf("-") > 0 && (this.tagName = "div"), this._sbindData = Pt(e.directives.bind, this.scope, this.owner), this.lifeCycle = ui.inited, r) {
            var n = r.current;
            if (!n) throw new Error("[SAN REVERSE ERROR] Element not found. \nPaths: " + Ot(this).join(" > "));
            if (1 !== n.nodeType) throw new Error("[SAN REVERSE ERROR] Element type not match, expect 1 but " + n.nodeType + ".\nPaths: " + Ot(this).join(" > "));
            if (n.tagName.toLowerCase() !== this.tagName) throw new Error("[SAN REVERSE ERROR] Element tagName not match, expect " + this.tagName + " but meet " + n.tagName.toLowerCase() + ".\nPaths: " + Ot(this).join(" > "));
            this.el = n, r.goNext(), yt(this, this.scope, this.owner), this.lifeCycle = ui.created, this._attached(), this.lifeCycle = ui.attached
        }
    }

    function dt() {
        this.el = this.el || document.createComment(this.id)
    }

    function ut(e, t, i) {
        for (var s = e && e.length; s--;) e[s].dispose(t, i)
    }

    function ft(e) {
        ut(this.children, e, 1), e || l(this.el), this.el = null, this.owner = null, this.scope = null, this.children = null, this.lifeCycle = ui.disposed, this._ondisposed && this._ondisposed()
    }

    function vt(e, t) {
        this.options = e, this.loader = t, this.id = Zt++, this.children = [];
        var i = e.reverseWalker;
        if (i) {
            var s = this.loader.placeholder;
            s && (this.children[0] = new s(e)), this._create(), ct(this.el, i.target, i.current);
            var r = this;
            this.loader.start(function(e) {
                r.onload(e)
            })
        }
        e.reverseWalker = null
    }

    function mt(e, t, i, s, r) {
        if (e.Clazz) return new e.Clazz(e, t, i, s, r);
        var n = s.getComponentType ? s.getComponentType(e, i) : s.components[e.tagName];
        return n ? "function" == typeof n ? new n({
            source: e,
            owner: s,
            scope: i,
            parent: t,
            reverseWalker: r
        }) : new vt({
            source: e,
            owner: s,
            scope: i,
            parent: t,
            reverseWalker: r
        }, n) : new lt(e, t, i, s, r)
    }

    function yt(e, t, i) {
        var s = e.aNode.directives.html;
        if (!s)
            for (var r = new pt(e.el), n = e.aNode.children, a = 0, o = n.length; o > a; a++) e.children.push(mt(n[a], e, t, i, r))
    }

    function gt(e, t, i, s) {
        if (e.Clazz) return new e.Clazz(e, t, i, s);
        var r = s.getComponentType ? s.getComponentType(e, i) : s.components[e.tagName];
        return r ? "function" == typeof r ? new r({
            source: e,
            owner: s,
            scope: i,
            parent: t
        }) : new vt({
            source: e,
            owner: s,
            scope: i,
            parent: t
        }, r) : (e.Clazz = lt, new lt(e, t, i, s))
    }

    function xt(e) {
        var t = e.aNode.directives.transition,
            i = e.owner;
        if (5 === e.nodeType) {
            var s = e.source && e.source.directives.transition;
            s ? t = s : i = e
        }
        var r;
        return t && i && (r = rt(i, t.value.name), "function" == typeof r && (r = r.apply(i, q(t.value.args, e.scope, i)))), r || e.transition
    }

    function Nt() {
        var e = this.lifeCycle;
        if (!e.leaving) {
            if (!this.disposeNoTransition) {
                var t = xt(this);
                if (t && t.leave) {
                    this._toPhase ? this._toPhase("leaving") : this.lifeCycle = ui.leaving;
                    var i = this;
                    return void t.leave(this.el, function() {
                        i._leave()
                    })
                }
            }
            this._leave()
        }
    }

    function wt(e, t) {
        this.leaveDispose = 1, this.disposeNoDetach = e, this.disposeNoTransition = t, this.detach()
    }

    function _t(e, t, i) {
        i = !!i, this._elFns.push([e, t, i]), o(this.el, e, t, i)
    }

    function bt() {
        this.composing && (this.composing = 0, u(this, "input"))
    }

    function Ct() {
        this.composing = 1
    }

    function kt(e, t, i) {
        return function() {
            Dt(e, t, i)
        }
    }

    function Et(e, t, i) {
        return function() {
            return e.__bkph ? void(e.__bkph = !1) : void(this.composing || Dt(e, t, i))
        }
    }

    function Tt(e, t, i) {
        return function() {
            e._inputTimer = setInterval(function() {
                Dt(e, t, i)
            }, 16)
        }
    }

    function Rt(e) {
        return function() {
            clearInterval(e._inputTimer), e._inputTimer = null
        }
    }

    function Dt(e, t, i) {
        if (e.lifeCycle.created) {
            var s = e.el;
            if ("input" === e.tagName && "checked" === t.name) {
                var r = K(e.aNode, "value"),
                    n = K(e.aNode, "type");
                if (r && n) switch (s.type.toLowerCase()) {
                    case "checkbox":
                        return void i[s.checked ? "push" : "remove"](t.expr, s.value);
                    case "radio":
                        return void(s.checked && i.set(t.expr, s.value, {
                            target: {
                                node: e,
                                prop: t.name
                            }
                        }))
                }
            }
            i.set(t.expr, s[t.name], {
                target: {
                    node: e,
                    prop: t.name
                }
            })
        }
    }

    function St() {
        if (!this._rootNode) {
            for (var e = 5 === this.nodeType, i = e ? this.data : this.scope, s = this.aNode.hotspot.xProps, r = 0, n = s.length; n > r; r++) {
                var a = s[r];
                switch (a.name) {
                    case "value":
                        switch (this.tagName) {
                            case "input":
                            case "textarea":
                                Ni && window.CompositionEvent && (this._onEl("change", bt), this._onEl("compositionstart", Ct), this._onEl("compositionend", bt)), "oninput" in this.el ? this._onEl("input", Et(this, a, i)) : (this._onEl("focusin", Tt(this, a, i)), this._onEl("focusout", Rt(this)));
                                break;
                            case "select":
                                this._onEl("change", kt(this, a, i))
                        }
                        break;
                    case "checked":
                        switch (this.tagName) {
                            case "input":
                                switch (this.el.type) {
                                    case "checkbox":
                                    case "radio":
                                        this._onEl("click", kt(this, a, i))
                                }
                        }
                }
            }
            for (var o = e ? this : this.owner, r = 0, n = this.aNode.events.length; n > r; r++) {
                var h = this.aNode.events[r];
                this._onEl(h.name, ot(h, o, i, h.modifier), h.modifier.capture)
            }
            if (e)
                for (var r = 0, n = this.nativeEvents.length; n > r; r++) {
                    var h = this.nativeEvents[r];
                    this._onEl(h.name, ot(h, this.owner, this.scope), h.modifier.capture)
                }
            var c = xt(this);
            c && c.enter && c.enter(this.el, t)
        }
    }

    function Pt(e, t, i) {
        return e && t ? V(e.value, t, i) : void 0
    }

    function At(e, t) {
        var i, s = [];
        for (i in e) e.hasOwnProperty(i) && s.push(i);
        for (i in t) t.hasOwnProperty(i) && !e[i] && s.push(i);
        return s
    }

    function zt(e, t, i, s, r, n) {
        if (e) {
            for (var a = r.length; a--;)
                if (Y(r[a].expr, e.value, i)) {
                    var o = V(e.value, i, s);
                    if (o === t) return t;
                    for (var h = At(o, t), c = 0, p = h.length; p > c; c++) {
                        var l = h[c],
                            d = o[l];
                        d !== t[l] && n(l, d)
                    }
                    return o
                } return t
        }
    }

    function Ot(e) {
        for (var t = [], i = e; i;) {
            switch (i.nodeType) {
                case 4:
                    t.unshift(i.tagName);
                    break;
                case 2:
                    t.unshift("if");
                    break;
                case 3:
                    t.unshift("for[" + i.aNode.directives["for"].item + "]");
                    break;
                case 6:
                    t.unshift("slot[" + (i.name || "default") + "]");
                    break;
                case 7:
                    t.unshift("template");
                    break;
                case 5:
                    t.unshift("component[" + (i.source ? i.source.tagName : "root") + "]");
                    break;
                case 1:
                    t.unshift("text")
            }
            i = i.parent
        }
        return t
    }

    function It(e) {
        for (var t, i = [], s = [], r = [], n = [], a = -1, o = 0, h = e.length; h > o; o++) {
            for (var c = i[a], p = s[a], l = r[a], d = n[a]; c && (-3 === l && (l = r[a] = e[o++] || -1), -1 === l);) c = i[--a], p = s[a], l = r[a], d = n[a];
            var u, f = e[o],
                v = -1,
                m = !1;
            switch (f) {
                case 1:
                    u = {
                        directives: {},
                        props: [],
                        events: [],
                        children: []
                    };
                    var y = e[++o];
                    y && (u.tagName = y), v = e[++o] || -1;
                    break;
                case 3:
                    u = {
                        type: 1,
                        value: e[++o]
                    };
                    break;
                case 4:
                    u = {
                        type: 2,
                        value: e[++o]
                    };
                    break;
                case 5:
                    u = {
                        type: 3,
                        value: !!e[++o]
                    };
                    break;
                case 19:
                    u = {
                        type: 13
                    };
                    break;
                case 6:
                    m = [], u = {
                        type: 4,
                        paths: m
                    }, v = e[++o] || -1;
                    break;
                case 7:
                    m = [], u = {
                        type: 5,
                        filters: m
                    }, e[++o] && (u.original = 1), v = -2;
                    break;
                case 8:
                    m = [], u = {
                        type: 6,
                        args: m
                    }, v = -2;
                    break;
                case 9:
                    m = [], u = {
                        type: 7,
                        segs: m
                    }, e[++o] && (u.original = 1), v = e[++o] || -1;
                    break;
                case 10:
                    m = [], u = {
                        type: 8,
                        operator: e[++o],
                        segs: m
                    }, v = 2;
                    break;
                case 11:
                    u = {
                        type: 9,
                        operator: e[++o]
                    }, v = -2;
                    break;
                case 12:
                    m = [], u = {
                        type: 10,
                        segs: m
                    }, v = 3;
                    break;
                case 13:
                    m = [], u = {
                        type: 11,
                        items: m
                    }, v = e[++o] || -1;
                    break;
                case 14:
                    u = {}, v = -2;
                    break;
                case 15:
                    u = {
                        spread: !0
                    }, v = -2;
                    break;
                case 16:
                    m = [], u = {
                        type: 12,
                        items: m
                    }, v = e[++o] || -1;
                    break;
                case 17:
                case 18:
                    u = 18 === f ? {
                        spread: !0
                    } : {}, v = -2;
                    break;
                case 2:
                case 33:
                case 34:
                    u = {
                        name: e[++o]
                    }, 33 === f && (u.noValue = 1), 34 === f && (u.x = 1), v = -2;
                    break;
                case 35:
                    u = {
                        name: e[++o],
                        modifier: {}
                    }, v = -2;
                    break;
                case 36:
                    u = {
                        name: e[++o]
                    }, v = -2;
                    break;
                case 37:
                    u = {
                        item: e[++o]
                    };
                    var g = e[++o];
                    g && (u.index = g);
                    var x = e[++o];
                    x && (u.trackByRaw = x, u.trackBy = z(x)), v = -2;
                    break;
                case 38:
                case 39:
                case 41:
                case 42:
                case 43:
                case 44:
                    u = {}, v = -2;
                    break;
                case 40:
                    u = {
                        value: {}
                    };
                    break;
                default:
                    f || (u = {}, v = -2)
            }
            if (t || (t = u), c) switch (p) {
                case 1:
                    if (d) c.elses = c.elses || [], c.elses.push(u), --r[a] || a--;
                    else {
                        switch (f) {
                            case 2:
                            case 33:
                            case 34:
                                c.props.push(u);
                                break;
                            case 35:
                                c.events.push(u);
                                break;
                            case 36:
                                c.vars = c.vars || [], c.vars.push(u);
                                break;
                            case 37:
                                c.directives["for"] = u;
                                break;
                            case 38:
                                c.directives["if"] = u;
                                break;
                            case 39:
                                c.directives.elif = u;
                                break;
                            case 40:
                                c.directives["else"] = u;
                                break;
                            case 41:
                                c.directives.ref = u;
                                break;
                            case 42:
                                c.directives.bind = u;
                                break;
                            case 43:
                                c.directives.html = u;
                                break;
                            case 44:
                                c.directives.transition = u;
                                break;
                            case 1:
                            default:
                                c.children.push(u)
                        }--r[a] || (c.directives["if"] ? (n[a] = "elses", r[a] = -3) : a--)
                    }
                    break;
                case 7:
                    -2 === l ? (r[a] = -3, c.expr = u) : (d.push(u), --r[a] || a--);
                    break;
                case 8:
                    -2 === l ? (r[a] = -3, c.name = u) : (d.push(u), --r[a] || a--);
                    break;
                case 6:
                case 9:
                case 10:
                case 12:
                case 13:
                case 16:
                    d.push(u), --r[a] || a--;
                    break;
                case 11:
                case 2:
                case 33:
                case 34:
                case 36:
                case 15:
                case 17:
                case 18:
                    c.expr = u, a--;
                    break;
                case 14:
                    -2 === l ? (r[a] = -4, c.name = u) : (c.expr = u, a--);
                    break;
                case 35:
                    -2 === l ? (r[a] = -3, c.expr = u) : (c.modifier[f] = !0, --r[a] || a--);
                    break;
                case 37:
                case 38:
                case 39:
                case 41:
                case 42:
                case 43:
                case 44:
                    c.value = u, a--;
                    break;
                default:
                    c.textExpr = u, a--
            } - 1 !== v && (i[++a] = u, s[a] = f, r[a] = v, n[a] = m)
        }
        return t
    }

    function Ut(e) {
        e = e || {}, this.lifeCycle = ui.start, this.children = [], this._elFns = [], this.listeners = {}, this.slotChildren = [], this.implicitChildren = [];
        var t = this.constructor;
        this.filters = this.filters || t.filters || {}, this.computed = this.computed || t.computed || {}, this.messages = this.messages || t.messages || {}, e.transition && (this.transition = e.transition);
        var s = t.prototype;
        if (!s.hasOwnProperty("_cmptReady")) {
            s.components = t.components || s.components || {};
            var r = s.components;
            for (var n in r) {
                var a = r[n];
                "object" != typeof a || a instanceof Bt ? "self" === a && (r[n] = t) : r[n] = Lt(a)
            }
            s._cmptReady = 1
        }
        if (!s.hasOwnProperty("aNode")) {
            var o = t.aPack || s.hasOwnProperty("aPack") && s.aPack;
            o ? (s.aNode = It(o), t.aPack = s.aPack = null) : s.aNode = jt(t)
        }
        Xt(s.aNode, this), this.tagName = s.aNode.tagName, this.source = "string" == typeof e.source ? M(e.source).children[0] : e.source, Xt(this.source), this.sourceSlotNameProps = [], this.sourceSlots = {
            named: {}
        }, this.owner = e.owner, this.scope = e.scope, this.el = e.el;
        var h = e.parent;
        if (h ? (this.parent = h, this.parentComponent = 5 === h.nodeType ? h : h && h.parentComponent) : this.owner && (this.parentComponent = this.owner, this.scope = this.owner.data), this.id = Zt++, this.el) {
            var c = this.el.firstChild;
            if (c && 3 === c.nodeType && (c = c.nextSibling), c && 8 === c.nodeType) {
                var p = c.data.match(/^\s*s-data:([\s\S]+)?$/);
                if (p) {
                    var d = p[1];
                    e.data = new Function("return " + d.replace(/^[\s\n]*/, "").replace(/"(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.\d+Z"/g, function(e, t, i, s, r, n, a) {
                        return "new Date(" + +t + "," + +i + "," + +s + "," + +r + "," + +n + "," + +a + ")"
                    }))(), c.previousSibling && l(c.previousSibling), l(c)
                }
            }
        }
        if (this.nativeEvents = [], this.source) {
            this._initSourceSlots(1);
            for (var u = 0, f = this.source.events.length; f > u; u++) {
                var v = this.source.events[u];
                v.modifier.native ? this.nativeEvents.push(v) : this.on(v.name, ot(v, e.owner, this.scope, 1), v)
            }
            this.tagName = this.tagName || this.source.tagName, this.binds = this.source.hotspot.binds, this._srcSbindData = Pt(this.source.directives.bind, this.scope, this.owner)
        }
        this._toPhase("compiled");
        var m = i("function" == typeof this.initData && this.initData() || {}, e.data || this._srcSbindData);
        if (this.binds && this.scope)
            for (var u = 0, f = this.binds.length; f > u; u++) {
                var y = this.binds[u],
                    g = V(y.expr, this.scope, this.owner);
                "undefined" != typeof g && (m[y.name] = g)
            }
        this.data = new nt(m), this.tagName = this.tagName || "div", ri && this.tagName.indexOf("-") > 0 && (this.tagName = "div"), this.computedDeps = {};
        for (var x in this.computed) this.computed.hasOwnProperty(x) && !this.computedDeps[x] && this._calcComputed(x);
        this._initDataChanger(), this._sbindData = Pt(this.aNode.directives.bind, this.data, this), this._toPhase("inited");
        var N = e.reverseWalker;
        if (this.el || N) {
            var w = this.getComponentType ? this.getComponentType(this.aNode, this.data) : this.components[this.aNode.tagName];
            if (N && (this.aNode.hotspot.hasRootNode || w)) this._rootNode = mt(this.aNode, this, this.data, this, N), this._rootNode._getElAsRootNode && (this.el = this._rootNode._getElAsRootNode());
            else if (this.el && w) this._rootNode = new w({
                source: this.aNode,
                owner: this,
                scope: this.data,
                parent: this,
                el: this.el
            });
            else {
                if (N) {
                    var _ = N.current;
                    _ && 1 === _.nodeType && (this.el = _, N.goNext())
                }
                yt(this, this.data, this)
            }
            this._toPhase("created"), this._attached(), this._toPhase("attached")
        }
    }

    function Lt(e, t) {
        function i(e) {
            Ut.call(this, e)
        }
        return "function" == typeof e ? e : (i.prototype = e, s(i, t || Ut), i)
    }

    function Bt(e, t, i) {
        this.load = e, this.placeholder = t, this.fallback = i, this.listeners = []
    }

    function jt(e) {
        var t = e.prototype,
            i = M(e.template || t.template, {
                trimWhitespace: t.trimWhitespace || e.trimWhitespace,
                delimiters: t.delimiters || e.delimiters
            }),
            s = i.children[0];
        if (s && s.textExpr && (s = null), s = s || {
                directives: {},
                props: [],
                events: [],
                children: []
            }, "template" === s.tagName && delete s.tagName, t.autoFillStyleAndId !== !1 && e.autoFillStyleAndId !== !1) {
            for (var r = {}, n = s.props.length; n--;) {
                var a = s.props[n];
                switch (a.name) {
                    case "class":
                    case "style":
                        r[a.name] = !0, a.expr = {
                            type: 5,
                            expr: y([{
                                type: 1,
                                value: a.name
                            }]),
                            filters: [{
                                type: 6,
                                args: [a.expr],
                                name: y([{
                                    type: 1,
                                    value: "_x" + a.name
                                }])
                            }]
                        };
                        break;
                    case "id":
                        r[a.name] = !0
                }
            }
            r["class"] || s.props.push({
                name: "class",
                expr: {
                    type: 5,
                    expr: y([{
                        type: 1,
                        value: "class"
                    }]),
                    filters: [{
                        type: 6,
                        args: [],
                        name: y([{
                            type: 1,
                            value: "_class"
                        }])
                    }]
                }
            }), r.style || s.props.push({
                name: "style",
                expr: {
                    type: 5,
                    expr: y([{
                        type: 1,
                        value: "style"
                    }]),
                    filters: [{
                        type: 6,
                        args: [],
                        name: y([{
                            type: 1,
                            value: "_style"
                        }])
                    }]
                }
            }), r.id || s.props.push({
                name: "id",
                expr: y([{
                    type: 1,
                    value: "id"
                }])
            })
        }
        return s
    }

    function Ft(e, t) {
        return 8 === e.nodeType && e.data === "/s-" + t
    }

    function $t(e, t, i, s, r) {
        if (this.aNode = e, this.owner = s, this.scope = i, this.parent = t, r) {
            var n = r.current;
            if (n) switch (n.nodeType) {
                case 8:
                    if ("s-text" === n.data)
                        for (this.id = this.id || Zt++, this.sel = n, n.data = this.id, r.goNext();;) {
                            if (n = r.current, !n) throw new Error("[SAN REVERSE ERROR] Text end flag not found. \nPaths: " + Ot(this).join(" > "));
                            if (Ft(n, "text")) {
                                this.el = n, r.goNext(), n.data = this.id;
                                break
                            }
                            r.goNext()
                        }
                    break;
                case 3:
                    r.goNext(), this.aNode.textExpr.original || (this.el = n)
            } else this.el = document.createTextNode(""), ct(this.el, r.target, r.current)
        }
    }

    function Mt(e, t) {
        this.sel = document.createComment(this.id), ct(this.sel, e, t);
        for (var i = 0; i < this.aNode.children.length; i++) {
            var s = gt(this.aNode.children[i], this, this.childScope || this.scope, this.childOwner || this.owner);
            this.children.push(s), s.attach(e, t)
        }
        this.el = document.createComment(this.id), ct(this.el, e, t), this.lifeCycle = ui.attached
    }

    function Wt(e, t, s, n, a) {
        this.owner = n, this.scope = s, this.parent = t, this.parentComponent = 5 === t.nodeType ? t : t.parentComponent, this.id = Zt++, this.lifeCycle = ui.start, this.children = [], this.nameBind = K(e, "name"), this.nameBind && (this.isNamed = !0, this.name = V(this.nameBind.expr, this.scope, this.owner));
        var o, h = n.sourceSlots;
        h && (o = this.isNamed ? h.named[this.name] : h.noname), o && (this.isInserted = !0), this.aNode = {
            directives: e.directives,
            props: [],
            events: [],
            children: o || e.children.slice(0),
            vars: e.vars
        }, this._sbindData = Pt(e.directives.bind, this.scope, this.owner);
        var c;
        if (this._sbindData && (c = i({}, this._sbindData)), e.vars && (c = c || {}, r(e.vars, function(e) {
                c[e.name] = V(e.expr, s, n)
            })), this.isInserted && (this.childOwner = n.owner, this.childScope = n.scope), c && (this.isScoped = !0, this.childScope = new nt(c, this.childScope || this.scope)), n.slotChildren.push(this), a) {
            var p;
            a.current && 8 === a.current.nodeType ? (this.sel = a.current, p = 1, a.goNext()) : (this.sel = document.createComment(this.id), a.current ? a.target.insertBefore(this.sel, a.current) : a.target.appendChild(this.sel));
            for (var l = this.aNode.children, d = 0, u = l.length; u > d; d++) this.children.push(mt(l[d], this, this.childScope || this.scope, this.childOwner || this.owner, a));
            p ? (this.el = a.current, a.goNext()) : (this.el = document.createComment(this.id), a.current ? a.target.insertBefore(this.el, a.current) : a.target.appendChild(this.el)), this.lifeCycle = ui.attached
        }
    }

    function Vt(e, t, i) {
        this.parent = e.scope, this.raw = {}, this.listeners = [], this.directive = e.aNode.directives["for"], this.indexName = this.directive.index || "$index", this.raw[this.directive.item] = t, this.raw[this.indexName] = i
    }

    function qt(e, t, i, s, r) {
        if (this.aNode = e, this.owner = s, this.scope = i, this.parent = t, this.parentComponent = 5 === t.nodeType ? t : t.parentComponent, this.id = Zt++, this.children = [], this.param = e.directives["for"], this.itemPaths = [{
                type: 1,
                value: this.param.item
            }], this.itemExpr = {
                type: 4,
                paths: this.itemPaths,
                raw: this.param.item
            }, this.param.index && (this.indexExpr = y([{
                type: 1,
                value: "" + this.param.index
            }])), r) {
            if (this.listData = V(this.param.value, this.scope, this.owner), this.listData instanceof Array)
                for (var n = 0; n < this.listData.length; n++) this.children.push(mt(this.aNode.forRinsed, this, new Vt(this, this.listData[n], n), this.owner, r));
            else if (this.listData && "object" == typeof this.listData)
                for (var n in this.listData) this.listData.hasOwnProperty(n) && null != this.listData[n] && this.children.push(mt(this.aNode.forRinsed, this, new Vt(this, this.listData[n], n), this.owner, r));
            this._create(), ct(this.el, r.target, r.current)
        }
    }

    function Ht(e, t, i, s, n) {
        if (this.aNode = e, this.owner = s, this.scope = i, this.parent = t, this.parentComponent = 5 === t.nodeType ? t : t.parentComponent, this.id = Zt++, this.children = [], n) {
            if (V(this.aNode.directives["if"].value, this.scope, this.owner)) this.elseIndex = -1, this.children[0] = mt(this.aNode.ifRinsed, this, this.scope, this.owner, n);
            else {
                var a = this;
                r(e.elses, function(e, t) {
                    var i = e.directives.elif;
                    return !i || i && V(i.value, a.scope, a.owner) ? (a.elseIndex = t, a.children[0] = mt(e, a, a.scope, a.owner, n), !1) : void 0
                })
            }
            this._create(), ct(this.el, n.target, n.current)
        }
    }

    function Yt(e, t, i, s, r) {
        if (this.aNode = e, this.owner = s, this.scope = i, this.parent = t, this.parentComponent = 5 === t.nodeType ? t : t.parentComponent, this.id = Zt++, this.lifeCycle = ui.start, this.children = [], r) {
            var n;
            r.current && 8 === r.current.nodeType ? (this.sel = r.current, n = 1, r.goNext()) : (this.sel = document.createComment(this.id), ct(this.sel, r.target, r.current));
            for (var a = this.aNode.children, o = 0, h = a.length; h > o; o++) this.children.push(mt(a[o], this, this.scope, this.owner, r));
            n ? (this.el = r.current, r.goNext()) : (this.el = document.createComment(this.id), ct(this.el, r.target, r.current)), this.lifeCycle = ui.attached
        }
    }

    function Xt(e, t) {
        function s(e, t) {
            var i = Kt(e);
            if (i.length)
                for (var s = 0, n = a.length; n > s; s++)
                    if (!t || s !== n - 1) {
                        var o = a[s].hotspot.data;
                        o || (o = a[s].hotspot.data = {}), r(i, function(e) {
                            o[e] = 1
                        })
                    }
        }

        function n(e) {
            if (!e.hotspot) {
                if (a.push(e), e.textExpr) e.hotspot = {}, e.Clazz = $t, s(e.textExpr);
                else {
                    var o;
                    Ni && e.tagName && e.tagName.indexOf("-") < 0 && !/^(template|slot|select|input|option|button|video|audio|canvas|img|embed|object|iframe)$/i.test(e.tagName) && (o = p(e.tagName)), e.hotspot = {
                        dynamicProps: [],
                        xProps: [],
                        props: {},
                        binds: [],
                        sourceNode: o
                    }, r(e.vars, function(e) {
                        s(e.expr)
                    }), r(e.props, function(t) {
                        e.hotspot.binds.push({
                            name: m(t.name),
                            expr: null != t.noValue ? {
                                type: 3,
                                value: !0
                            } : t.expr,
                            x: t.x,
                            noValue: t.noValue
                        }), s(t.expr)
                    });
                    for (var h in e.directives)
                        if (e.directives.hasOwnProperty(h)) {
                            var c = e.directives[h];
                            if (s(c.value, !/^(html|bind)$/.test(h)), "for" === h) {
                                var l = c.trackBy;
                                l && 4 === l.type && l.paths[0].value === c.item && (e.hotspot.getForKey = new Function(c.item, "return " + c.trackByRaw))
                            }
                        } if (r(e.elses, function(e) {
                            n(e)
                        }), r(e.children, function(e) {
                            n(e)
                        }), r(e.props, function(t, i) {
                            e.hotspot.props[t.name] = i, t.handler = it(e.tagName, t.name), null != t.expr.value ? o && t.handler(o, t.expr.value, t.name, e) : (t.x && e.hotspot.xProps.push(t), e.hotspot.dynamicProps.push(t))
                        }), "option" === e.tagName && !K(e, "value") && e.children[0]) {
                        var d = {
                            name: "value",
                            expr: e.children[0].textExpr,
                            handler: it(e.tagName, "value")
                        };
                        e.props.push(d), e.hotspot.dynamicProps.push(d), e.hotspot.props.value = e.props.length - 1
                    }
                    switch (e.directives["if"] && (e.ifRinsed = {
                            children: e.children,
                            props: e.props,
                            events: e.events,
                            tagName: e.tagName,
                            vars: e.vars,
                            hotspot: e.hotspot,
                            directives: i({}, e.directives)
                        }, e.hotspot.hasRootNode = !0, e.Clazz = Ht, e = e.ifRinsed, e.directives["if"] = null), e.directives["for"] && (e.forRinsed = {
                            children: e.children,
                            props: e.props,
                            events: e.events,
                            tagName: e.tagName,
                            vars: e.vars,
                            hotspot: e.hotspot,
                            directives: i({}, e.directives)
                        }, e.hotspot.hasRootNode = !0, e.Clazz = qt, e.forRinsed.directives["for"] = null, e = e.forRinsed), e.tagName) {
                        case "slot":
                            e.Clazz = Wt;
                            break;
                        case "template":
                        case "fragment":
                            e.hotspot.hasRootNode = !0, e.Clazz = Yt;
                            break;
                        default:
                            wi[e.tagName] && (t && (t.getComponentType || t.components[e.tagName]) || (e.Clazz = lt))
                    }
                }
                a.pop()
            }
        }
        var a = [];
        e && n(e)
    }

    function Kt(e, t) {
        function i(e, t) {
            for (var i = 0, r = e.length; r > i; i++) n = n.concat(Kt(e[i], t)), s = s || e[i].dynamic
        }
        var s, n = [];
        switch (e.type) {
            case 4:
                s = t;
                var a = e.paths;
                n.push(a[0].value), a.length > 1 && n.push(a[0].value + "." + (a[1].value || "*")), i(a.slice(1), 1);
                break;
            case 9:
                n = Kt(e.expr, t), s = e.expr.dynamic;
                break;
            case 7:
            case 8:
            case 10:
                i(e.segs, t);
                break;
            case 5:
                n = Kt(e.expr), s = e.expr.dynamic, r(e.filters, function(e) {
                    i(e.name.paths), i(e.args)
                });
                break;
            case 6:
                i(e.name.paths), i(e.args);
                break;
            case 12:
            case 11:
                for (var o = 0; o < e.items.length; o++) n = n.concat(Kt(e.items[o].expr)), s = s || e.items[o].expr.dynamic
        }
        return s && (e.dynamic = !0), n
    }

    function Gt(e) {
        var t = e.placeholder,
            i = e.fallback,
            s = "function" == typeof e ? e : e.load;
        return new Bt(s, t, i)
    }
    var Jt, Zt = 1,
        Qt = c("svg,g,defs,desc,metadata,symbol,use,image,path,rect,circle,line,ellipse,polyline,polygon,text,tspan,tref,textpath,marker,pattern,clippath,mask,filter,cursor,view,animate,font,font-face,glyph,missing-glyph,animateColor,animateMotion,animateTransform,textPath,foreignObject"),
        ei = [],
        ti = "function" == typeof Promise && /native code/.test(Promise),
        ii = "undefined" != typeof navigator && navigator.userAgent.match(/(msie|trident)(\s*|\/)([0-9]+)/i),
        si = ii ? ii[3] - 0 : 0;
    si && !/msie/i.test(ii[1]) && (si += 4);
    var ri = si && 9 > si;
    9 === si && o(document, "selectionchange", function() {
        var e = document.activeElement;
        ("TEXTAREA" === e.tagName || "INPUT" === e.tagName) && u(e, "input")
    });
    var ni = c("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr"),
        ai = {
            array: f(),
            object: f(),
            func: f(),
            string: f(),
            number: f(),
            bool: f(),
            symbol: f(),
            any: f,
            arrayOf: f,
            instanceOf: f,
            shape: f,
            oneOf: f,
            oneOfType: f,
            objectOf: f,
            exact: f
        };
    v.prototype.currentCode = function() {
        return this.source.charCodeAt(this.index)
    }, v.prototype.cut = function(e, t) {
        return this.source.slice(e, t)
    }, v.prototype.go = function(e) {
        this.index += e
    }, v.prototype.nextCode = function() {
        return this.go(1), this.currentCode()
    }, v.prototype.charCode = function(e) {
        return this.source.charCodeAt(e)
    }, v.prototype.goUntil = function(e) {
        for (var t; this.index < this.len && (t = this.currentCode());) switch (t) {
            case 32:
            case 9:
            case 13:
            case 10:
                this.index++;
                break;
            default:
                if (t === e) return this.index++, 1;
                return
        }
    }, v.prototype.match = function(e, t) {
        e.lastIndex = this.index;
        var i = e.exec(this.source);
        return !i || t && this.index !== i.index ? void 0 : (this.index = e.lastIndex, i)
    };
    var oi = c("allowpaymentrequest,async,autofocus,autoplay,checked,controls,default,defer,disabled,formnovalidate,hidden,ismap,itemscope,loop,multiple,muted,nomodule,novalidate,open,readonly,required,reversed,selected,typemustmatch"),
        hi = {
            STRING: 1,
            NUMBER: 2,
            BOOL: 3,
            ACCESSOR: 4,
            INTERP: 5,
            CALL: 6,
            TEXT: 7,
            BINARY: 8,
            UNARY: 9,
            TERTIARY: 10,
            OBJECT: 11,
            ARRAY: 12,
            NULL: 13
        },
        ci = {
            lt: "<",
            gt: ">",
            nbsp: " ",
            quot: '"',
            emsp: " ",
            ensp: " ",
            thinsp: " ",
            copy: "©",
            reg: "®",
            zwnj: "‌",
            zwj: "‍",
            amp: "&"
        },
        pi = {},
        li = {
            "for": function(e) {
                var t = new v(e),
                    i = t.match(/^\s*([$0-9a-z_]+)(\s*,\s*([$0-9a-z_]+))?\s+in\s+/gi, 1);
                if (i) {
                    var s = {
                        item: i[1],
                        value: N(t)
                    };
                    if (i[3] && (s.index = i[3]), t.match(/\s*trackby\s+/gi, 1)) {
                        var r = t.index;
                        s.trackBy = C(t), s.trackByRaw = t.cut(r, t.index)
                    }
                    return s
                }
            },
            ref: function(e, t) {
                return {
                    value: B(e, t.delimiters)
                }
            },
            "if": function(e) {
                return {
                    value: z(e.replace(/(^\{\{|\}\}$)/g, ""))
                }
            },
            elif: function(e) {
                return {
                    value: z(e.replace(/(^\{\{|\}\}$)/g, ""))
                }
            },
            "else": function() {
                return {
                    value: {}
                }
            },
            bind: function(e) {
                return {
                    value: z(e.replace(/(^\{\{|\}\}$)/g, ""))
                }
            },
            html: function(e) {
                return {
                    value: z(e.replace(/(^\{\{|\}\}$)/g, ""))
                }
            },
            transition: function(e) {
                return {
                    value: O(e)
                }
            }
        },
        di = {
            url: encodeURIComponent,
            _class: function(e) {
                return e instanceof Array ? e.join(" ") : e
            },
            _style: W,
            _xclass: function(e, t) {
                return e instanceof Array && (e = e.join(" ")), e ? t ? t + " " + e : e : t
            },
            _xstyle: function(e, t) {
                return e = e && W(e), e ? t ? t + ";" + e : e : t
            }
        },
        ui = {
            start: {},
            compiled: {
                is: X,
                compiled: !0
            },
            inited: {
                is: X,
                compiled: !0,
                inited: !0
            },
            created: {
                is: X,
                compiled: !0,
                inited: !0,
                created: !0
            },
            attached: {
                is: X,
                compiled: !0,
                inited: !0,
                created: !0,
                attached: !0
            },
            leaving: {
                is: X,
                compiled: !0,
                inited: !0,
                created: !0,
                attached: !0,
                leaving: !0
            },
            detached: {
                is: X,
                compiled: !0,
                inited: !0,
                created: !0,
                detached: !0
            },
            disposed: {
                is: X,
                disposed: !0
            }
        },
        fi = {
            TEXT: 1,
            IF: 2,
            FOR: 3,
            ELEM: 4,
            CMPT: 5,
            SLOT: 6,
            TPL: 7,
            LOADER: 8
        },
        vi = {
            readonly: "readOnly",
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            rowspan: "rowSpan",
            valign: "vAlign",
            usemap: "useMap",
            frameborder: "frameBorder",
            "for": "htmlFor"
        },
        mi = {
            style: function(e, t) {
                e.style.cssText = t
            },
            "class": function(e, t) {
                (si || e.className !== t) && (e.className = t)
            },
            slot: t,
            draggable: Z
        },
        yi = {
            checkbox: n,
            radio: function(e, t) {
                return e === t
            }
        },
        gi = {
            input: {
                multiple: Z,
                checked: function(e, t, i, s) {
                    var r = et(s, t);
                    Z(e, null != r ? r : t, "checked", s), si && 8 > si && !s.lifeCycle.attached && Z(e, null != r ? r : t, "defaultChecked", s)
                },
                placeholder: Q,
                readonly: Z,
                disabled: Z,
                autofocus: Z,
                required: Z
            },
            option: {
                value: function(e, t, i, s) {
                    G(e, t, i, s), tt(s, t) && (e.selected = !0)
                }
            },
            select: {
                readonly: Z,
                disabled: Z,
                autofocus: Z,
                required: Z
            },
            textarea: {
                placeholder: Q,
                readonly: Z,
                disabled: Z,
                autofocus: Z,
                required: Z
            },
            button: {
                disabled: Z,
                autofocus: Z,
                type: function(e, t) {
                    null != t ? e.setAttribute("type", t) : e.removeAttribute("type")
                }
            }
        };
    nt.prototype.listen = function(e) {
        "function" == typeof e && this.listeners.push(e)
    }, nt.prototype.unlisten = function(e) {
        for (var t = this.listeners.length; t--;) e && this.listeners[t] !== e || this.listeners.splice(t, 1)
    }, nt.prototype.fire = function(e) {
        if (!(e.option.silent || e.option.silence || e.option.quiet))
            for (var t = 0; t < this.listeners.length; t++) this.listeners[t].call(this, e)
    }, nt.prototype.get = function(e, t) {
        var i = this.raw;
        if (!e) return i;
        "object" != typeof e && (e = z(e));
        var s = e.paths;
        if (t = t || this, i = i[s[0].value], null == i && this.parent) i = this.parent.get(e, t);
        else
            for (var r = 1, n = s.length; null != i && n > r; r++) i = i[s[r].value || V(s[r], t)];
        return i
    }, nt.prototype.set = function(e, t, i) {
        if (i = i || {}, e = z(e), this.get(e) !== t || i.force) {
            e = {
                type: 4,
                paths: e.paths.slice(0)
            };
            var s = e.paths[0].value;
            this.raw[s] = at(this.raw[s], e.paths, 1, e.paths.length, t, this), this.fire({
                type: 1,
                expr: e,
                value: t,
                option: i
            })
        }
    }, nt.prototype.assign = function(e, t) {
        t = t || {};
        for (var i in e) this.set(y([{
            type: 1,
            value: i
        }]), e[i], t)
    }, nt.prototype.merge = function(e, t, i) {
        i = i || {}, e = z(e);
        for (var s in t) this.set(y(e.paths.concat([{
            type: 1,
            value: s
        }])), t[s], i)
    }, nt.prototype.apply = function(e, t, i) {
        e = z(e);
        var s = this.get(e);
        this.set(e, t(s), i)
    }, nt.prototype.splice = function(e, t, i) {
        i = i || {}, e = z(e), e = {
            type: 4,
            paths: e.paths.slice(0)
        };
        var s = this.get(e),
            r = [];
        if (s instanceof Array) {
            var n = t[0],
                a = s.length;
            n > a ? n = a : 0 > n && (n = a + n, 0 > n && (n = 0));
            var o = s.slice(0);
            r = o.splice.apply(o, t), this.raw = at(this.raw, e.paths, 0, e.paths.length, o, this), this.fire({
                expr: e,
                type: 2,
                index: n,
                deleteCount: r.length,
                value: r,
                insertions: t.slice(2),
                option: i
            })
        }
        return r
    }, nt.prototype.push = function(e, t, i) {
        var s = this.get(e);
        return s instanceof Array ? (this.splice(e, [s.length, 0, t], i), s.length + 1) : void 0
    }, nt.prototype.pop = function(e, t) {
        var i = this.get(e);
        if (i instanceof Array) {
            var s = i.length;
            if (s) return this.splice(e, [s - 1, 1], t)[0]
        }
    }, nt.prototype.shift = function(e, t) {
        return this.splice(e, [0, 1], t)[0]
    }, nt.prototype.unshift = function(e, t, i) {
        var s = this.get(e);
        return s instanceof Array ? (this.splice(e, [0, 0, t], i), s.length + 1) : void 0
    }, nt.prototype.removeAt = function(e, t, i) {
        this.splice(e, [t, 1], i)
    }, nt.prototype.remove = function(e, t, i) {
        var s = this.get(e);
        if (s instanceof Array)
            for (var r = s.length; r--;)
                if (s[r] === t) {
                    this.splice(e, [r, 1], i);
                    break
                }
    };
    var xi = c("class,style,id");
    pt.prototype.goNext = function() {
        this.current = this.children[++this.index], this.next = this.children[this.index + 1]
    }, lt.prototype.nodeType = 4, lt.prototype.attach = function(e, t) {
        if (!this.lifeCycle.attached) {
            if (!this.el) {
                var i = this.aNode.hotspot.sourceNode,
                    s = this.aNode.props;
                if (i ? (this.el = i.cloneNode(!1), s = this.aNode.hotspot.dynamicProps) : this.el = p(this.tagName), this._sbindData)
                    for (var r in this._sbindData) this._sbindData.hasOwnProperty(r) && it(this.tagName, r)(this.el, this._sbindData[r], r, this);
                for (var n = 0, a = s.length; a > n; n++) {
                    var o = s[n],
                        h = V(o.expr, this.scope, this.owner);
                    (h || !xi[o.name]) && o.handler(this.el, h, o.name, this)
                }
                this.lifeCycle = ui.created
            }
            if (ct(this.el, e, t), !this._contentReady) {
                var c = this.aNode.directives.html;
                if (c) this.el.innerHTML = V(c.value, this.scope, this.owner);
                else
                    for (var n = 0, a = this.aNode.children.length; a > n; n++) {
                        var l = this.aNode.children[n],
                            d = l.Clazz ? new l.Clazz(l, this, this.scope, this.owner) : gt(l, this, this.scope, this.owner);
                        this.children.push(d), d.attach(this.el)
                    }
                this._contentReady = 1
            }
            this._attached(), this.lifeCycle = ui.attached
        }
    }, lt.prototype.detach = Nt, lt.prototype.dispose = wt, lt.prototype._onEl = _t, lt.prototype._leave = function() {
        if (this.leaveDispose && !this.lifeCycle.disposed) {
            for (var e = this.children.length; e--;) this.children[e].dispose(1, 1);
            for (e = this._elFns.length; e--;) {
                var t = this._elFns[e];
                h(this.el, t[0], t[1], t[2])
            }
            this._elFns = null, this._inputTimer && (clearInterval(this._inputTimer), this._inputTimer = null), this.disposeNoDetach && this.parent || l(this.el), this.lifeCycle = ui.detached, this.el = null, this.owner = null, this.scope = null, this.children = null, this.lifeCycle = ui.disposed, this._ondisposed && this._ondisposed()
        }
    }, lt.prototype._update = function(e) {
        var t = this.aNode.hotspot.data;
        if (t && ht(e, t)) {
            var i = this;
            this._sbindData = zt(this.aNode.directives.bind, this._sbindData, this.scope, this.owner, e, function(e, t) {
                e in i.aNode.hotspot.props || it(i.tagName, e)(i.el, t, e, i)
            });
            for (var s = this.aNode.hotspot.dynamicProps, r = 0, n = s.length; n > r; r++)
                for (var a = s[r], o = a.name, h = 0, c = e.length; c > h; h++) {
                    var p = e[h];
                    if (!st(p, this, o) && (Y(p.expr, a.expr, this.scope) || a.hintExpr && Y(p.expr, a.hintExpr, this.scope))) {
                        a.handler(this.el, V(a.expr, this.scope, this.owner), o, this);
                        break
                    }
                }
            var l = this.aNode.directives.html;
            if (l) {
                for (var d = e.length; d--;)
                    if (Y(e[d].expr, l.value, this.scope)) {
                        this.el.innerHTML = V(l.value, this.scope, this.owner);
                        break
                    }
            } else
                for (var r = 0, n = this.children.length; n > r; r++) this.children[r]._update(e)
        }
    }, lt.prototype._attached = St, vt.prototype._create = dt, vt.prototype.dispose = ft, vt.prototype.attach = function(e, t) {
        var i = this.loader.placeholder;
        if (i) {
            var s = new i(this.options);
            this.children[0] = s, s.attach(e, t)
        }
        this._create(), ct(this.el, e, t);
        var r = this;
        this.loader.start(function(e) {
            r.onload(e)
        })
    }, vt.prototype.onload = function(e) {
        if (this.el && e) {
            var t = new e(this.options);
            t.attach(this.el.parentNode, this.el);
            var i = this.options.parent.children;
            (null == this.parentIndex || i[this.parentIndex] !== this) && r(i, function(e, t) {
                e instanceof vt && (e.parentIndex = t)
            }), i[this.parentIndex] = t
        }
        this.dispose()
    }, vt.prototype._update = function(e) {
        this.children[0] && this.children[0]._update(e)
    };
    var Ni = "undefined" != typeof window;
    Ut.prototype._initSourceSlots = function(e) {
        if (this.sourceSlots.named = {}, this.source && this.scope)
            for (var t = this.source.children, i = 0, s = t.length; s > i; i++) {
                var r, n = t[i],
                    a = !n.textExpr && K(n, "slot");
                if (a) {
                    e && this.sourceSlotNameProps.push(a);
                    var o = V(a.expr, this.scope, this.owner);
                    r = this.sourceSlots.named[o], r || (r = this.sourceSlots.named[o] = []), r.push(n)
                } else e && (r = this.sourceSlots.noname, r || (r = this.sourceSlots.noname = []), r.push(n))
            }
    }, Ut.prototype.nodeType = 5, Ut.prototype.nextTick = d, Ut.prototype._ctx = (new Date).getTime().toString(16), Ut.prototype._callHook = Ut.prototype._toPhase = function(e) {
        this.lifeCycle[e] || (this.lifeCycle = ui[e] || this.lifeCycle, "function" == typeof this[e] && this[e](), this._afterLife = this.lifeCycle)
    }, Ut.prototype.on = function(e, t, i) {
        "function" == typeof t && (this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push({
            fn: t,
            declaration: i
        }))
    }, Ut.prototype.un = function(e, t) {
        for (var i = this.listeners[e], s = i && i.length; s--;) t && t !== i[s].fn || i.splice(s, 1)
    }, Ut.prototype.fire = function(e, t) {
        var i = this;
        r(this.listeners[e], function(e) {
            e.fn.call(i, t)
        })
    }, Ut.prototype._calcComputed = function(e) {
        var t = this.computedDeps[e];
        t || (t = this.computedDeps[e] = {});
        var i = this;
        this.data.set(e, this.computed[e].call({
            data: {
                get: function(s) {
                    return t[s] || (t[s] = 1, i.computed[s] && !i.computedDeps[s] && i._calcComputed(s), i.watch(s, function() {
                        i._calcComputed(e)
                    })), i.data.get(s)
                }
            }
        }))
    }, Ut.prototype.dispatch = function(e, t) {
        for (var i = this.parentComponent; i;) {
            var s = i.messages[e] || i.messages["*"];
            if ("function" == typeof s) {
                s.call(i, {
                    target: this,
                    value: t,
                    name: e
                });
                break
            }
            i = i.parentComponent
        }
    }, Ut.prototype.slot = function(e) {
        function t(n) {
            r(n, function(r) {
                6 === r.nodeType && r.owner === s ? (r.isNamed && r.name === e || !r.isNamed && !e) && i.push(r) : t(r.children)
            })
        }
        var i = [],
            s = this;
        return t(this.children), i
    }, Ut.prototype.ref = function(e) {
        function t(e) {
            r(e, function(e) {
                return i(e), !s
            })
        }

        function i(i) {
            var r = i.nodeType;
            if (1 !== r) {
                if (i.owner === n) {
                    var a;
                    switch (i.nodeType) {
                        case 4:
                            a = i.aNode.directives.ref, a && V(a.value, i.scope, n) === e && (s = i.el);
                            break;
                        case 5:
                            a = i.source.directives.ref, a && V(a.value, i.scope, n) === e && (s = i)
                    }!s && t(i.slotChildren)
                }!s && t(i.children)
            }
        }
        var s, n = this;
        return t(this.children), s
    }, Ut.prototype._update = function(e) {
        if (!this.lifeCycle.disposed) {
            var t = this,
                i = !1;
            if (this._notifyNeedReload = function() {
                    i = !0
                }, e)
                if (this.source && (this._srcSbindData = zt(this.source.directives.bind, this._srcSbindData, this.scope, this.owner, e, function(e, i) {
                        e in t.source.hotspot.props || t.data.set(e, i, {
                            target: {
                                node: t.owner
                            }
                        })
                    })), r(e, function(e) {
                        var s = e.expr;
                        r(t.binds, function(i) {
                            var r, n = i.name,
                                a = i.expr;
                            !st(e, t, n) && (r = Y(s, a, t.scope)) && (r > 2 && (n = y([{
                                type: 1,
                                value: n
                            }].concat(s.paths.slice(a.paths.length))), a = s), r >= 2 && 2 === e.type ? t.data.splice(n, [e.index, e.deleteCount].concat(e.insertions), {
                                target: {
                                    node: t.owner
                                }
                            }) : t.data.set(n, V(a, t.scope, t.owner), {
                                target: {
                                    node: t.owner
                                }
                            }))
                        }), r(t.sourceSlotNameProps, function(e) {
                            return i = i || Y(s, e.expr, t.scope), !i
                        })
                    }), i) this._initSourceSlots(), this._repaintChildren();
                else
                    for (var s = this.slotChildren.length; s--;) {
                        var n = this.slotChildren[s];
                        n.lifeCycle.disposed ? this.slotChildren.splice(s, 1) : n.isInserted && n._update(e, 1)
                    }
            var a = this._dataChanges;
            if (a) {
                if (this._dataChanges = null, this._sbindData = zt(this.aNode.directives.bind, this._sbindData, this.data, this, a, function(e, i) {
                        t._rootNode || e in t.aNode.hotspot.props || it(t.tagName, e)(t.el, i, e, t)
                    }), this._rootNode) this._rootNode._update(a), this._rootNode._getElAsRootNode && (this.el = this._rootNode._getElAsRootNode());
                else {
                    for (var o = this.aNode.hotspot.dynamicProps, h = 0; h < o.length; h++)
                        for (var c = o[h], p = 0; p < a.length; p++) {
                            var l = a[p];
                            if (Y(l.expr, c.expr, this.data) || c.hintExpr && Y(l.expr, c.hintExpr, this.data)) {
                                c.handler(this.el, V(c.expr, this.data, this), c.name, this);
                                break
                            }
                        }
                    for (var h = 0; h < this.children.length; h++) this.children[h]._update(a)
                }
                i && (this._initSourceSlots(), this._repaintChildren());
                for (var h = 0; h < this.implicitChildren.length; h++) this.implicitChildren[h]._update(a);
                this._toPhase("updated"), this.owner && this._updateBindxOwner(a) && this.owner._update()
            }
            this._notifyNeedReload = null
        }
    }, Ut.prototype._updateBindxOwner = function(e) {
        var t, i = this;
        return r(e, function(e) {
            r(i.binds, function(s) {
                var r = e.expr;
                if (s.x && !st(e, i.owner) && Y(r, z(s.name), i.data)) {
                    var n = s.expr;
                    r.paths.length > 1 && (n = y(s.expr.paths.concat(r.paths.slice(1)))), t = 1, i.scope.set(n, V(r, i.data, i), {
                        target: {
                            node: i,
                            prop: s.name
                        }
                    })
                }
            })
        }), t
    }, Ut.prototype._repaintChildren = function() {
        if (this._rootNode) {
            var e = this._rootNode.el.parentNode,
                t = this._rootNode.el.nextSibling;
            this._rootNode.dispose(0, 1), this.slotChildren = [], this._rootNode = gt(this.aNode, this, this.data, this), this._rootNode.attach(e, t), this._rootNode._getElAsRootNode && (this.el = this._rootNode._getElAsRootNode())
        } else {
            ut(this.children, 0, 1), this.children = [], this.slotChildren = [];
            for (var i = 0, s = this.aNode.children.length; s > i; i++) {
                var r = gt(this.aNode.children[i], this, this.data, this);
                this.children.push(r), r.attach(this.el)
            }
        }
    }, Ut.prototype._initDataChanger = function() {
        var e = this;
        this._dataChanger = function(t) {
            e._afterLife.created ? (e._dataChanges || (d(e._update, e), e._dataChanges = []), e._dataChanges.push(t)) : e.lifeCycle.inited && e.owner && e._updateBindxOwner([t])
        }, this.data.listen(this._dataChanger)
    }, Ut.prototype.watch = function(e, t) {
        var i = z(e);
        this.data.listen(a(function(e) {
            Y(e.expr, i, this.data) && t.call(this, V(i, this.data, this), e)
        }, this))
    }, Ut.prototype._getElAsRootNode = function() {
        return this.el
    }, Ut.prototype.attach = function(e, t) {
        if (!this.lifeCycle.attached) {
            var i = this.aNode.hotspot.hasRootNode || (this.getComponentType ? this.getComponentType(this.aNode, this.data) : this.components[this.aNode.tagName]);
            if (i) this._rootNode = this._rootNode || gt(this.aNode, this, this.data, this), this._rootNode.attach(e, t), this._rootNode._getElAsRootNode && (this.el = this._rootNode._getElAsRootNode()), this._toPhase("created");
            else {
                if (!this.el) {
                    var s = this.aNode.hotspot.sourceNode,
                        r = this.aNode.props;
                    if (s ? (this.el = s.cloneNode(!1), r = this.aNode.hotspot.dynamicProps) : this.el = p(this.tagName), this._sbindData)
                        for (var n in this._sbindData) this._sbindData.hasOwnProperty(n) && it(this.tagName, n)(this.el, this._sbindData[n], n, this);
                    for (var a = 0, o = r.length; o > a; a++) {
                        var h = r[a],
                            c = V(h.expr, this.data, this);
                        (c || !xi[h.name]) && h.handler(this.el, c, h.name, this)
                    }
                    this._toPhase("created")
                }
                if (ct(this.el, e, t), !this._contentReady) {
                    for (var a = 0, o = this.aNode.children.length; o > a; a++) {
                        var l = this.aNode.children[a],
                            d = l.Clazz ? new l.Clazz(l, this, this.data, this) : gt(l, this, this.data, this);
                        this.children.push(d), d.attach(this.el)
                    }
                    this._contentReady = 1
                }
                this._attached()
            }
            this._toPhase("attached"), this.owner && !this.parent && this.owner.implicitChildren.push(this)
        }
    }, Ut.prototype.detach = Nt, Ut.prototype.dispose = wt, Ut.prototype._onEl = _t, Ut.prototype._attached = St, Ut.prototype._leave = function() {
        if (this.leaveDispose) {
            if (!this.lifeCycle.disposed) {
                this.data.unlisten(), this.dataChanger = null, this._dataChanges = null;
                for (var e = this.implicitChildren.length; e--;) this.implicitChildren[e].dispose(0, 1);
                if (this.implicitChildren = null, this.source = null, this.sourceSlots = null, this.sourceSlotNameProps = null, this.slotChildren = null, this._rootNode) this._rootNode.dispose(this.disposeNoDetach && this.parent);
                else {
                    for (var e = this.children.length; e--;) this.children[e].dispose(1, 1);
                    for (e = this._elFns.length; e--;) {
                        var t = this._elFns[e];
                        h(this.el, t[0], t[1], t[2])
                    }
                    this._elFns = null, this._inputTimer && (clearInterval(this._inputTimer), this._inputTimer = null), this.disposeNoDetach && this.parent || l(this.el)
                }
                this._toPhase("detached"), this._rootNode = null, this.el = null, this.owner = null, this.scope = null, this.children = null, this._toPhase("disposed"), this._ondisposed && this._ondisposed()
            }
        } else this.lifeCycle.attached && (this._rootNode ? this._rootNode.detach ? this._rootNode.detach() : (this._rootNode.dispose(), this._rootNode = null) : l(this.el), this._toPhase("detached"))
    }, Bt.prototype.start = function(e) {
        var t = this;
        switch (this.state) {
            case 2:
                d(function() {
                    e(t.Component)
                });
                break;
            case 1:
                this.listeners.push(e);
                break;
            default:
                this.listeners.push(e), this.state = 1;
                var i = this.load(),
                    s = function(e) {
                        t.done(e)
                    };
                i && "function" == typeof i.then && i.then(s, s)
        }
    }, Bt.prototype.done = function(e) {
        this.state = 2, e = e || this.fallback, this.Component = e, r(this.listeners, function(t) {
            t(e)
        })
    };
    var wi = c("div,span,img,ul,ol,li,dl,dt,dd,a,b,u,hr,form,input,textarea,button,label,select,option,table,tbody,th,tr,td,thead,main,aside,header,footer,nav");
    $t.prototype.nodeType = 1, $t.prototype.attach = function(e, t) {
        if (this.content = V(this.aNode.textExpr, this.scope, this.owner), this.aNode.textExpr.original) {
            this.id = this.id || Zt++, this.sel = document.createComment(this.id), ct(this.sel, e, t), this.el = document.createComment(this.id), ct(this.el, e, t);
            var i = document.createElement("script");
            e.insertBefore(i, this.el), i.insertAdjacentHTML("beforebegin", this.content), e.removeChild(i)
        } else this.el = document.createTextNode(this.content), ct(this.el, e, t)
    }, $t.prototype.dispose = function(e) {
        e || (l(this.el), l(this.sel)), this.el = null, this.sel = null
    };
    var _i = Ni && ("string" == typeof document.createTextNode("").textContent ? "textContent" : "data");
    $t.prototype._update = function(e) {
        if (!this.aNode.textExpr.value)
            for (var t = e.length; t--;)
                if (Y(e[t].expr, this.aNode.textExpr, this.scope)) {
                    var i = V(this.aNode.textExpr, this.scope, this.owner);
                    if (i !== this.content)
                        if (this.content = i, this.aNode.textExpr.original) {
                            for (var s = this.sel.nextSibling, r = this.el.parentNode; s !== this.el;) {
                                var n = s;
                                s = s.nextSibling, l(n)
                            }
                            var a = document.createElement("script");
                            r.insertBefore(a, this.el), a.insertAdjacentHTML("beforebegin", i), r.removeChild(a)
                        } else this.el[_i] = i;
                    return
                }
    }, Wt.prototype.nodeType = 6, Wt.prototype.dispose = function(e, t) {
        this.childOwner = null, this.childScope = null, ut(this.children, e, t), e || (l(this.el), l(this.sel)), this.sel = null, this.el = null, this.owner = null, this.scope = null, this.children = null, this.lifeCycle = ui.disposed, this._ondisposed && this._ondisposed()
    }, Wt.prototype.attach = Mt, Wt.prototype._update = function(e, t) {
        var i = this;
        if (this.nameBind && V(this.nameBind.expr, this.scope, this.owner) !== this.name) return this.owner._notifyNeedReload(), !1;
        if (t) {
            if (this.isInserted)
                for (var s = 0; s < this.children.length; s++) this.children[s]._update(e)
        } else if (this.isScoped) {
            var n = {};
            r(this.aNode.vars, function(e) {
                n[e.name] = 1, i.childScope.set(e.name, V(e.expr, i.scope, i.owner))
            });
            var a = [];
            this._sbindData = zt(this.aNode.directives.bind, this._sbindData, this.scope, this.owner, e, function(e, t) {
                n[e] || (i.childScope.set(e, t), a.push({
                    type: 1,
                    expr: y([{
                        type: 1,
                        value: e
                    }]),
                    value: t,
                    option: {}
                }))
            }), r(e, function(e) {
                i.isInserted || a.push(e), r(i.aNode.vars, function(t) {
                    var s = t.name,
                        r = Y(e.expr, t.expr, i.scope);
                    1 > r || (2 !== e.type ? a.push({
                        type: 1,
                        expr: y([{
                            type: 1,
                            value: s
                        }]),
                        value: i.childScope.get(s),
                        option: e.option
                    }) : 2 === r && a.push({
                        expr: y([{
                            type: 1,
                            value: s
                        }]),
                        type: 2,
                        index: e.index,
                        deleteCount: e.deleteCount,
                        value: e.value,
                        insertions: e.insertions,
                        option: e.option
                    }))
                })
            });
            for (var s = 0; s < this.children.length; s++) this.children[s]._update(a)
        } else if (!this.isInserted)
            for (var s = 0; s < this.children.length; s++) this.children[s]._update(e)
    }, Vt.prototype.exprResolve = function(e) {
        function t(e) {
            return 4 === e.type && e.paths[0].value === s.item ? y(s.value.paths.concat({
                type: 2,
                value: i.raw[i.indexName]
            }, e.paths.slice(1))) : e
        }
        var i = this,
            s = this.directive;
        e = t(e);
        var n = [];
        return r(e.paths, function(e) {
            n.push(4 === e.type && e.paths[0].value === i.indexName ? {
                type: 2,
                value: i.raw[i.indexName]
            } : t(e))
        }), y(n)
    }, s(Vt, nt), r(["set", "remove", "unshift", "shift", "push", "pop", "splice"], function(e) {
        Vt.prototype["_" + e] = nt.prototype[e], Vt.prototype[e] = function(t) {
            t = this.exprResolve(z(t)), this.parent[e].apply(this.parent, [t].concat(Array.prototype.slice.call(arguments, 1)))
        }
    }), qt.prototype.nodeType = 3, qt.prototype._create = dt, qt.prototype.dispose = ft, qt.prototype.attach = function(e, t) {
        this._create(), ct(this.el, e, t), this.listData = V(this.param.value, this.scope, this.owner), this._createChildren()
    }, qt.prototype._createChildren = function() {
        var e = this.el.parentNode,
            t = this.listData;
        if (t instanceof Array)
            for (var i = 0; i < t.length; i++) {
                var s = this.aNode.forRinsed,
                    r = s.Clazz ? new s.Clazz(s, this, new Vt(this, t[i], i), this.owner) : gt(s, this, new Vt(this, t[i], i), this.owner);
                this.children.push(r), r.attach(e, this.el)
            } else if (t && "object" == typeof t)
                for (var i in t)
                    if (t.hasOwnProperty(i) && null != t[i]) {
                        var s = this.aNode.forRinsed,
                            r = s.Clazz ? new s.Clazz(s, this, new Vt(this, t[i], i), this.owner) : gt(s, this, new Vt(this, t[i], i), this.owner);
                        this.children.push(r), r.attach(e, this.el)
                    }
    }, qt.prototype._update = function(e) {
        var t = V(this.param.value, this.scope, this.owner),
            i = this.listData instanceof Array,
            s = t instanceof Array;
        if (this.children.length)
            if (!t || s && 0 === t.length) this._disposeChildren(), this.listData = t;
            else if (i === s && s) this._updateArray(e, t), this.listData = t;
        else {
            this.listData = t;
            for (var r, n = 0; !r && n < e.length; n++) r = Y(e[n].expr, this.param.value, this.scope);
            var a = this.aNode.hotspot.data;
            if (r || a && ht(e, a)) {
                var o = this;
                this._disposeChildren(null, function() {
                    o._createChildren()
                })
            }
        } else this.listData = t, this._createChildren()
    }, qt.prototype._disposeChildren = function(e, t) {
        function i() {
            h++, h >= a && t && t()
        }
        var s = this.el.parentNode,
            r = s.firstChild,
            n = s.lastChild,
            a = this.children.length,
            o = !this.aNode.directives.transition && !e && a && r === this.children[0].el && n === this.el;
        e || (e = this.children, this.children = []);
        var h = 0;
        a = e.length;
        for (var c = 0; a > c; c++) {
            var p = e[c];
            o ? p && p.dispose(o, o) : p ? (p._ondisposed = i, p.dispose()) : i()
        }
        o && (si ? s.innerHTML = "" : s.textContent = "", this.el = document.createComment(this.id), s.appendChild(this.el), t && t())
    }, qt.prototype.opti = "undefined" != typeof navigator && /chrome\/[0-9]+/i.test(navigator.userAgent), qt.prototype._updateArray = function(e, t) {
        function i(e) {
            for (var t = 0, i = a.length; i > t; t++)(a[t] = a[t] || []).push(e);
            p = null, c = !1
        }

        function s() {
            if (ot._doCreateAndUpdate = null, !c)
                for (var e = ot.el, i = e.parentNode, s = -1, r = 0; l > r; r++) {
                    var n = ot.children[r];
                    if (n) !a[r] || p && !p[r] || n._update(a[r]);
                    else {
                        if (r > s)
                            for (s = r + 1, e = null; l > s;) {
                                var o = ot.children[s];
                                if (o) {
                                    e = o.sel || o.el;
                                    break
                                }
                                s++
                            }
                        ot.children[r] = gt(ot.aNode.forRinsed, ot, new Vt(ot, t[r], r), ot.owner), ot.children[r].attach(i, e || ot.el)
                    }
                }
        }
        for (var r, n = this.children.length, a = new Array(n), o = 4 === this.children[0].nodeType, h = [], c = !0, p = {}, l = t.length, d = this.aNode.hotspot.getForKey, u = 0; u < e.length; u++) {
            var f = e[u],
                v = Y(f.expr, this.param.value, this.scope);
            if (v)
                if (v > 2) {
                    var m = f.expr.paths,
                        g = this.param.value.paths.length,
                        x = +V(m[g], this.scope, this.owner);
                    isNaN(x) ? i(f) : r || (c = !1, p && (p[x] = 1), a[x] = a[x] || [], this.param.index && a[x].push(f), f = 1 === f.type ? {
                        type: f.type,
                        expr: y(this.itemPaths.concat(m.slice(g + 1))),
                        value: f.value,
                        option: f.option
                    } : {
                        index: f.index,
                        deleteCount: f.deleteCount,
                        insertions: f.insertions,
                        type: f.type,
                        expr: y(this.itemPaths.concat(m.slice(g + 1))),
                        value: f.value,
                        option: f.option
                    }, a[x].push(f), 1 === f.type ? this.children[x] ? this.children[x].scope._set(f.expr, f.value, {
                        silent: 1
                    }) : this.children[x] = 0 : this.children[x] && this.children[x].scope._splice(f.expr, [].concat(f.index, f.deleteCount, f.insertions), {
                        silent: 1
                    }))
                } else {
                    if (r) continue;
                    if (2 !== v || 2 !== f.type || "optimized" === this.owner.updateMode && this.opti && !this.aNode.directives.transition)
                        if (p = null, c = !1, r = 1, d && l && n) {
                            for (var N = [], w = [], _ = {}, b = [], C = {}, k = 0; k < t.length; k++) {
                                var E = d(t[k]);
                                N.push(E), _[E] = k
                            }
                            for (var k = 0; k < this.listData.length; k++) {
                                var E = d(this.listData[k]);
                                w.push(E), C[E] = k, null != _[E] ? b[k] = _[E] : (b[k] = -1, h.push(this.children[k]))
                            }
                            for (var T = 0, R = l, D = 0, S = n; l > T && n > D && N[T] === w[D];) this.listData[D] !== t[T] && (this.children[D].scope.raw[this.param.item] = t[T], (a[D] = a[D] || []).push({
                                type: 1,
                                option: f.option,
                                expr: this.itemExpr,
                                value: t[T]
                            })), 2 > v && (a[D] = a[D] || []).push(f), T++, D++;
                            for (var P = this.param.index ? {
                                    type: 1,
                                    option: f.option,
                                    expr: this.indexExpr
                                } : null; R > T && S > D && N[R - 1] === w[S - 1];) R--, S--, this.listData[S] !== t[R] && (this.children[S].scope.raw[this.param.item] = t[R], (a[S] = a[S] || []).push({
                                type: 1,
                                option: f.option,
                                expr: this.itemExpr,
                                value: t[R]
                            })), R !== S && (this.children[S].scope.raw[this.children[S].scope.indexName] = R, P && (a[S] = a[S] || []).push(P)), 2 > v && (a[S] = a[S] || []).push(f);
                            for (var A = [], z = [], O = -1, I = b.slice(D, S), U = S - D, L = new Array(U), k = 0; U > k; k++) {
                                var B = I[k];
                                if (-1 !== B) {
                                    var j = -1,
                                        F = A.length;
                                    if (F > 0 && A[F - 1] <= B) j = F - 1;
                                    else
                                        for (; F - j > 1;) {
                                            var $ = Math.floor((j + F) / 2);
                                            A[$] > B ? F = $ : j = $
                                        } - 1 !== j && (L[k] = z[j]), j === O ? (O++, A[O] = B, z[O] = k) : B < A[j + 1] && (A[j + 1] = B, z[j + 1] = k)
                                }
                            }
                            for (var k = z[O]; O >= 0; k = L[k], O--) A[O] = k;
                            for (var M = A.length, W = M ? b[A[--M] + D] : -1, q = [], H = [], X = this.el, K = o && X.parentNode, k = l - 1; k >= 0; k--)
                                if (k >= R) q[k] = this.children[n - l + k], H[k] = a[n - l + k], o && (X = q[k].el);
                                else if (T > k) q[k] = this.children[k], H[k] = a[k];
                            else {
                                var G = C[N[k]],
                                    J = this.children[G];
                                if (J && (o || k === W)) {
                                    var Z = J.scope;
                                    this.listData[G] !== t[k] && (Z.raw[this.param.item] = t[k], (a[G] = a[G] || []).push({
                                        type: 1,
                                        option: f.option,
                                        expr: this.itemExpr,
                                        value: t[k]
                                    })), P && k !== G && (Z.raw[Z.indexName] = k, P && (a[G] = a[G] || []).push(P)), 2 > v && (a[G] = a[G] || []).push(f), q[k] = J, H[k] = a[G], k === W ? W = M ? b[A[--M] + D] : -1 : K.insertBefore(J.el, X), o && (X = J.el)
                                } else J && h.push(J), q[k] = 0, H[k] = 0
                            }
                            this.children = q, a = H
                        } else {
                            n > l && (h = h.concat(this.children.slice(l)), a = a.slice(0, l), this.children = this.children.slice(0, l));
                            for (var k = 0; l > k; k++) 2 > v && (a[k] = a[k] || []).push(f), this.children[k] ? this.children[k].scope.raw[this.param.item] !== t[k] && (this.children[k].scope.raw[this.param.item] = t[k], (a[k] = a[k] || []).push({
                                type: 1,
                                option: f.option,
                                expr: this.itemExpr,
                                value: t[k]
                            })) : this.children[k] = 0
                        }
                    else {
                        p = null;
                        var Q = f.index,
                            et = f.deleteCount,
                            tt = f.insertions.length,
                            it = tt - et;
                        if (it)
                            for (var P = this.param.index ? {
                                    type: 1,
                                    option: f.option,
                                    expr: this.indexExpr
                                } : null, k = Q + et; k < this.children.length; k++) {
                                P && (c = !1, (a[k] = a[k] || []).push(P));
                                var st = this.children[k];
                                st && (st.scope.raw[st.scope.indexName] = k - et + tt)
                            }
                        for (var rt = et; rt--;)
                            if (tt > rt) {
                                c = !1;
                                var k = Q + rt;
                                (a[k] = a[k] || []).push({
                                    type: 1,
                                    option: f.option,
                                    expr: this.itemExpr,
                                    value: f.insertions[rt]
                                }), this.children[k] && (this.children[k].scope.raw[this.param.item] = f.insertions[rt])
                            } if (0 > it) h = h.concat(this.children.splice(Q + tt, -it)), a.splice(Q + tt, -it);
                        else if (it > 0) {
                            c = !1;
                            var nt = [Q + et, 0].concat(new Array(it));
                            this.children.splice.apply(this.children, nt), a.splice.apply(a, nt)
                        }
                    }
                }
            else i(f)
        }
        if (l !== n && this.param.value.paths) {
            var at = {
                type: 1,
                option: {},
                expr: y(this.param.value.paths.concat({
                    type: 1,
                    value: "length"
                }))
            };
            ht([at], this.aNode.hotspot.data) && i(at)
        }
        this._doCreateAndUpdate = s;
        var ot = this;
        0 === h.length ? s() : this._disposeChildren(h, function() {
            s === ot._doCreateAndUpdate && s()
        })
    }, Ht.prototype.nodeType = 2, Ht.prototype._create = dt, Ht.prototype.dispose = ft, Ht.prototype.attach = function(e, t) {
        var i, s, n = this;
        V(this.aNode.directives["if"].value, this.scope, this.owner) ? (s = gt(this.aNode.ifRinsed, this, this.scope, this.owner), i = -1) : r(this.aNode.elses, function(e, t) {
            var r = e.directives.elif;
            return !r || r && V(r.value, n.scope, n.owner) ? (s = gt(e, n, n.scope, n.owner), i = t, !1) : void 0
        }), s && (this.children[0] = s, s.attach(e, t), this.elseIndex = i), this._create(), ct(this.el, e, t)
    }, Ht.prototype._update = function(e) {
        function t() {
            "undefined" != typeof i && (s.children[0] = gt(n, s, s.scope, s.owner)).attach(s.el.parentNode, s.el)
        }
        var i, s = this,
            n = this.aNode.ifRinsed;
        V(this.aNode.directives["if"].value, this.scope, this.owner) ? i = -1 : r(this.aNode.elses, function(e, t) {
            var r = e.directives.elif;
            return r && V(r.value, s.scope, s.owner) || !r ? (i = t, n = e, !1) : void 0
        });
        var a = this.children[0];
        i === this.elseIndex ? a && a._update(e) : (this.children = [], a ? (a._ondisposed = t, a.dispose()) : t(), this.elseIndex = i)
    }, Ht.prototype._getElAsRootNode = function() {
        var e = this.children[0];
        return e && e.el || this.el
    }, Yt.prototype.nodeType = 7, Yt.prototype.attach = Mt, Yt.prototype.dispose = function(e, t) {
        ut(this.children, e, t), e || (l(this.el), l(this.sel)), this.sel = null, this.el = null, this.owner = null, this.scope = null, this.children = null, this.lifeCycle = ui.disposed, this._ondisposed && this._ondisposed()
    }, Yt.prototype._update = function(e) {
        for (var t = 0; t < this.children.length; t++) this.children[t]._update(e)
    };
    var bi = {
        version: "3.9.2",
        Component: Ut,
        defineComponent: Lt,
        createComponentLoader: Gt,
        parseComponentTemplate: jt,
        unpackANode: It,
        parseTemplate: M,
        parseExpr: z,
        ExprType: hi,
        LifeCycle: ui,
        NodeType: fi,
        nextTick: d,
        Data: nt,
        evalExpr: V,
        inherits: s,
        DataTypes: ai
    };
    "object" == typeof exports && "object" == typeof module ? exports = module.exports = bi : "function" == typeof define && define.amd ? define("san", [], bi) : e.san = bi
}(this);