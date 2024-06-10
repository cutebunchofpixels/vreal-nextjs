import ExchangeChart from "@/app/currency/components/ExchangeChartBlock/ExchangeChart"
import { Card } from "antd"

import styles from "./styles.module.scss"

export default function ExchangeChartBlock() {
    return (
        <Card className={styles.exchangeChartContainer}>
            <ExchangeChart />
        </Card>
    )
}

