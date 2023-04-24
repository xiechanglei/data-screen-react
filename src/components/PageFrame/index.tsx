import { FC } from "react"
import { FullContainer } from "@/components/present"
import frameImage from "@/assert/images/frame.png"

/**
 * 页面框架组件,整个页面的边框切成一张图了
 * @param zIndex
 * @constructor
 */
const PageFrame: FC<{ zIndex: number }> = ({ zIndex }) => {
    return (
        <FullContainer absolute zIndex={zIndex} virtual backgroundImage={frameImage} ></FullContainer>
    );
};
export default PageFrame;