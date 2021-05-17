(this.webpackJsonpvisualizer=this.webpackJsonpvisualizer||[]).push([[0],{52:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(16),i=n.n(o),r=(n(52),n(19)),l=n.n(r),s=n(24),u=n(11),d=(n(36),n(37),n(62)),j=n(88),b=n(82),h=n(1),f=n(89),x=n(83),g=n(87),p=n(84),O=1,m=10,v=!0,y=!0,w=!1,C=!1,k=[252,0,25],T=1,B="bars",D=function(){var e=c.a.useState(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],o=c.a.useState(!1),i=Object(u.a)(o,2),r=i[0],l=i[1],s=c.a.useState(!0),D=Object(u.a)(s,2),L=D[0],S=D[1];return Object(h.jsxs)("div",{class:"bars",children:[Object(h.jsx)(f.a,{row:!0,defaultValue:"bars",onChange:function(e,t){B=t,"doublebars"==t?(a(!0),l(!1),S(!0),y=!1,C=!1):"line"==t?(a(!0),y=!1,l(!0),S(!1),w=!1):(a(!1),l(!1),S(!0),C=!1)},children:Object(h.jsxs)(b.a,{container:!0,spacing:3,children:[Object(h.jsxs)(b.a,{item:!0,xs:!0,children:[Object(h.jsx)(d.a,{class:"controlTitle",id:"barRadio",gutterBottom:!0,color:"inherit",children:"bars"}),Object(h.jsx)(x.a,{value:"bars",control:Object(h.jsx)(g.a,{}),labelPlacement:"top"})]}),Object(h.jsxs)(b.a,{item:!0,xs:!0,children:[Object(h.jsx)(d.a,{class:"controlTitle",id:"doubleBarRadio",gutterBottom:!0,color:"inherit",children:"double bars"}),Object(h.jsx)(x.a,{value:"doublebars",control:Object(h.jsx)(g.a,{}),labelPlacement:"top"})]}),Object(h.jsxs)(b.a,{item:!0,xs:!0,children:[Object(h.jsx)(d.a,{class:"controlTitle",id:"lineRadio",gutterBottom:!0,color:"inherit",children:"line"}),Object(h.jsx)(x.a,{value:"line",control:Object(h.jsx)(g.a,{}),labelPlacement:"top"})]})]})}),Object(h.jsxs)(b.a,{container:!0,spacing:4,children:[Object(h.jsxs)(b.a,{item:!0,xs:!0,children:[Object(h.jsx)(d.a,{class:"controlTitle",id:"barWidth",gutterBottom:!0,color:"inherit",children:"bar width"}),Object(h.jsx)(j.a,{id:"barWidth",min:1,max:50,step:1,defaultValue:1,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){O=t}})]}),Object(h.jsxs)(b.a,{item:!0,xs:!0,children:[Object(h.jsx)(d.a,{class:"controlTitle",id:"gap",gutterBottom:!0,color:"inherit",children:"gap"}),Object(h.jsx)(j.a,{id:"gap",min:0,max:25,step:1,defaultValue:10,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){m=t}})]}),Object(h.jsxs)(b.a,{item:!0,xs:!0,children:[Object(h.jsx)(d.a,{class:"controlTitle",id:"capSpeed",gutterBottom:!0,color:"inherit",children:"cap speed"}),Object(h.jsx)(j.a,{id:"capSpeed",min:.25,max:1.25,step:.01,defaultValue:1,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){T=t}})]})]}),Object(h.jsxs)(b.a,{container:!0,spacing:4,children:[Object(h.jsxs)(b.a,{item:!0,xs:!0,children:[Object(h.jsx)(d.a,{class:"controlTitle",id:"log",gutterBottom:!0,color:"inherit",children:"log"}),Object(h.jsx)(p.a,{id:"log",defaultChecked:!0,inputProps:{"aria-label":"secondary checkbox"},onChange:function(e,t){v=t}})]}),Object(h.jsxs)(b.a,{item:!0,xs:!0,children:[Object(h.jsx)(d.a,{class:"controlTitle",id:"caps",gutterBottom:!0,color:"inherit",children:"caps"}),Object(h.jsx)(p.a,{id:"caps",defaultChecked:!0,disabled:n,inputProps:{"aria-label":"secondary checkbox"},onChange:function(e,t){y=t}})]}),Object(h.jsxs)(b.a,{item:!0,xs:!0,children:[Object(h.jsx)(d.a,{class:"controlTitle",id:"opacity",gutterBottom:!0,color:"inherit",children:"opacity"}),Object(h.jsx)(p.a,{id:"opacity",defaultChecked:!1,disabled:r,inputProps:{"aria-label":"secondary checkbox"},onChange:function(e,t){w=t}})]}),Object(h.jsxs)(b.a,{item:!0,xs:!0,children:[Object(h.jsx)(d.a,{class:"controlTitle",id:"lineFill",gutterBottom:!0,color:"inherit",children:"line fill"}),Object(h.jsx)(p.a,{id:"lineFill",defaultChecked:!1,disabled:L,inputProps:{"aria-label":"secondary checkbox"},onChange:function(e,t){C=t}})]})]}),Object(h.jsx)(d.a,{class:"controlTitle",gutterBottom:!0,color:"inherit",children:"cap color"}),Object(h.jsx)("div",{class:"capColor",children:Object(h.jsxs)(b.a,{container:!0,spacing:3,children:[Object(h.jsx)(b.a,{item:!0,xs:!0,children:Object(h.jsx)(j.a,{id:"red",min:0,max:255,step:1,defaultValue:1,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){k[0]=t}})}),Object(h.jsx)(b.a,{item:!0,xs:!0,children:Object(h.jsx)(j.a,{id:"green",min:0,max:255,step:1,defaultValue:255,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){k[1]=t}})}),Object(h.jsx)(b.a,{item:!0,xs:!0,children:Object(h.jsx)(j.a,{id:"blue",min:0,max:255,step:1,defaultValue:79,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){k[2]=t}})})]})})]})},L=0,S=[1,255,79],R=50,V=30,A=function(){return Object(h.jsxs)("div",{class:"ControlBar",children:[Object(h.jsx)("div",{class:"controlCard",children:Object(h.jsx)(D,{})}),Object(h.jsxs)("div",{class:"controlCard",children:[Object(h.jsx)(d.a,{class:"controlTitle",gutterBottom:!0,color:"inherit",children:"fade"}),Object(h.jsx)(j.a,{id:"fade",min:0,max:1,step:.01,defaultValue:0,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){L=t}}),Object(h.jsx)(d.a,{class:"controlTitle",gutterBottom:!0,color:"inherit",children:"color"}),Object(h.jsx)("div",{class:"color",children:Object(h.jsxs)(b.a,{container:!0,spacing:3,children:[Object(h.jsx)(b.a,{item:!0,xs:!0,children:Object(h.jsx)(j.a,{id:"red",min:0,max:255,step:1,defaultValue:255,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){S[0]=t}})}),Object(h.jsx)(b.a,{item:!0,xs:!0,children:Object(h.jsx)(j.a,{id:"green",min:0,max:255,step:1,defaultValue:20,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){S[1]=t}})}),Object(h.jsx)(b.a,{item:!0,xs:!0,children:Object(h.jsx)(j.a,{id:"blue",min:0,max:255,step:1,defaultValue:147,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){S[2]=t}})})]})}),Object(h.jsx)("div",{class:"dimensions",children:Object(h.jsxs)(b.a,{container:!0,spacing:2,children:[Object(h.jsxs)(b.a,{item:!0,xs:!0,children:[Object(h.jsx)(d.a,{class:"controlTitle",id:"width",gutterBottom:!0,color:"inherit",children:"width"}),Object(h.jsx)(j.a,{id:"width",min:0,max:100,step:.1,defaultValue:50,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){R=t}})]}),Object(h.jsxs)(b.a,{item:!0,xs:!0,children:[Object(h.jsx)(d.a,{class:"controlTitle",id:"height",gutterBottom:!0,color:"inherit",children:"height"}),Object(h.jsx)(j.a,{id:"height",min:0,max:100,step:.1,defaultValue:30,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){V=t}})]})]})})]})]})},F=function(e){var t=e.audioData,n=c.a.createRef(),o=Object(a.useRef)([]);Object(a.useLayoutEffect)((function(){t.length>0&&i()}),[t]);var i=function(){var e,t=n.current,a=t.height,c=t.width,o=t.getContext("2d");if(console.log(B),y){e=(e="rgb(").concat(k[0]);for(var i=1;i<3;i++)e=(e=e.concat(", ")).concat(k[i]);e=e.concat(")")}var l="rgb(";l=l.concat(S[0]);for(i=1;i<3;i++)l=(l=l.concat(", ")).concat(S[i]);l=l.concat(")"),o.fillStyle="rgba(51, 51, 51, "+(1-L)+")",o.fillRect(0,0,c,a),r(a,c,o,l,O,m,v,y,w,e,T,B)},r=function(e,n,a,c,i,r,l,s,u,d,j,b){var h=o.current,f=0,x=n/((i=i)+(r=r)),g=Math.pow(t.length,1/x);a.beginPath();for(var p=0;p<x;p++){if(a.strokeStyle=c,a.lineWidth=1,l)var O=t[Math.round(Math.pow(g,p))]*e/255;else O=t[p]*e/255;(s||C)&&(a.fillStyle=d,h.length<x&&h.push(O),O<h[p]?(h[p]=h[p]-j,s?a.fillRect(p*(i+r)+r,e-h[p],i,1):a.lineTo(f,e-h[p])):(s?a.fillRect(p*(i+r)+r,e-O-1,i,1):a.lineTo(f,e-O),h[p]=O)),a.fillStyle=u?"rgba"+c.substring(3,c.length-1)+","+O/255+")":c,"doublebars"==b?(a.fillRect(p*(i+r)+r,e/2-O/2,i,O/2),a.fillRect(p*(i+r)+r,e/2,i,O/2)):"bars"==b?a.fillRect(p*(i+r)+r,e-O,i,O):"line"==b&&(a.lineTo(f,e-O),f+=i+r)}a.stroke()};return Object(h.jsx)("canvas",{width:window.innerWidth*R/100,height:window.innerHeight*V/100,ref:n})},W=function(e){var t=e.stream,n=c.a.useState(new Uint8Array(0)),o=Object(u.a)(n,2),i=o[0],r=o[1],l=Object(a.useRef)(new AudioContext),s=Object(a.useRef)(),d=Object(a.useRef)(),j=Object(a.useRef)();return Object(a.useLayoutEffect)((function(){return t?(console.log("init stream"),s.current=l.current.createAnalyser(),s.current.fftSize=4096,s.current.smoothingTimeConstant=.9,r(new Uint8Array(s.current.fftSize)),d.current=l.current.createMediaStreamSource(t),d.current.connect(s.current)):console.log("no stream"),function(){console.log("cancel animation"),cancelAnimationFrame(j.current),s.current.disconnect(),d.current.disconnect()}}),[t]),Object(a.useLayoutEffect)((function(){j.current=requestAnimationFrame((function e(){var t=new Uint8Array(s.current.fftSize);s.current.getByteFrequencyData(t),r(t),j.current=requestAnimationFrame(e)}))}),[]),Object(h.jsx)("div",{class:"Vis",children:Object(h.jsx)(F,{audioData:i})})},z=n(85),E=function(e){var t=e.controlAudio;return Object(h.jsx)("div",{class:"Header",children:Object(h.jsx)(z.a,{id:"butt",variant:"outlined",color:"primary",onClick:t.toggleAudio,children:t.audio?"stop":"begin"})})},P=("".concat("https://accounts.spotify.com/authorize","?client_id=").concat("6d21bc23eaeb4573a2b668d8239e57ea","&redirect_uri=").concat("http://localhost:3000/callback/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"),n(59),n(43),n(60),n(44)),M=n(86),U=Object(P.a)({palette:{primary:{main:"#FF01D7"},secondary:{main:"#00EDF5"}}}),_=function(e){var t=c.a.useState(null),n=Object(u.a)(t,2),a=n[0],o=n[1],i=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!0,video:!1});case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(M.a,{theme:U,children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(d.a,{class:"title",variant:"h1",children:"sandwich time"}),Object(h.jsx)(E,{controlAudio:{audio:a,toggleAudio:function(){a?(a.getTracks().forEach((function(e){return e.stop()})),o(null)):i()}}}),a?Object(h.jsx)(W,{stream:a}):"",Object(h.jsx)(A,{})]})})},q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(h.jsx)(_,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Visualizer",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Visualizer","/service-worker.js");q?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):N(e)}))}}()}},[[61,1,2]]]);
//# sourceMappingURL=main.2044868f.chunk.js.map