---
layout: Meadow
sidebar_label: Meadow.Cloud
title: Setting up Meadow.Cloud
subtitle: Setting up Meadow.Cloud
---

### Step 1 - Create a Meadow.Cloud account

Step info

### Step 2 - Provision a Device

Before a device can enjoy things like [Over-the-Air updates](../../Meadow.Cloud/OtA_Updates/index.md) and [Health Monitoring](../../Meadow.Cloud/Health_Monitoring/index.md), it needs to get provisioned with Meadow.Cloud. This is a straightforward process with a few command-line steps:

1. If you havent, you need to [install the Meadow.CLI](../Meadow.CLI/index.md) to interact with Meadow cloud commands.

1. Use the Meadow CLI to authenticate with Meadow.Cloud. You'll need to register an account with Wilderness Labs if you haven't already done so.

    ```console
    meadow cloud login
    ```

1. Connect to your Meadow device and provision it with the Meadow CLI. Adding a device name with the `--name` parameter is optional, but will make it easier to identify your device later.

    ```console
    meadow cloud device provision --name "my device"
    ```

You can visit [https://www.meadowcloud.co](https://www.meadowcloud.co) to verify your device has been successfully provisioned.

### Step 3 - Configure Cloud Updates

Step info

### Step 4 - Verify logs in Meadow.Cloud

Step info