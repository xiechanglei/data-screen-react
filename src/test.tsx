import React from 'react'
import ReactDOM from 'react-dom/client'
import VideoPlayer from '@/components/VideoPlayer'
import "./global-style/base.css"

/**
 * 测试 video-player组件
 */
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const app = <React.StrictMode><div style={{ width: "400px", height: "300px" }}>
    <VideoPlayer videoSrc='https://hls01open.ys7.com/openlive/e84651b7a8024d7280aa8e96588aaf89.hd.m3u8' /></div></React.StrictMode>
root.render(app)