import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
// import { ElMessage, ElMessageBox } from 'element-plus'
// import { getToken, getUsername } from './cookies'

// 处理  类型“AxiosResponse<any, any>”上不存在属性“errorinfo”。ts(2339) 
declare module 'axios' {
  interface AxiosResponse<T = any> {
    resCode: string
    message: string
    // 这里追加你的参数
  }
  export function create(config?: AxiosRequestConfig): AxiosInstance
}
// import.meta.env.VITE_APP_API
// 创建 axios 实例
const http = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
})

// 请求拦截器
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!config.headers) {
      throw new Error(
        `Expected 'config' and 'config.headers' not to be undefined`,
      )
    }

    // config.headers['Token'] = getToken()
    // config.headers['Username'] = getUsername()

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse) => {
    const data = response.data
    // 不为0，即接口异常时
    if (data.resCode !== 0) {
      // Message.error(data.message)
      return Promise.reject(data)
    } else {
      return data // return Promise.resolve(data);
    }
  },
  (error) => {
    // const { code, msg } = error.response.data
    // if (code === 'A0230') {
    // token 过期
    // LocalCache.deleteCache('pet-token') // 清除浏览器全部缓存
    // window.location.href = '/' // 跳转登录页
    // ElMessageBox.alert('当前页面已失效，请重新登录', '提示', {})
    // } else {
    // ElMessage({
    //   message: msg || '系统出错',
    //   type: 'error',
    // })
    // }
    return Promise.reject(error)
    // return Promise.reject(new Error(msg || 'Error'))
  },
)

// 导出 axios 实例
export default http
