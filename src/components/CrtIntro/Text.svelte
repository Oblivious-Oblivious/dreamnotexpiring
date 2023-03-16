<script>
    import { onMount } from "svelte";

    onMount(() => {
        gsap.timeline({
            delay: 0.5,
        })
        .to(".glitch", {
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
        .to(".glitch", {
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
        .to(".glitch", {
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
        .set(".main-content", {
            autoAlpha: 1,
        })
        .set("body", {
            overflow: "auto",
        })
        .fromTo("#swup", {
            opacity: 0,
        }, {
            duration: 0.8,
            ease: "power2.inOut",
            opacity: 1,
        });
    })
</script>

<div id="txt">
    <div class="glitch top red-shadow">OBLIVIOUS</div>
    <div class="glitch bottom red-shadow">OBLIVIOUS</div>
</div>

<style>
    @media (prefers-color-scheme: light) {
        .red-shadow {
            text-shadow: -7px 0 var(--bone);
        }
    }
    @media (prefers-color-scheme: dark) {
        .red-shadow {
            text-shadow: -7px 0 rgba(255, 0, 106, 0.5);
        }
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
