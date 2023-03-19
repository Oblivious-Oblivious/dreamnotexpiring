<script>
    import { onMount } from "svelte";
    import InterestBoldWord from "./WhatInterestsMe/InterestBoldWord.svelte";
    import SoftwareLinks from "./WhatInterestsMe/SoftwareLinks.svelte";
    import ParallaxMixcloudLinks from "./WhatInterestsMe/ParallaxMixcloudLinks.svelte";

    onMount(() => {
        gsap.set(".what-interests-me", {
            y: "-25vh",
        });

        gsap.fromTo(".what-interests-me", {
            opacity: 0,
        }, {
            opacity: 1,
            autoAlpha: 1,
        });
    });
</script>

<div class="what-interests-me" style="visibility: hidden;">
    <InterestBoldWord client:load/>

    <div class="spacer"></div>

    <SoftwareLinks client:load/>

    <div class="spacer"></div>
    <div class="spacer"></div>

    <ParallaxMixcloudLinks client:load/>

    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>

    <!-- TODO Add mouse hover tilt -->
    <div class="mixology-horizontal-cards">
    </div>
</div>

<style lang="scss">
    .spacer {
        padding: 8rem 0;
    }

    .mixology-horizontal-cards {
        display: flex;
    }
</style>
