<script>
    import { onMount } from "svelte";
    var crt_source;

    onMount(() => {
        if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
            crt_source = "crt-dark.jpg";
        else
            crt_source = "crt-light.jpg";

        gsap.set(".intro-wrapper", {
            autoAlpha: 1,
        });

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

        const tl = gsap.timeline({
            delay: 0.5,
        });

        tl.to(".glitch", {
            duration: 0.1,
            skewX: 70,
            ease: "power4.inOut",
        })
        .to(".glitch", {
            duration: 0.04,
            skewX: 0,
            ease: "power4.inOut",
        })
        .to(".glitch", {
            duration: 0.04,
            opacity: 0,
        })
        .to(".glitch", {
            duration: 0.04,
            opacity: 1,
        })
        .to(".glitch", {
            duration: 0.04,
            x: -20,
        })
        .to(".glitch", {
            duration: 0.04,
            x: 0,
        })

        .addLabel("split", 0)

        .to(".top", {
            duration: 0.01,
            x: -20,
            ease: "power4.inOut",
        }, "split")
        .to(".bottom", {
            duration: 0.01,
            x: 20,
            ease: "power4.inOut",
        }, "split")

        .to("#txt", {
            duration: 0,
            scale: 1.1,
        }, "split")
        .to("#txt", {
            duration: 0,
            scale: 1,
        }, "+=0.02")

        .to(".top", {
            duration: 0.01,
            x: 0,
            ease: "power4.inOut",
        })
        .to(".bottom", {
            duration: 0.01,
            x: 0,
            ease: "power4.inOut",
        })

        .to(".glitch", {
            duration: 0.8,
            onComplete: () => {
                document.querySelector(".top").innerHTML = "&nbsp&nbspTO THE";
                document.querySelector(".bottom").innerHTML = "&nbsp&nbspTO THE";
            },
        })
        tl.to(".glitch", {
            duration: 0.1,
            skewX: 70,
            ease: "power4.inOut",
        })
        .to(".glitch", {
            duration: 0.04,
            skewX: 0,
            ease: "power4.inOut",
        })
        .to(".glitch", {
            duration: 0.04,
            opacity: 0,
        })
        .to(".glitch", {
            duration: 0.04,
            opacity: 1,
        })
        .to(".glitch", {
            duration: 0.04,
            x: -20,
        })
        .to(".glitch", {
            duration: 0.04,
            x: 0,
        })

        .addLabel("split", 0)

        .to(".top", {
            duration: 0.01,
            x: -20,
            ease: "power4.inOut",
        }, "split")
        .to(".bottom", {
            duration: 0.01,
            x: 20,
            ease: "power4.inOut",
        }, "split")

        .to("#txt", {
            duration: 0,
            scale: 1.1,
        }, "split")
        .to("#txt", {
            duration: 0,
            scale: 1,
        }, "+=0.02")

        .to(".top", {
            duration: 0.01,
            x: 0,
            ease: "power4.inOut",
        })
        .to(".bottom", {
            duration: 0.01,
            x: 0,
            ease: "power4.inOut",
        })

        .to(".glitch", {
            duration: 0.02,
            scaleY: 1.5,
            ease: "power4.inOut",
        })
        .to(".glitch", {
            duration: 0.02,
            scaleY: 1,
            ease: "power4.inOut",
        })
        .to(".glitch", {
            duration: 0.2,
            onComplete: () => {
                document.querySelector(".top").innerHTML = "&nbsp&nbspDREAM";
                document.querySelector(".bottom").innerHTML = "&nbsp&nbspDREAM";
            },
        })
        tl.to(".glitch", {
            duration: 0.1,
            skewX: 70,
            ease: "power4.inOut",
        })
        .to(".glitch", {
            duration: 0.04,
            skewX: 0,
            ease: "power4.inOut",
        })
        .to(".glitch", {
            duration: 0.04,
            opacity: 0,
        })
        .to(".glitch", {
            duration: 0.04,
            opacity: 1,
        })
        .to(".glitch", {
            duration: 0.04,
            x: -20,
        })
        .to(".glitch", {
            duration: 0.04,
            x: 0,
        })

        .addLabel("split", 0)

        .to(".top", {
            duration: 0.01,
            x: -20,
            ease: "power4.inOut",
        }, "split")
        .to(".bottom", {
            duration: 0.01,
            x: 20,
            ease: "power4.inOut",
        }, "split")

        .to("#txt", {
            duration: 0,
            scale: 1.1,
        }, "split")
        .to("#txt", {
            duration: 0,
            scale: 1,
        }, "+=0.02")

        .to(".top", {
            duration: 0.01,
            x: 0,
            ease: "power4.inOut",
        })
        .to(".bottom", {
            duration: 0.01,
            x: 0,
            ease: "power4.inOut",
        })

        .to(".glitch", {
            duration: 0.02,
            scaleY: 1.5,
            ease: "power4.inOut",
        })
        .to(".glitch", {
            duration: 0.8,
            scaleY: 1,
            ease: "power4.inOut",
        })
        .to([".noise", ".crt"], {
            duration: 0.8,
            opacity: 0,
            ease: "power2.inOut",
        })
        .fromTo("#swup", {
            opacity: 0,
        }, {
            duration: 0.8,
            ease: "power2.inOut",
            opacity: 1,
            onStart: () => {
                document.querySelector("body").classList.add("default-body-colors");
                document.querySelector(".display-none").classList.remove("display-none");
                document.querySelector(".noise").classList.add("display-none");
            }
        });
    });
</script>

<div class="intro-wrapper" style="visibility=hidden;">
    <img class="crt" src={crt_source} alt="A 90s CRT tv">
    <div class="noise">
        <div id="txt">
            <div class="glitch top red-shadow">OBLIVIOUS</div>
            <div class="glitch bottom red-shadow">OBLIVIOUS</div>
        </div>
    </div>
</div>

<style>
    :root {
        --noise: var(--silver);
        background-color: var(--bg-color);
    }

    @media (prefers-color-scheme: light) {
        .noise {
            -webkit-filter: invert(100%);
            filter: invert(100%);
        }

        .red-shadow {
            text-shadow: -7px 0 var(--bone);
        }
    }
    @media (prefers-color-scheme: dark) {
        .red-shadow {
            text-shadow: -7px 0 rgba(255, 0, 106, 0.5);
        }
    }

    @font-face {
        font-family: "Road Rage";
        src: url("/RoadRage.otf");
    }

    img {
        width: 100vw;
        height: 100vh;
    }
    
    .noise {
        font-family: "Road Rage";
        overflow: hidden;

        mix-blend-mode: multiply;
        background-image: url("/noise.jpg");
        height: 86vh;
        width: 86vw;
        transform: translateY(7vh) translateX(7vw);
        border-radius: 75px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }

    .bottom {
        font-size: 7vw;
        -webkit-clip-path: inset(58% 0 0 0);
        clip-path: inset(58% 0 0 0);
    }

    .top {
        -webkit-clip-path: inset(0 0 41% 0);
        clip-path: inset(0 0 41%);
    }

    .glitch {
        position: absolute;
    }

    #txt {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 7vw;
        margin: auto;

        width: 35vw;
        height: 7vw;
        font-size: 7vw;
        color: var(--noise);
    }
</style>
