window.document.oncontextmenu = function(event) {
  if (event.ctrlKey) return true; //ctrl+右键 使用原生右键
  if (/Android|webOS|BlackBerry/i.test(navigator.userAgent)) return true; //媒体选择
  return popMenu(event); //打开右键菜单
};
document.addEventListener("click", function(event) {
  var mymenu = document.getElementById('SAO-back');
  mymenu.style.display = "none";
});
//link start,处理链接跳转的pjax请求；调用了主题自带的pjax对象。其他主题需要另外适配。
function linkStart(link){
  if (link.includes('https://') || link.includes('http://') ){
    window.location.href = link;
  }
  else{
    if (pjax){
      pjax.loadUrl(link);
    }
    else{
      window.location.href = link;
    }
  }
}
//点击菜单内元素播放点击音频
function clickAudio() {
  var clickAudio = document.getElementById("SAOClick");
  if (clickAudio) {
    clickAudio.play();//有音频时播放
  }
}
//定义二级菜单显隐，监听鼠标悬停动作
function Mouseover() {
  var thisChild = event.target.querySelector('.menu-child');
  if (thisChild) {
    thisChild.classList.add('active');
  }
}
function Mouseout() {
  var thisChild = event.target.querySelector('.menu-child');
  if (thisChild && thisChild.className.indexOf('active') > -1) {
    setTimeout(function() {
      thisChild.classList.remove('active');
    }, 100);
  }
}
function popMenu(event) {
  //播放菜单打开音乐
  var audio = document.getElementById("SAOlauncher");
  if (audio) {
    audio.play();//有音乐时打开
  }
  document.getElementById('SAO-back').style.display = "block";
  var mymenu = document.getElementById('SAO-menu');
  var menuContent = document.getElementById('SAO-menu-content');
  var screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
  var screenHeight = document.documentElement.clientHeight || document.body.clientHeight;
  // 菜单显示
  mymenu.style.display = 'block';
  menuContent.scrollTop = '150';
  //根据当前位置决定菜单出现位置，确保菜单可完整显示
  if (event.clientX * 2 > screenWidth) {
    if ((event.clientX - menuContent.clientWidth) * 2 > screenWidth) {
    mymenu.style.left = (event.clientX - menuContent.clientWidth) + "px";//偏右时左移
    }
    else {
      mymenu.style.left = event.clientX + "px";
    }
    mymenu.classList.add('left');
  } else {
    mymenu.style.left = event.clientX + "px";
    mymenu.classList.remove('left');
  }
  if (event.clientY * 2 > screenHeight) {
    mymenu.style.top = (event.clientY - menuContent.clientHeight) + "px";//偏高时下降
    mymenu.classList.add('top');
  } else {
    mymenu.style.top = event.clientY + "px";
    mymenu.classList.remove('top');
  }
  if ((event.clientY * 2 > screenHeight) && (event.clientX * 2 > screenWidth)) {
    if (mymenu.className.indexOf('top') > -1) {
      mymenu.classList.remove('top');
    }
    if (mymenu.className.indexOf('left') > -1) {
      mymenu.classList.remove('left');
    }
  }
  return false; //屏蔽原生菜单
}
//自定义动作
//搜索按钮动作
function openSearch() {
  document.body.style.cssText = 'width: 100%;overflow: hidden'
  document.querySelector('#local-search .search-dialog').style.display = 'block'
  document.querySelector('#local-search-input input').focus()
  btf.fadeIn(document.getElementById('search-mask'), 0.5)
  if (!loadFlag) {
    search(GLOBAL_CONFIG.localSearch.path)
    loadFlag = true
  }
  // shortcut: ESC
  document.addEventListener('keydown', function f (event) {
    if (event.code === 'Escape') {
      closeSearch()
      document.removeEventListener('keydown', f)
    }
  })
}
//在线聊天按钮动作
function openTidio() {
window.tidioChatApi.show();window.tidioChatApi.open();
}
//镜像站跳转动作
function Mirror() {
  let pathname;
  let hostname;
  let url;
  pathname = window.location.pathname;
  hostname = window.location.hostname;
  if (hostname === 'akilar.top') {
    url = "https://akilar.gitee.io" + pathname;
    window.alert("即将前往糖果屋分店🍬");
    window.location.href = url;
  }
  else if(hostname === 'akilar.gitee.io') {
    url = "https://akilar.top" + pathname;
    window.alert("正在返回糖果屋本部🍭！");
    window.location.href = url;
  }
  else {
    window.alert("Master，本地调试不需要跳转哦！🍫");
  }
}
//评论窗口跳转
function ToComment(){
  var hasComment = document.getElementById('post-comment');
  if (hasComment){
    window.location.href = '#post-comment'; //如果有评论区就跳转到评论区
  }
  else{
    window.location.href = '/comments/';//如果没有，就跳转到留言板
  };
}
//关闭当前页面
function Logout(){
  window.opener=null;
  window.open('','_self');
  window.close();
}
