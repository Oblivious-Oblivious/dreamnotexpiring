<script>
  export let current_page;

  import { onMount } from "svelte";

  onMount(() => {
    if (current_page === "work") {
      window.dispatchEvent(new CustomEvent("on-mobile-work"));
    } else if (current_page === "about") {
      window.dispatchEvent(new CustomEvent("on-mobile-about"));
    }
  });
</script>
