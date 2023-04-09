<script>
    export let headline;
    export let description;

    import { onMount } from "svelte";
    import Line from "./Line.svelte";

    let headline_element;
    let description_element;

    onMount(() => {
        gsap.from([headline_element, description_element], {
            delay: 3.1,
            duration: 1.25,
            opacity: 0,
        });
    });
</script>

<br><br>
<div bind:this={headline_element} class="headline">
    {headline}
</div>
<Line/>
<div bind:this={description_element} class="description">
    {description}
    <slot/>
</div>

<style>
    .headline {
        display: flex;
        font-family: var(--display-font);
        font-size: 3vw;
        text-align: center;
    }

    .description {
        font-size: 1.4vw;
        text-align: justify;
    }
</style>
