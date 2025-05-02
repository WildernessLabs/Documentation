---
title: Class Bme68x.HeaterProfileConfiguration
sidebar_label: Bme68x.HeaterProfileConfiguration
description: The heater profile configuration saved on the device.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric/Bme68x.HeaterProfileConfiguration
---
# Class Bme68x.HeaterProfileConfiguration
The heater profile configuration saved on the device.

###### **Assembly**: Bme68x.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.HeaterProfileConfiguration.cs#L10)
```csharp title="Declaration"
public class Bme68x.HeaterProfileConfiguration
```
## Properties
### HeaterProfile
The chosen heater profile slot, ranging from 0-9
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.HeaterProfileConfiguration.cs#L15)
```csharp title="Declaration"
public Bme68x.HeaterProfileType HeaterProfile { get; set; }
```
### HeaterResistance
The heater resistance.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.HeaterProfileConfiguration.cs#L19)
```csharp title="Declaration"
public ushort HeaterResistance { get; set; }
```
### HeaterDuration
The heater duration in the internally used format
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Driver/Bme68x.HeaterProfileConfiguration.cs#L23)
```csharp title="Declaration"
public TimeSpan HeaterDuration { get; set; }
```
