"use strict";(self["webpackChunkvrpenner"]=self["webpackChunkvrpenner"]||[]).push([[25],{8622:(e,l,t)=>{t.d(l,{Z:()=>Q});var a=t(3673),n=t(2323),o=t(1959),s=t(8825),u=t(5948),r=t(2179),c=function(e,l,t,a){function n(e){return e instanceof t?e:new t((function(l){l(e)}))}return new(t||(t=Promise))((function(t,o){function s(e){try{r(a.next(e))}catch(l){o(l)}}function u(e){try{r(a["throw"](e))}catch(l){o(l)}}function r(e){e.done?t(e.value):n(e.value).then(s,u)}r((a=a.apply(e,l||[])).next())}))};(0,a.dD)("data-v-2f949092");const i={class:"col-12"},d={class:"col-12 row q-mt-md"},m={class:"col-7 q-mr-sm"},p={class:"col q-ml-sm"},v={key:0,class:"col-12"},h={class:"col-12 q-mt-md",style:{"text-align":"right"}};(0,a.Cn)();const f=(0,a.aZ)({props:{showMessage:{type:Boolean,default:!1},funilPart:{type:Number,default:0}},setup(e){const l=e,t=(0,s.Z)(),f=(0,u.QT)(),g=(0,o.iH)(""),w=(0,o.iH)(""),y=(0,o.iH)(""),Z=(0,o.iH)(""),b=(0,o.iH)(!1),k=e=>{b.value=!e},q=()=>{g.value="",w.value="",y.value="",Z.value=""},Q=e=>e&&e.length>0||f.t("requiredField"),T=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,C=e=>T.test(e)||f.t("invalidEmail"),_=e=>e&&e.length>3&&b.value||f.t("requiredField"),$=(e="",l={})=>c(this,void 0,void 0,(function*(){return yield fetch(e,{method:"POST",mode:"no-cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(l)}).catch((()=>!1)),!0})),P=["https://hooks.slack.com/services/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","https://hooks.slack.com/services/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","https://hooks.slack.com/services/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","https://hooks.slack.com/services/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"],W=()=>`https://wa.me/${y.value.replace(/\D/g,"")}`,x=(0,o.iH)(null),z=()=>{let e=`Email: ${w.value}\nPhone: ${y.value}\nWhatsApp: ${W()}`;Z.value.length>3&&(e+=`\nMessage: ${Z.value}`),$(P[l.funilPart],{username:g.value,text:e}).then((e=>{var l;e&&(t.notify({message:f.t("messageSent"),icon:"announcement",color:"primary",position:"top"}),null===(l=x.value)||void 0===l||l.reset())}))};return(e,t)=>{const s=(0,a.up)("q-card-section"),u=(0,a.up)("q-input"),c=(0,a.up)("q-btn"),f=(0,a.up)("q-card"),b=(0,a.up)("q-form");return(0,a.wg)(),(0,a.j4)(b,{ref:x,onSubmit:z,onReset:q},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{flat:"",class:"contact-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{class:"contact-card__title"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.$t("getInTouch")),1)])),_:1}),(0,a.Wm)(s,{class:"row"},{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a.Wm)(u,{outlined:"",modelValue:g.value,"onUpdate:modelValue":t[0]||(t[0]=e=>g.value=e),label:e.$t("name"),"lazy-rules":"",rules:[Q]},null,8,["modelValue","label","rules"])]),(0,a._)("div",d,[(0,a._)("div",m,[(0,a.Wm)(u,{outlined:"",modelValue:w.value,"onUpdate:modelValue":t[1]||(t[1]=e=>w.value=e),label:e.$t("email"),"lazy-rules":"",rules:[Q,C]},null,8,["modelValue","label","rules"])]),(0,a._)("div",p,[(0,a.Wm)((0,o.SU)(r.Z),{outlined:"",required:!1,tel:y.value,"onUpdate:tel":t[2]||(t[2]=e=>y.value=e),onError:k,placeholder:e.$t("phone"),"lazy-rules":"",rules:[Q,_]},null,8,["tel","placeholder","rules"])])]),l.showMessage?((0,a.wg)(),(0,a.iD)("div",v,[(0,a.Wm)(u,{outlined:"",type:"textarea",modelValue:Z.value,"onUpdate:modelValue":t[3]||(t[3]=e=>Z.value=e),label:e.$t("messageOptional")},null,8,["modelValue","label"])])):(0,a.kq)("",!0),(0,a._)("div",h,[(0,a.Wm)(c,{class:"q-mr-md",color:"primary",flat:"",label:e.$t("clear"),type:"reset"},null,8,["label"]),(0,a.Wm)(c,{color:"primary",label:e.$t("submit"),type:"submit"},null,8,["label"])])])),_:1})])),_:1})])),_:1},512)}}});var g=t(5269),w=t(151),y=t(5589),Z=t(4842),b=t(2165),k=t(7518),q=t.n(k);f.__scopeId="data-v-2f949092";const Q=f;q()(f,"components",{QForm:g.Z,QCard:w.Z,QCardSection:y.Z,QInput:Z.Z,QBtn:b.Z})},3025:(e,l,t)=>{t.r(l),t.d(l,{default:()=>c});var a=t(3673),n=t(8622);const o=(0,a.aZ)({emits:["updateHeader"],setup(e,{emit:l}){return(0,a.bv)((()=>{l("updateHeader",!0)})),(e,l)=>{const t=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(t,{class:"flex flex-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(n.Z,{showMessage:!0})])),_:1})}}});var s=t(4379),u=t(7518),r=t.n(u);const c=o;r()(o,"components",{QPage:s.Z})}}]);