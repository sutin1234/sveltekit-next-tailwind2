<script lang="ts">
    import { scale } from 'svelte/transition'
    let { className, items } = $$props
</script>

{#if items.length> 0}
    <div transition:scale class={className}>
        {#each items as {text, href, className, role} }
            <a {href} class={className} {role}>{text}</a>
        {/each}
    </div>
{/if}
