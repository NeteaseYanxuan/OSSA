---
sidebar_position: 32
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/upload/demo/index'
---

# Upload 图片上传

## 介绍
// TODO

## 用法
### 普通
```jsx
<OsUpload
  onChange={(file, operationType, index) =>
    onChange(file, operationType, index)
  }
  onFail={(data) => onFail(data)}
></OsUpload>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|max|最大数量，可选|number|infinity|
|multiple|开始多张传输，可选|boolean|true|
|customStyle|自定义样式，可选|object|-|
|className|自定义类名，可选|string|-|


### 方法
|函数名|说明|参数|
|------|------|------|
|onChange|上传成功回调\(此时可自行将图片上传至服务器\)|\(files: Array, operationType: string, index: number\) =\> void\(注：1\.index在operationType为remove时有效；2\.严选安卓APP此处生成的图片链接为base64）|
|onFail|上传失败触发|\(data: object\) =\> void|

