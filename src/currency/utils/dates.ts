import { serverDayjs } from "@/src/config/dayjs"
import {
    MIN_EXCHANGE_INTERVAL,
    MAX_EXCHANGE_INTERVAL,
    DEFAULT_START_DATE,
    DEFAULT_END_DATE,
} from "@/src/currency/constants"
import { Dayjs } from "dayjs"

export function isValidStartDate(startDate: Dayjs, endDate: Dayjs | null) {
    if (!startDate.isBetween(DEFAULT_START_DATE, DEFAULT_END_DATE, "day")) {
        return false
    }

    if (!endDate) {
        return true
    }

    const minValidDays = MIN_EXCHANGE_INTERVAL - 1
    const maxValidDays = MAX_EXCHANGE_INTERVAL - 1
    const diff = endDate.diff(startDate, "day")

    return diff >= minValidDays && diff <= maxValidDays
}

export function isValidEndDate(startDate: Dayjs, endDate: Dayjs) {
    if (!endDate.isBetween(DEFAULT_START_DATE, DEFAULT_END_DATE, "day", "[]")) {
        return false
    }

    if (!startDate) {
        return true
    }

    const minValidDays = MIN_EXCHANGE_INTERVAL - 1
    const maxValidDays = MAX_EXCHANGE_INTERVAL - 1
    const diff = endDate.diff(startDate, "day")

    return diff >= minValidDays && diff <= maxValidDays
}

