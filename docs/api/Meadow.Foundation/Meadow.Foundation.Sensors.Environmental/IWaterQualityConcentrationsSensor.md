---
title: Interface IWaterQualityConcentrationsSensor
sidebar_label: IWaterQualityConcentrationsSensor
description: Represents a sensor for measuring water quality concentrations
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental/IWaterQualityConcentrationsSensor
---
# Interface IWaterQualityConcentrationsSensor
Represents a sensor for measuring water quality concentrations

###### **Assembly**: Y4000.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/IWaterQualityConcentrationsSensor.cs#L8)
```csharp title="Declaration"
public interface IWaterQualityConcentrationsSensor : ISamplingSensor<WaterQualityConcentrations>, ISensor<WaterQualityConcentrations>, ISensor, ISamplingSensor
```
## Properties
### Concentrations
Last value read from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/IWaterQualityConcentrationsSensor.cs#L13)
```csharp title="Declaration"
WaterQualityConcentrations? Concentrations { get; }
```
