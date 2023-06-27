"use strict";(self["webpackChunklogin_vue"]=self["webpackChunklogin_vue"]||[]).push([[774],{8692:function(e,a,o){o.d(a,{Z:function(){return c}});var t=o(3396),n=o(7139);const l={for:""},r=["name","id","value","placeholder"];function i(e,a,o,i,s,d){return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("label",l,(0,n.zw)(o.label),1),(0,t._)("input",{type:"text",name:o.name,id:o.id,value:o.value,class:"input-item w-full py-2 px-3 rounded-lg mt-2 border",onInput:a[0]||(a[0]=a=>e.$emit("value-input",a.target.value)),placeholder:o.placeholder},null,40,r)])}var s={props:{label:String,name:String,placeholder:String,value:String,id:String}},d=o(89);const u=(0,d.Z)(s,[["render",i],["__scopeId","data-v-26b88d80"]]);var c=u},649:function(e,a,o){o.d(a,{Z:function(){return b}});var t=o(3396),n=o(7139);const l={class:"fixed inset-0 flex items-center justify-center z-50"},r=(0,t._)("div",{class:"absolute inset-0 bg-black opacity-30 pointer-events-none"},null,-1),i={class:"relative z-30 p-4 bg-white rounded-xl min-w-[350px] max-w-[450px]"},s=(0,t._)("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[(0,t._)("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),d=(0,t._)("span",{class:"sr-only"},"Close modal",-1),u=[s,d],c={class:"p-6 text-center"},p=(0,t._)("svg",{"aria-hidden":"true",class:"mx-auto mb-4 w-14 h-14 text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,t._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),m={class:"mb-5 text-lg font-normal text-gray-500"};function v(e,a,o,s,d,v){return(0,t.wg)(),(0,t.iD)("div",l,[r,(0,t._)("div",i,[(0,t._)("button",{type:"button",onClick:a[0]||(a[0]=(...e)=>s.cancelarEliminar&&s.cancelarEliminar(...e)),class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white","data-modal-hide":"popup-modal"},u),(0,t._)("div",c,[p,(0,t._)("h3",m,(0,n.zw)(o.pregunta),1),(0,t._)("button",{"data-modal-hide":"popup-modal",type:"button",onClick:a[1]||(a[1]=(...e)=>s.aceptarEliminar&&s.aceptarEliminar(...e)),class:"text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 ease-in duration-300"}," Si, eliminar "),(0,t._)("button",{"data-modal-hide":"popup-modal",type:"button",onClick:a[2]||(a[2]=(...e)=>s.cancelarEliminar&&s.cancelarEliminar(...e)),class:"text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10 ease-in duration-300"},"No, cancelar")])])])}var g={name:"ModalDelete",props:{pregunta:String},emits:["aceptar-eliminar","cancelar-eliminar"],setup(e,{emit:a}){const o=()=>{a("aceptar-eliminar")},t=()=>{a("cancelar-eliminar")};return{aceptarEliminar:o,cancelarEliminar:t}}},x=o(89);const w=(0,x.Z)(g,[["render",v]]);var b=w},3455:function(e,a,o){o.d(a,{Z:function(){return x}});var t=o(3396),n=o(7139),l=o(9242);const r={class:"py-1"},i={class:"relative"},s=["type","placeholder","value"],d={key:0,class:"fa-solid fa-eye"},u={key:1,class:"fa-solid fa-eye-slash"};function c(e,a,o,c,p,m){return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("p",r,(0,n.zw)(o.texto),1),(0,t._)("div",i,[(0,t._)("input",{type:c.showPassword?"text":"password",name:"password",onInput:a[0]||(a[0]=e=>c.updateInputContent(e.target.value)),class:"w-full text-sm p-2 px-3 border rounded-lg focus:outline-none focus:border-blue-500",placeholder:o.placeholder,value:m.inputValue},null,40,s),(0,t._)("button",{onClick:a[1]||(a[1]=(0,l.iM)(((...e)=>c.togglePasswordVisibility&&c.togglePasswordVisibility(...e)),["prevent"])),class:"absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"},[c.showPassword?((0,t.wg)(),(0,t.iD)("i",d)):((0,t.wg)(),(0,t.iD)("i",u))])])],64)}var p=o(4870),m={props:{value:{type:String,required:!0},texto:String,valor:String,placeholder:String},setup(e,{emit:a}){const o=(0,p.iH)(!1),n=(0,p.iH)(""),l=()=>{o.value=!o.value},r=e=>{n.value=e,a("update-paswoord",e)};return(0,t.YP)((()=>e.valor),(a=>{n.value=""!==a?a:e.value})),{showPassword:o,inputContent:n,togglePasswordVisibility:l,updateInputContent:r}},computed:{inputValue(){return this.inputContent}}},v=o(89);const g=(0,v.Z)(m,[["render",c]]);var x=g},9143:function(e,a,o){o.r(a),o.d(a,{default:function(){return Me}});var t=o(3396),n=o(9242);const l=e=>((0,t.dD)("data-v-1b133742"),e=e(),(0,t.Cn)(),e),r={class:"min-h-full w-full pb-[5rem] lg:pb-[2rem]"},i={class:"mb-8 flex justify-between items-center"},s=l((()=>(0,t._)("h3",{class:"title-vista text-2xl font-semibold text-neutral-600"},"Administrar conductores",-1))),d={class:"overflow-x-auto shadow-md sm:rounded-lg"};function u(e,a,o,l,u,c){const p=(0,t.up)("TableConductores"),m=(0,t.up)("ModalCreate"),v=(0,t.up)("ModalDelete"),g=(0,t.up)("ModalEditar"),x=(0,t.up)("ModalError");return(0,t.wg)(),(0,t.iD)("section",r,[(0,t._)("div",i,[s,(0,t._)("button",{onClick:a[0]||(a[0]=(...e)=>l.openModal&&l.openModal(...e)),class:"py-2 px-3 rounded-xl bg-orange-400 text-white text-sm hover:bg-orange-500 transition duration-300"}," Crear nuevo ")]),(0,t._)("div",d,[(0,t.Wm)(p,{listConductores:l.listConductores,onEliminarConductor:l.eliminarConductor,onEditarConductor:l.editarConductor},null,8,["listConductores","onEliminarConductor","onEditarConductor"])]),(0,t.Wm)(n.uT,{name:"modal",mode:"out-in"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(m,{onCloseModal:l.closeModal,onSaveDatos:l.saveDatos},null,8,["onCloseModal","onSaveDatos"]),[[n.F8,l.openModalV]])])),_:1}),(0,t.Wm)(n.uT,{name:"modal",mode:"out-in"},{default:(0,t.w5)((()=>[l.confirmDelete?((0,t.wg)(),(0,t.j4)(v,{key:0,onAceptarEliminar:l.aceptarEliminar,onCancelarEliminar:l.cancelarEliminar,pregunta:"¿Estás seguro de eliminar a este conductor?"},null,8,["onAceptarEliminar","onCancelarEliminar"])):(0,t.kq)("",!0)])),_:1}),(0,t.Wm)(n.uT,{name:"modal",mode:"out-in"},{default:(0,t.w5)((()=>[l.openModalEdit?((0,t.wg)(),(0,t.j4)(g,{key:0,onAceptarEditar:l.aceptarEditar,onCancelarEditar:l.cancelarEditar,idUsuario:l.idUsuario,idConductor:l.idConductor},null,8,["onAceptarEditar","onCancelarEditar","idUsuario","idConductor"])):(0,t.kq)("",!0)])),_:1}),(0,t.Wm)(n.uT,{name:"modal",mode:"out-in"},{default:(0,t.w5)((()=>[l.openModalError?((0,t.wg)(),(0,t.j4)(x,{key:0,onCloseModal:l.closeModalError,title:"Advertencia",mensaje:"Se debe rellenar todos los campos al crear un conductor"},null,8,["onCloseModal"])):(0,t.kq)("",!0)])),_:1})])}var c=o(4870),p=o(4161);const m="http://67.205.184.183:3000/api/";function v(e){return p.Z.get(`${m}conductores/list?codempresa=${e}`)}function g(e,a){return p.Z.get(`${m}conductores/search?id_usuario=${e}&id_conductores=${a}`)}function x(e,a,o,t,n,l){return p.Z.post(`${m}conductores/create`,{numero_documento:e,apellidos_nombres:a,numero_licencia:o,codempresa:t,usuario:n,password:l})}function w(e,a){return p.Z["delete"](`${m}conductores/delete?id_usuario=${e}&id_conductores=${a}`)}function b(e,a,o,t,n,l,r){return p.Z.put(`${m}conductores/edit`,{id_usuario:e,id_conductores:a,numero_documento:o,apellidos_nombres:t,numero_licencia:n,usuario:l,clave:r})}var h=o(7139);const _={class:"w-full text-xs text-left text-gray-800"},f=(0,t._)("thead",{class:"text-xs text-gray-700 uppercase bg-gray-100"},[(0,t._)("tr",null,[(0,t._)("th",{scope:"col",class:"px-6 py-3"}," Usuario "),(0,t._)("th",{scope:"col",class:"px-6 py-3"}," Codempresa "),(0,t._)("th",{scope:"col",class:"px-6 py-3"}," DNI "),(0,t._)("th",{scope:"col",class:"px-6 py-3"}," Nombre y apellidos "),(0,t._)("th",{scope:"col",class:"px-6 py-3"}," Número de licencia "),(0,t._)("th",{scope:"col",class:"px-6 py-3"}," Acciones ")])],-1),y={key:0},C=(0,t._)("td",{class:"border px-4 py-4 text-xs text-center",colspan:"6"},"No se encontró ningún dato para esta tabla",-1),M=[C],k={class:"px-6 py-3"},E={class:"px-6 py-3"},I={class:"px-6 py-3"},D={scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap"},V={scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap"},z={class:"px-6 py-2 flex gap-2"},H=["onClick"],Z=["onClick"];function U(e,a,o,l,r,i){return(0,t.wg)(),(0,t.iD)("table",_,[f,(0,t._)("tbody",null,[0===o.listConductores.length?((0,t.wg)(),(0,t.iD)("tr",y,M)):((0,t.wg)(!0),(0,t.iD)(t.HY,{key:1},(0,t.Ko)(o.listConductores,(e=>((0,t.wg)(),(0,t.iD)("tr",{key:e.id_usuario,class:"bg-white border-b hover:bg-gray-50 ease-in duration-300"},[(0,t._)("td",k,(0,h.zw)(e.usuario),1),(0,t._)("td",E,(0,h.zw)(e.codempresa),1),(0,t._)("td",I,(0,h.zw)(e.numero_documento),1),(0,t._)("th",D,(0,h.zw)(e.apellidos_nombres),1),(0,t._)("th",V,(0,h.zw)(e.numero_licencia),1),(0,t._)("td",z,[(0,t._)("button",{class:"font-medium py-[0.5rem] px-3 rounded-lg bg-green-500 hover:bg-green-600 ease-in duration-300 text-white",onClick:(0,n.iM)((a=>i.editarConductor(e.id_usuario,e.id_conductores)),["prevent"])},"Editar",8,H),(0,t._)("button",{class:"font-medium py-[0.5rem] px-3 rounded-lg bg-red-500 hover:bg-red-600 ease-in duration-300 text-white",onClick:(0,n.iM)((a=>i.eliminarConductor(e.id_usuario,e.id_conductores)),["prevent"])},"Eliminar",8,Z)])])))),128))])])}var S={name:"TableConductores",props:{listConductores:Array},methods:{eliminarConductor(e,a){this.$emit("eliminar-conductor",{id_usuario:e,id_conductores:a})},editarConductor(e,a){this.$emit("editar-conductor",{id_usuario:e,id_conductores:a})}}},A=o(89);const P=(0,A.Z)(S,[["render",U]]);var W=P;const L={class:"fixed inset-0 flex items-center justify-center z-[9990]"},j=(0,t._)("div",{class:"absolute inset-0 bg-black opacity-30 pointer-events-none"},null,-1),$={class:"relative z-10 p-4 bg-white rounded-xl lg:min-w-[350px] lg:max-w-[450px] max-w-[340px] min-w-[330px]"},N={class:"p-2 text-gray-700 w-full h-full text-sm"},F=(0,t._)("h3",{class:"text-center font-bold text-lg"},"Crear conductor",-1),T={class:"btns flex gap-2 justify-center items-center pt-2"};function q(e,a,o,n,l,r){const i=(0,t.up)("ItemForm"),s=(0,t.up)("PasswordField");return(0,t.wg)(),(0,t.iD)("div",L,[j,(0,t._)("div",$,[(0,t._)("form",N,[F,(0,t.Wm)(i,{onValueInput:n.saveApellidos,label:"Apellidos y nombres",name:"apellidos_nombres",id:"apellidos_nombres",placeholder:"Inserte el nombre del conductor",value:""},null,8,["onValueInput"]),(0,t.Wm)(i,{onValueInput:n.saveDni,label:"DNI",name:"dni",id:"dni",placeholder:"Inserte el DNI del conductor",value:""},null,8,["onValueInput"]),(0,t.Wm)(i,{onValueInput:n.saveLicencia,label:"Número de licencia",name:"licencia",id:"licencia",placeholder:"Inserte el número de licencia"},null,8,["onValueInput"]),(0,t.Wm)(i,{onValueInput:n.saveUsuario,label:"Usuario",name:"usuario",id:"usuario",placeholder:"Inserte un usuario para el conductor"},null,8,["onValueInput"]),(0,t.Wm)(s,{onUpdatePaswoord:n.updatepassword,texto:"Contraseña",placeholder:"Ingrese una contraseña"},null,8,["onUpdatePaswoord"]),(0,t.Wm)(s,{onUpdatePaswoord:n.updatepasswordRepeat,texto:"Confirmar contraseña",placeholder:"Repita la contraseña"},null,8,["onUpdatePaswoord"]),""!==n.msgValidacion?((0,t.wg)(),(0,t.iD)("p",{key:0,class:(0,h.C_)({"text-green-500 text-xs":"Las contraseñas coinciden"===n.msgValidacion,"text-red-400 text-xs":"Las contraseñas no coinciden"===n.msgValidacion})},(0,h.zw)(n.msgValidacion),3)):(0,t.kq)("",!0)]),(0,t._)("div",T,[(0,t._)("button",{onClick:a[0]||(a[0]=(...e)=>n.closeModal&&n.closeModal(...e)),class:"bg-gray-400 hover:bg-gray-500 text-white text-sm p-2 px-8 rounded-xl transition duration-300"},"Cerrar"),(0,t._)("button",{onClick:a[1]||(a[1]=(...e)=>n.saveDatos&&n.saveDatos(...e)),class:"bg-blue-400 hover:bg-blue-500 text-white text-sm p-2 px-8 rounded-xl transition duration-300"},"Crear")])])])}var B=o(8692),R=o(3455),Y={name:"ModalCreate",components:{ItemForm:B.Z,PasswordField:R.Z},emits:["close-modal","save-datos"],setup(e,{emit:a}){const o=(0,c.iH)(""),t=(0,c.iH)(""),n=(0,c.iH)(""),l=(0,c.iH)(""),r=(0,c.iH)(""),i=(0,c.iH)(""),s=(0,c.iH)(""),d=()=>{a("close-modal")},u=()=>{a("save-datos",{apellidos:o.value,dni:t.value,licencia:n.value,usuarios:l.value,"contraseña":r.value})},p=e=>{o.value=e},m=e=>{t.value=e},v=e=>{n.value=e},g=e=>{l.value=e},x=e=>{r.value=e},w=e=>{s.value=e,b()},b=()=>{r.value===s.value?i.value="Las contraseñas coinciden":i.value="Las contraseñas no coinciden"};return{closeModal:d,saveDatos:u,saveApellidos:p,saveDni:m,saveLicencia:v,saveUsuario:g,updatepassword:x,msgValidacion:i,updatepasswordRepeat:w}}};const K=(0,A.Z)(Y,[["render",q]]);var G=K,J=o(649);const O={class:"fixed inset-0 flex items-center justify-center z-50"},Q=(0,t._)("div",{class:"absolute inset-0 bg-black opacity-30 pointer-events-none"},null,-1),X={class:"relative z-30 p-3 bg-white rounded-xl min-w-[350px] max-w-[450px]"},ee=(0,t._)("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[(0,t._)("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ae=(0,t._)("span",{class:"sr-only"},"Close modal",-1),oe=[ee,ae],te={class:"p-6 text-center"},ne=(0,t._)("svg",{"aria-hidden":"true",class:"mx-auto mb-3 w-14 h-14 text-yellow-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,t._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),le={class:"mb-3 text-xl font-bold text-yellow-500"},re={class:"text-sm mb-5 text-gray-700"};function ie(e,a,o,n,l,r){return(0,t.wg)(),(0,t.iD)("div",O,[Q,(0,t._)("div",X,[(0,t._)("button",{type:"button",onClick:a[0]||(a[0]=(...e)=>n.closeModal&&n.closeModal(...e)),class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white","data-modal-hide":"popup-modal"},oe),(0,t._)("div",te,[ne,(0,t._)("h3",le,(0,h.zw)(o.title),1),(0,t._)("p",re,(0,h.zw)(o.mensaje),1),(0,t._)("button",{"data-modal-hide":"popup-modal",type:"button",onClick:a[1]||(a[1]=(...e)=>n.closeModal&&n.closeModal(...e)),class:"text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10 ease-in duration-300"}," Aceptar")])])])}var se={name:"ModalDelete",props:{title:String,mensaje:String},emits:["close-modal"],setup(e,{emit:a}){const o=()=>{a("close-modal")};return{closeModal:o}}};const de=(0,A.Z)(se,[["render",ie]]);var ue=de;const ce={class:"fixed inset-0 flex items-center justify-center z-50"},pe=(0,t._)("div",{class:"absolute inset-0 bg-black opacity-30 pointer-events-none"},null,-1),me={class:"relative z-10 p-4 bg-white rounded-xl min-w-[350px] max-w-[450px]"},ve={class:"p-2 text-gray-700 w-full h-full text-sm"},ge=(0,t._)("h3",{class:"text-center font-bold text-lg"},"Editar conductor",-1),xe={class:"btns flex gap-2 justify-center items-center pt-2"};function we(e,a,o,n,l,r){const i=(0,t.up)("ItemForm"),s=(0,t.up)("PasswordField");return(0,t.wg)(),(0,t.iD)("div",ce,[pe,(0,t._)("div",me,[(0,t._)("form",ve,[ge,(0,t.Wm)(i,{onValueInput:n.saveApellidos,label:"Apellidos y nombres",name:"apellidos_nombres",id:"apellidos_nombres",placeholder:"Inserte el nombre del conductor",value:n.apellidos},null,8,["onValueInput","value"]),(0,t.Wm)(i,{onValueInput:n.saveDni,label:"DNI",name:"dni",id:"dni",placeholder:"Inserte el DNI del conductor",value:n.dni},null,8,["onValueInput","value"]),(0,t.Wm)(i,{onValueInput:n.saveLicencia,label:"Número de licencia",name:"licencia",id:"licencia",placeholder:"Inserte el número de licencia",value:n.licencia},null,8,["onValueInput","value"]),(0,t.Wm)(i,{onValueInput:n.saveUsuario,label:"Usuario",name:"usuario",id:"usuario",placeholder:"Inserte un usuario para el conductor",value:n.usuarios},null,8,["onValueInput","value"]),(0,t.Wm)(s,{onUpdatePaswoord:n.updatepassword,texto:"Contraseña",placeholder:"Ingrese una contraseña",valor:n.contraseña},null,8,["onUpdatePaswoord","valor"])]),(0,t._)("div",xe,[(0,t._)("button",{onClick:a[0]||(a[0]=(...e)=>n.closeModal&&n.closeModal(...e)),class:"bg-gray-400 hover:bg-gray-500 text-white text-sm p-2 px-8 rounded-xl transition duration-300"},"Cerrar"),(0,t._)("button",{onClick:a[1]||(a[1]=(...e)=>n.saveDatos&&n.saveDatos(...e)),class:"bg-blue-400 hover:bg-blue-500 text-white text-sm p-2 px-8 rounded-xl transition duration-300"},"Actualizar")])])])}var be={name:"ModalEditar",components:{ItemForm:B.Z,PasswordField:R.Z},props:{idUsuario:String,idConductor:String},emits:["cancelar-editar","aceptar-editar"],setup(e,{emit:a}){const o=(0,c.iH)(""),n=(0,c.iH)(""),l=(0,c.iH)(""),r=(0,c.iH)(""),i=(0,c.iH)(""),s=()=>{a("cancelar-editar")},d=e=>{o.value=e},u=e=>{n.value=e},p=e=>{l.value=e},m=e=>{r.value=e},v=e=>{i.value=e},x=()=>{a("aceptar-editar",{id_usuario:e.idUsuario,id_conductor:e.idConductor,apellidos:o.value,dni:n.value,licencia:l.value,usuarios:r.value,"contraseña":i.value})};return(0,t.bv)((()=>{g(e.idUsuario,e.idConductor).then((e=>{o.value=e.data.conductor.apellidos_nombres,n.value=e.data.conductor.numero_documento,l.value=e.data.conductor.numero_licencia,r.value=e.data.conductor.usuario,i.value=e.data.conductor.clave}))})),{closeModal:s,saveDatos:x,saveApellidos:d,saveDni:u,saveLicencia:p,saveUsuario:m,updatepassword:v,apellidos:o,dni:n,licencia:l,usuarios:r,"contraseña":i}}};const he=(0,A.Z)(be,[["render",we]]);var _e=he,fe=o(4239),ye={name:"AdminConductores",components:{TableConductores:W,ModalCreate:G,ModalDelete:J.Z,ModalEditar:_e,ModalError:ue},setup(){const e=(0,c.iH)(!1),a=(0,c.iH)(!1),o=(0,c.iH)(!1),n=(0,c.iH)([]),l=(0,c.iH)(!1),r=(0,c.iH)(""),i=(0,c.iH)(""),s=()=>{e.value=!0},d=()=>{e.value=!1},u=e=>{r.value=e.id_conductores,i.value=e.id_usuario,o.value=!0},p=()=>{w(i.value,r.value).then((e=>{console.log(e.data),o.value=!1,r.value="",i.value="",window.location.reload()})).catch((e=>{console.log(e)}))},m=()=>{r.value="",i.value="",o.value=!1},g=()=>{a.value=!1},h=e=>{r.value=e.id_conductores,i.value=e.id_usuario,a.value=!0},_=o=>{const t=o.id_usuario,n=o.id_conductor,r=o.apellidos,i=o.dni,s=o.licencia,d=o.usuarios,u=o.contraseña;""==r||""==i||""==s||""==d||""==u?(e.value=!1,l.value=!0):b(t,n,i,r,s,d,u).then((e=>{console.log(e.data),a.value=!1,window.location.reload()}))},f=a=>{const o=a.apellidos,t=a.dni,n=a.licencia,r=a.usuarios,i=a.contraseña;""==o||""==t||""==n||""==r||""==i?(e.value=!1,l.value=!0):x(t,o,n,fe.Z.state.codempresa,r,i).then((a=>{console.log(a.data),e.value=!1,window.location.reload()}))},y=()=>{l.value=!1};return(0,t.bv)((()=>{v(fe.Z.state.codempresa).then((e=>{n.value=e.data.conductores}))})),{listConductores:n,openModal:s,openModalV:e,closeModal:d,saveDatos:f,confirmDelete:o,eliminarConductor:u,aceptarEliminar:p,cancelarEliminar:m,cancelarEditar:g,editarConductor:h,openModalEdit:a,idConductor:r,idUsuario:i,aceptarEditar:_,openModalError:l,closeModalError:y}}};const Ce=(0,A.Z)(ye,[["render",u],["__scopeId","data-v-1b133742"]]);var Me=Ce}}]);
//# sourceMappingURL=774.e0658445.js.map