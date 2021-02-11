<script lang="ts">
import { onMount } from "svelte";


    export let error, status;
    onMount(() => {
        console.log(error, status);
    })
</script>

<h2>Error: {error} </h2>
<h2>Status: {status} </h2>