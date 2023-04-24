import {FC} from "react";
import {SvgWrapper} from "@/components/Chart/common/WeatherIcon/style";

export const CloudyIcon:FC<{color:string}> = ({color}) => {
    return <SvgWrapper viewBox="0 0 40 40">
        <path
            d="M36.036 22.0244C35.5116 20.6839 34.5891 19.5298 33.3886 18.7121C32.188 17.8944 30.7651 17.4512 29.3048 17.4399H28.3483C28.0046 15.714 27.2126 14.105 26.0492 12.7694C24.8859 11.4338 23.3908 10.4173 21.7095 9.81858C23.0275 8.48911 24.7186 7.57636 26.5667 7.19697C28.4148 6.81758 30.336 6.98878 32.0847 7.68869C33.8333 8.3886 35.3302 9.58543 36.3838 11.1263C37.4375 12.6671 38.0001 14.4819 37.9998 16.3388C37.9955 18.3938 37.3061 20.3906 36.0372 22.0232L36.036 22.0244Z"
            fill={color}/>
        <path
            d="M17.0155 10.4096C14.7827 10.4095 12.6102 11.1222 10.8244 12.4404C9.0386 13.7586 7.73597 15.6112 7.11222 17.7199C5.36598 18.3922 3.9134 19.6434 3.00556 21.2573C2.09771 22.8712 1.79163 24.7463 2.14023 26.5586C2.48883 28.3709 3.4702 30.0065 4.91472 31.1826C6.35924 32.3588 8.17613 33.0016 10.0514 33H28.0968C30.0234 32.9828 31.8652 32.2179 33.2214 30.8718C34.5776 29.5257 35.3385 27.7073 35.3385 25.8123C35.3385 23.9172 34.5776 22.0988 33.2214 20.7527C31.8652 19.4066 30.0234 18.6418 28.0968 18.6246H27.1456C26.6888 16.3118 25.4283 14.2273 23.5802 12.7285C21.7321 11.2297 19.4108 10.4099 17.0155 10.4096Z"
            fill="#ffffff"/>
    </SvgWrapper>
}