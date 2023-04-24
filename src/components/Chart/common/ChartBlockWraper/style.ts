import { Div } from '@/components/present'
import styled from 'styled-px2vw-plugin'
import {mainColor} from "@/config";

export const Wrapper = styled(Div)`
    background: linear-gradient(90deg,rgba(39,190,255,0.06), rgba(39,190,255,0.00) 100%, rgba(39,190,255,0.00) 100%, rgba(39,190,255,0.06) 100%);
    position: relative;
    padding: 15px;
    &:before {
        position: absolute;
        left: 0;
        top: 0;
        content: "";
        width: 100%;
        height: 100%;
        border: 1px solid;
        border-image: linear-gradient(135deg,${mainColor} 0 ,${mainColor}00 54px,${mainColor}00 calc(100% - 54px),${mainColor} 100%) 1 1;
        z-index: -1;
    }
    &:after {
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      width: 100%;
      height: 100%;
      border: 1px solid;
      border-image: linear-gradient(45deg, ${mainColor} 0, ${mainColor}00 54px, ${mainColor}00 calc(100% - 54px), ${mainColor} 100%) 1 1;
      z-index: -2;
    }
`