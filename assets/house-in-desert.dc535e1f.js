import"./modulepreload-polyfill.c7c6310f.js";import{C as l,D as R,R as P,L as U,S as k,a as A,T as D,s as f,b as y,M as v,c as F,P as B,W as T,ap as G}from"./three.module.975d644b.js";import{O as z}from"./OrbitControls.7a7c2cc8.js";import{D as _,G as E}from"./DRACOLoader.a8e2e63b.js";var W=`varying vec2 vUv;

void main() {
    vUv = uv;

    vec3 newPosition = position;
    newPosition.z = 1.0;
    gl_Position = vec4(newPosition, 1.0);
}`,j=`uniform sampler2D tBackground;

varying vec2 vUv;

void main()
{
    vec4 backgroundColor = texture2D(tBackground, vUv);

    gl_FragColor = backgroundColor;
}`;function H(){const e=new l("#cfbfa7"),o=new l("#cfbfa7"),t=new l("#cbbda5"),r=new l("#ded5c8"),u=new Uint8Array([Math.round(r.r*255),Math.round(r.g*255),Math.round(r.b*255),255,Math.round(t.r*255),Math.round(t.g*255),Math.round(t.b*255),255,Math.round(e.r*255),Math.round(e.g*255),Math.round(e.b*255),255,Math.round(o.r*255),Math.round(o.g*255),Math.round(o.b*255),255]),s=new R(u,2,2,P);s.magFilter=U,s.needsUpdate=!0;const i={tBackground:{value:s}};return new k({wireframe:!1,transparent:!1,uniforms:i,vertexShader:W,fragmentShader:j})}const O=`uniform sampler2D tShadow;
uniform vec3 uShadowColor;
uniform float uAlpha;

varying vec2 vUv;

void main()
{
    float shadowAlpha = 1.0 - texture2D(tShadow, vUv).r;
    shadowAlpha *= uAlpha;

    gl_FragColor = vec4(uShadowColor, shadowAlpha);
}
`,q=`varying vec2 vUv;

void main()
{
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;function I(){const e={tShadow:{value:null},uShadowColor:{value:null},uAlpha:{value:null}};return new k({wireframe:!1,transparent:!0,uniforms:e,vertexShader:q,fragmentShader:O})}const V=""+new URL("baked.cf5c07d0.jpg",import.meta.url).href,Y=""+new URL("floor-shadow.0cbc38d9.jpg",import.meta.url).href,J=""+new URL("house.e31fb9a4.glb",import.meta.url).href,g=document.querySelector("#canvas");if(g instanceof HTMLCanvasElement){const e=new A,o=new D,t=o.load(V);t.flipY=!1,t.encoding=f;const r=o.load(Y);r.flipY=!1,r.encoding=f;const u=new y(2,2,2,2),s=H(),i=new v(u,s);i.frustumCulled=!1,i.matrixAutoUpdate=!1,i.updateMatrix(),e.add(i);const h=new _;h.setDecoderPath("/draco/");const p=new E;p.setDRACOLoader(h);const L=new F({map:t}),c=I();c.depthWrite=!1,c.uniforms.uShadowColor.value=new l("#927044"),c.uniforms.tShadow.value=r,c.uniforms.uAlpha.value=.6,p.load(J,w=>{const x=w.scene.children.find(m=>m.name==="baked");x instanceof v&&(x.material=L);const S=w.scene.children.find(m=>m.name==="ground");S instanceof v&&(S.material=c),e.add(w.scene)});const n={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{n.width=window.innerWidth,n.height=window.innerHeight,a.aspect=n.width/n.height,a.updateProjectionMatrix(),d.setSize(n.width,n.height),d.setPixelRatio(Math.min(window.devicePixelRatio,2))});const a=new B(45,n.width/n.height,.1,100);a.position.x=12,a.position.y=12,a.position.z=8,e.add(a);const M=new z(a,g);M.enableDamping=!0;const d=new T({canvas:g,antialias:!0});d.setSize(n.width,n.height),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.outputEncoding=f;const C=new G,b=()=>{C.getElapsedTime(),M.update(),d.render(e,a),window.requestAnimationFrame(b)};b()}
