import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Layout from "antd/es/layout/layout"

import AntdRegistry from "@/app/components/AntdRegistry"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import Content from "@/app/components/Content"
import { BreakpointProvider } from "@/app/src/hooks/useBreakpoint"

import styles from "./styles.module.scss"
import "./index.css"
import "./variables.css"
import { Breakpoint } from "@/app/src/types/Breakpoint"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Trainee mockup",
}

interface PathParams {
    breakpoint: Breakpoint
}

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: PathParams
}) {
    const { breakpoint } = params

    return (
        <html lang="en">
            <AntdRegistry>
                <BreakpointProvider initialBreakpoint={breakpoint}>
                    <body className={inter.className}>
                        <Layout className={styles.layout}>
                            <Header />
                            <Content>{children}</Content>
                            <Footer />
                        </Layout>
                    </body>
                </BreakpointProvider>
            </AntdRegistry>
        </html>
    )
}

