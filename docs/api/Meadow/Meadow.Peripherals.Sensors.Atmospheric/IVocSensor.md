---
title: Interface IVocSensor
sidebar_label: IVocSensor
description: Volatile Organic Compound (VOC) sensor interface requirements.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Atmospheric/IVocSensor
---
# Interface IVocSensor
Volatile Organic Compound (VOC) sensor interface requirements.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Atmospheric/IVocSensor.cs#L8)
```csharp title="Declaration"
public interface IVocSensor : ISamplingSensor<Concentration>, ISensor<Concentration>, ISensor, ISamplingSensor
```
## Properties
### Voc
Last value read from the VOC sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Atmospheric/IVocSensor.cs#L13)
```csharp title="Declaration"
Concentration? Voc { get; }
```
