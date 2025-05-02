---
title: Interface IVOCConcentrationSensor
sidebar_label: IVOCConcentrationSensor
description: Volotile Organic Compounds (VOC) Concentration interface requirements.
slug: >-
  /docs/api/Meadow/Meadow.Peripherals.Sensors.Environmental/IVOCConcentrationSensor
---
# Interface IVOCConcentrationSensor
Volotile Organic Compounds (VOC) Concentration interface requirements.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Environmental/IVOCConcentrationSensor.cs#L8)
```csharp title="Declaration"
public interface IVOCConcentrationSensor : ISamplingSensor<Concentration>, ISensor<Concentration>, ISensor, ISamplingSensor
```
## Properties
### VOCConcentration
Last value read from the VOC Concentration sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Environmental/IVOCConcentrationSensor.cs#L13)
```csharp title="Declaration"
Concentration? VOCConcentration { get; }
```
