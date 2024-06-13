"use client"

import React from "react"
import { Button, Form } from "antd"
import { RightOutlined } from "@ant-design/icons"
import { Dayjs } from "dayjs"

import DateSelector from "@/src/app/[breakpoint]/currency/components/ExchangeIntervalFormBlock/ExchangeIntervalForm/DateSelector"

import styles from "./styles.module.scss"

interface FormValues {
    startDate: Dayjs
    endDate: Dayjs
}

export default function ExchangeIntervalForm() {
    const [form] = Form.useForm<FormValues>()
    const formStartDate = Form.useWatch("startDate", form)
    const formEndDate = Form.useWatch("endDate", form)

    return (
        <Form<FormValues>
            layout="inline"
            className={styles.dateSelectorsForm}
            onFinish={(values) => {
                console.log(values)
            }}
            form={form}
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
                <DateSelector />
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
                <DateSelector />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    disabled={!formStartDate || !formEndDate}
                >
                    View report
                    <RightOutlined aria-hidden />
                </Button>
            </Form.Item>
        </Form>
    )
}

