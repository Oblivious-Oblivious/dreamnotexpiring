<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap/dist/gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".djing-parallax-wrapper", {
            autoAlpha: 1,
        });

        gsap.set(".parallax-genre-river .parallax-title", {
            xPercent: 46,
            yPercent: -350,
        });
        gsap.set(".parallax-charmer .parallax-title", {
            xPercent: 81,
            yPercent: -350,
        });
        gsap.set(".parallax-future-house-sessions .parallax-title", {
            xPercent: 1.5,
            yPercent: -350,
        });
        gsap.set(".parallax-waiting-for-summer .parallax-title", {
            xPercent: 7,
            yPercent: -350,
        });
    });
</script>

<div class="section-title">Interest:&nbsp;&nbsp;Djing</div>

<div class="djing-parallax-wrapper" style="visibility: hidden;">
    <div class="parallax-card parallax-genre-river">
        <a href="https://www.mixcloud.com/itsoblivious/genre-river/" target="_blank" rel="noopener noreferrer" draggable="false">
            <img src="/img/genre-river.jpg" alt="Genre River" draggable="false">
            <div class="parallax-title">Genre River</div>
        </a>
    </div>

    <div class="parallax-card parallax-charmer">
        <a href="https://www.mixcloud.com/itsoblivious/charmer/" target="_blank" rel="noopener noreferrer" draggable="false">
            <img src="/img/charmer.jpg" alt="Charmer" draggable="false">
            <div class="parallax-title">Charmer</div>
        </a>
    </div>

    <div class="parallax-card parallax-future-house-sessions">
        <a href="https://www.mixcloud.com/itsoblivious/future-house-sessions-1/" target="_blank" rel="noopener noreferrer" draggable="false">
            <img src="/img/future-house-sessions-1.jpg" alt="Future House Sessions 1" draggable="false">
            <div class="parallax-title">Future House Sessions</div>
        </a>
    </div>

    <div class="parallax-card parallax-waiting-for-summer">
        <a href="https://www.mixcloud.com/itsoblivious/waiting-for-summer-mix/" target="_blank" rel="noopener noreferrer" draggable="false">
            <img src="/img/waiting-for-summer.jpg" alt="Waiting For Summer" draggable="false">
            <div class="parallax-title">Waiting For Summer</div>
        </a>
    </div>
</div>

<style>
    .section-title {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-size: 10vw;
        font-family: var(--display-font);
        font-style: italic;
    }

    .djing-parallax-wrapper {
        display: flex;
        flex-direction: column;
        gap: 10vw;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 10vw;
    }

    .parallax-card {
        width: 100%;
    }

    img {
        width: 100%;
        border-radius: 2.8vw;
    }

    .parallax-genre-river img {
        box-shadow: 0 0 3.5vw 1.1vw var(--lapis), var(--neumorphic-shadow2);
    }
    .parallax-charmer img {
        box-shadow: 0 0 3.5vw 1.1vw var(--gold), var(--neumorphic-shadow2);
    }
    .parallax-future-house-sessions img {
        box-shadow: 0 0 3.5vw 1.1vw var(--teal), var(--neumorphic-shadow2);
    }
    .parallax-waiting-for-summer img {
        box-shadow: 0 0 3.5vw 1.1vw var(--orange), var(--neumorphic-shadow2);
    }

    .parallax-genre-river .parallax-title,
    .parallax-charmer .parallax-title {
        border-radius: 18px 5px;
    }
    .parallax-future-house-sessions .parallax-title,
    .parallax-waiting-for-summer .parallax-title {
        border-radius: 5px 18px;
    }

    .parallax-title {
        position: absolute;
        color: white;
        font-size: 7.6vw;
        font-weight: 500;
        text-shadow: pink 0 0 20px;
        padding: 0 0.1vw;
        background-color: black;
    }
</style>
