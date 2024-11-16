<script>
    import { onMount } from "svelte";

    onMount(() => {
        gsap.to(".software-wrapper", {
            autoAlpha: 1,
        });
    });
</script>

<div class="section-title">Interest:&nbsp;&nbsp;Software</div>

<div class="software-wrapper" style="visibility: hidden;">
    <div class="software-link software-salsa">
        <a href="https://apps.apple.com/app/salsa-pomodoro-timer/id1669985996" target="_blank" rel="noopener noreferrer" draggable="false">
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
        <a href="https://github.com/Oblivious-Oblivious/AeroCSS" target="_blank" rel="noopener noreferrer" draggable="false">
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
        <a href="https://github.com/Oblivious-Oblivious/margaret" target="_blank" rel="noopener noreferrer" draggable="false">
            <img src="/img/margaret.png" alt="Salsa Pomodoro" draggable="false">
        </a>

        <div class="software-text software-name">Margaret</div>
        <div class="software-text software-description-intro">
            An object oriented language system
            based on ruby and smalltalk.
            <br><br>
        </div>
        <div class="software-text software-description-details">
            Margaret is a modern Smalltalk-inspired, object-oriented
            programming language that emphasizes message-passing paradigms,
            intuitive interactions and powerful object capabilities.
        </div>
        <div class="software-text software-copyright">
            © Oblivious
        </div>
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
        padding-bottom: 5vw;
    }

    .software-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin: 0 auto;
        width: 80%;
    }

    .software-link {
        position: relative;
        color: #111111;
        width: 100%;
    }

    .software-name {
        position: absolute;
        top: 3%;
        left: 5%;
        pointer-events: none;
        text-shadow: 1px 1px var(--gray);
        font-size: 6vw;
        font-family: var(--display-font);
        font-weight: 500;
    }

    .software-description-intro {
        position: absolute;
        top: 40%;
        left: 10%;
        pointer-events: none;
        text-shadow: 1px 1px var(--gray);
        font-size: 4.08vw;
        transform: translate(-5%, -50%);
    }

    .software-description-details {
        position: absolute;
        top: 70%;
        left: 10%;
        pointer-events: none;
        text-shadow: 1px 1px var(--gray);
        font-size: 3.36vw;
        transform: translate(-5%, -50%);
    }

    .software-copyright {
        position: absolute;
        bottom: 2%;
        right: 4%;
        pointer-events: none;
        text-shadow: 1px 1px var(--gray);
        font-size: 2.88vw;
    }

    a {
        border-bottom: none;
        display: block;
        text-align: center;
        border-radius: 5px;
        box-shadow: var(--neumorphic-shadow2);
        background-color: var(--bg-color);
        cursor: pointer;
        outline: 0;
        overflow: hidden;
    }

    a {
        filter: blur(4px);
    }

    img {
        width: 100%;
    }
</style>
