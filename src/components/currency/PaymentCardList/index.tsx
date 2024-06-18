"use client"

import React from "react"
import { ShoppingOutlined } from "@ant-design/icons"

import PaymentCard, {
    PaymentCardInfo,
} from "@/src/components/currency/PaymentCardList/PaymentCard"

import styles from "./styles.module.scss"
import { useTranslation } from "@/src/options/context/TranslationProvider"

export default function PaymentCardList(props: any) {
    const t = useTranslation()

    const cards: PaymentCardInfo[] = [
        {
            value: 75000,
            type: "currency",
            caption: t("currency.payment_cards.total_revenue"),
        },
        {
            value: 16,
            type: "currency",
            caption: t("currency.payment_cards.average_payment"),
        },
        {
            value: 15,
            type: "percentage",
            caption: t("currency.payment_cards.repeat_purchase_rate"),
        },
    ]

    return (
        <div className={styles.cardsList}>
            {cards.map((card) => (
                <PaymentCard
                    icon={<ShoppingOutlined />}
                    cardInfo={card}
                    key={card.caption}
                />
            ))}
        </div>
    )
}

