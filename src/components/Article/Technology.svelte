<script>
    export let title;
    export let link;
    export let role;

    import { onMount } from "svelte";

    let technology_element;

    onMount(() => {
        gsap.from(technology_element, {
            delay: 3.1,
            duration: 1.25,
            opacity: 0,
        });
    });
</script>

<div bind:this={technology_element} class="technology">
    <a href={link} class="technology-link" target="_blank" rel="noopener noreferrer" draggable="false">{title}</a>
    <div class="technology-separator">................................................................................................................................................................................................</div>
    <div class="technology-role">{role}</div>
</div>

<style>
    .technology {
        display: flex;
        flex-direction: column;
        font-size: 1.4vw;
        text-align: left;
        line-height: 0.45;
        padding-top: 0.5vw;
    }

    a {
        font-style: italic;
    }

    a:hover {
        color: var(--accent-color);
    }

    .technology-link {
        font-style: italic;
        font-weight: 500;
        align-self: flex-start;
        background-color: var(--bg-color);
        padding-right: 0.35vw;
        transform: translateY(100%);
    }

    .technology-role {
        font-style: italic;
        font-weight: 700;
        align-self: flex-end;
        background-color: var(--bg-color);
        padding-left: 0.45vw;
        transform: translateY(-100%);
    }
</style>
