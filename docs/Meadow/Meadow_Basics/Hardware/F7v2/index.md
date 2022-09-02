---
layout: Meadow
title: Meadow F7v2
subtitle: Version 2 of the Meadow F7 Board Series.
---

The Meadow F7v2 System-on-Module (SoM) is available in two models, based on two differing form factors:

* **Meadow F7v2 Feather Development Module** - An Adafruit Feather specification compatible design, intended for development, prototyping, and low-volume (1,000 or less) production.
* **Meadow F7v2 Core-Compute Module** -  A surface mount device (SMD) intended for high-volume and industrial production, the F7 Production also adds Ethernet and SD card capabilities.

![Rendering of the two F7v2 boards: left is the Meadow F7v2 Development Module with labeled pins for prototyping and development, right is the Core-Compute Module in a minimal rectangular footprint intended for surface mount use.](/Common_Files/Meadow_F7v2_Modules.png)

## V2 Upgrades

The F7v2 includes a number of upgrades from the previous v1 board, including:

* **64MB of Flash** - This is an upgrade from 32MB in v1, and with only 4MB or reserved system space, a whopping 60MB is now user accessible.
* **Upgraded Antenna** - We changed out the antenna with a new model that has 10x better performance. In fact, we get better WiFi performance out of the board than our iPhones!
* **Fully SMT-Compatible** - The F7v2 has hybrid castellated header/IO mounts that allow for use as both a through-hole (PTH) device, as well as a surface mount device (SMD/SMT). Additionally, there are no components on the underside, so it will solder flush without impediment.
* **I2S Sound** - Coming soon via Meadow.Core APIs, we’ve added a full set of hardware IO for inter-integrated sound, which enables both I2S microphone input, and sound output.
* **Low-power Timer Input** - Also available soon in software, F7v2 includes a pin that has a low-power timer that can count pulses even while the board is asleep!
* **Fixed Battery Voltage** - A bug in the design of v1.0 meant that the `3V3` rail could dip as low as `3.0V` when being powered by a battery via the integrated battery connector/charging circuit. We changed the power components to make sure that the full `3.3V` is available.
* **Better Buttons** - We also swapped out the buttons on the board with high-quality Wurth Elektrik buttons that have a greater surface area and a much nicer click.
* **Upgraded Silkscreen Design** - The new silk screen makes bus IO identification much easier.
* **Open Source** - We'll be open-sourcing the design soon. This will allow folks to use it with other platform technologies, or build their own board.

### Additional Core-Compute Features

The core-compute module adds additional features not available in the developer form-factor:

* **Ethernet** - The core-compute module contains an RMII interface for hooking up to an ethernet PHY, and Meadow.OS now has built-in ethernet support.
* **SD-Card IO** - A high-speed SDMMC interface is also broken out, allowing full-speed SD-Card read/writes.
* **Additional IO** - An additional I2C bus, SPI bus, and additional GPIO have been added.

## Developing with the F7v2

Developing with the F7v2 board is largely the same as with the v1 series, but with two minor differences.

### `App` Class Definition

The Meadow.Core API includes strongly-typed APIs for the pinout of the board, but in order to get the right pin definition, you'll need to modify you `App` class definition from `F7Feather` to `F7FeatherV2` as illustrated below:

```csharp
public class LEDApp : App<F7FeatherV2>
```

Then in your application, you can get strongly-typed access to the pins on the board as before. From within the app class, it's available via the `Device` class:

```csharp
var d5 = Device.CreateDigitalInputPort(Device.Pins.D05);
```

And from other classes, it's available via a singleton instance of your app:

```csharp
var d5 = Device.CreateDigitalInputPort(MeadowApp.Device.Pins.D05);
```

Note that `MeadowApp` should be the name of your application class.

### Pinout

Also note that the pinout of the device is _slightly_ different than the v1. Please refer to the following illustration for pinout information:

![Diagram of the Meadow F7v2 Development board with pins numbered and labeled with available functionality as well as interrupt groupings marked.](/Common_Files/Meadow_F7v2_Micro_Pinout.svg)
