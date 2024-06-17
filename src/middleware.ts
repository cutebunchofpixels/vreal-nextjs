import { NextRequest, NextResponse } from "next/server"

import {
    getLocaleFromRequest,
    getViewportFromUserAgent,
    pathnameHasLocale,
} from "@/src/middlewares"
import { SELECTED_LOCALE_KEY } from "@/src/config/constants"

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    if (pathnameHasLocale(pathname)) {
        return
    }

    const breakpoint = getViewportFromUserAgent(
        request.headers.get("user-agent")
    )

    const persistedLocale = request.cookies.get(SELECTED_LOCALE_KEY)?.value
    let newPath = `${breakpoint}/${pathname}`

    if (!persistedLocale) {
        const localeFromRequest = getLocaleFromRequest(request)
        newPath = `${localeFromRequest}/${breakpoint}/${pathname}`
    } else {
        newPath = `${persistedLocale}/${breakpoint}/${pathname}`
    }

    return NextResponse.redirect(new URL(newPath, request.url))
}

export const config = {
    matcher: ["/((?!_next).*)"],
}

