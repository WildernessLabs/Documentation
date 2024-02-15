---
layout: Meadow
sidebar_label: Meadow.CLI
title: Meadow.CLI
subtitle: Command-Line-Interface for Meadow
---

![Meadow.CLI Command Line Interface](wildernesslabs_meadow_cli_getting_started.jpg)

The Meadow Command-Line-Interface (`Meadow.CLI`) provides a way to interact with the board and perform functions via a terminal/command-line window. 

The Meadow.CLI tool supports deployment workflows as well as device and file management including file transfers, and MCU reset.

In addition to being able to be used from a terminal window, the `Meadow.CLI.Core` library can also be used programmatically, within a .NET application. In fact, the IDE extensions use that directly. You can find the source [here](https://github.com/wildernesslabs/Meadow.CLI).

## Installation and Updating

<Tabs groupId="os">
  <TabItem value="windows" label="Windows">


### Install .NET SDK

Download and install the latest [.NET SDK](https://dotnet.microsoft.com/en-us/download/dotnet/6.0).

### Install or update Meadow CLI

To install Meadow.CLI, execute the following command in your console:

```console
dotnet tool install WildernessLabs.Meadow.CLI --global
```

To update, simply change the `install` keyword to `update`:

```console
dotnet tool update WildernessLabs.Meadow.CLI --global
```


  </TabItem>
  <TabItem value="macos" label="macOS">


### Install .NET SDK

Download and install the latest [.NET SDK](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) for your Mac's processor architecture.

Even if you are working on an ARM-based computer, such as Apple M1, M1 Pro, or M2 CPUs, you should still install the x86 version of the .NET SDK.

### Install or update Meadow CLI
To install Meadow CLI, execute the following command in your terminal:

```console
dotnet tool install WildernessLabs.Meadow.CLI --global
```

To update Meadow CLI, if already installed, execute the following command in your terminal:

```console
dotnet tool update WildernessLabs.Meadow.CLI --global
```

If you are working on an ARM-based Mac (M1, M1 Pro, M2 CPU), you will also need to explicitly add the x64 version of `libusb` and add an additional location to your `PATH` variable that aren't added by default on those systems.

```console
arch -x86_64 brew install libusb
export PATH=/usr/local/share/dotnet/x64/:$PATH
```


   </TabItem>
   <TabItem value="linux" label="Linux">


Please note: Linux may require `sudo` to access USB devices.

### Install .NET SDK

Download and install the latest [.NET SDK](https://dotnet.microsoft.com/en-us/download/dotnet/6.0).

### Install or update Meadow CLI
To install Meadow CLI, execute the following command in your terminal:

```console
dotnet tool install WildernessLabs.Meadow.CLI --global
```

To update Meadow CLI, if already installed, execute the following command in your terminal:

```console
dotnet tool update WildernessLabs.Meadow.CLI --global
```


  </TabItem>
</Tabs>


## Executing Commands

Once installed, Meadow.CLI is accessible from a terminal prompt via the `meadow` command, and command arguments are passed via a fluent syntax, for instance, the following command will download the latest Meadow.OS:

```console
meadow firmware download
```

## Enumerating Commands & Help

This guide covers a few of the most common commands, but there are many more to explore. For a complete list of commands, execute the following from a terminal window:

```console
meadow -h
```

Additionally, you can get additional help information for any given command by passing `-h` as option to that command. For instance, the following will provide guidance on the `listen` command:

```console
meadow listen -h
```

## Working with Ports

When a Meadow device is hooked up to a host computer, it communicates via a serial port (e.g. `COM3` on Windows or `UART3` on macOS/Linux) over USB. If you only have one Meadow device plugged in, Meadow.CLI will attempt to locate the port and send commands via that. However, if you have multiple devices, you may need to manually specify the port.

To list serial ports, execute the following:

```console
meadow port list
```

You can then specify the port via the `meadow port select` command. If it detects only one port, it'll select it automatically, but If multiple Meadow devices are connected, the command will list them and it'll prompt which port should select:

```console
meadow port select
```

You only need to specify the port once; all subsequent commands will remember the specified port.

## List of Commands

### Working with Apps

* `meadow app build`  - Compile a Meadow application
* `meadow app debug`  - Debug a running application
* `meadow app deploy` - Deploy a built Meadow application to a target device
* `meadow app run`    - Builds, trims and deploys a Meadow application to a target device
* `meadow app trim`   - Runs an already-compiled Meadow application through reference trimming

### Meadow.Cloud commands

* `meadow cloud apikey create`   - Create a Meadow.Cloud API key
* `meadow cloud apikey delete`   - Delete a Meadow.Cloud API key
* `meadow cloud apikey list`     - List your Meadow.Cloud API keys
* `meadow cloud apikey update`   - Update a Meadow.Cloud API key
* `meadow cloud collection list` - List Meadow Collections
* `meadow cloud command publish` - Publish a command to Meadow devices via Meadow.Cloud
* `meadow cloud login`           - Log in to Meadow.Cloud
* `meadow cloud logout`          - Log out of Meadow.Cloud
* `meadow cloud package create`  - Create a Meadow Package (MPAK)
* `meadow cloud package list`    - Lists all Meadow Packages (MPAK)
* `meadow cloud package publish` - Publishes a Meadow Package (MPAK)
* `meadow cloud package upload`  - Upload a Meadow Package (MPAK) to Meadow.Cloud
 
### Device commands

* `meadow device clock` - Gets or sets the device clock (in UTC time)
* `meadow device info` - Get the device info
* `meadow device provision` - Registers and prepares connected device for use with Meadow Cloud
* `meadow device reset` - Resets the device

### File commands

* `meadow file delete`  - Deletes a file from the device
* `meadow file initial` - Display the initial bytes from a device file
* `meadow file list`    - Lists the files in the current device directory
* `meadow file read`    - Reads a file from the device and writes it to the local file system
* `meadow file write`   - Writes one or more files to the device from the local file system

### Firmware commands

* `meadow firmware default`  - Sets the current default firmware package
* `meadow firmware delete`   - Delete a local firmware package
* `meadow firmware download` - Download a firmware package
* `meadow firmware list`     - List locally available firmware
* `meadow firmware write`    - Writes firmware files to a connected meadow device

### Runtime Commands

* `meadow runtime disable` - Sets the runtime to NOT run on the Meadow board then resets it
* `meadow runtime enable`  - Sets the runtime to run on the Meadow board then resets it
* `meadow runtime state`   - Gets the device's current runtime state

### Additional Commands

* `meadow config`             - Read or modify the meadow CLI configuration
* `meadow developer`          - Sets a specified developer parameter on the Meadow
* `meadow dfu install`        - Deploys a built Meadow application to a target device
* `meadow flash erase`        - Erase the contents of the device flash storage
* `meadow listen`             - Listen for console output from Meadow
* `meadow trace disable`      - Disable trace logging on the Meadow
* `meadow trace enable`       - Enable trace logging on the Meadow
* `meadow trace level`        - Sets the trace logging level on the Meadow
* `meadow uart trace disable` -   Disables trace log output to UART
* `meadow uart trace enable`  -  Enables trace log output to UART

## Support

Having trouble using Meadow.CLI? 
* File an [issue](https://github.com/WildernessLabs/Meadow.Desktop.Samples/issues) with a repro case to investigate, and/or
* Join our [public Slack](http://slackinvite.wildernesslabs.co/), where we have an awesome community helping, sharing and building amazing things using Meadow.