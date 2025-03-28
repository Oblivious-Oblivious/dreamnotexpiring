<script>
  import { onMount } from "svelte";

  onMount(() => {
    window.dispatchEvent(new CustomEvent("on-mobile-work"));

    gsap.from(".work-line", {
      delay: 0.2,
      duration: 0.7,
      opacity: 0,
      width: "0%",
      stagger: {
        amount: 2,
      },
    });
    gsap.from(".work-title, .work-date", {
      delay: 0.2,
      duration: 0.4,
      xPercent: 20,
      clipPath: "inset(0 0 0 100%)",
      stagger: {
        amount: 2.5,
      },
      ease: "power2.out",
    });
  });
</script>

<div class="work-section">
  <a href="/mobile/work/margaret" draggable="false">
    <div class="work">
      <div class="work-title">Margaret</div>
      <div class="work-date">2022 - Present</div>
    </div>
  </a>
  <div class="work-line"></div>

  <a href="/mobile/work/cspec" draggable="false">
    <div class="work">
      <div class="work-title">cSpec</div>
      <div class="work-date">2021 - Present</div>
    </div>
  </a>
  <div class="work-line"></div>

  <a href="/mobile/work/dreamnotexpiring" draggable="false">
    <div class="work">
      <div class="work-title">dreamnotexpiring</div>
      <div class="work-date">2023</div>
    </div>
  </a>
  <div class="work-line"></div>

  <a href="/mobile/work/salsa" draggable="false">
    <div class="work">
      <div class="work-title">Salsa</div>
      <div class="work-date">2023</div>
    </div>
  </a>
  <div class="work-line"></div>

  <a href="/mobile/work/aerocss" draggable="false">
    <div class="work">
      <div class="work-title">AeroCSS</div>
      <div class="work-date">2023</div>
    </div>
  </a>
  <div class="work-line"></div>

  <a href="/mobile/work/zircon" draggable="false">
    <div class="work">
      <div class="work-title">Zircon</div>
      <div class="work-date">2020 - 2021</div>
    </div>
  </a>
  <div class="work-line"></div>

  <a href="/mobile/work/emeralds" draggable="false">
    <div class="work">
      <div class="work-title">Emeralds</div>
      <div class="work-date">2021</div>
    </div>
  </a>
  <div class="work-line"></div>

  <a href="/mobile/work/dynadesign" draggable="false">
    <div class="work">
      <div class="work-title">DynaDesign</div>
      <div class="work-date">2021 - ?</div>
    </div>
  </a>
  <div class="work-line"></div>

  <a href="/mobile/work/skeleton" draggable="false">
    <div class="work">
      <div class="work-title">Skeleton</div>
      <div class="work-date">2020 - 2021</div>
    </div>
  </a>
  <div class="work-line"></div>

  <a href="/mobile/work/clitterbin" draggable="false">
    <div class="work">
      <div class="work-title">cLitterBin</div>
      <div class="work-date">2020</div>
    </div>
  </a>
  <div class="work-line"></div>

  <a href="/mobile/work/cdatalib" draggable="false">
    <div class="work">
      <div class="work-title">cDataLib</div>
      <div class="work-date">2019 - 2020</div>
    </div>
  </a>
  <div class="work-line"></div>

  <a href="/mobile/work/artsxedio" draggable="false">
    <div class="work">
      <div class="work-title">ArtSxedio</div>
      <div class="work-date">2018</div>
    </div>
  </a>
  <div class="work-line"></div>

  <a href="/mobile/work/princeofpersia" draggable="false">
    <div class="work">
      <div class="work-title">POP on Scratch</div>
      <div class="work-date">2016</div>
    </div>
  </a>
  <div class="work-line"></div>

  <a href="/mobile/work/multicore" draggable="false">
    <div class="work">
      <div class="work-title">Multicore</div>
      <div class="work-date">2015 - 2016</div>
    </div>
  </a>
</div>

<style>
  .work-section {
    display: flex;
    flex-direction: column;
    height: min-content;
    width: 100%;
    padding: 10vw 0;
  }

  .work {
    display: flex;
    width: 100%;
    padding: 10vw 0;
    color: var(--fg-color);
    overflow: hidden;
  }

  .work-title {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    font-family: var(--display-font);
    font-size: 6vw;
    font-weight: 300;
    text-transform: uppercase;
    padding-left: 6vw;
  }

  .work-date {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    font-family: var(--display-font);
    font-size: 6vw;
    font-weight: 300;
    font-style: italic;
    text-transform: uppercase;
    padding-right: 6vw;
  }

  .work-line {
    height: 1px;
    background-color: var(--fg-color);
    z-index: 1;
    transform-origin: left top;
  }

  a {
    z-index: 9999;
  }
</style>
