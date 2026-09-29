/**
 * Scholar Pages - primary configuration
 *
 * Start here for identity, profile, links, and page introductions.
 * Publications, CV records, projects, courses, and posts live in src/data
 * and src/content so this file stays quick to scan.
 */
import { defineSiteConfig } from "./src/config/site";

export const siteConfig = defineSiteConfig({
	// Required: the four values most sites should personalize first.
	author: "Sergio Muñoz",
	siteUrl: "https://serml.github.io",
	hero: {
		headline:
			"Associate Professor at Universidad Politécnica de Madrid.",
		subheadline:
			"Sergio Muñoz works as an Associate Professor at Universidad Politécnica de Madrid.",
		profileImage: "/profile.svg",
		profileAlt: "Profile photo of Sergio Muñoz",
		statusBadge: "Associate Professor",
	},

	// Common profile and discovery settings.
	description:
		"The website of Associate Professor Sergio Muñoz.",
	keywords: [
		"sergio muñoz",
		"associate professor",
		"universidad politécnica de madrid",
		"profesor",
		"etsit upm",
		"escuela técnica superior de ingenieros de telecomunicación",
		"etsit upm tfg",
		"teleco",
		"ingeniería de telecomunicaciones",
		"ingeniería biomédica",
		"sergio muñoz lópez",
		"gsi",
		"grupo de sistemas inteligentes",
		"gsi upm"
	],
	// Optional social-preview overrides:
	// language: "en",
	// locale: "en_US",
	// ogImage: "/social-card.png", // Prefer a 1200 × 630 raster image.
	// ogImageAlt: "Scholar name - academic portfolio",
	// ogImageWidth: 1200,
	// ogImageHeight: 630,
	affiliations: [
		{
			role: "Associate Professor",
			department: "Intelligent Systems Group",
			institution: "Universidad Politécnica de Madrid",
		},
	],
	researchInterests: [
		"Digital Health",
		"Urban Computing",
		"Computational Creativity",
		"Sports Analytics",
		"Responsible AI",
	],
	socialLinks: [
		{
			label: "Github",
			href: "https://github.com/serml",
			icon: "i-mdi:github",
		},
		{
			label: "Sample notes",
			href: "https://example.com/mira-latticewell/notes",
			icon: "i-mdi:linkedin",
		},
		{
			label: "Sample archive",
			href: "https://example.com/mira-latticewell/archive",
			icon: "i-mdi:tag-outline",
		},
	],

	// Footer display: links are hidden by default for a quieter academic layout.
	footer: {
		showProfileLinks: false, // Set true to show the social links above in the footer.
		showAuthor: true, // Set false to show the copyright line without the author name.
	},

	// Optional: omit any entry to use the concise academic default copy.
	pageTitles: {
		about: {
			description:
				"A fictional academic background created solely to demonstrate profile, experience, service, and award layouts.",
		},
		researches: {
			description:
				"Fictional publications attributed to Mira Latticewell for demonstrating scholarly records and citation tools.",
		},
		projects: {
			description:
				"Fictional research tools and imaginary infrastructure projects created for this theme demo.",
		},
		teaching: {
			description:
				"Fictional courses showing how teaching records, terms, and materials appear in the theme.",
		},
		posts: {
			description:
				"Fictional notes from the Mira Latticewell demo profile.",
		},
	},

	// Homepage composition: switch off any block you do not want to display.
	homeBlocks: {
		hero: { enabled: true },
		showcase: {
			enabled: true,
			title: "Fictional Initiatives",
			description: "Imaginary systems and prototype research infrastructure",
		},
		publications: {
			enabled: true,
			description: "Selected fictional publications",
		},
		posts: { enabled: true, description: "Notes from a fictional practice" },
	},
});

export default siteConfig;
