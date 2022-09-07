---
sidebar_position: 4
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/button/demo/index'
---

# Button 按钮

## 介绍
按钮组件

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
### 属性


### 方法
|函数名|说明|参数|
|------|------|------|
|onClick|点击时触发|event对象|