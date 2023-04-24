
import styled from "styled-px2vw-plugin"
import {Div} from "@/components/present"
import {mainColor} from "@/config";
export const AppTitleWrapper = styled(Div)`
  left: 50%;
  transform: translateX(-50%);
  height: 40px;
  font-size: 34px;
  font-weight: 700;
  line-height: 40px;
  margin-top: 20px;
  text-shadow: 0 4px 8px 0 #001d73;
  background: linear-gradient(#D9E8FF 0%, ${mainColor} 100%);
  color: transparent;
  -webkit-background-clip: text;
`