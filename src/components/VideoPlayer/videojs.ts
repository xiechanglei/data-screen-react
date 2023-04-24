import videojs from 'video.js'

/**
 * 构建播放源
 */
export const buildSource = (src: string) => {
    if (src.toLowerCase().endsWith('.m3u8')) {
        return { src, type: 'application/x-mpegURL' }
    }
    return { src, type: 'video/mp4' }
}

/**
 * 构建播放器
 */
export const buildPlayer = (videoElement: HTMLVideoElement, sources: any[], autoplay: boolean = true, muted: boolean = true) => {
    let options = {
        preload: 'auto',
        controls: true,
        autoplay,
        muted,
        width: "100%",
        height: "100%",
        sources
    }
    return videojs(videoElement, options, function onPlayerReady() { })
};