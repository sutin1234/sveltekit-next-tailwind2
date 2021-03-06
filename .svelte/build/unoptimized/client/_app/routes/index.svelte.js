/* src/routes/index.svelte generated by Svelte v3.32.1 */
import {
	SvelteComponent,
	append,
	children,
	claim_element,
	claim_text,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	text
} from "../../_snowpack/pkg/svelte/internal.js";

function create_fragment(ctx) {
	let main;
	let t;

	return {
		c() {
			main = element("main");
			t = text("Index pages");
		},
		l(nodes) {
			main = claim_element(nodes, "MAIN", {});
			var main_nodes = children(main);
			t = claim_text(main_nodes, "Index pages");
			main_nodes.forEach(detach);
		},
		m(target, anchor) {
			insert(target, main, anchor);
			append(main, t);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(main);
		}
	};
}

class Routes extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Routes;
//# sourceMappingURL=index.svelte.js.map
