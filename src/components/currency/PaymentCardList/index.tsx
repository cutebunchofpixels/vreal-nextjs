import React from "react"
import { ShoppingOutlined } from "@ant-design/icons"

import PaymentCard, {
    PaymentCardInfo,
} from "@/src/components/currency/PaymentCardList/PaymentCard"

import styles from "./styles.module.scss"

const cards: PaymentCardInfo[] = [
    {
        value: 75000,
        type: "currency",
        caption: "Total revenue",
    },
    { value: 16, type: "currency", caption: "Average payment" },
    {
        value: 15,
        type: "percentage",
        caption: "Repeat purchase rate",
    },
]

export default function PaymentCardList() {
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

