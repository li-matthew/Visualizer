(this.webpackJsonpvisualizer=this.webpackJsonpvisualizer||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(7),o=n.n(a),i=(n(16),n(3)),s=n.n(i),u=n(4),l=n(2),d=n(8),f=n(9),h=n(0),b=[255,0,0],j=function(e){var t=e.spotify,n=c.a.useState(),r=Object(l.a)(n,2),a=r[0],o=r[1],i=c.a.useState(),d=Object(l.a)(i,2),j=(d[0],d[1],new f.a),g="",v="",m="",p="";if(function(){var e=Object(u.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getMyCurrentPlayingTrack();case 2:n=e.sent,o(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),a){g=a.item.name,v=a.item.artists[0].name;for(var w=1;w<a.item.artists.length;w++)v=(v=v.concat(", ")).concat(a.item.artists[w].name);m=a.item.album.name,p=a.item.album.images[0].url,a.item.id;var O=new Image;O.crossOrigin="Anonymous",O.src=p,O.complete&&(b=j.getColor(O))}return Object(h.jsxs)("div",{class:"Info",children:[Object(h.jsx)("img",{src:p,width:"450",height:"450"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("a",{children:g}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{children:v}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{children:m}),Object(h.jsx)("br",{})]})]})},g=(n(10),function(e){var t=e.audioData,n=c.a.createRef();Object(r.useLayoutEffect)((function(){t.length>0&&a()}),[t]);var a=function(){var e=n.current,t=e.height,r=e.width,c=e.getContext("2d"),a="rgb(";a=a.concat(b[0]);for(var i=1;i<3;i++)a=(a=a.concat(", ")).concat(b[i]);a=a.concat(")"),c.fillStyle="rgba(0, 0, 0, 1)",c.fillRect(0,0,r,t),o(t,r,c,a)},o=function(e,n,r,c){var a=0,o=1*n/t.length;r.lineWidth=2,r.strokeStyle=c,r.beginPath();var i,s=Object(d.a)(t);try{for(s.s();!(i=s.n()).done;){var u=i.value/255*e/4;r.lineTo(a,u+e/3),a+=o}}catch(l){s.e(l)}finally{s.f()}r.stroke()};return Object(h.jsx)("canvas",{width:window.innerWidth/2,height:window.innerHeight/2,ref:n})}),v=function(e){var t=e.stream,n=c.a.useState(new Uint8Array(0)),a=Object(l.a)(n,2),o=a[0],i=a[1],s=Object(r.useRef)(new AudioContext),u=Object(r.useRef)(),d=Object(r.useRef)(),f=Object(r.useRef)();return Object(r.useEffect)((function(){return t?(console.log("init stream"),u.current=s.current.createAnalyser(),u.current.fftSize=4096,u.current.smoothingTimeConstant=0,i(new Uint8Array(u.current.fftSize)),d.current=s.current.createMediaStreamSource(t),d.current.connect(u.current)):console.log("no stream"),function(){console.log("cancel animation"),cancelAnimationFrame(f.current),u.current.disconnect(),d.current.disconnect()}}),[t]),Object(r.useLayoutEffect)((function(){f.current=requestAnimationFrame((function e(){var t=new Uint8Array(u.current.fftSize);u.current.getByteTimeDomainData(t),i(t),f.current=requestAnimationFrame(e)}))}),[]),Object(h.jsx)("div",{class:"Vis",children:Object(h.jsx)(g,{audioData:o})})},m=function(e){var t=e.controlAudio;return Object(h.jsxs)("div",{class:"ControlBar",children:[Object(h.jsx)("button",{onClick:t.toggleAudio,children:t.audio?"Stop":"Begin"}),Object(h.jsx)("input",{type:"range",min:"0",max:"100",class:"controls",id:"opacity"})]})},p="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("6d21bc23eaeb4573a2b668d8239e57ea","&redirect_uri=").concat("http://localhost:3000/callback/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"),w=function(){return Object(h.jsx)("div",{className:"login",children:Object(h.jsx)("a",{href:p,children:"login"})})},O=n(11),y=n.n(O),x=(n(19),new y.a({clientId:"6d21bc23eaeb4573a2b668d8239e57ea",clientSecret:"e5dffd480c28448b85c9633cfc868f9e",redirectUri:"http://localhost:3000/callback/"})),k=function(e){var t=c.a.useState(null),n=Object(l.a)(t,2),a=n[0],o=n[1],i=c.a.useState(null),d=Object(l.a)(i,2),f=(d[0],d[1],c.a.useState()),b=Object(l.a)(f,2),g=b[0],p=b[1],O=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!0,video:!1});case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(p(t),x.setAccessToken(t))}),[]),Object(h.jsxs)("div",{className:"App",children:[g?Object(h.jsx)("a",{children:"LOGGED IN"}):Object(h.jsx)(w,{}),Object(h.jsx)(j,{spotify:x}),Object(h.jsx)(m,{controlAudio:{audio:a,toggleAudio:function(){a?(a.getTracks().forEach((function(e){return e.stop()})),o(null)):O()}}}),a?Object(h.jsx)(v,{stream:a}):""]})},A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(Object(h.jsx)(k,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Visualizer",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Visualizer","/service-worker.js");A?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):S(e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.64db6b29.chunk.js.map