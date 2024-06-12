import { ReactNode } from "react"

import styles from "./styles.module.scss"

interface PageTitleProps {
    children: ReactNode
}

export default function PageTitle({ children }: PageTitleProps) {
    return <h1 className={styles.pageTitle}>{children}</h1>
}

