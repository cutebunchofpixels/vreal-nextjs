import { NextRequest, NextResponse } from "next/server"
import { serverDayjs } from "@/src/config/dayjs"

import {
    getLocaleFromRequest,
    getViewportFromUserAgent,
    pathnameHasLocale,
} from "@/src/middlewares"
import { SELECTED_LOCALE_KEY } from "@/src/config/constants"
import {
    DEFAULT_START_DATE,
    EXCHANGE_INTERVAL_SIZE,
} from "@/src/currency/constants"

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

    if (newPath.endsWith("currency")) {
        const startDate = DEFAULT_START_DATE
        const endDate = startDate.add(EXCHANGE_INTERVAL_SIZE, "day")
        const formattedStartDate = startDate.format("YYYY-MM-DD")
        const formattedEndDate = endDate.format("YYYY-MM-DD")

        newPath = `${newPath}/${formattedStartDate}/${formattedEndDate}`
    }

    return NextResponse.redirect(new URL(newPath, request.url))
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

