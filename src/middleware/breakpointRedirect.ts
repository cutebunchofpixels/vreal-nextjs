import MobileDetect from "mobile-detect"

import { Breakpoint } from "@/src/types/Breakpoint"

export const PUBLIC_FILE_REGEX = /\.(.*)$/

export function getViewportFromUserAgent(userAgent: string | null): Breakpoint {
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

