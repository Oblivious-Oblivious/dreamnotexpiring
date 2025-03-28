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

<MobileArticle number="no. 6" date="2020 - 2021">
  <MobileTitle
    name="ZIRCON"
    link="https://github.com/Oblivious-Oblivious/Zircon"
    link_type="GitHub"
  />

  <MobileIntro
    content="
        A small parser for object oriented programming in C.
    "
  />

  <MobileContent headline="Technologies used" description="">
    <MobileTechnology
      title="C language"
      link="https://openlibrary.org/books/OL4558528M/The_C_programming_language"
      role="MAIN LANGUAGE"
    />
    <MobileTechnology
      title="yacc"
      link="https://linux.die.net/man/1/yacc"
      role="GRAMMAR PARSER"
    />
    <MobileTechnology
      title="cDataLib"
      link="https://github.com/Oblivious-Oblivious/cDataLib"
      role="DATA STRUCTURES"
    />
  </MobileContent>

  <MobileContent headline="" description="">
    <div class="photos">
      <div class="photo">
        <img src="/img/zircon1.jpg" alt="Zircon" draggable="false" />
      </div>
      <div class="photo">
        <img src="/img/zircon2.jpg" alt="Zircon" draggable="false" />
      </div>
    </div>
  </MobileContent>

  <MobileContent
    headline="Description"
    description="
            Zircon is the first of experiments on building a viable object
            oriented system that is efficient in speed and memory.  With
            zircon I hoped to extend C's capabilities to inlude pure objects
            much the same way Objective-C implements this today.  The changes
            are minimal, and are added using the yacc syntax tree itself. Much
            knowledge was gained especially in how complicated grammars are set up.
        "
  />
</MobileArticle>

<MobileCopyright />

<style>
  .photos {
    display: flex;
    flex-direction: column;
    gap: 10vw;
    width: 100%;
  }

  .photo img {
    width: 100%;
    box-shadow: var(--neumorphic-shadow3);
    border-radius: 0.4vw;
  }
</style>
