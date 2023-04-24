import * as chartHelper from "../chart.config"
import * as echarts from 'echarts'

/**
 * 大气温度
 */
export const painAtmosphericTemperatureChart = (chart: echarts.ECharts) => {
    chart.clear()
    let legend = {
        right: 0,
        icon: 'roundRect',
        data: ['最高气温', '最低气温'],
        textStyle: {
            color: '#fff',
            fontSize: chartHelper.compatiblePxSize(10),
        }
    };
    let title = "最高气温";
    let title1 = "最低气温";
    let labels = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    let data = [5, 10, 20, 33, 5, 10, 20, 33, 5, 10, 20, 33];
    let data1 = [5, 10, 10, 23, 15, 20, 30, 13, 25, 20, 10, 13];

    let option = {
        ...chartHelper.commonOptions(0, 10, 0, 40),
        legend,
        title: {
            text: '大气温度（℃）',
            textStyle: {
                color: '#fff',
                fontSize: chartHelper.compatiblePxSize(12),
            }
        },
        xAxis: [chartHelper.labelLineStyle(labels)],
        yAxis: [chartHelper.valueLineStyle(false)],
        series: [chartHelper.lineSeries(title, data), chartHelper.lineSeries(title1, data1)]
    };
    chart.setOption(option);
}


/**
 * 降雨量
 */
export const painRainfallChart = (chart: echarts.ECharts) => {
    chart.clear()
    let labels = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    let title = "降雨量（mm）";
    let data = [5, 10, 20, 10, 5, 10, 20, 33, 5, 30, 20, 33];
    let option = {
        ...chartHelper.commonOptions(0, 10, 0, 40),
        title: {
            text: '降雨量（mm）',
            textStyle: {
                color: '#fff',
                fontSize: chartHelper.compatiblePxSize(12),
            }
        },
        xAxis: [chartHelper.labelLineStyle(labels)],
        yAxis: [chartHelper.valueLineStyle(false)],
        series: [chartHelper.lineSeries(title, data)]
    };
    chart.setOption(option);
}