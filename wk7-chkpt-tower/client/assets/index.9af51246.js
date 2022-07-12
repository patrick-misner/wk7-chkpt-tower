import{r as K,c as $,a as g,o as d,b as u,d as t,e as h,w as x,F as Y,f as S,u as A,t as p,g as w,n as O,S as D,h as W,i as Q,M as P,j as b,v as E,k as G,l as Z,m as X,p as J,q as ee,s as te,x as oe,y as N,z as L,A as M,B as ne}from"./vendor.4eb43872.js";const se=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(r){if(r.ep)return;r.ep=!0;const c=o(r);fetch(r.href,c)}};se();const i=K({user:{},account:{},events:[],activeEvent:{},comments:[],tickets:[]});var f=(s,e)=>{for(const[o,n]of e)s[o]=n;return s};const ae={name:"App",setup(){return{appState:$(()=>i)}}},re=t("header",null,null,-1),ce={class:"container-fluid"},ie={class:"row"},le={class:"col-md-2 order-md-1 bg-dark"},de={class:"col-md-10 order-md-0 bg-dark vh-100"},ue=S(" Create Event "),_e=t("footer",null,null,-1);function ve(s,e,o,n,r,c){const a=g("Navbar"),m=g("router-view"),y=g("EventForm"),H=g("Modal");return d(),u(Y,null,[re,t("main",null,[t("div",ce,[t("div",ie,[t("div",le,[h(a)]),t("div",de,[h(m)])])])]),h(H,{id:"event-modal"},{header:x(()=>[ue]),body:x(()=>[h(y)]),_:1}),_e],64)}var me=f(ae,[["render",ve]]);const pe={props:{towerEvent:{type:Object,required:!0}},setup(s){const e=A();return{selectEvent(){e.push({name:"EventDetails",params:{id:s.towerEvent.id}})}}}},ge={class:"col-md-3"},he={class:"event-card"},be={class:"text-end"},fe={key:0,class:"bg-danger text-light text-shadow text-center"},Ee=t("b",null,"Event is Cancelled",-1),ye=[Ee],we={key:1,class:"bg-danger text-light text-shadow text-center"},ke=t("b",null,"Event is sold out",-1),xe=[ke];function Ce(s,e,o,n,r,c){return d(),u("div",ge,[t("div",{onClick:e[0]||(e[0]=(...a)=>n.selectEvent&&n.selectEvent(...a)),class:"bg-secondary elevation-2 rounded text-light m-3 p-2 wrapper selectable grow",style:O(`background-image: url('${o.towerEvent.coverImg}'); background-size: cover; overflow: hidden;`)},[t("div",he,[t("div",null,[t("span",null,[t("b",null,p(o.towerEvent.name),1)])]),t("div",null,[t("span",null,[t("b",null,p(o.towerEvent.location),1)])]),t("div",null,[t("span",null,[t("b",null,p(o.towerEvent.startDate),1)])]),t("div",be,[t("span",null,[t("b",null,p(o.towerEvent.capacity)+" spots left",1)])]),o.towerEvent.isCanceled?(d(),u("div",fe,ye)):w("",!0),o.towerEvent.capacity==0?(d(),u("div",we,xe)):w("",!0)])],4)])}var Te=f(pe,[["render",Ce]]),$e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Te});class I{static async confirm(e="Are you sure?",o="You won't be able to revert this!",n="warning",r="Yes, delete it!"){try{return!!(await D.fire({title:e,text:o,icon:n,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:r})).isConfirmed}catch{return!1}}static toast(e="Warning!",o="warning",n="top-end",r=3e3,c=!0){D.fire({title:e,icon:o,position:n,timer:r,timerProgressBar:c,toast:!0,showConfirmButton:!1})}static error(e){var o;if(e.isAxiosError){const{response:n}=e;this.toast(((o=n.data.error)==null?void 0:o.message)||n.data.message,"error")}else this.toast(e.message||e,"error")}static success(e="Success!"){this.toast(e,"success")}}const U=window.location.origin.includes("localhost"),F=U?"http://localhost:3000":"",Se="dev-in-9pjrc.us.auth0.com",Ae="https://patrickdev.com",Ie="KCkMZ4ZIRzme4LvLXEQoEorQQItsONAx";function k(s,e){if(U)console[s](`[${s}] :: ${new Date().toLocaleTimeString()} :: `,...e);else{switch(s){case"log":case"assert":return}console[s](`[${s}] :: ${new Date().toLocaleTimeString()} :: `,...e)}}const l={log(){k("log",arguments)},error(){k("error",arguments)},warn(){k("warn",arguments)},assert(){k("assert",arguments)},trace(){k("trace",arguments)}},_=W.create({baseURL:F,timeout:8e3});class Oe{async getEvents(e=""){l.log("hit the service");const o=await _.get("api/events"+e);l.log("get events",o.data),i.events=o.data}async getUserEvents(e){const o=await _.get("api/events/");i.events=o.data,i.events=i.events.filter(n=>n.creatorId==e),l.log("get user events service",o.data)}async getEvent(e){const o=await _.get("api/events/"+e);l.log("get event service",o.data),i.activeEvent=o.data}async cancelEvent(e){e.isCanceled=!0;const o=await _.delete("api/events/"+e.id);l.log("is cancelled?",o.data)}async createEvent(e){const o=await _.post("api/events",e);l.log("create even in service",o.data),i.activeEvent=o.data}}const De=new Oe,Pe={setup(s){const e=Q({}),o=A();return{towerEvent:e,async createEvent(){try{await De.createEvent(e.value),P.getOrCreateInstance(document.getElementById("event-modal")).hide(),o.push({name:"EventDetails",params:{id:i.activeEvent.id}}),I.toast("event successfully created!","success"),e.value={}}catch(n){l.error(n),I.toast(n.message,"error")}}}}},Ne={class:"col-12"},Le={class:"mb-3"},Me=t("label",{for:"exampleFormControlInput1",class:"form-label"},"Event Name",-1),Ue={class:"col-12"},Fe={class:"mb-3"},Re=t("label",{for:"exampleFormControlTextarea1",class:"form-label"},"Event Description",-1),Ve={class:"col-12"},je={class:"mb-3"},qe=t("label",{for:"exampleFormControlInput1",class:"form-label"},"ImgUrl",-1),ze={class:"col-12"},Be={class:"mb-3"},He=t("label",{for:"exampleFormControlInput1",class:"form-label"},"Event Date",-1),Ke={class:"col-12"},Ye={class:"mb-3"},We=t("label",{for:"exampleFormControlInput1",class:"form-label"},"Location",-1),Qe={class:"col-12"},Ge={class:"mb-3"},Ze=t("label",{for:"exampleFormControlInput1",class:"form-label"},"Capacity",-1),Xe={class:"col-12"},Je={class:"mb-3"},et=X('<option selected>Select Type</option><option value="concert">Concert</option><option value="convention">Convention</option><option value="sport">Sport</option><option value="digital">Digital</option>',5),tt=[et],ot=t("div",{class:"col-12"},[t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close "),t("button",{type:"submit",class:"btn btn-primary"},"Create")])],-1);function nt(s,e,o,n,r,c){return d(),u("form",{onSubmit:e[7]||(e[7]=Z((...a)=>n.createEvent&&n.createEvent(...a),["prevent"]))},[t("div",Ne,[t("div",Le,[Me,b(t("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>n.towerEvent.name=a),type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"Event name..."},null,512),[[E,n.towerEvent.name]])])]),t("div",Ue,[t("div",Fe,[Re,b(t("textarea",{"onUpdate:modelValue":e[1]||(e[1]=a=>n.towerEvent.description=a),class:"form-control",id:"exampleFormControlTextarea1",placeholder:"Event description...",rows:"3"},null,512),[[E,n.towerEvent.description]])])]),t("div",Ve,[t("div",je,[qe,b(t("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>n.towerEvent.coverImg=a),type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"Img Url..."},null,512),[[E,n.towerEvent.coverImg]])])]),t("div",ze,[t("div",Be,[He,b(t("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>n.towerEvent.startDate=a),type:"date",class:"form-control",id:"exampleFormControlInput1"},null,512),[[E,n.towerEvent.startDate]])])]),t("div",Ke,[t("div",Ye,[We,b(t("input",{"onUpdate:modelValue":e[4]||(e[4]=a=>n.towerEvent.location=a),type:"text",class:"form-control",id:"exampleFormControlInput1"},null,512),[[E,n.towerEvent.location]])])]),t("div",Qe,[t("div",Ge,[Ze,b(t("input",{"onUpdate:modelValue":e[5]||(e[5]=a=>n.towerEvent.capacity=a),type:"number",class:"form-control",id:"exampleFormControlInput1"},null,512),[[E,n.towerEvent.capacity]])])]),t("div",Xe,[t("div",Je,[b(t("select",{"onUpdate:modelValue":e[6]||(e[6]=a=>n.towerEvent.type=a),class:"form-select","aria-label":"Default select example"},tt,512),[[G,n.towerEvent.type]])])]),ot],32)}var st=f(Pe,[["render",nt]]),at=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:st});const rt="modulepreload",R={},ct="/",C=function(e,o){return!o||o.length===0?e():Promise.all(o.map(n=>{if(n=`${ct}${n}`,n in R)return;R[n]=!0;const r=n.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${c}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":rt,r||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),r)return new Promise((m,y)=>{a.addEventListener("load",m),a.addEventListener("error",y)})})).then(()=>e())};function it(s){switch(s){case"./pages/AboutPage.vue":return C(()=>import("./AboutPage.71e4f0d1.js"),["assets/AboutPage.71e4f0d1.js","assets/vendor.4eb43872.js"]);case"./pages/AccountPage.vue":return C(()=>import("./AccountPage.d017b616.js"),["assets/AccountPage.d017b616.js","assets/AccountPage.e29294e6.css","assets/vendor.4eb43872.js"]);case"./pages/EventPage.vue":return C(()=>import("./EventPage.c6ab9bad.js"),["assets/EventPage.c6ab9bad.js","assets/EventPage.2ce75c64.css","assets/vendor.4eb43872.js"]);case"./pages/HomePage.vue":return C(()=>import("./HomePage.9be15826.js"),["assets/HomePage.9be15826.js","assets/HomePage.9ad25e97.css","assets/vendor.4eb43872.js"]);default:return new Promise(function(e,o){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}function T(s){return()=>it(`./pages/${s}.vue`)}const lt=[{path:"/",name:"Home",component:T("HomePage")},{path:"/about",name:"About",component:T("AboutPage")},{path:"/account",name:"Account",component:T("AccountPage"),beforeEnter:te},{path:"/event/:id",name:"EventDetails",component:T("EventPage")}],V=J({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:ee(),routes:lt});class dt{async getAccount(){try{const e=await _.get("/account");i.account=e.data}catch(e){l.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}}const ut=new dt,_t={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class vt{constructor(e=!1,o=F){}on(e,o){var n;return(n=this.socket)==null||n.on(e,o.bind(this)),this}onConnected(e){l.log("[SOCKET_CONNECTION]",e),this.connected=!0,this.playback()}onAuthenticated(e){l.log("[SOCKET_AUTHENTICATED]",e),this.authenticated=!0,this.playback()}authenticate(e){var o;(o=this.socket)==null||o.emit(_t.authenticate,e)}onError(e){l.error("[SOCKET_ERROR]",e)}enqueue(e,o){l.log("[ENQUEING_ACTION]",{action:e,payload:o}),this.queue.push({action:e,payload:o})}playback(){l.log("[SOCKET_PLAYBACK]");const e=[...this.queue];this.queue=[],e.forEach(o=>{this.emit(o.action,o.payload)})}emit(e,o=void 0){if(this.requiresAuth&&!this.authenticated)return this.enqueue(e,o);if(!this.connected)return this.enqueue(e,o);this.socket.emit(e,o)}}class mt extends vt{constructor(){super();this.on("error",this.onError)}onError(e){I.toast(e.message,"error")}}const j=new mt,v=oe({domain:Se,clientId:Ie,audience:Ae,useRefreshTokens:!0,onRedirectCallback:s=>{V.push(s&&s.targetUrl?s.targetUrl:window.location.pathname)}});v.on(v.AUTH_EVENTS.AUTHENTICATED,async function(){_.defaults.headers.authorization=v.bearer,_.interceptors.request.use(pt),i.user=v.user,await ut.getAccount(),j.authenticate(v.bearer)});async function pt(s){if(!v.isAuthenticated)return s;const e=v.identity.exp*1e3,o=e<Date.now(),n=e<Date.now()+1e3*60*60*12;return o?await v.loginWithPopup():n&&(await v.getTokenSilently(),_.defaults.headers.authorization=v.bearer,j.authenticate(v.bearer)),s}const gt={setup(){return{user:$(()=>i.user),account:$(()=>i.account),async login(){v.loginWithPopup()},async logout(){v.logout({returnTo:window.location.origin})}}}},q=s=>(N("data-v-f7b5cf20"),s=s(),L(),s),ht={class:"navbar-text"},bt={key:1,class:"dropdown my-2 my-lg-0"},ft={class:"dropdown-toggle selectable","data-bs-toggle":"dropdown","aria-expanded":"false",id:"authDropdown"},Et={key:0},yt=["src"],wt={class:"mx-3 text-success lighten-30"},kt={class:"dropdown-menu p-0 list-group w-100","aria-labelledby":"authDropdown"},xt=q(()=>t("div",{class:"list-group-item list-group-item-action hoverable"}," Manage Account ",-1)),Ct=q(()=>t("i",{class:"mdi mdi-logout"},null,-1)),Tt=S(" logout "),$t=[Ct,Tt];function St(s,e,o,n,r,c){const a=g("router-link");return d(),u("span",ht,[n.user.isAuthenticated?(d(),u("div",bt,[t("div",ft,[n.account.picture?(d(),u("div",Et,[t("img",{src:n.account.picture,alt:"account photo",height:"40",class:"rounded"},null,8,yt),t("span",wt,p(n.account.name),1)])):w("",!0)]),t("div",kt,[h(a,{to:{name:"Account"}},{default:x(()=>[xt]),_:1}),t("div",{class:"list-group-item list-group-item-action hoverable text-danger",onClick:e[1]||(e[1]=(...m)=>n.logout&&n.logout(...m))},$t)])])):(d(),u("button",{key:0,class:"btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0",onClick:e[0]||(e[0]=(...m)=>n.login&&n.login(...m))}," Login "))])}var At=f(gt,[["render",St],["__scopeId","data-v-f7b5cf20"]]),It=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:At});const Ot={},Dt={class:"modal fade",id:"modelId",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},Pt={class:"modal-dialog",role:"document"},Nt={class:"modal-content"},Lt={class:"modal-header"},Mt=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Ut={class:"modal-body"},Ft={class:"container-fluid"},Rt={class:"row"};function Vt(s,e,o,n,r,c){return d(),u("div",Dt,[t("div",Pt,[t("div",Nt,[t("div",Lt,[M(s.$slots,"header"),Mt]),t("div",Ut,[t("div",Ft,[t("div",Rt,[M(s.$slots,"body")])])])])])])}var jt=f(Ot,[["render",Vt]]),qt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:jt});const zt={setup(){return{createModal(){P.getOrCreateInstance(document.getElementById("event-modal")).show()}}}},z=s=>(N("data-v-638884bf"),s=s(),L(),s),Bt={class:"navbar navbar-expand-lg navbar-dark bg-dark"},Ht=z(()=>t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1)),Kt={class:"collapse navbar-collapse",id:"navbarText"},Yt={class:"navbar-nav me-auto flex-column"},Wt=z(()=>t("li",null,[t("img",{src:"https://i.imgur.com/hESF39n.png",class:"img-fluid py-3",alt:""})],-1)),Qt=S(" Home ");function Gt(s,e,o,n,r,c){const a=g("Login"),m=g("router-link");return d(),u("nav",Bt,[Ht,t("div",Kt,[t("ul",Yt,[Wt,t("li",null,[h(a)]),t("li",null,[h(m,{to:{name:"Home"},class:"btn text-success lighten-30 selectable text-uppercase pt-5"},{default:x(()=>[Qt]),_:1})]),t("li",null,[t("button",{onClick:e[0]||(e[0]=(...y)=>n.createModal&&n.createModal(...y)),class:"btn text-success lighten-30 selectable text-uppercase"},"Create Event")])])])])}var Zt=f(zt,[["render",Gt],["__scopeId","data-v-638884bf"]]),Xt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Zt});class Jt{async getTickets(e=""){const o=await _.get("api/events/"+e+"/tickets");l.log("get tickets service res",o.data),i.tickets=o.data}async getTicket(e){const o=await _.post("api/tickets",e);i.tickets.push(o.data),i.activeEvent.capacity--}async getUserTickets(e){const o=await _.get("account/tickets");i.tickets=o.data,l.log("getusertickets",o.data),i.tickets=i.tickets.filter(n=>n.event.isCanceled==!1)}async cancelTicket(e){await _.delete("api/tickets/"+e),i.tickets=i.tickets.filter(o=>o.id!=e)}}const eo=new Jt;const to={props:{ticket:{type:Object,required:!0}},setup(s){const e=A();return{selectEvent(){e.push({name:"EventDetails",params:{id:s.ticket.event.id}})},async cancelTicket(){await eo.cancelTicket(s.ticket.id)}}}},oo={class:"col-md-3"},no={class:"event-card"},so={class:"text-end"},ao={key:0,class:"bg-danger text-light"},ro={key:0,class:"d-flex justify-content-center"};function co(s,e,o,n,r,c){return d(),u("div",oo,[t("div",{onClick:e[0]||(e[0]=(...a)=>n.selectEvent&&n.selectEvent(...a)),class:"bg-secondary elevation-2 rounded text-light m-3 p-2 wrapper selectable grow",style:O(`background-image: url('${o.ticket.event.coverImg}'); background-size: cover; overflow: hidden;`)},[t("div",no,[t("div",null,[t("span",null,p(o.ticket.event.name),1)]),t("div",null,[t("span",null,p(o.ticket.event.location),1)]),t("div",null,[t("span",null,p(o.ticket.event.startDate),1)]),t("div",so,[t("span",null,p(o.ticket.event.capacity)+" spots left",1)]),o.ticket.event.isCanceled?(d(),u("div",ao," Event is Cancelled ")):w("",!0)])],4),o.ticket.event.isCanceled?w("",!0):(d(),u("div",ro,[t("button",{onClick:e[1]||(e[1]=(...a)=>n.cancelTicket&&n.cancelTicket(...a)),type:"button",class:"btn btn-danger"},"Cancel Ticket")]))])}var io=f(to,[["render",co]]),lo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:io});function uo(s){Object.entries({"./components/Event.vue":$e,"./components/EventForm.vue":at,"./components/Login.vue":It,"./components/Modal.vue":qt,"./components/Navbar.vue":Xt,"./components/Ticket.vue":lo}).forEach(([o,n])=>{const r=n.name||o.substr(o.lastIndexOf("/")+1).replace(/\.\w+$/,"");s.component(r,n.default)})}const B=ne(me);uo(B);B.use(V).mount("#app");export{i as A,I as P,io as T,f as _,_ as a,De as e,l,eo as t};