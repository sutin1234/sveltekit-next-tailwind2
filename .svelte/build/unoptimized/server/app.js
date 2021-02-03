import * as renderer from '@sveltejs/kit/dist/renderer';
import root from './_app/assets/generated/root.svelte.js';
import { set_paths } from './_app/assets/runtime/internal/singletons.js';
import * as setup from './_app/setup/index.js';

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

const entry = "entry-0f5a0c94.js";

set_paths({"base":"","assets":"/."});

// allow paths to be overridden in svelte-kit start
export function init({ paths }) {
	set_paths(paths);
}

init({ paths: {"base":"","assets":"/."} });

const d = decodeURIComponent;
const empty = () => ({});

const components = [
	() => import("./_app/routes/index.svelte.js")
];



const manifest = {
	assets: [{"file":"favicon.png","size":1373,"type":"image/png"},{"file":"robots.txt","size":67,"type":"text/plain"}],
	layout: () => import("./_app/routes/$layout.svelte.js"),
	error: () => import("./_app/assets/components/error.svelte.js"),
	pages: [
		{
					pattern: /^\/$/,
					params: empty,
					parts: [components[0]],
					css: ["/_app/start-4eaee35e.css", "/_app/index.svelte-1bed2f98.css"],
					js: ["/_app/index.svelte-e92f7aee.js", "/_app/start-3075abeb.js", "/_app/inject_styles-0e3d93cc.js"]
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