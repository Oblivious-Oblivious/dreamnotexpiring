import { defineConfig } from "astro/config";
import preprocess from "svelte-preprocess";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    integrations: [
        svelte({
            preprocess: [
                preprocess({
                    postcss: true,
                }),
            ],
        }),
    ],
});
