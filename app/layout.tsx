import type { Metadata } from "next"
import { Inter } from "next/font/google"
import AntdRegistry from "@/app/components/AntdRegistry"
import Header from "@/app/components/Header"
import Layout from "antd/es/layout/layout"
import Footer from "@/app/components/Footer"
import Content from "@/app/components/Content"

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
            <body className={inter.className}>
                <Layout className={styles.layout}>
                    <Header />
                    <Content>{children}</Content>
                    <Footer />
                </Layout>
            </body>
        </html>
    )
}

