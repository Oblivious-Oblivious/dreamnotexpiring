<script>
    import { onMount } from "svelte";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".how-i-learn", {
            autoAlpha: 1,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: ".how-i-learn",
                pin: true,
                scrub: true,
                end: "+=7000",
                refreshPriority: 6,
            },
        })
        .to(".how-i-learn-border", {
            keyframes: [
                {delay: 0.5},
                {},
                {
                    duration: 0,
                    "--current-color": "#ffd700",
                },
                {},
                {},
                {delay: 0.5},
                {},
                {
                    duration: 0,
                    "--current-color": "#65000b",
                },
                {},
                {},
                {delay: 0.5},
                {},
                {
                    duration: 0,
                    "--current-color": "#353839",
                },
                {},
                {},
                {delay: 0.5},
                {},
                {
                    duration: 0,
                    "--current-color": "#00a651",
                },
                {},
                {},
            ],
        }, 0)
        .to(".progress-value", {
            keyframes: [
                {delay: 0.5},
                {},
                {
                    duration: 0,
                    width: "var(--current-productivity)",
                },
                {},
                {},
                {delay: 0.5},
                {},
                {
                    duration: 0,
                    width: "var(--current-productivity)",
                },
                {},
                {},
                {delay: 0.5},
                {},
                {
                    duration: 0,
                    width: "var(--current-productivity)",
                },
                {},
                {},
                {delay: 0.5},
                {},
                {
                    duration: 5,
                    width: "100%",
                },
                {},
                {},
            ],
        }, 0)
        .to(".how-i-learn-box", {
            keyframes: [
                {
                    delay: 0.5,
                    rotateZ: "90deg",
                    width: "24vw",
                    height: "24vw",
                },
                {
                    rotateZ: "180deg",
                    width: "0vw",
                    height: "0vw",
                },
                {
                    rotateZ: "270deg",
                    width: "24vw",
                    height: "24vw",
                },
                {
                    rotateZ: "360deg",
                    width: "48vw",
                    height: "48vw",
                },
                {
                    delay: 0.5,
                    rotateZ: "450deg",
                    width: "24vw",
                    height: "24vw",
                },
                {
                    rotateZ: "540deg",
                    width: "0vw",
                    height: "0vw",
                },
                {
                    rotateZ: "630deg",
                    width: "24vw",
                    height: "24vw",
                },
                {
                    rotateZ: "720deg",
                    width: "48vw",
                    height: "48vw",
                },
                {
                    delay: 0.5,
                    rotateZ: "810deg",
                    width: "24vw",
                    height: "24vw",
                },
                {
                    rotateZ: "900deg",
                    width: "0vw",
                    height: "0vw",
                },
                {
                    rotateZ: "990deg",
                    width: "24vw",
                    height: "24vw",
                },
                {
                    rotateZ: "1080deg",
                    width: "48vw",
                    height: "48vw",
                },
                {
                    delay: 0.5,
                    rotateZ: "1170deg",
                    width: "24vw",
                    height: "24vw",
                },
                {
                    rotateZ: "1260deg",
                    width: "0vw",
                    height: "0vw",
                },
                {
                    rotateZ: "1350deg",
                    width: "24vw",
                    height: "24vw",
                },
                {
                    rotateZ: "1440deg",
                    width: "48vw",
                    height: "48vw",
                },
            ],
        }, 0)
        .to(".how-i-learn-content", {
            keyframes: [
                {
                    delay: 0.5,
                    rotateZ: "-90deg",
                    clipPath: "inset(50% round 50%)",
                },
                {
                    rotateZ: "-180deg",
                    clipPath: "inset(100% round 100%)",
                },
                {
                    duration: 0,
                    "--current-date": "\"2016 - 2017\"",
                    "--current-experience": "\"Golden Years\"",
                    "--current-method": "\"combine knowledge, ambitiously create\"",
                    "--current-productivity": "100%",
                    "--current-color": "#ffd700",
                },
                {
                    rotateZ: "-270deg",
                    clipPath: "inset(50% round 50%)",
                },
                {
                    rotateZ: "-360deg",
                    clipPath: "inset(0% round 0%)",
                },
                {
                    delay: 0.5,
                    rotateZ: "-450deg",
                    clipPath: "inset(50% round 50%)",
                },
                {
                    rotateZ: "-540deg",
                    clipPath: "inset(100% round 100%)",
                },
                {
                    duration: 0,
                    "--current-date": "\"2017 - 2019\"",
                    "--current-experience": "\"Deep Understanding\"",
                    "--current-method": "\"read a book\"",
                    "--current-productivity": "80%",
                    "--current-color": "#65000b",
                },
                {
                    rotateZ: "-630deg",
                    clipPath: "inset(50% round 50%)",
                },
                {
                    rotateZ: "-720deg",
                    clipPath: "inset(0% round 0%)",
                },
                {
                    delay: 0.5,
                    rotateZ: "-810deg",
                    clipPath: "inset(50% round 50%)",
                },
                {
                    rotateZ: "-900deg",
                    clipPath: "inset(100% round 100%)",
                },
                {
                    duration: 0,
                    "--current-date": "\"2019 - 2021\"",
                    "--current-experience": "\"Dread/Despair/Hate\"",
                    "--current-method": "\"stare at the problem\"",
                    "--current-productivity": "10%",
                    "--current-color": "#353839",
                },
                {
                    rotateZ: "-990deg",
                    clipPath: "inset(50% round 50%)",
                },
                {
                    rotateZ: "-1080deg",
                    clipPath: "inset(0% round 0%)",
                },
                {
                    delay: 0.5,
                    rotateZ: "-1170deg",
                    clipPath: "inset(50% round 50%)",
                },
                {
                    rotateZ: "-1260deg",
                    clipPath: "inset(100% round 100%)",
                },
                {
                    duration: 0,
                    "--current-date": "\"2021 - Present\"",
                    "--current-experience": "\"Light\"",
                    "--current-method": "\"visualize the result, work backwards toward the solution\"",
                    "--current-productivity": "75%",
                    "--current-color": "#00a651",
                },
                {
                    rotateZ: "-1350deg",
                    clipPath: "inset(50% round 50%)",
                },
                {
                    rotateZ: "-1440deg",
                    clipPath: "inset(0% round 0%)",
                },
            ],
        }, 0);
    });
</script>

<div class="how-i-learn" style="visibility: hidden;">
    <div class="how-i-learn-title">How I Learn:</div>

    <div class="spacer"></div>

    <div class="how-i-learn-border">
        <div class="how-i-learn-box">
            <div class="grain">
                <div class="grain-pattern"></div>
            </div>
            <div class="how-i-learn-content">
                <div class="how-i-learn-content-date"></div>
                <div class="how-i-learn-content-experience"></div>
                <div class="how-i-learn-content-method"></div>
                <div class="how-i-learn-content-productivity">
                    <div class="progress">
                        <div class="progress-value"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .how-i-learn {
        display: flex;
        height: 100vh;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .spacer {
        width: 30vw;
    }

    .how-i-learn-title {
        position: absolute;
        top: 25%;
        left: 5%;
        font-size: 5vw;
        width: 28vw;
    }

    .grain {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.035;
    }

    .grain-pattern {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url("/img/grain.gif");
    }

    .how-i-learn-border {
        background-color: var(--current-color);
        border-radius: 50%;
        padding: 0.25vw;
        --current-color: var(--lapis);
        box-shadow: 0 0 0.4vw 0 var(--current-color);
    }

    .how-i-learn-box {
        width: 48vw;
        height: 48vw;
        background-color: var(--bg-color);
    }

    .how-i-learn-content {
        --current-date: "2012 - 2016";
        --current-experience: "Ascent";
        --current-method: "surf the internet";
        --current-productivity: 60%;
        --current-color: var(--lapis);

        display: flex;
        flex-direction: column;
        height: 100%;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-size: 2vw;
    }

    .how-i-learn-content-date {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-family: var(--display-font);
        font-size: 2.3vw;
        font-style: italic;
        text-transform: uppercase;

        width: 16vw;
        height: 5vw;

        transform: translate(-11.5vw, 0vw);
    }
    .how-i-learn-content-date:before {
        content: var(--current-date);
    }

    .how-i-learn-content-experience {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-size: 2.5vw;

        width: 21vw;
        height: 5vw;
        transform: translate(8vw, -5.25vw);

        font-family: "Neonderthaw", cursive;
        animation: neonize 1000ms ease-in-out infinite alternate;
    }
    .how-i-learn-content-experience:before {
        content: var(--current-experience);
    }

    .how-i-learn-content-method {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        font-style: italic;
        font-family: var(--display-font);

        width: 32.4vw;
        height: 5vw;
        transform: translate(0vw, -2.5vw);
    }
    .how-i-learn-content-method:before {
        content: var(--current-method);
    }

    .how-i-learn-content-productivity {
        display: flex;
        gap: 1vw;
        text-align: center;
        align-items: center;
        justify-content: center;

        width: 44vw;
        height: 5vw;
        transform: translate(0vw, 0vw);
    }
    .how-i-learn-content-productivity:before {
        font-family: var(--display-font);
        font-style: italic;
        text-transform: uppercase;
        content: "Productivity: ";
    }

    .progress {
        background-color: rgba(84, 84, 82, 0.3);
        justify-content: flex-start;
        border-radius: 100px;
        align-items: center;
        position: relative;
        display: flex;
        height: 2vw;
        width: 22vw;
    }

    .progress-value {
        --current-animation: none;
        box-shadow: 0 10px 40px -10px var(--fg-color);
        border-radius: 100px;
        background: var(--fg-color);
        height: 2vw;
        width: var(--current-productivity);
        animation: var(--current-animation);
    }

    @keyframes neonize {
        from {
            text-shadow:
                0 0 2px var(--fg-color),
                0 0 5px var(--fg-color),
                0 0 15px var(--current-color),
                0 0 25px var(--current-color),
                0 0 35px var(--current-color),
                0 0 45px var(--current-color);
                transform: translate(8vw, -5.5vw);
        }
        to {
            text-shadow:
                0 0 1px var(--fg-color),
                0 0 3px var(--fg-color),
                0 0 7px var(--current-color),
                0 0 12px var(--current-color),
                0 0 18px var(--current-color),
                0 0 22px var(--current-color);
                transform: translate(8vw, -5.25vw);
        }
    }

    @keyframes productivity_load {
        0% { width: 70%; }
        100% { width: 100%; }
    }
</style>
