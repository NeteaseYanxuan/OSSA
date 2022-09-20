---
sidebar_position: 28
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/tabbar/demo/index'
---

# TabBar 标签栏

## 介绍
1. 当作页面标签栏使用
2. 用于小程序[自定义tabbar](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)（H5暂不支持自定义tabbar）


## 用法
### 页面标签栏
```jsx
// 普通
<OsTabBar
  value={value}
  tabsArr={tabsArr}
  onClick={(item) => onClick(item)}
></OsTabBar>


// 固定底部
<OsTabBar
  value={value}
  tabsArr={tabsArr}
  isfixedBt
  onClick={(item) => onClick(item)}
></OsTabBar>
```

### 小程序自定义tabbar
```jsx title="src/custom-tab-bar/index.tsx"
import { OsTabBar } from 'ossaui'
import 'ossaui/dist/style/components/tabbar.scss'
import 'ossaui/dist/style/components/icon.scss'

const tabsArr = [
  {
    icon: 'home',
    selectedIcon: 'home-pressed',
    text: '首页',
    path: '/pages/index/index'
  },
  {
    icon: 'user',
    selectedIcon: 'user-pressed',
    text: '我的',
    path: '/pages/user/index'
  }
]

export default () => {
  // 需要使用全局状态管理current，因为每个页面的tabbar都是不同的实例
  const [current, setCurrent] = useState(0)

  onChange(item, index) {
    Taro.switchTab({
      url: item.path
    })
    setCurrent(index)
  }

  return (
    <View className={styles.container}>
      <OsTabBar
        tabsArr={tabsArr}
        value={current}
        onClick={onChange}
      />
    </View>
  )
}
 
```

:::note
当在小程序中使用自定义tabbar时，请避免在页面中其他地方使用tabbar组件。
如果其他地方也使用tabbar组件，tabbar组件的样式会被提取到common.wxss中，而自定义tabbar只会读取`cutom-tab-bar/`文件夹下的样式文件，从而导致样式文件缺失。

:::

## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|value|当前选中的标签索引值，从0开始，可选|number|0|
|tabsArr|数据渲染，必选|TabsArr[]|-|
|defaultColor|默认填充色，可选|string|#7F7F7F|
|activeColor|高亮填充色，可选|string|#DD1A21|
|isfixedBt|是否固定在页面底部，可选|boolean|false|
|space|icon与文案垂直间距，可选|number|
|className|自定义类名，可选|string|-|
|customStyle|自定义样式，可选|object|-|

### TabsArr属性
|参数|说明|类型|默认值|
|------|------|------|------|
|icon|icon名称，取值参考OsIcon Tabbar分类，必选|string|-|
|selectedIcon|选中icon名称，取值参考OsIcon Tabbar分类，必选|string|-|
|text|tabbar文案，必选|string|-|
|useCustomIcon|是否使用自定义icon，允许icon/selectedIcon传入自定义的组件|boolean|false|

### 方法
|函数名|说明|参数|
|------|------|------|
|onClick|点击时触发|\(item, index\)当前点击的标签|

