import {
    DEFAULT_START_DATE,
    DEFAULT_END_DATE,
    EXCHANGE_INTERVAL_SIZE,
} from "@/src/currency/constants"
import { Dayjs } from "dayjs"

export function isValidStartDate(startDate: Dayjs, endDate: Dayjs | null) {
    if (
        !startDate.isBetween(
            DEFAULT_START_DATE,
            DEFAULT_END_DATE.subtract(EXCHANGE_INTERVAL_SIZE, "day"),
            "day",
            "[]"
        )
    ) {
        return false
    }

    if (!endDate) {
        return true
    }

    const diff = endDate.diff(startDate, "day")

    return diff === EXCHANGE_INTERVAL_SIZE
}

export function isValidEndDate(startDate: Dayjs, endDate: Dayjs) {
    if (!endDate.isBetween(DEFAULT_START_DATE, DEFAULT_END_DATE, "day", "[]")) {
        return false
    }

    if (!startDate) {
        return true
    }

    const diff = endDate.diff(startDate, "day")

    return diff === EXCHANGE_INTERVAL_SIZE
}

