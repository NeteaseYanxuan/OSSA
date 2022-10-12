---
sidebar_position: 4
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/button/demo/index'
---

# Button 按钮

## 介绍
按钮，可快速配置成多种样式。（小程序按钮功能待补充）

## 用法

#### 按钮类型
```jsx
<OsButton type='default'>线框按钮</OsButton>
<OsButton type='primary'>色块按钮</OsButton>
<OsButton type='special1'>特殊按钮1</OsButton>
<OsButton type='special2'>特殊按钮2</OsButton>
```

#### 禁用态
```jsx
<OsButton type='default' disabled>线框按钮</OsButton>
<OsButton type='primary' disabled>色块按钮</OsButton>
```

#### 按钮形状
```jsx
<OsButton type='default' disabled>线框按钮</OsButton>
<OsButton type='primary' disabled>色块按钮</OsButton>
<OsButton type='primary' shape='square'>色块默认</OsButton>
<OsButton type='primary' shape='round'>色块腰圆</OsButton>
```

#### 按钮尺寸
```jsx
<OsButton size='normal'>线框normal</OsButton>
<OsButton size='small'>线框small</OsButton>
<OsButton size='min'>线框min</OsButton>
<OsButton type='primary' size='block'>色块block，界面长按钮</OsButton>
<OsButton type='primary' size='large'>色块large，弹框按钮</OsButton>
<OsButton type='primary' size='normal'>色块normal</OsButton>
<OsButton type='primary' size='small'>色块small</OsButton>
<OsButton type='primary' size='min'>色块min</OsButton>
```

#### 带Icon
```jsx
<OsButton type='default' icon='collect'>普通按钮</OsButton>
<OsButton type='primary' icon='collect'>色块按钮</OsButton>
<OsButton type='special1' icon='collect'>特殊按钮1</OsButton>
<OsButton type='special2' icon='collect'>特殊按钮2</OsButton>
<OsButton type='primary' size='block' icon='collect'>色块按钮</OsButton>
```

#### 自定义颜色
```jsx
<OsButton type='default' color='#DD1A21'>自定义字体颜色</OsButton>
<OsButton type='default' bdColor='#DD1A21'>自定义边框颜色</OsButton>
<OsButton type='primary' bgColor='#DD1A21'>自定义背景颜色</OsButton>
<OsButton
  type='primary'
  bdColor='transparent'
  startBgColor='#EB767A'
  endBgColor='#DD1A21'
>
  自定义渐变色
</OsButton>
```

## API
> 小程序属性和方法，参考Taro组件库文档[Button](https://docs.taro.zone/docs/components/forms/button#api-%E6%94%AF%E6%8C%81%E5%BA%A6) 

### 属性
| 参数  | 说明                                             | 类型   | 默认值                  |
| ----- | ------------------------------------------------ | ------ | ----------------------- |
| type  | default \| primary \| special1 \| special2，可选 | string | default,特殊按钮用于sku |
| shape | round \| square，可选                            | string | square(默认有4px圆角)   |
| icon  | icon名称，参考OsIcon，可选                       | string | -                       |
| size  | min \| small \| normal \| large \| block，可选   | string | normal,特殊按钮不生效   |
| color  | 文字颜色，可选   | string | -   |
| bgColor  | 背景色，可选   | string | -   |
| bdColor  | 描边色，可选   | string | -   |
| startBgColor  | 填充渐变开始色，可选   | string | - （仅对primary按钮生效且与endBgColor配合使用）  |
| endBgColor  | 填充渐变结束色，可选   | string | - （仅对primary按钮生效且与startBgColor配合使用）  |
| isDisabled  | 是否禁用，可选   | boolean | false  |
| customStyle  | 自定义样式，可选   | object | -  |
| className  | 自定义类名，可选   | string | -  |



### 方法
| 函数名  | 说明       | 参数      |
| ------- | ---------- | --------- |
| onClick | 点击时触发 | event对象 |