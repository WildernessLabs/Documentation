---
layout: Meadow
title: Meadow Beta 3
subtitle: Release Notes
---

## Beta 3.7

Though this is a point release, it's actually cut from the `b4.0` work, and represents a significant Meadow upgrade. It continues the API stabilization and bug fixes started in `b3.6`, but also includes major performance increases, an up-to-date Mono runtime (with pre-cursor support for Core 3.x), and a pile of new Meadow.Foundation drivers that were unlocked by both the performance improvements and IO bug fixes.

### Performance Improvements

We enabled various low-level caching mechanisms available on the F7 chip and fixed some long-outstanding memory bugs that were preventing their use up until this point. With these fixes and optimizations, we're able to realize one to two magnitudes of performance increases across various aspects of execution. The most significant being in IO access, which saw an `8,600%` increase since `b3.6`. However, we also saw significant improvement in general execution, as well. The following charts were created from the [Meadow Performance Benchmarking application](https://github.com/WildernessLabs/Meadow_Performance_Benchmarks) readme data:

<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR6LF3jduievLwj3H_JNeO_yFrX3NewR8bAijKCfVsKTOTRuyfdNzvpPdNN0MWrP5-eaAxaRVFu0rn3/pubchart?oid=2104450466&amp;format=interactive"></iframe>
 
<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR6LF3jduievLwj3H_JNeO_yFrX3NewR8bAijKCfVsKTOTRuyfdNzvpPdNN0MWrP5-eaAxaRVFu0rn3/pubchart?oid=103861413&amp;format=interactive"></iframe>


<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR6LF3jduievLwj3H_JNeO_yFrX3NewR8bAijKCfVsKTOTRuyfdNzvpPdNN0MWrP5-eaAxaRVFu0rn3/pubchart?oid=2010951639&amp;format=interactive"></iframe>

<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR6LF3jduievLwj3H_JNeO_yFrX3NewR8bAijKCfVsKTOTRuyfdNzvpPdNN0MWrP5-eaAxaRVFu0rn3/pubchart?oid=867053354&amp;format=interactive"></iframe>

**Overall, since `b3.5`, IO writes have gotten `318x` faster. And since the last beta, general operation execution speed has gotten `4-8x` faster.** 

These improvements made several additional Meadow.Foundation drivers practical, now that execution speed can handle them. 

### CLI/Deployment Stabilization

[fixed HCOM thread stuff]

### Bug Fixes

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
* [#57 - Console.WriteLine output disappearing](https://github.com/WildernessLabs/Meadow_Issues/issues/57) - Fixed. We re-architected and re-implemted how the output gets passed from Meadow to the CLI, and it's much cleaner, simpler, and hopefully, works better.
* [#58 - Can't deploy due to HCOM thread starvation](https://github.com/WildernessLabs/Meadow_Issues/issues/58) - At least partially fixed. This issue cropped up for folks on a second deploy, where they were unable to deploy or even make CLI calls. The thread that listens for the CLI wasn't responding. The workaround was to reset the board and then immediately make a call to recreate the file system via the CLI. It seems to be more or less fixed now, though we have some additional improvements on the plate for the future.

#### Known Issues

With that said, there are still three bugs that we were hoping to squish, but did not:

* [#59 - Multiple inputs trigger duplicate/incorrect interrupts](https://github.com/WildernessLabs/Meadow_Issues/issues/59)
* [#29 - Pin D04 as Digital Output is not responsive when pin D03 is setup as PWM](https://github.com/WildernessLabs/Meadow_Issues/issues/29)
* [#37 - Threading and event callback lockup ](https://github.com/WildernessLabs/Meadow_Issues/issues/37)

### Meadow.Foundation

This is a big update, there are numerous improvements and fixes across published drivers. 

#### New Peripheral Drivers

As well, we've published 13 new drivers via NuGet:

* [ICs.EEPROM.AT24C](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.EEPROM.At24Cxx.html)
* [ICs.IOExpanders.x74595](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.x74595.html)
* [RTCs.Ds323x](/docs/api/Meadow.Foundation/Meadow.Foundation.RTCs.Ds323x.html)
* [Sensors.Atmospheric.Bmp085](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bmp085.html)
* [Sensors.Atmospheric.Bmp180](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bmp180.html)
* [Sensors.Atmospheric.Dht10](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Dht10.html)
* [Sensors.Atmospheric.Dht12](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Dht12.html)
* [Sensors.Atmospheric.Ms5611](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Ms5611.html)
* [Sensors.Environmental.Ags01Db](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Ags01Db.html)
* [Sensors.Light.Bh1745](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Bh1745.html)
* [Sensors.Light.Bh1750](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Bh1750.html)
* [Sensors.Light.Temt6000](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Temt6000.html)
* [Sensors.Motion.ADXL362](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl362.html)
* [Sensors.Motion.Hcsens0040](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Hcsens0040.html)

## Beta 3.6

This release is focused on quality and stabilization. It's mostly bug fixes, API stabilization, and new drivers based on that work. This is also just the first part of this work. We have a number of additional bug fixes that were originally due for b3.6, but there are so many good things already in this, we decided not to wait until they were all in and instead break it up into multiple releases, so there will likely be a b3.7 release soon as well.

### Bug Fixes

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

#### Changes

We fixed the following drivers:

* `PwmLed` - Pulse now works without blinking.
* `RgbPwmLed` - Pulse and colors now work without blinking. Also, we fixed it to work with common anode LEDs, so it now works with the onboard LED.
* `PushButton` - Resistor stuff now works. 

#### New Peripheral Drivers

This is a big update, there are numerous improvements and fixes across published drivers. 

As well, we've published 14 new drivers via NuGet:
* [PCD8544 LCD display controller](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Pcd8544.html)
* [MAX7219 led display controller](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Max7219.html)
* [TM1637 led display controller](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tm1637.html)
* [ULN2003 stepper motor controller](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.Stepper.Uln2003.html)
* [HIH6130 I2C temperature and humidity sensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Hih6130.html)
* [HTU21D I2C temperature and humidity sensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Htu21d.html)
* [SI70xx I2C temperature and humidity sensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Si70xx.html)
* [ALS-PT19-315C light sensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Alspt19315C.html)
* [ADXL335 Analog triple axis, +/-3g accelerometer](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl335.html)
* [ADXL337 Analog triple axis, +/-3g accelerometer](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl337.html)
* [ADXL345 I2C triple axis accelerometer, +/-16g accelerometer](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl345.html)
* [ADXL377 Analog triple axis, +/-200g accelerometer](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl377.html)
* [BNO055 I2C 9-Axis absolute orientation sensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Bno055.html)
* [TMP102 I2C temperature sensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Tmp102.html)

### Meadow.CLI Fixes, Updates, and Open-Sourcing

Most of the Meadow.CLI changes involve more complete information being returned by Meadow. Previously, Meadow only returned text strings. Now it returns more structured information and is more stable. Some of these changes will become important in future releases. One new command was added, `RenewFileSys`. This command recreates a new, empty file system.

#### Open Sourced

Also, we open-sourced the [Meadow.CLI](https://github.com/WildernessLabs/Meadow.CLI) code. Some of the code is ugly. We know. :)

### Samples and Documentation 
We've updated and standardized all of the sample projects in Meadow.Foundation to match the latest template. And we've invested heavily in our docs, you'll notice we've added details and wiring diagrams for most of our peripheral docs.

### Updating

You'll need to flash new Meadow.OS binaries to your device, upgrade your IDE extension(s), and if you use the Meadow.CLI, you'll also need to download and use the latest version of that as well. All files can be found on the [downloads](/Meadow/Getting_Started/Downloads/) page.

## Beta 3.5

This is quite a big release with new features, including UART, and a major overhaul to Meadow.Foundation. We also launched a new developer site and added docs for Meadow.CLI.

### Serial/UART

Meadow now has Serial/UART support! Check out the new [UART guide](/Meadow/Meadow_Basics/IO/Digital/Protocols/UART/) for all the details!

### Better Digital Protocol Errs

As part of the Serial work, we also improved error messaging across all the digital protocols (I2C, SPI, UART). We now get an actual linux error number back when things go wrong. Those error numbers still need to be looked up online to make sense of them, but before we were only getting `-1` when something wrong. There's still work to be done here, though. We plan on recreating common failures, mapping their errors, and generally trying to provide better guidance.

### I2C Speed Setting

You can now set the speed of the I2C bus. Somehow we missed this when we launched the I2C feature.

### Meadow.CLI Docs

We've published a [guide for the Meadow.CLI (Command Line Interface)](/Meadow/Meadow_Basics/Meadow_CLI/).

### Meadow.Foundation

#### `Read()`, `StartUpdating()`, and `StopUpdating` Sensor Pattern

Meadow.Foundation got a major sensor overhaul for b3.5, including the new `Read()`, `StartUpdating()`, and `StopUpdating()` pattern for sensor reads. We also published a new [Working with Sensors in Meadow.Foundation](/Meadow/Meadow.Foundation/Working_with_Sensors/) guide that is recommended reading, and explains the new pattern.

#### Display Updates

We've added new features to `GraphicsLibrary`:
- two new large pixel fonts: 12x16 and a 12x20
- new `Rotation` property allows screen rotation on any display (even if the driver doesn't support it directly)
- smarter drawing calls, allows more optimizations to be performed by the display driver

SPI display driver performance:
- drivers share a buffer with SPI bus under-the-hood, this reduces memory usage and should help performance
- drivers now caches color values to reduce conversions from 24bit color to display-specific values
- automatic partial screen updates (when possible) to reduce drawing time

Better display support:
- fixes to improve display support across several drivers including support for the 135x240 varient of the ST7789 display
- re-write of the ePaper display drivers to expand supported displays and make it easier to identify the correct driver

### New Developer Site

You're looking at it! We took our beta-developer site live, with the hot new redesign, and of course, Meadow docs! The whole site has been redesigned, including the API docs, which also got a major information architecture overhaul.

### Updating

To use this new beta, you'll need to reflash your board with the [latest Meadow.OS binaries](https://www.wildernesslabs.co/downloads?f=/Meadow_Beta/MeadowOS.zip), as well as update your IDE extensions.

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

#### ST7789 OLED Display Meadow.Foundation Driver

Along with the configuration options, we've also released a [Meadow.Foundation driver for the state ST7789 OLED display](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.ST7789.html) included in the Hack Kit Pro:

![](ST7789_OLED.jpg)

 
### Visual Studio IDE Extensions Open-Sourced

We've open sourced the Visual Studio Meadow extensions! We're slowly working towards open sourcing all of the Meadow tooling, but we need to clean a lot of it up first, so this is the first step.

You can find the source code in the following repos:

 * [VS Windows Meadow Extension Repo](https://github.com/WildernessLabs/VS_Win_Meadow_Extension) - **Note**: this will be opened by October 28th, 2019 @ 6p PT. We're cleaning code.
 * [VS Mac Meadow Extension Repo](https://github.com/WildernessLabs/VS_Mac_Meadow_Extension)

### Meadow.CLI and Visual Studio Extension Enhancements

We've also made some updates to the Meadow.CLI to enable the IDE extensions to check for updates to files already deployed on the Meadow device. 

#### Meadow.CLI Updates

There is a new command, `--ListFilesAndCrcs`, that lists files as well as the [CRC values](https://en.wikipedia.org/wiki/Cyclic_redundancy_check) for each of the files.

#### IDE Extension Enhancements

With the CLI returning CRC values, the IDE extensions now check to see if any files need updating when deploying. This solves an issue where if a dll such as Meadow.Foundation.dll had already been deployed to the device, and a newer version existed in the project, it wouldn't get updated. 

### Updating

To use this new beta, you'll need to reflash your board with the [latest Meadow.OS binaries](https://www.wildernesslabs.co/downloads?f=/Meadow_Beta/MeadowOS.zip), as well as update your IDE extensions.

## Beta 3.3

This is a small release with some sundry fixes:

* **Multiple PWMs** - We fixed a bug where only one or two PWM channels would be active at one time. With this bug fix, you will now have full multi-PWM access, enabling things like the onboard LED to do full color spectrum.
* **Analog IObservable** - These now work. They actually worked all along, but our sample was using `Debug.WriteLine()` which doesn't currently work (`Console.WriteLine()` is fine).
* **VS Extension Updates** - We've made some sundry fixes to the Meadow project templates. Meadow.Foundation is now linked by default, and **File** > **New** > **Meadow App** now creates an app that walks the color hue spectrum on the onboard LED.

To use this new beta, you'll need to reflash your board with the [latest Meadow.OS binaries](https://www.wildernesslabs.co/downloads?f=/Meadow_Beta/MeadowOS.zip), as well as update your IDE extensions.

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

### Basic Analog Input is Up

We got basic [analog](/Meadow/Meadow_Basics/IO/Analog/) input ports working on pins `A0` through `A3`. To read an analog input value, create an [`AnalogInputPort`](/docs/api/Meadow/Meadow.Hardware.AnalogInputPort.html) on one of those pins and call the [`Read()`](/docs/api/Meadow/Meadow.Hardware.AnalogInputPort.html#Meadow_Hardware_AnalogInputPort_Read_System_Int32_System_Int32_) method. 

Note that advanced `IObservable` and events do not work at this time.

To use analog inputs, make sure you update the `Meadow.Core` nuget packages in your projects.

### Debug Output on Visual Studio for Windows

`Console.WriteLine()` calls are now being forwarded to a Meadow output window in Visual Studio on Windows, enabling basic debug output. Make sure to upgrade your Meadow Visual Studio extension to get support.

### Meadow.CLI Updates

In order to be compatible with the file system changes, the `Meadow.CLI` has also been updated. Make sure download and use the [new binaries](https://www.wildernesslabs.co/downloads?f=/Meadow_CLI/Latest/MeadowCLI.zip).

## Beta 3.1

### SPI

We got [SPI](/Meadow/Meadow_Basics/IO/Digital/Protocols/SPI/) validated and merged. We’re excited to get this out, as we know that several of you are working on integrations that require SPI. To use it, you’ll need to flash your Meadow board with the [latest OS firmware binaries](https://www.wildernesslabs.co/downloads?f=/Meadow_Beta/MeadowOS.zip).

### Visual Studio Extension

Our project template is now included enabling the creation of new Meadow Apps within Visual Studio, [check out the update](/Meadow/Getting_Started/Hello_World/). Debugging remains unavailable, but the console app gracefully exists.

### Meadow.CLI
Now available for [download](https://www.wildernesslabs.co/downloads?f=/Meadow_CLI/Latest/MeadowCLI.zip).

<hr />

## Beta 3

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
