import { Header as AntdHeader } from "antd/es/layout/layout"

import LocalePicker from "@/src/components/app/Header/LocalePicker"
import Logo from "@/src/components/app/Header/Logo"

import styles from "./styles.module.scss"

export default function Header() {
    return (
        <AntdHeader className={styles.header} title="Trainee mockup">
            <Logo />
            <LocalePicker />
        </AntdHeader>
    )
}

