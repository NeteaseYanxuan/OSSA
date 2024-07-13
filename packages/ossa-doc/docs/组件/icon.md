---
sidebar_position: 13
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/icon/demo/index'
---

# Icon 图标

## 介绍
常用图表的集合。

:::tip
按需引入时，如果使用其他包含`Icon`的组件，需要手动引入`Icon`的样式文件

eg：当使用带icon的`Button`时，需要手动引入`Icon`的样式文件

import 'ossaui/dist/style/components/icon.scss'
:::

## 用法
### 基础
```jsx
<OsIcon type='richscan'></OsIcon>
<OsIcon type='inform'></OsIcon>
<OsIcon type='phone'></OsIcon>
<OsIcon type='search'></OsIcon>
<OsIcon type='return'></OsIcon>
<OsIcon type='share'></OsIcon>
<OsIcon type='share-circle' size={62}></OsIcon>
<OsIcon type='close'></OsIcon>
<OsIcon type='compile'></OsIcon>
<OsIcon type='delete'></OsIcon>
<OsIcon type='collect'></OsIcon>
<OsIcon type='like'></OsIcon>
<OsIcon type='upload-delete'></OsIcon>
<OsIcon type='grade' size={48}></OsIcon>
<OsIcon type='choose' size={36}></OsIcon>
<OsIcon type='record'></OsIcon>
<OsIcon type='check' size={36}></OsIcon>
<OsIcon type='check-irrevocable' size={36}></OsIcon>
<OsIcon type='arrows' size={28}></OsIcon>
<OsIcon type='search-little' size={28}></OsIcon>
<OsIcon type='detail-home'></OsIcon>
<OsIcon type='detail-cart'></OsIcon>
<OsIcon
  type='close-native'
  customStyle={{ background: "pink" }}
  size={64}
></OsIcon>
<OsIcon type='pull-down-big'></OsIcon>
```
### Tabbar
```jsx
<OsIcon type='home'></OsIcon>
<OsIcon type='subject'></OsIcon>
<OsIcon type='classify'></OsIcon>
<OsIcon type='cart'></OsIcon>
<OsIcon type='user'></OsIcon>
<OsIcon type='shopping-mall'></OsIcon>
<OsIcon type='my-group-buying'></OsIcon>
```
### disabled
```jsx
<OsIcon type='choose-disable' size={36}></OsIcon>
<OsIcon type='check-disable' size={36}></OsIcon>
<OsIcon type='add-disable' size={18}></OsIcon>
<OsIcon type='subtract-disable' size={18}></OsIcon>
<OsIcon type='arrows-disable' size={28}></OsIcon>
```
### active
```jsx
<OsIcon type='collect-selected'></OsIcon>
<OsIcon type='choose-selected'></OsIcon>
<OsIcon type='close-native-pressed' size={64}></OsIcon>
<OsIcon type='grade-selected' size={48}></OsIcon>
<OsIcon type='check-selected' size={36}></OsIcon>
<OsIcon type='home-pressed'></OsIcon>
<OsIcon type='subject-pressed'></OsIcon>
<OsIcon type='cart-pressed'></OsIcon>
<OsIcon type='user-pressed'></OsIcon>
<OsIcon type='return-pressed'></OsIcon>
<OsIcon type='share-pressed'></OsIcon>
<OsIcon type='close-pressed'></OsIcon>
<OsIcon type='compile-pressed'></OsIcon>
<OsIcon type='delete-pressed'></OsIcon>
<OsIcon type='like-selected'></OsIcon>
<OsIcon type='classify-pressed'></OsIcon>
<OsIcon type='share-circle-pressed' size={62}></OsIcon>
<OsIcon type='detail-home-pressed'></OsIcon>
<OsIcon type='detail-cart-pressed'></OsIcon>
<OsIcon type='my-group-buying-select'></OsIcon>
<OsIcon type='shopping-mall-select'></OsIcon>
```
### 颜色固定
```jsx
<OsIcon type='delete-input' size={28}></OsIcon>
<OsIcon type='add' size={28}></OsIcon>
<OsIcon type='add-disable' size={28}></OsIcon>
<OsIcon type='avatar' size={62}></OsIcon>
<OsIcon type='invisible'></OsIcon>
<OsIcon type='service'></OsIcon>
<OsIcon type='visible'></OsIcon>
<OsIcon type='subtract-disable' size={18}></OsIcon>
<OsIcon type='subtract' size={18}></OsIcon>
<OsIcon type='voice' size={60}></OsIcon>
<OsIcon type='voice-close' size={60}></OsIcon>
<OsIcon type='photo' size={48}></OsIcon>
<OsIcon type='sort' size={16}></OsIcon>
<OsIcon type='sort-high' size={16}></OsIcon>
<OsIcon type='sort-low' size={16}></OsIcon>
<OsIcon type='subject'></OsIcon>
<OsIcon type='close-h5' size={62}></OsIcon>
<OsIcon size={152} type='add-photo'></OsIcon>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|type|内置icon名称/类型，必选|string|-|
|size|尺寸，可选|number|40|
|color|图标颜色，可选|string|#7F7F7F|
|customStyle|自定义样式，可选|object|-|
|className|自定义类名，可选|string|-|


### 方法
|函数名|说明|参数|
|------|------|------|
|onClick|点击时触发|event对象|

