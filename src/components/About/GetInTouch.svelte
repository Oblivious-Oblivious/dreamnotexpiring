<script>
    import { onMount } from "svelte";

    onMount(() => {
        // gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".get-in-touch", {
            yPercent: 100,
            opacity: 0,
        }, {
            yPercent: 0,
            visibility: "visible",
            opacity: 1,
        });
    });

    let class_prop_warning_fix = "";
    export { class_prop_warning_fix as class };
</script>

<div class="get-in-touch">
    <p>Get in touch</p>
    <h3><a href="mailto:thanos.papap42@gmail.com">Email</a></h3>
    <h3><a href="https://www.instagram.com/thanasis_papap/">Instagram</a></h3>
    <h3><a href="https://www.linkedin.com/in/thanasis-papapostolou/">LinkedIn</a></h3>
    <h3><a href="https://twitter.com/itsoblivious99">Twitter</a></h3>
</div>

<style lang="scss">
    .get-in-touch {
        padding-bottom: 27vh;
        visibility: hidden;

        p {
            font-size: 2.5vw;
            font-weight: 500;
        }

        h3 {
            font-size: 1.1vw;
        }
    }
</style>
