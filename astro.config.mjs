import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import cloudflare from "@astrojs/cloudflare";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue()],
  site: "https://aperium.butwm.space/",
  base: "/Aperium",
  output: "server",
  adapter: cloudflare()
});