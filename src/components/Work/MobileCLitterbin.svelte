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

<MobileArticle number="no. 10" date="2020">
  <MobileTitle
    name="CLITTERBIN"
    link="https://github.com/Oblivious-Oblivious/cLitterBin"
    link_type="GitHub"
  />

  <MobileIntro
    content="
        A garbage collector implementation,
        replacements for malloc alloc realloc and free.
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
    <div class="photos">
      <div class="photo">
        <img src="/img/clitterbin1.jpg" alt="cLitterBin" draggable="false" />
      </div>
      <div class="photo">
        <img src="/img/clitterbin2.jpg" alt="cLitterBin" draggable="false" />
      </div>
    </div>
  </MobileContent>

  <MobileContent
    headline="Description"
    description="
            cLitterBin, is a conservative mark and sweep garbage collector
            that works as a drop in replacement for memory allocators in C.
            It hashes all new memory allocations, increasing the size of the
            bin accordingly.  When the `litter` surpases the available memory
            slots, it triggers a collection.  When collecting it sweeps the
            whole memory space for unreachable pointers, keeps them, and burns
            everything else.  It tries avoiding fragmentation of memory slots
            by rehashing the space with an increase multiplier of 1.5.
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
