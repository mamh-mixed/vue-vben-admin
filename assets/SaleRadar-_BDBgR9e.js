import{dv as i}from"./useECharts-BxsCwNCz.js";import{R as r}from"./antd-BmrhB3rb.js";import{d as s,f as l,w as n,Z as d,a8 as m,a9 as f,$ as c,ag as h,u}from"./vue-BjERyvPm.js";import"./entry/index-Ds64Q0jk.js";const C=s({__name:"SaleRadar",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(e){const a=e,t=l(null),{setOptions:o}=i(t);return n(()=>a.loading,()=>{a.loading||o({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"2017"},{name:"2017"},{name:"2018"},{name:"2019"},{name:"2020"},{name:"2021"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#9f8ed7"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#1edec5"}}]}]})},{immediate:!0}),(g,p)=>(d(),m(u(r),{title:"销售统计",loading:e.loading},{default:f(()=>[c("div",{ref_key:"chartRef",ref:t,style:h({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{C as default};
