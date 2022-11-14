---
sidebar_position: 6
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/checkbox/demo/index'
---

# CheckBox 复选框

## 介绍
在一组选项里多选。

## 用法
### 基础
#### 普通
```jsx
const [v1, setV1] = useState([0]);
```
```jsx 
<OsCheckbox>
  <OsCheckboxOption value={v1} optionValue={0} onClick={setV1}>
    选项A
  </OsCheckboxOption>
  <OsCheckboxOption value={v1} optionValue={1} onClick={setV1}>
    选项B
  </OsCheckboxOption>
</OsCheckbox>
```
#### 选项内容自定义
```jsx
const [v2, setV2] = useState([0]);
```
```jsx
<OsCheckbox>
  <OsCheckboxOption value={v2} optionValue={0} onClick={setV2}>
    <View className='custom-option'>
      <Image
        className='custom-option__img'
        src='http://yanxuan.nosdn.127.net/25223742d4031d15c48c93a0b7b760c0.jpg?imageView&thumbnail=172x172&quality=95'
      />
      <View className='custom-option__content'>
        <View className='custom-option__title'>西装</View>
        <View className='custom-option__sub-title'>
          帅气的办公室吸睛装扮
        </View>
        <View className='custom-option__price'>￥299</View>
      </View>
    </View>
  </OsCheckboxOption>
  <OsCheckboxOption value={v2} optionValue={1} onClick={setV2}>
    <View className='custom-option'>
      <Image
        className='custom-option__img'
        src='https://yanxuan.nosdn.127.net/b3dec0eb768d27301afab1b4a43f30cb.png?quality=95&thumbnail=172x172&imageView'
      />
      <View className='custom-option__content'>
        <View className='custom-option__title'>
          网易智造四季全屋循环扇
        </View>
        <View className='custom-option__sub-title'>
          源自日本，全屋空气对流循环
        </View>
        <View className='custom-option__price'>￥248.1</View>
      </View>
    </View>
  </OsCheckboxOption>
</OsCheckbox>
```
### 禁用
```jsx
const [v1, setV1] = useState([0]);
```
```jsx
<OsCheckbox>
  <OsCheckboxOption
    value={v1}
    optionValue={0}
    onClick={setV1}
    disabled
  >
    选项A
  </OsCheckboxOption>
  <OsCheckboxOption
    value={v1}
    optionValue={1}
    onClick={setV1}
    disabled
  >
    选项B
  </OsCheckboxOption>
</OsCheckbox>
```

## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|value|选中值，必选|number[] \| string[]|-|
|optionValue|选项值，必选|number \| string|-|
|isDisabled|失效状态，可选，`isDisabled`属性在未来版本中将被删除，请使用`disabled`代替|boolean|false|
|disabled|失效状态，可选|boolean|false|


### 方法
|函数名|说明|参数|
|------|------|------|
|onClick|点击时触发，必选|value|

