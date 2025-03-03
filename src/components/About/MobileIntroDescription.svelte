<script>
    import { onMount } from "svelte";

    var years_of_experience = (function() {
      const daysPassed = (Date.now() - Date.parse("May 25 2012")) / (1000 * 60 * 60 * 24);
      return Math.floor(daysPassed / 365) + (daysPassed % 365 > 182.5 ? 1 : 0);
    })();

    onMount(() => {
        window.dispatchEvent(new CustomEvent("on-mobile-about"));

        gsap.set(".intro-description", {
            y: "50%",
        });

        gsap.to(".intro-description", {
            autoAlpha: 1,
        });
        gsap.to(".what-interests-me", {
            autoAlpha: 1,
        });

        gsap.from(".intro-line", {
            delay: 0.3,
            duration: 0.65,
            yPercent: 75,
            clipPath: "inset(0 0 100% 0)",
            stagger: 0.075,
            ease: "power2.out",
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: ".intro-description",
                endTrigger: ".what-interests-me",
                start: "top 26%",
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
        <div class="intro-word">weaving</div>
        <div class="intro-word">together</div>
        <div class="technical">technical</div>
        <div class="intro-word">precision</div>
    </div>
    <div class="intro-line">
        <div class="intro-word">and</div>
        <div class="artistic">artistic</div>
        <div class="intro-word">vision</div>
        <div class="intro-word">through</div>
        <div class="intro-word">{years_of_experience}</div>
        <div class="intro-word">years</div>
    </div>
    <div class="intro-line">
        <div class="intro-word">of</div>
        <div class="intro-word">crafting</div>
        <div class="interactive">interactive</div>
        <div class="intro-word">experiences.</div>
    </div>
    <br>
    <div class="intro-line">
        <div class="intro-word">I</div>
        <div class="intro-word">strive</div>
        <div class="intro-word">to</div>
        <div class="intro-word">create</div>
        <div class="intro-word">dynamic</div>
        <div class="intro-word">systems</div>
        <div class="intro-word">that</div>
    </div>
    <div class="intro-line">
        <div class="intro-word">resonate</div>
        <div class="intro-word">meaningfully</div>
        <div class="intro-word">with</div>
        <div class="intro-word">human</div>
        <div class="intro-word">intuition.</div>
    </div>
</div>

<style>
    .intro-line {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.7vw;
    }

    .intro-word {
        font-size: 5vw;
    }

    .technical,
    .artistic,
    .interactive {
        font-size: 5vw;
        font-weight: 800;
    }
</style>
