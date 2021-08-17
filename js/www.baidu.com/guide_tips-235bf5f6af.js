define("superman/components/guide_tips", ["require", "exports"], function(require, _exports) {
    "use strict";
    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.show = show;
    _exports.close = close;
    _exports.init = init;
    var arrowWidth = 10;
    var tipsHeight = 34;
    var tipsWidth = 120;
    var arrowSpace = 8;
    var loginSpace = 6;
    var txtLength = 7;
    var bottomTxtLength = 12;

    function closeGuideTips(option) {
        if (option.ls) {
            try {
                window.localStorage.setItem(option.ls, "1")
            } catch (e) {}
        }
        if (option.red_dot) {
            $(option.red_dot).removeClass(
                "red-point")
        }
        var newClass = option.id.trim() + "-" + option.type;
        $("." + newClass).hide()
    }

    function createdElement(top, left, option) {
        var type = option.type;
        var txt = option.txt;
        var newClass = option.id.trim() + "-" + option.type;
        $("#" + option.id).append('\n        <div class="guide-info-new '.concat(newClass, '" style="left: ').concat(left, "px;top: ").concat(top, 'px;">\n            <span>').concat(txt, '</span>\n            <i class="c-icon guide-close" >&#xe610;</i>\n            <div class="guide-arrow-').concat(type, '">\n            </div>\n        </div>  \n    '));
        $("body").on("click", ".".concat(newClass, " .guide-close"), function(e) {
            window.event ? window.event.cancelBubble = true : e.stopPropagation();
            if (e.preventDefault) {
                e.preventDefault()
            } else {
                window.event.returnValue = false
            }
            closeGuideTips(option)
        })
    }

    function showGuideTips(option) {
        var element = document.getElementById("".concat(option.id));
        if (!element) {
            return
        }
        var timestamp = new Date;
        if (option.time_off && timestamp > option.time_off) {
            return
        }
        option.red_dot && $(
            option.red_dot).addClass("red-point");
        var offsetObj = element.getBoundingClientRect();
        var top = 0;
        var left = 0;
        var txtGap = option.txt.length - txtLength;
        var txtNumber = txtGap > 0 ? txtGap : 0;
        switch (option.type) {
            case "bottom":
                var btnSapce = option.id === "s-top-loginbtn" ? loginSpace : 0;
                top = offsetObj.height + arrowSpace + btnSapce;
                left = 0 - tipsWidth + btnSapce - txtNumber * bottomTxtLength;
                break;
            case "top":
                top = 0 - tipsHeight - arrowSpace - 5;
                left = offsetObj.width / 2 - arrowWidth - 2;
                break;
            case "left":
                top = arrowWidth;
                left = 0 - tipsWidth - txtNumber * txtLength - offsetObj.width;
                break;
            case "right":
                top = 0;
                left = offsetObj.width + arrowWidth + arrowSpace;
                break
        }
        createdElement(top, left, option)
    }

    function skinGuideInit(islogin) {
        var hideSkinGuide = "0";
        try {
            hideSkinGuide = window.localStorage.getItem("hide_guide_skin_new")
        } catch (e) {}
        var elementId = islogin ? "s-usersetting-top" : "s-top-loginbtn";
        if (!hideSkinGuide || hideSkinGuide !== "1") {
            showGuideTips({
                id: elementId,
                type: "bottom",
                txt: islogin ? "点击设置，享有度晓晓和豪车新皮肤！" : "新皮肤上线，登录一下即刻享有！",
                ls: "hide_guide_skin_new",
                red_dot: islogin ? $("#s-usersetting-top") : false,
                time_off: new Date("2021/5/31 24:00:00")
            })
        }
        var closeParam = {
            id: elementId,
            type: "bottom",
            ls: "hide_guide_skin_new",
            red_dot: $("#s-usersetting-top")
        };
        if (elementId === "s-usersetting-top") {
            $("#s-usersetting-top").on("mouseover", function(e) {
                if (e.target.id === "s-usersetting-top") {
                    closeGuideTips(closeParam);
                    $("#s-usersetting-top").removeClass("color222")
                } else {
                    $("#s-user-setting-menu").hide();
                    $("#s-usersetting-top").addClass("color222")
                }
            })
        } else if (elementId === "s-top-loginbtn") {
            $("#s-top-loginbtn").on("click", function() {
                closeGuideTips(closeParam)
            })
        }
    }

    function userCenterHide(closeParam) {
        $("#s-top-username .user-name").removeClass("color222");
        closeGuideTips(closeParam)
    }

    function userCenterInit(islogin) {
        var hideGuide = "0";
        try {
            hideGuide = window.localStorage.getItem("hide_guide_usercenter")
        } catch (e) {}
        var elementId = islogin ? "s-top-username" : "s-top-loginbtn";
        if (!hideGuide || hideGuide !== "1") {
            showGuideTips({
                id: elementId,
                type: "bottom",
                txt: islogin ? "新版个人中心从这里进入哦" : "登录后可以体验新版个人中心啦",
                ls: "hide_guide_usercenter",
                red_dot: false,
                time_off: new Date("2032/02/24 20:25:00")
            })
        }
        var closeParam = {
            id: elementId,
            type: "bottom",
            ls: "hide_guide_usercenter"
        };
        $("#s-usersetting-top").on("mouseover", function() {
            closeGuideTips(closeParam)
        });
        if (elementId === "s-top-username") {
            $("#s-top-username").on("mouseover", function() {
                userCenterHide(closeParam)
            });
            $("#s-top-username .guide-info-new").on("mouseover", function(e) {
                $("#s-top-username .user-name").addClass(
                    "color222");
                window.event ? window.event.cancelBubble = true : e.stopPropagation()
            })
        } else if (elementId === "s-top-loginbtn") {
            $("#s-top-loginbtn").on("click", function() {
                closeGuideTips(closeParam)
            })
        }
    }

    function meetGuideInit() {
        var hideMeetGuide = "0";
        try {
            hideMeetGuide = window.localStorage.getItem("hide_guide_meet_new")
        } catch (e) {}
        if (!hideMeetGuide || hideMeetGuide !== "1") {
            showGuideTips({
                id: "s_side_wrapper",
                type: "left",
                txt: "百度视频会议上线啦",
                ls: "hide_guide_meet_new",
                red_dot: $("#video-meet-entry .c-icon")
            })
        }
    }

    function show(
        option) {
        showGuideTips(option)
    }

    function close(option) {
        closeGuideTips(option)
    }

    function init(islogin) {
        skinGuideInit(islogin);
        meetGuideInit()
    }
});