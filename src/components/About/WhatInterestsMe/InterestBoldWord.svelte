<script>
    import { onMount } from "svelte";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.set(".interest-bold-word", {
            xPercent: 320,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: ".interest-bold-word",
                endTrigger: ".how-i-learn",
                start: "top 18%",
                end: "+=3900",
                pin: true,
                scrub: true,
            },
        })
        .from(".interest-technical .interest-letter", {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: 0.015,
        }, "<")
        .to(".interest-technical .interest-letter", {
            opacity: 0,
            delay: 0.35,
            y: -80,
            rotateX: 90,
            stagger: 0.015,
        }, "<1")
        .from(".interest-interactive .interest-letter", {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: 0.015,
        }, "<")
        .to(".interest-interactive .interest-letter", {
            delay: 0.25,
            opacity: 0,
            y: -80,
            rotateX: 90,
            stagger: 0.015,
        }, "<1")
        .from(".interest-artistic .interest-letter", {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: 0.015,
        }, "<")
        .to(".interest-artistic .interest-letter", {
            opacity: 0,
            y: -80,
            rotateX: 90,
            stagger: 0.015,
        }, "<1");
    });
</script>

<div class="interest-bold-word">
    <div class="interest-technical">
        <div class="interest-letter">&nbsp;</div>
        <div class="interest-letter">&nbsp;</div>
        <div class="interest-letter">&nbsp;</div>
        <div class="interest-letter">&nbsp;</div>
        <div class="interest-letter">s</div>
        <div class="interest-letter">o</div>
        <div class="interest-letter">f</div>
        <div class="interest-letter">t</div>
        <div class="interest-letter">w</div>
        <div class="interest-letter">a</div>
        <div class="interest-letter">r</div>
        <div class="interest-letter">e</div>
    </div>
    <div class="interest-interactive">
        <div class="interest-letter">&nbsp;</div>
        <div class="interest-letter">&nbsp;</div>
        <div class="interest-letter">&nbsp;</div>
        <div class="interest-letter">&nbsp;</div>
        <div class="interest-letter">&nbsp;</div>
        <div class="interest-letter">&nbsp;</div>
        <div class="interest-letter">d</div>
        <div class="interest-letter">j</div>
        <div class="interest-letter">i</div>
        <div class="interest-letter">n</div>
        <div class="interest-letter">g</div>
    </div>
    <div class="interest-artistic">
        <div class="interest-letter">&nbsp;</div>
        <div class="interest-letter">&nbsp;</div>
        <div class="interest-letter">&nbsp;</div>
        <div class="interest-letter">&nbsp;</div>
        <div class="interest-letter">m</div>
        <div class="interest-letter">i</div>
        <div class="interest-letter">x</div>
        <div class="interest-letter">o</div>
        <div class="interest-letter">l</div>
        <div class="interest-letter">o</div>
        <div class="interest-letter">g</div>
        <div class="interest-letter">y</div>
    </div>
</div>

<style>
    .interest-bold-word {
        position: absolute;
        z-index: 9999;
    }

    .interest-technical,
    .interest-interactive,
    .interest-artistic {
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
