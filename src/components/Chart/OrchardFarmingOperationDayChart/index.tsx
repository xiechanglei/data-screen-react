import {useEffect, useState} from "react"
import {ChartBlockWrapper} from "../common/ChartBlockWraper"
import {ChartBlockHeader} from "../common/ChartBlockHeader"
import {DataGrid, DataGridHeader, DataGridItemWrapper, DataGridCell, DataGridItem, itemHideAnimationTime} from "./style"
import {FarmOperation, FarmOperationItem} from "./FarmOperationItem"
import {getDayFarmOperations} from "@/api/farmOperation.api"
import {farmOperaAnimationTime} from "@/config"
import {voided} from "@/util/function.util"

export const OrchardFarmingOperationDayChart = () => {
    //第一个记录
    const [firstItem, setFirstItem] = useState<FarmOperation | null>(null)
    //界面显示的剩下的记录
    const [otherItem, setOtherItem] = useState<FarmOperation[]>([])
    //数据池
    const [itemPool, setItemPool] = useState<FarmOperation[]>([])
    //第一个记录是否隐藏
    const [firstItemHide, setFirstItemHide] = useState<boolean>(false)

    /**
     * 滚动动画的简单实现过程
     * 1.从数据池中取出一个记录，放到队列的最后面，因为数据列表元素设置了高度，所以这个记录会被隐藏
     * 2.整个队列向上滑动，第一个记录将会慢慢被隐藏
     * 3.滑动结束之后，将第一个记放回到数据池中，同时将第一个记录从队列中移除,取消滑动的过程
     *  a b c =>  a b c d => b c d
     *
     */
    const animation = () => {
        if (itemPool.length > 0) {
            let operation = itemPool[0]
            setOtherItem([...otherItem, operation])
            setFirstItemHide(true)
            setTimeout(() => {
                setFirstItemHide(false)
                setFirstItem(otherItem[0])
                setOtherItem([...otherItem.slice(1), operation])
                setItemPool([...itemPool.slice(1), firstItem!])
            }, itemHideAnimationTime)
        }
    }
    /**
     * 记载数据
     */
    const loadData = async () => {
        let responseData = await getDayFarmOperations()
        setFirstItem(responseData[0])
        setOtherItem(responseData.slice(1, 3))
        setItemPool(responseData.slice(3))
    }

    useEffect(voided(loadData), [])

    useEffect(() => {
        let timer = setTimeout(animation, farmOperaAnimationTime)
        return () => clearTimeout(timer)
    }, [itemPool])
    return <ChartBlockWrapper>
        <ChartBlockHeader title="果园今日农事操作"/>
        <DataGrid>

            <DataGridHeader flex justifyContent="space-between">
                <DataGridCell>作业类型</DataGridCell>
                <DataGridCell>地块</DataGridCell>
                <DataGridCell>作业人</DataGridCell>
                <DataGridCell>完成情况</DataGridCell>
            </DataGridHeader>
            {/*第一个*/}
            {firstItem &&
                <DataGridItem flex justifyContent="space-between" className={firstItemHide ? "hide" : ""}>
                    <FarmOperationItem item={firstItem}/>
                </DataGridItem>}

            {/*剩下的*/}
            <DataGridItemWrapper>
                {otherItem.map((item) => {
                    return <DataGridItem key={item.id} flex justifyContent="space-between">
                        <FarmOperationItem item={item}/>
                    </DataGridItem>
                })}
            </DataGridItemWrapper>

        </DataGrid>
    </ChartBlockWrapper>
}