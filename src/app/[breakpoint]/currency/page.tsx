import ExchangeChartBlock from "@/src/app/[breakpoint]/currency/components/ExchangeChartBlock"
import PaymentCardList from "@/src/app/[breakpoint]/currency/components/PaymentCardList"
import { CurrencyExchangeService } from "@/src/currency/api/CurrencyService"
import { Currency } from "@/src/currency/types/Currency"
import { serverDayjs } from "@/src/config/dayjs"
import CurrencyContextProvider from "@/src/currency/context/CurrencyContextProvider"
import PageTitle from "@/src/ui/PageTitle"

import styles from "./styles.module.scss"

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
                <PageTitle>Currency exchange</PageTitle>
                <PaymentCardList />
                <ExchangeChartBlock />
            </div>
        </CurrencyContextProvider>
    )
}

