import{_ as p}from"./BasicTable.vue_vue_type_script_setup_true_lang-1oHnHOZD.js";import"./TableImg.vue_vue_type_style_index_0_lang-Bi4MP4vg.js";import{_ as l}from"./index-CCcaOY-u.js";import{u as s}from"./useTable-CB_yhZNg.js";import{d as c}from"./table-C--mSh37.js";import{d as u,Z as o,_,k as f,a9 as x,a8 as b,u as t,ab as h}from"./vue-BjERyvPm.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-DQc-3Bsy.js";import"./FormItem.vue_vue_type_script_lang-t1xZ_ya4.js";import"./componentMap-WFKTszB-.js";import"./useFormItem-B4KjxddK.js";import"./antd-BmrhB3rb.js";import"./entry/index-Ds64Q0jk.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-CGeJ9jNn.js";import"./index-G5wgvsR3.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-CdEJ9vfm.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-BVvvS_YO.js";import"./index-wrajAHxT.js";import"./index-OUAZ9Zt8.js";import"./useWindowSizeFn-Bsbxm7nG.js";import"./base64Conver-bBv-IO2K.js";import"./helper-CbavOXcu.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B437rwsl.js";import"./useForm-CE2nMjW1.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./onMountedOrActivated-DcvTUt7V.js";import"./useSortable-Cgm5h89k.js";import"./download-WH5HnPcd.js";const w={class:"p-4"},W=u({__name:"FixedColumn",setup(C){const n=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}],[r]=s({title:"TableAction组件及固定列示例",api:c,columns:n,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action"}});function a(e){}function m(e){}return(e,I)=>(o(),_("div",w,[f(t(p),{onRegister:t(r)},{bodyCell:x(({column:d,record:i})=>[d.key==="action"?(o(),b(t(l),{key:0,actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:a.bind(null,i)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:m.bind(null,i)}}]},null,8,["actions","dropDownActions"])):h("",!0)]),_:1},8,["onRegister"])]))}});export{W as default};
