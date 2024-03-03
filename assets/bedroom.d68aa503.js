import"./modulepreload-polyfill.c7c6310f.js";import{C as s,D as R,R as x,L as P,S as k,T as C,a as U,P as D,b as B,M as G,s as u,c as S,d as y,W as A}from"./three.module.975d644b.js";import{O as F}from"./OrbitControls.7a7c2cc8.js";import{D as T,G as z}from"./DRACOLoader.a8e2e63b.js";var E=`varying vec2 vUv;

void main() {
    vUv = uv;

    vec3 newPosition = position;
    newPosition.z = 1.0;
    gl_Position = vec4(newPosition, 1.0);
}`,O=`uniform sampler2D tBackground;

varying vec2 vUv;

void main()
{
    vec4 backgroundColor = texture2D(tBackground, vUv);

    gl_FragColor = backgroundColor;
}`;function W(){const t=new s("#79452E"),n=new s("#743C25"),a=new s("#723c25"),c=new s("#733c25"),b=new Uint8Array([Math.round(c.r*255),Math.round(c.g*255),Math.round(c.b*255),255,Math.round(a.r*255),Math.round(a.g*255),Math.round(a.b*255),255,Math.round(t.r*255),Math.round(t.g*255),Math.round(t.b*255),255,Math.round(n.r*255),Math.round(n.g*255),Math.round(n.b*255),255]),l=new R(b,2,2,x);l.magFilter=P,l.needsUpdate=!0;const L={tBackground:{value:l}};return new k({wireframe:!1,transparent:!1,uniforms:L,vertexShader:E,fragmentShader:O})}const _=""+new URL("room.24c9081b.glb",import.meta.url).href,q=""+new URL("plants.42b50671.glb",import.meta.url).href,H=""+new URL("matcap-green.537ba4d7.webp",import.meta.url).href,Y=""+new URL("baked.c7688acd.webp",import.meta.url).href,g=document.querySelector("#canvas"),p=new C,v=new T;v.setDecoderPath("/draco/");const h=new z;h.setDRACOLoader(v);const e={width:window.innerWidth,height:window.innerHeight},i=new U,r=new D(45,e.width/e.height,.1,100);r.position.set(3.25,1.02,3.47);i.add(r);const j=new B(2,2,2,2),I=W(),d=new G(j,I);d.frustumCulled=!1;d.matrixAutoUpdate=!1;d.updateMatrix();i.add(d);const m=p.load(Y);m.flipY=!1;m.encoding=u;h.load(_,t=>{const n=t.scene.children.find(a=>a.name==="main");n.material=new S({map:m}),i.add(t.scene)});const w=p.load(H);w.flipY=!1;w.encoding=u;h.load(q,t=>{const n=t.scene.children.find(a=>a.name==="plants");n.material=new y({matcap:w}),i.add(t.scene)});window.addEventListener("resize",()=>{e.width=window.innerWidth,e.height=window.innerHeight,r.aspect=e.width/e.height,r.updateProjectionMatrix(),o.setSize(e.width,e.height),o.setPixelRatio(Math.min(window.devicePixelRatio,2))});const M=new F(r,g);M.enableDamping=!0;const o=new A({canvas:g,antialias:!0});o.setSize(e.width,e.height);o.setPixelRatio(Math.min(window.devicePixelRatio,2));o.outputEncoding=u;const f=()=>{M.update(),o.render(i,r),window.requestAnimationFrame(f)};f();
