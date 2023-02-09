import { I18n } from 'i18n-js'
import { getLocales } from 'expo-localization'

import translations from '../utils/translations'

class Localization {
  static getInstance() {
    if (!this.instance) {
      this.instance = new I18n(translations)
      const currentSystemLanguageCode = getLocales()[0].languageCode
      const currentSystemLanguageTag = getLocales()[0].languageTag
      if (currentSystemLanguageTag.startsWith('zh-Hant')) {
        // 繁体
        this.instance.locale = 'zh_hant'
      } else {
        this.instance.locale = Object.keys(translations).includes(currentSystemLanguageCode) ? currentSystemLanguageCode : 'zh' // 默认中文展示
      }
    }

    return this.instance
  }
}

export const i18n = Localization.getInstance()
