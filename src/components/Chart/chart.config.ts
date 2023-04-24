import * as echarts from 'echarts'
import {designSize, secondColor, mainColor, fourthColor, thirdColor} from "@/config";

const dashedColor = `${mainColor}1e`;

/**
 *  主要是一些echarts的通用配置
 */


/**
 * 兼容不同尺寸下的图标的px大小
 * 开发的时候按照设计稿的尺寸（1920）来写，然后在这里做兼容,因为echarts不支持rem的单位
 */
export const compatiblePxSize = (value: number) => {
    return value * (window.innerWidth / designSize);
}

/**
 * 图表通用基础配置
 */
export const commonOptions = (left: number = 0, right: number = 10, bottom: number = 0, top: number = 20) => {
    return {
        tooltip: { //显示提示框
            axisPointer: {
                type: 'shadow'
            }
        },
        color: [mainColor, secondColor],
        grid: { //图表位置
            left: compatiblePxSize(left),
            right: compatiblePxSize(right),
            bottom: compatiblePxSize(bottom),
            top: compatiblePxSize(top),
            containLabel: true
        }
    }
}

/**
 * 图表通用配置---柱状图样式
 */
type BarDirection = "horizontal" | "vertical"
export const barStyle = (direction: BarDirection) => {
    let [startX, startY, endX, endY] = [0, 0, 0, 0]
    if (direction === "horizontal") {
        endX = 1
    } else {
        startY = 1
    }
    return {
        type: 'bar',
        label: false,
        emphasis: {focus: 'series'},
        itemStyle: {
                //圆角
            borderRadius: [compatiblePxSize(2), compatiblePxSize(2), compatiblePxSize(2), compatiblePxSize(2)],
            //渐变色
            color: new echarts.graphic.LinearGradient(startX, startY, endX, endY, [{
                offset: 0,
                color: thirdColor
            }, {offset: 1, color: fourthColor}])
        }
    }

}

/**
 * 图表通用配置---折线图样式
 */
export const lineStyle = () => {
    return {
        type: 'line',
        label: false,
        showSymbol: false,
        emphasis: {focus: 'series'},
    }

}

/**
 * 图表通用配置---柱状图数据
 */
export const barSeries = (name: string, data: any, barWidth: number = 20, direction: BarDirection = "horizontal") => {
    return {
        ...barStyle(direction),
        name, data,
        barWidth: compatiblePxSize(barWidth),
    }
}

/**
 * 图表通用配置---折线图数据
 */
export const lineSeries = (name: string, data: any) => {
    return {
        ...lineStyle(),
        name, data
    }
}


/**
 * 图表通用配置---标签轴样式
 */
export const labelLineStyle = (data: any) => {
    return {
        type: 'category',
        axisTick: {show: false},
        axisLabel: {
            show: true,
            color: '#fff',
            fontSize: compatiblePxSize(12)
        },
        //坐标轴样式
        axisLine: {
            show: true,
            lineStyle: {
                color: mainColor,
                width: 1,
                type: 'solid'
            }
        },
        data
    }
}


/**
 * 图表通用配置---刻度轴样式
 */
export const valueLineStyle = (showAxisLine: boolean = true) => {
    return {
        splitLine: {
            show: true,
            lineStyle: {
                color: dashedColor,
                width: 1,
                type: 'dashed',
            }
        },
        axisTick: {show: false},
        //显示坐标轴
        axisLine: {
            show: showAxisLine,
            lineStyle: {
                color: mainColor,
                width: 1,
                type: 'solid'
            }
        },
        //坐标轴样式
        axisLabel: {
            show: true,
            color: mainColor,
            fontSize: compatiblePxSize(12)
        },
        type: 'value'
    }
}