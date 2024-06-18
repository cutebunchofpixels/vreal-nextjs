import ExchangeChartBlock from "@/src/components/currency/ExchangeChartBlock"
import PaymentCardList from "@/src/components/currency/PaymentCardList"
import CurrencyContextProvider from "@/src/currency/context/CurrencyContextProvider"
import { CurrencyExchangeService } from "@/src/currency/api/CurrencyService"
import { Currency } from "@/src/currency/types/Currency"
import { serverDayjs } from "@/src/config/dayjs"
import { serverBreakpoints } from "@/src/config/breakpoints"

import styles from "./styles.module.scss"
import CurrencyPageTitle from "@/src/components/currency/CurrencyPageTitle"

export const revalidate = 86400

export default async function CurrencyPage() {
    const exchangeRates =
        await CurrencyExchangeService.getExchangeRatesForPeriod(
            Currency.UAH,
            serverDayjs().subtract(1, "week").startOf("week"),
            serverDayjs()
        )

    return (
        <CurrencyContextProvider exchangeRates={exchangeRates}>
            <div className={styles.currencyPage}>
                <CurrencyPageTitle />
                <PaymentCardList />
                <ExchangeChartBlock />
            </div>
        </CurrencyContextProvider>
    )
}

export function generateStaticParams() {
    return serverBreakpoints.map((breakpoint) => ({
        breakpoint,
    }))
}

