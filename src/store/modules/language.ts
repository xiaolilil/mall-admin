import { defineStore } from 'pinia'
import localCache from '@/utils/cache'
import { store } from '../index'

type State = {
  language: string
}

const useLanguageStore = defineStore({
  id: 'language',
  state: (): State => {
    return {
      language: localCache.getCache('language', false) || 'zhCn',
    }
  },
  getters: {},
  actions: {
    CHANGE_LANGUAGE(language: string) {
      this.language = language
      localCache.setCache('language', language, false)
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

export default useLanguageStore
export function useLanguageStores() {
  return useLanguageStore(store)
}
