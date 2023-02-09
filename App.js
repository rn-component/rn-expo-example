import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import * as Haptics from 'expo-haptics'

import Button from './src/components/Button'
import { i18n } from './src/libs/Localization'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Expo!</Text>
      <Button
        title="Test"
        style={{
          marginBottom: 12
        }}
        onPress={() => { console.log('111') }}
      />
      <Button
        title={i18n.t('haptics_success')}
        style={{
          marginBottom: 12
        }}
        onPress={() => {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
        }}
      />
      <Button
        title="震动反馈 - 失败"
        style={{
          marginBottom: 12
        }}
        onPress={() => {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
        }}
      />
      <Button
        title="震动反馈 - 警告"
        onPress={() => {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  text: {
    marginBottom: 12,
  }
});
