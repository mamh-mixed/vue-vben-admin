import{h as r}from"./entry/index-Ds64Q0jk.js";import"./antd-BmrhB3rb.js";const{t}=r();function p(e){return e.includes("Input")||e.includes("Complete")?t("common.inputText"):e.includes("Picker")||e.includes("Select")||e.includes("Cascader")||e.includes("Checkbox")||e.includes("Radio")||e.includes("Switch")?t("common.chooseText"):""}const c=["DatePicker","MonthPicker","WeekPicker","TimePicker"],l=["Upload","ImageUpload"];function n(){return[...c,"RangePicker","TimeRangePicker"]}function d(e,i,s){Reflect.has(e,"type")||(["DatePicker","MonthPicker","WeekPicker","TimePicker"].includes(i)?e.type=s?"string":"object":["RangePicker","CheckboxGroup"].includes(i)?e.type="array":["InputNumber"].includes(i)&&(e.type="number"))}const T=["Input","InputPassword","InputNumber","InputSearch","InputTextArea"],m=n(),k=["Upload","ApiTransfer","ApiTree","ApiTreeSelect","ApiRadioGroup","ApiCascader","AutoComplete","RadioButtonGroup","ImageUpload","ApiSelect"],u=["Divider","BasicTitle"];function P(e){return u.includes(e||"")}export{k as N,T as a,p as c,m as d,P as i,d as s,l as u};
