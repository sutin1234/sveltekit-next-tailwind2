import{S as t,i as e,s as a,e as n,t as o,c as s,a as r,b as c,d as l,f as i,g as d,l as m,n as h,h as p,j as u,k as v,m as g,o as f,p as y,q as T,r as E,u as w,v as $,w as b,x as k,y as A,z as S,A as M}from"./start-3075abeb.js";function x(t){let e,a,p,u;return{c(){e=n("button"),a=o("Toggle Theme")},l(t){e=s(t,"BUTTON",{});var n=r(e);a=c(n,"Toggle Theme"),n.forEach(l)},m(n,o){i(n,e,o),d(e,a),p||(u=m(e,"click",t[0]),p=!0)},p:h,i:h,o:h,d(t){t&&l(e),p=!1,u()}}}function z(t,e,a){let n;p(t,u,(t=>a(1,n=t)));return[t=>{t.currentTarget.blur(),v(u,n="dark"===n?"light":"dark",n),document.querySelector("html").classList.toggle("dark")}]}class K extends t{constructor(t){super(),e(this,t,z,x,a,{})}}function q(t){let e,a,p,u,v;return{c(){e=n("button"),a=o("Clicks: "),p=o(t[0])},l(n){e=s(n,"BUTTON",{});var o=r(e);a=c(o,"Clicks: "),p=c(o,t[0]),o.forEach(l)},m(n,o){i(n,e,o),d(e,a),d(e,p),u||(v=m(e,"click",t[1]),u=!0)},p(t,[e]){1&e&&g(p,t[0])},i:h,o:h,d(t){t&&l(e),u=!1,v()}}}function B(t,e,a){let n=0;return[n,()=>{a(0,n+=1)}]}class C extends t{constructor(t){super(),e(this,t,B,q,a,{})}}function O(t){let e,a,m,p,u,v;return{c(){e=n("p"),a=o("You open this page for: "),m=o(t[1]),p=o(" minutes "),u=o(t[0]),v=o(" seconds."),this.h()},l(n){e=s(n,"P",{class:!0});var o=r(e);a=c(o,"You open this page for: "),m=c(o,t[1]),p=c(o," minutes "),u=c(o,t[0]),v=c(o," seconds."),o.forEach(l),this.h()},h(){f(e,"class","svelte-86eo75")},m(t,n){i(t,e,n),d(e,a),d(e,m),d(e,p),d(e,u),d(e,v)},p(t,[e]){2&e&&g(m,t[1]),1&e&&g(u,t[0])},i:h,o:h,d(t){t&&l(e)}}}function H(t,e,a){let n,o,s=0;y((()=>r()));const r=()=>{a(2,s++,s),setTimeout(r,1e3)},c=t=>t>9?t:"0"+t;return t.$$.update=()=>{4&t.$$.dirty&&(a(0,n=c(s%60)),a(1,o=c(Math.floor(s/60))))},[n,o,s]}class P extends t{constructor(t){super(),e(this,t,H,O,a,{})}}function j(t){let e,a,m,h,p,u,v,y,x,z,q,B,O,H,j,J,L,U,V,D,G,N,Y,_,I,Q,F,R,W,X,Z,tt,et,at,nt,ot,st,rt,ct,lt,it,dt,mt,ht,pt,ut,vt,gt,ft,yt,Tt;return N=new K({}),gt=new C({}),yt=new P({}),{c(){e=n("meta"),a=n("meta"),m=n("meta"),h=n("meta"),p=n("meta"),u=n("meta"),v=n("meta"),y=n("meta"),x=n("meta"),z=n("meta"),q=n("meta"),B=n("meta"),O=n("meta"),H=n("meta"),j=T(),J=n("div"),L=n("h1"),U=o("Hello "),V=o(t[0]),D=o(" world!"),G=T(),E(N.$$.fragment),Y=T(),_=n("blockquote"),I=n("a"),Q=n("b"),F=o("Github repo"),R=o("\n    or "),W=n("a"),X=n("b"),Z=o("dev.to post"),tt=T(),et=n("p"),at=o("Visit the "),nt=n("a"),ot=o("svelte.dev"),st=o(" to learn how to build Svelte apps."),rt=T(),ct=n("p"),lt=o("The title is using utility class, but all other elements is using style component."),it=T(),dt=n("p"),mt=o("Just check "),ht=n("code"),pt=o("src/routes/index.svelte"),ut=o(" to see the code."),vt=T(),E(gt.$$.fragment),ft=T(),E(yt.$$.fragment),this.h()},l(n){const o=w('[data-svelte="svelte-4j6roe"]',document.head);e=s(o,"META",{name:!0,content:!0}),a=s(o,"META",{name:!0,content:!0}),m=s(o,"META",{name:!0,content:!0}),h=s(o,"META",{name:!0,content:!0}),p=s(o,"META",{property:!0,content:!0}),u=s(o,"META",{property:!0,content:!0}),v=s(o,"META",{property:!0,content:!0}),y=s(o,"META",{property:!0,content:!0}),x=s(o,"META",{property:!0,content:!0}),z=s(o,"META",{property:!0,content:!0}),q=s(o,"META",{property:!0,content:!0}),B=s(o,"META",{property:!0,content:!0}),O=s(o,"META",{property:!0,content:!0}),H=s(o,"META",{property:!0,content:!0}),o.forEach(l),j=$(n),J=s(n,"DIV",{class:!0});var i=r(J);L=s(i,"H1",{class:!0});var d=r(L);U=c(d,"Hello "),V=c(d,t[0]),D=c(d," world!"),d.forEach(l),G=$(i),b(N.$$.fragment,i),Y=$(i),_=s(i,"BLOCKQUOTE",{class:!0});var g=r(_);I=s(g,"A",{href:!0});var f=r(I);Q=s(f,"B",{});var T=r(Q);F=c(T,"Github repo"),T.forEach(l),f.forEach(l),R=c(g,"\n    or "),W=s(g,"A",{href:!0});var E=r(W);X=s(E,"B",{});var k=r(X);Z=c(k,"dev.to post"),k.forEach(l),E.forEach(l),g.forEach(l),tt=$(i),et=s(i,"P",{class:!0});var A=r(et);at=c(A,"Visit the "),nt=s(A,"A",{href:!0});var S=r(nt);ot=c(S,"svelte.dev"),S.forEach(l),st=c(A," to learn how to build Svelte apps."),A.forEach(l),rt=$(i),ct=s(i,"P",{class:!0});var M=r(ct);lt=c(M,"The title is using utility class, but all other elements is using style component."),M.forEach(l),it=$(i),dt=s(i,"P",{class:!0});var K=r(dt);mt=c(K,"Just check "),ht=s(K,"CODE",{});var C=r(ht);pt=c(C,"src/routes/index.svelte"),C.forEach(l),ut=c(K," to see the code."),K.forEach(l),vt=$(i),b(gt.$$.fragment,i),ft=$(i),b(yt.$$.fragment,i),i.forEach(l),this.h()},h(){document.title="SvelteKit ❤️ Tailwind 2",f(e,"name","title"),f(e,"content","SvelteKit ❤️ Tailwind 2"),f(a,"name","description"),f(a,"content","SvelteKit and Tailwind 2 toggle dark/light theme demo"),f(m,"name","keywords"),f(m,"content","Svelte, SvelteKit, Svelte-kit, Tailwind, HTML, CSS, JavaScript"),f(h,"name","author"),f(h,"content","@dansvel"),f(p,"property","og:type"),f(p,"content","website"),f(u,"property","og:url"),f(u,"content","https://metatags.io/"),f(v,"property","og:title"),f(v,"content","SvelteKit ❤️ Tailwind 2"),f(y,"property","og:description"),f(y,"content","SvelteKit and Tailwind 2 toggle dark/light theme demo"),f(x,"property","og:image"),f(x,"content","https://dev-to-uploads.s3.amazonaws.com/i/yyqy860f5z4n4vk8euzz.png"),f(z,"property","twitter:card"),f(z,"content","summary_large_image"),f(q,"property","twitter:url"),f(q,"content","https://metatags.io/"),f(B,"property","twitter:title"),f(B,"content","SvelteKit ❤️ Tailwind 2"),f(O,"property","twitter:description"),f(O,"content","SvelteKit and Tailwind 2 toggle dark/light theme demo"),f(H,"property","twitter:image"),f(H,"content","https://dev-to-uploads.s3.amazonaws.com/i/yyqy860f5z4n4vk8euzz.png"),f(L,"class","text-5xl font-extrabold mb-4"),f(I,"href","https://github.com/dansvel/sveltekit-typescript-postcss-tailwind2"),f(W,"href","https://dev.to/dansvel/sveltekit-svelte-next-with-tailwind-2-4dnn"),f(_,"class","text-xl p-2 bg-gray-200 dark:bg-gray-800 mb-2"),f(nt,"href","https://svelte.dev"),f(et,"class","svelte-1mnutbm"),f(ct,"class","svelte-1mnutbm"),f(dt,"class","svelte-1mnutbm"),f(J,"class","svelte-1mnutbm")},m(t,n){d(document.head,e),d(document.head,a),d(document.head,m),d(document.head,h),d(document.head,p),d(document.head,u),d(document.head,v),d(document.head,y),d(document.head,x),d(document.head,z),d(document.head,q),d(document.head,B),d(document.head,O),d(document.head,H),i(t,j,n),i(t,J,n),d(J,L),d(L,U),d(L,V),d(L,D),d(J,G),k(N,J,null),d(J,Y),d(J,_),d(_,I),d(I,Q),d(Q,F),d(_,R),d(_,W),d(W,X),d(X,Z),d(J,tt),d(J,et),d(et,at),d(et,nt),d(nt,ot),d(et,st),d(J,rt),d(J,ct),d(ct,lt),d(J,it),d(J,dt),d(dt,mt),d(dt,ht),d(ht,pt),d(dt,ut),d(J,vt),k(gt,J,null),d(J,ft),k(yt,J,null),Tt=!0},p(t,[e]){(!Tt||1&e)&&g(V,t[0])},i(t){Tt||(A(N.$$.fragment,t),A(gt.$$.fragment,t),A(yt.$$.fragment,t),Tt=!0)},o(t){S(N.$$.fragment,t),S(gt.$$.fragment,t),S(yt.$$.fragment,t),Tt=!1},d(t){l(e),l(a),l(m),l(h),l(p),l(u),l(v),l(y),l(x),l(z),l(q),l(B),l(O),l(H),t&&l(j),t&&l(J),M(N),M(gt),M(yt)}}}function J(t,e,a){let n;return p(t,u,(t=>a(0,n=t))),[n]}export default class extends t{constructor(t){super(),e(this,t,J,j,a,{})}}
//# sourceMappingURL=index.svelte-e92f7aee.js.map