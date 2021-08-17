(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-3aef6cd7"], {
        "09df": function(e, t) {
            function a(e) {
                return {
                    seriesType: e,
                    reset: function(e, t) {
                        var a = t.findComponents({
                            mainType: "legend"
                        });
                        if (a && a.length) {
                            var i = e.getData();
                            i.filterSelf((function(e) {
                                for (var t = i.getName(e), n = 0; n < a.length; n++)
                                    if (!a[n].isSelected(t)) return !1;
                                return !0
                            }))
                        }
                    }
                }
            }
            e.exports = a
        },
        "0e3e": function(e, t, a) {
            var i = a("a04a"),
                n = i.createHashMap;

            function o(e) {
                return {
                    getTargetSeries: function(t) {
                        var a = {},
                            i = n();
                        return t.eachSeriesByType(e, (function(e) {
                            e.__paletteScope = a, i.set(e.uid, e)
                        })), i
                    },
                    reset: function(e, t) {
                        var a = e.getRawData(),
                            i = {},
                            n = e.getData();
                        n.each((function(e) {
                            var t = n.getRawIndex(e);
                            i[t] = e
                        })), a.each((function(t) {
                            var o, r = i[t],
                                l = null != r && n.getItemVisual(r, "color", !0),
                                s = null != r && n.getItemVisual(r, "borderColor", !0);
                            if (l && s || (o = a.getItemModel(t)), !l) {
                                var c = o.get("itemStyle.color") || e.getColorFromPalette(a.getName(t) || t + "", e.__paletteScope, a.count());
                                null != r && n.setItemVisual(r, "color", c)
                            }
                            if (!s) {
                                var u = o.get("itemStyle.borderColor");
                                null != r && n.setItemVisual(r, "borderColor", u)
                            }
                        }))
                    }
                }
            }
            e.exports = o
        },
        "0fbd": function(e, t, a) {
            var i = a("263c"),
                n = i.parsePercent,
                o = i.linearMap,
                r = a("4920"),
                l = a("27ab"),
                s = a("a04a"),
                c = 2 * Math.PI,
                u = Math.PI / 180;

            function g(e, t) {
                return r.getLayoutRect(e.getBoxLayoutParams(), {
                    width: t.getWidth(),
                    height: t.getHeight()
                })
            }

            function d(e, t, a, i) {
                t.eachSeriesByType(e, (function(e) {
                    var t = e.getData(),
                        i = t.mapDimension("value"),
                        r = g(e, a),
                        d = e.get("center"),
                        h = e.get("radius");
                    s.isArray(h) || (h = [0, h]), s.isArray(d) || (d = [d, d]);
                    var m = n(r.width, a.getWidth()),
                        p = n(r.height, a.getHeight()),
                        f = Math.min(m, p),
                        v = n(d[0], m) + r.x,
                        y = n(d[1], p) + r.y,
                        x = n(h[0], f / 2),
                        b = n(h[1], f / 2),
                        S = -e.get("startAngle") * u,
                        A = e.get("minAngle") * u,
                        I = 0;
                    t.each(i, (function(e) {
                        !isNaN(e) && I++
                    }));
                    var _ = t.getSum(i),
                        M = Math.PI / (_ || I) * 2,
                        D = e.get("clockwise"),
                        L = e.get("roseType"),
                        w = e.get("stillShowZeroSum"),
                        N = t.getDataExtent(i);
                    N[0] = 0;
                    var P = c,
                        T = 0,
                        k = S,
                        V = D ? 1 : -1;
                    if (t.each(i, (function(e, a) {
                            var i;
                            if (isNaN(e)) t.setItemLayout(a, {
                                angle: NaN,
                                startAngle: NaN,
                                endAngle: NaN,
                                clockwise: D,
                                cx: v,
                                cy: y,
                                r0: x,
                                r: L ? NaN : b,
                                viewRect: r
                            });
                            else {
                                i = "area" !== L ? 0 === _ && w ? M : e * M : c / I, i < A ? (i = A, P -= A) : T += e;
                                var n = k + V * i;
                                t.setItemLayout(a, {
                                    angle: i,
                                    startAngle: k,
                                    endAngle: n,
                                    clockwise: D,
                                    cx: v,
                                    cy: y,
                                    r0: x,
                                    r: L ? o(e, N, [x, b]) : b,
                                    viewRect: r
                                }), k = n
                            }
                        })), P < c && I)
                        if (P <= .001) {
                            var O = c / I;
                            t.each(i, (function(e, a) {
                                if (!isNaN(e)) {
                                    var i = t.getItemLayout(a);
                                    i.angle = O, i.startAngle = S + V * a * O, i.endAngle = S + V * (a + 1) * O
                                }
                            }))
                        } else M = P / T, k = S, t.each(i, (function(e, a) {
                            if (!isNaN(e)) {
                                var i = t.getItemLayout(a),
                                    n = i.angle === A ? A : e * M;
                                i.startAngle = k, i.endAngle = k + V * n, k += V * n
                            }
                        }));
                    l(e, b, r.width, r.height, r.x, r.y)
                }))
            }
            e.exports = d
        },
        "17c8": function(e, t, a) {
            var i = a("43a0");
            a("b98a"), a("fdd8"), i.registerPreprocessor((function(e) {
                e.markLine = e.markLine || {}
            }))
        },
        "196f": function(e, t, a) {
            var i = a("43a0"),
                n = a("a04a");
            a("6404a"), a("de3f");
            var o = a("5247"),
                r = a("0e3e"),
                l = a("0fbd"),
                s = a("09df");
            o("pie", [{
                type: "pieToggleSelect",
                event: "pieselectchanged",
                method: "toggleSelected"
            }, {
                type: "pieSelect",
                event: "pieselected",
                method: "select"
            }, {
                type: "pieUnSelect",
                event: "pieunselected",
                method: "unSelect"
            }]), i.registerVisual(r("pie")), i.registerLayout(n.curry(l, "pie")), i.registerProcessor(s("pie"))
        },
        "27ab": function(e, t, a) {
            var i = a("1760"),
                n = a("263c"),
                o = n.parsePercent,
                r = Math.PI / 180;

            function l(e, t, a, i, n, o, r, l, s, c) {
                function u(t, a, i, n) {
                    for (var o = t; o < a; o++) {
                        if (e[o].y + i > s + r) break;
                        if (e[o].y += i, o > t && o + 1 < a && e[o + 1].y > e[o].y + e[o].height) return void g(o, i / 2)
                    }
                    g(a - 1, i / 2)
                }

                function g(t, a) {
                    for (var i = t; i >= 0; i--) {
                        if (e[i].y - a < s) break;
                        if (e[i].y -= a, i > 0 && e[i].y > e[i - 1].y + e[i - 1].height) break
                    }
                }

                function d(e, t, a, i, n, o) {
                    for (var r = t ? Number.MAX_VALUE : 0, l = 0, s = e.length; l < s; l++)
                        if ("none" === e[l].labelAlignTo) {
                            var c = Math.abs(e[l].y - i),
                                u = e[l].len,
                                g = e[l].len2,
                                d = c < n + u ? Math.sqrt((n + u + g) * (n + u + g) - c * c) : Math.abs(e[l].x - a);
                            t && d >= r && (d = r - 10), !t && d <= r && (d = r + 10), e[l].x = a + d * o, r = d
                        }
                }
                e.sort((function(e, t) {
                    return e.y - t.y
                }));
                for (var h, m = 0, p = e.length, f = [], v = [], y = 0; y < p; y++) {
                    if ("outer" === e[y].position && "labelLine" === e[y].labelAlignTo) {
                        var x = e[y].x - c;
                        e[y].linePoints[1][0] += x, e[y].x = c
                    }
                    h = e[y].y - m, h < 0 && u(y, p, -h, n), m = e[y].y + e[y].height
                }
                r - m < 0 && g(p - 1, m - r);
                for (y = 0; y < p; y++) e[y].y >= a ? v.push(e[y]) : f.push(e[y]);
                d(f, !1, t, a, i, n), d(v, !0, t, a, i, n)
            }

            function s(e, t, a, n, o, r, s, u) {
                for (var g = [], d = [], h = Number.MAX_VALUE, m = -Number.MAX_VALUE, p = 0; p < e.length; p++) c(e[p]) || (e[p].x < t ? (h = Math.min(h, e[p].x), g.push(e[p])) : (m = Math.max(m, e[p].x), d.push(e[p])));
                l(d, t, a, n, 1, o, r, s, u, m), l(g, t, a, n, -1, o, r, s, u, h);
                for (p = 0; p < e.length; p++) {
                    var f = e[p];
                    if (!c(f)) {
                        var v = f.linePoints;
                        if (v) {
                            var y, x = "edge" === f.labelAlignTo,
                                b = f.textRect.width;
                            y = x ? f.x < t ? v[2][0] - f.labelDistance - s - f.labelMargin : s + o - f.labelMargin - v[2][0] - f.labelDistance : f.x < t ? f.x - s - f.bleedMargin : s + o - f.x - f.bleedMargin, y < f.textRect.width && (f.text = i.truncateText(f.text, y, f.font), "edge" === f.labelAlignTo && (b = i.getWidth(f.text, f.font)));
                            var S = v[1][0] - v[2][0];
                            x ? f.x < t ? v[2][0] = s + f.labelMargin + b + f.labelDistance : v[2][0] = s + o - f.labelMargin - b - f.labelDistance : (f.x < t ? v[2][0] = f.x + f.labelDistance : v[2][0] = f.x - f.labelDistance, v[1][0] = v[2][0] + S), v[1][1] = v[2][1] = f.y
                        }
                    }
                }
            }

            function c(e) {
                return "center" === e.position
            }

            function u(e, t, a, n, l, c) {
                var u, g, d = e.getData(),
                    h = [],
                    m = !1,
                    p = (e.get("minShowLabelAngle") || 0) * r;
                d.each((function(n) {
                    var r = d.getItemLayout(n),
                        s = d.getItemModel(n),
                        c = s.getModel("label"),
                        f = c.get("position") || s.get("emphasis.label.position"),
                        v = c.get("distanceToLabelLine"),
                        y = c.get("alignTo"),
                        x = o(c.get("margin"), a),
                        b = c.get("bleedMargin"),
                        S = c.getFont(),
                        A = s.getModel("labelLine"),
                        I = A.get("length");
                    I = o(I, a);
                    var _ = A.get("length2");
                    if (_ = o(_, a), !(r.angle < p)) {
                        var M, D, L, w, N = (r.startAngle + r.endAngle) / 2,
                            P = Math.cos(N),
                            T = Math.sin(N);
                        u = r.cx, g = r.cy;
                        var k, V = e.getFormattedLabel(n, "normal") || d.getName(n),
                            O = i.getBoundingRect(V, S, w, "top"),
                            C = "inside" === f || "inner" === f;
                        if ("center" === f) M = r.cx, D = r.cy, w = "center";
                        else {
                            var E = (C ? (r.r + r.r0) / 2 * P : r.r * P) + u,
                                G = (C ? (r.r + r.r0) / 2 * T : r.r * T) + g;
                            if (M = E + 3 * P, D = G + 3 * T, !C) {
                                var R = E + P * (I + t - r.r),
                                    z = G + T * (I + t - r.r),
                                    F = R + (P < 0 ? -1 : 1) * _,
                                    B = z;
                                M = "edge" === y ? P < 0 ? l + x : l + a - x : F + (P < 0 ? -v : v), D = B, L = [
                                    [E, G],
                                    [R, z],
                                    [F, B]
                                ]
                            }
                            w = C ? "center" : "edge" === y ? P > 0 ? "right" : "left" : P > 0 ? "left" : "right"
                        }
                        var H = c.get("rotate");
                        k = "number" === typeof H ? H * (Math.PI / 180) : H ? P < 0 ? -N + Math.PI : -N : 0, m = !!k, r.label = {
                            x: M,
                            y: D,
                            position: f,
                            height: O.height,
                            len: I,
                            len2: _,
                            linePoints: L,
                            textAlign: w,
                            verticalAlign: "middle",
                            rotation: k,
                            inside: C,
                            labelDistance: v,
                            labelAlignTo: y,
                            labelMargin: x,
                            bleedMargin: b,
                            textRect: O,
                            text: V,
                            font: S
                        }, C || h.push(r.label)
                    }
                })), !m && e.get("avoidLabelOverlap") && s(h, u, g, t, a, n, l, c)
            }
            e.exports = u
        },
        "27ee": function(e, t, a) {
            var i = a("cd88"),
                n = a("f823");

            function o(e) {
                this._ctor = e || n, this.group = new i.Group
            }
            var r = o.prototype;

            function l(e, t, a, i) {
                var n = t.getItemLayout(a);
                if (d(n)) {
                    var o = new e._ctor(t, a, i);
                    t.setItemGraphicEl(a, o), e.group.add(o)
                }
            }

            function s(e, t, a, i, n, o) {
                var r = t.getItemGraphicEl(i);
                d(a.getItemLayout(n)) ? (r ? r.updateData(a, n, o) : r = new e._ctor(a, n, o), a.setItemGraphicEl(n, r), e.group.add(r)) : e.group.remove(r)
            }

            function c(e) {
                return e.animators && e.animators.length > 0
            }

            function u(e) {
                var t = e.hostModel;
                return {
                    lineStyle: t.getModel("lineStyle").getLineStyle(),
                    hoverLineStyle: t.getModel("emphasis.lineStyle").getLineStyle(),
                    labelModel: t.getModel("label"),
                    hoverLabelModel: t.getModel("emphasis.label")
                }
            }

            function g(e) {
                return isNaN(e[0]) || isNaN(e[1])
            }

            function d(e) {
                return !g(e[0]) && !g(e[1])
            }
            r.isPersistent = function() {
                return !0
            }, r.updateData = function(e) {
                var t = this,
                    a = t.group,
                    i = t._lineData;
                t._lineData = e, i || a.removeAll();
                var n = u(e);
                e.diff(i).add((function(a) {
                    l(t, e, a, n)
                })).update((function(a, o) {
                    s(t, i, e, o, a, n)
                })).remove((function(e) {
                    a.remove(i.getItemGraphicEl(e))
                })).execute()
            }, r.updateLayout = function() {
                var e = this._lineData;
                e && e.eachItemGraphicEl((function(t, a) {
                    t.updateLayout(e, a)
                }), this)
            }, r.incrementalPrepareUpdate = function(e) {
                this._seriesScope = u(e), this._lineData = null, this.group.removeAll()
            }, r.incrementalUpdate = function(e, t) {
                function a(e) {
                    e.isGroup || c(e) || (e.incremental = e.useHoverLayer = !0)
                }
                for (var i = e.start; i < e.end; i++) {
                    var n = t.getItemLayout(i);
                    if (d(n)) {
                        var o = new this._ctor(t, i, this._seriesScope);
                        o.traverse(a), this.group.add(o), t.setItemGraphicEl(i, o)
                    }
                }
            }, r.remove = function() {
                this._clearIncremental(), this._incremental = null, this.group.removeAll()
            }, r._clearIncremental = function() {
                var e = this._incremental;
                e && e.clearDisplaybles()
            };
            var h = o;
            e.exports = h
        },
        3164: function(e, t, a) {
            var i = a("20f7"),
                n = (i.__DEV__, a("43a0")),
                o = a("a04a"),
                r = a("8328"),
                l = a("415e"),
                s = a("0908"),
                c = a("9b4f"),
                u = s.addCommas,
                g = s.encodeHTML;

            function d(e) {
                l.defaultEmphasis(e, "label", ["show"])
            }
            var h = n.extendComponentModel({
                type: "marker",
                dependencies: ["series", "grid", "polar", "geo"],
                init: function(e, t, a) {
                    this.mergeDefaultAndTheme(e, a), this._mergeOption(e, a, !1, !0)
                },
                isAnimationEnabled: function() {
                    if (r.node) return !1;
                    var e = this.__hostSeries;
                    return this.getShallow("animation") && e && e.isAnimationEnabled()
                },
                mergeOption: function(e, t) {
                    this._mergeOption(e, t, !1, !1)
                },
                _mergeOption: function(e, t, a, i) {
                    var n = this.constructor,
                        r = this.mainType + "Model";
                    a || t.eachSeries((function(e) {
                        var a = e.get(this.mainType, !0),
                            l = e[r];
                        a && a.data ? (l ? l._mergeOption(a, t, !0) : (i && d(a), o.each(a.data, (function(e) {
                            e instanceof Array ? (d(e[0]), d(e[1])) : d(e)
                        })), l = new n(a, this, t), o.extend(l, {
                            mainType: this.mainType,
                            seriesIndex: e.seriesIndex,
                            name: e.name,
                            createdBySelf: !0
                        }), l.__hostSeries = e), e[r] = l) : e[r] = null
                    }), this)
                },
                formatTooltip: function(e, t, a, i) {
                    var n = this.getData(),
                        r = this.getRawValue(e),
                        l = o.isArray(r) ? o.map(r, u).join(", ") : u(r),
                        s = n.getName(e),
                        c = g(this.name),
                        d = "html" === i ? "<br/>" : "\n";
                    return (null != r || s) && (c += d), s && (c += g(s), null != r && (c += " : ")), null != r && (c += g(l)), c
                },
                getData: function() {
                    return this._data
                },
                setData: function(e) {
                    this._data = e
                }
            });
            o.mixin(h, c);
            var m = h;
            e.exports = m
        },
        "473e": function(e, t, a) {
            var i = a("cd88"),
                n = a("59af"),
                o = i.Line.prototype,
                r = i.BezierCurve.prototype;

            function l(e) {
                return isNaN(+e.cpx1) || isNaN(+e.cpy1)
            }
            var s = i.extendShape({
                type: "ec-line",
                style: {
                    stroke: "#000",
                    fill: null
                },
                shape: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 0,
                    percent: 1,
                    cpx1: null,
                    cpy1: null
                },
                buildPath: function(e, t) {
                    this[l(t) ? "_buildPathLine" : "_buildPathCurve"](e, t)
                },
                _buildPathLine: o.buildPath,
                _buildPathCurve: r.buildPath,
                pointAt: function(e) {
                    return this[l(this.shape) ? "_pointAtLine" : "_pointAtCurve"](e)
                },
                _pointAtLine: o.pointAt,
                _pointAtCurve: r.pointAt,
                tangentAt: function(e) {
                    var t = this.shape,
                        a = l(t) ? [t.x2 - t.x1, t.y2 - t.y1] : this._tangentAtCurve(e);
                    return n.normalize(a, a)
                },
                _tangentAtCurve: r.tangentAt
            });
            e.exports = s
        },
        5247: function(e, t, a) {
            var i = a("43a0"),
                n = a("a04a");

            function o(e, t) {
                n.each(t, (function(t) {
                    t.update = "updateView", i.registerAction(t, (function(a, i) {
                        var n = {};
                        return i.eachComponent({
                            mainType: "series",
                            subType: e,
                            query: a
                        }, (function(e) {
                            e[t.method] && e[t.method](a.name, a.dataIndex);
                            var i = e.getData();
                            i.each((function(t) {
                                var a = i.getName(t);
                                n[a] = e.isSelected(a) || !1
                            }))
                        })), {
                            name: a.name,
                            selected: n,
                            seriesId: a.seriesId
                        }
                    }))
                }))
            }
            e.exports = o
        },
        "6404a": function(e, t, a) {
            var i = a("43a0"),
                n = a("d201"),
                o = a("a04a"),
                r = a("415e"),
                l = a("263c"),
                s = l.getPercentWithPrecision,
                c = a("cba4"),
                u = a("570e"),
                g = u.retrieveRawAttr,
                d = a("9001"),
                h = d.makeSeriesEncodeForNameBased,
                m = a("a750"),
                p = i.extendSeriesModel({
                    type: "series.pie",
                    init: function(e) {
                        p.superApply(this, "init", arguments), this.legendVisualProvider = new m(o.bind(this.getData, this), o.bind(this.getRawData, this)), this.updateSelectedMap(this._createSelectableList()), this._defaultLabelLine(e)
                    },
                    mergeOption: function(e) {
                        p.superCall(this, "mergeOption", e), this.updateSelectedMap(this._createSelectableList())
                    },
                    getInitialData: function(e, t) {
                        return n(this, {
                            coordDimensions: ["value"],
                            encodeDefaulter: o.curry(h, this)
                        })
                    },
                    _createSelectableList: function() {
                        for (var e = this.getRawData(), t = e.mapDimension("value"), a = [], i = 0, n = e.count(); i < n; i++) a.push({
                            name: e.getName(i),
                            value: e.get(t, i),
                            selected: g(e, i, "selected")
                        });
                        return a
                    },
                    getDataParams: function(e) {
                        var t = this.getData(),
                            a = p.superCall(this, "getDataParams", e),
                            i = [];
                        return t.each(t.mapDimension("value"), (function(e) {
                            i.push(e)
                        })), a.percent = s(i, e, t.hostModel.get("percentPrecision")), a.$vars.push("percent"), a
                    },
                    _defaultLabelLine: function(e) {
                        r.defaultEmphasis(e, "labelLine", ["show"]);
                        var t = e.labelLine,
                            a = e.emphasis.labelLine;
                        t.show = t.show && e.label.show, a.show = a.show && e.emphasis.label.show
                    },
                    defaultOption: {
                        zlevel: 0,
                        z: 2,
                        legendHoverLink: !0,
                        hoverAnimation: !0,
                        center: ["50%", "50%"],
                        radius: [0, "75%"],
                        clockwise: !0,
                        startAngle: 90,
                        minAngle: 0,
                        minShowLabelAngle: 0,
                        selectedOffset: 10,
                        hoverOffset: 10,
                        avoidLabelOverlap: !0,
                        percentPrecision: 2,
                        stillShowZeroSum: !0,
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        width: null,
                        height: null,
                        label: {
                            rotate: !1,
                            show: !0,
                            position: "outer",
                            alignTo: "none",
                            margin: "25%",
                            bleedMargin: 10,
                            distanceToLabelLine: 5
                        },
                        labelLine: {
                            show: !0,
                            length: 15,
                            length2: 15,
                            smooth: !1,
                            lineStyle: {
                                width: 1,
                                type: "solid"
                            }
                        },
                        itemStyle: {
                            borderWidth: 1
                        },
                        animationType: "expansion",
                        animationTypeUpdate: "transition",
                        animationEasing: "cubicOut"
                    }
                });
            o.mixin(p, c);
            var f = p;
            e.exports = f
        },
        "6a23": function(e, t, a) {
            var i = a("a04a"),
                n = a("263c"),
                o = a("eff3"),
                r = o.isDimensionStacked,
                l = i.indexOf;

            function s(e) {
                return !(isNaN(parseFloat(e.x)) && isNaN(parseFloat(e.y)))
            }

            function c(e) {
                return !isNaN(parseFloat(e.x)) && !isNaN(parseFloat(e.y))
            }

            function u(e, t, a, i, o, l) {
                var s = [],
                    c = r(t, i),
                    u = c ? t.getCalculationInfo("stackResultDimension") : i,
                    g = y(t, u, e),
                    d = t.indicesOfNearest(u, g)[0];
                s[o] = t.get(a, d), s[l] = t.get(u, d);
                var h = t.get(i, d),
                    m = n.getPrecision(t.get(i, d));
                return m = Math.min(m, 20), m >= 0 && (s[l] = +s[l].toFixed(m)), [s, h]
            }
            var g = i.curry,
                d = {
                    min: g(u, "min"),
                    max: g(u, "max"),
                    average: g(u, "average")
                };

            function h(e, t) {
                var a = e.getData(),
                    n = e.coordinateSystem;
                if (t && !c(t) && !i.isArray(t.coord) && n) {
                    var o = n.dimensions,
                        r = m(t, a, n, e);
                    if (t = i.clone(t), t.type && d[t.type] && r.baseAxis && r.valueAxis) {
                        var s = l(o, r.baseAxis.dim),
                            u = l(o, r.valueAxis.dim),
                            g = d[t.type](a, r.baseDataDim, r.valueDataDim, s, u);
                        t.coord = g[0], t.value = g[1]
                    } else {
                        for (var h = [null != t.xAxis ? t.xAxis : t.radiusAxis, null != t.yAxis ? t.yAxis : t.angleAxis], p = 0; p < 2; p++) d[h[p]] && (h[p] = y(a, a.mapDimension(o[p]), h[p]));
                        t.coord = h
                    }
                }
                return t
            }

            function m(e, t, a, i) {
                var n = {};
                return null != e.valueIndex || null != e.valueDim ? (n.valueDataDim = null != e.valueIndex ? t.getDimension(e.valueIndex) : e.valueDim, n.valueAxis = a.getAxis(p(i, n.valueDataDim)), n.baseAxis = a.getOtherAxis(n.valueAxis), n.baseDataDim = t.mapDimension(n.baseAxis.dim)) : (n.baseAxis = i.getBaseAxis(), n.valueAxis = a.getOtherAxis(n.baseAxis), n.baseDataDim = t.mapDimension(n.baseAxis.dim), n.valueDataDim = t.mapDimension(n.valueAxis.dim)), n
            }

            function p(e, t) {
                var a = e.getData(),
                    i = a.dimensions;
                t = a.getDimension(t);
                for (var n = 0; n < i.length; n++) {
                    var o = a.getDimensionInfo(i[n]);
                    if (o.name === t) return o.coordDim
                }
            }

            function f(e, t) {
                return !(e && e.containData && t.coord && !s(t)) || e.containData(t.coord)
            }

            function v(e, t, a, i) {
                return i < 2 ? e.coord && e.coord[i] : e.value
            }

            function y(e, t, a) {
                if ("average" === a) {
                    var i = 0,
                        n = 0;
                    return e.each(t, (function(e, t) {
                        isNaN(e) || (i += e, n++)
                    })), i / n
                }
                return "median" === a ? e.getMedian(t) : e.getDataExtent(t, !0)["max" === a ? 1 : 0]
            }
            t.dataTransform = h, t.getAxisInfo = m, t.dataFilter = f, t.dimValueGetter = v, t.numCalculate = y
        },
        a750: function(e, t) {
            function a(e, t) {
                this.getAllNames = function() {
                    var e = t();
                    return e.mapArray(e.getName)
                }, this.containName = function(e) {
                    var a = t();
                    return a.indexOfName(e) >= 0
                }, this.indexOfName = function(t) {
                    var a = e();
                    return a.indexOfName(t)
                }, this.getItemVisual = function(t, a) {
                    var i = e();
                    return i.getItemVisual(t, a)
                }
            }
            var i = a;
            e.exports = i
        },
        b98a: function(e, t, a) {
            var i = a("3164"),
                n = i.extend({
                    type: "markLine",
                    defaultOption: {
                        zlevel: 0,
                        z: 5,
                        symbol: ["circle", "arrow"],
                        symbolSize: [8, 16],
                        precision: 2,
                        tooltip: {
                            trigger: "item"
                        },
                        label: {
                            show: !0,
                            position: "end",
                            distance: 5
                        },
                        lineStyle: {
                            type: "dashed"
                        },
                        emphasis: {
                            label: {
                                show: !0
                            },
                            lineStyle: {
                                width: 3
                            }
                        },
                        animationEasing: "linear"
                    }
                });
            e.exports = n
        },
        cba4: function(e, t, a) {
            var i = a("a04a"),
                n = {
                    updateSelectedMap: function(e) {
                        this._targetList = i.isArray(e) ? e.slice() : [], this._selectTargetMap = i.reduce(e || [], (function(e, t) {
                            return e.set(t.name, t), e
                        }), i.createHashMap())
                    },
                    select: function(e, t) {
                        var a = null != t ? this._targetList[t] : this._selectTargetMap.get(e),
                            i = this.get("selectedMode");
                        "single" === i && this._selectTargetMap.each((function(e) {
                            e.selected = !1
                        })), a && (a.selected = !0)
                    },
                    unSelect: function(e, t) {
                        var a = null != t ? this._targetList[t] : this._selectTargetMap.get(e);
                        a && (a.selected = !1)
                    },
                    toggleSelected: function(e, t) {
                        var a = null != t ? this._targetList[t] : this._selectTargetMap.get(e);
                        if (null != a) return this[a.selected ? "unSelect" : "select"](e, t), a.selected
                    },
                    isSelected: function(e, t) {
                        var a = null != t ? this._targetList[t] : this._selectTargetMap.get(e);
                        return a && a.selected
                    }
                };
            e.exports = n
        },
        d201: function(e, t, a) {
            var i = a("4df2"),
                n = a("62c3"),
                o = a("a04a"),
                r = o.extend,
                l = o.isArray;

            function s(e, t, a) {
                t = l(t) && {
                    coordDimensions: t
                } || r({}, t);
                var o = e.getSource(),
                    s = i(o, t),
                    c = new n(s, e);
                return c.initData(o, a), c
            }
            e.exports = s
        },
        de3f: function(e, t, a) {
            var i = a("a04a"),
                n = a("cd88"),
                o = a("17ad");

            function r(e, t, a, i) {
                var n = t.getData(),
                    o = this.dataIndex,
                    r = n.getName(o),
                    s = t.get("selectedOffset");
                i.dispatchAction({
                    type: "pieToggleSelect",
                    from: e,
                    name: r,
                    seriesId: t.id
                }), n.each((function(e) {
                    l(n.getItemGraphicEl(e), n.getItemLayout(e), t.isSelected(n.getName(e)), s, a)
                }))
            }

            function l(e, t, a, i, n) {
                var o = (t.startAngle + t.endAngle) / 2,
                    r = Math.cos(o),
                    l = Math.sin(o),
                    s = a ? i : 0,
                    c = [r * s, l * s];
                n ? e.animate().when(200, {
                    position: c
                }).start("bounceOut") : e.attr("position", c)
            }

            function s(e, t) {
                n.Group.call(this);
                var a = new n.Sector({
                        z2: 2
                    }),
                    i = new n.Polyline,
                    o = new n.Text;
                this.add(a), this.add(i), this.add(o), this.updateData(e, t, !0)
            }
            var c = s.prototype;
            c.updateData = function(e, t, a) {
                var o = this.childAt(0),
                    r = this.childAt(1),
                    s = this.childAt(2),
                    c = e.hostModel,
                    u = e.getItemModel(t),
                    g = e.getItemLayout(t),
                    d = i.extend({}, g);
                d.label = null;
                var h = c.getShallow("animationTypeUpdate");
                if (a) {
                    o.setShape(d);
                    var m = c.getShallow("animationType");
                    "scale" === m ? (o.shape.r = g.r0, n.initProps(o, {
                        shape: {
                            r: g.r
                        }
                    }, c, t)) : (o.shape.endAngle = g.startAngle, n.updateProps(o, {
                        shape: {
                            endAngle: g.endAngle
                        }
                    }, c, t))
                } else "expansion" === h ? o.setShape(d) : n.updateProps(o, {
                    shape: d
                }, c, t);
                var p = e.getItemVisual(t, "color");
                o.useStyle(i.defaults({
                    lineJoin: "bevel",
                    fill: p
                }, u.getModel("itemStyle").getItemStyle())), o.hoverStyle = u.getModel("emphasis.itemStyle").getItemStyle();
                var f = u.getShallow("cursor");
                f && o.attr("cursor", f), l(this, e.getItemLayout(t), c.isSelected(e.getName(t)), c.get("selectedOffset"), c.get("animation"));
                var v = !a && "transition" === h;
                this._updateLabel(e, t, v), this.highDownOnUpdate = c.get("silent") ? null : function(e, t) {
                    var a = c.isAnimationEnabled() && u.get("hoverAnimation");
                    "emphasis" === t ? (r.ignore = r.hoverIgnore, s.ignore = s.hoverIgnore, a && (o.stopAnimation(!0), o.animateTo({
                        shape: {
                            r: g.r + c.get("hoverOffset")
                        }
                    }, 300, "elasticOut"))) : (r.ignore = r.normalIgnore, s.ignore = s.normalIgnore, a && (o.stopAnimation(!0), o.animateTo({
                        shape: {
                            r: g.r
                        }
                    }, 300, "elasticOut")))
                }, n.setHoverStyle(this)
            }, c._updateLabel = function(e, t, a) {
                var i = this.childAt(1),
                    o = this.childAt(2),
                    r = e.hostModel,
                    l = e.getItemModel(t),
                    s = e.getItemLayout(t),
                    c = s.label,
                    u = e.getItemVisual(t, "color");
                if (!c || isNaN(c.x) || isNaN(c.y)) o.ignore = o.normalIgnore = o.hoverIgnore = i.ignore = i.normalIgnore = i.hoverIgnore = !0;
                else {
                    var g = {
                            points: c.linePoints || [
                                [c.x, c.y],
                                [c.x, c.y],
                                [c.x, c.y]
                            ]
                        },
                        d = {
                            x: c.x,
                            y: c.y
                        };
                    a ? (n.updateProps(i, {
                        shape: g
                    }, r, t), n.updateProps(o, {
                        style: d
                    }, r, t)) : (i.attr({
                        shape: g
                    }), o.attr({
                        style: d
                    })), o.attr({
                        rotation: c.rotation,
                        origin: [c.x, c.y],
                        z2: 10
                    });
                    var h = l.getModel("label"),
                        m = l.getModel("emphasis.label"),
                        p = l.getModel("labelLine"),
                        f = l.getModel("emphasis.labelLine");
                    u = e.getItemVisual(t, "color");
                    n.setLabelStyle(o.style, o.hoverStyle = {}, h, m, {
                        labelFetcher: e.hostModel,
                        labelDataIndex: t,
                        defaultText: c.text,
                        autoColor: u,
                        useInsideStyle: !!c.inside
                    }, {
                        textAlign: c.textAlign,
                        textVerticalAlign: c.verticalAlign,
                        opacity: e.getItemVisual(t, "opacity")
                    }), o.ignore = o.normalIgnore = !h.get("show"), o.hoverIgnore = !m.get("show"), i.ignore = i.normalIgnore = !p.get("show"), i.hoverIgnore = !f.get("show"), i.setStyle({
                        stroke: u,
                        opacity: e.getItemVisual(t, "opacity")
                    }), i.setStyle(p.getModel("lineStyle").getLineStyle()), i.hoverStyle = f.getModel("lineStyle").getLineStyle();
                    var v = p.get("smooth");
                    v && !0 === v && (v = .4), i.setShape({
                        smooth: v
                    })
                }
            }, i.inherits(s, n.Group);
            var u = o.extend({
                    type: "pie",
                    init: function() {
                        var e = new n.Group;
                        this._sectorGroup = e
                    },
                    render: function(e, t, a, n) {
                        if (!n || n.from !== this.uid) {
                            var o = e.getData(),
                                l = this._data,
                                c = this.group,
                                u = t.get("animation"),
                                g = !l,
                                d = e.get("animationType"),
                                h = e.get("animationTypeUpdate"),
                                m = i.curry(r, this.uid, e, u, a),
                                p = e.get("selectedMode");
                            if (o.diff(l).add((function(e) {
                                    var t = new s(o, e);
                                    g && "scale" !== d && t.eachChild((function(e) {
                                        e.stopAnimation(!0)
                                    })), p && t.on("click", m), o.setItemGraphicEl(e, t), c.add(t)
                                })).update((function(e, t) {
                                    var a = l.getItemGraphicEl(t);
                                    g || "transition" === h || a.eachChild((function(e) {
                                        e.stopAnimation(!0)
                                    })), a.updateData(o, e), a.off("click"), p && a.on("click", m), c.add(a), o.setItemGraphicEl(e, a)
                                })).remove((function(e) {
                                    var t = l.getItemGraphicEl(e);
                                    c.remove(t)
                                })).execute(), u && o.count() > 0 && (g ? "scale" !== d : "transition" !== h)) {
                                for (var f = o.getItemLayout(0), v = 1; isNaN(f.startAngle) && v < o.count(); ++v) f = o.getItemLayout(v);
                                var y = Math.max(a.getWidth(), a.getHeight()) / 2,
                                    x = i.bind(c.removeClipPath, c);
                                c.setClipPath(this._createClipPath(f.cx, f.cy, y, f.startAngle, f.clockwise, x, e, g))
                            } else c.removeClipPath();
                            this._data = o
                        }
                    },
                    dispose: function() {},
                    _createClipPath: function(e, t, a, i, o, r, l, s) {
                        var c = new n.Sector({
                                shape: {
                                    cx: e,
                                    cy: t,
                                    r0: 0,
                                    r: a,
                                    startAngle: i,
                                    endAngle: i,
                                    clockwise: o
                                }
                            }),
                            u = s ? n.initProps : n.updateProps;
                        return u(c, {
                            shape: {
                                endAngle: i + (o ? 1 : -1) * Math.PI * 2
                            }
                        }, l, r), c
                    },
                    containPoint: function(e, t) {
                        var a = t.getData(),
                            i = a.getItemLayout(0);
                        if (i) {
                            var n = e[0] - i.cx,
                                o = e[1] - i.cy,
                                r = Math.sqrt(n * n + o * o);
                            return r <= i.r && r >= i.r0
                        }
                    }
                }),
                g = u;
            e.exports = g
        },
        e0ce: function(e, t, a) {
            var i = a("43a0"),
                n = a("a04a"),
                o = i.extendComponentView({
                    type: "marker",
                    init: function() {
                        this.markerGroupMap = n.createHashMap()
                    },
                    render: function(e, t, a) {
                        var i = this.markerGroupMap;
                        i.each((function(e) {
                            e.__keep = !1
                        }));
                        var n = this.type + "Model";
                        t.eachSeries((function(e) {
                            var i = e[n];
                            i && this.renderSeries(e, i, t, a)
                        }), this), i.each((function(e) {
                            !e.__keep && this.group.remove(e.group)
                        }), this)
                    },
                    renderSeries: function() {}
                });
            e.exports = o
        },
        f823: function(e, t, a) {
            var i = a("a04a"),
                n = a("59af"),
                o = a("2cb9"),
                r = a("473e"),
                l = a("cd88"),
                s = a("263c"),
                c = s.round,
                u = ["fromSymbol", "toSymbol"];

            function g(e) {
                return "_" + e + "Type"
            }

            function d(e, t, a) {
                var n = t.getItemVisual(a, e);
                if (n && "none" !== n) {
                    var r = t.getItemVisual(a, "color"),
                        l = t.getItemVisual(a, e + "Size"),
                        s = t.getItemVisual(a, e + "Rotate");
                    i.isArray(l) || (l = [l, l]);
                    var c = o.createSymbol(n, -l[0] / 2, -l[1] / 2, l[0], l[1], r);
                    return c.__specifiedRotation = null == s || isNaN(s) ? void 0 : +s * Math.PI / 180 || 0, c.name = e, c
                }
            }

            function h(e) {
                var t = new r({
                    name: "line",
                    subPixelOptimize: !0
                });
                return m(t.shape, e), t
            }

            function m(e, t) {
                e.x1 = t[0][0], e.y1 = t[0][1], e.x2 = t[1][0], e.y2 = t[1][1], e.percent = 1;
                var a = t[2];
                a ? (e.cpx1 = a[0], e.cpy1 = a[1]) : (e.cpx1 = NaN, e.cpy1 = NaN)
            }

            function p() {
                var e = this,
                    t = e.childOfName("fromSymbol"),
                    a = e.childOfName("toSymbol"),
                    i = e.childOfName("label");
                if (t || a || !i.ignore) {
                    var o = 1,
                        r = this.parent;
                    while (r) r.scale && (o /= r.scale[0]), r = r.parent;
                    var l = e.childOfName("line");
                    if (this.__dirty || l.__dirty) {
                        var s = l.shape.percent,
                            c = l.pointAt(0),
                            u = l.pointAt(s),
                            g = n.sub([], u, c);
                        if (n.normalize(g, g), t) {
                            t.attr("position", c);
                            var d = t.__specifiedRotation;
                            if (null == d) {
                                var h = l.tangentAt(0);
                                t.attr("rotation", Math.PI / 2 - Math.atan2(h[1], h[0]))
                            } else t.attr("rotation", d);
                            t.attr("scale", [o * s, o * s])
                        }
                        if (a) {
                            a.attr("position", u);
                            d = a.__specifiedRotation;
                            if (null == d) {
                                h = l.tangentAt(1);
                                a.attr("rotation", -Math.PI / 2 - Math.atan2(h[1], h[0]))
                            } else a.attr("rotation", d);
                            a.attr("scale", [o * s, o * s])
                        }
                        if (!i.ignore) {
                            var m, p, f, v;
                            i.attr("position", u);
                            var y = i.__labelDistance,
                                x = y[0] * o,
                                b = y[1] * o,
                                S = s / 2,
                                A = (h = l.tangentAt(S), [h[1], -h[0]]),
                                I = l.pointAt(S);
                            A[1] > 0 && (A[0] = -A[0], A[1] = -A[1]);
                            var _, M = h[0] < 0 ? -1 : 1;
                            if ("start" !== i.__position && "end" !== i.__position) {
                                var D = -Math.atan2(h[1], h[0]);
                                u[0] < c[0] && (D = Math.PI + D), i.attr("rotation", D)
                            }
                            switch (i.__position) {
                                case "insideStartTop":
                                case "insideMiddleTop":
                                case "insideEndTop":
                                case "middle":
                                    _ = -b, f = "bottom";
                                    break;
                                case "insideStartBottom":
                                case "insideMiddleBottom":
                                case "insideEndBottom":
                                    _ = b, f = "top";
                                    break;
                                default:
                                    _ = 0, f = "middle"
                            }
                            switch (i.__position) {
                                case "end":
                                    m = [g[0] * x + u[0], g[1] * b + u[1]], p = g[0] > .8 ? "left" : g[0] < -.8 ? "right" : "center", f = g[1] > .8 ? "top" : g[1] < -.8 ? "bottom" : "middle";
                                    break;
                                case "start":
                                    m = [-g[0] * x + c[0], -g[1] * b + c[1]], p = g[0] > .8 ? "right" : g[0] < -.8 ? "left" : "center", f = g[1] > .8 ? "bottom" : g[1] < -.8 ? "top" : "middle";
                                    break;
                                case "insideStartTop":
                                case "insideStart":
                                case "insideStartBottom":
                                    m = [x * M + c[0], c[1] + _], p = h[0] < 0 ? "right" : "left", v = [-x * M, -_];
                                    break;
                                case "insideMiddleTop":
                                case "insideMiddle":
                                case "insideMiddleBottom":
                                case "middle":
                                    m = [I[0], I[1] + _], p = "center", v = [0, -_];
                                    break;
                                case "insideEndTop":
                                case "insideEnd":
                                case "insideEndBottom":
                                    m = [-x * M + u[0], u[1] + _], p = h[0] >= 0 ? "right" : "left", v = [x * M, -_];
                                    break
                            }
                            i.attr({
                                style: {
                                    textVerticalAlign: i.__verticalAlign || f,
                                    textAlign: i.__textAlign || p
                                },
                                position: m,
                                scale: [o, o],
                                origin: v
                            })
                        }
                    }
                }
            }

            function f(e, t, a) {
                l.Group.call(this), this._createLine(e, t, a)
            }
            var v = f.prototype;
            v.beforeUpdate = p, v._createLine = function(e, t, a) {
                var n = e.hostModel,
                    o = e.getItemLayout(t),
                    r = h(o);
                r.shape.percent = 0, l.initProps(r, {
                    shape: {
                        percent: 1
                    }
                }, n, t), this.add(r);
                var s = new l.Text({
                    name: "label",
                    lineLabelOriginalOpacity: 1
                });
                this.add(s), i.each(u, (function(a) {
                    var i = d(a, e, t);
                    this.add(i), this[g(a)] = e.getItemVisual(t, a)
                }), this), this._updateCommonStl(e, t, a)
            }, v.updateData = function(e, t, a) {
                var n = e.hostModel,
                    o = this.childOfName("line"),
                    r = e.getItemLayout(t),
                    s = {
                        shape: {}
                    };
                m(s.shape, r), l.updateProps(o, s, n, t), i.each(u, (function(a) {
                    var i = e.getItemVisual(t, a),
                        n = g(a);
                    if (this[n] !== i) {
                        this.remove(this.childOfName(a));
                        var o = d(a, e, t);
                        this.add(o)
                    }
                    this[n] = i
                }), this), this._updateCommonStl(e, t, a)
            }, v._updateCommonStl = function(e, t, a) {
                var n = e.hostModel,
                    o = this.childOfName("line"),
                    r = a && a.lineStyle,
                    s = a && a.hoverLineStyle,
                    g = a && a.labelModel,
                    d = a && a.hoverLabelModel;
                if (!a || e.hasItemOption) {
                    var h = e.getItemModel(t);
                    r = h.getModel("lineStyle").getLineStyle(), s = h.getModel("emphasis.lineStyle").getLineStyle(), g = h.getModel("label"), d = h.getModel("emphasis.label")
                }
                var m = e.getItemVisual(t, "color"),
                    p = i.retrieve3(e.getItemVisual(t, "opacity"), r.opacity, 1);
                o.useStyle(i.defaults({
                    strokeNoScale: !0,
                    fill: "none",
                    stroke: m,
                    opacity: p
                }, r)), o.hoverStyle = s, i.each(u, (function(e) {
                    var t = this.childOfName(e);
                    t && (t.setColor(m), t.setStyle({
                        opacity: p
                    }))
                }), this);
                var f, v, y = g.getShallow("show"),
                    x = d.getShallow("show"),
                    b = this.childOfName("label");
                if ((y || x) && (f = m || "#000", v = n.getFormattedLabel(t, "normal", e.dataType), null == v)) {
                    var S = n.getRawValue(t);
                    v = null == S ? e.getName(t) : isFinite(S) ? c(S) : S
                }
                var A = y ? v : null,
                    I = x ? i.retrieve2(n.getFormattedLabel(t, "emphasis", e.dataType), v) : null,
                    _ = b.style;
                if (null != A || null != I) {
                    l.setTextStyle(b.style, g, {
                        text: A
                    }, {
                        autoColor: f
                    }), b.__textAlign = _.textAlign, b.__verticalAlign = _.textVerticalAlign, b.__position = g.get("position") || "middle";
                    var M = g.get("distance");
                    i.isArray(M) || (M = [M, M]), b.__labelDistance = M
                }
                b.hoverStyle = null != I ? {
                    text: I,
                    textFill: d.getTextColor(!0),
                    fontStyle: d.getShallow("fontStyle"),
                    fontWeight: d.getShallow("fontWeight"),
                    fontSize: d.getShallow("fontSize"),
                    fontFamily: d.getShallow("fontFamily")
                } : {
                    text: null
                }, b.ignore = !y && !x, l.setHoverStyle(this)
            }, v.highlight = function() {
                this.trigger("emphasis")
            }, v.downplay = function() {
                this.trigger("normal")
            }, v.updateLayout = function(e, t) {
                this.setLinePoints(e.getItemLayout(t))
            }, v.setLinePoints = function(e) {
                var t = this.childOfName("line");
                m(t.shape, e), t.dirty()
            }, i.inherits(f, l.Group);
            var y = f;
            e.exports = y
        },
        fdd8: function(e, t, a) {
            var i = a("a04a"),
                n = a("62c3"),
                o = a("263c"),
                r = a("6a23"),
                l = a("27ee"),
                s = a("e0ce"),
                c = a("eff3"),
                u = c.getStackedDimension,
                g = function(e, t, a, n) {
                    var o = e.getData(),
                        l = n.type;
                    if (!i.isArray(n) && ("min" === l || "max" === l || "average" === l || "median" === l || null != n.xAxis || null != n.yAxis)) {
                        var s, c;
                        if (null != n.yAxis || null != n.xAxis) s = t.getAxis(null != n.yAxis ? "y" : "x"), c = i.retrieve(n.yAxis, n.xAxis);
                        else {
                            var g = r.getAxisInfo(n, o, t, e);
                            s = g.valueAxis;
                            var d = u(o, g.valueDataDim);
                            c = r.numCalculate(o, d, l)
                        }
                        var h = "x" === s.dim ? 0 : 1,
                            m = 1 - h,
                            p = i.clone(n),
                            f = {};
                        p.type = null, p.coord = [], f.coord = [], p.coord[m] = -1 / 0, f.coord[m] = 1 / 0;
                        var v = a.get("precision");
                        v >= 0 && "number" === typeof c && (c = +c.toFixed(Math.min(v, 20))), p.coord[h] = f.coord[h] = c, n = [p, f, {
                            type: l,
                            valueIndex: n.valueIndex,
                            value: c
                        }]
                    }
                    return n = [r.dataTransform(e, n[0]), r.dataTransform(e, n[1]), i.extend({}, n[2])], n[2].type = n[2].type || "", i.merge(n[2], n[0]), i.merge(n[2], n[1]), n
                };

            function d(e) {
                return !isNaN(e) && !isFinite(e)
            }

            function h(e, t, a, i) {
                var n = 1 - e,
                    o = i.dimensions[e];
                return d(t[n]) && d(a[n]) && t[e] === a[e] && i.getAxis(o).containData(t[e])
            }

            function m(e, t) {
                if ("cartesian2d" === e.type) {
                    var a = t[0].coord,
                        i = t[1].coord;
                    if (a && i && (h(1, a, i, e) || h(0, a, i, e))) return !0
                }
                return r.dataFilter(e, t[0]) && r.dataFilter(e, t[1])
            }

            function p(e, t, a, i, n) {
                var r, l = i.coordinateSystem,
                    s = e.getItemModel(t),
                    c = o.parsePercent(s.get("x"), n.getWidth()),
                    u = o.parsePercent(s.get("y"), n.getHeight());
                if (isNaN(c) || isNaN(u)) {
                    if (i.getMarkerPosition) r = i.getMarkerPosition(e.getValues(e.dimensions, t));
                    else {
                        var g = l.dimensions,
                            h = e.get(g[0], t),
                            m = e.get(g[1], t);
                        r = l.dataToPoint([h, m])
                    }
                    if ("cartesian2d" === l.type) {
                        var p = l.getAxis("x"),
                            f = l.getAxis("y");
                        g = l.dimensions;
                        d(e.get(g[0], t)) ? r[0] = p.toGlobalCoord(p.getExtent()[a ? 0 : 1]) : d(e.get(g[1], t)) && (r[1] = f.toGlobalCoord(f.getExtent()[a ? 0 : 1]))
                    }
                    isNaN(c) || (r[0] = c), isNaN(u) || (r[1] = u)
                } else r = [c, u];
                e.setItemLayout(t, r)
            }
            var f = s.extend({
                type: "markLine",
                updateTransform: function(e, t, a) {
                    t.eachSeries((function(e) {
                        var t = e.markLineModel;
                        if (t) {
                            var i = t.getData(),
                                n = t.__from,
                                o = t.__to;
                            n.each((function(t) {
                                p(n, t, !0, e, a), p(o, t, !1, e, a)
                            })), i.each((function(e) {
                                i.setItemLayout(e, [n.getItemLayout(e), o.getItemLayout(e)])
                            })), this.markerGroupMap.get(e.id).updateLayout()
                        }
                    }), this)
                },
                renderSeries: function(e, t, a, n) {
                    var o = e.coordinateSystem,
                        r = e.id,
                        s = e.getData(),
                        c = this.markerGroupMap,
                        u = c.get(r) || c.set(r, new l);
                    this.group.add(u.group);
                    var g = v(o, e, t),
                        d = g.from,
                        h = g.to,
                        m = g.line;
                    t.__from = d, t.__to = h, t.setData(m);
                    var f = t.get("symbol"),
                        y = t.get("symbolSize");

                    function x(t, a, i) {
                        var o = t.getItemModel(a);
                        p(t, a, i, e, n), t.setItemVisual(a, {
                            symbolRotate: o.get("symbolRotate"),
                            symbolSize: o.get("symbolSize") || y[i ? 0 : 1],
                            symbol: o.get("symbol", !0) || f[i ? 0 : 1],
                            color: o.get("itemStyle.color") || s.getVisual("color")
                        })
                    }
                    i.isArray(f) || (f = [f, f]), "number" === typeof y && (y = [y, y]), g.from.each((function(e) {
                        x(d, e, !0), x(h, e, !1)
                    })), m.each((function(e) {
                        var t = m.getItemModel(e).get("lineStyle.color");
                        m.setItemVisual(e, {
                            color: t || d.getItemVisual(e, "color")
                        }), m.setItemLayout(e, [d.getItemLayout(e), h.getItemLayout(e)]), m.setItemVisual(e, {
                            fromSymbolRotate: d.getItemVisual(e, "symbolRotate"),
                            fromSymbolSize: d.getItemVisual(e, "symbolSize"),
                            fromSymbol: d.getItemVisual(e, "symbol"),
                            toSymbolRotate: h.getItemVisual(e, "symbolRotate"),
                            toSymbolSize: h.getItemVisual(e, "symbolSize"),
                            toSymbol: h.getItemVisual(e, "symbol")
                        })
                    })), u.updateData(m), g.line.eachItemGraphicEl((function(e, a) {
                        e.traverse((function(e) {
                            e.dataModel = t
                        }))
                    })), u.__keep = !0, u.group.silent = t.get("silent") || e.get("silent")
                }
            });

            function v(e, t, a) {
                var o;
                o = e ? i.map(e && e.dimensions, (function(e) {
                    var a = t.getData().getDimensionInfo(t.getData().mapDimension(e)) || {};
                    return i.defaults({
                        name: e
                    }, a)
                })) : [{
                    name: "value",
                    type: "float"
                }];
                var l = new n(o, a),
                    s = new n(o, a),
                    c = new n([], a),
                    u = i.map(a.get("data"), i.curry(g, t, e, a));
                e && (u = i.filter(u, i.curry(m, e)));
                var d = e ? r.dimValueGetter : function(e) {
                    return e.value
                };
                return l.initData(i.map(u, (function(e) {
                    return e[0]
                })), null, d), s.initData(i.map(u, (function(e) {
                    return e[1]
                })), null, d), c.initData(i.map(u, (function(e) {
                    return e[2]
                }))), c.hasItemOption = !0, {
                    from: l,
                    to: s,
                    line: c
                }
            }
            e.exports = f
        }
    }
]);