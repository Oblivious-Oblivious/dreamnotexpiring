<script>
    import { onMount } from "svelte";
    import gsap from "gsap";
    // import ScrollTrigger from "gsap/ScrollTrigger";
    
    onMount(() => {
        // gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".computer-related-topics-i-enjoy", {
            yPercent: 100,
            opacity: 0,
        }, {
            yPercent: 0,
            visibility: "visible",
            opacity: 1,
        });
    });
</script>

<div class="computer-related-topics-i-enjoy">
    <p>Computer related topics I enjoy.</p>
    <p>* Penetration Testing</p>
    <p>* Interpreters</p>
    <p>* Object Oriented Programming</p>
    <p>* Garbage Collectors</p>
    <p>* Obfuscated Quines</p>
</div>

<style lang="scss">
    .computer-related-topics-i-enjoy {
        padding-bottom: 27vh;
        visibility: hidden;

        p {
            font-size: 2.5vw;
            font-weight: 500;
        }
    }
</style>
