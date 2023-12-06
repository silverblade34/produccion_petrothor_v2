"use strict";(self["webpackChunklogin_vue"]=self["webpackChunklogin_vue"]||[]).push([[101],{8749:function(e,t,a){a.d(t,{Fi:function(){return l},GF:function(){return c},Gt:function(){return i},YK:function(){return r},tC:function(){return s}});var o=a(4161);const n="http://67.205.184.183:3020/api/";function l(e){return o.Z.get(`${n}clientes/list?codempresa=${e}`)}function r(e,t){return o.Z.post(`${n}clientes/create`,{codempresa:t,codcliente:e.codigoCliente,cliente:e.cliente,ruc:e.ruc,razon_social:e.razonSocial,ubigeo:e.ubigeo,direccion:e.direccion,correo_electronico:e.correo,telefono:e.telefono})}function i(e){return o.Z["delete"](`${n}clientes/delete?idCliente=${e}`)}function s(e){return o.Z.get(`${n}clientes/search?idCliente=${e}`)}function c(e,t){return o.Z.put(`${n}clientes/edit`,{id:e,cliente:t.cliente,ruc:t.ruc,razon_social:t.razonSocial,ubigeo:t.ubigeo,direccion:t.direccion,correo_electronico:t.correo,telefono:t.telefono})}},4229:function(e,t,a){a.d(t,{Z:function(){return w}});var o=a(3396),n=a(7139);const l={class:"fixed inset-0 flex items-center justify-center z-[9999]"},r=(0,o._)("div",{class:"absolute inset-0 bg-black opacity-30 pointer-events-none"},null,-1),i={class:"relative z-30 p-3 bg-white rounded-xl min-w-[350px] max-w-[450px]"},s=(0,o._)("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[(0,o._)("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),c=(0,o._)("span",{class:"sr-only"},"Close modal",-1),d=[s,c],u={class:"p-6 text-center"},m=(0,o._)("svg",{"aria-hidden":"true",class:"mx-auto mb-3 w-14 h-14 text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})],-1),p={class:"mb-3 text-xl font-bold text-green-500"},g={class:"text-sm mb-5 text-gray-700"};function v(e,t,a,s,c,v){return(0,o.wg)(),(0,o.iD)("div",l,[r,(0,o._)("div",i,[(0,o._)("button",{type:"button",onClick:t[0]||(t[0]=(...e)=>s.closeModal&&s.closeModal(...e)),class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white","data-modal-hide":"popup-modal"},d),(0,o._)("div",u,[m,(0,o._)("h3",p,(0,n.zw)(a.title),1),(0,o._)("p",g,(0,n.zw)(a.mensaje),1),(0,o._)("button",{"data-modal-hide":"popup-modal",type:"button",onClick:t[1]||(t[1]=(...e)=>s.closeModal&&s.closeModal(...e)),class:"text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10 ease-in duration-300"}," Aceptar")])])])}var b={name:"ConfirmEdit",props:{title:String,mensaje:String},emits:["close-modal"],setup(e,{emit:t}){const a=()=>{t("close-modal")};return{closeModal:a}}},f=a(89);const x=(0,f.Z)(b,[["render",v]]);var w=x},8692:function(e,t,a){a.d(t,{Z:function(){return u}});var o=a(3396),n=a(7139);const l={for:""},r=["name","id","value","placeholder"];function i(e,t,a,i,s,c){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("label",l,(0,n.zw)(a.label),1),(0,o._)("input",{type:"text",name:a.name,id:a.id,value:a.value,class:"input-item w-full py-2 px-3 rounded-lg mt-2 border",onInput:t[0]||(t[0]=t=>e.$emit("value-input",t.target.value)),placeholder:a.placeholder},null,40,r)])}var s={props:{label:String,name:String,placeholder:String,value:String,id:String}},c=a(89);const d=(0,c.Z)(s,[["render",i],["__scopeId","data-v-26b88d80"]]);var u=d},4050:function(e,t,a){a.d(t,{Z:function(){return x}});var o=a(3396),n=a(7139);const l={class:"fixed inset-0 flex items-center justify-center z-[9999]"},r=(0,o._)("div",{class:"absolute inset-0 bg-black opacity-30 pointer-events-none"},null,-1),i={class:"relative z-30 p-4 bg-white rounded-xl lg:min-w-[350px] lg:max-w-[450px] min-w-[330px] max-w-[350px]"},s=(0,o._)("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[(0,o._)("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),c=(0,o._)("span",{class:"sr-only"},"Close modal",-1),d=[s,c],u={class:"p-6 text-center"},m=(0,o._)("svg",{"aria-hidden":"true",class:"mx-auto mb-4 w-14 h-14 text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),p={class:"mb-5 text-lg font-normal text-gray-500"};function g(e,t,a,s,c,g){return(0,o.wg)(),(0,o.iD)("div",l,[r,(0,o._)("div",i,[(0,o._)("button",{type:"button",onClick:t[0]||(t[0]=(...e)=>s.cancelarEliminar&&s.cancelarEliminar(...e)),class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white","data-modal-hide":"popup-modal"},d),(0,o._)("div",u,[m,(0,o._)("h3",p,(0,n.zw)(a.pregunta),1),(0,o._)("button",{"data-modal-hide":"popup-modal",type:"button",onClick:t[1]||(t[1]=(...e)=>s.aceptarEliminar&&s.aceptarEliminar(...e)),class:"text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 ease-in duration-300"}," Si, eliminar "),(0,o._)("button",{"data-modal-hide":"popup-modal",type:"button",onClick:t[2]||(t[2]=(...e)=>s.cancelarEliminar&&s.cancelarEliminar(...e)),class:"text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10 ease-in duration-300"},"No, cancelar")])])])}var v={name:"ModalDelete",props:{pregunta:String},emits:["aceptar-eliminar","cancelar-eliminar"],setup(e,{emit:t}){const a=()=>{t("aceptar-eliminar")},o=()=>{t("cancelar-eliminar")};return{aceptarEliminar:a,cancelarEliminar:o}}},b=a(89);const f=(0,b.Z)(v,[["render",g]]);var x=f},1968:function(e,t,a){a.d(t,{Z:function(){return w}});var o=a(3396),n=a(7139);const l={class:"fixed inset-0 flex items-center justify-center z-[9999]"},r=(0,o._)("div",{class:"absolute inset-0 bg-black opacity-30 pointer-events-none"},null,-1),i={class:"relative z-30 p-3 bg-white rounded-xl min-w-[350px] max-w-[450px]"},s=(0,o._)("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[(0,o._)("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),c=(0,o._)("span",{class:"sr-only"},"Close modal",-1),d=[s,c],u={class:"p-6 text-center"},m=(0,o._)("svg",{"aria-hidden":"true",class:"mx-auto mb-3 w-14 h-14 text-yellow-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),p={class:"mb-3 text-xl font-bold text-yellow-500"},g={class:"text-sm mb-5 text-gray-700"};function v(e,t,a,s,c,v){return(0,o.wg)(),(0,o.iD)("div",l,[r,(0,o._)("div",i,[(0,o._)("button",{type:"button",onClick:t[0]||(t[0]=(...e)=>s.closeModal&&s.closeModal(...e)),class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white","data-modal-hide":"popup-modal"},d),(0,o._)("div",u,[m,(0,o._)("h3",p,(0,n.zw)(a.title),1),(0,o._)("p",g,(0,n.zw)(a.mensaje),1),(0,o._)("button",{"data-modal-hide":"popup-modal",type:"button",onClick:t[1]||(t[1]=(...e)=>s.closeModal&&s.closeModal(...e)),class:"text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10 ease-in duration-300"}," Aceptar")])])])}var b={name:"ModalDelete",props:{title:String,mensaje:String},emits:["close-modal"],setup(e,{emit:t}){const a=()=>{t("close-modal")};return{closeModal:a}}},f=a(89);const x=(0,f.Z)(b,[["render",v]]);var w=x},4173:function(e,t,a){a.d(t,{Z:function(){return g}});var o=a(3396),n=a(7139);const l={class:"w-full md:col-span-1 lg:col-span-2"},r={class:"block tracking-wide text-gray-700 text-xs font-bold mb-2",for:"grid-state"},i={class:"relative"},s=["value"],c=(0,o._)("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[(0,o._)("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[(0,o._)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1);function d(e,t,a,d,u,m){return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("label",r,(0,n.zw)(a.name),1),(0,o._)("div",i,[(0,o._)("select",{class:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-state",onChange:t[0]||(t[0]=t=>e.$emit("selected",t.target.value))},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.options,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e.key,value:e.key},(0,n.zw)(e.name),9,s)))),128))],32),c])])}var u={name:"SelectForm",props:{name:String,options:Array}},m=a(89);const p=(0,m.Z)(u,[["render",d]]);var g=p},4101:function(e,t,a){a.r(t),a.d(t,{default:function(){return le}});var o=a(3396),n=a(9242);const l={class:"min-h-full w-full pb-[5rem] lg:pb-[2rem]"},r={class:"mb-8 flex justify-between items-center"},i=(0,o._)("h3",{class:"title-vista text-2xl font-semibold text-neutral-600"},"Administrar destinatarios",-1),s={class:"bg-transparent"};function c(e,t,a,c,d,u){const m=(0,o.up)("DropdownItems"),p=(0,o.up)("ModalCreate"),g=(0,o.up)("ConfirmEdit"),v=(0,o.up)("ModalError"),b=(0,o.up)("ModalDelete"),f=(0,o.up)("ModalEditar");return(0,o.wg)(),(0,o.iD)("section",l,[(0,o._)("div",r,[i,(0,o._)("button",{onClick:t[0]||(t[0]=(...e)=>c.openModalCreate&&c.openModalCreate(...e)),class:"py-2 px-3 rounded-xl bg-orange-400 text-white lg:text-sm text-xs hover:bg-orange-500 transition duration-300"}," Crear nuevo ")]),(0,o._)("div",s,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(c.listaClientes,(e=>((0,o.wg)(),(0,o.j4)(m,{key:e.id,item:e,onEditarDestinatario:c.editarDestinatario,onEliminarDestinatario:c.eliminarDestinatario},null,8,["item","onEditarDestinatario","onEliminarDestinatario"])))),128))]),(0,o.Wm)(n.uT,{name:"modal",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(p,{onCloseModal:c.closeModal,onSaveDatos:c.crearDestinatario},null,8,["onCloseModal","onSaveDatos"]),[[n.F8,c.openModalV]])])),_:1}),(0,o.Wm)(n.uT,{name:"modal",mode:"out-in"},{default:(0,o.w5)((()=>[c.openModalSuccess?((0,o.wg)(),(0,o.j4)(g,{key:0,title:"Logrado",mensaje:c.msgModalSucces,onCloseModal:c.closeModalSuccess},null,8,["mensaje","onCloseModal"])):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(n.uT,{name:"modal",mode:"out-in"},{default:(0,o.w5)((()=>[c.openModalError?((0,o.wg)(),(0,o.j4)(v,{key:0,title:"Advertencia",mensaje:c.msgModalError,onCloseModal:c.closeModalError},null,8,["mensaje","onCloseModal"])):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(n.uT,{name:"modal",mode:"out-in"},{default:(0,o.w5)((()=>[c.confirmDelete?((0,o.wg)(),(0,o.j4)(b,{key:0,onAceptarEliminar:c.aceptarEliminar,onCancelarEliminar:c.cancelarEliminar,pregunta:"¿Estás seguro de eliminar a este destinatario?"},null,8,["onAceptarEliminar","onCancelarEliminar"])):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(n.uT,{name:"modal",mode:"out-in"},{default:(0,o.w5)((()=>[c.openModalEdit?((0,o.wg)(),(0,o.j4)(f,{key:0,onAceptarEditar:c.aceptarEditar,onCancelarEditar:c.cancelarEditar,idDestinatario:c.idDestinatario},null,8,["onAceptarEditar","onCancelarEditar","idDestinatario"])):(0,o.kq)("",!0)])),_:1})])}var d=a(4870),u=a(4161);const m="http://67.205.184.183:3020/api/";function p(e){return u.Z.get(`${m}destinatarios/list?codempresa=${e}`)}function g(e,t){return u.Z.post(`${m}destinatarios/create`,{codempresa:e,id_cliente:t.id_cliente,nombre:t.nombre,ubigeo:t.ubigeo,direccion:t.direccion,telefono:t.telefono})}function v(e){return u.Z["delete"](`${m}destinatarios/delete?idDestinatario=${e}`)}function b(e){return u.Z.get(`${m}destinatarios/search?idDestinatario=${e}`)}function f(e){return u.Z.put(`${m}destinatarios/edit`,{id:e.id,nombre:e.nombre,ubigeo:e.ubigeo,direccion:e.direccion,telefono:e.telefono})}var x=a(4239),w=a(7139);const h={class:"dropdown mt-3"},y={class:"text-xs lg:text-sm"},_={class:"flex gap-3 items-center"},C=["onClick"],M=["onClick"];function k(e,t,a,l,r,i){return(0,o.wg)(),(0,o.iD)("div",h,[(0,o._)("button",{class:(0,w.C_)(["dropdown-toggle bg-orange-400 flex justify-between items-center w-full rounded-lg text-white px-5 py-2 mt-2",{"bg-orange-500":l.mostrarContacto}]),onClick:t[0]||(t[0]=(0,n.iM)(((...e)=>l.toggleContacto&&l.toggleContacto(...e)),["prevent"]))},[(0,o._)("span",y,(0,w.zw)(a.item.nombre),1),(0,o._)("i",{class:(0,w.C_)([{"fa-solid fa-angle-down transform rotate-180":l.mostrarContacto},"fa-solid fa-angle-down transition duration-300 shadow-sm"])},null,2)],2),(0,o._)("div",{class:(0,w.C_)(["dropdown-menu mx-2 px-4 py-3 rounded-lg transition-max-height duration-300 bg-white overflow-y-auto",{"max-h-[500px]":l.mostrarContacto,"max-h-0":!l.mostrarContacto,"overflow-hidden":!l.mostrarContacto,"pt-0 pb-0":!l.mostrarContacto}])},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.item.destinatarios,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id,class:"my-1 w-full lg:p-2 lg:px-4 cursor-pointer hover:bg-slate-500 transition duration-200 p-2 rounded-lg bg-slate-400 text-white text-xs lg:text-sm flex justify-between"},[(0,o._)("span",null,(0,w.zw)(e.nombre),1),(0,o._)("div",_,[(0,o._)("i",{class:"fa-solid fa-pen-to-square hover:text-orange-300 transition duration-200",onClick:(0,n.iM)((t=>l.editarDestinatario(e.id)),["prevent"])},null,8,C),(0,o._)("i",{class:"fa-solid fa-trash hover:text-orange-300 transition duration-200",onClick:(0,n.iM)((t=>l.eliminarDestinatario(e.id)),["prevent"])},null,8,M)])])))),128))],2)])}var D={name:"DropdownItem",props:{item:Array},emits:["editar-destinatario","eliminar-destinatario"],setup(e,{emit:t}){const a=(0,d.iH)(!1),o=()=>{a.value=!a.value},n=e=>{t("editar-destinatario",{id_destinatario:e})},l=e=>{t("eliminar-destinatario",{id_destinatario:e})};return{mostrarContacto:a,toggleContacto:o,editarDestinatario:n,eliminarDestinatario:l}}},E=a(89);const S=(0,E.Z)(D,[["render",k]]);var z=S;const I={class:"fixed inset-0 flex items-center justify-center z-[9999]"},Z=(0,o._)("div",{class:"absolute inset-0 bg-black opacity-30 pointer-events-none"},null,-1),j={class:"relative z-10 p-4 bg-white rounded-xl lg:min-w-[350px] lg:max-w-[450px] min-w-[330px] max-w-[350px]"},H={class:"p-2 text-gray-700 w-full h-full text-sm"},V=(0,o._)("h3",{class:"text-center font-bold text-lg"},"Crear destinatario",-1),L={class:"btns flex gap-2 justify-center items-center pt-2"};function $(e,t,a,n,l,r){const i=(0,o.up)("SelectForm"),s=(0,o.up)("ItemForm");return(0,o.wg)(),(0,o.iD)("div",I,[Z,(0,o._)("div",j,[(0,o._)("form",H,[V,(0,o.Wm)(i,{name:"Eliga al cliente que estara relacionado",options:n.ListselectCliente,modelValue:n.selectedCliente,"onUpdate:modelValue":t[0]||(t[0]=e=>n.selectedCliente=e),onSelected:n.handleClienteSelected,class:"col-span-2 md:col-span-1 lg:col-span-2 text-sm my-2"},null,8,["options","modelValue","onSelected"]),(0,o.Wm)(s,{onValueInput:n.saveNombre,label:"Nombre o sede",name:"nombre",placeholder:"Inserte el nombre o sede",value:""},null,8,["onValueInput"]),(0,o.Wm)(s,{onValueInput:n.saveUbigeo,label:"Ubigeo",name:"ubigeo",placeholder:"Inserte su ubigeo",value:""},null,8,["onValueInput"]),(0,o.Wm)(s,{onValueInput:n.saveDireccion,label:"Dirección",name:"direccion",placeholder:"Inserte su dirección"},null,8,["onValueInput"]),(0,o.Wm)(s,{onValueInput:n.saveTelefono,label:"Teléfono",name:"telefono",placeholder:"Inserte su teléfono"},null,8,["onValueInput"])]),(0,o._)("div",L,[(0,o._)("button",{onClick:t[1]||(t[1]=(...e)=>n.closeModal&&n.closeModal(...e)),class:"bg-gray-400 hover:bg-gray-500 text-white text-sm p-2 px-8 rounded-xl transition duration-300"},"Cerrar"),(0,o._)("button",{onClick:t[2]||(t[2]=(...e)=>n.saveDatos&&n.saveDatos(...e)),class:"bg-blue-400 hover:bg-blue-500 text-white text-sm p-2 px-8 rounded-xl transition duration-300"},"Crear")])])])}var W=a(8692),A=a(4173),F=a(8749),T={name:"ModalCreate",components:{ItemForm:W.Z,SelectForm:A.Z},emits:["close-modal","save-datos"],setup(e,{emit:t}){const a=(0,d.iH)([]),n=(0,d.iH)(""),l=(0,d.iH)(""),r=(0,d.iH)(""),i=(0,d.iH)(""),s=(0,d.iH)(""),c=()=>{t("close-modal")},u=e=>{r.value=e},m=e=>{i.value=e},p=e=>{l.value=e},g=e=>{s.value=e},v=()=>{t("save-datos",{id_cliente:n.value,nombre:l.value,ubigeo:r.value,direccion:i.value,telefono:s.value})},b=e=>{n.value=e};return(0,o.bv)((()=>{(0,F.Fi)(x.Z.state.codempresa).then((e=>{a.value=B(e.data.clientes)}))})),{ListselectCliente:a,selectedCliente:n,handleClienteSelected:b,closeModal:c,saveTelefono:g,saveUbigeo:u,saveDireccion:m,saveNombre:p,saveDatos:v}}};function B(e){const t=e.map((e=>({key:e.id,name:e.cliente})));return t.unshift({key:"",name:"Eliga un cliente"}),t}const N=(0,E.Z)(T,[["render",$]]);var U=N,q=a(4050),K=a(4229);const Y={class:"fixed inset-0 flex items-center justify-center z-[9999]"},G=(0,o._)("div",{class:"absolute inset-0 bg-black opacity-30 pointer-events-none"},null,-1),J={class:"relative z-10 p-4 bg-white rounded-xl lg:min-w-[350px] lg:max-w-[450px] min-w-[330px] max-w-[350px]"},O={class:"p-2 text-gray-700 w-full h-full text-sm"},P=(0,o._)("h3",{class:"text-center font-bold text-lg"},"Editar destinatario",-1),Q={class:"btns flex gap-2 justify-center items-center pt-2"};function R(e,t,a,n,l,r){const i=(0,o.up)("ItemForm");return(0,o.wg)(),(0,o.iD)("div",Y,[G,(0,o._)("div",J,[(0,o._)("form",O,[P,(0,o.Wm)(i,{onValueInput:n.saveNombre,label:"Nombre o sede",name:"nombre",placeholder:"Inserte el nombre o sede",value:n.nombre},null,8,["onValueInput","value"]),(0,o.Wm)(i,{onValueInput:n.saveUbigeo,label:"Ubigeo",name:"ubigeo",placeholder:"Inserte su ubigeo",value:n.ubigeo},null,8,["onValueInput","value"]),(0,o.Wm)(i,{onValueInput:n.saveDireccion,label:"Dirección",name:"direccion",placeholder:"Inserte su dirección",value:n.direccion},null,8,["onValueInput","value"]),(0,o.Wm)(i,{onValueInput:n.saveTelefono,label:"Teléfono",name:"telefono",placeholder:"Inserte su teléfono",value:n.telefono},null,8,["onValueInput","value"])]),(0,o._)("div",Q,[(0,o._)("button",{onClick:t[0]||(t[0]=(...e)=>n.closeModal&&n.closeModal(...e)),class:"bg-gray-400 hover:bg-gray-500 text-white text-sm p-2 px-8 rounded-xl transition duration-300"},"Cerrar"),(0,o._)("button",{onClick:t[1]||(t[1]=(...e)=>n.saveDatos&&n.saveDatos(...e)),class:"bg-blue-400 hover:bg-blue-500 text-white text-sm p-2 px-8 rounded-xl transition duration-300"},"Aceptar")])])])}var X={name:"ModalCreate",components:{ItemForm:W.Z},emits:["cancelar-editar","aceptar-editar"],props:{idDestinatario:String},setup(e,{emit:t}){const a=(0,d.iH)(""),n=(0,d.iH)(""),l=(0,d.iH)(""),r=(0,d.iH)(""),i=()=>{t("cancelar-editar")},s=e=>{n.value=e},c=e=>{l.value=e},u=e=>{a.value=e},m=e=>{r.value=e},p=()=>{t("aceptar-editar",{id:e.idDestinatario,nombre:a.value,ubigeo:n.value,direccion:l.value,telefono:r.value})};return(0,o.bv)((()=>{b(e.idDestinatario).then((e=>{a.value=e.data.destinatario[0].nombre,n.value=e.data.destinatario[0].ubigeo,l.value=e.data.destinatario[0].direccion,r.value=e.data.destinatario[0].telefono}))})),{closeModal:i,saveTelefono:m,saveUbigeo:s,saveDireccion:c,saveNombre:u,saveDatos:p,nombre:a,ubigeo:n,direccion:l,telefono:r}}};const ee=(0,E.Z)(X,[["render",R]]);var te=ee,ae=a(1968),oe={name:"AdminDestinatarios",components:{DropdownItems:z,ModalCreate:U,ModalError:ae.Z,ConfirmEdit:K.Z,ModalDelete:q.Z,ModalEditar:te},setup(){const e=(0,d.iH)([]),t=(0,d.iH)(!1),a=(0,d.iH)(!1),n=(0,d.iH)(!1),l=(0,d.iH)(!1),r=(0,d.iH)(""),i=(0,d.iH)(!1),s=(0,d.iH)(""),c=(0,d.iH)(""),u=()=>{t.value=!1},m=()=>{t.value=!0},b=()=>{a.value=!1,window.location.reload()},w=()=>{i.value=!1},h=()=>{r.value="",l.value=!1},y=()=>{r.value="",n.value=!1},_=e=>{r.value=e.id_destinatario,l.value=!0},C=e=>{r.value=e.id_destinatario,n.value=!0},M=e=>{""==e.nombre||""==e.ubigeo||""==e.direccion||""==e.telefono?(n.value=!1,i.value=!0,c.value="Los campos nombre, ubigeo y dirección no deben estar vacios"):f(e).then((()=>{n.value=!1,r.value="",a.value=!0,s.value="Se ha editado correctamente el destinatario"})).catch((e=>{r.value="",n.value=!1,i.value=!0,c.value=e}))},k=()=>{v(r.value).then((()=>{r.value="",l.value=!1,a.value=!0,s.value="Se ha eliminado el destinatario"})).catch((e=>{r.value="",l.value=!1,i.value=!0,c.value=e}))};(0,o.bv)((()=>{p(x.Z.state.codempresa).then((t=>{e.value=t.data.clientesdestinatarios}))}));const D=e=>{""==e.id_cliente||""==e.nombre||""==e.ubigeo||""==e.direccion?(t.value=!1,i.value=!0,c.value="Se debe elegir un cliente y los campos nombre, ubigeo y dirección son obligatorios"):g(x.Z.state.codempresa,e).then((()=>{t.value=!1,a.value=!0,s.value="Se ha creado correctamente el destinatario"})).catch((e=>{t.value=!1,i.value=!0,c.value=e}))};return{idDestinatario:r,listaClientes:e,closeModal:u,closeModalSuccess:b,closeModalError:w,cancelarEliminar:h,cancelarEditar:y,aceptarEliminar:k,confirmDelete:l,openModalSuccess:a,msgModalSucces:s,msgModalError:c,openModalCreate:m,openModalError:i,openModalV:t,openModalEdit:n,crearDestinatario:D,eliminarDestinatario:_,editarDestinatario:C,aceptarEditar:M}}};const ne=(0,E.Z)(oe,[["render",c]]);var le=ne}}]);
//# sourceMappingURL=101.19927e8a.js.map