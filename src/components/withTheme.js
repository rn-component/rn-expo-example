import useTheme from '../hooks/useTheme'
import { createStyles } from '../utils/style'

export default (Component, createComponentStyles) => (props) => {
  const theme = useTheme()
  const styles = createStyles(theme, createComponentStyles)

  return <Component {...props} styles={styles} />
}
