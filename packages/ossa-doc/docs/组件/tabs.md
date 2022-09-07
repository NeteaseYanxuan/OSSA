---
sidebar_position: 29
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/tabs/demo/index'
---

# Tab 选项卡

## 介绍
// TODO

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
      <OsTabsHeaderItem
        index={1}
        current={current}
        text='标签2'
        onClick={(value) => onClick(value, setCurrent)}
      />
      <OsTabsHeaderItem
        index={2}
        current={current}
        text='标签3'
        onClick={(value) => onClick(value, setCurrent)}
      />
      <OsTabsHeaderItem
        index={3}
        current={current}
        text='标签4'
        onClick={(value) => onClick(value, setCurrent)}
      />
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
  <OsTabsPanel
    current={current}
    index={1}
    customStyle={{ height: Taro.pxTransform(400) }}
  >
    <View className='tabs__content'>标签2内容区域</View>
  </OsTabsPanel>
  <OsTabsPanel
    current={current}
    index={2}
    customStyle={{ height: Taro.pxTransform(400) }}
  >
    <View className='tabs__content'>标签3内容区域</View>
  </OsTabsPanel>
  <OsTabsPanel
    current={current}
    index={3}
    customStyle={{ height: Taro.pxTransform(400) }}
  >
    <View className='tabs__content'>标签4内容区域</View>
  </OsTabsPanel>
  <OsTabsPanel
    current={current}
    index={4}
    customStyle={{ height: Taro.pxTransform(400) }}
  >
    <View className='tabs__content'>标签5内容区域</View>
  </OsTabsPanel>
</OsTabs>
<OsTabsHeader value={current}>
  <OsTabsHeaderItem
    index={0}
    current={current}
    text='标签1'
    onClick={(value) => onClick(value, setCurrent)}
  />
  <OsTabsHeaderItem
    index={1}
    current={current}
    text='标签2'
    onClick={(value) => onClick(value, setCurrent)}
  />
  <OsTabsHeaderItem
    index={2}
    current={current}
    text='标签3'
    onClick={(value) => onClick(value, setCurrent)}
  />
  <OsTabsHeaderItem
    index={3}
    current={current}
    text='标签4'
    onClick={(value) => onClick(value, setCurrent)}
  />
  <OsTabsHeaderItem
    index={4}
    current={current}
    text='标签5'
    onClick={(value) => onClick(value, setCurrent)}
  />
</OsTabsHeader>
<OsTabsHeaderItem
  index={0}
  current={current}
  text='标签1'
  onClick={(value) => onClick(value, setCurrent)}
/>
<OsTabsHeaderItem
  index={1}
  current={current}
  text='标签2'
  onClick={(value) => onClick(value, setCurrent)}
/>
<OsTabsHeaderItem
  index={2}
  current={current}
  text='标签3'
  onClick={(value) => onClick(value, setCurrent)}
/>
<OsTabsHeaderItem
  index={3}
  current={current}
  text='标签4'
  onClick={(value) => onClick(value, setCurrent)}
/>
<OsTabsHeaderItem
  index={4}
  current={current}
  text='标签5'
  onClick={(value) => onClick(value, setCurrent)}
/>
<OsTabsPanel
  current={current}
  index={0}
  customStyle={{ height: Taro.pxTransform(400) }}
>
  <View className='tabs__content'>标签1内容区域</View>
</OsTabsPanel>
<OsTabsPanel
  current={current}
  index={1}
  customStyle={{ height: Taro.pxTransform(400) }}
>
  <View className='tabs__content'>标签2内容区域</View>
</OsTabsPanel>
<OsTabsPanel
  current={current}
  index={2}
  customStyle={{ height: Taro.pxTransform(400) }}
>
  <View className='tabs__content'>标签3内容区域</View>
</OsTabsPanel>
<OsTabsPanel
  current={current}
  index={3}
  customStyle={{ height: Taro.pxTransform(400) }}
>
  <View className='tabs__content'>标签4内容区域</View>
</OsTabsPanel>
<OsTabsPanel
  current={current}
  index={4}
  customStyle={{ height: Taro.pxTransform(400) }}
>
  <View className='tabs__content'>标签5内容区域</View>
</OsTabsPanel>
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
<OsTabsHeaderItem
  index={index}
  current={current1}
  key={item.text}
  text={item.text}
  onClick={(value) => onClick1(value, setCurrent1)}
/>
<OsTabsPanel
  key={item.text}
  current={current1}
  index={index}
  customStyle={{ height: Taro.pxTransform(400) }}
>
  <View className='tabs__content'>标签{index + 1}内容区域</View>
</OsTabsPanel>
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
<OsTabsHeaderItem
  type='vertical'
  index={index}
  current={current3}
  key={item.text}
  text={item.text}
  onClick={(value) => onClick3(value, setCurrent3)}
/>
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
<OsTabsHeaderItem
  index={index}
  current={current2}
  text={item.text}
  key={item.icon}
  icon={item.icon}
  selectedIcon={item.selectedIcon}
  onClick={(value) => onClick2(value, setCurrent2)}
/>
<OsTabsPanel
  current={current2}
  key={item.text}
  index={index}
  customStyle={{ height: Taro.pxTransform(400), width: "100%" }}
>
  <View className='tabs__content'>标签{index + 1}内容区域</View>
</OsTabsPanel>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|type|horizontal \| vertical，可选|string|horizontal|
|renderHeader|一个OsTabsHeader组件，必选|OsTabsHeader|-|


### 方法

