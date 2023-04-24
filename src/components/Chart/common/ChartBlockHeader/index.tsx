import {FC} from 'react'
import {Div} from "@/components/present";
import {
    ChartBlockHeaderText, ChartBlockHeaderIcon, LineWrapper,
    Line1, Line2, Line3, Cube1, Cube2, Cube3, Cube4
} from "./style";

/**
 * 图表组件的头部封装
 */
export const ChartBlockHeader: FC<{ title: string }> = ({title}) => {
    return <div>
        <Div flex alignItems='center'>
            <ChartBlockHeaderIcon/>
            <ChartBlockHeaderText>{title}</ChartBlockHeaderText>
        </Div>
        <LineWrapper flex alignItems='flex-end'>
            <Line1/> <Line2/><Line3/><Cube1/><Cube2/><Cube3/><Cube4/>
        </LineWrapper>
    </div>
}