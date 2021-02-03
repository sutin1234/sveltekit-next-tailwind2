/* src/components/ToggleTheme.svelte generated by Svelte v3.32.1 */
import {
	SvelteComponent,
	append,
	children,
	claim_element,
	claim_text,
	component_subscribe,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	safe_not_equal,
	set_store_value,
	text
} from "../_snowpack/pkg/svelte/internal.js";

import { theme } from "../_app/routes/store.js";

function create_fragment(ctx) {
	let button;
	let t;
	let mounted;
	let dispose;

	return {
		c() {
			button = element("button");
			t = text("Toggle Theme");
		},
		l(nodes) {
			button = claim_element(nodes, "BUTTON", {});
			var button_nodes = children(button);
			t = claim_text(button_nodes, "Toggle Theme");
			button_nodes.forEach(detach);
		},
		m(target, anchor) {
			insert(target, button, anchor);
			append(button, t);

			if (!mounted) {
				dispose = listen(button, "click", /*toggleTheme*/ ctx[0]);
				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(button);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $theme;
	component_subscribe($$self, theme, $$value => $$invalidate(1, $theme = $$value));

	const toggleTheme = e => {
		e.currentTarget.blur();
		set_store_value(theme, $theme = $theme === "dark" ? "light" : "dark", $theme);
		document.querySelector("html").classList.toggle("dark");
	};

	return [toggleTheme];
}

class ToggleTheme extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default ToggleTheme;
//# sourceMappingURL=ToggleTheme.svelte.js.map