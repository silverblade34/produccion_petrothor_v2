(function(){"use strict";var e={9728:function(e,t,n){var o=n(9242),a=n(3396);const r={id:"app"};function i(e,t,n,o,i,s){const u=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(u)])}var s={name:"App"},u=n(89);const c=(0,u.Z)(s,[["render",i]]);var l=c,d=n(2483),f=n(4239);const m=(0,d.p7)({history:(0,d.PO)(),routes:[{meta:{title:"Home",requiresAuth:!0},path:"/",component:()=>n.e(438).then(n.bind(n,3691)),children:[{name:"dashboard",path:"",component:()=>Promise.all([n.e(161),n.e(362)]).then(n.bind(n,6362))},{name:"monitorearabastecimientos",path:"monitorearabastecimientos",component:()=>Promise.all([n.e(161),n.e(887)]).then(n.bind(n,7887))},{name:"reportes",path:"reportes",component:()=>Promise.all([n.e(161),n.e(42)]).then(n.bind(n,2042))},{name:"administrarcuentas",path:"cuentas",component:()=>Promise.all([n.e(161),n.e(451),n.e(849)]).then(n.bind(n,6465))},{name:"unidades",path:"unidades",component:()=>Promise.all([n.e(161),n.e(473)]).then(n.bind(n,5473))},{name:"clientes",path:"clientes",component:()=>Promise.all([n.e(161),n.e(801)]).then(n.bind(n,801))},{name:"conductores",path:"conductores",component:()=>Promise.all([n.e(161),n.e(451),n.e(442)]).then(n.bind(n,382))},{name:"destinatarios",path:"destinatarios",component:()=>Promise.all([n.e(161),n.e(101)]).then(n.bind(n,4101))},{name:"facturaciones",path:"facturaciones",component:()=>Promise.all([n.e(161),n.e(17)]).then(n.bind(n,9017))},{name:"admincuentasmaestras",path:"admincuentasmaestras",component:()=>Promise.all([n.e(161),n.e(451),n.e(457)]).then(n.bind(n,3031))}]},{meta:{title:"Login"},path:"/login",name:"login",component:()=>Promise.all([n.e(161),n.e(560)]).then(n.bind(n,8176))}]});m.beforeEach(((e,t,n)=>{const o=e.matched.some((e=>e.meta.requiresAuth));o&&!f.Z.state.statusLogin?n({name:"login"}):"login"===e.name&&f.Z.state.statusLogin?n({name:"dashboard"}):"/"===e.path&&"0"==f.Z.state.tipousuario?n({name:"admincuentasmaestras"}):"/"===e.path&&"1"==f.Z.state.tipousuario?n({name:"administrarcuentas"}):n()}));var p=m;f.Z.dispatch("initializeStateFromLocalStorage");const h=(0,o.ri)(l);h.use(p).use(f.Z).mount("#app")},4239:function(e,t,n){var o=n(65);const a="myAppData";t.Z=(0,o.MT)({state:{statusLogin:!1,codempresa:"",codcliente:"",username:"",tipousuario:"",namelogo:""},getters:{},mutations:{setNamelogo(e,t){e.namelogo=t,localStorage.setItem(a,JSON.stringify(e))},setStatusLogin(e,t){e.statusLogin=t,localStorage.setItem(a,JSON.stringify(e))},setCodEmpresa(e,t){e.codempresa=t,localStorage.setItem(a,JSON.stringify(e))},setCodCliente(e,t){e.codcliente=t,localStorage.setItem(a,JSON.stringify(e))},setUsername(e,t){e.username=t,localStorage.setItem(a,JSON.stringify(e))},setTipousuario(e,t){e.tipousuario=t,localStorage.setItem(a,JSON.stringify(e))},initializeStateFromLocalStorage(e){const t=localStorage.getItem(a);t&&Object.assign(e,JSON.parse(t))}},actions:{initializeStateFromLocalStorage({commit:e}){e("initializeStateFromLocalStorage")}}})}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],a=e[l][1],r=e[l][2];for(var s=!0,u=0;u<o.length;u++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(s=!1,r<i&&(i=r));if(s){e.splice(l--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{17:"8a1e65bc",42:"de2dd44c",101:"99ae5fb1",161:"2a9319d5",362:"e0126af8",438:"bafb2c10",442:"71933037",451:"796fff8f",457:"73dd4223",473:"9d5a1ebc",560:"a0bb9fec",801:"3bbd0f39",849:"7ec7c027",887:"d16945f7"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{17:"86dd7dfb",42:"9d2acd83",101:"6adec1f7",362:"7aba0bc1",438:"2da5ba9f",442:"aba399ab",457:"3a2d126a",473:"13a80a3e",560:"54f2e2d8",801:"51da3330",849:"c9080213",887:"34ab29f5"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="login-vue:";n.l=function(o,a,r,i){if(e[o])e[o].push(a);else{var s,u;if(void 0!==r)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=o),e[o]=[a];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(n){if(r.onerror=r.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,r.parentNode&&r.parentNode.removeChild(r),a(u)}};return r.onerror=r.onload=i,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],r=a.getAttribute("data-href");if(r===e||r===t)return a}},o=function(o){return new Promise((function(a,r){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return a();e(o,s,null,a,r)}))},a={143:0};n.f.miniCss=function(e,t){var n={17:1,42:1,101:1,362:1,438:1,442:1,457:1,473:1,560:1,801:1,849:1,887:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var i=n.p+n.u(t),s=new Error,u=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,a[1](s)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],s=o[1],u=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(u)var l=u(n)}for(t&&t(o);c<i.length;c++)r=i[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(l)},o=self["webpackChunklogin_vue"]=self["webpackChunklogin_vue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9728)}));o=n.O(o)})();
//# sourceMappingURL=app.ce60da4d.js.map