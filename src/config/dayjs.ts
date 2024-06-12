import baseDayJs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"
import "dayjs/locale/en"
import "dayjs/locale/he"

import { Singleton } from "@/src/types/Signleton"
import { inferSelectedLocale } from "@/src/utils/inferSelectedLocale"

baseDayJs.extend(utc)
baseDayJs.extend(timezone)
baseDayJs.extend(isSameOrAfter)
baseDayJs.extend(isSameOrBefore)

class DayJSSingleton implements Singleton<typeof baseDayJs> {
    private _instance: typeof baseDayJs | null = null

    public get instance(): typeof baseDayJs {
        if (window === undefined) {
            throw new Error("DayJS can only be used in client context")
        }

        if (this._instance === null) {
            baseDayJs.tz.setDefault(baseDayJs.tz.guess())

            const locale = inferSelectedLocale()
            baseDayJs.locale(locale)

            this._instance = baseDayJs
        }

        return this._instance
    }
}

export const dayjs = new DayJSSingleton()
export const serverDayjs = baseDayJs

