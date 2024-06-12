import { Locale } from "@/app/src/types/Locale"
import { SELECTED_LOCALE_KEY } from "@/app/src/config/constants"
import { ls } from "@/app/src/config/secureLS"

export function inferSelectedLocale(): Locale {
    const persistedLocale = ls.instance.get(SELECTED_LOCALE_KEY)

    if (persistedLocale) {
        return persistedLocale as Locale
    }

    return Locale.English
}

