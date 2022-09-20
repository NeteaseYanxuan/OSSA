---
sidebar_position: 29
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/tabs/demo/index'
---

# Tab 选项卡

## 介绍
选项卡

## 用法
### 基础（均分）
```jsx
<OsTabs
  renderHeader={
    <OsTabsHeader value={current}>
      <OsTabsHeaderItem
        index={0}
        current={current}
        text='标签1'
        onClick={(value) => onClick(value, setCurrent)}
      />
      ...
      <OsTabsHeaderItem
        index={4}
        current={current}
        text='标签5'
        onClick={(value) => onClick(value, setCurrent)}
      />
    </OsTabsHeader>
  }
>
  <OsTabsPanel
    current={current}
    index={0}
    customStyle={{ height: Taro.pxTransform(400) }}
  >
    <View className='tabs__content'>标签1内容区域</View>
  </OsTabsPanel>
  ...
  <OsTabsPanel
    current={current}
    index={4}
    customStyle={{ height: Taro.pxTransform(400) }}
  >
    <View className='tabs__content'>标签5内容区域</View>
  </OsTabsPanel>
</OsTabs>
```
### tab左右留间距后均分
```jsx
<OsTabs
  size='large'
  renderHeader={
    <OsTabsHeader
      size='large'
      bgColor='#fff'
      space={60}
      value={current4}
    >
      <OsTabsHeaderItem
        size='large'
        index={0}
        current={current4}
        custom
        renderCustom={<Text>标签1</Text>}
        renderSelectedCustom={<Countdown />}
        onClick={(value) => onClick4(value, setCurrent4)}
      />
      <OsTabsHeaderItem
        size='large'
        index={1}
        current={current4}
        text='标签2'
        onClick={(value) => onClick4(value, setCurrent4)}
      />
    </OsTabsHeader>
  }
>
  <OsTabsPanel
    current={current4}
    index={0}
    customStyle={{ height: Taro.pxTransform(400) }}
  >
    <View className='tabs__content'>标签1内容区域</View>
  </OsTabsPanel>
  <OsTabsPanel
    current={current4}
    index={1}
    customStyle={{ height: Taro.pxTransform(400) }}
  >
    <View className='tabs__content'>标签2内容区域</View>
  </OsTabsPanel>
</OsTabs>
```
### 横向超过5个（开启横向滚动）
```jsx
<OsTabs
  renderHeader={
    <OsTabsHeader scroll>
      {tabsArr1.map((item, index) => (
        <OsTabsHeaderItem
          index={index}
          current={current1}
          key={item.text}
          text={item.text}
          onClick={(value) => onClick1(value, setCurrent1)}
        />
      ))}
    </OsTabsHeader>
  }
>
  {tabsArr1.map((item: any, index: number) => (
    <OsTabsPanel
      key={item.text}
      current={current1}
      index={index}
      customStyle={{ height: Taro.pxTransform(400) }}
    >
      <View className='tabs__content'>标签{index + 1}内容区域</View>
    </OsTabsPanel>
  ))}
</OsTabs>
```
### 竖状(高度超过一屏，开启竖向滚动)
```jsx
<OsTabs
  type='vertical'
  renderHeader={
    <OsTabsHeader type='vertical' scroll>
      {tabsArr3.map((item, index) => (
        <OsTabsHeaderItem
          type='vertical'
          index={index}
          current={current3}
          key={item.text}
          text={item.text}
          onClick={(value) => onClick3(value, setCurrent3)}
        />
      ))}
    </OsTabsHeader>
  }
>
  {tabsArr3.map((item: any, index: number) => (
    <OsTabsPanel
      key={item.text}
      current={current3}
      index={index}
      customStyle={{
        height: Taro.pxTransform(400),
        width: "100%",
        padding: "100PX 50PX",
      }}
    >
      <View className='tabs__content'>标签{index + 1}内容区域</View>
    </OsTabsPanel>
  ))}
</OsTabs>
```
### 带icon
```jsx
<OsTabs
  renderHeader={
    <OsTabsHeader>
      {tabsArr2.map((item, index) => (
        <OsTabsHeaderItem
          index={index}
          current={current2}
          text={item.text}
          key={item.icon}
          icon={item.icon}
          selectedIcon={item.selectedIcon}
          onClick={(value) => onClick2(value, setCurrent2)}
        />
      ))}
    </OsTabsHeader>
  }
>
  {tabsArr2.map((item: any, index: number) => (
    <OsTabsPanel
      current={current2}
      key={item.text}
      index={index}
      customStyle={{ height: Taro.pxTransform(400), width: "100%" }}
    >
      <View className='tabs__content'>标签{index + 1}内容区域</View>
    </OsTabsPanel>
  ))}
</OsTabs>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|type|horizontal \| vertical，可选|string|horizontal|
|renderHeader|一个OsTabsHeader组件，必选|OsTabsHeader|-|

### TabsHeader属性
|参数|说明|类型|默认值|
|------|------|------|------|
|type|horizontal \| vertical，可选|string|horizontal|
|size|default \| large，尺寸，可选|string|default|
|showSplitLine|是否显示分割线，可选|boolean|false|
|scroll|是否开启滚动，可选|boolean|false|
|bgColor|背景色，可选|string|#fafafa|
|value|当前选中索引，可选|number|0|

### TabsHeaderItem属性
|参数|说明|类型|默认值|
|------|------|------|------|
|type|horizontal \| vertical，可选|string|horizontal|
|size|default \| large，尺寸，可选|string|default|
|index|该项索引，必选|number|-|
|current|当前索引，可选|number|0|
|color|文字颜色，可选|string|#333333|
|selectedColor|选中文字颜色，可选|string|#DD1A21|
|text|tab文案，可选|string|-|
|icon|取值参考con，可选|string|-|
|selectIcon|取值参考Icon，可选|string|-|
|custom|是否显示自定义组件，可选|boolean|false|
|renderCustom|自定义组件，可选|Component|-|
|renderSelectedCustom|选中显示的自定义组件，可选|Component|-|

### 方法
无

