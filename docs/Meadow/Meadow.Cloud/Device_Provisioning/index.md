---
layout: Meadow
title: Device Provisioning
subtitle: Getting started
---

## Overview

Before a device can enjoy things like Over-the-Air updates and Health Monitoring, it needs to get provisioned with [Meadow.Cloud](https://www.meadowcloud.co). This is a straightforward process with a few command-line steps:

<Tabs groupId="ide">
  <TabItem value="meadowhardware" label="Meadow F7 Hardware" default>

### Step 1 - Install Meadow.CLI

Install the [Meadow.CLI](https://www.nuget.org/packages/WildernessLabs.Meadow.CLI) using the .NET CLI.

```console
dotnet tool install --global WildernessLabs.Meadow.CLI
```

### Step 2 - Login to your Wilderness Labs account via Meadow.CLI

Use Meadow.CLI to authenticate with Meadow.Cloud. You'll need to [register](https://identity.wildernesslabs.co/signin/register) an account with Wilderness Labs if you haven't already done so.

```console
meadow login
```

### Step 3 - Select Meadow device to provision

Select the Meadow device you wish to provision to send data to Meadow.Cloud.

```console
meadow port select
```

### Step 4 - Provision the Meadow device

Provision your device with the Meadow CLI. Adding a device name with the `--name` parameter is optional, but will make it easier to identify your device later.

```console
meadow device provision --name "my device"
```


  </TabItem>
  <TabItem value="meadowdesktop" label="Meadow.Desktop" default>

### Step 1 - Install Meadow.CLI

Install the [Meadow.CLI](https://www.nuget.org/packages/WildernessLabs.Meadow.CLI) using the .NET CLI.

```console
dotnet tool install WildernessLabs.Meadow.CLI --global
```

### Step 2 - Login to your Wilderness Labs account via Meadow.CLI

Use Meadow.CLI to authenticate with your Wilderness Labs developer account. You'll need to [register](https://identity.wildernesslabs.co/signin/register) an account with Wilderness Labs if you haven't already done so.

```console
meadow login
```

### Step 3 - Create a private SSH Key

When running [Meadow.Desktop](../../Getting_Started/Getting_Started_Meadow%2EDesktop) apps, provisioning a machine will require having SSH keys set up before trying to provision the host machine for Meadow.Cloud use.

```console
ssh-keygen -t rsa -m pem
```

:::caution
Generate the keys to the default `.ssh` location. Do not set a passphrase for the keys, otherwise will prevent the provisioning process from accessing them.
:::

If you skip this step, you will see an error when you provision your Meadow.Desktop host device.

```console
> meadow device provision
Retrieving your user and organization information...
Requesting device public key (this will take a minute)...
SSH folder not found
```

### Step 4 - Select local development machine to provision

If you are provisioning your local development machine to send data to Meadow.Cloud, set up the route to the local machine manually. Use the command:

```console
meadow config route local
```

### Step 5 - Provision the Meadow device

Provision your dev machine with the Meadow CLI. Adding a device name with the `--name` parameter is optional, but will make it easier to identify your device later.

```console
meadow device provision --name "my dev machine"
```

  </TabItem>
</Tabs>

You can visit [Meadow.Cloud](https://www.meadowcloud.co) to verify your device has been successfully provisioned.

### Check out other Meadow.Cloud Features

With a device provisioned, check out the other Meadow.Cloud features.

* [Over-the-Air (OtA) Updates](../OtA_Updates/)
* [Health Monitoring](../Health_Monitoring/)
* [Logs + Events](../Logs_Events/)
* [Command + Control](../Command_Control/)
* [Integrations](../Integrations/)
