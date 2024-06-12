import { NextRequest, NextResponse } from "next/server"

import {
    PUBLIC_FILE_REGEX,
    getViewportFromUserAgent,
} from "@/src/middleware/breakpointRedirect"

export function middleware(request: NextRequest) {
    const breakpoint = getViewportFromUserAgent(
        request.headers.get("user-agent")
    )

    console.log("BREAKPOINT", breakpoint)

    if (!PUBLIC_FILE_REGEX.test(request.nextUrl.pathname)) {
        const url = request.nextUrl.clone()
        url.pathname = `/${breakpoint}${request.nextUrl.pathname}`
        return NextResponse.rewrite(url)
    }
}

