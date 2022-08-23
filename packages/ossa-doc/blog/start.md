---
slug: ossa-launch
title: 网易严选多端组件库OSSA正式开源
authors: [caedmon]
tags: [OSSA]
---

## 摘要

经过三年的积累和迭代，网易严选多端组件库 —— OSSA，正式开源啦～。诚挚邀请对多端有诉求的团队进行试用和交流，同时热烈欢迎对`开源`、`多端`、`组件库`任意之一感兴趣的同学参与到OSSA组件库的建设中来~🙌

## 背景

### 1. 为什么是多端？

为了适应业务的发展，网易严选前端主站团队在业务迭代过程中，先后上线了微信小程序、字节小程序以及支付宝小程序。另外还有还有其他业务线需要同时维护小程序端和H5端。在综合考虑**用户体验、开发效能**之后，我们决定将一部分业务使用多端框架[Taro](https://docs.taro.zone/docs)进行开发（框架选型不是本文的重点，在次不详细展开）。

### 2. 为什么自己做组件库？

在选定Taro框架之后，从保证网易严选视觉风格统一以及提升开发体验的角度，我们便开始寻找一款合适的基础组件库。在2019的时间节点，Taro生态下可供选择的组件库还很有限。当前时间点开源的组件库如下表所示。在调研对比之后，我们发现现有组件库的视觉风格与网易严选现有风格差异较大，**不符合设计部门的要求**。综合考虑之后，我们决定新建一套自己的基础组件库。

| 组件库                                                       | stars                                                        | last commit                                                  | 特点                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | --------------------------------- |
| [taro-ui](https://github.com/NervJS/taro-ui)                 | ![GitHub Repo stars](https://img.shields.io/github/stars/NervJS/taro-ui?style=social) | ![GitHub Repo Last Commit](https://img.shields.io/github/last-commit/NervJS/taro-ui?style=social) | Taro官方维护，React生态           |
| [nutui](https://github.com/jdf2e/nutui)                      | ![GitHub Repo stars](https://img.shields.io/github/stars/jdf2e/nutui?style=social) | ![GitHub Repo Last Commit](https://img.shields.io/github/last-commit/jdf2e/nutui?style=social) | 京东维护，Vue生态                 |
| [nutui-react](https://github.com/jdf2e/nutui-react)          | ![GitHub Repo stars](https://img.shields.io/github/stars/jdf2e/nutui-react?style=social) | ![GitHub Repo Last Commit](https://img.shields.io/github/last-commit/jdf2e/nutui-react?style=social) | 京东维护，React生态               |
| [taroify](https://github.com/mallfoundry/taroify)            | ![GitHub Repo stars](https://img.shields.io/github/stars/mallfoundry/taroify?style=social) | ![GitHub Repo Last Commit](https://img.shields.io/github/last-commit/mallfoundry/taroify?style=social) | 社区维护，React生态，基于Vant UI  |
| [mp-colorui](https://github.com/yinLiangDream/mp-colorui)    | ![GitHub Repo stars](https://img.shields.io/github/stars/yinLiangDream/mp-colorui?style=social) | ![GitHub Repo Last Commit](https://img.shields.io/github/last-commit/yinLiangDream/mp-colorui?style=social) | 社区维护，React生态               |
| [tard](https://github.com/jd-antelope/tard)                  | ![GitHub Repo stars](https://img.shields.io/github/stars/jd-antelope/tard?style=social) | ![GitHub Repo Last Commit](https://img.shields.io/github/last-commit/jd-antelope/tard?style=social) | 京东商羚前端团队维护，React生态   |
| [taro-qn-components](https://github.com/ShuyunFF2E/taro-qn-components) | ![GitHub Repo stars](https://img.shields.io/github/stars/ShuyunFF2E/taro-qn-components?style=social) | ![GitHub Repo Last Commit](https://img.shields.io/github/last-commit/ShuyunFF2E/taro-qn-components?style=social) | 数云前端团队维护，React生态，PC   |
| [taro-color-ui](https://github.com/Gengar-666/taro-color-ui) | ![GitHub Repo stars](https://img.shields.io/github/stars/Gengar-666/taro-color-ui?style=social) | ![GitHub Repo Last Commit](https://img.shields.io/github/last-commit/Gengar-666/taro-color-ui?style=social) | 社区维护，React生态，基于Color UI |



## OSSA组件库

### 特性

- 基于 `Taro` 开发的 UI 组件，支持`React`生态
- 一套组件可以在 `微信小程序`，`支付宝小程序`，`字节小程序`，`H5` 多端适配运行
- 30+ 个高质量组件，覆盖移动端主流场景
- 使用 `TypeScript` 编写，提供完整的类型定义
- 支持按需引入
- 完善的自动化测试用例

### 架构设计

<img src="https://yanxuan.nosdn.127.net/static-union/165874190079dfa8.png" alt="OSSA.drawio" width="400" />

OSSA的整体架构设计如上图所示。需要说明的是，我们在准备开始的时候，并没有选择真正的从0到1。首先，Taro官方提供了[通过Taro创建UI组件库的模版👍](https://docs.taro.zone/docs/ui-lib)，通过该模版我们可以快速的创建组件库。其次，我们的核心诉求是符合我们设计规范并且好用的基础组件。所以综合考虑下，我们结合团队内部诉求，在官方模版的基础上改造之后进行组件库的开发。

### menorepo

目前OSSA包括基础组件、demo，后续还会有官网、业务组件库以及其他基于Taro的物料等。为了方便项目管理，我们采用monorepo的形式管理项目。提到monorepo，首先想到的应该就是lerna，但是lerna有好长一段时间都没有在维护了（最近又开始有commit），在调研了一些开源项目之后，我们决定使用pnpm workspace来进行monorepo的管理。

### 编译/打包

OSSA在编译打包这一块，目前是使用的官网组件库模版提供的能力。目前会通过rollup编译输出`cjs`和`esm`两种格式的文件，另外也会通过tsc直接编译一份组件代码进行输出。在使用时，我们发现目前的esm格式的包，在Taro项目中编译时，组件库并没有被`tree shaking`，这意味着，虽然输出了esm的包，但是我们的组件库还是不支持开箱即用的`按需引入`，在尝试过在rollup编译阶段进行各种优化之后，我们觉得应该是组件的一些写法具有副作用，导致tree shaking失败。我们将在后续对组件库的迭代中进行更新。

为了支持按需引入，我们暂时推荐在Taro项目中使用bebel插件[babel-plugin-import](https://github.com/umijs/babel-plugin-import)进行处理。需要在`babel.config.js`中添加如下配置：

```javascript title="babel.config.js"
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

### 部署/发包

由于pnpm目前还没有lerna一样完善的发包功能，官方推荐搭配[changesets](https://pnpm.io/using-changesets)共同使用。通过changeset也可以实现交互式的发包流程。通过配置Github actions就可以做到自动触发发布流程。

### 规范

为了组件库的长远健康发展，在确定开发组件库的初期，我们便成立了组件评审委员会，并制定了组件新增的流程及规范，新增组件的流程如下图所示。从图中可以看出，在确认了需要新增一个组件之后，首先需要委员会的设计同学进行交互及视觉的设计。在视觉和交互通过评审之后，才会进入正式的开发，开发完成之后还需要各方的验证及走查才能正式入库。

![image-20220722141159393](https://yanxuan.nosdn.127.net/static-union/165847248317992b.png)

在组件开发层面，除了通过`eslint`、`stylelint`来保证编码风格统一，另外还制定了详细的命名及样式书写规范。为了保证质量，目前组件库的demo使用`cypress`进行了完善的用例测试。

### 组件

目前OSSA开源的仅包含基础组件库部分，我们对基础组件按照基础、输入、输出、反馈以及导航这几类进行了划分。具体组件不在此一一列举，具体大家可以扫描DEMO二维码进行体验

**微信小程序：**

<img src='https://yanxuan.nosdn.127.net/static-union/1656314230833368.png' width='200' height='200' alt='OSSA DEMO' />

**H5:**

<img src='https://yanxuan.nosdn.127.net/static-union/16594970359a4f1b.png' width='200' height='200' alt='OSSA DEMO' />



除了基础组件，我们在业务开发过程中，特别是在电商领域也积累了一些业务组件。此外网易严选前端团队在其他业务上的实践也积累了一些基于Taro的多端物料，我们将在后续完善之后，一并开源，敬请大家期待～🥳。

## 后续规划

OSSA组件库后续将重点在以下几个方面进行迭代，**希望对多端以及对OSSA感兴趣的同学可以一块参与OSSA的建设**。

1. **更加完善的组件测试用例。**作为可持续高质量迭代的OSSA组件库，目前已针对H5端全覆盖E2E用例，我们将持续性的丰富我们的用例集和用例质量，以保证OSSA高质量发展。我们将在之后的迭代中完善OSSA全端的测试用例。

1. **扩充基础组件库**。目前OSSA已有30+组件，虽然已经能够满足日常开发的诉求，但是还是有些场景没有覆盖到，后续我们将在完善现有基础组件的基础上，对基础组件库进行扩充。

1. **开源业务组件库及物料**。我们在多端上踩了很多坑，总结了一些经验，也沉淀了一些业务相关的组件和物料，为了让大家少踩坑，也为了反哺社区，我们后续会将业务组件和物料也逐步开源。

1. **OSSA以及Taro社区的建议**。我们会积极收集来自社区的声音，集合到OSSA后续规划中，同时我们也非常欢迎社区同学能积极输入。OSSA期待大家共同建言献策。

## 写在最后

本组件库的开发得益于Taro团队所提供的生态，部分组件库的设计灵感来源于[Taro UI](https://taro-ui.jd.com/#/)组件库，特此感谢。

本组件库能够开源，离不开以下同学的贡献：

- 蔡文姬

- 山下

- sven

在此一并感谢。

**最后，欢迎大家star😆，以及进群交流。**

Github：[![](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/NeteaseYanxuan/OSSA)

微信交流群：<img src="https://yanxuan.nosdn.127.net/static-union/16584732150d099a.png" width="200"  />
