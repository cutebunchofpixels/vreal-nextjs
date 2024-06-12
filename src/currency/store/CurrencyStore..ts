import { makeAutoObservable, runInAction } from "mobx"

import { Currency } from "@/src/currency/types/Currency"
import { CurrencyExchangeService } from "@/src/currency/api/CurrencyService"
import { ExchangeRateRecord } from "@/src/currency/types/ExchangeRateRecord"
import { serverDayjs } from "@/src/config/dayjs"
import { Dayjs } from "dayjs"

export class CurrencyStore {
    constructor() {
        makeAutoObservable(this)
    }

    exchangeRates: ExchangeRateRecord[] = []
    startDate: Dayjs = serverDayjs().startOf("week")
    endDate: Dayjs = serverDayjs()
    isLoading = false
    error: string | null = null

    get isEmpty() {
        return this.exchangeRates.length === 0
    }

    get loadedStartDate() {
        return this.exchangeRates.at(0)?.date
    }

    get loadedEndDate() {
        return this.exchangeRates.at(-1)?.date
    }

    async fetchExchangeRates(
        currency: Currency,
        startDate: Dayjs,
        endDate: Dayjs
    ) {
        this.isLoading = true

        try {
            const exchangeRates =
                await CurrencyExchangeService.getExchangeRatesForPeriod(
                    currency,
                    startDate,
                    endDate
                )

            runInAction(() => {
                this.exchangeRates = exchangeRates
                this.error = null
            })
        } catch (error) {
            runInAction(() => {
                this.exchangeRates = []
                this.error = (error as Error).message
            })
        }

        runInAction(() => {
            this.isLoading = false
        })
    }

    hydrate(exchangeRates: ExchangeRateRecord[]) {
        this.exchangeRates = exchangeRates
    }
}

// export const currencyStore = new CurrencyStore()

// autorun(() => {
//     const { startDate, endDate } = currencyStore
//     const loadedStartDate = currencyStore.loadedStartDate
//     const loadedEndDate = currencyStore.loadedEndDate
//     currencyStore.fetchExchangeRates(Currency.UAH, startDate, endDate)
// })

