---
layout: Meadow
title: Device Provisioning
subtitle: Getting started
---

[< Meadow.Cloud](../)

## Overview

Before a device can enjoy things like Over-the-Air updates and Health Monitoring, it needs to get provisioned with Meadow.Cloud. This is a straightforward process with a few command-line steps:

1. Install the [Meadow.CLI](https://www.nuget.org/packages/WildernessLabs.Meadow.CLI) using the .NET CLI.

    ```console
    dotnet tool install --global WildernessLabs.Meadow.CLI`
    ```

1. Use the Meadow CLI to authenticate with Meadow.Cloud. You'll need to register an account with Wilderness Labs if you haven't already done so.

    ```console
    `meadow cloud login`
    ```

1. Connect to your Meadow device and provision it with the Meadow CLI. Adding a device name with the `--name` parameter is optional, but will make it easier to identify your device later.

    ```console
    meadow device provision --name "my device"
    ```

You can visit [https://www.meadowcloud.co](https://www.meadowcloud.co) to verify your device has been successfully provisioned.

With a device provisioned, check out the other Meadow.Cloud features.

* [Over-the-Air (OtA) Updates](../OtA_Updates/)
* [Health Monitoring](../Health_Monitoring/)
* [Logs + Events](../Logs_Events/)
* [Command + Control](../Command_Control/)
* [Integrations](../Integrations/)
