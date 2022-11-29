/* eslint-disable jsx-quotes */
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="OSSA 官网">
      <main className={styles.container}>
        <div className={styles.left}>
          <p className={styles.title}>@ossa/loki</p>
          <p className={styles.slogon}>
            <span>功能强大</span>且<span>专业可靠</span>的营销组件
          </p>
          <p className={styles.desc}>
            <span>多端</span>
            <span>配置简单</span>
            <span>定制自由</span>
          </p>

          <div className={styles.btnGrounp}>
            <Link
              href="https://github.com/NeteaseYanxuan/OSSA"
              className={clsx(styles.github, styles.btn)}
            >
              GITHUB
            </Link>
            <Link
              href="./docs/营销组件/start"
              className={clsx(styles.start, styles.btn)}
            >
              快速开始
            </Link>
          </div>
        </div>

        <div className={styles.bg}>
          <div className={styles.icon}>
            <img src="/img/logo2.png" />
          </div>
          <img className={styles.namePic} src="/img/name.svg" />
        </div>
      </main>
    </Layout>
  );
}
