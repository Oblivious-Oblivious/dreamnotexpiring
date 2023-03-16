<script>
    import { onMount } from "svelte";

    onMount(() => {
        // gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".computer-related-topics-i-enjoy", {
            opacity: 0,
        }, {
            opacity: 1,
            autoAlpha: 1,
        });
    });
</script>

<div class="computer-related-topics-i-enjoy" style="visibility: hidden;">
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

        p {
            font-size: 2.5vw;
            font-weight: 500;
        }
    }
</style>
