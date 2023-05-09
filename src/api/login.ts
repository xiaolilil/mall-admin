import http from '@/utils/request'
import {  Tlogin } from '@/types/api'

/**
 * @description:
 */
export function getInfoApi() {
  return http.request({
    url: '/admin/info',
  })
}

/**
 * @description: 登录
 * @param {*} data {username, password}
 */
export function loginApi(data: Tlogin) {
  return http.request({
    method: 'post',
    url: '/admin/login/',
    data,
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
