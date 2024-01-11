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
        "Meadow/Getting_Started/Deployment/index",
        "Meadow/Getting_Started/Getting_Started_Core-Compute_Module/index",
        "Meadow/Getting_Started/Getting_Started_Meadow.Desktop/index",
        "Meadow/Getting_Started/Hello_World/index",
        "Meadow/Getting_Started/Setup/index",
        "Meadow/Getting_Started/Update_USB_Driver/index",
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

        //...and can sit alongside regular items
        "Meadow/Meadow_Basics/IO/index",
        "Meadow/Meadow_Basics/IO/Analog/index",
        "Meadow/Meadow_Basics/IO/Digital/index",
        "Meadow/Meadow_Basics/IO/Digital/PWM/index",
        "Meadow/Meadow_Basics/IO/Digital/Protocols/index",
        "Meadow/Meadow_Basics/IO/Digital/Protocols/I2C/index",
        "Meadow/Meadow_Basics/IO/Digital/Protocols/SPI/index",
        "Meadow/Meadow_Basics/IO/Digital/Protocols/UART/index",
        "Meadow/Meadow_Basics/IO/Power/index",
        "Meadow/Meadow_Basics/Units/index",
        "Meadow/Meadow_Basics/Events_and_IObservable/index",
        "Meadow/Meadow_Basics/Meadow_CLI/index",
        "Meadow/Meadow_Basics/Troubleshooting/index",
        "Meadow/Meadow_Basics/Troubleshooting/Linux/index",
        "Meadow/Meadow_Basics/Troubleshooting/macOS/index",
        "Meadow/Meadow_Basics/Troubleshooting/VisualStudio/index",
        "Meadow/Meadow_Basics/Hardware/index",
        "Meadow/Meadow_Basics/Hardware/F7v1/index",
        "Meadow/Meadow_Basics/Hardware/F7v2/index",
        "Meadow/Getting_Started/Getting_Started_Core-Compute_Module/index",
        "Meadow/Meadow.OS/Core-Compute_SD_Card/index",
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
        "Meadow/Meadow.OS/Automatic_Restarts/index",
        "Meadow/Meadow.OS/Bluetooth/index",
        "Meadow/Meadow.OS/Cellular/index",
        "Meadow/Meadow.OS/Configuration/Application_Settings_Configuration/index",
        "Meadow/Meadow.OS/Configuration/OS_Device_Configuration/index",
        "Meadow/Meadow.OS/Configuration/WiFi_Configuration/index",
        "Meadow/Meadow.OS/Configuration/index",
        "Meadow/Meadow.OS/Core-Compute_SD_Card/index",
        "Meadow/Meadow.OS/File_System/index",
        "Meadow/Meadow.OS/Networking/Antenna/index",
        "Meadow/Meadow.OS/Networking/index",
        "Meadow/Meadow.OS/RTC/index",
        "Meadow/Meadow.OS/SQLite/index",
        "Meadow/Meadow.OS/Threading/index",
        "Meadow/Meadow.OS/Updates/index",
        "Meadow/Meadow.OS/Watchdog/index",
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
        "Meadow/Meadow.Foundation/Libraries_and_Frameworks/index",
        "Meadow/Meadow.Foundation/Working_with_Sensors/index",
        "Meadow/Meadow.Foundation/Peripherals/index",
        "Meadow/Meadow.Foundation/Unified_GPIO_Arch/index",
        "Meadow/Meadow.Foundation/API_Samples/index",
      ],
    },
    {
      // Release Notes
      type: "category",
      label: "Release Notes",
      items: [
        "Meadow/Release_Notes/index",
        "Meadow/Release_Notes/Release-Candidates/index",
        "Meadow/Release_Notes/Beta6/index",
        "Meadow/Release_Notes/Beta5/index",
        "Meadow/Release_Notes/Beta4/index",
        "Meadow/Release_Notes/Beta3/index",
        "Meadow/Release_Notes/Beta2/index",
      ],
    },
  ];

  module.exports = meadowOsSidebar;