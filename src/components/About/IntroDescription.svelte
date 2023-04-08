<script>
    import { onMount } from "svelte";

    var years_of_experience = new Date().getUTCFullYear() - 2012;

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.set(".intro-description", {
            y: "25vh",
        });

        gsap.to(".intro-description", {
            autoAlpha: 1,
        });

        gsap.from(".intro-line", {
            delay: 0.3,
            duration: 0.65,
            yPercent: 75,
            clipPath: "inset(0 0 100% 0)",
            stagger: 0.075,
            ease: "power2.out",
            onComplete: () => window.dispatchEvent(new CustomEvent("scrolling-start")),
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: ".intro-description",
                endTrigger: ".what-interests-me",
                start: "top 25%",
                end: "+=2500",
                pin: true,
                scrub: true,
                refreshPriority: 10,
            },
        })
        .to(".intro-word", {
            xPercent: -400,
            yPercent: -800,
            rotate: -25,
            rotateX: 80,
            opacity: 0,
            scale: 1.4,
            stagger: 0.05,
        })
        .to([".technical", ".artistic", ".interactive"], {
            xPercent: -750,
            opacity: 0,
        });
    });
</script>

<div class="intro-description" style="visibility: hidden;">
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

<style>
    .intro-description {
        will-change: transform, opacity;
        transform: translateZ(0);
        padding-left: 42vw;
    }

    .intro-line {
        display: flex;
        gap: 0.7vw;
    }

    .intro-word {
        font-size: 2.6vw;
    }

    .technical,
    .artistic,
    .interactive {
        font-size: 2.6vw;
        font-weight: 800;
    }
</style>
