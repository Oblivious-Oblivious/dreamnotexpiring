<script>
    export let name;
    export let link;
    export let link_type;
    
    import { onMount } from "svelte";

    onMount(() => {
        gsap.timeline({
            delay: 0.2,
        })
        .from(".title", {
            duration: 0.4,
            clipPath: "inset(0 100% 0 100%)",
        });
    });
</script>

<div class="title">
    <div class="name">
        {name}
    </div>
</div>
<div class="link">
    <a href={link} target="_blank" rel="noopener noreferrer" draggable="false">
        &lt;{link_type}&gt;
    </a>
</div>

<style>
    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .name {
        font-size: 16vw;
        font-family: var(--display-font);
        font-style: italic;
    }

    .link {
        font-size: 7vw;
        animation: under_line 1s infinite;
        z-index: 9999;
    }

    @keyframes under_line {
        0% {
            text-decoration: none;
        }
        50% {
            text-decoration: underline;
        }
        100% {
            text-decoration: none;
        }
    }
</style>
