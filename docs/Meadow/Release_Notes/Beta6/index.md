---
layout: Meadow
title: Pre-v1.0 Release Notes
subtitle: Release Notes
---

# Pre-v1.0 Release Notes

## Release Candidate 3.1

We have a new release candidate, with a few fixes in the operating system but some big driver updates! This release resolves several issues with applying OTA updates via Meadow Cloud, and includes improvements to the Meadow.Foundation peripheral library.

### Updating to RC-3.1

This is a full stack release requiring an OS update, new nuget packages, a new Meadow CLI and new Visual Studio extensions.

### Updating Meadow.CLI

Start by making sure you have the latest version of the CLI (0.98.x) by running:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

### Updating Meadow.OS

Download the latest os:

```bash
meadow download os
```

And update by putting your Meadow device in boot loader mode and running:

```bash
meadow flash os
```

### Meadow Tooling

* **.NET Dynamic Method Fix** - A fix in Mono should now enable execution of .NET code generated at run-time
* **Meadow CLI** - This release should now work on MacOS Apple processors (M1/M2) as well as Intel processors
* **Visual Studio Code** - Output is now color coded between IDE (white) and Meadow (blue)
* **Visual Studio for Windows** - Project templates have been updated
* **Visual Studio for MacOS** -  Project templates have been updated

### Meadow.Core

* `MeadowOS.Start()` modified to accept an `IApp` parameter to allow platforms to do App creation manually
* Added `WSL2` Platform to `Meadow.Linux`
* Platform configuration now supports reserving pins to prevent Core from initializing them and preventing applications from accessing them
* Bug fixes and improvements to OtA Updating
* Bug fixes and improvements to the full `Meadow.Linux` stack
* Added `ParticleDensity` to `Meadow.Units`

### Meadow.Foundation

Meadow.Foundation updates for RC3-1 include new drivers, improved APIs and improved performance.

* **SPI drivers auto set bus speed and mode** - every SPI driver now automatically sets the correct SPI and mode when writing to the bus allowing devices with different bus requirements to work in the same project
* **TftSpi drawing performance** - improvements of over 50%
* **Bus communications APIS** - under the hood we cleaned up the API names and abstractions while adding support for dynamic SPI bus settings
* **New Audio Library** - added MicroAudio, a light weight music and sound effects API that works with piezo speakers
* **New MCP960x thermocouple driver**
* **New LIS2MDL magnetometer driver**
* **New LSN303AGR magnetometer driver**
* **New NEXT particle sensor driver**
* **New PMSA003I particle sensor driver**
* **New SH1107 OLED display driver**
* **New 14 and 16 segment display drivers**
* **New ANO Navigation Encoder driver**

We've also updated all our LED drivers to be more thread safe and prevent memory leaks on long running application, and because of this we made a few API adjustments:

* LED method `Stop()` has been renamed to `StopAnimation()` so its self-explanatory to stop any blinking/pulsing animations running on any LED
* For RGB LED drivers (`RgbLed` and `RgbPwmLed`) - `SetColor()` is independent of any running animations, so you can change the color of the LED without having to call `StartBlink()` or `StartPulse()`. If you want a steady color, you need to call `StopAnimation()` first
* For PWM LED drivers (`PwmLed`, `RgbPwmLed` and `PwmLedBarGraph`) - `StartBlink()` and `StartPulse()` can now be called multiple times and it will no longer run multiple animations at once, it will stop whatever animation is doing before switching animations
* For All LED drivers - `StopAnimation()`, `StartBlink()` and `StartPulse()` are now awaitable Tasks to better manage threading for these peripherals
* For LED bar graphs (`LedBarGraph` and `PwmLedBarGraph`) - We removed the setter for the `Percentage` property to set the percentage on the bar graph, use awaitable Task `SetPercentage(float value)` instead

You can see the complete list of [additions and fixes here](https://github.com/WildernessLabs/Meadow.Foundation/milestone/22).

### Meadow Samples

As usual, all our samples repos and API docs have been updated to latest API changes:
* [Meadow.Core.Samples](https://github.com/WildernessLabs/Meadow.Core.Samples)
* [Meadow.Project.Samples](https://github.com/WildernessLabs/Meadow.Project.Samples)
* [Meadow.ProjectLab.Samples](https://github.com/WildernessLabs/Meadow.ProjectLab.Samples)
* [API Documentation](../../../docs/api/Meadow/)

## Release Candidate 3.0

Our next release candidate is here! This release improves system and app reliability, adds Meadow Cloud devices provisioning, and fixes several issues with Over-The-Air (OTA) updates for Meadow.OS on the way to 1.0.

RC3 includes:

* **Async I/O and Threadpool Stability Improvements** - We landed a critical fix regarding thread scheduling during the App runtime. Very frequently, the app would hang, usually when attempting asynchronous I/O over multiple threads. The threadpool has also been bound to a small number of threads (four).
* **Meadow Cloud Device Authentication** - We have added device provisioning and secure authentication for the Over-The-Air (OTA) update service.
* **File Transfer Progress Bars in Mac and Windows IDEs** - We now have a slighter nicer UX during file transfers, which includes progress bars for each file transfer. There is now also a separation between messages generated on the Host side and the Meadow device side. As such they now appear in separate output windows. So the respective outputs should be a little cleaner too.
* **Ethernet Stability Improvements** - A critical fix in ethernet setup has dramatically improved the stability of Ethernet connections.
* **HCOM Protocol Version Change** - The Meadow HCOM communication protocol version has been bumped from 6 to 7. This improves communication between Meadow and your development environment, and it means that you'll need to update Meadow OS, Meadow CLI and the Visual Studio extension(s) at the same time.
* **meadow.config.yaml Format Change** - The config format for network interface has changed in this release; users must update their existing apps if they have including custom network configuration.
* **Improved displays and graphics support** - This release includes additional drawing optimizations in **MicroGraphics** along with two new OLED display drivers

### Updating to RC-3.0

This is a full stack release requiring an OS update, new nuget packages, a new Meadow CLI and new Visual Studio extensions.

### Updating Meadow.CLI

Start by making sure you have the latest version of the CLI (0.96.x) by running:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

### Updating Meadow.OS

Download the latest os:

```bash
meadow download os
```

And update by putting your Meadow device in boot loader mode and running:

```bash
meadow flash os
```

### Known Issues

**Meadow.CLI Mx (MacOS silicon) Support** - We have a workaround for those developers who have installed the CLI, but the basics work, like 

```bash
meadow list ports
```

but you get an error similar to `libusb-1.0 library not found.` when you try:

```bash
meadow flash os
```

or similar. The workaround is to download the latest binary files [here](https://github.com/WildernessLabs/Meadow.CLI/releases). Unzip them to safe location. Open a command line prompt at that location. This will then allow you to `flash` etc with the following command line.

```bash
dotnet meadow.dll flash os
```

### meadow.config.yaml Format Change

If you are using the `Network` section of `meadow.config.yaml` to configure network access, you will now have to match this example's format instead:

```
Network:
    Interfaces:
        - Name: Ethernet
          UseDHCP: false
          IPAddress: 192.168.1.60
          NetMask: 255.255.255.0
          Gateway: 192.168.1.254
        - Name: WiFi
          UseDHCP: true
          IPAddress: 192.168.1.10
          NetMask: 255.255.255.0
          Gateway: 192.168.1.254
    #
    #   Which interface should be used?
    #
    DefaultInterface: WiFi
 ```

## Release Candidate 2.2

Here's another update with API improvements and new drivers! This release includes nugets and Visual Studio extensions - you don't need to flash a new OS - but that doesn't mean it's a small release.

RC-2.2 includes:
* **Meadow Desktop Support** - it's now possible build Meadow apps on a desktop! This release includes preliminary support with more coming soon
* **New Pin Controller API pattern** - We've overhauled the way Meadow creates ports from pins. This both simplifies using peripheral drivers and makes Meadow far more flexible when using IO expanders.
* **Improved MicroGraphics APIs** - We added a new circular arc API to draw angles as well a top-to-bottom API cleanup
* **New Drivers** - We've added three new drivers for Meadow Desktop including a display driver for Windows Forms, a display driver for Gtk and a keyboard driver! We've also added support for the GNSS 5 mikro click board.

### Updating

You just need to grab the latest Meadow nugets (verion 0.95.0) and install the latest Visual Studio extension(s) (version 0.9.5.0). There's no new CLI for this release.

### Pin Controller pattern

Meadow.Foundation drivers no longer require passing in the Meadow Device when using constructor overloads the accept Meadow pins. This means existing applications will need to be updated. This just requires removing the `Device` parameter when instantiating drivers. 

For example:

**RC2-1** (old)
`var myLed = new Led(Device, Device.Pins.D02);`

**RC2-2** (new!)
`var myLed = new Led(Device.Pins.D02);`

Under the hood, Meadow pins are now aware of their parent controller. This means a pin for your Meadow F7 knows about the Meadow F7 device which is why the `Device` parameter is no longer needed. This also brings a big improvement when using IO expanders such as the MC23xxx family of digital IO expanders. It's now possible to pass in pins from different controllers to the same peripheral. This is useful for complex peripheral devices that have multiple IO pins. 

## Release Candidate 2.1

We're following up the release of Meadow RC2 with a point release that addresses a couple of key issues and includes some API improvements and fixes throughout the entire stack.

This release includes:

* **System stability** - Fixed an edge-case MPU configuration bug that caused seemingly random application hangs when accessing the file system. As .NET execution can load assemblies at any time, this bug could cause hangs even for applications not directly using the file system.
* **Increased capacity for open files** - This is particularly useful for complex apps/apps that use SQLite
* **GitGub repo organization** - We've made it easier to view and contribute to Meadow by adding Meadow.Linux to the Meadow.Core repo

### Updating to RC-2.1

This is a full stack release requiring an OS update, and new nuget packages. Meadow CLI and the extensions are unchanged.

### Updating Meadow.OS

Download the latest os:

```bash
meadow download os
```

And update by putting your Meadow device in boot loader mode and running:

```bash
meadow flash os
```

### Release Details

**Meadow.Foundation**

* **New Magnetometer sensor** - The MMC5603 magnetometer is now supported
* **Added GNSS 10 Click Mikrobus driver** - The click board uses the Neo M8 GNSS module
* **Improved peripheral abstraction** - We've reworked the interfaces and base classes supporting the Meadow.Foundation peripherals making it easier to write Meadow apps that are abstracted from specific hardware
* **Bug fixes and cleanup** - You can see the issues we've [addressed here](https://github.com/WildernessLabs/Meadow.Foundation/milestone/20)

## Release Candidate 2.0

We're excited to release the 2nd Meadow v1.0 Release-Candidate! This is another milestone release with new features and more performance improvements. To mark the occasion, we're continuing our goal of contributing to the .NET open-source community by open-sourcing Meadow.Core! This means the entire stack that sits above the .NET runtime is now open and [available on GitHub](http://www.github.com/wildernesslabs/Meadow.Core).

This release includes:

* **SD Card Support** - APIs are now available to use the SD card reader with the Meadow Core-Compute Module
* **Static IP Address Support** - Meadow now supports setting a static IP address for the WiFi connection
* **Network Credentials Enhancements** - New methods have been added to work with data in [wifi.config.yaml](../../Meadow.OS//Configuration/WiFi_Configuration/index.md) file

### Updating to RC-2.0

This is a full stack release requiring an OS update, new nuget packages, a new Meadow CLI and new Visual Studio extensions.

### Updating Meadow.CLI

Start by making sure you have the latest version of the CLI (0.90.4) by running:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

### Updating Meadow.OS

Download the latest os:

```bash
meadow download os
```

And update by putting your Meadow device in boot loader mode and running:

```bash
meadow flash os
```

**NOTE:** - After flashing Meadow.OS, if the runtime upload does not complete with an error of `cannot connect to Meadow`, push the `RST` button on your Meadow device and then execute:

```bash
meadow flash os -d
```

This skips the initial (already completed) Meadow.OS upload and retries the runtime upload. We're not sure what's causing this issue, but it's under investigation.

If you experience any stability or deployment issues you may need to erase the flash on Meadow and then re-install the latest OS:

```bash
meadow flash erase
```

### Release Details

**Meadow.OS**

### JIT

JIT is now turned on by default giving existing applications a performance boost.

Interpreted mode can be re-enabled by adding the following to the application `meadow.config.yaml` file:

```yaml
MonoControl:
    Options: --interp
```

### SD Card Support (CCM)

SD cards are now supported on the Core Compute Module.  The SD card interface can be enabled in the `meadow.config.yaml` file:

```yaml
Device:
    SdStorageSupported: true
```

### Network Credentials Enhancements

Two new methods have been added to work with the data in the [wifi.config.yaml](../../Meadow.OS//Configuration/WiFi_Configuration/index.md) file:

* `ConnectToDefaultAccessPoint`
* `ClearStoredAccessPointInformation`

`ConnectToDefaultAccessPoint` will us the SSID and password information previously loaded from the `wifi.config.yaml` an attempt to connect to the specified access point.

`ClearStoredAccessPointInformation` can be used to remove the stored credentials from non volatile memory.

### TLS Update

TLS library has been updated.

### Improved Low Power Support

The delay between the OS waking and calls to `Console.WriteLine` is no longer necessary.

### Static IP Address Support for WiFi

The system now supports setting a static IP address for the WiFi connection. The address can be set through the [`meadow.config.yaml` file](../../Meadow.OS/Configuration/OS_Device_Configuration/index.md) by adding the following to the config file:

```yaml
Network:
    WiFi:
        Default: true
        #
        #   DHCP will be used if the IP address information is omitted.
        #
        IPAddress: 192.168.1.10
        NetMask: 255.255.255.0
        Gateway: 192.168.1.254
```

**Meadow.Foundation**

* **New Air quality sensor** - The ENS160 air quality sensor is now supported

This release also includes several Meadow.Foundation bug fixes - [details are here](https://github.com/WildernessLabs/Meadow.Foundation/milestone/18?closed=1)

## Release Candidate 1.1

We're happy to announce an amendment release to RC1, providing an out-of-band critical fix for the *AMQP* protocol and therefore for connecting to *Azure Iot Hubs* and other cloud services. To get started on connecting your Meadow to the cloud, check out [our sample!](https://github.com/WildernessLabs/Meadow.Project.Samples/tree/main/Source/Azure/AzureIoTHub)

In addition, this release includes:

### Meadow.OS + Meadow.Core

* **Debugging fix** - A Meadow Debugging connection fix for the latest versions of Visual Studio
* **Battery voltage API** - `Device.GetBatteryInfo().Voltage` now properly works on `FeatherV2` devices
* **Sensor abstractions** - A new `ISamplingSensor` abstraction makes it easier to swap sensor hardware with minimal code changes
* Fixed [**Device.Connect never returns**](https://github.com/WildernessLabs/Meadow_Issues/issues/207)

### Meadow.Foundation

* **New GPS driver** - The NEO-M8 GPS module is now supported over serial
* **New Air quality sensor** - The SCD40/41 air quality sensor is now supported
* **MicroGraphics vertical text alignment** - It's now possible to align text both horizontally and vertically with MicroGraphic

This release also includes several Meadow.Foundation bug fixes - [details are here](https://github.com/WildernessLabs/Meadow.Foundation/milestone/19)

### Updating to RC-1.1

This release includes an OS update, and new Meadow nuget packages. The CLI and extensions are unchanged.

### Updating Meadow.OS

Download the latest os:

```bash
meadow download os
```

Update by putting your Meadow device in boot loader mode and running:

```bash
meadow flash os
```

If you experience any stability or deployment issues you may need to erase the flash on Meadow and then re-install the latest OS:

```bash
meadow flash erase
```

## Release Candidate 1.0

We're so excited to present to you the first Meadow v1.0 Release-Candidate!!! This is a MASSIVE release with a pile of fixes and way more features than we expected.

**Meadow.Cloud**

* **OtA Updates** - Meadow.OS and Meadow applications can now be updated Over-the-Air via Meadow.Cloud!
* **Push Messaging** - Meadow.OS now supports push-messaging from Meadow.Cloud as well as MQTT as a first-class feature.
**Meadow.OS + Meadow.Core**

* **Power & Sleep APIs** - Meadow.OS now supports Sleep and Wake operations for the device, and has a new set of APIs that expose the ability ability to put the device to sleep and then wake up on schedule.
* **Just-in-Time (JIT) Compilation** - Meadow applications can now enable JIT execution, providing a ~5x-10x performance boost for app execution.
* **New App Lifecycle** - We've greatly simplified the boilerplate code needed to create a Meadow application, as well as provided an easy way to integrate with the new Power, Sleep, and OS/App update lifecycle.
* **Lower Power Use on Idle** - The STM32 CPU now idles using its hardware capabilities, reducing total Meadow power consumption considerably.
* **TLS Certificate Validation & other improvements** - The OS now checks the full validity of TLS (aka. HTTPS/SSL) server certificates against a root Certificate Authority registry. We also implemented logic for more edge cases of TLS datastream processing.
* **Faster WiFi Connection** - We have made changes to the event model on the 
32 resulting in a 90% decrease in WiFi connection times, reducing WiFi connection time to 3-5 second on average.
* **Faster Meadow.OS Startup** - We removed an errant 10 second wait time on startup.
* **Core-Compute Module Ethernet Support** - Ethernet connectivity is now available on the Core-Compute Module.
* **Network Improvements** - We've spent a lot of cycles on advanced web socket features that weren't implemented yet that unlock a number of important service connectivity use cases.
* **Configuration Files** - Meadow now has robust support for compile-time configuration via YAML or JSON files.
* **Improved Meadow.OS Stability** - Some deep assembly-level instruction calls have been fixed up, providing stability around long-running processes, advanced socket operation, and more.
* **System.IO.Compression** - Meadow apps can now zip and unzip files and streams!
* **Memory Usage Decrease** - The .NET runtime was configured to reduce its memory use for internal data structures.

**Meadow.Foundation**

* **MicroGraphics** - We've optimized the APIs, combined with JiT and you'll see a 10x improvement in drawing speed. We've also cleaned up APIs and added an 8x16 font!
* **ePaper driver updates** - We've updated APIs and added new drivers including **12** new WaveShare ePaper drivers.
* **IO Expanders** - This release includes the long awaited updates to the **MCP23008** with working interrupts! It also includes 7 other MCP expanders and we released drivers for the AS1115 and the SerialWombat!
* **BMI270** - We've added a driver for this top-of-the line motion sensor which is included on the Project Lab board!

**Tooling**

* **App Linking** - Meadow apps are now linked at deploy time, which removes unused code. Deployment size with linking is typically reduced by 2/3rds. The result is a massive reduction of space on flash, RAM usage and results in faster startup and faster deployment.
* **Deployment/Debugging Stability** - We've fixed lots of paper cuts in the IDE extensions and added a number of new features that massively improve the day to day development experience with Meadow.
* **App Template Updates** - We've updated the Meadow App templates to support the new app lifecycle.

### Updating to RC-1

This is a full stack release requiring an OS update, new nuget packages, a new Meadow CLI and new Visual Studio extensions.

### Updating Meadow.CLI

Start by making sure you have the latest version of the CLI (0.90.0) by running:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

### Updating Meadow.OS

Download the latest os:

```bash
meadow download os
```

And update by putting your Meadow device in boot loader mode and running:

```bash
meadow flash os
```

**NOTE:** - After flashing Meadow.OS, if the runtime upload does not complete with an error of `cannot connect to Meadow`, push the `RST` button on your Meadow device and then execute:

```bash
meadow flash os -d
```

This skips the initial (already completed) Meadow.OS upload and retries the runtime upload. We're not sure what's causing this issue, but it's under investigation.

If you experience any stability or deployment issues you may need to erase the flash on Meadow and then re-install the latest OS:

```bash
meadow flash erase
```

### Release Details

### Meadow.Cloud

With Meadow.OS v1.0 RC-1, we've also launched the first beta of Meadow.Cloud, including two core features:

* **MQTT Push-Messaging** - Each Meadow device is now individually addressable and you can push messages containing arbitrary data to them.
* **Over-the-Air (OtA) Updates** - You can now push App updates remotely to devices.

Users interested in the beta can sign up using [this form](https://docs.google.com/forms/d/e/1FAIpQLSdeTF36um4sr_dc20Q8ie7bo-ZWu2DE4-sl9GhQI9vcE3We-g/viewform). Meadow Cloud OtA is available via Meadow.CLI right now, with a Web UI coming in the future.

### Meadow.OS

### Faster OS and App Startup

There was a leftover 10 second startup delay from debugging Meadow.OS startup and initialization code that we removed. Additionally, linking (see below) also greatly improved app startup speed. The net effect of these improvements has seen a dramatic increase in OS and App startup speed.

### Meadow.OS and .NET Stability

We've fixed several issues with the Mono runtime's execution on Meadow, including a bad value in a bespoke ARM-Thumb2 assembly-code trampoline that caused .NET runtime stability issues when using runtime internal calls from .NET code (e.g. in file and network I/O).

We also did a lot of work around the .NET Runtime -> Meadow.OS glue that fixed up a number of stability issues.

### Just-in-Time (JiT) Compilation

Meadow.OS now has JiT compilation support, which compiles code on startup to low-level assembly language, rather than executing .NET Intermediate-Language (IL) in a virtual machine as interpreted instructions. This provides around a magnitude of performance improvement across the board, with some code instructions seeing even more improvements. Check out the [Meadow Benchmarks Sample](https://github.com/WildernessLabs/Meadow_Performance_Benchmarks) for specific performance improvement benchmarks.

### Enabling JiT

While we've thoroughly tested JiT with all samples, there may still be edge cases where unexpected behavior is seen, so JiT is off by default. A later release will make it on by default.

To [enable JIT in your Meadow application](/Meadow/Meadow.OS/Configuration/OS_Device_Configuration)

1. **Add a Meadow config file** - add a text file named `meadow.config.yaml`
2. **Configure Build Action** - Ensure file is set to a Build configuration of *none* and is always copied to the Output Directory
3. **Enable JiT in Config** - Enable JIT in the `meadow.config.yaml` file - add the following YAML

    ```yaml
    MonoControl:
        Options: --jit
    ```

4. **Deploy** - Deploy your app using the IDE extension or Meadow.CLI as you normally would, at startup, Meadow.OS will compile your app for all the speed!

### Networking Stack

### Faster WiFi Connection

WiFi connection time has been reduced by 90%. Meadow should now connect to WiFi in 3 seconds or less.

### Stabilization

We've invested a huge amount of effort in this release resolving customer reported networking issues (thank you for filing [issues](https://github.com/WildernessLabs/Meadow_Issues/issues) with repros!) that exercised advanced socket features.

This release fixes a number of issues around web request stability as well as cloud integrations with Azure IoT, Google Cloud, and more.

### Core-Compute Ethernet Support

Ethernet is now available for use on the Core-Compute module.

### Configuration Files

We did a major overhaul to app, network, and OS build-time configuration support. We also re-enabled the WiFi configuration which was disabled in the last release due to a crasher bug.

Meadow apps now have sophisticated support for a number of configuration files and formats (both YAML and JSON).

Check out the [Configuration Guide](/Meadow/Meadow.OS/Configuration/) for more information.

### Meadow.Core

Since breaking APIs after release is never a good thing, we're driving hard toward a solid, future-proof Core API. The largest change here is in the application lifecycle. With the addition of Over-the Air (OtA) updating capability, Meadow needs to be able to do controlled shutdown and startup of the application. These changes require updating existing applications, and those changes are outlined below.

### API and Stability Fixes

### Serial Ports

We've exposed public setters for `Parity`, `DataBits` and `StopBits` so they don't have to be set only during construction.

### More Unitized

An underlying philosophy on Meadow is that to improve code clarity and reduce bugs, data should always carry units with it and all methods should use units where applicable. PWMs have been reworked to use `Frequency` units and `DigitalInputPorts` have been changed to use `TimeSpan` for both `GlitchDuration` and `DebounceDuration`

### Disposable Objects

While it's common for many applications to allocate and use a `Port` for its lifetime, it's not required. We've implemented the `IDisposable` pattern in the lower levels of many of the `Port` classes to free up pin allocations when the consuming port has been Disposed.

### New Meadow App Lifecycle

Meadow applications now have a prescriptive lifecycle that greatly simplifies the amount of boilerplate code necessary to create an app, including removal of the `static void Main()` launch method. There are also a number of new lifecycle events overridable in the `App` class that provide an easy way to hook into the new lifecycle features such as the **Power & Sleep APIs**, as well as **OtA updates**.

If you're moving from a Meadow.OS Beta app to a Meadow.OS Release Candidate app, you'll need to make a few updates.

For more information check out the following docs:

* **[Lifecycle Update](Lifecycle_Update)** - Instructions for updating apps from previous betas to the new app pattern.
* **[Meadow Apps](/Meadow/Meadow_Basics/Apps/)** - Provides an overview of the new app model and lifecycle events.

### Service Resolver

`Meadow.Core` now contains a static service resolver called `Resolver` that can be used to create, store, retrieve and even do dependency injection of class instances. The `Resolver` is the new mechanism for retrieving the existing `IApp` or `IMeadowDevice` in your application instead of static instances in the `Application`.

### Logging

The `Resolver` also contains an instance of a simple `Logger`. This `Logger` supports the same methods as the larger .NET logging interface and provides the ability to add log providers to allow your application to log to things like files, databases or REST endpoints. The default instance logs to the `Console`.

### Application Configuration

`Meadow.Core` now supports application configuration through config files names `app.config.json` or `app.config.yaml`. These files use the Microsoft Configuration Extensions API to maintain familiarity and a common API. Take a look at the [Application Settings Configuration Guide](/Meadow/Meadow.OS/Configuration/Application_Settings_Configuration) for more information.

### Network APIs

A unified API for getting access to the devices `INetworkAdapters` has been introduced and the old mechanisms for interacting with the WiFi adapter have been deprecated. See the updates in the [Networking Guide](/Meadow/Meadow.OS/Networking) for more information.

### Power & Sleep APIs

### Sleep API

The `Sleep` API has been implemented and moved to `PlatformOS`.

To put your Meadow into a low-power Sleep state, use the following call:

`Device.PlatformOS.Sleep(TimeSpan.FromSeconds(5));`

**Known Issue**: When waking from Sleep, if your application attempts to write to the `Console` within less than approximately 3 seconds, the underlying serial connection will not be available and the application will halt.  For this reason, we recommend adding a `Thread.Sleep(3000);` immediately after any call to `Sleep()` or at the top of any `Device.PlatformOS.AfterWake` handler.

### Reset API

The `Reset` API has been moved to `PlatformOS`.

To reset your meadow, use the following call:

`Device.PlatformOS.Reset();`

### Serial Ports

We've exposed public setters for `Parity`, `DataBits` and `StopBits` so they don't have to be set only during construction.

### Counters

We've added support for a `Counter` class on the device to count interrupt edges or pulses.

### Meadow.Foundation

This release includes new drivers, improved APIs, improved performance, and bug fixes. You can see the full is of fixes, improvements and new [drivers here](https://github.com/WildernessLabs/Meadow.Foundation/issues?q=is%3Aissue+milestone%3ARC1+is%3Aclosed).

### New drivers

* **BMI270** - We've added a driver for this top-of-the line motion sensor which is included on the Project Lab board!
* **MCP23xxx** - This release includes a complete rewrite of the MCP23008 driver and adds the MCP23S08, MCP23009, MCP23S09, MCP23017, MCP23S17 MCP23018, MCP23S18.
* **UC8151C** - An ePaper controller driver commonly used by WaveShare.
* **SSD1680** - Another ePaper driver used in a variety of displays including Adafruit.
* **WaveShare ePaper drivers** - We've added 12 WaveShare-specific drivers that make it easy to use WaveShare displays without hunting for drivers controller names.
* **SerialWombat** - We've added support for the popular PIC powered Serial Wombat IO expander.
* **AS1115** - This is a commonly used commodity priced IO expander and LED driver.
* **Altair 8800 Click board** - This special edition Click board includes 16 buttons and a 8x8 LED matrix.

### MicroGraphics

We've optimized the APIs, combined with JiT and you'll see a 10x improvement in drawing speed. We've also cleaned up APIs and added a 8x16 font!

### `CommonType` Moved

The `CommonType` enum has moved out of the `Leds` class.

If you've previously used `CommonType` with a fully qualified name - i.e. `Meadow.Peripherals.Leds.CommonType.CommonAnode`, update it to `CommonType.CommonAnode` and add `using Meadow.Foundation.Leds`.

### `displayColorMode` display driver parameter renamed to `colorMode`

This parameter has been renamed for simplicity and consistency. Will only impact code that explicitly assigns the ctor parameter by name.

### Tooling (Meadow.CLI, IDE Extensions, and Templates)

We've been reviewing the tooling code line-by-line and this release delivers dozens of fixes and optimizations. You should see better stability, consistency, and performance with both the Meadow CLI and the Visual Studio extensions.

* **Application Templates** - We've also updated the Meadow application templates to reflect the new and improved Meadow lifecycle APIs.
* **Just-in-time compilation** - JiT is enabled by default when creating new applications in Visual Studio.(JiT can be disabled by editing *meadow.config.yaml* in your Meadow project).

### Linking Enabled by Default

With RC-1, app code is linked by default. Linking (AKA "Tree-Shaking") walks the code tree and removes unused functions. This drastically reduces the amount of deployed code (`Hello, World` goes from `~26MB` to `5MB`) and has a number of massive benefits, including:

* **Faster Deployments** - App deployment is much faster, due to less code being uploaded.
* **More Available Storage** - Less uploaded code means more room on non-volatile storage (flash).
* **Faster App Startup and More Available Memory** - Less code means less code loaded into memory, reducing app startup and more available memory for allocations.

### Project Template Changes

With the greatly simplified boilerplate code needed to create a Meadow application, the project templates have been updated with the new lifecycle methods.

**Just-in-time compilation** - JiT is enabled by default when creating new applications in Visual Studio. (JiT can be disabled by editing *meadow.config.yaml* in your Meadow project).

### Debugging Stability

As part of the stability and performance work, we've invested significant time on debugging. Debugging should be more consistent and more stable across Visual Studio on Windows, Visual Studio for Mac and Visual Studio Code.

* [Interrupts : long delay before first signal #74](https://github.com/WildernessLabs/Meadow_Issues/issues/74) - JiT has all but eliminated this. There's still a delay on first interrupt, but it's much less noticeable now. With JIT enabled, it's between 10 and 20ms..
* [Performance issue when toggling pin #91](https://github.com/WildernessLabs/Meadow_Issues/issues/91) - JIT (the current iteration) has brought that down to roughly 0.11ms per pulse (an order of magnitude improvement).
* [Better app exit messaging #131](https://github.com/WildernessLabs/Meadow_Issues/issues/131) - Fixed as part of the new App Lifecycle.
* [SerialPort.Read method throw an exception when count is greater than available chars in circular buffer #166](https://github.com/WildernessLabs/Meadow_Issues/issues/166) - Fixed.
* [Interrupt/PushButton oddities on v2 #195](https://github.com/WildernessLabs/Meadow_Issues/issues/195) - Fixed.
* [WiFi Scan() should be async #199](https://github.com/WildernessLabs/Meadow_Issues/issues/199) - Network events and APIs have undergone a major overhaul, making things `async` by default.
* [Interrupts from MCP23008 don't work as expected #121](https://github.com/WildernessLabs/Meadow.Foundation/issues/121) - Fixed.
* [MCP23x08 Driver bugs #127](https://github.com/WildernessLabs/Meadow_Issues/issues/127) - Fixed.
* [Device crash after a while with HTTP requests #211](https://github.com/WildernessLabs/Meadow_Issues/issues/211) - Major network stack work in this release exercised and fixed a lot of underlying web socket corner cases.
* [extension of the Meadow.Utilities.BitHelpers #214](https://github.com/WildernessLabs/Meadow_Issues/issues/214) - 16-bit helpers have been added per customer request.
* [PCA9685 isn't unitized #265](https://github.com/WildernessLabs/Meadow.Foundation/issues/165) - Fixed.
* [PwmLed StartPulse doesn't work with durations over 1s #346](https://github.com/WildernessLabs/Meadow.Foundation/issues/346) - Fixed.
* [PwmLed started with a port overrides incoming frequency #349](https://github.com/WildernessLabs/Meadow.Foundation/issues/349) - Fixed.
* [Unitize duration for PiezoSpeaker #352](https://github.com/WildernessLabs/Meadow.Foundation/issues/352) - Fixed.
* [Ms5611 driver seems incomplete #360](https://github.com/WildernessLabs/Meadow.Foundation/issues/360) - Fixed.
* [TextDisplayMenu cannot have sub-menu of 1 item #381](https://github.com/WildernessLabs/Meadow.Foundation/issues/381) - Fixed.
* [ILI9488 driver should be 24bpp only #389](https://github.com/WildernessLabs/Meadow.Foundation/issues/389) - Fixed.
* [BufferRgb888 and 8888 fill method doesn't work #390](https://github.com/WildernessLabs/Meadow.Foundation/issues/390) - Fixed.
* [bufferRgb888 and 8888 missing InvertPixel implementation #391](https://github.com/WildernessLabs/Meadow.Foundation/issues/391) - Fixed.
* [PushButton LongPress not working properly #408](https://github.com/WildernessLabs/Meadow.Foundation/issues/408) - Default time duration for long-press added.
* [PushButton with port ctor fails #422](https://github.com/WildernessLabs/Meadow.Foundation/issues/422) - Fixed.
* [Buffer Overflow occurring on certain projects, that locked up Visual Studio ](https://github.com/WildernessLabs/Meadow_Issues/issues/212) - Fixed

### Known Issues
* If the Deploy fails during the file transfer, you MUST reset the board before deploying again. Deploy will fail if you don't. After resetting and re-deploying the transfer should then continue where it left off. A fix is being worked on for RC2
* There is some extra logging code that shows how many bytes are being sent and received between the Meadow and Visual Studio, so we can track down a buffer overflow bug. This extra logging will be removed in RC2.
* Occasionally (hopefully rarely) you may get an error which relates to serial port/addresses already being in use. You may have to reboot your machine and meadow device to be able to free up the port/address and be able to redeploy your Meadow. If you see it and can supply us with a consistent repro, that would be very useful to squashing this bug.
* [Windows Extensions] Due to an MS API change auto-deploy when debugging does not currently work. WORK AROUND: To debug on Windows deploy your app 1st, then hit the Debug button to step through your deployed code etc. We are working on a fix for this issue for RC2. Apologies for the inconvenience.

### Meadow.OS Deploy, App Deploy/Debug Workflow

This release has been a long journey that added our final v1.0 features, and did final polishes to our APIs, however, the OS Deploy, App Deploy/Debug cycles still have some hiccups that we'll spend time stabilizing for RC-2/v1.0.

## Beta 6.4

This is a **huge** release and includes a TON of stability fixes and changes. With it we are _very_ close to Release-Candidate status. This release includes fixes across the entire stack, including:

* **WiFi/Network Stability** - We've spent time fixing up issues on Azure IoT Hub integrations and MQTT.
* **Meadow.Core** - Lots of cleanup and final v1.0 fixes/deprecations/etc.
* **Tooling Improvements** - We've fixed a number of papercuts in Meadow.CLI and smoothed out the IDE experience in our Visual Studio extensions. And we've added Visual Studio for Mac 2022 support!
* **Seeed Studio Grove Drivers** - We've published 33 Seeed Studio Grove peripheral drivers!
* **mikroBus Drivers** - We've released drivers for 5 mikroBUS peripherals with more coming.

### Updating

This is a full stack release requiring an OS update, new nuget packages, a new Meadow CLI and new Visual Studio extensions.

#### Meadow.CLI

Start by making sure you have the latest version of the CLI (0.19.3) by running:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

#### Meadow.OS

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

### Meadow.OS

We've made a number of stability and functionality improvements in MeadowOS to enable support for the Core-Compute Module, better Power APIs, improved network APIs, etc. Most of these improvements enable features in the **Meadow.Core** section below.

One improvement of note - Meadow will now detect the executing hardware at runtime and throws an exception if the hardware in the `MeadowApp` signature doesn't match.

### Meadow.Core

We're continuing to standardize and improve our API surface. And this release includes several improvements. We've also added support for the Meadow Core-Compute module which gave us an opportunity to review, rethink, and standardize some of our existing APIs.

##### Beta attery Info

We're continuing progress on the power APIs. This release we've added a new `BatteryInfo` struct to Meadow.Contracts enabling the Battery API to return battery percentage, max voltage, etc.

#### Async Network APIs

We've modernized some of our WiFi and network APIs by replacing blocking calls with `async` methods. `Device.WiFiAdapter.Scan()` is now awaitable.

#### Unitization

The release continues to update APIs to use unitized values instead of ints/floats/doubles. The I2C APIs now take a `Meadow.Units.Frequency` to set bus speed.

There are also several APIs that have been updated to take a `TimeSpan` to represent a delay or duration.

#### Improved peripheral interfaces

This release cleans up several interfaces in Meadow Contracts and adds a few new ones.

* **`ILed`, `IPwmLed` and `IButton`** - Have updates and add a few missing key properties
* **`ICamera`** - We've added an interface for camera peripherals
* **Analog Joysticks** - We replaced `JoystickPosition` with `AnalogJoyStickPosition` and replace `IJoystickSensor` with `IAnalogJoystick`
* **Digital Joysticks** - Added a new `IDigitalJoystick` interface to represent 4 or 8 way digital joysticks
* **Analog Triggers** - Added a new `IAnalogTrigger` interface for analog triggers common on game console controllers

#### Removal of Deprecated Methods and Properties

Many calls that were deprecated with a warning in previous releases have been removed. These were largely in the SPI and I2C bus implementations.

#### Rename/Deprecation of `F7Micro` and `F7MicroV2`

`F7Micro` and `F7Microv2` class names have been deprecated and replaced with the more-appropriately named `F7FeatherV1` and `F7FeatherV2` classes. Backward support still exists and will give a deprecation error.  Future versions will escalate this to an error, so it is recommended you migrate your code.

#### Support for the Core-Compute Module

This release adds support for the new Meadow Core-Compute module with new `IMeadowDevice` and `IPinout` implementations. This support required refactoring of several base classes and interfaces.

#### Other Changes

* Added `IPin GetPin(string name)` method to `IMeadowDevice` interface
* Fixed a bug where instantiating a PWM port would reset existing GPIO ports and cause an `InterruptGroupInUseException`

### Meadow.Foundation

Meadow Foundation continues to see new drivers and API improvements.

This includes additions to Meadow.Foundation as well as two new driver collections supporting [Seeed Studio Grove](https://wiki.seeedstudio.com/Grove_System/) peripherals and [Mikroelectronika mikroBUS](https://www.mikroe.com/mikrobus). We've also moved the FeatherWing drivers into their own repo.

#### New Meadow.Foundation drivers

* `AS5013` - I2C hall-sensor 2D mini joystick
* `DS3502` - I2C digital potentiometer (community request)
* `HTU31D` - I2C humidity and temperature sensor
* `SHT4x` - Series of I2C humidity and temperature sensors
* `WiiExtensionControllers` I2C Nintendo Wii extension controller driver
* `VC0706` - Serial camera driver is complete!

New repos can be found here:

* [Meadow.Foundation.Grove Repo](https://github.com/wildernesslabs/meadow.foundation.grove)
* [Meadow.Foundation.mikroBUS Repo](https://github.com/wildernesslabs/meadow.foundation.MikroBus)
* [Meadow.Foundation.FeatherWings Repo](https://github.com/wildernesslabs/meadow.foundation.Featherwings)

### Meadow.CLI

* **.NET 6.0 support!** - This enables support for M1/M2 Apple Macs 
* **version params** - Several commands now accept a `--version` (`-v`) param allowing you to specify which OS version you want to flash to Meadow 
* **Improved error handling** - This includes fixing a silent failure when attempting to install dfu-util on Windows
* **Improved error messages** - The CLI is now properly handling several unhandled exceptions and error messages have been updated for clarity

### Visual Studio extensions
* **Port selector in Windows** - The Meadow extensions for Visual Studio 2019 and 2022 now have a Meadow port selector widget on the toolbar - this greatly streamlines selecting the Meadow COM port
* **Visual Studio for Mac 2022** - Now that VS for Mac 2022 has "gone gold" and enabled extensions we're now able to support the latest Mac IDE

### Known Issues

### Network

* **Large Payloads** - Meadow is limited to 4k payloads when POSTing data to a REST endpoint
* **MQTT** - Some customization is required in the MQTT nuget package - Wilderness Labs will be publishing a custom MQTT package for Meadow very soon

### Beta ug fixes

* [#117 Getting local IP address fails](https://github.com/WildernessLabs/Meadow_Issues/issues/117) - Fixed.

## Beta 6.3

This is fast follow to beta 6.2 with some much anticipated network stability improvements. We tested well beyond 3 million! HTTP requests with no degradation in performance! And this includes the Meadow Foundation Web Server - [Maple](http://developer.wildernesslabs.co/Meadow/Meadow.Foundation/Libraries_and_Frameworks/Maple%2EServer/).

### Updating

This update consists of OS binaries and a new CLI. There are no API changes or nuget updates. Expect to see another full stack update with the next release.

To update, start by installing the latest version of Meadow CLI (0.19.0):

```bash
dotnet tool update WildernessLabs.Meadow.CLI --global
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

### Known Issues

* **Visual Studio deployment** - When debugging, the extension may not automatically deploy your latest changes to your device. The workaround is to deploy first and then debug.
* **WiFi startup** with Config files has been disabled due to a regression. If using config files, you'll need to update your code to connect to your WiFi network programmatically. You can still get date and time via NTP with the meadow.config file.
* **D05 and D06 pins** as PWM Ports are not working. You will get an exception when using D06 and D05 will not output any voltage.

## Beta 6.2

This is another milestone release for Meadow! The team has been pushing hard on stability improvements and new features - unfortunately those two things aren't always complementary. We tried pushing this release more than once over the past few months and discovered regressions. We're really excited to deliver this version that unlocks new functionality and clears the path to v1.0!

* **More open-source** - We've open-sourced more of our API stack! [Meadow.Units](https://github.com/WildernessLabs/Meadow.Units) and [Meadow.Contracts](https://github.com/wildernesslabs/meadow.contracts) are now open-source - and this unlocks [Meadow.Linux](https://github.com/WildernessLabs/Meadow.Linux)! (still in early development)
* **Network stability** - WiFi stability improvements and general API cleanup
* **More drivers** - We've continued to invest in Meadow.Foundation, releasing eight (8) new driver packages + a huge collection of fixes and improvements

### Updating

This is a full stack release requiring an OS update, new nuget packages, a new Meadow CLI and new Visual Studio extensions. Start by making sure you have the latest version of the CLI (0.15.2) by running:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

### Meadow.OS

* **Network stability** - The network stack received some much needed love. NTP and DNS protocol implementation was improved, and support for POSIX socket options (via getsockopt()) is now implemented and available to .NET apps. Network stability will continue to be a focus for the next release.
* **Network APIs** - We've also spent time cleaning up behavior and naming of the WiFi and network API surface.
* **.NET Standard support** - Added another missing two type forwarding assemblies to the OS. This fixes issues with using some .NET Standard 2.1 nugets on the Meadow, including some more System.Text.Json issues.

The release also includes many less visible reliability improvements and adjustments on the file self-configuration system and Meadow/host communication.

### Meadow.CLI

The CLI has a few under-the-hood improvements for B6.2. It will now automatically erase the Meadow flash when updating from older versions of Meadow OS. This is to correct a partitioning bug introduced in B6.0.

### Meadow.Core

* **More open-source** - Two major components of the core API stack have been moved to open-source! [Meadow.Units](https://github.com/WildernessLabs/Meadow.Units) and [Meadow.Contracts](https://github.com/wildernesslabs/meadow.contracts)
* **More unitization** - We're continuing to review and improve our API surface - several APIs have been updated to use Meadow.Units instead of non-dimensional values for things like frequency and time. This brings some minor breaking changes - for example, when setting SPI speed.
* **Pinout fixes** - We discovered a couple of pins were misconfigured on Meadow V2 boards - specifically D10 and D11. This should fix issues when using PWM.

### Meadow.Foundation

* **New MaxBotix drivers** - We now support the MaxBotix series of distance sensors including I2C, analog and serial variants!
* **New SwitchingRainGauge driver** - This peripheral is commonly used with weather stations and we include one with [Clima!](https://www.github.com/wildernesslabs/Clima)
* **New PCA9633 driver** - A LED driver capable of driving up to 4 LEDs, commonly used for backlight and RGB applications
* **New MMA7660FC driver** - A low power 3-axis accelerometer with orientation and tap detection
* **New HMC5883L driver** - This 3-axis digital compass has been under construction for over year and we're excited to see it complete and released
* **New Keyboard FeatherWing driver** - The BBQ 10 Keyboard FeatherWing includes a Blackberry keyboard, an analog light sensor and a full color touch screen!
* **New BME68x drivers** - Meadow now supports I2C Bme680s and Bme688s - SPI support coming soon
* **New AS1X15 ModBus drivers** - Meadow now has ModBus support!!

You can see the full list of improvements and fixes [here](https://github.com/WildernessLabs/Meadow.Foundation/milestone/14)

### Known Issues

* When using Visual Studio - When debugging, the extension may not automatically deploy your latest changes to your device. The workaround is to deploy first and then debug.
* Joining WiFi network at startup with Config files has been disabled due to a regression. If using config files, you'll need to update your code to connect to your WiFi network programmatically. You can still get date and time via NTP with the meadow.config file.
* WiFi stability - although B6.2 has improved network stability, we're still seeing issues after 100+ network requests.
* Configuring D05 and D06 pins as PWM Ports are not working. You will get an exception when using D06 and D05 will not output any voltage.

## Beta 6.0.1

This is a point release with a big focus on tooling features and stability along with a number of Meadow.Foundation stability fixes, performance improvements, and API consistency updates.

* **VS2022 support** Meadow officially supports Visual Studio 2022! Open the Manage Extensions dialog in Visual Studio to install.
* **Debugging stability** This version sees a big improvement in debugging stability and consistency, make sure you have the latest VS extensions installed.
* **MicroGraphics refactoring** We've spent a lot of time optimizing and refactoring our Meadow.Foundation APIs, this release sees some big changes (some breaking) that both simplifies and brings consistency to Meadow's graphics APIs.

### Updating

There is no OS change for this release so you do not need to flash your Meadow board, but make sure you're running b6.0 if you haven't already updated.

There are new nuget packages, a new Meadow CLI and new Visual Studio extensions.

Start by installing the latest version of the CLI (v0.15.1) by running:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global --version 0.15.1
```

### Visual Studio Extensions

The Visual Studio for Windows extension has been reworked and refactored. This was necessary to support Visual Studio 2022 on Windows but also gave us the opportunity to carefully review the code for stability and usability. Deploying and debugging on Windows 10 & 11 should be a lot more stable and consistent. And there's more goodness coming in future releases :)

**Note** - Visual Studio 2022 for Mac isn't supported - at the time of this release, the VS4Mac 2022 preview doesn't (yet) support extensions.

**Known Issues** - In rare occasions you may experience deployment failures. If the failures are consistent, you may need to disable/enable or re-install the Meadow extension.

We're working on the issue. If you experience the problem and can provide a consistently reproducible set of steps, [please file an issue](https://github.com/WildernessLabs/VS_Win_Meadow_Extension/issues). Thank you!

### Meadow.CLI

The CLI receives more stability improvements and two new commands:

* **`meadow use port`** can be used to set a preferred serial port
* **`meadow file delete all`** will remove all files from your Meadow device

### Meadow.Core

**Note: Breaking Change** - SPI Bus speed is now defined as a `Meadow.Units.Frequency` instead of an integer. To update, in most cases you'll replace your old int value with `new Meadow.Units.Frequency(value)`.

This also enabled Meadow.Foundation drivers to expose a `DefaultSpiBusSpeed` property (details below).

### Meadow.Foundation

This release brings a big list of stability fixes, API updates and performance improvements - see the Bug fixes below for the complete list.

* **New BB Q10 Keyboard driver** Ever wanted a BlackBerry-style keyboard for your Meadow projects? You can now use [Solder Party's](https://www.tindie.com/products/arturo182/keyboard-featherwing-qwerty-keyboard-26-lcd/) keyboard with Meadow
* **ePaper display performance** Full screen redrawing speed is 10-15% faster on most ePaper displays
* **Breaking Change: Renamed GraphicsLibrary to MicroGraphics** - We renamed the `GraphicsLibrary` class to `MicroGraphics` to bring the class inline with branding and documentation, all instances in your code will need to be renamed
* **Breaking Change: `DisplayBase` -> `IGraphicsDisplay`** - We deprecated `DisplayBase` and replaced it with `IGraphicsDisplay` - all graphics displays now implement this interface
* **Breaking Change: `FontBase` -> `IFont`** - We deprecated `FontBase` and replaced it with `IFont` - all font classes now implement this interface
* **Moved graphics enums out of GraphicsLibrary** - This is API cleanup, several enums were nested in the `GraphicsLibrary` class, and have been moved directly into the `Meadow.Foundation.Graphics` including: `ColorType`, `ScaleFactor`, `TextAlignment`, and `BitmapMode`
* **Samples updated to support Meadow V2** - All Meadow.Foundation samples updated to run on the Meadow V2 boards by default, if you're using V1 boards change the `MeadowApp` class signature from `App<F7MicroV2, MeadowApp>` to `App<F7Micro, MeadowApp>` (remove the `V2`)
* **SPI peripherals now have a default value** - No more guessing on the appropriate SPI bus speed for peripherals, all SPI drivers now have a public `DefaultSpiBusSpeed` of type `Meadow.Units.Frequency`

#### Beta ug fixes

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

## Beta 6.0

This is a big new release with huge new features and lots of optimizations and improvements, including:

* **Debugging** - What what?! Yup; in-IDE debugging in Visual Studio for Windows, Mac, AND VS Code.
* **Device/OS Configuration** - Device and OS settings can now be configured at build time via yaml config files.
* **.NET Standard 2.1 Fixes** - The last of the .NET Standard 2.1 deployment stuff is in, fixing `System.Text.Json`.
* **Faster, More Reliable Networking** - There have been a number of big optimizations in the networking stack promising much more reliable networking.
* **Improved Deployment** - App and OS deployment has undergone a massive update, offering a more reliable experience.
* **Up to 20x Graphics Performance Improvements** - New graphics optimizations to improve drawing performance, especially for fills and rectangles.
* **Meadow.Foundation Improvements** - Fixes, optimizations and stability improvements plus new buffer classes to manage in-memory graphics/sprites.

### Updating

This is a full stack release requiring an OS update, new nuget packages, a new Meadow CLI and new Visual Studio extensions. Start by making sure you have the latest version CLI (v0.15.0) by running:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

### Meadow.OS

#### Debugging

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

### Meadow.Core

### F7 Device Coprocessor Lifecycle Cleanup

The `Coprocessor` on F7 devices are automatically initialized during device startup, so when using the `WiFiAdapter` or `BluetoothAdapter`, you no longer need to initialize the coprocessor first.

* **Breaking Change** - The `InitCoprocessor()`, `InitWiFiAdapter()`, and `InitBluetoothAdapter()` methods are no longer necessary, and are either inaccessible or have been removed entirely.

### Added Full-Duplex Support to `IByteCommunications.Exchange()` and `SpiPeripheral`

The `IByteCommunications.Exchange()` method now has an optional parameter of `DuplexType`:

```csharp
void Exchange(Span<byte> writeBuffer, Span<byte> readBuffer, DuplexType duplex = DuplexType.Half);
```

This enables protocols that support full-duplex communications (data received at the same time as it's sent) to be supported at the peripheral level, rather than having to use the bus class directly.

Previously, if you wanted to do full-duplex communications, you needed to use the `SpiBus.Exchange()` method, which meant passing the chip select pin. This streamlines that workflow.

### Meadow.Foundation

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

### Beta ug fixes 

* [#200 Some Tea5765 APIs set to private](https://github.com/WildernessLabs/Meadow_Issues/issues/200)
* [#199 MS5611 checks for wrong i2c address](https://github.com/WildernessLabs/Meadow_Issues/issues/199)
* [#196 Update St7565 to use `Memory<byte>`](https://github.com/WildernessLabs/Meadow_Issues/issues/196)
* [#194 FeatherWings.DotstarWing does not implement InvertPixel](https://github.com/WildernessLabs/Meadow_Issues/issues/194)
* [#190 ADXL345 driver not working](https://github.com/WildernessLabs/Meadow_Issues/issues/190)
* [#189 VEML7700 light sensor driver not working](https://github.com/WildernessLabs/Meadow_Issues/issues/189)

## Beta 5.3

Our most stable and complete release yet. We spent a lot of effort fixing issues introduced in b5.1/b5.2, and also added SQLite support to Meadow! Big changes and fixes include:

 * **SQLite Support** - SQLite is now built into Meadow.OS and Frank added support for Meadow in his SQLite.NET ORM.
 * **Bluetooth Fixes** - There were some strange bugs introduced to Bluetooth in b5.2, we fixed them.
 * **Network Fixes** - There are a pile of Network stack fixes.
 * **Azure Fix** - The auth bug that prevented integration with Azure is fixed.
 * **Meadow.Foundation Cleanup** - Lots of sample cleanup and some small API upgrades.
 * **Docs** - We re-organized some of our Meadow.OS docs and did a _huge_ update on Meadow.Foundation documentation.

### Updating

This release requires an OS update and nuget package updates. We released updates to the CLI out-of-band, make sure you have the latest version installed by running: 

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

### SQLite

Yaaaasss!! Meadow.OS now has first-class, integrated support for on-device databases via SQLite. Additionally, we worked with Frank Krueger to get Meadow support built into his SQLite.NET ORM, which adds super easy and lightweight ORM access. Check out the new [SQLite guide](/Meadow/Meadow.OS/SQLite/) for details.

### API Cleanup

 * **Moved `SynchronizationContext` to Meadow.OS** - Previously, the `BeginInvokeOnMainThread()` method was executed on the current `Device` class, in this release we moved it to the `MeadowOS` class.
 * **`IWiFiAdapter.Scan()` returns an `IList<WiFiNetwork>` instead of an `ObservableCollection`** - The `ObservableCollection` was leftover from a previous API design and unnecessary.

### Meadow.Foundation

* **MicroGraphics cleanup** - GraphicsLibrary now tracks pen color when saving and restoring state, and added support for `IgnoreOutOfBoundsPixels` for several displays
* **Maple improvements** Maple server is continuing to evolve and now has basic route aliasing support
* **Standardized I2C address properties** All I2C peripherals now have a standard `DEFAULT_ADDRESS` property
* **Samples Cleanup** We did a top to bottom review to make sure samples are well formed, well named, and written consistently to make it easier to start working with a new peripheral driver

### Documentation 
Leveraging the work done to update the Meadow.Foundation samples, we built tooling to automatically update code snippets in the peripherals docs from the samples to make sure they're always up to date. Along with some other validation and cleanup, we updated over 90 docs!

### Tooling
The Meadow CLI received a few updates to improve stability and make it easier/more consistent to flash the latest version of Meadow OS to your board.

### Beta ug Fixes

* [#159 Device.GetDeviceInformation() throws an error](https://github.com/WildernessLabs/Meadow_Issues/issues/159)
* [#141 HttpClient fails with 'No such host is known' when trying to POST to MSFT Oauth endpoint](https://github.com/WildernessLabs/Meadow_Issues/issues/141)
* [#23 Add OS version to MeadowOS class](https://github.com/WildernessLabs/Meadow_Issues/issues/23)
* [#121 --Download causes an exception when executed in the Firmware directory on Windows](https://github.com/WildernessLabs/Meadow_Issues/issues/121)
* [#122 Cosmetic: Delete the firmware zip files after downloading](https://github.com/WildernessLabs/Meadow_Issues/issues/122)
* [#128 Meadow_Performance_Benchmarks app won't run](https://github.com/WildernessLabs/Meadow_Issues/issues/128)
* [#163 IByteCommunications has no WriteRegister method that takes a `Span<byte>`](https://github.com/WildernessLabs/Meadow_Issues/issues/163)
* [#184 uGraphics Canvas state doesn't store pen color](https://github.com/WildernessLabs/Meadow.Foundation/issues/184)
* [#109 For HBridgeMotor pwmFrequency can be specified - but 1600 is always used anyway](https://github.com/WildernessLabs/Meadow.Foundation/issues/109)
* [#188 https://github.com/WildernessLabs/Meadow.Foundation/issues/188](https://github.com/WildernessLabs/Meadow.Foundation/issues/188)

## Beta 5.2

This is a small release that mainly focuses on cleanup of Meadow.Foundation, and fixing Bluetooth (which we broke in b5.1):

 * **BLE Fix** - We broke the Bluetooth stack (among other small things) in b5.1 due to issues with our CI release pipeline. Most of the fixes we were able to ship out of band as Nuget updates, but BLE remained broken. This release fixes that.
 * **Antenna Switch Fix** - We regressed switching between the onboard and external antenna. That's fixed in this release.
 * **Meadow.Foundation Upgrades** - A number of API cleanups, optimizations, and the like.

### Updating

This is a full-stack release and will require an OS update, nuget updates, IDE extensions, and CLI updates.

Note: to update the Meadow.CLI, run the following from a command line:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

### Meadow.Foundation

 * **Modernized the `PiezoSpeaker` API** - Now uses `async` when playing a tone.
 * **Added `PenColor` to µGraphics** - This new property makes it possible to retrieve the current pen color.
 * **Minor drawing optimizations in uGraphics** - Faster drawing.
 * **Maple Server Fixes**
   * Client and Server now support HTTP `Post`.
   * API Cleanups.
   * Fixed JSON serialization by switching to `SimpleJson`

### Beta ug Fixes

 * [#125 - System.Net.HttpClient Hangs if Wi-Fi is not connected first](https://github.com/WildernessLabs/Meadow_Issues/issues/125) - Fixed. Will now throw an exception.
 * [#138 - Unable to create AnalogInputPorts for D06 & D09](https://github.com/WildernessLabs/Meadow_Issues/issues/138) - This was actually fixed a while ago, we just missed closing the bug.
 * [#152 - Meadow.CLI tries to flash ESP if mono is not disabled](https://github.com/WildernessLabs/Meadow_Issues/issues/152) - This was fixed with the Meadow.CLI rewrite.
 * [#160 - Meadow hangs on Device.BluetoothAdapter.StartBluetoothServer](https://github.com/WildernessLabs/Meadow_Issues/issues/160) - Fixed.

## Beta 5.1

This is another huge release, with big changes across the boards. Highlights include:

 * **.NET Standard 2.1** - The entire Meadow stack has been upgraded to .NET Standard 2.1 (from 2.0 in b5.0).
 * **Web Request Memory Leak Fixes** - We've fixed the big memory leak associated with web requests.
 * **Meadow.CLI Rewrite** - Meadow.CLI has been completely rewritten from the ground up.
 * **VS Code Templates** - The Meadow extension for VS Code now has Meadow App and Library templates.
 * **I2C/SPI API Cleanup** - Much cleaner and more consistent APIs between I2C and SPI, with heavy use of `Span<byte>` to reduce allocations and GC churn.
 * **File system** - Meadow now supports persistent file storage and has named directories.
 * **Meadow.Core Project Refactor** - Meadow.Core has been split out into separate project for `Contracts`, `Units`, `Core`, and device specific nuget packages.
 * **Meadow.Foundation Cleanup** - Massive cleanup on Meadow.Foundation, making drivers more consistent and removing a lot of duplicate code.
 
**Note:** Just like the previous release, b5.1 has a number breaking changes.

### Updating

This is a full-stack release and will require an OS update, nuget updates, IDE extensions, and CLI updates.

Note: to update the Meadow.CLI, run the following from a command line:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

### Meadow.OS

### .NET Standard 2.1 Support

This release continues our .NET Standard journey; upgrading from 2.0 to 2.1 AND upgrading ALL of the Meadow projects to .NET Standard 2.1 for better code compatibility and cross-platform support.

### Upgrading Projects

Meadow app projects will need to be updated from .NET 4.7.2 to .NET Standard 2.1 and requires some minor updates to the .csproj file. [Checkout our blog post on updating Meadow projects for details](https://blog.wildernesslabs.co/update-meadow-app-from-net-framework-to-net-standard/).

### Web Request Memory Leak

The memory leak that caused Meadow applications that made lots of web requests crash has been largely eliminated. We've now had Meadow applications successfully run over 100,000 web requests without failure!

### SSL/HTTPs Improvements

We fixed the memory leak occurring after every HTTPS connection, reduced general memory consumption per connection and removed the debug spew that would get output when making SSL/HTTPs requests.

### Meadow.Core

### File System

While Meadow has had a non-volatile file system and storage for a while, the IDEs would delete files during deployment, rending it not very useful.

In b5.1, we've fixed that, so now files in special folders will persist during app deployment, and we've also added named directories to the `MeadowOS.FileSystem` class:

```csharp
CreateFile(MeadowOS.FileSystem.TempDirectory, "hello.txt");
```

[File System guide](http://developer.wildernesslabs.co/Meadow/Meadow_Basics/File_System/)

Check out the [FileSystem_Basics app sample in Meadow.Core.Samples](https://github.com/WildernessLabs/Meadow.Core.Samples/tree/main/Source/OS/FileSystem_Basics) to see it in action.

### I2C/SPI API Updates

We've done a massive overhaul of the I2C and SPI APIs, making them not only consistent, but also enabling them to support peripheral communications without heap allocations to reduce garbage collection churn. As part of that, we leaned into the new `Span<T>` class, so any of the calls to `Read()`/`Write()` that took `byte[] buffer` before now take `Span<>`.

### Meadow.Core Project Refactor

This is more of an implementation detail right now, but we split the `Meadow.Core` project into separate packages for `Meadow.Contracts`, `Meadow.Units`, and `Meadow.Core`, as well as board specific packages like `Meadow.F7`.

This will allow us to extend Meadow to additional platforms in the future. Stay tuned for fun stuff here. ;)

### Tooling

### Meadow.CLI Rewrite

The Meadow.CLI library and command line interface has been completely rewritten from the ground up. It's now async/await turtles all the way down, and is much more reliable, contains a pile of new features, including single command Meadow.OS deployment, and more. We also cleaned out the cobwebs of obsoleted no-longer supported commands that littered the old Meadow.CLI codebase.

### VS Code Templates

The Meadow VS Code extension now includes Meadow App and Library templates for C#, F#, and VB.NET for your coding pleasure.

### Meadow.Foundation

We spent a lot of time on Meadow.Foundation this release. We've been going through every sensor from top to bottom, cleaning them up, making them consistent, and generally raising the code quality and organization.

We're now about 95% through the cleanup and updates to get Meadow.Foundation to a v1.0 level of quality.

### New Sensor Base Classes

Along the way, we created new sensor base classes that handle much of the boilerplate for sensors and were able to excise an absolutely _massive_ amount of repetitive code from the existing sensors, as well as make an easy upgrade from sensors that didn't conform to the `Read()`/`StartUpdating()`/`StopUpdating()` pattern.

New senor base classes and their inheritance chain include:

 * **`ObservableBase<UNIT>`** - This is the very bottom of the inheritance chain and provides all the base functionality for the filterable observable pattern. This class is used by both sensors and other classes that need to notify `IObserver` subscribers.
 * **`SensorBase<UNIT>`** - This is the base class that provides the bare minimum sensor functionality for sensors that manage their own read/update lifecycle. It's most often used by sensors that raise events based on an underlying port lifecycle. For instance, sensors like the `AnalogTemperature` sensor use this because the update lifecycle is provided by the underlying `AnalogInputPort`.
 * **`SamplingSensorBase<UNIT> : SensorBase<Unit>`** - This is the most common base class to inherit from by sensors and adds the `StartUpdating` and `StartUpdating` methods. 
 * **`ByteCommsSensor<UNIT> : SamplingSensorBase<UNIT>`** - This class is for I2C or SPI peripherals and adds the plumbing for the underlying `IByteCommunications` device such as an `ISpiPeripheral` or `II2cPeripheral`.

### Beta ug Fixes

 * [#46 - Uploading CSharp.Scripting dlls causes Meadow to Lock up when dll is referenced](https://github.com/WildernessLabs/Meadow_Issues/issues/46) - Fixed with the new deployment tooling stuff. 
 * [#154 - Meadow Locks Up after 3915 Iterations](https://github.com/WildernessLabs/Meadow_Issues/issues/154) - Fixed.
 * [#153 - HttpClient memory leak](https://github.com/WildernessLabs/Meadow_Issues/issues/153) - Fixed.
 * [#151 - .NET templates generated by WildernessLabs.Meadow.Template::0.2.0 generate a build error](https://github.com/WildernessLabs/Meadow_Issues/issues/151) - Fixed.
 
### Known Issues

 * **`System.Text.Json` is broken** - Due to a bug with how `System.Text.Json` references `System.Memory.dll`, switching to .NET Standard 2.1 broke compatibility. As a workaround, please use `NewtonSoft.Json` for now. This will be fixed in the future. For more information, see [this DotNET Runtime issue](https://github.com/dotnet/runtime/issues/49211).

* **Some other Nuget packages may also be broken** - Related to the above, other Nuget packages that target .NET Standard 2.0 (not 2.1) and, at the same time, use Nugets to bring in .NET Standard 2.1 capabilities (e.g. `System.Memory`, `System.Buffers`), may not work, producing runtime and build issues.

## Beta 5.0

Beta 5.0 is here and it's massive. This is a huge release for Meadow with major new features and big changes, highlights include:

 * **Bluetooth v1.0** - That's right, BLE support is here. Check out the [Bluetooth Guide](/Meadow/Meadow.OS/Bluetooth) for details.
 * **.NET Standard 2.0 API Support** - Meadow now fully supports the .NET Standard 2.0 API surface (equivalent to .NET Core 3.0), opening up a plethora of .NET code and Nuget packages for your use in Meadow applications.
 * **F# Support Fix** - The new .NET Standard support along with the linker fixes our F# integration, so you can use F# to build Meadow apps again.
 * **VB.NET Support** - We also added VB.NET support including templates in both Visual for Windows and Mac.
 * **`IIODevice` Rearchitecture** - `IIODevice` has been split out into a number of individual _controller_ interfaces such as `IAnalogInputController`, `IDigitalOutputController`, `II2cController`, etc. This great simplifies drivers that extend the [Unified IO Architecture](/Meadow/Meadow.Foundation/Unified_GPIO_Arch/)
 * **Unitization** - We've added strongly-typed units such as `Temperature`, `Mass`, etc., to all of our Meadow.Foundation drivers. No more ambiguous return values.
 * **`IObservable`** - Simplification, cleanup, and a much more powerful pattern.
 * **Meadow.Foundation** - In addition to the units mentioned above, Meadow.Foundation's drivers underwent a massive audit, and this release includes the first half of a major effort to cleanup the existing drivers and make them more consistent and easy to use.
 * **VS Code Support** - Thanks to an enterprising community member, we now have initial support for building and deploying Meadow applications in VS Code!

**Note:** It also has a number breaking changes; as we approach Meadow.OS v1.0 we are taking the opportunity to pay down architectural debt, make our APIs consistent, and generally apply polish.


### Updating

This is a full-stack release and will require an OS update, nuget updates, IDE extensions, and CLI updates.

Note, to update the Meadow.CLI, run the following from a command line:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

### Meadow.OS

### Beta luetooth Low-Energy (BLE) Support

The b5.0 release of Meadow contains a draft subset of BLE features that cover a large number of basic bluetooth use cases and includes the following feature support:

 - **User-Definable BLE Definition Tree** - You can create a BLE tree `Definition` of _services_ and _characteristics_ that contain primitive type values including; `int`, `double`, `string`, etc.
- **BLE Server** - Start a bluetooth server on the Meadow and initialize it with your BLE definition tree.
- **Accept Client Connections** - Connect to the server from a _client_ device application such as a mobile phone.
- **Edit Values at Runtime** - Write values to the graph from your managed application. Those values can be read by a BLE Client app.
- **Value Change Notifications** - Get notified in your Meadow application when a BLE client writes to a characteristic in you BLE tree.

For more information, see the [Bluetooth Guide](/Meadow/Meadow.OS/Bluetooth/).

### .NET Standard 2.0/.NET Core 3.0 API Support

Though technically the Meadow runtime already supported .NET Standard 2.0, we weren't bundling the facade dlls (such as `NetStandard.dll`) into the `MeadowAssemblies` nuget package, so if you referenced a nuget or code that targeted those API surfaces, you'd get an error. 

We're now bundling all the requisite .NET Standard/.NET Core facade dlls and if they're referenced, they'll get deployed with your Meadow application.

### F# Support Fixed

The release of F# 5 broke Meadow's support for F# because it included a number of .NET Standard facade dlls that we were not shipping (as well as a number of other dlls). 

Enabling .NET Standard support solved this breaking change, so you can once again build and deploy F# projects on Meadow!

### VB.NET Support

You can now create Meadow applications in VB.NET! Technically, we supported it before, but now we have templates for both Meadow applications and libraries.

### Finalizers Enabled

A small bug was keeping us from enabling the finalizer thread, causing memory and resource leaks in the .NET runtime. The bug is now fixed and finalizers are run.

### Meadow.Core

In addition to Bluetooth, Meadow.Core got a number of major new features and a lot of cleanup and overhaul of existing features and APIs, including:

 * **Unitization**
 * **`IResult<UNIT>` Introduction**
 * **`IIODevice` Rearchitecture**
 * **`IFilterableObservable` Simplification and Overhaul**
 * **Processor Temperature**

### Unitization

Unitization is one of the biggest changes to the Meadow stack yet. 

### Introducing Units

In b5.0, we've added a number of unit types that describe a measure of something, including:

 * `AbsoluteHumidity`
 * `Acceleration`
 * `Acceleration3D`
 * `Angle`
 * `AngularAcceleration`
 * `AngularAcceleration3D`
 * `AngularVelocity`
 * `Azimuth`
 * `Concentration`
 * `Current`
 * `Density`
 * `Energy`
 * `Frequency`
 * `Illuminance`
 * `Length`
 * `MagneticField`
 * `MagneticField3D`
 * `Mass`
 * `Power`
 * `Pressure`
 * `RelativeHumidity`
 * `Speed`
 * `Temperature`
 * `Torque`
 * `Voltage`
 * `Volume`

### Unit Conversions

Each of these units have an enum of `UnitTypes` that they can be described as, as well as accessed as, via properties.

For instance the `Temperature` type has properties such as `Fahrenheit`, `Celsius`, `Kelvin`, etc. that allow you to access the unit value, converted to that particular `UnitType`. Consider the following code:

```csharp
var temp = new Temperature(32, UnitType.Fahrenheit);
Console.WriteLine($"{temp.Celsius:N2}C"); // outputs `0C`
Console.WriteLine($"{temp.Fahrenheit:N2}F"); // outputs `32F`
```

The units are all lightweight `struct` types which help to reduce heap allocations (when not boxed by Nullable), and have built in math operator and comparison support so you can perform math operations and comparison such as:

```csharp
Temperature t1 = new Temperature(1);
Temperature t2 = new Temperature(10);
Assert.That(t1 != t2);
Assert.That((t1 + t2) == new Temperature(11));
Assert.That((t2 - t1) == new Temperature(9));
Assert.That(t1 < t2);
```

### Meadow.Core Support

The largest impact of these units are in Meadow.Foundation, but Meadow.Core's `IAnalogInputPort` now utilizes the `Voltage` type to return analog readings, rather than just a `float`.

**Note:** This conversion is not fully complete; additional changes around units to reduce ambiguity and unit conversion errors that didn't make it into this release will arrive in a future beta including:
 * Replacement of `float frequency` arguments with `Frequency` unit.
 * Replacement of `int duration` arguments with `TimeSpan` object.

### `IChangeResult<UNIT>` Introduction

To help support the _Units_ architecture, we've introduced a new class, `IChangeResult<UNIT>` that replaces the various `EventArgs`, `Conditions`, and `ChangeResult` types that were previously used to carry data during events and observable notifications:

```csharp
public interface IChangeResult<UNIT> where UNIT: struct
{
    UNIT New { get; set; }
    UNIT? Old { get; set; }
}
```

There is also an accompanying `ChangeResult<UNIT>` class that provides a concrete implementation for the interface. As opposed to `EventArgs`, which is defined as a `class`, `ChangeResult<UNIT>` is actually a struct, to help prevent allocations and Garbage Collector (GC) churn.

Additionally, the `Old` property is now nullable, since on the first notification, there won't be a previous reading, and this provides the ability to use C# 8's nullable patterns to prevent the dreaded `Null Reference Error`:

```csharp
Console.WriteLine($"new: {result.New.Celsius:N2}C, old: {result.Old?.Celsius:N2}C");
```

### `IIODevice` Rearchitecture

Previously, Meadow.Core had a catch-all `IIODevice` interface that described an IO device that could have every kind of IO imaginable, including analog, digital, SPI, Serial, I2C, etc. This meant that IO device drivers in Meadow.Foundation had to implement it in order to extend the [Unified IO Architecture](/Meadow/Meadow.Foundation/Unified_GPIO_Arch/).

In b5.0, that got split out into a number of `Meadow.Hardware` controller interfaces that describe discrete IO types, including:

 * `IAnalogInputController`
 * `IBiDirectionalController`
 * `IDigitalInputController`
 * `IDigitalOutputController`
 * `II2cController`
 * `IPwmOutputController`
 * `ISerialOutputController`
 * `ISerialMessageController`
 * `ISpiController`

Now, drivers for IO Expanders that provide these various features only need to implement the specific controller types they support, vastly reducing the amount of boilerplate code necessary to implement an IO expander.

### Processor Temperature

The temperature of the main processor is now available via `GetProcessorTemperature()`:

```csharp
Console.WriteLine($"Processor Temp: {Device.GetProcessorTemperature().Celsius:n2}C");
```

### Meadow.Core Breaking Changes

 - **`F7Micro.InitializeCoProcessor`** has been renamed to `InitializeCoprocessor`. Note casing change.
 - **`DigitalInputPortEventArgs`** - Has been renamed to `DigitalPortResult` and is now a struct, rather than a class.
 - **`IAnalogInputPort` and `AnalogInputPort`** - `Changed` has been renamed to `Updated`.
 - **`IAnalogInputPort` and `AnalogInputPort`** - `StartSampling()` and `StopSampling()` have been renamed to `StartUpdating()` and `StopUpdating()`, respectively. 
 - **`IAnalogInputPort` and `AnalogInputPort`** - Now utilize a `Voltage` struct in place of `float` for voltage levels. 
 
### Meadow.Foundation

Meadow.Foundation underwent a major set of upgrades and cleanup in this release. We're still in progress with this so some sensors haven't gotten a cleanup yet, but some of the big things include:

 * **Unitization**
 * **Nullable Properties & Tuples**
 * **`IFilterableObservable` Simplification**

### Unitization

In addition to adding units to Meadow.Core, we've updated all the sensors to return strongly typed Units.

### Nullable Properties & Tuples

Nearly all of the sensors and sensor interfaces now have C# 8 nullable properties for the data they sample. Consider the `ITemperatureSensor` interface, for instance:

```csharp
public interface ITemperatureSensor : ISensor
{
    Temperature? Temperature { get; }
    event EventHandler<IChangeResult<Temperature>> TemperatureUpdated;
}
```

### Tuples on Composite Sensors

Composite sensors; those that implement multiple sensor contracts like the BME280 which does temperature, humidity, and pressure, now implement both strongly named Tuples and individual properties for their constituent data parts. 

For instance, the `Bme280` driver has the following properties:

```csharp
// Tuple `Conditions`:
public (Temperature? Temperature, RelativeHumidity? Humidity, Pressure? Pressure) Conditions;
// individual:
public Temperature? Temperature => Conditions.Temperature;
public Pressure? Pressure => Conditions.Pressure;
public RelativeHumidity? Humidity => Conditions.Humidity;
```

The Tuple is also passed as the `UNIT` via the `IChangeResult<UNIT>` argument in events and notifications, so you can easily access all of the properties via friendly-named, nullable items in the Tuple:

```csharp
sensor.Updated += (object sender, IChangeResult<(Temperature? Temperature, RelativeHumidity? Humidity, Pressure? Pressure)> result) => {
    Console.WriteLine($"  Temperature: {result.New.Temperature?.Celsius:N2}C");
    Console.WriteLine($"  Relative Humidity: {result.New.Humidity:N2}%");
    Console.WriteLine($"  Pressure: {result.New.Pressure?.Millibar:N2}mbar ({result.New.Pressure?.Pascal:N2}Pa)");
};
```

### `IFilterableObservable` Simplification and Overhaul

The [filterable `IObservable` API](/Meadow/Meadow_Basics/Events_and_IObservable/) in Meadow is incredibly powerful and allows you to create modern, composable, architectures with powerful event filtering, but it had two drawbacks:

 * Syntax, especially for driver development, was complex.
 * Creating composite drivers required special `Conditions` classes that aggregated output.

With b5.0, we took a scalpel to it and not only massively simplified it, but also made it _much_ more flexible and composable.

### Simplified Driver Definitions

To understand the change, consider the `Bme280` driver class signature from the 4.x betas:

```csharp
public class Bme280 :
        FilterableChangeObservableBase<AtmosphericConditionChangeResult, AtmosphericConditions>,
        IAtmosphericSensor, ITemperatureSensor, IHumiditySensor, IBarometricPressureSensor
```

Previously, the `FilterableChangeObservableBase`, had two generic types; both the `ChangeResult`/`EventArgs` (`C`) that would be passed when the event occurred, AND the type of data (`T`) passed within that result. This had a big drawback in that not only was there redundant information in the generic signature, but we had to create special `Conditions` data containers/models for each potential combination of sensor output. 

In b5.0, this same driver signature gets much simpler and clearer:

```csharp
public partial class Bme280 :
    FilterableChangeObservableBase<(Temperature?, RelativeHumidity?, Pressure?)>,
    ITemperatureSensor, IHumiditySensor, IBarometricPressureSensor
```

Now, drivers are completely composable, and the only generic parameter needed is a tuple containing just the Unit types that returned. Note also that full C# nullability is also supported (and in-fact, built-in to all the updated sensor drivers). 

### Easier Consumption

We also made some changes that made it much easier to consume the observables. In b5.0, we added a `CreateObserver()` method which will automatically generate an observer with the appropriate types for you. For example, the following code illustrates creating an observer with an optional filter that only notifies if the temperature changes by at least `0.5°C` and `5%` humidity:

```csharp
sensor.Subscribe(Bme280.CreateObserver(
    handler: result => {
        Console.WriteLine($"Observer: Temp changed by threshold; new temp: {result.New.Temperature?.Celsius:N2}C, old: {result.Old?.Temperature?.Celsius:N2}C");
    },
    filter: result => {
        if (result.Old is { } old) { //c# 8 pattern match syntax. checks for !null and assigns var.
            return (
            (result.New.Temperature.Value - old.Temperature.Value).Abs().Celsius > 0.5 // returns true if > 0.5°C change.
            &&
            (result.New.Humidity.Value - old.Humidity.Value).Abs().Percent > 0.05 // 5% humidity change
            );
        }
        return false;
    }
    // if you want to always get notified, pass null for the filter:
    //filter: null
    )
);
```

### Other Changes and Driver Updates

 * `AnalogJoystick` - This got a huge overhaul and is much faster now.
 * `IDCMotor` and `HBridgeMotor` - `Speed` has been deprecated. Please use the `Power` property.
 * `Ccs811` - Added a driver/support for this high quality Air Quality sensor.
 * `Mpl115a2` - This driver is now finished.
 * `AnalogTemperatureSensor` - Now events both the `New` and the `Old` value. Previously the old value was being thrown away.
 * `Si70xx` - Temperature is now correct.
 * `Htu21d` - Fixed. Was throwing an error on initializing before.
 * `Bme280` - Pressure reading fixed. Was off by a factor of `100k` before.
 * `RotaryEncoder` - Now implements the `IObservable` pattern.
 * `IMassSensor` - Has been added for load cell and similar sensors.
 * `Hx711` and `Nau7802` - Now implements `IMassSensor`
 * `IWindVane` - Has been added for wind direction sensors.
 * Renamed `MagneticField3d`, `Acceleration3d` - And other "3d" properties and classes to `3D` (capitalized `D`).
 * `Yx5300` - [data2 is send in place of data1](https://github.com/WildernessLabs/Meadow.Foundation/issues/169) - fixed.
 

### Meadow.CLI, Deployment, and Tooling

Meadow's deployment and tooling experience also got a big upgrade in b5.0.

<!--
#### Meadow.CLI `MonoDisable` Fix

Previously, after flashing the OS to the device, the `meadow --monodisable` command would often only work after hitting the `RST` button on the device twice to put it into _system mode_ because the between the newly flashed OS would be incompatible with the mono runtime as well as the firmware on the coprocessor causing a crash that would make it unresponsive. 

With this release, we overhauled the way that Meadow.OS checks for compatibility of the various Meadow.OS, runtime, and coprocessor firmware components so that after flashing the OS, it will immediately detect a mismatch and not try to launch (and crash) the mono runtime.

The upshot here is that new OS deployments will be much smoother, and in fact it unlocks scriptable, no-touch/single-command Meadow.OS deployments, which we hope to expose in a future release.

-->

<!--
#### Beta uild Linking

Beginning in this beta, we've enabled assembly linking on both macOS and Windows, via the Meadow.CLI and integrated it into both Visual Studio for Windows and Visual Studio for Mac.

Linking takes the resulting binaries from the initial build process and removes unused classes, members, and other unneeded code that bloats the assemblies. This has the effect of both drastically reducing the size of the deployed app binaries, but also speeds up deployment.
-->

### Beta eta VS Code Support

Thanks to community member extraordinaire, Jonathan Dick, we have an initial beta version of support for building and deploying Meadow applications with VS Code. 

For information on how to get started, check out the [VSCode Meadow Extension Github repo](https://github.com/wildernesslabs/VSCode_Meadow_Extension).

### Beta ug Fixes

 * [#108 - `System.IO.FileNotFoundException: Could not load file or assembly 'netstandard, Version=2.0.0.0`](https://github.com/WildernessLabs/Meadow_Issues/issues/108) - Fixed with the .NET Standard 2.1 Support.
 * [#120 - Unable to deploy F# application](https://github.com/WildernessLabs/Meadow_Issues/issues/120) - F# is game again!
 * [#144 - Calls to `HttpListenerContext.Request.RemoteEndPoint` result in `NullReferenceException`](https://github.com/WildernessLabs/Meadow_Issues/issues/144) - Now returns remote IP address.
 * [#146 - WiFi adapter initialized event misspelled](https://github.com/WildernessLabs/Meadow_Issues/issues/146) - Heh. Fixed. :D


### Known Issues

  * **Meadow.CLI `--DeleteFile` command not working** - The `--DeleteFile` command will throw an error and also say that the file was deleted successfully, but the file will not actually be deleted.
  * **Mono may re-enable after doing Meadow.CLI `--MonoUpdateRT` command** - When you're deploying Meadow.OS, mono may re-enable itself after the `--MonoUpdateRT` command. If you get an error when you run the `--FlashESP` command that says it can't upload because mono is enabled, re-run the `--MonoDisable` command.

## Beta 4.6.2

This is another tiny release to address an issue when connecting to a WiFi network that resulted in a `CannotStartNetworkInterface` exception that was affecting a small percentage of boards.

### Updating

This release requires a Meadow.OS firmware update (follow steps [here](/Meadow/Getting_Started/Deploying_Meadow/)), no IDE or Meadow.CLI updates are necessary.

## Beta 4.6.1

This is a tiny release that fixes what we broke in b4.6.

Something went wrong with our b4.6 release build and we broke WiFi scanning and `System.Net.Socket` calls. Oops. Those are fixed now.

### Updating

This release only requires an OS/ESP update from b4.6.

## Beta 4.6

This is another huge release with some awesome new network stack goodies as well as tasty other improvements, including:

* **`HttpListener` Support** - You can now turn your Meadow into a web server with `HttpServer`.
* **Maple Web Server** - Introducing Maple Server for Meadow; an ultra-lightweight RESTful Web API server.
* **`TextDisplayMenu`** - Meadow.Foundation now has a new library called `TextDisplayMenu` that allows for easy menu creation and interaction.
* **Antenna Switching** - We've exposed an API to switch between the onboard and external antenna.
* **Battery Voltage** - You can now read the battery voltage from Meadow.OS.
* **Better Connection Errors** - Failed WiFi connections will now give more information.

### Updating

This is release requires an OS update, and nuget updates so make sure to pull the latest packages in your project after updating your Meadow board.

### Meadow.OS 

### Beta attery Level API

The current battery charge level can be obtained via the `GetBatteryLevel()` API available on the `Device` class:

```csharp
float voltage = Device.GetBatteryLevel();
```

For more information, see the [BatteryLevel application sample](https://github.com/WildernessLabs/Meadow.Core.Samples/tree/main/Source/OS/BatteryLevel) in the [Meadow.Core.Samples repo](https://github.com/WildernessLabs/Meadow.Core.Samples).

### Network Updates

### `HttpListener`, `HttpServer`, and Various Bug Fixes

`HttpListener` is now operational, which among other things, enables `HttpServer` and, in general, running a web server on Meadow.

### API Update (breaking change)

The `Device.WiFiAdapter.Connect` has been updated to a `Task` returning `async` method. This is a breaking change and you'll now need to `await` calls to the `Connect` method.

### Antenna Switching API

You can now switch between the onboard chip antenna and an external antenna hooked up to the µ.FL connector:

```csharp
Device.SetAntenna(AntennaType.External);
```

See the [Antenna Switching Sample app](https://github.com/WildernessLabs/Meadow.Core.Samples/tree/main/Source/Network/Antenna_Switching) for more information.

### Introducing Maple Server for Meadow

Maple server is an ultra-lightweight RESTful Web API server made specifically for Meadow that has native support for JSON. It enables easy remote interaction and control with Meadow over http.

Check out the [Maple Server guide](/Meadow/Meadow.Foundation/Libraries_and_Frameworks/Maple%2EServer) for more information.

And for a real world sample application, check out the [On-Air Sign project](https://github.com/wildernesslabs/OnAir_Sign) that uses Maple Server to show a message on an LED matrix display to make sure no one walks in on your meetings.

### `TextDisplayMenu` Library

The [`TextDisplayMenu`](/Meadow/Meadow.Foundation/Libraries_and_Frameworks/TextDisplayMenu/) library is an extensible framework for quickly creating hierarchical, editable menus that can display on a `CharacterDisplay` or a graphics display via `GraphicsLibrary`. 

![Animated image of a menu displayed on an LCD with a rotary encoder driving navigation.](/Meadow/Meadow.Foundation/Libraries_and_Frameworks/TextDisplayMenu/TextDisplayMenu.gif)

The menu can be created programmatically or loaded from JSON, and has a number of built-in menu item types for display and editing input including: time, temperature, and numbers. Additionally, you can easily create custom menu item types that allow users to edit their value via the inputs.

### Other Meadow.Foundation Improvements

* **MicroGraphics** Gets two new fonts ideal for lower resolution displays: 4x6 & 6x8 pixels per character
* **MicroGraphics** Also gets a couple handy helper APIs: `MeasureText` returns a `Size` in pixels of text for a given font, and `GraphicsPath` now has a `Bounds` property that returns the size of the path in pixels
* **Apa102** driver now derives from `DisplayBase` so it can be used with `GraphicsLibrary` to draw primitives and text when configured as a color pixel display
* **TftSpi** color display drivers receive a performance optimization when clearing the screen, a small but noticeable improvement

### New Drivers

* **Sensors.Temperature.MCP9808** - A high accuracy I2C temperature sensor, perfect for when you need accuracy greater than +/- 0.5 degrees
* **Sensors.Weather.WindVane** -  Driver for wind vanes that outputs variable voltage, based on the azimuth of the wind. 

### Beta ug Fixes
- **Hx8357d** display driver in `TftSpi` - fixed a bug, will now renderer correctly (tested with an Adafruit 320x480 display)
- **Adafruit 128x32 OLED FeatherWing** driver is fixed catching it up with the latest `PushButton` improvements
- **AnalogTemperatureSensor** fixed a math bug, again returns correct temperatures 

## Beta 4.5

Ooooooooweeeee! This is a real star of a release, with some major new functionality and performance fixes. It's the culmination of a lot of work that has been percolating for a long time. Big things include:

 * **SSL/TLS** - That's right, `Https://`, mi amigo(a)s! 
 * **10x Network Performance** - We found some low-hanging fruit and were able to provide a network boost of typically 10x, and for some things, _much_ faster.
 * **Meadow.Foundation** - Some nice new features for drawing paths, API cleanups, and new drivers.

### Updating

This is a full-stack release and will require an OS update, nuget updates, IDE extensions, and CLI updates.

Note, to update the Meadow.CLI, run the following from a command line:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```
### Network Fixes

Network is the real shining gem of this release, with major new features and improvements across the board.

### SSL/TLS/Https Support

This is the first whack at TLS/SSL support, and basic `https` requests should work. Note that all SSL certificates are accepted and none of the certificate management APIs have been wired up. 

### 10x Network Performance

On average, network performance has been increased by 10x, and for some stuff it's even faster. This should bring network operations into a generally acceptable performance range for most use cases. There is still much more optimization opportunities here that we'll be exploring in the future.

### API Cleanup

We cleaned up and simplified some of the Network connect APIs.

### Network Known Issues

* **All SSL Certificates Accepted** - Right now, there is no SSL certificate validation or management. Meadow will accept all SSL certificates, so use at your own risk.
* **IP Address, Subnet mask, MAC Address**

Several properties of the ESP32 WiFi connection are now available through the `WiFiAdapter` class.  Note that you must be connected to an access point before some of these properties are available.

### Meadow.CLI 

We fixed an issue in the Meadow.CLI where it would randomly disconnect. `--KeepAlive` should now work reliably.

### Meadow.Foundation

We've added some new capabilities to the `µGraphics` library. It now includes APIs to draw paths. And with it brings several new types: `GraphicsPath`, `Point`, `Rect`, and `Size`.

* **PushButton** - We've simplified the API and now made it easier to setup when using external pull up/down resistors.

* **TSL2591 Light Sensor** - Added Lux calculations along with properties for visible, infrared and full spectrum light readings.

We've also made enhancements to several drivers other drivers including: `AnalogTemperature`, `Mcp230x8`, and `Ds323x`. 

### New Drivers

* **TB67H420FTG Motor Driver** - First draft of a driver for Toshiba's TB67H420FTG high power motor driver. Basic H-Bridge functionality with overcurrent notifications work.

### Beta ug Fixes

* [Network adapter always returned success](https://github.com/WildernessLabs/Meadow_Issues/issues/123) even when there was a problem.

## Beta 4.4 

This is another minor release with a handful of fixes and stabilizations:

 * **Meadow.Foundation** - Project housekeeping and bug fixes.
 * **`DigitalInputPort`** - Fixed strange behavior on interrupts when `GlitchFilter` and `Debounce` was set to `0`.
 * **ESP32 Startup** - Fixed an issue where the device needed to be unplugged and replugged in to restart the ESP32.
 
### Updating

This is a full-stack release and will require an OS update, nuget updates, IDE extensions, and CLI updates.

Note, to update the Meadow.CLI, run the following from a command line:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

### Meadow.Foundation

We did a housekeeping pass through the Meadow.Foundation project, cleaning up folders and projects, making naming consistent, etc.

We also drafted some scripts to validate drivers and improve the publishing and documentation workflow moving forward.

### Drivers

 * **Adafruit Datalogger** - Integrated community contributions to update (thanks Bruce!).
 * **MicroGraphics Library** - Minor updates and bug fixes.
 * **Adafruit MPRLS Sensor** - This was previously finished, but wasn't published. We discovered it during housekeeping.
 * **Yx5300 MP3 player** - Also previously finished but unpublished.
 * **Analog Temperature Sensor** - Fixed `xM35` calibration/calculation and refactored/simplified the code.


## Beta 4.3

This is a minor release with a big performance boost! Up until now, our Meadow.OS builds have had lots of debug stuff turned on. We turned most of that off, which has increased performance across a number of features, with some features getting big performance boosts. For instance, SPI has a 6x throughput improvement, speeding up graphics display updates.

### Updating

This release requires an OS update as well as IDE extension and Meadow Nuget updates (including the Meadow.CLI package).

Note, to update the Meadow.CLI, run the following from a command line:

```bash
dotnet tool update Wildernesslabs.Meadow.CLI --global
```

### Features

Major features and fixes include:

 * **Meadow.OS Release build** - With performance upgrades across many features.
 * **Interrupt & PushButton Fix** - We've done some more work around `DigitalInputPort` interrupts, and hopefully have the Meadow.Foundation `PushButton` fixed once and for all.
 * **CLI/Deployment Fixes** - We've streamlined and stabilized app deployments to Meadow, which should help both using the Meadow CLI and the Visual Studio extensions
 * **VS4Mac Fixes** - The VS Mac extension experience is *much* better with the recent CLI improvements, this release a also improves Meadow detection when using USB hubs

### Meadow Foundation Updates

This release sees a much needed code repro cleanup and refactoring, improved comments, and some code consistency updates.

It also includes some general improvements and bug fixes:
 * **`TextDisplayMenu`** -  multilevel menus can now be created programmatically as well as using Json
 * **`µGraphics`** - Stroke works with `DrawHorizonalLine` and `DrawVerticalLine`
 * **`µGraphics`** - Negative line length values now properly draw in the opposite direction
 * **`TftSpi` fixed `ClearScreen` method** - Now works.
 * **`Apa102` constructor cleanup** - Removed unneeded GPIO pin.

### Beta ug Fixes

- [#127 - MeadowOS.Reset fails](https://github.com/WildernessLabs/Meadow_Issues/issues/127) - This was a regression introduced while implementing the Watchdog timer. It should be working again.

## Beta 4.2

This is a big release with a ton of stability fixes, an overhaul of the CLI, and big new features for networking. Major changes and improvements include:

 * **Meadow.OS Flashing from CLI** - We pulled the Meadow.OS firmware uploading out of the Visual Studio IDE and moved it into the CLI for a more unified and reliable Meadow.OS upload experience. [Check out the updated guide](/Meadow/Getting_Started/Deploying_Meadow/).
 * **WiFi Enumeration Fix** - You can now enumerate WiFi networks without having to first connect to a Network.
 * **Faster, More Reliable OS Startup** - Meadow.OS startup is more robust and better handles a mismatch between co-processor firmware or runtime version.
 * **Exceptions on Reflection.Emit(ted) code work** - Exceptions via code that was executed from `Reflection.Emit()` now work properly. Previously they would tear down the .NET runtime.
 * **WiFi Memory Leak Fixed** - Network requests no longer leak memory.
 * **Networking Server Methods** - `UdpClient`, `TcpListener` and `TcpClient` are all working now. Note that we're still working on `HttpListener`.
 * **[Meadow.OS Watchdog Timer](/Meadow/Meadow.OS/Automatic_Restarts/)** - You can now use the hardware watch timer, which will automatically restart the device in case of an application hang.
 <!--* **`TextDisplayMenu`** - Meadow.Foundation now has a new library called `TextDisplayMenu` that allows for easy menu creation and interaction.-->
 * **Meadow.Foundation `GraphicsLibrary` Upgrades** - The [Graphics Library](/Meadow/Meadow.Foundation/Libraries_and_Frameworks/MicroGraphics/) available in Meadow.Foundation got some serious performance upgrades, as well as the ability to run `TextDisplayMenu` on any graphics display (as well as `CharacterDisplay`s).

### Meadow.Foundation

<!--### `TextDisplayMenu` Library

The [`TextDisplayMenu`](/Meadow/Meadow.Foundation/Libraries_and_Frameworks/TextDisplayMenu/) library is an extensible framework for quickly creating hierarchical, editable menus that can display on a `CharacterDisplay` or a graphics display via `GraphicsLibrary`. 

![Animated image of a menu displayed on an LCD with a rotary encoder driving navigation.](/Meadow/Meadow.Foundation/Libraries_and_Frameworks/TextDisplayMenu/TextDisplayMenu.gif)

The menu can be created programmatically or loaded from JSON, and has a number of built-in menu item types for display and editing input including: time, temperature, and numbers. Additionally, you can easily create custom menu item types that allow users to edit their value via the inputs.-->

### `GraphicsLibrary` Updates

We improved performance for all displays using [`GraphicsLibrary`](/Meadow/Meadow.Foundation/Libraries_and_Frameworks/MicroGraphics/) with additional performance for color Tft displays.

`GraphicsLibrary` also includes several new and improved APIs including:
- Support for 12bpp (RGB444) display buffers which reduces frame buffer memory
- Center and right text alignment when calling `DrawText`
- `InvertPixel` and `InvertRectangle` methods which are great for drawing cursors

### New Drivers

 * [Audio.Mp3.Yx5300 (serial MP3 player)](/docs/api/Meadow.Foundation/Meadow.Foundation.Audio.Mp3/Yx5300/)
 * [Sensors.Atmospheric.AdaFruitMPRLS (ported pressure sensor)](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric/AdafruitMPRLSSensor/)
 * [Sensors.Motion.Mag3110 (3-axis magnetometer)](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion/Mag3110/)
 * [Sensors.Environmental.AnalogWaterLevel](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental/AnalogWaterLevel/)
 * [Displays.Ssd1327 (4bpp greyscale OLED)](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays/Ssd1327/)
 
 * Additional TFT SPI Display Drivers:
   * [Displays.Tft.HX8357b](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft/Hx8357b/)
   * [Displays.Tft.HX8357d](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft/Hx8357d/)
   * [Displays.Tft.GC9A01](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft/Gc9a01/)
   * [Displays.Tft.ILI9481](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft/Ili9481/)
   * [Displays.Tft.ILI9486](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft/Ili9486/)
   * [Displays.Tft.ILI9488](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft/Ili9488/)
   * [Displays.Tft.Rm68140](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft/Rm68140/)
   * [Displays.Tft.ST7796s](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft/St7796s/)

### Beta ug Fixes

- [#118 - Interrupt events not unhooking](https://github.com/WildernessLabs/Meadow_Issues/issues/118) - Fixed.
- [#116 - System.Net.Sockets.SocketException (0x80004005): Access denied on creating Socket](System.Net.Sockets.SocketException (0x80004005): Access denied on creating Socket) - Fixed as part of the new network work.
- [#109 - CLI Uplink percentages > 100%](https://github.com/WildernessLabs/Meadow_Issues/issues/109) - Fixed as part of the CLI overhaul.

## Beta 4.0.1

This release focuses on stability and ease of use, and it comes with a couple of major improvements:

* **Expanded set of Meadow Base Class Libraries!** Meadow is now shipping with a complete set of BCLs. This means you can now access libraries such as `System.Numerics`, `System.Transactions` and `System.Json`. This not only greatly extends the .NET API surface available to Meadow, but it also means that 3rd library compatibility is drastically improved now that Meadow includes many common dependency libraries.
* **Nugets are easier to consume.** When you add a Nuget package to your project, the Meadow Visual Studio extension will now automatically resolve and include any necessary base class library (BCL) dlls. So for instance, when you add `System.Text.Json`, the extension will pull in the required dlls that it needs from our Meadow.Assemblies Nuget package and make sure they get deployed to the board. No more “Can’t find [x].dll” messages.
* **Deployment is much more reliable.** We also did a bunch of work on the extensions to better integrate with the Meadow.CLI. Deployment is now not only more reliable, but we’ve reduced the random disconnects that were happening after an app was deployed, and VS was listening for application output.
* **Flashing from VS for Windows works again.** We were also able to fix the bug that we had in Visual Studio for Windows that prevented Meadow.OS from being flashed correctly. A number of customers were seeing an “unspecified network error,” after upgrading to b4.0, so we had to disable the automatic Meadow.OS upload and required manual flashing to upgrade. No more! Now you can easily upgrade Meadow.OS from Visual Studio again. Note that Mac users still have to flash manually, as that feature isn’t currently possible in VS4Mac.

### Meadow.Foundation

This release also includes a couple of new drivers:
* `Analog.WaterLevel` is driver that represents common analog water level sensors to detect both the presence and depth of water.

* `Audio.Mp3.Yx5300` is an MP3 player controlled over serial. It's now possible to add sound effects or music to your Meadow project.

### Updating

This release only requires IDE extension and Meadow nuget updates. 

## Beta 4.0

W000t, b4.0 is here! This is a major release with a pile of new features and improvements, including our first cut of WiFi networking support as well as file system support! All in, this release includes:

- **Basic WiFi Networking**
- **Basic File System**
- **Serial Port Fixes**
- **CLI/USB deployment overhaul**
- **Garbage Collector Improvements**

### Updating

This release requires an OS update as well as IDE extension updates. We recommend updating on a Windows machine in Visual
Studio if you have access to one, but the manual steps for macOS and Linux are provided as well.

### Windows instructions
 
**Note:** Due to a bug in the VS for Windows IDE Extension, you must update manually in order to get WiFi networking working.

<!--
### Windows instructions

1. Download/update [VS Tools for Meadow](https://marketplace.visualstudio.com/items?itemName=WildernessLabs.vsmeadow01) extension.
1. Connect the device in normal mode and click "Check Version".
1. If you are on OS version 0.3.12 or later, you must first "Erase Flash".
1. Click "Download Meadow OS".
1. Next, reconnect the device in bootloader mode and then "Flash Device".
-->

### Post-build

A bug in msbuild is causing `System.Net.Http.dll` to not copy to the Output Directory. A temporary workaround is to add a post-build step to the project by adding the following to your csproj file within the `Project` node:

```
<Project Sdk="Meadow.Sdk/1.1.0">
    ...
    <Target Name="PostBuild" AfterTargets="PostBuildEvent">
      <Exec Command="copy C:\Users\[YOUR_FOLDER]\.nuget\packages\wildernesslabs.meadow.assemblies\0.3.2\lib\net472\System.Net.Http.dll  $(OutDir)" />
    </Target>
</Project>
```

<!--### macOS/Linux Manual Instructions-->

### Manual Update Instructions

First, go to the [Downloads page](http://developer.wildernesslabs.co/Meadow/Getting_Started/Downloads/) and download the Beta 4.0 Meadow.OS binaries, the Beta 4.0 CLI, and the Meadow network binaries.

Unzip everything to a common folder, the instructions below assume the OS and network binaries are in the same folder and the CLI is in a `Meadow.CLI` subfolder relative to the OS binaries.

Open a terminal window and execute the following steps. Please note that if you don't have DFU-Util
installed, you can find instructions on how to install it [here](/Meadow/Getting_Started/Deploying_Meadow/).

1. Connect Meadow in normal mode
1. Disable mono (may need to run twice if you get an exception the first time).
   `mono ./Meadow.CLI/Meadow.CLI.exe -s /dev/tty.usbmodem01 --MonoDisable`
1. Erase flash:  
   `mono ./Meadow.CLI/Meadow.CLI.exe --EraseFlash --KeepAlive`  
    This will take a few minutes. After it says "Bulk erase completed," hit space to exit.
1. Connect Meadow in bootloader mode (hold down the BOOT button)
1. Copy the new Meadow.OS.bin using dfu-util:  
   `dfu-util -a 0 -S [serial] -D Meadow.OS.bin -s 0x08000000`
1. Reset F7
1. Disable mono (may need to run twice if you get an exception the first time).
   `mono ./Meadow.CLI/Meadow.CLI.exe -s /dev/tty.usbmodem01 --MonoDisable`
1. Upload new Mono Runtime  
   `mono ./Meadow.CLI/Meadow.CLI.exe --WriteFile Meadow.OS.Runtime.bin --KeepAlive`  
    After "Download success," hit space again.
1. Move the runtime into it's special home on the 2MB partition  
   `mono ./Meadow.CLI/Meadow.CLI.exe --MonoFlash --KeepAlive`  
    After "Mono runtime successfully flashed," hit space to exit.
1. Upload the ESP32 bootloader:  
   `mono ./Meadow.CLI/Meadow.CLI.exe --Esp32WriteFile -f bootloader.bin --McuDestAddr 0x1000`
1. Upload the ESP32 partition table:  
   `mono ./Meadow.CLI/Meadow.CLI.exe --Esp32WriteFile -f partition-table.bin --McuDestAddr 0x8000`
1. Upload the ESP32 Meadow Comms application:  
   `mono ./Meadow.CLI/Meadow.CLI.exe --Esp32WriteFile -f MeadowComms.bin --McuDestAddr 0x10000`
1. Reset F7

### Meadow.OS Improvements

### Networking

Basic WiFi networking is up! Check out our [Networking guide](/Meadow/Meadow.OS/Networking/) for more information!

### Networking Known Issues

- **SSL not supported** - Currently, only unencrypted traffic is supported via HTTP. We're working on TLS support.
- **`HttpServer` not available** - `HttpClient` has been tested and is fully supported, but we're still working on `HttpServer` support.
- **Network scans require a network connection** - Due to a limitation in the API, you must first connect to a WiFi network before attempting a scan.
- **`HttpClient` memory leak** - Each `HttpClient.Request` incurs a `~5k` memory leak on the ESP32 coprocessor, so after a number of requests it will no longer be functional. If requests become unresponsive, a call to `Device.InitWiFiAdapter()` will reset the ESP32 coprocessor and get things running again.

### File System

You can now use the `System.IO` file system calls to do basic file system operations such as create, open, and delete files on the onboard flash device. For more information, see the [File System guide](/Meadow/Meadow.OS/File_System).

### Known Issues

- **Non-persistent during deployment** - Currently, during IDE deployment, all non app-related files are purged from flash. In a near future release, all files within a special app folder will be excluded from file purging. In the meantime, if you need to persist files between app deployment, you can use Meadow.CLI to manually deploy a new app.

### Garbage Collector Improvements

Our Garbage Collector work is almost done now; the Mono GC works in most use cases and has been tuned for the Meadow device. We still have an outstanding
deadlock to solve, but generally apps should stay alive for hours, days, or weeks, depending on memory allocation.

### Other Known Issues

Due to a configuration issue with UARTs that we're investigating, `D02` and `D05` are pulled `HIGH` on Meadow.OS startup. All other pins are pulled `LOW`.

### Beta ug Fixes

- [#103 - ISerialMessagePort.preserveDelimiter=false leaves null bytes in message data](https://github.com/WildernessLabs/Meadow_Issues/issues/103) - Added.
- [#102 - Need to add a thread `SynchronizationContext` to our main thread](https://github.com/WildernessLabs/Meadow_Issues/issues/102) - Added.
- [#101 - SPI Bus speed property read is off by x1000](https://github.com/WildernessLabs/Meadow_Issues/issues/101) - Fixed.
- [#98 - ISerialPort.Read does not remove bytes from the ReceiveBuffer anymore.](https://github.com/WildernessLabs/Meadow_Issues/issues/98) - Fixed. This was a regression introduced by some of our `SerialPort` overhaul work in `b3.12`.

### Meadow.CLI & Deployment Improvements

We did a big rearchitecture of our host comms layer on the Meadow, which is the part of the Meadow.OS
stack that handles USB deployment and other CLI tasks. We refactored host comms out of the process that
runs Mono and hosts Meadow applications. We also changed how Meadow applications are launched so that
the Mono Virtual Machine is in its own isolated process.

The upshot of this is that deployment should be more reliable and a crashing Meadow app shouldn't tear
down the host communications.

### Meadow.Foundation

Meadow.Foundation has new peripheral drivers to play with, including:

- [Mpr121](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid/Mpr121/)
- [Vl53l0x](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance/Vl53l0x/)

### Minor update on SG90 Servos

We adjusted the frequency for the SG90 micro servos that comes in the hack kit, so when using the `NamedServoConfigs.SG90` enum, you will see the servos wont twitch when using `Rotate To(int degrees)` and have full 180 degree range;

### Updates on Graphics Library

We also added and improved several APIs in the Graphics Library including the ability to draw quadrants and rounded rectangles.

### CharacterDisplay now supports I2C

If you have an LCD character display comes with an I2C backpack, you can now instantiate a CharacterDisplay object passing an II2cBus, reducing eight Digital IO pins to just two for I2C.

## Beta 3.12

This is a huge release, and is a precursor to `b4.0` while we finish out the last of the network stack.

Improvements and upgrades include:

 * **Garbage Collector tuned up for our MCU.**
 * **Application crasher fix.**
 * **Tons of bug fixes and driver improvements.**
 * **Serial/UART events fixed and a big overhaul with a new way to use serial.**
 * **FilterableObserver changes.**
 * **A cleaned up and expanded Meadow.Core sample repo.**
 * **Piles of new Meadow.Foundation drivers.**
 * **GPS/GNSS NMEA processor overhaul.**
 * **Meadow library project template.**
 * **F# Meadow templates.**
 * **Parametric enclosure.**
 * **Meadow EDA schematic and PCB footprint parts.**

### Updating

This release is cut from the `b4.0` work and requires an OS update as well as IDE extension updates. 
If you're on Windows, it's easy, we've added a one-click upgrade to the extension. However, on macOS 
(and Linux) it's significantly more complicated. We recommend updating on a Windows machine in Visual 
Studio if you have access to one, but the manual steps for macOS and Linux are provided as well.

### macOS/Linux Manual Instructions

Open a terminal window and execute the following steps. Please note that if you don't have DFU-Util 
installed, you can find instructions on how to install it [here](/Meadow/Getting_Started/Deploying_Meadow/DFU/).

1. Download and unzip the latest [Meadow.OS](http://wldrn.es/latestmeadowos) files.
2. DFU Meadow.OS.bin:  
  `dfu-util -a 0 -S [serial] -D Meadow.OS.bin -s 0x08000000`
3. Reset F7 (press `RST` button).
4. Disable mono (may need to run twice if you get an exception the first time):  
  `mono ./Meadow.CLI/Meadow.CLI.exe -s /dev/tty.usbmodem01 --MonoDisable`
5. Erase flash:  
  `mono ./Meadow.CLI/Meadow.CLI.exe --EraseFlash --KeepAlive`  
   This will take a few minutes. After it says "Bulk erase completed," hit space to exit.
6. Reset F7.
7. Upload new Mono Runtime:  
  `mono ./Meadow.CLI/Meadow.CLI.exe --WriteFile Meadow.OS.Runtime.bin --KeepAlive`  
   After "Download success," hit space again.
8. Move the runtime into it's special home on the 2MB partition:  
  `mono ./Meadow.CLI/Meadow.CLI.exe --MonoFlash --KeepAlive`  
   After "Mono runtime successfully flashed," hit space to exit.
9. Reset F7.

### Meadow.OS Improvements

### Garbage Collector Tuning

The Mono garbage collector that we use in Meadow.OS got a major tune-up, making it much 
more suited for our architecture and use case. You should find that garbage collection 
works far better now than it did before.

### Application Crash

The dreaded application crash that got introduced a few beta releases back that prevents
Meadow applications from standing up for more than a few minutes has been fixed! As well, with the garbage collector fixes, Meadow apps are now very unlikely to run out of memory. This is the most stable release of Meadow OS to date!

### Beta ug Fixes

* [#37 - Threading and event callback lockup](https://github.com/WildernessLabs/Meadow_Issues/issues/37) - Fixed!
* [#62 - Constant 10ms delay when calling Thread.Sleep()](https://github.com/WildernessLabs/Meadow_Issues/issues/62) - Fixed, timer resolution is now 1ms.
* [#67 - RgbPwmLed.StartBlink() does not have accurate timings](https://github.com/WildernessLabs/Meadow_Issues/issues/67) - Fixed, related to timer resolution.
* [#68 - Static class in its own namespace hangs in constructor](https://github.com/WildernessLabs/Meadow_Issues/issues/68) - Fixed. Constructor race condition.
* [#69 - Timer creep](https://github.com/WildernessLabs/Meadow_Issues/issues/69) - Fixed, also related to timer resolution
* [#70 - Assertion at sgen-stw.c:69](https://github.com/WildernessLabs/Meadow_Issues/issues/70) - Fixed as part of the Garbage Collector work.
* [#77 - PWM duration with TimeScale.MicroSecond off by 10µs](https://github.com/WildernessLabs/Meadow_Issues/issues/77) - Fixed, math error. :)
* [#89 - All file system objects appear as files](https://github.com/WildernessLabs/Meadow_Issues/issues/89) - Fixed.
* [#94 - Too many threads cause a crash](https://github.com/WildernessLabs/Meadow_Issues/issues/94) - Fixed! This was a real doozie. 
  We did a major overhaul of the Garbage Collector for this release.

### Meadow.Core Improvements

### Serial/UART Communications

We did a major overhaul of the UART/Serial Port in Meadow for b4.0. Big changes include:
 * **Serial Port Events Fixed** - Serial port events now work, which enables more efficient 
   communications, without the need for a polling thread.
 * **New `ISerialMessagePort` class** - We fundamentally reworked the way legacy serial 
   communications work, and created an `ISerialMessagePort` class that modernizes them. 
   It's thread-safe and asynchronous by default, and massively simplifies communications
   with serial devices by taking a _message_ approach. We recommend using this class 
   instead of `ISerialPort` for serial communications from now on.
   
For more info, check out the awesome [Serial Communications Guide](/Meadow/Meadow_Basics/IO/Digital/Protocols/UART/).

To see the new `ISerialMessagePort` class at work, check out the [`SerialMessagePort` Sample](https://github.com/WildernessLabs/Meadow.Core.Samples/tree/main/Source/IO/SerialMessagePort).

### `FilterableObserver` Changes

We renamed `FilterableObserver` to `FilterableChangeObserver`.

We made this naming change because the `FilterableObserver`, as designed, was based on change 
notification and as such had `Old` and `New`  values, along with built in comparison. However, 
it became clear that we should also have a non histrionic version for cases where `Old` and `New` 
had no meaning. In the next beta release we'll likely re-introduce a non-histrionic version of 
`FilterableObserver`.

### Meadow.Core Samples

We completely re-did the old `Meadow_Samples` repo and renamed it to 
[`Meadow.Core.Samples`](https://github.com/wildernesslabs/Meadow.Core.Samples). The samples are now much better
organized and all updated to the latest `.csproj` format.

### Meadow.Foundation

Meadow.Foundation got a pile of new peripheral drivers, including:

* [PwmLedBarGraph](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds/PwmLedBarGraph/)
* [Displays.Led.FourDigitSevenSegment](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Led/FourDigitSevenSegment/)
* [Sensors.Location.Gnss.NmeaParsing](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Location.Gnss/NmeaParsing/)
* [FeatherWings.CharlieWing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings/CharlieWing/)
* [FeatherWings.DotstarWing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings/DotstarWing/)
* [FeatherWings.GPSWing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings/GPSWing/)
* [FeatherWings.LedMatrix8x16Wing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings/LedMatrix8x16Wing/)
* [FeatherWings.MotorWing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings/MotorWing/)
* [FeatherWings.OLED128x32Wing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings/OLED128x32Wing/)
* [FeatherWings.ServoWing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings/ServoWing/)
* [ICs.IOExpanders.Is31fl3731](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/Is31fl3731/)
* [ICs.IOExpanders.Pca9685](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/Pca9685/)
* [Leds.Apa102](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds/Apa102/)
* [Motors.Stepper.A4988](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.Stepper/A4988/)
* [Sensors.Atmospheric.Mpl3115a2](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric/Mpl3115a2/)
* [Sensors.Location.MediaTek.Mt3339](/docs/api/Meadow.Foundation/Sensors.Location.MediaTek/Mt3339/)
* [Sensors.Light.Max44009](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light/Max44009/)
* [Sensors.Light.Tsl2591](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light/Tsl2591/)
* [Sensors.LoadCell.Hx711](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.LoadCell/Hx711/)
* [Sensors.Radio.Rfid.IDxxLA](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Radio.Rfid/IDxxLA/)

### GPS/GNSS NMEA Processing

We did a major overhaul of the NMEA (GPS/GNSS) sentence processing library. In the process we 
re-worked, upgraded, and modernized it. It now handles a wider array of sentence structures, 
is more fault tolerant, has a better API and is easier to add new decoders to.

Check out the [GPS/GNSS NMEA Sentence Processing Library guide](/Meadow/Meadow.Foundation/Libraries_and_Frameworks/Gps_Gnss_Nmea_Processor/)
for more information.

### PwmLed minor change

We consolidated the logic and code convention across our LEDs drivers in Meadow.Foundation.Core, and when we did, we removed the method `public void StartBlink(uint onDuration = 200, uint offDuration = 200)` which was redundant and we kept `public void StartBlink(uint onDuration = 200, uint offDuration = 200, float highBrightness = 1f, float lowBrightness = 0f)` since its more flexible since you can also change the values of brightness.

### Deployment & Tooling

### New Meadow Library Templates

We added a new Meadow library project template to both Visual Studio for Windows and Visual Studio 
for Mac. Meadow library projets automatically have the essential Meadow package references and 
SDK type all set:

![](FSharp_Template.png)

### F# Meadow Templates

We've also released F# templates for both Meadow apps and library projects! 

So if you <3 F#, now it's easy to start building Meadow apps with it:

![](FSharp_MeadowApp.png)

### Other Stuff

### Parametric Enclosure

Are you building a project and need an enclosure? We've created an easily modifiable enclosure template 
in Fusion 360 that allows you to change variables like length/depth/height, as well as the position of 
Meadow inside, and it'll automatically resize for you:

![](Meadow_Parametric_Enclosure_Open+Closed_Photo.jpg)

You can use it as is, or use it as the starting point for more complicated enclosures by adding features.

Check it out at our [3D Print Designs repo](https://github.com/WildernessLabs/3D_Print_Designs).

### Meadow EDA (Schematic and PCB Footprint) Parts

We've posted schematic symbols, PCB footprints, and 3D files of the Meadow F7 board for use in your own custom
circuit designs. You can find them in our [Meadow_EDA_Parts repo](https://github.com/WildernessLabs/Meadow_EDA_Parts).

![](Kicad_f7_symbol.png)

## Beta 3.11

Beta 3.11 is a major release that brings a pile of stabilizations and fixes across Meadow.OS, Meadow.Core, and Meadow.Foundation.

### Updating

You'll need to [flash a new Meadow.OS binary to your device](/Meadow/Getting_Started/Deploying_Meadow/), upgrade your IDE extension(s), and if you use the Meadow.CLI, you'll also need to download and use the latest version of that as well. All files can be found on the [downloads](/Meadow/Getting_Started/Downloads/) page.

### Meadow.OS Changes

We reduced the time resolution in the underlying OS to `1ms`, down from `10ms`. This should fix a number of issues where `10ms` delays were happening with calls, and the time functions such as `Stopwatch` were reporting incorrect timings.

### Meadow.Core Changes

* **Improved I2C support in Meadow.Core** - I2C now uses a `Span<byte>` internally and the I2CPeripheral added overloads taking `Span<byte>` params. `Span<T>` was introduced in .NET Core 2.1 and allows I2C comms to be much more efficient in their use of memory.
* **Fixed internal Pull-Up & Pull-Down resistor settings** - `DigitalInputPort` now has working internal pull-up and pull-down resistors.
* **Improved Interrupts** - We implemented a glitch filter and reworked the debounce filter to move it further down the OS stack to operate with less overhead. Docs on glitch filter coming soon.

### Meadow.Foundation Changes

### Motion Sensor Read/StartUpdating/IObservable fixes

We did a major overhaul to the motion sensor (accelerometers and such) APIs, updating their APIs to match the [`Read()`, `StartUpdating()`, `StopUpdating()` and `IFilterableObservable` pattern](/Meadow/Meadow.Foundation/Working_with_Sensors/) found in the other drivers.

### Driver Improvement

* **`ITextDisplay`** - Updated the API to work with larger variety of display types, `TextDisplayMenu` coming soon!
* **`RotaryEncoder`** - Is now more responsive when turning quickly 
* **`RgbPwmLed`** - Improved brightness control when setting the color
* **`Max7219`** - Has been updated to support more display configutations when driving 8x8 led arrays
* **`TftSpi` Display Driver** - Improved performance when making partial screen updates  
* **`GraphicsLibrary`** - Performance improvements and several rendering fixes when drawing basic shapes 
* **`Button`** - Long press does not raise click event and is disabled by default

### `TextDisplayMenu` Draft

TextDisplayMenu prerelease nuget published! You can now leverage the power of TextDisplayMenu in your Meadow projects with any display currently supported in Meadow.Foundation!

## Beta eta 3.10

Beta 3.10 is a cleanup release to fix several regressions introduced in `b3.8` and `b3.9` due to a mismatch in git submodules that slipped through the cracks and resulted in an awkward build. It's also an opportunity for us to test out our new release pipelines and QA processes, which should lead to greatly increased quality of releases from here forward. Finally, we also unlocked another serial (UART) port on the Meadow, so there are now two accessible serial ports.

### Updating

You'll need to [flash a new Meadow.OS binary to your device](/Meadow/Getting_Started/Deploying_Meadow/), upgrade your IDE extension(s), and if you use the Meadow.CLI, you'll also need to download and use the latest version of that as well. All files can be found on the [downloads](/Meadow/Getting_Started/Downloads/) page.

### Additional Free Serial Port

Previously, `COM1` (pins `D13` and `D12`) was unavailable for use as a serial port because we were outputting debug information from Meadow.OS on that port. However, we've moved that debug stream to USB, freeing that port (and pins) for use. For more information see the [Serial (UART) guide](/Meadow/Meadow_Basics/IO/Digital/Protocols/UART/).

### Beta ug Fixes

* [#66 - Resources do not work](https://github.com/WildernessLabs/Meadow_Issues/issues/66) - Regression. Fixed.
* [#76 - DateTime.Parse() enters an infinite loop](https://github.com/WildernessLabs/Meadow_Issues/issues/76) - Fixed.
* [#85 - Reading only 0 from serial (UART) receive buffer](https://github.com/WildernessLabs/Meadow_Issues/issues/85) - Regression. Fixed.
* [#86 - b3.9 UART issues](https://github.com/WildernessLabs/Meadow_Issues/issues/86) - Regression. Fixed.
* [#88 - Board works only if plugged in USB socket](https://github.com/WildernessLabs/Meadow_Issues/issues/88) - Regression. Fixed.

### Meadow Foundation

This release includes bug fixes and performance improvements in several drivers.

### Beta ug Fixes

* **GraphicsLibrary** - We fixed a bug when  vertical and horizontal lines were drawn 1 pixel too short.
* **Analog Temperature Sensors** - We merged two pull-requests fixing analog temperature sensor calculation. Thanks to [James Fraser](https://github.com/jbfraser1) for the fixes.

### Other Improvements

* **CharacterDisplay** - We improved error checking and gracefully handle long strings.

## Beta 3.9

`b3.9` is a minor release that adds more API stability, fixes some things we broke in `b3.8`, and adds some new features, including exposing the Real-Time-Clock on Meadow.

### Updating

You'll need to [flash a new Meadow.OS binary to your device](/Meadow/Getting_Started/Deploying_Meadow/), upgrade your IDE extension(s), and if you use the Meadow.CLI, you'll also need to download and use the latest version of that as well. All files can be found on the [downloads](/Meadow/Getting_Started/Downloads/) page.

### New Features & Changes

### Real-Time-Clock Setting

We've exposed an API to set the system clock:

```csharp
//Set the current date and time to March 30, 2020 at 12pm
Device.SetClock(new DateTime(2020, 3, 30, 12, 0, 0));
//Can now use DateTime.Now and the RTC will accurately mainting the correct time
Console.WriteLine($"Today is: {DateTime.Now}");
```

As long as the board is continuously powered, the clock will retain its time. Check out the [power guide](/Meadow/Meadow_Basics/IO/Power/) for more information on keeping the clock active.

### Beta ug Fixes

* [#81 - Feature request: serial buffer overrun event](https://github.com/WildernessLabs/Meadow_Issues/issues/81) - Added!
* [#79 - PWM.Period cannot be set when TimeScale is different from Seconds](https://github.com/WildernessLabs/Meadow_Issues/issues/79) - Fixed.
* [#78 - PWM Channel info is null](https://github.com/WildernessLabs/Meadow_Issues/issues/78) - Fixed. 
* [#71 - Unhandled exceptions do not output information to the Console](https://github.com/WildernessLabs/Meadow_Issues/issues/71) - Fixed. We added exception handling to the `App` class, so they should catch most things. 
* [#61 - Meadow Serial Communication not working](https://github.com/WildernessLabs/Meadow_Issues/issues/61) - Fixed. We broke this in the last build. Ooops. Someday we'll have integration tests that run on hardware to catch things like this.
* [#29 - Pin D04 as DigitalOutputPin is not responsive when pin D03 is setup as PWM.](https://github.com/WildernessLabs/Meadow_Issues/issues/29) - Fixed with hacky workaround. This issue is because of the underlying funkiness of the NuttX API. We've implemented a workaround for it for now. Long term, we'll need to revisit this.

### Meadow.Foundation

We've added a new driver for the Veml7700 light sensor and improved the performance of the Max7219 driver. You can find an example of the Max7219 in action in the [Meadow Samples GitHub repo](https://github.com/WildernessLabs/Meadow_Samples/tree/main/Source/MeadowSamples/Meadow.Foundation/Tetris).

## Beta 3.8 

This is another point release but it gets us another step closer to `b4.0`. The `b3.8` release adds further API stabilization and functionality, specifically focusing on I2C and SPI. This release also takes advantage of the performance increases from `b3.7` to unlock more drivers, including a couple of exciting input peripherals: `AnalogJoystick` and `RotaryEncoder`.

### Updating

You'll need to [flash a new Meadow.OS binary to your device](/Meadow/Getting_Started/Deploying_Meadow/), upgrade your IDE extension(s), and if you use the Meadow.CLI, you'll also need to download and use the latest version of that as well. All files can be found on the [downloads](/Meadow/Getting_Started/Downloads/) page.

### Beta ug Fixes

* [#65 - Feature request : SPI reading/writing ushorts without address](https://github.com/WildernessLabs/Meadow_Issues/issues/65) - This was actually two parts. One was adding an overload to allow `ushorts`, the other part was making it possible to do 16-bit words in SPI. Now you can write words of any length.
* [#63 - I2C frequencies not correct](https://github.com/WildernessLabs/Meadow_Issues/issues/63) - This wasn't so much a bug, but we made the frequency setting make some more sense.
* [#55 - Feature request : SPI frequency change](https://github.com/WildernessLabs/Meadow_Issues/issues/55) - Ok, hopefully this is fixed for real this time. :)
* [#22 - I2C Frequency cannot be set.](https://github.com/WildernessLabs/Meadow_Issues/issues/22) - Fixed again. :)

### Meadow.Foundation

There's continued improvement of driver features and stability as well as a handful of new peripheral drivers.

### New Peripheral Drivers

We've published eight new drivers:

* [AnalogJoystick](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid/AnalogJoystick/)
* [Sensors.Rotary.RotaryEncoder](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Rotary/RotaryEncoder/)
* [Sensors.Rotary.RotaryEncoderWithButton](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Rotary/RotaryEncoderWithButton/)
* [ICs.IOExpanders.Mcp23x08](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/Mcp23x08/)
* [Displays.Ssd1309](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays/Ssd1309/)
* [Sensors.Temperature.Lm75](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature/Lm75/)
* [Sensors.Power.Ina260](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Power/Ina260/)
* [Transceivers.SX127x](/docs/api/Meadow.Foundation/Meadow.Foundation.Transceivers/SX127x/)

### New Power Guide

We added a [guide on Power IO](/Meadow/Meadow_Basics/IO/Power/) that explains the options for powering the board, battery charging, solar, and more.

## Beta 3.7

Though this is a point release, it's actually cut from the `b4.0` work, and represents a significant Meadow upgrade. It continues the API stabilization and bug fixes started in `b3.6`, but also includes major performance increases, an up-to-date Mono runtime (with pre-cursor support for Core 3.x), and a pile of new Meadow.Foundation drivers that were unlocked by both the performance improvements and IO bug fixes.

### Updating

You'll need to [flash a new Meadow.OS binary to your device](/Meadow/Getting_Started/Deploying_Meadow/), upgrade your IDE extension(s), and if you use the Meadow.CLI, you'll also need to download and use the latest version of that as well. All files can be found on the [downloads](/Meadow/Getting_Started/Downloads/) page.

### Performance Improvements

We enabled various low-level caching mechanisms available on the F7 chip and fixed some long-outstanding memory bugs that were preventing their use up until this point. With these fixes and optimizations, we're able to realize one to two magnitudes of performance increases across various aspects of execution. The most significant being in IO access, which saw an `8,600%` increase since `b3.6`. However, we also saw significant improvement in general execution, as well. The following charts were created from the [Meadow Performance Benchmarking application](https://github.com/WildernessLabs/Meadow_Performance_Benchmarks) readme data:

<>
  <iframe
    width={600}
    height={371}
    seamless=""
    frameBorder={0}
    scrolling="no"
    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR6LF3jduievLwj3H_JNeO_yFrX3NewR8bAijKCfVsKTOTRuyfdNzvpPdNN0MWrP5-eaAxaRVFu0rn3/pubchart?oid=2104450466&format=interactive"
    style={{ width: "-webkit-fill-available" }}
  />
  <iframe
    width={600}
    height={371}
    seamless=""
    frameBorder={0}
    scrolling="no"
    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR6LF3jduievLwj3H_JNeO_yFrX3NewR8bAijKCfVsKTOTRuyfdNzvpPdNN0MWrP5-eaAxaRVFu0rn3/pubchart?oid=103861413&format=interactive"
    style={{ width: "-webkit-fill-available" }}
  />
  <iframe
    width={600}
    height={371}
    seamless=""
    frameBorder={0}
    scrolling="no"
    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR6LF3jduievLwj3H_JNeO_yFrX3NewR8bAijKCfVsKTOTRuyfdNzvpPdNN0MWrP5-eaAxaRVFu0rn3/pubchart?oid=2010951639&format=interactive"
    style={{ width: "-webkit-fill-available" }}
  />
  <iframe
    width={600}
    height={371}
    seamless=""
    frameBorder={0}
    scrolling="no"
    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR6LF3jduievLwj3H_JNeO_yFrX3NewR8bAijKCfVsKTOTRuyfdNzvpPdNN0MWrP5-eaAxaRVFu0rn3/pubchart?oid=867053354&format=interactive"
    style={{ width: "-webkit-fill-available" }}
  />
</>

**Overall, since `b3.5`, IO writes have gotten `318x` faster. And since the last beta, general operation execution speed is `4-8x` faster.** 

These improvements made several additional Meadow.Foundation drivers practical, now that execution speed can handle them. 

### Meadow Deployment

We made a number of optimizations to the CLI, including making deployment much more robust.

We also merged the OS binaries into a single binary.

### Beta ug Fixes

This release is a major leap in API stability. We closed nearly all of the open bugs around the IO API, including:

* [#5 - Calling DateTime.Now causes exception](https://github.com/WildernessLabs/Meadow_Issues/issues/5) - Fixed.
* [#18 - PushButton only works with constructor where Device is passed.](https://github.com/WildernessLabs/Meadow_Issues/issues/18) - Fixed. There was a code issue in the driver itself, the underlying IO was working as expected.
* [#21 - Issues with multiple buttons](https://github.com/WildernessLabs/Meadow_Issues/issues/21) - Fixed. 
* [#22 - I2C Frequency cannot be set.](https://github.com/WildernessLabs/Meadow_Issues/issues/22) - Fixed. We made it public. Was a silly API mistake.
* [#43 - Issues with Multiple Analog Inputs](https://github.com/WildernessLabs/Meadow_Issues/issues/43) - Fixed. Multiple analog inputs now work, as expected.
* [#48 - PwmPorts on D11 and D13 are linked together](https://github.com/WildernessLabs/Meadow_Issues/issues/48) - Fixed.
* [#50 - SpiPeripheral.ReadRegister always returns 0](https://github.com/WildernessLabs/Meadow_Issues/issues/50) - Fixed.
* [#55 - Feature request : SPI frequency change](https://github.com/WildernessLabs/Meadow_Issues/issues/55) - Fixed; you can now change the configuration after constructing, including frequency and polarity.
* [#56 - Setting PWM frequency on D13 changed D12](https://github.com/WildernessLabs/Meadow_Issues/issues/56) - This is fixed. We did an overhaul of the checks during this API call. PWMs on the same timer must have the same frequency, though their duty cycle can differ. We now throw an exception if you try and create two PWM channels on the same timer using different frequencies.
* [#57 - Console.WriteLine output disappearing](https://github.com/WildernessLabs/Meadow_Issues/issues/57) - Fixed. We re-architected and re-implemented how the output gets passed from Meadow to the CLI, and it's much cleaner, simpler, and hopefully, works better.
* [#58 - Can't deploy due to HCOM thread starvation](https://github.com/WildernessLabs/Meadow_Issues/issues/58) - At least partially fixed. This issue cropped up for folks on a second deploy, where they were unable to deploy or even make CLI calls. The thread that listens for the CLI wasn't responding. The workaround was to reset the board and then immediately make a call to recreate the file system via the CLI. It seems to be more or less fixed now, though we have some additional improvements on the plate for the future.

### Known Issues

With that said, there are still three bugs that we were hoping to squish, but did not:

* [#29 - Pin D04 as Digital Output is not responsive when pin D03 is setup as PWM](https://github.com/WildernessLabs/Meadow_Issues/issues/29)
* [#59 - Multiple inputs trigger duplicate/incorrect interrupts](https://github.com/WildernessLabs/Meadow_Issues/issues/59)
* [#37 - Threading and event callback lockup ](https://github.com/WildernessLabs/Meadow_Issues/issues/37)

### Meadow.Foundation

This is a big update, there are numerous improvements and fixes across published drivers. 

### New Peripheral Drivers

As well, we've published 13 new drivers via NuGet:

* [ICs.EEPROM.AT24C](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.EEPROM/At24Cxx/)
* [ICs.IOExpanders.x74595](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/x74595/)
* [RTCs.Ds323x](/docs/api/Meadow.Foundation/Meadow.Foundation.RTCs/Ds323x/)
* [Sensors.Atmospheric.Bmp085](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric/Bmp085/)
* [Sensors.Atmospheric.Bmp180](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric/Bmp180/)
* [Sensors.Atmospheric.Dht10](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric/Dht10/)
* [Sensors.Atmospheric.Dht12](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric/Dht12/)
* [Sensors.Atmospheric.Ms5611](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric/Ms5611/)
* [Sensors.Environmental.Ags01Db](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental/Ags01Db/)
* [Sensors.Light.Bh1745](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light/Bh1745/)
* [Sensors.Light.Bh1750](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light/Bh1750/)
* [Sensors.Light.Temt6000](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light/Temt6000/)
* [Sensors.Motion.ADXL362](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion/Adxl362/)
* [Sensors.Motion.Hcsens0040](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion/Hcsens0040/)

## Beta 3.6

This release is focused on quality and stabilization. It's mostly bug fixes, API stabilization, and new drivers based on that work. This is also just the first part of this work. We have a number of additional bug fixes that were originally due for b3.6, but there are so many good things already in this, we decided not to wait until they were all in and instead break it up into multiple releases, so there will likely be a b3.7 release soon as well.

### Beta ug Fixes

* [#45 - Typos in DigitalChannelIInfoBase](https://github.com/WildernessLabs/Meadow_Issues/issues/45) - Fixed typos in the API.
* [#42 - Device.CreateAnalogInputPort() prints debug messages](https://github.com/WildernessLabs/Meadow_Issues/issues/42) - Got rid of the debug output.
* [#35 - SPI Exception when calling ReadRegister](https://github.com/WildernessLabs/Meadow_Issues/issues/35) - Fixed. `SpiPeripheral` got reworked.
* [#26 - `PwmPort.From` does not show friendly error when the target pin doesn't support pwm](https://github.com/WildernessLabs/Meadow_Issues/issues/26) - Proper error checks now.
* [#24 - Get Build Date with version](https://github.com/WildernessLabs/Meadow_Issues/issues/24) - Fixed. Returns both the proper version and build date/time now.
* [#20 - DigitalInputPortEventArgs.Value always returns false](https://github.com/WildernessLabs/Meadow_Issues/issues/20) - `Value` now returns the actual post-event value
* [#19 - DigitalInputPortEventArgs - Rename Value to State To Be Consistent with pin properties](https://github.com/WildernessLabs/Meadow_Issues/issues/19) - Fixed. Now uses the `State` property.

### Performance Improvements

While Meadow.OS is still slow overall, due to the fact that we're running .NET code in interpreted mode (as opposed to compiled via Just-in-Time (JIT) or Ahead-of-Time (AoT) compilation), we did optimize some things within Meadow.Core, and realized `~380%` speed increase in digital output writes. In running the [Meadow Performance Benchmarking application](https://github.com/WildernessLabs/Meadow_Performance_Benchmarks), digital output writes went from `~16ms` to `~4ms`, which, while still slow, is a major improvement.

AoT compilation (which should give us at least two magnitudes of performance improvement) is still schedule for b4.0.

### Meadow.Foundation Fixes and New Drivers

### Changes

We fixed the following drivers:

* `PwmLed` - Pulse now works without blinking.
* `RgbPwmLed` - Pulse and colors now work without blinking. Also, we fixed it to work with common anode LEDs, so it now works with the onboard LED.
* `PushButton` - Resistor stuff now works. 

### New Peripheral Drivers

This is a big update, there are numerous improvements and fixes across published drivers. 

As well, we've published 14 new drivers via NuGet:
* [PCD8544 LCD display controller](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays/Pcd8544/)
* [MAX7219 led display controller](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays/Max7219/)
* [TM1637 led display controller](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays/Tm1637/)
* [ULN2003 stepper motor controller](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.Stepper/Uln2003/)
* [HIH6130 I2C temperature and humidity sensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric/Hih6130/)
* [HTU21D I2C temperature and humidity sensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric/Htu21d/)
* [SI70xx I2C temperature and humidity sensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric/Si70xx/)
* [ALS-PT19-315C light sensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light/Alspt19315C/)
* [ADXL335 Analog triple axis, +/-3g accelerometer](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion/Adxl335/)
* [ADXL337 Analog triple axis, +/-3g accelerometer](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion/Adxl337/)
* [ADXL345 I2C triple axis accelerometer, +/-16g accelerometer](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion/Adxl345/)
* [ADXL377 Analog triple axis, +/-200g accelerometer](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion/Adxl377/)
* [BNO055 I2C 9-Axis absolute orientation sensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion/Bno055/)
* [TMP102 I2C temperature sensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature/Tmp102/)

### Meadow.CLI Fixes, Updates, and Open-Sourcing

Most of the Meadow.CLI changes involve more complete information being returned by Meadow. Previously, Meadow only returned text strings. Now it returns more structured information and is more stable. Some of these changes will become important in future releases. One new command was added, `RenewFileSys`. This command recreates a new, empty file system.

### Open Sourced

Also, we open-sourced the [Meadow.CLI](https://github.com/WildernessLabs/Meadow.CLI) code. Some of the code is ugly. We know. :)

### Samples and Documentation 
We've updated and standardized all of the sample projects in Meadow.Foundation to match the latest template. And we've invested heavily in our docs, you'll notice we've added details and wiring diagrams for most of our peripheral docs.

### Updating

You'll need to flash new Meadow.OS binaries to your device, upgrade your IDE extension(s), and if you use the Meadow.CLI, you'll also need to download and use the latest version of that as well. All files can be found on the [downloads](/Meadow/Getting_Started/Downloads/) page.

## Beta 3.5

This is quite a big release with new features, including UART, and a major overhaul to Meadow.Foundation. We also launched a new developer site and added docs for Meadow.CLI.

### Serial/UART

Meadow now has Serial/UART support! Check out the new [UART guide](/Meadow/Meadow_Basics/IO/Digital/Protocols/UART/) for all the details!

### Beta etter Digital Protocol Errs

As part of the Serial work, we also improved error messaging across all the digital protocols (I2C, SPI, UART). We now get an actual linux error number back when things go wrong. Those error numbers still need to be looked up online to make sense of them, but before we were only getting `-1` when something wrong. There's still work to be done here, though. We plan on recreating common failures, mapping their errors, and generally trying to provide better guidance.

### I2C Speed Setting

You can now set the speed of the I2C bus. Somehow we missed this when we launched the I2C feature.

### Meadow.CLI Docs

We've published a [guide for the Meadow.CLI (Command Line Interface)](/Meadow/Meadow_Basics/Meadow_CLI/).

### Meadow.Foundation

### `Read()`, `StartUpdating()`, and `StopUpdating` Sensor Pattern

Meadow.Foundation got a major sensor overhaul for b3.5, including the new `Read()`, `StartUpdating()`, and `StopUpdating()` pattern for sensor reads. We also published a new [Working with Sensors in Meadow.Foundation](/Meadow/Meadow.Foundation/Working_with_Sensors/) guide that is recommended reading, and explains the new pattern.

### Display Updates

We've added new features to `GraphicsLibrary`:
- two new large pixel fonts: 12x16 and a 12x20
- new `Rotation` property allows screen rotation on any display (even if the driver doesn't support it directly)
- smarter drawing calls, allows more optimizations to be performed by the display driver

SPI display driver performance:
- drivers share a buffer with SPI bus under-the-hood, this reduces memory usage and should help performance
- drivers now caches color values to reduce conversions from 24bit color to display-specific values
- automatic partial screen updates (when possible) to reduce drawing time

Better display support:
- fixes to improve display support across several drivers including support for the 135x240 variant of the ST7789 display
- re-write of the ePaper display drivers to expand supported displays and make it easier to identify the correct driver

### New Developer Site

You're looking at it! We took our beta-developer site live, with the hot new redesign, and of course, Meadow docs! The whole site has been redesigned, including the API docs, which also got a major information architecture overhaul.

### Updating

To use this new beta, you'll need to reflash your board with the [latest Meadow.OS binaries](http://wldrn.es/latestmeadowos), as well as update your IDE extensions.

## Beta 3.4

This is another small release that expands the SPI capabilities, adds robustness to the IDE extensions, and sees some more things open-sourced.

### Advanced SPI Configuration

When using SPI, you can now have control over advanced configuration such as speed, clock polarity, and phase. This adds the ability to use more SPI peripherals, such as the OLED display included in the Hack Kit Pro, and NeoPixels!

To use the new SPI configurations, simply pass them in during construction:

```csharp
Device.CreateSpiBus(
    Device.Pins.SCK,
    Device.Pins.MOSI,
    Device.Pins.MISO,
    new SpiBus.ClockConfiguration(4000, SpiBus.Mode.Mode2));
```

You can also change configurations during runtime.

### ST7789 OLED Display Meadow.Foundation Driver

Along with the configuration options, we've also released a [Meadow.Foundation driver for the state ST7789 OLED display](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft/ST7789/) included in the Hack Kit Pro:

![](ST7789_OLED.jpg)

### Visual Studio IDE Extensions Open-Sourced

We've open sourced the Visual Studio Meadow extensions! We're slowly working towards open sourcing all of the Meadow tooling, but we need to clean a lot of it up first, so this is the first step.

You can find the source code in the following repos:

 * [VS Windows Meadow Extension Repo](https://github.com/WildernessLabs/VS_Win_Meadow_Extension) - **Note**: this will be opened by October 28th, 2019 @ 6p PT. We're cleaning code.
 * [VS Mac Meadow Extension Repo](https://github.com/WildernessLabs/VS_Mac_Meadow_Extension)

### Meadow.CLI and Visual Studio Extension Enhancements

We've also made some updates to the Meadow.CLI to enable the IDE extensions to check for updates to files already deployed on the Meadow device. 

### Meadow.CLI Updates

There is a new command, `--ListFilesAndCrcs`, that lists files as well as the [CRC values](https://en.wikipedia.org/wiki/Cyclic_redundancy_check) for each of the files.

### IDE Extension Enhancements

With the CLI returning CRC values, the IDE extensions now check to see if any files need updating when deploying. This solves an issue where if a dll such as Meadow.Foundation.dll had already been deployed to the device, and a newer version existed in the project, it wouldn't get updated. 

### Updating

To use this new beta, you'll need to reflash your board with the [latest Meadow.OS binaries](http://wldrn.es/latestmeadowos), as well as update your IDE extensions.

## Beta 3.3

This is a small release with some sundry fixes:

* **Multiple PWMs** - We fixed a bug where only one or two PWM channels would be active at one time. With this bug fix, you will now have full multi-PWM access, enabling things like the onboard LED to do full color spectrum.
* **Analog IObservable** - These now work. They actually worked all along, but our sample was using `Debug.WriteLine()` which doesn't currently work (`Console.WriteLine()` is fine).
* **VS Extension Updates** - We've made some sundry fixes to the Meadow project templates. Meadow.Foundation is now linked by default, and **File** > **New** > **Meadow App** now creates an app that walks the color hue spectrum on the onboard LED.

To use this new beta, you'll need to reflash your board with the [latest Meadow.OS binaries](http://wldrn.es/latestmeadowos), as well as update your IDE extensions.

**Note:** Meadow.Core updates also require the latest `Meadow.dll` be deployed to your Meadow. Currently, the IDE extensions will not update this dll if it's already on your board, so you'll need to manually delete it via the CLI, via the following command:

```bash
MeadowCLI.exe -s [NameOfSerialPort] --DeleteFile --TargetFileName Meadow.dll
```

Make sure to replace `[NameOfSerialPort]` with the serial port name of your device. Once deleted, the IDE extensions will automatically re-deploy with the latest bits.

## Beta 3.2

### New File System

We upgraded the file system that Meadow uses to LittleFS; which has the distinct advantage of initializing and formatting in seconds, as opposed to the 15-20 minutes of the last file system we were using.

Now, after when you deploy Meadow.OS, the first startup should be very fast, and you won't need to wait for the flash to format.

To upgrade, you'll need to [flash the latest version of Meadow.OS](/Meadow/Getting_Started/Deploying_Meadow/) to your device.

### Beta asic Analog Input is Up

We got basic [analog](/Meadow/Meadow_Basics/IO/Analog/) input ports working on pins `A0` through `A3`. To read an analog input value, create an [`AnalogInputPort`](/docs/api/Meadow/Meadow.Hardware.AnalogInputPort.html) on one of those pins and call the [`Read()`](/docs/api/Meadow/Meadow.Hardware/AnalogInputPort/#Meadow_Hardware_AnalogInputPort_Read_System_Int32_System_Int32_) method. 

Note that advanced `IObservable` and events do not work at this time.

To use analog inputs, make sure you update the `Meadow.Core` nuget packages in your projects.

### Debug Output on Visual Studio for Windows

`Console.WriteLine()` calls are now being forwarded to a Meadow output window in Visual Studio on Windows, enabling basic debug output. Make sure to upgrade your Meadow Visual Studio extension to get support.

### Meadow.CLI Updates

In order to be compatible with the file system changes, the `Meadow.CLI` has also been updated. Make sure download and use the [new binaries](http://wldrn.es/latestmeadowcli).

## Beta 3.1

### SPI

We got [SPI](/Meadow/Meadow_Basics/IO/Digital/Protocols/SPI/) validated and merged. We’re excited to get this out, as we know that several of you are working on integrations that require SPI. To use it, you’ll need to flash your Meadow board with the [latest OS firmware binaries](http://wldrn.es/latestmeadowos).

### Visual Studio Extension

Our project template is now included enabling the creation of new Meadow Apps within Visual Studio, [check out the update](/Meadow/Getting_Started/MCUs/F7_Feather/). Debugging remains unavailable, but the console app gracefully exists.

### Meadow.CLI
Now available for [download](http://wldrn.es/latestmeadowcli).

## Beta 3.0

Beta 3 is here, and it's awesome! This is the biggest release we've done yet and is the first beta that makes Meadow truly productive. We're excited to get it in your hands.

### New Core Features

* USB Deployment
* PWM, I2C

#### USB Deployment

Wahoo!! No more painful JTAG deployment, deploying your app is now a cinch via the USB deployment feature.

##### Meadow.CLI

We've created a _Command Line Interface_ for meadow that allows you to deploy a Meadow application to a Meadow device over USB. Check out the guide on how to [Deploy Meadow OS to your Board](/Meadow/Getting_Started/).

#### Visual Studio Windows and Mac Extensions

Say hello to productivity! That's right, we now have extensions for [Visual Studio](https://marketplace.visualstudio.com/items?itemName=WildernessLabs.vsmeadow01) and [Visual Studio for Mac](https://addins.monodevelop.com/Project/Index/394) to deploy apps. To get up and running, check out [Hello, World; Meadow-style](/Meadow/Getting_Started/).

#### Digital Outputs and Protocols

##### [Pulse-Width-Modulation (PWM)](/Meadow/Meadow_Basics/IO/Digital/PWM/)

PWM is now live! Along with it, PwmLed, RgbPwmLed, Servo Core, etc.

```
IPwmPort pwm = Device.CreatePwmPort(
    pin: Device.Pins.D05, 
    frequency: 100, 
    dutyCycle: 0.5f);
pwm.Start();
```

##### [Inter-Integrated Circuits (I2C)](/Meadow/Meadow_Basics/IO/Digital/Protocols/I2C/)

The I2C protocol is also available in our latest Meadow OS.

```
II2cBus i2c = Device.CreateI2cBus();
GY521Test(i2c); // Pass i2c to an I2C capable device
```

### Fixed Bugs

* [Pull-up and Pull-Down resistors don't work](https://github.com/WildernessLabs/Meadow_Issues/issues/6) - Fixed. You no longer need external PU/PDs, you can use the internal ones.
* [Tasks Behave Strangely](https://github.com/WildernessLabs/Meadow_Issues/issues/2) - This was just an error in the sample. Thanks [Ryan Davis](https://github.com/rdavisau) for the fix.
* [BiDirectionPort doesn't work](https://github.com/WildernessLabs/Meadow_Issues/issues/9) - Works now! Thanks to [Adam Patridge](https://github.com/patridge) for pointing it out. We regressed the API right before beta 2 release.
* [`AnalogInputPort`](https://github.com/WildernessLabs/Meadow_Issues/issues/7) readings are not correct. - Fixed this was a hardware issue. [TODO: Verify]

### Known Issues

* Meadow runtime is slow. For instance, we're currently only able to get about 30-40hz out of the `SoftPwmPort`. There's still a lot of debug code, so this will get much faster in future releases.
* `GlitchFilterCycleCount` is not implemented in `DigitalInputPort`. This is coming soon.
* [`Debug.Write` calls don't output to the console](https://github.com/WildernessLabs/Meadow_Issues/issues/3) - Workaround is to use `Console.Write` calls.
* [Serial Peripheral Interface (SPI)](/Meadow/Meadow_Basics/IO/Digital/Protocols/SPI/) - not working as expected, investigating.

## Beta 2.0

### New Core Features

### Meadow Core Now Published as a NuGet Package

Meadow is now published as a [NuGet package](https://www.nuget.org/packages/Meadow/), so you don't have to manually reference the dll.

To use it, your application must target .NET 4.7.2.

### New IO APIs

One of the big things we've been working on is a major rewrite of how IO is handled between the underlying OS and Mono (the managed runtime) where we've been able to simplify a lot of the underpinning there and make it much more efficient.

Along the way, we've also done a lot of thinking and reworking of the API. Specifically, we've added two new features. The first, is that the IO Devices are self describing with a mapping of `Device` > `Pins` > `Channels`. For instance, the following [Meadow sample code](https://github.com/WildernessLabs/Meadow_Samples/tree/main/Source/MeadowSamples/GpioInterrogation) enumerates all the pins and what type of IO is possible for each pin:

```csharp
foreach(var pin in Device.Pins.AllPins) {
   Console.WriteLine("Found pin: " + pin.Name);
   foreach (var channel in pin.SupportedChannels) {
            Console.WriteLine("Contains a " + channel.GetType()
            + "channel called: " + channel.Name + ".");
   }
}
```

Here's an excerpt from the output the above code returns:

```bash
Found pin: A05
Contains a Meadow.Hardware.DigitalChannelInfochannel called: PC1.
Contains a Meadow.Hardware.AnalogChannelInfochannel called: ADC1_IN11.

Found pin: D00
Contains a Meadow.Hardware.DigitalChannelInfochannel called: PI9.
Contains a Meadow.Hardware.UartChannelInfochannel called: UART4_RX.

Found pin: D01
Contains a Meadow.Hardware.DigitalChannelInfochannel called: PH13.
Contains a Meadow.Hardware.PwmChannelInfochannel called: TIM8_CH1N.
Contains a Meadow.Hardware.UartChannelInfochannel called: UART4_TX.

Found pin: D02
Contains a Meadow.Hardware.DigitalChannelInfochannel called: PC6.
Contains a Meadow.Hardware.PwmChannelInfochannel called: TIM3_CH1.

Found pin: D03
Contains a Meadow.Hardware.DigitalChannelInfochannel called: PB8.
Contains a Meadow.Hardware.PwmChannelInfochannel called: TIM4_CH3.
Contains a Meadow.Hardware.CanChannelInfochannel called: CAN1_RX.
```

An astute observer familiar with the STM32F7 might notice that the analog port in the excerpt also exposes digital IO. We're now much more flexible in what types of IOs are exposed on which pins; which provides more options for you. In fact, now there's 25 possible digital IOs. With these `IChannelInfo` objects, the IO is also self-documenting, and you can see what kind of ports are available from each pin without having to refer to the IO pinout diagram.

### Device-Centric API

Additionally, we made the API more device-centric. So instead of instantiating ports out of thin air (which was always just a little off); ports our now created via an `IIODevice`.

```csharp
IDigitalOutputPort redLED = Device.CreateDigitalOutputPort(Device.Pins.OnboardLEDRed);
```

The great thing about this, is that it doesn't matter whether the ports are on the Meadow, or on external IO expanders, the API is the same. So we could also create a Digital Output Port from an MCP230xx IO expander, the same way:

```csharp
var ledPort = mcp.CreateDigitalOutputPort(mcp.Pins.D04);
```

This provides a more intuitive mental map of the hardware and also simplifies the IO control under the hood.

### Interrupts & Events/Notifications

Another big part of this release is that we got interrupts to propagate properly from the OS kernel to the Meadow runtime. The upshot is that events now work, so when a change occurs on `DigitalInputPort`, the `Changed` event is called properly. This also unlocked a lot of Meadow.Foundation peripheral drivers that we were able to implement.

Here is a simple example of using an input `Changed` event:

```csharp
public class ButtonEventsApp : App<F7Micro, ButtonEventsApp>
{
    IDigitalInputPort _input;

    public ButtonEventsApp()
    {
        _input = Device.CreateDigitalInputPort(Device.Pins.D02, debounceDuration: 20);
        _input.Changed += Input_Changed;
    }

    private void Input_Changed(object sender, DigitalInputPortEventArgs e)
    {
        Console.WriteLine("Changed: " + e.Value.ToString() + ", Time: " + e.Time.ToString());
    }
}
```

### `IObservable`/Reactive Pattern

However, we didn't stop with just traditional events. We also added `System.IObservable` support, along with a [`FilterableObserver`](xref:Meadow.FilterableObserver) that allows you to subscribe to an observable, with an optional filter on the events, as well as a handler shortcut. Consider the following code:

```csharp
public class InputObservableApp : App<F7Micro, InputObservableApp>
{
    IDigitalInputPort _input;

    public InputObservableApp()
    {
        // create an input port on D02.
        _input = Device.CreateDigitalInputPort(Device.Pins.D02);

        // Note that the filter is an optional parameter. If you're
        // interested in all notifications, don't pass a filter/predicate.
        _input.Subscribe(new FilterableObserver<DigitalInputPortEventArgs>(
            e => {
                Console.WriteLine($"Observer Observing the Observable, Observably speaking, Time: {e.Time.Millisecond}, Value: {e.Value}");
            },
            f => {
                return (f.Time - f.PreviousTime > new TimeSpan(0, 0, 0, 0, 1000));
            }));
    }
}
```

In the case of the code above, it uses a `FilterableObserver` to filter out events that occur less than a second after the last notification.

However, the `Subscribe` method will take any `IObservable`, so you can also use whatever Reactive pattern and framework you choose.

### New Meadow Samples Repo

It occurred to us recently that our Meadow core samples were locked behind a source code auth wall. Not anymore! We've moved them to their own repo at [github.com/WildernessLabs/Meadow_Samples](http://github.com/WildernessLabs/Meadow_Samples).

Check them out and see how to use the new APIs!

### Analog Input

It's time to break out your [analog temp sensors](xref:Meadow.Foundation.Sensors.Temperature.AnalogTemperature), because we've got analog input! Ok, well, maybe not _quite_ yet. ;) The API is there, and none of it will crash, but the readings aren't quite right. We debated publishing this as is, but you can at least build against it, as long as you ignore the bogus values.


### New Meadow.Foundation Features

Meadow.Foundation got quite a few more core [peripheral drivers](/Meadow/Meadow.Foundation/Peripherals) added, as well as a few non-core drivers.

We'll be releasing additional Meadow.Foundation updates out-of-band from the beta releases, so make sure to check the [peripheral drivers list page](/Meadow/Meadow.Foundation/Peripherals) for updates often, and update your NuGet packages.

### Fixed Bugs

* [Threads Fail](https://github.com/WildernessLabs/Meadow_Issues/issues/1) - W00t! We haz multithreading!

### Known Issues

* Meadow runtime is slow. For instance, we're currently only able to get about 30-40hz out of the `SoftPwmPort`. There's still a lot of debug code, so this will get much faster in future releases.
* [`AnalogInputPort`](https://github.com/WildernessLabs/Meadow_Issues/issues/7) readings are not correct.
* [Internal PullUp and PullDown resistors are not working in `DigitalInputPort`](https://github.com/WildernessLabs/Meadow_Issues/issues/6) - Workaround is to use an external `10k` resistor as illustrated [here](http://developer.wildernesslabs.co/Hardware/Tutorials/Electronics/Part4/PullUp_PullDown_Resistors/)
* `GlitchFilterCycleCount` is not implemented in `DigitalInputPort`. This is coming soon.
* [Tasks Behave Strangely](https://github.com/WildernessLabs/Meadow_Issues/issues/2) - Workaround is to use `Thread`, as seen in the [Basic_Threading](https://github.com/WildernessLabs/Meadow_Samples/blob/main/Source/MeadowSamples/Basic_Threading/ThreadingApp.cs) sample app.
* [`Debug.Write` calls don't output to the console](https://github.com/WildernessLabs/Meadow_Issues/issues/3) - Workaround is to use `Console.Write` calls.