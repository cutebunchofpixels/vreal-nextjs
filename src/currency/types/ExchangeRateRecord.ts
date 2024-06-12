import { Dayjs } from "dayjs"

import { Currency } from "@/src/currency/types/Currency"

export interface ExchangeRateRecord {
    currency: Currency
    date: string
    exchangeRates: {
        [key in Currency]: number
    }
}

