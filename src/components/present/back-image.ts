/**
 * 关于background-image的属性
 */
export type BackImageProps = {
    backgroundImage?: string
}

/**
 * 关于background-image的属性生成策略
 */
export const buildBackgroundImage = (props: BackImageProps) => {
    if (props.backgroundImage !== undefined) {
        return `
        background-image: url(${props.backgroundImage});
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        `
    }
    return ""
}