import { makeAutoObservable } from "mobx"

import { Locale } from "@/src/types/Locale"
import { SELECTED_LOCALE_KEY } from "@/src/config/constants"
import { setCookie } from "@/src/utils/cookies"

export class OptionsStore {
    constructor() {
        makeAutoObservable(this)
    }

    locale: Locale = Locale.English

    setLocale(locale: Locale) {
        this.locale = locale
        setCookie(SELECTED_LOCALE_KEY, locale)
    }

    hydrate(locale: Locale) {
        this.locale = locale
    }
}

