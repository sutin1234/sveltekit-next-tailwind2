import './root.svelte.css.proxy.js';
/* .svelte/assets/generated/root.svelte generated by Svelte v3.32.1 */
import {
	SvelteComponent,
	assign,
	attr,
	check_outros,
	children,
	claim_component,
	claim_element,
	claim_space,
	claim_text,
	create_component,
	destroy_component,
	detach,
	element,
	empty,
	get_spread_object,
	get_spread_update,
	group_outros,
	init,
	insert,
	mount_component,
	safe_not_equal,
	set_data,
	space,
	text,
	transition_in,
	transition_out
} from "../../../_snowpack/pkg/svelte/internal.js";

import { setContext, afterUpdate, onMount } from "../../../_snowpack/pkg/svelte.js";
import ErrorComponent from "../../routes/$error.svelte.js";

function create_else_block(ctx) {
	let switch_instance;
	let switch_instance_anchor;
	let current;
	const switch_instance_spread_levels = [/*props_1*/ ctx[4] || {}];
	var switch_value = /*components*/ ctx[2][1];

	function switch_props(ctx) {
		let switch_instance_props = {};

		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
		}

		return { props: switch_instance_props };
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
	}

	return {
		c() {
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
		},
		l(nodes) {
			if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
			switch_instance_anchor = empty();
		},
		m(target, anchor) {
			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert(target, switch_instance_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const switch_instance_changes = (dirty & /*props_1*/ 16)
			? get_spread_update(switch_instance_spread_levels, [get_spread_object(/*props_1*/ ctx[4] || {})])
			: {};

			if (switch_value !== (switch_value = /*components*/ ctx[2][1])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(switch_instance_anchor);
			if (switch_instance) destroy_component(switch_instance, detaching);
		}
	};
}

// (43:1) {#if error}
function create_if_block_2(ctx) {
	let errorcomponent;
	let current;

	errorcomponent = new ErrorComponent({
			props: {
				status: /*status*/ ctx[0],
				error: /*error*/ ctx[1]
			}
		});

	return {
		c() {
			create_component(errorcomponent.$$.fragment);
		},
		l(nodes) {
			claim_component(errorcomponent.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(errorcomponent, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const errorcomponent_changes = {};
			if (dirty & /*status*/ 1) errorcomponent_changes.status = /*status*/ ctx[0];
			if (dirty & /*error*/ 2) errorcomponent_changes.error = /*error*/ ctx[1];
			errorcomponent.$set(errorcomponent_changes);
		},
		i(local) {
			if (current) return;
			transition_in(errorcomponent.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(errorcomponent.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(errorcomponent, detaching);
		}
	};
}

// (42:0) <Layout {...(props_0 || {})}>
function create_default_slot(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block_2, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*error*/ ctx[1]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = empty();
		},
		l(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (50:0) {#if mounted}
function create_if_block(ctx) {
	let div;
	let if_block = /*navigated*/ ctx[6] && create_if_block_1(ctx);

	return {
		c() {
			div = element("div");
			if (if_block) if_block.c();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", {
				id: true,
				"aria-live": true,
				"aria-atomic": true,
				class: true
			});

			var div_nodes = children(div);
			if (if_block) if_block.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "id", "svelte-announcer");
			attr(div, "aria-live", "assertive");
			attr(div, "aria-atomic", "true");
			attr(div, "class", "svelte-1j55zn5");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			if (if_block) if_block.m(div, null);
		},
		p(ctx, dirty) {
			if (/*navigated*/ ctx[6]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(div, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d(detaching) {
			if (detaching) detach(div);
			if (if_block) if_block.d();
		}
	};
}

// (52:2) {#if navigated}
function create_if_block_1(ctx) {
	let t0;
	let t1;

	return {
		c() {
			t0 = text("Navigated to ");
			t1 = text(/*title*/ ctx[7]);
		},
		l(nodes) {
			t0 = claim_text(nodes, "Navigated to ");
			t1 = claim_text(nodes, /*title*/ ctx[7]);
		},
		m(target, anchor) {
			insert(target, t0, anchor);
			insert(target, t1, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*title*/ 128) set_data(t1, /*title*/ ctx[7]);
		},
		d(detaching) {
			if (detaching) detach(t0);
			if (detaching) detach(t1);
		}
	};
}

function create_fragment(ctx) {
	let layout;
	let t;
	let if_block_anchor;
	let current;
	const layout_spread_levels = [/*props_0*/ ctx[3] || {}];

	let layout_props = {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	};

	for (let i = 0; i < layout_spread_levels.length; i += 1) {
		layout_props = assign(layout_props, layout_spread_levels[i]);
	}

	layout = new /*Layout*/ ctx[8]({ props: layout_props });
	let if_block = /*mounted*/ ctx[5] && create_if_block(ctx);

	return {
		c() {
			create_component(layout.$$.fragment);
			t = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l(nodes) {
			claim_component(layout.$$.fragment, nodes);
			t = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m(target, anchor) {
			mount_component(layout, target, anchor);
			insert(target, t, anchor);
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const layout_changes = (dirty & /*props_0*/ 8)
			? get_spread_update(layout_spread_levels, [get_spread_object(/*props_0*/ ctx[3] || {})])
			: {};

			if (dirty & /*$$scope, status, error, components, props_1*/ 2071) {
				layout_changes.$$scope = { dirty, ctx };
			}

			layout.$set(layout_changes);

			if (/*mounted*/ ctx[5]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i(local) {
			if (current) return;
			transition_in(layout.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(layout.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(layout, detaching);
			if (detaching) detach(t);
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { status = undefined } = $$props;
	let { error = undefined } = $$props;
	let { stores } = $$props;
	let { page } = $$props;
	let { components } = $$props;
	let { props_0 = null } = $$props;
	let { props_1 = null } = $$props;
	const Layout = components[0];
	setContext("__svelte__", stores);
	afterUpdate(stores.page.notify);
	let mounted = false;
	let navigated = false;
	let title = null;

	onMount(() => {
		const unsubscribe = stores.page.subscribe(() => {
			if (mounted) {
				$$invalidate(6, navigated = true);
				$$invalidate(7, title = document.title);
			}
		});

		$$invalidate(5, mounted = true);
		return unsubscribe;
	});

	$$self.$$set = $$props => {
		if ("status" in $$props) $$invalidate(0, status = $$props.status);
		if ("error" in $$props) $$invalidate(1, error = $$props.error);
		if ("stores" in $$props) $$invalidate(9, stores = $$props.stores);
		if ("page" in $$props) $$invalidate(10, page = $$props.page);
		if ("components" in $$props) $$invalidate(2, components = $$props.components);
		if ("props_0" in $$props) $$invalidate(3, props_0 = $$props.props_0);
		if ("props_1" in $$props) $$invalidate(4, props_1 = $$props.props_1);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*stores, page*/ 1536) {
			$: stores.page.set(page);
		}
	};

	return [
		status,
		error,
		components,
		props_0,
		props_1,
		mounted,
		navigated,
		title,
		Layout,
		stores,
		page
	];
}

class Root extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			status: 0,
			error: 1,
			stores: 9,
			page: 10,
			components: 2,
			props_0: 3,
			props_1: 4
		});
	}
}

export default Root;
//# sourceMappingURL=root.svelte.js.map
