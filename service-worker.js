if(!self.define){let s,e={};const t=(t,i)=>(t=new URL(t+".js",i).href,e[t]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=t,s.onload=e,document.head.appendChild(s)}else s=t,importScripts(t),e()})).then((()=>{let s=e[t];if(!s)throw new Error(`Module ${t} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let l={};const u=s=>t(s,n),o={module:{uri:n},exports:l,require:u};e[n]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(r(...s),l)))}}define(["./workbox-2d118ab0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"Gifty"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/pwa-test/css/549.64c4f70d.css",revision:null},{url:"/pwa-test/css/app.561e4c0a.css",revision:null},{url:"/pwa-test/css/gas.3e7ce4d6.css",revision:null},{url:"/pwa-test/css/streaming.12a5f815.css",revision:null},{url:"/pwa-test/css/supermarket.c78a20e7.css",revision:null},{url:"/pwa-test/img/bg.344a7d49.jpg",revision:null},{url:"/pwa-test/img/box-min.b48a4acb.png",revision:null},{url:"/pwa-test/img/logo.5f9b9542.png",revision:null},{url:"/pwa-test/index.html",revision:"5502576dd7e0d10dd8f4caa013433414"},{url:"/pwa-test/js/549.79fd9898.js",revision:null},{url:"/pwa-test/js/app.1389ef32.js",revision:null},{url:"/pwa-test/js/chunk-vendors.b74ff1ff.js",revision:null},{url:"/pwa-test/js/gas.ca60e9c6.js",revision:null},{url:"/pwa-test/js/streaming.041c8474.js",revision:null},{url:"/pwa-test/js/supermarket.cb451cec.js",revision:null},{url:"/pwa-test/manifest.json",revision:"d4b81be00e10392ea3748b79dacb0736"},{url:"/pwa-test/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
