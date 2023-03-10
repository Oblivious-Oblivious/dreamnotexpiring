<script>
    import { onMount } from "svelte";
    import gsap from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";

    var years_of_experience = new Date().getUTCFullYear() - 2012;
    
    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".intro-description p", {
            yPercent: 100,
            opacity: 0,
        }, {
            yPercent: 0,
            visibility: "visible",
            opacity: 1,
            stagger: 0.05,
        });
    });
</script>

<div class="intro-description">
    <p>I am a software developer and designer</p>
    <p>blending technical and artistic skills with</p>
    <p><span>{years_of_experience}</span> years of building interactive</p>
    <p>experiences.</p>
    <br>
    <p>I vow to create dynamic systems that</p>
    <p>interact in meaningful and internalized</p>
    <p>ways with the individual.</p>
</div>

<style lang="scss">
    div {
        padding-top: 25vh;
        height: 300vh;
        visibility: hidden;

        span {
            font-style: italic;
        }

        transform: translate(17vw);
    }
</style>
