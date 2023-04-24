import {Div} from "@/components/present"
import styled from "styled-px2vw-plugin"
import {secondColor} from "@/config";

export const TodayTemperature = styled.div`
  font-size: 40px;
  font-weight: 500;
  line-height: 40px;
  margin-right: 20px;
`
export const TodayWeatherText = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${secondColor};
  line-height: 20px;
`
export const TodayWind = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.80);
  line-height: 14px;
  margin-top: 7px;
`
export const TodayWeatherIcon = styled.div`
  width: 62px;
  height: 62px;
`
//split-------------------------------------------
export const WeatherDayGroup = styled(Div)`
  margin-top: 42px;
`