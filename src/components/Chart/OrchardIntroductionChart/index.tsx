import {OrchardIntroductionChartContainer} from "./style"
const maxWordLength = 76
let desc = "海淀玉巴达杏原产于海淀区北安河，具有数百年栽培历史，曾为贡品，具有果皮薄，个头圆润，口感好，成熟后晶莹剔透，多汁且沙瓤，口味香甜，杏仁甜营养价值高等优点"

/**
 * 果园介绍图标组件
 */
export const OrchardIntroductionChart = () => {
    if (desc.length > maxWordLength) {
        desc = desc.slice(0, maxWordLength) + "..."
    }
    return <OrchardIntroductionChartContainer>{desc}</OrchardIntroductionChartContainer>
}