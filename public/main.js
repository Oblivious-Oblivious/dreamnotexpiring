const options = [{
    from: "(.*)",
    to: "(.*)",
    in: (next, infos) => {
        document.querySelector("#swup").style.opacity = 0;
        gsap.to(document.querySelector("#swup"), {
            duration: 1,
            opacity: 1,
            onComplete: next,
        });
    },
    out: (next, infos) => {
        document.querySelector("#swup").style.opacity = 1;
        gsap.to(document.querySelector("#swup"), 0.5, {
            duration: 1,
            opacity: 0,
            onComplete: next,
        });
    },
}];

const swup = new Swup({
    animateHistoryBrowsing: true,
    plugins: [
        new SwupHeadPlugin(),
        new SwupJsPlugin(options),
    ],
});
