<script>
    import { onMount } from "svelte";

    var years_of_experience = new Date().getUTCFullYear() - 2012;

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".intro-line", {
            yPercent: 100,
        }, {
            yPercent: 0,
            visibility: "visible",
            autoAlpha: 1,
            stagger: 0.05,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: ".intro-description",
                start: "top top",
                end: "+=2500",
                // markers: true,
                pin: true,
                scrub: true,
            },
        }).fromTo(".intro-word", {
            xPercent: 0,
            yPercent: 0,
            rotate: 0,
            rotateX: 0,
            scale: 1,
            opacity: 1,
        }, {
            xPercent: -400,
            yPercent: -800,
            rotate: -25,
            rotateX: 80,
            opacity: 0,
            scale: 1.4,
            stagger: 0.05,
        })
        .add("at-bold-word-repositioning")
        .to(".technical", {
            xPercent: -80,
            yPercent: 150,
        }, "at-bold-word-repositioning")
        .to([".artistic", ".interactive"], {
            xPercent: -80,
            yPercent: 150,
            opacity: 0,
        }, "at-bold-word-repositioning");
    });
</script>

<div class="intro-description">
    <div class="intro-line">
        <div class="intro-word">I</div>
        <div class="intro-word">am</div>
        <div class="intro-word">a</div>
        <div class="intro-word">software</div>
        <div class="intro-word">developer</div>
        <div class="intro-word">and</div>
        <div class="intro-word">designer</div>
    </div>
    <div class="intro-line">
        <div class="intro-word">blending</div>
        <div class="technical">technical</div>
        <div class="intro-word">and</div>
        <div class="artistic">artistic</div>
        <div class="intro-word">skills</div>
        <div class="intro-word">with</div>
    </div>
    <div class="intro-line">
        <div class="intro-word">{years_of_experience}</div>
        <div class="intro-word">years</div>
        <div class="intro-word">of</div>
        <div class="intro-word">building</div>
        <div class="interactive">interactive</div>
    </div>
    <div class="intro-line">
        <div class="intro-word">experiences.</div>
    </div>
    <br>
    <div class="intro-line">
        <div class="intro-word">I</div>
        <div class="intro-word">vow</div>
        <div class="intro-word">to</div>
        <div class="intro-word">create</div>
        <div class="intro-word">dynamic</div>
        <div class="intro-word">systems</div>
        <div class="intro-word">that</div>
    </div>
    <div class="intro-line">
        <div class="intro-word">interact</div>
        <div class="intro-word">in</div>
        <div class="intro-word">meaningful</div>
        <div class="intro-word">and</div>
        <div class="intro-word">internalized</div>
    </div>
    <div class="intro-line">
        <div class="intro-word">ways</div>
        <div class="intro-word">with</div>
        <div class="intro-word">the</div>
        <div class="intro-word">individual.</div>
    </div>
</div>

<style lang="scss">
    .intro-description,
    .intro-line,
    .intro-word {
        will-change: transform;
    }

    .intro-description {
        padding-top: 25vh;
        transform: translate(17vw);
    }

    .intro-line {
        display: flex;
        visibility: hidden;
        gap: 0.7vw;
    }

    .intro-word {
        font-size: 2.5vw;
        font-weight: 500;
    }

    .technical,
    .artistic,
    .interactive {
        font-size: 2.5vw;
        font-weight: 900;
    }
</style>
