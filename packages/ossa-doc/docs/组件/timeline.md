---
sidebar_position: 30
demo_url: "https://neteaseyanxuan.github.io/OSSA/#/components/timeline/demo/index"
---

# Timeline 时间轴

## 介绍

时间轴

## 用法

### 基础用法

```jsx
<OsTimeline
  items={[
    { title: "开心" },
    { title: "写代码" },
    { title: "下班" },
    { title: "睡觉" },
  ]}
></OsTimeline>
```

### 设置颜色

```jsx
<OsTimeline
  items={[
    { title: "开心", color: "normal" },
    { title: "写代码", color: "warning" },
    { title: "下班", color: "error" },
  ]}
></OsTimeline>
```

### 使用 Icon

```jsx
<OsTimeline
  items={[
    { title: "开心", icon: "check-selected" },
    { title: "写代码", icon: "record" },
    { title: "下班", icon: "avatar" },
    { title: "睡觉", icon: "choose-selected" },
  ]}
></OsTimeline>
```

### 丰富内容

```jsx
<OsTimeline
  items={[
    {
      title: "刷牙洗脸",
      content: ["大概8:00"],
      iconColor: "#07c160",
      icon: "check-selected",
    },
    {
      title: "吃早餐",
      content: ["牛奶+面包", "餐后记得吃药"],
      icon: "record",
      iconColor: "#F48F18",
    },
    {
      title: "上班",
      iconColor: "#d9d9d9",
      content: ["查看邮件", "写PPT", "发送PPT给领导"],
      icon: "avatar",
    },
    {
      title: "睡觉",
      content: ["不超过23:00"],
      icon: "choose-selected",
      iconColor: "#07c160",
    },
  ]}
></OsTimeline>
```

## API

### 属性

| 参数         | 说明                                  | 类型    | 默认值                                                  |
| ------------ | ------------------------------------- | ------- | ------------------------------------------------------- |
| items        | 时间轴的数据                            | object[]| []                                                      |
| pending      | 最后一项是否为未完成态                    | boolean | false                                                   |

### items
| 参数         | 说明                                  | 类型    | 默认值                                                  |
| ------------ | ------------------------------------- | ------- | ------------------------------------------------------- |
| title        | 标题                                  | string  | -                                                       |
| content      | 内容                                  | string[]| []                                                      |
| icon         | 图标                                  | string  | -                                                       |
| iconColor    | 图标颜色                               | string  | #7F7F7                                                  |
| color        | 颜色                                  | string  | -                                                       |


### 方法

| 函数名  | 说明             | 参数       |
| ------- | ---------------- | ---------- |
| onClick | 点击时触发，可选 | event 对象 |
