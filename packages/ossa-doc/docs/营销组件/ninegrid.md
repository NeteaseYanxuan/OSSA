---
sidebar_position: 3
demo_url: "https://neteaseyanxuan.github.io/OSSA/#/pages/loki/ninegrid/index"
---

# 九宫格 NineGrid

## 介绍

九宫格抽奖。

## 用法

### 基础

#### 组件引入

```jsx
import NineGrid from "@ossa/loki/libs/components/NineGrid";
import "@ossa/loki/dist/style/components/ninegrid.scss";
```

#### 配置 DEMO

```jsx
const config = {
  size: 300,
  innerSize: 280,
  backgroundImage:
    "https://yanxuan.nosdn.127.net/static-union/1659681736fb5c81.png",
  playImage: "https://yanxuan.nosdn.127.net/static-union/16596817364a47a0.png",
};

const prizeGroup = [
  {
    image: "https://yanxuan.nosdn.127.net/static-union/165968173610fb15.png",
    id: 1,
  },
  {
    image: "https://yanxuan.nosdn.127.net/static-union/165968173609dd8c.png",
    id: 2,
  },
  {
    image: "https://yanxuan.nosdn.127.net/static-union/16596817368266e4.png",
    id: 3,
  },

  {
    image: "https://yanxuan.nosdn.127.net/static-union/16596817368266e4.png",
    id: 4,
  },

  {
    image: "https://yanxuan.nosdn.127.net/static-union/16596817368266e4.png",
    id: 5,
  },
  {
    image: "https://yanxuan.nosdn.127.net/static-union/16596817369eb9cd.png",
    id: 6,
  },
  {
    image: "https://yanxuan.nosdn.127.net/static-union/16596817368266e4.png",
    id: 7,
  },
  {
    image: "https://yanxuan.nosdn.127.net/static-union/1659681736f19c90.png",
    id: 8,
  },
];
const handlePlay = (onFinish) => {
  onFinish(中奖奖品id).then(
    (item) => {
      console.log("中奖啦 >>>>>>", item);
    },
    () => {
      console.log("未中奖");
    }
  );
};
```

#### 组件使用

```jsx
<BigWheel config={bigWheelConfig} prizeGroup={prizeGroup} onPlay={handlePlay} />
```

### 设置转盘大小 size

转盘大小 size 设置为：200

```jsx
<NineGrid config={config} prizeGroup={prizeGroup} onPlay={handlePlay} />
```

### 设置九宫格大小 size

九宫格大小 size 设置为：200

```jsx
<NineGrid
  config={{
    ...config,
    size: 200,
    innerSize: 180,
  }}
  prizeGroup={prizeGroup}
  onPlay={handlePlay}
/>
```

### 设置九宫格内框大小 innerSize

九宫格内框大小 innerSize 设置为：150

```jsx
<NineGrid
  config={{
    ...config,
    size: 200,
    innerSize: 150,
  }}
  prizeGroup={prizeGroup}
  onPlay={handlePlay}
/>
```

### 设置奖品样式 prizeStyle

奖品样式配置 prizeStyle 设置奖品项背景：{ backgroundImage : 'xxxx'}

```jsx
<NineGrid
  config={{
    ...config,
    prizeStyle: {
      backgroundImage:
        "https://yanxuan.nosdn.127.net/static-union/1659604148fb5c81.png",
    },
  }}
  prizeGroup={prizeGroup}
  onPlay={handlePlay}
/>
```

## API

### 配置属性 config

| 参数            | 说明                           | 类型   | 默认值 |
| --------------- | ------------------------------ | ------ | ------ |
| size            | 大小                           | number | -      |
| innerSize       | 内框大小                       | number | -      |
| backgroundImage | 转盘图片                       | string | -      |
| playImage       | 指针图片                       | string | -      |
| prizeStyle      | 奖品配置，具体详见奖品配置部分 | object | -      |

### 奖品配置 prizeGroup

| 参数  | 说明     | 类型   | 默认值 |
| ----- | -------- | ------ | ------ |
| id    | 奖品 id  | number | -      |
| name  | 奖品名称 | string | -      |
| image | 奖品图片 | string | -      |

### 方法

| 函数名 | 说明     | 类型                                   |
| ------ | -------- | -------------------------------------- |
| onPlay | 抽奖事件 | (finish: (prizeId) => Promise) => void |
