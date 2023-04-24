import {tencentMapKey} from "@/config"
import {randomString} from "@/util/sttring.util";
import {ReactNode} from "react";
import {createRoot} from "react-dom/client";
import {mainColor} from "@/config";

let TMap: TMapDefinition;

/**
 * 导入腾讯地图的js文件,这里采用的是动态加载的方式，
 */
export const importMapLib = async () => {
    return new Promise((resolve, reject) => {
        if (TMap !== undefined) {
            resolve(null)
            return
        }
        const script = document.createElement("script")
        script.src = `https://map.qq.com/api/gljs?v=1.exp&key=${tencentMapKey}`
        script.onerror = reject
        script.onload = () => {
            TMap = window.TMap
            resolve(null)
        }
        document.head.appendChild(script)
    })
}

/**
 * 初始化地图
 * @param container 地图初始化的容器
 * @param lat 维度
 * @param lng 经度
 * @param customOptions 扩展配置，会覆盖默认配置
 * @returns
 */
export const initialMap = async (container: HTMLElement, lat: number, lng: number, customOptions: TMapInitOptions = {}) => {
    await importMapLib()
    const options: TMapInitOptions = {
        center: new TMap.LatLng(lat, lng),
        zoom: 17.25,
        showControl: false,
        baseMap: {
            type: "satellite",
            features: ["base"]//base road
        },
        ...customOptions
    }
    return new TMap.Map(container, options)
}

/**
 * 销毁地图
 * @param map 腾讯地图对象
 */
export const destroyMap = (map?: TMapMap) => map?.destroy()

/**
 * 添加多边形
 */
export const addPolygon = (map: TMapMap, path: number[][]) => {
    return new TMap.MultiPolygon({
        id: 'polygon-layer', //图层id
        map, //设置多边形图层显示到哪个地图实例中
        //多边形样式
        styles: {
            polygon: new TMap.PolygonStyle({
                color: 'rgba(0,0,0,0)', //面填充色
                borderColor: mainColor, //边线颜色
                //边线宽度
                borderWidth: 5,
            })
        },
        //多边形数据
        geometries: [
            {
                id: 'p1', //该多边形在图层中的唯一标识（删除、更新数据时需要）
                styleId: 'polygon', //绑定样式名
                paths: path.map(([lat, lng]) => new window.TMap.LatLng(lat, lng)), //多边形轮廓
            }
        ]
    })
}

/**
 * 添加marker
 */
export type MarkerOptions = {
    lat: number;
    lng: number;
    [key: string]: any;
}
export const addMarker = (map: TMapMap, points: MarkerOptions[], iconOptions: TMapMarkerStyleOptions) => {
    const myStyle = new TMap.MarkerStyle({...iconOptions})
    const geometries = points.map((data, index) => ({
        id: `cameraMarker${index}`,   //点标记唯一标识，后续如果有删除、修改位置等操作，都需要此id
        styleId: 'myStyle',  //指定样式id
        position: new TMap.LatLng(data.lat, data.lng),  //点标记坐标位置
        properties: data
    }))
    return new TMap.MultiMarker({map, geometries, styles: {myStyle}});
}


/**
 * 添加一个信息窗口，可以传入一个ReactNode作为子元素，窗口关闭的时候会自动销毁
 */
export const addInfoWindow = (map: TMapMap, lat: number, lng: number, content: ReactNode) => {
    const id = randomString(10)
    const infoWindow = new TMap.InfoWindow({
        map,
        position: new TMap.LatLng(lat, lng),
        content: `<div id='${id}'></div>`,
        visible: true
    })
    const container = document.getElementById(id)
    let root = createRoot(container!)
    root.render(content)
    const afterClose = () => {
        root.unmount()
        infoWindow.off("closeclick", afterClose)
    }
    infoWindow.on("closeclick", afterClose)

    return infoWindow
}
