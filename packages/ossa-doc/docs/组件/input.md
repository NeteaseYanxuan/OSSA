---
sidebar_position: 15
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/input/demo/index'
---

# Input 输入框

## 介绍
表单输入组件，支持单行、多行输入。

## 用法
### 普通

#### 有标题
```jsx
const [v1, setV1] = useState("186");
```
```jsx
<OsInput
  label='标题'
  placeholder='默认文案'
  placeholderStyle='color: #7f7f7f;'
  value={v1}
  onChange={(v) => {
    setV1(v);
  }}
></OsInput>
``` 

#### 没有标题
```jsx
const [v2, setV2] = useState("186");
```
```jsx
<OsInput
  placeholder='默认文案'
  placeholderStyle='color: #7f7f7f;'
  value={v2}
  onChange={(v) => {
    setV2(v);
  }}
></OsInput>
```
#### 银行卡
```jsx
const [v7, setV7] = useState("662712399");
```
```jsx
<OsInput
  type='bankcard'
  placeholder='银行行卡/礼品卡号'
  value={v7}
  onChange={(v) => {
    setV7(v);
  }}
></OsInput>
```
#### 密码输入框 
```jsx
const [v8, setV8] = useState("662712");
```
```jsx
<OsInput
  type='password'
  placeholder='请输入密码'
  value={v8}
  onChange={(v) => {
    setV8(v);
  }}
></OsInput>
```
#### 数字输入框 
```jsx
const [v4, setV4] = useState("123");
```
```jsx
<OsInput
  type='number'
  placeholder='请输入数字'
  value={v4}
  onChange={(v) => {
    setV4(v);
  }}
></OsInput>
```
#### 多行输入
```jsx
const [v3, setV3] = useState(
  "网易严选秉承网易一贯的严谨态度，深入世界各地，严格把关所有商品的产地"
);
```
```jsx
<OsInput
  type='textarea'
  placeholder='请输入文本'
  value={v3}
  onChange={(v) => {
    setV3(v);
  }}
  countDown
  maxLength={200}
></OsInput>
```
#### 不可编辑 
```jsx
const [v5, setV5] = useState("不可编辑的input");
const [v6, setV6] = useState("不可编辑的textarea");
```
```jsx
<OsInput
  label='标题'
  placeholder='请输入文本'
  value={v5}
  onChange={(v) => {
    setV5(v);
  }}
  isReadonly
></OsInput>
<OsInput
  label='标题'
  placeholder='请输入文本'
  value={v5}
  onChange={(v) => {
    setV5(v);
  }}
  isDisabled
></OsInput>
<OsInput
  type='textarea'
  label='标题'
  placeholder='请输入文本'
  value={v6}
  onChange={(v) => {
    setV6(v);
  }}
  countDown
  isDisabled
></OsInput>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|type|输入框类型，可选|text \| number \| password \| bankcard \| textarea |text|
|value|表单值，可选|string|-|
|placeholder|placeholder，可选|string|-|
|placeholderStyle|placeholder样式，只支持小程序，可选|string|-|
|placeholderClass|placeholder样式类，可选|string|-|
|label|表单说明，可选|string|-|
|maxLength|最大字符数，可选|mumber|500|
|isReadonly|是否可编辑，可选|boolean|false|
|isDisabled|表单是否失效，可选|boolean|false|
|disabledClear|是否隐藏一键删除按钮，可选|boolean|false|
|countDown|是否显示字符计数器，textarea有效，可选|boolean|false|


### 方法
|函数名|说明|参数|
|------|------|------|
|onChange|表单值变化时调用，可选|表单值|
|onFocus|表单聚焦时调用，可选|事件对象|
|onBlur|表单值失焦时调用，可选|事件对象|

