import {useEffect, useRef} from "react"
import * as echarts from 'echarts'
import {ChartBlockWrapper} from "../common/ChartBlockWraper"
import {ChartBlockHeader} from "../common/ChartBlockHeader"
import {ChartContent} from "./style"
import * as chartHelper from "../chart.config"
import {voided} from "@/util/function.util";

const loadData = (chartDom: HTMLElement) => {
    let myChart = echarts.init(chartDom);
    let option = {
        ...chartHelper.commonOptions(),
        xAxis: [chartHelper.valueLineStyle()],
        yAxis: [chartHelper.labelLineStyle(['施肥', '浇水', '巡检', '其他'])],
        series: [chartHelper.barSeries('当月农事操作统计', [5, 10, 20, 33])]
    };
    myChart.setOption(option);
}

export const OrchardFarmingOperationMonthChart = () => {
    const chartRef = useRef<HTMLDivElement>(null)
    useEffect(voided(() => loadData(chartRef.current!)), [])
    return <ChartBlockWrapper>
        <ChartBlockHeader title="当月农事操作统计"/>
        <ChartContent ref={chartRef}>
        </ChartContent>
    </ChartBlockWrapper>
}
