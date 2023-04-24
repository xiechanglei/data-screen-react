import styled from 'styled-px2vw-plugin'

export const animationTime = 300
export const ChartGroupsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 420px;
  &.even > div:first-child{
    top: 20px;
  }
  &.even > div:last-child{
    top: 230px;
  }
  &.odd > div:first-child{
    top: 230px;
  }
  &.odd > div:last-child{
    top: 20px;
  }
`
export const ChartContent = styled.div`
  height: 200px;
  width: 100%;
  position: absolute;
  left: 0;
  transition: all ${animationTime}ms ease-in-out;
  &.hide {
    opacity: 0;
  }
`
