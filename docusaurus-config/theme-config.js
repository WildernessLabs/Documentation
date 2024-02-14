const lightCodeTheme = require('../src/themes/wlLight');
const darkCodeTheme = require('../src/themes/wlDark');
const algolia = require('./algolia.js');

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
      to: "/",
      activeBaseRegex: '^/$',
      position: 'left',
      label: 'Home',
    },
    {
      to: "Meadow/Meadow.OS",
      activeBaseRegex: "Meadow/Meadow.OS/$",
      sidebarId: 'meadowSidebar',
      position: 'left',
      label: 'Meadow.OS',
    },
    {
      to: "Meadow/Meadow.Cloud",
      sidebarId: 'meadowCloudSidebar',
      position: 'left',
      label: 'Meadow.Cloud',
    },
    {
      to: 'Hardware/Tutorials',
      activeBaseRegex: '^/Hardware/(Tutorials|Fundamentals)(/|$)',
      sidebarId: 'hardwareTutorialsSidebar',
      label: 'Hardware Tutorials',
      position: 'left',
    },
    {
      to: "Hardware/Reference",
      activeBaseRegex: '^/Hardware/((?!Tutorials|Fundamentals).)*$',
      sidebarId: 'hardwareReferenceSidebar',
      position: 'left',
      label: 'Hardware Reference',
    },
    {
      to: "docs/api",
      sidebarId: 'apiReferenceSidebar',
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
  algolia
});

module.exports = themeConfig;