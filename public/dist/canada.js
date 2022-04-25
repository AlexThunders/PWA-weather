(()=>{"use strict";var n={989:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(81),r=t.n(i),o=t(645),a=t.n(o)()(r());a.push([n.id,".bg {\n  position: absolute;\n  z-index: -2;\n  width: 100%;\n  min-width: 320px;\n  min-height: 500px;\n  max-width: 1440px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  height: 100%;\n  margin: 0 auto;\n  background: -webkit-gradient(linear, left bottom, left top, from(#276e27), to(#b2b2e6));\n  background: linear-gradient(to top, #276e27, #b2b2e6);\n  background-repeat: no-repeat;\n}\n\n.bg .intro {\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  width: 80%;\n  display: inline-block;\n  text-align: justify;\n  text-indent: 10px;\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n  font-size: 1.3em;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n.bg .intro strong {\n  color: white;\n}\n\n.bg .intro strong:hover {\n  color: #d0d4f3;\n}\n\n.bg fieldset {\n  position: relative;\n  width: 100%;\n  min-width: 320px;\n  min-height: 100vh;\n  max-width: 640px;\n  margin: 10px auto;\n  padding: 10px;\n  margin: auto;\n  border: none;\n  display: none;\n}\n\n.bg fieldset .weather-icon-place {\n  position: absolute;\n  right: 10%;\n  top: 100px;\n  width: 70px;\n  height: 70px;\n  z-index: 1;\n  background-color: green;\n  border-radius: 10px;\n  display: none;\n}\n\n@media screen and (min-width: 480px) {\n  .bg fieldset .weather-icon-place {\n    top: 80px;\n    width: 95px;\n    height: 90px;\n  }\n}\n\n@media screen and (min-width: 1080px) {\n  .bg fieldset .weather-icon-place {\n    right: 10%;\n    top: 60px;\n    width: 130px;\n    height: 120px;\n  }\n}\n\n.bg fieldset .weather-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  z-index: 2;\n  border-radius: 15px;\n}\n\n.bg fieldset img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n.bg fieldset input {\n  width: 180px;\n  margin: 10px 0 0;\n  font-size: 1.3em;\n  text-transform: capitalize;\n  font-style: italic;\n}\n\n@media screen and (min-width: 480px) {\n  .bg fieldset input {\n    width: 250px;\n  }\n}\n\n.bg fieldset .microphone {\n  font-size: 1.7em;\n  line-height: 1em;\n  margin: 20px 10px;\n  padding: 3px;\n  background: none;\n  border: none;\n  color: black;\n  text-shadow: 1px 1px 1px white;\n  -webkit-transition: .3s;\n  transition: .3s;\n  outline: none;\n  cursor: pointer;\n}\n\n.bg fieldset .microphone:hover {\n  color: white;\n  text-shadow: 3px 1px 3px black;\n}\n\n.bg fieldset p, .bg fieldset span {\n  margin-top: 10px;\n  padding: 0;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: white;\n}\n\n.bg fieldset #tempPar, .bg fieldset #humidity {\n  visibility: hidden;\n  font-size: 1em;\n}\n\n.bg fieldset #city {\n  text-transform: capitalize;\n}\n\n.bg fieldset #submit {\n  margin: 10px 0;\n  padding: 0 10px;\n  width: 130px;\n  font-size: 1.2em;\n  background-color: #a12929;\n  color: white;\n  font-style: normal;\n  -webkit-transition: .3s;\n  transition: .3s;\n}\n\n.bg fieldset #submit:hover {\n  background-color: #e9cbcb;\n  color: #771414;\n}\n\n.bg fieldset #result4weather {\n  font-size: 1em;\n  margin: 0 0 0 10px;\n  padding: 0;\n  position: absolute;\n  z-index: 2;\n}\n\n.bg fieldset #result4weather:hover {\n  background-color: #9de4e0;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.main {\n  min-height: 1100px;\n  min-width: 320px;\n  padding: 10px;\n  margin: 0 auto;\n  max-width: 1440px;\n  background-color: #39823b;\n}\n\n.main h1 a {\n  margin: 10px;\n  color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n  text-decoration: none;\n  z-index: 5;\n}\n\n.main h1 a:hover {\n  color: purple;\n}\n\n.main p {\n  margin: 30px 10px;\n  color: white;\n  font-size: 20px;\n  text-align: justify;\n  text-indent: 20px;\n}\n\n.main .grid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto auto auto auto;\n      grid-template-columns: auto auto auto auto;\n  width: 100%;\n  min-width: 320px;\n  min-height: 700px;\n  max-width: 1440px;\n  gap: 10px;\n  margin: 10px auto;\n  padding: 0 15px;\n}\n\n.main .grid div {\n  height: 180px;\n  background-color: #0a2c00;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  position: relative;\n  -webkit-transition: .3s;\n  transition: .3s;\n  cursor: pointer;\n  opacity: .8;\n}\n\n.main .grid div:hover {\n  opacity: 1;\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n}\n\n.main .grid div:hover h2 {\n  color: red;\n  font-size: 28px;\n}\n\n.main .grid div:active {\n  color: #e0d100;\n}\n\n.main .grid div h2 {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  font-size: 24px;\n  text-align: center;\n  color: purple;\n  margin: 0;\n  padding: 5px;\n  z-index: 1;\n  -webkit-transition: .3s;\n  transition: .3s;\n}\n\n.main .grid div h2 span {\n  color: red;\n}\n\n.main .grid div .result4weather {\n  margin: 0 20px;\n}\n\n.main .grid div img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.main .grid div .icon-place {\n  position: absolute;\n  top: 55px;\n  right: 30px;\n  width: 110px;\n  height: 110px;\n  background: none;\n  z-index: 1;\n  background-color: green;\n  border-radius: 10px;\n  display: none;\n}\n\n.main .grid div .canada-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  z-index: 2;\n  border-radius: 15px;\n}\n\n.toronto {\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 2;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 4;\n  grid-area: 1 / 1 / 3 / 5;\n}\n\n.vancouver {\n  -ms-grid-row: 3;\n  -ms-grid-row-span: 2;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 4;\n  grid-area: 3 / 1 / 5 / 5;\n}\n\n.montreal {\n  -ms-grid-row: 5;\n  -ms-grid-row-span: 2;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 4;\n  grid-area: 5 / 1 / 7 / 5;\n}\n\n.edmonton {\n  -ms-grid-row: 7;\n  -ms-grid-row-span: 2;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 4;\n  grid-area: 7 / 1 / 9 / 5;\n}\n\n.ottawa {\n  -ms-grid-row: 9;\n  -ms-grid-row-span: 2;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 4;\n  grid-area: 9 / 1 / 11 / 5;\n}\n\n.calgary {\n  -ms-grid-row: 11;\n  -ms-grid-row-span: 2;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 4;\n  grid-area: 11 / 1 / 13 / 5;\n}\n\n@media screen and (min-width: 580px) {\n  .grid > div {\n    min-height: 230px;\n  }\n  .grid > div h2 {\n    left: 0;\n  }\n  .grid > div .icon-place {\n    top: 100px;\n    width: 100px;\n    height: 100px;\n  }\n  .main h1 a {\n    margin: 20px 40px;\n  }\n  .toronto {\n    -ms-grid-row: 1;\n    -ms-grid-row-span: 1;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 2;\n    grid-area: 1 / 1 / 2/ 3;\n  }\n  .vancouver {\n    -ms-grid-row: 1;\n    -ms-grid-row-span: 1;\n    -ms-grid-column: 3;\n    -ms-grid-column-span: 2;\n    grid-area: 1 / 3 / 2/ 5;\n  }\n  .montreal {\n    -ms-grid-row: 2;\n    -ms-grid-row-span: 1;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 2;\n    grid-area: 2 / 1 / 3/ 3;\n  }\n  .edmonton {\n    -ms-grid-row: 2;\n    -ms-grid-row-span: 1;\n    -ms-grid-column: 3;\n    -ms-grid-column-span: 2;\n    grid-area: 2 / 3 / 3/ 5;\n  }\n  .ottawa {\n    -ms-grid-row: 3;\n    -ms-grid-row-span: 1;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 2;\n    grid-area: 3 / 1 / 4/ 3;\n  }\n  .calgary {\n    -ms-grid-row: 3;\n    -ms-grid-row-span: 1;\n    -ms-grid-column: 3;\n    -ms-grid-column-span: 2;\n    grid-area: 3 / 3 / 4/ 5;\n  }\n}\n\n@media screen and (min-width: 1080px) {\n  .grid > div {\n    min-height: 330px;\n  }\n  .grid > div h2 {\n    left: 30px;\n  }\n  .grid > div .icon-place {\n    top: 80px;\n    width: 140px;\n    height: 140px;\n  }\n  .toronto {\n    -ms-grid-row: 1;\n    -ms-grid-row-span: 1;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 1;\n    grid-area: 1 / 1 / 2 / 2;\n  }\n  .vancouver {\n    -ms-grid-row: 1;\n    -ms-grid-row-span: 1;\n    -ms-grid-column: 2;\n    -ms-grid-column-span: 3;\n    grid-area: 1 / 2 / 2 / 5;\n  }\n  .montreal {\n    -ms-grid-row: 2;\n    -ms-grid-row-span: 1;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 2;\n    grid-area: 2 / 1 / 3 / 3;\n  }\n  .edmonton {\n    -ms-grid-row: 2;\n    -ms-grid-row-span: 1;\n    -ms-grid-column: 3;\n    -ms-grid-column-span: 2;\n    grid-area: 2 / 3 / 3 / 5;\n  }\n  .ottawa {\n    -ms-grid-row: 3;\n    -ms-grid-row-span: 1;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 1;\n    grid-area: 3 / 1 / 4 / 2;\n  }\n  .calgary {\n    -ms-grid-row: 3;\n    -ms-grid-row-span: 1;\n    -ms-grid-column: 2;\n    -ms-grid-column-span: 3;\n    grid-area: 3 / 2 / 4 / 5;\n  }\n}\n\n@media screen and (min-width: 1440px) {\n  .grid > div {\n    min-height: 460px;\n  }\n  .grid > div h2 {\n    left: 50px;\n  }\n  .toronto {\n    -ms-grid-row: 1;\n    -ms-grid-row-span: 1;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 1;\n    grid-area: 1 / 1 / 2 / 2;\n  }\n  .vancouver {\n    -ms-grid-row: 1;\n    -ms-grid-row-span: 1;\n    -ms-grid-column: 2;\n    -ms-grid-column-span: 3;\n    grid-area: 1 / 2 / 2 / 5;\n  }\n  .montreal {\n    -ms-grid-row: 2;\n    -ms-grid-row-span: 1;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 3;\n    grid-area: 2 / 1 / 3 / 4;\n  }\n  .edmonton {\n    -ms-grid-row: 2;\n    -ms-grid-row-span: 1;\n    -ms-grid-column: 4;\n    -ms-grid-column-span: 1;\n    grid-area: 2 / 4 / 3 / 5;\n  }\n  .ottawa {\n    -ms-grid-row: 3;\n    -ms-grid-row-span: 1;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 1;\n    grid-area: 3 / 1 / 4 / 2;\n  }\n  .calgary {\n    -ms-grid-row: 3;\n    -ms-grid-row-span: 1;\n    -ms-grid-column: 2;\n    -ms-grid-column-span: 3;\n    grid-area: 3 / 2 / 4 / 5;\n  }\n}\n\nh1 {\n  margin: 10px 40px;\n}\n\nh3 {\n  font-size: 24px;\n  color: #011301;\n  margin: 20px;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n  background-color: #39823b;\n}\n\nheader {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  min-width: 320px;\n  min-height: 70px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  color: white;\n  text-shadow: 0 0 35px black,0 0 35px black,0 0 15px black,\r 0 0 15px black,0 0 15px black,0 0 35px black;\n  background-color: #111;\n  text-align: center;\n  opacity: .9;\n}\n\nheader .langSelect {\n  opacity: .8;\n  margin-right: 0px;\n  z-index: 5;\n  background-color: #1f922f;\n  width: 40px;\n  text-align: center;\n}\n\nheader .langSelect:hover {\n  opacity: 1;\n  background-color: #0ab120;\n}\n\n@media screen and (min-width: 1080px) {\n  header .langSelect {\n    width: 60px;\n    height: 20px;\n  }\n}\n\nheader #home_icon {\n  margin: 0 30px 0 0;\n  padding: 10px;\n  height: 50px;\n  width: 50px;\n  opacity: .7;\n}\n\nheader #home_icon:hover {\n  opacity: 1;\n}\n\nheader h1 {\n  font-size: 1.3em;\n  font-weight: 800;\n  margin: 0;\n}\n\nheader h1:hover {\n  -webkit-transition: .7s;\n  transition: .7s;\n  color: red;\n  text-shadow: 0 0 15px white,0 0 15px white,0 0 15px white,\r 0 0 15px white,0 0 15px white,0 0 15px white;\n}\n\nheader .header-link {\n  margin: 10px 5px 10px 35px;\n  font-size: 25px;\n  font-family: sans-serif;\n  color: #ccb5d7;\n  text-decoration: none;\n  -webkit-transition: .3s;\n  transition: .3s;\n}\n\nheader .header-link:hover {\n  color: red;\n}",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);i&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},689:(n,e,t)=>{var i=t(379),r=t.n(i),o=t(795),a=t.n(o),s=t(569),d=t.n(s),c=t(565),l=t.n(c),p=t(216),m=t.n(p),g=t(589),u=t.n(g),h=t(989),x={};x.styleTagTransform=u(),x.setAttributes=l(),x.insert=d().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=m(),r()(h.Z,x),h.Z&&h.Z.locals&&h.Z.locals},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var o={},a=[],s=0;s<n.length;s++){var d=n[s],c=i.base?d[0]+i.base:d[0],l=o[c]||0,p="".concat(c," ").concat(l);o[c]=l+1;var m=t(p),g={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)e[m].references++,e[m].updater(g);else{var u=r(g,i);i.byIndex=s,e.splice(s,0,{identifier:p,updater:u,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=i(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=t(o[a]);e[s].references--}for(var d=i(n,r),c=0;c<o.length;c++){var l=t(o[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=d}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},424:(n,e,t)=>{t(689);var i=t(607),r=t(382);const o=Array.from(document.querySelectorAll(".city")),a=Array.from(document.querySelectorAll(".icon-place")),s=Array.from(document.querySelectorAll(".result4weather")),d=document.createElement("img"),c=[];"serviceWorker"in navigator&&navigator.serviceWorker.register("../../sw.js").then((n=>console.log("sw is registered",n))).catch((n=>console.log("sw is not registered",n))),o.forEach((n=>{let e=(0,r.w)(n);c.push(e)})),console.log("test22"),(0,r.T)(o);const l=n=>{let e;fetch(`https://weatherdbi.herokuapp.com/data/weather/${n}`).then((t=>{if(200===t.status)return t.json();alert("no such city is found"),s.forEach((n=>{n.innerText=""})),e=`Sorry! Temperature in ${n} is not available right now`,(0,i.D)(e)})).then((t=>{console.log(t),"fail"===t.status&&(void 0===n?(e="Not sure that I can find info about that city",(0,i.D)(e)):(e="temperature is not available right now",(0,i.D)(e)));let r=`${Math.round(null==t?void 0:t.currentConditions.temp.c)} C`;void 0!==r&&(e=`Temperature in ${n} is ${parseFloat(r)} celcius`,(0,i.D)(e),s.forEach((e=>{e.innerText="",e.dataset.city===n&&(e.innerText=r)})),a.forEach((e=>{e.dataset.city===n&&(d.classList.add("canada-icon"),d.setAttribute("src",null==t?void 0:t.currentConditions.iconURL),e.appendChild(d),e.style.display="block")})))})).catch((n=>{console.error(n),e="you should try one more time a bit later",(0,i.D)(e)}))};o.forEach((n=>{n.addEventListener("click",(n=>{a.forEach((n=>{n.style.display="none"})),d.remove(),s.forEach((n=>{n.innerText=""}));let e=n.target.dataset.city;l(e)}))})),document.addEventListener("keypress",(n=>{if(13===n.keyCode){a.forEach((n=>{n.style.display="none"}));let e=n.target;if(e.classList.contains("backbtn"))return void history.go(-1);let t=(0,r.w)(e);const i=c.filter((n=>n.toLowerCase()===t))[0];l(i)}}))},382:(n,e,t)=>{t.d(e,{T:()=>r,w:()=>i});const i=n=>{let e="";return n.className.indexOf("city")>-1&&(e=n.className.slice(0,n.className.indexOf("city")-1).toLowerCase()),e},r=n=>{n.forEach((n=>{if(n.constructor===Text)return;let e=i(n);Array.from(n.children).forEach((n=>{if(n.constructor!==Text){n.setAttribute("data-city",e);let t=Array.from(n.children);t.length>0&&t.forEach((n=>{n.constructor!==Text&&n.setAttribute("data-city",e)}))}}))}))}},607:(n,e,t)=>{t.d(e,{D:()=>h}),t(689);const i=document.getElementById("inputCity"),r=document.getElementById("city"),o=document.getElementById("submit"),a=document.getElementById("result4weather"),s=document.getElementById("tempPar"),d=document.getElementById("humidity"),c=(document.getElementById("fieldset"),document.querySelector(".weather-icon-place"));let l,p=document.createElement("img");console.log("test1"),"serviceWorker"in navigator&&navigator.serviceWorker.register("../../sw.js").then((n=>console.log("sw is registered",n))).catch((n=>console.log("sw is not registered",n))),null==i||i.addEventListener("focus",(()=>{i.value="",p.remove(),s.style.visibility="hidden",d.style.visibility="hidden"})),null==i||i.addEventListener("keydown",(n=>{i.value,13===n.keyCode&&(""===i.value&&alert("please, enter city"),m(i.value));let e=String.fromCharCode(n.keyCode);/[0-9]/.test(e)&&n.preventDefault()}));const m=n=>{let e,t;fetch(`https://weatherdbi.herokuapp.com/data/weather/${n}`).then((t=>{if(t.ok)return t.json();alert("no such city is found"),a.innerText="",e=`temperature in ${n} is not available right now`,h(e)})).then((e=>{let i;"fail"===e.status&&(i=`temperature in ${n} is not available right now`,h(i)),r.innerText=` ${n}`,t=` ${Math.round(null==e?void 0:e.currentConditions.temp.c)} C`,s.style.visibility="visible",a.innerText=t,d.style.visibility="visible";let o=` ${null==e?void 0:e.currentConditions.humidity}`;var l;d.innerText=`Humidity in ${l=n,l.charAt(0).toUpperCase()+l.slice(1)} at ${null==e?void 0:e.currentConditions.dayhour} is ${o}`,p.setAttribute("src",null==e?void 0:e.currentConditions.iconURL),p.setAttribute("alt",null==e?void 0:e.currentConditions.comment),p.classList.add("weather-icon"),c.appendChild(p),c.style.display="block",i=`Temperature in ${n} is ${parseFloat(t)} celcius`,h(i)})).catch((n=>{console.error(n)}))};null==o||o.addEventListener("click",(n=>{l=i.value,""===l&&alert("please, enter city"),m(l)})),$(document).ready((()=>{$("header h1").click((n=>{$("#fieldset").fadeToggle(1e3),$(".intro").fadeToggle(1e3),$("#inputCity").focus()})),$("#openWeather").click((()=>{$("#fieldset").fadeToggle(1e3),$(".intro").fadeToggle(1e3)}))}));const g=document.querySelector(".microphone"),u=new(window.SpeechRecognition||window.webkitSpeechRecognition);function h(n){const e=new SpeechSynthesisUtterance;e.text=n,e.volume=1,e.rate=1,e.pitch=1,window.speechSynthesis.speak(e)}u.onstart=function(){},u.onresult=function(n){const e=n.resultIndex,t=n.results[e][0].transcript;i.value=t,l=t,m(t)},null==g||g.addEventListener("click",(()=>{s.style.visibility="hidden",u.start()}))}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={id:i,exports:{}};return n[i](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t(424),t(382)})();