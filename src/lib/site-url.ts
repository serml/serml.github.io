const absoluteUrlPattern = /^https?:\/\//i;

export function normalizeSiteUrl(siteUrl: string): string {
	const trimmed = siteUrl.trim();
	if (!trimmed) {
		throw new Error("siteConfig.siteUrl must not be empty");
	}

	return trimmed.replace(/\/+$/, "");
}

export function withTrailingSlash(siteUrl: string): string {
	return `${normalizeSiteUrl(siteUrl)}/`;
}

export function buildAbsoluteUrl(pathOrUrl: string, siteUrl: string): string {
	const value = pathOrUrl.trim();
	if (absoluteUrlPattern.test(value)) {
		return value;
	}

	const baseUrl = withTrailingSlash(siteUrl);
	const basePath = new URL(baseUrl).pathname;
	const normalizedPath = value.replace(/^\/+/, "");
	return new URL(normalizedPath, `${new URL(baseUrl).origin}${basePath}`).href;
}

export function buildCanonicalUrl(pathname: string, siteUrl: string): string {
	const baseUrl = withTrailingSlash(siteUrl);
	const basePath = new URL(baseUrl).pathname;
	const pathWithoutBase = pathname.startsWith(basePath)
		? pathname.slice(basePath.length)
		: pathname.replace(/^\/+/, "");
	const canonical = new URL(pathWithoutBase, baseUrl);
	canonical.search = "";
	canonical.hash = "";

	const lastSegment = canonical.pathname.split("/").filter(Boolean).at(-1);
	const isFilePath = lastSegment?.includes(".") ?? false;
	if (!isFilePath && !canonical.pathname.endsWith("/")) {
		canonical.pathname = `${canonical.pathname}/`;
	}

	return canonical.href;
}
