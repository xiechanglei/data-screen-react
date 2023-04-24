import styled from "styled-px2vw-plugin"
import {Div, FullContainer} from "@/components/present";

export const ChartContainer = styled(FullContainer)`
  padding: 3%;
`
const ChartSideBlock = styled(Div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  & > div:not(:last-child) {
    margin-bottom: 20px;
  }
`

export const LeftSide = styled(ChartSideBlock)`
  width: 25%;
`

export const MiddleSide = styled(ChartSideBlock)`
  width: 50%;
  margin: 0 20px;
`

export const RightSide = styled(ChartSideBlock)`
  width: 25%;
`
