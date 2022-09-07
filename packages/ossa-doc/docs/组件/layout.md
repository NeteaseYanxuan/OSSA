---
sidebar_position: 16
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/layout/demo/index'
---

# Layout 布局

## 介绍
// TODO

## 用法
### 基础布局
```jsx
<OsRow>
  <OsCol span='24'>
    <View className='col-content col-content-light'>span:24</View>
  </OsCol>
</OsRow>
<OsCol span='24'>
  <View className='col-content col-content-light'>span:24</View>
</OsCol>
<OsRow>
  <OsCol span='12'>
    <View className='col-content col-content-light'>span:12</View>
  </OsCol>
  <OsCol span='12'>
    <View className='col-content'>span:12</View>
  </OsCol>
</OsRow>
<OsCol span='12'>
  <View className='col-content col-content-light'>span:12</View>
</OsCol>
<OsCol span='12'>
  <View className='col-content'>span:12</View>
</OsCol>
<OsRow>
  <OsCol span='8'>
    <View className='col-content col-content-light'>span:8</View>
  </OsCol>
  <OsCol span='8'>
    <View className='col-content'>span:8</View>
  </OsCol>
  <OsCol span='8'>
    <View className='col-content col-content-light'>span:8</View>
  </OsCol>
</OsRow>
<OsCol span='8'>
  <View className='col-content col-content-light'>span:8</View>
</OsCol>
<OsCol span='8'>
  <View className='col-content'>span:8</View>
</OsCol>
<OsCol span='8'>
  <View className='col-content col-content-light'>span:8</View>
</OsCol>
<OsRow>
  <OsCol span='6'>
    <View className='col-content col-content-light'>span:6</View>
  </OsCol>
  <OsCol span='6'>
    <View className='col-content'>span:6</View>
  </OsCol>
  <OsCol span='6'>
    <View className='col-content col-content-light'>span:6</View>
  </OsCol>
  <OsCol span='6'>
    <View className='col-content'>span:6</View>
  </OsCol>
</OsRow>
<OsCol span='6'>
  <View className='col-content col-content-light'>span:6</View>
</OsCol>
<OsCol span='6'>
  <View className='col-content'>span:6</View>
</OsCol>
<OsCol span='6'>
  <View className='col-content col-content-light'>span:6</View>
</OsCol>
<OsCol span='6'>
  <View className='col-content'>span:6</View>
</OsCol>
```
### 分栏间隔
```jsx
<OsRow gutter='10'>
  <OsCol span='8'>
    <View className='col-content col-content-light'>span:8</View>
  </OsCol>
  <OsCol span='8'>
    <View className='col-content'>span:8</View>
  </OsCol>
  <OsCol span='8'>
    <View className='col-content col-content-light'>span:8</View>
  </OsCol>
</OsRow>
<OsCol span='8'>
  <View className='col-content col-content-light'>span:8</View>
</OsCol>
<OsCol span='8'>
  <View className='col-content'>span:8</View>
</OsCol>
<OsCol span='8'>
  <View className='col-content col-content-light'>span:8</View>
</OsCol>
```
### Flex布局
```jsx
<OsRow type='flex' wrap='nowrap'>
  <OsCol span='6'>
    <View className='col-content col-content-light'>span:6</View>
  </OsCol>
  <OsCol span='6'>
    <View className='col-content'>span:6</View>
  </OsCol>
  <OsCol span='6'>
    <View className='col-content col-content-light'>span:6</View>
  </OsCol>
</OsRow>
<OsCol span='6'>
  <View className='col-content col-content-light'>span:6</View>
</OsCol>
<OsCol span='6'>
  <View className='col-content'>span:6</View>
</OsCol>
<OsCol span='6'>
  <View className='col-content col-content-light'>span:6</View>
</OsCol>
<OsRow type='flex' justify='center'>
  <OsCol span='6'>
    <View className='col-content col-content-light'>span:6</View>
  </OsCol>
  <OsCol span='6'>
    <View className='col-content'>span:6</View>
  </OsCol>
  <OsCol span='6'>
    <View className='col-content col-content-light'>span:6</View>
  </OsCol>
</OsRow>
<OsCol span='6'>
  <View className='col-content col-content-light'>span:6</View>
</OsCol>
<OsCol span='6'>
  <View className='col-content'>span:6</View>
</OsCol>
<OsCol span='6'>
  <View className='col-content col-content-light'>span:6</View>
</OsCol>
<OsRow type='flex' justify='end'>
  <OsCol span='6'>
    <View className='col-content col-content-light'>span:6</View>
  </OsCol>
  <OsCol span='6'>
    <View className='col-content'>span:6</View>
  </OsCol>
  <OsCol span='6'>
    <View className='col-content col-content-light'>span:6</View>
  </OsCol>
</OsRow>
<OsCol span='6'>
  <View className='col-content col-content-light'>span:6</View>
</OsCol>
<OsCol span='6'>
  <View className='col-content'>span:6</View>
</OsCol>
<OsCol span='6'>
  <View className='col-content col-content-light'>span:6</View>
</OsCol>
<OsRow type='flex' justify='space-between'>
  <OsCol span='6'>
    <View className='col-content col-content-light'>span:6</View>
  </OsCol>
  <OsCol span='6'>
    <View className='col-content'>span:6</View>
  </OsCol>
  <OsCol span='6'>
    <View className='col-content col-content-light'>span:6</View>
  </OsCol>
</OsRow>
<OsCol span='6'>
  <View className='col-content col-content-light'>span:6</View>
</OsCol>
<OsCol span='6'>
  <View className='col-content'>span:6</View>
</OsCol>
<OsCol span='6'>
  <View className='col-content col-content-light'>span:6</View>
</OsCol>
<OsRow type='flex' justify='space-around'>
  <OsCol span='6'>
    <View className='col-content col-content-light'>span:6</View>
  </OsCol>
  <OsCol span='6'>
    <View className='col-content'>span:6</View>
  </OsCol>
  <OsCol span='6'>
    <View className='col-content col-content-light'>span:6</View>
  </OsCol>
</OsRow>
<OsCol span='6'>
  <View className='col-content col-content-light'>span:6</View>
</OsCol>
<OsCol span='6'>
  <View className='col-content'>span:6</View>
</OsCol>
<OsCol span='6'>
  <View className='col-content col-content-light'>span:6</View>
</OsCol>
```



## API
### 属性


### 方法

