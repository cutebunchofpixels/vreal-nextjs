import { NextRequest } from "next/server"

import { breakpointRedirectMiddleware } from "@/app/src/middleware/breakpointRedirect"

export function middleware(request: NextRequest) {
    console.log("MIDDLEWARE")

    breakpointRedirectMiddleware(request)
}

export const config = {
    matcher: "/",
}

