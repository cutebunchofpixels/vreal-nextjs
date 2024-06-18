import { getTranslation } from "@/src/options/utils/getTranslation"
import { Translations } from "@/src/types/Locale"

export function getTrasnaltionFunction(translations: Translations) {
    return function (key: string) {
        return getTranslation(key, translations)
    }
}

