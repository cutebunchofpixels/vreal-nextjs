import { Result } from "antd"
import Link from "next/link"

export default function NotFoundPage() {
    return (
        <Result
            status={404}
            title={404}
            subTitle="Sorry, requested resource could not be found."
            extra={<Link href="/currency">Back to index</Link>}
        />
    )
}

