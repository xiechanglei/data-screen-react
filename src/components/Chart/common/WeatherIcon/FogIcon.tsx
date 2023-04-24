import {FC} from "react";
import {SvgWrapper} from "@/components/Chart/common/WeatherIcon/style";

export const FogIcon:FC<{color:string}> = ({color}) => {
    return <SvgWrapper viewBox="0 0 40 40">
        <rect x="5" y="7" width="30" height="4" rx="2" fill="#ffffff"/>
        <rect x="5" y="18" width="30" height="4" rx="2" fill="#ffffff"/>
        <rect x="5" y="29" width="30" height="4" rx="2" fill="#ffffff"/>
    </SvgWrapper>
}