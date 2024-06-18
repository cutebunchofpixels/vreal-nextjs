"use client"

import { createContext, useContext, ReactNode } from "react"

import { TranslationFunction, Translations } from "@/src/types/Locale"
import { getTranslation } from "@/src/options/utils/getTranslation"

const TranslationContext = createContext<TranslationFunction | null>(null)

export function useTranslation() {
    const t = useContext(TranslationContext)

    if (!t) {
        throw new Error(
            "useTranslation must be used within a CurrencyContextProvider"
        )
    }

    return t
}

interface TranslationsProviderProps {
    translations: Translations
    children: ReactNode
}

const TranslationsProvider = ({
    translations,
    children,
}: TranslationsProviderProps) => {
    const t: TranslationFunction = (key) => {
        return getTranslation(key, translations)
    }

    return (
        <TranslationContext.Provider value={t}>
            {children}
        </TranslationContext.Provider>
    )
}

export default TranslationsProvider

