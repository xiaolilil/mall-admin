import http from '@/utils/request'
import { Tlogin } from '@/types/api'

/**
 * @description: 登录
 * @param {*} data {username, password}
 */
export function loginApi(data: Tlogin) {
  return http.request({
    method: 'post',
    url: '/admin/login',
    data,
  })
}

/**
 * @description: 获取当前用户信息
 * @return {*} 菜单列表 用户名
 */
export function getInfoApi() {
  return http.request({
    url: '/admin/info',
    method: 'get',
  })
}

/**
 * @description: 退出
 */
export function logoutApi() {
  return http.request({
    method: 'post',
    url: '/admin/logout/',
  })
}
