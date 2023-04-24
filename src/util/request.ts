import {log, error, hideHeaderLog} from "@/util/log.util";
import {showLog} from "@/config";
import axios, {AxiosRequestConfig} from "axios";
// 自定义axios实例
export const axiosClient = axios.create({
    baseURL: "http://10.135.10.30/api/",
    headers: {"X-Custom-Header": "foobar"}
});

/**
 * 发送请求之前进行的处理
 */
const beforeRequest = (config: any) => {
    let adminToken = document.cookie.split(";").find((item) => item.startsWith("Admin-Token"))
    config.headers["Authorization"] = `Bearer ${adminToken ? adminToken.split("=")[1] : "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjo2LCJ1c2VyX2tleSI6IjY4ZmUxZDY5LTFiZjgtNDYyNS04YzM2LTdkNGI3ZjUwOGZmZCIsInVzZXJuYW1lIjoiaGQifQ.cXIIHZWCg4D6_Kt9o_JsQgjypOydUE8ZxilDd-3DbjSvTbaiDjA18m92IFesqXKY5-mxXv7aRy6gdsSyn-epwg"}`
    config.headers["entCode"] = "hd01"
    config.requestTime = Date.now()
    return config
}

/**
 * 发送请求之前出现的错误
 */
const beforeRequestError = (error: any) => Promise.reject(error)

/**
 * 响应之后进行的处理,目前后端的接口请求格式是将状态码放在response中的code中，需要在这里统一
 */
const afterResponse = (response: any) => {
    if (showLog) {
        printAjax(response)
    }
    const {code, data, msg} = response.data
    if (code === 200) {
        return data
    }
    // 未登录,TODO：跳转到登录页面
    if (code === 401) {
    }
    // 服务器错误 TODO 处理
    if (code === 500) {
    }
    return Promise.reject(msg)
}

const printAjax = (response: any) => {
    const {code} = response.data
    const [requestUri, queryParam] = response.config.url.split("?")
    const method = response.config.method
    const title = `${method.toUpperCase()} ${requestUri}`
    let requestParam = response.config.params ?? {}
    if (method === "get" && queryParam !== undefined) {
        requestParam = queryParam.split("&").reduce((acc: any, item: any) => {
            const [key, value] = item.split("=")
            acc[key] = value
            return acc
        }, {})
    }
    const printer = code === 200 ? log(code, title) : error(code, title)
    const infoPrinter = hideHeaderLog(code, title)
    printer()
    infoPrinter("请求耗时", `${Date.now() - response.config.requestTime}ms`)
    infoPrinter("请求参数", requestParam)
    infoPrinter("请求结果", response.data)
}

/**
 * 响应之后出现的错误
 */
const responseError = (error: any) => Promise.reject(error)

// 添加请求拦截器
axiosClient.interceptors.request.use(beforeRequest, beforeRequestError)

// 添加响应拦截器
axiosClient.interceptors.response.use(afterResponse, responseError)
