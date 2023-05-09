import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'
// 加 type 告诉别人这里引入的是一个类型，不是函数 接口等等
import type { RouteRecordRaw } from 'vue-router'
// import Layout from '@/layout/app-layout.vue'
// import { $t } from '@/utils/local'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
    meta: { title: '登录', hidden: true },
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录', hidden: true },
    component: () => import('@/views/login/index.vue'),
  },
  // {
  //   path: '/home',
  //   name: 'Home',

  //   meta: { title: 'common.dashboard', icon: 'icon-kongzhitai_', id: 1 },
  //   component: Layout,
  //   redirect: '/home/dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       name: 'Dashboard',
  //       meta: {
  //         title: 'common.home',
  //         icon: 'icon-shouye1',
  //         redirect: 'noRedirect',
  //         id: 2,
  //         affix: true,
  //       },
  //       component: () => import('@/views/dashboard/index.vue'),
  //     },
  //   ],
  // },

]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  scrollBehavior() {
    return { left: 0, top: 0 }
  },
})

// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router)
}
export default router
