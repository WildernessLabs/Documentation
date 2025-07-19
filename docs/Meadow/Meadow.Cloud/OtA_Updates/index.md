---
layout: Meadow
title: Over-the-Air (OtA) Updates
subtitle: Getting started with OtA
---

## Overview

Meadow.Cloud provides secure, automatic, Over-the-Air (OtA) updates, which enable you to push a new versions of Meadow.OS, Meadow applications, or even a config change to a device in the field over its configured network.

### Opt-out Model

OtA updates in Meadow follow an opt-out model, in the sense that if a device is provisioned with Meadow.Cloud, and OtA updates are set to `true` in its configuration file, an update that is pushed to the device from Meadow.Cloud will automatically install upon receipt of notification, unless the application chooses not to install it.

### Sending an OtA Update

To send an update to a device, you must do the following:

1. **[Provision the device in Meadow.Cloud](/Meadow/Meadow.Cloud/Device_Provisioning/)** - 
To enable OtA updates (and other Meadow.Cloud integrations such as crash-reporting, command + control, etc.) you need to first [provision your device](/Meadow/Meadow.Cloud/Device_Provisioning/). 
2. **Enable Meadow.Cloud in Config** - Meadow.Cloud and OtA updates must both be enabled in the `app.config.yaml` file.
3. **Create an .MPAK and Push from Meadow.Cloud** - Updates are packaged in *Meadow Package Files* (.MPAKs) using the Meadow.CLI and then uploaded to Meadow.Cloud and sent to *Device Collections*. This process is also [optionally automatable via GitHub Actions](/Meadow/Meadow.Cloud/CI_CD/), so you can integrate updates into your Devops workflow.

:::caution
OtA Updates are not available for Meadow Feather F7 v1 boards due to memory limitations. However, we're currently working on implementing mechanisms to make update sizes much smaller so we can make the download process faster and support more devices with limited resources.
:::

## Enabling Meadow.Cloud + Updates in `app.config.yaml`

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

As long as your device has an internet connection, it'll automatically apply updates as they're received.

## Optionally Tying into Update Events

You can, optionally, tie into the update notification to either cancel an update, or apply it later. 

For example, the following code listens for an update and manually applies it:

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

This code adds event handlers to monitor state changes during the update process (`StateChanged`), get download progress info (`RetrieveProgress`), download the new package (`updateService.RetrieveUpdate(info)`), and send the new file(s) to the bootloader (`updateService.ApplyUpdate(info)`).

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

To build an `.mpak` update file, follow the instructions below:

1. Create your MPAK with the Meadow CLI, replacing `[target Meadow OS version]` with your target Meadow OS version (such as `1.10.0.2`) and give whatever name you want to provide.

    ```console
    meadow cloud package create application_path/your_app.csproj -n "name of MPAK".mpak
    ```

    This command creates an .mpak file with the contents of your application and additional metadata.
1. Upload your newly created .mpak bundle to Meadow.Cloud.

    ```console
    meadow cloud package upload [path to .mpak file]
    ```

1. Visit [https://www.meadowcloud.co/my/packages](https://www.meadowcloud.co/my/packages) to verify your package was successfully uploaded.

## Publishing

* To publish via CLI, run `meadow cloud package publish <your_package_id> -c <id of the collection>`.
* To publish via Web, go to [https://www.meadowcloud.co/my/packages](https://www.meadowcloud.co/my/packages) and click **Publish**.

### Check out other Meadow.Cloud Features

With a Meadow app deployed that can be updated via Over-the-Air (OtA) updates, check out the other Meadow.Cloud features.

* [Provision more Devices](../Device_Provisioning/)
* [Health Monitoring](../Health_Monitoring/)
* [Logs + Events](../Logs_Events/)
* [Command + Control](../Command_Control/)
* [Integrations](../Integrations/)
