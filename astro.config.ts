// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import UnoCSS from "unocss/vite";
import siteConfig from "./src/side.config";
import { withTrailingSlash } from "./src/lib/site-url";

export default defineConfig({
	site: withTrailingSlash(new URL(siteConfig.siteUrl).origin),
	integrations: [sitemap(), mdx()],
	vite: {
		build: {
			assetsInlineLimit: 0,
		},
		plugins: [UnoCSS()],
	},
	image: {
		responsiveStyles: true,
	},
	prefetch: {
		prefetchAll: true,
		defaultStrategy: "hover",
	},
});
