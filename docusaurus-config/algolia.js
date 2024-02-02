let algolia = {
  // The application ID provided by Algolia
  appId: 'HB1LKRZI2Z',

  // Public API key: it is safe to commit it
  apiKey: '7c48237516468f23f78facf8ee4bdde0',

  indexName: 'developer-developer-wildernesslabs',

  // Optional: see doc section below
  contextualSearch: true,

  // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
  externalUrlRegex: 'external\\.com|domain\\.com',

  // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
  // replaceSearchResultPathname: {
  //   from: '/docs/', // or as RegExp: /\/docs\//
  //   to: '/',
  // },

  // Optional: Algolia search parameters
  searchParameters: {},

  // Optional: path for search page that enabled by default (`false` to disable it)
  searchPagePath: 'search',

  //... other Algolia params
};

  module.exports = algolia;