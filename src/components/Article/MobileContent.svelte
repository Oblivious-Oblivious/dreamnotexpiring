<script>
    export let headline;
    export let description;

    import { onMount } from "svelte";
    import { gsap } from "gsap/dist/gsap";

    import MobileLine from "./MobileLine.svelte";

    let headline_element;
    let description_element;

    onMount(() => {
        gsap.from([headline_element, description_element], {
            delay: 2,
            duration: 0.75,
            opacity: 0,
        });
    });
</script>

<br><br>
<div bind:this={headline_element} class="headline">
    {headline}
</div>
<MobileLine/>
<div bind:this={description_element} class="description">
    {description}
    <slot/>
</div>

<style>
    .headline {
        display: flex;
        font-family: var(--display-font);
        font-size: 8vw;
        text-align: center;
    }

    .description {
        font-size: 5vw;
        text-align: justify;
    }
</style>
