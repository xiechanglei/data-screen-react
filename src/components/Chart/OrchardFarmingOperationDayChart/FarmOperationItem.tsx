import {FC} from "react";
import {DataGridCell} from "./style";

export type FarmOperation = {
    id: string,
    type: string,
    block: string,
    worker: string,
    status: string
}
export const FarmOperationItem:FC<{item:FarmOperation}> = ({ item }) => {
    return <>
        <DataGridCell>{item.type}</DataGridCell>
        <DataGridCell>{item.block}</DataGridCell>
        <DataGridCell>{item.worker}</DataGridCell>
        <DataGridCell>{item.status}</DataGridCell>
    </>
}