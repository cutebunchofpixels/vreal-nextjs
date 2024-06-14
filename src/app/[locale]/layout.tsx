import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Layout from "antd/es/layout/layout"

import AntdRegistry from "@/src/components/app/AntdRegistry"
import Header from "@/src/components/app/Header"
import Footer from "@/src/components/app/Footer"
import Content from "@/src/components/app/Content"

import styles from "./styles.module.scss"
import "./index.css"
import "./variables.css"
import { Locale } from "@/src/types/Locale"
import { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Trainee mockup",
}

interface LocaleLayoutProps {
    locale: Locale
    children: ReactNode
}

export default async function RootLayout({
    children,
    locale,
}: LocaleLayoutProps) {
    return (
        <html lang={locale}>
            <AntdRegistry>
                <body className={inter.className}>
                    <Layout className={styles.layout}>
                        <Header />
                        <Content>{children}</Content>
                        <Footer />
                    </Layout>
                </body>
            </AntdRegistry>
        </html>
    )
}

