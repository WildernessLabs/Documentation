---
title: Interface IBarometricPressureSensor
sidebar_label: IBarometricPressureSensor
description: Pressure sensor interface requirements.
slug: >-
  /docs/api/Meadow/Meadow.Peripherals.Sensors.Atmospheric/IBarometricPressureSensor
---
# Interface IBarometricPressureSensor
Pressure sensor interface requirements.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Atmospheric/IBarometricPressureSensor.cs#L8)
```csharp title="Declaration"
public interface IBarometricPressureSensor : ISamplingSensor<Pressure>, ISensor<Pressure>, ISensor, ISamplingSensor
```
## Properties
### Pressure
Last value read from the Pressure sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Atmospheric/IBarometricPressureSensor.cs#L13)
```csharp title="Declaration"
Pressure? Pressure { get; }
```
