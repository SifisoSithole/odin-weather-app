(()=>{"use strict";var e={890:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(81),a=n.n(r),i=n(645),o=n.n(i),c=n(667),d=n.n(c),s=new URL(n(13),n.b),l=new URL(n(122),n.b),p=o()(a()),u=d()(s),h=d()(l);p.push([e.id,`* {\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n\n.content {\n    background: url(${u}) center/cover no-repeat;\n    height: 100vh;\n    width: 100vw;\n}\n\n.app-container {\n    color: #FFF;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n}\n\n.weather-details {\n    display: flex;\n    width: 80%;\n    height: 20%;\n    background-color: rgba(255, 255, 255, 0.3);\n}\n\n.hour-update {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-right: rgba(0, 0, 0, 0.2) 0.5px solid;\n    height: 100%;\n    width: 100%;\n}\n\n.hour-update-container {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    width: 65%;\n}\n\n.detailed-details {\n    background: url(${h}) center/cover no-repeat;\n    width: 80%;\n    height: 60%;\n    display: flex;\n    justify-content: space-between;\n    font-size: 1.2rem;\n}\n\n.current-hour {\n    background-color: rgba(255, 255, 255, 0.4);\n}\n\n.daily-weather {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    gap: 10px;\n    width: 35%;\n    border-right: rgba(0, 0, 0, 0.2) 0.5px solid;\n}\n\n.daily-temp {\n    font-weight: bold;\n    font-size: 3rem;\n}\n\n.date, .icon-title {\n    font-size: 1.2rem;\n}\n\n.weather-icon-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.day-details {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.detailed-daily-update {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-column-gap: 40px;\n    padding: 20px;\n}\n\n.location {\n    font-weight: bold;\n    font-size: 2.2rem;\n    grid-column: span 2;\n}\n\n.right-side {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.options-container {\n    display: flex;\n    gap: 25px;\n    cursor: pointer;\n}\n\n.active {\n    border-top: 4px solid yellow;\n    padding-top: 5px;\n}\n\n.not-active {\n    padding-top: 9px;\n}\n\n\n.search-container {\n    padding: 20px;\n}\n\n.search-input {\n    border-radius: 30px;\n    height: 27px;\n    width: 300px;\n    text-align: center;\n}\n\n.suggestion-item {\n    font-size: 1.5rem;\n    cursor: pointer;\n}\n\n.suggestion-item:hover {\n    background-color: #FFF;\n    color: #000;\n}\n\n.suggestions-container {\n    text-align: center;\n}`,""]);const m=p},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=n(p),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var m=a(h,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}o.push(p)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var c=n(i[o]);t[c].references--}for(var d=r(e,a),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},122:(e,t,n)=>{e.exports=n.p+"557a9309bec30e5e09e5.jpg"},13:(e,t,n)=>{e.exports=n.p+"7bff7551fcd226b6abca.jpg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=(()=>{const e="http://api.weatherapi.com/v1/",t="2704e1eee78c4dcba32100526241501",n=async e=>{try{const t=await fetch(e,{mode:"cors"});return await t.json()}catch(e){throw console.error("Error fetching data:",e),e}};return{currentWeather:async r=>{try{const a=`${e}forecast.json?key=${t}&q=${r}&days=3`;return await n(a)}catch(e){throw console.error("Error fetching current weather:",e),e}},search:async r=>{try{const a=`${e}search.json?key=${t}&q=${r}`;return await n(a)}catch(e){throw console.error("Error searching for location:",e),e}},history:async r=>{try{const a=new Date,i=[];for(let e=3;e>=1;e--){let t=new Date(a);t.setDate(a.getDate()-e),i.push(t.toISOString().split("T")[0])}const o=[];return await Promise.all(i.map((async a=>{const i=`${e}history.json?key=${t}&q=${r}&dt=${a}`,c=await n(i);o.push(c.forecast.forecastday[0])}))),o}catch(e){throw console.error("Error searching for location:",e),e}}}})(),t=class{constructor(){this.dailyTemp=document.querySelector(".daily-temp"),this.date=document.querySelector(".date"),this.weatherIcon=document.querySelector(".weather-icon"),this.weatherIconTitle=document.querySelector(".icon-title"),this.leftSide=document.querySelector(".left-side"),this.rightSide=document.querySelector(".right-side"),this.detailedDailyUpdates=document.querySelector(".detailed-daily-update"),this.optionsContainer=document.querySelector(".options-container"),this.currentTime=document.querySelector(".current-time-container")}},r=()=>{const e=new Date;let t=e.getHours();return`${t}:${e.getMinutes().toString().padStart(2,"0")}:${e.getSeconds().toString().padStart(2,"0")} ${t>=12?"PM":"AM"}`};const a=(t,n)=>{const a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div"),d=document.createElement("p"),s=document.createElement("p"),l=document.createElement("p");return a.classList.add("right-side"),i.classList.add("options-container"),d.textContent="Today",d.classList.add("active"),s.textContent="Days",s.classList.add("not-active"),d.addEventListener("click",(()=>{d.classList.contains("active")||(o(t),d.classList.remove("non-active"),d.classList.add("active"),s.classList.remove("active"),s.classList.add("non-active"))})),s.addEventListener("click",(()=>{s.classList.contains("active")||(d.classList.add("non-active"),d.classList.remove("active"),s.classList.add("active"),s.classList.remove("non-active"),(async(t,n)=>{!function(e){const t=document.querySelector(".hour-update-container");if(t){const n=document.createElement("div");for(n.classList.add("hour-update");t.firstChild;)t.removeChild(t.firstChild);t.style.gridTemplateColumns="repeat(6, 1fr)",e.forEach((e=>{let r=n.cloneNode(!0),a=document.createElement("p"),i=document.createElement("img"),o=document.createElement("p");var c;e.date===function(){const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}()&&r.classList.add("current-hour"),a.textContent=(c=e.date,new Date(c).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"2-digit"})),i.src=e.day.condition.icon,o.innerHTML=`${e.day.avgtemp_c}&deg;C`,r.appendChild(a),r.appendChild(i),r.appendChild(o),t.appendChild(r)}))}else console.error("Element with class '.hour-update-container' not found.")}((await e.history(t)).concat(n.forecast.forecastday))})(t,n))})),c.classList.add("current-time-container"),l.textContent=r(),i.appendChild(d),i.appendChild(s),c.appendChild(l),a.appendChild(i),a.appendChild(c),setInterval((()=>{l.textContent=r()}),1e3),a},i=e=>{if(!(e instanceof HTMLElement))throw new Error("Invalid node. Must be an HTMLElement.");for(;e.firstChild;)e.removeChild(e.firstChild)},o=async(n="ip")=>{let r,c;if("ip"===n){const t=await fetch("https://api.ipify.org?format=json",{mode:"cors"});r=await t.json(),c=await e.currentWeather(r.ip)}else c=await e.currentWeather(n);const d=document.querySelector(".weather-details"),s=document.querySelector(".detailed-details");i(d),i(s);const l=c.forecast.forecastday[0];d.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("p"),r=document.createElement("div"),a=document.createElement("p"),i=document.createElement("p"),o=document.createElement("img");return e.classList.add("daily-weather"),t.classList.add("daily-details"),n.classList.add("daily-temp"),a.classList.add("date"),o.classList.add("weather-icon"),r.classList.add("weather-icon-container"),i.classList.add("icon-title"),t.appendChild(n),t.appendChild(a),e.appendChild(t),r.appendChild(o),r.appendChild(i),e.appendChild(r),e})()),s.appendChild(((e,t,n="C")=>{const r=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),c=document.createElement("p"),d=document.createElement("p"),s=document.createElement("p"),l=document.createElement("p"),p=document.createElement("p"),u=document.createElement("p"),h=document.createElement("p"),m=document.createElement("p"),f=document.createElement("p");return i.classList.add("detailed-text"),o.classList.add("detailed-text"),c.textContent=`${e.name}, ${e.country}`,c.classList.add("location"),d.textContent="Humidity",s.textContent="Chance of rain",l.textContent="Average temperature",p.textContent="Wind speed",u.textContent=`${t.avghumidity}%`,h.textContent=`${t.daily_chance_of_rain}%`,m.innerHTML=`${t["C"===n?"avgtemp_c":"avgtemp_f"]}&deg;${n}`,f.textContent=`${t.maxwind_kph} kph`,i.appendChild(d),i.appendChild(s),i.appendChild(l),i.appendChild(p),o.appendChild(u),o.appendChild(h),o.appendChild(m),o.appendChild(f),a.classList.add("detailed-daily-update"),a.appendChild(c),a.appendChild(i),a.appendChild(o),r.classList.add("left-side"),r.appendChild(a),r})(c.location,l.day)),s.appendChild((()=>{const t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("input"),a=document.createElement("div");return t.classList.add("search-container"),n.classList.add("search"),r.classList.add("search-input"),a.classList.add("suggestions-container"),r.placeholder="Search for a location...",n.appendChild(r),t.appendChild(n),t.appendChild(a),r.addEventListener("input",(async t=>{const n=t.target.value;a.innerHTML="",""!==n.trim()&&n.trim().length>2&&(await e.search(n)).forEach((e=>{const t=document.createElement("div");t.classList.add("suggestion-item"),t.textContent=e.name,t.addEventListener("click",(()=>{a.innerHTML="",o(e.name)})),a.appendChild(t)}))})),t})()),"ip"===n?s.appendChild(a(r.ip,c)):s.appendChild(a(n,c));const p=new t;var u;p.dailyTemp.innerHTML=`${c.current.temp_c}&deg;C`,p.date.textContent=(u=l.date,new Date(u).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"2-digit"})),p.weatherIcon.src=c.current.condition.icon,p.weatherIconTitle.textContent=c.current.condition.text,d.appendChild(((e,t="C")=>{const n=e=>{const t=new Date(e),n=t.getHours(),a=t.getMinutes();return`${r(n)}:${r(a)}`},r=e=>e<10?`0${e}`:e,a=document.createElement("div");a.classList.add("hour-update-container");const i=document.createElement("div");i.classList.add("hour-update");const o=`${r((new Date).getHours())}:00`;let c;for(let t=0;t<e.length;t++)if(o===n(e[t].time)){c=t;break}const d=e.slice(c-5,c).concat(e.slice(c,c+5));for(let e=0;e<d.length;e++){let r=i.cloneNode(!0),c=document.createElement("p"),s=document.createElement("img"),l=document.createElement("p");o===n(d[e].time)&&r.classList.add("current-hour"),c.textContent=n(d[e].time),s.src=d[e].condition.icon,l.innerHTML=`${d[e].temp_c}&deg;${t}`,r.appendChild(c),r.appendChild(s),r.appendChild(l),a.appendChild(r)}return a})(l.hour))};var c=n(379),d=n.n(c),s=n(795),l=n.n(s),p=n(569),u=n.n(p),h=n(565),m=n.n(h),f=n(216),g=n.n(f),y=n(589),v=n.n(y),C=n(890),w={};w.styleTagTransform=v(),w.setAttributes=m(),w.insert=u().bind(null,"head"),w.domAPI=l(),w.insertStyleElement=g(),d()(C.Z,w),C.Z&&C.Z.locals&&C.Z.locals,o();let x=(new Date).getHours();setInterval((()=>{let e=(new Date).getHours();e!==x&&(o(),x=e)}),6e4)})()})();