<script>
    export let content;

    import Line from "./Line.svelte";
    import { onMount } from "svelte";
    import SplitType from "split-type";

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
        font-size: 6vw;
        text-align: center;
    }
</style>
