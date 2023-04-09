<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap/dist/gsap";

    var scrollbar_progress = 0;

    onMount(() => {
        const scroll_tween = gsap.to(".scrollbar", {
            id: "scrollbar-tween",
            paused: true,
            width: "100%",
            ease: "none",
        });

        const update_scroll_bar = () => {
            scrollbar_progress = scrollY / (document.body.scrollHeight - innerHeight);
            if(scrollbar_progress > 0.9985)
                scrollbar_progress = 1;
            else if(scrollbar_progress < 0)
                scrollbar_progress = 0;
            scroll_tween.progress(scrollbar_progress);
        }

        window.addEventListener("resize", update_scroll_bar);
        window.addEventListener("scroll", update_scroll_bar);
    });
</script>

<div class="scrollbar-container">
    <div class="scrollbar"></div>
</div>
<div class="scrollbar-progress">{(scrollbar_progress*100) | 0}%</div>

<style>
    .scrollbar-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 0.3vh;
        border-radius: 50px;
        background-color: var(--bg-color);
        z-index: 9999;
    }

    .scrollbar {
        height: 100%;
        width: 0;
        border-radius: 50px;
        background-color: var(--fg-color);
    }

    .scrollbar-progress {
        position: fixed;
        top: 1vh;
        left: 1vw;
        font-family: var(--display-font);
        font-size: 2.5vw;
        font-weight: 500;
        z-index: 9999;
    }
</style>
