import {useEffect, useState} from 'react'
import {formatDate, formatTime, formatWeekDay} from "@/util/time.util";
import {DateChartContainer} from "./style";

/**
 * 果园时间组件
 */
export const OrchardDateTimeChart = () => {
    let [time, setTime] = useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return <DateChartContainer flex alignItems="center" justifyContent='flex-end'>
        <pre>{formatDate(time)} {formatTime(time)} {formatWeekDay(time)}</pre>
    </DateChartContainer>
}
