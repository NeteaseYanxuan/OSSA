---
sidebar_position: 26
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/stepper/demo/index'
---

# Stepper 步进器

## 介绍
步进器

## 用法
### 基础
```jsx
<OsStepper
  value={current}
  max={5}
  onAdd={(value) => onAdd(value)}
  onSubtract={(value) => onSubtract(value)}
  onChange={(value) => onChange(value, setCurrent)}
  onBlur={(event) => onBlur(event)}
  onDisabledAdd={(value) => console.log(value)}
  onDisabledSubtract={(value) => console.log(value)}
></OsStepper>
```
### 数量不可编辑
```jsx
<OsStepper
  readonly
  value={current1}
  onChange={(value) => onChange1(value, setCurrent1)}
></OsStepper>
```
### 不可点击
```jsx
<OsStepper
  disabled
  value={current2}
  onChange={(value) => onChange2(value, setCurrent2)}
></OsStepper>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|value|当前值，开发者需要通过 onChange 事件来更新 value 值，必选|number|1|
|max|最大值，可选|number|99|
|min|最小值，可选|number|1|
|step|单步增加/减少的值，可选|number|1|
|isReadonly|数量不可编辑，可选，`isReadonly`属性在未来版本中将被删除，请使用`readonly`代替|boolean|false|
|readonly|数量不可编辑，可选|boolean|false|
|isDisabled|不可点击，可选，`isDisabled`属性在未来版本中将被删除，请使用`disabled`代替|boolean|false|
|disabled|不可点击，可选|boolean|false|
|customStyle|自定义样式，可选|object|-|
|className|自定义类名，可选|string|-|


### 方法
|函数名|说明|参数|
|------|------|------|
|onAdd|点击加时触发|当前数值|
|onSubtract|点击减时触发|当前数值|
|onChange|输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 current 值变化，onChange 函数必选|当前数值|
|onBlur|输入框失去焦点时触发|event对象|
|onErrorInput|错误输入时触发|错误数值 {type: "DISABLED" \| "LOW" \| "OVER", errorValue: number}|
|onDisabledAdd|到达最大值之后点击增加触发|当前数值|
|onDisabledSubtract|到达最小值之后点击增加触发|当前数值|

