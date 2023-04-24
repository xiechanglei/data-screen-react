import styled from 'styled-px2vw-plugin'
import { Div } from '@/components/present'
import {secondColor} from "@/config";
import {mainColor} from "@/config";

export const ChartBlockHeaderIcon = styled(Div)`
    display: inline-block;
    border:2px solid ${mainColor}80;
    width: 18px;
    height: 18px;
    padding: 3px;
    &:before {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        background: ${secondColor};
    }
`

export const ChartBlockHeaderText = styled(Div)`
    margin-left: 12px;
    font-size: 18px;
    font-weight: 700;
`

export const LineWrapper = styled(Div)`
    margin-top:10px;
    & > div:not(:last-child) {
        margin-right: 5px;
    }
`

export const Line1 = styled.div`
    width: 53px;
    height: 2px;
    background: ${mainColor};
`
export const Line2 = styled.div`
  width: 3px;
  height: 2px;
  background: ${secondColor};
`
export const Line3 = styled.div`
    flex-grow: 1;
    height: 1px;
    background: ${mainColor}4c;
    margin-top: 1px;
`
export const Cube1 = styled.div`
    width: 10px;
    height: 2px;
    background: ${mainColor};
`
export const Cube2 = styled.div`
    width: 10px;
    height: 4px;
    background: ${mainColor};
`
export const Cube3 = styled.div`
    width: 10px;
    height: 6px;
    background: ${secondColor};
`
export const Cube4 = styled.div`
    width: 10px;
    height: 8px;
    background: ${mainColor};
`