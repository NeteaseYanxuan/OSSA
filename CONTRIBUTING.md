# OSSA Contributing Guide

非常高兴您有兴趣参与贡献OSSA项目，在开始之前，请阅读以下贡献指引。

## 开始
本项目使用了[pnpm](https://pnpm.io/installation)，请确保在已全局安装

1. Fork这个仓库，并将你账户下的仓库clone到本地。

2. 创建一个新的分支

   ```bash
   git checkout -b {BRANCH_NAME}
   ```

3. 在根目录下执行

   ```bash
   pnpm start
   ```

4. 在packages/ossa目录下进行您的创作

5. 在根目录下编译更改之后ossa-ui

   ```bash
   pnpm build
   ```

6. 在packages/ossa-demo中预览您的更改

   ```bash
   pnpm dev:demo
   ```

7. 描述您的更新
   ```bash
   pnpm changeset
   // 根据命令行提示，描述您这次更改
   ```
## 提交 commit

OSSA遵从 [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)，在输入 commit message 的时候请务必遵从此规范。

## Pull Request 指南

1. 务必保证 `pnpm build` 能够编译成功；
2. 务必保证提交的代码遵循相关包中的 `.eslintrc`, `.tslintrc`, `.stylelintrc` 所规定的规范；
3. 当相关包的 `package.json` 含有 `npm test` 命令时，必须保证所有测试用例都需要通过；
4. 当相关包有测试用例时，请给你提交的代码也添加相应的测试用例；
5. 提交代码 commit 时，commit 信息需要遵循 [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)。
6. 如果提交的代码非常多或功能复杂，可以把 PR 分成几个 commit 一起提交。我们在合并时会根据情况 squash。

