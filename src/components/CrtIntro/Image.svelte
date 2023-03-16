<script>
    import { onMount } from "svelte";

    var crt;

    onMount(() => {
        crt = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "/crt-dark.jpg"
            : "/crt-light.jpg";
    });
</script>

<img class="crt" src={crt} alt="A 90s CRT tv">

<style>
    img {
        width: 100vw;
        height: 100vh;
    }
</style>
