import { getCollection } from "astro:content";
import type { Locale } from "./i18n";

type ContentCollection = "publications" | "talks" | "teaching" | "projects" | "posts" | "cv";

function getTranslationKey(entry: any): string {
    return entry.data.translationKey ?? entry.id.replace(/\.(es|en)$/, "");
}

function getEntryLocale(entry: any): Locale {
    if (entry.data.lang === "es" || entry.data.lang === "en") return entry.data.lang;
    return entry.id.endsWith(".es") ? "es" : "en";
}

export function getContentSlug(entry: any): string {
    return getTranslationKey(entry);
}

export function selectLocalizedEntries(entries: any[], locale: Locale) {
    const groupedEntries = new Map<string, any[]>();
    for (const entry of entries) {
        const key = getTranslationKey(entry);
        groupedEntries.set(key, [...(groupedEntries.get(key) ?? []), entry]);
    }

    return [...groupedEntries.values()].map((group) =>
        group.find((entry) => getEntryLocale(entry) === locale) ??
        group.find((entry) => getEntryLocale(entry) === "en") ??
        group[0]
    );
}

export async function getLocalizedCollection(collection: ContentCollection, locale: Locale) {
    if (collection === "posts") return [];
    const entries = await getCollection(collection as any);
    const localizedEntries = selectLocalizedEntries(entries, locale);
    return collection === "projects"
        ? localizedEntries.filter((entry) => entry.data.published !== false)
        : localizedEntries;
}

export async function getLocalizedEntry(collection: ContentCollection, id: string, locale: Locale) {
    const entries = await getCollection(collection as any);
    const matches = entries.filter((entry: any) => getTranslationKey(entry) === id);
    return (
        matches.find((entry: any) => getEntryLocale(entry) === locale) ??
        matches.find((entry: any) => getEntryLocale(entry) === "en") ??
        matches[0]
    );
}

export async function getLocalizedBio(locale: Locale) {
    const bios = await getCollection("bio");

    return (
        bios.find((entry) => entry.data.lang === locale) ??
        bios.find((entry) => entry.id === `bio.${locale}`) ??
        bios.find((entry) => entry.id === "bio") ??
        bios[0]
    );
}
