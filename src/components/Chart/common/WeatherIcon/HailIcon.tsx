import {FC} from "react";
import {SvgWrapper} from "@/components/Chart/common/WeatherIcon/style";

export const HailIcon: FC<{ color: string }> = ({color}) => {
    return <SvgWrapper viewBox="0 0 40 40">
        <path
            d="M18.3134 3C16.0363 2.99995 13.8207 3.72549 11.9995 5.06762C10.1783 6.40974 8.84979 8.29595 8.21366 10.4428C6.43277 11.1273 4.95137 12.4012 4.02551 14.0444C3.09965 15.6875 2.7875 17.5967 3.14301 19.4418C3.49853 21.287 4.49937 22.9522 5.97255 24.1497C7.44574 25.3471 9.29869 26.0016 11.2111 26H29.6146C31.5795 25.9825 33.4578 25.2037 34.8409 23.8332C36.224 22.4627 37 20.6114 37 18.682C37 16.7525 36.224 14.9012 34.8409 13.5307C33.4578 12.1602 31.5795 11.3814 29.6146 11.3639H28.6446C28.1787 9.00922 26.8932 6.88697 25.0084 5.36098C23.1236 3.835 20.7563 3.00031 18.3134 3Z"
            fill="#ffffff"/>
        <circle cx="20" cy="30" r="2" fill="#ffffff"/>
        <circle cx="28" cy="30" r="2" fill="#ffffff"/>
        <circle cx="24" cy="36" r="2" fill="#ffffff"/>
        <circle cx="12" cy="30" r="2" fill="#ffffff"/>
        <circle cx="16" cy="36" r="2" fill="#ffffff"/>
    </SvgWrapper>
}