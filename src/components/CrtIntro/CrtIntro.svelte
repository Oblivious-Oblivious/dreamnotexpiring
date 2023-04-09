<script>
    import { onMount } from "svelte";
    import gsap from "gsap";

    import Image from "./Image.svelte";
    import Noise from "./Noise.svelte";

    onMount(() => {
        // Scrolls top before reloading
        window.onbeforeunload = () => window.scrollTo(0, 0);
        window.onload = () => window.scrollTo(0, 0);

        gsap.set(".intro-wrapper", {
            autoAlpha: 1,
        });
    });
</script>

<div class="intro-wrapper" style="visibility: hidden;">
    <Image/>
    <Noise/>
</div>

<style>
    :root {
        --noise: var(--silver);
        background-color: var(--bg-color);
    }

    .intro-wrapper {
        position: fixed;
    }
</style>
