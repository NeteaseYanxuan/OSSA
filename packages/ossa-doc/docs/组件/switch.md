---
sidebar_position: 27
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/switch/demo/index'
---

# Switch 开关

## 介绍
开关

## 用法
### 基础
```jsx
<OsSwitch checked={v1} onChange={setV1}></OsSwitch>

<OsSwitch checked={v2} onChange={setV2}></OsSwitch>
```
### 自定义颜色
```jsx
<OsSwitch
  checked={v3}
  onChange={setV3}
  onColor='rgb(221, 26, 33)'
></OsSwitch>

<OsSwitch
  checked={v4}
  onChange={setV4}
  offColor='#dfdfdf'
></OsSwitch>
```
### 禁用
```jsx
<OsSwitch checked={v6} onChange={setV6} disabled></OsSwitch>

<OsSwitch checked={v7} onChange={setV7} disabled></OsSwitch>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|isChecked|是否打开，`isChecked`属性在未来版本中将被删除，请使用`checked`代替|boolean|false|
|checked|是否打开|boolean|false|
|onColor|打开时的背景色，可选|string|-|
|offColor|关闭时的背景色，可选|string|-|
|nodeColor|滑块颜色，可选|string|-|
|isDisabled|禁用，可选，`isDisabled`属性在未来版本中将被删除，请使用`disable`代替|boolean|false|
|disabled|禁用，可选|boolean|false|


### 方法
|函数名|说明|参数|
|------|------|------|
|onChange|点击时触发，必选|开关新值|

