if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const s=e=>n(e,d),a={module:{uri:d},exports:o,require:s};i[d]=Promise.all(c.map((e=>a[e]||s(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-6d93b285.css",revision:null},{url:"assets/index-e3233f50.js",revision:null},{url:"favicon.ico",revision:"6fd388e57565f0e5e77f1450dc2db6e5"},{url:"img/icons/icon-192x192.png",revision:"8e1e4a423d9cc40b4928b9946df887f8"},{url:"img/icons/icon-256x256.png",revision:"1462f46620939efaf53e50a3795b668b"},{url:"img/icons/icon-384x384.png",revision:"e282b7c0db787877f153439ea588e119"},{url:"img/icons/icon-512x512.png",revision:"1c907c1b08aa1f92dde83299a688ab09"},{url:"img/icons/maskable-icon-192x192.png",revision:"3486d40c9f09e3dda4c6cdddd1dfe552"},{url:"img/image1.webp",revision:"63e5d50e6fa5887ad6e061f899e1c095"},{url:"img/image2.webp",revision:"f1960adbee07167cc4cf303cda07dcc2"},{url:"img/image3.webp",revision:"3c629bc18f8e56a3a1e983a1973410a4"},{url:"img/image4.webp",revision:"fe270b5ebd9d001216035580fcf655bd"},{url:"img/image5.webp",revision:"d609e75a28a795c8c66739c730b43921"},{url:"img/image6.webp",revision:"b54ada542ded8efffab23b9a960005af"},{url:"img/image7.webp",revision:"63ad087e6906c42e437ed252e2f44202"},{url:"img/image8.webp",revision:"e60dd95e4292e0e5a894fc88d8cdadf1"},{url:"img/image9.webp",revision:"f735b9fb0218121785a791de4309477a"},{url:"index.html",revision:"465e1f0f78b9c18d4a36bb8095497b62"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"./img/icons/maskable-icon-192x192.png",revision:"3486d40c9f09e3dda4c6cdddd1dfe552"},{url:"./img/icons/icon-192x192.png",revision:"8e1e4a423d9cc40b4928b9946df887f8"},{url:"./img/icons/icon-256x256.png",revision:"1462f46620939efaf53e50a3795b668b"},{url:"./img/icons/icon-384x384.png",revision:"e282b7c0db787877f153439ea588e119"},{url:"./img/icons/icon-512x512.png",revision:"1c907c1b08aa1f92dde83299a688ab09"},{url:"manifest.webmanifest",revision:"7107087a5835fe8fbcdcd340cf55e36b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
