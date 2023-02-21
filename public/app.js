import { inject } from "@vercel/analytics";

inject();

new Swup({
    animateHistoryBrowsing: true,
    plugins: [new SwupHeadPlugin()],
});
