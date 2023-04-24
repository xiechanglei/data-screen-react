import {showLog} from "@/config";

/**
 * 隐藏头部的log但是不去除，用于打印请求参数的时候的过滤
 * @param tag
 * @param title
 */
export const hideHeaderLog = (tag: string, title: string) => {
    return (...args: any) => {
        if (showLog) {
            console.log(
                `%c ${tag} %c ${title}`,
                'color: rgba(0,0,0,0);font-size: 0;',
                'color: rgba(0,0,0,0);font-size: 0;',
                ...args
            )
        }
    }
}
export const log = (tag: string, title: string) => {
    return (...args: any) => {
        if (showLog) {
            console.log(
                `%c ${tag} %c ${title} %c `,
                'background:#41b883 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
                'background:#35495e ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
                'background:transparent',
                ...args
            )
        }
    }
}

export const error = (tag: string, title: string) => {
    return (...args: any) => {
        if (showLog) {
            console.log(
                `%c ${tag} %c ${title} %c `,
                'background:#ff0000 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
                'background:#35495e ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
                'background:transparent',
                ...args
            )
        }
    }

}
