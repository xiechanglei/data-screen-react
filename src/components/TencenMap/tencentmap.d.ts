/**
 * 地图初始化参数类型
 */
interface TMapInitOptions {
    /** 地图中心点 */
    center?: TMapLatLng;
    /**地图缩放级别，支持3～20。*/
    zoom?: number;
    /**地图最小缩放级别，默认为3。*/
    minZoom?: number;
    /**地图最大缩放级别，默认为20。*/
    maxZoom?: number;
    /**地图在水平面上的旋转角度，顺时针方向为正，默认为0。*/
    rotation?: number;
    /**地图俯仰角度，取值范围为0~80，默认为0。*/
    pitch?: number;
    /**地图显示比例，默认为1。*/
    scale?: number;
    /**地图中心与容器的偏移量，Object的格式为 {x:Number, y:Number}（右方下方为正，单位为像素）。*/
    offset?: number;
    /**是否支持拖拽移动地图，默认为true。*/
    draggable?: boolean;
    /**是否支持鼠标滚轮缩放地图，默认为true。*/
    scrollable?: boolean;
    /**是否支持双击缩放地图，默认为true*/
    doubleClickZoom?: boolean;
    /**地图边界，设置后拖拽、缩放等操作无法将地图移动至边界外，默认为null*/
    boundary?: number;
    /**地图样式ID，有效值为”style[编号]”，与key绑定，详见个性化地图配置页面*/
    mapStyleId?: number;
    /**地图视图模式，支持2D和3D，默认为3D。2D模式下不可对地图进行拖拽旋转，pitch和rotation始终保持为0。*/
    viewMode?: number;
    /**是否显示地图上的控件，默认true。*/
    showControl?: boolean;
    /** 地图类型 */
    baseMap?: string | {
        /**
         * vector矢量地图 satellite卫星地图 traffic实时路况
         */
        type: "vector" | "satellite" | "traffic";
        /**
         * 地图特性 道路及底面（base）、路网图（road）,建筑物（building3d）、建筑物平面(building2d)、poi文字（point）、道路文字（label）；若features为非数组则默认为全部显示，若features为空数组不显示任何地物
         */
        features: string[];
    }
}

/**
 * 地图类型
 */
interface TMapMap {
    new(container: HTMLElement, options: TMapInitOptions): TMapMap;

    setCenter: (latLng: any) => void;
    setZoom: (zoom: number) => void;
    destroy: () => void;
    addControl: (control: any) => void;
    removeControl: (control: any) => void;
    addMarker: (marker: any) => void;
    removeMarker: (marker: any) => void;
}


interface TMapPolygonStyleOptions {
    color: string; //面填充色
    showBorder?: boolean; //是否显示拔起面的边线
    borderColor: string; //边线颜色
    borderWidth: number //边线宽度
}

interface TMapPolygonStyle {
    new(options: TMapPolygonStyleOptions): TMapPolygonStyle;
}

/**
 * 多边形构造参数
 */
interface TMapMultiPolygonOptions {
    id: string; //图层id
    map: TMapMap; //设置多边形图层显示到哪个地图实例中
    styles: {//多边形样式
        polygon: TMapPolygonStyle
    };
    //多边形数据
    geometries: [
        {
            id: string, //该多边形在图层中的唯一标识（删除、更新数据时需要）
            styleId: string, //绑定样式名
            paths: TMapLatLng[], //多边形轮廓
        }
    ]
}

/**
 * 多边形
 */
interface TMapMultiPolygon {
    new(options: TMapMultiPolygonOptions): TMapMultiPolygon;
}


/**
 * 经纬度类型
 */
interface TMapLatLng {
    new(lat: number, lng: number): TMapLatLng;
}

/**
 * 多点标注构造参数
 */
interface TMapMultiMarker {
    new(options: {}): TMapMultiMarker;

    on: (event: string, callback: (e: any) => void) => void;
}

interface TMapMarkerStyle {
    new(options: TMapMarkerStyleOptions): TMapMarkerStyle
}

interface TMapMarkerStyleOptions {
    /**
     * 必需，标注点图片的宽度，默认为34
     */
    width: number;

    /**
     * 必需，标注点图片的高度，默认为50
     */
    height: number;

    /**
     * 标注点图片的锚点位置，对象字面量{x:Number, y:Number}形式，
     * 在地图各种操作中，锚点的位置与标注位置点是永远对应的；若没有锚点默认为{ x: width/2, y: height }；
     * 锚点以图片左上角点为原点
     */
    anchor: { x: number, y: number }

    /**
     * 标注点图片的url地址
     */
    src: string;

    /**
     * 标注点图片的朝向，可取’map’（贴地）或’screen’（直立），默认为’screen’。
     */
    faceTo?: "map" | "screen";

    /**
     * 标注点图片的旋转角度，单位为度，非负数；以锚点为旋转原点，逆时针为正。
     */
    rotate?: number;

    /**
     * 标注点文本颜色属性，支持rgb()，rgba()，#RRGGBB等形式，默认为rgba(0,0,0,1) 。
     */
    color?: string;

    /**
     * 标注点文本描边颜色属性，支持rgb()，rgba()，#RRGGBB等形式，默认为rgba(0,0,0,0)。
     */
    strokeColor?: string;

    /**
     * 标注点文本描边宽度，默认为1。
     */
    strokeWidth?: number;

    /**
     * 标注点文本字体大小，默认为14。
     */
    size?: number;

    /**
     * 标注点文本文字相对于标注点图片的方位，
     * 可选位于标注点图片的center，top，bottom，left，right方位，
     * 默认位于图片的中心center 。
     */
    direction?: "center" | "top" | "bottom" | "left" | "right";

    /**
     * 标注点文本文字基于direction方位的偏移量，单位为像素，
     * 以文本文字中心为原点，x轴向右为正向左为负，y轴向下为正向上为负，默认为{x:0, y:0} 。
     */
    offset?: { x: number, y: number };
}

/**
 * 信息窗口对象声明
 */
interface TMapInfoWindowOptions {
    /**
     * 设置信息窗口显示到哪个地图实例中
     */
    map: TMapMap;
    /**
     * 设置信息窗口显示的位置
     */
    position: TMapLatLng;
    /**
     * 设置信息窗口显示的内容
     */
    content: string;
    /**
     * 设置信息窗口是否可见
     */
    visible: boolean;
}

interface TMapInfoWindow {
    /**
     * 信息窗口对象构造函数
     * @param options
     */
    new(options: TMapInfoWindowOptions): TMapInfoWindow;

    /**
     * 绑定事件
     * @param event 官方文档里里面好像只有一个事 "closeclick"
     * @param callback  回调函数
     */
    on: (event: string, callback: (e: any) => void) => void;

    /**
     * 解绑事件
     * @param event 事件名称,暂时只有一个事件 "closeclick"
     * @param callback 回调函数
     */
    off: (event: string, callback: (e: any) => void) => void;

    /**
     * 关闭
     */
    close: () => void;
}

/**
 * 定义TMap类型
 */
interface TMapDefinition {
    Map: TMapMap;
    MultiMarker: TMapMultiMarker;
    LatLng: TMapLatLng;
    MultiPolygon: TMapMultiPolygon;
    PolygonStyle: TMapPolygonStyle;
    MarkerStyle: TMapMarkerStyle;
    InfoWindow: TMapInfoWindow;
}

/**
 * 扩展window上面的TMap类型说明
 */
declare interface Window {
    TMap: TMapDefinition;
}
