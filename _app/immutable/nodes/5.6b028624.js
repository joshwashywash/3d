import{A as y,N as Ie,I as ve,O as X,P as Le,D as ne,H as ie,s as ae,J as B,p as be,Q as He,K as ue,z as M,L as Be,r as pe,a as R,c as I,i as T,w as _e,x as Ce,y as ke,d as x,e as J,o as Ne,R as We}from"../chunks/scheduler.9c5215e0.js";import{g as ye,t as _,c as Se,a as p,S as ce,i as se,f as qe,b as O,d as w,m as D,e as z}from"../chunks/index.9a2cb203.js";import{u as N,J as Ve,R as Xe,e as P,k as F,D as Ue,c as L,H as Ye,K as Oe,w as le,N as Je,V as Ke,Q as Qe}from"../chunks/T.5d8b368c.js";import{w as E,d as we,r as U}from"../chunks/index.0afd1361.js";import{u as Ze}from"../chunks/cache.a86f5ac9.js";import{g as $e,a as et,f as tt,b as rt,O as nt}from"../chunks/vertex.0eb39c1c.js";import{b as it}from"../chunks/paths.e0743071.js";const De=typeof window<"u";let ot=De?()=>window.performance.now():()=>Date.now(),ze=De?t=>requestAnimationFrame(t):y;const H=new Set;function je(t){H.forEach(e=>{e.c(t)||(H.delete(e),e.f())}),H.size!==0&&ze(je)}function at(t){let e;return H.size===0&&ze(je),{promise:new Promise(n=>{H.add(e={c:t,f:n})}),abort(){H.delete(e)}}}function ct(t,e){const n=e.token={};function r(i,o,l,s){if(e.token!==n)return;e.resolved=s;let d=e.ctx;l!==void 0&&(d=d.slice(),d[l]=s);const a=i&&(e.current=i)(d);let u=!1;e.block&&(e.blocks?e.blocks.forEach((c,f)=>{f!==o&&c&&(ye(),_(c,1,1,()=>{e.blocks[f]===c&&(e.blocks[f]=null)}),Se())}):e.block.d(1),a.c(),p(a,1),a.m(e.mount(),e.anchor),u=!0),e.block=a,e.blocks&&(e.blocks[o]=a),u&&Le()}if(Ie(t)){const i=ve();if(t.then(o=>{X(i),r(e.then,1,e.value,o),X(null)},o=>{if(X(i),r(e.catch,2,e.error,o),X(null),!e.hasCatch)throw o}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function st(t,e,n){const r=e.slice(),{resolved:i}=t;t.current===t.then&&(r[t.value]=i),t.current===t.catch&&(r[t.error]=i),t.block.p(r,n)}function lt(t,e){const n="threlte-plugin-context";if(Array.isArray(t)){const[r,i]=t;ne(n,{...ie(n),[r]:i})}else{const r=t,i=e;if(!i)return;ne(n,{...ie(n),[r]:i})}}const te=t=>{const e=E(void 0),n=E(void 0);return t.then(r=>{e.set(r)}).catch(r=>{console.error("Error in asyncWritable:",r.message),n.set(r)}),Object.assign(Object.assign(t,e),{error:n,promise:t})},ut=(t,e={})=>{var s;const{remember:n,clear:r}=Ze(),i=new t;return(s=e.extend)==null||s.call(e,i),{load:(d,a)=>{if(Array.isArray(d)){const u=d.map(f=>n(async()=>{var b;const m=await i.loadAsync(f,a==null?void 0:a.onProgress);return((b=a==null?void 0:a.transform)==null?void 0:b.call(a,m))??m},[t,f]));return te(Promise.all(u))}else if(typeof d=="string"){const u=n(async()=>{var m;const f=await i.loadAsync(d,a==null?void 0:a.onProgress);return((m=a==null?void 0:a.transform)==null?void 0:m.call(a,f))??f},[t,d]);return te(u)}else{const u=Object.values(d).map(f=>n(async()=>{var b;const m=await i.loadAsync(f,a==null?void 0:a.onProgress);return((b=a==null?void 0:a.transform)==null?void 0:b.call(a,m))??m},[t,f]));return te(Promise.all(u).then(f=>Object.fromEntries(Object.entries(d).map(([m],b)=>[m,f[b]]))))}},clear:d=>{Array.isArray(d)?d.forEach(a=>{r([t,a])}):typeof d=="string"?r([t,d]):Object.entries(d).forEach(([a,u])=>{r([t,a,u])})},loader:i}},ft=(t,e)=>{const n=ut(Ve,e),{renderer:r}=N();return n.load(t,{...e,transform:i=>{var o;return"colorSpace"in i?i.colorSpace=r.outputColorSpace:i.encoding=r.outputEncoding,i.needsUpdate=!0,((o=e==null?void 0:e.transform)==null?void 0:o.call(e,i))??i}})},dt=Number.parseInt(Xe.replace("dev","")),mt=`
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
`,gt=`
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
`,ht={fragmentShader:gt,vertexShader:mt},vt=t=>({ref:t[0]&1}),fe=t=>({ref:t[0]});function bt(t){let e,n;return e=new P.PlaneGeometry({props:{args:typeof t[1]=="number"?[t[1],t[1]]:t[1]}}),{c(){O(e.$$.fragment)},l(r){w(e.$$.fragment,r)},m(r,i){D(e,r,i),n=!0},p(r,i){const o={};i[0]&2&&(o.args=typeof r[1]=="number"?[r[1],r[1]]:r[1]),e.$set(o)},i(r){n||(p(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){z(e,r)}}}function pt(t){let e,n,r;e=new P.ShaderMaterial({props:{fragmentShader:t[4],vertexShader:t[5],uniforms:t[2],transparent:!0,side:Ue,defines:{USE_COLORSPACE_FRAGMENT:dt>=154?"":void 0}}});const i=t[26].default,o=pe(i,t,t[29],fe),l=o||bt(t);return{c(){O(e.$$.fragment),n=R(),l&&l.c()},l(s){w(e.$$.fragment,s),n=I(s),l&&l.l(s)},m(s,d){D(e,s,d),T(s,n,d),l&&l.m(s,d),r=!0},p(s,d){const a={};d[0]&4&&(a.uniforms=s[2]),e.$set(a),o?o.p&&(!r||d[0]&536870913)&&_e(o,i,s,s[29],r?ke(i,s[29],d,vt):Ce(s[29]),fe):l&&l.p&&(!r||d[0]&2)&&l.p(s,r?d:[-1,-1])},i(s){r||(p(e.$$.fragment,s),p(l,s),r=!0)},o(s){_(e.$$.fragment,s),_(l,s),r=!1},d(s){s&&x(n),z(e,s),l&&l.d(s)}}}function _t(t){let e,n,r;const i=[{frustumCulled:!1},t[7]];function o(s){t[28](s)}let l={$$slots:{default:[pt,({ref:s})=>({0:s}),({ref:s})=>[s?1:0]]},$$scope:{ctx:t}};for(let s=0;s<i.length;s+=1)l=B(l,i[s]);return t[0]!==void 0&&(l.ref=t[0]),e=new P.Mesh({props:l}),t[27](e),be.push(()=>qe(e,"ref",o)),{c(){O(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,d){D(e,s,d),r=!0},p(s,d){const a=d[0]&128?$e(i,[i[0],et(s[7])]):{};d[0]&536870919&&(a.$$scope={dirty:d,ctx:s}),!n&&d[0]&1&&(n=!0,a.ref=s[0],He(()=>n=!1)),e.$set(a)},i(s){r||(p(e.$$.fragment,s),r=!0)},o(s){_(e.$$.fragment,s),r=!1},d(s){t[27](null),z(e,s)}}}function Ct(t,e,n){const r=["cellColor","sectionColor","cellSize","backgroundColor","backgroundOpacity","sectionSize","plane","gridSize","followCamera","infiniteGrid","fadeDistance","fadeStrength","cellThickness","sectionThickness","type","axis","maxRadius","cellDividers","sectionDividers","ref"];let i=ue(e,r),o,{$$slots:l={},$$scope:s}=e,{cellColor:d="#000000"}=e,{sectionColor:a="#0000ee"}=e,{cellSize:u=1}=e,{backgroundColor:c="#dadada"}=e,{backgroundOpacity:f=0}=e,{sectionSize:m=10}=e,{plane:b="xz"}=e,{gridSize:C=[20,20]}=e,{followCamera:v=!1}=e,{infiniteGrid:k=!1}=e,{fadeDistance:S=100}=e,{fadeStrength:j=1}=e,{cellThickness:G=1}=e,{sectionThickness:K=2}=e,{type:A="grid"}=e,{axis:Q="x"}=e,{maxRadius:W=0}=e,{cellDividers:Z=6}=e,{sectionDividers:$=2}=e,{ref:q}=e;const{fragmentShader:Pe,vertexShader:Ge}=ht,{invalidate:Te}=N();let h={uSize1:{value:u},uSize2:{value:m},uColor1:{value:new F(d)},uColor2:{value:new F(a)},uBackgroundColor:{value:new F("#aaaaaa")},uBackgroundOpacity:{value:.7},uFadeDistance:{value:S},uFadeStrength:{value:j},uThickness1:{value:1},uThickness2:{value:1},uInfiniteGrid:{value:k?1:0},uFollowCamera:{value:0},uCoord0:{value:0},uCoord1:{value:2},uCoord2:{value:1},uGridType:{value:0},uLineGridCoord:{value:0},uCircleGridMaxRadius:{value:9},uPolarCellDividers:{value:6},uPolarSectionDividers:{value:2}};const V={x:0,y:1,z:2},xe={xz:"xzy",xy:"xyz",zy:"zyx"},ee=tt();M(t,ee,g=>n(3,o=g));function Ee(g){be[g?"unshift":"push"](()=>{o=g,ee.set(o)})}function Ae(g){q=g,n(0,q)}return t.$$set=g=>{e=B(B({},e),Be(g)),n(7,i=ue(e,r)),"cellColor"in g&&n(8,d=g.cellColor),"sectionColor"in g&&n(9,a=g.sectionColor),"cellSize"in g&&n(10,u=g.cellSize),"backgroundColor"in g&&n(11,c=g.backgroundColor),"backgroundOpacity"in g&&n(12,f=g.backgroundOpacity),"sectionSize"in g&&n(13,m=g.sectionSize),"plane"in g&&n(14,b=g.plane),"gridSize"in g&&n(1,C=g.gridSize),"followCamera"in g&&n(15,v=g.followCamera),"infiniteGrid"in g&&n(16,k=g.infiniteGrid),"fadeDistance"in g&&n(17,S=g.fadeDistance),"fadeStrength"in g&&n(18,j=g.fadeStrength),"cellThickness"in g&&n(19,G=g.cellThickness),"sectionThickness"in g&&n(20,K=g.sectionThickness),"type"in g&&n(21,A=g.type),"axis"in g&&n(22,Q=g.axis),"maxRadius"in g&&n(23,W=g.maxRadius),"cellDividers"in g&&n(24,Z=g.cellDividers),"sectionDividers"in g&&n(25,$=g.sectionDividers),"ref"in g&&n(0,q=g.ref),"$$scope"in g&&n(29,s=g.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&67108608){const g=xe[b],Fe=g.charAt(0),Me=g.charAt(1),Re=g.charAt(2);n(2,h.uCoord0.value=V[Fe],h),n(2,h.uCoord1.value=V[Me],h),n(2,h.uCoord2.value=V[Re],h),n(2,h.uSize1={value:u},h),n(2,h.uSize2={value:m},h),n(2,h.uColor1={value:new F(d)},h),n(2,h.uColor2={value:new F(a)},h),n(2,h.uBackgroundColor={value:new F(c)},h),n(2,h.uBackgroundOpacity={value:f},h),n(2,h.uFadeDistance={value:S},h),n(2,h.uFadeStrength={value:j},h),n(2,h.uThickness1={value:G},h),n(2,h.uThickness2={value:K},h),n(2,h.uFollowCamera={value:v?1:0},h),n(2,h.uInfiniteGrid={value:k?1:0},h),A=="grid"&&n(2,h.uGridType={value:0},h),A==="lines"&&(n(2,h.uGridType={value:1},h),n(2,h.uLineGridCoord={value:V[Q]},h)),A==="circular"&&(n(2,h.uGridType={value:2},h),n(2,h.uCircleGridMaxRadius={value:W||0},h)),A==="polar"&&(n(2,h.uGridType={value:3},h),n(2,h.uCircleGridMaxRadius={value:W||0},h),n(2,h.uPolarCellDividers={value:Z||0},h),n(2,h.uPolarSectionDividers={value:$||0},h)),Te("Grid uniforms changed")}},[q,C,h,o,Pe,Ge,ee,i,d,a,u,c,f,m,b,v,k,S,j,G,K,A,Q,W,Z,$,l,Ee,Ae,s]}class kt extends ce{constructor(e){super(),se(this,e,Ct,_t,ae,{cellColor:8,sectionColor:9,cellSize:10,backgroundColor:11,backgroundOpacity:12,sectionSize:13,plane:14,gridSize:1,followCamera:15,infiniteGrid:16,fadeDistance:17,fadeStrength:18,cellThickness:19,sectionThickness:20,type:21,axis:22,maxRadius:23,cellDividers:24,sectionDividers:25,ref:0},null,[-1,-1])}}const yt=()=>{const t={portals:L(new Map),addPortal(e,n){t.portals.update(r=>(r.has(n)?console.warn(`Portal with id ${n} already exists. Skipping portal creation.`):r.set(n,e),r))},removePortal(e){t.portals.update(n=>(n.has(e)?n.delete(e):console.warn(`Portal with id ${e} does not exist. Skipping portal removal.`),n))},getPortal(e){return we(t.portals,n=>n.get(e))},hasPortal(e){return t.portals.current.has(e)}};return t},St=()=>rt("threlte-portals",yt());function de(t){let e,n;return e=new Ye({props:{onChildMount:t[6],onChildDestroy:t[7],$$slots:{default:[Ot]},$$scope:{ctx:t}}}),{c(){O(e.$$.fragment)},l(r){w(e.$$.fragment,r)},m(r,i){D(e,r,i),n=!0},p(r,i){const o={};i&1&&(o.onChildMount=r[6]),i&1&&(o.onChildDestroy=r[7]),i&256&&(o.$$scope={dirty:i,ctx:r}),e.$set(o)},i(r){n||(p(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){z(e,r)}}}function Ot(t){let e;const n=t[5].default,r=pe(n,t,t[8],null);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,o){r&&r.m(i,o),e=!0},p(i,o){r&&r.p&&(!e||o&256)&&_e(r,n,i,i[8],e?ke(n,i[8],o,null):Ce(i[8]),null)},i(i){e||(p(r,i),e=!0)},o(i){_(r,i),e=!1},d(i){r&&r.d(i)}}}function wt(t){let e,n,r=t[0]&&de(t);return{c(){r&&r.c(),e=J()},l(i){r&&r.l(i),e=J()},m(i,o){r&&r.m(i,o),T(i,e,o),n=!0},p(i,[o]){i[0]?r?(r.p(i,o),o&1&&p(r,1)):(r=de(i),r.c(),p(r,1),r.m(e.parentNode,e)):r&&(ye(),_(r,1,1,()=>{r=null}),Se())},i(i){n||(p(r),n=!0)},o(i){_(r),n=!1},d(i){i&&x(e),r&&r.d(i)}}}function Dt(t,e,n){let r,i,{$$slots:o={},$$scope:l}=e,{id:s="default"}=e,{object:d=void 0}=e;const{getPortal:a}=St(),u=a(s);M(t,u,m=>n(4,i=m));const c=m=>{r==null||r.add(m)},f=m=>{r==null||r.remove(m)};return t.$$set=m=>{"id"in m&&n(2,s=m.id),"object"in m&&n(3,d=m.object),"$$scope"in m&&n(8,l=m.$$scope)},t.$$.update=()=>{t.$$.dirty&24&&n(0,r=d??i)},[r,u,s,d,i,o,c,f,l]}class zt extends ce{constructor(e){super(),se(this,e,Dt,wt,ae,{id:2,object:3})}}const jt=t=>{const e=Oe(N().camera);let n=0,r=0;const i=new ResizeObserver(o=>{for(const l of o)n=l.contentRect.width,r=l.contentRect.height});return le(t.target,o=>(o&&i.observe(o),()=>{o&&i.unobserve(o)})),(o,l)=>{l.pointer.update(s=>(s.set(o.offsetX/n*2-1,-(o.offsetY/r)*2+1),s)),l.raycaster.setFromCamera(l.pointer.current,e.current)}},Pt=()=>{const t=ie("threlte-interactivity-context"),e=Je();return{...t,addInteractiveObject:i=>{if(!t){console.warn("No interactivity context found. Did you forget to implement interactivity()?");return}i.userData._threlte_interactivity_dispatcher=e,!t.interactiveObjects.find(o=>o.uuid===i.uuid)&&t.interactiveObjects.push(i)},removeInteractiveObject:i=>{if(!t){console.warn("No interactivity context found. Did you forget to implement interactivity()?");return}t.interactiveObjects=t.interactiveObjects.filter(o=>o.uuid!==i.uuid),delete i.userData._threlte_interactivity_dispatcher}}},Gt=t=>{const e=ve(),n=E(!1);return Ne(()=>{n.set(!!Object.keys(e.$$.callbacks).filter(r=>t?t.includes(r):!0).length)}),{hasEventHandlers:n}},Tt=["click","contextmenu","dblclick","wheel","pointerup","pointerdown","pointerover","pointerout","pointerenter","pointerleave","pointermove","pointermissed"],xt=()=>{lt("interactivity",({ref:t})=>{if(!t.isObject3D)return;const{addInteractiveObject:e,removeInteractiveObject:n}=Pt(),r=E(t),{hasEventHandlers:i}=Gt(Tt);return le([i,r],([o,l])=>{if(o)return e(l),()=>n(l)}),{onRefChange(o){r.set(o)}}})},Y=t=>t.userData._threlte_interactivity_dispatcher;function re(t){return(t.eventObject||t.object).uuid+"/"+t.index+t.instanceId}const me=[["click",!1],["contextmenu",!1],["dblclick",!1],["wheel",!1],["pointerdown",!0],["pointerup",!0],["pointerleave",!0],["pointerenter",!0],["pointermove",!0],["pointercancel",!0]],Et=t=>{function e(a){const u=a.offsetX-t.initialClick[0],c=a.offsetY-t.initialClick[1];return Math.round(Math.sqrt(u*u+c*c))}function n(a){for(const u of t.hovered.values())if(!a.length||!a.find(c=>c.object===u.object&&c.index===u.index&&c.instanceId===u.instanceId)){const c=u.eventObject;t.hovered.delete(re(u));const f=Y(c);if(f){const m={...u,intersections:a};f("pointerout",m),f("pointerleave",m)}}}const r=Oe(t.enabled),i=()=>{const a=new Set,u=[];let c=t.interactiveObjects.flatMap(f=>r.current?t.raycaster.intersectObject(f,!0):[]).sort((f,m)=>f.distance-m.distance).filter(f=>{const m=re(f);return a.has(m)?!1:(a.add(m),!0)});t.filter&&(c=t.filter(c,t));for(const f of c){let m=f.object;for(;m;)Y(m)&&u.push({...f,eventObject:m}),m=m.parent}return u};function o(a,u){for(let c=0;c<u.length;c++){const f=Y(u[c]);f&&f("pointermissed",a)}}const l=a=>a==="pointerleave"||a==="pointercancel"?()=>{t.pointerOverTarget.set(!1),n([])}:a==="pointerenter"?()=>{t.pointerOverTarget.set(!0)}:u=>{const c=a==="pointermove",f=a==="click"||a==="contextmenu"||a==="dblclick";t.compute(u,t);const m=i(),b=f?e(u):0;a==="pointerdown"&&(t.initialClick=[u.offsetX,u.offsetY],t.initialHits=m.map(v=>v.eventObject)),f&&!m.length&&b<=2&&o(u,t.interactiveObjects),c&&n(m);let C=!1;e:for(const v of m){const k={stopped:C,...v,intersections:m,stopPropagation(){if(C=!0,k.stopped=!0,t.hovered.size&&Array.from(t.hovered.values()).find(j=>j.eventObject===v.eventObject)){const j=m.slice(0,m.indexOf(v));n([...j,v])}},camera:t.raycaster.camera,delta:b,nativeEvent:u,pointer:t.pointer.current,ray:t.raycaster.ray},S=Y(v.eventObject);if(!S)return;if(c){if(S.hasEventListener("pointerover")||S.hasEventListener("pointerenter")||S.hasEventListener("pointerout")||S.hasEventListener("pointerleave")){const j=re(k),G=t.hovered.get(j);G?G.stopped&&k.stopPropagation():(t.hovered.set(j,k),S("pointerover",k),S("pointerenter",k))}S("pointermove",k)}else S.hasEventListener(a)?(!f||t.initialHits.includes(v.eventObject))&&(o(u,t.interactiveObjects.filter(G=>!t.initialHits.includes(G))),S(a,k)):f&&t.initialHits.includes(v.eventObject)&&o(u,t.interactiveObjects.filter(G=>!t.initialHits.includes(G)));if(C)break e}},s=a=>{me.forEach(([u])=>{a.removeEventListener(u,l(u))})},d=a=>{me.forEach(([u,c])=>{a.addEventListener(u,l(u),{passive:c})})};le(t.target,a=>(a&&d(a),()=>{a&&s(a)}))},At=t=>{const e={enabled:L((t==null?void 0:t.enabled)??!0),pointer:L(new Ke),pointerOverTarget:L(!1),lastEvent:void 0,raycaster:new Qe,initialClick:[0,0],initialHits:[],hovered:new Map,interactiveObjects:[],target:L((t==null?void 0:t.target)??N().renderer.domElement),compute:()=>{},filter:t==null?void 0:t.filter};return e.compute=(t==null?void 0:t.compute)??jt(e),ne("threlte-interactivity-context",e),xt(),Et(e),e},Ft=()=>({description:"Rolling a cube on a flat surface is more complex than it sounds",title:"Rolling a Cube"}),nr=Object.freeze(Object.defineProperty({__proto__:null,load:Ft},Symbol.toStringTag,{value:"Module"}));function ge(t){return Object.prototype.toString.call(t)==="[object Date]"}function oe(t,e){if(t===e||t!==t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const r=e.map((i,o)=>oe(t[o],i));return i=>r.map(o=>o(i))}if(n==="object"){if(!t||!e)throw new Error("Object cannot be null");if(ge(t)&&ge(e)){t=t.getTime(),e=e.getTime();const o=e-t;return l=>new Date(t+l*o)}const r=Object.keys(e),i={};return r.forEach(o=>{i[o]=oe(t[o],e[o])}),o=>{const l={};return r.forEach(s=>{l[s]=i[s](o)}),l}}if(n==="number"){const r=e-t;return i=>t+i*r}throw new Error(`Cannot interpolate ${n} values`)}function Mt(t,e={}){const n=E(t);let r,i=t;function o(l,s){if(t==null)return n.set(t=l),Promise.resolve();i=l;let d=r,a=!1,{delay:u=0,duration:c=400,easing:f=We,interpolate:m=oe}=B(B({},e),s);if(c===0)return d&&(d.abort(),d=null),n.set(t=i),Promise.resolve();const b=ot()+u;let C;return r=at(v=>{if(v<b)return!0;a||(C=m(t,l),typeof c=="function"&&(c=c(t,l)),a=!0),d&&(d.abort(),d=null);const k=v-b;return k>c?(n.set(t=l),!1):(n.set(t=C(f(k/c))),!0)}),r.promise}return{set:o,update:(l,s)=>o(l(i,t),s),subscribe:n.subscribe}}const Rt=Math.PI/180;function It(t){return t*Rt}const Lt=(t=1)=>{const e=L(.5*t),n=E(0),r=E(0),i=Mt(0),o=we(i,It);let l=!1;const s=async d=>{if(!l){l=!0,Math.sign(e.current)===d&&(n.update(u=>u+d*t),e.update(u=>u*=-1));const a=Math.sign(e.current);await i.update(u=>u+a*90),n.update(u=>u-a*t),await i.set(0,{duration:0}),r.update(u=>u+a*.5*Math.PI),l=!1}};return{left(){s(-1)},right(){s(1)},radians:U(o),rz:U(r),x:U(e),xx:U(n)}};function Ht(t){let e,n;return e=new nt({}),{c(){O(e.$$.fragment)},l(r){w(e.$$.fragment,r)},m(r,i){D(e,r,i),n=!0},i(r){n||(p(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){z(e,r)}}}function Bt(t){let e,n;return e=new P.DirectionalLightHelper({props:{args:[t[14]]}}),{c(){O(e.$$.fragment)},l(r){w(e.$$.fragment,r)},m(r,i){D(e,r,i),n=!0},p(r,i){const o={};i&16384&&(o.args=[r[14]]),e.$set(o)},i(r){n||(p(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){z(e,r)}}}function Nt(t){let e,n;return e=new zt({props:{object:t[5],$$slots:{default:[Bt]},$$scope:{ctx:t}}}),{c(){O(e.$$.fragment)},l(r){w(e.$$.fragment,r)},m(r,i){D(e,r,i),n=!0},p(r,i){const o={};i&49152&&(o.$$scope={dirty:i,ctx:r}),e.$set(o)},i(r){n||(p(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){z(e,r)}}}function Wt(t){return{c:y,l:y,m:y,p:y,i:y,o:y,d:y}}function qt(t){let e,n;return e=new P.Mesh({props:{"position.x":t[2],"position.y":t[4],"rotation.z":t[3],$$slots:{default:[Vt]},$$scope:{ctx:t}}}),{c(){O(e.$$.fragment)},l(r){w(e.$$.fragment,r)},m(r,i){D(e,r,i),n=!0},p(r,i){const o={};i&4&&(o["position.x"]=r[2]),i&8&&(o["rotation.z"]=r[3]),i&32768&&(o.$$scope={dirty:i,ctx:r}),e.$set(o)},i(r){n||(p(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){z(e,r)}}}function Vt(t){let e,n,r,i;return e=new P.MeshStandardMaterial({props:{map:t[13]}}),r=new P.BoxGeometry({}),{c(){O(e.$$.fragment),n=R(),O(r.$$.fragment)},l(o){w(e.$$.fragment,o),n=I(o),w(r.$$.fragment,o)},m(o,l){D(e,o,l),T(o,n,l),D(r,o,l),i=!0},p:y,i(o){i||(p(e.$$.fragment,o),p(r.$$.fragment,o),i=!0)},o(o){_(e.$$.fragment,o),_(r.$$.fragment,o),i=!1},d(o){o&&x(n),z(e,o),z(r,o)}}}function Xt(t){return{c:y,l:y,m:y,p:y,i:y,o:y,d:y}}function Ut(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!1,pending:Xt,then:qt,catch:Wt,value:13,blocks:[,,,]};return ct(t[12],r),{c(){e=J(),r.block.c()},l(i){e=J(),r.block.l(i)},m(i,o){T(i,e,o),r.block.m(i,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e,n=!0},p(i,o){t=i,st(r,t,o)},i(i){n||(p(r.block),n=!0)},o(i){for(let o=0;o<3;o+=1){const l=r.blocks[o];_(l)}n=!1},d(i){i&&x(e),r.block.d(i),r.token=null,r=null}}}function Yt(t){let e,n,r,i,o,l,s,d,a,u;return e=new P.AmbientLight({}),r=new kt({props:{sectionColor:"#00ffff",infiniteGrid:!0,cellColor:"#00ffff"}}),o=new P.PerspectiveCamera({props:{makeDefault:!0,"position.x":5,"position.y":5,"position.z":5,$$slots:{default:[Ht]},$$scope:{ctx:t}}}),s=new P.DirectionalLight({props:{color:"#ff0000","position.x":-2,"position.y":2,"position.z":-2,$$slots:{default:[Nt,({ref:c})=>({14:c}),({ref:c})=>c?16384:0]},$$scope:{ctx:t}}}),a=new P.Group({props:{"rotation.z":t[0],"position.x":t[1],$$slots:{default:[Ut]},$$scope:{ctx:t}}}),a.$on("click",t[6]),a.$on("contextmenu",t[7]),{c(){O(e.$$.fragment),n=R(),O(r.$$.fragment),i=R(),O(o.$$.fragment),l=R(),O(s.$$.fragment),d=R(),O(a.$$.fragment)},l(c){w(e.$$.fragment,c),n=I(c),w(r.$$.fragment,c),i=I(c),w(o.$$.fragment,c),l=I(c),w(s.$$.fragment,c),d=I(c),w(a.$$.fragment,c)},m(c,f){D(e,c,f),T(c,n,f),D(r,c,f),T(c,i,f),D(o,c,f),T(c,l,f),D(s,c,f),T(c,d,f),D(a,c,f),u=!0},p(c,[f]){const m={};f&32768&&(m.$$scope={dirty:f,ctx:c}),o.$set(m);const b={};f&49152&&(b.$$scope={dirty:f,ctx:c}),s.$set(b);const C={};f&1&&(C["rotation.z"]=c[0]),f&2&&(C["position.x"]=c[1]),f&32780&&(C.$$scope={dirty:f,ctx:c}),a.$set(C)},i(c){u||(p(e.$$.fragment,c),p(r.$$.fragment,c),p(o.$$.fragment,c),p(s.$$.fragment,c),p(a.$$.fragment,c),u=!0)},o(c){_(e.$$.fragment,c),_(r.$$.fragment,c),_(o.$$.fragment,c),_(s.$$.fragment,c),_(a.$$.fragment,c),u=!1},d(c){c&&(x(n),x(i),x(l),x(d)),z(e,c),z(r,c),z(o,c),z(s,c),z(a,c)}}}const he=1;function Jt(t,e,n){let r,i,o,l;const s=.5*he,{scene:d}=N(),{left:a,right:u,radians:c,rz:f,x:m,xx:b}=Lt(he);M(t,c,v=>n(0,r=v)),M(t,f,v=>n(3,l=v)),M(t,m,v=>n(2,o=v)),M(t,b,v=>n(1,i=v));const C=ft(`${it}/spiral.png`);return At(),[r,i,o,l,s,d,a,u,c,f,m,b,C]}class ir extends ce{constructor(e){super(),se(this,e,Jt,Yt,ae,{})}}export{ir as component,nr as universal};
