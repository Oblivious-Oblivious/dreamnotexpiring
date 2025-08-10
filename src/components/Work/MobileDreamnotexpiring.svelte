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

<MobileArticle number="no. 3" date="2023">
  <MobileTitle
    name="SELF"
    link="https://github.com/Oblivious-Oblivious/dreamnotexpiring"
    link_type="Website"
  />

  <MobileIntro content="My portfolio" />

  <MobileContent headline="Technologies used" description="">
    <MobileTechnology
      title="Svelte"
      link="https://svelte.dev"
      role="FRAMEWORK"
    />
    <MobileTechnology
      title="Astro"
      link="https://astro.build"
      role="META-FRAMEWORK"
    />
    <MobileTechnology
      title="React"
      link="https://react.dev"
      role="SOUND EFFECTS"
    />
    <MobileTechnology
      title="PostCSS"
      link="https://postcss.org"
      role="CSS TRANSFORMER"
    />
    <MobileTechnology
      title="GSAP"
      link="https://greensock.com/gsap/"
      role="ANIMATIONS"
    />
    <MobileTechnology
      title="ScrollTrigger"
      link="https://greensock.com/scrolltrigger/"
      role="SCROLL ANIMATIONS"
    />
    <MobileTechnology
      title="Lenis"
      link="https://lenis.studiofreight.com"
      role="SMOOTH SCROLLING"
    />
    <MobileTechnology
      title="Swup"
      link="https://swup.js.org"
      role="PAGE TRANSITIONS"
    />
    <MobileTechnology
      title="SplitType"
      link="https://github.com/lukePeavey/SplitType"
      role="TEXT SPLITTING"
    />
    <MobileTechnology
      title="Vercel"
      link="https://vercel.com/"
      role="DEPLOYMENT"
    />
  </MobileContent>

  <MobileContent headline="" description="">
    <div class="videos">
      <video width="1280" height="720" autoplay muted loop playsinline>
        <source src="/video/crt-intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video width="1280" height="720" autoplay muted loop playsinline>
        <source src="/video/work.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video width="1280" height="720" autoplay muted loop playsinline>
        <source src="/video/about.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </MobileContent>
</MobileArticle>

<MobileCopyright />

<style>
  .videos {
    display: flex;
    flex-direction: column;
    gap: 10vw;
    width: 100%;
  }

  video {
    width: 100%;
    box-shadow: var(--neumorphic-shadow2);
    border-radius: 0.5vw;
  }
</style>
