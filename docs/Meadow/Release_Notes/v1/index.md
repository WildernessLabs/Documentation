---
layout: Meadow
title: Meadow v1
subtitle: Release Notes
---

# v1.1

## OS
* Added support for the BG95 and M95 modules
* Improved reliability of cell networking
* Resolved issue where using a static IP address and Wi-fi auto-connect together would not work as expected

## Meadow.Core
* Added Meadow.LogProviders library, which includes Console, File and UDP logging
* Bug fix in F7 internal resistors (resistors inverted)

## Meadow.Foundation
* New driver: NeoPixel driver
* New driver: Mcp3xxx family of analog to digital converters
* New driver: Current Transducer
* New driver: microBUS AC Current current sensor driver
* New driver: microBUS LEM current sensor driver
* New driver: Pca9671 IO expander driver
* Minor fixes and enhancements - details here: v1.1.0 Milestone (github.com)

## Meadow.Cloud
* Multi-org support and ability to invite users

## Meadow.CLI
* Added support for `app.build.yaml` to allow NoLink per-assembly
* Fix for `meadow list ports` command on Linux and therefore VSCode

## Meadow.Linux
* n/a

# v1.0.2

## OS
* Minor OtA enhancements

## Meadow.Core
* `ISerialPort` now follows the Meadow controller pattern
* Minor improvements to interrupt handling
* `UpdateService` catches exceptions while unzipping MPAKs and raises an event

## Meadow.Foundation
* `TftSpi` - Fixed rotation bug for the ST7789 display

## Meadow.Cloud
* Ability to manage collections and publish to specific collections

## Meadow.CLI
* Meadow.Cloud compatibility changes for creating packages and listing collections

## Meadow.Linux
* Added support for processor temperature

# v1.0 

The culmination of six years of work and 1.5MM lines of code, the Meadow v1.0 release includes all of the features found in the previous RC-3.1 release and adds final touches for OtA updates reliability and security.

For more information about recent work on Meadow.OS, please have a look at our [Release Candidate Release Notes](/Meadow/Release_Notes/Release-Candidates/).

## Updating to v1.0

This is a full stack release requiring an OS update, new nuget packages, a new Meadow CLI and new Visual Studio extensions.

### Updating Meadow.CLI

Start by making sure you have the latest version of the CLI (1.0.0) by running:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

### Updating Meadow.OS

Download the latest version of Meadow.OS:

```bash
meadow download os
```

Update by putting your Meadow device in boot loader mode and running:

```bash
meadow flash os
```
