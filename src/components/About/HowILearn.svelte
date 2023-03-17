<script>
    import { onMount } from "svelte";

    onMount(() => {
        // gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".how-i-learn", {
            opacity: 0,
        }, {
            opacity: 1,
            autoAlpha: 1,
        });
    });
</script>

<div class="how-i-learn" style="visibility: hidden;">
    <p>How I learn.</p>
    <p>Horizontal graph, animate line</p>
    <p>2012-2016 - (Ascent) - watch a video tutorial</p>
    <p>2016-2017 - (Golden Years) - combine knowledge, ambitiously create</p>
    <p>2017-2019 - (Deep Understanding) - read a book</p>
    <p>2019-2021 - (Dread/Despair/Hate) - stare at the problem</p>
    <p>2021-Present - (Light) - visualize the result, work backwards toward the solution</p>
    <p>Show full diagram in the end</p>
</div>

<style lang="scss">
    .how-i-learn {
        p {
            font-size: 2.5vw;
            font-weight: 400;
        }
    }
</style>
