---
sidebar_position: 25
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/search/demo/index'
---

# Search 搜索

## 介绍
搜索框

## 用法
### 普通
```jsx
<OsSearch onChange={(e, value) => onChange(e, value)}></OsSearch>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|placeholder|默认文案，可选|string|搜索商品，共X件好物|
|showSplitLine|展示分割线，可选|boolean|true|
|padding|容器左右内边距，可选|number|30|
|bgColor|容器背景色，可选|string|#FAFAFA|
|color|输入文字颜色，可选|string|#333333|
|value|默认值，可选|string|-|
|showAction|是否展示右侧操作按钮，可选|boolean|true|
|action|操作按钮类型，可选|string|"cancel"|
|actionText|操作按钮文案，可选|string|"取消"|
|className|自定义类名，可选|string|-|
|customStyle|自定义样式，可选|object|-|
|taroProps|除了上述属性之外 taro 支持的 Input 属性，可选|object|-|


### 方法
|函数名|说明|参数|
|------|------|------|
|onChange|输入框值改变时触发的事件|event: CommonEvent, value: string|
|onClear|点击清除icon时触发|-|
|onFocus|聚焦时触发|event|
|onBlur|失去焦点时触发|event|
|onCancel|点击取消按钮时触发|-|
|onConfirm|点击确定按钮时触发|-|

