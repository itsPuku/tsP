/* Header & Footer Hide Onscroll */
var prevScrollpos=window.pageYOffset;window.onscroll=function(){var a=window.pageYOffset;prevScrollpos>a?(document.querySelector("header").style.top="0",document.querySelector(".Mobile_Menu_Widget").style.bottom="0"):(document.querySelector("header").style.top="-58px",document.querySelector(".Mobile_Menu_Widget").style.bottom="-58px"),prevScrollpos=a};

/* Voice Search */
function vSearch(){let a=new webkitSpeechRecognition;a.lang="en-US",a.start(),a.onresult=function(b){document.querySelector(".searchForm input").value=b.results[0][0].transcript,a.stop(),document.querySelector(".searchForm").submit()},a.onerror=function(b){a.stop()}}

/* Lazyload Thambnail & Post Image */
$(window).scroll(function(){Defer.dom(".lazy",125,"loaded",null,{rootMargin:"1px"}),"undefined"!=typeof infinite_scroll&&infinite_scroll.on("load",function(){Defer.dom(".lazy",125,"loaded",null,{rootMargin:"1px"})}),Defer.dom("iframe.lazy",175,"loaded")}),$(".postEntry img").each(function(){$(this).addClass("lazy");var a=$(this).attr("src").replace(/\/s[0-9]+(\-c)?/,"/s1280-rw-e30"),b=$("title").text();$(this).attr("data-src",a),$(this).attr("src","data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="),$(this).attr("alt",b)});

/* Lazyload Youtube */
function YTIframe(b){var a=document.createElement("iframe");a.setAttribute("src","https://www.youtube.com/embed/"+b.dataset.id+"?autoplay=1&rel=0"),a.setAttribute("frameborder","0"),a.setAttribute("allowfullscreen",""),a.setAttribute("allow","accelerometer; autoplay;encrypted-media;gyroscope;picture-in-picture"),b.parentNode.replaceChild(a,b)}function YTPlayer(){for(var c=document.querySelectorAll(".YT-Player"),b=0;b<c.length;b++){var d=c[b].dataset.id,a=document.createElement("div");a.setAttribute("data-id",d);var e=document.createElement("img");e.src="https://i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID",d),a.appendChild(e);var f=document.createElement("div");f.setAttribute("class","Play"),a.appendChild(f),a.onclick=function(){YTIframe(this)},c[b].appendChild(a)}}document.addEventListener("DOMContentLoaded",YTPlayer);

/* Lazyload Adsense */
var lazyadsense=!1;window.addEventListener("scroll",function(){var a,b;(0!=document.documentElement.scrollTop&& !1===lazyadsense||0!=document.body.scrollTop&& !1===lazyadsense)&&((a=document.createElement("script")).setAttribute("crossorigin","anonymous"),a.async=!0,a.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7572459954080658",(b=document.querySelectorAll("script")[0]).parentNode.insertBefore(a,b),lazyadsense=!0)},!0);

/* Auto Safe Link */
$(".Safe").each(function(){var a='/p/safelink.html?u=';var b=$(this).attr('href');$(this).attr('href',a+b)});

/* Alert */
function tsalert(a){var b=document.createElement("div");b.setAttribute("class","Aa");b.innerHTML=a;document.body.appendChild(b)}

/* Vibrate */
function shake(a){"vibrate"in navigator&&navigator.vibrate([a])}

/* Copy Funtion */
function tscopyalert(){document.execCommand("copy");tsalert("<span>√ Copied to Clipboard!</span>");shake(40)};for(var tscode=document.querySelectorAll(".Pcode code,.Tcode textarea,.Step1 kbd,.Step2 kbd"),i=0;i<tscode.length;i++)tscode[i].addEventListener("click",function(){var a=getSelection(),b=document.createRange();b.selectNodeContents(this),a.removeAllRanges(),a.addRange(b),tscopyalert()},!1);function tscopy(a){document.querySelector(a).select();tscopyalert()}

/* Slide Toggle */
function tssh(a,b){$(a).slideToggle(b)}