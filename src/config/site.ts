import type { SiteConfig, ThemeConfig, SettingsConfig, UmamiAnalyticsConfig, AnalyticsConfig } from "../types";

export const SITE: SiteConfig = {
    website: "https://serml.github.io/",
    author: "Sergio Muñoz",
    desc: "Profesor e investigador en inteligencia artificial en la UPM y miembro del GSI. Investigo IA aplicada a la salud mental, el procesamiento del lenguaje natural y los sistemas basados en agentes.",
    title: "Sergio Muñoz",
    ogImage: "/sergio.png",
    postPerPage: 5,
    favicon: "/sergio.png",
    lang: "es",
};

export const THEME_CONFIG: ThemeConfig = {
    lightAndDark: true,
    themeLight: "light_default",
    themeDark: "dark_notepad",
};

export const SETTINGS: SettingsConfig = {
    showTagsInNavbar: true,
    showRSSInFooter: false,
    addDevToolsInProduction: false,
};

const umami: UmamiAnalyticsConfig = {
    websiteId: "", // e.g., 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
    src: "https://cloud.umami.is/script.js", // Default Umami cloud script URL
}

export const ANALYTICS: AnalyticsConfig = {
    // Google Analytics 4 Measurement ID (e.g., 'G-XXXXXXXXXX')
    ga4Id: "",
    // Umami Analytics configuration
    umami: umami
};
