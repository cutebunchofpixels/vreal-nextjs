import React from "react"

import ExchangeIntervalSelectorsBlock from "@/app/currency/components/ExchangeIntervalFormBlock"
import PaymentCardList from "@/app/currency/components/PaymentCardList"

import styles from "./styles.module.scss"

export default function Currency() {
    return (
        <div className={styles.currencyPage}>
            <ExchangeIntervalSelectorsBlock />
            <PaymentCardList />
        </div>
    )
}

