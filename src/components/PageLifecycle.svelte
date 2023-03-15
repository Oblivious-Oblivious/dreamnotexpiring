<script>
    export let current_page;

    import { onMount } from "svelte";
    import { underline_value } from "./Header/underline_value";

    onMount(() => {
        $underline_value = current_page;
    });
</script>
