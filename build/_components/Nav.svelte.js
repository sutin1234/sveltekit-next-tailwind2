import './Nav.svelte.css.proxy.js';
/* src/components/Nav.svelte generated by Svelte v3.32.1 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space,
	text
} from "../_snowpack/pkg/svelte/internal.js";

function create_fragment(ctx) {
	let nav;
	let a0;
	let t0;
	let t1;
	let a1;
	let t2;
	let t3;
	let a2;
	let t4;
	let t5;
	let a3;
	let t6;
	let t7;
	let a4;
	let t8;

	return {
		c() {
			nav = element("nav");
			a0 = element("a");
			t0 = text("Home");
			t1 = space();
			a1 = element("a");
			t2 = text("About");
			t3 = space();
			a2 = element("a");
			t4 = text("Contact");
			t5 = space();
			a3 = element("a");
			t6 = text("Profile");
			t7 = space();
			a4 = element("a");
			t8 = text("Profile 20");
			this.h();
		},
		l(nodes) {
			nav = claim_element(nodes, "NAV", { class: true });
			var nav_nodes = children(nav);
			a0 = claim_element(nav_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t0 = claim_text(a0_nodes, "Home");
			a0_nodes.forEach(detach);
			t1 = claim_space(nav_nodes);
			a1 = claim_element(nav_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t2 = claim_text(a1_nodes, "About");
			a1_nodes.forEach(detach);
			t3 = claim_space(nav_nodes);
			a2 = claim_element(nav_nodes, "A", { href: true, class: true });
			var a2_nodes = children(a2);
			t4 = claim_text(a2_nodes, "Contact");
			a2_nodes.forEach(detach);
			t5 = claim_space(nav_nodes);
			a3 = claim_element(nav_nodes, "A", { href: true, class: true });
			var a3_nodes = children(a3);
			t6 = claim_text(a3_nodes, "Profile");
			a3_nodes.forEach(detach);
			t7 = claim_space(nav_nodes);
			a4 = claim_element(nav_nodes, "A", { href: true, class: true });
			var a4_nodes = children(a4);
			t8 = claim_text(a4_nodes, "Profile 20");
			a4_nodes.forEach(detach);
			nav_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a0, "href", "/");
			attr(a0, "class", "svelte-adqqhb");
			attr(a1, "href", "/about");
			attr(a1, "class", "svelte-adqqhb");
			attr(a2, "href", "/contact");
			attr(a2, "class", "svelte-adqqhb");
			attr(a3, "href", "/profile");
			attr(a3, "class", "svelte-adqqhb");
			attr(a4, "href", "/profile/20");
			attr(a4, "class", "svelte-adqqhb");
			attr(nav, "class", "nav svelte-adqqhb");
		},
		m(target, anchor) {
			insert(target, nav, anchor);
			append(nav, a0);
			append(a0, t0);
			append(nav, t1);
			append(nav, a1);
			append(a1, t2);
			append(nav, t3);
			append(nav, a2);
			append(a2, t4);
			append(nav, t5);
			append(nav, a3);
			append(a3, t6);
			append(nav, t7);
			append(nav, a4);
			append(a4, t8);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(nav);
		}
	};
}

class Nav extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Nav;
//# sourceMappingURL=Nav.svelte.js.map
