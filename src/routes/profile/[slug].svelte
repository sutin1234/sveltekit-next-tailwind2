<script context="module" lang="ts">
  export async function load({ page }) {
    return {
      props: {
        slug: page.params.slug
      },
    };
  }
</script>

<script>
  export let slug;
</script>

params: {slug} <br />
