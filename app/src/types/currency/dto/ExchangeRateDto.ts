import { Currency } from "@/app/src/types/currency/Currency"

export type ExchangeRateDto = { date: string } & {
    [key: string]: {
        [key in Currency]: number
    }
}

