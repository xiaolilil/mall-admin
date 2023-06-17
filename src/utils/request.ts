import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getToken } from './auth'
import usePinia from '@/store'

const { user } = usePinia()

// 处理  类型“AxiosResponse<any, any>”上不存在属性“errorinfo”。ts(2339)
declare module 'axios' {
  interface AxiosResponse<T = any> {
    resCode: string
    message: string
    // 这里追加你的参数
  }
  export function create(config?: AxiosRequestConfig): AxiosInstance
}

// 创建 axios 实例
const http = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
})

// 请求拦截器
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (user.token !== '') {
      config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
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
    const res: any = response.data

    if (res.code !== 200) {
      ElMessage({
        message: res.message,
        type: 'error',
        duration: 3000,
      })

      // 401:未登录;
      if (res.code === 401) {
        ElMessageBox.confirm(
          '你已被登出，可以取消继续留在该页面，或者重新登录',
          '确定登出',
          {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning',
          },
        ).then(() => {
          // store.dispatch('FedLogOut').then(() => {
          //   location.reload()// 为了重新实例化vue-router对象 避免bug
          // })
        })
      }
      return Promise.reject('error')
    } else {
      return res
    }
  },
  (error) => {
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 3000,
    })
    return Promise.reject(error)
    // return Promise.reject(new Error(msg || 'Error'))
  },
)

// 导出 axios 实例
export default http
