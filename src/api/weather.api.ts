import {axiosClient} from "@/util/request";

/**
 * 获取天气接口
 */
export const getWeather = (lat: number,lng:number) => {
    return axiosClient.get(`/trace/device/weather?lng=${lng}&lat=${lat}`)
}