import { Locale } from "@/src/types/Locale"
import { SELECTED_LOCALE_KEY } from "@/src/config/constants"
import Cookies from "js-cookie"

export function inferSelectedLocale(): Locale {
    const persistedLocale = Cookies.get(SELECTED_LOCALE_KEY)

    if (!persistedLocale) {
        return Locale.English
    }

    return persistedLocale as Locale
}

