---
title: Interface IDissolvedOxygenSaturationSensor
sidebar_label: IDissolvedOxygenSaturationSensor
description: Dissolved xxygen saturation interface requirements
slug: >-
  /docs/api/Meadow/Meadow.Peripherals.Sensors.Environmental/IDissolvedOxygenSaturationSensor
---
# Interface IDissolvedOxygenSaturationSensor
Dissolved xxygen saturation interface requirements

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Environmental/IDissolvedOxygenSaturationSensor.cs#L6)
```csharp title="Declaration"
public interface IDissolvedOxygenSaturationSensor : ISamplingSensor<double>, ISensor<double>, ISensor, ISamplingSensor
```
## Properties
### Saturation
Last value read from the dissolved oxygen saturation sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Environmental/IDissolvedOxygenSaturationSensor.cs#L11)
```csharp title="Declaration"
double? Saturation { get; }
```
