---
layout: Meadow
title: Meadow Beta 6
subtitle: Release Notes
---

# b6.0

This is a big new release with huge new features and lots of optimizations and improvements, including:

* **Debugging** - What what?! Yup; in-IDE debugging in Visual Studio for Windows and Mac, AND VS Code.
* **Device/OS Configuration** - Device and OS settings can now be configured at build time via yaml config files.
* **.NET Standard 2.1 Fixes** - The last of the .NET Standard 2.1 deployment stuff is in, fixing `System.Text.Json`.
* **Faster, More Reliable Networking** - There have been a number of big optimizations in the networing stack promising much more reliable networking.
* **Improved Deployment** - App and OS deployment has undergone a massive update, offering a more reliable experience.
* **Up to 20x Graphics Performance Improvements** - [Adrian]
* **Meadow.Foundation Improvements** - [Adrian]

## Updating

This is a full stack release requiring an OS update, new nuget packages, a new Meadow CLI and new Visual Studio extensions. Start by making sure you have the latest version CLI (v0.15.0) by running: 

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

## Meadow.OS

### Debugging

Long awaited, in-IDE, on-device debugging is here! Now you can debug Meadow apps just like any other .NET app, with full support in Visual Studio for Windows, Mac, and even VS Code! You can even debug from the command line using the Mono Soft-Debugger (SDB) via Meadow.CLI.

### Configuration

It's now possible to have Meadow.OS automatically connect to a preferred WiFi network, get the time from NTP servers, and more, all via configuration settings defined at build time.

You can also configure the name of the device, and more.

For more information, check out the [Configuration guide](/Meadow/Meadow.OS/Configuration/).

### Network Time Protocol (NTP)

The OS now uses NTP to maintain correct world time! It can be configured to poll multiple NTP servers.

### .NET Standard 2.1 Nuget fixes (System.Text.Json)

A new deployment method for the .NET core libraries removes the build issues brought on by using a Nuget to distribute framework assemblies such as mscorlib.dll and netstandard.dll. In order to benefit from these improvements you must ensure that you have:

* Update Meadow CLI to version 0.15.0 or later
* Remove all references to the `WildernessLabs.Meadow.Assemblies` nuget (primarily by updating to the latest `Meadow.Core`)

## Meadow.Core

### F7 Device Coprocessor Lifecycle Cleanup

The `Coprocessor` on F7 devices are automatically initialized during device startup, so when using the `WiFiAdapter` or `BluetoothAdpater`, you no longer need to initialize the coprocessor first.

* **Breaking Change** - The `InitCoprocessor()`, `InitWiFiAdapater()`, and `InitBluetoothAdapter()` methods are no longer necessary, and are either inaccessible or have been removed entirely.

### Added Full-Duplex Support to `IByteCommunications.Exchange()` and `SpiPeripheral`

The `IByteCommunications.Exchange()` method now has an optional parameter of `DuplexType`:

```csharp
void Exchange(Span<byte> writeBuffer, Span<byte> readBuffer, DuplexType duplex = DuplexType.Half);
```

This enables protocols that support full-duplex communications (data received at the same time as it's sent) to be supported at the peripheral level, rather than having to use the bus class directly.

Previously, if you wanted to do full-duplex communications, you needed to use the `SpiBus.Exchange()` method, which meant passing the chip select pin. This streamlines that workflow.

## Meadow.Foundation

### Pixel displays and microGraphics

The microGraphics Library in Meadow.Foundation received some new capabilities and a performance boost.

We've added a several display buffer classes designed to manage data for specific color bit depths and they're now being used as the off-screen buffer for every pixel display driver.

Why do we care? :) This has several benefits:

* All of the buffer logic was refactored into common classes so any display-specific optimizations are now common across similar display drivers (more performance!).

* We spent time optimizing buffer writing logic for each class improving performance even more. Filled rectangles are at least 5x faster and full screen fills on color displays are 20x faster.

* We can now create buffers outside of display drivers - are you using jpegs? You can now quickly add all of that data to a 24bit buffer making it much easier to manage. Want to create and store sprites for game logic - that's now much easier.

### Bug fixes 

* [#200 Some Tea5765 APIs set to private](https://github.com/WildernessLabs/Meadow_Issues/issues/200)
* [#199 MS5611 checks for wrong i2c address](https://github.com/WildernessLabs/Meadow_Issues/issues/199)
* [#196 Update St7565 to use Memory<byte>](https://github.com/WildernessLabs/Meadow_Issues/issues/196)
* [#194 FeatherWings.DotstarWing does not implement InvertPixel](https://github.com/WildernessLabs/Meadow_Issues/issues/194)
* [#190 ADXL345 driver not working](https://github.com/WildernessLabs/Meadow_Issues/issues/190)
* [#189 VEML7700 light sensor driver not working](https://github.com/WildernessLabs/Meadow_Issues/issues/189)
