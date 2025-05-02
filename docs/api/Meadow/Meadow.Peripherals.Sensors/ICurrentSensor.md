---
title: Interface ICurrentSensor
sidebar_label: ICurrentSensor
description: Electrical Current sensor interface requirements.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors/ICurrentSensor
---
# Interface ICurrentSensor
Electrical Current sensor interface requirements.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Electrical/ICurrentSensor.cs#L8)
```csharp title="Declaration"
public interface ICurrentSensor : ISamplingSensor<Current>, ISensor<Current>, ISensor, ISamplingSensor
```
## Properties
### Current
Last value read from the Current sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Electrical/ICurrentSensor.cs#L13)
```csharp title="Declaration"
Current? Current { get; }
```
