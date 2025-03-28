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

<MobileArticle number="no. 9" date="2020 - 2021">
  <MobileTitle
    name="SKELETON"
    link="https://github.com/Oblivious-Oblivious/skeleton"
    link_type="GitHub"
  />

  <MobileIntro
    content="
        A very minimal http server api serving as a
        platform for adding middleware incrementally.
    "
  />

  <MobileContent headline="Technologies used" description="">
    <MobileTechnology
      title="Crystal"
      link="https://crystal-lang.org"
      role="MAIN LANGUAGE"
    />
    <MobileTechnology
      title="GitHub Actions"
      link="https://docs.github.com/en/actions"
      role="CI"
    />
  </MobileContent>

  <MobileContent headline="" description="">
    <div class="photos">
      <div class="photo">
        <img src="/img/skeleton1.jpg" alt="Skeleton" draggable="false" />
      </div>
      <div class="photo">
        <img src="/img/skeleton2.jpg" alt="Skeleton" draggable="false" />
      </div>
      <div class="photo">
        <img src="/img/skeleton3.jpg" alt="Skeleton" draggable="false" />
      </div>
      <div class="photo">
        <img src="/img/skeleton4.jpg" alt="Skeleton" draggable="false" />
      </div>
    </div>
  </MobileContent>

  <MobileContent
    headline="Description"
    description="
            Skeleton is a simplistic web framework for bootstraping http
            servers for the backend.  It supports most REST operations,
            with support for adding middleware such as CORS services, or
            route handlers.  It is extremely efficient and takes the role
            of a foundational starting point for back end solutions.
        "
  />
</MobileArticle>

<MobileCopyright />

<style>
  .photos {
    display: flex;
    flex-direction: column;
    gap: 10vw;
  }

  .photo img {
    width: 100%;
    box-shadow: var(--neumorphic-shadow3);
    border-radius: 0.4vw;
  }
</style>
