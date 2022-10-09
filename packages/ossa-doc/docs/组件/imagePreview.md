---
sidebar_position: 14
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/imagePreview/demo/index'
---

# imagePreview 图片预览

## 介绍
图片全屏预览，支持多图片滚动查看。

## 用法
### 基础
```jsx
const [show, setShow] = useState(false);
const imagesArr1 = [
  {
    img: "https://yanxuan-item.nosdn.127.net/eece32d0e43fdc7a81bc5f71a2569607.png?imageView&quality=65&thumbnail=750x0",
    width: 750,
    height: 750,
  },
  {
    img: "https://yanxuan.nosdn.127.net/308ec58bc467f79a81d4b6885f877d87.jpg?imageView&quality=65&thumbnail=750x0",
    width: 750,
    height: 750,
  },
  {
    img: "https://yanxuan.nosdn.127.net/3e3dc7bc8d0d5cec06353c5808ccd703.jpg?imageView&quality=75&thumbnail=750x0",
    width: 750,
    height: 750,
  },
  {
    img: "https://yanxuan.nosdn.127.net/966959dccd170732edabedd3fed0106e.jpg?imageView&quality=75&thumbnail=750x0",
    width: 750,
    height: 750,
  },
  {
    img: "https://yanxuan.nosdn.127.net/ab6cde5d374b3f5399c170a31149ce25.jpg?imageView&quality=75&thumbnail=750x0",
    width: 750,
    height: 750,
  },
];
```
```jsx 
<OsImagePreview
  show={show}
  onClose={(item) => {
     setShow(false);
  }}
  imagesArr={imagesArr1}
></OsImagePreview>
```



## API
### 属性
| 参数           | 说明                                                   | 类型                               | 默认值          |
| -------------- | ------------------------------------------------------ | ---------------------------------- | --------------- |
| imagesArr      | 图片链接，必选                                         | [ImagesArrItem](#imagesarritem)[] | -               |
| value          | 预览图片位置，可选                                     | number                             | 0               |
| touchable      | 点击图片or空白区域是否返回缩略图，可选                 | boolean                            | true            |
| loop           | 是否可以循环，可选                                     | boolean                            | true            |
| showPagination | 展示页码，可选                                         | boolean                            | true            |
| showBack       | 展示后退按钮（touchable为false的时候强制为true），可选 | boolean                            | true            |
| className      | 自定义类名，可选                                       | string                             | -               |
| customStyle    | 自定义样式，可选                                       | object                             | -               |
| customHeaderStyle | 预览时Header的自定义样式，可选                       | object                             | -               |
| imagesBgColor  | 图片背景色，可选                                       | string                             | 2\.1\.0开始支持 |


### 方法
| 函数名   | 说明                 | 参数                                       |
| -------- | -------------------- | ------------------------------------------ |
| onClose  | 关闭预览时触发，必选 | \(url,index\)当前图片url，当前预览位置索引 |
| onChange | 切换时触发           | \(url,index\)当前图片url，当前预览位置索引 |

## ImagesArrItem
| 参数   | 说明           | 类型   | 默认值 |
| ------ | -------------- | ------ | ------ |
| img    | 图片链接，必选 | string | -      |
| width  | 图片宽度，计算宽高比，可选 | number | -      |
| height | 图片高度，计算宽高比，可选 | number | -      |