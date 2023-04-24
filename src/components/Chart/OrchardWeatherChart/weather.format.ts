export const defaultDayWeather ={
    degree: "未知",
    weather: "cloudy",
    time:"未知"
}
/**
 * 接口返回的数据就是这个格式，stupid !
 */
export const defaultWeatherData = {
    now:{
        degree: "未知",
        weather: "未知",
        weatherIcon:"cloudy",
        windDirection:"未知",
        windPower:"未知",
    },
    today:defaultDayWeather,
    tomorrow:defaultDayWeather,
    afterTwoDays:defaultDayWeather,
    afterThreeDays:defaultDayWeather,
    afterFourDays:defaultDayWeather,
    afterFiveDays:defaultDayWeather,
    afterSixDays:defaultDayWeather,

}

const windDirectionMap = {
    "1":"东北风","2":"东风", "3":"东南风", "4":"南风", "5":"西南风", "6":"西风", "7":"西北风", "8":"北风"
}

export const formatWindDirection = (numStr:string)=>{
    // @ts-ignore
    return windDirectionMap[numStr] ?? "未知"
}

const windPowerMap = {
    "1":"一级","2":"二级", "3":"三级","4":"四级", "5":"五级", "6":"六级", "7":"七级", "8":"八级", "9":"九级", "10":"十级", "11":"十一级", "12":"十二级", "13":"十三级"
}
export const formatWindPower = (numStr:string)=>{
    // @ts-ignore
    return windPowerMap[numStr] ?? "未知"
}

export const formatWeather = (weather:string) => {
    if(weather == "晴"){
        return "sunny"
    }
    if(weather == "晴转多云"){
        return "cloudy"
    }
    if(weather == "多云"){
        return "overcast"
    }
    if(weather == "雷阵雨"){
        return "thunderstorm"
    }
    if(weather.includes("雨")){
        return "rain"
    }
    if(weather.includes("雪")){
        return "snow"
    }
    if(weather.includes("雾")){
        return "fog"
    }
    if(weather.includes("雹")){
        return "hail"
    }
    return "cloudy"
}
export const parseWeatherDayData = (data:any = {})=>{
    return {
        degree:`${data.max_degree??"0"}°/${data.min_degree??"0"}°`,
        weather:formatWeather(data.day_weather_short),
        time:data.time?.substring(5) ?? "未知"
    }
}
export const parseWeatherData = (data:any = {}) => {
    return {
        now:{
            degree: data.now?.degree ?? defaultWeatherData.now.degree,
            weather: data.now?.weather_short ?? "未知",
            weatherIcon:formatWeather(data.now?.weather_short),
            windDirection:formatWindDirection(data.now?.wind_direction),
            windPower:formatWindPower(data.now?.wind_power)
        },
        today:parseWeatherDayData(data.today),
        tomorrow:parseWeatherDayData(data.tomorrow),
        afterTwoDays:parseWeatherDayData(data.theDayAfterTomorrow),
        afterThreeDays:parseWeatherDayData(data.threeDaysFromNow),
        afterFourDays:parseWeatherDayData(data.afterFourDays),
        afterFiveDays:parseWeatherDayData(data.afterFiveDays),
        afterSixDays:parseWeatherDayData(data.afterSixDays),
    }
}