---
title: Interface IAccelerometer
sidebar_label: IAccelerometer
description: Represents a generic accelerometer sensor.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Motion/IAccelerometer
---
# Interface IAccelerometer
Represents a generic accelerometer sensor.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Motion/IAccelerometer.cs#L8)
```csharp title="Declaration"
public interface IAccelerometer : ISamplingSensor<Acceleration3D>, ISensor<Acceleration3D>, ISensor, ISamplingSensor
```
## Properties
### Acceleration3D
Last value read from the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Motion/IAccelerometer.cs#L13)
```csharp title="Declaration"
Acceleration3D? Acceleration3D { get; }
```
