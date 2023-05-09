import { defineStore } from 'pinia'
import { IUserState, UserAction } from '../types'
import { store } from '../index'
import { IUser } from '@/types/api'
import { Login, Logout, Register } from '@/api/login'
import { AxiosResponse } from 'axios'
import {
  setToken,
  setUsername,
  getUsername,
  removeToken,
  removeUsername,
} from '@/utils/cookies'

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
    [UserAction.LOGIN](loginForm: IUser) {
      return new Promise((resolve, reject) => {
        Login(loginForm)
          .then((res: AxiosResponse) => {
            const { token, username } = res.data
            this.token = token
            this.username = username
            setToken(token)
            setUsername(username)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    /**
     * @description: 注册
     */
    [UserAction.REGISTER](registerForm: IUser) {
      return new Promise((resolve, reject) => {
        Register(registerForm)
          .then((res: AxiosResponse) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    /**
     * @description: 退出
     */
    [UserAction.LOGOUT]() {
      return new Promise((resolve, reject) => {
        this.token = ''
        this.username = ''
        removeToken()
        removeUsername()
        resolve(1)
        // Logout()
        //   .then((res) => {
        //     this.token = ''
        //     this.username = ''
        //     removeToken()
        //     removeUsername()
        //     resolve(res)
        //   })
        //   .catch((err) => {
        //     reject(err)
        //   })
      })
    },
    SET_COLLAPSE(state: boolean) {
      this.isCollapse = state
    },
    SET_CURRROUTE(route: string) {
      this.currRoute = route
    },
  },
  persist: {
    enabled: true, // 这个配置代表存储生效，而且是整个store都存储
    strategies: [
      {
        storage: sessionStorage,
      },
    ],
  },
})

export default useUserStore
export function useUserStores() {
  return useUserStore(store)
}
