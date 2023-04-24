import {FC} from 'react'
import {Wrapper} from "./style"

/**
 * 用于包裹图表的组件
 */
export const ChartBlockWrapper: FC<{ children: any }> = ({children}) => {
    return <Wrapper virtual={false}>{children}</Wrapper>
}