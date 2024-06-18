import { Translations } from "@/src/types/Locale"

export function getTranslation(key: string, translations: Translations) {
    const keys = key.split(".")
    let iterator: Translations = translations

    for (const key of keys) {
        if (typeof iterator[key] === "object") {
            //@ts-ignore
            iterator = iterator[key]
        } else {
            break
        }
    }

    const result = iterator[keys.at(-1)!]

    if (typeof result !== "string") {
        return key
    }

    return result
}
