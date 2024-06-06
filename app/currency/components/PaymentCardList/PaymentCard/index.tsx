"use client"

import React, { ReactNode } from "react"
import { Card, Statistic } from "antd"

import { valueType } from "antd/es/statistic/utils"

import styles from "./styles.module.scss"

type PaymentCardType = "currency" | "percentage"

export interface PaymentCardInfo {
    type: PaymentCardType
    caption: string
    value: number
}

const valueAddons: Record<
    PaymentCardType,
    { prefix?: string; suffix?: string }
> = {
    currency: {
        prefix: "$",
    },
    percentage: {
        suffix: "%",
    },
}

interface PaymetCardProps {
    icon: ReactNode
    cardInfo: PaymentCardInfo
}

export default function PaymentCard({ icon, cardInfo }: PaymetCardProps) {
    function formatCardValue(value: valueType) {
        return value.toLocaleString("en-US", {
            minimumFractionDigits: 2,
        })
    }

    return (
        <Card className={styles.paymentCard}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.textBlock}>
                <Statistic
                    title={cardInfo.caption}
                    value={cardInfo.value}
                    formatter={formatCardValue}
                    prefix={valueAddons[cardInfo.type].prefix}
                    suffix={valueAddons[cardInfo.type].suffix}
                />
            </div>
        </Card>
    )
}

