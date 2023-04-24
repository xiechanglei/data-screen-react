import {useEffect, useRef, useState} from "react"
import {ChartBlockWrapper} from "../common/ChartBlockWraper"
import {ChartBlockHeader} from "../common/ChartBlockHeader"
import {ChartContent, ChartGroupsWrapper, animationTime} from "./style"
import * as chartPainter from "./monitor-chart"
import * as echarts from 'echarts'
import {monitorAnimationTime} from "@/config"
import {getIotLastFewDaysData} from "@/api/monitor.api"

/**
 * 监测数据统计
 */
//暂时没有数据，不知道数据长什么样子 无法对接
getIotLastFewDaysData(7)()
export const OrchardMonitorChart = () => {

    const [chartOrder, setChartOrder] = useState<"even" | "odd">("even")
    const [hideChart, setHideChart] = useState<"even" | "odd">("even")
    const [animationStatus, setAnimationStatus] = useState(false)

    const firstChartRef = useRef<HTMLDivElement>(null)
    const [firstChart, setFirstChart] = useState<echarts.ECharts>()

    const secondChartRef = useRef<HTMLDivElement>(null)
    const [secondChart, setSecondChart] = useState<echarts.ECharts>()

    useEffect(() => {
        let firstChart = echarts.init(firstChartRef.current!)
        let secondChart = echarts.init(secondChartRef.current!)
        setFirstChart(firstChart)
        setSecondChart(secondChart)
        chartPainter.painAtmosphericTemperatureChart(firstChart)
        chartPainter.painRainfallChart(secondChart)
        let timer = setInterval(() => setAnimationStatus(true), monitorAnimationTime)
        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        if (animationStatus) {
            setHideChart(chartOrder)
            setTimeout(() => {
                setChartOrder(chartOrder === "even" ? "odd" : "even")
                setTimeout(() => {
                    setAnimationStatus(false)
                    if (chartOrder === "even") {
                        chartPainter.painAtmosphericTemperatureChart(firstChart!)
                    } else {
                        chartPainter.painRainfallChart(secondChart!)
                    }
                }, animationTime)
            }, animationTime)
        }
    }, [animationStatus])
    return <ChartBlockWrapper>
        <ChartBlockHeader title="监测数据"/>
        <ChartGroupsWrapper className={chartOrder}>
            <ChartContent className={animationStatus && hideChart === "even" ? "hide" : ""} ref={firstChartRef}/>
            <ChartContent className={animationStatus && hideChart === "odd" ? "hide" : ""} ref={secondChartRef}/>
        </ChartGroupsWrapper>
    </ChartBlockWrapper>
}