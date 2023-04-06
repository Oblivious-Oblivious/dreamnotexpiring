<script>
    import { onMount } from "svelte";

    let text = "";

    onMount(() => {
        const cursor = document.querySelector(".cursor");

        gsap.set(cursor, {
            xPercent: -15,
        });

        window.addEventListener("mousemove", e => {
            gsap.to(cursor, {
                duration: 0.1,
                x: e.clientX,
                y: e.clientY,
            });
        });

        window.addEventListener("cursor-hover", e => {
            gsap.to(cursor, {
                duration: 0.4,
                width: "7vw",
                height: "7vw",
                color: "var(--bg-color)",
                backgroundColor: "var(--fg-color)",
                opacity: 0.8,
            });
            text = e.detail;
        });

        window.addEventListener("cursor-reset", () => {
            gsap.to(cursor, {
                duration: 0.4,
                width: "3vw",
                height: "3vw",
                color: "transparent",
                backgroundColor: "transparent",
                opacity: 1,
            });
            text = "";
        });
    });
</script>

<div class="cursor">{text}</div>

<style>
    .cursor {
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-family: var(--display-font);
        text-transform: uppercase;
        width: 3vw;
        height: 3vw;
        border-radius: 50%;
        border: 0.01vw var(--fg-color) solid;
        pointer-events: none;
        transition: transform 100ms;
        z-index: 999999;
    }
</style>
