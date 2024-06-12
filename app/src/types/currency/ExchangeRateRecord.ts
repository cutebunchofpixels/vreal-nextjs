import { Dayjs } from "dayjs"

import { Currency } from "@/app/src/types/currency/Currency"

export interface ExchangeRateRecord {
    currency: Currency
    date: string
    exchangeRates: {
        [key in Currency]: number
    }
}

