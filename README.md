# OSSA

[![GitHub license](https://img.shields.io/github/license/NeteaseYanxuan/OSSA)](https://github.com/NeteaseYanxuan/OSSA/blob/main/LICENSE)
![npm](https://img.shields.io/npm/v/ossaui)
[![OSSA-DEMO](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/sfyxka/main&style=flat)](https://dashboard.cypress.io/projects/sfyxka/runs)
[![GitHub issues](https://img.shields.io/github/issues/NeteaseYanxuan/OSSA)](https://github.com/NeteaseYanxuan/OSSA/issues)
[![GitHub forks](https://img.shields.io/github/forks/NeteaseYanxuan/OSSA)](https://github.com/NeteaseYanxuan/OSSA/network)
[![GitHub stars](https://img.shields.io/github/stars/NeteaseYanxuan/OSSA)](https://github.com/NeteaseYanxuan/OSSA/stargazers)

![OSSA LOGO](https://yanxuan.nosdn.127.net/static-union/16563138291bb87d.png)

一套基于[Taro](https://taro.aotu.io/)框架开发的多端 **UI** 组件库。目前已支持React语法。

## 示例
<img src='https://yanxuan.nosdn.127.net/static-union/1656314230833368.png' width='300' height='300' alt='OSSA DEMO' />

## 快速上手
OSSA目前支持Taro3，Taro1/Taro2版本敬请期待。

#### 安装

1. 首先需要有一个基于Taro的React项目，详细请参考[Taro快速开始](https://docs.taro.zone/docs/GETTING-STARTED)

```bash
npm install -g @tarojs/cli
taro init myApp
```

2. 安装OSSA

```bash
npm install ossaui
```

#### 使用

1. 在入口文件中引入样式文件

```javascript
// app.tsx
import 'ossaui/dist/style/index.scss'

// 或者在app.scss中引入
@import '~ossaui/dist/style/index.scss'
```
2. 配置编译时对组件库进行编译

> 如果不对组件库进行编译，组件库内的样式文件不会经过postcss处理

```javascript
module.exports = {
  // ...
  h5: {
    // ...
    esnextModules: ['ossaui']
  }
}
```


3. 在页面中引入`OSSA`组件

```javascript
// page/index.tsx
import { OsButton } from 'ossaui'

const demo = () => {
  return (
    <OsButton type='primary' onClick={()=>handleClick()}>按钮</OsButton>
  )
}
```

#### 按需引入

组件的样式文件既可以在入口文件引入，也可以在使用组件时，按需引入

```javascript
// page/index.tsx
import { OsButton } from 'ossaui'
```

> 注意，目前组件库的按需引入需要借助一个babel插件[babel-plugin-import](https://github.com/umijs/babel-plugin-import)来实现

首先需要安装
```bash
npm i babel-plugin-import -D
```

然后在`babel.config.js`文件中添加如下配置：
```javascript
plugins: [
  [
    'import',
    {
      libraryName: 'ossaui',
      customName: (name) => `ossaui/lib/components/${name.replace(/^os-/, '')}`,
      customStyleName: (name) => `ossaui/dist/style/components/${name.replace(/^os-/, '')}.scss`
    },
    'ossaui'
  ]
]
```

#### 预览

详细Taro项目预览可参考[Taro文档](https://docs.taro.zone/docs/GETTING-STARTED#%E7%BC%96%E8%AF%91%E8%BF%90%E8%A1%8C)

```bash
// 微信小程序预览
npm run dev:weapp

// h5预览
npm run dev:h5
```



## 链接
+ [仓库地址](https://github.com/NeteaseYanxuan/OSSA)
+ [bug反馈](https://github.com/NeteaseYanxuan/OSSA/issues/new?assignees=&labels=&template=bug-report.yml)
+ [功能新增](https://github.com/NeteaseYanxuan/OSSA/issues/new?assignees=&labels=%3Asparkles%3A+feature+request&template=feature-request.yml)
+ [代码贡献](./CONTRIBUTING.md)


## 致谢
本组件库的开发得益于Taro团队所提供的生态，部分组件库的设计灵感来源于[Taro UI](https://taro-ui.jd.com/#/)组件库，特此感谢。

本组件库能够开源，离不开以下同学的贡献：
- 蔡文姬
- 山下
- sven

在此一并感谢。

## 开源协议
[MIT](https://github.com/NeteaseYanxuan/OSSA/blob/main/LICENSE)

Copyright (c) 2022 Yanxuan
