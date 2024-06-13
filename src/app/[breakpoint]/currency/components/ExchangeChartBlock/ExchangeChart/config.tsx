import { Breakpoint } from "@/src/types/Breakpoint"

const lgConfig = {
    width: 910,
    tickRotation: 0,
    legendOffset: 36,
    isLegendVisible: true,
}

const mdConfig = {
    width: 685,
    tickRotation: 60,
    legendOffset: 75,
    isLegendVisible: true,
}

const smConfig = {
    width: 485,
    tickRotation: 60,
    legendOffset: 75,
    isLegendVisible: true,
}

const xsConfig = {
    width: 270,
    tickRotation: 60,
    legendOffset: 75,
    isLegendVisible: false,
}

export const chartBreakpoints = {
    [Breakpoint.XXL]: lgConfig,
    [Breakpoint.XL]: lgConfig,
    [Breakpoint.LG]: lgConfig,
    [Breakpoint.MD]: mdConfig,
    [Breakpoint.SM]: smConfig,
    [Breakpoint.XS]: xsConfig,
}

