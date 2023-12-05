import{A as S,s as ee,J as H,p as ce,N as De,K as re,z as F,L as Te,r as fe,a as j,c as E,i as A,w as de,x as me,y as ge,d as R,e as J,O as Fe,P as Oe}from"../chunks/scheduler.7191415a.js";import{u as Ae,h as Re,a as Me}from"../chunks/useTexture.c98558a9.js";import{S as te,i as oe,f as Xe,b as z,d as P,m as w,a as C,t as k,e as v,g as Ze,c as je}from"../chunks/index.e86e6043.js";import{R as Ee,T,u as he,q as B,G as Le,c as K,X as Ie}from"../chunks/T.aea67da5.js";import{g as xe,a as Be,f as Ne,b as qe,O as We}from"../chunks/vertex.a03aba6f.js";import{d as Y,w as W,r as M}from"../chunks/index.fe8703f5.js";import{b as He}from"../chunks/paths.e02c8203.js";const pe=typeof window<"u";let Ue=pe?()=>window.performance.now():()=>Date.now(),_e=pe?r=>requestAnimationFrame(r):S;const N=new Set;function Ce(r){N.forEach(t=>{t.c(r)||(N.delete(t),t.f())}),N.size!==0&&_e(Ce)}function Ve(r){let t;return N.size===0&&_e(Ce),{promise:new Promise(o=>{N.add(t={c:r,f:o})}),abort(){N.delete(t)}}}const Je=Number.parseInt(Ee.replace("dev","")),Ke=`
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
`,Qe=`
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
`,Ye={fragmentShader:Qe,vertexShader:Ke},$e=r=>({ref:r[0]&1}),ie=r=>({ref:r[0]});function et(r){let t,o;return t=new T.PlaneGeometry({props:{args:typeof r[1]=="number"?[r[1],r[1]]:r[1]}}),{c(){z(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,i){w(t,e,i),o=!0},p(e,i){const n={};i[0]&2&&(n.args=typeof e[1]=="number"?[e[1],e[1]]:e[1]),t.$set(n)},i(e){o||(C(t.$$.fragment,e),o=!0)},o(e){k(t.$$.fragment,e),o=!1},d(e){v(t,e)}}}function tt(r){let t,o,e;t=new T.ShaderMaterial({props:{fragmentShader:r[4],vertexShader:r[5],uniforms:r[2],transparent:!0,side:Le,defines:{USE_COLORSPACE_FRAGMENT:Je>=154?"":void 0}}});const i=r[26].default,n=fe(i,r,r[29],ie),l=n||et(r);return{c(){z(t.$$.fragment),o=j(),l&&l.c()},l(a){P(t.$$.fragment,a),o=E(a),l&&l.l(a)},m(a,u){w(t,a,u),A(a,o,u),l&&l.m(a,u),e=!0},p(a,u){const g={};u[0]&4&&(g.uniforms=a[2]),t.$set(g),n?n.p&&(!e||u[0]&536870913)&&de(n,i,a,a[29],e?ge(i,a[29],u,$e):me(a[29]),ie):l&&l.p&&(!e||u[0]&2)&&l.p(a,e?u:[-1,-1])},i(a){e||(C(t.$$.fragment,a),C(l,a),e=!0)},o(a){k(t.$$.fragment,a),k(l,a),e=!1},d(a){a&&R(o),v(t,a),l&&l.d(a)}}}function ot(r){let t,o,e;const i=[{frustumCulled:!1},r[7]];function n(a){r[28](a)}let l={$$slots:{default:[tt,({ref:a})=>({0:a}),({ref:a})=>[a?1:0]]},$$scope:{ctx:r}};for(let a=0;a<i.length;a+=1)l=H(l,i[a]);return r[0]!==void 0&&(l.ref=r[0]),t=new T.Mesh({props:l}),r[27](t),ce.push(()=>Xe(t,"ref",n)),{c(){z(t.$$.fragment)},l(a){P(t.$$.fragment,a)},m(a,u){w(t,a,u),e=!0},p(a,u){const g=u[0]&128?xe(i,[i[0],Be(a[7])]):{};u[0]&536870919&&(g.$$scope={dirty:u,ctx:a}),!o&&u[0]&1&&(o=!0,g.ref=a[0],De(()=>o=!1)),t.$set(g)},i(a){e||(C(t.$$.fragment,a),e=!0)},o(a){k(t.$$.fragment,a),e=!1},d(a){r[27](null),v(t,a)}}}function rt(r,t,o){const e=["cellColor","sectionColor","cellSize","backgroundColor","backgroundOpacity","sectionSize","plane","gridSize","followCamera","infiniteGrid","fadeDistance","fadeStrength","cellThickness","sectionThickness","type","axis","maxRadius","cellDividers","sectionDividers","ref"];let i=re(t,e),n,{$$slots:l={},$$scope:a}=t,{cellColor:u="#000000"}=t,{sectionColor:g="#0000ee"}=t,{cellSize:p=1}=t,{backgroundColor:_="#dadada"}=t,{backgroundOpacity:b=0}=t,{sectionSize:m=10}=t,{plane:s="xz"}=t,{gridSize:d=[20,20]}=t,{followCamera:D=!1}=t,{infiniteGrid:y=!1}=t,{fadeDistance:G=100}=t,{fadeStrength:X=1}=t,{cellThickness:L=1}=t,{sectionThickness:I=2}=t,{type:O="grid"}=t,{axis:x="x"}=t,{maxRadius:Z=0}=t,{cellDividers:q=6}=t,{sectionDividers:U=2}=t,{ref:h}=t;const{fragmentShader:ke,vertexShader:be}=Ye,{invalidate:Se}=he();let f={uSize1:{value:p},uSize2:{value:m},uColor1:{value:new B(u)},uColor2:{value:new B(g)},uBackgroundColor:{value:new B("#aaaaaa")},uBackgroundOpacity:{value:.7},uFadeDistance:{value:G},uFadeStrength:{value:X},uThickness1:{value:1},uThickness2:{value:1},uInfiniteGrid:{value:y?1:0},uFollowCamera:{value:0},uCoord0:{value:0},uCoord1:{value:2},uCoord2:{value:1},uGridType:{value:0},uLineGridCoord:{value:0},uCircleGridMaxRadius:{value:9},uPolarCellDividers:{value:6},uPolarSectionDividers:{value:2}};const V={x:0,y:1,z:2},ze={xz:"xzy",xy:"xyz",zy:"zyx"},Q=Ne();F(r,Q,c=>o(3,n=c));function Pe(c){ce[c?"unshift":"push"](()=>{n=c,Q.set(n)})}function we(c){h=c,o(0,h)}return r.$$set=c=>{t=H(H({},t),Te(c)),o(7,i=re(t,e)),"cellColor"in c&&o(8,u=c.cellColor),"sectionColor"in c&&o(9,g=c.sectionColor),"cellSize"in c&&o(10,p=c.cellSize),"backgroundColor"in c&&o(11,_=c.backgroundColor),"backgroundOpacity"in c&&o(12,b=c.backgroundOpacity),"sectionSize"in c&&o(13,m=c.sectionSize),"plane"in c&&o(14,s=c.plane),"gridSize"in c&&o(1,d=c.gridSize),"followCamera"in c&&o(15,D=c.followCamera),"infiniteGrid"in c&&o(16,y=c.infiniteGrid),"fadeDistance"in c&&o(17,G=c.fadeDistance),"fadeStrength"in c&&o(18,X=c.fadeStrength),"cellThickness"in c&&o(19,L=c.cellThickness),"sectionThickness"in c&&o(20,I=c.sectionThickness),"type"in c&&o(21,O=c.type),"axis"in c&&o(22,x=c.axis),"maxRadius"in c&&o(23,Z=c.maxRadius),"cellDividers"in c&&o(24,q=c.cellDividers),"sectionDividers"in c&&o(25,U=c.sectionDividers),"ref"in c&&o(0,h=c.ref),"$$scope"in c&&o(29,a=c.$$scope)},r.$$.update=()=>{if(r.$$.dirty[0]&67108608){const c=ze[s],ve=c.charAt(0),Ge=c.charAt(1),ye=c.charAt(2);o(2,f.uCoord0.value=V[ve],f),o(2,f.uCoord1.value=V[Ge],f),o(2,f.uCoord2.value=V[ye],f),o(2,f.uSize1={value:p},f),o(2,f.uSize2={value:m},f),o(2,f.uColor1={value:new B(u)},f),o(2,f.uColor2={value:new B(g)},f),o(2,f.uBackgroundColor={value:new B(_)},f),o(2,f.uBackgroundOpacity={value:b},f),o(2,f.uFadeDistance={value:G},f),o(2,f.uFadeStrength={value:X},f),o(2,f.uThickness1={value:L},f),o(2,f.uThickness2={value:I},f),o(2,f.uFollowCamera={value:D?1:0},f),o(2,f.uInfiniteGrid={value:y?1:0},f),O=="grid"&&o(2,f.uGridType={value:0},f),O==="lines"&&(o(2,f.uGridType={value:1},f),o(2,f.uLineGridCoord={value:V[x]},f)),O==="circular"&&(o(2,f.uGridType={value:2},f),o(2,f.uCircleGridMaxRadius={value:Z||0},f)),O==="polar"&&(o(2,f.uGridType={value:3},f),o(2,f.uCircleGridMaxRadius={value:Z||0},f),o(2,f.uPolarCellDividers={value:q||0},f),o(2,f.uPolarSectionDividers={value:U||0},f)),Se()}},[h,d,f,n,ke,be,Q,i,u,g,p,_,b,m,s,D,y,G,X,L,I,O,x,Z,q,U,l,Pe,we,a]}class it extends te{constructor(t){super(),oe(this,t,rt,ot,ee,{cellColor:8,sectionColor:9,cellSize:10,backgroundColor:11,backgroundOpacity:12,sectionSize:13,plane:14,gridSize:1,followCamera:15,infiniteGrid:16,fadeDistance:17,fadeStrength:18,cellThickness:19,sectionThickness:20,type:21,axis:22,maxRadius:23,cellDividers:24,sectionDividers:25,ref:0},null,[-1,-1])}}const nt=()=>{const r={portals:K(new Map),addPortal(t,o){r.portals.update(e=>(e.has(o)?console.warn(`Portal with id ${o} already exists. Skipping portal creation.`):e.set(o,t),e))},removePortal(t){r.portals.update(o=>(o.has(t)?o.delete(t):console.warn(`Portal with id ${t} does not exist. Skipping portal removal.`),o))},getPortal(t){return Y(r.portals,o=>o.get(t))},hasPortal(t){return r.portals.current.has(t)}};return r},at=()=>qe("threlte-portals",nt());function ne(r){let t,o;return t=new Ie({props:{onChildMount:r[6],onChildDestroy:r[7],$$slots:{default:[st]},$$scope:{ctx:r}}}),{c(){z(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,i){w(t,e,i),o=!0},p(e,i){const n={};i&1&&(n.onChildMount=e[6]),i&1&&(n.onChildDestroy=e[7]),i&256&&(n.$$scope={dirty:i,ctx:e}),t.$set(n)},i(e){o||(C(t.$$.fragment,e),o=!0)},o(e){k(t.$$.fragment,e),o=!1},d(e){v(t,e)}}}function st(r){let t;const o=r[5].default,e=fe(o,r,r[8],null);return{c(){e&&e.c()},l(i){e&&e.l(i)},m(i,n){e&&e.m(i,n),t=!0},p(i,n){e&&e.p&&(!t||n&256)&&de(e,o,i,i[8],t?ge(o,i[8],n,null):me(i[8]),null)},i(i){t||(C(e,i),t=!0)},o(i){k(e,i),t=!1},d(i){e&&e.d(i)}}}function lt(r){let t,o,e=r[0]&&ne(r);return{c(){e&&e.c(),t=J()},l(i){e&&e.l(i),t=J()},m(i,n){e&&e.m(i,n),A(i,t,n),o=!0},p(i,[n]){i[0]?e?(e.p(i,n),n&1&&C(e,1)):(e=ne(i),e.c(),C(e,1),e.m(t.parentNode,t)):e&&(Ze(),k(e,1,1,()=>{e=null}),je())},i(i){o||(C(e),o=!0)},o(i){k(e),o=!1},d(i){i&&R(t),e&&e.d(i)}}}function ut(r,t,o){let e,i,{$$slots:n={},$$scope:l}=t,{id:a="default"}=t,{object:u=void 0}=t;const{getPortal:g}=at(),p=g(a);F(r,p,m=>o(4,i=m));const _=m=>{e==null||e.add(m)},b=m=>{e==null||e.remove(m)};return r.$$set=m=>{"id"in m&&o(2,a=m.id),"object"in m&&o(3,u=m.object),"$$scope"in m&&o(8,l=m.$$scope)},r.$$.update=()=>{r.$$.dirty&24&&o(0,e=u??i)},[e,p,a,u,i,n,_,b,l]}class ct extends te{constructor(t){super(),oe(this,t,ut,lt,ee,{id:2,object:3})}}const ft=()=>({description:"Rolling a cube on a flat surface is more complex than it sounds",title:"Rolling a Cube"}),At=Object.freeze(Object.defineProperty({__proto__:null,load:ft},Symbol.toStringTag,{value:"Module"})),dt=Math.PI/180;function ae(r){return r*dt}function se(r){return Object.prototype.toString.call(r)==="[object Date]"}function $(r,t){if(r===t||r!==r)return()=>r;const o=typeof r;if(o!==typeof t||Array.isArray(r)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(r)){const e=t.map((i,n)=>$(r[n],i));return i=>e.map(n=>n(i))}if(o==="object"){if(!r||!t)throw new Error("Object cannot be null");if(se(r)&&se(t)){r=r.getTime(),t=t.getTime();const n=t-r;return l=>new Date(r+l*n)}const e=Object.keys(t),i={};return e.forEach(n=>{i[n]=$(r[n],t[n])}),n=>{const l={};return e.forEach(a=>{l[a]=i[a](n)}),l}}if(o==="number"){const e=t-r;return i=>r+i*e}throw new Error(`Cannot interpolate ${o} values`)}function le(r,t={}){const o=W(r);let e,i=r;function n(l,a){if(r==null)return o.set(r=l),Promise.resolve();i=l;let u=e,g=!1,{delay:p=0,duration:_=400,easing:b=Fe,interpolate:m=$}=H(H({},t),a);if(_===0)return u&&(u.abort(),u=null),o.set(r=i),Promise.resolve();const s=Ue()+p;let d;return e=Ve(D=>{if(D<s)return!0;g||(d=m(r,l),typeof _=="function"&&(_=_(r,l)),g=!0),u&&(u.abort(),u=null);const y=D-s;return y>_?(o.set(r=l),!1):(o.set(r=d(b(y/_))),!0)}),e.promise}return{set:n,update:(l,a)=>n(l(i,r),a),subscribe:o.subscribe}}const mt=r=>{const t=K(!1);return(o,e,i,n)=>async l=>{if(!t.current){t.set(!0),Math.sign(o.current)===l&&(e.update(u=>u+l*r),o.update(u=>u*=-1));const a=Math.sign(o.current);await i.update(u=>u+a*90),e.update(u=>u-a*r),await i.set(0,{duration:0}),n.update(u=>u+a*.5*Math.PI),t.set(!1)}}},gt=(r=1)=>{const t=.5*r,o=K(t),e=W(0),i=W(0),n=le(0),l=Y(n,ae),a=K(t),u=W(0),g=W(0),p=le(0),_=Y(p,ae),b=mt(r),m=b(o,e,p,g),s=b(a,u,n,i);return{left(){m(-1)},right(){m(1)},up(){s(-1)},down(){s(1)},radiansX:M(l),radiansZ:M(_),rotationX:M(i),rotationZ:M(g),positionX:M(o),positionZ:M(a),groupPositionX:M(e),groupPositionZ:M(u)}};function ht(r){let t,o;return t=new We({}),{c(){z(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,i){w(t,e,i),o=!0},i(e){o||(C(t.$$.fragment,e),o=!0)},o(e){k(t.$$.fragment,e),o=!1},d(e){v(t,e)}}}function pt(r){let t,o;return t=new T.DirectionalLightHelper({props:{args:[r[25]]}}),{c(){z(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,i){w(t,e,i),o=!0},p(e,i){const n={};i&33554432&&(n.args=[e[25]]),t.$set(n)},i(e){o||(C(t.$$.fragment,e),o=!0)},o(e){k(t.$$.fragment,e),o=!1},d(e){v(t,e)}}}function _t(r){let t,o;return t=new ct({props:{object:r[9],$$slots:{default:[pt]},$$scope:{ctx:r}}}),{c(){z(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,i){w(t,e,i),o=!0},p(e,i){const n={};i&100663296&&(n.$$scope={dirty:i,ctx:e}),t.$set(n)},i(e){o||(C(t.$$.fragment,e),o=!0)},o(e){k(t.$$.fragment,e),o=!1},d(e){v(t,e)}}}function Ct(r){return{c:S,l:S,m:S,p:S,i:S,o:S,d:S}}function kt(r){let t,o;return t=new T.Mesh({props:{"position.x":r[4],"position.y":r[8],"position.z":r[5],"rotation.x":-r[6],"rotation.z":r[7],$$slots:{default:[bt]},$$scope:{ctx:r}}}),{c(){z(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,i){w(t,e,i),o=!0},p(e,i){const n={};i&16&&(n["position.x"]=e[4]),i&32&&(n["position.z"]=e[5]),i&64&&(n["rotation.x"]=-e[6]),i&128&&(n["rotation.z"]=e[7]),i&67108864&&(n.$$scope={dirty:i,ctx:e}),t.$set(n)},i(e){o||(C(t.$$.fragment,e),o=!0)},o(e){k(t.$$.fragment,e),o=!1},d(e){v(t,e)}}}function bt(r){let t,o,e,i;return t=new T.MeshStandardMaterial({props:{map:r[24]}}),e=new T.BoxGeometry({}),{c(){z(t.$$.fragment),o=j(),z(e.$$.fragment)},l(n){P(t.$$.fragment,n),o=E(n),P(e.$$.fragment,n)},m(n,l){w(t,n,l),A(n,o,l),w(e,n,l),i=!0},p:S,i(n){i||(C(t.$$.fragment,n),C(e.$$.fragment,n),i=!0)},o(n){k(t.$$.fragment,n),k(e.$$.fragment,n),i=!1},d(n){n&&R(o),v(t,n),v(e,n)}}}function St(r){return{c:S,l:S,m:S,p:S,i:S,o:S,d:S}}function zt(r){let t,o,e={ctx:r,current:null,token:null,hasCatch:!1,pending:St,then:kt,catch:Ct,value:24,blocks:[,,,]};return Re(r[22],e),{c(){t=J(),e.block.c()},l(i){t=J(),e.block.l(i)},m(i,n){A(i,t,n),e.block.m(i,e.anchor=n),e.mount=()=>t.parentNode,e.anchor=t,o=!0},p(i,n){r=i,Me(e,r,n)},i(i){o||(C(e.block),o=!0)},o(i){for(let n=0;n<3;n+=1){const l=e.blocks[n];k(l)}o=!1},d(i){i&&R(t),e.block.d(i),e.token=null,e=null}}}function Pt(r){let t,o,e,i,n,l,a,u,g,p,_,b,m;return o=new T.AmbientLight({}),i=new it({props:{sectionColor:"#00ffff",infiniteGrid:!0,cellColor:"#00ffff"}}),l=new T.PerspectiveCamera({props:{makeDefault:!0,"position.x":5,"position.y":5,"position.z":5,$$slots:{default:[ht]},$$scope:{ctx:r}}}),u=new T.DirectionalLight({props:{color:"#ff0000","position.x":-2,"position.y":2,"position.z":-2,$$slots:{default:[_t,({ref:s})=>({25:s}),({ref:s})=>s?33554432:0]},$$scope:{ctx:r}}}),p=new T.Group({props:{"rotation.x":-r[0],"rotation.z":r[1],"position.x":r[2],"position.z":r[3],$$slots:{default:[zt]},$$scope:{ctx:r}}}),{c(){t=j(),z(o.$$.fragment),e=j(),z(i.$$.fragment),n=j(),z(l.$$.fragment),a=j(),z(u.$$.fragment),g=j(),z(p.$$.fragment)},l(s){t=E(s),P(o.$$.fragment,s),e=E(s),P(i.$$.fragment,s),n=E(s),P(l.$$.fragment,s),a=E(s),P(u.$$.fragment,s),g=E(s),P(p.$$.fragment,s)},m(s,d){A(s,t,d),w(o,s,d),A(s,e,d),w(i,s,d),A(s,n,d),w(l,s,d),A(s,a,d),w(u,s,d),A(s,g,d),w(p,s,d),_=!0,b||(m=Oe(document,"keydown",r[23]),b=!0)},p(s,[d]){const D={};d&67108864&&(D.$$scope={dirty:d,ctx:s}),l.$set(D);const y={};d&100663296&&(y.$$scope={dirty:d,ctx:s}),u.$set(y);const G={};d&1&&(G["rotation.x"]=-s[0]),d&2&&(G["rotation.z"]=s[1]),d&4&&(G["position.x"]=s[2]),d&8&&(G["position.z"]=s[3]),d&67109104&&(G.$$scope={dirty:d,ctx:s}),p.$set(G)},i(s){_||(C(o.$$.fragment,s),C(i.$$.fragment,s),C(l.$$.fragment,s),C(u.$$.fragment,s),C(p.$$.fragment,s),_=!0)},o(s){k(o.$$.fragment,s),k(i.$$.fragment,s),k(l.$$.fragment,s),k(u.$$.fragment,s),k(p.$$.fragment,s),_=!1},d(s){s&&(R(t),R(e),R(n),R(a),R(g)),v(o,s),v(i,s),v(l,s),v(u,s),v(p,s),b=!1,m()}}}const ue=1;function wt(r,t,o){let e,i,n,l,a,u,g,p;const _=.5*ue,{scene:b}=he(),{left:m,right:s,up:d,down:D,radiansX:y,radiansZ:G,rotationX:X,rotationZ:L,positionX:I,positionZ:O,groupPositionX:x,groupPositionZ:Z}=gt(ue);F(r,y,h=>o(0,e=h)),F(r,G,h=>o(1,i=h)),F(r,X,h=>o(6,g=h)),F(r,L,h=>o(7,p=h)),F(r,I,h=>o(4,a=h)),F(r,O,h=>o(5,u=h)),F(r,x,h=>o(2,n=h)),F(r,Z,h=>o(3,l=h));const q=Ae(`${He}/spiral.png`);return[e,i,n,l,a,u,g,p,_,b,m,s,d,D,y,G,X,L,I,O,x,Z,q,({key:h})=>{switch(!0){case h==="ArrowUp":d();break;case h==="ArrowDown":D();break;case h==="ArrowLeft":m();break;case h==="ArrowRight":s();break}}]}class Rt extends te{constructor(t){super(),oe(this,t,wt,Pt,ee,{})}}export{Rt as component,At as universal};
