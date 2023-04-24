import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global-style/base.css"

import {initStyledConfig} from 'styled-px2vw-plugin'
initStyledConfig({viewportWidth: 1920, ignoreAttrs: []})
/**
 * 说一下这里为什么要写成异步加载,因为import导入链的代码会优先执行,
 * 所以上面通过设置initStyledConfig 去设置 styled-px2vw-plugin的配置 并不会在各组件的代码中生效
 */
const initApp = async () => {
    let App = (await import('./App')).default
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App/>)
}

initApp()
