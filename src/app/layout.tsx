import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Layout from "antd/es/layout/layout"

import AntdRegistry from "@/src/app/components/AntdRegistry"
import Header from "@/src/app/components/Header"
import Footer from "@/src/app/components/Footer"
import Content from "@/src/app/components/Content"
import { BreakpointProvider } from "@/src/hooks/useBreakpoint"
import { Breakpoint } from "@/src/types/Breakpoint"

import styles from "./styles.module.scss"
import "./index.css"
import "./variables.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Trainee mockup",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
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
