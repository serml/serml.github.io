import type { Locale } from "./i18n";
import { getLocalizedCollection } from "./content";

export async function getAllTags(locale: Locale = "es") {
    const publications = await getLocalizedCollection('publications', locale);
    const talks = await getLocalizedCollection('talks', locale);
    const projects = await getLocalizedCollection('projects', locale);
    const posts = await getLocalizedCollection('posts', locale);
    const teaching = await getLocalizedCollection('teaching', locale);

    const allEntries = [...publications, ...talks, ...projects, ...posts, ...teaching];
    const tags: Record<string, number> = {};

    allEntries.forEach(entry => {
        const entryTags = (entry.data as any).tags || [];
        entryTags.forEach((tag: string) => {
            const normalizedTag = tag.trim().toLowerCase();
            if (normalizedTag) {
                tags[normalizedTag] = (tags[normalizedTag] || 0) + 1;
            }
        });
    });

    return Object.entries(tags)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export async function getContentByTag(tag: string, locale: Locale = "es") {
    const normalizedSearchTag = tag.toLowerCase();

    const publications = await getLocalizedCollection('publications', locale);
    const talks = await getLocalizedCollection('talks', locale);
    const projects = await getLocalizedCollection('projects', locale);
    const posts = await getLocalizedCollection('posts', locale);
    const teaching = await getLocalizedCollection('teaching', locale);

    const filterFn = (entry: any) => {
        const entryTags = (entry.data as any).tags || [];
        return entryTags.some((t: string) => t.toLowerCase() === normalizedSearchTag);
    };

    return [
        ...publications.filter(filterFn).map(e => ({ ...e, collection: 'publications' })),
        ...talks.filter(filterFn).map(e => ({ ...e, collection: 'talks' })),
        ...projects.filter(filterFn).map(e => ({ ...e, collection: 'projects' })),
        ...posts.filter(filterFn).map(e => ({ ...e, collection: 'posts' })),
        ...teaching.filter(filterFn).map(e => ({ ...e, collection: 'teaching' })),
    ].sort((a, b) => {
        const dateA = new Date((a.data as any).date || 0);
        const dateB = new Date((b.data as any).date || 0);
        return dateB.getTime() - dateA.getTime();
    });
}
