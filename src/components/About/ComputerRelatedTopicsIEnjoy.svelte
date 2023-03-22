<script>
    import { onMount } from "svelte";

    onMount(() => {
        // gsap.registerPlugin(ScrollTrigger);

        gsap.set(".computer-related-topics-i-enjoy", {
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
        p {
            font-size: 2.5vw;
        }
    }
</style>
