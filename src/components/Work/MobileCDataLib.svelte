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

<MobileArticle number="no. 11" date="2019 - 2020">
  <MobileTitle
    name="CDATALIB"
    link="https://github.com/Oblivious-Oblivious/cDataLib"
    link_type="GitHub"
  />

  <MobileIntro
    content="
        A helper function library writter in C
        containing multiple efficient data structures.
    "
  />

  <MobileContent headline="Technologies used" description="">
    <MobileTechnology
      title="C language"
      link="https://openlibrary.org/books/OL4558528M/The_C_programming_language"
      role="MAIN LANGUAGE"
    />
    <MobileTechnology
      title="cSpec"
      link="https://github.com/Oblivious-Oblivious/cSpec"
      role="TESTING"
    />
  </MobileContent>

  <MobileContent headline="" description="">
    <div class="photos">
      <div class="photo">
        <img src="/img/cdatalib1.jpg" alt="cDataLib" draggable="false" />
      </div>
    </div>
  </MobileContent>

  <MobileContent
    headline="Description"
    description="
            cDataLib brings some cross platform, higher level features
            meant to be used mainly on embedded as well as high efficient
            code bases.  It uses `Emerald` configured libraries.
        "
  />
</MobileArticle>

<MobileCopyright />

<style>
  .photos {
    display: flex;
    gap: 1vw;
    width: 100%;
  }

  .photo img {
    width: 100%;
    box-shadow: var(--neumorphic-shadow3);
    border-radius: 0.4vw;
  }
</style>
