import rss from "@astrojs/rss";
import { SITE, PAGES } from "../config";
import { getContentSlug, getLocalizedCollection } from "../utils/content";

export async function GET(context: any) {
    const posts = PAGES.blog.isActive !== false ? await getLocalizedCollection("posts", "es") : [];
    const publications = PAGES.publications.isActive !== false ? await getLocalizedCollection("publications", "es") : [];

    const items = [
        ...posts.map((post: any) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description,
            link: `/posts/${getContentSlug(post)}/`,
        })),
        ...publications.map((pub: any) => ({
            title: `[Publication] ${pub.data.title}`,
            pubDate: pub.data.date,
            description: pub.data.description || `Published in ${pub.data.journal || 'Journal'}`,
            link: `/publications/${getContentSlug(pub)}/`,
        })),
    ].sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

    return rss({
        title: SITE.title,
        description: SITE.desc,
        site: context.site || SITE.website,
        items,
    });
}
