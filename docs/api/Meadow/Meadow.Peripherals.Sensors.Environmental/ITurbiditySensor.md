---
title: Interface ITurbiditySensor
sidebar_label: ITurbiditySensor
description: Turbidity sensor interface requirements.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Environmental/ITurbiditySensor
---
# Interface ITurbiditySensor
Turbidity sensor interface requirements.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Environmental/ITurbiditySensor.cs#L8)
```csharp title="Declaration"
public interface ITurbiditySensor : ISamplingSensor<Turbidity>, ISensor<Turbidity>, ISensor, ISamplingSensor
```
## Properties
### Turbidity
Last value read from the Turbidity sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Environmental/ITurbiditySensor.cs#L13)
```csharp title="Declaration"
Turbidity? Turbidity { get; }
```
