"use client"

import { mockExchangeRates } from "@/app/currency/components/ExchangeChartBlock/ExchangeChart/mock"
import { ExchangeRateRecord } from "@/app/src/types/currency/ExchangeRateRecord"
import { Line, Serie, Datum } from "@nivo/line"

function formatChartData(exchangeRates: ExchangeRateRecord[]) {
    const usdSerie: Serie & { data: Datum[] } = {
        id: "USD",
        color: "hsl(166, 70%, 50%)",
        data: [],
    }
    const eurSerie: Serie & { data: Datum[] } = {
        id: "EUR",
        color: "hsl(166, 70%, 50%)",
        data: [],
    }

    let counter = 1

    for (const record of exchangeRates) {
        usdSerie.data.push({
            x: record.date.format("YYYY-MM-DD"),
            y: 1 / record.exchangeRates.usd,
        })

        eurSerie.data.push({
            x: record.date.format("YYYY-MM-DD"),
            y: 1 / record.exchangeRates.eur,
        })

        counter++
    }

    return [usdSerie, eurSerie]
}

export default function ExchangeChart() {
    const chartData = formatChartData(mockExchangeRates)

    return (
        <Line
            height={500}
            width={920}
            data={chartData}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: false,
                reverse: false,
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Date",
                legendOffset: 36,
                legendPosition: "middle",
                truncateTickAt: 0,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Exchange rates",
                legendOffset: -40,
                legendPosition: "middle",
                truncateTickAt: 0,
            }}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabel="data.yFormatted"
            pointLabelYOffset={-12}
            useMesh={true}
            isInteractive={false}
            legends={[
                {
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: "left-to-right",
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: "circle",
                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemBackground: "rgba(0, 0, 0, .03)",
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
        />
    )
}

