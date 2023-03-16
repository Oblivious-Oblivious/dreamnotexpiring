<script>
    import { onMount } from "svelte";

    var crt_source;

    onMount(() => {
        /* TODO 1 Add image content with css instead of javascript */
        if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
            crt_source = "crt-dark.jpg";
        else
            crt_source = "crt-light.jpg";
    });
</script>

<!-- TODO 1 Add image content with css instead of javascript -->
<img class="crt" src={crt_source} alt="A 90s CRT tv">

<style>
    img {
        width: 100vw;
        height: 100vh;
    }
</style>
