import { Currency } from "@/app/src/types/currency/Currency"
import { ExchangeRateRecord } from "@/app/src/types/currency/ExchangeRateRecord"
import { dayjs } from "@/app/src/utils/dayjs"

export const mockExchangeRates: ExchangeRateRecord[] = [
    {
        date: dayjs("2024-06-01T21:00:00.000Z"),
        currency: Currency.UAH,
        exchangeRates: {
            usd: 0.024931312,
            eur: 0.022705033,
            uah: 1,
        },
    },
    {
        date: dayjs("2024-07-01T21:00:00.000Z"),
        currency: Currency.UAH,
        exchangeRates: {
            usd: 0.024931318,
            eur: 0.022705034,
            uah: 1,
        },
    },
    {
        date: dayjs("2024-08-01T21:00:00.000Z"),
        currency: Currency.UAH,
        exchangeRates: {
            usd: 0.025034312,
            eur: 0.022805033,
            uah: 1,
        },
    },
    {
        date: dayjs("2024-09-01T21:00:00.000Z"),
        currency: Currency.UAH,
        exchangeRates: {
            usd: 0.025131312,
            eur: 0.022905033,
            uah: 1,
        },
    },
    {
        date: dayjs("2024-10-01T21:00:00.000Z"),
        currency: Currency.UAH,
        exchangeRates: {
            usd: 0.025231312,
            eur: 0.023005033,
            uah: 1,
        },
    },
]

