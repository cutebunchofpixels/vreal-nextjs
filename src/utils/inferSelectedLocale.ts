import { Locale } from "@/src/types/Locale"
import { SELECTED_LOCALE_KEY } from "@/src/config/constants"
import { ls } from "@/src/config/secureLS"

export function inferSelectedLocale(): Locale {
    const persistedLocale = ls.instance.get(SELECTED_LOCALE_KEY)

    if (persistedLocale) {
        return persistedLocale as Locale
    }

    return Locale.English
}

