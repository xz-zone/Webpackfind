define('amd_modules/@baidu/video-meeting/dist/index', [
    'require',
    'san',
    'tslib'
], function(require, t, e) {
    return function(t) {
        var e = {};

        function n(a) {
            if (e[a])
                return e[a].exports;
            var i = e[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return t[a].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
        }
        return n.m = t, n.c = e, n.d = function(t, e, a) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: a
            });
        }, n.r = function(t) {
            'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: 'Module'
            }), Object.defineProperty(t, '__esModule', {
                value: !0
            });
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e)
                return t;
            if (4 & e && 'object' == typeof t && t && t.__esModule)
                return t;
            var a = Object.create(null);
            if (n.r(a), Object.defineProperty(a, 'default', {
                    enumerable: !0,
                    value: t
                }), 2 & e && 'string' != typeof t)
                for (var i in t)
                    n.d(a, i, function(e) {
                        return t[e];
                    }.bind(null, i));
            return a;
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t['default'];
            } : function() {
                return t;
            };
            return n.d(e, 'a', e), e;
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, n.p = '', n(n.s = 36);
    }([
        function(e, n) {
            e.exports = t;
        },
        function(t, e, n) {
            var a;
            (a = function() {
                'use strict';

                function e(t) {
                    '@babel/helpers - typeof';
                    return (e = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(t) {
                        return typeof t;
                    } : function(t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                    })(t);
                }
                var a = n(0).defineComponent;

                function i(t, e) {
                    for (var n = {}, a = 0; a < e.length; a++)
                        o(n, e[a]);
                    var i = t.initData;
                    t.initData = i ? function() {
                        return o({}, i.call(this), {
                            $style: n
                        });
                    } : function() {
                        return n;
                    };
                }

                function o(t) {
                    if (null === t || t === undefined)
                        throw new TypeError('Cannot convert undefined or null to object');
                    for (var e = Object(t), n = 1; n < arguments.length; n++) {
                        var a = arguments[n];
                        if (null !== a && a !== undefined)
                            for (var i in a)
                                Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
                    }
                    return e;
                }
                t.exports = function(t, n, o) {
                    for (var r = function(t) {
                            var e = [t];
                            'function' == typeof t && (e.push(t.prototype), t.prototype.constructor && e.push(t.prototype.constructor.prototype));
                            return e;
                        }(t), s = 0; s < r.length; s++)
                        n && ('string' == typeof n ? r[s].template = n : n instanceof Array ? r[s].aPack = n : r[s].aNode = n), o.length && i(r[s], o);
                    return 'object' === e(t) ? a(t) : t;
                };
            }.apply(e, [])) === undefined || (t.exports = a);
        },
        function(t, e, n) {
            'use strict';
            var a = function() {
                    var t;
                    return function() {
                        return void 0 === t && (t = Boolean(window && document && document.all && !window.atob)), t;
                    };
                }(),
                i = function() {
                    var t = {};
                    return function(e) {
                        if ('undefined' == typeof t[e]) {
                            var n = document.querySelector(e);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                                try {
                                    n = n.contentDocument.head;
                                } catch (a) {
                                    n = null;
                                }
                            t[e] = n;
                        }
                        return t[e];
                    };
                }(),
                o = [];

            function r(t) {
                for (var e = -1, n = 0; n < o.length; n++)
                    if (o[n].identifier === t) {
                        e = n;
                        break;
                    }
                return e;
            }

            function s(t, e) {
                for (var n = {}, a = [], i = 0; i < t.length; i++) {
                    var s = t[i],
                        c = e.base ? s[0] + e.base : s[0],
                        l = n[c] || 0,
                        p = ''.concat(c, ' ').concat(l);
                    n[c] = l + 1;
                    var d = r(p),
                        u = {
                            css: s[1],
                            media: s[2],
                            sourceMap: s[3]
                        }; -
                    1 !== d ? (o[d].references++, o[d].updater(u)) : o.push({
                        identifier: p,
                        updater: h(u, e),
                        references: 1
                    }), a.push(p);
                }
                return a;
            }

            function c(t) {
                var e = document.createElement('style'),
                    a = t.attributes || {};
                if ('undefined' == typeof a.nonce) {
                    var o = n.nc;
                    o && (a.nonce = o);
                }
                if (Object.keys(a).forEach(function(t) {
                        e.setAttribute(t, a[t]);
                    }), 'function' == typeof t.insert)
                    t.insert(e);
                else {
                    var r = i(t.insert || 'head');
                    if (!r)
                        throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.');
                    r.appendChild(e);
                }
                return e;
            }
            var l = function() {
                var t = [];
                return function(e, n) {
                    return t[e] = n, t.filter(Boolean).join('\n');
                };
            }();

            function p(t, e, n, a) {
                var i = n ? '' : a.media ? '@media '.concat(a.media, ' {').concat(a.css, '}') : a.css;
                if (t.styleSheet)
                    t.styleSheet.cssText = l(e, i);
                else {
                    var o = document.createTextNode(i),
                        r = t.childNodes;
                    r[e] && t.removeChild(r[e]), r.length ? t.insertBefore(o, r[e]) : t.appendChild(o);
                }
            }
            var d = null,
                u = 0;

            function h(t, e) {
                var n, a, i;
                if (e.singleton) {
                    var o = u++;
                    n = d || (d = c(e)), a = p.bind(null, n, o, !1), i = p.bind(null, n, o, !0);
                } else
                    n = c(e), a = function(t, e, n) {
                        var a = n.css,
                            i = n.media,
                            o = n.sourceMap;
                        if (i ? t.setAttribute('media', i) : t.removeAttribute('media'), o && btoa && (a += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), ' */')), t.styleSheet)
                            t.styleSheet.cssText = a;
                        else {
                            for (; t.firstChild;)
                                t.removeChild(t.firstChild);
                            t.appendChild(document.createTextNode(a));
                        }
                    }.bind(null, n, e), i = function() {
                        ! function(t) {
                            if (null === t.parentNode)
                                return !1;
                            t.parentNode.removeChild(t);
                        }(n);
                    };
                return a(t),
                    function(e) {
                        if (e) {
                            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                                return;
                            a(t = e);
                        } else
                            i();
                    };
            }
            t.exports = function(t, e) {
                (e = e || {}).singleton || 'boolean' == typeof e.singleton || (e.singleton = a());
                var n = s(t = t || [], e);
                return function(t) {
                    if (t = t || [], '[object Array]' === Object.prototype.toString.call(t)) {
                        for (var a = 0; a < n.length; a++) {
                            var i = r(n[a]);
                            o[i].references--;
                        }
                        for (var c = s(t, e), l = 0; l < n.length; l++) {
                            var p = r(n[l]);
                            0 === o[p].references && (o[p].updater(), o.splice(p, 1));
                        }
                        n = c;
                    }
                };
            };
        },
        function(t, e, n) {
            var a;
            (a = function() {
                'use strict';
                t.exports = function(t) {
                    var e = [];
                    return e.toString = function() {
                        return this.map(function(e) {
                            var n = function(t, e) {
                                var n = t[1] || '',
                                    a = t[3];
                                if (!a)
                                    return n;
                                if (e && 'function' == typeof btoa) {
                                    var i = function(t) {
                                            var e = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
                                                n = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(e);
                                            return '/*# '.concat(n, ' */');
                                        }(a),
                                        o = a.sources.map(function(t) {
                                            return '/*# sourceURL='.concat(a.sourceRoot || '').concat(t, ' */');
                                        });
                                    return [n].concat(o).concat([i]).join('\n');
                                }
                                return [n].join('\n');
                            }(e, t);
                            return e[2] ? '@media '.concat(e[2], ' {').concat(n, '}') : n;
                        }).join('');
                    }, e.i = function(t, n, a) {
                        'string' == typeof t && (t = [
                            [
                                null,
                                t,
                                ''
                            ]
                        ]);
                        var i = {};
                        if (a)
                            for (var o = 0; o < this.length; o++) {
                                var r = this[o][0];
                                null != r && (i[r] = !0);
                            }
                        for (var s = 0; s < t.length; s++) {
                            var c = [].concat(t[s]);
                            a && i[c[0]] || (n && (c[2] ? c[2] = ''.concat(n, ' and ').concat(c[2]) : c[2] = n), e.push(c));
                        }
                    }, e;
                };
            }.apply(e, [])) === undefined || (t.exports = a);
        },
        function(t, n) {
            t.exports = e;
        },
        function(t, e, n) {
            var a, i;
            a = [
                e,
                n(47),
                n(51),
                n(55),
                n(62),
                n(16),
                n(66),
                n(70)
            ], (i = function(t, e, n, a, i, o, r, s) {
                'use strict';

                function c(t) {
                    return t && t.__esModule ? t : {
                        'default': t
                    };
                }
                Object.defineProperty(t, '__esModule', {
                    value: !0
                }), Object.defineProperty(t, 'Select', {
                    enumerable: !0,
                    get: function() {
                        return e['default'];
                    }
                }), Object.defineProperty(t, 'Toast', {
                    enumerable: !0,
                    get: function() {
                        return n['default'];
                    }
                }), Object.defineProperty(t, 'Popup', {
                    enumerable: !0,
                    get: function() {
                        return a['default'];
                    }
                }), Object.defineProperty(t, 'Button', {
                    enumerable: !0,
                    get: function() {
                        return i['default'];
                    }
                }), Object.defineProperty(t, 'Checkbox', {
                    enumerable: !0,
                    get: function() {
                        return o['default'];
                    }
                }), Object.defineProperty(t, 'Input', {
                    enumerable: !0,
                    get: function() {
                        return r['default'];
                    }
                }), Object.defineProperty(t, 'Calendar', {
                    enumerable: !0,
                    get: function() {
                        return s['default'];
                    }
                }), e = c(e), n = c(n), a = c(a), i = c(i), o = c(o), r = c(r), s = c(s);
            }.apply(e, a)) === undefined || (t.exports = i);
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(44)],
                o = n(46),
                r = n(12)['default'];
            t.exports = n(12), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(87)],
                o = n(89),
                r = n(24)['default'];
            t.exports = n(24), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            'use strict';
            n.r(e), n.d(e, 'Headers', function() {
                return p;
            }), n.d(e, 'Request', function() {
                return v;
            }), n.d(e, 'Response', function() {
                return b;
            }), n.d(e, 'DOMException', function() {
                return _;
            }), n.d(e, 'fetch', function() {
                return w;
            });
            var a = 'undefined' != typeof globalThis && globalThis || 'undefined' != typeof self && self || void 0 !== a && a,
                i = {
                    searchParams: 'URLSearchParams' in a,
                    iterable: 'Symbol' in a && 'iterator' in Symbol,
                    blob: 'FileReader' in a && 'Blob' in a && function() {
                        try {
                            return new Blob(), !0;
                        } catch (t) {
                            return !1;
                        }
                    }(),
                    formData: 'FormData' in a,
                    arrayBuffer: 'ArrayBuffer' in a
                };
            if (i.arrayBuffer)
                var o = [
                        '[object Int8Array]',
                        '[object Uint8Array]',
                        '[object Uint8ClampedArray]',
                        '[object Int16Array]',
                        '[object Uint16Array]',
                        '[object Int32Array]',
                        '[object Uint32Array]',
                        '[object Float32Array]',
                        '[object Float64Array]'
                    ],
                    r = ArrayBuffer.isView || function(t) {
                        return t && o.indexOf(Object.prototype.toString.call(t)) > -1;
                    };

            function s(t) {
                if ('string' != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || '' === t)
                    throw new TypeError('Invalid character in header field name');
                return t.toLowerCase();
            }

            function c(t) {
                return 'string' != typeof t && (t = String(t)), t;
            }

            function l(t) {
                var e = {
                    next: function() {
                        var e = t.shift();
                        return {
                            done: e === undefined,
                            value: e
                        };
                    }
                };
                return i.iterable && (e[Symbol.iterator] = function() {
                    return e;
                }), e;
            }

            function p(t) {
                this.map = {}, t instanceof p ? t.forEach(function(t, e) {
                    this.append(e, t);
                }, this) : Array.isArray(t) ? t.forEach(function(t) {
                    this.append(t[0], t[1]);
                }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                    this.append(e, t[e]);
                }, this);
            }

            function d(t) {
                if (t.bodyUsed)
                    return Promise.reject(new TypeError('Already read'));
                t.bodyUsed = !0;
            }

            function u(t) {
                return new Promise(function(e, n) {
                    t.onload = function() {
                        e(t.result);
                    }, t.onerror = function() {
                        n(t.error);
                    };
                });
            }

            function h(t) {
                var e = new FileReader(),
                    n = u(e);
                return e.readAsArrayBuffer(t), n;
            }

            function f(t) {
                if (t.slice)
                    return t.slice(0);
                var e = new Uint8Array(t.byteLength);
                return e.set(new Uint8Array(t)), e.buffer;
            }

            function m() {
                return this.bodyUsed = !1, this._initBody = function(t) {
                    this.bodyUsed = this.bodyUsed, this._bodyInit = t, t ? 'string' == typeof t ? this._bodyText = t : i.blob && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : i.formData && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : i.searchParams && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : i.arrayBuffer && i.blob && function(t) {
                        return t && DataView.prototype.isPrototypeOf(t);
                    }(t) ? (this._bodyArrayBuffer = f(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : i.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || r(t)) ? this._bodyArrayBuffer = f(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = '', this.headers.get('content-type') || ('string' == typeof t ? this.headers.set('content-type', 'text/plain;charset=UTF-8') : this._bodyBlob && this._bodyBlob.type ? this.headers.set('content-type', this._bodyBlob.type) : i.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8'));
                }, i.blob && (this.blob = function() {
                    var t = d(this);
                    if (t)
                        return t;
                    if (this._bodyBlob)
                        return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData)
                        throw new Error('could not read FormData body as blob');
                    return Promise.resolve(new Blob([this._bodyText]));
                }, this.arrayBuffer = function() {
                    if (this._bodyArrayBuffer) {
                        var t = d(this);
                        return t || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer));
                    }
                    return this.blob().then(h);
                }), this.text = function() {
                    var t = d(this);
                    if (t)
                        return t;
                    if (this._bodyBlob)
                        return function(t) {
                            var e = new FileReader(),
                                n = u(e);
                            return e.readAsText(t), n;
                        }(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(function(t) {
                            for (var e = new Uint8Array(t), n = new Array(e.length), a = 0; a < e.length; a++)
                                n[a] = String.fromCharCode(e[a]);
                            return n.join('');
                        }(this._bodyArrayBuffer));
                    if (this._bodyFormData)
                        throw new Error('could not read FormData body as text');
                    return Promise.resolve(this._bodyText);
                }, i.formData && (this.formData = function() {
                    return this.text().then(y);
                }), this.json = function() {
                    return this.text().then(JSON.parse);
                }, this;
            }
            p.prototype.append = function(t, e) {
                t = s(t), e = c(e);
                var n = this.map[t];
                this.map[t] = n ? n + ', ' + e : e;
            }, p.prototype['delete'] = function(t) {
                delete this.map[s(t)];
            }, p.prototype.get = function(t) {
                return t = s(t), this.has(t) ? this.map[t] : null;
            }, p.prototype.has = function(t) {
                return this.map.hasOwnProperty(s(t));
            }, p.prototype.set = function(t, e) {
                this.map[s(t)] = c(e);
            }, p.prototype.forEach = function(t, e) {
                for (var n in this.map)
                    this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this);
            }, p.prototype.keys = function() {
                var t = [];
                return this.forEach(function(e, n) {
                    t.push(n);
                }), l(t);
            }, p.prototype.values = function() {
                var t = [];
                return this.forEach(function(e) {
                    t.push(e);
                }), l(t);
            }, p.prototype.entries = function() {
                var t = [];
                return this.forEach(function(e, n) {
                    t.push([
                        n,
                        e
                    ]);
                }), l(t);
            }, i.iterable && (p.prototype[Symbol.iterator] = p.prototype.entries);
            var g = [
                'DELETE',
                'GET',
                'HEAD',
                'OPTIONS',
                'POST',
                'PUT'
            ];

            function v(t, e) {
                if (!(this instanceof v))
                    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                var n = (e = e || {}).body;
                if (t instanceof v) {
                    if (t.bodyUsed)
                        throw new TypeError('Already read');
                    this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new p(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, n || null == t._bodyInit || (n = t._bodyInit, t.bodyUsed = !0);
                } else
                    this.url = String(t);
                if (this.credentials = e.credentials || this.credentials || 'same-origin', !e.headers && this.headers || (this.headers = new p(e.headers)), this.method = function(t) {
                        var e = t.toUpperCase();
                        return g.indexOf(e) > -1 ? e : t;
                    }(e.method || this.method || 'GET'), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ('GET' === this.method || 'HEAD' === this.method) && n)
                    throw new TypeError('Body not allowed for GET or HEAD requests');
                if (this._initBody(n), !('GET' !== this.method && 'HEAD' !== this.method || 'no-store' !== e.cache && 'no-cache' !== e.cache)) {
                    var a = /([?&])_=[^&]*/;
                    if (a.test(this.url))
                        this.url = this.url.replace(a, '$1_=' + new Date().getTime());
                    else {
                        this.url += (/\?/.test(this.url) ? '&' : '?') + '_=' + new Date().getTime();
                    }
                }
            }

            function y(t) {
                var e = new FormData();
                return t.trim().split('&').forEach(function(t) {
                    if (t) {
                        var n = t.split('='),
                            a = n.shift().replace(/\+/g, ' '),
                            i = n.join('=').replace(/\+/g, ' ');
                        e.append(decodeURIComponent(a), decodeURIComponent(i));
                    }
                }), e;
            }

            function b(t, e) {
                if (!(this instanceof b))
                    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                e || (e = {}), this.type = 'default', this.status = e.status === undefined ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = 'statusText' in e ? e.statusText : '', this.headers = new p(e.headers), this.url = e.url || '', this._initBody(t);
            }
            v.prototype.clone = function() {
                return new v(this, {
                    body: this._bodyInit
                });
            }, m.call(v.prototype), m.call(b.prototype), b.prototype.clone = function() {
                return new b(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new p(this.headers),
                    url: this.url
                });
            }, b.error = function() {
                var t = new b(null, {
                    status: 0,
                    statusText: ''
                });
                return t.type = 'error', t;
            };
            var x = [
                301,
                302,
                303,
                307,
                308
            ];
            b.redirect = function(t, e) {
                if (-1 === x.indexOf(e))
                    throw new RangeError('Invalid status code');
                return new b(null, {
                    status: e,
                    headers: {
                        location: t
                    }
                });
            };
            var _ = a.DOMException;
            try {
                new _();
            } catch (A) {
                (_ = function(t, e) {
                    this.message = t, this.name = e;
                    var n = Error(t);
                    this.stack = n.stack;
                }).prototype = Object.create(Error.prototype), _.prototype.constructor = _;
            }

            function w(t, e) {
                return new Promise(function(n, o) {
                    var r = new v(t, e);
                    if (r.signal && r.signal.aborted)
                        return o(new _('Aborted', 'AbortError'));
                    var s = new XMLHttpRequest();

                    function l() {
                        s.abort();
                    }
                    s.onload = function() {
                        var t = {
                            status: s.status,
                            statusText: s.statusText,
                            headers: function(t) {
                                var e = new p();
                                return t.replace(/\r?\n[\t ]+/g, ' ').split('\r').map(function(t) {
                                    return 0 === t.indexOf('\n') ? t.substr(1, t.length) : t;
                                }).forEach(function(t) {
                                    var n = t.split(':'),
                                        a = n.shift().trim();
                                    if (a) {
                                        var i = n.join(':').trim();
                                        e.append(a, i);
                                    }
                                }), e;
                            }(s.getAllResponseHeaders() || '')
                        };
                        t.url = 'responseURL' in s ? s.responseURL : t.headers.get('X-Request-URL');
                        var e = 'response' in s ? s.response : s.responseText;
                        setTimeout(function() {
                            n(new b(e, t));
                        }, 0);
                    }, s.onerror = function() {
                        setTimeout(function() {
                            o(new TypeError('Network request failed'));
                        }, 0);
                    }, s.ontimeout = function() {
                        setTimeout(function() {
                            o(new TypeError('Network request failed'));
                        }, 0);
                    }, s.onabort = function() {
                        setTimeout(function() {
                            o(new _('Aborted', 'AbortError'));
                        }, 0);
                    }, s.open(r.method, function(t) {
                        try {
                            return '' === t && a.location.href ? a.location.href : t;
                        } catch (e) {
                            return t;
                        }
                    }(r.url), !0), 'include' === r.credentials ? s.withCredentials = !0 : 'omit' === r.credentials && (s.withCredentials = !1), 'responseType' in s && (i.blob ? s.responseType = 'blob' : i.arrayBuffer && r.headers.get('Content-Type') && -1 !== r.headers.get('Content-Type').indexOf('application/octet-stream') && (s.responseType = 'arraybuffer')), !e || 'object' != typeof e.headers || e.headers instanceof p ? r.headers.forEach(function(t, e) {
                        s.setRequestHeader(e, t);
                    }) : Object.getOwnPropertyNames(e.headers).forEach(function(t) {
                        s.setRequestHeader(t, c(e.headers[t]));
                    }), r.signal && (r.signal.addEventListener('abort', l), s.onreadystatechange = function() {
                        4 === s.readyState && r.signal.removeEventListener('abort', l);
                    }), s.send('undefined' == typeof r._bodyInit ? null : r._bodyInit);
                });
            }
            w.polyfill = !0, a.fetch || (a.fetch = w, a.Headers = p, a.Request = v, a.Response = b);
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0, e.getBrowser = void 0, e.getBrowser = function() {
                var t = navigator.userAgent.toLowerCase(),
                    e = {
                        type: '',
                        versions: 0
                    },
                    n = {
                        IE: 'ActiveXObject' in window,
                        Chrome: t.indexOf('chrome') > -1 && t.indexOf('safari') > -1,
                        Firefox: t.indexOf('firefox') > -1,
                        Opera: t.indexOf('opera') > -1,
                        Safari: t.indexOf('safari') > -1 && -1 == t.indexOf('chrome'),
                        Edge: t.indexOf('edge') > -1,
                        QQBrowser: /qqbrowser/.test(t),
                        WeixinBrowser: /MicroMessenger/i.test(t)
                    };
                for (var a in n)
                    if (n[a]) {
                        var i = '';
                        if ('IE' == a)
                            i = t.match(/(msie\s|trident.*rv:)([\w.]+)/)[2];
                        else if ('Chrome' === a) {
                            for (var o in navigator.mimeTypes)
                                'application/360softmgrplugin' == navigator.mimeTypes[o].type && (a = '360');
                            i = t.match(/chrome\/([\d.]+)/)[1];
                        } else
                            'Firefox' === a ? i = t.match(/firefox\/([\d.]+)/)[1] : 'Opera' === a ? i = t.match(/opera\/([\d.]+)/)[1] : 'Safari' === a ? i = t.match(/version\/([\d.]+)/)[1] : 'Edge' === a ? i = t.match(/edge\/([\d.]+)/)[1] : 'QQBrowser' === a && (i = t.match(/qqbrowser\/([\d.]+)/)[1]);
                        e.type = a, e.versions = parseInt(i);
                    }
                return e;
            };
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = n(0),
                o = a.__importDefault(n(40)),
                r = a.__importDefault(n(83)),
                s = a.__importDefault(n(90)),
                c = a.__importDefault(n(97)),
                l = a.__importDefault(n(105)),
                p = a.__importDefault(n(109)),
                d = a.__importDefault(n(117)),
                u = a.__importDefault(n(121)),
                h = n(5),
                f = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.trimWhitespace = 'all', e;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {
                            status: 1,
                            meetInfo: null,
                            showViews: !0,
                            entry: null,
                            meetData: null,
                            type: '',
                            orderData: null,
                            preStack: [],
                            bsToken: '',
                            isLogin: '',
                            netError: !1,
                            flowType: '',
                            event: null
                        };
                    }, e.prototype.onHide = function() {
                        this.data.set('netError', !1);
                    }, e.prototype.updateStatus = function(t) {
                        if (t && t.value >= 0) {
                            var e = t.value,
                                n = this.data.get('preStack');
                            this.data.set('status', e), 0 === e ? this.setStack('clear') : e === n[n.length - 2] ? this.setStack('del') : this.setStack('add');
                        }
                    }, e.prototype.setStack = function(t) {
                        var e = this.data.get('preStack'),
                            n = this.data.get('status');
                        'add' === t ? (e.push(n), this.data.set('preStack', e)) : 'del' === t ? e.length > 1 && (e.pop(), this.data.set('preStack', e)) : this.data.set('preStack', []);
                    }, e.prototype.attached = function() {
                        var t = this.data.get('entry');
                        this.setStack('add'), this.bindEvent(t);
                    }, e.prototype.logSend = function(t) {
                        var e = t.modName,
                            n = t.evtName;
                        this.data.get('event').fire(e, n);
                    }, e.prototype.bindEvent = function(t) {
                        var e = this,
                            n = this;
                        'backflow' !== n.data.get('type') && (t.off('click').on('click', function(t) {
                            var a = e.data.get('showViews');
                            n.data.set('showViews', !a), 0 !== e.data.get('status') || a || e.updateStatus({
                                value: 1
                            }), t.stopPropagation();
                        }), this.hideViews());
                    }, e.prototype.hideViews = function() {
                        var t = this,
                            e = this.data.get('showViews'),
                            n = this.el,
                            a = !1;
                        document.addEventListener('mousedown', function(e) {
                            t.contains(n, e.target) && (a = !0);
                        }), document.addEventListener('click', function(i) {
                            t.contains(document.getElementById('passport-login-pop'), i.target) || t.contains(document.getElementsByClassName('pop-mask')[0], i.target) || (t.contains(n, i.target) || !e || a ? a = !1 : (t.data.set('showViews', !1), a = !1));
                        }), document.querySelector('#kw').addEventListener('focus', function() {
                            t.data.set('showViews', !1);
                        });
                    }, e.prototype.contains = function(t, e) {
                        for (var n = e; n;) {
                            if (n === t)
                                return !0;
                            n = n.parentNode;
                        }
                        return !1;
                    }, e.prototype.orderMeetEvent = function(t) {
                        if (t.meetMsg) {
                            var e = this.getSimpleMeetData(t.meetMsg);
                            t.meetData = e;
                        }
                        t.bsToken = this.data.get('bsToken'), this.data.set('orderData', t), this.updateStatus({
                            value: 5
                        });
                    }, e.prototype.modifyMeetEvent = function(t) {
                        this.data.set('orderData', t), this.updateStatus({
                            value: 5
                        });
                    }, e.prototype.getSimpleMeetData = function(t) {
                        return {
                            roomName: t.name,
                            boxChecked: !!t.needPasswd,
                            openPassInput: !!t.needPasswd,
                            description: t.description,
                            partner: t.partner,
                            canOpenMeet: {
                                title: !0,
                                pass: !0,
                                desc: !0
                            }
                        };
                    }, e.prototype.createQuickMeet = function(t) {
                        this.updateStatus({
                            value: 3
                        }), t.type = 0, this.data.set('meetData', t);
                    }, e.prototype.openManageMeet = function() {
                        this.updateStatus({
                            value: 6
                        });
                    }, e.prototype.startMeetEvent = function(t) {
                        this.data.set('meetInfo', t), this.updateStatus({
                            value: 4
                        });
                    }, e.prototype.orderIntoMidpage = function(t) {
                        var e = {
                            type: 1,
                            data: t
                        };
                        this.data.set('meetData', e), this.updateStatus({
                            value: 3
                        });
                    }, e.components = {
                        'v-demo': o['default'],
                        'meet-midpage': r['default'],
                        'open-meet': s['default'],
                        'order-meet': c['default'],
                        'manage-meet': p['default'],
                        'compat-tip': d['default'],
                        'start-meet': l['default'],
                        'page-error': u['default'],
                        'c-toast': h.Toast
                    }, e.computed = {
                        memberName: function() {
                            var t = this.data.get('showViews'),
                                e = document.getElementsByTagName('html')[0];
                            t ? (this.data.get('event').fire('superman:videomeeting', 'opendialogClick'), e.className += ' no-scroll') : e.setAttribute('class', e.getAttribute('class').replace(' no-scroll', ''));
                        },
                        errorPos: function() {
                            return {
                                position: 'fixed',
                                bottom: '331px',
                                right: '179px',
                                'z-index': '1000'
                            };
                        }
                    }, e.messages = {
                        exitMeet: function(t) {
                            this.updateStatus(t), this.data.set('showViews', !1);
                        },
                        hideMeet: function(t) {
                            var e = t.value;
                            this.data.set('showViews', e);
                        },
                        openFeedback: function(t) {
                            this.updateStatus(t);
                        },
                        openManage: function(t) {
                            this.updateStatus(t);
                        },
                        goback: function(t) {
                            var e = this.data.get('preStack'),
                                n = e[e.length - 2];
                            this.updateStatus({
                                value: n
                            });
                        },
                        disconnectedError: function(t) {
                            this.data.set('netError', !0);
                        }
                    }, e;
                }(i.Component);
            e['default'] = f;
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = n(0),
                o = a.__importDefault(n(6)),
                r = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.trimWhitespace = 'all', e;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {
                            text: 'video-meeting'
                        };
                    }, e.components = {
                        'v-header': o['default']
                    }, e;
                }(i.Component);
            e['default'] = r;
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = n(0),
                o = n(5),
                r = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.trimWhitespace = 'all', e;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {
                            needBack: !0,
                            title: '',
                            closeType: '',
                            status: 0,
                            exit: !1,
                            clearMedia: !1
                        };
                    }, e.prototype.exitMeet = function() {
                        window.localStorage.getItem('video-meet-never') ? this.dispatch('exitMeet', 0) : this.data.set('exit', !0);
                    }, e.prototype.hideMeet = function() {
                        this.dispatch('hideMeet', !1);
                    }, e.prototype.goBack = function() {
                        if (this.data.get('clearMedia'))
                            this.fire('mediaGoback', null);
                        else {
                            var t = this.data.get('status');
                            this.dispatch('goback', t);
                        }
                    }, e.prototype.cancel = function(t) {
                        this.data.set('exit', !1), t.never && window.localStorage.setItem('video-meet-never', '1');
                    }, e.prototype.confirm = function(t) {
                        this.data.set('exit', !1), t.never && window.localStorage.setItem('video-meet-never', '1'), this.data.get('clearMedia') ? this.fire('mediaExit', null) : this.dispatch('exitMeet', 0);
                    }, e.components = {
                        'c-popup': o.Popup
                    }, e;
                }(i.Component);
            e['default'] = r;
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {
                            name: '',
                            index: 0,
                            selecting: !1,
                            alignX: 'left',
                            alignY: 'top',
                            columns: 3,
                            dataList: [],
                            style: '',
                            width: '',
                            columnWidth: '',
                            selIndex: 0,
                            maxHeight: ''
                        };
                    }, e.prototype.attached = function() {
                        window.addEventListener ? window.addEventListener('click', this.closeBoard.bind(this)) : window.attachEvent('onclick', this.closeBoard.bind(this));
                    }, e.prototype.detached = function() {
                        window.removeEventListener ? window.removeEventListener('click', this.closeBoard.bind(this)) : window.detachEvent('onclick', this.closeBoard.bind(this));
                    }, e.prototype.collectValue = function(t, e) {
                        this.fire('change', {
                            data: t,
                            index: e
                        }), this.data.set('selIndex', e);
                    }, e.prototype.nothing = function(t) {
                        t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
                    }, e.prototype.openBoard = function(t) {
                        var e = this,
                            n = this.data.get('selecting');
                        this.nextTick(function() {
                            return !n && e.data.set('selecting', !0);
                        }), this.fire('boardopen', {});
                    }, e.prototype.choose = function(t, e, n) {
                        this.nothing(t), this.collectValue(e, n), this.closeBoard(t);
                    }, e.prototype.closeBoard = function(t) {
                        this.data.get('selecting') && this.data.set('selecting', !1);
                    }, e.computed = {
                        column: function() {
                            var t = this.data.get('columns');
                            return Math.min(Math.max(t, 1), 3);
                        },
                        selIndex: function() {
                            return this.data.get('index');
                        },
                        value: function() {
                            var t = this.data.get('selIndex'),
                                e = this.data.get('dataList')[t];
                            return e && e.name || e;
                        },
                        list: function() {
                            for (var t = this.data.get('dataList'), e = this.data.get('column'), n = [], a = 0; a < t.length; a += e)
                                n.push(t.slice(a, a + e));
                            return n;
                        },
                        maxHeightStyle: function() {
                            var t = this.data.get('maxHeight');
                            return t ? 'height:' + t + ';overflow:scroll;' : '';
                        }
                    }, e;
                }(n(0).Component);
            e['default'] = i;
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.trimWhitespace = 'all', e.disappearTimer = null, e;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {
                            zindex: 10,
                            pos: null,
                            duration: 2000
                        };
                    }, e.prototype.attached = function() {
                        this.show(), this.hide();
                    }, e.prototype.show = function() {
                        var t = this.data.get('zindex'),
                            e = this.data.get('pos'),
                            n = [
                                'z-index:' + t + ';',
                                'opacity: 1;'
                            ].join(''),
                            a = '';
                        if (e)
                            for (var i in e)
                                a += i + ':' + e[i] + ';';
                        else {
                            var o = this.el;
                            a = [
                                'left: 50%;top: 50%;',
                                'margin-top: -' + o.clientHeight / 2 + 'px;',
                                'margin-left:-' + o.clientWidth / 2 + 'px;'
                            ].join('');
                        }
                        n += a;
                        var r = this;
                        setTimeout(function() {
                            r.fire('show', 'show'), r.data.set('customStyle', n);
                        }, 20);
                    }, e.prototype.hide = function() {
                        var t = this.el,
                            e = this,
                            n = this.data.get('duration');
                        this.disappearTimer = setTimeout(function() {
                            t.style.opacity = '0', setTimeout(function() {
                                t.style.zIndex = '-1', e.fire('hide', 'hide');
                            }, 310);
                        }, n);
                    }, e.prototype.detached = function() {
                        clearTimeout(this.disappearTimer);
                    }, e;
                }(n(0).Component);
            e['default'] = i;
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = n(0),
                o = a.__importDefault(n(16)),
                r = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {
                            title: '',
                            subTitle: '',
                            always: !1,
                            defaultBtnText: '取消',
                            primaryBtnText: '确认',
                            never: !1,
                            color: 'rgba(0, 0, 0, 0.5)',
                            posX: '0',
                            posY: '0',
                            style: '',
                            zIndex: 0
                        };
                    }, e.prototype.setState = function(t) {
                        this.data.set('never', t.checked);
                    }, e.prototype.close = function(t) {
                        this.fire('close', {
                            from: t
                        });
                    }, e.prototype.cancel = function() {
                        this.fire('cancel', {
                            never: this.data.get('never')
                        }), this.close('cancel');
                    }, e.prototype.confirm = function() {
                        this.fire('confirm', {
                            never: this.data.get('never')
                        }), this.close('confirm');
                    }, e.components = {
                        'c-checkbox': o['default']
                    }, e;
                }(i.Component);
            e['default'] = r;
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(59)],
                o = n(61),
                r = n(17)['default'];
            t.exports = n(17), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.trimWhitespace = 'all', e;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {
                            value: '',
                            name: '',
                            label: '',
                            checked: !1,
                            disabled: !1,
                            bgColor: '',
                            innerColor: ''
                        };
                    }, e.prototype.change = function(t) {
                        var e = (t.target || t.srcElement).checked;
                        this.data.set('currentValue', e), this.fire('change', {
                            checked: e,
                            value: this.data.get('value'),
                            name: this.data.get('name')
                        });
                    }, e.computed = {
                        currentValue: function() {
                            return this.data.get('checked');
                        },
                        propertyVal: function() {
                            var t = {},
                                e = this.data.get('value');
                            return e && (t.value = e), this.data.get('checked') && (t.checked = 'checked'), t;
                        }
                    }, e;
                }(n(0).Component);
            e['default'] = i;
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.trimWhitespace = 'all', e;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {
                            size: 'medium',
                            type: 'primary',
                            icon: '',
                            text: ''
                        };
                    }, e.prototype.inited = function() {
                        'big' === this.data.get('size') && this.data.set('size', 'auto');
                    }, e.prototype.buttonClick = function(t) {
                        this.fire('click', t);
                    }, e.computed = {
                        btnSize: function() {
                            var t = this.data.get('size');
                            return 'big' === t || 'medium' === t || 'large' === t ? '' : 'c-btn-' + t;
                        },
                        btnType: function() {
                            return 'c-btn-' + this.data.get('type');
                        }
                    }, e;
                }(n(0).Component);
            e['default'] = i;
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                ],
                o = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {
                            value: '',
                            placeholder: '',
                            type: 'input',
                            widthSize: '',
                            heightSize: '',
                            specialSize: 0,
                            waterMark: {
                                imgUrlOnce: '//',
                                imgUrlTwice: '//'
                            },
                            params: {},
                            isFocus: !1,
                            clearable: !1,
                            clickClear: !1
                        };
                    }, e.prototype.clearInput = function() {
                        this.data.set('clickClear', !0), this.data.set('value', '');
                    }, e.prototype.inputSpecialSize = function() {
                        var t = this.sourceSlotNameProps ? this.sourceSlotNameProps.length : 0,
                            e = this.data.get('clearable'),
                            n = this.data.get('inputWidthSize') - 22 - 26 * t - 26 * (e ? 1 : 0),
                            a = this.data.get('specialSize');
                        return a ? {
                            width: a + 'px'
                        } : {
                            width: n + 'px'
                        };
                    }, e.prototype.getInput = function() {
                        return this.ref('input') || this.ref('textarea');
                    }, e.prototype.clickWaterMark = function() {
                        this.getInput().focus(), this.data.set('isFocus', !0);
                    }, e.prototype.handleInput = function(t) {
                        this.fire('input', t);
                    }, e.prototype.handleFocus = function(t) {
                        this.data.set('isFocus', !0), this.fire('focus', t);
                    }, e.prototype.handleBlur = function(t) {
                        this.data.get('clickClear') ? (this.getInput().focus(), this.data.set('clickClear', !1)) : (this.data.set('isFocus', !1), this.fire('blur', t));
                    }, e.computed = {
                        inputWidthSize: function() {
                            parseInt(this.data.get('widthSize'), 10);
                            var t = i[this.data.get('widthSize') - 1];
                            return 32 * t + 16 * (t - 1);
                        },
                        inputHeightSize: function() {
                            var t = this.data.get('heightSize');
                            return 'input' === this.data.get('type') ? 'input-height-' + (t || 'mini') : 'textarea-height-large';
                        },
                        waterMarkStyle: function() {
                            var t = this.data.get('waterMark');
                            return '//' === t.imgUrlOnce && '//' === t.imgUrlTwice ? '' : [
                                'background:url(' + t.imgUrlOnce + ') no-repeat center;',
                                'background:url(' + t.imgUrlTwice + ') no-repeat center / contain;'
                            ].join('');
                        }
                    }, e;
                }(n(0).Component);
            e['default'] = o;
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = n(0),
                o = a.__importDefault(n(74)),
                r = a.__importDefault(n(78)),
                s = n(82),
                c = [
                    '日',
                    '一',
                    '二',
                    '三',
                    '四',
                    '五',
                    '六'
                ],
                l = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {
                            col: 4,
                            icon: '&#xe669;',
                            selectDate: new Date(),
                            firstDayOfWeek: 7,
                            checkAvailableBeforeNowDay: 0,
                            checkAvailableAfterNowDay: 0,
                            date: new Date(),
                            showCheckDate: !1,
                            renderTbody: []
                        };
                    }, e.prototype.dateChange = function() {
                        var t = this.data.get('selectDate');
                        t = new Date(t.setHours(0, 0, 0, 0));
                        var e = this.data.get('selectDateYear'),
                            n = this.data.get('selectDateMonth'),
                            a = this.data.get('selectDateDay'),
                            i = this.data.get('selectDateWeek');
                        this.fire('change', {
                            selectDate: t,
                            selectDateYear: e,
                            selectDateMonth: n,
                            selectDateDay: a,
                            selectDateWeek: i
                        });
                    }, e.prototype.stopPop = function(t) {
                        t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
                    }, e.prototype.checkDateOpen = function() {
                        var t = this,
                            e = this.data.get('showCheckDate');
                        this.nextTick(function() {
                            return !e && t.data.set('showCheckDate', !0);
                        });
                    }, e.prototype.checkDateClose = function() {
                        this.data.get('showCheckDate') && this.data.set('showCheckDate', !1);
                    }, e.prototype.range = function(t) {
                        return Array.apply(null, {
                            length: t
                        }).map(function(t, e) {
                            return e;
                        });
                    }, e.prototype.toNestedArr = function(t) {
                        return this.range(t.length / 7).map(function(e, n) {
                            var a = 7 * n;
                            return t.slice(a, a + 7);
                        });
                    }, e.prototype.getFirstDayOfMonth = function(t) {
                        var e = new Date(t.getTime());
                        return e.setDate(1), e.getDay();
                    }, e.prototype.getPrevMonthLastDays = function(t, e) {
                        if (e <= 0)
                            return [];
                        var n = new Date(t.getTime());
                        n.setDate(0);
                        var a = n.getDate();
                        return this.range(e).map(function(t, n) {
                            return a - (e - n - 1);
                        });
                    }, e.prototype.getMonthDays = function(t) {
                        var e = new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate();
                        return this.range(e).map(function(t, e) {
                            return e + 1;
                        });
                    }, e.prototype.getNowClass = function(t) {
                        var e = t.text,
                            n = t.type,
                            a = this.data.get('date'),
                            i = this.data.get('selectDate'),
                            o = parseInt('' + a.getFullYear() + (a.getMonth() + 1)),
                            r = parseInt('' + i.getFullYear() + (i.getMonth() + 1));
                        return 'current' === n && o === r && e === a.getDate();
                    }, e.prototype.getSelectClass = function(t) {
                        var e = t.text,
                            n = t.type,
                            a = this.data.get('selectDate');
                        return 'current' === n && e === a.getDate();
                    }, e.prototype.pickDay = function(t) {
                        var e = this,
                            n = t.text;
                        if ('current' === t.type) {
                            var a = new Date(),
                                i = this.data.get('selectDate');
                            a.setFullYear(i.getFullYear(), i.getMonth(), n), this.data.set('selectDate', a), this.checkDateClose(), this.nextTick(function() {
                                e.rows(), e.dateChange();
                            });
                        }
                    }, e.prototype.getLastDay = function(t, e) {
                        return new Date(t, e, 0).getDate();
                    }, e.prototype.changeMonth = function(t) {
                        var e = this,
                            n = (new Date(), this.data.get('checkAvailableBeforeNowDay')),
                            a = this.data.get('checkAvailableAfterNowDay'),
                            i = new Date(n),
                            o = new Date(a),
                            r = this.data.get('selectDate'),
                            s = new Date(new Date(r.getTime()).setDate(0)),
                            c = new Date(r.getFullYear(), r.getMonth() + 1, 1),
                            l = this.data.get('selectDate'),
                            p = new Date().getDate();
                        'prevMonth' === t ? (p = this.getLastDay(s.getFullYear(), s.getMonth() + 1), l = r.getDate() >= p ? new Date(s.setDate(p)) : new Date(s.setDate(r.getDate())), n && s.getFullYear() === i.getFullYear() && s.getMonth() === i.getMonth() && (l = r.getDate() <= i.getDate() ? new Date(i.setDate(i.getDate())) : new Date(i.setDate(r.getDate())))) : 'nextMonth' === t && (p = this.getLastDay(c.getFullYear(), c.getMonth() + 1), l = r.getDate() >= p ? new Date(c.setDate(p)) : new Date(c.setDate(r.getDate())), a && c.getFullYear() === o.getFullYear() && c.getMonth() === o.getMonth() && (l = (r.getDate(), o.getDate(), new Date(o.setDate(o.getDate()))))), this.data.set('selectDate', l), this.nextTick(function() {
                            e.rows();
                        });
                    }, e.prototype.checkPreOrCur = function(t) {
                        var e = this.data.get('checkAvailableBeforeNowDay'),
                            n = new Date(e),
                            a = n.getFullYear(),
                            i = n.getMonth() + 1,
                            o = this.data.get('checkAvailableAfterNowDay'),
                            r = new Date(o),
                            s = r.getFullYear(),
                            c = r.getMonth() + 1,
                            l = this.data.get('selectDate'),
                            p = l.getFullYear(),
                            d = l.getMonth() + 1;
                        if (e) {
                            if (a > p)
                                return {
                                    text: t,
                                    type: 'prev'
                                };
                            if (a === p) {
                                if (i > d)
                                    return {
                                        text: t,
                                        type: 'prev'
                                    };
                                if (i === d && t < n.getDate())
                                    return {
                                        text: t,
                                        type: 'prev'
                                    };
                            }
                        }
                        if (o) {
                            if (s < p)
                                return {
                                    text: t,
                                    type: 'prev'
                                };
                            if (s === p) {
                                if (c < d)
                                    return {
                                        text: t,
                                        type: 'prev'
                                    };
                                if (c === d && t > r.getDate())
                                    return {
                                        text: t,
                                        type: 'prev'
                                    };
                            }
                        }
                        return {
                            text: t,
                            type: 'current'
                        };
                    }, e.prototype.rows = function() {
                        var t = this,
                            e = [],
                            n = this.data.get('selectDate'),
                            i = this.data.get('realFirstDayOfWeek');
                        i = 'number' == typeof i ? i : 1;
                        var o = this.getFirstDayOfMonth(n);
                        o = 0 === o ? 7 : o;
                        var r = this.getPrevMonthLastDays(n, o - i).map(function(t) {
                                return {
                                    text: t,
                                    type: 'prev'
                                };
                            }),
                            s = this.getMonthDays(n).map(function(e) {
                                return t.checkPreOrCur(e);
                            });
                        e = a.__spreadArrays(r, s);
                        var c = this.range(42 - e.length).map(function(t, e) {
                            return {
                                text: e + 1,
                                type: 'next'
                            };
                        });
                        e = e.concat(c), this.data.set('renderTbody', this.toNestedArr(e));
                    }, e.prototype.attached = function() {
                        var t = this;
                        s.addEventListener(window, 'click', this.checkDateClose.bind(this)), this.rows(), this.watch('selectDate', function(e) {
                            t.rows();
                        }), this.watch('checkAvailableBeforeNowDay', function(e) {
                            t.rows();
                        }), this.watch('checkAvailableAfterNowDay', function(e) {
                            t.rows();
                        });
                    }, e.prototype.detached = function() {
                        s.removeEventListener(window, 'click', this.checkDateClose.bind(this));
                    }, e.components = {
                        'c-row': o['default'],
                        'c-span': r['default']
                    }, e.computed = {
                        realFirstDayOfWeek: function() {
                            var t = this.data.get('firstDayOfWeek');
                            return t < 1 || t > 6 ? 0 : Math.floor(t);
                        },
                        weekDays: function() {
                            var t = this.data.get('realFirstDayOfWeek');
                            return 'number' != typeof t || 0 === t ? c.slice() : c.slice(t).concat(c.slice(0, t));
                        },
                        selectDateYear: function() {
                            return this.data.get('selectDate').getFullYear();
                        },
                        selectDateMonth: function() {
                            return this.data.get('selectDate').getMonth() + 1;
                        },
                        selectDateDay: function() {
                            return this.data.get('selectDate').getDate();
                        },
                        selectDateWeek: function() {
                            var t = this.data.get('selectDate');
                            return c[t.getDay()];
                        },
                        hideLeftBtn: function() {
                            var t = this.data.get('checkAvailableBeforeNowDay'),
                                e = this.data.get('selectDate'),
                                n = new Date(t);
                            return !(!t || e.getFullYear() !== n.getFullYear() || e.getMonth() !== n.getMonth());
                        },
                        hideRightBtn: function() {
                            var t = this.data.get('checkAvailableAfterNowDay'),
                                e = this.data.get('selectDate'),
                                n = new Date(t);
                            return !(!t || e.getFullYear() !== n.getFullYear() || e.getMonth() !== n.getMonth());
                        }
                    }, e;
                }(i.Component);
            e['default'] = l;
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {
                            type: '',
                            vericalAlign: ''
                        };
                    }, e;
                }(n(0).Component);
            e['default'] = i;
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {
                            col: ''
                        };
                    }, e.computed = {
                        colName: function() {
                            var t = this.data.get('col');
                            return t ? 'c-span' + t : '';
                        }
                    }, e;
                }(n(0).Component);
            e['default'] = i;
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = n(0),
                o = a.__importDefault(n(6)),
                r = a.__importDefault(n(7)),
                s = n(5),
                c = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.trimWhitespace = 'all', e;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {
                            pasteShow: !1,
                            meetInfo: null,
                            shareInfo: '',
                            copyInit: !1
                        };
                    }, e.prototype.processMeetInfo = function() {
                        var t, e = this.data.get('meetInfo').data,
                            n = e.url,
                            a = this.getDuration(e.duration),
                            i = e.name,
                            o = this.processDate(e.startTime, e.endTime),
                            r = e.description,
                            s = e.roomowner;
                        e.needPasswd && (t = e.passwd);
                        var c = e.partner;
                        this.data.set('shareInfo', {
                            name: i,
                            meetTime: o,
                            duration: a,
                            meetUrl: n,
                            description: r,
                            passwd: t,
                            partner: c,
                            owner: s
                        });
                    }, e.prototype.getDuration = function(t) {
                        var e = '30分钟',
                            n = t / 60;
                        return n > 0.5 && (e = n + '小时'), e;
                    }, e.prototype.processDate = function(t, e) {
                        return t.date === e.date ? t.date + ' ' + t.time + '-' + e.time : t.date + ' ' + t.time + '-' + e.date + ' ' + e.time;
                    }, e.prototype.attached = function() {
                        this.processMeetInfo();
                    }, e.prototype.startMeet = function() {
                        var t = this,
                            e = this,
                            n = this.data.get('meetInfo').data,
                            a = this.data.get('shareInfo');
                        fetch('/home/meeting/data/detail?&r=' + n.roomTag, {
                            method: 'get'
                        }).then(function(t) {
                            return t.json();
                        }).then(function(t) {
                            if (0 === t.errno) {
                                var i = t.data,
                                    o = {
                                        startTime: i.startTime.time,
                                        startDateArr: i.startTime.date.split('/'),
                                        duration: i.duration,
                                        endTime: i.endTime.time,
                                        endDateArr: i.endTime.date.split('/'),
                                        name: i.name,
                                        jumpUrl: t.jumpUrl,
                                        jumpInfo: t.jumpInfo,
                                        roomowner: a.owner,
                                        r: n.roomTag,
                                        joinStatus: i.joinStatus
                                    };
                                a.passwd && (o.passwd = a.passwd), e.fire('meetStart', o);
                            }
                        }, function(e) {
                            t.dispatch('disconnectedError', !0);
                        });
                    }, e.prototype.share = function() {
                        var t, e, n = this.data.get('shareInfo'),
                            a = '';
                        n.partner && n.partner.length > 0 && (a = '参会人\uFF1A' + n.partner.join('\uFF1B')), document.querySelector('#copyInput') || ((t = document.createElement('textarea')).style.opacity = '0', t.value = n.owner + ' 邀请您参加百度视频云会议\n会议主题\uFF1A ' + n.name + '\n会议时间\uFF1A ' + n.meetTime, a && (t.value += '\n' + a), t.value += n.passwd ? '\n参会密码\uFF1A ' + n.passwd : '', t.value += n.description ? '\n会议描述\uFF1A' + n.description : '', t.value += '\n请点击下方链接参加会议\uFF1A\n' + n.meetUrl, t.contentEditable = !0, t.setAttribute('id', 'copyInput'));
                        var i = this.ref('quickContent');
                        if (!this.data.get('copyInit')) {
                            i.appendChild(t), t.select();
                            var o = void 0,
                                r = void 0;
                            r = document.getSelection(), (o = document.createRange()).selectNode(t), r.addRange(o), t.setSelectionRange(0, t.value.length);
                        }
                        e = document.execCommand('copy'), this.data.set('copyInit', !0), e && this.data.set('pasteShow', !0);
                    }, e.prototype.switchToast = function() {
                        this.data.set('pasteShow', !1);
                    }, e.components = {
                        'v-header': o['default'],
                        'v-foot': r['default'],
                        'c-btn': s.Button,
                        'c-toast': s.Toast
                    }, e.computed = {
                        pastePos: function() {
                            return {
                                top: '211px',
                                left: '147px'
                            };
                        },
                        meetType: function() {
                            return [
                                '快速会议',
                                '预约会议'
                            ][this.data.get('meetInfo').type];
                        }
                    }, e;
                }(i.Component);
            e['default'] = c;
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.trimWhitespace = 'all', e;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {
                            text: '',
                            tipText: '',
                            type: ''
                        };
                    }, e.prototype.footEvent = function(t) {
                        'video-manage' === t ? this.dispatch('openManage', 6) : 'feedback' === t && (this.logSend({
                            modName: 'superman:videomeeting',
                            evtName: 'feedbackClick'
                        }), this.dispatch('openFeedback', 2));
                    }, e.prototype.logSend = function(t) {
                        this.fire('logSend', t);
                    }, e;
                }(n(0).Component);
            e['default'] = i;
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = n(0),
                o = a.__importDefault(n(6)),
                r = a.__importDefault(n(7)),
                s = a.__importDefault(n(26)),
                c = n(5),
                l = n(8),
                p = n(9),
                d = [
                    '麦克风和摄像头',
                    '麦克风',
                    '摄像头'
                ],
                u = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.trimWhitespace = 'all', e;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {
                            meetInfo: {
                                startTime: '',
                                startDate: '',
                                endTime: '',
                                endDate: '',
                                name: ''
                            },
                            choice: {
                                live: !1,
                                liveStatus: '',
                                voice: !0,
                                voiceStatus: '',
                                info: !0
                            },
                            canstartMeet: {
                                name: !0,
                                pass: !1,
                                info: !0,
                                limit: !0
                            },
                            liveStreamFlag: null,
                            voiceStreamFlag: null,
                            type: '',
                            timeSpan: '',
                            submitBtn: '开启会议',
                            warn: {
                                nameText: '请输入参会人姓名',
                                passText: '请输入6位数字密码'
                            },
                            boxChecked: !1,
                            errorMsg: {
                                title: '',
                                sub1: '',
                                sub2: ''
                            }
                        };
                    }, e.prototype.chooseLimits = function(t) {
                        var e = this,
                            n = t.name,
                            a = 'choice.' + n;
                        if (t.checked) {
                            if ('info' === t.name) {
                                try {
                                    this.data.set('choice.info', !0), this.data.set('boxChecked', !0), window.localStorage.setItem('has-checked', '1');
                                } catch (i) {}
                                this.updateBtn();
                            }
                            this.data.set(a, !0), 'live' === n ? this.showVideo() : 'voice' === n && this.showVoice();
                        } else {
                            if ('info' === t.name)
                                try {
                                    this.data.set('choice.info', !1), this.data.set('boxChecked', !1), window.localStorage.setItem('has-checked', '0');
                                } catch (i) {}
                            this.data.set(a, !1), this.nextTick(function() {
                                e.changeLimit(n);
                            }), this.updateBtn(), this.stopMedia(n);
                        }
                    }, e.prototype.changeLimit = function(t) {
                        var e = this.data.get('choice');
                        this.data.get('liveState'), this.data.get('voiceState');
                        if (e.voice || e.live) {
                            if ('live' === t) {
                                if (this.data.set('noLimit', !!e.voiceStatus), !e.voiceStatus)
                                    return void this.showVoice();
                            } else if ('voice' === t && (this.data.set('noLimit', !!e.liveStatus), !e.liveStatus))
                                return void this.showVideo();
                        } else
                            this.data.set('noLimit', !1);
                        this.handleErrorMsg(e);
                    }, e.prototype.attached = function() {
                        var t = '';
                        try {
                            t = window.localStorage.getItem('has-checked');
                        } catch (n) {
                            t = '';
                        }
                        t && '1' === t ? (this.data.set('boxChecked', !0), this.data.set('canstartMeet.info', !0)) : (this.data.set('boxChecked', !1), this.data.set('canstartMeet.info', !1));
                        this.data.get('type');
                        this.showVoice();
                        var e = this.data.get('meetInfo');
                        this.data.set('input.name', e.roomowner), 0 === e.joinStatus ? (this.data.set('submitBtn', '会议未开始'), this.data.set('canstartMeet.limit', !1)) : 5 === e.joinStatus && (this.data.set('submitBtn', '会议已结束'), this.data.set('canstartMeet.limit', !1));
                    }, e.prototype.showVideo = function() {
                        this.ref('videoMedia').style = 'display:block', this.openVideo('live');
                    }, e.prototype.showVoice = function() {
                        this.ref('voiceMedia').style = 'display:block', this.openVideo('voice');
                    }, e.prototype.updateBtn = function() {
                        var t = this.data.get('boxChecked'),
                            e = this.data.get('canstartMeet'),
                            n = this.data.get('choice');
                        this.data.get('warn.name');
                        e.info ? n.info || this.data.set('canstartMeet.info', !1) : t && n.info ? this.data.set('canstartMeet.info', !0) : this.data.set('canstartMeet.info', !1);
                    }, e.prototype.stopMedia = function(t) {
                        this.data.get('choice');
                        var e = this.data.get(t + 'StreamFlag');
                        e && (e.getTracks().forEach(function(t) {
                            t.stop();
                        }), ('live' === t ? this.ref('videoMedia') : this.ref('voiceMedia')).style = 'display:none');
                    }, e.prototype.clearMedia = function(t) {
                        this.stopMedia('voice'), this.stopMedia('live'), 'back' === t ? this.dispatch('goback', 0) : this.dispatch('exitMeet', 0);
                    }, e.prototype.openVideo = function(t) {
                        var e, n = this,
                            a = this,
                            i = (this.data.get('noLimit'), {
                                audio: 'voice' === t,
                                video: 'live' === t && {
                                    width: 320,
                                    height: 128
                                }
                            });
                        e = 'live' === t ? document.querySelector('.videoMedia') : document.querySelector('.voiceMedia'), navigator.mediaDevices ? navigator.mediaDevices.getUserMedia(i).then(function(a) {
                            n.data.set('noLimit', !1), n.data.set(t + 'StreamFlag', a), e.srcObject = a, e.onloadedmetadata = function() {
                                e.play();
                            };
                        })['catch'](function(e) {
                            n.enumerateDevices(t, e.toString()), a.stopMedia('live'), a.stopMedia('voice'), n.data.set('noLimit', !0);
                        }) : this.data.set('noLimit', !0);
                    }, e.prototype.enumerateDevices = function(t, e) {
                        var n = this.data.get('choice');
                        switch (e) {
                            case 'NotFoundError: Requested device not found':
                                n[t + 'Status'] = 'notFound';
                                break;
                            case 'NotAllowedError: Permission denied':
                                n[t + 'Status'] = 'noPermission';
                                break;
                            case 'NotAllowedError: Permission denied by system':
                                n[t + 'Status'] = 'notFound';
                        }
                        this.handleErrorMsg(n);
                    }, e.prototype.handleErrorMsg = function(t) {
                        t.voice && t.live && t.voiceStatus && t.liveStatus ? this.setErrorMsg(t.voiceStatus, 0) : t.voice && t.voiceStatus ? this.setErrorMsg(t.voiceStatus, 1) : t.live && t.liveStatus && this.setErrorMsg(t.liveStatus, 2);
                    }, e.prototype.setErrorMsg = function(t, e) {
                        var n = d[e],
                            a = {
                                notFound: {
                                    title: '未检测到可用设备',
                                    sub1: '未检测到可用' + n + '\uFF0C请您插入' + n + '设备后重试\u3002',
                                    sub2: '为保证您的参会体验\uFF0C建议开启' + n + '入会\u3002'
                                },
                                noPermission: {
                                    title: n + '未授权',
                                    sub1: '需要许可才能访问您的' + n + '\u3002单击浏览器地址中的' + n + '按钮\uFF0C并允许访问',
                                    sub2: '如Mac系统授权后仍无法使用\uFF0C请打开\u3010系统偏好设置\u3011-> \u3010安全性与隐私\u3011->\u3010隐私\u3011选项中确认\u3010摄像头\u3011\u3010麦克风\u3011\u3010屏幕录制\u3011已经勾选上浏览器访问授权\uFF0C确认以上操作后点击刷新重试\u3002'
                                }
                            };
                        this.data.set('errorMsg', a[t]);
                    }, e.prototype.blurInput = function(t, e) {
                        if (t) {
                            var n = t.target;
                            if ('name' === e) {
                                if (!n.value)
                                    return void this.limitName(t);
                                this.checkName(n, e);
                            }
                        }
                    }, e.prototype.checkName = function(t, e, n) {
                        var a = this,
                            i = t.value,
                            o = this;
                        l.fetch('/home/meeting/data/checkword?word=' + i, {
                            method: 'get'
                        }).then(function(t) {
                            return t.json();
                        }).then(function(t) {
                            0 !== t.errno ? (a.data.set('warn.' + e, !0), a.data.set('canstartMeet.' + e, !1)) : (a.data.set('warn.' + e, !1), a.data.set('canstartMeet.' + e, !0), a.data.set('input.' + e, i), n && n.call(o)), a.data.set('input.nameChecked', !0);
                        }, function(t) {
                            a.dispatch('disconnectedError', !0);
                        });
                    }, e.prototype.intoMeet = function() {
                        var t = this,
                            e = this.data.get('input.name'),
                            n = this,
                            a = p.getBrowser(),
                            i = this.data.get('meetInfo'),
                            o = n.data.get('type'),
                            r = n.data.get('passwd');
                        if (e)
                            return 'Chrome' === a.type && a.versions >= 72 || 'Firefox' === a.type && a.versions >= 75 ? void setTimeout(function() {
                                var a = t.data.get('canstartMeet');
                                if ('backflow' === o)
                                    if (i.needPasswd && '0' !== i.needPasswd) {
                                        if (!r)
                                            return;
                                        r.length < 6 ? t.passStatus(!1) : a.name && a.info && a.pass && a.limit ? n.jumpUrl() : a.name || t.checkName({
                                            value: e
                                        }, 'name', t.buildJumpUrl);
                                    } else
                                        a.name && a.info && a.limit ? n.jumpUrl() : a.name || t.checkName({
                                            value: e
                                        }, 'name', t.buildJumpUrl);
                                else
                                    a.name && a.info && a.limit ? n.jumpUrl('exit') : a.name || t.data.get('input.nameChecked') || n.checkName({
                                        value: e
                                    }, 'name', t.buildJumpUrl);
                            }, 300) : (n.stopMedia('voice'), n.stopMedia('live'), n.dispatch('exitMeet', 0), void window.open('/home/meeting/show/join?r=' + i.r));
                    }, e.prototype.jumpUrl = function(t) {
                        this.stopMedia('voice'), this.stopMedia('live'), 'exit' === t && this.dispatch('exitMeet', 0), this.buildJumpUrl();
                    }, e.prototype.buildJumpUrl = function() {
                        var t = this.data.get('meetInfo'),
                            e = (this.data.get('choice'), this.data.get('liveState')),
                            n = this.data.get('voiceState'),
                            a = this.data.get('input.name'),
                            i = (this.ref('meetPass'), this.data.get('passwd')),
                            o = this.data.get('type'),
                            r = t.jumpUrl + '?',
                            s = t.jumpInfo,
                            c = {
                                r: t.r,
                                f: 'bd',
                                aid: s.aid,
                                token: s.token,
                                name: a,
                                microphone: !1,
                                camera: !1
                            };
                        for (var l in ((i || t.passwd) && (c.s = i || t.passwd), n && (c.microphone = !0), e && (c.camera = !0), c))
                            r += l + '=' + c[l] + '&';
                        r = r.substring(0, r.length - 1), 'backflow' === o ? window.location.href = r : window.open(r);
                    }, e.prototype.limitName = function(t) {
                        t ? (t.target.value ? this.data.set('canstartMeet.name', !0) : (this.data.set('input.name', ''), this.data.set('warn.name', !1), this.data.set('canstartMeet.name', !1)), this.data.set('input.nameChecked', !1)) : (this.data.set('input.name', ''), this.data.set('warn.name', !1), this.data.set('canstartMeet.name', !1));
                    }, e.prototype.limitPass = function(t) {
                        if (t) {
                            var e = t.target;
                            e && e.value && e.length < 6 && this.passStatus(!1);
                        }
                    }, e.prototype.passStatus = function(t) {
                        this.data.set('warn.pass', !t), this.data.set('canstartMeet.pass', t);
                    }, e.prototype.processPassShow = function(t) {
                        if (t) {
                            var e = t.target,
                                n = e ? e.value : '';
                            if (!n)
                                return this.data.set('passwd', ''), this.data.set('warn.pass', !1), void this.data.set('canstartMeet.pass', !1);
                            /.*[a-zA-Z\u4e00-\u9fa5]+.*$/.test(n) ? this.passStatus(!1) : (this.passStatus(!0), this.data.set('passwd', n));
                        }
                    }, e.components = {
                        'v-header': o['default'],
                        'v-foot': r['default'],
                        'c-btn': c.Button,
                        'c-checkbox': c.Checkbox,
                        'c-input': c.Input,
                        'v-warn': s['default']
                    }, e.computed = {
                        liveState: function() {
                            var t = this.data.get('choice');
                            return t.live && !t.liveStatus;
                        },
                        voiceState: function() {
                            var t = this.data.get('choice');
                            return t.voice && !t.voiceStatus;
                        },
                        timeSpan: function() {
                            var t = this.data.get('meetInfo.duration'),
                                e = t / 60;
                            return e >= 1 ? e + '小时' : t + '分钟';
                        },
                        checkboxType: function() {
                            return 'backflow' === this.data.get('type') ? 'transparent' : '';
                        },
                        btnUseful: function() {
                            var t = this.data.get('canstartMeet'),
                                e = this.data.get('meetInfo.needPasswd');
                            return e && '0' !== e ? t.name && t.info && t.limit && t.pass : t.name && t.info && t.limit;
                        }
                    }, e;
                }(i.Component);
            e['default'] = u;
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(94)],
                o = n(96),
                r = n(27)['default'];
            t.exports = n(27), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.trimWhitespace = 'all', e;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {
                            text: '请重新输入'
                        };
                    }, e;
                }(n(0).Component);
            e['default'] = i;
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = n(0),
                o = a.__importDefault(n(6)),
                r = a.__importDefault(n(7)),
                s = a.__importDefault(n(26)),
                c = a.__importDefault(n(101)),
                l = n(5),
                p = n(8),
                d = [
                    '日',
                    '一',
                    '二',
                    '三',
                    '四',
                    '五',
                    '六'
                ],
                u = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.trimWhitespace = 'all', e;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {
                            openPassInput: !1,
                            showsug: !1,
                            passShow: !0,
                            roomName: '',
                            startTime: '',
                            endTime: '',
                            passwd: '',
                            roomPartner: [],
                            canOpenMeet: {
                                title: !1,
                                pass: !0,
                                desc: !0
                            },
                            orderData: {
                                startIndex: 0,
                                endIndex: 1
                            },
                            startSelectList: [],
                            endSelectList: [],
                            startCalData: {
                                calObj: null,
                                limitBefore: new Date(),
                                limitAfter: 0
                            },
                            startCalDate: new Date(),
                            endCalData: {
                                calObj: null,
                                limitBefore: new Date().getTime() + 3600000,
                                limitAfter: new Date().getTime() + 90000000,
                                initShow: new Date()
                            },
                            showPlaceholder: !0,
                            roomId: '',
                            updatePasswd: 0,
                            modifyMeet: !1,
                            boxChecked: !1,
                            description: '',
                            partner: [],
                            inputStatus: {
                                title: !1,
                                desc: !1
                            },
                            warn: {
                                titleText: '请重新输入会议主题',
                                passText: '请输入6位数字密码',
                                descText: '请重新输入会议详情'
                            }
                        };
                    }, e.prototype.attached = function() {
                        var t = this;
                        this.initPartner(), this.initCalDate(), p.fetch('/home/meeting/data/meeting', {
                            method: 'get'
                        }).then(function(t) {
                            return t.json();
                        }).then(function(e) {
                            if (0 === e.errno) {
                                var n = e.data.mailList;
                                t.data.set('mailList', n);
                            }
                        }, function(e) {
                            t.dispatch('disconnectedError', !0);
                        });
                    }, e.prototype.initCalDate = function() {
                        var t = this.data.get('endCalData').initShow || new Date(),
                            e = this.data.get('startCalDate') || new Date(),
                            n = this.data.get('orderData'),
                            a = n.startIndex || 0,
                            i = n.endIndex || 0,
                            o = this.data.get('passwd');
                        this.data.get('openPassInput') && (this.ref('passinput').value = o);
                        this.data.set('startTime', n.startSelectList[a]), this.data.set('endTime', n.endSelectList[i]), this.data.set('startCalData.calObj', this.calParser(e)), this.data.set('endCalData.calObj', this.calParser(t));
                    }, e.prototype.trimDate = function(t) {
                        return t.map(function(t) {
                            return 0 === parseInt(t.slice(0, 1)) ? t.substr(1) : t;
                        });
                    }, e.prototype.calParser = function(t) {
                        return {
                            selectDate: t,
                            selectDateYear: new Date(t).getFullYear(),
                            selectDateMonth: new Date(t).getMonth() + 1,
                            selectDateDay: new Date(t).getDate(),
                            selectDateWeek: d[new Date(t).getDay()]
                        };
                    }, e.prototype.initPartner = function() {
                        var t = this.data.get('partner');
                        if (t.length > 0) {
                            this.data.set('showPlaceholder', !1);
                            var e = this.ref('sugRef');
                            t.map(function(t) {
                                e.insertPartner(t);
                            });
                        }
                    }, e.prototype.setPartner = function(t) {
                        this.data.set('partner', t);
                    }, e.prototype.checkAvailableCal = function() {
                        var t, e, n = this.data.get('startCalData.calObj');
                        n ? (t = new Date(n.selectDate.getTime() + 1800000), e = n.selectDate.getTime() + 86400000) : (t = new Date(new Date().getTime() + 1800000), e = new Date().getTime() + 86400000), this.data.set('endCalData.limitBefore', t), this.data.set('endCalData.initShow', t), this.data.set('endCalData.calObj', {
                            selectDate: t,
                            selectDateDay: t.getDate(),
                            selectDateMonth: t.getMonth() + 1,
                            selectDateYear: t.getFullYear()
                        }), this.data.set('endCalData.limitAfter', e), this.data.set('orderData.endIndex', 1);
                    }, e.prototype.openPass = function(t) {
                        if ('passwd' === t.name) {
                            var e = this.data.get('openPassInput'),
                                n = this.data.get('updatePasswd'),
                                a = this.data.get('modifyMeet');
                            this.data.set('openPassInput', !e), t.checked || (this.data.set('passwd', ''), this.data.set('warn.pass', !1)), a && 0 === n && (this.data.set('updatePasswd', 1), this.clearPasswdInput());
                        }
                    }, e.prototype.clearPasswdInput = function() {
                        this.ref('passinput').value = '', this.data.set('passwd', ''), this.data.set('passShow', !0);
                    }, e.prototype.getValue = function(t) {
                        if (t) {
                            var e = t.target;
                            e.value && (this.data.set('roomName', e.value), this.checkName(e.value));
                        }
                    }, e.prototype.checkDesc = function(t) {
                        if (t) {
                            var e = t.target;
                            e.value && this.checkName(e.value, 'desc');
                        }
                    }, e.prototype.updateDesc = function(t) {
                        t && (t.target.value || (this.data.set('warn.desc', !1), this.data.set('canOpenMeet.desc', !0)));
                    }, e.prototype.switchPass = function(t) {
                        var e = 'show' === t,
                            n = this.ref('passinput'),
                            a = this.data.get('passwd'),
                            i = this.data.get('updatePasswd');
                        if (this.data.get('modifyMeet') && 0 === i)
                            return this.data.set('updatePasswd', 1), n.value = '', this.data.set('passwd', ''), void n.focus();
                        this.data.set('passShow', e), a && (n.value = 'show' != t ? a.replace(/./g, '*') : a);
                    }, e.prototype.processPassFocus = function() {
                        var t = this.data.get('updatePasswd');
                        this.data.get('modifyMeet') && 0 === t && (this.data.set('updatePasswd', 1), this.clearPasswdInput());
                    }, e.prototype.passStatus = function(t) {
                        this.data.set('warn.pass', !t), this.data.set('canOpenMeet.pass', t);
                    }, e.prototype.limitPass = function() {
                        var t = this.ref('passinput').value;
                        if (t && t.length < 6)
                            return this.passStatus(!1), !1;
                    }, e.prototype.processPassShow = function(t) {
                        var e = this.ref('passinput'),
                            n = e.value;
                        if (n) {
                            if (/.*[a-zA-Z\u4e00-\u9fa5]+.*$/.test(n))
                                return this.passStatus(!1), !1;
                            if (!(n.length > 6))
                                if (this.passStatus(!0), this.data.get('passShow'))
                                    this.data.set('passwd', n);
                                else {
                                    var a = this.data.get('passwd');
                                    if (a.length > n.length)
                                        a = (a = a.substring(0, n.length - 1)).substring(0, 6), this.data.set('passwd', a);
                                    else {
                                        var i = n.split('*');
                                        a += i[i.length - 1], e.value = n.replace(/./g, '*'), a = a.substring(0, 6), this.data.set('passwd', a);
                                    }
                                }
                        } else
                            this.data.set('passwd', '');
                    }, e.prototype.openSelect = function(t) {
                        var e = document.body.getAttribute('class');
                        document.body.setAttribute('class', e + ' video-scroll');
                    }, e.prototype.updateDataList = function(t, e) {
                        var n = this.data.get(t + 'CalData.calObj'),
                            a = new Date(),
                            i = (this.data.get('startSelectList'), this.updateTime('start')),
                            o = this.updateTime('end'),
                            r = [],
                            s = [];
                        if (n.selectDateYear !== a.getFullYear() || n.selectDateMonth !== a.getMonth() + 1 || n.selectDateDay !== a.getDate()) {
                            var c = this.isOneDay();
                            'start' === t ? ('cal' !== e ? (s = this.formatEndList(i, !0), o = this.updateTime('end', s[1], 1)) : (i = this.updateTime('start', '0:00', 1), o = this.updateTime('end', '1:00', 1), r = this.formatStartList(i, 1), s = this.formatEndList(i, !0), this.data.set('orderData.startSelectList', r), this.data.set('orderData.startIndex', 0)), this.data.set('orderData.endSelectList', s), 'cal' !== e && o.hour > i.hour || i.hour === o.hour && o.minutes > i.minutes ? this.data.set('orderData.endIndex', s.indexOf(o.time)) : this.data.set('orderData.endIndex', 1)) : (c ? (r = this.formatEndList(i, !0), this.data.set('orderData.endIndex', 1)) : (r = this.formatEndList(i, !1), this.data.set('orderData.endIndex', 0)), this.data.set('orderData.endSelectList', r));
                        } else {
                            var l = a.getHours(),
                                p = a.getMinutes();
                            'cal' === e ? (i = this.updateTime('start', l + ':' + p), 'start' === t ? (r = this.formatStartList(i, 1), s = this.formatEndList(i, !0), this.data.set('orderData.startSelectList', r), this.data.set('orderData.startIndex', 0), this.data.set('orderData.endSelectList', s)) : (s = this.formatEndList(i, !0), this.data.set('orderData.endSelectList', s))) : (s = this.formatEndList(i, !0), this.data.set('orderData.endSelectList', s), s.length > 1 && '23:00' !== i.time ? this.data.set('orderData.endIndex', 1) : this.data.set('orderData.endIndex', 0), this.data.set('endTime', s[1]));
                        }
                    }, e.prototype.formatStartList = function(t, e) {
                        var n = t,
                            a = [],
                            i = n.hour;
                        n.minutes;
                        for (var o = i; o < 24; o++)
                            o > i || 0 === i ? (a.push(o + ':00'), a.push(o + ':30')) : n.minutes <= 30 && o === i && a.push(o + ':30');
                        return a;
                    }, e.prototype.formatEndList = function(t, e) {
                        var n = t.hour,
                            a = t.minutes,
                            i = e;
                        !a && i && 23 !== n || (n += 1);
                        var o = [];
                        return 24 === n && (i = !1, this.updateEndCal()), i ? (o = this.timeLoop(n, 24), a || o.shift()) : (o = this.timeLoop(0, n), a || o.pop()), o;
                    }, e.prototype.updateEndCal = function() {
                        this.data.get('endCalData');
                        var t = this.data.get('startCalData').calObj,
                            e = new Date(t.selectDate.getTime() + 86400000),
                            n = this.calParser(e),
                            a = new Date(n.selectDateYear + '/' + n.selectDateMonth + '/' + n.selectDateDay + ' 00:00:00');
                        this.data.set('endCalData.limitBefore', a), this.data.set('endCalData.initShow', a), this.data.set('endCalData.calObj', n);
                    }, e.prototype.timeLoop = function(t, e) {
                        for (var n = [], a = t; a < e; a++)
                            n.push(a + ':00'), n.push(a + ':30');
                        return n;
                    }, e.prototype.updateTime = function(t, e, n) {
                        var a;
                        e ? (a = e, this.data.set(t + 'Time', e)) : a = this.data.get(t + 'Time');
                        var i = a.split(':');
                        return i ? {
                            hour: Number(i[0]),
                            minutes: Number(i[1]),
                            time: a
                        } : null;
                    }, e.prototype.isOneDay = function() {
                        var t = this.data.get('startCalData.calObj'),
                            e = this.data.get('endCalData.calObj');
                        return t || (t = {
                            selectDateDay: new Date().getDate()
                        }), t.selectDateDay === e.selectDateDay;
                    }, e.prototype.upDateMeet = function(t) {
                        var e = this,
                            n = this.data.get('updatePasswd');
                        this.data.get('modifyMeet') && 0 === n && t.set('passwd', ''), t.append('roomId', this.data.get('roomId')), t.append('updatePasswd', n);
                        var a = this;
                        p.fetch('/home/meeting/submit/update', {
                            method: 'post',
                            body: t
                        }).then(function(t) {
                            return t.json();
                        }).then(function(t) {
                            0 === t.errno && (t.data.url = a.data.get('url'), t.data.passwd = e.data.get('passwd'), t.data.roomTag = a.data.get('roomTag'), a.fire('intoMidpage', t.data));
                        }, function(t) {
                            e.dispatch('disconnectedError', !0);
                        });
                    }, e.prototype.openMeet = function() {
                        var t = this,
                            e = this.data.get('modifyMeet'),
                            n = this.data.get('roomName'),
                            a = this.data.get('description'),
                            i = this.data.get('inputStatus');
                        n && !i.title && this.checkName(n), a && !i.desc && this.checkName(a, 'desc'), setTimeout(function() {
                            var i = t.data.get('canOpenMeet');
                            if (i.title && i.pass && i.desc) {
                                var o = new FormData(),
                                    r = t.getTimeStamp('start'),
                                    s = t.getTimeStamp('end'),
                                    c = t;
                                o.append('roomName', n), o.append('startTime', '' + r), o.append('endTime', '' + s), o.append('passwd', t.data.get('passwd')), a && o.append('description', t.data.get('description')), t.data.get('partner') && t.data.get('partner').length && o.append('roomPartner', JSON.stringify(t.data.get('partner'))), o.append('bsToken', t.data.get('orderData.bsToken')), e ? t.upDateMeet(o) : p.fetch('/home/meeting/submit/order', {
                                    method: 'post',
                                    body: o
                                }).then(function(t) {
                                    return t.json();
                                }).then(function(e) {
                                    0 === e.errno && (e.data.passwd = t.data.get('passwd'), c.fire('intoMidpage', e.data));
                                }, function(e) {
                                    t.dispatch('disconnectedError', !0);
                                });
                            }
                        }, 300);
                    }, e.prototype.getTimeStamp = function(t) {
                        var e = this.data.get(t + 'CalData').calObj,
                            n = this.data.get(t + 'Time');
                        if (e && n) {
                            var a = e.selectDateYear + '/' + e.selectDateMonth + '/' + e.selectDateDay;
                            return new Date(a + ' ' + n).getTime() / 1000;
                        }
                        return 'start' === t ? Math.floor(new Date().getTime() / 1000) : Math.floor((new Date().getTime() + 3600000) / 1000);
                    }, e.prototype.checkName = function(t, e) {
                        var n = this;
                        e || (e = 'title'), p.fetch('/home/meeting/data/checkword?word=' + t, {
                            method: 'get'
                        }).then(function(t) {
                            return t.json();
                        }).then(function(t) {
                            0 !== t.errno ? (n.data.set('warn.' + e, !0), n.data.set('canOpenMeet.' + e, !1), n.data.set('inputStatus.' + e, !1)) : (n.data.set('canOpenMeet.' + e, !0), n.data.set('warn.' + e, !1), n.data.set('inputStatus.' + e, !0));
                        }, function(t) {
                            n.dispatch('disconnectedError', !0);
                        });
                    }, e.prototype.chooseDate = function(t, e) {
                        'start' === e ? (this.data.set('startCalData.calObj', t), this.checkAvailableCal(), this.updateDataList('start', 'cal')) : (this.data.set('endCalData.calObj', t), this.updateDataList('end', 'cal'));
                    }, e.prototype.chooseTime = function(t, e) {
                        this.data.set('orderData.' + e + 'Index', t.index), 'start' === e ? (this.data.set('startTime', t.data), this.updateDataList('start', 'sel')) : this.data.set('endTime', t.data);
                    }, e.prototype.limitName = function(t) {
                        t && (t.target.value ? this.data.set('canOpenMeet.title', !0) : this.data.set('warn.title', !1));
                    }, e.components = {
                        'v-header': o['default'],
                        'v-foot': r['default'],
                        'c-input': l.Input,
                        'c-btn': l.Button,
                        'c-checkbox': l.Checkbox,
                        'c-cal': l.Calendar,
                        'c-select': l.Select,
                        'v-warn': s['default'],
                        'v-sug': c['default']
                    }, e;
                }(i.Component);
            e['default'] = u;
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.trimWhitespace = 'all', e;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {
                            showPlaceholder: !0,
                            mailList: null,
                            emails: null,
                            partner: [],
                            inputStatus: !1
                        };
                    }, e.prototype.processSug = function() {
                        this.ref('emailInput').focus();
                    }, e.prototype.inputFocus = function() {
                        var t = this.ref('emailInput');
                        t.value && -1 !== t.value.indexOf('@') && this.data.set('showsug', !0), this.data.set('showPlaceholder', !1), this.hideSug();
                    }, e.prototype.startInput = function(t) {
                        var e, n = this.data.get('mailList'),
                            a = this.ref('emailInput').value;
                        if (a) {
                            this.data.set('inputStatus', !0);
                            var i = a.split('@');
                            if (i.length > 1) {
                                var o = i[0],
                                    r = i[1];
                                if (r) {
                                    var s = this.findMatchMail(r, o);
                                    e = 0 === s.length ? [a] : s;
                                } else
                                    e = n.map(function(t) {
                                        return o + '@' + t;
                                    });
                                this.data.set('emails', e), this.data.set('showsug', !0);
                            } else
                                this.data.set('showsug', !1);
                        } else
                            this.data.set('inputStatus', !1);
                    }, e.prototype.findMatchMail = function(t, e) {
                        for (var n = this.data.get('mailList'), a = [], i = 0; i < n.length; i++)
                            0 === n[i].indexOf(t) && a.push(e + '@' + n[i]);
                        return a;
                    }, e.prototype.defineEmail = function(t) {
                        13 === t.keyCode && this.insertPartner(t.target.value);
                    }, e.prototype.emailInputBlur = function() {
                        this.ref('emailInput').value || (document.querySelector('.selectSugOpt') || this.data.set('showPlaceholder', !0), this.data.set('inputStatus', !1));
                    }, e.prototype.hideSug = function() {
                        var t = this,
                            e = t.ref('sugList'),
                            n = t.ref('emailWrapper');
                        document.querySelector('.v-container').addEventListener('click', function(a) {
                            t.contains(e, a.target) || t.contains(n, a.target) || t.data.set('showsug', !1);
                        });
                    }, e.prototype.insertPartner = function(t) {
                        var e = this,
                            n = this.ref('sugWrapper'),
                            a = document.createElement('div'),
                            i = document.createElement('span'),
                            o = document.createElement('i'),
                            r = this.data.get('partner');
                        this.data.set('inputStatus', !1), a.setAttribute('class', 'selectSugOpt'), i.setAttribute('class', 'selectSugVal'), i.innerText = t.split('@')[0], o.setAttribute('class', 'c-icon selectSugIcon c-color-gray2'), o.innerHTML = '&#xe610;', a.appendChild(i), a.appendChild(o), n.appendChild(a);
                        var s = this.ref('emailInput');
                        s.value = '', s.blur();
                        document.querySelectorAll('.selectSugIcon');
                        var c = document.querySelectorAll('.selectSugOpt');
                        r.push(t), e.data.set('partner', r), e.fire('setPartner', e.data.get('partner')), c.forEach(function(t) {
                            t.onclick = function(t) {
                                if ('I' === t.target.nodeName) {
                                    var n = t.target.parentNode,
                                        a = t.target.parentNode.childNodes[0].textContent;
                                    r = r.filter(function(t) {
                                        if (-1 === t.indexOf(a))
                                            return t;
                                    }), e.data.set('partner', r), n.remove(), e.fire('setPartner', e.data.get('partner')), document.querySelector('.selectSugOpt') || s.value || e.data.set('showPlaceholder', !0);
                                }
                                t.stopPropagation(), t.preventDefault();
                            };
                        }), e.data.set('showsug', !1);
                    }, e.prototype.contains = function(t, e) {
                        for (var n = e; n;) {
                            if (n === t)
                                return !0;
                            n = n.parentNode;
                        }
                        return !1;
                    }, e;
                }(n(0).Component);
            e['default'] = i;
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = n(0),
                o = a.__importDefault(n(6)),
                r = a.__importDefault(n(7)),
                s = n(5),
                c = n(8),
                l = n(31),
                p = n(9),
                d = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.trimWhitespace = 'all', e;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {
                            showFeedBack: !0,
                            errorWarn: !1,
                            isLogin: '',
                            instance: null
                        };
                    }, e.prototype.logSend = function(t) {
                        this.fire('logSend', t);
                    }, e.prototype.quickMeet = function() {
                        var t = this;
                        if (this.logSend({
                                modName: 'superman:videomeeting',
                                evtName: 'quickMeetClick'
                            }), this.data.get('isLogin')) {
                            var e = new FormData(),
                                n = this.data.get('bsToken');
                            e.append('start', '1'), e.append('bsToken', n), c.fetch('/home/meeting/submit/quickstart', {
                                method: 'post',
                                body: e
                            }).then(function(t) {
                                return t.json();
                            }).then(function(e) {
                                0 === e.errno && e.data ? t.fire('quickmeet', e) : 2009 === e.errno && t.data.set('errorWarn', !0);
                            })['catch'](function(e) {
                                t.dispatch('disconnectedError', !0);
                            });
                        } else
                            l.bdsLogin();
                    }, e.prototype.orderMeet = function() {
                        if (this.logSend({
                                modName: 'superman:videomeeting',
                                evtName: 'orderMeetClick'
                            }), this.data.get('isLogin')) {
                            var t = this.selectListInit('Start'),
                                e = this.selectListInit('End'),
                                n = {
                                    startSelectList: t,
                                    endSelectList: e,
                                    endIndex: e.length > 1 ? 1 : 0
                                };
                            this.fire('orderMeet', n);
                        } else
                            l.bdsLogin();
                    }, e.prototype.selectListInit = function(t) {
                        var e, n = [],
                            a = (e = 'Start' === t ? new Date() : new Date(new Date().getTime() + 1800000)).getHours();
                        e.getMinutes() > 30 && (a += 1);
                        for (var i = a; i < 24; i++)
                            i > e.getHours() && n.push(i + ':00'), n.push(i + ':30');
                        return n;
                    }, e.prototype.meetManage = function() {
                        this.logSend({
                            modName: 'superman:videomeeting',
                            evtName: 'meetManageClick'
                        }), this.data.get('isLogin') ? this.fire('manageMeet', null) : l.bdsLogin();
                    }, e.prototype.lessThanIE9 = function() {
                        var t = navigator.userAgent;
                        if (t.indexOf('compatible') > -1 && t.indexOf('MSIE') > -1 && (new RegExp('MSIE (\\d+\\.\\d+);').test(t), parseFloat(RegExp.$1) <= 9))
                            return !0;
                        return !1;
                    }, e.prototype.inited = function() {
                        this.data.set('showFeedBack', !this.lessThanIE9());
                    }, e.prototype.showTips = function() {
                        var t = p.getBrowser();
                        return !('Chrome' === t.type && t.versions >= 72 || 'Firefox' === t.type && t.versions >= 75);
                    }, e.prototype.switchToast = function() {
                        this.data.set('errorWarn', !1);
                    }, e.components = {
                        'v-header': o['default'],
                        'v-foot': r['default'],
                        'c-btn': s.Button,
                        'c-toast': s.Toast
                    }, e.computed = {
                        pastePos: function() {
                            return {
                                top: '211px',
                                left: '105px'
                            };
                        }
                    }, e;
                }(i.Component);
            e['default'] = d;
        },
        function(t, e, n) {
            'use strict';

            function a() {
                fetch('/home/meeting/data/meeting', {
                    method: 'get'
                }).then(function(t) {
                    return t.json();
                }).then(function(t) {
                    0 === t.errno && t.bindInfo && (1 === t.bindInfo.isBindPhone ? window.location.reload() : $.getScript('//passport.baidu.com/passApi/js/uni_armorwidget_wrapper.js', function() {
                        passport.pop.ArmorWidget('bindmobile', {
                            token: t.bindInfo.bindToken,
                            title: '绑定手机',
                            msg: '',
                            auth_title: '绑定手机',
                            auth_msg: '为了保证您的帐号安全\uFF0C绑定手机前请先进行安全验证',
                            onSubmitSuccess: function(t, e) {
                                window.location.reload(!0);
                            },
                            onSubmitFail: function(t, e) {}
                        }).show();
                    }));
                });
            }
            e.__esModule = !0, e.bdsLogin = e.login = void 0, e.login = function(t) {
                return new Promise(function(e, n) {
                    $.getScript('//passport.baidu.com/passApi/js/uni_login_wrapper.js', function() {
                        t = passport.pop.init({
                            loginVersion: 'v4',
                            apiOpt: {
                                staticPage: window.location.protocol + '//www.baidu.com/cache/user/html/v3Jump.html',
                                product: 'pcbaidumeeting',
                                u: 'http://passport.baidu.com/',
                                memberPass: !0,
                                safeFlag: 0
                            },
                            cache: !0,
                            forgetLink: 'https://passport.baidu.com/?getpass_index',
                            registerLink: 'https://passport.baidu.com/v2/?reg&tpl=&u=',
                            authsite: [],
                            tangram: !0,
                            onLoginSuccess: function(e) {
                                e.returnValue = !1, a(), t.hide();
                            }
                        }), e(t);
                    });
                });
            }, e.bdsLogin = function() {
                bds && bds.se && bds.se.login && bds.se.login.open(function() {
                    a();
                });
            };
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = n(0),
                o = a.__importDefault(n(6)),
                r = n(5),
                s = a.__importDefault(n(113)),
                c = [
                    '日',
                    '一',
                    '二',
                    '三',
                    '四',
                    '五',
                    '六'
                ],
                l = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.trimWhitespace = 'all', e;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {
                            meetStatus: 0,
                            myMeet: -1,
                            myMeetList: [{
                                name: '全部',
                                value: -1
                            }, {
                                name: '我发起的',
                                value: 0
                            }, {
                                name: '我参与的',
                                value: 1
                            }],
                            meetList: [],
                            originList: [],
                            fixedTitle: '',
                            loadStatus: 2,
                            page: 0,
                            pasteShow: !1,
                            noMeet: !1,
                            bsToken: ''
                        };
                    }, e.prototype.onHide = function() {
                        this.data.set('pasteShow', !1);
                    }, e.prototype.shareEvent = function(t) {
                        this.data.set('pasteShow', t);
                    }, e.prototype.meetStart = function(t) {
                        this.fire('meetStart', t);
                    }, e.prototype.reOrderMeet = function(t) {
                        this.fire('orderMeet', t);
                    }, e.prototype.modifyMeet = function(t) {
                        this.fire('modifyMeet', t);
                    }, e.prototype.changeMeetStatus = function(t) {
                        var e = this;
                        this.data.get('meetStatus') !== t && (this.data.set('meetStatus', t), this.data.set('meetList', []), this.data.set('originList', []), this.data.set('page', 0), this.data.set('loadStatus', 2), this.data.set('noMeet', !1), this.nextTick(function() {
                            e.getMeetData();
                        }));
                    }, e.prototype.parseDateWeek = function(t) {
                        var e = new Date(t);
                        return '周' + c[e.getDay()];
                    }, e.prototype.parseDate = function(t) {
                        return new Date(t + 28800000).toJSON().substr(0, 10).replace(/-/g, '.');
                    }, e.prototype.parseShowDate = function(t, e) {
                        var n = new Date().getTime(),
                            a = this.parseDate(n),
                            i = this.parseDate(new Date(n - 86400000).getTime()),
                            o = this.parseDate(new Date(n + 86400000).getTime());
                        return t === a ? '今天' : t === i ? '昨天' : t === o ? '明天' : t + ' ' + e;
                    }, e.prototype.getUrlParams = function(t, e) {
                        var n = '';
                        for (var a in e)
                            n += a + '=' + e[a] + '&';
                        return t + '?' + (n = n.substr(0, n.length - 1));
                    }, e.prototype.getMeetData = function() {
                        var t = this,
                            e = this,
                            n = this.data.get('meetStatus'),
                            i = this.data.get('myMeet'),
                            o = this.data.get('page'),
                            r = this.ref('areaContent'),
                            s = this.data.get('meetList'),
                            c = this.data.get('originList');
                        this.data.set('loadStatus', 2), this.nextTick(function() {
                            fetch(t.getUrlParams('/home/meeting/data/list', {
                                role: i,
                                status: n,
                                page: o,
                                pn: 10
                            })).then(function(t) {
                                return t.json();
                            }).then(function(n) {
                                n.data.info && 0 === n.data.info.length && 0 === o ? t.data.set('noMeet', !0) : (t.data.set('noMeet', !1), c = a.__spreadArrays(c, n.data.info), s = e.parseMeetList(c), e.data.set('originList', c), e.data.set('meetList', s), n.data.count < 10 ? e.data.set('loadStatus', 0) : e.data.set('loadStatus', 1), e.nextTick(function() {
                                    r && (r.removeEventListener('scroll', e.scrollEvent), r.addEventListener('scroll', e.scrollEvent.bind(e)));
                                }));
                            }, function(e) {
                                t.dispatch('disconnectedError', !0), t.data.set('loadStatus', 1);
                            });
                        });
                    }, e.prototype.loadMoreData = function(t) {
                        var e = this,
                            n = this.data.get('page');
                        1 === t && (this.data.set('page', n + 1), this.nextTick(function() {
                            e.getMeetData();
                        }));
                    }, e.prototype.parseMeetList = function(t) {
                        for (var e = [], n = 0; n < t.length; n++)
                            0 !== n ? e[e.length - 1].titleDate === this.parseDate(1000 * t[n].startTime.utcTime) ? (e[e.length - 1].msg.push(t[n]), e[e.length - 1].endCount = n + 1) : e.push({
                                titleDate: this.parseDate(1000 * t[n].startTime.utcTime),
                                week: this.parseDateWeek(1000 * t[n].startTime.utcTime),
                                startCount: n,
                                endCount: n + 1,
                                msg: [t[n]]
                            }) : e.push({
                                titleDate: this.parseDate(1000 * t[n].startTime.utcTime),
                                week: this.parseDateWeek(1000 * t[n].startTime.utcTime),
                                startCount: 0,
                                endCount: 1,
                                msg: [t[n]]
                            });
                        return e;
                    }, e.prototype.computedHeight = function(t, e, n) {
                        return 'end' === t && (n += 1), 0 === e ? 0 : 55 * e + 41 * n - 10;
                    }, e.prototype.scrollEvent = function() {
                        var t = this.data.get('meetList'),
                            e = this.ref('areaContent');
                        0 === e.scrollTop && this.data.set('fixedTitle', '');
                        for (var n = 0; n < t.length; n++)
                            e.scrollTop >= this.computedHeight('start', t[n].startCount, n) + 1 && e.scrollTop <= this.computedHeight('end', t[n].endCount, n) && this.data.set('fixedTitle', this.parseShowDate(t[n].titleDate, t[n].week));
                    }, e.prototype.updateMeet = function(t) {
                        var e = this,
                            n = this.ref('areaContent'),
                            a = this.data.get('originList');
                        (a = a.filter(function(e) {
                            return e.roomId !== t.roomId;
                        })).length <= 0 && this.data.set('noMeet', !0);
                        var i = this.parseMeetList(a);
                        this.data.set('originList', a), this.data.set('meetList', i), this.nextTick(function() {
                            n.removeEventListener('scroll', e.scrollEvent), n.addEventListener('scroll', e.scrollEvent.bind(self));
                        });
                    }, e.prototype.getMyMeet = function(t) {
                        var e = this;
                        this.data.get('myMeet') !== t.data.value && (this.data.set('myMeet', t.data.value), this.data.set('meetList', []), this.data.set('originList', []), this.data.set('page', 0), this.nextTick(function() {
                            e.getMeetData();
                        }));
                    }, e.prototype.attached = function() {
                        this.getMeetData();
                    }, e.components = {
                        'v-header': o['default'],
                        'c-btn': r.Button,
                        'c-checkbox': r.Checkbox,
                        'c-select': r.Select,
                        'v-meet-item': s['default'],
                        'c-toast': r.Toast
                    }, e.computed = {
                        pastePos: function() {
                            return {
                                top: '211px',
                                left: '147px'
                            };
                        }
                    }, e;
                }(i.Component);
            e['default'] = l;
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = n(0),
                o = n(5),
                r = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.trimWhitespace = 'all', e;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {
                            item: {},
                            showBoard: !1,
                            meetStatus: 0,
                            showPopup: !1,
                            bsToken: ''
                        };
                    }, e.prototype.closeIt = function() {
                        this.data.set('showPopup', !1);
                    }, e.prototype.confirm = function() {
                        var t = this,
                            e = this.data.get('item'),
                            n = this.data.get('bsToken'),
                            a = new FormData(),
                            i = this;
                        a.append('roomId', e.roomId), a.append('bsToken', n), fetch('/home/meeting/submit/delete', {
                            method: 'post',
                            body: a
                        }).then(function(t) {
                            return t.json();
                        }).then(function(t) {
                            0 === t.errno && (i.closeIt(), i.fire('updateMeet', e), i.checkPopClose());
                        }, function(e) {
                            t.dispatch('disconnectedError', !0);
                        });
                    }, e.prototype.deleteMeet = function() {
                        this.checkPopClose(), this.data.set('showPopup', !0);
                    }, e.prototype.reOrderMeet = function(t) {
                        var e = new Date(),
                            n = e.getTime(),
                            i = this.selectListInit('reOrderMeet', e, 'start'),
                            o = this.selectListInit('reOrderMeet', new Date(n + 1740000), 'end'),
                            r = t.startTime,
                            s = t.endTime;
                        s.utcTime = n / 1000, r.utcTime = n / 1000, e.getHours() >= 23 && (s.utcTime = (e.setHours(23, 59, 59, 999) + 1) / 1000, e.getMinutes() >= 30 && (r.utcTime = (e.setHours(23, 59, 59, 999) + 1) / 1000));
                        var c = this.processCal('start', r, i),
                            l = this.processCal('end', s),
                            p = this.getSimpleMeetData(t),
                            d = {
                                startSelectList: i,
                                endSelectList: o,
                                meetData: a.__assign(a.__assign({}, p), {
                                    roomId: t.roomId,
                                    startCalDate: new Date(1000 * r.utcTime),
                                    startCalData: c,
                                    endCalData: l,
                                    roomTag: t.roomTag
                                }),
                                bsToken: this.data.get('bsToken'),
                                endIndex: o.length > 1 ? 1 : 0
                            };
                        this.fire('reOrderMeet', d);
                    }, e.prototype.modifyMeet = function(t) {
                        var e = this.selectListInit('modifyMeet', new Date(1000 * t.startTime.utcTime), 'start'),
                            n = this.selectListInit('modifyMeet', new Date(1000 * t.startTime.utcTime + 1740000), 'end'),
                            i = t.startTime,
                            o = t.endTime,
                            r = this.processCal('start', i, e),
                            s = this.processCal('end', o),
                            c = this.getSimpleMeetData(t),
                            l = {
                                meetData: a.__assign(a.__assign({}, c), {
                                    roomId: t.roomId,
                                    modifyMeet: !0,
                                    startCalDate: new Date(1000 * i.utcTime),
                                    startCalData: r,
                                    endCalData: s,
                                    passwd: '******',
                                    roomTag: t.roomTag,
                                    passShow: !1,
                                    url: t.url
                                }),
                                startIndex: this.getSelectIndex(e, i, 0),
                                endIndex: this.getSelectIndex(n, o, 1),
                                bsToken: this.data.get('bsToken'),
                                startSelectList: this.trimDate(e),
                                endSelectList: this.trimDate(n)
                            };
                        this.fire('modifyMeet', l);
                    }, e.prototype.trimDate = function(t) {
                        return t.map(function(t) {
                            return 0 === parseInt(t.slice(0, 1)) ? t.substr(1) : t;
                        });
                    }, e.prototype.getSelectIndex = function(t, e, n) {
                        var a = t.indexOf(e.time);
                        return -1 !== a ? a : 0;
                    }, e.prototype.processCal = function(t, e, n) {
                        var a = 1000 * e.utcTime,
                            i = new Date(a),
                            o = {
                                selectDate: new Date(a + 1800000),
                                selectDateDay: i.getDate(),
                                selectDateMonth: i.getMonth() + 1,
                                selectDateYear: i.getFullYear()
                            };
                        return 'start' === t ? {
                            calObj: o,
                            limitBefore: new Date(),
                            limitAfter: 0
                        } : {
                            limitBefore: i.getTime() + 3600000,
                            limitAfter: i.getTime() + 90000000,
                            initShow: i
                        };
                    }, e.prototype.getSimpleMeetData = function(t) {
                        return {
                            roomName: t.name,
                            boxChecked: !!t.needPasswd,
                            openPassInput: !!t.needPasswd,
                            description: t.description,
                            partner: t.partner,
                            canOpenMeet: {
                                title: !0,
                                pass: !0,
                                desc: !0
                            }
                        };
                    }, e.prototype.selectListInit = function(t, e, n) {
                        var a = e,
                            i = new Date(),
                            o = [];
                        'modifyMeet' === t && 'start' === n && (a = i);
                        var r = a.getHours();
                        if (e.getFullYear() === i.getFullYear() && e.getMonth() === i.getMonth() && e.getDate() === i.getDate() || 'start' !== n) {
                            a.getMinutes() > 30 && (r += 1), r >= 24 && (r -= 24);
                            for (s = r; s < 24; s++)
                                s === r && a.getMinutes() < 30 || o.push((s < 10 ? '0' : '') + s + ':00'), o.push((s < 10 ? '0' : '') + s + ':30');
                        } else
                            for (var s = 0; s < 24; s++)
                                o.push((s < 10 ? '0' : '') + s + ':00'), o.push((s < 10 ? '0' : '') + s + ':30');
                        return o;
                    }, e.prototype.share = function(t) {
                        this.checkPopClose();
                        var e = this.ref('meetItemQuick'),
                            n = '';
                        t.partner && t.partner.length > 0 && (n = '参会人\uFF1A' + t.partner.join('\uFF1B'));
                        var a, i, o, r = t.startTime.date + ' ' + t.startTime.time + '-' + t.endTime.time;
                        t.startTime.date !== t.endTime.date && (r = t.startTime.date + ' ' + t.startTime.time + '-' + t.endTime.date + ' ' + t.endTime.time), (a = document.createElement('textarea')).style.opacity = '0', a.style.position = 'absolute', a.style.zIndex = '-1', a.value = t.roomowner + ' 邀请您参加百度视频云会议\n会议主题\uFF1A ' + t.name + '\n会议时间\uFF1A ' + r, n && (a.value += '\n' + n), a.value += t.passwd ? '\n参会密码\uFF1A ' + t.passwd : '', a.value += t.description ? '\n会议描述\uFF1A' + t.description : '', a.value += '\n请点击下方链接参加会议\uFF1A\n' + t.url, a.contentEditable = !0, a.setAttribute('id', 'copyInput'), e.appendChild(a), a.select(), o = document.getSelection(), (i = document.createRange()).selectNode(a), o.addRange(i), a.setSelectionRange(0, a.value.length), document.execCommand('copy') && this.fire('shareEvent', !0);
                    }, e.prototype.startMeet = function(t) {
                        var e = this;
                        if (0 === this.data.get('meetStatus')) {
                            this.checkPopClose();
                            var n = this;
                            fetch('/home/meeting/data/detail?&r=' + t.roomTag, {
                                method: 'get'
                            }).then(function(t) {
                                return t.json();
                            }).then(function(e) {
                                if (0 === e.errno) {
                                    var a = e.data,
                                        i = {
                                            startTime: a.startTime.time,
                                            startDateArr: a.startTime.date.split('/'),
                                            duration: a.duration,
                                            endTime: a.endTime.time,
                                            endDateArr: a.endTime.date.split('/'),
                                            name: a.name,
                                            jumpUrl: e.jumpUrl,
                                            jumpInfo: e.jumpInfo,
                                            r: a.roomTag,
                                            roomowner: t.roomowner,
                                            passwd: t.passwd
                                        };
                                    n.fire('meetStart', i);
                                }
                            }, function(t) {
                                e.dispatch('disconnectedError', !0);
                            });
                        }
                    }, e.prototype.subtractTime = function(t) {
                        var e = new Date().getTime();
                        return t - e > 0 && (t - e) / 60000 <= 30 ? Math.ceil((t - e) / 60000) : 0;
                    }, e.prototype.stopPop = function(t) {
                        t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
                    }, e.prototype.checkPopOpen = function() {
                        var t = this,
                            e = this.data.get('showBoard');
                        this.nextTick(function() {
                            return !e && t.data.set('showBoard', !0);
                        });
                    }, e.prototype.checkPopClose = function() {
                        this.data.get('showBoard') && this.data.set('showBoard', !1);
                    }, e.prototype.attached = function() {
                        window.addEventListener('click', this.checkPopClose.bind(this));
                    }, e.prototype.detached = function() {
                        window.removeEventListener('click', this.checkPopClose.bind(this));
                    }, e.components = {
                        'c-popup': o.Popup
                    }, e.computed = {
                        memberName: function() {
                            var t = this.data.get('item');
                            return t.partner && t.partner.length ? t.partner.reduce(function(t, e) {
                                return t + (e ? '\u3001' : '') + e;
                            }) : '';
                        },
                        memberNumber: function() {
                            var t = this.data.get('item');
                            return t.partner && t.partner.length ? t.partner.length + '人' : '';
                        },
                        popupTitle: function() {
                            var t = this.data.get('meetStatus');
                            return 0 === t ? '删除会议' : 5 === t ? '确认删除当前会议\uFF1F' : void 0;
                        },
                        popupSubTitle: function() {
                            return 0 === this.data.get('meetStatus') ? '删除后其他参会人将无法参会' : '';
                        }
                    }, e;
                }(i.Component);
            e['default'] = r;
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = n(0),
                o = n(5),
                r = n(31),
                s = n(9),
                c = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {
                            flowType: '',
                            browserInfo: '',
                            browserPC: !navigator.userAgent.match(/AppleWebKit.*Mobile.*/)
                        };
                    }, e.prototype.login = function() {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var t, e;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return (t = this.data.get('instance')) ? [
                                            3,
                                            2
                                        ] : [
                                            4,
                                            r.login(t)
                                        ];
                                    case 1:
                                        return (e = n.sent()).show(), this.data.set('instance', e), [
                                            3,
                                            3
                                        ];
                                    case 2:
                                        t.show(), n.label = 3;
                                    case 3:
                                        return [2];
                                }
                            });
                        });
                    }, e.prototype.btnClick = function() {
                        this.data.get('type');
                        this.login();
                    }, e.prototype.attached = function() {
                        this.data.set('browserInfo', s.getBrowser()), 'unlogin' === this.data.get('flowType') && this.login();
                    }, e.computed = {
                        text: function() {
                            var t = this.data.get('flowType'),
                                e = this.data.get('browserPC');
                            if ('unlogin' === t)
                                return {
                                    title: '参与会议需要登录',
                                    subTitle: '为了保障您的参会安全\uFF0C请您点击登录按钮进行登录',
                                    btn: '立即登录'
                                };
                            var n = this.data.get('browserInfo'),
                                a = '',
                                i = '//www.baidu.com/s?wd=' + encodeURIComponent('chrome网络浏览器下载') + '&rsv_dl=meeting';
                            return e ? ('Chrome' !== n.type && 'Firefox' !== n.type || 'Chrome' === n.type && n.versions < 72 ? a = 'Chrome' : 'Firefox' === n.type && n.versions < 75 && (a = 'Firefox', i = '//www.baidu.com/s?wd=' + encodeURIComponent('火狐浏览器下载') + '&rsv_dl=meeting'), {
                                title: '当前浏览器版本不支持参会',
                                subTitle: '为了保证您的使用体验\uFF0C请您下载使用新版' + a + '浏览器',
                                btn: '下载新版' + a,
                                downLoadUrl: i
                            }) : {
                                title: '百度视频会议手机版即将上线',
                                subTitle: '为保障您本次参会体验\uFF0C请到PC端参与会议',
                                btn: '',
                                downLoadUrl: ''
                            };
                        }
                    }, e.components = {
                        'c-btn': o.Button
                    }, e;
                }(i.Component);
            e['default'] = c;
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var a = n(4),
                i = n(0),
                o = n(5),
                r = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this;
                    }
                    return a.__extends(e, t), e.prototype.initData = function() {
                        return {};
                    }, e.components = {
                        'c-btn': o.Button
                    }, e;
                }(i.Component);
            e['default'] = r;
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(37)],
                o = n(39),
                r = n(10)['default'];
            t.exports = n(10), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            var a = n(2),
                i = n(38);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '.no-scroll {\n  overflow: hidden;\n}\n#video-meeting {\n  font-size: 14px;\n  color: #222;\n}\n.v-container {\n  position: fixed;\n  bottom: 64px;\n  right: 80px;\n  width: 396px;\n  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 12px;\n  background: #FFFFFF;\n  height: 556px;\n  z-index: 999;\n  padding-bottom: 24px;\n}\n.hide_3y2AL {\n  display: none;\n}\n@media screen and (max-width: 1158px) {\n  .video-meeting {\n    display: none;\n  }\n}\n',
                ''
            ]), e.locals = {
                hide: 'hide_3y2AL'
            }, t.exports = e;
        },
        function(t, e) {
            t.exports = ' <div class="{{$style[\'text\']}}" id="video-meeting" class="{{type !== \'backflow\' ? \'video-meeting\' : \'\'}}" s-ref="meetRoot"> <div class="{{showViews ? \'\' : $style.hide}}"> <start-meet s-if="status === 1" on-logSend="logSend($event)" bsToken="{{bsToken}}" isLogin="{{isLogin}}" on-quickmeet="createQuickMeet($event)" on-orderMeet="orderMeetEvent($event)" on-manageMeet="openManageMeet"></start-meet> <v-demo s-if="status === 2" text="video-meeting-fyr"></v-demo> <meet-midpage s-if="status === 3" meetInfo="{{ meetData }}" on-meetStart="startMeetEvent($event)"></meet-midpage> <open-meet s-if="status === 4" meetInfo="{{meetInfo}}" type="{{type}}" isLogin="{{isLogin}}"></open-meet> <order-meet s-if="status === 5" on-intoMidpage="orderIntoMidpage($event)" orderData="{{ orderData }}" s-bind="{{ orderData.meetData }}"></order-meet> <manage-meet s-if="status === 6" bsToken="{{bsToken}}" on-orderMeet="orderMeetEvent($event)" on-meetStart="startMeetEvent($event)" on-modifyMeet="modifyMeetEvent($event)"></manage-meet> <compat-tip s-if="status === 7" flowType="{{flowType}}"></compat-tip> <page-error s-if="status === 8"></page-error> <c-toast s-if="netError" pos="{{ errorPos }}" on-hide="onHide">加载失败\uFF0C请检查网络连接</c-toast> </div></div>';
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(41)],
                o = n(43),
                r = n(11)['default'];
            t.exports = n(11), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            var a = n(2),
                i = n(42);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '.iframe-wrapper_-UGwB {\n  height: 490px;\n  width: 350px;\n  overflow: hidden;\n  margin: auto;\n}\n.iframe-wrapper_-UGwB .fk-iframe_1wLQF {\n  margin-top: -15px;\n  height: 540px;\n  width: 350px;\n}\n',
                ''
            ]), e.locals = {
                'iframe-wrapper': 'iframe-wrapper_-UGwB',
                iframeWrapper: 'iframe-wrapper_-UGwB',
                'fk-iframe': 'fk-iframe_1wLQF',
                fkIframe: 'fk-iframe_1wLQF'
            }, t.exports = e;
        },
        function(t, e) {
            t.exports = ' <div class="{{$style[\'wrapper\']}} v-container"> <v-header title="用户反馈" status="2" closeType="exit"></v-header> <div class="{{ $style[\'iframe-wrapper\'] }}"> <iframe class="{{ $style[\'fk-iframe\'] }}" src="//ufosdk.baidu.com/ufosdk/postview/%2BuS7%2FtBBbja2UESRWUp3Xw%3D%3D/245829" frameborder="0"></iframe> </div> </div> ';
        },
        function(t, e, n) {
            var a = n(2),
                i = n(45);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '.header_2xS7W {\n  height: 54px;\n  width: 100%;\n  padding: 19px 24px 10px 21px;\n  box-sizing: border-box;\n  line-height: 25px;\n}\n.header_2xS7W .icon_1PkuZ {\n  position: relative;\n  left: -1px;\n  float: left;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  margin-top: 3px;\n  font-size: 15px;\n  cursor: pointer;\n}\n.header_2xS7W .icon_1PkuZ:hover {\n  color: #315EFB;\n}\n.header_2xS7W .hide_lW_PG {\n  float: right;\n  font-size: 15px;\n  cursor: pointer;\n  color: #C4C7CE;\n}\n.header_2xS7W .hide_lW_PG:hover {\n  color: #4662D9;\n}\n.header_2xS7W .title_29mZu {\n  margin-left: 10px;\n}\n.header_2xS7W .exit_3Vgbs {\n  float: right;\n  cursor: pointer;\n}\n.header_2xS7W .exit_3Vgbs:hover {\n  color: #315EFB;\n}\n',
                ''
            ]), e.locals = {
                header: 'header_2xS7W',
                icon: 'icon_1PkuZ',
                hide: 'hide_lW_PG',
                title: 'title_29mZu',
                exit: 'exit_3Vgbs'
            }, t.exports = e;
        },
        function(t, e) {
            t.exports = ' <div class="{{$style.header}}"> <i s-if="needBack" class="c-icon {{$style.icon}} c-color-gray2" on-click="goBack">&#xe617;</i> <span s-if="title" class="{{$style.title}}">{{ title }}</span> <i s-if="closeType === \'hide\'" class="{{$style.hide}} c-icon" on-click="hideMeet">&#xe610;</i> <span s-if="closeType === \'exit\'" class="{{$style.exit}} c-color-gray2" on-click="exitMeet">退出</span> <c-popup s-if="exit" title="您将退出百度视频会议" on-cancel="cancel($event)" on-confirm="confirm($event)" on-close="cancel" zIndex="4" primaryBtnText="退出"></c-popup> </div> ';
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(48)],
                o = n(50),
                r = n(13)['default'];
            t.exports = n(13), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            var a = n(2),
                i = n(49);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '.select_2ORf2 {\n  border: 1px solid #D7D9E0;\n  box-sizing: border-box;\n  padding: 7px;\n  border-radius: 6px;\n  line-height: 1;\n  cursor: pointer;\n  position: relative;\n  background: #FFFFFF;\n  user-select: none;\n}\n.select_2ORf2:hover {\n  border: 1px solid #A7AAB5;\n}\n.select_2ORf2:hover .icon-hover_3DH0S {\n  color: #626675;\n}\n.select_2ORf2 .select-board_3hZnS {\n  box-sizing: border-box;\n  padding: 9px 0;\n  position: absolute;\n  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 6px;\n  background: #FFFFFF;\n  z-index: 1;\n  cursor: default;\n}\n.select_2ORf2 .select-board_3hZnS .select-item_1qIVt {\n  overflow: hidden;\n  box-sizing: border-box;\n  padding-bottom: 7px;\n  padding-top: 7px;\n  cursor: pointer;\n}\n.select_2ORf2 .select-board_3hZnS .select-item_1qIVt:hover {\n  color: #315EFB;\n}\n.active_3HANz {\n  border: 1px solid #A7AAB5;\n}\n.select_2ORf2,\n.select_2ORf2 .abstract_2CAcD,\n.select_2ORf2 i,\n.select-item_1qIVt {\n  display: inline-block;\n  vertical-align: middle;\n}\n',
                ''
            ]), e.locals = {
                select: 'select_2ORf2',
                'icon-hover': 'icon-hover_3DH0S',
                iconHover: 'icon-hover_3DH0S',
                'select-board': 'select-board_3hZnS',
                selectBoard: 'select-board_3hZnS',
                'select-item': 'select-item_1qIVt',
                selectItem: 'select-item_1qIVt',
                active: 'active_3HANz',
                abstract: 'abstract_2CAcD'
            }, t.exports = e;
        },
        function(t, e) {
            t.exports = ' <div class="{{$style.select}} {{selecting ? $style.active : \'\'}}" style="{{style}}" on-click="openBoard"> <div class="c-gap-right-xsmall c-line-clamp1 {{$style.abstract}}" style="width: {{width}}"> <span s-if="name">{{name}} : </span> <span title="{{value}}">{{value}}</span> </div> <i s-if="selecting" class="c-icon c-color-gray">&#xe60c;</i> <i s-else class="c-icon c-color-gray2 {{$style.iconHover}}">&#xe615;</i> <div s-if="selecting" class="{{$style.selectBoard}} c-row" style="{{alignX}}: 0px;{{alignY}}: 38px;{{ maxHeightStyle }}" on-click="nothing"> <div s-for="row, index in list" class="c-gap-left-large c-span{{column * 2}} {{index === list.length - 1 ? $style.row : \'\'}}" style="width: calc({{columnWidth}} * {{columns}} + 16px * {{columns - 1}})"> <div s-for="item, current in row" class="{{$style.selectItem}} c-line-clamp1 c-span2 {{current === row.length - 1 ? \'c-span-last\' : \'\'}}" title="{{item.name || item}}" style="width: calc({{columnWidth}});" on-click="choose($event, item, index * column + current)"> <span>{{item.name || item}}</span> </div> </div> </div> </div> ';
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(52)],
                o = n(54),
                r = n(14)['default'];
            t.exports = n(14), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            var a = n(2),
                i = n(53);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '.toast-wrapper_PdGvs {\n  opacity: 0;\n  position: absolute;\n  z-index: 10;\n  padding: 0px 16px;\n  height: 30px;\n  line-height: 30px;\n  background: rgba(98, 102, 117, 0.85);\n  color: #fff;\n  transition: opacity 0.3s;\n  -ms-transition: opacity 0.3s;\n  border-radius: 6px;\n  box-shadow: 0 / 1 1px / 1 5px / 1 rgba(0, 0, 0, 0.1);\n}\n',
                ''
            ]), e.locals = {
                'toast-wrapper': 'toast-wrapper_PdGvs',
                toastWrapper: 'toast-wrapper_PdGvs'
            }, t.exports = e;
        },
        function(t, e) {
            t.exports = ' <span class="{{$style.toastWrapper}}" style="{{customStyle}}"> <slot></slot> </span> ';
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(56)],
                o = n(58),
                r = n(15)['default'];
            t.exports = n(15), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            var a = n(2),
                i = n(57);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '.mask-wrap_3BvzO {\n  display: inline-block;\n  line-height: 1;\n  vertical-align: middle;\n  text-align: left;\n}\n.popup-box_22-gb {\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);\n  box-sizing: border-box;\n  padding: 24px;\n}\n.popup-box_22-gb .head_1J1Ad {\n  line-height: 1;\n}\n.popup-box_22-gb .head_1J1Ad .title_whwns,\n.popup-box_22-gb .head_1J1Ad i {\n  display: inline-block;\n  vertical-align: top;\n  line-height: 1;\n}\n.popup-box_22-gb .head_1J1Ad i {\n  cursor: pointer;\n  color: #c0c2c8;\n  margin-left: 19px;\n}\n.popup-box_22-gb .body_cRLMf {\n  margin-top: 16px;\n  min-height: 50px;\n}\n.popup-box_22-gb .bottom_2DuZU {\n  text-align: right;\n}\n.popup-box_22-gb .bottom_2DuZU .record_aUERb {\n  line-height: 30px;\n  text-align: left;\n}\n.mask_2aa22 {\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  text-align: center;\n  line-height: 1;\n  line-height: 100vh;\n}\n.new-pmd-icon_1VvoX {\n  height: auto;\n  width: auto;\n  line-height: 1;\n  overflow: visible;\n}\n',
                ''
            ]), e.locals = {
                'mask-wrap': 'mask-wrap_3BvzO',
                maskWrap: 'mask-wrap_3BvzO',
                'popup-box': 'popup-box_22-gb',
                popupBox: 'popup-box_22-gb',
                head: 'head_1J1Ad',
                title: 'title_whwns',
                body: 'body_cRLMf',
                bottom: 'bottom_2DuZU',
                record: 'record_aUERb',
                mask: 'mask_2aa22',
                'new-pmd-icon': 'new-pmd-icon_1VvoX',
                newPmdIcon: 'new-pmd-icon_1VvoX'
            }, t.exports = e;
        },
        function(t, e) {
            t.exports = ' <div class="c-row"> <div class="{{$style.mask}}" style="background: {{color}};z-index: {{zIndex}};"> <div class="{{$style.maskWrap}}"> <div class="c-span9 c-span-last {{$style.popupBox}}" style="margin-left: {{posX}};margin-top: {{posY}}; {{style}}"> <div class="{{$style.head}}"> <div class="c-line-clamp1 c-span7 c-font-big {{$style.title}}"> <span title="{{title}}">{{ title }}</span> </div> <i class="c-icon c-font-normal {{$style.newPmdIcon}}" on-click="close(\'close\')">&#xe610;</i> </div> <div class="{{$style.body}} c-font-normal c-color-gray"> <span s-if="subTitle">{{subTitle}}</span> <slot s-else></slot> </div> <div class="{{$style.bottom}}"> <div class="c-span4 {{$style.record}}"> <c-checkbox s-if="!always" name="record" class="c-color-t" label="不再提示" value="{{never}}" on-change="setState"/> </div> <button class="c-btn" on-click="cancel"> {{defaultBtnText}} </button><button class="c-gap-left-large c-btn c-btn-primary" on-click="confirm"> {{primaryBtnText}} </button> </div> </div> </div> </div> </div> ';
        },
        function(t, e, n) {
            var a = n(2),
                i = n(60);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '.label_1LZ0S {\n  cursor: pointer;\n}\n.canhover_QzJr0:hover .checkbox-focus_1RAGx {\n  color: #A7AAB5;\n}\n.checkbox-value_22N5x {\n  vertical-align: middle;\n}\n.fix-style_12FFP {\n  border-radius: 5px;\n}\n.cannot_1WiVp {\n  cursor: not-allowed !important;\n  color: #C4C7CE;\n}\n.disable-border_EW8Ab {\n  color: #F0F0F1;\n}\n.disable-icon_3dFXj {\n  color: #D7D9E0 !important;\n}\n.new-pmd-icon_1lCbM {\n  height: auto;\n  width: auto;\n  line-height: 1;\n  overflow: visible;\n}\n',
                ''
            ]), e.locals = {
                label: 'label_1LZ0S',
                canhover: 'canhover_QzJr0',
                'checkbox-focus': 'checkbox-focus_1RAGx',
                checkboxFocus: 'checkbox-focus_1RAGx',
                'checkbox-value': 'checkbox-value_22N5x',
                checkboxValue: 'checkbox-value_22N5x',
                'fix-style': 'fix-style_12FFP',
                fixStyle: 'fix-style_12FFP',
                cannot: 'cannot_1WiVp',
                'disable-border': 'disable-border_EW8Ab',
                disableBorder: 'disable-border_EW8Ab',
                'disable-icon': 'disable-icon_3dFXj',
                disableIcon: 'disable-icon_3dFXj',
                'new-pmd-icon': 'new-pmd-icon_1lCbM',
                newPmdIcon: 'new-pmd-icon_1lCbM'
            }, t.exports = e;
        },
        function(t, e) {
            t.exports = ' <label class="{{ $style.label }} {{disabled ? $style.cannot : $style.canhover}}"> <span class="c-checkbox{{currentValue ? \' c-checkbox-checked\' : \'\'}}"> <span class="c-checkbox-inner {{$style.fixStyle}}" style="background: {{bgColor}};"> <span class="c-icon c-checkbox-inner-bg {{$style[\'checkbox-focus\']}} {{$style.newPmdIcon}} {{disabled ? $style.disableBorder : \'\'}}">&#xe611;</span> <span class="c-icon c-checkbox-inner-i {{$style.newPmdIcon}} {{disabled ? $style.disableIcon : \'\'}}" style="color: {{innerColor}};">&#xe61a;</span> </span> <input type="checkbox" s-bind="{{ propertyVal }}" name="{{name}}" class="c-checkbox-input {{disabled ? $style.cannot : \'\'}}" disabled="{{disabled}}" on-click="change"> </span><span class="{{$style[\'checkbox-value\']}} c-gap-left-xsmall"><slot>{{ label ? label : value }}</slot></span> </label> ';
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(63)],
                o = n(65),
                r = n(18)['default'];
            t.exports = n(18), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            var a = n(2),
                i = n(64);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '.btn-white_2Jw-w {\n  background: #fff !important;\n}\n.btn-auto_18Wt6 {\n  padding: 0 16px!important;\n  width: auto!important;\n}\n.btn-wide_3zkT2 {\n  width: 128px!important;\n}\n.btn-large_1Og-x {\n  width: 128px!important;\n  height: 36px;\n  line-height: 36px;\n}\n.btn-weak_2Q6Zk .btn-icon_1wlfU {\n  line-height: 24px;\n}\n.c-btn .btn-icon_1wlfU {\n  margin: 7px 4px 0 0;\n  float: none;\n}\n',
                ''
            ]), e.locals = {
                'btn-white': 'btn-white_2Jw-w',
                btnWhite: 'btn-white_2Jw-w',
                'btn-auto': 'btn-auto_18Wt6',
                btnAuto: 'btn-auto_18Wt6',
                'btn-wide': 'btn-wide_3zkT2',
                btnWide: 'btn-wide_3zkT2',
                'btn-large': 'btn-large_1Og-x',
                btnLarge: 'btn-large_1Og-x',
                'btn-weak': 'btn-weak_2Q6Zk',
                btnWeak: 'btn-weak_2Q6Zk',
                'btn-icon': 'btn-icon_1wlfU',
                btnIcon: 'btn-icon_1wlfU'
            }, t.exports = e;
        },
        function(t, e) {
            t.exports = ' <button class="c-btn {{ btnType }} {{ btnSize }} {{ type === \'white\' ? $style[\'btn-white\'] : \'\'}} {{ type === \'default\' ? $style[\'btn-default\'] : \'\' }} {{ size === \'auto\' ? $style[\'btn-auto\'] : \'\'}} {{ size === \'wide\' ? $style[\'btn-wide\'] : \'\' }} {{ size === \'weak\' ? $style[\'btn-weak\'] : \'\' }} {{ $style[\'btn-\' + size] }}" on-click="buttonClick"> <i s-if="icon && size !== \'mini\'" class="{{ $style[\'btn-icon\'] }} c-icon">{{ icon }}</i><template s-if="text">{{ text }}</template> <template s-else><slot></slot></template> </button> ';
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(67)],
                o = n(69),
                r = n(19)['default'];
            t.exports = n(19), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            var a = n(2),
                i = n(68);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '.input-wrapper_2wRPm .input_1XoiK {\n  box-sizing: border-box !important;\n}\n.input-wrapper_2wRPm .input_1XoiK:hover {\n  border-color: #A7AAB5;\n}\n.input-wrapper_2wRPm .input_1XoiK .left_3iOHO {\n  position: relative;\n  padding-right: 10px;\n  float: left;\n  cursor: default;\n}\n.input-wrapper_2wRPm .input_1XoiK .contain_1tIXQ {\n  height: 100%;\n  float: left;\n}\n.input-wrapper_2wRPm .input_1XoiK .contain_1tIXQ input {\n  width: 100%;\n}\n.input-wrapper_2wRPm .input_1XoiK .clear-none_1WUQL {\n  display: none;\n}\n.input-wrapper_2wRPm .input_1XoiK .clear-icon_3iQhm {\n  position: relative;\n  float: left;\n  padding-left: 10px;\n  cursor: default;\n  width: 16px;\n  height: 100%;\n}\n.input-wrapper_2wRPm .input_1XoiK .clear-icon_3iQhm span {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0;\n  font-size: 14px;\n  color: #D7D9E0;\n}\n.input-wrapper_2wRPm .input_1XoiK .clear-icon_3iQhm span:hover {\n  color: #315Efb;\n}\n.input-wrapper_2wRPm .input_1XoiK .right_5cDLU {\n  position: relative;\n  float: right;\n  padding-left: 10px;\n  cursor: default;\n}\n.input-wrapper_2wRPm .input-height-small_1Mjr7 {\n  height: 38px !important;\n}\n.input-wrapper_2wRPm .input-height-small_1Mjr7 .contain_1tIXQ input {\n  height: 36px !important;\n}\n.input-wrapper_2wRPm div.focus-color_rkdkn {\n  border-color: #A7AAB5;\n}\n.textarea-wrapper_kyfvY {\n  position: relative;\n  display: inline-block;\n  line-height: 0;\n}\n.textarea-wrapper_kyfvY .textarea_2mlOJ {\n  width: 390px;\n  background: transparent;\n  box-sizing: border-box !important;\n}\n.textarea-wrapper_kyfvY .textarea-height-large_newXe {\n  height: 112px;\n}\n.textarea-wrapper_kyfvY .textarea_2mlOJ:hover {\n  border-color: #A7AAB5;\n}\n.textarea-wrapper_kyfvY .textarea_2mlOJ:focus {\n  border-color: #A7AAB5;\n}\n.textarea-wrapper_kyfvY .water-mark_2zqL7 {\n  position: absolute;\n  right: 13px;\n  bottom: 10px;\n  cursor: text;\n  width: 93px;\n  height: 31px;\n}\n',
                ''
            ]), e.locals = {
                'input-wrapper': 'input-wrapper_2wRPm',
                inputWrapper: 'input-wrapper_2wRPm',
                input: 'input_1XoiK',
                left: 'left_3iOHO',
                contain: 'contain_1tIXQ',
                'clear-none': 'clear-none_1WUQL',
                clearNone: 'clear-none_1WUQL',
                'clear-icon': 'clear-icon_3iQhm',
                clearIcon: 'clear-icon_3iQhm',
                right: 'right_5cDLU',
                'input-height-small': 'input-height-small_1Mjr7',
                inputHeightSmall: 'input-height-small_1Mjr7',
                'focus-color': 'focus-color_rkdkn',
                focusColor: 'focus-color_rkdkn',
                'textarea-wrapper': 'textarea-wrapper_kyfvY',
                textareaWrapper: 'textarea-wrapper_kyfvY',
                textarea: 'textarea_2mlOJ',
                'textarea-height-large': 'textarea-height-large_newXe',
                textareaHeightLarge: 'textarea-height-large_newXe',
                'water-mark': 'water-mark_2zqL7',
                waterMark: 'water-mark_2zqL7'
            }, t.exports = e;
        },
        function(t, e) {
            t.exports = ' <div class="{{$style[\'input-wrapper\']}}"> <div s-if="type === \'input\'" class="c-input {{ $style[\'input\'] }} {{ $style[inputHeightSize] }} {{ isFocus ? $style[\'focus-color\'] : \'\' }}" style="width: {{inputWidthSize}}px;"> <div class="{{ $style[\'left\'] }}"> <slot name="left-icon"></slot> </div> <div class="{{ $style[\'contain\'] }}" style="{{ inputSpecialSize() }}"> <input s-ref="input" type="text" placeholder="{{ placeholder }}" s-bind="{{ params }}" value="{= value =}" on-input="handleInput" on-focus="handleFocus" on-blur="handleBlur"> </div> <div s-if="clearable" class="{{ $style[\'clear-icon\'] }} {{ $style[\'input-icon\'] }} {{ value && isFocus ? \'\' : $style[\'clear-none\']}}" on-mousedown="clearInput"> <span class="c-icon"> &#xe610; </span> </div> <div class="{{ $style[\'right\'] }}"> <slot name="right-icon"></slot> </div> </div> <div s-else class="{{ $style[\'textarea-wrapper\'] }}"> <textarea s-ref="textarea" placeholder="{{ placeholder }}" s-bind="{{ params }}" class="c-textarea {{ $style[\'textarea\']}} {{ $style[inputHeightSize] }}" style="width: {{inputWidthSize}}px;" value="{= value =}" on-input="handleInput" on-focus="handleFocus" on-blur="handleBlur"></textarea> <div s-if="waterMarkStyle" class="{{ $style[\'water-mark\'] }}" style="{{ waterMarkStyle }}" on-click="clickWaterMark"></div> </div> </div> ';
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(71)],
                o = n(73),
                r = n(20)['default'];
            t.exports = n(20), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            var a = n(2),
                i = n(72);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '.calendar-all_HdkG3 {\n  position: relative;\n  width: 100%;\n  height: 30px;\n  user-select: none;\n}\n.calendar-all_HdkG3 .calendar-outside_3jcJF {\n  width: 100%;\n  height: 30px;\n  box-sizing: border-box;\n  background: #FFFFFF;\n  border: 1px solid #D7D9E0;\n  border-radius: 6px;\n  cursor: pointer;\n  padding: 8px;\n  font-size: 13px;\n  color: #333333;\n  line-height: 14px;\n}\n.calendar-all_HdkG3 .calendar-outside_3jcJF:hover {\n  border: 1px solid #A7AAB5;\n}\n.calendar-all_HdkG3 .calendar-outside_3jcJF:after {\n  content: "";\n  display: block;\n  overflow: hidden;\n  clear: both;\n}\n.calendar-all_HdkG3 .calendar-outside_3jcJF .cal-date_2HLi2 {\n  float: left;\n}\n.calendar-all_HdkG3 .calendar-outside_3jcJF .cal-week_3t1TW {\n  float: left;\n  margin-left: 8px;\n}\n.calendar-all_HdkG3 .calendar-outside_3jcJF .cal-icon_wTM0E {\n  float: right;\n  width: 16px;\n  height: 16px;\n  color: #9195A3;\n  font-size: 16px;\n}\n.calendar-all_HdkG3 .calendar-outside_3jcJF .cal-icon_wTM0E i {\n  position: relative;\n  top: -1px;\n}\n.calendar-all_HdkG3 .calendar-select_2Iu3B {\n  border: 1px solid #A7AAB5;\n}\n.calendar-all_HdkG3 .calendar-none_3kpGb {\n  display: none;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc {\n  position: absolute;\n  top: 34px;\n  left: 0;\n  width: 232px;\n  height: 213px;\n  background: #FFFFFF;\n  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 12px;\n  padding: 0 12px;\n  padding-top: 12px;\n  z-index: 10;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-control_3poJl {\n  width: 232px;\n  height: 16px;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-control_3poJl:after {\n  content: "";\n  display: block;\n  overflow: hidden;\n  clear: both;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-control_3poJl .icon-left_2e1E2 {\n  float: left;\n  width: 14px;\n  height: 16px;\n  line-height: 16px;\n  font-size: 14px;\n  color: #9195A3;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-control_3poJl .icon-left_2e1E2:hover {\n  color: #333;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-control_3poJl .icon-left_2e1E2 i {\n  cursor: pointer;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-control_3poJl .date-place_2lAfM {\n  float: left;\n  height: 16px;\n  width: 200px;\n  line-height: 16px;\n  text-align: center;\n  font-size: 14px;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-control_3poJl .icon-right_1-uwn {\n  float: right;\n  height: 16px;\n  line-height: 16px;\n  font-size: 14px;\n  color: #9195A3;\n  cursor: pointer;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-control_3poJl .icon-right_1-uwn:hover {\n  color: #333;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-control_3poJl .hide-btn_3H8GZ {\n  display: none;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- {\n  table-layout: fixed;\n  width: 232px;\n  height: 168px;\n  padding-top: 10px;\n  padding-bottom: 9px;\n  display: table;\n  border-collapse: separate;\n  box-sizing: border-box;\n  text-indent: initial;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- thead {\n  display: table;\n  width: 228px;\n  height: 25px;\n  background-color: #F5F5F6;\n  border-radius: 6px;\n  margin-bottom: 4px;\n  padding: 0 2px;\n  text-align: center;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- thead th {\n  font-size: 13px;\n  color: #333333;\n  font-weight: normal;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- thead .weekend-color_2EVvf {\n  color: #315EFB;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- tbody {\n  display: table;\n  width: 228px;\n  padding: 0 2px;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- tbody div {\n  font-size: 13px;\n  text-align: center;\n  line-height: 21px;\n  height: 20px;\n  width: 20px;\n  margin: auto;\n  margin-top: 3px;\n  border-radius: 4px;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- tbody .prev_3RxZ0 {\n  color: #C4C7CE;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- tbody .current_2Euzw {\n  color: #333333;\n  cursor: pointer;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- tbody .current_2Euzw div:hover {\n  background-color: #F0F0F1;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- tbody .next_3_kaA {\n  color: #C4C7CE;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- tbody .is-now_t8q9k {\n  color: #315EFB;\n}\n.calendar-all_HdkG3 .calendar-wrapper_2qMvc .calendar-table_1GT0- tbody .is-select_gW_LX {\n  background: #315EFB !important;\n  color: #FFFFFF;\n}\n',
                ''
            ]), e.locals = {
                'calendar-all': 'calendar-all_HdkG3',
                calendarAll: 'calendar-all_HdkG3',
                'calendar-outside': 'calendar-outside_3jcJF',
                calendarOutside: 'calendar-outside_3jcJF',
                'cal-date': 'cal-date_2HLi2',
                calDate: 'cal-date_2HLi2',
                'cal-week': 'cal-week_3t1TW',
                calWeek: 'cal-week_3t1TW',
                'cal-icon': 'cal-icon_wTM0E',
                calIcon: 'cal-icon_wTM0E',
                'calendar-select': 'calendar-select_2Iu3B',
                calendarSelect: 'calendar-select_2Iu3B',
                'calendar-none': 'calendar-none_3kpGb',
                calendarNone: 'calendar-none_3kpGb',
                'calendar-wrapper': 'calendar-wrapper_2qMvc',
                calendarWrapper: 'calendar-wrapper_2qMvc',
                'calendar-control': 'calendar-control_3poJl',
                calendarControl: 'calendar-control_3poJl',
                'icon-left': 'icon-left_2e1E2',
                iconLeft: 'icon-left_2e1E2',
                'date-place': 'date-place_2lAfM',
                datePlace: 'date-place_2lAfM',
                'icon-right': 'icon-right_1-uwn',
                iconRight: 'icon-right_1-uwn',
                'hide-btn': 'hide-btn_3H8GZ',
                hideBtn: 'hide-btn_3H8GZ',
                'calendar-table': 'calendar-table_1GT0-',
                calendarTable: 'calendar-table_1GT0-',
                'weekend-color': 'weekend-color_2EVvf',
                weekendColor: 'weekend-color_2EVvf',
                prev: 'prev_3RxZ0',
                current: 'current_2Euzw',
                next: 'next_3_kaA',
                'is-now': 'is-now_t8q9k',
                isNow: 'is-now_t8q9k',
                'is-select': 'is-select_gW_LX',
                isSelect: 'is-select_gW_LX'
            }, t.exports = e;
        },
        function(t, e) {
            t.exports = ' <c-row> <c-span col="{{col}} c-span-last"> <div class="{{$style[\'calendar-all\']}}"> <div class="{{$style[\'calendar-outside\']}} {{showCheckDate ? $style[\'calendar-select\'] : \'\'}}" on-click="checkDateOpen"> <span class="{{$style[\'cal-date\']}}">{{selectDateYear}}/{{selectDateMonth}}/{{selectDateDay}}</span> <span class="{{$style[\'cal-week\']}}">周{{selectDateWeek}}</span> <span class="{{$style[\'cal-icon\']}}"> <i class="c-icon">{{ icon | raw }}</i> </span> </div> <div class="{{$style[\'calendar-wrapper\']}} {{!showCheckDate ? $style[\'calendar-none\'] : \'\'}}" on-click="stopPop"> <div class="{{$style[\'calendar-control\']}}"> <span class="{{ $style[\'icon-left\'] }}"> <i class="c-icon {{hideLeftBtn ? $style[\'hide-btn\'] : \'\'}}" on-click="changeMonth(\'prevMonth\')">&#xe617;</i> </span> <span class="{{$style[\'date-place\']}}">{{selectDateYear}}年{{selectDateMonth}}月</span> <span class="{{ $style[\'icon-right\'] }}"> <i class="c-icon {{hideRightBtn ? $style[\'hide-btn\'] : \'\'}}" on-click="changeMonth(\'nextMonth\')">&#xe613;</i> </span> </div> <table class="{{$style[\'calendar-table\']}}" cellspacing="0" cellpadding="0"> <thead> <th s-for="item in weekDays" class="{{item === \'六\' || item === \'日\' ? $style[\'weekend-color\'] : \'\'}}"> {{item}} </th> </thead> <tbody> <tr s-for="items, index in renderTbody"> <td s-for="val in items" class="{{$style[val.type]}}" on-click="pickDay(val)"> <div class="{{getNowClass(val) ? $style[\'is-now\'] : \'\'}} {{getSelectClass(val) ? $style[\'is-select\'] : \'\'}}"> {{val.text}} </div> </td> </tr> </tbody> </table> </div> </div> </c-span> </c-row> ';
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(75)],
                o = n(77),
                r = n(21)['default'];
            t.exports = n(21), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            var a = n(2),
                i = n(76);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '',
                ''
            ]), t.exports = e;
        },
        function(t, e) {
            t.exports = ' <div class="c-row"> <slot></slot> </div> ';
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(79)],
                o = n(81),
                r = n(22)['default'];
            t.exports = n(22), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            var a = n(2),
                i = n(80);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '',
                ''
            ]), t.exports = e;
        },
        function(t, e) {
            t.exports = ' <div class="{{ colName }}"> <slot></slot> </div> ';
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0, e.lessThanIE8 = e.removeEventListener = e.addEventListener = void 0;
            e.addEventListener = function(t, e, n) {
                t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent('on' + e, n.bind(t));
            };
            e.removeEventListener = function(t, e, n) {
                t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent('on' + e, n.bind(t));
            };
            e.lessThanIE8 = function() {
                var t = navigator.userAgent;
                if (t.indexOf('compatible') > -1 && t.indexOf('MSIE') > -1 && (new RegExp('MSIE (\\d+\\.\\d+);').test(t), parseFloat(RegExp.$1) <= 8))
                    return !0;
                return !1;
            };
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(84)],
                o = n(86),
                r = n(23)['default'];
            t.exports = n(23), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            var a = n(2),
                i = n(85);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '.content_1PgUj {\n  padding: 36px 24px;\n  position: relative;\n}\n.content_1PgUj .quick_hOmHG {\n  width: 220px;\n}\n.content_1PgUj .title_3h9lI {\n  color: #4E6EF2;\n  font-size: 22px;\n  margin-top: -10px;\n}\n.content_1PgUj .info_1tBly {\n  font-size: 12px;\n  margin-top: 6px;\n  margin-bottom: 45px;\n}\n.content_1PgUj .quick-btn_UsqCL {\n  display: block;\n  height: 36px;\n  margin: 16px auto 16px;\n}\n',
                ''
            ]), e.locals = {
                content: 'content_1PgUj',
                quick: 'quick_hOmHG',
                title: 'title_3h9lI',
                info: 'info_1tBly',
                'quick-btn': 'quick-btn_UsqCL',
                quickBtn: 'quick-btn_UsqCL'
            }, t.exports = e;
        },
        function(t, e) {
            t.exports = ' <div class="{{$style[\'quick-wrapper\']}} v-container"> <v-header title="{{meetType}}" closeType="exit" status="3"></v-header> <div class="{{$style.content}}" s-ref="quickContent"> <img class="{{$style.quick}}" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=519039017,4102631410&fm=179&app=35&f=PNG?w=400&h=320&s=D9001D7253D368614CDD80CA0300F0B1" alt="快速会议"> <div class="{{$style.title}}">会议创建成功</div> <div class="{{$style.info}} c-color-gray2">目前最多支持30人参与会议</div> <c-btn text="开启会议" type="primary" size="wide" class="{{$style[\'quick-btn\']}}" on-click="startMeet"></c-btn> <c-btn text="复制会邀" type="default" size="large" on-click="share" class="{{$style[\'quick-btn\']}}"></c-btn> <c-toast s-if="pasteShow" pos="{{ pastePos }}" on-hide="switchToast">会邀已复制</c-toast> </div> <v-foot text="会议管理" type="video-manage"></v-foot> </div> ';
        },
        function(t, e, n) {
            var a = n(2),
                i = n(88);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '.foot_4Pf4r {\n  font-size: 12px;\n  position: absolute;\n  bottom: 22px;\n  text-align: center;\n  width: 100%;\n}\n.foot_4Pf4r .tip-color_1HLen {\n  color: #9195A3;\n}\n.foot_4Pf4r button {\n  cursor: pointer;\n  outline: 0;\n  border: 0;\n  background: none;\n  font-size: 13px;\n  color: #9195A3;\n}\n.foot_4Pf4r button:hover {\n  color: #315EFB;\n}\n',
                ''
            ]), e.locals = {
                foot: 'foot_4Pf4r',
                'tip-color': 'tip-color_1HLen',
                tipColor: 'tip-color_1HLen'
            }, t.exports = e;
        },
        function(t, e) {
            t.exports = ' <div class="{{$style.foot}}"> <button on-click="footEvent(type)" class="{{type === \'feedback\' ? \'c-color-gray2\' : \'c-color-gray\'}}">{{ text }}</button> <div s-if="tipText" class="c-gap-top-small {{$style[\'tip-color\']}}">{{ tipText }}</div> </div> ';
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(91)],
                o = n(93),
                r = n(25)['default'];
            t.exports = n(25), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            var a = n(2),
                i = n(92);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '.flow-container_15AFv {\n  box-shadow: none;\n  background: transparent;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  margin-right: -198px;\n  margin-bottom: -275px;\n  color: #fff;\n  height: 580px;\n}\n.flow-container_15AFv .input_34ORg .c-input,\n.flow-container_15AFv .passwdInput_1Z3bD .c-input {\n  background: #fff;\n}\n.flow-container_15AFv .passWrap_3fUNm {\n  height: 54px;\n}\n.flow-container_15AFv .time-span_2aipK {\n  color: #fff;\n}\n.flow-container_15AFv .btn-flow_iFEyH {\n  margin-top: 30px!important;\n}\n.flow-container_15AFv .box_2JK9J {\n  color: #FFFFFF;\n}\n.flow-container_15AFv .box_2JK9J.boxInfo_LMpLP a {\n  color: #FFFFFF !important;\n  text-decoration: none;\n}\n.flow-container_15AFv .box_2JK9J.boxInfo_LMpLP a:hover {\n  color: #FFFFFF !important;\n}\n.content_3neeR {\n  padding: 0 38px;\n}\n.content_3neeR .meet-name_1eM7S {\n  font-size: 18px;\n  margin-top: 19px;\n  margin-bottom: 18px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.content_3neeR .meet-time_eM37p {\n  overflow: hidden;\n  margin-bottom: 14px;\n}\n.content_3neeR .meet-time_eM37p .moment_2h3Uo {\n  font-size: 32px;\n  display: block;\n  line-height: 1;\n}\n.content_3neeR .meet-time_eM37p .date_2acUS {\n  font-size: 12px;\n  margin-top: 2px;\n}\n.content_3neeR .quick-btn_3PaRY,\n.content_3neeR .quick-btn-forbid_1oNs8 {\n  height: 36px;\n  line-height: 36px;\n  margin-top: 7px;\n}\n.content_3neeR .quick-btn-forbid_1oNs8 {\n  min-width: 128px;\n}\n.content_3neeR .start_3ktfc {\n  float: left;\n}\n.content_3neeR .end_c2w2e {\n  float: right;\n}\n.content_3neeR .time-span_2aipK {\n  margin: 0 auto;\n  display: inline-block;\n  margin-top: 14px;\n}\n.content_3neeR .checkbox_22YXq {\n  margin-top: 21px;\n}\n.content_3neeR .checkbox_22YXq .box_2JK9J {\n  display: block;\n  text-align: left;\n  margin-top: 6px;\n}\n.content_3neeR .checkbox_22YXq span a {\n  color: #222;\n}\n.content_3neeR .checkbox_22YXq span a:hover {\n  color: #315EFB;\n  text-decoration: none;\n}\n.content_3neeR .checkbox_22YXq span .first-span_3gddi {\n  position: relative;\n  left: -5px;\n}\n.content_3neeR .inputwrap_1AISU {\n  height: 55px;\n  text-align: left;\n}\n.content_3neeR .passWarn_25BKE {\n  margin-top: 4px;\n}\n.content_3neeR .warning_3SO4m .c-input {\n  border-color: red;\n}\n.content_3neeR .meet-choice_3tBOA {\n  height: 128px;\n  border-radius: 6px;\n  background: #D7D9E0;\n  margin-top: 22px;\n  position: relative;\n  overflow: hidden;\n}\n.content_3neeR .meet-choice_3tBOA .live_16naE,\n.content_3neeR .meet-choice_3tBOA .live-close_16Cap {\n  position: absolute;\n  width: 38px;\n  height: 38px;\n  left: 50%;\n  top: 50%;\n  margin-left: -20px;\n  margin-top: -19px;\n}\n.content_3neeR .meet-choice_3tBOA .voice_2dPWt,\n.content_3neeR .meet-choice_3tBOA .voice-close_1C_3J {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  left: 0;\n  bottom: 0;\n}\n.content_3neeR .meet-choice_3tBOA .info_3vr-q {\n  background: #F5F5F6;\n  padding: 12px;\n  border-radius: 6px;\n  height: 100%;\n  box-sizing: border-box;\n  font-size: 12px;\n}\n.content_3neeR .meet-choice_3tBOA .info_3vr-q .info-inner_pTqSm {\n  overflow: auto;\n  height: 100%;\n}\n.content_3neeR .meet-choice_3tBOA .info_3vr-q .info-inner_pTqSm .info-title_3DSh_ {\n  margin-bottom: 6px;\n}\n.content_3neeR .meet-choice_3tBOA .info_3vr-q .info-inner_pTqSm p {\n  text-align: left;\n  line-height: 19px;\n  text-indent: 24px;\n}\n.content_3neeR .meet-choice_3tBOA .video_2fNB4 {\n  width: 100%;\n  height: 100%;\n  border-radius: 6px;\n}\n',
                ''
            ]), e.locals = {
                'flow-container': 'flow-container_15AFv',
                flowContainer: 'flow-container_15AFv',
                input: 'input_34ORg',
                passwdInput: 'passwdInput_1Z3bD',
                passWrap: 'passWrap_3fUNm',
                'time-span': 'time-span_2aipK',
                timeSpan: 'time-span_2aipK',
                'btn-flow': 'btn-flow_iFEyH',
                btnFlow: 'btn-flow_iFEyH',
                box: 'box_2JK9J',
                boxInfo: 'boxInfo_LMpLP',
                content: 'content_3neeR',
                'meet-name': 'meet-name_1eM7S',
                meetName: 'meet-name_1eM7S',
                'meet-time': 'meet-time_eM37p',
                meetTime: 'meet-time_eM37p',
                moment: 'moment_2h3Uo',
                date: 'date_2acUS',
                'quick-btn': 'quick-btn_3PaRY',
                quickBtn: 'quick-btn_3PaRY',
                'quick-btn-forbid': 'quick-btn-forbid_1oNs8',
                quickBtnForbid: 'quick-btn-forbid_1oNs8',
                start: 'start_3ktfc',
                end: 'end_c2w2e',
                checkbox: 'checkbox_22YXq',
                'first-span': 'first-span_3gddi',
                firstSpan: 'first-span_3gddi',
                inputwrap: 'inputwrap_1AISU',
                passWarn: 'passWarn_25BKE',
                warning: 'warning_3SO4m',
                'meet-choice': 'meet-choice_3tBOA',
                meetChoice: 'meet-choice_3tBOA',
                live: 'live_16naE',
                'live-close': 'live-close_16Cap',
                liveClose: 'live-close_16Cap',
                voice: 'voice_2dPWt',
                'voice-close': 'voice-close_1C_3J',
                voiceClose: 'voice-close_1C_3J',
                info: 'info_3vr-q',
                'info-inner': 'info-inner_pTqSm',
                infoInner: 'info-inner_pTqSm',
                'info-title': 'info-title_3DSh_',
                infoTitle: 'info-title_3DSh_',
                video: 'video_2fNB4'
            }, t.exports = e;
        },
        function(t, e) {
            t.exports = ' <div class="{{$style[\'quick-wrapper\']}} v-container {{type === \'backflow\' ? $style[\'flow-container\'] : \'\'}}"> <v-header title="开启会议" closeType="exit" s-if="type !== \'backflow\'" on-mediaGoback="clearMedia(\'back\')" on-mediaExit="clearMedia(\'exit\')" clearMedia="{{ true }}"></v-header> <div class="{{$style.content}}"> <div class="{{$style[\'meet-name\']}}">{{ meetInfo.name }}</div> <div class="{{$style[\'meet-time\']}}"> <div class="{{$style.start}}"> <span class="{{$style.moment}}">{{meetInfo.startTime}}</span> <div class="{{$style.date}}"> <fragment s-for="date, index in meetInfo.startDateArr"> <span class="{{$style.datespan}}">{{date}}</span> <span s-if="index < 2">/</span> </fragment> </div> </div> <div s-if="meetInfo.startTime && meetInfo.endTime" class="{{$style[\'time-span\']}} c-color-gray">{{timeSpan}}</div> <div class="{{$style.end}}"> <span class="{{$style.moment}}">{{meetInfo.endTime}}</span> <div class="{{$style.date}}"> <fragment s-for="date, index in meetInfo.endDateArr"> <span class="{{$style.datespan}}">{{date}}</span> <span s-if="index < 2">/</span> </fragment> </div> </div> </div> <div class="{{$style.inputwrap}}"> <c-input s-ref="meetName" placeholder="请输入参会人姓名" widthSize="7" heightSize="small" on-blur="blurInput($event, \'name\')" on-input="limitName($event)" on-clear="limitName($event)" class="{{$style.input}}" value="{= meetInfo.roomowner =}" params="{{{maxLength: 20}}}" clearable="{{true}}"></c-input> <v-warn s-if="warn.name" text="{{warn.nameText}}"></v-warn> </div> <div s-if="meetInfo.needPasswd && meetInfo.needPasswd !== \'0\'" class="{{ $style.passWrap }}"> <c-input s-ref="meetPass" placeholder="请输入参会密码" widthSize="7" heightSize="small" on-blur="limitPass($event)" on-input="processPassShow($event)" class="{{$style.passwdInput}}" params="{{{maxLength: 6}}}"></c-input> <v-warn s-if="warn.pass" text="{{warn.passText}}" class="{{$style.passWarn}}"></v-warn> </div> <template s-if="type !== \'backflow\'"> <c-btn text="{{submitBtn}}" size="large" type="{{(canstartMeet.name && canstartMeet.info && canstartMeet.limit && boxChecked) ? \'primary\' : \'disable\'}}" class="{{(canstartMeet.name && canstartMeet.info && canstartMeet.limit && boxChecked) ? $style[\'quick-btn\'] : $style[\'quick-btn-forbid\']}}" on-click="intoMeet"> </c-btn> </template> <div class="{{$style.checkbox}}"> <c-checkbox name="info" class="{{$style.box}} {{$style.boxInfo}} c-color-gray" type="{{checkboxType}}" checked="{{boxChecked}}" on-change="chooseLimits($event)" bgColor="rgba(255, 255, 255, 0)"> <span><span class="{{$style[\'first-span\']}}">同意</span><a href="//www.baidu.com/search/meet/meet-service.html" target="_blank">\u300A百度视频会议服务协议\u300B</a>和<a href="//www.baidu.com/search/meet/meet-private.html" target="_blank">\u300A隐私保护指引\u300B</a></span> </c-checkbox> <c-checkbox name="live" value="开启摄像头" class="{{$style.box}} c-color-gray" on-change="chooseLimits($event)" type="{{checkboxType}}" style="width: 100px;" bgColor="rgba(255, 255, 255, 0)"></c-checkbox> <c-checkbox name="voice" value="开启麦克风" class="{{$style.box}} c-color-gray" checked="checked" on-change="chooseLimits($event)" type="{{checkboxType}}" style="width: 100px;" bgColor="rgba(255, 255, 255, 0)"></c-checkbox> </div> <template s-if="type === \'backflow\'"> <c-btn text="{{submitBtn}}" type="{{btnUseful ? \'primary\' : \'disable\'}}" size="wide" on-click="intoMeet" class="{{btnUseful ? $style[\'quick-btn\'] : $style[\'quick-btn-forbid\']}} {{$style[\'btn-flow\']}}"> </c-btn> </template> <div class="{{$style[\'meet-choice\']}} c-span7"> <template s-if="!noLimit"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAI/UlEQVR4Ae1ab0yVVRgXCgkw1EzSq5esRDMyNZQ+ac7FdNj84pZrijpl4pYO9JNTt9xyqR+ajGXL0dycrYy1NlvFaoSjQblwrjTMgf9KFkE0NVBQEfr9rjx3zz2+fy/3as17tsN5nnOe85zn9zvPOe97Xx02LFESDCQYSDCQYCDBQIKBB5WBpP878IGBAWIoRB1ArU5KSmL7YBSCR61ElbL4wUAOlEBM8O8L8sGWmfBgFAB+zwB/APo9OdJc5H7U8M4CaIUB/iD05LBBHIRoATMot+rLN4CWG+A/vN/g3QAOZTyCHAB9xwD/EfSH4rDhYZcRAaBXdCtQDMSuPowxXe3spN/0zwtvjwH+k0HwjCkuRcDq1gxMAtbgKKdEUbUP8cs2GUDfNsB/Cp32OjYrGSbRFStnGrwEKEEL4OFYTmoqZC9V7KUVXyHft2/f3mmA/+z48eO0sYrRrs83C6YjE3wouLy8vJTe3t7S/v7+Ywiyxwg0WvUy/NV0d3cX3Lp16y3DyZGmpiYSpeOhbMZrpfsiQTvQi3HnCT4lNzd3eF9f3+dGgLFU+7UzkPJFVVVVGtaW7AsdD+g6PjcyYO5eNHjKskAYPPqGX7t27Q0dYDxlgK/et2/fCKwbcTygO5Fh4qDuqeiJluDhJRW7/0M8QYtvHIOaHTt2ZHLNwcojkNLS0jLx5s2bm1CLKyoqOCZkSMxW2QAz9+JEABfnYmkIsFuCjFcL8Ec3bdr0GNZL55qojzQ2Nj4N8t/FmuE7BxflAYzJhWweDY3HUxboCWQxIvUZBGp6vECLX4D/bv369VlY61HUEXV1dTm4cPnjp1dsVNsFG308NAkajy8CJJWEgPDuY7EMtXiE2NPTU4PzOhNpOev69evfRgx6VJDWDWvWrAlgnVGHDx+eAp/8yXvDaTpsmZmh44GW2WBHAoacizBmu/uYPsIumL17976IcQYf2LNnz2w7O7v+GzduHFu5cmU25o/BrT8d6f2bna3uhz0zU5NAAoQEwXRXBpApr0U7ucuROEHAYTvc3rZ2Yq9b7HxjcXHx64cOHeqtrKycsHTp0iPJyckkw0uRteSLEHUr2dWXANAZwNQKnX20fBxlava1jBeY2l27ds3ZuXNnPmU95iTjfJ9YsWLFZPgeh+MzAxfdeSd7cwzzMlBDFyVaOQqSAcQiuCA6FzG0I4CX0kgzgKHoAP8TwE+F38Du3bsJ/pxff5jLjeHTQo4CL0V9FwgudDsXMRQC6EgygCyTgFF+A7Szx5k/WVRUNA0+J+B5PxPgW+xsnfoH45Is4F0QUwLokOkVUwIA/pdVq1blwm9w69atM3EHNDuBdBqDD74s6SzgpkWdAdx9nQGaAC402ikYL2MAf3r16tXT4Su4efPmGQB/xss8Oxv4GYnK7JRjYN4DktkwcS40tCMgdAFifEgEAPyZdevWEXx2aWnpC9B/tQPmtR++RqGSADkGMSGAKcSzJBkwZAIAtnnjxo0z4DO4YcOG6dCbvIJ0soO/0ajMTiFA7gHzSQAT56IzIKYEIM1bysrKZmL54Nq1a58H+FNOoPyMwacQwE3ifRU3AnjWfB8BgD2Hsz4Lc4O8+KD/7Aegmy1jQpWLUBPATZQjzc11LW4Z4JsA7Pz5LVu25GHl4PLly5/jc98NkN9x+L5nBPh6CgD8xW3bts0m+GXLlk3jG58fcHgv6ID9Tbc5ioD/zh0A8L/j5Ybgs/Fe/yzAH3cDYo5fuXLlS/wifBVHxvEdAWvwKRDzS5A3qH4KkF1PGYDf85f4ewD22UuWLJmKn7Q/muC86CQAPibl5+dP6ejo+ABzIr4Vig/Y6McgX4dj8hi0I8DxVRhp24qfwgQfLCws5O95fjWOqly9epUEPInKX4XB+vr61+hfO8Mv0IsY491kvgly8+QxyLvN8yUoF6EQQDbJKjOALxskwOrLzACC+6O8vPwl2ExcuHDhZID/XgfrV758+XIVfIXAo52AGigpKcnp6ur6GL5uofa0trYWoV8/ASQDon4VtiOAr5kkYCRS/K4XGIBv279/P8FPWLBgwTMAX+8XsGl/4cKFN+FvIn2ijkcdh/oE6tjt27c/heNFmbuv3wLlHSAmBNCJZAAJCL0N4rM4v8+FC9Lwz4MHDzLtx8+fP38SwNeFB6MU8EGlG9k0Bz75hUmA8zvh46hjUPno0+DN3wExIyDiImxubn4FmLoEF8C34/MVwWfNmzcvCPBHZWwIbR8+fZfBJ3edu0zgY1EJnF+KNXh99rn73DANni9CUd8BdEQCQllw6dKllwHqHwEG8B3V1dXcpTEFBQUBgK+RsWha+OvEx9Sa2traQvjkrgtw7roAl0ce017Ay9sf42S8ngiwuhWlT7chBtvb2+dkZWV9Bee8cPj/dNobGhoWz5079xxUYVhamniRaSeF3/Csar/R76ZrH/RNXYqWLR8LGjgnhUDgcZSXmZn5NXSeOZaOEydOFOIfSJshC1Dd0kZ0LbNP9EEx3OjARdZgtSzjdi2dcoxFWlN2JIDGIQC48Galp6d/A53njuWvs2fPLsrJyTkDWUCaLe2kz0nmGIsdEPa7ATfni65byiyaDHcCcB7Hp6WlncREnj+Wzra2toWBQOA0ZCuA7GORMa3r/pCR+iMEsEtkP8BlnlXLPikRBPCicCypqamLYSDg/+7s7FwE8KfQpwFSpmPpg+goc9yqCHAvLecLGLO18q3tw+OyO+EOCBF9SP/xSP8jNEA2lGRkZDAbWJzAWo1LH1sWvY4GYMrUdeVc0SmzyJw72t26bb8OQozYmv1aF9mptRuz8i3rCggNTmSrMc6TftOH6Lo1bUNjEqg2pGzVr/usZKc+PWblXwdHWXTdapk+pEi/6HatpZ0ZmEy26+e4OaZ1kaW1sjf7zMBEt2s5n0XG72j2fx3tdKCmC6cx2prjfnVzPR2oF9mcL7qeK322rRm0aeg2Tns7G7t+cw0r3QRh6nqO05i2s5S9BunVjov4sbUMSnW6gXMbV66sxWiCjWaOrG41NxoQ0cyRGCJaq4AiDDwosfDhYRnPl54XXwmbBAMJBhIMhBj4F9S+rblAx3bBAAAAAElFTkSuQmCC" alt="" s-if="!liveState" class="{{$style[\'live-close\']}}"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAHs0lEQVR4Ae2aTWhcVRTHO6lNa23SD01arV8tCEWhIhJB6KLgvoJQweBGFLoounAT3Ei7tYWCK7GL4lYEN8aV0IVui5BCiaGCJY2VpA2lpLRJk4nn9/r+48nNfZ8zmQTMhZtz7vn4n49735s3b7Jly+bY7MBmBzY7sNmBzQ78bzvQ6FLldeMsr3V+dRMrymutcDvekLVItAxmlk2ZAsvYFG1QS5+VSMugApOHlafLC5FXbJ4uD3OFrm5iK0BskYUTysN1iKN1WFy4zrKTvDQtm1AeYBaG5KJgiBcNcVWoKHrxolk+obzUuqeUVTUjilOBnhKrMT09/fbi4uLXzWbz6vLy8iwTHhm61DexTcN6DPGpav0JCflJ4ppbjX/C5jbm5cuXD1iRP1rBuQMbbOWXYoAlXDXHxzX1+gyfBLyS9MX3jo2NHbZd/jO3cqfEFh/D67VJA2mkb0IY19TdH2ES0eLPnDnTv7S09LurrxSLD75W1oZtgm9AtHhLfvvc3NwXpSqOGOELRskmmFl3R14D2LXtR48efcqO83SktlIifMEAyyaYeZeCqbs7wgb4656Ed9y4ceOdUpXmGIEBlk0ww/uBz8HU1QdHt91BEho+oZ7+/v5XpahLUwzy9NiC87Elq0Q70QACKjnPN3p6egYrZRMxTjGEr4K1jnhUE3WqAYqqBFk3bHDNtjVSjBW4bQEGznUb4BMSpGRQTenapcLzMUJM6UJ57rpuAwQaBvWJNuwuHurlV5qmGCtwA+e2YrTbAHJRcj6vmMzrq/IxvJisKm7y6FrFKS+odNBkdPAECHJVDClSKn0gzl5WOQGtwiJwoa5yIhFML4rhhTFDe7/O5Ms2IBYsSxZLNjOBCgrhZsUNoWJ2oU3lSyAEUFLIw4ANe8ALZaF/4TrFCHG0hoovxIoZlDkBsQChrHHz5s037t69++Hx48d5XE30lvxiLGgVmcNogG0xhicnJ19XDIcV5oQqJnMu5VhAwknjePZnbrt169ZbluiSzWVLkG9wu23us6Z8jqydAQZYYIKdYi1azCGT0WzlQU5hnoUNKHMCDHfF8KAJ39vbu8csEqy+vr4PZD01NfWH+LrUYzjsrRZzb4q5Kp+6sbL8COAnhTLpPI+6vRcuXNhjOzOf7k7T1odNvm9wcHC/vdiYqXsC8AUDLDANp5lizROT2DbzviL75phpvZFVfHL8DZIkdti7vN9U6J07d7402dM2B2wHz0peleILBlhgyp9YJuMrMrHDy4DN8Tnbsr3hwcLdJ3jSALs+P1GCtnN/nzhx4jnTDRw7duzF+fn5MenKUnzwBQMsMOVLLJP7BuSdAjNtbxQ1IHn5cfLkyd325DelJO/du/eNhWX39p8/f/7NhYWFv6Qrotjigy8YYMmHGMQyedZLkq6fABrwpM2ds7Ozp5So0ebExMRHJqeIZ0+fPv2aFfKz00dZbLDFB18wwJLxzMzMKZPvtEnM2FuirjaA499qgPG77Oj+pGSNLoyPj9ME3vNzSTw/Ojr67u3bt78zu+u2m3NMeGTosEltD1y7du1jMIQHtul22fQNIId1vwSSE0ByFy9ePPTo0aNxJW20aSfjW3uIedn0B21S4Avp5Bpnao3uILb44CscMME2fdgA7kPr3gCuR3aF5PouXbr0iiU8oeShdhP7x57gzo6MjPAUp0ZQsOZBdNhg633BAhNsm2rAhrkHJJ8ClhingFfYJLn73Llzhx48eOAvB9XUtKN81e7kP9h7/1+Y8MjMoLXjMgYDLDBTbGIQa8N8Cqy6D1hy/KJDwnttRz+1HZ1UQWUpPviCkWKBqd3XDZDYXb0EGhYw9izAjZAd8aeAhHla2zs0NHTAivns4cOHv9pNr3VTC5uBDhts8cE3xQCLk+V3v8wnAPl2ZACkGWuAToHuBa1LwfySJhjlyfCZ4eHhl65cufLe/fv3R9UAeGTosEltVbw/+txndO13ZfctXjJUvGheEzgFrRui8RSgJvCtLmmEPdp+pQbAm1yFYxMWX+fok2vh4OOj3RH+54bWTQOmUVCSgW8Ne98vO35AgA8nfpJ5XjLRFmYdpmwDCOY7qrWniq/CWfvixSenyH7xwTcZKR8rMpSFa/yFI/oY9D+51lFatgExZ188RfkESNTvOGt/CrytsLFhoAsLjclk6yl8pVGlASThTwGBJPNUCYRFI5eM3w3xSUbKs47NWDPwk79ogpX+icm8vsX7XWoJKzIK5im8JgWsmvZxd11xUn6VTeonHFHc4Bmij1c1/oY7WgYiy0dyT+Gjc2BgoGFflN4n4JEjR763b3kqMI9irqJFkfmRJfc2LV7JtgQlmSw/yT2F95MQWvtwKhyZeE8l9xTej0rF46hEPUhZPstXck/hw3UsjgpGJ15FhTT0lz6U5655r9fOUFEhhuSioT5rraLRh7xkMd9axQPUbgOUTKxQyURlC40lLFkRLcLx+kK+Uw1QoLBYrUVlF6Nh4djEZF4ew6kkK5NYJUAzDjH92vPgaq1CFcuvPY8+XMunFlUCtZxznELcorWgwuKK1vKrTTt9CSiRsOAiufSiYeGSd5x2uwEqIKtBXSu8KBHp26FZRdbFXJPmdOK7QN2CNoRfp3cpVlS7MdZk55Xov8kCFGrqUCLzAAAAAElFTkSuQmCC" alt="" s-if="voiceState" class="{{$style.voice}}"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAALNElEQVR4Ae1Ze2iX1xnWzEunxktMTGzUurqtOFdnJov7YwPZ0DWuOi14LzKc2g3qELywBdxEkG2I6ChSnYKTwhhDrJfaCWUKtUjRjkZLSE2TeTdq1HiJl1yMe57P7/n2/k7O7/6LdVsPnLzvOec973mf51y/X7p1+yJ9wcD/NQPd/wvRpxPzo2T40nGWzFdXtuciTi8ZuXD8tAO38XUi4WkmoKtiiyGhh6WnC/VcgknVVwzQeNjy4jVkWc8gbc7SXdBd/mJ8TZw4Ma+9vX0KcsXMmTMtOVaP6dPVBQWaSJL4TPOX0DfIAN/j4cOH2x+F6cGDB1M9fn1xdAkHvoFUlylY9osAG73H+PHje2LW/yTwlCDgZWOjMRWDlTknwDq3uoKQ9IFJpY5nlc0Ev8WCR/nPJMVDAMe2MVHPaXKdq+wDLRAMNFmmrdemtbV1swP+rYqKit6hPfuJVMWgmCRhkrskp5IalFKBRGCuXr36fczWmx0dHZ8CxB1m6gC1FW3fQ59eiTLs3nDA/wVnwTNhHxImkjm2YlFskmjKTZJDSQ0o8BHww4cPlwD42zZ4n97W1rb34MGDQxEeQcVk7PE/2j7w99epU6f2gR1nn8RpxWgV2HgUI2XOknVKXQOSfYHvdfLkyecxy/U2+EQ6bE+DsK/Cx5eVAX6D7QOidk2ePLkv2kmSCBAJIiDeKkCX7FNK4NesWdMfV9XHNvhUdPQ5OW/evEEIs++9e/fW2z4A//a0adPy0UaCEhGgCXFjzR49PFinGihm5mHT++7du5U2+HT0W7du/ba5ufkPtg+3CA68/vDNpf/UEsCl2Hvs2LF9sZyvWgDp6OjLQzJKLS0tB6ZPnz4Qvrn0fQTEOwPsZFHPSbJOuQLs7HNPPnP27NkfRtFnqQD832fMmDEYfvshJyIg2f7POQF2+XMGOPvcl32ampqWZok76I4D8D2c9oXwyX3vI4Bjugeg4rIT1Qk8jXKRNAh9Se+el5c3JFvnmPnDs2bNenX//v1tji9+7SmzSXpKX4HylSsC5M8y3B2JyzHjBPDvE/y+fftaHScWpAWuelc63f9TzJQAC1TeVBetADVkIrHsj86ePZvgW5z+Fpx0a+KrU3untkwJkEOBtuWIAJzibrvsEkqA/3Du3Lnz9+7d+8AxFADKeFldZKuyV2ZLAJ0KsB3AV2fb4+oAfwzgX92zZ8/97du3Dzt37twcGAss+/l0F6xbVj/KrJKASZJAXX/R6Y86ntQDbty4EfOISXYj4MX3Ea66r6Pv0M2bN4/DW/8MfaDMu583AK8/PX5SPfUZa06SQFspAmKuP4zGYAemQwDAfwzwo9GvdMOGDWUA/y8SFhIwIPQpAvT2d+98G5t0dM0+yZmVBO8SwNlhkGkRgGVfhd/zvoF+w9atWzcOn7zRh9PNmzd/j3ofASRdBCgWG590mGWf5MxKgWcQDIazIgL4Vh+UygoA+E9w2n8T9sNXr15dBvB1dqsYArit9PzlWE+MAAtauhiP9v+FCxe+i2AX48cJ7lfO2KBr1679zoJxdYCvnj9//ouwHbFy5UrOfK1rAxLXhf768SMIY/zs/Pnz5aj73AkQ+J4NDQ3lCPwhg0eAvw4DHnTx4sWVLiCVAb5mwYIFYwl+2bJl4/DoOaU2Ky9fvrws9Jd/+/btX4Vt7RjzOyEJjIOZk6IJshLV2SXrjLo7+z2vX7/+IwWN7/gq2HAFFBw/fnyK6q0E2E8XLVoUgF+6dOm3UK6x7VY/ceLES6G/fP5GoDYQPQn1qawCmGWXLAECT0nWGUCvrVu3FiKwtjC49o0bNz6P+oIxY8aUIOgmBU0JsLUEjfbhS5YseRHlattudfRtLC0t5RfgALwJnkNbR9jegjG41T43AqLljyCCT19cW0cVPPZ+JeoLamtrf4q6dtVjj3+2YsUKzvywxYsXjwH4T9Tmk42Njb+BLX8VGogvy9WywVgfoE5XIUmw24CTYycNxeySdaYVIAL4GAlOfxxWrylAzFwDXnA/R7lVdTzdKysrCb4Uy380wJ9Qm0/C/sSkSZOehX0BXobFeFZflB2W/yLU85M7lccQzLJLIsAFHyx/uA6+/ZcvX16IIC8rSMjgUGSZM4/fBgn+2YULF77Ae9/YdVIxw6e3bNnCbcLfAAru3LnzpoxIBN4MPGOeCAECT+kjIJh9tPF+7nflypVoFShggKlbv349wZfgihwJ8P9Um0/iN8ADq1ategH2/C2hsK6ujttIe/8RtsVrqOd4JIDjJzsHYJJ5cgnQXtPsi4Dg9XfmzJlXEGw08wB/dtOmTQRfjFzCvHv37h9gP+/AFjiJrXILM9rMFcK6Q4cO/Ti0o31RCD7aRujzDur1IOpyAlzwXAHa+yIgWP6o74s9/xOAv69ZBbiz27ZtI/iiOXPmjMSy/Qr0iAjoASEeWYzf+4djn2+1Mw9/NTt27BgJ+ydCgAVPPd7yDwjAj58vI9h7BvyZnTt3Enwhftt/DjN3FDPdhNvhDVxf41DvJWLt2rVj8HhaA7D2LHmEn8JrAf5r6MdvjC4nIBXw0el/6dKllxzw53bt2kXwBZj1Uuz5D0RMKLEz2uvx9feP+/fvH8L/Dd7DIfc3bAM+cqK9rj7ovx9nCFdP/5AAfRGS/JzfAi74hLMP8JMR6F0Fi5k7j19xCJ53d0F+fn4htsYv3BmVfSJJX1gNr4e+eOrb2edHF8+fnBKQKvhg9vFG52/+zQKBJX4B/9Tk1cVg+UoLSIAMVgI+YF7HVvgQ9tHDSH2NbMGMvw/bX06YMIHbJHgEQXL2ufTt7KdyAxBTSikt8A0NDRMRdPRfG97NR44cIXgGSgIsCRERqB+M5++IqqqqV7D83xVw6O+gbgY+jkbQBrkA2YLn7BO8vf5yNvvJwMec/Pz/PgK/reABvuHYsWM82BgkM0lwidCKEBmD7W8F1NGHwOOB18GXztJPafb5Y0ayFBGEPV9eVFTEu5hAu4GEK/haqygvL68LndDW94Nk2BwJnw3r4uWOBG2R00wUHwFiTjLwi1fe+CFDhhA8Z5fgG2tqairKyso+Cwwef4BYYNQtIdQjn/ivUWQb6gTJZElwgbtl2VtJnSny/7jo/+sjwFoGQePA+zbAH0AD9zbBXzt16lQFPndPoShQvgFZp/aga1jmv81ce5YT5XTAc6yUkkuAgpXsVl9fP7S4uPhdeOP+Jfjrp0+frhg9enRNOIIPSNgUrQD6o538xvQJyYgH3gWuvq7UmJRqs3VenS+8eInBdi8pKeH7nKcywd/Ae3/KqFGjqln0ZDdYla0MdFx3Oje6hTrrfdkdB2YRwJSBslO8FABFI2WnJ291dfUInPQfMYc/RvIkdjNfZcy8m31Z7ezHq6wPDtN++CltITN11Omao418uVcdbyTFaOO2OkxST+qoHrYsnZJJ5cel2L+aCcnY1scl29/qstVMsyzdStVbSd2mRONbu0i3Z4CARo0ehQNYOw3oSk/XoMr2Vx9ryzrVS7dl2qps+yWqd+1iylxSFpB0SmV2sPUsKykYV6rdlfLj1qtMP9aX1Wmjsuwl49WrPa5MRIA6KWhJ1VPaganbsrVzdZ+d6pJJ60u2ti4tPRkBAi3pc64gXGlt1V82tk262iRZL13StVU5Y8nAFByd+HRb5xtIwUn6bFTn+lLZ7WvLVqcftyzfGUkGoCDkwJatznaV3SBs2eo+n9aP2iXdvsnK6pexdLeAHAlovLLq0w3Q9Ss/rnT9uu05K8cjgAOkGixt0w04nu90/XDsrBIDiReMHMdrf9LBdsl4iVaACPiflppdyVyAdWcqW9+uv1zEGPn4N2idlYY9IKXBAAAAAElFTkSuQmCC" alt="" s-else class="{{$style[\'voice-close\']}}"> </template> <div class="{{$style.info}} c-color-gray" s-else> <div class="{{$style[\'info-inner\']}}"> <div class="{{$style[\'info-title\']}}">{{errorMsg.title}}</div> <p>{{errorMsg.sub1}}</p> <p>{{errorMsg.sub2}}</p> </div> </div> <video class="{{$style.video}} videoMedia" autoplay="autoplay" s-ref="videoMedia" muted></video> <audio class="{{$style.voice}} voiceMedia" s-ref="voiceMedia" muted></audio> </div> </div> </div> ';
        },
        function(t, e, n) {
            var a = n(2),
                i = n(95);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '.wrapper_YeQoN {\n  font-size: 12px;\n  color: #f73131;\n  line-height: 1;\n  margin-top: 1px;\n  text-align: left;\n}\n.wrapper_YeQoN .icon_1LJ5z {\n  display: inline-block;\n  height: 14px;\n  line-height: 14px;\n  margin-right: 0;\n}\n',
                ''
            ]), e.locals = {
                wrapper: 'wrapper_YeQoN',
                icon: 'icon_1LJ5z'
            }, t.exports = e;
        },
        function(t, e) {
            t.exports = ' <div class="{{$style.wrapper}}"> <i class="c-icon {{$style.icon}}">&#xe656;</i> <span>{{ text }}</span> </div> ';
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(98)],
                o = n(100),
                r = n(28)['default'];
            t.exports = n(28), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            var a = n(2),
                i = n(99);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '.content_2aDja {\n  padding: 16px 22px;\n  text-align: left;\n  font-size: 13px;\n}\n.content_2aDja .input_qkECH textarea {\n  height: 100px!important;\n}\n.content_2aDja .left-title_28Joo {\n  font-size: 13px;\n  line-height: 28px;\n  height: 28px;\n  display: inline-block;\n  margin-right: 10px;\n  vertical-align: top;\n}\n.content_2aDja .left-title_28Joo .need_12leX {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  color: #F73131;\n  margin-right: 6px;\n  font-style: normal;\n  height: 100%;\n  line-height: 28px;\n}\n.content_2aDja .titlewrap_2SyMg {\n  height: 44px;\n  display: inline-block;\n}\n.content_2aDja .titlewrap_2SyMg input {\n  height: 100%;\n}\n.content_2aDja .participants_3t2hp {\n  display: inline-block;\n  margin-right: 0;\n  margin-bottom: 8px;\n  position: relative;\n}\n.content_2aDja .participants-number_SrzmF {\n  color: #C4C7CE;\n  font-size: 12px;\n  margin-top: 8px;\n}\n.content_2aDja .choice-title_spA7j {\n  vertical-align: top;\n  margin-right: 14px;\n  margin-left: 13px;\n  float: left;\n}\n.content_2aDja .choice-title_spA7j.part_1dFTr {\n  margin-left: 26px;\n}\n.content_2aDja .pass-title_9I-b_ {\n  float: none;\n}\n.content_2aDja .pass_NZpS9 {\n  height: 42px;\n  width: 100%;\n  overflow: hidden;\n  padding-top: 2px;\n}\n.content_2aDja .pass_NZpS9 .choice-title_spA7j,\n.content_2aDja .pass_NZpS9 label {\n  margin-top: 3px;\n}\n.content_2aDja .pass_NZpS9 .passwd_ZOXyd {\n  margin-top: -2px;\n  display: inline-block;\n  margin-right: 0px;\n}\n.content_2aDja .pass_NZpS9 .passwd_ZOXyd .passWrapper_2wyEw {\n  display: inline-block;\n  width: 176px;\n  box-sizing: border-box;\n  margin-left: 15px;\n}\n.content_2aDja .pass_NZpS9 .passwd_ZOXyd .passWrapper_2wyEw .passinput_1VzwO {\n  width: 176px;\n  box-sizing: border-box !important;\n}\n.content_2aDja .pass_NZpS9 .passwd_ZOXyd .passWrapper_2wyEw .passinput_1VzwO input {\n  height: 100%;\n  width: 135px;\n}\n.content_2aDja .pass_NZpS9 .passwd_ZOXyd .passWrapper_2wyEw .passinput_1VzwO .right-icon_8z87D {\n  height: 16px;\n  line-height: 16px;\n  float: right;\n  margin-top: 5px;\n  font-size: 16px;\n  color: #9195a3;\n}\n.content_2aDja .pass_NZpS9 .passwarn_1whNP {\n  overflow: hidden;\n  display: inline-block;\n  margin-left: 173px;\n}\n.content_2aDja .inputdisc_UKpEH {\n  margin-bottom: 14px;\n  display: inline-block;\n  height: 130px;\n}\n.content_2aDja .open-btn_hdX1c,\n.content_2aDja .forbid-btn_1aYg1 {\n  margin-left: 110px;\n}\n.content_2aDja .calStart_3AzBS,\n.content_2aDja .calEnd_2NDEr {\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 12px;\n  z-index: 2;\n}\n.content_2aDja .start_3ysI5,\n.content_2aDja .end_1aeoM {\n  margin-bottom: 15px;\n}\n.content_2aDja .c-input input::-webkit-input-placeholder {\n  color: #9195a3;\n}\n.content_2aDja textarea::-webkit-input-placeholder {\n  color: #9195a3;\n}\n.video-scroll {\n  overflow: hidden;\n}\n',
                ''
            ]), e.locals = {
                content: 'content_2aDja',
                input: 'input_qkECH',
                'left-title': 'left-title_28Joo',
                leftTitle: 'left-title_28Joo',
                need: 'need_12leX',
                titlewrap: 'titlewrap_2SyMg',
                participants: 'participants_3t2hp',
                'participants-number': 'participants-number_SrzmF',
                participantsNumber: 'participants-number_SrzmF',
                'choice-title': 'choice-title_spA7j',
                choiceTitle: 'choice-title_spA7j',
                part: 'part_1dFTr',
                'pass-title': 'pass-title_9I-b_',
                passTitle: 'pass-title_9I-b_',
                pass: 'pass_NZpS9',
                passwd: 'passwd_ZOXyd',
                passWrapper: 'passWrapper_2wyEw',
                passinput: 'passinput_1VzwO',
                'right-icon': 'right-icon_8z87D',
                rightIcon: 'right-icon_8z87D',
                passwarn: 'passwarn_1whNP',
                inputdisc: 'inputdisc_UKpEH',
                'open-btn': 'open-btn_hdX1c',
                openBtn: 'open-btn_hdX1c',
                'forbid-btn': 'forbid-btn_1aYg1',
                forbidBtn: 'forbid-btn_1aYg1',
                calStart: 'calStart_3AzBS',
                calEnd: 'calEnd_2NDEr',
                start: 'start_3ysI5',
                end: 'end_1aeoM'
            }, t.exports = e;
        },
        function(t, e) {
            t.exports = ' <div class="{{$style[\'quick-wrapper\']}} v-container"> <v-header title="{{modifyMeet ? \'修改会议\' : \'预约会议\'}}" closeType="exit"></v-header> <div class="{{$style.content}}"> <span class="{{$style[\'left-title\']}}"><i class="{{$style.need}}">*</i>会议主题</span> <div class="{{$style.titlewrap}}"> <c-input placeholder="请输入会议主题" class="{{$style.titleInput}}" widthSize="6" value="{= roomName =}" on-blur="getValue($event)" on-input="limitName($event)" on-clear="limitName($event)" params="{{{maxLength: 30}}}" clearable="{{true}}"></c-input> <v-warn s-if="warn.title" text="{{ warn.titleText }}"></v-warn> </div> <div class="{{$style.start}}"> <span class="{{$style[\'left-title\']}}"><i class="{{$style.need}}">*</i>开始时间</span> <c-cal class="{{ $style.calStart }}" on-change="chooseDate($event, \'start\')" checkAvailableBeforeNowDay="{{ startCalData.limitBefore }}" checkAvailableAfterNowDay="{{ startCalData.limitAfter }}" selectDate="{{ startCalDate }}"></c-cal> <c-select maxHeight="160px" dataList="{{ orderData.startSelectList }}" columns="1" width="42px" columnWidth="42px" on-change="chooseTime($event, \'start\')" index="{{ orderData.startIndex }}" on-boardopen="openSelect(\'start\')"></c-select> </div> <div class="{{$style.end}}"> <span class="{{$style[\'left-title\']}}"><i class="{{$style.need}}">*</i>结束时间</span> <c-cal class="{{ $style.calEnd }}" checkAvailableBeforeNowDay="{{endCalData.limitBefore}}" on-change="chooseDate($event, \'end\')" selectDate="{{ endCalData.initShow }}" checkAvailableAfterNowDay="{{ endCalData.limitAfter }}"></c-cal> <c-select maxHeight="160px" dataList="{{ orderData.endSelectList }}" columns="1" width="42px" columnWidth="42px" on-change="chooseTime($event, \'end\')" index="{{ orderData.endIndex }}" on-boardopen="openSelect(\'end\')"></c-select> </div> <span class="{{$style[\'choice-title\']}} {{ $style.part }}">参会人</span> <span class="{{$style[\'participants-number\']}}"></span> <v-sug s-ref="sugRef" class="{{$style.participants}} c-span6 c-span-last" mailList="{{ mailList }}" on-setPartner="setPartner($event)" showPlaceholder="{{showPlaceholder}}"></v-sug> <div class="{{$style.pass}}"> <span class="{{$style[\'choice-title\'] $style[\'pass-title\']}}">参会密码</span> <div class="{{$style.passwd}} c-span6 c-span-last"> <c-checkbox checked="{{boxChecked}}" name="passwd" value="开启密码" class="c-span2 c-span-last" on-change="openPass($event)"></c-checkbox> <div class="{{$style.passWrapper}}" s-if="openPassInput"> <div class="c-input {{$style.passinput}}"> <input type="text" class="{{$style[\'passwd-input\']}}" placeholder="请输入6位数字密码" on-input="processPassShow($event)" on-focus="processPassFocus" s-ref="passinput" maxLength="6" on-blur="limitPass"> <i s-if="passShow" class="c-icon {{$style[\'right-icon\']}}" on-click="switchPass(\'hide\')">&#xe66c;</i> <i s-else class="c-icon {{$style[\'right-icon\']}}" on-click="switchPass(\'show\')">&#xe66d;</i> </div> </div> </div> <v-warn s-if="warn.pass" text="{{ warn.passText }}" class="{{$style.passwarn}}"></v-warn> </div> <span class="{{$style[\'choice-title\']}}">会议详情</span> <div class="{{$style.inputdisc}}"> <c-input value="{= description =}" placeholder="请输入会议详情" type="textarea" widthSize="6" params="{{{maxLength: 100}}}" on-blur="checkDesc($event)" on-input="updateDesc($event)"></c-input> <v-warn s-if="warn.desc" text="{{ warn.descText }}"></v-warn> </div> <c-btn text="{{modifyMeet ? \'确定修改\' : \'预约会议\'}}" size="large" type="{{(canOpenMeet.title && canOpenMeet.pass && canOpenMeet.desc) ? \'primary\' : \'disable\'}}" class="{{(canOpenMeet.title && canOpenMeet.pass) ? $style[\'open-btn\'] : $style[\'forbid-btn\']}}" on-click="openMeet"></c-btn> </div> </div> ';
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(102)],
                o = n(104),
                r = n(29)['default'];
            t.exports = n(29), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            var a = n(2),
                i = n(103);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '.emailWrapper_1hcAK {\n  position: relative;\n  display: inline-block;\n  line-height: 0;\n  width: 272px;\n  height: 72px;\n  font: 13px/23px Arial, sans-serif;\n  color: #333;\n  border: 1px solid #d7d9e0;\n  border-radius: 6px;\n  padding: 8px;\n  resize: none;\n  outline: 0;\n  box-sizing: border-box;\n  overflow-y: scroll;\n}\n.emailWrapper_1hcAK.nobottom_1eIK3 {\n  border-radius: 6px 6px 0 0;\n}\n.emailWrapper_1hcAK .placeholder_1hQea {\n  color: #9195a3;\n  position: absolute;\n  left: 10;\n  top: 2px;\n}\n.emailWrapper_1hcAK .input_1J5q- {\n  border: none;\n  outline: none;\n  width: 80%;\n  vertical-align: top;\n  border-radius: 4px;\n  padding: 3px 8px;\n  box-sizing: border-box;\n}\n.emailWrapper_1hcAK .input_1J5q-.inputStyle_1BLSC {\n  background: #EDF0FD;\n}\n.emailWrapper_1hcAK .selectSugOpt {\n  background: #EDF0FD;\n  border-radius: 4px;\n  width: fit-content;\n  padding: 0 6px;\n  box-sizing: border-box;\n  height: 24px;\n  line-height: 24px;\n  display: inline-block;\n  margin-right: 8px;\n}\n.emailWrapper_1hcAK .selectSugOpt span {\n  overflow: hidden;\n  display: inline-block;\n  margin-right: 2px;\n  color: #315EFB;\n}\n.emailWrapper_1hcAK .selectSugOpt span:hover {\n  color: #315EFB;\n}\n.emailWrapper_1hcAK .selectSugOpt i {\n  font-size: 8px;\n  transform: scale(0.8);\n  display: inline-block;\n  vertical-align: top;\n}\n.emailWrapper_1hcAK .selectSugOpt i:hover {\n  color: #315EFB;\n}\n.sug_2jUpc {\n  position: absolute;\n  background: #fff;\n  width: 254px;\n  border: 1px solid #D7D9E0;\n  border-radius: 0 0 4px 4px;\n  top: 72px;\n  padding: 0 8px;\n  max-height: 106px;\n  overflow: scroll;\n  z-index: 2;\n  border-top: none;\n}\n.sug_2jUpc li {\n  height: 24px;\n  line-height: 24px;\n  color: #626675;\n}\n.sug_2jUpc li:hover {\n  background: #F5F5F6;\n  color: #315EFB;\n  width: 254px;\n  margin-left: -8px;\n  padding: 0 8px;\n}\n.sug_2jUpc.sughide_2vLLo {\n  display: none;\n}\n.disc_1nYlf {\n  font-size: 12px;\n  color: #C4C7CE;\n}\n',
                ''
            ]), e.locals = {
                emailWrapper: 'emailWrapper_1hcAK',
                nobottom: 'nobottom_1eIK3',
                placeholder: 'placeholder_1hQea',
                input: 'input_1J5q-',
                inputStyle: 'inputStyle_1BLSC',
                sug: 'sug_2jUpc',
                sughide: 'sughide_2vLLo',
                disc: 'disc_1nYlf'
            }, t.exports = e;
        },
        function(t, e) {
            t.exports = ' <div> <div class="{{$style.emailWrapper}} {{ showsug ? $style.nobottom : \'\'}}" on-click="processSug" s-ref="emailWrapper"> <div s-ref="sugWrapper"></div> <span s-if="showPlaceholder" class="{{$style.placeholder}}">请输入参会人邮箱</span> <input type="text" class="{{$style.input}} {{ inputStatus ? $style.inputStyle : \'\' }}" on-focus="inputFocus($event)" on-input="startInput($event)" on-blur="emailInputBlur($event)" on-keyup="defineEmail($event)" s-ref="emailInput"/> </div> <ul class="{{$style.sug}} {{showsug ? \'\' : $style.sughide }}" s-ref="sugList"> <li s-for="k in emails" on-click="insertPartner(k)">{{ k }}</li> </ul> <span class="{{$style.disc}}">参会人邮箱将收到会议邀请</span> </div> ';
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(106)],
                o = n(108),
                r = n(30)['default'];
            t.exports = n(30), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            var a = n(2),
                i = n(107);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '.content_3wd8k {\n  padding: 81px 0 24px;\n}\n.content_3wd8k .title_2aWm2 {\n  font-size: 30px;\n  color: #4e6ef2;\n  line-height: 30px;\n}\n.content_3wd8k .info_2XB4h {\n  margin-top: 12px;\n  margin-bottom: 59px;\n  font-size: 14px;\n  text-align: center;\n  line-height: 22px;\n}\n.content_3wd8k .btn_2YDf0 {\n  display: block;\n  margin: 0 auto 16px;\n}\n',
                ''
            ]), e.locals = {
                content: 'content_3wd8k',
                title: 'title_2aWm2',
                info: 'info_2XB4h',
                btn: 'btn_2YDf0'
            }, t.exports = e;
        },
        function(t, e) {
            t.exports = ' <div class="{{$style[\'init\']}} v-container"> <v-header closeType="hide" needBack="{{ false }}"></v-header> <div class="{{$style.content}}"> <div class="{{$style.title}}">百度视频会议</div> <div class="{{$style.info}} c-color-gray2">免费开放不限时\uFF0C高清稳定智能降噪<br/>无需安装客户端一秒入会</div> <c-btn text="快速会议" type="primary" size="large" on-click="quickMeet" class="{{ $style.btn }} {{ $style.btnblue }}"></c-btn> <c-btn text="预约会议" type="default" size="large" on-click="orderMeet" class="{{ $style.btn }}"></c-btn> <c-btn text="会议管理" type="default" size="large" class="{{ $style.btn }}" on-click="meetManage"></c-btn> <c-toast s-if="errorWarn" pos="{{ pastePos }}" on-hide="switchToast">操作太频繁\uFF0C请稍后再试</c-toast> </div> <v-foot s-if="showFeedBack" on-logSend="logSend($event)" text="用户反馈" type="feedback" tipText="{{showTips() ? \'为保证参会体验\uFF0C请使用Chrome或Firefox浏览器\' : \'\'}}"></v-foot> </div> ';
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(110)],
                o = n(112),
                r = n(32)['default'];
            t.exports = n(32), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            var a = n(2),
                i = n(111);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '.manage-wrapper_279X9 .bar-content_2jCA8 {\n  padding: 0 24px;\n}\n.manage-wrapper_279X9 .bar-content_2jCA8 .filter-bar_2U6ef {\n  width: 100%;\n  height: 34px;\n  color: #626675;\n}\n.manage-wrapper_279X9 .bar-content_2jCA8 .filter-bar_2U6ef .future-bar_XjgGb {\n  float: left;\n  font-size: 14px;\n  line-height: 34px;\n  cursor: pointer;\n}\n.manage-wrapper_279X9 .bar-content_2jCA8 .filter-bar_2U6ef .history-bar_1NRva {\n  float: left;\n  font-size: 14px;\n  line-height: 34px;\n  margin-left: 24px;\n  cursor: pointer;\n}\n.manage-wrapper_279X9 .bar-content_2jCA8 .filter-bar_2U6ef .select-com-bar_20Z1N {\n  float: right;\n  height: 30px;\n  width: 96px;\n  margin-top: 2px;\n}\n.manage-wrapper_279X9 .bar-content_2jCA8 .filter-bar_2U6ef .select-bar_GgvC4 {\n  position: relative;\n  color: #222222;\n}\n.manage-wrapper_279X9 .bar-content_2jCA8 .filter-bar_2U6ef .select-bar_GgvC4:after {\n  content: "";\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  margin-left: -16px;\n  display: block;\n  width: 32px;\n  height: 2px;\n  background-color: #4E6EF2;\n  border-radius: 1px;\n}\n.manage-wrapper_279X9 .fixed-title_3PDjb {\n  position: absolute;\n  top: 88px;\n  left: 0;\n  right: 0;\n  height: 36px;\n  line-height: 40px;\n  font-size: 13px;\n  color: #333333;\n  z-index: 2;\n}\n.manage-wrapper_279X9 .fixed-title_3PDjb span {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  padding-left: 24px;\n  text-align: left;\n  background: #FFFFFF;\n}\n.manage-wrapper_279X9 .fixed-title_3PDjb:after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 1px;\n  height: 10px;\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);\n}\n.manage-wrapper_279X9 .none-title_2b9H8 {\n  display: none;\n}\n.manage-wrapper_279X9 .area-content_OkIFG {\n  position: relative;\n  padding: 0 24px;\n  margin-right: 4px;\n  padding-right: 20px;\n  height: 492px;\n  overflow-y: scroll;\n  overflow: hidden;\n  overflow-y: overlay;\n}\n.manage-wrapper_279X9 .area-content_OkIFG .display-area_2-7gS {\n  position: absolute;\n  left: 0;\n  right: 0;\n  padding-left: 24px;\n}\n.manage-wrapper_279X9 .area-content_OkIFG .display-area_2-7gS .future-area_Uo4Pd {\n  display: block;\n}\n.manage-wrapper_279X9 .area-content_OkIFG .display-area_2-7gS .future-area_Uo4Pd .meet-time_2OeM2 {\n  margin-top: 21px;\n  text-align: left;\n  padding-bottom: 3px;\n  font-size: 13px;\n  color: #9195A3;\n  line-height: 13px;\n}\n.manage-wrapper_279X9 .area-content_OkIFG .display-area_2-7gS .future-area_Uo4Pd .meet-time-spmargin_35fjT {\n  margin-top: 14px;\n}\n.manage-wrapper_279X9 .area-content_OkIFG .display-area_2-7gS .future-area_Uo4Pd .load-more_1Zuz1 {\n  padding: 32px 0;\n  font-size: 13px;\n  color: #626675;\n  line-height: 12px;\n  text-align: center;\n  padding-right: 20px;\n}\n.manage-wrapper_279X9 .area-content_OkIFG .display-area_2-7gS .future-area_Uo4Pd .load-more_1Zuz1 span {\n  cursor: pointer;\n}\n.manage-wrapper_279X9 .area-content_OkIFG .display-area_2-7gS .future-area_Uo4Pd .load-more_1Zuz1 span:hover {\n  color: #315EFB;\n}\n.manage-wrapper_279X9 .area-content_OkIFG .display-area_2-7gS .future-area_Uo4Pd .no-more_1YEvi {\n  padding: 32px 0;\n  font-size: 13px;\n  color: #9195A3;\n  line-height: 12px;\n  text-align: center;\n  padding-right: 20px;\n}\n.manage-wrapper_279X9 .default-img_p9137 {\n  position: relative;\n  padding: 0 24px;\n  margin-right: 4px;\n  padding-right: 20px;\n  height: 492px;\n}\n.manage-wrapper_279X9 .default-img_p9137 img {\n  margin: auto;\n  margin-top: 82px;\n  width: 200px;\n  height: 160px;\n}\n.manage-wrapper_279X9 .default-img_p9137 div {\n  text-align: center;\n  margin-top: 28px;\n  font-size: 14px;\n  color: #9195A3;\n  line-height: 14px;\n}\n.manage-wrapper_279X9 .hide_2Ef3I {\n  display: none;\n}\n',
                ''
            ]), e.locals = {
                'manage-wrapper': 'manage-wrapper_279X9',
                manageWrapper: 'manage-wrapper_279X9',
                'bar-content': 'bar-content_2jCA8',
                barContent: 'bar-content_2jCA8',
                'filter-bar': 'filter-bar_2U6ef',
                filterBar: 'filter-bar_2U6ef',
                'future-bar': 'future-bar_XjgGb',
                futureBar: 'future-bar_XjgGb',
                'history-bar': 'history-bar_1NRva',
                historyBar: 'history-bar_1NRva',
                'select-com-bar': 'select-com-bar_20Z1N',
                selectComBar: 'select-com-bar_20Z1N',
                'select-bar': 'select-bar_GgvC4',
                selectBar: 'select-bar_GgvC4',
                'fixed-title': 'fixed-title_3PDjb',
                fixedTitle: 'fixed-title_3PDjb',
                'none-title': 'none-title_2b9H8',
                noneTitle: 'none-title_2b9H8',
                'area-content': 'area-content_OkIFG',
                areaContent: 'area-content_OkIFG',
                'display-area': 'display-area_2-7gS',
                displayArea: 'display-area_2-7gS',
                'future-area': 'future-area_Uo4Pd',
                futureArea: 'future-area_Uo4Pd',
                'meet-time': 'meet-time_2OeM2',
                meetTime: 'meet-time_2OeM2',
                'meet-time-spmargin': 'meet-time-spmargin_35fjT',
                meetTimeSpmargin: 'meet-time-spmargin_35fjT',
                'load-more': 'load-more_1Zuz1',
                loadMore: 'load-more_1Zuz1',
                'no-more': 'no-more_1YEvi',
                noMore: 'no-more_1YEvi',
                'default-img': 'default-img_p9137',
                defaultImg: 'default-img_p9137',
                hide: 'hide_2Ef3I'
            }, t.exports = e;
        },
        function(t, e) {
            t.exports = ' <div class="{{$style[\'manage-wrapper\']}} v-container"> <v-header title="会议管理" closeType="exit"></v-header> <div class="{{$style[\'bar-content\']}}"> <div class="{{$style[\'filter-bar\']}}"> <div class="{{$style[\'future-bar\']}} {{meetStatus === 0 ? $style[\'select-bar\'] : \'\'}}" on-click="changeMeetStatus(0)">待开会议</div> <div class="{{$style[\'history-bar\']}} {{meetStatus === 5 ? $style[\'select-bar\'] : \'\'}}" on-click="changeMeetStatus(5)">历史会议</div> <div class="{{$style[\'select-com-bar\']}}"> <c-select data-list="{{myMeetList}}" columns="1" class="select" alignX="left" width="57px" style="text-align: left; z-index: 3;" columnWidth="57px" on-change="getMyMeet($event)"></c-select> </div> </div> </div> <div class="{{noMeet ? $style[\'hide\'] : \'\'}}"> <div class="{{$style[\'fixed-title\']}} {{fixedTitle ? \'\' : $style[\'none-title\']}}"> <span>{{fixedTitle}}</span> </div> <div s-ref="areaContent" class="{{$style[\'area-content\']}}"> <div class="{{$style[\'display-area\']}}"> <div class="{{$style[\'future-area\']}}"> <div s-for="val, index in meetList"> <div class="{{$style[\'meet-time\']}} {{index === 0 ? $style[\'meet-time-spmargin\'] : \'\'}}"> {{parseShowDate(val.titleDate, val.week)}} </div> <v-meet-item s-for="item in val.msg" meetStatus="{{meetStatus}}" item="{{item}}" bsToken="{{bsToken}}" on-updateMeet="updateMeet($event)" on-reOrderMeet="reOrderMeet($event)" on-shareEvent="shareEvent($event)" on-meetStart="meetStart($event)" on-modifyMeet="modifyMeet($event)"></v-meet-item> </div> <div class="{{loadStatus === 1 ? $style[\'load-more\'] : $style[\'no-more\']}}"> <span on-click="loadMoreData(loadStatus)">{{loadStatus === 1 ? \'点击加载\' : loadStatus === 2 ? \'加载中...\' : \'没有更多啦\'}}</span> </div> </div> </div> </div> </div> <div class="{{$style[\'default-img\']}} {{!noMeet ? $style[\'hide\'] : \'\'}}"> <img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=291248239,3043432353&fm=179&app=35&f=PNG?w=400&h=320&s=48211D720B23752A5A4D5DDC030050B0"> <div>{{meetStatus === 0 ? \'暂无待开会议\' : \'暂无参与的会议\'}}</div> </div> <c-toast s-if="pasteShow" pos="{{ pastePos }}" on-hide="onHide">会邀已复制</c-toast> </div> ';
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(114)],
                o = n(116),
                r = n(33)['default'];
            t.exports = n(33), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            var a = n(2),
                i = n(115);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '.item-wrapper_1LNDO {\n  margin-top: 20px;\n  width: 100%;\n  height: 35px;\n}\n.item-wrapper_1LNDO:after {\n  content: "";\n  display: block;\n  overflow: hidden;\n  clear: both;\n}\n.item-wrapper_1LNDO .left-place_Hln8A {\n  position: relative;\n  float: left;\n  width: 81px;\n  font-size: 13px;\n  color: #626675;\n  line-height: 13px;\n}\n.item-wrapper_1LNDO .left-place_Hln8A:after {\n  content: "";\n  display: block;\n  overflow: hidden;\n  clear: both;\n}\n.item-wrapper_1LNDO .left-place_Hln8A .start-time_KlFhH {\n  float: left;\n}\n.item-wrapper_1LNDO .left-place_Hln8A .end-time_pPhWh {\n  float: right;\n}\n.item-wrapper_1LNDO .left-place_Hln8A .special-time_2qjaK {\n  float: left;\n  color: #315EFB;\n}\n.item-wrapper_1LNDO .common-time_2DOu8:before {\n  content: "";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -2px;\n  margin-top: -1px;\n  display: block;\n  height: 1px;\n  width: 4px;\n  background-color: #626675;\n}\n.item-wrapper_1LNDO .mid-place_Ymyci {\n  float: left;\n  width: 220px;\n  margin-left: 25px;\n  margin-right: 8px;\n}\n.item-wrapper_1LNDO .mid-place_Ymyci .fir-floor_1sdOQ {\n  max-width: 220px;\n  font-size: 14px;\n  color: #222222;\n  line-height: 14px;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.item-wrapper_1LNDO .mid-place_Ymyci .tostart-meet_2rqwm {\n  cursor: pointer;\n}\n.item-wrapper_1LNDO .mid-place_Ymyci .tostart-meet_2rqwm:hover {\n  color: #315EFB;\n}\n.item-wrapper_1LNDO .mid-place_Ymyci .sec-floor_20g_X {\n  max-width: 220px;\n  margin-top: 6px;\n  font-size: 13px;\n  color: #9195A3;\n  line-height: 15px;\n  text-align: left;\n}\n.item-wrapper_1LNDO .mid-place_Ymyci .sec-floor_20g_X:after {\n  content: "";\n  display: block;\n  overflow: hidden;\n  clear: both;\n}\n.item-wrapper_1LNDO .mid-place_Ymyci .sec-floor_20g_X span {\n  float: left;\n}\n.item-wrapper_1LNDO .mid-place_Ymyci .sec-floor_20g_X .join-member_3c0Tr {\n  max-width: 190px;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.item-wrapper_1LNDO .mid-place_Ymyci .sec-floor_20g_X .join-num_2vdaN {\n  max-width: 30px;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.item-wrapper_1LNDO .right-place_10hFF {\n  position: relative;\n  float: left;\n  width: 14px;\n  height: 16px;\n  line-height: 16px;\n  color: #E4E4E5;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.item-wrapper_1LNDO .right-place_10hFF:hover {\n  color: #315EFB;\n}\n.item-wrapper_1LNDO .right-place_10hFF .pop-board_KRINH {\n  position: absolute;\n  top: 22px;\n  right: -10px;\n  width: 56px;\n  background: #FFFFFF;\n  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 6px;\n  padding: 7px 14px;\n  z-index: 1;\n}\n.item-wrapper_1LNDO .right-place_10hFF .pop-board_KRINH .hide-tag_17g3F {\n  display: none;\n}\n.item-wrapper_1LNDO .right-place_10hFF .pop-board_KRINH div {\n  padding: 6px 0;\n  font-size: 13px;\n  color: #222222;\n  line-height: 13px;\n}\n.item-wrapper_1LNDO .right-place_10hFF .pop-board_KRINH div:hover {\n  color: #315EFB;\n}\n.item-wrapper_1LNDO .right-place_10hFF .none-pop_ZHE8S {\n  display: none;\n}\n',
                ''
            ]), e.locals = {
                'item-wrapper': 'item-wrapper_1LNDO',
                itemWrapper: 'item-wrapper_1LNDO',
                'left-place': 'left-place_Hln8A',
                leftPlace: 'left-place_Hln8A',
                'start-time': 'start-time_KlFhH',
                startTime: 'start-time_KlFhH',
                'end-time': 'end-time_pPhWh',
                endTime: 'end-time_pPhWh',
                'special-time': 'special-time_2qjaK',
                specialTime: 'special-time_2qjaK',
                'common-time': 'common-time_2DOu8',
                commonTime: 'common-time_2DOu8',
                'mid-place': 'mid-place_Ymyci',
                midPlace: 'mid-place_Ymyci',
                'fir-floor': 'fir-floor_1sdOQ',
                firFloor: 'fir-floor_1sdOQ',
                'tostart-meet': 'tostart-meet_2rqwm',
                tostartMeet: 'tostart-meet_2rqwm',
                'sec-floor': 'sec-floor_20g_X',
                secFloor: 'sec-floor_20g_X',
                'join-member': 'join-member_3c0Tr',
                joinMember: 'join-member_3c0Tr',
                'join-num': 'join-num_2vdaN',
                joinNum: 'join-num_2vdaN',
                'right-place': 'right-place_10hFF',
                rightPlace: 'right-place_10hFF',
                'pop-board': 'pop-board_KRINH',
                popBoard: 'pop-board_KRINH',
                'hide-tag': 'hide-tag_17g3F',
                hideTag: 'hide-tag_17g3F',
                'none-pop': 'none-pop_ZHE8S',
                nonePop: 'none-pop_ZHE8S'
            }, t.exports = e;
        },
        function(t, e) {
            t.exports = ' <div class="{{$style[\'item-wrapper\']}}"> <div s-if="!subtractTime(item.startTime.utcTime)" class="{{$style[\'left-place\']}} {{!subtractTime(item.startTime.utcTime) ? $style[\'common-time\'] : \'\'}}"> <span class="{{$style[\'start-time\']}}">{{item.startTime.time}}</span> <span class="{{$style[\'end-time\']}}">{{item.endTime.time)}}</span> </div> <div s-else class="{{$style[\'left-place\']}}"> <span class="{{$style[\'special-time\']}}">{{subtractTime(item.startTime.utcTime)}}分钟后开始</span> </div> <div class="{{$style[\'mid-place\']}}" s-ref="meetItemQuick"> <div class="{{$style[\'fir-floor\']}} {{meetStatus === 0 ? $style[\'tostart-meet\'] : \'\'}}" on-click="startMeet(item)">{{item.name}}</div> <div class="{{$style[\'sec-floor\']}}"> <span class="{{$style[\'join-member\']}}">{{memberName}}</span> <span class="{{$style[\'join-num\']}}">{{memberNumber}}</span> </div> </div> <div class="{{$style[\'right-place\']}}" on-click="checkPopOpen"> <i class="c-icon">&#xe66e;</i> <div class="{{$style[\'pop-board\']}} {{showBoard ? \'\' : $style[\'none-pop\']}}" on-click="stopPop"> <div class="{{meetStatus !== 0 ? $style[\'hide-tag\'] : \'\'}}" on-click="startMeet(item)">开启会议</div> <div class="{{meetStatus !== 0 ? $style[\'hide-tag\'] : \'\'}}" on-click="share(item)">复制会邀</div> <div class="{{meetStatus !== 0 ? $style[\'hide-tag\'] : \'\'}}" on-click="modifyMeet(item)">修改会议</div> <div class="{{meetStatus !== 5 ? $style[\'hide-tag\'] : \'\'}}" on-click="reOrderMeet(item)">再次发起</div> <div on-click="deleteMeet()">删除会议</div> </div> </div> <c-popup s-if="showPopup" title="{{popupTitle}}" sub-title="{{popupSubTitle}}" zIndex="{{4}}" always="{{true}}" on-confirm="confirm" on-close="closeIt" on-cancel="closeIt" primaryBtnText="删除"></c-popup> </div> ';
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(118)],
                o = n(120),
                r = n(34)['default'];
            t.exports = n(34), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            var a = n(2),
                i = n(119);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '.compat-wrapper_opFH_ {\n  position: absolute;\n  top: 58px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.compat-wrapper_opFH_ .pc-content_3Xemw {\n  position: absolute;\n  width: 390px;\n  top: 50%;\n  left: 50%;\n  margin-left: -195px;\n  margin-top: -66px;\n  height: 133px;\n}\n.compat-wrapper_opFH_ .pc-content_3Xemw .title_1Xixa {\n  height: 30px;\n  font-size: 30px;\n  line-height: 30px;\n  color: #FFFFFF;\n  text-align: center;\n}\n.compat-wrapper_opFH_ .pc-content_3Xemw .text_3-Vg2 {\n  margin-top: 16px;\n  opacity: 0.7;\n  font-family: PingFangSC-Regular;\n  font-size: 14px;\n  color: #FFFFFF;\n  text-align: center;\n  line-height: 15px;\n  height: 15px;\n}\n.compat-wrapper_opFH_ .pc-content_3Xemw .quick-btn_1vVD8 {\n  height: 36px;\n  line-height: 36px;\n  margin-top: 24px;\n  width: 180px;\n}\n.compat-wrapper_opFH_ .pc-content_3Xemw .quick-btn_1vVD8 .btn-text_3uU1Z {\n  display: block;\n  padding: 0 34px;\n  color: #fff;\n  text-decoration: none;\n}\n.compat-wrapper_opFH_ .wise-content_1u2r0 {\n  position: absolute;\n  width: 700px;\n  top: 50%;\n  left: 50%;\n  margin-left: -350px;\n  margin-top: -51px;\n  height: 102px;\n}\n.compat-wrapper_opFH_ .wise-content_1u2r0 .title_1Xixa {\n  height: 48px;\n  font-size: 48px;\n  line-height: 48px;\n  color: #FFFFFF;\n  text-align: center;\n}\n.compat-wrapper_opFH_ .wise-content_1u2r0 .text_3-Vg2 {\n  margin-top: 24px;\n  opacity: 0.7;\n  font-family: PingFangSC-Regular;\n  font-size: 30px;\n  color: #FFFFFF;\n  text-align: center;\n  line-height: 30px;\n  height: 30px;\n}\n',
                ''
            ]), e.locals = {
                'compat-wrapper': 'compat-wrapper_opFH_',
                compatWrapper: 'compat-wrapper_opFH_',
                'pc-content': 'pc-content_3Xemw',
                pcContent: 'pc-content_3Xemw',
                title: 'title_1Xixa',
                text: 'text_3-Vg2',
                'quick-btn': 'quick-btn_1vVD8',
                quickBtn: 'quick-btn_1vVD8',
                'btn-text': 'btn-text_3uU1Z',
                btnText: 'btn-text_3uU1Z',
                'wise-content': 'wise-content_1u2r0',
                wiseContent: 'wise-content_1u2r0'
            }, t.exports = e;
        },
        function(t, e) {
            t.exports = ' <div class="{{$style[\'compat-wrapper\']}}"> <div s-if="browserPC" class="{{$style[\'pc-content\']}}"> <div class="{{$style[\'title\']}}">{{ text.title }}</div> <div class="{{$style[\'text\']}}">{{ text.subTitle }}</div> <c-btn s-if="flowType === \'unlogin\'" size="large" on-click="btnClick" class="{{$style[\'quick-btn\']}}" text="{{text.btn}}"></c-btn> <c-btn s-else type="primary" class="{{$style[\'quick-btn\']}}"> <a class="{{$style[\'btn-text\']}}" href="{{ text.downLoadUrl }}">{{text.btn}}</a> </c-btn> </div> <div s-else class="{{$style[\'wise-content\']}}"> <div class="{{$style[\'title\']}}">{{ text.title }}</div> <div class="{{$style[\'text\']}}">{{ text.subTitle }}</div> </div> </div> ';
        },
        function(t, e, n) {
            var a = n(1),
                i = [n(122)],
                o = n(124),
                r = n(35)['default'];
            t.exports = n(35), t.exports['default'] = a(r, o, i);
        },
        function(t, e, n) {
            var a = n(2),
                i = n(123);
            'string' == typeof(i = i.__esModule ? i['default'] : i) && (i = [
                [
                    t.i,
                    i,
                    ''
                ]
            ]);
            var o = {
                insert: 'head',
                singleton: !1
            };
            a(i, o);
            t.exports = i.locals || {};
        },
        function(t, e, n) {
            (e = n(3)(!1)).push([
                t.i,
                '.compat-wrapper_zyalQ {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.compat-wrapper_zyalQ .content_75Du5 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -151px;\n  margin-top: -97px;\n  height: 194px;\n}\n.compat-wrapper_zyalQ .content_75Du5 .error-img_2L8ex {\n  width: 105px;\n  height: 73px;\n}\n.compat-wrapper_zyalQ .content_75Du5 .fir-text_2ulEt {\n  margin-top: 12px;\n}\n.compat-wrapper_zyalQ .content_75Du5 .sec-text_53k9t {\n  margin-top: 8px;\n}\n.compat-wrapper_zyalQ .content_75Du5 .text_118-m {\n  opacity: 0.7;\n  font-family: PingFangSC-Regular;\n  font-size: 14px;\n  color: #FFFFFF;\n  text-align: center;\n  line-height: 15px;\n  height: 15px;\n}\n.compat-wrapper_zyalQ .content_75Du5 .quick-btn_36WKs {\n  width: 124px;\n  height: 36px;\n  line-height: 36px;\n  margin-top: 30px;\n}\n.compat-wrapper_zyalQ .content_75Du5 .quick-btn_36WKs .btn-text_3zKyK {\n  display: block;\n  padding: 0 34px;\n  color: #fff;\n  text-decoration: none;\n}\n',
                ''
            ]), e.locals = {
                'compat-wrapper': 'compat-wrapper_zyalQ',
                compatWrapper: 'compat-wrapper_zyalQ',
                content: 'content_75Du5',
                'error-img': 'error-img_2L8ex',
                errorImg: 'error-img_2L8ex',
                'fir-text': 'fir-text_2ulEt',
                firText: 'fir-text_2ulEt',
                'sec-text': 'sec-text_53k9t',
                secText: 'sec-text_53k9t',
                text: 'text_118-m',
                'quick-btn': 'quick-btn_36WKs',
                quickBtn: 'quick-btn_36WKs',
                'btn-text': 'btn-text_3zKyK',
                btnText: 'btn-text_3zKyK'
            }, t.exports = e;
        },
        function(t, e) {
            t.exports = ' <div class="{{$style[\'compat-wrapper\']}}"> <div class="{{$style[\'content\']}}"> <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3718006945,3753930967&fm=179&app=35&f=PNG?w=210&h=146&s=4B643A62158BAFB53C95A49A0300A081" class="{{$style[\'error-img\']}}"> <div class="{{$style[\'fir-text\']}} {{$style[\'text\']}}">该页面未找到</div> <div class="{{$style[\'sec-text\']}} {{$style[\'text\']}}">这可能是因为页面不存在\uFF0C请您检查链接</div> <c-btn type="primary" class="{{$style[\'quick-btn\']}}"> <a class="{{$style[\'btn-text\']}}" href="//www.baidu.com">返回首页</a> </c-btn> </div> </div> ';
        }
    ]);
});
define('@baidu/video-meeting', [
    'require',
    'amd_modules/@baidu/video-meeting/dist/index'
], function(require, mod) {
    return mod;
});