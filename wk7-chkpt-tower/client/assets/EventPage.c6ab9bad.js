import{E as x,i as w,G as p,c as _,o as c,b as i,d as e,n as k,t as r,g as m,F as u,C as b,l as C,j as E,v as j}from"./vendor.4eb43872.js";import{l as v,a as g,A as a,_ as S,P as l,t as y,e as f}from"./index.9af51246.js";class T{async getComments(n){v.log("get commets service hit");const s=await g.get("api/events/"+n+"/comments");v.log("comments service res",s.data),a.comments=s.data}async postComment(n){const s=await g.post("api/comments",n);a.comments.unshift(s.data)}async deleteComment(n){await g.delete("api/comments/"+n),a.comments=a.comments.filter(s=>s.id!=n)}}const h=new T;const D={setup(){const d=x(),n=w({});return p(async()=>{try{d.name=="EventDetails"&&(await f.getEvent(d.params.id),await h.getComments(d.params.id),await y.getTickets(d.params.id))}catch(s){v.error(s),l.toast(s.message,"error")}}),{event:_(()=>a.activeEvent),comments:_(()=>a.comments),account:_(()=>a.account),tickets:_(()=>a.tickets),hasTicket:_(()=>a.tickets.find(s=>s.accountId==a.account.id)),commentData:n,async postComment(){try{n.value.eventId=d.params.id,await h.postComment(n.value),l.toast("Comment Submitted!","success"),n.value={}}catch(s){v.error(s),l.toast(s.message,"error")}},async getTicket(){try{if(!a.account.id){l.toast("you must be logged in to attend");return}const s={};s.accountId=a.account.id,s.eventId=d.params.id,await y.getTicket(s)}catch(s){v.error(s),l.toast(s.message,"error")}},async cancelEvent(){try{await l.confirm("Are you sure you want to cancel this event?")&&(await f.cancelEvent(a.activeEvent),l.toast("Event has been canceled."))}catch(s){v.error(s),l.toast(s.message,"error")}},async deleteComment(s){await l.confirm("Are you sure you want to delete this comment?")&&await h.deleteComment(s)}}}},I={class:"row bg-secondary"},A={class:"col-12 p-3"},P={class:"col-md-5"},B=["src"],F={class:"col-md-7 text-light text-shadow"},V={class:"pt-3 d-flex text-shadow align-items-center justify-content-between"},z={class:"d-flex text-shadow align-items-center justify-content-between"},L={class:"pt-3"},M={key:0,class:"d-flex justify-content-between"},N=["disabled"],G={key:1,class:"d-flex justify-content-center bg-danger"},J=e("h3",null,"Event is Cancelled",-1),R=[J],U={key:2,class:"d-flex justify-content-center bg-danger"},q=e("h3",null,"Event is sold out",-1),H=[q],K={key:0,class:"row bg-secondary justify-content-center"},O={class:"col-8 col-md-4"},Q={class:"bg-dark text-light rounded elevation-2 m-3 px-2 d-flex justify-content-center"},W=["disabled"],X={key:1,class:"row bg-secondary"},Y={class:"col-12"},Z={class:"bg-dark text-light rounded elevation-2 m-3 px-2"},$=e("span",null,"Attending:",-1),ee=["src","title"],te={class:"row bg-secondary justify-content-center"},se={class:"col-md-8"},ne={class:"bg-dark text-light rounded elevation-2 m-3 d-flex flex-column p-3 align-items-center"},oe={class:"d-flex align-items-center w-100"},ae={class:"bg-light text-dark elevation-2 rounded w-100 m-3 p-2"},ce={class:"mb-3"},ie=e("div",{class:"text-end pb-3 text-success text-shadow"}," Join the discussion! ",-1),le=e("div",{class:"text-end px-3"},[e("button",{type:"submit",class:"btn btn-success"},"Submit")],-1),de={class:"row bg-secondary"},re={class:"col-12"},me={class:"d-flex align-items-center w-100"},ve=["src"],_e={class:"bg-light text-dark elevation-2 rounded w-100 m-3 p-2"},ue={class:"d-flex justify-content-between"},ge=["onClick"];function he(d,n,s,t,be,ye){return c(),i(u,null,[e("div",I,[e("div",A,[e("div",{class:"row wrapper rounded",style:k(`background-image: linear-gradient( rgba(0, 0, 0, 1.5), rgba(0, 0, 0, 0.5) ), url('${t.event.coverImg}'); background-size: cover; overflow: hidden;`)},[e("div",P,[e("div",null,[e("img",{src:t.event.coverImg,class:"img-fluid p-4 cover-img",alt:""},null,8,B)])]),e("div",F,[e("div",V,[e("div",null,[e("h3",null,r(t.event.name),1)]),e("div",null,[e("h5",null,r(t.event.startDate),1)])]),e("div",z,[e("div",null,[e("span",null,[e("b",null,"Location: "+r(t.event.location),1)])]),e("div",null,[e("span",null,[e("b",null,r(t.event.startTime),1)])])]),e("div",L,[e("p",null,[e("b",null,"Description: "+r(t.event.description),1)])]),t.event.isCanceled?m("",!0):(c(),i("div",M,[e("span",null,[e("b",null,"Spots left: "+r(t.event.capacity),1)]),e("button",{onClick:n[0]||(n[0]=(...o)=>t.getTicket&&t.getTicket(...o)),disabled:t.hasTicket,type:"button",class:"btn btn-success"}," Attend ",8,N)])),t.event.isCanceled?(c(),i("div",G,R)):m("",!0),t.event.capacity==0?(c(),i("div",U,H)):m("",!0)])],4)])]),t.event.creatorId==t.account.id&&t.event.isCanceled==!1?(c(),i("div",K,[e("div",O,[e("div",Q,[e("button",{onClick:n[1]||(n[1]=(...o)=>t.cancelEvent&&t.cancelEvent(...o)),disabled:t.event.isCanceled,type:"button",class:"btn btn-danger m-3"}," Cancel event ",8,W)])])])):m("",!0),t.event.isCanceled?m("",!0):(c(),i("div",X,[e("div",Y,[e("div",Z,[$,(c(!0),i(u,null,b(t.tickets,o=>(c(),i("img",{key:o.id,src:o.account.picture,title:o.account.name,class:"attend-img m-3 selectable",alt:""},null,8,ee))),128))])])])),e("div",te,[e("div",se,[e("div",ne,[e("div",oe,[e("div",ae,[e("form",{onSubmit:n[3]||(n[3]=C((...o)=>t.postComment&&t.postComment(...o),["prevent"]))},[e("div",ce,[ie,E(e("textarea",{"onUpdate:modelValue":n[2]||(n[2]=o=>t.commentData.body=o),class:"form-control",id:"exampleFormControlTextarea1",placeholder:"Post a comment...",rows:"3"},null,512),[[j,t.commentData.body]])]),le],32)])])])])]),e("div",de,[e("div",re,[(c(!0),i(u,null,b(t.comments,o=>(c(),i("div",{key:o.id,class:"bg-dark text-light rounded elevation-2 m-3 d-flex flex-column p-3 align-items-center"},[e("div",me,[e("img",{src:o.creator.picture,class:"attend-img",alt:""},null,8,ve),e("div",_e,[e("div",ue,[e("p",null,[e("b",null,r(o.creator.name),1)]),t.account.id==o.creatorId?(c(),i("i",{key:0,onClick:fe=>t.deleteComment(o.id),class:"mdi mdi-delete text-danger selectable"},null,8,ge)):m("",!0)]),e("p",null,r(o.body),1)])])]))),128))])])],64)}var pe=S(D,[["render",he]]);export{pe as default};
