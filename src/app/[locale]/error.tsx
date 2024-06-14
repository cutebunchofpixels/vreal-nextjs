"use client"

import { Result } from "antd"
import Link from "next/link"
import { useEffect } from "react"

interface ErrorPageProps {
    error: Error
    reset: () => void
}

export default function ErrorPage({ error }: ErrorPageProps) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <Result
            status={500}
            title={500}
            subTitle={error.message}
            extra={<Link href="/currency">Back to index</Link>}
        />
    )
}

