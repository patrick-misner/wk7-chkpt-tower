import{i as v,H as c,c as d,a as _,o as r,b as l,d as t,F as a,C as f,D as m}from"./vendor.4eb43872.js";import{_ as p,e as u,l as g,P as E,A as b}from"./index.9af51246.js";const k={name:"Home",setup(){const o=v("");return c(async()=>{try{await u.getEvents()}catch(e){g.error(e),E.toast(e.message,"error")}}),{filterEvent:o,events:d(()=>b.events.filter(e=>o.value?e.type==o.value:!0))}}},C={class:"row"},y={class:"col-md-12"},x={class:"bg-secondary elevation-2 rounded text-light m-3"},w={class:"p-3 d-flex justify-content-between"},B={class:"row"};function H(o,e,P,n,h,j){const i=_("Event");return r(),l(a,null,[t("div",C,[t("div",y,[t("div",x,[t("div",w,[t("h5",{onClick:e[0]||(e[0]=s=>n.filterEvent=""),class:"selectable"},"All"),t("h5",{onClick:e[1]||(e[1]=s=>n.filterEvent="concert"),class:"selectable"},"Concerts"),t("h5",{onClick:e[2]||(e[2]=s=>n.filterEvent="convention"),class:"selectable"},"Conventions"),t("h5",{onClick:e[3]||(e[3]=s=>n.filterEvent="sport"),class:"selectable"},"Sports"),t("h5",{onClick:e[4]||(e[4]=s=>n.filterEvent="digital"),class:"selectable"},"Digital")])])])]),t("div",B,[(r(!0),l(a,null,f(n.events,s=>(r(),m(i,{key:s.id,towerEvent:s},null,8,["towerEvent"]))),128))])],64)}var $=p(k,[["render",H],["__scopeId","data-v-5880a250"]]);export{$ as default};
