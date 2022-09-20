---
sidebar_position: 24
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/rate/demo/index'
---

# Rate 评分

## 介绍
评分

## 用法
### 基础
```jsx
<OsRate
  title='评分'
  onChange={(item) => onChange(item)}
></OsRate>
```
### 最小尺寸
```jsx
<OsRate type='small' value={2} isShowResult={false}></OsRate>
```
### 自定义图标
```jsx
<OsRate
  title='评分'
  value={3}
  selectedIcon='like-selected'
  icon='like'
  options={options3}
></OsRate>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|title|标题，可选|string|-|
|selectedIcon|选中时icon，取值参考OsIcon，可选|string|grade-selected|
|icon|未选中时icon，取值参考OsIcon，可选|string|grade|
|selectedIconColor|选中icon颜色，可选|string|#FAB646|
|color|未选中icon颜色，可选|string|#CCCCCC|
|options|分数对应的结果，可选|string[]|\['非常差', '差', '一般', '满意', '非常满意'\]|
|isShowResult|展示分值对应的结果，可选|boolean|true|
|value|当前分值索引\(从0开始\)，可选|number|0|
|className|自定义类名，可选|string|-|
|customStyle|自定义样式，可选|object|-|


### 方法
|函数名|说明|参数|
|------|------|------|
|onChange|评分改变时触发|\(item\)当前分值对象|

