(self["webpackChunklogin_vue"]=self["webpackChunklogin_vue"]||[]).push([[451],{6050:function(e,t,r){r(7658);var n={utf8:{stringToBytes:function(e){return n.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(n.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t},bytesToString:function(e){for(var t=[],r=0;r<e.length;r++)t.push(String.fromCharCode(e[r]));return t.join("")}}};e.exports=n},8258:function(e,t,r){r(7658),function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&r.rotl(e,8)|4278255360&r.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=r.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],r=0,n=0;r<e.length;r++,n+=8)t[n>>>5]|=e[r]<<24-n%32;return t},wordsToBytes:function(e){for(var t=[],r=0;r<32*e.length;r+=8)t.push(e[r>>>5]>>>24-r%32&255);return t},bytesToHex:function(e){for(var t=[],r=0;r<e.length;r++)t.push((e[r]>>>4).toString(16)),t.push((15&e[r]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(parseInt(e.substr(r,2),16));return t},bytesToBase64:function(e){for(var r=[],n=0;n<e.length;n+=3)for(var o=e[n]<<16|e[n+1]<<8|e[n+2],a=0;a<4;a++)8*n+6*a<=8*e.length?r.push(t.charAt(o>>>6*(3-a)&63)):r.push("=");return r.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],n=0,o=0;n<e.length;o=++n%4)0!=o&&r.push((t.indexOf(e.charAt(n-1))&Math.pow(2,-2*o+8)-1)<<2*o|t.indexOf(e.charAt(n))>>>6-2*o);return r}};e.exports=r}()},8566:function(e){function t(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&t(e.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(t(e)||r(e)||!!e._isBuffer)}},9564:function(e,t,r){r(3767),r(8585),r(8696),function(){var t=r(8258),n=r(6050).utf8,o=r(8566),a=r(6050).bin,i=function(e,r){e.constructor==String?e=r&&"binary"===r.encoding?a.stringToBytes(e):n.stringToBytes(e):o(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var s=t.bytesToWords(e),l=8*e.length,u=1732584193,c=-271733879,d=-1732584194,p=271733878,g=0;g<s.length;g++)s[g]=16711935&(s[g]<<8|s[g]>>>24)|4278255360&(s[g]<<24|s[g]>>>8);s[l>>>5]|=128<<l%32,s[14+(l+64>>>9<<4)]=l;var f=i._ff,m=i._gg,h=i._hh,v=i._ii;for(g=0;g<s.length;g+=16){var x=u,b=c,w=d,y=p;u=f(u,c,d,p,s[g+0],7,-680876936),p=f(p,u,c,d,s[g+1],12,-389564586),d=f(d,p,u,c,s[g+2],17,606105819),c=f(c,d,p,u,s[g+3],22,-1044525330),u=f(u,c,d,p,s[g+4],7,-176418897),p=f(p,u,c,d,s[g+5],12,1200080426),d=f(d,p,u,c,s[g+6],17,-1473231341),c=f(c,d,p,u,s[g+7],22,-45705983),u=f(u,c,d,p,s[g+8],7,1770035416),p=f(p,u,c,d,s[g+9],12,-1958414417),d=f(d,p,u,c,s[g+10],17,-42063),c=f(c,d,p,u,s[g+11],22,-1990404162),u=f(u,c,d,p,s[g+12],7,1804603682),p=f(p,u,c,d,s[g+13],12,-40341101),d=f(d,p,u,c,s[g+14],17,-1502002290),c=f(c,d,p,u,s[g+15],22,1236535329),u=m(u,c,d,p,s[g+1],5,-165796510),p=m(p,u,c,d,s[g+6],9,-1069501632),d=m(d,p,u,c,s[g+11],14,643717713),c=m(c,d,p,u,s[g+0],20,-373897302),u=m(u,c,d,p,s[g+5],5,-701558691),p=m(p,u,c,d,s[g+10],9,38016083),d=m(d,p,u,c,s[g+15],14,-660478335),c=m(c,d,p,u,s[g+4],20,-405537848),u=m(u,c,d,p,s[g+9],5,568446438),p=m(p,u,c,d,s[g+14],9,-1019803690),d=m(d,p,u,c,s[g+3],14,-187363961),c=m(c,d,p,u,s[g+8],20,1163531501),u=m(u,c,d,p,s[g+13],5,-1444681467),p=m(p,u,c,d,s[g+2],9,-51403784),d=m(d,p,u,c,s[g+7],14,1735328473),c=m(c,d,p,u,s[g+12],20,-1926607734),u=h(u,c,d,p,s[g+5],4,-378558),p=h(p,u,c,d,s[g+8],11,-2022574463),d=h(d,p,u,c,s[g+11],16,1839030562),c=h(c,d,p,u,s[g+14],23,-35309556),u=h(u,c,d,p,s[g+1],4,-1530992060),p=h(p,u,c,d,s[g+4],11,1272893353),d=h(d,p,u,c,s[g+7],16,-155497632),c=h(c,d,p,u,s[g+10],23,-1094730640),u=h(u,c,d,p,s[g+13],4,681279174),p=h(p,u,c,d,s[g+0],11,-358537222),d=h(d,p,u,c,s[g+3],16,-722521979),c=h(c,d,p,u,s[g+6],23,76029189),u=h(u,c,d,p,s[g+9],4,-640364487),p=h(p,u,c,d,s[g+12],11,-421815835),d=h(d,p,u,c,s[g+15],16,530742520),c=h(c,d,p,u,s[g+2],23,-995338651),u=v(u,c,d,p,s[g+0],6,-198630844),p=v(p,u,c,d,s[g+7],10,1126891415),d=v(d,p,u,c,s[g+14],15,-1416354905),c=v(c,d,p,u,s[g+5],21,-57434055),u=v(u,c,d,p,s[g+12],6,1700485571),p=v(p,u,c,d,s[g+3],10,-1894986606),d=v(d,p,u,c,s[g+10],15,-1051523),c=v(c,d,p,u,s[g+1],21,-2054922799),u=v(u,c,d,p,s[g+8],6,1873313359),p=v(p,u,c,d,s[g+15],10,-30611744),d=v(d,p,u,c,s[g+6],15,-1560198380),c=v(c,d,p,u,s[g+13],21,1309151649),u=v(u,c,d,p,s[g+4],6,-145523070),p=v(p,u,c,d,s[g+11],10,-1120210379),d=v(d,p,u,c,s[g+2],15,718787259),c=v(c,d,p,u,s[g+9],21,-343485551),u=u+x>>>0,c=c+b>>>0,d=d+w>>>0,p=p+y>>>0}return t.endian([u,c,d,p])};i._ff=function(e,t,r,n,o,a,i){var s=e+(t&r|~t&n)+(o>>>0)+i;return(s<<a|s>>>32-a)+t},i._gg=function(e,t,r,n,o,a,i){var s=e+(t&n|r&~n)+(o>>>0)+i;return(s<<a|s>>>32-a)+t},i._hh=function(e,t,r,n,o,a,i){var s=e+(t^r^n)+(o>>>0)+i;return(s<<a|s>>>32-a)+t},i._ii=function(e,t,r,n,o,a,i){var s=e+(r^(t|~n))+(o>>>0)+i;return(s<<a|s>>>32-a)+t},i._blocksize=16,i._digestsize=16,e.exports=function(e,r){if(void 0===e||null===e)throw new Error("Illegal argument "+e);var n=t.wordsToBytes(i(e,r));return r&&r.asBytes?n:r&&r.asString?a.bytesToString(n):t.bytesToHex(n)}}()},6236:function(e,t,r){"use strict";r.d(t,{Dr:function(){return i},I9:function(){return d},cs:function(){return a},hZ:function(){return l},ic:function(){return u},kK:function(){return c},oP:function(){return s}});var n=r(4161);const o="http://67.205.184.183:3000/api/";function a(e,t){return n.Z.get(`${o}usuarios/listar_clientes?tipousuario=${t}&codempresa=${e}`)}function i(e,t,r,a,i,s,l,u,c,d,p){return n.Z.post(`${o}usuarios/crear_usuarios`,{codempresa_cuenta:e,tipousuario:t,usuario:r,password:i,empresa:a,ubigeo:s,direccion:l,correo:u,telefono:c,domicilio_fiscal:d,ruc:p})}function s(e){return n.Z.get(`${o}usuarios/validar_unicos?usuario=${e}`)}function l(e,t){const r=new FormData;return console.log("enviara la imagen mediante http"),console.log(t),r.append("logoImage",e),r.append("codempresa",t),console.log(r),n.Z.post(`${o}usuarios/guardarLogo`,r,{headers:{"Content-Type":"multipart/form-data"}})}function u(e,t,r){return n.Z["delete"](`${o}usuarios/cuenta_eliminar`,{data:{idUsuario:e,idEmpresa:t,tipousuario:r}})}function c(e,t){return n.Z.get(`${o}usuarios/search?idUsuario=${e}&idEmpresa=${t}`)}function d(e,t,r,a,i,s,l,u,c,d,p){return n.Z.put(`${o}usuarios/edit`,{id_usuario:e,id_empresa:t,usuario:r,numero_documento:p,clave:i,nombre:a,ubigeo:s,direccion:l,correo_electronico:u,telefono:c,codigo_del_domicilio_fiscal:d})}},4229:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(3396),o=r(7139);const a={class:"fixed inset-0 flex items-center justify-center z-[9999]"},i=(0,n._)("div",{class:"absolute inset-0 bg-black opacity-30 pointer-events-none"},null,-1),s={class:"relative z-30 p-3 bg-white rounded-xl min-w-[350px] max-w-[450px]"},l=(0,n._)("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),u=(0,n._)("span",{class:"sr-only"},"Close modal",-1),c=[l,u],d={class:"p-6 text-center"},p=(0,n._)("svg",{"aria-hidden":"true",class:"mx-auto mb-3 w-14 h-14 text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})],-1),g={class:"mb-3 text-xl font-bold text-green-500"},f={class:"text-sm mb-5 text-gray-700"};function m(e,t,r,l,u,m){return(0,n.wg)(),(0,n.iD)("div",a,[i,(0,n._)("div",s,[(0,n._)("button",{type:"button",onClick:t[0]||(t[0]=(...e)=>l.closeModal&&l.closeModal(...e)),class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white","data-modal-hide":"popup-modal"},c),(0,n._)("div",d,[p,(0,n._)("h3",g,(0,o.zw)(r.title),1),(0,n._)("p",f,(0,o.zw)(r.mensaje),1),(0,n._)("button",{"data-modal-hide":"popup-modal",type:"button",onClick:t[1]||(t[1]=(...e)=>l.closeModal&&l.closeModal(...e)),class:"text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10 ease-in duration-300"}," Aceptar")])])])}var h={name:"ConfirmEdit",props:{title:String,mensaje:String},emits:["close-modal"],setup(e,{emit:t}){const r=()=>{t("close-modal")};return{closeModal:r}}},v=r(89);const x=(0,v.Z)(h,[["render",m]]);var b=x},8692:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(3396),o=r(7139);const a={for:""},i=["name","id","value","placeholder"];function s(e,t,r,s,l,u){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("label",a,(0,o.zw)(r.label),1),(0,n._)("input",{type:"text",name:r.name,id:r.id,value:r.value,class:"input-item w-full py-2 px-3 rounded-lg mt-2 border",onInput:t[0]||(t[0]=t=>e.$emit("value-input",t.target.value)),placeholder:r.placeholder},null,40,i)])}var l={props:{label:String,name:String,placeholder:String,value:String,id:String}},u=r(89);const c=(0,u.Z)(l,[["render",s],["__scopeId","data-v-26b88d80"]]);var d=c},4050:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(3396),o=r(7139);const a={class:"fixed inset-0 flex items-center justify-center z-[9999]"},i=(0,n._)("div",{class:"absolute inset-0 bg-black opacity-30 pointer-events-none"},null,-1),s={class:"relative z-30 p-4 bg-white rounded-xl lg:min-w-[350px] lg:max-w-[450px] min-w-[330px] max-w-[350px]"},l=(0,n._)("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),u=(0,n._)("span",{class:"sr-only"},"Close modal",-1),c=[l,u],d={class:"p-6 text-center"},p=(0,n._)("svg",{"aria-hidden":"true",class:"mx-auto mb-4 w-14 h-14 text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),g={class:"mb-5 text-lg font-normal text-gray-500"};function f(e,t,r,l,u,f){return(0,n.wg)(),(0,n.iD)("div",a,[i,(0,n._)("div",s,[(0,n._)("button",{type:"button",onClick:t[0]||(t[0]=(...e)=>l.cancelarEliminar&&l.cancelarEliminar(...e)),class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white","data-modal-hide":"popup-modal"},c),(0,n._)("div",d,[p,(0,n._)("h3",g,(0,o.zw)(r.pregunta),1),(0,n._)("button",{"data-modal-hide":"popup-modal",type:"button",onClick:t[1]||(t[1]=(...e)=>l.aceptarEliminar&&l.aceptarEliminar(...e)),class:"text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 ease-in duration-300"}," Si, eliminar "),(0,n._)("button",{"data-modal-hide":"popup-modal",type:"button",onClick:t[2]||(t[2]=(...e)=>l.cancelarEliminar&&l.cancelarEliminar(...e)),class:"text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10 ease-in duration-300"},"No, cancelar")])])])}var m={name:"ModalDelete",props:{pregunta:String},emits:["aceptar-eliminar","cancelar-eliminar"],setup(e,{emit:t}){const r=()=>{t("aceptar-eliminar")},n=()=>{t("cancelar-eliminar")};return{aceptarEliminar:r,cancelarEliminar:n}}},h=r(89);const v=(0,h.Z)(m,[["render",f]]);var x=v},1968:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(3396),o=r(7139);const a={class:"fixed inset-0 flex items-center justify-center z-[9999]"},i=(0,n._)("div",{class:"absolute inset-0 bg-black opacity-30 pointer-events-none"},null,-1),s={class:"relative z-30 p-3 bg-white rounded-xl min-w-[350px] max-w-[450px]"},l=(0,n._)("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),u=(0,n._)("span",{class:"sr-only"},"Close modal",-1),c=[l,u],d={class:"p-6 text-center"},p=(0,n._)("svg",{"aria-hidden":"true",class:"mx-auto mb-3 w-14 h-14 text-yellow-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),g={class:"mb-3 text-xl font-bold text-yellow-500"},f={class:"text-sm mb-5 text-gray-700"};function m(e,t,r,l,u,m){return(0,n.wg)(),(0,n.iD)("div",a,[i,(0,n._)("div",s,[(0,n._)("button",{type:"button",onClick:t[0]||(t[0]=(...e)=>l.closeModal&&l.closeModal(...e)),class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white","data-modal-hide":"popup-modal"},c),(0,n._)("div",d,[p,(0,n._)("h3",g,(0,o.zw)(r.title),1),(0,n._)("p",f,(0,o.zw)(r.mensaje),1),(0,n._)("button",{"data-modal-hide":"popup-modal",type:"button",onClick:t[1]||(t[1]=(...e)=>l.closeModal&&l.closeModal(...e)),class:"text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10 ease-in duration-300"}," Aceptar")])])])}var h={name:"ModalDelete",props:{title:String,mensaje:String},emits:["close-modal"],setup(e,{emit:t}){const r=()=>{t("close-modal")};return{closeModal:r}}},v=r(89);const x=(0,v.Z)(h,[["render",m]]);var b=x},3455:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(3396),o=r(7139),a=r(9242);const i={class:"py-1"},s={class:"relative"},l=["type","placeholder","value"],u={key:0,class:"fa-solid fa-eye"},c={key:1,class:"fa-solid fa-eye-slash"};function d(e,t,r,d,p,g){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("p",i,(0,o.zw)(r.texto),1),(0,n._)("div",s,[(0,n._)("input",{type:d.showPassword?"text":"password",name:"password",onInput:t[0]||(t[0]=e=>d.updateInputContent(e.target.value)),class:"w-full text-sm p-2 px-3 border rounded-lg focus:outline-none focus:border-blue-500",placeholder:r.placeholder,value:g.inputValue},null,40,l),(0,n._)("button",{onClick:t[1]||(t[1]=(0,a.iM)(((...e)=>d.togglePasswordVisibility&&d.togglePasswordVisibility(...e)),["prevent"])),class:"absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"},[d.showPassword?((0,n.wg)(),(0,n.iD)("i",u)):((0,n.wg)(),(0,n.iD)("i",c))])])],64)}var p=r(4870),g={props:{value:{type:String,required:!0},texto:String,valor:String,placeholder:String},setup(e,{emit:t}){const r=(0,p.iH)(!1),o=(0,p.iH)(""),a=()=>{r.value=!r.value},i=e=>{o.value=e,t("update-paswoord",e)};return(0,n.YP)((()=>e.valor),(t=>{o.value=""!==t?t:e.value})),{showPassword:r,inputContent:o,togglePasswordVisibility:a,updateInputContent:i}},computed:{inputValue(){return this.inputContent}}},f=r(89);const m=(0,f.Z)(g,[["render",d]]);var h=m}}]);
//# sourceMappingURL=451.bee8d804.js.map