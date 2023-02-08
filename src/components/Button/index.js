import { TouchableOpacity, Text } from 'react-native'
import p from 'prop-types'

import createComponentStyles from './styles'
import withTheme from '../withTheme'

const Button = (props) => {
  const { title, onPress, styles } = props

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.btn}
      onPress={onPress}
    >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  title: p.string.isRequired,
  onPress: p.func.isRequired,
}

export default withTheme(Button, createComponentStyles)
