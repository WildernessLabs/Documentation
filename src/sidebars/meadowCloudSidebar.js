const meadowCloudSidebar = [
  {
    // Cloud Basics
    type: "category",
    label: "Cloud Basics",
    link: {
      type: "doc",
      id: "Meadow/Meadow.Cloud/index",
    },
    items: [
      "Meadow/Meadow.Cloud/Device_Provisioning/index",
      "Meadow/Meadow.Cloud/OtA_Updates/index",
      "Meadow/Meadow.Cloud/Health_Monitoring/index",
      "Meadow/Meadow.Cloud/Logs_Events/index",
      "Meadow/Meadow.Cloud/Command_Control/index",
    ],
  },
  {
    // Integrations
    type: "category",
    label: "Integrations",
    link: {
      type: "doc",
      id: "Meadow/Meadow.Cloud/Integrations/index",
    },
    items: [
      "Meadow/Meadow.Cloud/Integrations/Webhooks/index",
      "Meadow/Meadow.Cloud/Integrations/AzureEventHubs/index",
      "Meadow/Meadow.Cloud/Integrations/AzureEventGrid/index",
      "Meadow/Meadow.Cloud/Integrations/Datacake/index",
    ],
  },
];

module.exports = meadowCloudSidebar;
