<script>
    import { onMount } from "svelte";

    onMount(() => {
        gsap.to(".software-wrapper", {
            autoAlpha: 1,
        });

        gsap.set(".software-salsa", {
            xPercent: 10,
            yPercent: 35,
        });

        gsap.set(".software-margaret", {
            xPercent: -20,
            yPercent: 60,
        });

        gsap.set(".software-aerocss", {
            xPercent: -30,
            yPercent: 145,
        });

        gsap.utils.toArray(".software-link").forEach(link => {
            const scale_image = gsap.to(link, {
                paused: true,
                duration: 0.4,
                scale: 1.05,
                opacity: 1,
            });

            const reveal_text = gsap.fromTo(
                `.${link.classList[1].toString()} .software-text`,
                `${link.classList[1].toString()}` === "software-margaret" ? { xPercent: 10 } : { xPercent: -10 },
                {
                    paused: true,
                    duration: 0.4,
                    autoAlpha: 1,
                    xPercent: 0,
                    stagger: 0.1,
                }
            );

            link.addEventListener("mouseenter", () => {
                scale_image.play();
                reveal_text.play();
            });
            link.addEventListener("mouseleave", () => {
                scale_image.reverse();
                reveal_text.reverse();
            });
        });
    })
</script>

<div class="software-wrapper" style="visibility: hidden;">
    <div class="software-link software-salsa">
        <a href="https://apps.apple.com/app/salsa-pomodoro-timer/id1669985996" draggable="false">
            <img src="/img/salsa.png" alt="Salsa Pomodoro" draggable="false">
        </a>

        <div class="software-text software-name">Salsa: Pomodoro Timer</div>
        <div class="software-text software-description-intro">
            Salsa is a minimalistic app for pomodoro timers.
            Stay focused without distractions.
            Work, study, get things done.
            <br><br>
        </div>
        <div class="software-text software-description-details">
            With Salsa you can set different combinations
            of timers, decide if you want long breaks and
            choose the number of sets you are aiming to complete.
        </div>
        <div class="software-text software-copyright">
            © Oblivious
        </div>
    </div>

    <div class="software-link software-aerocss">
        <a href="https://github.com/Oblivious-Oblivious/AeroCSS" draggable="false">
            <img src="/img/aerocss.png" alt="Salsa Pomodoro" draggable="false">
        </a>

        <div class="software-text software-name">Aero CSS</div>
        <div class="software-text software-description-intro">
            CSS framework inspired by the
            utility classes of tailwind.
            <br><br>
        </div>
        <div class="software-text software-description-details">
            Aero CSS is a css framework written in sass,
            inheritic from the utility-first design of
            tailwind. It offers utility classes for all
            basic css allowing for in-line html styling.
        </div>
        <div class="software-text software-copyright">
            © Oblivious
        </div>
    </div>

    <div class="software-link software-margaret">
        <a href="https://github.com/Oblivious-Oblivious/margaret" draggable="false">
            <img src="/img/margaret.png" alt="Salsa Pomodoro" draggable="false">
        </a>

        <div class="software-text software-name">Margaret</div>
        <div class="software-text software-description-intro">
            An object oriented language system
            based on ruby and smalltalk.
            <br><br>
        </div>
        <div class="software-text software-description-details">
            Margaret is a modern programming language focused around
            objects and messages. It offers powerful literals, easy
            to use objects and smalltalk-like message structures.
        </div>
        <div class="software-text software-copyright">
            © Oblivious
        </div>
    </div>
</div>

<style>
    .software-wrapper {
        display: flex;
        gap: 1.5rem;
        margin: 0 auto;
        width: 80%;
    }

    .software-link {
        position: relative;
        color: #111111;
        width: 100%;
    }

    .software-text {
        visibility: hidden;
    }

    .software-name {
        position: absolute;
        top: 3%;
        left: 5%;
        pointer-events: none;
        text-shadow: 1px 1px var(--gray);
        font-size: 2vw;
        font-family: var(--display-font);
        font-weight: 500;
    }

    .software-description-intro {
        position: absolute;
        top: 40%;
        left: 10%;
        pointer-events: none;
        text-shadow: 1px 1px var(--gray);
        font-size: 1.36vw;
        transform: translate(-5%, -50%);
    }

    .software-description-details {
        position: absolute;
        top: 70%;
        left: 10%;
        pointer-events: none;
        text-shadow: 1px 1px var(--gray);
        font-size: 1.12vw;
        transform: translate(-5%, -50%);
    }

    .software-copyright {
        position: absolute;
        bottom: 2%;
        right: 4%;
        pointer-events: none;
        text-shadow: 1px 1px var(--gray);
        font-size: 0.96vw;
    }

    a {
        border-bottom: none;
        display: block;
        text-align: center;
        border-radius: 5px;
        box-shadow: var(--neuromorphic-shadow2);
        background-color: var(--bg-color);
        cursor: pointer;
        outline: 0;
        overflow: hidden;
    }

    a:hover {
        filter: blur(15px);
        transition: filter 400ms ease;
    }

    a:not(:hover) {
        filter: 0;
        transition: filter 800ms ease;
    }

    img {
        width: 100%;
    }
</style>
