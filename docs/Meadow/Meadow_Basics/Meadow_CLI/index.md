---
layout: Meadow
title: Meadow.CLI
subtitle: Command-Line-Interface for Meadow
---

The Meadow Command-Line-Interface (`Meadow.CLI`) provides a way to interact with the board and perform functions via a terminal/command-line window. 

The Meadow.CLI tool supports deployment workflows as well as device and file management including file transfers, and MCU reset.

In addition to being able to be used from a terminal window, the `Meadow.CLI.Core` library can also be used programmatically, within a .NET application. In fact, the IDE extensions use that directly. You can find the source [here](https://github.com/wildernesslabs/Meadow.CLI).

## Installation and Updating

`Meadow.CLI` can be installed via the `dotnet` tool from a nuget package at the terminal:

```bash
dotnet tool install WildernessLabs.Meadow.CLI --global
```

To update, simply change the `install` keyword to `update`:

```bash
dotnet tool update WildernessLabs.Meadow.CLI --global
```

## Executing Commands

Once installed, Meadow.CLI is accessible from a terminal prompt via the `meadow` command, and command arguments are passed via a fluent syntax, for instance, the following command will download the latest Meadow.OS:

```bash
meadow download os
```

## Enumerating Commands & Help

This guide covers a few of the most common commands, but there are many more to explore. For a complete list of commands, execute the following from a terminal window:

```bash
meadow --help
```

Additionally, you can get additional help information for any given command by passing `--help` (or `-h` shortened) as an option to that command. For instance, the following will provide guidance on the `listen` command:

```bash
meadow listen --help
```

## Working with Ports

When a Meadow device is hooked up to a host computer, it exposes it communicates via a serial port (e.g. `COM3` on Windows or `UART3` on macOS/Linux) over USB. If you only have one Meadow device plugged in, Meadow.CLI will attempt to locate the port and send commands via that. However, if you have multiple devices, you may need to manually specify the port.

To list serial ports, execute the following:

```bash
meadow list ports
```

You can then specify which port to use via for future commands with the `config route` command, replacing `{port}` with the port you found above. Then, after configuring which port to use, future commands will be directed to that port.

```bash
meadow config route {port}
```

You only need to specify the port once; all subsequent commands will remember the specified port.

## Common Tasks

### Download the Latest Meadow.OS and Flash to the Device

To download the latest Meadow.OS, execute the following:

```bash
meadow firmware download
```

Once it's downloaded, it can be deployed to the device by executing the following:

```bash
meadow firmware write
```

### Deploy a Meadow App

To deploy an app to the device, execute the following, replacing `{path}` with the path to your app's built `App.dll` file:

```bash
meadow app deploy -f {path}/App.dll
```

### Working with Files

#### Listing Files on the Device

To get a list of all the files on the device, execute the following:

```bash
meadow file list
```

#### Writing a File to the Device

To write a file, or files, to the device execute the following, replacing [Filename] with the full path of the file to write:

```bash
meadow file write -f [Filename]
```

Multiple files can be specified with multiple `-f` parameters:

```bash
meadow file write -f [Filename1] -f [Filename2]
```

#### Delete a File from the Device

Files can also be deleted:

```bash
meadow file delete -f [Filename]
```

As with file uploading, multiple files can be specified with multiple `-f` parameters:

```bash
meadow file delete -f [Filename1] -f [Filename2]
```

All of the files on the file system can be deleted without reformatting the flash:

```bash
meadow file delete all
```

### Get Meadow's device information

To get information about the device, including OS version, execute the following:

```bash
meadow device info
```
