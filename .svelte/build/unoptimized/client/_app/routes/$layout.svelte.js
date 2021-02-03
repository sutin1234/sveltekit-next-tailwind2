/* src/routes/$layout.svelte generated by Svelte v3.32.1 */
import {
	SvelteComponent,
	children,
	claim_element,
	component_subscribe,
	create_slot,
	detach,
	element,
	init,
	insert,
	safe_not_equal,
	transition_in,
	transition_out,
	update_slot
} from "../../_snowpack/pkg/svelte/internal.js";

import "./_global.css.proxy.js";
import { theme } from "./store.js";
import { onMount } from "../../_snowpack/pkg/svelte.js";

function create_fragment(ctx) {
	let main;
	let current;
	const default_slot_template = /*#slots*/ ctx[1].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[0], null);

	return {
		c() {
			main = element("main");
			if (default_slot) default_slot.c();
		},
		l(nodes) {
			main = claim_element(nodes, "MAIN", {});
			var main_nodes = children(main);
			if (default_slot) default_slot.l(main_nodes);
			main_nodes.forEach(detach);
		},
		m(target, anchor) {
			insert(target, main, anchor);

			if (default_slot) {
				default_slot.m(main, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 1) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[0], dirty, null, null);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(main);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $theme;
	component_subscribe($$self, theme, $$value => $$invalidate(2, $theme = $$value));
	let { $$slots: slots = {}, $$scope } = $$props;

	onMount(() => {
		if ($theme === "dark") {
			document.querySelector("html").classList.add("dark");
		}
	});

	$$self.$$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
	};

	return [$$scope, slots];
}

class $layout extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default $layout;
//# sourceMappingURL=$layout.svelte.js.map
