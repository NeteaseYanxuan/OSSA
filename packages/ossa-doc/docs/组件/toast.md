---
sidebar_position: 31
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/toast/demo/index'
---

# Toast 轻提示

## 介绍
// TODO

## 用法
### 基础
```jsx
<OsButton
  type='primary'
  onClick={() => onClick({ text: "操作成功", duration: 500 })}
  size='block'
>
  点击出toast,展示0.5s
</OsButton>
```
### 长文本
```jsx
<OsButton
  type='primary'
  onClick={() =>
    onClick({
      text: "操作成功操作成功操作成功操作成功操作成功操作成功操作成功",
    })
  }
  size='block'
>
  点击出长文本
</OsButton>
```



## API
### 属性
|函数|说明|类型|参数|
|------|------|------|------|
|isShow|是否展示，必选|boolean|false|
|text|内容，必选|string|-|
|duration|持续时间、毫秒，可选|number|2000|
|className|自定义类名，可选|string|-|
|customStyle|自定义样式，可选|object|-|


### 方法

