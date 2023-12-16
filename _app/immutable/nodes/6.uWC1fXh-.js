import{A as z,N as Fe,I as Re,O as V,P as je,s as re,J as U,p as me,Q as Ee,K as se,z as A,L as Me,r as ge,a as x,c as L,i as R,w as he,x as pe,y as _e,d as j,e as J,R as Xe,S as xe,T as Le}from"../chunks/scheduler.XqNPAMn-.js";import{g as Ce,t as w,c as be,a as S,S as oe,i as ne,f as Ze,b as v,d as y,m as P,e as G}from"../chunks/index.E9CJS0lF.js";import{u as ie,X as Ie,R as Be,T as O,p as N,E as Ne,c as K,w as We,Q as qe}from"../chunks/T.OEe8eHzI.js";import{w as E,d as ee,r as M}from"../chunks/index.BLYYf3Yj.js";import{u as Ue}from"../chunks/cache.TwZm2onm.js";import{g as He,a as Qe,f as Ve,b as Je,O as Ke}from"../chunks/vertex.vcw8kvH9.js";import{b as Ye}from"../chunks/paths.95fREOyF.js";const ke=typeof window<"u";let $e=ke?()=>window.performance.now():()=>Date.now(),Se=ke?o=>requestAnimationFrame(o):z;const W=new Set;function we(o){W.forEach(e=>{e.c(o)||(W.delete(e),e.f())}),W.size!==0&&Se(we)}function et(o){let e;return W.size===0&&Se(we),{promise:new Promise(r=>{W.add(e={c:o,f:r})}),abort(){W.delete(e)}}}function tt(o,e){const r=e.token={};function t(n,i,c,s){if(e.token!==r)return;e.resolved=s;let a=e.ctx;c!==void 0&&(a=a.slice(),a[c]=s);const d=n&&(e.current=n)(a);let g=!1;e.block&&(e.blocks?e.blocks.forEach((m,C)=>{C!==i&&m&&(Ce(),w(m,1,1,()=>{e.blocks[C]===m&&(e.blocks[C]=null)}),be())}):e.block.d(1),d.c(),S(d,1),d.m(e.mount(),e.anchor),g=!0),e.block=d,e.blocks&&(e.blocks[i]=d),g&&je()}if(Fe(o)){const n=Re();if(o.then(i=>{V(n),t(e.then,1,e.value,i),V(null)},i=>{if(V(n),t(e.catch,2,e.error,i),V(null),!e.hasCatch)throw i}),e.current!==e.pending)return t(e.pending,0),!0}else{if(e.current!==e.then)return t(e.then,1,e.value,o),!0;e.resolved=o}}function rt(o,e,r){const t=e.slice(),{resolved:n}=o;o.current===o.then&&(t[o.value]=n),o.current===o.catch&&(t[o.error]=n),o.block.p(t,r)}const $=o=>{const e=E(void 0),r=E(void 0);return o.then(t=>{e.set(t)}).catch(t=>{console.error("Error in asyncWritable:",t.message),r.set(t)}),Object.assign(Object.assign(o,e),{error:r,promise:o})};function ot(o,e){const{remember:r,clear:t}=Ue();let n;const i=()=>{const a=new o(...e?.args??[]);return e?.extend?.(a),a};return{load:(a,d)=>{const g=async m=>{if(n||(n=i()),"loadAsync"in n){const C=await n.loadAsync(m,d?.onProgress);return d?.transform?.(C)??C}else return new Promise((C,_)=>{n.load(m,l=>C(d?.transform?.(l)??l),l=>d?.onProgress?.(l),_)})};if(Array.isArray(a)){const m=a.map(_=>r(()=>g(_),[o,_]));return $(Promise.all(m))}else if(typeof a=="string"){const m=r(()=>g(a),[o,a]);return $(m)}else{const m=Object.values(a).map(_=>r(()=>g(_),[o,_]));return $(Promise.all(m).then(_=>Object.fromEntries(Object.entries(a).map(([l],h)=>[l,_[h]]))))}},clear:a=>{Array.isArray(a)?a.forEach(d=>{t([o,d])}):typeof a=="string"?t([o,a]):Object.entries(a).forEach(([d,g])=>{t([o,d,g])})},loader:n}}const nt=(o,e)=>{const r=ot(Ie,e),{renderer:t}=ie();return r.load(o,{...e,transform:n=>("colorSpace"in n?n.colorSpace=t.outputColorSpace:n.encoding=t.outputEncoding,n.needsUpdate=!0,e?.transform?.(n)??n)})},it=Number.parseInt(Be.replace("dev","")),st=`
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
`,lt={fragmentShader:at,vertexShader:st},ct=o=>({ref:o[0]&1}),ae=o=>({ref:o[0]});function ut(o){let e,r;return e=new O.PlaneGeometry({props:{args:typeof o[1]=="number"?[o[1],o[1]]:o[1]}}),{c(){v(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){P(e,t,n),r=!0},p(t,n){const i={};n[0]&2&&(i.args=typeof t[1]=="number"?[t[1],t[1]]:t[1]),e.$set(i)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){G(e,t)}}}function ft(o){let e,r,t;e=new O.ShaderMaterial({props:{fragmentShader:o[4],vertexShader:o[5],uniforms:o[2],transparent:!0,side:Ne,defines:{USE_COLORSPACE_FRAGMENT:it>=154?"":void 0}}});const n=o[26].default,i=ge(n,o,o[29],ae),c=i||ut(o);return{c(){v(e.$$.fragment),r=x(),c&&c.c()},l(s){y(e.$$.fragment,s),r=L(s),c&&c.l(s)},m(s,a){P(e,s,a),R(s,r,a),c&&c.m(s,a),t=!0},p(s,a){const d={};a[0]&4&&(d.uniforms=s[2]),e.$set(d),i?i.p&&(!t||a[0]&536870913)&&he(i,n,s,s[29],t?_e(n,s[29],a,ct):pe(s[29]),ae):c&&c.p&&(!t||a[0]&2)&&c.p(s,t?a:[-1,-1])},i(s){t||(S(e.$$.fragment,s),S(c,s),t=!0)},o(s){w(e.$$.fragment,s),w(c,s),t=!1},d(s){s&&j(r),G(e,s),c&&c.d(s)}}}function dt(o){let e,r,t;const n=[{frustumCulled:!1},o[7]];function i(s){o[28](s)}let c={$$slots:{default:[ft,({ref:s})=>({0:s}),({ref:s})=>[s?1:0]]},$$scope:{ctx:o}};for(let s=0;s<n.length;s+=1)c=U(c,n[s]);return o[0]!==void 0&&(c.ref=o[0]),e=new O.Mesh({props:c}),o[27](e),me.push(()=>Ze(e,"ref",i)),{c(){v(e.$$.fragment)},l(s){y(e.$$.fragment,s)},m(s,a){P(e,s,a),t=!0},p(s,a){const d=a[0]&128?He(n,[n[0],Qe(s[7])]):{};a[0]&536870919&&(d.$$scope={dirty:a,ctx:s}),!r&&a[0]&1&&(r=!0,d.ref=s[0],Ee(()=>r=!1)),e.$set(d)},i(s){t||(S(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){o[27](null),G(e,s)}}}function mt(o,e,r){const t=["cellColor","sectionColor","cellSize","backgroundColor","backgroundOpacity","sectionSize","plane","gridSize","followCamera","infiniteGrid","fadeDistance","fadeStrength","cellThickness","sectionThickness","type","axis","maxRadius","cellDividers","sectionDividers","ref"];let n=se(e,t),i,{$$slots:c={},$$scope:s}=e,{cellColor:a="#000000"}=e,{sectionColor:d="#0000ee"}=e,{cellSize:g=1}=e,{backgroundColor:m="#dadada"}=e,{backgroundOpacity:C=0}=e,{sectionSize:_=10}=e,{plane:l="xz"}=e,{gridSize:h=[20,20]}=e,{followCamera:T=!1}=e,{infiniteGrid:p=!1}=e,{fadeDistance:b=100}=e,{fadeStrength:D=1}=e,{cellThickness:Z=1}=e,{sectionThickness:I=2}=e,{type:F="grid"}=e,{axis:B="x"}=e,{maxRadius:X=0}=e,{cellDividers:q=6}=e,{sectionDividers:H=2}=e,{ref:k}=e;const{fragmentShader:ze,vertexShader:ve}=lt,{invalidate:ye}=ie();let f={uSize1:{value:g},uSize2:{value:_},uColor1:{value:new N(a)},uColor2:{value:new N(d)},uBackgroundColor:{value:new N("#aaaaaa")},uBackgroundOpacity:{value:.7},uFadeDistance:{value:b},uFadeStrength:{value:D},uThickness1:{value:1},uThickness2:{value:1},uInfiniteGrid:{value:p?1:0},uFollowCamera:{value:0},uCoord0:{value:0},uCoord1:{value:2},uCoord2:{value:1},uGridType:{value:0},uLineGridCoord:{value:0},uCircleGridMaxRadius:{value:9},uPolarCellDividers:{value:6},uPolarSectionDividers:{value:2}};const Q={x:0,y:1,z:2},Pe={xz:"xzy",xy:"xyz",zy:"zyx"},Y=Ve();A(o,Y,u=>r(3,i=u));function Ge(u){me[u?"unshift":"push"](()=>{i=u,Y.set(i)})}function Te(u){k=u,r(0,k)}return o.$$set=u=>{e=U(U({},e),Me(u)),r(7,n=se(e,t)),"cellColor"in u&&r(8,a=u.cellColor),"sectionColor"in u&&r(9,d=u.sectionColor),"cellSize"in u&&r(10,g=u.cellSize),"backgroundColor"in u&&r(11,m=u.backgroundColor),"backgroundOpacity"in u&&r(12,C=u.backgroundOpacity),"sectionSize"in u&&r(13,_=u.sectionSize),"plane"in u&&r(14,l=u.plane),"gridSize"in u&&r(1,h=u.gridSize),"followCamera"in u&&r(15,T=u.followCamera),"infiniteGrid"in u&&r(16,p=u.infiniteGrid),"fadeDistance"in u&&r(17,b=u.fadeDistance),"fadeStrength"in u&&r(18,D=u.fadeStrength),"cellThickness"in u&&r(19,Z=u.cellThickness),"sectionThickness"in u&&r(20,I=u.sectionThickness),"type"in u&&r(21,F=u.type),"axis"in u&&r(22,B=u.axis),"maxRadius"in u&&r(23,X=u.maxRadius),"cellDividers"in u&&r(24,q=u.cellDividers),"sectionDividers"in u&&r(25,H=u.sectionDividers),"ref"in u&&r(0,k=u.ref),"$$scope"in u&&r(29,s=u.$$scope)},o.$$.update=()=>{if(o.$$.dirty[0]&67108608){const u=Pe[l],De=u.charAt(0),Oe=u.charAt(1),Ae=u.charAt(2);r(2,f.uCoord0.value=Q[De],f),r(2,f.uCoord1.value=Q[Oe],f),r(2,f.uCoord2.value=Q[Ae],f),r(2,f.uSize1={value:g},f),r(2,f.uSize2={value:_},f),r(2,f.uColor1={value:new N(a)},f),r(2,f.uColor2={value:new N(d)},f),r(2,f.uBackgroundColor={value:new N(m)},f),r(2,f.uBackgroundOpacity={value:C},f),r(2,f.uFadeDistance={value:b},f),r(2,f.uFadeStrength={value:D},f),r(2,f.uThickness1={value:Z},f),r(2,f.uThickness2={value:I},f),r(2,f.uFollowCamera={value:T?1:0},f),r(2,f.uInfiniteGrid={value:p?1:0},f),F=="grid"&&r(2,f.uGridType={value:0},f),F==="lines"&&(r(2,f.uGridType={value:1},f),r(2,f.uLineGridCoord={value:Q[B]},f)),F==="circular"&&(r(2,f.uGridType={value:2},f),r(2,f.uCircleGridMaxRadius={value:X||0},f)),F==="polar"&&(r(2,f.uGridType={value:3},f),r(2,f.uCircleGridMaxRadius={value:X||0},f),r(2,f.uPolarCellDividers={value:q||0},f),r(2,f.uPolarSectionDividers={value:H||0},f)),ye()}},[k,h,f,i,ze,ve,Y,n,a,d,g,m,C,_,l,T,p,b,D,Z,I,F,B,X,q,H,c,Ge,Te,s]}class gt extends oe{constructor(e){super(),ne(this,e,mt,dt,re,{cellColor:8,sectionColor:9,cellSize:10,backgroundColor:11,backgroundOpacity:12,sectionSize:13,plane:14,gridSize:1,followCamera:15,infiniteGrid:16,fadeDistance:17,fadeStrength:18,cellThickness:19,sectionThickness:20,type:21,axis:22,maxRadius:23,cellDividers:24,sectionDividers:25,ref:0},null,[-1,-1])}}const ht=()=>{const o={portals:K(new Map),addPortal(e,r){o.portals.update(t=>(t.has(r)?console.warn(`Portal with id ${r} already exists. Skipping portal creation.`):t.set(r,e),t))},removePortal(e){o.portals.update(r=>(r.has(e)?r.delete(e):console.warn(`Portal with id ${e} does not exist. Skipping portal removal.`),r))},getPortal(e){return ee(o.portals,r=>r.get(e))},hasPortal(e){return o.portals.current.has(e)}};return o},pt=()=>Je("threlte-portals",ht());function le(o){let e,r;return e=new qe({props:{onChildMount:o[8],onChildDestroy:o[9],$$slots:{default:[_t]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){P(e,t,n),r=!0},p(t,n){const i={};n&1024&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){G(e,t)}}}function _t(o){let e;const r=o[7].default,t=ge(r,o,o[10],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,i){t&&t.m(n,i),e=!0},p(n,i){t&&t.p&&(!e||i&1024)&&he(t,r,n,n[10],e?_e(r,n[10],i,null):pe(n[10]),null)},i(n){e||(S(t,n),e=!0)},o(n){w(t,n),e=!1},d(n){t&&t.d(n)}}}function Ct(o){let e,r,t=o[1]&&le(o);return{c(){t&&t.c(),e=J()},l(n){t&&t.l(n),e=J()},m(n,i){t&&t.m(n,i),R(n,e,i),r=!0},p(n,[i]){n[1]?t?(t.p(n,i),i&2&&S(t,1)):(t=le(n),t.c(),S(t,1),t.m(e.parentNode,e)):t&&(Ce(),w(t,1,1,()=>{t=null}),be())},i(n){r||(S(t),r=!0)},o(n){w(t),r=!1},d(n){n&&j(e),t&&t.d(n)}}}function bt(o,e,r){let t,n,i=z,c=()=>(i(),i=Xe(t,p=>r(6,n=p)),t),s;o.$$.on_destroy.push(()=>i());let{$$slots:a={},$$scope:d}=e,{id:g="default"}=e,{object:m=void 0}=e;const{getPortal:C}=pt(),_=E([]),l=E();A(o,l,p=>r(1,s=p)),We([_,l],([p,b])=>{if(b!==void 0){for(const D of p)b.children.includes(D)||b.add(D);return()=>{for(const D of p)b.children.includes(D)&&b.remove(D)}}});const h=p=>_.update(b=>(b.push(p),b)),T=p=>_.update(b=>(b.splice(b.indexOf(p),1),b));return o.$$set=p=>{"id"in p&&r(4,g=p.id),"object"in p&&r(5,m=p.object),"$$scope"in p&&r(10,d=p.$$scope)},o.$$.update=()=>{o.$$.dirty&16&&c(r(0,t=C(g))),o.$$.dirty&96&&l.set(m??n)},[t,s,_,l,g,m,n,a,h,T,d]}class kt extends oe{constructor(e){super(),ne(this,e,bt,Ct,re,{id:4,object:5})}}const St=()=>({description:"Rolling a cube on a flat surface is more complex than it sounds",title:"Rolling a Cube"}),Bt=Object.freeze(Object.defineProperty({__proto__:null,load:St},Symbol.toStringTag,{value:"Module"})),wt=Math.PI/180;function ce(o){return o*wt}function ue(o){return Object.prototype.toString.call(o)==="[object Date]"}function te(o,e){if(o===e||o!==o)return()=>o;const r=typeof o;if(r!==typeof e||Array.isArray(o)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(o)){const t=e.map((n,i)=>te(o[i],n));return n=>t.map(i=>i(n))}if(r==="object"){if(!o||!e)throw new Error("Object cannot be null");if(ue(o)&&ue(e)){o=o.getTime(),e=e.getTime();const i=e-o;return c=>new Date(o+c*i)}const t=Object.keys(e),n={};return t.forEach(i=>{n[i]=te(o[i],e[i])}),i=>{const c={};return t.forEach(s=>{c[s]=n[s](i)}),c}}if(r==="number"){const t=e-o;return n=>o+n*t}throw new Error(`Cannot interpolate ${r} values`)}function fe(o,e={}){const r=E(o);let t,n=o;function i(c,s){if(o==null)return r.set(o=c),Promise.resolve();n=c;let a=t,d=!1,{delay:g=0,duration:m=400,easing:C=xe,interpolate:_=te}=U(U({},e),s);if(m===0)return a&&(a.abort(),a=null),r.set(o=n),Promise.resolve();const l=$e()+g;let h;return t=et(T=>{if(T<l)return!0;d||(h=_(o,c),typeof m=="function"&&(m=m(o,c)),d=!0),a&&(a.abort(),a=null);const p=T-l;return p>m?(r.set(o=c),!1):(r.set(o=h(C(p/m))),!0)}),t.promise}return{set:i,update:(c,s)=>i(c(n,o),s),subscribe:r.subscribe}}const zt=o=>{const e=K(!1);return(r,t,n,i)=>async c=>{if(!e.current){e.set(!0),Math.sign(r.current)===c&&(t.update(a=>a+c*o),r.update(a=>a*=-1));const s=Math.sign(r.current);await n.update(a=>a+s*90),t.update(a=>a-s*o),await n.set(0,{duration:0}),i.update(a=>a+s*.5*Math.PI),e.set(!1)}}},vt=(o=1)=>{const e=.5*o,r=K(e),t=E(0),n=E(0),i=fe(0),c=ee(i,ce),s=K(e),a=E(0),d=E(0),g=fe(0),m=ee(g,ce),C=zt(o),_=C(r,t,g,d),l=C(s,a,i,n);return{left(){_(-1)},right(){_(1)},up(){l(-1)},down(){l(1)},radiansX:M(c),radiansZ:M(m),rotationX:M(n),rotationZ:M(d),positionX:M(r),positionZ:M(s),groupPositionX:M(t),groupPositionZ:M(a)}};function yt(o){let e,r;return e=new Ke({}),{c(){v(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){P(e,t,n),r=!0},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){G(e,t)}}}function Pt(o){let e,r;return e=new O.DirectionalLightHelper({props:{args:[o[25]]}}),{c(){v(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){P(e,t,n),r=!0},p(t,n){const i={};n&33554432&&(i.args=[t[25]]),e.$set(i)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){G(e,t)}}}function Gt(o){let e,r;return e=new kt({props:{object:o[9],$$slots:{default:[Pt]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){P(e,t,n),r=!0},p(t,n){const i={};n&100663296&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){G(e,t)}}}function Tt(o){return{c:z,l:z,m:z,p:z,i:z,o:z,d:z}}function Dt(o){let e,r;return e=new O.Mesh({props:{"position.x":o[4],"position.y":o[8],"position.z":o[5],"rotation.x":-o[6],"rotation.z":o[7],$$slots:{default:[Ot]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){P(e,t,n),r=!0},p(t,n){const i={};n&16&&(i["position.x"]=t[4]),n&32&&(i["position.z"]=t[5]),n&64&&(i["rotation.x"]=-t[6]),n&128&&(i["rotation.z"]=t[7]),n&67108864&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){G(e,t)}}}function Ot(o){let e,r,t,n;return e=new O.MeshStandardMaterial({props:{map:o[24]}}),t=new O.BoxGeometry({}),{c(){v(e.$$.fragment),r=x(),v(t.$$.fragment)},l(i){y(e.$$.fragment,i),r=L(i),y(t.$$.fragment,i)},m(i,c){P(e,i,c),R(i,r,c),P(t,i,c),n=!0},p:z,i(i){n||(S(e.$$.fragment,i),S(t.$$.fragment,i),n=!0)},o(i){w(e.$$.fragment,i),w(t.$$.fragment,i),n=!1},d(i){i&&j(r),G(e,i),G(t,i)}}}function At(o){return{c:z,l:z,m:z,p:z,i:z,o:z,d:z}}function Ft(o){let e,r,t={ctx:o,current:null,token:null,hasCatch:!1,pending:At,then:Dt,catch:Tt,value:24,blocks:[,,,]};return tt(o[22],t),{c(){e=J(),t.block.c()},l(n){e=J(),t.block.l(n)},m(n,i){R(n,e,i),t.block.m(n,t.anchor=i),t.mount=()=>e.parentNode,t.anchor=e,r=!0},p(n,i){o=n,rt(t,o,i)},i(n){r||(S(t.block),r=!0)},o(n){for(let i=0;i<3;i+=1){const c=t.blocks[i];w(c)}r=!1},d(n){n&&j(e),t.block.d(n),t.token=null,t=null}}}function Rt(o){let e,r,t,n,i,c,s,a,d,g,m,C,_;return r=new O.AmbientLight({}),n=new gt({props:{sectionColor:"#00ffff",infiniteGrid:!0,cellColor:"#00ffff"}}),c=new O.PerspectiveCamera({props:{makeDefault:!0,"position.x":5,"position.y":5,"position.z":5,$$slots:{default:[yt]},$$scope:{ctx:o}}}),a=new O.DirectionalLight({props:{color:"#ff0000","position.x":-2,"position.y":2,"position.z":-2,$$slots:{default:[Gt,({ref:l})=>({25:l}),({ref:l})=>l?33554432:0]},$$scope:{ctx:o}}}),g=new O.Group({props:{"rotation.x":-o[0],"rotation.z":o[1],"position.x":o[2],"position.z":o[3],$$slots:{default:[Ft]},$$scope:{ctx:o}}}),{c(){e=x(),v(r.$$.fragment),t=x(),v(n.$$.fragment),i=x(),v(c.$$.fragment),s=x(),v(a.$$.fragment),d=x(),v(g.$$.fragment)},l(l){e=L(l),y(r.$$.fragment,l),t=L(l),y(n.$$.fragment,l),i=L(l),y(c.$$.fragment,l),s=L(l),y(a.$$.fragment,l),d=L(l),y(g.$$.fragment,l)},m(l,h){R(l,e,h),P(r,l,h),R(l,t,h),P(n,l,h),R(l,i,h),P(c,l,h),R(l,s,h),P(a,l,h),R(l,d,h),P(g,l,h),m=!0,C||(_=Le(document,"keydown",o[23]),C=!0)},p(l,[h]){const T={};h&67108864&&(T.$$scope={dirty:h,ctx:l}),c.$set(T);const p={};h&100663296&&(p.$$scope={dirty:h,ctx:l}),a.$set(p);const b={};h&1&&(b["rotation.x"]=-l[0]),h&2&&(b["rotation.z"]=l[1]),h&4&&(b["position.x"]=l[2]),h&8&&(b["position.z"]=l[3]),h&67109104&&(b.$$scope={dirty:h,ctx:l}),g.$set(b)},i(l){m||(S(r.$$.fragment,l),S(n.$$.fragment,l),S(c.$$.fragment,l),S(a.$$.fragment,l),S(g.$$.fragment,l),m=!0)},o(l){w(r.$$.fragment,l),w(n.$$.fragment,l),w(c.$$.fragment,l),w(a.$$.fragment,l),w(g.$$.fragment,l),m=!1},d(l){l&&(j(e),j(t),j(i),j(s),j(d)),G(r,l),G(n,l),G(c,l),G(a,l),G(g,l),C=!1,_()}}}const de=1;function jt(o,e,r){let t,n,i,c,s,a,d,g;const m=.5*de,{scene:C}=ie(),{left:_,right:l,up:h,down:T,radiansX:p,radiansZ:b,rotationX:D,rotationZ:Z,positionX:I,positionZ:F,groupPositionX:B,groupPositionZ:X}=vt(de);A(o,p,k=>r(0,t=k)),A(o,b,k=>r(1,n=k)),A(o,D,k=>r(6,d=k)),A(o,Z,k=>r(7,g=k)),A(o,I,k=>r(4,s=k)),A(o,F,k=>r(5,a=k)),A(o,B,k=>r(2,i=k)),A(o,X,k=>r(3,c=k));const q=nt(`${Ye}/spiral.png`);return[t,n,i,c,s,a,d,g,m,C,_,l,h,T,p,b,D,Z,I,F,B,X,q,({key:k})=>{switch(!0){case k==="ArrowUp":h();break;case k==="ArrowDown":T();break;case k==="ArrowLeft":_();break;case k==="ArrowRight":l();break}}]}class Nt extends oe{constructor(e){super(),ne(this,e,jt,Rt,re,{})}}export{Nt as component,Bt as universal};
