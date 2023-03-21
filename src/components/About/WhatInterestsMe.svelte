<script>
    import { onMount } from "svelte";
    import InterestBoldWord from "./WhatInterestsMe/InterestBoldWord.svelte";
    import Software from "./WhatInterestsMe/Software.svelte";
    import Djing from "./WhatInterestsMe/Djing.svelte";
    import Mixology from "./WhatInterestsMe/Mixology.svelte";

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

    <Software/>

    <div class="spacer"></div>
    <div class="spacer"></div>

    <Djing/>

    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>

    <Mixology/>
</div>

<style>
    .spacer {
        padding: 8rem 0;
    }
</style>
