<script>
  export let name;
  export let link;
  export let link_type;

  import { onMount } from "svelte";

  onMount(() => {
    gsap
      .timeline({
        delay: 0.3,
      })
      .from(".title", {
        duration: 0.65,
        clipPath: "inset(0 100% 0 100%)",
      });

    document.querySelector(".link").addEventListener("mouseenter", () => {
      window.dispatchEvent(
        new CustomEvent("cursor-hover", {
          detail: "READ",
        })
      );
    });
    document.querySelector(".link").addEventListener("mouseleave", () => {
      window.dispatchEvent(new CustomEvent("cursor-reset"));
    });
  });
</script>

<div class="title">
  <div class="name">
    {name}
  </div>
  <div class="link">
    <a href={link} target="_blank" rel="noopener noreferrer" draggable="false">
      &lt;{link_type}&gt;
    </a>
  </div>
</div>

<style>
  .title {
    display: flex;
    align-items: baseline;
  }

  .name {
    font-size: 7vw;
    font-family: var(--display-font);
    font-style: italic;
  }

  .link {
    font-size: 1.5vw;
    animation: under_line 1s infinite;
  }

  @keyframes under_line {
    0% {
      text-decoration: none;
    }
    50% {
      text-decoration: underline;
    }
    100% {
      text-decoration: none;
    }
  }

  a:hover {
    color: var(--accent-color);
  }
</style>
