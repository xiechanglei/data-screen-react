import {destroyMap} from "./tencentmap-handler";

export interface TencentMapReducerState {
    map?: TMapMap,
    infoWindow?: TMapInfoWindow
}

export type  TencentMapReducerAction = {
    type: "setMap" | "setInfoWindow",
} & TencentMapReducerState

export const tencentMapReducer = (state: TencentMapReducerState, action: TencentMapReducerAction) => {
    switch (action.type) {
        case "setMap":
            destroyMap(state.map)
            return {...state, map: action.map}
        case "setInfoWindow":
            state.infoWindow?.close()
            return {...state, infoWindow: action.infoWindow}
        default:
            return state
    }
}