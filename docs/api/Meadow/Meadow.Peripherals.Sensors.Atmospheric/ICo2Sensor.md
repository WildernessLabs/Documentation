---
title: Interface ICo2Sensor
sidebar_label: ICo2Sensor
description: CO2 sensor interface requirements.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Atmospheric/ICo2Sensor
---
# Interface ICo2Sensor
CO2 sensor interface requirements.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Atmospheric/ICo2Sensor.cs#L8)
```csharp title="Declaration"
public interface ICo2Sensor : ISamplingSensor<Concentration>, ISensor<Concentration>, ISensor, ISamplingSensor
```
## Properties
### Co2
Last value read from the CO2 sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Atmospheric/ICo2Sensor.cs#L13)
```csharp title="Declaration"
Concentration? Co2 { get; }
```
