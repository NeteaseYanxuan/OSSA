import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='OSSA 官网'
    >
      <main className={styles.container}>
        <div className={styles.left}>
          <p className={styles.title}>OSSA</p>
          <p className={styles.slogon}>Taro官方推荐的企业级UI库</p>
          <div className={styles.logo}>
            <img src='/img/logo.svg' />
          </div>
          
          <div className={styles.btnGrounp}>
            <Link href='https://github.com/NeteaseYanxuan/OSSA' className={clsx(styles.github, styles.btn)}>GITHUB</Link>
            <Link href='/docs/start' className={clsx(styles.start, styles.btn)}>快速开始</Link>
          </div>
        </div>

        <div className={styles.bg}>
          <div className={styles.icon}>
            <img src='/img/logo2.png' />
          </div>
          <img className={styles.namePic} src='/img/name.svg' />
        </div>
      </main>
    </Layout>
  );
}
