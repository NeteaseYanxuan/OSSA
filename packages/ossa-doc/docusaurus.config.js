// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "OSSA",
  tagline: "",
  url: "https://neteaseyanxuan.github.io/OSSA/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "NeteaseYanxuan/OSSA", // Usually your GitHub org/user name.
  projectName: "ossa-doc", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans", "en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/NeteaseYanxuan/OSSA/tree/main/packages/ossa-doc/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/NeteaseYanxuan/OSSA/tree/main/packages/ossa-doc/",
        },
        // pages: {
        //   path: 'src/pages',
        //   routeBasePath: '.',
        //   include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "OSSA",
        logo: {
          alt: "OSSA Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "基础组件",
          },
          {
            to: "/loki",
            position: "right",
            label: "营销组件",
          },
          {
            to: "/blog",
            position: "right",
            label: "博客",
          },
          {
            href: "https://github.com/NetEaseYanxuan/OSSA",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      colorMode: {
        disableSwitch: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
