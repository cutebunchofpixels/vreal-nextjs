"use client"

import { useState, createContext, useContext, ReactNode } from "react"
import { CurrencyStore } from "@/app/src/currency/store/CurrencyStore."
import { ExchangeRateRecord } from "@/app/src/currency/types/ExchangeRateRecord"

const CurrencyContext = createContext<CurrencyStore | null>(null)

export function useCurrencyContext() {
    const currencyStore = useContext(CurrencyContext)

    if (!currencyStore) {
        throw new Error(
            "useCurrencyContext must be used within a CurrencyContextProvider"
        )
    }

    return currencyStore
}

interface CurrencyContextProviderProps {
    exchangeRates: ExchangeRateRecord[]
    children: ReactNode
}

const CurrencyContextProvider = ({
    exchangeRates,
    children,
}: CurrencyContextProviderProps) => {
    const [currencyStore] = useState(() => new CurrencyStore())

    currencyStore.hydrate(exchangeRates)

    return (
        <CurrencyContext.Provider value={currencyStore}>
            {children}
        </CurrencyContext.Provider>
    )
}

export default CurrencyContextProvider

