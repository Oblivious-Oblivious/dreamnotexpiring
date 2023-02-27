import { defineConfig } from "astro/config";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    integrations: [svelte()],
});

// TODO Add vercel analytics
// TODO Possibly add a CDN
// TODO Add gsap and barbajs

// import barba from "@barba/core";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
