<script>
  import { onMount } from "svelte";
  import MobileSoftware from "./WhatInterestsMe/MobileSoftware.svelte";
  import MobileDjing from "./WhatInterestsMe/MobileDjing.svelte";
  import MobileMixology from "./WhatInterestsMe/MobileMixology.svelte";

  onMount(() => {
    gsap.to(".what-interests-me", {
      autoAlpha: 1,
    });
  });
</script>

<div class="what-interests-me" style="visibility: hidden;">
  <MobileSoftware />

  <div class="spacer"></div>
  <div class="spacer"></div>

  <MobileDjing />

  <div class="spacer"></div>
  <div class="spacer"></div>
  <div class="spacer"></div>
  <div class="spacer"></div>

  <MobileMixology />
</div>

<style>
  .what-interests-me {
    overflow: hidden;
  }

  .spacer {
    padding: 4vw 0;
  }
</style>
