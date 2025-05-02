---
title: Interface ILightSensor
sidebar_label: ILightSensor
description: Light sensor interface requirements.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Light/ILightSensor
---
# Interface ILightSensor
Light sensor interface requirements.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Light/ILightSensor.cs#L8)
```csharp title="Declaration"
public interface ILightSensor : ISamplingSensor<Illuminance>, ISensor<Illuminance>, ISensor, ISamplingSensor
```
## Properties
### Illuminance
Last value read from the Light sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Light/ILightSensor.cs#L13)
```csharp title="Declaration"
Illuminance? Illuminance { get; }
```
