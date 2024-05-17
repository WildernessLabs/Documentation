---
layout: Meadow
sidebar_label: Meadow.CLI
title: Meadow.CLI
subtitle: Command-Line-Interface for Meadow
---

![Meadow.CLI command-line interface running in a terminal window.](wildernesslabs_meadow_cli_getting_started.jpg)

The Meadow Command-Line-Interface (`Meadow.CLI`) provides a way to interact with the board and perform functions via a terminal/command-line window.

The Meadow.CLI tool supports deployment workflows as well as device and file management including file transfers, and MCU reset.

In addition to being able to be used from a terminal window, the `Meadow.CLI.Core` library can also be used programmatically, within a .NET application. In fact, the IDE extensions use that directly. You can find the source [here](https://github.com/wildernesslabs/Meadow.CLI).

Some Meadow.CLI commands [registering for a **Wilderness Labs Account**](https://identity.wildernesslabs.co/signin/register).

## Installation and Updating

<Tabs groupId="os">
  <TabItem value="windows" label="Windows">

### Install .NET SDK

Download and install the latest [.NET SDK](https://dotnet.microsoft.com/en-us/download).

### Install or update Meadow CLI

Install the Meadow.CLI using the `dotnet tool` command. From a terminal, install the Meadow.CLI from the NuGet package.

```console
dotnet tool install WildernessLabs.Meadow.CLI --global
```

To update to the latest version, change the `install` keyword to `update`.

```console
dotnet tool update WildernessLabs.Meadow.CLI --global
```

  </TabItem>
  <TabItem value="macos" label="macOS">

### Install .NET SDK

Download and install version 8 [.NET SDK](https://dotnet.microsoft.com/en-us/download/dotnet) for your Mac's processor architecture.

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
meadow --help
```

Additionally, you can get additional help information for any given command by passing `--help` (or `-h` shortened) as an option to that command. For instance, the following will provide guidance on the `listen` command:

```console
meadow listen --help
```

## Working with Ports

When a Meadow device is hooked up to a host computer, it communicates via a serial port (e.g. `COM3` on Windows or `UART3` on macOS/Linux) over USB. If you only have one Meadow device plugged in, Meadow.CLI will attempt to locate the port and send commands via that. However, if you have multiple devices, you may need to manually specify the port.

To list serial ports, execute the following:

```console
meadow port list
```

You can then specify which port to use with either the `meadow port select` command 

```console
meadow port select
```

or the `meadow config route` command. , replacing `{port}` with the port you found above.

```console
meadow config route {port}
```

You only need to configure the desired port once; all subsequent commands will remember the specified port.

## Common Tasks

### Download the Latest Meadow.OS and Flash to the Device

To download the latest Meadow.OS, execute the following:

```console
meadow firmware download
```

Once it's downloaded, it can be deployed to the device by placing Meadow in bootloaders mode and executing the following:

```console
meadow firmware write
```

### Build a Meadow App

To build a Meadow app, execute the following, replacing `{path}` with the path to the folder that contains your app csproj file.

```console
meadow app build {path}
```

### Trim a Meadow App

You'll typically want to trim a built Meadow app to reduce the app size when stored on your Meadow. To trim a Meadow app, connect your Meadow device and execute the following, replacing `{path}` with the path to the folder that contains your app csproj file.

```console
meadow app trim {path}
```

### Deploy a Meadow App

After your app is trimmeed, you can deploy your app by executing the following, replacing `{path}` with the path to the folder that contains your app csproj file.

```console
meadow app deploy {path}
```

### Run a Meadow App

Once your app is deployed, run the following command to start the app by enabling the runtime on Meadow.

```console
meadow runtime enable
```

You can view console output from your running application by using the `listen` command.

```console
meadow runtime enable
```

There's also a convenience `run` command that will build, trim, deploy, run and start listening. Execute the following, replacing `{path}` with the path to the folder that contains your app csproj file. 

```console
meadow app run
```

### Working with Files

#### Listing Files on the Device

To get a list of all the files on the device, execute the following:

```console
meadow file list
```

#### Writing a File to the Device

To write a file, or files, to the device execute the following, replacing [Filename] with the full path of the file to write:

```console
meadow file write -f [Filename]
```

Multiple files can be specified with multiple `-f` parameters:

```console
meadow file write -f [Filename1] -f [Filename2]
```

#### Delete a File from the Device

Files can also be deleted:

```console
meadow file delete -f [Filename]
```

As with file uploading, multiple files can be specified with multiple `-f` parameters:

```console
meadow file delete -f [Filename1] -f [Filename2]
```

All of the files in the root of the file system can be deleted without reformatting the flash:

```console
meadow file delete all
```

### Get Meadow's device information

To get information about the device, including OS version, execute the following:

```console
meadow device info
```

## List of Commands

### Working with Apps

* `meadow app build`  - Compile a Meadow application
* `meadow app debug`  - Debug a running application
* `meadow app deploy` - Deploy a built Meadow application to a target device
* `meadow app run`    - Builds, trims and deploys a Meadow application to a target device
* `meadow app trim`   - Trim the binaries of a Meadow applicatio

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
