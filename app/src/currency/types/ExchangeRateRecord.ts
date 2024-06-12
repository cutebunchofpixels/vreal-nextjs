import { Dayjs } from "dayjs"

import { Currency } from "@/app/src/currency/types/Currency"

export interface ExchangeRateRecord {
    currency: Currency
    date: string
    exchangeRates: {
        [key in Currency]: number
    }
}

