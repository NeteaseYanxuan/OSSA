---
sidebar_position: 17
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/list/demo/index'
---

# List 列表

## 介绍
通用列表展示。

## 用法
### 基础
```jsx
<OsList title='我是标题' onClick={(e) => onClick(e)}></OsList>
<OsList
  title='我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题'
  onClick={(e) => onClick(e)}
></OsList>
```
### 带副标题
```jsx
<OsList title='我是标题' subTitle='我是副标题'></OsList>
```
### 带左侧icon
```jsx
<OsList title='我是标题' leftIcon='record'></OsList>
<OsList
  title='我是标题'
  rightIcon='arrows'
  subTitle='副标题'
  leftIcon='record'
></OsList>
```
### 右侧带icon
```jsx
<OsList title='我是标题' rightIcon='arrows'></OsList>
```
### 带描述
```jsx
<OsList title='我是标题' desc='描述文字'></OsList>
<OsList title='我是标题' desc='描述文字' rightIcon='arrows'></OsList>
<OsList
  title='我是标题'
  desc='描述文字'
  rightIcon='arrows'
  leftIcon='record'
></OsList>
```
### 内容自定义
```jsx
<OsList
  title='我是标题'
  subTitle='我是副标题'
  type='custom'
  rightIcon='arrows'
>
  <OsBadge type='list'></OsBadge>
</OsList>
```
### 内容自定义
```jsx
<OsList desc='这里是自定义例举例' type='custom'>
  <Image
    className='list--test__image'
    src='http://yanxuan.nosdn.127.net/25223742d4031d15c48c93a0b7b760c0.jpg?imageView&thumbnail=160x0&quality=95'
  ></Image>
</OsList>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|type|default \| custom，可选|string|default|
|title|标题，可选|string|-|
|subTitle|副标题，可选|string|-|
|desc|描述，可选|string|-|
|rightIcon|右侧icon，取值参考OsIcon，可选|string|-|
|rightCustomIcon|右侧自定义图标，可选，当且仅当'rightIcon'为'custom'时有效|ReactNode|-|
|leftIcon|左侧icon，取值参考OsIcon，可选|string|-|
|leftCustomIcon|左侧自定义图标，可选，当且仅当'leftIcon'为'custom'时有效|ReactNode|-|
|showSplitLine|展示分割线，可选|boolean|true|
|color|标题颜色，可选|string|#333333|
|descColor|副标题或者描述字体颜色，可选|string|#7f7f7f|
|bgColor|背景色，可选|string|#ffffff|
|activeBgColor|激活态背景色，可选|string|#f9f9f9|
|leftIconSize|左侧图标尺寸，可选|number|36|
|className|自定义类名，可选|string|-|
|customStyle|自定义样式，可选|object|-|


### 方法
|函数名|说明|参数|
|------|------|------|
|onClick|点击时触发|event 对象|

