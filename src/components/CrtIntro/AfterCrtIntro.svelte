<script>
  import { onMount } from "svelte";

  onMount(() => {
    gsap.fromTo(
      ".main-content",
      {
        autoAlpha: 0,
      },
      {
        delay: 4,
        duration: 0.8,
        ease: "power2.inOut",
        autoAlpha: 1,
        onStart: () => {
          ScrollTrigger.refresh();
          window.dispatchEvent(new CustomEvent("scrolling-stop"));
          window.scrollTo(0, 0);
        },
        onComplete: () => {
          document.querySelector(".intro-wrapper").style.display = "none";
          window.dispatchEvent(new CustomEvent("scrolling-start"));
        },
      }
    );
  });
</script>
