import { defineStore } from 'pinia'
import { IUserState } from '../types'
import { store } from '../index'
// import { Tlogin } from '@/types/api'
import { loginApi, logoutApi, getInfoApi } from '@/api/login'
import { AxiosResponse } from 'axios'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { ElMessage } from 'element-plus/es/components/index.js'

// import { useMainrStores } from './main'

const useUserStore = defineStore({
  id: 'user',
  state: (): IUserState => {
    return {
      token: '',
      username: '',
      menus: [],
      roles: [],
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
            const { token, tokenHead } = res.data
            this.token = tokenHead + token
            setToken(this.token)
            this.GetUserInfo()
            resolve(res)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },

    /**
     * @description: 获取用户信息
     */
    GetUserInfo() {
      getInfoApi().then((res: AxiosResponse) => {
        const { menus, username, roles } = res.data
        this.menus = menus
        // 验证返回的roles是否是一个非空数组
        if (roles && roles.length > 0) {
          this.username = username
          this.roles = roles
        } else {
          console.log('getInfo: roles must be a non-null array !')
        }
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
            removeToken()
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
