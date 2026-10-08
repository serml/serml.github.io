import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/serml",
        linkTitle: `Follow me on Github`,
        isActive: true,
    },
    {
        name: "Mail",
        href: "mailto:sergio.munoz@upm.es",
        linkTitle: `Send me an email`,
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.es/citations?user=AWpEEtQAAAAJ&hl=en&oi=sra",
        linkTitle: `Sergio Muñoz on Google Scholar`,
        isActive: true,
    },
    {
        name: "ORCID",
        href: "https://orcid.org/0000-0002-2070-8976",
        linkTitle: `Sergio Muñoz on ORCID`,
        isActive: true,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/smunozlo/",
        linkTitle: `Sergio Muñoz on LinkedIn`,
        isActive: true, // Assuming Claude doesn't have a LinkedIn profile
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    RSS: "RSS",
};