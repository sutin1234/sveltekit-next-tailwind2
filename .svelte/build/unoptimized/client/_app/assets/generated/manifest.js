import * as layout from "../../routes/$layout.svelte.js";

const components = [
	() => import("../../routes/index.svelte.js"),
	() => import("../../routes/contact/index.svelte.js"),
	() => import("../../routes/profile/index.svelte.js"),
	() => import("../../routes/profile/[slug].svelte.js"),
	() => import("../../routes/about/index.svelte.js")
];

const d = decodeURIComponent;
const empty = () => ({});

export const pages = [
	{
		// index.svelte
		pattern: /^\/$/,
		params: empty,
		parts: [components[0]]
	},

	{
		// contact/index.svelte
		pattern: /^\/contact\/?$/,
		params: empty,
		parts: [components[1]]
	},

	{
		// profile/index.svelte
		pattern: /^\/profile\/?$/,
		params: empty,
		parts: [components[2]]
	},

	{
		// profile/[slug].svelte
		pattern: /^\/profile\/([^/]+?)\/?$/,
		params: (m) => ({ slug: d(m[1])}),
		parts: [components[3]]
	},

	{
		// about/index.svelte
		pattern: /^\/about\/?$/,
		params: empty,
		parts: [components[4]]
	}
];

export const ignore = [
	/^\/localStore\/?$/,
	/^\/store\/?$/
];

export { layout };