/**
 * 获取当日的农事操作
 */
export const getDayFarmOperations = async () => {
    return [
        {type: "巡检", block: "地块1", worker: "李秀志", status: "已完成", id: "111"},
        {type: "浇水", block: "地块2", worker: "孟星", status: "已完成", id: "222"},
        {type: "施肥", block: "地块3", worker: "冯洪宜", status: "已完成", id: "333"},
        {type: "施肥x", block: "地块4", worker: "张三", status: "已完成", id: "444"},
        {type: "施肥y", block: "地块5", worker: "里斯", status: "已完成", id: "555"}
    ]
}
