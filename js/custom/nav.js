var box = document.getElementById("ark-nav-message-date-box")
  , addZero = e=>e < 10 ? "0" + e : e
  , trans = e=>({
    0: "日",
    1: "一",
    2: "二",
    3: "三",
    4: "四",
    5: "五",
    6: "六"
}[e]);
function setTime() {
    var e = new Date
      , t = e.getHours()
      , n = e.getMinutes()
      , a = e.getSeconds()
      , d = e.getDay()
      , s = addZero(t) + ":" + addZero(n) + ":" + addZero(a) + " 星期" + trans(d);
    box.innerText = s
}
function ark_menu_link(e) {
    document.getElementById("ark-menu-box").classList.add("arkend"),
    setTimeout((function() {
        document.getElementById("ark-menu-box").classList.add("arksink"),
        e.includes("https://") || e.includes("http://") ? window.location.href = e : typeof(pjax) != 'undefined' ? pjax.loadUrl(e) : window.location.href = e
    }
    ), 500)
}
setTime(),
setInterval(setTime, 1e3),
document.getElementById("ark-menu-start-btn").addEventListener("click", (()=>{
    document.getElementById("ark-cab-box").classList.remove("arksink"),
    document.getElementById("ark-menu-box").classList.remove("arksink"),
    document.getElementById("ark-cab-box").classList.remove("arkend"),
    document.getElementById("ark-menu-box").classList.remove("arkend")
}
)),
document.getElementById("ark-menu-end-btn").addEventListener("click", (()=>{
    document.getElementById("ark-cab-box").classList.add("arkend"),
    document.getElementById("ark-menu-box").classList.add("arkend"),
    setTimeout((function() {
        document.getElementById("ark-menu-box").classList.add("arksink"),
        document.getElementById("ark-cab-box").classList.add("arksink")
    }
    ), 1800)
}
));
