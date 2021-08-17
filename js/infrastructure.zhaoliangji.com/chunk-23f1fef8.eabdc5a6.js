(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-23f1fef8"], {
        1503: function(e, r, n) {
            var t = n("626a").stringify,
                i = n("3dde");
            e.exports = function(e) {
                return {
                    parse: i(e),
                    stringify: t
                }
            }, e.exports.parse = i(), e.exports.stringify = t
        },
        "3dde": function(e, r, n) {
            var t = null;
            const i = /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,
                o = /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;
            var u = function(e) {
                "use strict";
                var r = {
                    strict: !1,
                    storeAsString: !1,
                    alwaysParseAsBig: !1,
                    useNativeBigInt: !1,
                    protoAction: "error",
                    constructorAction: "error"
                };
                if (void 0 !== e && null !== e) {
                    if (!0 === e.strict && (r.strict = !0), !0 === e.storeAsString && (r.storeAsString = !0), r.alwaysParseAsBig = !0 === e.alwaysParseAsBig && e.alwaysParseAsBig, r.useNativeBigInt = !0 === e.useNativeBigInt && e.useNativeBigInt, "undefined" !== typeof e.constructorAction) {
                        if ("error" !== e.constructorAction && "ignore" !== e.constructorAction && "preserve" !== e.constructorAction) throw new Error('Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ' + e.constructorAction);
                        r.constructorAction = e.constructorAction
                    }
                    if ("undefined" !== typeof e.protoAction) {
                        if ("error" !== e.protoAction && "ignore" !== e.protoAction && "preserve" !== e.protoAction) throw new Error('Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ' + e.protoAction);
                        r.protoAction = e.protoAction
                    }
                }
                var u, s, f, c, l = {
                        '"': '"',
                        "\\": "\\",
                        "/": "/",
                        b: "\b",
                        f: "\f",
                        n: "\n",
                        r: "\r",
                        t: "\t"
                    },
                    a = function(e) {
                        throw {
                            name: "SyntaxError",
                            message: e,
                            at: u,
                            text: f
                        }
                    },
                    h = function(e) {
                        return e && e !== s && a("Expected '" + e + "' instead of '" + s + "'"), s = f.charAt(u), u += 1, s
                    },
                    p = function() {
                        var e, i = "";
                        "-" === s && (i = "-", h("-"));
                        while (s >= "0" && s <= "9") i += s, h();
                        if ("." === s) {
                            i += ".";
                            while (h() && s >= "0" && s <= "9") i += s
                        }
                        if ("e" === s || "E" === s) {
                            i += s, h(), "-" !== s && "+" !== s || (i += s, h());
                            while (s >= "0" && s <= "9") i += s, h()
                        }
                        if (e = +i, isFinite(e)) return null == t && (t = n("7921")), i.length > 15 ? r.storeAsString ? i : r.useNativeBigInt ? BigInt(i) : new t(i) : r.alwaysParseAsBig ? r.useNativeBigInt ? BigInt(e) : new t(e) : e;
                        a("Bad number")
                    },
                    g = function() {
                        var e, r, n, t = "";
                        if ('"' === s) {
                            var i = u;
                            while (h()) {
                                if ('"' === s) return u - 1 > i && (t += f.substring(i, u - 1)), h(), t;
                                if ("\\" === s) {
                                    if (u - 1 > i && (t += f.substring(i, u - 1)), h(), "u" === s) {
                                        for (n = 0, r = 0; r < 4; r += 1) {
                                            if (e = parseInt(h(), 16), !isFinite(e)) break;
                                            n = 16 * n + e
                                        }
                                        t += String.fromCharCode(n)
                                    } else {
                                        if ("string" !== typeof l[s]) break;
                                        t += l[s]
                                    }
                                    i = u
                                }
                            }
                        }
                        a("Bad string")
                    },
                    w = function() {
                        while (s && s <= " ") h()
                    },
                    d = function() {
                        switch (s) {
                            case "t":
                                return h("t"), h("r"), h("u"), h("e"), !0;
                            case "f":
                                return h("f"), h("a"), h("l"), h("s"), h("e"), !1;
                            case "n":
                                return h("n"), h("u"), h("l"), h("l"), null
                        }
                        a("Unexpected '" + s + "'")
                    },
                    v = function() {
                        var e = [];
                        if ("[" === s) {
                            if (h("["), w(), "]" === s) return h("]"), e;
                            while (s) {
                                if (e.push(c()), w(), "]" === s) return h("]"), e;
                                h(","), w()
                            }
                        }
                        a("Bad array")
                    },
                    y = function() {
                        var e, n = Object.create(null);
                        if ("{" === s) {
                            if (h("{"), w(), "}" === s) return h("}"), n;
                            while (s) {
                                if (e = g(), w(), h(":"), !0 === r.strict && Object.hasOwnProperty.call(n, e) && a('Duplicate key "' + e + '"'), !0 === i.test(e) ? "error" === r.protoAction ? a("Object contains forbidden prototype property") : "ignore" === r.protoAction ? c() : n[e] = c() : !0 === o.test(e) ? "error" === r.constructorAction ? a("Object contains forbidden constructor property") : "ignore" === r.constructorAction ? c() : n[e] = c() : n[e] = c(), w(), "}" === s) return h("}"), n;
                                h(","), w()
                            }
                        }
                        a("Bad object")
                    };
                return c = function() {
                        switch (w(), s) {
                            case "{":
                                return y();
                            case "[":
                                return v();
                            case '"':
                                return g();
                            case "-":
                                return p();
                            default:
                                return s >= "0" && s <= "9" ? p() : d()
                        }
                    },
                    function(e, r) {
                        var n;
                        return f = e + "", u = 0, s = " ", n = c(), w(), s && a("Syntax error"), "function" === typeof r ? function e(n, t) {
                            var i, o = n[t];
                            return o && "object" === typeof o && Object.keys(o).forEach((function(r) {
                                i = e(o, r), void 0 !== i ? o[r] = i : delete o[r]
                            })), r.call(n, t, o)
                        }({
                            "": n
                        }, "") : n
                    }
            };
            e.exports = u
        },
        "626a": function(e, r, n) {
            var t = n("7921"),
                i = e.exports;
            (function() {
                "use strict";
                var e, r, n, o = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    u = {
                        "\b": "\\b",
                        "\t": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    };

                function s(e) {
                    return o.lastIndex = 0, o.test(e) ? '"' + e.replace(o, (function(e) {
                        var r = u[e];
                        return "string" === typeof r ? r : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    })) + '"' : '"' + e + '"'
                }

                function f(i, o) {
                    var u, c, l, a, h, p = e,
                        g = o[i],
                        w = null != g && (g instanceof t || t.isBigNumber(g));
                    switch (g && "object" === typeof g && "function" === typeof g.toJSON && (g = g.toJSON(i)), "function" === typeof n && (g = n.call(o, i, g)), typeof g) {
                        case "string":
                            return w ? g : s(g);
                        case "number":
                            return isFinite(g) ? String(g) : "null";
                        case "boolean":
                        case "null":
                        case "bigint":
                            return String(g);
                        case "object":
                            if (!g) return "null";
                            if (e += r, h = [], "[object Array]" === Object.prototype.toString.apply(g)) {
                                for (a = g.length, u = 0; u < a; u += 1) h[u] = f(u, g) || "null";
                                return l = 0 === h.length ? "[]" : e ? "[\n" + e + h.join(",\n" + e) + "\n" + p + "]" : "[" + h.join(",") + "]", e = p, l
                            }
                            if (n && "object" === typeof n)
                                for (a = n.length, u = 0; u < a; u += 1) "string" === typeof n[u] && (c = n[u], l = f(c, g), l && h.push(s(c) + (e ? ": " : ":") + l));
                            else Object.keys(g).forEach((function(r) {
                                var n = f(r, g);
                                n && h.push(s(r) + (e ? ": " : ":") + n)
                            }));
                            return l = 0 === h.length ? "{}" : e ? "{\n" + e + h.join(",\n" + e) + "\n" + p + "}" : "{" + h.join(",") + "}", e = p, l
                    }
                }
                "function" !== typeof i.stringify && (i.stringify = function(t, i, o) {
                    var u;
                    if (e = "", r = "", "number" === typeof o)
                        for (u = 0; u < o; u += 1) r += " ";
                    else "string" === typeof o && (r = o);
                    if (n = i, i && "function" !== typeof i && ("object" !== typeof i || "number" !== typeof i.length)) throw new Error("JSON.stringify");
                    return f("", {
                        "": t
                    })
                })
            })()
        },
        7921: function(e, r, n) {
            var t;
            (function(i) {
                "use strict";
                var o, u = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    s = Math.ceil,
                    f = Math.floor,
                    c = "[BigNumber Error] ",
                    l = c + "Number primitive has more than 15 significant digits: ",
                    a = 1e14,
                    h = 14,
                    p = 9007199254740991,
                    g = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                    w = 1e7,
                    d = 1e9;

                function v(e) {
                    var r, n, t, i = U.prototype = {
                            constructor: U,
                            toString: null,
                            valueOf: null
                        },
                        o = new U(1),
                        B = 20,
                        S = 4,
                        x = -7,
                        I = 21,
                        P = -1e7,
                        _ = 1e7,
                        j = !1,
                        D = 1,
                        R = 0,
                        F = {
                            prefix: "",
                            groupSize: 3,
                            secondaryGroupSize: 0,
                            groupSeparator: ",",
                            decimalSeparator: ".",
                            fractionGroupSize: 0,
                            fractionGroupSeparator: " ",
                            suffix: ""
                        },
                        L = "0123456789abcdefghijklmnopqrstuvwxyz";

                    function U(e, r) {
                        var i, o, s, c, a, g, w, d, v = this;
                        if (!(v instanceof U)) return new U(e, r);
                        if (null == r) {
                            if (e && !0 === e._isBigNumber) return v.s = e.s, void(!e.c || e.e > _ ? v.c = v.e = null : e.e < P ? v.c = [v.e = 0] : (v.e = e.e, v.c = e.c.slice()));
                            if ((g = "number" == typeof e) && 0 * e == 0) {
                                if (v.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                    for (c = 0, a = e; a >= 10; a /= 10, c++);
                                    return void(c > _ ? v.c = v.e = null : (v.e = c, v.c = [e]))
                                }
                                d = String(e)
                            } else {
                                if (!u.test(d = String(e))) return t(v, d, g);
                                v.s = 45 == d.charCodeAt(0) ? (d = d.slice(1), -1) : 1
                            }(c = d.indexOf(".")) > -1 && (d = d.replace(".", "")), (a = d.search(/e/i)) > 0 ? (c < 0 && (c = a), c += +d.slice(a + 1), d = d.substring(0, a)) : c < 0 && (c = d.length)
                        } else {
                            if (A(r, 2, L.length, "Base"), 10 == r) return v = new U(e), M(v, B + v.e + 1, S);
                            if (d = String(e), g = "number" == typeof e) {
                                if (0 * e != 0) return t(v, d, g, r);
                                if (v.s = 1 / e < 0 ? (d = d.slice(1), -1) : 1, U.DEBUG && d.replace(/^0\.0*|\./, "").length > 15) throw Error(l + e)
                            } else v.s = 45 === d.charCodeAt(0) ? (d = d.slice(1), -1) : 1;
                            for (i = L.slice(0, r), c = a = 0, w = d.length; a < w; a++)
                                if (i.indexOf(o = d.charAt(a)) < 0) {
                                    if ("." == o) {
                                        if (a > c) {
                                            c = w;
                                            continue
                                        }
                                    } else if (!s && (d == d.toUpperCase() && (d = d.toLowerCase()) || d == d.toLowerCase() && (d = d.toUpperCase()))) {
                                        s = !0, a = -1, c = 0;
                                        continue
                                    }
                                    return t(v, String(e), g, r)
                                } g = !1, d = n(d, r, 10, v.s), (c = d.indexOf(".")) > -1 ? d = d.replace(".", "") : c = d.length
                        }
                        for (a = 0; 48 === d.charCodeAt(a); a++);
                        for (w = d.length; 48 === d.charCodeAt(--w););
                        if (d = d.slice(a, ++w)) {
                            if (w -= a, g && U.DEBUG && w > 15 && (e > p || e !== f(e))) throw Error(l + v.s * e);
                            if ((c = c - a - 1) > _) v.c = v.e = null;
                            else if (c < P) v.c = [v.e = 0];
                            else {
                                if (v.e = c, v.c = [], a = (c + 1) % h, c < 0 && (a += h), a < w) {
                                    for (a && v.c.push(+d.slice(0, a)), w -= h; a < w;) v.c.push(+d.slice(a, a += h));
                                    a = h - (d = d.slice(a)).length
                                } else a -= w;
                                for (; a--; d += "0");
                                v.c.push(+d)
                            }
                        } else v.c = [v.e = 0]
                    }

                    function C(e, r, n, t) {
                        var i, o, u, s, f;
                        if (null == n ? n = S : A(n, 0, 8), !e.c) return e.toString();
                        if (i = e.c[0], u = e.e, null == r) f = b(e.c), f = 1 == t || 2 == t && (u <= x || u >= I) ? O(f, u) : E(f, u, "0");
                        else if (e = M(new U(e), r, n), o = e.e, f = b(e.c), s = f.length, 1 == t || 2 == t && (r <= o || o <= x)) {
                            for (; s < r; f += "0", s++);
                            f = O(f, o)
                        } else if (r -= u, f = E(f, o, "0"), o + 1 > s) {
                            if (--r > 0)
                                for (f += "."; r--; f += "0");
                        } else if (r += o - s, r > 0)
                            for (o + 1 == s && (f += "."); r--; f += "0");
                        return e.s < 0 && i ? "-" + f : f
                    }

                    function k(e, r) {
                        for (var n, t = 1, i = new U(e[0]); t < e.length; t++) {
                            if (n = new U(e[t]), !n.s) {
                                i = n;
                                break
                            }
                            r.call(i, n) && (i = n)
                        }
                        return i
                    }

                    function T(e, r, n) {
                        for (var t = 1, i = r.length; !r[--i]; r.pop());
                        for (i = r[0]; i >= 10; i /= 10, t++);
                        return (n = t + n * h - 1) > _ ? e.c = e.e = null : n < P ? e.c = [e.e = 0] : (e.e = n, e.c = r), e
                    }

                    function M(e, r, n, t) {
                        var i, o, u, c, l, p, w, d = e.c,
                            v = g;
                        if (d) {
                            e: {
                                for (i = 1, c = d[0]; c >= 10; c /= 10, i++);
                                if (o = r - i, o < 0) o += h,
                                u = r,
                                l = d[p = 0],
                                w = l / v[i - u - 1] % 10 | 0;
                                else if (p = s((o + 1) / h), p >= d.length) {
                                    if (!t) break e;
                                    for (; d.length <= p; d.push(0));
                                    l = w = 0, i = 1, o %= h, u = o - h + 1
                                } else {
                                    for (l = c = d[p], i = 1; c >= 10; c /= 10, i++);
                                    o %= h, u = o - h + i, w = u < 0 ? 0 : l / v[i - u - 1] % 10 | 0
                                }
                                if (t = t || r < 0 || null != d[p + 1] || (u < 0 ? l : l % v[i - u - 1]), t = n < 4 ? (w || t) && (0 == n || n == (e.s < 0 ? 3 : 2)) : w > 5 || 5 == w && (4 == n || t || 6 == n && (o > 0 ? u > 0 ? l / v[i - u] : 0 : d[p - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), r < 1 || !d[0]) return d.length = 0,
                                t ? (r -= e.e + 1, d[0] = v[(h - r % h) % h], e.e = -r || 0) : d[0] = e.e = 0,
                                e;
                                if (0 == o ? (d.length = p, c = 1, p--) : (d.length = p + 1, c = v[h - o], d[p] = u > 0 ? f(l / v[i - u] % v[u]) * c : 0), t)
                                    for (;;) {
                                        if (0 == p) {
                                            for (o = 1, u = d[0]; u >= 10; u /= 10, o++);
                                            for (u = d[0] += c, c = 1; u >= 10; u /= 10, c++);
                                            o != c && (e.e++, d[0] == a && (d[0] = 1));
                                            break
                                        }
                                        if (d[p] += c, d[p] != a) break;
                                        d[p--] = 0, c = 1
                                    }
                                for (o = d.length; 0 === d[--o]; d.pop());
                            }
                            e.e > _ ? e.c = e.e = null : e.e < P && (e.c = [e.e = 0])
                        }
                        return e
                    }

                    function G(e) {
                        var r, n = e.e;
                        return null === n ? e.toString() : (r = b(e.c), r = n <= x || n >= I ? O(r, n) : E(r, n, "0"), e.s < 0 ? "-" + r : r)
                    }
                    return U.clone = v, U.ROUND_UP = 0, U.ROUND_DOWN = 1, U.ROUND_CEIL = 2, U.ROUND_FLOOR = 3, U.ROUND_HALF_UP = 4, U.ROUND_HALF_DOWN = 5, U.ROUND_HALF_EVEN = 6, U.ROUND_HALF_CEIL = 7, U.ROUND_HALF_FLOOR = 8, U.EUCLID = 9, U.config = U.set = function(e) {
                        var r, n;
                        if (null != e) {
                            if ("object" != typeof e) throw Error(c + "Object expected: " + e);
                            if (e.hasOwnProperty(r = "DECIMAL_PLACES") && (n = e[r], A(n, 0, d, r), B = n), e.hasOwnProperty(r = "ROUNDING_MODE") && (n = e[r], A(n, 0, 8, r), S = n), e.hasOwnProperty(r = "EXPONENTIAL_AT") && (n = e[r], n && n.pop ? (A(n[0], -d, 0, r), A(n[1], 0, d, r), x = n[0], I = n[1]) : (A(n, -d, d, r), x = -(I = n < 0 ? -n : n))), e.hasOwnProperty(r = "RANGE"))
                                if (n = e[r], n && n.pop) A(n[0], -d, -1, r), A(n[1], 1, d, r), P = n[0], _ = n[1];
                                else {
                                    if (A(n, -d, d, r), !n) throw Error(c + r + " cannot be zero: " + n);
                                    P = -(_ = n < 0 ? -n : n)
                                } if (e.hasOwnProperty(r = "CRYPTO")) {
                                if (n = e[r], n !== !!n) throw Error(c + r + " not true or false: " + n);
                                if (n) {
                                    if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw j = !n, Error(c + "crypto unavailable");
                                    j = n
                                } else j = n
                            }
                            if (e.hasOwnProperty(r = "MODULO_MODE") && (n = e[r], A(n, 0, 9, r), D = n), e.hasOwnProperty(r = "POW_PRECISION") && (n = e[r], A(n, 0, d, r), R = n), e.hasOwnProperty(r = "FORMAT")) {
                                if (n = e[r], "object" != typeof n) throw Error(c + r + " not an object: " + n);
                                F = n
                            }
                            if (e.hasOwnProperty(r = "ALPHABET")) {
                                if (n = e[r], "string" != typeof n || /^.?$|[+\-.\s]|(.).*\1/.test(n)) throw Error(c + r + " invalid: " + n);
                                L = n
                            }
                        }
                        return {
                            DECIMAL_PLACES: B,
                            ROUNDING_MODE: S,
                            EXPONENTIAL_AT: [x, I],
                            RANGE: [P, _],
                            CRYPTO: j,
                            MODULO_MODE: D,
                            POW_PRECISION: R,
                            FORMAT: F,
                            ALPHABET: L
                        }
                    }, U.isBigNumber = function(e) {
                        if (!e || !0 !== e._isBigNumber) return !1;
                        if (!U.DEBUG) return !0;
                        var r, n, t = e.c,
                            i = e.e,
                            o = e.s;
                        e: if ("[object Array]" == {}.toString.call(t)) {
                            if ((1 === o || -1 === o) && i >= -d && i <= d && i === f(i)) {
                                if (0 === t[0]) {
                                    if (0 === i && 1 === t.length) return !0;
                                    break e
                                }
                                if (r = (i + 1) % h, r < 1 && (r += h), String(t[0]).length == r) {
                                    for (r = 0; r < t.length; r++)
                                        if (n = t[r], n < 0 || n >= a || n !== f(n)) break e;
                                    if (0 !== n) return !0
                                }
                            }
                        } else
                        if (null === t && null === i && (null === o || 1 === o || -1 === o)) return !0;
                        throw Error(c + "Invalid BigNumber: " + e)
                    }, U.maximum = U.max = function() {
                        return k(arguments, i.lt)
                    }, U.minimum = U.min = function() {
                        return k(arguments, i.gt)
                    }, U.random = function() {
                        var e = 9007199254740992,
                            r = Math.random() * e & 2097151 ? function() {
                                return f(Math.random() * e)
                            } : function() {
                                return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                            };
                        return function(e) {
                            var n, t, i, u, l, a = 0,
                                p = [],
                                w = new U(o);
                            if (null == e ? e = B : A(e, 0, d), u = s(e / h), j)
                                if (crypto.getRandomValues) {
                                    for (n = crypto.getRandomValues(new Uint32Array(u *= 2)); a < u;) l = 131072 * n[a] + (n[a + 1] >>> 11), l >= 9e15 ? (t = crypto.getRandomValues(new Uint32Array(2)), n[a] = t[0], n[a + 1] = t[1]) : (p.push(l % 1e14), a += 2);
                                    a = u / 2
                                } else {
                                    if (!crypto.randomBytes) throw j = !1, Error(c + "crypto unavailable");
                                    for (n = crypto.randomBytes(u *= 7); a < u;) l = 281474976710656 * (31 & n[a]) + 1099511627776 * n[a + 1] + 4294967296 * n[a + 2] + 16777216 * n[a + 3] + (n[a + 4] << 16) + (n[a + 5] << 8) + n[a + 6], l >= 9e15 ? crypto.randomBytes(7).copy(n, a) : (p.push(l % 1e14), a += 7);
                                    a = u / 7
                                } if (!j)
                                for (; a < u;) l = r(), l < 9e15 && (p[a++] = l % 1e14);
                            for (u = p[--a], e %= h, u && e && (l = g[h - e], p[a] = f(u / l) * l); 0 === p[a]; p.pop(), a--);
                            if (a < 0) p = [i = 0];
                            else {
                                for (i = -1; 0 === p[0]; p.splice(0, 1), i -= h);
                                for (a = 1, l = p[0]; l >= 10; l /= 10, a++);
                                a < h && (i -= h - a)
                            }
                            return w.e = i, w.c = p, w
                        }
                    }(), U.sum = function() {
                        for (var e = 1, r = arguments, n = new U(r[0]); e < r.length;) n = n.plus(r[e++]);
                        return n
                    }, n = function() {
                        var e = "0123456789";

                        function n(e, r, n, t) {
                            for (var i, o, u = [0], s = 0, f = e.length; s < f;) {
                                for (o = u.length; o--; u[o] *= r);
                                for (u[0] += t.indexOf(e.charAt(s++)), i = 0; i < u.length; i++) u[i] > n - 1 && (null == u[i + 1] && (u[i + 1] = 0), u[i + 1] += u[i] / n | 0, u[i] %= n)
                            }
                            return u.reverse()
                        }
                        return function(t, i, o, u, s) {
                            var f, c, l, a, h, p, g, w, d = t.indexOf("."),
                                v = B,
                                y = S;
                            for (d >= 0 && (a = R, R = 0, t = t.replace(".", ""), w = new U(i), p = w.pow(t.length - d), R = a, w.c = n(E(b(p.c), p.e, "0"), 10, o, e), w.e = w.c.length), g = n(t, i, o, s ? (f = L, e) : (f = e, L)), l = a = g.length; 0 == g[--a]; g.pop());
                            if (!g[0]) return f.charAt(0);
                            if (d < 0 ? --l : (p.c = g, p.e = l, p.s = u, p = r(p, w, v, y, o), g = p.c, h = p.r, l = p.e), c = l + v + 1, d = g[c], a = o / 2, h = h || c < 0 || null != g[c + 1], h = y < 4 ? (null != d || h) && (0 == y || y == (p.s < 0 ? 3 : 2)) : d > a || d == a && (4 == y || h || 6 == y && 1 & g[c - 1] || y == (p.s < 0 ? 8 : 7)), c < 1 || !g[0]) t = h ? E(f.charAt(1), -v, f.charAt(0)) : f.charAt(0);
                            else {
                                if (g.length = c, h)
                                    for (--o; ++g[--c] > o;) g[c] = 0, c || (++l, g = [1].concat(g));
                                for (a = g.length; !g[--a];);
                                for (d = 0, t = ""; d <= a; t += f.charAt(g[d++]));
                                t = E(t, l, f.charAt(0))
                            }
                            return t
                        }
                    }(), r = function() {
                        function e(e, r, n) {
                            var t, i, o, u, s = 0,
                                f = e.length,
                                c = r % w,
                                l = r / w | 0;
                            for (e = e.slice(); f--;) o = e[f] % w, u = e[f] / w | 0, t = l * o + u * c, i = c * o + t % w * w + s, s = (i / n | 0) + (t / w | 0) + l * u, e[f] = i % n;
                            return s && (e = [s].concat(e)), e
                        }

                        function r(e, r, n, t) {
                            var i, o;
                            if (n != t) o = n > t ? 1 : -1;
                            else
                                for (i = o = 0; i < n; i++)
                                    if (e[i] != r[i]) {
                                        o = e[i] > r[i] ? 1 : -1;
                                        break
                                    } return o
                        }

                        function n(e, r, n, t) {
                            for (var i = 0; n--;) e[n] -= i, i = e[n] < r[n] ? 1 : 0, e[n] = i * t + e[n] - r[n];
                            for (; !e[0] && e.length > 1; e.splice(0, 1));
                        }
                        return function(t, i, o, u, s) {
                            var c, l, p, g, w, d, v, b, m, A, N, O, E, B, S, x, I, P = t.s == i.s ? 1 : -1,
                                _ = t.c,
                                j = i.c;
                            if (!_ || !_[0] || !j || !j[0]) return new U(t.s && i.s && (_ ? !j || _[0] != j[0] : j) ? _ && 0 == _[0] || !j ? 0 * P : P / 0 : NaN);
                            for (b = new U(P), m = b.c = [], l = t.e - i.e, P = o + l + 1, s || (s = a, l = y(t.e / h) - y(i.e / h), P = P / h | 0), p = 0; j[p] == (_[p] || 0); p++);
                            if (j[p] > (_[p] || 0) && l--, P < 0) m.push(1), g = !0;
                            else {
                                for (B = _.length, x = j.length, p = 0, P += 2, w = f(s / (j[0] + 1)), w > 1 && (j = e(j, w, s), _ = e(_, w, s), x = j.length, B = _.length), E = x, A = _.slice(0, x), N = A.length; N < x; A[N++] = 0);
                                I = j.slice(), I = [0].concat(I), S = j[0], j[1] >= s / 2 && S++;
                                do {
                                    if (w = 0, c = r(j, A, x, N), c < 0) {
                                        if (O = A[0], x != N && (O = O * s + (A[1] || 0)), w = f(O / S), w > 1) {
                                            w >= s && (w = s - 1), d = e(j, w, s), v = d.length, N = A.length;
                                            while (1 == r(d, A, v, N)) w--, n(d, x < v ? I : j, v, s), v = d.length, c = 1
                                        } else 0 == w && (c = w = 1), d = j.slice(), v = d.length;
                                        if (v < N && (d = [0].concat(d)), n(A, d, N, s), N = A.length, -1 == c)
                                            while (r(j, A, x, N) < 1) w++, n(A, x < N ? I : j, N, s), N = A.length
                                    } else 0 === c && (w++, A = [0]);
                                    m[p++] = w, A[0] ? A[N++] = _[E] || 0 : (A = [_[E]], N = 1)
                                } while ((E++ < B || null != A[0]) && P--);
                                g = null != A[0], m[0] || m.splice(0, 1)
                            }
                            if (s == a) {
                                for (p = 1, P = m[0]; P >= 10; P /= 10, p++);
                                M(b, o + (b.e = p + l * h - 1) + 1, u, g)
                            } else b.e = l, b.r = +g;
                            return b
                        }
                    }(), t = function() {
                        var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                            r = /^([^.]+)\.$/,
                            n = /^\.([^.]+)$/,
                            t = /^-?(Infinity|NaN)$/,
                            i = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
                        return function(o, u, s, f) {
                            var l, a = s ? u : u.replace(i, "");
                            if (t.test(a)) o.s = isNaN(a) ? null : a < 0 ? -1 : 1;
                            else {
                                if (!s && (a = a.replace(e, (function(e, r, n) {
                                        return l = "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8, f && f != l ? e : r
                                    })), f && (l = f, a = a.replace(r, "$1").replace(n, "0.$1")), u != a)) return new U(a, l);
                                if (U.DEBUG) throw Error(c + "Not a" + (f ? " base " + f : "") + " number: " + u);
                                o.s = null
                            }
                            o.c = o.e = null
                        }
                    }(), i.absoluteValue = i.abs = function() {
                        var e = new U(this);
                        return e.s < 0 && (e.s = 1), e
                    }, i.comparedTo = function(e, r) {
                        return m(this, new U(e, r))
                    }, i.decimalPlaces = i.dp = function(e, r) {
                        var n, t, i, o = this;
                        if (null != e) return A(e, 0, d), null == r ? r = S : A(r, 0, 8), M(new U(o), e + o.e + 1, r);
                        if (!(n = o.c)) return null;
                        if (t = ((i = n.length - 1) - y(this.e / h)) * h, i = n[i])
                            for (; i % 10 == 0; i /= 10, t--);
                        return t < 0 && (t = 0), t
                    }, i.dividedBy = i.div = function(e, n) {
                        return r(this, new U(e, n), B, S)
                    }, i.dividedToIntegerBy = i.idiv = function(e, n) {
                        return r(this, new U(e, n), 0, 1)
                    }, i.exponentiatedBy = i.pow = function(e, r) {
                        var n, t, i, u, l, a, p, g, w, d = this;
                        if (e = new U(e), e.c && !e.isInteger()) throw Error(c + "Exponent not an integer: " + G(e));
                        if (null != r && (r = new U(r)), a = e.e > 14, !d.c || !d.c[0] || 1 == d.c[0] && !d.e && 1 == d.c.length || !e.c || !e.c[0]) return w = new U(Math.pow(+G(d), a ? 2 - N(e) : +G(e))), r ? w.mod(r) : w;
                        if (p = e.s < 0, r) {
                            if (r.c ? !r.c[0] : !r.s) return new U(NaN);
                            t = !p && d.isInteger() && r.isInteger(), t && (d = d.mod(r))
                        } else {
                            if (e.e > 9 && (d.e > 0 || d.e < -1 || (0 == d.e ? d.c[0] > 1 || a && d.c[1] >= 24e7 : d.c[0] < 8e13 || a && d.c[0] <= 9999975e7))) return u = d.s < 0 && N(e) ? -0 : 0, d.e > -1 && (u = 1 / u), new U(p ? 1 / u : u);
                            R && (u = s(R / h + 2))
                        }
                        for (a ? (n = new U(.5), p && (e.s = 1), g = N(e)) : (i = Math.abs(+G(e)), g = i % 2), w = new U(o);;) {
                            if (g) {
                                if (w = w.times(d), !w.c) break;
                                u ? w.c.length > u && (w.c.length = u) : t && (w = w.mod(r))
                            }
                            if (i) {
                                if (i = f(i / 2), 0 === i) break;
                                g = i % 2
                            } else if (e = e.times(n), M(e, e.e + 1, 1), e.e > 14) g = N(e);
                            else {
                                if (i = +G(e), 0 === i) break;
                                g = i % 2
                            }
                            d = d.times(d), u ? d.c && d.c.length > u && (d.c.length = u) : t && (d = d.mod(r))
                        }
                        return t ? w : (p && (w = o.div(w)), r ? w.mod(r) : u ? M(w, R, S, l) : w)
                    }, i.integerValue = function(e) {
                        var r = new U(this);
                        return null == e ? e = S : A(e, 0, 8), M(r, r.e + 1, e)
                    }, i.isEqualTo = i.eq = function(e, r) {
                        return 0 === m(this, new U(e, r))
                    }, i.isFinite = function() {
                        return !!this.c
                    }, i.isGreaterThan = i.gt = function(e, r) {
                        return m(this, new U(e, r)) > 0
                    }, i.isGreaterThanOrEqualTo = i.gte = function(e, r) {
                        return 1 === (r = m(this, new U(e, r))) || 0 === r
                    }, i.isInteger = function() {
                        return !!this.c && y(this.e / h) > this.c.length - 2
                    }, i.isLessThan = i.lt = function(e, r) {
                        return m(this, new U(e, r)) < 0
                    }, i.isLessThanOrEqualTo = i.lte = function(e, r) {
                        return -1 === (r = m(this, new U(e, r))) || 0 === r
                    }, i.isNaN = function() {
                        return !this.s
                    }, i.isNegative = function() {
                        return this.s < 0
                    }, i.isPositive = function() {
                        return this.s > 0
                    }, i.isZero = function() {
                        return !!this.c && 0 == this.c[0]
                    }, i.minus = function(e, r) {
                        var n, t, i, o, u = this,
                            s = u.s;
                        if (e = new U(e, r), r = e.s, !s || !r) return new U(NaN);
                        if (s != r) return e.s = -r, u.plus(e);
                        var f = u.e / h,
                            c = e.e / h,
                            l = u.c,
                            p = e.c;
                        if (!f || !c) {
                            if (!l || !p) return l ? (e.s = -r, e) : new U(p ? u : NaN);
                            if (!l[0] || !p[0]) return p[0] ? (e.s = -r, e) : new U(l[0] ? u : 3 == S ? -0 : 0)
                        }
                        if (f = y(f), c = y(c), l = l.slice(), s = f - c) {
                            for ((o = s < 0) ? (s = -s, i = l) : (c = f, i = p), i.reverse(), r = s; r--; i.push(0));
                            i.reverse()
                        } else
                            for (t = (o = (s = l.length) < (r = p.length)) ? s : r, s = r = 0; r < t; r++)
                                if (l[r] != p[r]) {
                                    o = l[r] < p[r];
                                    break
                                } if (o && (i = l, l = p, p = i, e.s = -e.s), r = (t = p.length) - (n = l.length), r > 0)
                            for (; r--; l[n++] = 0);
                        for (r = a - 1; t > s;) {
                            if (l[--t] < p[t]) {
                                for (n = t; n && !l[--n]; l[n] = r);
                                --l[n], l[t] += a
                            }
                            l[t] -= p[t]
                        }
                        for (; 0 == l[0]; l.splice(0, 1), --c);
                        return l[0] ? T(e, l, c) : (e.s = 3 == S ? -1 : 1, e.c = [e.e = 0], e)
                    }, i.modulo = i.mod = function(e, n) {
                        var t, i, o = this;
                        return e = new U(e, n), !o.c || !e.s || e.c && !e.c[0] ? new U(NaN) : !e.c || o.c && !o.c[0] ? new U(o) : (9 == D ? (i = e.s, e.s = 1, t = r(o, e, 0, 3), e.s = i, t.s *= i) : t = r(o, e, 0, D), e = o.minus(t.times(e)), e.c[0] || 1 != D || (e.s = o.s), e)
                    }, i.multipliedBy = i.times = function(e, r) {
                        var n, t, i, o, u, s, f, c, l, p, g, d, v, b, m, A = this,
                            N = A.c,
                            O = (e = new U(e, r)).c;
                        if (!N || !O || !N[0] || !O[0]) return !A.s || !e.s || N && !N[0] && !O || O && !O[0] && !N ? e.c = e.e = e.s = null : (e.s *= A.s, N && O ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                        for (t = y(A.e / h) + y(e.e / h), e.s *= A.s, f = N.length, p = O.length, f < p && (v = N, N = O, O = v, i = f, f = p, p = i), i = f + p, v = []; i--; v.push(0));
                        for (b = a, m = w, i = p; --i >= 0;) {
                            for (n = 0, g = O[i] % m, d = O[i] / m | 0, u = f, o = i + u; o > i;) c = N[--u] % m, l = N[u] / m | 0, s = d * c + l * g, c = g * c + s % m * m + v[o] + n, n = (c / b | 0) + (s / m | 0) + d * l, v[o--] = c % b;
                            v[o] = n
                        }
                        return n ? ++t : v.splice(0, 1), T(e, v, t)
                    }, i.negated = function() {
                        var e = new U(this);
                        return e.s = -e.s || null, e
                    }, i.plus = function(e, r) {
                        var n, t = this,
                            i = t.s;
                        if (e = new U(e, r), r = e.s, !i || !r) return new U(NaN);
                        if (i != r) return e.s = -r, t.minus(e);
                        var o = t.e / h,
                            u = e.e / h,
                            s = t.c,
                            f = e.c;
                        if (!o || !u) {
                            if (!s || !f) return new U(i / 0);
                            if (!s[0] || !f[0]) return f[0] ? e : new U(s[0] ? t : 0 * i)
                        }
                        if (o = y(o), u = y(u), s = s.slice(), i = o - u) {
                            for (i > 0 ? (u = o, n = f) : (i = -i, n = s), n.reverse(); i--; n.push(0));
                            n.reverse()
                        }
                        for (i = s.length, r = f.length, i - r < 0 && (n = f, f = s, s = n, r = i), i = 0; r;) i = (s[--r] = s[r] + f[r] + i) / a | 0, s[r] = a === s[r] ? 0 : s[r] % a;
                        return i && (s = [i].concat(s), ++u), T(e, s, u)
                    }, i.precision = i.sd = function(e, r) {
                        var n, t, i, o = this;
                        if (null != e && e !== !!e) return A(e, 1, d), null == r ? r = S : A(r, 0, 8), M(new U(o), e, r);
                        if (!(n = o.c)) return null;
                        if (i = n.length - 1, t = i * h + 1, i = n[i]) {
                            for (; i % 10 == 0; i /= 10, t--);
                            for (i = n[0]; i >= 10; i /= 10, t++);
                        }
                        return e && o.e + 1 > t && (t = o.e + 1), t
                    }, i.shiftedBy = function(e) {
                        return A(e, -p, p), this.times("1e" + e)
                    }, i.squareRoot = i.sqrt = function() {
                        var e, n, t, i, o, u = this,
                            s = u.c,
                            f = u.s,
                            c = u.e,
                            l = B + 4,
                            a = new U("0.5");
                        if (1 !== f || !s || !s[0]) return new U(!f || f < 0 && (!s || s[0]) ? NaN : s ? u : 1 / 0);
                        if (f = Math.sqrt(+G(u)), 0 == f || f == 1 / 0 ? (n = b(s), (n.length + c) % 2 == 0 && (n += "0"), f = Math.sqrt(+n), c = y((c + 1) / 2) - (c < 0 || c % 2), f == 1 / 0 ? n = "5e" + c : (n = f.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + c), t = new U(n)) : t = new U(f + ""), t.c[0])
                            for (c = t.e, f = c + l, f < 3 && (f = 0);;)
                                if (o = t, t = a.times(o.plus(r(u, o, l, 1))), b(o.c).slice(0, f) === (n = b(t.c)).slice(0, f)) {
                                    if (t.e < c && --f, n = n.slice(f - 3, f + 1), "9999" != n && (i || "4999" != n)) {
                                        +n && (+n.slice(1) || "5" != n.charAt(0)) || (M(t, t.e + B + 2, 1), e = !t.times(t).eq(u));
                                        break
                                    }
                                    if (!i && (M(o, o.e + B + 2, 0), o.times(o).eq(u))) {
                                        t = o;
                                        break
                                    }
                                    l += 4, f += 4, i = 1
                                } return M(t, t.e + B + 1, S, e)
                    }, i.toExponential = function(e, r) {
                        return null != e && (A(e, 0, d), e++), C(this, e, r, 1)
                    }, i.toFixed = function(e, r) {
                        return null != e && (A(e, 0, d), e = e + this.e + 1), C(this, e, r)
                    }, i.toFormat = function(e, r, n) {
                        var t, i = this;
                        if (null == n) null != e && r && "object" == typeof r ? (n = r, r = null) : e && "object" == typeof e ? (n = e, e = r = null) : n = F;
                        else if ("object" != typeof n) throw Error(c + "Argument not an object: " + n);
                        if (t = i.toFixed(e, r), i.c) {
                            var o, u = t.split("."),
                                s = +n.groupSize,
                                f = +n.secondaryGroupSize,
                                l = n.groupSeparator || "",
                                a = u[0],
                                h = u[1],
                                p = i.s < 0,
                                g = p ? a.slice(1) : a,
                                w = g.length;
                            if (f && (o = s, s = f, f = o, w -= o), s > 0 && w > 0) {
                                for (o = w % s || s, a = g.substr(0, o); o < w; o += s) a += l + g.substr(o, s);
                                f > 0 && (a += l + g.slice(o)), p && (a = "-" + a)
                            }
                            t = h ? a + (n.decimalSeparator || "") + ((f = +n.fractionGroupSize) ? h.replace(new RegExp("\\d{" + f + "}\\B", "g"), "$&" + (n.fractionGroupSeparator || "")) : h) : a
                        }
                        return (n.prefix || "") + t + (n.suffix || "")
                    }, i.toFraction = function(e) {
                        var n, t, i, u, s, f, l, a, p, w, d, v, y = this,
                            m = y.c;
                        if (null != e && (l = new U(e), !l.isInteger() && (l.c || 1 !== l.s) || l.lt(o))) throw Error(c + "Argument " + (l.isInteger() ? "out of range: " : "not an integer: ") + G(l));
                        if (!m) return new U(y);
                        for (n = new U(o), p = t = new U(o), i = a = new U(o), v = b(m), s = n.e = v.length - y.e - 1, n.c[0] = g[(f = s % h) < 0 ? h + f : f], e = !e || l.comparedTo(n) > 0 ? s > 0 ? n : p : l, f = _, _ = 1 / 0, l = new U(v), a.c[0] = 0;;) {
                            if (w = r(l, n, 0, 1), u = t.plus(w.times(i)), 1 == u.comparedTo(e)) break;
                            t = i, i = u, p = a.plus(w.times(u = p)), a = u, n = l.minus(w.times(u = n)), l = u
                        }
                        return u = r(e.minus(t), i, 0, 1), a = a.plus(u.times(p)), t = t.plus(u.times(i)), a.s = p.s = y.s, s *= 2, d = r(p, i, s, S).minus(y).abs().comparedTo(r(a, t, s, S).minus(y).abs()) < 1 ? [p, i] : [a, t], _ = f, d
                    }, i.toNumber = function() {
                        return +G(this)
                    }, i.toPrecision = function(e, r) {
                        return null != e && A(e, 1, d), C(this, e, r, 2)
                    }, i.toString = function(e) {
                        var r, t = this,
                            i = t.s,
                            o = t.e;
                        return null === o ? i ? (r = "Infinity", i < 0 && (r = "-" + r)) : r = "NaN" : (null == e ? r = o <= x || o >= I ? O(b(t.c), o) : E(b(t.c), o, "0") : 10 === e ? (t = M(new U(t), B + o + 1, S), r = E(b(t.c), t.e, "0")) : (A(e, 2, L.length, "Base"), r = n(E(b(t.c), o, "0"), 10, e, i, !0)), i < 0 && t.c[0] && (r = "-" + r)), r
                    }, i.valueOf = i.toJSON = function() {
                        return G(this)
                    }, i._isBigNumber = !0, null != e && U.set(e), U
                }

                function y(e) {
                    var r = 0 | e;
                    return e > 0 || e === r ? r : r - 1
                }

                function b(e) {
                    for (var r, n, t = 1, i = e.length, o = e[0] + ""; t < i;) {
                        for (r = e[t++] + "", n = h - r.length; n--; r = "0" + r);
                        o += r
                    }
                    for (i = o.length; 48 === o.charCodeAt(--i););
                    return o.slice(0, i + 1 || 1)
                }

                function m(e, r) {
                    var n, t, i = e.c,
                        o = r.c,
                        u = e.s,
                        s = r.s,
                        f = e.e,
                        c = r.e;
                    if (!u || !s) return null;
                    if (n = i && !i[0], t = o && !o[0], n || t) return n ? t ? 0 : -s : u;
                    if (u != s) return u;
                    if (n = u < 0, t = f == c, !i || !o) return t ? 0 : !i ^ n ? 1 : -1;
                    if (!t) return f > c ^ n ? 1 : -1;
                    for (s = (f = i.length) < (c = o.length) ? f : c, u = 0; u < s; u++)
                        if (i[u] != o[u]) return i[u] > o[u] ^ n ? 1 : -1;
                    return f == c ? 0 : f > c ^ n ? 1 : -1
                }

                function A(e, r, n, t) {
                    if (e < r || e > n || e !== f(e)) throw Error(c + (t || "Argument") + ("number" == typeof e ? e < r || e > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
                }

                function N(e) {
                    var r = e.c.length - 1;
                    return y(e.e / h) == r && e.c[r] % 2 != 0
                }

                function O(e, r) {
                    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (r < 0 ? "e" : "e+") + r
                }

                function E(e, r, n) {
                    var t, i;
                    if (r < 0) {
                        for (i = n + "."; ++r; i += n);
                        e = i + e
                    } else if (t = e.length, ++r > t) {
                        for (i = n, r -= t; --r; i += n);
                        e += i
                    } else r < t && (e = e.slice(0, r) + "." + e.slice(r));
                    return e
                }
                o = v(), o["default"] = o.BigNumber = o, t = function() {
                    return o
                }.call(r, n, r, e), void 0 === t || (e.exports = t)
            })()
        }
    }
]);