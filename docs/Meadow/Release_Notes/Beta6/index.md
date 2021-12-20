---
layout: Meadow
title: Meadow Beta 6
subtitle: Release Notes
---

# b6.0.1

This is a point release with a big focus on tooling features and stability along with a number of Meadow.Foundation stability fixes, performance improvements, and API consistency updates.

* **VS2022 support** Meadow officially supports Visual Studio 2022! Open the Manage Extensions dialog in Visual Studio to install.
* **Debugging stability** This version sees a big improvement in debugging stability and consistency, make sure you have the latest VS extensions installed.
* **MicroGraphics refactoring** We've spent a lot of time optimizing and refactoring our Meadow.Foundation APIs, this release sees some big changes (some breaking) that both simplifies and brings consistency to Meadow's graphics APIs.

## Updating

There is no OS change for this release so you do not need to flash your Meadow board, but do make sure you're running b6.0 if you haven't already updated.

There are new  new nuget packages, a new Meadow CLI and new Visual Studio extensions.

Start by installing the latest version of the CLI (v0.15.1) by running:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global --version 0.15.1
```

## Visual Studio Extensions

The Visual Studio for Windows extension has been reworked and refactored. This was necessary to support Visual Studio 2022 on Windows but also gave us the opportunity to carefully review the code for stability and usability. Deploying and debugging on Windows 10 & 11 should be a lot more stable and consistent. And there's more goodness coming in future releases :)

**Note** - Visual Studio 2022 for Mac isn't supported - at the time of this release, the VS4Mac 2022 preview doesn't yet support external extensions.

**Known Issues** - This update for VS2019 and VS2022 extension, on Windows, are generally more stable than the previous one, but we are aware of certain situations, and on come machines, where the new version will stop deploying. If that happens you can try the following:
1. Close your sln. Disable the extension, then re-enable it. Reload your sln and try deploying again. 
2. In the worst case, you may have to uninstall and re-install the extension. 

We are trying to track down why this happens, but if you happen to notice a consistently reproducible set of steps, we'd love to hear about it, as that will help us get a fix out for it more quickly. Thanks.

## Meadow.Core

**Note: Breaking Change** - SPI Bus speed is now defined as a `Meadow.Units.Frequency` instead of an integer. To update, in most cases you'll replace your old int value with `new Meadow.Units.Frequency(value)`. 

This also enabled Meadow.Foundation drivers to expose a `DefaultSpiBusSpeed` property (details below).

## Meadow.Foundation

This release brings a big list of stability fixes, API updates and performance improvements - see the Bug fixes below for the complete list.

* **New BB Q10 Keyboard driver** Ever wanted a BlackBerry-style keyboard for your Meadow projects? You can now use [Solder Party's](https://www.tindie.com/products/arturo182/keyboard-featherwing-qwerty-keyboard-26-lcd/) keyboard with Meadow
* **ePaper display performance** Full screen redrawing speed is 10-15% faster on most ePaper displays
* **Breaking Change: Renamed GraphicsLibrary to MicroGraphics** - We renamed the `GraphicsLibrary` class to `MicroGraphics` to bring the class inline with branding and documentation, all instances in your code will need to be renamed 
* **Breaking Change: `DisplayBase` -> `IGraphicsDisplay`** - We deprecated `DisplayBase` and replaced it with `IGraphicsDisplay` - all graphics displays now implement this interface
* **Breaking Change: `FontBase` -> `IFont`** - We deprecated `FontBase` and replaced it with `IFont` - all font classes now implement this interface
* **Moved graphics enums out of GraphicsLibrary** - This is API cleanup, several enums were nested in the `GraphicsLibrary` class, and have been moved directly into the `Meadow.Foundation.Graphics` including: `ColorType`, `ScaleFactor`, `TextAlignment`, and `BitmapMode`
* **Samples updated to support Meadow V2** - All Meadow.Foundation samples updated to run on the Meadow V2 boards by default, if you're using V1 boards change the `MeadowApp` class signature from `App<F7MicroV2, MeadowApp>` to `App<F7Micro, MeadowApp>` (remove the `V2`)
* **SPI peripherals now have a default value** - No more guessing on the appropriate SPI bus speed for peripherals, all SPI drivers now have a public `DefaultSpiBusSpeed` of type `Meadow.Units.Frequency`

### Bug fixes 

Look at this enormous list of bug fixes! We're getting close to v1.0 Release Candidate, folks!

* [#82 Error flashing F7 OS from a non-english OS](https://github.com/WildernessLabs/Meadow.CLI/issues/82)
* [#92 Conflicting use of the -v flag](https://github.com/WildernessLabs/Meadow.CLI/issues/92)
* [#116 Better user-feedback when OS files aren't downloaded](https://github.com/WildernessLabs/Meadow.CLI/issues/116)
* [#117 Feature request: Add a delete all command](https://github.com/WildernessLabs/Meadow.CLI/issues/117)
* [#141 Add I2C defaults to all related drivers](https://github.com/WildernessLabs/Meadow.Foundation/issues/141)
* [#191 Can't use font scaling with TextDisplayMenu](https://github.com/WildernessLabs/Meadow.Foundation/issues/191)
* [#195 Sensor.Atmospheric.BME280 - never turns changes mode from Sleep to either Forced or Normal](https://github.com/WildernessLabs/Meadow.Foundation/issues/195)
* [#209 Out of Bounds exception if graphicslibrary is used to draw off screen](https://github.com/WildernessLabs/Meadow.Foundation/issues/209)
* [#211 Color WithBrightness always returns black](https://github.com/WildernessLabs/Meadow.Foundation/issues/211)
* [#213 Not all display drivers respect IgnoreOutOfBoundsPixels](https://github.com/WildernessLabs/Meadow.Foundation/issues/213)
* [#214 Not all display drivers implement DrawBuffer](https://github.com/WildernessLabs/Meadow.Foundation/issues/214)
* [#215 Replace DisplayBase with IGraphicsDisplay](https://github.com/WildernessLabs/Meadow.Foundation/issues/215)
* [#218 Replace FontBase with IFont](https://github.com/WildernessLabs/Meadow.Foundation/issues/218)
* [#219 ePaper drivers set the dataCommandPort state set repeatedly when updating the display](https://github.com/WildernessLabs/Meadow.Foundation/issues/219)
* [#220 Add consistent SPI defaults params to SPI drivers](https://github.com/WildernessLabs/Meadow.Foundation/issues/220)
* [#221 Ili9341 can't pass null for reset pin](https://github.com/WildernessLabs/Meadow.Foundation/issues/221)
* [#222 Bme280 missing ctor for SPI that takes an IPin](https://github.com/WildernessLabs/Meadow.Foundation/issues/222)
* [#225 BME680 missing filterable observable support](https://github.com/WildernessLabs/Meadow.Foundation/issues/225)
* [#226 Driver request: BBQ10Keyboard](https://github.com/WildernessLabs/Meadow.Foundation/issues/226)
* [#228 Update Meadow.Foundation samples to V2 signature](https://github.com/WildernessLabs/Meadow.Foundation/issues/228)
* [#229 Calling DisplayTest in the ST7789 sample crashes](https://github.com/WildernessLabs/Meadow.Foundation/issues/229)
* [#233 Fix Max7219 default SPI speed](https://github.com/WildernessLabs/Meadow.Foundation/issues/233)
* [#235 VL53L0X Sample appears to be out of date](https://github.com/WildernessLabs/Meadow.Foundation/issues/235)

# b6.0

This is a big new release with huge new features and lots of optimizations and improvements, including:

* **Debugging** - What what?! Yup; in-IDE debugging in Visual Studio for Windows, Mac, AND VS Code.
* **Device/OS Configuration** - Device and OS settings can now be configured at build time via yaml config files.
* **.NET Standard 2.1 Fixes** - The last of the .NET Standard 2.1 deployment stuff is in, fixing `System.Text.Json`.
* **Faster, More Reliable Networking** - There have been a number of big optimizations in the networking stack promising much more reliable networking.
* **Improved Deployment** - App and OS deployment has undergone a massive update, offering a more reliable experience.
* **Up to 20x Graphics Performance Improvements** - New graphics optimizations to improve drawing performance, especially for fills and rectangles.
* **Meadow.Foundation Improvements** - Fixes, optimizations and stability improvements plus new buffer classes to manage in-memory graphics/sprites.

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

### Maple web server

* General API cleanup and modernization

* Added support for parameter routing!

### Bug fixes 

* [#200 Some Tea5765 APIs set to private](https://github.com/WildernessLabs/Meadow_Issues/issues/200)
* [#199 MS5611 checks for wrong i2c address](https://github.com/WildernessLabs/Meadow_Issues/issues/199)
* [#196 Update St7565 to use `Memory<byte>`](https://github.com/WildernessLabs/Meadow_Issues/issues/196)
* [#194 FeatherWings.DotstarWing does not implement InvertPixel](https://github.com/WildernessLabs/Meadow_Issues/issues/194)
* [#190 ADXL345 driver not working](https://github.com/WildernessLabs/Meadow_Issues/issues/190)
* [#189 VEML7700 light sensor driver not working](https://github.com/WildernessLabs/Meadow_Issues/issues/189)
