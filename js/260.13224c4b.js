"use strict";(self["webpackChunklogin_vue"]=self["webpackChunklogin_vue"]||[]).push([[260],{7260:function(e,t,l){l.r(t),l.d(t,{default:function(){return ze}});var o=l(3396);const n={class:"w-full h-screen overflow-hidden block"},a={class:"w-full h-full flex overflow-hidden"},r={class:"w-full h-full overflow-hidden"},s={class:"main-container w-full h-[calc(100vh-50px)] overflow-y-scroll"};function i(e,t,l,i,u,c){const d=(0,o.up)("HeaderLayout"),p=(0,o.up)("SidebarLayout"),f=(0,o.up)("router-view"),g=(0,o.up)("NavMobile");return(0,o.wg)(),(0,o.iD)("main",n,[(0,o.Wm)(d,{class:"headerLayout",dataOpenSideBar:u.openSidebar,username:u.username,clickHambuger:c.toggleSidebar,logo:u.logoImage},null,8,["dataOpenSideBar","username","clickHambuger","logo"]),(0,o._)("div",a,[(0,o.Wm)(p,{class:"sidebarLayout",dataOpenSideBar:u.openSidebar},null,8,["dataOpenSideBar"]),(0,o._)("div",r,[(0,o._)("div",s,[(0,o.Wm)(f)])])]),(0,o.Wm)(g,{class:"nav-mobile"})])}var u=l(7139);const c=e=>((0,o.dD)("data-v-1ce7f482"),e=e(),(0,o.Cn)(),e),d={class:"px-[1rem] border-b"},p={class:"flex justify-between items-center h-[4rem]"},f={class:"h-full flex"},g={class:"cont-logo px-2"},m=["src"],v=c((()=>(0,o._)("i",{class:"fa-solid fa-bars"},null,-1))),b=[v],h={class:"flex items-center gap-2 lg:pr-5"},y={class:"font-medium text-sm dark:text-gray"},w=c((()=>(0,o._)("i",{class:"fa-solid fa-circle-user fa-xl"},null,-1))),k=c((()=>(0,o._)("i",{class:"fa-solid fa-ellipsis-vertical"},null,-1))),x=[k],S={key:1,class:"overlay"},_=c((()=>(0,o._)("span",{class:"loader"},null,-1))),D=[_];function O(e,t,l,n,a,r){const s=(0,o.up)("PopupSettings");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",d,[(0,o._)("div",p,[(0,o._)("div",f,[(0,o._)("div",g,[(0,o._)("img",{src:`http://67.205.184.183:3000/logos/${l.logo}`,alt:""},null,8,m)]),(0,o._)("div",{class:"icono-menu p-4 cursor-pointer h-full flex items-center hover:bg-gray-50",onClick:t[0]||(t[0]=(...e)=>l.clickHambuger&&l.clickHambuger(...e))},b)]),(0,o._)("div",h,[(0,o._)("div",y,[(0,o._)("div",null,(0,u.zw)(l.username),1)]),w,(0,o._)("div",{class:"rounded-full px-3 py-2 cursor-pointer hover:bg-gray-300",onClick:t[1]||(t[1]=(...e)=>r.togglePopup&&r.togglePopup(...e))},x)])])]),a.showPopup?((0,o.wg)(),(0,o.j4)(s,{key:0,class:"popup",onLogoutSesion:r.logout},null,8,["onLogoutSesion"])):(0,o.kq)("",!0),a.logoutProcessing?((0,o.wg)(),(0,o.iD)("div",S,D)):(0,o.kq)("",!0)],64)}const C={class:"min-w-[3rem] rounded-lg p-3"},P=(0,o._)("button",{class:"text-gray-700 py-2 px-2 text-xs rounded-lg w-full text-left hover:bg-gray-200"},[(0,o._)("i",{class:"fa-solid fa-user mr-2"}),(0,o.Uk)(" Perfil ")],-1),j=(0,o._)("i",{class:"fa-solid fa-right-from-bracket mr-2"},null,-1);function H(e,t,l,n,a,r){return(0,o.wg)(),(0,o.iD)("div",C,[P,(0,o._)("button",{class:"text-gray-700 py-2 px-2 text-xs rounded-lg w-full text-left hover:bg-gray-200",onClick:t[0]||(t[0]=(...e)=>n.logout&&n.logout(...e))},[j,(0,o.Uk)(" Cerrar sesión ")])])}var I={name:"PopupSettings",emits:["logout-sesion"],setup(e,{emit:t}){const l=()=>{t("logout-sesion")};return{logout:l}}},B=l(89);const E=(0,B.Z)(I,[["render",H]]);var W=E,L={props:{dataOpenSideBar:Boolean,clickHambuger:Function,username:String,logo:String},components:{PopupSettings:W},methods:{togglePopup(){this.showPopup=!this.showPopup},logout(){this.logoutProcessing=!0,localStorage.clear(),location.reload()}},data(){return{showPopup:!1,logoutProcessing:!1}}};const A=(0,B.Z)(L,[["render",O],["__scopeId","data-v-1ce7f482"]]);var Z=A,$=l(9242);const N={class:"sidebarComponent"},U={class:"nav"},T={class:"mt-auto mb-4 flex items-center justify-center p-2"},M=(0,o._)("i",{class:"fa-solid fa-right-from-bracket mr-2"},null,-1),R={key:0,class:"overflay"},z=(0,o._)("span",{class:"loader"},null,-1),F=[z];function J(e,t,l,n,a,r){const s=(0,o.up)("NavItem");return(0,o.wg)(),(0,o.iD)("div",N,[(0,o._)("div",{id:"side-bar",class:(0,u.C_)(["sidebar h-full flex flex-col text-sm pt-10 pb-16",1==l.dataOpenSideBar?"side-bar-visible":"side-bar-close"])},[(0,o._)("nav",U,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.navItems,(e=>((0,o.wg)(),(0,o.j4)(s,{class:"p-2 py-2",item:e,key:e.label,expandido:l.dataOpenSideBar},null,8,["item","expandido"])))),128))]),(0,o._)("div",T,[(0,o._)("button",{class:"btn-logout text-start text-white w-full py-3 px-4 rounded-lg",onClick:t[0]||(t[0]=(...e)=>r.logout&&r.logout(...e))},[M,(0,o.Uk)(),(0,o.wy)((0,o._)("span",null,"Logout",512),[[$.F8,l.dataOpenSideBar]])])])],2),a.logoutProcessing?((0,o.wg)(),(0,o.iD)("div",R,F)):(0,o.kq)("",!0)])}var K=l(4870),Y=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Y||{});function q(e,t,...l){if(e in t){let o=t[e];return"function"==typeof o?o(...l):o}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,q),o}l(7658);var G=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(G||{}),Q=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Q||{});function V({visible:e=!0,features:t=0,ourProps:l,theirProps:o,...n}){var a;let r=te(o,l),s=Object.assign(n,{props:r});if(e||2&t&&r.static)return X(s);if(1&t){let e=null==(a=r.unmount)||a?0:1;return q(e,{[0](){return null},[1](){return X({...n,props:{...r,hidden:!0,style:{display:"none"}}})}})}return X(s)}function X({props:e,attrs:t,slots:l,slot:n,name:a}){var r,s;let{as:i,...u}=le(e,["unmount","static"]),c=null==(r=l.default)?void 0:r.call(l,n),d={};if(n){let e=!1,t=[];for(let[l,o]of Object.entries(n))"boolean"==typeof o&&(e=!0),!0===o&&t.push(l);e&&(d["data-headlessui-state"]=t.join(" "))}if("template"===i){if(c=ee(null!=c?c:[]),Object.keys(u).length>0||Object.keys(t).length>0){let[e,...l]=null!=c?c:[];if(!oe(e)||l.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${a} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(u).concat(Object.keys(t)).map((e=>e.trim())).filter(((e,t,l)=>l.indexOf(e)===t)).sort(((e,t)=>e.localeCompare(t))).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let n=te(null!=(s=e.props)?s:{},u),r=(0,o.Ho)(e,n);for(let t in n)t.startsWith("on")&&(r.props||(r.props={}),r.props[t]=n[t]);return r}return Array.isArray(c)&&1===c.length?c[0]:c}return(0,o.h)(i,Object.assign({},u,d),{default:()=>c})}function ee(e){return e.flatMap((e=>e.type===o.HY?ee(e.children):[e]))}function te(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},l={};for(let o of e)for(let e in o)e.startsWith("on")&&"function"==typeof o[e]?(null!=l[e]||(l[e]=[]),l[e].push(o[e])):t[e]=o[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(l).map((e=>[e,void 0]))));for(let o in l)Object.assign(t,{[o](e,...t){let n=l[o];for(let l of n){if(e instanceof Event&&e.defaultPrevented)return;l(e,...t)}}});return t}function le(e,t=[]){let l=Object.assign({},e);for(let o of t)o in l&&delete l[o];return l}function oe(e){return null!=e&&("string"==typeof e.type||"object"==typeof e.type||"function"==typeof e.type)}let ne=0;function ae(){return++ne}function re(){return ae()}function se(e){var t;return null==e||null==e.value?null:null!=(t=e.value.$el)?t:e.value}let ie=Symbol("Context");var ue=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(ue||{});function ce(){return(0,o.f3)(ie,null)}function de(e){(0,o.JJ)(ie,e)}function pe(e,t){if(e)return e;let l=null!=t?t:"button";return"string"==typeof l&&"button"===l.toLowerCase()?"button":void 0}function fe(e,t){let l=(0,K.iH)(pe(e.value.type,e.value.as));return(0,o.bv)((()=>{l.value=pe(e.value.type,e.value.as)})),(0,o.m0)((()=>{var e;l.value||se(t)&&se(t)instanceof HTMLButtonElement&&(null==(e=se(t))||!e.hasAttribute("type"))&&(l.value="button")})),l}var ge=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ge||{});let me=Symbol("DisclosureContext");function ve(e){let t=(0,o.f3)(me,null);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ve),t}return t}let be=Symbol("DisclosurePanelContext");function he(){return(0,o.f3)(be,null)}let ye=(0,o.aZ)({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:t,attrs:l}){let n=(0,K.iH)(e.defaultOpen?0:1),a=(0,K.iH)(null),r=(0,K.iH)(null),s={buttonId:(0,K.iH)(null),panelId:(0,K.iH)(null),disclosureState:n,panel:a,button:r,toggleDisclosure(){n.value=q(n.value,{[0]:1,[1]:0})},closeDisclosure(){1!==n.value&&(n.value=1)},close(e){s.closeDisclosure();let t=(()=>e?e instanceof HTMLElement?e:e.value instanceof HTMLElement?se(e):se(s.button):se(s.button))();null==t||t.focus()}};return(0,o.JJ)(me,s),de((0,o.Fl)((()=>q(n.value,{[0]:ue.Open,[1]:ue.Closed})))),()=>{let{defaultOpen:o,...a}=e,r={open:0===n.value,close:s.close};return V({theirProps:a,ourProps:{},slot:r,slots:t,attrs:l,name:"Disclosure"})}}}),we=(0,o.aZ)({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-disclosure-button-${re()}`}},setup(e,{attrs:t,slots:l,expose:n}){let a=ve("DisclosureButton");(0,o.bv)((()=>{a.buttonId.value=e.id})),(0,o.Ah)((()=>{a.buttonId.value=null}));let r=he(),s=(0,o.Fl)((()=>null!==r&&r.value===a.panelId.value)),i=(0,K.iH)(null);n({el:i,$el:i}),s.value||(0,o.m0)((()=>{a.button.value=i.value}));let u=fe((0,o.Fl)((()=>({as:e.as,type:t.type}))),i);function c(){var t;e.disabled||(s.value?(a.toggleDisclosure(),null==(t=se(a.button))||t.focus()):a.toggleDisclosure())}function d(t){var l;if(!e.disabled)if(s.value)switch(t.key){case Y.Space:case Y.Enter:t.preventDefault(),t.stopPropagation(),a.toggleDisclosure(),null==(l=se(a.button))||l.focus();break}else switch(t.key){case Y.Space:case Y.Enter:t.preventDefault(),t.stopPropagation(),a.toggleDisclosure();break}}function p(e){switch(e.key){case Y.Space:e.preventDefault();break}}return()=>{let o={open:0===a.disclosureState.value},{id:n,...r}=e,f=s.value?{ref:i,type:u.value,onClick:c,onKeydown:d}:{id:n,ref:i,type:u.value,"aria-expanded":e.disabled?void 0:0===a.disclosureState.value,"aria-controls":se(a.panel)?a.panelId.value:void 0,disabled:!!e.disabled||void 0,onClick:c,onKeydown:d,onKeyup:p};return V({ourProps:f,theirProps:r,slot:o,attrs:t,slots:l,name:"DisclosureButton"})}}}),ke=(0,o.aZ)({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-disclosure-panel-${re()}`}},setup(e,{attrs:t,slots:l,expose:n}){let a=ve("DisclosurePanel");(0,o.bv)((()=>{a.panelId.value=e.id})),(0,o.Ah)((()=>{a.panelId.value=null})),n({el:a.panel,$el:a.panel}),(0,o.JJ)(be,a.panelId);let r=ce(),s=(0,o.Fl)((()=>null!==r?(r.value&ue.Open)===ue.Open:0===a.disclosureState.value));return()=>{let o={open:0===a.disclosureState.value,close:a.close},{id:n,...r}=e,i={id:n,ref:a.panel};return V({ourProps:i,theirProps:r,slot:o,attrs:t,slots:l,features:G.RenderStrategy|G.Static,visible:s.value,name:"DisclosurePanel"})}}});const xe={class:"label"},Se={class:"p-0 py-0"},_e={class:"flex-1 label"};var De={__name:"NavItem",props:{item:Object,expandido:Boolean},setup(e){return(t,l)=>{const n=(0,o.up)("router-link"),a=(0,o.up)("NavItem",!0);return e.item.children.length?((0,o.wg)(),(0,o.j4)((0,K.SU)(ye),{key:1},{default:(0,o.w5)((({open:t})=>[(0,o._)("span",Se,[(0,o.Wm)((0,K.SU)(we),{class:"button-link flex rounded-md text-left w-full items-center py-3 px-4 text-l font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-600"},{default:(0,o.w5)((()=>[(0,o._)("i",{class:(0,u.C_)(e.item.icon)},null,2),(0,o._)("span",_e,(0,u.zw)(e.item.label),1),(0,o._)("i",{class:(0,u.C_)([[t?"-rotate-180":""],"fa-solid fa-angle-down"])},null,2)])),_:2},1024),(0,o.Wm)((0,K.SU)(ke),{class:"text-gray-500 px-4"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.item.children,(e=>((0,o.wg)(),(0,o.j4)(a,{item:e,key:e.label},null,8,["item"])))),128))])),_:1})])])),_:1})):((0,o.wg)(),(0,o.j4)(n,{key:0,href:e.item.href,class:(0,u.C_)([{active:t.isCurrentPage},"button-link my-2 flex cursor-pointer w-full items-center py-3 px-4 text-l font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-600"]),to:e.item.to},{default:(0,o.w5)((()=>[(0,o._)("i",{class:(0,u.C_)(e.item.icon)},null,2),(0,o._)("span",xe,(0,u.zw)(e.item.label),1)])),_:1},8,["href","class","to"]))}}};const Oe=De;var Ce=Oe,Pe=l(4239),je={props:{dataOpenSideBar:Boolean},data(){return{logoutProcessing:!1}},methods:{logout(){this.logoutProcessing=!0,localStorage.clear(),location.reload()}},components:{NavItem:Ce},setup(){const e=(0,K.iH)([]);return"C000"==Pe.Z.state.codempresa&&1==Pe.Z.state.tipousuario?e.value=[{to:"/cuentas",label:"Cuentas",children:[],icon:"fa-solid fa-user mr-2"}]:e.value=[{to:"/",label:"Dashboard",children:[],icon:"fa-solid fa-chart-line mr-2 "},{to:"/reportes",label:"Reportes",children:[],icon:"fa-solid fa-chart-simple mr-2"},{to:"/unidades",label:"Cisternas",children:[],icon:"fa-solid fa-truck-field-un mr-2"},{to:"/clientes",label:"Clientes",children:[],icon:"fa-solid fa-users mr-2"},{to:"/destinatarios",label:"Destinatarios",children:[],icon:"fa-solid fa-map-location-dot mr-2"},{to:"/conductores",label:"Conductores",children:[],icon:"fa-solid fa-id-card mr-2"}],{navItems:e}}};const He=(0,B.Z)(je,[["render",J]]);var Ie=He;const Be={class:"fixed bottom-0 left-0 w-full bg-gray-200 border-t border-gray-300 z-[9900]"},Ee={class:"flex justify-center items-center py-1 gap-2"};function We(e,t,l,n,a,r){const s=(0,o.up)("NavItemMobile");return(0,o.wg)(),(0,o.iD)("div",Be,[(0,o._)("div",Ee,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.navItems,(e=>((0,o.wg)(),(0,o.j4)(s,{item:e,key:e.label},null,8,["item"])))),128))])])}function Le(e,t,l,n,a,r){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(s,{href:l.item.href,class:"button-link my-2 flex cursor-pointer items-center py-3 px-4 text-l font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-600",to:l.item.to},{default:(0,o.w5)((()=>[(0,o._)("i",{class:(0,u.C_)(l.item.icon)},null,2)])),_:1},8,["href","to"])}var Ae={name:"NavItemMobile",props:{item:Object}};const Ze=(0,B.Z)(Ae,[["render",Le]]);var $e=Ze,Ne={name:"NavMobile",components:{NavItemMobile:$e},setup(){const e=(0,K.iH)([]);return"C000"==Pe.Z.state.codempresa&&1==Pe.Z.state.tipousuario?e.value=[{to:"/cuentas",label:"Cuentas",children:[],icon:"fa-solid fa-user"}]:e.value=[{to:"/",label:"Dashboard",children:[],icon:"fa-solid fa-chart-line"},{to:"/reportes",label:"Reportes",children:[],icon:"fa-solid fa-chart-simple"},{to:"/unidades",label:"Cisternas",children:[],icon:"fa-solid fa-truck-field-un"},{to:"/clientes",label:"Clientes",children:[],icon:"fa-solid fa-users"},{to:"/destinatarios",label:"Destinatarios",children:[],icon:"fa-solid fa-map-location-dot mr-2"},{to:"/conductores",label:"Conductores",children:[],icon:"fa-solid fa-id-card"}],{navItems:e}}};const Ue=(0,B.Z)(Ne,[["render",We]]);var Te=Ue,Me={components:{HeaderLayout:Z,SidebarLayout:Ie,NavMobile:Te},data(){const e=this.$store.state.username,t=!0,l=Pe.Z.state.namelogo;return{username:e,openSidebar:t,logoImage:l}},mounted(){this.checkWindowWidth(),window.addEventListener("resize",this.checkWindowWidth)},unmounted(){window.removeEventListener("resize",this.checkWindowWidth)},methods:{toggleSidebar(){window.innerWidth>=1e3&&(this.openSidebar=!this.openSidebar)},checkWindowWidth(){window.innerWidth<1e3?this.openSidebar=!1:this.openSidebar=!0}}};const Re=(0,B.Z)(Me,[["render",i]]);var ze=Re}}]);
//# sourceMappingURL=260.13224c4b.js.map