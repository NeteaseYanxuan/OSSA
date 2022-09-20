---
sidebar_position: 16
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/layout/demo/index'
---

# Layout 布局

## 介绍
页面栅格布局。

## 用法
### 基础布局
```jsx
<OsRow>
  <OsCol span='24'>
    <View className='col-content col-content-light'>span:24</View>
  </OsCol>
</OsRow>

<OsRow>
  <OsCol span='12'>
    <View className='col-content col-content-light'>span:12</View>
  </OsCol>
  <OsCol span='12'>
    <View className='col-content'>span:12</View>
  </OsCol>
</OsRow>

<OsRow>
  <OsCol span='8' offset='8'>
    <View className='col-content col-content-light'>offset:8 span:8</View>
  </OsCol>
  <OsCol span='8'>
    <View className='col-content'>span:8</View>
  </OsCol>
  <OsCol span='8'>
    <View className='col-content'>span:8</View>
  </OsCol>
</OsRow>

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
```

scss
```scss
.row {
  margin-bottom: 24px;
}

.col-content {
  height: 70px;
  line-height: 70px;
  color: #fff;
  text-align: center;
  background: #d9d9d9;
  font-size: 28px;
  border-radius: 8px;

  &--bottom20 {
    margin-bottom: 20px;
  }

  &-light {
    background: #999;
  }
}
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
```
### offset
```jsx
<OsRow>
  <OsCol span='12' offset='12' >
    <View className='col-content col-content-light'>span:12 offset:12</View>
  </OsCol>
</OsRow>
```
## API-OsRow
### 属性
| 参数    | 说明                            | 类型                                                    | 默认值     |
| ------- | ------------------------------- | ------------------------------------------------------- | ---------- |
| type    | 设置flex布局                    | flex                                                    | -          |
| justify | 主轴对齐方式，同justify-content | start \| center \| end \| space-between \| space-around | start      |
| align   | 交叉轴对齐方式，同align-items   | flex-start \| center \| flex-end                        | flex-start |
| wrap    | flex是否多行显示                | nowrap \| wrap                                          | nowrap     |
| gutter  | 元素间隔，单位：px              | number                                                  | 0          |



## API-OsCol
### 属性
| 参数   | 说明               | 类型   | 默认值 |
| ------ | ------------------ | ------ | ------ |
| span   | 栅格占位格数       | number | 24     |
| offset | 栅格左侧的间隔格数 | number | 0      |

