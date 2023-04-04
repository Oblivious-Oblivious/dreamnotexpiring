<script>
    import { onMount } from "svelte";

    import SplitType from "split-type";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.set(".interest-bold-word", {
            xPercent: 380,
        });

        new SplitType(".interest-bold-word p", {
            types: "chars",
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".interest-bold-word",
                endTrigger: ".how-i-learn",
                start: "top 18%",
                end: "+=5000",
                pin: true,
                scrub: true,
            },
        });

        gsap.utils.toArray(".interest-bold-word p").forEach(word => {
            tl.from(`.${word.classList[0].toString()} .char`, {
                opacity: 0,
                y: 80,
                rotateX: -90,
                stagger: 0.015,
            }, "<").to(`.${word.classList[0].toString()} .char`, {
                opacity: 0,
                y: -80,
                rotateX: 90,
                stagger: 0.015,
            }, "<1");
        });
    });
</script>

<div class="interest-bold-word">
    <p class="software">&nbsp;&nbsp;&nbsp;&nbsp;software</p>
    <p class="djing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;djing</p>
    <p class="mixology">&nbsp;&nbsp;&nbsp;&nbsp;mixology</p>
</div>

<style>
    .interest-bold-word {
        position: absolute;
        z-index: 9999;
    }

    p {
        font-family: "Saol Display";
        font-size: 2.6vw;
        font-weight: 800;
        font-style: italic;
        margin: 0;
        line-height: 0;
        display: flex;
        gap: 0;
    }
</style>
