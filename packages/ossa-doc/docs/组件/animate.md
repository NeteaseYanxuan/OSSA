---
sidebar_position: 2
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/animate/demo/index'
---

# animate 动画

## 介绍
常见的过场动画。

## 用法
### 种类

#### 点击渐现/渐隐
```jsx
const [type1, setType1] = useState("fadeIn");
```
```jsx
<OsButton
  type='primary'
  onClick={() => { 
    setType1(type1 === "fadeIn" ? "fadeOut" : "fadeIn");
  }}
>
  {type1 === "fadeIn" ? "点击渐现" : "点击渐隐"}
</OsButton>
<OsAnimate type={type1}>
  <Text className='inline-item--txt'>OSSA</Text>
</OsAnimate>
```

#### 点击顶部飞入/顶部飞出
```jsx
const [type2, setType2] = useState("fadeOutDown");
```
```jsx
<OsButton
  type='primary'
  onClick={() => {
    setType2(type2 === "fadeOutDown" ? "fadeOutUp" : "fadeOutDown");
  }}
>
  {type2 === "fadeOutDown" ? "点击顶部飞入" : "点击顶部飞出"}
</OsButton>
<OsAnimate type={type2}>
  <Text className='inline-item--txt'>OSSA</Text>
</OsAnimate>
```

#### 点击底部飞出/底部飞入
```jsx
const [type3, setType3] = useState("fadeInUp");
```
```jsx
<OsButton
  type='primary'
  onClick={() => {
    setType3(type3 === "fadeInDown" ? "fadeInUp" : "fadeInDown");
  }}
>
  {type3 === "fadeInDown" ? "点击底部飞出" : "点击底部飞入"}
</OsButton>
<OsAnimate type={type3}>
  <Text className='inline-item--txt'>OSSA</Text>
</OsAnimate>
```

## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|type|动画类型|fadeIn\|fadeOut\|fadeOutDown\|fadeOutUp\|fadeInDown\|fadeInUp|-|


### 方法
|函数名|说明|参数|
|------|------|------|
|onClick|点击触发|event|

