---
title: Interface IElectricalConductivitySensor
sidebar_label: IElectricalConductivitySensor
description: Electrical Conductivity sensor interface requirements.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors/IElectricalConductivitySensor
---
# Interface IElectricalConductivitySensor
Electrical Conductivity sensor interface requirements.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Electrical/IElectricalConductivitySensor.cs#L8)
```csharp title="Declaration"
public interface IElectricalConductivitySensor : ISamplingSensor<Conductivity>, ISensor<Conductivity>, ISensor, ISamplingSensor
```
## Properties
### Conductivity
Last value read from the Conductivity sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Electrical/IElectricalConductivitySensor.cs#L13)
```csharp title="Declaration"
Conductivity? Conductivity { get; }
```
