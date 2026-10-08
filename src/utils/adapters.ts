import type { ListingItem, DetailItem } from "../types";

function formatDate(dateValue: string | Date | undefined, locale = "en"): string | undefined {
    if (!dateValue) return undefined;
    if (typeof dateValue === "string" && /^\d{4}$/.test(dateValue)) return dateValue;
    const date = typeof dateValue === 'string' ? new Date(dateValue) : dateValue;
    if (isNaN(date.getTime())) return undefined;
    return date.toLocaleDateString(locale === "es" ? "es-ES" : "en-US", { year: 'numeric', month: 'long' });
}

export function getListingItem(entry: any, collection?: string, locale = "en"): ListingItem {
    const d = entry.data;
    
    return {
        title: d.title,
        description: d.description,
        date: formatDate(d.date, locale),
        authors: d.author,
        extraInput: d.journal || d.event || d.institution,
        tags: d.tags || [],
        externalUrl: d.doi ? `https://doi.org/${d.doi}` : d.external_url,
        image: d.image,
    };
}

export function getDetailItem(entry: any, collection: string, locale = "en"): DetailItem {
    const listing = getListingItem(entry, collection, locale);
    
    return {
        ...listing,
        backHref: collection === 'posts' ? '/posts' : `/${collection}`,
    };
}
