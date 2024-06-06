import { DatePicker, DatePickerProps } from "antd"
import { CalendarOutlined } from "@ant-design/icons"

import styles from "./styles.module.scss"

export default function DateSelector({ ...rest }: DatePickerProps) {
    return (
        <div className={styles.dateSelector}>
            <div className={styles.iconBlock}>
                <CalendarOutlined />
            </div>
            <DatePicker
                suffixIcon={null}
                format={{
                    format: "YYYY-MM-DD",
                    type: "mask",
                }}
                {...rest}
            />
        </div>
    )
}

