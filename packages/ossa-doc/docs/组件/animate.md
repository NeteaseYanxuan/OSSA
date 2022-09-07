---
sidebar_position: 2
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/animate/demo/index'
---

# animate 动画

## 介绍
// TODO

## 用法
### 种类
```jsx
<OsButton
  type='primary'
  onClick={() => {
    handleClick1();
  }}
>
  {btnTxt1}
</OsButton>
<OsAnimate type={type1}>
  <Text className='inline-item--txt'>OSSA</Text>
</OsAnimate>
<OsButton
  type='primary'
  onClick={() => {
    handleClick2();
  }}
>
  {btnTxt2}
</OsButton>
<OsAnimate type={type2}>
  <Text className='inline-item--txt'>OSSA</Text>
</OsAnimate>
<OsButton
  type='primary'
  onClick={() => {
    handleClick3();
  }}
>
  {btnTxt3}
</OsButton>
<OsAnimate type={type3}>
  <Text className='inline-item--txt'>OSSA</Text>
</OsAnimate>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|type|fadeIn / fadeOut / fadeOutDown / fadeOutUp / fadeInDown / fadeInUp|string|-|


### 方法
|函数名|说明|参数|
|------|------|------|
|onClick|点击触发|event|

