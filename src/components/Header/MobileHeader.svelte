<script>
  import { onMount } from "svelte";

  let link_text = "About";
  let path = "about";

  onMount(() => {
    window.addEventListener("on-mobile-about", () => {
      link_text = "Back";
      path = "";
    });
    window.addEventListener("on-mobile-work", () => {
      link_text = "About";
      path = "about";
    });
  });
</script>

<header>
  <nav>
    <ul>
      <li>
        <div class="oblivious">Oblivious</div>
      </li>
      <li>
        <a href="/mobile/{path}" draggable="false">{link_text}</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    z-index: 99999;
    padding-top: 5vw;
    width: 100vw;
    font-weight: 500;
    font-size: 5vw;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  ul {
    display: flex;
    justify-content: space-between;
    gap: 55vw;
  }

  a {
    display: flex;
    position: relative;
    width: fit-content;
  }
</style>
