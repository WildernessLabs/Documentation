---
layout: Meadow
sidebar_label: Meadow v1.*
title: Meadow v1.* Releases
subtitle: Release Notes
---

## v1.9.0

This is a huge update for Meadow! Highlights include:

 * **Overall Stability** - With the last few releases we've knocked out nearly ever OS and networking priority-zero issue. In many cases, Meadow.OS should now be stable for weeks or months without issue.
 * **OS Multitasking Stability** - We've implemented the `Round-Robin` thread scheduler which brings a massive upgrade to how the OS manages and switches between threads and brings a new level of stability around `Thread` and `Task` operations.
 * **SPI DMA** -  We’ve added SPI DMA which reduces CPU load when communicating with SPI devices and can lead to a 30% increase in drawing performance with SPI displays!
 * **Unified Meadow.Desktop** - Meadow.Desktop got a massive simplification by unifying the launcher between Windows/macOS/Linux, meaning you now only need a single application that will run in any dekstop context for full graphics simulation.
 * **Meadow.CLI v2** - THe Meadow.CLI got a huge upgrade in its codebase with a complete re-write focused on stability, consistency, and ease-of-use.
 
**Note** - starting with v1.9.0.0 and CLI v2.0, you’ll need to [create a free Wilderness Labs account](https://identity.wildernesslabs.co/signin/register) to download new versions of the Meadow OS.

### Meadow.OS

* **Round-Robin** - .NET threads are now using the round-robin OS scheduler. This brings a much more advanced task scheduling paradigm to embedded and that better matches traditional .NET execution behavior and resolve issues of apps “livelocking” because of a tight loop preventing progress under the First-In, First-Out (FIFO) scheduler.
* **SPI DMA** - SPI DMA has been enabled for all SPI data transfers. Use of it should be transparent, providing approximately 3x throughput speed for SPI peripheral devices.
* **Coprocessor Threading Stability** - Changes to the threading on the coprocessor were made, resulting in greater stability for network requests
* **Deep OS Internal Stability Fixes** - Several low-level fixes & improvements that provide more stability throughout the entire OS stack.

### Meadow.Core

* Support has been added for F7 multi-platform targeting.  One app assembly can now contain IApp instances for multiple F7 hardware targets. (add link to docs).
* `IPixelDisplayProvider` interface added for Meadow.Desktop platforms.
* SensorService now auto-registers any `ISleepAwarePeripherals` it knows about.
* Improvements to Core interrupt handling in F7 platforms.
* Interrupts events changed from containing a DateTime to a system tick (for performance reasons).
* OtA Downloads now report progress via an event.
* Added “reason” to network disconnection events on F7 platforms.
* Added preliminary support for Raspberry Pi 5.

### Meadow.Foundation

* FT232H/FTDI Driver refactored to support multiple devices at one time and to use the same driver (FT2xxx) for all modes.
* Improved partial update logic in MicroGraphics and TftSpi display drivers.
* BME688 gas resistance fix. Thanks to community member `Laszlo` for the fix.
* SCD40 events fix.

#### Breaking changes

* Renamed `IGraphicsDisplay` to `IPixelDisplay` and moved to `Meadow.Contracts` and changed namespace to `Meadow.Displays `.
* Moved `IPixelBuffer` to `Meadow.Contracts` and namespace changed to `Meadow.Displays`.

### Meadow.Cloud

* Bug fix for Azure Event Grid data serialization
* For over-the-air updates, we exposed a new event, `OnUpdateProgress` that is triggered periodically showing the update’s download progress expressed in bytes.

### Meadow.Desktop

* We have added support for `Meadow.Desktop` as a target. This allows a single app to target Windows, Mac or desktop Linux with auto-platform detection and simulated `IPixelDisplay`. New templates are coming soon to make `Meadow.Desktop` app creation simple.

### IoT Accelerators

* Our GNSS Tracker got a big update with its v2 hardware iteration (which is packed with more sensors than its predecessor), including a revamped demo application displaying accurate atmospheric sensor data along with battery and solar input voltage.

### Meadow.Tooling

* [CLI v2.0](https://developer.wildernesslabs.co/Meadow/Meadow_Tools/Meadow_CLI/) has shipped! This is a massive rework of the command line tool used to communicate with Meadow devices and manage firmware. Note, with this new release, you will need to [create a free Wilderness Labs account](https://identity.wildernesslabs.co/signin/register) and sign in before downloading firmware updates.

## v1.8.0

### Meadow.OS & Meadow.Core

* Resolved instability issues when using multiple TLS connections simultaneously, closing issues [#355](https://github.com/WildernessLabs/Meadow_Issues/issues/355) and [#380](https://github.com/WildernessLabs/Meadow_Issues/issues/380)
* Meadow.Units added static `Zero` properties to `Angle`, `Power`, `Resistance`, and `Voltage`
* Meadow.Units added construction extensions to `Frequency`, `Resistance`, `Length` and `Temperature`

### Meadow.Foundation

### New Drivers

* New [Useful Sensor’s Tiny Code Reader QR](https://www.nuget.org/packages/Meadow.Foundation.Sensors.Cameras.UsefulSensors.TinyCodeReader) code scanner driver
* Added methods to to draw vertical and horizontal gradients to `MicroGraphics`
* Added method to draw buffers with a transparency (ignore) color
* Event cleanup on environmental drivers

## v1.7.0

### Meadow.OS & Meadow.Core

* `System.Debug.WriteLine` is now functional and no longer crashes the device
* New property added to Meadow.Core NetworkAdapters: `DnsAddresses`
* Added SensorService, read more [here](https://blog.wildernesslabs.co/using-meadows-sensorservice-to-optimize-sensor-reads-into-a-single-thread/).
* Several low-level fixes & improvements

### Meadow.Foundation

#### New Drivers

* New [OLED 128x64 Featherwing](https://www.nuget.org/packages/Meadow.Foundation.FeatherWings.OLED128x64Wing)
* New Useful Sensor’s [`PersonSensor`](https://www.nuget.org/packages/Meadow.Foundation.Sensors.PersonSensor)
* New Infrared camera [`Amg8833`](https://www.nuget.org/packages/Meadow.Foundation.Sensors.Camera.Amg8833)
* New [`AsciiConsole` display](https://www.nuget.org/packages/Meadow.Foundation.Displays.AsciiConsole)
* New [`DFRobot Gravity Dissolved Oxygen` sensor](https://www.nuget.org/packages/Meadow.Foundation.Sensors.Environmental.DFRobotGravityDOMeter) driver
* Mac keyboard support added to keyboard driver
* `SH1107` display driver cleanup and fixes
* Improved relay API and contracts
* General cleanup of sensor contracts 
* General cleanup and memory optimizations

### Breaking changes

* Moved `Color` struct to `Meadow.Contracts` and changed namespace to `Meadow`
* MicroLayout - Property `Visible` on all controls has been renamed to `IsVisible`
* MicroLayout - Property `Filled` on Box has been renamed to `IsFilled`

### Meadow.Cloud

* Added new integration for Azure Event Grid

## v1.6.0

### Meadow.OS

* Resolved a memory leak that occurs in common network operations over Wifi. Improves device reliability when using WiFi.
* Various minor fixes and improvements

### Meadow.Core

* Added support for high-speed ADC calls for F7 platform
* Added several interfaces for motors: `IMotor`, `IVariableSpeedMotor`, `IPositionalMotor` and `IStepperMotor`
* Added `IDissolvedOxygenSensor` interface
* Added SensorService
* Refactor and clean-up of `Updated` event for `ISamplingSensor<T>` implementations

### Meadow.Foundation

#### New Drivers

* `StepDirMotor` and CwCcwMotor stepper motors
* Atlas Scientific Gravity Dissolved Oxygen sensor

#### Fixes/Updates

* New composite driver pattern improves authoring drivers that implement multiple sensor contracts
* Improved behavior of serial distance sensor drivers for single reads and sampling

## v1.5.0

### Meadow.OS

* Fixed an issue where the TLS subsystem (mbedTLS) was racing on initialization, generating intermittent issues with connecting to HTTPS endpoints
* Upgraded external flash driver. This resolves issues with intermittent hanging after a software reset, which affected Meadow error recovery

### Meadow.Core

* Added Meadow.Core API support for disabling server certificate validation for TLS (HTTPS) connections using MeadowOS.SetServerCertificateValidationMode()
* Clean up and performance improvements in F7 serial ports.
* Added F7 os-level protection around mq operations
* IPin extensions moved up in namespace to improve discoverability
* Added SerialMessagePort convenience methods to appropriate Connectors

### Meadow.Foundation

#### New Drivers

* A02YYUW serial distance sensor

#### New Features

* Added IDisposable to all appropriate drivers

#### Fixes/Improvements

* MicroLayout chart layout improvements
* MicroGraphics fix exception when calling DrawImage
* Add sensor interfaces to BMI270
* Improved null reference checking
* WinForms Display Screen updated and improved, now a movable window showing on the center of the screen when running, and buffer boundaries fixed.

### Meadow.Cloud
* Users can now create, edit, and manage API Keys to access search and command endpoints.

### Meadow.CLI

#### V1 1.5.0
  * Improve dependency filter for App.dll
  * Do a directory existing check before we check for the internet connection

#### V2 Alpha.4
  * Trimming Enabled
  * Fixed an issue where if device.Runtime didn’t have a corresponding local directory, it would break `meadow app deploy`


## v1.4.0

### Meadow.OS
* Fixed stability issues when using more than 4 connections on WiFi (https://github.com/WildernessLabs/Meadow_Issues/issues/347)
* Fixed a minor issue with processing a malformed `wifi.config.yaml`
* The default gateway is now added to the list of DNS servers on WiFi

### Meadow.Core

* Added `IRheostat` and `IPotentiometer` interfaces
* Bug fix for Meadow.Windows `GetPortNames`
* GPIOs are initialized to inputs with no resistor on Core initialization

### Meadow.Units

* New digital storage unit
* New Apparent Power unit
* New Reactive Energy unit
* New Reactive Power unit
* Cleanup and typo fixes 

### Meadow.Foundation

#### New Drivers

* Mcp4xxx Potentiometers and Rheostats
* Grove 4-Channel SPDT Relay
* mikroBUS SPI 4-20mA receiver click boards

#### New Features

* Added library to support M-Bus (Meter Bus)
* Project Lab now lazy-loads sensor drivers

#### Fixes/Improvements

* MicroLayout `DisplayScreen` refresh bug fix
* MicroGraphics improved circle drawing accuracy
* New `Blend` extension method for `Color`
* Improved nullable checks and null validation
* A lot of cleanup - thanks Engunneer!

### Meadow.Cloud

Public Beta Launch: https://www.meadowcloud.co/

### Meadow.CLI

* V2 Alpha.1
  * Allow sequential flashing of devices in bootloader mode. 
  * `--verbose` should now work across commands.
  * Duplicate logging removed from `meadow listen`
  * Color-coded logging (more to come)

## v1.3.4

### Meadow.OS
* Fixed issue with Azure IoT hub certificates.
* Fixed issue where invalid credentials in wifi.config.yaml could lock the board.
* Changed the way the system checks for the minimum required file set.

### Meadow.Core
* Bug fix for finding app settings file in Meadow.Linux and Meadow.Windows
* Added `GetMemoryAllocationInfo` and `ProcessorLoad` for F7 `PlatformOS`
* Interface break: Refactor `ISerialPort` `ReadAll` method
* Added interfaces and enums for cellular states and data

### Meadow.Foundation

#### New Drivers
* PCx857x family of digital IO expanders
* ElectroMagnetic Relay Board
* LSM6DSOX iNEMO inertial module with Machine Learning Core
* LIS3MDL digital magnetic sensor
* HC2 atmospheric sensor
* BG95-M3 GNSS driver
* 9-DOF IMU Featherwing

#### New Features
* Added support for Modbus RTU server
* Updated MicroLayout class names [Interface break]
* Added `LineChart` to MicroLayout
* `SpiCommunications` now explicitly asserts the CS line on startup
* x74595 support parallel writes
* x74595 asserts chip select state at startup
* MicroGraphics Image class supports BI_BITFIELDS compression for 24bpp images

#### Fixes
* Renamed `BidirectionalDcMotor` `Clockwise` and `CounterClockwise` methods [Interface break]
* `WinForms` display driver `WriteBuffer` fixed
* GNSS drivers updated to conform to `IGnssSensor` interface
* BME688 gas resistance output fixed
* `TextDisplayMenu` `OnOff` item fixed
* `TextDisplayMenu` item type now returned on change events
* LIS2MDL output scaling fixed
* A lot of cleanup, spelling fixes, XML comment additions, etc.

More information here: [v1.3.4 Milestone](https://github.com/WildernessLabs/Meadow.Foundation/milestone/29)

### Meadow.Cloud
*  Overhaul of log viewer and a number of other UI improvements

### Meadow.CLI
* Update dfu-util version check to check for v0.11
* Only push App.dll to the device Fixes Issue 340

### VS Extensions
* Bump to 1.3.4 to include the aforementioned Meadow.CLI changes.

## v1.3

### Meadow.OS
* Added limited TLS client certificate support
* Reliability improvements for OS OTA updates
* Stability and usability improvements for cell networking:
  * `NetworkConnected`/`NetworkDisconnected` events added to `CellNetworkInterface`
  * Support for scanning cell networks added via `F7CellNetworkAdapter.Scan()`
  * Exposed module IMEI and cell signal strength properties via `F7CellNetworkAdapter.Imei` and `.Csq` properties
  * Greatly improved network reconnect speed when connection is dropped
  * Fixed an issue with BG95 not turning when resetting Meadow
  * IPCP-provided DNS servers are now prioritized for use by default

### Meadow.Core
* Easily add health metrics reporting to Meadow.Cloud. To enable this, add the following to  `app.config.yaml`:  

```yaml
HealthMetrics:
  Enabled: true
  Interval: 10
```

(Interval is in minutes.) Health metrics get sent to Meadow.Cloud once a network connection is available.

### Meadow.Foundation
* Sc16is7x2 - new UART expander driver
* NeoPixel Featherwing - new driver
* My7000s - improved sampling logic
* MaxBotix - improved sampling logic for serial sensors
* MicroLayout - adding `ScaleFactor` to `DisplayLabel`
* MicroGraphics - fixed negative Y out of bounds exception
* MicroGraphics - fixed index bug for 12x16 font
* SwitchingRainGauge - sample updated to to avoid D15 error
* Updated all projects to C## 10

### Meadow.Cloud
* Receive health metrics from device and update `LastHeartbeat` and `Version` in the device list
* Retrieve log and event data via Webhook and Azure Event Hubs integrations

### Meadow.CLI
* New Classic build for some customers having issues on Windows 10 and some Windows 11 machines. Please download from [here](https://github.com/WildernessLabs/Meadow.CLI/releases/tag/v1.3.0.0). 
* If the runtime version is unknown (typically on brand new boards), it will force a flash erase, without prompting.
* Simplified meadow packaging with a project target (instead of folder/file) that builds and trims assemblies before creating an MPAK.

### VS Extensions
* VSCode
  * Support for Microsoft's new 2.x C## Extension
  * Due to dropping OmniSharp support extensions should now load a bit quicker.
  * Attached devices now appear in the configuration list.
  * Ability to toggle between Debug and Release configurations before deploying to your Meadow.

### Known Issues
* Device Sleep/Wake is known to have intermittent stability issues that we are investigating.

## v1.2

### Meadow.OS
* Greatly improved reliability of cell networking
* Extended maximum low-power mode sleep time from 18 hours to 25 days
* Enhanced Ethernet driver & added support for ethernet connect after startup
* Adjusted thread priorities aiming to improve responsiveness in debugging

### Meadow.Core
* Greatly improved app startup time
* Improved latency of first interrupt
* Added app-accessible Settings to `IApp`
* Added `StateChanged` event to `IUpdateService`
* Bug fix in refreshing network adapter info
* Added support for Connectors
* Bug fix for incorrect scaling in `AnalogInputPort`
* Integrated cell networking support via the new `CellNetworkAdapter` class
* Added a Cloud Log Provider to send logs and events to Meadow.Cloud

### Meadow.Foundation
* New MicroLayout library - a lightweight UI framework that works with MikroGraphics
* New ME007YS ultrasonic distance sensor driver
* Fixed ST7789 display support for 320x240 displays
* Fixed GC9A01 display reset bug
* Bug fix in MicroGraphics vertical alignment

### Meadow.Cloud
* View device logs and events. The following filters are applicable in the search box: `source:log|event` `deviceId:{deviceId}`
* Added a Metadata field to the package publish flow to pass metadata to the Update Service.  [Issue 319](https://github.com/WildernessLabs/Meadow_Issues/issues/319)
* Updated the MQTT service infrastructure. Meadow.Core update required for OtA compatibility.

### Meadow.CLI
* Added a new parameter for `--metadata` during `package publish`. This metadata is passed through to the Update Service and can be used to determine which devices to update. [Issue 319](https://github.com/WildernessLabs/Meadow_Issues/issues/319)
* `package create` fix for incorrect Windows backslash: [Issue 300](https://github.com/WildernessLabs/Meadow.CLI/pull/300)

### VS Extensions
* [VS2022-Windows] The Meadow tab should now receive focus after deployment.
* [VS2022-Windows] The Meadow tab’s logs should be cleared each debugging run.
* Due to the debugging priority change in the OS, debugging should be more responsive in all the extensions.

## v1.1

### Meadow.OS
* Added support for the BG95 (LTE-M) and M95 (GSM) cellular modules, [view documentation](http://developer.wildernesslabs.co/Meadow/Meadow.OS/Cellular/).
* Improved reliability of cell networking
* Resolved issue where using a static IP address and Wi-fi auto-connect together would not work as expected

### Meadow.Core
* Added Meadow.LogProviders library, which includes Console, File and UDP logging
* Bug fix in F7 internal resistors (resistors inverted)

### Meadow.Foundation
* New driver: NeoPixel driver
* New driver: Mcp3xxx family of analog to digital converters
* New driver: Current Transducer
* New driver: microBUS AC Current current sensor driver
* New driver: microBUS LEM current sensor driver
* New driver: Pca9671 IO expander driver
* Minor fixes and enhancements - [details here: v1.1.0 Milestone (github.com)](https://github.com/WildernessLabs/Meadow.Foundation/milestone/26)

### Meadow.Cloud
* Multi-org support and ability to invite users

### Meadow.CLI
* Added support for `app.build.yaml` to allow NoLink per-assembly
* Fix for `meadow list ports` command on Linux and therefore VSCode

## v1.0.2

### Meadow.OS
* Minor OtA enhancements

### Meadow.Core
* `ISerialPort` now follows the Meadow controller pattern
* Minor improvements to interrupt handling
* `UpdateService` catches exceptions while unzipping MPAKs and raises an event

### Meadow.Foundation
* `TftSpi` - Fixed rotation bug for the ST7789 display

### Meadow.Cloud
* Ability to manage collections and publish to specific collections

### Meadow.CLI
* Meadow.Cloud compatibility changes for creating packages and listing collections

### Meadow.Linux
* Added support for processor temperature

## v1.0 

The culmination of six years of work and 1.5MM lines of code, the Meadow v1.0 release includes all of the features found in the previous RC-3.1 release and adds final touches for OtA updates reliability and security.

For more information about recent work on Meadow.OS, please have a look at our [Release Candidate Release Notes](/Meadow/Release_Notes/Release-Candidates/).

### Updating to v1.0

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