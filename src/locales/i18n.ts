import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// # 如果需要检测当前浏览器的语言或者从服务器获取配置资源可以安装下面依赖
// $ npm install i18next-http-backend i18next-browser-languagedetector --save
import ZH from './zh.json'
import EN from './en.json'
import JP from './ja.json'

const resources = {
  zh: {
    translation: ZH
  },
  en: {
    translation: EN
  },
  jp: {
    translation: JP
  }
}

i18n.use(initReactI18next).init({
  lng: 'zh',
  resources: resources,
  debug: true,
  interpolation: {
    escapeValue: false
  }
})
export default i18n;