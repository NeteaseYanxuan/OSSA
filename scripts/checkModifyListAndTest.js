/* eslint-disable import/no-commonjs */
const { exec } = require("shelljs");
const glob = require("glob");

const needTestWhiteList = [
  "packages/ossa/src/components/**/*.tsx",
  "packages/ossa/src/components/**/*.ts",
  "packages/ossa/src/**/*.scss",
  "packages/ossa/src/index.ts",
  "packages/ossa-demo/src/components/**/*.tsx",
  "packages/ossa-demo/src/components/**/*.ts",
  "packages/ossa-demo/src/pages/**/**",
  "packages/**/test/**/*.spec.js",
  "packages/**/__test__/**/*.spec.js",
];
console.log(`🔬 检查是否修改核心 ui 组件`);
const needTestFileList = needTestWhiteList
  .map((p) => {
    return glob.sync(p, {
      ignore: ["node_modules"],
    });
  })
  .flat(1);
const curBranch = exec(`git rev-parse --abbrev-ref HEAD`, {
  encoding: "utf-8",
  silent: true,
}).stdout.replace("\n", "");
const modifyFiles = exec(
  `git fetch origin main && git diff --stat main...${curBranch} --name-only`,
  { encoding: "utf-8", silent: true }
).stdout;

if (modifyFiles.length === 0) process.exit(0);
const modifyFileList = modifyFiles
  .split("\n")
  .map((item) => item.replace(/^.*\s+/, ""))
  .filter((item) => !!item);

const modifyNeedTestFileList = modifyFileList.filter((item) =>
  needTestFileList.includes(item)
);

if (modifyNeedTestFileList.length) {
  console.log(
    `👓 修改了${modifyNeedTestFileList.length}个核心 ui 组件文件，运行测试任务`
  );
  const { code } = exec(`npx pnpm --filter=ossa-demo test:background`);
  process.exit(code);
} else {
  console.log(`👓 未修改核心 ui 组件，无需运行测试任务`);
}
