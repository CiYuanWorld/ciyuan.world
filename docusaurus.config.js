// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
const lightCodeTheme = require('prism-react-renderer/themes/dracula');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '次元世界',
  tagline: '开放、开源、连接',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '次元世界',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
        //   {
        //     type: 'doc',
        //     docId: 'intro',
        //     position: 'left',
        //     label: 'Tutorial',
        //   },
        //   {to: '/blog', label: 'Blog', position: 'left'},
        {
            label: '世界列表',
            type: 'docSidebar',
            sidebarId: 'worldlist',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '热门世界',
            items: [
                {
                    label: 'Go 世界',
                    href: 'https://go.ciyuan.world/',
                },
                {
                    label: '前端 世界',
                    href: 'https://fe.ciyuan.world/',
                  },
            ],
          },
          {
            title: '构建中',
            items: [
              {
                label: 'iOS 世界',
                href: 'https://ios.ciyuan.world/',
              },
              {
                label: 'PHP 世界',
                href: 'https://php.ciyuan.world/',
                },
                {
                label: 'Java 世界',
                href: 'https://java.ciyuan.world/',
                },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'About',
                to: 'https://github.com/CiYuanWorld',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/CiYuanWorld',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/CiYuanWorld" target="_blank">次元世界</a>, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
