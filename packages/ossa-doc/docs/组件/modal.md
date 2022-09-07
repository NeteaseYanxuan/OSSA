---
sidebar_position: 19
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/modal/demo/index'
---

# Modal 对话框

## 介绍
// TODO

## 用法
### 基础
```jsx
<OsButton
  onClick={() => {
    setShowBase(true);
  }}
>
  基础
</OsButton>
```
### 单个按钮
```jsx
<OsButton
  onClick={() => {
    setShowSingleBtn(true);
  }}
>
  单个按钮
</OsButton>
```
### 高级用法
```jsx
<OsButton
  onClick={() => {
    setShowSlot(true);
  }}
>
  高级用法1
</OsButton>
```
### 
```jsx
<OsButton
  onClick={() => {
    setShowSlot1(true);
  }}
>
  高级用法2
</OsButton>
```
### 
```jsx
<OsButton
  onClick={() => {
    setShowDisabled(true);
  }}
>
  高级用法3
</OsButton>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|isShow|是否显示弹窗，必选|boolean|false|
|title|弹窗标题，可选|string|-|
|content|弹窗内容，可选|string|-|
|cancelText|取消按钮文案，可选|string|-|
|confirmText|确认按钮文案，可选|string|-|
|disableCancelBtn|置灰取消按钮，可选|boolean|false|
|disableConfirmBtn|置灰确认按钮，可选|boolean|false|
|closeOnClickMask|点击遮罩是否隐藏弹窗，可选|boolean|false|
|custom|是否仅保留遮罩，完全自定义弹窗内容，可选|boolean|false|
|showCloseIcon|是否显示关闭icon，可选|boolean|true|
|closeIconPosition|关闭icon位置，可选|top-left \| top-right \| bottom-left \| bottom-right \| top \| bottom|top-right|


### 方法
|函数名|说明|参数|
|------|------|------|
|onClose|弹窗关闭时的回调，可选|-|
|onCancel|点击取消按钮时的回调，可选|-|
|onConfirm|弹窗确认按钮时的回调，可选|-|

