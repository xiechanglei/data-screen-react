import {FC} from "react"
import {OrchardIntroductionChart} from "./OrchardIntroductionChart"
import {OrchardFarmingOperationDayChart} from "./OrchardFarmingOperationDayChart"
import {OrchardFarmingOperationMonthChart} from "./OrchardFarmingOperationMonthChart"
import {OrchardSellYearChart} from "./OrchardSellYearChart"
import {OrchardMonitorChart} from "./OrchardMonitorChart"
import {OrchardVideoChart} from "./OrchardVideoChart"
import {OrchardDateTimeChart} from "./OrchardDateTimeChart"
import {OrchardWeatherChart} from "./OrchardWeatherChart"
import {ChartContainer, LeftSide, MiddleSide, RightSide} from "./style"

/**
 * 统计图表组件
 * @param zIndex
 * @constructor
 */
export const Chart: FC<{ zIndex: number }> = ({zIndex}) => {
    return (
        <ChartContainer flex absolute virtual zIndex={zIndex}>
            <LeftSide>
                <OrchardIntroductionChart/>
                <OrchardWeatherChart/>
                <OrchardFarmingOperationDayChart/>
                <OrchardFarmingOperationMonthChart/>
            </LeftSide>
            <MiddleSide virtual>
                <OrchardSellYearChart/>
            </MiddleSide>
            <RightSide>
                <OrchardDateTimeChart/>
                <OrchardVideoChart/>
                <OrchardMonitorChart/>
            </RightSide>
        </ChartContainer>)
}
