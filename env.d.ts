// 解决 找不到模块“./App.vue”或其相应的类型声明 报错
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const vueComponent: DefineComponent<{}, {}, any>
  export default vueComponent
}
declare module 'particles.vue3'
