import * as renderer from '@sveltejs/kit/dist/renderer';
import root from './_app/assets/generated/root.svelte.js';
import { set_paths } from './_app/assets/runtime/internal/singletons.js';
import * as setup from './_app/setup/index.js';

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

const entry = "entry-14dc2f65.js";

set_paths({"base":"","assets":"/."});

// allow paths to be overridden in svelte-kit start
export function init({ paths }) {
	set_paths(paths);
}

init({ paths: {"base":"","assets":"/."} });

const d = decodeURIComponent;
const empty = () => ({});

const components = [
	() => import("./_app/routes/index.svelte.js"),
	() => import("./_app/routes/contact/index.svelte.js"),
	() => import("./_app/routes/profile/index.svelte.js"),
	() => import("./_app/routes/profile/[slug].svelte.js"),
	() => import("./_app/routes/about/index.svelte.js")
];



const manifest = {
	assets: [{"file":"favicon.png","size":1373,"type":"image/png"},{"file":"robots.txt","size":67,"type":"text/plain"}],
	layout: () => import("./_app/routes/$layout.svelte.js"),
	error: () => import("./_app/routes/$error.svelte.js"),
	pages: [
		{
					pattern: /^\/$/,
					params: empty,
					parts: [components[0]],
					css: ["/_app/start-076360db.css"],
					js: ["/_app/index.svelte-23c9b302.js", "/_app/start-ca7a594e.js", "/_app/inject_styles-0e3d93cc.js"]
				},
		{
					pattern: /^\/contact\/?$/,
					params: empty,
					parts: [components[1]],
					css: ["/_app/start-076360db.css"],
					js: ["/_app/index.svelte-3da2ea00.js", "/_app/start-ca7a594e.js", "/_app/inject_styles-0e3d93cc.js"]
				},
		{
					pattern: /^\/profile\/?$/,
					params: empty,
					parts: [components[2]],
					css: ["/_app/start-076360db.css"],
					js: ["/_app/index.svelte-08ba5879.js", "/_app/start-ca7a594e.js", "/_app/inject_styles-0e3d93cc.js"]
				},
		{
					pattern: /^\/profile\/([^/]+?)\/?$/,
					params: (m) => ({ slug: d(m[1])}),
					parts: [components[3]],
					css: ["/_app/start-076360db.css"],
					js: ["/_app/[slug].svelte-23e5bb83.js", "/_app/start-ca7a594e.js", "/_app/inject_styles-0e3d93cc.js"]
				},
		{
					pattern: /^\/about\/?$/,
					params: empty,
					parts: [components[4]],
					css: ["/_app/start-076360db.css"],
					js: ["/_app/index.svelte-c8716878.js", "/_app/start-ca7a594e.js", "/_app/inject_styles-0e3d93cc.js"]
				}
	],
	endpoints: [
		{ pattern: /^\/localStore\/?$/, params: empty, load: () => import("./_app/routes/localStore.js") },
		{ pattern: /^\/store\/?$/, params: empty, load: () => import("./_app/routes/store.js") }
	]
};

export function render(request, {
	paths = {"base":"","assets":"/."},
	local = false,
	only_prerender = false,
	get_static_file
} = {}) {
	return renderer.render(request, {
		paths,
		local,
		template,
		manifest,
		target: "#svelte",
		entry,
		root,
		setup,
		dev: false,
		amp: false,
		only_prerender,
		app_dir: "_app",
		host: null,
		host_header: null,
		get_stack: error => error.stack,
		get_static_file,
		get_amp_css: dep => css_lookup[dep]
	});
}