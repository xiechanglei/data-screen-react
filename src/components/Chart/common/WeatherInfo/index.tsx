import { Div } from "@/components/present"
import { FC } from "react"
import { WeatherIcon, WeatherType } from "../WeatherIcon"
import { WeatherDayIcon, WeatherDayText, WeatherDayTemperature } from "./style"

/**
 * 天气信息
 */
export type WeatherInfoProps = {
    time: string,
    weather: WeatherType,
    degree: string
}
export const WeatherInfo: FC<{ data:WeatherInfoProps }> = ({ data }) => {
    let { time, weather, degree } = data
    return <Div flex flexDirection="column" alignItems="center">
        <WeatherDayText>{time}</WeatherDayText>
        <WeatherDayIcon><WeatherIcon type={weather}></WeatherIcon></WeatherDayIcon>
        <WeatherDayTemperature>{degree}</WeatherDayTemperature>
    </Div>
}
