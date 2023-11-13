import{A as S,N as Xe,I as _e,O as K,P as Ze,D as ne,H as oe,s as se,J as U,p as Ce,Q as He,K as fe,z as E,L as Be,r as ke,a as X,c as Z,i as R,w as ye,x as we,y as Se,d as F,e as $,o as Ne,R as We,S as qe}from"../chunks/scheduler.c485494e.js";import{g as Oe,t as w,c as De,a as y,S as ce,i as le,f as Ue,b as D,d as z,m as P,e as j}from"../chunks/index.5957f628.js";import{u as V,J as Ve,R as Ye,e as T,k as N,D as Je,c as I,H as Ke,K as ze,w as ue,N as Qe,V as $e,Q as et}from"../chunks/T.cfe0ec2b.js";import{w as M,d as ie,r as x}from"../chunks/index.37ad1a1f.js";import{u as tt}from"../chunks/cache.cb2865f6.js";import{g as rt,a as nt,f as ot,b as it,O as at}from"../chunks/vertex.5ad0910f.js";import{b as st}from"../chunks/paths.fc35cce1.js";const Pe=typeof window<"u";let ct=Pe?()=>window.performance.now():()=>Date.now(),je=Pe?t=>requestAnimationFrame(t):S;const W=new Set;function Ge(t){W.forEach(e=>{e.c(t)||(W.delete(e),e.f())}),W.size!==0&&je(Ge)}function lt(t){let e;return W.size===0&&je(Ge),{promise:new Promise(n=>{W.add(e={c:t,f:n})}),abort(){W.delete(e)}}}function ut(t,e){const n=e.token={};function r(o,i,l,s){if(e.token!==n)return;e.resolved=s;let c=e.ctx;l!==void 0&&(c=c.slice(),c[l]=s);const a=o&&(e.current=o)(c);let f=!1;e.block&&(e.blocks?e.blocks.forEach((h,g)=>{g!==i&&h&&(Oe(),w(h,1,1,()=>{e.blocks[g]===h&&(e.blocks[g]=null)}),De())}):e.block.d(1),a.c(),y(a,1),a.m(e.mount(),e.anchor),f=!0),e.block=a,e.blocks&&(e.blocks[i]=a),f&&Ze()}if(Xe(t)){const o=_e();if(t.then(i=>{K(o),r(e.then,1,e.value,i),K(null)},i=>{if(K(o),r(e.catch,2,e.error,i),K(null),!e.hasCatch)throw i}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function ft(t,e,n){const r=e.slice(),{resolved:o}=t;t.current===t.then&&(r[t.value]=o),t.current===t.catch&&(r[t.error]=o),t.block.p(r,n)}function dt(t,e){const n="threlte-plugin-context";if(Array.isArray(t)){const[r,o]=t;ne(n,{...oe(n),[r]:o})}else{const r=t,o=e;if(!o)return;ne(n,{...oe(n),[r]:o})}}const te=t=>{const e=M(void 0),n=M(void 0);return t.then(r=>{e.set(r)}).catch(r=>{console.error("Error in asyncWritable:",r.message),n.set(r)}),Object.assign(Object.assign(t,e),{error:n,promise:t})},mt=(t,e={})=>{var s;const{remember:n,clear:r}=tt(),o=new t;return(s=e.extend)==null||s.call(e,o),{load:(c,a)=>{if(Array.isArray(c)){const f=c.map(g=>n(async()=>{var u;const d=await o.loadAsync(g,a==null?void 0:a.onProgress);return((u=a==null?void 0:a.transform)==null?void 0:u.call(a,d))??d},[t,g]));return te(Promise.all(f))}else if(typeof c=="string"){const f=n(async()=>{var d;const g=await o.loadAsync(c,a==null?void 0:a.onProgress);return((d=a==null?void 0:a.transform)==null?void 0:d.call(a,g))??g},[t,c]);return te(f)}else{const f=Object.values(c).map(g=>n(async()=>{var u;const d=await o.loadAsync(g,a==null?void 0:a.onProgress);return((u=a==null?void 0:a.transform)==null?void 0:u.call(a,d))??d},[t,g]));return te(Promise.all(f).then(g=>Object.fromEntries(Object.entries(c).map(([d],u)=>[d,g[u]]))))}},clear:c=>{Array.isArray(c)?c.forEach(a=>{r([t,a])}):typeof c=="string"?r([t,c]):Object.entries(c).forEach(([a,f])=>{r([t,a,f])})},loader:o}},gt=(t,e)=>{const n=mt(Ve,e),{renderer:r}=V();return n.load(t,{...e,transform:o=>{var i;return"colorSpace"in o?o.colorSpace=r.outputColorSpace:o.encoding=r.outputEncoding,o.needsUpdate=!0,((i=e==null?void 0:e.transform)==null?void 0:i.call(e,o))??o}})},ht=Number.parseInt(Ye.replace("dev","")),pt=`
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
`,vt=`
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
`,bt={fragmentShader:vt,vertexShader:pt},_t=t=>({ref:t[0]&1}),de=t=>({ref:t[0]});function Ct(t){let e,n;return e=new T.PlaneGeometry({props:{args:typeof t[1]=="number"?[t[1],t[1]]:t[1]}}),{c(){D(e.$$.fragment)},l(r){z(e.$$.fragment,r)},m(r,o){P(e,r,o),n=!0},p(r,o){const i={};o[0]&2&&(i.args=typeof r[1]=="number"?[r[1],r[1]]:r[1]),e.$set(i)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){w(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function kt(t){let e,n,r;e=new T.ShaderMaterial({props:{fragmentShader:t[4],vertexShader:t[5],uniforms:t[2],transparent:!0,side:Je,defines:{USE_COLORSPACE_FRAGMENT:ht>=154?"":void 0}}});const o=t[26].default,i=ke(o,t,t[29],de),l=i||Ct(t);return{c(){D(e.$$.fragment),n=X(),l&&l.c()},l(s){z(e.$$.fragment,s),n=Z(s),l&&l.l(s)},m(s,c){P(e,s,c),R(s,n,c),l&&l.m(s,c),r=!0},p(s,c){const a={};c[0]&4&&(a.uniforms=s[2]),e.$set(a),i?i.p&&(!r||c[0]&536870913)&&ye(i,o,s,s[29],r?Se(o,s[29],c,_t):we(s[29]),de):l&&l.p&&(!r||c[0]&2)&&l.p(s,r?c:[-1,-1])},i(s){r||(y(e.$$.fragment,s),y(l,s),r=!0)},o(s){w(e.$$.fragment,s),w(l,s),r=!1},d(s){s&&F(n),j(e,s),l&&l.d(s)}}}function yt(t){let e,n,r;const o=[{frustumCulled:!1},t[7]];function i(s){t[28](s)}let l={$$slots:{default:[kt,({ref:s})=>({0:s}),({ref:s})=>[s?1:0]]},$$scope:{ctx:t}};for(let s=0;s<o.length;s+=1)l=U(l,o[s]);return t[0]!==void 0&&(l.ref=t[0]),e=new T.Mesh({props:l}),t[27](e),Ce.push(()=>Ue(e,"ref",i)),{c(){D(e.$$.fragment)},l(s){z(e.$$.fragment,s)},m(s,c){P(e,s,c),r=!0},p(s,c){const a=c[0]&128?rt(o,[o[0],nt(s[7])]):{};c[0]&536870919&&(a.$$scope={dirty:c,ctx:s}),!n&&c[0]&1&&(n=!0,a.ref=s[0],He(()=>n=!1)),e.$set(a)},i(s){r||(y(e.$$.fragment,s),r=!0)},o(s){w(e.$$.fragment,s),r=!1},d(s){t[27](null),j(e,s)}}}function wt(t,e,n){const r=["cellColor","sectionColor","cellSize","backgroundColor","backgroundOpacity","sectionSize","plane","gridSize","followCamera","infiniteGrid","fadeDistance","fadeStrength","cellThickness","sectionThickness","type","axis","maxRadius","cellDividers","sectionDividers","ref"];let o=fe(e,r),i,{$$slots:l={},$$scope:s}=e,{cellColor:c="#000000"}=e,{sectionColor:a="#0000ee"}=e,{cellSize:f=1}=e,{backgroundColor:h="#dadada"}=e,{backgroundOpacity:g=0}=e,{sectionSize:d=10}=e,{plane:u="xz"}=e,{gridSize:v=[20,20]}=e,{followCamera:C=!1}=e,{infiniteGrid:k=!1}=e,{fadeDistance:b=100}=e,{fadeStrength:O=1}=e,{cellThickness:G=1}=e,{sectionThickness:H=2}=e,{type:A="grid"}=e,{axis:B="x"}=e,{maxRadius:L=0}=e,{cellDividers:q=6}=e,{sectionDividers:Y=2}=e,{ref:_}=e;const{fragmentShader:Te,vertexShader:Ee}=bt,{invalidate:Ae}=V();let p={uSize1:{value:f},uSize2:{value:d},uColor1:{value:new N(c)},uColor2:{value:new N(a)},uBackgroundColor:{value:new N("#aaaaaa")},uBackgroundOpacity:{value:.7},uFadeDistance:{value:b},uFadeStrength:{value:O},uThickness1:{value:1},uThickness2:{value:1},uInfiniteGrid:{value:k?1:0},uFollowCamera:{value:0},uCoord0:{value:0},uCoord1:{value:2},uCoord2:{value:1},uGridType:{value:0},uLineGridCoord:{value:0},uCircleGridMaxRadius:{value:9},uPolarCellDividers:{value:6},uPolarSectionDividers:{value:2}};const J={x:0,y:1,z:2},Re={xz:"xzy",xy:"xyz",zy:"zyx"},ee=ot();E(t,ee,m=>n(3,i=m));function Fe(m){Ce[m?"unshift":"push"](()=>{i=m,ee.set(i)})}function Me(m){_=m,n(0,_)}return t.$$set=m=>{e=U(U({},e),Be(m)),n(7,o=fe(e,r)),"cellColor"in m&&n(8,c=m.cellColor),"sectionColor"in m&&n(9,a=m.sectionColor),"cellSize"in m&&n(10,f=m.cellSize),"backgroundColor"in m&&n(11,h=m.backgroundColor),"backgroundOpacity"in m&&n(12,g=m.backgroundOpacity),"sectionSize"in m&&n(13,d=m.sectionSize),"plane"in m&&n(14,u=m.plane),"gridSize"in m&&n(1,v=m.gridSize),"followCamera"in m&&n(15,C=m.followCamera),"infiniteGrid"in m&&n(16,k=m.infiniteGrid),"fadeDistance"in m&&n(17,b=m.fadeDistance),"fadeStrength"in m&&n(18,O=m.fadeStrength),"cellThickness"in m&&n(19,G=m.cellThickness),"sectionThickness"in m&&n(20,H=m.sectionThickness),"type"in m&&n(21,A=m.type),"axis"in m&&n(22,B=m.axis),"maxRadius"in m&&n(23,L=m.maxRadius),"cellDividers"in m&&n(24,q=m.cellDividers),"sectionDividers"in m&&n(25,Y=m.sectionDividers),"ref"in m&&n(0,_=m.ref),"$$scope"in m&&n(29,s=m.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&67108608){const m=Re[u],xe=m.charAt(0),Ie=m.charAt(1),Le=m.charAt(2);n(2,p.uCoord0.value=J[xe],p),n(2,p.uCoord1.value=J[Ie],p),n(2,p.uCoord2.value=J[Le],p),n(2,p.uSize1={value:f},p),n(2,p.uSize2={value:d},p),n(2,p.uColor1={value:new N(c)},p),n(2,p.uColor2={value:new N(a)},p),n(2,p.uBackgroundColor={value:new N(h)},p),n(2,p.uBackgroundOpacity={value:g},p),n(2,p.uFadeDistance={value:b},p),n(2,p.uFadeStrength={value:O},p),n(2,p.uThickness1={value:G},p),n(2,p.uThickness2={value:H},p),n(2,p.uFollowCamera={value:C?1:0},p),n(2,p.uInfiniteGrid={value:k?1:0},p),A=="grid"&&n(2,p.uGridType={value:0},p),A==="lines"&&(n(2,p.uGridType={value:1},p),n(2,p.uLineGridCoord={value:J[B]},p)),A==="circular"&&(n(2,p.uGridType={value:2},p),n(2,p.uCircleGridMaxRadius={value:L||0},p)),A==="polar"&&(n(2,p.uGridType={value:3},p),n(2,p.uCircleGridMaxRadius={value:L||0},p),n(2,p.uPolarCellDividers={value:q||0},p),n(2,p.uPolarSectionDividers={value:Y||0},p)),Ae("Grid uniforms changed")}},[_,v,p,i,Te,Ee,ee,o,c,a,f,h,g,d,u,C,k,b,O,G,H,A,B,L,q,Y,l,Fe,Me,s]}class St extends ce{constructor(e){super(),le(this,e,wt,yt,se,{cellColor:8,sectionColor:9,cellSize:10,backgroundColor:11,backgroundOpacity:12,sectionSize:13,plane:14,gridSize:1,followCamera:15,infiniteGrid:16,fadeDistance:17,fadeStrength:18,cellThickness:19,sectionThickness:20,type:21,axis:22,maxRadius:23,cellDividers:24,sectionDividers:25,ref:0},null,[-1,-1])}}const Ot=()=>{const t={portals:I(new Map),addPortal(e,n){t.portals.update(r=>(r.has(n)?console.warn(`Portal with id ${n} already exists. Skipping portal creation.`):r.set(n,e),r))},removePortal(e){t.portals.update(n=>(n.has(e)?n.delete(e):console.warn(`Portal with id ${e} does not exist. Skipping portal removal.`),n))},getPortal(e){return ie(t.portals,n=>n.get(e))},hasPortal(e){return t.portals.current.has(e)}};return t},Dt=()=>it("threlte-portals",Ot());function me(t){let e,n;return e=new Ke({props:{onChildMount:t[6],onChildDestroy:t[7],$$slots:{default:[zt]},$$scope:{ctx:t}}}),{c(){D(e.$$.fragment)},l(r){z(e.$$.fragment,r)},m(r,o){P(e,r,o),n=!0},p(r,o){const i={};o&1&&(i.onChildMount=r[6]),o&1&&(i.onChildDestroy=r[7]),o&256&&(i.$$scope={dirty:o,ctx:r}),e.$set(i)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){w(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function zt(t){let e;const n=t[5].default,r=ke(n,t,t[8],null);return{c(){r&&r.c()},l(o){r&&r.l(o)},m(o,i){r&&r.m(o,i),e=!0},p(o,i){r&&r.p&&(!e||i&256)&&ye(r,n,o,o[8],e?Se(n,o[8],i,null):we(o[8]),null)},i(o){e||(y(r,o),e=!0)},o(o){w(r,o),e=!1},d(o){r&&r.d(o)}}}function Pt(t){let e,n,r=t[0]&&me(t);return{c(){r&&r.c(),e=$()},l(o){r&&r.l(o),e=$()},m(o,i){r&&r.m(o,i),R(o,e,i),n=!0},p(o,[i]){o[0]?r?(r.p(o,i),i&1&&y(r,1)):(r=me(o),r.c(),y(r,1),r.m(e.parentNode,e)):r&&(Oe(),w(r,1,1,()=>{r=null}),De())},i(o){n||(y(r),n=!0)},o(o){w(r),n=!1},d(o){o&&F(e),r&&r.d(o)}}}function jt(t,e,n){let r,o,{$$slots:i={},$$scope:l}=e,{id:s="default"}=e,{object:c=void 0}=e;const{getPortal:a}=Dt(),f=a(s);E(t,f,d=>n(4,o=d));const h=d=>{r==null||r.add(d)},g=d=>{r==null||r.remove(d)};return t.$$set=d=>{"id"in d&&n(2,s=d.id),"object"in d&&n(3,c=d.object),"$$scope"in d&&n(8,l=d.$$scope)},t.$$.update=()=>{t.$$.dirty&24&&n(0,r=c??o)},[r,f,s,c,o,i,h,g,l]}class Gt extends ce{constructor(e){super(),le(this,e,jt,Pt,se,{id:2,object:3})}}const Tt=t=>{const e=ze(V().camera);let n=0,r=0;const o=new ResizeObserver(i=>{for(const l of i)n=l.contentRect.width,r=l.contentRect.height});return ue(t.target,i=>(i&&o.observe(i),()=>{i&&o.unobserve(i)})),(i,l)=>{l.pointer.update(s=>(s.set(i.offsetX/n*2-1,-(i.offsetY/r)*2+1),s)),l.raycaster.setFromCamera(l.pointer.current,e.current)}},Et=()=>{const t=oe("threlte-interactivity-context"),e=Qe();return{...t,addInteractiveObject:o=>{if(!t){console.warn("No interactivity context found. Did you forget to implement interactivity()?");return}o.userData._threlte_interactivity_dispatcher=e,!t.interactiveObjects.find(i=>i.uuid===o.uuid)&&t.interactiveObjects.push(o)},removeInteractiveObject:o=>{if(!t){console.warn("No interactivity context found. Did you forget to implement interactivity()?");return}t.interactiveObjects=t.interactiveObjects.filter(i=>i.uuid!==o.uuid),delete o.userData._threlte_interactivity_dispatcher}}},At=t=>{const e=_e(),n=M(!1);return Ne(()=>{n.set(!!Object.keys(e.$$.callbacks).filter(r=>t?t.includes(r):!0).length)}),{hasEventHandlers:n}},Rt=["click","contextmenu","dblclick","wheel","pointerup","pointerdown","pointerover","pointerout","pointerenter","pointerleave","pointermove","pointermissed"],Ft=()=>{dt("interactivity",({ref:t})=>{if(!t.isObject3D)return;const{addInteractiveObject:e,removeInteractiveObject:n}=Et(),r=M(t),{hasEventHandlers:o}=At(Rt);return ue([o,r],([i,l])=>{if(i)return e(l),()=>n(l)}),{onRefChange(i){r.set(i)}}})},Q=t=>t.userData._threlte_interactivity_dispatcher;function re(t){return(t.eventObject||t.object).uuid+"/"+t.index+t.instanceId}const ge=[["click",!1],["contextmenu",!1],["dblclick",!1],["wheel",!1],["pointerdown",!0],["pointerup",!0],["pointerleave",!0],["pointerenter",!0],["pointermove",!0],["pointercancel",!0]],Mt=t=>{function e(a){const f=a.offsetX-t.initialClick[0],h=a.offsetY-t.initialClick[1];return Math.round(Math.sqrt(f*f+h*h))}function n(a){for(const f of t.hovered.values())if(!a.length||!a.find(h=>h.object===f.object&&h.index===f.index&&h.instanceId===f.instanceId)){const h=f.eventObject;t.hovered.delete(re(f));const g=Q(h);if(g){const d={...f,intersections:a};g("pointerout",d),g("pointerleave",d)}}}const r=ze(t.enabled),o=()=>{const a=new Set,f=[];let h=t.interactiveObjects.flatMap(g=>r.current?t.raycaster.intersectObject(g,!0):[]).sort((g,d)=>g.distance-d.distance).filter(g=>{const d=re(g);return a.has(d)?!1:(a.add(d),!0)});t.filter&&(h=t.filter(h,t));for(const g of h){let d=g.object;for(;d;)Q(d)&&f.push({...g,eventObject:d}),d=d.parent}return f};function i(a,f){for(let h=0;h<f.length;h++){const g=Q(f[h]);g&&g("pointermissed",a)}}const l=a=>a==="pointerleave"||a==="pointercancel"?()=>{t.pointerOverTarget.set(!1),n([])}:a==="pointerenter"?()=>{t.pointerOverTarget.set(!0)}:f=>{const h=a==="pointermove",g=a==="click"||a==="contextmenu"||a==="dblclick";t.compute(f,t);const d=o(),u=g?e(f):0;a==="pointerdown"&&(t.initialClick=[f.offsetX,f.offsetY],t.initialHits=d.map(C=>C.eventObject)),g&&!d.length&&u<=2&&i(f,t.interactiveObjects),h&&n(d);let v=!1;e:for(const C of d){const k={stopped:v,...C,intersections:d,stopPropagation(){if(v=!0,k.stopped=!0,t.hovered.size&&Array.from(t.hovered.values()).find(O=>O.eventObject===C.eventObject)){const O=d.slice(0,d.indexOf(C));n([...O,C])}},camera:t.raycaster.camera,delta:u,nativeEvent:f,pointer:t.pointer.current,ray:t.raycaster.ray},b=Q(C.eventObject);if(!b)return;if(h){if(b.hasEventListener("pointerover")||b.hasEventListener("pointerenter")||b.hasEventListener("pointerout")||b.hasEventListener("pointerleave")){const O=re(k),G=t.hovered.get(O);G?G.stopped&&k.stopPropagation():(t.hovered.set(O,k),b("pointerover",k),b("pointerenter",k))}b("pointermove",k)}else b.hasEventListener(a)?(!g||t.initialHits.includes(C.eventObject))&&(i(f,t.interactiveObjects.filter(G=>!t.initialHits.includes(G))),b(a,k)):g&&t.initialHits.includes(C.eventObject)&&i(f,t.interactiveObjects.filter(G=>!t.initialHits.includes(G)));if(v)break e}},s=a=>{ge.forEach(([f])=>{a.removeEventListener(f,l(f))})},c=a=>{ge.forEach(([f,h])=>{a.addEventListener(f,l(f),{passive:h})})};ue(t.target,a=>(a&&c(a),()=>{a&&s(a)}))},xt=t=>{const e={enabled:I((t==null?void 0:t.enabled)??!0),pointer:I(new $e),pointerOverTarget:I(!1),lastEvent:void 0,raycaster:new et,initialClick:[0,0],initialHits:[],hovered:new Map,interactiveObjects:[],target:I((t==null?void 0:t.target)??V().renderer.domElement),compute:()=>{},filter:t==null?void 0:t.filter};return e.compute=(t==null?void 0:t.compute)??Tt(e),ne("threlte-interactivity-context",e),Ft(),Mt(e),e},It=()=>({description:"Rolling a cube on a flat surface is more complex than it sounds",title:"Rolling a Cube"}),ir=Object.freeze(Object.defineProperty({__proto__:null,load:It},Symbol.toStringTag,{value:"Module"}));function he(t){return Object.prototype.toString.call(t)==="[object Date]"}function ae(t,e){if(t===e||t!==t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const r=e.map((o,i)=>ae(t[i],o));return o=>r.map(i=>i(o))}if(n==="object"){if(!t||!e)throw new Error("Object cannot be null");if(he(t)&&he(e)){t=t.getTime(),e=e.getTime();const i=e-t;return l=>new Date(t+l*i)}const r=Object.keys(e),o={};return r.forEach(i=>{o[i]=ae(t[i],e[i])}),i=>{const l={};return r.forEach(s=>{l[s]=o[s](i)}),l}}if(n==="number"){const r=e-t;return o=>t+o*r}throw new Error(`Cannot interpolate ${n} values`)}function pe(t,e={}){const n=M(t);let r,o=t;function i(l,s){if(t==null)return n.set(t=l),Promise.resolve();o=l;let c=r,a=!1,{delay:f=0,duration:h=400,easing:g=We,interpolate:d=ae}=U(U({},e),s);if(h===0)return c&&(c.abort(),c=null),n.set(t=o),Promise.resolve();const u=ct()+f;let v;return r=lt(C=>{if(C<u)return!0;a||(v=d(t,l),typeof h=="function"&&(h=h(t,l)),a=!0),c&&(c.abort(),c=null);const k=C-u;return k>h?(n.set(t=l),!1):(n.set(t=v(g(k/h))),!0)}),r.promise}return{set:i,update:(l,s)=>i(l(o,t),s),subscribe:n.subscribe}}const Lt=Math.PI/180;function ve(t){return t*Lt}const Xt=t=>{const e=I(!1);return(n,r,o,i)=>async l=>{if(!e.current){e.set(!0),Math.sign(n.current)===l&&(r.update(c=>c+l*t),n.update(c=>c*=-1));const s=Math.sign(n.current);await o.update(c=>c+s*90),r.update(c=>c-s*t),await o.set(0,{duration:0}),i.update(c=>c+s*.5*Math.PI),e.set(!1)}}},Zt=(t=1)=>{const e=.5*t,n=I(e),r=M(0),o=M(0),i=pe(0),l=ie(i,ve),s=I(e),c=M(0),a=M(0),f=pe(0),h=ie(f,ve),g=Xt(t),d=g(n,r,f,a),u=g(s,c,i,o);return{left(){d(-1)},right(){d(1)},up(){u(-1)},down(){u(1)},radiansX:x(l),radiansZ:x(h),rotationX:x(o),rotationZ:x(a),positionX:x(n),positionZ:x(s),groupPositionX:x(r),groupPositionZ:x(c)}};function Ht(t){let e,n;return e=new at({}),{c(){D(e.$$.fragment)},l(r){z(e.$$.fragment,r)},m(r,o){P(e,r,o),n=!0},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){w(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function Bt(t){let e,n;return e=new T.DirectionalLightHelper({props:{args:[t[25]]}}),{c(){D(e.$$.fragment)},l(r){z(e.$$.fragment,r)},m(r,o){P(e,r,o),n=!0},p(r,o){const i={};o&33554432&&(i.args=[r[25]]),e.$set(i)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){w(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function Nt(t){let e,n;return e=new Gt({props:{object:t[9],$$slots:{default:[Bt]},$$scope:{ctx:t}}}),{c(){D(e.$$.fragment)},l(r){z(e.$$.fragment,r)},m(r,o){P(e,r,o),n=!0},p(r,o){const i={};o&100663296&&(i.$$scope={dirty:o,ctx:r}),e.$set(i)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){w(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function Wt(t){return{c:S,l:S,m:S,p:S,i:S,o:S,d:S}}function qt(t){let e,n;return e=new T.Mesh({props:{"position.x":t[4],"position.y":t[8],"position.z":t[5],"rotation.x":-t[6],"rotation.z":t[7],$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){D(e.$$.fragment)},l(r){z(e.$$.fragment,r)},m(r,o){P(e,r,o),n=!0},p(r,o){const i={};o&16&&(i["position.x"]=r[4]),o&32&&(i["position.z"]=r[5]),o&64&&(i["rotation.x"]=-r[6]),o&128&&(i["rotation.z"]=r[7]),o&67108864&&(i.$$scope={dirty:o,ctx:r}),e.$set(i)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){w(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function Ut(t){let e,n,r,o;return e=new T.MeshStandardMaterial({props:{map:t[24]}}),r=new T.BoxGeometry({}),{c(){D(e.$$.fragment),n=X(),D(r.$$.fragment)},l(i){z(e.$$.fragment,i),n=Z(i),z(r.$$.fragment,i)},m(i,l){P(e,i,l),R(i,n,l),P(r,i,l),o=!0},p:S,i(i){o||(y(e.$$.fragment,i),y(r.$$.fragment,i),o=!0)},o(i){w(e.$$.fragment,i),w(r.$$.fragment,i),o=!1},d(i){i&&F(n),j(e,i),j(r,i)}}}function Vt(t){return{c:S,l:S,m:S,p:S,i:S,o:S,d:S}}function Yt(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!1,pending:Vt,then:qt,catch:Wt,value:24,blocks:[,,,]};return ut(t[22],r),{c(){e=$(),r.block.c()},l(o){e=$(),r.block.l(o)},m(o,i){R(o,e,i),r.block.m(o,r.anchor=i),r.mount=()=>e.parentNode,r.anchor=e,n=!0},p(o,i){t=o,ft(r,t,i)},i(o){n||(y(r.block),n=!0)},o(o){for(let i=0;i<3;i+=1){const l=r.blocks[i];w(l)}n=!1},d(o){o&&F(e),r.block.d(o),r.token=null,r=null}}}function Jt(t){let e,n,r,o,i,l,s,c,a,f,h,g,d;return n=new T.AmbientLight({}),o=new St({props:{sectionColor:"#00ffff",infiniteGrid:!0,cellColor:"#00ffff"}}),l=new T.PerspectiveCamera({props:{makeDefault:!0,"position.x":5,"position.y":5,"position.z":5,$$slots:{default:[Ht]},$$scope:{ctx:t}}}),c=new T.DirectionalLight({props:{color:"#ff0000","position.x":-2,"position.y":2,"position.z":-2,$$slots:{default:[Nt,({ref:u})=>({25:u}),({ref:u})=>u?33554432:0]},$$scope:{ctx:t}}}),f=new T.Group({props:{"rotation.x":-t[0],"rotation.z":t[1],"position.x":t[2],"position.z":t[3],$$slots:{default:[Yt]},$$scope:{ctx:t}}}),f.$on("click",t[12]),f.$on("contextmenu",t[13]),{c(){e=X(),D(n.$$.fragment),r=X(),D(o.$$.fragment),i=X(),D(l.$$.fragment),s=X(),D(c.$$.fragment),a=X(),D(f.$$.fragment)},l(u){e=Z(u),z(n.$$.fragment,u),r=Z(u),z(o.$$.fragment,u),i=Z(u),z(l.$$.fragment,u),s=Z(u),z(c.$$.fragment,u),a=Z(u),z(f.$$.fragment,u)},m(u,v){R(u,e,v),P(n,u,v),R(u,r,v),P(o,u,v),R(u,i,v),P(l,u,v),R(u,s,v),P(c,u,v),R(u,a,v),P(f,u,v),h=!0,g||(d=qe(document,"keydown",t[23]),g=!0)},p(u,[v]){const C={};v&67108864&&(C.$$scope={dirty:v,ctx:u}),l.$set(C);const k={};v&100663296&&(k.$$scope={dirty:v,ctx:u}),c.$set(k);const b={};v&1&&(b["rotation.x"]=-u[0]),v&2&&(b["rotation.z"]=u[1]),v&4&&(b["position.x"]=u[2]),v&8&&(b["position.z"]=u[3]),v&67109104&&(b.$$scope={dirty:v,ctx:u}),f.$set(b)},i(u){h||(y(n.$$.fragment,u),y(o.$$.fragment,u),y(l.$$.fragment,u),y(c.$$.fragment,u),y(f.$$.fragment,u),h=!0)},o(u){w(n.$$.fragment,u),w(o.$$.fragment,u),w(l.$$.fragment,u),w(c.$$.fragment,u),w(f.$$.fragment,u),h=!1},d(u){u&&(F(e),F(r),F(i),F(s),F(a)),j(n,u),j(o,u),j(l,u),j(c,u),j(f,u),g=!1,d()}}}const be=1;function Kt(t,e,n){let r,o,i,l,s,c,a,f;const h=.5*be,{scene:g}=V(),{left:d,right:u,up:v,down:C,radiansX:k,radiansZ:b,rotationX:O,rotationZ:G,positionX:H,positionZ:A,groupPositionX:B,groupPositionZ:L}=Zt(be);E(t,k,_=>n(0,r=_)),E(t,b,_=>n(1,o=_)),E(t,O,_=>n(6,a=_)),E(t,G,_=>n(7,f=_)),E(t,H,_=>n(4,s=_)),E(t,A,_=>n(5,c=_)),E(t,B,_=>n(2,i=_)),E(t,L,_=>n(3,l=_));const q=gt(`${st}/spiral.png`);return xt(),[r,o,i,l,s,c,a,f,h,g,d,u,v,C,k,b,O,G,H,A,B,L,q,({key:_})=>{switch(!0){case _==="ArrowUp":v();break;case _==="ArrowDown":C();break;case _==="ArrowLeft":d();break;case _==="ArrowRight":u();break}}]}class ar extends ce{constructor(e){super(),le(this,e,Kt,Jt,se,{})}}export{ar as component,ir as universal};
