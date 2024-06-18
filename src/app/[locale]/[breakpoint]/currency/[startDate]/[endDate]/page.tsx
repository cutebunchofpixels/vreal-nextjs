import ExchangeChartBlock from "@/src/components/currency/ExchangeChartBlock"
import PaymentCardList from "@/src/components/currency/PaymentCardList"
import CurrencyContextProvider from "@/src/currency/context/CurrencyContextProvider"
import { CurrencyExchangeService } from "@/src/currency/api/CurrencyService"
import { Currency } from "@/src/currency/types/Currency"
import { serverDayjs } from "@/src/config/dayjs"

import styles from "./styles.module.scss"
import CurrencyPageTitle from "@/src/components/currency/CurrencyPageTitle"
import ExchangeIntervalFormBlock from "@/src/components/currency/ExchangeIntervalFormBlock"
import { CurrencyPagePathParams } from "@/src/currency/types/CurrencyPagePathParams"
import { InvalidExchangeIntervalError } from "@/src/currency/errors/InvalidExchangeIntervalError"
import {
    DEFAULT_END_DATE,
    DEFAULT_START_DATE,
    MAX_EXCHANGE_INTERVAL,
    MIN_EXCHANGE_INTERVAL,
} from "@/src/currency/constants"

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

// export function generateStaticParams() {
//     const minValidDays = MIN_EXCHANGE_INTERVAL - 1
//     const result: any[] = []

//     for (
//         let startDateOffset = 0;
//         startDateOffset < MAX_EXCHANGE_INTERVAL - minValidDays;
//         startDateOffset++
//     ) {
//         for (
//             let endDateOffset = minValidDays;
//             endDateOffset < MAX_EXCHANGE_INTERVAL;
//             endDateOffset++
//         ) {
//             result.push({
//                 startDate: DEFAULT_START_DATE.add(startDateOffset, "d").format(
//                     "YYYY-MM-DD"
//                 ),
//                 endDate: DEFAULT_END_DATE.add(endDateOffset, "d").format(
//                     "YYYY-MM-DD"
//                 ),
//             })
//         }
//     }

//     return result
// }

