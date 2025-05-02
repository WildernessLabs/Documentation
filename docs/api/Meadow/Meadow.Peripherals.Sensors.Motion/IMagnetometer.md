---
title: Interface IMagnetometer
sidebar_label: IMagnetometer
description: >-
  Represents a generic magnetometer sensor that measures the strength and
  direction of a magnetic field
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Motion/IMagnetometer
---
# Interface IMagnetometer
Represents a generic magnetometer sensor that measures the strength and direction of a magnetic field

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Motion/IMagnetometer.cs#L8)
```csharp title="Declaration"
public interface IMagnetometer : ISamplingSensor<MagneticField3D>, ISensor<MagneticField3D>, ISensor, ISamplingSensor
```
## Properties
### MagneticField3D
Last value read from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Motion/IMagnetometer.cs#L13)
```csharp title="Declaration"
MagneticField3D? MagneticField3D { get; }
```
