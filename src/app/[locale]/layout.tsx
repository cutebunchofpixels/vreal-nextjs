import { ReactNode } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Layout from "antd/es/layout/layout"

import AntdRegistry from "@/src/components/app/AntdRegistry"
import Header from "@/src/components/app/Header"
import Footer from "@/src/components/app/Footer"
import Content from "@/src/components/app/Content"
import OptionsContextProvider from "@/src/options/context/OptionsContextProvider"
import { Locale } from "@/src/types/Locale"
import { locales } from "@/src/config/locales"

import styles from "./styles.module.scss"
import "./index.css"
import "./variables.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Trainee mockup",
}

interface RootLayoutPathParams {
    locale: Locale
}

interface LocaleLayoutProps {
    params: RootLayoutPathParams
    children: ReactNode
}

export default async function RootLayout({
    children,
    params,
}: LocaleLayoutProps) {
    const { locale } = params

    return (
        <html lang={locale}>
            <AntdRegistry>
                <OptionsContextProvider initialLocale={locale}>
                    <body className={inter.className}>
                        <Layout className={styles.layout}>
                            <Header />
                            <Content>{children}</Content>
                            <Footer />
                        </Layout>
                    </body>
                </OptionsContextProvider>
            </AntdRegistry>
        </html>
    )
}

export function generateStaticParams() {
    return locales.map((locale) => ({
        locale,
    }))
}

