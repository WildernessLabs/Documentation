---
layout: Meadow
title: Meadow Beta 4
subtitle: Release Notes
---


# b4.0

W000t, b4.0 is here! This is a major release that includes a TON of new features, 
stabilizations, upgrades, and more across the entire Meadow platform. Major 
highlights include:

 * **WiFi Networking**
 * **Garbage Collector Tuning**
 * **Application Crash fix**

## Meadow.OS Improvements

### Networking

Yaaaasss! WiFi networking is up! After nearly two years of engineering, Networking 
communications via WiFi are now available to Meadow apps. 

### File System Up

[you can now use the `System.IO` file system calls to work with the local file system]

### Application Crash

The dreaded application crash that got introduced a few beta releases back that prevents
Meadow applications from standing up for more than a few minutes has been fixed! [add 
details when avaialble]

### Garbage Collector Tuning

The Mono garbage collector that we use in Meadow.OS got a major tune-up, making it much 
more suited for our architecture and use case. You should find that garbage collection 
works far better now than it did before.

### Bug Fixes

* [#37 - Threading and event callback lockup](https://github.com/WildernessLabs/Meadow_Issues/issues/37) - Fixed!
* [#62 - Constant 10ms delay when calling Thread.Sleep()](https://github.com/WildernessLabs/Meadow_Issues/issues/62) - Fixed, timer resolution is now 1ms.
* [#67 - RgbPwmLed.StartBlink() does not have accurate timings](https://github.com/WildernessLabs/Meadow_Issues/issues/67) - Fixed, related to timer resolution.
* [#69 - Timer creep](https://github.com/WildernessLabs/Meadow_Issues/issues/69) - Fixed, also related to timer resolution
* [#77 - PWM duration with TimeScale.MicroSecond off by 10µs](https://github.com/WildernessLabs/Meadow_Issues/issues/77) - Fixed, math error. :)
* [#89 - All file system objects appear as files](https://github.com/WildernessLabs/Meadow_Issues/issues/89) - Fixed.


## Meadow.Core Improvements

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

To see the new `ISerialMessagePort` class at work, check out the [GPS thingamajiggy when complete].

### `FilterableObserver` Changes

We made some changes to the filterable observer:

* **Renamed `FilterableObserver` to `FilterableChangeObserver`.** - We made this naming change because the 
  `FilterableObserver`, as designed, was based on change notification and as such had `Old` and `New` 
  values, along with built in comparison. However, it became clear that we should also have a non histrionic
  version for cases where `Old` and `New` had no meaning, so we also:
* **Created a new `FilterableObserver` class that doesn't have histrionics.** - Currently, the various 
  Meadow.Core port classes used a standard `IObservable<out T>`, which was fine, but we wanted to extend
  the built-in filtering mechanism [**TBD.**]

### Meadow.Core Samples

We completely re-did the old `Meadow_Samples` repo and renamed it to 
[`Meadow.Core.Samples`](https://github.com/wildernesslabs/Meadow.Core.Samples). The samples are now much better
organized and all updated to the latest `.csproj` format.

## Meadow.Foundation

[12 new drivers!]

### GPS Drivers

[TBD]

### GPS/GNSS NMEA Processing

As part of our work to add GPS drivers, we completely re-worked, upgraded, and modernized the 
NMEA sentence parsing and decoding library. It now handles a wider array of sentence structures, 
is more fault tolerant, has a better API and is easier to add new decoders to.

## Other Stuff

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

