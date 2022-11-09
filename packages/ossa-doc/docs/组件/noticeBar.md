---
sidebar_position: 21
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/noticeBar/demo/index'
---

# NoticeBar 通知栏

## 介绍
通知栏

## 用法
### 基础
```jsx
<OsNoticeBar leftIcon='inform'>
  你可能已经注意到了，我们使用let关键字来代替var
</OsNoticeBar>
```
### 
```jsx
<OsNoticeBar leftIcon='inform' scrollable>
  你可能已经注意到了，我们使用let关键字来代替var
</OsNoticeBar>
```
### 通告栏模式
```jsx
// 关闭
<OsNoticeBar
  closeable
  onClick={() => setShow(false)}
>
  你可能已经注意到了，我们使用let关键字来代替var
</OsNoticeBar>

// 跳转
<OsNoticeBar more onClick={() => console.log("跳转")}>
  你可能已经注意到了，我们使用let关键字来代替var
</OsNoticeBar>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|closeable|是否显示关闭按钮，可选|boolean|false|
|scrollable|文字是否可滚动，可选|boolean|false|
|speed|文字滚动一屏的总时长，单位秒，可选，`speed`字段将在未来版本中被移除,请使用`duration`代替|number|16,单位秒|
|duration|文字滚动一屏的总时长，单位秒，可选|number|16,单位秒|
|leftIcon|左侧Icon，可选|OsIcon|-|
|more|是否显示更多按钮，可选|boolean|false|
|color|文字颜色，可选|string|#f48f18|
|bgColor|背景颜色，可选|string|#fff8d8|


### 方法
|函数名|说明|参数|
|------|------|------|
|onClick|点击时触发，可选|event对象|
|onClose|点击关闭按钮时触发，可选|event对象|

