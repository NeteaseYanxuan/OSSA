---
sidebar_position: 1
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/actionsheet/demo/index'
---

# Actionsheet 动作面板

## 介绍
// TODO

## 用法
### 基础
```jsx
const [showBase, setShowBase] = useState(false);
```
```jsx
<OsButton 
  onClick={() => {
    setShowBase(true);
  }}
>
  弹出 Actionsheet
</OsButton>
<OsActionsheet
  isShow={showBase}
  onClose={() => {
    setShowBase(false);
  }}
>
  <OsActionsheetItem
    title='满599元减去100'
    onClick={() => {
      setShowBase(false);
    }}
  ></OsActionsheetItem>
  <OsActionsheetItem
    title='满249元减50'
    disabled
    onClick={() => {
      setShowBase(false);
    }}
  ></OsActionsheetItem>
  <OsActionsheetItem
    title='满88元打8折'
    disabled
    onClick={() => {
      setShowBase(false);
    }}
  ></OsActionsheetItem>
  <OsActionsheetItem
    title='满69元减10'
    disabled
    onClick={() => {
      setShowBase(false);
    }}
  ></OsActionsheetItem>
</OsActionsheet>
```
### 带取消按钮
```jsx
const [showWithCancelBtn, setShowWithCancelBtn] = useState(false);
```
```jsx
<OsButton
  onClick={() => {
    setShowWithCancelBtn(true);
  }}
>
  弹出带取消按钮的 Actionsheet
</OsButton>
<OsActionsheet
  cancelText='取消'
  isShow={showWithCancelBtn}
  onClose={() => {
    setShowWithCancelBtn(false);
  }}
>
  <OsActionsheetItem
    title='满599元减去100'
    onClick={() => {
      setShowWithCancelBtn(false);
    }}
  ></OsActionsheetItem>
  <OsActionsheetItem
    title='满249元减50'
    onClick={() => {
      setShowWithCancelBtn(false);
    }}
  ></OsActionsheetItem>
  <OsActionsheetItem
    title='满88元打8折'
    onClick={() => {
      setShowWithCancelBtn(false);
    }}
  ></OsActionsheetItem>
  <OsActionsheetItem
    title='满69元减10'
    onClick={() => {
      setShowWithCancelBtn(false);
    }}
  ></OsActionsheetItem>
</OsActionsheet>
```
### 带标题
```jsx
const [showWithTitle, setShowWithTitle] = useState(false);
```
```jsx
<OsButton
  onClick={() => {
    setShowWithTitle(true);
  }}
>
  弹出带标题的 Actionsheet
</OsButton>
<OsActionsheet
  title='带标题的 Actionsheet'
  isShow={showWithTitle}
  onClose={() => {
    setShowWithTitle(false);
  }}
>
  <OsActionsheetItem
    title='满599元减去100'
    onClick={() => {
      setShowWithTitle(false);
    }}
  ></OsActionsheetItem>
  <OsActionsheetItem
    title='满249元减50'
    onClick={() => {
      setShowWithTitle(false);
    }}
  ></OsActionsheetItem>
  <OsActionsheetItem
    title='满88元打8折'
    onClick={() => {
      setShowWithTitle(false);
    }}
  ></OsActionsheetItem>
  <OsActionsheetItem
    title='满69元减10'
    onClick={() => {
      setShowWithTitle(false);
    }}
  ></OsActionsheetItem>
</OsActionsheet>
```
### 自定义内容
```jsx
const [showWithCustomContent, setShowWithCustomContent] = useState(false);
```
```jsx
<OsButton
  onClick={() => {
    setShowWithCustomContent(true);
  }}
>
  弹出自定义内容的 Actionsheet
</OsButton>
<OsActionsheet
  title='自定义内容的 Actionsheet'
  isShow={showWithCustomContent}
  onClose={() => {
    setShowWithCustomContent(false);
  }}
>
  <View className='custom-content'>
    <Text>这是自定义内容</Text>
  </View>
</OsActionsheet>
```



## API
### 属性
| 参数       | 说明               | 类型    | 默认值 |
| ---------- | ------------------ | ------- | ------ |
| isShow     | 是否显示弹窗，必选 | boolean | false  |
| title      | 面板标题，可选     | string  | -      |
| cancelText | 取消按钮文案，可选 | string  | -      |


### 方法
| 函数名  | 说明                   | 参数 |
| ------- | ---------------------- | ---- |
| onClose | 面板关闭时的回调，可选 | -    |

## API-OsActionsheetItem
### 属性
| 参数     | 说明         | 类型    | 默认值 |
| -------- | ------------ | ------- | ------ |
| list     | 选项标题     | string  | -      |
| disabled | 选项是否失效 | boolean | false  |


### 方法
| 函数名  | 说明         | 参数 |
| ------- | ------------ | ---- |
| onClick | 点击时的回调 | -    |
