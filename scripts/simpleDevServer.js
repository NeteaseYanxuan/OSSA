/* eslint-disable import/no-commonjs */

const connect = require("connect");
const servestatic = require("serve-static");
const { resolve } = require("path");
const { execSync } = require("child_process");

const workspace = resolve(__dirname, "..");
const demoPath = resolve(workspace, "packages", "ossa-demo");
const demoOutputPath = resolve(demoPath, "dist");
const host = "127.0.0.1";
const port = 10085;
const publicPath = "/OSSA";
const baseUrl = `http://${host}:${port}${publicPath}`;

// 开启静态文件服务
const app = connect();
app.use(publicPath, servestatic(demoOutputPath)); // servestatic(静态文件的入口目录)
app.listen(port);
console.log(`🎉 成功开启静态资源服务，地址为：${baseUrl}`);
