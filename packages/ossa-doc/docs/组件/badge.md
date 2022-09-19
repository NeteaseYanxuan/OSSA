---
sidebar_position: 3
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/badge/demo/index'
---

# Badge 徽标

## 介绍
// TODO

## 用法
### dot
```jsx
<OsBadge> 
  <OsIcon
    className='icon'
    type='inform'
    customStyle={{ verticalAlign: "top" }}
  ></OsIcon>
</OsBadge>
```
### info

#### 文字
```jsx
<OsBadge type='info' info='新品'>
  <OsIcon
    type='detail-cart'
    className='icon'
    customStyle={{ verticalAlign: "top" }}
  ></OsIcon>
</OsBadge>
```
#### 数字
```jsx
<OsBadge type='info' info='9'>
  <OsIcon
    type='detail-cart'
    className='icon'
    customStyle={{ verticalAlign: "top" }}
  ></OsIcon>
</OsBadge>
```
### text
```jsx
<OsBadge type='text'>待评价待评价</OsBadge>
```
### 列表红点
```jsx
<OsList
  title='我是标题我是标题我是标题我是标题我是标题我是标题我是标题'
  type='custom'
  rightIcon='arrows'
>
  <OsBadge type='list'></OsBadge>
</OsList>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|type|dot \| info \| text \| list，可选|string|dot|
|isShow|展示徽标，可选|booelan|true|
|info|角标值，可选|number \| string|9|
|max|角标阀值，可选|number|99\(\>99显示99\+\)|
|className|自定义类名，可选|string|-|
|customStyle|自定义样式，可选|object|-|


### 方法
|函数名|说明|参数|
|------|------|------|
|onClick|点击时触发|-|

