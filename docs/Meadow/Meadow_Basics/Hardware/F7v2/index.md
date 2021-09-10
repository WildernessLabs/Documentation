---
layout: Meadow
title: Meadow F7v2
subtitle: Version 2 of the Meadow F7 Board Series.
---

Hello!

Welcome to early access of the Meadow F7v2 board. The F7 is our flagship, workhorse secure IoT module and it comes in two flavors; a developer module, designed for prototyping and low-volume product runs, and a _core-compute_ module for high-volume products:

![](/Common_Files/Meadow_F7v2_Modules.png)

We couldn't be more happy with the board, it's not only best-in-class hardware, but is truly a work of art:

![](F7v2_Dev_Medium_Cropped.jpg)

## V2 Upgrades

The F7v2 includes a number of upgrades from the previous v1 board, including:

 * **Upgraded Antenna** - We changed out the antenna with a new model that has about 10x better performance. In fact, we get better WiFi performance out of the board than our iPhones!
 * **64MB of Flash** - This is an upgrade from 32MB in v1. 2MB is reserved for the Over-the-Air updater, so 62MB is user accessible.
 * **Fully SMT-Compatible** - The F7v2 has hybrid castellated header/IO mounts that allow for use as both a through-hole (PTH) device, as well as a surface mount device (SMD/SMT).
 * **I2S Sound** - Though not exosed via APIs yet, we've added a full IO set for inter-integrated sound, which enables both I2S microphone input, and output.
 * **Low-power Timer Input** - Also not yet exposed in the Meadow.Core APIs, F7v2 includes a pin that has a low-power timer that can count pulses even while the board is asleep!
 * **Fixed Battery Voltage** - A bug in the design of v1.0 meant that the `3V3` rail could dip as low as `3.0V` when being powered by a battery via the integrated battery connector/charging cicrcuit. We changed the power components to make sure that the full `3.3V` is available.
 * **Better Buttons** - We also swapped out the buttons on the board with high-quality Wurth Elektrik buttons that have a greater surface area and a much nicer click.

### Additional Core-Compute Features

The core-compute module adds additional features not available in the developer form-factor:

* **Ethernet** - The core-compute module contains an RMII interface for hooking up to an ethernet PHY, and Meadow.OS now has built-in ethernet support.
* **SD-Card IO** - A high-speed SDMMC interface is also broken out, allowing full-speed SD-Card read/writes.
* **Additional IO** - An additional I2C bus, SPI bus, and additional GPIO have been added.

## Developing with the F7v2

Developing with the F7v2 board is largely the same as with the v1 series, but with two minor differences. 

### `App` Class Definition

The Meadow.Core API includes strongly-typed APIs for the pinout of the board, but in order to get the right pin definition, you'll need to modify you `App` class definition from `F7Micro` to `F7MicroV2` as illustrated below:

```csharp
public class LEDApp : App<F7MicroV2, LEDApp>
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

Also note that the pinout of the device is _slightly_ different than what's list in the [IO guide](/Meadow/Meadow_Basics/IO/), so please refer to the following diagram for pinout information.

![](/Common_Files/Meadow_F7_Micro_v2_Pinout.svg)

That's it! If you have any questions, don't hesitate to reach out to us!


