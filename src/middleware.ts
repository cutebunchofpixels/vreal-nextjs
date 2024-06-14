import { NextRequest, NextResponse } from "next/server"

import {
    getLocaleFromRequest,
    getViewportFromUserAgent,
    pathnameHasLocale,
} from "@/src/middlewares"

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    if (pathnameHasLocale(pathname)) {
        return
    }

    const breakpoint = getViewportFromUserAgent(
        request.headers.get("user-agent")
    )
    const locale = getLocaleFromRequest(request)

    const newPath = `${locale}/${breakpoint}/${pathname}`

    return NextResponse.redirect(new URL(newPath, request.url))
}

export const config = {
    matcher: ["/((?!_next).*)"],
}

