<script>
    import { onMount } from "svelte";

    onMount(() => {
        // gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".get-in-touch", {
            opacity: 0,
        }, {
            opacity: 1,
            autoAlpha: 1,
        });
    });
</script>

<div class="get-in-touch" style="visibility: hidden;">
    <p>Get in touch</p>
    <h3><a href="mailto:thanos.papap42@gmail.com">Email</a></h3>
    <h3><a href="https://www.instagram.com/thanasis_papap/">Instagram</a></h3>
    <h3><a href="https://www.linkedin.com/in/thanasis-papapostolou/">LinkedIn</a></h3>
    <h3><a href="https://twitter.com/itsoblivious99">Twitter</a></h3>
</div>

<style lang="scss">
    .get-in-touch {
        p {
            font-size: 2.5vw;
            font-weight: 400;
        }

        h3 {
            font-size: 1.1vw;
        }
    }
</style>
