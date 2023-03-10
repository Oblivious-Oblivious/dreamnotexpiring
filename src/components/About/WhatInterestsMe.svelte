<script>
    import { onMount } from "svelte";
    import gsap from "gsap";
    // import ScrollTrigger from "gsap/ScrollTrigger";
    
    onMount(() => {
        // gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".what-interests-me", {
            yPercent: 100,
            opacity: 0,
        }, {
            yPercent: 0,
            visibility: "visible",
            opacity: 1,
        });
    });
</script>

<div class="what-interests-me">
    <p>What interests me.</p>
    <p>Software Development (links)</p>
    <p>Music and DJing (parallax images links)</p>
    <p>Mixology (horizontal photo cards)</p>
</div>

<style lang="scss">
    .what-interests-me {
        padding-bottom: 27vh;
        visibility: hidden;

        p {
            font-size: 2.5vw;
            font-weight: 500;
        }
    }
</style>
