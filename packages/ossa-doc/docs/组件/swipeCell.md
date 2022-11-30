---
sidebar_position: 34
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/swipeCell/demo/index'
---

# SwipeCell 滑动单元格

## 介绍
滑动单元格

## 用法
### 基础用法
```jsx 
<OsSwipeCell
  right='删除'
>
  <OsList title='我是标题'></OsList>
</OsSwipeCell>
```
### 禁用
```jsx 
<OsSwipeCell
  right={<View className='right'>删除</View>}
  disabled
>
  <OsList title='我是标题'></OsList>
</OsSwipeCell>
```

## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|right|右侧滑动区域的内容，可选|React.ReactNode\|string|-|
|disabled|禁止滑动，可选|boolean|false|