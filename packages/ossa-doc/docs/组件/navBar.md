---
sidebar_position: 20
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/navBar/demo/index'
---

# NavBar 导航栏

## 介绍
导航栏

## 用法
### 基础
```jsx
const leftIcons = ["return"]
const rightTexts = [{ id: 1, text: "按钮" }]

<OsNavBar
  title='标题'
  leftIcons={leftIcons}
  rightTexts={rightTexts}
  onLeftIconClick={onLeftIconClick.bind(this)}
  onRightTextClick={onRightTextClick.bind(this)}
></OsNavBar>
```
### 左侧定制
```jsx
<OsNavBar
  title='标题'
  leftIcons={leftIcons}
  rightTexts={rightTexts}
  leftTexts={leftTexts}
  onLeftTextClick={onLeftTextClick.bind(this)}
></OsNavBar>
```
### 右侧定制
```jsx
<OsNavBar
  title='标题'
  leftIcons={leftIcons3}
  rightIcons={rightIcons3}
  onRightIconClick={onRightIconClick.bind(this)}
></OsNavBar>
```
### 2列均分导航
```jsx
<OsNavBar
  type='2column'
  title='标题'
  rightTexts={rightTxts1}
></OsNavBar>
```
### 自定义导航
```jsx
<OsNavBar type='custom' showSplitLine={false}>
  <View className='custom-nabbar'>
    <View className='navbar--left'>
      <OsIcon
        type='return'
        size={40}
        customStyle={{ verticalAlign: "top" }}
      ></OsIcon>
    </View>
    <View className='navbar--middle'>
      <OsSearch padding={0} showSplitLine={false}></OsSearch>
    </View>
    <View className='navbar--right'>
      <OsBadge type='info' info={9}>
        <OsIcon
          type='detail-cart'
          customStyle={{ verticalAlign: "top" }}
        ></OsIcon>
      </OsBadge>
    </View>
  </View>
</OsNavBar>
<OsIcon
  type='return'
  size={40}
  customStyle={{ verticalAlign: "top" }}
></OsIcon>
<OsSearch padding={0} showSplitLine={false}></OsSearch>
<OsBadge type='info' info={9}>
  <OsIcon
    type='detail-cart'
    customStyle={{ verticalAlign: "top" }}
  ></OsIcon>
</OsBadge>
<OsIcon
  type='detail-cart'
  customStyle={{ verticalAlign: "top" }}
></OsIcon>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|type|2column \| 3column \| custom，可选|string|3column|
|title|导航标题，可选|ReactChild|-|
|middleSlot|自定义左侧内容，存在时覆盖title，但比custom优先级低，可选，`middleSlot`属性将在未来的版本中被删除，请使用`title`替代|any|-|
|leftIcons|左侧icon,取值参考OsIcon，可选|string[]|-|
|leftTexts|左侧文案，可选|Texts[]|-|
|leftSlot|自定义左侧内容，存在时覆盖leftIcons和leftTexts，但比custom优先级低，可选|ReactChild|-|
|rightIcons|右侧icon,取值参考OsIcon，可选|string[]|-|
|rightTexts|右侧文案，可选|Texts[]|-|
|rightSlot|自定义左侧内容，存在时覆盖rightIcons和rightTexts，但比custom优先级低，可选|ReactChild|-|
|showSplitLine|展示分割线，可选|boolean|true|
|custom|自定义整个导航，会用custom中的内容作为整个导航的内容，覆盖所有icon/text/title/slot，可选|ReactChild|-|
|iconColor|icon的颜色，仅当使用ossa提供的icon时有效，可选|string|#7f7f7f|
|className|自定义类名，可选|string|-|
|customStyle|自定义样式，可选|object|-|

### Texts属性
|参数|说明|类型|默认值|
|------|------|------|------|
|id|文案标识|number|-|
|text|文案|string|-|

### 方法
|函数名|说明|参数|
|------|------|------|
|onLeftIconClick|点击左侧icon时触发|当前点击icon的名称|
|onLeftTextClick|点击左侧文案时触发|当前点击文案的id|
|onRightIconClick|点击右侧icon时触发|当前点击icon的名称|
|onRightTextClick|点击右侧文案时触发|当前点击文案的id|

