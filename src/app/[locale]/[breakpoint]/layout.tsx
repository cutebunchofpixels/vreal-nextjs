import { BreakpointProvider } from "@/src/hooks/useBreakpoint"
import { Breakpoint } from "@/src/types/Breakpoint"
import { ReactNode } from "react"

interface PathParams {
    breakpoint: Breakpoint
}

interface BreakpointLayoutProps {
    params: PathParams
    children: ReactNode
}

export default function BreakpointLayout({
    children,
    params,
}: BreakpointLayoutProps) {
    const { breakpoint } = params
    console.log(params)

    return (
        <BreakpointProvider initialBreakpoint={breakpoint}>
            {children}
        </BreakpointProvider>
    )
}

