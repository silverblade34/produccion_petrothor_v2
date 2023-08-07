(function(){"use strict";var e={9728:function(e,t,n){var o=n(9242),r=n(3396);const a={id:"app"};function i(e,t,n,o,i,s){const u=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(u)])}var s={name:"App"},u=n(89);const c=(0,u.Z)(s,[["render",i]]);var l=c,f=n(2483),d=n(4239);const m=(0,f.p7)({history:(0,f.PO)(),routes:[{meta:{title:"Home",requiresAuth:!0},path:"/",component:()=>n.e(273).then(n.bind(n,8420)),children:[{name:"dashboard",path:"",component:()=>Promise.all([n.e(161),n.e(775)]).then(n.bind(n,6775))},{name:"monitorearabastecimientos",path:"monitorearabastecimientos",component:()=>Promise.all([n.e(161),n.e(85)]).then(n.bind(n,3085))},{name:"reportes",path:"reportes",component:()=>Promise.all([n.e(161),n.e(467)]).then(n.bind(n,4467))},{name:"administrarcuentas",path:"cuentas",component:()=>Promise.all([n.e(161),n.e(451),n.e(332)]).then(n.bind(n,8069))},{name:"unidades",path:"unidades",component:()=>Promise.all([n.e(161),n.e(473)]).then(n.bind(n,5473))},{name:"clientes",path:"clientes",component:()=>Promise.all([n.e(161),n.e(801)]).then(n.bind(n,801))},{name:"conductores",path:"conductores",component:()=>Promise.all([n.e(161),n.e(451),n.e(754)]).then(n.bind(n,7494))},{name:"destinatarios",path:"destinatarios",component:()=>Promise.all([n.e(161),n.e(47)]).then(n.bind(n,8047))},{name:"facturaciones",path:"facturaciones",component:()=>Promise.all([n.e(161),n.e(17)]).then(n.bind(n,9017))},{name:"admincuentasmaestras",path:"admincuentasmaestras",component:()=>Promise.all([n.e(161),n.e(451),n.e(277)]).then(n.bind(n,4342))}]},{meta:{title:"Login"},path:"/login",name:"login",component:()=>Promise.all([n.e(161),n.e(697)]).then(n.bind(n,3932))}]});m.beforeEach(((e,t,n)=>{const o=e.matched.some((e=>e.meta.requiresAuth));o&&!d.Z.state.statusLogin?n({name:"login"}):"login"===e.name&&d.Z.state.statusLogin?n({name:"dashboard"}):"/"===e.path&&"0"==d.Z.state.tipousuario?n({name:"admincuentasmaestras"}):"/"===e.path&&"1"==d.Z.state.tipousuario?n({name:"administrarcuentas"}):n()}));var p=m;d.Z.dispatch("initializeStateFromLocalStorage");const h=(0,o.ri)(l);h.use(p).use(d.Z).mount("#app")},4239:function(e,t,n){var o=n(65);const r="myAppData";t.Z=(0,o.MT)({state:{statusLogin:!1,codempresa:"",codcliente:"",username:"",tipousuario:"",namelogo:""},getters:{},mutations:{setNamelogo(e,t){e.namelogo=t,localStorage.setItem(r,JSON.stringify(e))},setStatusLogin(e,t){e.statusLogin=t,localStorage.setItem(r,JSON.stringify(e))},setCodEmpresa(e,t){e.codempresa=t,localStorage.setItem(r,JSON.stringify(e))},setCodCliente(e,t){e.codcliente=t,localStorage.setItem(r,JSON.stringify(e))},setUsername(e,t){e.username=t,localStorage.setItem(r,JSON.stringify(e))},setTipousuario(e,t){e.tipousuario=t,localStorage.setItem(r,JSON.stringify(e))},initializeStateFromLocalStorage(e){const t=localStorage.getItem(r);t&&Object.assign(e,JSON.parse(t))}},actions:{initializeStateFromLocalStorage({commit:e}){e("initializeStateFromLocalStorage")}}})}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var s=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{17:"d4bb2dbd",47:"b557e364",85:"ee249ba0",161:"2a9319d5",273:"eab8e019",277:"c16faf28",332:"95e7764b",451:"bee8d804",467:"52a20785",473:"3ff1bafb",697:"09342153",754:"7c046868",775:"682e83f3",801:"5af3b115"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{17:"86dd7dfb",47:"6adec1f7",85:"34ab29f5",273:"2da5ba9f",277:"786097b3",332:"052b9dd8",467:"34ab29f5",473:"13a80a3e",697:"7ad507c1",754:"aba399ab",775:"6c8cce01",801:"51da3330"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="login-vue:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+a){s=f;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[r];var d=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,a.parentNode&&a.parentNode.removeChild(a),r(u)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return r();e(o,s,null,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={17:1,47:1,85:1,273:1,277:1,332:1,467:1,473:1,697:1,754:1,775:1,801:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),s=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],s=o[1],u=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var l=u(n)}for(t&&t(o);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},o=self["webpackChunklogin_vue"]=self["webpackChunklogin_vue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9728)}));o=n.O(o)})();
//# sourceMappingURL=app.6aff64da.js.map