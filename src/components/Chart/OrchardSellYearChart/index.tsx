import {useEffect, useRef} from "react"
import * as echarts from 'echarts'
import {ChartBlockWrapper} from "../common/ChartBlockWraper"
import {ChartBlockHeader} from "../common/ChartBlockHeader"
import * as chartHelper from "../chart.config"
import {ChartContent} from "./style"

const loadData = (chartDom: HTMLElement) => {
    let myChart = echarts.init(chartDom);
    let option = {
        ...chartHelper.commonOptions(),
        xAxis: [chartHelper.labelLineStyle(['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'])],
        yAxis: [chartHelper.valueLineStyle(false)],
        series: [chartHelper.barSeries('当月农事操作统计', [5, 10, 20, 33, 5, 10, 20, 33, 5, 10, 20, 33], 30, "vertical")]
    };
    myChart.setOption(option);
}


/**
 * 果园销售情况统计
 */
export const OrchardSellYearChart = () => {
    const chartRef = useRef<HTMLDivElement>(null)
    useEffect(() => loadData(chartRef.current!), [])
    return <ChartBlockWrapper>
        <ChartBlockHeader title="果园销售情况统计"/>
        <ChartContent ref={chartRef}>
        </ChartContent>
    </ChartBlockWrapper>
}