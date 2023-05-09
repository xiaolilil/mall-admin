import { defineStore } from 'pinia'
import { store } from '../index'

type State = {
  visitedViews: any[]
}

const useTagsViewStore = defineStore({
  id: 'tagsView',
  state: (): State => {
    return {
      visitedViews: [],
    }
  },
  getters: {},
  actions: {
    ADD_VISITED_VIEW(view: any) {
      /* 
      Avoid app logic that relies on enumerating keys on a component instance. 
      The keys will be empty in production mode to avoid performance overhead.

      避免应用程序逻辑依赖于在组件实例上枚举键。在生产模式下，键值将为空，以避免性能开销
      报错原因 可能是深拷贝 js对象序列化（json字符串） 导致route 的一些值 序列化错误 
      比如route里面的函数 与undefined丢失；
      */
      // 避免上面的警告
      const newView = JSON.parse(JSON.stringify(view))

      // 如果已经存在 则 返回
      if (this.visitedViews.some((i: any) => i.path == newView.path)) return

      // 没有就push进去
      this.visitedViews.push(
        Object.assign({}, newView, {
          title: newView.meta.title || 'no-name',
        }),
      )
    },
    DEL_VISITED_VIEW(view: any) {
      return new Promise((res, rej) => {
        for (const [i, v] of this.visitedViews.entries()) {
          if (v.path === view.path) {
            this.visitedViews.splice(i, 1)
            break
          }
        }
        this.visitedViews = this.visitedViews.filter(
          (item: any) => item.apth !== view.path,
        )
        res({
          visitedViews: [...this.visitedViews],
        })
      })
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

export default useTagsViewStore
export function useTagsViewStores() {
  return useTagsViewStore(store)
}
