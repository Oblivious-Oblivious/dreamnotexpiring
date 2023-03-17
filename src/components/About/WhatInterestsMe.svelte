<script>
    import { onMount } from "svelte";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.set(".what-interests-me", {
            y: "-25vh",
        });

        gsap.set([".interest-technical", ".interest-artistic", ".interest-interactive"], {
            xPercent: 43.7,
        });

        gsap.fromTo(".what-interests-me", {
            opacity: 0,
        }, {
            opacity: 1,
            autoAlpha: 1,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: ".what-interests-me",
                endTrigger: ".how-i-learn",
                start: "top 18%",
                end: "+=2500",
                // markers: true,
                pin: true,
                scrub: true,
            },
        })
        .add("at-interest-technical")
        .from(".interest-technical .interest-letter", {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: 0.015,
        }, "at-interest-techincal<")
        .to(".interest-technical .interest-letter", {
            opacity: 0,
            y: -80,
            rotateX: 90,
            stagger: 0.015,
        }, "at-interest-techincal<1")

        .add("at-interest-interactive")
        .from(".interest-interactive .interest-letter", {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: 0.015,
        }, "at-interest-interactive<")
        .to(".interest-interactive .interest-letter", {
            opacity: 0,
            y: -80,
            rotateX: 90,
            stagger: 0.015,
        }, "at-interest-interactive<1")

        .add("at-interest-artistic")
        .from(".interest-artistic .interest-letter", {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: 0.015,
        }, "at-interest-artistic<")
        .to(".interest-artistic .interest-letter", {
            opacity: 0,
            y: -80,
            rotateX: 90,
            stagger: 0.015,
        }, "at-interest-artistic<1");
    });
</script>

<div class="what-interests-me" style="visibility: hidden;">
    <div class="interest-bold-word interest-technical">
        <div class="interest-letter">&nbsp;</div>
        <div class="interest-letter">&nbsp;</div>
        <div class="interest-letter">t</div>
        <div class="interest-letter">e</div>
        <div class="interest-letter">c</div>
        <div class="interest-letter">h</div>
        <div class="interest-letter">n</div>
        <div class="interest-letter">i</div>
        <div class="interest-letter">c</div>
        <div class="interest-letter">a</div>
        <div class="interest-letter">l</div>
    </div>
    <div class="interest-bold-word interest-interactive">
        <div class="interest-letter">i</div>
        <div class="interest-letter">n</div>
        <div class="interest-letter">t</div>
        <div class="interest-letter">e</div>
        <div class="interest-letter">r</div>
        <div class="interest-letter">a</div>
        <div class="interest-letter">c</div>
        <div class="interest-letter">t</div>
        <div class="interest-letter">i</div>
        <div class="interest-letter">v</div>
        <div class="interest-letter">e</div>
    </div>
    <div class="interest-bold-word interest-artistic">
        <div class="interest-letter">&nbsp;</div>
        <div class="interest-letter">&nbsp;</div>
        <div class="interest-letter">&nbsp;</div>
        <div class="interest-letter">&nbsp;</div>
        <div class="interest-letter">a</div>
        <div class="interest-letter">r</div>
        <div class="interest-letter">t</div>
        <div class="interest-letter">i</div>
        <div class="interest-letter">s</div>
        <div class="interest-letter">t</div>
        <div class="interest-letter">i</div>
        <div class="interest-letter">c</div>
    </div>

    <div class="spacer"></div>

    <p>What interests me.</p>
    <p>Software Development (links)</p>
    <p>Music and DJing (parallax images links)</p>
    <p>Mixology (horizontal photo cards)</p>
</div>

<style lang="scss">
    .what-interests-me {
        p {
            font-size: 2.5vw;
            font-weight: 400;
        }
    }

    .spacer {
        padding-bottom: 4rem;
    }

    .interest-bold-word {
        font-size: 2.6vw;
        font-weight: 800;
        margin: 0;
        line-height: 0;
        display: flex;
        gap: 0;
    }
</style>
