<script>
    import { onMount } from "svelte";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        gsap.to(".work-section", {
            autoAlpha: 1,
        });

        gsap.timeline()
            .from(".work-line", {
                duration: 1,
                opacity: 0,
                width: "0%",
                stagger: {
                    amount: 2,
                },
            })
            gsap.from(".work-title, .work-date", {
                duration: 0.65,
                xPercent: 20,
                clipPath: "inset(0 0 0 100%)",
                stagger: {
                    amount: 2.5,
                },
                ease: "power2.out",
            });

        const rolling_distort_material = () => {
            let material = new Blotter.RollingDistortMaterial();

            material.uniforms.uSineDistortSpread.value = 0;
            material.uniforms.uSineDistortCycleCount.value = 2;
            material.uniforms.uSineDistortAmplitude.value = 0;
            material.uniforms.uNoiseDistortVolatility.value = 0;
            material.uniforms.uNoiseDistortAmplitude.value = 0;
            material.uniforms.uRotation.value = 170;
            material.uniforms.uSpeed.value = 0.25;

            return material;
        }

        const create_blotter_text = inner_text => {
            const font_size = window.getComputedStyle(inner_text, null).getPropertyValue("font-size");
            const fg_color = window.getComputedStyle(inner_text, null).getPropertyValue("color");
            return new Blotter.Text(`${inner_text
                .classList[1]
                .toString()
                .split("-")
                .slice(1)
                .join(" ")
                .toUpperCase()
            }`, {
                family: "Saol Display",
                size: font_size.split("px")[0],
                fill: fg_color,
                needsUpdate: true,
            });
        }

        [
            ".work-margaret",
            ".work-cspec",
            ".work-dreamnotexpiring",
            ".work-salsa-pomodoro-timer",
            ".work-aerocss",
            ".work-zircon",
            ".work-emeralds",
            ".work-dynadesign",
            ".work-skeleton",
            ".work-clitterbin",
            ".work-cdatalib",
            ".work-artsxedio",
            ".work-pop-on-scratch",
            ".work-multicore",
        ].forEach(work => {
            let inner_text = document.querySelector(work);
            const title = `${inner_text
                .classList[1]
                .toString()
                .split("-")
                .slice(1)
                .join(" ")
                .toUpperCase()
            }`;
            let material = rolling_distort_material();

            let blotter_text = create_blotter_text(inner_text);
            let blotter = new Blotter(material, {
                texts: blotter_text,
            });

            let scope = blotter.forText(blotter_text);

            inner_text.addEventListener("mouseleave", () => {
                material.uniforms.uSineDistortSpread.value = 0;
                material.uniforms.uNoiseDistortVolatility.value = 0;
                material.uniforms.uSineDistortAmplitude.value = 0;
                material.uniforms.uNoiseDistortAmplitude.value = 0;
                inner_text.innerHTML = title;
                blotter.removeTexts(inner_text);
                blotter.stop();
            });

            inner_text.addEventListener("mouseenter", () => {
                material.uniforms.uSineDistortSpread.value = 0.035;
                material.uniforms.uNoiseDistortVolatility.value = 15;
                material.uniforms.uSineDistortAmplitude.value = 0.03;
                material.uniforms.uNoiseDistortAmplitude.value = 0.01;
                inner_text.innerHTML = "";
                scope.appendTo(inner_text);
                blotter.start();
            });

            const redraw_text = () => {
                blotter.stop();
                blotter_text = create_blotter_text(inner_text);
                blotter = new Blotter(material, {
                    texts: blotter_text,
                });
                scope = blotter.forText(blotter_text);
                blotter.stop();
            }

            window.addEventListener("resize", redraw_text);
            window.addEventListener("theme-toggle", redraw_text);
        });
    });
</script>

<div class="work-section" style="visibility: hidden;">
    <div class="work work-1">
        <a href="/work/margaret" draggable="false">
            <div class="work-title work-margaret">Margaret</div>
        </a>
        <div class="work-date">2022 - Present</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-2">
        <a href="/work/cspec" draggable="false">
            <div class="work-title work-cspec">cSpec</div>
        </a>
        <div class="work-date">2021 - Present</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-3"a>
        <a href="/work/dreamnotexpiring" draggable="false">
            <div class="work-title work-dreamnotexpiring">dreamnotexpiring</div>
        </a>
        <div class="work-date">2023</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-4">
        <a href="/work/salsa" draggable="false">
            <div class="work-title work-salsa-pomodoro-timer">Salsa Pomodoro Timer</div>
        </a>
        <div class="work-date">2023</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-5">
        <a href="/work/aerocss" draggable="false">
            <div class="work-title work-aerocss">AeroCSS</div>
        </a>
        <div class="work-date">2023</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-6">
        <a href="/work/zircon" draggable="false">
            <div class="work-title work-zircon">Zircon</div>
        </a>
        <div class="work-date">2020-2021</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-7">
        <a href="/work/emeralds" draggable="false">
            <div class="work-title work-emeralds">Emeralds</div>
        </a>
        <div class="work-date">2021</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-8">
        <a href="/work/dynadesign" draggable="false">
            <div class="work-title work-dynadesign">DynaDesign</div>
        </a>
        <div class="work-date">2021 - ?</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-9">
        <a href="/work/skeleton" draggable="false">
            <div class="work-title work-skeleton">Skeleton</div>
        </a>
        <div class="work-date">2020 - 2021</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-10">
        <a href="/work/clitterbin" draggable="false">
            <div class="work-title work-clitterbin">cLitterbin</div>
        </a>
        <div class="work-date">2020</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-11">
        <a href="/work/cdatalib" draggable="false">
            <div class="work-title work-cdatalib">cDataLib</div>
        </a>
        <div class="work-date">2019 - 2020</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-12">
        <a href="/work/artsxedio" draggable="false">
            <div class="work-title work-artsxedio">ArtSxedio</div>
        </a>
        <div class="work-date">2018</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-13">
        <a href="/work/princeofpersia" draggable="false">
            <div class="work-title work-pop-on-scratch">POP on Scratch</div>
        </a>
        <div class="work-date">2016</div>
    </div>

    <div class="work-line"></div>

    <div class="work work-14">
        <a href="/work/multicore" draggable="false">
            <div class="work-title work-multicore">MultiCore</div>
        </a>
        <div class="work-date">2015 - 2016</div>
    </div>
</div>

<style>
    .work-section {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: min-content;
        width: 100%;
        padding: 4rem 0;
    }

    .work {
        overflow: hidden;
        display: flex;
        align-items: baseline;
        font-family: "Saol Display";
        color: var(--fg-color);
    }

    .work-title {
        padding: 2vw;
        font-size: 6vw;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 100%;
    }

    .work-date {
        padding-left: 1vw;
        font-family: "Saol Text";
        font-weight: lighter;
        font-size: 1.4vw;
    }

    .work-line {
        height: 1px;
        background-color: var(--fg-color);
        z-index: 1;
        transform-origin: left top;
    }

    .work-1,
    .work-4,
    .work-7,
    .work-10,
    .work-13 {
        font-weight: 600;
        font-size: 3vw;
        text-transform: uppercase;
    }

    .work-3,
    .work-11 {
        font-weight: lighter;
        text-transform: uppercase;
        font-size: 3vw;
    }

    .work-2,
    .work-6,
    .work-12 {
        font-weight: lighter;
        font-size: 3vw;
        text-transform: uppercase;
    }

    .work-5,
    .work-8,
    .work-9,
    .work-14 {
        font-size: 3vw;
        text-transform: uppercase;
        font-weight: bold;
    }

    .work-1 {
        margin-left: 20%;
    }
    .work-2 {
        margin-left: 60%;
    }
    .work-3 {
        margin-left: 9%;
    }
    .work-4 {
        margin-left: 0;
    }
    .work-5 {
        margin-left: 53%;
    }
    .work-6 {
        margin-left: 22%;
    }
    .work-7 {
        margin-left: 50%;
    }
    .work-8 {
        margin-left: 5%;
    }
    .work-9 {
        margin-left: 45%;
    }
    .work-10 {
        margin-left: 10%;
    }
    .work-11 {
        margin-left: 60%;
    }
    .work-12 {
        margin-left: 20%;
    }
    .work-13 {
        margin-left: 5%;
    }
    .work-14 {
        margin-left: 50%;
    }
</style>
