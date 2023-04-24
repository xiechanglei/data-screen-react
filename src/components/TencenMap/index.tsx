import {FC, useEffect, useRef, useReducer} from "react"
import {FullContainer} from "@/components/present"
import {initialMap, addPolygon, addMarker, MarkerOptions, addInfoWindow} from "./tencentmap-handler"
import {compatiblePxSize} from "../Chart/chart.config"
import {CameraDetail} from "../CameraDetail"
import {cameraUrl} from "./asserts/camera-icon"
import {getAllCameraInfo, getAllPathPoint, getMapCenter} from "@/api/monitor.api";
import {tencentMapReducer} from "./reducer";
import {voided} from "@/util/function.util";

const cameraIconOptions: TMapMarkerStyleOptions = {
    width: parseInt(compatiblePxSize(78).toString()),
    height: parseInt(compatiblePxSize(48).toString()),
    src: cameraUrl,
    anchor: {x: compatiblePxSize(16), y: compatiblePxSize(32)}
}

export const TencentMap: FC<{ zIndex: number }> = ({zIndex}) => {
    let container = useRef<HTMLDivElement>(null)
    const [_, dispatch] = useReducer(tencentMapReducer, {})
    //摄像头列表
    const loadCameras = async (map: TMapMap) => {
        const cameraList: MarkerOptions[] = await getAllCameraInfo()
        let marker = addMarker(map, cameraList, cameraIconOptions)
        //点击摄像头图标，显示摄像头详情
        marker.on("click", (event: any) => {
            let {url,name} = event.geometry.properties
            let iw = addInfoWindow(map!, event.latLng.lat, event.latLng.lng, <CameraDetail name={name} src={url}/>)
            dispatch({type: "setInfoWindow", infoWindow: iw})
        })
    }

    //电子围栏
    const loadFence = async (map: TMapMap) => {
        const paths = await getAllPathPoint()
        addPolygon(map, paths)
    }

    //初始化
    const init = async () => {
        let {lat, lng} = await getMapCenter()
        let m = await initialMap(container.current as HTMLDivElement, lat, lng)
        dispatch({type: "setMap", map: m})
        voided(loadCameras)(m)
        voided(loadFence)(m)
    }

    useEffect(() => {
        voided(init)()
        return () => dispatch({type: "setMap"})
    }, [])

    return <FullContainer absolute zIndex={zIndex} style={{backgroundColor: "#131e44", overflow: "hidden"}}
                          ref={container}>
    </FullContainer>
}