<script>
    import { onMount } from "svelte";
    import SoftwareLinks from "./WhatInterestsMe/SoftwareLinks.svelte";
    import ParallaxMixcloudLinks from "./WhatInterestsMe/ParallaxMixcloudLinks.svelte";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.set(".what-interests-me", {
            y: "-25vh",
        });

        gsap.set(".interest-bold-word", {
            xPercent: 359,
        });

        gsap.fromTo(".what-interests-me", {
            opacity: 0,
        }, {
            opacity: 1,
            autoAlpha: 1,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: ".interest-bold-word",
                endTrigger: ".how-i-learn",
                start: "top 18%",
                end: "+=2500",
                // markers: true,
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
            delay: 0.8,
            opacity: 0,
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

<div class="what-interests-me" style="visibility: hidden;">
    <div class="interest-bold-word">
        <div class="interest-technical">
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
        <div class="interest-interactive">
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
        <div class="interest-artistic">
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
    </div>

    <div class="spacer"></div>

    <SoftwareLinks client:load/>

    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>

    <ParallaxMixcloudLinks client:load/>

    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="mixology-horizontal-cards">
        <!-- TODO Add mouse hover tilt -->
    </div>
</div>

<style lang="scss">
    .spacer {
        padding-bottom: 8rem;
    }

    .interest-bold-word {
        position: absolute;
        z-index: 9999;

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
    }

    .mixology-horizontal-cards {
        display: flex;
    }
</style>
