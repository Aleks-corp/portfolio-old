import{p as i,N as I,j as t,R as x,d as a,f as c,r as y}from"./main-ByJd_n7R.js";const M=i.section`
  position: relative;
  width: 100%;
  height: 448px;
  background: var(--color-background-soft);
`,G=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 448px;
  object-fit: cover;
  overflow: hidden;
`,R=i.div`
  position: absolute;
  object-fit: cover;
  top: 81px;
  left: 122px;
  width: 468px;
  height: 468px;
  border-radius: 468px;
  background: linear-gradient(180deg, #121715 0%, #627d76 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  filter: blur(1px);
`,V=i.img`
  position: absolute;
  object-fit: cover;
  bottom: -64px;
  left: 0;
  width: 100%;
  height: 100%;
`,W=i.img`
  position: absolute;
  bottom: 0;
  left: 208px;
  width: 384px;
  height: 541px;
`,_=i.div`
  position: relative;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 36px 0 46px;
  z-index: 2;
`,D=i.h2`
  margin-bottom: 68px;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.17;
`,P=i.span`
  color: var(--color-text-accent);
`,N=i.div`
  display: flex;
  justify-content: end;
  height: 150px;
  align-items: center;
  text-align: justify;
`,Z=i.p`
  width: 550px;
  color: #fff;
  font-family: Raleway;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.75;
`,F=i(I)`
  color: var(--color-text-accent);
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  text-decoration: underline;
`,S=i.p`
  height: 200px;
  color: var(--color-text-accent);
  font-family: Raleway;
  font-size: 96px;
  font-style: normal;
  font-weight: 500;
  &:last-child {
    transform: rotate(180deg);
  }
`;i.div`
  width: calc(100% / 4);
`;i.ul`
  display: flex;
  justify-content: space-around;
  text-align: start;
`;i.p`
  margin-top: 30px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.17;
`;i.p`
  margin-top: 24px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.17;
`;const J="/portfolio/assets/aboutBG-dlcneVBX.svg",K="/portfolio/assets/photo-9mgBABjD.webp";function q(){return t.jsxs(M,{children:[t.jsxs(G,{children:[t.jsx(R,{}),t.jsx(V,{width:"100%",height:"100%",src:J})]}),t.jsx(W,{width:"384px",height:"541px",src:K}),t.jsxs(_,{children:[t.jsxs(D,{children:[t.jsx(P,{children:"<"}),"About",t.jsx(P,{children:">"})]}),t.jsxs(N,{children:[t.jsx(S,{children:"“"}),t.jsxs(Z,{children:["Hey there! I'm a web developer from Ukraine with a passion for solving tricky problems. I'm comfortable working on both front-end and back-end development"," ",t.jsx(F,{to:"/about",children:"Learn more..."})]}),t.jsx(S,{children:"“"})]})]})]})}var $={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},B=x.createContext&&x.createContext($),U=["attr","size","title"];function Q(e,n){if(e==null)return{};var o=X(e,n),r,l;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(l=0;l<p.length;l++)r=p[l],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function X(e,n){if(e==null)return{};var o={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;o[r]=e[r]}return o}function j(){return j=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},j.apply(this,arguments)}function L(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),o.push.apply(o,r)}return o}function b(e){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?L(Object(o),!0).forEach(function(r){Y(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):L(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function Y(e,n,o){return n=tt(n),n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function tt(e){var n=et(e,"string");return typeof n=="symbol"?n:n+""}function et(e,n){if(typeof e!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function T(e){return e&&e.map((n,o)=>x.createElement(n.tag,b({key:o},n.attr),T(n.child)))}function C(e){return n=>x.createElement(it,j({attr:b({},e.attr)},n),T(e.child))}function it(e){var n=o=>{var{attr:r,size:l,title:p}=e,H=Q(e,U),k=l||o.size||"1em",h;return o.className&&(h=o.className),e.className&&(h=(h?h+" ":"")+e.className),x.createElement("svg",j({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,r,H,{className:h,style:b(b({color:e.color||o.color},o.style),e.style),height:k,width:k,xmlns:"http://www.w3.org/2000/svg"}),p&&x.createElement("title",null,p),e.children)};return B!==void 0?x.createElement(B.Consumer,null,o=>n(o)):n($)}function nt(e){return C({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"},child:[]},{tag:"path",attr:{d:"M9 18c-4.51 2-5-2-7-2"},child:[]}]})(e)}function ot(e){return C({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"20",height:"16",x:"2",y:"4",rx:"2"},child:[]},{tag:"path",attr:{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"},child:[]}]})(e)}function rt(e){return C({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"},child:[]}]})(e)}function at(e){return C({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"},child:[]}]})(e)}const st=i.section`
  object-fit: cover;
  /* overflow: hidden; */
`,lt=i.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  @media screen and (${a.sm}) {
    height: 500px;
  }
  @media screen and (${a.md}) {
    height: 500px;
  }
  @media screen and (${a.xl}) {
    height: 600px;
  }
`,ct=i.div`
  position: relative;
  max-width: 1200px;
  max-height: 500px;
  margin: 0 auto;
  padding-top: 160px;
  padding-bottom: 245px;
  text-align: center;
  @media screen and (${a.sm}) {
    max-width: 700px;
    max-height: 500px;
    padding-top: 150px;
    padding-bottom: 195px;
  }
  @media screen and (${a.md}) {
    max-width: 900px;
    max-height: 500px;
    padding-top: 125px;
    padding-bottom: 180px;
  }
  @media screen and (${a.lg}) {
    max-width: 1150px;
    max-height: 500px;
    padding-top: 125px;
    padding-bottom: 180px;
  }
  @media screen and (${a.xl}) {
    max-width: 1200px;
    max-height: 600px;
    padding-top: 160px;
    padding-bottom: 245px;
  }
`,O=i.h2`
  font-size: 44px;
  font-weight: 300;
  @media screen and (${a.md}) {
    font-size: 54px;
    font-weight: 300;
  }
`,dt=i.span`
  font-size: 44px;
  font-weight: 600;
  @media screen and (${a.md}) {
    font-size: 54px;
    font-weight: 600;
  }
`,xt=i.h2`
  font-size: 44px;
  font-weight: 600;
  @media screen and (${a.md}) {
    font-size: 54px;
    font-weight: 600;
  }
  background-image: linear-gradient(
    135deg,
    var(--color-text-gr-start),
    var(--color-text-gr-center),
    var(--color-text-gr-end)
  );
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`,pt=i.div`
  position: absolute;
  bottom: 0;
  left: -15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
`,g=i.a`
  color: var(--color-text);
  &:hover {
    color: var(--color-text-accent);
  }
`,ht=i.div`
  width: 2px;
  height: 62px;
  background: linear-gradient(
    180deg,
    var(--color-text-gr-start) 9.95%,
    var(--color-text-gr-center) 51.55%,
    var(--color-text-gr-end) 87.59%
  );
`,gt=i.div`
  position: absolute;
  bottom: 0;
  right: -15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
`,mt=i.span`
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.3;
`,ft=i.div`
  width: 2px;
  height: 142px;
  background: linear-gradient(
    180deg,
    var(--color-text-gr-start) 9.95%,
    var(--color-text-gr-center) 51.55%,
    var(--color-text-gr-end) 87.59%
  );
`,ut=c`
from {
      width: 262px;
      height: 215px;
    }
    to {
      width: 428px;
      height: 494px;
    }
`;i.div`
  position: absolute;
  filter: blur(58.5px);
  border-radius: 395px;
  animation-name: ${ut};
  animation-duration: 6s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-color: rgba(96, 143, 234, 0.6);
  top: 55px;
  right: 50px;
  transform: rotate(45deg);
`;const vt=c`
from {
      width: 428px;
      height: 394px;
    }
    to {
      width: 262px;
      height: 315px;
    }
`;i.div`
  position: absolute;
  filter: blur(58.5px);
  border-radius: 395px;
  animation-name: ${vt};
  animation-duration: 4s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-color: rgba(66, 184, 131, 0.6);
  bottom: 65px;
  left: 50px;
  transform: rotate(-30deg);
`;const wt="data:image/svg+xml,%3csvg%20width='623'%20height='579'%20viewBox='0%200%20623%20579'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.4'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M341.853%20130.243C359.131%20142.146%20383.166%20125.217%20403.873%20128.382C428.91%20132.208%20451.303%20143.303%20475.542%20150.675C524.212%20165.477%20601.912%20146.236%20619.857%20194.069C636.33%20237.977%20570.561%20274.888%20532.137%20301.53C502.382%20322.161%20447.797%20296.547%20428.107%20327.022C405.202%20362.471%20448.565%20412.097%20434.872%20452.065C417.651%20502.333%20394.578%20582.863%20341.853%20578.792C286.534%20574.521%20290.119%20481.777%20255.468%20438.212C236.775%20414.711%20213.539%20394.591%20185.989%20382.833C129.501%20358.726%2046.1908%20384.264%2010.8558%20333.82C-17.8232%20292.879%2018.198%20228.247%2051.8293%20191.311C85.7919%20154.011%20157.253%20174.459%20190.506%20136.518C221.271%20101.414%20172.252%202.78343%20218.748%200.855814C278.815%20-1.63438%20292.259%2096.0803%20341.853%20130.243Z'%20fill='%2301E990'/%3e%3c/svg%3e",jt="data:image/svg+xml,%3csvg%20width='817'%20height='747'%20viewBox='0%200%20817%20747'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.4'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M492.914%207.99899C606.409%20-26.8051%20731.003%2069.9079%20793.178%20157.419C846.82%20232.918%20791.909%20323.883%20779.476%20411.331C769.499%20481.508%20781.279%20555.778%20728.727%20610.743C671.218%20670.893%20582.515%20695.494%20492.913%20711.052C371.499%20732.133%20234.48%20776.586%20135.239%20713.791C30.9136%20647.78%20-32.8507%20512.329%2019.2343%20411.331C69.3252%20314.2%20264.166%20367.753%20352.467%20292.566C441.507%20216.749%20374.125%2044.4264%20492.914%207.99899Z'%20fill='%236288F3'/%3e%3c/svg%3e",bt="data:image/svg+xml,%3csvg%20width='642'%20height='585'%20viewBox='0%200%20642%20585'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.4'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M305.861%2019.9454C391.111%2044.4542%20406.184%20123.389%20462.469%20174.867C498.053%20207.412%20546.728%20229.396%20574.424%20265.572C607.761%20309.115%20656.127%20355.724%20637.474%20403.448C618.739%20451.381%20546.696%20478.581%20482.952%20499.602C427.809%20517.787%20364.978%20502.621%20305.861%20512.805C217.041%20528.107%20124.495%20613.651%2052.5799%20573.745C-20.6127%20533.13%2063.4127%20447.238%2069.3964%20381.59C72.7069%20345.271%2085.3476%20311.512%2079.7802%20275.331C67.6316%20196.38%20-41.6725%20114.381%2017.921%2047.0631C70.5811%20-12.4229%20213.915%20-6.48827%20305.861%2019.9454Z'%20fill='%236288F3'/%3e%3c/svg%3e",Ct="data:image/svg+xml,%3csvg%20width='457'%20height='445'%20viewBox='0%200%20457%20445'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.4'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M227.078%2054.757C264.725%2041.987%20291.393%20-3.11839%20331.141%200.170995C366.194%203.07186%20398.237%2036.6531%20406.919%2069.6399C416.603%20106.437%20385.14%20141.453%20378.158%20178.818C374.278%20199.58%20366.161%20221.981%20374.835%20241.339C394.02%20284.159%20458.286%20308.087%20456.98%20354.739C455.996%20389.935%20405.578%20409.468%20369.932%20416.553C333.975%20423.701%20299.245%20402.138%20263.731%20393.154C240.247%20387.214%20218.495%20366.38%20195.006%20372.302C145.992%20384.661%20112.931%20456.088%2063.9718%20443.524C25.4715%20433.644%2049.8486%20368.753%2037.9077%20331.986C28.4999%20303.02%20-5.9634%20278.943%200.896425%20249.315C8.51816%20216.395%2058.255%20208.365%2073.5483%20178.048C86.0326%20153.299%2062.6239%20119.616%2078.0092%2096.4473C92.8859%2074.0441%20124.676%2068.631%20151.116%2061.2366C175.805%2054.3318%20202.826%2062.9836%20227.078%2054.757Z'%20fill='%2356AFC2'/%3e%3c/svg%3e",kt="data:image/svg+xml,%3csvg%20width='607'%20height='515'%20viewBox='0%200%20607%20515'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.4'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M333.332%20112.881C376.094%20127.618%20418.708%20132.158%20457.645%20153.382C514.077%20184.141%20591.76%20204.233%20604.689%20260.791C618.414%20320.831%20568.606%20377.524%20518.837%20421.071C468.71%20464.931%20403.749%20488.336%20333.332%20498.22C245.068%20510.61%20142.035%20535.217%2075.8609%20483.252C8.84102%20430.622%2036.2411%20338.909%2030.9826%20260.791C25.1564%20174.24%20-43.2555%2053.5696%2044.0613%2010.8541C138.277%20-35.2362%20232.767%2078.2248%20333.332%20112.881Z'%20fill='%2301E990'/%3e%3c/svg%3e",yt="data:image/svg+xml,%3csvg%20width='491'%20height='591'%20viewBox='0%200%20491%20591'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.4'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M298.135%200.75184C354.225%20-7.0847%20409.056%2048.7707%20431.156%20101.016C452.267%20150.923%20393.972%20205.946%20407.17%20258.513C416.59%20296.032%20492.251%20297.437%20490.169%20336.069C488.174%20373.092%20415.045%20362.855%20399.727%20396.607C373.451%20454.504%20430.889%20546.544%20378.408%20582.324C333.974%20612.618%20275.073%20546.387%20240.468%20505.185C213.141%20472.649%20231.491%20421.128%20211.511%20383.611C198.131%20358.489%20167.317%20350.303%20147.247%20330.142C95.7591%20278.42%20-13.043%20244.266%201.5449%20172.692C14.4244%20109.501%20131.277%20167.428%20186.994%20135.128C238.287%20105.392%20239.442%208.95196%20298.135%200.75184Z'%20fill='%2301E990'/%3e%3c/svg%3e",Pt="/portfolio/assets/BgTab-C94fpgnD.jpg",St=i.div`
  position: absolute;
  top: -58px;
  left: 0;
  width: 100%;
  height: 558px;
  overflow: hidden;
  @media screen and (${a.md}) {
    width: 100%;
    height: 558px;
  }
  @media screen and (${a.xl}) {
    height: 658px;
  }
`,d=i.img`
  width: 100%;
  height: 100%;
`,Bt=c`
0% { transform: translate(0px, 0px) rotate(-54.93deg) }
50% { transform: translate(373px, -507px) rotate(-54.93deg) }
100% { transform: translate(758px, -463px) rotate(111.95deg) }
`,Lt=i.div`
  position: absolute;
  left: 394px;
  top: 808px;
  width: 490px;
  height: 590px;
  filter: blur(130px);
  transform-origin: 0 0;
  animation-name: ${Bt};
  animation-duration: 6s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`,Ot=c`
0% { transform: translate(0px, 0px) scale(1, 1) }
50% { transform: translate(234px, 9px) scale(0.61, 0.71) }
100% { transform: translate(-787px, -51px) scale(1.13, 1.25) }
`,zt=i.div`
  position: absolute;
  left: 643px;
  top: 344px;
  width: 607px;
  height: 515px;
  filter: blur(130px);
  animation-name: ${Ot};
  animation-duration: 6s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
`,At=c`
0% { transform: translate(0px, 0px) scale(1, 1) }
50% { transform: translate(428px, 13px) scale(1.19, 1.19) }
100% { transform: translate(353px, -231px) scale(1.33, 1.16) }
`,Et=i.div`
  position: absolute;
  width: 457px;
  height: 445px;
  left: 263px;
  top: 231px;
  filter: blur(130px);
  animation-name: ${At};
  animation-duration: 6s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
`,$t=c`
0% { transform: translate(0px, 0px) scale(1, 1) }
50% { transform: translate(270px, -132px) scale(0.93, 1.27) }
100% { transform: translate(353px, -231px) scale(0.66, 0.95) }
`,Tt=i.div`
  position: absolute;
  left: 1210px;
  top: 170px;
  width: 642px;
  height: 584px;
  transform: rotate(37.389deg);
  transform-origin: 0 0;
  filter: blur(130px);
  animation-name: ${$t};
  animation-duration: 6s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
`,Ht=c`
0% { transform: translate(0px, 0px) scale(1, 1) rotate(82.05deg) }
50% { transform: translate(-495px, 714px) scale(1.01, 1.16) rotate(-76.21deg) }
100% { transform: translate(622px, 1089px) scale(0.8, 1.17) rotate(-147.57deg) }
`,It=i.div`
  position: absolute;
  width: 815px;
  height: 745px;
  left: 530px;
  top: 97px;
  filter: blur(130px);
  transform-origin: 0 0;
  animation-name: ${Ht};
  animation-duration: 6s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
`,Mt=c`
0% { transform: translate(0px, 0px) scale(1, 1) }
50% { transform: translate(309px, -300px) scale(1.1, 1.14) }
100% { transform: translate(127px, 119px) scale(1.3, 1.15) }
`,Gt=i.div`
  position: absolute;
  width: 622px;
  height: 578px;
  left: 321px;
  top: 200px;
  transform: rotate(19.086deg);
  transform-origin: 0 0;
  filter: blur(130px);
  outline: 1px solid #fff;
  animation-name: ${Mt};
  animation-duration: 6s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
`;function z(){const{innerWidth:e,innerHeight:n}=window;return{width:e,height:n}}function Rt(){const[e,n]=y.useState(z());return y.useEffect(()=>{function o(){n(z())}return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]),e}function Vt(){const{width:e}=Rt();return t.jsx(St,{children:e<=1024?t.jsx(d,{src:Pt}):t.jsxs(t.Fragment,{children:[t.jsx(Lt,{children:t.jsx(d,{src:yt})}),t.jsx(zt,{children:t.jsx(d,{src:kt})}),t.jsx(Et,{children:t.jsx(d,{src:Ct})}),t.jsx(Tt,{children:t.jsx(d,{src:bt})}),t.jsx(It,{children:t.jsx(d,{src:jt})}),t.jsx(Gt,{children:t.jsx(d,{src:wt})})]})})}function Wt(){return t.jsx(st,{children:t.jsxs(lt,{children:[t.jsx("h1",{className:"hidden",children:"Portfolio"}),t.jsx(Vt,{}),t.jsxs(ct,{children:[t.jsx(O,{children:"Hello World"}),t.jsxs(O,{children:["I'm ",t.jsx(dt,{children:"Oleksandr Haran"}),"."]}),t.jsx(xt,{children:"<FullStack web developer />"}),t.jsxs(pt,{children:[t.jsx(g,{href:"https://github.com/Aleks-corp",target:"_blank",children:t.jsx(nt,{})}),t.jsx(g,{href:"https://www.facebook.com/aleks.root.corp/",target:"_blank",children:t.jsx(rt,{})}),t.jsx(g,{href:"https://www.linkedin.com/in/aleks-haran-dev",target:"_blank",children:t.jsx(at,{})}),t.jsx(ht,{})]}),t.jsxs(gt,{children:[t.jsxs(g,{href:"mailto:aleks.haran.dev@gmail.com",children:[t.jsx(mt,{children:"aleks.haran.dev@gmail.com"}),t.jsx(ot,{})]}),t.jsx(ft,{})]})]})]})})}const _t=i.section`
  object-fit: cover;
  overflow: hidden;
  background: var(--color-background-soft);
`,Dt=i.div`
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 36px 0 46px;
`,Nt=i.h2`
  margin-bottom: 46px;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.17;
`,A=i.span`
  color: var(--color-text-accent);
`,Zt=i.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 500px;
  grid-auto-columns: 550px;
  grid-column-gap: 18px;
  grid-row-gap: 24px;
`,m=i.li`
  border-radius: 20px;
  text-align: start;
`,f=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  height: 380px;
`,u=i.img`
  transition: transform 1s;
  transform: scale(1.33);
  &:hover {
    transform: scale(1);
  }
`,v=i.p`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.17;
`,w=i.div`
  display: flex;
`,s=i.p`
  display: inline-block;
  margin-top: 8px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.17;
  border-radius: 8px;
  border: 1px solid #88898b60;
`,Ft="/portfolio/assets/Screenshot_1-Be_vwvLT.jpg",Jt="/portfolio/assets/Screenshot_26-0HosWHU-.jpg",Kt="/portfolio/assets/Screenshot_27-D4NZdQV1.jpg",qt="/portfolio/assets/Screenshot_3-CELCcCKL.jpg";function Ut(){return t.jsx(_t,{children:t.jsxs(Dt,{children:[t.jsxs(Nt,{children:[t.jsx(A,{children:"<"}),"Project",t.jsx(A,{children:">"})]}),t.jsxs(Zt,{children:[t.jsxs(m,{children:[t.jsx(f,{children:t.jsx(u,{width:600,src:Ft})}),t.jsx(v,{children:"Ice Cream Website"}),t.jsxs(w,{children:[t.jsx(s,{children:"FrontEnd"}),t.jsx(s,{children:"HTML"}),t.jsx(s,{children:"JavaScript"})]})]}),t.jsxs(m,{children:[t.jsx(f,{children:t.jsx(u,{width:600,src:qt})}),t.jsx(v,{children:"Filmoteka Website"}),t.jsxs(w,{children:[t.jsx(s,{children:"FrontEnd"}),t.jsx(s,{children:"JavaScript"})]})]}),t.jsxs(m,{children:[t.jsx(f,{children:t.jsx(u,{width:600,src:Jt})}),t.jsx(v,{children:"DrinkMaster Website"}),t.jsxs(w,{children:[t.jsx(s,{children:"FrontEnd"}),t.jsx(s,{children:"BackEnd"}),t.jsx(s,{children:"ReactJS"}),t.jsx(s,{children:"NodeJS"})]})]}),t.jsxs(m,{children:[t.jsx(f,{children:t.jsx(u,{width:600,src:Kt})}),t.jsx(v,{children:"Car Rent Website"}),t.jsxs(w,{children:[t.jsx(s,{children:"FrontEnd"}),t.jsx(s,{children:"ReactJS"})]})]})]})]})})}const Qt=i.section`
  object-fit: cover;
  overflow: hidden;
  background: transparent;
`,Xt=i.div`
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 36px 0 46px;
`,Yt=i.h2`
  margin-bottom: 46px;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.17;
`,E=i.span`
  color: var(--color-text-accent);
`,te=i.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 18px;
  column-gap: 14px;
`,ee=i.li`
  background-color: var(--color-background);
  color: var(--color-text);
  border-radius: 10px;
  padding: 8px 14px;
  &:nth-child(2n) {
    background-color: var(--color-text);
    color: var(--color-background);
  }
`,ie=i.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
`,ne=[{title:"expressjs",img:""},{title:"git",img:""},{title:"react",img:""},{title:"rest-api",img:""},{title:"react-native",img:""},{title:"json",img:""},{title:"javascript",img:""},{title:"ant-design",img:""},{title:"nodejs",img:""},{title:"full-stack",img:""},{title:"scss",img:""},{title:"typescript",img:""},{title:"slack",img:""},{title:"swagger",img:""},{title:"redux",img:""},{title:"vue",img:""},{title:"docker",img:""},{title:"mongodb",img:""},{title:"postgresql",img:""},{title:"nextjs",img:""},{title:"typeorm",img:""},{title:"mysql",img:""},{title:"materialui",img:""},{title:"sass",img:""},{title:"styled-component",img:""},{title:"github",img:""}];function oe(){return t.jsx(Qt,{children:t.jsxs(Xt,{children:[t.jsxs(Yt,{children:[t.jsx(E,{children:"<"}),"Skills",t.jsx(E,{children:">"})]}),t.jsx(te,{children:ne.map((e,n)=>t.jsxs(ee,{children:[e.img&&t.jsx("img",{height:34,src:e.img}),t.jsxs(ie,{children:["#",e.title]})]},n))})]})})}function re(){return t.jsxs(t.Fragment,{children:[t.jsx(Wt,{}),t.jsx(q,{}),t.jsx(Ut,{}),t.jsx(oe,{})]})}re.displayName="HomePage";export{re as Component};
