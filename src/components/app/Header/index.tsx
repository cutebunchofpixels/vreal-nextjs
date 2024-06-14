import { Header as AntdHeader } from "antd/es/layout/layout"

import styles from "./styles.module.scss"

export default function Header() {
    return <AntdHeader className={styles.header} title="Trainee mockup" />
}

