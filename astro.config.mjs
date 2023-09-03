import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  site: "https://hide0.net",
  integrations: [react(), tailwind(), sitemap(), compress(), relativeLinks()]
});