import{_ as f,T as h,A as o}from"./index.f4bbf8fa.js";import{c as a,a as r,o as s,b as d,d as e,t as i,F as l,C as u,y as k,z as b,D as _}from"./vendor.4eb43872.js";const g={name:"Account",setup(){return{account:a(()=>o.account),events:a(()=>o.events),tickets:a(()=>o.tickets)}},components:{Ticket:h}},v=n=>(k("data-v-46cbab41"),n=n(),b(),n),y={class:"about text-center"},x=["src"],w=v(()=>e("div",{class:"row"},[e("div",{class:"col-md-12"},[e("div",{class:"bg-secondary elevation-2 rounded text-light m-3"},[e("div",{class:"p-3 d-flex justify-content-around"},[e("h3",null,"Events I am attending")])])])],-1)),E={class:"row"},A=v(()=>e("div",{class:"row"},[e("div",{class:"col-md-12"},[e("div",{class:"bg-secondary elevation-2 rounded text-light m-3"},[e("div",{class:"p-3 d-flex justify-content-around"},[e("h3",null,"My Events")])])])],-1)),I={class:"row"};function S(n,j,B,t,T,C){const p=r("Ticket"),m=r("Event");return s(),d(l,null,[e("div",y,[e("h1",null,"Welcome "+i(t.account.name),1),e("img",{class:"rounded",src:t.account.picture,alt:""},null,8,x),e("p",null,i(t.account.email),1)]),w,e("div",E,[(s(!0),d(l,null,u(t.tickets,c=>(s(),_(p,{key:c.id,ticket:c},null,8,["ticket"]))),128))]),A,e("div",I,[(s(!0),d(l,null,u(t.events,c=>(s(),_(m,{key:c.id,towerEvent:c},null,8,["towerEvent"]))),128))])],64)}var P=f(g,[["render",S],["__scopeId","data-v-46cbab41"]]);export{P as default};
