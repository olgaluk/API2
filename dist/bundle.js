!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.createElement("div");e.className="wrapper",document.body.appendChild(e);var t=document.createElement("div");t.className="top_search",e.appendChild(t);var n=document.createElement("div");n.className="button",n.id="button",t.appendChild(n);var o=document.createElement("i");o.className="fas fa-search fa-lg",n.appendChild(o);var c=document.createElement("form");c.className="search_input",c.method="get",c.onsubmit=function(){return!1},t.appendChild(c);var a=document.createElement("input");a.className="search_input",a.id="search_input",a.value="Search",a.name="q",a.type="text",a.minlength="3",a.required="",a.onfocus=function(){"Search"===a.value&&(a.value="")},a.onblur=function(){""===a.value&&(a.value="Search")},c.appendChild(a)};var c=function(){var e=document.createElement("div");e.className="slider",e.id="slider",document.body.appendChild(e);var t=document.createElement("div");t.className="left",t.id="left",t.innerText="⇦",e.appendChild(t);var n=document.createElement("div");n.className="right",n.id="right",n.innerText="⇨",e.appendChild(n);for(var o=0;o<4;o+=1){var c=document.createElement("div");c.className="slide",c.id="slide".concat(o),document.getElementById("slider").insertBefore(c,document.getElementById("right"))}},a="rgb(161, 17, 17)",d="blue",r=0,i=1,l="AIzaSyDE5BjzRdmgFAJFRAzjnXdoXRqKj3SBFiQ",s=document.querySelector('link[rel="import"]').import,u=0,m=0;function p(e){document.getElementById("slide".concat(+e)).style.backgroundColor=d,document.getElementById("slide".concat(+e)).innerText=i}function y(){var e=window.outerWidth,t=window.outerWidth;(e<751&&i%15==0||e>=751&&e<=1365&&i%8==0||e>1365&&i%4==0)&&function(){u+=1;var e=document.getElementById("search_input").value;if("Search"!==e||""===e){var t=e,n="https://www.googleapis.com/youtube/v3/search?key=".concat(l,"&type=video&part=snippet&maxResults=15&pageToken=").concat(m,"&q=").concat(t),o=new XMLHttpRequest;o.open("GET",n,!1),o.onreadystatechange=function(){if(4===o.readyState&&200===o.status){var e=JSON.parse(o.responseText);m=e.nextPageToken;for(var t=[],n=0;n<15;n+=1)t.push(e.items[n].id.videoId);E(t,u),h(u)}},o.send()}}(),i+=1,t>=1365&&(document.getElementsByClassName("container-scroll")[0].scrollLeft+=1288),t<1365&&t>750&&(document.getElementsByClassName("container-scroll")[0].scrollLeft+=644),t<=750&&(document.getElementsByClassName("container-scroll")[0].scrollLeft+=322),3!==r?(p(r+=1),document.getElementById("slide".concat(r-1)).style.backgroundColor=a,document.getElementById("slide".concat(r-1)).innerText=""):(p(r=0),document.getElementById("slide".concat(3)).style.backgroundColor=a,document.getElementById("slide".concat(3)).innerText="")}function g(){var e=window.outerWidth;0!==document.getElementsByClassName("container-scroll")[0].scrollLeft&&(i-=1,e>=1365&&(document.getElementsByClassName("container-scroll")[0].scrollLeft-=1288),e<1365&&e>750&&(document.getElementsByClassName("container-scroll")[0].scrollLeft-=644),e<=750&&(document.getElementsByClassName("container-scroll")[0].scrollLeft-=322),0!==r?(p(r-=1),document.getElementById("slide".concat(r+1)).style.backgroundColor=a,document.getElementById("slide".concat(r+1)).innerText=""):(p(r=3),document.getElementById("slide".concat(0)).style.backgroundColor=a,document.getElementById("slide".concat(0)).innerText=""))}function f(){document.getElementsByClassName("container-scroll")[0].scrollLeft=0,document.getElementById("slider")&&document.getElementById("slider").remove(),c(),i=1,p(0),document.getElementsByClassName("left")[0].addEventListener("click",g),document.getElementsByClassName("right")[0].addEventListener("click",y)}function v(e,t){var n="https://www.googleapis.com/youtube/v3/videos?id=".concat(e,"&key=").concat(l,"&part=snippet,contentDetails,statistics,status"),o=new XMLHttpRequest;o.open("GET",n,!1),o.onreadystatechange=function(){if(4===o.readyState&&200===o.status){var n=JSON.parse(o.responseText),c=n.items[0].statistics.viewCount,a=n.items[0].snippet.thumbnails.medium.url,d=n.items[0].snippet.title,r=n.items[0].snippet.description.substring(0,100),i=n.items[0].snippet.channelTitle,l=n.items[0].snippet.publishedAt.substring(0,10);!function(e,t,n,o,c,a,d,r){document.getElementById("title".concat(r)).innerText=t,document.getElementById("title".concat(r)).href="https://www.youtube.com/embed/".concat(e),document.getElementById("description".concat(r)).innerText=n,document.getElementById("author".concat(r)).innerText=o,document.getElementById("publication".concat(r)).innerText=c,document.getElementById("count".concat(r)).innerText=a,document.getElementById("image".concat(r)).src=d,14===r&&f()}(e,d,r,i,l,c,a,t)}},o.send()}function E(e,t){for(var n=0;n<15;n+=1)setTimeout(v,500,e[n],n+15*t)}function h(e){if(!document.getElementsByClassName("container-scroll")[0]){var t=document.createElement("div");t.className="container-scroll",document.body.appendChild(t)}for(var n=0;n<15;n+=1){var o=s.querySelector(".cards-container");document.getElementsByClassName("container-scroll")[0].appendChild(o.cloneNode(!0)),document.getElementById("cards-container").id="cards-container".concat(n+15*e),document.getElementById("title").id="title".concat(n+15*e),document.getElementById("description").id="description".concat(n+15*e),document.getElementById("author").id="author".concat(n+15*e),document.getElementById("publication").id="publication".concat(n+15*e),document.getElementById("count").id="count".concat(n+15*e),document.getElementById("image").id="image".concat(n+15*e)}}function B(){document.getElementsByClassName("container-scroll")[0]&&document.body.removeChild(document.getElementsByClassName("container-scroll")[0]);var e=document.getElementById("search_input").value;if("Search"!==e||""===e){var t=e,n="https://www.googleapis.com/youtube/v3/search?key=".concat(l,"&type=video&part=snippet&maxResults=15&pageToken&q=").concat(t),o=new XMLHttpRequest;o.open("GET",n,!1),o.onreadystatechange=function(){if(4===o.readyState&&200===o.status){var e=JSON.parse(o.responseText),t=[];m=e.nextPageToken;for(var n=0;n<15;n+=1)t.push(e.items[n].id.videoId);E(t,0),h(0)}},o.send()}}function b(e){var t=document.getElementById("search_input").value;13===e.keyCode&&""!==t&&B()}function w(e){var t=e,n=(t=t||window.event).deltaX||t.detail||t.wheelDelta;n>0&&y(),n<0&&g()}window.onload=function(){window.addEventListener("resize",f),o(),document.getElementById("button").addEventListener("click",B),document.getElementById("search_input").addEventListener("keydown",b),document.body.addEventListener&&("onwheel"in document?document.body.addEventListener("wheel",w):"onmousewheel"in document?document.body.addEventListener("mousewheel",w):document.body.addEventListener("MozMousePixelScroll",w))},exports.changeSize=f,exports.countPage=i,exports.changeSlideRight=y,exports.changeSlideLeft=g}]);