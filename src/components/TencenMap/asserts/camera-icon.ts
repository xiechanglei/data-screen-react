import {fourthColor} from "@/config"


const svgContent:string = `<svg width="78" height="48" viewBox="0 0 78 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29.4729 15L77.4619 29.5315L18.0469 46.9927L15 45.4692L29.4729 15Z"
        fill="url(#paint0_linear_141_927)" />
    <circle cx="16.7581" cy="16.7581" r="16.7581" fill="${fourthColor}" />
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M27.1738 33.5159C24.217 35.5648 20.6278 36.7653 16.7581 36.7653C12.8889 36.7653 9.30002 35.5651 6.34348 33.5166L15.0999 46.5099C15.8926 47.6863 17.6241 47.6863 18.4169 46.5099L27.1738 33.5159Z"
        fill="${fourthColor}" />
    <circle cx="16.758" cy="16.7581" r="10.6642" fill="#001444" />
    <circle cx="16.7579" cy="16.7581" r="4.57039" fill="black" />
    <ellipse cx="13.1375" cy="10.1624" rx="2.28519" ry="1.08239"
        transform="rotate(-35.8744 13.1375 10.1624)" fill="white" />
    <circle cx="18.2814" cy="18.2815" r="1.52346" fill="white" />
    <defs>
        <linearGradient id="paint0_linear_141_927" x1="44.927" y1="20.6251" x2="16.1498"
            y2="43.2669" gradientUnits="userSpaceOnUse">
            <stop stop-opacity="0" />
            <stop offset="1" stop-opacity="0.54" />
        </linearGradient>
    </defs>
</svg>`
export const cameraBase64 = `data:image/svg+xml;base64,${btoa(svgContent)}`

let array = svgContent.split('').map((char) => char.charCodeAt(0))
const blob = new Blob([new Uint8Array(array)], { type: "image/svg+xml" })
export const cameraUrl = URL.createObjectURL(blob)
