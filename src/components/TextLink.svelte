<a {href} {target} class={className} {style}>{text}</a>

<script lang="ts">


    export let href = "";
    export let text = "";
    export let target = "self";
    export let style = '';
    export let active = "";
    export let className = "px-3 py-2 text-sm font-medium text-white rounded-md " + active;

</script>