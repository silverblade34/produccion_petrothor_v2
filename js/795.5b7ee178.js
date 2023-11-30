"use strict";(self["webpackChunklogin_vue"]=self["webpackChunklogin_vue"]||[]).push([[795],{7278:function(e,t,a){a.d(t,{Z:function(){return T}});var l=a(3396),s=a(7139);const n={class:"overflow-x-auto"},o={class:"inline-block min-w-full overflow-hidden"},r={class:"table-container"},c={class:"min-w-full"},d={key:0},i=["colspan"],u={class:"border px-4 py-2 text-xs"},p={class:"border px-4 py-2 text-xs"},x={class:"border px-4 py-2 text-xs"},m={class:"border px-4 py-2 text-xs"},g={class:"border px-4 py-2 text-xs"},h={class:"border px-4 py-2 text-xs"},b={class:"border px-4 py-2 text-xs"},v={class:"border px-4 py-2 text-xs"},f={class:"border px-4 py-2 text-xs"},w={class:"border px-4 py-2 text-xs"},_={class:"border px-4 py-2 text-xs"},y={class:"border px-4 py-2 text-xs"},P={class:"border px-4 py-2 text-xs"},k={class:"border px-4 py-2 text-xs"},D={class:"border px-4 py-2 text-xs"},C={class:"border px-4 py-2 text-xs flex items-center"},L=["href"],H=(0,l._)("i",{class:"fa-solid fa-location-dot"},null,-1),z=[H],F={class:"container-nav-pages mt-4"},I=["disabled"],V={class:"mx-2"},S=["disabled"];function Z(e,t,a,H,Z,A){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",n,[(0,l._)("div",o,[(0,l._)("div",r,[(0,l._)("table",c,[(0,l._)("thead",null,[(0,l._)("tr",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.headerList,(e=>((0,l.wg)(),(0,l.iD)("th",{class:"border px-4 py-2 text-xs",key:e},(0,s.zw)(e),1)))),128))])]),(0,l._)("tbody",null,[0===A.paginatedItems.length?((0,l.wg)(),(0,l.iD)("tr",d,[(0,l._)("td",{class:"border px-4 py-4 text-xs text-center",colspan:a.headerList.length},"No se encontró ningún dato para esta tabla",8,i)])):((0,l.wg)(!0),(0,l.iD)(l.HY,{key:1},(0,l.Ko)(A.paginatedItems,((e,t)=>((0,l.wg)(),(0,l.iD)("tr",{key:t},[(0,l._)("td",u,(0,s.zw)(e.idticket),1),(0,l._)("td",p,(0,s.zw)(e.codcisterna),1),(0,l._)("td",x,(0,s.zw)(e.nombre),1),(0,l._)("td",m,(0,s.zw)(e.cliente),1),(0,l._)("td",g,(0,s.zw)(e.detalle),1),(0,l._)("td",h,(0,s.zw)(e.conductor),1),(0,l._)("td",b,(0,s.zw)(e.equipo),1),(0,l._)("td",v,(0,s.zw)(e.facturacion),1),(0,l._)("td",f,(0,s.zw)(e.fecha),1),(0,l._)("td",w,(0,s.zw)(e.galones),1),(0,l._)("td",_,(0,s.zw)(e.horometro),1),(0,l._)("td",y,(0,s.zw)(e.odometro),1),(0,l._)("td",P,(0,s.zw)(e.punto),1),(0,l._)("td",k,(0,s.zw)(e.recibido),1),(0,l._)("td",D,(0,s.zw)(e.guia),1),(0,l._)("td",C,[(0,l._)("a",{href:A.generateGoogleMapsLink(e.latitud,e.longitud),target:"_blank",class:"p-3 rounded-xl bg-orange-400 text-white h-[50%]"},z,8,L)])])))),128))])])])])]),(0,l._)("div",F,[(0,l._)("button",{class:"bg-sky-500 hover:bg-sky-700 text-white text-xs font-bold py-2 px-4 rounded-lg transition duration-300",onClick:t[0]||(t[0]=(...e)=>A.previousPage&&A.previousPage(...e)),disabled:1===Z.currentPage}," Anterior ",8,I),(0,l._)("span",V," Página "+(0,s.zw)(Z.currentPage)+" de "+(0,s.zw)(A.totalPages),1),(0,l._)("button",{class:"bg-sky-500 hover:bg-sky-700 text-white text-xs font-bold py-2 px-4 rounded-lg transition duration-300",onClick:t[1]||(t[1]=(...e)=>A.nextPage&&A.nextPage(...e)),disabled:Z.currentPage===A.totalPages}," Siguiente ",8,S)])],64)}var A={props:{data:Array,headerList:Array},data(){return{itemsPerPage:10,currentPage:1}},computed:{totalPages(){return Math.ceil(this.data.length/this.itemsPerPage)},paginatedItems(){const e=(this.currentPage-1)*this.itemsPerPage,t=e+this.itemsPerPage;return this.data.slice(e,t)}},methods:{generateGoogleMapsLink(e,t){return`https://www.google.com/maps/search/?api=1&query=${e},${t}&zoom=20`},previousPage(){this.currentPage>1&&this.currentPage--},nextPage(){this.currentPage<this.totalPages&&this.currentPage++}}},E=a(89);const R=(0,E.Z)(A,[["render",Z]]);var T=R},7795:function(e,t,a){a.r(t),a.d(t,{default:function(){return H}});var l=a(3396),s=a(9242);const n=e=>((0,l.dD)("data-v-87b0957c"),e=e(),(0,l.Cn)(),e),o={class:"min-h-full w-full pb-[5rem] lg:pb-[2rem]"},r=n((()=>(0,l._)("h3",{class:"title-vista text-2xl font-bold mb-6"},"Reportes",-1))),c={class:"w-full bg-white p-3 rounded-lg"},d={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-3 mb-6"},i=n((()=>(0,l._)("div",{class:"col-span-2 md:col-span-1 lg:col-span-1 flex items-center justify-center"},[(0,l._)("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-auto rounded-full"}," Buscar ")],-1))),u={class:"bg-white p-4 rounded-lg mt-5 mb-5"},p={key:0,class:"overflay"},x=n((()=>(0,l._)("span",{class:"loader"},null,-1))),m=[x];function g(e,t,a,n,x,g){const h=(0,l.up)("SelectForm"),b=(0,l.up)("InputDate"),v=(0,l.up)("DataTable");return(0,l.wg)(),(0,l.iD)("section",o,[r,(0,l._)("section",null,[(0,l._)("div",c,[(0,l._)("form",{onSubmit:t[4]||(t[4]=(0,s.iM)(((...t)=>e.obtenerDatosFormulario&&e.obtenerDatosFormulario(...t)),["prevent"])),class:"w-full mt-3"},[(0,l._)("div",d,[(0,l.Wm)(h,{name:"Cliente",options:e.ListselectCliente,modelValue:e.selectedCliente,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedCliente=t),onSelected:e.handleClienteSelected,class:"col-span-2 md:col-span-1 lg:col-span-2 text-sm px-3 mb-4 md:mb-0"},null,8,["options","modelValue","onSelected"]),(0,l.Wm)(h,{name:"Cisterna",options:e.ListselectCisterna,modelValue:e.selectedCisterna,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selectedCisterna=t),onSelected:e.handleCisternaSelected,class:"col-span-2 md:col-span-1 lg:col-span-2 text-sm px-3 mb-4 md:mb-0"},null,8,["options","modelValue","onSelected"]),(0,l.Wm)(b,{name:"Fecha desde",value:e.fechaDesde,modelValue:e.fechaDesde,"onUpdate:modelValue":t[2]||(t[2]=t=>e.fechaDesde=t),onInput:e.handleFechaDesdeInput,class:"col-span-2 md:col-span-1 lg:col-span-2 text-sm"},null,8,["value","modelValue","onInput"]),(0,l.Wm)(b,{name:"Fecha hasta",value:e.fechaHasta,modelValue:e.fechaHasta,"onUpdate:modelValue":t[3]||(t[3]=t=>e.fechaHasta=t),onInput:e.handleFechaHastaInput,class:"col-span-2 md:col-span-1 lg:col-span-2 text-sm"},null,8,["value","modelValue","onInput"]),i])],32)])]),(0,l._)("section",u,[(0,l._)("button",{onClick:t[5]||(t[5]=(...t)=>e.exportarExcel&&e.exportarExcel(...t)),class:"btn bg-lime-600 text-white p-3 text-sm rounded-full hover:bg-lime-700 transition duration-300 mb-3"}," Exportar excel "),(0,l.Wm)(v,{data:e.data,headerList:e.headerList,class:"overflow-x-scroll"},null,8,["data","headerList"])]),e.buscandoDataReportes?((0,l.wg)(),(0,l.iD)("div",p,m)):(0,l.kq)("",!0)])}var h=a(4870),b=a(2815),v=a(3975),f=a(7278),w=a(4173),_=a(8522),y=a(4239),P=(0,l.aZ)({name:"ReportesView",components:{DataTable:f.Z,SelectForm:w.Z,InputDate:_.Z},setup(){const e=(0,h.iH)([]),t=(0,h.iH)([]),a=(0,h.iH)(""),s=(0,h.iH)(""),n=(0,h.iH)(""),o=(0,h.iH)(""),r=(0,h.iH)(!1),c=(0,h.iH)([]),d=y.Z.state.codempresa,i=y.Z.state.codcliente;(0,l.bv)((()=>{(0,b.i)(d,i).then((a=>{e.value=k(a.data.clientes),t.value=D(a.data.cisternas)}))}));const u=(0,h.iH)(["Ticket","Cisterna","Nombre","Cliente","Detalle","Conductor","Equipo","Facturación","Fecha","Galones","Horometro","Odometro","Punto","Recibido por","Guia","Ubicación"]),p=e=>{a.value=e},x=e=>{s.value=e},m=e=>{n.value=e.target.value},g=e=>{o.value=e.target.value},f=()=>{r.value=!0,""==a.value&&(a.value="ALL"),""==s.value&&(s.value="ALL"),(0,b.d)(a.value,s.value,n.value,o.value,d).then((e=>{c.value=e.data.data})).finally((()=>{r.value=!1}))},w=()=>{r.value=!0;const e={cliente:a.value,cisterna:s.value,fechaDesde:n.value,fechaHasta:o.value};(0,v.F)(e,d).then((e=>{console.log(e)})).catch((e=>{console.error("Error al exportar a Excel:",e)})).finally((()=>{r.value=!1}))};return{buscandoDataReportes:r,ListselectCliente:e,ListselectCisterna:t,headerList:u,data:c,selectedCliente:a,selectedCisterna:s,fechaDesde:n,fechaHasta:o,handleClienteSelected:p,handleCisternaSelected:x,handleFechaDesdeInput:m,handleFechaHastaInput:g,obtenerDatosFormulario:f,exportarExcel:w}}});function k(e){const t=e.map((e=>({key:e.codcliente,name:e.cliente})));return t.unshift({key:"ALL",name:"Todos"}),t}function D(e){const t=e.map((e=>({key:e.codcisterna,name:e.codcisterna})));return t.unshift({key:"ALL",name:"Todos"}),t}var C=a(89);const L=(0,C.Z)(P,[["render",g],["__scopeId","data-v-87b0957c"]]);var H=L}}]);
//# sourceMappingURL=795.5b7ee178.js.map