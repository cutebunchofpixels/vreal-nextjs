import { Locale } from "@/src/types/Locale"
import { SELECTED_LOCALE_KEY } from "@/src/config/constants"
import { getCookie } from "@/src/utils/cookies"

export function inferSelectedLocale(): Locale {
    const persistedLocale = getCookie(SELECTED_LOCALE_KEY)

    if (!persistedLocale) {
        return Locale.English
    }

    return persistedLocale as Locale
}

