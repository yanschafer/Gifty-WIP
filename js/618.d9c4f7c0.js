"use strict";(self["webpackChunkGifty"]=self["webpackChunkGifty"]||[]).push([[618],{488:function(e,s,a){a.r(s),a.d(s,{default:function(){return q}});var t=a(252),i=a(577),r=a.p+"img/box-min.b48a4acb.png";const n={key:0},l={class:"row"},o={class:"col mx-auto splash"},d=(0,t._)("img",{src:r,class:"img-fluid animate__animated animate__fadeIn",alt:"...",id:"splashimg"},null,-1),c=(0,t._)("p",{style:{"text-align":"center","padding-left":"15px","padding-right":"15px","font-weight":"500","font-size":"20px"},class:"animate__animated animate__fadeIn"},[(0,t.Uk)("Welcome to "),(0,t._)("b",null,"Gifty™"),(0,t.Uk)(' - Giveaway platform. Gifty™ is the new best way to win valuable prizes, simply by using the app! Complete short surveys to receive gift cards, or qualify for "test and keep" programs for tech products! ')],-1),p={class:"row justify-content-center"},h={key:1},_={class:"splash"},g={class:"row animate__animated animate__fadeInUp",id:"loading"},u=(0,t._)("div",{class:"col-md-4"},null,-1),m={class:"col-md-4"},w={style:{"text-align":"center","font-size":"20px","font-weight":"500"}},f={id:"progress-bar"},v=["value"],b={class:"progress"},k=(0,t._)("div",{class:"progress-info"},null,-1),y=(0,t._)("div",{class:"col-md-4"},null,-1);function x(e,s,a,r,x,I){return(0,t.wg)(),(0,t.iD)(t.HY,null,[0===x.step?((0,t.wg)(),(0,t.iD)("div",n,[(0,t._)("div",l,[(0,t._)("div",o,[d,c,(0,t._)("div",p,[(0,t._)("button",{class:"animate__animated animate__fadeIn",onClick:s[0]||(s[0]=(...e)=>I.seen&&I.seen(...e)),id:"button"},"See available products")])])])])):(0,t.kq)("",!0),1===x.step?((0,t.wg)(),(0,t.iD)("div",h,[(0,t._)("div",_,[(0,t._)("div",g,[u,(0,t._)("div",m,[(0,t._)("p",w,(0,i.zw)(x.word),1),(0,t._)("div",f,[(0,t._)("progress",{class:"progress progress-bar-striped progress-bar-animated",value:x.width,max:"100"},[(0,t._)("div",b,[(0,t._)("span",{class:"progress-bar",style:(0,i.j5)({width:x.width+"%",color:e.pbcolor})},(0,i.zw)(x.width)+"%",5)])],8,v)]),k]),y])])])):(0,t.kq)("",!0)],64)}var I=a(120),C={name:"splash",data(){return{width:0,step:0,word:"Preparing app..."}},methods:{seen(){this.step=1,this.progress()},progress(){let e=0,s=setInterval((()=>{switch(this.width){case 20:this.word="Checking browser...";break;case 50:this.word="Checking IP...";break}e++,this.width++,100===e&&(clearInterval(s),localStorage.setItem("seenSplash","true"),I.Z.push("/tech"))}),55)}}},z=a(744);const G=(0,z.Z)(C,[["render",x]]);var q=G}}]);
//# sourceMappingURL=618.d9c4f7c0.js.map