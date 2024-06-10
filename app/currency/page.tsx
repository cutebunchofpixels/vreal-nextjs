import React from "react"

import ExchangeChartBlock from "@/app/currency/components/ExchangeChartBlock"
import PaymentCardList from "@/app/currency/components/PaymentCardList"

import styles from "./styles.module.scss"

export default function Currency() {
    return (
        <div className={styles.currencyPage}>
            <PaymentCardList />
            <ExchangeChartBlock />
        </div>
    )
}

