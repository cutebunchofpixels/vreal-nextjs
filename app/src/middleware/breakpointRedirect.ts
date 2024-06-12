import MobileDetect from "mobile-detect"

import { Breakpoint } from "@/app/src/types/Breakpoint"
import { NextRequest, NextResponse } from "next/server"

const PUBLIC_FILE_REGEX = /\.(.*)$/

function getViewportFromUserAgent(userAgent: string | null): Breakpoint {
    if (!userAgent) {
        return Breakpoint.LG
    }

    const device = new MobileDetect(userAgent)

    const isMobile = device.mobile()
    const isTablet = device.tablet()

    if (isMobile && !isTablet) {
        return Breakpoint.XS
    }

    if (isTablet) {
        return Breakpoint.MD
    }

    return Breakpoint.LG
}

export function breakpointRedirectMiddleware(request: NextRequest) {
    const breakpoint = getViewportFromUserAgent(
        request.headers.get("user-agent")
    )

    if (!PUBLIC_FILE_REGEX.test(request.nextUrl.pathname)) {
        request.nextUrl.pathname = `/${breakpoint}`
        return NextResponse.rewrite(request.nextUrl)
    }
}
