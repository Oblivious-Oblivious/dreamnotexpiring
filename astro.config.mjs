import { defineConfig } from "astro/config";
import preprocess from "svelte-preprocess";

// https://astro.build/config
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";

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
        react(),
    ],
});
