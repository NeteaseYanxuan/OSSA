---
sidebar_position: 22
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/picker/demo/index'
---

# Picker 选择器

## 介绍
// TODO

## 用法
### 普通
```jsx
<OsPicker
  range={range}
  value={vNormal}
  onCancel={() => {
    console.log("cancel");
  }}
  onConfirm={onConfirmNormal}
>
  <OsList title='国籍' desc={range[vNormal]}></OsList>
</OsPicker>
<OsList title='国籍' desc={range[vNormal]}></OsList>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|range|取值范围，必选|Array\<number\|string\>|-|
|value|取值索引，必选|number|0|


### 方法
|函数名|说明|参数|
|------|------|------|
|onConfirm|点击确认按钮时触发，可选|-|
|onCancel|点击取消按钮时触发，可选|-|

