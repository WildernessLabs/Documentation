let footer = {
    style: "dark",
    links: [
      {
        items: [
          {
            label: "Facebook",
            href: "https://www.facebook.com/wildernesslabs",
          },
          {
            label: "Twitter",
            href: "https://twitter.com/wildernesslabs",
          },
          {
            label: "GitHub",
            href: "https://github.com/WildernessLabs",
          },
          {
            label: "Slack",
            href: "http://slackinvite.wildernesslabs.co/",
          },
        ],
      },
      {
        title: "Contact",
        items: [
          {
            label: "hello@wildernesslabs.co",
            href: "mailto:hello@wildernesslabs.co",
          },
        ],
      },
      {
        // title: 'Docs',
        items: [
          {
            label: "Meadow",
            to: "/Meadow/",
          },
          {
            label: "Netduino",
            to: "/Netduino/",
          },
          {
            label: "Community",
            to: "https://community.wildernesslabs.co/",
          },
          {
            label: "Developers",
            to: "/",
          },
          {
            label: "Blog",
            to: "https://blog.wildernesslabs.co/",
          },
        ],
      },
      {
        title: "More",
        items: [
          {
            label: "Terms of Use",
            href: "https://www.wildernesslabs.co/terms",
          },
          {
            label: "Privacy Policy",
            href: "https://www.wildernesslabs.co/privacy",
          },
        ],
      },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} Wilderness Labs`,
  };

  module.exports = footer;