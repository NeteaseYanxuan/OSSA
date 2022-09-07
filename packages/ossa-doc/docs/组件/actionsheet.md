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
<OsButton
  onClick={() => {
    setShowBase(true);
  }}
>
  弹出 Actionsheet
</OsButton>
```
### 带取消按钮
```jsx
<OsButton
  onClick={() => {
    setShowWithCancelBtn(true);
  }}
>
  弹出带取消按钮的 Actionsheet
</OsButton>
```
### 带标题
```jsx
<OsButton
  onClick={() => {
    setShowWithTitle(true);
  }}
>
  弹出带标题的 Actionsheet
</OsButton>
```
### 自定义内容
```jsx
<OsButton
  onClick={() => {
    setShowWithCustomContent(true);
  }}
>
  弹出自定义内容的 Actionsheet
</OsButton>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|isShow|是否显示弹窗，必选|boolean|false|
|title|面板标题，可选|string|-|
|cancelText|取消按钮文案，可选|string|-|


### 方法
|函数名|说明|参数|
|------|------|------|
|onClose|面板关闭时的回调，可选|-|

