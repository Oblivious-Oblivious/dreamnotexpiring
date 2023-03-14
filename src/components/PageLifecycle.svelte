<script>
    export let current_page;

    import { onMount } from "svelte";
    import { underline_value } from "./Header/underline_value";

    onMount(() => {
        $underline_value = current_page;

        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        // Smooth Scrollbar + GSAP ScrollTrigger
        const scroll_smoother = ScrollSmoother.create({
            smooth: 1.25,
            effects: true,
            smoothTouch: true,
        });

        scroll_smoother.scrollTop(1);

        const to_about_in = next => {
            gsap.to("#swup", {
                onComplete: next,
            });
        }

        const from_work_out = next => {
            gsap.to("#swup", {
                duration: 0.8,
                onComplete: next,
            });

            gsap.to("#work-section", {
                duration: 0.65,
                opacity: 0,
                yPercent: -300,
                stagger: 0.015,
                ease: "power2.in",
            });
        }

        const to_work_in = next => {
            gsap.fromTo("#swup", {
                duration: 0.5,
                autoAlpha: 0,
            }, {
                ease: "power1.out",
                autoAlpha: 1,
                yPercent: 0,
                onComplete: next,
            });

            gsap.fromTo("#work-section", {
                duration: 0.5,
                yPercent: 120,
            }, {
                ease: "power1.out",
                yPercent: 0,
                stagger: 0.04,
            });
        }

        const from_about_out = next => {
            gsap.to("#swup", {
                duration: 0.65,
                ease: "power4.out",
                autoAlpha: 0,
                onComplete: next,
            });
        }

        // TODO Try fix this (scroll 0 instead of 1)
        const start_from_page_top = () => scroll_smoother.scrollTop(1);

        new Swup({
            animateHistoryBrowsing: true,
            plugins: [
                new SwupHeadPlugin(),
                new SwupJsPlugin([
                    {
                        from: "/",
                        to: "/about",
                        in: next => to_about_in(next),
                        out: next => from_work_out(next),
                    },
                    {
                        from: "/about",
                        to: "/",
                        in: next => to_work_in(next),
                        out: next => from_about_out(next),
                    },
                ]),
                new SwupPreloadPlugin(),
            ],
        }).on("pageView", start_from_page_top);
    });
</script>
