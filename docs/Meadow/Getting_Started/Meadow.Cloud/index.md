---
layout: Meadow
sidebar_label: Meadow.Cloud
title: Setting up Meadow.Cloud
subtitle: Setting up Meadow.Cloud
---

### Step 1 - Create a Meadow.Cloud account

To access all Meadow.Cloud features, you first need to [sign up](https://identity.wildernesslabs.co/signin/register) to Meadow.Cloud if you havent created an account yet.

### Step 2 - Provision a Device

Before a device can enjoy things like [Over-the-Air updates](../../Meadow.Cloud/OtA_Updates/index.md) and [Health Monitoring](../../Meadow.Cloud/Health_Monitoring/index.md), it needs to get provisioned with Meadow.Cloud. This is a straightforward process with a few command-line steps:

1. You'll need to [install the Meadow.CLI](../../Getting_Started/Meadow%2ECLI/) to interact with Meadow.Cloud commands.

1. Use the Meadow.CLI to authenticate with Meadow.Cloud:

    ```console
    meadow cloud login
    ```

    This opens a browser with the Wilderness Labs Login page. After authenticating, you can go back to the terminal and it should confirmed you've successfully logged in.

1. Connect your Meadow device to your development machine and provision it with the Meadow.CLI. Adding a device name with the `--name` parameter is optional, but will make it easier to identify your device later.

    ```console
    meadow cloud device provision --name "my device"
    ```

1. After confirming that the Meadow device has been provisioned, you can go to [https://www.meadowcloud.co](https://www.meadowcloud.co) to verify your device has been successfully provisioned.

### Step 3 - Enable Meadow.Cloud integration in a Meadow App

Step info

### Step 4 - Verify logs in Meadow.Cloud

Step info