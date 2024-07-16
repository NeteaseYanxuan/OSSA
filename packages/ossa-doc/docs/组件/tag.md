---
sidebar_position: 30
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/tag/demo/index'
---

# Tag 标签

## 介绍
标签

## 用法
### 矩形类标签
```jsx
<OsTag type='primary' color='warning'>
  预售
</OsTag>

<OsTag type='primary' color='normal'>
  库存不足
</OsTag>

<OsTag type='primary' color='error'>
  已售罄
</OsTag>
```
### 腰圆线框标签
```jsx
<OsTag color='warning'>腰圆线框</OsTag>

<OsTag>售罄</OsTag>

<OsTag color='error' showArrow>
  周年庆大促
</OsTag>
```
### 腰圆实色标签
```jsx
<OsTag bgColor='#DD1A21' color='#fff'>
  默认
</OsTag>

<OsTag startBgColor='#FC865F' endBgColor='#FC625F' color='#fff'>
  全场满减
</OsTag>
```
### 自定义色值
```jsx
<OsTag color='#f00'>圆角标签</OsTag>

<OsTag type='primary' color='#f00'>
  方形标签
</OsTag>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|type|radius / primary，可选|string|radius|
|color|normal / warning / error / 色值，可选|string|normal|
|bgColor|填充色，可选|string|-|
|startBgColor|填充渐变开始色，可选|string|-（只支持radius腰圆标签，且与endBgColor配合使用）|
|endBgColor|填充渐变结束色，可选|string|-（只支持radius腰圆标签，且与startBgColor配合使用）|
|showArrow|显示向右箭头，可选|boolean|-（只支持radius腰圆标签）|
|customStyle|自定义Style，可选|Object|-|
|size|tag尺寸|,可选|middle|large|-|
|border|边框,可选｜string|-


### 方法
|函数名|说明|参数|
|------|------|------|
|onClick|点击时触发，可选|event对象|

