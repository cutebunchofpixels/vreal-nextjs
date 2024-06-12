import ExchangeChartBlock from "@/app/currency/components/ExchangeChartBlock"
import PaymentCardList from "@/app/currency/components/PaymentCardList"
import { CurrencyExchangeService } from "@/app/src/currency/api/CurrencyService"
import { Currency } from "@/app/src/currency/types/Currency"
import { serverDayjs } from "@/app/src/utils/dayjs"
import CurrencyContextProvider from "@/app/src/currency/context/CurrencyContextProvider"
import PageTitle from "@/app/src/ui/PageTitle"

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

