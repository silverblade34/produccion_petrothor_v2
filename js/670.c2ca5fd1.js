"use strict";(self["webpackChunklogin_vue"]=self["webpackChunklogin_vue"]||[]).push([[670],{8443:function(e,a,o){o.r(a),o.d(a,{default:function(){return $e}});var l=o(3396),t=o(9242);const i=e=>((0,l.dD)("data-v-6809a8c2"),e=e(),(0,l.Cn)(),e),r={class:"min-h-full w-full pb-[5rem] lg:pb-[2rem]"},n={class:"mb-8 flex justify-between items-center"},s=i((()=>(0,l._)("h3",{class:"title-vista text-2xl font-semibold text-neutral-600"},"Administrar cuentas",-1))),u={class:"text-sm overflow-x-auto shadow-md sm:rounded-2xl"};function c(e,a,o,i,c,d){const p=(0,l.up)("TableUsers"),m=(0,l.up)("ModalCreate"),g=(0,l.up)("ModalDelete"),v=(0,l.up)("ModalEditar"),b=(0,l.up)("ModaError"),x=(0,l.up)("ConfirmEdit");return(0,l.wg)(),(0,l.iD)("section",r,[(0,l._)("div",n,[s,(0,l._)("button",{onClick:a[0]||(a[0]=(...e)=>i.openModal&&i.openModal(...e)),class:"py-2 px-3 rounded-xl bg-orange-400 text-white text-sm hover:bg-orange-500 transition duration-300"}," Crear cuenta ")]),(0,l._)("div",u,[(0,l.Wm)(p,{listaUsuarios:i.ListUsers,onEliminarUsuario:i.eliminarUsuario,onEditarUsuario:i.editarUsuario},null,8,["listaUsuarios","onEliminarUsuario","onEditarUsuario"])]),(0,l.Wm)(t.uT,{name:"modal",mode:"out-in"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(m,{onCloseModal:i.closeModal,onSaveDatos:i.crearCuenta},null,8,["onCloseModal","onSaveDatos"]),[[t.F8,i.openModalV]])])),_:1}),(0,l.Wm)(t.uT,{name:"modal",mode:"out-in"},{default:(0,l.w5)((()=>[i.confirmDelete?((0,l.wg)(),(0,l.j4)(g,{key:0,onAceptarEliminar:i.aceptarEliminar,onCancelarEliminar:i.cancelarEliminar,pregunta:"¿Estás seguro de eliminar esta cuenta?"},null,8,["onAceptarEliminar","onCancelarEliminar"])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(t.uT,{name:"modal",mode:"out-in"},{default:(0,l.w5)((()=>[i.openModalEdit?((0,l.wg)(),(0,l.j4)(v,{key:0,onAceptarEditar:i.aceptarEditar,onCancelarEditar:i.cancelarEditar,idUsuario:i.idUsuarioSet,idEmpresa:i.idEmpresaSet},null,8,["onAceptarEditar","onCancelarEditar","idUsuario","idEmpresa"])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(t.uT,{name:"modal",mode:"out-in"},{default:(0,l.w5)((()=>[i.openModalError?((0,l.wg)(),(0,l.j4)(b,{key:0,title:"Advertencia",mensaje:"Se debe rellenar todos los campos",onCloseModal:i.closeModalError},null,8,["onCloseModal"])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(t.uT,{name:"modal",mode:"out-in"},{default:(0,l.w5)((()=>[i.openSuccessEdit?((0,l.wg)(),(0,l.j4)(x,{key:0,title:"Logrado",mensaje:"Se ha editado correctamente",onCloseModal:i.closeSuccessEdit},null,8,["onCloseModal"])):(0,l.kq)("",!0)])),_:1})])}var d=o(4870),p=o(4239),m=o(4161);const g="http://67.205.184.183:3000/api/";function v(e,a){return m.Z.get(`${g}usuarios/listar_clientes?tipousuario=${a}&codempresa=${e}`)}function b(e,a,o,l,t,i,r,n,s,u,c){return m.Z.post(`${g}usuarios/crear_usuarios`,{codempresa_cuenta:e,tipousuario:a,usuario:o,password:t,empresa:l,ubigeo:i,direccion:r,correo:n,telefono:s,domicilio_fiscal:u,ruc:c})}function x(e,a){const o=new FormData;return console.log("enviara la imagen mediante http"),o.append("logoImage",e),o.append("codempresa",a),console.log(o),m.Z.post(`${g}usuarios/guardarLogo`,o,{headers:{"Content-Type":"multipart/form-data"}})}function f(e,a,o){return m.Z["delete"](`${g}usuarios/cuenta_eliminar`,{data:{idUsuario:e,idEmpresa:a,tipousuario:o}})}function w(e,a){return m.Z.get(`${g}usuarios/search?idUsuario=${e}&idEmpresa=${a}`)}function h(e,a,o,l,t,i,r,n,s,u,c){return m.Z.put(`${g}usuarios/edit`,{id_usuario:e,id_empresa:a,usuario:o,numero_documento:c,clave:t,nombre:l,ubigeo:i,direccion:r,correo_electronico:n,telefono:s,codigo_del_domicilio_fiscal:u})}var _=o(7139),C=o.p+"img/icon-user.d6deea94.png";const y={class:"w-full text-xs text-left text-gray-500 dark:text-gray-400"},U=(0,l._)("thead",{class:"text-xs uppercase bg-gray-400 text-white"},[(0,l._)("tr",null,[(0,l._)("th",{scope:"col",class:"px-6 py-3"}," Usuario "),(0,l._)("th",{scope:"col",class:"px-6 py-3"}," Empresa "),(0,l._)("th",{scope:"col",class:"px-6 py-3"}," Codigo empresa "),(0,l._)("th",{scope:"col",class:"px-6 py-3"}," Dirección "),(0,l._)("th",{scope:"col",class:"px-6 py-3"}," Correo "),(0,l._)("th",{scope:"col",class:"px-6 py-3"}," Telefono "),(0,l._)("th",{scope:"col",class:"px-6 py-3"}," Acciones ")])],-1),I={scope:"row",class:"flex items-center px-6 py-3 text-gray-900 whitespace-nowrap"},E=(0,l._)("img",{class:"w-10 h-10 rounded-full",src:C,alt:"Icon user"},null,-1),M={class:"pl-3"},k={class:"text-gray-800 font-medium"},D={class:"px-6 py-3 text-gray-800"},V={class:"px-6 py-3 text-gray-800"},H={class:"px-6 py-3 text-gray-800"},W={class:"px-6 py-3 text-gray-800"},Z={class:"px-6 py-3 text-gray-800"},A={class:"px-6 py-3"},F=["onClick"],S=["onClick"];function j(e,a,o,i,r,n){return(0,l.wg)(),(0,l.iD)("table",y,[U,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.listaUsuarios,(e=>((0,l.wg)(),(0,l.iD)("tr",{class:"bg-white border-b hover:bg-gray-100 ease-in duration-300",key:e.id},[(0,l._)("th",I,[E,(0,l._)("div",M,[(0,l._)("div",k,(0,_.zw)(e.usuario),1)])]),(0,l._)("td",D,(0,_.zw)(e.nombre),1),(0,l._)("td",V,(0,_.zw)(e.codempresa),1),(0,l._)("td",H,(0,_.zw)(e.direccion),1),(0,l._)("td",W,(0,_.zw)(e.correo_electronico),1),(0,l._)("td",Z,(0,_.zw)(e.telefono),1),(0,l._)("td",A,[(0,l._)("a",{href:"#",class:"mr-2 p-2 font-medium text-white bg-green-500 hover:bg-green-700 ease-in duration-300 rounded-lg",onClick:(0,t.iM)((a=>n.editarUsuario(e.id_usuario,e.id_empresa)),["prevent"])},"Editar",8,F),(0,l._)("a",{href:"#",class:"p-2 font-medium text-white bg-red-500 hover:bg-red-700 ease-in duration-300 rounded-lg",onClick:(0,t.iM)((a=>n.eliminarUsuario(e.id_usuario,e.id_empresa)),["prevent"])},"Eliminar",8,S)])])))),128))])])}var T={name:"TableUsers",props:{listaUsuarios:Array},methods:{eliminarUsuario(e,a){this.$emit("eliminar-usuario",e,a)},editarUsuario(e,a){this.$emit("editar-usuario",e,a)}}},z=o(89);const R=(0,z.Z)(T,[["render",j]]);var $=R;const L={class:"fixed inset-0 flex items-center justify-center z-[9999] py-5"},P=(0,l._)("div",{class:"absolute inset-0 bg-black opacity-30 pointer-events-none"},null,-1),q={class:"relative z-10 p-4 bg-white rounded-xl lg:min-w-[350px] lg:max-w-[450px] min-w-[340px] max-w-[350px]"},N={class:"p-2 text-gray-700 w-full h-full text-sm"},B=(0,l._)("h3",{class:"text-center font-bold text-lg"},"Crear cuenta",-1),K={class:"dropdown"},Y=(0,l._)("span",null,"Datos ubicación",-1),G=(0,l._)("i",{class:"fa-solid fa-angle-down"},null,-1),J=[Y,G],O={class:"dropdown"},Q=(0,l._)("span",null,"Datos contacto",-1),X=(0,l._)("i",{class:"fa-solid fa-angle-down"},null,-1),ee=[Q,X],ae={class:"btns flex gap-2 justify-center items-center pt-2"};function oe(e,a,o,i,r,n){const s=(0,l.up)("ItemForm"),u=(0,l.up)("LogoimgField"),c=(0,l.up)("PasswordField");return(0,l.wg)(),(0,l.iD)("div",L,[P,(0,l._)("div",q,[(0,l._)("form",N,[B,(0,l.Wm)(s,{onValueInput:i.updateusuario,label:"Usuario",name:"usuario",id:"usuario",placeholder:"Ingrese un usuario",value:""},null,8,["onValueInput"]),(0,l.Wm)(s,{onValueInput:i.updatebusinnes,label:"Razón social",name:"empresa",id:"empresa",placeholder:"Ingrese el nombre de la empresa",value:""},null,8,["onValueInput"]),(0,l.Wm)(s,{onValueInput:i.saveRuc,label:"RUC",name:"ruc",placeholder:"Ruc del cliente",value:""},null,8,["onValueInput"]),(0,l.Wm)(u,{onFileSelected:i.updateImg},null,8,["onFileSelected"]),(0,l.Wm)(c,{onUpdatePaswoord:i.updatepassword,texto:"Contraseña",placeholder:"Ingrese contraseña"},null,8,["onUpdatePaswoord"]),(0,l.Wm)(c,{onUpdatePaswoord:i.updatepasswordRepeat,texto:"Confirmar contraseña",placeholder:"Repita su contraseña"},null,8,["onUpdatePaswoord"]),""!==i.msgValidacion?((0,l.wg)(),(0,l.iD)("p",{key:0,class:(0,_.C_)({"text-green-500 text-xs":"Las contraseñas coinciden"===i.msgValidacion,"text-red-400 text-xs":"Las contraseñas no coinciden"===i.msgValidacion})},(0,_.zw)(i.msgValidacion),3)):(0,l.kq)("",!0),(0,l._)("div",K,[(0,l._)("button",{class:(0,_.C_)(["dropdown-toggle bg-orange-400 flex justify-between items-center w-full rounded-lg text-white px-5 py-2 mt-2",{"bg-orange-500":i.mostrarUbicacion}]),onClick:a[0]||(a[0]=(0,t.iM)(((...e)=>i.toggleUbicacion&&i.toggleUbicacion(...e)),["prevent"]))},J,2),(0,l._)("div",{class:(0,_.C_)(["dropdown-menu mx-2 px-2 py-4 rounded-md bg-slate-200 transition-max-height duration-300",{"max-h-[500px]":i.mostrarUbicacion,"max-h-0":!i.mostrarUbicacion,"overflow-hidden":!i.mostrarUbicacion,"pt-0 pb-0":!i.mostrarUbicacion}])},[(0,l.Wm)(s,{onValueInput:i.saveDireccion,label:"Dirección",name:"direccion",placeholder:"Dirección del cliente"},null,8,["onValueInput"]),(0,l.Wm)(s,{onValueInput:i.saveCodigoDomicilioFiscal,label:"Codigo de domicilio fiscal",name:"codigodomicilio",placeholder:"Codigo de domicilio fiscal de la empresa"},null,8,["onValueInput"]),(0,l.Wm)(s,{onValueInput:i.saveUbigeo,label:"Ubigeo",name:"ubigeo",placeholder:"Ubigeo del cliente"},null,8,["onValueInput"])],2)]),(0,l._)("div",O,[(0,l._)("button",{class:(0,_.C_)(["dropdown-toggle bg-orange-400 flex justify-between items-center w-full rounded-lg text-white px-5 py-2 mt-2",{"bg-orange-500":i.mostrarContacto}]),onClick:a[1]||(a[1]=(0,t.iM)(((...e)=>i.toggleContacto&&i.toggleContacto(...e)),["prevent"]))},ee,2),(0,l._)("div",{class:(0,_.C_)(["dropdown-menu mx-2 px-2 py-4 rounded-md bg-slate-200 transition-max-height duration-300",{"max-h-[500px]":i.mostrarContacto,"max-h-0":!i.mostrarContacto,"overflow-hidden":!i.mostrarContacto,"pt-0 pb-0":!i.mostrarContacto}])},[(0,l.Wm)(s,{onValueInput:i.saveCorreo,label:"Correo",name:"correo",placeholder:"Correo del cliente"},null,8,["onValueInput"]),(0,l.Wm)(s,{onValueInput:i.saveTelefono,label:"Teléfono",name:"telefono",placeholder:"Teléfono del cliente"},null,8,["onValueInput"])],2)])]),(0,l._)("div",ae,[(0,l._)("button",{onClick:a[2]||(a[2]=(...e)=>i.closeModal&&i.closeModal(...e)),class:"bg-gray-400 hover:bg-gray-500 text-white text-sm p-2 px-4 rounded-xl transition duration-300"},"Cerrar"),(0,l._)("button",{onClick:a[3]||(a[3]=(...e)=>i.saveDatos&&i.saveDatos(...e)),class:"bg-blue-400 hover:bg-blue-500 text-white text-sm p-2 px-4 rounded-xl transition duration-300"},"Crear")])])])}var le=o(3455),te=o(8692);const ie=(0,l._)("label",{class:"block text-sm font-medium",for:"file_input"},"Cargar logo",-1),re={class:"flex items-center justify-center w-full"},ne={for:"dropzone-file",class:"flex flex-col items-center justify-center w-full border-2 text-gray-400 border-dashed rounded-lg cursor-pointer hover:bg-gray-100 bg-white border-gray-300 hover:border-gray-400"},se=(0,l._)("div",{class:"flex flex-col items-center justify-center pt-2 pb-3"},[(0,l._)("svg",{"aria-hidden":"true",class:"w-7 h-7 mb-1 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,l._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})]),(0,l._)("p",{class:"mb-1 text-xs"},"Dale click para cargar imagen")],-1),ue={key:0,class:"text-sm text-green-700"},ce=(0,l._)("i",{class:"fa-sharp fa-solid fa-circle-check"},null,-1);function de(e,a,o,t,i,r){return(0,l.wg)(),(0,l.iD)("div",null,[ie,(0,l._)("div",re,[(0,l._)("label",ne,[se,(0,l._)("input",{id:"dropzone-file",type:"file",class:"hidden",accept:"image/png",onChange:a[0]||(a[0]=(...e)=>r.handleFileSelect&&r.handleFileSelect(...e))},null,32)])]),""!==i.localNombreArchivo?((0,l.wg)(),(0,l.iD)("p",ue,[ce,(0,l.Uk)(" Imagen registrada: "+(0,_.zw)(i.localNombreArchivo),1)])):(0,l.kq)("",!0)])}var pe={props:{nombreArchivo:{type:String,default:""}},data(){return{localNombreArchivo:""}},mounted(){this.localNombreArchivo=this.nombreArchivo},watch:{nombreArchivo(e){this.localNombreArchivo=e}},methods:{handleFileSelect(e){const a=e.target.files[0];this.localNombreArchivo=a?a.name:"",this.$emit("file-selected",a)}}};const me=(0,z.Z)(pe,[["render",de]]);var ge=me,ve={name:"ModalCreate",components:{PasswordField:le.Z,LogoimgField:ge,ItemForm:te.Z},emits:["close-modal","save-datos"],setup(e,{emit:a}){const o=(0,d.iH)(null),l=(0,d.iH)(""),t=(0,d.iH)(""),i=(0,d.iH)(""),r=(0,d.iH)(""),n=(0,d.iH)(""),s=(0,d.iH)(""),u=(0,d.iH)(""),c=(0,d.iH)(""),p=(0,d.iH)(""),m=(0,d.iH)(""),g=(0,d.iH)(""),v=(0,d.iH)(""),b=(0,d.iH)(!1),x=(0,d.iH)(!1),f=()=>{b.value=!b.value},w=()=>{x.value=!x.value},h=e=>{l.value=e},_=e=>{t.value=e},C=e=>{i.value=e},y=e=>{m.value=e,Z()},U=e=>{o.value=e},I=e=>{r.value=e},E=e=>{n.value=e},M=e=>{s.value=e},k=e=>{p.value=e},D=e=>{u.value=e},V=e=>{c.value=e},H=()=>{a("close-modal")},W=()=>{a("save-datos",{usuario:l.value,empresa:t.value,password:i.value,logoImage:o.value,ubigeo:s.value,ruc:p.value,direccion:r.value,correo:u.value,telefono:c.value,domicilio_fiscal:n.value})},Z=()=>{i.value===m.value?g.value="Las contraseñas coinciden":g.value="Las contraseñas no coinciden"};return{logoImage:o,usuario:l,empresa:t,password:i,direccion:r,domiciliofiscal:n,ubigeo:s,correo:u,telefono:c,ruc:p,repeatpassword:m,msgValidacion:g,nombreArchivo:v,mostrarUbicacion:b,mostrarContacto:x,toggleUbicacion:f,toggleContacto:w,updateusuario:h,updatebusinnes:_,updatepassword:C,updatepasswordRepeat:y,updateImg:U,saveDireccion:I,saveCodigoDomicilioFiscal:E,saveUbigeo:M,saveRuc:k,saveCorreo:D,saveTelefono:V,closeModal:H,saveDatos:W,validatePassword:Z}}};const be=(0,z.Z)(ve,[["render",oe]]);var xe=be,fe=o(1968),we=o(4229),he=o(4050);const _e={class:"fixed inset-0 flex items-center justify-center z-[9999]"},Ce=(0,l._)("div",{class:"absolute inset-0 bg-black opacity-30 pointer-events-none"},null,-1),ye={class:"relative z-10 p-4 bg-white rounded-xl lg:min-w-[350px] lg:max-w-[450px] min-w-[340px] max-w-[350px]"},Ue={class:"p-2 text-gray-700 w-full h-full text-sm"},Ie=(0,l._)("h3",{class:"text-center font-bold text-lg"},"Editar cuenta",-1),Ee={class:"dropdown"},Me=(0,l._)("span",null,"Datos ubicación",-1),ke=(0,l._)("i",{class:"fa-solid fa-angle-down"},null,-1),De=[Me,ke],Ve={class:"dropdown"},He=(0,l._)("span",null,"Datos contacto",-1),We=(0,l._)("i",{class:"fa-solid fa-angle-down"},null,-1),Ze=[He,We],Ae={class:"btns flex gap-2 justify-center items-center pt-2"};function Fe(e,a,o,i,r,n){const s=(0,l.up)("ItemForm"),u=(0,l.up)("PasswordField");return(0,l.wg)(),(0,l.iD)("div",_e,[Ce,(0,l._)("div",ye,[(0,l._)("form",Ue,[Ie,(0,l.Wm)(s,{onValueInput:i.updateusuario,label:"Usuario",name:"usuario",id:"usuario",placeholder:"Ingrese un usuario",value:i.usuario},null,8,["onValueInput","value"]),(0,l.Wm)(s,{onValueInput:i.updatebusinnes,label:"Razón social",name:"empresa",id:"empresa",placeholder:"Ingrese el nombre de la empresa",value:i.empresa},null,8,["onValueInput","value"]),(0,l.Wm)(s,{onValueInput:i.saveRuc,label:"RUC",name:"ruc",placeholder:"Ruc del cliente",value:i.ruc},null,8,["onValueInput","value"]),(0,l.Wm)(u,{onUpdatePaswoord:i.updatepassword,texto:"Contraseña",placeholder:"Ingrese contraseña",valor:i.password},null,8,["onUpdatePaswoord","valor"]),(0,l._)("div",Ee,[(0,l._)("button",{class:(0,_.C_)(["dropdown-toggle bg-orange-400 flex justify-between items-center w-full rounded-lg text-white px-5 py-2 mt-2",{"bg-orange-500":i.mostrarUbicacion}]),onClick:a[0]||(a[0]=(0,t.iM)(((...e)=>i.toggleUbicacion&&i.toggleUbicacion(...e)),["prevent"]))},De,2),(0,l._)("div",{class:(0,_.C_)(["dropdown-menu mx-2 px-2 py-4 rounded-md bg-slate-200 transition-max-height duration-300",{"max-h-[500px]":i.mostrarUbicacion,"max-h-0":!i.mostrarUbicacion,"overflow-hidden":!i.mostrarUbicacion,"pt-0 pb-0":!i.mostrarUbicacion}])},[(0,l.Wm)(s,{onValueInput:i.saveDireccion,label:"Dirección",name:"direccion",placeholder:"Dirección del cliente",value:i.direccion},null,8,["onValueInput","value"]),(0,l.Wm)(s,{onValueInput:i.saveCodigoDomicilioFiscal,label:"Codigo de domicilio fiscal",name:"codigodomicilio",placeholder:"Codigo de domicilio fiscal de la empresa",value:i.domiciliofiscal},null,8,["onValueInput","value"]),(0,l.Wm)(s,{onValueInput:i.saveUbigeo,label:"Ubigeo",name:"ubigeo",placeholder:"Ubigeo del cliente",value:i.ubigeo},null,8,["onValueInput","value"])],2)]),(0,l._)("div",Ve,[(0,l._)("button",{class:(0,_.C_)(["dropdown-toggle bg-orange-400 flex justify-between items-center w-full rounded-lg text-white px-5 py-2 mt-2",{"bg-orange-500":i.mostrarContacto}]),onClick:a[1]||(a[1]=(0,t.iM)(((...e)=>i.toggleContacto&&i.toggleContacto(...e)),["prevent"]))},Ze,2),(0,l._)("div",{class:(0,_.C_)(["dropdown-menu mx-2 px-2 py-4 rounded-md bg-slate-200 transition-max-height duration-300",{"max-h-[500px]":i.mostrarContacto,"max-h-0":!i.mostrarContacto,"overflow-hidden":!i.mostrarContacto,"pt-0 pb-0":!i.mostrarContacto}])},[(0,l.Wm)(s,{onValueInput:i.saveCorreo,label:"Correo",name:"correo",placeholder:"Correo del cliente",value:i.correo},null,8,["onValueInput","value"]),(0,l.Wm)(s,{onValueInput:i.saveTelefono,label:"Teléfono",name:"telefono",placeholder:"Teléfono del cliente",value:i.telefono},null,8,["onValueInput","value"])],2)])]),(0,l._)("div",Ae,[(0,l._)("button",{onClick:a[2]||(a[2]=(...e)=>i.closeModal&&i.closeModal(...e)),class:"bg-gray-400 hover:bg-gray-500 text-white text-sm p-2 px-4 rounded-xl transition duration-300"},"Cancelar"),(0,l._)("button",{onClick:a[3]||(a[3]=(...e)=>i.saveDatos&&i.saveDatos(...e)),class:"bg-blue-400 hover:bg-blue-500 text-white text-sm p-2 px-4 rounded-xl transition duration-300"},"Aceptar")])])])}var Se={name:"ModalEditar",components:{PasswordField:le.Z,ItemForm:te.Z},emits:["cancelar-editar","aceptar-editar"],props:{idUsuario:String,idEmpresa:String},setup(e,{emit:a}){const o=(0,d.iH)(""),t=(0,d.iH)(""),i=(0,d.iH)(""),r=(0,d.iH)(""),n=(0,d.iH)(""),s=(0,d.iH)(""),u=(0,d.iH)(""),c=(0,d.iH)(""),p=(0,d.iH)(""),m=(0,d.iH)(""),g=(0,d.iH)(!1),v=(0,d.iH)(!1),b=()=>{g.value=!g.value},x=()=>{v.value=!v.value},f=e=>{o.value=e},h=e=>{t.value=e},_=e=>{i.value=e},C=e=>{r.value=e},y=e=>{n.value=e},U=e=>{s.value=e},I=e=>{p.value=e},E=e=>{u.value=e},M=e=>{c.value=e},k=()=>{a("cancelar-editar")},D=()=>{a("aceptar-editar",{usuario:o.value,empresa:t.value,password:i.value,ubigeo:s.value,ruc:p.value,direccion:r.value,correo:u.value,telefono:c.value,domicilio_fiscal:n.value})};return(0,l.bv)((()=>{w(e.idUsuario,e.idEmpresa).then((e=>{o.value=e.data.usuario[0].usuario,t.value=e.data.usuario[0].nombre,i.value=e.data.usuario[0].clave,s.value=e.data.usuario[0].ubigeo,r.value=e.data.usuario[0].direccion,u.value=e.data.usuario[0].correo_electronico,c.value=e.data.usuario[0].telefono,n.value=e.data.usuario[0].codigo_del_domicilio_fiscal,p.value=e.data.usuario[0].numero_documento}))})),{usuario:o,empresa:t,password:i,direccion:r,domiciliofiscal:n,ubigeo:s,correo:u,telefono:c,ruc:p,nombreArchivo:m,mostrarUbicacion:g,mostrarContacto:v,toggleUbicacion:b,toggleContacto:x,updateusuario:f,updatebusinnes:h,updatepassword:_,saveDireccion:C,saveCodigoDomicilioFiscal:y,saveUbigeo:U,saveRuc:I,saveCorreo:E,saveTelefono:M,closeModal:k,saveDatos:D}}};const je=(0,z.Z)(Se,[["render",Fe]]);var Te=je,ze={name:"AdminCuentas",components:{TableUsers:$,ModalCreate:xe,ModalDelete:he.Z,ModaError:fe.Z,ModalEditar:Te,ConfirmEdit:we.Z},setup(){const e=(0,d.iH)([]),a=(0,d.iH)(!1),o=(0,d.iH)(!1),t=(0,d.iH)(!1),i=(0,d.iH)(!1),r=(0,d.iH)(""),n=(0,d.iH)(""),s=(0,d.iH)(!1);(0,l.bv)((()=>{v(p.Z.state.codempresa,p.Z.state.tipousuario).then((a=>{e.value=a.data.usuarios}))}));const u=()=>{a.value=!0},c=()=>{a.value=!1},m=()=>{t.value=!1},g=()=>{s.value=!1,window.location.reload()},w=e=>{const o=e.usuario,l=e.empresa,i=e.password,r=e.ubigeo,n=e.direccion,s=e.correo,u=e.ruc,c=e.telefono,d=e.domicilio_fiscal,m=e.logoImage;""==o||""==l||""==i||""==r||""==n||""==s||""==c||""==d||""==u?(a.value=!1,t.value=!0):b(p.Z.state.codempresa,p.Z.state.tipousuario,o,l,i,r,n,s,c,d,u).then((e=>{"C000"==p.Z.state.codempresa&&"1"==p.Z.state.tipousuario&&(console.log(e.data.codempresa),x(m,e.data.codempresa)),a.value=!1,window.location.reload()}))},_=(e,a)=>{r.value=e,n.value=a,o.value=!0},C=()=>{f(r.value,n.value,p.Z.state.tipousuario).then((e=>{console.log(e),window.location.reload(),o.value=!1,r.value="",n.value=""}))},y=()=>{o.value=!1,r.value="",n.value=""},U=(e,a)=>{r.value=e,n.value=a,i.value=!0},I=()=>{i.value=!1},E=e=>{const a=e.usuario,o=e.empresa,l=e.password,u=e.ubigeo,c=e.direccion,d=e.correo,p=e.ruc,m=e.telefono,g=e.domicilio_fiscal;""==a||""==o||""==l||""==u||""==c||""==d||""==m||""==g||""==p?(i.value=!1,t.value=!0):h(r.value,n.value,a,o,l,u,c,d,m,g,p).then((e=>{console.log(e),s.value=!0,i.value=!1}))};return{ListUsers:e,openModalV:a,openModal:u,closeModal:c,crearCuenta:w,confirmDelete:o,eliminarUsuario:_,aceptarEliminar:C,cancelarEliminar:y,closeModalError:m,cancelarEditar:I,openModalError:t,openModalEdit:i,editarUsuario:U,idUsuarioSet:r,idEmpresaSet:n,aceptarEditar:E,openSuccessEdit:s,closeSuccessEdit:g}}};const Re=(0,z.Z)(ze,[["render",c],["__scopeId","data-v-6809a8c2"]]);var $e=Re}}]);
//# sourceMappingURL=670.c2ca5fd1.js.map