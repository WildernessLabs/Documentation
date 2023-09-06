---
layout: Meadow
title: Over-the-Air (OtA) Updates
subtitle: Getting started with OtA
---
[< Meadow.Cloud](../)  
# Overview
Meadow.Cloud provides secure, Over-the-Air (OtA) updates, which enable you to push a new version of a Meadow application to a device in the field over the network.

To get OtA setup you need to first provision your device. Then, you need to package an application that enables the _Update Service_ and upload it to Meadow.Cloud. Finally, you can publish your package to be received by your devices.

## Provision Device

First, you need to register your device on Meadow.Cloud.

* Visit [https://www.meadowcloud.co](https://www.meadowcloud.co) to setup your Meadow.Cloud account.
* Connect your Meadow device.
* Ensure you are signed in to Meadow.Cloud for command-line use. Via Meadow.CLI, run: `meadow cloud login`. This will launch a web browser to sign in to Wilderness Labs with the account you set up for Meadow.Cloud.
* Via Meadow.CLI, run: `meadow device provision`. This will take a couple minutes to complete. Visit to [https://www.meadowcloud.co/devices](https://www.meadowcloud.co/devices) to verify your device was successfully added.

## Enable Update Service in Meadow.Core

By default, OtA is not enabled. Follow the steps to enable OtA in your application.  

1. In `app.config.yaml`, add the following:

    ```yaml
    Update:
      Enabled: true
    ```

    * (Optional) To see more detailed output, enable trace logging by adding the following lines in `app.config.yaml`:

        ```yaml
        Logging:
          LogLevel:
              Default: "Trace"
        ```

1. Next, add event handlers for downloading and applying the updates.

    ```csharp
    using Meadow.Update;
    ...
    public override async Task Run()
    {
        var svc = Resolver.Services.Get<IUpdateService>() as Meadow.Update.UpdateService;
        svc.ClearUpdates(); // uncomment to clear persisted info

        svc.OnUpdateAvailable += (updateService, info) =>
        {
            Resolver.Log.Info("Update available!");

            // queue it for retreival "later"
            Task.Run(async () =>
            {
                await Task.Delay(5000);
                updateService.RetrieveUpdate(info);
            });
        };

        svc.OnUpdateRetrieved += (updateService, info) =>
        {
            Resolver.Log.Info("Update retrieved!");

            Task.Run(async () =>
            {
                await Task.Delay(5000);
                updateService.ApplyUpdate(info);
            });
        };

        ...

    }
    ```

    This code adds event handers to download the new package, `updateService.RetrieveUpdate(info);`. and send the new file(s) to the bootloader, `updateService.ApplyUpdate(info);`

## MPAK Creation

An .mpak file is a bundle that includes application and OS files. We'll use the application we created in the previous section.

* Deploy the OtA-enabled application to a device. (Currently, the linker only runs during a deployment. This step can be skipped [once this gets fixed](https://github.com/WildernessLabs/Meadow.CLI/issues/287).)
* Run `meadow package create -a your_app_folder/bin/Debug/netstandard2.1/postlink_bin -v 0.9.8.1`. This creates a .mpak file with the contents of your application and binaries for the OS version specified.
* To upload your newly created .mpak to Meadow.Cloud, run `meadow package upload -p [path to .mpak file]`. Visit [https://www.meadowcloud.co/packages](https://www.meadowcloud.co/packages) to verify your package was successfully uploaded.

## Publish

* To publish via CLI, run `meadow package publish -p your_package_id`.  
* To publish via Web, go to [https://www.meadowcloud.co/packages](https://www.meadowcloud.co/packages) and click `Publish`.
---
layout: Meadow
title: Over-the-Air (OtA) Updates
subtitle: Getting setup with OtA on Meadow.Cloud
---

# Overview

Meadow.Cloud provides secure, Over-the-Air (OtA) updates, which enable you to push a new version of a Meadow application to a device in the field over the network.

To get OtA setup you need to first [provision your device](/Meadow/Meadow.Cloud/Device_Provisioning/). Then, you need to package an application that enables the _Update Service_ and upload it to Meadow.Cloud. Finally, you can publish your package to be received by your devices.

## Enable Update Service in Meadow.Core

By default, OtA is not enabled. Follow the steps to enable OtA in your application.  

1. In `app.config.yaml`, add the following:

    ```yaml
    Update:
      Enabled: true
    ```

    * (Optional) To see more detailed output, enable trace logging by adding the following lines in `app.config.yaml`:

        ```yaml
        Logging:
          LogLevel:
              Default: "Trace"
        ```

1. Next, add event handlers for downloading and applying the updates.

    ```csharp
    using Meadow.Update;
    ...
    public override async Task Run()
    {
        var svc = Resolver.Services.Get<IUpdateService>() as Meadow.Update.UpdateService;
        svc.ClearUpdates(); // uncomment to clear persisted info

        svc.OnUpdateAvailable += (updateService, info) =>
        {
            Resolver.Log.Info("Update available!");

            // queue it for retrieval "later"
            Task.Run(async () =>
            {
                await Task.Delay(5000);
                updateService.RetrieveUpdate(info);
            });
        };

        svc.OnUpdateRetrieved += (updateService, info) =>
        {
            Resolver.Log.Info("Update retrieved!");

            Task.Run(async () =>
            {
                await Task.Delay(5000);
                updateService.ApplyUpdate(info);
            });
        };

        ...

    }
    ```

    This code adds event handlers to download the new package, `updateService.RetrieveUpdate(info);`. and send the new file(s) to the bootloader, `updateService.ApplyUpdate(info);`

## MPAK Creation

An .mpak file is an application bundle. We'll use the application we created in the previous section.

* Run `meadow package create -p application_path/your_app.csproj -v [Target Meadow OS version] -n "name of MPAK"`. An example target Meadow OS version is `1.3.0.0` This command creates an .mpak file with the contents of your application and additional metadata.
* To upload your newly created .mpak to Meadow.Cloud, run `meadow package upload -p [path to .mpak file]`. Visit [https://www.meadowcloud.co/packages](https://www.meadowcloud.co/packages) to verify your package was successfully uploaded.

## Publish

* To publish via CLI, run `meadow package publish -p your_package_id`.  
* To publish via Web, go to [https://www.meadowcloud.co/packages](https://www.meadowcloud.co/packages) and click `Publish`.
