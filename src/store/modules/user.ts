import { defineStore } from 'pinia'
import { IUserState } from '../types'
import { store } from '../index'
// import { Tlogin } from '@/types/api'
import { loginApi, logoutApi } from '@/api/login'
import { AxiosResponse } from 'axios'

// import { useMainrStores } from './main'

const useUserStore = defineStore({
  id: 'user',
  state: (): IUserState => {
    return {
      token: '',
      username: '',
      isCollapse: false,
      currRoute: '/home/console',
    }
  },
  getters: {},
  actions: {
    /**
     * @description: 登录
     */
    LOGIN(loginForm: any) {
      return new Promise((resolve, reject) => {
        loginApi(loginForm)
          .then((res: AxiosResponse) => {
            // const { token, username } = res.data
            // this.token = token
            // this.username = username
            // setToken(token)
            // setUsername(username)
            resolve(res)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },

    /**
     * @description: 退出
     */
    logout() {
      return new Promise((resolve, reject) => {
        logoutApi()
          .then((res) => {
            this.token = ''
            this.username = ''
            // removeToken()
            // removeUsername()
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    SET_COLLAPSE(state: boolean) {
      this.isCollapse = state
    },
    SET_CURRROUTE(route: string) {
      this.currRoute = route
    },
  },
  // persist: {
  //   enabled: true, // 这个配置代表存储生效，而且是整个store都存储
  //   strategies: [
  //     {
  //       storage: sessionStorage,
  //     },
  //   ],
  // },
})

export default useUserStore
export function useUserStores() {
  return useUserStore(store)
}
