---
layout: Meadow
title: Meadow v1
subtitle: Release Notes
---
# v1.3.4

## OS
* Fixed issue with Azure IoT hub certificates.
* Fixed issue where invalid credentials in wifi.config.yaml could lock the board.
* Changed the way the system checks for the minimum required file set.

## Meadow.Core
* Bug fix for finding app settings file in Meadow.Linux and Meadow.Windows
* Added GetMemoryAllocationInfo and  ProcessorLoad for F7 PlatformOS
* Interface break: Refactor ISerialPort ReadAll method
* Added interfaces and enums for cellular states and data

## Meadow.Foundation

### New Drivers
* PCx857x family of digital IO expanders
* ElectroMagnetic Relay Board
* LSM6DSOX iNEMO inertial module with Machine Learning Core
* LIS3MDL digital magnetic sensor
* HC2 atmospheric sensor
* BG95-M3 GNSS driver
* 9-DOF IMU Featherwing

### New Features
* Added support for Modbus RTU server
* Updated MicroLayout class names [Interface break]
* Added LineChart to MicroLayout
* SpiCommunications now explicitly asserts the CS line on startup
* x74595 support parallel writes
* x74595 asserts chip select state at startup
* MicroGraphics Image class supports BI_BITFIELDS compression for 24bpp images

### Fixes
* Renamed BidirectionalDcMotor Clockwise and CounterClockwise methods [Interface break]
* WinForms display driver WriteBuffer fixed
* GNSS drivers updated to conform to IGnssSensor interface
* BME688 gas resistance output fixed
* TextDisplayMenu OnOff item fixed
* TextDisplayMenu item type now returned on change events
* LIS2MDL output scaling fixed
* A lot of cleanup, spelling fixes, XML comment additions, etc.

More information here: [v1.3.4 Milestone](https://github.com/WildernessLabs/Meadow.Foundation/milestone/29)

## Meadow.Cloud
*  Overhaul of log viewer and a number of other UI improvements

## Meadow.CLI
* Update dfu-util version check to check for v0.11
* Only push App.dll to the device Fixes Issue 340

## VS Extensions
* Bump to 1.3.4 to include the aforementioned Meadow.CLI changes.

## Known Issues
n/a

# v1.3

## OS

* Added limited TLS client certificate support
* Reliability improvements for OS OTA updates
* Stability and usability improvements for cell networking:
  * NetworkConnected/NetworkDisconnected events added to CellNetworkInterface
  * Support for scanning cell networks added via F7CellNetworkAdapter.Scan()
  * Exposed module IMEI and cell signal strength properties via F7CellNetworkAdapter.Imei and .Csq properties
  * Greatly improved network reconnect speed when connection is dropped
  * Fixed an issue with BG95 not turning when resetting Meadow
  * IPCP-provided DNS servers are now prioritized for use by default

## Meadow.Core

* Easily add health metrics reporting to Meadow.Cloud. To enable this, add the following to  `app.config.yaml`:

```yaml
HealthMetrics:
  Enabled: true
  Interval: 10
```

(Interval is in minutes.) Health metrics get sent to Meadow.Cloud once a network connection is available.

## Meadow.Foundation

* Sc16is7x2 - new UART expander driver
* NeoPixel Featherwing - new driver
* My7000s - improved sampling logic
* MaxBotix - improved sampling logic for serial sensors
* MicroLayout - adding ScaleFactor ti DisplayLabel
* MicroGraphics - fixed negative y out of bounds exception
* MicroGraphics - fixed index bug for 12x16 font
* SwitchingRainGauge - sample updated to to avoid D15 error
* Updated all projects to C# 10

## Meadow.Cloud

* Receive health metrics from device and update `LastHeartbeat` and `Version` in the device list
* Retrieve log and event data via Webhook and Azure Event Hubs integrations

## Meadow.CLI

* New Classic build for some customers having issues on Windows 10 and some Windows 11 machines. Please download from [here](https://github.com/WildernessLabs/Meadow.CLI/releases/tag/v1.3.0.0).
* If the runtime version is unknown (typically on brand new boards), it will force a flash erase, without prompting.
* Simplified meadow packaging with a project target (instead of folder/file) that builds and trims assemblies before creating an MPAK.

## VS Extensions

* VSCode
  * Support for Microsoft’s new 2.x C# Extension
  * Due to dropping Omnisharp support extensions should now load a bit quicker.
  * Attached devices now appear in ethe configuration list.
  * Ability to toggle between Debug and Release configurations before deploying to your Meadow.

## Meadow.Linux

* n/a

## Known Issues

* Device Sleep/Wake is known to have intermittent stability issues that we are investigating.

# v1.2

## OS

* Greatly improved reliability of cell networking
* Extended maximum low-power mode sleep time from 18 hours to 25 days
* Enhanced Ethernet driver & added support for ethernet connect after startup
* Adjusted thread priorities aiming to improve responsiveness in debugging

## Meadow.Core

* Greatly improved app startup time
* Improved latency of first interrupt
* Added app-accessible Settings to IApp
* Added `StateChanged` event to `IUpdateService`
* Bug fix in refreshing network adapter info
* Added support for Connectors
* Bug fix for incorrect scaling in `AnalogInputPort`
* Integrated cell networking support via the new `CellNetworkAdapter` class
* Added a Cloud Log Provider to send logs and events to Meadow.Cloud

## Meadow.Foundation

* New MicroLayout library - a lightweight UI framework that works with MikroGraphics
* New ME007YS ultrasonic distance sensor driver
* Fixed ST7789 display support for 320x240 displays
* Fixed GC9A01 display reset bug
* Bug fix in MicroGraphics vertical alignment

## Meadow.Cloud

* View device logs and events. The following filters are applicable in the search box: `source:log|event` `deviceId:{deviceId}`
* Added a Metadata field to the package publish flow to pass metadata to the Update Service.  [Issue 319](https://github.com/WildernessLabs/Meadow_Issues/issues/319)
* Updated the MQTT service infrastructure. Meadow.Core update required for OtA compatibility.

## Meadow.CLI

* Added a new parameter for `--metadata` during `package publish`. This metadata is passed through to the Update Service and can be used to determine which devices to update. [Issue 319](https://github.com/WildernessLabs/Meadow_Issues/issues/319)
* `package create` fix for incorrect Windows backslash: [Issue 300](https://github.com/WildernessLabs/Meadow.CLI/pull/300)

## VS Extensions

* [VS2022-Windows] The Meadow tab should now receive focus after deployment.
* [VS2022-Windows] The Meadow tab’s logs should be cleared each debugging run.
* Due to the debugging priority change in the OS, debugging should be more responsive in all the extensions.

## Meadow.Linux

* n/a

# v1.1

## OS

* Added support for the BG95 (LTE-M) and M95 (GSM) cellular modules, [view documentation](http://developer.wildernesslabs.co/Meadow/Meadow.OS/Cellular/).
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
* Minor fixes and enhancements - [details here: v1.1.0 Milestone (github.com)](https://github.com/WildernessLabs/Meadow.Foundation/milestone/26)

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

For more information about recent work on Meadow.OS, please have a look at our [Release Candidate Release Notes](../Release-Candidates/).

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
