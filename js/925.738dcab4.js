"use strict";(self["webpackChunklogin_vue"]=self["webpackChunklogin_vue"]||[]).push([[925],{8804:function(e,a,o){o.d(a,{C$:function(){return s},Ds:function(){return r},Kg:function(){return d},Lr:function(){return i},OY:function(){return l},eY:function(){return c}});var n=o(4161);const t="http://localhost:3000/api/";function l(e){return n.Z.get(`${t}unidades/list?codempresa=${e}`)}function s(e){return n.Z.get(`${t}unidades/listLibres?codempresa=${e}`)}function r(e){return n.Z.get(`${t}unidades/search?idUnidad=${e}`)}function i(e,a,o,l){return n.Z.post(`${t}unidades/create`,{placa:e,codcisterna:a,capacidad:o,codempresa:l})}function d(e){return n.Z["delete"](`${t}unidades/delete?idUnidad=${e}`)}function c(e,a,o,l){return n.Z.put(`${t}unidades/edit`,{placa:e,codcisterna:a,capacidad:o,id:l})}},4173:function(e,a,o){o.d(a,{Z:function(){return v}});var n=o(3396),t=o(7139);const l={class:"w-full md:col-span-1 lg:col-span-2"},s={class:"block tracking-wide text-gray-700 text-xs font-bold mb-2",for:"grid-state"},r={class:"relative"},i=["value"],d=(0,n._)("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[(0,n._)("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[(0,n._)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1);function c(e,a,o,c,u,p){return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("label",s,(0,t.zw)(o.name),1),(0,n._)("div",r,[(0,n._)("select",{class:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-state",onChange:a[0]||(a[0]=a=>e.$emit("selected",a.target.value))},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.options,(e=>((0,n.wg)(),(0,n.iD)("option",{key:e.key,value:e.key},(0,t.zw)(e.name),9,i)))),128))],32),d])])}var u={name:"SelectForm",props:{name:String,options:Array}},p=o(89);const m=(0,p.Z)(u,[["render",c]]);var v=m},9115:function(e,a,o){o.r(a),o.d(a,{default:function(){return be}});var n=o(3396),t=o(9242);const l=e=>((0,n.dD)("data-v-d872de8a"),e=e(),(0,n.Cn)(),e),s={class:"min-h-full w-full pb-[5rem] lg:pb-[2rem]"},r={class:"mb-8 flex justify-between items-center"},i=l((()=>(0,n._)("h3",{class:"title-vista text-2xl font-semibold text-neutral-600"},"Administrar conductores",-1))),d={class:"overflow-x-auto shadow-md sm:rounded-lg"};function c(e,a,o,l,c,u){const p=(0,n.up)("TableConductores"),m=(0,n.up)("ModalCreate"),v=(0,n.up)("ModalDelete"),g=(0,n.up)("ModalEditar"),x=(0,n.up)("ModalError"),w=(0,n.up)("ConfirmEdit");return(0,n.wg)(),(0,n.iD)("section",s,[(0,n._)("div",r,[i,(0,n._)("button",{onClick:a[0]||(a[0]=(...e)=>l.openModal&&l.openModal(...e)),class:"py-2 px-3 rounded-xl bg-orange-400 text-white lg:text-sm text-xs hover:bg-orange-500 transition duration-300"}," Crear nuevo ")]),(0,n._)("div",d,[(0,n.Wm)(p,{listConductores:l.listConductores,onEliminarConductor:l.eliminarConductor,onEditarConductor:l.editarConductor},null,8,["listConductores","onEliminarConductor","onEditarConductor"])]),(0,n.Wm)(t.uT,{name:"modal",mode:"out-in"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n.Wm)(m,{onCloseModal:l.closeModal,onSaveDatos:l.saveDatos},null,8,["onCloseModal","onSaveDatos"]),[[t.F8,l.openModalV]])])),_:1}),(0,n.Wm)(t.uT,{name:"modal",mode:"out-in"},{default:(0,n.w5)((()=>[l.confirmDelete?((0,n.wg)(),(0,n.j4)(v,{key:0,onAceptarEliminar:l.aceptarEliminar,onCancelarEliminar:l.cancelarEliminar,pregunta:"¿Estás seguro de eliminar a este conductor?"},null,8,["onAceptarEliminar","onCancelarEliminar"])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(t.uT,{name:"modal",mode:"out-in"},{default:(0,n.w5)((()=>[l.openModalEdit?((0,n.wg)(),(0,n.j4)(g,{key:0,onAceptarEditar:l.aceptarEditar,onCancelarEditar:l.cancelarEditar,idUsuario:l.idUsuario,idConductor:l.idConductor},null,8,["onAceptarEditar","onCancelarEditar","idUsuario","idConductor"])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(t.uT,{name:"modal",mode:"out-in"},{default:(0,n.w5)((()=>[l.openModalError?((0,n.wg)(),(0,n.j4)(x,{key:0,onCloseModal:l.closeModalError,title:"Advertencia",mensaje:"Se debe rellenar todos los campos al crear o editar un conductor"},null,8,["onCloseModal"])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(t.uT,{name:"modal",mode:"out-in"},{default:(0,n.w5)((()=>[l.openSuccessEdit?((0,n.wg)(),(0,n.j4)(w,{key:0,title:"Logrado",mensaje:"Se ha editado correctamente",onCloseModal:l.closeSuccessEdit},null,8,["onCloseModal"])):(0,n.kq)("",!0)])),_:1})])}var u=o(4870),p=o(4161);const m="http://localhost:3000/api/";function v(e){return p.Z.get(`${m}conductores/list?codempresa=${e}`)}function g(e,a){return p.Z.get(`${m}conductores/search?id_usuario=${e}&id_conductores=${a}`)}function x(e,a,o,n,t,l,s){return p.Z.post(`${m}conductores/create`,{numero_documento:e,apellidos_nombres:a,numero_licencia:o,codempresa:n,usuario:t,placa:s,password:l})}function w(e,a,o,n){return p.Z["delete"](`${m}conductores/delete?id_usuario=${e}&id_conductores=${a}&placa=${o}&codempresa=${n}`)}function b(e,a,o,n,t,l,s,r,i){return console.log("----------placa--------------"),console.log(r),p.Z.put(`${m}conductores/edit`,{id_usuario:e,id_conductores:a,numero_documento:o,apellidos_nombres:n,numero_licencia:t,usuario:l,placa:r,clave:s,codempresa:i})}var _=o(7139);const f={class:"w-full text-xs text-left text-gray-800"},h=(0,n._)("thead",{class:"text-xs text-gray-700 uppercase bg-gray-100"},[(0,n._)("tr",null,[(0,n._)("th",{scope:"col",class:"px-6 py-3"}," Usuario "),(0,n._)("th",{scope:"col",class:"px-6 py-3"}," Codempresa "),(0,n._)("th",{scope:"col",class:"px-6 py-3"}," Placa "),(0,n._)("th",{scope:"col",class:"px-6 py-3"}," Nombre y apellidos "),(0,n._)("th",{scope:"col",class:"px-6 py-3"}," Número de licencia "),(0,n._)("th",{scope:"col",class:"px-6 py-3"}," Acciones ")])],-1),C={key:0},y=(0,n._)("td",{class:"border px-4 py-4 text-xs text-center",colspan:"6"},"No se encontró ningún dato para esta tabla",-1),E=[y],k={class:"px-6 py-3"},M={class:"px-6 py-3"},U={class:"px-6 py-3"},D={scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap"},I={scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap"},Z={class:"px-6 py-2 flex gap-2"},H=["onClick"],V=["onClick"];function $(e,a,o,l,s,r){return(0,n.wg)(),(0,n.iD)("table",f,[h,(0,n._)("tbody",null,[0===o.listConductores.length?((0,n.wg)(),(0,n.iD)("tr",C,E)):((0,n.wg)(!0),(0,n.iD)(n.HY,{key:1},(0,n.Ko)(o.listConductores,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.id_usuario,class:"bg-white border-b hover:bg-gray-50 ease-in duration-300"},[(0,n._)("td",k,(0,_.zw)(e.usuario),1),(0,n._)("td",M,(0,_.zw)(e.codempresa),1),(0,n._)("td",U,(0,_.zw)(e.placa),1),(0,n._)("th",D,(0,_.zw)(e.apellidos_nombres),1),(0,n._)("th",I,(0,_.zw)(e.numero_licencia),1),(0,n._)("td",Z,[(0,n._)("button",{class:"font-medium py-[0.5rem] px-3 rounded-lg bg-green-500 hover:bg-green-600 ease-in duration-300 text-white",onClick:(0,t.iM)((a=>r.editarConductor(e.id_usuario,e.id_conductores,e.placa)),["prevent"])},"Editar",8,H),(0,n._)("button",{class:"font-medium py-[0.5rem] px-3 rounded-lg bg-red-500 hover:bg-red-600 ease-in duration-300 text-white",onClick:(0,t.iM)((a=>r.eliminarConductor(e.id_usuario,e.id_conductores,e.placa)),["prevent"])},"Eliminar",8,V)])])))),128))])])}var S={name:"TableConductores",props:{listConductores:Array},methods:{eliminarConductor(e,a,o){this.$emit("eliminar-conductor",{id_usuario:e,id_conductores:a,placa:o})},editarConductor(e,a){this.$emit("editar-conductor",{id_usuario:e,id_conductores:a})}}},A=o(89);const W=(0,A.Z)(S,[["render",$]]);var L=W;const z={class:"fixed inset-0 flex items-center justify-center z-[9999]"},F=(0,n._)("div",{class:"absolute inset-0 bg-black opacity-30 pointer-events-none"},null,-1),j={class:"relative z-10 p-4 bg-white rounded-xl lg:min-w-[350px] lg:max-w-[450px] max-w-[340px] min-w-[330px]"},P={class:"p-2 text-gray-700 w-full h-full text-sm"},N=(0,n._)("h3",{class:"text-center font-bold text-lg"},"Crear conductor",-1),T={class:"btns flex gap-2 justify-center items-center pt-2"};function q(e,a,o,t,l,s){const r=(0,n.up)("ItemForm"),i=(0,n.up)("SelectForm"),d=(0,n.up)("PasswordField");return(0,n.wg)(),(0,n.iD)("div",z,[F,(0,n._)("div",j,[(0,n._)("form",P,[N,(0,n.Wm)(r,{onValueInput:t.saveApellidos,label:"Apellidos y nombres",name:"apellidos_nombres",id:"apellidos_nombres",placeholder:"Inserte el nombre del conductor",value:""},null,8,["onValueInput"]),(0,n.Wm)(r,{onValueInput:t.saveDni,label:"DNI",name:"dni",id:"dni",placeholder:"Inserte el DNI del conductor",value:""},null,8,["onValueInput"]),(0,n.Wm)(r,{onValueInput:t.saveLicencia,label:"Número de licencia",name:"licencia",id:"licencia",placeholder:"Inserte el número de licencia"},null,8,["onValueInput"]),(0,n.Wm)(i,{name:"Asignar a una unidad",options:t.ListselectUnidades,modelValue:e.selectedUnidad,"onUpdate:modelValue":a[0]||(a[0]=a=>e.selectedUnidad=a),onSelected:t.handleUnidadSelected,class:"col-span-2 md:col-span-1 lg:col-span-2 text-sm my-2"},null,8,["options","modelValue","onSelected"]),(0,n.Wm)(r,{onValueInput:t.saveUsuario,label:"Usuario",name:"usuario",id:"usuario",placeholder:"Inserte un usuario para el conductor"},null,8,["onValueInput"]),(0,n.Wm)(d,{onUpdatePaswoord:t.updatepassword,texto:"Contraseña",placeholder:"Ingrese una contraseña"},null,8,["onUpdatePaswoord"]),(0,n.Wm)(d,{onUpdatePaswoord:t.updatepasswordRepeat,texto:"Confirmar contraseña",placeholder:"Repita la contraseña"},null,8,["onUpdatePaswoord"]),""!==t.msgValidacion?((0,n.wg)(),(0,n.iD)("p",{key:0,class:(0,_.C_)({"text-green-500 text-xs":"Las contraseñas coinciden"===t.msgValidacion,"text-red-400 text-xs":"Las contraseñas no coinciden"===t.msgValidacion})},(0,_.zw)(t.msgValidacion),3)):(0,n.kq)("",!0)]),(0,n._)("div",T,[(0,n._)("button",{onClick:a[1]||(a[1]=(...e)=>t.closeModal&&t.closeModal(...e)),class:"bg-gray-400 hover:bg-gray-500 text-white text-sm p-2 px-8 rounded-xl transition duration-300"},"Cerrar"),(0,n._)("button",{onClick:a[2]||(a[2]=(...e)=>t.saveDatos&&t.saveDatos(...e)),class:"bg-blue-400 hover:bg-blue-500 text-white text-sm p-2 px-8 rounded-xl transition duration-300"},"Crear")])])])}var Y=o(8692),K=o(8804),R=o(4173),B=o(3455),O=o(4239),G={name:"ModalCreate",components:{ItemForm:Y.Z,PasswordField:B.Z,SelectForm:R.Z},emits:["close-modal","save-datos"],setup(e,{emit:a}){const o=(0,u.iH)(""),t=(0,u.iH)(""),l=(0,u.iH)(""),s=(0,u.iH)([]),r=(0,u.iH)(""),i=(0,u.iH)(""),d=(0,u.iH)(""),c=(0,u.iH)(""),p=(0,u.iH)(""),m=()=>{a("close-modal")},v=()=>{a("save-datos",{apellidos:o.value,dni:t.value,placa:c.value,licencia:l.value,usuarios:r.value,"contraseña":i.value})},g=e=>{o.value=e},x=e=>{t.value=e},w=e=>{l.value=e},b=e=>{r.value=e},_=e=>{i.value=e},f=e=>{p.value=e,C()},h=e=>{c.value=e};(0,n.bv)((()=>{(0,K.C$)(O.Z.state.codempresa).then((e=>{s.value=J(e.data.unidades)}))}));const C=()=>{i.value===p.value?d.value="Las contraseñas coinciden":d.value="Las contraseñas no coinciden"};return{closeModal:m,saveDatos:v,ListselectUnidades:s,saveApellidos:g,handleUnidadSelected:h,saveDni:x,saveLicencia:w,saveUsuario:b,updatepassword:_,msgValidacion:d,updatepasswordRepeat:f}}};function J(e){const a=e.map((e=>({key:e.placa,name:e.placa})));return a.unshift({key:"",name:"Eliga una cisterna"}),a}const Q=(0,A.Z)(G,[["render",q]]);var X=Q,ee=o(4050),ae=o(4229),oe=o(1968);const ne={class:"fixed inset-0 flex items-center justify-center z-[9999]"},te=(0,n._)("div",{class:"absolute inset-0 bg-black opacity-30 pointer-events-none"},null,-1),le={class:"relative z-10 p-4 bg-white rounded-xl lg:min-w-[350px] lg:max-w-[450px] min-w-[330px] max-w-[350px]"},se={class:"p-2 text-gray-700 w-full h-full text-sm"},re=(0,n._)("h3",{class:"text-center font-bold text-lg"},"Editar conductor",-1),ie={class:"btns flex gap-2 justify-center items-center pt-2"};function de(e,a,o,t,l,s){const r=(0,n.up)("ItemForm"),i=(0,n.up)("SelectForm"),d=(0,n.up)("PasswordField");return(0,n.wg)(),(0,n.iD)("div",ne,[te,(0,n._)("div",le,[(0,n._)("form",se,[re,(0,n.Wm)(r,{onValueInput:t.saveApellidos,label:"Apellidos y nombres",name:"apellidos_nombres",id:"apellidos_nombres",placeholder:"Inserte el nombre del conductor",value:t.apellidos},null,8,["onValueInput","value"]),(0,n.Wm)(r,{onValueInput:t.saveDni,label:"DNI",name:"dni",id:"dni",placeholder:"Inserte el DNI del conductor",value:t.dni},null,8,["onValueInput","value"]),(0,n.Wm)(i,{name:"Asignar a una unidad",options:t.ListselectUnidades,modelValue:t.selectedUnidad,"onUpdate:modelValue":a[0]||(a[0]=e=>t.selectedUnidad=e),onSelected:t.handleUnidadSelected,class:"col-span-2 md:col-span-1 lg:col-span-2 text-sm my-2"},null,8,["options","modelValue","onSelected"]),(0,n.Wm)(r,{onValueInput:t.saveLicencia,label:"Número de licencia",name:"licencia",id:"licencia",placeholder:"Inserte el número de licencia",value:t.licencia},null,8,["onValueInput","value"]),(0,n.Wm)(r,{onValueInput:t.saveUsuario,label:"Usuario",name:"usuario",id:"usuario",placeholder:"Inserte un usuario para el conductor",value:t.usuarios},null,8,["onValueInput","value"]),(0,n.Wm)(d,{onUpdatePaswoord:t.updatepassword,texto:"Contraseña",placeholder:"Ingrese una contraseña",valor:t.contraseña},null,8,["onUpdatePaswoord","valor"])]),(0,n._)("div",ie,[(0,n._)("button",{onClick:a[1]||(a[1]=(...e)=>t.closeModal&&t.closeModal(...e)),class:"bg-gray-400 hover:bg-gray-500 text-white text-sm p-2 px-8 rounded-xl transition duration-300"},"Cerrar"),(0,n._)("button",{onClick:a[2]||(a[2]=(...e)=>t.saveDatos&&t.saveDatos(...e)),class:"bg-blue-400 hover:bg-blue-500 text-white text-sm p-2 px-8 rounded-xl transition duration-300"},"Actualizar")])])])}var ce=o(9564),ue=o.n(ce),pe={name:"ModalEditar",components:{ItemForm:Y.Z,PasswordField:B.Z,SelectForm:R.Z},props:{idUsuario:String,idConductor:String},emits:["cancelar-editar","aceptar-editar"],setup(e,{emit:a}){const o=(0,u.iH)(""),t=(0,u.iH)(""),l=(0,u.iH)(""),s=(0,u.iH)(""),r=(0,u.iH)(""),i=(0,u.iH)(""),d=(0,u.iH)([]),c=(0,u.iH)(""),p=(0,u.iH)(""),m=()=>{a("cancelar-editar")},v=e=>{o.value=e},x=e=>{t.value=e},w=e=>{l.value=e},b=e=>{s.value=e},_=e=>{i.value=e},f=e=>{p.value=e},h=()=>{""==p.value&&(p.value=c.value);let n=r.value;""!==i.value&&(n=ue()(i.value)),a("aceptar-editar",{id_usuario:e.idUsuario,id_conductor:e.idConductor,apellidos:o.value,dni:t.value,placa:p.value,licencia:l.value,usuarios:s.value,"contraseña":n})};return(0,n.bv)((()=>{g(e.idUsuario,e.idConductor).then((e=>{console.log(e.data.conductor),o.value=e.data.conductor.apellidos_nombres,t.value=e.data.conductor.numero_documento,l.value=e.data.conductor.numero_licencia,s.value=e.data.conductor.usuario,r.value=e.data.conductor.clave,c.value=e.data.conductor.placa,(0,K.C$)(O.Z.state.codempresa).then((e=>{d.value=me(e.data.unidades,c.value)}))}))})),{selectedUnidad:p,ListselectUnidades:d,closeModal:m,handleUnidadSelected:f,saveDatos:h,saveApellidos:v,saveDni:x,saveLicencia:w,saveUsuario:b,updatepassword:_,apellidos:o,dni:t,licencia:l,usuarios:s,"contraseña":r}}};function me(e,a){const o=e.map((e=>({key:e.placa,name:e.placa})));return null===a||""===a?o.unshift({key:"",name:"Asignar unidad"}):o.unshift({key:a,name:a}),o}const ve=(0,A.Z)(pe,[["render",de]]);var ge=ve,xe={name:"AdminConductores",components:{TableConductores:L,ModalCreate:X,ModalDelete:ee.Z,ModalEditar:ge,ModalError:oe.Z,ConfirmEdit:ae.Z},setup(){const e=(0,u.iH)(!1),a=(0,u.iH)(!1),o=(0,u.iH)(!1),t=(0,u.iH)([]),l=(0,u.iH)(!1),s=(0,u.iH)(!1),r=(0,u.iH)(""),i=(0,u.iH)(""),d=(0,u.iH)(""),c=()=>{e.value=!0},p=()=>{e.value=!1},m=()=>{s.value=!1,window.location.reload()},g=e=>{r.value=e.id_conductores,i.value=e.id_usuario,d.value=e.placa,o.value=!0},_=()=>{w(i.value,r.value,d.value,O.Z.state.codempresa).then((e=>{console.log(e.data),o.value=!1,r.value="",i.value="",window.location.reload()})).catch((e=>{console.log(e)}))},f=()=>{r.value="",i.value="",o.value=!1},h=()=>{a.value=!1},C=e=>{r.value=e.id_conductores,i.value=e.id_usuario,a.value=!0},y=o=>{const n=o.id_usuario,t=o.id_conductor,r=o.apellidos,i=o.dni,d=o.placa,c=o.licencia,u=o.usuarios,p=o.contraseña;""==r||""==i||""==c||""==u||""==p?(e.value=!1,l.value=!0):b(n,t,i,r,c,u,p,d,O.Z.state.codempresa).then((e=>{console.log(e.data),a.value=!1,s.value=!0}))},E=a=>{const o=a.apellidos,n=a.dni,t=a.licencia,s=a.placa,r=a.usuarios,i=a.contraseña;""==o||""==n||""==t||""==r||""==i||""==s?(e.value=!1,l.value=!0):x(n,o,t,O.Z.state.codempresa,r,i,s).then((a=>{console.log(a.data),e.value=!1,window.location.reload()}))},k=()=>{l.value=!1};return(0,n.bv)((()=>{v(O.Z.state.codempresa).then((e=>{t.value=e.data.conductores}))})),{listConductores:t,openModal:c,openModalV:e,openSuccessEdit:s,closeSuccessEdit:m,closeModal:p,saveDatos:E,confirmDelete:o,eliminarConductor:g,aceptarEliminar:_,cancelarEliminar:f,cancelarEditar:h,editarConductor:C,openModalEdit:a,idConductor:r,idUsuario:i,aceptarEditar:y,openModalError:l,closeModalError:k}}};const we=(0,A.Z)(xe,[["render",c],["__scopeId","data-v-d872de8a"]]);var be=we}}]);
//# sourceMappingURL=925.738dcab4.js.map