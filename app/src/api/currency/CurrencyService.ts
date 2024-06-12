import { Dayjs } from "dayjs"

import { ExchangeRateDto } from "@/app/src/types/currency/dto/ExchangeRateDto"
import { Currency } from "@/app/src/types/currency/Currency"
import { ExchangeRateRecord } from "@/app/src/types/currency/ExchangeRateRecord"

export class CurrencyExchangeService {
    private static baseUrl = process.env.NEXT_PUBLIC_CURRENCY_API_URL

    static async getExchangeRates(
        currency: Currency,
        date: Dayjs
    ): Promise<ExchangeRateRecord> {
        const response = await fetch(
            `${this.baseUrl}/currency-api@${date.format(
                "YYYY-MM-DD"
            )}/v1/currencies/${currency}.min.json`
        )
        const data = (await response.json()) as ExchangeRateDto

        return {
            date: date.toISOString(),
            currency: currency,
            exchangeRates: data[currency],
        }
    }

    static async getExchangeRatesForPeriod(
        currency: Currency,
        startDate: Dayjs,
        endDate: Dayjs
    ) {
        const difference = endDate.diff(startDate, "days")
        const promises: Promise<ExchangeRateRecord>[] = []

        for (let i = 0; i <= difference; i++) {
            promises.push(
                this.getExchangeRates(currency, startDate.add(i, "day"))
            )
        }

        return Promise.all(promises)
    }
}

