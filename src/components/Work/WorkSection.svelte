<script>
    import { onMount } from "svelte";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        gsap.to(".work-section", {
            autoAlpha: 1,
        });

        const works = gsap.utils.toArray(".work");

        gsap.to(".work", {
            xPercent: (-100 * works.length) - 28,
            scrollTrigger: {
                id: "work-scrolltrigger",
                trigger: ".work-section",
                pin: true,
                scrub: true,
                end: "+=5000",
            },
        });
    });
</script>

<div class="work-section" style="visibility: hidden;">
    <div class="work">
        <h1>1. Margaret</h1>
    </div>
    <div class="work">
        <h1>2. dreamnotexpiring</h1>
    </div>
    <div class="work">
        <h1>3. Salsa: Pomodoro Timer</h1>
    </div>
    <div class="work">
        <h1>4. AeroCSS</h1>
    </div>
    <div class="work">
        <h1>5. cSpec</h1>
    </div>
    <div class="work">
        <h1>6. Zircon</h1>
    </div>
    <div class="work">
        <h1>7. Emeralds</h1>
    </div>
    <div class="work">
        <h1>8. DynaDesign</h1>
    </div>
    <div class="work">
        <h1>9. Skeleton</h1>
    </div>
    <div class="work">
        <h1>10. ArtSxedio</h1>
    </div>
    <div class="work">
        <h1>11. cLitterbin</h1>
    </div>
    <div class="work">
        <h1>12. cDataLib</h1>
    </div>
    <div class="work">
        <h1>13. MultiCore</h1>
    </div>
    <div class="work">
        <h1>14. Prince of Persia</h1>
    </div>
</div>

<style>
    .work-section {
        display: flex;
        gap: 2vw;
        width: 560vh;
        height: 100vh;
        align-items: center;
        justify-content: center;
        transform: translateX(39.5vw);
    }

    .work {
        position: relative;
        overflow: hidden;
        display: flex;
        width: 40vh;
        height: 52vh;
        background-color: red;
        align-items: center;
        justify-content: center;
    }
</style>
