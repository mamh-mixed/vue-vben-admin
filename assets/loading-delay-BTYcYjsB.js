import{P as n}from"./index-DhZmzChK.js";import{i as d}from"./mock-api-BNfodyS_.js";import{R as s,b8 as e,Y as p,B as f}from"./antd-BmrhB3rb.js";import{d as g,k as u,G as a,u as t}from"./vue-BjERyvPm.js";import{u as i}from"./index-Cw2evmpm.js";import"./entry/index-Ds64Q0jk.js";import"./useContentViewHeight-BiyaBtY6.js";import"./useWindowSizeFn-Bsbxm7nG.js";import"./onMountedOrActivated-DcvTUt7V.js";const T=g({setup(){const o=i(d),l=i(d,{loadingDelay:300}),r=()=>{o.run("lutz"),l.run("lutz")};return()=>u(n,null,{default:()=>[u(s,{title:"Loading Delay"},{default:()=>[u(e,null,{default:()=>[u(e.Paragraph,null,{default:()=>[a("通过设置"),u(e.Text,{type:"danger"},{default:()=>[a(" options.loadingDelay ")]}),a("可以延迟 "),u(e.Text,{code:!0},{default:()=>[a("loading")]}),a(" 变成"),u(e.Text,{code:!0},{default:()=>[a("true")]}),a("的时间，有效防止闪烁。")]}),u(e.Paragraph,null,{default:()=>[u(e.Text,{code:!0},{default:()=>["const { loading, data } = useRequest(imitateApi, { loadingDelay: 300 });"]})]}),u(e.Paragraph,null,{default:()=>[a("例如上面的场景，假如 imitateApi 在 300ms 内返回，则")," ",u(e.Text,{code:!0},{default:()=>[a("loading")]}),a(" 不会变成")," ",u(e.Text,{code:!0},{default:()=>[a("true")]}),a(" Loading... 的情况。")]})]}),u(p,{direction:"vertical"},{default:()=>[u(f,{onClick:r},{default:()=>[a("Run")]}),u("div",null,[a("Username: "),t(o.loading)?"Loading...":t(o.data)]),u("div",null,[a("Username:")," ",t(l.loading)?"Loading...":t(l.data)])]})]})]})}});export{T as default};
