---
sidebar_position: 14
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/imagePreview/demo/index'
---

# imagePreview 图片预览

## 介绍
// TODO

## 用法
### 基础
```jsx
<OsImagePreview
  show={show}
  onClose={(item) => {
    onClose(item, setShow);
  }}
  onChange={(item) => {
    onChange(item);
  }}
  imagesArr={imagesArr1}
></OsImagePreview>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|imagesArr|图片链接，必选|\<Array\>\<API-ImagesArr\>|-|
|value|预览图片位置，可选|number|0|
|touchable|点击图片or空白区域是否返回缩略图，可选|boolean|true|
|loop|是否可以循环，可选|boolean|true|
|showPagination|展示页码，可选|boolean|true|
|showBack|展示后退按钮（touchable为false的时候强制为true），可选|boolean|true|
|className|自定义类名，可选|string|-|
|customStyle|自定义样式，可选|object|-|
|imagesBgColor|图片背景色，可选|string|2\.1\.0开始支持|


### 方法
|函数名|说明|参数|
|------|------|------|
|onClose|关闭预览时触发，必选|\(url,index\)当前图片url，当前预览位置索引|
|onChange|切换时触发|\(url,index\)当前图片url，当前预览位置索引|

