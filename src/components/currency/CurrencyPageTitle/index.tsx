"use client"

import PageTitle from "@/src/components/ui/PageTitle"
import { useTranslation } from "@/src/options/context/TranslationProvider"

export default function CurrencyPageTitle() {
    const t = useTranslation()

    return <PageTitle>{t("currency.page_name")}</PageTitle>
}
