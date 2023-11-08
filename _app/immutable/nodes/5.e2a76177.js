import{A as y,N as Me,I as he,O as X,P as Re,D as re,H as ne,s as oe,J as H,p as ve,Q as Le,K as ue,z as ce,L as He,r as be,a as F,c as I,i as T,w as Ce,x as _e,y as pe,d as E,e as Y,o as Be,R as Ne}from"../chunks/scheduler.9c5215e0.js";import{g as ke,t as _,c as ye,a as C,S as ae,i as se,f as We,b as w,d as O,m as D,e as z}from"../chunks/index.9a2cb203.js";import{w as B,d as Se}from"../chunks/index.a5bb5521.js";import{u as N,J as qe,R as Ve,e as G,k as A,D as Xe,c as L,H as Ue,K as we,w as le,N as Ye,V as Je,Q as Ke}from"../chunks/T.3b9bbcbe.js";import{u as Qe}from"../chunks/cache.a86f5ac9.js";import{g as Ze,a as $e,f as et,b as tt,O as rt}from"../chunks/vertex.34909bb1.js";import{b as nt}from"../chunks/paths.2a83f1fb.js";const Oe=typeof window<"u";let it=Oe?()=>window.performance.now():()=>Date.now(),De=Oe?t=>requestAnimationFrame(t):y;const M=new Set;function ze(t){M.forEach(e=>{e.c(t)||(M.delete(e),e.f())}),M.size!==0&&De(ze)}function ot(t){let e;return M.size===0&&De(ze),{promise:new Promise(n=>{M.add(e={c:t,f:n})}),abort(){M.delete(e)}}}function ct(t,e){const n=e.token={};function r(i,o,l,s){if(e.token!==n)return;e.resolved=s;let d=e.ctx;l!==void 0&&(d=d.slice(),d[l]=s);const c=i&&(e.current=i)(d);let m=!1;e.block&&(e.blocks?e.blocks.forEach((a,u)=>{u!==o&&a&&(ke(),_(a,1,1,()=>{e.blocks[u]===a&&(e.blocks[u]=null)}),ye())}):e.block.d(1),c.c(),C(c,1),c.m(e.mount(),e.anchor),m=!0),e.block=c,e.blocks&&(e.blocks[o]=c),m&&Re()}if(Me(t)){const i=he();if(t.then(o=>{X(i),r(e.then,1,e.value,o),X(null)},o=>{if(X(i),r(e.catch,2,e.error,o),X(null),!e.hasCatch)throw o}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function at(t,e,n){const r=e.slice(),{resolved:i}=t;t.current===t.then&&(r[t.value]=i),t.current===t.catch&&(r[t.error]=i),t.block.p(r,n)}function st(t,e){const n="threlte-plugin-context";if(Array.isArray(t)){const[r,i]=t;re(n,{...ne(n),[r]:i})}else{const r=t,i=e;if(!i)return;re(n,{...ne(n),[r]:i})}}const ee=t=>{const e=B(void 0),n=B(void 0);return t.then(r=>{e.set(r)}).catch(r=>{console.error("Error in asyncWritable:",r.message),n.set(r)}),Object.assign(Object.assign(t,e),{error:n,promise:t})},lt=(t,e={})=>{var s;const{remember:n,clear:r}=Qe(),i=new t;return(s=e.extend)==null||s.call(e,i),{load:(d,c)=>{if(Array.isArray(d)){const m=d.map(u=>n(async()=>{var b;const f=await i.loadAsync(u,c==null?void 0:c.onProgress);return((b=c==null?void 0:c.transform)==null?void 0:b.call(c,f))??f},[t,u]));return ee(Promise.all(m))}else if(typeof d=="string"){const m=n(async()=>{var f;const u=await i.loadAsync(d,c==null?void 0:c.onProgress);return((f=c==null?void 0:c.transform)==null?void 0:f.call(c,u))??u},[t,d]);return ee(m)}else{const m=Object.values(d).map(u=>n(async()=>{var b;const f=await i.loadAsync(u,c==null?void 0:c.onProgress);return((b=c==null?void 0:c.transform)==null?void 0:b.call(c,f))??f},[t,u]));return ee(Promise.all(m).then(u=>Object.fromEntries(Object.entries(d).map(([f],b)=>[f,u[b]]))))}},clear:d=>{Array.isArray(d)?d.forEach(c=>{r([t,c])}):typeof d=="string"?r([t,d]):Object.entries(d).forEach(([c,m])=>{r([t,c,m])})},loader:i}},ut=(t,e)=>{const n=lt(qe,e),{renderer:r}=N();return n.load(t,{...e,transform:i=>{var o;return"colorSpace"in i?i.colorSpace=r.outputColorSpace:i.encoding=r.outputEncoding,i.needsUpdate=!0,((o=e==null?void 0:e.transform)==null?void 0:o.call(e,i))??i}})},ft=Number.parseInt(Ve.replace("dev","")),dt=`
	varying vec3 worldPosition;
	uniform float uFadeDistance;
	uniform float uInfiniteGrid;
	uniform float uFollowCamera;

	uniform int uCoord0;
	uniform int uCoord1;
	uniform int uCoord2;

	void main() {

		vec3 pos = vec3(position[uCoord0],position[uCoord1],position[uCoord2]) * (1. + uFadeDistance * uInfiniteGrid);

		vec3 cameraFollowOffset = cameraPosition * uFollowCamera;
		pos[uCoord0] += cameraFollowOffset[uCoord0];
		pos[uCoord1] += cameraFollowOffset[uCoord1];

		worldPosition = pos;

		gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
	}
`,mt=`
	varying vec3 worldPosition;
	uniform float uSize1;
	uniform float uSize2;
	uniform vec3 uColor1;
	uniform vec3 uColor2;
	uniform vec3 uBackgroundColor;
	uniform float uBackgroundOpacity;
	uniform float uFadeDistance;
	uniform float uFadeStrength;
	uniform float uThickness1;
	uniform float uThickness2;
	uniform float uInfiniteGrid;

	uniform int uCoord0;
	uniform int uCoord1;
	uniform int uCoord2;

	// 0 - default; 1 - lines; 2 - circles; 3 - polar
	uniform int uGridType;

  // lineGrid coord for lines
	uniform int uLineGridCoord;

	// circlegrid max radius
	uniform float uCircleGridMaxRadius;

	// polar grid dividers
	uniform float uPolarCellDividers;
	uniform float uPolarSectionDividers;

	const float pi = 3.141592653589793;

	float getSquareGrid(float size, float thickness) {
		vec2 coord = vec2(worldPosition[uCoord0], worldPosition[uCoord1]) / size;

		vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord);
		float line = min(grid.x, grid.y) + 1. - thickness;

		return 1.0 - min(line, 1.);
	}

	float getLinesGrid(float size, float thickness) {
		float coord = worldPosition[uLineGridCoord] / size;
		float line = abs(fract(coord - 0.5) - 0.5) / fwidth(coord) - thickness * 0.2;

		return 1.0 - min(line, 1.);
	}

	float getCirclesGrid(float size, float thickness) {
		float coord = length(vec2(worldPosition[uCoord0], worldPosition[uCoord1])) / size;
		float line = abs(fract(coord - 0.5) - 0.5) / fwidth(coord) - thickness * 0.2;

		if(uCircleGridMaxRadius > 0. && coord > uCircleGridMaxRadius + thickness * 0.05) discard;

		return 1.0 - min(line, 1.);
	}

	float getPolarGrid(float size, float thickness, float polarDividers) {

		float rad = length(worldPosition.xz) / size;
		vec2 coord = vec2(rad, atan(worldPosition.x, worldPosition.z) * polarDividers / pi) ;


		vec2 wrapped = vec2(coord.x, fract(coord.y / (2.0 * polarDividers)) * (2.0 * polarDividers));
		vec2 coordWidth = fwidth(coord);
		vec2 wrappedWidth = fwidth(wrapped);
		vec2 width = (coord.y < -polarDividers * 0.5 || coord.y > polarDividers * 0.5 ? wrappedWidth : coordWidth) * (1.+thickness*0.25);

		// Compute anti-aliased world-space grid lines
		vec2 grid = abs(fract(coord - 0.5) - 0.5) / width;
		float line = min(grid.x, grid.y);



		if(uCircleGridMaxRadius > 0. && rad > uCircleGridMaxRadius + thickness * 0.05) discard;

		return 1.0 - min(line, 1.);
	}

	void main() {
		float g1 = 0.;
		float g2 = 0.;

		if(uGridType == 0){
			g1 = getSquareGrid(uSize1, uThickness1);
			g2 = getSquareGrid(uSize2, uThickness2);
		}

		if(uGridType == 1){
			g1 = getLinesGrid(uSize1, uThickness1);
			g2 = getLinesGrid(uSize2, uThickness2);
		}

		if(uGridType==2){
			g1 = getCirclesGrid(uSize1, uThickness1);
			g2 = getCirclesGrid(uSize2, uThickness2);
		}

		if(uGridType==3){
			g1 = getPolarGrid(uSize1, uThickness1, uPolarCellDividers);
			g2 = getPolarGrid(uSize2, uThickness2, uPolarSectionDividers);
		}


		vec3 color = mix(uColor1, uColor2, min(1.,uThickness2*g2));
		float d = 1.0 - min(distance(vec2(cameraPosition[uCoord0],cameraPosition[uCoord1]), vec2(worldPosition[uCoord0],worldPosition[uCoord1])) / uFadeDistance, 1.);
		float fadeFactor =  pow(d,uFadeStrength) * 0.95;

		if(uBackgroundOpacity> 0.0){
			float linesAlpha = clamp((g1 + g2) * fadeFactor, 0.,1.);
			vec3 finalColor = mix(uBackgroundColor, color, linesAlpha);
			float blendedAlpha = max(linesAlpha, uBackgroundOpacity * fadeFactor);
			gl_FragColor = vec4(finalColor, blendedAlpha);
		} else {
			gl_FragColor = vec4(color, (g1 + g2) * pow(d,uFadeStrength));
			gl_FragColor.a = mix(0.75 * gl_FragColor.a, gl_FragColor.a, g2);
		}


		if(gl_FragColor.a <= 0.0) discard;

		#include <tonemapping_fragment>

		#ifdef USE_COLORSPACE_FRAGMENT
			#include <colorspace_fragment>
		#else
			#include <encodings_fragment>
		#endif


	}
`,gt={fragmentShader:mt,vertexShader:dt},ht=t=>({ref:t[0]&1}),fe=t=>({ref:t[0]});function vt(t){let e,n;return e=new G.PlaneGeometry({props:{args:typeof t[1]=="number"?[t[1],t[1]]:t[1]}}),{c(){w(e.$$.fragment)},l(r){O(e.$$.fragment,r)},m(r,i){D(e,r,i),n=!0},p(r,i){const o={};i[0]&2&&(o.args=typeof r[1]=="number"?[r[1],r[1]]:r[1]),e.$set(o)},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){z(e,r)}}}function bt(t){let e,n,r;e=new G.ShaderMaterial({props:{fragmentShader:t[4],vertexShader:t[5],uniforms:t[2],transparent:!0,side:Xe,defines:{USE_COLORSPACE_FRAGMENT:ft>=154?"":void 0}}});const i=t[26].default,o=be(i,t,t[29],fe),l=o||vt(t);return{c(){w(e.$$.fragment),n=F(),l&&l.c()},l(s){O(e.$$.fragment,s),n=I(s),l&&l.l(s)},m(s,d){D(e,s,d),T(s,n,d),l&&l.m(s,d),r=!0},p(s,d){const c={};d[0]&4&&(c.uniforms=s[2]),e.$set(c),o?o.p&&(!r||d[0]&536870913)&&Ce(o,i,s,s[29],r?pe(i,s[29],d,ht):_e(s[29]),fe):l&&l.p&&(!r||d[0]&2)&&l.p(s,r?d:[-1,-1])},i(s){r||(C(e.$$.fragment,s),C(l,s),r=!0)},o(s){_(e.$$.fragment,s),_(l,s),r=!1},d(s){s&&E(n),z(e,s),l&&l.d(s)}}}function Ct(t){let e,n,r;const i=[{frustumCulled:!1},t[7]];function o(s){t[28](s)}let l={$$slots:{default:[bt,({ref:s})=>({0:s}),({ref:s})=>[s?1:0]]},$$scope:{ctx:t}};for(let s=0;s<i.length;s+=1)l=H(l,i[s]);return t[0]!==void 0&&(l.ref=t[0]),e=new G.Mesh({props:l}),t[27](e),ve.push(()=>We(e,"ref",o)),{c(){w(e.$$.fragment)},l(s){O(e.$$.fragment,s)},m(s,d){D(e,s,d),r=!0},p(s,d){const c=d[0]&128?Ze(i,[i[0],$e(s[7])]):{};d[0]&536870919&&(c.$$scope={dirty:d,ctx:s}),!n&&d[0]&1&&(n=!0,c.ref=s[0],Le(()=>n=!1)),e.$set(c)},i(s){r||(C(e.$$.fragment,s),r=!0)},o(s){_(e.$$.fragment,s),r=!1},d(s){t[27](null),z(e,s)}}}function _t(t,e,n){const r=["cellColor","sectionColor","cellSize","backgroundColor","backgroundOpacity","sectionSize","plane","gridSize","followCamera","infiniteGrid","fadeDistance","fadeStrength","cellThickness","sectionThickness","type","axis","maxRadius","cellDividers","sectionDividers","ref"];let i=ue(e,r),o,{$$slots:l={},$$scope:s}=e,{cellColor:d="#000000"}=e,{sectionColor:c="#0000ee"}=e,{cellSize:m=1}=e,{backgroundColor:a="#dadada"}=e,{backgroundOpacity:u=0}=e,{sectionSize:f=10}=e,{plane:b="xz"}=e,{gridSize:k=[20,20]}=e,{followCamera:p=!1}=e,{infiniteGrid:v=!1}=e,{fadeDistance:S=100}=e,{fadeStrength:P=1}=e,{cellThickness:j=1}=e,{sectionThickness:J=2}=e,{type:x="grid"}=e,{axis:K="x"}=e,{maxRadius:W=0}=e,{cellDividers:Q=6}=e,{sectionDividers:Z=2}=e,{ref:q}=e;const{fragmentShader:Pe,vertexShader:Ge}=gt,{invalidate:je}=N();let h={uSize1:{value:m},uSize2:{value:f},uColor1:{value:new A(d)},uColor2:{value:new A(c)},uBackgroundColor:{value:new A("#aaaaaa")},uBackgroundOpacity:{value:.7},uFadeDistance:{value:S},uFadeStrength:{value:P},uThickness1:{value:1},uThickness2:{value:1},uInfiniteGrid:{value:v?1:0},uFollowCamera:{value:0},uCoord0:{value:0},uCoord1:{value:2},uCoord2:{value:1},uGridType:{value:0},uLineGridCoord:{value:0},uCircleGridMaxRadius:{value:9},uPolarCellDividers:{value:6},uPolarSectionDividers:{value:2}};const V={x:0,y:1,z:2},Te={xz:"xzy",xy:"xyz",zy:"zyx"},$=et();ce(t,$,g=>n(3,o=g));function Ee(g){ve[g?"unshift":"push"](()=>{o=g,$.set(o)})}function xe(g){q=g,n(0,q)}return t.$$set=g=>{e=H(H({},e),He(g)),n(7,i=ue(e,r)),"cellColor"in g&&n(8,d=g.cellColor),"sectionColor"in g&&n(9,c=g.sectionColor),"cellSize"in g&&n(10,m=g.cellSize),"backgroundColor"in g&&n(11,a=g.backgroundColor),"backgroundOpacity"in g&&n(12,u=g.backgroundOpacity),"sectionSize"in g&&n(13,f=g.sectionSize),"plane"in g&&n(14,b=g.plane),"gridSize"in g&&n(1,k=g.gridSize),"followCamera"in g&&n(15,p=g.followCamera),"infiniteGrid"in g&&n(16,v=g.infiniteGrid),"fadeDistance"in g&&n(17,S=g.fadeDistance),"fadeStrength"in g&&n(18,P=g.fadeStrength),"cellThickness"in g&&n(19,j=g.cellThickness),"sectionThickness"in g&&n(20,J=g.sectionThickness),"type"in g&&n(21,x=g.type),"axis"in g&&n(22,K=g.axis),"maxRadius"in g&&n(23,W=g.maxRadius),"cellDividers"in g&&n(24,Q=g.cellDividers),"sectionDividers"in g&&n(25,Z=g.sectionDividers),"ref"in g&&n(0,q=g.ref),"$$scope"in g&&n(29,s=g.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&67108608){const g=Te[b],Ae=g.charAt(0),Fe=g.charAt(1),Ie=g.charAt(2);n(2,h.uCoord0.value=V[Ae],h),n(2,h.uCoord1.value=V[Fe],h),n(2,h.uCoord2.value=V[Ie],h),n(2,h.uSize1={value:m},h),n(2,h.uSize2={value:f},h),n(2,h.uColor1={value:new A(d)},h),n(2,h.uColor2={value:new A(c)},h),n(2,h.uBackgroundColor={value:new A(a)},h),n(2,h.uBackgroundOpacity={value:u},h),n(2,h.uFadeDistance={value:S},h),n(2,h.uFadeStrength={value:P},h),n(2,h.uThickness1={value:j},h),n(2,h.uThickness2={value:J},h),n(2,h.uFollowCamera={value:p?1:0},h),n(2,h.uInfiniteGrid={value:v?1:0},h),x=="grid"&&n(2,h.uGridType={value:0},h),x==="lines"&&(n(2,h.uGridType={value:1},h),n(2,h.uLineGridCoord={value:V[K]},h)),x==="circular"&&(n(2,h.uGridType={value:2},h),n(2,h.uCircleGridMaxRadius={value:W||0},h)),x==="polar"&&(n(2,h.uGridType={value:3},h),n(2,h.uCircleGridMaxRadius={value:W||0},h),n(2,h.uPolarCellDividers={value:Q||0},h),n(2,h.uPolarSectionDividers={value:Z||0},h)),je("Grid uniforms changed")}},[q,k,h,o,Pe,Ge,$,i,d,c,m,a,u,f,b,p,v,S,P,j,J,x,K,W,Q,Z,l,Ee,xe,s]}class pt extends ae{constructor(e){super(),se(this,e,_t,Ct,oe,{cellColor:8,sectionColor:9,cellSize:10,backgroundColor:11,backgroundOpacity:12,sectionSize:13,plane:14,gridSize:1,followCamera:15,infiniteGrid:16,fadeDistance:17,fadeStrength:18,cellThickness:19,sectionThickness:20,type:21,axis:22,maxRadius:23,cellDividers:24,sectionDividers:25,ref:0},null,[-1,-1])}}const kt=()=>{const t={portals:L(new Map),addPortal(e,n){t.portals.update(r=>(r.has(n)?console.warn(`Portal with id ${n} already exists. Skipping portal creation.`):r.set(n,e),r))},removePortal(e){t.portals.update(n=>(n.has(e)?n.delete(e):console.warn(`Portal with id ${e} does not exist. Skipping portal removal.`),n))},getPortal(e){return Se(t.portals,n=>n.get(e))},hasPortal(e){return t.portals.current.has(e)}};return t},yt=()=>tt("threlte-portals",kt());function de(t){let e,n;return e=new Ue({props:{onChildMount:t[6],onChildDestroy:t[7],$$slots:{default:[St]},$$scope:{ctx:t}}}),{c(){w(e.$$.fragment)},l(r){O(e.$$.fragment,r)},m(r,i){D(e,r,i),n=!0},p(r,i){const o={};i&1&&(o.onChildMount=r[6]),i&1&&(o.onChildDestroy=r[7]),i&256&&(o.$$scope={dirty:i,ctx:r}),e.$set(o)},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){z(e,r)}}}function St(t){let e;const n=t[5].default,r=be(n,t,t[8],null);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,o){r&&r.m(i,o),e=!0},p(i,o){r&&r.p&&(!e||o&256)&&Ce(r,n,i,i[8],e?pe(n,i[8],o,null):_e(i[8]),null)},i(i){e||(C(r,i),e=!0)},o(i){_(r,i),e=!1},d(i){r&&r.d(i)}}}function wt(t){let e,n,r=t[0]&&de(t);return{c(){r&&r.c(),e=Y()},l(i){r&&r.l(i),e=Y()},m(i,o){r&&r.m(i,o),T(i,e,o),n=!0},p(i,[o]){i[0]?r?(r.p(i,o),o&1&&C(r,1)):(r=de(i),r.c(),C(r,1),r.m(e.parentNode,e)):r&&(ke(),_(r,1,1,()=>{r=null}),ye())},i(i){n||(C(r),n=!0)},o(i){_(r),n=!1},d(i){i&&E(e),r&&r.d(i)}}}function Ot(t,e,n){let r,i,{$$slots:o={},$$scope:l}=e,{id:s="default"}=e,{object:d=void 0}=e;const{getPortal:c}=yt(),m=c(s);ce(t,m,f=>n(4,i=f));const a=f=>{r==null||r.add(f)},u=f=>{r==null||r.remove(f)};return t.$$set=f=>{"id"in f&&n(2,s=f.id),"object"in f&&n(3,d=f.object),"$$scope"in f&&n(8,l=f.$$scope)},t.$$.update=()=>{t.$$.dirty&24&&n(0,r=d??i)},[r,m,s,d,i,o,a,u,l]}class Dt extends ae{constructor(e){super(),se(this,e,Ot,wt,oe,{id:2,object:3})}}const zt=t=>{const e=we(N().camera);let n=0,r=0;const i=new ResizeObserver(o=>{for(const l of o)n=l.contentRect.width,r=l.contentRect.height});return le(t.target,o=>(o&&i.observe(o),()=>{o&&i.unobserve(o)})),(o,l)=>{l.pointer.update(s=>(s.set(o.offsetX/n*2-1,-(o.offsetY/r)*2+1),s)),l.raycaster.setFromCamera(l.pointer.current,e.current)}},Pt=()=>{const t=ne("threlte-interactivity-context"),e=Ye();return{...t,addInteractiveObject:i=>{if(!t){console.warn("No interactivity context found. Did you forget to implement interactivity()?");return}i.userData._threlte_interactivity_dispatcher=e,!t.interactiveObjects.find(o=>o.uuid===i.uuid)&&t.interactiveObjects.push(i)},removeInteractiveObject:i=>{if(!t){console.warn("No interactivity context found. Did you forget to implement interactivity()?");return}t.interactiveObjects=t.interactiveObjects.filter(o=>o.uuid!==i.uuid),delete i.userData._threlte_interactivity_dispatcher}}},Gt=t=>{const e=he(),n=B(!1);return Be(()=>{n.set(!!Object.keys(e.$$.callbacks).filter(r=>t?t.includes(r):!0).length)}),{hasEventHandlers:n}},jt=["click","contextmenu","dblclick","wheel","pointerup","pointerdown","pointerover","pointerout","pointerenter","pointerleave","pointermove","pointermissed"],Tt=()=>{st("interactivity",({ref:t})=>{if(!t.isObject3D)return;const{addInteractiveObject:e,removeInteractiveObject:n}=Pt(),r=B(t),{hasEventHandlers:i}=Gt(jt);return le([i,r],([o,l])=>{if(o)return e(l),()=>n(l)}),{onRefChange(o){r.set(o)}}})},U=t=>t.userData._threlte_interactivity_dispatcher;function te(t){return(t.eventObject||t.object).uuid+"/"+t.index+t.instanceId}const me=[["click",!1],["contextmenu",!1],["dblclick",!1],["wheel",!1],["pointerdown",!0],["pointerup",!0],["pointerleave",!0],["pointerenter",!0],["pointermove",!0],["pointercancel",!0]],Et=t=>{function e(c){const m=c.offsetX-t.initialClick[0],a=c.offsetY-t.initialClick[1];return Math.round(Math.sqrt(m*m+a*a))}function n(c){for(const m of t.hovered.values())if(!c.length||!c.find(a=>a.object===m.object&&a.index===m.index&&a.instanceId===m.instanceId)){const a=m.eventObject;t.hovered.delete(te(m));const u=U(a);if(u){const f={...m,intersections:c};u("pointerout",f),u("pointerleave",f)}}}const r=we(t.enabled),i=()=>{const c=new Set,m=[];let a=t.interactiveObjects.flatMap(u=>r.current?t.raycaster.intersectObject(u,!0):[]).sort((u,f)=>u.distance-f.distance).filter(u=>{const f=te(u);return c.has(f)?!1:(c.add(f),!0)});t.filter&&(a=t.filter(a,t));for(const u of a){let f=u.object;for(;f;)U(f)&&m.push({...u,eventObject:f}),f=f.parent}return m};function o(c,m){for(let a=0;a<m.length;a++){const u=U(m[a]);u&&u("pointermissed",c)}}const l=c=>c==="pointerleave"||c==="pointercancel"?()=>{t.pointerOverTarget.set(!1),n([])}:c==="pointerenter"?()=>{t.pointerOverTarget.set(!0)}:m=>{const a=c==="pointermove",u=c==="click"||c==="contextmenu"||c==="dblclick";t.compute(m,t);const f=i(),b=u?e(m):0;c==="pointerdown"&&(t.initialClick=[m.offsetX,m.offsetY],t.initialHits=f.map(p=>p.eventObject)),u&&!f.length&&b<=2&&o(m,t.interactiveObjects),a&&n(f);let k=!1;e:for(const p of f){const v={stopped:k,...p,intersections:f,stopPropagation(){if(k=!0,v.stopped=!0,t.hovered.size&&Array.from(t.hovered.values()).find(P=>P.eventObject===p.eventObject)){const P=f.slice(0,f.indexOf(p));n([...P,p])}},camera:t.raycaster.camera,delta:b,nativeEvent:m,pointer:t.pointer.current,ray:t.raycaster.ray},S=U(p.eventObject);if(!S)return;if(a){if(S.hasEventListener("pointerover")||S.hasEventListener("pointerenter")||S.hasEventListener("pointerout")||S.hasEventListener("pointerleave")){const P=te(v),j=t.hovered.get(P);j?j.stopped&&v.stopPropagation():(t.hovered.set(P,v),S("pointerover",v),S("pointerenter",v))}S("pointermove",v)}else S.hasEventListener(c)?(!u||t.initialHits.includes(p.eventObject))&&(o(m,t.interactiveObjects.filter(j=>!t.initialHits.includes(j))),S(c,v)):u&&t.initialHits.includes(p.eventObject)&&o(m,t.interactiveObjects.filter(j=>!t.initialHits.includes(j)));if(k)break e}},s=c=>{me.forEach(([m])=>{c.removeEventListener(m,l(m))})},d=c=>{me.forEach(([m,a])=>{c.addEventListener(m,l(m),{passive:a})})};le(t.target,c=>(c&&d(c),()=>{c&&s(c)}))},xt=t=>{const e={enabled:L((t==null?void 0:t.enabled)??!0),pointer:L(new Je),pointerOverTarget:L(!1),lastEvent:void 0,raycaster:new Ke,initialClick:[0,0],initialHits:[],hovered:new Map,interactiveObjects:[],target:L((t==null?void 0:t.target)??N().renderer.domElement),compute:()=>{},filter:t==null?void 0:t.filter};return e.compute=(t==null?void 0:t.compute)??zt(e),re("threlte-interactivity-context",e),Tt(),Et(e),e};function ge(t){return Object.prototype.toString.call(t)==="[object Date]"}function ie(t,e){if(t===e||t!==t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const r=e.map((i,o)=>ie(t[o],i));return i=>r.map(o=>o(i))}if(n==="object"){if(!t||!e)throw new Error("Object cannot be null");if(ge(t)&&ge(e)){t=t.getTime(),e=e.getTime();const o=e-t;return l=>new Date(t+l*o)}const r=Object.keys(e),i={};return r.forEach(o=>{i[o]=ie(t[o],e[o])}),o=>{const l={};return r.forEach(s=>{l[s]=i[s](o)}),l}}if(n==="number"){const r=e-t;return i=>t+i*r}throw new Error(`Cannot interpolate ${n} values`)}function At(t,e={}){const n=B(t);let r,i=t;function o(l,s){if(t==null)return n.set(t=l),Promise.resolve();i=l;let d=r,c=!1,{delay:m=0,duration:a=400,easing:u=Ne,interpolate:f=ie}=H(H({},e),s);if(a===0)return d&&(d.abort(),d=null),n.set(t=i),Promise.resolve();const b=it()+m;let k;return r=ot(p=>{if(p<b)return!0;c||(k=f(t,l),typeof a=="function"&&(a=a(t,l)),c=!0),d&&(d.abort(),d=null);const v=p-b;return v>a?(n.set(t=l),!1):(n.set(t=k(u(v/a))),!0)}),r.promise}return{set:o,update:(l,s)=>o(l(i,t),s),subscribe:n.subscribe}}function Ft(t){let e,n;return e=new rt({}),{c(){w(e.$$.fragment)},l(r){O(e.$$.fragment,r)},m(r,i){D(e,r,i),n=!0},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){z(e,r)}}}function It(t){let e,n;return e=new G.DirectionalLightHelper({props:{args:[t[15]]}}),{c(){w(e.$$.fragment)},l(r){O(e.$$.fragment,r)},m(r,i){D(e,r,i),n=!0},p(r,i){const o={};i&32768&&(o.args=[r[15]]),e.$set(o)},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){z(e,r)}}}function Mt(t){let e,n;return e=new Dt({props:{object:t[5],$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){w(e.$$.fragment)},l(r){O(e.$$.fragment,r)},m(r,i){D(e,r,i),n=!0},p(r,i){const o={};i&98304&&(o.$$scope={dirty:i,ctx:r}),e.$set(o)},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){z(e,r)}}}function Rt(t){return{c:y,l:y,m:y,p:y,i:y,o:y,d:y}}function Lt(t){let e,n;return e=new G.Mesh({props:{"position.x":t[1],"position.y":t[4],"rotation.z":t[2],$$slots:{default:[Ht]},$$scope:{ctx:t}}}),{c(){w(e.$$.fragment)},l(r){O(e.$$.fragment,r)},m(r,i){D(e,r,i),n=!0},p(r,i){const o={};i&2&&(o["position.x"]=r[1]),i&4&&(o["rotation.z"]=r[2]),i&65536&&(o.$$scope={dirty:i,ctx:r}),e.$set(o)},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){z(e,r)}}}function Ht(t){let e,n,r,i;return e=new G.MeshStandardMaterial({props:{map:t[14],color:"ff00ff"}}),r=new G.BoxGeometry({}),{c(){w(e.$$.fragment),n=F(),w(r.$$.fragment)},l(o){O(e.$$.fragment,o),n=I(o),O(r.$$.fragment,o)},m(o,l){D(e,o,l),T(o,n,l),D(r,o,l),i=!0},p:y,i(o){i||(C(e.$$.fragment,o),C(r.$$.fragment,o),i=!0)},o(o){_(e.$$.fragment,o),_(r.$$.fragment,o),i=!1},d(o){o&&E(n),z(e,o),z(r,o)}}}function Bt(t){return{c:y,l:y,m:y,p:y,i:y,o:y,d:y}}function Nt(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!1,pending:Bt,then:Lt,catch:Rt,value:14,blocks:[,,,]};return ct(t[9],r),{c(){e=Y(),r.block.c()},l(i){e=Y(),r.block.l(i)},m(i,o){T(i,e,o),r.block.m(i,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e,n=!0},p(i,o){t=i,at(r,t,o)},i(i){n||(C(r.block),n=!0)},o(i){for(let o=0;o<3;o+=1){const l=r.blocks[o];_(l)}n=!1},d(i){i&&E(e),r.block.d(i),r.token=null,r=null}}}function Wt(t){let e,n,r,i,o,l,s,d,c,m;return e=new G.AmbientLight({}),r=new pt({props:{sectionColor:"#00ffff",infiniteGrid:!0,cellColor:"#00ffff"}}),o=new G.PerspectiveCamera({props:{makeDefault:!0,"position.x":5,"position.y":5,"position.z":5,$$slots:{default:[Ft]},$$scope:{ctx:t}}}),s=new G.DirectionalLight({props:{color:"#ff0000","position.x":-2,"position.y":2,"position.z":-2,$$slots:{default:[Mt,({ref:a})=>({15:a}),({ref:a})=>a?32768:0]},$$scope:{ctx:t}}}),c=new G.Group({props:{"rotation.z":t[3],"position.x":t[0],$$slots:{default:[Nt]},$$scope:{ctx:t}}}),c.$on("click",t[7]),c.$on("contextmenu",t[8]),{c(){w(e.$$.fragment),n=F(),w(r.$$.fragment),i=F(),w(o.$$.fragment),l=F(),w(s.$$.fragment),d=F(),w(c.$$.fragment)},l(a){O(e.$$.fragment,a),n=I(a),O(r.$$.fragment,a),i=I(a),O(o.$$.fragment,a),l=I(a),O(s.$$.fragment,a),d=I(a),O(c.$$.fragment,a)},m(a,u){D(e,a,u),T(a,n,u),D(r,a,u),T(a,i,u),D(o,a,u),T(a,l,u),D(s,a,u),T(a,d,u),D(c,a,u),m=!0},p(a,[u]){const f={};u&65536&&(f.$$scope={dirty:u,ctx:a}),o.$set(f);const b={};u&98304&&(b.$$scope={dirty:u,ctx:a}),s.$set(b);const k={};u&8&&(k["rotation.z"]=a[3]),u&1&&(k["position.x"]=a[0]),u&65542&&(k.$$scope={dirty:u,ctx:a}),c.$set(k)},i(a){m||(C(e.$$.fragment,a),C(r.$$.fragment,a),C(o.$$.fragment,a),C(s.$$.fragment,a),C(c.$$.fragment,a),m=!0)},o(a){_(e.$$.fragment,a),_(r.$$.fragment,a),_(o.$$.fragment,a),_(s.$$.fragment,a),_(c.$$.fragment,a),m=!1},d(a){a&&(E(n),E(i),E(l),E(d)),z(e,a),z(r,a),z(o,a),z(s,a),z(c,a)}}}const R=1;function qt(t,e,n){let r;const i=.5*R,{scene:o}=N(),l=v=>v*(Math.PI/180),s=At(0),d=Se(s,l);ce(t,d,v=>n(3,r=v));let c=0,m=i,a="left",u=0,f=!1;const b=async()=>{f||(f=!0,a!=="left"&&(a="left",n(0,c-=R),n(1,m=i)),await s.update(v=>v+90).then(()=>{n(0,c-=R),s.set(0,{duration:0}),n(2,u+=.5*Math.PI),f=!1}))},k=async()=>{f||(f=!0,a!=="right"&&(a="right",n(0,c+=R),n(1,m=-i)),await s.update(v=>v-90).then(()=>{n(0,c+=R),s.set(0,{duration:0}),n(2,u-=.5*Math.PI),f=!1}))},p=ut(`${nt}/spiral.png`);return xt(),[c,m,u,r,i,o,d,b,k,p]}class Zt extends ae{constructor(e){super(),se(this,e,qt,Wt,oe,{})}}export{Zt as component};
