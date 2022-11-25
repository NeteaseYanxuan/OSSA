---
sidebar_position: 2
demo_url: "https://neteaseyanxuan.github.io/OSSA/#/pages/loki/turntable/index"
---

# 抽奖转盘 Turntable

## 介绍

幸运抽奖转盘。

## 用法

### 基础

#### 组件引入

```jsx
import BigWheel from "@ossa/loki/libs/components/BigWheel";
import "@ossa/loki/dist/style/bigWheel.scss";
```

#### 配置 DEMO

```jsx
const bigWheelConfig = {
  size: 300,
  prizeOffset: 20,
  turnableImage:
    "https://yanxuan.nosdn.127.net/static-union/1659516044835746.png",
  pointerImage:
    "https://yanxuan.nosdn.127.net/static-union/16595160444ef771.png",
  prize: {
    textColor: "#222222",
  },
};

const prizeGroup = [
  {
    id: 1,
    image: "https://yanxuan.nosdn.127.net/static-union/1659516044c3a18c.png", // 奖品图片
    // name: '199减5红包', // 奖品名称
  },
  {
    id: 2,
    image: "https://yanxuan.nosdn.127.net/static-union/165951604487ef12.png",
    // name: '99减5红包',
  },
  {
    id: 3,
    image: "https://yanxuan.nosdn.127.net/static-union/165951604419ac9a.png",
    // name: '5元直减红包',
  },
  {
    id: 4,
    image: "https://yanxuan.nosdn.127.net/static-union/1659516044816161.png",
    // name: '700加油红包',
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
<BigWheel
  config={{
    ...bigWheelConfig,
    size: 200,
  }}
  prizeGroup={prizeGroup}
  onPlay={handlePlay}
/>
```

### 设置奖品偏移角度 offsetRotate

奖品偏移角度 offsetRotate 设置为：45

```jsx
<BigWheel
  config={{
    ...bigWheelConfig,
    offsetRotate: 45,
  }}
  prizeGroup={prizeGroup}
  onPlay={handlePlay}
/>
```

### 设置奖品偏移 prizeOffset

奖品偏移 prizeOffset 设置为：0

```jsx
<BigWheel
  config={{
    ...bigWheelConfig,
    prizeOffset: 0,
  }}
  prizeGroup={prizeGroup}
  onPlay={handlePlay}
/>
```

### 奖品缩放 prizeScale

奖品缩放 prizeScale 设置为：.5

```jsx
<BigWheel
  config={{
    ...bigWheelConfig,
    prizeScale: 0.5,
  }}
  prizeGroup={prizeGroup}
  onPlay={handlePlay}
/>
```

### 设置奖品样式 prize

奖品样式设置 prize：{ textColor: 'red', fontSize: 12 }

```jsx
<BigWheel
  config={{
    ...bigWheelConfig,
    prize: {
      fontSize: 12,
      textColor: "red",
    },
  }}
  prizeGroup={prizeGroup}
  onPlay={handlePlay}
/>
```

## API

### 配置属性 config

| 参数          | 说明                                                           | 类型          | 默认值 |
| ------------- | -------------------------------------------------------------- | ------------- | ------ |
| size          | 转盘大小                                                       | number        | 600    |
| turnableImage | 转盘图片                                                       | string        | -      |
| pointerImage  | 指针图片                                                       | string        | -      |
| offsetRotate  | 奖品偏移角度，具体详见奖品偏移角度部分                         | number        | 0      |
| prizeOffset   | 奖品偏移量用于设置奖品距离转盘边缘的距离，具体详见奖品配置部分 | number        | 0      |
| prizeScale    | 奖品缩放                                                       | number, [0,1] | 0.7    |
| prize         | 奖品其他配置，具体详见奖品配置部分                             | object        | -      |

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
