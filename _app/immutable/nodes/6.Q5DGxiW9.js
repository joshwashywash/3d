import{A as P,N as Le,I as je,O as Y,P as Ee,s as ie,J as I,p as pe,Q as Me,K as ce,z as j,L as Xe,r as _e,a as q,c as U,i as X,w as Ce,x as be,y as ke,d as Z,e as $,R as Ze,S as Ie,T as Be}from"../chunks/scheduler.XqNPAMn-.js";import{g as Se,t as w,c as ve,a as v,S as se,i as ae,f as xe,b as T,d as D,m as O,e as A}from"../chunks/index.E9CJS0lF.js";import{g as V,a as J,f as Ne,b as We,O as qe}from"../chunks/vertex.vcw8kvH9.js";import{u as le,X as Ue,R as He,T as F,p as H,E as Qe,c as ee,w as Ve,Q as Je}from"../chunks/T.OEe8eHzI.js";import{w as B,d as oe,r as W}from"../chunks/index.BLYYf3Yj.js";import{u as Ke}from"../chunks/cache.TwZm2onm.js";import{b as Ye}from"../chunks/paths.x69oL0sy.js";const we=typeof window<"u";let $e=we?()=>window.performance.now():()=>Date.now(),ze=we?o=>requestAnimationFrame(o):P;const Q=new Set;function Pe(o){Q.forEach(e=>{e.c(o)||(Q.delete(e),e.f())}),Q.size!==0&&ze(Pe)}function et(o){let e;return Q.size===0&&ze(Pe),{promise:new Promise(r=>{Q.add(e={c:o,f:r})}),abort(){Q.delete(e)}}}function tt(o,e){const r=e.token={};function t(n,i,c,a){if(e.token!==r)return;e.resolved=a;let l=e.ctx;c!==void 0&&(l=l.slice(),l[c]=a);const d=n&&(e.current=n)(l);let g=!1;e.block&&(e.blocks?e.blocks.forEach((m,b)=>{b!==i&&m&&(Se(),w(m,1,1,()=>{e.blocks[b]===m&&(e.blocks[b]=null)}),ve())}):e.block.d(1),d.c(),v(d,1),d.m(e.mount(),e.anchor),g=!0),e.block=d,e.blocks&&(e.blocks[i]=d),g&&Ee()}if(Le(o)){const n=je();if(o.then(i=>{Y(n),t(e.then,1,e.value,i),Y(null)},i=>{if(Y(n),t(e.catch,2,e.error,i),Y(null),!e.hasCatch)throw i}),e.current!==e.pending)return t(e.pending,0),!0}else{if(e.current!==e.then)return t(e.then,1,e.value,o),!0;e.resolved=o}}function rt(o,e,r){const t=e.slice(),{resolved:n}=o;o.current===o.then&&(t[o.value]=n),o.current===o.catch&&(t[o.error]=n),o.block.p(t,r)}const re=o=>{const e=B(void 0),r=B(void 0);return o.then(t=>{e.set(t)}).catch(t=>{console.error("Error in asyncWritable:",t.message),r.set(t)}),Object.assign(Object.assign(o,e),{error:r,promise:o})};function ot(o,e){const{remember:r,clear:t}=Ke();let n;const i=()=>{const l=new o(...e?.args??[]);return e?.extend?.(l),l};return{load:(l,d)=>{const g=async m=>{if(n||(n=i()),"loadAsync"in n){const b=await n.loadAsync(m,d?.onProgress);return d?.transform?.(b)??b}else return new Promise((b,C)=>{n.load(m,k=>b(d?.transform?.(k)??k),k=>d?.onProgress?.(k),C)})};if(Array.isArray(l)){const m=l.map(C=>r(()=>g(C),[o,C]));return re(Promise.all(m))}else if(typeof l=="string"){const m=r(()=>g(l),[o,l]);return re(m)}else{const m=Object.values(l).map(C=>r(()=>g(C),[o,C]));return re(Promise.all(m).then(C=>Object.fromEntries(Object.entries(l).map(([k],y)=>[k,C[y]]))))}},clear:l=>{Array.isArray(l)?l.forEach(d=>{t([o,d])}):typeof l=="string"?t([o,l]):Object.entries(l).forEach(([d,g])=>{t([o,d,g])})},loader:n}}const nt=(o,e)=>{const r=ot(Ue,e),{renderer:t}=le();return r.load(o,{...e,transform:n=>("colorSpace"in n?n.colorSpace=t.outputColorSpace:n.encoding=t.outputEncoding,n.needsUpdate=!0,e?.transform?.(n)??n)})},it=Number.parseInt(He.replace("dev","")),st=`
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
`,at=`
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
`,lt={fragmentShader:at,vertexShader:st},ct=o=>({ref:o[0]&1}),ue=o=>({ref:o[0]});function ut(o){let e,r;return e=new F.PlaneGeometry({props:{args:typeof o[1]=="number"?[o[1],o[1]]:o[1]}}),{c(){T(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,n){O(e,t,n),r=!0},p(t,n){const i={};n[0]&2&&(i.args=typeof t[1]=="number"?[t[1],t[1]]:t[1]),e.$set(i)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function ft(o){let e,r,t;e=new F.ShaderMaterial({props:{fragmentShader:o[4],vertexShader:o[5],uniforms:o[2],transparent:!0,side:Qe,defines:{USE_COLORSPACE_FRAGMENT:it>=154?"":void 0}}});const n=o[26].default,i=_e(n,o,o[29],ue),c=i||ut(o);return{c(){T(e.$$.fragment),r=q(),c&&c.c()},l(a){D(e.$$.fragment,a),r=U(a),c&&c.l(a)},m(a,l){O(e,a,l),X(a,r,l),c&&c.m(a,l),t=!0},p(a,l){const d={};l[0]&4&&(d.uniforms=a[2]),e.$set(d),i?i.p&&(!t||l[0]&536870913)&&Ce(i,n,a,a[29],t?ke(n,a[29],l,ct):be(a[29]),ue):c&&c.p&&(!t||l[0]&2)&&c.p(a,t?l:[-1,-1])},i(a){t||(v(e.$$.fragment,a),v(c,a),t=!0)},o(a){w(e.$$.fragment,a),w(c,a),t=!1},d(a){a&&Z(r),A(e,a),c&&c.d(a)}}}function dt(o){let e,r,t;const n=[{frustumCulled:!1},o[7]];function i(a){o[28](a)}let c={$$slots:{default:[ft,({ref:a})=>({0:a}),({ref:a})=>[a?1:0]]},$$scope:{ctx:o}};for(let a=0;a<n.length;a+=1)c=I(c,n[a]);return o[0]!==void 0&&(c.ref=o[0]),e=new F.Mesh({props:c}),o[27](e),pe.push(()=>xe(e,"ref",i)),{c(){T(e.$$.fragment)},l(a){D(e.$$.fragment,a)},m(a,l){O(e,a,l),t=!0},p(a,l){const d=l[0]&128?V(n,[n[0],J(a[7])]):{};l[0]&536870919&&(d.$$scope={dirty:l,ctx:a}),!r&&l[0]&1&&(r=!0,d.ref=a[0],Me(()=>r=!1)),e.$set(d)},i(a){t||(v(e.$$.fragment,a),t=!0)},o(a){w(e.$$.fragment,a),t=!1},d(a){o[27](null),A(e,a)}}}function mt(o,e,r){const t=["cellColor","sectionColor","cellSize","backgroundColor","backgroundOpacity","sectionSize","plane","gridSize","followCamera","infiniteGrid","fadeDistance","fadeStrength","cellThickness","sectionThickness","type","axis","maxRadius","cellDividers","sectionDividers","ref"];let n=ce(e,t),i,{$$slots:c={},$$scope:a}=e,{cellColor:l="#000000"}=e,{sectionColor:d="#0000ee"}=e,{cellSize:g=1}=e,{backgroundColor:m="#dadada"}=e,{backgroundOpacity:b=0}=e,{sectionSize:C=10}=e,{plane:k="xz"}=e,{gridSize:y=[20,20]}=e,{followCamera:G=!1}=e,{infiniteGrid:h=!1}=e,{fadeDistance:S=100}=e,{fadeStrength:z=1}=e,{cellThickness:R=1}=e,{sectionThickness:L=2}=e,{type:s="grid"}=e,{axis:p="x"}=e,{maxRadius:E=0}=e,{cellDividers:x=6}=e,{sectionDividers:N=2}=e,{ref:M}=e;const{fragmentShader:_,vertexShader:ye}=lt,{invalidate:Ge}=le();let f={uSize1:{value:g},uSize2:{value:C},uColor1:{value:new H(l)},uColor2:{value:new H(d)},uBackgroundColor:{value:new H("#aaaaaa")},uBackgroundOpacity:{value:.7},uFadeDistance:{value:S},uFadeStrength:{value:z},uThickness1:{value:1},uThickness2:{value:1},uInfiniteGrid:{value:h?1:0},uFollowCamera:{value:0},uCoord0:{value:0},uCoord1:{value:2},uCoord2:{value:1},uGridType:{value:0},uLineGridCoord:{value:0},uCircleGridMaxRadius:{value:9},uPolarCellDividers:{value:6},uPolarSectionDividers:{value:2}};const K={x:0,y:1,z:2},Te={xz:"xzy",xy:"xyz",zy:"zyx"},te=Ne();j(o,te,u=>r(3,i=u));function De(u){pe[u?"unshift":"push"](()=>{i=u,te.set(i)})}function Oe(u){M=u,r(0,M)}return o.$$set=u=>{e=I(I({},e),Xe(u)),r(7,n=ce(e,t)),"cellColor"in u&&r(8,l=u.cellColor),"sectionColor"in u&&r(9,d=u.sectionColor),"cellSize"in u&&r(10,g=u.cellSize),"backgroundColor"in u&&r(11,m=u.backgroundColor),"backgroundOpacity"in u&&r(12,b=u.backgroundOpacity),"sectionSize"in u&&r(13,C=u.sectionSize),"plane"in u&&r(14,k=u.plane),"gridSize"in u&&r(1,y=u.gridSize),"followCamera"in u&&r(15,G=u.followCamera),"infiniteGrid"in u&&r(16,h=u.infiniteGrid),"fadeDistance"in u&&r(17,S=u.fadeDistance),"fadeStrength"in u&&r(18,z=u.fadeStrength),"cellThickness"in u&&r(19,R=u.cellThickness),"sectionThickness"in u&&r(20,L=u.sectionThickness),"type"in u&&r(21,s=u.type),"axis"in u&&r(22,p=u.axis),"maxRadius"in u&&r(23,E=u.maxRadius),"cellDividers"in u&&r(24,x=u.cellDividers),"sectionDividers"in u&&r(25,N=u.sectionDividers),"ref"in u&&r(0,M=u.ref),"$$scope"in u&&r(29,a=u.$$scope)},o.$$.update=()=>{if(o.$$.dirty[0]&67108608){const u=Te[k],Ae=u.charAt(0),Fe=u.charAt(1),Re=u.charAt(2);r(2,f.uCoord0.value=K[Ae],f),r(2,f.uCoord1.value=K[Fe],f),r(2,f.uCoord2.value=K[Re],f),r(2,f.uSize1={value:g},f),r(2,f.uSize2={value:C},f),r(2,f.uColor1={value:new H(l)},f),r(2,f.uColor2={value:new H(d)},f),r(2,f.uBackgroundColor={value:new H(m)},f),r(2,f.uBackgroundOpacity={value:b},f),r(2,f.uFadeDistance={value:S},f),r(2,f.uFadeStrength={value:z},f),r(2,f.uThickness1={value:R},f),r(2,f.uThickness2={value:L},f),r(2,f.uFollowCamera={value:G?1:0},f),r(2,f.uInfiniteGrid={value:h?1:0},f),s=="grid"&&r(2,f.uGridType={value:0},f),s==="lines"&&(r(2,f.uGridType={value:1},f),r(2,f.uLineGridCoord={value:K[p]},f)),s==="circular"&&(r(2,f.uGridType={value:2},f),r(2,f.uCircleGridMaxRadius={value:E||0},f)),s==="polar"&&(r(2,f.uGridType={value:3},f),r(2,f.uCircleGridMaxRadius={value:E||0},f),r(2,f.uPolarCellDividers={value:x||0},f),r(2,f.uPolarSectionDividers={value:N||0},f)),Ge()}},[M,y,f,i,_,ye,te,n,l,d,g,m,b,C,k,G,h,S,z,R,L,s,p,E,x,N,c,De,Oe,a]}class gt extends se{constructor(e){super(),ae(this,e,mt,dt,ie,{cellColor:8,sectionColor:9,cellSize:10,backgroundColor:11,backgroundOpacity:12,sectionSize:13,plane:14,gridSize:1,followCamera:15,infiniteGrid:16,fadeDistance:17,fadeStrength:18,cellThickness:19,sectionThickness:20,type:21,axis:22,maxRadius:23,cellDividers:24,sectionDividers:25,ref:0},null,[-1,-1])}}const ht=()=>{const o={portals:ee(new Map),addPortal(e,r){o.portals.update(t=>(t.has(r)?console.warn(`Portal with id ${r} already exists. Skipping portal creation.`):t.set(r,e),t))},removePortal(e){o.portals.update(r=>(r.has(e)?r.delete(e):console.warn(`Portal with id ${e} does not exist. Skipping portal removal.`),r))},getPortal(e){return oe(o.portals,r=>r.get(e))},hasPortal(e){return o.portals.current.has(e)}};return o},pt=()=>We("threlte-portals",ht());function fe(o){let e,r;return e=new Je({props:{onChildMount:o[8],onChildDestroy:o[9],$$slots:{default:[_t]},$$scope:{ctx:o}}}),{c(){T(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,n){O(e,t,n),r=!0},p(t,n){const i={};n&1024&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function _t(o){let e;const r=o[7].default,t=_e(r,o,o[10],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,i){t&&t.m(n,i),e=!0},p(n,i){t&&t.p&&(!e||i&1024)&&Ce(t,r,n,n[10],e?ke(r,n[10],i,null):be(n[10]),null)},i(n){e||(v(t,n),e=!0)},o(n){w(t,n),e=!1},d(n){t&&t.d(n)}}}function Ct(o){let e,r,t=o[1]&&fe(o);return{c(){t&&t.c(),e=$()},l(n){t&&t.l(n),e=$()},m(n,i){t&&t.m(n,i),X(n,e,i),r=!0},p(n,[i]){n[1]?t?(t.p(n,i),i&2&&v(t,1)):(t=fe(n),t.c(),v(t,1),t.m(e.parentNode,e)):t&&(Se(),w(t,1,1,()=>{t=null}),ve())},i(n){r||(v(t),r=!0)},o(n){w(t),r=!1},d(n){n&&Z(e),t&&t.d(n)}}}function bt(o,e,r){let t,n,i=P,c=()=>(i(),i=Ze(t,h=>r(6,n=h)),t),a;o.$$.on_destroy.push(()=>i());let{$$slots:l={},$$scope:d}=e,{id:g="default"}=e,{object:m=void 0}=e;const{getPortal:b}=pt(),C=B([]),k=B();j(o,k,h=>r(1,a=h)),Ve([C,k],([h,S])=>{if(S!==void 0){for(const z of h)S.children.includes(z)||S.add(z);return()=>{for(const z of h)S.children.includes(z)&&S.remove(z)}}});const y=h=>C.update(S=>(S.push(h),S)),G=h=>C.update(S=>(S.splice(S.indexOf(h),1),S));return o.$$set=h=>{"id"in h&&r(4,g=h.id),"object"in h&&r(5,m=h.object),"$$scope"in h&&r(10,d=h.$$scope)},o.$$.update=()=>{o.$$.dirty&16&&c(r(0,t=b(g))),o.$$.dirty&96&&k.set(m??n)},[t,a,C,k,g,m,n,l,y,G,d]}class kt extends se{constructor(e){super(),ae(this,e,bt,Ct,ie,{id:4,object:5})}}const St=()=>({ambientLight:{intensity:.2},camera:{position:[5,5,5]},directionalLight:{color:"#ff0000",position:[-2,2,-2]},grid:{cellColor:"#00ffff",infiniteGrid:!0,sectionColor:"#00ffff"},meta:{description:"Rolling a cube on a flat surface is more complex than it sounds",title:"Rolling a Cube"}}),xt=Object.freeze(Object.defineProperty({__proto__:null,load:St},Symbol.toStringTag,{value:"Module"})),vt=Math.PI/180;function de(o){return o*vt}function me(o){return Object.prototype.toString.call(o)==="[object Date]"}function ne(o,e){if(o===e||o!==o)return()=>o;const r=typeof o;if(r!==typeof e||Array.isArray(o)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(o)){const t=e.map((n,i)=>ne(o[i],n));return n=>t.map(i=>i(n))}if(r==="object"){if(!o||!e)throw new Error("Object cannot be null");if(me(o)&&me(e)){o=o.getTime(),e=e.getTime();const i=e-o;return c=>new Date(o+c*i)}const t=Object.keys(e),n={};return t.forEach(i=>{n[i]=ne(o[i],e[i])}),i=>{const c={};return t.forEach(a=>{c[a]=n[a](i)}),c}}if(r==="number"){const t=e-o;return n=>o+n*t}throw new Error(`Cannot interpolate ${r} values`)}function ge(o,e={}){const r=B(o);let t,n=o;function i(c,a){if(o==null)return r.set(o=c),Promise.resolve();n=c;let l=t,d=!1,{delay:g=0,duration:m=400,easing:b=Ie,interpolate:C=ne}=I(I({},e),a);if(m===0)return l&&(l.abort(),l=null),r.set(o=n),Promise.resolve();const k=$e()+g;let y;return t=et(G=>{if(G<k)return!0;d||(y=C(o,c),typeof m=="function"&&(m=m(o,c)),d=!0),l&&(l.abort(),l=null);const h=G-k;return h>m?(r.set(o=c),!1):(r.set(o=y(b(h/m))),!0)}),t.promise}return{set:i,update:(c,a)=>i(c(n,o),a),subscribe:r.subscribe}}const wt=o=>{const e=ee(!1);return(r,t,n,i)=>async c=>{if(!e.current){e.set(!0),Math.sign(r.current)===c&&(t.update(l=>l+c*o),r.update(l=>l*=-1));const a=Math.sign(r.current);await n.update(l=>l+a*90),t.update(l=>l-a*o),await n.set(0,{duration:0}),i.update(l=>l+a*.5*Math.PI),e.set(!1)}}},zt=(o=1)=>{const e=.5*o,r=ee(e),t=B(0),n=B(0),i=ge(0),c=oe(i,de),a=ee(e),l=B(0),d=B(0),g=ge(0),m=oe(g,de),b=wt(o),C=b(r,t,g,d),k=b(a,l,i,n);return{left(){C(-1)},right(){C(1)},up(){k(-1)},down(){k(1)},radiansX:W(c),radiansZ:W(m),rotationX:W(n),rotationZ:W(d),positionX:W(r),positionZ:W(a),groupPositionX:W(t),groupPositionZ:W(l)}};function Pt(o){let e,r;return e=new qe({}),{c(){T(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,n){O(e,t,n),r=!0},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function yt(o){let e,r;return e=new F.DirectionalLightHelper({props:{args:[o[26]]}}),{c(){T(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,n){O(e,t,n),r=!0},p(t,n){const i={};n&67108864&&(i.args=[t[26]]),e.$set(i)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Gt(o){let e,r;return e=new kt({props:{object:o[10],$$slots:{default:[yt]},$$scope:{ctx:o}}}),{c(){T(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,n){O(e,t,n),r=!0},p(t,n){const i={};n&201326592&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Tt(o){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function Dt(o){let e,r;return e=new F.Mesh({props:{"position.x":o[5],"position.y":o[9],"position.z":o[6],"rotation.x":-o[7],"rotation.z":o[8],$$slots:{default:[Ot]},$$scope:{ctx:o}}}),{c(){T(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,n){O(e,t,n),r=!0},p(t,n){const i={};n&32&&(i["position.x"]=t[5]),n&64&&(i["position.z"]=t[6]),n&128&&(i["rotation.x"]=-t[7]),n&256&&(i["rotation.z"]=t[8]),n&134217728&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Ot(o){let e,r,t,n;return e=new F.MeshStandardMaterial({props:{map:o[25]}}),t=new F.BoxGeometry({}),{c(){T(e.$$.fragment),r=q(),T(t.$$.fragment)},l(i){D(e.$$.fragment,i),r=U(i),D(t.$$.fragment,i)},m(i,c){O(e,i,c),X(i,r,c),O(t,i,c),n=!0},p:P,i(i){n||(v(e.$$.fragment,i),v(t.$$.fragment,i),n=!0)},o(i){w(e.$$.fragment,i),w(t.$$.fragment,i),n=!1},d(i){i&&Z(r),A(e,i),A(t,i)}}}function At(o){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function Ft(o){let e,r,t={ctx:o,current:null,token:null,hasCatch:!1,pending:At,then:Dt,catch:Tt,value:25,blocks:[,,,]};return tt(o[23],t),{c(){e=$(),t.block.c()},l(n){e=$(),t.block.l(n)},m(n,i){X(n,e,i),t.block.m(n,t.anchor=i),t.mount=()=>e.parentNode,t.anchor=e,r=!0},p(n,i){o=n,rt(t,o,i)},i(n){r||(v(t.block),r=!0)},o(n){for(let i=0;i<3;i+=1){const c=t.blocks[i];w(c)}r=!1},d(n){n&&Z(e),t.block.d(n),t.token=null,t=null}}}function Rt(o){let e,r,t,n,i,c,a,l,d,g,m,b,C;const k=[o[0].ambientLight];let y={};for(let s=0;s<k.length;s+=1)y=I(y,k[s]);r=new F.AmbientLight({props:y});const G=[o[0].grid];let h={};for(let s=0;s<G.length;s+=1)h=I(h,G[s]);n=new gt({props:h});const S=[{makeDefault:!0},o[0].camera];let z={$$slots:{default:[Pt]},$$scope:{ctx:o}};for(let s=0;s<S.length;s+=1)z=I(z,S[s]);c=new F.PerspectiveCamera({props:z});const R=[o[0].directionalLight];let L={$$slots:{default:[Gt,({ref:s})=>({26:s}),({ref:s})=>s?67108864:0]},$$scope:{ctx:o}};for(let s=0;s<R.length;s+=1)L=I(L,R[s]);return l=new F.DirectionalLight({props:L}),g=new F.Group({props:{"rotation.x":-o[1],"rotation.z":o[2],"position.x":o[3],"position.z":o[4],$$slots:{default:[Ft]},$$scope:{ctx:o}}}),{c(){e=q(),T(r.$$.fragment),t=q(),T(n.$$.fragment),i=q(),T(c.$$.fragment),a=q(),T(l.$$.fragment),d=q(),T(g.$$.fragment)},l(s){e=U(s),D(r.$$.fragment,s),t=U(s),D(n.$$.fragment,s),i=U(s),D(c.$$.fragment,s),a=U(s),D(l.$$.fragment,s),d=U(s),D(g.$$.fragment,s)},m(s,p){X(s,e,p),O(r,s,p),X(s,t,p),O(n,s,p),X(s,i,p),O(c,s,p),X(s,a,p),O(l,s,p),X(s,d,p),O(g,s,p),m=!0,b||(C=Be(document,"keydown",o[24]),b=!0)},p(s,[p]){const E=p&1?V(k,[J(s[0].ambientLight)]):{};r.$set(E);const x=p&1?V(G,[J(s[0].grid)]):{};n.$set(x);const N=p&1?V(S,[S[0],J(s[0].camera)]):{};p&134217728&&(N.$$scope={dirty:p,ctx:s}),c.$set(N);const M=p&1?V(R,[J(s[0].directionalLight)]):{};p&201326592&&(M.$$scope={dirty:p,ctx:s}),l.$set(M);const _={};p&2&&(_["rotation.x"]=-s[1]),p&4&&(_["rotation.z"]=s[2]),p&8&&(_["position.x"]=s[3]),p&16&&(_["position.z"]=s[4]),p&134218208&&(_.$$scope={dirty:p,ctx:s}),g.$set(_)},i(s){m||(v(r.$$.fragment,s),v(n.$$.fragment,s),v(c.$$.fragment,s),v(l.$$.fragment,s),v(g.$$.fragment,s),m=!0)},o(s){w(r.$$.fragment,s),w(n.$$.fragment,s),w(c.$$.fragment,s),w(l.$$.fragment,s),w(g.$$.fragment,s),m=!1},d(s){s&&(Z(e),Z(t),Z(i),Z(a),Z(d)),A(r,s),A(n,s),A(c,s),A(l,s),A(g,s),b=!1,C()}}}const he=1;function Lt(o,e,r){let t,n,i,c,a,l,d,g,{data:m}=e;const b=.5*he,{scene:C}=le(),{left:k,right:y,up:G,down:h,radiansX:S,radiansZ:z,rotationX:R,rotationZ:L,positionX:s,positionZ:p,groupPositionX:E,groupPositionZ:x}=zt(he);j(o,S,_=>r(1,t=_)),j(o,z,_=>r(2,n=_)),j(o,R,_=>r(7,d=_)),j(o,L,_=>r(8,g=_)),j(o,s,_=>r(5,a=_)),j(o,p,_=>r(6,l=_)),j(o,E,_=>r(3,i=_)),j(o,x,_=>r(4,c=_));const N=nt(`${Ye}/spiral.png`),M=({key:_})=>{switch(!0){case _==="ArrowUp":G();break;case _==="ArrowDown":h();break;case _==="ArrowLeft":k();break;case _==="ArrowRight":y();break}};return o.$$set=_=>{"data"in _&&r(0,m=_.data)},[m,t,n,i,c,a,l,d,g,b,C,k,y,G,h,S,z,R,L,s,p,E,x,N,M]}class Nt extends se{constructor(e){super(),ae(this,e,Lt,Rt,ie,{data:0})}}export{Nt as component,xt as universal};
