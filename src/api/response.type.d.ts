// 用于定义接口返回数据的类型

/**
 * 通用的接口返回数据类型
 */
type ResponseData<T> = {
    /**
     * 与http状态码一致，200表示成功 401表示未登录 500表示服务器错误
     */
    code: number,
    /**
     * 接口返回的数据
     */
    data: T,
    /**
     * 接口返回的错误信息
     */
    msg: string
}

/**
 * 摄像头的信息
 */
type CameraInfo = {
    //摄像头的id
    id: string,
    //摄像头的名称
    name: string,
    //摄像头的经度
    latitude: string,
    //摄像头的纬度
    longitude: string,
    //摄像头的m3u8地址
    url: string,
}

/**
 * 果园信息
 */
type OrchardInfo = {
    //城市
    city: string
    //区县
    county: string
    //创建时间
    createTime: string
    //地址
    entAddress: string
    //果园编码
    entCode: string
    //果园id
    entId: number
    //果园名称
    entName: string
    //扩展信息
    extendInfo: string
    //果园介绍
    gardenIntroduce: string
    //法人姓名
    legalPersonName: string
    //营业执照号
    licenceNo: string
    //联系人
    linkman: string
    //联系电话
    linkmanPhone: string
    //更新时间
    updateTime: string
}

type IotDataInfo = {
    //设备id
    deviceId: string,
    //统计日期
    date: string,
    //1.大气温度
    max_air_temperature: number | null,
    min_air_temperature: number | null,
    avg_air_temperature: number | null,
    //2.湿度
    min_air_humidity: number | null,
    max_air_humidity: number | null,
    avg_air_humidity: number | null,
    //3.气压
    avg_atmosphere: number | null,
    max_atmosphere: number | null,
    min_atmosphere: number | null,
    //4.风向
    max_wind_direction: number | null,
    avg_wind_direction: number | null,
    min_wind_direction: number | null,
    //5.风速
    avg_wind_speed: number | null,
    min_wind_speed: number | null,
    max_wind_speed: number | null,
    //6.降雨量
    max_rainfall: number | null,
    avg_rainfall: number | null,
    min_rainfall: number | null,
    //7.土壤温度
    max_soil_temperature: number | null,
    min_soil_temperature: number | null,
    avg_soil_temperature: number | null,
    //8.土壤湿度
    max_soil_humidity: number | null,
    avg_soil_humidity: number | null,
    min_soil_humidity: number | null,
    //9.土壤PH
    min_soil_ph: number | null,
    avg_soil_ph: number | null,
    max_soil_ph: number | null,
    //10.土壤EC
    avg_soil_ec: number | null,
    max_soil_ec: number | null,
    min_soil_ec: number | null,
    //11.PM2.5
    max_pm25: number | null,
    min_pm25: number | null,
    avg_pm25: number | null,
    //12.PM10
    max_pm10: number | null,
    avg_pm10: number | null,
    min_pm10: number | null,
    //13.空气SO2
    min_so2: number | null,
    avg_so2: number | null,
    max_so2: number | null,
    //14.空气NO2
    min_no2: number | null,
    avg_no2: number | null,
    max_no2: number | null,
    //15.一氧化碳
    max_co: number | null,
    avg_co: number | null,
    min_co: number | null,
    //16.空气O3
    avg_o3: number | null,
    min_o3: number | null,
    max_o3: number
}