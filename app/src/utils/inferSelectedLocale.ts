import { Locale } from "@/app/src/types/Locale"
import { ls } from "@/app/src/utils/secureLS"
import { SELECTED_LOCALE_KEY } from "@/app/src/utils/constants"

export function inferSelectedLocale(): Locale {
    const persistedLocale = ls.get(SELECTED_LOCALE_KEY)

    if (persistedLocale) {
        return persistedLocale as Locale
    }

    return Locale.English
}

