(this.webpackJsonpvisualizer=this.webpackJsonpvisualizer||[]).push([[0],{59:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(19),i=a.n(o),r=(a(59),a(22)),s=a.n(r),l=a(27),u=a(11),d=a(42),j=a(43),b=a.n(j),h=a(94),m=a(91),f=a(68),x=a(97),g=a(88),p=a(1),O=1,v=function(){return Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)(f.a,{className:"controlTitle",gutterBottom:!0,children:"thickness"}),Object(p.jsx)(x.a,{id:"thickness",min:0,max:10,step:.1,defaultValue:1,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){O=t}})]})},y=1,w=function(){return Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)(f.a,{className:"controlTitle",gutterBottom:!0,children:"gamma"}),Object(p.jsx)(x.a,{id:"thickness",min:0,max:5,step:.01,defaultValue:1,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){y=t}})]})},C=a(96),k=a(89),T=a(95),N=a(90),B=1,S=10,D=!0,F=!0,L=!1,A=!1,R=[252,0,25],V=1,E="bars",W=function(){var e=c.a.useState(!1),t=Object(u.a)(e,2),a=t[0],n=t[1],o=c.a.useState(!1),i=Object(u.a)(o,2),r=i[0],s=i[1],l=c.a.useState(!0),d=Object(u.a)(l,2),j=d[0],b=d[1];return Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)(C.a,{row:!0,defaultValue:"bars",onChange:function(e,t){E=t,"doublebars"===t?(n(!0),s(!1),b(!0),F=!1,A=!1):"line"===t?(n(!0),F=!1,s(!0),b(!1),L=!1):(n(!1),s(!1),b(!0),A=!1)},children:Object(p.jsxs)(g.a,{container:!0,spacing:3,children:[Object(p.jsxs)(g.a,{item:!0,xs:!0,children:[Object(p.jsx)(f.a,{className:"controlTitle",id:"barRadio",children:"bars"}),Object(p.jsx)(k.a,{value:"bars",control:Object(p.jsx)(T.a,{}),labelPlacement:"top"})]}),Object(p.jsxs)(g.a,{item:!0,xs:!0,children:[Object(p.jsx)(f.a,{className:"controlTitle",id:"doubleBarRadio",children:"double bars"}),Object(p.jsx)(k.a,{value:"doublebars",control:Object(p.jsx)(T.a,{}),labelPlacement:"top"})]}),Object(p.jsxs)(g.a,{item:!0,xs:!0,children:[Object(p.jsx)(f.a,{className:"controlTitle",id:"lineRadio",children:"line"}),Object(p.jsx)(k.a,{value:"line",control:Object(p.jsx)(T.a,{}),labelPlacement:"top"})]})]})}),Object(p.jsxs)(g.a,{container:!0,spacing:4,children:[Object(p.jsxs)(g.a,{item:!0,xs:!0,children:[Object(p.jsx)(f.a,{className:"controlTitle",id:"barWidth",gutterBottom:!0,children:"bar width"}),Object(p.jsx)(x.a,{id:"barWidth",min:1,max:50,step:1,defaultValue:1,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){B=t}})]}),Object(p.jsxs)(g.a,{item:!0,xs:!0,children:[Object(p.jsx)(f.a,{className:"controlTitle",id:"gap",gutterBottom:!0,children:"gap"}),Object(p.jsx)(x.a,{id:"gap",min:0,max:25,step:1,defaultValue:10,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){S=t}})]}),Object(p.jsxs)(g.a,{item:!0,xs:!0,children:[Object(p.jsx)(f.a,{className:"controlTitle",id:"capSpeed",gutterBottom:!0,children:"cap speed"}),Object(p.jsx)(x.a,{id:"capSpeed",min:.25,max:1.25,step:.01,defaultValue:1,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){V=t}})]})]}),Object(p.jsxs)(g.a,{container:!0,spacing:4,children:[Object(p.jsxs)(g.a,{item:!0,xs:!0,children:[Object(p.jsx)(f.a,{className:"controlTitle",id:"log",gutterBottom:!0,children:"log"}),Object(p.jsx)(N.a,{id:"log",defaultChecked:!0,inputProps:{"aria-label":"secondary checkbox"},onChange:function(e,t){D=t}})]}),Object(p.jsxs)(g.a,{item:!0,xs:!0,children:[Object(p.jsx)(f.a,{className:"controlTitle",id:"caps",gutterBottom:!0,children:"caps"}),Object(p.jsx)(N.a,{id:"caps",defaultChecked:!0,disabled:a,inputProps:{"aria-label":"secondary checkbox"},onChange:function(e,t){F=t}})]}),Object(p.jsxs)(g.a,{item:!0,xs:!0,children:[Object(p.jsx)(f.a,{className:"controlTitle",id:"opacity",gutterBottom:!0,children:"opacity"}),Object(p.jsx)(N.a,{id:"opacity",defaultChecked:!1,disabled:r,inputProps:{"aria-label":"secondary checkbox"},onChange:function(e,t){L=t}})]}),Object(p.jsxs)(g.a,{item:!0,xs:!0,children:[Object(p.jsx)(f.a,{className:"controlTitle",id:"lineFill",gutterBottom:!0,children:"line fill"}),Object(p.jsx)(N.a,{id:"lineFill",defaultChecked:!1,disabled:j,inputProps:{"aria-label":"secondary checkbox"},onChange:function(e,t){A=t}})]})]}),Object(p.jsx)(f.a,{className:"controlTitle",gutterBottom:!0,children:"cap color"}),Object(p.jsx)("div",{className:"capColor",children:Object(p.jsxs)(g.a,{container:!0,spacing:3,children:[Object(p.jsx)(g.a,{item:!0,xs:!0,children:Object(p.jsx)(x.a,{id:"red",min:0,max:255,step:1,defaultValue:252,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){R[0]=t}})}),Object(p.jsx)(g.a,{item:!0,xs:!0,children:Object(p.jsx)(x.a,{id:"green",min:0,max:255,step:1,defaultValue:0,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){R[1]=t}})}),Object(p.jsx)(g.a,{item:!0,xs:!0,children:Object(p.jsx)(x.a,{id:"blue",min:0,max:255,step:1,defaultValue:25,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){R[2]=t}})})]})})]})},P=.8,z=[1,255,79],M=50,U=30,_=.85,q=4096,I="bars",H=[{value:64},{value:128},{value:256},{value:512},{value:1024},{value:2048},{value:4096}],J=function(e){var t=e.controlAudio,a=c.a.useState("bars"),n=Object(u.a)(a,2),o=n[0],i=n[1],r=c.a.useState(!1),s=Object(u.a)(r,2),l=s[0],d=s[1],j=c.a.useState(!1),b=Object(u.a)(j,2),O=b[0],y=b[1];return Object(p.jsxs)("div",{className:"ControlBar",children:[Object(p.jsxs)(h.a,{variant:"fullWidth",textColor:"primary",indicatorColor:"primary",value:o,onChange:function(e,a){i(a),I=a,"spectrogram"===a?(d(!0),y(!1)):"oscilloscope"===a?(d(!1),y(!0)):(d(!1),y(!1)),t.audio&&t.toggleAudio()},children:[Object(p.jsx)(m.a,{value:"oscilloscope",label:"oscilloscope"}),Object(p.jsx)(m.a,{value:"bars",label:"bars"}),Object(p.jsx)(m.a,{value:"spectrogram",label:"spectrogram"})]}),Object(p.jsx)("div",{className:"controlCard",children:function(){switch(o){case"oscilloscope":return Object(p.jsx)(v,{});case"bars":return Object(p.jsx)(W,{});case"spectrogram":return Object(p.jsx)(w,{})}}()}),Object(p.jsxs)("div",{className:"controlCard",children:[Object(p.jsx)(f.a,{className:"controlTitle",gutterBottom:!0,children:"fade"}),Object(p.jsx)(x.a,{id:"fade",min:0,max:1,step:.01,disabled:l,defaultValue:.8,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){P=t}}),Object(p.jsx)(f.a,{className:"controlTitle",gutterBottom:!0,children:"color"}),Object(p.jsx)("div",{className:"color",children:Object(p.jsxs)(g.a,{container:!0,spacing:3,children:[Object(p.jsx)(g.a,{item:!0,xs:!0,children:Object(p.jsx)(x.a,{id:"red",min:0,max:255,step:1,defaultValue:1,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){z[0]=t}})}),Object(p.jsx)(g.a,{item:!0,xs:!0,children:Object(p.jsx)(x.a,{id:"green",min:0,max:255,step:1,defaultValue:255,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){z[1]=t}})}),Object(p.jsx)(g.a,{item:!0,xs:!0,children:Object(p.jsx)(x.a,{id:"blue",min:0,max:255,step:1,defaultValue:79,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){z[2]=t}})})]})}),Object(p.jsx)("div",{className:"dimensions",children:Object(p.jsxs)(g.a,{container:!0,spacing:2,children:[Object(p.jsxs)(g.a,{item:!0,xs:!0,children:[Object(p.jsx)(f.a,{className:"controlTitle",id:"width",gutterBottom:!0,children:"width"}),Object(p.jsx)(x.a,{id:"width",min:1,max:100,step:.1,defaultValue:50,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){M=t}})]}),Object(p.jsxs)(g.a,{item:!0,xs:!0,children:[Object(p.jsx)(f.a,{className:"controlTitle",id:"height",gutterBottom:!0,children:"height"}),Object(p.jsx)(x.a,{id:"height",min:1,max:100,step:.1,defaultValue:30,valueLabelDisplay:"auto",color:"secondary",onChange:function(e,t){U=t}})]})]})}),Object(p.jsx)(f.a,{className:"controlTitle",gutterBottom:!0,children:"(will reset)"}),Object(p.jsx)("div",{className:"analyser",children:Object(p.jsxs)(g.a,{container:!0,spacing:2,children:[Object(p.jsxs)(g.a,{item:!0,xs:!0,children:[Object(p.jsx)(f.a,{className:"controlTitle",id:"smoothing",gutterBottom:!0,children:"smoothing"}),Object(p.jsx)(x.a,{id:"smoothing",min:0,max:1,step:.01,disabled:O,defaultValue:.85,valueLabelDisplay:"auto",color:"secondary",onChangeCommitted:function(e,a){_=a,t.audio&&t.toggleAudio()}})]}),Object(p.jsxs)(g.a,{item:!0,xs:!0,children:[Object(p.jsx)(f.a,{className:"controlTitle",id:"fft",gutterBottom:!0,children:"fft"}),Object(p.jsx)(x.a,{id:"fft",min:0,max:4096,step:null,defaultValue:4096,"aria-labelledby":"discrete-slider-restrict",marks:H,valueLabelDisplay:"auto",color:"secondary",onChangeCommitted:function(e,a){q=a,t.audio&&t.toggleAudio()}})]})]})})]})]})},Q=function(e){var t=e.audioData,a=c.a.createRef(),o=Object(n.useRef)([]),i=1;q<2048&&"spectrogram"===I&&(i=2048/q),Object(n.useLayoutEffect)((function(){t.length>0&&r()}),[t]);var r=function(){var e,t=a.current,n=t.height,c=t.width,o=t.getContext("2d");if(F){e=(e="rgb(").concat(R[0]);for(var i=1;i<3;i++)e=(e=e.concat(", ")).concat(R[i]);e=e.concat(")")}var r="rgb(";r=r.concat(z[0]);for(var d=1;d<3;d++)r=(r=r.concat(", ")).concat(z[d]);switch(r=r.concat(")"),"spectrogram"!==I&&(o.fillStyle="rgba(34, 34, 34, "+(1-P)+")",o.fillRect(0,0,c,n)),I){case"oscilloscope":s(n,c,o,r,O);break;case"bars":l(n,c,o,r,B,S,D,F,L,e,V,E);break;case"spectrogram":u(t,n,c,o,r,y)}},s=function(e,a,n,c,o){var i=0,r=1*a/t.length;n.lineWidth=o,n.strokeStyle=c,n.beginPath();var s,l=Object(d.a)(t);try{for(l.s();!(s=l.n()).done;){var u=s.value/255*e;n.lineTo(i,u),i+=r}}catch(j){l.e(j)}finally{l.f()}n.stroke()},l=function(e,a,n,c,i,r,s,l,u,d,j,b){var h=o.current,m=0,f=a/(i+r),x=Math.pow(t.length,1/f);n.beginPath();for(var g=0;g<f;g++){var p;n.strokeStyle=c,n.lineWidth=1,p=s?t[Math.round(Math.pow(x,g))]*e/255:t[g]*e/255,(l||A)&&(n.fillStyle=d,h.length<f&&h.push(p),p<h[g]?(h[g]=h[g]-j,l?n.fillRect(g*(i+r)+r,e-h[g],i,1):n.lineTo(m,e-h[g])):(l?n.fillRect(g*(i+r)+r,e-p-1,i,1):n.lineTo(m,e-p),h[g]=p)),n.fillStyle=u?"rgba"+c.substring(3,c.length-1)+","+(p/255-P/7.5)+")":c,"doublebars"===b?(n.fillRect(g*(i+r)+r,e/2-p/2,i,p/2),n.fillRect(g*(i+r)+r,e/2,i,p/2)):"bars"===b?n.fillRect(g*(i+r)+r,e-p,i,p):"line"===b&&(n.lineTo(m,e-p),m+=i+r)}n.stroke()},u=function(e,a,n,c,o,i){var r=b.a.scale(["#000000",o,"#ffffff"]).gamma(i),s=n/1;c.drawImage(e,0,0,n,a);for(var l=0;l<s/1;l+=1){var u=t[l];c.fillStyle=r(u/255).hex(),c.fillRect(n-1,a-l,1,1)}c.translate(-1,0),c.drawImage(e,0,0,n,a,0,0,n,a),c.setTransform(1,0,0,1,0,0)};return Object(p.jsx)("canvas",{width:window.innerWidth*M/100,height:window.innerHeight*(U/100)/i,ref:a})},$=function(e){var t=e.stream,a=c.a.useState(new Uint8Array(0)),o=Object(u.a)(a,2),i=o[0],r=o[1],s=Object(n.useRef)(new AudioContext),l=Object(n.useRef)(),d=Object(n.useRef)(),j=Object(n.useRef)();return Object(n.useLayoutEffect)((function(){return t?(console.log("init stream"),s.current.resume(),l.current=s.current.createAnalyser(),l.current.fftSize=q,l.current.smoothingTimeConstant=_,r(new Uint8Array(l.current.fftSize)),d.current=s.current.createMediaStreamSource(t),d.current.connect(l.current)):console.log("no stream"),function(){console.log("cancel animation"),cancelAnimationFrame(j.current),s.current.suspend()}}),[t]),Object(n.useLayoutEffect)((function(){j.current=requestAnimationFrame((function e(){var t=new Uint8Array(l.current.fftSize);"oscilloscope"===I?l.current.getByteTimeDomainData(t):l.current.getByteFrequencyData(t),r(t),j.current=requestAnimationFrame(e)}))}),[]),Object(p.jsx)(c.a.Fragment,{children:Object(p.jsx)(Q,{audioData:i})})},G=a(92),K=function(e){var t=e.controlAudio;return Object(p.jsx)("div",{className:"Header",children:Object(p.jsx)(G.a,{id:"butt",variant:"outlined",color:"primary",onClick:t.toggleAudio,children:t.audio?"stop":"begin"})})},X=("".concat("https://accounts.spotify.com/authorize","?client_id=").concat("6d21bc23eaeb4573a2b668d8239e57ea","&redirect_uri=").concat("http://localhost:3000/callback/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"),a(65),a(49),a(66),a(50)),Y=a(93),Z=Object(X.a)({palette:{primary:{main:"#FF01D7",contrastText:"#FFEB00"},secondary:{main:"#00EDF5"}},typography:{fontFamily:"Trip",body1:{color:"#FFEB00"},h3:{padding:10}},overrides:{MuiTab:{textColorPrimary:{color:"#FFEB00"},root:{fontSize:18}},MuiSwitch:{switchBase:{color:"#5600CC"}},MuiRadio:{root:{color:"#5600CC"}},MuiSlider:{mark:{color:"#FFEB00"}}}}),ee=function(e){var t=c.a.useState(null),a=Object(u.a)(t,2),n=a[0],o=a[1],i=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!0,video:!1});case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(){n?(n.getTracks().forEach((function(e){return e.stop()})),o(null)):i()};return Object(p.jsx)(Y.a,{theme:Z,children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(f.a,{className:"title",variant:"h3",children:"sandwich time"}),Object(p.jsx)(K,{controlAudio:{audio:n,toggleAudio:r}}),n?Object(p.jsx)($,{stream:n}):"",Object(p.jsx)(J,{controlAudio:{audio:n,toggleAudio:r}})]})})},te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ae(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(p.jsx)(ee,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/visualizer",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/visualizer","/service-worker.js");te?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ae(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):ae(e)}))}}()}},[[67,1,2]]]);
//# sourceMappingURL=main.cb5de0cc.chunk.js.map