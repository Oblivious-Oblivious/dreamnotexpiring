<script>
  import { onMount } from "svelte";
  import { underline_value } from "@persistence/underline_value";
  import Article from "@components/Article/Article.svelte";
  import Title from "@components/Article/Title.svelte";
  import Intro from "@components/Article/Intro.svelte";
  import Content from "@components/Article/Content.svelte";
  import Technology from "@components/Article/Technology.svelte";
  import Copyright from "@components/Article/Copyright.svelte";

  onMount(() => {
    $underline_value = "";
  });
</script>

<Article number="no. 3" date="2023">
  <Title
    name="DREAMNOTEXPIRING"
    link="https://github.com/Oblivious-Oblivious/dreamnotexpiring"
    link_type="Website"
  />

  <Intro content="My portfolio" />

  <Content headline="Technologies used" description="">
    <Technology title="Svelte" link="https://svelte.dev" role="FRAMEWORK" />
    <Technology
      title="Astro"
      link="https://astro.build"
      role="META-FRAMEWORK"
    />
    <Technology title="React" link="https://react.dev" role="SOUND EFFECTS" />
    <Technology
      title="PostCSS"
      link="https://postcss.org"
      role="CSS TRANSFORMER"
    />
    <Technology
      title="GSAP"
      link="https://greensock.com/gsap/"
      role="ANIMATIONS"
    />
    <Technology
      title="ScrollTrigger"
      link="https://greensock.com/scrolltrigger/"
      role="SCROLL-TIED ANIMATIONS"
    />
    <Technology
      title="Lenis"
      link="https://lenis.studiofreight.com"
      role="SMOOTH SCROLLING"
    />
    <Technology
      title="Swup"
      link="https://swup.js.org"
      role="PAGE TRANSITIONS"
    />
    <Technology
      title="SplitType"
      link="https://github.com/lukePeavey/SplitType"
      role="TEXT SPLITTING"
    />
    <Technology title="Vercel" link="https://vercel.com/" role="DEPLOYMENT" />
  </Content>

  <Content headline="" description="">
    <div class="videos">
      <video width="1280" height="720" autoplay muted loop>
        <source src="/video/crt-intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video width="1280" height="720" autoplay muted loop>
        <source src="/video/work.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video width="1280" height="720" autoplay muted loop>
        <source src="/video/about.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </Content>
</Article>

<Copyright />

<style>
  .videos {
    display: flex;
    gap: 1vw;
    width: 100%;
  }

  video {
    width: 32.2%;
    box-shadow: var(--neumorphic-shadow2);
    border-radius: 0.5vw;
  }
</style>
