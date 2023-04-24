import {FC} from "react"
import {SunnyIcon} from "./SunnyIcon"
import {RainIcon} from "./RainIcon"
import {CloudyIcon} from "./CloudyIcon"
import {OvercastIcon} from "./OvercastIcon"
import {SnowIcon} from "./SnowIcon"
import {FogIcon} from "./FogIcon"
import {ThunderstormIcon} from "./ThunderstormIcon";
import {HailIcon} from "@/components/Chart/common/WeatherIcon/HailIcon";

import {secondColor} from "@/config";

//晴 雨 多云 阴天 雪 雾 雷阵雨 冰雹
export type WeatherType = "sunny" | "rain" | "cloudy" | "overcast" | "snow" | "fog" | "thunderstorm" | "hail";


/**
 * 天气图标
 */
export const WeatherIcon: FC<{ type: WeatherType, color?: string }> = ({type, color = secondColor}) => {
    if (type === "sunny") {
        return <SunnyIcon color={color}/>
    }

    if (type === 'rain') {
        return <RainIcon color={color}/>
    }

    if (type === "cloudy") {
        return <CloudyIcon color={color}/>
    }

    if (type === "overcast") {
        return <OvercastIcon color={color}/>
    }

    if (type === "snow") {
        return <SnowIcon color={color}/>
    }

    if (type === "fog") {
        return <FogIcon color={color}/>
    }

    if (type === "thunderstorm") {
        return <ThunderstormIcon color={color}/>
    }

    if (type === "hail") {
        return <HailIcon color={color}/>
    }
    return <div>unknown icon</div>
}