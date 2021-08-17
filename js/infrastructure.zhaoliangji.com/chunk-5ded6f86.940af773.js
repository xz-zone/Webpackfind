(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-5ded6f86"], {
        "059f": function(e, t, a) {
            var i;
            (function(s) {
                var r;

                function o() {
                    var e = Error.apply(this, arguments);
                    e.name = this.name = "FlashError", this.stack = e.stack, this.message = e.message
                }

                function h() {
                    var e = Error.apply(this, arguments);
                    e.name = this.name = "WebcamError", this.stack = e.stack, this.message = e.message
                }
                var l = function() {};
                l.prototype = Error.prototype, o.prototype = new l, h.prototype = new l;
                var c = {
                    version: "1.0.26",
                    protocol: location.protocol.match(/https/i) ? "https" : "http",
                    loaded: !1,
                    live: !1,
                    userMedia: !0,
                    iOS: /iPad|iPhone|iPod/.test(navigator.userAgent) && !s.MSStream,
                    params: {
                        width: 0,
                        height: 0,
                        dest_width: 0,
                        dest_height: 0,
                        image_format: "jpeg",
                        jpeg_quality: 90,
                        enable_flash: !0,
                        force_flash: !1,
                        flip_horiz: !1,
                        fps: 30,
                        upload_name: "webcam",
                        constraints: null,
                        swfURL: "",
                        flashNotDetectedText: "ERROR: No Adobe Flash Player detected.  Webcam.js relies on Flash for browsers that do not support getUserMedia (like yours).",
                        noInterfaceFoundText: "No supported webcam interface found.",
                        unfreeze_snap: !0,
                        iosPlaceholderText: "Click here to open camera.",
                        user_callback: null,
                        user_canvas: null
                    },
                    errors: {
                        FlashError: o,
                        WebcamError: h
                    },
                    hooks: {},
                    init: function() {
                        var e = this;
                        this.mediaDevices = navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? navigator.mediaDevices : navigator.mozGetUserMedia || navigator.webkitGetUserMedia ? {
                            getUserMedia: function(e) {
                                return new Promise((function(t, a) {
                                    (navigator.mozGetUserMedia || navigator.webkitGetUserMedia).call(navigator, e, t, a)
                                }))
                            }
                        } : null, s.URL = s.URL || s.webkitURL || s.mozURL || s.msURL, this.userMedia = this.userMedia && !!this.mediaDevices && !!s.URL, navigator.userAgent.match(/Firefox\D+(\d+)/) && parseInt(RegExp.$1, 10) < 21 && (this.userMedia = null), this.userMedia && s.addEventListener("beforeunload", (function(t) {
                            e.reset()
                        }))
                    },
                    exifOrientation: function(e) {
                        var t = new DataView(e);
                        if (255 != t.getUint8(0) || 216 != t.getUint8(1)) return console.log("Not a valid JPEG file"), 0;
                        var a = 2,
                            i = null;
                        while (a < e.byteLength) {
                            if (255 != t.getUint8(a)) return console.log("Not a valid marker at offset " + a + ", found: " + t.getUint8(a)), 0;
                            if (i = t.getUint8(a + 1), 225 == i) {
                                a += 4;
                                var s = "";
                                for (n = 0; n < 4; n++) s += String.fromCharCode(t.getUint8(a + n));
                                if ("Exif" != s) return console.log("Not valid EXIF data found"), 0;
                                a += 6;
                                var r = null;
                                if (18761 == t.getUint16(a)) r = !1;
                                else {
                                    if (19789 != t.getUint16(a)) return console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"), 0;
                                    r = !0
                                }
                                if (42 != t.getUint16(a + 2, !r)) return console.log("Not valid TIFF data! (no 0x002A)"), 0;
                                var o = t.getUint32(a + 4, !r);
                                if (o < 8) return console.log("Not valid TIFF data! (First offset less than 8)", t.getUint32(a + 4, !r)), 0;
                                for (var h = a + o, l = t.getUint16(h, !r), c = 0; c < l; c++) {
                                    var d = h + 12 * c + 2;
                                    if (274 == t.getUint16(d, !r)) {
                                        var u = t.getUint16(d + 2, !r),
                                            f = t.getUint32(d + 4, !r);
                                        if (3 != u && 1 != f) return console.log("Invalid EXIF orientation value type (" + u + ") or count (" + f + ")"), 0;
                                        var m = t.getUint16(d + 8, !r);
                                        return m < 1 || m > 8 ? (console.log("Invalid EXIF orientation value (" + m + ")"), 0) : m
                                    }
                                }
                            } else a += 2 + t.getUint16(a + 2)
                        }
                        return 0
                    },
                    fixOrientation: function(e, t, a) {
                        var i = new Image;
                        i.addEventListener("load", (function(e) {
                            var s = document.createElement("canvas"),
                                r = s.getContext("2d");
                            switch (t < 5 ? (s.width = i.width, s.height = i.height) : (s.width = i.height, s.height = i.width), t) {
                                case 2:
                                    r.transform(-1, 0, 0, 1, i.width, 0);
                                    break;
                                case 3:
                                    r.transform(-1, 0, 0, -1, i.width, i.height);
                                    break;
                                case 4:
                                    r.transform(1, 0, 0, -1, 0, i.height);
                                    break;
                                case 5:
                                    r.transform(0, 1, 1, 0, 0, 0);
                                    break;
                                case 6:
                                    r.transform(0, 1, -1, 0, i.height, 0);
                                    break;
                                case 7:
                                    r.transform(0, -1, -1, 0, i.height, i.width);
                                    break;
                                case 8:
                                    r.transform(0, -1, 1, 0, 0, i.width);
                                    break
                            }
                            r.drawImage(i, 0, 0), a.src = s.toDataURL()
                        }), !1), i.src = e
                    },
                    attach: function(e) {
                        if ("string" == typeof e && (e = document.getElementById(e) || document.querySelector(e)), !e) return this.dispatch("error", new h("Could not locate DOM element to attach to."));
                        this.container = e, e.innerHTML = "";
                        var t = document.createElement("div");
                        if (e.appendChild(t), this.peg = t, this.params.width || (this.params.width = e.offsetWidth), this.params.height || (this.params.height = e.offsetHeight), !this.params.width || !this.params.height) return this.dispatch("error", new h("No width and/or height for webcam.  Please call set() first, or attach to a visible element."));
                        this.params.dest_width || (this.params.dest_width = this.params.width), this.params.dest_height || (this.params.dest_height = this.params.height), this.userMedia = void 0 === r ? this.userMedia : r, this.params.force_flash && (r = this.userMedia, this.userMedia = null), "number" !== typeof this.params.fps && (this.params.fps = 30);
                        var a = this.params.width / this.params.dest_width,
                            i = this.params.height / this.params.dest_height;
                        if (this.userMedia) {
                            var n = document.createElement("video");
                            n.setAttribute("autoplay", "autoplay"), n.setAttribute("playsinline", "playsinline"), n.style.width = this.params.dest_width + "px", n.style.height = this.params.dest_height + "px", 1 == a && 1 == i || (e.style.overflow = "hidden", n.style.webkitTransformOrigin = "0px 0px", n.style.mozTransformOrigin = "0px 0px", n.style.msTransformOrigin = "0px 0px", n.style.oTransformOrigin = "0px 0px", n.style.transformOrigin = "0px 0px", n.style.webkitTransform = "scaleX(" + a + ") scaleY(" + i + ")", n.style.mozTransform = "scaleX(" + a + ") scaleY(" + i + ")", n.style.msTransform = "scaleX(" + a + ") scaleY(" + i + ")", n.style.oTransform = "scaleX(" + a + ") scaleY(" + i + ")", n.style.transform = "scaleX(" + a + ") scaleY(" + i + ")"), e.appendChild(n), this.video = n;
                            var o = this;
                            this.mediaDevices.getUserMedia({
                                audio: !1,
                                video: this.params.constraints || {
                                    mandatory: {
                                        minWidth: this.params.dest_width,
                                        minHeight: this.params.dest_height
                                    }
                                }
                            }).then((function(e) {
                                n.onloadedmetadata = function(t) {
                                    o.stream = e, o.loaded = !0, o.live = !0, o.dispatch("load"), o.dispatch("live"), o.flip()
                                }, "srcObject" in n ? n.srcObject = e : n.src = s.URL.createObjectURL(e)
                            })).catch((function(t) {
                                o.params.enable_flash && o.detectFlash() ? setTimeout((function() {
                                    o.params.force_flash = 1, o.attach(e)
                                }), 1) : o.dispatch("error", t)
                            }))
                        } else if (this.iOS) {
                            var l = document.createElement("div");
                            l.id = this.container.id + "-ios_div", l.className = "webcamjs-ios-placeholder", l.style.width = this.params.width + "px", l.style.height = this.params.height + "px", l.style.textAlign = "center", l.style.display = "table-cell", l.style.verticalAlign = "middle", l.style.backgroundRepeat = "no-repeat", l.style.backgroundSize = "contain", l.style.backgroundPosition = "center";
                            var d = document.createElement("span");
                            d.className = "webcamjs-ios-text", d.innerHTML = this.params.iosPlaceholderText, l.appendChild(d);
                            var u = document.createElement("img");
                            u.id = this.container.id + "-ios_img", u.style.width = this.params.dest_width + "px", u.style.height = this.params.dest_height + "px", u.style.display = "none", l.appendChild(u);
                            var f = document.createElement("input");
                            f.id = this.container.id + "-ios_input", f.setAttribute("type", "file"), f.setAttribute("accept", "image/*"), f.setAttribute("capture", "camera");
                            o = this;
                            var m = this.params;
                            f.addEventListener("change", (function(e) {
                                if (e.target.files.length > 0 && 0 == e.target.files[0].type.indexOf("image/")) {
                                    var t = URL.createObjectURL(e.target.files[0]),
                                        a = new Image;
                                    a.addEventListener("load", (function(e) {
                                        var t = document.createElement("canvas");
                                        t.width = m.dest_width, t.height = m.dest_height;
                                        var i = t.getContext("2d");
                                        ratio = Math.min(a.width / m.dest_width, a.height / m.dest_height);
                                        var s = m.dest_width * ratio,
                                            r = m.dest_height * ratio,
                                            n = (a.width - s) / 2,
                                            o = (a.height - r) / 2;
                                        i.drawImage(a, n, o, s, r, 0, 0, m.dest_width, m.dest_height);
                                        var h = t.toDataURL();
                                        u.src = h, l.style.backgroundImage = "url('" + h + "')"
                                    }), !1);
                                    var i = new FileReader;
                                    i.addEventListener("load", (function(e) {
                                        var i = o.exifOrientation(e.target.result);
                                        i > 1 ? o.fixOrientation(t, i, a) : a.src = t
                                    }), !1);
                                    var s = new XMLHttpRequest;
                                    s.open("GET", t, !0), s.responseType = "blob", s.onload = function(e) {
                                        200 != this.status && 0 !== this.status || i.readAsArrayBuffer(this.response)
                                    }, s.send()
                                }
                            }), !1), f.style.display = "none", e.appendChild(f), l.addEventListener("click", (function(e) {
                                m.user_callback ? o.snap(m.user_callback, m.user_canvas) : (f.style.display = "block", f.focus(), f.click(), f.style.display = "none")
                            }), !1), e.appendChild(l), this.loaded = !0, this.live = !0
                        } else if (this.params.enable_flash && this.detectFlash()) {
                            s.Webcam = c;
                            l = document.createElement("div");
                            l.innerHTML = this.getSWFHTML(), e.appendChild(l)
                        } else this.dispatch("error", new h(this.params.noInterfaceFoundText));
                        if (this.params.crop_width && this.params.crop_height) {
                            var p = Math.floor(this.params.crop_width * a),
                                g = Math.floor(this.params.crop_height * i);
                            e.style.width = p + "px", e.style.height = g + "px", e.style.overflow = "hidden", e.scrollLeft = Math.floor(this.params.width / 2 - p / 2), e.scrollTop = Math.floor(this.params.height / 2 - g / 2)
                        } else e.style.width = this.params.width + "px", e.style.height = this.params.height + "px"
                    },
                    reset: function() {
                        if (this.preview_active && this.unfreeze(), this.unflip(), this.userMedia) {
                            if (this.stream)
                                if (this.stream.getVideoTracks) {
                                    var e = this.stream.getVideoTracks();
                                    e && e[0] && e[0].stop && e[0].stop()
                                } else this.stream.stop && this.stream.stop();
                            delete this.stream, delete this.video
                        }
                        if (!0 !== this.userMedia && this.loaded && !this.iOS) {
                            var t = this.getMovie();
                            t && t._releaseCamera && t._releaseCamera()
                        }
                        this.container && (this.container.innerHTML = "", delete this.container), this.loaded = !1, this.live = !1
                    },
                    set: function() {
                        if (1 == arguments.length)
                            for (var e in arguments[0]) this.params[e] = arguments[0][e];
                        else this.params[arguments[0]] = arguments[1]
                    },
                    on: function(e, t) {
                        e = e.replace(/^on/i, "").toLowerCase(), this.hooks[e] || (this.hooks[e] = []), this.hooks[e].push(t)
                    },
                    off: function(e, t) {
                        if (e = e.replace(/^on/i, "").toLowerCase(), this.hooks[e])
                            if (t) {
                                var a = this.hooks[e].indexOf(t);
                                a > -1 && this.hooks[e].splice(a, 1)
                            } else this.hooks[e] = []
                    },
                    dispatch: function() {
                        var e, t = arguments[0].replace(/^on/i, "").toLowerCase(),
                            a = Array.prototype.slice.call(arguments, 1);
                        if (this.hooks[t] && this.hooks[t].length) {
                            for (var i = 0, r = this.hooks[t].length; i < r; i++) {
                                var n = this.hooks[t][i];
                                "function" == typeof n ? n.apply(this, a) : "object" == typeof n && 2 == n.length ? n[0][n[1]].apply(n[0], a) : s[n] && s[n].apply(s, a)
                            }
                            return !0
                        }
                        return "error" == t && (e = a[0] instanceof o || a[0] instanceof h ? a[0].message : "Could not access webcam: " + a[0].name + ": " + a[0].message + " " + a[0].toString(), alert("Webcam.js Error: " + e)), !1
                    },
                    setSWFLocation: function(e) {
                        this.set("swfURL", e)
                    },
                    detectFlash: function() {
                        var e = "Shockwave Flash",
                            t = "ShockwaveFlash.ShockwaveFlash",
                            a = "application/x-shockwave-flash",
                            i = s,
                            r = navigator,
                            n = !1;
                        if ("undefined" !== typeof r.plugins && "object" === typeof r.plugins[e]) {
                            var o = r.plugins[e].description;
                            o && "undefined" !== typeof r.mimeTypes && r.mimeTypes[a] && r.mimeTypes[a].enabledPlugin && (n = !0)
                        } else if ("undefined" !== typeof i.ActiveXObject) try {
                            var h = new ActiveXObject(t);
                            if (h) {
                                var l = h.GetVariable("$version");
                                l && (n = !0)
                            }
                        } catch (c) {}
                        return n
                    },
                    getSWFHTML: function() {
                        var e = "",
                            t = this.params.swfURL;
                        if (location.protocol.match(/file/)) return this.dispatch("error", new o("Flash does not work from local disk.  Please run from a web server.")), '<h3 style="color:red">ERROR: the Webcam.js Flash fallback does not work from local disk.  Please run it from a web server.</h3>';
                        if (!this.detectFlash()) return this.dispatch("error", new o("Adobe Flash Player not found.  Please install from get.adobe.com/flashplayer and try again.")), '<h3 style="color:red">' + this.params.flashNotDetectedText + "</h3>";
                        if (!t) {
                            for (var a = "", i = document.getElementsByTagName("script"), r = 0, n = i.length; r < n; r++) {
                                var h = i[r].getAttribute("src");
                                h && h.match(/\/webcam(\.min)?\.js/) && (a = h.replace(/\/webcam(\.min)?\.js.*$/, ""), r = n)
                            }
                            t = a ? a + "/webcam.swf" : "webcam.swf"
                        }
                        s.localStorage && !localStorage.getItem("visited") && (this.params.new_user = 1, localStorage.setItem("visited", 1));
                        var l = "";
                        for (var c in this.params) l && (l += "&"), l += c + "=" + escape(this.params[c]);
                        return e += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" type="application/x-shockwave-flash" codebase="' + this.protocol + '://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + this.params.width + '" height="' + this.params.height + '" id="webcam_movie_obj" align="middle"><param name="wmode" value="opaque" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + t + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + l + '"/><embed id="webcam_movie_embed" src="' + t + '" wmode="opaque" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + this.params.width + '" height="' + this.params.height + '" name="webcam_movie_embed" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + l + '"></embed></object>', e
                    },
                    getMovie: function() {
                        if (!this.loaded) return this.dispatch("error", new o("Flash Movie is not loaded yet"));
                        var e = document.getElementById("webcam_movie_obj");
                        return e && e._snap || (e = document.getElementById("webcam_movie_embed")), e || this.dispatch("error", new o("Cannot locate Flash movie in DOM")), e
                    },
                    freeze: function() {
                        var e = this,
                            t = this.params;
                        this.preview_active && this.unfreeze();
                        var a = this.params.width / this.params.dest_width,
                            i = this.params.height / this.params.dest_height;
                        this.unflip();
                        var s = t.crop_width || t.dest_width,
                            r = t.crop_height || t.dest_height,
                            n = document.createElement("canvas");
                        n.width = s, n.height = r;
                        var o = n.getContext("2d");
                        this.preview_canvas = n, this.preview_context = o, 1 == a && 1 == i || (n.style.webkitTransformOrigin = "0px 0px", n.style.mozTransformOrigin = "0px 0px", n.style.msTransformOrigin = "0px 0px", n.style.oTransformOrigin = "0px 0px", n.style.transformOrigin = "0px 0px", n.style.webkitTransform = "scaleX(" + a + ") scaleY(" + i + ")", n.style.mozTransform = "scaleX(" + a + ") scaleY(" + i + ")", n.style.msTransform = "scaleX(" + a + ") scaleY(" + i + ")", n.style.oTransform = "scaleX(" + a + ") scaleY(" + i + ")", n.style.transform = "scaleX(" + a + ") scaleY(" + i + ")"), this.snap((function() {
                            n.style.position = "relative", n.style.left = e.container.scrollLeft + "px", n.style.top = e.container.scrollTop + "px", e.container.insertBefore(n, e.peg), e.container.style.overflow = "hidden", e.preview_active = !0
                        }), n)
                    },
                    unfreeze: function() {
                        this.preview_active && (this.container.removeChild(this.preview_canvas), delete this.preview_context, delete this.preview_canvas, this.preview_active = !1, this.flip())
                    },
                    flip: function() {
                        if (this.params.flip_horiz) {
                            var e = this.container.style;
                            e.webkitTransform = "scaleX(-1)", e.mozTransform = "scaleX(-1)", e.msTransform = "scaleX(-1)", e.oTransform = "scaleX(-1)", e.transform = "scaleX(-1)", e.filter = "FlipH", e.msFilter = "FlipH"
                        }
                    },
                    unflip: function() {
                        if (this.params.flip_horiz) {
                            var e = this.container.style;
                            e.webkitTransform = "scaleX(1)", e.mozTransform = "scaleX(1)", e.msTransform = "scaleX(1)", e.oTransform = "scaleX(1)", e.transform = "scaleX(1)", e.filter = "", e.msFilter = ""
                        }
                    },
                    savePreview: function(e, t) {
                        var a = this.params,
                            i = this.preview_canvas,
                            s = this.preview_context;
                        if (t) {
                            var r = t.getContext("2d");
                            r.drawImage(i, 0, 0)
                        }
                        e(t ? null : i.toDataURL("image/" + a.image_format, a.jpeg_quality / 100), i, s), this.params.unfreeze_snap && this.unfreeze()
                    },
                    snap: function(e, t) {
                        e || (e = this.params.user_callback), t || (t = this.params.user_canvas);
                        var a = this.params;
                        if (!this.loaded) return this.dispatch("error", new h("Webcam is not loaded yet"));
                        if (!e) return this.dispatch("error", new h("Please provide a callback function or canvas to snap()"));
                        if (this.preview_active) return this.savePreview(e, t), null;
                        var i = document.createElement("canvas");
                        i.width = this.params.dest_width, i.height = this.params.dest_height;
                        var s = i.getContext("2d");
                        this.params.flip_horiz && (s.translate(a.dest_width, 0), s.scale(-1, 1));
                        var r = function() {
                            if (this.src && this.width && this.height && s.drawImage(this, 0, 0, a.dest_width, a.dest_height), a.crop_width && a.crop_height) {
                                var r = document.createElement("canvas");
                                r.width = a.crop_width, r.height = a.crop_height;
                                var n = r.getContext("2d");
                                n.drawImage(i, Math.floor(a.dest_width / 2 - a.crop_width / 2), Math.floor(a.dest_height / 2 - a.crop_height / 2), a.crop_width, a.crop_height, 0, 0, a.crop_width, a.crop_height), s = n, i = r
                            }
                            if (t) {
                                var o = t.getContext("2d");
                                o.drawImage(i, 0, 0)
                            }
                            e(t ? null : i.toDataURL("image/" + a.image_format, a.jpeg_quality / 100), i, s)
                        };
                        if (this.userMedia) s.drawImage(this.video, 0, 0, this.params.dest_width, this.params.dest_height), r();
                        else if (this.iOS) {
                            var n = document.getElementById(this.container.id + "-ios_div"),
                                o = document.getElementById(this.container.id + "-ios_img"),
                                l = document.getElementById(this.container.id + "-ios_input");
                            iFunc = function(e) {
                                r.call(o), o.removeEventListener("load", iFunc), n.style.backgroundImage = "none", o.removeAttribute("src"), l.value = null
                            }, l.value ? iFunc(null) : (o.addEventListener("load", iFunc), l.style.display = "block", l.focus(), l.click(), l.style.display = "none")
                        } else {
                            var c = this.getMovie()._snap();
                            o = new Image;
                            o.onload = r, o.src = "data:image/" + this.params.image_format + ";base64," + c
                        }
                        return null
                    },
                    configure: function(e) {
                        e || (e = "camera"), this.getMovie()._configure(e)
                    },
                    flashNotify: function(e, t) {
                        switch (e) {
                            case "flashLoadComplete":
                                this.loaded = !0, this.dispatch("load");
                                break;
                            case "cameraLive":
                                this.live = !0, this.dispatch("live");
                                break;
                            case "error":
                                this.dispatch("error", new o(t));
                                break;
                            default:
                                break
                        }
                    },
                    b64ToUint6: function(e) {
                        return e > 64 && e < 91 ? e - 65 : e > 96 && e < 123 ? e - 71 : e > 47 && e < 58 ? e + 4 : 43 === e ? 62 : 47 === e ? 63 : 0
                    },
                    base64DecToArr: function(e, t) {
                        for (var a, i, s = e.replace(/[^A-Za-z0-9\+\/]/g, ""), r = s.length, n = t ? Math.ceil((3 * r + 1 >> 2) / t) * t : 3 * r + 1 >> 2, o = new Uint8Array(n), h = 0, l = 0, c = 0; c < r; c++)
                            if (i = 3 & c, h |= this.b64ToUint6(s.charCodeAt(c)) << 18 - 6 * i, 3 === i || r - c === 1) {
                                for (a = 0; a < 3 && l < n; a++, l++) o[l] = h >>> (16 >>> a & 24) & 255;
                                h = 0
                            } return o
                    },
                    upload: function(e, t, a) {
                        var i = this.params.upload_name || "webcam",
                            s = "";
                        if (!e.match(/^data\:image\/(\w+)/)) throw "Cannot locate image format in Data URI";
                        s = RegExp.$1;
                        var r = e.replace(/^data\:image\/\w+\;base64\,/, ""),
                            n = new XMLHttpRequest;
                        n.open("POST", t, !0), n.upload && n.upload.addEventListener && n.upload.addEventListener("progress", (function(e) {
                            if (e.lengthComputable) {
                                var t = e.loaded / e.total;
                                c.dispatch("uploadProgress", t, e)
                            }
                        }), !1);
                        var o = this;
                        n.onload = function() {
                            a && a.apply(o, [n.status, n.responseText, n.statusText]), c.dispatch("uploadComplete", n.status, n.responseText, n.statusText)
                        };
                        var h = new Blob([this.base64DecToArr(r)], {
                                type: "image/" + s
                            }),
                            l = new FormData;
                        l.append(i, h, i + "." + s.replace(/e/, "")), n.send(l)
                    }
                };
                c.init(), i = function() {
                    return c
                }.call(t, a, t, e), void 0 === i || (e.exports = i)
            })(window)
        },
        1472: function(e, t, a) {
            ! function(t, a) {
                e.exports = a()
            }(0, (function() {
                "use strict";
                var e = "millisecond",
                    t = "second",
                    a = "minute",
                    i = "hour",
                    s = "day",
                    r = "week",
                    n = "month",
                    o = "quarter",
                    h = "year",
                    l = "date",
                    c = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                    d = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                    u = {
                        name: "en",
                        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
                    },
                    f = function(e, t, a) {
                        var i = String(e);
                        return !i || i.length >= t ? e : "" + Array(t + 1 - i.length).join(a) + e
                    },
                    m = {
                        s: f,
                        z: function(e) {
                            var t = -e.utcOffset(),
                                a = Math.abs(t),
                                i = Math.floor(a / 60),
                                s = a % 60;
                            return (t <= 0 ? "+" : "-") + f(i, 2, "0") + ":" + f(s, 2, "0")
                        },
                        m: function e(t, a) {
                            if (t.date() < a.date()) return -e(a, t);
                            var i = 12 * (a.year() - t.year()) + (a.month() - t.month()),
                                s = t.clone().add(i, n),
                                r = a - s < 0,
                                o = t.clone().add(i + (r ? -1 : 1), n);
                            return +(-(i + (a - s) / (r ? s - o : o - s)) || 0)
                        },
                        a: function(e) {
                            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                        },
                        p: function(c) {
                            return {
                                M: n,
                                y: h,
                                w: r,
                                d: s,
                                D: l,
                                h: i,
                                m: a,
                                s: t,
                                ms: e,
                                Q: o
                            } [c] || String(c || "").toLowerCase().replace(/s$/, "")
                        },
                        u: function(e) {
                            return void 0 === e
                        }
                    },
                    p = "en",
                    g = {};
                g[p] = u;
                var v = function(e) {
                        return e instanceof b
                    },
                    w = function(e, t, a) {
                        var i;
                        if (!e) return p;
                        if ("string" == typeof e) g[e] && (i = e), t && (g[e] = t, i = e);
                        else {
                            var s = e.name;
                            g[s] = e, i = s
                        }
                        return !a && i && (p = i), i || !a && p
                    },
                    y = function(e, t) {
                        if (v(e)) return e.clone();
                        var a = "object" == typeof t ? t : {};
                        return a.date = e, a.args = arguments, new b(a)
                    },
                    _ = m;
                _.l = w, _.i = v, _.w = function(e, t) {
                    return y(e, {
                        locale: t.$L,
                        utc: t.$u,
                        x: t.$x,
                        $offset: t.$offset
                    })
                };
                var b = function() {
                        function u(e) {
                            this.$L = w(e.locale, null, !0), this.parse(e)
                        }
                        var f = u.prototype;
                        return f.parse = function(e) {
                            this.$d = function(e) {
                                var t = e.date,
                                    a = e.utc;
                                if (null === t) return new Date(NaN);
                                if (_.u(t)) return new Date;
                                if (t instanceof Date) return new Date(t);
                                if ("string" == typeof t && !/Z$/i.test(t)) {
                                    var i = t.match(c);
                                    if (i) {
                                        var s = i[2] - 1 || 0,
                                            r = (i[7] || "0").substring(0, 3);
                                        return a ? new Date(Date.UTC(i[1], s, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, r)) : new Date(i[1], s, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, r)
                                    }
                                }
                                return new Date(t)
                            }(e), this.$x = e.x || {}, this.init()
                        }, f.init = function() {
                            var e = this.$d;
                            this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds()
                        }, f.$utils = function() {
                            return _
                        }, f.isValid = function() {
                            return !("Invalid Date" === this.$d.toString())
                        }, f.isSame = function(e, t) {
                            var a = y(e);
                            return this.startOf(t) <= a && a <= this.endOf(t)
                        }, f.isAfter = function(e, t) {
                            return y(e) < this.startOf(t)
                        }, f.isBefore = function(e, t) {
                            return this.endOf(t) < y(e)
                        }, f.$g = function(e, t, a) {
                            return _.u(e) ? this[t] : this.set(a, e)
                        }, f.unix = function() {
                            return Math.floor(this.valueOf() / 1e3)
                        }, f.valueOf = function() {
                            return this.$d.getTime()
                        }, f.startOf = function(e, o) {
                            var c = this,
                                d = !!_.u(o) || o,
                                u = _.p(e),
                                f = function(e, t) {
                                    var a = _.w(c.$u ? Date.UTC(c.$y, t, e) : new Date(c.$y, t, e), c);
                                    return d ? a : a.endOf(s)
                                },
                                m = function(e, t) {
                                    return _.w(c.toDate()[e].apply(c.toDate("s"), (d ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), c)
                                },
                                p = this.$W,
                                g = this.$M,
                                v = this.$D,
                                w = "set" + (this.$u ? "UTC" : "");
                            switch (u) {
                                case h:
                                    return d ? f(1, 0) : f(31, 11);
                                case n:
                                    return d ? f(1, g) : f(0, g + 1);
                                case r:
                                    var y = this.$locale().weekStart || 0,
                                        b = (p < y ? p + 7 : p) - y;
                                    return f(d ? v - b : v + (6 - b), g);
                                case s:
                                case l:
                                    return m(w + "Hours", 0);
                                case i:
                                    return m(w + "Minutes", 1);
                                case a:
                                    return m(w + "Seconds", 2);
                                case t:
                                    return m(w + "Milliseconds", 3);
                                default:
                                    return this.clone()
                            }
                        }, f.endOf = function(e) {
                            return this.startOf(e, !1)
                        }, f.$set = function(r, o) {
                            var c, d = _.p(r),
                                u = "set" + (this.$u ? "UTC" : ""),
                                f = (c = {}, c[s] = u + "Date", c[l] = u + "Date", c[n] = u + "Month", c[h] = u + "FullYear", c[i] = u + "Hours", c[a] = u + "Minutes", c[t] = u + "Seconds", c[e] = u + "Milliseconds", c)[d],
                                m = d === s ? this.$D + (o - this.$W) : o;
                            if (d === n || d === h) {
                                var p = this.clone().set(l, 1);
                                p.$d[f](m), p.init(), this.$d = p.set(l, Math.min(this.$D, p.daysInMonth())).$d
                            } else f && this.$d[f](m);
                            return this.init(), this
                        }, f.set = function(e, t) {
                            return this.clone().$set(e, t)
                        }, f.get = function(e) {
                            return this[_.p(e)]()
                        }, f.add = function(e, o) {
                            var l, c = this;
                            e = Number(e);
                            var d = _.p(o),
                                u = function(t) {
                                    var a = y(c);
                                    return _.w(a.date(a.date() + Math.round(t * e)), c)
                                };
                            if (d === n) return this.set(n, this.$M + e);
                            if (d === h) return this.set(h, this.$y + e);
                            if (d === s) return u(1);
                            if (d === r) return u(7);
                            var f = (l = {}, l[a] = 6e4, l[i] = 36e5, l[t] = 1e3, l)[d] || 1,
                                m = this.$d.getTime() + e * f;
                            return _.w(m, this)
                        }, f.subtract = function(e, t) {
                            return this.add(-1 * e, t)
                        }, f.format = function(e) {
                            var t = this;
                            if (!this.isValid()) return "Invalid Date";
                            var a = e || "YYYY-MM-DDTHH:mm:ssZ",
                                i = _.z(this),
                                s = this.$locale(),
                                r = this.$H,
                                n = this.$m,
                                o = this.$M,
                                h = s.weekdays,
                                l = s.months,
                                c = function(e, i, s, r) {
                                    return e && (e[i] || e(t, a)) || s[i].substr(0, r)
                                },
                                u = function(e) {
                                    return _.s(r % 12 || 12, e, "0")
                                },
                                f = s.meridiem || function(e, t, a) {
                                    var i = e < 12 ? "AM" : "PM";
                                    return a ? i.toLowerCase() : i
                                },
                                m = {
                                    YY: String(this.$y).slice(-2),
                                    YYYY: this.$y,
                                    M: o + 1,
                                    MM: _.s(o + 1, 2, "0"),
                                    MMM: c(s.monthsShort, o, l, 3),
                                    MMMM: c(l, o),
                                    D: this.$D,
                                    DD: _.s(this.$D, 2, "0"),
                                    d: String(this.$W),
                                    dd: c(s.weekdaysMin, this.$W, h, 2),
                                    ddd: c(s.weekdaysShort, this.$W, h, 3),
                                    dddd: h[this.$W],
                                    H: String(r),
                                    HH: _.s(r, 2, "0"),
                                    h: u(1),
                                    hh: u(2),
                                    a: f(r, n, !0),
                                    A: f(r, n, !1),
                                    m: String(n),
                                    mm: _.s(n, 2, "0"),
                                    s: String(this.$s),
                                    ss: _.s(this.$s, 2, "0"),
                                    SSS: _.s(this.$ms, 3, "0"),
                                    Z: i
                                };
                            return a.replace(d, (function(e, t) {
                                return t || m[e] || i.replace(":", "")
                            }))
                        }, f.utcOffset = function() {
                            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                        }, f.diff = function(e, l, c) {
                            var d, u = _.p(l),
                                f = y(e),
                                m = 6e4 * (f.utcOffset() - this.utcOffset()),
                                p = this - f,
                                g = _.m(this, f);
                            return g = (d = {}, d[h] = g / 12, d[n] = g, d[o] = g / 3, d[r] = (p - m) / 6048e5, d[s] = (p - m) / 864e5, d[i] = p / 36e5, d[a] = p / 6e4, d[t] = p / 1e3, d)[u] || p, c ? g : _.a(g)
                        }, f.daysInMonth = function() {
                            return this.endOf(n).$D
                        }, f.$locale = function() {
                            return g[this.$L]
                        }, f.locale = function(e, t) {
                            if (!e) return this.$L;
                            var a = this.clone(),
                                i = w(e, t, !0);
                            return i && (a.$L = i), a
                        }, f.clone = function() {
                            return _.w(this.$d, this)
                        }, f.toDate = function() {
                            return new Date(this.valueOf())
                        }, f.toJSON = function() {
                            return this.isValid() ? this.toISOString() : null
                        }, f.toISOString = function() {
                            return this.$d.toISOString()
                        }, f.toString = function() {
                            return this.$d.toUTCString()
                        }, u
                    }(),
                    M = b.prototype;
                return y.prototype = M, [
                    ["$ms", e],
                    ["$s", t],
                    ["$m", a],
                    ["$H", i],
                    ["$W", s],
                    ["$M", n],
                    ["$y", h],
                    ["$D", l]
                ].forEach((function(e) {
                    M[e[1]] = function(t) {
                        return this.$g(t, e[0], e[1])
                    }
                })), y.extend = function(e, t) {
                    return e.$i || (e(t, b, y), e.$i = !0), y
                }, y.locale = w, y.isDayjs = v, y.unix = function(e) {
                    return y(1e3 * e)
                }, y.en = g[p], y.Ls = g, y.p = {}, y
            }))
        }
    }
]);