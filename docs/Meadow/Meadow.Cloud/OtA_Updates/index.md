---
layout: Meadow
title: Over-the-Air (OtA) Updates
subtitle: Getting started with OtA
---

## Overview

Meadow.Cloud provides secure, Over-the-Air (OtA) updates, which enable you to push a new version of a Meadow application to a device in the field over the network.

To get OtA setup you need to first [provision your device](/Meadow/Meadow.Cloud/Device_Provisioning/). Then, you need to package an application that enables the _Update Service_ and upload it to Meadow.Cloud. Finally, you can publish your package to be received by your devices.

:::caution
OtA Updates are not available for Meadow Feather F7 v1 boards due to memory limitations. However, we're currently working on implementing mechanisms to make update sizes much smaller so we can make the download process faster and support more devices with limited resources.
:::

## Enable Update Service in Meadow.Core

By default, OtA is not enabled. Follow the steps to enable OtA in your application.

1. In `app.config.yaml`, add the following:

    ```yaml
    MeadowCloud:
        Enabled: true
        EnableUpdates: true
    ```

    * (Optional) To see more detailed output, enable `trace` logging by adding the following lines in `app.config.yaml`:

        ```yaml
        Logging:
            LogLevel:
                Default: "Trace"
        ```

1. Next, add event handlers for monitoring, downloading, checking download progress and applying the updates.

    ```csharp
    using Meadow.Update;
    ...
    public override async Task Run()
    {
        var svc = Resolver.UpdateService;
        
        // Uncomment to clear any persisted update info. This allows installing 
        // the same update multiple times, such as you might do during development.
        // svc.ClearUpdates();

        svc.StateChanged += (sender, updateState) =>
        {
            Resolver.Log.Info($"UpdateState {updateState}");
        };

        svc.RetrieveProgress += (updateService, info) =>
        {
            short percentage = (short)((double)info.DownloadProgress / info.FileSize * 100);

            Resolver.Log.Info($"Downloading... {percentage}%");
        };

        svc.UpdateAvailable += async (updateService, info) =>
        {
            Resolver.Log.Info($"Update available!");

            // Queue update for retrieval "later"
            await Task.Delay(5000);

            updateService.RetrieveUpdate(info);
        };

        svc.UpdateRetrieved += async (updateService, info) =>
        {
            Resolver.Log.Info($"Update retrieved!");

            await Task.Delay(5000);

            updateService.ApplyUpdate(info);
        };
        ...

    }
    ```

    This code adds event handlers to monitor state changes during the update process (`StateChanged`), get download progress info (`RetrieveProgress`), download the new package, `updateService.RetrieveUpdate(info)`. and send the new file(s) to the bootloader, `updateService.ApplyUpdate(info)`.

    Additionally, you can also monitor State changes on a Meadow.Cloud connection

    ```csharp
    ...
    var cloudService = Resolver.MeadowCloudService;

    cloudService.ConnectionStateChanged += (sender, cloudConnectionState) =>
    {
        Resolver.Log.Info($"CloudConnectionState: {cloudConnectionState}");
    };
    ...
    ```

## MPAK Creation

An .mpak file is an application bundle. We'll use the application we created in the previous section.

1. Create your MPAK with the Meadow CLI, replacing `[target Meadow OS version]` with your target Meadow OS version (such as `1.10.0.2`) and give whatever name you want to provide.

    ```console
    meadow package create application_path/your_app.csproj -n "name of MPAK".mpak
    ```

    This command creates an .mpak file with the contents of your application and additional metadata.
1. Upload your newly created .mpak bundle to Meadow.Cloud.

    ```console
    meadow package upload [path to .mpak file]
    ```

1. Visit [https://www.meadowcloud.co/my/packages](https://www.meadowcloud.co/my/packages) to verify your package was successfully uploaded.

## Publish

* To publish via CLI, run `meadow package publish <your_package_id>`.
* To publish via Web, go to [https://www.meadowcloud.co/my/packages](https://www.meadowcloud.co/my/packages) and click **Publish**.

### Check out other Meadow.Cloud Features

With a Meadow app deployed that can be updated via Over-the-Air (OtA) updates, check out the other Meadow.Cloud features.

* [Provision more Devices](../Device_Provisioning/)
* [Health Monitoring](../Health_Monitoring/)
* [Logs + Events](../Logs_Events/)
* [Command + Control](../Command_Control/)
* [Integrations](../Integrations/)
