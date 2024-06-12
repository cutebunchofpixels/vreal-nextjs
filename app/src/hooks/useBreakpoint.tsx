"use client"

import React, {
    ReactNode,
    useState,
    useEffect,
    createContext,
    useContext,
} from "react"

import { breakpoints } from "@/app/src/config/breakpoints"
import { Breakpoint } from "@/app/src/types/Breakpoint"
import { useDebouncedValue } from "@/app/src/hooks/useDebouncedValue"

const BreakpointContext = createContext<Breakpoint | null>(null)

function matchBreakpoint(window: Window): Breakpoint {
    if (window.matchMedia(`(min-width: ${breakpoints.xl}px)`).matches) {
        return Breakpoint.XL
    }

    if (window.matchMedia(`(min-width: ${breakpoints.lg}px)`).matches) {
        return Breakpoint.LG
    }

    if (window.matchMedia(`(min-width: ${breakpoints.md}px)`).matches) {
        return Breakpoint.MD
    }

    if (window.matchMedia(`(min-width: ${breakpoints.sm}px)`).matches) {
        return Breakpoint.SM
    }

    if (window.matchMedia(`(min-width: ${breakpoints.xs}px)`).matches) {
        return Breakpoint.XS
    }

    return Breakpoint.XL
}

interface BreakpointProviderProps {
    children: ReactNode
    initialBreakpoint: Breakpoint
}

const BreakpointProvider = ({
    children,
    initialBreakpoint,
}: BreakpointProviderProps) => {
    const [breakpoint, setBreakpoint] = useState<Breakpoint>(
        initialBreakpoint || Breakpoint.LG
    )
    const debouncedBreakpoint = useDebouncedValue(breakpoint, 200)

    useEffect(() => {
        const currentBreakpoint = matchBreakpoint(window)
        setBreakpoint(currentBreakpoint)

        function handleWindowResize() {
            const newViewport = matchBreakpoint(window)
            setBreakpoint(newViewport)
        }

        window.addEventListener("resize", handleWindowResize)

        return () => {
            window.removeEventListener("resize", handleWindowResize)
        }
    }, [])

    return (
        <BreakpointContext.Provider
            value={!debouncedBreakpoint ? breakpoint : debouncedBreakpoint}
        >
            {children}
        </BreakpointContext.Provider>
    )
}

function useBreakpoint() {
    const context = useContext(BreakpointContext)

    if (context === null) {
        throw new Error(
            "useBreakpoint must be used within a BreakpointProvider"
        )
    }

    return context
}

export { useBreakpoint, BreakpointProvider, BreakpointContext }

