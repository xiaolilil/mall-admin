import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from '@/i18n'
import { setupRouter } from './router'
import Particles from 'particles.vue3'
import 'virtual:windi.css'
import 'normalize.css'
import '@/style/global.scss'

const app = createApp(App)
setupRouter(app)

app.use(i18n)
app.use(Particles)
app.mount('#app')
