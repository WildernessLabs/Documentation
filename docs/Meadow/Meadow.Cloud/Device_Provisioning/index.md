---
layout: Meadow
title: Device Provisioning
subtitle: 
---

Before a device can enjoy things like Over-the-Air updates and Health Monitoring, it needs to get provisioned with Meadow.Cloud. This is a straight forward process, see the steps below:

* First things first, install the [Meadow.CLI](https://www.nuget.org/packages/WildernessLabs.Meadow.CLI) by running `dotnet tool install --global WildernessLabs.Meadow.CLI`
* Next, run `meadow cloud login` to authenticate. You'll need to register an account with Wilderness Labs if you haven't already done so.
* Finally, connect your Meadow device and run, `meadow device provision --name "my device"`. Adding a device name is optional, but recommended.

You can visit https://www.meadowcloud.co/ to ensure your device has been successfully provisioned.
