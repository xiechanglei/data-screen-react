import styled from "styled-px2vw-plugin"
import {Div} from "../../present"
import {mainColor} from "@/config";

/**
 * 动画持续时间
 */
export const itemHideAnimationTime = 500

export const DataGrid = styled(Div)`
  margin-top: 16px;
  height: 160px;
  overflow: hidden;
`

export const DataGridHeader = styled(Div)`
  color: #fff;
  background: ${mainColor}99;
`

export const DataGridItemWrapper = styled.div`
  
`
export const DataGridItem = styled(Div)`
  margin-top: 8px;
  color: ${mainColor};
  background: ${mainColor}26;
  height: 32px;

  &.hide {
    animation: hide ${itemHideAnimationTime}ms;
    animation-fill-mode: forwards;
  }

  @keyframes hide {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      margin-top: -32px;
    }
  }
`
export const DataGridCell = styled.div`
  width: 25%;
  text-align: center;
  font-size: 14px;
  line-height: 32px;
  font-weight: 500;
`

