import{_ as a}from"./BasicForm.vue_vue_type_script_setup_true_lang-DQc-3Bsy.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B437rwsl.js";import"./componentMap-WFKTszB-.js";import{u as r}from"./useForm-CE2nMjW1.js";import{C as i}from"./entry/index-Ds64Q0jk.js";import{P as f}from"./index-DhZmzChK.js";import{d as u,Z as b,a8 as h,a9 as n,k as t,u as o}from"./vue-BjERyvPm.js";import"./FormItem.vue_vue_type_script_lang-t1xZ_ya4.js";import"./helper-CbavOXcu.js";import"./antd-BmrhB3rb.js";import"./index-OUAZ9Zt8.js";import"./useWindowSizeFn-Bsbxm7nG.js";import"./useFormItem-B4KjxddK.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-CGeJ9jNn.js";import"./index-CCcaOY-u.js";import"./uuid-D0SLUWHI.js";import"./useSortable-Cgm5h89k.js";import"./download-WH5HnPcd.js";import"./base64Conver-bBv-IO2K.js";import"./index-G5wgvsR3.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-CdEJ9vfm.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-BVvvS_YO.js";import"./index-wrajAHxT.js";import"./useContentViewHeight-BiyaBtY6.js";import"./onMountedOrActivated-DcvTUt7V.js";const H=u({__name:"AdvancedForm",setup(P){const l=()=>[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];function s(){return[{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}]}const[c]=r({labelWidth:120,schemas:l(),actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),p=[];for(let e=14;e<30;e++)p.push({field:"field"+e,component:"Input",label:"字段"+e,colProps:{span:8}});const[m]=r({labelWidth:120,schemas:[...l(),...s(),{field:"",component:"Divider",label:"更多字段"},...p],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0,alwaysShowLines:2});function d(e){}return(e,_)=>(b(),h(o(f),{title:"可折叠表单示例"},{default:n(()=>[t(o(i),{title:"基础收缩示例"},{default:n(()=>[t(o(a),{onRegister:o(c)},null,8,["onRegister"])]),_:1}),t(o(i),{title:"超过3行自动收起，折叠时保留2行",class:"mt-4"},{default:n(()=>[t(o(a),{onRegister:o(m),onAdvancedChange:d},null,8,["onRegister"])]),_:1})]),_:1}))}});export{H as default};
