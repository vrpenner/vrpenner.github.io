"use strict";(self["webpackChunkvrpenner"]=self["webpackChunkvrpenner"]||[]).push([[816],{8622:(e,l,a)=>{a.d(l,{Z:()=>Z});var t=a(3673),s=a(2323),n=a(1959),u=a(1768),c=a(8825),i=a(5948),o=a(9582),d=a(2179);(0,t.dD)("data-v-e9f3262c");const r={class:"col-12"},m={class:"col-12 row q-mt-md"},p={class:"col-xs-12 col-sm-7 col-7 q-mr-lg"},v={class:"col-xs-12 col-sm"},g={key:0,class:"col-12"},_={class:"col-12 q-mt-md",style:{"text-align":"right"}};(0,t.Cn)();const f=(0,t.aZ)({props:{showMessage:{type:Boolean,default:!1},funilPart:{type:Number,default:0}},setup(e){const l=e,a=(0,c.Z)(),f=(0,i.QT)(),h=(0,o.tv)(),w=(0,n.iH)("Gil"),y=(0,n.iH)("gilhrpenner@gmail.com"),x=(0,n.iH)("2075504161"),q=(0,n.iH)("testing"),b=(0,n.iH)(!1),$=e=>{b.value=!e},Z=()=>{w.value="",y.value="",x.value="",q.value=""},C=e=>e&&e.length>0||f.t("requiredField"),W=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,H=e=>W.test(e)||f.t("invalidEmail"),U=e=>e&&e.length>3&&b.value||f.t("requiredField"),V=()=>`https://wa.me/${x.value.replace(/\D/g,"")}`,k=(0,n.iH)(null),z=()=>{let e=`Email: ${y.value}\nPhone: ${x.value}\nWhatsApp: ${V()}`;q.value.length>3&&(e+=`\nMessage: ${q.value}`),u.api.post("/contact",{username:w.value,text:e,funilPart:l.funilPart}).then((()=>{var e;a.notify({message:f.t("messageSent"),icon:"announcement",color:"primary",position:"top"}),null===(e=k.value)||void 0===e||e.reset()})),h.push({name:"success",query:{id:l.funilPart}})};return(e,u)=>{const c=(0,t.up)("q-card-section"),i=(0,t.up)("q-input"),o=(0,t.up)("q-btn"),f=(0,t.up)("q-card"),h=(0,t.up)("q-form");return(0,t.wg)(),(0,t.j4)(h,{ref:k,onSubmit:z,onReset:Z},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{flat:"",class:(0,s.C_)(["contact-card",(0,n.SU)(a).screen.lt.sm?"contact-card__sm":(0,n.SU)(a).screen.lt.md?"contact-card__md":((0,n.SU)(a).screen.lt.lg,"contact-card__lg")])},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{class:"contact-card__title"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(e.$t("getInTouch")),1)])),_:1}),(0,t.Wm)(c,{class:"row"},{default:(0,t.w5)((()=>[(0,t._)("div",r,[(0,t.Wm)(i,{outlined:"",modelValue:w.value,"onUpdate:modelValue":u[0]||(u[0]=e=>w.value=e),label:e.$t("name"),"lazy-rules":"",rules:[C]},null,8,["modelValue","label","rules"])]),(0,t._)("div",m,[(0,t._)("div",p,[(0,t.Wm)(i,{outlined:"",modelValue:y.value,"onUpdate:modelValue":u[1]||(u[1]=e=>y.value=e),label:e.$t("email"),"lazy-rules":"",rules:[C,H]},null,8,["modelValue","label","rules"])]),(0,t._)("div",v,[(0,t.Wm)((0,n.SU)(d.Z),{outlined:"",required:!1,tel:x.value,"onUpdate:tel":u[2]||(u[2]=e=>x.value=e),onError:$,placeholder:e.$t("phone"),"lazy-rules":"",rules:[C,U]},null,8,["tel","placeholder","rules"])])]),l.showMessage?((0,t.wg)(),(0,t.iD)("div",g,[(0,t.Wm)(i,{outlined:"",type:"textarea",modelValue:q.value,"onUpdate:modelValue":u[3]||(u[3]=e=>q.value=e),label:e.$t("messageOptional")},null,8,["modelValue","label"])])):(0,t.kq)("",!0),(0,t._)("div",_,[(0,t.Wm)(o,{class:"q-mr-md",color:"primary",flat:"",label:e.$t("clear"),type:"reset"},null,8,["label"]),(0,t.Wm)(o,{color:"primary",label:e.$t("submit"),type:"submit"},null,8,["label"])])])),_:1})])),_:1},8,["class"])])),_:1},512)}}});var h=a(5269),w=a(151),y=a(5589),x=a(4842),q=a(2165),b=a(7518),$=a.n(b);f.__scopeId="data-v-e9f3262c";const Z=f;$()(f,"components",{QForm:h.Z,QCard:w.Z,QCardSection:y.Z,QInput:x.Z,QBtn:q.Z})},7389:(e,l,a)=>{a.d(l,{Z:()=>$});var t=a(3673),s=a(2323),n=a(1959),u=a(9582),c=function(e,l,a,t){function s(e){return e instanceof a?e:new a((function(l){l(e)}))}return new(a||(a=Promise))((function(a,n){function u(e){try{i(t.next(e))}catch(l){n(l)}}function c(e){try{i(t["throw"](e))}catch(l){n(l)}}function i(e){e.done?a(e.value):s(e.value).then(u,c)}i((t=t.apply(e,l||[])).next())}))};(0,t.dD)("data-v-36f43c1e");const i=(0,t._)("div",{class:"lt-sm mobile-spacing"},null,-1),o={class:"gt-sm"},d=(0,t._)("div",{class:"circle"},null,-1),r=(0,t._)("div",{class:"ellipse one"},null,-1),m=(0,t._)("div",{class:"ellipse two"},null,-1),p=(0,t._)("div",{class:"ellipse three"},null,-1),v=(0,t._)("div",{class:"img"},null,-1),g=[v],_=(0,t._)("div",{class:"img"},null,-1),f=[_],h=(0,t._)("div",{class:"img"},null,-1),w=[h];(0,t.Cn)();const y=(0,t.aZ)({setup(e){const l=(0,u.tv)(),a=(0,n.iH)(!1),v=(0,n.iH)("https://www.youtube.com/embed/AsxDUgXY8nk?rel=0"),_={"/e0f06c90":"https://www.youtube.com/embed/NgYsMtD03gA?rel=0","/3541301e":"https://www.youtube.com/embed/AsxDUgXY8nk?rel=0"};return(0,t.bv)((()=>c(this,void 0,void 0,(function*(){v.value=_[l.currentRoute.value.path],yield(0,t.Y3)((()=>a.value=!0))})))),(e,l)=>{const n=(0,t.up)("q-video");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",{class:"row full-width",style:(0,s.j5)(e.$q.screen.gt.sm?"min-height: 700px;":"min-height: 633px;")},[(0,t._)("div",{class:(0,s.C_)(["col-xs-12 col-md-7 col-lg-8 col-xl-9 flex flex-center",e.$q.screen.lt.sm?"page-xs-padding":e.$q.screen.lt.md?"page-sm-padding":e.$q.screen.lt.lg?"page-md-padding":"page-lg-padding q-my-xl q-py-xl"]),style:{"z-index":"2"}},[i,(0,t.Wm)(n,{class:"video full-width",ratio:2,src:v.value},null,8,["src"])],2),(0,t._)("div",o,[d,r,m,p,(0,t._)("div",{class:(0,s.C_)(["pill-1 gt-md",{init:!a.value}])},g,2),(0,t._)("div",{class:(0,s.C_)(["pill-2",{init:!a.value}])},f,2),(0,t._)("div",{class:(0,s.C_)(["pill-3",{init:!a.value}])},w,2),(0,t._)("div",{class:(0,s.C_)(["pill-4",{init:!a.value}])},null,2)])],4)])}}});var x=a(1419),q=a(7518),b=a.n(q);y.__scopeId="data-v-36f43c1e";const $=y;b()(y,"components",{QVideo:x.Z})},1816:(e,l,a)=>{a.r(l),a.d(l,{default:()=>v});var t=a(3673),s=a(2323),n=a(8880),u=a(1959),c=a(7389),i=a(8622);const o={class:"row full-width"},d=(0,t.aZ)({emits:["updateHeader"],setup(e,{emit:l}){const a=(0,u.iH)(!1);return(0,t.bv)((()=>{l("updateHeader",!1),setTimeout((()=>{a.value=!0}),53e3)})),(e,l)=>{const u=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(u,{class:"overflow-hidden"},{default:(0,t.w5)((()=>[(0,t.Wm)(c.Z),(0,t.wy)((0,t._)("div",o,[(0,t._)("div",{class:(0,s.C_)(["col-xs-12 col-md-7 col-lg-8 col-xl-9 flex flex-center",e.$q.screen.lt.sm?"page-xs-padding":e.$q.screen.lt.md?"page-sm-padding":e.$q.screen.lt.lg?"page-md-padding":"page-lg-padding q-my-xl q-py-xl"]),style:{"z-index":"2","margin-top":"-100px"}},[(0,t.Wm)(i.Z,{showMessage:!1,funilPart:2})],2)],512),[[n.F8,a.value]])])),_:1})}}});var r=a(4379),m=a(7518),p=a.n(m);const v=d;p()(d,"components",{QPage:r.Z})}}]);