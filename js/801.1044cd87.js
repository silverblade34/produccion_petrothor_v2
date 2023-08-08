"use strict";(self["webpackChunklogin_vue"]=self["webpackChunklogin_vue"]||[]).push([[801],{8749:function(e,t,o){o.d(t,{Fi:function(){return n},GF:function(){return s},Gt:function(){return r},YK:function(){return i},tC:function(){return c}});var l=o(4161);const a="http://localhost:3000/api/";function n(e){return l.Z.get(`${a}clientes/list?codempresa=${e}`)}function i(e,t){return l.Z.post(`${a}clientes/create`,{codempresa:t,codcliente:e.codigoCliente,cliente:e.cliente,ruc:e.ruc,razon_social:e.razonSocial,ubigeo:e.ubigeo,direccion:e.direccion,correo_electronico:e.correo,telefono:e.telefono})}function r(e){return l.Z["delete"](`${a}clientes/delete?idCliente=${e}`)}function c(e){return l.Z.get(`${a}clientes/search?idCliente=${e}`)}function s(e,t){return l.Z.put(`${a}clientes/edit`,{id:e,cliente:t.cliente,ruc:t.ruc,razon_social:t.razonSocial,ubigeo:t.ubigeo,direccion:t.direccion,correo_electronico:t.correo,telefono:t.telefono})}},4229:function(e,t,o){o.d(t,{Z:function(){return h}});var l=o(3396),a=o(7139);const n={class:"fixed inset-0 flex items-center justify-center z-[9999]"},i=(0,l._)("div",{class:"absolute inset-0 bg-black opacity-30 pointer-events-none"},null,-1),r={class:"relative z-30 p-3 bg-white rounded-xl min-w-[350px] max-w-[450px]"},c=(0,l._)("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[(0,l._)("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),s=(0,l._)("span",{class:"sr-only"},"Close modal",-1),d=[c,s],u={class:"p-6 text-center"},p=(0,l._)("svg",{"aria-hidden":"true",class:"mx-auto mb-3 w-14 h-14 text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,l._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})],-1),m={class:"mb-3 text-xl font-bold text-green-500"},g={class:"text-sm mb-5 text-gray-700"};function v(e,t,o,c,s,v){return(0,l.wg)(),(0,l.iD)("div",n,[i,(0,l._)("div",r,[(0,l._)("button",{type:"button",onClick:t[0]||(t[0]=(...e)=>c.closeModal&&c.closeModal(...e)),class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white","data-modal-hide":"popup-modal"},d),(0,l._)("div",u,[p,(0,l._)("h3",m,(0,a.zw)(o.title),1),(0,l._)("p",g,(0,a.zw)(o.mensaje),1),(0,l._)("button",{"data-modal-hide":"popup-modal",type:"button",onClick:t[1]||(t[1]=(...e)=>c.closeModal&&c.closeModal(...e)),class:"text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10 ease-in duration-300"}," Aceptar")])])])}var b={name:"ConfirmEdit",props:{title:String,mensaje:String},emits:["close-modal"],setup(e,{emit:t}){const o=()=>{t("close-modal")};return{closeModal:o}}},x=o(89);const f=(0,x.Z)(b,[["render",v]]);var h=f},8692:function(e,t,o){o.d(t,{Z:function(){return u}});var l=o(3396),a=o(7139);const n={for:""},i=["name","id","value","placeholder"];function r(e,t,o,r,c,s){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("label",n,(0,a.zw)(o.label),1),(0,l._)("input",{type:"text",name:o.name,id:o.id,value:o.value,class:"input-item w-full py-2 px-3 rounded-lg mt-2 border",onInput:t[0]||(t[0]=t=>e.$emit("value-input",t.target.value)),placeholder:o.placeholder},null,40,i)])}var c={props:{label:String,name:String,placeholder:String,value:String,id:String}},s=o(89);const d=(0,s.Z)(c,[["render",r],["__scopeId","data-v-26b88d80"]]);var u=d},4050:function(e,t,o){o.d(t,{Z:function(){return f}});var l=o(3396),a=o(7139);const n={class:"fixed inset-0 flex items-center justify-center z-[9999]"},i=(0,l._)("div",{class:"absolute inset-0 bg-black opacity-30 pointer-events-none"},null,-1),r={class:"relative z-30 p-4 bg-white rounded-xl lg:min-w-[350px] lg:max-w-[450px] min-w-[330px] max-w-[350px]"},c=(0,l._)("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[(0,l._)("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),s=(0,l._)("span",{class:"sr-only"},"Close modal",-1),d=[c,s],u={class:"p-6 text-center"},p=(0,l._)("svg",{"aria-hidden":"true",class:"mx-auto mb-4 w-14 h-14 text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,l._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),m={class:"mb-5 text-lg font-normal text-gray-500"};function g(e,t,o,c,s,g){return(0,l.wg)(),(0,l.iD)("div",n,[i,(0,l._)("div",r,[(0,l._)("button",{type:"button",onClick:t[0]||(t[0]=(...e)=>c.cancelarEliminar&&c.cancelarEliminar(...e)),class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white","data-modal-hide":"popup-modal"},d),(0,l._)("div",u,[p,(0,l._)("h3",m,(0,a.zw)(o.pregunta),1),(0,l._)("button",{"data-modal-hide":"popup-modal",type:"button",onClick:t[1]||(t[1]=(...e)=>c.aceptarEliminar&&c.aceptarEliminar(...e)),class:"text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 ease-in duration-300"}," Si, eliminar "),(0,l._)("button",{"data-modal-hide":"popup-modal",type:"button",onClick:t[2]||(t[2]=(...e)=>c.cancelarEliminar&&c.cancelarEliminar(...e)),class:"text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10 ease-in duration-300"},"No, cancelar")])])])}var v={name:"ModalDelete",props:{pregunta:String},emits:["aceptar-eliminar","cancelar-eliminar"],setup(e,{emit:t}){const o=()=>{t("aceptar-eliminar")},l=()=>{t("cancelar-eliminar")};return{aceptarEliminar:o,cancelarEliminar:l}}},b=o(89);const x=(0,b.Z)(v,[["render",g]]);var f=x},1968:function(e,t,o){o.d(t,{Z:function(){return h}});var l=o(3396),a=o(7139);const n={class:"fixed inset-0 flex items-center justify-center z-[9999]"},i=(0,l._)("div",{class:"absolute inset-0 bg-black opacity-30 pointer-events-none"},null,-1),r={class:"relative z-30 p-3 bg-white rounded-xl min-w-[350px] max-w-[450px]"},c=(0,l._)("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[(0,l._)("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),s=(0,l._)("span",{class:"sr-only"},"Close modal",-1),d=[c,s],u={class:"p-6 text-center"},p=(0,l._)("svg",{"aria-hidden":"true",class:"mx-auto mb-3 w-14 h-14 text-yellow-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,l._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),m={class:"mb-3 text-xl font-bold text-yellow-500"},g={class:"text-sm mb-5 text-gray-700"};function v(e,t,o,c,s,v){return(0,l.wg)(),(0,l.iD)("div",n,[i,(0,l._)("div",r,[(0,l._)("button",{type:"button",onClick:t[0]||(t[0]=(...e)=>c.closeModal&&c.closeModal(...e)),class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white","data-modal-hide":"popup-modal"},d),(0,l._)("div",u,[p,(0,l._)("h3",m,(0,a.zw)(o.title),1),(0,l._)("p",g,(0,a.zw)(o.mensaje),1),(0,l._)("button",{"data-modal-hide":"popup-modal",type:"button",onClick:t[1]||(t[1]=(...e)=>c.closeModal&&c.closeModal(...e)),class:"text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10 ease-in duration-300"}," Aceptar")])])])}var b={name:"ModalDelete",props:{title:String,mensaje:String},emits:["close-modal"],setup(e,{emit:t}){const o=()=>{t("close-modal")};return{closeModal:o}}},x=o(89);const f=(0,x.Z)(b,[["render",v]]);var h=f},801:function(e,t,o){o.r(t),o.d(t,{default:function(){return ye}});var l=o(3396),a=o(9242);const n=e=>((0,l.dD)("data-v-10fc2fec"),e=e(),(0,l.Cn)(),e),i={class:"min-h-full w-full pb-[5rem] lg:pb-[2rem]"},r={class:"mb-8 flex justify-between items-center"},c=n((()=>(0,l._)("h3",{class:"title-vista text-2xl font-semibold text-neutral-600"},"Administrar clientes",-1))),s={class:"overflow-x-auto shadow-md sm:rounded-lg"};function d(e,t,o,n,d,u){const p=(0,l.up)("TableClientes"),m=(0,l.up)("ModalCreate"),g=(0,l.up)("ModalDelete"),v=(0,l.up)("ModalEditar"),b=(0,l.up)("ModalError"),x=(0,l.up)("ConfirmEdit");return(0,l.wg)(),(0,l.iD)("section",i,[(0,l._)("div",r,[c,(0,l._)("button",{onClick:t[0]||(t[0]=(...e)=>n.openModal&&n.openModal(...e)),class:"py-2 px-3 rounded-xl bg-orange-400 text-white text-sm hover:bg-orange-500 transition duration-300"}," Crear clientes ")]),(0,l._)("div",s,[(0,l.Wm)(p,{listClientes:n.listClientes,onEliminarCliente:n.eliminarCliente,onEditarCliente:n.editarCliente},null,8,["listClientes","onEliminarCliente","onEditarCliente"])]),(0,l.Wm)(a.uT,{name:"modal",mode:"out-in"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(m,{onCloseModal:n.closeModal,onSaveDatos:n.saveDatos},null,8,["onCloseModal","onSaveDatos"]),[[a.F8,n.openModalV]])])),_:1}),(0,l.Wm)(a.uT,{name:"modal",mode:"out-in"},{default:(0,l.w5)((()=>[n.confirmDelete?((0,l.wg)(),(0,l.j4)(g,{key:0,onAceptarEliminar:n.aceptarEliminar,onCancelarEliminar:n.cancelarEliminar,pregunta:"¿Estás seguro de eliminar a este cliente?"},null,8,["onAceptarEliminar","onCancelarEliminar"])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(a.uT,{name:"modal",mode:"out-in"},{default:(0,l.w5)((()=>[n.openModalEdit?((0,l.wg)(),(0,l.j4)(v,{key:0,onAceptarEditar:n.aceptarEditar,onCancelarEditar:n.cancelarEditar,idCliente:n.idCliente},null,8,["onAceptarEditar","onCancelarEditar","idCliente"])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(a.uT,{name:"modal",mode:"out-in"},{default:(0,l.w5)((()=>[n.openModalError?((0,l.wg)(),(0,l.j4)(b,{key:0,title:"Advertencia",mensaje:"Se debe rellenar todos los campos",onCloseModal:n.closeModalError},null,8,["onCloseModal"])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(a.uT,{name:"modal",mode:"out-in"},{default:(0,l.w5)((()=>[n.openSuccessEdit?((0,l.wg)(),(0,l.j4)(x,{key:0,title:"Logrado",mensaje:"Se ha editado correctamente",onCloseModal:n.closeSuccessEdit},null,8,["onCloseModal"])):(0,l.kq)("",!0)])),_:1})])}var u=o(4870),p=o(8749),m=o(7139);const g={class:"w-full text-xs text-left text-gray-800"},v=(0,l._)("thead",{class:"text-xs text-gray-700 uppercase bg-gray-100"},[(0,l._)("tr",null,[(0,l._)("th",{scope:"col",class:"px-6 py-3"}," Cliente "),(0,l._)("th",{scope:"col",class:"px-6 py-3"}," RUC "),(0,l._)("th",{scope:"col",class:"px-6 py-3"}," Razón social "),(0,l._)("th",{scope:"col",class:"px-6 py-3"}," Codigo cliente "),(0,l._)("th",{scope:"col",class:"px-6 py-3"}," Teléfono "),(0,l._)("th",{scope:"col",class:"px-6 py-3"}," Dirección "),(0,l._)("th",{scope:"col",class:"px-6 py-3"}," Correo "),(0,l._)("th",{scope:"col",class:"px-6 py-3"}," Acciones ")])],-1),b={key:0},x=(0,l._)("td",{class:"border px-4 py-4 text-xs text-center",colspan:"8"},"No se encontró ningún dato para esta tabla",-1),f=[x],h={class:"px-6 py-3"},w={class:"px-6 py-3"},C={class:"px-6 py-3"},_={scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap"},y={class:"px-6 py-3"},M={class:"px-6 py-3"},k={scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap"},z={class:"px-6 py-2 flex items-center h-full gap-2"},E=["onClick"],D=["onClick"];function I(e,t,o,n,i,r){return(0,l.wg)(),(0,l.iD)("table",g,[v,(0,l._)("tbody",null,[0===o.listClientes.length?((0,l.wg)(),(0,l.iD)("tr",b,f)):((0,l.wg)(!0),(0,l.iD)(l.HY,{key:1},(0,l.Ko)(o.listClientes,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id,class:"bg-white border-b hover:bg-gray-50 ease-in duration-300"},[(0,l._)("td",h,(0,m.zw)(e.cliente),1),(0,l._)("td",w,(0,m.zw)(e.ruc),1),(0,l._)("td",C,(0,m.zw)(e.razon_social),1),(0,l._)("th",_,(0,m.zw)(e.codcliente),1),(0,l._)("td",y,(0,m.zw)(e.telefono),1),(0,l._)("td",M,(0,m.zw)(e.direccion),1),(0,l._)("th",k,(0,m.zw)(e.correo_electronico),1),(0,l._)("td",z,[(0,l._)("button",{class:"font-medium py-[0.5rem] px-3 rounded-lg bg-green-500 hover:bg-green-600 ease-in duration-300 text-white",onClick:(0,a.iM)((t=>r.editarCliente(e.id)),["prevent"])},"Editar",8,E),(0,l._)("button",{class:"font-medium py-[0.5rem] px-3 rounded-lg bg-red-500 hover:bg-red-600 ease-in duration-300 text-white",onClick:(0,a.iM)((t=>r.eliminarCliente(e.id)),["prevent"])},"Eliminar",8,D)])])))),128))])])}var V={name:"TableClientes",props:{listClientes:Array},methods:{eliminarCliente(e){this.$emit("eliminar-cliente",e)},editarCliente(e){this.$emit("editar-cliente",e)}}},U=o(89);const H=(0,U.Z)(V,[["render",I]]);var S=H;const j={class:"fixed inset-0 flex items-center justify-center z-[9999]"},Z=(0,l._)("div",{class:"absolute inset-0 bg-black opacity-30 pointer-events-none"},null,-1),W={class:"relative z-10 p-4 bg-white rounded-xl lg:min-w-[350px] lg:max-w-[450px] min-w-[330px] max-w-[350px]"},R={class:"p-2 text-gray-700 w-full h-full text-sm"},T=(0,l._)("h3",{class:"text-center font-bold text-lg"},"Crear cliente",-1),L={class:"dropdown"},A=(0,l._)("span",null,"Datos ubicación",-1),$=(0,l._)("i",{class:"fa-solid fa-angle-down"},null,-1),F=[A,$],B={class:"dropdown"},q=(0,l._)("span",null,"Datos contacto",-1),G=(0,l._)("i",{class:"fa-solid fa-angle-down"},null,-1),N=[q,G],K={class:"btns flex gap-2 justify-center items-center pt-2"};function Y(e,t,o,n,i,r){const c=(0,l.up)("ItemForm");return(0,l.wg)(),(0,l.iD)("div",j,[Z,(0,l._)("div",W,[(0,l._)("form",R,[T,(0,l.Wm)(c,{onValueInput:n.saveCliente,label:"Cliente",name:"cliente",placeholder:"Nombre del cliente",value:""},null,8,["onValueInput"]),(0,l.Wm)(c,{onValueInput:n.saveRuc,label:"RUC",name:"ruc",placeholder:"Ruc del cliente",value:""},null,8,["onValueInput"]),(0,l.Wm)(c,{onValueInput:n.saveRazonsocial,label:"Razón social",name:"razon_social",placeholder:"Razón social del cliente"},null,8,["onValueInput"]),(0,l.Wm)(c,{onValueInput:n.saveCodigoCliente,label:"Codigo de cliente",name:"codigo_cliente",placeholder:"Codigo del cliente"},null,8,["onValueInput"]),(0,l._)("div",L,[(0,l._)("button",{class:(0,m.C_)(["dropdown-toggle bg-orange-400 flex justify-between items-center w-full rounded-lg text-white px-5 py-2 mt-2",{"bg-orange-500":n.mostrarUbicacion}]),onClick:t[0]||(t[0]=(0,a.iM)(((...e)=>n.toggleUbicacion&&n.toggleUbicacion(...e)),["prevent"]))},F,2),(0,l._)("div",{class:(0,m.C_)(["dropdown-menu mx-2 px-2 py-3 rounded-md bg-slate-200 transition-max-height duration-300",{"max-h-[500px]":n.mostrarUbicacion,"max-h-0":!n.mostrarUbicacion,"overflow-hidden":!n.mostrarUbicacion,"pt-0 pb-0":!n.mostrarUbicacion}])},[(0,l.Wm)(c,{onValueInput:n.saveDireccion,label:"Dirección",name:"direccion",placeholder:"Dirección del cliente"},null,8,["onValueInput"]),(0,l.Wm)(c,{onValueInput:n.saveUbigeo,label:"Ubigeo",name:"ubigeo",placeholder:"Ubigeo del cliente"},null,8,["onValueInput"])],2)]),(0,l._)("div",B,[(0,l._)("button",{class:(0,m.C_)(["dropdown-toggle bg-orange-400 flex justify-between items-center w-full rounded-lg text-white px-5 py-2 mt-2",{"bg-orange-500":n.mostrarContacto}]),onClick:t[1]||(t[1]=(0,a.iM)(((...e)=>n.toggleContacto&&n.toggleContacto(...e)),["prevent"]))},N,2),(0,l._)("div",{class:(0,m.C_)(["dropdown-menu mx-2 px-2 py-3 rounded-md bg-slate-200 transition-max-height duration-300",{"max-h-[500px]":n.mostrarContacto,"max-h-0":!n.mostrarContacto,"overflow-hidden":!n.mostrarContacto,"pt-0 pb-0":!n.mostrarContacto}])},[(0,l.Wm)(c,{onValueInput:n.saveCorreo,label:"Correo",name:"correo",placeholder:"Correo del cliente"},null,8,["onValueInput"]),(0,l.Wm)(c,{onValueInput:n.saveTelefono,label:"Teléfono",name:"telefono",placeholder:"Teléfono del cliente"},null,8,["onValueInput"])],2)])]),(0,l._)("div",K,[(0,l._)("button",{onClick:t[2]||(t[2]=(...e)=>n.closeModal&&n.closeModal(...e)),class:"bg-gray-400 hover:bg-gray-500 text-white text-sm p-2 px-8 rounded-xl transition duration-300"},"Cerrar"),(0,l._)("button",{onClick:t[3]||(t[3]=(...e)=>n.saveDatos&&n.saveDatos(...e)),class:"bg-blue-400 hover:bg-blue-500 text-white text-sm p-2 px-8 rounded-xl transition duration-300"},"Crear")])])])}var J=o(8692),O={name:"ModalCreate",components:{ItemForm:J.Z},emits:["close-modal","save-datos"],setup(e,{emit:t}){const o=(0,u.iH)(""),l=(0,u.iH)(""),a=(0,u.iH)(""),n=(0,u.iH)(""),i=(0,u.iH)(""),r=(0,u.iH)(""),c=(0,u.iH)(""),s=(0,u.iH)(""),d=(0,u.iH)(!1),p=(0,u.iH)(!1),m=()=>{d.value=!d.value},g=()=>{p.value=!p.value},v=()=>{t("close-modal")},b=e=>{o.value=e},x=e=>{l.value=e},f=e=>{a.value=e},h=e=>{n.value=e},w=e=>{i.value=e},C=e=>{s.value=e},_=e=>{r.value=e},y=e=>{c.value=e},M=()=>{t("save-datos",{cliente:o.value,ruc:l.value,razonSocial:a.value,codigoCliente:n.value,direccion:i.value,ubigeo:s.value,correo:r.value,telefono:c.value})};return{closeModal:v,saveCliente:b,saveRuc:x,toggleUbicacion:m,toggleContacto:g,mostrarUbicacion:d,mostrarContacto:p,saveRazonsocial:f,saveCodigoCliente:h,saveDireccion:w,saveCorreo:_,saveTelefono:y,saveUbigeo:C,saveDatos:M}}};const P=(0,U.Z)(O,[["render",Y]]);var Q=P,X=o(1968),ee=o(4050),te=o(4229);const oe={class:"fixed inset-0 flex items-center justify-center z-[9999]"},le=(0,l._)("div",{class:"absolute inset-0 bg-black opacity-30 pointer-events-none"},null,-1),ae={class:"relative z-10 p-4 bg-white rounded-xl lg:min-w-[350px] lg:max-w-[450px] min-w-[330px] max-w-[350px]"},ne={class:"p-2 text-gray-700 w-full h-full text-sm"},ie=(0,l._)("h3",{class:"text-center font-bold text-lg"},"Editar cliente",-1),re={class:"dropdown"},ce=(0,l._)("span",null,"Datos ubicación",-1),se=(0,l._)("i",{class:"fa-solid fa-angle-down"},null,-1),de=[ce,se],ue={class:"dropdown"},pe=(0,l._)("span",null,"Datos contacto",-1),me=(0,l._)("i",{class:"fa-solid fa-angle-down"},null,-1),ge=[pe,me],ve={class:"btns flex gap-2 justify-center items-center pt-2"};function be(e,t,o,n,i,r){const c=(0,l.up)("ItemForm");return(0,l.wg)(),(0,l.iD)("div",oe,[le,(0,l._)("div",ae,[(0,l._)("form",ne,[ie,(0,l.Wm)(c,{onValueInput:n.saveCliente,label:"Cliente",name:"cliente",placeholder:"Nombre del cliente",value:n.cliente},null,8,["onValueInput","value"]),(0,l.Wm)(c,{onValueInput:n.saveRuc,label:"RUC",name:"ruc",placeholder:"Ruc del cliente",value:n.ruc},null,8,["onValueInput","value"]),(0,l.Wm)(c,{onValueInput:n.saveRazonsocial,label:"Razón social",name:"razon_social",placeholder:"Razón social del cliente",value:n.razonSocial},null,8,["onValueInput","value"]),(0,l.Wm)(c,{onValueInput:n.saveCodigoCliente,label:"Codigo de cliente",name:"codigo_cliente",placeholder:"Codigo del cliente",value:n.codigoCliente},null,8,["onValueInput","value"]),(0,l._)("div",re,[(0,l._)("button",{class:(0,m.C_)(["dropdown-toggle bg-orange-400 flex justify-between items-center w-full rounded-lg text-white px-5 py-2 mt-2",{"bg-orange-500":n.mostrarUbicacion}]),onClick:t[0]||(t[0]=(0,a.iM)(((...e)=>n.toggleUbicacion&&n.toggleUbicacion(...e)),["prevent"]))},de,2),(0,l._)("div",{class:(0,m.C_)(["dropdown-menu mx-2 px-2 py-3 rounded-md bg-slate-200 transition-max-height duration-300",{"max-h-[500px]":n.mostrarUbicacion,"max-h-0":!n.mostrarUbicacion,"overflow-hidden":!n.mostrarUbicacion,"pt-0 pb-0":!n.mostrarUbicacion}])},[(0,l.Wm)(c,{onValueInput:n.saveDireccion,label:"Dirección",name:"direccion",placeholder:"Dirección del cliente",value:n.direccion},null,8,["onValueInput","value"]),(0,l.Wm)(c,{onValueInput:n.saveUbigeo,label:"Ubigeo",name:"ubigeo",placeholder:"Ubigeo del cliente",value:n.ubigeo},null,8,["onValueInput","value"])],2)]),(0,l._)("div",ue,[(0,l._)("button",{class:(0,m.C_)(["dropdown-toggle bg-orange-400 flex justify-between items-center w-full rounded-lg text-white px-5 py-2 mt-2",{"bg-orange-500":n.mostrarContacto}]),onClick:t[1]||(t[1]=(0,a.iM)(((...e)=>n.toggleContacto&&n.toggleContacto(...e)),["prevent"]))},ge,2),(0,l._)("div",{class:(0,m.C_)(["dropdown-menu mx-2 px-2 py-3 rounded-md bg-slate-200 transition-max-height duration-300",{"max-h-[500px]":n.mostrarContacto,"max-h-0":!n.mostrarContacto,"overflow-hidden":!n.mostrarContacto,"pt-0 pb-0":!n.mostrarContacto}])},[(0,l.Wm)(c,{onValueInput:n.saveCorreo,label:"Correo",name:"correo",placeholder:"Correo del cliente",value:n.correo},null,8,["onValueInput","value"]),(0,l.Wm)(c,{onValueInput:n.saveTelefono,label:"Teléfono",name:"telefono",placeholder:"Teléfono del cliente",value:n.telefono},null,8,["onValueInput","value"])],2)])]),(0,l._)("div",ve,[(0,l._)("button",{onClick:t[2]||(t[2]=(...e)=>n.closeModal&&n.closeModal(...e)),class:"bg-gray-400 hover:bg-gray-500 text-white text-sm p-2 px-8 rounded-xl transition duration-300"},"Cancelar"),(0,l._)("button",{onClick:t[3]||(t[3]=(...e)=>n.saveDatos&&n.saveDatos(...e)),class:"bg-blue-400 hover:bg-blue-500 text-white text-sm p-2 px-8 rounded-xl transition duration-300"},"Actualizar")])])])}var xe={name:"ModalEditar",components:{ItemForm:J.Z},props:{idCliente:String},emits:["cancelar-editar","aceptar-editar"],setup(e,{emit:t}){const o=(0,u.iH)(""),a=(0,u.iH)(""),n=(0,u.iH)(""),i=(0,u.iH)(""),r=(0,u.iH)(""),c=(0,u.iH)(""),s=(0,u.iH)(""),d=(0,u.iH)(""),m=(0,u.iH)(!1),g=(0,u.iH)(!1),v=()=>{m.value=!m.value},b=()=>{g.value=!g.value},x=()=>{t("cancelar-editar")},f=e=>{o.value=e},h=e=>{a.value=e},w=e=>{n.value=e},C=e=>{i.value=e},_=e=>{r.value=e},y=e=>{d.value=e},M=e=>{c.value=e},k=e=>{s.value=e},z=()=>{t("aceptar-editar",{cliente:o.value,ruc:a.value,razonSocial:n.value,codigoCliente:i.value,direccion:r.value,ubigeo:d.value,correo:c.value,telefono:s.value})};return(0,l.bv)((()=>{(0,p.tC)(e.idCliente).then((e=>{o.value=e.data.cliente[0].cliente,a.value=e.data.cliente[0].ruc,n.value=e.data.cliente[0].razon_social,i.value=e.data.cliente[0].codcliente,r.value=e.data.cliente[0].direccion,d.value=e.data.cliente[0].ubigeo,c.value=e.data.cliente[0].correo_electronico,s.value=e.data.cliente[0].telefono}))})),{closeModal:x,toggleUbicacion:v,toggleContacto:b,mostrarUbicacion:m,mostrarContacto:g,saveCliente:f,saveRuc:h,saveRazonsocial:w,saveCodigoCliente:C,saveDireccion:_,saveCorreo:M,saveTelefono:k,saveUbigeo:y,saveDatos:z,cliente:o,ruc:a,razonSocial:n,codigoCliente:i,direccion:r,ubigeo:d,correo:c,telefono:s}}};const fe=(0,U.Z)(xe,[["render",be]]);var he=fe,we=o(4239),Ce={name:"AdminClientes",components:{TableClientes:S,ModalCreate:Q,ModalDelete:ee.Z,ModalEditar:he,ModalError:X.Z,ConfirmEdit:te.Z},setup(){const e=(0,u.iH)(!1),t=(0,u.iH)(!1),o=(0,u.iH)(!1),a=(0,u.iH)(!1),n=(0,u.iH)(!1),i=(0,u.iH)([]),r=(0,u.iH)(""),c=()=>{e.value=!0},s=()=>{e.value=!1},d=()=>{o.value=!1},m=()=>{n.value=!1,window.location.reload()},g=e=>{r.value=e,a.value=!0},v=()=>{(0,p.Gt)(r.value).then((e=>{console.log(e.data),a.value=!1,r.value="",window.location.reload()})).catch((e=>{console.log(e)}))},b=()=>{a.value=!1},x=()=>{t.value=!1},f=e=>{r.value=e,t.value=!0},h=e=>{""==e.codigoCliente||""==e.cliente||""==e.ruc||""==e.razonSocial||""==e.ubigeo||""==e.direccion||""==e.correo||""==e.telefono?(t.value=!1,o.value=!0):(0,p.GF)(r.value,e).then((e=>{console.log(e.data),t.value=!1,n.value=!0}))},w=t=>{""==t.codigoCliente||""==t.cliente||""==t.ruc||""==t.razonSocial||""==t.ubigeo||""==t.direccion||""==t.correo||""==t.telefono?(e.value=!1,o.value=!0):(0,p.YK)(t,we.Z.state.codempresa).then((t=>{console.log(t.data),e.value=!1,window.location.reload()}))};return(0,l.bv)((()=>{(0,p.Fi)(we.Z.state.codempresa).then((e=>{i.value=e.data.clientes}))})),{listClientes:i,openModal:c,openModalV:e,openModalError:o,closeModal:s,closeSuccessEdit:m,openSuccessEdit:n,closeModalError:d,saveDatos:w,confirmDelete:a,eliminarCliente:g,aceptarEliminar:v,cancelarEliminar:b,cancelarEditar:x,editarCliente:f,openModalEdit:t,idCliente:r,aceptarEditar:h}}};const _e=(0,U.Z)(Ce,[["render",d],["__scopeId","data-v-10fc2fec"]]);var ye=_e}}]);
//# sourceMappingURL=801.1044cd87.js.map