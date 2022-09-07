---
sidebar_position: 28
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/tabbar/demo/index'
---

# TabBar 标签栏

## 介绍
// TODO

## 用法
### 基础
```jsx
<OsTabBar
  value={2}
  tabsArr={tabsArr}
  onClick={(item) => onClick(item)}
></OsTabBar>
```
### 固定底部
```jsx
<OsTabBar
  tabsArr={tabsArr}
  isfixedBt
  onClick={(item) => onClick(item)}
></OsTabBar>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|value|当前选中的标签索引值，从0开始，可选|number|0|
|tabsArr|数据渲染，必选|\<Array\>\<API-TabsArr\>|-|
|defaultColor|默认填充色，可选|string|#7F7F7F|
|activeColor|高亮填充色，可选|string|#DD1A21|
|isfixedBt|是否固定在页面底部，可选|boolean|false|
|space|icon与文案垂直间距，可选|number|
|className|自定义类名，可选|string|-|
|customStyle|自定义样式，可选|object|-|


### 方法
|函数名|说明|参数|
|------|------|------|
|onClick|点击时触发|\(item\)当前点击的标签，从0开始|

