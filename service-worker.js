if(!self.define){let e,s={};const t=(t,i)=>(t=new URL(t+".js",i).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const o=e=>t(e,r),a={module:{uri:r},exports:l,require:o};s[r]=Promise.all(i.map((e=>a[e]||o(e)))).then((e=>(n(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"pwa"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/pwa-test/css/955.d516ff4b.css",revision:null},{url:"/pwa-test/css/app.58be8915.css",revision:null},{url:"/pwa-test/img/bg.44021be9.jpg",revision:null},{url:"/pwa-test/img/box-min.b48a4acb.png",revision:null},{url:"/pwa-test/img/logo.ee89f356.png",revision:null},{url:"/pwa-test/index.html",revision:"d0d4ab1b8029d2a528e42523715783cb"},{url:"/pwa-test/js/955.7ca86f92.js",revision:null},{url:"/pwa-test/js/app.31392291.js",revision:null},{url:"/pwa-test/js/chunk-vendors.9da7f309.js",revision:null},{url:"/pwa-test/js/gas.98aa58a1.js",revision:null},{url:"/pwa-test/js/streaming.b7de555c.js",revision:null},{url:"/pwa-test/js/supermarket.58b2a74a.js",revision:null},{url:"/pwa-test/manifest.json",revision:"b0d6ded906db037aaed0ff85b3eba813"},{url:"/pwa-test/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
