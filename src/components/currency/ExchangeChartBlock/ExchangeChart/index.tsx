"use client"

import { Line, Serie, Datum } from "@nivo/line"

import { useCurrencyContext } from "@/src/currency/context/CurrencyContextProvider"
import { ExchangeRateRecord } from "@/src/currency/types/ExchangeRateRecord"
import { serverDayjs } from "@/src/config/dayjs"
import { useBreakpoint } from "@/src/hooks/useBreakpoint"
import { chartBreakpoints } from "@/src/components/currency/ExchangeChartBlock/ExchangeChart/config"
import { useTranslation } from "@/src/options/context/TranslationProvider"

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
        const formattedDate = serverDayjs(record.date).format("YYYY-MM-DD")

        usdSerie.data.push({
            x: formattedDate,
            y: 1 / record.exchangeRates.usd,
        })

        eurSerie.data.push({
            x: formattedDate,
            y: 1 / record.exchangeRates.eur,
        })

        counter++
    }

    return [usdSerie, eurSerie]
}

export default function ExchangeChart() {
    const currencyStore = useCurrencyContext()
    const { exchangeRates } = currencyStore
    const breakpoint = useBreakpoint()
    const breakpointConfig = chartBreakpoints[breakpoint]
    const t = useTranslation()

    const chartData = formatChartData(exchangeRates)

    return (
        <Line
            height={400}
            width={breakpointConfig.width}
            data={chartData}
            margin={{ top: 50, right: 70, bottom: 100, left: 60 }}
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
                tickRotation: breakpointConfig.tickRotation,
                legend: t("currency.exchange_chart.date_axis"),
                legendOffset: breakpointConfig.legendOffset,
                legendPosition: "middle",
                truncateTickAt: 0,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: t("currency.exchange_chart.exchange_axis"),
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
            legends={
                breakpointConfig.isLegendVisible
                    ? [
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
                      ]
                    : undefined
            }
        />
    )
}

