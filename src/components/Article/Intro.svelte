<script>
    export let content;

    import { onMount } from "svelte";
    import SplitType from "split-type";
    import { gsap } from "gsap/dist/gsap";

    import Line from "./Line.svelte";

    onMount(() => {
        new SplitType(".intro-content", {
            types: "words",
        });

        gsap.timeline({
            delay: 0.95,
        })
        .from(".intro-content .word", {
            duration: 0.0001,
            autoAlpha: 0,
            stagger: 0.1,
            onComplete: () => window.dispatchEvent(new CustomEvent("scrolling-start")),
        });
    });
</script>

<Line/>
<div class="intro">
    <div class="intro-content">
        {content}
    </div>
</div>
<Line/>

<style>
    .intro {
        display: flex;
        font-family: var(--display-font);
        font-size: 3vw;
        text-align: center;
    }
</style>
