import {axiosClient} from "@/util/request";

/**
 * 获取物联网设备的数据
 */

export const getIotLastFewDaysData = (dayCount: number = 7) => {
    return async () => {
        let start = new Date()
        start.setDate(start.getDate() - dayCount + 1)
        let end = new Date()
        let deviceId = await axiosClient.get<{}, string>("/trace/device/station/no")
        let time = `${start.getFullYear()}/${start.getMonth() + 1}/${start.getDate()}-${end.getFullYear()}/${end.getMonth() + 1}/${end.getDate()}`
        return axiosClient.get<any, IotDataInfo>(`/trace/device/station/iot/data?deviceId=${deviceId}&time=${time}&timeType=day`)
    }
}
/**
 * 获取所有摄像头的信息
 */
export const getAllCameraInfo = async () => {
    let data = await axiosClient.get<{}, CameraInfo[]>("/trace/device/camera/list")
    return data.map(item => ({...item, lat: parseFloat(item.latitude), lng: parseFloat(item.longitude)}))
}

/**
 * 获取地图中心
 */
export const getMapCenter = async () => {
    return {lat: 40.099112, lng: 116.088043}
}

/**
 * 获取电子围栏的坐标集合
 */
export const getAllPathPoint = async () => {
    return [[40.101457, 116.085373], [40.101519, 116.085914],
        [40.101223, 116.086338], [40.101333, 116.086888], [40.101347, 116.087682], [40.101147, 116.088042],
        [40.101161, 116.088620], [40.101444, 116.089260], [40.101402, 116.090018], [40.101679, 116.090530],
        [40.101190, 116.091161], [40.100679, 116.091630], [40.100024, 116.091414], [40.099720, 116.090845],
        [40.099176, 116.089971], [40.098865, 116.088654], [40.098583, 116.086994], [40.098879, 116.085867],
        [40.099507, 116.085028], [40.100066, 116.084821], [40.100631, 116.084631], [40.101080, 116.084676],
    ]
}