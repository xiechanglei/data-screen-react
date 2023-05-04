import {Color} from "@/util/xie-color/color";

export const showLog = true

/**
 * 腾讯地图key
 */
export const tencentMapKey: string = "C4BBZ-LHN3J-GPJFF-K34EB-QCBXT-NCBSW"
/**
 * 设计稿尺寸
 */
export const designSize:number = 1920
/**
 * 主色调 33B9E2
 * 008844
 */
export const mainColor: string = "#33B9E2"
/**
 * 二级色调，这里使用颜色生成器进行转换生成的，如果后期需要修改的话，也可以像上面的主色调一样直接写成16进制的颜色值
 */
export const secondColor: string = new Color(mainColor).rotate(200).saturated().hex()
/**
 * 三级色调
 */
export const thirdColor: string = new Color(mainColor).rotate(20).saturated().hex()
/**
 * 四级色调
 */
export const fourthColor: string = new Color(mainColor).rotate().bright(50).saturated(100).hex()
/**
 * 农事操作的动画时间,跟下面的时间尽量错开，防止界面在某个时间点上，动画一起播放，提升交互体验，防止界面卡顿
 */
export const farmOperaAnimationTime: number = 3000
/**
 * 监测数据的动画时间
 */
export const monitorAnimationTime: number = 10000
/**
 * 视频播放器的动画时间
 */
export const videoPlayerAnimationTime: number = 17000