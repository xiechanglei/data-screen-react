import {FC} from "react"
import {AppTitleWrapper} from "./style"
import {useEffect,useState} from "react"
import {getOrchardInfo} from "@/api/orchard.api"

/**
 * 大数据页面标题组件部分，单独抽离出来，方便后续修改
 * @param zIndex 组件的层级，越小越靠下
 * @constructor
 */
export const AppTitle: FC<{ zIndex: number }> = ({zIndex}) => {
    let [appTitle, setAppTitle] = useState("appTitle")
    useEffect(() => {
        getOrchardInfo().then(data => {
            setAppTitle(data.entName)
            document.title = data.entName
        });
    },[])
    return <AppTitleWrapper absolute zIndex={zIndex}>{appTitle}</AppTitleWrapper>
}
