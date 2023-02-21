<script>
    import { onMount } from "svelte";
    import { underline_value } from "@components/Header/underline_value";

    onMount(() => {
        underline_value.set("about");
    });
</script>

<main>
    <h1>ABOUT</h1>
</main>

<style lang="scss">
    main {
        text-align: center;
        padding-top: 6rem;

        h1 {
            font-size: 6rem;
        }
    }
</style>
