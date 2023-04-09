<script>
    export let title;
    export let link;
    export let role;

    import { onMount } from "svelte";
    import { gsap } from "gsap/dist/gsap";

    let technology_element;
    let technology_link;

    const clickme = () => technology_link.click();

    onMount(() => {
        gsap.from(technology_element, {
            delay: 2,
            duration: 0.75,
            opacity: 0,
        });
    });
</script>

<div bind:this={technology_element} class="technology">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="technology-link" on:click={clickme}>
        <div class="grain">
            <div class="grain-pattern"></div>
        </div>
        <a bind:this={technology_link} href={link} target="_blank" rel="noopener noreferrer" draggable="false">{title}</a>
    </div>
    <div class="technology-separator">............................................................................</div>
    <div class="technology-role">
        <div class="grain">
            <div class="grain-pattern"></div>
        </div>
        <div>{role}</div>
    </div>
</div>

<style>
    .technology {
        display: flex;
        flex-direction: column;
        font-size: 5vw;
        text-align: left;
        line-height: 0.75;
    }

    .grain {
        width: 100%;
        opacity: 0.03;
    }

    .grain-pattern {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url("/img/grain.gif");
    }

    a {
        font-style: italic;
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
        padding-left: 1vw;
        transform: translateY(-100%);
    }
</style>
