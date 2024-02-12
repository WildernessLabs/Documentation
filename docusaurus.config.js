// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const math = require("remark-math");
const katex = require("rehype-katex");

const themeConfig = require("./docusaurus-config/theme-config");
const getTopNav = require("./docusaurus-config/nav");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Wilderness Labs Developer Portal",
  tagline: "Wilderness Labs developer documentation and resource site.",
  favicon: "img/favicon.ico",
  staticDirectories: ["docs", "static"],

  headTags: [
    {
      tagName: "script",
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-M7WHZPTR');`,
      attributes: {},
    },
  ],

  customFields: {
    email: "hello@wildernesslabs.co",
    twitter_username: "wildernesslabs",
    github_username: "wildernesslabs",
    topNav: getTopNav(),
    tabGroups: [
      {
        id: "os",
        defaultTab: "windows",
      },
      {
        id: "ide",
        defaultTab: "visualstudio2022",
      },
    ],
  },

  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-client-redirects",
      {
        // fromExtensions: ["html", "htm"], // /myPage.html -> /myPage
        // toExtensions: ["exe", "zip"], // /myAsset -> /myAsset.zip (if latter exists)
        redirects: [
          {
            to: "/Hardware/Reference/Electronic_Fundamentals/Voltage/",
            from: "/Hardware/Reference/Equations_and_Laws/Voltage/",
          },
          // // Redirect from multiple old paths to the new path
          // {
          //   to: "/docs/newDoc2",
          //   from: ["/docs/oldDocFrom2019", "/docs/legacyDocFrom2016"],
          // },
        ],
      },
    ],
  ],

  // Set the production url of your site here
  url: "https://developer.wildernesslabs.co/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "WildernessLabs", // Usually your GitHub org/user name.
  projectName: "Documentation", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./src/sidebars/sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/WildernessLabs/Documentation/tree/main/",
          routeBasePath: "/", // <-- removes "docs" from url
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/WildernessLabs/Documentation/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        googleTagManager: {
          containerId: "GTM-M7WHZPTR",
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig,
};

module.exports = config;
