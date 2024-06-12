import { Currency } from "@/app/src/currency/types/Currency"

export type ExchangeRateDto = { date: string } & {
    [key: string]: {
        [key in Currency]: number
    }
}

