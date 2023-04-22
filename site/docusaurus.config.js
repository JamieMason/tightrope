// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('./prism-theme/synthwave-84');
const darkCodeTheme = require('./prism-theme/synthwave-84');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'tightrope',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jamiemason.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/tightrope',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JamieMason', // Usually your GitHub org/user name.
  projectName: 'tightrope', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        docsRouteBasePath: '/',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          path: './docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/JamieMason/tightrope/tree/master/site/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/JamieMason/tightrope/tree/master/site/',
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
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      navbar: {
        title: 'tightrope',
        logo: {
          alt: 'tightrope Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            activeBasePath: 'guide',
            to: 'docs/installation',
            position: 'left',
            label: 'Docs',
          },
          {
            activeBasePath: 'api',
            to: 'api/fn',
            position: 'left',
            label: 'API',
          },
          {
            href: 'https://github.com/sponsors/JamieMason',
            label: 'Sponsor',
            position: 'right',
          },
          {
            className: 'header-github-link',
            href: 'https://github.com/JamieMason/tightrope',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Jamie Mason.`,
        links: [
          {
            title: 'Feedback',
            items: [
              {
                label: 'Report a Bug',
                href: 'https://github.com/JamieMason/tightrope/issues/new?template=bug_report.md',
              },
              {
                label: 'Request a Feature',
                href: 'https://github.com/JamieMason/tightrope/issues/new?template=feature_request.md',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/fold_left',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/JamieMason/tightrope',
              },
            ],
          },
        ],
      },
    }),
};

module.exports = config;
