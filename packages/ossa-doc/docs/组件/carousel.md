---
sidebar_position: 5
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/carousel/demo/index'
---

# Carousel 走马灯

## 介绍
// TODO

## 用法
### 基础
```jsx
<OsCarousel
  data={img1List}
  width={750}
  height={375}
  interval={4000}
  indicatorDots
  circular
  current={0}
/>
```
### 分隔式
```jsx
<OsCarousel
  data={initImg1}
  width={750}
  height={500}
  circular
  current={0}
  vertical
  prevMargin={15}
  nextMargin={15}
  interval={4000}
  gap
/>
```
### 基础
```jsx
<OsCarousel
  data={img1List}
  width={750}
  height={375}
  interval={4000}
  circular
  current={1}
  indicatorDots
  indicatorActiveColor='#DD1A21'
  indicatorColor='#FFF'
  onChange={onChange}
/>
```
### 分隔式
```jsx
<OsCarousel
  data={initImg1}
  width={750}
  height={346}
  gap
  gapWidth={10}
  interval={4000}
  autoPlay
  circular
  prevMargin={100}
  nextMargin={50}
  indicatorDots
  indicatorActiveColor='#DD1A21'
  indicatorColor='#FFF'
  current={0}
/>
```
### 文案
```jsx
<OsCarousel
  className='my-carousel'
  type='text'
  data={initTxt}
  width={750}
  height={100}
/>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|data|数据，必选|\{ content: string, className: string, style: object \}\[\]||
|type|组件类型（显示图片或文字），可选|string|image|
|width|组件宽度，可选|number|750|
|height|组件高度，可选|number|375|
|vertical|滑动方向是否为纵向，可选|boolean|false|
|autoPlay|自动播放，可选|boolean|true|
|interval|自动轮播间隔时间,毫秒，可选|number|4000|
|circular|是否采用衔接滑动，可选|boolean|true|
|indicatorDots|展示指示器，可选|boolean|false|
|indicatorColor|指示点颜色，可选|boolean|true|
|indicatorActiveColor|当前选中指示点颜色，可选|boolean|false|
|current|当前选中项序号，可选|number|0|
|gap|是否有分隔（图片式下生效），可选|boolean|false|
|gapWidth|分隔式间距大小，可选|number|20|
|prevMargin|分隔式下前一张图露出的大小，可选|number|15|
|nextMargin|分隔式下后一张图露出的大小，可选|number|15|


### 方法
|函数名|说明|参数|
|------|------|------|
|onChange|切换时触发|event对象|
|onClick|点击时触发|event对象|

