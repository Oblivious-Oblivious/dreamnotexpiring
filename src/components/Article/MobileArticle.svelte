<script>
    export let number;
    export let date;
    
    import { onMount } from "svelte";
    import { gsap } from "gsap/dist/gsap";

    onMount(() => {
        gsap.to(".article", {
            autoAlpha: 1,
        });
    });
</script>

<div class="article" style="
    --top-left-content: '{number} - {date}';
    --top-right-content: '';
    visibility: hidden;"
>
    <div class="article-content">
        <slot/>
        <br><br><br><br>
    </div>
</div>

<style>
    .article {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        padding-top: 10vw;
    }

    .article:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        background-size: 1.8vw;
        transform: translateY(-1vw);
        z-index: -1;
        filter: invert(var(--invert-value));
    }

    .article-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 90vw;
    }

    .article-content:before,
    .article-content:after {
        font-size: 1.4vw;
        font-style: italic;
    }

    .article-content:before {
        content: var(--top-left-content);
        position: flex;
        top: 20vw;
        left: 6vw;
        font-size: 5vw;
    }

    .article-content:after {
        content: var(--top-right-content);
        position: flex;
        top: 20vw;
        right: 6vw;
        font-size: 5vw;
    }
</style>
