<script>
    import { onMount } from "svelte";

    onMount(() => {
        // gsap.registerPlugin(ScrollTrigger);

        gsap.from(".what-interests-me", {
            yPercent: 100,
            opacity: 0,
        });

        gsap.to(".what-interests-me", {
            autoAlpha: 1,
        });
    });
</script>

<div class="what-interests-me" style="visibility: hidden;">
    <p>What interests me.</p>
    <p>Software Development (links)</p>
    <p>Music and DJing (parallax images links)</p>
    <p>Mixology (horizontal photo cards)</p>
</div>

<style lang="scss">
    .what-interests-me {
        padding-bottom: 27vh;

        p {
            font-size: 2.5vw;
            font-weight: 500;
        }
    }
</style>
