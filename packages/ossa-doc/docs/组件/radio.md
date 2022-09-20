---
sidebar_position: 23
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/radio/demo/index'
---

# Radio 单选框

## 介绍
单选框

## 用法
### 基础
```jsx
<OsRadio>
  <OsRadioOption value={v1} optionValue={0} onClick={setV1}>
    选项A
  </OsRadioOption>
  <OsRadioOption value={v1} optionValue={1} onClick={setV1}>
    选项B
  </OsRadioOption>
</OsRadio>

// 选项内容自定义
<OsRadio>
  <OsRadioOption value={v2} optionValue={0} onClick={setV2} isCustom>
    <View className='custom-option'>
      <Image
        className='custom-option__img'
        src='https://yanxuan-item.nosdn.127.net/8aafd2aa11a023d69ec1dfbc062b28c7.png?quality=95&thumbnail=245x245&imageView'
      />
      <View className='custom-option__content'>
        <View className='custom-option__title'>西装</View>
        <View className='custom-option__sub-title'>
          帅气的办公室吸睛装扮
        </View>
        <View className='custom-option__price'>&yen;299</View>
      </View>
    </View>
  </OsRadioOption>
  <OsRadioOption value={v2} optionValue={1} onClick={setV2} isCustom>
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
        <View className='custom-option__price'>&yen;248.1</View>
      </View>
    </View>
  </OsRadioOption>
</OsRadio>
```
### 禁用
```jsx
<OsRadio>
  <OsRadioOption value={v3} optionValue={0} onClick={setV3} isDisabled>
    选项A
  </OsRadioOption>
  <OsRadioOption value={v3} optionValue={1} onClick={setV3} isDisabled>
    选项B
  </OsRadioOption>
</OsRadio>
```
### 不可执行
```jsx
<OsRadio>
  <OsRadioOption value={v5} optionValue={0} onClick={setV5} isReadonly>
    选项A
  </OsRadioOption>
  <OsRadioOption value={v5} optionValue={1} onClick={setV5} isReadonly>
    选项B
  </OsRadioOption>
</OsRadio>
```
### 横向布局
```jsx
<OsRadio type='row'>
  <OsRadioOption value={v7} optionValue={0} onClick={setV7} type='row'>
    选项A
  </OsRadioOption>
  <OsRadioOption value={v7} optionValue={1} onClick={setV7} type='row'>
    选项B
  </OsRadioOption>
</OsRadio>
<OsRadioOption value={v7} optionValue={0} onClick={setV7} type='row'>
  选项A
</OsRadioOption>
<OsRadioOption value={v7} optionValue={1} onClick={setV7} type='row'>
  选项B
</OsRadioOption>
```



## API
### radio属性

|参数|说明|类型|默认值|
|------|------|------|------|
|type|布局类型|column \| row|column|

### radioOption属性
|参数|说明|类型|默认值|
|------|------|------|------|
|value|选中值，必选|number \| string|-|
|optionValue|选项值，必选|number \| string|-|
|isDisabled|失效状态，可选|boolean|false|
|isCustom|是否自定义，可选|boolean|false|
|isReadonly|不可执行，可选|boolean|false|

### radioOption方法
|函数名|说明|参数|
|------|------|------|
|onClick|点击时触发，必选|value|

