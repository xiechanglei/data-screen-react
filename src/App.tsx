import {Fragment} from "react"
import {TencentMap} from "@/components/TencenMap"
import PageFrame from "@/components/PageFrame"
import {Chart} from "@/components/Chart"
import {AppTitle} from "@/components/AppTitle"

const App = () => {
    return (<Fragment>
        {/*地图组件*/}
        <TencentMap zIndex={100}/>
        {/*页面框架*/}
        <PageFrame zIndex={200}/>
        {/*标题栏*/}
        <AppTitle zIndex={300}/>
        {/*图表*/}
        <Chart zIndex={400}/>
    </Fragment>)
}
export default App
