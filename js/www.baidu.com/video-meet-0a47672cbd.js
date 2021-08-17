function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj
        }
    } else {
        _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
    }
    return _typeof(obj)
}
define("superman/components/video-meet", ["require", "exports", "@baidu/video-meeting", "superman/components/guide_tips", "superman/lib/event"], function(require, _exports, Meet,
    GuideTips, Event) {
    "use strict";
    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.VideoMeet = void 0;
    Meet = _interopRequireWildcard(Meet);
    GuideTips = _interopRequireWildcard(GuideTips);
    Event = _interopRequireWildcard(Event);

    function _getRequireWildcardCache() {
        if (typeof WeakMap !== "function") return null;
        var cache = new WeakMap;
        _getRequireWildcardCache = function _getRequireWildcardCache() {
            return cache
        };
        return cache
    }

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
            return obj
        }
        if (
            obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
            return {
                "default": obj
            }
        }
        var cache = _getRequireWildcardCache();
        if (cache && cache.has(obj)) {
            return cache.get(obj)
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                if (desc && (desc.get || desc.set)) {
                    Object.defineProperty(newObj, key, desc)
                } else {
                    newObj[key] = obj[key]
                }
            }
        }
        newObj["default"] = obj;
        if (cache) {
            cache.set(obj, newObj)
        }
        return newObj
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target,
                descriptor.key, descriptor)
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            })
        } else {
            obj[key] = value
        }
        return obj
    }
    var VideoMeet = function() {
        function VideoMeet() {
            _classCallCheck(this, VideoMeet);
            _defineProperty(this, "status", void 0);
            _defineProperty(this, "isInit", void 0);
            _defineProperty(this, "meet", void 0);
            _defineProperty(this, "bsToken", void 0);
            this.status = 0;
            this.isInit = false;
            this.meet = null;
            this.bsToken = $("#bsToken").val()
        }
        _createClass(VideoMeet, [{
            key: "lessThanIE9",
            value: function lessThanIE9() {
                var userAgent = navigator.userAgent;
                var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
                if (isIE) {
                    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                    reIE.test(userAgent);
                    var fIEVersion = parseFloat(RegExp["$1"]);
                    if (fIEVersion <= 9) {
                        return true
                    }
                }
                return false
            }
        }, {
            key: "init",
            value: function init(options) {
                var entry = $(".video-meet-entry");
                if (this.lessThanIE9()) {
                    entry.remove();
                    return
                }
                var isLogin = bds.comm.username || options && options.isLogin;
                var _this = this;
                if (bds.comm.sid && bds.comm.sid === "10001") {
                    this.status = 2
                }
                if (options && options.status) {
                    _this.status = options.status
                } else {
                    _this.status = 1
                }
                var toast = $(".video-meet-toast");
                entry.on("mouseenter", function(e) {
                    if ($(".v-container").length === 0 || $(".v-container").parent().css("display") === "none") {
                        GuideTips.close({
                            id: "s_side_wrapper",
                            type: "left",
                            ls: "hide_guide_meet_new",
                            red_dot: $(".video-meet-entry .c-icon")
                        });
                        toast.show()
                    }
                }).on("mousedown mouseleave", function(e) {
                    toast.hide()
                });
                if (!_this.isInit) {
                    entry.on("click.init", function(e) {
                        GuideTips.close({
                            id: "video-meet-entry",
                            type: "left",
                            ls: "hide_guide_meet_new",
                            red_dot: $(".video-meet-entry .c-icon")
                        });
                        _this.createMeet({
                            status: _this.status,
                            entry: entry,
                            showViews: true,
                            bsToken: _this.bsToken,
                            isLogin: isLogin,
                            event: Event
                        });
                        _this.isInit = true;
                        entry.off("click.init");
                        e.stopPropagation()
                    });
                    if (options && options.backflow === 1) {
                        _this.createMeet({
                            status: _this.status,
                            showViews: true,
                            type: "backflow",
                            meetInfo: options.meetInfo,
                            isLogin: isLogin,
                            flowType: options.flowType || "",
                            event: Event
                        });
                        _this.isInit = true
                    }
                }
            }
        }, {
            key: "createMeet",
            value: function createMeet(data) {
                var meetObj = Meet["default"];
                var meet = new meetObj({
                    data: data
                });
                meet.attach($("#wrapper")[0])
            }
        }]);
        return VideoMeet
    }();
    _exports.VideoMeet = VideoMeet
});