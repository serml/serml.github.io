import type { APIRoute } from "astro";
import siteConfig from "../side.config";
import { buildAbsoluteUrl } from "../lib/site-url";

export const prerender = true;

export const GET: APIRoute = () => {
	const sitemapUrl = buildAbsoluteUrl("/sitemap-index.xml", siteConfig.siteUrl);
	const body = [
		"User-agent: *",
		"Allow: /",
		"",
		`Sitemap: ${sitemapUrl}`,
		"",
	].join("\n");

	return new Response(body, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
