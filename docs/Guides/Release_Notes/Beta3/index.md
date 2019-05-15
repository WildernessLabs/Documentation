---
layout: Meadow
title: Meadow Beta 3
subtitle: Release Notes
---

# Meadow Beta 3

## New Core Features

### USB Deployment

Wahoo!! No more painful JTAG deployment, deploying your app is now a cinch via the USB deployment feature.

[explain]


### Digital Outputs and Protocols

#### [Pulse-Width-Modulation (PWM)](/Guides/Meadow_Basics/IO/Digital/PWM/)

PWM is now live! Along with it, PwmLed, RgbPwmLed, Servo Core, etc. [add links as they become available].

#### [Inter-Integrated Circuits (I2C)](/Guides/Meadow_Basics/IO/Digital/Protocols/I2C/)

The I2C protocol is now working. Along with it; [list of new Meadow.Foundation peripherals]

#### [Serial Peripheral Interface (SPI)](/Guides/Meadow_Basics/IO/Digital/Protocols/SPI/)

The SPI protocol is now working. Along with it; [list of new Meadow.Foundation peripherals]


### Network


### Analog Input



## New Meadow.Foundation Features



## Fixed Bugs

* [Pull-up and Pull-Down resistors don't work](https://github.com/WildernessLabs/Meadow_Issues/issues/6) - Fixed. You no longer need external PU/PDs, you can use the internal ones.

## Known Issues

* Meadow runtime is slow. For instance, we're currently only able to get about 30-40hz out of the `SoftPwmPort`. There's still a lot of debug code, so this will get much faster in future releases.
* [`AnalogInputPort`](https://github.com/WildernessLabs/Meadow_Issues/issues/7) readings are not correct.
* `GlitchFilterCycleCount` is not implemented in `DigitalInputPort`. This is coming soon.
* [Tasks Behave Strangely](https://github.com/WildernessLabs/Meadow_Issues/issues/2) - Workaround is to use `Thread`, as seen in the [Basic_Threading](https://github.com/WildernessLabs/Meadow_Samples/blob/master/Source/MeadowSamples/Basic_Threading/ThreadingApp.cs) sample app.
* [`Debug.Write` calls don't output to the console](https://github.com/WildernessLabs/Meadow_Issues/issues/3) - Workaround is to use `Console.Write` calls.