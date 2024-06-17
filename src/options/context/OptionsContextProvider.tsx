"use client"

import { useState, createContext, useContext, ReactNode } from "react"

import { OptionsStore } from "@/src/options/store/OptionsStore"
import { Locale } from "@/src/types/Locale"

const OptionsContext = createContext<OptionsStore | null>(null)

export function useOptionsContext() {
    const optionsStore = useContext(OptionsContext)

    if (!optionsStore) {
        throw new Error(
            "useOptionsContext must be used within a CurrencyContextProvider"
        )
    }

    return optionsStore
}

interface OptionsContextProviderProps {
    initialLocale: Locale
    children: ReactNode
}

const OptionsContextProvider = ({
    initialLocale,
    children,
}: OptionsContextProviderProps) => {
    const [optionsStore] = useState(() => new OptionsStore())

    optionsStore.hydrate(initialLocale)

    return (
        <OptionsContext.Provider value={optionsStore}>
            {children}
        </OptionsContext.Provider>
    )
}

export default OptionsContextProvider

