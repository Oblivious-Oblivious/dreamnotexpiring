<script>
  import { onMount } from "svelte";
  import MobileArticle from "@components/Article/MobileArticle.svelte";
  import MobileTitle from "@components/Article/MobileTitle.svelte";
  import MobileIntro from "@components/Article/MobileIntro.svelte";
  import MobileContent from "@components/Article/MobileContent.svelte";
  import MobileTechnology from "@components/Article/MobileTechnology.svelte";
  import MobileCopyright from "@components/Article/MobileCopyright.svelte";

  onMount(() => {
    window.dispatchEvent(new CustomEvent("on-mobile-about"));
  });
</script>

<MobileArticle number="no. 2" date="2021 - PRESENT">
  <MobileTitle
    name="CSPEC"
    link="https://github.com/Oblivious-Oblivious/cSpec"
    link_type="GitHub"
  />

  <MobileIntro
    content="
        A lightweight, compile time unit testing library
        for TDD and BDD models inspired from ruby's rspec.
    "
  />

  <MobileContent headline="Technologies used" description="">
    <MobileTechnology
      title="C language"
      link="https://openlibrary.org/books/OL4558528M/The_C_programming_language"
      role="MAIN LANGUAGE"
    />
  </MobileContent>

  <MobileContent headline="" description="">
    <div class="videos">
      <video autoplay muted loop playsinline>
        <source src="/video/cspec.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </MobileContent>
</MobileArticle>

<MobileCopyright />

<style>
  .videos {
    display: flex;
    gap: 1vw;
    width: 100%;
  }

  video {
    width: 100%;
    box-shadow: var(--neumorphic-shadow2);
    border-radius: 0.5vw;
  }
</style>
