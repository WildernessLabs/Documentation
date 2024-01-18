const meadowOsSidebar = [
  {
    // Getting Started
    type: "category",
    label: "Getting Started",
    link: {
      type: "doc",
      id: "Meadow/Getting_Started/index",
    },
    items: [
      "Meadow/Getting_Started/Assemble_Meadow/index",
      "Meadow/Getting_Started/Deploying_Meadow/index",
      "Meadow/Getting_Started/Hello_World/index",
      "Meadow/Getting_Started/Getting_Started_Core-Compute_Module/index",

      {
        // Getting Started Desktop
        type: "category",
        label: "Meadow.Desktop",
        link: {
          type: "doc",
          id: "Meadow/Getting_Started/Getting_Started_Meadow.Desktop/index",
        },
        items: [
          "Meadow/Getting_Started/Getting_Started_Meadow.Desktop/Getting_Started_Linux/index",
          "Meadow/Getting_Started/Getting_Started_Meadow.Desktop/Getting_Started_Windows/index",
        ],
      },
    ],
  },
  {
    // Meadow Basics
    type: "category",
    label: "Meadow Basics",
    link: {
      type: "doc",
      id: "Meadow/Meadow_Basics/index",
    },
    items: [
      // categories can have sub categories
      {
        type: "category",
        label: "Meadow Apps",
        link: {
          type: "doc",
          id: "Meadow/Meadow_Basics/Apps/index",
        },
        items: [
          "Meadow/Meadow_Basics/Apps/Lifecycle_Events/index",
          "Meadow/Meadow_Basics/Apps/Sleep/index",
        ],
      },

      {
        type: "category",
        label: "Input/Output (IO)",
        link: {
          type: "doc",
          id: "Meadow/Meadow_Basics/IO/index",
        },
        items: [
          "Meadow/Meadow_Basics/IO/Analog/index",
          {
            type: "category",
            label: "Digital",
            link: {
              type: "doc",
              id: "Meadow/Meadow_Basics/IO/Digital/index",
            },
            items: [
              "Meadow/Meadow_Basics/IO/Digital/PWM/index",
              {
                type: "category",
                label: "Protocol Communications",
                link: {
                  type: "doc",
                  id: "Meadow/Meadow_Basics/IO/Digital/Protocols/index",
                },
                items: [
                  "Meadow/Meadow_Basics/IO/Digital/Protocols/I2C/index",
                  "Meadow/Meadow_Basics/IO/Digital/Protocols/SPI/index",
                  "Meadow/Meadow_Basics/IO/Digital/Protocols/UART/index",
                ],
              },
            ],
          },
          "Meadow/Meadow_Basics/IO/Power/index",
        ],
      },
      "Meadow/Meadow_Basics/Units/index",
      "Meadow/Meadow_Basics/Events_and_IObservable/index",
      "Meadow/Meadow_Basics/Meadow_CLI/index",

      {
        type: "category",
        label: "Troubleshooting",
        link: {
          type: "doc",
          id: "Meadow/Meadow_Basics/Troubleshooting/index",
        },
        items: [
          "Meadow/Meadow_Basics/Troubleshooting/Linux/index",
          "Meadow/Meadow_Basics/Troubleshooting/macOS/index",
          "Meadow/Meadow_Basics/Troubleshooting/VisualStudio/index",
        ],
      },

      {
        type: "category",
        label: "Meadow Hardware",
        link: {
          type: "doc",
          id: "Meadow/Meadow_Basics/Hardware/index",
        },
        items: [
          "Meadow/Meadow_Basics/Hardware/F7v1/index",
          "Meadow/Meadow_Basics/Hardware/F7v2/index",
          {
            type: "category",
            label: "Core-Compute Module",
            link: {
              type: "doc",
              id: "Meadow/Getting_Started/Getting_Started_Core-Compute_Module/index",
            },
            items: ["Meadow/Meadow.OS/Core-Compute_SD_Card/index"],
          },
        ],
      },
      "Meadow/Meadow_Basics/Status/index",
    ],
  },
  {
    // Meadow.OS
    type: "category",
    label: "Meadow.OS",
    link: {
      type: "doc",
      id: "Meadow/Meadow.OS/index",
    },
    items: [
      "Meadow/Meadow.OS/Bluetooth/index",
      {
        type: "category",
        label: "Core-Compute Module",
        link: {
          type: "doc",
          id: "Meadow/Meadow.OS/Configuration/index",
        },
        items: [
          "Meadow/Meadow.OS/Configuration/Application_Settings_Configuration/index",
          "Meadow/Meadow.OS/Configuration/OS_Device_Configuration/index",
          "Meadow/Meadow.OS/Configuration/WiFi_Configuration/index",
        ],
      },
      "Meadow/Meadow.OS/File_System/index",
      {
        type: "category",
        label: "Networking",
        link: {
          type: "doc",
          id: "Meadow/Meadow.OS/Networking/index",
        },
        items: [
          "Meadow/Meadow.OS/Networking/Antenna/index",
        ],
      }, 
      "Meadow/Meadow.OS/Cellular/index",
      "Meadow/Meadow.OS/Updates/index",
      "Meadow/Meadow.OS/RTC/index",
      "Meadow/Meadow.OS/SQLite/index",
      "Meadow/Meadow.OS/Threading/index",
      "Meadow/Meadow.OS/Automatic_Restarts/index",
    ],
  },
  {
    // Meadow.Foundation
    type: "category",
    label: "Meadow.Foundation",
    link: {
      type: "doc",
      id: "Meadow/Meadow.Foundation/index",
    },
    items: [
      "Meadow/Meadow.Foundation/Getting_Started/index",
      "Meadow/Meadow.Foundation/Peripherals/index",
      {
        type: "category",
        label: "Libraries and Frameworks",
        link: {
          type: "doc",
          id: "Meadow/Meadow.Foundation/Libraries_and_Frameworks/index",
        },
        items: [
          "Meadow/Meadow.Foundation/Libraries_and_Frameworks/MicroLayout/index",
          "Meadow/Meadow.Foundation/Libraries_and_Frameworks/MicroGraphics/index",
          "Meadow/Meadow.Foundation/Libraries_and_Frameworks/Maple.Server/index",
          "Meadow/Meadow.Foundation/Libraries_and_Frameworks/TextDisplayMenu/index",
          "Meadow/Meadow.Foundation/Libraries_and_Frameworks/Gps_Gnss_Nmea_Processor/index",
        ],
      },
      
      
      "Meadow/Meadow.Foundation/Working_with_Sensors/index",
      "Meadow/Meadow.Foundation/Unified_GPIO_Arch/index",
    ],
  },
  {
    // Release Notes
    type: "category",
    label: "Release Notes",
    link: {
      type: "doc",
      id: "Meadow/Release_Notes/index",
    },
    items: [
      "Meadow/Release_Notes/Roadmap/index",
      {
        type: "category",
        label: "Meadow Release Condidates",
        link: {
          type: "doc",
          id: "Meadow/Release_Notes/Release-Candidates/index",
        },
        items: [
          "Meadow/Release_Notes/Release-Candidates/Lifecycle_Update/index"
        ]
      },
      "Meadow/Release_Notes/Beta6/index",
      "Meadow/Release_Notes/Beta5/index",
      "Meadow/Release_Notes/Beta4/index",
      "Meadow/Release_Notes/Beta3/index",
      "Meadow/Release_Notes/Beta2/index",
    ],
  },
  {
    // Hack Kit Guide
    type: "category",
    label: "Hack Kit Guide",
    link: {
      type: "doc",
      id: "https://developer.wildernesslabs.co/HackKit/index",
    },
    items: [
      "https://developer.wildernesslabs.co/HackKit/Contents/index",
      "https://developer.wildernesslabs.co/HackKit/Projects/",
      "https://developer.wildernesslabs.co/HackKit/BlogSeries/"
    ],
  },
];

module.exports = meadowOsSidebar;