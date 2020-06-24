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

### Application Crash

The dreaded application crash that got introduced a few beta releases back that prevents
Meadow applications from standing up for more than a few minutes has been fixed! [add 
details when avaialble]

### Garbage Collector Tuning

The Mono garbage collector that we use in Meadow.OS got a major tune-up, making it much 
more suited for our architecture and use case. You should find that garbage collection 
works far better now than it did before.

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

## `IFilterableObservable` Changes

## Meadow.Foundation

### GPS Drivers

[TBD]

### GPS/GNSS NMEA Processing

As part of our work to add GPS drivers, we completely re-worked, upgraded, and modernized the 
NMEA sentence parsing and decoding library. It now handles a wider array of sentence structures, 
is more fault tolerant, has a better API and is easier to add new decoders to.
