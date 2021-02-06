import { Readable } from 'svelte/store';
export declare function noop(): void;
export declare const identity: (x: any) => any;
export declare function assign<T, S>(tar: T, src: S): T & S;
export declare function is_promise<T = any>(value: any): value is PromiseLike<T>;
export declare function add_location(element: any, file: any, line: any, column: any, char: any): void;
export declare function run(fn: any): any;
export declare function blank_object(): any;
export declare function run_all(fns: any): void;
export declare function is_function(thing: any): thing is Function;
export declare function safe_not_equal(a: any, b: any): boolean;
export declare function not_equal(a: any, b: any): boolean;
export declare function is_empty(obj: any): boolean;
export declare function validate_store(store: any, name: any): void;
export declare function subscribe(store: any, ...callbacks: any[]): any;
export declare function get_store_value<T>(store: Readable<T>): T;
export declare function component_subscribe(component: any, store: any, callback: any): void;
export declare function create_slot(definition: any, ctx: any, $$scope: any, fn: any): any;
export declare function get_slot_context(definition: any, ctx: any, $$scope: any, fn: any): any;
export declare function get_slot_changes(definition: any, $$scope: any, dirty: any, fn: any): any;
export declare function update_slot(slot: any, slot_definition: any, ctx: any, $$scope: any, dirty: any, get_slot_changes_fn: any, get_slot_context_fn: any): void;
export declare function update_slot_spread(slot: any, slot_definition: any, ctx: any, $$scope: any, dirty: any, get_slot_changes_fn: any, get_slot_spread_changes_fn: any, get_slot_context_fn: any): void;
export declare function exclude_internal_props(props: any): {};
export declare function compute_rest_props(props: any, keys: any): {};
export declare function compute_slots(slots: any): {};
export declare function once(fn: any): (this: any, ...args: any[]) => void;
export declare function null_to_empty(value: any): any;
export declare function set_store_value(store: any, ret: any, value?: any): any;
export declare const has_prop: (obj: any, prop: any) => any;
export declare function action_destroyer(action_result: any): any;
