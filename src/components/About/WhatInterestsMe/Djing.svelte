<script>
    import { onMount } from "svelte";
    import ReactAdapter from "./ReactAdapter.svelte";
    import { SoundPlayer } from "./SoundPlayer.jsx";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".djing-parallax-wrapper", {
            autoAlpha: 1,
        });

        gsap.set(".parallax-genre-river", {
            xPercent: 35,
            yPercent: 61.25,
            rotateZ: 15,
        });
        gsap.set(".parallax-charmer", {
            xPercent: 20,
            yPercent: 170,
            rotateZ: 6,
        });
        gsap.set(".parallax-future-house-sessions", {
            xPercent: 60,
            yPercent: 120,
            rotateZ: -1,
        });
        gsap.set(".parallax-waiting-for-summer", {
            xPercent: 60,
            yPercent: 230,
            rotateZ: -10,
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

        const active_noise = gsap.to(".noise", {
            paused: true,
            duration: 0.1,
            repeat: -1,
            onRepeat: () => {
                gsap.set(".noise", {
                    backgroundPosition: Math.floor(Math.random() * 100) + 1 + "% " + Math.floor(Math.random() * 10) + 1 + "%",
                });
            },
            ease: "steps(1)",
        });

        gsap.utils.toArray(".parallax-card").forEach(card => {
            const card_rotate = gsap.to(card, {
                paused: true,
                rotate: 0,
                ease: "power2.inOut",
            });

            const text_reveal = gsap.to(`.${card.classList[1].toString()} .parallax-title`, {
                paused: true,
                autoAlpha: 1,
                ease: "power2.inOut",
            });

            const noise_reveal = gsap.set(`.${card.classList[1].toString()} .noise`, {
                paused: true,
                autoAlpha: 1,
            });

            const image_flip = gsap.set(`.${card.classList[1].toString()} img`, {
                paused: true,
                scaleX: -1,
            });

            card.addEventListener("mouseenter", () => {
                active_noise.play();
                noise_reveal.play();
                image_flip.play();
                card_rotate.play();
                text_reveal.play();

                window.dispatchEvent(new CustomEvent("cursor-hover", {
                    detail: "LISTEN",
                }));
            });

            card.addEventListener("mouseleave", () => {
                active_noise.pause();
                noise_reveal.reverse();
                image_flip.reverse();
                card_rotate.reverse();
                text_reveal.reverse();

                window.dispatchEvent(new CustomEvent("cursor-reset"));
            });
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: ".djing-parallax-wrapper",
                start: "top top",
                end: "+=1500",
                scrub: true,
                refreshPriority: 8,
            },
        })
        .to(".parallax-card", {
            yPercent: 100,
        });
    });
</script>

<div class="djing-parallax-wrapper" style="visibility: hidden;">
    <div class="parallax-card parallax-genre-river">
        <a href="https://www.mixcloud.com/itsoblivious/genre-river/" target="_blank" rel="noopener noreferrer" draggable="false">
            <img src="/img/genre-river.jpg" alt="Genre River" draggable="false">
            <div class="parallax-title">Genre River</div>
            <div class="noise"></div>
            <ReactAdapter
                el={SoundPlayer}
                class="sound-player"
                sound="/sound/genre-river.mp3"
            />
        </a>
    </div>

    <div class="parallax-card parallax-charmer">
        <a href="https://www.mixcloud.com/itsoblivious/charmer/" target="_blank" rel="noopener noreferrer" draggable="false">
            <img src="/img/charmer.jpg" alt="Charmer" draggable="false">
            <div class="parallax-title">Charmer</div>
            <div class="noise"></div>
            <ReactAdapter
                el={SoundPlayer}
                class="sound-player"
                sound="/sound/charmer.mp3"
            />
        </a>
    </div>

    <div class="parallax-card parallax-future-house-sessions">
        <a href="https://www.mixcloud.com/itsoblivious/future-house-sessions-1/" target="_blank" rel="noopener noreferrer" draggable="false">
            <img src="/img/future-house-sessions-1.jpg" alt="Future House Sessions 1" draggable="false">
            <div class="parallax-title">Future House Sessions</div>
            <div class="noise"></div>
            <ReactAdapter
                el={SoundPlayer}
                class="sound-player"
                sound="/sound/future-house-sessions.mp3"
            />
        </a>
    </div>

    <div class="parallax-card parallax-waiting-for-summer">
        <a href="https://www.mixcloud.com/itsoblivious/waiting-for-summer-mix/" target="_blank" rel="noopener noreferrer" draggable="false">
            <img src="/img/waiting-for-summer.jpg" alt="Waiting For Summer" draggable="false">
            <div class="parallax-title">Waiting For Summer</div>
            <div class="noise"></div>
            <ReactAdapter
                el={SoundPlayer}
                class="sound-player"
                sound="/sound/waiting-for-summer.mp3"
            />
        </a>
    </div>
</div>

<style>
    .djing-parallax-wrapper {
        display: flex;
        width: 80%;
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
        visibility: hidden;
        position: absolute;
        color: white;
        font-size: 1.95vw;
        font-weight: 500;
        text-shadow: pink 0 0 20px;
        padding: 0 0.1vw;
        background-color: black;
    }

    .noise {
        visibility: hidden;

        mix-blend-mode: exclusion;
        background-image: url("/img/noise.jpg");
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        border-radius: 2.8vw;
    }
</style>
