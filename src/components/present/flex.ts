/**
 * flex 布局
 */
export type FlexProps = {
    flex?: boolean,
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse",
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse",
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly",
    alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch",
    flexGrow?: boolean,
    flexShrink?: boolean,
}

/**
 * 关于flex 相关属性生成
 */
export const buildFlex = (props: FlexProps) => {
    let css = ""
    if (props.flex) {
        css += "display: flex;"
    }
    if (props.flexDirection) {
        css += `flex-direction: ${props.flexDirection};`
    }
    if (props.flexWrap) {
        css += `flex-wrap: ${props.flexWrap};`
    }
    if (props.justifyContent) {
        css += `justify-content: ${props.justifyContent};`
    }
    if (props.alignItems) {
        css += `align-items: ${props.alignItems};`
    }
    if (props.flexGrow !== undefined) {
        css += `flex-grow: ${props.flexGrow ? 1 : 0};`
    }
    if (props.flexShrink !== undefined) {
        css += `flex-shrink: ${props.flexShrink ? 1 : 0};`
    }
    return css
}