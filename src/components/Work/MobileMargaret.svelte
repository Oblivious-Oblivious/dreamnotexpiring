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

<MobileArticle number="no. 1" date="2022 - PRESENT">
  <MobileTitle
    name="MARGARET"
    link="https://github.com/Oblivious-Oblivious/margaret"
    link_type="GitHub"
  />

  <MobileIntro
    content="
        An object oriented language system
        based on ruby and smalltalk.
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
    <MobileTechnology
      title="bdwgc"
      link="https://github.com/ivmai/bdwgc"
      role="MEMORY MANAGEMENT"
    />
    <MobileTechnology
      title="Readline"
      link="https://tiswww.case.edu/php/chet/readline/rltop.html"
      role="TERMINAL EMULATION"
    />
  </MobileContent>

  <MobileContent
    headline="Description"
    description="
      Margaret is a modern programming language focused around objects and messages.
      It offers powerful literals, easy to use objects and smalltalk-like message structures.
      Every value in Margaret is treated as an object.
      There are no reserved words and no explicit syntax apart from message sends.
      Uses prototype based objects in the likes of Self or Javascript.
      Uses C-style literals like char, int, float, string.
      Implements tensors and hashes as the only built in, array-like data structures.
      Runs on a portable, lightweight and embeddable stack based VM.
      Draws (some) inpiration from Lua's VM.
    "
  />
</MobileArticle>

<MobileCopyright />
