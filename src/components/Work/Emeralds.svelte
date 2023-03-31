<script>
    import { onMount } from "svelte";
    import { underline_value } from "@persistence/underline_value";

    onMount(() => {
        $underline_value = "";
    });
</script>

<h1>EMERALDS</h1>

<style>
    h1 {
        padding: 5vw;
        font-size: 5vw;
    }
</style>
