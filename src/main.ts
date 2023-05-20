import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from '@/i18n'
import { setupRouter } from './router'
import { setupPinia } from './store'
import Particles from 'particles.vue3'
import 'virtual:windi.css'
import 'normalize.css'
import '@/style/global.scss'
import 'virtual:svg-icons-register'

import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-notification.css'
import 'element-plus/theme-chalk/el-message-box.css'

const app = createApp(App)
setupRouter(app)
setupPinia(app)
app.use(i18n)
app.use(Particles)
app.mount('#app')
