import { isObject } from './types'

export const formatStyles = (styles, theme = 'light') => {
  if (!isObject(styles)) return {}

  // 在需要的时候，进行全局样式管控（如：某几日的全局黑白？？？）
  return styles
}

export const getThemeStyle = (theme = 'light') => Theme[theme]

export const createStyles = (theme, create) => formatStyles((() => {
  const themeStyles = getThemeStyle(theme)
  return create({ theme, themeStyles })
})(), theme)

export const Theme = {
  // 标准 - 亮色
  light: {
    color_primary: '#119aa9',
    color_btn_text_color: '#ffffff',
  },
  // 标准 - 暗色
  dark: {
    color_primary: '#1a1a1a',
    color_btn_text_color: '#ffffff',
  },
  // 悲伤 - 黑白
  sad: {
    color_primary: '#3d3c3c',
    color_btn_text_color: '#ffffff',
  },
  // 喜庆 - 红
  festive: {
    color_primary: '#862424',
    color_btn_text_color: '#ffffff',
  }
}