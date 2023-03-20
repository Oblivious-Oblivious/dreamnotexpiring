<script>
    import { onMount } from "svelte";
    import InterestBoldWord from "./WhatInterestsMe/InterestBoldWord.svelte";
    import SoftwareLinks from "./WhatInterestsMe/SoftwareLinks.svelte";
    import ParallaxMixcloudLinks from "./WhatInterestsMe/ParallaxMixcloudLinks.svelte";
    import HorizontalMixologyCards from "./WhatInterestsMe/HorizontalMixologyCards.svelte";

    onMount(() => {
        gsap.set(".what-interests-me", {
            y: "-25vh",
            autoAlpha: 1,
        });
    });
</script>

<div class="what-interests-me" style="visibility: hidden;">
    <InterestBoldWord/>

    <div class="spacer"></div>

    <SoftwareLinks/>

    <div class="spacer"></div>
    <div class="spacer"></div>

    <ParallaxMixcloudLinks/>

    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>

    <HorizontalMixologyCards/>
</div>

<style>
    .spacer {
        padding: 8rem 0;
    }
</style>
