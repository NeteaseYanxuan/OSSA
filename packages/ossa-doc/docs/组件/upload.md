---
sidebar_position: 32
demo_url: "https://neteaseyanxuan.github.io/OSSA/#/components/upload/demo/index"
---

# Upload 图片上传

## 介绍

图片上传组件，用于选择图片

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

| 参数        | 说明               | 类型    | 默认值   |
| ----------- | ------------------ | ------- | -------- |
| max         | 最大数量，可选     | number  | infinity |
| multiple    | 开始多张传输，可选 | boolean | true     |
| customStyle | 自定义样式，可选   | CSSProperties  | -        |
| className   | 自定义类名，可选   | string  | -        |

### 方法

| 函数名       | 说明                                         | 参数                                                                                                               |
| ------------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| onChange     | 上传成功回调\(此时可自行将图片上传至服务器\) | \(files: ImageFile[], operationType: string, index: number\) =\> void\(注：index 在 operationType 为 remove 时有效 |
| onImageClick | 图片列表点击回调                             | (index: number, file: ImageFile) => void                                                                           |
| onFail       | 上传失败触发                                 | \(err: TaroGeneral.CallbackResult\) =\> void                                                                                          |

#### ImageFile

| 参数            | 类型   | 必填 | 说明                                   |
| --------------- | ------ | ---- | -------------------------------------- |
| path            | string | 是   | 本地临时文件路径                       |
| size            | number | 是   | 本地临时文件大小，单位 B               |
| type            | string | 否   | 文件的 MIME 类型, API 支持度: h5       |
| originalFileObj | File   | 否   | 原始的浏览器 File 对象, API 支持度: h5 |
