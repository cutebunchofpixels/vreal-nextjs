import { makeAutoObservable } from "mobx"

import { Locale } from "@/src/types/Locale"
import { SELECTED_LOCALE_KEY } from "@/src/config/constants"
import Cookies from "js-cookie"

export class OptionsStore {
    constructor() {
        makeAutoObservable(this)
    }

    locale: Locale = Locale.English

    setLocale(locale: Locale) {
        this.locale = locale
        Cookies.set(SELECTED_LOCALE_KEY, locale)
    }

    hydrate(locale: Locale) {
        this.locale = locale
    }
}

