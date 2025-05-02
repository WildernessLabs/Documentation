---
title: Interface IGyroscope
sidebar_label: IGyroscope
description: Represents a generic gyroscopic sensor that measures angular velocity.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Motion/IGyroscope
---
# Interface IGyroscope
Represents a generic gyroscopic sensor that measures angular velocity.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Motion/IGyroscope.cs#L8)
```csharp title="Declaration"
public interface IGyroscope : ISamplingSensor<AngularVelocity3D>, ISensor<AngularVelocity3D>, ISensor, ISamplingSensor
```
## Properties
### AngularVelocity3D
Last value read from the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Motion/IGyroscope.cs#L13)
```csharp title="Declaration"
AngularVelocity3D? AngularVelocity3D { get; }
```
