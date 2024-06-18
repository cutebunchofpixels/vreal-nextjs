"use client"

import React, { useEffect } from "react"
import { Button, Form } from "antd"
import { RightOutlined } from "@ant-design/icons"
import { Dayjs } from "dayjs"
import { useRouter, usePathname } from "next/navigation"
import { observer } from "mobx-react-lite"

import DateSelector from "@/src/components/currency/ExchangeIntervalFormBlock/ExchangeIntervalForm/DateSelector"
import { isValidStartDate, isValidEndDate } from "@/src/currency/utils/dates"
import { useCurrencyContext } from "@/src/currency/context/CurrencyContextProvider"
import { serverDayjs } from "@/src/config/dayjs"

import styles from "./styles.module.scss"

interface FormValues {
    startDate: Dayjs
    endDate: Dayjs
}

function ExchangeIntervalFormComponent() {
    const [form] = Form.useForm<FormValues>()
    const currencyStore = useCurrencyContext()
    const router = useRouter()
    const pathname = usePathname()

    const formStartDate = Form.useWatch("startDate", form)
    const formEndDate = Form.useWatch("endDate", form)
    const loadedStartDate = serverDayjs(currencyStore.loadedStartDate)
    const loadedEndDate = serverDayjs(currencyStore.loadedEndDate)

    const isSubmitDisabled = !Boolean(formStartDate) || !Boolean(formEndDate)

    function handleFormSubmit({ startDate, endDate }: FormValues) {
        const dateRegex = /^\/([^\/]+)\/([^\/]+)\/currency\/([^\/]+)\/([^\/]+)$/
        const startDateString = startDate.format("YYYY-MM-DD")
        const endDateString = endDate.format("YYYY-MM-DD")

        const newPath = pathname.replace(
            dateRegex,
            `/$1/$2/currency/${startDateString}/${endDateString}`
        )

        router.push(newPath)
    }

    return (
        <Form<FormValues>
            layout="inline"
            className={styles.dateSelectorsForm}
            onFinish={handleFormSubmit}
            form={form}
            initialValues={{
                startDate: loadedStartDate,
                endDate: loadedEndDate,
            }}
        >
            <Form.Item<FormValues>
                name="startDate"
                label="Start date"
                help=""
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <DateSelector
                    disabledDate={(startDate) =>
                        !isValidStartDate(startDate, formEndDate)
                    }
                />
            </Form.Item>
            <Form.Item<FormValues>
                label="End date"
                name="endDate"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <DateSelector
                    disabledDate={(endDate) =>
                        !isValidEndDate(formStartDate, endDate)
                    }
                />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    disabled={isSubmitDisabled}
                >
                    View report
                    <RightOutlined aria-hidden />
                </Button>
            </Form.Item>
        </Form>
    )
}

const ExchangeIntervalForm = observer(ExchangeIntervalFormComponent)
export default ExchangeIntervalForm

