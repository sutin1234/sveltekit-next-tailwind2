"use strict";var e=require("./app.js");require("@sveltejs/kit/dist/renderer");const s=e.create_ssr_component(((s,r,t,u)=>{let{slug:a}=r;return void 0===r.slug&&t.slug&&void 0!==a&&t.slug(a),`params: ${e.escape(a)} <br>`}));exports.default=s,exports.load=async function({page:e}){return{props:{slug:e.params.slug}}};
//# sourceMappingURL=[slug].svelte.js.map
