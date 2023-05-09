import { useI18n } from 'vue-i18n'
// 导入 Element Plus 语言包
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'

export function useLanguage() {
  const { locale } = useI18n()
  const v = ref('')
  // 切换语言
  const changeLanguage = (val: string) => {
    locale.value = val;
    v.value = val;
  }

  const language = computed(() => v.value)
  const LANG: any = {
    zhCn,
    en,
  }
  // 当前语言
  const currLocale = computed(() => LANG[language.value])

  return {
    changeLanguage,
    currLocale,
    language,
  }
}
