import{p,f as g}from"./entry/index-Ds64Q0jk.js";import{d,c,Z as C,_,a0 as y,a1 as T,ab as $}from"./vue-BjERyvPm.js";import"./antd-BmrhB3rb.js";const k=d({name:"SimpleMenuTag",__name:"SimpleMenuTag",props:{item:{type:Object,default:()=>({})},dot:p.bool,collapseParent:p.bool},setup(u){const a=u,{prefixCls:m}=g("simple-menu"),l=c(()=>{const{item:t}=a;if(!t)return!1;const{tag:e}=t;if(!e)return!1;const{dot:o,content:s}=e;return!(!o&&!s)}),i=c(()=>{if(!l.value)return"";const{item:t,collapseParent:e}=a,{tag:o}=t,{dot:s,content:r}=o;return s||e?"":r}),f=c(()=>{const{item:t,collapseParent:e}=a,{tag:o={}}=t||{},{dot:s,type:r="error"}=o,n=`${m}-tag`;return[n,[`${n}--${r}`],{[`${n}--collapse`]:e,[`${n}--dot`]:s||a.dot}]});return(t,e)=>l.value?(C(),_("span",{key:0,class:T(f.value)},y(i.value),3)):$("",!0)}});export{k as default};
