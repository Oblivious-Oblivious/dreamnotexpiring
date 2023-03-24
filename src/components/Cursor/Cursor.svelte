<script>
    import { onMount } from "svelte";

    onMount(() => {
        gsap.set(".cursor", {
            xPercent: -50,
            yPercent: -50,
        });

        const cursor = document.querySelector(".cursor");

        window.addEventListener("mousemove", e => {
            gsap.to(cursor, {
                duration: 0.1,
                x: e.clientX,
                y: e.clientY,
            });
        });
    });
</script>

<div class="cursor"></div>

<style>
    .cursor {
        position: fixed;
        left: 0;
        top: 0;
        width: 3vw;
        height: 3vw;
        border-radius: 50%;
        border: 0.01vw var(--fg-color) solid;
        pointer-events: none;
        transition: transform 100ms;
        z-index: 9999;
    }
</style>
