"use client"

import { Select } from "antd"
import { usePathname, useRouter } from "next/navigation"

import { useOptionsContext } from "@/src/options/context/OptionsContextProvider"
import { Locale } from "@/src/types/Locale"
import { getEnumOptions } from "@/src/utils/getEnumOptions"

import styles from "./styles.module.scss"

export default function LocalePicker() {
    const optionsStore = useOptionsContext()
    const pathname = usePathname()
    const router = useRouter()
    const { locale } = optionsStore

    const localeOptions = getEnumOptions<Locale>(Locale, (locale) =>
        locale.toUpperCase()
    )

    function handleLocaleChange(locale: Locale) {
        optionsStore.setLocale(locale)
        const localeRegex = /^\/([^\/]+)\/([^\/]+)\/([^\/]+.*)$/
        const newPath = pathname.replace(localeRegex, `/${locale}/$2/$3`)
        router.replace(newPath)
    }

    return (
        <Select
            aria-label="Choose a language"
            defaultValue={locale}
            options={localeOptions}
            className={styles.localeSelect}
            onChange={handleLocaleChange}
        />
    )
}

