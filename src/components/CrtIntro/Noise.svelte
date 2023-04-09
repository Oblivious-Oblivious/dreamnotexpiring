<script>
    import { onMount } from "svelte";
    import gsap from "gsap";

    import Text from "./Text.svelte";

    onMount(() => {
        gsap.to(".noise", {
            duration: 0.1,
            repeat: 50,
            onRepeat: () => {
                gsap.set(".noise", {
                    backgroundPosition: Math.floor(Math.random() * 100) + 1 + "% " + Math.floor(Math.random() * 10) + 1 + "%",
                });
            },
            ease: "steps(1)",
        });
    })
</script>

<div class="noise">
    <Text/>
</div>

<style>
    .noise {
        font-family: var(--road-rage-font);
        overflow: hidden;

        mix-blend-mode: multiply;
        background-image: url("/img/noise.jpg");
        height: 86vh;
        width: 86vw;
        transform: translateY(7vh) translateX(7vw);
        border-radius: 75px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
</style>
