// @ts-check
const path = require('path')
const beian = '粤ICP备2021156225号-1'

const announcementBarContent = `升级打怪中`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NforNight Having Fun',
  titleDelimiter: '-',
  url: 'https://doc.nfornight.fun',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'NforNight',
  projectName: 'blog',
  tagline: '很懒，还在完善中',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/logo.png',
    // announcementBar: {
    //   id: 'announcementBar-3',
    //   content: announcementBarContent,
    // },
    metadata: [
      {
        name: 'keywords',
        content:'NforNight'
      },
      {
        name: 'keywords',
        content: 'blog',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      }
    },
    navbar: {
      title: 'NforNight',
      logo: {
        alt: 'NforNight',
        src: 'img/logo.webp',
        srcDark: 'img/logo.webp',
      },
      items: [
        // {
        //   label: '标签',
        //   to: 'tags',
        //   position: 'right',
        // },
        {
          label: '攻略库',
          to: 'archive',
          position: 'right',
        },
        {
          label: '打怪升级',
          position: 'right',
          items: [
            // {
            //   label: '技术笔记',
            //   to: 'docs/skill/',
            // },
            {
              label: '工具推荐',
              to: 'docs/tools/',
            },
            {
              label: '前端示例',
              to: 'https://example.nfornight.fun',
            },
          ],
        },
        {
          label: '小工具',
          position: 'right',
          items: [
            {
              label: 'API接口',
              to: 'https://api.nfornight.fun',
            },
            // {
            //   label: 'JS代码混淆与还原',
            //   to: 'https://js-de-obfuscator.vercel.app',
            // },
            // {
            //   label: 'CyberChef在线加解密',
            //   to: 'https://cipher.kuizuo.cn',
            // },
            // {
            //   label: 'NforNight在线工具',
            //   to: 'https://tools.kuizuo.cn',
            // },
            // {
            //   label: 'NforNight网盘',
            //   to: 'https://pan.kuizuo.cn',
            // },
          ],
        },
        {
          label: '导航',
          position: 'right',
          to: 'website',
        },
        {
          label: '项目',
          position: 'right',
          to: 'project',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '打怪升级',
          items: [
            // {
            //   label: '技术笔记',
            //   to: 'docs/skill',
            // },
            // {
            //   label: '实战项目',
            //   to: 'project',
            // },
            {
              label: '前端示例',
              to: 'https://example.nfornight.fun',
            },
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: '关于我',
              to: '/about',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/nfornight',
            },
            {
              label: '掘金',
              href: 'https://juejin.cn/user/1227473016065592',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/xxxxxxx',
            }
          ],
        },
        {
          title: '更多',
          items: [
        //       {
        //     label: '友链',
        //     position: 'right',
        //     to: 'friends',
        //   }, 
            {
            label: '导航',
            position: 'right',
            to: 'website',
          },
          {
            html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`
          },
        ],
        },
      ],
      copyright: `<p><a href="http://beian.miit.gov.cn/" >${beian}</a></p><p>Copyright © ${new Date().getFullYear()} NforNight Built with Docusaurus.</p>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['java', 'php'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    algolia: {
      appId: 'UT3OM34H4A',
      apiKey: 'ee89bf3cd6ab04e57e47a41bbd595ac5',
      indexName: 'nfornight',
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {}
    },
    matomo: {
      matomoUrl: 'https://matomo.nfornight.fun/',
      siteId: '1',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
    // giscus: {
    //   repo: 'kuizuo/blog',
    //   repoId: 'MDEwOlJlcG9zaXRvcnkzOTc2MjU2MTI=',
    //   category: 'General',
    //   categoryId: 'DIC_kwDOF7NJDM4CPK95',
    //   mapping: 'title',
    //   lang: 'zh-CN',
    // },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {
      github: 'https://github.com/nfornight',
      twitter: 'https://twitter.com/xxxxx',
      juejin: 'https://juejin.cn/user/1227473016065592',
      csdn: 'https://blog.csdn.net/nfornight',
      qq: 'https://wpa.qq.com/msgrd?v=3&amp;uin=214918461&amp;site=qq',
      cloudmusic: 'https://music.163.com/#/user/home?id=1347214554',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        // googleAnalytics: {
        //   trackingID: "UA-118572241-1",
        //   anonymizeIP: true, // Should IPs be anonymized?
        // },
        gtag: {
          trackingID: "G-S4SD5NXWXF",
          anonymizeIP: true, // Should IPs be anonymized?
        },
        // debug: true,
      }),
    ],
  ],
  // themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'), {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/nfornight`,
        editLocalizedFiles: false,
        blogSidebarTitle: '近期文章',
        blogSidebarCount: 10,
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: 'NforNight',
          copyright: `Copyright © ${new Date().getFullYear()} NforNight Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
      }
    ],
    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    [
      '@docusaurus/plugin-ideal-image', {
        disableInDev: false,
      }
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51 139 255)',
          },
        ],
      },
    ],
  ],
  stylesheets: [],
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },
}

module.exports = config
