import styled from "styled-px2vw-plugin"
import { BackImageProps, buildBackgroundImage } from "./back-image"
import { buildPosition, buildZIndex, PositionProps } from "./position"
import { buildVirtual, VirtualProps } from "./virtual"
import { FlexProps,buildFlex } from "./flex"

/**
 * 预设的一些组件
 */
//合并类型
type ComputedProps = PositionProps | BackImageProps | VirtualProps | FlexProps

const buildComputedProps = (props: ComputedProps) => {
    return `${buildPosition(props as PositionProps)}
    ${buildZIndex(props as PositionProps)}
    ${buildBackgroundImage(props as BackImageProps)}
    ${buildFlex(props as FlexProps)}
    ${buildVirtual(props as VirtualProps)}`
}

/**
 * 自动填满父元素的容器
 */
export const FullContainer = styled.div<ComputedProps>`
    width: 100%;
    height: 100%;
    ${buildComputedProps}
`
/**
 * 常规div
 */
export const Div = styled.div<ComputedProps>`
    ${buildComputedProps}`