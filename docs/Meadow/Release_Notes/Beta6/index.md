---
layout: Meadow
title: Meadow Beta 6
subtitle: Release Notes
---

# b6.3

This is fast follow to beta 6.2 with some much anticipated network stability improvements. We tested well beyond 3 million! HTTP requests with no degradation in performance! And this includes the Meadow Foundation Web Server - [Maple](http://developer.wildernesslabs.co/Meadow/Meadow.Foundation/Libraries_and_Frameworks/Maple.Server/).

## Updating

This update consists of OS binaries and a new CLI. There are no API changes or nuget updates. Expect to see another full stack update with the next release.

To update, start by installing the latest version of Meadow CLI (0.19.0):

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

Download the latest os:

```bash
meadow download os
```

And update by putting your Meadow device in boot loader mode and running:

```bash
meadow flash os
```

If you experience any stability or deployment issues you may need to erase the flash on Meadow and then re-install the latest OS:

```bash
meadow flash erase
```

## Known Issues

* **Visual Studio deployment** - When debugging, the extension may not automatically deploy your latest changes to your device. The workaround is to deploy first and then debug.
* **WiFi startup** with Config files has been disabled due to a regression. If using config files, you'll need to update your code to connect to your WiFi network programmatically. You can still get date and time via NTP with the meadow.config file.
* **D05 and D06 pins** as PWM Ports are not working. You will get an exception when using D06 and D05 will not output any voltage.

# b6.2

This is another milestone release for Meadow! The team has been pushing hard on stability improvements and new features - unfortunately those two things aren't always complementary. We tried pushing this release more than once over the past few months and discovered regressions. We're really excited to deliver this version that unlocks new functionality and clears the path to v1.0!

* **More open-source** - We've open-sourced more of our API stack! [Meadow.Units](https://github.com/WildernessLabs/Meadow.Units) and [Meadow.Contracts](https://github.com/wildernesslabs/meadow.contracts) are now open-source - and this unlocks [Meadow.Linux](https://github.com/WildernessLabs/Meadow.Linux)! (still in early development)
* **Network stability** - WiFi stability improvements and general API cleanup
* **More drivers** - We've continued to invest in Meadow.Foundation, releasing eight (8) new driver packages + a huge collection of fixes and improvements

## Updating

This is a full stack release requiring an OS update, new nuget packages, a new Meadow CLI and new Visual Studio extensions. Start by making sure you have the latest version of the CLI (0.15.2) by running:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

## Meadow.OS

* **Network stability** - The network stack received some much needed love. NTP and DNS protocol implementation was improved, and support for POSIX socket options (via getsockopt()) is now implemented and available to .NET apps. Network stability will continue to be a focus for the next release.
* **Network APIs** - We've also spent time cleaning up behavior and naming of the WiFi and network API surface.
* **.NET Standard support** - Added another missing two type forwarding assemblies to the OS. This fixes issues with using some .NET Standard 2.1 nugets on the Meadow, including some more System.Text.Json issues.

The release also includes many less visible reliability improvements and adjustments on the file self-configuration system and Meadow/host communication.

## Meadow.CLI

The CLI has a few under-the-hood improvements for B6.2. It will now automatically erase the Meadow flash when updating from older versions of Meadow OS. This is to correct a partitioning bug introduced in B6.0.

## Meadow.Core

* **More open-source** - Two major components of the core API stack have been moved to open-source! [Meadow.Units](https://github.com/WildernessLabs/Meadow.Units) and [Meadow.Contracts](https://github.com/wildernesslabs/meadow.contracts)
* **More unitization** - We're continuing to review and improve our API surface - several APIs have been updated to use Meadow.Units instead of non-dimensional values for things like frequency and time. This brings some minor breaking changes - for example, when setting SPI speed.
* **Pinout fixes** - We discovered a couple of pins were misconfigured on Meadow V2 boards - specifically D10 and D11. This should fix issues when using PWM.

## Meadow.Foundation

* **New MaxBotix drivers** - We now support the MaxBotix series of distance sensors including I2C, analog and serial variants!
* **New SwitchingRainGauge driver** - This peripheral is commonly used with weather stations and we include one with [Clima!](https://www.github.com/wildernesslabs/Clima)
* **New PCA9633 driver** - A LED driver capable of driving up to 4 LEDs, commonly used for backlight and RGB applications
* **New MMA7660FC driver** - A low power 3-axis accelerometer with orientation and tap detection
* **New HMC5883L driver** - This 3-axis digital compass has been under construction for over year and we're excited to see it complete and released
* **New Keyboard FeatherWing driver** - The BBQ 10 Keyboard FeatherWing includes a Blackberry keyboard, an analog light sensor and a full color touch screen!
* **New BME68x drivers** - Meadow now supports I2C Bme680s and Bme688s - SPI support coming soon
* **New AS1X15 ModBus drivers** - Meadow now has ModBus support!!

You can see the full list of improvements and fixes [here](https://github.com/WildernessLabs/Meadow.Foundation/milestone/14)

## Known Issues

* When using Visual Studio - When debugging, the extension may not automatically deploy your latest changes to your device. The workaround is to deploy first and then debug.
* Joining WiFi network at startup with Config files has been disabled due to a regression. If using config files, you'll need to update your code to connect to your WiFi network programmatically. You can still get date and time via NTP with the meadow.config file.
* WiFi stability - although B6.2 has improved network stability, we're still seeing issues after 100+ network requests.
* Configuring D05 and D06 pins as PWM Ports are not working. You will get an exception when using D06 and D05 will not output any voltage.

# b6.0.1

This is a point release with a big focus on tooling features and stability along with a number of Meadow.Foundation stability fixes, performance improvements, and API consistency updates.

* **VS2022 support** Meadow officially supports Visual Studio 2022! Open the Manage Extensions dialog in Visual Studio to install.
* **Debugging stability** This version sees a big improvement in debugging stability and consistency, make sure you have the latest VS extensions installed.
* **MicroGraphics refactoring** We've spent a lot of time optimizing and refactoring our Meadow.Foundation APIs, this release sees some big changes (some breaking) that both simplifies and brings consistency to Meadow's graphics APIs.

## Updating

There is no OS change for this release so you do not need to flash your Meadow board, but make sure you're running b6.0 if you haven't already updated.

There are new nuget packages, a new Meadow CLI and new Visual Studio extensions.

Start by installing the latest version of the CLI (v0.15.1) by running:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global --version 0.15.1
```

## Visual Studio Extensions

The Visual Studio for Windows extension has been reworked and refactored. This was necessary to support Visual Studio 2022 on Windows but also gave us the opportunity to carefully review the code for stability and usability. Deploying and debugging on Windows 10 & 11 should be a lot more stable and consistent. And there's more goodness coming in future releases :)

**Note** - Visual Studio 2022 for Mac isn't supported - at the time of this release, the VS4Mac 2022 preview doesn't (yet) support extensions.

**Known Issues** - In rare occasions you may experience deployment failures. If the failures are consistent, you may need to disable/enable or re-install the Meadow extension.

We're working on the issue. If you experience the problem and can provide a consistently reproducible set of steps, [please file an issue](https://github.com/WildernessLabs/VS_Win_Meadow_Extension/issues). Thank you!

## Meadow.CLI

The CLI receives more stability improvements and two new commands:

* **`meadow use port`** can be used to set a preferred serial port
* **`meadow file delete all`** will remove all files from your Meadow device

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
* [#191 Switching Antennas throws an exception](https://github.com/WildernessLabs/Meadow_Issues/issues/191)
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
