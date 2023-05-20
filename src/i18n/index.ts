import { createI18n } from 'vue-i18n'
import localCache from '@/utils/cache'

// element-plus 的ui框架国际化语言配置
// import zhCn from 'element-plus/lib/locale/lang/zh-cn'
// import en from 'element-plus/lib/locale/lang/en'
// 自定义的语言配置
import zhCn from './lang/zh-cn'
import en from './lang/en'
// 按照每个页面的语言配置
// import loginZhcn from './pages/login/zh-cn'
// import loginEn from './pages/login/en'

// 定义语言国际化内容 zh-cn en
// const messages = {
//   'zh-cn': {
//     ...zhCn,
//   },
//   'en': {
//     ...en,
//   },
// }

if (!localCache.getCache('language', false)) {
  localCache.setCache('language', 'zhCn', false)
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true, // 全局模式，可以直接使用 $t
  locale: localCache.getCache('language', false) || 'zhCn',
  // silentTranslationWarn:
  // silentFallbackWarn: true,
  // fallbackWarn: false,
  // locale: themeConfig.value.globalI18n, // 采用全局参数配置初始化语言 项目中有`zh-cn`、`en`两种
  // fallbackLocale: zhCn.name,
  messages: {
    zhCn,
    en,
  },
})
