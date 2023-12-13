// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('./src/themes/wlLight');
const darkCodeTheme = require('./src/themes/wlDark');



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wilderness Labs Developer Portal',
  tagline: 'Wilderness Labs developer documentation and resource site.',
  favicon: 'img/favicon.ico',
  staticDirectories: ['docs', 'static'],
  customFields: {
    email: 'hello@wildernesslabs.co',
    twitter_username: 'wildernesslabs',
    github_username: 'wildernesslabs',
  },

  plugins: ['docusaurus-plugin-sass'],

  // Set the production url of your site here
  url: 'https://wildernesslabs.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'WildernessLabs', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl:
            'https://github.com/WildernessLabs/Documentation/tree/main/',
          routeBasePath: '/' // <-- removes "docs" from url
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/WildernessLabs/Documentation/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // TODO: Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // title: 'My Site',
        logo: {
          alt: 'Wilderness Labs',
          src: 'img/logo.svg',
        },
        items: [],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp', 'powershell']
      },
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      }
    }),
};

module.exports = config;
