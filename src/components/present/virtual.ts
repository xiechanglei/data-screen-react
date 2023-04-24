/**
 * dom的虚拟化,就是不接受鼠标事件
 */
export type VirtualProps = {
    virtual?: boolean
}

/**
 * 根据VirtualProps生成css
 */
export const buildVirtual = (props: VirtualProps) => {
    if (props.virtual) {
        return "pointer-events: none;"
    } else if (props.virtual === false) {
        return "pointer-events: all;"
    }
}