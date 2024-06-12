import { ReactNode } from "react"
import { Content as AntdContent } from "antd/es/layout/layout"
import styles from "./styles.module.scss"

export default function Content({ children }: { children: ReactNode }) {
    return <AntdContent className={styles.content}>{children}</AntdContent>
}

