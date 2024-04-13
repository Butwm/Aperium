import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue()],
  site: "https://https://butwm.github.io/",
  base: "/aperium",
  output: "server",
  adapter: cloudflare()
});