import {FC, useEffect, useRef, useState} from "react"
import 'video.js/dist/video-js.css'
import {buildPlayer, buildSource} from "./videojs"
import {VideoWrapper} from "./style"

//m3u8 播放器
const VideoPlayer: FC<{ videoSrc: string }> = ({videoSrc}) => {
    let videoRef = useRef<HTMLVideoElement>(null)
    let [player, setPlayer] = useState<any>(null)
    const initPlayer = () => {
        if (videoRef.current && videoSrc !== '' && videoSrc !== undefined) {
            if (player !== null) {
                player.src([buildSource(videoSrc)])
                player.load()
                player.play()
            } else {
                let p = buildPlayer(videoRef.current, [buildSource(videoSrc)])
                setPlayer(p)
            }
        } else {
            destroyPlayer()
        }
    }

    const destroyPlayer = () => {
        if (player !== null) {
            player.pause() //关闭
            player.reset() //重置
        }
    }


    useEffect(() => {
        initPlayer()
        return destroyPlayer
    }, [videoSrc])
    return <VideoWrapper ref={videoRef}></VideoWrapper>
}

export default VideoPlayer