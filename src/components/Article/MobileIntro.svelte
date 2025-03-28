<script>
  export let content;

  import MobileLine from "./MobileLine.svelte";
  import { onMount } from "svelte";
  import SplitType from "split-type";

  onMount(() => {
    new SplitType(".intro-content", {
      types: "words",
    });

    gsap
      .timeline({
        delay: 0.45,
      })
      .from(".intro-content .word", {
        duration: 0.0001,
        autoAlpha: 0,
        stagger: 0.1,
      });
  });
</script>

<MobileLine />
<div class="intro">
  <div class="intro-content">
    {content}
  </div>
</div>
<MobileLine />

<style>
  .intro {
    display: flex;
    font-family: var(--display-font);
    font-size: 6vw;
    text-align: center;
  }
</style>
