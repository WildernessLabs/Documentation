---
layout: Meadow
sidebar_label: Meadow v2.*
title: Meadow v2.* Releases
subtitle: Release Notes
---

## Updating Instructions

* [Meadow.CLI](/Meadow/Meadow_Tools/Meadow_CLI/)
* [Meadow.OS](/Meadow/Getting_Started/Deploying_Meadow%2EOS/)

## v2.1.0.1

This is a full stack release that brings WiFi and Bluetooth capability and API improvements along with a handful of new drivers and performance enhancements.

### Meadow.OS

* The default directory for your application is now “/meadow0/”, which represents the on-board flash
* The ESP32 firmware build has been upgraded to the latest Espressif SDK (5.3.2)
* Major improvements and bug fixes in the Bluetooth stack
* Improvements in power-up logic for the EG21 cell network module

### Meadow.Core

* **BLE Start/Stop** - Added StopBluetoothServer method to IBluetoothAdapter. The Bluetooth service can now be stopped and started multiple times and has the ability for the service to be redefined (See the Bluetooth_Restart example in the Meadow.Samples repository for more information)
* **BLE Notifications** - Bluetooth now implements notifications on characteristics
* **BLE Company UUID** - Bluetooth now accepts setting the company UUID (CompanyId) when constructing a service definition - This will default to the debug company UUID (0xffff) on the ESP32 if omitted
* **Motor Upgrades** - Refactored IMotor, IPositionalMotor and IVariableSpeedMotor interfaces
* **Persistent MQTT** - MeadowCloudConnection now uses a persistent MQTT connection
* **New Sensor Interface** - Added `IStateOfCharge` interface

### Meadow.Foundation

* Added `Arducam` Mini 2MP driver
* Added `Max1704x` driver
* Added `WaveShare 7.5” v2 ePaper` display driver with 4-color grey-scale
* `FT232` SPI fixes
* TFT SPI color display driver performance and memory optimizations
* `APDS9960` gesture fixes
* `StepperMotor` driver improvements
* `MicroLayout` Circle layout fix
* `SwitchingAnemometer` speed calculation improvements

## v2.0.1

This is a Nuget only release (no new OS binaries) that fixes a few high priority driver bugs.

### Meadow.Foundation

* Bug fixes for `RS485` regression.
* Fixed `BME68x` reset.
* Improved `BME68x` calibration.
* Exposed 2nd temperature sensor on `ProjectLab`.
* Added StepperOnline `BLD510B` controller and `F55B150_24GL_30S` motor
* Rolled back System.IO.Ports references to 8.0.0

## v2.0.0.3

Meadow.OS v2.0 - **the reliability release**, is here, and while only an incremental upgrade from v1.15, it’s the culmination of nearly two years of work of stability fixes and polishing to make Meadow an ultra-reliable, full-featured, IoT OS that you can rely on for your critical applications. In setting out goals for Meadow.OS v2.0, we defined our reliability metrics as having three critical components:

* **Stability** - The OS should run reliably for months at a time without a failure that would require a reset to remain operationally viable. As such, we defined any OS failures that cause a reset as aberrative priority-0 issues.
* **Recoverability** - If the OS or user application takes down the OS or freezes it, the system should reliably restart and recover without manual intervention.
* **Reportability** - On app or OS failure, the failure will be logged and sent to Meadow.Cloud or available locally for review.


Along the way, any issues that were found that didn’t meet these requirements were marked as priority-0 issues and Meadow.OS v2.0 represents the final clearing of all of them!

We’re super excited about this major milestone for Meadow.OS and extremely thankful for all of our customers with real-world applications in the field that worked with us to identify, diagnose, and fix these issues to make this the most reliable Meadow.OS yet.

In addition to being a hugely important milepost in the development of Meadow, the following changes and improvements are also to be found in this release:


### Meadow.OS

As part of the 2.0 effort, the OS and the entire Meadow platform has gone through more extensive and exhaustive planning and testing than any of our previous releases, and has been running our test devices and harnesses with perfect uptime for our model applications. As part of this release, several minor issues were resolved in OS and App OTA, as well as in USB debugging initialization.

Finally, the bootloader no longer ‘flicks’ any F7 LED pins as indicator of an update in progress as those pins are user I/O in some Meadow form factors. 


### Meadow.Core

* Added `IDigitalSignalAnalyzer` interface.
* Added Changed event to `IRheostat` interface.
* Bug fix - external storage insert and removal events.
* Bug fix - internal resistors in Meadow.Linux.
* Bug fix - ethernet adapter link status when the cable/link is already plugged in.
* Bug fix - health monitoring cases where some OS failures and .NET exceptions were not being reported.


### Meadow.Foundation

* Added `Potentiometer` class.
* Added SoftDigitalSignalAnalyzer and `F7DigitalSignalAnalyzer` classes.
* Added reset to `MCP2515`.
* Added Keller pressure transducer driver.
* Added `Voltaic V10x` battery controller driver.
* Added Hall-effect flow sensor drivers.
* Major refactor of `Y4000` driver.
* Made `MicroLayout` `Label` control clickable.
* Bug fixes for events in `RotaryEncoder`.

