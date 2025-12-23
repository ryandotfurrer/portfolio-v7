// @ts-check
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  experimental: {
    fonts: [
      {
        name: "Geist",
        cssVariable: "--font-geist",
        provider: fontProviders.google(),
        weights: [400, 500, 600, 700, 800],
        styles: ["normal", "italic"],
        subsets: ["latin", "cyrillic"],
        fallbacks: ["sans-serif"],
      },
      {
        name: "Geist Mono",
        cssVariable: "--font-geist-mono",
        provider: fontProviders.google(),
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        styles: ["normal", "italic"],
        subsets: ["latin", "latin-ext"],
        fallbacks: ["monospace"],
      },
    ],
  },
  integrations: [
    react(),
    sitemap(),
    sanity({
      projectId: "z2j0j9ei",
      dataset: "production",
      useCdn: false,
    }),
  ],
  site: "https://portfolio-v7-gamma.vercel.app/",
  vite: {
    // @ts-expect-error - Vite version mismatch between Astro (v6) and @tailwindcss/vite (v7)
    // The plugin works at runtime despite the type incompatibility
    plugins: [tailwindcss()],
  },
});
