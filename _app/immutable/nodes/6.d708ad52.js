import{A as v,N as Fe,I as Re,O as V,P as Me,s as re,J as U,p as me,Q as je,K as ae,z as O,L as Ee,r as ge,a as X,c as Z,i as F,w as he,x as _e,y as Ce,d as R,e as J,R as Xe,S as Ze}from"../chunks/scheduler.c485494e.js";import{g as pe,t as k,c as be,a as b,S as oe,i as ne,f as Le,b as w,d as z,m as y,e as P}from"../chunks/index.5957f628.js";import{u as ie,X as xe,R as Ie,T,q as N,E as Be,c as K,Q as Ne}from"../chunks/T.28f8c31e.js";import{w as L,d as ee,r as M}from"../chunks/index.665c0385.js";import{u as We}from"../chunks/cache.cb2865f6.js";import{g as qe,a as Ue,f as He,b as Qe,O as Ve}from"../chunks/vertex.4c438dc3.js";import{b as Je}from"../chunks/paths.ba6a1953.js";const ke=typeof window<"u";let Ke=ke?()=>window.performance.now():()=>Date.now(),Se=ke?o=>requestAnimationFrame(o):v;const W=new Set;function ve(o){W.forEach(e=>{e.c(o)||(W.delete(e),e.f())}),W.size!==0&&Se(ve)}function Ye(o){let e;return W.size===0&&Se(ve),{promise:new Promise(r=>{W.add(e={c:o,f:r})}),abort(){W.delete(e)}}}function $e(o,e){const r=e.token={};function t(n,i,c,a){if(e.token!==r)return;e.resolved=a;let s=e.ctx;c!==void 0&&(s=s.slice(),s[c]=a);const u=n&&(e.current=n)(s);let _=!1;e.block&&(e.blocks?e.blocks.forEach((h,C)=>{C!==i&&h&&(pe(),k(h,1,1,()=>{e.blocks[C]===h&&(e.blocks[C]=null)}),be())}):e.block.d(1),u.c(),b(u,1),u.m(e.mount(),e.anchor),_=!0),e.block=u,e.blocks&&(e.blocks[i]=u),_&&Me()}if(Fe(o)){const n=Re();if(o.then(i=>{V(n),t(e.then,1,e.value,i),V(null)},i=>{if(V(n),t(e.catch,2,e.error,i),V(null),!e.hasCatch)throw i}),e.current!==e.pending)return t(e.pending,0),!0}else{if(e.current!==e.then)return t(e.then,1,e.value,o),!0;e.resolved=o}}function et(o,e,r){const t=e.slice(),{resolved:n}=o;o.current===o.then&&(t[o.value]=n),o.current===o.catch&&(t[o.error]=n),o.block.p(t,r)}const $=o=>{const e=L(void 0),r=L(void 0);return o.then(t=>{e.set(t)}).catch(t=>{console.error("Error in asyncWritable:",t.message),r.set(t)}),Object.assign(Object.assign(o,e),{error:r,promise:o})},tt=(o,e={})=>{var a;const{remember:r,clear:t}=We(),n=new o;return(a=e.extend)==null||a.call(e,n),{load:(s,u)=>{const _=async h=>{var C;if("loadAsync"in n){const m=await n.loadAsync(h,u==null?void 0:u.onProgress);return((C=u==null?void 0:u.transform)==null?void 0:C.call(u,m))??m}else return new Promise((m,l)=>{n.load(h,g=>{var S;return m(((S=u==null?void 0:u.transform)==null?void 0:S.call(u,g))??g)},g=>{var S;return(S=u==null?void 0:u.onProgress)==null?void 0:S.call(u,g)},l)})};if(Array.isArray(s)){const h=s.map(m=>r(()=>_(m),[o,m]));return $(Promise.all(h))}else if(typeof s=="string"){const h=r(()=>_(s),[o,s]);return $(h)}else{const h=Object.values(s).map(m=>r(()=>_(m),[o,m]));return $(Promise.all(h).then(m=>Object.fromEntries(Object.entries(s).map(([l],g)=>[l,m[g]]))))}},clear:s=>{Array.isArray(s)?s.forEach(u=>{t([o,u])}):typeof s=="string"?t([o,s]):Object.entries(s).forEach(([u,_])=>{t([o,u,_])})},loader:n}},rt=(o,e)=>{const r=tt(xe,e),{renderer:t}=ie();return r.load(o,{...e,transform:n=>{var i;return"colorSpace"in n?n.colorSpace=t.outputColorSpace:n.encoding=t.outputEncoding,n.needsUpdate=!0,((i=e==null?void 0:e.transform)==null?void 0:i.call(e,n))??n}})},ot=Number.parseInt(Ie.replace("dev","")),nt=`
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
`,it=`
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
`,at={fragmentShader:it,vertexShader:nt},st=o=>({ref:o[0]&1}),se=o=>({ref:o[0]});function lt(o){let e,r;return e=new T.PlaneGeometry({props:{args:typeof o[1]=="number"?[o[1],o[1]]:o[1]}}),{c(){w(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){y(e,t,n),r=!0},p(t,n){const i={};n[0]&2&&(i.args=typeof t[1]=="number"?[t[1],t[1]]:t[1]),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function ct(o){let e,r,t;e=new T.ShaderMaterial({props:{fragmentShader:o[4],vertexShader:o[5],uniforms:o[2],transparent:!0,side:Be,defines:{USE_COLORSPACE_FRAGMENT:ot>=154?"":void 0}}});const n=o[26].default,i=ge(n,o,o[29],se),c=i||lt(o);return{c(){w(e.$$.fragment),r=X(),c&&c.c()},l(a){z(e.$$.fragment,a),r=Z(a),c&&c.l(a)},m(a,s){y(e,a,s),F(a,r,s),c&&c.m(a,s),t=!0},p(a,s){const u={};s[0]&4&&(u.uniforms=a[2]),e.$set(u),i?i.p&&(!t||s[0]&536870913)&&he(i,n,a,a[29],t?Ce(n,a[29],s,st):_e(a[29]),se):c&&c.p&&(!t||s[0]&2)&&c.p(a,t?s:[-1,-1])},i(a){t||(b(e.$$.fragment,a),b(c,a),t=!0)},o(a){k(e.$$.fragment,a),k(c,a),t=!1},d(a){a&&R(r),P(e,a),c&&c.d(a)}}}function ut(o){let e,r,t;const n=[{frustumCulled:!1},o[7]];function i(a){o[28](a)}let c={$$slots:{default:[ct,({ref:a})=>({0:a}),({ref:a})=>[a?1:0]]},$$scope:{ctx:o}};for(let a=0;a<n.length;a+=1)c=U(c,n[a]);return o[0]!==void 0&&(c.ref=o[0]),e=new T.Mesh({props:c}),o[27](e),me.push(()=>Le(e,"ref",i)),{c(){w(e.$$.fragment)},l(a){z(e.$$.fragment,a)},m(a,s){y(e,a,s),t=!0},p(a,s){const u=s[0]&128?qe(n,[n[0],Ue(a[7])]):{};s[0]&536870919&&(u.$$scope={dirty:s,ctx:a}),!r&&s[0]&1&&(r=!0,u.ref=a[0],je(()=>r=!1)),e.$set(u)},i(a){t||(b(e.$$.fragment,a),t=!0)},o(a){k(e.$$.fragment,a),t=!1},d(a){o[27](null),P(e,a)}}}function ft(o,e,r){const t=["cellColor","sectionColor","cellSize","backgroundColor","backgroundOpacity","sectionSize","plane","gridSize","followCamera","infiniteGrid","fadeDistance","fadeStrength","cellThickness","sectionThickness","type","axis","maxRadius","cellDividers","sectionDividers","ref"];let n=ae(e,t),i,{$$slots:c={},$$scope:a}=e,{cellColor:s="#000000"}=e,{sectionColor:u="#0000ee"}=e,{cellSize:_=1}=e,{backgroundColor:h="#dadada"}=e,{backgroundOpacity:C=0}=e,{sectionSize:m=10}=e,{plane:l="xz"}=e,{gridSize:g=[20,20]}=e,{followCamera:S=!1}=e,{infiniteGrid:D=!1}=e,{fadeDistance:G=100}=e,{fadeStrength:j=1}=e,{cellThickness:x=1}=e,{sectionThickness:I=2}=e,{type:A="grid"}=e,{axis:B="x"}=e,{maxRadius:E=0}=e,{cellDividers:q=6}=e,{sectionDividers:H=2}=e,{ref:p}=e;const{fragmentShader:we,vertexShader:ze}=at,{invalidate:ye}=ie();let d={uSize1:{value:_},uSize2:{value:m},uColor1:{value:new N(s)},uColor2:{value:new N(u)},uBackgroundColor:{value:new N("#aaaaaa")},uBackgroundOpacity:{value:.7},uFadeDistance:{value:G},uFadeStrength:{value:j},uThickness1:{value:1},uThickness2:{value:1},uInfiniteGrid:{value:D?1:0},uFollowCamera:{value:0},uCoord0:{value:0},uCoord1:{value:2},uCoord2:{value:1},uGridType:{value:0},uLineGridCoord:{value:0},uCircleGridMaxRadius:{value:9},uPolarCellDividers:{value:6},uPolarSectionDividers:{value:2}};const Q={x:0,y:1,z:2},Pe={xz:"xzy",xy:"xyz",zy:"zyx"},Y=He();O(o,Y,f=>r(3,i=f));function Ge(f){me[f?"unshift":"push"](()=>{i=f,Y.set(i)})}function De(f){p=f,r(0,p)}return o.$$set=f=>{e=U(U({},e),Ee(f)),r(7,n=ae(e,t)),"cellColor"in f&&r(8,s=f.cellColor),"sectionColor"in f&&r(9,u=f.sectionColor),"cellSize"in f&&r(10,_=f.cellSize),"backgroundColor"in f&&r(11,h=f.backgroundColor),"backgroundOpacity"in f&&r(12,C=f.backgroundOpacity),"sectionSize"in f&&r(13,m=f.sectionSize),"plane"in f&&r(14,l=f.plane),"gridSize"in f&&r(1,g=f.gridSize),"followCamera"in f&&r(15,S=f.followCamera),"infiniteGrid"in f&&r(16,D=f.infiniteGrid),"fadeDistance"in f&&r(17,G=f.fadeDistance),"fadeStrength"in f&&r(18,j=f.fadeStrength),"cellThickness"in f&&r(19,x=f.cellThickness),"sectionThickness"in f&&r(20,I=f.sectionThickness),"type"in f&&r(21,A=f.type),"axis"in f&&r(22,B=f.axis),"maxRadius"in f&&r(23,E=f.maxRadius),"cellDividers"in f&&r(24,q=f.cellDividers),"sectionDividers"in f&&r(25,H=f.sectionDividers),"ref"in f&&r(0,p=f.ref),"$$scope"in f&&r(29,a=f.$$scope)},o.$$.update=()=>{if(o.$$.dirty[0]&67108608){const f=Pe[l],Te=f.charAt(0),Oe=f.charAt(1),Ae=f.charAt(2);r(2,d.uCoord0.value=Q[Te],d),r(2,d.uCoord1.value=Q[Oe],d),r(2,d.uCoord2.value=Q[Ae],d),r(2,d.uSize1={value:_},d),r(2,d.uSize2={value:m},d),r(2,d.uColor1={value:new N(s)},d),r(2,d.uColor2={value:new N(u)},d),r(2,d.uBackgroundColor={value:new N(h)},d),r(2,d.uBackgroundOpacity={value:C},d),r(2,d.uFadeDistance={value:G},d),r(2,d.uFadeStrength={value:j},d),r(2,d.uThickness1={value:x},d),r(2,d.uThickness2={value:I},d),r(2,d.uFollowCamera={value:S?1:0},d),r(2,d.uInfiniteGrid={value:D?1:0},d),A=="grid"&&r(2,d.uGridType={value:0},d),A==="lines"&&(r(2,d.uGridType={value:1},d),r(2,d.uLineGridCoord={value:Q[B]},d)),A==="circular"&&(r(2,d.uGridType={value:2},d),r(2,d.uCircleGridMaxRadius={value:E||0},d)),A==="polar"&&(r(2,d.uGridType={value:3},d),r(2,d.uCircleGridMaxRadius={value:E||0},d),r(2,d.uPolarCellDividers={value:q||0},d),r(2,d.uPolarSectionDividers={value:H||0},d)),ye()}},[p,g,d,i,we,ze,Y,n,s,u,_,h,C,m,l,S,D,G,j,x,I,A,B,E,q,H,c,Ge,De,a]}class dt extends oe{constructor(e){super(),ne(this,e,ft,ut,re,{cellColor:8,sectionColor:9,cellSize:10,backgroundColor:11,backgroundOpacity:12,sectionSize:13,plane:14,gridSize:1,followCamera:15,infiniteGrid:16,fadeDistance:17,fadeStrength:18,cellThickness:19,sectionThickness:20,type:21,axis:22,maxRadius:23,cellDividers:24,sectionDividers:25,ref:0},null,[-1,-1])}}const mt=()=>{const o={portals:K(new Map),addPortal(e,r){o.portals.update(t=>(t.has(r)?console.warn(`Portal with id ${r} already exists. Skipping portal creation.`):t.set(r,e),t))},removePortal(e){o.portals.update(r=>(r.has(e)?r.delete(e):console.warn(`Portal with id ${e} does not exist. Skipping portal removal.`),r))},getPortal(e){return ee(o.portals,r=>r.get(e))},hasPortal(e){return o.portals.current.has(e)}};return o},gt=()=>Qe("threlte-portals",mt());function le(o){let e,r;return e=new Ne({props:{onChildMount:o[6],onChildDestroy:o[7],$$slots:{default:[ht]},$$scope:{ctx:o}}}),{c(){w(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){y(e,t,n),r=!0},p(t,n){const i={};n&1&&(i.onChildMount=t[6]),n&1&&(i.onChildDestroy=t[7]),n&256&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function ht(o){let e;const r=o[5].default,t=ge(r,o,o[8],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,i){t&&t.m(n,i),e=!0},p(n,i){t&&t.p&&(!e||i&256)&&he(t,r,n,n[8],e?Ce(r,n[8],i,null):_e(n[8]),null)},i(n){e||(b(t,n),e=!0)},o(n){k(t,n),e=!1},d(n){t&&t.d(n)}}}function _t(o){let e,r,t=o[0]&&le(o);return{c(){t&&t.c(),e=J()},l(n){t&&t.l(n),e=J()},m(n,i){t&&t.m(n,i),F(n,e,i),r=!0},p(n,[i]){n[0]?t?(t.p(n,i),i&1&&b(t,1)):(t=le(n),t.c(),b(t,1),t.m(e.parentNode,e)):t&&(pe(),k(t,1,1,()=>{t=null}),be())},i(n){r||(b(t),r=!0)},o(n){k(t),r=!1},d(n){n&&R(e),t&&t.d(n)}}}function Ct(o,e,r){let t,n,{$$slots:i={},$$scope:c}=e,{id:a="default"}=e,{object:s=void 0}=e;const{getPortal:u}=gt(),_=u(a);O(o,_,m=>r(4,n=m));const h=m=>{t==null||t.add(m)},C=m=>{t==null||t.remove(m)};return o.$$set=m=>{"id"in m&&r(2,a=m.id),"object"in m&&r(3,s=m.object),"$$scope"in m&&r(8,c=m.$$scope)},o.$$.update=()=>{o.$$.dirty&24&&r(0,t=s??n)},[t,_,a,s,n,i,h,C,c]}class pt extends oe{constructor(e){super(),ne(this,e,Ct,_t,re,{id:2,object:3})}}const bt=()=>({description:"Rolling a cube on a flat surface is more complex than it sounds",title:"Rolling a Cube"}),xt=Object.freeze(Object.defineProperty({__proto__:null,load:bt},Symbol.toStringTag,{value:"Module"})),kt=Math.PI/180;function ce(o){return o*kt}function ue(o){return Object.prototype.toString.call(o)==="[object Date]"}function te(o,e){if(o===e||o!==o)return()=>o;const r=typeof o;if(r!==typeof e||Array.isArray(o)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(o)){const t=e.map((n,i)=>te(o[i],n));return n=>t.map(i=>i(n))}if(r==="object"){if(!o||!e)throw new Error("Object cannot be null");if(ue(o)&&ue(e)){o=o.getTime(),e=e.getTime();const i=e-o;return c=>new Date(o+c*i)}const t=Object.keys(e),n={};return t.forEach(i=>{n[i]=te(o[i],e[i])}),i=>{const c={};return t.forEach(a=>{c[a]=n[a](i)}),c}}if(r==="number"){const t=e-o;return n=>o+n*t}throw new Error(`Cannot interpolate ${r} values`)}function fe(o,e={}){const r=L(o);let t,n=o;function i(c,a){if(o==null)return r.set(o=c),Promise.resolve();n=c;let s=t,u=!1,{delay:_=0,duration:h=400,easing:C=Xe,interpolate:m=te}=U(U({},e),a);if(h===0)return s&&(s.abort(),s=null),r.set(o=n),Promise.resolve();const l=Ke()+_;let g;return t=Ye(S=>{if(S<l)return!0;u||(g=m(o,c),typeof h=="function"&&(h=h(o,c)),u=!0),s&&(s.abort(),s=null);const D=S-l;return D>h?(r.set(o=c),!1):(r.set(o=g(C(D/h))),!0)}),t.promise}return{set:i,update:(c,a)=>i(c(n,o),a),subscribe:r.subscribe}}const St=o=>{const e=K(!1);return(r,t,n,i)=>async c=>{if(!e.current){e.set(!0),Math.sign(r.current)===c&&(t.update(s=>s+c*o),r.update(s=>s*=-1));const a=Math.sign(r.current);await n.update(s=>s+a*90),t.update(s=>s-a*o),await n.set(0,{duration:0}),i.update(s=>s+a*.5*Math.PI),e.set(!1)}}},vt=(o=1)=>{const e=.5*o,r=K(e),t=L(0),n=L(0),i=fe(0),c=ee(i,ce),a=K(e),s=L(0),u=L(0),_=fe(0),h=ee(_,ce),C=St(o),m=C(r,t,_,u),l=C(a,s,i,n);return{left(){m(-1)},right(){m(1)},up(){l(-1)},down(){l(1)},radiansX:M(c),radiansZ:M(h),rotationX:M(n),rotationZ:M(u),positionX:M(r),positionZ:M(a),groupPositionX:M(t),groupPositionZ:M(s)}};function wt(o){let e,r;return e=new Ve({}),{c(){w(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){y(e,t,n),r=!0},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function zt(o){let e,r;return e=new T.DirectionalLightHelper({props:{args:[o[25]]}}),{c(){w(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){y(e,t,n),r=!0},p(t,n){const i={};n&33554432&&(i.args=[t[25]]),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function yt(o){let e,r;return e=new pt({props:{object:o[9],$$slots:{default:[zt]},$$scope:{ctx:o}}}),{c(){w(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){y(e,t,n),r=!0},p(t,n){const i={};n&100663296&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function Pt(o){return{c:v,l:v,m:v,p:v,i:v,o:v,d:v}}function Gt(o){let e,r;return e=new T.Mesh({props:{"position.x":o[4],"position.y":o[8],"position.z":o[5],"rotation.x":-o[6],"rotation.z":o[7],$$slots:{default:[Dt]},$$scope:{ctx:o}}}),{c(){w(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){y(e,t,n),r=!0},p(t,n){const i={};n&16&&(i["position.x"]=t[4]),n&32&&(i["position.z"]=t[5]),n&64&&(i["rotation.x"]=-t[6]),n&128&&(i["rotation.z"]=t[7]),n&67108864&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function Dt(o){let e,r,t,n;return e=new T.MeshStandardMaterial({props:{map:o[24]}}),t=new T.BoxGeometry({}),{c(){w(e.$$.fragment),r=X(),w(t.$$.fragment)},l(i){z(e.$$.fragment,i),r=Z(i),z(t.$$.fragment,i)},m(i,c){y(e,i,c),F(i,r,c),y(t,i,c),n=!0},p:v,i(i){n||(b(e.$$.fragment,i),b(t.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),k(t.$$.fragment,i),n=!1},d(i){i&&R(r),P(e,i),P(t,i)}}}function Tt(o){return{c:v,l:v,m:v,p:v,i:v,o:v,d:v}}function Ot(o){let e,r,t={ctx:o,current:null,token:null,hasCatch:!1,pending:Tt,then:Gt,catch:Pt,value:24,blocks:[,,,]};return $e(o[22],t),{c(){e=J(),t.block.c()},l(n){e=J(),t.block.l(n)},m(n,i){F(n,e,i),t.block.m(n,t.anchor=i),t.mount=()=>e.parentNode,t.anchor=e,r=!0},p(n,i){o=n,et(t,o,i)},i(n){r||(b(t.block),r=!0)},o(n){for(let i=0;i<3;i+=1){const c=t.blocks[i];k(c)}r=!1},d(n){n&&R(e),t.block.d(n),t.token=null,t=null}}}function At(o){let e,r,t,n,i,c,a,s,u,_,h,C,m;return r=new T.AmbientLight({}),n=new dt({props:{sectionColor:"#00ffff",infiniteGrid:!0,cellColor:"#00ffff"}}),c=new T.PerspectiveCamera({props:{makeDefault:!0,"position.x":5,"position.y":5,"position.z":5,$$slots:{default:[wt]},$$scope:{ctx:o}}}),s=new T.DirectionalLight({props:{color:"#ff0000","position.x":-2,"position.y":2,"position.z":-2,$$slots:{default:[yt,({ref:l})=>({25:l}),({ref:l})=>l?33554432:0]},$$scope:{ctx:o}}}),_=new T.Group({props:{"rotation.x":-o[0],"rotation.z":o[1],"position.x":o[2],"position.z":o[3],$$slots:{default:[Ot]},$$scope:{ctx:o}}}),{c(){e=X(),w(r.$$.fragment),t=X(),w(n.$$.fragment),i=X(),w(c.$$.fragment),a=X(),w(s.$$.fragment),u=X(),w(_.$$.fragment)},l(l){e=Z(l),z(r.$$.fragment,l),t=Z(l),z(n.$$.fragment,l),i=Z(l),z(c.$$.fragment,l),a=Z(l),z(s.$$.fragment,l),u=Z(l),z(_.$$.fragment,l)},m(l,g){F(l,e,g),y(r,l,g),F(l,t,g),y(n,l,g),F(l,i,g),y(c,l,g),F(l,a,g),y(s,l,g),F(l,u,g),y(_,l,g),h=!0,C||(m=Ze(document,"keydown",o[23]),C=!0)},p(l,[g]){const S={};g&67108864&&(S.$$scope={dirty:g,ctx:l}),c.$set(S);const D={};g&100663296&&(D.$$scope={dirty:g,ctx:l}),s.$set(D);const G={};g&1&&(G["rotation.x"]=-l[0]),g&2&&(G["rotation.z"]=l[1]),g&4&&(G["position.x"]=l[2]),g&8&&(G["position.z"]=l[3]),g&67109104&&(G.$$scope={dirty:g,ctx:l}),_.$set(G)},i(l){h||(b(r.$$.fragment,l),b(n.$$.fragment,l),b(c.$$.fragment,l),b(s.$$.fragment,l),b(_.$$.fragment,l),h=!0)},o(l){k(r.$$.fragment,l),k(n.$$.fragment,l),k(c.$$.fragment,l),k(s.$$.fragment,l),k(_.$$.fragment,l),h=!1},d(l){l&&(R(e),R(t),R(i),R(a),R(u)),P(r,l),P(n,l),P(c,l),P(s,l),P(_,l),C=!1,m()}}}const de=1;function Ft(o,e,r){let t,n,i,c,a,s,u,_;const h=.5*de,{scene:C}=ie(),{left:m,right:l,up:g,down:S,radiansX:D,radiansZ:G,rotationX:j,rotationZ:x,positionX:I,positionZ:A,groupPositionX:B,groupPositionZ:E}=vt(de);O(o,D,p=>r(0,t=p)),O(o,G,p=>r(1,n=p)),O(o,j,p=>r(6,u=p)),O(o,x,p=>r(7,_=p)),O(o,I,p=>r(4,a=p)),O(o,A,p=>r(5,s=p)),O(o,B,p=>r(2,i=p)),O(o,E,p=>r(3,c=p));const q=rt(`${Je}/spiral.png`);return[t,n,i,c,a,s,u,_,h,C,m,l,g,S,D,G,j,x,I,A,B,E,q,({key:p})=>{switch(!0){case p==="ArrowUp":g();break;case p==="ArrowDown":S();break;case p==="ArrowLeft":m();break;case p==="ArrowRight":l();break}}]}class It extends oe{constructor(e){super(),ne(this,e,Ft,At,re,{})}}export{It as component,xt as universal};
