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
