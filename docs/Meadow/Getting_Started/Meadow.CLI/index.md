---
layout: Meadow
sidebar_label: Installing Meadow.CLI
title: Installing Meadow.CLI
subtitle: Installing the Meadow Command-Line-Interface (CLI).
---

![](wildernesslabs_meadow_cli_getting_started.jpg)

The Meadow Command-Line-Interface (Meadow.CLI) provides a way to interact with the board and perform functions via a terminal/command-line window.

### Pre-requisites

Download and install the latest version of the [.NET runtime](https://dotnet.microsoft.com/en-us/download).

### Installation

Meadow.CLI can be installed via the dotnet tool from a nuget package at the terminal:

```console
dotnet tool install WildernessLabs.Meadow.CLI --global
```

To update, simply change the install keyword to update:

```console
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

You can confirm the Meadow.CLI was successfully installed by typing `meadow`.

```console
C:\Users\ramir>meadow
meadow v2.0.0.6

USAGE
  meadow [options]
  meadow [command] [...]

OPTIONS
  -h|--help         Shows help text.
  --version         Shows version information.

COMMANDS
  app build         Compile a Meadow application
  app debug         Debug a running application
  app deploy        Deploy a built Meadow application to a target device
  app run           Builds, trims and deploys a Meadow application to a target device
  app trim          Runs an already-compiled Meadow application through reference trimming
  .
  .
  .
```

For more usage information, head over to the Meadow.CLI documentation.