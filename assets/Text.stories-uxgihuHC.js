import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const l=({variant:n="p",text:s})=>{const i=n;return o.jsx(i,{children:s})};l.__docgenInfo={description:"",methods:[],displayName:"Text",props:{variant:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'p'"},{name:"literal",value:"'span'"}]},description:"",defaultValue:{value:"'p'",computed:!1}},text:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right' | 'justify'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"},{name:"literal",value:"'justify'"}]},description:""}}};const c={title:"Example/Text",component:l,argTypes:{variant:{control:{type:"select",options:["h1","h2","h3","h4","h5","h6","p","span"]}},color:{control:"color"},align:{control:{type:"select",options:["left","center","right","justify"]}}},tags:["autodocs"]},e={args:{variant:"p",text:"This is a default paragraph.",color:"#000",align:"left"}};var a,t,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: 'p',
    text: 'This is a default paragraph.',
    color: '#000',
    align: 'left'
  }
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,c as default};