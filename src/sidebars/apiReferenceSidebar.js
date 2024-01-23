const apiReferenceSidebar = [
  {
    type: "category",
    label: "Meadow API Reference",
    link: {
      type: "doc",
      id: "api/index",
    },
    items: [
      {
        type: "link",
        href: "/docs/api/Meadow/",
        label: "Meadow",
      },
    
      {
        type: "category",
        label: "Meadow.Foundation",
        link: {
          type: "doc",
          id: "api/Meadow.Foundation/index",
        },
        items: [
          "Meadow/Meadow.Foundation/Peripherals/index"
        ]
      },
      {
        type: "link",
        href: "/docs/api/Meadow.Foundation.FeatherWings/",
        label: "Meadow.Foundation.FeatherWings",
      },
      {
        type: "link",
        href: "/docs/api/Meadow.Foundation.Grove/",
        label: "Meadow.Foundation.Grove",
      },
      {
        type: "link",
        href: "/docs/api/Meadow.Foundation.mikroBUS/",
        label: "Meadow.Foundation.mikroBUS",
      },
    ],
  },
  

];

module.exports = apiReferenceSidebar;
