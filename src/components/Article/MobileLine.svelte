<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap/dist/gsap";

    let line_element;
    onMount(() => {
        gsap.from(line_element, {
            delay: 2,
            duration: 0.75,
            opacity: 0,
        });
    });
</script>

<div bind:this={line_element} class="line"></div>

<style>
    .line {
        width: 100%;
        height: 1vw;
        background-color: var(--fg-color);
        transform-origin: left top;
        background: url("/img/horizontal-border.png") repeat-x bottom left;
        background-size: 60vw;
        margin: 1vw 0;
        filter: invert(var(--invert-value));
    }
</style>
