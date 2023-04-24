import {useEffect, useState} from "react"
import {ChartBlockWrapper} from "../common/ChartBlockWraper"
import {ChartBlockHeader} from "../common/ChartBlockHeader"
import VideoPlayer from '../../VideoPlayer'
import {ChartContent} from './style'
import {videoPlayerAnimationTime} from "@/config"
import {getAllCameraInfo} from "@/api/monitor.api";

/**
 * 视频监控
 */
export const OrchardVideoChart = () => {
    let [videoIndex, setVideoIndex] = useState<number>(0)

    let [cameraInfo, setCameraInfo] = useState<any>(null)
    let loadData = async () => {
        let res = await getAllCameraInfo()
        if (res.length > 0) {
            let currentIndex = videoIndex++
            if (currentIndex >= res.length) {
                currentIndex = 0
            }
            setVideoIndex(currentIndex)
            setCameraInfo(res[currentIndex])
        }
    }
    useEffect(() => {
        loadData()
        let timer = setInterval(loadData, videoPlayerAnimationTime)
        return () => clearInterval(timer)
    }, [])
    return <ChartBlockWrapper>
        <ChartBlockHeader title="视频监控"/>
        <ChartContent>
            <VideoPlayer videoSrc={cameraInfo?.url}/>
        </ChartContent>
    </ChartBlockWrapper>
}

