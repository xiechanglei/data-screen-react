import {FC} from "react";
import {SvgWrapper} from "@/components/Chart/common/WeatherIcon/style";

export const RainIcon:FC<{color:string}> = ({color}) => {
    return <SvgWrapper viewBox="0 0 40 40">
        <path
            d="M18.3134 4C16.0363 3.99995 13.8207 4.72549 11.9995 6.06762C10.1783 7.40974 8.84979 9.29595 8.21366 11.4428C6.43277 12.1273 4.95137 13.4012 4.02551 15.0444C3.09965 16.6875 2.7875 18.5967 3.14301 20.4418C3.49853 22.287 4.49937 23.9522 5.97255 25.1497C7.44574 26.3471 9.29869 27.0016 11.2111 27H29.6146C31.5795 26.9825 33.4578 26.2037 34.8409 24.8332C36.224 23.4627 37 21.6114 37 19.682C37 17.7525 36.224 15.9012 34.8409 14.5307C33.4578 13.1602 31.5795 12.3814 29.6146 12.3639H28.6446C28.1787 10.0092 26.8932 7.88697 25.0084 6.36098C23.1236 4.835 20.7563 4.00031 18.3134 4Z"
            fill="#ffffff"/>
        <line x1="10.549" y1="31.049" x2="8.04904" y2="35.3792" stroke="#ffffff" strokeWidth="3"
              strokeLinecap="round"/>
        <line x1="19.549" y1="31.049" x2="17.049" y2="35.3792" stroke="#ffffff" strokeWidth="3"
              strokeLinecap="round"/>
        <line x1="28.549" y1="31.049" x2="26.049" y2="35.3792" stroke="#ffffff" strokeWidth="3"
              strokeLinecap="round"/>
    </SvgWrapper>
}