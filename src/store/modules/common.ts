import { defineStore } from 'pinia'
import { IUserState } from '../types'
import { store } from '../index'
import { UserAction } from '../types'
import { IUser } from '@/types/api'
import localCache from '@/utils/cache'

const useCommonStore = defineStore({
  id: 'common',
  state: (): any => {
    return {
      // table 数据加载标记
      table_loadData_flag: true,
      // upload token
      upload_token: '',
    }
  },
  getters: {},
  actions: {
    SET_TABL_DATA_FLAG() {
      this.table_loadData_flag = !this.table_loadData_flag //取反
    },
    SET_UPLOAD_TOKEN(value: any) {
      this.upload_token = value
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

export default useCommonStore
export function useCommonStores() {
  return useCommonStore(store)
}
