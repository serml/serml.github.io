export type Locale = "es" | "en";

import en from "../i18n/locales/en.json";
import es from "../i18n/locales/es.json";

const translations = { en, es } as const;

export function getLocale(pathname: string): Locale {
    return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}

export function getTranslations(locale: Locale) {
    return translations[locale];
}

export function localizedPath(pathname: string, locale: Locale): string {
    const pathWithoutEnglishPrefix = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
    if (locale === "es") return pathWithoutEnglishPrefix;
    return pathWithoutEnglishPrefix === "/" ? "/en" : `/en${pathWithoutEnglishPrefix}`;
}
