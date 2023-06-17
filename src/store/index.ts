import type { App } from 'vue'
import { createPinia } from 'pinia'
import { useUserStores } from './modules/user'
import { useLanguageStores } from './modules/language'
import { useTagsViewStores } from './modules/tagsView'
import { useConfigStores } from './modules/config'
import { useCommonStores } from './modules/common'

// import piniaPersist from 'pinia-plugin-persist'

const store = createPinia()
export function setupPinia(app: App<Element>) {
  // store.use(piniaPersist)
  app.use(store)
}

const usePinia = () => ({
  user: useUserStores(),
  lang: useLanguageStores(),
  tagsView: useTagsViewStores(),
  config: useConfigStores(),
  common: useCommonStores(),
})
export default usePinia

export { store }
