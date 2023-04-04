<script>
    export let number;
    export let date;
    
    import { onMount } from "svelte";

    onMount(() => {
        gsap.to(".article", {
            autoAlpha: 1,
        });
    });
</script>

<div class="article" style="
    --top-left-content: '{number}';
    --top-right-content: '{date}';
    visibility: hidden;"
>
    <div class="article-content">
        <slot/>
    </div>
</div>

<style>
    .article {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80vw;
        transform: translate(10vw, 7vw);
    }

    .article:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        background: url("/img/vertical-border.png") repeat-y top left,
                    url("/img/vertical-border.png") repeat-y top right;
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
        width: 62vw;
    }

    .article-content:before,
    .article-content:after {
        font-size: 1.4vw;
        font-style: italic;
    }

    .article-content:before {
        content: var(--top-left-content);
        position: absolute;
        top: 1.4vw;
        left: 3.2vw;
    }

    .article-content:after {
        content: var(--top-right-content);
        position: absolute;
        top: 1.4vw;
        right: 3.2vw;
    }
</style>
