import{_ as N}from"./iframe-84dd9735.js";import{s as f}from"./index-d475d2ea.js";import"../sb-preview/runtime.js";const{addons:p}=__STORYBOOK_MODULE_PREVIEW_API__;var n="storybook/a11y",y=`${n}/result`,T=`${n}/request`,w=`${n}/running`,U=`${n}/error`,d=`${n}/manual`,a={RESULT:y,REQUEST:T,RUNNING:w,ERROR:U,MANUAL:d},{document:g,window:v}=f,r=p.getChannel(),o=!1,l,A=async t=>{let{manual:e}=await u(t);e||await _(t)},_=async t=>{l=t;try{let e=await u(t);if(!o){o=!0,r.emit(a.RUNNING);let i=(await N(()=>import("./axe-cfa7d87a.js").then(S=>S.a),["assets/axe-cfa7d87a.js","assets/_commonjsHelpers-042e6b4d.js"])).default,{element:m="#storybook-root",config:s,options:E={}}=e,R=g.querySelector(m);if(!R)return;i.reset(),s&&i.configure(s);let c=await i.run(R,E),O=JSON.parse(JSON.stringify(c));l===t?r.emit(a.RESULT,O):(o=!1,_(l))}}catch(e){r.emit(a.ERROR,e)}finally{o=!1}},u=async t=>{let{parameters:e}=await v.__STORYBOOK_STORY_STORE__.loadStory({storyId:t})||{};return e.a11y||{config:{},options:{}}};r.on(a.REQUEST,A);r.on(a.MANUAL,_);
//# sourceMappingURL=preview-9a901dd6.js.map
