import { useEffect, useState } from 'react'
import { useColorScheme } from 'react-native'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'

import Storage from '../libs/Storage'

const useTheme = () => {
  const colorSchema = useColorScheme() // dark/light 变化会触发重新渲染
  const { getItem } = useAsyncStorage(Storage.AS_THEME_KEY)
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    (async () => {
      const res = await getItem()
      setTheme(res)
    })()
  }, [])

  // 优先暗黑模式
  if (colorSchema === 'dark') return colorSchema

  return theme || colorSchema
}

export default useTheme
