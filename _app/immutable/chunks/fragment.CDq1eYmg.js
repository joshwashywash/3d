import{b as ot,u as Ne,D as z,w as it,z as h,J as rt,K as at,N as ct,Q as st,X as j,Y as L,Z as _e,_ as Pe,V as _,T as lt,$ as ut,y as Ae,h as dt,m as M}from"./T.BVOZDw27.js";import{W as ke,S as Re,$ as ft,s as mt,X as ie,Y as Me,k as Te,Z as pt,C as ht,o as vt,u as yt,v as bt,w as gt}from"./scheduler.CWB-86cP.js";import{S as xt,i as Dt,b as wt,d as Et,m as _t,t as ze,a as je,e as Pt}from"./index.BoCOqVh1.js";import{r as Mt,w as Z,d as Tt}from"./index.C1Wm00Ph.js";function Ct(r,c){const l={},e={},o={$$scope:1};let n=r.length;for(;n--;){const f=r[n],a=c[n];if(a){for(const d in f)d in a||(e[d]=1);for(const d in a)o[d]||(l[d]=a[d],o[d]=1);r[n]=a}else for(const d in f)o[d]=1}for(const f in e)f in l||(l[f]=void 0);return l}function It(r){return typeof r=="object"&&r!==null?r:{}}function Ot(r,c,l){if(!ot)return{task:void 0,start:()=>{},stop:()=>{},started:Mt(!1)};let e,o,n;z.isKey(r)?(e=r,o=c,n=l):(e=Symbol("useTask"),o=r,n=c);const f=Ne();let a=f.mainStage;if(n){if(n.stage)if(z.isValue(n.stage))a=n.stage;else{const m=f.scheduler.getStage(n.stage);if(!m)throw new Error(`No stage found with key ${n.stage.toString()}`);a=m}else if(n.after)if(Array.isArray(n.after))for(let m=0;m<n.after.length;m++){const y=n.after[m];if(z.isValue(y)){a=y.stage;break}}else z.isValue(n.after)&&(a=n.after.stage);else if(n.before)if(Array.isArray(n.before))for(let m=0;m<n.before.length;m++){const y=n.before[m];if(z.isValue(y)){a=y.stage;break}}else z.isValue(n.before)&&(a=n.before.stage)}const{autoInvalidations:d}=ke("threlte-internal-context"),v=Z(!1),x=a.createTask(e,o,n),D=()=>{v.set(!0),((n==null?void 0:n.autoInvalidate)??!0)&&d.add(o),x.start()},w=()=>{v.set(!0),((n==null?void 0:n.autoInvalidate)??!0)&&d.delete(o),x.stop()};return(n==null?void 0:n.autoStart)??!0?D():w(),Re(()=>{a&&a.removeTask(e)}),{task:x,start:D,stop:w,started:{subscribe:v.subscribe}}}function St(r,c,l){const e=ke("threlte-user-context");if(!e)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return r?r&&!c?Tt(e,o=>o[r]):(e.update(o=>{if(r in o){if(!l||l.existing==="skip")return o;if(l.existing==="merge")return Object.assign(o[r],c),o}return o[r]=c,o}),e.current[r]):{subscribe:e.subscribe}}const Nt=()=>{const r=ft(),c=Z(void 0);return it(c,l=>{l&&Object.entries(r.$$.callbacks).forEach(e=>{const[o,n]=e;o in l.$$.callbacks&&Array.isArray(l.$$.callbacks[o])?l.$$.callbacks[o].push(...n):l.$$.callbacks[o]=n})}),c};new h;new h;new h;const Ce={type:"change"},oe={type:"start"},Ie={type:"end"},X=new rt,Oe=new at,At=Math.cos(70*ct.DEG2RAD);let kt=class extends st{constructor(c,l){super(),this.object=c,this.domElement=l,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new h,this.cursor=new h,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:j.ROTATE,MIDDLE:j.DOLLY,RIGHT:j.PAN},this.touches={ONE:L.ROTATE,TWO:L.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",ne),this._domElementKeyEvents=t},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ne),this._domElementKeyEvents=null},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(Ce),e.update(),n=o.NONE},this.update=function(){const t=new h,i=new _e().setFromUnitVectors(c.up,new h(0,1,0)),s=i.clone().invert(),u=new h,g=new _e,A=new h,E=2*Math.PI;return function(nt=null){const Ee=e.object.position;t.copy(Ee).sub(e.target),t.applyQuaternion(i),a.setFromVector3(t),e.autoRotate&&n===o.NONE&&H(Le(nt)),e.enableDamping?(a.theta+=d.theta*e.dampingFactor,a.phi+=d.phi*e.dampingFactor):(a.theta+=d.theta,a.phi+=d.phi);let I=e.minAzimuthAngle,O=e.maxAzimuthAngle;isFinite(I)&&isFinite(O)&&(I<-Math.PI?I+=E:I>Math.PI&&(I-=E),O<-Math.PI?O+=E:O>Math.PI&&(O-=E),I<=O?a.theta=Math.max(I,Math.min(O,a.theta)):a.theta=a.theta>(I+O)/2?Math.max(I,a.theta):Math.min(O,a.theta)),a.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,a.phi)),a.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(x,e.dampingFactor):e.target.add(x),e.target.sub(e.cursor),e.target.clampLength(e.minTargetRadius,e.maxTargetRadius),e.target.add(e.cursor),e.zoomToCursor&&$||e.object.isOrthographicCamera?a.radius=ee(a.radius):a.radius=ee(a.radius*v),t.setFromSpherical(a),t.applyQuaternion(s),Ee.copy(e.target).add(t),e.object.lookAt(e.target),e.enableDamping===!0?(d.theta*=1-e.dampingFactor,d.phi*=1-e.dampingFactor,x.multiplyScalar(1-e.dampingFactor)):(d.set(0,0,0),x.set(0,0,0));let G=!1;if(e.zoomToCursor&&$){let B=null;if(e.object.isPerspectiveCamera){const U=t.length();B=ee(U*v);const W=U-B;e.object.position.addScaledVector(re,W),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const U=new h(N.x,N.y,0);U.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/v)),e.object.updateProjectionMatrix(),G=!0;const W=new h(N.x,N.y,0);W.unproject(e.object),e.object.position.sub(W).add(U),e.object.updateMatrixWorld(),B=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;B!==null&&(this.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(B).add(e.object.position):(X.origin.copy(e.object.position),X.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(X.direction))<At?c.lookAt(e.target):(Oe.setFromNormalAndCoplanarPoint(e.object.up,e.target),X.intersectPlane(Oe,e.target))))}else e.object.isOrthographicCamera&&(G=v!==1,G&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/v)),e.object.updateProjectionMatrix()));return v=1,$=!1,G||u.distanceToSquared(e.object.position)>f||8*(1-g.dot(e.object.quaternion))>f||A.distanceToSquared(e.target)>0?(e.dispatchEvent(Ce),u.copy(e.object.position),g.copy(e.object.quaternion),A.copy(e.target),!0):!1}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",De),e.domElement.removeEventListener("pointerdown",ye),e.domElement.removeEventListener("pointercancel",Y),e.domElement.removeEventListener("wheel",be),e.domElement.removeEventListener("pointermove",te),e.domElement.removeEventListener("pointerup",Y),e._domElementKeyEvents!==null&&(e._domElementKeyEvents.removeEventListener("keydown",ne),e._domElementKeyEvents=null)};const e=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let n=o.NONE;const f=1e-6,a=new Pe,d=new Pe;let v=1;const x=new h,D=new _,w=new _,m=new _,y=new _,T=new _,P=new _,C=new _,S=new _,p=new _,re=new h,N=new _;let $=!1;const b=[],F={};let q=!1;function Le(t){return t!==null?2*Math.PI/60*e.autoRotateSpeed*t:2*Math.PI/60/60*e.autoRotateSpeed}function K(t){const i=Math.abs(t*.01);return Math.pow(.95,e.zoomSpeed*i)}function H(t){d.theta-=t}function V(t){d.phi-=t}const ae=function(){const t=new h;return function(s,u){t.setFromMatrixColumn(u,0),t.multiplyScalar(-s),x.add(t)}}(),ce=function(){const t=new h;return function(s,u){e.screenSpacePanning===!0?t.setFromMatrixColumn(u,1):(t.setFromMatrixColumn(u,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(s),x.add(t)}}(),k=function(){const t=new h;return function(s,u){const g=e.domElement;if(e.object.isPerspectiveCamera){const A=e.object.position;t.copy(A).sub(e.target);let E=t.length();E*=Math.tan(e.object.fov/2*Math.PI/180),ae(2*s*E/g.clientHeight,e.object.matrix),ce(2*u*E/g.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(ae(s*(e.object.right-e.object.left)/e.object.zoom/g.clientWidth,e.object.matrix),ce(u*(e.object.top-e.object.bottom)/e.object.zoom/g.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function Q(t){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?v/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function se(t){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?v*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function J(t,i){if(!e.zoomToCursor)return;$=!0;const s=e.domElement.getBoundingClientRect(),u=t-s.left,g=i-s.top,A=s.width,E=s.height;N.x=u/A*2-1,N.y=-(g/E)*2+1,re.set(N.x,N.y,1).unproject(e.object).sub(e.object.position).normalize()}function ee(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function le(t){D.set(t.clientX,t.clientY)}function Fe(t){J(t.clientX,t.clientX),C.set(t.clientX,t.clientY)}function ue(t){y.set(t.clientX,t.clientY)}function He(t){w.set(t.clientX,t.clientY),m.subVectors(w,D).multiplyScalar(e.rotateSpeed);const i=e.domElement;H(2*Math.PI*m.x/i.clientHeight),V(2*Math.PI*m.y/i.clientHeight),D.copy(w),e.update()}function Ye(t){S.set(t.clientX,t.clientY),p.subVectors(S,C),p.y>0?Q(K(p.y)):p.y<0&&se(K(p.y)),C.copy(S),e.update()}function Be(t){T.set(t.clientX,t.clientY),P.subVectors(T,y).multiplyScalar(e.panSpeed),k(P.x,P.y),y.copy(T),e.update()}function Ue(t){J(t.clientX,t.clientY),t.deltaY<0?se(K(t.deltaY)):t.deltaY>0&&Q(K(t.deltaY)),e.update()}function $e(t){let i=!1;switch(t.code){case e.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?V(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):k(0,e.keyPanSpeed),i=!0;break;case e.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?V(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):k(0,-e.keyPanSpeed),i=!0;break;case e.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?H(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):k(e.keyPanSpeed,0),i=!0;break;case e.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?H(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):k(-e.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),e.update())}function de(t){if(b.length===1)D.set(t.pageX,t.pageY);else{const i=R(t),s=.5*(t.pageX+i.x),u=.5*(t.pageY+i.y);D.set(s,u)}}function fe(t){if(b.length===1)y.set(t.pageX,t.pageY);else{const i=R(t),s=.5*(t.pageX+i.x),u=.5*(t.pageY+i.y);y.set(s,u)}}function me(t){const i=R(t),s=t.pageX-i.x,u=t.pageY-i.y,g=Math.sqrt(s*s+u*u);C.set(0,g)}function Ke(t){e.enableZoom&&me(t),e.enablePan&&fe(t)}function Ve(t){e.enableZoom&&me(t),e.enableRotate&&de(t)}function pe(t){if(b.length==1)w.set(t.pageX,t.pageY);else{const s=R(t),u=.5*(t.pageX+s.x),g=.5*(t.pageY+s.y);w.set(u,g)}m.subVectors(w,D).multiplyScalar(e.rotateSpeed);const i=e.domElement;H(2*Math.PI*m.x/i.clientHeight),V(2*Math.PI*m.y/i.clientHeight),D.copy(w)}function he(t){if(b.length===1)T.set(t.pageX,t.pageY);else{const i=R(t),s=.5*(t.pageX+i.x),u=.5*(t.pageY+i.y);T.set(s,u)}P.subVectors(T,y).multiplyScalar(e.panSpeed),k(P.x,P.y),y.copy(T)}function ve(t){const i=R(t),s=t.pageX-i.x,u=t.pageY-i.y,g=Math.sqrt(s*s+u*u);S.set(0,g),p.set(0,Math.pow(S.y/C.y,e.zoomSpeed)),Q(p.y),C.copy(S);const A=(t.pageX+i.x)*.5,E=(t.pageY+i.y)*.5;J(A,E)}function Ge(t){e.enableZoom&&ve(t),e.enablePan&&he(t)}function We(t){e.enableZoom&&ve(t),e.enableRotate&&pe(t)}function ye(t){e.enabled!==!1&&(b.length===0&&(e.domElement.setPointerCapture(t.pointerId),e.domElement.addEventListener("pointermove",te),e.domElement.addEventListener("pointerup",Y)),et(t),t.pointerType==="touch"?xe(t):Xe(t))}function te(t){e.enabled!==!1&&(t.pointerType==="touch"?Je(t):Ze(t))}function Y(t){switch(tt(t),b.length){case 0:e.domElement.releasePointerCapture(t.pointerId),e.domElement.removeEventListener("pointermove",te),e.domElement.removeEventListener("pointerup",Y),e.dispatchEvent(Ie),n=o.NONE;break;case 1:const i=b[0],s=F[i];xe({pointerId:i,pageX:s.x,pageY:s.y});break}}function Xe(t){let i;switch(t.button){case 0:i=e.mouseButtons.LEFT;break;case 1:i=e.mouseButtons.MIDDLE;break;case 2:i=e.mouseButtons.RIGHT;break;default:i=-1}switch(i){case j.DOLLY:if(e.enableZoom===!1)return;Fe(t),n=o.DOLLY;break;case j.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;ue(t),n=o.PAN}else{if(e.enableRotate===!1)return;le(t),n=o.ROTATE}break;case j.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;le(t),n=o.ROTATE}else{if(e.enablePan===!1)return;ue(t),n=o.PAN}break;default:n=o.NONE}n!==o.NONE&&e.dispatchEvent(oe)}function Ze(t){switch(n){case o.ROTATE:if(e.enableRotate===!1)return;He(t);break;case o.DOLLY:if(e.enableZoom===!1)return;Ye(t);break;case o.PAN:if(e.enablePan===!1)return;Be(t);break}}function be(t){e.enabled===!1||e.enableZoom===!1||n!==o.NONE||(t.preventDefault(),e.dispatchEvent(oe),Ue(qe(t)),e.dispatchEvent(Ie))}function qe(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!q&&(s.deltaY*=10),s}function Qe(t){t.key==="Control"&&(q=!0,e.domElement.getRootNode().addEventListener("keyup",ge,{passive:!0,capture:!0}))}function ge(t){t.key==="Control"&&(q=!1,e.domElement.getRootNode().removeEventListener("keyup",ge,{passive:!0,capture:!0}))}function ne(t){e.enabled===!1||e.enablePan===!1||$e(t)}function xe(t){switch(we(t),b.length){case 1:switch(e.touches.ONE){case L.ROTATE:if(e.enableRotate===!1)return;de(t),n=o.TOUCH_ROTATE;break;case L.PAN:if(e.enablePan===!1)return;fe(t),n=o.TOUCH_PAN;break;default:n=o.NONE}break;case 2:switch(e.touches.TWO){case L.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ke(t),n=o.TOUCH_DOLLY_PAN;break;case L.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ve(t),n=o.TOUCH_DOLLY_ROTATE;break;default:n=o.NONE}break;default:n=o.NONE}n!==o.NONE&&e.dispatchEvent(oe)}function Je(t){switch(we(t),n){case o.TOUCH_ROTATE:if(e.enableRotate===!1)return;pe(t),e.update();break;case o.TOUCH_PAN:if(e.enablePan===!1)return;he(t),e.update();break;case o.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ge(t),e.update();break;case o.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;We(t),e.update();break;default:n=o.NONE}}function De(t){e.enabled!==!1&&t.preventDefault()}function et(t){b.push(t.pointerId)}function tt(t){delete F[t.pointerId];for(let i=0;i<b.length;i++)if(b[i]==t.pointerId){b.splice(i,1);return}}function we(t){let i=F[t.pointerId];i===void 0&&(i=new _,F[t.pointerId]=i),i.set(t.pageX,t.pageY)}function R(t){const i=t.pointerId===b[0]?b[1]:b[0];return F[i]}e.domElement.addEventListener("contextmenu",De),e.domElement.addEventListener("pointerdown",ye),e.domElement.addEventListener("pointercancel",Y),e.domElement.addEventListener("wheel",be,{passive:!1}),e.domElement.getRootNode().addEventListener("keydown",Qe,{passive:!0,capture:!0}),this.update()}};const Rt=()=>St("threlte-controls",{orbitControls:Z(void 0),trackballControls:Z(void 0)}),zt=r=>({ref:r&1}),Se=r=>({ref:r[0]});function jt(r){let c;const l=r[6].default,e=vt(l,r,r[8],Se);return{c(){e&&e.c()},l(o){e&&e.l(o)},m(o,n){e&&e.m(o,n),c=!0},p(o,n){e&&e.p&&(!c||n&257)&&yt(e,l,o,o[8],c?gt(l,o[8],n,zt):bt(o[8]),Se)},i(o){c||(ze(e,o),c=!0)},o(o){je(e,o),c=!1},d(o){e&&e.d(o)}}}function Lt(r){let c,l;const e=[{is:r[0]},r[5]];let o={$$slots:{default:[jt,({ref:n})=>({0:n}),({ref:n})=>n?1:0]},$$scope:{ctx:r}};for(let n=0;n<e.length;n+=1)o=ie(o,e[n]);return c=new lt({props:o}),r[7](c),c.$on("change",r[3]),{c(){wt(c.$$.fragment)},l(n){Et(c.$$.fragment,n)},m(n,f){_t(c,n,f),l=!0},p(n,[f]){const a=f&33?Ct(e,[f&1&&{is:n[0]},f&32&&It(n[5])]):{};f&257&&(a.$$scope={dirty:f,ctx:n}),c.$set(a)},i(n){l||(ze(c.$$.fragment,n),l=!0)},o(n){je(c.$$.fragment,n),l=!1},d(n){r[7](null),Pt(c,n)}}}function Ft(r,c,l){const e=["ref"];let o=Me(c,e),n,f,{$$slots:a={},$$scope:d}=c;const v=ut();Te(r,v,p=>l(9,n=p));const x=p=>p.isCamera,{renderer:D,invalidate:w}=Ne();if(!x(n))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const m=new kt(n,D.domElement),{start:y,stop:T}=Ot(m.update,{autoStart:!1,autoInvalidate:!1}),P=Nt();Te(r,P,p=>l(1,f=p));const{orbitControls:C}=Rt();C.set(m),Re(()=>C.set(void 0));function S(p){ht[p?"unshift":"push"](()=>{f=p,P.set(f)})}return r.$$set=p=>{c=ie(ie({},c),pt(p)),l(5,o=Me(c,e)),"$$scope"in p&&l(8,d=p.$$scope)},r.$$.update=()=>{o.autoRotate||o.enableDamping?y():T()},[m,f,v,w,P,o,a,S,d]}class Qt extends xt{constructor(c){super(),Dt(this,c,Ft,Lt,mt,{ref:0})}get ref(){return this.$$.ctx[0]}}new Ae;new Ae;new dt;`${M.logdepthbuf_pars_vertex}${M.fog_pars_vertex}${M.logdepthbuf_vertex}${M.fog_vertex}`;`${M.tonemapping_fragment}${M.colorspace_fragment}`;`${M.tonemapping_fragment}${M.colorspace_fragment}`;const Ht=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,Yt=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,Bt=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,Ut=Bt,$t=`
	${Ht}
	${Yt}
`;`${Ut}${$t}${M.tonemapping_fragment}${M.colorspace_fragment}`;export{Qt as O,It as a,Nt as f,Ct as g,Ot as u};
