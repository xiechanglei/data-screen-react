import { padTimeNumber } from "./number.util"
const weekDay = ['日', '一', '二', '三', '四', '五', '六']

/**
 * 格式化星期
 * @param date
 */
export const formatWeekDay = (date: Date) => {
    return `星期${weekDay[date.getDay()]}`
}

/**
 * 格式化时间
 * @param time
 */
export const formatTime = (time: Date) => {
    return `${padTimeNumber(time.getHours())}:${padTimeNumber(time.getMinutes())}:${padTimeNumber(time.getSeconds())}`
}


/**
 * 格式化日期
 * @param date
 */
export const formatDate = (date: Date) => {
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
}
