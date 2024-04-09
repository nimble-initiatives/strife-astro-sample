import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables"
    }
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true
  },
  site: 'https://lexingtonthemes.com',
  integrations: [tailwind(), sitemap(), mdx(), lit()],
  output: "server",
  vite: {
    ssr: {
      noExternal: ['@strifeapp/strife']
    }
  },
});