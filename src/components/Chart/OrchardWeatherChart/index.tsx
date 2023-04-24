import {useEffect,useState} from "react"
import {ChartBlockWrapper} from "../common/ChartBlockWraper"
import {Div} from "@/components/present"
import {WeatherIcon} from "../common/WeatherIcon"
import {WeatherInfo} from "../common/WeatherInfo"
import {TodayTemperature, TodayWeatherText, TodayWind, TodayWeatherIcon, WeatherDayGroup} from "./style"
import {getWeather} from "@/api/weather.api";
import {voided} from "@/util/function.util";
import {getMapCenter} from "@/api/monitor.api";
import {defaultWeatherData,parseWeatherData} from "./weather.format"

/**
 * 果园天气情况
 */
export const OrchardWeatherChart = () => {
    let [weatherData,setWeatherData] = useState<any>(defaultWeatherData)

    const loadData = async () => {
        let center = await getMapCenter();
        let data:any = await getWeather(center.lat,center.lng)
        data = parseWeatherData(data)
        setWeatherData(data)
    }
    //
    const voidedLoadData = voided(loadData)

    useEffect(()=>{
        voidedLoadData()
        //每隔3分钟刷新一次
        let timer = setInterval(voidedLoadData,3 * 60 * 1000  );
        return ()=> clearInterval(timer)
    },[])
    return <ChartBlockWrapper>
        <Div flex alignItems="center" justifyContent="space-between">
            <Div flex alignItems="center">
                <TodayTemperature>{weatherData.now.degree}℃</TodayTemperature>
                <div>
                    <TodayWeatherText>{weatherData.now.weather}</TodayWeatherText>
                    <Div flex justifyContent="space-between">
                        <TodayWind>{weatherData.now.windDirection}</TodayWind>
                        <TodayWind>{weatherData.now.windPower}</TodayWind>
                    </Div>
                </div>
            </Div>
            <TodayWeatherIcon><WeatherIcon type={weatherData.now.weatherIcon}/></TodayWeatherIcon>
        </Div>
        <WeatherDayGroup flex justifyContent="space-between">
            <WeatherInfo data={{...weatherData.today,time:"今天"}}/>
            <WeatherInfo data={{...weatherData.tomorrow,time:"明天"}}/>
            <WeatherInfo data={weatherData.afterThreeDays}/>
            <WeatherInfo data={weatherData.afterTwoDays}/>
            <WeatherInfo data={weatherData.afterFourDays}/>
            <WeatherInfo data={weatherData.afterFiveDays}/>
            <WeatherInfo data={weatherData.afterSixDays}/>
        </WeatherDayGroup>
    </ChartBlockWrapper>
}
