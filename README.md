# React Native & Expo Examples

## 1. 项目初始化 & 启动 & 预览 & 热更

### 初始化

```shell
# 初始化项目
npx create-expo-app your-project
# 启动项目
yarn start
```

### 预览

* 手机下载【expo】，扫描上面命令生成的二维码即可在物理设备上预览
* 也可以直接通过Simulator预览（见命令行提示）

### 热更与重载

* 更新代码后自动热更
* 也可以在命令行按【r】重载整个应用

## 2. 支持暗黑模式 & 自定义主题

### 配置

/app.json属性改动

```json
{
  "expo": {
    "...": "...",
    "userInterfaceStyle": "automatic",
    "....": "...."
  }
}
```

使用：见 `src/components/Button`

## 3. 震动反馈

### 依赖安装

```shell
expo install expo-haptics
```

### 简单使用

见 App.js，文档：[https://docs.expo.dev/versions/v47.0.0/sdk/haptics/](https://docs.expo.dev/versions/v47.0.0/sdk/haptics/)

```jsx
import * as Haptics from 'expo-haptics'

export default () => {
  // ...
  
  return (
    <Button
      title="震动反馈 - 成功"
      onPress={() => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
      }}
    />
  )
}
```

## 4. 多语言支持

### 依赖安装

```shell
expo install expo-haptics i18n-js
```

### 简单使用

见 App.js src/utils/translations.js src/libs/Localization.js

```jsx
// 切换系统语言试试？
i18n.t('haptics_success')
```
