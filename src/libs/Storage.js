import AsyncStorage from '@react-native-async-storage/async-storage'

export default class Storage {
  static AS_THEME_KEY = 'THEME'

  static async init() {
    const currentKvs = await AsyncStorage.multiGet([
      Storage.AS_THEME_KEY
    ])
    const current = {}
    currentKvs?.forEach(item => {
      current[item[0]] = item[1]
    })

    const initTheme = [Storage.AS_THEME_KEY, current[Storage.AS_THEME_KEY] || 'light'] // 见 src/utils/style => Theme

    try {
      await AsyncStorage.multiSet([
        initTheme
      ])
    } catch (e) {
    }
  }

  static async setItem(key, value) {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      // TODO 统一异常处理？
    }
  }

  static async getItem(key)  {
    try {
      return await AsyncStorage.getItem(key)
    } catch (e) {
    }
  }

  // TODO 待实现 remove 等
}