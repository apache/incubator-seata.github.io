// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const asfDict = [
  { target: 'https://www.apache.org', text: 'Foundation' },
  { target: 'https://www.apache.org/licenses', text: 'License' },
  {
    target: 'https://www.apache.org/events/current-event.html',
    text: 'Events',
  },
  {
    target: 'https://www.apache.org/foundation/sponsorship.html',
    text: 'Sponsorship',
  },
  {
    target: 'https://privacy.apache.org/policies/privacy-policy-public.html',
    text: 'Privacy',
  },
  { target: 'https://www.apache.org/security', text: 'Security' },
  { target: 'https://www.apache.org/foundation/thanks.html', text: 'Thanks' },
];
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apache Seata',
  favicon: 'img/seata_logo_small.jpeg',

  // Set the production url of your site here
  url: 'https://seata.apache.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'seata', // Usually your GitHub org/user name.
  projectName: 'incubator-seata-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  clientModules: [require.resolve('./src/analytics.ts'),require.resolve('./src/urlCompatible.ts')],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
    localeConfigs: {
      en: {
        label: 'En',
        htmlLang: 'en-US',
      },
      'zh-cn': {
        label: '中',
        htmlLang: 'zh-CN',
      },
    },
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'aes-config',
        content: 'pid=xux-opensource&user_type=101&uid=&username=&dim10=seata',
      },
    },
  ],
  // scripts: [
  //   {
  //     // src: 'https://www.googletagmanager.com/gtag/js?id=G-X4LJGF90X2',
  //     src: '/js/gtag.js',
  //     async: true,
  //   },
  //   {
  //     // src: 'https://hm.baidu.com/hm.js?104e73ef0c18b416b27abb23757ed8ee',
  //     src: '/js/hm.js',
  //     async: true,
  //   },
  //   {
  //     // src: 'https://g.alicdn.com/alilog/mlog/aplus_v2.js',
  //     src: '/js/aplus_v2.js',
  //     id: 'beacon-aplus',
  //     exparams: 'clog=o&aplus&sidx=aplusSidx&ckx=aplusCkx',
  //     defer: true,
  //   },
  //   {
  //     // src: 'https://g.alicdn.com/aes/??tracker/1.0.34/index.js,tracker-plugin-pv/2.4.5/index.js,tracker-plugin-event/1.2.5/index.js,tracker-plugin-jserror/1.0.13/index.js,tracker-plugin-api/1.1.14/index.js,tracker-plugin-perf/1.1.8/index.js,tracker-plugin-eventTiming/1.0.4/index.js',
  //     src: '/js/tracker.js',
  //     defer: true,
  //   },
  // ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'unversioned',
        path: 'unversioned',
        routeBasePath: '/',
        sidebarPath: require.resolve('./sidebarsUnversioned.js'),
        editUrl:
          'https://github.com/apache/incubator-seata-website/blob/docusaurus/',
        editCurrentVersion: true,
        editLocalizedFiles: true,
      }),
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/apache/incubator-seata-website/blob/docusaurus/',
          editCurrentVersion: false,
          editLocalizedFiles: true,
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: '全部博文',
          blogSidebarCount: 'ALL',
          editUrl:
            'https://github.com/apache/incubator-seata-website/blob/docusaurus/',
          editLocalizedFiles: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        // disable default sitemap generation
        sitemap: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content:
            'Seata,Seata官网,Seata official site,分布式事务,distributed transactions',
        },
      ],
      image: 'img/seata_logo.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true, // 禁止切换主题模式
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Seata Logo',
          src: 'img/seata_logo.png',
        },
        items: [
          {
            label: 'Home',
            to: '/',
            activeBaseRegex: '^/$',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            label: 'Docs',
            docid: '/overview/what-is-seata',
            position: 'right',
          },
          {
            label: 'Developers',
            type: 'doc',
            docId: 'developers/contributor-guide/new-contributor-guide_dev',
            position: 'right',
          },
          {
            label: 'Blog',
            to: '/blog',
            position: 'right',
          },
          {
            label: 'Users',
            to: '/users',
            position: 'right',
          },
          {
            label: 'Community',
            to: '/community',
            position: 'right',
          },
          {
            label: 'Download',
            to: '/download/seata-server',
            position: 'right',
          },
          {
            label: 'Solution',
            to: '/solution',
            position: 'right',
          },
          // {
          //   label: 'Console sample',
          //   to: 'http://demo.seata.io/',
          //   position: 'right',
          //   target: '_blank',
          // },
          {
            label: 'Designer',
            type: 'dropdown',
            position: 'right',
            items: [
              {
                label: 'Saga Designer',
                href: '/saga-designer',
                target: '_blank',
              },
              {
                label: 'Saga Designer (Legacy)',
                href: '/saga-designer-legacy',
                target: '_blank',
              },
            ],
          },
          {
            label: 'ASF',
            type: 'dropdown',
            position: 'right',
            items: asfDict.map((link) => ({
              label: link.text,
              to: link.target,
            })),
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      footer: {
        logo: {
          alt: 'Apache Incubator Logo',
          src: 'img/apache/incubator.svg',
          href: 'https://incubator.apache.org/',
          target: '_blank',
        },
        copyright: `
                  <div class="fs-12">
                    <div class="center-div">
                      <span>Apache Seata (incubating) is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.</span>
                    </div>
                    <br/>
                    <div class="center-div">
                      <span>Copyright © 2023-2024, The Apache Software Foundation Apache Seata, Seata, Apache, Apache Incubator, the Apache feather, the Apache Incubator logo and the Apache Seata project logo are either registered trademarks or trademarks of the Apache Software Foundation.</span>
                      <br />
                    </div>
                    <br/>
                  </div>
                  `,
      },
      prism: {
        theme: lightCodeTheme,
        additionalLanguages: ['java'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'ICHFIJRDZF',

        // Public API key: it is safe to commit it
        apiKey: '9dc9d497652065c6d77a6a384c1310fb',

        indexName: 'seata',
      },
    }),
};

export default config;
