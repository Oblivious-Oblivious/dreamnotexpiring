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

  <MobileIntro
    content="
        Basically using any hipster new techonlogy I can find.
    "
  />

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

  <MobileContent headline="Why all the new stuff ?" description="Why not ?" />

  <MobileContent
    headline="Svelte as a framework"
    description="
            The Svelte framework provides a radical new approach to working
            with UI development on the web.  As a compiler, Svelte optimizes
            many of the problems that runtime libraries produce mainly in
            regard to speed.  For state management Svelte re-evaluates DOM
            changes without virtual middleware, and instead updates the DOM
            directly.  Since the result of the compilation is what is called
            'framework-less' vanilla javascript one takes advantage of all
            modern component based separation without any of the overhead.
        "
  />

  <MobileContent
    headline="Astro as a meta-framework"
    description="
            Picking a meta-framework depends heavily on the type of web
            application one might be working on.  Usually there is no cookie
            cutter framework case for everything, some apps fit better with
            an MPA some with SPAs, others with server side rendering or edge
            computing.  This is not the case with the Astro framework.
            Astro's new update to version 2 solidified this impressive piece
            of software as a new wave of shipping and deploying websites.
            With astro, it is possible to combine multiple component libraries,
            use content collections like markdown or jsx, and now use hybrid
            rendering techniques to employ, truly, the fastest meta-framework
            solution ever created.  The part that was most revolutionary was
            the implementation of progressive hydration with the use of
            astro islands of dynamic components in the 'sea' of static,
            non-interactive html.  That way most of the website remains
            javascript-free while parts that need client-side dynamic
            behaviour can be rendered accordingly achieving amazing
            performance.  Even though my website does not use this idea to
            its full potential, it is still a concept that will transform
            the way do web development for the forseable future.
        "
  />

  <MobileContent
    headline="Use of GSAP animations"
    description="
            An exciting website needs interactivity, interesting visual
            elements and animation to bring components to life.  A distinct
            design language for a website is no longer enough to present
            uniqueness and so innovative animation ideas become more and more
            important.  The bread and butter of `dreamnotexpiring` in terms
            of animations is GSAP (obviously).  Here almost every part of the
            library is used from timelines to keyframes, easings, scroll-triggered
            animations, fancy page transitions with swupjs.  Again following
            the theme around speed and performance, GSAP is chosen simply for
            the ease of use and incredible performance that allows complex
            animations without lags, even for the slowest of computers.
        "
  />

  <MobileContent
    headline="Some very new libraries"
    description="
            Smooth scrolling introduces a refreshing layer of eye (and scroll)
            candy when navigating a website.  Most solutions however create
            problems in implementation.  Libraries like smooth-scrollbar,
            or locomotive rely on scroll jacking, ScrollSmoother from GSAP,
            is only an extension on ScrollTrigger and is problematic with
            horizontal scrollers (especially on Safari).  For the purposes
            of this website `Lenis` was chosen.  This new library does not
            hijack the scroll behaviour, but instead extends the native
            mechanism to behave smoothly.  It is now possible to layer
            animations, with both horizontal and vertical scrolling, as well
            as position elements as fixed, since there is no `scrolling layer`
            over the scrollable content that other libraries need.
        "
  />
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
