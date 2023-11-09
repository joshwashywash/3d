import{A as S,N as Ie,I as he,O as X,P as Re,D as te,H as re,s as ie,J as H,p as ve,Q as Le,K as le,z as oe,L as He,r as be,a as F,c as M,i as T,w as _e,x as pe,y as Ce,d as E,e as Y,o as Be,R as Ne}from"../chunks/scheduler.9c5215e0.js";import{g as ke,t as p,c as ye,a as _,S as ae,i as ce,f as We,b as w,d as D,m as z,e as j}from"../chunks/index.9a2cb203.js";import{w as B,d as Se}from"../chunks/index.a5bb5521.js";import{u as N,J as qe,R as Ve,e as G,k as A,D as Xe,c as L,H as Ue,K as Oe,w as se,N as Ye,V as Je,Q as Ke}from"../chunks/T.3b9bbcbe.js";import{u as Qe}from"../chunks/cache.a86f5ac9.js";import{g as Ze,a as $e,f as et,b as tt,O as rt}from"../chunks/vertex.34909bb1.js";import{b as nt}from"../chunks/paths.940495a4.js";const we=typeof window<"u";let it=we?()=>window.performance.now():()=>Date.now(),De=we?t=>requestAnimationFrame(t):S;const I=new Set;function ze(t){I.forEach(e=>{e.c(t)||(I.delete(e),e.f())}),I.size!==0&&De(ze)}function ot(t){let e;return I.size===0&&De(ze),{promise:new Promise(n=>{I.add(e={c:t,f:n})}),abort(){I.delete(e)}}}function at(t,e){const n=e.token={};function r(i,o,l,s){if(e.token!==n)return;e.resolved=s;let f=e.ctx;l!==void 0&&(f=f.slice(),f[l]=s);const a=i&&(e.current=i)(f);let d=!1;e.block&&(e.blocks?e.blocks.forEach((c,u)=>{u!==o&&c&&(ke(),p(c,1,1,()=>{e.blocks[u]===c&&(e.blocks[u]=null)}),ye())}):e.block.d(1),a.c(),_(a,1),a.m(e.mount(),e.anchor),d=!0),e.block=a,e.blocks&&(e.blocks[o]=a),d&&Re()}if(Ie(t)){const i=he();if(t.then(o=>{X(i),r(e.then,1,e.value,o),X(null)},o=>{if(X(i),r(e.catch,2,e.error,o),X(null),!e.hasCatch)throw o}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function ct(t,e,n){const r=e.slice(),{resolved:i}=t;t.current===t.then&&(r[t.value]=i),t.current===t.catch&&(r[t.error]=i),t.block.p(r,n)}function st(t,e){const n="threlte-plugin-context";if(Array.isArray(t)){const[r,i]=t;te(n,{...re(n),[r]:i})}else{const r=t,i=e;if(!i)return;te(n,{...re(n),[r]:i})}}const $=t=>{const e=B(void 0),n=B(void 0);return t.then(r=>{e.set(r)}).catch(r=>{console.error("Error in asyncWritable:",r.message),n.set(r)}),Object.assign(Object.assign(t,e),{error:n,promise:t})},lt=(t,e={})=>{var s;const{remember:n,clear:r}=Qe(),i=new t;return(s=e.extend)==null||s.call(e,i),{load:(f,a)=>{if(Array.isArray(f)){const d=f.map(u=>n(async()=>{var b;const m=await i.loadAsync(u,a==null?void 0:a.onProgress);return((b=a==null?void 0:a.transform)==null?void 0:b.call(a,m))??m},[t,u]));return $(Promise.all(d))}else if(typeof f=="string"){const d=n(async()=>{var m;const u=await i.loadAsync(f,a==null?void 0:a.onProgress);return((m=a==null?void 0:a.transform)==null?void 0:m.call(a,u))??u},[t,f]);return $(d)}else{const d=Object.values(f).map(u=>n(async()=>{var b;const m=await i.loadAsync(u,a==null?void 0:a.onProgress);return((b=a==null?void 0:a.transform)==null?void 0:b.call(a,m))??m},[t,u]));return $(Promise.all(d).then(u=>Object.fromEntries(Object.entries(f).map(([m],b)=>[m,u[b]]))))}},clear:f=>{Array.isArray(f)?f.forEach(a=>{r([t,a])}):typeof f=="string"?r([t,f]):Object.entries(f).forEach(([a,d])=>{r([t,a,d])})},loader:i}},ut=(t,e)=>{const n=lt(qe,e),{renderer:r}=N();return n.load(t,{...e,transform:i=>{var o;return"colorSpace"in i?i.colorSpace=r.outputColorSpace:i.encoding=r.outputEncoding,i.needsUpdate=!0,((o=e==null?void 0:e.transform)==null?void 0:o.call(e,i))??i}})},ft=Number.parseInt(Ve.replace("dev","")),dt=`
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
`,gt={fragmentShader:mt,vertexShader:dt},ht=t=>({ref:t[0]&1}),ue=t=>({ref:t[0]});function vt(t){let e,n;return e=new G.PlaneGeometry({props:{args:typeof t[1]=="number"?[t[1],t[1]]:t[1]}}),{c(){w(e.$$.fragment)},l(r){D(e.$$.fragment,r)},m(r,i){z(e,r,i),n=!0},p(r,i){const o={};i[0]&2&&(o.args=typeof r[1]=="number"?[r[1],r[1]]:r[1]),e.$set(o)},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){p(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function bt(t){let e,n,r;e=new G.ShaderMaterial({props:{fragmentShader:t[4],vertexShader:t[5],uniforms:t[2],transparent:!0,side:Xe,defines:{USE_COLORSPACE_FRAGMENT:ft>=154?"":void 0}}});const i=t[26].default,o=be(i,t,t[29],ue),l=o||vt(t);return{c(){w(e.$$.fragment),n=F(),l&&l.c()},l(s){D(e.$$.fragment,s),n=M(s),l&&l.l(s)},m(s,f){z(e,s,f),T(s,n,f),l&&l.m(s,f),r=!0},p(s,f){const a={};f[0]&4&&(a.uniforms=s[2]),e.$set(a),o?o.p&&(!r||f[0]&536870913)&&_e(o,i,s,s[29],r?Ce(i,s[29],f,ht):pe(s[29]),ue):l&&l.p&&(!r||f[0]&2)&&l.p(s,r?f:[-1,-1])},i(s){r||(_(e.$$.fragment,s),_(l,s),r=!0)},o(s){p(e.$$.fragment,s),p(l,s),r=!1},d(s){s&&E(n),j(e,s),l&&l.d(s)}}}function _t(t){let e,n,r;const i=[{frustumCulled:!1},t[7]];function o(s){t[28](s)}let l={$$slots:{default:[bt,({ref:s})=>({0:s}),({ref:s})=>[s?1:0]]},$$scope:{ctx:t}};for(let s=0;s<i.length;s+=1)l=H(l,i[s]);return t[0]!==void 0&&(l.ref=t[0]),e=new G.Mesh({props:l}),t[27](e),ve.push(()=>We(e,"ref",o)),{c(){w(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,f){z(e,s,f),r=!0},p(s,f){const a=f[0]&128?Ze(i,[i[0],$e(s[7])]):{};f[0]&536870919&&(a.$$scope={dirty:f,ctx:s}),!n&&f[0]&1&&(n=!0,a.ref=s[0],Le(()=>n=!1)),e.$set(a)},i(s){r||(_(e.$$.fragment,s),r=!0)},o(s){p(e.$$.fragment,s),r=!1},d(s){t[27](null),j(e,s)}}}function pt(t,e,n){const r=["cellColor","sectionColor","cellSize","backgroundColor","backgroundOpacity","sectionSize","plane","gridSize","followCamera","infiniteGrid","fadeDistance","fadeStrength","cellThickness","sectionThickness","type","axis","maxRadius","cellDividers","sectionDividers","ref"];let i=le(e,r),o,{$$slots:l={},$$scope:s}=e,{cellColor:f="#000000"}=e,{sectionColor:a="#0000ee"}=e,{cellSize:d=1}=e,{backgroundColor:c="#dadada"}=e,{backgroundOpacity:u=0}=e,{sectionSize:m=10}=e,{plane:b="xz"}=e,{gridSize:y=[20,20]}=e,{followCamera:v=!1}=e,{infiniteGrid:C=!1}=e,{fadeDistance:k=100}=e,{fadeStrength:O=1}=e,{cellThickness:P=1}=e,{sectionThickness:R=2}=e,{type:x="grid"}=e,{axis:J="x"}=e,{maxRadius:W=0}=e,{cellDividers:K=6}=e,{sectionDividers:Q=2}=e,{ref:q}=e;const{fragmentShader:je,vertexShader:Pe}=gt,{invalidate:Ge}=N();let h={uSize1:{value:d},uSize2:{value:m},uColor1:{value:new A(f)},uColor2:{value:new A(a)},uBackgroundColor:{value:new A("#aaaaaa")},uBackgroundOpacity:{value:.7},uFadeDistance:{value:k},uFadeStrength:{value:O},uThickness1:{value:1},uThickness2:{value:1},uInfiniteGrid:{value:C?1:0},uFollowCamera:{value:0},uCoord0:{value:0},uCoord1:{value:2},uCoord2:{value:1},uGridType:{value:0},uLineGridCoord:{value:0},uCircleGridMaxRadius:{value:9},uPolarCellDividers:{value:6},uPolarSectionDividers:{value:2}};const V={x:0,y:1,z:2},Te={xz:"xzy",xy:"xyz",zy:"zyx"},Z=et();oe(t,Z,g=>n(3,o=g));function Ee(g){ve[g?"unshift":"push"](()=>{o=g,Z.set(o)})}function xe(g){q=g,n(0,q)}return t.$$set=g=>{e=H(H({},e),He(g)),n(7,i=le(e,r)),"cellColor"in g&&n(8,f=g.cellColor),"sectionColor"in g&&n(9,a=g.sectionColor),"cellSize"in g&&n(10,d=g.cellSize),"backgroundColor"in g&&n(11,c=g.backgroundColor),"backgroundOpacity"in g&&n(12,u=g.backgroundOpacity),"sectionSize"in g&&n(13,m=g.sectionSize),"plane"in g&&n(14,b=g.plane),"gridSize"in g&&n(1,y=g.gridSize),"followCamera"in g&&n(15,v=g.followCamera),"infiniteGrid"in g&&n(16,C=g.infiniteGrid),"fadeDistance"in g&&n(17,k=g.fadeDistance),"fadeStrength"in g&&n(18,O=g.fadeStrength),"cellThickness"in g&&n(19,P=g.cellThickness),"sectionThickness"in g&&n(20,R=g.sectionThickness),"type"in g&&n(21,x=g.type),"axis"in g&&n(22,J=g.axis),"maxRadius"in g&&n(23,W=g.maxRadius),"cellDividers"in g&&n(24,K=g.cellDividers),"sectionDividers"in g&&n(25,Q=g.sectionDividers),"ref"in g&&n(0,q=g.ref),"$$scope"in g&&n(29,s=g.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&67108608){const g=Te[b],Ae=g.charAt(0),Fe=g.charAt(1),Me=g.charAt(2);n(2,h.uCoord0.value=V[Ae],h),n(2,h.uCoord1.value=V[Fe],h),n(2,h.uCoord2.value=V[Me],h),n(2,h.uSize1={value:d},h),n(2,h.uSize2={value:m},h),n(2,h.uColor1={value:new A(f)},h),n(2,h.uColor2={value:new A(a)},h),n(2,h.uBackgroundColor={value:new A(c)},h),n(2,h.uBackgroundOpacity={value:u},h),n(2,h.uFadeDistance={value:k},h),n(2,h.uFadeStrength={value:O},h),n(2,h.uThickness1={value:P},h),n(2,h.uThickness2={value:R},h),n(2,h.uFollowCamera={value:v?1:0},h),n(2,h.uInfiniteGrid={value:C?1:0},h),x=="grid"&&n(2,h.uGridType={value:0},h),x==="lines"&&(n(2,h.uGridType={value:1},h),n(2,h.uLineGridCoord={value:V[J]},h)),x==="circular"&&(n(2,h.uGridType={value:2},h),n(2,h.uCircleGridMaxRadius={value:W||0},h)),x==="polar"&&(n(2,h.uGridType={value:3},h),n(2,h.uCircleGridMaxRadius={value:W||0},h),n(2,h.uPolarCellDividers={value:K||0},h),n(2,h.uPolarSectionDividers={value:Q||0},h)),Ge("Grid uniforms changed")}},[q,y,h,o,je,Pe,Z,i,f,a,d,c,u,m,b,v,C,k,O,P,R,x,J,W,K,Q,l,Ee,xe,s]}class Ct extends ae{constructor(e){super(),ce(this,e,pt,_t,ie,{cellColor:8,sectionColor:9,cellSize:10,backgroundColor:11,backgroundOpacity:12,sectionSize:13,plane:14,gridSize:1,followCamera:15,infiniteGrid:16,fadeDistance:17,fadeStrength:18,cellThickness:19,sectionThickness:20,type:21,axis:22,maxRadius:23,cellDividers:24,sectionDividers:25,ref:0},null,[-1,-1])}}const kt=()=>{const t={portals:L(new Map),addPortal(e,n){t.portals.update(r=>(r.has(n)?console.warn(`Portal with id ${n} already exists. Skipping portal creation.`):r.set(n,e),r))},removePortal(e){t.portals.update(n=>(n.has(e)?n.delete(e):console.warn(`Portal with id ${e} does not exist. Skipping portal removal.`),n))},getPortal(e){return Se(t.portals,n=>n.get(e))},hasPortal(e){return t.portals.current.has(e)}};return t},yt=()=>tt("threlte-portals",kt());function fe(t){let e,n;return e=new Ue({props:{onChildMount:t[6],onChildDestroy:t[7],$$slots:{default:[St]},$$scope:{ctx:t}}}),{c(){w(e.$$.fragment)},l(r){D(e.$$.fragment,r)},m(r,i){z(e,r,i),n=!0},p(r,i){const o={};i&1&&(o.onChildMount=r[6]),i&1&&(o.onChildDestroy=r[7]),i&256&&(o.$$scope={dirty:i,ctx:r}),e.$set(o)},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){p(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function St(t){let e;const n=t[5].default,r=be(n,t,t[8],null);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,o){r&&r.m(i,o),e=!0},p(i,o){r&&r.p&&(!e||o&256)&&_e(r,n,i,i[8],e?Ce(n,i[8],o,null):pe(i[8]),null)},i(i){e||(_(r,i),e=!0)},o(i){p(r,i),e=!1},d(i){r&&r.d(i)}}}function Ot(t){let e,n,r=t[0]&&fe(t);return{c(){r&&r.c(),e=Y()},l(i){r&&r.l(i),e=Y()},m(i,o){r&&r.m(i,o),T(i,e,o),n=!0},p(i,[o]){i[0]?r?(r.p(i,o),o&1&&_(r,1)):(r=fe(i),r.c(),_(r,1),r.m(e.parentNode,e)):r&&(ke(),p(r,1,1,()=>{r=null}),ye())},i(i){n||(_(r),n=!0)},o(i){p(r),n=!1},d(i){i&&E(e),r&&r.d(i)}}}function wt(t,e,n){let r,i,{$$slots:o={},$$scope:l}=e,{id:s="default"}=e,{object:f=void 0}=e;const{getPortal:a}=yt(),d=a(s);oe(t,d,m=>n(4,i=m));const c=m=>{r==null||r.add(m)},u=m=>{r==null||r.remove(m)};return t.$$set=m=>{"id"in m&&n(2,s=m.id),"object"in m&&n(3,f=m.object),"$$scope"in m&&n(8,l=m.$$scope)},t.$$.update=()=>{t.$$.dirty&24&&n(0,r=f??i)},[r,d,s,f,i,o,c,u,l]}class Dt extends ae{constructor(e){super(),ce(this,e,wt,Ot,ie,{id:2,object:3})}}const zt=t=>{const e=Oe(N().camera);let n=0,r=0;const i=new ResizeObserver(o=>{for(const l of o)n=l.contentRect.width,r=l.contentRect.height});return se(t.target,o=>(o&&i.observe(o),()=>{o&&i.unobserve(o)})),(o,l)=>{l.pointer.update(s=>(s.set(o.offsetX/n*2-1,-(o.offsetY/r)*2+1),s)),l.raycaster.setFromCamera(l.pointer.current,e.current)}},jt=()=>{const t=re("threlte-interactivity-context"),e=Ye();return{...t,addInteractiveObject:i=>{if(!t){console.warn("No interactivity context found. Did you forget to implement interactivity()?");return}i.userData._threlte_interactivity_dispatcher=e,!t.interactiveObjects.find(o=>o.uuid===i.uuid)&&t.interactiveObjects.push(i)},removeInteractiveObject:i=>{if(!t){console.warn("No interactivity context found. Did you forget to implement interactivity()?");return}t.interactiveObjects=t.interactiveObjects.filter(o=>o.uuid!==i.uuid),delete i.userData._threlte_interactivity_dispatcher}}},Pt=t=>{const e=he(),n=B(!1);return Be(()=>{n.set(!!Object.keys(e.$$.callbacks).filter(r=>t?t.includes(r):!0).length)}),{hasEventHandlers:n}},Gt=["click","contextmenu","dblclick","wheel","pointerup","pointerdown","pointerover","pointerout","pointerenter","pointerleave","pointermove","pointermissed"],Tt=()=>{st("interactivity",({ref:t})=>{if(!t.isObject3D)return;const{addInteractiveObject:e,removeInteractiveObject:n}=jt(),r=B(t),{hasEventHandlers:i}=Pt(Gt);return se([i,r],([o,l])=>{if(o)return e(l),()=>n(l)}),{onRefChange(o){r.set(o)}}})},U=t=>t.userData._threlte_interactivity_dispatcher;function ee(t){return(t.eventObject||t.object).uuid+"/"+t.index+t.instanceId}const de=[["click",!1],["contextmenu",!1],["dblclick",!1],["wheel",!1],["pointerdown",!0],["pointerup",!0],["pointerleave",!0],["pointerenter",!0],["pointermove",!0],["pointercancel",!0]],Et=t=>{function e(a){const d=a.offsetX-t.initialClick[0],c=a.offsetY-t.initialClick[1];return Math.round(Math.sqrt(d*d+c*c))}function n(a){for(const d of t.hovered.values())if(!a.length||!a.find(c=>c.object===d.object&&c.index===d.index&&c.instanceId===d.instanceId)){const c=d.eventObject;t.hovered.delete(ee(d));const u=U(c);if(u){const m={...d,intersections:a};u("pointerout",m),u("pointerleave",m)}}}const r=Oe(t.enabled),i=()=>{const a=new Set,d=[];let c=t.interactiveObjects.flatMap(u=>r.current?t.raycaster.intersectObject(u,!0):[]).sort((u,m)=>u.distance-m.distance).filter(u=>{const m=ee(u);return a.has(m)?!1:(a.add(m),!0)});t.filter&&(c=t.filter(c,t));for(const u of c){let m=u.object;for(;m;)U(m)&&d.push({...u,eventObject:m}),m=m.parent}return d};function o(a,d){for(let c=0;c<d.length;c++){const u=U(d[c]);u&&u("pointermissed",a)}}const l=a=>a==="pointerleave"||a==="pointercancel"?()=>{t.pointerOverTarget.set(!1),n([])}:a==="pointerenter"?()=>{t.pointerOverTarget.set(!0)}:d=>{const c=a==="pointermove",u=a==="click"||a==="contextmenu"||a==="dblclick";t.compute(d,t);const m=i(),b=u?e(d):0;a==="pointerdown"&&(t.initialClick=[d.offsetX,d.offsetY],t.initialHits=m.map(v=>v.eventObject)),u&&!m.length&&b<=2&&o(d,t.interactiveObjects),c&&n(m);let y=!1;e:for(const v of m){const C={stopped:y,...v,intersections:m,stopPropagation(){if(y=!0,C.stopped=!0,t.hovered.size&&Array.from(t.hovered.values()).find(O=>O.eventObject===v.eventObject)){const O=m.slice(0,m.indexOf(v));n([...O,v])}},camera:t.raycaster.camera,delta:b,nativeEvent:d,pointer:t.pointer.current,ray:t.raycaster.ray},k=U(v.eventObject);if(!k)return;if(c){if(k.hasEventListener("pointerover")||k.hasEventListener("pointerenter")||k.hasEventListener("pointerout")||k.hasEventListener("pointerleave")){const O=ee(C),P=t.hovered.get(O);P?P.stopped&&C.stopPropagation():(t.hovered.set(O,C),k("pointerover",C),k("pointerenter",C))}k("pointermove",C)}else k.hasEventListener(a)?(!u||t.initialHits.includes(v.eventObject))&&(o(d,t.interactiveObjects.filter(P=>!t.initialHits.includes(P))),k(a,C)):u&&t.initialHits.includes(v.eventObject)&&o(d,t.interactiveObjects.filter(P=>!t.initialHits.includes(P)));if(y)break e}},s=a=>{de.forEach(([d])=>{a.removeEventListener(d,l(d))})},f=a=>{de.forEach(([d,c])=>{a.addEventListener(d,l(d),{passive:c})})};se(t.target,a=>(a&&f(a),()=>{a&&s(a)}))},xt=t=>{const e={enabled:L((t==null?void 0:t.enabled)??!0),pointer:L(new Je),pointerOverTarget:L(!1),lastEvent:void 0,raycaster:new Ke,initialClick:[0,0],initialHits:[],hovered:new Map,interactiveObjects:[],target:L((t==null?void 0:t.target)??N().renderer.domElement),compute:()=>{},filter:t==null?void 0:t.filter};return e.compute=(t==null?void 0:t.compute)??zt(e),te("threlte-interactivity-context",e),Tt(),Et(e),e},At=()=>({description:"Rolling a cube on a flat surface is more complex than it sounds",title:"Rolling a Cube"}),$t=Object.freeze(Object.defineProperty({__proto__:null,load:At},Symbol.toStringTag,{value:"Module"}));function me(t){return Object.prototype.toString.call(t)==="[object Date]"}function ne(t,e){if(t===e||t!==t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const r=e.map((i,o)=>ne(t[o],i));return i=>r.map(o=>o(i))}if(n==="object"){if(!t||!e)throw new Error("Object cannot be null");if(me(t)&&me(e)){t=t.getTime(),e=e.getTime();const o=e-t;return l=>new Date(t+l*o)}const r=Object.keys(e),i={};return r.forEach(o=>{i[o]=ne(t[o],e[o])}),o=>{const l={};return r.forEach(s=>{l[s]=i[s](o)}),l}}if(n==="number"){const r=e-t;return i=>t+i*r}throw new Error(`Cannot interpolate ${n} values`)}function Ft(t,e={}){const n=B(t);let r,i=t;function o(l,s){if(t==null)return n.set(t=l),Promise.resolve();i=l;let f=r,a=!1,{delay:d=0,duration:c=400,easing:u=Ne,interpolate:m=ne}=H(H({},e),s);if(c===0)return f&&(f.abort(),f=null),n.set(t=i),Promise.resolve();const b=it()+d;let y;return r=ot(v=>{if(v<b)return!0;a||(y=m(t,l),typeof c=="function"&&(c=c(t,l)),a=!0),f&&(f.abort(),f=null);const C=v-b;return C>c?(n.set(t=l),!1):(n.set(t=y(u(C/c))),!0)}),r.promise}return{set:o,update:(l,s)=>o(l(i,t),s),subscribe:n.subscribe}}function Mt(t){let e,n;return e=new rt({}),{c(){w(e.$$.fragment)},l(r){D(e.$$.fragment,r)},m(r,i){z(e,r,i),n=!0},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){p(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function It(t){let e,n;return e=new G.DirectionalLightHelper({props:{args:[t[14]]}}),{c(){w(e.$$.fragment)},l(r){D(e.$$.fragment,r)},m(r,i){z(e,r,i),n=!0},p(r,i){const o={};i&16384&&(o.args=[r[14]]),e.$set(o)},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){p(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function Rt(t){let e,n;return e=new Dt({props:{object:t[5],$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){w(e.$$.fragment)},l(r){D(e.$$.fragment,r)},m(r,i){z(e,r,i),n=!0},p(r,i){const o={};i&49152&&(o.$$scope={dirty:i,ctx:r}),e.$set(o)},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){p(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function Lt(t){return{c:S,l:S,m:S,p:S,i:S,o:S,d:S}}function Ht(t){let e,n;return e=new G.Mesh({props:{"position.x":t[0],"position.y":t[4],"rotation.z":t[2],$$slots:{default:[Bt]},$$scope:{ctx:t}}}),{c(){w(e.$$.fragment)},l(r){D(e.$$.fragment,r)},m(r,i){z(e,r,i),n=!0},p(r,i){const o={};i&1&&(o["position.x"]=r[0]),i&4&&(o["rotation.z"]=r[2]),i&32768&&(o.$$scope={dirty:i,ctx:r}),e.$set(o)},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){p(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function Bt(t){let e,n,r,i;return e=new G.MeshStandardMaterial({props:{map:t[13],color:"#ff00ff"}}),r=new G.BoxGeometry({}),{c(){w(e.$$.fragment),n=F(),w(r.$$.fragment)},l(o){D(e.$$.fragment,o),n=M(o),D(r.$$.fragment,o)},m(o,l){z(e,o,l),T(o,n,l),z(r,o,l),i=!0},p:S,i(o){i||(_(e.$$.fragment,o),_(r.$$.fragment,o),i=!0)},o(o){p(e.$$.fragment,o),p(r.$$.fragment,o),i=!1},d(o){o&&E(n),j(e,o),j(r,o)}}}function Nt(t){return{c:S,l:S,m:S,p:S,i:S,o:S,d:S}}function Wt(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!1,pending:Nt,then:Ht,catch:Lt,value:13,blocks:[,,,]};return at(t[9],r),{c(){e=Y(),r.block.c()},l(i){e=Y(),r.block.l(i)},m(i,o){T(i,e,o),r.block.m(i,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e,n=!0},p(i,o){t=i,ct(r,t,o)},i(i){n||(_(r.block),n=!0)},o(i){for(let o=0;o<3;o+=1){const l=r.blocks[o];p(l)}n=!1},d(i){i&&E(e),r.block.d(i),r.token=null,r=null}}}function qt(t){let e,n,r,i,o,l,s,f,a,d;return e=new G.AmbientLight({}),r=new Ct({props:{sectionColor:"#00ffff",infiniteGrid:!0,cellColor:"#00ffff"}}),o=new G.PerspectiveCamera({props:{makeDefault:!0,"position.x":5,"position.y":5,"position.z":5,$$slots:{default:[Mt]},$$scope:{ctx:t}}}),s=new G.DirectionalLight({props:{color:"#ff0000","position.x":-2,"position.y":2,"position.z":-2,$$slots:{default:[Rt,({ref:c})=>({14:c}),({ref:c})=>c?16384:0]},$$scope:{ctx:t}}}),a=new G.Group({props:{"rotation.z":t[3],"position.x":t[1],$$slots:{default:[Wt]},$$scope:{ctx:t}}}),a.$on("click",t[7]),a.$on("contextmenu",t[8]),{c(){w(e.$$.fragment),n=F(),w(r.$$.fragment),i=F(),w(o.$$.fragment),l=F(),w(s.$$.fragment),f=F(),w(a.$$.fragment)},l(c){D(e.$$.fragment,c),n=M(c),D(r.$$.fragment,c),i=M(c),D(o.$$.fragment,c),l=M(c),D(s.$$.fragment,c),f=M(c),D(a.$$.fragment,c)},m(c,u){z(e,c,u),T(c,n,u),z(r,c,u),T(c,i,u),z(o,c,u),T(c,l,u),z(s,c,u),T(c,f,u),z(a,c,u),d=!0},p(c,[u]){const m={};u&32768&&(m.$$scope={dirty:u,ctx:c}),o.$set(m);const b={};u&49152&&(b.$$scope={dirty:u,ctx:c}),s.$set(b);const y={};u&8&&(y["rotation.z"]=c[3]),u&2&&(y["position.x"]=c[1]),u&32773&&(y.$$scope={dirty:u,ctx:c}),a.$set(y)},i(c){d||(_(e.$$.fragment,c),_(r.$$.fragment,c),_(o.$$.fragment,c),_(s.$$.fragment,c),_(a.$$.fragment,c),d=!0)},o(c){p(e.$$.fragment,c),p(r.$$.fragment,c),p(o.$$.fragment,c),p(s.$$.fragment,c),p(a.$$.fragment,c),d=!1},d(c){c&&(E(n),E(i),E(l),E(f)),j(e,c),j(r,c),j(o,c),j(s,c),j(a,c)}}}const ge=1;function Vt(t,e,n){let r;const i=.5*ge,{scene:o}=N(),l=v=>v*(Math.PI/180),s=Ft(0),f=Se(s,l);oe(t,f,v=>n(3,r=v));let a=i,d=0,c=0;const u=(v=1)=>{let C=!1;const k=async O=>{if(!C){C=!0,Math.sign(a)===O&&(n(1,d+=O*v),n(0,a*=-1));const P=Math.sign(a);await s.update(R=>R+P*90),n(1,d-=P*v),await s.set(0,{duration:0}),n(2,c+=P*.5*Math.PI),C=!1}};return{left(){k(-1)},right(){k(1)}}},{left:m,right:b}=u(ge),y=ut(`${nt}/spiral.png`);return xt(),[a,d,c,r,i,o,f,m,b,y]}class er extends ae{constructor(e){super(),ce(this,e,Vt,qt,ie,{})}}export{er as component,$t as universal};
