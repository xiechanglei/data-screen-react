import {HslColor} from "@/util/xie-color/HslColor";

export class RgbColor {
    /**
     * 颜色的红色分量，0-255
     */
    red: number = 255;
    /**
     * 颜色的绿色分量，0-255
     */
    green: number = 255;
    /**
     * 颜色的蓝色分量，0-255
     */
    blue: number = 255;
    /**
     * 颜色的透明度，0-1
     */
    alpha: number = 1;

    constructor(value: string = "") {
        if (value.startsWith('#')) {
            this.parseColorHex(value);
        } else if (value.startsWith('rgb') || value.startsWith('rgba')) {
            this.parseColorRgb(value)
        }
    }

    /**
     * 解析16进制颜色值
     */
    parseColorHex(value: string) {
        value = value.replace('#', '');
        if (value.length === 3 || value.length === 4) {
            value = value.split('').map((item) => item.repeat(2)).join('');
        }
        this.red = parseInt(value.slice(0, 2), 16);
        this.green = parseInt(value.slice(2, 4), 16);
        this.blue = parseInt(value.slice(4, 6), 16);
        this.alpha = value.length === 8 ? parseInt(value.slice(6, 8), 16) / 255 : 1;
    }

    /**
     * 解析rgb颜色值
     */
    parseColorRgb(value: string) {
        value = value.replace('rgb(', '').replace('rgba(', '').replace(')', '');
        let [red, green, blue, alpha] = value.split(',').map((item) => parseInt(item));
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha ?? 1
    }


    /**
     * 转换成16进制颜色值
     */
    toHexString() {
        let red = Math.round(this.red).toString(16).padStart(2, '0');
        let green = Math.round(this.green).toString(16).padStart(2, '0');
        let blue = Math.round(this.blue).toString(16).padStart(2, '0');
        if (this.alpha === 1) {
            return `#${red}${green}${blue}`.toUpperCase();
        }
        let alpha = Math.round(this.alpha * 255).toString(16).padStart(2, '0');
        return `#${red}${green}${blue}${alpha}`.toUpperCase();
    }

    /**
     * 转换成rgb颜色值
     */
    toRgbString() {
        if (this.alpha === 1) {
            return `rgb(${this.red},${this.green},${this.blue})`;
        }
        return `rgba(${this.red},${this.green},${this.blue},${this.alpha})`;
    }

    /**
     * 转换成hsl颜色值
     */
    toHslColor() {
        let red = this.red / 255;
        let green = this.green / 255;
        let blue = this.blue / 255;
        let max = Math.max(red, green, blue);
        let min = Math.min(red, green, blue);
        let hue = 0;
        let saturation;
        let lightness = (max + min) / 2;
        if (max === min) {
            hue = saturation = 0;
        } else {
            let d = max - min;
            saturation = lightness > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case red:
                    hue = (green - blue) / d + (green < blue ? 6 : 0);
                    break;
                case green:
                    hue = (blue - red) / d + 2;
                    break;
                case blue:
                    hue = (red - green) / d + 4;
                    break;
            }
            hue /= 6;
        }
        let hc = new HslColor();
        Object.assign(hc, {
            hue: hue * 360,
            saturation:saturation * 100,
            lightness: lightness * 100,
            alpha: this.alpha
        });
        return hc;
    }

}