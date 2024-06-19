import { serverDayjs } from "@/src/config/dayjs"

export const DEFAULT_START_DATE = serverDayjs()
    .subtract(1, "week")
    .startOf("week")
export const DEFAULT_END_DATE = serverDayjs().subtract(1, "week").endOf("week")
export const MIN_EXCHANGE_INTERVAL = 3
export const MAX_EXCHANGE_INTERVAL = 7
export const EXCHANGE_INTERVAL_SIZE = 4

