/* src/routes/$layout.svelte generated by Svelte v3.32.1 */
import {
	create_ssr_component,
	subscribe,
	validate_component
} from "../../_snowpack/pkg/svelte/internal.js";

import "./_global.css.proxy.js";
import { theme } from "./store.js";
import Nav from "../../_components/Nav.svelte.js";
import { onMount } from "../../_snowpack/pkg/svelte.js";

const $layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $theme, $$unsubscribe_theme;
	$$unsubscribe_theme = subscribe(theme, value => $theme = value);

	onMount(() => {
		if ($theme === "dark") {
			document.querySelector("html").classList.add("dark");
		}

		console.log("themes ", $theme);
	});

	$$unsubscribe_theme();

	return `${($$result.head += `${($$result.title = `<title>SvelteKit ❤️ Tailwind 2</title>`, "")}<meta name="${"title"}" content="${"SvelteKit ❤️ Tailwind 2"}" data-svelte="svelte-1d5jt9s"><meta name="${"description"}" content="${"SvelteKit and Tailwind 2 toggle dark/light theme demo"}" data-svelte="svelte-1d5jt9s"><meta name="${"keywords"}" content="${"Svelte, SvelteKit, Svelte-kit, Tailwind, HTML, CSS, JavaScript"}" data-svelte="svelte-1d5jt9s"><meta name="${"author"}" content="${"@dansvel"}" data-svelte="svelte-1d5jt9s"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-1d5jt9s"><meta property="${"og:url"}" content="${"https://metatags.io/"}" data-svelte="svelte-1d5jt9s"><meta property="${"og:title"}" content="${"SvelteKit ❤️ Tailwind 2"}" data-svelte="svelte-1d5jt9s"><meta property="${"og:description"}" content="${"SvelteKit and Tailwind 2 toggle dark/light theme demo"}" data-svelte="svelte-1d5jt9s"><meta property="${"og:image"}" content="${"https://dev-to-uploads.s3.amazonaws.com/i/yyqy860f5z4n4vk8euzz.png"}" data-svelte="svelte-1d5jt9s"><meta property="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-1d5jt9s"><meta property="${"twitter:url"}" content="${"https://metatags.io/"}" data-svelte="svelte-1d5jt9s"><meta property="${"twitter:title"}" content="${"SvelteKit ❤️ Tailwind 2"}" data-svelte="svelte-1d5jt9s"><meta property="${"twitter:description"}" content="${"SvelteKit and Tailwind 2 toggle dark/light theme demo"}" data-svelte="svelte-1d5jt9s"><meta property="${"twitter:image"}" content="${"https://dev-to-uploads.s3.amazonaws.com/i/yyqy860f5z4n4vk8euzz.png"}" data-svelte="svelte-1d5jt9s">`, "")}


<main>${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
  ${slots.default ? slots.default({}) : ``}</main>`;
});

export default $layout;
//# sourceMappingURL=$layout.svelte.js.map
