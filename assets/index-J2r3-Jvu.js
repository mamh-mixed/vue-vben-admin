import{P as d}from"./index-DhZmzChK.js";import{f}from"./entry/index-Ds64Q0jk.js";import{bl as v}from"./antd-BmrhB3rb.js";import{d as _,f as l,a7 as g,Z as x,a8 as y,a9 as u,k as i,G as C,u as p}from"./vue-BjERyvPm.js";import"./useContentViewHeight-BiyaBtY6.js";import"./useWindowSizeFn-Bsbxm7nG.js";import"./onMountedOrActivated-DcvTUt7V.js";const q=_({__name:"index",setup(b){const r=l(!1),{prefixVar:n}=f(""),t=l(0),c=[{title:"Welcome",description:"Hello World! 👋"},{title:"Collapse Button",description:"This is the menu collapse button.",target:()=>document.querySelector(`.${n}-layout-header-trigger`)},{title:"User Action",description:"This is the user function area.",target:()=>document.querySelector(`.${n}-layout-header-action`)}],a=s=>{t.value=0,r.value=s};return(s,e)=>{const m=g("a-button");return x(),y(p(d),{title:"引导页",content:"用于给用户的指引操作"},{default:u(()=>[i(m,{type:"primary",onClick:e[0]||(e[0]=o=>a(!0))},{default:u(()=>[C("开始")]),_:1}),i(p(v),{current:t.value,"onUpdate:current":e[1]||(e[1]=o=>t.value=o),open:r.value,steps:c,onClose:e[2]||(e[2]=o=>a(!1))},null,8,["current","open"])]),_:1})}}});export{q as default};
