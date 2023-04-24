import {FC} from "react"
import VideoPlayer from "../VideoPlayer"
import {CameraDetailWrapper, CameraTitle, VideoWrapper} from "./style"

/**
 * 摄像头详情组件
 * @param src
 * @constructor
 */
export const CameraDetail: FC<{ src: string, name: string }> = ({src, name}) => {
    return <CameraDetailWrapper>
        <CameraTitle>{name}</CameraTitle>
        <VideoWrapper>
            <VideoPlayer videoSrc={src}/>
        </VideoWrapper>
    </CameraDetailWrapper>
}
