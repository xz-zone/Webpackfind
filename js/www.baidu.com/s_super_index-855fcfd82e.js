(function() {
    setTimeout(function() {
        try {
            var kw = document.getElementById("kw");
            kw.focus();
            kw.parentNode.className = "bg s_ipt_wr iptfocus quickdelete-wrap"
        } catch (e) {}
    }, 0)
})();
$(window).on("load", function() {
    var rand = Math.random();
    if (rand < .01) {
        try {
            var baseUrl = "//www.baidu.com/nocache/fesplg/s.gif?log_type=hm&type=uamonitor&";
            var queryString = "";
            queryString += "&c_ua=" + encodeURIComponent(navigator.userAgent);
            queryString += "&s_ua=" + encodeURIComponent(bds.comm.userAgent);
            var url = baseUrl + queryString;
            var img = new Image;
            var img_rand = "_LOG_" + (new Date).getTime();
            img.onload = function() {
                delete window[img_rand]
            };
            window[img_rand] = img;
            img.src = url
        } catch (e) {}
    }
});