---
title: Interface IVolumetricFlowSensor
sidebar_label: IVolumetricFlowSensor
description: Volumetric flow sensor interface requirements.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors/IVolumetricFlowSensor
---
# Interface IVolumetricFlowSensor
Volumetric flow sensor interface requirements.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Flow/IVolumetricFlowSensor.cs#L8)
```csharp title="Declaration"
public interface IVolumetricFlowSensor : ISensor<VolumetricFlow>, ISensor
```
## Properties
### Flow
Last value read from the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Flow/IVolumetricFlowSensor.cs#L13)
```csharp title="Declaration"
VolumetricFlow Flow { get; }
```
