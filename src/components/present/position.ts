/**
 * 关于position的属性
 */
export type PositionProps = {
    absolute?: boolean,
    relative?: boolean,
    fixed?: boolean,
    sticky?: boolean,
    static?: boolean,
    zIndex?: number
}

/**
 * 根据position属性生成css
 */
export const buildPosition = (props: PositionProps) => {
    if (props.absolute) return "position: absolute;left:0;top:0;"
    if (props.relative) return "position: relative;"
    if (props.fixed) return "position: fixed;left:0;top:0;"
    if (props.sticky) return "position: sticky;"
    if (props.static) return "position: static;"
    return ""
}

/**
 * 根据z-index属性生成css
 */
export const buildZIndex = (props: PositionProps) => {
    if (props.zIndex !== undefined) {
        return `z-index: ${props.zIndex};`
    }
    return ""
}