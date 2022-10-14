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
| 参数             | 说明                                                                                                                  | 类型                                                         | 默认值 |
| ---------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------ |
| type             | 输入框类型，可选                                                                                                      | text \| number \| password \| bankcard \| textarea \| border | text   |
| value            | 表单值，可选                                                                                                          | string                                                       | -      |
| placeholder      | placeholder，可选                                                                                                     | string                                                       | -      |
| placeholderStyle | placeholder样式，只支持小程序，可选                                                                                   | string                                                       | -      |
| placeholderClass | placeholder样式类，可选                                                                                               | string                                                       | -      |
| label            | 表单说明，可选                                                                                                        | string                                                       | -      |
| maxLength        | 最大字符数，可选                                                                                                      | mumber                                                       | 500    |
| isReadonly       | 是否可编辑，可选                                                                                                      | boolean                                                      | false  |
| isDisabled       | 表单是否失效，可选                                                                                                    | boolean                                                      | false  |
| disabledClear    | 是否隐藏一键删除按钮，可选                                                                                            | boolean                                                      | false  |
| countDown        | 是否显示字符计数器，textarea有效，可选                                                                                | boolean                                                      | false  |
| cursorSpacing    | 指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离，可选 | number                                                       | 0      |
| cursor           | 指定focus时的光标位置，可选                                                                                           | number                                                       | -      |
| focus            | 获取焦点，可选                                                                                                        | boolean                                                      | false  |
| selectionStart   | 光标起始位置，自动聚集时有效，需与selection-end搭配使用，可选                                                         | number                                                       | -1     |
| selectionEnd     | 光标结束位置，自动聚集时有效，需与selection-start搭配使用，可选                                                       | number                                                       | -1     |
| adjustPosition   | 键盘弹起时，是否自动上推页面，可选                                                                                    | boolean                                                      | false  |
| holdKeyboard     | focus 时，点击页面的时候不收起键盘，可选                                                                              | boolean                                                      | false  |
| confirmType      | 设置键盘右下角按钮的文字，可选                                                                                        | "send" or "search" or "next" or "go" or "done"               | done   |
| confirmHold      | 点击键盘右下角按钮时是否保持键盘不收起，可选                                                                          | boolean                                                      | false  |
| name             | 组件名字，用于表单提交获取数据，可选                                                                                  | string                                                       | -      |
| nativeProps      | 用于透传 `WebComponents` 上的属性到内部 H5 标签上，可选                                                               | `Record<string, unknown>`                                    | -      |
| controlled       | 是否为受控组件，可选                                                                                                  | boolean                                                      | false  |
| ariaLabel        | 无障碍访问，（属性）元素的额外描述，可选                                                                              | string                                                       | -      |

### InputProps
| 参数                   | 说明                                                                                                     | 类型    | 默认值 |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ------- | ------ |
| alwaysEmbed            | 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)，可选                    | boolean | false  |
| safePasswordCertPath   | 安全键盘加密公钥的路径，只支持包内路径，可选                                                             | string  | -      |
| safePasswordLength     | 安全键盘输入密码长度，可选                                                                               | number  | -      |
| safePasswordTimeStamp  | 安全键盘加密时间戳，可选                                                                                 | number  | -      |
| safePasswordNonce      | 安全键盘加密盐值，可选                                                                                   | string  | -      |
| safePasswordSalt       | 安全键盘计算hash盐值，若指定custom-hash 则无效，可选                                                     | string  | -      |
| safePasswordCustomHash | 安全键盘计算hash的算法表达式，如 `md5(sha1('foo' + sha256(sm3(password + 'bar'))))`，可选                | string  | -      |
| randomNumber           | 当 type 为 number, digit, idcard 数字键盘是否随机排列，可选                                              | boolean | false  |
| alwaysSystem           | 是否强制使用系统键盘和 Web-view 创建的 input 元素。为 true 时，confirm-type、confirm-hold 可能失效，可选 | string  | -      |
### TextareaProps
| 参数                  | 说明                                                                                 | 类型                    | 默认值 |
| --------------------- | ------------------------------------------------------------------------------------ | ----------------------- | ------ |
| autoHeight            | 是否自动增高，设置 autoHeight 时，style.height不生效，可选                           | boolean                 | false  |
| fixed                 | 如果 Textarea 是在一个 `position:fixed` 的区域，需要显示指定属性 fixed 为 true，可选 | boolean                 | false  |
| showConfirmBar        | 是否显示键盘上方带有”完成“按钮那一栏，可选                                           | boolean                 | true   |
| disableDefaultPadding | 是否去掉 iOS 下的默认内边距，可选                                                    | boolean                 | false  |
| onLineChange          | 输入框行数变化时调用，可选                                                           | onLineChangeEventDetail | -      |



### 方法
| 函数名                 | 说明                                                                                                                               | 参数                              |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| onChange               | 表单值变化时调用，可选                                                                                                             | 表单值                            |
| onFocus                | 表单聚焦时调用，可选                                                                                                               | 事件对象                          |
| onBlur                 | 表单值失焦时调用，可选                                                                                                             | 事件对象                          |
| onInput                | 当键盘输入时，触发input事件，event.detail = {value, cursor, keyCode}，处理函数可以直接 return 一个字符串，将替换输入框的内容，可选 | inputEventDetail                  |
| onConfirm              | 点击完成时， 触发 confirm 事件                                                                                                     | confirmEventDetail                |
| onKeyboardHeightChange | 键盘高度发生变化的时候触发此事件                                                                                                   | onKeyboardHeightChangeEventDetail |

### inputEventDetail

| 参数    | 类型     | 说明     |
| ------- | -------- | -------- |
| value   | `string` | 输入值   |
| cursor  | `number` | 光标位置 |
| keyCode | `number` | 键值     |

### inputValueEventDetail

| 参数  | 类型     | 说明   |
| ----- | -------- | ------ |
| value | `string` | 输入值 |

### onKeyboardHeightChangeEventDetail

| 参数     | 类型     | 说明     |
| -------- | -------- | -------- |
| height   | `number` | 键盘高度 |
| duration | `number` | 持续时间 |

### onKeyboardHeightChangeEventDetail

| 参数     | 类型     | 说明     |
| -------- | -------- | -------- |
| height   | `number` | 键盘高度 |
| duration | `number` | 持续时间 |