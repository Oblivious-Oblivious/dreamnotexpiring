import { defineConfig } from "astro/config";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    integrations: [
        svelte(),
        prefetch(),
    ],
});
