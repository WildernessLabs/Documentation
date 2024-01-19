const lightCodeTheme = require('../src/themes/wlLight');
const darkCodeTheme = require('../src/themes/wlDark');

let themeConfig = /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
({
  // TODO: Replace with your project's social card
  image: 'img/docusaurus-social-card.jpg',
  navbar: {
    // title: 'My Site',
    logo: {
      href: "https://www.wildernesslabs.co/",
      alt: 'Wilderness Labs',
      src: 'img/logo.svg',
    },
    items: [{
      href: "/",
      sidebarId: 'meadowSidebar',
      position: 'left',
      label: 'Home',
    },
    {
      href: "/Meadow/Meadow.OS",
      sidebarId: 's',
      position: 'left',
      label: 'Meadow.OS',
    },
    {
      href: "/Meadow/Meadow.Cloud",
      sidebarId: 'meadowCloudSidebar',
      position: 'left',
      label: 'Meadow.Cloud',
    },
    {
      href: '/Hardware/Tutorials/Electronics',
      sidebarId: 'hardwareTutorialsSidebar',
      label: 'Hardware Tutorials',
      position: 'left',
    },
    {
      href: "/Hardware",
      sidebarId: 'hardwareReferenceSidebar',
      position: 'left',
      label: 'Hardware Reference',
    },
    {
      href: "/docs/api",
      position: 'left',
      label: 'API Docs',
    },
    {
      href: 'https://github.com/WildernessLabs/Documentation',
      label: 'GitHub',
      position: 'right',
    },],
  },
  footer: {
    style: 'dark',
    links: [
      {
        items: [
          {
            label: 'Facebook',
            href: 'https://www.facebook.com/wildernesslabs',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/wildernesslabs',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/WildernessLabs',
          },
          {
            label: 'Slack',
            href: 'http://slackinvite.wildernesslabs.co/',
          },
        ],
      },
      {
        title: 'Contact',
        items: [
          {
            label: 'hello@wildernesslabs.co',
            href: 'mailto:hello@wildernesslabs.co',
          },
        ],
      },
      {
        // title: 'Docs',
        items: [
          {
            label: 'Meadow',
            to: '/Meadow',
          },
          {
            label: 'Netduino',
            to: '/Netduino',
          },
          {
            label: 'Community',
            to: 'https://community.wildernesslabs.co/',
          },
          {
            label: 'Developers',
            to: '/',
          },
          {
            label: 'Blog',
            to: 'https://blog.wildernesslabs.co/',
          },
        ],
      },
      {
        title: 'More',
        items: [
          {
            label: 'Terms of Use',
            href: 'https://www.wildernesslabs.co/terms',
          },
          {
            label: 'Privacy Policy',
            href: 'https://www.wildernesslabs.co/privacy',
          },
        ],
      },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} Wilderness Labs`,
  },
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
    additionalLanguages: ['csharp', 'powershell']
  },
  colorMode: {
    defaultMode: 'light',
    respectPrefersColorScheme: true,
  },
  algolia: {
    // The application ID provided by Algolia
    appId: 'A4D5IOMP59',

    // Public API key: it is safe to commit it
    apiKey: 'b72b27b61280e89266704664307c36e5',

    indexName: 'developer-usaurus-wildernesslabs',

    // Optional: see doc section below
    contextualSearch: true,

    // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
    externalUrlRegex: 'external\\.com|domain\\.com',

    // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
    replaceSearchResultPathname: {
      from: '/docs/', // or as RegExp: /\/docs\//
      to: '/',
    },

    // Optional: Algolia search parameters
    searchParameters: {},

    // Optional: path for search page that enabled by default (`false` to disable it)
    searchPagePath: 'search',

    //... other Algolia params
  },
});

module.exports = themeConfig;