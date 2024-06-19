import { notFound } from "next/navigation"

import ExchangeChartBlock from "@/src/components/currency/ExchangeChartBlock"
import PaymentCardList from "@/src/components/currency/PaymentCardList"
import CurrencyContextProvider from "@/src/currency/context/CurrencyContextProvider"
import { CurrencyExchangeService } from "@/src/currency/api/CurrencyService"
import { Currency } from "@/src/currency/types/Currency"
import { serverDayjs } from "@/src/config/dayjs"
import CurrencyPageTitle from "@/src/components/currency/CurrencyPageTitle"
import ExchangeIntervalFormBlock from "@/src/components/currency/ExchangeIntervalFormBlock"
import { CurrencyPagePathParams } from "@/src/currency/types/CurrencyPagePathParams"
import { InvalidExchangeIntervalError } from "@/src/currency/errors/InvalidExchangeIntervalError"
import {
    DEFAULT_START_DATE,
    EXCHANGE_INTERVAL_SIZE,
    MAX_EXCHANGE_INTERVAL,
} from "@/src/currency/constants"
import { isValidEndDate, isValidStartDate } from "@/src/currency/utils/dates"

import styles from "./styles.module.scss"

interface CurrecyPageProps {
    params: CurrencyPagePathParams
}

export default async function CurrencyPage({
    params: { startDate, endDate },
}: CurrecyPageProps) {
    const parsedStartDate = serverDayjs(startDate)
    const parsedEndDate = serverDayjs(endDate)

    if (!parsedStartDate.isValid() || !parsedEndDate.isValid()) {
        throw new InvalidExchangeIntervalError()
    }

    if (
        !isValidStartDate(parsedStartDate, parsedEndDate) ||
        !isValidEndDate(parsedStartDate, parsedEndDate)
    ) {
        notFound()
    }

    const exchangeRates =
        await CurrencyExchangeService.getExchangeRatesForPeriod(
            Currency.UAH,
            parsedStartDate,
            parsedEndDate
        )

    return (
        <CurrencyContextProvider exchangeRates={exchangeRates}>
            <div className={styles.currencyPage}>
                <CurrencyPageTitle />
                <ExchangeIntervalFormBlock />
                <PaymentCardList />
                <ExchangeChartBlock />
            </div>
        </CurrencyContextProvider>
    )
}

export function generateStaticParams() {
    const result: any[] = []

    for (
        let startDateOffset = 0;
        startDateOffset < MAX_EXCHANGE_INTERVAL - EXCHANGE_INTERVAL_SIZE;
        startDateOffset++
    ) {
        result.push({
            startDate: DEFAULT_START_DATE.add(startDateOffset, "day").format(
                "YYYY-MM-DD"
            ),
            endDate: DEFAULT_START_DATE.add(
                startDateOffset + EXCHANGE_INTERVAL_SIZE,
                "day"
            ).format("YYYY-MM-DD"),
        })
    }

    return result
}

