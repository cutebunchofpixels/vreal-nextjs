import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { NextRequest } from "next/server"

import { Locale } from "@/src/types/Locale"
import { DEFAULT_LOCALE, locales } from "@/src/config/locales"

export function getLocaleFromRequest(request: NextRequest): Locale {
    const headers = request.headers
    //@ts-ignore
    const languages = new Negotiator({ headers }).languages()

    if (languages.length === 1 && languages[0] === "*") {
        return DEFAULT_LOCALE
    }

    return match(languages, locales, DEFAULT_LOCALE) as Locale
}

export function pathnameHasLocale(pathname: string) {
    return locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === locale
    )
}

