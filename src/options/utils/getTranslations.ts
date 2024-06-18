import { Locale } from "@/src/types/Locale"

const translations = {
    [Locale.English]: () =>
        import("@/translations/en.json").then((module) => module.default),
    [Locale.Hebrew]: () =>
        import("@/translations/he.json").then((module) => module.default),
}

export async function getTranslations(locale: Locale) {
    return translations[locale]()
}

