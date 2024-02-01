---
layout: Meadow
sidebar_label: Meadow v1.0 RC's
title: Meadow v1.0 Release-Candidates
subtitle: Release Notes
---
# RC-3.1 (OS v0.9.8.1, ESP v.0.9.8.0)

We have a new release candidate, with a few fixes in the operating system but some big driver updates! This release resolves several issues with applying OTA updates via Meadow Cloud, and includes improvements to the Meadow.Foundation peripheral library.

## Updating to RC-3.1

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

## Meadow Tooling

* **.NET Dynamic Method Fix** - A fix in Mono should now enable execution of .NET code generated at run-time
* **Meadow CLI** - This release should now work on MacOS Apple processors (M1/M2) as well as Intel processors
* **Visual Studio Code** - Output is now color coded between IDE (white) and Meadow (blue)
* **Visual Studio for Windows** - Project templates have been updated
* **Visual Studio for MacOS** -  Project templates have been updated

## Meadow.Core

* `MeadowOS.Start()` modified to accept an `IApp` parameter to allow platforms to do App creation manually
* Added `WSL2` Platform to `Meadow.Linux`
* Platform configuration now supports reserving pins to prevent Core from initializing them and preventing applications from accessing them
* Bug fixes and improvements to OtA Updating
* Bug fixes and improvements to the full `Meadow.Linux` stack
* Added `ParticleDensity` to `Meadow.Units`

## Meadow.Foundation

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

## Meadow Samples

As usual, all our samples repos and API docs have been updated to latest API changes:
* [Meadow.Core.Samples](https://github.com/WildernessLabs/Meadow.Core.Samples)
* [Meadow.Project.Samples](https://github.com/WildernessLabs/Meadow.Project.Samples)
* [Meadow.ProjectLab.Samples](https://github.com/WildernessLabs/Meadow.ProjectLab.Samples)
* [API Documentation](../../../docs/api/Meadow/)

# RC-3 (v0.9.6.3)

Our next release candidate is here! This release improves system and app reliability, adds Meadow Cloud devices provisioning, and fixes several issues with Over-The-Air (OTA) updates for Meadow.OS on the way to 1.0.

RC3 includes:

* **Async I/O and Threadpool Stability Improvements** - We landed a critical fix regarding thread scheduling during the App runtime. Very frequently, the app would hang, usually when attempting asynchronous I/O over multiple threads. The threadpool has also been bound to a small number of threads (four).
* **Meadow Cloud Device Authentication** - We have added device provisioning and secure authentication for the Over-The-Air (OTA) update service.
* **File Transfer Progress Bars in Mac and Windows IDEs** - We now have a slighter nicer UX during file transfers, which includes progress bars for each file transfer. There is now also a separation between messages generated on the Host side and the Meadow device side. As such they now appear in separate output windows. So the respective outputs should be a little cleaner too.
* **Ethernet Stability Improvements** - A critical fix in ethernet setup has dramatically improved the stability of Ethernet connections.
* **HCOM Protocol Version Change** - The Meadow HCOM communication protocol version has been bumped from 6 to 7. This improves communication between Meadow and your development environment, and it means that you'll need to update Meadow OS, Meadow CLI and the Visual Studio extension(s) at the same time.
* **meadow.config.yaml Format Change** - The config format for network interface has changed in this release; users must update their existing apps if they have including custom network configuration.
* **Improved displays and graphics support** - This release includes additional drawing optimizations in **MicroGraphics** along with two new OLED display drivers

## Updating to RC-3

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

## Known Issues

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

## meadow.config.yaml Format Change

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

# RC-2.2 (v0.9.4.0)

Here's another update with API improvements and new drivers! This release includes nugets and Visual Studio extensions - you don't need to flash a new OS - but that doesn't mean it's a small release.

RC-2.2 includes:
* **Meadow Desktop Support** - it's now possible build Meadow apps on a desktop! This release includes preliminary support with more coming soon
* **New Pin Controller API pattern** - We've overhauled the way Meadow creates ports from pins. This both simplifies using peripheral drivers and makes Meadow far more flexible when using IO expanders.
* **Improved MicroGraphics APIs** - We added a new circular arc API to draw angles as well a top-to-bottom API cleanup
* **New Drivers** - We've added three new drivers for Meadow Desktop including a display driver for Windows Forms, a display driver for Gtk and a keyboard driver! We've also added support for the GNSS 5 mikro click board.

## Updating to RC-2.1

You just need to grab the latest Meadow nugets (verion 0.95.0) and install the latest Visual Studio extension(s) (version 0.9.5.0). There's no new CLI for this release.

## Pin Controller pattern

Meadow.Foundation drivers no longer require passing in the Meadow Device when using constructor overloads the accept Meadow pins. This means existing applications will need to be updated. This just requires removing the `Device` parameter when instantiating drivers. 

For example:

**RC2-1** (old)
`var myLed = new Led(Device, Device.Pins.D02);`

**RC2-2** (new!)
`var myLed = new Led(Device.Pins.D02);`

Under the hood, Meadow pins are now aware of their parent controller. This means a pin for your Meadow F7 knows about the Meadow F7 device which is why the `Device` parameter is no longer needed. This also brings a big improvement when using IO expanders such as the MC23xxx family of digital IO expanders. It's now possible to pass in pins from different controllers to the same peripheral. This is useful for complex peripheral devices that have multiple IO pins. 


# RC-2.1 (v0.9.4.0)

We're following up the release of Meadow RC2 with a point release that addresses a couple of key issues and includes some API improvements and fixes throughout the entire stack.

This release includes:

* **System stability** - Fixed an edge-case MPU configuration bug that caused seemingly random application hangs when accessing the file system. As .NET execution can load assemblies at any time, this bug could cause hangs even for applications not directly using the file system.
* **Increased capacity for open files** - This is particularly useful for complex apps/apps that use SQLite
* **GitGub repo organization** - We've made it easier to view and contribute to Meadow by adding Meadow.Linux to the Meadow.Core repo

## Updating to RC-2.1

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

## Release Details

**Meadow.Foundation**

* **New Magnetometer sensor** - The MMC5603 magnetometer is now supported
* **Added GNSS 10 Click Mikrobus driver** - The click board uses the Neo M8 GNSS module
* **Improved peripheral abstraction** - We've reworked the interfaces and base classes supporting the Meadow.Foundation peripherals making it easier to write Meadow apps that are abstracted from specific hardware
* **Bug fixes and cleanup** - You can see the issues we've [addressed here](https://github.com/WildernessLabs/Meadow.Foundation/milestone/20)

# RC-2 (v0.9.2.5)

We're excited to release the 2nd Meadow v1.0 Release-Candidate! This is another milestone release with new features and more performance improvements. To mark the occasion, we're continuing our goal of contributing to the .NET open-source community by open-sourcing Meadow.Core! This means the entire stack that sits above the .NET runtime is now open and [available on GitHub](http://www.github.com/wildernesslabs/Meadow.Core).

This release includes:

* **SD Card Support** - APIs are now available to use the SD card reader with the Meadow Core-Compute Module
* **Static IP Address Support** - Meadow now supports setting a static IP address for the WiFi connection
* **Network Credentials Enhancements** - New methods have been added to work with data in [wifi.config.yaml](../../Meadow.OS//Configuration/WiFi_Configuration/index.md) file

## Updating to RC-2

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

## Release Details

**Meadow.OS**

#### JIT

JIT is now turned on by default giving existing applications a performance boost.

Interpreted mode can be re-enabled by adding the following to the application `meadow.config.yaml` file:

```yaml
MonoControl:
    Options: --interp
```

#### SD Card Support (CCM)

SD cards are now supported on the Core Compute Module.  The SD card interface can be enabled in the `meadow.config.yaml` file:

```yaml
Device:
    SdStorageSupported: true
```

#### Network Credentials Enhancements

Two new methods have been added to work with the data in the [wifi.config.yaml](../../Meadow.OS//Configuration/WiFi_Configuration/index.md) file:

* `ConnectToDefaultAccessPoint`
* `ClearStoredAccessPointInformation`

`ConnectToDefaultAccessPoint` will us the SSID and password information previously loaded from the `wifi.config.yaml` an attempt to connect to the specified access point.

`ClearStoredAccessPointInformation` can be used to remove the stored credentials from non volatile memory.

#### TLS Update

TLS library has been updated.

#### Improved Low Power Support

The delay between the OS waking and calls to `Console.WriteLine` is no longer necessary.

#### Static IP Address Support for WiFi

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


# RC-1.1 (v0.9.0.4)

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

## Updating to RC-1.1

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

# RC-1 (v0.9.0.4)

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

## Updating to RC-1

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

## Release Details

### Meadow.Cloud

With Meadow.OS v1.0 RC-1, we've also launched the first beta of Meadow.Cloud, including two core features:

* **MQTT Push-Messaging** - Each Meadow device is now individually addressable and you can push messages containing arbitrary data to them.
* **Over-the-Air (OtA) Updates** - You can now push App updates remotely to devices.

Users interested in the beta can sign up using [this form](https://docs.google.com/forms/d/e/1FAIpQLSdeTF36um4sr_dc20Q8ie7bo-ZWu2DE4-sl9GhQI9vcE3We-g/viewform). Meadow Cloud OtA is available via Meadow.CLI right now, with a Web UI coming in the future.

## Meadow.OS

### Faster OS and App Startup

There was a leftover 10 second startup delay from debugging Meadow.OS startup and initialization code that we removed. Additionally, linking (see below) also greatly improved app startup speed. The net effect of these improvements has seen a dramatic increase in OS and App startup speed.

### Meadow.OS and .NET Stability

We've fixed several issues with the Mono runtime's execution on Meadow, including a bad value in a bespoke ARM-Thumb2 assembly-code trampoline that caused .NET runtime stability issues when using runtime internal calls from .NET code (e.g. in file and network I/O).

We also did a lot of work around the .NET Runtime -> Meadow.OS glue that fixed up a number of stability issues.

### Just-in-Time (JiT) Compilation

Meadow.OS now has JiT compilation support, which compiles code on startup to low-level assembly language, rather than executing .NET Intermediate-Language (IL) in a virtual machine as interpreted instructions. This provides around a magnitude of performance improvement across the board, with some code instructions seeing even more improvements. Check out the [Meadow Benchmarks Sample](https://github.com/WildernessLabs/Meadow_Performance_Benchmarks) for specific performance improvement benchmarks.

#### Enabling JiT

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

#### Faster WiFi Connection

WiFi connection time has been reduced by 90%. Meadow should now connect to WiFi in 3 seconds or less.

#### Stabilization

We've invested a huge amount of effort in this release resolving customer reported networking issues (thank you for filing [issues](https://github.com/WildernessLabs/Meadow_Issues/issues) with repros!) that exercised advanced socket features.

This release fixes a number of issues around web request stability as well as cloud integrations with Azure IoT, Google Cloud, and more.

#### Core-Compute Ethernet Support

Ethernet is now available for use on the Core-Compute module.

### Configuration Files

We did a major overhaul to app, network, and OS build-time configuration support. We also re-enabled the WiFi configuration which was disabled in the last release due to a crasher bug.

Meadow apps now have sophisticated support for a number of configuration files and formats (both YAML and JSON).

Check out the [Configuration Guide](/Meadow/Meadow.OS/Configuration/) for more information.

## Meadow.Core

Since breaking APIs after release is never a good thing, we're driving hard toward a solid, future-proof Core API. The largest change here is in the application lifecycle. With the addition of Over-the Air (OtA) updating capability, Meadow needs to be able to do controlled shutdown and startup of the application. These changes require updating existing applications, and those changes are outlined below.

### API and Stability Fixes

#### Serial Ports

We've exposed public setters for `Parity`, `DataBits` and `StopBits` so they don't have to be set only during construction.

#### More Unitized

An underlying philosophy on Meadow is that to improve code clarity and reduce bugs, data should always carry units with it and all methods should use units where applicable. PWMs have been reworked to use `Frequency` units and `DigitalInputPorts` have been changed to use `TimeSpan` for both `GlitchDuration` and `DebounceDuration`

#### Disposable Objects

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

## Meadow.Foundation

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

#### `CommonType` Moved

The `CommonType` enum has moved out of the `Leds` class.

If you've previously used `CommonType` with a fully qualified name - i.e. `Meadow.Peripherals.Leds.CommonType.CommonAnode`, update it to `CommonType.CommonAnode` and add `using Meadow.Foundation.Leds`.

#### `displayColorMode` display driver parameter renamed to `colorMode`

This parameter has been renamed for simplicity and consistency. Will only impact code that explicitly assigns the ctor parameter by name.

## Tooling (Meadow.CLI, IDE Extensions, and Templates)

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

## RC-1 Bug Fixes

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

## Known Issues
* If the Deploy fails during the file transfer, you MUST reset the board before deploying again. Deploy will fail if you don't. After resetting and re-deploying the transfer should then continue where it left off. A fix is being worked on for RC2
* There is some extra logging code that shows how many bytes are being sent and received between the Meadow and Visual Studio, so we can track down a buffer overflow bug. This extra logging will be removed in RC2.
* Occasionally (hopefully rarely) you may get an error which relates to serial port/addresses already being in use. You may have to reboot your machine and meadow device to be able to free up the port/address and be able to redeploy your Meadow. If you see it and can supply us with a consistent repro, that would be very useful to squashing this bug.
* [Windows Extensions] Due to an MS API change auto-deploy when debugging does not currently work. WORK AROUND: To debug on Windows deploy your app 1st, then hit the Debug button to step through your deployed code etc. We are working on a fix for this issue for RC2. Apologies for the inconvenience.

### Meadow.OS Deploy, App Deploy/Debug Workflow

This release has been a long journey that added our final v1.0 features, and did final polishes to our APIs, however, the OS Deploy, App Deploy/Debug cycles still have some hiccups that we'll spend time stabilizing for RC-2/v1.0.
