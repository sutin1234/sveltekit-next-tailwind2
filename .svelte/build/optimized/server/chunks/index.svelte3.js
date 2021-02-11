"use strict";var e=require("./app.js");require("@sveltejs/kit/dist/renderer");const r=e.create_ssr_component(((r,s,t,u)=>{let{slug:i=""}=s;return void 0===s.slug&&t.slug&&void 0!==i&&t.slug(i),`<h1>Profile ${e.escape(i)}</h1>`}));exports.default=r;
//# sourceMappingURL=index.svelte3.js.map
