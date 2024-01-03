var swiper = new Swiper('.blog-slider', {
  passiveListeners: true,
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  autoplay: {
    disableOnInteraction: true,
    delay: 3000
  },
  mousewheel: false,
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

// var comtainer = document.getElementById('swiper_container');
// comtainer.onmouseenter = function() {
//   swiper.autoplay.stop();
// };
// comtainer.onmouseleave = function() {
//   swiper.autoplay.start();
// }

//首页顶部推荐文章轮播图
var ark_swiper = new Swiper("#ark-swiper-container", {
  direction: "horizontal", //横向切换
  loop: true,
  grabCursor : true,//鼠标悬停时显示抓手
  updateOnWindowResize: true,
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  effect : 'fade', //渐隐切换
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,//3秒切换一次
    pauseOnMouseEnter: true, //鼠标进入停止切换，离开恢复切换
  },
});

//页脚徽标轮播图
var ark_footer_swiper = new Swiper("#ark-footer-bdage-container", {
  direction: "horizontal", //横向切换
  loop: true,
  updateOnWindowResize: true,
  slidesPerView: 1,
  spaceBetween: 10,
  mousewheel: true,
  effect : 'fade', //渐隐切换
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 3000,//3秒切换一次
    pauseOnMouseEnter: true, //鼠标进入停止切换，离开恢复切换
  },
});

var ark_menu_first_swiper = new Swiper(".menu-item-container",{
    direction: "horizontal",
    loop: !0,
    updateOnWindowResize: !0,
    grabCursor: !0,
    slidesPerView: 1,
    spaceBetween: 10,
    mousewheel: !0,
    pagination: {
        el: ".ark-menu-pagination",
        clickable: !0
    },
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: !0
    }
})

var article_swiper = new Swiper(".ark-article-sort-container",{
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: !0,
    updateOnWindowResize: !0,
    grabCursor: !0,
    spaceBetween: 10,
    mousewheel: !0,
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: !0
    }
})
    