import './Nav.svelte.css.proxy.js';
/* src/components/Nav.svelte generated by Svelte v3.32.1 */
import { create_ssr_component } from "../_snowpack/pkg/svelte/internal.js";

const css = {
	code: ".nav.svelte-vi2fk0 a.svelte-vi2fk0,a.svelte-vi2fk0.svelte-vi2fk0:link{@apply text-red-600;;color:red}",
	map: "{\"version\":3,\"file\":\"Nav.svelte\",\"sources\":[\"Nav.svelte\"],\"sourcesContent\":[\"<nav class=\\\"nav\\\">\\n  <a href=\\\"/\\\">Home</a>\\n  <a href=\\\"/about\\\">About</a>\\n  <a href=\\\"/contact\\\">Contact</a>\\n  <a href=\\\"/profile\\\">Profile</a>\\n  <a href=\\\"/profile/20\\\">Profile 20</a>\\n</nav>\\n\\n<style>\\n  .nav a,\\n  a:link {\\n    @apply text-red-600;\\n    color: red;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AASE,kBAAI,CAAC,eAAC,CACN,6BAAC,KAAK,AAAC,CAAC,AACN,OAAO,YAAY,CAAC,CACpB,KAAK,CAAE,GAAG,AACZ,CAAC\"}"
};

const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);

	return `<nav class="${"nav svelte-vi2fk0"}"><a href="${"/"}" class="${"svelte-vi2fk0"}">Home</a>
  <a href="${"/about"}" class="${"svelte-vi2fk0"}">About</a>
  <a href="${"/contact"}" class="${"svelte-vi2fk0"}">Contact</a>
  <a href="${"/profile"}" class="${"svelte-vi2fk0"}">Profile</a>
  <a href="${"/profile/20"}" class="${"svelte-vi2fk0"}">Profile 20</a>
</nav>`;
});

export default Nav;
//# sourceMappingURL=Nav.svelte.js.map
