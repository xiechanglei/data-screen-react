import {axiosClient} from "@/util/request";

/**
 * 获取天气接口
 */
export const getOrchardInfo = () => {
    return axiosClient.post<any, OrchardInfo>(`/trace/screen/dept/info`)
}