function fetchCommits() {
    fetch("/json/commits.json").then((e=>e.json().then((e=>{
        for (var t = e, i = 0; i < t.length; i++) {
            t[i];
            var n = i + 1 + "." + t[i].commit.message;
            if (i < 1)
                var o = n;
            else
                o = o + "<br>" + n
        }
        SAONotify("Latest Update", o, "location.reload(true);")
    }
    )))).catch(console.error)
}
var t1 = 0
  , t2 = 0
  , timer = null;
function isScrollEnd() {
    (t2 = document.documentElement.scrollTop || document.body.scrollTop) == t1 && document.styleSheets[0].addRule("*::-webkit-scrollbar-thumb", "display:none;")
}
document.styleSheets[0].addRule("*::-webkit-scrollbar-thumb", "display:none;"),
document.onscroll = function() {
    clearTimeout(timer),
    timer = setTimeout(isScrollEnd, 1e3),
    t1 = document.documentElement.scrollTop || document.body.scrollTop,
    document.styleSheets[0].addRule("*::-webkit-scrollbar-thumb", "display:block;")
}
;
var titleTime, OriginTitile = document.title;
function ReDirect() {
    var e = window.location.pathname.split("/")[2].split(".");
    "html" === e[1] ? window.location.href = "/posts/" + e[0] + "/" : SAONotify("404", "非常抱歉，文章可能已经被删除了...", "window.location.href='/'")
}
function PublicSacrificeDay() {
    var e = new Array("0403","0404","0405","0508","0512","0707","0814","0909","0918","0930","1025","1213")
      , t = new Date
      , i = ""
      , n = t.getMonth() + 1;
    return t.getMonth() > 9 ? i += n : i += "0" + n,
    t.getDate() > 9 ? i += t.getDate() : i += "0" + t.getDate(),
    e.indexOf(i) > -1 ? 1 : 0
}
function searchSize() {
    if (document.body.clientWidth > 768)
        return;
    let e = document.querySelector("#algolia-hits");
    e.addEventListener("DOMNodeInserted", (()=>{
        e.children[0].style.maxHeight = document.documentElement.clientHeight - 310 + "px"
    }
    ))
}
document.addEventListener("visibilitychange", (function() {
    document.hidden ? (document.title = "w(ﾟДﾟ)w 不要走！再看看嘛！",
    clearTimeout(titleTime)) : (document.title = "♪(^∇^*)欢迎回来！" + OriginTitile,
    titleTime = setTimeout((function() {
        document.title = OriginTitile
    }
    ), 2e3))
}
)),
PublicSacrificeDay() && document.getElementsByTagName("html")[0].setAttribute("style", "filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);"),
searchSize(),
window.addEventListener("resize", searchSize),
document.addEventListener("scroll", (function() {
    var e = window.scrollY + document.documentElement.clientHeight
      , t = window.scrollY
      , i = document.getElementById("pagination")
      , n = document.getElementById("pagenation-anchor");
    if (n && i) {
        var o = n.offsetTop + n.offsetHeight / 2;
        o > t && o < e ? i.classList.add("pagination-active") : i.classList.remove("pagination-active")
    }
}
));


function(l) {
    var h = (h = document.getElementsByTagName("script"))[h.length - 1]
      , a = h.getAttribute("data-injectcss")
      , h = h.getAttribute("data-disable-injectsvg");
    if (!h) {
        var t, p, c, z, M, v = function(h, a) {
            a.parentNode.insertBefore(h, a)
        };
        if (a && !l.__iconfont__svg__cssinject__) {
            l.__iconfont__svg__cssinject__ = !0;
            try {
                document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
            } catch (h) {
                console && console.log(h)
            }
        }
        t = function() {
            var h, a = document.createElement("div");
            a.innerHTML = l._iconfont_svg_string_2264842,
            (a = a.getElementsByTagName("svg")[0]) && (a.setAttribute("aria-hidden", "true"),
            a.style.position = "absolute",
            a.style.width = 0,
            a.style.height = 0,
            a.style.overflow = "hidden",
            a = a,
            (h = document.body).firstChild ? v(a, h.firstChild) : h.appendChild(a))
        }
        ,
        document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(t, 0) : (p = function() {
            document.removeEventListener("DOMContentLoaded", p, !1),
            t()
        }
        ,
        document.addEventListener("DOMContentLoaded", p, !1)) : document.attachEvent && (c = t,
        z = l.document,
        M = !1,
        F(),
        z.onreadystatechange = function() {
            "complete" == z.readyState && (z.onreadystatechange = null,
            i())
        }
        )
    }
    function i() {
        M || (M = !0,
        c())
    }
    function F() {
        try {
            z.documentElement.doScroll("left")
        } catch (h) {
            return void setTimeout(F, 50)
        }
        i()
    }
}(window);