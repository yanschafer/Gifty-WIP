if(!self.define){let e,s={};const t=(t,i)=>(t=new URL(t+".js",i).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const o=e=>t(e,r),u={module:{uri:r},exports:l,require:o};s[r]=Promise.all(i.map((e=>u[e]||o(e)))).then((e=>(n(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Gifty"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/pwa-test/css/618.70f1821d.css",revision:null},{url:"/pwa-test/css/app.1494dcfa.css",revision:null},{url:"/pwa-test/img/bg.44021be9.jpg",revision:null},{url:"/pwa-test/img/box-min.b48a4acb.png",revision:null},{url:"/pwa-test/img/logo.ee89f356.png",revision:null},{url:"/pwa-test/index.html",revision:"7f7d8490ce11e9de6e9de8665d081d66"},{url:"/pwa-test/js/618.d9c4f7c0.js",revision:null},{url:"/pwa-test/js/app.bddd7606.js",revision:null},{url:"/pwa-test/js/chunk-vendors.b74ff1ff.js",revision:null},{url:"/pwa-test/js/gas.9ba90435.js",revision:null},{url:"/pwa-test/js/streaming.be6d385c.js",revision:null},{url:"/pwa-test/js/supermarket.4fc548dc.js",revision:null},{url:"/pwa-test/manifest.json",revision:"d2eee7c7fe9bc75cc6f84895fb423bae"},{url:"/pwa-test/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
